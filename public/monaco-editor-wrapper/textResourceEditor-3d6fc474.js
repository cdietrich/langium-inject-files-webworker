import { _ as f, a as i, O as S, e as E, N as h, dd as x, Y as L, dx as v, cx as m, g as C, I as b, bC as w, uE as M, uF as R, l as y, uG as A, mD as D, ks as c, kx as N, p_ as I, z as _ } from "./index-6dabdcd0.js";
let l = class extends M {
  constructor(e, r, t, a, o, s, n, d, u) {
    super(e, r, t, a, o, s, d, n, u);
  }
  async setInput(e, r, t, a) {
    await super.setInput(e, r, t, a);
    const o = await e.resolve(r);
    if (a.isCancellationRequested)
      return;
    if (!(o instanceof R))
      throw new Error("Unable to open file as text");
    const s = y(this.editorControl), n = o.textEditorModel;
    if (s.setModel(n), !A(r == null ? void 0 : r.viewState)) {
      const d = this.loadEditorViewState(e, t);
      d && (r != null && r.selection && (d.cursorState = []), s.restoreViewState(d));
    }
    r && D(r, s, 1), s.updateOptions({ readOnly: o.isReadonly() });
  }
  revealLastLine() {
    const e = this.editorControl;
    if (!e)
      return;
    const r = e.getModel();
    if (r) {
      const t = r.getLineCount();
      e.revealPosition({ lineNumber: t, column: r.getLineMaxColumn(t) }, 0);
    }
  }
  clearInput() {
    var e;
    super.clearInput(), (e = this.editorControl) == null || e.setModel(null);
  }
  tracksEditorViewState(e) {
    return e instanceof c || e instanceof N;
  }
};
l = f([
  i(1, S),
  i(2, E),
  i(3, h),
  i(4, x),
  i(5, L),
  i(6, v),
  i(7, m),
  i(8, C)
], l);
let g = class p extends l {
  constructor(e, r, t, a, o, s, n, d, u, T) {
    super(p.ID, e, r, t, a, o, n, s, T), this.modelService = d, this.languageService = u;
  }
  createEditorControl(e, r) {
    super.createEditorControl(e, r);
    const t = this.editorControl;
    t && this._register(t.onDidPaste((a) => this.onDidEditorPaste(a, t)));
  }
  onDidEditorPaste(e, r) {
    if (this.input instanceof c && this.input.model.hasLanguageSetExplicitly || e.range.startLineNumber !== 1 || e.range.startColumn !== 1 || r.getOption(88))
      return;
    const t = r.getModel();
    if (!t || !(t.getLineCount() === e.range.endLineNumber && t.getLineMaxColumn(e.range.endLineNumber) === e.range.endColumn) || t.getLanguageId() !== I)
      return;
    let s;
    if (e.languageId)
      s = { id: e.languageId, source: "event" };
    else {
      const n = _(this.languageService.guessLanguageIdByFilepathOrFirstLine(t.uri, t.getLineContent(1).substr(0, 1e3)));
      n && (s = { id: n, source: "guess" });
    }
    if (s && s.id !== I) {
      this.input instanceof c && s.source === "event" ? this.input.model.setLanguageId(s.id) : t.setLanguage(this.languageService.createById(s.id));
      const n = this.modelService.getCreationOptions(t.getLanguageId(), t.uri, t.isForSimpleWidget);
      t.detectIndentation(n.insertSpaces, n.tabSize);
    }
  }
};
g.ID = "workbench.editors.textResourceEditor";
g = f([
  i(0, S),
  i(1, E),
  i(2, h),
  i(3, x),
  i(4, L),
  i(5, m),
  i(6, v),
  i(7, b),
  i(8, w),
  i(9, C)
], g);
export {
  l as A,
  g as T
};
