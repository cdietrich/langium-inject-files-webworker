import { MonacoEditorLanguageClientWrapper } from './monaco-editor-wrapper/index.js';
import { buildWorkerDefinition } from "./monaco-editor-workers/index.js";
//import monarchSyntax from "./syntaxes/hello-world.monarch.js";

buildWorkerDefinition('./monaco-editor-workers/workers', new URL('', window.location.href).href, false);

MonacoEditorLanguageClientWrapper.addMonacoStyles('monaco-editor-styles');

const client = new MonacoEditorLanguageClientWrapper();
const editorConfig = client.getEditorConfig();
editorConfig.setMainLanguageId('hello-world');

//editorConfig.setMonarchTokensProvider(monarchSyntax);

editorConfig.setMainCode(`// Hello World is running in the web!
Hello A1!`);

editorConfig.theme = 'vs-dark';
editorConfig.useLanguageClient = true;
editorConfig.useWebSocket = false;

editorConfig.setMonacoEditorOptions({
    'semanticHighlighting.enabled': true
})


const workerURL = new URL('./hello-world-server-worker.js', import.meta.url);
console.log(workerURL.href);

const lsWorker = new Worker(workerURL.href, {
    type: 'classic',
    name: 'HelloWorld Language Server'
});
lsWorker.postMessage({model: "person A1 person B1 person C1"})
client.setWorker(lsWorker);

// keep a reference to a promise for when the editor is finished starting, we'll use this to setup the canvas on load
const startingPromise = client.startEditor(document.getElementById("monaco-editor-root"));
