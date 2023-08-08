import { EmptyFileSystem, startLanguageServer } from 'langium';
import { BrowserMessageReader, BrowserMessageWriter, createConnection } from 'vscode-languageserver/browser';
import { createHelloWorldServices } from './hello-world-module';

declare const self: DedicatedWorkerGlobalScope;

self.onmessage = (ev) => {
    let model = ""
    let parsedModel = ev.data["model"]
    if (typeof parsedModel === 'string') {
        model = parsedModel;
    }
    console.log("mimimi2 " + ev.data["model"])
    // const loc = self.location
    // let url = new URL(loc.toString())
    
    // for (const [key, value] of url.searchParams) {
    //     console.log(key, " -> ", value);
    //     if ("model" == key) {
    //         model = value
    //     }
    // }

    const messageReader = new BrowserMessageReader(self);
    const messageWriter = new BrowserMessageWriter(self);

    const connection = createConnection(messageReader, messageWriter);

    const { shared } = createHelloWorldServices({ connection, ...EmptyFileSystem }, model);

    startLanguageServer(shared);
}


