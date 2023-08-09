import { _ as b, a as r, X as f, L as I, a0 as v, Y as C, jB as x, qz as g, nc as d, $ as a, H as c, aa as p, b1 as h, ac as _ } from "./index-6dabdcd0.js";
let w = class extends x {
  get onDidChangeDropdownVisibility() {
    return this._dropdown.onDidChangeVisibility;
  }
  constructor(e, t, n, i, o, m, l, u, y, A) {
    var s;
    super(null, e), this._contextMenuProvider = o, this._options = m, this._container = null, this._dropdownContainer = null, this._primaryAction = new g(
      e,
      void 0,
      l,
      u,
      y,
      A,
      o
    ), this._dropdown = new d(t, n, this._contextMenuProvider, {
      menuAsChild: !0,
      classNames: i ? ["codicon", "codicon-chevron-down", i] : ["codicon", "codicon-chevron-down"],
      keybindingProvider: (s = this._options) == null ? void 0 : s.getKeyBinding
    });
  }
  setActionContext(e) {
    super.setActionContext(e), this._primaryAction.setActionContext(e), this._dropdown.setActionContext(e);
  }
  render(e) {
    this._container = e, super.render(this._container), this._container.classList.add("monaco-dropdown-with-primary");
    const t = a(".action-container");
    this._primaryAction.render(c(this._container, t)), this._dropdownContainer = a(".dropdown-action-container"), this._dropdown.render(c(this._container, this._dropdownContainer)), this._register(p(t, _.KEY_DOWN, (n) => {
      const i = new h(n);
      i.equals(17) && (this._primaryAction.element.tabIndex = -1, this._dropdown.focus(), i.stopPropagation());
    })), this._register(p(this._dropdownContainer, _.KEY_DOWN, (n) => {
      var o;
      const i = new h(n);
      i.equals(15) && (this._primaryAction.element.tabIndex = 0, this._dropdown.setFocusable(!1), (o = this._primaryAction.element) == null || o.focus(), i.stopPropagation());
    }));
  }
  focus(e) {
    e ? this._dropdown.focus() : (this._primaryAction.element.tabIndex = 0, this._primaryAction.element.focus());
  }
  blur() {
    this._primaryAction.element.tabIndex = -1, this._dropdown.blur(), this._container.blur();
  }
  setFocusable(e) {
    e ? this._primaryAction.element.tabIndex = 0 : (this._primaryAction.element.tabIndex = -1, this._dropdown.setFocusable(!1));
  }
  update(e, t, n) {
    this._dropdown.dispose(), this._dropdown = new d(e, t, this._contextMenuProvider, {
      menuAsChild: !0,
      classNames: ["codicon", n || "codicon-chevron-down"]
    }), this._dropdownContainer && this._dropdown.render(this._dropdownContainer);
  }
  dispose() {
    this._primaryAction.dispose(), this._dropdown.dispose(), super.dispose();
  }
};
w = b([
  r(6, f),
  r(7, I),
  r(8, v),
  r(9, C)
], w);
export {
  w as D
};