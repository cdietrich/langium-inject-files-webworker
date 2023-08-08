import { EmptyFileSystem, startLanguageServer } from 'langium';
import { BrowserMessageReader, BrowserMessageWriter, createConnection } from 'vscode-languageserver/browser';
import { createHelloWorldServices } from './hello-world-module';

declare const self: DedicatedWorkerGlobalScope;
const loc = self.location
let url = new URL(loc.toString())
for (const [key, value] of url.searchParams) {
    console.log(key, " -> ", value);
}

const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);

const connection = createConnection(messageReader, messageWriter);

const { shared } = createHelloWorldServices({ connection, ...EmptyFileSystem }, "person A person B person C");

startLanguageServer(shared);
