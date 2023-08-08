import { ek as z, fm as de, op as x, a3 as ie, cA as re, B as A, oq as L, or as g, br as b, os as J, ot as m, ou as $, ov as ye, ow as ae, ox as he, oy as I, oz as ee, _ as ne, a as S, od as fe, g as le, L as Ce, N as Ke, bO as ce, aQ as _e, D as F, E, bd as ge, a2 as j, nH as pe, nI as be, er as me, oA as te, bg as Se, e as ve, a1 as Le, aU as ke, dw as we, aL as B, jA as oe, oB as Ie, oC as Ae, nZ as De, X as Te, k as R, oD as Ee, oE as Ue } from "./index-6dabdcd0.js";
import "./workbench.contribution-b8bb6cc0.js";
function Ge(y) {
  const e = y, t = {};
  for (const o in e) {
    const s = e[o];
    if (s.length) {
      const a = s[0], r = s[1], n = s[2], c = s[3], f = Number(s[4]), l = s.length === 6 ? s[5] : void 0;
      t[o] = {
        value: a,
        vkey: l,
        withShift: r,
        withAltGr: n,
        withShiftAltGr: c,
        valueIsDeadKey: (f & 1) > 0,
        withShiftIsDeadKey: (f & 2) > 0,
        withAltGrIsDeadKey: (f & 4) > 0,
        withShiftAltGrIsDeadKey: (f & 8) > 0
      };
    } else
      t[o] = {
        value: "",
        valueIsDeadKey: !1,
        withShift: "",
        withShiftIsDeadKey: !1,
        withAltGr: "",
        withAltGrIsDeadKey: !1,
        withShiftAltGr: "",
        withShiftAltGrIsDeadKey: !1
      };
  }
  return t;
}
class W {
  constructor(e, t, o, s) {
    this.layout = e, this.secondaryLayouts = t, this.mapping = Ge(o), this.isUserKeyboardLayout = !!s, this.layout.isUserKeyboardLayout = !!s;
  }
  static createKeyboardLayoutFromDebugInfo(e, t, o) {
    const s = new W(e, [], {}, !0);
    return s.mapping = t, s;
  }
  update(e) {
    this.layout = e.layout, this.secondaryLayouts = e.secondaryLayouts, this.mapping = e.mapping, this.isUserKeyboardLayout = e.isUserKeyboardLayout, this.layout.isUserKeyboardLayout = e.isUserKeyboardLayout;
  }
  getScore(e) {
    let t = 0;
    for (const o in e) {
      if (z && (o === "Backslash" || o === "KeyQ") || de && (o === "Backspace" || o === "Escape"))
        continue;
      const s = this.mapping[o];
      s === void 0 && (t -= 1);
      const a = e[o];
      s && a && s.value !== a.value && (t -= 1);
    }
    return t;
  }
  equal(e) {
    return this.isUserKeyboardLayout !== e.isUserKeyboardLayout || x(this.layout) !== x(e.layout) ? !1 : this.fuzzyEqual(e.mapping);
  }
  fuzzyEqual(e) {
    for (const t in e) {
      if (z && (t === "Backslash" || t === "KeyQ"))
        continue;
      if (this.mapping[t] === void 0)
        return !1;
      const o = this.mapping[t], s = e[t];
      if (o.value !== s.value)
        return !1;
    }
    return !0;
  }
}
function Me(y) {
  const e = y.getValue("keyboard"), t = (e == null ? void 0 : e.dispatch) === "keyCode" ? 1 : 0, o = !!(e != null && e.mapAltGrToCtrlAlt);
  return { dispatch: t, mapAltGrToCtrlAlt: o };
}
const Pe = ie.as(re.Configuration), $e = {
  id: "keyboard",
  order: 15,
  type: "object",
  title: A("keyboardConfigurationTitle", "Keyboard"),
  properties: {
    "keyboard.dispatch": {
      scope: 1,
      type: "string",
      enum: ["code", "keyCode"],
      default: "code",
      markdownDescription: A(
        "dispatch",
        "Controls the dispatching logic for key presses to use either `code` (recommended) or `keyCode`."
      ),
      included: L === 2 || L === 3
    },
    "keyboard.mapAltGrToCtrlAlt": {
      scope: 1,
      type: "boolean",
      default: !1,
      markdownDescription: A(
        "mapAltGrToCtrlAlt",
        "Controls if the AltGraph+ modifier should be treated as Ctrl+Alt+."
      ),
      included: L === 1
    }
  }
};
Pe.registerConfiguration($e);
class xe {
  constructor(e) {
    this._actual = e, this._cache = /* @__PURE__ */ new Map();
  }
  dumpDebugInfo() {
    return this._actual.dumpDebugInfo();
  }
  resolveKeyboardEvent(e) {
    return this._actual.resolveKeyboardEvent(e);
  }
  resolveKeybinding(e) {
    const t = e.getHashCode(), o = this._cache.get(t);
    if (!o) {
      const s = this._actual.resolveKeybinding(e);
      return this._cache.set(t, s), s;
    }
    return o;
  }
}
class P extends ae {
  constructor(e, t) {
    super(1, t), this._mapper = e;
  }
  _getLabel(e) {
    return e.isDuplicateModifierCase() ? "" : this._mapper.getUILabelForKeyCode(e.keyCode);
  }
  _getUSLabelForKeybinding(e) {
    return e.isDuplicateModifierCase() ? "" : g.toString(e.keyCode);
  }
  getUSLabel() {
    return he.toLabel(this._os, this._chords, (e) => this._getUSLabelForKeybinding(e));
  }
  _getAriaLabel(e) {
    return e.isDuplicateModifierCase() ? "" : this._mapper.getAriaLabelForKeyCode(e.keyCode);
  }
  _getElectronAccelerator(e) {
    return this._mapper.getElectronAcceleratorForKeyBinding(e);
  }
  _getUserSettingsLabel(e) {
    if (e.isDuplicateModifierCase())
      return "";
    const t = this._mapper.getUserSettingsLabelForKeyCode(e.keyCode);
    return t && t.toLowerCase();
  }
  _isWYSIWYG(e) {
    return this.__isWYSIWYG(e.keyCode);
  }
  __isWYSIWYG(e) {
    if (e === 15 || e === 16 || e === 17 || e === 18)
      return !0;
    const t = this._mapper.getAriaLabelForKeyCode(e), o = this._mapper.getUserSettingsLabelForKeyCode(e);
    return t === o;
  }
  _getChordDispatch(e) {
    if (e.isModifierKey())
      return null;
    let t = "";
    return e.ctrlKey && (t += "ctrl+"), e.shiftKey && (t += "shift+"), e.altKey && (t += "alt+"), e.metaKey && (t += "meta+"), t += g.toString(e.keyCode), t;
  }
  _getSingleModifierChordDispatch(e) {
    return e.keyCode === 5 && !e.shiftKey && !e.altKey && !e.metaKey ? "ctrl" : e.keyCode === 4 && !e.ctrlKey && !e.altKey && !e.metaKey ? "shift" : e.keyCode === 6 && !e.ctrlKey && !e.shiftKey && !e.metaKey ? "alt" : e.keyCode === 57 && !e.ctrlKey && !e.shiftKey && !e.altKey ? "meta" : null;
  }
  static getProducedCharCode(e, t) {
    return t ? e.ctrlKey && e.shiftKey && e.altKey ? t.withShiftAltGr : e.ctrlKey && e.altKey ? t.withAltGr : e.shiftKey ? t.withShift : t.value : null;
  }
  static getProducedChar(e, t) {
    const o = this.getProducedCharCode(e, t);
    return o === null || o.length === 0 ? " --- " : "  " + o + "  ";
  }
}
class Fe {
  constructor(e, t, o) {
    this._isUSStandard = e, this._mapAltGrToCtrlAlt = o, this._keyCodeToLabel = [], this._scanCodeToKeyCode = [], this._keyCodeToLabel = [], this._keyCodeExists = [], this._keyCodeToLabel[0] = g.toString(0);
    for (let n = 0; n < 193; n++) {
      const c = m[n];
      c !== -1 && (this._scanCodeToKeyCode[n] = c, this._keyCodeToLabel[c] = g.toString(c), this._keyCodeExists[c] = !0);
    }
    const s = [];
    let a = !1;
    this._codeInfo = [];
    for (const n in t)
      if (t.hasOwnProperty(n)) {
        const c = b.toEnum(n);
        if (c === 0)
          continue;
        const f = t[n], l = m[c];
        if (l !== -1) {
          const _ = J[f.vkey] || 0;
          if (_ === 0 || l === _ || c !== 134)
            continue;
        }
        const i = f.value, u = f.withShift, h = f.withAltGr, K = f.withShiftAltGr, d = J[f.vkey] || 0, C = {
          scanCode: c,
          keyCode: d,
          value: i,
          withShift: u,
          withAltGr: h,
          withShiftAltGr: K
        };
        if (this._codeInfo[c] = C, this._scanCodeToKeyCode[c] = d, d === 0)
          continue;
        if (this._keyCodeExists[d] = !0, i.length === 0)
          this._keyCodeToLabel[d] = null;
        else if (i.length > 1)
          this._keyCodeToLabel[d] = i;
        else {
          const _ = i.charCodeAt(0);
          if (_ >= 97 && _ <= 122) {
            const v = 65 + (_ - 97);
            s[v] = !0, a = !0, this._keyCodeToLabel[d] = String.fromCharCode(65 + (_ - 97));
          } else
            _ >= 65 && _ <= 90 ? (s[_] = !0, a = !0, this._keyCodeToLabel[d] = i) : this._keyCodeToLabel[d] = i;
        }
      }
    const r = (n, c) => {
      s[n] || (this._keyCodeToLabel[c] = String.fromCharCode(n));
    };
    if (r(65, 31), r(66, 32), r(67, 33), r(68, 34), r(69, 35), r(70, 36), r(71, 37), r(72, 38), r(73, 39), r(74, 40), r(75, 41), r(76, 42), r(77, 43), r(78, 44), r(79, 45), r(80, 46), r(81, 47), r(82, 48), r(83, 49), r(84, 50), r(85, 51), r(86, 52), r(87, 53), r(88, 54), r(89, 55), r(90, 56), !a) {
      const n = (c, f) => {
        this._keyCodeToLabel[c] = String.fromCharCode(f);
      };
      n(85, 59), n(86, 61), n(87, 44), n(88, 45), n(89, 46), n(90, 47), n(91, 96), n(92, 91), n(93, 92), n(94, 93), n(95, 39);
    }
  }
  dumpDebugInfo() {
    const e = [], t = [
      88,
      104
    ];
    let o = 0;
    e.push("-----------------------------------------------------------------------------------------------------------------------------------------");
    for (let s = 0; s < 193; s++) {
      if (m[s] !== -1 && t.indexOf(s) === -1)
        continue;
      o % 6 === 0 && (e.push("|       HW Code combination      |  Key  |    KeyCode combination    |          UI label         |        User settings       | WYSIWYG |"), e.push("-----------------------------------------------------------------------------------------------------------------------------------------")), o++;
      const a = this._codeInfo[s], r = b.toString(s), n = [0, 2, 5, 7];
      for (const c of n) {
        const f = !!(c & 1), l = !!(c & 2), i = !!(c & 4), u = new I(f, l, i, !1, s), h = this._resolveChord(u), K = h ? g.toString(h.keyCode) : null, d = h ? new P(this, [h]) : null, C = `${f ? "Ctrl+" : ""}${l ? "Shift+" : ""}${i ? "Alt+" : ""}${r}`, _ = d ? d.getAriaLabel() : null, v = _ ? _.replace(/Control\+/, "Ctrl+") : null, H = d ? d.getUserSettingsLabel() : null, U = P.getProducedChar(u, a), k = K ? `${f ? "Ctrl+" : ""}${l ? "Shift+" : ""}${i ? "Alt+" : ""}${K}` : null, O = (d ? d.isWYSIWYG() : !1) ? "       " : "   NO  ";
        e.push(`| ${this._leftPad(C, 30)} | ${U} | ${this._leftPad(k, 25)} | ${this._leftPad(v, 25)} |  ${this._leftPad(H, 25)} | ${O} |`);
      }
      e.push("-----------------------------------------------------------------------------------------------------------------------------------------");
    }
    return e.join(`
`);
  }
  _leftPad(e, t) {
    for (e === null && (e = "null"); e.length < t; )
      e = " " + e;
    return e;
  }
  getUILabelForKeyCode(e) {
    return this._getLabelForKeyCode(e);
  }
  getAriaLabelForKeyCode(e) {
    return this._getLabelForKeyCode(e);
  }
  getUserSettingsLabelForKeyCode(e) {
    return this._isUSStandard ? g.toUserSettingsUS(e) : g.toUserSettingsGeneral(e);
  }
  getElectronAcceleratorForKeyBinding(e) {
    return g.toElectronAccelerator(e.keyCode);
  }
  _getLabelForKeyCode(e) {
    return this._keyCodeToLabel[e] || g.toString(0);
  }
  resolveKeyboardEvent(e) {
    const t = e.ctrlKey || this._mapAltGrToCtrlAlt && e.altGraphKey, o = e.altKey || this._mapAltGrToCtrlAlt && e.altGraphKey, s = new $(
      t,
      e.shiftKey,
      o,
      e.metaKey,
      e.keyCode
    );
    return new P(this, [s]);
  }
  _resolveChord(e) {
    if (!e)
      return null;
    if (e instanceof $)
      return this._keyCodeExists[e.keyCode] ? e : null;
    const t = this._scanCodeToKeyCode[e.scanCode] || 0;
    return t === 0 || !this._keyCodeExists[t] ? null : new $(e.ctrlKey, e.shiftKey, e.altKey, e.metaKey, t);
  }
  resolveKeybinding(e) {
    const t = ye(e.chords.map((o) => this._resolveChord(o)));
    return t.length > 0 ? [new P(this, t)] : [];
  }
}
const D = [];
class se extends ae {
  constructor(e, t, o) {
    super(t, o), this._mapper = e;
  }
  _getLabel(e) {
    return this._mapper.getUILabelForScanCodeChord(e);
  }
  _getAriaLabel(e) {
    return this._mapper.getAriaLabelForScanCodeChord(e);
  }
  _getElectronAccelerator(e) {
    return this._mapper.getElectronAcceleratorLabelForScanCodeChord(e);
  }
  _getUserSettingsLabel(e) {
    return this._mapper.getUserSettingsLabelForScanCodeChord(e);
  }
  _isWYSIWYG(e) {
    if (!e || m[e.scanCode] !== -1)
      return !0;
    const t = this._mapper.getAriaLabelForScanCodeChord(e), o = this._mapper.getUserSettingsLabelForScanCodeChord(e);
    return !t && !o ? !0 : !t || !o ? !1 : t.toLowerCase() === o.toLowerCase();
  }
  _getChordDispatch(e) {
    return this._mapper.getDispatchStrForScanCodeChord(e);
  }
  _getSingleModifierChordDispatch(e) {
    return (e.scanCode === 157 || e.scanCode === 161) && !e.shiftKey && !e.altKey && !e.metaKey ? "ctrl" : (e.scanCode === 159 || e.scanCode === 163) && !e.ctrlKey && !e.shiftKey && !e.metaKey ? "alt" : (e.scanCode === 158 || e.scanCode === 162) && !e.ctrlKey && !e.altKey && !e.metaKey ? "shift" : (e.scanCode === 160 || e.scanCode === 164) && !e.ctrlKey && !e.shiftKey && !e.altKey ? "meta" : null;
  }
}
class T {
  constructor(e, t, o, s) {
    this.ctrlKey = e, this.shiftKey = t, this.altKey = o, this.scanCode = s;
  }
  toString() {
    return `${this.ctrlKey ? "Ctrl+" : ""}${this.shiftKey ? "Shift+" : ""}${this.altKey ? "Alt+" : ""}${b.toString(this.scanCode)}`;
  }
  equals(e) {
    return this.ctrlKey === e.ctrlKey && this.shiftKey === e.shiftKey && this.altKey === e.altKey && this.scanCode === e.scanCode;
  }
  getProducedCharCode(e) {
    return e ? this.ctrlKey && this.shiftKey && this.altKey ? e.withShiftAltGr : this.ctrlKey && this.altKey ? e.withAltGr : this.shiftKey ? e.withShift : e.value : "";
  }
  getProducedChar(e) {
    const t = p.getCharCode(this.getProducedCharCode(e));
    return t === 0 ? " --- " : t >= 768 && t <= 879 ? "U+" + t.toString(16) : "  " + String.fromCharCode(t) + "  ";
  }
}
class N {
  constructor(e, t, o, s) {
    this.ctrlKey = e, this.shiftKey = t, this.altKey = o, this.keyCode = s;
  }
  toString() {
    return `${this.ctrlKey ? "Ctrl+" : ""}${this.shiftKey ? "Shift+" : ""}${this.altKey ? "Alt+" : ""}${g.toString(this.keyCode)}`;
  }
}
class We {
  constructor() {
    this._scanCodeToKeyCode = [], this._keyCodeToScanCode = [], this._scanCodeToKeyCode = [], this._keyCodeToScanCode = [];
  }
  registrationComplete() {
    this._moveToEnd(56), this._moveToEnd(106);
  }
  _moveToEnd(e) {
    for (let t = 0; t < 8; t++) {
      const o = this._scanCodeToKeyCode[(e << 3) + t];
      if (o)
        for (let s = 0, a = o.length; s < a; s++) {
          const r = this._keyCodeToScanCode[o[s]];
          if (r.length !== 1)
            for (let n = 0, c = r.length; n < c; n++) {
              const f = r[n];
              if (f >>> 3 === e) {
                for (let i = n + 1; i < c; i++)
                  r[i - 1] = r[i];
                r[c - 1] = f;
              }
            }
        }
    }
  }
  registerIfUnknown(e, t) {
    if (t.keyCode === 0)
      return;
    const o = this._encodeScanCodeCombo(e), s = this._encodeKeyCodeCombo(t), a = t.keyCode >= 21 && t.keyCode <= 30, r = t.keyCode >= 31 && t.keyCode <= 56, n = this._scanCodeToKeyCode[o];
    if (a || r) {
      if (n) {
        for (let c = 0, f = n.length; c < f; c++)
          if (n[c] === s)
            return;
      }
    } else if (n && n.length !== 0)
      return;
    this._scanCodeToKeyCode[o] = this._scanCodeToKeyCode[o] || [], this._scanCodeToKeyCode[o].unshift(s), this._keyCodeToScanCode[s] = this._keyCodeToScanCode[s] || [], this._keyCodeToScanCode[s].unshift(o);
  }
  lookupKeyCodeCombo(e) {
    const t = this._encodeKeyCodeCombo(e), o = this._keyCodeToScanCode[t];
    if (!o || o.length === 0)
      return [];
    const s = [];
    for (let a = 0, r = o.length; a < r; a++) {
      const n = o[a], c = !!(n & 1), f = !!(n & 2), l = !!(n & 4), i = n >>> 3;
      s[a] = new T(c, f, l, i);
    }
    return s;
  }
  lookupScanCodeCombo(e) {
    const t = this._encodeScanCodeCombo(e), o = this._scanCodeToKeyCode[t];
    if (!o || o.length === 0)
      return [];
    const s = [];
    for (let a = 0, r = o.length; a < r; a++) {
      const n = o[a], c = !!(n & 1), f = !!(n & 2), l = !!(n & 4), i = n >>> 3;
      s[a] = new N(c, f, l, i);
    }
    return s;
  }
  guessStableKeyCode(e) {
    if (e >= 36 && e <= 45)
      switch (e) {
        case 36:
          return 22;
        case 37:
          return 23;
        case 38:
          return 24;
        case 39:
          return 25;
        case 40:
          return 26;
        case 41:
          return 27;
        case 42:
          return 28;
        case 43:
          return 29;
        case 44:
          return 30;
        case 45:
          return 21;
      }
    const t = this.lookupScanCodeCombo(new T(!1, !1, !1, e)), o = this.lookupScanCodeCombo(new T(!1, !0, !1, e));
    if (t.length === 1 && o.length === 1) {
      const s = t[0].shiftKey, a = t[0].keyCode, r = o[0].shiftKey, n = o[0].keyCode;
      if (a === n && s !== r)
        return a;
    }
    return -1;
  }
  _encodeScanCodeCombo(e) {
    return this._encode(e.ctrlKey, e.shiftKey, e.altKey, e.scanCode);
  }
  _encodeKeyCodeCombo(e) {
    return this._encode(e.ctrlKey, e.shiftKey, e.altKey, e.keyCode);
  }
  _encode(e, t, o, s) {
    return ((e ? 1 : 0) << 0 | (t ? 1 : 0) << 1 | (o ? 1 : 0) << 2 | s << 3) >>> 0;
  }
}
class p {
  constructor(e, t, o, s) {
    this._isUSStandard = e, this._mapAltGrToCtrlAlt = o, this._OS = s, this._scanCodeToLabel = [], this._scanCodeToDispatch = [], this._codeInfo = [], this._scanCodeKeyCodeMapper = new We(), this._scanCodeToLabel = [], this._scanCodeToDispatch = [];
    const a = (l, i, u, h, K, d, C, _) => {
      this._scanCodeKeyCodeMapper.registerIfUnknown(new T(
        !!l,
        !!i,
        !!u,
        h
      ), new N(
        !!K,
        !!d,
        !!C,
        _
      ));
    }, r = (l, i, u, h, K) => {
      for (let d = l; d <= 1; d++)
        for (let C = i; C <= 1; C++)
          for (let _ = u; _ <= 1; _++)
            a(d, C, _, h, d, C, _, K);
    };
    for (let l = 0; l < 193; l++)
      this._scanCodeToLabel[l] = null;
    for (let l = 0; l < 193; l++)
      this._scanCodeToDispatch[l] = null;
    for (let l = 0; l < 193; l++) {
      const i = m[l];
      i !== -1 && (r(0, 0, 0, l, i), this._scanCodeToLabel[l] = g.toString(i), i === 0 || i === 5 || i === 57 || i === 6 || i === 4 ? this._scanCodeToDispatch[l] = null : this._scanCodeToDispatch[l] = `[${b.toString(l)}]`);
    }
    const n = {};
    {
      const l = [];
      for (const u in t)
        if (t.hasOwnProperty(u)) {
          const h = b.toEnum(u);
          if (h === 0 || m[h] !== -1)
            continue;
          const K = t[u], d = p.getCharCode(K.value);
          if (d >= 97 && d <= 122) {
            const C = 65 + (d - 97);
            l[C] = !0;
          }
        }
      const i = (u, h, K, d) => {
        l[u] || (n[b.toString(h)] = {
          value: K,
          withShift: d,
          withAltGr: "",
          withShiftAltGr: ""
        });
      };
      i(65, 10, "a", "A"), i(66, 11, "b", "B"), i(67, 12, "c", "C"), i(68, 13, "d", "D"), i(69, 14, "e", "E"), i(70, 15, "f", "F"), i(71, 16, "g", "G"), i(72, 17, "h", "H"), i(73, 18, "i", "I"), i(74, 19, "j", "J"), i(75, 20, "k", "K"), i(76, 21, "l", "L"), i(77, 22, "m", "M"), i(78, 23, "n", "N"), i(79, 24, "o", "O"), i(80, 25, "p", "P"), i(81, 26, "q", "Q"), i(82, 27, "r", "R"), i(83, 28, "s", "S"), i(84, 29, "t", "T"), i(85, 30, "u", "U"), i(86, 31, "v", "V"), i(87, 32, "w", "W"), i(88, 33, "x", "X"), i(89, 34, "y", "Y"), i(90, 35, "z", "Z");
    }
    const c = [];
    let f = 0;
    for (const l in t)
      if (t.hasOwnProperty(l)) {
        const i = b.toEnum(l);
        if (i === 0 || m[i] !== -1)
          continue;
        this._codeInfo[i] = t[l];
        const u = n[l] || t[l], h = p.getCharCode(u.value), K = p.getCharCode(u.withShift), d = p.getCharCode(u.withAltGr), C = p.getCharCode(u.withShiftAltGr), _ = {
          scanCode: i,
          value: h,
          withShift: K,
          withAltGr: d,
          withShiftAltGr: C
        };
        if (c[f++] = _, this._scanCodeToDispatch[i] = `[${b.toString(i)}]`, h >= 97 && h <= 122) {
          const v = 65 + (h - 97);
          this._scanCodeToLabel[i] = String.fromCharCode(v);
        } else
          h >= 65 && h <= 90 ? this._scanCodeToLabel[i] = String.fromCharCode(h) : h ? this._scanCodeToLabel[i] = String.fromCharCode(h) : this._scanCodeToLabel[i] = null;
      }
    for (let l = c.length - 1; l >= 0; l--) {
      const i = c[l], u = i.scanCode, h = i.withShiftAltGr;
      if (h === i.withAltGr || h === i.withShift || h === i.value)
        continue;
      const K = p._charCodeToKb(h);
      if (!K)
        continue;
      const d = K.shiftKey, C = K.keyCode;
      d ? a(1, 1, 1, u, 0, 1, 0, C) : a(1, 1, 1, u, 0, 0, 0, C);
    }
    for (let l = c.length - 1; l >= 0; l--) {
      const i = c[l], u = i.scanCode, h = i.withAltGr;
      if (h === i.withShift || h === i.value)
        continue;
      const K = p._charCodeToKb(h);
      if (!K)
        continue;
      const d = K.shiftKey, C = K.keyCode;
      d ? a(1, 0, 1, u, 0, 1, 0, C) : a(1, 0, 1, u, 0, 0, 0, C);
    }
    for (let l = c.length - 1; l >= 0; l--) {
      const i = c[l], u = i.scanCode, h = i.withShift;
      if (h === i.value)
        continue;
      const K = p._charCodeToKb(h);
      if (!K)
        continue;
      const d = K.shiftKey, C = K.keyCode;
      d ? (a(0, 1, 0, u, 0, 1, 0, C), a(0, 1, 1, u, 0, 1, 1, C), a(1, 1, 0, u, 1, 1, 0, C), a(1, 1, 1, u, 1, 1, 1, C)) : (a(0, 1, 0, u, 0, 0, 0, C), a(0, 1, 0, u, 0, 1, 0, C), a(0, 1, 1, u, 0, 0, 1, C), a(0, 1, 1, u, 0, 1, 1, C), a(1, 1, 0, u, 1, 0, 0, C), a(1, 1, 0, u, 1, 1, 0, C), a(1, 1, 1, u, 1, 0, 1, C), a(1, 1, 1, u, 1, 1, 1, C));
    }
    for (let l = c.length - 1; l >= 0; l--) {
      const i = c[l], u = i.scanCode, h = p._charCodeToKb(i.value);
      if (!h)
        continue;
      const K = h.shiftKey, d = h.keyCode;
      K ? (a(0, 0, 0, u, 0, 1, 0, d), a(0, 0, 1, u, 0, 1, 1, d), a(1, 0, 0, u, 1, 1, 0, d), a(1, 0, 1, u, 1, 1, 1, d)) : (a(0, 0, 0, u, 0, 0, 0, d), a(0, 0, 1, u, 0, 0, 1, d), a(0, 1, 0, u, 0, 1, 0, d), a(0, 1, 1, u, 0, 1, 1, d), a(1, 0, 0, u, 1, 0, 0, d), a(1, 0, 1, u, 1, 0, 1, d), a(1, 1, 0, u, 1, 1, 0, d), a(1, 1, 1, u, 1, 1, 1, d));
    }
    r(0, 0, 0, 36, 22), r(0, 0, 0, 37, 23), r(0, 0, 0, 38, 24), r(0, 0, 0, 39, 25), r(0, 0, 0, 40, 26), r(0, 0, 0, 41, 27), r(0, 0, 0, 42, 28), r(0, 0, 0, 43, 29), r(0, 0, 0, 44, 30), r(0, 0, 0, 45, 21), this._scanCodeKeyCodeMapper.registrationComplete();
  }
  dumpDebugInfo() {
    const e = [], t = [
      88,
      104
    ];
    let o = 0;
    e.push(`isUSStandard: ${this._isUSStandard}`), e.push("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
    for (let s = 0; s < 193; s++) {
      if (m[s] !== -1 && t.indexOf(s) === -1)
        continue;
      o % 4 === 0 && (e.push("|       HW Code combination      |  Key  |    KeyCode combination    | Pri |          UI label         |         User settings          |    Electron accelerator   |       Dispatching string       | WYSIWYG |"), e.push("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")), o++;
      const a = this._codeInfo[s];
      for (let r = 0; r < 8; r++) {
        const n = !!(r & 1), c = !!(r & 2), f = !!(r & 4), l = new T(n, c, f, s), i = this.resolveKeyboardEvent({
          _standardKeyboardEventBrand: !0,
          ctrlKey: l.ctrlKey,
          shiftKey: l.shiftKey,
          altKey: l.altKey,
          metaKey: !1,
          altGraphKey: !1,
          keyCode: -1,
          code: b.toString(s)
        }), u = l.toString(), h = l.getProducedChar(a), K = i.getAriaLabel(), d = K ? K.replace(/Control\+/, "Ctrl+") : null, C = i.getUserSettingsLabel(), _ = i.getElectronAccelerator(), v = i.getDispatchChords()[0], U = (i ? i.isWYSIWYG() : !1) ? "       " : "   NO  ", k = this._scanCodeKeyCodeMapper.lookupScanCodeCombo(l);
        if (k.length === 0)
          e.push(`| ${this._leftPad(u, 30)} | ${h} | ${this._leftPad("", 25)} | ${this._leftPad("", 3)} | ${this._leftPad(d, 25)} | ${this._leftPad(C, 30)} | ${this._leftPad(_, 25)} | ${this._leftPad(v, 30)} | ${U} |`);
        else
          for (let w = 0, O = k.length; w < O; w++) {
            const Q = k[w];
            let G;
            const Y = this._scanCodeKeyCodeMapper.lookupKeyCodeCombo(Q);
            if (Y.length === 1)
              G = "";
            else {
              let Z = -1;
              for (let M = 0; M < Y.length; M++)
                if (Y[M].equals(l)) {
                  Z = M + 1;
                  break;
                }
              G = String(Z);
            }
            const X = Q.toString();
            w === 0 ? e.push(`| ${this._leftPad(u, 30)} | ${h} | ${this._leftPad(X, 25)} | ${this._leftPad(G, 3)} | ${this._leftPad(d, 25)} | ${this._leftPad(C, 30)} | ${this._leftPad(_, 25)} | ${this._leftPad(v, 30)} | ${U} |`) : e.push(`| ${this._leftPad("", 30)} |       | ${this._leftPad(X, 25)} | ${this._leftPad(G, 3)} | ${this._leftPad("", 25)} | ${this._leftPad("", 30)} | ${this._leftPad("", 25)} | ${this._leftPad("", 30)} |         |`);
          }
      }
      e.push("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
    }
    return e.join(`
`);
  }
  _leftPad(e, t) {
    for (e === null && (e = "null"); e.length < t; )
      e = " " + e;
    return e;
  }
  keyCodeChordToScanCodeChord(e) {
    if (e.keyCode === 3)
      return [new I(
        e.ctrlKey,
        e.shiftKey,
        e.altKey,
        e.metaKey,
        46
      )];
    const t = this._scanCodeKeyCodeMapper.lookupKeyCodeCombo(new N(e.ctrlKey, e.shiftKey, e.altKey, e.keyCode)), o = [];
    for (let s = 0, a = t.length; s < a; s++) {
      const r = t[s];
      o[s] = new I(
        r.ctrlKey,
        r.shiftKey,
        r.altKey,
        e.metaKey,
        r.scanCode
      );
    }
    return o;
  }
  getUILabelForScanCodeChord(e) {
    if (!e)
      return null;
    if (e.isDuplicateModifierCase())
      return "";
    if (this._OS === 2)
      switch (e.scanCode) {
        case 86:
          return "←";
        case 88:
          return "↑";
        case 85:
          return "→";
        case 87:
          return "↓";
      }
    return this._scanCodeToLabel[e.scanCode];
  }
  getAriaLabelForScanCodeChord(e) {
    return e ? e.isDuplicateModifierCase() ? "" : this._scanCodeToLabel[e.scanCode] : null;
  }
  getDispatchStrForScanCodeChord(e) {
    const t = this._scanCodeToDispatch[e.scanCode];
    if (!t)
      return null;
    let o = "";
    return e.ctrlKey && (o += "ctrl+"), e.shiftKey && (o += "shift+"), e.altKey && (o += "alt+"), e.metaKey && (o += "meta+"), o += t, o;
  }
  getUserSettingsLabelForScanCodeChord(e) {
    if (!e)
      return null;
    if (e.isDuplicateModifierCase())
      return "";
    const t = m[e.scanCode];
    if (t !== -1)
      return g.toUserSettingsUS(t).toLowerCase();
    const o = this._scanCodeKeyCodeMapper.guessStableKeyCode(e.scanCode);
    if (o !== -1) {
      const s = this.keyCodeChordToScanCodeChord(new $(
        e.ctrlKey,
        e.shiftKey,
        e.altKey,
        e.metaKey,
        o
      ));
      for (let a = 0, r = s.length; a < r; a++)
        if (s[a].scanCode === e.scanCode)
          return g.toUserSettingsUS(o).toLowerCase();
    }
    return this._scanCodeToDispatch[e.scanCode];
  }
  getElectronAcceleratorLabelForScanCodeChord(e) {
    if (!e)
      return null;
    const t = m[e.scanCode];
    if (t !== -1)
      return g.toElectronAccelerator(t);
    const o = this._scanCodeKeyCodeMapper.guessStableKeyCode(e.scanCode);
    return this._OS === 3 && !this._isUSStandard && (o === 85 || o === 86 || o === 87 || o === 88 || o === 89 || o === 90 || o === 91 || o === 92 || o === 93 || o === 94) ? null : o !== -1 ? g.toElectronAccelerator(o) : null;
  }
  _toResolvedKeybinding(e) {
    if (e.length === 0)
      return [];
    const t = [];
    return this._generateResolvedKeybindings(e, 0, [], t), t;
  }
  _generateResolvedKeybindings(e, t, o, s) {
    const a = e[t], r = t === e.length - 1;
    for (let n = 0, c = a.length; n < c; n++) {
      const f = [...o, a[n]];
      r ? s.push(new se(this, this._OS, f)) : this._generateResolvedKeybindings(e, t + 1, f, s);
    }
  }
  resolveKeyboardEvent(e) {
    let t = b.toEnum(e.code);
    t === 94 && (t = 46);
    const o = e.keyCode;
    if (o === 15 || o === 16 || o === 17 || o === 18 || o === 20 || o === 19 || o === 14 || o === 13 || o === 12 || o === 11 || o === 1) {
      const n = ee[o];
      n !== -1 && (t = n);
    } else if ((t === 95 || t === 96 || t === 97 || t === 98 || t === 99 || t === 100 || t === 101 || t === 102 || t === 103 || t === 104 || t === 105) && o >= 0) {
      const n = ee[o];
      n !== -1 && (t = n);
    }
    const s = e.ctrlKey || this._mapAltGrToCtrlAlt && e.altGraphKey, a = e.altKey || this._mapAltGrToCtrlAlt && e.altGraphKey, r = new I(s, e.shiftKey, a, e.metaKey, t);
    return new se(this, this._OS, [r]);
  }
  _resolveChord(e) {
    return e ? e instanceof I ? [e] : this.keyCodeChordToScanCodeChord(e) : [];
  }
  resolveKeybinding(e) {
    const t = e.chords.map((o) => this._resolveChord(o));
    return this._toResolvedKeybinding(t);
  }
  static _redirectCharCode(e) {
    switch (e) {
      case 12290:
        return 46;
      case 12300:
        return 91;
      case 12301:
        return 93;
      case 12304:
        return 91;
      case 12305:
        return 93;
      case 65307:
        return 59;
      case 65292:
        return 44;
    }
    return e;
  }
  static _charCodeToKb(e) {
    return e = this._redirectCharCode(e), e < D.length ? D[e] : null;
  }
  static getCharCode(e) {
    if (e.length === 0)
      return 0;
    const t = e.charCodeAt(0);
    switch (t) {
      case 768:
        return 96;
      case 769:
        return 180;
      case 770:
        return 94;
      case 771:
        return 732;
      case 772:
        return 175;
      case 773:
        return 8254;
      case 774:
        return 728;
      case 775:
        return 729;
      case 776:
        return 168;
      case 778:
        return 730;
      case 779:
        return 733;
    }
    return t;
  }
}
(function() {
  function y(e, t, o) {
    for (let s = D.length; s < e; s++)
      D[s] = null;
    D[e] = { keyCode: t, shiftKey: o };
  }
  for (let e = 65; e <= 90; e++)
    y(e, 31 + (e - 65), !0);
  for (let e = 97; e <= 122; e++)
    y(e, 31 + (e - 97), !1);
  y(59, 85, !1), y(58, 85, !0), y(61, 86, !1), y(43, 86, !0), y(44, 87, !1), y(60, 87, !0), y(45, 88, !1), y(95, 88, !0), y(46, 89, !1), y(62, 89, !0), y(47, 90, !1), y(63, 90, !0), y(96, 91, !1), y(126, 91, !0), y(91, 92, !1), y(123, 92, !0), y(92, 93, !1), y(124, 93, !0), y(93, 94, !1), y(125, 94, !0), y(39, 95, !1), y(34, 95, !0);
})();
function Oe(y) {
  switch (y) {
    case "./keyboardLayouts/layout.contribution.darwin.js":
      return import("./layout.contribution.darwin-93445c57.js").then((e) => e.default ?? e);
    case "./keyboardLayouts/layout.contribution.linux.js":
      return import("./layout.contribution.linux-6a51d9a5.js").then((e) => e.default ?? e);
    case "./keyboardLayouts/layout.contribution.win.js":
      return import("./layout.contribution.win-4d436b82.js").then((e) => e.default ?? e);
    default:
      return new Promise(function(e, t) {
        (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
          t.bind(null, new Error("Unknown variable dynamic import: " + y))
        );
      });
  }
}
class Ye extends F {
  get activeKeymap() {
    return this._activeKeymapInfo;
  }
  get keymapInfos() {
    return this._keymapInfos;
  }
  get activeKeyboardLayout() {
    var e;
    return this._initialized ? ((e = this._activeKeymapInfo) == null ? void 0 : e.layout) ?? null : null;
  }
  get activeKeyMapping() {
    var e;
    return this._initialized ? ((e = this._activeKeymapInfo) == null ? void 0 : e.mapping) ?? null : null;
  }
  get keyboardLayouts() {
    return this._keymapInfos.map((e) => e.layout);
  }
  constructor(e) {
    super(), this._configurationService = e, this._onDidChangeKeyboardMapper = new E(), this.onDidChangeKeyboardMapper = this._onDidChangeKeyboardMapper.event, this._keyboardMapper = null, this._initialized = !1, this._keymapInfos = [], this._mru = [], this._activeKeymapInfo = null, navigator.keyboard && navigator.keyboard.addEventListener && navigator.keyboard.addEventListener("layoutchange", () => {
      this._getBrowserKeyMapping().then((t) => {
        this.isKeyMappingActive(t) || this.setLayoutFromBrowserAPI();
      });
    }), this._register(this._configurationService.onDidChangeConfiguration((t) => {
      t.affectsConfiguration("keyboard") && (this._keyboardMapper = null, this._onDidChangeKeyboardMapper.fire());
    }));
  }
  registerKeyboardLayout(e) {
    this._keymapInfos.push(e), this._mru = this._keymapInfos;
  }
  removeKeyboardLayout(e) {
    let t = this._mru.indexOf(e);
    this._mru.splice(t, 1), t = this._keymapInfos.indexOf(e), this._keymapInfos.splice(t, 1);
  }
  getMatchedKeymapInfo(e) {
    if (!e)
      return null;
    const t = this.getUSStandardLayout();
    if (t) {
      let o = t.getScore(e);
      if (o === 0)
        return {
          result: t,
          score: 0
        };
      let s = t;
      for (let a = 0; a < this._mru.length; a++) {
        const r = this._mru[a].getScore(e);
        if (r > o) {
          if (r === 0)
            return {
              result: this._mru[a],
              score: 0
            };
          o = r, s = this._mru[a];
        }
      }
      return {
        result: s,
        score: o
      };
    }
    for (let o = 0; o < this._mru.length; o++)
      if (this._mru[o].fuzzyEqual(e))
        return {
          result: this._mru[o],
          score: 0
        };
    return null;
  }
  getUSStandardLayout() {
    const e = this._mru.filter((t) => t.layout.isUSStandard);
    return e.length ? e[0] : null;
  }
  isKeyMappingActive(e) {
    return this._activeKeymapInfo && e && this._activeKeymapInfo.fuzzyEqual(e);
  }
  setUSKeyboardLayout() {
    this._activeKeymapInfo = this.getUSStandardLayout();
  }
  setActiveKeyMapping(e) {
    let t = !1;
    const o = this.getMatchedKeymapInfo(e);
    if (o && (this._activeKeymapInfo ? e && o.result.getScore(e) > this._activeKeymapInfo.getScore(e) && (this._activeKeymapInfo = o.result, t = !0) : (this._activeKeymapInfo = o.result, t = !0)), this._activeKeymapInfo || (this._activeKeymapInfo = this.getUSStandardLayout(), t = !0), !this._activeKeymapInfo || !t)
      return;
    const s = this._mru.indexOf(this._activeKeymapInfo);
    this._mru.splice(s, 1), this._mru.unshift(this._activeKeymapInfo), this._setKeyboardData(this._activeKeymapInfo);
  }
  setActiveKeymapInfo(e) {
    this._activeKeymapInfo = e;
    const t = this._mru.indexOf(this._activeKeymapInfo);
    t !== 0 && (this._mru.splice(t, 1), this._mru.unshift(this._activeKeymapInfo), this._setKeyboardData(this._activeKeymapInfo));
  }
  setLayoutFromBrowserAPI() {
    this._updateKeyboardLayoutAsync(this._initialized);
  }
  _updateKeyboardLayoutAsync(e, t) {
    e && this._getBrowserKeyMapping(t).then((o) => {
      this.isKeyMappingActive(o) || this.setActiveKeyMapping(o);
    });
  }
  getKeyboardMapper() {
    const e = Me(this._configurationService);
    return e.dispatch === 1 || !this._initialized || !this._activeKeymapInfo ? new te(e.mapAltGrToCtrlAlt, L) : (this._keyboardMapper || (this._keyboardMapper = new xe(
      ue._createKeyboardMapper(this._activeKeymapInfo, e.mapAltGrToCtrlAlt)
    )), this._keyboardMapper);
  }
  validateCurrentKeyboardMapping(e) {
    !this._initialized || this._validateCurrentKeyboardMapping(e) || this._updateKeyboardLayoutAsync(!0, e);
  }
  setKeyboardLayout(e) {
    const t = this.keymapInfos.filter((o) => x(o.layout) === e);
    t.length > 0 && this.setActiveKeymapInfo(t[0]);
  }
  _setKeyboardData(e) {
    this._initialized = !0, this._keyboardMapper = null, this._onDidChangeKeyboardMapper.fire();
  }
  static _createKeyboardMapper(e, t) {
    const o = e.mapping, s = !!e.layout.isUSStandard;
    return L === 1 ? new Fe(s, o, t) : Object.keys(o).length === 0 ? new te(t, L) : new p(s, o, t, L);
  }
  _validateCurrentKeyboardMapping(e) {
    if (!this._initialized)
      return !0;
    const t = e, o = this._activeKeymapInfo;
    if (!o || t.browserEvent.key === "Dead" || t.browserEvent.isComposing)
      return !0;
    const s = o.mapping[t.code];
    if (!s)
      return !1;
    if (s.value === "")
      return (e.ctrlKey || e.metaKey) && setTimeout(() => {
        this._getBrowserKeyMapping().then((n) => {
          this.isKeyMappingActive(n) || this.setLayoutFromBrowserAPI();
        });
      }, 350), !0;
    const a = t.altKey && t.shiftKey ? s.withShiftAltGr : t.altKey ? s.withAltGr : t.shiftKey ? s.withShift : s.value, r = t.altKey && t.shiftKey && s.withShiftAltGrIsDeadKey || t.altKey && s.withAltGrIsDeadKey || t.shiftKey && s.withShiftIsDeadKey || s.valueIsDeadKey;
    return !(r && t.browserEvent.key !== "Dead" || !r && t.browserEvent.key !== a);
  }
  async _getBrowserKeyMapping(e) {
    if (navigator.keyboard)
      try {
        return navigator.keyboard.getLayoutMap().then((t) => {
          const o = {};
          for (const s of t)
            o[s[0]] = {
              value: s[1],
              withShift: "",
              withAltGr: "",
              withShiftAltGr: ""
            };
          return o;
        });
      } catch {
      }
    else if (e && !e.shiftKey && !e.altKey && !e.metaKey && !e.metaKey) {
      const t = {}, o = e;
      return t[o.browserEvent.code] = {
        value: o.browserEvent.key,
        withShift: "",
        withAltGr: "",
        withShiftAltGr: ""
      }, this.getMatchedKeymapInfo(t) ? t : null;
    }
    return null;
  }
}
class ue extends Ye {
  constructor(e, t, o, s) {
    super(e), Oe("./keyboardLayouts/layout.contribution." + (z ? "win" : Se ? "darwin" : "linux") + ".js").then((r) => {
      const n = r.KeyboardLayoutContribution.INSTANCE.layoutInfos;
      this._keymapInfos.push(...n.map((c) => new W(
        c.layout,
        c.secondaryLayouts,
        c.mapping,
        c.isUserKeyboardLayout
      ))), this._mru = this._keymapInfos, this._initialized = !0, this.setLayoutFromBrowserAPI();
    });
  }
}
class Be extends F {
  get keyboardLayout() {
    return this._keyboardLayout;
  }
  constructor(e, t) {
    super(), this.keyboardLayoutResource = e, this.fileService = t, this._onDidChange = this._register(new E()), this.onDidChange = this._onDidChange.event, this._keyboardLayout = null, this.reloadConfigurationScheduler = this._register(new ge(() => this.reload().then((o) => {
      o && this._onDidChange.fire();
    }), 50)), this._register(j.filter(this.fileService.onDidFilesChange, (o) => o.contains(this.keyboardLayoutResource))(() => this.reloadConfigurationScheduler.schedule()));
  }
  async initialize() {
    await this.reload();
  }
  async reload() {
    const e = this._keyboardLayout;
    try {
      const t = await this.fileService.readFile(this.keyboardLayoutResource), o = pe(t.value.toString());
      if (be(o) === "object") {
        const s = o.layout, a = o.rawMapping;
        this._keyboardLayout = W.createKeyboardLayoutFromDebugInfo(s, a, !0);
      } else
        this._keyboardLayout = null;
    } catch {
      this._keyboardLayout = null;
    }
    return e ? !me(e, this._keyboardLayout) : !0;
  }
}
let q = class extends F {
  constructor(e, t, o, s, a, r) {
    super(), this.configurationService = r, this._onDidChangeKeyboardLayout = new E(), this.onDidChangeKeyboardLayout = this._onDidChangeKeyboardLayout.event;
    const c = r.getValue("keyboard").layout;
    this._keyboardLayoutMode = c ?? "autodetect", this._factory = new ue(r, o, s, a), this._register(this._factory.onDidChangeKeyboardMapper(() => {
      this._onDidChangeKeyboardLayout.fire();
    })), c && c !== "autodetect" && this._factory.setKeyboardLayout(c), this._register(r.onDidChangeConfiguration((f) => {
      if (f.affectsConfiguration("keyboard.layout")) {
        const i = r.getValue("keyboard").layout;
        this._keyboardLayoutMode = i, i === "autodetect" ? this._factory.setLayoutFromBrowserAPI() : this._factory.setKeyboardLayout(i);
      }
    })), this._userKeyboardLayout = new Be(e.keyboardLayoutResource, t), this._userKeyboardLayout.initialize().then(() => {
      this._userKeyboardLayout.keyboardLayout && (this._factory.registerKeyboardLayout(this._userKeyboardLayout.keyboardLayout), this.setUserKeyboardLayoutIfMatched());
    }), this._register(this._userKeyboardLayout.onDidChange(() => {
      const f = this._factory.keymapInfos.filter((l) => l.isUserKeyboardLayout);
      f.length ? this._userKeyboardLayout.keyboardLayout ? f[0].update(this._userKeyboardLayout.keyboardLayout) : this._factory.removeKeyboardLayout(f[0]) : this._userKeyboardLayout.keyboardLayout && this._factory.registerKeyboardLayout(this._userKeyboardLayout.keyboardLayout), this.setUserKeyboardLayoutIfMatched();
    }));
  }
  setUserKeyboardLayoutIfMatched() {
    const t = this.configurationService.getValue("keyboard").layout;
    t && this._userKeyboardLayout.keyboardLayout && x(this._userKeyboardLayout.keyboardLayout.layout) === t && this._factory.activeKeymap && (this._userKeyboardLayout.keyboardLayout.equal(this._factory.activeKeymap) || this._factory.setActiveKeymapInfo(this._userKeyboardLayout.keyboardLayout));
  }
  getKeyboardMapper() {
    return this._factory.getKeyboardMapper();
  }
  getCurrentKeyboardLayout() {
    return this._factory.activeKeyboardLayout;
  }
  getAllKeyboardLayouts() {
    return this._factory.keyboardLayouts;
  }
  getRawKeyboardMapping() {
    return this._factory.activeKeyMapping;
  }
  validateCurrentKeyboardMapping(e) {
    this._keyboardLayoutMode === "autodetect" && this._factory.validateCurrentKeyboardMapping(e);
  }
};
q = ne([
  S(0, fe),
  S(1, le),
  S(2, Ce),
  S(3, Ke),
  S(4, ce),
  S(5, _e)
], q);
const Re = ie.as(re.Configuration), ze = {
  id: "keyboard",
  order: 15,
  type: "object",
  title: A("keyboardConfigurationTitle", "Keyboard"),
  properties: {
    "keyboard.layout": {
      type: "string",
      default: "autodetect",
      description: A("keyboard.layout.config", "Control the keyboard layout used in web.")
    }
  }
};
Re.registerConfiguration(ze);
let V = class extends F {
  constructor(e, t, o) {
    super(), this._instantiationService = e, this._extensionService = t, this._logService = o, this._extensionHostIsReady = !1, this._onWillExecuteCommand = this._register(new E()), this.onWillExecuteCommand = this._onWillExecuteCommand.event, this._onDidExecuteCommand = new E(), this.onDidExecuteCommand = this._onDidExecuteCommand.event, this._extensionService.whenInstalledExtensionsRegistered().then((s) => this._extensionHostIsReady = s), this._starActivation = null;
  }
  _activateStar() {
    return this._starActivation || (this._starActivation = Promise.race([
      this._extensionService.activateByEvent("*"),
      we(3e4)
    ])), this._starActivation;
  }
  async executeCommand(e, ...t) {
    this._logService.trace("CommandService#executeCommand", e);
    const o = `onCommand:${e}`;
    return B.getCommand(e) ? this._extensionService.activationEventIsDone(o) ? this._tryExecuteCommand(e, t) : this._extensionHostIsReady ? (await this._extensionService.activateByEvent(o), this._tryExecuteCommand(e, t)) : (this._extensionService.activateByEvent(o), this._tryExecuteCommand(e, t)) : (await Promise.all([
      this._extensionService.activateByEvent(o),
      Promise.race([
        this._activateStar(),
        j.toPromise(j.filter(B.onDidRegisterCommand, (a) => a === e))
      ])
    ]), this._tryExecuteCommand(e, t));
  }
  _tryExecuteCommand(e, t) {
    const o = B.getCommand(e);
    if (!o)
      return Promise.reject(new Error(`command '${e}' not found`));
    try {
      this._onWillExecuteCommand.fire({ commandId: e, args: t });
      const s = this._instantiationService.invokeFunction(o.handler, ...t);
      return this._onDidExecuteCommand.fire({ commandId: e, args: t }), Promise.resolve(s);
    } catch (s) {
      return Promise.reject(s);
    }
  }
};
V = ne([
  S(0, ve),
  S(1, Le),
  S(2, ke)
], V);
async function He(y) {
  const e = oe.get(Ie);
  await oe.get(le).writeFile(e.defaultProfile.keybindingsResource, Ae.fromString(y));
}
function Qe() {
  return {
    ...De(),
    [Te.toString()]: new R(Ee),
    [Ue.toString()]: new R(q, void 0, !0),
    [ce.toString()]: new R(V)
  };
}
export {
  Qe as default,
  He as updateUserKeybindings
};
