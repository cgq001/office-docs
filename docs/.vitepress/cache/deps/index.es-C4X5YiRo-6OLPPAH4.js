import {
  e
} from "./chunk-INAZFQXU.js";
import {
  c,
  o
} from "./chunk-CYLA5VZ5.js";
import "./chunk-EQCVQC35.js";

// node_modules/@ap666/office-word/dist/index.es-C4X5YiRo.js
var r = o((e15, t) => {
  var n = function(e16) {
    return e16 && e16.Math === Math && e16;
  };
  t.exports = n(typeof globalThis == "object" && globalThis) || n(typeof window == "object" && window) || n(typeof self == "object" && self) || n(typeof global == "object" && global) || n(typeof e15 == "object" && e15) || /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")();
});
var i = o((e15, t) => {
  t.exports = function(e16) {
    try {
      return !!e16();
    } catch {
      return true;
    }
  };
});
var a = o((e15, t) => {
  t.exports = !i()(function() {
    return Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1] !== 7;
  });
});
var o2 = o((e15, t) => {
  t.exports = !i()(function() {
    var e16 = (function() {
    }).bind();
    return typeof e16 != "function" || e16.hasOwnProperty("prototype");
  });
});
var s = o((e15, t) => {
  var n = o2(), r2 = Function.prototype.call;
  t.exports = n ? r2.bind(r2) : function() {
    return r2.apply(r2, arguments);
  };
});
var c2 = o((e15) => {
  var t = {}.propertyIsEnumerable, n = Object.getOwnPropertyDescriptor;
  e15.f = n && !t.call({ 1: 2 }, 1) ? function(e16) {
    var t2 = n(this, e16);
    return !!t2 && t2.enumerable;
  } : t;
});
var l = o((e15, t) => {
  t.exports = function(e16, t2) {
    return {
      enumerable: !(e16 & 1),
      configurable: !(e16 & 2),
      writable: !(e16 & 4),
      value: t2
    };
  };
});
var u = o((e15, t) => {
  var n = o2(), r2 = Function.prototype, i2 = r2.call, a2 = n && r2.bind.bind(i2, i2);
  t.exports = n ? a2 : function(e16) {
    return function() {
      return i2.apply(e16, arguments);
    };
  };
});
var d = o((e15, t) => {
  var n = u(), r2 = n({}.toString), i2 = n("".slice);
  t.exports = function(e16) {
    return i2(r2(e16), 8, -1);
  };
});
var f = o((e15, t) => {
  var n = u(), r2 = i(), a2 = d(), o3 = Object, s2 = n("".split);
  t.exports = r2(function() {
    return !o3("z").propertyIsEnumerable(0);
  }) ? function(e16) {
    return a2(e16) === "String" ? s2(e16, "") : o3(e16);
  } : o3;
});
var p = o((e15, t) => {
  t.exports = function(e16) {
    return e16 == null;
  };
});
var m = o((e15, t) => {
  var n = p(), r2 = TypeError;
  t.exports = function(e16) {
    if (n(e16)) throw new r2("Can't call method on " + e16);
    return e16;
  };
});
var h = o((e15, t) => {
  var n = f(), r2 = m();
  t.exports = function(e16) {
    return n(r2(e16));
  };
});
var g = o((e15, t) => {
  var n = typeof document == "object" && document.all;
  t.exports = n === void 0 && n !== void 0 ? function(e16) {
    return typeof e16 == "function" || e16 === n;
  } : function(e16) {
    return typeof e16 == "function";
  };
});
var _ = o((e15, t) => {
  var n = g();
  t.exports = function(e16) {
    return typeof e16 == "object" ? e16 !== null : n(e16);
  };
});
var v = o((e15, t) => {
  var n = r(), i2 = g(), a2 = function(e16) {
    return i2(e16) ? e16 : void 0;
  };
  t.exports = function(e16, t2) {
    return arguments.length < 2 ? a2(n[e16]) : n[e16] && n[e16][t2];
  };
});
var y = o((e15, t) => {
  t.exports = u()({}.isPrototypeOf);
});
var b = o((e15, t) => {
  var n = r().navigator, i2 = n && n.userAgent;
  t.exports = i2 ? String(i2) : "";
});
var x = o((e15, t) => {
  var n = r(), i2 = b(), a2 = n.process, o3 = n.Deno, s2 = a2 && a2.versions || o3 && o3.version, c3 = s2 && s2.v8, l2, u2;
  c3 && (l2 = c3.split("."), u2 = l2[0] > 0 && l2[0] < 4 ? 1 : +(l2[0] + l2[1])), !u2 && i2 && (l2 = i2.match(/Edge\/(\d+)/), (!l2 || l2[1] >= 74) && (l2 = i2.match(/Chrome\/(\d+)/), l2 && (u2 = +l2[1]))), t.exports = u2;
});
var S = o((e15, t) => {
  var n = x(), a2 = i(), o3 = r().String;
  t.exports = !!Object.getOwnPropertySymbols && !a2(function() {
    var e16 = Symbol("symbol detection");
    return !o3(e16) || !(Object(e16) instanceof Symbol) || !Symbol.sham && n && n < 41;
  });
});
var C = o((e15, t) => {
  t.exports = S() && !Symbol.sham && typeof Symbol.iterator == "symbol";
});
var w = o((e15, t) => {
  var n = v(), r2 = g(), i2 = y(), a2 = C(), o3 = Object;
  t.exports = a2 ? function(e16) {
    return typeof e16 == "symbol";
  } : function(e16) {
    var t2 = n("Symbol");
    return r2(t2) && i2(t2.prototype, o3(e16));
  };
});
var T = o((e15, t) => {
  var n = String;
  t.exports = function(e16) {
    try {
      return n(e16);
    } catch {
      return "Object";
    }
  };
});
var E = o((e15, t) => {
  var n = g(), r2 = T(), i2 = TypeError;
  t.exports = function(e16) {
    if (n(e16)) return e16;
    throw new i2(r2(e16) + " is not a function");
  };
});
var D = o((e15, t) => {
  var n = E(), r2 = p();
  t.exports = function(e16, t2) {
    var i2 = e16[t2];
    return r2(i2) ? void 0 : n(i2);
  };
});
var O = o((e15, t) => {
  var n = s(), r2 = g(), i2 = _(), a2 = TypeError;
  t.exports = function(e16, t2) {
    var o3, s2;
    if (t2 === "string" && r2(o3 = e16.toString) && !i2(s2 = n(o3, e16)) || r2(o3 = e16.valueOf) && !i2(s2 = n(o3, e16)) || t2 !== "string" && r2(o3 = e16.toString) && !i2(s2 = n(o3, e16))) return s2;
    throw new a2("Can't convert object to primitive value");
  };
});
var k = o((e15, t) => {
  t.exports = false;
});
var A = o((e15, t) => {
  var n = r(), i2 = Object.defineProperty;
  t.exports = function(e16, t2) {
    try {
      i2(n, e16, {
        value: t2,
        configurable: true,
        writable: true
      });
    } catch {
      n[e16] = t2;
    }
    return t2;
  };
});
var j = o((e15, t) => {
  var n = k(), i2 = r(), a2 = A(), o3 = "__core-js_shared__", s2 = t.exports = i2[o3] || a2(o3, {});
  (s2.versions || (s2.versions = [])).push({
    version: "3.49.0",
    mode: n ? "pure" : "global",
    copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
    license: "https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  });
});
var M = o((e15, t) => {
  var n = j();
  t.exports = function(e16, t2) {
    return n[e16] || (n[e16] = t2 || {});
  };
});
var N = o((e15, t) => {
  var n = m(), r2 = Object;
  t.exports = function(e16) {
    return r2(n(e16));
  };
});
var P = o((e15, t) => {
  var n = u(), r2 = N(), i2 = n({}.hasOwnProperty);
  t.exports = Object.hasOwn || function(e16, t2) {
    return i2(r2(e16), t2);
  };
});
var F = o((e15, t) => {
  var n = u(), r2 = 0, i2 = Math.random(), a2 = n(1.1.toString);
  t.exports = function(e16) {
    return "Symbol(" + (e16 === void 0 ? "" : e16) + ")_" + a2(++r2 + i2, 36);
  };
});
var I = o((e15, t) => {
  var n = r(), i2 = M(), a2 = P(), o3 = F(), s2 = S(), c3 = C(), l2 = n.Symbol, u2 = i2("wks"), d2 = c3 ? l2.for || l2 : l2 && l2.withoutSetter || o3;
  t.exports = function(e16) {
    return a2(u2, e16) || (u2[e16] = s2 && a2(l2, e16) ? l2[e16] : d2("Symbol." + e16)), u2[e16];
  };
});
var L = o((e15, t) => {
  var n = s(), r2 = _(), i2 = w(), a2 = D(), o3 = O(), c3 = I(), l2 = TypeError, u2 = c3("toPrimitive");
  t.exports = function(e16, t2) {
    if (!r2(e16) || i2(e16)) return e16;
    var s2 = a2(e16, u2), c4;
    if (s2) {
      if (t2 === void 0 && (t2 = "default"), c4 = n(s2, e16, t2), !r2(c4) || i2(c4)) return c4;
      throw new l2("Can't convert object to primitive value");
    }
    return t2 === void 0 && (t2 = "number"), o3(e16, t2);
  };
});
var R = o((e15, t) => {
  var n = L(), r2 = w();
  t.exports = function(e16) {
    var t2 = n(e16, "string");
    return r2(t2) ? t2 : t2 + "";
  };
});
var z = o((e15, t) => {
  var n = r(), i2 = _(), a2 = n.document, o3 = i2(a2) && i2(a2.createElement);
  t.exports = function(e16) {
    return o3 ? a2.createElement(e16) : {};
  };
});
var ee = o((e15, t) => {
  var n = a(), r2 = i(), o3 = z();
  t.exports = !n && !r2(function() {
    return Object.defineProperty(o3("div"), "a", { get: function() {
      return 7;
    } }).a !== 7;
  });
});
var te = o((e15) => {
  var t = a(), n = s(), r2 = c2(), i2 = l(), o3 = h(), u2 = R(), d2 = P(), f2 = ee(), p2 = Object.getOwnPropertyDescriptor;
  e15.f = t ? p2 : function(e16, t2) {
    if (e16 = o3(e16), t2 = u2(t2), f2) try {
      return p2(e16, t2);
    } catch {
    }
    if (d2(e16, t2)) return i2(!n(r2.f, e16, t2), e16[t2]);
  };
});
var ne = o((e15, t) => {
  var n = a(), r2 = i();
  t.exports = n && r2(function() {
    return Object.defineProperty(function() {
    }, "prototype", {
      value: 42,
      writable: false
    }).prototype !== 42;
  });
});
var B = o((e15, t) => {
  var n = _(), r2 = String, i2 = TypeError;
  t.exports = function(e16) {
    if (n(e16)) return e16;
    throw new i2(r2(e16) + " is not an object");
  };
});
var re = o((e15) => {
  var t = a(), n = ee(), r2 = ne(), i2 = B(), o3 = R(), s2 = TypeError, c3 = Object.defineProperty, l2 = Object.getOwnPropertyDescriptor, u2 = "enumerable", d2 = "configurable", f2 = "writable";
  e15.f = t ? r2 ? function(e16, t2, n2) {
    if (i2(e16), t2 = o3(t2), i2(n2), typeof e16 == "function" && t2 === "prototype" && "value" in n2 && f2 in n2 && !n2[f2]) {
      var r3 = l2(e16, t2);
      r3 && r3[f2] && (e16[t2] = n2.value, n2 = {
        configurable: d2 in n2 ? n2[d2] : r3[d2],
        enumerable: u2 in n2 ? n2[u2] : r3[u2],
        writable: false
      });
    }
    return c3(e16, t2, n2);
  } : c3 : function(e16, t2, r3) {
    if (i2(e16), t2 = o3(t2), i2(r3), n) try {
      return c3(e16, t2, r3);
    } catch {
    }
    if ("get" in r3 || "set" in r3) throw new s2("Accessors not supported");
    return "value" in r3 && (e16[t2] = r3.value), e16;
  };
});
var ie = o((e15, t) => {
  var n = a(), r2 = re(), i2 = l();
  t.exports = n ? function(e16, t2, n2) {
    return r2.f(e16, t2, i2(1, n2));
  } : function(e16, t2, n2) {
    return e16[t2] = n2, e16;
  };
});
var ae = o((e15, t) => {
  var n = a(), r2 = P(), i2 = Function.prototype, o3 = n && Object.getOwnPropertyDescriptor, s2 = r2(i2, "name");
  t.exports = {
    EXISTS: s2,
    PROPER: s2 && (function() {
    }).name === "something",
    CONFIGURABLE: s2 && (!n || n && o3(i2, "name").configurable)
  };
});
var oe = o((e15, t) => {
  var n = u(), r2 = g(), i2 = j(), a2 = n(Function.toString);
  r2(i2.inspectSource) || (i2.inspectSource = function(e16) {
    return a2(e16);
  }), t.exports = i2.inspectSource;
});
var se = o((e15, t) => {
  var n = r(), i2 = g(), a2 = n.WeakMap;
  t.exports = i2(a2) && /native code/.test(String(a2));
});
var ce = o((e15, t) => {
  var n = M(), r2 = F(), i2 = n("keys");
  t.exports = function(e16) {
    return i2[e16] || (i2[e16] = r2(e16));
  };
});
var le = o((e15, t) => {
  t.exports = {};
});
var ue = o((e15, t) => {
  var n = se(), i2 = r(), a2 = _(), o3 = ie(), s2 = P(), c3 = j(), l2 = ce(), u2 = le(), d2 = "Object already initialized", f2 = i2.TypeError, p2 = i2.WeakMap, m2, h2, g2, v2 = function(e16) {
    return g2(e16) ? h2(e16) : m2(e16, {});
  }, y2 = function(e16) {
    return function(t2) {
      var n2;
      if (!a2(t2) || (n2 = h2(t2)).type !== e16) throw new f2("Incompatible receiver, " + e16 + " required");
      return n2;
    };
  };
  if (n || c3.state) {
    var b2 = c3.state || (c3.state = new p2());
    b2.get = b2.get, b2.has = b2.has, b2.set = b2.set, m2 = function(e16, t2) {
      if (b2.has(e16)) throw new f2(d2);
      return t2.facade = e16, b2.set(e16, t2), t2;
    }, h2 = function(e16) {
      return b2.get(e16) || {};
    }, g2 = function(e16) {
      return b2.has(e16);
    };
  } else {
    var x2 = l2("state");
    u2[x2] = true, m2 = function(e16, t2) {
      if (s2(e16, x2)) throw new f2(d2);
      return t2.facade = e16, o3(e16, x2, t2), t2;
    }, h2 = function(e16) {
      return s2(e16, x2) ? e16[x2] : {};
    }, g2 = function(e16) {
      return s2(e16, x2);
    };
  }
  t.exports = {
    set: m2,
    get: h2,
    has: g2,
    enforce: v2,
    getterFor: y2
  };
});
var de = o((e15, t) => {
  var n = u(), r2 = i(), o3 = g(), s2 = P(), c3 = a(), l2 = ae().CONFIGURABLE, d2 = oe(), f2 = ue(), p2 = f2.enforce, m2 = f2.get, h2 = String, _2 = Object.defineProperty, v2 = n("".slice), y2 = n("".replace), b2 = n([].join), x2 = c3 && !r2(function() {
    return _2(function() {
    }, "length", { value: 8 }).length !== 8;
  }), S2 = String(String).split("String"), C2 = t.exports = function(e16, t2, n2) {
    v2(h2(t2), 0, 7) === "Symbol(" && (t2 = "[" + y2(h2(t2), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), n2 && n2.getter && (t2 = "get " + t2), n2 && n2.setter && (t2 = "set " + t2), (!s2(e16, "name") || l2 && e16.name !== t2) && (c3 ? _2(e16, "name", {
      value: t2,
      configurable: true
    }) : e16.name = t2), x2 && n2 && s2(n2, "arity") && e16.length !== n2.arity && _2(e16, "length", { value: n2.arity });
    try {
      n2 && s2(n2, "constructor") && n2.constructor ? c3 && _2(e16, "prototype", { writable: false }) : e16.prototype && (e16.prototype = void 0);
    } catch {
    }
    var r3 = p2(e16);
    return s2(r3, "source") || (r3.source = b2(S2, typeof t2 == "string" ? t2 : "")), e16;
  };
  Function.prototype.toString = C2(function() {
    return o3(this) && m2(this).source || d2(this);
  }, "toString");
});
var fe = o((e15, t) => {
  var n = g(), r2 = re(), i2 = de(), a2 = A();
  t.exports = function(e16, t2, o3, s2) {
    s2 || (s2 = {});
    var c3 = s2.enumerable, l2 = s2.name === void 0 ? t2 : s2.name;
    if (n(o3) && i2(o3, l2, s2), s2.global) c3 ? e16[t2] = o3 : a2(t2, o3);
    else {
      try {
        s2.unsafe ? e16[t2] && (c3 = true) : delete e16[t2];
      } catch {
      }
      c3 ? e16[t2] = o3 : r2.f(e16, t2, {
        value: o3,
        enumerable: false,
        configurable: !s2.nonConfigurable,
        writable: !s2.nonWritable
      });
    }
    return e16;
  };
});
var pe = o((e15, t) => {
  var n = Math.ceil, r2 = Math.floor;
  t.exports = Math.trunc || function(e16) {
    var t2 = +e16;
    return (t2 > 0 ? r2 : n)(t2);
  };
});
var me = o((e15, t) => {
  var n = pe();
  t.exports = function(e16) {
    var t2 = +e16;
    return t2 !== t2 || t2 === 0 ? 0 : n(t2);
  };
});
var he = o((e15, t) => {
  var n = me(), r2 = Math.max, i2 = Math.min;
  t.exports = function(e16, t2) {
    var a2 = n(e16);
    return a2 < 0 ? r2(a2 + t2, 0) : i2(a2, t2);
  };
});
var V = o((e15, t) => {
  var n = me(), r2 = Math.min;
  t.exports = function(e16) {
    var t2 = n(e16);
    return t2 > 0 ? r2(t2, 9007199254740991) : 0;
  };
});
var ge = o((e15, t) => {
  var n = V();
  t.exports = function(e16) {
    return n(e16.length);
  };
});
var _e = o((e15, t) => {
  var n = h(), r2 = he(), i2 = ge(), a2 = function(e16) {
    return function(t2, a3, o3) {
      var s2 = n(t2), c3 = i2(s2);
      if (c3 === 0) return !e16 && -1;
      var l2 = r2(o3, c3), u2;
      if (e16 && a3 !== a3) {
        for (; c3 > l2; ) if (u2 = s2[l2++], u2 !== u2) return true;
      } else for (; c3 > l2; l2++) if ((e16 || l2 in s2) && s2[l2] === a3) return e16 || l2 || 0;
      return !e16 && -1;
    };
  };
  t.exports = {
    includes: a2(true),
    indexOf: a2(false)
  };
});
var H = o((e15, t) => {
  var n = u(), r2 = P(), i2 = h(), a2 = _e().indexOf, o3 = le(), s2 = n([].push);
  t.exports = function(e16, t2) {
    var n2 = i2(e16), c3 = 0, l2 = [], u2;
    for (u2 in n2) !r2(o3, u2) && r2(n2, u2) && s2(l2, u2);
    for (; t2.length > c3; ) r2(n2, u2 = t2[c3++]) && (~a2(l2, u2) || s2(l2, u2));
    return l2;
  };
});
var ve = o((e15, t) => {
  t.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
  ];
});
var ye = o((e15) => {
  var t = H(), n = ve().concat("length", "prototype");
  e15.f = Object.getOwnPropertyNames || function(e16) {
    return t(e16, n);
  };
});
var be = o((e15) => {
  e15.f = Object.getOwnPropertySymbols;
});
var xe = o((e15, t) => {
  var n = v(), r2 = u(), i2 = ye(), a2 = be(), o3 = B(), s2 = r2([].concat);
  t.exports = n("Reflect", "ownKeys") || function(e16) {
    var t2 = i2.f(o3(e16)), n2 = a2.f;
    return n2 ? s2(t2, n2(e16)) : t2;
  };
});
var Se = o((e15, t) => {
  var n = P(), r2 = xe(), i2 = te(), a2 = re();
  t.exports = function(e16, t2, o3) {
    for (var s2 = r2(t2), c3 = a2.f, l2 = i2.f, u2 = 0; u2 < s2.length; u2++) {
      var d2 = s2[u2];
      !n(e16, d2) && !(o3 && n(o3, d2)) && c3(e16, d2, l2(t2, d2));
    }
  };
});
var Ce = o((e15, t) => {
  var n = i(), r2 = g(), a2 = /#|\.prototype\./, o3 = function(e16, t2) {
    var i2 = c3[s2(e16)];
    return i2 === u2 ? true : i2 === l2 ? false : r2(t2) ? n(t2) : !!t2;
  }, s2 = o3.normalize = function(e16) {
    return String(e16).replace(a2, ".").toLowerCase();
  }, c3 = o3.data = {}, l2 = o3.NATIVE = "N", u2 = o3.POLYFILL = "P";
  t.exports = o3;
});
var U = o((e15, t) => {
  var n = r(), i2 = te().f, a2 = ie(), o3 = fe(), s2 = A(), c3 = Se(), l2 = Ce();
  t.exports = function(e16, t2) {
    var r2 = e16.target, u2 = e16.global, d2 = e16.stat, f2, p2 = u2 ? n : d2 ? n[r2] || s2(r2, {}) : n[r2] && n[r2].prototype, m2, h2, g2, _2;
    if (p2) for (m2 in t2) {
      if (g2 = t2[m2], e16.dontCallGetSet ? (_2 = i2(p2, m2), h2 = _2 && _2.value) : h2 = p2[m2], f2 = l2(u2 ? m2 : r2 + (d2 ? "." : "#") + m2, e16.forced), !f2 && h2 !== void 0) {
        if (typeof g2 == typeof h2) continue;
        c3(g2, h2);
      }
      (e16.sham || h2 && h2.sham) && a2(g2, "sham", true), o3(p2, m2, g2, e16);
    }
  };
});
var we = o((e15, t) => {
  var n = r(), i2 = b(), a2 = d(), o3 = function(e16) {
    return i2.slice(0, e16.length) === e16;
  };
  t.exports = function() {
    return o3("Bun/") ? "BUN" : o3("Cloudflare-Workers") ? "CLOUDFLARE" : o3("Deno/") ? "DENO" : o3("Node.js/") ? "NODE" : n.Bun && typeof Bun.version == "string" ? "BUN" : n.Deno && typeof Deno.version == "object" ? "DENO" : a2(n.process) === "process" ? "NODE" : n.window && n.document ? "BROWSER" : "REST";
  }();
});
var Te = o((e15, t) => {
  t.exports = we() === "NODE";
});
var Ee = o((e15, t) => {
  t.exports = r();
});
var De = o((e15, t) => {
  var n = u(), r2 = E();
  t.exports = function(e16, t2, i2) {
    try {
      return n(r2(Object.getOwnPropertyDescriptor(e16, t2)[i2]));
    } catch {
    }
  };
});
var Oe = o((e15, t) => {
  var n = _();
  t.exports = function(e16) {
    return n(e16) || e16 === null;
  };
});
var ke = o((e15, t) => {
  var n = Oe(), r2 = String, i2 = TypeError;
  t.exports = function(e16) {
    if (n(e16)) return e16;
    throw new i2("Can't set " + r2(e16) + " as a prototype");
  };
});
var Ae = o((e15, t) => {
  var n = De(), r2 = _(), i2 = m(), a2 = ke();
  t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var e16 = false, t2 = {}, o3;
    try {
      o3 = n(Object.prototype, "__proto__", "set"), o3(t2, []), e16 = t2 instanceof Array;
    } catch {
    }
    return function(t3, n2) {
      return i2(t3), a2(n2), r2(t3) && (e16 ? o3(t3, n2) : t3.__proto__ = n2), t3;
    };
  }() : void 0);
});
var je = o((e15, t) => {
  var n = re().f, r2 = P(), i2 = I()("toStringTag");
  t.exports = function(e16, t2, a2) {
    e16 && !a2 && (e16 = e16.prototype), e16 && !r2(e16, i2) && n(e16, i2, {
      configurable: true,
      value: t2
    });
  };
});
var Me = o((e15, t) => {
  var n = de(), r2 = re();
  t.exports = function(e16, t2, i2) {
    return i2.get && n(i2.get, t2, { getter: true }), i2.set && n(i2.set, t2, { setter: true }), r2.f(e16, t2, i2);
  };
});
var Ne = o((e15, t) => {
  var n = v(), r2 = Me(), i2 = I(), o3 = a(), s2 = i2("species");
  t.exports = function(e16) {
    var t2 = n(e16);
    o3 && t2 && !t2[s2] && r2(t2, s2, {
      configurable: true,
      get: function() {
        return this;
      }
    });
  };
});
var W = o((e15, t) => {
  var n = y(), r2 = TypeError;
  t.exports = function(e16, t2) {
    if (n(t2, e16)) return e16;
    throw new r2("Incorrect invocation");
  };
});
var Pe = o((e15, t) => {
  var n = I()("toStringTag"), r2 = {};
  r2[n] = "z", t.exports = String(r2) === "[object z]";
});
var Fe = o((e15, t) => {
  var n = Pe(), r2 = g(), i2 = d(), a2 = I()("toStringTag"), o3 = Object, s2 = i2(/* @__PURE__ */ function() {
    return arguments;
  }()) === "Arguments", c3 = function(e16, t2) {
    try {
      return e16[t2];
    } catch {
    }
  };
  t.exports = n ? i2 : function(e16) {
    var t2, n2, l2;
    return e16 === void 0 ? "Undefined" : e16 === null ? "Null" : typeof (n2 = c3(t2 = o3(e16), a2)) == "string" ? n2 : s2 ? i2(t2) : (l2 = i2(t2)) === "Object" && r2(t2.callee) ? "Arguments" : l2;
  };
});
var Ie = o((e15, t) => {
  var n = u(), r2 = i(), a2 = g(), o3 = Fe(), s2 = v(), c3 = oe(), l2 = function() {
  }, d2 = s2("Reflect", "construct"), f2 = /^\s*(?:class|function)\b/, p2 = n(f2.exec), m2 = !f2.test(l2), h2 = function(e16) {
    if (!a2(e16)) return false;
    try {
      return d2(l2, [], e16), true;
    } catch {
      return false;
    }
  }, _2 = function(e16) {
    if (!a2(e16)) return false;
    switch (o3(e16)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return false;
    }
    try {
      return m2 || !!p2(f2, c3(e16));
    } catch {
      return true;
    }
  };
  _2.sham = true, t.exports = !d2 || r2(function() {
    var e16;
    return h2(h2.call) || !h2(Object) || !h2(function() {
      e16 = true;
    }) || e16;
  }) ? _2 : h2;
});
var Le = o((e15, t) => {
  var n = Ie(), r2 = T(), i2 = TypeError;
  t.exports = function(e16) {
    if (n(e16)) return e16;
    throw new i2(r2(e16) + " is not a constructor");
  };
});
var Re = o((e15, t) => {
  var n = B(), r2 = Le(), i2 = p(), a2 = I()("species");
  t.exports = function(e16, t2) {
    var o3 = n(e16).constructor, s2;
    return o3 === void 0 || i2(s2 = n(o3)[a2]) ? t2 : r2(s2);
  };
});
var ze = o((e15, t) => {
  var n = o2(), r2 = Function.prototype, i2 = r2.apply, a2 = r2.call;
  t.exports = typeof Reflect == "object" && Reflect.apply || (n ? a2.bind(i2) : function() {
    return a2.apply(i2, arguments);
  });
});
var Be = o((e15, t) => {
  var n = d(), r2 = u();
  t.exports = function(e16) {
    if (n(e16) === "Function") return r2(e16);
  };
});
var Ve = o((e15, t) => {
  var n = Be(), r2 = E(), i2 = o2(), a2 = n(n.bind);
  t.exports = function(e16, t2) {
    return r2(e16), t2 === void 0 ? e16 : i2 ? a2(e16, t2) : function() {
      return e16.apply(t2, arguments);
    };
  };
});
var He = o((e15, t) => {
  t.exports = v()("document", "documentElement");
});
var Ue = o((e15, t) => {
  t.exports = u()([].slice);
});
var We = o((e15, t) => {
  var n = TypeError;
  t.exports = function(e16, t2) {
    if (e16 < t2) throw new n("Not enough arguments");
    return e16;
  };
});
var Ge = o((e15, t) => {
  var n = b();
  t.exports = /ipad|iphone|ipod/i.test(n) && /applewebkit/i.test(n);
});
var Ke = o((e15, t) => {
  var n = r(), a2 = ze(), o3 = Ve(), s2 = g(), c3 = P(), l2 = i(), u2 = He(), d2 = Ue(), f2 = z(), p2 = We(), m2 = Ge(), h2 = Te(), _2 = n.setImmediate, v2 = n.clearImmediate, y2 = n.process, b2 = n.Dispatch, x2 = n.Function, S2 = n.MessageChannel, C2 = n.String, w2 = 0, T2 = {}, E2 = "onreadystatechange", D2, O2, k2, A2;
  l2(function() {
    D2 = n.location;
  });
  var j2 = function(e16) {
    if (c3(T2, e16)) {
      var t2 = T2[e16];
      delete T2[e16], t2();
    }
  }, M2 = function(e16) {
    return function() {
      j2(e16);
    };
  }, N2 = function(e16) {
    j2(e16.data);
  }, F2 = function(e16) {
    n.postMessage(C2(e16), D2.protocol + "//" + D2.host);
  };
  (!_2 || !v2) && (_2 = function(e16) {
    p2(arguments.length, 1);
    var t2 = s2(e16) ? e16 : x2(e16), n2 = d2(arguments, 1);
    return T2[++w2] = function() {
      a2(t2, void 0, n2);
    }, O2(w2), w2;
  }, v2 = function(e16) {
    delete T2[e16];
  }, h2 ? O2 = function(e16) {
    y2.nextTick(M2(e16));
  } : b2 && b2.now ? O2 = function(e16) {
    b2.now(M2(e16));
  } : S2 && !m2 ? (k2 = new S2(), A2 = k2.port2, k2.port1.onmessage = N2, O2 = o3(A2.postMessage, A2)) : n.addEventListener && s2(n.postMessage) && !n.importScripts && D2 && D2.protocol !== "file:" && !l2(F2) ? (O2 = F2, n.addEventListener("message", N2, false)) : O2 = E2 in f2("script") ? function(e16) {
    u2.appendChild(f2("script"))[E2] = function() {
      u2.removeChild(this), j2(e16);
    };
  } : function(e16) {
    setTimeout(M2(e16), 0);
  }), t.exports = {
    set: _2,
    clear: v2
  };
});
var qe = o((e15, t) => {
  var n = r(), i2 = a(), o3 = Object.getOwnPropertyDescriptor;
  t.exports = function(e16) {
    if (!i2) return n[e16];
    var t2 = o3(n, e16);
    return t2 && t2.value;
  };
});
var Je = o((e15, t) => {
  var n = function() {
    this.head = null, this.tail = null;
  };
  n.prototype = {
    add: function(e16) {
      var t2 = {
        item: e16,
        next: null
      }, n2 = this.tail;
      n2 ? n2.next = t2 : this.head = t2, this.tail = t2;
    },
    get: function() {
      var e16 = this.head;
      if (e16) return (this.head = e16.next) === null && (this.tail = null), e16.item;
    }
  }, t.exports = n;
});
var Ye = o((e15, t) => {
  var n = b();
  t.exports = /ipad|iphone|ipod/i.test(n) && typeof Pebble < "u";
});
var Xe = o((e15, t) => {
  var n = b();
  t.exports = /web0s(?!.*chrome)/i.test(n);
});
var Ze = o((e15, t) => {
  var n = r(), i2 = qe(), a2 = Ve(), o3 = Ke().set, s2 = Je(), c3 = Ge(), l2 = Ye(), u2 = Xe(), d2 = Te(), f2 = n.MutationObserver || n.WebKitMutationObserver, p2 = n.document, m2 = n.process, h2 = n.Promise, g2 = i2("queueMicrotask"), _2, v2, y2, b2, x2;
  if (!g2) {
    var S2 = new s2(), C2 = function() {
      var e16, t2;
      for (d2 && (e16 = m2.domain) && e16.exit(); t2 = S2.get(); ) try {
        t2();
      } catch (e17) {
        throw S2.head && _2(), e17;
      }
      e16 && e16.enter();
    };
    !c3 && !d2 && !u2 && f2 && p2 ? (v2 = true, y2 = p2.createTextNode(""), new f2(C2).observe(y2, { characterData: true }), _2 = function() {
      y2.data = v2 = !v2;
    }) : !l2 && h2 && h2.resolve ? (b2 = h2.resolve(void 0), b2.constructor = h2, x2 = a2(b2.then, b2), _2 = function() {
      x2(C2);
    }) : d2 ? _2 = function() {
      m2.nextTick(C2);
    } : (o3 = a2(o3, n), _2 = function() {
      o3(C2);
    }), g2 = function(e16) {
      S2.head || _2(), S2.add(e16);
    };
  }
  t.exports = g2;
});
var Qe = o((e15, t) => {
  t.exports = function(e16, t2) {
    try {
      arguments.length === 1 ? console.error(e16) : console.error(e16, t2);
    } catch {
    }
  };
});
var $e = o((e15, t) => {
  t.exports = function(e16) {
    try {
      return {
        error: false,
        value: e16()
      };
    } catch (e17) {
      return {
        error: true,
        value: e17
      };
    }
  };
});
var et = o((e15, t) => {
  t.exports = r().Promise;
});
var tt = o((e15, t) => {
  var n = r(), i2 = et(), a2 = g(), o3 = Ce(), s2 = oe(), c3 = I(), l2 = we(), u2 = k(), d2 = x(), f2 = i2 && i2.prototype, p2 = c3("species"), m2 = false, h2 = a2(n.PromiseRejectionEvent);
  t.exports = {
    CONSTRUCTOR: o3("Promise", function() {
      var e16 = s2(i2), t2 = e16 !== String(i2);
      if (!t2 && d2 === 66 || u2 && !(f2.catch && f2.finally)) return true;
      if (!d2 || d2 < 51 || !/native code/.test(e16)) {
        var n2 = new i2(function(e17) {
          e17(1);
        }), r2 = function(e17) {
          e17(function() {
          }, function() {
          });
        }, a3 = n2.constructor = {};
        if (a3[p2] = r2, m2 = n2.then(function() {
        }) instanceof r2, !m2) return true;
      }
      return !t2 && (l2 === "BROWSER" || l2 === "DENO") && !h2;
    }),
    REJECTION_EVENT: h2,
    SUBCLASSING: m2
  };
});
var nt = o((e15, t) => {
  var n = E(), r2 = TypeError, i2 = function(e16) {
    var t2, i3;
    this.promise = new e16(function(e17, n2) {
      if (t2 !== void 0 || i3 !== void 0) throw new r2("Bad Promise constructor");
      t2 = e17, i3 = n2;
    }), this.resolve = n(t2), this.reject = n(i3);
  };
  t.exports.f = function(e16) {
    return new i2(e16);
  };
});
var rt = o(() => {
  var e15 = U(), t = k(), n = Te(), i2 = r(), a2 = Ee(), o3 = s(), c3 = fe(), l2 = Ae(), u2 = je(), d2 = Ne(), f2 = E(), p2 = g(), m2 = _(), h2 = W(), v2 = Re(), y2 = Ke().set, b2 = Ze(), x2 = Qe(), S2 = $e(), C2 = Je(), w2 = ue(), T2 = et(), D2 = tt(), O2 = nt(), A2 = "Promise", j2 = D2.CONSTRUCTOR, M2 = D2.REJECTION_EVENT, N2 = D2.SUBCLASSING, P2 = w2.getterFor(A2), F2 = w2.set, I2 = T2 && T2.prototype, L2 = T2, R2 = I2, z2 = i2.TypeError, ee2 = i2.document, te2 = i2.process, ne2 = O2.f, B2 = ne2, re2 = !!(ee2 && ee2.createEvent && i2.dispatchEvent), ie2 = "unhandledrejection", ae2 = "rejectionhandled", oe2 = 0, se2 = 1, ce2 = 2, le2 = 1, de2 = 2, pe2, me2, he2, V2, ge2 = function(e16) {
    var t2;
    return m2(e16) && p2(t2 = e16.then) ? t2 : false;
  }, _e2 = function(e16, t2) {
    var n2 = t2.value, r2 = t2.state === se2, i3 = r2 ? e16.ok : e16.fail, a3 = e16.resolve, s2 = e16.reject, c4 = e16.domain, l3, u3, d3;
    try {
      i3 ? (r2 || (t2.rejection === de2 && xe2(t2), t2.rejection = le2), i3 === true ? l3 = n2 : (c4 && c4.enter(), l3 = i3(n2), c4 && (c4.exit(), d3 = true)), l3 === e16.promise ? s2(new z2("Promise-chain cycle")) : (u3 = ge2(l3)) ? o3(u3, l3, a3, s2) : a3(l3)) : s2(n2);
    } catch (e17) {
      c4 && !d3 && c4.exit(), s2(e17);
    }
  }, H2 = function(e16, t2) {
    e16.notified || (e16.notified = true, b2(function() {
      for (var n2 = e16.reactions, r2; r2 = n2.get(); ) _e2(r2, e16);
      e16.notified = false, t2 && !e16.rejection && ye2(e16);
    }));
  }, ve2 = function(e16, t2, n2) {
    var r2, a3;
    re2 ? (r2 = ee2.createEvent("Event"), r2.promise = t2, r2.reason = n2, r2.initEvent(e16, false, true), i2.dispatchEvent(r2)) : r2 = {
      promise: t2,
      reason: n2
    }, !M2 && (a3 = i2["on" + e16]) ? a3(r2) : e16 === ie2 && x2("Unhandled promise rejection", n2);
  }, ye2 = function(e16) {
    o3(y2, i2, function() {
      var t2 = e16.facade, r2 = e16.value, i3 = be2(e16), a3;
      if (i3 && (a3 = S2(function() {
        n ? te2.emit("unhandledRejection", r2, t2) : ve2(ie2, t2, r2);
      }), e16.rejection = n || be2(e16) ? de2 : le2, a3.error)) throw a3.value;
    });
  }, be2 = function(e16) {
    return e16.rejection !== le2 && !e16.parent;
  }, xe2 = function(e16) {
    o3(y2, i2, function() {
      var t2 = e16.facade;
      n ? te2.emit("rejectionHandled", t2) : ve2(ae2, t2, e16.value);
    });
  }, Se2 = function(e16, t2, n2) {
    return function(r2) {
      e16(t2, r2, n2);
    };
  }, Ce2 = function(e16, t2, n2) {
    e16.done || (e16.done = true, n2 && (e16 = n2), e16.value = t2, e16.state = ce2, H2(e16, true));
  }, we2 = function(e16, t2, n2) {
    if (!e16.done) {
      e16.done = true, n2 && (e16 = n2);
      try {
        if (e16.facade === t2) throw new z2("Promise can't be resolved itself");
        var r2 = ge2(t2);
        r2 ? b2(function() {
          var n3 = { done: false };
          try {
            o3(r2, t2, Se2(we2, n3, e16), Se2(Ce2, n3, e16));
          } catch (t3) {
            Ce2(n3, t3, e16);
          }
        }) : (e16.value = t2, e16.state = se2, H2(e16, false));
      } catch (t3) {
        Ce2({ done: false }, t3, e16);
      }
    }
  };
  if (j2 && (L2 = function(e16) {
    h2(this, R2), f2(e16), o3(pe2, this);
    var t2 = P2(this);
    try {
      e16(Se2(we2, t2), Se2(Ce2, t2));
    } catch (e17) {
      Ce2(t2, e17);
    }
  }, R2 = L2.prototype, pe2 = function(e16) {
    F2(this, {
      type: A2,
      done: false,
      notified: false,
      parent: false,
      reactions: new C2(),
      rejection: false,
      state: oe2,
      value: null
    });
  }, pe2.prototype = c3(R2, "then", function(e16, t2) {
    var r2 = P2(this), i3 = ne2(v2(this, L2));
    return r2.parent = true, i3.ok = p2(e16) ? e16 : true, i3.fail = p2(t2) && t2, i3.domain = n ? te2.domain : void 0, r2.state === oe2 ? r2.reactions.add(i3) : b2(function() {
      _e2(i3, r2);
    }), i3.promise;
  }), me2 = function() {
    var e16 = new pe2(), t2 = P2(e16);
    this.promise = e16, this.resolve = Se2(we2, t2), this.reject = Se2(Ce2, t2);
  }, O2.f = ne2 = function(e16) {
    return e16 === L2 || e16 === he2 ? new me2(e16) : B2(e16);
  }, !t && p2(T2) && I2 !== Object.prototype)) {
    V2 = I2.then, N2 || c3(I2, "then", function(e16, t2) {
      var n2 = this;
      return new L2(function(e17, t3) {
        o3(V2, n2, e17, t3);
      }).then(e16, t2);
    }, { unsafe: true });
    try {
      delete I2.constructor;
    } catch {
    }
    l2 && l2(I2, R2);
  }
  e15({
    global: true,
    constructor: true,
    wrap: true,
    forced: j2
  }, { Promise: L2 }), he2 = a2.Promise, u2(L2, A2, false, true), d2(A2);
});
var it = o((e15, t) => {
  t.exports = {};
});
var at = o((e15, t) => {
  var n = I(), r2 = it(), i2 = n("iterator"), a2 = Array.prototype;
  t.exports = function(e16) {
    return e16 !== void 0 && (r2.Array === e16 || a2[i2] === e16);
  };
});
var ot = o((e15, t) => {
  var n = Fe(), r2 = D(), i2 = p(), a2 = it(), o3 = I()("iterator");
  t.exports = function(e16) {
    if (!i2(e16)) return r2(e16, o3) || r2(e16, "@@iterator") || a2[n(e16)];
  };
});
var st = o((e15, t) => {
  var n = s(), r2 = E(), i2 = B(), a2 = T(), o3 = ot(), c3 = TypeError;
  t.exports = function(e16, t2) {
    var s2 = arguments.length < 2 ? o3(e16) : t2;
    if (r2(s2)) return i2(n(s2, e16));
    throw new c3(a2(e16) + " is not iterable");
  };
});
var ct = o((e15, t) => {
  var n = s(), r2 = B(), i2 = D();
  t.exports = function(e16, t2, a2) {
    var o3, s2;
    r2(e16);
    try {
      if (o3 = i2(e16, "return"), !o3) {
        if (t2 === "throw") throw a2;
        return a2;
      }
      o3 = n(o3, e16);
    } catch (e17) {
      s2 = true, o3 = e17;
    }
    if (t2 === "throw") throw a2;
    if (s2) throw o3;
    return r2(o3), a2;
  };
});
var lt = o((e15, t) => {
  var n = Ve(), r2 = s(), i2 = B(), a2 = T(), o3 = at(), c3 = ge(), l2 = y(), u2 = st(), d2 = ot(), f2 = ct(), p2 = TypeError, m2 = function(e16, t2) {
    this.stopped = e16, this.result = t2;
  }, h2 = m2.prototype;
  t.exports = function(e16, t2, s2) {
    var g2 = s2 && s2.that, _2 = !!(s2 && s2.AS_ENTRIES), v2 = !!(s2 && s2.IS_RECORD), y2 = !!(s2 && s2.IS_ITERATOR), b2 = !!(s2 && s2.INTERRUPTED), x2 = n(t2, g2), S2, C2, w2, T2, E2, D2, O2, k2 = function(e17) {
      var t3 = S2;
      return S2 = void 0, t3 && f2(t3, "normal"), new m2(true, e17);
    }, A2 = function(e17) {
      return _2 ? (i2(e17), b2 ? x2(e17[0], e17[1], k2) : x2(e17[0], e17[1])) : b2 ? x2(e17, k2) : x2(e17);
    };
    if (v2) S2 = e16.iterator;
    else if (y2) S2 = e16;
    else {
      if (C2 = d2(e16), !C2) throw new p2(a2(e16) + " is not iterable");
      if (o3(C2)) {
        for (w2 = 0, T2 = c3(e16); T2 > w2; w2++) if (E2 = A2(e16[w2]), E2 && l2(h2, E2)) return E2;
        return new m2(false);
      }
      S2 = u2(e16, C2);
    }
    for (D2 = v2 ? e16.next : S2.next; !(O2 = r2(D2, S2)).done; ) {
      var j2 = O2.value;
      try {
        E2 = A2(j2);
      } catch (e17) {
        if (S2) f2(S2, "throw", e17);
        else throw e17;
      }
      if (typeof E2 == "object" && E2 && l2(h2, E2)) return E2;
    }
    return new m2(false);
  };
});
var ut = o((e15, t) => {
  var n = I()("iterator"), r2 = false;
  try {
    var i2 = 0, a2 = {
      next: function() {
        return { done: !!i2++ };
      },
      return: function() {
        r2 = true;
      }
    };
    a2[n] = function() {
      return this;
    }, Array.from(a2, function() {
      throw 2;
    });
  } catch {
  }
  t.exports = function(e16, t2) {
    try {
      if (!t2 && !r2) return false;
    } catch {
      return false;
    }
    var i3 = false;
    try {
      var a3 = {};
      a3[n] = function() {
        return { next: function() {
          return { done: i3 = true };
        } };
      }, e16(a3);
    } catch {
    }
    return i3;
  };
});
var dt = o((e15, t) => {
  var n = et(), r2 = ut();
  t.exports = tt().CONSTRUCTOR || !r2(function(e16) {
    n.all(e16).then(void 0, function() {
    });
  });
});
var ft = o(() => {
  var e15 = U(), t = s(), n = E(), r2 = nt(), i2 = $e(), a2 = lt();
  e15({
    target: "Promise",
    stat: true,
    forced: dt()
  }, { all: function(e16) {
    var o3 = this, s2 = r2.f(o3), c3 = s2.resolve, l2 = s2.reject, u2 = i2(function() {
      var r3 = n(o3.resolve), i3 = [], s3 = 0, u3 = 1;
      a2(e16, function(e17) {
        var n2 = s3++, a3 = false;
        u3++, t(r3, o3, e17).then(function(e18) {
          a3 || (a3 = true, i3[n2] = e18, --u3 || c3(i3));
        }, l2);
      }), --u3 || c3(i3);
    });
    return u2.error && l2(u2.value), s2.promise;
  } });
});
var pt = o(() => {
  var e15 = U(), t = k(), n = tt().CONSTRUCTOR, r2 = et(), i2 = v(), a2 = g(), o3 = fe(), s2 = r2 && r2.prototype;
  if (e15({
    target: "Promise",
    proto: true,
    forced: n,
    real: true
  }, { catch: function(e16) {
    return this.then(void 0, e16);
  } }), !t && a2(r2)) {
    var c3 = i2("Promise").prototype.catch;
    s2.catch !== c3 && o3(s2, "catch", c3, { unsafe: true });
  }
});
var mt = o(() => {
  var e15 = U(), t = s(), n = E(), r2 = nt(), i2 = $e(), a2 = lt();
  e15({
    target: "Promise",
    stat: true,
    forced: dt()
  }, { race: function(e16) {
    var o3 = this, s2 = r2.f(o3), c3 = s2.reject, l2 = i2(function() {
      var r3 = n(o3.resolve);
      a2(e16, function(e17) {
        t(r3, o3, e17).then(s2.resolve, c3);
      });
    });
    return l2.error && c3(l2.value), s2.promise;
  } });
});
var ht = o(() => {
  var e15 = U(), t = nt(), n = tt().CONSTRUCTOR;
  e15({
    target: "Promise",
    stat: true,
    forced: n
  }, { reject: function(e16) {
    var n2 = t.f(this), r2 = n2.reject;
    return r2(e16), n2.promise;
  } });
});
var gt = o((e15, t) => {
  var n = B(), r2 = _(), i2 = nt();
  t.exports = function(e16, t2) {
    if (n(e16), r2(t2) && t2.constructor === e16) return t2;
    var a2 = i2.f(e16), o3 = a2.resolve;
    return o3(t2), a2.promise;
  };
});
var _t = o(() => {
  var e15 = U(), t = v(), n = k(), r2 = et(), i2 = tt().CONSTRUCTOR, a2 = gt(), o3 = t("Promise"), s2 = n && !i2;
  e15({
    target: "Promise",
    stat: true,
    forced: n || i2
  }, { resolve: function(e16) {
    return a2(s2 && this === o3 ? r2 : this, e16);
  } });
});
o(() => {
  rt(), ft(), pt(), mt(), ht(), _t();
})();
function vt(e15, t, n, r2, i2, a2, o3) {
  try {
    var s2 = e15[a2](o3), c3 = s2.value;
  } catch (e16) {
    n(e16);
    return;
  }
  s2.done ? t(c3) : Promise.resolve(c3).then(r2, i2);
}
function yt(e15) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r2, i2) {
      var a2 = e15.apply(t, n);
      function o3(e16) {
        vt(a2, r2, i2, o3, s2, "next", e16);
      }
      function s2(e16) {
        vt(a2, r2, i2, o3, s2, "throw", e16);
      }
      o3(void 0);
    });
  };
}
var bt = o((e15, t) => {
  var n = Fe(), r2 = String;
  t.exports = function(e16) {
    if (n(e16) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
    return r2(e16);
  };
});
var xt = o((e15, t) => {
  var n = B();
  t.exports = function() {
    var e16 = n(this), t2 = "";
    return e16.hasIndices && (t2 += "d"), e16.global && (t2 += "g"), e16.ignoreCase && (t2 += "i"), e16.multiline && (t2 += "m"), e16.dotAll && (t2 += "s"), e16.unicode && (t2 += "u"), e16.unicodeSets && (t2 += "v"), e16.sticky && (t2 += "y"), t2;
  };
});
var St = o((e15, t) => {
  var n = i(), a2 = r().RegExp, o3 = n(function() {
    var e16 = a2("a", "y");
    return e16.lastIndex = 2, e16.exec("abcd") !== null;
  }), s2 = o3 || n(function() {
    return !a2("a", "y").sticky;
  });
  t.exports = {
    BROKEN_CARET: o3 || n(function() {
      var e16 = a2("^r", "gy");
      return e16.lastIndex = 2, e16.exec("str") !== null;
    }),
    MISSED_STICKY: s2,
    UNSUPPORTED_Y: o3
  };
});
var Ct = o((e15, t) => {
  var n = H(), r2 = ve();
  t.exports = Object.keys || function(e16) {
    return n(e16, r2);
  };
});
var wt = o((e15) => {
  var t = a(), n = ne(), r2 = re(), i2 = B(), o3 = h(), s2 = Ct();
  e15.f = t && !n ? Object.defineProperties : function(e16, t2) {
    i2(e16);
    for (var n2 = o3(t2), a2 = s2(t2), c3 = a2.length, l2 = 0, u2; c3 > l2; ) r2.f(e16, u2 = a2[l2++], n2[u2]);
    return e16;
  };
});
var Tt = o((e15, t) => {
  var n = B(), r2 = wt(), i2 = ve(), a2 = le(), o3 = He(), s2 = z(), c3 = ce(), l2 = ">", u2 = "<", d2 = "prototype", f2 = "script", p2 = c3("IE_PROTO"), m2 = function() {
  }, h2 = function(e16) {
    return u2 + f2 + l2 + e16 + u2 + "/" + f2 + l2;
  }, g2 = function(e16) {
    e16.write(h2("")), e16.close();
    var t2 = e16.parentWindow.Object;
    return e16 = null, t2;
  }, _2 = function() {
    var e16 = s2("iframe"), t2 = "java" + f2 + ":", n2;
    return e16.style.display = "none", o3.appendChild(e16), e16.src = String(t2), n2 = e16.contentWindow.document, n2.open(), n2.write(h2("document.F=Object")), n2.close(), n2.F;
  }, v2, y2 = function() {
    try {
      v2 = new ActiveXObject("htmlfile");
    } catch {
    }
    y2 = typeof document < "u" ? document.domain && v2 ? g2(v2) : _2() : g2(v2);
    for (var e16 = i2.length; e16--; ) delete y2[d2][i2[e16]];
    return y2();
  };
  a2[p2] = true, t.exports = Object.create || function(e16, t2) {
    var i3;
    return e16 === null ? i3 = y2() : (m2[d2] = n(e16), i3 = new m2(), m2[d2] = null, i3[p2] = e16), t2 === void 0 ? i3 : r2.f(i3, t2);
  };
});
var Et = o((e15, t) => {
  var n = i(), a2 = r().RegExp;
  t.exports = n(function() {
    var e16 = a2(".", "s");
    return !(e16.dotAll && e16.test("\n") && e16.flags === "s");
  });
});
var Dt = o((e15, t) => {
  var n = i(), a2 = r().RegExp;
  t.exports = n(function() {
    var e16 = a2("(?<a>b)", "g");
    return e16.exec("b").groups.a !== "b" || "b".replace(e16, "$<a>c") !== "bc";
  });
});
var Ot = o((e15, t) => {
  var n = s(), r2 = u(), i2 = bt(), a2 = xt(), o3 = St(), c3 = M(), l2 = Tt(), d2 = ue().get, f2 = Et(), p2 = Dt(), m2 = c3("native-string-replace", String.prototype.replace), h2 = RegExp.prototype.exec, g2 = h2, _2 = r2("".charAt), v2 = r2("".indexOf), y2 = r2("".replace), b2 = r2("".slice), x2 = function() {
    var e16 = /a/, t2 = /b*/g;
    return n(h2, e16, "a"), n(h2, t2, "a"), e16.lastIndex !== 0 || t2.lastIndex !== 0;
  }(), S2 = o3.BROKEN_CARET, C2 = /()??/.exec("")[1] !== void 0, w2 = x2 || C2 || S2 || f2 || p2, T2 = function(e16, t2) {
    for (var n2 = e16.groups = l2(null), r3 = 0; r3 < t2.length; r3++) {
      var i3 = t2[r3];
      n2[i3[0]] = e16[i3[1]];
    }
  };
  w2 && (g2 = function(e16) {
    var t2 = this, r3 = d2(t2), o4 = i2(e16), s2 = r3.raw, c4, l3, u2;
    if (s2) return s2.lastIndex = t2.lastIndex, c4 = n(g2, s2, o4), t2.lastIndex = s2.lastIndex, c4 && r3.groups && T2(c4, r3.groups), c4;
    var f3 = r3.groups, p3 = S2 && t2.sticky, w3 = n(a2, t2), E2 = t2.source, D2 = 0, O2 = o4;
    if (p3) {
      w3 = y2(w3, "y", ""), v2(w3, "g") === -1 && (w3 += "g"), O2 = b2(o4, t2.lastIndex);
      var k2 = t2.lastIndex > 0 && _2(o4, t2.lastIndex - 1);
      t2.lastIndex > 0 && (!t2.multiline || t2.multiline && k2 !== "\n" && k2 !== "\r" && k2 !== "\u2028" && k2 !== "\u2029") && (E2 = "(?: (?:" + E2 + "))", O2 = " " + O2, D2++), l3 = RegExp("^(?:" + E2 + ")", w3);
    }
    C2 && (l3 = RegExp("^" + E2 + "$(?!\\s)", w3)), x2 && (u2 = t2.lastIndex);
    var A2 = n(h2, p3 ? l3 : t2, O2);
    return p3 ? A2 ? (A2.input = o4, A2[0] = b2(A2[0], D2), A2.index = t2.lastIndex, t2.lastIndex += A2[0].length) : t2.lastIndex = 0 : x2 && A2 && (t2.lastIndex = t2.global ? A2.index + A2[0].length : u2), C2 && A2 && A2.length > 1 && n(m2, A2[0], l3, function() {
      for (var e17 = 1; e17 < arguments.length - 2; e17++) arguments[e17] === void 0 && (A2[e17] = void 0);
    }), A2 && f3 && T2(A2, f3), A2;
  }), t.exports = g2;
});
var kt = o(() => {
  var e15 = U(), t = Ot();
  e15({
    target: "RegExp",
    proto: true,
    forced: /./.exec !== t
  }, { exec: t });
});
var At = o((e15, t) => {
  kt();
  var n = s(), r2 = fe(), a2 = Ot(), o3 = i(), c3 = I(), l2 = ie(), u2 = c3("species"), d2 = RegExp.prototype;
  t.exports = function(e16, t2, i2, s2) {
    var f2 = c3(e16), p2 = !o3(function() {
      var t3 = {};
      return t3[f2] = function() {
        return 7;
      }, ""[e16](t3) !== 7;
    }), m2 = p2 && !o3(function() {
      var t3 = false, n2 = /a/;
      if (e16 === "split") {
        var r3 = {};
        r3[u2] = function() {
          return n2;
        }, n2 = {
          constructor: r3,
          flags: ""
        }, n2[f2] = /./[f2];
      }
      return n2.exec = function() {
        return t3 = true, null;
      }, n2[f2](""), !t3;
    });
    if (!p2 || !m2 || i2) {
      var h2 = /./[f2], g2 = t2(f2, ""[e16], function(e17, t3, r3, i3, o4) {
        var s3 = t3.exec;
        return s3 === a2 || s3 === d2.exec ? p2 && !o4 ? {
          done: true,
          value: n(h2, t3, r3, i3)
        } : {
          done: true,
          value: n(e17, r3, t3, i3)
        } : { done: false };
      });
      r2(String.prototype, e16, g2[0]), r2(d2, f2, g2[1]);
    }
    s2 && l2(d2[f2], "sham", true);
  };
});
var jt = o((e15, t) => {
  var n = u(), r2 = me(), i2 = bt(), a2 = m(), o3 = n("".charAt), s2 = n("".charCodeAt), c3 = n("".slice), l2 = function(e16) {
    return function(t2, n2) {
      var l3 = i2(a2(t2)), u2 = r2(n2), d2 = l3.length, f2, p2;
      return u2 < 0 || u2 >= d2 ? e16 ? "" : void 0 : (f2 = s2(l3, u2), f2 < 55296 || f2 > 56319 || u2 + 1 === d2 || (p2 = s2(l3, u2 + 1)) < 56320 || p2 > 57343 ? e16 ? o3(l3, u2) : f2 : e16 ? c3(l3, u2, u2 + 2) : (f2 - 55296 << 10) + (p2 - 56320) + 65536);
    };
  };
  t.exports = {
    codeAt: l2(false),
    charAt: l2(true)
  };
});
var Mt = o((e15, t) => {
  var n = jt().charAt;
  t.exports = function(e16, t2, r2) {
    return t2 + (r2 && n(e16, t2).length || 1);
  };
});
var Nt = o((e15, t) => {
  var n = r(), a2 = i(), o3 = n.RegExp;
  t.exports = { correct: !a2(function() {
    var e16 = true;
    try {
      o3(".", "d");
    } catch {
      e16 = false;
    }
    var t2 = {}, n2 = "", r2 = e16 ? "dgimsy" : "gimsy", i2 = function(e17, r3) {
      Object.defineProperty(t2, e17, { get: function() {
        return n2 += r3, true;
      } });
    }, a3 = {
      dotAll: "s",
      global: "g",
      ignoreCase: "i",
      multiline: "m",
      sticky: "y"
    };
    for (var s2 in e16 && (a3.hasIndices = "d"), a3) i2(s2, a3[s2]);
    return Object.getOwnPropertyDescriptor(o3.prototype, "flags").get.call(t2) !== r2 || n2 !== r2;
  }) };
});
var Pt = o((e15, t) => {
  var n = s(), r2 = P(), i2 = y(), a2 = Nt(), o3 = xt(), c3 = RegExp.prototype;
  t.exports = a2.correct ? function(e16) {
    return e16.flags;
  } : function(e16) {
    return !a2.correct && i2(c3, e16) && !r2(e16, "flags") ? n(o3, e16) : e16.flags;
  };
});
var Ft = o((e15, t) => {
  var n = s(), r2 = B(), i2 = g(), a2 = d(), o3 = Ot(), c3 = TypeError;
  t.exports = function(e16, t2) {
    var s2 = e16.exec;
    if (i2(s2)) {
      var l2 = n(s2, e16, t2);
      return l2 !== null && r2(l2), l2;
    }
    if (a2(e16) === "RegExp") return n(o3, e16, t2);
    throw new c3("RegExp#exec called on incompatible receiver");
  };
});
var It = o(() => {
  var e15 = s(), t = u(), n = At(), r2 = B(), i2 = _(), a2 = V(), o3 = bt(), c3 = m(), l2 = D(), d2 = Mt(), f2 = Pt(), p2 = Ft(), h2 = t("".indexOf);
  n("match", function(t2, n2, s2) {
    return [function(n3) {
      var r3 = c3(this), a3 = i2(n3) ? l2(n3, t2) : void 0;
      return a3 ? e15(a3, n3, r3) : new RegExp(n3)[t2](o3(r3));
    }, function(e16) {
      var t3 = r2(this), i3 = o3(e16), c4 = s2(n2, t3, i3);
      if (c4.done) return c4.value;
      var l3 = o3(f2(t3));
      if (!~h2(l3, "g")) return p2(t3, i3);
      var u2 = !!~h2(l3, "u") || !!~h2(l3, "v");
      t3.lastIndex = 0;
      for (var m2 = [], g2 = 0, _2; (_2 = p2(t3, i3)) !== null; ) {
        var v2 = o3(_2[0]);
        m2[g2] = v2, v2 === "" && (t3.lastIndex = d2(i3, a2(t3.lastIndex), u2)), g2++;
      }
      return g2 === 0 ? null : m2;
    }];
  });
});
var Lt = o((e15, t) => {
  var n = u(), r2 = N(), i2 = Math.floor, a2 = n("".charAt), o3 = n("".replace), s2 = n("".slice), c3 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, l2 = /\$([$&'`]|\d{1,2})/g;
  t.exports = function(e16, t2, n2, u2, d2, f2) {
    var p2 = n2 + e16.length, m2 = u2.length, h2 = l2;
    return d2 !== void 0 && (d2 = r2(d2), h2 = c3), o3(f2, h2, function(r3, o4) {
      var c4;
      switch (a2(o4, 0)) {
        case "$":
          return "$";
        case "&":
          return e16;
        case "`":
          return s2(t2, 0, n2);
        case "'":
          return s2(t2, p2);
        case "<":
          c4 = d2[s2(o4, 1, -1)];
          break;
        default:
          var l3 = +o4;
          if (l3 === 0) return r3;
          if (l3 > m2) {
            var f3 = i2(l3 / 10);
            return f3 === 0 ? r3 : f3 <= m2 ? u2[f3 - 1] === void 0 ? a2(o4, 1) : u2[f3 - 1] + a2(o4, 1) : r3;
          }
          c4 = u2[l3 - 1];
      }
      return c4 === void 0 ? "" : c4;
    });
  };
});
var Rt = o(() => {
  var e15 = ze(), t = s(), n = u(), r2 = At(), a2 = i(), o3 = B(), c3 = g(), l2 = _(), d2 = me(), f2 = V(), p2 = bt(), h2 = m(), v2 = Mt(), y2 = D(), b2 = Lt(), x2 = Pt(), S2 = Ft(), C2 = I()("replace"), w2 = Math.max, T2 = Math.min, E2 = n([].concat), O2 = n([].push), k2 = n("".indexOf), A2 = n("".slice), j2 = function(e16) {
    return e16 === void 0 ? e16 : String(e16);
  }, M2 = function() {
    return "a".replace(/./, "$0") === "$0";
  }(), N2 = function() {
    return /./[C2] ? /./[C2]("a", "$0") === "" : false;
  }();
  r2("replace", function(n2, r3, i2) {
    var a3 = N2 ? "$" : "$0";
    return [function(e16, n3) {
      var i3 = h2(this), a4 = l2(e16) ? y2(e16, C2) : void 0;
      return a4 ? t(a4, e16, i3, n3) : t(r3, p2(i3), e16, n3);
    }, function(t2, n3) {
      var s2 = o3(this), l3 = p2(t2), u2 = c3(n3);
      u2 || (n3 = p2(n3));
      var m2 = p2(x2(s2));
      if (typeof n3 == "string" && !~k2(n3, a3) && !~k2(n3, "$<") && !~k2(m2, "y")) {
        var h3 = i2(r3, s2, l3, n3);
        if (h3.done) return h3.value;
      }
      var g2 = !!~k2(m2, "g"), _2;
      g2 && (_2 = !!~k2(m2, "u") || !!~k2(m2, "v"), s2.lastIndex = 0);
      for (var y3 = [], C3; C3 = S2(s2, l3), !(C3 === null || (O2(y3, C3), !g2)); ) p2(C3[0]) === "" && (s2.lastIndex = v2(l3, f2(s2.lastIndex), _2));
      for (var D2 = "", M3 = 0, N3 = 0; N3 < y3.length; N3++) {
        C3 = y3[N3];
        for (var P2 = p2(C3[0]), F2 = w2(T2(d2(C3.index), l3.length), 0), I2 = [], L2, R2 = 1; R2 < C3.length; R2++) O2(I2, j2(C3[R2]));
        var z2 = C3.groups;
        if (u2) {
          var ee2 = E2([P2], I2, F2, l3);
          z2 !== void 0 && O2(ee2, z2), L2 = p2(e15(n3, void 0, ee2));
        } else L2 = b2(P2, l3, F2, I2, z2, n3);
        F2 >= M3 && (D2 += A2(l3, M3, F2) + L2, M3 = F2 + P2.length);
      }
      return D2 + A2(l3, M3);
    }];
  }, !!a2(function() {
    var e16 = /./;
    return e16.exec = function() {
      var e17 = [];
      return e17.groups = { a: "7" }, e17;
    }, "".replace(e16, "$<a>") !== "7";
  }) || !M2 || N2);
});
var zt = o((e15, t) => {
  var n = _(), r2 = d(), i2 = I()("match");
  t.exports = function(e16) {
    var t2;
    return n(e16) && ((t2 = e16[i2]) === void 0 ? r2(e16) === "RegExp" : !!t2);
  };
});
var Bt = o((e15, t) => {
  var n = zt(), r2 = TypeError;
  t.exports = function(e16) {
    if (n(e16)) throw new r2("The method doesn't accept regular expressions");
    return e16;
  };
});
var Vt = o((e15, t) => {
  var n = I()("match");
  t.exports = function(e16) {
    var t2 = /./;
    try {
      "/./"[e16](t2);
    } catch {
      try {
        return t2[n] = false, "/./"[e16](t2);
      } catch {
      }
    }
    return false;
  };
});
var Ht = o(() => {
  var e15 = U(), t = Be(), n = te().f, r2 = V(), i2 = bt(), a2 = Bt(), o3 = m(), s2 = Vt(), c3 = k(), l2 = t("".slice), u2 = Math.min, d2 = s2("startsWith");
  e15({
    target: "String",
    proto: true,
    forced: !(!c3 && !d2 && function() {
      var e16 = n(String.prototype, "startsWith");
      return e16 && !e16.writable;
    }()) && !d2
  }, { startsWith: function(e16) {
    var t2 = i2(o3(this));
    a2(e16);
    var n2 = i2(e16), s3 = r2(u2(arguments.length > 1 ? arguments[1] : void 0, t2.length));
    return l2(t2, s3, s3 + n2.length) === n2;
  } });
});
var Ut = o((e15, t) => {
  var n = I(), r2 = Tt(), i2 = re().f, a2 = n("unscopables"), o3 = Array.prototype;
  o3[a2] === void 0 && i2(o3, a2, {
    configurable: true,
    value: r2(null)
  }), t.exports = function(e16) {
    o3[a2][e16] = true;
  };
});
var Wt = o((e15, t) => {
  t.exports = !i()(function() {
    function e16() {
    }
    return e16.prototype.constructor = null, Object.getPrototypeOf(new e16()) !== e16.prototype;
  });
});
var Gt = o((e15, t) => {
  var n = P(), r2 = g(), i2 = N(), a2 = ce(), o3 = Wt(), s2 = a2("IE_PROTO"), c3 = Object, l2 = c3.prototype;
  t.exports = o3 ? c3.getPrototypeOf : function(e16) {
    var t2 = i2(e16);
    if (n(t2, s2)) return t2[s2];
    var a3 = t2.constructor;
    return r2(a3) && t2 instanceof a3 ? a3.prototype : t2 instanceof c3 ? l2 : null;
  };
});
var Kt = o((e15, t) => {
  var n = i(), r2 = g(), a2 = _(), o3 = Tt(), s2 = Gt(), c3 = fe(), l2 = I(), u2 = k(), d2 = l2("iterator"), f2 = false, p2, m2, h2;
  [].keys && (h2 = [].keys(), "next" in h2 ? (m2 = s2(s2(h2)), m2 !== Object.prototype && (p2 = m2)) : f2 = true), !a2(p2) || n(function() {
    var e16 = {};
    return p2[d2].call(e16) !== e16;
  }) ? p2 = {} : u2 && (p2 = o3(p2)), r2(p2[d2]) || c3(p2, d2, function() {
    return this;
  }), t.exports = {
    IteratorPrototype: p2,
    BUGGY_SAFARI_ITERATORS: f2
  };
});
var qt = o((e15, t) => {
  var n = Kt().IteratorPrototype, r2 = Tt(), i2 = l(), a2 = je(), o3 = it(), s2 = function() {
    return this;
  };
  t.exports = function(e16, t2, c3, l2) {
    var u2 = t2 + " Iterator";
    return e16.prototype = r2(n, { next: i2(+!l2, c3) }), a2(e16, u2, false, true), o3[u2] = s2, e16;
  };
});
var Jt = o((e15, t) => {
  var n = U(), r2 = s(), i2 = k(), a2 = ae(), o3 = g(), c3 = qt(), l2 = Gt(), u2 = Ae(), d2 = je(), f2 = ie(), p2 = fe(), m2 = I(), h2 = it(), _2 = Kt(), v2 = a2.PROPER, y2 = a2.CONFIGURABLE, b2 = _2.IteratorPrototype, x2 = _2.BUGGY_SAFARI_ITERATORS, S2 = m2("iterator"), C2 = "keys", w2 = "values", T2 = "entries", E2 = function() {
    return this;
  };
  t.exports = function(e16, t2, a3, s2, m3, g2, _3) {
    c3(a3, t2, s2);
    var D2 = function(e17) {
      if (e17 === m3 && M2) return M2;
      if (!x2 && e17 && e17 in A2) return A2[e17];
      switch (e17) {
        case C2:
          return function() {
            return new a3(this, e17);
          };
        case w2:
          return function() {
            return new a3(this, e17);
          };
        case T2:
          return function() {
            return new a3(this, e17);
          };
      }
      return function() {
        return new a3(this);
      };
    }, O2 = t2 + " Iterator", k2 = false, A2 = e16.prototype, j2 = A2[S2] || A2["@@iterator"] || m3 && A2[m3], M2 = !x2 && j2 || D2(m3), N2 = t2 === "Array" && A2.entries || j2, P2, F2, I2;
    if (N2 && (P2 = l2(N2.call(new e16())), P2 !== Object.prototype && P2.next && (!i2 && l2(P2) !== b2 && (u2 ? u2(P2, b2) : o3(P2[S2]) || p2(P2, S2, E2)), d2(P2, O2, true, true), i2 && (h2[O2] = E2))), v2 && m3 === w2 && j2 && j2.name !== w2 && (!i2 && y2 ? f2(A2, "name", w2) : (k2 = true, M2 = function() {
      return r2(j2, this);
    })), m3) if (F2 = {
      values: D2(w2),
      keys: g2 ? M2 : D2(C2),
      entries: D2(T2)
    }, _3) for (I2 in F2) (x2 || k2 || !(I2 in A2)) && p2(A2, I2, F2[I2]);
    else n({
      target: t2,
      proto: true,
      forced: x2 || k2
    }, F2);
    return (!i2 || _3) && A2[S2] !== M2 && p2(A2, S2, M2, { name: m3 }), h2[t2] = M2, F2;
  };
});
var Yt = o((e15, t) => {
  t.exports = function(e16, t2) {
    return {
      value: e16,
      done: t2
    };
  };
});
var Xt = o((e15, t) => {
  var n = h(), r2 = Ut(), i2 = it(), o3 = ue(), s2 = re().f, c3 = Jt(), l2 = Yt(), u2 = k(), d2 = a(), f2 = "Array Iterator", p2 = o3.set, m2 = o3.getterFor(f2);
  t.exports = c3(Array, "Array", function(e16, t2) {
    p2(this, {
      type: f2,
      target: n(e16),
      index: 0,
      kind: t2
    });
  }, function() {
    var e16 = m2(this), t2 = e16.target, n2 = e16.index++;
    if (!t2 || n2 >= t2.length) return e16.target = null, l2(void 0, true);
    switch (e16.kind) {
      case "keys":
        return l2(n2, false);
      case "values":
        return l2(t2[n2], false);
    }
    return l2([n2, t2[n2]], false);
  }, "values");
  var g2 = i2.Arguments = i2.Array;
  if (r2("keys"), r2("values"), r2("entries"), !u2 && d2 && g2.name !== "values") try {
    s2(g2, "name", { value: "values" });
  } catch {
  }
});
var Zt = o((e15, t) => {
  t.exports = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };
});
var Qt = o((e15, t) => {
  var n = z()("span").classList, r2 = n && n.constructor && n.constructor.prototype;
  t.exports = r2 === Object.prototype ? void 0 : r2;
});
var $t = o(() => {
  var e15 = r(), t = Zt(), n = Qt(), i2 = Xt(), a2 = ie(), o3 = je(), s2 = I()("iterator"), c3 = i2.values, l2 = function(e16, n2) {
    if (e16) {
      if (e16[s2] !== c3) try {
        a2(e16, s2, c3);
      } catch {
        e16[s2] = c3;
      }
      if (o3(e16, n2, true), t[n2]) {
        for (var r2 in i2) if (e16[r2] !== i2[r2]) try {
          a2(e16, r2, i2[r2]);
        } catch {
          e16[r2] = i2[r2];
        }
      }
    }
  };
  for (var u2 in t) l2(e15[u2] && e15[u2].prototype, u2);
  l2(n, "DOMTokenList");
});
It(), Rt(), Ht(), Xt(), $t();
function en(e15, t) {
  if (e(e15) != "object" || !e15) return e15;
  var r2 = e15[Symbol.toPrimitive];
  if (r2 !== void 0) {
    var i2 = r2.call(e15, t || "default");
    if (e(i2) != "object") return i2;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e15);
}
function tn(e15) {
  var t = en(e15, "string");
  return e(t) == "symbol" ? t : t + "";
}
function nn(e15, t, n) {
  return (t = tn(t)) in e15 ? Object.defineProperty(e15, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e15[t] = n, e15;
}
var rn = o((e15, t) => {
  var n = E(), r2 = N(), i2 = f(), a2 = ge(), o3 = TypeError, s2 = "Reduce of empty array with no initial value", c3 = function(e16) {
    return function(t2, c4, l2, u2) {
      var d2 = r2(t2), f2 = i2(d2), p2 = a2(d2);
      if (n(c4), p2 === 0 && l2 < 2) throw new o3(s2);
      var m2 = e16 ? p2 - 1 : 0, h2 = e16 ? -1 : 1;
      if (l2 < 2) for (; ; ) {
        if (m2 in f2) {
          u2 = f2[m2], m2 += h2;
          break;
        }
        if (m2 += h2, e16 ? m2 < 0 : p2 <= m2) throw new o3(s2);
      }
      for (; e16 ? m2 >= 0 : p2 > m2; m2 += h2) m2 in f2 && (u2 = c4(u2, f2[m2], m2, d2));
      return u2;
    };
  };
  t.exports = {
    left: c3(false),
    right: c3(true)
  };
});
var an = o((e15, t) => {
  var n = i();
  t.exports = function(e16, t2) {
    var r2 = [][e16];
    return !!r2 && n(function() {
      r2.call(null, t2 || function() {
        return 1;
      }, 1);
    });
  };
});
var on = o(() => {
  var e15 = U(), t = rn().left, n = an(), r2 = x();
  e15({
    target: "Array",
    proto: true,
    forced: !Te() && r2 > 79 && r2 < 83 || !n("reduce")
  }, { reduce: function(e16) {
    var n2 = arguments.length;
    return t(this, e16, n2, n2 > 1 ? arguments[1] : void 0);
  } });
});
var sn = o(() => {
  var e15 = U(), t = Be(), n = te().f, r2 = V(), i2 = bt(), a2 = Bt(), o3 = m(), s2 = Vt(), c3 = k(), l2 = t("".slice), u2 = Math.min, d2 = s2("endsWith");
  e15({
    target: "String",
    proto: true,
    forced: !(!c3 && !d2 && function() {
      var e16 = n(String.prototype, "endsWith");
      return e16 && !e16.writable;
    }()) && !d2
  }, { endsWith: function(e16) {
    var t2 = i2(o3(this));
    a2(e16);
    var n2 = i2(e16), s3 = arguments.length > 1 ? arguments[1] : void 0, c4 = t2.length, d3 = s3 === void 0 ? c4 : u2(r2(s3), c4);
    return l2(t2, d3 - n2.length, d3) === n2;
  } });
});
var cn = o(() => {
  var e15 = s(), t = u(), n = At(), r2 = B(), a2 = _(), o3 = m(), c3 = Re(), l2 = Mt(), d2 = V(), f2 = bt(), p2 = D(), h2 = Pt(), g2 = Ft(), v2 = St(), y2 = i(), b2 = v2.UNSUPPORTED_Y, x2 = 4294967295, S2 = Math.min, C2 = t([].push), w2 = t("".slice), T2 = t("".indexOf), E2 = !y2(function() {
    var e16 = /(?:)/, t2 = e16.exec;
    e16.exec = function() {
      return t2.apply(this, arguments);
    };
    var n2 = "ab".split(e16);
    return n2.length !== 2 || n2[0] !== "a" || n2[1] !== "b";
  }), O2 = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
  n("split", function(t2, n2, i2) {
    var s2 = "0".split(void 0, 0).length ? function(t3, r3) {
      return t3 === void 0 && r3 === 0 ? [] : e15(n2, this, t3, r3);
    } : n2;
    return [function(n3, r3) {
      var i3 = o3(this), c4 = a2(n3) ? p2(n3, t2) : void 0;
      return c4 ? e15(c4, n3, i3, r3) : e15(s2, f2(i3), n3, r3);
    }, function(e16, t3) {
      var a3 = r2(this), o4 = f2(e16);
      if (!O2) {
        var u2 = i2(s2, a3, o4, t3, s2 !== n2);
        if (u2.done) return u2.value;
      }
      var p3 = c3(a3, RegExp), m2 = f2(h2(a3)), _2 = !!~T2(m2, "u") || !!~T2(m2, "v");
      b2 ? ~T2(m2, "g") || (m2 += "g") : ~T2(m2, "y") || (m2 += "y");
      var v3 = new p3(b2 ? "^(?:" + a3.source + ")" : a3, m2), y3 = t3 === void 0 ? x2 : t3 >>> 0;
      if (y3 === 0) return [];
      if (o4.length === 0) return g2(v3, o4) === null ? [o4] : [];
      for (var E3 = 0, D2 = 0, k2 = []; D2 < o4.length; ) {
        v3.lastIndex = b2 ? 0 : D2;
        var A2 = g2(v3, b2 ? w2(o4, D2) : o4), j2;
        if (A2 === null || (j2 = S2(d2(v3.lastIndex + (b2 ? D2 : 0)), o4.length)) === E3) D2 = l2(o4, D2, _2);
        else {
          if (C2(k2, w2(o4, E3, D2)), k2.length === y3) return k2;
          for (var M2 = 1; M2 <= A2.length - 1; M2++) if (C2(k2, A2[M2]), k2.length === y3) return k2;
          D2 = E3 = j2;
        }
      }
      return C2(k2, w2(o4, E3)), k2;
    }];
  }, O2 || !E2, b2);
});
var ln = o((e15, t) => {
  (function() {
    var e16, n, r2, i2, a2, o3;
    typeof performance < "u" && performance !== null && performance.now ? t.exports = function() {
      return performance.now();
    } : typeof process < "u" && process !== null && process.hrtime ? (t.exports = function() {
      return (e16() - a2) / 1e6;
    }, n = process.hrtime, e16 = function() {
      var e17 = n();
      return e17[0] * 1e9 + e17[1];
    }, i2 = e16(), o3 = process.uptime() * 1e9, a2 = i2 - o3) : Date.now ? (t.exports = function() {
      return Date.now() - r2;
    }, r2 = Date.now()) : (t.exports = function() {
      return (/* @__PURE__ */ new Date()).getTime() - r2;
    }, r2 = (/* @__PURE__ */ new Date()).getTime());
  }).call(e15);
});
var un = o((e15, t) => {
  for (var n = ln(), r2 = typeof window > "u" ? global : window, i2 = ["moz", "webkit"], a2 = "AnimationFrame", o3 = r2["request" + a2], s2 = r2["cancel" + a2] || r2["cancelRequest" + a2], c3 = 0; !o3 && c3 < i2.length; c3++) o3 = r2[i2[c3] + "Request" + a2], s2 = r2[i2[c3] + "Cancel" + a2] || r2[i2[c3] + "CancelRequest" + a2];
  if (!o3 || !s2) {
    var l2 = 0, u2 = 0, d2 = [], f2 = 1e3 / 60;
    o3 = function(e16) {
      if (d2.length === 0) {
        var t2 = n(), r3 = Math.max(0, f2 - (t2 - l2));
        l2 = r3 + t2, setTimeout(function() {
          var e17 = d2.slice(0);
          d2.length = 0;
          for (var t3 = 0; t3 < e17.length; t3++) if (!e17[t3].cancelled) try {
            e17[t3].callback(l2);
          } catch (e18) {
            setTimeout(function() {
              throw e18;
            }, 0);
          }
        }, Math.round(r3));
      }
      return d2.push({
        handle: ++u2,
        callback: e16,
        cancelled: false
      }), u2;
    }, s2 = function(e16) {
      for (var t2 = 0; t2 < d2.length; t2++) d2[t2].handle === e16 && (d2[t2].cancelled = true);
    };
  }
  t.exports = function(e16) {
    return o3.call(r2, e16);
  }, t.exports.cancel = function() {
    s2.apply(r2, arguments);
  }, t.exports.polyfill = function(e16) {
    e16 || (e16 = r2), e16.requestAnimationFrame = o3, e16.cancelAnimationFrame = s2;
  };
});
var dn = o((e15, t) => {
  t.exports = "	\n\v\f\r                　\u2028\u2029\uFEFF";
});
var fn = o((e15, t) => {
  var n = u(), r2 = m(), i2 = bt(), a2 = dn(), o3 = n("".replace), s2 = RegExp("^[" + a2 + "]+"), c3 = RegExp("(^|[^" + a2 + "])[" + a2 + "]+$"), l2 = function(e16) {
    return function(t2) {
      var n2 = i2(r2(t2));
      return e16 & 1 && (n2 = o3(n2, s2, "")), e16 & 2 && (n2 = o3(n2, c3, "$1")), n2;
    };
  };
  t.exports = {
    start: l2(1),
    end: l2(2),
    trim: l2(3)
  };
});
var pn = o((e15, t) => {
  var n = ae().PROPER, r2 = i(), a2 = dn(), o3 = "​᠎";
  t.exports = function(e16) {
    return r2(function() {
      return !!a2[e16]() || o3[e16]() !== o3 || n && a2[e16].name !== e16;
    });
  };
});
var mn = o(() => {
  var e15 = U(), t = fn().trim;
  e15({
    target: "String",
    proto: true,
    forced: pn()("trim")
  }, { trim: function() {
    return t(this);
  } });
});
var hn = o((e15, t) => {
  t.exports = function(e16) {
    this.ok = false, this.alpha = 1, e16.charAt(0) == "#" && (e16 = e16.substr(1, 6)), e16 = e16.replace(/ /g, ""), e16 = e16.toLowerCase();
    var t2 = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "00ffff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000000",
      blanchedalmond: "ffebcd",
      blue: "0000ff",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "00ffff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dodgerblue: "1e90ff",
      feldspar: "d19275",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "ff00ff",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgrey: "d3d3d3",
      lightgreen: "90ee90",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslateblue: "8470ff",
      lightslategray: "778899",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "00ff00",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "ff00ff",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370d8",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "d87093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "ff0000",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      violetred: "d02090",
      wheat: "f5deb3",
      white: "ffffff",
      whitesmoke: "f5f5f5",
      yellow: "ffff00",
      yellowgreen: "9acd32"
    };
    e16 = t2[e16] || e16;
    for (var n = [
      {
        re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
        example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
        process: function(e17) {
          return [
            parseInt(e17[1]),
            parseInt(e17[2]),
            parseInt(e17[3]),
            parseFloat(e17[4])
          ];
        }
      },
      {
        re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
        example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
        process: function(e17) {
          return [
            parseInt(e17[1]),
            parseInt(e17[2]),
            parseInt(e17[3])
          ];
        }
      },
      {
        re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        example: ["#00ff00", "336699"],
        process: function(e17) {
          return [
            parseInt(e17[1], 16),
            parseInt(e17[2], 16),
            parseInt(e17[3], 16)
          ];
        }
      },
      {
        re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        example: ["#fb0", "f0f"],
        process: function(e17) {
          return [
            parseInt(e17[1] + e17[1], 16),
            parseInt(e17[2] + e17[2], 16),
            parseInt(e17[3] + e17[3], 16)
          ];
        }
      }
    ], r2 = 0; r2 < n.length; r2++) {
      var i2 = n[r2].re, a2 = n[r2].process, o3 = i2.exec(e16);
      if (o3) {
        var s2 = a2(o3);
        this.r = s2[0], this.g = s2[1], this.b = s2[2], s2.length > 3 && (this.alpha = s2[3]), this.ok = true;
      }
    }
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha, this.toRGB = function() {
      return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }, this.toRGBA = function() {
      return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
    }, this.toHex = function() {
      var e17 = this.r.toString(16), t3 = this.g.toString(16), n2 = this.b.toString(16);
      return e17.length == 1 && (e17 = "0" + e17), t3.length == 1 && (t3 = "0" + t3), n2.length == 1 && (n2 = "0" + n2), "#" + e17 + t3 + n2;
    }, this.getHelpXML = function() {
      for (var e17 = [], r3 = 0; r3 < n.length; r3++) for (var i3 = n[r3].example, a3 = 0; a3 < i3.length; a3++) e17[e17.length] = i3[a3];
      for (var o4 in t2) e17[e17.length] = o4;
      var s3 = document.createElement("ul");
      s3.setAttribute("id", "rgbcolor-examples");
      for (var r3 = 0; r3 < e17.length; r3++) try {
        var c3 = document.createElement("li"), l2 = new RGBColor(e17[r3]), u2 = document.createElement("div");
        u2.style.cssText = "margin: 3px; border: 1px solid black; background:" + l2.toHex() + "; color:" + l2.toHex(), u2.appendChild(document.createTextNode("test"));
        var d2 = document.createTextNode(" " + e17[r3] + " -> " + l2.toRGB() + " -> " + l2.toHex());
        c3.appendChild(u2), c3.appendChild(d2), s3.appendChild(c3);
      } catch {
      }
      return s3;
    };
  };
});
var gn = o(() => {
  var e15 = U(), t = Be(), n = _e().indexOf, r2 = an(), i2 = t([].indexOf), a2 = !!i2 && 1 / i2([1], 1, -0) < 0;
  e15({
    target: "Array",
    proto: true,
    forced: a2 || !r2("indexOf")
  }, { indexOf: function(e16) {
    var t2 = arguments.length > 1 ? arguments[1] : void 0;
    return a2 ? i2(this, e16, t2) || 0 : n(this, e16, t2);
  } });
});
var _n = o(() => {
  var e15 = U(), t = u(), n = Bt(), r2 = m(), i2 = bt(), a2 = Vt(), o3 = t("".indexOf);
  e15({
    target: "String",
    proto: true,
    forced: !a2("includes")
  }, { includes: function(e16) {
    return !!~o3(i2(r2(this)), i2(n(e16)), arguments.length > 1 ? arguments[1] : void 0);
  } });
});
var vn = o((e15, t) => {
  var n = d();
  t.exports = Array.isArray || function(e16) {
    return n(e16) === "Array";
  };
});
var yn = o(() => {
  var e15 = U(), t = u(), n = vn(), r2 = t([].reverse), i2 = [1, 2];
  e15({
    target: "Array",
    proto: true,
    forced: String(i2) === String(i2.reverse())
  }, { reverse: function() {
    return n(this) && (this.length = this.length), r2(this);
  } });
});
on(), sn(), cn();
var bn = c(un(), 1);
mn();
var xn = c(hn(), 1);
gn(), _n(), yn();
var Sn = function(e15, t) {
  return (Sn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e16, t2) {
    e16.__proto__ = t2;
  } || function(e16, t2) {
    for (var n in t2) Object.prototype.hasOwnProperty.call(t2, n) && (e16[n] = t2[n]);
  })(e15, t);
};
function Cn(e15, t) {
  if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function n() {
    this.constructor = e15;
  }
  Sn(e15, t), e15.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function wn(e15) {
  var t = "";
  Array.isArray(e15) || (e15 = [e15]);
  for (var n = 0; n < e15.length; n++) {
    var r2 = e15[n];
    if (r2.type === K.CLOSE_PATH) t += "z";
    else if (r2.type === K.HORIZ_LINE_TO) t += (r2.relative ? "h" : "H") + r2.x;
    else if (r2.type === K.VERT_LINE_TO) t += (r2.relative ? "v" : "V") + r2.y;
    else if (r2.type === K.MOVE_TO) t += (r2.relative ? "m" : "M") + r2.x + " " + r2.y;
    else if (r2.type === K.LINE_TO) t += (r2.relative ? "l" : "L") + r2.x + " " + r2.y;
    else if (r2.type === K.CURVE_TO) t += (r2.relative ? "c" : "C") + r2.x1 + " " + r2.y1 + " " + r2.x2 + " " + r2.y2 + " " + r2.x + " " + r2.y;
    else if (r2.type === K.SMOOTH_CURVE_TO) t += (r2.relative ? "s" : "S") + r2.x2 + " " + r2.y2 + " " + r2.x + " " + r2.y;
    else if (r2.type === K.QUAD_TO) t += (r2.relative ? "q" : "Q") + r2.x1 + " " + r2.y1 + " " + r2.x + " " + r2.y;
    else if (r2.type === K.SMOOTH_QUAD_TO) t += (r2.relative ? "t" : "T") + r2.x + " " + r2.y;
    else {
      if (r2.type !== K.ARC) throw Error('Unexpected command type "' + r2.type + '" at index ' + n + ".");
      t += (r2.relative ? "a" : "A") + r2.rX + " " + r2.rY + " " + r2.xRot + " " + +r2.lArcFlag + " " + +r2.sweepFlag + " " + r2.x + " " + r2.y;
    }
  }
  return t;
}
function Tn(e15, t) {
  var n = e15[0], r2 = e15[1];
  return [n * Math.cos(t) - r2 * Math.sin(t), n * Math.sin(t) + r2 * Math.cos(t)];
}
function En() {
  for (var e15 = [...arguments], t = 0; t < e15.length; t++) if (typeof e15[t] != "number") throw Error("assertNumbers arguments[" + t + "] is not a number. " + typeof e15[t] + " == typeof " + e15[t]);
  return true;
}
var Dn = Math.PI;
function On(e15, t, n) {
  e15.lArcFlag = e15.lArcFlag === 0 ? 0 : 1, e15.sweepFlag = e15.sweepFlag === 0 ? 0 : 1;
  var r2 = e15.rX, i2 = e15.rY, a2 = e15.x, o3 = e15.y;
  r2 = Math.abs(e15.rX), i2 = Math.abs(e15.rY);
  var s2 = Tn([(t - a2) / 2, (n - o3) / 2], -e15.xRot / 180 * Dn), c3 = s2[0], l2 = s2[1], u2 = c3 ** 2 / r2 ** 2 + l2 ** 2 / i2 ** 2;
  1 < u2 && (r2 *= Math.sqrt(u2), i2 *= Math.sqrt(u2)), e15.rX = r2, e15.rY = i2;
  var d2 = r2 ** 2 * l2 ** 2 + i2 ** 2 * c3 ** 2, f2 = (e15.lArcFlag === e15.sweepFlag ? -1 : 1) * Math.sqrt(Math.max(0, (r2 ** 2 * i2 ** 2 - d2) / d2)), p2 = r2 * l2 / i2 * f2, m2 = -i2 * c3 / r2 * f2, h2 = Tn([p2, m2], e15.xRot / 180 * Dn);
  e15.cX = h2[0] + (t + a2) / 2, e15.cY = h2[1] + (n + o3) / 2, e15.phi1 = Math.atan2((l2 - m2) / i2, (c3 - p2) / r2), e15.phi2 = Math.atan2((-l2 - m2) / i2, (-c3 - p2) / r2), e15.sweepFlag === 0 && e15.phi2 > e15.phi1 && (e15.phi2 -= 2 * Dn), e15.sweepFlag === 1 && e15.phi2 < e15.phi1 && (e15.phi2 += 2 * Dn), e15.phi1 *= 180 / Dn, e15.phi2 *= 180 / Dn;
}
function kn(e15, t, n) {
  En(e15, t, n);
  var r2 = e15 * e15 + t * t - n * n;
  if (0 > r2) return [];
  if (r2 === 0) return [[e15 * n / (e15 * e15 + t * t), t * n / (e15 * e15 + t * t)]];
  var i2 = Math.sqrt(r2);
  return [[(e15 * n + t * i2) / (e15 * e15 + t * t), (t * n - e15 * i2) / (e15 * e15 + t * t)], [(e15 * n - t * i2) / (e15 * e15 + t * t), (t * n + e15 * i2) / (e15 * e15 + t * t)]];
}
var G;
var An = Math.PI / 180;
function jn(e15, t, n) {
  return (1 - n) * e15 + n * t;
}
function Mn(e15, t, n, r2) {
  return e15 + Math.cos(r2 / 180 * Dn) * t + Math.sin(r2 / 180 * Dn) * n;
}
function Nn(e15, t, n, r2) {
  var i2 = 1e-6, a2 = t - e15, o3 = n - t, s2 = 3 * a2 + 3 * (r2 - n) - 6 * o3, c3 = 6 * (o3 - a2), l2 = 3 * a2;
  return Math.abs(s2) < i2 ? [-l2 / c3] : function(e16, t2, n2) {
    n2 === void 0 && (n2 = 1e-6);
    var r3 = e16 * e16 / 4 - t2;
    if (r3 < -n2) return [];
    if (r3 <= n2) return [-e16 / 2];
    var i3 = Math.sqrt(r3);
    return [-e16 / 2 - i3, -e16 / 2 + i3];
  }(c3 / s2, l2 / s2, i2);
}
function Pn(e15, t, n, r2, i2) {
  var a2 = 1 - i2;
  return e15 * (a2 * a2 * a2) + t * (3 * a2 * a2 * i2) + n * (3 * a2 * i2 * i2) + r2 * (i2 * i2 * i2);
}
(function(e15) {
  function t() {
    return i2(function(e16, t2, n2) {
      return e16.relative && (e16.relative = (e16.x1 !== void 0 && (e16.x1 += t2), e16.y1 !== void 0 && (e16.y1 += n2), e16.x2 !== void 0 && (e16.x2 += t2), e16.y2 !== void 0 && (e16.y2 += n2), e16.x !== void 0 && (e16.x += t2), e16.y !== void 0 && (e16.y += n2), false)), e16;
    });
  }
  function n() {
    var e16 = NaN, t2 = NaN, n2 = NaN, r3 = NaN;
    return i2(function(i3, a3, o4) {
      return i3.type & K.SMOOTH_CURVE_TO && (i3.type = K.CURVE_TO, e16 = isNaN(e16) ? a3 : e16, t2 = isNaN(t2) ? o4 : t2, i3.x1 = i3.relative ? a3 - e16 : 2 * a3 - e16, i3.y1 = i3.relative ? o4 - t2 : 2 * o4 - t2), i3.type & K.CURVE_TO ? (e16 = i3.relative ? a3 + i3.x2 : i3.x2, t2 = i3.relative ? o4 + i3.y2 : i3.y2) : (e16 = NaN, t2 = NaN), i3.type & K.SMOOTH_QUAD_TO && (i3.type = K.QUAD_TO, n2 = isNaN(n2) ? a3 : n2, r3 = isNaN(r3) ? o4 : r3, i3.x1 = i3.relative ? a3 - n2 : 2 * a3 - n2, i3.y1 = i3.relative ? o4 - r3 : 2 * o4 - r3), i3.type & K.QUAD_TO ? (n2 = i3.relative ? a3 + i3.x1 : i3.x1, r3 = i3.relative ? o4 + i3.y1 : i3.y1) : (n2 = NaN, r3 = NaN), i3;
    });
  }
  function r2() {
    var e16 = NaN, t2 = NaN;
    return i2(function(n2, r3, i3) {
      if (n2.type & K.SMOOTH_QUAD_TO && (n2.type = K.QUAD_TO, e16 = isNaN(e16) ? r3 : e16, t2 = isNaN(t2) ? i3 : t2, n2.x1 = n2.relative ? r3 - e16 : 2 * r3 - e16, n2.y1 = n2.relative ? i3 - t2 : 2 * i3 - t2), n2.type & K.QUAD_TO) {
        e16 = n2.relative ? r3 + n2.x1 : n2.x1, t2 = n2.relative ? i3 + n2.y1 : n2.y1;
        var a3 = n2.x1, o4 = n2.y1;
        n2.type = K.CURVE_TO, n2.x1 = ((n2.relative ? 0 : r3) + 2 * a3) / 3, n2.y1 = ((n2.relative ? 0 : i3) + 2 * o4) / 3, n2.x2 = (n2.x + 2 * a3) / 3, n2.y2 = (n2.y + 2 * o4) / 3;
      } else e16 = NaN, t2 = NaN;
      return n2;
    });
  }
  function i2(e16) {
    var t2 = 0, n2 = 0, r3 = NaN, i3 = NaN;
    return function(a3) {
      if (isNaN(r3) && !(a3.type & K.MOVE_TO)) throw Error("path must start with moveto");
      var o4 = e16(a3, t2, n2, r3, i3);
      return a3.type & K.CLOSE_PATH && (t2 = r3, n2 = i3), a3.x !== void 0 && (t2 = a3.relative ? t2 + a3.x : a3.x), a3.y !== void 0 && (n2 = a3.relative ? n2 + a3.y : a3.y), a3.type & K.MOVE_TO && (r3 = t2, i3 = n2), o4;
    };
  }
  function a2(e16, t2, n2, r3, a3, o4) {
    return En(e16, t2, n2, r3, a3, o4), i2(function(i3, s2, c3, l2) {
      var u2 = i3.x1, d2 = i3.x2, f2 = i3.relative && !isNaN(l2), p2 = i3.x === void 0 ? f2 ? 0 : s2 : i3.x, m2 = i3.y === void 0 ? f2 ? 0 : c3 : i3.y;
      function h2(e17) {
        return e17 * e17;
      }
      i3.type & K.HORIZ_LINE_TO && t2 !== 0 && (i3.type = K.LINE_TO, i3.y = i3.relative ? 0 : c3), i3.type & K.VERT_LINE_TO && n2 !== 0 && (i3.type = K.LINE_TO, i3.x = i3.relative ? 0 : s2), i3.x !== void 0 && (i3.x = i3.x * e16 + m2 * n2 + (f2 ? 0 : a3)), i3.y !== void 0 && (i3.y = p2 * t2 + i3.y * r3 + (f2 ? 0 : o4)), i3.x1 !== void 0 && (i3.x1 = i3.x1 * e16 + i3.y1 * n2 + (f2 ? 0 : a3)), i3.y1 !== void 0 && (i3.y1 = u2 * t2 + i3.y1 * r3 + (f2 ? 0 : o4)), i3.x2 !== void 0 && (i3.x2 = i3.x2 * e16 + i3.y2 * n2 + (f2 ? 0 : a3)), i3.y2 !== void 0 && (i3.y2 = d2 * t2 + i3.y2 * r3 + (f2 ? 0 : o4));
      var g2 = e16 * r3 - t2 * n2;
      if (i3.xRot !== void 0 && (e16 !== 1 || t2 !== 0 || n2 !== 0 || r3 !== 1)) if (g2 === 0) delete i3.rX, delete i3.rY, delete i3.xRot, delete i3.lArcFlag, delete i3.sweepFlag, i3.type = K.LINE_TO;
      else {
        var _2 = i3.xRot * Math.PI / 180, v2 = Math.sin(_2), y2 = Math.cos(_2), b2 = 1 / h2(i3.rX), x2 = 1 / h2(i3.rY), S2 = h2(y2) * b2 + h2(v2) * x2, C2 = 2 * v2 * y2 * (b2 - x2), w2 = h2(v2) * b2 + h2(y2) * x2, T2 = S2 * r3 * r3 - C2 * t2 * r3 + w2 * t2 * t2, E2 = C2 * (e16 * r3 + t2 * n2) - 2 * (S2 * n2 * r3 + w2 * e16 * t2), D2 = S2 * n2 * n2 - C2 * e16 * n2 + w2 * e16 * e16, O2 = (Math.atan2(E2, T2 - D2) + Math.PI) % Math.PI / 2, k2 = Math.sin(O2), A2 = Math.cos(O2);
        i3.rX = Math.abs(g2) / Math.sqrt(T2 * h2(A2) + E2 * k2 * A2 + D2 * h2(k2)), i3.rY = Math.abs(g2) / Math.sqrt(T2 * h2(k2) - E2 * k2 * A2 + D2 * h2(A2)), i3.xRot = 180 * O2 / Math.PI;
      }
      return i3.sweepFlag !== void 0 && 0 > g2 && (i3.sweepFlag = +!i3.sweepFlag), i3;
    });
  }
  function o3() {
    return function(e16) {
      var t2 = {};
      for (var n2 in e16) t2[n2] = e16[n2];
      return t2;
    };
  }
  e15.ROUND = function(e16) {
    function t2(t3) {
      return Math.round(t3 * e16) / e16;
    }
    return e16 === void 0 && (e16 = 1e13), En(e16), function(e17) {
      return e17.x1 !== void 0 && (e17.x1 = t2(e17.x1)), e17.y1 !== void 0 && (e17.y1 = t2(e17.y1)), e17.x2 !== void 0 && (e17.x2 = t2(e17.x2)), e17.y2 !== void 0 && (e17.y2 = t2(e17.y2)), e17.x !== void 0 && (e17.x = t2(e17.x)), e17.y !== void 0 && (e17.y = t2(e17.y)), e17.rX !== void 0 && (e17.rX = t2(e17.rX)), e17.rY !== void 0 && (e17.rY = t2(e17.rY)), e17;
    };
  }, e15.TO_ABS = t, e15.TO_REL = function() {
    return i2(function(e16, t2, n2) {
      return e16.relative || (e16.relative = (e16.x1 !== void 0 && (e16.x1 -= t2), e16.y1 !== void 0 && (e16.y1 -= n2), e16.x2 !== void 0 && (e16.x2 -= t2), e16.y2 !== void 0 && (e16.y2 -= n2), e16.x !== void 0 && (e16.x -= t2), e16.y !== void 0 && (e16.y -= n2), true)), e16;
    });
  }, e15.NORMALIZE_HVZ = function(e16, t2, n2) {
    return e16 === void 0 && (e16 = true), t2 === void 0 && (t2 = true), n2 === void 0 && (n2 = true), i2(function(r3, i3, a3, o4, s2) {
      if (isNaN(o4) && !(r3.type & K.MOVE_TO)) throw Error("path must start with moveto");
      return t2 && r3.type & K.HORIZ_LINE_TO && (r3.type = K.LINE_TO, r3.y = r3.relative ? 0 : a3), n2 && r3.type & K.VERT_LINE_TO && (r3.type = K.LINE_TO, r3.x = r3.relative ? 0 : i3), e16 && r3.type & K.CLOSE_PATH && (r3.type = K.LINE_TO, r3.x = r3.relative ? o4 - i3 : o4, r3.y = r3.relative ? s2 - a3 : s2), r3.type & K.ARC && (r3.rX === 0 || r3.rY === 0) && (r3.type = K.LINE_TO, delete r3.rX, delete r3.rY, delete r3.xRot, delete r3.lArcFlag, delete r3.sweepFlag), r3;
    });
  }, e15.NORMALIZE_ST = n, e15.QT_TO_C = r2, e15.INFO = i2, e15.SANITIZE = function(e16) {
    e16 === void 0 && (e16 = 0), En(e16);
    var t2 = NaN, n2 = NaN, r3 = NaN, a3 = NaN;
    return i2(function(i3, o4, s2, c3, l2) {
      var u2 = Math.abs, d2 = false, f2 = 0, p2 = 0;
      if (i3.type & K.SMOOTH_CURVE_TO && (f2 = isNaN(t2) ? 0 : o4 - t2, p2 = isNaN(n2) ? 0 : s2 - n2), i3.type & (K.CURVE_TO | K.SMOOTH_CURVE_TO) ? (t2 = i3.relative ? o4 + i3.x2 : i3.x2, n2 = i3.relative ? s2 + i3.y2 : i3.y2) : (t2 = NaN, n2 = NaN), i3.type & K.SMOOTH_QUAD_TO ? (r3 = isNaN(r3) ? o4 : 2 * o4 - r3, a3 = isNaN(a3) ? s2 : 2 * s2 - a3) : i3.type & K.QUAD_TO ? (r3 = i3.relative ? o4 + i3.x1 : i3.x1, a3 = i3.relative ? s2 + i3.y1 : i3.y2) : (r3 = NaN, a3 = NaN), i3.type & K.LINE_COMMANDS || i3.type & K.ARC && (i3.rX === 0 || i3.rY === 0 || !i3.lArcFlag) || i3.type & K.CURVE_TO || i3.type & K.SMOOTH_CURVE_TO || i3.type & K.QUAD_TO || i3.type & K.SMOOTH_QUAD_TO) {
        var m2 = i3.x === void 0 ? 0 : i3.relative ? i3.x : i3.x - o4, h2 = i3.y === void 0 ? 0 : i3.relative ? i3.y : i3.y - s2;
        f2 = isNaN(r3) ? i3.x1 === void 0 ? f2 : i3.relative ? i3.x : i3.x1 - o4 : r3 - o4, p2 = isNaN(a3) ? i3.y1 === void 0 ? p2 : i3.relative ? i3.y : i3.y1 - s2 : a3 - s2;
        var g2 = i3.x2 === void 0 ? 0 : i3.relative ? i3.x : i3.x2 - o4, _2 = i3.y2 === void 0 ? 0 : i3.relative ? i3.y : i3.y2 - s2;
        u2(m2) <= e16 && u2(h2) <= e16 && u2(f2) <= e16 && u2(p2) <= e16 && u2(g2) <= e16 && u2(_2) <= e16 && (d2 = true);
      }
      return i3.type & K.CLOSE_PATH && u2(o4 - c3) <= e16 && u2(s2 - l2) <= e16 && (d2 = true), d2 ? [] : i3;
    });
  }, e15.MATRIX = a2, e15.ROTATE = function(e16, t2, n2) {
    t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0), En(e16, t2, n2);
    var r3 = Math.sin(e16), i3 = Math.cos(e16);
    return a2(i3, r3, -r3, i3, t2 - t2 * i3 + n2 * r3, n2 - t2 * r3 - n2 * i3);
  }, e15.TRANSLATE = function(e16, t2) {
    return t2 === void 0 && (t2 = 0), En(e16, t2), a2(1, 0, 0, 1, e16, t2);
  }, e15.SCALE = function(e16, t2) {
    return t2 === void 0 && (t2 = e16), En(e16, t2), a2(e16, 0, 0, t2, 0, 0);
  }, e15.SKEW_X = function(e16) {
    return En(e16), a2(1, 0, Math.atan(e16), 1, 0, 0);
  }, e15.SKEW_Y = function(e16) {
    return En(e16), a2(1, Math.atan(e16), 0, 1, 0, 0);
  }, e15.X_AXIS_SYMMETRY = function(e16) {
    return e16 === void 0 && (e16 = 0), En(e16), a2(-1, 0, 0, 1, e16, 0);
  }, e15.Y_AXIS_SYMMETRY = function(e16) {
    return e16 === void 0 && (e16 = 0), En(e16), a2(1, 0, 0, -1, 0, e16);
  }, e15.A_TO_C = function() {
    return i2(function(e16, t2, n2) {
      return K.ARC === e16.type ? function(e17, t3, n3) {
        var r3, i3, a3, o4;
        e17.cX || On(e17, t3, n3);
        for (var s2 = Math.min(e17.phi1, e17.phi2), c3 = Math.max(e17.phi1, e17.phi2) - s2, l2 = Math.ceil(c3 / 90), u2 = Array(l2), d2 = t3, f2 = n3, p2 = 0; p2 < l2; p2++) {
          var m2 = jn(e17.phi1, e17.phi2, p2 / l2), h2 = jn(e17.phi1, e17.phi2, (p2 + 1) / l2), g2 = h2 - m2, _2 = 4 / 3 * Math.tan(g2 * An / 4), v2 = [Math.cos(m2 * An) - _2 * Math.sin(m2 * An), Math.sin(m2 * An) + _2 * Math.cos(m2 * An)], y2 = v2[0], b2 = v2[1], x2 = [Math.cos(h2 * An), Math.sin(h2 * An)], S2 = x2[0], C2 = x2[1], w2 = [S2 + _2 * Math.sin(h2 * An), C2 - _2 * Math.cos(h2 * An)], T2 = w2[0], E2 = w2[1];
          u2[p2] = {
            relative: e17.relative,
            type: K.CURVE_TO
          };
          var D2 = function(t4, n4) {
            var r4 = Tn([t4 * e17.rX, n4 * e17.rY], e17.xRot), i4 = r4[0], a4 = r4[1];
            return [e17.cX + i4, e17.cY + a4];
          };
          r3 = D2(y2, b2), u2[p2].x1 = r3[0], u2[p2].y1 = r3[1], i3 = D2(T2, E2), u2[p2].x2 = i3[0], u2[p2].y2 = i3[1], a3 = D2(S2, C2), u2[p2].x = a3[0], u2[p2].y = a3[1], e17.relative && (u2[p2].x1 -= d2, u2[p2].y1 -= f2, u2[p2].x2 -= d2, u2[p2].y2 -= f2, u2[p2].x -= d2, u2[p2].y -= f2), d2 = (o4 = [u2[p2].x, u2[p2].y])[0], f2 = o4[1];
        }
        return u2;
      }(e16, e16.relative ? 0 : t2, e16.relative ? 0 : n2) : e16;
    });
  }, e15.ANNOTATE_ARCS = function() {
    return i2(function(e16, t2, n2) {
      return e16.relative && (t2 = 0, n2 = 0), K.ARC === e16.type && On(e16, t2, n2), e16;
    });
  }, e15.CLONE = o3, e15.CALCULATE_BOUNDS = function() {
    var e16 = function(e17) {
      var t2 = {};
      for (var n2 in e17) t2[n2] = e17[n2];
      return t2;
    }, a3 = t(), o4 = r2(), s2 = n(), c3 = i2(function(t2, n2, r3) {
      var i3 = s2(o4(a3(e16(t2))));
      function l2(e17) {
        e17 > c3.maxX && (c3.maxX = e17), e17 < c3.minX && (c3.minX = e17);
      }
      function u2(e17) {
        e17 > c3.maxY && (c3.maxY = e17), e17 < c3.minY && (c3.minY = e17);
      }
      if (i3.type & K.DRAWING_COMMANDS && (l2(n2), u2(r3)), i3.type & K.HORIZ_LINE_TO && l2(i3.x), i3.type & K.VERT_LINE_TO && u2(i3.y), i3.type & K.LINE_TO && (l2(i3.x), u2(i3.y)), i3.type & K.CURVE_TO) {
        l2(i3.x), u2(i3.y);
        for (var d2 = 0, f2 = Nn(n2, i3.x1, i3.x2, i3.x); d2 < f2.length; d2++) 0 < (O2 = f2[d2]) && 1 > O2 && l2(Pn(n2, i3.x1, i3.x2, i3.x, O2));
        for (var p2 = 0, m2 = Nn(r3, i3.y1, i3.y2, i3.y); p2 < m2.length; p2++) 0 < (O2 = m2[p2]) && 1 > O2 && u2(Pn(r3, i3.y1, i3.y2, i3.y, O2));
      }
      if (i3.type & K.ARC) {
        l2(i3.x), u2(i3.y), On(i3, n2, r3);
        for (var h2 = i3.xRot / 180 * Math.PI, g2 = Math.cos(h2) * i3.rX, _2 = Math.sin(h2) * i3.rX, v2 = -Math.sin(h2) * i3.rY, y2 = Math.cos(h2) * i3.rY, b2 = i3.phi1 < i3.phi2 ? [i3.phi1, i3.phi2] : -180 > i3.phi2 ? [i3.phi2 + 360, i3.phi1 + 360] : [i3.phi2, i3.phi1], x2 = b2[0], S2 = b2[1], C2 = function(e17) {
          var t3 = e17[0], n3 = e17[1], r4 = 180 * Math.atan2(n3, t3) / Math.PI;
          return r4 < x2 ? r4 + 360 : r4;
        }, w2 = 0, T2 = kn(v2, -g2, 0).map(C2); w2 < T2.length; w2++) (O2 = T2[w2]) > x2 && O2 < S2 && l2(Mn(i3.cX, g2, v2, O2));
        for (var E2 = 0, D2 = kn(y2, -_2, 0).map(C2); E2 < D2.length; E2++) {
          var O2;
          (O2 = D2[E2]) > x2 && O2 < S2 && u2(Mn(i3.cY, _2, y2, O2));
        }
      }
      return t2;
    });
    return c3.minX = Infinity, c3.maxX = -Infinity, c3.minY = Infinity, c3.maxY = -Infinity, c3;
  };
})(G || (G = {}));
var Fn;
var In = function() {
  function e15() {
  }
  return e15.prototype.round = function(e16) {
    return this.transform(G.ROUND(e16));
  }, e15.prototype.toAbs = function() {
    return this.transform(G.TO_ABS());
  }, e15.prototype.toRel = function() {
    return this.transform(G.TO_REL());
  }, e15.prototype.normalizeHVZ = function(e16, t, n) {
    return this.transform(G.NORMALIZE_HVZ(e16, t, n));
  }, e15.prototype.normalizeST = function() {
    return this.transform(G.NORMALIZE_ST());
  }, e15.prototype.qtToC = function() {
    return this.transform(G.QT_TO_C());
  }, e15.prototype.aToC = function() {
    return this.transform(G.A_TO_C());
  }, e15.prototype.sanitize = function(e16) {
    return this.transform(G.SANITIZE(e16));
  }, e15.prototype.translate = function(e16, t) {
    return this.transform(G.TRANSLATE(e16, t));
  }, e15.prototype.scale = function(e16, t) {
    return this.transform(G.SCALE(e16, t));
  }, e15.prototype.rotate = function(e16, t, n) {
    return this.transform(G.ROTATE(e16, t, n));
  }, e15.prototype.matrix = function(e16, t, n, r2, i2, a2) {
    return this.transform(G.MATRIX(e16, t, n, r2, i2, a2));
  }, e15.prototype.skewX = function(e16) {
    return this.transform(G.SKEW_X(e16));
  }, e15.prototype.skewY = function(e16) {
    return this.transform(G.SKEW_Y(e16));
  }, e15.prototype.xSymmetry = function(e16) {
    return this.transform(G.X_AXIS_SYMMETRY(e16));
  }, e15.prototype.ySymmetry = function(e16) {
    return this.transform(G.Y_AXIS_SYMMETRY(e16));
  }, e15.prototype.annotateArcs = function() {
    return this.transform(G.ANNOTATE_ARCS());
  }, e15;
}();
var Ln = function(e15) {
  return e15 === " " || e15 === "	" || e15 === "\r" || e15 === "\n";
};
var Rn = function(e15) {
  return 48 <= e15.charCodeAt(0) && e15.charCodeAt(0) <= 57;
};
var zn = function(e15) {
  function t() {
    var t2 = e15.call(this) || this;
    return t2.curNumber = "", t2.curCommandType = -1, t2.curCommandRelative = false, t2.canParseCommandOrComma = true, t2.curNumberHasExp = false, t2.curNumberHasExpDigits = false, t2.curNumberHasDecimal = false, t2.curArgs = [], t2;
  }
  return Cn(t, e15), t.prototype.finish = function(e16) {
    if (e16 === void 0 && (e16 = []), this.parse(" ", e16), this.curArgs.length !== 0 || !this.canParseCommandOrComma) throw SyntaxError("Unterminated command at the path end.");
    return e16;
  }, t.prototype.parse = function(e16, t2) {
    var n = this;
    t2 === void 0 && (t2 = []);
    for (var r2 = function(e17) {
      t2.push(e17), n.curArgs.length = 0, n.canParseCommandOrComma = true;
    }, i2 = 0; i2 < e16.length; i2++) {
      var a2 = e16[i2], o3 = !(this.curCommandType !== K.ARC || this.curArgs.length !== 3 && this.curArgs.length !== 4 || this.curNumber.length !== 1 || this.curNumber !== "0" && this.curNumber !== "1"), s2 = Rn(a2) && (this.curNumber === "0" && a2 === "0" || o3);
      if (!Rn(a2) || s2) if (a2 !== "e" && a2 !== "E") if (a2 !== "-" && a2 !== "+" || !this.curNumberHasExp || this.curNumberHasExpDigits) if (a2 !== "." || this.curNumberHasExp || this.curNumberHasDecimal || o3) {
        if (this.curNumber && this.curCommandType !== -1) {
          var c3 = Number(this.curNumber);
          if (isNaN(c3)) throw SyntaxError("Invalid number ending at " + i2);
          if (this.curCommandType === K.ARC) {
            if (this.curArgs.length === 0 || this.curArgs.length === 1) {
              if (0 > c3) throw SyntaxError('Expected positive number, got "' + c3 + '" at index "' + i2 + '"');
            } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1") throw SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + i2 + '"');
          }
          this.curArgs.push(c3), this.curArgs.length === Bn[this.curCommandType] && (K.HORIZ_LINE_TO === this.curCommandType ? r2({
            type: K.HORIZ_LINE_TO,
            relative: this.curCommandRelative,
            x: c3
          }) : K.VERT_LINE_TO === this.curCommandType ? r2({
            type: K.VERT_LINE_TO,
            relative: this.curCommandRelative,
            y: c3
          }) : this.curCommandType === K.MOVE_TO || this.curCommandType === K.LINE_TO || this.curCommandType === K.SMOOTH_QUAD_TO ? (r2({
            type: this.curCommandType,
            relative: this.curCommandRelative,
            x: this.curArgs[0],
            y: this.curArgs[1]
          }), K.MOVE_TO === this.curCommandType && (this.curCommandType = K.LINE_TO)) : this.curCommandType === K.CURVE_TO ? r2({
            type: K.CURVE_TO,
            relative: this.curCommandRelative,
            x1: this.curArgs[0],
            y1: this.curArgs[1],
            x2: this.curArgs[2],
            y2: this.curArgs[3],
            x: this.curArgs[4],
            y: this.curArgs[5]
          }) : this.curCommandType === K.SMOOTH_CURVE_TO ? r2({
            type: K.SMOOTH_CURVE_TO,
            relative: this.curCommandRelative,
            x2: this.curArgs[0],
            y2: this.curArgs[1],
            x: this.curArgs[2],
            y: this.curArgs[3]
          }) : this.curCommandType === K.QUAD_TO ? r2({
            type: K.QUAD_TO,
            relative: this.curCommandRelative,
            x1: this.curArgs[0],
            y1: this.curArgs[1],
            x: this.curArgs[2],
            y: this.curArgs[3]
          }) : this.curCommandType === K.ARC && r2({
            type: K.ARC,
            relative: this.curCommandRelative,
            rX: this.curArgs[0],
            rY: this.curArgs[1],
            xRot: this.curArgs[2],
            lArcFlag: this.curArgs[3],
            sweepFlag: this.curArgs[4],
            x: this.curArgs[5],
            y: this.curArgs[6]
          })), this.curNumber = "", this.curNumberHasExpDigits = false, this.curNumberHasExp = false, this.curNumberHasDecimal = false, this.canParseCommandOrComma = true;
        }
        if (!Ln(a2)) if (a2 === "," && this.canParseCommandOrComma) this.canParseCommandOrComma = false;
        else if (a2 !== "+" && a2 !== "-" && a2 !== ".") if (s2) this.curNumber = a2, this.curNumberHasDecimal = false;
        else {
          if (this.curArgs.length !== 0) throw SyntaxError("Unterminated command at index " + i2 + ".");
          if (!this.canParseCommandOrComma) throw SyntaxError('Unexpected character "' + a2 + '" at index ' + i2 + ". Command cannot follow comma");
          if (this.canParseCommandOrComma = false, a2 !== "z" && a2 !== "Z") if (a2 === "h" || a2 === "H") this.curCommandType = K.HORIZ_LINE_TO, this.curCommandRelative = a2 === "h";
          else if (a2 === "v" || a2 === "V") this.curCommandType = K.VERT_LINE_TO, this.curCommandRelative = a2 === "v";
          else if (a2 === "m" || a2 === "M") this.curCommandType = K.MOVE_TO, this.curCommandRelative = a2 === "m";
          else if (a2 === "l" || a2 === "L") this.curCommandType = K.LINE_TO, this.curCommandRelative = a2 === "l";
          else if (a2 === "c" || a2 === "C") this.curCommandType = K.CURVE_TO, this.curCommandRelative = a2 === "c";
          else if (a2 === "s" || a2 === "S") this.curCommandType = K.SMOOTH_CURVE_TO, this.curCommandRelative = a2 === "s";
          else if (a2 === "q" || a2 === "Q") this.curCommandType = K.QUAD_TO, this.curCommandRelative = a2 === "q";
          else if (a2 === "t" || a2 === "T") this.curCommandType = K.SMOOTH_QUAD_TO, this.curCommandRelative = a2 === "t";
          else {
            if (a2 !== "a" && a2 !== "A") throw SyntaxError('Unexpected character "' + a2 + '" at index ' + i2 + ".");
            this.curCommandType = K.ARC, this.curCommandRelative = a2 === "a";
          }
          else t2.push({ type: K.CLOSE_PATH }), this.canParseCommandOrComma = true, this.curCommandType = -1;
        }
        else this.curNumber = a2, this.curNumberHasDecimal = a2 === ".";
      } else this.curNumber += a2, this.curNumberHasDecimal = true;
      else this.curNumber += a2;
      else this.curNumber += a2, this.curNumberHasExp = true;
      else this.curNumber += a2, this.curNumberHasExpDigits = this.curNumberHasExp;
    }
    return t2;
  }, t.prototype.transform = function(e16) {
    return Object.create(this, { parse: { value: function(t2, n) {
      n === void 0 && (n = []);
      for (var r2 = 0, i2 = Object.getPrototypeOf(this).parse.call(this, t2); r2 < i2.length; r2++) {
        var a2 = i2[r2], o3 = e16(a2);
        Array.isArray(o3) ? n.push.apply(n, o3) : n.push(o3);
      }
      return n;
    } } });
  }, t;
}(In);
var K = function(e15) {
  function t(n) {
    var r2 = e15.call(this) || this;
    return r2.commands = typeof n == "string" ? t.parse(n) : n, r2;
  }
  return Cn(t, e15), t.prototype.encode = function() {
    return t.encode(this.commands);
  }, t.prototype.getBounds = function() {
    var e16 = G.CALCULATE_BOUNDS();
    return this.transform(e16), e16;
  }, t.prototype.transform = function(e16) {
    for (var t2 = [], n = 0, r2 = this.commands; n < r2.length; n++) {
      var i2 = e16(r2[n]);
      Array.isArray(i2) ? t2.push.apply(t2, i2) : t2.push(i2);
    }
    return this.commands = t2, this;
  }, t.encode = function(e16) {
    return wn(e16);
  }, t.parse = function(e16) {
    var t2 = new zn(), n = [];
    return t2.parse(e16, n), t2.finish(n), n;
  }, t.CLOSE_PATH = 1, t.MOVE_TO = 2, t.HORIZ_LINE_TO = 4, t.VERT_LINE_TO = 8, t.LINE_TO = 16, t.CURVE_TO = 32, t.SMOOTH_CURVE_TO = 64, t.QUAD_TO = 128, t.SMOOTH_QUAD_TO = 256, t.ARC = 512, t.LINE_COMMANDS = t.LINE_TO | t.HORIZ_LINE_TO | t.VERT_LINE_TO, t.DRAWING_COMMANDS = t.HORIZ_LINE_TO | t.VERT_LINE_TO | t.LINE_TO | t.CURVE_TO | t.SMOOTH_CURVE_TO | t.QUAD_TO | t.SMOOTH_QUAD_TO | t.ARC, t;
}(In);
var Bn = ((Fn = {})[K.MOVE_TO] = 2, Fn[K.LINE_TO] = 2, Fn[K.HORIZ_LINE_TO] = 1, Fn[K.VERT_LINE_TO] = 1, Fn[K.CLOSE_PATH] = 0, Fn[K.QUAD_TO] = 4, Fn[K.SMOOTH_QUAD_TO] = 2, Fn[K.CURVE_TO] = 6, Fn[K.SMOOTH_CURVE_TO] = 4, Fn[K.ARC] = 7, Fn);
o(() => {
  var e15 = ae().PROPER, t = fe(), n = B(), r2 = bt(), a2 = i(), o3 = Pt(), s2 = "toString", c3 = RegExp.prototype, l2 = c3[s2], u2 = a2(function() {
    return l2.call({
      source: "a",
      flags: "b"
    }) !== "/a/b";
  }), d2 = e15 && l2.name !== s2;
  (u2 || d2) && t(c3, s2, function() {
    var e16 = n(this), t2 = r2(e16.source), i2 = r2(o3(e16));
    return "/" + t2 + "/" + i2;
  }, { unsafe: true });
})();
function Vn(e15) {
  "@babel/helpers - typeof";
  return Vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e16) {
    return typeof e16;
  } : function(e16) {
    return e16 && typeof Symbol == "function" && e16.constructor === Symbol && e16 !== Symbol.prototype ? "symbol" : typeof e16;
  }, Vn(e15);
}
function Hn(e15, t) {
  if (!(e15 instanceof t)) throw TypeError("Cannot call a class as a function");
}
var Un = [
  512,
  512,
  456,
  512,
  328,
  456,
  335,
  512,
  405,
  328,
  271,
  456,
  388,
  335,
  292,
  512,
  454,
  405,
  364,
  328,
  298,
  271,
  496,
  456,
  420,
  388,
  360,
  335,
  312,
  292,
  273,
  512,
  482,
  454,
  428,
  405,
  383,
  364,
  345,
  328,
  312,
  298,
  284,
  271,
  259,
  496,
  475,
  456,
  437,
  420,
  404,
  388,
  374,
  360,
  347,
  335,
  323,
  312,
  302,
  292,
  282,
  273,
  265,
  512,
  497,
  482,
  468,
  454,
  441,
  428,
  417,
  405,
  394,
  383,
  373,
  364,
  354,
  345,
  337,
  328,
  320,
  312,
  305,
  298,
  291,
  284,
  278,
  271,
  265,
  259,
  507,
  496,
  485,
  475,
  465,
  456,
  446,
  437,
  428,
  420,
  412,
  404,
  396,
  388,
  381,
  374,
  367,
  360,
  354,
  347,
  341,
  335,
  329,
  323,
  318,
  312,
  307,
  302,
  297,
  292,
  287,
  282,
  278,
  273,
  269,
  265,
  261,
  512,
  505,
  497,
  489,
  482,
  475,
  468,
  461,
  454,
  447,
  441,
  435,
  428,
  422,
  417,
  411,
  405,
  399,
  394,
  389,
  383,
  378,
  373,
  368,
  364,
  359,
  354,
  350,
  345,
  341,
  337,
  332,
  328,
  324,
  320,
  316,
  312,
  309,
  305,
  301,
  298,
  294,
  291,
  287,
  284,
  281,
  278,
  274,
  271,
  268,
  265,
  262,
  259,
  257,
  507,
  501,
  496,
  491,
  485,
  480,
  475,
  470,
  465,
  460,
  456,
  451,
  446,
  442,
  437,
  433,
  428,
  424,
  420,
  416,
  412,
  408,
  404,
  400,
  396,
  392,
  388,
  385,
  381,
  377,
  374,
  370,
  367,
  363,
  360,
  357,
  354,
  350,
  347,
  344,
  341,
  338,
  335,
  332,
  329,
  326,
  323,
  320,
  318,
  315,
  312,
  310,
  307,
  304,
  302,
  299,
  297,
  294,
  292,
  289,
  287,
  285,
  282,
  280,
  278,
  275,
  273,
  271,
  269,
  267,
  265,
  263,
  261,
  259
];
var Wn = [
  9,
  11,
  12,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24
];
function Gn(e15, t, n, r2, i2) {
  if (typeof e15 == "string" && (e15 = document.getElementById(e15)), !e15 || Vn(e15) !== "object" || !("getContext" in e15)) throw TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
  var a2 = e15.getContext("2d");
  try {
    return a2.getImageData(t, n, r2, i2);
  } catch (e16) {
    throw Error("unable to access image data: " + e16);
  }
}
function Kn(e15, t, n, r2, i2, a2) {
  if (!(isNaN(a2) || a2 < 1)) {
    a2 |= 0;
    var o3 = Gn(e15, t, n, r2, i2);
    o3 = qn(o3, t, n, r2, i2, a2), e15.getContext("2d").putImageData(o3, t, n);
  }
}
function qn(e15, t, n, r2, i2, a2) {
  for (var o3 = e15.data, s2 = 2 * a2 + 1, c3 = r2 - 1, l2 = i2 - 1, u2 = a2 + 1, d2 = u2 * (u2 + 1) / 2, f2 = new Jn(), p2 = f2, m2, h2 = 1; h2 < s2; h2++) p2 = p2.next = new Jn(), h2 === u2 && (m2 = p2);
  p2.next = f2;
  for (var g2 = null, _2 = null, v2 = 0, y2 = 0, b2 = Un[a2], x2 = Wn[a2], S2 = 0; S2 < i2; S2++) {
    p2 = f2;
    for (var C2 = o3[y2], w2 = o3[y2 + 1], T2 = o3[y2 + 2], E2 = o3[y2 + 3], D2 = 0; D2 < u2; D2++) p2.r = C2, p2.g = w2, p2.b = T2, p2.a = E2, p2 = p2.next;
    for (var O2 = 0, k2 = 0, A2 = 0, j2 = 0, M2 = u2 * C2, N2 = u2 * w2, P2 = u2 * T2, F2 = u2 * E2, I2 = d2 * C2, L2 = d2 * w2, R2 = d2 * T2, z2 = d2 * E2, ee2 = 1; ee2 < u2; ee2++) {
      var te2 = y2 + ((c3 < ee2 ? c3 : ee2) << 2), ne2 = o3[te2], B2 = o3[te2 + 1], re2 = o3[te2 + 2], ie2 = o3[te2 + 3], ae2 = u2 - ee2;
      I2 += (p2.r = ne2) * ae2, L2 += (p2.g = B2) * ae2, R2 += (p2.b = re2) * ae2, z2 += (p2.a = ie2) * ae2, O2 += ne2, k2 += B2, A2 += re2, j2 += ie2, p2 = p2.next;
    }
    g2 = f2, _2 = m2;
    for (var oe2 = 0; oe2 < r2; oe2++) {
      var se2 = z2 * b2 >>> x2;
      if (o3[y2 + 3] = se2, se2 !== 0) {
        var ce2 = 255 / se2;
        o3[y2] = (I2 * b2 >>> x2) * ce2, o3[y2 + 1] = (L2 * b2 >>> x2) * ce2, o3[y2 + 2] = (R2 * b2 >>> x2) * ce2;
      } else o3[y2] = o3[y2 + 1] = o3[y2 + 2] = 0;
      I2 -= M2, L2 -= N2, R2 -= P2, z2 -= F2, M2 -= g2.r, N2 -= g2.g, P2 -= g2.b, F2 -= g2.a;
      var le2 = oe2 + a2 + 1;
      le2 = v2 + (le2 < c3 ? le2 : c3) << 2, O2 += g2.r = o3[le2], k2 += g2.g = o3[le2 + 1], A2 += g2.b = o3[le2 + 2], j2 += g2.a = o3[le2 + 3], I2 += O2, L2 += k2, R2 += A2, z2 += j2, g2 = g2.next;
      var ue2 = _2, de2 = ue2.r, fe2 = ue2.g, pe2 = ue2.b, me2 = ue2.a;
      M2 += de2, N2 += fe2, P2 += pe2, F2 += me2, O2 -= de2, k2 -= fe2, A2 -= pe2, j2 -= me2, _2 = _2.next, y2 += 4;
    }
    v2 += r2;
  }
  for (var he2 = 0; he2 < r2; he2++) {
    y2 = he2 << 2;
    var V2 = o3[y2], ge2 = o3[y2 + 1], _e2 = o3[y2 + 2], H2 = o3[y2 + 3], ve2 = u2 * V2, ye2 = u2 * ge2, be2 = u2 * _e2, xe2 = u2 * H2, Se2 = d2 * V2, Ce2 = d2 * ge2, U2 = d2 * _e2, we2 = d2 * H2;
    p2 = f2;
    for (var Te2 = 0; Te2 < u2; Te2++) p2.r = V2, p2.g = ge2, p2.b = _e2, p2.a = H2, p2 = p2.next;
    for (var Ee2 = r2, De2 = 0, Oe2 = 0, ke2 = 0, Ae2 = 0, je2 = 1; je2 <= a2; je2++) {
      y2 = Ee2 + he2 << 2;
      var Me2 = u2 - je2;
      Se2 += (p2.r = V2 = o3[y2]) * Me2, Ce2 += (p2.g = ge2 = o3[y2 + 1]) * Me2, U2 += (p2.b = _e2 = o3[y2 + 2]) * Me2, we2 += (p2.a = H2 = o3[y2 + 3]) * Me2, Ae2 += V2, De2 += ge2, Oe2 += _e2, ke2 += H2, p2 = p2.next, je2 < l2 && (Ee2 += r2);
    }
    y2 = he2, g2 = f2, _2 = m2;
    for (var Ne2 = 0; Ne2 < i2; Ne2++) {
      var W2 = y2 << 2;
      o3[W2 + 3] = H2 = we2 * b2 >>> x2, H2 > 0 ? (H2 = 255 / H2, o3[W2] = (Se2 * b2 >>> x2) * H2, o3[W2 + 1] = (Ce2 * b2 >>> x2) * H2, o3[W2 + 2] = (U2 * b2 >>> x2) * H2) : o3[W2] = o3[W2 + 1] = o3[W2 + 2] = 0, Se2 -= ve2, Ce2 -= ye2, U2 -= be2, we2 -= xe2, ve2 -= g2.r, ye2 -= g2.g, be2 -= g2.b, xe2 -= g2.a, W2 = he2 + ((W2 = Ne2 + u2) < l2 ? W2 : l2) * r2 << 2, Se2 += Ae2 += g2.r = o3[W2], Ce2 += De2 += g2.g = o3[W2 + 1], U2 += Oe2 += g2.b = o3[W2 + 2], we2 += ke2 += g2.a = o3[W2 + 3], g2 = g2.next, ve2 += V2 = _2.r, ye2 += ge2 = _2.g, be2 += _e2 = _2.b, xe2 += H2 = _2.a, Ae2 -= V2, De2 -= ge2, Oe2 -= _e2, ke2 -= H2, _2 = _2.next, y2 += r2;
    }
  }
  return e15;
}
var Jn = function e2() {
  Hn(this, e2), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
};
function Yn() {
  var { DOMParser: e15 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = {
    window: null,
    ignoreAnimation: true,
    ignoreMouse: true,
    DOMParser: e15,
    createCanvas(e16, t2) {
      return new OffscreenCanvas(e16, t2);
    },
    createImage(e16) {
      return yt(function* () {
        var t2 = yield (yield fetch(e16)).blob();
        return yield createImageBitmap(t2);
      })();
    }
  };
  return (typeof DOMParser < "u" || e15 === void 0) && Reflect.deleteProperty(t, "DOMParser"), t;
}
function Xn(e15) {
  var { DOMParser: t, canvas: n, fetch: r2 } = e15;
  return {
    window: null,
    ignoreAnimation: true,
    ignoreMouse: true,
    DOMParser: t,
    fetch: r2,
    createCanvas: n.createCanvas,
    createImage: n.loadImage
  };
}
var Zn = Object.freeze({
  __proto__: null,
  offscreen: Yn,
  node: Xn
});
function Qn(e15) {
  return e15.replace(/(?!\u3000)\s+/gm, " ");
}
function $n(e15) {
  return e15.replace(/^[\n \t]+/, "");
}
function er(e15) {
  return e15.replace(/[\n \t]+$/, "");
}
function q(e15) {
  return ((e15 || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || []).map(parseFloat);
}
var tr = /^[A-Z-]+$/;
function nr(e15) {
  return tr.test(e15) ? e15.toLowerCase() : e15;
}
function rr(e15) {
  var t = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(e15) || [];
  return t[2] || t[3] || t[4];
}
function ir(e15) {
  if (!e15.startsWith("rgb")) return e15;
  var t = 3;
  return e15.replace(/\d+(\.\d+)?/g, (e16, n) => t-- && n ? String(Math.round(parseFloat(e16))) : e16);
}
var ar = /(\[[^\]]+\])/g;
var or = /(#[^\s+>~.[:]+)/g;
var sr = /(\.[^\s+>~.[:]+)/g;
var cr = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi;
var lr = /(:[\w-]+\([^)]*\))/gi;
var ur = /(:[^\s+>~.[:]+)/g;
var dr = /([^\s+>~.[:]+)/g;
function fr(e15, t) {
  var n = t.exec(e15);
  return n ? [e15.replace(t, " "), n.length] : [e15, 0];
}
function pr(e15) {
  var t = [
    0,
    0,
    0
  ], n = e15.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "), r2 = 0;
  return [n, r2] = fr(n, ar), t[1] += r2, [n, r2] = fr(n, or), t[0] += r2, [n, r2] = fr(n, sr), t[1] += r2, [n, r2] = fr(n, cr), t[2] += r2, [n, r2] = fr(n, lr), t[1] += r2, [n, r2] = fr(n, ur), t[1] += r2, n = n.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " "), [n, r2] = fr(n, dr), t[2] += r2, t.join("");
}
var mr = 1e-8;
function hr(e15) {
  return Math.sqrt(e15[0] ** 2 + e15[1] ** 2);
}
function gr(e15, t) {
  return (e15[0] * t[0] + e15[1] * t[1]) / (hr(e15) * hr(t));
}
function _r(e15, t) {
  return (e15[0] * t[1] < e15[1] * t[0] ? -1 : 1) * Math.acos(gr(e15, t));
}
function vr(e15) {
  return e15 * e15 * e15;
}
function yr(e15) {
  return 3 * e15 * e15 * (1 - e15);
}
function br(e15) {
  return 3 * e15 * (1 - e15) * (1 - e15);
}
function xr(e15) {
  return (1 - e15) * (1 - e15) * (1 - e15);
}
function Sr(e15) {
  return e15 * e15;
}
function Cr(e15) {
  return 2 * e15 * (1 - e15);
}
function wr(e15) {
  return (1 - e15) * (1 - e15);
}
var J = class e3 {
  constructor(e15, t, n) {
    this.document = e15, this.name = t, this.value = n, this.isNormalizedColor = false;
  }
  static empty(t) {
    return new e3(t, "EMPTY", "");
  }
  split() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : " ", { document: n, name: r2 } = this;
    return Qn(this.getString()).trim().split(t).map((t2) => new e3(n, r2, t2));
  }
  hasValue(e15) {
    var { value: t } = this;
    return t !== null && t !== "" && (e15 || t !== 0) && t !== void 0;
  }
  isString(e15) {
    var { value: t } = this, n = typeof t == "string";
    return !n || !e15 ? n : e15.test(t);
  }
  isUrlDefinition() {
    return this.isString(/^url\(/);
  }
  isPixels() {
    if (!this.hasValue()) return false;
    var e15 = this.getString();
    switch (true) {
      case e15.endsWith("px"):
      case /^[0-9]+$/.test(e15):
        return true;
      default:
        return false;
    }
  }
  setValue(e15) {
    return this.value = e15, this;
  }
  getValue(e15) {
    return e15 === void 0 || this.hasValue() ? this.value : e15;
  }
  getNumber(e15) {
    if (!this.hasValue()) return e15 === void 0 ? 0 : parseFloat(e15);
    var { value: t } = this, n = parseFloat(t);
    return this.isString(/%$/) && (n /= 100), n;
  }
  getString(e15) {
    return e15 === void 0 || this.hasValue() ? this.value === void 0 ? "" : String(this.value) : String(e15);
  }
  getColor(e15) {
    var t = this.getString(e15);
    return this.isNormalizedColor ? t : (this.isNormalizedColor = true, t = ir(t), this.value = t, t);
  }
  getDpi() {
    return 96;
  }
  getRem() {
    return this.document.rootEmSize;
  }
  getEm() {
    return this.document.emSize;
  }
  getUnits() {
    return this.getString().replace(/[0-9.-]/g, "");
  }
  getPixels(e15) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (!this.hasValue()) return 0;
    var [n, r2] = typeof e15 == "boolean" ? [void 0, e15] : [e15], { viewPort: i2 } = this.document.screen;
    switch (true) {
      case this.isString(/vmin$/):
        return this.getNumber() / 100 * Math.min(i2.computeSize("x"), i2.computeSize("y"));
      case this.isString(/vmax$/):
        return this.getNumber() / 100 * Math.max(i2.computeSize("x"), i2.computeSize("y"));
      case this.isString(/vw$/):
        return this.getNumber() / 100 * i2.computeSize("x");
      case this.isString(/vh$/):
        return this.getNumber() / 100 * i2.computeSize("y");
      case this.isString(/rem$/):
        return this.getNumber() * this.getRem();
      case this.isString(/em$/):
        return this.getNumber() * this.getEm();
      case this.isString(/ex$/):
        return this.getNumber() * this.getEm() / 2;
      case this.isString(/px$/):
        return this.getNumber();
      case this.isString(/pt$/):
        return this.getNumber() * this.getDpi() * (1 / 72);
      case this.isString(/pc$/):
        return this.getNumber() * 15;
      case this.isString(/cm$/):
        return this.getNumber() * this.getDpi() / 2.54;
      case this.isString(/mm$/):
        return this.getNumber() * this.getDpi() / 25.4;
      case this.isString(/in$/):
        return this.getNumber() * this.getDpi();
      case (this.isString(/%$/) && r2):
        return this.getNumber() * this.getEm();
      case this.isString(/%$/):
        return this.getNumber() * i2.computeSize(n);
      default:
        var a2 = this.getNumber();
        return t && a2 < 1 ? a2 * i2.computeSize(n) : a2;
    }
  }
  getMilliseconds() {
    return this.hasValue() ? this.isString(/ms$/) ? this.getNumber() : this.getNumber() * 1e3 : 0;
  }
  getRadians() {
    if (!this.hasValue()) return 0;
    switch (true) {
      case this.isString(/deg$/):
        return this.getNumber() * (Math.PI / 180);
      case this.isString(/grad$/):
        return this.getNumber() * (Math.PI / 200);
      case this.isString(/rad$/):
        return this.getNumber();
      default:
        return this.getNumber() * (Math.PI / 180);
    }
  }
  getDefinition() {
    var e15 = this.getString(), t = /#([^)'"]+)/.exec(e15);
    return t && (t = t[1]), t || (t = e15), this.document.definitions[t];
  }
  getFillStyleDefinition(e15, t) {
    var n = this.getDefinition();
    if (!n) return null;
    if (typeof n.createGradient == "function") return n.createGradient(this.document.ctx, e15, t);
    if (typeof n.createPattern == "function") {
      if (n.getHrefAttribute().hasValue()) {
        var r2 = n.getAttribute("patternTransform");
        n = n.getHrefAttribute().getDefinition(), r2.hasValue() && n.getAttribute("patternTransform", true).setValue(r2.value);
      }
      return n.createPattern(this.document.ctx, e15, t);
    }
    return null;
  }
  getTextBaseline() {
    return this.hasValue() ? e3.textBaselineMapping[this.getString()] : null;
  }
  addOpacity(t) {
    for (var n = this.getColor(), r2 = n.length, i2 = 0, a2 = 0; a2 < r2 && (n[a2] === "," && i2++, i2 !== 3); a2++) ;
    if (t.hasValue() && this.isString() && i2 !== 3) {
      var o3 = new xn.default(n);
      o3.ok && (o3.alpha = t.getNumber(), n = o3.toRGBA());
    }
    return new e3(this.document, this.name, n);
  }
};
J.textBaselineMapping = {
  baseline: "alphabetic",
  "before-edge": "top",
  "text-before-edge": "top",
  middle: "middle",
  central: "middle",
  "after-edge": "bottom",
  "text-after-edge": "bottom",
  ideographic: "ideographic",
  alphabetic: "alphabetic",
  hanging: "hanging",
  mathematical: "alphabetic"
};
var Tr = class {
  constructor() {
    this.viewPorts = [];
  }
  clear() {
    this.viewPorts = [];
  }
  setCurrent(e15, t) {
    this.viewPorts.push({
      width: e15,
      height: t
    });
  }
  removeCurrent() {
    this.viewPorts.pop();
  }
  getCurrent() {
    var { viewPorts: e15 } = this;
    return e15[e15.length - 1];
  }
  get width() {
    return this.getCurrent().width;
  }
  get height() {
    return this.getCurrent().height;
  }
  computeSize(e15) {
    return typeof e15 == "number" ? e15 : e15 === "x" ? this.width : e15 === "y" ? this.height : Math.sqrt(this.width ** 2 + this.height ** 2) / Math.sqrt(2);
  }
};
var Y = class e4 {
  constructor(e15, t) {
    this.x = e15, this.y = t;
  }
  static parse(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, [r2 = n, i2 = n] = q(t);
    return new e4(r2, i2);
  }
  static parseScale(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, [r2 = n, i2 = r2] = q(t);
    return new e4(r2, i2);
  }
  static parsePath(t) {
    for (var n = q(t), r2 = n.length, i2 = [], a2 = 0; a2 < r2; a2 += 2) i2.push(new e4(n[a2], n[a2 + 1]));
    return i2;
  }
  angleTo(e15) {
    return Math.atan2(e15.y - this.y, e15.x - this.x);
  }
  applyTransform(e15) {
    var { x: t, y: n } = this, r2 = t * e15[0] + n * e15[2] + e15[4], i2 = t * e15[1] + n * e15[3] + e15[5];
    this.x = r2, this.y = i2;
  }
};
var Er = class {
  constructor(e15) {
    this.screen = e15, this.working = false, this.events = [], this.eventElements = [], this.onClick = this.onClick.bind(this), this.onMouseMove = this.onMouseMove.bind(this);
  }
  isWorking() {
    return this.working;
  }
  start() {
    if (!this.working) {
      var { screen: e15, onClick: t, onMouseMove: n } = this, r2 = e15.ctx.canvas;
      r2.onclick = t, r2.onmousemove = n, this.working = true;
    }
  }
  stop() {
    if (this.working) {
      var e15 = this.screen.ctx.canvas;
      this.working = false, e15.onclick = null, e15.onmousemove = null;
    }
  }
  hasEvents() {
    return this.working && this.events.length > 0;
  }
  runEvents() {
    if (this.working) {
      var { screen: e15, events: t, eventElements: n } = this, { style: r2 } = e15.ctx.canvas;
      r2 && (r2.cursor = ""), t.forEach((e16, t2) => {
        for (var { run: r3 } = e16, i2 = n[t2]; i2; ) r3(i2), i2 = i2.parent;
      }), this.events = [], this.eventElements = [];
    }
  }
  checkPath(e15, t) {
    if (!(!this.working || !t)) {
      var { events: n, eventElements: r2 } = this;
      n.forEach((n2, i2) => {
        var { x: a2, y: o3 } = n2;
        !r2[i2] && t.isPointInPath && t.isPointInPath(a2, o3) && (r2[i2] = e15);
      });
    }
  }
  checkBoundingBox(e15, t) {
    if (!(!this.working || !t)) {
      var { events: n, eventElements: r2 } = this;
      n.forEach((n2, i2) => {
        var { x: a2, y: o3 } = n2;
        !r2[i2] && t.isPointInBox(a2, o3) && (r2[i2] = e15);
      });
    }
  }
  mapXY(e15, t) {
    for (var { window: n, ctx: r2 } = this.screen, i2 = new Y(e15, t), a2 = r2.canvas; a2; ) i2.x -= a2.offsetLeft, i2.y -= a2.offsetTop, a2 = a2.offsetParent;
    return n.scrollX && (i2.x += n.scrollX), n.scrollY && (i2.y += n.scrollY), i2;
  }
  onClick(e15) {
    var { x: t, y: n } = this.mapXY(e15.clientX, e15.clientY);
    this.events.push({
      type: "onclick",
      x: t,
      y: n,
      run(e16) {
        e16.onClick && e16.onClick();
      }
    });
  }
  onMouseMove(e15) {
    var { x: t, y: n } = this.mapXY(e15.clientX, e15.clientY);
    this.events.push({
      type: "onmousemove",
      x: t,
      y: n,
      run(e16) {
        e16.onMouseMove && e16.onMouseMove();
      }
    });
  }
};
var Dr = typeof window < "u" ? window : null;
var Or = typeof fetch < "u" ? fetch.bind(void 0) : null;
var kr = class {
  constructor(e15) {
    var { fetch: t = Or, window: n = Dr } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.ctx = e15, this.FRAMERATE = 30, this.MAX_VIRTUAL_PIXELS = 3e4, this.CLIENT_WIDTH = 800, this.CLIENT_HEIGHT = 600, this.viewPort = new Tr(), this.mouse = new Er(this), this.animations = [], this.waits = [], this.frameDuration = 0, this.isReadyLock = false, this.isFirstRender = true, this.intervalId = null, this.window = n, this.fetch = t;
  }
  wait(e15) {
    this.waits.push(e15);
  }
  ready() {
    return this.readyPromise ? this.readyPromise : Promise.resolve();
  }
  isReady() {
    if (this.isReadyLock) return true;
    var e15 = this.waits.every((e16) => e16());
    return e15 && (this.waits = [], this.resolveReady && this.resolveReady()), this.isReadyLock = e15, e15;
  }
  setDefaults(e15) {
    e15.strokeStyle = "rgba(0,0,0,0)", e15.lineCap = "butt", e15.lineJoin = "miter", e15.miterLimit = 4;
  }
  setViewBox(e15) {
    var { document: t, ctx: n, aspectRatio: r2, width: i2, desiredWidth: a2, height: o3, desiredHeight: s2, minX: c3 = 0, minY: l2 = 0, refX: u2, refY: d2, clip: f2 = false, clipX: p2 = 0, clipY: m2 = 0 } = e15, [h2, g2] = Qn(r2).replace(/^defer\s/, "").split(" "), _2 = h2 || "xMidYMid", v2 = g2 || "meet", y2 = i2 / a2, b2 = o3 / s2, x2 = Math.min(y2, b2), S2 = Math.max(y2, b2), C2 = a2, w2 = s2;
    v2 === "meet" && (C2 *= x2, w2 *= x2), v2 === "slice" && (C2 *= S2, w2 *= S2);
    var T2 = new J(t, "refX", u2), E2 = new J(t, "refY", d2), D2 = T2.hasValue() && E2.hasValue();
    if (D2 && n.translate(-x2 * T2.getPixels("x"), -x2 * E2.getPixels("y")), f2) {
      var O2 = x2 * p2, k2 = x2 * m2;
      n.beginPath(), n.moveTo(O2, k2), n.lineTo(i2, k2), n.lineTo(i2, o3), n.lineTo(O2, o3), n.closePath(), n.clip();
    }
    if (!D2) {
      var A2 = v2 === "meet" && x2 === b2, j2 = v2 === "slice" && S2 === b2, M2 = v2 === "meet" && x2 === y2, N2 = v2 === "slice" && S2 === y2;
      _2.startsWith("xMid") && (A2 || j2) && n.translate(i2 / 2 - C2 / 2, 0), _2.endsWith("YMid") && (M2 || N2) && n.translate(0, o3 / 2 - w2 / 2), _2.startsWith("xMax") && (A2 || j2) && n.translate(i2 - C2, 0), _2.endsWith("YMax") && (M2 || N2) && n.translate(0, o3 - w2);
    }
    switch (true) {
      case _2 === "none":
        n.scale(y2, b2);
        break;
      case v2 === "meet":
        n.scale(x2, x2);
        break;
      case v2 === "slice":
        n.scale(S2, S2);
        break;
    }
    n.translate(-c3, -l2);
  }
  start(e15) {
    var { enableRedraw: t = false, ignoreMouse: n = false, ignoreAnimation: r2 = false, ignoreDimensions: i2 = false, ignoreClear: a2 = false, forceRedraw: o3, scaleWidth: s2, scaleHeight: c3, offsetX: l2, offsetY: u2 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { FRAMERATE: d2, mouse: f2 } = this, p2 = 1e3 / d2;
    if (this.frameDuration = p2, this.readyPromise = new Promise((e16) => {
      this.resolveReady = e16;
    }), this.isReady() && this.render(e15, i2, a2, s2, c3, l2, u2), t) {
      var m2 = Date.now(), h2 = m2, g2 = 0, _2 = () => {
        m2 = Date.now(), g2 = m2 - h2, g2 >= p2 && (h2 = m2 - g2 % p2, this.shouldUpdate(r2, o3) && (this.render(e15, i2, a2, s2, c3, l2, u2), f2.runEvents())), this.intervalId = (0, bn.default)(_2);
      };
      n || f2.start(), this.intervalId = (0, bn.default)(_2);
    }
  }
  stop() {
    this.intervalId && (this.intervalId = (bn.default.cancel(this.intervalId), null)), this.mouse.stop();
  }
  shouldUpdate(e15, t) {
    if (!e15) {
      var { frameDuration: n } = this;
      if (this.animations.reduce((e16, t2) => t2.update(n) || e16, false)) return true;
    }
    return !!(typeof t == "function" && t() || !this.isReadyLock && this.isReady() || this.mouse.hasEvents());
  }
  render(e15, t, n, r2, i2, a2, o3) {
    var { CLIENT_WIDTH: s2, CLIENT_HEIGHT: c3, viewPort: l2, ctx: u2, isFirstRender: d2 } = this, f2 = u2.canvas;
    l2.clear(), f2.width && f2.height ? l2.setCurrent(f2.width, f2.height) : l2.setCurrent(s2, c3);
    var p2 = e15.getStyle("width"), m2 = e15.getStyle("height");
    !t && (d2 || typeof r2 != "number" && typeof i2 != "number") && (p2.hasValue() && (f2.width = p2.getPixels("x"), f2.style && (f2.style.width = `${f2.width}px`)), m2.hasValue() && (f2.height = m2.getPixels("y"), f2.style && (f2.style.height = `${f2.height}px`)));
    var h2 = f2.clientWidth || f2.width, g2 = f2.clientHeight || f2.height;
    if (t && p2.hasValue() && m2.hasValue() && (h2 = p2.getPixels("x"), g2 = m2.getPixels("y")), l2.setCurrent(h2, g2), typeof a2 == "number" && e15.getAttribute("x", true).setValue(a2), typeof o3 == "number" && e15.getAttribute("y", true).setValue(o3), typeof r2 == "number" || typeof i2 == "number") {
      var _2 = q(e15.getAttribute("viewBox").getString()), v2 = 0, y2 = 0;
      if (typeof r2 == "number") {
        var b2 = e15.getStyle("width");
        b2.hasValue() ? v2 = b2.getPixels("x") / r2 : isNaN(_2[2]) || (v2 = _2[2] / r2);
      }
      if (typeof i2 == "number") {
        var x2 = e15.getStyle("height");
        x2.hasValue() ? y2 = x2.getPixels("y") / i2 : isNaN(_2[3]) || (y2 = _2[3] / i2);
      }
      v2 || (v2 = y2), y2 || (y2 = v2), e15.getAttribute("width", true).setValue(r2), e15.getAttribute("height", true).setValue(i2);
      var S2 = e15.getStyle("transform", true, true);
      S2.setValue(`${S2.getString()} scale(${1 / v2}, ${1 / y2})`);
    }
    n || u2.clearRect(0, 0, h2, g2), e15.render(u2), d2 && (this.isFirstRender = false);
  }
};
kr.defaultWindow = Dr, kr.defaultFetch = Or;
var { defaultFetch: Ar } = kr;
var jr = typeof DOMParser < "u" ? DOMParser : null;
var Mr = class {
  constructor() {
    var { fetch: e15 = Ar, DOMParser: t = jr } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.fetch = e15, this.DOMParser = t;
  }
  parse(e15) {
    var t = this;
    return yt(function* () {
      return e15.startsWith("<") ? t.parseFromString(e15) : t.load(e15);
    })();
  }
  parseFromString(e15) {
    var t = new this.DOMParser();
    try {
      return this.checkDocument(t.parseFromString(e15, "image/svg+xml"));
    } catch {
      return this.checkDocument(t.parseFromString(e15, "text/xml"));
    }
  }
  checkDocument(e15) {
    var t = e15.getElementsByTagName("parsererror")[0];
    if (t) throw Error(t.textContent);
    return e15;
  }
  load(e15) {
    var t = this;
    return yt(function* () {
      var n = yield (yield t.fetch(e15)).text();
      return t.parseFromString(n);
    })();
  }
};
var Nr = class {
  constructor(e15, t) {
    this.type = "translate", this.point = null, this.point = Y.parse(t);
  }
  apply(e15) {
    var { x: t, y: n } = this.point;
    e15.translate(t || 0, n || 0);
  }
  unapply(e15) {
    var { x: t, y: n } = this.point;
    e15.translate(-1 * t || 0, -1 * n || 0);
  }
  applyToPoint(e15) {
    var { x: t, y: n } = this.point;
    e15.applyTransform([
      1,
      0,
      0,
      1,
      t || 0,
      n || 0
    ]);
  }
};
var Pr = class {
  constructor(e15, t, n) {
    this.type = "rotate", this.angle = null, this.originX = null, this.originY = null, this.cx = 0, this.cy = 0;
    var r2 = q(t);
    this.angle = new J(e15, "angle", r2[0]), this.originX = n[0], this.originY = n[1], this.cx = r2[1] || 0, this.cy = r2[2] || 0;
  }
  apply(e15) {
    var { cx: t, cy: n, originX: r2, originY: i2, angle: a2 } = this, o3 = t + r2.getPixels("x"), s2 = n + i2.getPixels("y");
    e15.translate(o3, s2), e15.rotate(a2.getRadians()), e15.translate(-o3, -s2);
  }
  unapply(e15) {
    var { cx: t, cy: n, originX: r2, originY: i2, angle: a2 } = this, o3 = t + r2.getPixels("x"), s2 = n + i2.getPixels("y");
    e15.translate(o3, s2), e15.rotate(-1 * a2.getRadians()), e15.translate(-o3, -s2);
  }
  applyToPoint(e15) {
    var { cx: t, cy: n, angle: r2 } = this, i2 = r2.getRadians();
    e15.applyTransform([
      1,
      0,
      0,
      1,
      t || 0,
      n || 0
    ]), e15.applyTransform([
      Math.cos(i2),
      Math.sin(i2),
      -Math.sin(i2),
      Math.cos(i2),
      0,
      0
    ]), e15.applyTransform([
      1,
      0,
      0,
      1,
      -t || 0,
      -n || 0
    ]);
  }
};
var Fr = class {
  constructor(e15, t, n) {
    this.type = "scale", this.scale = null, this.originX = null, this.originY = null;
    var r2 = Y.parseScale(t);
    (r2.x === 0 || r2.y === 0) && (r2.x = mr, r2.y = mr), this.scale = r2, this.originX = n[0], this.originY = n[1];
  }
  apply(e15) {
    var { scale: { x: t, y: n }, originX: r2, originY: i2 } = this, a2 = r2.getPixels("x"), o3 = i2.getPixels("y");
    e15.translate(a2, o3), e15.scale(t, n || t), e15.translate(-a2, -o3);
  }
  unapply(e15) {
    var { scale: { x: t, y: n }, originX: r2, originY: i2 } = this, a2 = r2.getPixels("x"), o3 = i2.getPixels("y");
    e15.translate(a2, o3), e15.scale(1 / t, 1 / n || t), e15.translate(-a2, -o3);
  }
  applyToPoint(e15) {
    var { x: t, y: n } = this.scale;
    e15.applyTransform([
      t || 0,
      0,
      0,
      n || 0,
      0,
      0
    ]);
  }
};
var Ir = class {
  constructor(e15, t, n) {
    this.type = "matrix", this.matrix = [], this.originX = null, this.originY = null, this.matrix = q(t), this.originX = n[0], this.originY = n[1];
  }
  apply(e15) {
    var { originX: t, originY: n, matrix: r2 } = this, i2 = t.getPixels("x"), a2 = n.getPixels("y");
    e15.translate(i2, a2), e15.transform(r2[0], r2[1], r2[2], r2[3], r2[4], r2[5]), e15.translate(-i2, -a2);
  }
  unapply(e15) {
    var { originX: t, originY: n, matrix: r2 } = this, i2 = r2[0], a2 = r2[2], o3 = r2[4], s2 = r2[1], c3 = r2[3], l2 = r2[5], u2 = 0, d2 = 0, f2 = 1, p2 = 1 / (i2 * (c3 * f2 - l2 * d2) - a2 * (s2 * f2 - l2 * u2) + o3 * (s2 * d2 - c3 * u2)), m2 = t.getPixels("x"), h2 = n.getPixels("y");
    e15.translate(m2, h2), e15.transform(p2 * (c3 * f2 - l2 * d2), p2 * (l2 * u2 - s2 * f2), p2 * (o3 * d2 - a2 * f2), p2 * (i2 * f2 - o3 * u2), p2 * (a2 * l2 - o3 * c3), p2 * (o3 * s2 - i2 * l2)), e15.translate(-m2, -h2);
  }
  applyToPoint(e15) {
    e15.applyTransform(this.matrix);
  }
};
var Lr = class extends Ir {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "skew", this.angle = null, this.angle = new J(e15, "angle", t);
  }
};
var Rr = class extends Lr {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "skewX", this.matrix = [
      1,
      0,
      Math.tan(this.angle.getRadians()),
      1,
      0,
      0
    ];
  }
};
var zr = class extends Lr {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "skewY", this.matrix = [
      1,
      Math.tan(this.angle.getRadians()),
      0,
      1,
      0,
      0
    ];
  }
};
function Br(e15) {
  return Qn(e15).trim().replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
}
function Vr(e15) {
  var [t, n] = e15.split("(");
  return [t.trim(), n.trim().replace(")", "")];
}
var Hr = class e5 {
  constructor(t, n, r2) {
    this.document = t, this.transforms = [], Br(n).forEach((t2) => {
      if (t2 !== "none") {
        var [n2, i2] = Vr(t2), a2 = e5.transformTypes[n2];
        a2 !== void 0 && this.transforms.push(new a2(this.document, i2, r2));
      }
    });
  }
  static fromElement(t, n) {
    var r2 = n.getStyle("transform", false, true), [i2, a2 = i2] = n.getStyle("transform-origin", false, true).split(), o3 = [i2, a2];
    return r2.hasValue() ? new e5(t, r2.getString(), o3) : null;
  }
  apply(e15) {
    for (var { transforms: t } = this, n = t.length, r2 = 0; r2 < n; r2++) t[r2].apply(e15);
  }
  unapply(e15) {
    for (var { transforms: t } = this, n = t.length - 1; n >= 0; n--) t[n].unapply(e15);
  }
  applyToPoint(e15) {
    for (var { transforms: t } = this, n = t.length, r2 = 0; r2 < n; r2++) t[r2].applyToPoint(e15);
  }
};
Hr.transformTypes = {
  translate: Nr,
  rotate: Pr,
  scale: Fr,
  matrix: Ir,
  skewX: Rr,
  skewY: zr
};
var X = class e6 {
  constructor(e15, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (this.document = e15, this.node = t, this.captureTextNodes = n, this.attributes = /* @__PURE__ */ Object.create(null), this.styles = /* @__PURE__ */ Object.create(null), this.stylesSpecificity = /* @__PURE__ */ Object.create(null), this.animationFrozen = false, this.animationFrozenValue = "", this.parent = null, this.children = [], !(!t || t.nodeType !== 1)) {
      Array.from(t.attributes).forEach((t2) => {
        var n2 = nr(t2.nodeName);
        this.attributes[n2] = new J(e15, n2, t2.value);
      }), this.addStylesFromStyleDefinition(), this.getAttribute("style").hasValue() && this.getAttribute("style").getString().split(";").map((e16) => e16.trim()).forEach((t2) => {
        if (t2) {
          var [n2, r3] = t2.split(":").map((e16) => e16.trim());
          this.styles[n2] = new J(e15, n2, r3);
        }
      });
      var { definitions: r2 } = e15, i2 = this.getAttribute("id");
      i2.hasValue() && (r2[i2.getString()] || (r2[i2.getString()] = this)), Array.from(t.childNodes).forEach((t2) => {
        if (t2.nodeType === 1) this.addChild(t2);
        else if (n && (t2.nodeType === 3 || t2.nodeType === 4)) {
          var r3 = e15.createTextNode(t2);
          r3.getText().length > 0 && this.addChild(r3);
        }
      });
    }
  }
  getAttribute(e15) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = this.attributes[e15];
    if (!n && t) {
      var r2 = new J(this.document, e15, "");
      return this.attributes[e15] = r2, r2;
    }
    return n || J.empty(this.document);
  }
  getHrefAttribute() {
    for (var e15 in this.attributes) if (e15 === "href" || e15.endsWith(":href")) return this.attributes[e15];
    return J.empty(this.document);
  }
  getStyle(e15) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, r2 = this.styles[e15];
    if (r2) return r2;
    var i2 = this.getAttribute(e15);
    if (i2 != null && i2.hasValue()) return this.styles[e15] = i2, i2;
    if (!n) {
      var { parent: a2 } = this;
      if (a2) {
        var o3 = a2.getStyle(e15);
        if (o3 != null && o3.hasValue()) return o3;
      }
    }
    if (t) {
      var s2 = new J(this.document, e15, "");
      return this.styles[e15] = s2, s2;
    }
    return r2 || J.empty(this.document);
  }
  render(e15) {
    if (!(this.getStyle("display").getString() === "none" || this.getStyle("visibility").getString() === "hidden")) {
      if (e15.save(), this.getStyle("mask").hasValue()) {
        var t = this.getStyle("mask").getDefinition();
        t && (this.applyEffects(e15), t.apply(e15, this));
      } else if (this.getStyle("filter").getValue("none") !== "none") {
        var n = this.getStyle("filter").getDefinition();
        n && (this.applyEffects(e15), n.apply(e15, this));
      } else this.setContext(e15), this.renderChildren(e15), this.clearContext(e15);
      e15.restore();
    }
  }
  setContext(e15) {
  }
  applyEffects(e15) {
    var t = Hr.fromElement(this.document, this);
    t && t.apply(e15);
    var n = this.getStyle("clip-path", false, true);
    if (n.hasValue()) {
      var r2 = n.getDefinition();
      r2 && r2.apply(e15);
    }
  }
  clearContext(e15) {
  }
  renderChildren(e15) {
    this.children.forEach((t) => {
      t.render(e15);
    });
  }
  addChild(t) {
    var n = t instanceof e6 ? t : this.document.createElement(t);
    n.parent = this, e6.ignoreChildTypes.includes(n.type) || this.children.push(n);
  }
  matchesSelector(e15) {
    var _a;
    var { node: t } = this;
    if (typeof t.matches == "function") return t.matches(e15);
    var n = (_a = t.getAttribute) == null ? void 0 : _a.call(t, "class");
    return !n || n === "" ? false : n.split(" ").some((t2) => `.${t2}` === e15);
  }
  addStylesFromStyleDefinition() {
    var { styles: e15, stylesSpecificity: t } = this.document;
    for (var n in e15) if (!n.startsWith("@") && this.matchesSelector(n)) {
      var r2 = e15[n], i2 = t[n];
      if (r2) for (var a2 in r2) {
        var o3 = this.stylesSpecificity[a2];
        o3 === void 0 && (o3 = "000"), i2 >= o3 && (this.styles[a2] = r2[a2], this.stylesSpecificity[a2] = i2);
      }
    }
  }
  removeStyles(e15, t) {
    return t.reduce((t2, n) => {
      var r2 = e15.getStyle(n);
      if (!r2.hasValue()) return t2;
      var i2 = r2.getString();
      return r2.setValue(""), [...t2, [n, i2]];
    }, []);
  }
  restoreStyles(e15, t) {
    t.forEach((t2) => {
      var [n, r2] = t2;
      e15.getStyle(n, true).setValue(r2);
    });
  }
  isFirstChild() {
    var _a;
    return ((_a = this.parent) == null ? void 0 : _a.children.indexOf(this)) === 0;
  }
};
X.ignoreChildTypes = ["title"];
var Ur = class extends X {
  constructor(e15, t, n) {
    super(e15, t, n);
  }
};
function Wr(e15) {
  var t = e15.trim();
  return /^('|")/.test(t) ? t : `"${t}"`;
}
function Gr(e15) {
  return typeof process > "u" ? e15 : e15.trim().split(",").map(Wr).join(",");
}
function Kr(e15) {
  if (!e15) return "";
  var t = e15.trim().toLowerCase();
  switch (t) {
    case "normal":
    case "italic":
    case "oblique":
    case "inherit":
    case "initial":
    case "unset":
      return t;
    default:
      return /^oblique\s+(-|)\d+deg$/.test(t) ? t : "";
  }
}
function qr(e15) {
  if (!e15) return "";
  var t = e15.trim().toLowerCase();
  switch (t) {
    case "normal":
    case "bold":
    case "lighter":
    case "bolder":
    case "inherit":
    case "initial":
    case "unset":
      return t;
    default:
      return /^[\d.]+$/.test(t) ? t : "";
  }
}
var Jr = class e7 {
  constructor(t, n, r2, i2, a2, o3) {
    var s2 = o3 ? typeof o3 == "string" ? e7.parse(o3) : o3 : {};
    this.fontFamily = a2 || s2.fontFamily, this.fontSize = i2 || s2.fontSize, this.fontStyle = t || s2.fontStyle, this.fontWeight = r2 || s2.fontWeight, this.fontVariant = n || s2.fontVariant;
  }
  static parse() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 ? arguments[1] : void 0, r2 = "", i2 = "", a2 = "", o3 = "", s2 = "", c3 = Qn(t).trim().split(" "), l2 = {
      fontSize: false,
      fontStyle: false,
      fontWeight: false,
      fontVariant: false
    };
    return c3.forEach((t2) => {
      switch (true) {
        case (!l2.fontStyle && e7.styles.includes(t2)):
          t2 !== "inherit" && (r2 = t2), l2.fontStyle = true;
          break;
        case (!l2.fontVariant && e7.variants.includes(t2)):
          t2 !== "inherit" && (i2 = t2), l2.fontStyle = true, l2.fontVariant = true;
          break;
        case (!l2.fontWeight && e7.weights.includes(t2)):
          t2 !== "inherit" && (a2 = t2), l2.fontStyle = true, l2.fontVariant = true, l2.fontWeight = true;
          break;
        case !l2.fontSize:
          t2 !== "inherit" && ([o3] = t2.split("/")), l2.fontStyle = true, l2.fontVariant = true, l2.fontWeight = true, l2.fontSize = true;
          break;
        default:
          t2 !== "inherit" && (s2 += t2);
      }
    }), new e7(r2, i2, a2, o3, s2, n);
  }
  toString() {
    return [
      Kr(this.fontStyle),
      this.fontVariant,
      qr(this.fontWeight),
      this.fontSize,
      Gr(this.fontFamily)
    ].join(" ").trim();
  }
};
Jr.styles = "normal|italic|oblique|inherit", Jr.variants = "normal|small-caps|inherit", Jr.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
var Yr = class {
  constructor() {
    var e15 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : NaN, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : NaN, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : NaN, r2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : NaN;
    this.x1 = e15, this.y1 = t, this.x2 = n, this.y2 = r2, this.addPoint(e15, t), this.addPoint(n, r2);
  }
  get x() {
    return this.x1;
  }
  get y() {
    return this.y1;
  }
  get width() {
    return this.x2 - this.x1;
  }
  get height() {
    return this.y2 - this.y1;
  }
  addPoint(e15, t) {
    e15 !== void 0 && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = e15, this.x2 = e15), e15 < this.x1 && (this.x1 = e15), e15 > this.x2 && (this.x2 = e15)), t !== void 0 && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = t, this.y2 = t), t < this.y1 && (this.y1 = t), t > this.y2 && (this.y2 = t));
  }
  addX(e15) {
    this.addPoint(e15, null);
  }
  addY(e15) {
    this.addPoint(null, e15);
  }
  addBoundingBox(e15) {
    if (e15) {
      var { x1: t, y1: n, x2: r2, y2: i2 } = e15;
      this.addPoint(t, n), this.addPoint(r2, i2);
    }
  }
  sumCubic(e15, t, n, r2, i2) {
    return (1 - e15) ** 3 * t + 3 * (1 - e15) ** 2 * e15 * n + 3 * (1 - e15) * e15 ** 2 * r2 + e15 ** 3 * i2;
  }
  bezierCurveAdd(e15, t, n, r2, i2) {
    var a2 = 6 * t - 12 * n + 6 * r2, o3 = -3 * t + 9 * n - 9 * r2 + 3 * i2, s2 = 3 * n - 3 * t;
    if (o3 === 0) {
      if (a2 === 0) return;
      var c3 = -s2 / a2;
      0 < c3 && c3 < 1 && (e15 ? this.addX(this.sumCubic(c3, t, n, r2, i2)) : this.addY(this.sumCubic(c3, t, n, r2, i2)));
      return;
    }
    var l2 = a2 ** 2 - 4 * s2 * o3;
    if (!(l2 < 0)) {
      var u2 = (-a2 + Math.sqrt(l2)) / (2 * o3);
      0 < u2 && u2 < 1 && (e15 ? this.addX(this.sumCubic(u2, t, n, r2, i2)) : this.addY(this.sumCubic(u2, t, n, r2, i2)));
      var d2 = (-a2 - Math.sqrt(l2)) / (2 * o3);
      0 < d2 && d2 < 1 && (e15 ? this.addX(this.sumCubic(d2, t, n, r2, i2)) : this.addY(this.sumCubic(d2, t, n, r2, i2)));
    }
  }
  addBezierCurve(e15, t, n, r2, i2, a2, o3, s2) {
    this.addPoint(e15, t), this.addPoint(o3, s2), this.bezierCurveAdd(true, e15, n, i2, o3), this.bezierCurveAdd(false, t, r2, a2, s2);
  }
  addQuadraticCurve(e15, t, n, r2, i2, a2) {
    var o3 = e15 + 2 / 3 * (n - e15), s2 = t + 2 / 3 * (r2 - t), c3 = o3 + 1 / 3 * (i2 - e15), l2 = s2 + 1 / 3 * (a2 - t);
    this.addBezierCurve(e15, t, o3, c3, s2, l2, i2, a2);
  }
  isPointInBox(e15, t) {
    var { x1: n, y1: r2, x2: i2, y2: a2 } = this;
    return n <= e15 && e15 <= i2 && r2 <= t && t <= a2;
  }
};
var Z = class extends K {
  constructor(e15) {
    super(e15.replace(/([+\-.])\s+/gm, "$1").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, "")), this.control = null, this.start = null, this.current = null, this.command = null, this.commands = this.commands, this.i = -1, this.previousCommand = null, this.points = [], this.angles = [];
  }
  reset() {
    this.i = -1, this.command = null, this.previousCommand = null, this.start = new Y(0, 0), this.control = new Y(0, 0), this.current = new Y(0, 0), this.points = [], this.angles = [];
  }
  isEnd() {
    var { i: e15, commands: t } = this;
    return e15 >= t.length - 1;
  }
  next() {
    var e15 = this.commands[++this.i];
    return this.previousCommand = this.command, this.command = e15, e15;
  }
  getPoint() {
    var e15 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "x", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y", n = new Y(this.command[e15], this.command[t]);
    return this.makeAbsolute(n);
  }
  getAsControlPoint(e15, t) {
    var n = this.getPoint(e15, t);
    return this.control = n, n;
  }
  getAsCurrentPoint(e15, t) {
    var n = this.getPoint(e15, t);
    return this.current = n, n;
  }
  getReflectedControlPoint() {
    var e15 = this.previousCommand.type;
    if (e15 !== K.CURVE_TO && e15 !== K.SMOOTH_CURVE_TO && e15 !== K.QUAD_TO && e15 !== K.SMOOTH_QUAD_TO) return this.current;
    var { current: { x: t, y: n }, control: { x: r2, y: i2 } } = this;
    return new Y(2 * t - r2, 2 * n - i2);
  }
  makeAbsolute(e15) {
    if (this.command.relative) {
      var { x: t, y: n } = this.current;
      e15.x += t, e15.y += n;
    }
    return e15;
  }
  addMarker(e15, t, n) {
    var { points: r2, angles: i2 } = this;
    n && i2.length > 0 && !i2[i2.length - 1] && (i2[i2.length - 1] = r2[r2.length - 1].angleTo(n)), this.addMarkerAngle(e15, t ? t.angleTo(e15) : null);
  }
  addMarkerAngle(e15, t) {
    this.points.push(e15), this.angles.push(t);
  }
  getMarkerPoints() {
    return this.points;
  }
  getMarkerAngles() {
    for (var { angles: e15 } = this, t = e15.length, n = 0; n < t; n++) if (!e15[n]) {
      for (var r2 = n + 1; r2 < t; r2++) if (e15[r2]) {
        e15[n] = e15[r2];
        break;
      }
    }
    return e15;
  }
};
var Xr = class extends X {
  constructor() {
    super(...arguments), this.modifiedEmSizeStack = false;
  }
  calculateOpacity() {
    for (var e15 = 1, t = this; t; ) {
      var n = t.getStyle("opacity", false, true);
      n.hasValue(true) && (e15 *= n.getNumber()), t = t.parent;
    }
    return e15;
  }
  setContext(e15) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (!t) {
      var n = this.getStyle("fill"), r2 = this.getStyle("fill-opacity"), i2 = this.getStyle("stroke"), a2 = this.getStyle("stroke-opacity");
      if (n.isUrlDefinition()) {
        var o3 = n.getFillStyleDefinition(this, r2);
        o3 && (e15.fillStyle = o3);
      } else if (n.hasValue()) {
        n.getString() === "currentColor" && n.setValue(this.getStyle("color").getColor());
        var s2 = n.getColor();
        s2 !== "inherit" && (e15.fillStyle = s2 === "none" ? "rgba(0,0,0,0)" : s2);
      }
      if (r2.hasValue() && (e15.fillStyle = new J(this.document, "fill", e15.fillStyle).addOpacity(r2).getColor()), i2.isUrlDefinition()) {
        var c3 = i2.getFillStyleDefinition(this, a2);
        c3 && (e15.strokeStyle = c3);
      } else if (i2.hasValue()) {
        i2.getString() === "currentColor" && i2.setValue(this.getStyle("color").getColor());
        var l2 = i2.getString();
        l2 !== "inherit" && (e15.strokeStyle = l2 === "none" ? "rgba(0,0,0,0)" : l2);
      }
      a2.hasValue() && (e15.strokeStyle = new J(this.document, "stroke", e15.strokeStyle).addOpacity(a2).getString());
      var u2 = this.getStyle("stroke-width");
      u2.hasValue() && (e15.lineWidth = u2.getPixels() || mr);
      var d2 = this.getStyle("stroke-linecap"), f2 = this.getStyle("stroke-linejoin"), p2 = this.getStyle("stroke-miterlimit"), m2 = this.getStyle("stroke-dasharray"), h2 = this.getStyle("stroke-dashoffset");
      if (d2.hasValue() && (e15.lineCap = d2.getString()), f2.hasValue() && (e15.lineJoin = f2.getString()), p2.hasValue() && (e15.miterLimit = p2.getNumber()), m2.hasValue() && m2.getString() !== "none") {
        var g2 = q(m2.getString());
        e15.setLineDash === void 0 ? e15.webkitLineDash === void 0 ? e15.mozDash !== void 0 && !(g2.length === 1 && g2[0] === 0) && (e15.mozDash = g2) : e15.webkitLineDash = g2 : e15.setLineDash(g2);
        var _2 = h2.getPixels();
        e15.lineDashOffset === void 0 ? e15.webkitLineDashOffset === void 0 ? e15.mozDashOffset !== void 0 && (e15.mozDashOffset = _2) : e15.webkitLineDashOffset = _2 : e15.lineDashOffset = _2;
      }
    }
    if (this.modifiedEmSizeStack = false, e15.font !== void 0) {
      var v2 = this.getStyle("font"), y2 = this.getStyle("font-style"), b2 = this.getStyle("font-variant"), x2 = this.getStyle("font-weight"), S2 = this.getStyle("font-size"), C2 = this.getStyle("font-family"), w2 = new Jr(y2.getString(), b2.getString(), x2.getString(), S2.hasValue() ? `${S2.getPixels(true)}px` : "", C2.getString(), Jr.parse(v2.getString(), e15.font));
      y2.setValue(w2.fontStyle), b2.setValue(w2.fontVariant), x2.setValue(w2.fontWeight), S2.setValue(w2.fontSize), C2.setValue(w2.fontFamily), e15.font = w2.toString(), S2.isPixels() && (this.document.emSize = S2.getPixels(), this.modifiedEmSizeStack = true);
    }
    t || (this.applyEffects(e15), e15.globalAlpha = this.calculateOpacity());
  }
  clearContext(e15) {
    super.clearContext(e15), this.modifiedEmSizeStack && this.document.popEmSize();
  }
};
var Q = class e8 extends Xr {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "path", this.pathParser = null, this.pathParser = new Z(this.getAttribute("d").getString());
  }
  path(e15) {
    var { pathParser: t } = this, n = new Yr();
    for (t.reset(), e15 && e15.beginPath(); !t.isEnd(); ) switch (t.next().type) {
      case Z.MOVE_TO:
        this.pathM(e15, n);
        break;
      case Z.LINE_TO:
        this.pathL(e15, n);
        break;
      case Z.HORIZ_LINE_TO:
        this.pathH(e15, n);
        break;
      case Z.VERT_LINE_TO:
        this.pathV(e15, n);
        break;
      case Z.CURVE_TO:
        this.pathC(e15, n);
        break;
      case Z.SMOOTH_CURVE_TO:
        this.pathS(e15, n);
        break;
      case Z.QUAD_TO:
        this.pathQ(e15, n);
        break;
      case Z.SMOOTH_QUAD_TO:
        this.pathT(e15, n);
        break;
      case Z.ARC:
        this.pathA(e15, n);
        break;
      case Z.CLOSE_PATH:
        this.pathZ(e15, n);
        break;
    }
    return n;
  }
  getBoundingBox(e15) {
    return this.path();
  }
  getMarkers() {
    var { pathParser: e15 } = this, t = e15.getMarkerPoints(), n = e15.getMarkerAngles();
    return t.map((e16, t2) => [e16, n[t2]]);
  }
  renderChildren(e15) {
    this.path(e15), this.document.screen.mouse.checkPath(this, e15);
    var t = this.getStyle("fill-rule");
    e15.fillStyle !== "" && (t.getString("inherit") === "inherit" ? e15.fill() : e15.fill(t.getString())), e15.strokeStyle !== "" && (this.getAttribute("vector-effect").getString() === "non-scaling-stroke" ? (e15.save(), e15.setTransform(1, 0, 0, 1, 0, 0), e15.stroke(), e15.restore()) : e15.stroke());
    var n = this.getMarkers();
    if (n) {
      var r2 = n.length - 1, i2 = this.getStyle("marker-start"), a2 = this.getStyle("marker-mid"), o3 = this.getStyle("marker-end");
      if (i2.isUrlDefinition()) {
        var s2 = i2.getDefinition(), [c3, l2] = n[0];
        s2.render(e15, c3, l2);
      }
      if (a2.isUrlDefinition()) for (var u2 = a2.getDefinition(), d2 = 1; d2 < r2; d2++) {
        var [f2, p2] = n[d2];
        u2.render(e15, f2, p2);
      }
      if (o3.isUrlDefinition()) {
        var m2 = o3.getDefinition(), [h2, g2] = n[r2];
        m2.render(e15, h2, g2);
      }
    }
  }
  static pathM(e15) {
    var t = e15.getAsCurrentPoint();
    return e15.start = e15.current, { point: t };
  }
  pathM(t, n) {
    var { pathParser: r2 } = this, { point: i2 } = e8.pathM(r2), { x: a2, y: o3 } = i2;
    r2.addMarker(i2), n.addPoint(a2, o3), t && t.moveTo(a2, o3);
  }
  static pathL(e15) {
    var { current: t } = e15;
    return {
      current: t,
      point: e15.getAsCurrentPoint()
    };
  }
  pathL(t, n) {
    var { pathParser: r2 } = this, { current: i2, point: a2 } = e8.pathL(r2), { x: o3, y: s2 } = a2;
    r2.addMarker(a2, i2), n.addPoint(o3, s2), t && t.lineTo(o3, s2);
  }
  static pathH(e15) {
    var { current: t, command: n } = e15, r2 = new Y((n.relative ? t.x : 0) + n.x, t.y);
    return e15.current = r2, {
      current: t,
      point: r2
    };
  }
  pathH(t, n) {
    var { pathParser: r2 } = this, { current: i2, point: a2 } = e8.pathH(r2), { x: o3, y: s2 } = a2;
    r2.addMarker(a2, i2), n.addPoint(o3, s2), t && t.lineTo(o3, s2);
  }
  static pathV(e15) {
    var { current: t, command: n } = e15, r2 = new Y(t.x, (n.relative ? t.y : 0) + n.y);
    return e15.current = r2, {
      current: t,
      point: r2
    };
  }
  pathV(t, n) {
    var { pathParser: r2 } = this, { current: i2, point: a2 } = e8.pathV(r2), { x: o3, y: s2 } = a2;
    r2.addMarker(a2, i2), n.addPoint(o3, s2), t && t.lineTo(o3, s2);
  }
  static pathC(e15) {
    var { current: t } = e15;
    return {
      current: t,
      point: e15.getPoint("x1", "y1"),
      controlPoint: e15.getAsControlPoint("x2", "y2"),
      currentPoint: e15.getAsCurrentPoint()
    };
  }
  pathC(t, n) {
    var { pathParser: r2 } = this, { current: i2, point: a2, controlPoint: o3, currentPoint: s2 } = e8.pathC(r2);
    r2.addMarker(s2, o3, a2), n.addBezierCurve(i2.x, i2.y, a2.x, a2.y, o3.x, o3.y, s2.x, s2.y), t && t.bezierCurveTo(a2.x, a2.y, o3.x, o3.y, s2.x, s2.y);
  }
  static pathS(e15) {
    var { current: t } = e15;
    return {
      current: t,
      point: e15.getReflectedControlPoint(),
      controlPoint: e15.getAsControlPoint("x2", "y2"),
      currentPoint: e15.getAsCurrentPoint()
    };
  }
  pathS(t, n) {
    var { pathParser: r2 } = this, { current: i2, point: a2, controlPoint: o3, currentPoint: s2 } = e8.pathS(r2);
    r2.addMarker(s2, o3, a2), n.addBezierCurve(i2.x, i2.y, a2.x, a2.y, o3.x, o3.y, s2.x, s2.y), t && t.bezierCurveTo(a2.x, a2.y, o3.x, o3.y, s2.x, s2.y);
  }
  static pathQ(e15) {
    var { current: t } = e15;
    return {
      current: t,
      controlPoint: e15.getAsControlPoint("x1", "y1"),
      currentPoint: e15.getAsCurrentPoint()
    };
  }
  pathQ(t, n) {
    var { pathParser: r2 } = this, { current: i2, controlPoint: a2, currentPoint: o3 } = e8.pathQ(r2);
    r2.addMarker(o3, a2, a2), n.addQuadraticCurve(i2.x, i2.y, a2.x, a2.y, o3.x, o3.y), t && t.quadraticCurveTo(a2.x, a2.y, o3.x, o3.y);
  }
  static pathT(e15) {
    var { current: t } = e15, n = e15.getReflectedControlPoint();
    return e15.control = n, {
      current: t,
      controlPoint: n,
      currentPoint: e15.getAsCurrentPoint()
    };
  }
  pathT(t, n) {
    var { pathParser: r2 } = this, { current: i2, controlPoint: a2, currentPoint: o3 } = e8.pathT(r2);
    r2.addMarker(o3, a2, a2), n.addQuadraticCurve(i2.x, i2.y, a2.x, a2.y, o3.x, o3.y), t && t.quadraticCurveTo(a2.x, a2.y, o3.x, o3.y);
  }
  static pathA(e15) {
    var { current: t, command: n } = e15, { rX: r2, rY: i2, xRot: a2, lArcFlag: o3, sweepFlag: s2 } = n, c3 = Math.PI / 180 * a2, l2 = e15.getAsCurrentPoint(), u2 = new Y(Math.cos(c3) * (t.x - l2.x) / 2 + Math.sin(c3) * (t.y - l2.y) / 2, -Math.sin(c3) * (t.x - l2.x) / 2 + Math.cos(c3) * (t.y - l2.y) / 2), d2 = u2.x ** 2 / r2 ** 2 + u2.y ** 2 / i2 ** 2;
    d2 > 1 && (r2 *= Math.sqrt(d2), i2 *= Math.sqrt(d2));
    var f2 = (o3 === s2 ? -1 : 1) * Math.sqrt((r2 ** 2 * i2 ** 2 - r2 ** 2 * u2.y ** 2 - i2 ** 2 * u2.x ** 2) / (r2 ** 2 * u2.y ** 2 + i2 ** 2 * u2.x ** 2));
    isNaN(f2) && (f2 = 0);
    var p2 = new Y(f2 * r2 * u2.y / i2, f2 * -i2 * u2.x / r2), m2 = new Y((t.x + l2.x) / 2 + Math.cos(c3) * p2.x - Math.sin(c3) * p2.y, (t.y + l2.y) / 2 + Math.sin(c3) * p2.x + Math.cos(c3) * p2.y), h2 = _r([1, 0], [(u2.x - p2.x) / r2, (u2.y - p2.y) / i2]), g2 = [(u2.x - p2.x) / r2, (u2.y - p2.y) / i2], _2 = [(-u2.x - p2.x) / r2, (-u2.y - p2.y) / i2], v2 = _r(g2, _2);
    return gr(g2, _2) <= -1 && (v2 = Math.PI), gr(g2, _2) >= 1 && (v2 = 0), {
      currentPoint: l2,
      rX: r2,
      rY: i2,
      sweepFlag: s2,
      xAxisRotation: c3,
      centp: m2,
      a1: h2,
      ad: v2
    };
  }
  pathA(t, n) {
    var { pathParser: r2 } = this, { currentPoint: i2, rX: a2, rY: o3, sweepFlag: s2, xAxisRotation: c3, centp: l2, a1: u2, ad: d2 } = e8.pathA(r2), f2 = 1 - s2 ? 1 : -1, p2 = u2 + d2 / 2 * f2, m2 = new Y(l2.x + a2 * Math.cos(p2), l2.y + o3 * Math.sin(p2));
    if (r2.addMarkerAngle(m2, p2 - f2 * Math.PI / 2), r2.addMarkerAngle(i2, p2 - f2 * Math.PI), n.addPoint(i2.x, i2.y), t && !isNaN(u2) && !isNaN(d2)) {
      var h2 = a2 > o3 ? a2 : o3, g2 = a2 > o3 ? 1 : a2 / o3, _2 = a2 > o3 ? o3 / a2 : 1;
      t.translate(l2.x, l2.y), t.rotate(c3), t.scale(g2, _2), t.arc(0, 0, h2, u2, u2 + d2, !!(1 - s2)), t.scale(1 / g2, 1 / _2), t.rotate(-c3), t.translate(-l2.x, -l2.y);
    }
  }
  static pathZ(e15) {
    e15.current = e15.start;
  }
  pathZ(t, n) {
    e8.pathZ(this.pathParser), t && n.x1 !== n.x2 && n.y1 !== n.y2 && t.closePath();
  }
};
var Zr = class extends Q {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "glyph", this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber(), this.unicode = this.getAttribute("unicode").getString(), this.arabicForm = this.getAttribute("arabic-form").getString();
  }
};
var Qr = class e9 extends Xr {
  constructor(t, n, r2) {
    super(t, n, new.target === e9 ? true : r2), this.type = "text", this.x = 0, this.y = 0, this.measureCache = -1;
  }
  setContext(e15) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    super.setContext(e15, t);
    var n = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
    n && (e15.textBaseline = n);
  }
  initializeCoordinates() {
    this.x = 0, this.y = 0, this.leafTexts = [], this.textChunkStart = 0, this.minX = Infinity, this.maxX = -Infinity;
  }
  getBoundingBox(e15) {
    if (this.type !== "text") return this.getTElementBoundingBox(e15);
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(e15);
    var t = null;
    return this.children.forEach((n, r2) => {
      var i2 = this.getChildBoundingBox(e15, this, this, r2);
      t ? t.addBoundingBox(i2) : t = i2;
    }), t;
  }
  getFontSize() {
    var { document: e15, parent: t } = this, n = Jr.parse(e15.ctx.font).fontSize;
    return t.getStyle("font-size").getNumber(n);
  }
  getTElementBoundingBox(e15) {
    var t = this.getFontSize();
    return new Yr(this.x, this.y - t, this.x + this.measureText(e15), this.y);
  }
  getGlyph(e15, t, n) {
    var r2 = t[n], i2 = null;
    if (e15.isArabic) {
      var a2 = t.length, o3 = t[n - 1], s2 = t[n + 1], c3 = "isolated";
      if ((n === 0 || o3 === " ") && n < a2 - 1 && s2 !== " " && (c3 = "terminal"), n > 0 && o3 !== " " && n < a2 - 1 && s2 !== " " && (c3 = "medial"), n > 0 && o3 !== " " && (n === a2 - 1 || s2 === " ") && (c3 = "initial"), e15.glyphs[r2] !== void 0) {
        var l2 = e15.glyphs[r2];
        i2 = l2 instanceof Zr ? l2 : l2[c3];
      }
    } else i2 = e15.glyphs[r2];
    return i2 || (i2 = e15.missingGlyph), i2;
  }
  getText() {
    return "";
  }
  getTextFromNode(e15) {
    var t = e15 || this.node, n = Array.from(t.parentNode.childNodes), r2 = n.indexOf(t), i2 = n.length - 1, a2 = Qn(t.textContent || "");
    return r2 === 0 && (a2 = $n(a2)), r2 === i2 && (a2 = er(a2)), a2;
  }
  renderChildren(e15) {
    if (this.type !== "text") {
      this.renderTElementChildren(e15);
      return;
    }
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(e15), this.children.forEach((t2, n) => {
      this.renderChild(e15, this, this, n);
    });
    var { mouse: t } = this.document.screen;
    t.isWorking() && t.checkBoundingBox(this, this.getBoundingBox(e15));
  }
  renderTElementChildren(e15) {
    var { document: t, parent: n } = this, r2 = this.getText(), i2 = n.getStyle("font-family").getDefinition();
    if (i2) {
      for (var { unitsPerEm: a2 } = i2.fontFace, o3 = Jr.parse(t.ctx.font), s2 = n.getStyle("font-size").getNumber(o3.fontSize), c3 = n.getStyle("font-style").getString(o3.fontStyle), l2 = s2 / a2, u2 = i2.isRTL ? r2.split("").reverse().join("") : r2, d2 = q(n.getAttribute("dx").getString()), f2 = u2.length, p2 = 0; p2 < f2; p2++) {
        var m2 = this.getGlyph(i2, u2, p2);
        e15.translate(this.x, this.y), e15.scale(l2, -l2);
        var h2 = e15.lineWidth;
        e15.lineWidth = e15.lineWidth * a2 / s2, c3 === "italic" && e15.transform(1, 0, 0.4, 1, 0, 0), m2.render(e15), c3 === "italic" && e15.transform(1, 0, -0.4, 1, 0, 0), e15.lineWidth = h2, e15.scale(1 / l2, -1 / l2), e15.translate(-this.x, -this.y), this.x += s2 * (m2.horizAdvX || i2.horizAdvX) / a2, d2[p2] !== void 0 && !isNaN(d2[p2]) && (this.x += d2[p2]);
      }
      return;
    }
    var { x: g2, y: _2 } = this;
    e15.fillStyle && e15.fillText(r2, g2, _2), e15.strokeStyle && e15.strokeText(r2, g2, _2);
  }
  applyAnchoring() {
    if (!(this.textChunkStart >= this.leafTexts.length)) {
      var e15 = this.leafTexts[this.textChunkStart], t = e15.getStyle("text-anchor").getString("start"), n = false, r2 = 0;
      r2 = t === "start" && !n || t === "end" && n ? e15.x - this.minX : t === "end" && !n || t === "start" && n ? e15.x - this.maxX : e15.x - (this.minX + this.maxX) / 2;
      for (var i2 = this.textChunkStart; i2 < this.leafTexts.length; i2++) this.leafTexts[i2].x += r2;
      this.minX = Infinity, this.maxX = -Infinity, this.textChunkStart = this.leafTexts.length;
    }
  }
  adjustChildCoordinatesRecursive(e15) {
    this.children.forEach((t, n) => {
      this.adjustChildCoordinatesRecursiveCore(e15, this, this, n);
    }), this.applyAnchoring();
  }
  adjustChildCoordinatesRecursiveCore(e15, t, n, r2) {
    var i2 = n.children[r2];
    i2.children.length > 0 ? i2.children.forEach((n2, r3) => {
      t.adjustChildCoordinatesRecursiveCore(e15, t, i2, r3);
    }) : this.adjustChildCoordinates(e15, t, n, r2);
  }
  adjustChildCoordinates(e15, t, n, r2) {
    var i2 = n.children[r2];
    if (typeof i2.measureText != "function") return i2;
    e15.save(), i2.setContext(e15, true);
    var a2 = i2.getAttribute("x"), o3 = i2.getAttribute("y"), s2 = i2.getAttribute("dx"), c3 = i2.getAttribute("dy"), l2 = i2.getStyle("font-family").getDefinition(), u2 = !!l2 && l2.isRTL;
    r2 === 0 && (a2.hasValue() || a2.setValue(i2.getInheritedAttribute("x")), o3.hasValue() || o3.setValue(i2.getInheritedAttribute("y")), s2.hasValue() || s2.setValue(i2.getInheritedAttribute("dx")), c3.hasValue() || c3.setValue(i2.getInheritedAttribute("dy")));
    var d2 = i2.measureText(e15);
    return u2 && (t.x -= d2), a2.hasValue() ? (t.applyAnchoring(), i2.x = a2.getPixels("x"), s2.hasValue() && (i2.x += s2.getPixels("x"))) : (s2.hasValue() && (t.x += s2.getPixels("x")), i2.x = t.x), t.x = i2.x, u2 || (t.x += d2), o3.hasValue() ? (i2.y = o3.getPixels("y"), c3.hasValue() && (i2.y += c3.getPixels("y"))) : (c3.hasValue() && (t.y += c3.getPixels("y")), i2.y = t.y), t.y = i2.y, t.leafTexts.push(i2), t.minX = Math.min(t.minX, i2.x, i2.x + d2), t.maxX = Math.max(t.maxX, i2.x, i2.x + d2), i2.clearContext(e15), e15.restore(), i2;
  }
  getChildBoundingBox(e15, t, n, r2) {
    var i2 = n.children[r2];
    if (typeof i2.getBoundingBox != "function") return null;
    var a2 = i2.getBoundingBox(e15);
    return a2 ? (i2.children.forEach((n2, r3) => {
      var o3 = t.getChildBoundingBox(e15, t, i2, r3);
      a2.addBoundingBox(o3);
    }), a2) : null;
  }
  renderChild(e15, t, n, r2) {
    var i2 = n.children[r2];
    i2.render(e15), i2.children.forEach((n2, r3) => {
      t.renderChild(e15, t, i2, r3);
    });
  }
  measureText(e15) {
    var { measureCache: t } = this;
    if (~t) return t;
    var n = this.getText(), r2 = this.measureTargetText(e15, n);
    return this.measureCache = r2, r2;
  }
  measureTargetText(e15, t) {
    if (!t.length) return 0;
    var { parent: n } = this, r2 = n.getStyle("font-family").getDefinition();
    if (r2) {
      for (var i2 = this.getFontSize(), a2 = r2.isRTL ? t.split("").reverse().join("") : t, o3 = q(n.getAttribute("dx").getString()), s2 = a2.length, c3 = 0, l2 = 0; l2 < s2; l2++) {
        var u2 = this.getGlyph(r2, a2, l2);
        c3 += (u2.horizAdvX || r2.horizAdvX) * i2 / r2.fontFace.unitsPerEm, o3[l2] !== void 0 && !isNaN(o3[l2]) && (c3 += o3[l2]);
      }
      return c3;
    }
    if (!e15.measureText) return t.length * 10;
    e15.save(), this.setContext(e15, true);
    var { width: d2 } = e15.measureText(t);
    return this.clearContext(e15), e15.restore(), d2;
  }
  getInheritedAttribute(t) {
    for (var n = this; n instanceof e9 && n.isFirstChild(); ) {
      var r2 = n.parent.getAttribute(t);
      if (r2.hasValue(true)) return r2.getValue("0");
      n = n.parent;
    }
    return null;
  }
};
var $r = class e10 extends Qr {
  constructor(t, n, r2) {
    super(t, n, new.target === e10 ? true : r2), this.type = "tspan", this.text = this.children.length > 0 ? "" : this.getTextFromNode();
  }
  getText() {
    return this.text;
  }
};
var ei = class extends $r {
  constructor() {
    super(...arguments), this.type = "textNode";
  }
};
var ti = class extends Xr {
  constructor() {
    super(...arguments), this.type = "svg", this.root = false;
  }
  setContext(e15) {
    var _a;
    var { document: t } = this, { screen: n, window: r2 } = t, i2 = e15.canvas;
    if (n.setDefaults(e15), i2.style && e15.font !== void 0 && r2 && r2.getComputedStyle !== void 0) {
      e15.font = r2.getComputedStyle(i2).getPropertyValue("font");
      var a2 = new J(t, "fontSize", Jr.parse(e15.font).fontSize);
      a2.hasValue() && (t.rootEmSize = a2.getPixels("y"), t.emSize = t.rootEmSize);
    }
    this.getAttribute("x").hasValue() || this.getAttribute("x", true).setValue(0), this.getAttribute("y").hasValue() || this.getAttribute("y", true).setValue(0);
    var { width: o3, height: s2 } = n.viewPort;
    this.getStyle("width").hasValue() || this.getStyle("width", true).setValue("100%"), this.getStyle("height").hasValue() || this.getStyle("height", true).setValue("100%"), this.getStyle("color").hasValue() || this.getStyle("color", true).setValue("black");
    var c3 = this.getAttribute("refX"), l2 = this.getAttribute("refY"), u2 = this.getAttribute("viewBox"), d2 = u2.hasValue() ? q(u2.getString()) : null, f2 = !this.root && this.getStyle("overflow").getValue("hidden") !== "visible", p2 = 0, m2 = 0, h2 = 0, g2 = 0;
    d2 && (p2 = d2[0], m2 = d2[1]), this.root || (o3 = this.getStyle("width").getPixels("x"), s2 = this.getStyle("height").getPixels("y"), this.type === "marker" && (h2 = p2, g2 = m2, p2 = 0, m2 = 0)), n.viewPort.setCurrent(o3, s2), this.node && (!this.parent || ((_a = this.node.parentNode) == null ? void 0 : _a.nodeName) === "foreignObject") && this.getStyle("transform", false, true).hasValue() && !this.getStyle("transform-origin", false, true).hasValue() && this.getStyle("transform-origin", true, true).setValue("50% 50%"), super.setContext(e15), e15.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y")), d2 && (o3 = d2[2], s2 = d2[3]), t.setViewBox({
      ctx: e15,
      aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
      width: n.viewPort.width,
      desiredWidth: o3,
      height: n.viewPort.height,
      desiredHeight: s2,
      minX: p2,
      minY: m2,
      refX: c3.getValue(),
      refY: l2.getValue(),
      clip: f2,
      clipX: h2,
      clipY: g2
    }), d2 && (n.viewPort.removeCurrent(), n.viewPort.setCurrent(o3, s2));
  }
  clearContext(e15) {
    super.clearContext(e15), this.document.screen.viewPort.removeCurrent();
  }
  resize(e15) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e15, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, r2 = this.getAttribute("width", true), i2 = this.getAttribute("height", true), a2 = this.getAttribute("viewBox"), o3 = this.getAttribute("style"), s2 = r2.getNumber(0), c3 = i2.getNumber(0);
    if (n) if (typeof n == "string") this.getAttribute("preserveAspectRatio", true).setValue(n);
    else {
      var l2 = this.getAttribute("preserveAspectRatio");
      l2.hasValue() && l2.setValue(l2.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
    }
    if (r2.setValue(e15), i2.setValue(t), a2.hasValue() || a2.setValue(`0 0 ${s2 || e15} ${c3 || t}`), o3.hasValue()) {
      var u2 = this.getStyle("width"), d2 = this.getStyle("height");
      u2.hasValue() && u2.setValue(`${e15}px`), d2.hasValue() && d2.setValue(`${t}px`);
    }
  }
};
var ni = class extends Q {
  constructor() {
    super(...arguments), this.type = "rect";
  }
  path(e15) {
    var t = this.getAttribute("x").getPixels("x"), n = this.getAttribute("y").getPixels("y"), r2 = this.getStyle("width", false, true).getPixels("x"), i2 = this.getStyle("height", false, true).getPixels("y"), a2 = this.getAttribute("rx"), o3 = this.getAttribute("ry"), s2 = a2.getPixels("x"), c3 = o3.getPixels("y");
    if (a2.hasValue() && !o3.hasValue() && (c3 = s2), o3.hasValue() && !a2.hasValue() && (s2 = c3), s2 = Math.min(s2, r2 / 2), c3 = Math.min(c3, i2 / 2), e15) {
      var l2 = 4 * ((Math.sqrt(2) - 1) / 3);
      e15.beginPath(), i2 > 0 && r2 > 0 && (e15.moveTo(t + s2, n), e15.lineTo(t + r2 - s2, n), e15.bezierCurveTo(t + r2 - s2 + l2 * s2, n, t + r2, n + c3 - l2 * c3, t + r2, n + c3), e15.lineTo(t + r2, n + i2 - c3), e15.bezierCurveTo(t + r2, n + i2 - c3 + l2 * c3, t + r2 - s2 + l2 * s2, n + i2, t + r2 - s2, n + i2), e15.lineTo(t + s2, n + i2), e15.bezierCurveTo(t + s2 - l2 * s2, n + i2, t, n + i2 - c3 + l2 * c3, t, n + i2 - c3), e15.lineTo(t, n + c3), e15.bezierCurveTo(t, n + c3 - l2 * c3, t + s2 - l2 * s2, n, t + s2, n), e15.closePath());
    }
    return new Yr(t, n, t + r2, n + i2);
  }
  getMarkers() {
    return null;
  }
};
var ri = class extends Q {
  constructor() {
    super(...arguments), this.type = "circle";
  }
  path(e15) {
    var t = this.getAttribute("cx").getPixels("x"), n = this.getAttribute("cy").getPixels("y"), r2 = this.getAttribute("r").getPixels();
    return e15 && r2 > 0 && (e15.beginPath(), e15.arc(t, n, r2, 0, Math.PI * 2, false), e15.closePath()), new Yr(t - r2, n - r2, t + r2, n + r2);
  }
  getMarkers() {
    return null;
  }
};
var ii = class extends Q {
  constructor() {
    super(...arguments), this.type = "ellipse";
  }
  path(e15) {
    var t = 4 * ((Math.sqrt(2) - 1) / 3), n = this.getAttribute("rx").getPixels("x"), r2 = this.getAttribute("ry").getPixels("y"), i2 = this.getAttribute("cx").getPixels("x"), a2 = this.getAttribute("cy").getPixels("y");
    return e15 && n > 0 && r2 > 0 && (e15.beginPath(), e15.moveTo(i2 + n, a2), e15.bezierCurveTo(i2 + n, a2 + t * r2, i2 + t * n, a2 + r2, i2, a2 + r2), e15.bezierCurveTo(i2 - t * n, a2 + r2, i2 - n, a2 + t * r2, i2 - n, a2), e15.bezierCurveTo(i2 - n, a2 - t * r2, i2 - t * n, a2 - r2, i2, a2 - r2), e15.bezierCurveTo(i2 + t * n, a2 - r2, i2 + n, a2 - t * r2, i2 + n, a2), e15.closePath()), new Yr(i2 - n, a2 - r2, i2 + n, a2 + r2);
  }
  getMarkers() {
    return null;
  }
};
var ai = class extends Q {
  constructor() {
    super(...arguments), this.type = "line";
  }
  getPoints() {
    return [new Y(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")), new Y(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))];
  }
  path(e15) {
    var [{ x: t, y: n }, { x: r2, y: i2 }] = this.getPoints();
    return e15 && (e15.beginPath(), e15.moveTo(t, n), e15.lineTo(r2, i2)), new Yr(t, n, r2, i2);
  }
  getMarkers() {
    var [e15, t] = this.getPoints(), n = e15.angleTo(t);
    return [[e15, n], [t, n]];
  }
};
var oi = class extends Q {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "polyline", this.points = [], this.points = Y.parsePath(this.getAttribute("points").getString());
  }
  path(e15) {
    var { points: t } = this, [{ x: n, y: r2 }] = t, i2 = new Yr(n, r2);
    return e15 && (e15.beginPath(), e15.moveTo(n, r2)), t.forEach((t2) => {
      var { x: n2, y: r3 } = t2;
      i2.addPoint(n2, r3), e15 && e15.lineTo(n2, r3);
    }), i2;
  }
  getMarkers() {
    var { points: e15 } = this, t = e15.length - 1, n = [];
    return e15.forEach((r2, i2) => {
      i2 !== t && n.push([r2, r2.angleTo(e15[i2 + 1])]);
    }), n.length > 0 && n.push([e15[e15.length - 1], n[n.length - 1][1]]), n;
  }
};
var si = class extends oi {
  constructor() {
    super(...arguments), this.type = "polygon";
  }
  path(e15) {
    var t = super.path(e15), [{ x: n, y: r2 }] = this.points;
    return e15 && (e15.lineTo(n, r2), e15.closePath()), t;
  }
};
var ci = class extends X {
  constructor() {
    super(...arguments), this.type = "pattern";
  }
  createPattern(e15, t, n) {
    var r2 = this.getStyle("width").getPixels("x", true), i2 = this.getStyle("height").getPixels("y", true), a2 = new ti(this.document, null);
    a2.attributes.viewBox = new J(this.document, "viewBox", this.getAttribute("viewBox").getValue()), a2.attributes.width = new J(this.document, "width", `${r2}px`), a2.attributes.height = new J(this.document, "height", `${i2}px`), a2.attributes.transform = new J(this.document, "transform", this.getAttribute("patternTransform").getValue()), a2.children = this.children;
    var o3 = this.document.createCanvas(r2, i2), s2 = o3.getContext("2d"), c3 = this.getAttribute("x"), l2 = this.getAttribute("y");
    c3.hasValue() && l2.hasValue() && s2.translate(c3.getPixels("x", true), l2.getPixels("y", true)), n.hasValue() ? this.styles["fill-opacity"] = n : Reflect.deleteProperty(this.styles, "fill-opacity");
    for (var u2 = -1; u2 <= 1; u2++) for (var d2 = -1; d2 <= 1; d2++) s2.save(), a2.attributes.x = new J(this.document, "x", u2 * o3.width), a2.attributes.y = new J(this.document, "y", d2 * o3.height), a2.render(s2), s2.restore();
    return e15.createPattern(o3, "repeat");
  }
};
var li = class extends X {
  constructor() {
    super(...arguments), this.type = "marker";
  }
  render(e15, t, n) {
    if (t) {
      var { x: r2, y: i2 } = t, a2 = this.getAttribute("orient").getString("auto"), o3 = this.getAttribute("markerUnits").getString("strokeWidth");
      e15.translate(r2, i2), a2 === "auto" && e15.rotate(n), o3 === "strokeWidth" && e15.scale(e15.lineWidth, e15.lineWidth), e15.save();
      var s2 = new ti(this.document, null);
      s2.type = this.type, s2.attributes.viewBox = new J(this.document, "viewBox", this.getAttribute("viewBox").getValue()), s2.attributes.refX = new J(this.document, "refX", this.getAttribute("refX").getValue()), s2.attributes.refY = new J(this.document, "refY", this.getAttribute("refY").getValue()), s2.attributes.width = new J(this.document, "width", this.getAttribute("markerWidth").getValue()), s2.attributes.height = new J(this.document, "height", this.getAttribute("markerHeight").getValue()), s2.attributes.overflow = new J(this.document, "overflow", this.getAttribute("overflow").getValue()), s2.attributes.fill = new J(this.document, "fill", this.getAttribute("fill").getColor("black")), s2.attributes.stroke = new J(this.document, "stroke", this.getAttribute("stroke").getValue("none")), s2.children = this.children, s2.render(e15), e15.restore(), o3 === "strokeWidth" && e15.scale(1 / e15.lineWidth, 1 / e15.lineWidth), a2 === "auto" && e15.rotate(-n), e15.translate(-r2, -i2);
    }
  }
};
var ui = class extends X {
  constructor() {
    super(...arguments), this.type = "defs";
  }
  render() {
  }
};
var di = class extends Xr {
  constructor() {
    super(...arguments), this.type = "g";
  }
  getBoundingBox(e15) {
    var t = new Yr();
    return this.children.forEach((n) => {
      t.addBoundingBox(n.getBoundingBox(e15));
    }), t;
  }
};
var fi = class extends X {
  constructor(e15, t, n) {
    super(e15, t, n), this.attributesToInherit = ["gradientUnits"], this.stops = [];
    var { stops: r2, children: i2 } = this;
    i2.forEach((e16) => {
      e16.type === "stop" && r2.push(e16);
    });
  }
  getGradientUnits() {
    return this.getAttribute("gradientUnits").getString("objectBoundingBox");
  }
  createGradient(e15, t, n) {
    var r2 = this;
    this.getHrefAttribute().hasValue() && (r2 = this.getHrefAttribute().getDefinition(), this.inheritStopContainer(r2));
    var { stops: i2 } = r2, a2 = this.getGradient(e15, t);
    if (!a2) return this.addParentOpacity(n, i2[i2.length - 1].color);
    if (i2.forEach((e16) => {
      a2.addColorStop(e16.offset, this.addParentOpacity(n, e16.color));
    }), this.getAttribute("gradientTransform").hasValue()) {
      var { document: o3 } = this, { MAX_VIRTUAL_PIXELS: s2, viewPort: c3 } = o3.screen, [l2] = c3.viewPorts, u2 = new ni(o3, null);
      u2.attributes.x = new J(o3, "x", -s2 / 3), u2.attributes.y = new J(o3, "y", -s2 / 3), u2.attributes.width = new J(o3, "width", s2), u2.attributes.height = new J(o3, "height", s2);
      var d2 = new di(o3, null);
      d2.attributes.transform = new J(o3, "transform", this.getAttribute("gradientTransform").getValue()), d2.children = [u2];
      var f2 = new ti(o3, null);
      f2.attributes.x = new J(o3, "x", 0), f2.attributes.y = new J(o3, "y", 0), f2.attributes.width = new J(o3, "width", l2.width), f2.attributes.height = new J(o3, "height", l2.height), f2.children = [d2];
      var p2 = o3.createCanvas(l2.width, l2.height), m2 = p2.getContext("2d");
      return m2.fillStyle = a2, f2.render(m2), m2.createPattern(p2, "no-repeat");
    }
    return a2;
  }
  inheritStopContainer(e15) {
    this.attributesToInherit.forEach((t) => {
      !this.getAttribute(t).hasValue() && e15.getAttribute(t).hasValue() && this.getAttribute(t, true).setValue(e15.getAttribute(t).getValue());
    });
  }
  addParentOpacity(e15, t) {
    return e15.hasValue() ? new J(this.document, "color", t).addOpacity(e15).getColor() : t;
  }
};
var pi = class extends fi {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "linearGradient", this.attributesToInherit.push("x1", "y1", "x2", "y2");
  }
  getGradient(e15, t) {
    var n = this.getGradientUnits() === "objectBoundingBox", r2 = n ? t.getBoundingBox(e15) : null;
    if (n && !r2) return null;
    !this.getAttribute("x1").hasValue() && !this.getAttribute("y1").hasValue() && !this.getAttribute("x2").hasValue() && !this.getAttribute("y2").hasValue() && (this.getAttribute("x1", true).setValue(0), this.getAttribute("y1", true).setValue(0), this.getAttribute("x2", true).setValue(1), this.getAttribute("y2", true).setValue(0));
    var i2 = n ? r2.x + r2.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x"), a2 = n ? r2.y + r2.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y"), o3 = n ? r2.x + r2.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x"), s2 = n ? r2.y + r2.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
    return i2 === o3 && a2 === s2 ? null : e15.createLinearGradient(i2, a2, o3, s2);
  }
};
var mi = class extends fi {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "radialGradient", this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr");
  }
  getGradient(e15, t) {
    var n = this.getGradientUnits() === "objectBoundingBox", r2 = t.getBoundingBox(e15);
    if (n && !r2) return null;
    this.getAttribute("cx").hasValue() || this.getAttribute("cx", true).setValue("50%"), this.getAttribute("cy").hasValue() || this.getAttribute("cy", true).setValue("50%"), this.getAttribute("r").hasValue() || this.getAttribute("r", true).setValue("50%");
    var i2 = n ? r2.x + r2.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x"), a2 = n ? r2.y + r2.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y"), o3 = i2, s2 = a2;
    this.getAttribute("fx").hasValue() && (o3 = n ? r2.x + r2.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x")), this.getAttribute("fy").hasValue() && (s2 = n ? r2.y + r2.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y"));
    var c3 = n ? (r2.width + r2.height) / 2 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels(), l2 = this.getAttribute("fr").getPixels();
    return e15.createRadialGradient(o3, s2, l2, i2, a2, c3);
  }
};
var hi = class extends X {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "stop";
    var r2 = Math.max(0, Math.min(1, this.getAttribute("offset").getNumber())), i2 = this.getStyle("stop-opacity"), a2 = this.getStyle("stop-color", true);
    a2.getString() === "" && a2.setValue("#000"), i2.hasValue() && (a2 = a2.addOpacity(i2)), this.offset = r2, this.color = a2.getColor();
  }
};
var gi = class extends X {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "animate", this.duration = 0, this.initialValue = null, this.initialUnits = "", this.removed = false, this.frozen = false, e15.screen.animations.push(this), this.begin = this.getAttribute("begin").getMilliseconds(), this.maxDuration = this.begin + this.getAttribute("dur").getMilliseconds(), this.from = this.getAttribute("from"), this.to = this.getAttribute("to"), this.values = new J(e15, "values", null);
    var r2 = this.getAttribute("values");
    r2.hasValue() && this.values.setValue(r2.getString().split(";"));
  }
  getProperty() {
    var e15 = this.getAttribute("attributeType").getString(), t = this.getAttribute("attributeName").getString();
    return e15 === "CSS" ? this.parent.getStyle(t, true) : this.parent.getAttribute(t, true);
  }
  calcValue() {
    var { initialUnits: e15 } = this, { progress: t, from: n, to: r2 } = this.getProgress(), i2 = n.getNumber() + (r2.getNumber() - n.getNumber()) * t;
    return e15 === "%" && (i2 *= 100), `${i2}${e15}`;
  }
  update(e15) {
    var { parent: t } = this, n = this.getProperty();
    if (this.initialValue || (this.initialValue = n.getString(), this.initialUnits = n.getUnits()), this.duration > this.maxDuration) {
      var r2 = this.getAttribute("fill").getString("remove");
      if (this.getAttribute("repeatCount").getString() === "indefinite" || this.getAttribute("repeatDur").getString() === "indefinite") this.duration = 0;
      else if (r2 === "freeze" && !this.frozen) this.frozen = true, t.animationFrozen = true, t.animationFrozenValue = n.getString();
      else if (r2 === "remove" && !this.removed) return this.removed = true, n.setValue(t.animationFrozen ? t.animationFrozenValue : this.initialValue), true;
      return false;
    }
    this.duration += e15;
    var i2 = false;
    if (this.begin < this.duration) {
      var a2 = this.calcValue(), o3 = this.getAttribute("type");
      o3.hasValue() && (a2 = `${o3.getString()}(${a2})`), n.setValue(a2), i2 = true;
    }
    return i2;
  }
  getProgress() {
    var { document: e15, values: t } = this, n = { progress: (this.duration - this.begin) / (this.maxDuration - this.begin) };
    if (t.hasValue()) {
      var r2 = n.progress * (t.getValue().length - 1), i2 = Math.floor(r2), a2 = Math.ceil(r2);
      n.from = new J(e15, "from", parseFloat(t.getValue()[i2])), n.to = new J(e15, "to", parseFloat(t.getValue()[a2])), n.progress = (r2 - i2) / (a2 - i2);
    } else n.from = this.from, n.to = this.to;
    return n;
  }
};
var _i = class extends gi {
  constructor() {
    super(...arguments), this.type = "animateColor";
  }
  calcValue() {
    var { progress: e15, from: t, to: n } = this.getProgress(), r2 = new xn.default(t.getColor()), i2 = new xn.default(n.getColor());
    if (r2.ok && i2.ok) {
      var a2 = r2.r + (i2.r - r2.r) * e15, o3 = r2.g + (i2.g - r2.g) * e15, s2 = r2.b + (i2.b - r2.b) * e15;
      return `rgb(${Math.floor(a2)}, ${Math.floor(o3)}, ${Math.floor(s2)})`;
    }
    return this.getAttribute("from").getColor();
  }
};
var vi = class extends gi {
  constructor() {
    super(...arguments), this.type = "animateTransform";
  }
  calcValue() {
    var { progress: e15, from: t, to: n } = this.getProgress(), r2 = q(t.getString()), i2 = q(n.getString());
    return r2.map((t2, n2) => t2 + (i2[n2] - t2) * e15).join(" ");
  }
};
var yi = class extends X {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "font", this.glyphs = /* @__PURE__ */ Object.create(null), this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber();
    var { definitions: r2 } = e15, { children: i2 } = this;
    for (var a2 of i2) switch (a2.type) {
      case "font-face":
        this.fontFace = a2;
        var o3 = a2.getStyle("font-family");
        o3.hasValue() && (r2[o3.getString()] = this);
        break;
      case "missing-glyph":
        this.missingGlyph = a2;
        break;
      case "glyph":
        var s2 = a2;
        s2.arabicForm ? (this.isRTL = true, this.isArabic = true, this.glyphs[s2.unicode] === void 0 && (this.glyphs[s2.unicode] = /* @__PURE__ */ Object.create(null)), this.glyphs[s2.unicode][s2.arabicForm] = s2) : this.glyphs[s2.unicode] = s2;
        break;
    }
  }
  render() {
  }
};
var bi = class extends X {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "font-face", this.ascent = this.getAttribute("ascent").getNumber(), this.descent = this.getAttribute("descent").getNumber(), this.unitsPerEm = this.getAttribute("units-per-em").getNumber();
  }
};
var xi = class extends Q {
  constructor() {
    super(...arguments), this.type = "missing-glyph", this.horizAdvX = 0;
  }
};
var Si = class extends Qr {
  constructor() {
    super(...arguments), this.type = "tref";
  }
  getText() {
    var e15 = this.getHrefAttribute().getDefinition();
    if (e15) {
      var t = e15.children[0];
      if (t) return t.getText();
    }
    return "";
  }
};
var Ci = class extends Qr {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "a";
    var { childNodes: r2 } = t, i2 = r2[0], a2 = r2.length > 0 && Array.from(r2).every((e16) => e16.nodeType === 3);
    this.hasText = a2, this.text = a2 ? this.getTextFromNode(i2) : "";
  }
  getText() {
    return this.text;
  }
  renderChildren(e15) {
    if (this.hasText) {
      super.renderChildren(e15);
      var { document: t, x: n, y: r2 } = this, { mouse: i2 } = t.screen, a2 = new J(t, "fontSize", Jr.parse(t.ctx.font).fontSize);
      i2.isWorking() && i2.checkBoundingBox(this, new Yr(n, r2 - a2.getPixels("y"), n + this.measureText(e15), r2));
    } else if (this.children.length > 0) {
      var o3 = new di(this.document, null);
      o3.children = this.children, o3.parent = this, o3.render(e15);
    }
  }
  onClick() {
    var { window: e15 } = this.document;
    e15 && e15.open(this.getHrefAttribute().getString());
  }
  onMouseMove() {
    var e15 = this.document.ctx;
    e15.canvas.style.cursor = "pointer";
  }
};
function wi(e15, t) {
  var n = Object.keys(e15);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e15);
    t && (r2 = r2.filter(function(t2) {
      return Object.getOwnPropertyDescriptor(e15, t2).enumerable;
    })), n.push.apply(n, r2);
  }
  return n;
}
function Ti(e15) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2 ? wi(Object(n), true).forEach(function(t2) {
      nn(e15, t2, n[t2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e15, Object.getOwnPropertyDescriptors(n)) : wi(Object(n)).forEach(function(t2) {
      Object.defineProperty(e15, t2, Object.getOwnPropertyDescriptor(n, t2));
    });
  }
  return e15;
}
var Ei = class extends Qr {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "textPath", this.textWidth = 0, this.textHeight = 0, this.pathLength = -1, this.glyphInfo = null, this.letterSpacingCache = [], this.measuresCache = /* @__PURE__ */ new Map([["", 0]]);
    var r2 = this.getHrefAttribute().getDefinition();
    this.text = this.getTextFromNode(), this.dataArray = this.parsePathData(r2);
  }
  getText() {
    return this.text;
  }
  path(e15) {
    var { dataArray: t } = this;
    e15 && e15.beginPath(), t.forEach((t2) => {
      var { type: n, points: r2 } = t2;
      switch (n) {
        case Z.LINE_TO:
          e15 && e15.lineTo(r2[0], r2[1]);
          break;
        case Z.MOVE_TO:
          e15 && e15.moveTo(r2[0], r2[1]);
          break;
        case Z.CURVE_TO:
          e15 && e15.bezierCurveTo(r2[0], r2[1], r2[2], r2[3], r2[4], r2[5]);
          break;
        case Z.QUAD_TO:
          e15 && e15.quadraticCurveTo(r2[0], r2[1], r2[2], r2[3]);
          break;
        case Z.ARC:
          var [i2, a2, o3, s2, c3, l2, u2, d2] = r2, f2 = o3 > s2 ? o3 : s2, p2 = o3 > s2 ? 1 : o3 / s2, m2 = o3 > s2 ? s2 / o3 : 1;
          e15 && (e15.translate(i2, a2), e15.rotate(u2), e15.scale(p2, m2), e15.arc(0, 0, f2, c3, c3 + l2, !!(1 - d2)), e15.scale(1 / p2, 1 / m2), e15.rotate(-u2), e15.translate(-i2, -a2));
          break;
        case Z.CLOSE_PATH:
          e15 && e15.closePath();
          break;
      }
    });
  }
  renderChildren(e15) {
    this.setTextData(e15), e15.save();
    var t = this.parent.getStyle("text-decoration").getString(), n = this.getFontSize(), { glyphInfo: r2 } = this, i2 = e15.fillStyle;
    t === "underline" && e15.beginPath(), r2.forEach((r3, i3) => {
      var { p0: a2, p1: o3, rotation: s2, text: c3 } = r3;
      e15.save(), e15.translate(a2.x, a2.y), e15.rotate(s2), e15.fillStyle && e15.fillText(c3, 0, 0), e15.strokeStyle && e15.strokeText(c3, 0, 0), e15.restore(), t === "underline" && (i3 === 0 && e15.moveTo(a2.x, a2.y + n / 8), e15.lineTo(o3.x, o3.y + n / 5));
    }), t === "underline" && (e15.lineWidth = n / 20, e15.strokeStyle = i2, e15.stroke(), e15.closePath()), e15.restore();
  }
  getLetterSpacingAt() {
    var e15 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return this.letterSpacingCache[e15] || 0;
  }
  findSegmentToFitChar(e15, t, n, r2, i2, a2, o3, s2, c3) {
    var l2 = a2, u2 = this.measureText(e15, s2);
    s2 === " " && t === "justify" && n < r2 && (u2 += (r2 - n) / i2), c3 > -1 && (l2 += this.getLetterSpacingAt(c3));
    var d2 = this.textHeight / 20, f2 = this.getEquidistantPointOnPath(l2, d2, 0), p2 = this.getEquidistantPointOnPath(l2 + u2, d2, 0), m2 = {
      p0: f2,
      p1: p2
    }, h2 = f2 && p2 ? Math.atan2(p2.y - f2.y, p2.x - f2.x) : 0;
    if (o3) {
      var g2 = Math.cos(Math.PI / 2 + h2) * o3, _2 = Math.cos(-h2) * o3;
      m2.p0 = Ti(Ti({}, f2), {}, {
        x: f2.x + g2,
        y: f2.y + _2
      }), m2.p1 = Ti(Ti({}, p2), {}, {
        x: p2.x + g2,
        y: p2.y + _2
      });
    }
    return l2 += u2, {
      offset: l2,
      segment: m2,
      rotation: h2
    };
  }
  measureText(e15, t) {
    var { measuresCache: n } = this, r2 = t || this.getText();
    if (n.has(r2)) return n.get(r2);
    var i2 = this.measureTargetText(e15, r2);
    return n.set(r2, i2), i2;
  }
  setTextData(e15) {
    if (!this.glyphInfo) {
      var t = this.getText(), n = t.split(""), r2 = t.split(" ").length - 1, i2 = this.parent.getAttribute("dx").split().map((e16) => e16.getPixels("x")), a2 = this.parent.getAttribute("dy").getPixels("y"), o3 = this.parent.getStyle("text-anchor").getString("start"), s2 = this.getStyle("letter-spacing"), c3 = this.parent.getStyle("letter-spacing"), l2 = 0;
      !s2.hasValue() || s2.getValue() === "inherit" ? l2 = c3.getPixels() : s2.hasValue() && s2.getValue() !== "initial" && s2.getValue() !== "unset" && (l2 = s2.getPixels());
      var u2 = [], d2 = t.length;
      this.letterSpacingCache = u2;
      for (var f2 = 0; f2 < d2; f2++) u2.push(i2[f2] === void 0 ? l2 : i2[f2]);
      var p2 = u2.reduce((e16, t2, n2) => n2 === 0 ? 0 : e16 + t2 || 0, 0), m2 = this.measureText(e15), h2 = Math.max(m2 + p2, 0);
      this.textWidth = m2, this.textHeight = this.getFontSize(), this.glyphInfo = [];
      var g2 = this.getPathLength(), _2 = this.getStyle("startOffset").getNumber(0) * g2, v2 = 0;
      (o3 === "middle" || o3 === "center") && (v2 = -h2 / 2), (o3 === "end" || o3 === "right") && (v2 = -h2), v2 += _2, n.forEach((t2, i3) => {
        var { offset: s3, segment: c4, rotation: l3 } = this.findSegmentToFitChar(e15, o3, h2, g2, r2, v2, a2, t2, i3);
        v2 = s3, !(!c4.p0 || !c4.p1) && this.glyphInfo.push({
          text: n[i3],
          p0: c4.p0,
          p1: c4.p1,
          rotation: l3
        });
      });
    }
  }
  parsePathData(e15) {
    if (this.pathLength = -1, !e15) return [];
    var t = [], { pathParser: n } = e15;
    for (n.reset(); !n.isEnd(); ) {
      var { current: r2 } = n, i2 = r2 ? r2.x : 0, a2 = r2 ? r2.y : 0, o3 = n.next(), s2 = o3.type, c3 = [];
      switch (o3.type) {
        case Z.MOVE_TO:
          this.pathM(n, c3);
          break;
        case Z.LINE_TO:
          s2 = this.pathL(n, c3);
          break;
        case Z.HORIZ_LINE_TO:
          s2 = this.pathH(n, c3);
          break;
        case Z.VERT_LINE_TO:
          s2 = this.pathV(n, c3);
          break;
        case Z.CURVE_TO:
          this.pathC(n, c3);
          break;
        case Z.SMOOTH_CURVE_TO:
          s2 = this.pathS(n, c3);
          break;
        case Z.QUAD_TO:
          this.pathQ(n, c3);
          break;
        case Z.SMOOTH_QUAD_TO:
          s2 = this.pathT(n, c3);
          break;
        case Z.ARC:
          c3 = this.pathA(n);
          break;
        case Z.CLOSE_PATH:
          Q.pathZ(n);
          break;
      }
      o3.type === Z.CLOSE_PATH ? t.push({
        type: Z.CLOSE_PATH,
        points: [],
        pathLength: 0
      }) : t.push({
        type: s2,
        points: c3,
        start: {
          x: i2,
          y: a2
        },
        pathLength: this.calcLength(i2, a2, s2, c3)
      });
    }
    return t;
  }
  pathM(e15, t) {
    var { x: n, y: r2 } = Q.pathM(e15).point;
    t.push(n, r2);
  }
  pathL(e15, t) {
    var { x: n, y: r2 } = Q.pathL(e15).point;
    return t.push(n, r2), Z.LINE_TO;
  }
  pathH(e15, t) {
    var { x: n, y: r2 } = Q.pathH(e15).point;
    return t.push(n, r2), Z.LINE_TO;
  }
  pathV(e15, t) {
    var { x: n, y: r2 } = Q.pathV(e15).point;
    return t.push(n, r2), Z.LINE_TO;
  }
  pathC(e15, t) {
    var { point: n, controlPoint: r2, currentPoint: i2 } = Q.pathC(e15);
    t.push(n.x, n.y, r2.x, r2.y, i2.x, i2.y);
  }
  pathS(e15, t) {
    var { point: n, controlPoint: r2, currentPoint: i2 } = Q.pathS(e15);
    return t.push(n.x, n.y, r2.x, r2.y, i2.x, i2.y), Z.CURVE_TO;
  }
  pathQ(e15, t) {
    var { controlPoint: n, currentPoint: r2 } = Q.pathQ(e15);
    t.push(n.x, n.y, r2.x, r2.y);
  }
  pathT(e15, t) {
    var { controlPoint: n, currentPoint: r2 } = Q.pathT(e15);
    return t.push(n.x, n.y, r2.x, r2.y), Z.QUAD_TO;
  }
  pathA(e15) {
    var { rX: t, rY: n, sweepFlag: r2, xAxisRotation: i2, centp: a2, a1: o3, ad: s2 } = Q.pathA(e15);
    return r2 === 0 && s2 > 0 && (s2 -= 2 * Math.PI), r2 === 1 && s2 < 0 && (s2 += 2 * Math.PI), [
      a2.x,
      a2.y,
      t,
      n,
      o3,
      s2,
      i2,
      r2
    ];
  }
  calcLength(e15, t, n, r2) {
    var i2 = 0, a2 = null, o3 = null, s2 = 0;
    switch (n) {
      case Z.LINE_TO:
        return this.getLineLength(e15, t, r2[0], r2[1]);
      case Z.CURVE_TO:
        for (i2 = 0, a2 = this.getPointOnCubicBezier(0, e15, t, r2[0], r2[1], r2[2], r2[3], r2[4], r2[5]), s2 = 0.01; s2 <= 1; s2 += 0.01) o3 = this.getPointOnCubicBezier(s2, e15, t, r2[0], r2[1], r2[2], r2[3], r2[4], r2[5]), i2 += this.getLineLength(a2.x, a2.y, o3.x, o3.y), a2 = o3;
        return i2;
      case Z.QUAD_TO:
        for (i2 = 0, a2 = this.getPointOnQuadraticBezier(0, e15, t, r2[0], r2[1], r2[2], r2[3]), s2 = 0.01; s2 <= 1; s2 += 0.01) o3 = this.getPointOnQuadraticBezier(s2, e15, t, r2[0], r2[1], r2[2], r2[3]), i2 += this.getLineLength(a2.x, a2.y, o3.x, o3.y), a2 = o3;
        return i2;
      case Z.ARC:
        i2 = 0;
        var c3 = r2[4], l2 = r2[5], u2 = r2[4] + l2, d2 = Math.PI / 180;
        if (Math.abs(c3 - u2) < d2 && (d2 = Math.abs(c3 - u2)), a2 = this.getPointOnEllipticalArc(r2[0], r2[1], r2[2], r2[3], c3, 0), l2 < 0) for (s2 = c3 - d2; s2 > u2; s2 -= d2) o3 = this.getPointOnEllipticalArc(r2[0], r2[1], r2[2], r2[3], s2, 0), i2 += this.getLineLength(a2.x, a2.y, o3.x, o3.y), a2 = o3;
        else for (s2 = c3 + d2; s2 < u2; s2 += d2) o3 = this.getPointOnEllipticalArc(r2[0], r2[1], r2[2], r2[3], s2, 0), i2 += this.getLineLength(a2.x, a2.y, o3.x, o3.y), a2 = o3;
        return o3 = this.getPointOnEllipticalArc(r2[0], r2[1], r2[2], r2[3], u2, 0), i2 += this.getLineLength(a2.x, a2.y, o3.x, o3.y), i2;
    }
    return 0;
  }
  getPointOnLine(e15, t, n, r2, i2) {
    var a2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : t, o3 = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : n, s2 = (i2 - n) / (r2 - t + mr), c3 = Math.sqrt(e15 * e15 / (1 + s2 * s2));
    r2 < t && (c3 *= -1);
    var l2 = s2 * c3, u2 = null;
    if (r2 === t) u2 = {
      x: a2,
      y: o3 + l2
    };
    else if ((o3 - n) / (a2 - t + 1e-8) === s2) u2 = {
      x: a2 + c3,
      y: o3 + l2
    };
    else {
      var d2 = 0, f2 = 0, p2 = this.getLineLength(t, n, r2, i2);
      if (p2 < 1e-8) return null;
      var m2 = (a2 - t) * (r2 - t) + (o3 - n) * (i2 - n);
      m2 /= p2 * p2, d2 = t + m2 * (r2 - t), f2 = n + m2 * (i2 - n);
      var h2 = this.getLineLength(a2, o3, d2, f2), g2 = Math.sqrt(e15 * e15 - h2 * h2);
      c3 = Math.sqrt(g2 * g2 / (1 + s2 * s2)), r2 < t && (c3 *= -1), l2 = s2 * c3, u2 = {
        x: d2 + c3,
        y: f2 + l2
      };
    }
    return u2;
  }
  getPointOnPath(e15) {
    var t = this.getPathLength(), n = 0, r2 = null;
    if (e15 < -5e-5 || e15 - 5e-5 > t) return null;
    var { dataArray: i2 } = this;
    for (var a2 of i2) {
      if (a2 && (a2.pathLength < 5e-5 || n + a2.pathLength + 5e-5 < e15)) {
        n += a2.pathLength;
        continue;
      }
      var o3 = e15 - n, s2 = 0;
      switch (a2.type) {
        case Z.LINE_TO:
          r2 = this.getPointOnLine(o3, a2.start.x, a2.start.y, a2.points[0], a2.points[1], a2.start.x, a2.start.y);
          break;
        case Z.ARC:
          var c3 = a2.points[4], l2 = a2.points[5], u2 = a2.points[4] + l2;
          if (s2 = c3 + o3 / a2.pathLength * l2, l2 < 0 && s2 < u2 || l2 >= 0 && s2 > u2) break;
          r2 = this.getPointOnEllipticalArc(a2.points[0], a2.points[1], a2.points[2], a2.points[3], s2, a2.points[6]);
          break;
        case Z.CURVE_TO:
          s2 = o3 / a2.pathLength, s2 > 1 && (s2 = 1), r2 = this.getPointOnCubicBezier(s2, a2.start.x, a2.start.y, a2.points[0], a2.points[1], a2.points[2], a2.points[3], a2.points[4], a2.points[5]);
          break;
        case Z.QUAD_TO:
          s2 = o3 / a2.pathLength, s2 > 1 && (s2 = 1), r2 = this.getPointOnQuadraticBezier(s2, a2.start.x, a2.start.y, a2.points[0], a2.points[1], a2.points[2], a2.points[3]);
          break;
      }
      if (r2) return r2;
      break;
    }
    return null;
  }
  getLineLength(e15, t, n, r2) {
    return Math.sqrt((n - e15) * (n - e15) + (r2 - t) * (r2 - t));
  }
  getPathLength() {
    return this.pathLength === -1 && (this.pathLength = this.dataArray.reduce((e15, t) => t.pathLength > 0 ? e15 + t.pathLength : e15, 0)), this.pathLength;
  }
  getPointOnCubicBezier(e15, t, n, r2, i2, a2, o3, s2, c3) {
    return {
      x: s2 * vr(e15) + a2 * yr(e15) + r2 * br(e15) + t * xr(e15),
      y: c3 * vr(e15) + o3 * yr(e15) + i2 * br(e15) + n * xr(e15)
    };
  }
  getPointOnQuadraticBezier(e15, t, n, r2, i2, a2, o3) {
    return {
      x: a2 * Sr(e15) + r2 * Cr(e15) + t * wr(e15),
      y: o3 * Sr(e15) + i2 * Cr(e15) + n * wr(e15)
    };
  }
  getPointOnEllipticalArc(e15, t, n, r2, i2, a2) {
    var o3 = Math.cos(a2), s2 = Math.sin(a2), c3 = {
      x: n * Math.cos(i2),
      y: r2 * Math.sin(i2)
    };
    return {
      x: e15 + (c3.x * o3 - c3.y * s2),
      y: t + (c3.x * s2 + c3.y * o3)
    };
  }
  buildEquidistantCache(e15, t) {
    var n = this.getPathLength(), r2 = t || 0.25, i2 = e15 || n / 100;
    if (!this.equidistantCache || this.equidistantCache.step !== i2 || this.equidistantCache.precision !== r2) {
      this.equidistantCache = {
        step: i2,
        precision: r2,
        points: []
      };
      for (var a2 = 0, o3 = 0; o3 <= n; o3 += r2) {
        var s2 = this.getPointOnPath(o3), c3 = this.getPointOnPath(o3 + r2);
        !s2 || !c3 || (a2 += this.getLineLength(s2.x, s2.y, c3.x, c3.y), a2 >= i2 && (this.equidistantCache.points.push({
          x: s2.x,
          y: s2.y,
          distance: o3
        }), a2 -= i2));
      }
    }
  }
  getEquidistantPointOnPath(e15, t, n) {
    if (this.buildEquidistantCache(t, n), e15 < 0 || e15 - this.getPathLength() > 5e-5) return null;
    var r2 = Math.round(e15 / this.getPathLength() * (this.equidistantCache.points.length - 1));
    return this.equidistantCache.points[r2] || null;
  }
};
var Di = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
var Oi = class extends Xr {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "image", this.loaded = false;
    var r2 = this.getHrefAttribute().getString();
    if (r2) {
      var i2 = r2.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(r2);
      e15.images.push(this), i2 ? this.loadSvg(r2) : this.loadImage(r2), this.isSvg = i2;
    }
  }
  loadImage(e15) {
    var t = this;
    return yt(function* () {
      try {
        t.image = yield t.document.createImage(e15);
      } catch (t2) {
        console.error(`Error while loading image "${e15}":`, t2);
      }
      t.loaded = true;
    })();
  }
  loadSvg(e15) {
    var t = this;
    return yt(function* () {
      var n = Di.exec(e15);
      if (n) {
        var r2 = n[5];
        n[4] === "base64" ? t.image = atob(r2) : t.image = decodeURIComponent(r2);
      } else try {
        t.image = yield (yield t.document.fetch(e15)).text();
      } catch (t2) {
        console.error(`Error while loading image "${e15}":`, t2);
      }
      t.loaded = true;
    })();
  }
  renderChildren(e15) {
    var { document: t, image: n, loaded: r2 } = this, i2 = this.getAttribute("x").getPixels("x"), a2 = this.getAttribute("y").getPixels("y"), o3 = this.getStyle("width").getPixels("x"), s2 = this.getStyle("height").getPixels("y");
    if (!(!r2 || !n || !o3 || !s2)) {
      if (e15.save(), e15.translate(i2, a2), this.isSvg) {
        var c3 = t.canvg.forkString(e15, this.image, {
          ignoreMouse: true,
          ignoreAnimation: true,
          ignoreDimensions: true,
          ignoreClear: true,
          offsetX: 0,
          offsetY: 0,
          scaleWidth: o3,
          scaleHeight: s2
        });
        c3.document.documentElement.parent = this, c3.render();
      } else {
        var l2 = this.image;
        t.setViewBox({
          ctx: e15,
          aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
          width: o3,
          desiredWidth: l2.width,
          height: s2,
          desiredHeight: l2.height
        }), this.loaded && (l2.complete === void 0 || l2.complete) && e15.drawImage(l2, 0, 0);
      }
      e15.restore();
    }
  }
  getBoundingBox() {
    var e15 = this.getAttribute("x").getPixels("x"), t = this.getAttribute("y").getPixels("y"), n = this.getStyle("width").getPixels("x"), r2 = this.getStyle("height").getPixels("y");
    return new Yr(e15, t, e15 + n, t + r2);
  }
};
var ki = class extends Xr {
  constructor() {
    super(...arguments), this.type = "symbol";
  }
  render(e15) {
  }
};
var Ai = class {
  constructor(e15) {
    this.document = e15, this.loaded = false, e15.fonts.push(this);
  }
  load(e15, t) {
    var n = this;
    return yt(function* () {
      try {
        var { document: r2 } = n, i2 = (yield r2.canvg.parser.load(t)).getElementsByTagName("font");
        Array.from(i2).forEach((t2) => {
          var n2 = r2.createElement(t2);
          r2.definitions[e15] = n2;
        });
      } catch (e16) {
        console.error(`Error while loading font "${t}":`, e16);
      }
      n.loaded = true;
    })();
  }
};
var ji = class extends X {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "style", Qn(Array.from(t.childNodes).map((e16) => e16.textContent).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "").replace(/@import.*;/g, "")).split("}").forEach((t2) => {
      var n2 = t2.trim();
      if (n2) {
        var r2 = n2.split("{"), i2 = r2[0].split(","), a2 = r2[1].split(";");
        i2.forEach((t3) => {
          var n3 = t3.trim();
          if (n3) {
            var r3 = e15.styles[n3] || {};
            if (a2.forEach((t4) => {
              var n4 = t4.indexOf(":"), i4 = t4.substr(0, n4).trim(), a3 = t4.substr(n4 + 1, t4.length - n4).trim();
              i4 && a3 && (r3[i4] = new J(e15, i4, a3));
            }), e15.styles[n3] = r3, e15.stylesSpecificity[n3] = pr(n3), n3 === "@font-face") {
              var i3 = r3["font-family"].getString().replace(/"|'/g, "");
              r3.src.getString().split(",").forEach((t4) => {
                if (t4.indexOf('format("svg")') > 0) {
                  var n4 = rr(t4);
                  n4 && new Ai(e15).load(i3, n4);
                }
              });
            }
          }
        });
      }
    });
  }
};
ji.parseExternalUrl = rr;
var Mi = class extends Xr {
  constructor() {
    super(...arguments), this.type = "use";
  }
  setContext(e15) {
    super.setContext(e15);
    var t = this.getAttribute("x"), n = this.getAttribute("y");
    t.hasValue() && e15.translate(t.getPixels("x"), 0), n.hasValue() && e15.translate(0, n.getPixels("y"));
  }
  path(e15) {
    var { element: t } = this;
    t && t.path(e15);
  }
  renderChildren(e15) {
    var { document: t, element: n } = this;
    if (n) {
      var r2 = n;
      if (n.type === "symbol" && (r2 = new ti(t, null), r2.attributes.viewBox = new J(t, "viewBox", n.getAttribute("viewBox").getString()), r2.attributes.preserveAspectRatio = new J(t, "preserveAspectRatio", n.getAttribute("preserveAspectRatio").getString()), r2.attributes.overflow = new J(t, "overflow", n.getAttribute("overflow").getString()), r2.children = n.children, n.styles.opacity = new J(t, "opacity", this.calculateOpacity())), r2.type === "svg") {
        var i2 = this.getStyle("width", false, true), a2 = this.getStyle("height", false, true);
        i2.hasValue() && (r2.attributes.width = new J(t, "width", i2.getString())), a2.hasValue() && (r2.attributes.height = new J(t, "height", a2.getString()));
      }
      var o3 = r2.parent;
      r2.parent = this, r2.render(e15), r2.parent = o3;
    }
  }
  getBoundingBox(e15) {
    var { element: t } = this;
    return t ? t.getBoundingBox(e15) : null;
  }
  elementTransform() {
    var { document: e15, element: t } = this;
    return Hr.fromElement(e15, t);
  }
  get element() {
    return this.cachedElement || (this.cachedElement = this.getHrefAttribute().getDefinition()), this.cachedElement;
  }
};
function Ni(e15, t, n, r2, i2, a2) {
  return e15[n * r2 * 4 + t * 4 + a2];
}
function Pi(e15, t, n, r2, i2, a2, o3) {
  e15[n * r2 * 4 + t * 4 + a2] = o3;
}
function $(e15, t, n) {
  return e15[t] * n;
}
function Fi(e15, t, n, r2) {
  return t + Math.cos(e15) * n + Math.sin(e15) * r2;
}
var Ii = class extends X {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "feColorMatrix";
    var r2 = q(this.getAttribute("values").getString());
    switch (this.getAttribute("type").getString("matrix")) {
      case "saturate":
        var i2 = r2[0];
        r2 = [
          0.213 + 0.787 * i2,
          0.715 - 0.715 * i2,
          0.072 - 0.072 * i2,
          0,
          0,
          0.213 - 0.213 * i2,
          0.715 + 0.285 * i2,
          0.072 - 0.072 * i2,
          0,
          0,
          0.213 - 0.213 * i2,
          0.715 - 0.715 * i2,
          0.072 + 0.928 * i2,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1
        ];
        break;
      case "hueRotate":
        var a2 = r2[0] * Math.PI / 180;
        r2 = [
          Fi(a2, 0.213, 0.787, -0.213),
          Fi(a2, 0.715, -0.715, -0.715),
          Fi(a2, 0.072, -0.072, 0.928),
          0,
          0,
          Fi(a2, 0.213, -0.213, 0.143),
          Fi(a2, 0.715, 0.285, 0.14),
          Fi(a2, 0.072, -0.072, -0.283),
          0,
          0,
          Fi(a2, 0.213, -0.213, -0.787),
          Fi(a2, 0.715, -0.715, 0.715),
          Fi(a2, 0.072, 0.928, 0.072),
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1
        ];
        break;
      case "luminanceToAlpha":
        r2 = [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0.2125,
          0.7154,
          0.0721,
          0,
          0,
          0,
          0,
          0,
          0,
          1
        ];
        break;
    }
    this.matrix = r2, this.includeOpacity = this.getAttribute("includeOpacity").hasValue();
  }
  apply(e15, t, n, r2, i2) {
    for (var { includeOpacity: a2, matrix: o3 } = this, s2 = e15.getImageData(0, 0, r2, i2), c3 = 0; c3 < i2; c3++) for (var l2 = 0; l2 < r2; l2++) {
      var u2 = Ni(s2.data, l2, c3, r2, i2, 0), d2 = Ni(s2.data, l2, c3, r2, i2, 1), f2 = Ni(s2.data, l2, c3, r2, i2, 2), p2 = Ni(s2.data, l2, c3, r2, i2, 3), m2 = $(o3, 0, u2) + $(o3, 1, d2) + $(o3, 2, f2) + $(o3, 3, p2) + $(o3, 4, 1), h2 = $(o3, 5, u2) + $(o3, 6, d2) + $(o3, 7, f2) + $(o3, 8, p2) + $(o3, 9, 1), g2 = $(o3, 10, u2) + $(o3, 11, d2) + $(o3, 12, f2) + $(o3, 13, p2) + $(o3, 14, 1), _2 = $(o3, 15, u2) + $(o3, 16, d2) + $(o3, 17, f2) + $(o3, 18, p2) + $(o3, 19, 1);
      a2 && (m2 = 0, h2 = 0, g2 = 0, _2 *= p2 / 255), Pi(s2.data, l2, c3, r2, i2, 0, m2), Pi(s2.data, l2, c3, r2, i2, 1, h2), Pi(s2.data, l2, c3, r2, i2, 2, g2), Pi(s2.data, l2, c3, r2, i2, 3, _2);
    }
    e15.clearRect(0, 0, r2, i2), e15.putImageData(s2, 0, 0);
  }
};
var Li = class e11 extends X {
  constructor() {
    super(...arguments), this.type = "mask";
  }
  apply(t, n) {
    var { document: r2 } = this, i2 = this.getAttribute("x").getPixels("x"), a2 = this.getAttribute("y").getPixels("y"), o3 = this.getStyle("width").getPixels("x"), s2 = this.getStyle("height").getPixels("y");
    if (!o3 && !s2) {
      var c3 = new Yr();
      this.children.forEach((e15) => {
        c3.addBoundingBox(e15.getBoundingBox(t));
      }), i2 = Math.floor(c3.x1), a2 = Math.floor(c3.y1), o3 = Math.floor(c3.width), s2 = Math.floor(c3.height);
    }
    var l2 = this.removeStyles(n, e11.ignoreStyles), u2 = r2.createCanvas(i2 + o3, a2 + s2), d2 = u2.getContext("2d");
    r2.screen.setDefaults(d2), this.renderChildren(d2), new Ii(r2, {
      nodeType: 1,
      childNodes: [],
      attributes: [{
        nodeName: "type",
        value: "luminanceToAlpha"
      }, {
        nodeName: "includeOpacity",
        value: "true"
      }]
    }).apply(d2, 0, 0, i2 + o3, a2 + s2);
    var f2 = r2.createCanvas(i2 + o3, a2 + s2), p2 = f2.getContext("2d");
    r2.screen.setDefaults(p2), n.render(p2), p2.globalCompositeOperation = "destination-in", p2.fillStyle = d2.createPattern(u2, "no-repeat"), p2.fillRect(0, 0, i2 + o3, a2 + s2), t.fillStyle = p2.createPattern(f2, "no-repeat"), t.fillRect(0, 0, i2 + o3, a2 + s2), this.restoreStyles(n, l2);
  }
  render(e15) {
  }
};
Li.ignoreStyles = [
  "mask",
  "transform",
  "clip-path"
];
var Ri = () => {
};
var zi = class extends X {
  constructor() {
    super(...arguments), this.type = "clipPath";
  }
  apply(e15) {
    var { document: t } = this, n = Reflect.getPrototypeOf(e15), { beginPath: r2, closePath: i2 } = e15;
    n && (n.beginPath = Ri, n.closePath = Ri), Reflect.apply(r2, e15, []), this.children.forEach((r3) => {
      if (r3.path !== void 0) {
        var a2 = r3.elementTransform === void 0 ? null : r3.elementTransform();
        a2 || (a2 = Hr.fromElement(t, r3)), a2 && a2.apply(e15), r3.path(e15), n && (n.closePath = i2), a2 && a2.unapply(e15);
      }
    }), Reflect.apply(i2, e15, []), e15.clip(), n && (n.beginPath = r2, n.closePath = i2);
  }
  render(e15) {
  }
};
var Bi = class e12 extends X {
  constructor() {
    super(...arguments), this.type = "filter";
  }
  apply(t, n) {
    var { document: r2, children: i2 } = this, a2 = n.getBoundingBox(t);
    if (a2) {
      var o3 = 0, s2 = 0;
      i2.forEach((e15) => {
        var t2 = e15.extraFilterDistance || 0;
        o3 = Math.max(o3, t2), s2 = Math.max(s2, t2);
      });
      var c3 = Math.floor(a2.width), l2 = Math.floor(a2.height), u2 = c3 + 2 * o3, d2 = l2 + 2 * s2;
      if (!(u2 < 1 || d2 < 1)) {
        var f2 = Math.floor(a2.x), p2 = Math.floor(a2.y), m2 = this.removeStyles(n, e12.ignoreStyles), h2 = r2.createCanvas(u2, d2), g2 = h2.getContext("2d");
        r2.screen.setDefaults(g2), g2.translate(-f2 + o3, -p2 + s2), n.render(g2), i2.forEach((e15) => {
          typeof e15.apply == "function" && e15.apply(g2, 0, 0, u2, d2);
        }), t.drawImage(h2, 0, 0, u2, d2, f2 - o3, p2 - s2, u2, d2), this.restoreStyles(n, m2);
      }
    }
  }
  render(e15) {
  }
};
Bi.ignoreStyles = [
  "filter",
  "transform",
  "clip-path"
];
var Vi = class extends X {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "feDropShadow", this.addStylesFromStyleDefinition();
  }
  apply(e15, t, n, r2, i2) {
  }
};
var Hi = class extends X {
  constructor() {
    super(...arguments), this.type = "feMorphology";
  }
  apply(e15, t, n, r2, i2) {
  }
};
var Ui = class extends X {
  constructor() {
    super(...arguments), this.type = "feComposite";
  }
  apply(e15, t, n, r2, i2) {
  }
};
var Wi = class extends X {
  constructor(e15, t, n) {
    super(e15, t, n), this.type = "feGaussianBlur", this.blurRadius = Math.floor(this.getAttribute("stdDeviation").getNumber()), this.extraFilterDistance = this.blurRadius;
  }
  apply(e15, t, n, r2, i2) {
    var { document: a2, blurRadius: o3 } = this, s2 = a2.window ? a2.window.document.body : null, c3 = e15.canvas;
    c3.id = a2.getUniqueId(), s2 && (c3.style.display = "none", s2.appendChild(c3)), Kn(c3, t, n, r2, i2, o3), s2 && s2.removeChild(c3);
  }
};
var Gi = class extends X {
  constructor() {
    super(...arguments), this.type = "title";
  }
};
var Ki = class extends X {
  constructor() {
    super(...arguments), this.type = "desc";
  }
};
var qi = {
  svg: ti,
  rect: ni,
  circle: ri,
  ellipse: ii,
  line: ai,
  polyline: oi,
  polygon: si,
  path: Q,
  pattern: ci,
  marker: li,
  defs: ui,
  linearGradient: pi,
  radialGradient: mi,
  stop: hi,
  animate: gi,
  animateColor: _i,
  animateTransform: vi,
  font: yi,
  "font-face": bi,
  "missing-glyph": xi,
  glyph: Zr,
  text: Qr,
  tspan: $r,
  tref: Si,
  a: Ci,
  textPath: Ei,
  image: Oi,
  g: di,
  symbol: ki,
  style: ji,
  use: Mi,
  mask: Li,
  clipPath: zi,
  filter: Bi,
  feDropShadow: Vi,
  feMorphology: Hi,
  feComposite: Ui,
  feColorMatrix: Ii,
  feGaussianBlur: Wi,
  title: Gi,
  desc: Ki
};
function Ji(e15, t) {
  var n = Object.keys(e15);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e15);
    t && (r2 = r2.filter(function(t2) {
      return Object.getOwnPropertyDescriptor(e15, t2).enumerable;
    })), n.push.apply(n, r2);
  }
  return n;
}
function Yi(e15) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2 ? Ji(Object(n), true).forEach(function(t2) {
      nn(e15, t2, n[t2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e15, Object.getOwnPropertyDescriptors(n)) : Ji(Object(n)).forEach(function(t2) {
      Object.defineProperty(e15, t2, Object.getOwnPropertyDescriptor(n, t2));
    });
  }
  return e15;
}
function Xi(e15, t) {
  var n = document.createElement("canvas");
  return n.width = e15, n.height = t, n;
}
function Zi(e15) {
  return Qi.apply(this, arguments);
}
function Qi() {
  return Qi = yt(function* (e15) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = document.createElement("img");
    return t && (n.crossOrigin = "Anonymous"), new Promise((t2, r2) => {
      n.onload = () => {
        t2(n);
      }, n.onerror = (e16, t3, n2, i2, a2) => {
        r2(a2);
      }, n.src = e15;
    });
  }), Qi.apply(this, arguments);
}
var $i = class e13 {
  constructor(t) {
    var { rootEmSize: n = 12, emSize: r2 = 12, createCanvas: i2 = e13.createCanvas, createImage: a2 = e13.createImage, anonymousCrossOrigin: o3 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.canvg = t, this.definitions = /* @__PURE__ */ Object.create(null), this.styles = /* @__PURE__ */ Object.create(null), this.stylesSpecificity = /* @__PURE__ */ Object.create(null), this.images = [], this.fonts = [], this.emSizeStack = [], this.uniqueId = 0, this.screen = t.screen, this.rootEmSize = n, this.emSize = r2, this.createCanvas = i2, this.createImage = this.bindCreateImage(a2, o3), this.screen.wait(this.isImagesLoaded.bind(this)), this.screen.wait(this.isFontsLoaded.bind(this));
  }
  bindCreateImage(e15, t) {
    return typeof t == "boolean" ? (n, r2) => e15(n, typeof r2 == "boolean" ? r2 : t) : e15;
  }
  get window() {
    return this.screen.window;
  }
  get fetch() {
    return this.screen.fetch;
  }
  get ctx() {
    return this.screen.ctx;
  }
  get emSize() {
    var { emSizeStack: e15 } = this;
    return e15[e15.length - 1];
  }
  set emSize(e15) {
    var { emSizeStack: t } = this;
    t.push(e15);
  }
  popEmSize() {
    var { emSizeStack: e15 } = this;
    e15.pop();
  }
  getUniqueId() {
    return `canvg${++this.uniqueId}`;
  }
  isImagesLoaded() {
    return this.images.every((e15) => e15.loaded);
  }
  isFontsLoaded() {
    return this.fonts.every((e15) => e15.loaded);
  }
  createDocumentElement(e15) {
    var t = this.createElement(e15.documentElement);
    return t.root = true, t.addStylesFromStyleDefinition(), this.documentElement = t, t;
  }
  createElement(t) {
    var n = t.nodeName.replace(/^[^:]+:/, ""), r2 = e13.elementTypes[n];
    return r2 === void 0 ? new Ur(this, t) : new r2(this, t);
  }
  createTextNode(e15) {
    return new ei(this, e15);
  }
  setViewBox(e15) {
    this.screen.setViewBox(Yi({ document: this }, e15));
  }
};
$i.createCanvas = Xi, $i.createImage = Zi, $i.elementTypes = qi;
function ea(e15, t) {
  var n = Object.keys(e15);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e15);
    t && (r2 = r2.filter(function(t2) {
      return Object.getOwnPropertyDescriptor(e15, t2).enumerable;
    })), n.push.apply(n, r2);
  }
  return n;
}
function ta(e15) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2 ? ea(Object(n), true).forEach(function(t2) {
      nn(e15, t2, n[t2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e15, Object.getOwnPropertyDescriptors(n)) : ea(Object(n)).forEach(function(t2) {
      Object.defineProperty(e15, t2, Object.getOwnPropertyDescriptor(n, t2));
    });
  }
  return e15;
}
var na = class e14 {
  constructor(e15, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.parser = new Mr(n), this.screen = new kr(e15, n), this.options = n;
    var r2 = new $i(this, n), i2 = r2.createDocumentElement(t);
    this.document = r2, this.documentElement = i2;
  }
  static from(t, n) {
    var r2 = arguments;
    return yt(function* () {
      var i2 = r2.length > 2 && r2[2] !== void 0 ? r2[2] : {};
      return new e14(t, yield new Mr(i2).parse(n), i2);
    })();
  }
  static fromString(t, n) {
    var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return new e14(t, new Mr(r2).parseFromString(n), r2);
  }
  fork(t, n) {
    var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e14.from(t, n, ta(ta({}, this.options), r2));
  }
  forkString(t, n) {
    var r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e14.fromString(t, n, ta(ta({}, this.options), r2));
  }
  ready() {
    return this.screen.ready();
  }
  isReady() {
    return this.screen.isReady();
  }
  render() {
    var e15 = arguments, t = this;
    return yt(function* () {
      var n = e15.length > 0 && e15[0] !== void 0 ? e15[0] : {};
      t.start(ta({
        enableRedraw: true,
        ignoreAnimation: true,
        ignoreMouse: true
      }, n)), yield t.ready(), t.stop();
    })();
  }
  start() {
    var e15 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, { documentElement: t, screen: n, options: r2 } = this;
    n.start(t, ta(ta({ enableRedraw: true }, r2), e15));
  }
  stop() {
    this.screen.stop();
  }
  resize(e15) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e15, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    this.documentElement.resize(e15, t, n);
  }
};
export {
  Ci as AElement,
  _i as AnimateColorElement,
  gi as AnimateElement,
  vi as AnimateTransformElement,
  Yr as BoundingBox,
  vr as CB1,
  yr as CB2,
  br as CB3,
  xr as CB4,
  na as Canvg,
  ri as CircleElement,
  zi as ClipPathElement,
  ui as DefsElement,
  Ki as DescElement,
  $i as Document,
  X as Element,
  ii as EllipseElement,
  Ii as FeColorMatrixElement,
  Ui as FeCompositeElement,
  Vi as FeDropShadowElement,
  Wi as FeGaussianBlurElement,
  Hi as FeMorphologyElement,
  Bi as FilterElement,
  Jr as Font,
  yi as FontElement,
  bi as FontFaceElement,
  di as GElement,
  Zr as GlyphElement,
  fi as GradientElement,
  Oi as ImageElement,
  ai as LineElement,
  pi as LinearGradientElement,
  li as MarkerElement,
  Li as MaskElement,
  Ir as Matrix,
  xi as MissingGlyphElement,
  Er as Mouse,
  mr as PSEUDO_ZERO,
  Mr as Parser,
  Q as PathElement,
  Z as PathParser,
  ci as PatternElement,
  Y as Point,
  si as PolygonElement,
  oi as PolylineElement,
  J as Property,
  Sr as QB1,
  Cr as QB2,
  wr as QB3,
  mi as RadialGradientElement,
  ni as RectElement,
  Xr as RenderedElement,
  Pr as Rotate,
  ti as SVGElement,
  Ai as SVGFontLoader,
  Fr as Scale,
  kr as Screen,
  Lr as Skew,
  Rr as SkewX,
  zr as SkewY,
  hi as StopElement,
  ji as StyleElement,
  ki as SymbolElement,
  Si as TRefElement,
  $r as TSpanElement,
  Qr as TextElement,
  Ei as TextPathElement,
  Gi as TitleElement,
  Hr as Transform,
  Nr as Translate,
  Ur as UnknownElement,
  Mi as UseElement,
  Tr as ViewPort,
  Qn as compressSpaces,
  na as default,
  pr as getSelectorSpecificity,
  nr as normalizeAttributeName,
  ir as normalizeColor,
  rr as parseExternalUrl,
  Zn as presets,
  q as toNumbers,
  $n as trimLeft,
  er as trimRight,
  hr as vectorMagnitude,
  _r as vectorsAngle,
  gr as vectorsRatio
};
//# sourceMappingURL=index.es-C4X5YiRo-6OLPPAH4.js.map
