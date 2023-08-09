import { B as c, ex as W, q3 as G, dq as Je, dG as Ye, S as Lt, qO as Rt, U as se, pg as Ft, rf as Mt, iV as Vt, _ as X, a as S, f as Pt, h as Ut, aU as Ht, aD as j, pd as Kt, ay as ie, E as me, y0 as qt, f6 as Gt, bd as $e, fD as Qe, aO as Ue, y1 as Wt, ct as Se, db as zt, D as Xt, y2 as jt, oC as He, y3 as Jt, pl as Yt, c0 as h, bj as l, Q as Ze, oL as g, X as $t, e as Qt, Y as Zt, cx as R, cl as ei, aQ as Ae, Z as ti, a0 as ue, cd as ii, O as ni, bB as J, aS as si, aR as oi, bC as et, aj as O, ak as V, aH as k, aF as B, rb as Y, p1 as M, y4 as L, pO as ke, pM as $, qt as Oe, y5 as Ne, cF as le, q9 as ai, b3 as Ke, d as F, hT as ri, y6 as tt, nb as ci, y7 as ve, H as f, hb as di, G as qe, bW as ui, qc as li, iv as hi, x as pi, d0 as gi, d2 as P, b9 as Ie, da as it, av as he, b2 as Le, is as nt, it as st, aa as ot, $ as fi, ad as bi, bz as Q, I as mi, w as at, qF as ye, bH as Si, f_ as Re, bO as ki, pS as oe, aL as I, oW as vi, fY as Ii, pP as Ce, L as rt, aN as ct, pz as Ci, fV as Be, bv as v, ry as dt, bS as ut, pK as Z, py as Bi, pw as lt, tR as wi, dz as ee, hB as Fe, rD as ht, qR as Di, pt as yi, cU as Ei, aK as xi, iF as _i, ek as Ti } from "./index-6dabdcd0.js";
const Ee = c("unknownSource", "Unknown Source");
class _n {
  constructor(e, t, i, n) {
    let s;
    e ? (this.raw = e, s = this.raw.path || this.raw.name || "", this.available = !0) : (this.raw = { name: Ee }, this.available = !1, s = `${G}:${Ee}`), this.uri = pt(this.raw, s, t, i, n);
  }
  get name() {
    return this.raw.name || W(this.uri);
  }
  get origin() {
    return this.raw.origin;
  }
  get presentationHint() {
    return this.raw.presentationHint;
  }
  get reference() {
    return this.raw.sourceReference;
  }
  get inMemory() {
    return this.uri.scheme === G;
  }
  openInEditor(e, t, i, n, s) {
    return this.available ? e.openEditor({
      resource: this.uri,
      description: this.origin,
      options: {
        preserveFocus: i,
        selection: t,
        revealIfOpened: !0,
        selectionRevealType: 1,
        pinned: s
      }
    }, n ? Je : Ye) : Promise.resolve(void 0);
  }
  static getEncodedDebugData(e) {
    let t, i, n;
    switch (e.scheme) {
      case Lt.file:
        t = Rt(e.fsPath);
        break;
      case G:
        if (t = e.path, e.query) {
          const s = e.query.split("&");
          for (const a of s) {
            const r = a.split("=");
            if (r.length === 2)
              switch (r[0]) {
                case "session":
                  n = r[1];
                  break;
                case "ref":
                  i = parseInt(r[1]);
                  break;
              }
          }
        }
        break;
      default:
        t = e.toString();
        break;
    }
    return {
      name: W(e),
      path: t,
      sourceReference: i,
      sessionId: n
    };
  }
}
function pt(o, e, t, i, n) {
  const s = (a) => typeof o.sourceReference == "number" && o.sourceReference > 0 ? se.from({
    scheme: G,
    path: a,
    query: `session=${t}&ref=${o.sourceReference}`
  }) : a && Ft(a) ? i.asCanonicalUri(se.parse(a)) : a && Mt(a) ? i.asCanonicalUri(se.file(a)) : i.asCanonicalUri(se.from({
    scheme: G,
    path: a,
    query: `session=${t}`
  }));
  try {
    return s(e);
  } catch {
    return n.error("Invalid path from debug adapter: " + e), s("/invalidDebugSource");
  }
}
class T extends Vt {
  constructor() {
    super(...arguments), this.resource = void 0;
  }
  get typeId() {
    return T.ID;
  }
  static get instance() {
    return (!T._instance || T._instance.isDisposed()) && (T._instance = new T()), T._instance;
  }
  getName() {
    return c("disassemblyInputName", "Disassembly");
  }
  matches(e) {
    return e instanceof T;
  }
}
T.ID = "debug.disassemblyView.input";
class w {
  constructor(e, t, i, n, s = 0, a = 0, r = void 0, d = 0, u = void 0) {
    this.session = e, this.threadId = t, this._reference = i, this.id = n, this.namedVariables = s, this.indexedVariables = a, this.memoryReference = r, this.startOfVariables = d, this.presentationHint = u, this.valueChanged = !1, this._value = "";
  }
  get reference() {
    return this._reference;
  }
  set reference(e) {
    this._reference = e, this.children = void 0;
  }
  async evaluateLazy() {
    if (typeof this.reference > "u")
      return;
    const e = await this.session.variables(this.reference, this.threadId, void 0, void 0, void 0);
    if (!e || !e.body || !e.body.variables || e.body.variables.length !== 1)
      return;
    const t = e.body.variables[0];
    this.reference = t.variablesReference, this._value = t.value, this.namedVariables = t.namedVariables, this.indexedVariables = t.indexedVariables, this.memoryReference = t.memoryReference, this.presentationHint = t.presentationHint, this.adoptLazyResponse(t);
  }
  adoptLazyResponse(e) {
  }
  getChildren() {
    return this.children || (this.children = this.doGetChildren()), this.children;
  }
  async doGetChildren() {
    if (!this.hasChildren)
      return [];
    if (!this.getChildrenInChunks)
      return this.fetchVariables(void 0, void 0, void 0);
    const e = this.namedVariables ? await this.fetchVariables(void 0, void 0, "named") : [];
    let t = w.BASE_CHUNK_SIZE;
    for (; this.indexedVariables && this.indexedVariables > t * w.BASE_CHUNK_SIZE; )
      t *= w.BASE_CHUNK_SIZE;
    if (this.indexedVariables && this.indexedVariables > t) {
      const n = Math.ceil(this.indexedVariables / t);
      for (let s = 0; s < n; s++) {
        const a = (this.startOfVariables || 0) + s * t, r = Math.min(t, this.indexedVariables - s * t);
        e.push(new q(
          this.session,
          this.threadId,
          this,
          this.reference,
          `[${a}..${a + r - 1}]`,
          "",
          "",
          void 0,
          r,
          void 0,
          { kind: "virtual" },
          void 0,
          void 0,
          !0,
          a
        ));
      }
      return e;
    }
    const i = await this.fetchVariables(this.startOfVariables, this.indexedVariables, "indexed");
    return e.concat(i);
  }
  getId() {
    return this.id;
  }
  getSession() {
    return this.session;
  }
  get value() {
    return this._value;
  }
  get hasChildren() {
    var e;
    return !!this.reference && this.reference > 0 && !((e = this.presentationHint) != null && e.lazy);
  }
  async fetchVariables(e, t, i) {
    try {
      const n = await this.session.variables(this.reference || 0, this.threadId, i, e, t);
      if (!n || !n.body || !n.body.variables)
        return [];
      const s = /* @__PURE__ */ new Map(), a = n.body.variables.filter((r) => !!r).map((r) => {
        if (Ue(r.value) && Ue(r.name) && typeof r.variablesReference == "number") {
          const d = s.get(r.name) || 0, u = d > 0 ? d.toString() : "";
          return s.set(r.name, d + 1), new q(
            this.session,
            this.threadId,
            this,
            r.variablesReference,
            r.name,
            r.evaluateName,
            r.value,
            r.namedVariables,
            r.indexedVariables,
            r.memoryReference,
            r.presentationHint,
            r.type,
            r.__vscodeVariableMenuContext,
            !0,
            0,
            u
          );
        }
        return new q(
          this.session,
          this.threadId,
          this,
          0,
          "",
          void 0,
          c("invalidVariableAttributes", "Invalid variable attributes"),
          0,
          0,
          void 0,
          { kind: "virtual" },
          void 0,
          void 0,
          !1
        );
      });
      return this.session.autoExpandLazyVariables && await Promise.all(a.map((r) => {
        var d;
        return ((d = r.presentationHint) == null ? void 0 : d.lazy) && r.evaluateLazy();
      })), a;
    } catch (n) {
      return [new q(
        this.session,
        this.threadId,
        this,
        0,
        "",
        void 0,
        n.message,
        0,
        0,
        void 0,
        { kind: "virtual" },
        void 0,
        void 0,
        !1
      )];
    }
  }
  get getChildrenInChunks() {
    return !!this.indexedVariables;
  }
  set value(e) {
    this._value = e, this.valueChanged = !!w.allValues.get(this.getId()) && w.allValues.get(this.getId()) !== D.DEFAULT_VALUE && w.allValues.get(this.getId()) !== e, w.allValues.set(this.getId(), e);
  }
  toString() {
    return this.value;
  }
  async evaluateExpression(e, t, i, n, s = !1) {
    var a;
    if (!t || !i && n !== "repl")
      return this.value = n === "repl" ? c("startDebugFirst", "Please start a debug session to evaluate expressions") : D.DEFAULT_VALUE, this.reference = 0, !1;
    this.session = t;
    try {
      const r = await t.evaluate(e, i ? i.frameId : void 0, n);
      return r && r.body ? (this.value = r.body.result || "", this.reference = r.body.variablesReference, this.namedVariables = r.body.namedVariables, this.indexedVariables = r.body.indexedVariables, this.memoryReference = r.body.memoryReference, this.type = r.body.type || this.type, this.presentationHint = r.body.presentationHint, !s && ((a = r.body.presentationHint) != null && a.lazy) && await this.evaluateLazy(), !0) : !1;
    } catch (r) {
      return this.value = r.message || "", this.reference = 0, !1;
    }
  }
}
w.allValues = /* @__PURE__ */ new Map();
w.BASE_CHUNK_SIZE = 100;
function xe(o, e) {
  e && e.body && (o.value = e.body.value || "", o.type = e.body.type || o.type, o.reference = e.body.variablesReference, o.namedVariables = e.body.namedVariables, o.indexedVariables = e.body.indexedVariables);
}
class D extends w {
  constructor(e, t = j()) {
    super(void 0, void 0, 0, t), this.name = e, this.available = !1, e && (this.value = D.DEFAULT_VALUE);
  }
  async evaluate(e, t, i, n) {
    this.available = await this.evaluateExpression(this.name, e, t, i, n);
  }
  toString() {
    return `${this.name}
${this.value}`;
  }
  async setExpression(e, t) {
    if (!this.session)
      return;
    const i = await this.session.setExpression(t.frameId, this.name, e);
    xe(this, i);
  }
}
D.DEFAULT_VALUE = c("notAvailable", "not available");
class q extends w {
  constructor(e, t, i, n, s, a, r, d, u, p, b, C = void 0, _ = void 0, H = !0, K = 0, De = "") {
    super(e, t, n, `variable:${i.getId()}:${s}:${De}`, d, u, p, K, b), this.parent = i, this.name = s, this.evaluateName = a, this.variableMenuContext = _, this.available = H, this.value = r || "", this.type = C;
  }
  async setVariable(e, t) {
    if (this.session)
      try {
        if (this.session.capabilities.supportsSetExpression && !this.session.capabilities.supportsSetVariable && this.evaluateName)
          return this.setExpression(e, t);
        const i = await this.session.setVariable(this.parent.reference, this.name, e);
        xe(this, i);
      } catch (i) {
        this.errorMessage = i.message;
      }
  }
  async setExpression(e, t) {
    if (!this.session || !this.evaluateName)
      return;
    const i = await this.session.setExpression(t.frameId, this.evaluateName, e);
    xe(this, i);
  }
  toString() {
    return this.name ? `${this.name}: ${this.value}` : this.value;
  }
  adoptLazyResponse(e) {
    this.evaluateName = e.evaluateName;
  }
  toDebugProtocolObject() {
    return {
      name: this.name,
      variablesReference: this.reference || 0,
      memoryReference: this.memoryReference,
      value: this.value,
      evaluateName: this.evaluateName
    };
  }
}
class gt extends w {
  constructor(e, t, i, n, s, a, r, d) {
    super(e.thread.session, e.thread.threadId, n, `scope:${i}:${t}`, a, r), this.name = i, this.expensive = s, this.range = d;
  }
  toString() {
    return this.name;
  }
  toDebugProtocolObject() {
    return {
      name: this.name,
      variablesReference: this.reference || 0,
      expensive: this.expensive
    };
  }
}
class Ai extends gt {
  constructor(e, t, i) {
    super(e, t, i, 0, !1);
  }
  toString() {
    return this.name;
  }
}
class Oi {
  constructor(e, t, i, n, s, a, r, d, u) {
    this.thread = e, this.frameId = t, this.source = i, this.name = n, this.presentationHint = s, this.range = a, this.index = r, this.canRestart = d, this.instructionPointerReference = u;
  }
  getId() {
    return `stackframe:${this.thread.getId()}:${this.index}:${this.source.name}`;
  }
  getScopes() {
    return this.scopes || (this.scopes = this.thread.session.scopes(this.frameId, this.thread.threadId).then((e) => {
      if (!e || !e.body || !e.body.scopes)
        return [];
      const t = /* @__PURE__ */ new Set();
      return e.body.scopes.map((i) => {
        let n = 0;
        do
          n = Wt(`${i.name}:${i.line}:${i.column}`, n);
        while (t.has(n));
        return t.add(n), new gt(
          this,
          n,
          i.name,
          i.variablesReference,
          i.expensive,
          i.namedVariables,
          i.indexedVariables,
          i.line && i.column && i.endLine && i.endColumn ? new Se(i.line, i.column, i.endLine, i.endColumn) : void 0
        );
      });
    }, (e) => [new Ai(this, 0, e.message)])), this.scopes;
  }
  async getMostSpecificScopes(e) {
    const i = (await this.getScopes()).filter((a) => !a.expensive);
    if (!i.some((a) => !!a.range))
      return i;
    const s = i.filter((a) => a.range && Se.containsRange(a.range, e)).sort((a, r) => a.range.endLineNumber - a.range.startLineNumber - (r.range.endLineNumber - r.range.startLineNumber));
    return s.length ? s : i;
  }
  restart() {
    return this.thread.session.restartFrame(this.frameId, this.thread.threadId);
  }
  forgetScopes() {
    this.scopes = void 0;
  }
  toString() {
    const e = typeof this.range.startLineNumber == "number" ? `:${this.range.startLineNumber}` : "", t = `${this.source.inMemory ? this.source.name : this.source.uri.fsPath}${e}`;
    return t === Ee ? this.name : `${this.name} (${t})`;
  }
  async openInEditor(e, t, i, n) {
    var a;
    const s = (a = this.thread.stoppedDetails) == null ? void 0 : a.reason;
    if (this.instructionPointerReference && (s === "instruction breakpoint" || s === "step" && this.thread.lastSteppingGranularity === "instruction"))
      return e.openEditor(T.instance, { pinned: !0 });
    if (this.source.available)
      return this.source.openInEditor(e, this.range, t, i, n);
  }
  equals(e) {
    return this.name === e.name && e.thread === this.thread && this.frameId === e.frameId && e.source === this.source && Se.equalsRange(this.range, e.range);
  }
}
class Tn {
  constructor(e, t, i) {
    this.session = e, this.name = t, this.threadId = i, this.callStackCancellationTokens = [], this.reachedEndOfCallStack = !1, this.callStack = [], this.staleCallStack = [], this.stopped = !1;
  }
  getId() {
    return `thread:${this.session.getId()}:${this.threadId}`;
  }
  clearCallStack() {
    this.callStack.length && (this.staleCallStack = this.callStack), this.callStack = [], this.callStackCancellationTokens.forEach((e) => e.dispose(!0)), this.callStackCancellationTokens = [];
  }
  getCallStack() {
    return this.callStack;
  }
  getStaleCallStack() {
    return this.staleCallStack;
  }
  getTopStackFrame() {
    const e = this.getCallStack();
    return e.find((i) => {
      var n, s;
      return !!(i && (((n = this.stoppedDetails) == null ? void 0 : n.reason) === "instruction breakpoint" || ((s = this.stoppedDetails) == null ? void 0 : s.reason) === "step" && this.lastSteppingGranularity === "instruction") && i.instructionPointerReference || i.source && i.source.available && i.source.presentationHint !== "deemphasize");
    }) || (e.length > 0 ? e[0] : void 0);
  }
  get stateLabel() {
    return this.stoppedDetails ? this.stoppedDetails.description || (this.stoppedDetails.reason ? c(
      { key: "pausedOn", comment: ["indicates reason for program being paused"] },
      "Paused on {0}",
      this.stoppedDetails.reason
    ) : c("paused", "Paused")) : c({ key: "running", comment: ["indicates state"] }, "Running");
  }
  async fetchCallStack(e = 20) {
    var t;
    if (this.stopped) {
      const i = this.callStack.length, n = await this.getCallStackImpl(i, e);
      this.reachedEndOfCallStack = n.length < e, i < this.callStack.length && this.callStack.splice(i, this.callStack.length - i), this.callStack = this.callStack.concat(n || []), typeof ((t = this.stoppedDetails) == null ? void 0 : t.totalFrames) == "number" && this.stoppedDetails.totalFrames === this.callStack.length && (this.reachedEndOfCallStack = !0);
    }
  }
  async getCallStackImpl(e, t) {
    try {
      const i = new zt();
      this.callStackCancellationTokens.push(i);
      const n = await this.session.stackTrace(this.threadId, e, t, i.token);
      return !n || !n.body || i.token.isCancellationRequested ? [] : (this.stoppedDetails && (this.stoppedDetails.totalFrames = n.body.totalFrames), n.body.stackFrames.map((s, a) => {
        const r = this.session.getSource(s.source);
        return new Oi(
          this,
          s.id,
          r,
          s.name,
          s.presentationHint,
          new Se(s.line, s.column, s.endLine || s.line, s.endColumn || s.column),
          e + a,
          typeof s.canRestart == "boolean" ? s.canRestart : !0,
          s.instructionPointerReference
        );
      }));
    } catch (i) {
      return this.stoppedDetails && (this.stoppedDetails.framesErrorMessage = i.message), [];
    }
  }
  get exceptionInfo() {
    return this.stoppedDetails && this.stoppedDetails.reason === "exception" ? this.session.capabilities.supportsExceptionInfoRequest ? this.session.exceptionInfo(this.threadId) : Promise.resolve({
      description: this.stoppedDetails.text,
      breakMode: null
    }) : Promise.resolve(void 0);
  }
  next(e) {
    return this.session.next(this.threadId, e);
  }
  stepIn(e) {
    return this.session.stepIn(this.threadId, void 0, e);
  }
  stepOut(e) {
    return this.session.stepOut(this.threadId, e);
  }
  stepBack(e) {
    return this.session.stepBack(this.threadId, e);
  }
  continue() {
    return this.session.continue(this.threadId);
  }
  pause() {
    return this.session.pause(this.threadId);
  }
  terminate() {
    return this.session.terminateThreads([this.threadId]);
  }
  reverseContinue() {
    return this.session.reverseContinue(this.threadId);
  }
}
const An = (o, e, t, i = "memory") => se.from({
  scheme: Kt,
  authority: o,
  path: "/" + encodeURIComponent(e) + `/${encodeURIComponent(i)}.bin`,
  query: t ? `?range=${t.fromOffset}:${t.toOffset}` : void 0
});
class On extends Xt {
  constructor(e, t) {
    super(), this.memoryReference = e, this.session = t, this.invalidateEmitter = this._register(new me()), this.onDidInvalidate = this.invalidateEmitter.event, this.writable = !!this.session.capabilities.supportsWriteMemoryRequest, this._register(t.onDidInvalidateMemory((i) => {
      i.body.memoryReference === e && this.invalidate(i.body.offset, i.body.count - i.body.offset);
    }));
  }
  async read(e, t) {
    var u;
    const i = t - e, n = e, s = await this.session.readMemory(this.memoryReference, n, i);
    if (s === void 0 || !((u = s.body) != null && u.data))
      return [{ type: 1, offset: n, length: i }];
    let a;
    try {
      a = jt(s.body.data);
    } catch {
      return [{ type: 2, offset: n, length: i, error: "Invalid base64 data from debug adapter" }];
    }
    const r = s.body.unreadableBytes || 0, d = i - r;
    if (a.byteLength < d) {
      const p = He.alloc(d - a.byteLength);
      p.buffer.fill(0), a = He.concat([a, p], d);
    } else
      a.byteLength > d && (a = a.slice(0, d));
    return r ? [
      { type: 0, offset: n, length: d, data: a },
      { type: 1, offset: n + d, length: r }
    ] : [{ type: 0, offset: n, length: i, data: a }];
  }
  async write(e, t) {
    var s;
    const i = await this.session.writeMemory(this.memoryReference, e, Jt(t), !0), n = ((s = i == null ? void 0 : i.body) == null ? void 0 : s.bytesWritten) ?? t.byteLength;
    return this.invalidate(e, e + n), n;
  }
  dispose() {
    super.dispose();
  }
  invalidate(e, t) {
    this.invalidateEmitter.fire({ fromOffset: e, toOffset: t });
  }
}
class Ni {
  constructor(e, t) {
    this.enabled = e, this.id = t;
  }
  getId() {
    return this.id;
  }
}
function ne(o, e) {
  return Yt({
    supportsConditionalBreakpoints: !!e.supportsConditionalBreakpoints,
    supportsHitConditionalBreakpoints: !!e.supportsHitConditionalBreakpoints,
    supportsLogPoints: !!e.supportsLogPoints,
    supportsFunctionBreakpoints: !!e.supportsFunctionBreakpoints,
    supportsDataBreakpoints: !!e.supportsDataBreakpoints,
    supportsInstructionBreakpoints: !!e.supportsInstructionBreakpoints
  }, o);
}
class pe extends Ni {
  constructor(e, t, i, n, s) {
    super(e, s), this.hitCondition = t, this.condition = i, this.logMessage = n, this.sessionData = /* @__PURE__ */ new Map(), e === void 0 && (this.enabled = !0);
  }
  setSessionData(e, t) {
    t ? (t.sessionId = e, this.sessionData.set(e, t)) : this.sessionData.delete(e);
    const i = Array.from(this.sessionData.values()), n = Qe(i.filter((s) => s.verified), (s) => `${s.line}:${s.column}`);
    n.length ? this.data = n.length === 1 ? n[0] : void 0 : this.data = i.length ? i[0] : void 0;
  }
  get message() {
    if (this.data)
      return this.data.message;
  }
  get verified() {
    return this.data ? this.data.verified : !0;
  }
  get sessionsThatVerified() {
    const e = [];
    for (const [t, i] of this.sessionData)
      i.verified && e.push(t);
    return e;
  }
  getIdFromAdapter(e) {
    const t = this.sessionData.get(e);
    return t ? t.id : void 0;
  }
  getDebugProtocolBreakpoint(e) {
    const t = this.sessionData.get(e);
    if (t)
      return {
        id: t.id,
        verified: t.verified,
        message: t.message,
        source: t.source,
        line: t.line,
        column: t.column,
        endLine: t.endLine,
        endColumn: t.endColumn,
        instructionReference: t.instructionReference,
        offset: t.offset
      };
  }
  toJSON() {
    const e = /* @__PURE__ */ Object.create(null);
    return e.id = this.getId(), e.enabled = this.enabled, e.condition = this.condition, e.hitCondition = this.hitCondition, e.logMessage = this.logMessage, e;
  }
}
class y extends pe {
  constructor(e, t, i, n, s, a, r, d, u, p, b, C = j()) {
    super(n, a, s, r, C), this._uri = e, this._lineNumber = t, this._column = i, this._adapterData = d, this.textFileService = u, this.uriIdentityService = p, this.logService = b;
  }
  get originalUri() {
    return this._uri;
  }
  get lineNumber() {
    return this.verified && this.data && typeof this.data.line == "number" ? this.data.line : this._lineNumber;
  }
  get verified() {
    return this.data ? this.data.verified && !this.textFileService.isDirty(this._uri) : !0;
  }
  get uri() {
    return this.verified && this.data && this.data.source ? pt(this.data.source, this.data.source.path, this.data.sessionId, this.uriIdentityService, this.logService) : this._uri;
  }
  get column() {
    return this.verified && this.data && typeof this.data.column == "number" ? this.data.column : this._column;
  }
  get message() {
    return this.textFileService.isDirty(this.uri) ? c(
      "breakpointDirtydHover",
      "Unverified breakpoint. File is modified, please restart debug session."
    ) : super.message;
  }
  get adapterData() {
    return this.data && this.data.source && this.data.source.adapterData ? this.data.source.adapterData : this._adapterData;
  }
  get endLineNumber() {
    return this.verified && this.data ? this.data.endLine : void 0;
  }
  get endColumn() {
    return this.verified && this.data ? this.data.endColumn : void 0;
  }
  get sessionAgnosticData() {
    return {
      lineNumber: this._lineNumber,
      column: this._column
    };
  }
  get supported() {
    return this.data ? !(this.logMessage && !this.data.supportsLogPoints || this.condition && !this.data.supportsConditionalBreakpoints || this.hitCondition && !this.data.supportsHitConditionalBreakpoints) : !0;
  }
  setSessionData(e, t) {
    super.setSessionData(e, t), this._adapterData || (this._adapterData = this.adapterData);
  }
  toJSON() {
    const e = super.toJSON();
    return e.uri = this._uri, e.lineNumber = this._lineNumber, e.column = this._column, e.adapterData = this.adapterData, e;
  }
  toString() {
    return `${W(this.uri)} ${this.lineNumber}`;
  }
  update(e) {
    ie(e.lineNumber) || (this._lineNumber = e.lineNumber), ie(e.column) || (this._column = e.column), ie(e.condition) || (this.condition = e.condition), ie(e.hitCondition) || (this.hitCondition = e.hitCondition), ie(e.logMessage) || (this.logMessage = e.logMessage);
  }
}
class E extends pe {
  constructor(e, t, i, n, s, a = j()) {
    super(t, i, n, s, a), this.name = e;
  }
  toJSON() {
    const e = super.toJSON();
    return e.name = this.name, e;
  }
  get supported() {
    return this.data ? this.data.supportsFunctionBreakpoints : !0;
  }
  toString() {
    return this.name;
  }
}
class A extends pe {
  constructor(e, t, i, n, s, a, r, d, u, p = j()) {
    super(n, s, a, r, p), this.description = e, this.dataId = t, this.canPersist = i, this.accessTypes = d, this.accessType = u;
  }
  toJSON() {
    const e = super.toJSON();
    return e.description = this.description, e.dataId = this.dataId, e.accessTypes = this.accessTypes, e.accessType = this.accessType, e;
  }
  get supported() {
    return this.data ? this.data.supportsDataBreakpoints : !0;
  }
  toString() {
    return this.description;
  }
}
class z extends pe {
  constructor(e, t, i, n, s, a, r, d = !1) {
    super(i, void 0, s, void 0, j()), this.filter = e, this.label = t, this.supportsCondition = n, this.description = a, this.conditionDescription = r, this.fallback = d, this.supportedSessions = /* @__PURE__ */ new Set();
  }
  toJSON() {
    const e = /* @__PURE__ */ Object.create(null);
    return e.filter = this.filter, e.label = this.label, e.enabled = this.enabled, e.supportsCondition = this.supportsCondition, e.conditionDescription = this.conditionDescription, e.condition = this.condition, e.fallback = this.fallback, e.description = this.description, e;
  }
  setSupportedSession(e, t) {
    t ? this.supportedSessions.add(e) : this.supportedSessions.delete(e);
  }
  setFallback(e) {
    this.fallback = e;
  }
  get supported() {
    return !0;
  }
  isSupportedSession(e) {
    return e ? this.supportedSessions.has(e) : this.fallback;
  }
  matches(e) {
    return this.filter === e.filter && this.label === e.label && this.supportsCondition === !!e.supportsCondition && this.conditionDescription === e.conditionDescription && this.description === e.description;
  }
  toString() {
    return this.label;
  }
}
class N extends pe {
  constructor(e, t, i, n, s, a, r, d = j()) {
    super(n, s, a, r, d), this.instructionReference = e, this.offset = t, this.canPersist = i;
  }
  toJSON() {
    const e = super.toJSON();
    return e.instructionReference = this.instructionReference, e.offset = this.offset, e;
  }
  get supported() {
    return this.data ? this.data.supportsInstructionBreakpoints : !0;
  }
  toString() {
    return this.instructionReference;
  }
}
class Nn {
  constructor(e, t) {
    this.sessionId = e, this.threadId = t;
  }
  getId() {
    return `${this.sessionId}:${this.threadId}`;
  }
}
let Ge = class {
  constructor(e, t, i, n) {
    this.textFileService = t, this.uriIdentityService = i, this.logService = n, this.schedulers = /* @__PURE__ */ new Map(), this.breakpointsActivated = !0, this._onDidChangeBreakpoints = new me(), this._onDidChangeCallStack = new me(), this._onDidChangeWatchExpressions = new me(), this.breakpoints = e.loadBreakpoints(), this.functionBreakpoints = e.loadFunctionBreakpoints(), this.exceptionBreakpoints = e.loadExceptionBreakpoints(), this.dataBreakpoints = e.loadDataBreakpoints(), this.watchExpressions = e.loadWatchExpressions(), this.instructionBreakpoints = [], this.sessions = [];
  }
  getId() {
    return "root";
  }
  getSession(e, t = !1) {
    if (e)
      return this.getSessions(t).find((i) => i.getId() === e);
  }
  getSessions(e = !1) {
    return this.sessions.filter((t) => e || t.state !== 0);
  }
  addSession(e) {
    this.sessions = this.sessions.filter((n) => !(n.getId() === e.getId() || n.state === 0 && n.configuration.name === e.configuration.name));
    let t = 1;
    for (; this.sessions.some((n) => n.getLabel() === e.getLabel()); )
      e.setName(`${e.configuration.name} ${++t}`);
    let i = -1;
    e.parentSession && (i = qt(this.sessions, (n) => n.parentSession === e.parentSession || n === e.parentSession)), i >= 0 ? this.sessions.splice(i + 1, 0, e) : this.sessions.push(e), this._onDidChangeCallStack.fire(void 0);
  }
  get onDidChangeBreakpoints() {
    return this._onDidChangeBreakpoints.event;
  }
  get onDidChangeCallStack() {
    return this._onDidChangeCallStack.event;
  }
  get onDidChangeWatchExpressions() {
    return this._onDidChangeWatchExpressions.event;
  }
  rawUpdate(e) {
    const t = this.sessions.find((i) => i.getId() === e.sessionId);
    t && (t.rawUpdate(e), this._onDidChangeCallStack.fire(void 0));
  }
  clearThreads(e, t, i = void 0) {
    const n = this.sessions.find((s) => s.getId() === e);
    this.schedulers.forEach((s) => {
      s.scheduler.dispose(), s.completeDeferred.complete();
    }), this.schedulers.clear(), n && (n.clearThreads(t, i), this._onDidChangeCallStack.fire(void 0));
  }
  async fetchCallstack(e, t) {
    var s;
    if (e.reachedEndOfCallStack)
      return;
    const i = (s = e.stoppedDetails) == null ? void 0 : s.totalFrames, n = typeof i == "number" ? i - e.getCallStack().length : void 0;
    (!t || n && t > n) && (t = n), t && t > 0 && (await e.fetchCallStack(t), this._onDidChangeCallStack.fire());
  }
  refreshTopOfCallstack(e) {
    if (e.session.capabilities.supportsDelayedStackTraceLoading) {
      let i = Promise.resolve();
      const n = new Promise((s, a) => {
        i = e.fetchCallStack(1).then(() => {
          if (!this.schedulers.has(e.getId())) {
            const d = new Gt();
            this.schedulers.set(e.getId(), {
              completeDeferred: d,
              scheduler: new $e(() => {
                e.fetchCallStack(19).then(() => {
                  const u = e.getStaleCallStack(), p = e.getCallStack();
                  let b = u.length !== p.length;
                  for (let C = 1; C < u.length && !b; C++)
                    b = !u[C].equals(p[C]);
                  b && this._onDidChangeCallStack.fire();
                }).finally(() => {
                  d.complete(), this.schedulers.delete(e.getId());
                });
              }, 420)
            });
          }
          const r = this.schedulers.get(e.getId());
          r.scheduler.schedule(), r.completeDeferred.p.then(s, a), this._onDidChangeCallStack.fire();
        });
      });
      return { topCallStack: i, wholeCallStack: n };
    }
    const t = e.fetchCallStack();
    return { wholeCallStack: t, topCallStack: t };
  }
  getBreakpoints(e) {
    var t, i;
    if (e) {
      const n = (t = e.uri) == null ? void 0 : t.toString(), s = (i = e.originalUri) == null ? void 0 : i.toString();
      return this.breakpoints.filter((a) => !(n && a.uri.toString() !== n || s && a.originalUri.toString() !== s || e.lineNumber && a.lineNumber !== e.lineNumber || e.column && a.column !== e.column || e.enabledOnly && (!this.breakpointsActivated || !a.enabled)));
    }
    return this.breakpoints;
  }
  getFunctionBreakpoints() {
    return this.functionBreakpoints;
  }
  getDataBreakpoints() {
    return this.dataBreakpoints;
  }
  getExceptionBreakpoints() {
    return this.exceptionBreakpoints;
  }
  getExceptionBreakpointsForSession(e) {
    return this.exceptionBreakpoints.filter((t) => t.isSupportedSession(e));
  }
  getInstructionBreakpoints() {
    return this.instructionBreakpoints;
  }
  setExceptionBreakpointsForSession(e, t) {
    if (t) {
      let i = !1;
      t.forEach((n) => {
        let s = this.exceptionBreakpoints.filter((a) => a.matches(n)).pop();
        s || (i = !0, s = new z(
          n.filter,
          n.label,
          !!n.default,
          !!n.supportsCondition,
          void 0,
          n.description,
          n.conditionDescription
        ), this.exceptionBreakpoints.push(s)), s.setSupportedSession(e, !0);
      }), i && this._onDidChangeBreakpoints.fire(void 0);
    }
  }
  removeExceptionBreakpointsForSession(e) {
    this.exceptionBreakpoints.forEach((t) => t.setSupportedSession(e, !1));
  }
  setExceptionBreakpointFallbackSession(e) {
    this.exceptionBreakpoints.forEach((t) => t.setFallback(t.isSupportedSession(e)));
  }
  setExceptionBreakpointCondition(e, t) {
    e.condition = t, this._onDidChangeBreakpoints.fire(void 0);
  }
  areBreakpointsActivated() {
    return this.breakpointsActivated;
  }
  setBreakpointsActivated(e) {
    this.breakpointsActivated = e, this._onDidChangeBreakpoints.fire(void 0);
  }
  addBreakpoints(e, t, i = !0) {
    const n = t.map((s) => new y(
      e,
      s.lineNumber,
      s.column,
      s.enabled !== !1,
      s.condition,
      s.hitCondition,
      s.logMessage,
      void 0,
      this.textFileService,
      this.uriIdentityService,
      this.logService,
      s.id
    ));
    return this.breakpoints = this.breakpoints.concat(n), this.breakpointsActivated = !0, this.sortAndDeDup(), i && this._onDidChangeBreakpoints.fire({ added: n, sessionOnly: !1 }), n;
  }
  removeBreakpoints(e) {
    this.breakpoints = this.breakpoints.filter((t) => !e.some((i) => i.getId() === t.getId())), this._onDidChangeBreakpoints.fire({ removed: e, sessionOnly: !1 });
  }
  updateBreakpoints(e) {
    const t = [];
    this.breakpoints.forEach((i) => {
      const n = e.get(i.getId());
      n && (i.update(n), t.push(i));
    }), this.sortAndDeDup(), this._onDidChangeBreakpoints.fire({ changed: t, sessionOnly: !1 });
  }
  setBreakpointSessionData(e, t, i) {
    this.breakpoints.forEach((n) => {
      if (!i)
        n.setSessionData(e, void 0);
      else {
        const s = i.get(n.getId());
        s && n.setSessionData(e, ne(s, t));
      }
    }), this.functionBreakpoints.forEach((n) => {
      if (!i)
        n.setSessionData(e, void 0);
      else {
        const s = i.get(n.getId());
        s && n.setSessionData(e, ne(s, t));
      }
    }), this.dataBreakpoints.forEach((n) => {
      if (!i)
        n.setSessionData(e, void 0);
      else {
        const s = i.get(n.getId());
        s && n.setSessionData(e, ne(s, t));
      }
    }), this.exceptionBreakpoints.forEach((n) => {
      if (!i)
        n.setSessionData(e, void 0);
      else {
        const s = i.get(n.getId());
        s && n.setSessionData(e, ne(s, t));
      }
    }), this.instructionBreakpoints.forEach((n) => {
      if (!i)
        n.setSessionData(e, void 0);
      else {
        const s = i.get(n.getId());
        s && n.setSessionData(e, ne(s, t));
      }
    }), this._onDidChangeBreakpoints.fire({
      sessionOnly: !0
    });
  }
  getDebugProtocolBreakpoint(e, t) {
    const i = this.breakpoints.find((n) => n.getId() === e);
    if (i)
      return i.getDebugProtocolBreakpoint(t);
  }
  sortAndDeDup() {
    this.breakpoints = this.breakpoints.sort((e, t) => e.uri.toString() !== t.uri.toString() ? W(e.uri).localeCompare(W(t.uri)) : e.lineNumber === t.lineNumber ? e.column && t.column ? e.column - t.column : 1 : e.lineNumber - t.lineNumber), this.breakpoints = Qe(this.breakpoints, (e) => `${e.uri.toString()}:${e.lineNumber}:${e.column}`);
  }
  setEnablement(e, t) {
    if (e instanceof y || e instanceof E || e instanceof z || e instanceof A || e instanceof N) {
      const i = [];
      e.enabled !== t && (e instanceof y || e instanceof E || e instanceof A || e instanceof N) && i.push(e), e.enabled = t, t && (this.breakpointsActivated = !0), this._onDidChangeBreakpoints.fire({ changed: i, sessionOnly: !1 });
    }
  }
  enableOrDisableAllBreakpoints(e) {
    const t = [];
    this.breakpoints.forEach((i) => {
      i.enabled !== e && t.push(i), i.enabled = e;
    }), this.functionBreakpoints.forEach((i) => {
      i.enabled !== e && t.push(i), i.enabled = e;
    }), this.dataBreakpoints.forEach((i) => {
      i.enabled !== e && t.push(i), i.enabled = e;
    }), this.instructionBreakpoints.forEach((i) => {
      i.enabled !== e && t.push(i), i.enabled = e;
    }), e && (this.breakpointsActivated = !0), this._onDidChangeBreakpoints.fire({ changed: t, sessionOnly: !1 });
  }
  addFunctionBreakpoint(e, t) {
    const i = new E(e, !0, void 0, void 0, void 0, t);
    return this.functionBreakpoints.push(i), this._onDidChangeBreakpoints.fire({ added: [i], sessionOnly: !1 }), i;
  }
  updateFunctionBreakpoint(e, t) {
    const i = this.functionBreakpoints.find((n) => n.getId() === e);
    i && (typeof t.name == "string" && (i.name = t.name), typeof t.condition == "string" && (i.condition = t.condition), typeof t.hitCondition == "string" && (i.hitCondition = t.hitCondition), this._onDidChangeBreakpoints.fire({ changed: [i], sessionOnly: !1 }));
  }
  removeFunctionBreakpoints(e) {
    let t;
    e ? (t = this.functionBreakpoints.filter((i) => i.getId() === e), this.functionBreakpoints = this.functionBreakpoints.filter((i) => i.getId() !== e)) : (t = this.functionBreakpoints, this.functionBreakpoints = []), this._onDidChangeBreakpoints.fire({ removed: t, sessionOnly: !1 });
  }
  addDataBreakpoint(e, t, i, n, s) {
    const a = new A(
      e,
      t,
      i,
      !0,
      void 0,
      void 0,
      void 0,
      n,
      s
    );
    this.dataBreakpoints.push(a), this._onDidChangeBreakpoints.fire({ added: [a], sessionOnly: !1 });
  }
  removeDataBreakpoints(e) {
    let t;
    e ? (t = this.dataBreakpoints.filter((i) => i.getId() === e), this.dataBreakpoints = this.dataBreakpoints.filter((i) => i.getId() !== e)) : (t = this.dataBreakpoints, this.dataBreakpoints = []), this._onDidChangeBreakpoints.fire({ removed: t, sessionOnly: !1 });
  }
  addInstructionBreakpoint(e, t, i, n) {
    const s = new N(e, t, !1, !0, n, i, void 0);
    this.instructionBreakpoints.push(s), this._onDidChangeBreakpoints.fire({ added: [s], sessionOnly: !0 });
  }
  removeInstructionBreakpoints(e) {
    let t;
    e ? (t = this.instructionBreakpoints.filter((i) => i.instructionReference === e), this.instructionBreakpoints = this.instructionBreakpoints.filter((i) => i.instructionReference !== e)) : (t = this.instructionBreakpoints, this.instructionBreakpoints = []), this._onDidChangeBreakpoints.fire({ removed: t, sessionOnly: !1 });
  }
  getWatchExpressions() {
    return this.watchExpressions;
  }
  addWatchExpression(e) {
    const t = new D(e || "");
    return this.watchExpressions.push(t), this._onDidChangeWatchExpressions.fire(t), t;
  }
  renameWatchExpression(e, t) {
    const i = this.watchExpressions.filter((n) => n.getId() === e);
    i.length === 1 && (i[0].name = t, this._onDidChangeWatchExpressions.fire(i[0]));
  }
  removeWatchExpressions(e = null) {
    this.watchExpressions = e ? this.watchExpressions.filter((t) => t.getId() !== e) : [], this._onDidChangeWatchExpressions.fire(void 0);
  }
  moveWatchExpression(e, t) {
    const i = this.watchExpressions.find((n) => n.getId() === e);
    i && (this.watchExpressions = this.watchExpressions.filter((n) => n.getId() !== e), this.watchExpressions = this.watchExpressions.slice(0, t).concat(i, this.watchExpressions.slice(t)), this._onDidChangeWatchExpressions.fire(void 0));
  }
  sourceIsNotAvailable(e) {
    this.sessions.forEach((t) => {
      const i = t.getSourceForUri(e);
      i && (i.available = !1);
    }), this._onDidChangeCallStack.fire(void 0);
  }
};
Ge = X([
  S(1, Pt),
  S(2, Ut),
  S(3, Ht)
], Ge);
const Rn = h("debug-console-view-icon", l.debugConsole, c("debugConsoleViewIcon", "View icon of the debug console view.")), Fn = h("run-view-icon", l.debugAlt, c("runViewIcon", "View icon of the run view.")), Mn = h("variables-view-icon", l.debugAlt, c("variablesViewIcon", "View icon of the variables view.")), Vn = h("watch-view-icon", l.debugAlt, c("watchViewIcon", "View icon of the watch view.")), Pn = h("callstack-view-icon", l.debugAlt, c("callStackViewIcon", "View icon of the call stack view.")), Un = h("breakpoints-view-icon", l.debugAlt, c("breakpointsViewIcon", "View icon of the breakpoints view.")), Hn = h("loaded-scripts-view-icon", l.debugAlt, c("loadedScriptsViewIcon", "View icon of the loaded scripts view.")), ft = {
  regular: h("debug-breakpoint", l.debugBreakpoint, c("debugBreakpoint", "Icon for breakpoints.")),
  disabled: h("debug-breakpoint-disabled", l.debugBreakpointDisabled, c("debugBreakpointDisabled", "Icon for disabled breakpoints.")),
  unverified: h("debug-breakpoint-unverified", l.debugBreakpointUnverified, c("debugBreakpointUnverified", "Icon for unverified breakpoints."))
}, bt = {
  regular: h("debug-breakpoint-function", l.debugBreakpointFunction, c("debugBreakpointFunction", "Icon for function breakpoints.")),
  disabled: h("debug-breakpoint-function-disabled", l.debugBreakpointFunctionDisabled, c(
    "debugBreakpointFunctionDisabled",
    "Icon for disabled function breakpoints."
  )),
  unverified: h("debug-breakpoint-function-unverified", l.debugBreakpointFunctionUnverified, c(
    "debugBreakpointFunctionUnverified",
    "Icon for unverified function breakpoints."
  ))
}, mt = {
  regular: h("debug-breakpoint-conditional", l.debugBreakpointConditional, c("debugBreakpointConditional", "Icon for conditional breakpoints.")),
  disabled: h("debug-breakpoint-conditional-disabled", l.debugBreakpointConditionalDisabled, c(
    "debugBreakpointConditionalDisabled",
    "Icon for disabled conditional breakpoints."
  )),
  unverified: h("debug-breakpoint-conditional-unverified", l.debugBreakpointConditionalUnverified, c(
    "debugBreakpointConditionalUnverified",
    "Icon for unverified conditional breakpoints."
  ))
}, St = {
  regular: h("debug-breakpoint-data", l.debugBreakpointData, c("debugBreakpointData", "Icon for data breakpoints.")),
  disabled: h("debug-breakpoint-data-disabled", l.debugBreakpointDataDisabled, c("debugBreakpointDataDisabled", "Icon for disabled data breakpoints.")),
  unverified: h("debug-breakpoint-data-unverified", l.debugBreakpointDataUnverified, c("debugBreakpointDataUnverified", "Icon for unverified data breakpoints."))
}, _e = {
  regular: h("debug-breakpoint-log", l.debugBreakpointLog, c("debugBreakpointLog", "Icon for log breakpoints.")),
  disabled: h("debug-breakpoint-log-disabled", l.debugBreakpointLogDisabled, c("debugBreakpointLogDisabled", "Icon for disabled log breakpoint.")),
  unverified: h("debug-breakpoint-log-unverified", l.debugBreakpointLogUnverified, c("debugBreakpointLogUnverified", "Icon for unverified log breakpoints."))
}, Kn = h("debug-hint", l.debugHint, c(
  "debugBreakpointHint",
  "Icon for breakpoint hints shown on hover in editor glyph margin."
)), Li = h("debug-breakpoint-unsupported", l.debugBreakpointUnsupported, c("debugBreakpointUnsupported", "Icon for unsupported breakpoints.")), qn = [ft, bt, mt, St, _e], Gn = h("debug-stackframe", l.debugStackframe, c(
  "debugStackframe",
  "Icon for a stackframe shown in the editor glyph margin."
)), Wn = h("debug-stackframe-focused", l.debugStackframeFocused, c(
  "debugStackframeFocused",
  "Icon for a focused stackframe  shown in the editor glyph margin."
)), zn = h("debug-gripper", l.gripper, c("debugGripper", "Icon for the debug bar gripper.")), Xn = h("debug-restart-frame", l.debugRestartFrame, c("debugRestartFrame", "Icon for the debug restart frame action.")), jn = h("debug-stop", l.debugStop, c("debugStop", "Icon for the debug stop action.")), Jn = h("debug-disconnect", l.debugDisconnect, c("debugDisconnect", "Icon for the debug disconnect action.")), Yn = h("debug-restart", l.debugRestart, c("debugRestart", "Icon for the debug restart action.")), $n = h("debug-step-over", l.debugStepOver, c("debugStepOver", "Icon for the debug step over action.")), Qn = h("debug-step-into", l.debugStepInto, c("debugStepInto", "Icon for the debug step into action.")), Zn = h("debug-step-out", l.debugStepOut, c("debugStepOut", "Icon for the debug step out action.")), es = h("debug-step-back", l.debugStepBack, c("debugStepBack", "Icon for the debug step back action.")), ts = h("debug-pause", l.debugPause, c("debugPause", "Icon for the debug pause action.")), is = h("debug-continue", l.debugContinue, c("debugContinue", "Icon for the debug continue action.")), ns = h("debug-reverse-continue", l.debugReverseContinue, c("debugReverseContinue", "Icon for the debug reverse continue action.")), ss = h("debug-run", l.run, c("debugRun", "Icon for the run or debug action.")), os = h("debug-start", l.debugStart, c("debugStart", "Icon for the debug start action.")), as = h("debug-configure", l.gear, c("debugConfigure", "Icon for the debug configure action."));
h("debug-console", l.gear, c("debugConsole", "Icon for the debug console open action."));
const rs = h("debug-remove-config", l.trash, c("debugRemoveConfig", "Icon for removing debug configurations."));
h("debug-collapse-all", l.collapseAll, c("debugCollapseAll", "Icon for the collapse all action in the debug views."));
const cs = h("callstack-view-session", l.bug, c(
  "callstackViewSession",
  "Icon for the session icon in the call stack view."
)), ds = h("debug-console-clear-all", l.clearAll, c(
  "debugConsoleClearAll",
  "Icon for the clear all action in the debug console."
)), us = h("watch-expressions-remove-all", l.closeAll, c(
  "watchExpressionsRemoveAll",
  "Icon for the Remove All action in the watch view."
)), ls = h("watch-expression-remove", l.removeClose, c("watchExpressionRemove", "Icon for the Remove action in the watch view.")), hs = h("watch-expressions-add", l.add, c("watchExpressionsAdd", "Icon for the add action in the watch view.")), Ri = h("watch-expressions-add-function-breakpoint", l.add, c(
  "watchExpressionsAddFuncBreakpoint",
  "Icon for the add function breakpoint action in the watch view."
)), Fi = h("breakpoints-remove-all", l.closeAll, c(
  "breakpointsRemoveAll",
  "Icon for the Remove All action in the breakpoints view."
)), Mi = h("breakpoints-activate", l.activateBreakpoints, c(
  "breakpointsActivate",
  "Icon for the activate action in the breakpoints view."
)), ps = h("debug-console-evaluation-input", l.arrowSmallRight, c(
  "debugConsoleEvaluationInput",
  "Icon for the debug evaluation input marker."
)), gs = h("debug-console-evaluation-prompt", l.chevronRight, c("debugConsoleEvaluationPrompt", "Icon for the debug evaluation prompt.")), fs = h("debug-inspect-memory", l.fileBinary, c("debugInspectMemory", "Icon for the inspect memory action.")), m = fi;
function U(o) {
  const e = m("input");
  return e.type = "checkbox", e.tabIndex = -1, o.push(bi.ignoreTarget(e)), e;
}
const Vi = 9;
function We(o, e, t) {
  const i = o.getBreakpoints().length + o.getExceptionBreakpointsForSession(e).length + o.getFunctionBreakpoints().length + o.getDataBreakpoints().length + o.getInstructionBreakpoints().length;
  return Math.min(t, i) * 22;
}
let ze = class extends ri {
  constructor(e, t, i, n, s, a, r, d, u, p, b, C, _, H, K, De, Nt) {
    super(e, n, t, u, b, p, s, C, a, _), this.debugService = i, this.editorService = r, this.contextViewService = d, this.labelService = H, this.hoverService = De, this.languageService = Nt, this.needsRefresh = !1, this.needsStateChange = !1, this.ignoreLayout = !1, this.autoFocusedIndex = -1, this.menu = K.createMenu(k.DebugBreakpointsContext, b), this._register(this.menu), this.breakpointItemType = L.bindTo(b), this.breakpointSupportsCondition = Ne.bindTo(b), this.breakpointInputFocused = tt.bindTo(b), this._register(this.debugService.getModel().onDidChangeBreakpoints(() => this.onBreakpointsChange())), this._register(this.debugService.getViewModel().onDidFocusSession(() => this.onBreakpointsChange())), this._register(this.debugService.onDidChangeState(() => this.onStateChange())), this.hintDelayer = this._register(new $e(() => this.updateBreakpointsHint(!0), 4e3));
  }
  renderBody(e) {
    super.renderBody(e), this.element.classList.add("debug-pane"), e.classList.add("debug-breakpoints");
    const t = new Pi(this);
    this.list = this.instantiationService.createInstance(ci, "Breakpoints", e, t, [
      this.instantiationService.createInstance(ae, this.menu, this.breakpointSupportsCondition, this.breakpointItemType),
      new ge(
        this.menu,
        this.breakpointSupportsCondition,
        this.breakpointItemType,
        this.debugService
      ),
      new be(this, this.debugService, this.contextViewService),
      this.instantiationService.createInstance(re, this.menu, this.breakpointSupportsCondition, this.breakpointItemType),
      this.instantiationService.createInstance(ce),
      new fe(this, this.debugService, this.contextViewService, this.labelService),
      this.instantiationService.createInstance(de)
    ], {
      identityProvider: { getId: (n) => n.getId() },
      multipleSelectionSupport: !1,
      keyboardNavigationLabelProvider: { getKeyboardNavigationLabel: (n) => n },
      accessibilityProvider: new Ui(this.debugService, this.labelService),
      overrideStyles: {
        listBackground: this.getBackgroundColor()
      }
    }), ve.bindTo(this.list.contextKeyService), this._register(this.list.onContextMenu(this.onListContextMenu, this)), this.list.onMouseMiddleClick(async ({ element: n }) => {
      n instanceof y ? await this.debugService.removeBreakpoints(n.getId()) : n instanceof E ? await this.debugService.removeFunctionBreakpoints(n.getId()) : n instanceof A ? await this.debugService.removeDataBreakpoints(n.getId()) : n instanceof N && await this.debugService.removeInstructionBreakpoints(n.instructionReference);
    }), this._register(this.list.onDidOpen(async (n) => {
      var s;
      n.element && (n.browserEvent instanceof MouseEvent && n.browserEvent.button === 1 || (n.element instanceof y && Me(n.element, n.sideBySide, n.editorOptions.preserveFocus || !1, n.editorOptions.pinned || !n.editorOptions.preserveFocus, this.debugService, this.editorService), n.element instanceof N && (await this.editorService.openEditor(T.instance)).goToAddress(n.element.instructionReference, n.browserEvent instanceof MouseEvent && n.browserEvent.detail === 2), n.browserEvent instanceof MouseEvent && n.browserEvent.detail === 2 && n.element instanceof E && n.element !== ((s = this.inputBoxData) == null ? void 0 : s.breakpoint) && this.renderInputBox({ breakpoint: n.element, type: "name" })));
    })), this.list.splice(0, this.list.length, this.elements), this._register(this.onDidChangeBodyVisibility((n) => {
      n && (this.needsRefresh && this.onBreakpointsChange(), this.needsStateChange && this.onStateChange());
    }));
    const i = this.viewDescriptorService.getViewContainerModel(this.viewDescriptorService.getViewContainerByViewId(this.id));
    this._register(i.onDidChangeAllViewDescriptors(() => {
      this.updateSize();
    }));
  }
  renderHeaderTitle(e, t) {
    super.renderHeaderTitle(e, t);
    const i = f(e, m("span.breakpoint-warning"));
    this.hintContainer = this._register(new di(i, {
      supportIcons: !0,
      hoverDelegate: {
        showHover: (n, s) => this.hoverService.showHover({ content: n.content, target: this.hintContainer.element }, s),
        delay: this.configurationService.getValue("workbench.hover.delay")
      }
    })), qe(this.hintContainer.element);
  }
  focus() {
    var e;
    super.focus(), (e = this.list) == null || e.domFocus();
  }
  renderInputBox(e) {
    this._inputBoxData = e, this.onBreakpointsChange(), this._inputBoxData = void 0;
  }
  get inputBoxData() {
    return this._inputBoxData;
  }
  layoutBody(e, t) {
    var i;
    if (!this.ignoreLayout) {
      super.layoutBody(e, t), (i = this.list) == null || i.layout(e, t);
      try {
        this.ignoreLayout = !0, this.updateSize();
      } finally {
        this.ignoreLayout = !1;
      }
    }
  }
  onListContextMenu(e) {
    const t = e.element, i = t instanceof y ? "breakpoint" : t instanceof z ? "exceptionBreakpoint" : t instanceof E ? "functionBreakpoint" : t instanceof A ? "dataBreakpoint" : t instanceof N ? "instructionBreakpoint" : void 0;
    this.breakpointItemType.set(i);
    const n = this.debugService.getViewModel().focusedSession, s = t instanceof z ? t.supportsCondition : !n || !!n.capabilities.supportsConditionalBreakpoints;
    this.breakpointSupportsCondition.set(s);
    const a = [];
    ui(this.menu, { arg: e.element, shouldForwardArgs: !1 }, { primary: [], secondary: a }, "inline"), this.contextMenuService.showContextMenu({
      getAnchor: () => e.anchor,
      getActions: () => a,
      getActionsContext: () => t
    });
  }
  updateSize() {
    var i;
    const e = this.viewDescriptorService.getViewContainerModel(this.viewDescriptorService.getViewContainerByViewId(this.id)), t = (i = this.debugService.getViewModel().focusedSession) == null ? void 0 : i.getId();
    this.minimumBodySize = this.orientation === 0 ? We(this.debugService.getModel(), t, Vi) : 170, this.maximumBodySize = this.orientation === 0 && e.visibleViewDescriptors.length > 1 ? We(this.debugService.getModel(), t, Number.POSITIVE_INFINITY) : Number.POSITIVE_INFINITY;
  }
  updateBreakpointsHint(e = !1) {
    var a, r;
    if (!this.hintContainer)
      return;
    const t = (a = this.debugService.getViewModel().focusedSession) == null ? void 0 : a.configuration.type, i = t ? this.debugService.getAdapterManager().getDebugger(t) : void 0, n = (r = i == null ? void 0 : i.strings) == null ? void 0 : r[li.UnverifiedBreakpoints], s = n && this.debugService.getModel().getBreakpoints().filter((d) => {
      if (d.verified || !d.enabled)
        return !1;
      const u = this.languageService.guessLanguageIdByFilepathOrFirstLine(d.uri);
      return u && i.interestedInLanguage(u);
    });
    if (n && (s != null && s.length) && this.debugService.getModel().areBreakpointsActivated())
      if (e) {
        const d = new hi(void 0, { isTrusted: !0 }).appendMarkdown(n);
        this.hintContainer.setLabel("$(warning)", void 0, { title: { markdown: d, markdownNotSupportedFallback: n } }), pi(this.hintContainer.element);
      } else
        this.hintDelayer.schedule();
    else
      qe(this.hintContainer.element);
  }
  onBreakpointsChange() {
    if (this.isBodyVisible()) {
      if (this.updateSize(), this.list) {
        const e = this.list.getFocus()[0], t = e && !this.elements.includes(this.list.element(e));
        this.list.splice(0, this.list.length, this.elements), this.needsRefresh = !1, t && this.list.focusNth(Math.min(e, this.list.length - 1));
      }
      this.updateBreakpointsHint();
    } else
      this.needsRefresh = !0;
  }
  onStateChange() {
    if (this.isBodyVisible()) {
      this.needsStateChange = !1;
      const e = this.debugService.getViewModel().focusedThread;
      let t = !1;
      if (e && e.stoppedDetails && e.stoppedDetails.hitBreakpointIds && e.stoppedDetails.hitBreakpointIds.length > 0) {
        const i = e.stoppedDetails.hitBreakpointIds, s = this.elements.findIndex((a) => {
          const r = a.getIdFromAdapter(e.session.getId());
          return typeof r == "number" && i.indexOf(r) !== -1;
        });
        s >= 0 && (this.list.setFocus([s]), this.list.setSelection([s]), t = !0, this.autoFocusedIndex = s);
      }
      if (!t) {
        const i = this.list.getFocus(), n = this.list.getSelection();
        this.autoFocusedIndex >= 0 && gi(i, n) && i.indexOf(this.autoFocusedIndex) >= 0 && (this.list.setFocus([]), this.list.setSelection([])), this.autoFocusedIndex = -1;
      }
      this.updateBreakpointsHint();
    } else
      this.needsStateChange = !0;
  }
  get elements() {
    var n;
    const e = this.debugService.getModel(), t = (n = this.debugService.getViewModel().focusedSession) == null ? void 0 : n.getId();
    return e.getExceptionBreakpointsForSession(t).concat(e.getFunctionBreakpoints()).concat(e.getDataBreakpoints()).concat(e.getBreakpoints()).concat(e.getInstructionBreakpoints());
  }
};
ze = X([
  S(1, Ze),
  S(2, g),
  S(3, $t),
  S(4, Qt),
  S(5, Zt),
  S(6, R),
  S(7, ei),
  S(8, Ae),
  S(9, ti),
  S(10, ue),
  S(11, ii),
  S(12, ni),
  S(13, J),
  S(14, si),
  S(15, oi),
  S(16, et)
], ze);
class Pi {
  constructor(e) {
    this.view = e;
  }
  getHeight(e) {
    return 22;
  }
  getTemplateId(e) {
    var t, i;
    if (e instanceof y)
      return ae.ID;
    if (e instanceof E) {
      const n = (t = this.view.inputBoxData) == null ? void 0 : t.breakpoint;
      return !e.name || n && n.getId() === e.getId() ? fe.ID : re.ID;
    }
    if (e instanceof z) {
      const n = (i = this.view.inputBoxData) == null ? void 0 : i.breakpoint;
      return n && n.getId() === e.getId() ? be.ID : ge.ID;
    }
    return e instanceof A ? ce.ID : e instanceof N ? de.ID : "";
  }
}
const we = /* @__PURE__ */ new Map();
let ae = class kt {
  constructor(e, t, i, n, s) {
    this.menu = e, this.breakpointSupportsCondition = t, this.breakpointItemType = i, this.debugService = n, this.labelService = s;
  }
  get templateId() {
    return kt.ID;
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null);
    t.toDispose = [], t.breakpoint = f(e, m(".breakpoint")), t.icon = m(".icon"), t.checkbox = U(t.toDispose), t.toDispose.push(P(t.checkbox, "change", (n) => {
      this.debugService.enableOrDisableBreakpoints(!t.context.enabled, t.context);
    })), f(t.breakpoint, t.icon), f(t.breakpoint, t.checkbox), t.name = f(t.breakpoint, m("span.name")), t.filePath = f(t.breakpoint, m("span.file-path")), t.actionBar = new Ie(t.breakpoint), t.toDispose.push(t.actionBar);
    const i = f(t.breakpoint, m(".line-number-container"));
    return t.lineNumber = f(i, m("span.line-number.monaco-count-badge")), t;
  }
  renderElement(e, t, i) {
    i.context = e, i.breakpoint.classList.toggle("disabled", !this.debugService.getModel().areBreakpointsActivated()), i.name.textContent = W(e.uri), i.lineNumber.textContent = e.lineNumber.toString(), e.column && (i.lineNumber.textContent += `:${e.column}`), i.filePath.textContent = this.labelService.getUriLabel(it(e.uri), { relative: !0 }), i.checkbox.checked = e.enabled;
    const { message: n, icon: s } = te(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), e, this.labelService);
    i.icon.className = he.asClassName(s), i.breakpoint.title = e.message || n || "", (this.debugService.state === 3 || this.debugService.state === 2) && !e.verified && i.breakpoint.classList.add("disabled");
    const r = [], d = this.debugService.getViewModel().focusedSession;
    this.breakpointSupportsCondition.set(!d || !!d.capabilities.supportsConditionalBreakpoints), this.breakpointItemType.set("breakpoint"), Le(this.menu, { arg: e, shouldForwardArgs: !0 }, { primary: r, secondary: [] }, "inline"), i.actionBar.clear(), i.actionBar.push(r, { icon: !0, label: !1 }), we.set(e.getId(), i.actionBar.domNode);
  }
  disposeTemplate(e) {
    F(e.toDispose);
  }
};
ae.ID = "breakpoints";
ae = X([
  S(3, g),
  S(4, J)
], ae);
class ge {
  constructor(e, t, i, n) {
    this.menu = e, this.breakpointSupportsCondition = t, this.breakpointItemType = i, this.debugService = n;
  }
  get templateId() {
    return ge.ID;
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return t.toDispose = [], t.breakpoint = f(e, m(".breakpoint")), t.checkbox = U(t.toDispose), t.toDispose.push(P(t.checkbox, "change", (i) => {
      this.debugService.enableOrDisableBreakpoints(!t.context.enabled, t.context);
    })), f(t.breakpoint, t.checkbox), t.name = f(t.breakpoint, m("span.name")), t.condition = f(t.breakpoint, m("span.condition")), t.breakpoint.classList.add("exception"), t.actionBar = new Ie(t.breakpoint), t.toDispose.push(t.actionBar), t;
  }
  renderElement(e, t, i) {
    i.context = e, i.name.textContent = e.label || `${e.filter} exceptions`, i.breakpoint.title = e.verified ? e.description || i.name.textContent : e.message || c("unverifiedExceptionBreakpoint", "Unverified Exception Breakpoint"), i.breakpoint.classList.toggle("disabled", !e.verified), i.checkbox.checked = e.enabled, i.condition.textContent = e.condition || "", i.condition.title = c(
      "expressionCondition",
      "Expression condition: {0}",
      e.condition
    );
    const n = [];
    this.breakpointSupportsCondition.set(e.supportsCondition), this.breakpointItemType.set("exceptionBreakpoint"), Le(this.menu, { arg: e, shouldForwardArgs: !0 }, { primary: n, secondary: [] }, "inline"), i.actionBar.clear(), i.actionBar.push(n, { icon: !0, label: !1 }), we.set(e.getId(), i.actionBar.domNode);
  }
  disposeTemplate(e) {
    F(e.toDispose);
  }
}
ge.ID = "exceptionbreakpoints";
let re = class vt {
  constructor(e, t, i, n, s) {
    this.menu = e, this.breakpointSupportsCondition = t, this.breakpointItemType = i, this.debugService = n, this.labelService = s;
  }
  get templateId() {
    return vt.ID;
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return t.toDispose = [], t.breakpoint = f(e, m(".breakpoint")), t.icon = m(".icon"), t.checkbox = U(t.toDispose), t.toDispose.push(P(t.checkbox, "change", (i) => {
      this.debugService.enableOrDisableBreakpoints(!t.context.enabled, t.context);
    })), f(t.breakpoint, t.icon), f(t.breakpoint, t.checkbox), t.name = f(t.breakpoint, m("span.name")), t.condition = f(t.breakpoint, m("span.condition")), t.actionBar = new Ie(t.breakpoint), t.toDispose.push(t.actionBar), t;
  }
  renderElement(e, t, i) {
    i.context = e, i.name.textContent = e.name;
    const { icon: n, message: s } = te(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), e, this.labelService);
    i.icon.className = he.asClassName(n), i.icon.title = s || "", i.checkbox.checked = e.enabled, i.breakpoint.title = s || "", e.condition && e.hitCondition ? i.condition.textContent = c(
      "expressionAndHitCount",
      "Expression: {0} | Hit Count: {1}",
      e.condition,
      e.hitCondition
    ) : i.condition.textContent = e.condition || e.hitCondition || "";
    const a = this.debugService.getViewModel().focusedSession;
    i.breakpoint.classList.toggle("disabled", a && !a.capabilities.supportsFunctionBreakpoints || !this.debugService.getModel().areBreakpointsActivated()), a && !a.capabilities.supportsFunctionBreakpoints && (i.breakpoint.title = c(
      "functionBreakpointsNotSupported",
      "Function breakpoints are not supported by this debug type"
    ));
    const r = [];
    this.breakpointSupportsCondition.set(!a || !!a.capabilities.supportsConditionalBreakpoints), this.breakpointItemType.set("functionBreakpoint"), Le(this.menu, { arg: e, shouldForwardArgs: !0 }, { primary: r, secondary: [] }, "inline"), i.actionBar.clear(), i.actionBar.push(r, { icon: !0, label: !1 }), we.set(e.getId(), i.actionBar.domNode);
  }
  disposeTemplate(e) {
    F(e.toDispose);
  }
};
re.ID = "functionbreakpoints";
re = X([
  S(3, g),
  S(4, J)
], re);
let ce = class It {
  constructor(e, t) {
    this.debugService = e, this.labelService = t;
  }
  get templateId() {
    return It.ID;
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return t.breakpoint = f(e, m(".breakpoint")), t.toDispose = [], t.icon = m(".icon"), t.checkbox = U(t.toDispose), t.toDispose.push(P(t.checkbox, "change", (i) => {
      this.debugService.enableOrDisableBreakpoints(!t.context.enabled, t.context);
    })), f(t.breakpoint, t.icon), f(t.breakpoint, t.checkbox), t.name = f(t.breakpoint, m("span.name")), t.accessType = f(t.breakpoint, m("span.access-type")), t;
  }
  renderElement(e, t, i) {
    i.context = e, i.name.textContent = e.description;
    const { icon: n, message: s } = te(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), e, this.labelService);
    i.icon.className = he.asClassName(n), i.icon.title = s || "", i.checkbox.checked = e.enabled, i.breakpoint.title = s || "";
    const a = this.debugService.getViewModel().focusedSession;
    if (i.breakpoint.classList.toggle("disabled", a && !a.capabilities.supportsDataBreakpoints || !this.debugService.getModel().areBreakpointsActivated()), a && !a.capabilities.supportsDataBreakpoints && (i.breakpoint.title = c(
      "dataBreakpointsNotSupported",
      "Data breakpoints are not supported by this debug type"
    )), e.accessType) {
      const r = e.accessType === "read" ? c("read", "Read") : e.accessType === "write" ? c("write", "Write") : c("access", "Access");
      i.accessType.textContent = r;
    } else
      i.accessType.textContent = "";
  }
  disposeTemplate(e) {
    F(e.toDispose);
  }
};
ce.ID = "databreakpoints";
ce = X([
  S(0, g),
  S(1, J)
], ce);
let de = class Ct {
  constructor(e, t) {
    this.debugService = e, this.labelService = t;
  }
  get templateId() {
    return Ct.ID;
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return t.toDispose = [], t.breakpoint = f(e, m(".breakpoint")), t.icon = m(".icon"), t.checkbox = U(t.toDispose), t.toDispose.push(P(t.checkbox, "change", (i) => {
      this.debugService.enableOrDisableBreakpoints(!t.context.enabled, t.context);
    })), f(t.breakpoint, t.icon), f(t.breakpoint, t.checkbox), t.name = f(t.breakpoint, m("span.name")), t.address = f(t.breakpoint, m("span.file-path")), t.actionBar = new Ie(t.breakpoint), t.toDispose.push(t.actionBar), t;
  }
  renderElement(e, t, i) {
    i.context = e, i.breakpoint.classList.toggle("disabled", !this.debugService.getModel().areBreakpointsActivated()), i.name.textContent = e.instructionReference, i.checkbox.checked = e.enabled;
    const { message: n, icon: s } = te(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), e, this.labelService);
    i.icon.className = he.asClassName(s), i.breakpoint.title = e.message || n || "", (this.debugService.state === 3 || this.debugService.state === 2) && !e.verified && i.breakpoint.classList.add("disabled");
  }
  disposeTemplate(e) {
    F(e.toDispose);
  }
};
de.ID = "instructionBreakpoints";
de = X([
  S(0, g),
  S(1, J)
], de);
class fe {
  constructor(e, t, i, n) {
    this.view = e, this.debugService = t, this.contextViewService = i, this.labelService = n;
  }
  get templateId() {
    return fe.ID;
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null), i = [], n = f(e, m(".breakpoint"));
    t.icon = m(".icon"), t.checkbox = U(i), f(n, t.icon), f(n, t.checkbox), this.view.breakpointInputFocused.set(!0);
    const s = f(n, m(".inputBoxContainer")), a = new nt(
      s,
      this.contextViewService,
      { inputBoxStyles: st }
    ), r = (d) => {
      t.updating = !0;
      try {
        this.view.breakpointInputFocused.set(!1);
        const u = t.breakpoint.getId();
        d ? (t.type === "name" && this.debugService.updateFunctionBreakpoint(u, { name: a.value }), t.type === "condition" && this.debugService.updateFunctionBreakpoint(u, { condition: a.value }), t.type === "hitCount" && this.debugService.updateFunctionBreakpoint(u, { hitCondition: a.value })) : t.type === "name" && !t.breakpoint.name ? this.debugService.removeFunctionBreakpoints(u) : this.view.renderInputBox(void 0);
      } finally {
        t.updating = !1;
      }
    };
    return i.push(P(a.inputElement, "keydown", (d) => {
      const u = d.equals(9), p = d.equals(3);
      (u || p) && (d.preventDefault(), d.stopPropagation(), r(p));
    })), i.push(ot(a.inputElement, "blur", () => {
      t.updating || r(!!a.value);
    })), t.inputBox = a, t.toDispose = i, t;
  }
  renderElement(e, t, i) {
    var d;
    i.breakpoint = e, i.type = ((d = this.view.inputBoxData) == null ? void 0 : d.type) || "name";
    const { icon: n, message: s } = te(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), e, this.labelService);
    i.icon.className = he.asClassName(n), i.icon.title = s || "", i.checkbox.checked = e.enabled, i.checkbox.disabled = !0, i.inputBox.value = e.name || "";
    let a = c("functionBreakpointPlaceholder", "Function to break on"), r = c("functionBreakPointInputAriaLabel", "Type function breakpoint.");
    i.type === "condition" ? (i.inputBox.value = e.condition || "", a = c(
      "functionBreakpointExpressionPlaceholder",
      "Break when expression evaluates to true"
    ), r = c(
      "functionBreakPointExpresionAriaLabel",
      "Type expression. Function breakpoint will break when expression evaluates to true"
    )) : i.type === "hitCount" && (i.inputBox.value = e.hitCondition || "", a = c("functionBreakpointHitCountPlaceholder", "Break when hit count is met"), r = c(
      "functionBreakPointHitCountAriaLabel",
      "Type hit count. Function breakpoint will break when hit count is met."
    )), i.inputBox.setAriaLabel(r), i.inputBox.setPlaceHolder(a), setTimeout(() => {
      i.inputBox.focus(), i.inputBox.select();
    }, 0);
  }
  disposeTemplate(e) {
    F(e.toDispose);
  }
}
fe.ID = "functionbreakpointinput";
class be {
  constructor(e, t, i) {
    this.view = e, this.debugService = t, this.contextViewService = i;
  }
  get templateId() {
    return be.ID;
  }
  renderTemplate(e) {
    const t = /* @__PURE__ */ Object.create(null), i = [], n = f(e, m(".breakpoint"));
    n.classList.add("exception"), t.checkbox = U(i), f(n, t.checkbox), this.view.breakpointInputFocused.set(!0);
    const s = f(n, m(".inputBoxContainer")), a = new nt(s, this.contextViewService, {
      ariaLabel: c("exceptionBreakpointAriaLabel", "Type exception breakpoint condition"),
      inputBoxStyles: st
    }), r = (d) => {
      this.view.breakpointInputFocused.set(!1);
      let u = t.breakpoint.condition;
      d && (u = a.value !== "" ? a.value : void 0), this.debugService.setExceptionBreakpointCondition(t.breakpoint, u);
    };
    return i.push(P(a.inputElement, "keydown", (d) => {
      const u = d.equals(9), p = d.equals(3);
      (u || p) && (d.preventDefault(), d.stopPropagation(), r(p));
    })), i.push(ot(a.inputElement, "blur", () => {
      setTimeout(() => {
        r(!0);
      });
    })), t.inputBox = a, t.toDispose = i, t;
  }
  renderElement(e, t, i) {
    const n = e.conditionDescription || c(
      "exceptionBreakpointPlaceholder",
      "Break when expression evaluates to true"
    );
    i.inputBox.setPlaceHolder(n), i.breakpoint = e, i.checkbox.checked = e.enabled, i.checkbox.disabled = !0, i.inputBox.value = e.condition || "", setTimeout(() => {
      i.inputBox.focus(), i.inputBox.select();
    }, 0);
  }
  disposeTemplate(e) {
    F(e.toDispose);
  }
}
be.ID = "exceptionbreakpointinput";
class Ui {
  constructor(e, t) {
    this.debugService = e, this.labelService = t;
  }
  getWidgetAriaLabel() {
    return c("breakpoints", "Breakpoints");
  }
  getRole() {
    return "checkbox";
  }
  isChecked(e) {
    return e.enabled;
  }
  getAriaLabel(e) {
    if (e instanceof z)
      return e.toString();
    const { message: t } = te(this.debugService.state, this.debugService.getModel().areBreakpointsActivated(), e, this.labelService), i = e.toString();
    return t ? `${i}, ${t}` : i;
  }
}
function Me(o, e, t, i, n, s) {
  if (o.uri.scheme === G && n.state === 0)
    return Promise.resolve(void 0);
  const a = o.endLineNumber ? {
    startLineNumber: o.lineNumber,
    endLineNumber: o.endLineNumber,
    startColumn: o.column || 1,
    endColumn: o.endColumn || 1073741824
  } : {
    startLineNumber: o.lineNumber,
    startColumn: o.column || 1,
    endLineNumber: o.lineNumber,
    endColumn: o.column || 1073741824
  };
  return s.openEditor({
    resource: o.uri,
    options: {
      preserveFocus: t,
      selection: a,
      revealIfOpened: !0,
      selectionRevealType: 1,
      pinned: i
    }
  }, e ? Je : Ye);
}
function te(o, e, t, i) {
  const n = o === 3 || o === 2, s = t instanceof A ? St : t instanceof E ? bt : t.logMessage ? _e : ft;
  if (!t.enabled || !e)
    return {
      icon: s.disabled,
      message: t.logMessage ? c("disabledLogpoint", "Disabled Logpoint") : c("disabledBreakpoint", "Disabled Breakpoint")
    };
  const a = (d) => "message" in t && t.message ? d.concat(", " + t.message) : d;
  if (n && !t.verified)
    return {
      icon: s.unverified,
      message: "message" in t && t.message ? t.message : t.logMessage ? c("unverifiedLogpoint", "Unverified Logpoint") : c("unverifiedBreakpoint", "Unverified Breakpoint"),
      showAdapterUnverifiedMessage: !0
    };
  if (t instanceof A)
    return t.supported ? {
      icon: s.regular,
      message: t.message || c("dataBreakpoint", "Data Breakpoint")
    } : {
      icon: s.unverified,
      message: c(
        "dataBreakpointUnsupported",
        "Data breakpoints not supported by this debug type"
      )
    };
  if (t instanceof E) {
    if (!t.supported)
      return {
        icon: s.unverified,
        message: c(
          "functionBreakpointUnsupported",
          "Function breakpoints not supported by this debug type"
        )
      };
    const d = [];
    return d.push(t.message || c("functionBreakpoint", "Function Breakpoint")), t.condition && d.push(c("expression", "Expression condition: {0}", t.condition)), t.hitCondition && d.push(c("hitCount", "Hit Count: {0}", t.hitCondition)), {
      icon: s.regular,
      message: a(d.join(`
`))
    };
  }
  if (t instanceof N) {
    if (!t.supported)
      return {
        icon: s.unverified,
        message: c(
          "instructionBreakpointUnsupported",
          "Instruction breakpoints not supported by this debug type"
        )
      };
    const d = [];
    return t.message ? d.push(t.message) : t.instructionReference ? d.push(c(
      "instructionBreakpointAtAddress",
      "Instruction breakpoint at address {0}",
      t.instructionReference
    )) : d.push(c("instructionBreakpoint", "Instruction breakpoint")), t.hitCondition && d.push(c("hitCount", "Hit Count: {0}", t.hitCondition)), {
      icon: s.regular,
      message: a(d.join(`
`))
    };
  }
  if (t.logMessage || t.condition || t.hitCondition) {
    const d = [];
    return t.supported ? (t.logMessage && d.push(c("logMessage", "Log Message: {0}", t.logMessage)), t.condition && d.push(c("expression", "Expression condition: {0}", t.condition)), t.hitCondition && d.push(c("hitCount", "Hit Count: {0}", t.hitCondition)), {
      icon: t.logMessage ? _e.regular : mt.regular,
      message: a(d.join(`
`))
    }) : {
      icon: Li,
      message: c(
        "breakpointUnsupported",
        "Breakpoints of this type are not supported by the debugger"
      )
    };
  }
  const r = "message" in t && t.message ? t.message : t instanceof y && i ? i.getUriLabel(t.uri) : c("breakpoint", "Breakpoint");
  return {
    icon: s.regular,
    message: r
  };
}
O(class extends V {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.addFunctionBreakpointAction",
      title: {
        value: c("addFunctionBreakpoint", "Add Function Breakpoint"),
        original: "Add Function Breakpoint",
        mnemonicTitle: c(
          { key: "miFunctionBreakpoint", comment: ["&& denotes a mnemonic"] },
          "&&Function Breakpoint..."
        )
      },
      f1: !0,
      icon: Ri,
      menu: [{
        id: k.ViewTitle,
        group: "navigation",
        order: 10,
        when: B.equals("view", Y)
      }, {
        id: k.MenubarNewBreakpointMenu,
        group: "1_breakpoints",
        order: 3,
        when: M
      }]
    });
  }
  run(o) {
    o.get(g).addFunctionBreakpoint();
  }
});
O(class extends V {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.toggleBreakpointsActivatedAction",
      title: { value: c("activateBreakpoints", "Toggle Activate Breakpoints"), original: "Toggle Activate Breakpoints" },
      f1: !0,
      icon: Mi,
      menu: {
        id: k.ViewTitle,
        group: "navigation",
        order: 20,
        when: B.equals("view", Y)
      }
    });
  }
  run(o) {
    const e = o.get(g);
    e.setBreakpointsActivated(!e.getModel().areBreakpointsActivated());
  }
});
O(class extends V {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.removeBreakpoint",
      title: c("removeBreakpoint", "Remove Breakpoint"),
      icon: l.removeClose,
      menu: [{
        id: k.DebugBreakpointsContext,
        group: "3_modification",
        order: 10,
        when: L.notEqualsTo("exceptionBreakpoint")
      }, {
        id: k.DebugBreakpointsContext,
        group: "inline",
        order: 20,
        when: L.notEqualsTo("exceptionBreakpoint")
      }]
    });
  }
  async run(o, e) {
    const t = o.get(g);
    e instanceof y ? await t.removeBreakpoints(e.getId()) : e instanceof E ? await t.removeFunctionBreakpoints(e.getId()) : e instanceof A ? await t.removeDataBreakpoints(e.getId()) : e instanceof N && await t.removeInstructionBreakpoints(e.instructionReference);
  }
});
O(class extends V {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.removeAllBreakpoints",
      title: {
        original: "Remove All Breakpoints",
        value: c("removeAllBreakpoints", "Remove All Breakpoints"),
        mnemonicTitle: c(
          { key: "miRemoveAllBreakpoints", comment: ["&& denotes a mnemonic"] },
          "Remove &&All Breakpoints"
        )
      },
      f1: !0,
      icon: Fi,
      menu: [{
        id: k.ViewTitle,
        group: "navigation",
        order: 30,
        when: B.equals("view", Y)
      }, {
        id: k.DebugBreakpointsContext,
        group: "3_modification",
        order: 20,
        when: B.and(ke, L.notEqualsTo("exceptionBreakpoint"))
      }, {
        id: k.MenubarDebugMenu,
        group: "5_breakpoints",
        order: 3,
        when: M
      }]
    });
  }
  run(o) {
    const e = o.get(g);
    e.removeBreakpoints(), e.removeFunctionBreakpoints(), e.removeDataBreakpoints(), e.removeInstructionBreakpoints();
  }
});
O(class extends V {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.enableAllBreakpoints",
      title: {
        original: "Enable All Breakpoints",
        value: c("enableAllBreakpoints", "Enable All Breakpoints"),
        mnemonicTitle: c(
          { key: "miEnableAllBreakpoints", comment: ["&& denotes a mnemonic"] },
          "&&Enable All Breakpoints"
        )
      },
      f1: !0,
      precondition: M,
      menu: [{
        id: k.DebugBreakpointsContext,
        group: "z_commands",
        order: 10,
        when: B.and(ke, L.notEqualsTo("exceptionBreakpoint"))
      }, {
        id: k.MenubarDebugMenu,
        group: "5_breakpoints",
        order: 1,
        when: M
      }]
    });
  }
  async run(o) {
    await o.get(g).enableOrDisableBreakpoints(!0);
  }
});
O(class extends V {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.disableAllBreakpoints",
      title: {
        original: "Disable All Breakpoints",
        value: c("disableAllBreakpoints", "Disable All Breakpoints"),
        mnemonicTitle: c(
          { key: "miDisableAllBreakpoints", comment: ["&& denotes a mnemonic"] },
          "Disable A&&ll Breakpoints"
        )
      },
      f1: !0,
      precondition: M,
      menu: [{
        id: k.DebugBreakpointsContext,
        group: "z_commands",
        order: 20,
        when: B.and(ke, L.notEqualsTo("exceptionBreakpoint"))
      }, {
        id: k.MenubarDebugMenu,
        group: "5_breakpoints",
        order: 2,
        when: M
      }]
    });
  }
  async run(o) {
    await o.get(g).enableOrDisableBreakpoints(!1);
  }
});
O(class extends V {
  constructor() {
    super({
      id: "workbench.debug.viewlet.action.reapplyBreakpointsAction",
      title: { value: c("reapplyAllBreakpoints", "Reapply All Breakpoints"), original: "Reapply All Breakpoints" },
      f1: !0,
      precondition: $,
      menu: [{
        id: k.DebugBreakpointsContext,
        group: "z_commands",
        order: 30,
        when: B.and(ke, L.notEqualsTo("exceptionBreakpoint"))
      }]
    });
  }
  async run(o) {
    await o.get(g).setBreakpointsActivated(!0);
  }
});
O(class extends Oe {
  constructor() {
    super({
      id: "debug.editBreakpoint",
      viewId: Y,
      title: c("editCondition", "Edit Condition..."),
      icon: l.edit,
      precondition: Ne,
      menu: [{
        id: k.DebugBreakpointsContext,
        group: "navigation",
        order: 10
      }, {
        id: k.DebugBreakpointsContext,
        group: "inline",
        order: 10
      }]
    });
  }
  async runInView(o, e, t) {
    var s;
    const i = o.get(g), n = o.get(R);
    if (t instanceof y) {
      const a = await Me(t, !1, !1, !0, i, n);
      if (a) {
        const r = a.getControl();
        le(r) && ((s = r.getContribution(ai)) == null || s.showBreakpointWidget(t.lineNumber, t.column));
      }
    } else if (t instanceof E) {
      const a = o.get(Ze), r = [
        new Ke("breakpoint.editCondition", c("editCondition", "Edit Condition..."), void 0, !0, async () => e.renderInputBox({ breakpoint: t, type: "condition" })),
        new Ke("breakpoint.editCondition", c("editHitCount", "Edit Hit Count..."), void 0, !0, async () => e.renderInputBox({ breakpoint: t, type: "hitCount" }))
      ], d = we.get(t.getId());
      d && a.showContextMenu({
        getActions: () => r,
        getAnchor: () => d,
        onHide: () => F(r)
      });
    } else
      e.renderInputBox({ breakpoint: t, type: "condition" });
  }
});
O(class extends Oe {
  constructor() {
    super({
      id: "debug.editFunctionBreakpoint",
      viewId: Y,
      title: c("editBreakpoint", "Edit Function Breakpoint..."),
      menu: [{
        id: k.DebugBreakpointsContext,
        group: "1_breakpoints",
        order: 10,
        when: L.isEqualTo("functionBreakpoint")
      }]
    });
  }
  runInView(o, e, t) {
    e.renderInputBox({ breakpoint: t, type: "name" });
  }
});
O(class extends Oe {
  constructor() {
    super({
      id: "debug.editFunctionBreakpointHitCount",
      viewId: Y,
      title: c("editHitCount", "Edit Hit Count..."),
      precondition: Ne,
      menu: [{
        id: k.DebugBreakpointsContext,
        group: "navigation",
        order: 20,
        when: L.isEqualTo("functionBreakpoint")
      }]
    });
  }
  runInView(o, e, t) {
    e.renderInputBox({ breakpoint: t, type: "hitCount" });
  }
});
async function Hi(o) {
  const e = o.get(Q), t = o.get(g), i = o.get(R), n = t.getModel().getSessions(!1), s = o.get(mi), a = o.get(et), r = o.get(J), d = new at(), u = e.createQuickPick();
  d.add(u), u.matchOnLabel = u.matchOnDescription = u.matchOnDetail = u.sortByLabel = !1, u.placeholder = c("moveFocusedView.selectView", "Search loaded scripts by name"), u.items = await Xe(u.value, n, i, s, a, r), d.add(u.onDidChangeValue(async () => {
    u.items = await Xe(u.value, n, i, s, a, r);
  })), d.add(u.onDidAccept(() => {
    u.selectedItems[0].accept(), u.hide(), d.dispose();
  })), u.show();
}
async function Ki(o, e, t, i, n, s) {
  const a = [];
  return a.push({ type: "separator", label: o.name }), (await o.getLoadedSources()).forEach((d) => {
    const u = qi(d, e, t, i, n, s);
    u && a.push(u);
  }), a;
}
async function Xe(o, e, t, i, n, s) {
  const a = [], r = await Promise.all(e.map(
    (d) => Ki(d, o, t, i, n, s)
  ));
  for (const d of r)
    for (const u of d)
      a.push(u);
  return a;
}
function qi(o, e, t, i, n, s) {
  const a = s.getUriBasenameLabel(o.uri), r = s.getUriLabel(it(o.uri)), d = ye(e, a, !0), u = ye(e, r, !0);
  if (d || u)
    return {
      label: a,
      description: r === "." ? void 0 : r,
      highlights: { label: d ?? void 0, description: u ?? void 0 },
      iconClasses: Si(i, n, o.uri),
      accept: () => {
        o.available && o.openInEditor(t, { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 });
      }
    };
}
async function Gi(o, e) {
  const t = o.get(Q), i = o.get(g), n = o.get(Re), s = o.get(ki), a = new at(), r = t.createQuickPick();
  a.add(r), r.matchOnLabel = r.matchOnDescription = r.matchOnDetail = r.sortByLabel = !1, r.placeholder = c("moveFocusedView.selectView", "Search debug sessions by name");
  const d = je(r.value, e, i, n, s);
  r.items = d.picks, r.activeItems = d.activeItems, a.add(r.onDidChangeValue(async () => {
    r.items = je(r.value, e, i, n, s).picks;
  })), a.add(r.onDidAccept(() => {
    r.selectedItems[0].accept(), r.hide(), a.dispose();
  })), r.show();
}
function je(o, e, t, i, n) {
  const s = [], a = [], r = t.getViewModel().focusedSession, d = t.getModel().getSessions(!1), u = [];
  d.forEach((b) => {
    b.compact && b.parentSession && a.push(b.parentSession);
  }), d.forEach((b) => {
    const C = a.includes(b);
    if (b.parentSession || s.push({ type: "separator", label: C ? b.name : void 0 }), !C) {
      const _ = zi(b, o, t, i);
      _ && (s.push(_), b.getId() === (r == null ? void 0 : r.getId()) && u.push(_));
    }
  }), s.length && s.push({ type: "separator" });
  const p = c("workbench.action.debug.startDebug", "Start a New Debug Session");
  return s.push({
    label: `$(plus) ${p}`,
    ariaLabel: p,
    accept: () => n.executeCommand(e)
  }), { picks: s, activeItems: u };
}
function Wi(o) {
  var s;
  const e = o.configuration.name.length ? o.configuration.name : o.name, t = o.compact || (s = o.parentSession) == null ? void 0 : s.configuration.name;
  let i = "", n = "";
  return t && (n = c(
    "workbench.action.debug.spawnFrom",
    "Session {0} spawned from {1}",
    e,
    t
  ), i = t), { label: e, description: i, ariaLabel: n };
}
function zi(o, e, t, i, n) {
  const s = Wi(o), a = ye(e, s.label, !0);
  if (a)
    return {
      label: s.label,
      description: s.description,
      ariaLabel: s.ariaLabel,
      highlights: { label: a },
      accept: () => {
        t.focusStackFrame(void 0, void 0, o, { explicit: !0 }), i.isViewVisible(oe) || i.openView(oe, !0);
      }
    };
}
const ms = "debug.addConfiguration", Bt = "editor.debug.action.toggleInlineBreakpoint", Xi = "debug.copyStackTrace", ji = "workbench.action.debug.reverseContinue", Ji = "workbench.action.debug.stepBack", Yi = "workbench.action.debug.restart", $i = "workbench.action.debug.terminateThread", Qi = "workbench.action.debug.stepOver", Zi = "workbench.action.debug.stepInto", en = "workbench.action.debug.stepIntoTarget", tn = "workbench.action.debug.stepOut", nn = "workbench.action.debug.pause", sn = "workbench.action.debug.disconnect", on = "workbench.action.debug.disconnectAndSuspend", an = "workbench.action.debug.stop", rn = "workbench.action.debug.restartFrame", cn = "workbench.action.debug.continue", dn = "workbench.debug.action.focusRepl", wt = "debug.jumpToCursor", un = "workbench.action.debug.focusProcess", Dt = "workbench.action.debug.selectandstart", ln = "workbench.action.debug.selectDebugConsole", hn = "workbench.action.debug.selectDebugSession", Ss = "workbench.action.debug.configure", ks = "workbench.action.debug.start", pn = "debug.renameWatchExpression", gn = "debug.setWatchExpression", fn = "debug.removeWatchExpression", bn = "workbench.action.debug.nextConsole", mn = "workbench.action.debug.prevConsole", Sn = "workbench.action.debug.showLoadedScripts", kn = "workbench.action.debug.callStackTop", vn = "workbench.action.debug.callStackBottom", In = "workbench.action.debug.callStackUp", Cn = "workbench.action.debug.callStackDown", yt = { original: "Debug", value: c("debug", "Debug") }, vs = { value: c("restartDebug", "Restart"), original: "Restart" }, Is = { value: c("stepOverDebug", "Step Over"), original: "Step Over" }, Cs = { value: c("stepIntoDebug", "Step Into"), original: "Step Into" }, Bs = { value: c("stepIntoTargetDebug", "Step Into Target"), original: "Step Into Target" }, ws = { value: c("stepOutDebug", "Step Out"), original: "Step Out" }, Ds = { value: c("pauseDebug", "Pause"), original: "Pause" }, ys = { value: c("disconnect", "Disconnect"), original: "Disconnect" }, Es = { value: c("disconnectSuspend", "Disconnect and Suspend"), original: "Disconnect and Suspend" }, xs = { value: c("stop", "Stop"), original: "Stop" }, _s = { value: c("continueDebug", "Continue"), original: "Continue" }, Ts = { value: c("focusSession", "Focus Session"), original: "Focus Session" }, As = { value: c("selectAndStartDebugging", "Select and Start Debugging"), original: "Select and Start Debugging" }, Os = c("openLaunchJson", "Open '{0}'", "launch.json"), Ns = { value: c("nextDebugConsole", "Focus Next Debug Console"), original: "Focus Next Debug Console" }, Ls = { value: c("prevDebugConsole", "Focus Previous Debug Console"), original: "Focus Previous Debug Console" }, Rs = { value: c("openLoadedScript", "Open Loaded Script..."), original: "Open Loaded Script..." }, Fs = { value: c("callStackTop", "Navigate to Top of Call Stack"), original: "Navigate to Top of Call Stack" }, Ms = { value: c("callStackBottom", "Navigate to Bottom of Call Stack"), original: "Navigate to Bottom of Call Stack" }, Vs = { value: c("callStackUp", "Navigate Up Call Stack"), original: "Navigate Up Call Stack" }, Ps = { value: c("callStackDown", "Navigate Down Call Stack"), original: "Navigate Down Call Stack" }, Us = { value: c("selectDebugConsole", "Select Debug Console"), original: "Select Debug Console" }, Hs = { value: c("selectDebugSession", "Select Debug Session"), original: "Select Debug Session" }, Bn = "debug ", wn = "debug consoles ";
function Dn(o) {
  return o && typeof o.sessionId == "string" && typeof o.threadId == "string";
}
async function x(o, e, t) {
  const i = o.get(g);
  let n;
  if (Dn(e)) {
    const s = i.getModel().getSession(e.sessionId);
    s && (n = s.getAllThreads().find((a) => a.getId() === e.threadId));
  } else if (Ve(e)) {
    const s = i.getModel().getSession(e.sessionId);
    if (s) {
      const a = s.getAllThreads();
      n = a.length > 0 ? a[0] : void 0;
    }
  }
  if (!n && (n = i.getViewModel().focusedThread, !n)) {
    const s = i.getViewModel().focusedSession, a = s ? s.getAllThreads() : void 0;
    n = a && a.length ? a[0] : void 0;
  }
  n && await t(n);
}
function yn(o) {
  return o && typeof o.sessionId == "string" && typeof o.threadId == "string" && typeof o.frameId == "string";
}
function Et(o, e) {
  if (yn(e)) {
    const t = o.getModel().getSession(e.sessionId);
    if (t) {
      const i = t.getAllThreads().find((n) => n.getId() === e.threadId);
      if (i)
        return i.getCallStack().find((n) => n.getId() === e.frameId);
    }
  } else
    return o.getViewModel().focusedStackFrame;
}
function Ve(o) {
  return o && typeof o.sessionId == "string";
}
async function xt(o, e) {
  const t = o.get(g), i = o.get(Re), n = t.getModel().getSessions(!0).filter((r) => r.hasSeparateRepl());
  let s = t.getViewModel().focusedSession, a = 0;
  if (n.length > 0 && s) {
    for (; s && !s.hasSeparateRepl(); )
      s = s.parentSession;
    if (s) {
      const r = n.indexOf(s);
      e ? a = r === n.length - 1 ? 0 : r + 1 : a = r === 0 ? n.length - 1 : r - 1;
    }
  }
  await t.focusStackFrame(void 0, void 0, n[a], { explicit: !0 }), i.isViewVisible(oe) || await i.openView(oe, !0);
}
async function _t(o, e) {
  const t = o.getViewModel().focusedStackFrame;
  if (t) {
    let i = t.thread.getCallStack(), n = i.findIndex((a) => a.frameId === t.frameId), s;
    if (e) {
      if (n >= i.length - 1)
        if (t.thread.reachedEndOfCallStack) {
          At(o);
          return;
        } else
          await o.getModel().fetchCallstack(t.thread, 20), i = t.thread.getCallStack(), n = i.findIndex((a) => a.frameId === t.frameId);
      s = Te(!0, i, n);
    } else {
      if (n <= 0) {
        Tt(o);
        return;
      }
      s = Te(!1, i, n);
    }
    s && o.focusStackFrame(s);
  }
}
async function Tt(o) {
  const e = o.getViewModel().focusedThread;
  if (e) {
    await o.getModel().fetchCallstack(e);
    const t = e.getCallStack();
    if (t.length > 0) {
      const i = Te(!1, t, 0);
      i && o.focusStackFrame(i);
    }
  }
}
function At(o) {
  const e = o.getViewModel().focusedThread;
  e && o.focusStackFrame(e.getTopStackFrame());
}
function Te(o, e, t) {
  t >= e.length ? t = e.length - 1 : t < 0 && (t = 0);
  let i = t, n;
  do
    if (o ? i === e.length - 1 ? i = 0 : i++ : i === 0 ? i = e.length - 1 : i--, n = e[i], !(n.source.presentationHint === "deemphasize" || n.presentationHint === "deemphasize"))
      return n;
  while (i !== t);
}
I.registerCommand({
  id: Xi,
  handler: async (o, e, t) => {
    const i = o.get(vi), n = o.get(Ii), s = o.get(g), a = Et(s, t);
    if (a) {
      const r = i.getEOL(a.source.uri);
      await n.writeText(a.thread.getCallStack().map((d) => d.toString()).join(r));
    }
  }
});
I.registerCommand({
  id: ji,
  handler: async (o, e, t) => {
    await x(o, t, (i) => i.reverseContinue());
  }
});
I.registerCommand({
  id: Ji,
  handler: async (o, e, t) => {
    const i = o.get(ue);
    Ce.getValue(i) ? await x(o, t, (n) => n.stepBack("instruction")) : await x(o, t, (n) => n.stepBack());
  }
});
I.registerCommand({
  id: $i,
  handler: async (o, e, t) => {
    await x(o, t, (i) => i.terminate());
  }
});
I.registerCommand({
  id: wt,
  handler: async (o) => {
    const t = o.get(g).getViewModel().focusedStackFrame, n = o.get(R).activeTextEditorControl, s = o.get(rt), a = o.get(Q);
    if (t && le(n) && n.hasModel()) {
      const r = n.getPosition(), d = n.getModel().uri, u = t.thread.session.getSourceForUri(d);
      if (u) {
        const p = await t.thread.session.gotoTargets(u.raw, r.lineNumber, r.column), b = p == null ? void 0 : p.body.targets;
        if (b && b.length) {
          let C = b[0].id;
          if (b.length > 1) {
            const _ = b.map((K) => ({ label: K.label, _id: K.id })), H = await a.pick(_, { placeHolder: c("chooseLocation", "Choose the specific location") });
            if (!H)
              return;
            C = H._id;
          }
          return await t.thread.session.goto(t.thread.threadId, C).catch((_) => s.warn(_));
        }
      }
    }
    return s.warn(c(
      "noExecutableCode",
      "No executable code is associated at the current cursor position."
    ));
  }
});
I.registerCommand({
  id: kn,
  handler: async (o, e, t) => {
    const i = o.get(g);
    At(i);
  }
});
I.registerCommand({
  id: vn,
  handler: async (o, e, t) => {
    const i = o.get(g);
    await Tt(i);
  }
});
I.registerCommand({
  id: In,
  handler: async (o, e, t) => {
    const i = o.get(g);
    _t(i, !1);
  }
});
I.registerCommand({
  id: Cn,
  handler: async (o, e, t) => {
    const i = o.get(g);
    _t(i, !0);
  }
});
ct.appendMenuItem(k.EditorContext, {
  command: {
    id: wt,
    title: c("jumpToCursor", "Jump to Cursor"),
    category: yt
  },
  when: B.and(Ci, Be.editorTextFocus),
  group: "debug",
  order: 3
});
v.registerCommandAndKeybindingRule({
  id: bn,
  weight: 200 + 1,
  when: dt,
  primary: 2060,
  mac: { primary: 3166 },
  handler: async (o, e, t) => {
    xt(o, !0);
  }
});
v.registerCommandAndKeybindingRule({
  id: mn,
  weight: 200 + 1,
  when: dt,
  primary: 2059,
  mac: { primary: 3164 },
  handler: async (o, e, t) => {
    xt(o, !1);
  }
});
v.registerCommandAndKeybindingRule({
  id: Yi,
  weight: 200,
  primary: 3135,
  when: $,
  handler: async (o, e, t) => {
    const i = o.get(g), n = o.get(Ae);
    let s;
    if (Ve(t) ? s = i.getModel().getSession(t.sessionId) : s = i.getViewModel().focusedSession, s) {
      const a = n.getValue("debug").showSubSessionsInToolBar;
      for (; !a && s.lifecycleManagedByParent && s.parentSession; )
        s = s.parentSession;
      s.removeReplExpressions(), await i.restartSession(s);
    } else {
      const { launch: a, name: r } = i.getConfigurationManager().selectedConfiguration;
      await i.startDebugging(a, r, { noDebug: !1, startedByUser: !0 });
    }
  }
});
v.registerCommandAndKeybindingRule({
  id: Qi,
  weight: 200,
  primary: 68,
  secondary: ut ? [580] : void 0,
  when: Z.isEqualTo("stopped"),
  handler: async (o, e, t) => {
    const i = o.get(ue);
    Ce.getValue(i) ? await x(o, t, (n) => n.next("instruction")) : await x(o, t, (n) => n.next());
  }
});
const Ot = ut && Ti ? 581 : 69;
v.registerCommandAndKeybindingRule({
  id: Zi,
  weight: 200 + 10,
  primary: Ot,
  when: Z.notEqualsTo("inactive"),
  handler: async (o, e, t) => {
    const i = o.get(ue);
    Ce.getValue(i) ? await x(o, t, (n) => n.stepIn("instruction")) : await x(o, t, (n) => n.stepIn());
  }
});
v.registerCommandAndKeybindingRule({
  id: tn,
  weight: 200,
  primary: 1093,
  when: Z.isEqualTo("stopped"),
  handler: async (o, e, t) => {
    const i = o.get(ue);
    Ce.getValue(i) ? await x(o, t, (n) => n.stepOut("instruction")) : await x(o, t, (n) => n.stepOut());
  }
});
v.registerCommandAndKeybindingRule({
  id: nn,
  weight: 200 + 2,
  primary: 64,
  when: Z.isEqualTo("running"),
  handler: async (o, e, t) => {
    await x(o, t, (i) => i.pause());
  }
});
v.registerCommandAndKeybindingRule({
  id: en,
  primary: Ot | 2048,
  when: B.and(Bi, $, Z.isEqualTo("stopped")),
  weight: 200,
  handler: async (o, e, t) => {
    const i = o.get(Q), n = o.get(g), s = n.getViewModel().focusedSession, a = n.getViewModel().focusedStackFrame;
    if (!a || !s)
      return;
    const r = await o.get(R).openEditor({
      resource: a.source.uri,
      options: { revealIfOpened: !0 }
    });
    let d;
    if (r) {
      const p = r == null ? void 0 : r.getControl();
      le(p) && (d = p);
    }
    const u = i.createQuickPick();
    u.busy = !0, u.show(), u.onDidChangeActive(([p]) => {
      d && p && p.target.line !== void 0 && (d.revealLineInCenterIfOutsideViewport(p.target.line), d.setSelection({
        startLineNumber: p.target.line,
        startColumn: p.target.column || 1,
        endLineNumber: p.target.endLine || p.target.line,
        endColumn: p.target.endColumn || p.target.column || 1
      }));
    }), u.onDidAccept(() => {
      u.activeItems.length && s.stepIn(a.thread.threadId, u.activeItems[0].target.id);
    }), u.onDidHide(() => u.dispose()), s.stepInTargets(a.frameId).then((p) => {
      u.busy = !1, p != null && p.length ? u.items = p == null ? void 0 : p.map((b) => ({ target: b, label: b.label })) : u.placeholder = c("editor.debug.action.stepIntoTargets.none", "No step targets available");
    });
  }
});
async function Pe(o, e, t, i, n) {
  const s = o.get(g);
  let a;
  Ve(t) ? a = s.getModel().getSession(t.sessionId) : a = s.getViewModel().focusedSession;
  const d = o.get(Ae).getValue("debug").showSubSessionsInToolBar;
  for (; !d && a && a.lifecycleManagedByParent && a.parentSession; )
    a = a.parentSession;
  await s.stopSession(a, i, n);
}
v.registerCommandAndKeybindingRule({
  id: sn,
  weight: 200,
  primary: 1087,
  when: B.and(lt, $),
  handler: (o, e, t) => Pe(o, e, t, !0)
});
I.registerCommand({
  id: on,
  handler: (o, e, t) => Pe(o, e, t, !0, !0)
});
v.registerCommandAndKeybindingRule({
  id: an,
  weight: 200,
  primary: 1087,
  when: B.and(lt.toNegated(), $),
  handler: (o, e, t) => Pe(o, e, t, !1)
});
I.registerCommand({
  id: rn,
  handler: async (o, e, t) => {
    const i = o.get(g), n = o.get(rt), s = Et(i, t);
    if (s)
      try {
        await s.restart();
      } catch (a) {
        n.error(a);
      }
  }
});
v.registerCommandAndKeybindingRule({
  id: cn,
  weight: 200 + 10,
  primary: 63,
  when: Z.isEqualTo("stopped"),
  handler: async (o, e, t) => {
    await x(o, t, (i) => i.continue());
  }
});
I.registerCommand({
  id: Sn,
  handler: async (o) => {
    await Hi(o);
  }
});
I.registerCommand({
  id: dn,
  handler: async (o) => {
    await o.get(Re).openView(oe, !0);
  }
});
I.registerCommand({
  id: "debug.startFromConfig",
  handler: async (o, e) => {
    await o.get(g).startDebugging(void 0, e);
  }
});
I.registerCommand({
  id: un,
  handler: async (o, e) => {
    const t = o.get(g), i = o.get(R), n = t.getModel().getSessions().find((a) => a.parentSession === e && a.state === 2);
    n && e.state !== 2 && (e = n), await t.focusStackFrame(void 0, void 0, e, { explicit: !0 });
    const s = t.getViewModel().focusedStackFrame;
    s && await s.openInEditor(i, !0);
  }
});
I.registerCommand({
  id: Dt,
  handler: async (o) => {
    o.get(Q).quickAccess.show(Bn);
  }
});
I.registerCommand({
  id: ln,
  handler: async (o) => {
    o.get(Q).quickAccess.show(wn);
  }
});
I.registerCommand({
  id: hn,
  handler: async (o) => {
    Gi(o, Dt);
  }
});
v.registerCommandAndKeybindingRule({
  id: "debug.toggleBreakpoint",
  weight: 200 + 5,
  when: B.and(ve, wi.toNegated()),
  primary: 10,
  handler: (o) => {
    const e = o.get(ee), t = o.get(g), i = e.lastFocusedList;
    if (i instanceof Fe) {
      const n = i.getFocusedElements();
      n && n.length && t.enableOrDisableBreakpoints(!n[0].enabled, n[0]);
    }
  }
});
v.registerCommandAndKeybindingRule({
  id: "debug.enableOrDisableBreakpoint",
  weight: 200,
  primary: void 0,
  when: Be.editorTextFocus,
  handler: (o) => {
    const e = o.get(g), i = o.get(R).activeTextEditorControl;
    if (le(i)) {
      const n = i.getModel();
      if (n) {
        const s = i.getPosition();
        if (s) {
          const a = e.getModel().getBreakpoints({ uri: n.uri, lineNumber: s.lineNumber });
          a.length && e.enableOrDisableBreakpoints(!a[0].enabled, a[0]);
        }
      }
    }
  }
});
v.registerCommandAndKeybindingRule({
  id: pn,
  weight: 200 + 5,
  when: ht,
  primary: 60,
  mac: { primary: 3 },
  handler: (o, e) => {
    const t = o.get(g);
    if (!(e instanceof D)) {
      const n = o.get(ee).lastFocusedList;
      if (n) {
        const s = n.getFocus();
        Array.isArray(s) && s[0] instanceof D && (e = s[0]);
      }
    }
    e instanceof D && t.getViewModel().setSelectedExpression(e, !1);
  }
});
I.registerCommand({
  id: gn,
  handler: async (o, e) => {
    const t = o.get(g);
    (e instanceof D || e instanceof q) && t.getViewModel().setSelectedExpression(e, !0);
  }
});
v.registerCommandAndKeybindingRule({
  id: "debug.setVariable",
  weight: 200 + 5,
  when: Di,
  primary: 60,
  mac: { primary: 3 },
  handler: (o) => {
    const e = o.get(ee), t = o.get(g), i = e.lastFocusedList;
    if (i) {
      const n = i.getFocus();
      Array.isArray(n) && n[0] instanceof q && t.getViewModel().setSelectedExpression(n[0], !1);
    }
  }
});
v.registerCommandAndKeybindingRule({
  id: fn,
  weight: 200,
  when: B.and(ht, yi.toNegated()),
  primary: 20,
  mac: { primary: 2049 },
  handler: (o, e) => {
    const t = o.get(g);
    if (e instanceof D) {
      t.removeWatchExpressions(e.getId());
      return;
    }
    const n = o.get(ee).lastFocusedList;
    if (n) {
      let s = n.getFocus();
      if (Array.isArray(s) && s[0] instanceof D) {
        const a = n.getSelection();
        a && a.indexOf(s[0]) >= 0 && (s = a), s.forEach((r) => t.removeWatchExpressions(r.getId()));
      }
    }
  }
});
v.registerCommandAndKeybindingRule({
  id: "debug.removeBreakpoint",
  weight: 200,
  when: B.and(ve, tt.toNegated()),
  primary: 20,
  mac: { primary: 2049 },
  handler: (o) => {
    const e = o.get(ee), t = o.get(g), i = e.lastFocusedList;
    if (i instanceof Fe) {
      const n = i.getFocusedElements(), s = n.length ? n[0] : void 0;
      s instanceof y ? t.removeBreakpoints(s.getId()) : s instanceof E ? t.removeFunctionBreakpoints(s.getId()) : s instanceof A && t.removeDataBreakpoints(s.getId());
    }
  }
});
const En = (o) => {
  const e = o.get(g), i = o.get(R).activeTextEditorControl;
  if (le(i)) {
    const n = i.getPosition();
    if (n && i.hasModel() && e.canSetBreakpointsIn(i.getModel())) {
      const s = i.getModel().uri;
      e.getModel().getBreakpoints({ lineNumber: n.lineNumber, uri: s }).some(
        (r) => r.sessionAgnosticData.column === n.column || !r.column && n.column <= 1
      ) || e.addBreakpoints(s, [{ lineNumber: n.lineNumber, column: n.column > 1 ? n.column : void 0 }]);
    }
  }
};
v.registerCommandAndKeybindingRule({
  weight: 200,
  primary: 1091,
  when: Be.editorTextFocus,
  id: Bt,
  handler: En
});
ct.appendMenuItem(k.EditorContext, {
  command: {
    id: Bt,
    title: c("addInlineBreakpoint", "Add Inline Breakpoint"),
    category: yt
  },
  when: B.and($, Ei.toNegated(), Be.editorTextFocus),
  group: "debug",
  order: 1
});
v.registerCommandAndKeybindingRule({
  id: "debug.openBreakpointToSide",
  weight: 200,
  when: ve,
  primary: 2051,
  secondary: [515],
  handler: (o) => {
    const t = o.get(ee).lastFocusedList;
    if (t instanceof Fe) {
      const i = t.getFocusedElements();
      if (i.length && i[0] instanceof y)
        return Me(i[0], !0, !1, !0, o.get(g), o.get(R));
    }
  }
});
v.registerCommandAndKeybindingRule({
  id: "debug.openView",
  weight: 200,
  when: M.toNegated(),
  primary: 63,
  secondary: [2111],
  handler: async (o) => {
    await o.get(xi).openPaneComposite(_i, 0, !0);
  }
});
export {
  Es as $,
  ms as A,
  y as B,
  _s as C,
  Ss as D,
  w as E,
  E as F,
  cn as G,
  nn as H,
  N as I,
  sn as J,
  ys as K,
  xs as L,
  On as M,
  an as N,
  Is as O,
  Ds as P,
  Qi as Q,
  Cs as R,
  _n as S,
  Tn as T,
  Zi as U,
  q as V,
  ws as W,
  tn as X,
  Ji as Y,
  ji as Z,
  on as _,
  Os as a,
  fs as a$,
  zn as a0,
  un as a1,
  vs as a2,
  Yi as a3,
  Ts as a4,
  Oi as a5,
  Nn as a6,
  cs as a7,
  wn as a8,
  Dt as a9,
  In as aA,
  Ps as aB,
  Cn as aC,
  rn as aD,
  Xi as aE,
  pn as aF,
  gn as aG,
  fn as aH,
  ss as aI,
  Rn as aJ,
  Fn as aK,
  Mn as aL,
  Vn as aM,
  Pn as aN,
  Un as aO,
  ze as aP,
  Hn as aQ,
  yt as aR,
  Ns as aS,
  bn as aT,
  Ls as aU,
  mn as aV,
  Rs as aW,
  Sn as aX,
  Us as aY,
  Hs as aZ,
  hn as a_,
  Me as aa,
  An as ab,
  Ai as ac,
  gt as ad,
  Bn as ae,
  rs as af,
  ks as ag,
  pt as ah,
  ps as ai,
  ds as aj,
  gs as ak,
  hs as al,
  us as am,
  ln as an,
  $i as ao,
  Bs as ap,
  en as aq,
  dn as ar,
  wt as as,
  Bt as at,
  As as au,
  Fs as av,
  kn as aw,
  Ms as ax,
  vn as ay,
  Vs as az,
  z as b,
  ls as b0,
  A as c,
  as as d,
  D as e,
  Ge as f,
  T as g,
  Kn as h,
  qn as i,
  Li as j,
  ft as k,
  Wn as l,
  Gn as m,
  te as n,
  os as o,
  ts as p,
  jn as q,
  Jn as r,
  Yn as s,
  Xn as t,
  $n as u,
  Qn as v,
  Zn as w,
  is as x,
  ns as y,
  es as z
};