import { wF as c, Y as C, aO as e, nJ as H } from "./index-6dabdcd0.js";
const T = c(C), R = "vs", u = "vs-dark", L = "hc-black", f = "hc-light", M = "[", l = "]", N = "*", d = /\[(.+?)\]/g;
var _;
(function(o) {
  o.COLOR_THEME = "workbench.colorTheme", o.FILE_ICON_THEME = "workbench.iconTheme", o.PRODUCT_ICON_THEME = "workbench.productIconTheme", o.COLOR_CUSTOMIZATIONS = "workbench.colorCustomizations", o.TOKEN_COLOR_CUSTOMIZATIONS = "editor.tokenColorCustomizations", o.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS = "editor.semanticTokenColorCustomizations", o.PREFERRED_DARK_THEME = "workbench.preferredDarkColorTheme", o.PREFERRED_LIGHT_THEME = "workbench.preferredLightColorTheme", o.PREFERRED_HC_DARK_THEME = "workbench.preferredHighContrastColorTheme", o.PREFERRED_HC_LIGHT_THEME = "workbench.preferredHighContrastLightColorTheme", o.DETECT_COLOR_SCHEME = "window.autoDetectColorScheme", o.DETECT_HC = "window.autoDetectHighContrast";
})(_ || (_ = {}));
var E;
(function(o) {
  o.COLOR_THEME_DARK = "Default Dark Modern", o.COLOR_THEME_LIGHT = "Default Light Modern", o.COLOR_THEME_HC_DARK = "Default High Contrast", o.COLOR_THEME_HC_LIGHT = "Default High Contrast Light", o.COLOR_THEME_DARK_OLD = "Default Dark+", o.COLOR_THEME_LIGHT_OLD = "Default Light+", o.FILE_ICON_THEME = "vs-seti", o.PRODUCT_ICON_THEME = "Default";
})(E || (E = {}));
const x = {
  "activityBar.background": "#181818",
  "statusBar.background": "#181818",
  "statusBar.noFolderBackground": "#1f1f1f"
}, D = {
  "activityBar.background": "#f8f8f8",
  "statusBar.background": "#f8f8f8",
  "statusBar.noFolderBackground": "#f8f8f8"
};
var t;
(function(o) {
  function s(n) {
    return n && { _extensionId: n.extensionId, _extensionIsBuiltin: n.extensionIsBuiltin, _extensionName: n.extensionName, _extensionPublisher: n.extensionPublisher };
  }
  o.toJSONObject = s;
  function i(n) {
    if (n && e(n._extensionId) && H(n._extensionIsBuiltin) && e(n._extensionName) && e(n._extensionPublisher))
      return { extensionId: n._extensionId, extensionIsBuiltin: n._extensionIsBuiltin, extensionName: n._extensionName, extensionPublisher: n._extensionPublisher };
  }
  o.fromJSONObject = i;
  function a(n, r, O = !1) {
    return { extensionPublisher: n, extensionId: `${n}.${r}`, extensionName: r, extensionIsBuiltin: O };
  }
  o.fromName = a;
})(t || (t = {}));
export {
  D as C,
  t as E,
  T as I,
  M as T,
  f as V,
  l as a,
  N as b,
  L as c,
  R as d,
  u as e,
  E as f,
  _ as g,
  x as h,
  d as t
};