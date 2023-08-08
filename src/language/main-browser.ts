import { EmptyFileSystem, startLanguageServer } from 'langium';
import { BrowserMessageReader, BrowserMessageWriter, createConnection } from 'vscode-languageserver/browser';
import { createHelloWorldServices } from './hello-world-module';

declare const self: DedicatedWorkerGlobalScope;

// will be repaced on first call
self.onmessage = (ev) => {
    let model = ""
    let parsedModel = ev.data["model"]
    if (typeof parsedModel === 'string') {
        model = parsedModel;
    }
    console.log("mimimi2 " + ev.data["model"])
    console.log(model)

    const messageReader = new BrowserMessageReader(self);
    const messageWriter = new BrowserMessageWriter(self);

    const connection = createConnection(messageReader, messageWriter);

    const { shared } = createHelloWorldServices({ connection, ...EmptyFileSystem }, model);

    startLanguageServer(shared);
}


