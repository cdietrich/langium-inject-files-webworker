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
            // enable quick access "F1" and add required keybindings service
            enableQuickaccessService: true,
            enableKeybindingsService: true,
            enableThemeService: true,
            enableTextmateService: true,
            enableLanguagesService: true,
            debugLogging: true
        },
        editorAppConfig: {
            $type: 'classic',
            languageId: languageId,
            code: codeMain,
            useDiffEditor: false,
            editorOptions: monacoEditorConfig,
            diffEditorOptions: monacoEditorConfig,
            theme: 'vs-dark',
            languageExtensionConfig: {
                id: 'hello',
                extensions: ['.hello'],
                aliases: ['HELLO', 'hello']
            }
        }
    },
    languageClientConfig: languageClientConfig
};
client.start(userConfig);
