import {
    createDefaultModule, createDefaultSharedModule, DeepPartial, DefaultSharedModuleContext, inject,
    LangiumServices, LangiumSharedServices, Module, PartialLangiumServices
} from 'langium';
import { HelloWorldGeneratedModule, HelloWorldGeneratedSharedModule } from './generated/module';
import { HelloWorldValidator, registerValidationChecks } from './hello-world-validator';
import { HelloWorldWorkspaceManager } from './HelloWorldWorkspaceManager';

/**
 * Declaration of custom services - add your own service classes here.
 */
export type HelloWorldAddedServices = {
    validation: {
        HelloWorldValidator: HelloWorldValidator
    }
}

/**
 * Union of Langium default services and your custom services - use this as constructor parameter
 * of custom service classes.
 */
export type HelloWorldServices = LangiumServices & HelloWorldAddedServices

/**
 * Dependency injection module that overrides Langium default services and contributes the
 * declared custom services. The Langium defaults can be partially specified to override only
 * selected services, while the custom services must be fully specified.
 */
export const HelloWorldModule: Module<HelloWorldServices, PartialLangiumServices & HelloWorldAddedServices> = {
    validation: {
        HelloWorldValidator: () => new HelloWorldValidator()
    }
};

/**
 * Create the full set of services required by Langium.
 *
 * First inject the shared services by merging two modules:
 *  - Langium default shared services
 *  - Services generated by langium-cli
 *
 * Then inject the language-specific services by merging three modules:
 *  - Langium default language-specific services
 *  - Services generated by langium-cli
 *  - Services specified in this file
 *
 * @param context Optional module context with the LSP connection
 * @returns An object wrapping the shared services and the language-specific services
 */
export function createHelloWorldServices(context: DefaultSharedModuleContext, fakeModel?: string): {
    shared: LangiumSharedServices,
    HelloWorld: HelloWorldServices
} {
    const shared = inject(
        createDefaultSharedModule(context),
        HelloWorldGeneratedSharedModule,
        fakeModel !== undefined ? HelloWorldSharedModule(fakeModel) : {}
    );
    const HelloWorld = inject(
        createDefaultModule({ shared }),
        HelloWorldGeneratedModule,
        HelloWorldModule
    );
    shared.ServiceRegistry.register(HelloWorld);
    registerValidationChecks(HelloWorld);
    return { shared, HelloWorld };
}

export type HelloWorldSharedServices = LangiumSharedServices;

function HelloWorldSharedModule(fakeModel: string): Module<HelloWorldSharedServices, DeepPartial<HelloWorldSharedServices>> {
    return {
        workspace: {
            WorkspaceManager: (services) => new HelloWorldWorkspaceManager(services, fakeModel)
        }
    }
    
} 