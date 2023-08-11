import { MonacoEditorLanguageClientWrapper } from './monaco-editor-wrapper/index.js';
import { buildWorkerDefinition } from "./monaco-editor-workers/index.js";

buildWorkerDefinition('./monaco-editor-workers/workers', import.meta.url, false)

const languageId = 'hello';

const workerURL = new URL('./hello-world-server-worker.js', import.meta.url);
const lsWorker = new Worker(workerURL.href, {
    type: 'classic',
    name: 'hello-world-language-server-worker'
});

// setup the language client config with the worker
const languageClientConfig = {
    options: {
        $type: 'WorkerDirect',
        worker: lsWorker
    }
};

lsWorker.postMessage({model: "person A1 person B1 person C1"})


const monacoEditorConfig = {
    glyphMargin: true,
    guides: {
        bracketPairs: true
    },
    lightbulb: {
        enabled: true
    },
    'semanticHighlighting.enabled': true,
};

// keep a reference to a promise for when the editor is finished starting, we'll use this to setup the canvas on load
// create a client wrapper
const client = new MonacoEditorLanguageClientWrapper();
// start the editor
// keep a reference to a promise for when the editor is finished starting, we'll use this to setup the canvas on load
let codeMain = `Hello A1!
Hello B1!
person MyP
Hello MyP!`;


const userConfig = {
    htmlElement: document.getElementById('monaco-editor-root'),
    wrapperConfig: {
        serviceConfig: {
            enableThemeService: true,
            enableTextmateService: true,
            enableModelService: true,
            configureEditorOrViewsServiceConfig: {
            },
            configureConfigurationServiceConfig: {
                defaultWorkspaceUri: '/tmp/'
            },
            enableLanguagesService: true,
            // enable quick access "F1" and add required keybindings service
            enableQuickaccessService: true,
            enableKeybindingsService: true,
            debugLogging: true
        },
        editorAppConfig: {
            $type: 'vscodeApi',
            languageId: languageId,
            code: codeMain,
            useDiffEditor: false,
            extension: {
                name: 'langium-example',
                publisher: 'monaco-languageclient-project',
                version: '1.0.0',
                engines: {
                    vscode: '*'
                },
                contributes: {
                    languages: [{
                        id: 'hello',
                        extensions: [
                            '.hello'
                        ],
                        aliases: [
                            'hello',
                            'Hello'
                        ]
                        // ,
                        // configuration: './statemachine-configuration.json'
                    }]
                    // ,
                    // grammars: [{
                    //     language: 'hello',
                    //     scopeName: 'source.hello'
                    //     // ,
                    //     // path: './statemachine-grammar.json'
                    // }]
                }
            },
            //extensionFilesOrContents: extensionFilesOrContents,
            userConfiguration: {
                json: `{
"workbench.colorTheme": "Default Dark Modern",
"editor.fontSize": 14,
"editor.lightbulb.enabled": true,
"editor.guides.bracketPairsHorizontal": "active",
"editor.lightbulb.enabled": true
}`
            }
        }
    },
    languageClientConfig: languageClientConfig
    
};
client.start(userConfig);
