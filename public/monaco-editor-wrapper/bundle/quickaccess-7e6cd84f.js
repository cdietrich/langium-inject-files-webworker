import { aI as k, B as u, aF as e, X as r, bz as y } from "./index-6dabdcd0.js";
const n = "inQuickOpen", x = new k(n, !1, u("inQuickOpen", "Whether keyboard focus is inside the quick open control")), d = e.has(n), g = "inFilesPicker", Q = e.and(d, e.has(g));
function v(t, c) {
  return (i) => {
    const s = i.get(r), a = i.get(y), o = { keybindings: s.lookupKeybindings(t) };
    a.navigate(!!c, o);
  };
}
export {
  x as I,
  g as a,
  Q as d,
  v as g,
  d as i
};