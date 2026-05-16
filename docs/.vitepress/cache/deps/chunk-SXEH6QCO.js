import {
  __require
} from "./chunk-KEXKKQVW.js";

// node_modules/@norio-office/office-excel/dist/chunk-vKJrgz-R.js
var e = Object.create;
var t = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var r = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf;
var a = Object.prototype.hasOwnProperty;
var o = (e2, t2) => () => (t2 || e2((t2 = { exports: {} }).exports, t2), t2.exports);
var s = (e2, i2, o2, s2) => {
  if (i2 && typeof i2 == "object" || typeof i2 == "function") for (var c2 = r(i2), l2 = 0, u = c2.length, d; l2 < u; l2++) d = c2[l2], !a.call(e2, d) && d !== o2 && t(e2, d, {
    get: ((e3) => i2[e3]).bind(null, d),
    enumerable: !(s2 = n(i2, d)) || s2.enumerable
  });
  return e2;
};
var c = (n2, r2, a2) => (a2 = n2 == null ? {} : e(i(n2)), s(r2 || !n2 || !n2.__esModule ? t(a2, "default", {
  value: n2,
  enumerable: true
}) : a2, n2));
var l = ((e2) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(e2, { get: (e3, t2) => (typeof __require < "u" ? __require : e3)[t2] }) : e2)(function(e2) {
  if (typeof __require < "u") return __require.apply(this, arguments);
  throw Error('Calling `require` for "' + e2 + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});

export {
  o,
  c,
  l
};
//# sourceMappingURL=chunk-SXEH6QCO.js.map
