import { w as R, o as Z, k7 as W, z as D, iw as ee, t as Q, nn as te, iM as ie, hl as oe, y8 as ne, hn as se, B as h, D as U, bz as Y, X as H, a3 as ae, kz as re, rM as ce, e as X, bO as G, O as B, bD as k, N as j, aQ as N, qE as de, y as le, e_ as ue, rR as me, rO as he, rS as ge, uM as K, xg as $, aP as fe, _ as ve, a as v, cx as pe, aS as Ce, a1 as Ie, dx as be, bM as Se, aT as ye, jK as Ee, y9 as z, x4 as Ae, kf as Pe, pU as Le, av as we, bj as Re, r9 as De, dw as Te, aH as xe, bY as He, ak as M, dW as ke, aU as Ne } from "./index-6dabdcd0.js";
class Me {
  constructor(e) {
    this.options = e, this.rangeHighlightDecorationId = void 0;
  }
  //#region Provider methods
  provide(e, t) {
    var i;
    const o = new R();
    e.canAcceptInBackground = !!(!((i = this.options) === null || i === void 0) && i.canAcceptInBackground), e.matchOnLabel = e.matchOnDescription = e.matchOnDetail = e.sortByLabel = !1;
    const n = o.add(new Z());
    return n.value = this.doProvide(e, t), o.add(this.onDidActiveTextEditorControlChange(() => {
      n.value = void 0, n.value = this.doProvide(e, t);
    })), o;
  }
  doProvide(e, t) {
    const i = new R(), o = this.activeTextEditorControl;
    if (o && this.canProvideWithTextEditor(o)) {
      const n = { editor: o }, s = W(o);
      if (s) {
        let a = D(o.saveViewState());
        i.add(s.onDidChangeCursorPosition(() => {
          a = D(o.saveViewState());
        })), n.restoreViewState = () => {
          a && o === this.activeTextEditorControl && o.restoreViewState(a);
        }, i.add(ee(t.onCancellationRequested)(() => {
          var r;
          return (r = n.restoreViewState) === null || r === void 0 ? void 0 : r.call(n);
        }));
      }
      i.add(Q(() => this.clearDecorations(o))), i.add(this.provideWithTextEditor(n, e, t));
    } else
      i.add(this.provideWithoutTextEditor(e, t));
    return i;
  }
  /**
   * Subclasses to implement if they can operate on the text editor.
   */
  canProvideWithTextEditor(e) {
    return !0;
  }
  gotoLocation({ editor: e }, t) {
    e.setSelection(t.range), e.revealRangeInCenter(
      t.range,
      0
      /* ScrollType.Smooth */
    ), t.preserveFocus || e.focus();
    const i = e.getModel();
    i && "getLineContent" in i && te(`${i.getLineContent(t.range.startLineNumber)}`);
  }
  getModel(e) {
    var t;
    return ie(e) ? (t = e.getModel()) === null || t === void 0 ? void 0 : t.modified : e.getModel();
  }
  addDecorations(e, t) {
    e.changeDecorations((i) => {
      const o = [];
      this.rangeHighlightDecorationId && (o.push(this.rangeHighlightDecorationId.overviewRulerDecorationId), o.push(this.rangeHighlightDecorationId.rangeHighlightId), this.rangeHighlightDecorationId = void 0);
      const n = [
        // highlight the entire line on the range
        {
          range: t,
          options: {
            description: "quick-access-range-highlight",
            className: "rangeHighlight",
            isWholeLine: !0
          }
        },
        // also add overview ruler highlight
        {
          range: t,
          options: {
            description: "quick-access-range-highlight-overview",
            overviewRuler: {
              color: oe(ne),
              position: se.Full
            }
          }
        }
      ], [s, a] = i.deltaDecorations(o, n);
      this.rangeHighlightDecorationId = { rangeHighlightId: s, overviewRulerDecorationId: a };
    });
  }
  clearDecorations(e) {
    const t = this.rangeHighlightDecorationId;
    t && (e.changeDecorations((i) => {
      i.deltaDecorations([
        t.overviewRulerDecorationId,
        t.rangeHighlightId
      ], []);
    }), this.rangeHighlightDecorationId = void 0);
  }
}
class _ extends Me {
  constructor() {
    super({ canAcceptInBackground: !0 });
  }
  provideWithoutTextEditor(e) {
    const t = h("cannotRunGotoLine", "Open a text editor first to go to a line.");
    return e.items = [{ label: t }], e.ariaLabel = t, U.None;
  }
  provideWithTextEditor(e, t, i) {
    const o = e.editor, n = new R();
    n.add(t.onDidAccept((r) => {
      const [d] = t.selectedItems;
      if (d) {
        if (!this.isValidLineNumber(o, d.lineNumber))
          return;
        this.gotoLocation(e, { range: this.toRange(d.lineNumber, d.column), keyMods: t.keyMods, preserveFocus: r.inBackground }), r.inBackground || t.hide();
      }
    }));
    const s = () => {
      const r = this.parsePosition(o, t.value.trim().substr(_.PREFIX.length)), d = this.getPickLabel(o, r.lineNumber, r.column);
      if (t.items = [{
        lineNumber: r.lineNumber,
        column: r.column,
        label: d
      }], t.ariaLabel = d, !this.isValidLineNumber(o, r.lineNumber)) {
        this.clearDecorations(o);
        return;
      }
      const l = this.toRange(r.lineNumber, r.column);
      o.revealRangeInCenter(
        l,
        0
        /* ScrollType.Smooth */
      ), this.addDecorations(o, l);
    };
    s(), n.add(t.onDidChangeValue(() => s()));
    const a = W(o);
    return a && a.getOptions().get(
      65
      /* EditorOption.lineNumbers */
    ).renderType === 2 && (a.updateOptions({ lineNumbers: "on" }), n.add(Q(() => a.updateOptions({ lineNumbers: "relative" })))), n;
  }
  toRange(e = 1, t = 1) {
    return {
      startLineNumber: e,
      startColumn: t,
      endLineNumber: e,
      endColumn: t
    };
  }
  parsePosition(e, t) {
    const i = t.split(/,|:|#/).map((n) => parseInt(n, 10)).filter((n) => !isNaN(n)), o = this.lineCount(e) + 1;
    return {
      lineNumber: i[0] > 0 ? i[0] : o + i[0],
      column: i[1]
    };
  }
  getPickLabel(e, t, i) {
    if (this.isValidLineNumber(e, t))
      return this.isValidColumn(e, t, i) ? h("gotoLineColumnLabel", "Go to line {0} and character {1}.", t, i) : h("gotoLineLabel", "Go to line {0}.", t);
    const o = e.getPosition() || { lineNumber: 1, column: 1 }, n = this.lineCount(e);
    return n > 1 ? h("gotoLineLabelEmptyWithLimit", "Current Line: {0}, Character: {1}. Type a line number between 1 and {2} to navigate to.", o.lineNumber, o.column, n) : h("gotoLineLabelEmpty", "Current Line: {0}, Character: {1}. Type a line number to navigate to.", o.lineNumber, o.column);
  }
  isValidLineNumber(e, t) {
    return !t || typeof t != "number" ? !1 : t > 0 && t <= this.lineCount(e);
  }
  isValidColumn(e, t, i) {
    if (!i || typeof i != "number")
      return !1;
    const o = this.getModel(e);
    if (!o)
      return !1;
    const n = { lineNumber: t, column: i };
    return o.validatePosition(n).equals(n);
  }
  lineCount(e) {
    var t, i;
    return (i = (t = this.getModel(e)) === null || t === void 0 ? void 0 : t.getLineCount()) !== null && i !== void 0 ? i : 0;
  }
}
_.PREFIX = ":";
var _e = globalThis && globalThis.__decorate || function(f, e, t, i) {
  var o = arguments.length, n = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(f, e, t, i);
  else
    for (var a = f.length - 1; a >= 0; a--)
      (s = f[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(e, t, n) : s(e, t)) || n);
  return o > 3 && n && Object.defineProperty(e, t, n), n;
}, q = globalThis && globalThis.__param || function(f, e) {
  return function(t, i) {
    e(t, i, f);
  };
};
let x = class P {
  constructor(e, t) {
    this.quickInputService = e, this.keybindingService = t, this.registry = ae.as(re.Quickaccess);
  }
  provide(e) {
    const t = new R();
    return t.add(e.onDidAccept(() => {
      const [i] = e.selectedItems;
      i && this.quickInputService.quickAccess.show(i.prefix, { preserveValue: !0 });
    })), t.add(e.onDidChangeValue((i) => {
      const o = this.registry.getQuickAccessProvider(i.substr(P.PREFIX.length));
      o && o.prefix && o.prefix !== P.PREFIX && this.quickInputService.quickAccess.show(o.prefix, { preserveValue: !0 });
    })), e.items = this.getQuickAccessProviders().filter((i) => i.prefix !== P.PREFIX), t;
  }
  getQuickAccessProviders() {
    return this.registry.getQuickAccessProviders().sort((t, i) => t.prefix.localeCompare(i.prefix)).flatMap((t) => this.createPicks(t));
  }
  createPicks(e) {
    return e.helpEntries.map((t) => {
      const i = t.prefix || e.prefix, o = i || "…";
      return {
        prefix: i,
        label: o,
        keybinding: t.commandId ? this.keybindingService.lookupKeybinding(t.commandId) : void 0,
        ariaLabel: h("helpPickAriaLabel", "{0}, {1}", o, t.description),
        description: t.description
      };
    });
  }
};
x.PREFIX = "?";
x = _e([
  q(0, Y),
  q(1, H)
], x);
var J = globalThis && globalThis.__decorate || function(f, e, t, i) {
  var o = arguments.length, n = o < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(f, e, t, i);
  else
    for (var a = f.length - 1; a >= 0; a--)
      (s = f[a]) && (n = (o < 3 ? s(n) : o > 3 ? s(e, t, n) : s(e, t)) || n);
  return o > 3 && n && Object.defineProperty(e, t, n), n;
}, b = globalThis && globalThis.__param || function(f, e) {
  return function(t, i) {
    e(t, i, f);
  };
}, T = globalThis && globalThis.__awaiter || function(f, e, t, i) {
  function o(n) {
    return n instanceof t ? n : new t(function(s) {
      s(n);
    });
  }
  return new (t || (t = Promise))(function(n, s) {
    function a(l) {
      try {
        d(i.next(l));
      } catch (m) {
        s(m);
      }
    }
    function r(l) {
      try {
        d(i.throw(l));
      } catch (m) {
        s(m);
      }
    }
    function d(l) {
      l.done ? n(l.value) : o(l.value).then(a, r);
    }
    d((i = i.apply(f, e || [])).next());
  });
};
let E = class L extends de {
  constructor(e, t, i, o, n, s) {
    super(L.PREFIX, e), this.instantiationService = t, this.keybindingService = i, this.commandService = o, this.telemetryService = n, this.dialogService = s, this.commandsHistory = this._register(this.instantiationService.createInstance(I)), this.options = e;
  }
  _getPicks(e, t, i, o) {
    var n, s;
    return T(this, void 0, void 0, function* () {
      const a = yield this.getCommandPicks(i);
      if (i.isCancellationRequested)
        return [];
      const r = [];
      for (const c of a) {
        const g = D(L.WORD_FILTER(e, c.label)), C = c.commandAlias ? D(L.WORD_FILTER(e, c.commandAlias)) : void 0;
        g || C ? (c.highlights = {
          label: g,
          detail: this.options.showAlias ? C : void 0
        }, r.push(c)) : e === c.commandId && r.push(c);
      }
      const d = /* @__PURE__ */ new Map();
      for (const c of r) {
        const g = d.get(c.label);
        g ? (c.description = c.commandId, g.description = g.commandId) : d.set(c.label, c);
      }
      r.sort((c, g) => {
        const C = this.commandsHistory.peek(c.commandId), S = this.commandsHistory.peek(g.commandId);
        if (C && S)
          return C > S ? -1 : 1;
        if (C)
          return -1;
        if (S)
          return 1;
        if (this.options.suggestedCommandIds) {
          const F = this.options.suggestedCommandIds.has(c.commandId), V = this.options.suggestedCommandIds.has(g.commandId);
          if (F && V)
            return 0;
          if (F)
            return -1;
          if (V)
            return 1;
        }
        return c.label.localeCompare(g.label);
      });
      const l = [];
      let m = !1, p = !!this.options.suggestedCommandIds;
      for (let c = 0; c < r.length; c++) {
        const g = r[c];
        c === 0 && this.commandsHistory.peek(g.commandId) && (l.push({ type: "separator", label: h("recentlyUsed", "recently used") }), m = !0), p && !this.commandsHistory.peek(g.commandId) && (!((n = this.options.suggestedCommandIds) === null || n === void 0) && n.has(g.commandId)) && (l.push({ type: "separator", label: h("commonlyUsed", "commonly used") }), m = !0, p = !1), m && !this.commandsHistory.peek(g.commandId) && !(!((s = this.options.suggestedCommandIds) === null || s === void 0) && s.has(g.commandId)) && (l.push({ type: "separator", label: h("morecCommands", "other commands") }), m = !1), l.push(this.toCommandPick(g, o));
      }
      return this.hasAdditionalCommandPicks(e, i) ? {
        picks: l,
        additionalPicks: (() => T(this, void 0, void 0, function* () {
          const c = yield this.getAdditionalCommandPicks(a, r, e, i);
          return i.isCancellationRequested ? [] : c.map((g) => this.toCommandPick(g, o));
        }))()
      } : l;
    });
  }
  toCommandPick(e, t) {
    if (e.type === "separator")
      return e;
    const i = this.keybindingService.lookupKeybinding(e.commandId), o = i ? h("commandPickAriaLabelWithKeybinding", "{0}, {1}", e.label, i.getAriaLabel()) : e.label;
    return Object.assign(Object.assign({}, e), { ariaLabel: o, detail: this.options.showAlias && e.commandAlias !== e.label ? e.commandAlias : void 0, keybinding: i, accept: () => T(this, void 0, void 0, function* () {
      var n;
      this.commandsHistory.push(e.commandId), this.telemetryService.publicLog2("workbenchActionExecuted", {
        id: e.commandId,
        from: (n = t == null ? void 0 : t.from) !== null && n !== void 0 ? n : "quick open"
      });
      try {
        yield this.commandService.executeCommand(e.commandId);
      } catch (s) {
        le(s) || this.dialogService.error(h("canNotRun", "Command '{0}' resulted in an error", e.label), ue(s));
      }
    }) });
  }
};
E.PREFIX = ">";
E.WORD_FILTER = ce(ge, he, me);
E = J([
  b(1, X),
  b(2, H),
  b(3, G),
  b(4, B),
  b(5, k)
], E);
let I = class u extends U {
  constructor(e, t) {
    super(), this.storageService = e, this.configurationService = t, this.configuredCommandsHistoryLength = 0, this.updateConfiguration(), this.load(), this.registerListeners();
  }
  registerListeners() {
    this._register(this.configurationService.onDidChangeConfiguration((e) => this.updateConfiguration(e)));
  }
  updateConfiguration(e) {
    e && !e.affectsConfiguration("workbench.commandPalette.history") || (this.configuredCommandsHistoryLength = u.getConfiguredCommandHistoryLength(this.configurationService), u.cache && u.cache.limit !== this.configuredCommandsHistoryLength && (u.cache.limit = this.configuredCommandsHistoryLength, u.saveState(this.storageService)));
  }
  load() {
    const e = this.storageService.get(
      u.PREF_KEY_CACHE,
      0
      /* StorageScope.PROFILE */
    );
    let t;
    if (e)
      try {
        t = JSON.parse(e);
      } catch {
      }
    const i = u.cache = new K(this.configuredCommandsHistoryLength, 1);
    if (t) {
      let o;
      t.usesLRU ? o = t.entries : o = t.entries.sort((n, s) => n.value - s.value), o.forEach((n) => i.set(n.key, n.value));
    }
    u.counter = this.storageService.getNumber(u.PREF_KEY_COUNTER, 0, u.counter);
  }
  push(e) {
    u.cache && (u.cache.set(e, u.counter++), u.saveState(this.storageService));
  }
  peek(e) {
    var t;
    return (t = u.cache) === null || t === void 0 ? void 0 : t.peek(e);
  }
  static saveState(e) {
    if (!u.cache)
      return;
    const t = { usesLRU: !0, entries: [] };
    u.cache.forEach((i, o) => t.entries.push({ key: o, value: i })), e.store(
      u.PREF_KEY_CACHE,
      JSON.stringify(t),
      0,
      0
      /* StorageTarget.USER */
    ), e.store(
      u.PREF_KEY_COUNTER,
      u.counter,
      0,
      0
      /* StorageTarget.USER */
    );
  }
  static getConfiguredCommandHistoryLength(e) {
    var t, i;
    const n = (i = (t = e.getValue().workbench) === null || t === void 0 ? void 0 : t.commandPalette) === null || i === void 0 ? void 0 : i.history;
    return typeof n == "number" ? n : u.DEFAULT_COMMANDS_HISTORY_LENGTH;
  }
  static clearHistory(e, t) {
    const i = u.getConfiguredCommandHistoryLength(e);
    u.cache = new K(i), u.counter = 1, u.saveState(t);
  }
};
I.DEFAULT_COMMANDS_HISTORY_LENGTH = 50;
I.PREF_KEY_CACHE = "commandPalette.mru.cache";
I.PREF_KEY_COUNTER = "commandPalette.mru.counter";
I.counter = 1;
I = J([
  b(0, j),
  b(1, N)
], I);
class Oe extends E {
  constructor(e, t, i, o, n, s) {
    super(e, t, i, o, n, s);
  }
  getCodeEditorCommandPicks() {
    const e = this.activeTextEditorControl;
    if (!e)
      return [];
    const t = [];
    for (const i of e.getSupportedActions())
      t.push({
        commandId: i.id,
        commandAlias: i.alias,
        label: $(i.label) || i.id
      });
    return t;
  }
}
const Fe = fe("chatWidgetService");
let y = class w extends Oe {
  get activeTextEditorControl() {
    return this.editorService.activeTextEditorControl;
  }
  get defaultFilterValue() {
    if (this.configuration.preserveInput)
      return Ae.LAST;
  }
  constructor(e, t, i, o, n, s, a, r, d, l, m, p, c, g) {
    super({
      showAlias: !Pe.isDefaultVariant(),
      noResultsPick: (C) => {
        const S = this.chatService.getProviderInfos()[0];
        return S ? {
          label: h("askXInChat", "Ask {0}: {1}", S.displayName, C),
          commandId: A.ID,
          accept: () => s.executeCommand(A.ID, C)
        } : {
          label: h("noCommandResults", "No matching commands"),
          commandId: ""
        };
      }
    }, o, n, s, a, r), this.editorService = e, this.menuService = t, this.extensionService = i, this.configurationService = d, this.editorGroupService = l, this.preferencesService = m, this.productService = p, this.semanticSimilarityService = c, this.chatService = g, this.extensionRegistrationRace = Le(this.extensionService.whenInstalledExtensionsRegistered(), 800), this.useSemanticSimilarity = !1, this._register(d.onDidChangeConfiguration((C) => this.updateOptions(C))), this.updateOptions();
  }
  get configuration() {
    const e = this.configurationService.getValue().workbench.commandPalette;
    return {
      preserveInput: e.preserveInput,
      experimental: e.experimental
    };
  }
  updateOptions(e) {
    var o;
    if (e && !e.affectsConfiguration("workbench.commandPalette.experimental"))
      return;
    const t = this.configuration, i = t.experimental.suggestCommands && ((o = this.productService.commandPaletteSuggestedCommandIds) != null && o.length) ? new Set(this.productService.commandPaletteSuggestedCommandIds) : void 0;
    this.options.suggestedCommandIds = i, this.useSemanticSimilarity = t.experimental.useSemanticSimilarity;
  }
  async getCommandPicks(e) {
    return await this.extensionRegistrationRace, e.isCancellationRequested ? [] : [
      ...this.getCodeEditorCommandPicks(),
      ...this.getGlobalCommandPicks()
    ].map((t) => ({
      ...t,
      buttons: [{
        iconClass: we.asClassName(Re.gear),
        tooltip: h("configure keybinding", "Configure Keybinding")
      }],
      trigger: () => (this.preferencesService.openGlobalKeybindingSettings(!1, { query: `@command:${t.commandId}` }), De.CLOSE_PICKER)
    }));
  }
  hasAdditionalCommandPicks(e, t) {
    return !(!this.useSemanticSimilarity || e === "" || t.isCancellationRequested || !this.semanticSimilarityService.isEnabled());
  }
  async getAdditionalCommandPicks(e, t, i, o) {
    if (!this.hasAdditionalCommandPicks(i, o))
      return [];
    const n = e.map((m) => m.commandId);
    let s;
    try {
      await Te(w.SEMANTIC_SIMILARITY_DEBOUNCE, o), s = await this.semanticSimilarityService.getSimilarityScore(i, n, o);
    } catch {
      return [];
    }
    if (o.isCancellationRequested)
      return [];
    const a = s.map((m, p) => p).sort((m, p) => s[p] - s[m]), r = new Set(t.map((m) => m.commandId)), d = t.length > 0 ? [{
      type: "separator",
      label: h("semanticSimilarity", "similar commands")
    }] : [];
    let l = 0;
    for (const m of a) {
      if (s[m] < w.SEMANTIC_SIMILARITY_THRESHOLD || l === w.SEMANTIC_SIMILARITY_MAX_PICKS)
        break;
      const c = e[m];
      r.has(c.commandId) || (d.push(c), l++);
    }
    return d;
  }
  getGlobalCommandPicks() {
    var n, s;
    const e = [], t = ((n = this.editorService.activeEditorPane) == null ? void 0 : n.scopedContextKeyService) || this.editorGroupService.activeGroup.scopedContextKeyService, i = this.menuService.createMenu(xe.CommandPalette, t), o = i.getActions().reduce((a, [, r]) => [...a, ...r], []).filter((a) => a instanceof He && a.enabled);
    for (const a of o) {
      let r = (typeof a.item.title == "string" ? a.item.title : a.item.title.value) || a.item.id;
      const d = typeof a.item.category == "string" ? a.item.category : (s = a.item.category) == null ? void 0 : s.value;
      d && (r = h("commandWithCategory", "{0}: {1}", d, r));
      const l = typeof a.item.title != "string" ? a.item.title.original : void 0, m = d && a.item.category && typeof a.item.category != "string" ? a.item.category.original : void 0, p = l && d ? m ? `${m}: ${l}` : `${d}: ${l}` : l;
      e.push({
        commandId: a.item.id,
        commandAlias: p,
        label: $(r)
      });
    }
    return i.dispose(), e;
  }
};
y.SEMANTIC_SIMILARITY_MAX_PICKS = 3;
y.SEMANTIC_SIMILARITY_THRESHOLD = 0.8;
y.SEMANTIC_SIMILARITY_DEBOUNCE = 200;
y = ve([
  v(0, pe),
  v(1, Ce),
  v(2, Ie),
  v(3, X),
  v(4, H),
  v(5, G),
  v(6, B),
  v(7, k),
  v(8, N),
  v(9, be),
  v(10, Se),
  v(11, ye),
  v(12, Ee),
  v(13, z)
], y);
class O extends M {
  constructor() {
    super({
      id: O.ID,
      title: { value: h("showTriggerActions", "Show All Commands"), original: "Show All Commands" },
      keybinding: {
        weight: 200,
        when: void 0,
        primary: ke ? void 0 : 3118,
        secondary: [59]
      },
      f1: !0
    });
  }
  async run(e) {
    e.get(Y).quickAccess.show(y.PREFIX);
  }
}
O.ID = "workbench.action.showCommands";
class Ke extends M {
  constructor() {
    super({
      id: "workbench.action.clearCommandHistory",
      title: { value: h("clearCommandHistory", "Clear Command History"), original: "Clear Command History" },
      f1: !0
    });
  }
  async run(e) {
    const t = e.get(N), i = e.get(j), o = e.get(k);
    if (I.getConfiguredCommandHistoryLength(t) > 0) {
      const { confirmed: s } = await o.confirm({
        type: "warning",
        message: h(
          "confirmClearMessage",
          "Do you want to clear the history of recently used commands?"
        ),
        detail: h("confirmClearDetail", "This action is irreversible!"),
        primaryButton: h({ key: "clearButtonLabel", comment: ["&& denotes a mnemonic"] }, "&&Clear")
      });
      if (!s)
        return;
      I.clearHistory(t, i);
    }
  }
}
class A extends M {
  constructor() {
    super({
      id: A.ID,
      title: { value: h("askInChat", "Ask In Chat"), original: "Ask In Chat" },
      f1: !1
    });
  }
  async run(e, t) {
    const i = e.get(z), o = e.get(Fe), n = e.get(Ne);
    if (!t)
      throw new Error("No filter provided.");
    let s;
    const a = i.getProviderInfos();
    switch (a.length) {
      case 0:
        throw new Error("No chat provider found.");
      case 1:
        s = a[0].id;
        break;
      default:
        n.warn("Multiple chat providers found. Using the first one."), s = a[0].id;
        break;
    }
    const r = await o.revealViewForProvider(s);
    r != null && r.viewModel && i.sendRequestToProvider(r.viewModel.sessionId, { message: t });
  }
}
A.ID = "workbench.action.askCommandInChat";
export {
  _ as A,
  y as C,
  x as H,
  O as S,
  Ke as a,
  Me as b
};
