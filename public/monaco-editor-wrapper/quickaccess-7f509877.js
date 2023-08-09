import { _ as q, a as s, aQ as $, e as W, X as F, a0 as Y, Y as ce, mJ as re, aR as oe, ud as se, cx as ae, dx as ue, aj as h, a3 as j, kz as J, B as n, ak as b, bz as l, bv as m, aH as I, aL as de, ue as U, Z as le, f_ as pe, an as ve, uf as he, ug as me, oL as ge, aK as ke, qE as Se, z as we, qF as Ie, uh as ye, pS as G, al as Z, aN as f, fV as be, aF as H, k as fe, jA as Ce, gq as Pe, ui as Ae, uj as Qe, cp as xe } from "./index-6dabdcd0.js";
import { I as qe, i as k, g as V, d as ee } from "./quickaccess-7e6cd84f.js";
import { A as ie, H as L, C as T, S as C, a as Ve } from "./commandsQuickAccess-c8d3ce87.js";
let K = class extends se {
  constructor(e, i, c, o, u, t, d) {
    super(i, o, u, t), this.configurationService = e, this.keybindingService = c, this.hoverService = d, this.hoverDelegate = new Ee(this.configurationService, this.hoverService), this.inQuickInputContext = qe.bindTo(this.contextKeyService), this.registerListeners();
  }
  registerListeners() {
    this._register(this.onShow(() => this.inQuickInputContext.set(!0))), this._register(this.onHide(() => this.inQuickInputContext.set(!1)));
  }
  createController() {
    return super.createController(this.layoutService, {
      ignoreFocusOut: () => !this.configurationService.getValue("workbench.quickOpen.closeOnFocusLost"),
      backKeybindingLabel: () => {
        var e;
        return ((e = this.keybindingService.lookupKeybinding("workbench.action.quickInputBack")) == null ? void 0 : e.getLabel()) || void 0;
      },
      hoverDelegate: this.hoverDelegate
    });
  }
};
K = q([
  s(0, $),
  s(1, W),
  s(2, F),
  s(3, Y),
  s(4, ce),
  s(5, re),
  s(6, oe)
], K);
class Ee {
  get delay() {
    return Date.now() - this.lastHoverHideTime < 200 ? 0 : this.configurationService.getValue("workbench.hover.delay");
  }
  constructor(e, i) {
    this.configurationService = e, this.hoverService = i, this.lastHoverHideTime = 0, this.placement = "element";
  }
  showHover(e, i) {
    return this.hoverService.showHover({
      ...e,
      showHoverHint: !0,
      hideOnKeyDown: !1,
      skipFadeInAnimation: !0
    }, i);
  }
  onDidHideHover() {
    this.lastHoverHideTime = Date.now();
  }
}
let x = class extends ie {
  constructor(e, i, c) {
    super(), this.editorService = e, this.editorGroupService = i, this.configurationService = c, this.onDidActiveTextEditorControlChange = this.editorService.onDidActiveEditorChange;
  }
  get configuration() {
    var i;
    const e = (i = this.configurationService.getValue().workbench) == null ? void 0 : i.editor;
    return {
      openEditorPinned: !(e != null && e.enablePreviewFromQuickOpen) || !(e != null && e.enablePreview)
    };
  }
  get activeTextEditorControl() {
    return this.editorService.activeTextEditorControl;
  }
  gotoLocation(e, i) {
    var c;
    if ((i.keyMods.alt || this.configuration.openEditorPinned && i.keyMods.ctrlCmd || i.forceSideBySide) && this.editorService.activeEditor) {
      (c = e.restoreViewState) == null || c.call(e);
      const o = {
        selection: i.range,
        pinned: i.keyMods.ctrlCmd || this.configuration.openEditorPinned,
        preserveFocus: i.preserveFocus
      };
      this.editorGroupService.sideGroup.openEditor(this.editorService.activeEditor, o);
    } else
      super.gotoLocation(e, i);
  }
};
x = q([
  s(0, ae),
  s(1, ue),
  s(2, $)
], x);
class Q extends b {
  constructor() {
    super({
      id: Q.ID,
      title: { value: n("gotoLine", "Go to Line/Column..."), original: "Go to Line/Column..." },
      f1: !0,
      keybinding: {
        weight: 200,
        when: null,
        primary: 2085,
        mac: { primary: 293 }
      }
    });
  }
  async run(e) {
    e.get(l).quickAccess.show(x.PREFIX);
  }
}
Q.ID = "workbench.action.gotoLine";
h(Q);
j.as(J.Quickaccess).registerQuickAccessProvider({
  ctor: x,
  prefix: ie.PREFIX,
  placeholder: n(
    "gotoLineQuickAccessPlaceholder",
    "Type the line number and optional column to go to (e.g. 42:5 for line 42 and column 5)."
  ),
  helpEntries: [{ description: n("gotoLineQuickAccess", "Go to Line/Column"), commandId: Q.ID }]
});
const g = {
  primary: 2094,
  secondary: [2083],
  mac: { primary: 2094, secondary: void 0 }
};
m.registerCommandAndKeybindingRule({
  id: "workbench.action.closeQuickOpen",
  weight: 200,
  when: k,
  primary: 9,
  secondary: [1033],
  handler: (r) => r.get(l).cancel()
});
m.registerCommandAndKeybindingRule({
  id: "workbench.action.acceptSelectedQuickOpenItem",
  weight: 200,
  when: k,
  primary: 0,
  handler: (r) => r.get(l).accept()
});
m.registerCommandAndKeybindingRule({
  id: "workbench.action.alternativeAcceptSelectedQuickOpenItem",
  weight: 200,
  when: k,
  primary: 0,
  handler: (r) => r.get(l).accept({ ctrlCmd: !0, alt: !1 })
});
m.registerCommandAndKeybindingRule({
  id: "workbench.action.focusQuickOpen",
  weight: 200,
  when: k,
  primary: 0,
  handler: (r) => {
    r.get(l).focus();
  }
});
const B = "workbench.action.quickOpenNavigateNextInFilePicker";
m.registerCommandAndKeybindingRule({
  id: B,
  weight: 200 + 50,
  handler: V(B, !0),
  when: ee,
  primary: g.primary,
  secondary: g.secondary,
  mac: g.mac
});
const _ = "workbench.action.quickOpenNavigatePreviousInFilePicker";
m.registerCommandAndKeybindingRule({
  id: _,
  weight: 200 + 50,
  handler: V(_, !1),
  when: ee,
  primary: g.primary | 1024,
  secondary: [g.secondary[0] | 1024],
  mac: {
    primary: g.mac.primary | 1024,
    secondary: void 0
  }
});
m.registerCommandAndKeybindingRule({
  id: "workbench.action.quickPickManyToggle",
  weight: 200,
  when: k,
  primary: 0,
  handler: (r) => {
    r.get(l).toggle();
  }
});
m.registerCommandAndKeybindingRule({
  id: "workbench.action.quickInputBack",
  weight: 200 + 50,
  when: k,
  primary: 0,
  win: { primary: 527 },
  mac: { primary: 344 },
  linux: { primary: 2648 },
  handler: (r) => {
    r.get(l).back();
  }
});
h(class extends b {
  constructor() {
    super({
      id: "workbench.action.quickOpen",
      title: {
        value: n("quickOpen", "Go to File..."),
        original: "Go to File..."
      },
      description: {
        description: "Quick access",
        args: [{
          name: "prefix",
          schema: {
            type: "string"
          }
        }]
      },
      keybinding: {
        weight: 200,
        primary: g.primary,
        secondary: g.secondary,
        mac: g.mac
      },
      f1: !0
    });
  }
  run(e, i) {
    e.get(l).quickAccess.show(typeof i == "string" ? i : void 0, { preserveValue: typeof i == "string" });
  }
});
h(class extends b {
  constructor() {
    super({
      id: "workbench.action.quickOpenWithModes",
      title: n("quickOpenWithModes", "Quick Open"),
      menu: {
        id: I.CommandCenter,
        order: 100
      }
    });
  }
  run(e) {
    e.get(l).quickAccess.show(void 0, {
      preserveValue: !0,
      providerOptions: {
        includeHelp: !0,
        from: "commandCenter"
      }
    });
  }
});
de.registerCommand("workbench.action.quickOpenPreviousEditor", async (r) => {
  r.get(l).quickAccess.show("", { itemActivation: U.SECOND });
});
class E extends b {
  constructor(e, i, c, o, u) {
    super({ id: e, title: i, f1: !0, keybinding: u }), this.id = e, this.next = c, this.quickNavigate = o;
  }
  async run(e) {
    const i = e.get(F), c = e.get(l), o = i.lookupKeybindings(this.id), u = this.quickNavigate ? { keybindings: o } : void 0;
    c.navigate(this.next, u);
  }
}
class Ne extends E {
  constructor() {
    super("workbench.action.quickOpenNavigateNext", { value: n("quickNavigateNext", "Navigate Next in Quick Open"), original: "Navigate Next in Quick Open" }, !0, !0);
  }
}
class Oe extends E {
  constructor() {
    super("workbench.action.quickOpenNavigatePrevious", { value: n("quickNavigatePrevious", "Navigate Previous in Quick Open"), original: "Navigate Previous in Quick Open" }, !1, !0);
  }
}
class De extends E {
  constructor() {
    super("workbench.action.quickOpenSelectNext", { value: n("quickSelectNext", "Select Next in Quick Open"), original: "Select Next in Quick Open" }, !0, !1, {
      weight: 200 + 50,
      when: k,
      primary: 0,
      mac: { primary: 300 }
    });
  }
}
class Le extends E {
  constructor() {
    super("workbench.action.quickOpenSelectPrevious", { value: n("quickSelectPrevious", "Select Previous in Quick Open"), original: "Select Previous in Quick Open" }, !1, !1, {
      weight: 200 + 50,
      when: k,
      primary: 0,
      mac: { primary: 302 }
    });
  }
}
h(De);
h(Le);
h(Ne);
h(Oe);
let w = class te extends Se {
  constructor(e, i, c, o, u, t, d, a) {
    super(te.PREFIX, {
      noResultsPick: {
        label: n("noViewResults", "No matching views"),
        containerLabel: ""
      }
    }), this.viewDescriptorService = e, this.viewsService = i, this.outputService = c, this.terminalService = o, this.terminalGroupService = u, this.debugService = t, this.paneCompositeService = d, this.contextKeyService = a;
  }
  _getPicks(e) {
    const i = this.doGetViewPickItems().filter((t) => e ? (t.highlights = { label: we(Ie(e, t.label, !0)) }, t.highlights.label || ye(t.containerLabel, e)) : !0), c = /* @__PURE__ */ new Map();
    for (const t of i)
      c.has(t.label) || c.set(t.label, t.containerLabel);
    const o = [];
    let u;
    for (const t of i) {
      if (u !== t.containerLabel) {
        u = t.containerLabel;
        let d;
        c.has(u) ? d = `${c.get(u)} / ${u}` : d = u, o.push({ type: "separator", label: d });
      }
      o.push(t);
    }
    return o;
  }
  doGetViewPickItems() {
    const e = [], i = (t, d) => {
      const a = this.viewDescriptorService.getViewContainerModel(d), p = [];
      for (const v of a.allViewDescriptors)
        this.contextKeyService.contextMatchesRules(v.when) && p.push({
          label: v.name,
          containerLabel: a.title,
          accept: () => this.viewsService.openView(v.id, !0)
        });
      return p;
    }, c = (t, d) => {
      const a = this.paneCompositeService.getPaneComposites(t), p = this.paneCompositeService.getVisiblePaneCompositeIds(t);
      a.sort((v, A) => {
        let N = p.findIndex((D) => v.id === D), O = p.findIndex((D) => A.id === D);
        return N < 0 && (N = a.indexOf(v) + p.length), O < 0 && (O = a.indexOf(A) + p.length), N - O;
      });
      for (const v of a)
        if (this.includeViewContainer(v)) {
          const A = this.viewDescriptorService.getViewContainerById(v.id);
          A && e.push({
            label: this.viewDescriptorService.getViewContainerModel(A).title,
            containerLabel: d,
            accept: () => this.paneCompositeService.openPaneComposite(v.id, t, !0)
          });
        }
    };
    c(0, n("views", "Side Bar")), c(1, n("panels", "Panel")), c(2, n("secondary side bar", "Secondary Side Bar"));
    const o = (t) => {
      const d = this.paneCompositeService.getPaneComposites(t);
      for (const a of d) {
        const p = this.viewDescriptorService.getViewContainerById(a.id);
        p && e.push(...i(a, p));
      }
    };
    o(0), o(1), o(2), this.terminalGroupService.groups.forEach((t, d) => {
      t.terminalInstances.forEach((a, p) => {
        const v = n(
          "terminalTitle",
          "{0}: {1}",
          `${d + 1}.${p + 1}`,
          a.title
        );
        e.push({
          label: v,
          containerLabel: n("terminals", "Terminal"),
          accept: async () => {
            await this.terminalGroupService.showPanel(!0), this.terminalService.setActiveInstance(a);
          }
        });
      });
    }), this.debugService.getModel().getSessions(!0).filter((t) => t.hasSeparateRepl()).forEach((t, d) => {
      const a = t.name;
      e.push({
        label: a,
        containerLabel: n("debugConsoles", "Debug Console"),
        accept: async () => {
          await this.debugService.focusStackFrame(void 0, void 0, t, { explicit: !0 }), this.viewsService.isViewVisible(G) || await this.viewsService.openView(G, !0);
        }
      });
    });
    const u = this.outputService.getChannelDescriptors();
    for (const t of u)
      e.push({
        label: t.label,
        containerLabel: n("channels", "Output"),
        accept: () => this.outputService.showChannel(t.id)
      });
    return e;
  }
  includeViewContainer(e) {
    const i = this.viewDescriptorService.getViewContainerById(e.id);
    return i != null && i.hideIfEmpty ? this.viewDescriptorService.getViewContainerModel(i).activeViewDescriptors.length > 0 : !0;
  }
};
w.PREFIX = "view ";
w = q([
  s(0, le),
  s(1, pe),
  s(2, ve),
  s(3, he),
  s(4, me),
  s(5, ge),
  s(6, ke),
  s(7, Y)
], w);
class P extends b {
  constructor() {
    super({
      id: P.ID,
      title: { value: n("openView", "Open View"), original: "Open View" },
      category: Z.View,
      f1: !0
    });
  }
  async run(e) {
    e.get(l).quickAccess.show(w.PREFIX);
  }
}
P.ID = "workbench.action.openView";
class S extends b {
  constructor() {
    super({
      id: S.ID,
      title: { value: n("quickOpenView", "Quick Open View"), original: "Quick Open View" },
      category: Z.View,
      f1: !1,
      keybinding: {
        weight: 200,
        when: void 0,
        ...S.KEYBINDING
      }
    });
  }
  async run(e) {
    const i = e.get(F), c = e.get(l), o = i.lookupKeybindings(S.ID);
    c.quickAccess.show(w.PREFIX, { quickNavigateConfiguration: { keybindings: o }, itemActivation: U.FIRST });
  }
}
S.ID = "workbench.action.quickOpenView";
S.KEYBINDING = {
  primary: 2095,
  mac: { primary: 303 },
  linux: { primary: 0 }
};
const M = j.as(J.Quickaccess);
M.registerQuickAccessProvider({
  ctor: L,
  prefix: L.PREFIX,
  placeholder: n(
    "helpQuickAccessPlaceholder",
    "Type '{0}' to get help on the actions you can take from here.",
    L.PREFIX
  ),
  helpEntries: [{ description: n("helpQuickAccess", "Show all Quick Access Providers") }]
});
M.registerQuickAccessProvider({
  ctor: w,
  prefix: w.PREFIX,
  contextKey: "inViewsPicker",
  placeholder: n(
    "viewQuickAccessPlaceholder",
    "Type the name of a view, output channel or terminal to open."
  ),
  helpEntries: [{ description: n("viewQuickAccess", "Open View"), commandId: P.ID }]
});
M.registerQuickAccessProvider({
  ctor: T,
  prefix: T.PREFIX,
  contextKey: "inCommandsPicker",
  placeholder: n("commandsQuickAccessPlaceholder", "Type the name of a command to run."),
  helpEntries: [{ description: n("commandsQuickAccess", "Show and Run Commands"), commandId: C.ID }]
});
f.appendMenuItem(I.MenubarViewMenu, {
  group: "1_open",
  command: {
    id: C.ID,
    title: n(
      { key: "miCommandPalette", comment: ["&& denotes a mnemonic"] },
      "&&Command Palette..."
    )
  },
  order: 1
});
f.appendMenuItem(I.MenubarHelpMenu, {
  group: "1_welcome",
  command: {
    id: C.ID,
    title: n(
      { key: "miShowAllCommands", comment: ["&& denotes a mnemonic"] },
      "Show All Commands"
    )
  },
  order: 2
});
f.appendMenuItem(I.MenubarViewMenu, {
  group: "1_open",
  command: {
    id: P.ID,
    title: n(
      { key: "miOpenView", comment: ["&& denotes a mnemonic"] },
      "&&Open View..."
    )
  },
  order: 2
});
f.appendMenuItem(I.MenubarGoMenu, {
  group: "5_infile_nav",
  command: {
    id: "workbench.action.gotoLine",
    title: n(
      { key: "miGotoLine", comment: ["&& denotes a mnemonic"] },
      "Go to &&Line/Column..."
    )
  },
  order: 1
});
f.appendMenuItem(I.GlobalActivity, {
  group: "1_command",
  command: {
    id: C.ID,
    title: n("commandPalette", "Command Palette...")
  },
  order: 1
});
f.appendMenuItem(I.EditorContext, {
  group: "z_commands",
  when: be.editorSimpleInput.toNegated(),
  command: {
    id: C.ID,
    title: n("commandPalette", "Command Palette...")
  },
  order: 1
});
h(Ve);
h(C);
h(P);
h(S);
const Ke = "inViewsPicker", ne = H.and(k, H.has(Ke)), y = S.KEYBINDING, X = "workbench.action.quickOpenNavigateNextInViewPicker";
m.registerCommandAndKeybindingRule({
  id: X,
  weight: 200 + 50,
  handler: V(X, !0),
  when: ne,
  primary: y.primary,
  linux: y.linux,
  mac: y.mac
});
const z = "workbench.action.quickOpenNavigatePreviousInViewPicker";
m.registerCommandAndKeybindingRule({
  id: z,
  weight: 200 + 50,
  handler: V(z, !1),
  when: ne,
  primary: y.primary | 1024,
  linux: y.linux,
  mac: {
    primary: y.mac.primary | 1024
  }
});
let R = class {
  constructor(e) {
    this.instantiationService = e, this.workbenchQuickInputService = e.createInstance(K);
  }
  get activeService() {
    return Ce.get(Pe).getFocusedCodeEditor() instanceof Ae ? (this.standaloneQuickInputService ?? (this.standaloneQuickInputService = this.instantiationService.createInstance(Qe)), this.standaloneQuickInputService) : this.workbenchQuickInputService;
  }
  get quickAccess() {
    return this.activeService.quickAccess;
  }
  get backButton() {
    return this.activeService.backButton;
  }
  get onShow() {
    return this.activeService.onShow;
  }
  get onHide() {
    return this.activeService.onHide;
  }
  pick(e, i = {}, c = xe.None) {
    return this.activeService.pick(e, i, c);
  }
  input(e, i) {
    return this.activeService.input(e, i);
  }
  createQuickPick() {
    return this.activeService.createQuickPick();
  }
  createInputBox() {
    return this.activeService.createInputBox();
  }
  focus() {
    return this.activeService.focus();
  }
  toggle() {
    return this.activeService.toggle();
  }
  navigate(e, i) {
    return this.activeService.navigate(e, i);
  }
  accept() {
    return this.activeService.accept();
  }
  back() {
    return this.activeService.back();
  }
  cancel() {
    return this.activeService.cancel();
  }
};
R = q([
  s(0, W)
], R);
function Xe() {
  return {
    [l.toString()]: new fe(R)
  };
}
export {
  Xe as default
};