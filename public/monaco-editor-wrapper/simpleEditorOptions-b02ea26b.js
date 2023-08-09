import { hp as m, D as v, aI as b, _ as I, a as l, tY as x, fY as L, pX as M, a0 as D, q7 as w, pY as y, aF as P, fV as S, cw as u, ct as g, tZ as E, t_ as T, sm as K, sn as R, rA as O } from "./index-6dabdcd0.js";
import { g as N, S as W } from "./snippetsService-20356648.js";
class d extends v {
  constructor(e) {
    super(), this._editor = e, this._altListeningMouse = !1, this._altMouseTriggered = !1, this._register(this._editor.onMouseDown((t) => {
      this._altListeningMouse && (this._altMouseTriggered = !0);
    })), this._register(this._editor.onKeyDown((t) => {
      t.equals(512) && (this._altListeningMouse || (this._altMouseTriggered = !1), this._altListeningMouse = !0);
    })), this._register(this._editor.onKeyUp((t) => {
      t.equals(512) && (this._altMouseTriggered && t.preventDefault(), this._altListeningMouse = !1, this._altMouseTriggered = !1);
    }));
  }
}
d.ID = "editor.contrib.menuPreventer";
m(d.ID, d, 2);
const F = "editor.contrib.selectionClipboard";
let i = class c {
  static get(e) {
    return e.getContribution(c.ID);
  }
  constructor(e, t, s, o, a) {
    this._editor = e, this._snippetService = t, this._clipboardService = s, this._languageFeaturesService = o, this._activeSnippets = [], this._hasSnippets = c.ContextKey.bindTo(a), this._configListener = this._editor.onDidChangeConfiguration((p) => {
      p.hasChanged(119) && this._update();
    }), this._update();
  }
  dispose() {
    var e;
    this._configListener.dispose(), (e = this._selectionListener) == null || e.dispose();
  }
  _update() {
    var t;
    const e = this._editor.getOption(119) === "onlySnippets";
    this._enabled !== e && (this._enabled = e, this._enabled ? (this._selectionListener = this._editor.onDidChangeCursorSelection((s) => this._updateSnippets()), this._editor.getModel() && this._updateSnippets()) : (t = this._selectionListener) == null || t.dispose());
  }
  _updateSnippets() {
    var p;
    if (this._activeSnippets = [], (p = this._completionProvider) == null || p.dispose(), !this._editor.hasModel())
      return;
    const e = this._editor.getSelection(), t = this._editor.getModel();
    t.tokenization.tokenizeIfCheap(e.positionLineNumber);
    const s = t.getLanguageIdAtPosition(e.positionLineNumber, e.positionColumn), o = this._snippetService.getSnippetsSync(s);
    if (!o) {
      this._hasSnippets.set(!1);
      return;
    }
    if (g.isEmpty(e)) {
      const n = N(t, e.getPosition());
      if (n)
        for (const r of o)
          n.endsWith(r.prefix) && this._activeSnippets.push(r);
    } else if (!g.spansMultipleLines(e) && t.getValueLengthInRange(e) <= 100) {
      const n = t.getValueInRange(e);
      if (n)
        for (const r of o)
          n === r.prefix && this._activeSnippets.push(r);
    }
    const a = this._activeSnippets.length;
    if (a === 0)
      this._hasSnippets.set(!1);
    else if (a === 1)
      this._hasSnippets.set(!0);
    else {
      this._hasSnippets.set(!0), this._completionProvider = {
        dispose: () => {
          n.dispose();
        },
        provideCompletionItems: (r, h) => r !== t || !e.containsPosition(h) ? void 0 : { suggestions: this._activeSnippets.map((_) => {
          const C = g.fromPositions(h.delta(0, -_.prefix.length), h);
          return new W(_, C);
        }) }
      };
      const n = this._languageFeaturesService.completionProvider.register({ language: t.getLanguageId(), pattern: t.uri.fsPath, scheme: t.uri.scheme }, this._completionProvider);
    }
  }
  async performSnippetCompletions() {
    var e;
    if (this._editor.hasModel())
      if (this._activeSnippets.length === 1) {
        const [t] = this._activeSnippets;
        let s;
        if (t.needsClipboard) {
          const o = new E(
            this._editor,
            5
          );
          if (s = await this._clipboardService.readText(), !o.validate(this._editor))
            return;
        }
        (e = u.get(this._editor)) == null || e.insert(t.codeSnippet, {
          overwriteBefore: t.prefix.length,
          overwriteAfter: 0,
          clipboardText: s
        });
      } else
        this._activeSnippets.length > 1 && this._completionProvider && T(this._editor, this._completionProvider);
  }
};
i.ID = "editor.tabCompletionController";
i.ContextKey = new b("hasSnippetCompletions", void 0);
i = I([
  l(1, x),
  l(2, L),
  l(3, M),
  l(4, D)
], i);
m(i.ID, i, 0);
const k = w.bindToContribution(i.get);
y(new k({
  id: "insertSnippet",
  precondition: i.ContextKey,
  handler: (f) => f.performSnippetCompletions(),
  kbOpts: {
    weight: 100,
    kbExpr: P.and(
      S.editorTextFocus,
      S.tabDoesNotMoveFocus,
      u.InSnippetMode.toNegated()
    ),
    primary: 2
  }
}));
function B() {
  return {
    wordWrap: "on",
    overviewRulerLanes: 0,
    glyphMargin: !1,
    lineNumbers: "off",
    folding: !1,
    selectOnLineNumbers: !1,
    hideCursorInOverviewRuler: !0,
    selectionHighlight: !1,
    scrollbar: {
      horizontal: "hidden"
    },
    lineDecorationsWidth: 0,
    overviewRulerBorder: !1,
    scrollBeyondLastLine: !1,
    renderLineHighlight: "none",
    fixedOverflowWidgets: !0,
    acceptSuggestionOnEnter: "smart",
    dragAndDrop: !1,
    revealHorizontalRightPadding: 5,
    minimap: {
      enabled: !1
    },
    guides: {
      indentation: !1
    }
  };
}
function H() {
  return {
    isSimpleWidget: !0,
    contributions: K.getSomeEditorContributions([
      d.ID,
      F,
      R.ID,
      O.ID,
      u.ID,
      i.ID
    ])
  };
}
export {
  d as M,
  F as S,
  B as a,
  H as g
};