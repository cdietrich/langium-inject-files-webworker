import { _ as B, a as g, I as ke, cx as M, O as it, aU as ji, a1 as Ys, g as Rt, h as Xi, D as ee, t as St, aw as at, ph as Es, ij as ki, wG as xn, f6 as Js, u4 as In, wH as En, S as K, wI as Ge, bE as je, dB as $t, dC as Cs, ib as Cn, wJ as kn, wK as Fn, wL as Rn, wM as Pn, wN as Tn, wO as _n, e as V, b as ii, bC as ht, wP as si, wQ as Yi, wR as An, B as l, f as ri, jE as Mn, bB as ge, wS as Wn, wT as Ln, wU as On, fk as Dn, wV as T, da as Ji, cu as Nn, ct as oe, wW as Ie, wX as L, cr as Bn, pX as Zs, wY as er, w as ue, wZ as Gt, av as Q, bj as A, n1 as Vn, hc as Kt, w_ as Xe, db as tr, w$ as ni, x0 as Hn, kj as Kn, dx as Zi, aQ as H, d7 as Qn, aj as x, a3 as Pe, kz as ir, iN as qn, dw as Un, o as sr, dc as ut, ak as I, aH as _, bz as Pt, ue as $n, vO as Gn, dj as zn, n as oi, p as jn, er as Xn, cd as es, gq as rr, qE as ts, z as st, x1 as Yn, tC as nr, x2 as or, r9 as Ae, dq as mt, dG as ai, dl as ar, aO as Me, c0 as $, ps as cr, L as ci, Y as li, bD as is, N as rt, ie as Jn, vs as Zn, uK as eo, bT as to, a2 as dt, qF as io, x3 as lr, bA as pe, e0 as hr, ao as so, cz as ur, jM as ss, f4 as ro, x4 as no, iw as ks, x5 as oo, x6 as ao, x7 as rs, x8 as co, x9 as lo, xa as ho, xb as Fs, xc as gi, xd as Rs, xe as ns, xf as uo, mP as Ps, xg as go, U as We, fA as Ts, ex as po, xh as _s, bH as fo, iB as dr, a0 as te, X as Tt, b8 as gr, E as j, s9 as So, sb as Fi, a9 as Ri, hP as os, hQ as _t, xi as de, xj as mo, xk as J, ba as pr, $ as R, n7 as vo, H as w, xl as yo, xm as fr, eZ as As, xn as wo, aI as N, xo as Qt, bI as Bt, ro as Sr, rp as mr, u as At, xp as as, au as zt, xq as Pi, uu as bo, Q as cs, aW as xo, nc as Io, xr as Eo, b5 as Co, b3 as vr, b9 as yr, be as ko, xs as Fo, cl as ls, fY as hi, bN as wr, xt as Ms, sH as Le, iq as Ro, is as Po, it as qt, xu as To, bv as _o, aF as b, xv as Ao, f_ as P, bg as ui, xw as ve, xx as pi, xy as Mo, l as hs, f3 as Wo, iV as Lo, iz as us, nG as Oo, ff as br, xz as Do, oC as No, ap as Bo, oX as xr, iM as Ir, hR as Vo, bO as Mt, Z as Ho, bM as Ko, xA as ds, xB as Qo, hT as qo, xC as jt, bd as Uo, xD as fe, G as fi, aa as Se, b0 as Ee, ac as me, b1 as vt, ts as Si, xE as Ws, xF as di, y as Ls, b7 as Er, x as Os, dm as $o, rj as Go, xG as zo, xH as jo, xI as Ti, hE as Ce, nn as _i, cF as mi, xJ as Xo, gr as Yo, s7 as Jo, h$ as Ai, m as Zo, pp as vi, bQ as ea, xK as ta, xL as ia, kk as Mi, k7 as sa, xM as ra, ek as na, aK as oa, fJ as Cr, gi as aa, fL as ca, fM as Wi, gs as la, dz as ha, fK as ua, xN as da, xO as kr, xP as Fr, xQ as Rr, xR as ga, uQ as pa, xS as gt, d0 as fa, dy as Sa, as as Pr, xT as Ds, k as Oe, aB as ma, cA as va, ju as ya, aL as Tr, xU as wa, v as ba, dd as xa, io as Ia, qp as Vt, uE as Ea, eU as Ca, xV as ka, sO as Fa, xW as Ra, sm as Pa, q6 as pt, xX as Ta, eV as _a, kw as Aa, iH as Ma, xY as Ns, xZ as Wa, eo as La, i_ as Oa, x_ as Da, x$ as Na } from "./index-6dabdcd0.js";
import { b as Ba, H as Bs, C as Va, A as Ha } from "./commandsQuickAccess-c8d3ce87.js";
import { a as Ka } from "./quickaccess-7e6cd84f.js";
import { ae as Qa } from "./debugCommands-2dddbd64.js";
import { b as qa, f as Ua } from "./quickPickPin-10c11fb2.js";
let Li = class extends ee {
  constructor(e, t, i, s, r, n, a) {
    super(), this.modelService = e, this.editorService = t, this.telemetryService = i, this.logService = s, this.extensionService = r, this.fileService = n, this.uriIdentityService = a, this.fileSearchProviders = /* @__PURE__ */ new Map(), this.textSearchProviders = /* @__PURE__ */ new Map(), this.deferredFileSearchesByScheme = /* @__PURE__ */ new Map(), this.deferredTextSearchesByScheme = /* @__PURE__ */ new Map(), this.loggedSchemesMissingProviders = /* @__PURE__ */ new Set();
  }
  registerSearchResultProvider(e, t, i) {
    let s, r;
    if (t === 0)
      s = this.fileSearchProviders, r = this.deferredFileSearchesByScheme;
    else if (t === 1)
      s = this.textSearchProviders, r = this.deferredTextSearchesByScheme;
    else
      throw new Error("Unknown SearchProviderType");
    return s.set(e, i), r.has(e) && (r.get(e).complete(i), r.delete(e)), St(() => {
      s.delete(e);
    });
  }
  async textSearch(e, t, i, s) {
    const r = this.getLocalResults(e);
    i && at([...r.results.values()]).forEach(i);
    const n = (c) => {
      Pn(c) ? !r.results.has(c.resource) && !(s && s.has(c.resource)) && i && i(c) : i && i(c), Tn(c) && this.logService.debug("SearchService#search", c.message);
    }, a = await this.doSearch(e, t, n);
    return {
      ...a,
      limitHit: a.limitHit || r.limitHit,
      results: [...a.results, ...at([...r.results.values()])]
    };
  }
  fileSearch(e, t) {
    return this.doSearch(e, t);
  }
  doSearch(e, t, i) {
    this.logService.trace("SearchService#search", JSON.stringify(e));
    const s = this.getSchemesInQuery(e), r = [Promise.resolve(null)];
    s.forEach((a) => r.push(this.extensionService.activateByEvent(`onSearch:${a}`))), r.push(this.extensionService.activateByEvent("onSearch:file"));
    const n = (async () => {
      if (await Promise.all(r), await this.extensionService.whenInstalledExtensionsRegistered(), t && t.isCancellationRequested)
        return Promise.reject(new Es());
      const a = (u) => {
        t && t.isCancellationRequested || i == null || i(u);
      }, c = await Promise.all(e.folderQueries.map((u) => this.fileService.exists(u.folder)));
      e.folderQueries = e.folderQueries.filter((u, d) => c[d]);
      let h = await this.searchWithProviders(e, a, t);
      return h = at(h), h.length ? {
        limitHit: h[0] && h[0].limitHit,
        stats: h[0].stats,
        messages: at(ki(h.map((u) => u.messages))).filter(xn((u) => u.type + u.text + u.trusted)),
        results: ki(h.map((u) => u.results))
      } : {
        limitHit: !1,
        results: [],
        messages: []
      };
    })();
    return new Promise((a, c) => {
      t && t.onCancellationRequested(() => {
        c(new Es());
      }), n.then(a, c);
    });
  }
  getSchemesInQuery(e) {
    var i, s;
    const t = /* @__PURE__ */ new Set();
    return (i = e.folderQueries) == null || i.forEach((r) => t.add(r.folder.scheme)), (s = e.extraFileResources) == null || s.forEach((r) => t.add(r.scheme)), t;
  }
  async waitForProvider(e, t) {
    const i = e === 1 ? this.deferredFileSearchesByScheme : this.deferredTextSearchesByScheme;
    if (i.has(t))
      return i.get(t).p;
    {
      const s = new Js();
      return i.set(t, s), s.p;
    }
  }
  async searchWithProviders(e, t, i) {
    const s = In.create(!1), r = [], n = this.groupFolderQueriesByScheme(e), a = [...n.keys()].some((c) => e.type === 1 ? this.fileSearchProviders.has(c) : this.textSearchProviders.has(c));
    return await Promise.all([...n.keys()].map(async (c) => {
      const h = n.get(c);
      let u = e.type === 1 ? this.fileSearchProviders.get(c) : this.textSearchProviders.get(c);
      if (!u)
        if (a) {
          this.loggedSchemesMissingProviders.has(c) || (this.logService.warn(`No search provider registered for scheme: ${c}. Another scheme has a provider, not waiting for ${c}`), this.loggedSchemesMissingProviders.add(c));
          return;
        } else
          this.loggedSchemesMissingProviders.has(c) || (this.logService.warn(`No search provider registered for scheme: ${c}, waiting`), this.loggedSchemesMissingProviders.add(c)), u = await this.waitForProvider(e.type, c);
      const d = {
        ...e,
        folderQueries: h
      };
      r.push(e.type === 1 ? u.fileSearch(d, i) : u.textSearch(d, t, i));
    })), Promise.all(r).then((c) => {
      const h = s.elapsed();
      return this.logService.trace(`SearchService#search: ${h}ms`), c.forEach((u) => {
        this.sendTelemetry(e, h, u);
      }), c;
    }, (c) => {
      const h = s.elapsed();
      this.logService.trace(`SearchService#search: ${h}ms`);
      const u = En(c);
      throw this.logService.trace(`SearchService#searchError: ${u.message}`), this.sendTelemetry(e, h, void 0, u), u;
    });
  }
  groupFolderQueriesByScheme(e) {
    const t = /* @__PURE__ */ new Map();
    return e.folderQueries.forEach((i) => {
      const s = t.get(i.folder.scheme) || [];
      s.push(i), t.set(i.folder.scheme, s);
    }), t;
  }
  sendTelemetry(e, t, i, s) {
    const r = e.folderQueries.every((c) => c.folder.scheme === K.file), n = e.folderQueries.every((c) => c.folder.scheme !== K.file), a = r ? K.file : n ? "other" : "mixed";
    if (e.type === 1 && i && i.stats) {
      const c = i.stats;
      if (c.fromCache) {
        const h = c.detailStats;
        this.telemetryService.publicLog2("cachedSearchComplete", {
          reason: e._reason,
          resultCount: c.resultCount,
          workspaceFolderCount: e.folderQueries.length,
          endToEndTime: t,
          sortingTime: c.sortingTime,
          cacheWasResolved: h.cacheWasResolved,
          cacheLookupTime: h.cacheLookupTime,
          cacheFilterTime: h.cacheFilterTime,
          cacheEntryCount: h.cacheEntryCount,
          scheme: a
        });
      } else {
        const h = c.detailStats;
        this.telemetryService.publicLog2("searchComplete", {
          reason: e._reason,
          resultCount: c.resultCount,
          workspaceFolderCount: e.folderQueries.length,
          endToEndTime: t,
          sortingTime: c.sortingTime,
          fileWalkTime: h.fileWalkTime,
          directoriesWalked: h.directoriesWalked,
          filesWalked: h.filesWalked,
          cmdTime: h.cmdTime,
          cmdResultCount: h.cmdResultCount,
          scheme: a
        });
      }
    } else if (e.type === 2) {
      let c;
      s && (c = s.code === Ge.regexParseError ? "regex" : s.code === Ge.unknownEncoding ? "encoding" : s.code === Ge.globParseError ? "glob" : s.code === Ge.invalidLiteral ? "literal" : s.code === Ge.other ? "other" : s.code === Ge.canceled ? "canceled" : "unknown"), this.telemetryService.publicLog2("textSearchComplete", {
        reason: e._reason,
        workspaceFolderCount: e.folderQueries.length,
        endToEndTime: t,
        scheme: a,
        error: c
      });
    }
  }
  getLocalResults(e) {
    const t = new je((s) => this.uriIdentityService.extUri.getComparisonKey(s));
    let i = !1;
    if (e.type === 2) {
      const s = new je();
      for (const n of this.editorService.editors) {
        const a = $t.getCanonicalUri(n, { supportSideBySide: Cs.PRIMARY }), c = $t.getOriginalUri(n, { supportSideBySide: Cs.PRIMARY });
        a && s.set(a, c ?? a);
      }
      this.modelService.getModels().forEach((n) => {
        const a = n.uri;
        if (!a || i)
          return;
        const c = s.get(a);
        if (!c || n.getLanguageId() === "search-result" && !(e.includePattern && e.includePattern["**/*.code-search"]) || c.scheme !== K.untitled && !this.fileService.hasProvider(c) || c.scheme === "git" || !this.matches(c, e))
          return;
        const h = Cn(e.maxResults) ? e.maxResults + 1 : Number.MAX_SAFE_INTEGER;
        let u = n.findMatches(e.contentPattern.pattern, !1, !!e.contentPattern.isRegExp, !!e.contentPattern.isCaseSensitive, e.contentPattern.isWordMatch ? e.contentPattern.wordSeparators : null, !1, h);
        if (u.length) {
          h && u.length >= h && (i = !0, u = u.slice(0, h - 1));
          const d = new _n(c);
          t.set(c, d);
          const p = kn(u, n, e.previewOptions);
          d.results = Fn(p, n, e);
        } else
          t.set(c, null);
      });
    }
    return {
      results: t,
      limitHit: i
    };
  }
  matches(e, t) {
    return Rn(t, e.fsPath);
  }
  async clearCache(e) {
    const t = Array.from(this.fileSearchProviders.values()).map((i) => i && i.clearCache(e));
    await Promise.all(t);
  }
};
Li = B([
  g(0, ke),
  g(1, M),
  g(2, it),
  g(3, ji),
  g(4, Ys),
  g(5, Rt),
  g(6, Xi)
], Li);
const _r = "replacePreview", Vs = (o) => o.with({ scheme: K.internal, fragment: _r, query: JSON.stringify({ scheme: o.scheme }) }), $a = (o) => o.with({ scheme: JSON.parse(o.query).scheme, fragment: "", query: "" });
let Oi = class {
  constructor(e, t) {
    this.instantiationService = e, this.textModelResolverService = t, this.textModelResolverService.registerTextModelContentProvider(K.internal, this);
  }
  provideTextContent(e) {
    return e.fragment === _r ? this.instantiationService.createInstance(Di).resolve(e) : null;
  }
};
Oi = B([
  g(0, V),
  g(1, ii)
], Oi);
let Di = class extends ee {
  constructor(e, t, i, s, r) {
    super(), this.modelService = e, this.languageService = t, this.textModelResolverService = i, this.replaceService = s, this.searchWorkbenchService = r;
  }
  async resolve(e) {
    const t = $a(e), i = this.searchWorkbenchService.searchModel.searchResult.matches().filter((c) => c.resource.toString() === t.toString())[0], r = this._register(await this.textModelResolverService.createModelReference(t)).object.textEditorModel, n = r.getLanguageId(), a = this.modelService.createModel(Ln(r.createSnapshot()), this.languageService.createById(n), e);
    return this._register(i.onChange(({ forceUpdateModel: c }) => this.update(r, a, i, c))), this._register(this.searchWorkbenchService.searchModel.onReplaceTermChanged(() => this.update(r, a, i))), this._register(i.onDispose(() => a.dispose())), this._register(a.onWillDispose(() => this.dispose())), this._register(r.onWillDispose(() => this.dispose())), a;
  }
  update(e, t, i, s = !1) {
    !e.isDisposed() && !t.isDisposed() && this.replaceService.updateReplacePreview(i, s);
  }
};
Di = B([
  g(0, ke),
  g(1, ht),
  g(2, ii),
  g(3, si),
  g(4, Yi)
], Di);
let Xt = class Ni {
  constructor(e, t, i, s, r, n) {
    this.textFileService = e, this.editorService = t, this.textModelResolverService = i, this.bulkEditorService = s, this.labelService = r, this.notebookEditorModelResolverService = n;
  }
  async replace(e, t = void 0, i = null) {
    const s = this.createEdits(e, i);
    await this.bulkEditorService.apply(s, { progress: t });
    const r = s.map(async (n) => {
      var a, c;
      if (n.resource.scheme === K.vscodeNotebookCell) {
        const h = (a = On.parse(n.resource)) == null ? void 0 : a.notebook;
        if (h) {
          let u;
          try {
            u = await this.notebookEditorModelResolverService.resolve(h), await u.object.save({ source: Ni.REPLACE_SAVE_SOURCE });
          } finally {
            u == null || u.dispose();
          }
        }
        return;
      } else
        return (c = this.textFileService.files.get(n.resource)) == null ? void 0 : c.save({ source: Ni.REPLACE_SAVE_SOURCE });
    });
    return Dn.settled(r);
  }
  async openReplacePreview(e, t, i, s) {
    const r = e instanceof T ? e.parent() : e, n = await this.editorService.openEditor({
      original: { resource: r.resource },
      modified: { resource: Vs(r.resource) },
      label: l(
        "fileReplaceChanges",
        "{0} ↔ {1} (Replace Preview)",
        r.name(),
        r.name()
      ),
      description: this.labelService.getUriLabel(Ji(r.resource), { relative: !0 }),
      options: {
        preserveFocus: t,
        pinned: s,
        revealIfVisible: !0
      }
    }), a = n == null ? void 0 : n.input, c = r.onDispose(() => {
      a == null || a.dispose(), c.dispose();
    });
    if (await this.updateReplacePreview(r), n) {
      const h = n.getControl();
      e instanceof T && h && h.revealLineInCenter(e.range().startLineNumber, 1);
    }
  }
  async updateReplacePreview(e, t = !1) {
    const i = Vs(e.resource), [s, r] = await Promise.all([this.textModelResolverService.createModelReference(e.resource), this.textModelResolverService.createModelReference(i)]), n = s.object.textEditorModel, a = r.object.textEditorModel;
    try {
      n && a && (t ? a.setValue(n.getValue()) : a.undo(), this.applyEditsToPreview(e, a));
    } finally {
      s.dispose(), r.dispose();
    }
  }
  applyEditsToPreview(e, t) {
    const i = this.createEdits(e, t.uri), s = [];
    for (const r of i)
      s.push(Nn.replaceMove(oe.lift(r.textEdit.range), r.textEdit.text));
    t.pushEditOperations([], s.sort((r, n) => oe.compareRangesUsingStarts(r.range, n.range)), () => []);
  }
  createEdits(e, t = null) {
    const i = [];
    if (e instanceof T)
      if (e instanceof Ie) {
        if (!e.isWebviewMatch()) {
          const s = e;
          i.push(this.createEdit(s, s.replaceString, s.cell.uri));
        }
      } else {
        const s = e;
        i.push(this.createEdit(s, s.replaceString, t));
      }
    return e instanceof L && (e = [e]), e instanceof Array && e.forEach((s) => {
      const r = s;
      r.count() > 0 && i.push(...r.matches().flatMap((n) => this.createEdits(n, t)));
    }), i;
  }
  createEdit(e, t, i = null) {
    const s = e.parent();
    return new Bn(
      i ?? s.resource,
      { range: e.range(), text: t },
      void 0,
      void 0
    );
  }
};
Xt.REPLACE_SAVE_SOURCE = An.registerSource("searchReplace.source", l("searchReplace.source", "Search and Replace"));
Xt = B([
  g(0, ri),
  g(1, M),
  g(2, ii),
  g(3, Mn),
  g(4, ge),
  g(5, Wn)
], Xt);
var Ga = globalThis && globalThis.__decorate || function(o, e, t, i) {
  var s = arguments.length, r = s < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    r = Reflect.decorate(o, e, t, i);
  else
    for (var a = o.length - 1; a >= 0; a--)
      (n = o[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, t, r) : n(e, t)) || r);
  return s > 3 && r && Object.defineProperty(e, t, r), r;
}, Hs = globalThis && globalThis.__param || function(o, e) {
  return function(t, i) {
    e(t, i, o);
  };
}, nt = globalThis && globalThis.__awaiter || function(o, e, t, i) {
  function s(r) {
    return r instanceof t ? r : new t(function(n) {
      n(r);
    });
  }
  return new (t || (t = Promise))(function(r, n) {
    function a(u) {
      try {
        h(i.next(u));
      } catch (d) {
        n(d);
      }
    }
    function c(u) {
      try {
        h(i.throw(u));
      } catch (d) {
        n(d);
      }
    }
    function h(u) {
      u.done ? r(u.value) : s(u.value).then(a, c);
    }
    h((i = i.apply(o, e || [])).next());
  });
};
let le = class Bi extends Ba {
  constructor(e, t, i = /* @__PURE__ */ Object.create(null)) {
    super(i), this._languageFeaturesService = e, this._outlineModelService = t, this.options = i, this.options.canAcceptInBackground = !0;
  }
  provideWithoutTextEditor(e) {
    return this.provideLabelPick(e, l("cannotRunGotoSymbolWithoutEditor", "To go to a symbol, first open a text editor with symbol information.")), ee.None;
  }
  provideWithTextEditor(e, t, i) {
    const s = e.editor, r = this.getModel(s);
    return r ? this._languageFeaturesService.documentSymbolProvider.has(r) ? this.doProvideWithEditorSymbols(e, r, t, i) : this.doProvideWithoutEditorSymbols(e, r, t, i) : ee.None;
  }
  doProvideWithoutEditorSymbols(e, t, i, s) {
    const r = new ue();
    return this.provideLabelPick(i, l("cannotRunGotoSymbolWithoutSymbolProvider", "The active text editor does not provide symbol information.")), nt(this, void 0, void 0, function* () {
      !(yield this.waitForLanguageSymbolRegistry(t, r)) || s.isCancellationRequested || r.add(this.doProvideWithEditorSymbols(e, t, i, s));
    }), r;
  }
  provideLabelPick(e, t) {
    e.items = [{
      label: t,
      index: 0,
      kind: 14
      /* SymbolKind.String */
    }], e.ariaLabel = t;
  }
  waitForLanguageSymbolRegistry(e, t) {
    return nt(this, void 0, void 0, function* () {
      if (this._languageFeaturesService.documentSymbolProvider.has(e))
        return !0;
      const i = new Js(), s = t.add(this._languageFeaturesService.documentSymbolProvider.onDidChange(() => {
        this._languageFeaturesService.documentSymbolProvider.has(e) && (s.dispose(), i.complete(!0));
      }));
      return t.add(St(() => i.complete(!1))), i.p;
    });
  }
  doProvideWithEditorSymbols(e, t, i, s) {
    var r;
    const n = e.editor, a = new ue();
    a.add(i.onDidAccept((d) => {
      const [p] = i.selectedItems;
      p && p.range && (this.gotoLocation(e, { range: p.range.selection, keyMods: i.keyMods, preserveFocus: d.inBackground }), d.inBackground || i.hide());
    })), a.add(i.onDidTriggerItemButton(({ item: d }) => {
      d && d.range && (this.gotoLocation(e, { range: d.range.selection, keyMods: i.keyMods, forceSideBySide: !0 }), i.hide());
    }));
    const c = this.getDocumentSymbols(t, s);
    let h;
    const u = (d) => nt(this, void 0, void 0, function* () {
      h == null || h.dispose(!0), i.busy = !1, h = new tr(s), i.busy = !0;
      try {
        const p = ni(i.value.substr(Bi.PREFIX.length).trim()), f = yield this.doGetSymbolPicks(c, p, void 0, h.token);
        if (s.isCancellationRequested)
          return;
        if (f.length > 0) {
          if (i.items = f, d && p.original.length === 0) {
            const S = Hn(f, (m) => !!(m.type !== "separator" && m.range && oe.containsPosition(m.range.decoration, d)));
            S && (i.activeItems = [S]);
          }
        } else
          p.original.length > 0 ? this.provideLabelPick(i, l("noMatchingSymbolResults", "No matching editor symbols")) : this.provideLabelPick(i, l("noSymbolResults", "No editor symbols"));
      } finally {
        s.isCancellationRequested || (i.busy = !1);
      }
    });
    return a.add(i.onDidChangeValue(() => u(void 0))), u((r = n.getSelection()) === null || r === void 0 ? void 0 : r.getPosition()), a.add(i.onDidChangeActive(() => {
      const [d] = i.activeItems;
      d && d.range && (n.revealRangeInCenter(
        d.range.selection,
        0
        /* ScrollType.Smooth */
      ), this.addDecorations(n, d.range.decoration));
    })), a;
  }
  doGetSymbolPicks(e, t, i, s) {
    var r, n;
    return nt(this, void 0, void 0, function* () {
      const a = yield e;
      if (s.isCancellationRequested)
        return [];
      const c = t.original.indexOf(Bi.SCOPE_PREFIX) === 0, h = c ? 1 : 0;
      let u, d;
      t.values && t.values.length > 1 ? (u = Gt(t.values[0]), d = Gt(t.values.slice(1))) : u = t;
      let p;
      const f = (n = (r = this.options) === null || r === void 0 ? void 0 : r.openSideBySideDirection) === null || n === void 0 ? void 0 : n.call(r);
      f && (p = [{
        iconClass: f === "right" ? Q.asClassName(A.splitHorizontal) : Q.asClassName(A.splitVertical),
        tooltip: f === "right" ? l("openToSide", "Open to the Side") : l("openToBottom", "Open to the Bottom")
      }]);
      const S = [];
      for (let v = 0; v < a.length; v++) {
        const y = a[v], C = Vn(y.name), G = `$(${Kt.toIcon(y.kind).id}) ${C}`, U = G.length - C.length;
        let O = y.containerName;
        i != null && i.extraContainerLabel && (O ? O = `${i.extraContainerLabel} • ${O}` : O = i.extraContainerLabel);
        let k, z, se, Ot;
        if (t.original.length > h) {
          let Nt = !1;
          if (u !== t && ([k, z] = Xe(G, Object.assign(Object.assign({}, t), {
            values: void 0
            /* disable multi-query support */
          }), h, U), typeof k == "number" && (Nt = !0)), typeof k != "number" && ([k, z] = Xe(G, u, h, U), typeof k != "number"))
            continue;
          if (!Nt && d) {
            if (O && d.original.length > 0 && ([se, Ot] = Xe(O, d)), typeof se != "number")
              continue;
            typeof k == "number" && (k += se);
          }
        }
        const Dt = y.tags && y.tags.indexOf(
          1
          /* SymbolTag.Deprecated */
        ) >= 0;
        S.push({
          index: v,
          kind: y.kind,
          score: k,
          label: G,
          ariaLabel: C,
          description: O,
          highlights: Dt ? void 0 : {
            label: z,
            description: Ot
          },
          range: {
            selection: oe.collapseToStart(y.selectionRange),
            decoration: y.range
          },
          strikethrough: Dt,
          buttons: p
        });
      }
      const m = S.sort((v, y) => c ? this.compareByKindAndScore(v, y) : this.compareByScore(v, y));
      let E = [];
      if (c) {
        let G = function() {
          y && typeof v == "number" && C > 0 && (y.label = Kn(wi[v] || yi, C));
        }, v, y, C = 0;
        for (const U of m)
          v !== U.kind ? (G(), v = U.kind, C = 1, y = { type: "separator" }, E.push(y)) : C++, E.push(U);
        G();
      } else
        m.length > 0 && (E = [
          { label: l("symbols", "symbols ({0})", S.length), type: "separator" },
          ...m
        ]);
      return E;
    });
  }
  compareByScore(e, t) {
    if (typeof e.score != "number" && typeof t.score == "number")
      return 1;
    if (typeof e.score == "number" && typeof t.score != "number")
      return -1;
    if (typeof e.score == "number" && typeof t.score == "number") {
      if (e.score > t.score)
        return -1;
      if (e.score < t.score)
        return 1;
    }
    return e.index < t.index ? -1 : e.index > t.index ? 1 : 0;
  }
  compareByKindAndScore(e, t) {
    const i = wi[e.kind] || yi, s = wi[t.kind] || yi, r = i.localeCompare(s);
    return r === 0 ? this.compareByScore(e, t) : r;
  }
  getDocumentSymbols(e, t) {
    return nt(this, void 0, void 0, function* () {
      const i = yield this._outlineModelService.getOrCreate(e, t);
      return t.isCancellationRequested ? [] : i.asListOfDocumentSymbols();
    });
  }
};
le.PREFIX = "@";
le.SCOPE_PREFIX = ":";
le.PREFIX_BY_CATEGORY = `${le.PREFIX}${le.SCOPE_PREFIX}`;
le = Ga([
  Hs(0, Zs),
  Hs(1, er)
], le);
const yi = l("property", "properties ({0})"), wi = {
  5: l("method", "methods ({0})"),
  11: l("function", "functions ({0})"),
  8: l("_constructor", "constructors ({0})"),
  12: l("variable", "variables ({0})"),
  4: l("class", "classes ({0})"),
  22: l("struct", "structs ({0})"),
  23: l("event", "events ({0})"),
  24: l("operator", "operators ({0})"),
  10: l("interface", "interfaces ({0})"),
  2: l("namespace", "namespaces ({0})"),
  3: l("package", "packages ({0})"),
  25: l("typeParameter", "type parameters ({0})"),
  1: l("modules", "modules ({0})"),
  6: l("property", "properties ({0})"),
  9: l("enum", "enumerations ({0})"),
  21: l("enumMember", "enumeration members ({0})"),
  14: l("string", "strings ({0})"),
  0: l("file", "files ({0})"),
  17: l("array", "arrays ({0})"),
  15: l("number", "numbers ({0})"),
  16: l("boolean", "booleans ({0})"),
  18: l("object", "objects ({0})"),
  19: l("key", "keys ({0})"),
  7: l("field", "fields ({0})"),
  13: l("constant", "constants ({0})")
};
let re = class Ar extends le {
  constructor(e, t, i, s, r, n) {
    super(s, n, {
      openSideBySideDirection: () => this.configuration.openSideBySideDirection
    }), this.editorService = e, this.editorGroupService = t, this.configurationService = i, this.outlineService = r, this.onDidActiveTextEditorControlChange = this.editorService.onDidActiveEditorChange;
  }
  get configuration() {
    var t;
    const e = (t = this.configurationService.getValue().workbench) == null ? void 0 : t.editor;
    return {
      openEditorPinned: !(e != null && e.enablePreviewFromQuickOpen) || !(e != null && e.enablePreview),
      openSideBySideDirection: e == null ? void 0 : e.openSideBySideDirection
    };
  }
  get activeTextEditorControl() {
    var e;
    if (!qn((e = this.editorService.activeEditorPane) == null ? void 0 : e.getControl()))
      return this.editorService.activeTextEditorControl;
  }
  gotoLocation(e, t) {
    var i;
    if ((t.keyMods.alt || this.configuration.openEditorPinned && t.keyMods.ctrlCmd || t.forceSideBySide) && this.editorService.activeEditor) {
      (i = e.restoreViewState) == null || i.call(e);
      const s = {
        selection: t.range,
        pinned: t.keyMods.ctrlCmd || this.configuration.openEditorPinned,
        preserveFocus: t.preserveFocus
      };
      this.editorGroupService.sideGroup.openEditor(this.editorService.activeEditor, s);
    } else
      super.gotoLocation(e, t);
  }
  async getSymbolPicks(e, t, i, s, r) {
    return !await Promise.race([
      this.waitForLanguageSymbolRegistry(e, s),
      Un(Ar.SYMBOL_PICKS_TIMEOUT)
    ]) || r.isCancellationRequested ? [] : this.doGetSymbolPicks(this.getDocumentSymbols(e, r), ni(t), i, r);
  }
  provideWithoutTextEditor(e) {
    return this.canPickWithOutlineService() ? this.doGetOutlinePicks(e) : super.provideWithoutTextEditor(e);
  }
  canPickWithOutlineService() {
    return this.editorService.activeEditorPane ? this.outlineService.canCreateOutline(this.editorService.activeEditorPane) : !1;
  }
  doGetOutlinePicks(e) {
    const t = this.editorService.activeEditorPane;
    if (!t)
      return ee.None;
    const i = new tr(), s = new ue();
    return s.add(St(() => i.dispose(!0))), e.busy = !0, this.outlineService.createOutline(t, 4, i.token).then((r) => {
      if (!r)
        return;
      if (i.token.isCancellationRequested) {
        r.dispose();
        return;
      }
      s.add(r);
      const n = r.captureViewState();
      s.add(St(() => {
        e.selectedItems.length === 0 && n.dispose();
      }));
      const a = r.config.quickPickDataSource.getQuickPickElements(), c = a.map((d, p) => ({
        kind: 0,
        index: p,
        score: 0,
        label: d.label,
        description: d.description,
        ariaLabel: d.ariaLabel,
        iconClasses: d.iconClasses
      }));
      s.add(e.onDidAccept(() => {
        e.hide();
        const [d] = e.selectedItems;
        d && a[d.index] && r.reveal(a[d.index].element, {}, !1);
      }));
      const h = () => {
        const d = c.filter((p) => {
          if (e.value === "@")
            return p.score = 0, p.highlights = void 0, !0;
          const f = Gn(e.value, e.value.toLowerCase(), 1, p.label, p.label.toLowerCase(), 0, { firstMatchCanBeWeak: !0, boostFullMatch: !0 });
          return f ? (p.score = f[1], p.highlights = { label: zn(f) }, !0) : !1;
        });
        if (d.length === 0) {
          const p = l("empty", "No matching entries");
          e.items = [{ label: p, index: -1, kind: 14 }], e.ariaLabel = p;
        } else
          e.items = d;
      };
      h(), s.add(e.onDidChangeValue(h));
      const u = new sr();
      s.add(u), s.add(e.onDidChangeActive(() => {
        const [d] = e.activeItems;
        d && a[d.index] ? u.value = r.preview(a[d.index].element) : u.clear();
      }));
    }).catch((r) => {
      ut(r), e.hide();
    }).finally(() => {
      e.busy = !1;
    }), s;
  }
};
re.SYMBOL_PICKS_TIMEOUT = 8e3;
re = B([
  g(0, M),
  g(1, Zi),
  g(2, H),
  g(3, Zs),
  g(4, Qn),
  g(5, er)
], re);
class Wt extends I {
  constructor() {
    super({
      id: Wt.ID,
      title: {
        value: l("gotoSymbol", "Go to Symbol in Editor..."),
        mnemonicTitle: l(
          { key: "miGotoSymbolInEditor", comment: ["&& denotes a mnemonic"] },
          "Go to &&Symbol in Editor..."
        ),
        original: "Go to Symbol in Editor..."
      },
      f1: !0,
      keybinding: {
        when: void 0,
        weight: 200,
        primary: 3117
      },
      menu: [{
        id: _.MenubarGoMenu,
        group: "4_symbol_nav",
        order: 1
      }]
    });
  }
  run(e) {
    e.get(Pt).quickAccess.show(re.PREFIX, { itemActivation: $n.NONE });
  }
}
Wt.ID = "workbench.action.gotoSymbol";
x(Wt);
Pe.as(ir.Quickaccess).registerQuickAccessProvider({
  ctor: re,
  prefix: le.PREFIX,
  contextKey: "inFileSymbolsPicker",
  placeholder: l("gotoSymbolQuickAccessPlaceholder", "Type the name of a symbol to go to."),
  helpEntries: [
    { description: l("gotoSymbolQuickAccess", "Go to Symbol in Editor"), prefix: le.PREFIX, commandId: Wt.ID },
    { description: l("gotoSymbolByCategoryQuickAccess", "Go to Symbol in Editor by Category"), prefix: le.PREFIX_BY_CATEGORY }
  ]
});
var za = '.quick-input-list .quick-input-list-entry.has-actions:hover .quick-input-list-entry-action-bar .action-label.dirty-anything:before{content:"\\ea76"}';
oi(za, {});
var ce;
(function(o) {
  o[o.Created = 1] = "Created", o[o.Loading = 2] = "Loading", o[o.Loaded = 3] = "Loaded", o[o.Errored = 4] = "Errored", o[o.Disposed = 5] = "Disposed";
})(ce || (ce = {}));
class ja {
  get cacheKey() {
    return this.loadingPhase === ce.Loaded || !this.previousCacheState ? this._cacheKey : this.previousCacheState.cacheKey;
  }
  get isLoaded() {
    const e = this.loadingPhase === ce.Loaded;
    return e || !this.previousCacheState ? e : this.previousCacheState.isLoaded;
  }
  get isUpdating() {
    const e = this.loadingPhase === ce.Loading;
    return e || !this.previousCacheState ? e : this.previousCacheState.isUpdating;
  }
  constructor(e, t, i, s) {
    if (this.cacheQuery = e, this.loadFn = t, this.disposeFn = i, this.previousCacheState = s, this._cacheKey = jn.nextId(), this.query = this.cacheQuery(this._cacheKey), this.loadingPhase = ce.Created, this.previousCacheState) {
      const r = Object.assign({}, this.query, { cacheKey: null }), n = Object.assign({}, this.previousCacheState.query, { cacheKey: null });
      Xn(r, n) || (this.previousCacheState.dispose(), this.previousCacheState = void 0);
    }
  }
  load() {
    return this.isUpdating ? this : (this.loadingPhase = ce.Loading, this.loadPromise = (async () => {
      try {
        await this.loadFn(this.query), this.loadingPhase = ce.Loaded, this.previousCacheState && (this.previousCacheState.dispose(), this.previousCacheState = void 0);
      } catch (e) {
        throw this.loadingPhase = ce.Errored, e;
      }
    })(), this);
  }
  dispose() {
    this.loadPromise ? (async () => {
      try {
        await this.loadPromise;
      } catch {
      }
      this.loadingPhase = ce.Disposed, this.disposeFn(this._cacheKey);
    })() : this.loadingPhase = ce.Disposed, this.previousCacheState && (this.previousCacheState.dispose(), this.previousCacheState = void 0);
  }
}
let Re = class Ut extends ts {
  get defaultFilterValue() {
    const e = this.codeEditorService.getFocusedCodeEditor();
    if (e)
      return st(Yn(e));
  }
  constructor(e, t, i, s, r) {
    super(Ut.PREFIX, {
      canAcceptInBackground: !0,
      noResultsPick: {
        label: l("noSymbolResults", "No matching workspace symbols")
      }
    }), this.labelService = e, this.openerService = t, this.editorService = i, this.configurationService = s, this.codeEditorService = r, this.delayer = this._register(new nr(Ut.TYPING_SEARCH_DELAY));
  }
  get configuration() {
    var t;
    const e = (t = this.configurationService.getValue().workbench) == null ? void 0 : t.editor;
    return {
      openEditorPinned: !(e != null && e.enablePreviewFromQuickOpen) || !(e != null && e.enablePreview),
      openSideBySideDirection: e == null ? void 0 : e.openSideBySideDirection
    };
  }
  _getPicks(e, t, i) {
    return this.getSymbolPicks(e, void 0, i);
  }
  async getSymbolPicks(e, t, i) {
    return this.delayer.trigger(async () => i.isCancellationRequested ? [] : this.doGetSymbolPicks(ni(e), t, i), t == null ? void 0 : t.delay);
  }
  async doGetSymbolPicks(e, t, i) {
    let s, r;
    e.values && e.values.length > 1 ? (s = Gt(e.values[0]), r = Gt(e.values.slice(1))) : s = e;
    const n = await or(s.original, i);
    if (i.isCancellationRequested)
      return [];
    const a = [], c = this.configuration.openSideBySideDirection;
    for (const { symbol: h, provider: u } of n) {
      if (t != null && t.skipLocal && !Ut.TREAT_AS_GLOBAL_SYMBOL_TYPES.has(h.kind) && h.containerName)
        continue;
      const d = h.name, p = `$(${Kt.toIcon(h.kind).id}) ${d}`, f = p.length - d.length;
      let S, m, E = !1;
      if (s.original.length > 0 && (s !== e && ([S, m] = Xe(p, { ...e, values: void 0 }, 0, f), typeof S == "number" && (E = !0)), typeof S != "number" && ([S, m] = Xe(p, s, 0, f), typeof S != "number")))
        continue;
      const v = h.location.uri;
      let y;
      if (v) {
        const O = this.labelService.getUriLabel(v, { relative: !0 });
        h.containerName ? y = `${h.containerName} • ${O}` : y = O;
      }
      let C, G;
      if (!E && r && r.original.length > 0) {
        if (y && ([C, G] = Xe(y, r)), typeof C != "number")
          continue;
        typeof S == "number" && (S += C);
      }
      const U = h.tags ? h.tags.indexOf(1) >= 0 : !1;
      a.push({
        symbol: h,
        resource: v,
        score: S,
        label: p,
        ariaLabel: d,
        highlights: U ? void 0 : {
          label: m,
          description: G
        },
        description: y,
        strikethrough: U,
        buttons: [
          {
            iconClass: c === "right" ? Q.asClassName(A.splitHorizontal) : Q.asClassName(A.splitVertical),
            tooltip: c === "right" ? l("openToSide", "Open to the Side") : l("openToBottom", "Open to the Bottom")
          }
        ],
        trigger: (O, k) => (this.openSymbol(u, h, i, { keyMods: k, forceOpenSideBySide: !0 }), Ae.CLOSE_PICKER),
        accept: async (O, k) => this.openSymbol(u, h, i, { keyMods: O, preserveFocus: k.inBackground, forcePinned: k.inBackground })
      });
    }
    return t != null && t.skipSorting || a.sort((h, u) => this.compareSymbols(h, u)), a;
  }
  async openSymbol(e, t, i, s) {
    let r = t;
    typeof e.resolveWorkspaceSymbol == "function" && (r = await e.resolveWorkspaceSymbol(t, i) || t, i.isCancellationRequested) || (r.location.uri.scheme === K.http || r.location.uri.scheme === K.https ? await this.openerService.open(r.location.uri, { fromUserGesture: !0, allowContributedOpeners: !0 }) : await this.editorService.openEditor({
      resource: r.location.uri,
      options: {
        preserveFocus: s == null ? void 0 : s.preserveFocus,
        pinned: s.keyMods.ctrlCmd || s.forcePinned || this.configuration.openEditorPinned,
        selection: r.location.range ? oe.collapseToStart(r.location.range) : void 0
      }
    }, s.keyMods.alt || this.configuration.openEditorPinned && s.keyMods.ctrlCmd || s != null && s.forceOpenSideBySide ? mt : ai));
  }
  compareSymbols(e, t) {
    if (typeof e.score == "number" && typeof t.score == "number") {
      if (e.score > t.score)
        return -1;
      if (e.score < t.score)
        return 1;
    }
    if (e.symbol && t.symbol) {
      const i = e.symbol.name.toLowerCase(), s = t.symbol.name.toLowerCase(), r = i.localeCompare(s);
      if (r !== 0)
        return r;
    }
    if (e.symbol && t.symbol) {
      const i = Kt.toIcon(e.symbol.kind).id, s = Kt.toIcon(t.symbol.kind).id;
      return i.localeCompare(s);
    }
    return 0;
  }
};
Re.PREFIX = "#";
Re.TYPING_SEARCH_DELAY = 200;
Re.TREAT_AS_GLOBAL_SYMBOL_TYPES = /* @__PURE__ */ new Set([
  4,
  9,
  0,
  10,
  2,
  3,
  1
]);
Re = B([
  g(0, ge),
  g(1, es),
  g(2, M),
  g(3, H),
  g(4, rr)
], Re);
const Mr = "settings", Wr = "$customized";
var Ne;
(function(o) {
  o[o.Shell = 1] = "Shell", o[o.Process = 2] = "Process", o[o.CustomExecution = 3] = "CustomExecution";
})(Ne || (Ne = {}));
(function(o) {
  function e(i) {
    switch (i.toLowerCase()) {
      case "shell":
        return o.Shell;
      case "process":
        return o.Process;
      case "customExecution":
        return o.CustomExecution;
      default:
        return o.Process;
    }
  }
  o.fromString = e;
  function t(i) {
    switch (i) {
      case o.Shell:
        return "shell";
      case o.Process:
        return "process";
      case o.CustomExecution:
        return "customExecution";
      default:
        return "process";
    }
  }
  o.toString = t;
})(Ne || (Ne = {}));
var Ze;
(function(o) {
  o.Workspace = "workspace", o.Extension = "extension", o.InMemory = "inMemory", o.WorkspaceFile = "workspaceFile", o.User = "user";
  function e(t) {
    switch (t) {
      case o.User:
        return 2;
      case o.WorkspaceFile:
        return 5;
      default:
        return 6;
    }
  }
  o.toConfigurationTarget = e;
})(Ze || (Ze = {}));
class gs {
  constructor(e, t, i, s, r, n) {
    this._label = "", this._id = e, t && (this._label = t), i && (this.type = i), this.runOptions = s, this.configurationProperties = r, this._source = n;
  }
  getDefinition(e) {
  }
  getMapKey() {
    return this._id;
  }
  getRecentlyUsedKey() {
  }
  getCommonTaskId() {
    const e = { folder: this.getFolderId(), id: this._id };
    return JSON.stringify(e);
  }
  clone() {
    return this.fromObject(Object.assign({}, this));
  }
  getWorkspaceFolder() {
  }
  getWorkspaceFileName() {
  }
  getTelemetryKind() {
    return "unknown";
  }
  matches(e, t = !1) {
    if (e === void 0)
      return !1;
    if (Me(e))
      return e === this._label || e === this.configurationProperties.identifier || t && e === this._id;
    const i = this.getDefinition(!0);
    return i !== void 0 && i._key === e._key;
  }
  getQualifiedLabel() {
    const e = this.getWorkspaceFolder();
    return e ? `${this._label} (${e.name})` : this._label;
  }
  getTaskExecution() {
    return {
      id: this._id,
      task: this
    };
  }
  addTaskLoadMessages(e) {
    this._taskLoadMessages === void 0 && (this._taskLoadMessages = []), e && (this._taskLoadMessages = this._taskLoadMessages.concat(e));
  }
  get taskLoadMessages() {
    return this._taskLoadMessages;
  }
}
class Ye extends gs {
  constructor(e, t, i, s, r, n, a, c) {
    super(e, i, void 0, a, c, t), this.command = {}, this._source = t, this.hasDefinedMatchers = n, r && (this.command = r);
  }
  clone() {
    return new Ye(
      this._id,
      this._source,
      this._label,
      this.type,
      this.command,
      this.hasDefinedMatchers,
      this.runOptions,
      this.configurationProperties
    );
  }
  customizes() {
    if (this._source && this._source.customizes)
      return this._source.customizes;
  }
  getDefinition(e = !1) {
    if (e && this._source.customizes !== void 0)
      return this._source.customizes;
    {
      let t;
      switch (this.command ? this.command.runtime : void 0) {
        case Ne.Shell:
          t = "shell";
          break;
        case Ne.Process:
          t = "process";
          break;
        case Ne.CustomExecution:
          t = "customExecution";
          break;
        case void 0:
          t = "$composite";
          break;
        default:
          throw new Error("Unexpected task runtime");
      }
      return {
        type: t,
        _key: this._id,
        id: this._id
      };
    }
  }
  static is(e) {
    return e instanceof Ye;
  }
  getMapKey() {
    const e = this._source.config.workspaceFolder;
    return e ? `${e.uri.toString()}|${this._id}|${this.instance}` : `${this._id}|${this.instance}`;
  }
  getFolderId() {
    var e;
    return this._source.kind === Ze.User ? Mr : (e = this._source.config.workspaceFolder) == null ? void 0 : e.uri.toString();
  }
  getCommonTaskId() {
    return this._source.customizes ? super.getCommonTaskId() : this.getRecentlyUsedKey() ?? super.getCommonTaskId();
  }
  getRecentlyUsedKey() {
    const e = this.getFolderId();
    if (!e)
      return;
    let t = this.configurationProperties.identifier;
    return this._source.kind !== Ze.Workspace && (t += this._source.kind), JSON.stringify({ type: Wr, folder: e, id: t });
  }
  getWorkspaceFolder() {
    return this._source.config.workspaceFolder;
  }
  getWorkspaceFileName() {
    return this._source.config.workspace && this._source.config.workspace.configuration ? ar(this._source.config.workspace.configuration) : void 0;
  }
  getTelemetryKind() {
    return this._source.customizes ? "workspace>extension" : "workspace";
  }
  fromObject(e) {
    return new Ye(
      e._id,
      e._source,
      e._label,
      e.type,
      e.command,
      e.hasDefinedMatchers,
      e.runOptions,
      e.configurationProperties
    );
  }
}
class De extends gs {
  constructor(e, t, i, s, r, n, a) {
    super(e, i, s, n, a, t), this._source = t, this.configures = r;
  }
  static is(e) {
    return e instanceof De;
  }
  fromObject(e) {
    return e;
  }
  getDefinition() {
    return this.configures;
  }
  getWorkspaceFileName() {
    return this._source.config.workspace && this._source.config.workspace.configuration ? ar(this._source.config.workspace.configuration) : void 0;
  }
  getWorkspaceFolder() {
    return this._source.config.workspaceFolder;
  }
  getFolderId() {
    var e;
    return this._source.kind === Ze.User ? Mr : (e = this._source.config.workspaceFolder) == null ? void 0 : e.uri.toString();
  }
  getRecentlyUsedKey() {
    const e = this.getFolderId();
    if (!e)
      return;
    let t = this.configurationProperties.identifier;
    return this._source.kind !== Ze.Workspace && (t += this._source.kind), JSON.stringify({ type: Wr, folder: e, id: t });
  }
}
class Je extends gs {
  constructor(e, t, i, s, r, n, a, c, h) {
    super(e, i, s, c, h, t), this.defines = r, this.hasDefinedMatchers = a, this.command = n, this.icon = h.icon, this.hide = h.hide;
  }
  clone() {
    return new Je(
      this._id,
      this._source,
      this._label,
      this.type,
      this.defines,
      this.command,
      this.hasDefinedMatchers,
      this.runOptions,
      this.configurationProperties
    );
  }
  getDefinition() {
    return this.defines;
  }
  static is(e) {
    return e instanceof Je;
  }
  getMapKey() {
    const e = this._source.workspaceFolder;
    return e ? `${this._source.scope.toString()}|${e.uri.toString()}|${this._id}|${this.instance}` : `${this._source.scope.toString()}|${this._id}|${this.instance}`;
  }
  getFolderId() {
    if (this._source.scope === 3 && this._source.workspaceFolder)
      return this._source.workspaceFolder.uri.toString();
  }
  getRecentlyUsedKey() {
    const e = { type: "contributed", scope: this._source.scope, id: this._id };
    return e.folder = this.getFolderId(), JSON.stringify(e);
  }
  getWorkspaceFolder() {
    return this._source.workspaceFolder;
  }
  getTelemetryKind() {
    return "extension";
  }
  fromObject(e) {
    return new Je(
      e._id,
      e._source,
      e._label,
      e.type,
      e.defines,
      e.command,
      e.hasDefinedMatchers,
      e.runOptions,
      e.configurationProperties
    );
  }
}
const Xa = "task.quickOpen.detail", Ya = "task.quickOpen.skip", bi = l("taskQuickPick.showAll", "Show All Tasks..."), Ks = $("tasks-list-configure", A.gear, l("configureTaskIcon", "Configuration icon in the tasks selection list.")), Qs = $("tasks-remove", A.close, l("removeTaskIcon", "Icon for remove in the tasks selection list.")), Ja = "runTaskStorageKey";
let Vi = class xe extends ee {
  constructor(e, t, i, s, r, n, a) {
    super(), this._taskService = e, this._configurationService = t, this._quickInputService = i, this._notificationService = s, this._themeService = r, this._dialogService = n, this._storageService = a, this._sorter = this._taskService.createSorter();
  }
  _showDetail() {
    return !!this._configurationService.getValue(Xa);
  }
  _guessTaskLabel(e) {
    if (e._label)
      return e._label;
    if (De.is(e)) {
      let t = e.configures.type;
      const i = Jn(e.configures);
      return delete i._key, delete i.type, Object.keys(i).forEach((s) => t += `: ${i[s]}`), t;
    }
    return "";
  }
  static getTaskLabelWithIcon(e, t) {
    const i = t || e._label, s = e.configurationProperties.icon;
    return s ? s.id ? `$(${s.id}) ${i}` : `$(${A.tools.id}) ${i}` : `${i}`;
  }
  static applyColorStyles(e, t, i) {
    var s;
    if ((s = e.configurationProperties.icon) != null && s.color) {
      const r = i.getColorTheme(), n = Zn(r);
      t.iconClasses = [eo(e.configurationProperties.icon.color)], document.body.appendChild(n);
    }
  }
  _createTaskEntry(e, t = []) {
    const i = [
      { iconClass: Q.asClassName(Ks), tooltip: l("configureTask", "Configure Task") },
      ...t
    ], s = { label: xe.getTaskLabelWithIcon(e, this._guessTaskLabel(e)), description: this._taskService.getTaskDescription(e), task: e, detail: this._showDetail() ? e.configurationProperties.detail : void 0, buttons: i };
    return xe.applyColorStyles(e, s, this._themeService), s;
  }
  _createEntriesForGroup(e, t, i, s = []) {
    e.push({ type: "separator", label: i }), t.forEach((r) => {
      r.configurationProperties.hide || e.push(this._createTaskEntry(r, s));
    });
  }
  _createTypeEntries(e, t) {
    e.push({ type: "separator", label: l("contributedTasks", "contributed") }), t.forEach((i) => {
      e.push({ label: `$(folder) ${i}`, task: i, ariaLabel: l("taskType", "All {0} tasks", i) });
    }), e.push({ label: bi, task: bi, alwaysShow: !0 });
  }
  _handleFolderTaskResult(e) {
    const t = [];
    return Array.from(e).forEach(([i, s]) => {
      if (s.set && t.push(...s.set.tasks), s.configurations)
        for (const r in s.configurations.byIdentifier)
          t.push(s.configurations.byIdentifier[r]);
    }), t;
  }
  _dedupeConfiguredAndRecent(e, t) {
    var n, a;
    let i = [];
    const s = Array(e.length).fill(!1);
    for (let c = 0; c < t.length; c++) {
      const h = (n = t[c].getWorkspaceFolder()) == null ? void 0 : n.uri.toString(), u = (a = t[c].getDefinition()) == null ? void 0 : a._key, d = t[c].type, p = t[c]._label, f = t[c].getRecentlyUsedKey(), S = e.findIndex((m) => {
        var E, v;
        return h && u && ((E = m.getWorkspaceFolder()) == null ? void 0 : E.uri.toString()) === h && (((v = m.getDefinition()) == null ? void 0 : v._key) === u || m.type === d && m._label === p) || f && m.getRecentlyUsedKey() === f;
      });
      S === -1 ? i.push(t[c]) : (e[S] = t[c], s[S] = !0);
    }
    i = i.sort((c, h) => this._sorter.compare(c, h));
    const r = [];
    for (let c = 0; c < e.length; c++)
      (s[c] || De.is(e[c])) && r.push(e[c]);
    return { configuredTasks: i, recentTasks: r };
  }
  async getTopLevelEntries(e) {
    if (this._topLevelEntries !== void 0)
      return { entries: this._topLevelEntries };
    let t = (await this._taskService.getSavedTasks("historical")).reverse();
    const i = this._handleFolderTaskResult(await this._taskService.getWorkspaceTasks()), s = this._taskService.taskTypes();
    this._topLevelEntries = [];
    const r = this._dedupeConfiguredAndRecent(t, i), n = r.configuredTasks;
    if (t = r.recentTasks, t.length > 0) {
      const a = {
        iconClass: Q.asClassName(Qs),
        tooltip: l("removeRecent", "Remove Recently Used Task")
      };
      this._createEntriesForGroup(this._topLevelEntries, t, l("recentlyUsed", "recently used"), [a]);
    }
    return i.length > 0 && n.length > 0 && this._createEntriesForGroup(this._topLevelEntries, n, l("configured", "configured")), e && i.length === 0 && (this._topLevelEntries.push({ type: "separator", label: l("configured", "configured") }), this._topLevelEntries.push(e)), s.length > 0 && this._createTypeEntries(this._topLevelEntries, s), { entries: this._topLevelEntries, isSingleConfigured: i.length === 1 ? i[0] : void 0 };
  }
  async handleSettingOption(e) {
    const { confirmed: t } = await this._dialogService.confirm({
      type: to.Warning,
      message: l(
        "TaskQuickPick.changeSettingDetails",
        `Task detection for {0} tasks causes files in any workspace you open to be run as code. Enabling {0} task detection is a user setting and will apply to any workspace you open. 

 Do you want to enable {0} task detection for all workspaces?`,
        e
      ),
      cancelButton: l("TaskQuickPick.changeSettingNo", "No")
    });
    if (t)
      return await this._configurationService.updateValue(`${e}.autoDetect`, "on"), await new Promise((i) => setTimeout(() => i(), 100)), this.show(l("TaskService.pickRunTask", "Select the task to run"), void 0, e);
  }
  async show(e, t, i, s) {
    const r = this._quickInputService.createQuickPick();
    r.placeholder = e, r.matchOnDescription = !0, r.ignoreFocusOut = !1, r.onDidTriggerItemButton(async (a) => {
      const c = a.item.task;
      if (a.button.iconClass === Q.asClassName(Qs)) {
        const h = c && !Me(c) ? c.getRecentlyUsedKey() : void 0;
        h && this._taskService.removeRecentlyUsedTask(h);
        const u = r.items.indexOf(a.item);
        u >= 0 && (r.items = [...r.items.slice(0, u), ...r.items.slice(u + 1)]);
      } else if (a.button.iconClass === Q.asClassName(Ks)) {
        if (this._quickInputService.cancel(), Je.is(c))
          this._taskService.customize(c, void 0, !0);
        else if (Ye.is(c) || De.is(c)) {
          let h = !1;
          try {
            h = await this._taskService.openConfig(c);
          } catch {
          }
          h || this._taskService.customize(c, void 0, !0);
        }
      }
    }), s && (r.value = s);
    let n = i;
    if (!n) {
      const a = await this.getTopLevelEntries(t);
      if (a.isSingleConfigured && this._configurationService.getValue(Ya))
        return r.dispose(), this._toTask(a.isSingleConfigured);
      const c = a.entries;
      n = await this._doPickerFirstLevel(r, c);
    }
    do
      if (Me(n)) {
        if (s) {
          await this._doPickerFirstLevel(r, (await this.getTopLevelEntries(t)).entries), r.dispose();
          return;
        }
        const a = await this.doPickerSecondLevel(r, n);
        if (a && !a.settingType && a.task === null)
          r.value = "", n = await this._doPickerFirstLevel(r, (await this.getTopLevelEntries(t)).entries);
        else
          return a && Me(a.settingType) ? (r.dispose(), this.handleSettingOption(a.settingType)) : (r.dispose(), a != null && a.task && !Me(a == null ? void 0 : a.task) ? this._toTask(a == null ? void 0 : a.task) : void 0);
      } else
        return n ? (r.dispose(), this._toTask(n)) : (r.dispose(), n);
    while (1);
  }
  async _doPickerFirstLevel(e, t) {
    e.items = t, qa(this._storageService, Ja, e, !0);
    const i = await new Promise((s) => {
      dt.once(e.onDidAccept)(async () => {
        s(e.selectedItems ? e.selectedItems[0] : void 0);
      });
    });
    return i == null ? void 0 : i.task;
  }
  async doPickerSecondLevel(e, t, i) {
    if (e.busy = !0, t === bi) {
      const r = (await this._taskService.tasks()).filter((n) => !n.configurationProperties.hide).sort((n, a) => this._sorter.compare(n, a)).map((n) => this._createTaskEntry(n));
      r.push(...xe.allSettingEntries(this._configurationService)), e.items = r;
    } else
      e.value = i || "", e.items = await this._getEntriesForProvider(t);
    return await e.show(), e.busy = !1, await new Promise((r) => {
      dt.once(e.onDidAccept)(async () => {
        r(e.selectedItems ? e.selectedItems[0] : void 0);
      });
    });
  }
  static allSettingEntries(e) {
    const t = [], i = xe.getSettingEntry(e, "grunt");
    i && t.push(i);
    const s = xe.getSettingEntry(e, "gulp");
    s && t.push(s);
    const r = xe.getSettingEntry(e, "jake");
    return r && t.push(r), t;
  }
  static getSettingEntry(e, t) {
    if (e.getValue(`${t}.autoDetect`) === "off")
      return {
        label: l(
          "TaskQuickPick.changeSettingsOptions",
          "$(gear) {0} task detection is turned off. Enable {1} task detection...",
          t[0].toUpperCase() + t.slice(1),
          t
        ),
        task: null,
        settingType: t,
        alwaysShow: !0
      };
  }
  async _getEntriesForProvider(e) {
    const t = (await this._taskService.tasks({ type: e })).sort((r, n) => this._sorter.compare(r, n));
    let i = [];
    if (t.length > 0) {
      for (const r of t)
        r.configurationProperties.hide || i.push(this._createTaskEntry(r));
      i.push({
        type: "separator"
      }, {
        label: l("TaskQuickPick.goBack", "Go back ↩"),
        task: null,
        alwaysShow: !0
      });
    } else
      i = [{
        label: l("TaskQuickPick.noTasksForType", "No {0} tasks found. Go back ↩", e),
        task: null,
        alwaysShow: !0
      }];
    const s = xe.getSettingEntry(this._configurationService, e);
    return s && i.push(s), i;
  }
  async _toTask(e) {
    if (!De.is(e))
      return e;
    const t = await this._taskService.tryResolveTask(e);
    return t || this._notificationService.error(l(
      "noProviderForTask",
      'There is no task provider registered for tasks of type "{0}".',
      e.type
    )), t;
  }
};
Vi = B([
  g(0, cr),
  g(1, H),
  g(2, Pt),
  g(3, ci),
  g(4, li),
  g(5, is),
  g(6, rt)
], Vi);
let Yt = class Lr extends ts {
  constructor(e, t, i, s, r, n, a, c) {
    super(Lr.PREFIX, {
      noResultsPick: {
        label: l("noTaskResults", "No matching tasks")
      }
    }), this._taskService = t, this._configurationService = i, this._quickInputService = s, this._notificationService = r, this._dialogService = n, this._themeService = a, this._storageService = c;
  }
  async _getPicks(e, t, i) {
    if (i.isCancellationRequested)
      return [];
    const s = new Vi(
      this._taskService,
      this._configurationService,
      this._quickInputService,
      this._notificationService,
      this._themeService,
      this._dialogService,
      this._storageService
    ), r = await s.getTopLevelEntries(), n = [];
    for (const a of r.entries) {
      const c = io(e, a.label);
      if (!c)
        continue;
      a.type === "separator" && n.push(a);
      const h = a.task, u = a;
      u.highlights = { label: c }, u.trigger = (d) => {
        var p;
        if (d === 1 && ((p = u.buttons) == null ? void 0 : p.length) === 2) {
          const f = h && !Me(h) ? h.getRecentlyUsedKey() : void 0;
          return f && this._taskService.removeRecentlyUsedTask(f), Ae.REFRESH_PICKER;
        } else
          return Je.is(h) ? this._taskService.customize(h, void 0, !0) : Ye.is(h) && this._taskService.openConfig(h), Ae.CLOSE_PICKER;
      }, u.accept = async () => {
        if (Me(h)) {
          const d = await s.show(l("TaskService.pickRunTask", "Select the task to run"), void 0, h);
          d && this._taskService.run(d, { attachProblemMatcher: !0 });
        } else
          this._taskService.run(await this._toTask(h), { attachProblemMatcher: !0 });
      }, n.push(u);
    }
    return n;
  }
  async _toTask(e) {
    return De.is(e) ? this._taskService.tryResolveTask(e) : e;
  }
};
Yt.PREFIX = "task ";
Yt = B([
  g(0, Ys),
  g(1, cr),
  g(2, H),
  g(3, Pt),
  g(4, ci),
  g(5, is),
  g(6, li),
  g(7, rt)
], Yt);
function xi(o) {
  const e = o;
  return !!(e != null && e.range) && !!e.resource;
}
let ye = class ae extends ts {
  get defaultFilterValue() {
    if (this.configuration.preserveInput)
      return no.LAST;
  }
  constructor(e, t, i, s, r, n, a, c, h, u, d, p, f, S, m, E, v) {
    super(ae.PREFIX, {
      canAcceptInBackground: !0,
      noResultsPick: ae.NO_RESULTS_PICK
    }), this.instantiationService = e, this.searchService = t, this.contextService = i, this.pathService = s, this.environmentService = r, this.fileService = n, this.labelService = a, this.modelService = c, this.languageService = h, this.workingCopyService = u, this.configurationService = d, this.editorService = p, this.historyService = f, this.filesConfigurationService = S, this.textModelService = m, this.uriIdentityService = E, this.quickInputService = v, this.pickState = new class {
      constructor(y, C) {
        this.provider = y, this.editorService = C, this.picker = void 0, this.editorViewState = void 0, this.scorerCache = /* @__PURE__ */ Object.create(null), this.fileQueryCache = void 0, this.lastOriginalFilter = void 0, this.lastFilter = void 0, this.lastRange = void 0, this.lastGlobalPicks = void 0, this.isQuickNavigating = void 0;
      }
      set(y) {
        this.picker = y, ks(y.onDispose)(() => {
          y === this.picker && (this.picker = void 0);
        });
        const C = !!y.quickNavigate;
        C || (this.fileQueryCache = this.provider.createFileQueryCache(), this.scorerCache = /* @__PURE__ */ Object.create(null)), this.isQuickNavigating = C, this.lastOriginalFilter = void 0, this.lastFilter = void 0, this.lastRange = void 0, this.lastGlobalPicks = void 0, this.editorViewState = void 0;
      }
      rememberEditorViewState() {
        var C;
        if (this.editorViewState)
          return;
        const y = this.editorService.activeEditorPane;
        y && (this.editorViewState = {
          group: y.group,
          editor: y.input,
          state: st((C = oo(y.getControl())) == null ? void 0 : C.saveViewState())
        });
      }
      async restoreEditorViewState() {
        if (this.editorViewState) {
          const y = {
            viewState: this.editorViewState.state,
            preserveFocus: !0
          };
          await this.editorViewState.group.openEditor(this.editorViewState.editor, y);
        }
      }
    }(this, this.editorService), this.labelOnlyEditorHistoryPickAccessor = new ao({ skipDescription: !0 }), this.fileQueryDelayer = this._register(new nr(ae.TYPING_SEARCH_DELAY)), this.fileQueryBuilder = this.instantiationService.createInstance(rs), this.helpQuickAccess = this.instantiationService.createInstance(Bs), this.workspaceSymbolsQuickAccess = this._register(this.instantiationService.createInstance(Re)), this.editorSymbolsQuickAccess = this.instantiationService.createInstance(re);
  }
  get configuration() {
    var s;
    const e = (s = this.configurationService.getValue().workbench) == null ? void 0 : s.editor, t = this.configurationService.getValue().search, i = this.configurationService.getValue().workbench.quickOpen;
    return {
      openEditorPinned: !(e != null && e.enablePreviewFromQuickOpen) || !(e != null && e.enablePreview),
      openSideBySideDirection: e == null ? void 0 : e.openSideBySideDirection,
      includeSymbols: t == null ? void 0 : t.quickOpen.includeSymbols,
      includeHistory: t == null ? void 0 : t.quickOpen.includeHistory,
      historyFilterSortOrder: t == null ? void 0 : t.quickOpen.history.filterSortOrder,
      shortAutoSaveDelay: this.filesConfigurationService.getAutoSaveMode() === 1,
      preserveInput: i.preserveInput
    };
  }
  provide(e, t, i) {
    const s = new ue();
    this.pickState.set(e);
    const r = s.add(new sr());
    return s.add(e.onDidChangeActive(() => {
      r.value = void 0;
      const [n] = e.activeItems;
      xi(n) && (r.value = this.decorateAndRevealSymbolRange(n));
    })), s.add(ks(e.onDidHide)(({ reason: n }) => {
      n === co.Gesture && this.pickState.restoreEditorViewState();
    })), s.add(super.provide(e, t, i)), s;
  }
  decorateAndRevealSymbolRange(e) {
    const t = this.editorService.activeEditor;
    if (!this.uriIdentityService.extUri.isEqual(e.resource, t == null ? void 0 : t.resource))
      return ee.None;
    const i = this.editorService.activeTextEditorControl;
    return i ? (this.pickState.rememberEditorViewState(), i.revealRangeInCenter(e.range.selection, 0), this.addDecorations(i, e.range.decoration), St(() => this.clearDecorations(i))) : ee.None;
  }
  _getPicks(e, t, i, s) {
    var u, d;
    const r = lo(e, [re.PREFIX]);
    let n;
    if (r ? n = r.filter : n = e, this.pickState.lastRange = r == null ? void 0 : r.range, e !== this.pickState.lastOriginalFilter && n === this.pickState.lastFilter)
      return null;
    const a = !!this.pickState.lastOriginalFilter;
    this.pickState.lastOriginalFilter = e, this.pickState.lastFilter = n;
    const c = (u = this.pickState.picker) == null ? void 0 : u.items, h = (d = this.pickState.picker) == null ? void 0 : d.activeItems[0];
    if (c && h) {
      const p = xi(h), f = h === ae.NO_RESULTS_PICK && n.indexOf(re.PREFIX) >= 0;
      !p && !f && (this.pickState.lastGlobalPicks = {
        items: c,
        active: h
      });
    }
    return this.doGetPicks(n, { enableEditorSymbolSearch: a, includeHelp: s == null ? void 0 : s.includeHelp, from: s == null ? void 0 : s.from }, t, i);
  }
  doGetPicks(e, t, i, s) {
    var h;
    const r = ni(e);
    if (t.enableEditorSymbolSearch) {
      const u = this.getEditorSymbolPicks(r, i, s);
      if (u)
        return u;
    }
    const n = (h = this.pickState.picker) == null ? void 0 : h.activeItems[0];
    if (xi(n) && this.pickState.lastGlobalPicks)
      return this.pickState.lastGlobalPicks;
    const a = this.getEditorHistoryPicks(r);
    let c;
    return this.pickState.isQuickNavigating ? c = a : (c = [], t.includeHelp && c.push(...this.getHelpPicks(r, s, t)), a.length !== 0 && (c.push({ type: "separator", label: l("recentlyOpenedSeparator", "recently opened") }), c.push(...a))), {
      picks: c,
      additionalPicks: (async () => {
        const u = new je();
        for (const p of a)
          p.resource && u.set(p.resource, !0);
        const d = await this.getAdditionalPicks(r, u, s);
        return s.isCancellationRequested ? [] : d.length > 0 ? [
          { type: "separator", label: this.configuration.includeSymbols ? l("fileAndSymbolResultsSeparator", "file and symbol results") : l("fileResultsSeparator", "file results") },
          ...d
        ] : [];
      })(),
      mergeDelay: ae.SYMBOL_PICKS_MERGE_DELAY
    };
  }
  async getAdditionalPicks(e, t, i) {
    const [s, r] = await Promise.all([
      this.getFilePicks(e, t, i),
      this.getWorkspaceSymbolPicks(e, i)
    ]);
    if (i.isCancellationRequested)
      return [];
    const n = ho([...s, ...r], (c, h) => Fs(c, h, e, !0, gi, this.pickState.scorerCache), ae.MAX_RESULTS), a = [];
    for (const c of n)
      if (c.highlights)
        a.push(c);
      else {
        const { score: h, labelMatch: u, descriptionMatch: d } = Rs(c, e, !0, gi, this.pickState.scorerCache);
        if (!h)
          continue;
        c.highlights = {
          label: u,
          description: d
        }, a.push(c);
      }
    return a;
  }
  getEditorHistoryPicks(e) {
    const t = this.configuration;
    if (!e.normalized)
      return this.historyService.getHistory().map((r) => this.createAnythingPick(r, t));
    if (!this.configuration.includeHistory)
      return [];
    const i = e.containsPathSeparator ? gi : this.labelOnlyEditorHistoryPickAccessor, s = [];
    for (const r of this.historyService.getHistory()) {
      const n = r.resource;
      if (!n || !this.fileService.hasProvider(n) && n.scheme !== K.untitled && n.scheme !== K.vscodeTerminal)
        continue;
      const a = this.createAnythingPick(r, t), { score: c, labelMatch: h, descriptionMatch: u } = Rs(a, e, !1, i, this.pickState.scorerCache);
      c && (a.highlights = {
        label: h,
        description: u
      }, s.push(a));
    }
    return this.configuration.historyFilterSortOrder === "recency" ? s : s.sort((r, n) => Fs(r, n, e, !1, i, this.pickState.scorerCache));
  }
  createFileQueryCache() {
    return new ja(
      (e) => this.fileQueryBuilder.file(this.contextService.getWorkspace().folders, this.getFileQueryOptions({ cacheKey: e })),
      (e) => this.searchService.fileSearch(e),
      (e) => this.searchService.clearCache(e),
      this.pickState.fileQueryCache
    ).load();
  }
  async getFilePicks(e, t, i) {
    var a;
    if (!e.normalized)
      return [];
    const s = await this.getAbsolutePathFileResult(e, i);
    if (i.isCancellationRequested)
      return [];
    let r;
    if (s) {
      if (t.has(s))
        return [];
      const c = this.createAnythingPick(s, this.configuration);
      return c.highlights = {
        label: [{ start: 0, end: c.label.length }],
        description: c.description ? [{ start: 0, end: c.description.length }] : void 0
      }, [c];
    }
    if ((a = this.pickState.fileQueryCache) != null && a.isLoaded ? r = await this.doFileSearch(e, i) : r = await this.fileQueryDelayer.trigger(async () => i.isCancellationRequested ? [] : this.doFileSearch(e, i)), i.isCancellationRequested)
      return [];
    const n = this.configuration;
    return r.filter((c) => !t.has(c)).map((c) => this.createAnythingPick(c, n));
  }
  async doFileSearch(e, t) {
    const [i, s] = await Promise.all([
      this.getFileSearchResults(e, t),
      this.getRelativePathFileResults(e, t)
    ]);
    if (t.isCancellationRequested)
      return [];
    if (!s)
      return i;
    const r = new je();
    for (const n of s)
      r.set(n, !0);
    return [
      ...i.filter((n) => !r.has(n)),
      ...s
    ];
  }
  async getFileSearchResults(e, t) {
    let i = "";
    e.values && e.values.length > 1 ? i = e.values[0].original : i = e.original;
    const s = await this.doGetFileSearchResults(i, t);
    if (t.isCancellationRequested)
      return [];
    if (s.limitHit && e.values && e.values.length > 1) {
      const r = await this.doGetFileSearchResults(e.original, t);
      if (t.isCancellationRequested)
        return [];
      const n = new je();
      for (const a of s.results)
        n.set(a.resource, !0);
      for (const a of r.results)
        n.has(a.resource) || s.results.push(a);
    }
    return s.results.map((r) => r.resource);
  }
  doGetFileSearchResults(e, t) {
    var i;
    return this.searchService.fileSearch(this.fileQueryBuilder.file(this.contextService.getWorkspace().folders, this.getFileQueryOptions({
      filePattern: e,
      cacheKey: (i = this.pickState.fileQueryCache) == null ? void 0 : i.cacheKey,
      maxResults: ae.MAX_RESULTS
    })), t);
  }
  getFileQueryOptions(e) {
    return {
      _reason: "openFileHandler",
      extraFileResources: this.instantiationService.invokeFunction(ns),
      filePattern: e.filePattern || "",
      cacheKey: e.cacheKey,
      maxResults: e.maxResults || 0,
      sortByScore: !0
    };
  }
  async getAbsolutePathFileResult(e, t) {
    if (!e.containsPathSeparator)
      return;
    const i = await this.pathService.userHome(), s = uo(e.original, i.scheme === K.file ? i.fsPath : i.path);
    if (t.isCancellationRequested)
      return;
    const r = (await this.pathService.path).isAbsolute(s);
    if (!t.isCancellationRequested && r) {
      const n = Ps(await this.pathService.fileURI(s), this.environmentService.remoteAuthority, this.pathService.defaultUriScheme);
      if (t.isCancellationRequested)
        return;
      try {
        if ((await this.fileService.stat(n)).isFile)
          return n;
      } catch {
      }
    }
  }
  async getRelativePathFileResults(e, t) {
    if (!e.containsPathSeparator)
      return;
    if (!(await this.pathService.path).isAbsolute(e.original)) {
      const s = [];
      for (const r of this.contextService.getWorkspace().folders) {
        if (t.isCancellationRequested)
          break;
        const n = Ps(r.toResource(e.original), this.environmentService.remoteAuthority, this.pathService.defaultUriScheme);
        try {
          (await this.fileService.stat(n)).isFile && s.push(n);
        } catch {
        }
      }
      return s;
    }
  }
  getHelpPicks(e, t, i) {
    if (e.normalized)
      return [];
    const s = this.helpQuickAccess.getQuickAccessProviders(), r = /* @__PURE__ */ new Map();
    for (const c of s)
      r.set(c.prefix, c);
    const n = [], a = (c, h = {}) => {
      if (r.has(c)) {
        const u = r.get(c);
        u.label = u.description, u.description = u.prefix;
        const d = {
          ...i,
          includeHelp: u.prefix === ae.PREFIX ? !1 : i == null ? void 0 : i.includeHelp
        };
        n.push({
          ...r.get(c),
          ...h,
          accept: () => {
            this.quickInputService.quickAccess.show(u.prefix, {
              preserveValue: !0,
              providerOptions: d
            });
          }
        });
      }
    };
    return a(ae.PREFIX), a(Va.PREFIX), a(re.PREFIX), a(Qa), a(Yt.PREFIX), a(Bs.PREFIX, {
      label: l("more", "More")
    }), n;
  }
  async getWorkspaceSymbolPicks(e, t) {
    const i = this.configuration;
    return !e.normalized || !i.includeSymbols || this.pickState.lastRange ? [] : this.workspaceSymbolsQuickAccess.getSymbolPicks(e.original, {
      skipLocal: !0,
      skipSorting: !0,
      delay: ae.TYPING_SEARCH_DELAY
    }, t);
  }
  getEditorSymbolPicks(e, t, i) {
    var c, h;
    const s = e.original.split(re.PREFIX), r = s.length > 1 ? s[s.length - 1].trim() : void 0;
    if (typeof r != "string")
      return null;
    const n = (c = this.pickState.lastGlobalPicks) == null ? void 0 : c.active;
    if (!n)
      return null;
    const a = n.resource;
    return !a || !this.fileService.hasProvider(a) && a.scheme !== K.untitled || (n.label.includes(re.PREFIX) || (h = n.description) != null && h.includes(re.PREFIX)) && s.length < 3 ? null : this.doGetEditorSymbolPicks(n, a, r, t, i);
  }
  async doGetEditorSymbolPicks(e, t, i, s, r) {
    try {
      this.pickState.rememberEditorViewState(), await this.editorService.openEditor({
        resource: t,
        options: { preserveFocus: !0, revealIfOpened: !0, ignoreError: !0 }
      });
    } catch {
      return [];
    }
    if (r.isCancellationRequested)
      return [];
    let n = this.modelService.getModel(t);
    if (!n)
      try {
        const c = s.add(await this.textModelService.createModelReference(t));
        if (r.isCancellationRequested)
          return [];
        n = c.object.textEditorModel;
      } catch {
        return [];
      }
    const a = await this.editorSymbolsQuickAccess.getSymbolPicks(n, i, { extraContainerLabel: go(e.label) }, s, r);
    return r.isCancellationRequested ? [] : a.map((c) => c.type === "separator" ? c : {
      ...c,
      resource: t,
      description: c.description,
      trigger: (h, u) => {
        var d;
        return this.openAnything(t, { keyMods: u, range: (d = c.range) == null ? void 0 : d.selection, forceOpenSideBySide: !0 }), Ae.CLOSE_PICKER;
      },
      accept: (h, u) => {
        var d;
        return this.openAnything(t, { keyMods: h, range: (d = c.range) == null ? void 0 : d.selection, preserveFocus: u.inBackground, forcePinned: u.inBackground });
      }
    });
  }
  addDecorations(e, t) {
    this.editorSymbolsQuickAccess.addDecorations(e, t);
  }
  clearDecorations(e) {
    this.editorSymbolsQuickAccess.clearDecorations(e);
  }
  createAnythingPick(e, t) {
    const i = !We.isUri(e);
    let s, r, n, a, c;
    Ts(e) ? (s = $t.getOriginalUri(e), r = e.getName(), n = e.getDescription(), a = e.isDirty() && !e.isSaving(), c = e.getLabelExtraClasses()) : (s = We.isUri(e) ? e : e.resource, r = po(s), n = this.labelService.getUriLabel(Ji(s), { relative: !0 }), a = this.workingCopyService.isDirty(s) && !t.shortAutoSaveDelay, c = []);
    const h = n ? `${r} ${n}` : r, u = new _s(
      () => fo(this.modelService, this.languageService, s).concat(c)
    ), d = new _s(() => {
      const p = t.openSideBySideDirection, f = [];
      return f.push({
        iconClass: p === "right" ? Q.asClassName(A.splitHorizontal) : Q.asClassName(A.splitVertical),
        tooltip: p === "right" ? l(
          { key: "openToSide", comment: ["Open this file in a split editor on the left/right side"] },
          "Open to the Side"
        ) : l(
          { key: "openToBottom", comment: ["Open this file in a split editor on the bottom"] },
          "Open to the Bottom"
        )
      }), i && f.push({
        iconClass: a ? "dirty-anything " + Q.asClassName(A.circleFilled) : Q.asClassName(A.close),
        tooltip: l("closeEditor", "Remove from Recently Opened"),
        alwaysVisible: a
      }), f;
    });
    return {
      resource: s,
      label: r,
      ariaLabel: a ? l("filePickAriaLabelDirty", "{0} unsaved changes", h) : h,
      description: n,
      get iconClasses() {
        return u.value;
      },
      get buttons() {
        return d.value;
      },
      trigger: (p, f) => {
        switch (p) {
          case 0:
            return this.openAnything(e, { keyMods: f, range: this.pickState.lastRange, forceOpenSideBySide: !0 }), Ae.CLOSE_PICKER;
          case 1:
            if (!We.isUri(e))
              return this.historyService.removeFromHistory(e), Ae.REMOVE_ITEM;
        }
        return Ae.NO_ACTION;
      },
      accept: (p, f) => this.openAnything(e, { keyMods: p, range: this.pickState.lastRange, preserveFocus: f.inBackground, forcePinned: f.inBackground })
    };
  }
  async openAnything(e, t) {
    var r, n, a;
    const i = {
      preserveFocus: t.preserveFocus,
      pinned: ((r = t.keyMods) == null ? void 0 : r.ctrlCmd) || t.forcePinned || this.configuration.openEditorPinned,
      selection: t.range ? oe.collapseToStart(t.range) : void 0
    }, s = (n = t.keyMods) != null && n.alt || this.configuration.openEditorPinned && ((a = t.keyMods) != null && a.ctrlCmd) || t.forceOpenSideBySide ? mt : ai;
    if (s === mt && await this.pickState.restoreEditorViewState(), Ts(e))
      await this.editorService.openEditor(e, i, s);
    else {
      let c;
      We.isUri(e) ? c = {
        resource: e,
        options: i
      } : c = {
        ...e,
        options: {
          ...e.options,
          ...i
        }
      }, await this.editorService.openEditor(c, s);
    }
  }
};
ye.PREFIX = "";
ye.NO_RESULTS_PICK = {
  label: l("noAnythingResults", "No matching results")
};
ye.MAX_RESULTS = 512;
ye.TYPING_SEARCH_DELAY = 200;
ye.SYMBOL_PICKS_MERGE_DELAY = 200;
ye = B([
  g(0, V),
  g(1, lr),
  g(2, pe),
  g(3, hr),
  g(4, so),
  g(5, Rt),
  g(6, ge),
  g(7, ke),
  g(8, ht),
  g(9, ur),
  g(10, H),
  g(11, M),
  g(12, ss),
  g(13, ro),
  g(14, ii),
  g(15, Xi),
  g(16, Pt)
], ye);
function Za() {
  Pe.as(dr.Workbench).registerWorkbenchContribution(Oi, 1);
}
const Or = $("search-details", A.ellipsis, l("searchDetailsIcon", "Icon to make search details visible.")), ec = $("search-show-context", A.listSelection, l(
  "searchShowContextIcon",
  "Icon for toggle the context in the search editor."
)), Ii = $("search-hide-replace", A.chevronRight, l(
  "searchHideReplaceIcon",
  "Icon to collapse the replace section in the search view."
)), qs = $("search-show-replace", A.chevronDown, l(
  "searchShowReplaceIcon",
  "Icon to expand the replace section in the search view."
)), tc = $("search-replace-all", A.replaceAll, l("searchReplaceAllIcon", "Icon for replace all in the search view.")), ps = $("search-replace", A.replace, l("searchReplaceIcon", "Icon for replace in the search view.")), ic = $("search-remove", A.close, l("searchRemoveIcon", "Icon to remove a search result.")), Dr = $("search-refresh", A.refresh, l("searchRefreshIcon", "Icon for refresh in the search view.")), sc = $("search-collapse-results", A.collapseAll, l("searchCollapseAllIcon", "Icon for collapse results in the search view.")), rc = $("search-expand-results", A.expandAll, l("searchExpandAllIcon", "Icon for expand results in the search view.")), nc = $("search-tree", A.listTree, l(
  "searchShowAsTree",
  "Icon for viewing results as a tree in the search view."
)), oc = $("search-list", A.listFlat, l(
  "searchShowAsList",
  "Icon for viewing results as a list in the search view."
)), ac = $("search-clear-results", A.clearAll, l("searchClearIcon", "Icon for clear results in the search view.")), cc = $("search-stop", A.searchStop, l("searchStopIcon", "Icon for stop in the search view.")), Nr = $("search-view-icon", A.search, l("searchViewIcon", "View icon of the search view.")), lc = $("search-new-editor", A.newFile, l("searchNewEditorIcon", "Icon for the action to open a new search editor."));
var hc = ".search-view{display:flex;flex-direction:column;height:100%}.search-view .results{flex-grow:1;min-height:0}.search-view .search-widgets-container{margin:0 12px 0 2px;padding-bottom:6px;padding-top:6px}.search-view .search-widget .toggle-replace-button{align-items:center;background-position:50%;background-repeat:no-repeat;box-sizing:border-box;color:inherit;cursor:pointer;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:16px}.monaco-workbench .search-view .search-widget .toggle-replace-button:hover{background-color:var(--vscode-toolbar-hoverBackground)}.monaco-workbench .search-view .search-widget .toggle-replace-button:active{background-color:var(--vscode-toolbar-activeBackground)}.search-view .search-widget .replace-container,.search-view .search-widget .search-container{margin-left:18px}.search-view .search-widget .monaco-inputbox>.ibwrapper{height:100%}.search-view .search-widget .monaco-inputbox>.ibwrapper>.mirror,.search-view .search-widget .monaco-inputbox>.ibwrapper>textarea.input{padding:3px 0 3px 6px}.search-view .search-widget .monaco-inputbox>.ibwrapper>textarea.input{height:26px;overflow:initial}.search-view .search-widget .monaco-findInput .monaco-scrollable-element .scrollbar{opacity:0}.search-view .monaco-inputbox>.ibwrapper>textarea.input{scrollbar-width:none}.search-view .monaco-inputbox>.ibwrapper>textarea.input::-webkit-scrollbar{display:none}.search-view .monaco-findInput{display:inline-block;vertical-align:middle;width:100%}.search-view .search-widget .replace-container{display:inline-flex;margin-top:6px;position:relative}.search-view .search-widget .replace-input{display:flex;position:relative;vertical-align:middle;width:auto!important}.search-view .search-widget .replace-input>.controls{position:absolute;right:2px;top:3px}.search-view .search-widget .replace-container.disabled{display:none}.search-view .search-widget .replace-container .monaco-action-bar{height:25px;margin-left:4px}.search-view .query-details{margin:0 0 0 18px;min-height:1em;position:relative}.search-view .query-details .more{color:inherit;cursor:pointer;height:16px;position:absolute;right:-2px;width:25px;z-index:2}.search-view .query-details .file-types{display:none}.search-view .query-details .file-types>.monaco-inputbox{height:25px;width:100%}.search-view .query-details.more .file-types{display:inherit}.search-view .query-details.more .file-types:last-child{padding-bottom:4px}.search-view .query-details.more h4{font-size:11px;font-weight:400;margin:0;overflow:hidden;padding:4px 0 0;text-overflow:ellipsis;white-space:nowrap}.search-view .messages{color:var(--vscode-search-resultsInfoForeground);cursor:default;margin-top:-5px}.search-view .message{overflow-wrap:break-word;padding:0 22px 8px}.search-view .message p:first-child{margin-bottom:0;margin-top:0;padding-bottom:4px;user-select:text;-webkit-user-select:text}.search-view .message a{color:var(--vscode-textLink-foreground)}.search-view .message a:active,.search-view .message a:hover{color:var(--vscode-textLink-activeForeground)}.search-view .filematch,.search-view .foldermatch{display:flex;height:100%;line-height:22px;padding:0;position:relative}.pane-body:not(.wide) .search-view .filematch .monaco-icon-label,.pane-body:not(.wide) .search-view .foldermatch .monaco-icon-label,.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row.focused .filematch .monaco-icon-label,.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row.focused .foldermatch .monaco-icon-label,.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row:hover:not(.highlighted) .filematch .monaco-icon-label,.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row:hover:not(.highlighted) .foldermatch .monaco-icon-label{flex:1}.pane-body.wide .search-view .filematch .badge,.pane-body.wide .search-view .foldermatch .badge{margin-left:10px}.search-view .linematch{display:flex;line-height:22px;overflow:hidden;position:relative}.search-view .linematch>.match{overflow:hidden;text-overflow:ellipsis;white-space:pre}.search-view .linematch .matchLineNum{display:none;font-size:.9em;margin-left:7px;margin-right:4px;opacity:.7}.search-view .linematch .matchLineNum.show{display:block}.pane-body.wide .search-view .monaco-list .monaco-list-row .filematch .actionBarContainer,.pane-body.wide .search-view .monaco-list .monaco-list-row .foldermatch .actionBarContainer,.search-view .monaco-list .monaco-list-row .linematch .actionBarContainer{flex:1 0 auto}.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row .filematch .actionBarContainer,.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row .foldermatch .actionBarContainer{flex:0 0 auto}.pane-body:not(.wide) .search-view .monaco-list .monaco-list-row .linematch .actionBarContainer,.search-view.actions-right .monaco-list .monaco-list-row .filematch .actionBarContainer,.search-view.actions-right .monaco-list .monaco-list-row .foldermatch .actionBarContainer,.search-view.actions-right .monaco-list .monaco-list-row .linematch .actionBarContainer{text-align:right}.search-view .monaco-list .monaco-list-row .monaco-action-bar{display:none;line-height:1em;padding:0 .8em 0 .4em}.search-view .monaco-list .monaco-list-row .monaco-action-bar .action-item{margin:0}.search-view .monaco-list .monaco-list-row.focused .monaco-action-bar,.search-view .monaco-list .monaco-list-row.selected .monaco-action-bar,.search-view .monaco-list .monaco-list-row:hover:not(.highlighted) .monaco-action-bar{display:inline-block}.search-view .monaco-list .monaco-list-row .monaco-action-bar .action-item{margin-right:.2em}.search-view .monaco-list .monaco-list-row .monaco-action-bar .action-label{padding:2px}.monaco-workbench.hc-black .search-view .monaco-list .monaco-list-row .monaco-action-bar .action-label,.monaco-workbench.hc-light .search-view .monaco-list .monaco-list-row .monaco-action-bar .action-label{margin-top:2px}.search-view .monaco-count-badge{margin-right:12px}.pane-body:not(.wide) .search-view>.results>.monaco-list .monaco-list-row.focused .filematch .monaco-count-badge,.pane-body:not(.wide) .search-view>.results>.monaco-list .monaco-list-row.focused .foldermatch .monaco-count-badge,.pane-body:not(.wide) .search-view>.results>.monaco-list .monaco-list-row.focused .linematch .monaco-count-badge,.pane-body:not(.wide) .search-view>.results>.monaco-list .monaco-list-row:hover .filematch .monaco-count-badge,.pane-body:not(.wide) .search-view>.results>.monaco-list .monaco-list-row:hover .foldermatch .monaco-count-badge,.pane-body:not(.wide) .search-view>.results>.monaco-list .monaco-list-row:hover .linematch .monaco-count-badge{display:none}.search-view .replace.findInFileMatch{background-color:var(--vscode-diffEditor-removedTextBackground);border:1px solid var(--vscode-diffEditor-removedTextBackground);text-decoration:line-through}.monaco-workbench.hc-dark .search-view .replace.findInFileMatch,.monaco-workbench.hc-light .search-view .replace.findInFileMatch{border:1px dashed var(--vscode-diffEditor-removedTextBackground)}.search-view .findInFileMatch,.search-view .replaceMatch{white-space:pre}.search-view .findInFileMatch{background-color:var(--vscode-editor-findMatchHighlightBackground);border:1px solid var(--vscode-editor-findMatchHighlightBorder)}.monaco-workbench.hc-dark .search-view .findInFileMatch,.monaco-workbench.hc-light .search-view .findInFileMatch{border:1px dashed var(--vscode-editor-findMatchHighlightBorder)}.search-view .replaceMatch{background-color:var(--vscode-diffEditor-insertedTextBackground)}.monaco-workbench.hc-black .search-view .findInFileMatch,.monaco-workbench.hc-black .search-view .replaceMatch,.monaco-workbench.hc-light .search-view .findInFileMatch,.monaco-workbench.hc-light .search-view .replaceMatch{background:none!important;box-sizing:border-box}.search-view .replaceMatch:not(:empty){border:1px solid var(--vscode-diffEditor-insertedLineBackground)}.monaco-workbench.hc-dark .search-view .replaceMatch:not(:empty),.monaco-workbench.hc-light .search-view .replaceMatch:not(:empty){border:1px dashed var(--vscode-diffEditor-insertedLineBackground)}.monaco-workbench.hc-black .search-view .filematch,.monaco-workbench.hc-black .search-view .foldermatch,.monaco-workbench.hc-black .search-view .linematch,.monaco-workbench.hc-light .search-view .filematch,.monaco-workbench.hc-light .search-view .foldermatch,.monaco-workbench.hc-light .search-view .linematch{line-height:20px}.monaco-workbench.vs .search-panel .search-view .monaco-inputbox{border:1px solid transparent}.text-search-provider-messages .providerMessage{padding-top:4px}.text-search-provider-messages .providerMessage .codicon{padding-right:3px;position:relative;top:3px}.monaco-workbench .search-view .monaco-list.element-focused .monaco-list-row.focused.selected:not(.highlighted) .action-label:focus{outline-color:var(--vscode-list-activeSelectionForeground)}.monaco-workbench .search-container .monaco-custom-toggle.disabled{background-color:inherit!important;cursor:default;opacity:.3;pointer-events:none;user-select:none;-webkit-user-select:none}.monaco-workbench .search-container .find-filter-button{box-sizing:border-box;color:inherit;cursor:pointer;float:left;margin-left:2px;user-select:none;-webkit-user-select:none}";
oi(hc, {});
class uc {
}
let yt = class extends gr {
  constructor(e, t, i, s, r, n) {
    super(), this.contextViewProvider = t, this.contextKeyService = s, this.configurationService = r, this.keybindingService = n, this._onSubmit = this._register(new j()), this.onSubmit = this._onSubmit.event, this._onCancel = this._register(new j()), this.onCancel = this._onCancel.event, i = {
      ariaLabel: l("defaultLabel", "input"),
      ...i
    }, this.width = i.width ?? 100, this.render(i), e.appendChild(this.domNode);
  }
  dispose() {
    var e;
    super.dispose(), (e = this.inputFocusTracker) == null || e.dispose();
  }
  setWidth(e) {
    this.width = e, this.contextViewProvider.layout(), this.setInputWidth();
  }
  getValue() {
    return this.inputBox.value;
  }
  setValue(e) {
    this.inputBox.value !== e && (this.inputBox.value = e);
  }
  select() {
    this.inputBox.select();
  }
  focus() {
    this.inputBox.focus();
  }
  inputHasFocus() {
    return this.inputBox.hasFocus();
  }
  setInputWidth() {
    this.inputBox.width = this.width - this.getSubcontrolsWidth() - 2;
  }
  getSubcontrolsWidth() {
    return 0;
  }
  getHistory() {
    return this.inputBox.getHistory();
  }
  clearHistory() {
    this.inputBox.clearHistory();
  }
  clear() {
    this.setValue("");
  }
  onSearchSubmit() {
    this.inputBox.addToHistory();
  }
  showNextTerm() {
    this.inputBox.showNextValue();
  }
  showPreviousTerm() {
    this.inputBox.showPreviousValue();
  }
  render(e) {
    this.domNode = document.createElement("div"), this.domNode.classList.add("monaco-findInput"), this.inputBox = new So(this.domNode, this.contextViewProvider, {
      placeholder: e.placeholder,
      showPlaceholderOnFocus: e.showPlaceholderOnFocus,
      tooltip: e.tooltip,
      ariaLabel: e.ariaLabel,
      validationOptions: {
        validation: void 0
      },
      history: e.history || [],
      showHistoryHint: () => Fi(this.keybindingService),
      inputBoxStyles: e.inputBoxStyles
    }, this.contextKeyService), this._register(this.inputBox.onDidChange(() => this._onSubmit.fire(!0))), this.inputFocusTracker = Ri(this.inputBox.inputElement), this.onkeyup(this.inputBox.inputElement, (i) => this.onInputKeyUp(i));
    const t = document.createElement("div");
    t.className = "controls", this.renderSubcontrols(t), this.domNode.appendChild(t), this.setInputWidth();
  }
  renderSubcontrols(e) {
  }
  onInputKeyUp(e) {
    switch (e.keyCode) {
      case 3:
        this.onSearchSubmit(), this._onSubmit.fire(!1);
        return;
      case 9:
        this._onCancel.fire();
        return;
    }
  }
};
yt.OPTION_CHANGE = "optionChange";
yt = B([
  g(3, te),
  g(4, H),
  g(5, Tt)
], yt);
let Jt = class extends yt {
  constructor(e, t, i, s, r, n) {
    super(e, t, i, s, r, n), this._onChangeSearchInEditorsBoxEmitter = this._register(new j()), this.onChangeSearchInEditorsBox = this._onChangeSearchInEditorsBoxEmitter.event;
  }
  dispose() {
    super.dispose(), this.useSearchInEditorsBox.dispose();
  }
  onlySearchInOpenEditors() {
    return this.useSearchInEditorsBox.checked;
  }
  setOnlySearchInOpenEditors(e) {
    this.useSearchInEditorsBox.checked = e, this._onChangeSearchInEditorsBoxEmitter.fire();
  }
  getSubcontrolsWidth() {
    return super.getSubcontrolsWidth() + this.useSearchInEditorsBox.width();
  }
  renderSubcontrols(e) {
    this.useSearchInEditorsBox = this._register(new os({
      icon: A.book,
      title: l("onlySearchInOpenEditors", "Search only in Open Editors"),
      isChecked: !1,
      ..._t
    })), this._register(this.useSearchInEditorsBox.onChange((t) => {
      this._onChangeSearchInEditorsBoxEmitter.fire(), t || this.inputBox.focus();
    })), e.appendChild(this.useSearchInEditorsBox.domNode), super.renderSubcontrols(e);
  }
};
Jt = B([
  g(3, te),
  g(4, H),
  g(5, Tt)
], Jt);
let Zt = class extends yt {
  constructor(e, t, i, s, r, n) {
    super(e, t, i, s, r, n), this._onChangeIgnoreBoxEmitter = this._register(new j()), this.onChangeIgnoreBox = this._onChangeIgnoreBoxEmitter.event;
  }
  dispose() {
    super.dispose(), this.useExcludesAndIgnoreFilesBox.dispose();
  }
  useExcludesAndIgnoreFiles() {
    return this.useExcludesAndIgnoreFilesBox.checked;
  }
  setUseExcludesAndIgnoreFiles(e) {
    this.useExcludesAndIgnoreFilesBox.checked = e, this._onChangeIgnoreBoxEmitter.fire();
  }
  getSubcontrolsWidth() {
    return super.getSubcontrolsWidth() + this.useExcludesAndIgnoreFilesBox.width();
  }
  renderSubcontrols(e) {
    this.useExcludesAndIgnoreFilesBox = this._register(new os({
      icon: A.exclude,
      actionClassName: "useExcludesAndIgnoreFiles",
      title: l(
        "useExcludesAndIgnoreFilesDescription",
        "Use Exclude Settings and Ignore Files"
      ),
      isChecked: !0,
      ..._t
    })), this._register(this.useExcludesAndIgnoreFilesBox.onChange((t) => {
      this._onChangeIgnoreBoxEmitter.fire(), t || this.inputBox.focus();
    })), e.appendChild(this.useExcludesAndIgnoreFilesBox.domNode), super.renderSubcontrols(e);
  }
};
Zt = B([
  g(3, te),
  g(4, H),
  g(5, Tt)
], Zt);
const F = { value: l("search", "Search"), original: "Search" };
function dc(o) {
  const e = W(o), t = document.activeElement;
  return !!(e && t && pr(t, e.getContainer()));
}
function _e(o, e) {
  return fc(o, e);
}
function W(o) {
  return o.getActiveViewWithId(de);
}
function fs(o, e, t) {
  let i = o.getSelection().filter((s) => s !== null).sort((s, r) => mo(s, r, t.sortOrder));
  return e && !(i.length > 1 && i.includes(e)) && (i = [e]), i;
}
function gc(o, e) {
  return e ? !e || o.includes(e) || pc(o, e) : !1;
}
function pc(o, e) {
  for (const t of o)
    if (t instanceof L && e instanceof T && t.matches().includes(e) || t instanceof J && (e instanceof L && t.getDownstreamFileMatch(e.resource) || e instanceof T && t.getDownstreamFileMatch(e.parent().resource)))
      return !0;
  return !1;
}
function $e(o, e) {
  return o.openView(de, e).then((t) => t ?? void 0);
}
function fc(o, e) {
  return e ? o + " (" + e.getLabel() + ")" : o;
}
const Br = (o, e, t, i, s, r, n) => {
  const a = R("div.providerMessage"), c = vo(o.text);
  w(a, R("." + yo.className(o.type === fr.Information ? As.Info : As.Warning).split(" ").join(".")));
  for (const h of c.nodes)
    if (typeof h == "string")
      w(a, document.createTextNode(h));
    else {
      const u = e.createInstance(wo, a, h, {
        opener: async (d) => {
          if (!o.trusted)
            return;
          const p = We.parse(d, !0);
          if (p.scheme === K.command && o.trusted) {
            const f = await s.executeCommand(p.path);
            f != null && f.triggerSearch && n();
          } else
            p.scheme === K.https ? i.open(p) : p.scheme === K.command && !o.trusted ? t.error(l(
              "unable to open trust",
              "Unable to open command link from untrusted source: {0}",
              d
            )) : t.error(l("unable to open", "Unable to open unknown link: {0}", d));
        }
      });
      r.add(u);
    }
  return a;
}, Sc = "workbench.action.findInFiles", mc = "search.action.focusSearchFromResults", vc = "search.action.openResult", yc = "search.action.openResultToSide", wc = "search.action.remove", bc = "search.action.copyPath", xc = "search.action.copyMatch", Ic = "search.action.copyAll", Ec = "search.action.openInEditor", Cc = "search.action.clearHistory", kc = "search.action.focusSearchList", Fc = "search.action.replace", Rc = "search.action.replaceAllInFile", Pc = "search.action.replaceAllInFolder", Tc = "closeReplaceInFilesWidget", Vr = "toggleSearchCaseSensitive", Hr = "toggleSearchWholeWord", Kr = "toggleSearchRegex", Qr = "toggleSearchPreserveCase", _c = "addCursorsAtSearchResults", Ac = "search.action.revealInSideBar", Mc = "workbench.action.replaceInFiles", qr = "workbench.action.showAllSymbols", Wc = "search.action.cancel", Lc = "search.action.refreshSearchResults", Oc = "search.action.focusNextSearchResult", Dc = "search.action.focusPreviousSearchResult", Nc = "workbench.action.toggleSearchOnType", Bc = "search.action.collapseSearchResults", Vc = "search.action.expandSearchResults", Hc = "search.action.clearSearchResults", Kc = "search.action.viewAsTree", Qc = "search.action.viewAsList", qc = "workbench.action.search.toggleQueryDetails", Uc = "search.action.excludeFromSearch", $c = "search.focus.nextInputBox", Gc = "search.focus.previousInputBox", zc = "search.action.restrictSearchToFolder", jc = "filesExplorer.findInFolder", Xc = "filesExplorer.findInWorkspace", ie = new N("searchViewletVisible", !0), we = new N("searchViewletFocus", !1), et = new N("inputBoxFocus", !1), Lt = new N("searchInputBoxFocus", !1), Ur = new N("replaceInputBoxFocus", !1), Yc = new N("patternIncludesInputBoxFocus", !1), Jc = new N("patternExcludesInputBoxFocus", !1), he = new N("replaceActive", !1), ne = new N("hasSearchResult", !1), $r = new N("firstMatchFocus", !1), He = new N("fileMatchOrMatchFocus", !1), Gr = new N("fileMatchOrFolderMatchFocus", !1), Hi = new N("fileMatchOrFolderMatchWithResourceFocus", !1), Fe = new N("fileMatchFocus", !1), Be = new N("folderMatchFocus", !1), ei = new N("folderMatchWithResourceFocus", !1), Z = new N("isEditableItem", !0), Ve = new N("matchFocus", !1), Ss = new N("viewHasSearchPattern", !1), zr = new N("viewHasReplacePattern", !1), jr = new N("viewHasFilePattern", !1), wt = new N("viewHasSomeCollapsibleResult", !1), bt = new N("inTreeView", !1);
class xt {
  getHeight(e) {
    return xt.ITEM_HEIGHT;
  }
  getTemplateId(e) {
    if (e instanceof J)
      return It.TEMPLATE_ID;
    if (e instanceof L)
      return Et.TEMPLATE_ID;
    if (e instanceof T)
      return Ct.TEMPLATE_ID;
    throw console.error("Invalid search tree element", e), new Error("Invalid search tree element");
  }
}
xt.ITEM_HEIGHT = 22;
let It = class Xr extends ee {
  constructor(e, t, i, s, r, n) {
    super(), this.searchView = e, this.labels = t, this.contextService = i, this.labelService = s, this.instantiationService = r, this.contextKeyService = n, this.templateId = Xr.TEMPLATE_ID;
  }
  renderCompressedElements(e, t, i, s) {
    const r = e.element, n = r.elements[r.elements.length - 1], a = r.elements.map((c) => c.name());
    if (n.resource) {
      const c = n instanceof Qt ? Bt.ROOT_FOLDER : Bt.FOLDER;
      i.label.setResource({ resource: n.resource, name: a }, {
        fileKind: c,
        separator: this.labelService.getSeparator(n.resource.scheme)
      });
    } else
      i.label.setLabel(l("searchFolderMatch.other.label", "Other files"));
    this.renderFolderDetails(n, i);
  }
  renderTemplate(e) {
    const t = new ue(), i = w(e, R(".foldermatch")), s = this.labels.create(i, { supportDescriptionHighlights: !0, supportHighlights: !0 });
    t.add(s);
    const r = new Sr(
      w(i, R(".badge")),
      {},
      mr
    ), n = w(i, R(".actionBarContainer")), a = new ue();
    t.add(a);
    const c = t.add(this.contextKeyService.createScoped(e));
    Ve.bindTo(c).set(!1), Fe.bindTo(c).set(!1), Be.bindTo(c).set(!0);
    const h = this.instantiationService.createChild(new At([te, c])), u = t.add(h.createInstance(as, n, _.SearchActionMenu, {
      menuOptions: {
        shouldForwardArgs: !0
      },
      hiddenItemStrategy: 0,
      toolbarOptions: {
        primaryGroup: (d) => /^inline/.test(d)
      }
    }));
    return {
      label: s,
      badge: r,
      actions: u,
      disposables: t,
      elementDisposables: a,
      contextKeyService: c
    };
  }
  renderElement(e, t, i) {
    const s = e.element;
    if (s.resource) {
      const r = this.contextService.getWorkspaceFolder(s.resource);
      r && zt(r.uri, s.resource) ? i.label.setFile(s.resource, { fileKind: Bt.ROOT_FOLDER, hidePath: !0 }) : i.label.setFile(s.resource, { fileKind: Bt.FOLDER, hidePath: this.searchView.isTreeLayoutViewVisible });
    } else
      i.label.setLabel(l("searchFolderMatch.other.label", "Other files"));
    Z.bindTo(i.contextKeyService).set(!s.hasOnlyReadOnlyMatches()), i.elementDisposables.add(s.onChange(() => {
      Z.bindTo(i.contextKeyService).set(!s.hasOnlyReadOnlyMatches());
    })), this.renderFolderDetails(s, i);
  }
  disposeElement(e, t, i) {
    i.elementDisposables.clear();
  }
  disposeCompressedElements(e, t, i, s) {
    i.elementDisposables.clear();
  }
  disposeTemplate(e) {
    e.disposables.dispose();
  }
  renderFolderDetails(e, t) {
    const i = e.recursiveMatchCount();
    t.badge.setCount(i), t.badge.setTitleFormat(i > 1 ? l("searchFileMatches", "{0} files found", i) : l("searchFileMatch", "{0} file found", i)), t.actions.context = { viewer: this.searchView.getControl(), element: e };
  }
};
It.TEMPLATE_ID = "folderMatch";
It = B([
  g(2, pe),
  g(3, ge),
  g(4, V),
  g(5, te)
], It);
let Et = class Yr extends ee {
  constructor(e, t, i, s, r, n) {
    super(), this.searchView = e, this.labels = t, this.contextService = i, this.configurationService = s, this.instantiationService = r, this.contextKeyService = n, this.templateId = Yr.TEMPLATE_ID;
  }
  renderCompressedElements(e, t, i, s) {
    throw new Error("Should never happen since node is incompressible.");
  }
  renderTemplate(e) {
    const t = new ue(), i = new ue();
    t.add(i);
    const s = w(e, R(".filematch")), r = this.labels.create(s);
    t.add(r);
    const n = new Sr(w(s, R(".badge")), {}, mr), a = w(s, R(".actionBarContainer")), c = t.add(this.contextKeyService.createScoped(e));
    Ve.bindTo(c).set(!1), Fe.bindTo(c).set(!0), Be.bindTo(c).set(!1);
    const h = this.instantiationService.createChild(new At([te, c])), u = t.add(h.createInstance(as, a, _.SearchActionMenu, {
      menuOptions: {
        shouldForwardArgs: !0
      },
      hiddenItemStrategy: 0,
      toolbarOptions: {
        primaryGroup: (d) => /^inline/.test(d)
      }
    }));
    return {
      el: s,
      label: r,
      badge: n,
      actions: u,
      disposables: t,
      elementDisposables: i,
      contextKeyService: c
    };
  }
  renderElement(e, t, i) {
    var c, h;
    const s = e.element;
    i.el.setAttribute("data-resource", s.resource.toString());
    const r = this.configurationService.getValue("search").decorations;
    i.label.setFile(s.resource, { hidePath: this.searchView.isTreeLayoutViewVisible && !(s.parent() instanceof Pi), hideIcon: !1, fileDecorations: { colors: r.colors, badges: r.badges } });
    const n = s.count();
    i.badge.setCount(n), i.badge.setTitleFormat(n > 1 ? l("searchMatches", "{0} matches found", n) : l("searchMatch", "{0} match found", n)), i.actions.context = { viewer: this.searchView.getControl(), element: s }, Z.bindTo(i.contextKeyService).set(!s.hasOnlyReadOnlyMatches()), i.elementDisposables.add(s.onChange(() => {
      Z.bindTo(i.contextKeyService).set(!s.hasOnlyReadOnlyMatches());
    }));
    const a = (h = (c = i.el.parentElement) == null ? void 0 : c.parentElement) == null ? void 0 : h.querySelector(".monaco-tl-twistie");
    a == null || a.classList.add("force-twistie");
  }
  disposeElement(e, t, i) {
    i.elementDisposables.clear();
  }
  disposeTemplate(e) {
    e.disposables.dispose();
  }
};
Et.TEMPLATE_ID = "fileMatch";
Et = B([
  g(2, pe),
  g(3, H),
  g(4, V),
  g(5, te)
], Et);
let Ct = class Jr extends ee {
  constructor(e, t, i, s, r, n) {
    super(), this.searchModel = e, this.searchView = t, this.contextService = i, this.configurationService = s, this.instantiationService = r, this.contextKeyService = n, this.templateId = Jr.TEMPLATE_ID;
  }
  renderCompressedElements(e, t, i, s) {
    throw new Error("Should never happen since node is incompressible.");
  }
  renderTemplate(e) {
    e.classList.add("linematch");
    const t = w(e, R("a.plain.match")), i = w(t, R("span")), s = w(t, R("span.findInFileMatch")), r = w(t, R("span.replaceMatch")), n = w(t, R("span")), a = w(e, R("span.matchLineNum")), c = w(e, R("span.actionBarContainer")), h = new ue(), u = h.add(this.contextKeyService.createScoped(e));
    Ve.bindTo(u).set(!0), Fe.bindTo(u).set(!1), Be.bindTo(u).set(!1);
    const d = this.instantiationService.createChild(new At([te, u])), p = h.add(d.createInstance(as, c, _.SearchActionMenu, {
      menuOptions: {
        shouldForwardArgs: !0
      },
      hiddenItemStrategy: 0,
      toolbarOptions: {
        primaryGroup: (f) => /^inline/.test(f)
      }
    }));
    return {
      parent: t,
      before: i,
      match: s,
      replace: r,
      after: n,
      lineNumber: a,
      actions: p,
      disposables: h,
      contextKeyService: u
    };
  }
  renderElement(e, t, i) {
    const s = e.element, r = s.preview(), n = this.searchModel.isReplaceActive() && !!this.searchModel.replaceString && !(s instanceof Ie && s.isWebviewMatch());
    i.before.textContent = r.before, i.match.textContent = r.inside, i.match.classList.toggle("replace", n), i.replace.textContent = n ? s.replaceString : "", i.after.textContent = r.after, i.parent.title = (r.before + (n ? s.replaceString : r.inside) + r.after).trim().substr(0, 999), Z.bindTo(i.contextKeyService).set(!(s instanceof Ie && s.isWebviewMatch()));
    const a = s.range().endLineNumber - s.range().startLineNumber, c = a > 0 ? `+${a}` : "", h = this.configurationService.getValue("search").showLineNumbers, u = h ? `:${s.range().startLineNumber}` : "";
    i.lineNumber.classList.toggle("show", a > 0 || h), i.lineNumber.textContent = u + c, i.lineNumber.setAttribute("title", this.getMatchTitle(s, h)), i.actions.context = { viewer: this.searchView.getControl(), element: s };
  }
  disposeTemplate(e) {
    e.disposables.dispose();
  }
  getMatchTitle(e, t) {
    const i = e.range().startLineNumber, s = e.range().endLineNumber - e.range().startLineNumber, r = t ? l("lineNumStr", "From line {0}", i, s) + " " : "", n = s > 0 ? "+ " + l("numLinesStr", "{0} more lines", s) : "";
    return r + n;
  }
};
Ct.TEMPLATE_ID = "match";
Ct = B([
  g(2, pe),
  g(3, H),
  g(4, V),
  g(5, te)
], Ct);
let Ki = class {
  constructor(e, t) {
    this.searchModel = e, this.labelService = t;
  }
  getWidgetAriaLabel() {
    return l("search", "Search");
  }
  getAriaLabel(e) {
    if (e instanceof J) {
      const t = e.allDownstreamFileMatches().reduce((i, s) => i + s.count(), 0);
      return e.resource ? l(
        "folderMatchAriaLabel",
        "{0} matches in folder root {1}, Search result",
        t,
        e.name()
      ) : l(
        "otherFilesAriaLabel",
        "{0} matches outside of the workspace, Search result",
        t
      );
    }
    if (e instanceof L) {
      const t = this.labelService.getUriLabel(e.resource, { relative: !0 }) || e.resource.fsPath;
      return l(
        "fileMatchAriaLabel",
        "{0} matches in file {1} of folder {2}, Search result",
        e.count(),
        e.name(),
        bo(t)
      );
    }
    if (e instanceof T) {
      const t = e, i = this.searchModel, s = i.isReplaceActive() && !!i.replaceString, r = t.getMatchString(), n = t.range(), a = t.text().substr(0, n.endColumn + 150);
      return s ? l(
        "replacePreviewResultAria",
        "'{0}' at column {1} replace {2} with {3}",
        a,
        n.startColumn,
        r,
        t.replaceString
      ) : l(
        "searchResultAria",
        "'{0}' at column {1} found {2}",
        a,
        n.startColumn,
        r
      );
    }
    return null;
  }
};
Ki = B([
  g(1, ge)
], Ki);
const q = new N("inSearchEditor", !1), ms = "search-editor", Zr = "search/editor", Us = "searchEditorFindMatch", Qi = "workbench.editor.searchEditor", Zc = "search.action.openNewEditor", kt = "search.action.openEditor", en = "toggleSearchEditorContextLines", qi = "workbench.editorinputs.searchEditorInput";
class el extends ee {
  get markupInput() {
    return this._markupInput;
  }
  set markupInput(e) {
    this._markupInput !== e && (this._markupInput = e, this._onDidChange.fire({ markupInput: e }));
  }
  get markupPreview() {
    return this._markupPreview;
  }
  set markupPreview(e) {
    this._markupPreview !== e && (this._markupPreview = e, this._onDidChange.fire({ markupPreview: e }));
  }
  get codeInput() {
    return this._codeInput;
  }
  set codeInput(e) {
    this._codeInput !== e && (this._codeInput = e, this._onDidChange.fire({ codeInput: e }));
  }
  get codeOutput() {
    return this._codeOutput;
  }
  set codeOutput(e) {
    this._codeOutput !== e && (this._codeOutput = e, this._onDidChange.fire({ codeOutput: e }));
  }
  constructor(e, t, i, s) {
    super(), this._onDidChange = this._register(new j()), this.onDidChange = this._onDidChange.event, this._markupInput = !0, this._markupPreview = !0, this._codeInput = !0, this._codeOutput = !0, this._markupInput = e, this._markupPreview = t, this._codeInput = i, this._codeOutput = s, this._initialMarkupInput = e, this._initialMarkupPreview = t, this._initialCodeInput = i, this._initialCodeOutput = s;
  }
  isModified() {
    return this._markupInput !== this._initialMarkupInput || this._markupPreview !== this._initialMarkupPreview || this._codeInput !== this._initialCodeInput || this._codeOutput !== this._initialCodeOutput;
  }
  update(e) {
    this._markupInput = e.markupInput, this._markupPreview = e.markupPreview, this._codeInput = e.codeInput, this._codeOutput = e.codeOutput;
  }
}
var tl = ".monaco-workbench .simple-fr-find-part-wrapper{background-color:var(--vscode-editorWidget-background)!important;border-bottom-left-radius:4px;border-bottom-right-radius:4px;box-shadow:0 0 8px 2px var(--vscode-widget-shadow);color:var(--vscode-editorWidget-foreground);max-width:calc(100% - 64px);overflow:hidden;padding:0 var(--notebook-find-horizontal-padding);position:absolute;right:18px;top:-45px;transition:top .2s linear;visibility:hidden;width:var(--notebook-find-width);z-index:10}.monaco-workbench.reduce-motion .simple-fr-find-part-wrapper{transition:top 0ms linear}.monaco-workbench .notebookOverlay .simple-fr-find-part-wrapper.visible{z-index:100}.monaco-workbench .simple-fr-find-part,.monaco-workbench .simple-fr-replace-part{align-items:center;display:flex;margin:0 0 0 17px;padding:4px;pointer-events:all;position:relative;top:0;z-index:10}.monaco-workbench .simple-fr-find-part-wrapper .find-replace-progress{height:2px;position:absolute;width:100%}.monaco-workbench .simple-fr-find-part-wrapper .find-replace-progress .monaco-progress-container{height:2px;top:0!important;z-index:100!important}.monaco-workbench .simple-fr-find-part-wrapper .find-replace-progress .monaco-progress-container .progress-bit{height:2px}.monaco-workbench .simple-fr-find-part-wrapper .monaco-findInput{width:224px}.monaco-workbench .simple-fr-find-part-wrapper .button{align-items:center;background-position:50%;background-repeat:no-repeat;cursor:pointer;display:flex;flex:initial;height:20px;justify-content:center;margin-left:3px;width:20px}.monaco-workbench .simple-fr-find-part-wrapper.visible .simple-fr-find-part{visibility:visible}.monaco-workbench .simple-fr-find-part-wrapper .toggle{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:center;margin-left:0;pointer-events:all;position:absolute;top:0;width:18px}.monaco-workbench .simple-fr-find-part-wrapper.visible{visibility:visible}.monaco-workbench .simple-fr-find-part-wrapper.visible-transition{top:0}.monaco-workbench .simple-fr-find-part .monaco-findInput{flex:1}.monaco-workbench .simple-fr-find-part .button{background-position:50%;background-repeat:no-repeat;cursor:pointer;display:flex;flex:initial;height:20px;margin-left:3px;min-width:20px;width:20px}.monaco-workbench .simple-fr-find-part-wrapper .button.disabled{cursor:default;opacity:.3}.monaco-workbench .simple-fr-find-part-wrapper .monaco-custom-toggle.disabled{background-color:inherit!important;cursor:default;opacity:.3;pointer-events:none;user-select:none;-webkit-user-select:none}.monaco-workbench .simple-fr-find-part-wrapper .find-filter-button{box-sizing:border-box;color:inherit;cursor:pointer;float:left;margin-left:2px;user-select:none;-webkit-user-select:none}.find-filter-button .monaco-action-bar .action-label{padding:0}.monaco-workbench .simple-fr-find-part .monaco-inputbox>.ibwrapper>.input,.monaco-workbench .simple-fr-replace-part .monaco-inputbox>.ibwrapper>.input{height:24px}.monaco-workbench .simple-fr-find-part-wrapper .monaco-sash{background-color:var(--vscode-editorWidget-resizeBorder,var(--vscode-editorWidget-border));left:0!important}";
oi(tl, {});
$("find-filter", A.filter, l("findFilterIcon", "Icon for Find Filter in find widget."));
const il = l("notebook.find.filter.filterAction", "Find Filters"), sl = l("notebook.find.filter.findInMarkupInput", "Markdown Source"), rl = l("notebook.find.filter.findInMarkupPreview", "Rendered Markdown"), nl = l("notebook.find.filter.findInCodeInput", "Code Cell Source"), ol = l("notebook.find.filter.findInCodeOutput", "Code Cell Output"), al = 318, cl = 4;
let Ui = class extends Io {
  constructor(e, t, i, s) {
    super(t, { getActions: () => this.getActions() }, s, {
      actionRunner: i,
      classNames: t.class,
      anchorAlignmentProvider: () => 1
    }), this.filters = e;
  }
  render(e) {
    super.render(e), this.updateChecked();
  }
  getActions() {
    const e = {
      checked: this.filters.markupInput,
      class: void 0,
      enabled: !0,
      id: "findInMarkdownInput",
      label: sl,
      run: async () => {
        this.filters.markupInput = !this.filters.markupInput;
      },
      tooltip: ""
    }, t = {
      checked: this.filters.markupPreview,
      class: void 0,
      enabled: !0,
      id: "findInMarkdownInput",
      label: rl,
      run: async () => {
        this.filters.markupPreview = !this.filters.markupPreview;
      },
      tooltip: ""
    }, i = {
      checked: this.filters.codeInput,
      class: void 0,
      enabled: !0,
      id: "findInCodeInput",
      label: nl,
      run: async () => {
        this.filters.codeInput = !this.filters.codeInput;
      },
      tooltip: ""
    }, s = {
      checked: this.filters.codeOutput,
      class: void 0,
      enabled: !0,
      id: "findInCodeOutput",
      label: ol,
      run: async () => {
        this.filters.codeOutput = !this.filters.codeOutput;
      },
      tooltip: "",
      dispose: () => null
    };
    return Eo ? [
      e,
      i
    ] : [
      e,
      t,
      new Co(),
      i,
      s
    ];
  }
  updateChecked() {
    this.element.classList.toggle("checked", this._action.checked);
  }
};
Ui = B([
  g(3, cs)
], Ui);
class ll extends ee {
  constructor(e, t, i, s, r = il) {
    super(), this.filters = e, this.contextMenuService = t, this.instantiationService = i, this._actionbar = null, this._toggleStyles = s.toggleStyles, this._filtersAction = new vr(
      "notebookFindFilterAction",
      r,
      "notebook-filters " + Q.asClassName(Ua)
    ), this._filtersAction.checked = !1, this._filterButtonContainer = R(".find-filter-button"), this._filterButtonContainer.classList.add("monaco-custom-toggle"), this.createFilters(this._filterButtonContainer);
  }
  get container() {
    return this._filterButtonContainer;
  }
  get width() {
    return 2 + 2 + 2 + 16;
  }
  applyStyles(e) {
    const t = this._toggleStyles;
    this._filterButtonContainer.style.border = "1px solid transparent", this._filterButtonContainer.style.borderRadius = "3px", this._filterButtonContainer.style.borderColor = e && t.inputActiveOptionBorder || "", this._filterButtonContainer.style.color = e && t.inputActiveOptionForeground || "inherit", this._filterButtonContainer.style.backgroundColor = e && t.inputActiveOptionBackground || "";
  }
  createFilters(e) {
    this._actionbar = this._register(new yr(e, {
      actionViewItemProvider: (t) => {
        if (t.id === this._filtersAction.id)
          return this.instantiationService.createInstance(Ui, this.filters, t, new ko());
      }
    })), this._actionbar.push(this._filtersAction, { icon: !0, label: !1 });
  }
}
xo((o, e) => {
  e.addRule(`
	.notebook-editor {
		--notebook-find-width: ${al}px;
		--notebook-find-horizontal-padding: ${cl}px;
	}
	`);
});
class Ei extends Fo {
  constructor(e, t, i, s, r, n, a, c) {
    var h, u, d;
    super(e, t, i, s), this.contextMenuService = r, this.instantiationService = n, this.filters = a, this._filterChecked = !1, this._visible = !1, this._findFilter = this._register(new ll(a, r, n, i, l("searchFindInputNotebookFilter.label", "Notebook Find Filters"))), this.inputBox.paddingRight = (((h = this.caseSensitive) == null ? void 0 : h.width()) ?? 0) + (((u = this.wholeWords) == null ? void 0 : u.width()) ?? 0) + (((d = this.regex) == null ? void 0 : d.width()) ?? 0) + this._findFilter.width, this.controls.appendChild(this._findFilter.container), this._findFilter.container.classList.add("monaco-custom-toggle"), this.filterVisible = c;
  }
  set filterVisible(e) {
    this._findFilter.container.style.display = e ? "" : "none", this._visible = e, this.updateStyles();
  }
  setEnabled(e) {
    var t, i;
    super.setEnabled(e), e && (!this._filterChecked || !this._visible) ? (t = this.regex) == null || t.enable() : (i = this.regex) == null || i.disable();
  }
  updateStyles() {
    this._filterChecked = !this.filters.markupInput || !this.filters.markupPreview || !this.filters.codeInput || !this.filters.codeOutput, this._findFilter.applyStyles(this._filterChecked);
  }
}
const tn = 26;
class Ke extends vr {
  constructor(e) {
    super(Ke.ID, "", Q.asClassName(tc), !1), this._searchWidget = e;
  }
  set searchWidget(e) {
    this._searchWidget = e;
  }
  run() {
    return this._searchWidget ? this._searchWidget.triggerReplaceAll() : Promise.resolve(null);
  }
}
Ke.ID = "search.action.replaceAll";
const $s = ui ? 256 : 2048;
function Gs(o, e, t) {
  const i = !!e.match(/\n/);
  if (t && (i || t.clientHeight > tn) && t.selectionStart > 0) {
    o.stopPropagation();
    return;
  }
}
function zs(o, e, t) {
  const i = !!e.match(/\n/);
  if (t && (i || t.clientHeight > tn) && t.selectionEnd < t.value.length) {
    o.stopPropagation();
    return;
  }
}
let Qe = class ze extends gr {
  constructor(e, t, i, s, r, n, a, c, h, u, d) {
    super(), this.contextViewService = i, this.contextKeyService = s, this.keybindingService = r, this.clipboardServce = n, this.configurationService = a, this.accessibilityService = c, this.contextMenuService = h, this.instantiationService = u, this.editorService = d, this.ignoreGlobalFindBufferOnNextFocus = !1, this.previousGlobalFindBufferValue = null, this._onSearchSubmit = this._register(new j()), this.onSearchSubmit = this._onSearchSubmit.event, this._onSearchCancel = this._register(new j()), this.onSearchCancel = this._onSearchCancel.event, this._onReplaceToggled = this._register(new j()), this.onReplaceToggled = this._onReplaceToggled.event, this._onReplaceStateChange = this._register(new j()), this.onReplaceStateChange = this._onReplaceStateChange.event, this._onPreserveCaseChange = this._register(new j()), this.onPreserveCaseChange = this._onPreserveCaseChange.event, this._onReplaceValueChanged = this._register(new j()), this.onReplaceValueChanged = this._onReplaceValueChanged.event, this._onReplaceAll = this._register(new j()), this.onReplaceAll = this._onReplaceAll.event, this._onBlur = this._register(new j()), this.onBlur = this._onBlur.event, this._onDidHeightChange = this._register(new j()), this.onDidHeightChange = this._onDidHeightChange.event, this._onDidToggleContext = new j(), this.onDidToggleContext = this._onDidToggleContext.event, this.replaceActive = he.bindTo(this.contextKeyService), this.searchInputBoxFocused = Lt.bindTo(this.contextKeyService), this.replaceInputBoxFocused = Ur.bindTo(this.contextKeyService);
    const p = t.notebookOptions ?? {
      isInNotebookMarkdownInput: !0,
      isInNotebookMarkdownPreview: !0,
      isInNotebookCellInput: !0,
      isInNotebookCellOutput: !0
    };
    this._notebookFilters = this._register(new el(
      p.isInNotebookMarkdownInput,
      p.isInNotebookMarkdownPreview,
      p.isInNotebookCellInput,
      p.isInNotebookCellOutput
    )), this._register(this._notebookFilters.onDidChange(() => {
      this.searchInput instanceof Ei && this.searchInput.updateStyles();
    })), this._register(this.editorService.onDidEditorsChange((f) => {
      this.searchInput instanceof Ei && f.event.editor instanceof Ms && (f.event.kind === 3 || f.event.kind === 4) && (this.searchInput.filterVisible = this._hasNotebookOpen());
    })), this._replaceHistoryDelayer = new Le(500), this.render(e, t), this.configurationService.onDidChangeConfiguration((f) => {
      f.affectsConfiguration("editor.accessibilitySupport") && this.updateAccessibilitySupport();
    }), this.accessibilityService.onDidChangeScreenReaderOptimized(() => this.updateAccessibilitySupport()), this.updateAccessibilitySupport();
  }
  _hasNotebookOpen() {
    return this.editorService.editors.some((t) => t instanceof Ms);
  }
  getNotebookFilters() {
    return this._notebookFilters;
  }
  focus(e = !0, t = !1, i = !1) {
    this.ignoreGlobalFindBufferOnNextFocus = i, t && this.isReplaceShown() ? this.replaceInput && (this.replaceInput.focus(), e && this.replaceInput.select()) : this.searchInput && (this.searchInput.focus(), e && this.searchInput.select());
  }
  setWidth(e) {
    var t;
    (t = this.searchInput) == null || t.inputBox.layout(), this.replaceInput && (this.replaceInput.width = e - 28, this.replaceInput.inputBox.layout());
  }
  clear() {
    var e, t;
    (e = this.searchInput) == null || e.clear(), (t = this.replaceInput) == null || t.setValue(""), this.setReplaceAllActionState(!1);
  }
  isReplaceShown() {
    return this.replaceContainer ? !this.replaceContainer.classList.contains("disabled") : !1;
  }
  isReplaceActive() {
    return !!this.replaceActive.get();
  }
  getReplaceValue() {
    var e;
    return ((e = this.replaceInput) == null ? void 0 : e.getValue()) ?? "";
  }
  toggleReplace(e) {
    (e === void 0 || e !== this.isReplaceShown()) && this.onToggleReplaceButton();
  }
  getSearchHistory() {
    var e;
    return ((e = this.searchInput) == null ? void 0 : e.inputBox.getHistory()) ?? [];
  }
  getReplaceHistory() {
    var e;
    return ((e = this.replaceInput) == null ? void 0 : e.inputBox.getHistory()) ?? [];
  }
  clearHistory() {
    var e, t;
    (e = this.searchInput) == null || e.inputBox.clearHistory(), (t = this.replaceInput) == null || t.inputBox.clearHistory();
  }
  showNextSearchTerm() {
    var e;
    (e = this.searchInput) == null || e.inputBox.showNextValue();
  }
  showPreviousSearchTerm() {
    var e;
    (e = this.searchInput) == null || e.inputBox.showPreviousValue();
  }
  showNextReplaceTerm() {
    var e;
    (e = this.replaceInput) == null || e.inputBox.showNextValue();
  }
  showPreviousReplaceTerm() {
    var e;
    (e = this.replaceInput) == null || e.inputBox.showPreviousValue();
  }
  searchInputHasFocus() {
    return !!this.searchInputBoxFocused.get();
  }
  replaceInputHasFocus() {
    var e;
    return !!((e = this.replaceInput) != null && e.inputBox.hasFocus());
  }
  focusReplaceAllAction() {
    var e;
    (e = this.replaceActionBar) == null || e.focus(!0);
  }
  focusRegexAction() {
    var e;
    (e = this.searchInput) == null || e.focusOnRegex();
  }
  render(e, t) {
    this.domNode = w(e, R(".search-widget")), this.domNode.style.position = "relative", t._hideReplaceToggle || this.renderToggleReplaceButton(this.domNode), this.renderSearchInput(this.domNode, t), this.renderReplaceInput(this.domNode, t);
  }
  updateAccessibilitySupport() {
    var e;
    (e = this.searchInput) == null || e.setFocusInputOnOptionClick(!this.accessibilityService.isScreenReaderOptimized());
  }
  renderToggleReplaceButton(e) {
    const t = {
      buttonBackground: void 0,
      buttonBorder: void 0,
      buttonForeground: void 0,
      buttonHoverBackground: void 0,
      buttonSecondaryBackground: void 0,
      buttonSecondaryForeground: void 0,
      buttonSecondaryHoverBackground: void 0,
      buttonSeparator: void 0
    };
    this.toggleReplaceButton = this._register(new Ro(e, t)), this.toggleReplaceButton.element.setAttribute("aria-expanded", "false"), this.toggleReplaceButton.element.classList.add("toggle-replace-button"), this.toggleReplaceButton.icon = Ii, this.toggleReplaceButton.onDidClick(() => this.onToggleReplaceButton()), this.toggleReplaceButton.element.title = l("search.replace.toggle.button.title", "Toggle Replace");
  }
  renderSearchInput(e, t) {
    const i = {
      label: l("label.Search", "Search: Type Search Term and press Enter to search"),
      validation: (r) => this.validateSearchInput(r),
      placeholder: l("search.placeHolder", "Search"),
      appendCaseSensitiveLabel: _e("", this.keybindingService.lookupKeybinding(Vr)),
      appendWholeWordsLabel: _e("", this.keybindingService.lookupKeybinding(Hr)),
      appendRegexLabel: _e("", this.keybindingService.lookupKeybinding(Kr)),
      history: t.searchHistory,
      showHistoryHint: () => Fi(this.keybindingService),
      flexibleHeight: !0,
      flexibleMaxHeight: ze.INPUT_MAX_HEIGHT,
      showCommonFindToggles: !0,
      inputBoxStyles: t.inputBoxStyles,
      toggleStyles: t.toggleStyles
    }, s = w(e, R(".search-container.input-box"));
    this.searchInput = this._register(new Ei(
      s,
      this.contextViewService,
      i,
      this.contextKeyService,
      this.contextMenuService,
      this.instantiationService,
      this._notebookFilters,
      this._hasNotebookOpen()
    )), this.searchInput.onKeyDown((r) => this.onSearchInputKeyDown(r)), this.searchInput.setValue(t.value || ""), this.searchInput.setRegex(!!t.isRegex), this.searchInput.setCaseSensitive(!!t.isCaseSensitive), this.searchInput.setWholeWords(!!t.isWholeWords), this._register(this.searchInput.onCaseSensitiveKeyDown((r) => this.onCaseSensitiveKeyDown(r))), this._register(this.searchInput.onRegexKeyDown((r) => this.onRegexKeyDown(r))), this._register(this.searchInput.inputBox.onDidChange(() => this.onSearchInputChanged())), this._register(this.searchInput.inputBox.onDidHeightChange(() => this._onDidHeightChange.fire())), this._register(this.onReplaceValueChanged(() => {
      this._replaceHistoryDelayer.trigger(() => {
        var r;
        return (r = this.replaceInput) == null ? void 0 : r.inputBox.addToHistory();
      });
    })), this.searchInputFocusTracker = this._register(Ri(this.searchInput.inputBox.inputElement)), this._register(this.searchInputFocusTracker.onDidFocus(async () => {
      var n, a, c;
      this.searchInputBoxFocused.set(!0);
      const r = this.searchConfiguration.globalFindClipboard;
      if (!this.ignoreGlobalFindBufferOnNextFocus && r) {
        const h = await this.clipboardServce.readFindText();
        h && this.previousGlobalFindBufferValue !== h && ((n = this.searchInput) == null || n.inputBox.addToHistory(), (a = this.searchInput) == null || a.setValue(h), (c = this.searchInput) == null || c.select()), this.previousGlobalFindBufferValue = h;
      }
      this.ignoreGlobalFindBufferOnNextFocus = !1;
    })), this._register(this.searchInputFocusTracker.onDidBlur(() => this.searchInputBoxFocused.set(!1))), this.showContextToggle = new os({
      isChecked: !1,
      title: _e(l("showContext", "Toggle Context Lines"), this.keybindingService.lookupKeybinding(en)),
      icon: ec,
      ..._t
    }), this._register(this.showContextToggle.onChange(() => this.onContextLinesChanged())), t.showContextToggle && (this.contextLinesInput = new Po(
      s,
      this.contextViewService,
      { type: "number", inputBoxStyles: qt }
    ), this.contextLinesInput.element.classList.add("context-lines-input"), this.contextLinesInput.value = "" + (this.configurationService.getValue("search").searchEditor.defaultNumberOfContextLines ?? 1), this._register(this.contextLinesInput.onDidChange((r) => {
      r !== "0" && (this.showContextToggle.checked = !0), this.onContextLinesChanged();
    })), w(s, this.showContextToggle.domNode));
  }
  onContextLinesChanged() {
    this._onDidToggleContext.fire(), this.contextLinesInput.value.includes("-") && (this.contextLinesInput.value = "0"), this._onDidToggleContext.fire();
  }
  setContextLines(e) {
    this.contextLinesInput && (e === 0 ? this.showContextToggle.checked = !1 : (this.showContextToggle.checked = !0, this.contextLinesInput.value = "" + e));
  }
  renderReplaceInput(e, t) {
    this.replaceContainer = w(e, R(".replace-container.disabled"));
    const i = w(this.replaceContainer, R(".replace-input"));
    this.replaceInput = this._register(new To(i, this.contextViewService, {
      label: l("label.Replace", "Replace: Type replace term and press Enter to preview"),
      placeholder: l("search.replace.placeHolder", "Replace"),
      appendPreserveCaseLabel: _e("", this.keybindingService.lookupKeybinding(Qr)),
      history: t.replaceHistory,
      showHistoryHint: () => Fi(this.keybindingService),
      flexibleHeight: !0,
      flexibleMaxHeight: ze.INPUT_MAX_HEIGHT,
      inputBoxStyles: t.inputBoxStyles,
      toggleStyles: t.toggleStyles
    }, this.contextKeyService, !0)), this._register(this.replaceInput.onDidOptionChange((s) => {
      s || this.replaceInput && this._onPreserveCaseChange.fire(this.replaceInput.getPreserveCase());
    })), this.replaceInput.onKeyDown((s) => this.onReplaceInputKeyDown(s)), this.replaceInput.setValue(t.replaceValue || ""), this._register(this.replaceInput.inputBox.onDidChange(() => this._onReplaceValueChanged.fire())), this._register(this.replaceInput.inputBox.onDidHeightChange(() => this._onDidHeightChange.fire())), this.replaceAllAction = new Ke(this), this.replaceAllAction.label = ze.REPLACE_ALL_DISABLED_LABEL, this.replaceActionBar = this._register(new yr(this.replaceContainer)), this.replaceActionBar.push([this.replaceAllAction], { icon: !0, label: !1 }), this.onkeydown(this.replaceActionBar.domNode, (s) => this.onReplaceActionbarKeyDown(s)), this.replaceInputFocusTracker = this._register(Ri(this.replaceInput.inputBox.inputElement)), this._register(this.replaceInputFocusTracker.onDidFocus(() => this.replaceInputBoxFocused.set(!0))), this._register(this.replaceInputFocusTracker.onDidBlur(() => this.replaceInputBoxFocused.set(!1))), this._register(this.replaceInput.onPreserveCaseKeyDown((s) => this.onPreserveCaseKeyDown(s)));
  }
  triggerReplaceAll() {
    return this._onReplaceAll.fire(), Promise.resolve(null);
  }
  onToggleReplaceButton() {
    var e, t, i, s, r, n;
    (e = this.replaceContainer) == null || e.classList.toggle("disabled"), this.isReplaceShown() ? ((t = this.toggleReplaceButton) == null || t.element.classList.remove(...Q.asClassNameArray(Ii)), (i = this.toggleReplaceButton) == null || i.element.classList.add(...Q.asClassNameArray(qs))) : ((s = this.toggleReplaceButton) == null || s.element.classList.remove(...Q.asClassNameArray(qs)), (r = this.toggleReplaceButton) == null || r.element.classList.add(...Q.asClassNameArray(Ii))), (n = this.toggleReplaceButton) == null || n.element.setAttribute("aria-expanded", this.isReplaceShown() ? "true" : "false"), this.updateReplaceActiveState(), this._onReplaceToggled.fire();
  }
  setValue(e) {
    var t;
    (t = this.searchInput) == null || t.setValue(e);
  }
  setReplaceAllActionState(e) {
    this.replaceAllAction && this.replaceAllAction.enabled !== e && (this.replaceAllAction.enabled = e, this.replaceAllAction.label = e ? ze.REPLACE_ALL_ENABLED_LABEL(this.keybindingService) : ze.REPLACE_ALL_DISABLED_LABEL, this.updateReplaceActiveState());
  }
  updateReplaceActiveState() {
    var i, s;
    const e = this.isReplaceActive(), t = this.isReplaceShown() && !!((i = this.replaceAllAction) != null && i.enabled);
    e !== t && (this.replaceActive.set(t), this._onReplaceStateChange.fire(t), (s = this.replaceInput) == null || s.inputBox.layout());
  }
  validateSearchInput(e) {
    var t;
    return e.length === 0 || !((t = this.searchInput) != null && t.getRegex()), null;
  }
  onSearchInputChanged() {
    var e, t, i;
    if ((e = this.searchInput) == null || e.clearMessage(), this.setReplaceAllActionState(!1), this.searchConfiguration.searchOnType)
      if ((t = this.searchInput) != null && t.getRegex())
        try {
          const s = new RegExp(this.searchInput.getValue(), "ug"), r = ((i = `
								~!@#$%^&*()_+
								\`1234567890-=
								qwertyuiop[]\\
								QWERTYUIOP{}|
								asdfghjkl;'
								ASDFGHJKL:"
								zxcvbnm,./
								ZXCVBNM<>? `.match(s)) == null ? void 0 : i.length) ?? 0, n = r < 50 ? 1 : r < 100 ? 5 : 10;
          this.submitSearch(!0, this.searchConfiguration.searchOnTypeDebouncePeriod * n);
        } catch {
        }
      else
        this.submitSearch(!0, this.searchConfiguration.searchOnTypeDebouncePeriod);
  }
  onSearchInputKeyDown(e) {
    var t, i, s, r, n, a, c, h;
    e.equals($s | 3) && ((t = this.searchInput) == null || t.inputBox.insertAtCursor(`
`), e.preventDefault()), e.equals(3) ? ((i = this.searchInput) == null || i.onSearchSubmit(), this.submitSearch(), e.preventDefault()) : e.equals(9) ? (this._onSearchCancel.fire({ focus: !0 }), e.preventDefault()) : e.equals(2) ? (this.isReplaceShown() ? (s = this.replaceInput) == null || s.focus() : (r = this.searchInput) == null || r.focusOnCaseSensitive(), e.preventDefault()) : e.equals(16) ? Gs(e, ((n = this.searchInput) == null ? void 0 : n.getValue()) ?? "", ((a = this.searchInput) == null ? void 0 : a.domNode.querySelector("textarea")) ?? null) : e.equals(18) && zs(e, ((c = this.searchInput) == null ? void 0 : c.getValue()) ?? "", ((h = this.searchInput) == null ? void 0 : h.domNode.querySelector("textarea")) ?? null);
  }
  onCaseSensitiveKeyDown(e) {
    var t;
    e.equals(1026) && this.isReplaceShown() && ((t = this.replaceInput) == null || t.focus(), e.preventDefault());
  }
  onRegexKeyDown(e) {
    var t;
    e.equals(2) && this.isReplaceShown() && ((t = this.replaceInput) == null || t.focusOnPreserve(), e.preventDefault());
  }
  onPreserveCaseKeyDown(e) {
    e.equals(2) ? (this.isReplaceActive() ? this.focusReplaceAllAction() : this._onBlur.fire(), e.preventDefault()) : e.equals(1026) && (this.focusRegexAction(), e.preventDefault());
  }
  onReplaceInputKeyDown(e) {
    var t, i, s, r, n, a, c;
    e.equals($s | 3) && ((t = this.replaceInput) == null || t.inputBox.insertAtCursor(`
`), e.preventDefault()), e.equals(3) ? (this.submitSearch(), e.preventDefault()) : e.equals(2) ? ((i = this.searchInput) == null || i.focusOnCaseSensitive(), e.preventDefault()) : e.equals(1026) ? ((s = this.searchInput) == null || s.focus(), e.preventDefault()) : e.equals(16) ? Gs(e, ((r = this.replaceInput) == null ? void 0 : r.getValue()) ?? "", ((n = this.replaceInput) == null ? void 0 : n.domNode.querySelector("textarea")) ?? null) : e.equals(18) && zs(e, ((a = this.replaceInput) == null ? void 0 : a.getValue()) ?? "", ((c = this.replaceInput) == null ? void 0 : c.domNode.querySelector("textarea")) ?? null);
  }
  onReplaceActionbarKeyDown(e) {
    e.equals(1026) && (this.focusRegexAction(), e.preventDefault());
  }
  async submitSearch(e = !1, t = 0) {
    var r, n;
    if ((r = this.searchInput) == null || r.validate(), !((n = this.searchInput) != null && n.inputBox.isInputValid()))
      return;
    const i = this.searchInput.getValue(), s = this.searchConfiguration.globalFindClipboard;
    i && s && await this.clipboardServce.writeFindText(i), this._onSearchSubmit.fire({ triggeredOnType: e, delay: t });
  }
  getContextLines() {
    return this.showContextToggle.checked ? +this.contextLinesInput.value : 0;
  }
  modifyContextLines(e) {
    const i = +this.contextLinesInput.value + (e ? 1 : -1);
    this.showContextToggle.checked = i !== 0, this.contextLinesInput.value = "" + i;
  }
  toggleContextLines() {
    this.showContextToggle.checked = !this.showContextToggle.checked, this.onContextLinesChanged();
  }
  dispose() {
    this.setReplaceAllActionState(!1), super.dispose();
  }
  get searchConfiguration() {
    return this.configurationService.getValue("search");
  }
};
Qe.INPUT_MAX_HEIGHT = 134;
Qe.REPLACE_ALL_DISABLED_LABEL = l(
  "search.action.replaceAll.disabled.label",
  "Replace All (Submit Search to Enable)"
);
Qe.REPLACE_ALL_ENABLED_LABEL = (o) => {
  const e = o.lookupKeybinding(Ke.ID);
  return _e(l("search.action.replaceAll.enabled.label", "Replace All"), e);
};
Qe = B([
  g(2, ls),
  g(3, te),
  g(4, Tt),
  g(5, hi),
  g(6, H),
  g(7, wr),
  g(8, cs),
  g(9, V),
  g(10, M)
], Qe);
function hl() {
  _o.registerCommandAndKeybindingRule({
    id: Ke.ID,
    weight: 200,
    when: b.and(
      ie,
      he,
      Ao
    ),
    primary: 2563,
    handler: (o) => {
      const e = o.get(P);
      if (dc(e)) {
        const t = W(e);
        t && new Ke(t.searchAndReplaceWidget).run();
      }
    }
  });
}
var ul = ".search-editor{display:flex;flex-direction:column}.search-editor .search-results{flex:1}.search-editor .query-container{margin:0 12px 12px 19px;padding-top:6px}.search-editor .search-widget .toggle-replace-button{align-items:center;background-position:50%;background-repeat:no-repeat;box-sizing:border-box;cursor:pointer;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:16px}.search-editor .search-widget .replace-container,.search-editor .search-widget .search-container{align-items:center;display:flex}.search-editor .search-widget .monaco-findInput{display:inline-block;vertical-align:middle;width:100%}.search-editor .search-widget .monaco-inputbox>.ibwrapper{height:100%}.search-editor .search-widget .monaco-inputbox>.ibwrapper>.mirror,.search-editor .search-widget .monaco-inputbox>.ibwrapper>textarea.input{padding:3px 3px 3px 6px}.search-editor .search-widget .monaco-inputbox>.ibwrapper>.mirror{max-height:134px}.search-editor .search-widget .monaco-inputbox>.ibwrapper>textarea.input{height:26px;overflow:initial}.search-editor .monaco-inputbox>.ibwrapper>textarea.input{scrollbar-width:none}.search-editor .monaco-inputbox>.ibwrapper>textarea.input::-webkit-scrollbar{display:none}.search-editor .search-widget .context-lines-input{margin-left:5px;margin-right:2px;max-width:50px}.search-editor .search-widget .context-lines-input input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none!important}.search-editor .search-widget .replace-container{display:inline-flex;margin-top:6px;position:relative}.search-editor .search-widget .replace-input{display:flex;height:25px;position:relative;vertical-align:middle;width:auto!important}.search-editor .search-widget .replace-input>.controls{position:absolute;right:2px;top:3px}.search-editor .search-widget .replace-container.disabled{display:none}.search-editor .search-widget .replace-container .monaco-action-bar{height:25px;margin-left:0}.search-editor .search-widget .replace-container .monaco-action-bar .action-item .codicon{align-items:center;background-repeat:no-repeat;display:flex;height:25px;justify-content:center;margin-right:0;width:25px}.search-editor .includes-excludes{min-height:1em;position:relative}.search-editor .includes-excludes .expand{cursor:pointer;height:16px;position:absolute;right:-2px;width:25px;z-index:2}.search-editor .includes-excludes .file-types{display:none}.search-editor .includes-excludes.expanded .file-types{display:inherit}.search-editor .includes-excludes.expanded .file-types:last-child{padding-bottom:10px}.search-editor .includes-excludes.expanded h4{font-size:11px;font-weight:400;margin:0;overflow:hidden;padding:4px 0 0;text-overflow:ellipsis;white-space:nowrap}.search-editor .messages{cursor:default;margin-top:-5px}.search-editor .message{padding-left:7px;padding-right:22px;padding-top:0}.search-editor a.prominent{text-decoration:underline}.monaco-editor .searchEditorFindMatch{background-color:var(--vscode-searchEditor-findMatchBackground);border:1px solid var(--vscode-searchEditor-findMatchBorder);box-sizing:border-box}.monaco-editor.hc-black .searchEditorFindMatch,.monaco-editor.hc-light .searchEditorFindMatch{border:1px dotted var(--vscode-searchEditor-findMatchBorder)}";
oi(ul, {});
const sn = `
`, vs = (o) => (e) => new oe(
  e.startLineNumber + o,
  e.startColumn,
  e.endLineNumber + o,
  e.endColumn
), dl = (o, e) => {
  const t = (r) => `${o.range().startLineNumber + r}`, i = o.fullPreviewLines(), s = [];
  return i.forEach((r, n) => {
    const a = t(n), h = `  ${" ".repeat(e - a.length)}${a}: `, u = h.length, d = h + (r.split(/\r?\n?$/, 1)[0] || ""), p = ({ start: E, end: v }) => new oe(
      1,
      (E ?? 1) + u,
      1,
      (v ?? r.length + 1) + u
    ), f = o.rangeInPreview(), S = f.startLineNumber === f.endLineNumber;
    let m;
    S ? m = p({ start: f.startColumn, end: f.endColumn }) : n === 0 ? m = p({ start: f.startColumn }) : n === i.length - 1 ? m = p({ end: f.endColumn }) : m = p({}), s.push({ lineNumber: a, line: d, ranges: [m] });
  }), s;
};
function gl(o, e) {
  const t = o.textMatches().length > 0 ? rn(o.resource, o.textMatches().sort(ve), o.context, e) : void 0, i = o.cellMatches().sort((s, r) => s.cellIndex - r.cellIndex).sort().filter((s) => s.contentMatches.length > 0).map(
    (s, r) => pl(s, e, r === 0)
  );
  return [t, ...i].filter((s) => !!s);
}
function rn(o, e, t, i, s = !0) {
  const r = e[e.length - 1].range().endLineNumber.toString().length, n = s ? [`${i(o)}:`] : [], a = [], c = {}, h = [];
  t.forEach((p, f) => h.push({ line: p, lineNumber: f })), h.sort((p, f) => p.lineNumber - f.lineNumber);
  let u;
  const d = /* @__PURE__ */ new Set();
  for (e.forEach((p) => {
    dl(p, r).forEach((f) => {
      if (!d.has(f.lineNumber)) {
        for (; h.length && h[0].lineNumber < +f.lineNumber; ) {
          const { line: S, lineNumber: m } = h.shift();
          u !== void 0 && m !== u + 1 && n.push(""), n.push(`  ${" ".repeat(r - `${m}`.length)}${m}  ${S}`), u = m;
        }
        c[f.lineNumber] = n.length, d.add(f.lineNumber), n.push(f.line), u = +f.lineNumber;
      }
      a.push(...f.ranges.map(vs(c[f.lineNumber])));
    });
  }); h.length; ) {
    const { line: p, lineNumber: f } = h.shift();
    n.push(`  ${f}  ${p}`);
  }
  return { text: n, matchRanges: a };
}
function pl(o, e, t) {
  return rn(o.cell.uri, o.contentMatches.sort(ve), o.context, e, t);
}
const fl = (o, e, t, i) => {
  var s, r, n, a;
  return {
    query: o.contentPattern.pattern,
    isRegexp: !!o.contentPattern.isRegExp,
    isCaseSensitive: !!o.contentPattern.isCaseSensitive,
    matchWholeWord: !!o.contentPattern.isWordMatch,
    filesToExclude: t,
    filesToInclude: e,
    showIncludesExcludes: !!(e || t || o != null && o.userDisabledExcludesAndIgnoreFiles),
    useExcludeSettingsAndIgnoreFiles: (o == null ? void 0 : o.userDisabledExcludesAndIgnoreFiles) === void 0 ? !0 : !o.userDisabledExcludesAndIgnoreFiles,
    contextLines: i,
    onlyOpenEditors: !!o.onlyOpenEditors,
    notebookSearchConfig: {
      includeMarkupInput: !!((s = o.contentPattern.notebookInfo) != null && s.isInNotebookMarkdownInput),
      includeMarkupPreview: !!((r = o.contentPattern.notebookInfo) != null && r.isInNotebookMarkdownPreview),
      includeCodeInput: !!((n = o.contentPattern.notebookInfo) != null && n.isInNotebookCellInput),
      includeOutput: !!((a = o.contentPattern.notebookInfo) != null && a.isInNotebookCellOutput)
    }
  };
}, Sl = (o) => ((i) => i.filter((s) => s !== !1 && s !== null && s !== void 0))([
  `# Query: ${((i) => i.replace(/\\/g, "\\\\").replace(/\n/g, "\\n"))(o.query ?? "")}`,
  (o.isCaseSensitive || o.matchWholeWord || o.isRegexp || o.useExcludeSettingsAndIgnoreFiles === !1) && `# Flags: ${at([
    o.isCaseSensitive && "CaseSensitive",
    o.matchWholeWord && "WordMatch",
    o.isRegexp && "RegExp",
    o.onlyOpenEditors && "OpenEditors",
    o.useExcludeSettingsAndIgnoreFiles === !1 && "IgnoreExcludeSettings"
  ]).join(" ")}`,
  o.filesToInclude ? `# Including: ${o.filesToInclude}` : void 0,
  o.filesToExclude ? `# Excluding: ${o.filesToExclude}` : void 0,
  o.contextLines ? `# ContextLines: ${o.contextLines}` : void 0,
  ""
]).join(sn), nn = () => ({
  query: "",
  filesToInclude: "",
  filesToExclude: "",
  isRegexp: !1,
  isCaseSensitive: !1,
  useExcludeSettingsAndIgnoreFiles: !0,
  matchWholeWord: !1,
  contextLines: 0,
  showIncludesExcludes: !1,
  onlyOpenEditors: !1,
  notebookSearchConfig: {
    includeMarkupInput: !0,
    includeMarkupPreview: !1,
    includeCodeInput: !0,
    includeOutput: !0
  }
}), ml = (o) => {
  const e = nn(), t = (s) => {
    let r = "";
    for (let n = 0; n < s.length; n++)
      if (s[n] === "\\") {
        n++;
        const a = s[n];
        if (a === "n")
          r += `
`;
        else if (a === "\\")
          r += "\\";
        else
          throw Error(l("invalidQueryStringError", "All backslashes in Query string must be escaped (\\\\)"));
      } else
        r += s[n];
    return r;
  }, i = /^# ([^:]*): (.*)$/;
  for (const s of o) {
    const r = i.exec(s);
    if (!r)
      continue;
    const [, n, a] = r;
    switch (n) {
      case "Query":
        e.query = t(a);
        break;
      case "Including":
        e.filesToInclude = a;
        break;
      case "Excluding":
        e.filesToExclude = a;
        break;
      case "ContextLines":
        e.contextLines = +a;
        break;
      case "Flags":
        e.isRegexp = a.indexOf("RegExp") !== -1, e.isCaseSensitive = a.indexOf("CaseSensitive") !== -1, e.useExcludeSettingsAndIgnoreFiles = a.indexOf("IgnoreExcludeSettings") === -1, e.matchWholeWord = a.indexOf("WordMatch") !== -1, e.onlyOpenEditors = a.indexOf("OpenEditors") !== -1;
    }
  }
  return e.showIncludesExcludes = !!(e.filesToInclude || e.filesToExclude || !e.useExcludeSettingsAndIgnoreFiles), e;
}, on = (o, e, t, i, s, r, n) => {
  if (!o.query)
    throw Error("Internal Error: Expected query, got null");
  const a = fl(o.query, e, t, i), c = o.fileCount() > 1 ? l("numFiles", "{0} files", o.fileCount()) : l("oneFile", "1 file"), h = o.count() > 1 ? l("numResults", "{0} results", o.count()) : l("oneResult", "1 result"), u = [
    o.count() ? `${h} - ${c}` : l("noResults", "No Results")
  ];
  n && u.push(l(
    "searchMaxResultsWarning",
    "The result set only contains a subset of all matches. Be more specific in your search to narrow down the results."
  )), u.push("");
  const d = (f, S) => ve(f, S, r), p = vl(ki(o.folderMatches().sort(d).map((f) => f.allDownstreamFileMatches().sort(d).flatMap((S) => gl(S, s)))));
  return {
    matchRanges: p.matchRanges.map(vs(u.length)),
    text: u.concat(p.text).join(sn),
    config: a
  };
}, vl = (o) => {
  const e = [], t = [];
  return o.forEach((i) => {
    i.matchRanges.map(vs(e.length)).forEach((s) => t.push(s)), i.text.forEach((s) => e.push(s)), e.push("");
  }), { text: e, matchRanges: t };
}, an = async (o, e) => {
  const i = (await o.get(ri).read(e)).value;
  return cn(i);
}, cn = (o) => {
  const e = [], t = [];
  let i = !0;
  for (const s of o.split(/\r?\n/g))
    i ? (e.push(s), s === "" && (i = !1)) : t.push(s);
  return { config: ml(e), text: t.join(`
`) };
};
class Ht {
  constructor(e) {
    this.config = e, this._onConfigDidUpdate = new j(), this.onConfigDidUpdate = this._onConfigDidUpdate.event;
  }
  updateConfig(e) {
    this.config = e, this._onConfigDidUpdate.fire(e);
  }
}
class yl {
  constructor(e) {
    this.resource = e;
  }
  async resolve() {
    return hs(ct.models.get(this.resource)).resolve();
  }
}
class wl {
  constructor() {
    this.models = new je();
  }
  initializeModelFromExistingModel(e, t, i) {
    if (this.models.has(t))
      throw Error("Unable to contruct model for resource that already exists");
    const s = e.get(ht), r = e.get(ke), n = e.get(V), a = e.get(pi);
    let c;
    this.models.set(t, {
      resolve: () => (c || (c = (async () => {
        const h = await this.tryFetchModelFromBackupService(t, s, r, a, n);
        return h || Promise.resolve({
          resultsModel: r.getModel(t) ?? r.createModel("", s.createById("search-result"), t),
          configurationModel: new Ht(i)
        });
      })()), c)
    });
  }
  initializeModelFromRawData(e, t, i, s) {
    if (this.models.has(t))
      throw Error("Unable to contruct model for resource that already exists");
    const r = e.get(ht), n = e.get(ke), a = e.get(V), c = e.get(pi);
    let h;
    this.models.set(t, {
      resolve: () => (h || (h = (async () => {
        const u = await this.tryFetchModelFromBackupService(t, r, n, c, a);
        return u || Promise.resolve({
          resultsModel: n.createModel(s ?? "", r.createById("search-result"), t),
          configurationModel: new Ht(i)
        });
      })()), h)
    });
  }
  initializeModelFromExistingFile(e, t, i) {
    if (this.models.has(t))
      throw Error("Unable to contruct model for resource that already exists");
    const s = e.get(ht), r = e.get(ke), n = e.get(V), a = e.get(pi);
    let c;
    this.models.set(t, {
      resolve: async () => (c || (c = (async () => {
        const h = await this.tryFetchModelFromBackupService(t, s, r, a, n);
        if (h)
          return h;
        const { text: u, config: d } = await n.invokeFunction(an, i);
        return {
          resultsModel: r.createModel(u ?? "", s.createById("search-result"), t),
          configurationModel: new Ht(d)
        };
      })()), c)
    });
  }
  async tryFetchModelFromBackupService(e, t, i, s, r) {
    const n = await s.resolve({ resource: e, typeId: Zr });
    let a = i.getModel(e);
    if (!a && n) {
      const c = await Mo(n.value);
      a = i.createModel(c, t.createById("search-result"), e);
    }
    if (a) {
      const c = a.getValue(), { text: h, config: u } = cn(c);
      return i.destroyModel(e), {
        resultsModel: i.createModel(h ?? "", t.createById("search-result"), e),
        configurationModel: new Ht(u)
      };
    } else
      return;
  }
}
const ct = new wl(), ft = ".code-search";
let D = class lt extends Lo {
  get typeId() {
    return lt.ID;
  }
  get editorId() {
    return this.typeId;
  }
  get capabilities() {
    let e = 8;
    return this.backingUri || (e |= 4), e;
  }
  get resource() {
    return this.backingUri || this.modelUri;
  }
  constructor(e, t, i, s, r, n, a, c, h, u) {
    if (super(), this.modelUri = e, this.backingUri = t, this.modelService = i, this.textFileService = s, this.fileDialogService = r, this.instantiationService = n, this.workingCopyService = a, this.telemetryService = c, this.pathService = h, this.dirty = !1, this._onDidChangeContent = this._register(new j()), this.onDidChangeContent = this._onDidChangeContent.event, this._onDidSave = this._register(new j()), this.onDidSave = this._onDidSave.event, this.oldDecorationsIDs = [], this.model = n.createInstance(yl, e), this.modelUri.scheme !== ms)
      throw Error("SearchEditorInput must be invoked with a SearchEditorScheme uri");
    this.memento = new us(lt.ID, u), u.onWillSaveState(() => this.memento.saveMemento());
    const d = this, p = new class {
      constructor() {
        this.typeId = Zr, this.resource = d.modelUri, this.capabilities = d.hasCapability(4) ? 2 : 0, this.onDidChangeDirty = d.onDidChangeDirty, this.onDidChangeContent = d.onDidChangeContent, this.onDidSave = d.onDidSave;
      }
      get name() {
        return d.getName();
      }
      isDirty() {
        return d.isDirty();
      }
      isModified() {
        return d.isDirty();
      }
      backup(f) {
        return d.backup(f);
      }
      save(f) {
        return d.save(0, f).then((S) => !!S);
      }
      revert(f) {
        return d.revert(0, f);
      }
    }();
    this._register(this.workingCopyService.registerWorkingCopy(p));
  }
  async save(e, t) {
    if (!(await this.resolveModels()).resultsModel.isDisposed())
      return this.backingUri ? (await this.textFileService.write(this.backingUri, await this.serializeForDisk(), t), this.setDirty(!1), this._onDidSave.fire({ reason: t == null ? void 0 : t.reason, source: t == null ? void 0 : t.source }), this) : this.saveAs(e, t);
  }
  tryReadConfigSync() {
    var e;
    return (e = this._cachedConfigurationModel) == null ? void 0 : e.config;
  }
  async serializeForDisk() {
    const { configurationModel: e, resultsModel: t } = await this.resolveModels();
    return Sl(e.config) + `
` + t.getValue();
  }
  registerConfigChangeListeners(e) {
    var t;
    (t = this.configChangeListenerDisposable) == null || t.dispose(), this.isDisposed() || (this.configChangeListenerDisposable = e.onConfigDidUpdate(() => {
      this.lastLabel !== this.getName() && (this._onDidChangeLabel.fire(), this.lastLabel = this.getName()), this.memento.getMemento(1, 1).searchConfig = e.config;
    }), this._register(this.configChangeListenerDisposable));
  }
  async resolveModels() {
    return this.model.resolve().then((e) => (this._cachedResultsModel = e.resultsModel, this._cachedConfigurationModel = e.configurationModel, this.lastLabel !== this.getName() && (this._onDidChangeLabel.fire(), this.lastLabel = this.getName()), this.registerConfigChangeListeners(e.configurationModel), e));
  }
  async saveAs(e, t) {
    const i = await this.fileDialogService.pickFileToSave(await this.suggestFileName(), t == null ? void 0 : t.availableFileSystems);
    if (i) {
      this.telemetryService.publicLog2("searchEditor/saveSearchResults");
      const s = await this.serializeForDisk();
      if (await this.textFileService.create([{ resource: i, value: s, options: { overwrite: !0 } }])) {
        if (this.setDirty(!1), !zt(i, this.modelUri)) {
          const r = this.instantiationService.invokeFunction(qe, { fileUri: i, from: "existingFile" });
          return r.setMatchRanges(this.getMatchRanges()), r;
        }
        return this;
      }
    }
  }
  getName(e = 12) {
    var s, r, n;
    const t = (a) => a.length < e ? a : `${a.slice(0, e - 3)}...`;
    if (this.backingUri) {
      const a = $t.getOriginalUri(this);
      return l(
        "searchTitle.withQuery",
        "Search: {0}",
        Oo((a ?? this.backingUri).path, ft)
      );
    }
    const i = (n = (r = (s = this._cachedConfigurationModel) == null ? void 0 : s.config) == null ? void 0 : r.query) == null ? void 0 : n.trim();
    return i ? l("searchTitle.withQuery", "Search: {0}", t(i)) : l("searchTitle", "Search");
  }
  setDirty(e) {
    const t = this.dirty;
    this.dirty = e, t !== e && this._onDidChangeDirty.fire();
  }
  isDirty() {
    return this.dirty;
  }
  async rename(e, t) {
    if (br(t) === ft)
      return {
        editor: this.instantiationService.invokeFunction(qe, { from: "existingFile", fileUri: t })
      };
  }
  dispose() {
    this.modelService.destroyModel(this.modelUri), super.dispose();
  }
  matches(e) {
    return super.matches(e) ? !0 : e instanceof lt ? !!(e.modelUri.fragment && e.modelUri.fragment === this.modelUri.fragment) || !!(e.backingUri && zt(e.backingUri, this.backingUri)) : !1;
  }
  getMatchRanges() {
    var e;
    return (((e = this._cachedResultsModel) == null ? void 0 : e.getAllDecorations()) ?? []).filter((t) => t.options.className === Us).filter(({ range: t }) => !(t.startColumn === 1 && t.endColumn === 1)).map(({ range: t }) => t);
  }
  async setMatchRanges(e) {
    this.oldDecorationsIDs = (await this.resolveModels()).resultsModel.deltaDecorations(this.oldDecorationsIDs, e.map(
      (t) => ({ range: t, options: { description: "search-editor-find-match", className: Us, stickiness: 1 } })
    ));
  }
  async revert(e, t) {
    if (t != null && t.soft) {
      this.setDirty(!1);
      return;
    }
    if (this.backingUri) {
      const { config: i, text: s } = await this.instantiationService.invokeFunction(an, this.backingUri), { resultsModel: r, configurationModel: n } = await this.resolveModels();
      r.setValue(s), n.updateConfig(i);
    } else
      (await this.resolveModels()).resultsModel.setValue("");
    super.revert(e, t), this.setDirty(!1);
  }
  async backup(e) {
    const t = await this.serializeForDisk();
    return e.isCancellationRequested ? {} : {
      content: Do(No.fromString(t))
    };
  }
  async suggestFileName() {
    const t = ((await this.resolveModels()).configurationModel.config.query.replace(/[^\w \-_]+/g, "_") || "Search") + ft;
    return Bo(await this.fileDialogService.defaultFilePath(this.pathService.defaultUriScheme), t);
  }
  toUntyped() {
    if (!this.hasCapability(4))
      return {
        resource: this.resource,
        options: {
          override: lt.ID
        }
      };
  }
};
D.ID = qi;
D = B([
  g(2, ke),
  g(3, ri),
  g(4, Wo),
  g(5, V),
  g(6, ur),
  g(7, it),
  g(8, hr),
  g(9, rt)
], D);
const qe = (o, e) => {
  var n;
  const t = o.get(rt), i = o.get(H), s = o.get(V), r = e.from === "model" ? e.modelUri : We.from({ scheme: ms, fragment: `${Math.random()}` });
  if (!ct.models.has(r))
    if (e.from === "existingFile")
      s.invokeFunction((a) => ct.initializeModelFromExistingFile(a, r, e.fileUri));
    else {
      const a = i.getValue("search").searchEditor, c = a.reusePriorSearchConfiguration, h = a.defaultNumberOfContextLines, u = c ? new us(D.ID, t).getMemento(1, 1).searchConfig : {}, p = { ...nn(), ...u, ...e.config };
      h != null && (p.contextLines = ((n = e == null ? void 0 : e.config) == null ? void 0 : n.contextLines) ?? h), e.from === "rawData" ? (e.resultsContents && (p.contextLines = 0), s.invokeFunction((f) => ct.initializeModelFromRawData(f, r, p, e.resultsContents))) : s.invokeFunction((f) => ct.initializeModelFromExistingModel(f, r, p));
    }
  return s.createInstance(D, r, e.from === "existingFile" ? e.fileUri : e.from === "model" ? e.backupOf : void 0);
}, bl = (o) => {
  const e = o.get(M);
  e.activeEditor instanceof D && e.activeEditorPane.toggleCaseSensitive();
}, xl = (o) => {
  const e = o.get(M);
  e.activeEditor instanceof D && e.activeEditorPane.toggleWholeWords();
}, Il = (o) => {
  const e = o.get(M);
  e.activeEditor instanceof D && e.activeEditorPane.toggleRegex();
}, El = (o) => {
  const e = o.get(M);
  e.activeEditor instanceof D && e.activeEditorPane.toggleContextLines();
}, ln = (o, e) => {
  const t = o.get(M);
  t.activeEditor instanceof D && t.activeEditorPane.modifyContextLines(e);
}, Cl = (o) => {
  const e = o.get(M);
  e.activeEditor instanceof D && e.activeEditorPane.focusAllResults();
};
async function kl(o) {
  var s, r, n;
  const e = o.get(P), t = o.get(V), i = W(e);
  i ? await t.invokeFunction(Ft, {
    filesToInclude: i.searchIncludePattern.getValue(),
    onlyOpenEditors: i.searchIncludePattern.onlySearchInOpenEditors(),
    filesToExclude: i.searchExcludePattern.getValue(),
    isRegexp: (s = i.searchAndReplaceWidget.searchInput) == null ? void 0 : s.getRegex(),
    isCaseSensitive: (r = i.searchAndReplaceWidget.searchInput) == null ? void 0 : r.getCaseSensitive(),
    matchWholeWord: (n = i.searchAndReplaceWidget.searchInput) == null ? void 0 : n.getWholeWords(),
    useExcludeSettingsAndIgnoreFiles: i.searchExcludePattern.useExcludesAndIgnoreFiles(),
    showIncludesExcludes: !!(i.searchIncludePattern.getValue() || i.searchExcludePattern.getValue() || !i.searchExcludePattern.useExcludesAndIgnoreFiles())
  }) : await t.invokeFunction(Ft);
}
const Ft = async (o, e = {}, t = !1) => {
  var U, O;
  const i = o.get(M), s = o.get(Zi), r = o.get(it), n = o.get(V), a = o.get(H), c = o.get(xr), h = o.get(pe), d = o.get(ss).getLastActiveWorkspaceRoot(K.file), p = d ? st(h.getWorkspaceFolder(d)) : void 0, f = i.activeTextEditorControl;
  let S, m = "";
  if (f) {
    Ir(f) ? f.getOriginalEditor().hasTextFocus() ? S = f.getOriginalEditor() : S = f.getModifiedEditor() : S = f;
    const k = S == null ? void 0 : S.getSelection();
    if (m = (k && ((U = S == null ? void 0 : S.getModel()) == null ? void 0 : U.getValueInRange(k))) ?? "", k != null && k.isEmpty() && a.getValue("search").seedWithNearestWord) {
      const z = (O = S.getModel()) == null ? void 0 : O.getWordAtPosition(k.getStartPosition());
      z && (m = z.word);
    }
  } else
    i.activeEditor instanceof D && (m = i.activeEditorPane.getSelected());
  r.publicLog2("searchEditor/openNewSearchEditor");
  const v = { query: e.location === "new" || a.getValue("editor").find.seedSearchStringFromSelection ? m : void 0 };
  for (const k of Object.entries(e)) {
    const z = k[0], se = k[1];
    se !== void 0 && (v[z] = typeof se == "string" ? await c.resolveAsync(p, se) : se);
  }
  const y = i.getEditors(0).find((k) => k.editor.typeId === D.ID);
  let C;
  if (y && v.location === "reuse") {
    const k = s.getGroup(y.groupId);
    if (!k)
      throw new Error("Invalid group id for search editor");
    const z = y.editor;
    C = await k.openEditor(z), m ? C.setQuery(m) : C.selectQuery(), C.setSearchConfig(v);
  } else {
    const k = n.invokeFunction(qe, { config: v, resultsContents: "", from: "rawData" });
    C = await i.openEditor(k, { pinned: !0 }, t ? mt : ai);
  }
  const G = a.getValue("search").searchOnType;
  (v.triggerSearch === !0 || v.triggerSearch !== !1 && G && v.query) && C.triggerSearch({ focusResults: v.focusResults }), v.focusResults || C.focusSearchInput();
}, hn = async (o, e, t, i, s) => {
  if (!e.query) {
    console.error("Expected searchResult.query to be defined. Got", e);
    return;
  }
  const r = o.get(M), n = o.get(it), a = o.get(V), c = o.get(ge), h = o.get(H), u = h.getValue("search").sortOrder;
  n.publicLog2("searchEditor/createEditorFromSearchResult");
  const d = (E) => c.getUriLabel(E, { relative: !0 }), { text: p, matchRanges: f, config: S } = on(e, t, i, 0, d, u);
  S.onlyOpenEditors = s;
  const m = h.getValue("search").searchEditor.defaultNumberOfContextLines;
  if (e.isDirty || m === 0 || m === null) {
    const E = a.invokeFunction(qe, { resultsContents: p, config: S, from: "rawData" });
    await r.openEditor(E, { pinned: !0 }), E.setMatchRanges(f);
  } else {
    const E = a.invokeFunction(qe, { from: "rawData", resultsContents: "", config: { ...S, contextLines: m } });
    (await r.openEditor(E, { pinned: !0 })).triggerSearch({ focusResults: !0 });
  }
}, Y = R, js = l(
  "searchCanceled",
  "Search was canceled before any results could be found - "
), Xs = 75;
let ti = class un extends qo {
  constructor(e, t, i, s, r, n, a, c, h, u, d, p, f, S, m, E, v, y, C, G, U, O, k, z, se, Ot, Dt, Nt) {
    super(e, k, U, p, m, d, u, se, C, Ot), this.fileService = t, this.editorService = i, this.codeEditorService = s, this.progressService = r, this.notificationService = n, this.dialogService = a, this.commandService = c, this.contextViewService = h, this.contextService = f, this.searchWorkbenchService = S, this.replaceService = E, this.textFileService = v, this.preferencesService = y, this.searchHistoryService = G, this.accessibilityService = O, this.notebookService = Dt, this.logService = Nt, this.isDisposed = !1, this.lastFocusState = "input", this.messageDisposables = new ue(), this.changedWhileHidden = !1, this.currentSearchQ = Promise.resolve(), this.pauseSearching = !1, this._visibleMatches = 0, this.container = R(".search-view"), this.viewletVisible = ie.bindTo(this.contextKeyService), this.firstMatchFocused = $r.bindTo(this.contextKeyService), this.fileMatchOrMatchFocused = He.bindTo(this.contextKeyService), this.fileMatchOrFolderMatchFocus = Gr.bindTo(this.contextKeyService), this.fileMatchOrFolderMatchWithResourceFocus = Hi.bindTo(this.contextKeyService), this.fileMatchFocused = Fe.bindTo(this.contextKeyService), this.folderMatchFocused = Be.bindTo(this.contextKeyService), this.folderMatchWithResourceFocused = ei.bindTo(this.contextKeyService), this.hasSearchResultsKey = ne.bindTo(this.contextKeyService), this.matchFocused = Ve.bindTo(this.contextKeyService), this.searchStateKey = jt.bindTo(this.contextKeyService), this.hasSearchPatternKey = Ss.bindTo(this.contextKeyService), this.hasReplacePatternKey = zr.bindTo(this.contextKeyService), this.hasFilePatternKey = jr.bindTo(this.contextKeyService), this.hasSomeCollapsibleResultKey = wt.bindTo(this.contextKeyService), this.treeViewKey = bt.bindTo(this.contextKeyService), this.contextKeyService = this._register(this.contextKeyService.createScoped(this.container)), we.bindTo(this.contextKeyService).set(!0), this.inputBoxFocused = et.bindTo(this.contextKeyService), this.inputPatternIncludesFocused = Yc.bindTo(this.contextKeyService), this.inputPatternExclusionsFocused = Jc.bindTo(this.contextKeyService), this.isEditableItem = Z.bindTo(this.contextKeyService), this.instantiationService = this.instantiationService.createChild(new At([te, this.contextKeyService])), this.configurationService.onDidChangeConfiguration((Te) => {
      Te.affectsConfiguration("search.sortOrder") && (this.searchConfig.sortOrder === "modified" && this.removeFileStats(), this.refreshTree());
    }), this.viewModel = this._register(this.searchWorkbenchService.searchModel), this.queryBuilder = this.instantiationService.createInstance(rs), this.memento = new us(this.id, z), this.viewletState = this.memento.getMemento(1, 1), this._register(this.fileService.onDidFilesChange((Te) => this.onFilesChanged(Te))), this._register(this.textFileService.untitled.onWillDispose((Te) => this.onUntitledDidDispose(Te.resource))), this._register(this.contextService.onDidChangeWorkbenchState(() => this.onDidChangeWorkbenchState())), this._register(this.searchHistoryService.onDidClearHistory(() => this.clearHistory())), this._register(this.configurationService.onDidChangeConfiguration((Te) => this.onConfigurationUpdated(Te))), this.delayedRefresh = this._register(new Le(250)), this.addToSearchHistoryDelayer = this._register(new Le(2e3)), this.toggleCollapseStateDelayer = this._register(new Le(100)), this.triggerQueryDelayer = this._register(new Le(0)), this.treeAccessibilityProvider = this.instantiationService.createInstance(Ki, this.viewModel), this.isTreeLayoutViewVisible = this.viewletState["view.treeLayout"] ?? this.searchConfig.defaultViewMode === "tree", this._refreshResultsScheduler = this._register(new Uo(this._updateResults.bind(this), 80));
  }
  get isTreeLayoutViewVisible() {
    return this.treeViewKey.get() ?? !1;
  }
  set isTreeLayoutViewVisible(e) {
    this.treeViewKey.set(e);
  }
  setTreeView(e) {
    e !== this.isTreeLayoutViewVisible && (this.isTreeLayoutViewVisible = e, this.updateIndentStyles(this.themeService.getFileIconTheme()), this.refreshTree());
  }
  get state() {
    return this.searchStateKey.get() ?? fe.Idle;
  }
  set state(e) {
    this.searchStateKey.set(e);
  }
  getContainer() {
    return this.container;
  }
  get searchResult() {
    return this.viewModel && this.viewModel.searchResult;
  }
  onDidChangeWorkbenchState() {
    this.contextService.getWorkbenchState() !== 1 && this.searchWithoutFolderMessageElement && fi(this.searchWithoutFolderMessageElement);
  }
  renderBody(e) {
    super.renderBody(e), this.container = w(e, R(".search-view")), this.searchWidgetsContainerElement = w(this.container, Y(".search-widgets-container")), this.createSearchWidget(this.searchWidgetsContainerElement);
    const t = this.searchHistoryService.load(), i = this.viewletState["query.filePatterns"] || "", s = this.viewletState["query.folderExclusions"] || "", r = t.exclude || [], n = this.viewletState["query.folderIncludes"] || "", a = t.include || [], c = this.viewletState["query.onlyOpenEditors"] || !1, h = this.viewletState["query.queryDetailsExpanded"] || "", u = typeof this.viewletState["query.useExcludesAndIgnoreFiles"] == "boolean" ? this.viewletState["query.useExcludesAndIgnoreFiles"] : !0;
    this.queryDetails = w(this.searchWidgetsContainerElement, Y(".query-details")), this.toggleQueryDetailsButton = w(this.queryDetails, Y(".more" + Q.asCSSSelector(Or), { tabindex: 0, role: "button", title: l("moreSearch", "Toggle Search Details") })), this._register(Se(this.toggleQueryDetailsButton, me.CLICK, (v) => {
      Ee.stop(v), this.toggleQueryDetails(!this.accessibilityService.isScreenReaderOptimized());
    })), this._register(Se(this.toggleQueryDetailsButton, me.KEY_UP, (v) => {
      const y = new vt(v);
      (y.equals(3) || y.equals(10)) && (Ee.stop(v), this.toggleQueryDetails(!1));
    })), this._register(Se(this.toggleQueryDetailsButton, me.KEY_DOWN, (v) => {
      var C;
      new vt(v).equals(1026) && (this.searchWidget.isReplaceActive() ? this.searchWidget.focusReplaceAllAction() : this.searchWidget.isReplaceShown() ? (C = this.searchWidget.replaceInput) == null || C.focusOnPreserve() : this.searchWidget.focusRegexAction(), Ee.stop(v));
    }));
    const d = w(this.queryDetails, Y(".file-types.includes")), p = l("searchScope.includes", "files to include");
    w(d, Y("h4", void 0, p)), this.inputPatternIncludes = this._register(this.instantiationService.createInstance(Jt, d, this.contextViewService, {
      ariaLabel: p,
      placeholder: l("placeholder.includes", "e.g. *.ts, src/**/include"),
      showPlaceholderOnFocus: !0,
      history: a,
      inputBoxStyles: qt
    })), this.inputPatternIncludes.setValue(n), this.inputPatternIncludes.setOnlySearchInOpenEditors(c), this._register(this.inputPatternIncludes.onCancel(() => this.cancelSearch(!1))), this._register(this.inputPatternIncludes.onChangeSearchInEditorsBox(() => this.triggerQueryChange())), this.trackInputBox(this.inputPatternIncludes.inputFocusTracker, this.inputPatternIncludesFocused);
    const f = w(this.queryDetails, Y(".file-types.excludes")), S = l("searchScope.excludes", "files to exclude");
    w(f, Y("h4", void 0, S)), this.inputPatternExcludes = this._register(this.instantiationService.createInstance(Zt, f, this.contextViewService, {
      ariaLabel: S,
      placeholder: l("placeholder.excludes", "e.g. *.ts, src/**/exclude"),
      showPlaceholderOnFocus: !0,
      history: r,
      inputBoxStyles: qt
    })), this.inputPatternExcludes.setValue(s), this.inputPatternExcludes.setUseExcludesAndIgnoreFiles(u), this._register(this.inputPatternExcludes.onCancel(() => this.cancelSearch(!1))), this._register(this.inputPatternExcludes.onChangeIgnoreBox(() => this.triggerQueryChange())), this.trackInputBox(this.inputPatternExcludes.inputFocusTracker, this.inputPatternExclusionsFocused);
    const m = () => this.hasFilePatternKey.set(this.inputPatternIncludes.getValue().length > 0 || this.inputPatternExcludes.getValue().length > 0);
    m();
    const E = (v) => {
      this.triggerQueryChange({ triggeredOnType: v, delay: this.searchConfig.searchOnTypeDebouncePeriod }), v && m();
    };
    this._register(this.inputPatternIncludes.onSubmit(E)), this._register(this.inputPatternExcludes.onSubmit(E)), this.messagesElement = w(this.container, Y(".messages.text-search-provider-messages")), this.contextService.getWorkbenchState() === 1 && this.showSearchWithoutFolderMessage(), this.createSearchResultsView(this.container), (i !== "" || s !== "" || n !== "" || h !== "" || !u) && this.toggleQueryDetails(!0, !0, !0), this._register(this.viewModel.searchResult.onChange((v) => this.onSearchResultsChanged(v))), this._register(this.onDidChangeBodyVisibility((v) => this.onVisibilityChanged(v))), this.updateIndentStyles(this.themeService.getFileIconTheme()), this._register(this.themeService.onDidFileIconThemeChange(this.updateIndentStyles, this));
  }
  updateIndentStyles(e) {
    this.resultsElement.classList.toggle("hide-arrows", this.isTreeLayoutViewVisible && e.hidesExplorerArrows);
  }
  onVisibilityChanged(e) {
    var t;
    this.viewletVisible.set(e), e ? this.changedWhileHidden && (this.refreshAndUpdateCount(), this.changedWhileHidden = !1) : this.lastFocusState = "input", (t = this.viewModel) == null || t.searchResult.toggleHighlights(e);
  }
  get searchAndReplaceWidget() {
    return this.searchWidget;
  }
  get searchIncludePattern() {
    return this.inputPatternIncludes;
  }
  get searchExcludePattern() {
    return this.inputPatternExcludes;
  }
  createSearchWidget(e) {
    const t = this.viewletState["query.contentPattern"] || "", i = this.viewletState["query.replaceText"] || "", s = this.viewletState["query.regex"] === !0, r = this.viewletState["query.wholeWords"] === !0, n = this.viewletState["query.caseSensitive"] === !0, a = this.searchHistoryService.load(), c = a.search || this.viewletState["query.searchHistory"] || [], h = a.replace || this.viewletState["query.replaceHistory"] || [], u = typeof this.viewletState["view.showReplace"] == "boolean" ? this.viewletState["view.showReplace"] : !0, d = this.viewletState["query.preserveCase"] === !0, p = this.viewletState["query.isInNotebookMarkdownInput"] ?? !0, f = this.viewletState["query.isInNotebookMarkdownPreview"] ?? !0, S = this.viewletState["query.isInNotebookCellInput"] ?? !0, m = this.viewletState["query.isInNotebookCellOutput"] ?? !0;
    if (this.searchWidget = this._register(this.instantiationService.createInstance(Qe, e, {
      value: t,
      replaceValue: i,
      isRegex: s,
      isCaseSensitive: n,
      isWholeWords: r,
      searchHistory: c,
      replaceHistory: h,
      preserveCase: d,
      inputBoxStyles: qt,
      toggleStyles: _t,
      notebookOptions: {
        isInNotebookMarkdownInput: p,
        isInNotebookMarkdownPreview: f,
        isInNotebookCellInput: S,
        isInNotebookCellOutput: m
      }
    })), !this.searchWidget.searchInput || !this.searchWidget.replaceInput) {
      this.logService.warn(`Cannot fully create search widget. Search or replace input undefined. SearchInput: ${this.searchWidget.searchInput}, ReplaceInput: ${this.searchWidget.replaceInput}`);
      return;
    }
    u && this.searchWidget.toggleReplace(!0), this._register(this.searchWidget.onSearchSubmit((y) => this.triggerQueryChange(y))), this._register(this.searchWidget.onSearchCancel(({ focus: y }) => this.cancelSearch(y))), this._register(this.searchWidget.searchInput.onDidOptionChange(() => this.triggerQueryChange())), this._register(this.searchWidget.getNotebookFilters().onDidChange(() => this.triggerQueryChange()));
    const E = () => this.hasSearchPatternKey.set(this.searchWidget.searchInput ? this.searchWidget.searchInput.getValue().length > 0 : !1);
    E(), this._register(this.searchWidget.searchInput.onDidChange(() => E()));
    const v = () => this.hasReplacePatternKey.set(this.searchWidget.getReplaceValue().length > 0);
    v(), this._register(this.searchWidget.replaceInput.inputBox.onDidChange(() => v())), this._register(this.searchWidget.onDidHeightChange(() => this.reLayout())), this._register(this.searchWidget.onReplaceToggled(() => this.reLayout())), this._register(this.searchWidget.onReplaceStateChange((y) => {
      this.viewModel.replaceActive = y, this.refreshTree();
    })), this._register(this.searchWidget.onPreserveCaseChange((y) => {
      this.viewModel.preserveCase = y, this.refreshTree();
    })), this._register(this.searchWidget.onReplaceValueChanged(() => {
      this.viewModel.replaceString = this.searchWidget.getReplaceValue(), this.delayedRefresh.trigger(() => this.refreshTree());
    })), this._register(this.searchWidget.onBlur(() => {
      this.toggleQueryDetailsButton.focus();
    })), this._register(this.searchWidget.onReplaceAll(() => this.replaceAll())), this.trackInputBox(this.searchWidget.searchInputFocusTracker), this.trackInputBox(this.searchWidget.replaceInputFocusTracker);
  }
  onConfigurationUpdated(e) {
    e && (e.affectsConfiguration("search.decorations.colors") || e.affectsConfiguration("search.decorations.badges")) && this.refreshTree();
  }
  trackInputBox(e, t) {
    e && (this._register(e.onDidFocus(() => {
      this.lastFocusState = "input", this.inputBoxFocused.set(!0), t == null || t.set(!0);
    })), this._register(e.onDidBlur(() => {
      this.inputBoxFocused.set(this.searchWidget.searchInputHasFocus() || this.searchWidget.replaceInputHasFocus() || this.inputPatternIncludes.inputHasFocus() || this.inputPatternExcludes.inputHasFocus()), t == null || t.set(!1);
    })));
  }
  onSearchResultsChanged(e) {
    if (this.isVisible())
      return this.refreshAndUpdateCount(e);
    this.changedWhileHidden = !0;
  }
  refreshAndUpdateCount(e) {
    var t;
    return this.searchWidget.setReplaceAllActionState(!this.viewModel.searchResult.isEmpty()), this.updateSearchResultCount(this.viewModel.searchResult.query.userDisabledExcludesAndIgnoreFiles, (t = this.viewModel.searchResult.query) == null ? void 0 : t.onlyOpenEditors, e == null ? void 0 : e.clearingAll), this.refreshTree(e);
  }
  refreshTree(e) {
    const t = this.searchConfig.collapseResults;
    !e || e.added || e.removed ? this.searchConfig.sortOrder === "modified" ? this.retrieveFileStats().then(() => this.tree.setChildren(null, this.createResultIterator(t))) : this.tree.setChildren(null, this.createResultIterator(t)) : this.searchConfig.sortOrder === "countAscending" || this.searchConfig.sortOrder === "countDescending" ? this.tree.setChildren(null, this.createResultIterator(t)) : e.elements.forEach((i) => {
      this.tree.setChildren(i, this.createIterator(i, t)), this.tree.rerender(i);
    });
  }
  createResultIterator(e) {
    const t = this.searchResult.folderMatches().filter((i) => !i.isEmpty()).sort(ve);
    return t.length === 1 ? this.createFolderIterator(t[0], e, !0) : Si.map(t, (i) => {
      const s = this.createFolderIterator(i, e, !0);
      return { element: i, children: s, incompressible: !0 };
    });
  }
  createFolderIterator(e, t, i) {
    const s = this.searchConfig.sortOrder, n = (this.isTreeLayoutViewVisible ? e.matches() : e.allDownstreamFileMatches()).sort((a, c) => ve(a, c, s));
    return Si.map(n, (a) => {
      let c;
      a instanceof L ? c = this.createFileIterator(a) : c = this.createFolderIterator(a, t, !1);
      const h = t === "alwaysCollapse" || a.count() > 10 && t !== "alwaysExpand" ? Ws.PreserveOrCollapsed : Ws.PreserveOrExpanded;
      return { element: a, children: c, collapsed: h, incompressible: a instanceof L ? !0 : i };
    });
  }
  createFileIterator(e) {
    const t = e.matches().sort(ve);
    return Si.map(t, (i) => ({ element: i, incompressible: !0 }));
  }
  createIterator(e, t) {
    return e instanceof di ? this.createResultIterator(t) : e instanceof J ? this.createFolderIterator(e, t, !1) : this.createFileIterator(e);
  }
  replaceAll() {
    if (this.viewModel.searchResult.count() === 0)
      return;
    const e = this.viewModel.searchResult.count(), t = this.viewModel.searchResult.fileCount(), i = this.searchWidget.getReplaceValue() || "", s = this.buildAfterReplaceAllMessage(e, t, i);
    let r, n;
    this.progressService.withProgress({ location: this.getProgressLocation(), delay: 100, total: e }, (c) => (n = c, new Promise((h) => r = h)));
    const a = {
      title: l("replaceAll.confirmation.title", "Replace All"),
      message: this.buildReplaceAllConfirmationMessage(e, t, i),
      primaryButton: l(
        { key: "replaceAll.confirm.button", comment: ["&& denotes a mnemonic"] },
        "&&Replace"
      )
    };
    this.dialogService.confirm(a).then((c) => {
      c.confirmed ? (this.searchWidget.setReplaceAllActionState(!1), this.viewModel.searchResult.replaceAll(n).then(() => {
        r();
        const h = this.clearMessage();
        w(h, s), this.reLayout();
      }, (h) => {
        r(), Ls(h), this.notificationService.error(h);
      })) : r();
    });
  }
  buildAfterReplaceAllMessage(e, t, i) {
    return e === 1 ? t === 1 ? i ? l(
      "replaceAll.occurrence.file.message",
      "Replaced {0} occurrence across {1} file with '{2}'.",
      e,
      t,
      i
    ) : l(
      "removeAll.occurrence.file.message",
      "Replaced {0} occurrence across {1} file.",
      e,
      t
    ) : i ? l(
      "replaceAll.occurrence.files.message",
      "Replaced {0} occurrence across {1} files with '{2}'.",
      e,
      t,
      i
    ) : l(
      "removeAll.occurrence.files.message",
      "Replaced {0} occurrence across {1} files.",
      e,
      t
    ) : t === 1 ? i ? l(
      "replaceAll.occurrences.file.message",
      "Replaced {0} occurrences across {1} file with '{2}'.",
      e,
      t,
      i
    ) : l(
      "removeAll.occurrences.file.message",
      "Replaced {0} occurrences across {1} file.",
      e,
      t
    ) : i ? l(
      "replaceAll.occurrences.files.message",
      "Replaced {0} occurrences across {1} files with '{2}'.",
      e,
      t,
      i
    ) : l(
      "removeAll.occurrences.files.message",
      "Replaced {0} occurrences across {1} files.",
      e,
      t
    );
  }
  buildReplaceAllConfirmationMessage(e, t, i) {
    return e === 1 ? t === 1 ? i ? l(
      "removeAll.occurrence.file.confirmation.message",
      "Replace {0} occurrence across {1} file with '{2}'?",
      e,
      t,
      i
    ) : l(
      "replaceAll.occurrence.file.confirmation.message",
      "Replace {0} occurrence across {1} file?",
      e,
      t
    ) : i ? l(
      "removeAll.occurrence.files.confirmation.message",
      "Replace {0} occurrence across {1} files with '{2}'?",
      e,
      t,
      i
    ) : l(
      "replaceAll.occurrence.files.confirmation.message",
      "Replace {0} occurrence across {1} files?",
      e,
      t
    ) : t === 1 ? i ? l(
      "removeAll.occurrences.file.confirmation.message",
      "Replace {0} occurrences across {1} file with '{2}'?",
      e,
      t,
      i
    ) : l(
      "replaceAll.occurrences.file.confirmation.message",
      "Replace {0} occurrences across {1} file?",
      e,
      t
    ) : i ? l(
      "removeAll.occurrences.files.confirmation.message",
      "Replace {0} occurrences across {1} files with '{2}'?",
      e,
      t,
      i
    ) : l(
      "replaceAll.occurrences.files.confirmation.message",
      "Replace {0} occurrences across {1} files?",
      e,
      t
    );
  }
  clearMessage() {
    this.searchWithoutFolderMessageElement = void 0;
    const e = this.messagesElement.style.display === "none";
    Er(this.messagesElement), Os(this.messagesElement), this.messageDisposables.clear();
    const t = w(this.messagesElement, Y(".message"));
    return e && this.reLayout(), t;
  }
  createSearchResultsView(e) {
    this.resultsElement = w(e, Y(".results.show-file-icons.file-icon-themable-tree"));
    const t = this.instantiationService.createInstance(xt), i = {
      getId(r) {
        return r.id();
      }
    };
    this.treeLabels = this._register(this.instantiationService.createInstance($o, { onDidChangeVisibility: this.onDidChangeBodyVisibility })), this.tree = this._register(this.instantiationService.createInstance(Go, "SearchView", this.resultsElement, t, [
      this._register(this.instantiationService.createInstance(It, this, this.treeLabels)),
      this._register(this.instantiationService.createInstance(Et, this, this.treeLabels)),
      this._register(this.instantiationService.createInstance(Ct, this.viewModel, this))
    ], {
      identityProvider: i,
      accessibilityProvider: this.treeAccessibilityProvider,
      dnd: this.instantiationService.createInstance(zo, (r) => r instanceof L ? r.resource : r instanceof T ? jo(r.parent().resource, r.range()) : null),
      multipleSelectionSupport: !0,
      selectionNavigation: !0,
      overrideStyles: {
        listBackground: this.getBackgroundColor()
      },
      additionalScrollHeight: xt.ITEM_HEIGHT
    })), this._register(this.tree.onContextMenu((r) => this.onContextMenu(r)));
    const s = () => this.toggleCollapseStateDelayer.trigger(() => this.hasSomeCollapsibleResultKey.set(this.hasSomeCollapsible()));
    s(), this._register(this.viewModel.searchResult.onChange(() => s())), this._register(this.tree.onDidChangeCollapseState(() => s())), this._register(dt.debounce(this.tree.onDidOpen, (r, n) => n, Xs, !0)((r) => {
      var n;
      if (r.element instanceof T) {
        const a = r.element;
        (n = this.currentSelectedFileMatch) == null || n.setSelectedMatch(null), this.currentSelectedFileMatch = a.parent(), this.currentSelectedFileMatch.setSelectedMatch(a), this.onFocus(a, r.editorOptions.preserveFocus, r.sideBySide, r.editorOptions.pinned);
      }
    })), this._register(dt.debounce(this.tree.onDidChangeFocus, (r, n) => n, Xs, !0)(() => {
      const r = this.tree.getSelection(), n = this.tree.getFocus()[0];
      r.length > 1 && n instanceof T && this.onFocus(n, !0);
    })), this._register(dt.any(this.tree.onDidFocus, this.tree.onDidChangeFocus)(() => {
      const r = this.tree.getFocus()[0];
      this.tree.isDOMFocused() && (this.firstMatchFocused.set(this.tree.navigate().first() === r), this.fileMatchOrMatchFocused.set(!!r), this.fileMatchFocused.set(r instanceof L), this.folderMatchFocused.set(r instanceof J), this.matchFocused.set(r instanceof T), this.fileMatchOrFolderMatchFocus.set(r instanceof L || r instanceof J), this.fileMatchOrFolderMatchWithResourceFocus.set(r instanceof L || r instanceof Ti), this.folderMatchWithResourceFocused.set(r instanceof Ti), this.lastFocusState = "tree");
      let n = !1;
      r instanceof Ie ? n = !r.isWebviewMatch() : (r instanceof L || r instanceof J) && (n = !r.hasOnlyReadOnlyMatches()), this.isEditableItem.set(n);
    })), this._register(this.tree.onDidBlur(() => {
      this.firstMatchFocused.reset(), this.fileMatchOrMatchFocused.reset(), this.fileMatchFocused.reset(), this.folderMatchFocused.reset(), this.matchFocused.reset(), this.fileMatchOrFolderMatchFocus.reset(), this.fileMatchOrFolderMatchWithResourceFocus.reset(), this.folderMatchWithResourceFocused.reset(), this.isEditableItem.reset();
    }));
  }
  onContextMenu(e) {
    e.browserEvent.preventDefault(), e.browserEvent.stopPropagation(), this.contextMenuService.showContextMenu({
      menuId: _.SearchContext,
      menuActionOptions: { shouldForwardArgs: !0 },
      contextKeyService: this.contextKeyService,
      getAnchor: () => e.anchor,
      getActionsContext: () => e.element
    });
  }
  hasSomeCollapsible() {
    const e = this.getControl(), t = e.navigate();
    let i = t.first();
    do
      if (!e.isCollapsed(i))
        return !0;
    while (i = t.next());
    return !1;
  }
  selectNextMatch() {
    if (!this.hasSearchResults())
      return;
    const [e] = this.tree.getSelection();
    e && !(e instanceof T) && this.tree.isCollapsed(e) && this.tree.expand(e);
    const t = this.tree.navigate(e);
    let i = t.next();
    for (i || (i = t.first()); i && !(i instanceof T); )
      this.tree.isCollapsed(i) && this.tree.expand(i), i = t.next();
    if (i) {
      i === e && this.tree.setFocus([]);
      const s = Ce(void 0, !1, !1);
      this.tree.setFocus([i], s), this.tree.setSelection([i], s), this.tree.reveal(i);
      const r = this.treeAccessibilityProvider.getAriaLabel(i);
      r && _i(r);
    }
  }
  selectPreviousMatch() {
    if (!this.hasSearchResults())
      return;
    const [e] = this.tree.getSelection();
    let t = this.tree.navigate(e), i = t.previous();
    for (; !i || !(i instanceof T) && !this.tree.isCollapsed(i); ) {
      const s = i ? t.previous() : t.last();
      if (!i && !s)
        return;
      i = s;
    }
    for (; !(i instanceof T); ) {
      const s = t.next();
      this.tree.expand(i), t = this.tree.navigate(s), i = s ? t.previous() : t.last();
    }
    if (i) {
      i === e && this.tree.setFocus([]);
      const s = Ce(void 0, !1, !1);
      this.tree.setFocus([i], s), this.tree.setSelection([i], s), this.tree.reveal(i);
      const r = this.treeAccessibilityProvider.getAriaLabel(i);
      r && _i(r);
    }
  }
  moveFocusToResults() {
    this.tree.domFocus();
  }
  focus() {
    if (super.focus(), this.lastFocusState === "input" || !this.hasSearchResults()) {
      const e = this.searchConfig.seedOnFocus ? this.updateTextFromSelection({ allowSearchOnType: !1 }) : !1;
      this.searchWidget.focus(void 0, void 0, e);
    } else
      this.tree.domFocus();
  }
  updateTextFromFindWidgetOrSelection({ allowUnselectedWord: e = !0, allowSearchOnType: t = !0 }) {
    let i = this.editorService.activeTextEditorControl;
    if (mi(i) && !(i != null && i.hasTextFocus())) {
      const s = Xo.get(i);
      if (s && s.isFindInputFocused())
        return this.updateTextFromFindWidget(s, { allowSearchOnType: t });
      i = this.codeEditorService.listCodeEditors().find((n) => n instanceof Yo && n.getParentEditor() === i && n.hasTextFocus()) ?? i;
    }
    return this.updateTextFromSelection({ allowUnselectedWord: e, allowSearchOnType: t }, i);
  }
  updateTextFromFindWidget(e, { allowSearchOnType: t = !0 }) {
    var s, r, n, a;
    if (!this.searchConfig.seedWithNearestWord && (((s = window.getSelection()) == null ? void 0 : s.toString()) ?? "") === "")
      return !1;
    const i = e.getState().searchString;
    return i === "" ? !1 : ((r = this.searchWidget.searchInput) == null || r.setCaseSensitive(e.getState().matchCase), (n = this.searchWidget.searchInput) == null || n.setWholeWords(e.getState().wholeWord), (a = this.searchWidget.searchInput) == null || a.setRegex(e.getState().isRegex), this.updateText(i, t), !0);
  }
  updateTextFromSelection({ allowUnselectedWord: e = !0, allowSearchOnType: t = !0 }, i) {
    var n;
    if (!this.configurationService.getValue("editor").find.seedSearchStringFromSelection)
      return !1;
    let r = this.getSearchTextFromEditor(e, i);
    return r === null ? !1 : ((n = this.searchWidget.searchInput) != null && n.getRegex() && (r = Jo(r)), this.updateText(r, t), !0);
  }
  updateText(e, t = !0) {
    t && !this.viewModel.searchResult.isDirty ? this.searchWidget.setValue(e) : (this.pauseSearching = !0, this.searchWidget.setValue(e), this.pauseSearching = !1);
  }
  focusNextInputBox() {
    if (this.searchWidget.searchInputHasFocus()) {
      this.searchWidget.isReplaceShown() ? this.searchWidget.focus(!0, !0) : this.moveFocusFromSearchOrReplace();
      return;
    }
    if (this.searchWidget.replaceInputHasFocus()) {
      this.moveFocusFromSearchOrReplace();
      return;
    }
    if (this.inputPatternIncludes.inputHasFocus()) {
      this.inputPatternExcludes.focus(), this.inputPatternExcludes.select();
      return;
    }
    if (this.inputPatternExcludes.inputHasFocus()) {
      this.selectTreeIfNotSelected();
      return;
    }
  }
  moveFocusFromSearchOrReplace() {
    this.showsFileTypes() ? this.toggleQueryDetails(!0, this.showsFileTypes()) : this.selectTreeIfNotSelected();
  }
  focusPreviousInputBox() {
    if (!this.searchWidget.searchInputHasFocus()) {
      if (this.searchWidget.replaceInputHasFocus()) {
        this.searchWidget.focus(!0);
        return;
      }
      if (this.inputPatternIncludes.inputHasFocus()) {
        this.searchWidget.focus(!0, !0);
        return;
      }
      if (this.inputPatternExcludes.inputHasFocus()) {
        this.inputPatternIncludes.focus(), this.inputPatternIncludes.select();
        return;
      }
      if (this.tree.isDOMFocused()) {
        this.moveFocusFromResults();
        return;
      }
    }
  }
  moveFocusFromResults() {
    this.showsFileTypes() ? this.toggleQueryDetails(!0, !0, !1, !0) : this.searchWidget.focus(!0, !0);
  }
  reLayout() {
    if (this.isDisposed || !this.size)
      return;
    const e = this.searchConfig.actionsPosition;
    this.getContainer().classList.toggle(un.ACTIONS_RIGHT_CLASS_NAME, e === "right"), this.searchWidget.setWidth(this.size.width - 28), this.inputPatternExcludes.setWidth(this.size.width - 28), this.inputPatternIncludes.setWidth(this.size.width - 28);
    const t = Ai(this.searchWidgetsContainerElement), i = Ai(this.messagesElement);
    this.tree.layout(this.size.height - t - i, this.size.width - 28);
  }
  layoutBody(e, t) {
    super.layoutBody(e, t), this.size = new Zo(t, e), this.reLayout();
  }
  getControl() {
    return this.tree;
  }
  allSearchFieldsClear() {
    return this.searchWidget.getReplaceValue() === "" && (!this.searchWidget.searchInput || this.searchWidget.searchInput.getValue() === "");
  }
  allFilePatternFieldsClear() {
    return this.searchExcludePattern.getValue() === "" && this.searchIncludePattern.getValue() === "";
  }
  hasSearchResults() {
    return !this.viewModel.searchResult.isEmpty();
  }
  clearSearchResults(e = !0) {
    this.viewModel.searchResult.clear(), this.showEmptyStage(!0), this.contextService.getWorkbenchState() === 1 && this.showSearchWithoutFolderMessage(), e && (this.allSearchFieldsClear() && this.clearFilePatternFields(), this.searchWidget.clear()), this.viewModel.cancelSearch(), this.tree.ariaLabel = l("emptySearch", "Empty Search"), vi(l("ariaSearchResultsClearStatus", "The search results have been cleared")), this.reLayout();
  }
  clearFilePatternFields() {
    this.searchExcludePattern.clear(), this.searchIncludePattern.clear();
  }
  cancelSearch(e = !0) {
    return this.viewModel.cancelSearch() ? (e && this.searchWidget.focus(), !0) : !1;
  }
  selectTreeIfNotSelected() {
    if (this.tree.getNode(null) && (this.tree.domFocus(), this.tree.getSelection().length === 0)) {
      const t = Ce();
      this.tree.focusNext(void 0, void 0, t), this.tree.setSelection(this.tree.getFocus(), t);
    }
  }
  getSearchTextFromEditor(e, t) {
    if (pr(document.activeElement, this.getContainer()) || (t = t ?? this.editorService.activeTextEditorControl, Ir(t) && (t.getOriginalEditor().hasTextFocus() ? t = t.getOriginalEditor() : t = t.getModifiedEditor()), !mi(t) || !t.hasModel()))
      return null;
    const i = t.getSelection();
    if (!i)
      return null;
    if (i.isEmpty() && this.searchConfig.seedWithNearestWord && e) {
      const s = t.getModel().getWordAtPosition(i.getStartPosition());
      if (s)
        return s.word;
    }
    if (!i.isEmpty()) {
      let s = "";
      for (let r = i.startLineNumber; r <= i.endLineNumber; r++) {
        let n = t.getModel().getLineContent(r);
        r === i.endLineNumber && (n = n.substring(0, i.endColumn - 1)), r === i.startLineNumber && (n = n.substring(i.startColumn - 1)), r !== i.startLineNumber && (n = `
` + n), s += n;
      }
      return s;
    }
    return null;
  }
  showsFileTypes() {
    return this.queryDetails.classList.contains("more");
  }
  toggleCaseSensitive() {
    var e;
    (e = this.searchWidget.searchInput) == null || e.setCaseSensitive(!this.searchWidget.searchInput.getCaseSensitive()), this.triggerQueryChange();
  }
  toggleWholeWords() {
    var e;
    (e = this.searchWidget.searchInput) == null || e.setWholeWords(!this.searchWidget.searchInput.getWholeWords()), this.triggerQueryChange();
  }
  toggleRegex() {
    var e;
    (e = this.searchWidget.searchInput) == null || e.setRegex(!this.searchWidget.searchInput.getRegex()), this.triggerQueryChange();
  }
  togglePreserveCase() {
    var e;
    (e = this.searchWidget.replaceInput) == null || e.setPreserveCase(!this.searchWidget.replaceInput.getPreserveCase()), this.triggerQueryChange();
  }
  setSearchParameters(e = {}) {
    var t, i, s, r, n, a;
    typeof e.isCaseSensitive == "boolean" && ((t = this.searchWidget.searchInput) == null || t.setCaseSensitive(e.isCaseSensitive)), typeof e.matchWholeWord == "boolean" && ((i = this.searchWidget.searchInput) == null || i.setWholeWords(e.matchWholeWord)), typeof e.isRegex == "boolean" && ((s = this.searchWidget.searchInput) == null || s.setRegex(e.isRegex)), typeof e.filesToInclude == "string" && this.searchIncludePattern.setValue(String(e.filesToInclude)), typeof e.filesToExclude == "string" && this.searchExcludePattern.setValue(String(e.filesToExclude)), typeof e.query == "string" && ((r = this.searchWidget.searchInput) == null || r.setValue(e.query)), typeof e.replace == "string" ? (n = this.searchWidget.replaceInput) == null || n.setValue(e.replace) : this.searchWidget.replaceInput && this.searchWidget.replaceInput.getValue() !== "" && this.searchWidget.replaceInput.setValue(""), typeof e.triggerSearch == "boolean" && e.triggerSearch && this.triggerQueryChange(), typeof e.preserveCase == "boolean" && ((a = this.searchWidget.replaceInput) == null || a.setPreserveCase(e.preserveCase)), typeof e.useExcludeSettingsAndIgnoreFiles == "boolean" && this.inputPatternExcludes.setUseExcludesAndIgnoreFiles(e.useExcludeSettingsAndIgnoreFiles), typeof e.onlyOpenEditors == "boolean" && this.searchIncludePattern.setOnlySearchInOpenEditors(e.onlyOpenEditors);
  }
  toggleQueryDetails(e = !0, t, i, s) {
    const r = "more";
    t = typeof t > "u" ? !this.queryDetails.classList.contains(r) : !!t, this.viewletState["query.queryDetailsExpanded"] = t, i = !!i, t ? (this.toggleQueryDetailsButton.setAttribute("aria-expanded", "true"), this.queryDetails.classList.add(r), e && (s ? (this.inputPatternExcludes.focus(), this.inputPatternExcludes.select()) : (this.inputPatternIncludes.focus(), this.inputPatternIncludes.select()))) : (this.toggleQueryDetailsButton.setAttribute("aria-expanded", "false"), this.queryDetails.classList.remove(r), e && this.searchWidget.focus()), !i && this.size && this.reLayout();
  }
  searchInFolders(e = []) {
    this._searchWithIncludeOrExclude(!0, e);
  }
  searchOutsideOfFolders(e = []) {
    this._searchWithIncludeOrExclude(!1, e);
  }
  _searchWithIncludeOrExclude(e, t) {
    if (!t.length || t.some((i) => i === ".")) {
      this.inputPatternIncludes.setValue(""), this.searchWidget.focus();
      return;
    }
    this.showsFileTypes() || this.toggleQueryDetails(!0, !0), (e ? this.inputPatternIncludes : this.inputPatternExcludes).setValue(t.join(", ")), this.searchWidget.focus(!1);
  }
  triggerQueryChange(e) {
    const t = { preserveFocus: !0, triggeredOnType: !1, delay: 0, ...e };
    t.triggeredOnType && !this.searchConfig.searchOnType || this.pauseSearching || this.triggerQueryDelayer.trigger(() => {
      this._onQueryChanged(t.preserveFocus, t.triggeredOnType);
    }, t.delay);
  }
  _onQueryChanged(e, t = !1) {
    var k;
    if (!((k = this.searchWidget.searchInput) != null && k.inputBox.isInputValid()))
      return;
    const i = this.searchWidget.searchInput.getRegex(), s = this.searchWidget.getNotebookFilters().markupInput, r = this.searchWidget.getNotebookFilters().markupPreview, n = this.searchWidget.getNotebookFilters().codeInput, a = this.searchWidget.getNotebookFilters().codeOutput, c = this.searchWidget.searchInput.getWholeWords(), h = this.searchWidget.searchInput.getCaseSensitive(), u = this.searchWidget.searchInput.getValue(), d = this.inputPatternExcludes.getValue().trim(), p = this.inputPatternIncludes.getValue().trim(), f = this.inputPatternExcludes.useExcludesAndIgnoreFiles(), S = this.inputPatternIncludes.onlySearchInOpenEditors();
    if (u.length === 0) {
      this.clearSearchResults(!1), this.clearMessage();
      return;
    }
    const m = {
      pattern: u,
      isRegExp: i,
      isCaseSensitive: h,
      isWordMatch: c,
      notebookInfo: {
        isInNotebookMarkdownInput: s,
        isInNotebookMarkdownPreview: r,
        isInNotebookCellInput: n,
        isInNotebookCellOutput: a
      }
    }, E = this.inputPatternExcludes.getValue(), v = this.inputPatternIncludes.getValue(), y = m.isRegExp ? 1e4 : 1e3, C = {
      _reason: "searchView",
      extraFileResources: this.instantiationService.invokeFunction(ns),
      maxResults: st(this.searchConfig.maxResults),
      disregardIgnoreFiles: !f || void 0,
      disregardExcludeSettings: !f || void 0,
      onlyOpenEditors: S,
      excludePattern: E,
      includePattern: v,
      previewOptions: {
        matchLines: 1,
        charsPerLine: y
      },
      isSmartCase: this.searchConfig.smartCase,
      expandPatterns: !0
    }, G = this.contextService.getWorkspace().folders, U = (z) => {
      var se;
      (se = this.searchWidget.searchInput) == null || se.showMessage({ content: z.message, type: 3 }), this.viewModel.searchResult.clear();
    };
    let O;
    try {
      O = this.queryBuilder.text(m, G.map((z) => z.uri), C);
    } catch (z) {
      U(z);
      return;
    }
    this.validateQuery(O).then(() => {
      this.onQueryTriggered(O, C, d, p, t), e || this.searchWidget.focus(!1, void 0, !0);
    }, U);
  }
  validateQuery(e) {
    const t = e.folderQueries.map((i) => this.fileService.exists(i.folder).catch(() => !1));
    return Promise.all(t).then((i) => {
      const s = e.folderQueries.filter((r, n) => i[n]);
      if (!e.folderQueries.length || s.length)
        e.folderQueries = s;
      else {
        const r = e.folderQueries[0].folder.fsPath, n = l("searchPathNotFoundError", "Search path not found: {0}", r);
        return Promise.reject(new Error(n));
      }
    });
  }
  onQueryTriggered(e, t, i, s, r) {
    this.addToSearchHistoryDelayer.trigger(() => {
      var n;
      (n = this.searchWidget.searchInput) == null || n.onSearchSubmit(), this.inputPatternExcludes.onSearchSubmit(), this.inputPatternIncludes.onSearchSubmit();
    }), this.viewModel.cancelSearch(!0), this.currentSearchQ = this.currentSearchQ.then(() => this.doSearch(e, i, s, r)).then(() => {
    }, () => {
    });
  }
  _updateResults() {
    try {
      if (this.state === fe.Idle)
        return;
      const e = this.viewModel.searchResult.fileCount();
      this._visibleMatches !== e && (this._visibleMatches = e, this.refreshAndUpdateCount());
    } finally {
      this._refreshResultsScheduler.schedule();
    }
  }
  doSearch(e, t, i, s) {
    var h;
    let r;
    this.progressService.withProgress({ location: this.getProgressLocation(), delay: s ? 300 : 0 }, (u) => new Promise((d) => r = d)), (h = this.searchWidget.searchInput) == null || h.clearMessage(), this.state = fe.Searching, this.showEmptyStage();
    const n = setTimeout(() => {
      this.state = fe.SlowSearch;
    }, 2e3), a = (u) => {
      if (clearTimeout(n), this.state = fe.Idle, r(), this.onSearchResultsChanged(), this.searchConfig.collapseResults !== "alwaysCollapse" && this.viewModel.searchResult.matches().length === 1) {
        const f = this.viewModel.searchResult.matches()[0];
        f.count() < 50 && this.tree.expand(f);
      }
      this.viewModel.replaceString = this.searchWidget.getReplaceValue();
      const p = !this.viewModel.searchResult.isEmpty();
      if ((u == null ? void 0 : u.exit) !== 1) {
        if (p)
          this.viewModel.searchResult.toggleHighlights(this.isVisible()), vi(l(
            "ariaSearchResultsStatus",
            "Search returned {0} results in {1} files",
            this.viewModel.searchResult.count(),
            this.viewModel.searchResult.fileCount()
          ));
        else {
          const f = !!t, S = !!i;
          let m;
          u ? this.inputPatternIncludes.onlySearchInOpenEditors() ? S && f ? m = l(
            "noOpenEditorResultsIncludesExcludes",
            "No results found in open editors matching '{0}' excluding '{1}' - ",
            i,
            t
          ) : S ? m = l(
            "noOpenEditorResultsIncludes",
            "No results found in open editors matching '{0}' - ",
            i
          ) : f ? m = l(
            "noOpenEditorResultsExcludes",
            "No results found in open editors excluding '{0}' - ",
            t
          ) : m = l(
            "noOpenEditorResultsFound",
            "No results found in open editors. Review your settings for configured exclusions and check your gitignore files - "
          ) : S && f ? m = l(
            "noResultsIncludesExcludes",
            "No results found in '{0}' excluding '{1}' - ",
            i,
            t
          ) : S ? m = l("noResultsIncludes", "No results found in '{0}' - ", i) : f ? m = l(
            "noResultsExcludes",
            "No results found excluding '{0}' - ",
            t
          ) : m = l(
            "noResultsFound",
            "No results found. Review your settings for configured exclusions and check your gitignore files - "
          ) : m = js, vi(m);
          const E = this.clearMessage();
          if (w(E, m), u)
            if (S || f) {
              const v = this.messageDisposables.add(new be(l("rerunSearchInAll.message", "Search again in all files"), this.onSearchAgain.bind(this)));
              w(E, v.element);
            } else {
              const v = this.messageDisposables.add(new be(l("openSettings.message", "Open Settings"), this.onOpenSettings.bind(this)));
              w(E, v.element);
            }
          else {
            const v = this.messageDisposables.add(new be(l("rerunSearch.message", "Search again"), () => this.triggerQueryChange({ preserveFocus: !1 })));
            w(E, v.element);
          }
          if (u) {
            w(E, Y("span", void 0, " - "));
            const v = this.messageDisposables.add(new be(l("openSettings.learnMore", "Learn More"), this.onLearnMore.bind(this)));
            w(E, v.element);
          }
          this.contextService.getWorkbenchState() === 1 && this.showSearchWithoutFolderMessage(), this.reLayout();
        }
        if (u && u.limitHit && u.messages.push({ type: fr.Warning, text: l(
          "searchMaxResultsWarning",
          "The result set only contains a subset of all matches. Be more specific in your search to narrow down the results."
        ) }), u && u.messages)
          for (const f of u.messages)
            this.addMessage(f);
        this.reLayout();
      }
    }, c = (u) => {
      var d;
      return clearTimeout(n), this.state = fe.Idle, Ls(u) ? a(void 0) : (r(), (d = this.searchWidget.searchInput) == null || d.showMessage({ content: u.message, type: 3 }), this.viewModel.searchResult.clear(), Promise.resolve());
    };
    return this._visibleMatches = 0, this._refreshResultsScheduler.schedule(), this.searchWidget.setReplaceAllActionState(!1), this.tree.setSelection([]), this.tree.setFocus([]), this.viewModel.search(e).then(a, c);
  }
  onOpenSettings(e) {
    Ee.stop(e, !1), this.openSettings("@id:files.exclude,search.exclude,search.useParentIgnoreFiles,search.useGlobalIgnoreFiles,search.useIgnoreFiles");
  }
  openSettings(e) {
    const t = { query: e };
    return this.contextService.getWorkbenchState() !== 1 ? this.preferencesService.openWorkspaceSettings(t) : this.preferencesService.openUserSettings(t);
  }
  onLearnMore() {
    this.openerService.open(We.parse("https://go.microsoft.com/fwlink/?linkid=853977"));
  }
  onSearchAgain() {
    this.inputPatternExcludes.setValue(""), this.inputPatternIncludes.setValue(""), this.inputPatternIncludes.setOnlySearchInOpenEditors(!1), this.triggerQueryChange({ preserveFocus: !1 });
  }
  onEnableExcludes() {
    this.toggleQueryDetails(!1, !0), this.searchExcludePattern.setUseExcludesAndIgnoreFiles(!0);
  }
  onDisableSearchInOpenEditors() {
    this.toggleQueryDetails(!1, !0), this.inputPatternIncludes.setOnlySearchInOpenEditors(!1);
  }
  updateSearchResultCount(e, t, i = !1) {
    var c;
    const s = this.viewModel.searchResult.fileCount();
    this.hasSearchResultsKey.set(s > 0);
    const r = this.messagesElement.style.display === "none", n = this.clearMessage(), a = i ? "" : this.buildResultCountMessage(this.viewModel.searchResult.count(), s);
    if (this.tree.ariaLabel = a + l(
      "forTerm",
      " - Search: {0}",
      ((c = this.searchResult.query) == null ? void 0 : c.contentPattern.pattern) ?? ""
    ), w(n, a), s > 0) {
      if (e) {
        const d = " - " + l(
          "useIgnoresAndExcludesDisabled",
          "exclude settings and ignore files are disabled"
        ) + " ", p = this.messageDisposables.add(new be(l("excludes.enable", "enable"), this.onEnableExcludes.bind(this), l(
          "useExcludesAndIgnoreFilesDescription",
          "Use Exclude Settings and Ignore Files"
        )));
        w(n, Y("span", void 0, d, "(", p.element, ")"));
      }
      if (t) {
        const d = " - " + l("onlyOpenEditors", "searching only in open files") + " ", p = this.messageDisposables.add(new be(l("openEditors.disable", "disable"), this.onDisableSearchInOpenEditors.bind(this), l("disableOpenEditors", "Search in entire workspace")));
        w(n, Y("span", void 0, d, "(", p.element, ")"));
      }
      w(n, " - ");
      const h = _e(l("openInEditor.tooltip", "Copy current search results to an editor"), this.keybindingService.lookupKeybinding(Ec)), u = this.messageDisposables.add(new be(l("openInEditor.message", "Open in editor"), () => this.instantiationService.invokeFunction(hn, this.searchResult, this.searchIncludePattern.getValue(), this.searchExcludePattern.getValue(), this.searchIncludePattern.onlySearchInOpenEditors()), h));
      w(n, u.element), this.reLayout();
    } else
      r || fi(this.messagesElement);
  }
  addMessage(e) {
    const t = this.messagesElement.firstChild;
    t && w(t, Br(e, this.instantiationService, this.notificationService, this.openerService, this.commandService, this.messageDisposables, () => this.triggerQueryChange()));
  }
  buildResultCountMessage(e, t) {
    return e === 1 && t === 1 ? l("search.file.result", "{0} result in {1} file", e, t) : e === 1 ? l("search.files.result", "{0} result in {1} files", e, t) : t === 1 ? l("search.file.results", "{0} results in {1} file", e, t) : l("search.files.results", "{0} results in {1} files", e, t);
  }
  showSearchWithoutFolderMessage() {
    this.searchWithoutFolderMessageElement = this.clearMessage();
    const e = w(this.searchWithoutFolderMessageElement, Y("p", void 0, l(
      "searchWithoutFolder",
      "You have not opened or specified a folder. Only open files are currently searched - "
    ))), t = this.messageDisposables.add(new be(l("openFolder", "Open Folder"), () => {
      this.commandService.executeCommand(ui && ea ? ta.ID : ia.ID).catch((i) => ut(i));
    }));
    w(e, t.element);
  }
  showEmptyStage(e = !1) {
    var i, s;
    ((((s = (i = this.messagesElement.firstChild) == null ? void 0 : i.textContent) == null ? void 0 : s.indexOf(js)) ?? -1) > -1 || e || !this.configurationService.getValue().search.searchOnType) && fi(this.messagesElement), Os(this.resultsElement), this.currentSelectedFileMatch = void 0;
  }
  shouldOpenInNotebookEditor(e, t) {
    return e instanceof Ie || t.scheme !== K.untitled && this.notebookService.getContributedNotebookTypes(t).length > 0;
  }
  onFocus(e, t, i, s) {
    const r = this.configurationService.getValue().search.useReplacePreview, n = e instanceof T ? e.parent().resource : e.resource;
    return r && this.viewModel.isReplaceActive() && this.viewModel.replaceString && !this.shouldOpenInNotebookEditor(e, n) ? this.replaceService.openReplacePreview(e, t, i, s) : this.open(e, t, i, s, n);
  }
  async open(e, t, i, s, r) {
    const n = this.getSelectionFrom(e), a = e instanceof T ? e.parent().matches() : [], c = r ?? (e instanceof T ? e.parent().resource : e.resource);
    let h;
    try {
      h = await this.editorService.openEditor({
        resource: c,
        options: {
          preserveFocus: t,
          pinned: s,
          selection: n,
          revealIfVisible: !0
        }
      }, i ? mt : ai);
      const u = h == null ? void 0 : h.getControl();
      e instanceof T && t && mi(u) ? this.viewModel.searchResult.rangeHighlightDecorations.highlightRange(u.getModel(), e.range()) : this.viewModel.searchResult.rangeHighlightDecorations.removeHighlightRange();
    } catch (u) {
      ut(u);
      return;
    }
    if (h instanceof uc) {
      const u = e.parent();
      if (e instanceof T)
        if (e instanceof Ie)
          e.parent().showMatch(e);
        else {
          const d = h.getControl();
          if (d) {
            u.bindNotebookEditorWidget(d), await u.updateMatchesForEditorWidget();
            const p = a.findIndex((m) => m.id() === e.id()), f = e.parent().matches(), S = p >= f.length ? f[f.length - 1] : f[p];
            S instanceof Ie && u.showMatch(S), (!this.tree.getFocus().includes(S) || !this.tree.getSelection().includes(S)) && (this.tree.setSelection([S], Ce()), this.tree.setFocus([S]));
          }
        }
    }
  }
  openEditorWithMultiCursor(e) {
    const t = e instanceof T ? e.parent().resource : e.resource;
    return this.editorService.openEditor({
      resource: t,
      options: {
        preserveFocus: !1,
        pinned: !0,
        revealIfVisible: !0
      }
    }).then((i) => {
      if (i) {
        let s = null;
        if (e instanceof L ? s = e : e instanceof T && (s = e.parent()), s) {
          const r = s.matches().map((a) => new Mi(
            a.range().startLineNumber,
            a.range().startColumn,
            a.range().endLineNumber,
            a.range().endColumn
          )), n = sa(i.getControl());
          if (n) {
            const a = ra.get(n);
            a == null || a.selectAllUsingSelections(r);
          }
        }
      }
      this.viewModel.searchResult.rangeHighlightDecorations.removeHighlightRange();
    }, ut);
  }
  getSelectionFrom(e) {
    let t = null;
    if (e instanceof T && (t = e), e instanceof L && e.count() > 0 && (t = e.matches()[e.matches().length - 1]), t) {
      const i = t.range();
      if (this.viewModel.isReplaceActive() && this.viewModel.replaceString) {
        const s = t.replaceString;
        return {
          startLineNumber: i.startLineNumber,
          startColumn: i.startColumn,
          endLineNumber: i.startLineNumber,
          endColumn: i.startColumn + s.length
        };
      }
      return i;
    }
  }
  onUntitledDidDispose(e) {
    if (!this.viewModel)
      return;
    const t = this.viewModel.searchResult.matches();
    for (let i = 0, s = t.length; i < s; i++)
      e.toString() === t[i].resource.toString() && this.viewModel.searchResult.remove(t[i]);
  }
  onFilesChanged(e) {
    if (!this.viewModel || this.searchConfig.sortOrder !== "modified" && !e.gotDeleted())
      return;
    const t = this.viewModel.searchResult.matches();
    if (e.gotDeleted()) {
      const i = t.filter((s) => e.contains(s.resource, 2));
      this.viewModel.searchResult.remove(i);
    } else {
      const i = t.filter((s) => e.contains(s.resource));
      i.length && this.searchConfig.sortOrder === "modified" && this.updateFileStats(i).then(() => this.refreshTree());
    }
  }
  get searchConfig() {
    return this.configurationService.getValue("search");
  }
  clearHistory() {
    this.searchWidget.clearHistory(), this.inputPatternExcludes.clearHistory(), this.inputPatternIncludes.clearHistory();
  }
  saveState() {
    var p, f, S, m;
    if (!this.searchWidget)
      return;
    const e = ((p = this.inputPatternExcludes) == null ? void 0 : p.getValue().trim()) ?? "", t = ((f = this.inputPatternIncludes) == null ? void 0 : f.getValue().trim()) ?? "", i = ((S = this.inputPatternIncludes) == null ? void 0 : S.onlySearchInOpenEditors()) ?? !1, s = ((m = this.inputPatternExcludes) == null ? void 0 : m.useExcludesAndIgnoreFiles()) ?? !0, r = this.viewModel.preserveCase;
    if (this.searchWidget.searchInput) {
      const E = this.searchWidget.searchInput.getRegex(), v = this.searchWidget.searchInput.getWholeWords(), y = this.searchWidget.searchInput.getCaseSensitive(), C = this.searchWidget.searchInput.getValue(), G = this.searchWidget.getNotebookFilters().codeInput, U = this.searchWidget.getNotebookFilters().codeOutput, O = this.searchWidget.getNotebookFilters().markupInput, k = this.searchWidget.getNotebookFilters().markupPreview;
      this.viewletState["query.contentPattern"] = C, this.viewletState["query.regex"] = E, this.viewletState["query.wholeWords"] = v, this.viewletState["query.caseSensitive"] = y, this.viewletState["query.isInNotebookMarkdownInput"] = O, this.viewletState["query.isInNotebookMarkdownPreview"] = k, this.viewletState["query.isInNotebookCellInput"] = G, this.viewletState["query.isInNotebookCellOutput"] = U;
    }
    this.viewletState["query.folderExclusions"] = e, this.viewletState["query.folderIncludes"] = t, this.viewletState["query.useExcludesAndIgnoreFiles"] = s, this.viewletState["query.preserveCase"] = r, this.viewletState["query.onlyOpenEditors"] = i;
    const n = this.searchAndReplaceWidget.isReplaceShown();
    this.viewletState["view.showReplace"] = n, this.viewletState["view.treeLayout"] = this.isTreeLayoutViewVisible, this.viewletState["query.replaceText"] = n && this.searchWidget.getReplaceValue();
    const a = /* @__PURE__ */ Object.create(null), c = this.searchWidget.getSearchHistory();
    c && c.length && (a.search = c);
    const h = this.searchWidget.getReplaceHistory();
    h && h.length && (a.replace = h);
    const u = this.inputPatternExcludes.getHistory();
    u && u.length && (a.exclude = u);
    const d = this.inputPatternIncludes.getHistory();
    d && d.length && (a.include = d), this.searchHistoryService.save(a), this.memento.saveMemento(), super.saveState();
  }
  async retrieveFileStats() {
    const e = this.searchResult.matches().filter((t) => !t.fileStat).map((t) => t.resolveFileStat(this.fileService));
    await Promise.all(e);
  }
  async updateFileStats(e) {
    const t = e.map((i) => i.resolveFileStat(this.fileService));
    await Promise.all(t);
  }
  removeFileStats() {
    for (const e of this.searchResult.matches())
      e.fileStat = void 0;
  }
  dispose() {
    this.isDisposed = !0, this.saveState(), super.dispose();
  }
};
ti.ACTIONS_RIGHT_CLASS_NAME = "actions-right";
ti = B([
  g(1, Rt),
  g(2, M),
  g(3, rr),
  g(4, Vo),
  g(5, ci),
  g(6, is),
  g(7, Mt),
  g(8, ls),
  g(9, V),
  g(10, Ho),
  g(11, H),
  g(12, pe),
  g(13, Yi),
  g(14, te),
  g(15, si),
  g(16, ri),
  g(17, Ko),
  g(18, li),
  g(19, ds),
  g(20, cs),
  g(21, wr),
  g(22, Tt),
  g(23, rt),
  g(24, es),
  g(25, it),
  g(26, Qo),
  g(27, ji)
], ti);
class be extends ee {
  constructor(e, t, i) {
    super(), this.element = Y("a.pointer", { tabindex: 0, title: i }, e), this.addEventHandlers(t);
  }
  addEventHandlers(e) {
    const t = (i) => {
      Ee.stop(i, !1), e(i);
    };
    this._register(Se(this.element, me.CLICK, t)), this._register(Se(this.element, me.KEY_DOWN, (i) => {
      const s = new vt(i);
      (s.equals(10) || s.equals(3)) && (t(i), s.preventDefault(), s.stopPropagation());
    }));
  }
}
x(class extends I {
  constructor() {
    super({
      id: xc,
      title: {
        value: l("copyMatchLabel", "Copy"),
        original: "Copy"
      },
      category: F,
      keybinding: {
        weight: 200,
        when: He,
        primary: 2081
      },
      menu: [{
        id: _.SearchContext,
        when: He,
        group: "search_2",
        order: 1
      }]
    });
  }
  async run(e, t) {
    await Rl(e, t);
  }
});
x(class extends I {
  constructor() {
    super({
      id: bc,
      title: {
        value: l("copyPathLabel", "Copy Path"),
        original: "Copy Path"
      },
      category: F,
      keybinding: {
        weight: 200,
        when: Hi,
        primary: 2593,
        win: {
          primary: 1569
        }
      },
      menu: [{
        id: _.SearchContext,
        when: Hi,
        group: "search_2",
        order: 2
      }]
    });
  }
  async run(e, t) {
    await Fl(e, t);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Ic,
      title: {
        value: l("copyAllLabel", "Copy All"),
        original: "Copy All"
      },
      category: F,
      menu: [{
        id: _.SearchContext,
        when: ne,
        group: "search_2",
        order: 3
      }]
    });
  }
  async run(e) {
    await Pl(e);
  }
});
const tt = na ? `\r
` : `
`;
async function Fl(o, e) {
  if (!e) {
    const r = pn(o);
    if (!(r instanceof L || r instanceof Ti))
      return;
    e = r;
  }
  const t = o.get(hi), s = o.get(ge).getUriLabel(e.resource, { noPrefix: !0 });
  await t.writeText(s);
}
async function Rl(o, e) {
  if (!e) {
    const r = pn(o);
    if (!r)
      return;
    e = r;
  }
  const t = o.get(hi), i = o.get(ge);
  let s;
  e instanceof T ? s = dn(e) : e instanceof L ? s = gn(e, i).text : e instanceof J && (s = ys(e, i).text), s && await t.writeText(s);
}
async function Pl(o) {
  const e = o.get(P), t = o.get(hi), i = o.get(ge), s = W(e);
  if (s) {
    const r = s.searchResult, n = _l(r.folderMatches(), i);
    await t.writeText(n);
  }
}
function dn(o, e = 0) {
  const t = () => `${o.range().startLineNumber},${o.range().startColumn}`, i = (a) => o.range().startLineNumber + a + "", s = o.fullPreviewLines(), r = s.reduce((a, c, h) => {
    const u = h === 0 ? t().length : i(h).length;
    return Math.max(u, a);
  }, 0);
  return s.map((a, c) => {
    const h = c === 0 ? t() : i(c), u = " ".repeat(r - h.length);
    return `${" ".repeat(e)}${h}: ${u}${a}`;
  }).join(`
`);
}
function Tl(o, e) {
  return o instanceof L ? gn(o, e) : ys(o, e);
}
function gn(o, e) {
  const t = o.matches().sort(ve).map((s) => dn(s, 2));
  return {
    text: `${e.getUriLabel(o.resource, { noPrefix: !0 })}${tt}${t.join(tt)}`,
    count: t.length
  };
}
function ys(o, e) {
  const t = [];
  let i = 0;
  return o.matches().sort(ve).forEach((r) => {
    const n = Tl(r, e);
    i += n.count, t.push(n.text);
  }), {
    text: t.join(tt + tt),
    count: i
  };
}
function _l(o, e) {
  const t = [];
  o = o.sort(ve);
  for (let i = 0; i < o.length; i++) {
    const s = ys(o[i], e);
    s.count && t.push(s.text);
  }
  return t.join(tt + tt);
}
function pn(o) {
  const e = o.get(P), t = W(e);
  return t == null ? void 0 : t.getControl().getSelection()[0];
}
x(class extends I {
  constructor() {
    super({
      id: zc,
      title: {
        value: l("restrictResultsToFolder", "Restrict Search to Folder"),
        original: "Restrict Search to Folder"
      },
      category: F,
      keybinding: {
        weight: 200,
        when: b.and(ie, ei),
        primary: 1572
      },
      menu: [
        {
          id: _.SearchContext,
          group: "search",
          order: 3,
          when: b.and(ei)
        }
      ]
    });
  }
  async run(e, t) {
    await ws(e, !1, !0, void 0, t);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Uc,
      title: {
        value: l("excludeFolderFromSearch", "Exclude Folder from Search"),
        original: "Exclude Folder from Search"
      },
      category: F,
      menu: [
        {
          id: _.SearchContext,
          group: "search",
          order: 4,
          when: b.and(ei)
        }
      ]
    });
  }
  async run(e, t) {
    await ws(e, !1, !1, void 0, t);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Ac,
      title: {
        value: l("revealInSideBar", "Reveal in Explorer View"),
        original: "Reveal in Explorer View"
      },
      category: F,
      menu: [{
        id: _.SearchContext,
        when: b.and(Fe, ne),
        group: "search_3",
        order: 1
      }]
    });
  }
  async run(e, t) {
    const i = e.get(oa), s = e.get(Cr), r = e.get(pe), n = W(e.get(P));
    if (!n)
      return;
    let a;
    if (t instanceof L || (t = n.getControl().getFocus()[0]), t instanceof L)
      a = t;
    else
      return;
    i.openPaneComposite(aa, 0, !1).then((c) => {
      if (!c)
        return;
      const h = c.getViewPaneContainer(), u = a.resource;
      if (u && r.isInsideWorkspace(u)) {
        const d = h.getExplorerView();
        d.setExpanded(!0), s.select(u, !0).then(() => d.focus(), ut);
      }
    });
  }
});
x(class extends I {
  constructor() {
    super({
      id: Sc,
      title: {
        value: l("findInFiles", "Find in Files"),
        mnemonicTitle: l(
          { key: "miFindInFiles", comment: ["&& denotes a mnemonic"] },
          "Find &&in Files"
        ),
        original: "Find in Files"
      },
      description: {
        description: l("findInFiles.description", "Open a workspace search"),
        args: [
          {
            name: l("findInFiles.args", "A set of options for the search"),
            schema: {
              type: "object",
              properties: {
                query: { type: "string" },
                replace: { type: "string" },
                preserveCase: { type: "boolean" },
                triggerSearch: { type: "boolean" },
                filesToInclude: { type: "string" },
                filesToExclude: { type: "string" },
                isRegex: { type: "boolean" },
                isCaseSensitive: { type: "boolean" },
                matchWholeWord: { type: "boolean" },
                useExcludeSettingsAndIgnoreFiles: { type: "boolean" },
                onlyOpenEditors: { type: "boolean" }
              }
            }
          }
        ]
      },
      category: F,
      keybinding: {
        weight: 200,
        primary: 3108
      },
      menu: [{
        id: _.MenubarEditMenu,
        group: "4_find_global",
        order: 1
      }],
      f1: !0
    });
  }
  async run(e, t = {}) {
    Ml(e, t);
  }
});
x(class extends I {
  constructor() {
    super({
      id: jc,
      title: {
        value: l("findInFolder", "Find in Folder..."),
        original: "Find in Folder..."
      },
      category: F,
      keybinding: {
        weight: 200,
        when: b.and(ca, Wi),
        primary: 1572
      },
      menu: [
        {
          id: _.ExplorerContext,
          group: "4_search",
          order: 10,
          when: b.and(Wi)
        }
      ]
    });
  }
  async run(e, t) {
    await ws(e, !0, !0, t);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Xc,
      title: {
        value: l("findInWorkspace", "Find in Workspace..."),
        original: "Find in Workspace..."
      },
      category: F,
      menu: [
        {
          id: _.ExplorerContext,
          group: "4_search",
          order: 10,
          when: b.and(la, Wi.toNegated())
        }
      ]
    });
  }
  async run(e) {
    const i = e.get(H).getValue().search.mode;
    if (i === "view") {
      const s = await $e(e.get(P), !0);
      s == null || s.searchInFolders();
    } else
      return e.get(Mt).executeCommand(kt, {
        location: i === "newEditor" ? "new" : "reuse",
        filesToInclude: ""
      });
  }
});
async function ws(o, e, t, i, s) {
  const r = o.get(ha), n = o.get(Rt), a = o.get(P), c = o.get(pe), h = o.get(Mt), u = o.get(H).getValue().search, d = u.mode;
  let p;
  if (e)
    p = ua(i, r, o.get(M), o.get(Cr));
  else {
    const S = W(o.get(P));
    if (!S)
      return;
    p = Al(S.getControl(), s, u);
  }
  const f = n.resolveAll(p.map((S) => ({ resource: S }))).then((S) => {
    const m = [];
    return S.forEach((E) => {
      E.success && E.stat && m.push(E.stat.isDirectory ? E.stat.resource : Ji(E.stat.resource));
    }), da(m, c);
  });
  if (d === "view") {
    const S = await $e(a, !0);
    p && p.length && S && (t ? S.searchInFolders(await f) : S.searchOutsideOfFolders(await f));
    return;
  } else
    return t ? h.executeCommand(kt, {
      filesToInclude: (await f).join(", "),
      showIncludesExcludes: !0,
      location: d === "newEditor" ? "new" : "reuse"
    }) : h.executeCommand(kt, {
      filesToExclude: (await f).join(", "),
      showIncludesExcludes: !0,
      location: d === "newEditor" ? "new" : "reuse"
    });
}
function Al(o, e, t) {
  return fs(o, e, t).map(
    (i) => i instanceof T ? null : i.resource
  ).filter((i) => i !== null);
}
async function Ml(o, e = {}) {
  const t = o.get(H).getValue().search, i = o.get(P), s = o.get(Mt), r = {};
  if (Object.keys(e).length !== 0) {
    const a = o.get(xr), c = o.get(ss), h = o.get(pe), u = c.getLastActiveWorkspaceRoot(), d = (u == null ? void 0 : u.scheme) === K.file || (u == null ? void 0 : u.scheme) === K.vscodeRemote ? u : void 0, p = d ? st(h.getWorkspaceFolder(d)) : void 0;
    for (const f of Object.entries(e)) {
      const S = f[0], m = f[1];
      m !== void 0 && (r[S] = typeof m == "string" ? await a.resolveAsync(p, m) : m);
    }
  }
  const n = t.mode;
  if (n === "view")
    $e(i, !1).then((a) => {
      if (a) {
        a.searchAndReplaceWidget.toggleReplace(typeof r.replace == "string");
        let h = !1;
        typeof r.query != "string" && (h = a.updateTextFromFindWidgetOrSelection({ allowUnselectedWord: typeof r.replace != "string" })), a.setSearchParameters(r), a.searchAndReplaceWidget.focus(void 0, h, h);
      }
    });
  else {
    const a = (c) => ({
      location: n === "newEditor" ? "new" : "reuse",
      query: c.query,
      filesToInclude: c.filesToInclude,
      filesToExclude: c.filesToExclude,
      matchWholeWord: c.matchWholeWord,
      isCaseSensitive: c.isCaseSensitive,
      isRegexp: c.isRegex,
      useExcludeSettingsAndIgnoreFiles: c.useExcludeSettingsAndIgnoreFiles,
      onlyOpenEditors: c.onlyOpenEditors,
      showIncludesExcludes: !!(c.filesToExclude || c.filesToExclude || !c.useExcludeSettingsAndIgnoreFiles)
    });
    s.executeCommand(kt, a(r));
  }
}
var Ci;
x(class extends I {
  constructor() {
    super({
      id: qc,
      title: {
        value: l("ToggleQueryDetailsAction.label", "Toggle Query Details"),
        original: "Toggle Query Details"
      },
      category: F,
      keybinding: {
        weight: 200,
        when: b.or(we, q),
        primary: 3112
      }
    });
  }
  run(e) {
    const t = e.get(te).getContext(document.activeElement);
    if (t.getValue(q.serialize()))
      e.get(M).activeEditorPane.toggleQueryDetails();
    else if (t.getValue(we.serialize())) {
      const i = W(e.get(P));
      hs(i).toggleQueryDetails();
    }
  }
});
x(class extends I {
  constructor() {
    super({
      id: Tc,
      title: {
        value: l("CloseReplaceWidget.label", "Close Replace Widget"),
        original: "Close Replace Widget"
      },
      category: F,
      keybinding: {
        weight: 200,
        when: b.and(ie, Ur),
        primary: 9
      }
    });
  }
  run(e) {
    const t = W(e.get(P));
    return t && (t.searchAndReplaceWidget.toggleReplace(!1), t.searchAndReplaceWidget.focus()), Promise.resolve(null);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Vr,
      title: {
        value: l("ToggleCaseSensitiveCommandId.label", "Toggle Case Sensitive"),
        original: "Toggle Case Sensitive"
      },
      category: F,
      keybinding: Object.assign({
        weight: 200,
        when: ui ? b.and(we, Gr.toNegated()) : we
      }, kr)
    });
  }
  async run(e) {
    Wl(e);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Hr,
      title: {
        value: l("ToggleWholeWordCommandId.label", "Toggle Whole Word"),
        original: "Toggle Whole Word"
      },
      keybinding: Object.assign({
        weight: 200,
        when: we
      }, Fr),
      category: F
    });
  }
  async run(e) {
    return Ll(e);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Kr,
      title: {
        value: l("ToggleRegexCommandId.label", "Toggle Regex"),
        original: "Toggle Regex"
      },
      keybinding: Object.assign({
        weight: 200,
        when: we
      }, Rr),
      category: F
    });
  }
  async run(e) {
    return Ol(e);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Qr,
      title: {
        value: l("TogglePreserveCaseId.label", "Toggle Preserve Case"),
        original: "Toggle Preserve Case"
      },
      keybinding: Object.assign({
        weight: 200,
        when: we
      }, ga),
      category: F
    });
  }
  async run(e) {
    return Dl(e);
  }
});
x(class extends I {
  constructor() {
    super({
      id: vc,
      title: {
        value: l("OpenMatch.label", "Open Match"),
        original: "Open Match"
      },
      category: F,
      keybinding: {
        weight: 200,
        when: b.and(ie, He),
        primary: 3,
        mac: {
          primary: 3,
          secondary: [2066]
        }
      }
    });
  }
  run(e) {
    const t = W(e.get(P));
    if (t) {
      const i = t.getControl(), s = t.getControl(), r = i.getFocus()[0];
      r instanceof J ? s.toggleCollapsed(r) : t.open(i.getFocus()[0], !1, !1, !0);
    }
  }
});
x(class extends I {
  constructor() {
    super({
      id: yc,
      title: {
        value: l("OpenMatchToSide.label", "Open Match To Side"),
        original: "Open Match To Side"
      },
      category: F,
      keybinding: {
        weight: 200,
        when: b.and(ie, He),
        primary: 2051,
        mac: {
          primary: 259
        }
      }
    });
  }
  run(e) {
    const t = W(e.get(P));
    if (t) {
      const i = t.getControl();
      t.open(i.getFocus()[0], !1, !0, !0);
    }
  }
});
x(class extends I {
  constructor() {
    super({
      id: _c,
      title: {
        value: l("AddCursorsAtSearchResults.label", "Add Cursors at Search Results"),
        original: "Add Cursors at Search Results"
      },
      keybinding: {
        weight: 200,
        when: b.and(ie, He),
        primary: 3114
      },
      category: F
    });
  }
  async run(e) {
    const t = W(e.get(P));
    if (t) {
      const i = t.getControl();
      t.openEditorWithMultiCursor(i.getFocus()[0]);
    }
  }
});
x(class extends I {
  constructor() {
    super({
      id: $c,
      title: {
        value: l("FocusNextInputAction.label", "Focus Next Input"),
        original: "Focus Next Input"
      },
      category: F,
      keybinding: {
        weight: 200,
        when: b.or(b.and(q, et), b.and(ie, et)),
        primary: 2066
      }
    });
  }
  async run(e) {
    const t = e.get(M);
    t.activeEditor instanceof D && t.activeEditorPane.focusNextInput();
    const s = W(e.get(P));
    s == null || s.focusNextInputBox();
  }
});
x(class extends I {
  constructor() {
    super({
      id: Gc,
      title: {
        value: l("FocusPreviousInputAction.label", "Focus Previous Input"),
        original: "Focus Previous Input"
      },
      category: F,
      keybinding: {
        weight: 200,
        when: b.or(b.and(q, et), b.and(
          ie,
          et,
          Lt.toNegated()
        )),
        primary: 2064
      }
    });
  }
  async run(e) {
    const t = e.get(M);
    t.activeEditor instanceof D && t.activeEditorPane.focusPrevInput();
    const s = W(e.get(P));
    s == null || s.focusPreviousInputBox();
  }
});
x(class extends I {
  constructor() {
    super({
      id: mc,
      title: {
        value: l("FocusSearchFromResults.label", "Focus Search From Results"),
        original: "Focus Search From Results"
      },
      category: F,
      keybinding: {
        weight: 200,
        when: b.and(ie, b.or($r, pa)),
        primary: 2064
      }
    });
  }
  run(e) {
    const t = W(e.get(P));
    t == null || t.focusPreviousInputBox();
  }
});
x((Ci = class $i extends I {
  constructor() {
    super({
      id: Nc,
      title: {
        value: l("toggleTabs", "Toggle Search on Type"),
        original: "Toggle Search on Type"
      },
      category: F
    });
  }
  async run(e) {
    const t = e.get(H), i = t.getValue($i.searchOnTypeKey);
    return t.updateValue($i.searchOnTypeKey, !i);
  }
}, Ci.searchOnTypeKey = "search.searchOnType", Ci));
x(class extends I {
  constructor() {
    super({
      id: kc,
      title: {
        value: l("focusSearchListCommandLabel", "Focus List"),
        original: "Focus List"
      },
      category: F,
      f1: !0
    });
  }
  async run(e) {
    Nl(e);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Oc,
      title: {
        value: l("FocusNextSearchResult.label", "Focus Next Search Result"),
        original: "Focus Next Search Result"
      },
      keybinding: [{
        primary: 62,
        weight: 200
      }],
      category: F,
      f1: !0,
      precondition: b.or(ne, q)
    });
  }
  async run(e) {
    return await Bl(e);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Dc,
      title: {
        value: l("FocusPreviousSearchResult.label", "Focus Previous Search Result"),
        original: "Focus Previous Search Result"
      },
      keybinding: [{
        primary: 1086,
        weight: 200
      }],
      category: F,
      f1: !0,
      precondition: b.or(ne, q)
    });
  }
  async run(e) {
    return await Vl(e);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Mc,
      title: {
        value: l("replaceInFiles", "Replace in Files"),
        original: "Replace in Files"
      },
      keybinding: [{
        primary: 3110,
        weight: 200
      }],
      category: F,
      f1: !0,
      menu: [{
        id: _.MenubarEditMenu,
        group: "4_find_global",
        order: 2
      }]
    });
  }
  async run(e) {
    return await Hl(e, !0);
  }
});
function Wl(o) {
  const e = W(o.get(P));
  e == null || e.toggleCaseSensitive();
}
function Ll(o) {
  const e = W(o.get(P));
  e == null || e.toggleWholeWords();
}
function Ol(o) {
  const e = W(o.get(P));
  e == null || e.toggleRegex();
}
function Dl(o) {
  const e = W(o.get(P));
  e == null || e.togglePreserveCase();
}
const Nl = (o) => {
  const e = o.get(P);
  $e(e).then((t) => {
    t == null || t.moveFocusToResults();
  });
};
async function Bl(o) {
  const e = o.get(M);
  return e.activeEditor instanceof D ? e.activeEditorPane.focusNextResult() : $e(o.get(P)).then((i) => {
    i == null || i.selectNextMatch();
  });
}
async function Vl(o) {
  const e = o.get(M);
  return e.activeEditor instanceof D ? e.activeEditorPane.focusPreviousResult() : $e(o.get(P)).then((i) => {
    i == null || i.selectPreviousMatch();
  });
}
async function Hl(o, e) {
  return $e(o.get(P), !1).then((t) => {
    if (t) {
      t.searchAndReplaceWidget.toggleReplace(e);
      const s = t.updateTextFromFindWidgetOrSelection({ allowUnselectedWord: !e });
      t.searchAndReplaceWidget.focus(void 0, s, s);
    }
  });
}
x(class extends I {
  constructor() {
    super({
      id: wc,
      title: {
        value: l("RemoveAction.label", "Dismiss"),
        original: "Dismiss"
      },
      category: F,
      icon: ic,
      keybinding: {
        weight: 200,
        when: b.and(ie, He),
        primary: 20,
        mac: {
          primary: 2049
        }
      },
      menu: [
        {
          id: _.SearchContext,
          group: "search",
          order: 2
        },
        {
          id: _.SearchActionMenu,
          group: "inline",
          order: 2
        }
      ]
    });
  }
  run(e, t) {
    const i = e.get(P), s = e.get(H), r = W(i);
    if (!r)
      return;
    let n = t == null ? void 0 : t.element, a = t == null ? void 0 : t.viewer;
    a || (a = r.getControl()), n || (n = a.getFocus()[0] ?? void 0);
    const c = fs(a, n, s.getValue("search"));
    let h = a.getFocus()[0] ?? void 0;
    if (c.length === 0)
      return;
    (!h || h instanceof di) && (h = n);
    let u;
    const d = gc(c, h);
    h && d && (u = fn(a, h, c));
    const p = r.searchResult;
    p && p.batchRemove(c), h && d ? (u || (u = Sn(a, h)), u && !gt(u, c) && (a.reveal(u), a.setFocus([u], Ce()), a.setSelection([u], Ce()))) : fa(a.getFocus(), a.getSelection()) || a.setSelection(a.getFocus()), a.domFocus();
  }
});
x(class extends I {
  constructor() {
    super({
      id: Fc,
      title: {
        value: l("match.replace.label", "Replace"),
        original: "Replace"
      },
      category: F,
      keybinding: {
        weight: 200,
        when: b.and(
          ie,
          he,
          Ve,
          Z
        ),
        primary: 3094
      },
      icon: ps,
      menu: [
        {
          id: _.SearchContext,
          when: b.and(
            he,
            Ve,
            Z
          ),
          group: "search",
          order: 1
        },
        {
          id: _.SearchActionMenu,
          when: b.and(
            he,
            Ve,
            Z
          ),
          group: "inline",
          order: 1
        }
      ]
    });
  }
  async run(e, t) {
    return bs(e, t);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Rc,
      title: {
        value: l("file.replaceAll.label", "Replace All"),
        original: "Replace All"
      },
      category: F,
      keybinding: {
        weight: 200,
        when: b.and(
          ie,
          he,
          Fe,
          Z
        ),
        primary: 3094,
        secondary: [3075]
      },
      icon: ps,
      menu: [
        {
          id: _.SearchContext,
          when: b.and(
            he,
            Fe,
            Z
          ),
          group: "search",
          order: 1
        },
        {
          id: _.SearchActionMenu,
          when: b.and(
            he,
            Fe,
            Z
          ),
          group: "inline",
          order: 1
        }
      ]
    });
  }
  async run(e, t) {
    return bs(e, t);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Pc,
      title: {
        value: l("file.replaceAll.label", "Replace All"),
        original: "Replace All"
      },
      category: F,
      keybinding: {
        weight: 200,
        when: b.and(
          ie,
          he,
          Be,
          Z
        ),
        primary: 3094,
        secondary: [3075]
      },
      icon: ps,
      menu: [
        {
          id: _.SearchContext,
          when: b.and(
            he,
            Be,
            Z
          ),
          group: "search",
          order: 1
        },
        {
          id: _.SearchActionMenu,
          when: b.and(
            he,
            Be,
            Z
          ),
          group: "inline",
          order: 1
        }
      ]
    });
  }
  async run(e, t) {
    return bs(e, t);
  }
});
function bs(o, e) {
  const t = o.get(H), i = o.get(P), s = W(i), r = (e == null ? void 0 : e.viewer) ?? (s == null ? void 0 : s.getControl());
  if (!r)
    return;
  const n = (e == null ? void 0 : e.element) ?? r.getFocus()[0], a = fs(r, n ?? void 0, t.getValue("search"));
  let c = r.getFocus()[0];
  if ((!c || c && !gt(c, a) || c instanceof di) && (c = n), a.length === 0)
    return;
  let h;
  c && (h = fn(r, c, a));
  const u = s == null ? void 0 : s.searchResult;
  u && u.batchReplace(a), c && (h || (h = Sn(r, c)), h && (r.reveal(h), r.setFocus([h], Ce()), r.setSelection([h], Ce()), h instanceof T ? !t.getValue().search.useReplacePreview || Kl(o, h) || h instanceof Ie ? s == null || s.open(h, !0) : o.get(si).openReplacePreview(h, !0) : h instanceof L && (s == null || s.open(h, !0)))), r.domFocus();
}
function Kl(o, e) {
  if (!(e instanceof T))
    return !1;
  const t = o.get(M).activeEditor, i = t == null ? void 0 : t.resource;
  return i ? o.get(Xi).extUri.isEqual(i, e.parent().resource) : !1;
}
function Ql(o, e) {
  return o instanceof T ? e instanceof T ? 0 : -1 : o instanceof L ? e instanceof T ? 1 : e instanceof L ? 0 : -1 : e instanceof J ? 0 : 1;
}
function fn(o, e, t) {
  const i = o.navigate(e);
  if (e instanceof J)
    for (; i.next() && (!(i.current() instanceof J) || gt(i.current(), t)); )
      ;
  else if (e instanceof L)
    for (; i.next() && (!(i.current() instanceof L) || gt(i.current(), t)); )
      o.expand(i.current());
  else
    for (; i.next() && (!(i.current() instanceof T) || gt(i.current(), t)); )
      o.expand(i.current());
  return i.current();
}
function Sn(o, e) {
  let t = o.lastVisibleElement ?? null;
  for (; t; ) {
    const i = Ql(e, t);
    if (i === -1)
      o.expand(t), t = o.lastVisibleElement;
    else if (i === 1)
      t = o.getParentElement(t);
    else
      return t;
  }
}
var ot;
x((ot = class mn extends I {
  constructor() {
    super({
      id: qr,
      title: {
        value: l("showTriggerActions", "Go to Symbol in Workspace..."),
        original: "Go to Symbol in Workspace...",
        mnemonicTitle: l(
          { key: "miGotoSymbolInWorkspace", comment: ["&& denotes a mnemonic"] },
          "Go to Symbol in &&Workspace..."
        )
      },
      f1: !0,
      keybinding: {
        weight: 200,
        primary: 2098
      },
      menu: {
        id: _.MenubarGoMenu,
        group: "3_global_nav",
        order: 2
      }
    });
  }
  async run(e) {
    e.get(Pt).quickAccess.show(mn.ALL_SYMBOLS_PREFIX);
  }
}, ot.ID = "workbench.action.showAllSymbols", ot.LABEL = l("showTriggerActions", "Go to Symbol in Workspace..."), ot.ALL_SYMBOLS_PREFIX = "#", ot));
x(class extends I {
  constructor() {
    super({
      id: Cc,
      title: {
        value: l("clearSearchHistoryLabel", "Clear Search History"),
        original: "Clear Search History"
      },
      category: F,
      f1: !0
    });
  }
  async run(e) {
    ql(e);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Wc,
      title: {
        value: l("CancelSearchAction.label", "Cancel Search"),
        original: "Cancel Search"
      },
      icon: cc,
      category: F,
      f1: !0,
      precondition: jt.isEqualTo(fe.Idle).negate(),
      keybinding: {
        weight: 200,
        when: b.and(ie, Sa),
        primary: 9
      },
      menu: [{
        id: _.ViewTitle,
        group: "navigation",
        order: 0,
        when: b.and(b.equals("view", de), jt.isEqualTo(fe.SlowSearch))
      }]
    });
  }
  run(e) {
    return Gl(e);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Lc,
      title: {
        value: l("RefreshAction.label", "Refresh"),
        original: "Refresh"
      },
      icon: Dr,
      precondition: Ss,
      category: F,
      f1: !0,
      menu: [{
        id: _.ViewTitle,
        group: "navigation",
        order: 0,
        when: b.and(b.equals("view", de), jt.isEqualTo(fe.SlowSearch).negate())
      }]
    });
  }
  run(e, ...t) {
    return zl(e);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Bc,
      title: {
        value: l("CollapseDeepestExpandedLevelAction.label", "Collapse All"),
        original: "Collapse All"
      },
      category: F,
      icon: sc,
      f1: !0,
      precondition: b.and(ne, wt),
      menu: [{
        id: _.ViewTitle,
        group: "navigation",
        order: 3,
        when: b.and(b.equals("view", de), b.or(ne.negate(), wt))
      }]
    });
  }
  run(e, ...t) {
    return jl(e);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Vc,
      title: {
        value: l("ExpandAllAction.label", "Expand All"),
        original: "Expand All"
      },
      category: F,
      icon: rc,
      f1: !0,
      precondition: b.and(ne, wt.toNegated()),
      menu: [{
        id: _.ViewTitle,
        group: "navigation",
        order: 3,
        when: b.and(b.equals("view", de), ne, wt.toNegated())
      }]
    });
  }
  run(e, ...t) {
    return Ul(e);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Hc,
      title: {
        value: l("ClearSearchResultsAction.label", "Clear Search Results"),
        original: "Clear Search Results"
      },
      category: F,
      icon: ac,
      f1: !0,
      precondition: b.or(
        ne,
        Ss,
        zr,
        jr
      ),
      menu: [{
        id: _.ViewTitle,
        group: "navigation",
        order: 1,
        when: b.equals("view", de)
      }]
    });
  }
  run(e, ...t) {
    return $l(e);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Kc,
      title: {
        value: l("ViewAsTreeAction.label", "View as Tree"),
        original: "View as Tree"
      },
      category: F,
      icon: oc,
      f1: !0,
      precondition: b.and(ne, bt.toNegated()),
      menu: [{
        id: _.ViewTitle,
        group: "navigation",
        order: 2,
        when: b.and(b.equals("view", de), bt.toNegated())
      }]
    });
  }
  run(e, ...t) {
    const i = W(e.get(P));
    i && i.setTreeView(!0);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Qc,
      title: {
        value: l("ViewAsListAction.label", "View as List"),
        original: "View as List"
      },
      category: F,
      icon: nc,
      f1: !0,
      precondition: b.and(ne, bt),
      menu: [{
        id: _.ViewTitle,
        group: "navigation",
        order: 2,
        when: b.and(b.equals("view", de), bt)
      }]
    });
  }
  run(e, ...t) {
    const i = W(e.get(P));
    i && i.setTreeView(!1);
  }
});
const ql = (o) => {
  o.get(ds).clearHistory();
};
function Ul(o) {
  const e = o.get(P), t = W(e);
  t && t.getControl().expandAll();
}
function $l(o) {
  const e = o.get(P), t = W(e);
  t == null || t.clearSearchResults();
}
function Gl(o) {
  const e = o.get(P), t = W(e);
  t == null || t.cancelSearch();
}
function zl(o) {
  const e = o.get(P), t = W(e);
  t == null || t.triggerQueryChange({ preserveFocus: !1 });
}
function jl(o) {
  var i, s, r;
  const e = o.get(P), t = W(e);
  if (t) {
    const n = t.getControl(), a = n.navigate();
    let c = a.first(), h = !1, u = !1;
    if (c instanceof Qt || t.isTreeLayoutViewVisible)
      for (; c = a.next(); ) {
        if (c instanceof T) {
          h = !0;
          break;
        }
        if (t.isTreeLayoutViewVisible && !u) {
          let p = c;
          if (c instanceof J) {
            const S = (i = n.getCompressedTreeNode(c).element) == null ? void 0 : i.elements[0];
            p = S && !(S instanceof T) ? S : c;
          }
          const f = p.parent();
          f instanceof Qt || f instanceof Pi || f instanceof di || (u = !0);
        }
      }
    if (h) {
      c = a.first();
      do
        c instanceof L && n.collapse(c);
      while (c = a.next());
    } else if (u) {
      if (c = a.first(), c)
        do {
          let p = c;
          if (c instanceof J) {
            const S = (s = n.getCompressedTreeNode(c).element) == null ? void 0 : s.elements[0];
            p = S && !(S instanceof T) ? S : c;
          }
          const f = p.parent();
          (f instanceof Qt || f instanceof Pi) && (n.hasElement(c) ? n.collapse(c, !0) : n.collapseAll());
        } while (c = a.next());
    } else
      n.collapseAll();
    const d = (r = n.getFocus()[0]) == null ? void 0 : r.parent();
    d && (d instanceof J || d instanceof L) && n.hasElement(d) && n.isCollapsed(d) && (n.domFocus(), n.focusFirst(), n.setSelection(n.getFocus()));
  }
}
Za();
hl();
const Xl = "search.mode", vn = Pe.as(Pr.ViewContainersRegistry).registerViewContainer({
  id: Ds,
  title: { value: l("name", "Search"), original: "Search" },
  ctorDescriptor: new Oe(
    ma,
    [Ds, { mergeViewWithContainerWhenSingleView: !0 }]
  ),
  hideIfEmpty: !0,
  icon: Nr,
  order: 1
}, 0, { doNotRegisterOpenCommand: !0 }), Yl = {
  id: de,
  containerIcon: Nr,
  name: l("search", "Search"),
  ctorDescriptor: new Oe(ti),
  canToggleVisibility: !1,
  canMoveView: !0,
  openCommandActionDescriptor: {
    id: vn.id,
    mnemonicTitle: l({ key: "miViewSearch", comment: ["&& denotes a mnemonic"] }, "&&Search"),
    keybindings: {
      primary: 3108,
      when: b.regex("neverMatch", /doesNotMatch/)
    },
    order: 1
  }
};
Pe.as(Pr.ViewsRegistry).registerViews([Yl], vn);
const yn = Pe.as(ir.Quickaccess);
yn.registerQuickAccessProvider({
  ctor: ye,
  prefix: ye.PREFIX,
  placeholder: l(
    "anythingQuickAccessPlaceholder",
    "Search files by name (append {0} to go to line or {1} to go to symbol)",
    Ha.PREFIX,
    re.PREFIX
  ),
  contextKey: Ka,
  helpEntries: [{ description: l("anythingQuickAccess", "Go to File"), commandId: "workbench.action.quickOpen" }]
});
yn.registerQuickAccessProvider({
  ctor: Re,
  prefix: Re.PREFIX,
  placeholder: l("symbolsQuickAccessPlaceholder", "Type the name of a symbol to open."),
  contextKey: "inWorkspaceSymbolsPicker",
  helpEntries: [{ description: l("symbolsQuickAccess", "Go to Symbol in Workspace"), commandId: qr }]
});
const Jl = Pe.as(va.Configuration);
Jl.registerConfiguration({
  id: "search",
  order: 13,
  title: l("searchConfigurationTitle", "Search"),
  type: "object",
  properties: {
    [ya]: {
      type: "object",
      markdownDescription: l(
        "exclude",
        "Configure [glob patterns](https://code.visualstudio.com/docs/editor/codebasics#_advanced-search-options) for excluding files and folders in fulltext searches and quick open. Inherits all glob patterns from the `#files.exclude#` setting."
      ),
      default: { "**/node_modules": !0, "**/bower_components": !0, "**/*.code-search": !0 },
      additionalProperties: {
        anyOf: [
          {
            type: "boolean",
            description: l(
              "exclude.boolean",
              "The glob pattern to match file paths against. Set to true or false to enable or disable the pattern."
            )
          },
          {
            type: "object",
            properties: {
              when: {
                type: "string",
                pattern: "\\w*\\$\\(basename\\)\\w*",
                default: "$(basename).ext",
                markdownDescription: l(
                  { key: "exclude.when", comment: ["\\$(basename) should not be translated"] },
                  "Additional check on the siblings of a matching file. Use \\$(basename) as variable for the matching file name."
                )
              }
            }
          }
        ]
      },
      scope: 4
    },
    [Xl]: {
      type: "string",
      enum: ["view", "reuseEditor", "newEditor"],
      default: "view",
      markdownDescription: l(
        "search.mode",
        "Controls where new `Search: Find in Files` and `Find in Folder` operations occur: either in the search view, or in a search editor."
      ),
      enumDescriptions: [
        l(
          "search.mode.view",
          "Search in the search view, either in the panel or side bars."
        ),
        l(
          "search.mode.reuseEditor",
          "Search in an existing search editor if present, otherwise in a new search editor."
        ),
        l("search.mode.newEditor", "Search in a new search editor.")
      ]
    },
    "search.useRipgrep": {
      type: "boolean",
      description: l(
        "useRipgrep",
        'This setting is deprecated and now falls back on "search.usePCRE2".'
      ),
      deprecationMessage: l(
        "useRipgrepDeprecated",
        'Deprecated. Consider "search.usePCRE2" for advanced regex feature support.'
      ),
      default: !0
    },
    "search.maintainFileSearchCache": {
      type: "boolean",
      deprecationMessage: l(
        "maintainFileSearchCacheDeprecated",
        "The search cache is kept in the extension host which never shuts down, so this setting is no longer needed."
      ),
      description: l(
        "search.maintainFileSearchCache",
        "When enabled, the searchService process will be kept alive instead of being shut down after an hour of inactivity. This will keep the file search cache in memory."
      ),
      default: !1
    },
    "search.useIgnoreFiles": {
      type: "boolean",
      markdownDescription: l(
        "useIgnoreFiles",
        "Controls whether to use `.gitignore` and `.ignore` files when searching for files."
      ),
      default: !0,
      scope: 4
    },
    "search.useGlobalIgnoreFiles": {
      type: "boolean",
      markdownDescription: l(
        "useGlobalIgnoreFiles",
        "Controls whether to use your global gitignore file (e.g., from `$HOME/.config/git/ignore`) when searching for files. Requires `#search.useIgnoreFiles#` to be enabled."
      ),
      default: !1,
      scope: 4
    },
    "search.useParentIgnoreFiles": {
      type: "boolean",
      markdownDescription: l(
        "useParentIgnoreFiles",
        "Controls whether to use `.gitignore` and `.ignore` files in parent directories when searching for files. Requires `#search.useIgnoreFiles#` to be enabled."
      ),
      default: !1,
      scope: 4
    },
    "search.quickOpen.includeSymbols": {
      type: "boolean",
      description: l(
        "search.quickOpen.includeSymbols",
        "Whether to include results from a global symbol search in the file results for Quick Open."
      ),
      default: !1
    },
    "search.quickOpen.includeHistory": {
      type: "boolean",
      description: l(
        "search.quickOpen.includeHistory",
        "Whether to include results from recently opened files in the file results for Quick Open."
      ),
      default: !0
    },
    "search.quickOpen.history.filterSortOrder": {
      type: "string",
      enum: ["default", "recency"],
      default: "default",
      enumDescriptions: [
        l(
          "filterSortOrder.default",
          "History entries are sorted by relevance based on the filter value used. More relevant entries appear first."
        ),
        l(
          "filterSortOrder.recency",
          "History entries are sorted by recency. More recently opened entries appear first."
        )
      ],
      description: l(
        "filterSortOrder",
        "Controls sorting order of editor history in quick open when filtering."
      )
    },
    "search.followSymlinks": {
      type: "boolean",
      description: l(
        "search.followSymlinks",
        "Controls whether to follow symlinks while searching."
      ),
      default: !0
    },
    "search.smartCase": {
      type: "boolean",
      description: l(
        "search.smartCase",
        "Search case-insensitively if the pattern is all lowercase, otherwise, search case-sensitively."
      ),
      default: !1
    },
    "search.globalFindClipboard": {
      type: "boolean",
      default: !1,
      description: l(
        "search.globalFindClipboard",
        "Controls whether the search view should read or modify the shared find clipboard on macOS."
      ),
      included: ui
    },
    "search.location": {
      type: "string",
      enum: ["sidebar", "panel"],
      default: "sidebar",
      description: l(
        "search.location",
        "Controls whether the search will be shown as a view in the sidebar or as a panel in the panel area for more horizontal space."
      ),
      deprecationMessage: l(
        "search.location.deprecationMessage",
        "This setting is deprecated. You can drag the search icon to a new location instead."
      )
    },
    "search.maxResults": {
      type: ["number", "null"],
      default: 2e4,
      markdownDescription: l(
        "search.maxResults",
        "Controls the maximum number of search results, this can be set to `null` (empty) to return unlimited results."
      )
    },
    "search.collapseResults": {
      type: "string",
      enum: ["auto", "alwaysCollapse", "alwaysExpand"],
      enumDescriptions: [
        l(
          "search.collapseResults.auto",
          "Files with less than 10 results are expanded. Others are collapsed."
        ),
        "",
        ""
      ],
      default: "alwaysExpand",
      description: l(
        "search.collapseAllResults",
        "Controls whether the search results will be collapsed or expanded."
      )
    },
    "search.useReplacePreview": {
      type: "boolean",
      default: !0,
      description: l(
        "search.useReplacePreview",
        "Controls whether to open Replace Preview when selecting or replacing a match."
      )
    },
    "search.showLineNumbers": {
      type: "boolean",
      default: !1,
      description: l(
        "search.showLineNumbers",
        "Controls whether to show line numbers for search results."
      )
    },
    "search.usePCRE2": {
      type: "boolean",
      default: !1,
      description: l(
        "search.usePCRE2",
        "Whether to use the PCRE2 regex engine in text search. This enables using some advanced regex features like lookahead and backreferences. However, not all PCRE2 features are supported - only features that are also supported by JavaScript."
      ),
      deprecationMessage: l(
        "usePCRE2Deprecated",
        "Deprecated. PCRE2 will be used automatically when using regex features that are only supported by PCRE2."
      )
    },
    "search.actionsPosition": {
      type: "string",
      enum: ["auto", "right"],
      enumDescriptions: [
        l(
          "search.actionsPositionAuto",
          "Position the actionbar to the right when the search view is narrow, and immediately after the content when the search view is wide."
        ),
        l(
          "search.actionsPositionRight",
          "Always position the actionbar to the right."
        )
      ],
      default: "right",
      description: l(
        "search.actionsPosition",
        "Controls the positioning of the actionbar on rows in the search view."
      )
    },
    "search.searchOnType": {
      type: "boolean",
      default: !0,
      description: l("search.searchOnType", "Search all files as you type.")
    },
    "search.seedWithNearestWord": {
      type: "boolean",
      default: !1,
      description: l(
        "search.seedWithNearestWord",
        "Enable seeding search from the word nearest the cursor when the active editor has no selection."
      )
    },
    "search.seedOnFocus": {
      type: "boolean",
      default: !1,
      markdownDescription: l(
        "search.seedOnFocus",
        "Update the search query to the editor's selected text when focusing the search view. This happens either on click or when triggering the `workbench.views.search.focus` command."
      )
    },
    "search.searchOnTypeDebouncePeriod": {
      type: "number",
      default: 300,
      markdownDescription: l(
        "search.searchOnTypeDebouncePeriod",
        "When {0} is enabled, controls the timeout in milliseconds between a character being typed and the search starting. Has no effect when {0} is disabled.",
        "`#search.searchOnType#`"
      )
    },
    "search.searchEditor.doubleClickBehaviour": {
      type: "string",
      enum: ["selectWord", "goToLocation", "openLocationToSide"],
      default: "goToLocation",
      enumDescriptions: [
        l(
          "search.searchEditor.doubleClickBehaviour.selectWord",
          "Double-clicking selects the word under the cursor."
        ),
        l(
          "search.searchEditor.doubleClickBehaviour.goToLocation",
          "Double-clicking opens the result in the active editor group."
        ),
        l(
          "search.searchEditor.doubleClickBehaviour.openLocationToSide",
          "Double-clicking opens the result in the editor group to the side, creating one if it does not yet exist."
        )
      ],
      markdownDescription: l(
        "search.searchEditor.doubleClickBehaviour",
        "Configure effect of double-clicking a result in a search editor."
      )
    },
    "search.searchEditor.reusePriorSearchConfiguration": {
      type: "boolean",
      default: !1,
      markdownDescription: l(
        { key: "search.searchEditor.reusePriorSearchConfiguration", comment: ['"Search Editor" is a type of editor that can display search results. "includes, excludes, and flags" refers to the "files to include" and "files to exclude" input boxes, and the flags that control whether a query is case-sensitive or a regex.'] },
        "When enabled, new Search Editors will reuse the includes, excludes, and flags of the previously opened Search Editor."
      )
    },
    "search.searchEditor.defaultNumberOfContextLines": {
      type: ["number", "null"],
      default: 1,
      markdownDescription: l(
        "search.searchEditor.defaultNumberOfContextLines",
        "The default number of surrounding context lines to use when creating new Search Editors. If using `#search.searchEditor.reusePriorSearchConfiguration#`, this can be set to `null` (empty) to use the prior Search Editor's configuration."
      )
    },
    "search.sortOrder": {
      type: "string",
      enum: ["default", "fileNames", "type", "modified", "countDescending", "countAscending"],
      default: "default",
      enumDescriptions: [
        l(
          "searchSortOrder.default",
          "Results are sorted by folder and file names, in alphabetical order."
        ),
        l(
          "searchSortOrder.filesOnly",
          "Results are sorted by file names ignoring folder order, in alphabetical order."
        ),
        l(
          "searchSortOrder.type",
          "Results are sorted by file extensions, in alphabetical order."
        ),
        l(
          "searchSortOrder.modified",
          "Results are sorted by file last modified date, in descending order."
        ),
        l(
          "searchSortOrder.countDescending",
          "Results are sorted by count per file, in descending order."
        ),
        l(
          "searchSortOrder.countAscending",
          "Results are sorted by count per file, in ascending order."
        )
      ],
      description: l("search.sortOrder", "Controls sorting order of search results.")
    },
    "search.decorations.colors": {
      type: "boolean",
      description: l(
        "search.decorations.colors",
        "Controls whether search file decorations should use colors."
      ),
      default: !0
    },
    "search.decorations.badges": {
      type: "boolean",
      description: l(
        "search.decorations.badges",
        "Controls whether search file decorations should use badges."
      ),
      default: !0
    },
    "search.defaultViewMode": {
      type: "string",
      enum: ["tree", "list"],
      default: "list",
      enumDescriptions: [
        l("scm.defaultViewMode.tree", "Shows search results as a tree."),
        l("scm.defaultViewMode.list", "Shows search results as a list.")
      ],
      description: l("search.defaultViewMode", "Controls the default search result view mode.")
    }
  }
});
Tr.registerCommand("_executeWorkspaceSymbolProvider", async function(o, ...e) {
  const [t] = e;
  return wa(typeof t == "string"), (await or(t)).map((s) => s.symbol);
});
const Zl = /^(\s+)(\d+)(: |  )(\s*)(.*)$/, eh = /^(\S.*):$/;
let Ue = class wn extends Ea {
  get searchResultEditor() {
    return this.editorControl;
  }
  constructor(e, t, i, s, r, n, a, c, h, u, d, p, f, S, m, E, v, y) {
    super(wn.ID, e, a, i, f, t, m, S, v), this.modelService = s, this.contextService = r, this.labelService = n, this.contextViewService = c, this.commandService = h, this.openerService = u, this.notificationService = d, this.configurationService = E, this.logService = y, this.runSearchDelayer = new Le(0), this.pauseSearching = !1, this.showingIncludesExcludes = !1, this.ongoingOperations = 0, this.updatingModelForSearch = !1, this.container = R(".search-editor"), this.searchOperation = this._register(new Ca(p)), this._register(this.messageDisposables = new ue()), this.searchHistoryDelayer = new Le(2e3), this.searchModel = this._register(this.instantiationService.createInstance(ka));
  }
  createEditor(e) {
    w(e, this.container), this.queryEditorContainer = w(this.container, R(".query-container"));
    const t = w(this.container, R(".search-results"));
    super.createEditor(t), this.registerEditorListeners();
    const i = hs(this.scopedContextKeyService);
    q.bindTo(i).set(!0), this.createQueryEditor(this.queryEditorContainer, this.instantiationService.createChild(new At([te, i])), et.bindTo(i));
  }
  createQueryEditor(e, t, i) {
    const s = Fa({ inputBorder: th });
    this.queryEditorWidget = this._register(t.createInstance(Qe, e, { _hideReplaceToggle: !0, showContextToggle: !0, inputBoxStyles: s, toggleStyles: _t })), this._register(this.queryEditorWidget.onReplaceToggled(() => this.reLayout())), this._register(this.queryEditorWidget.onDidHeightChange(() => this.reLayout())), this._register(this.queryEditorWidget.onSearchSubmit(({ delay: h }) => this.triggerSearch({ delay: h }))), this.queryEditorWidget.searchInput ? this._register(this.queryEditorWidget.searchInput.onDidOptionChange(() => this.triggerSearch({ resetCursor: !1 }))) : this.logService.warn("SearchEditor: SearchWidget.searchInput is undefined, cannot register onDidOptionChange listener"), this._register(this.queryEditorWidget.onDidToggleContext(() => this.triggerSearch({ resetCursor: !1 }))), this.includesExcludesContainer = w(e, R(".includes-excludes")), this.toggleQueryDetailsButton = w(this.includesExcludesContainer, R(".expand" + Q.asCSSSelector(Or), { tabindex: 0, role: "button", title: l("moreSearch", "Toggle Search Details") })), this._register(Se(this.toggleQueryDetailsButton, me.CLICK, (h) => {
      Ee.stop(h), this.toggleIncludesExcludes();
    })), this._register(Se(this.toggleQueryDetailsButton, me.KEY_UP, (h) => {
      const u = new vt(h);
      (u.equals(3) || u.equals(10)) && (Ee.stop(h), this.toggleIncludesExcludes());
    })), this._register(Se(this.toggleQueryDetailsButton, me.KEY_DOWN, (h) => {
      var d;
      new vt(h).equals(1026) && (this.queryEditorWidget.isReplaceActive() ? this.queryEditorWidget.focusReplaceAllAction() : this.queryEditorWidget.isReplaceShown() ? (d = this.queryEditorWidget.replaceInput) == null || d.focusOnPreserve() : this.queryEditorWidget.focusRegexAction(), Ee.stop(h));
    }));
    const r = w(this.includesExcludesContainer, R(".file-types.includes")), n = l("searchScope.includes", "files to include");
    w(r, R("h4", void 0, n)), this.inputPatternIncludes = this._register(t.createInstance(Jt, r, this.contextViewService, {
      ariaLabel: l("label.includes", "Search Include Patterns"),
      inputBoxStyles: s
    })), this.inputPatternIncludes.onSubmit((h) => this.triggerSearch({ resetCursor: !1, delay: h ? this.searchConfig.searchOnTypeDebouncePeriod : 0 })), this._register(this.inputPatternIncludes.onChangeSearchInEditorsBox(() => this.triggerSearch()));
    const a = w(this.includesExcludesContainer, R(".file-types.excludes")), c = l("searchScope.excludes", "files to exclude");
    w(a, R("h4", void 0, c)), this.inputPatternExcludes = this._register(t.createInstance(Zt, a, this.contextViewService, {
      ariaLabel: l("label.excludes", "Search Exclude Patterns"),
      inputBoxStyles: s
    })), this.inputPatternExcludes.onSubmit((h) => this.triggerSearch({ resetCursor: !1, delay: h ? this.searchConfig.searchOnTypeDebouncePeriod : 0 })), this._register(this.inputPatternExcludes.onChangeIgnoreBox(() => this.triggerSearch())), this.messageBox = w(e, R(".messages.text-search-provider-messages")), [this.queryEditorWidget.searchInputFocusTracker, this.queryEditorWidget.replaceInputFocusTracker, this.inputPatternExcludes.inputFocusTracker, this.inputPatternIncludes.inputFocusTracker].forEach((h) => {
      h && (this._register(h.onDidFocus(() => setTimeout(() => i.set(!0), 0))), this._register(h.onDidBlur(() => i.set(!1))));
    });
  }
  toggleRunAgainMessage(e) {
    if (Er(this.messageBox), this.messageDisposables.clear(), e) {
      const t = w(this.messageBox, R("a.pointer.prominent.message", {}, l("runSearch", "Run Search")));
      this.messageDisposables.add(Se(t, me.CLICK, async () => {
        await this.triggerSearch(), this.searchResultEditor.focus();
      }));
    }
  }
  _getContributions() {
    const e = [Ra.ID];
    return Pa.getEditorContributions().filter((t) => e.indexOf(t.id) === -1);
  }
  getCodeEditorWidgetOptions() {
    return { contributions: this._getContributions() };
  }
  registerEditorListeners() {
    this.searchResultEditor.onMouseUp((e) => {
      var t;
      if (e.event.detail === 2) {
        const i = this.searchConfig.searchEditor.doubleClickBehaviour, s = e.target.position;
        if (s && i !== "selectWord") {
          const r = ((t = this.searchResultEditor.getModel()) == null ? void 0 : t.getLineContent(s.lineNumber)) ?? "";
          r.match(Zl) ? (this.searchResultEditor.setSelection(oe.fromPositions(s)), this.commandService.executeCommand(i === "goToLocation" ? "editor.action.goToDeclaration" : "editor.action.openDeclarationToTheSide")) : r.match(eh) && (this.searchResultEditor.setSelection(oe.fromPositions(s)), this.commandService.executeCommand("editor.action.peekDefinition"));
        }
      }
    }), this._register(this.searchResultEditor.onDidChangeModelContent(() => {
      var e;
      this.updatingModelForSearch || (e = this.getInput()) == null || e.setDirty(!0);
    }));
  }
  getControl() {
    return this.searchResultEditor;
  }
  focus() {
    const e = this.loadEditorViewState(this.getInput());
    e && e.focused === "editor" ? this.searchResultEditor.focus() : this.queryEditorWidget.focus();
  }
  focusSearchInput() {
    var e;
    (e = this.queryEditorWidget.searchInput) == null || e.focus();
  }
  focusFilesToIncludeInput() {
    this.showingIncludesExcludes || this.toggleIncludesExcludes(!0), this.inputPatternIncludes.focus();
  }
  focusFilesToExcludeInput() {
    this.showingIncludesExcludes || this.toggleIncludesExcludes(!0), this.inputPatternExcludes.focus();
  }
  focusNextInput() {
    this.queryEditorWidget.searchInputHasFocus() ? this.showingIncludesExcludes ? this.inputPatternIncludes.focus() : this.searchResultEditor.focus() : this.inputPatternIncludes.inputHasFocus() ? this.inputPatternExcludes.focus() : this.inputPatternExcludes.inputHasFocus() ? this.searchResultEditor.focus() : this.searchResultEditor.hasWidgetFocus();
  }
  focusPrevInput() {
    var e;
    this.queryEditorWidget.searchInputHasFocus() ? this.searchResultEditor.focus() : this.inputPatternIncludes.inputHasFocus() ? (e = this.queryEditorWidget.searchInput) == null || e.focus() : this.inputPatternExcludes.inputHasFocus() ? this.inputPatternIncludes.focus() : this.searchResultEditor.hasWidgetFocus();
  }
  setQuery(e) {
    var t;
    (t = this.queryEditorWidget.searchInput) == null || t.setValue(e);
  }
  selectQuery() {
    var e;
    (e = this.queryEditorWidget.searchInput) == null || e.select();
  }
  toggleWholeWords() {
    var e;
    (e = this.queryEditorWidget.searchInput) == null || e.setWholeWords(!this.queryEditorWidget.searchInput.getWholeWords()), this.triggerSearch({ resetCursor: !1 });
  }
  toggleRegex() {
    var e;
    (e = this.queryEditorWidget.searchInput) == null || e.setRegex(!this.queryEditorWidget.searchInput.getRegex()), this.triggerSearch({ resetCursor: !1 });
  }
  toggleCaseSensitive() {
    var e;
    (e = this.queryEditorWidget.searchInput) == null || e.setCaseSensitive(!this.queryEditorWidget.searchInput.getCaseSensitive()), this.triggerSearch({ resetCursor: !1 });
  }
  toggleContextLines() {
    this.queryEditorWidget.toggleContextLines();
  }
  modifyContextLines(e) {
    this.queryEditorWidget.modifyContextLines(e);
  }
  toggleQueryDetails() {
    this.toggleIncludesExcludes();
  }
  deleteResultBlock() {
    const e = /* @__PURE__ */ new Set(), t = this.searchResultEditor.getSelections(), i = this.searchResultEditor.getModel();
    if (!(t && i))
      return;
    const s = i.getLineCount(), r = 1, n = (u) => {
      for (let d = u; d >= r; d--) {
        const p = i.getLineContent(d);
        if (e.add(d), p[0] !== void 0 && p[0] !== " ")
          break;
      }
    }, a = (u) => {
      e.add(u);
      for (let d = u + 1; d <= s; d++) {
        const p = i.getLineContent(d);
        if (p[0] !== void 0 && p[0] !== " ")
          return d;
        e.add(d);
      }
    }, c = [];
    for (const u of t) {
      const d = u.startLineNumber;
      c.push(a(d)), n(d);
      for (let p = u.startLineNumber; p <= u.endLineNumber; p++)
        e.add(p);
    }
    c.length === 0 && c.push(1);
    const h = (u) => u !== void 0;
    i.pushEditOperations(this.searchResultEditor.getSelections(), [...e].map((u) => ({ range: new oe(u, 1, u + 1, 1), text: "" })), () => c.filter(h).map((u) => new Mi(u, 1, u, 1)));
  }
  cleanState() {
    var e;
    (e = this.getInput()) == null || e.setDirty(!1);
  }
  get searchConfig() {
    return this.configurationService.getValue("search");
  }
  iterateThroughMatches(e) {
    var p, f;
    const t = this.searchResultEditor.getModel();
    if (!t)
      return;
    const i = t.getLineCount() ?? 1, s = t.getLineLength(i), r = e ? new pt(i, s) : new pt(1, 1), n = ((p = this.searchResultEditor.getSelection()) == null ? void 0 : p.getStartPosition()) ?? r, a = (f = this.getInput()) == null ? void 0 : f.getMatchRanges();
    if (!a)
      return;
    const c = (e ? sh : ih)(a, n);
    this.searchResultEditor.setSelection(c), this.searchResultEditor.revealLineInCenterIfOutsideViewport(c.startLineNumber), this.searchResultEditor.focus();
    const h = t.getLineContent(c.startLineNumber), u = t.getValueInRange(c);
    let d = "";
    for (let S = c.startLineNumber; S >= 1; S--)
      if (t.getValueInRange(new oe(S, 1, S, 2)) !== " ") {
        d = t.getLineContent(S);
        break;
      }
    _i(l(
      "searchResultItem",
      "Matched {0} at {1} in file {2}",
      u,
      h,
      d.slice(0, d.length - 1)
    ));
  }
  focusNextResult() {
    this.iterateThroughMatches(!1);
  }
  focusPreviousResult() {
    this.iterateThroughMatches(!0);
  }
  focusAllResults() {
    var e;
    this.searchResultEditor.setSelections((((e = this.getInput()) == null ? void 0 : e.getMatchRanges()) ?? []).map((t) => new Mi(
      t.startLineNumber,
      t.startColumn,
      t.endLineNumber,
      t.endColumn
    ))), this.searchResultEditor.focus();
  }
  async triggerSearch(e) {
    const t = { resetCursor: !0, delay: 0, ...e };
    this.pauseSearching || await this.runSearchDelayer.trigger(async () => {
      this.toggleRunAgainMessage(!1), await this.doRunSearch(), t.resetCursor && (this.searchResultEditor.setPosition(new pt(1, 1)), this.searchResultEditor.setScrollPosition({ scrollTop: 0, scrollLeft: 0 })), t.focusResults && this.searchResultEditor.focus();
    }, t.delay);
  }
  readConfigFromWidget() {
    var e, t, i, s;
    return {
      isCaseSensitive: ((e = this.queryEditorWidget.searchInput) == null ? void 0 : e.getCaseSensitive()) ?? !1,
      contextLines: this.queryEditorWidget.getContextLines(),
      filesToExclude: this.inputPatternExcludes.getValue(),
      filesToInclude: this.inputPatternIncludes.getValue(),
      query: ((t = this.queryEditorWidget.searchInput) == null ? void 0 : t.getValue()) ?? "",
      isRegexp: ((i = this.queryEditorWidget.searchInput) == null ? void 0 : i.getRegex()) ?? !1,
      matchWholeWord: ((s = this.queryEditorWidget.searchInput) == null ? void 0 : s.getWholeWords()) ?? !1,
      useExcludeSettingsAndIgnoreFiles: this.inputPatternExcludes.useExcludesAndIgnoreFiles(),
      onlyOpenEditors: this.inputPatternIncludes.onlySearchInOpenEditors(),
      showIncludesExcludes: this.showingIncludesExcludes,
      notebookSearchConfig: {
        includeMarkupInput: this.queryEditorWidget.getNotebookFilters().markupInput,
        includeMarkupPreview: this.queryEditorWidget.getNotebookFilters().markupPreview,
        includeCodeInput: this.queryEditorWidget.getNotebookFilters().codeInput,
        includeOutput: this.queryEditorWidget.getNotebookFilters().codeOutput
      }
    };
  }
  async doRunSearch() {
    this.searchModel.cancelSearch(!0);
    const e = this.getInput();
    if (!e)
      return;
    this.searchHistoryDelayer.trigger(() => {
      var h;
      (h = this.queryEditorWidget.searchInput) == null || h.onSearchSubmit(), this.inputPatternExcludes.onSearchSubmit(), this.inputPatternIncludes.onSearchSubmit();
    });
    const t = this.readConfigFromWidget();
    if (!t.query)
      return;
    const i = {
      pattern: t.query,
      isRegExp: t.isRegexp,
      isCaseSensitive: t.isCaseSensitive,
      isWordMatch: t.matchWholeWord
    }, s = {
      _reason: "searchEditor",
      extraFileResources: this.instantiationService.invokeFunction(ns),
      maxResults: st(this.searchConfig.maxResults),
      disregardIgnoreFiles: !t.useExcludeSettingsAndIgnoreFiles || void 0,
      disregardExcludeSettings: !t.useExcludeSettingsAndIgnoreFiles || void 0,
      excludePattern: t.filesToExclude,
      includePattern: t.filesToInclude,
      onlyOpenEditors: t.onlyOpenEditors,
      previewOptions: {
        matchLines: 1,
        charsPerLine: 1e3
      },
      afterContext: t.contextLines,
      beforeContext: t.contextLines,
      isSmartCase: this.searchConfig.smartCase,
      expandPatterns: !0,
      notebookSearchConfig: {
        includeMarkupInput: t.notebookSearchConfig.includeMarkupInput,
        includeMarkupPreview: t.notebookSearchConfig.includeMarkupPreview,
        includeCodeInput: t.notebookSearchConfig.includeCodeInput,
        includeOutput: t.notebookSearchConfig.includeOutput
      }
    }, r = this.contextService.getWorkspace().folders;
    let n;
    try {
      n = this.instantiationService.createInstance(rs).text(i, r.map((u) => u.uri), s);
    } catch {
      return;
    }
    this.searchOperation.start(500), this.ongoingOperations++;
    const { configurationModel: a } = await e.resolveModels();
    a.updateConfig(t), e.ongoingSearchOperation = this.searchModel.search(n).finally(() => {
      this.ongoingOperations--, this.ongoingOperations === 0 && this.searchOperation.stop();
    });
    const c = await e.ongoingSearchOperation;
    await this.onSearchComplete(c, t, e);
  }
  async onSearchComplete(e, t, i) {
    const s = this.getInput();
    if (!s || s !== i || JSON.stringify(t) !== JSON.stringify(this.readConfigFromWidget()))
      return;
    s.ongoingSearchOperation = void 0;
    const r = this.searchConfig.sortOrder;
    r === "modified" && await this.retrieveFileStats(this.searchModel.searchResult);
    const n = Ta.get(this.searchResultEditor);
    n == null || n.closeWidget(!1);
    const a = (u) => this.labelService.getUriLabel(u, { relative: !0 }), c = on(this.searchModel.searchResult, t.filesToInclude, t.filesToExclude, t.contextLines, a, r, e == null ? void 0 : e.limitHit), { resultsModel: h } = await s.resolveModels();
    if (this.updatingModelForSearch = !0, this.modelService.updateModel(h, c.text), this.updatingModelForSearch = !1, e && e.messages)
      for (const u of e.messages)
        this.addMessage(u);
    this.reLayout(), s.setDirty(!s.hasCapability(4)), s.setMatchRanges(c.matchRanges);
  }
  addMessage(e) {
    let t;
    this.messageBox.firstChild ? t = this.messageBox.firstChild : t = w(this.messageBox, R(".message")), w(t, Br(e, this.instantiationService, this.notificationService, this.openerService, this.commandService, this.messageDisposables, () => this.triggerSearch()));
  }
  async retrieveFileStats(e) {
    const t = e.matches().filter((i) => !i.fileStat).map((i) => i.resolveFileStat(this.fileService));
    await Promise.all(t);
  }
  layout(e) {
    this.dimension = e, this.reLayout();
  }
  getSelected() {
    var t;
    const e = this.searchResultEditor.getSelection();
    return e ? ((t = this.searchResultEditor.getModel()) == null ? void 0 : t.getValueInRange(e)) ?? "" : "";
  }
  reLayout() {
    this.dimension && (this.queryEditorWidget.setWidth(this.dimension.width - 28), this.searchResultEditor.layout({ height: this.dimension.height - Ai(this.queryEditorContainer), width: this.dimension.width }), this.inputPatternExcludes.setWidth(this.dimension.width - 28), this.inputPatternIncludes.setWidth(this.dimension.width - 28));
  }
  getInput() {
    return this._input;
  }
  setSearchConfig(e) {
    var t, i, s;
    this.priorConfig = e, e.query !== void 0 && this.queryEditorWidget.setValue(e.query), e.isCaseSensitive !== void 0 && ((t = this.queryEditorWidget.searchInput) == null || t.setCaseSensitive(e.isCaseSensitive)), e.isRegexp !== void 0 && ((i = this.queryEditorWidget.searchInput) == null || i.setRegex(e.isRegexp)), e.matchWholeWord !== void 0 && ((s = this.queryEditorWidget.searchInput) == null || s.setWholeWords(e.matchWholeWord)), e.contextLines !== void 0 && this.queryEditorWidget.setContextLines(e.contextLines), e.filesToExclude !== void 0 && this.inputPatternExcludes.setValue(e.filesToExclude), e.filesToInclude !== void 0 && this.inputPatternIncludes.setValue(e.filesToInclude), e.onlyOpenEditors !== void 0 && this.inputPatternIncludes.setOnlySearchInOpenEditors(e.onlyOpenEditors), e.useExcludeSettingsAndIgnoreFiles !== void 0 && this.inputPatternExcludes.setUseExcludesAndIgnoreFiles(e.useExcludeSettingsAndIgnoreFiles), e.showIncludesExcludes !== void 0 && this.toggleIncludesExcludes(e.showIncludesExcludes);
  }
  async setInput(e, t, i, s) {
    if (await super.setInput(e, t, i, s), s.isCancellationRequested)
      return;
    const { configurationModel: r, resultsModel: n } = await e.resolveModels();
    if (!s.isCancellationRequested && (this.searchResultEditor.setModel(n), this.pauseSearching = !0, this.toggleRunAgainMessage(!e.ongoingSearchOperation && n.getLineCount() === 1 && n.getValue() === "" && r.config.query !== ""), this.setSearchConfig(r.config), this._register(r.onConfigDidUpdate((a) => {
      a !== this.priorConfig && (this.pauseSearching = !0, this.setSearchConfig(a), this.pauseSearching = !1);
    })), this.restoreViewState(i), t != null && t.preserveFocus || this.focus(), this.pauseSearching = !1, e.ongoingSearchOperation)) {
      const a = this.readConfigFromWidget();
      e.ongoingSearchOperation.then((c) => {
        this.onSearchComplete(c, a, e);
      });
    }
  }
  toggleIncludesExcludes(e) {
    const t = "expanded";
    e ?? !this.includesExcludesContainer.classList.contains(t) ? (this.toggleQueryDetailsButton.setAttribute("aria-expanded", "true"), this.includesExcludesContainer.classList.add(t)) : (this.toggleQueryDetailsButton.setAttribute("aria-expanded", "false"), this.includesExcludesContainer.classList.remove(t)), this.showingIncludesExcludes = this.includesExcludesContainer.classList.contains(t), this.reLayout();
  }
  toEditorViewStateResource(e) {
    if (e.typeId === qi)
      return e.modelUri;
  }
  computeEditorViewState(e) {
    var s;
    const i = this.getControl().saveViewState();
    if (i && e.toString() === ((s = this.getInput()) == null ? void 0 : s.modelUri.toString()))
      return { ...i, focused: this.searchResultEditor.hasWidgetFocus() ? "editor" : "input" };
  }
  tracksEditorViewState(e) {
    return e.typeId === qi;
  }
  restoreViewState(e) {
    const t = this.loadEditorViewState(this.getInput(), e);
    t && this.searchResultEditor.restoreViewState(t);
  }
  getAriaLabel() {
    var e;
    return ((e = this.getInput()) == null ? void 0 : e.getName()) ?? l("searchEditor", "Search");
  }
};
Ue.ID = Qi;
Ue.SEARCH_EDITOR_VIEW_STATE_PREFERENCE_KEY = "searchEditorViewState";
Ue = B([
  g(0, it),
  g(1, li),
  g(2, rt),
  g(3, ke),
  g(4, pe),
  g(5, ge),
  g(6, V),
  g(7, ls),
  g(8, Mt),
  g(9, es),
  g(10, ci),
  g(11, ba),
  g(12, xa),
  g(13, Zi),
  g(14, M),
  g(15, H),
  g(16, Rt),
  g(17, ji)
], Ue);
const th = Ia("searchEditor.textInputBorder", { dark: Vt, light: Vt, hcDark: Vt, hcLight: Vt }, l("textInputBoxBorder", "Search editor text input box border."));
function ih(o, e) {
  for (const t of o)
    if (pt.isBefore(e, t.getStartPosition()))
      return t;
  return o[0];
}
function sh(o, e) {
  for (let t = o.length - 1; t >= 0; t--) {
    const i = o[t];
    if (pt.isBefore(i.getStartPosition(), e))
      return i;
  }
  return o[o.length - 1];
}
const rh = "search.action.openInEditor", nh = "search.action.openNewEditorToSide", oh = "search.action.focusQueryEditorWidget", ah = "search.action.focusFilesToInclude", ch = "search.action.focusFilesToExclude", lh = "toggleSearchEditorCaseSensitive", hh = "toggleSearchEditorWholeWord", uh = "toggleSearchEditorRegex", dh = "increaseSearchEditorContextLines", gh = "decreaseSearchEditorContextLines", ph = "rerunSearchEditorSearch", fh = "cleanSearchEditorState", Sh = "selectAllSearchEditorMatches";
Pe.as(_a.EditorPane).registerEditorPane(Aa.create(Ue, Ue.ID, l("searchEditor", "Search Editor")), [
  new Oe(D)
]);
let Gi = class {
  constructor(e, t) {
    e.registerEditor("*" + ft, {
      id: D.ID,
      label: l("promptOpenWith.searchEditor.displayName", "Search Editor"),
      detail: La.providerDisplayName,
      priority: Oa.default
    }, {
      singlePerResource: !0,
      canSupportResource: (i) => br(i) === ft
    }, {
      createEditorInput: ({ resource: i }) => ({ editor: t.invokeFunction(qe, { from: "existingFile", fileUri: i }) })
    });
  }
};
Gi = B([
  g(0, Ma),
  g(1, V)
], Gi);
const bn = Pe.as(dr.Workbench);
bn.registerWorkbenchContribution(Gi, 1);
Tr.registerCommand(fh, (o) => {
  const e = o.get(M).activeEditorPane;
  e instanceof Ue && e.cleanState();
});
const X = { value: l("search", "Search Editor"), original: "Search Editor" }, xs = (o = {}) => {
  const e = {}, t = {
    includes: "filesToInclude",
    excludes: "filesToExclude",
    wholeWord: "matchWholeWord",
    caseSensitive: "isCaseSensitive",
    regexp: "isRegexp",
    useIgnores: "useExcludeSettingsAndIgnoreFiles"
  };
  return Object.entries(o).forEach(([i, s]) => {
    e[t[i] ?? i] = s;
  }), e;
}, Is = {
  description: "Open a new search editor. Arguments passed can include variables like ${relativeFileDirname}.",
  args: [{
    name: "Open new Search Editor args",
    schema: {
      properties: {
        query: { type: "string" },
        filesToInclude: { type: "string" },
        filesToExclude: { type: "string" },
        contextLines: { type: "number" },
        matchWholeWord: { type: "boolean" },
        isCaseSensitive: { type: "boolean" },
        isRegexp: { type: "boolean" },
        useExcludeSettingsAndIgnoreFiles: { type: "boolean" },
        showIncludesExcludes: { type: "boolean" },
        triggerSearch: { type: "boolean" },
        focusResults: { type: "boolean" },
        onlyOpenEditors: { type: "boolean" }
      }
    }
  }]
};
x(class extends I {
  constructor() {
    super({
      id: "search.searchEditor.action.deleteFileResults",
      title: { value: l("searchEditor.deleteResultBlock", "Delete File Results"), original: "Delete File Results" },
      keybinding: {
        weight: 100,
        primary: 3073
      },
      precondition: q,
      category: X,
      f1: !0
    });
  }
  async run(o) {
    o.get(te).getContext(document.activeElement).getValue(q.serialize()) && o.get(M).activeEditorPane.deleteResultBlock();
  }
});
x(class extends I {
  constructor() {
    super({
      id: Zc,
      title: { value: l("search.openNewSearchEditor", "New Search Editor"), original: "New Search Editor" },
      category: X,
      f1: !0,
      description: Is
    });
  }
  async run(o, e) {
    await o.get(V).invokeFunction(Ft, xs({ location: "new", ...e }));
  }
});
x(class extends I {
  constructor() {
    super({
      id: kt,
      title: { value: l("search.openSearchEditor", "Open Search Editor"), original: "Open Search Editor" },
      category: X,
      f1: !0,
      description: Is
    });
  }
  async run(o, e) {
    await o.get(V).invokeFunction(Ft, xs({ location: "reuse", ...e }));
  }
});
x(class extends I {
  constructor() {
    super({
      id: nh,
      title: { value: l("search.openNewEditorToSide", "Open New Search Editor to the Side"), original: "Open new Search Editor to the Side" },
      category: X,
      f1: !0,
      description: Is
    });
  }
  async run(o, e) {
    await o.get(V).invokeFunction(Ft, xs(e), !0);
  }
});
x(class extends I {
  constructor() {
    super({
      id: rh,
      title: { value: l("search.openResultsInEditor", "Open Results in Editor"), original: "Open Results in Editor" },
      category: X,
      f1: !0,
      keybinding: {
        primary: 515,
        when: b.and(ne, we),
        weight: 200,
        mac: {
          primary: 2051
        }
      }
    });
  }
  async run(o) {
    const e = o.get(P), t = o.get(V), i = W(e);
    i && await t.invokeFunction(hn, i.searchResult, i.searchIncludePattern.getValue(), i.searchExcludePattern.getValue(), i.searchIncludePattern.onlySearchInOpenEditors());
  }
});
x(class extends I {
  constructor() {
    super({
      id: ph,
      title: { value: l("search.rerunSearchInEditor", "Search Again"), original: "Search Again" },
      category: X,
      keybinding: {
        primary: 3120,
        when: q,
        weight: 100
      },
      icon: Dr,
      menu: [
        {
          id: _.EditorTitle,
          group: "navigation",
          when: Ns.isEqualTo(Qi)
        },
        {
          id: _.CommandPalette,
          when: Ns.isEqualTo(Qi)
        }
      ]
    });
  }
  async run(o) {
    const e = o.get(M);
    e.activeEditor instanceof D && e.activeEditorPane.triggerSearch({ resetCursor: !1 });
  }
});
x(class extends I {
  constructor() {
    super({
      id: oh,
      title: { value: l("search.action.focusQueryEditorWidget", "Focus Search Editor Input"), original: "Focus Search Editor Input" },
      category: X,
      f1: !0,
      precondition: q,
      keybinding: {
        primary: 9,
        weight: 100
      }
    });
  }
  async run(o) {
    const e = o.get(M);
    e.activeEditor instanceof D && e.activeEditorPane.focusSearchInput();
  }
});
x(class extends I {
  constructor() {
    super({
      id: ah,
      title: { value: l(
        "search.action.focusFilesToInclude",
        "Focus Search Editor Files to Include"
      ), original: "Focus Search Editor Files to Include" },
      category: X,
      f1: !0,
      precondition: q
    });
  }
  async run(o) {
    const e = o.get(M);
    e.activeEditor instanceof D && e.activeEditorPane.focusFilesToIncludeInput();
  }
});
x(class extends I {
  constructor() {
    super({
      id: ch,
      title: { value: l(
        "search.action.focusFilesToExclude",
        "Focus Search Editor Files to Exclude"
      ), original: "Focus Search Editor Files to Exclude" },
      category: X,
      f1: !0,
      precondition: q
    });
  }
  async run(o) {
    const e = o.get(M);
    e.activeEditor instanceof D && e.activeEditorPane.focusFilesToExcludeInput();
  }
});
x(class extends I {
  constructor() {
    super({
      id: lh,
      title: { value: l("searchEditor.action.toggleSearchEditorCaseSensitive", "Toggle Match Case"), original: "Toggle Match Case" },
      category: X,
      f1: !0,
      precondition: q,
      keybinding: Object.assign({
        weight: 200,
        when: Lt
      }, kr)
    });
  }
  run(o) {
    bl(o);
  }
});
x(class extends I {
  constructor() {
    super({
      id: hh,
      title: { value: l(
        "searchEditor.action.toggleSearchEditorWholeWord",
        "Toggle Match Whole Word"
      ), original: "Toggle Match Whole Word" },
      category: X,
      f1: !0,
      precondition: q,
      keybinding: Object.assign({
        weight: 200,
        when: Lt
      }, Fr)
    });
  }
  run(o) {
    xl(o);
  }
});
x(class extends I {
  constructor() {
    super({
      id: uh,
      title: { value: l(
        "searchEditor.action.toggleSearchEditorRegex",
        "Toggle Use Regular Expression"
      ), original: 'Toggle Use Regular Expression"' },
      category: X,
      f1: !0,
      precondition: q,
      keybinding: Object.assign({
        weight: 200,
        when: Lt
      }, Rr)
    });
  }
  run(o) {
    Il(o);
  }
});
x(class extends I {
  constructor() {
    super({
      id: en,
      title: { value: l(
        "searchEditor.action.toggleSearchEditorContextLines",
        "Toggle Context Lines"
      ), original: 'Toggle Context Lines"' },
      category: X,
      f1: !0,
      precondition: q,
      keybinding: {
        weight: 200,
        primary: 554,
        mac: { primary: 2602 }
      }
    });
  }
  run(o) {
    El(o);
  }
});
x(class extends I {
  constructor() {
    super({
      id: dh,
      title: { original: "Increase Context Lines", value: l(
        "searchEditor.action.increaseSearchEditorContextLines",
        "Increase Context Lines"
      ) },
      category: X,
      f1: !0,
      precondition: q,
      keybinding: {
        weight: 200,
        primary: 598
      }
    });
  }
  run(o) {
    ln(o, !0);
  }
});
x(class extends I {
  constructor() {
    super({
      id: gh,
      title: { original: "Decrease Context Lines", value: l(
        "searchEditor.action.decreaseSearchEditorContextLines",
        "Decrease Context Lines"
      ) },
      category: X,
      f1: !0,
      precondition: q,
      keybinding: {
        weight: 200,
        primary: 600
      }
    });
  }
  run(o) {
    ln(o, !1);
  }
});
x(class extends I {
  constructor() {
    super({
      id: Sh,
      title: { original: "Select All Matches", value: l("searchEditor.action.selectAllSearchEditorMatches", "Select All Matches") },
      category: X,
      f1: !0,
      precondition: q,
      keybinding: {
        weight: 200,
        primary: 3114
      }
    });
  }
  run(o) {
    Cl(o);
  }
});
x(class extends I {
  constructor() {
    super({
      id: "search.action.openNewEditorFromView",
      title: l("search.openNewEditor", "Open New Search Editor"),
      category: X,
      icon: lc,
      menu: [{
        id: _.ViewTitle,
        group: "navigation",
        order: 2,
        when: b.equals("view", de)
      }]
    });
  }
  run(e, ...t) {
    return kl(e);
  }
});
let zi = class extends ee {
  constructor(e, t) {
    super(), this.instantiationService = e, this._register(t.registerHandler(this));
  }
  handles(e) {
    return e.resource.scheme === ms;
  }
  isOpen(e, t) {
    return this.handles(e) ? t instanceof D && zt(e.resource, t.modelUri) : !1;
  }
  createEditor(e) {
    const t = this.instantiationService.invokeFunction(qe, { from: "model", modelUri: e.resource });
    return t.setDirty(!0), t;
  }
};
zi = B([
  g(0, V),
  g(1, Wa)
], zi);
bn.registerWorkbenchContribution(zi, 2);
function Su() {
  return {
    [lr.toString()]: new Oe(Li),
    [Yi.toString()]: new Oe(Da),
    [ds.toString()]: new Oe(Na),
    [si.toString()]: new Oe(Xt)
  };
}
export {
  Su as default
};
