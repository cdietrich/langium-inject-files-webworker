import { MonacoEditorLanguageClientWrapper } from './monaco-editor-wrapper/index.js';
import { buildWorkerDefinition } from "./monaco-editor-workers/index.js";

buildWorkerDefinition('./monaco-editor-workers/workers', new URL('', window.location.href).href, false)

const languageId = 'hello-world';

const code = `// Hello World is running in the web!
Hello A1!`;

const editorConfig = {
    languageId,
    code,
    useDiffEditor: false,
    //automaticLayout: true,
    theme: 'vs-dark',
   // 'semanticHighlighting.enabled': true
};


const workerURL = new URL('./hello-world-server-worker.js', import.meta.url);
const lsWorker = new Worker(workerURL.href, {
    type: 'classic',
    name: 'hello-world-language-server-worker'
});

// setup the language client config with the worker
const languageClientConfig = {
    enabled: true,
    useWebSocket: false,
    // can pass configuration data, or a pre-configured worker as well
    // the later works better for us in this case
    workerConfigOptions: lsWorker
};

lsWorker.postMessage({model: "person A1 person B1 person C1"})


const serviceConfig = {
    // the theme service & textmate services are dependent, they need to both be enabled or disabled together
    // this explicitly disables the Monarch capabilities
    // both are tied to whether we are using the VSCode config as well
    enableThemeService: false,
    enableTextmateService: false,

    enableModelService: true,
    configureEditorOrViewsServiceConfig: {
        enableViewsService: false,
        useDefaultOpenEditorFunction: true
    },
    configureConfigurationServiceConfig: {
        defaultWorkspaceUri: '/tmp/'
    },
    enableKeybindingsService: true,
    enableLanguagesService: true,
    // if you want debugging facilities, keep this on
    debugLogging: true
};

const monarchGrammar = {
    // recognized keywords
    keywords: [
        'color','def','down','for','move','pen','to','up'
    ],
    // recognized operators
    operators: [
        '-',',','*','/','+','='
    ],
    // pattern for symbols we want to highlight
    symbols:  /-|,|\(|\)|\{|\}|\*|\/|\+|=/,

    // tokenizer itself, starts at the first 'state' (entry), which happens to be 'initial'
    tokenizer: {
        // initial tokenizer state
        initial: [
            { regex: /#(\d|[a-fA-F])+/, action: {"token":"string"} },
            { regex: /[_a-zA-Z][\w_]*/, action: { cases: { '@keywords': {"token":"keyword"}, '@default': {"token":"string"} }} },
            { regex: /-?[0-9]+/, action: {"token":"number"} },
            // inject the rules for the 'whitespace' state here, effectively inlined
            { include: '@whitespace' },
            { regex: /@symbols/, action: { cases: { '@operators': {"token":"operator"}, '@default': {"token":""} }} },
        ],
        // state for parsing whitespace
        whitespace: [
            { regex: /\s+/, action: {"token":"white"} },
            // for this rule, if we match, push up the next state as 'comment', advancing to the set of rules below
            { regex: /\/\*/, action: {"token":"comment","next":"@comment"} },
            { regex: /\/\/[^\n\r]*/, action: {"token":"comment"} },
        ],
        // state for parsing a comment
        comment: [
            { regex: /[^\/\*]+/, action: {"token":"comment"} },
            // done with this comment, pop the current state & roll back to the previous one
            { regex: /\*\//, action: {"token":"comment","next":"@pop"} },
            { regex: /[\/\*]/, action: {"token":"comment"} },
        ],
    }
};

// keep a reference to a promise for when the editor is finished starting, we'll use this to setup the canvas on load
// create a client wrapper
const client = new MonacoEditorLanguageClientWrapper();
// start the editor
// keep a reference to a promise for when the editor is finished starting, we'll use this to setup the canvas on load
const startingPromise = client.start({
    htmlElement: document.getElementById("monaco-editor-root"),
    wrapperConfig: {
        // setting this to false disables using the VSCode config, and instead favors
        // the monaco editor config (classic editor)
        useVscodeConfig: false,
        serviceConfig,
        // Editor config (classic) (for Monarch)
        monacoEditorConfig: {
            languageExtensionConfig: { id: languageId },
            languageDef: monarchGrammar
        }
    },
    editorConfig,
    languageClientConfig
});
