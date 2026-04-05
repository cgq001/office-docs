import {
  e
} from "./chunk-INAZFQXU.js";
import {
  c
} from "./chunk-CYLA5VZ5.js";
import {
  __publicField
} from "./chunk-EQCVQC35.js";

// node_modules/@ap666/office-word/dist/jspdf.es.min-ByaXFVjc.js
var n = Uint8Array;
var r = Uint16Array;
var i = Int32Array;
var a = new n([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  0,
  0,
  0
]);
var o = new n([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  0,
  0
]);
var s = new n([
  16,
  17,
  18,
  0,
  8,
  7,
  9,
  6,
  10,
  5,
  11,
  4,
  12,
  3,
  13,
  2,
  14,
  1,
  15
]);
var c2 = function(e4, t) {
  for (var n2 = new r(31), a2 = 0; a2 < 31; ++a2) n2[a2] = t += 1 << e4[a2 - 1];
  for (var o2 = new i(n2[30]), a2 = 1; a2 < 30; ++a2) for (var s2 = n2[a2]; s2 < n2[a2 + 1]; ++s2) o2[s2] = s2 - n2[a2] << 5 | a2;
  return {
    b: n2,
    r: o2
  };
};
var l = c2(a, 2);
var u = l.b;
var d = l.r;
u[28] = 258, d[258] = 28;
var f = c2(o, 0);
f.b;
for (p = f.r, m = new r(32768), h = 0; h < 32768; ++h) {
  g = (h & 43690) >> 1 | (h & 21845) << 1;
  g = (g & 52428) >> 2 | (g & 13107) << 2, g = (g & 61680) >> 4 | (g & 3855) << 4, m[h] = ((g & 65280) >> 8 | (g & 255) << 8) >> 1;
}
var g;
var p;
var m;
var h;
for (_ = function(e4, t, n2) {
  for (var i2 = e4.length, a2 = 0, o2 = new r(t); a2 < i2; ++a2) e4[a2] && ++o2[e4[a2] - 1];
  var s2 = new r(t);
  for (a2 = 1; a2 < t; ++a2) s2[a2] = s2[a2 - 1] + o2[a2 - 1] << 1;
  var c3;
  if (n2) {
    c3 = new r(1 << t);
    var l2 = 15 - t;
    for (a2 = 0; a2 < i2; ++a2) if (e4[a2]) for (var u2 = a2 << 4 | e4[a2], d2 = t - e4[a2], f2 = s2[e4[a2] - 1]++ << d2, p = f2 | (1 << d2) - 1; f2 <= p; ++f2) c3[m[f2] >> l2] = u2;
  } else for (c3 = new r(i2), a2 = 0; a2 < i2; ++a2) e4[a2] && (c3[a2] = m[s2[e4[a2] - 1]++] >> 15 - e4[a2]);
  return c3;
}, v = new n(288), h = 0; h < 144; ++h) v[h] = 8;
var _;
var v;
var h;
for (h = 144; h < 256; ++h) v[h] = 9;
var h;
for (h = 256; h < 280; ++h) v[h] = 7;
var h;
for (h = 280; h < 288; ++h) v[h] = 8;
var h;
for (y = new n(32), h = 0; h < 32; ++h) y[h] = 5;
var y;
var h;
var b = _(v, 9, 0);
var x = _(y, 5, 0);
var S = function(e4) {
  return (e4 + 7) / 8 | 0;
};
var C = function(e4, t, r2) {
  return (t == null || t < 0) && (t = 0), (r2 == null || r2 > e4.length) && (r2 = e4.length), new n(e4.subarray(t, r2));
};
var w = function(e4, t, n2) {
  n2 <<= t & 7;
  var r2 = t / 8 | 0;
  e4[r2] |= n2, e4[r2 + 1] |= n2 >> 8;
};
var T = function(e4, t, n2) {
  n2 <<= t & 7;
  var r2 = t / 8 | 0;
  e4[r2] |= n2, e4[r2 + 1] |= n2 >> 8, e4[r2 + 2] |= n2 >> 16;
};
var E = function(e4, t) {
  for (var i2 = [], a2 = 0; a2 < e4.length; ++a2) e4[a2] && i2.push({
    s: a2,
    f: e4[a2]
  });
  var o2 = i2.length, s2 = i2.slice();
  if (!o2) return {
    t: N,
    l: 0
  };
  if (o2 == 1) {
    var c3 = new n(i2[0].s + 1);
    return c3[i2[0].s] = 1, {
      t: c3,
      l: 1
    };
  }
  i2.sort(function(e5, t2) {
    return e5.f - t2.f;
  }), i2.push({
    s: -1,
    f: 25001
  });
  var l2 = i2[0], u2 = i2[1], d2 = 0, f2 = 1, p = 2;
  for (i2[0] = {
    s: -1,
    f: l2.f + u2.f,
    l: l2,
    r: u2
  }; f2 != o2 - 1; ) l2 = i2[i2[d2].f < i2[p].f ? d2++ : p++], u2 = i2[d2 != f2 && i2[d2].f < i2[p].f ? d2++ : p++], i2[f2++] = {
    s: -1,
    f: l2.f + u2.f,
    l: l2,
    r: u2
  };
  for (var m = s2[0].s, a2 = 1; a2 < o2; ++a2) s2[a2].s > m && (m = s2[a2].s);
  var h = new r(m + 1), g = D(i2[f2 - 1], h, 0);
  if (g > t) {
    var a2 = 0, _ = 0, v = g - t, y = 1 << v;
    for (s2.sort(function(e5, t2) {
      return h[t2.s] - h[e5.s] || e5.f - t2.f;
    }); a2 < o2; ++a2) {
      var b2 = s2[a2].s;
      if (h[b2] > t) _ += y - (1 << g - h[b2]), h[b2] = t;
      else break;
    }
    for (_ >>= v; _ > 0; ) {
      var x2 = s2[a2].s;
      h[x2] < t ? _ -= 1 << t - h[x2]++ - 1 : ++a2;
    }
    for (; a2 >= 0 && _; --a2) {
      var S2 = s2[a2].s;
      h[S2] == t && (--h[S2], ++_);
    }
    g = t;
  }
  return {
    t: new n(h),
    l: g
  };
};
var D = function(e4, t, n2) {
  return e4.s == -1 ? Math.max(D(e4.l, t, n2 + 1), D(e4.r, t, n2 + 1)) : t[e4.s] = n2;
};
var O = function(e4) {
  for (var t = e4.length; t && !e4[--t]; ) ;
  for (var n2 = new r(++t), i2 = 0, a2 = e4[0], o2 = 1, s2 = function(e5) {
    n2[i2++] = e5;
  }, c3 = 1; c3 <= t; ++c3) if (e4[c3] == a2 && c3 != t) ++o2;
  else {
    if (!a2 && o2 > 2) {
      for (; o2 > 138; o2 -= 138) s2(32754);
      o2 > 2 && (s2(o2 > 10 ? o2 - 11 << 5 | 28690 : o2 - 3 << 5 | 12305), o2 = 0);
    } else if (o2 > 3) {
      for (s2(a2), --o2; o2 > 6; o2 -= 6) s2(8304);
      o2 > 2 && (s2(o2 - 3 << 5 | 8208), o2 = 0);
    }
    for (; o2--; ) s2(a2);
    o2 = 1, a2 = e4[c3];
  }
  return {
    c: n2.subarray(0, i2),
    n: t
  };
};
var k = function(e4, t) {
  for (var n2 = 0, r2 = 0; r2 < t.length; ++r2) n2 += e4[r2] * t[r2];
  return n2;
};
var A = function(e4, t, n2) {
  var r2 = n2.length, i2 = S(t + 2);
  e4[i2] = r2 & 255, e4[i2 + 1] = r2 >> 8, e4[i2 + 2] = e4[i2] ^ 255, e4[i2 + 3] = e4[i2 + 1] ^ 255;
  for (var a2 = 0; a2 < r2; ++a2) e4[i2 + a2 + 4] = n2[a2];
  return (i2 + 4 + r2) * 8;
};
var j = function(e4, t, n2, i2, c3, l2, u2, d2, f2, p, m) {
  w(t, m++, n2), ++c3[256];
  for (var h = E(c3, 15), g = h.t, S2 = h.l, C2 = E(l2, 15), D2 = C2.t, j2 = C2.l, M2 = O(g), N2 = M2.c, P2 = M2.n, F2 = O(D2), I2 = F2.c, L2 = F2.n, R2 = new r(19), z2 = 0; z2 < N2.length; ++z2) ++R2[N2[z2] & 31];
  for (var z2 = 0; z2 < I2.length; ++z2) ++R2[I2[z2] & 31];
  for (var B2 = E(R2, 7), V2 = B2.t, ee2 = B2.l, H2 = 19; H2 > 4 && !V2[s[H2 - 1]]; --H2) ;
  var te2 = p + 5 << 3, U2 = k(c3, v) + k(l2, y) + u2, ne2 = k(c3, g) + k(l2, D2) + u2 + 14 + 3 * H2 + k(R2, V2) + 2 * R2[16] + 3 * R2[17] + 7 * R2[18];
  if (f2 >= 0 && te2 <= U2 && te2 <= ne2) return A(t, m, e4.subarray(f2, f2 + p));
  var re2, ie2, ae2, oe2;
  if (w(t, m, 1 + (ne2 < U2)), m += 2, ne2 < U2) {
    re2 = _(g, S2, 0), ie2 = g, ae2 = _(D2, j2, 0), oe2 = D2;
    var se2 = _(V2, ee2, 0);
    w(t, m, P2 - 257), w(t, m + 5, L2 - 1), w(t, m + 10, H2 - 4), m += 14;
    for (var z2 = 0; z2 < H2; ++z2) w(t, m + 3 * z2, V2[s[z2]]);
    m += 3 * H2;
    for (var W2 = [N2, I2], ce2 = 0; ce2 < 2; ++ce2) for (var le2 = W2[ce2], z2 = 0; z2 < le2.length; ++z2) {
      var ue2 = le2[z2] & 31;
      w(t, m, se2[ue2]), m += V2[ue2], ue2 > 15 && (w(t, m, le2[z2] >> 5 & 127), m += le2[z2] >> 12);
    }
  } else re2 = b, ie2 = v, ae2 = x, oe2 = y;
  for (var z2 = 0; z2 < d2; ++z2) {
    var de2 = i2[z2];
    if (de2 > 255) {
      var ue2 = de2 >> 18 & 31;
      T(t, m, re2[ue2 + 257]), m += ie2[ue2 + 257], ue2 > 7 && (w(t, m, de2 >> 23 & 31), m += a[ue2]);
      var fe2 = de2 & 31;
      T(t, m, ae2[fe2]), m += oe2[fe2], fe2 > 3 && (T(t, m, de2 >> 5 & 8191), m += o[fe2]);
    } else T(t, m, re2[de2]), m += ie2[de2];
  }
  return T(t, m, re2[256]), m + ie2[256];
};
var M = new i([
  65540,
  131080,
  131088,
  131104,
  262176,
  1048704,
  1048832,
  2114560,
  2117632
]);
var N = new n(0);
var P = function(e4, t, s2, c3, l2, u2) {
  var f2 = u2.z || e4.length, m = new n(c3 + f2 + 5 * (1 + Math.ceil(f2 / 7e3)) + l2), h = m.subarray(c3, m.length - l2), g = u2.l, _ = (u2.r || 0) & 7;
  if (t) {
    _ && (h[0] = u2.r >> 3);
    for (var v = M[t - 1], y = v >> 13, b2 = v & 8191, x2 = (1 << s2) - 1, w2 = u2.p || new r(32768), T2 = u2.h || new r(x2 + 1), E2 = Math.ceil(s2 / 3), D2 = 2 * E2, O2 = function(t2) {
      return (e4[t2] ^ e4[t2 + 1] << E2 ^ e4[t2 + 2] << D2) & x2;
    }, k2 = new i(25e3), N2 = new r(288), P2 = new r(32), F2 = 0, I2 = 0, L2 = u2.i || 0, R2 = 0, z2 = u2.w || 0, B2 = 0; L2 + 2 < f2; ++L2) {
      var V2 = O2(L2), ee2 = L2 & 32767, H2 = T2[V2];
      if (w2[ee2] = H2, T2[V2] = ee2, z2 <= L2) {
        var te2 = f2 - L2;
        if ((F2 > 7e3 || R2 > 24576) && (te2 > 423 || !g)) {
          _ = j(e4, h, 0, k2, N2, P2, I2, R2, B2, L2 - B2, _), R2 = F2 = I2 = 0, B2 = L2;
          for (var U2 = 0; U2 < 286; ++U2) N2[U2] = 0;
          for (var U2 = 0; U2 < 30; ++U2) P2[U2] = 0;
        }
        var ne2 = 2, re2 = 0, ie2 = b2, ae2 = ee2 - H2 & 32767;
        if (te2 > 2 && V2 == O2(L2 - ae2)) for (var oe2 = Math.min(y, te2) - 1, se2 = Math.min(32767, L2), W2 = Math.min(258, te2); ae2 <= se2 && --ie2 && ee2 != H2; ) {
          if (e4[L2 + ne2] == e4[L2 + ne2 - ae2]) {
            for (var ce2 = 0; ce2 < W2 && e4[L2 + ce2] == e4[L2 + ce2 - ae2]; ++ce2) ;
            if (ce2 > ne2) {
              if (ne2 = ce2, re2 = ae2, ce2 > oe2) break;
              for (var le2 = Math.min(ae2, ce2 - 2), ue2 = 0, U2 = 0; U2 < le2; ++U2) {
                var de2 = L2 - ae2 + U2 & 32767, fe2 = de2 - w2[de2] & 32767;
                fe2 > ue2 && (ue2 = fe2, H2 = de2);
              }
            }
          }
          ee2 = H2, H2 = w2[ee2], ae2 += ee2 - H2 & 32767;
        }
        if (re2) {
          k2[R2++] = 268435456 | d[ne2] << 18 | p[re2];
          var pe2 = d[ne2] & 31, me2 = p[re2] & 31;
          I2 += a[pe2] + o[me2], ++N2[257 + pe2], ++P2[me2], z2 = L2 + ne2, ++F2;
        } else k2[R2++] = e4[L2], ++N2[e4[L2]];
      }
    }
    for (L2 = Math.max(L2, z2); L2 < f2; ++L2) k2[R2++] = e4[L2], ++N2[e4[L2]];
    _ = j(e4, h, g, k2, N2, P2, I2, R2, B2, L2 - B2, _), g || (u2.r = _ & 7 | h[_ / 8 | 0] << 3, _ -= 7, u2.h = T2, u2.p = w2, u2.i = L2, u2.w = z2);
  } else {
    for (var L2 = u2.w || 0; L2 < f2 + g; L2 += 65535) {
      var he2 = L2 + 65535;
      he2 >= f2 && (h[_ / 8 | 0] = g, he2 = f2), _ = A(h, _ + 1, e4.subarray(L2, he2));
    }
    u2.i = f2;
  }
  return C(m, 0, c3 + S(_) + l2);
};
var F = function() {
  var e4 = 1, t = 0;
  return {
    p: function(n2) {
      for (var r2 = e4, i2 = t, a2 = n2.length | 0, o2 = 0; o2 != a2; ) {
        for (var s2 = Math.min(o2 + 2655, a2); o2 < s2; ++o2) i2 += r2 += n2[o2];
        r2 = (r2 & 65535) + 15 * (r2 >> 16), i2 = (i2 & 65535) + 15 * (i2 >> 16);
      }
      e4 = r2, t = i2;
    },
    d: function() {
      return e4 %= 65521, t %= 65521, (e4 & 255) << 24 | (e4 & 65280) << 8 | (t & 255) << 8 | t >> 8;
    }
  };
};
var I = function(e4, t, r2, i2, a2) {
  if (!a2 && (a2 = { l: 1 }, t.dictionary)) {
    var o2 = t.dictionary.subarray(-32768), s2 = new n(o2.length + e4.length);
    s2.set(o2), s2.set(e4, o2.length), e4 = s2, a2.w = o2.length;
  }
  return P(e4, t.level == null ? 6 : t.level, t.mem == null ? a2.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e4.length))) * 1.5) : 20 : 12 + t.mem, r2, i2, a2);
};
var L = function(e4, t, n2) {
  for (; n2; ++t) e4[t] = n2, n2 >>>= 8;
};
var R = function(e4, t) {
  var n2 = t.level, r2 = n2 == 0 ? 0 : n2 < 6 ? 1 : n2 == 9 ? 3 : 2;
  if (e4[0] = 120, e4[1] = r2 << 6 | (t.dictionary && 32), e4[1] |= 31 - (e4[0] << 8 | e4[1]) % 31, t.dictionary) {
    var i2 = F();
    i2.p(t.dictionary), L(e4, 2, i2.d());
  }
};
function z(e4, t) {
  t || (t = {});
  var n2 = F();
  n2.p(e4);
  var r2 = I(e4, t, t.dictionary ? 6 : 2, 4);
  return R(r2, t), L(r2, r2.length - 4, n2.d()), r2;
}
var B = typeof TextDecoder < "u" && new TextDecoder();
try {
  B.decode(N, { stream: true });
} catch {
}
function V(e4) {
  if (Array.isArray(e4)) return e4;
}
function ee(e4, t) {
  var n2 = e4 == null ? null : typeof Symbol < "u" && e4[Symbol.iterator] || e4["@@iterator"];
  if (n2 != null) {
    var r2, i2, a2, o2, s2 = [], c3 = true, l2 = false;
    try {
      if (a2 = (n2 = n2.call(e4)).next, t === 0) {
        if (Object(n2) !== n2) return;
        c3 = false;
      } else for (; !(c3 = (r2 = a2.call(n2)).done) && (s2.push(r2.value), s2.length !== t); c3 = true) ;
    } catch (e5) {
      l2 = true, i2 = e5;
    } finally {
      try {
        if (!c3 && n2.return != null && (o2 = n2.return(), Object(o2) !== o2)) return;
      } finally {
        if (l2) throw i2;
      }
    }
    return s2;
  }
}
function H(e4, t) {
  (t == null || t > e4.length) && (t = e4.length);
  for (var n2 = 0, r2 = Array(t); n2 < t; n2++) r2[n2] = e4[n2];
  return r2;
}
function te(e4, t) {
  if (e4) {
    if (typeof e4 == "string") return H(e4, t);
    var n2 = {}.toString.call(e4).slice(8, -1);
    return n2 === "Object" && e4.constructor && (n2 = e4.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(e4) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? H(e4, t) : void 0;
  }
}
function U() {
  throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ne(e4, t) {
  return V(e4) || ee(e4, t) || te(e4, t) || U();
}
function re(e4, t = "utf8") {
  return new TextDecoder(t).decode(e4);
}
var ie = new TextEncoder();
function ae(e4) {
  return ie.encode(e4);
}
var oe = 1024 * 8;
var se = (() => {
  let e4 = new Uint8Array(4), t = new Uint32Array(e4.buffer);
  return !((t[0] = 1) & e4[0]);
})();
var W = {
  int8: globalThis.Int8Array,
  uint8: globalThis.Uint8Array,
  int16: globalThis.Int16Array,
  uint16: globalThis.Uint16Array,
  int32: globalThis.Int32Array,
  uint32: globalThis.Uint32Array,
  uint64: globalThis.BigUint64Array,
  int64: globalThis.BigInt64Array,
  float32: globalThis.Float32Array,
  float64: globalThis.Float64Array
};
var ce = class e2 {
  constructor(t = oe, n2 = {}) {
    __publicField(this, "buffer");
    __publicField(this, "byteLength");
    __publicField(this, "byteOffset");
    __publicField(this, "length");
    __publicField(this, "offset");
    __publicField(this, "lastWrittenByte");
    __publicField(this, "littleEndian");
    __publicField(this, "_data");
    __publicField(this, "_mark");
    __publicField(this, "_marks");
    let r2 = false;
    typeof t == "number" ? t = new ArrayBuffer(t) : (r2 = true, this.lastWrittenByte = t.byteLength);
    let i2 = n2.offset ? n2.offset >>> 0 : 0, a2 = t.byteLength - i2, o2 = i2;
    (ArrayBuffer.isView(t) || t instanceof e2) && (t.byteLength !== t.buffer.byteLength && (o2 = t.byteOffset + i2), t = t.buffer), r2 ? this.lastWrittenByte = a2 : this.lastWrittenByte = 0, this.buffer = t, this.length = a2, this.byteLength = a2, this.byteOffset = o2, this.offset = 0, this.littleEndian = true, this._data = new DataView(this.buffer, o2, a2), this._mark = 0, this._marks = [];
  }
  available(e4 = 1) {
    return this.offset + e4 <= this.length;
  }
  isLittleEndian() {
    return this.littleEndian;
  }
  setLittleEndian() {
    return this.littleEndian = true, this;
  }
  isBigEndian() {
    return !this.littleEndian;
  }
  setBigEndian() {
    return this.littleEndian = false, this;
  }
  skip(e4 = 1) {
    return this.offset += e4, this;
  }
  back(e4 = 1) {
    return this.offset -= e4, this;
  }
  seek(e4) {
    return this.offset = e4, this;
  }
  mark() {
    return this._mark = this.offset, this;
  }
  reset() {
    return this.offset = this._mark, this;
  }
  pushMark() {
    return this._marks.push(this.offset), this;
  }
  popMark() {
    let e4 = this._marks.pop();
    if (e4 === void 0) throw Error("Mark stack empty");
    return this.seek(e4), this;
  }
  rewind() {
    return this.offset = 0, this;
  }
  ensureAvailable(e4 = 1) {
    if (!this.available(e4)) {
      let t = (this.offset + e4) * 2, n2 = new Uint8Array(t);
      n2.set(new Uint8Array(this.buffer)), this.buffer = n2.buffer, this.length = t, this.byteLength = t, this._data = new DataView(this.buffer);
    }
    return this;
  }
  readBoolean() {
    return this.readUint8() !== 0;
  }
  readInt8() {
    return this._data.getInt8(this.offset++);
  }
  readUint8() {
    return this._data.getUint8(this.offset++);
  }
  readByte() {
    return this.readUint8();
  }
  readBytes(e4 = 1) {
    return this.readArray(e4, "uint8");
  }
  readArray(e4, t) {
    let n2 = W[t].BYTES_PER_ELEMENT * e4, r2 = this.byteOffset + this.offset, i2 = this.buffer.slice(r2, r2 + n2);
    if (this.littleEndian === se && t !== "uint8" && t !== "int8") {
      let e5 = new Uint8Array(this.buffer.slice(r2, r2 + n2));
      e5.reverse();
      let i3 = new W[t](e5.buffer);
      return this.offset += n2, i3.reverse(), i3;
    }
    let a2 = new W[t](i2);
    return this.offset += n2, a2;
  }
  readInt16() {
    let e4 = this._data.getInt16(this.offset, this.littleEndian);
    return this.offset += 2, e4;
  }
  readUint16() {
    let e4 = this._data.getUint16(this.offset, this.littleEndian);
    return this.offset += 2, e4;
  }
  readInt32() {
    let e4 = this._data.getInt32(this.offset, this.littleEndian);
    return this.offset += 4, e4;
  }
  readUint32() {
    let e4 = this._data.getUint32(this.offset, this.littleEndian);
    return this.offset += 4, e4;
  }
  readFloat32() {
    let e4 = this._data.getFloat32(this.offset, this.littleEndian);
    return this.offset += 4, e4;
  }
  readFloat64() {
    let e4 = this._data.getFloat64(this.offset, this.littleEndian);
    return this.offset += 8, e4;
  }
  readBigInt64() {
    let e4 = this._data.getBigInt64(this.offset, this.littleEndian);
    return this.offset += 8, e4;
  }
  readBigUint64() {
    let e4 = this._data.getBigUint64(this.offset, this.littleEndian);
    return this.offset += 8, e4;
  }
  readChar() {
    return String.fromCharCode(this.readInt8());
  }
  readChars(e4 = 1) {
    let t = "";
    for (let n2 = 0; n2 < e4; n2++) t += this.readChar();
    return t;
  }
  readUtf8(e4 = 1) {
    return re(this.readBytes(e4));
  }
  decodeText(e4 = 1, t = "utf8") {
    return re(this.readBytes(e4), t);
  }
  writeBoolean(e4) {
    return this.writeUint8(e4 ? 255 : 0), this;
  }
  writeInt8(e4) {
    return this.ensureAvailable(1), this._data.setInt8(this.offset++, e4), this._updateLastWrittenByte(), this;
  }
  writeUint8(e4) {
    return this.ensureAvailable(1), this._data.setUint8(this.offset++, e4), this._updateLastWrittenByte(), this;
  }
  writeByte(e4) {
    return this.writeUint8(e4);
  }
  writeBytes(e4) {
    this.ensureAvailable(e4.length);
    for (let t = 0; t < e4.length; t++) this._data.setUint8(this.offset++, e4[t]);
    return this._updateLastWrittenByte(), this;
  }
  writeInt16(e4) {
    return this.ensureAvailable(2), this._data.setInt16(this.offset, e4, this.littleEndian), this.offset += 2, this._updateLastWrittenByte(), this;
  }
  writeUint16(e4) {
    return this.ensureAvailable(2), this._data.setUint16(this.offset, e4, this.littleEndian), this.offset += 2, this._updateLastWrittenByte(), this;
  }
  writeInt32(e4) {
    return this.ensureAvailable(4), this._data.setInt32(this.offset, e4, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  writeUint32(e4) {
    return this.ensureAvailable(4), this._data.setUint32(this.offset, e4, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  writeFloat32(e4) {
    return this.ensureAvailable(4), this._data.setFloat32(this.offset, e4, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  writeFloat64(e4) {
    return this.ensureAvailable(8), this._data.setFloat64(this.offset, e4, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  writeBigInt64(e4) {
    return this.ensureAvailable(8), this._data.setBigInt64(this.offset, e4, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  writeBigUint64(e4) {
    return this.ensureAvailable(8), this._data.setBigUint64(this.offset, e4, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  writeChar(e4) {
    return this.writeUint8(e4.charCodeAt(0));
  }
  writeChars(e4) {
    for (let t = 0; t < e4.length; t++) this.writeUint8(e4.charCodeAt(t));
    return this;
  }
  writeUtf8(e4) {
    return this.writeBytes(ae(e4));
  }
  toArray() {
    return new Uint8Array(this.buffer, this.byteOffset, this.lastWrittenByte);
  }
  getWrittenByteLength() {
    return this.lastWrittenByte - this.byteOffset;
  }
  _updateLastWrittenByte() {
    this.offset > this.lastWrittenByte && (this.lastWrittenByte = this.offset);
  }
};
var le = 4;
var ue = 0;
var de = 1;
var fe = 2;
function pe(e4) {
  let t = e4.length;
  for (; --t >= 0; ) e4[t] = 0;
}
var me = 0;
var he = 1;
var ge = 2;
var _e = 3;
var ve = 258;
var ye = 29;
var be = 256;
var xe = be + 1 + ye;
var Se = 30;
var Ce = 19;
var we = 2 * xe + 1;
var Te = 15;
var Ee = 16;
var De = 7;
var Oe = 256;
var ke = 16;
var Ae = 17;
var je = 18;
var Me = new Uint8Array([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0
]);
var Ne = new Uint8Array([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13
]);
var Pe = new Uint8Array([
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
  0,
  2,
  3,
  7
]);
var G = new Uint8Array([
  16,
  17,
  18,
  0,
  8,
  7,
  9,
  6,
  10,
  5,
  11,
  4,
  12,
  3,
  13,
  2,
  14,
  1,
  15
]);
var Fe = 512;
var Ie = Array((xe + 2) * 2);
pe(Ie);
var Le = Array(Se * 2);
pe(Le);
var Re = Array(Fe);
pe(Re);
var ze = Array(ve - _e + 1);
pe(ze);
var K = Array(ye);
pe(K);
var Be = Array(Se);
pe(Be);
function Ve(e4, t, n2, r2, i2) {
  this.static_tree = e4, this.extra_bits = t, this.extra_base = n2, this.elems = r2, this.max_length = i2, this.has_stree = e4 && e4.length;
}
var He;
var Ue;
var We;
function Ge(e4, t) {
  this.dyn_tree = e4, this.max_code = 0, this.stat_desc = t;
}
var Ke = (e4) => e4 < 256 ? Re[e4] : Re[256 + (e4 >>> 7)];
var qe = (e4, t) => {
  e4.pending_buf[e4.pending++] = t & 255, e4.pending_buf[e4.pending++] = t >>> 8 & 255;
};
var Je = (e4, t, n2) => {
  e4.bi_valid > Ee - n2 ? (e4.bi_buf |= t << e4.bi_valid & 65535, qe(e4, e4.bi_buf), e4.bi_buf = t >> Ee - e4.bi_valid, e4.bi_valid += n2 - Ee) : (e4.bi_buf |= t << e4.bi_valid & 65535, e4.bi_valid += n2);
};
var Ye = (e4, t, n2) => {
  Je(e4, n2[t * 2], n2[t * 2 + 1]);
};
var Xe = (e4, t) => {
  let n2 = 0;
  do
    n2 |= e4 & 1, e4 >>>= 1, n2 <<= 1;
  while (--t > 0);
  return n2 >>> 1;
};
var Ze = (e4) => {
  e4.bi_valid === 16 ? (qe(e4, e4.bi_buf), e4.bi_buf = 0, e4.bi_valid = 0) : e4.bi_valid >= 8 && (e4.pending_buf[e4.pending++] = e4.bi_buf & 255, e4.bi_buf >>= 8, e4.bi_valid -= 8);
};
var Qe = (e4, t) => {
  let n2 = t.dyn_tree, r2 = t.max_code, i2 = t.stat_desc.static_tree, a2 = t.stat_desc.has_stree, o2 = t.stat_desc.extra_bits, s2 = t.stat_desc.extra_base, c3 = t.stat_desc.max_length, l2, u2, d2, f2, p, m, h = 0;
  for (f2 = 0; f2 <= Te; f2++) e4.bl_count[f2] = 0;
  for (n2[e4.heap[e4.heap_max] * 2 + 1] = 0, l2 = e4.heap_max + 1; l2 < we; l2++) u2 = e4.heap[l2], f2 = n2[n2[u2 * 2 + 1] * 2 + 1] + 1, f2 > c3 && (f2 = c3, h++), n2[u2 * 2 + 1] = f2, !(u2 > r2) && (e4.bl_count[f2]++, p = 0, u2 >= s2 && (p = o2[u2 - s2]), m = n2[u2 * 2], e4.opt_len += m * (f2 + p), a2 && (e4.static_len += m * (i2[u2 * 2 + 1] + p)));
  if (h !== 0) {
    do {
      for (f2 = c3 - 1; e4.bl_count[f2] === 0; ) f2--;
      e4.bl_count[f2]--, e4.bl_count[f2 + 1] += 2, e4.bl_count[c3]--, h -= 2;
    } while (h > 0);
    for (f2 = c3; f2 !== 0; f2--) for (u2 = e4.bl_count[f2]; u2 !== 0; ) d2 = e4.heap[--l2], !(d2 > r2) && (n2[d2 * 2 + 1] !== f2 && (e4.opt_len += (f2 - n2[d2 * 2 + 1]) * n2[d2 * 2], n2[d2 * 2 + 1] = f2), u2--);
  }
};
var $e = (e4, t, n2) => {
  let r2 = Array(Te + 1), i2 = 0, a2, o2;
  for (a2 = 1; a2 <= Te; a2++) i2 = i2 + n2[a2 - 1] << 1, r2[a2] = i2;
  for (o2 = 0; o2 <= t; o2++) {
    let t2 = e4[o2 * 2 + 1];
    t2 !== 0 && (e4[o2 * 2] = Xe(r2[t2]++, t2));
  }
};
var et = () => {
  let e4, t, n2, r2, i2, a2 = Array(Te + 1);
  for (n2 = 0, r2 = 0; r2 < ye - 1; r2++) for (K[r2] = n2, e4 = 0; e4 < 1 << Me[r2]; e4++) ze[n2++] = r2;
  for (ze[n2 - 1] = r2, i2 = 0, r2 = 0; r2 < 16; r2++) for (Be[r2] = i2, e4 = 0; e4 < 1 << Ne[r2]; e4++) Re[i2++] = r2;
  for (i2 >>= 7; r2 < Se; r2++) for (Be[r2] = i2 << 7, e4 = 0; e4 < 1 << Ne[r2] - 7; e4++) Re[256 + i2++] = r2;
  for (t = 0; t <= Te; t++) a2[t] = 0;
  for (e4 = 0; e4 <= 143; ) Ie[e4 * 2 + 1] = 8, e4++, a2[8]++;
  for (; e4 <= 255; ) Ie[e4 * 2 + 1] = 9, e4++, a2[9]++;
  for (; e4 <= 279; ) Ie[e4 * 2 + 1] = 7, e4++, a2[7]++;
  for (; e4 <= 287; ) Ie[e4 * 2 + 1] = 8, e4++, a2[8]++;
  for ($e(Ie, xe + 1, a2), e4 = 0; e4 < Se; e4++) Le[e4 * 2 + 1] = 5, Le[e4 * 2] = Xe(e4, 5);
  He = new Ve(Ie, Me, be + 1, xe, Te), Ue = new Ve(Le, Ne, 0, Se, Te), We = new Ve([], Pe, 0, Ce, De);
};
var tt = (e4) => {
  let t;
  for (t = 0; t < xe; t++) e4.dyn_ltree[t * 2] = 0;
  for (t = 0; t < Se; t++) e4.dyn_dtree[t * 2] = 0;
  for (t = 0; t < Ce; t++) e4.bl_tree[t * 2] = 0;
  e4.dyn_ltree[Oe * 2] = 1, e4.opt_len = e4.static_len = 0, e4.sym_next = e4.matches = 0;
};
var nt = (e4) => {
  e4.bi_valid > 8 ? qe(e4, e4.bi_buf) : e4.bi_valid > 0 && (e4.pending_buf[e4.pending++] = e4.bi_buf), e4.bi_buf = 0, e4.bi_valid = 0;
};
var rt = (e4, t, n2, r2) => {
  let i2 = t * 2, a2 = n2 * 2;
  return e4[i2] < e4[a2] || e4[i2] === e4[a2] && r2[t] <= r2[n2];
};
var it = (e4, t, n2) => {
  let r2 = e4.heap[n2], i2 = n2 << 1;
  for (; i2 <= e4.heap_len && (i2 < e4.heap_len && rt(t, e4.heap[i2 + 1], e4.heap[i2], e4.depth) && i2++, !rt(t, r2, e4.heap[i2], e4.depth)); ) e4.heap[n2] = e4.heap[i2], n2 = i2, i2 <<= 1;
  e4.heap[n2] = r2;
};
var at = (e4, t, n2) => {
  let r2, i2, a2 = 0, o2, s2;
  if (e4.sym_next !== 0) do
    r2 = e4.pending_buf[e4.sym_buf + a2++] & 255, r2 += (e4.pending_buf[e4.sym_buf + a2++] & 255) << 8, i2 = e4.pending_buf[e4.sym_buf + a2++], r2 === 0 ? Ye(e4, i2, t) : (o2 = ze[i2], Ye(e4, o2 + be + 1, t), s2 = Me[o2], s2 !== 0 && (i2 -= K[o2], Je(e4, i2, s2)), r2--, o2 = Ke(r2), Ye(e4, o2, n2), s2 = Ne[o2], s2 !== 0 && (r2 -= Be[o2], Je(e4, r2, s2)));
  while (a2 < e4.sym_next);
  Ye(e4, Oe, t);
};
var ot = (e4, t) => {
  let n2 = t.dyn_tree, r2 = t.stat_desc.static_tree, i2 = t.stat_desc.has_stree, a2 = t.stat_desc.elems, o2, s2, c3 = -1, l2;
  for (e4.heap_len = 0, e4.heap_max = we, o2 = 0; o2 < a2; o2++) n2[o2 * 2] === 0 ? n2[o2 * 2 + 1] = 0 : (e4.heap[++e4.heap_len] = c3 = o2, e4.depth[o2] = 0);
  for (; e4.heap_len < 2; ) l2 = e4.heap[++e4.heap_len] = c3 < 2 ? ++c3 : 0, n2[l2 * 2] = 1, e4.depth[l2] = 0, e4.opt_len--, i2 && (e4.static_len -= r2[l2 * 2 + 1]);
  for (t.max_code = c3, o2 = e4.heap_len >> 1; o2 >= 1; o2--) it(e4, n2, o2);
  l2 = a2;
  do
    o2 = e4.heap[1], e4.heap[1] = e4.heap[e4.heap_len--], it(e4, n2, 1), s2 = e4.heap[1], e4.heap[--e4.heap_max] = o2, e4.heap[--e4.heap_max] = s2, n2[l2 * 2] = n2[o2 * 2] + n2[s2 * 2], e4.depth[l2] = (e4.depth[o2] >= e4.depth[s2] ? e4.depth[o2] : e4.depth[s2]) + 1, n2[o2 * 2 + 1] = n2[s2 * 2 + 1] = l2, e4.heap[1] = l2++, it(e4, n2, 1);
  while (e4.heap_len >= 2);
  e4.heap[--e4.heap_max] = e4.heap[1], Qe(e4, t), $e(n2, c3, e4.bl_count);
};
var st = (e4, t, n2) => {
  let r2, i2 = -1, a2, o2 = t[1], s2 = 0, c3 = 7, l2 = 4;
  for (o2 === 0 && (c3 = 138, l2 = 3), t[(n2 + 1) * 2 + 1] = 65535, r2 = 0; r2 <= n2; r2++) a2 = o2, o2 = t[(r2 + 1) * 2 + 1], !(++s2 < c3 && a2 === o2) && (s2 < l2 ? e4.bl_tree[a2 * 2] += s2 : a2 === 0 ? s2 <= 10 ? e4.bl_tree[Ae * 2]++ : e4.bl_tree[je * 2]++ : (a2 !== i2 && e4.bl_tree[a2 * 2]++, e4.bl_tree[ke * 2]++), s2 = 0, i2 = a2, o2 === 0 ? (c3 = 138, l2 = 3) : a2 === o2 ? (c3 = 6, l2 = 3) : (c3 = 7, l2 = 4));
};
var ct = (e4, t, n2) => {
  let r2, i2 = -1, a2, o2 = t[1], s2 = 0, c3 = 7, l2 = 4;
  for (o2 === 0 && (c3 = 138, l2 = 3), r2 = 0; r2 <= n2; r2++) if (a2 = o2, o2 = t[(r2 + 1) * 2 + 1], !(++s2 < c3 && a2 === o2)) {
    if (s2 < l2) do
      Ye(e4, a2, e4.bl_tree);
    while (--s2 !== 0);
    else a2 === 0 ? s2 <= 10 ? (Ye(e4, Ae, e4.bl_tree), Je(e4, s2 - 3, 3)) : (Ye(e4, je, e4.bl_tree), Je(e4, s2 - 11, 7)) : (a2 !== i2 && (Ye(e4, a2, e4.bl_tree), s2--), Ye(e4, ke, e4.bl_tree), Je(e4, s2 - 3, 2));
    s2 = 0, i2 = a2, o2 === 0 ? (c3 = 138, l2 = 3) : a2 === o2 ? (c3 = 6, l2 = 3) : (c3 = 7, l2 = 4);
  }
};
var lt = (e4) => {
  let t;
  for (st(e4, e4.dyn_ltree, e4.l_desc.max_code), st(e4, e4.dyn_dtree, e4.d_desc.max_code), ot(e4, e4.bl_desc), t = Ce - 1; t >= 3 && e4.bl_tree[G[t] * 2 + 1] === 0; t--) ;
  return e4.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
};
var ut = (e4, t, n2, r2) => {
  let i2;
  for (Je(e4, t - 257, 5), Je(e4, n2 - 1, 5), Je(e4, r2 - 4, 4), i2 = 0; i2 < r2; i2++) Je(e4, e4.bl_tree[G[i2] * 2 + 1], 3);
  ct(e4, e4.dyn_ltree, t - 1), ct(e4, e4.dyn_dtree, n2 - 1);
};
var dt = (e4) => {
  let t = 4093624447, n2;
  for (n2 = 0; n2 <= 31; n2++, t >>>= 1) if (t & 1 && e4.dyn_ltree[n2 * 2] !== 0) return ue;
  if (e4.dyn_ltree[18] !== 0 || e4.dyn_ltree[20] !== 0 || e4.dyn_ltree[26] !== 0) return de;
  for (n2 = 32; n2 < be; n2++) if (e4.dyn_ltree[n2 * 2] !== 0) return de;
  return ue;
};
var ft = false;
var pt = (e4) => {
  ft || (ft = (et(), true)), e4.l_desc = new Ge(e4.dyn_ltree, He), e4.d_desc = new Ge(e4.dyn_dtree, Ue), e4.bl_desc = new Ge(e4.bl_tree, We), e4.bi_buf = 0, e4.bi_valid = 0, tt(e4);
};
var mt = (e4, t, n2, r2) => {
  Je(e4, (me << 1) + (r2 ? 1 : 0), 3), nt(e4), qe(e4, n2), qe(e4, ~n2), n2 && e4.pending_buf.set(e4.window.subarray(t, t + n2), e4.pending), e4.pending += n2;
};
var ht = {
  _tr_init: pt,
  _tr_stored_block: mt,
  _tr_flush_block: (e4, t, n2, r2) => {
    let i2, a2, o2 = 0;
    e4.level > 0 ? (e4.strm.data_type === fe && (e4.strm.data_type = dt(e4)), ot(e4, e4.l_desc), ot(e4, e4.d_desc), o2 = lt(e4), i2 = e4.opt_len + 3 + 7 >>> 3, a2 = e4.static_len + 3 + 7 >>> 3, a2 <= i2 && (i2 = a2)) : i2 = a2 = n2 + 5, n2 + 4 <= i2 && t !== -1 ? mt(e4, t, n2, r2) : e4.strategy === le || a2 === i2 ? (Je(e4, (he << 1) + (r2 ? 1 : 0), 3), at(e4, Ie, Le)) : (Je(e4, (ge << 1) + (r2 ? 1 : 0), 3), ut(e4, e4.l_desc.max_code + 1, e4.d_desc.max_code + 1, o2 + 1), at(e4, e4.dyn_ltree, e4.dyn_dtree)), tt(e4), r2 && nt(e4);
  },
  _tr_tally: (e4, t, n2) => (e4.pending_buf[e4.sym_buf + e4.sym_next++] = t, e4.pending_buf[e4.sym_buf + e4.sym_next++] = t >> 8, e4.pending_buf[e4.sym_buf + e4.sym_next++] = n2, t === 0 ? e4.dyn_ltree[n2 * 2]++ : (e4.matches++, t--, e4.dyn_ltree[(ze[n2] + be + 1) * 2]++, e4.dyn_dtree[Ke(t) * 2]++), e4.sym_next === e4.sym_end),
  _tr_align: (e4) => {
    Je(e4, he << 1, 3), Ye(e4, Oe, Ie), Ze(e4);
  }
};
var gt = (e4, t, n2, r2) => {
  let i2 = e4 & 65535 | 0, a2 = e4 >>> 16 & 65535 | 0, o2 = 0;
  for (; n2 !== 0; ) {
    o2 = n2 > 2e3 ? 2e3 : n2, n2 -= o2;
    do
      i2 = i2 + t[r2++] | 0, a2 = a2 + i2 | 0;
    while (--o2);
    i2 %= 65521, a2 %= 65521;
  }
  return i2 | a2 << 16 | 0;
};
var _t = new Uint32Array((() => {
  let e4, t = [];
  for (var n2 = 0; n2 < 256; n2++) {
    e4 = n2;
    for (var r2 = 0; r2 < 8; r2++) e4 = e4 & 1 ? 3988292384 ^ e4 >>> 1 : e4 >>> 1;
    t[n2] = e4;
  }
  return t;
})());
var vt = (e4, t, n2, r2) => {
  let i2 = _t, a2 = r2 + n2;
  e4 ^= -1;
  for (let n3 = r2; n3 < a2; n3++) e4 = e4 >>> 8 ^ i2[(e4 ^ t[n3]) & 255];
  return e4 ^ -1;
};
var yt = {
  2: "need dictionary",
  1: "stream end",
  0: "",
  "-1": "file error",
  "-2": "stream error",
  "-3": "data error",
  "-4": "insufficient memory",
  "-5": "buffer error",
  "-6": "incompatible version"
};
var bt = {
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  Z_BINARY: 0,
  Z_TEXT: 1,
  Z_UNKNOWN: 2,
  Z_DEFLATED: 8
};
var { _tr_init: xt, _tr_stored_block: St, _tr_flush_block: Ct, _tr_tally: wt, _tr_align: Tt } = ht;
var { Z_NO_FLUSH: Et, Z_PARTIAL_FLUSH: q, Z_FULL_FLUSH: Dt, Z_FINISH: Ot, Z_BLOCK: kt, Z_OK: At, Z_STREAM_END: jt, Z_STREAM_ERROR: Mt, Z_DATA_ERROR: Nt, Z_BUF_ERROR: Pt, Z_DEFAULT_COMPRESSION: Ft, Z_FILTERED: It, Z_HUFFMAN_ONLY: Lt, Z_RLE: Rt, Z_FIXED: zt, Z_DEFAULT_STRATEGY: Bt, Z_UNKNOWN: Vt, Z_DEFLATED: Ht } = bt;
var Ut = 9;
var Wt = 15;
var Gt = 8;
var Kt = 286;
var qt = 30;
var Jt = 19;
var Yt = 2 * Kt + 1;
var Xt = 15;
var J = 3;
var Zt = 258;
var Qt = Zt + J + 1;
var $t = 32;
var en = 42;
var tn = 57;
var nn = 69;
var rn = 73;
var an = 91;
var on = 103;
var sn = 113;
var cn = 666;
var ln = 1;
var un = 2;
var dn = 3;
var fn = 4;
var pn = 3;
var mn = (e4, t) => (e4.msg = yt[t], t);
var hn = (e4) => e4 * 2 - (e4 > 4 ? 9 : 0);
var gn = (e4) => {
  let t = e4.length;
  for (; --t >= 0; ) e4[t] = 0;
};
var _n = (e4) => {
  let t, n2, r2, i2 = e4.w_size;
  t = e4.hash_size, r2 = t;
  do
    n2 = e4.head[--r2], e4.head[r2] = n2 >= i2 ? n2 - i2 : 0;
  while (--t);
  t = i2, r2 = t;
  do
    n2 = e4.prev[--r2], e4.prev[r2] = n2 >= i2 ? n2 - i2 : 0;
  while (--t);
};
var vn = (e4, t, n2) => (t << e4.hash_shift ^ n2) & e4.hash_mask;
var yn = (e4) => {
  let t = e4.state, n2 = t.pending;
  n2 > e4.avail_out && (n2 = e4.avail_out), n2 !== 0 && (e4.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + n2), e4.next_out), e4.next_out += n2, t.pending_out += n2, e4.total_out += n2, e4.avail_out -= n2, t.pending -= n2, t.pending === 0 && (t.pending_out = 0));
};
var bn = (e4, t) => {
  Ct(e4, e4.block_start >= 0 ? e4.block_start : -1, e4.strstart - e4.block_start, t), e4.block_start = e4.strstart, yn(e4.strm);
};
var Y = (e4, t) => {
  e4.pending_buf[e4.pending++] = t;
};
var xn = (e4, t) => {
  e4.pending_buf[e4.pending++] = t >>> 8 & 255, e4.pending_buf[e4.pending++] = t & 255;
};
var Sn = (e4, t, n2, r2) => {
  let i2 = e4.avail_in;
  return i2 > r2 && (i2 = r2), i2 === 0 ? 0 : (e4.avail_in -= i2, t.set(e4.input.subarray(e4.next_in, e4.next_in + i2), n2), e4.state.wrap === 1 ? e4.adler = gt(e4.adler, t, i2, n2) : e4.state.wrap === 2 && (e4.adler = vt(e4.adler, t, i2, n2)), e4.next_in += i2, e4.total_in += i2, i2);
};
var Cn = (e4, t) => {
  let n2 = e4.max_chain_length, r2 = e4.strstart, i2, a2, o2 = e4.prev_length, s2 = e4.nice_match, c3 = e4.strstart > e4.w_size - Qt ? e4.strstart - (e4.w_size - Qt) : 0, l2 = e4.window, u2 = e4.w_mask, d2 = e4.prev, f2 = e4.strstart + Zt, p = l2[r2 + o2 - 1], m = l2[r2 + o2];
  e4.prev_length >= e4.good_match && (n2 >>= 2), s2 > e4.lookahead && (s2 = e4.lookahead);
  do {
    if (i2 = t, l2[i2 + o2] !== m || l2[i2 + o2 - 1] !== p || l2[i2] !== l2[r2] || l2[++i2] !== l2[r2 + 1]) continue;
    r2 += 2, i2++;
    do
      ;
    while (l2[++r2] === l2[++i2] && l2[++r2] === l2[++i2] && l2[++r2] === l2[++i2] && l2[++r2] === l2[++i2] && l2[++r2] === l2[++i2] && l2[++r2] === l2[++i2] && l2[++r2] === l2[++i2] && l2[++r2] === l2[++i2] && r2 < f2);
    if (a2 = Zt - (f2 - r2), r2 = f2 - Zt, a2 > o2) {
      if (e4.match_start = t, o2 = a2, a2 >= s2) break;
      p = l2[r2 + o2 - 1], m = l2[r2 + o2];
    }
  } while ((t = d2[t & u2]) > c3 && --n2 !== 0);
  return o2 <= e4.lookahead ? o2 : e4.lookahead;
};
var wn = (e4) => {
  let t = e4.w_size, n2, r2, i2;
  do {
    if (r2 = e4.window_size - e4.lookahead - e4.strstart, e4.strstart >= t + (t - Qt) && (e4.window.set(e4.window.subarray(t, t + t - r2), 0), e4.match_start -= t, e4.strstart -= t, e4.block_start -= t, e4.insert > e4.strstart && (e4.insert = e4.strstart), _n(e4), r2 += t), e4.strm.avail_in === 0) break;
    if (n2 = Sn(e4.strm, e4.window, e4.strstart + e4.lookahead, r2), e4.lookahead += n2, e4.lookahead + e4.insert >= J) for (i2 = e4.strstart - e4.insert, e4.ins_h = e4.window[i2], e4.ins_h = vn(e4, e4.ins_h, e4.window[i2 + 1]); e4.insert && (e4.ins_h = vn(e4, e4.ins_h, e4.window[i2 + J - 1]), e4.prev[i2 & e4.w_mask] = e4.head[e4.ins_h], e4.head[e4.ins_h] = i2, i2++, e4.insert--, !(e4.lookahead + e4.insert < J)); ) ;
  } while (e4.lookahead < Qt && e4.strm.avail_in !== 0);
};
var Tn = (e4, t) => {
  let n2 = e4.pending_buf_size - 5 > e4.w_size ? e4.w_size : e4.pending_buf_size - 5, r2, i2, a2, o2 = 0, s2 = e4.strm.avail_in;
  do {
    if (r2 = 65535, a2 = e4.bi_valid + 42 >> 3, e4.strm.avail_out < a2 || (a2 = e4.strm.avail_out - a2, i2 = e4.strstart - e4.block_start, r2 > i2 + e4.strm.avail_in && (r2 = i2 + e4.strm.avail_in), r2 > a2 && (r2 = a2), r2 < n2 && (r2 === 0 && t !== Ot || t === Et || r2 !== i2 + e4.strm.avail_in))) break;
    o2 = t === Ot && r2 === i2 + e4.strm.avail_in ? 1 : 0, St(e4, 0, 0, o2), e4.pending_buf[e4.pending - 4] = r2, e4.pending_buf[e4.pending - 3] = r2 >> 8, e4.pending_buf[e4.pending - 2] = ~r2, e4.pending_buf[e4.pending - 1] = ~r2 >> 8, yn(e4.strm), i2 && (i2 > r2 && (i2 = r2), e4.strm.output.set(e4.window.subarray(e4.block_start, e4.block_start + i2), e4.strm.next_out), e4.strm.next_out += i2, e4.strm.avail_out -= i2, e4.strm.total_out += i2, e4.block_start += i2, r2 -= i2), r2 && (Sn(e4.strm, e4.strm.output, e4.strm.next_out, r2), e4.strm.next_out += r2, e4.strm.avail_out -= r2, e4.strm.total_out += r2);
  } while (o2 === 0);
  return s2 -= e4.strm.avail_in, s2 && (s2 >= e4.w_size ? (e4.matches = 2, e4.window.set(e4.strm.input.subarray(e4.strm.next_in - e4.w_size, e4.strm.next_in), 0), e4.strstart = e4.w_size, e4.insert = e4.strstart) : (e4.window_size - e4.strstart <= s2 && (e4.strstart -= e4.w_size, e4.window.set(e4.window.subarray(e4.w_size, e4.w_size + e4.strstart), 0), e4.matches < 2 && e4.matches++, e4.insert > e4.strstart && (e4.insert = e4.strstart)), e4.window.set(e4.strm.input.subarray(e4.strm.next_in - s2, e4.strm.next_in), e4.strstart), e4.strstart += s2, e4.insert += s2 > e4.w_size - e4.insert ? e4.w_size - e4.insert : s2), e4.block_start = e4.strstart), e4.high_water < e4.strstart && (e4.high_water = e4.strstart), o2 ? fn : t !== Et && t !== Ot && e4.strm.avail_in === 0 && e4.strstart === e4.block_start ? un : (a2 = e4.window_size - e4.strstart, e4.strm.avail_in > a2 && e4.block_start >= e4.w_size && (e4.block_start -= e4.w_size, e4.strstart -= e4.w_size, e4.window.set(e4.window.subarray(e4.w_size, e4.w_size + e4.strstart), 0), e4.matches < 2 && e4.matches++, a2 += e4.w_size, e4.insert > e4.strstart && (e4.insert = e4.strstart)), a2 > e4.strm.avail_in && (a2 = e4.strm.avail_in), a2 && (Sn(e4.strm, e4.window, e4.strstart, a2), e4.strstart += a2, e4.insert += a2 > e4.w_size - e4.insert ? e4.w_size - e4.insert : a2), e4.high_water < e4.strstart && (e4.high_water = e4.strstart), a2 = e4.bi_valid + 42 >> 3, a2 = e4.pending_buf_size - a2 > 65535 ? 65535 : e4.pending_buf_size - a2, n2 = a2 > e4.w_size ? e4.w_size : a2, i2 = e4.strstart - e4.block_start, (i2 >= n2 || (i2 || t === Ot) && t !== Et && e4.strm.avail_in === 0 && i2 <= a2) && (r2 = i2 > a2 ? a2 : i2, o2 = t === Ot && e4.strm.avail_in === 0 && r2 === i2 ? 1 : 0, St(e4, e4.block_start, r2, o2), e4.block_start += r2, yn(e4.strm)), o2 ? dn : ln);
};
var En = (e4, t) => {
  let n2, r2;
  for (; ; ) {
    if (e4.lookahead < Qt) {
      if (wn(e4), e4.lookahead < Qt && t === Et) return ln;
      if (e4.lookahead === 0) break;
    }
    if (n2 = 0, e4.lookahead >= J && (e4.ins_h = vn(e4, e4.ins_h, e4.window[e4.strstart + J - 1]), n2 = e4.prev[e4.strstart & e4.w_mask] = e4.head[e4.ins_h], e4.head[e4.ins_h] = e4.strstart), n2 !== 0 && e4.strstart - n2 <= e4.w_size - Qt && (e4.match_length = Cn(e4, n2)), e4.match_length >= J) if (r2 = wt(e4, e4.strstart - e4.match_start, e4.match_length - J), e4.lookahead -= e4.match_length, e4.match_length <= e4.max_lazy_match && e4.lookahead >= J) {
      e4.match_length--;
      do
        e4.strstart++, e4.ins_h = vn(e4, e4.ins_h, e4.window[e4.strstart + J - 1]), n2 = e4.prev[e4.strstart & e4.w_mask] = e4.head[e4.ins_h], e4.head[e4.ins_h] = e4.strstart;
      while (--e4.match_length !== 0);
      e4.strstart++;
    } else e4.strstart += e4.match_length, e4.match_length = 0, e4.ins_h = e4.window[e4.strstart], e4.ins_h = vn(e4, e4.ins_h, e4.window[e4.strstart + 1]);
    else r2 = wt(e4, 0, e4.window[e4.strstart]), e4.lookahead--, e4.strstart++;
    if (r2 && (bn(e4, false), e4.strm.avail_out === 0)) return ln;
  }
  return e4.insert = e4.strstart < J - 1 ? e4.strstart : J - 1, t === Ot ? (bn(e4, true), e4.strm.avail_out === 0 ? dn : fn) : e4.sym_next && (bn(e4, false), e4.strm.avail_out === 0) ? ln : un;
};
var Dn = (e4, t) => {
  let n2, r2, i2;
  for (; ; ) {
    if (e4.lookahead < Qt) {
      if (wn(e4), e4.lookahead < Qt && t === Et) return ln;
      if (e4.lookahead === 0) break;
    }
    if (n2 = 0, e4.lookahead >= J && (e4.ins_h = vn(e4, e4.ins_h, e4.window[e4.strstart + J - 1]), n2 = e4.prev[e4.strstart & e4.w_mask] = e4.head[e4.ins_h], e4.head[e4.ins_h] = e4.strstart), e4.prev_length = e4.match_length, e4.prev_match = e4.match_start, e4.match_length = J - 1, n2 !== 0 && e4.prev_length < e4.max_lazy_match && e4.strstart - n2 <= e4.w_size - Qt && (e4.match_length = Cn(e4, n2), e4.match_length <= 5 && (e4.strategy === It || e4.match_length === J && e4.strstart - e4.match_start > 4096) && (e4.match_length = J - 1)), e4.prev_length >= J && e4.match_length <= e4.prev_length) {
      i2 = e4.strstart + e4.lookahead - J, r2 = wt(e4, e4.strstart - 1 - e4.prev_match, e4.prev_length - J), e4.lookahead -= e4.prev_length - 1, e4.prev_length -= 2;
      do
        ++e4.strstart <= i2 && (e4.ins_h = vn(e4, e4.ins_h, e4.window[e4.strstart + J - 1]), n2 = e4.prev[e4.strstart & e4.w_mask] = e4.head[e4.ins_h], e4.head[e4.ins_h] = e4.strstart);
      while (--e4.prev_length !== 0);
      if (e4.match_available = 0, e4.match_length = J - 1, e4.strstart++, r2 && (bn(e4, false), e4.strm.avail_out === 0)) return ln;
    } else if (e4.match_available) {
      if (r2 = wt(e4, 0, e4.window[e4.strstart - 1]), r2 && bn(e4, false), e4.strstart++, e4.lookahead--, e4.strm.avail_out === 0) return ln;
    } else e4.match_available = 1, e4.strstart++, e4.lookahead--;
  }
  return e4.match_available && (e4.match_available = (r2 = wt(e4, 0, e4.window[e4.strstart - 1]), 0)), e4.insert = e4.strstart < J - 1 ? e4.strstart : J - 1, t === Ot ? (bn(e4, true), e4.strm.avail_out === 0 ? dn : fn) : e4.sym_next && (bn(e4, false), e4.strm.avail_out === 0) ? ln : un;
};
var On = (e4, t) => {
  let n2, r2, i2, a2, o2 = e4.window;
  for (; ; ) {
    if (e4.lookahead <= Zt) {
      if (wn(e4), e4.lookahead <= Zt && t === Et) return ln;
      if (e4.lookahead === 0) break;
    }
    if (e4.match_length = 0, e4.lookahead >= J && e4.strstart > 0 && (i2 = e4.strstart - 1, r2 = o2[i2], r2 === o2[++i2] && r2 === o2[++i2] && r2 === o2[++i2])) {
      a2 = e4.strstart + Zt;
      do
        ;
      while (r2 === o2[++i2] && r2 === o2[++i2] && r2 === o2[++i2] && r2 === o2[++i2] && r2 === o2[++i2] && r2 === o2[++i2] && r2 === o2[++i2] && r2 === o2[++i2] && i2 < a2);
      e4.match_length = Zt - (a2 - i2), e4.match_length > e4.lookahead && (e4.match_length = e4.lookahead);
    }
    if (e4.match_length >= J ? (n2 = wt(e4, 1, e4.match_length - J), e4.lookahead -= e4.match_length, e4.strstart += e4.match_length, e4.match_length = 0) : (n2 = wt(e4, 0, e4.window[e4.strstart]), e4.lookahead--, e4.strstart++), n2 && (bn(e4, false), e4.strm.avail_out === 0)) return ln;
  }
  return e4.insert = 0, t === Ot ? (bn(e4, true), e4.strm.avail_out === 0 ? dn : fn) : e4.sym_next && (bn(e4, false), e4.strm.avail_out === 0) ? ln : un;
};
var kn = (e4, t) => {
  let n2;
  for (; ; ) {
    if (e4.lookahead === 0 && (wn(e4), e4.lookahead === 0)) {
      if (t === Et) return ln;
      break;
    }
    if (e4.match_length = 0, n2 = wt(e4, 0, e4.window[e4.strstart]), e4.lookahead--, e4.strstart++, n2 && (bn(e4, false), e4.strm.avail_out === 0)) return ln;
  }
  return e4.insert = 0, t === Ot ? (bn(e4, true), e4.strm.avail_out === 0 ? dn : fn) : e4.sym_next && (bn(e4, false), e4.strm.avail_out === 0) ? ln : un;
};
function An(e4, t, n2, r2, i2) {
  this.good_length = e4, this.max_lazy = t, this.nice_length = n2, this.max_chain = r2, this.func = i2;
}
var jn = [
  new An(0, 0, 0, 0, Tn),
  new An(4, 4, 8, 4, En),
  new An(4, 5, 16, 8, En),
  new An(4, 6, 32, 32, En),
  new An(4, 4, 16, 16, Dn),
  new An(8, 16, 32, 32, Dn),
  new An(8, 16, 128, 128, Dn),
  new An(8, 32, 128, 256, Dn),
  new An(32, 128, 258, 1024, Dn),
  new An(32, 258, 258, 4096, Dn)
];
var Mn = (e4) => {
  e4.window_size = 2 * e4.w_size, gn(e4.head), e4.max_lazy_match = jn[e4.level].max_lazy, e4.good_match = jn[e4.level].good_length, e4.nice_match = jn[e4.level].nice_length, e4.max_chain_length = jn[e4.level].max_chain, e4.strstart = 0, e4.block_start = 0, e4.lookahead = 0, e4.insert = 0, e4.match_length = e4.prev_length = J - 1, e4.match_available = 0, e4.ins_h = 0;
};
function Nn() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Ht, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(Yt * 2), this.dyn_dtree = new Uint16Array((2 * qt + 1) * 2), this.bl_tree = new Uint16Array((2 * Jt + 1) * 2), gn(this.dyn_ltree), gn(this.dyn_dtree), gn(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(Xt + 1), this.heap = new Uint16Array(2 * Kt + 1), gn(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * Kt + 1), gn(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
var Pn = (e4) => {
  if (!e4) return 1;
  let t = e4.state;
  return !t || t.strm !== e4 || t.status !== en && t.status !== tn && t.status !== nn && t.status !== rn && t.status !== an && t.status !== on && t.status !== sn && t.status !== cn ? 1 : 0;
};
var Fn = (e4) => {
  if (Pn(e4)) return mn(e4, Mt);
  e4.total_in = e4.total_out = 0, e4.data_type = Vt;
  let t = e4.state;
  return t.pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap === 2 ? tn : t.wrap ? en : sn, e4.adler = t.wrap === 2 ? 0 : 1, t.last_flush = -2, xt(t), At;
};
var In = (e4) => {
  let t = Fn(e4);
  return t === At && Mn(e4.state), t;
};
var Ln = (e4, t) => Pn(e4) || e4.state.wrap !== 2 ? Mt : (e4.state.gzhead = t, At);
var Rn = (e4, t, n2, r2, i2, a2) => {
  if (!e4) return Mt;
  let o2 = 1;
  if (t === Ft && (t = 6), r2 < 0 ? (o2 = 0, r2 = -r2) : r2 > 15 && (o2 = 2, r2 -= 16), i2 < 1 || i2 > Ut || n2 !== Ht || r2 < 8 || r2 > 15 || t < 0 || t > 9 || a2 < 0 || a2 > zt || r2 === 8 && o2 !== 1) return mn(e4, Mt);
  r2 === 8 && (r2 = 9);
  let s2 = new Nn();
  return e4.state = s2, s2.strm = e4, s2.status = en, s2.wrap = o2, s2.gzhead = null, s2.w_bits = r2, s2.w_size = 1 << s2.w_bits, s2.w_mask = s2.w_size - 1, s2.hash_bits = i2 + 7, s2.hash_size = 1 << s2.hash_bits, s2.hash_mask = s2.hash_size - 1, s2.hash_shift = ~~((s2.hash_bits + J - 1) / J), s2.window = new Uint8Array(s2.w_size * 2), s2.head = new Uint16Array(s2.hash_size), s2.prev = new Uint16Array(s2.w_size), s2.lit_bufsize = 1 << i2 + 6, s2.pending_buf_size = s2.lit_bufsize * 4, s2.pending_buf = new Uint8Array(s2.pending_buf_size), s2.sym_buf = s2.lit_bufsize, s2.sym_end = (s2.lit_bufsize - 1) * 3, s2.level = t, s2.strategy = a2, s2.method = n2, In(e4);
};
var zn = {
  deflateInit: (e4, t) => Rn(e4, t, Ht, Wt, Gt, Bt),
  deflateInit2: Rn,
  deflateReset: In,
  deflateResetKeep: Fn,
  deflateSetHeader: Ln,
  deflate: (e4, t) => {
    if (Pn(e4) || t > kt || t < 0) return e4 ? mn(e4, Mt) : Mt;
    let n2 = e4.state;
    if (!e4.output || e4.avail_in !== 0 && !e4.input || n2.status === cn && t !== Ot) return mn(e4, e4.avail_out === 0 ? Pt : Mt);
    let r2 = n2.last_flush;
    if (n2.last_flush = t, n2.pending !== 0) {
      if (yn(e4), e4.avail_out === 0) return n2.last_flush = -1, At;
    } else if (e4.avail_in === 0 && hn(t) <= hn(r2) && t !== Ot) return mn(e4, Pt);
    if (n2.status === cn && e4.avail_in !== 0) return mn(e4, Pt);
    if (n2.status === en && n2.wrap === 0 && (n2.status = sn), n2.status === en) {
      let t2 = Ht + (n2.w_bits - 8 << 4) << 8, r3 = -1;
      if (r3 = n2.strategy >= Lt || n2.level < 2 ? 0 : n2.level < 6 ? 1 : n2.level === 6 ? 2 : 3, t2 |= r3 << 6, n2.strstart !== 0 && (t2 |= $t), t2 += 31 - t2 % 31, xn(n2, t2), n2.strstart !== 0 && (xn(n2, e4.adler >>> 16), xn(n2, e4.adler & 65535)), e4.adler = 1, n2.status = sn, yn(e4), n2.pending !== 0) return n2.last_flush = -1, At;
    }
    if (n2.status === tn) {
      if (e4.adler = 0, Y(n2, 31), Y(n2, 139), Y(n2, 8), n2.gzhead) Y(n2, (n2.gzhead.text ? 1 : 0) + (n2.gzhead.hcrc ? 2 : 0) + (n2.gzhead.extra ? 4 : 0) + (n2.gzhead.name ? 8 : 0) + (n2.gzhead.comment ? 16 : 0)), Y(n2, n2.gzhead.time & 255), Y(n2, n2.gzhead.time >> 8 & 255), Y(n2, n2.gzhead.time >> 16 & 255), Y(n2, n2.gzhead.time >> 24 & 255), Y(n2, n2.level === 9 ? 2 : n2.strategy >= Lt || n2.level < 2 ? 4 : 0), Y(n2, n2.gzhead.os & 255), n2.gzhead.extra && n2.gzhead.extra.length && (Y(n2, n2.gzhead.extra.length & 255), Y(n2, n2.gzhead.extra.length >> 8 & 255)), n2.gzhead.hcrc && (e4.adler = vt(e4.adler, n2.pending_buf, n2.pending, 0)), n2.gzindex = 0, n2.status = nn;
      else if (Y(n2, 0), Y(n2, 0), Y(n2, 0), Y(n2, 0), Y(n2, 0), Y(n2, n2.level === 9 ? 2 : n2.strategy >= Lt || n2.level < 2 ? 4 : 0), Y(n2, pn), n2.status = sn, yn(e4), n2.pending !== 0) return n2.last_flush = -1, At;
    }
    if (n2.status === nn) {
      if (n2.gzhead.extra) {
        let t2 = n2.pending, r3 = (n2.gzhead.extra.length & 65535) - n2.gzindex;
        for (; n2.pending + r3 > n2.pending_buf_size; ) {
          let i3 = n2.pending_buf_size - n2.pending;
          if (n2.pending_buf.set(n2.gzhead.extra.subarray(n2.gzindex, n2.gzindex + i3), n2.pending), n2.pending = n2.pending_buf_size, n2.gzhead.hcrc && n2.pending > t2 && (e4.adler = vt(e4.adler, n2.pending_buf, n2.pending - t2, t2)), n2.gzindex += i3, yn(e4), n2.pending !== 0) return n2.last_flush = -1, At;
          t2 = 0, r3 -= i3;
        }
        let i2 = new Uint8Array(n2.gzhead.extra);
        n2.pending_buf.set(i2.subarray(n2.gzindex, n2.gzindex + r3), n2.pending), n2.pending += r3, n2.gzhead.hcrc && n2.pending > t2 && (e4.adler = vt(e4.adler, n2.pending_buf, n2.pending - t2, t2)), n2.gzindex = 0;
      }
      n2.status = rn;
    }
    if (n2.status === rn) {
      if (n2.gzhead.name) {
        let t2 = n2.pending, r3;
        do {
          if (n2.pending === n2.pending_buf_size) {
            if (n2.gzhead.hcrc && n2.pending > t2 && (e4.adler = vt(e4.adler, n2.pending_buf, n2.pending - t2, t2)), yn(e4), n2.pending !== 0) return n2.last_flush = -1, At;
            t2 = 0;
          }
          r3 = n2.gzindex < n2.gzhead.name.length ? n2.gzhead.name.charCodeAt(n2.gzindex++) & 255 : 0, Y(n2, r3);
        } while (r3 !== 0);
        n2.gzhead.hcrc && n2.pending > t2 && (e4.adler = vt(e4.adler, n2.pending_buf, n2.pending - t2, t2)), n2.gzindex = 0;
      }
      n2.status = an;
    }
    if (n2.status === an) {
      if (n2.gzhead.comment) {
        let t2 = n2.pending, r3;
        do {
          if (n2.pending === n2.pending_buf_size) {
            if (n2.gzhead.hcrc && n2.pending > t2 && (e4.adler = vt(e4.adler, n2.pending_buf, n2.pending - t2, t2)), yn(e4), n2.pending !== 0) return n2.last_flush = -1, At;
            t2 = 0;
          }
          r3 = n2.gzindex < n2.gzhead.comment.length ? n2.gzhead.comment.charCodeAt(n2.gzindex++) & 255 : 0, Y(n2, r3);
        } while (r3 !== 0);
        n2.gzhead.hcrc && n2.pending > t2 && (e4.adler = vt(e4.adler, n2.pending_buf, n2.pending - t2, t2));
      }
      n2.status = on;
    }
    if (n2.status === on) {
      if (n2.gzhead.hcrc) {
        if (n2.pending + 2 > n2.pending_buf_size && (yn(e4), n2.pending !== 0)) return n2.last_flush = -1, At;
        Y(n2, e4.adler & 255), Y(n2, e4.adler >> 8 & 255), e4.adler = 0;
      }
      if (n2.status = sn, yn(e4), n2.pending !== 0) return n2.last_flush = -1, At;
    }
    if (e4.avail_in !== 0 || n2.lookahead !== 0 || t !== Et && n2.status !== cn) {
      let r3 = n2.level === 0 ? Tn(n2, t) : n2.strategy === Lt ? kn(n2, t) : n2.strategy === Rt ? On(n2, t) : jn[n2.level].func(n2, t);
      if ((r3 === dn || r3 === fn) && (n2.status = cn), r3 === ln || r3 === dn) return e4.avail_out === 0 && (n2.last_flush = -1), At;
      if (r3 === un && (t === q ? Tt(n2) : t !== kt && (St(n2, 0, 0, false), t === Dt && (gn(n2.head), n2.lookahead === 0 && (n2.strstart = 0, n2.block_start = 0, n2.insert = 0))), yn(e4), e4.avail_out === 0)) return n2.last_flush = -1, At;
    }
    return t === Ot ? n2.wrap <= 0 ? jt : (n2.wrap === 2 ? (Y(n2, e4.adler & 255), Y(n2, e4.adler >> 8 & 255), Y(n2, e4.adler >> 16 & 255), Y(n2, e4.adler >> 24 & 255), Y(n2, e4.total_in & 255), Y(n2, e4.total_in >> 8 & 255), Y(n2, e4.total_in >> 16 & 255), Y(n2, e4.total_in >> 24 & 255)) : (xn(n2, e4.adler >>> 16), xn(n2, e4.adler & 65535)), yn(e4), n2.wrap > 0 && (n2.wrap = -n2.wrap), n2.pending === 0 ? jt : At) : At;
  },
  deflateEnd: (e4) => {
    if (Pn(e4)) return Mt;
    let t = e4.state.status;
    return e4.state = null, t === sn ? mn(e4, Nt) : At;
  },
  deflateSetDictionary: (e4, t) => {
    let n2 = t.length;
    if (Pn(e4)) return Mt;
    let r2 = e4.state, i2 = r2.wrap;
    if (i2 === 2 || i2 === 1 && r2.status !== en || r2.lookahead) return Mt;
    if (i2 === 1 && (e4.adler = gt(e4.adler, t, n2, 0)), r2.wrap = 0, n2 >= r2.w_size) {
      i2 === 0 && (gn(r2.head), r2.strstart = 0, r2.block_start = 0, r2.insert = 0);
      let e5 = new Uint8Array(r2.w_size);
      e5.set(t.subarray(n2 - r2.w_size, n2), 0), t = e5, n2 = r2.w_size;
    }
    let a2 = e4.avail_in, o2 = e4.next_in, s2 = e4.input;
    for (e4.avail_in = n2, e4.next_in = 0, e4.input = t, wn(r2); r2.lookahead >= J; ) {
      let e5 = r2.strstart, t2 = r2.lookahead - (J - 1);
      do
        r2.ins_h = vn(r2, r2.ins_h, r2.window[e5 + J - 1]), r2.prev[e5 & r2.w_mask] = r2.head[r2.ins_h], r2.head[r2.ins_h] = e5, e5++;
      while (--t2);
      r2.strstart = e5, r2.lookahead = J - 1, wn(r2);
    }
    return r2.strstart += r2.lookahead, r2.block_start = r2.strstart, r2.insert = r2.lookahead, r2.lookahead = 0, r2.match_length = r2.prev_length = J - 1, r2.match_available = 0, e4.next_in = o2, e4.input = s2, e4.avail_in = a2, r2.wrap = i2, At;
  },
  deflateInfo: "pako deflate (from Nodeca project)"
};
var Bn = (e4, t) => Object.prototype.hasOwnProperty.call(e4, t);
var Vn = {
  assign: function(e4) {
    let t = Array.prototype.slice.call(arguments, 1);
    for (; t.length; ) {
      let n2 = t.shift();
      if (n2) {
        if (typeof n2 != "object") throw TypeError(n2 + "must be non-object");
        for (let t2 in n2) Bn(n2, t2) && (e4[t2] = n2[t2]);
      }
    }
    return e4;
  },
  flattenChunks: (e4) => {
    let t = 0;
    for (let n3 = 0, r2 = e4.length; n3 < r2; n3++) t += e4[n3].length;
    let n2 = new Uint8Array(t);
    for (let t2 = 0, r2 = 0, i2 = e4.length; t2 < i2; t2++) {
      let i3 = e4[t2];
      n2.set(i3, r2), r2 += i3.length;
    }
    return n2;
  }
};
var Hn = true;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  Hn = false;
}
var Un = new Uint8Array(256);
for (let e4 = 0; e4 < 256; e4++) Un[e4] = e4 >= 252 ? 6 : e4 >= 248 ? 5 : e4 >= 240 ? 4 : e4 >= 224 ? 3 : e4 >= 192 ? 2 : 1;
Un[254] = Un[254] = 1;
var Wn = (e4) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) return new TextEncoder().encode(e4);
  let t, n2, r2, i2, a2, o2 = e4.length, s2 = 0;
  for (i2 = 0; i2 < o2; i2++) n2 = e4.charCodeAt(i2), (n2 & 64512) == 55296 && i2 + 1 < o2 && (r2 = e4.charCodeAt(i2 + 1), (r2 & 64512) == 56320 && (n2 = 65536 + (n2 - 55296 << 10) + (r2 - 56320), i2++)), s2 += n2 < 128 ? 1 : n2 < 2048 ? 2 : n2 < 65536 ? 3 : 4;
  for (t = new Uint8Array(s2), a2 = 0, i2 = 0; a2 < s2; i2++) n2 = e4.charCodeAt(i2), (n2 & 64512) == 55296 && i2 + 1 < o2 && (r2 = e4.charCodeAt(i2 + 1), (r2 & 64512) == 56320 && (n2 = 65536 + (n2 - 55296 << 10) + (r2 - 56320), i2++)), n2 < 128 ? t[a2++] = n2 : n2 < 2048 ? (t[a2++] = 192 | n2 >>> 6, t[a2++] = 128 | n2 & 63) : n2 < 65536 ? (t[a2++] = 224 | n2 >>> 12, t[a2++] = 128 | n2 >>> 6 & 63, t[a2++] = 128 | n2 & 63) : (t[a2++] = 240 | n2 >>> 18, t[a2++] = 128 | n2 >>> 12 & 63, t[a2++] = 128 | n2 >>> 6 & 63, t[a2++] = 128 | n2 & 63);
  return t;
};
var Gn = (e4, t) => {
  if (t < 65534 && e4.subarray && Hn) return String.fromCharCode.apply(null, e4.length === t ? e4 : e4.subarray(0, t));
  let n2 = "";
  for (let r2 = 0; r2 < t; r2++) n2 += String.fromCharCode(e4[r2]);
  return n2;
};
var Kn = {
  string2buf: Wn,
  buf2string: (e4, t) => {
    let n2 = t || e4.length;
    if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) return new TextDecoder().decode(e4.subarray(0, t));
    let r2, i2, a2 = Array(n2 * 2);
    for (i2 = 0, r2 = 0; r2 < n2; ) {
      let t2 = e4[r2++];
      if (t2 < 128) {
        a2[i2++] = t2;
        continue;
      }
      let o2 = Un[t2];
      if (o2 > 4) {
        a2[i2++] = 65533, r2 += o2 - 1;
        continue;
      }
      for (t2 &= o2 === 2 ? 31 : o2 === 3 ? 15 : 7; o2 > 1 && r2 < n2; ) t2 = t2 << 6 | e4[r2++] & 63, o2--;
      if (o2 > 1) {
        a2[i2++] = 65533;
        continue;
      }
      t2 < 65536 ? a2[i2++] = t2 : (t2 -= 65536, a2[i2++] = 55296 | t2 >> 10 & 1023, a2[i2++] = 56320 | t2 & 1023);
    }
    return Gn(a2, i2);
  },
  utf8border: (e4, t) => {
    t || (t = e4.length), t > e4.length && (t = e4.length);
    let n2 = t - 1;
    for (; n2 >= 0 && (e4[n2] & 192) == 128; ) n2--;
    return n2 < 0 || n2 === 0 ? t : n2 + Un[e4[n2]] > t ? n2 : t;
  }
};
function qn() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var Jn = qn;
var Yn = Object.prototype.toString;
var { Z_NO_FLUSH: Xn, Z_SYNC_FLUSH: Zn, Z_FULL_FLUSH: Qn, Z_FINISH: $n, Z_OK: er, Z_STREAM_END: tr, Z_DEFAULT_COMPRESSION: nr, Z_DEFAULT_STRATEGY: rr, Z_DEFLATED: ir } = bt;
function ar(e4) {
  this.options = Vn.assign({
    level: nr,
    method: ir,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: rr
  }, e4 || {});
  let t = this.options;
  t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new Jn(), this.strm.avail_out = 0;
  let n2 = zn.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
  if (n2 !== er) throw Error(yt[n2]);
  if (t.header && zn.deflateSetHeader(this.strm, t.header), t.dictionary) {
    let e5;
    if (e5 = typeof t.dictionary == "string" ? Kn.string2buf(t.dictionary) : Yn.call(t.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(t.dictionary) : t.dictionary, n2 = zn.deflateSetDictionary(this.strm, e5), n2 !== er) throw Error(yt[n2]);
    this._dict_set = true;
  }
}
ar.prototype.push = function(e4, t) {
  let n2 = this.strm, r2 = this.options.chunkSize, i2, a2;
  if (this.ended) return false;
  for (a2 = t === ~~t ? t : t === true ? $n : Xn, typeof e4 == "string" ? n2.input = Kn.string2buf(e4) : Yn.call(e4) === "[object ArrayBuffer]" ? n2.input = new Uint8Array(e4) : n2.input = e4, n2.next_in = 0, n2.avail_in = n2.input.length; ; ) {
    if (n2.avail_out === 0 && (n2.output = new Uint8Array(r2), n2.next_out = 0, n2.avail_out = r2), (a2 === Zn || a2 === Qn) && n2.avail_out <= 6) {
      this.onData(n2.output.subarray(0, n2.next_out)), n2.avail_out = 0;
      continue;
    }
    if (i2 = zn.deflate(n2, a2), i2 === tr) return n2.next_out > 0 && this.onData(n2.output.subarray(0, n2.next_out)), i2 = zn.deflateEnd(this.strm), this.onEnd(i2), this.ended = true, i2 === er;
    if (n2.avail_out === 0) {
      this.onData(n2.output);
      continue;
    }
    if (a2 > 0 && n2.next_out > 0) {
      this.onData(n2.output.subarray(0, n2.next_out)), n2.avail_out = 0;
      continue;
    }
    if (n2.avail_in === 0) break;
  }
  return true;
}, ar.prototype.onData = function(e4) {
  this.chunks.push(e4);
}, ar.prototype.onEnd = function(e4) {
  e4 === er && (this.result = Vn.flattenChunks(this.chunks)), this.chunks = [], this.err = e4, this.msg = this.strm.msg;
};
function or(e4, t) {
  let n2 = new ar(t);
  if (n2.push(e4, true), n2.err) throw n2.msg || yt[n2.err];
  return n2.result;
}
function sr(e4, t) {
  return t || (t = {}), t.raw = true, or(e4, t);
}
function cr(e4, t) {
  return t || (t = {}), t.gzip = true, or(e4, t);
}
var lr = {
  Deflate: ar,
  deflate: or,
  deflateRaw: sr,
  gzip: cr,
  constants: bt
};
var ur = 16209;
var dr = 16191;
var fr = function(e4, t) {
  let n2, r2, i2, a2, o2, s2, c3, l2, u2, d2, f2, p, m, h, g, _, v, y, b2, x2, S2, C2, w2, T2, E2 = e4.state;
  n2 = e4.next_in, w2 = e4.input, r2 = n2 + (e4.avail_in - 5), i2 = e4.next_out, T2 = e4.output, a2 = i2 - (t - e4.avail_out), o2 = i2 + (e4.avail_out - 257), s2 = E2.dmax, c3 = E2.wsize, l2 = E2.whave, u2 = E2.wnext, d2 = E2.window, f2 = E2.hold, p = E2.bits, m = E2.lencode, h = E2.distcode, g = (1 << E2.lenbits) - 1, _ = (1 << E2.distbits) - 1;
  top: do {
    p < 15 && (f2 += w2[n2++] << p, p += 8, f2 += w2[n2++] << p, p += 8), v = m[f2 & g];
    dolen: for (; ; ) {
      if (y = v >>> 24, f2 >>>= y, p -= y, y = v >>> 16 & 255, y === 0) T2[i2++] = v & 65535;
      else if (y & 16) {
        b2 = v & 65535, y &= 15, y && (p < y && (f2 += w2[n2++] << p, p += 8), b2 += f2 & (1 << y) - 1, f2 >>>= y, p -= y), p < 15 && (f2 += w2[n2++] << p, p += 8, f2 += w2[n2++] << p, p += 8), v = h[f2 & _];
        dodist: for (; ; ) {
          if (y = v >>> 24, f2 >>>= y, p -= y, y = v >>> 16 & 255, y & 16) {
            if (x2 = v & 65535, y &= 15, p < y && (f2 += w2[n2++] << p, p += 8, p < y && (f2 += w2[n2++] << p, p += 8)), x2 += f2 & (1 << y) - 1, x2 > s2) {
              e4.msg = "invalid distance too far back", E2.mode = ur;
              break top;
            }
            if (f2 >>>= y, p -= y, y = i2 - a2, x2 > y) {
              if (y = x2 - y, y > l2 && E2.sane) {
                e4.msg = "invalid distance too far back", E2.mode = ur;
                break top;
              }
              if (S2 = 0, C2 = d2, u2 === 0) {
                if (S2 += c3 - y, y < b2) {
                  b2 -= y;
                  do
                    T2[i2++] = d2[S2++];
                  while (--y);
                  S2 = i2 - x2, C2 = T2;
                }
              } else if (u2 < y) {
                if (S2 += c3 + u2 - y, y -= u2, y < b2) {
                  b2 -= y;
                  do
                    T2[i2++] = d2[S2++];
                  while (--y);
                  if (S2 = 0, u2 < b2) {
                    y = u2, b2 -= y;
                    do
                      T2[i2++] = d2[S2++];
                    while (--y);
                    S2 = i2 - x2, C2 = T2;
                  }
                }
              } else if (S2 += u2 - y, y < b2) {
                b2 -= y;
                do
                  T2[i2++] = d2[S2++];
                while (--y);
                S2 = i2 - x2, C2 = T2;
              }
              for (; b2 > 2; ) T2[i2++] = C2[S2++], T2[i2++] = C2[S2++], T2[i2++] = C2[S2++], b2 -= 3;
              b2 && (T2[i2++] = C2[S2++], b2 > 1 && (T2[i2++] = C2[S2++]));
            } else {
              S2 = i2 - x2;
              do
                T2[i2++] = T2[S2++], T2[i2++] = T2[S2++], T2[i2++] = T2[S2++], b2 -= 3;
              while (b2 > 2);
              b2 && (T2[i2++] = T2[S2++], b2 > 1 && (T2[i2++] = T2[S2++]));
            }
          } else if (y & 64) {
            e4.msg = "invalid distance code", E2.mode = ur;
            break top;
          } else {
            v = h[(v & 65535) + (f2 & (1 << y) - 1)];
            continue dodist;
          }
          break;
        }
      } else if (!(y & 64)) {
        v = m[(v & 65535) + (f2 & (1 << y) - 1)];
        continue dolen;
      } else if (y & 32) {
        E2.mode = dr;
        break top;
      } else {
        e4.msg = "invalid literal/length code", E2.mode = ur;
        break top;
      }
      break;
    }
  } while (n2 < r2 && i2 < o2);
  b2 = p >> 3, n2 -= b2, p -= b2 << 3, f2 &= (1 << p) - 1, e4.next_in = n2, e4.next_out = i2, e4.avail_in = n2 < r2 ? 5 + (r2 - n2) : 5 - (n2 - r2), e4.avail_out = i2 < o2 ? 257 + (o2 - i2) : 257 - (i2 - o2), E2.hold = f2, E2.bits = p;
};
var pr = 15;
var mr = 852;
var hr = 592;
var gr = 0;
var _r = 1;
var vr = 2;
var yr = new Uint16Array([
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]);
var br = new Uint8Array([
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
]);
var xr = new Uint16Array([
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]);
var Sr = new Uint8Array([
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]);
var Cr = (e4, t, n2, r2, i2, a2, o2, s2) => {
  let c3 = s2.bits, l2 = 0, u2 = 0, d2 = 0, f2 = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0, y, b2, x2, S2, C2, w2 = null, T2, E2 = new Uint16Array(pr + 1), D2 = new Uint16Array(pr + 1), O2 = null, k2, A2, j2;
  for (l2 = 0; l2 <= pr; l2++) E2[l2] = 0;
  for (u2 = 0; u2 < r2; u2++) E2[t[n2 + u2]]++;
  for (p = c3, f2 = pr; f2 >= 1 && E2[f2] === 0; f2--) ;
  if (p > f2 && (p = f2), f2 === 0) return i2[a2++] = 20971520, i2[a2++] = 20971520, s2.bits = 1, 0;
  for (d2 = 1; d2 < f2 && E2[d2] === 0; d2++) ;
  for (p < d2 && (p = d2), g = 1, l2 = 1; l2 <= pr; l2++) if (g <<= 1, g -= E2[l2], g < 0) return -1;
  if (g > 0 && (e4 === gr || f2 !== 1)) return -1;
  for (D2[1] = 0, l2 = 1; l2 < pr; l2++) D2[l2 + 1] = D2[l2] + E2[l2];
  for (u2 = 0; u2 < r2; u2++) t[n2 + u2] !== 0 && (o2[D2[t[n2 + u2]]++] = u2);
  if (e4 === gr ? (w2 = O2 = o2, T2 = 20) : e4 === _r ? (w2 = yr, O2 = br, T2 = 257) : (w2 = xr, O2 = Sr, T2 = 0), v = 0, u2 = 0, l2 = d2, C2 = a2, m = p, h = 0, x2 = -1, _ = 1 << p, S2 = _ - 1, e4 === _r && _ > mr || e4 === vr && _ > hr) return 1;
  for (; ; ) {
    k2 = l2 - h, o2[u2] + 1 < T2 ? (A2 = 0, j2 = o2[u2]) : o2[u2] >= T2 ? (A2 = O2[o2[u2] - T2], j2 = w2[o2[u2] - T2]) : (A2 = 96, j2 = 0), y = 1 << l2 - h, b2 = 1 << m, d2 = b2;
    do
      b2 -= y, i2[C2 + (v >> h) + b2] = k2 << 24 | A2 << 16 | j2 | 0;
    while (b2 !== 0);
    for (y = 1 << l2 - 1; v & y; ) y >>= 1;
    if (y === 0 ? v = 0 : (v &= y - 1, v += y), u2++, --E2[l2] === 0) {
      if (l2 === f2) break;
      l2 = t[n2 + o2[u2]];
    }
    if (l2 > p && (v & S2) !== x2) {
      for (h === 0 && (h = p), C2 += d2, m = l2 - h, g = 1 << m; m + h < f2 && (g -= E2[m + h], !(g <= 0)); ) m++, g <<= 1;
      if (_ += 1 << m, e4 === _r && _ > mr || e4 === vr && _ > hr) return 1;
      x2 = v & S2, i2[x2] = p << 24 | m << 16 | C2 - a2 | 0;
    }
  }
  return v !== 0 && (i2[C2 + v] = l2 - h << 24 | 4194304), s2.bits = p, 0;
};
var wr = 0;
var Tr = 1;
var Er = 2;
var { Z_FINISH: Dr, Z_BLOCK: Or, Z_TREES: kr, Z_OK: Ar, Z_STREAM_END: jr, Z_NEED_DICT: Mr, Z_STREAM_ERROR: Nr, Z_DATA_ERROR: Pr, Z_MEM_ERROR: Fr, Z_BUF_ERROR: Ir, Z_DEFLATED: Lr } = bt;
var Rr = 16180;
var zr = 16181;
var Br = 16182;
var Vr = 16183;
var Hr = 16184;
var Ur = 16185;
var Wr = 16186;
var Gr = 16187;
var Kr = 16188;
var qr = 16189;
var Jr = 16190;
var Yr = 16191;
var Xr = 16192;
var Zr = 16193;
var Qr = 16194;
var $r = 16195;
var ei = 16196;
var ti = 16197;
var ni = 16198;
var ri = 16199;
var ii = 16200;
var ai = 16201;
var oi = 16202;
var si = 16203;
var ci = 16204;
var li = 16205;
var ui = 16206;
var di = 16207;
var fi = 16208;
var pi = 16209;
var mi = 16210;
var hi = 16211;
var gi = 852;
var _i = 592;
var vi = 15;
var yi = (e4) => (e4 >>> 24 & 255) + (e4 >>> 8 & 65280) + ((e4 & 65280) << 8) + ((e4 & 255) << 24);
function bi() {
  this.strm = null, this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
var xi = (e4) => {
  if (!e4) return 1;
  let t = e4.state;
  return !t || t.strm !== e4 || t.mode < Rr || t.mode > hi ? 1 : 0;
};
var Si = (e4) => {
  if (xi(e4)) return Nr;
  let t = e4.state;
  return e4.total_in = e4.total_out = t.total = 0, e4.msg = "", t.wrap && (e4.adler = t.wrap & 1), t.mode = Rr, t.last = 0, t.havedict = 0, t.flags = -1, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new Int32Array(gi), t.distcode = t.distdyn = new Int32Array(_i), t.sane = 1, t.back = -1, Ar;
};
var Ci = (e4) => {
  if (xi(e4)) return Nr;
  let t = e4.state;
  return t.wsize = 0, t.whave = 0, t.wnext = 0, Si(e4);
};
var wi = (e4, t) => {
  let n2;
  if (xi(e4)) return Nr;
  let r2 = e4.state;
  return t < 0 ? (n2 = 0, t = -t) : (n2 = (t >> 4) + 5, t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? Nr : (r2.window !== null && r2.wbits !== t && (r2.window = null), r2.wrap = n2, r2.wbits = t, Ci(e4));
};
var Ti = (e4, t) => {
  if (!e4) return Nr;
  let n2 = new bi();
  e4.state = n2, n2.strm = e4, n2.window = null, n2.mode = Rr;
  let r2 = wi(e4, t);
  return r2 !== Ar && (e4.state = null), r2;
};
var Ei = (e4) => Ti(e4, vi);
var Di = true;
var Oi;
var ki;
var Ai = (e4) => {
  if (Di) {
    Oi = new Int32Array(512), ki = new Int32Array(32);
    let t = 0;
    for (; t < 144; ) e4.lens[t++] = 8;
    for (; t < 256; ) e4.lens[t++] = 9;
    for (; t < 280; ) e4.lens[t++] = 7;
    for (; t < 288; ) e4.lens[t++] = 8;
    for (Cr(Tr, e4.lens, 0, 288, Oi, 0, e4.work, { bits: 9 }), t = 0; t < 32; ) e4.lens[t++] = 5;
    Cr(Er, e4.lens, 0, 32, ki, 0, e4.work, { bits: 5 }), Di = false;
  }
  e4.lencode = Oi, e4.lenbits = 9, e4.distcode = ki, e4.distbits = 5;
};
var ji = (e4, t, n2, r2) => {
  let i2, a2 = e4.state;
  return a2.window === null && (a2.wsize = 1 << a2.wbits, a2.wnext = 0, a2.whave = 0, a2.window = new Uint8Array(a2.wsize)), r2 >= a2.wsize ? (a2.window.set(t.subarray(n2 - a2.wsize, n2), 0), a2.wnext = 0, a2.whave = a2.wsize) : (i2 = a2.wsize - a2.wnext, i2 > r2 && (i2 = r2), a2.window.set(t.subarray(n2 - r2, n2 - r2 + i2), a2.wnext), r2 -= i2, r2 ? (a2.window.set(t.subarray(n2 - r2, n2), 0), a2.wnext = r2, a2.whave = a2.wsize) : (a2.wnext += i2, a2.wnext === a2.wsize && (a2.wnext = 0), a2.whave < a2.wsize && (a2.whave += i2))), 0;
};
var Mi = {
  inflateReset: Ci,
  inflateReset2: wi,
  inflateResetKeep: Si,
  inflateInit: Ei,
  inflateInit2: Ti,
  inflate: (e4, t) => {
    let n2, r2, i2, a2, o2, s2, c3, l2, u2, d2, f2, p, m, h, g = 0, _, v, y, b2, x2, S2, C2, w2, T2 = new Uint8Array(4), E2, D2, O2 = new Uint8Array([
      16,
      17,
      18,
      0,
      8,
      7,
      9,
      6,
      10,
      5,
      11,
      4,
      12,
      3,
      13,
      2,
      14,
      1,
      15
    ]);
    if (xi(e4) || !e4.output || !e4.input && e4.avail_in !== 0) return Nr;
    n2 = e4.state, n2.mode === Yr && (n2.mode = Xr), o2 = e4.next_out, i2 = e4.output, c3 = e4.avail_out, a2 = e4.next_in, r2 = e4.input, s2 = e4.avail_in, l2 = n2.hold, u2 = n2.bits, d2 = s2, f2 = c3, w2 = Ar;
    inf_leave: for (; ; ) switch (n2.mode) {
      case Rr:
        if (n2.wrap === 0) {
          n2.mode = Xr;
          break;
        }
        for (; u2 < 16; ) {
          if (s2 === 0) break inf_leave;
          s2--, l2 += r2[a2++] << u2, u2 += 8;
        }
        if (n2.wrap & 2 && l2 === 35615) {
          n2.wbits === 0 && (n2.wbits = 15), n2.check = 0, T2[0] = l2 & 255, T2[1] = l2 >>> 8 & 255, n2.check = vt(n2.check, T2, 2, 0), l2 = 0, u2 = 0, n2.mode = zr;
          break;
        }
        if (n2.head && (n2.head.done = false), !(n2.wrap & 1) || (((l2 & 255) << 8) + (l2 >> 8)) % 31) {
          e4.msg = "incorrect header check", n2.mode = pi;
          break;
        }
        if ((l2 & 15) !== Lr) {
          e4.msg = "unknown compression method", n2.mode = pi;
          break;
        }
        if (l2 >>>= 4, u2 -= 4, C2 = (l2 & 15) + 8, n2.wbits === 0 && (n2.wbits = C2), C2 > 15 || C2 > n2.wbits) {
          e4.msg = "invalid window size", n2.mode = pi;
          break;
        }
        n2.dmax = 1 << n2.wbits, n2.flags = 0, e4.adler = n2.check = 1, n2.mode = l2 & 512 ? qr : Yr, l2 = 0, u2 = 0;
        break;
      case zr:
        for (; u2 < 16; ) {
          if (s2 === 0) break inf_leave;
          s2--, l2 += r2[a2++] << u2, u2 += 8;
        }
        if (n2.flags = l2, (n2.flags & 255) !== Lr) {
          e4.msg = "unknown compression method", n2.mode = pi;
          break;
        }
        if (n2.flags & 57344) {
          e4.msg = "unknown header flags set", n2.mode = pi;
          break;
        }
        n2.head && (n2.head.text = l2 >> 8 & 1), n2.flags & 512 && n2.wrap & 4 && (T2[0] = l2 & 255, T2[1] = l2 >>> 8 & 255, n2.check = vt(n2.check, T2, 2, 0)), l2 = 0, u2 = 0, n2.mode = Br;
      case Br:
        for (; u2 < 32; ) {
          if (s2 === 0) break inf_leave;
          s2--, l2 += r2[a2++] << u2, u2 += 8;
        }
        n2.head && (n2.head.time = l2), n2.flags & 512 && n2.wrap & 4 && (T2[0] = l2 & 255, T2[1] = l2 >>> 8 & 255, T2[2] = l2 >>> 16 & 255, T2[3] = l2 >>> 24 & 255, n2.check = vt(n2.check, T2, 4, 0)), l2 = 0, u2 = 0, n2.mode = Vr;
      case Vr:
        for (; u2 < 16; ) {
          if (s2 === 0) break inf_leave;
          s2--, l2 += r2[a2++] << u2, u2 += 8;
        }
        n2.head && (n2.head.xflags = l2 & 255, n2.head.os = l2 >> 8), n2.flags & 512 && n2.wrap & 4 && (T2[0] = l2 & 255, T2[1] = l2 >>> 8 & 255, n2.check = vt(n2.check, T2, 2, 0)), l2 = 0, u2 = 0, n2.mode = Hr;
      case Hr:
        if (n2.flags & 1024) {
          for (; u2 < 16; ) {
            if (s2 === 0) break inf_leave;
            s2--, l2 += r2[a2++] << u2, u2 += 8;
          }
          n2.length = l2, n2.head && (n2.head.extra_len = l2), n2.flags & 512 && n2.wrap & 4 && (T2[0] = l2 & 255, T2[1] = l2 >>> 8 & 255, n2.check = vt(n2.check, T2, 2, 0)), l2 = 0, u2 = 0;
        } else n2.head && (n2.head.extra = null);
        n2.mode = Ur;
      case Ur:
        if (n2.flags & 1024 && (p = n2.length, p > s2 && (p = s2), p && (n2.head && (C2 = n2.head.extra_len - n2.length, n2.head.extra || (n2.head.extra = new Uint8Array(n2.head.extra_len)), n2.head.extra.set(r2.subarray(a2, a2 + p), C2)), n2.flags & 512 && n2.wrap & 4 && (n2.check = vt(n2.check, r2, p, a2)), s2 -= p, a2 += p, n2.length -= p), n2.length)) break inf_leave;
        n2.length = 0, n2.mode = Wr;
      case Wr:
        if (n2.flags & 2048) {
          if (s2 === 0) break inf_leave;
          p = 0;
          do
            C2 = r2[a2 + p++], n2.head && C2 && n2.length < 65536 && (n2.head.name += String.fromCharCode(C2));
          while (C2 && p < s2);
          if (n2.flags & 512 && n2.wrap & 4 && (n2.check = vt(n2.check, r2, p, a2)), s2 -= p, a2 += p, C2) break inf_leave;
        } else n2.head && (n2.head.name = null);
        n2.length = 0, n2.mode = Gr;
      case Gr:
        if (n2.flags & 4096) {
          if (s2 === 0) break inf_leave;
          p = 0;
          do
            C2 = r2[a2 + p++], n2.head && C2 && n2.length < 65536 && (n2.head.comment += String.fromCharCode(C2));
          while (C2 && p < s2);
          if (n2.flags & 512 && n2.wrap & 4 && (n2.check = vt(n2.check, r2, p, a2)), s2 -= p, a2 += p, C2) break inf_leave;
        } else n2.head && (n2.head.comment = null);
        n2.mode = Kr;
      case Kr:
        if (n2.flags & 512) {
          for (; u2 < 16; ) {
            if (s2 === 0) break inf_leave;
            s2--, l2 += r2[a2++] << u2, u2 += 8;
          }
          if (n2.wrap & 4 && l2 !== (n2.check & 65535)) {
            e4.msg = "header crc mismatch", n2.mode = pi;
            break;
          }
          l2 = 0, u2 = 0;
        }
        n2.head && (n2.head.hcrc = n2.flags >> 9 & 1, n2.head.done = true), e4.adler = n2.check = 0, n2.mode = Yr;
        break;
      case qr:
        for (; u2 < 32; ) {
          if (s2 === 0) break inf_leave;
          s2--, l2 += r2[a2++] << u2, u2 += 8;
        }
        e4.adler = n2.check = yi(l2), l2 = 0, u2 = 0, n2.mode = Jr;
      case Jr:
        if (n2.havedict === 0) return e4.next_out = o2, e4.avail_out = c3, e4.next_in = a2, e4.avail_in = s2, n2.hold = l2, n2.bits = u2, Mr;
        e4.adler = n2.check = 1, n2.mode = Yr;
      case Yr:
        if (t === Or || t === kr) break inf_leave;
      case Xr:
        if (n2.last) {
          l2 >>>= u2 & 7, u2 -= u2 & 7, n2.mode = ui;
          break;
        }
        for (; u2 < 3; ) {
          if (s2 === 0) break inf_leave;
          s2--, l2 += r2[a2++] << u2, u2 += 8;
        }
        switch (n2.last = l2 & 1, l2 >>>= 1, --u2, l2 & 3) {
          case 0:
            n2.mode = Zr;
            break;
          case 1:
            if (Ai(n2), n2.mode = ri, t === kr) {
              l2 >>>= 2, u2 -= 2;
              break inf_leave;
            }
            break;
          case 2:
            n2.mode = ei;
            break;
          case 3:
            e4.msg = "invalid block type", n2.mode = pi;
        }
        l2 >>>= 2, u2 -= 2;
        break;
      case Zr:
        for (l2 >>>= u2 & 7, u2 -= u2 & 7; u2 < 32; ) {
          if (s2 === 0) break inf_leave;
          s2--, l2 += r2[a2++] << u2, u2 += 8;
        }
        if ((l2 & 65535) != (l2 >>> 16 ^ 65535)) {
          e4.msg = "invalid stored block lengths", n2.mode = pi;
          break;
        }
        if (n2.length = l2 & 65535, l2 = 0, u2 = 0, n2.mode = Qr, t === kr) break inf_leave;
      case Qr:
        n2.mode = $r;
      case $r:
        if (p = n2.length, p) {
          if (p > s2 && (p = s2), p > c3 && (p = c3), p === 0) break inf_leave;
          i2.set(r2.subarray(a2, a2 + p), o2), s2 -= p, a2 += p, c3 -= p, o2 += p, n2.length -= p;
          break;
        }
        n2.mode = Yr;
        break;
      case ei:
        for (; u2 < 14; ) {
          if (s2 === 0) break inf_leave;
          s2--, l2 += r2[a2++] << u2, u2 += 8;
        }
        if (n2.nlen = (l2 & 31) + 257, l2 >>>= 5, u2 -= 5, n2.ndist = (l2 & 31) + 1, l2 >>>= 5, u2 -= 5, n2.ncode = (l2 & 15) + 4, l2 >>>= 4, u2 -= 4, n2.nlen > 286 || n2.ndist > 30) {
          e4.msg = "too many length or distance symbols", n2.mode = pi;
          break;
        }
        n2.have = 0, n2.mode = ti;
      case ti:
        for (; n2.have < n2.ncode; ) {
          for (; u2 < 3; ) {
            if (s2 === 0) break inf_leave;
            s2--, l2 += r2[a2++] << u2, u2 += 8;
          }
          n2.lens[O2[n2.have++]] = l2 & 7, l2 >>>= 3, u2 -= 3;
        }
        for (; n2.have < 19; ) n2.lens[O2[n2.have++]] = 0;
        if (n2.lencode = n2.lendyn, n2.lenbits = 7, E2 = { bits: n2.lenbits }, w2 = Cr(wr, n2.lens, 0, 19, n2.lencode, 0, n2.work, E2), n2.lenbits = E2.bits, w2) {
          e4.msg = "invalid code lengths set", n2.mode = pi;
          break;
        }
        n2.have = 0, n2.mode = ni;
      case ni:
        for (; n2.have < n2.nlen + n2.ndist; ) {
          for (; g = n2.lencode[l2 & (1 << n2.lenbits) - 1], _ = g >>> 24, v = g >>> 16 & 255, y = g & 65535, !(_ <= u2); ) {
            if (s2 === 0) break inf_leave;
            s2--, l2 += r2[a2++] << u2, u2 += 8;
          }
          if (y < 16) l2 >>>= _, u2 -= _, n2.lens[n2.have++] = y;
          else {
            if (y === 16) {
              for (D2 = _ + 2; u2 < D2; ) {
                if (s2 === 0) break inf_leave;
                s2--, l2 += r2[a2++] << u2, u2 += 8;
              }
              if (l2 >>>= _, u2 -= _, n2.have === 0) {
                e4.msg = "invalid bit length repeat", n2.mode = pi;
                break;
              }
              C2 = n2.lens[n2.have - 1], p = 3 + (l2 & 3), l2 >>>= 2, u2 -= 2;
            } else if (y === 17) {
              for (D2 = _ + 3; u2 < D2; ) {
                if (s2 === 0) break inf_leave;
                s2--, l2 += r2[a2++] << u2, u2 += 8;
              }
              l2 >>>= _, u2 -= _, C2 = 0, p = 3 + (l2 & 7), l2 >>>= 3, u2 -= 3;
            } else {
              for (D2 = _ + 7; u2 < D2; ) {
                if (s2 === 0) break inf_leave;
                s2--, l2 += r2[a2++] << u2, u2 += 8;
              }
              l2 >>>= _, u2 -= _, C2 = 0, p = 11 + (l2 & 127), l2 >>>= 7, u2 -= 7;
            }
            if (n2.have + p > n2.nlen + n2.ndist) {
              e4.msg = "invalid bit length repeat", n2.mode = pi;
              break;
            }
            for (; p--; ) n2.lens[n2.have++] = C2;
          }
        }
        if (n2.mode === pi) break;
        if (n2.lens[256] === 0) {
          e4.msg = "invalid code -- missing end-of-block", n2.mode = pi;
          break;
        }
        if (n2.lenbits = 9, E2 = { bits: n2.lenbits }, w2 = Cr(Tr, n2.lens, 0, n2.nlen, n2.lencode, 0, n2.work, E2), n2.lenbits = E2.bits, w2) {
          e4.msg = "invalid literal/lengths set", n2.mode = pi;
          break;
        }
        if (n2.distbits = 6, n2.distcode = n2.distdyn, E2 = { bits: n2.distbits }, w2 = Cr(Er, n2.lens, n2.nlen, n2.ndist, n2.distcode, 0, n2.work, E2), n2.distbits = E2.bits, w2) {
          e4.msg = "invalid distances set", n2.mode = pi;
          break;
        }
        if (n2.mode = ri, t === kr) break inf_leave;
      case ri:
        n2.mode = ii;
      case ii:
        if (s2 >= 6 && c3 >= 258) {
          e4.next_out = o2, e4.avail_out = c3, e4.next_in = a2, e4.avail_in = s2, n2.hold = l2, n2.bits = u2, fr(e4, f2), o2 = e4.next_out, i2 = e4.output, c3 = e4.avail_out, a2 = e4.next_in, r2 = e4.input, s2 = e4.avail_in, l2 = n2.hold, u2 = n2.bits, n2.mode === Yr && (n2.back = -1);
          break;
        }
        for (n2.back = 0; g = n2.lencode[l2 & (1 << n2.lenbits) - 1], _ = g >>> 24, v = g >>> 16 & 255, y = g & 65535, !(_ <= u2); ) {
          if (s2 === 0) break inf_leave;
          s2--, l2 += r2[a2++] << u2, u2 += 8;
        }
        if (v && !(v & 240)) {
          for (b2 = _, x2 = v, S2 = y; g = n2.lencode[S2 + ((l2 & (1 << b2 + x2) - 1) >> b2)], _ = g >>> 24, v = g >>> 16 & 255, y = g & 65535, !(b2 + _ <= u2); ) {
            if (s2 === 0) break inf_leave;
            s2--, l2 += r2[a2++] << u2, u2 += 8;
          }
          l2 >>>= b2, u2 -= b2, n2.back += b2;
        }
        if (l2 >>>= _, u2 -= _, n2.back += _, n2.length = y, v === 0) {
          n2.mode = li;
          break;
        }
        if (v & 32) {
          n2.back = -1, n2.mode = Yr;
          break;
        }
        if (v & 64) {
          e4.msg = "invalid literal/length code", n2.mode = pi;
          break;
        }
        n2.extra = v & 15, n2.mode = ai;
      case ai:
        if (n2.extra) {
          for (D2 = n2.extra; u2 < D2; ) {
            if (s2 === 0) break inf_leave;
            s2--, l2 += r2[a2++] << u2, u2 += 8;
          }
          n2.length += l2 & (1 << n2.extra) - 1, l2 >>>= n2.extra, u2 -= n2.extra, n2.back += n2.extra;
        }
        n2.was = n2.length, n2.mode = oi;
      case oi:
        for (; g = n2.distcode[l2 & (1 << n2.distbits) - 1], _ = g >>> 24, v = g >>> 16 & 255, y = g & 65535, !(_ <= u2); ) {
          if (s2 === 0) break inf_leave;
          s2--, l2 += r2[a2++] << u2, u2 += 8;
        }
        if (!(v & 240)) {
          for (b2 = _, x2 = v, S2 = y; g = n2.distcode[S2 + ((l2 & (1 << b2 + x2) - 1) >> b2)], _ = g >>> 24, v = g >>> 16 & 255, y = g & 65535, !(b2 + _ <= u2); ) {
            if (s2 === 0) break inf_leave;
            s2--, l2 += r2[a2++] << u2, u2 += 8;
          }
          l2 >>>= b2, u2 -= b2, n2.back += b2;
        }
        if (l2 >>>= _, u2 -= _, n2.back += _, v & 64) {
          e4.msg = "invalid distance code", n2.mode = pi;
          break;
        }
        n2.offset = y, n2.extra = v & 15, n2.mode = si;
      case si:
        if (n2.extra) {
          for (D2 = n2.extra; u2 < D2; ) {
            if (s2 === 0) break inf_leave;
            s2--, l2 += r2[a2++] << u2, u2 += 8;
          }
          n2.offset += l2 & (1 << n2.extra) - 1, l2 >>>= n2.extra, u2 -= n2.extra, n2.back += n2.extra;
        }
        if (n2.offset > n2.dmax) {
          e4.msg = "invalid distance too far back", n2.mode = pi;
          break;
        }
        n2.mode = ci;
      case ci:
        if (c3 === 0) break inf_leave;
        if (p = f2 - c3, n2.offset > p) {
          if (p = n2.offset - p, p > n2.whave && n2.sane) {
            e4.msg = "invalid distance too far back", n2.mode = pi;
            break;
          }
          p > n2.wnext ? (p -= n2.wnext, m = n2.wsize - p) : m = n2.wnext - p, p > n2.length && (p = n2.length), h = n2.window;
        } else h = i2, m = o2 - n2.offset, p = n2.length;
        p > c3 && (p = c3), c3 -= p, n2.length -= p;
        do
          i2[o2++] = h[m++];
        while (--p);
        n2.length === 0 && (n2.mode = ii);
        break;
      case li:
        if (c3 === 0) break inf_leave;
        i2[o2++] = n2.length, c3--, n2.mode = ii;
        break;
      case ui:
        if (n2.wrap) {
          for (; u2 < 32; ) {
            if (s2 === 0) break inf_leave;
            s2--, l2 |= r2[a2++] << u2, u2 += 8;
          }
          if (f2 -= c3, e4.total_out += f2, n2.total += f2, n2.wrap & 4 && f2 && (e4.adler = n2.check = n2.flags ? vt(n2.check, i2, f2, o2 - f2) : gt(n2.check, i2, f2, o2 - f2)), f2 = c3, n2.wrap & 4 && (n2.flags ? l2 : yi(l2)) !== n2.check) {
            e4.msg = "incorrect data check", n2.mode = pi;
            break;
          }
          l2 = 0, u2 = 0;
        }
        n2.mode = di;
      case di:
        if (n2.wrap && n2.flags) {
          for (; u2 < 32; ) {
            if (s2 === 0) break inf_leave;
            s2--, l2 += r2[a2++] << u2, u2 += 8;
          }
          if (n2.wrap & 4 && l2 !== (n2.total & 4294967295)) {
            e4.msg = "incorrect length check", n2.mode = pi;
            break;
          }
          l2 = 0, u2 = 0;
        }
        n2.mode = fi;
      case fi:
        w2 = jr;
        break inf_leave;
      case pi:
        w2 = Pr;
        break inf_leave;
      case mi:
        return Fr;
      case hi:
      default:
        return Nr;
    }
    return e4.next_out = o2, e4.avail_out = c3, e4.next_in = a2, e4.avail_in = s2, n2.hold = l2, n2.bits = u2, (n2.wsize || f2 !== e4.avail_out && n2.mode < pi && (n2.mode < ui || t !== Dr)) && ji(e4, e4.output, e4.next_out, f2 - e4.avail_out), d2 -= e4.avail_in, f2 -= e4.avail_out, e4.total_in += d2, e4.total_out += f2, n2.total += f2, n2.wrap & 4 && f2 && (e4.adler = n2.check = n2.flags ? vt(n2.check, i2, f2, e4.next_out - f2) : gt(n2.check, i2, f2, e4.next_out - f2)), e4.data_type = n2.bits + (n2.last ? 64 : 0) + (n2.mode === Yr ? 128 : 0) + (n2.mode === ri || n2.mode === Qr ? 256 : 0), (d2 === 0 && f2 === 0 || t === Dr) && w2 === Ar && (w2 = Ir), w2;
  },
  inflateEnd: (e4) => {
    if (xi(e4)) return Nr;
    let t = e4.state;
    return t.window && (t.window = null), e4.state = null, Ar;
  },
  inflateGetHeader: (e4, t) => {
    if (xi(e4)) return Nr;
    let n2 = e4.state;
    return n2.wrap & 2 ? (n2.head = t, t.done = false, Ar) : Nr;
  },
  inflateSetDictionary: (e4, t) => {
    let n2 = t.length, r2, i2, a2;
    return xi(e4) || (r2 = e4.state, r2.wrap !== 0 && r2.mode !== Jr) ? Nr : r2.mode === Jr && (i2 = 1, i2 = gt(i2, t, n2, 0), i2 !== r2.check) ? Pr : (a2 = ji(e4, t, n2, n2), a2 ? (r2.mode = mi, Fr) : (r2.havedict = 1, Ar));
  },
  inflateInfo: "pako inflate (from Nodeca project)"
};
function Ni() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
}
var Pi = Ni;
var Fi = Object.prototype.toString;
var { Z_NO_FLUSH: Ii, Z_FINISH: Li, Z_OK: Ri, Z_STREAM_END: zi, Z_NEED_DICT: Bi, Z_STREAM_ERROR: Vi, Z_DATA_ERROR: Hi, Z_MEM_ERROR: Ui } = bt;
function Wi(e4) {
  this.options = Vn.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, e4 || {});
  let t = this.options;
  t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, t.windowBits === 0 && (t.windowBits = -15)), t.windowBits >= 0 && t.windowBits < 16 && !(e4 && e4.windowBits) && (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && (t.windowBits & 15 || (t.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new Jn(), this.strm.avail_out = 0;
  let n2 = Mi.inflateInit2(this.strm, t.windowBits);
  if (n2 !== Ri || (this.header = new Pi(), Mi.inflateGetHeader(this.strm, this.header), t.dictionary && (typeof t.dictionary == "string" ? t.dictionary = Kn.string2buf(t.dictionary) : Fi.call(t.dictionary) === "[object ArrayBuffer]" && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (n2 = Mi.inflateSetDictionary(this.strm, t.dictionary), n2 !== Ri)))) throw Error(yt[n2]);
}
Wi.prototype.push = function(e4, t) {
  let n2 = this.strm, r2 = this.options.chunkSize, i2 = this.options.dictionary, a2, o2, s2;
  if (this.ended) return false;
  for (o2 = t === ~~t ? t : t === true ? Li : Ii, Fi.call(e4) === "[object ArrayBuffer]" ? n2.input = new Uint8Array(e4) : n2.input = e4, n2.next_in = 0, n2.avail_in = n2.input.length; ; ) {
    for (n2.avail_out === 0 && (n2.output = new Uint8Array(r2), n2.next_out = 0, n2.avail_out = r2), a2 = Mi.inflate(n2, o2), a2 === Bi && i2 && (a2 = Mi.inflateSetDictionary(n2, i2), a2 === Ri ? a2 = Mi.inflate(n2, o2) : a2 === Hi && (a2 = Bi)); n2.avail_in > 0 && a2 === zi && n2.state.wrap > 0 && e4[n2.next_in] !== 0; ) Mi.inflateReset(n2), a2 = Mi.inflate(n2, o2);
    switch (a2) {
      case Vi:
      case Hi:
      case Bi:
      case Ui:
        return this.onEnd(a2), this.ended = true, false;
    }
    if (s2 = n2.avail_out, n2.next_out && (n2.avail_out === 0 || a2 === zi)) if (this.options.to === "string") {
      let e5 = Kn.utf8border(n2.output, n2.next_out), t2 = n2.next_out - e5, i3 = Kn.buf2string(n2.output, e5);
      n2.next_out = t2, n2.avail_out = r2 - t2, t2 && n2.output.set(n2.output.subarray(e5, e5 + t2), 0), this.onData(i3);
    } else this.onData(n2.output.length === n2.next_out ? n2.output : n2.output.subarray(0, n2.next_out));
    if (!(a2 === Ri && s2 === 0)) {
      if (a2 === zi) return a2 = Mi.inflateEnd(this.strm), this.onEnd(a2), this.ended = true, true;
      if (n2.avail_in === 0) break;
    }
  }
  return true;
}, Wi.prototype.onData = function(e4) {
  this.chunks.push(e4);
}, Wi.prototype.onEnd = function(e4) {
  e4 === Ri && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = Vn.flattenChunks(this.chunks)), this.chunks = [], this.err = e4, this.msg = this.strm.msg;
};
function Gi(e4, t) {
  let n2 = new Wi(t);
  if (n2.push(e4), n2.err) throw n2.msg || yt[n2.err];
  return n2.result;
}
function Ki(e4, t) {
  return t || (t = {}), t.raw = true, Gi(e4, t);
}
var qi = {
  Inflate: Wi,
  inflate: Gi,
  inflateRaw: Ki,
  ungzip: Gi,
  constants: bt
};
var { Deflate: Ji, deflate: Yi, deflateRaw: Xi, gzip: Zi } = lr;
var { Inflate: Qi, inflate: $i, inflateRaw: ea, ungzip: ta } = qi;
var na = Qi;
var ra = $i;
var ia = [];
for (let e4 = 0; e4 < 256; e4++) {
  let t = e4;
  for (let e5 = 0; e5 < 8; e5++) t & 1 ? t = 3988292384 ^ t >>> 1 : t >>>= 1;
  ia[e4] = t;
}
var aa = 4294967295;
function oa(e4, t, n2) {
  let r2 = e4;
  for (let e5 = 0; e5 < n2; e5++) r2 = ia[(r2 ^ t[e5]) & 255] ^ r2 >>> 8;
  return r2;
}
function sa(e4, t) {
  return (oa(aa, e4, t) ^ aa) >>> 0;
}
function ca(e4, t, n2) {
  let r2 = e4.readUint32(), i2 = sa(new Uint8Array(e4.buffer, e4.byteOffset + e4.offset - t - 4, t), t);
  if (i2 !== r2) throw Error(`CRC mismatch for chunk ${n2}. Expected ${r2}, found ${i2}`);
}
function la(e4, t, n2) {
  for (let r2 = 0; r2 < n2; r2++) t[r2] = e4[r2];
}
function ua(e4, t, n2, r2) {
  let i2 = 0;
  for (; i2 < r2; i2++) t[i2] = e4[i2];
  for (; i2 < n2; i2++) t[i2] = e4[i2] + t[i2 - r2] & 255;
}
function da(e4, t, n2, r2) {
  let i2 = 0;
  if (n2.length === 0) for (; i2 < r2; i2++) t[i2] = e4[i2];
  else for (; i2 < r2; i2++) t[i2] = e4[i2] + n2[i2] & 255;
}
function fa(e4, t, n2, r2, i2) {
  let a2 = 0;
  if (n2.length === 0) {
    for (; a2 < i2; a2++) t[a2] = e4[a2];
    for (; a2 < r2; a2++) t[a2] = e4[a2] + (t[a2 - i2] >> 1) & 255;
  } else {
    for (; a2 < i2; a2++) t[a2] = e4[a2] + (n2[a2] >> 1) & 255;
    for (; a2 < r2; a2++) t[a2] = e4[a2] + (t[a2 - i2] + n2[a2] >> 1) & 255;
  }
}
function pa(e4, t, n2, r2, i2) {
  let a2 = 0;
  if (n2.length === 0) {
    for (; a2 < i2; a2++) t[a2] = e4[a2];
    for (; a2 < r2; a2++) t[a2] = e4[a2] + t[a2 - i2] & 255;
  } else {
    for (; a2 < i2; a2++) t[a2] = e4[a2] + n2[a2] & 255;
    for (; a2 < r2; a2++) t[a2] = e4[a2] + ma(t[a2 - i2], n2[a2], n2[a2 - i2]) & 255;
  }
}
function ma(e4, t, n2) {
  let r2 = e4 + t - n2, i2 = Math.abs(r2 - e4), a2 = Math.abs(r2 - t), o2 = Math.abs(r2 - n2);
  return i2 <= a2 && i2 <= o2 ? e4 : a2 <= o2 ? t : n2;
}
function ha(e4, t, n2, r2, i2, a2) {
  switch (e4) {
    case 0:
      la(t, n2, i2);
      break;
    case 1:
      ua(t, n2, i2, a2);
      break;
    case 2:
      da(t, n2, r2, i2);
      break;
    case 3:
      fa(t, n2, r2, i2, a2);
      break;
    case 4:
      pa(t, n2, r2, i2, a2);
      break;
    default:
      throw Error(`Unsupported filter: ${e4}`);
  }
}
var ga = new Uint16Array([255]);
var _a = new Uint8Array(ga.buffer)[0] === 255;
function va(e4) {
  let { data: t, width: n2, height: r2, channels: i2, depth: a2 } = e4, o2 = [
    {
      x: 0,
      y: 0,
      xStep: 8,
      yStep: 8
    },
    {
      x: 4,
      y: 0,
      xStep: 8,
      yStep: 8
    },
    {
      x: 0,
      y: 4,
      xStep: 4,
      yStep: 8
    },
    {
      x: 2,
      y: 0,
      xStep: 4,
      yStep: 4
    },
    {
      x: 0,
      y: 2,
      xStep: 2,
      yStep: 4
    },
    {
      x: 1,
      y: 0,
      xStep: 2,
      yStep: 2
    },
    {
      x: 0,
      y: 1,
      xStep: 1,
      yStep: 2
    }
  ], s2 = Math.ceil(a2 / 8) * i2, c3 = new Uint8Array(r2 * n2 * s2), l2 = 0;
  for (let e5 = 0; e5 < 7; e5++) {
    let i3 = o2[e5], a3 = Math.ceil((n2 - i3.x) / i3.xStep), u2 = Math.ceil((r2 - i3.y) / i3.yStep);
    if (a3 <= 0 || u2 <= 0) continue;
    let d2 = a3 * s2, f2 = new Uint8Array(d2);
    for (let e6 = 0; e6 < u2; e6++) {
      let o3 = t[l2++], u3 = t.subarray(l2, l2 + d2);
      l2 += d2;
      let p = new Uint8Array(d2);
      ha(o3, u3, p, f2, d2, s2), f2.set(p);
      for (let t2 = 0; t2 < a3; t2++) {
        let a4 = i3.x + t2 * i3.xStep, o4 = i3.y + e6 * i3.yStep;
        if (!(a4 >= n2 || o4 >= r2)) for (let e7 = 0; e7 < s2; e7++) c3[(o4 * n2 + a4) * s2 + e7] = p[t2 * s2 + e7];
      }
    }
  }
  if (a2 === 16) {
    let e5 = new Uint16Array(c3.buffer);
    if (_a) for (let t2 = 0; t2 < e5.length; t2++) e5[t2] = ya(e5[t2]);
    return e5;
  } else return c3;
}
function ya(e4) {
  return (e4 & 255) << 8 | e4 >> 8 & 255;
}
var ba = new Uint16Array([255]);
var xa = new Uint8Array(ba.buffer)[0] === 255;
var Sa = new Uint8Array();
function Ca(e4) {
  let { data: t, width: n2, height: r2, channels: i2, depth: a2 } = e4, o2 = Math.ceil(a2 / 8) * i2, s2 = Math.ceil(a2 / 8 * i2 * n2), c3 = new Uint8Array(r2 * s2), l2 = Sa, u2 = 0, d2, f2;
  for (let e5 = 0; e5 < r2; e5++) {
    switch (d2 = t.subarray(u2 + 1, u2 + 1 + s2), f2 = c3.subarray(e5 * s2, (e5 + 1) * s2), t[u2]) {
      case 0:
        la(d2, f2, s2);
        break;
      case 1:
        ua(d2, f2, s2, o2);
        break;
      case 2:
        da(d2, f2, l2, s2);
        break;
      case 3:
        fa(d2, f2, l2, s2, o2);
        break;
      case 4:
        pa(d2, f2, l2, s2, o2);
        break;
      default:
        throw Error(`Unsupported filter: ${t[u2]}`);
    }
    l2 = f2, u2 += s2 + 1;
  }
  if (a2 === 16) {
    let e5 = new Uint16Array(c3.buffer);
    if (xa) for (let t2 = 0; t2 < e5.length; t2++) e5[t2] = wa(e5[t2]);
    return e5;
  } else return c3;
}
function wa(e4) {
  return (e4 & 255) << 8 | e4 >> 8 & 255;
}
var Ta = Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10);
function Ea(e4) {
  if (!Da(e4.readBytes(Ta.length))) throw Error("wrong PNG signature");
}
function Da(e4) {
  if (e4.length < Ta.length) return false;
  for (let t = 0; t < Ta.length; t++) if (e4[t] !== Ta[t]) return false;
  return true;
}
var Oa = "tEXt";
var ka = 0;
var Aa = new TextDecoder("latin1");
function ja(e4) {
  if (Na(e4), e4.length === 0 || e4.length > 79) throw Error("keyword length must be between 1 and 79");
}
var Ma = /^[\u0000-\u00FF]*$/;
function Na(e4) {
  if (!Ma.test(e4)) throw Error("invalid latin1 text");
}
function Pa(e4, t, n2) {
  let r2 = Fa(t);
  e4[r2] = Ia(t, n2 - r2.length - 1);
}
function Fa(e4) {
  for (e4.mark(); e4.readByte() !== ka; ) ;
  let t = e4.offset;
  e4.reset();
  let n2 = Aa.decode(e4.readBytes(t - e4.offset - 1));
  return e4.skip(1), ja(n2), n2;
}
function Ia(e4, t) {
  return Aa.decode(e4.readBytes(t));
}
var La = {
  UNKNOWN: -1,
  GREYSCALE: 0,
  TRUECOLOUR: 2,
  INDEXED_COLOUR: 3,
  GREYSCALE_ALPHA: 4,
  TRUECOLOUR_ALPHA: 6
};
var Ra = {
  UNKNOWN: -1,
  DEFLATE: 0
};
var za = {
  UNKNOWN: -1,
  ADAPTIVE: 0
};
var Ba = {
  UNKNOWN: -1,
  NO_INTERLACE: 0,
  ADAM7: 1
};
var Va = {
  NONE: 0,
  BACKGROUND: 1,
  PREVIOUS: 2
};
var Ha = {
  SOURCE: 0,
  OVER: 1
};
var Ua = class extends ce {
  constructor(e4, t = {}) {
    super(e4);
    __publicField(this, "_checkCrc");
    __publicField(this, "_inflator");
    __publicField(this, "_png");
    __publicField(this, "_apng");
    __publicField(this, "_end");
    __publicField(this, "_hasPalette");
    __publicField(this, "_palette");
    __publicField(this, "_hasTransparency");
    __publicField(this, "_transparency");
    __publicField(this, "_compressionMethod");
    __publicField(this, "_filterMethod");
    __publicField(this, "_interlaceMethod");
    __publicField(this, "_colorType");
    __publicField(this, "_isAnimated");
    __publicField(this, "_numberOfFrames");
    __publicField(this, "_numberOfPlays");
    __publicField(this, "_frames");
    __publicField(this, "_writingDataChunks");
    let { checkCrc: n2 = false } = t;
    this._checkCrc = n2, this._inflator = new na(), this._png = {
      width: -1,
      height: -1,
      channels: -1,
      data: new Uint8Array(),
      depth: 1,
      text: {}
    }, this._apng = {
      width: -1,
      height: -1,
      channels: -1,
      depth: 1,
      numberOfFrames: 1,
      numberOfPlays: 0,
      text: {},
      frames: []
    }, this._end = false, this._hasPalette = false, this._palette = [], this._hasTransparency = false, this._transparency = new Uint16Array(), this._compressionMethod = Ra.UNKNOWN, this._filterMethod = za.UNKNOWN, this._interlaceMethod = Ba.UNKNOWN, this._colorType = La.UNKNOWN, this._isAnimated = false, this._numberOfFrames = 1, this._numberOfPlays = 0, this._frames = [], this._writingDataChunks = false, this.setBigEndian();
  }
  decode() {
    for (Ea(this); !this._end; ) {
      let e4 = this.readUint32(), t = this.readChars(4);
      this.decodeChunk(e4, t);
    }
    return this.decodeImage(), this._png;
  }
  decodeApng() {
    for (Ea(this); !this._end; ) {
      let e4 = this.readUint32(), t = this.readChars(4);
      this.decodeApngChunk(e4, t);
    }
    return this.decodeApngImage(), this._apng;
  }
  decodeChunk(e4, t) {
    let n2 = this.offset;
    switch (t) {
      case "IHDR":
        this.decodeIHDR();
        break;
      case "PLTE":
        this.decodePLTE(e4);
        break;
      case "IDAT":
        this.decodeIDAT(e4);
        break;
      case "IEND":
        this._end = true;
        break;
      case "tRNS":
        this.decodetRNS(e4);
        break;
      case "iCCP":
        this.decodeiCCP(e4);
        break;
      case Oa:
        Pa(this._png.text, this, e4);
        break;
      case "pHYs":
        this.decodepHYs();
        break;
      default:
        this.skip(e4);
        break;
    }
    if (this.offset - n2 !== e4) throw Error(`Length mismatch while decoding chunk ${t}`);
    this._checkCrc ? ca(this, e4 + 4, t) : this.skip(4);
  }
  decodeApngChunk(e4, t) {
    let n2 = this.offset;
    switch (t !== "fdAT" && t !== "IDAT" && this._writingDataChunks && this.pushDataToFrame(), t) {
      case "acTL":
        this.decodeACTL();
        break;
      case "fcTL":
        this.decodeFCTL();
        break;
      case "fdAT":
        this.decodeFDAT(e4);
        break;
      default:
        this.decodeChunk(e4, t), this.offset = n2 + e4;
        break;
    }
    if (this.offset - n2 !== e4) throw Error(`Length mismatch while decoding chunk ${t}`);
    this._checkCrc ? ca(this, e4 + 4, t) : this.skip(4);
  }
  decodeIHDR() {
    let e4 = this._png;
    e4.width = this.readUint32(), e4.height = this.readUint32(), e4.depth = Wa(this.readUint8());
    let t = this.readUint8();
    this._colorType = t;
    let n2;
    switch (t) {
      case La.GREYSCALE:
        n2 = 1;
        break;
      case La.TRUECOLOUR:
        n2 = 3;
        break;
      case La.INDEXED_COLOUR:
        n2 = 1;
        break;
      case La.GREYSCALE_ALPHA:
        n2 = 2;
        break;
      case La.TRUECOLOUR_ALPHA:
        n2 = 4;
        break;
      case La.UNKNOWN:
      default:
        throw Error(`Unknown color type: ${t}`);
    }
    if (this._png.channels = n2, this._compressionMethod = this.readUint8(), this._compressionMethod !== Ra.DEFLATE) throw Error(`Unsupported compression method: ${this._compressionMethod}`);
    this._filterMethod = this.readUint8(), this._interlaceMethod = this.readUint8();
  }
  decodeACTL() {
    this._numberOfFrames = this.readUint32(), this._numberOfPlays = this.readUint32(), this._isAnimated = true;
  }
  decodeFCTL() {
    let e4 = {
      sequenceNumber: this.readUint32(),
      width: this.readUint32(),
      height: this.readUint32(),
      xOffset: this.readUint32(),
      yOffset: this.readUint32(),
      delayNumber: this.readUint16(),
      delayDenominator: this.readUint16(),
      disposeOp: this.readUint8(),
      blendOp: this.readUint8(),
      data: new Uint8Array()
    };
    this._frames.push(e4);
  }
  decodePLTE(e4) {
    if (e4 % 3 != 0) throw RangeError(`PLTE field length must be a multiple of 3. Got ${e4}`);
    let t = e4 / 3;
    this._hasPalette = true;
    let n2 = [];
    this._palette = n2;
    for (let e5 = 0; e5 < t; e5++) n2.push([
      this.readUint8(),
      this.readUint8(),
      this.readUint8()
    ]);
  }
  decodeIDAT(e4) {
    this._writingDataChunks = true;
    let t = e4, n2 = this.offset + this.byteOffset;
    if (this._inflator.push(new Uint8Array(this.buffer, n2, t)), this._inflator.err) throw Error(`Error while decompressing the data: ${this._inflator.err}`);
    this.skip(e4);
  }
  decodeFDAT(e4) {
    this._writingDataChunks = true;
    let t = e4, n2 = this.offset + this.byteOffset;
    if (n2 += 4, t -= 4, this._inflator.push(new Uint8Array(this.buffer, n2, t)), this._inflator.err) throw Error(`Error while decompressing the data: ${this._inflator.err}`);
    this.skip(e4);
  }
  decodetRNS(e4) {
    switch (this._colorType) {
      case La.GREYSCALE:
      case La.TRUECOLOUR:
        if (e4 % 2 != 0) throw RangeError(`tRNS chunk length must be a multiple of 2. Got ${e4}`);
        if (e4 / 2 > this._png.width * this._png.height) throw Error(`tRNS chunk contains more alpha values than there are pixels (${e4 / 2} vs ${this._png.width * this._png.height})`);
        this._hasTransparency = true, this._transparency = new Uint16Array(e4 / 2);
        for (let t = 0; t < e4 / 2; t++) this._transparency[t] = this.readUint16();
        break;
      case La.INDEXED_COLOUR: {
        if (e4 > this._palette.length) throw Error(`tRNS chunk contains more alpha values than there are palette colors (${e4} vs ${this._palette.length})`);
        let t = 0;
        for (; t < e4; t++) {
          let e5 = this.readByte();
          this._palette[t].push(e5);
        }
        for (; t < this._palette.length; t++) this._palette[t].push(255);
        break;
      }
      case La.UNKNOWN:
      case La.GREYSCALE_ALPHA:
      case La.TRUECOLOUR_ALPHA:
      default:
        throw Error(`tRNS chunk is not supported for color type ${this._colorType}`);
    }
  }
  decodeiCCP(e4) {
    let t = Fa(this), n2 = this.readUint8();
    if (n2 !== Ra.DEFLATE) throw Error(`Unsupported iCCP compression method: ${n2}`);
    let r2 = this.readBytes(e4 - t.length - 2);
    this._png.iccEmbeddedProfile = {
      name: t,
      profile: ra(r2)
    };
  }
  decodepHYs() {
    let e4 = this.readUint32(), t = this.readUint32(), n2 = this.readByte();
    this._png.resolution = {
      x: e4,
      y: t,
      unit: n2
    };
  }
  decodeApngImage() {
    this._apng.width = this._png.width, this._apng.height = this._png.height, this._apng.channels = this._png.channels, this._apng.depth = this._png.depth, this._apng.numberOfFrames = this._numberOfFrames, this._apng.numberOfPlays = this._numberOfPlays, this._apng.text = this._png.text, this._apng.resolution = this._png.resolution;
    for (let e4 = 0; e4 < this._numberOfFrames; e4++) {
      let t = {
        sequenceNumber: this._frames[e4].sequenceNumber,
        delayNumber: this._frames[e4].delayNumber,
        delayDenominator: this._frames[e4].delayDenominator,
        data: this._apng.depth === 8 ? new Uint8Array(this._apng.width * this._apng.height * this._apng.channels) : new Uint16Array(this._apng.width * this._apng.height * this._apng.channels)
      }, n2 = this._frames.at(e4);
      if (n2) {
        if (n2.data = Ca({
          data: n2.data,
          width: n2.width,
          height: n2.height,
          channels: this._apng.channels,
          depth: this._apng.depth
        }), this._hasPalette && (this._apng.palette = this._palette), this._hasTransparency && (this._apng.transparency = this._transparency), e4 === 0 || n2.xOffset === 0 && n2.yOffset === 0 && n2.width === this._png.width && n2.height === this._png.height) t.data = n2.data;
        else {
          let r2 = this._apng.frames.at(e4 - 1);
          this.disposeFrame(n2, r2, t), this.addFrameDataToCanvas(t, n2);
        }
        this._apng.frames.push(t);
      }
    }
    return this._apng;
  }
  disposeFrame(e4, t, n2) {
    switch (e4.disposeOp) {
      case Va.NONE:
        break;
      case Va.BACKGROUND:
        for (let t2 = 0; t2 < this._png.height; t2++) for (let r2 = 0; r2 < this._png.width; r2++) {
          let i2 = (t2 * e4.width + r2) * this._png.channels;
          for (let e5 = 0; e5 < this._png.channels; e5++) n2.data[i2 + e5] = 0;
        }
        break;
      case Va.PREVIOUS:
        n2.data.set(t.data);
        break;
      default:
        throw Error("Unknown disposeOp");
    }
  }
  addFrameDataToCanvas(e4, t) {
    let n2 = 1 << this._png.depth, r2 = (e5, n3) => ({
      index: ((e5 + t.yOffset) * this._png.width + t.xOffset + n3) * this._png.channels,
      frameIndex: (e5 * t.width + n3) * this._png.channels
    });
    switch (t.blendOp) {
      case Ha.SOURCE:
        for (let n3 = 0; n3 < t.height; n3++) for (let i2 = 0; i2 < t.width; i2++) {
          let { index: a2, frameIndex: o2 } = r2(n3, i2);
          for (let n4 = 0; n4 < this._png.channels; n4++) e4.data[a2 + n4] = t.data[o2 + n4];
        }
        break;
      case Ha.OVER:
        for (let i2 = 0; i2 < t.height; i2++) for (let a2 = 0; a2 < t.width; a2++) {
          let { index: o2, frameIndex: s2 } = r2(i2, a2);
          for (let r3 = 0; r3 < this._png.channels; r3++) {
            let i3 = t.data[s2 + this._png.channels - 1] / n2, a3 = r3 % (this._png.channels - 1) == 0 ? 1 : t.data[s2 + r3], c3 = Math.floor(i3 * a3 + (1 - i3) * e4.data[o2 + r3]);
            e4.data[o2 + r3] += c3;
          }
        }
        break;
      default:
        throw Error("Unknown blendOp");
    }
  }
  decodeImage() {
    var _a2;
    if (this._inflator.err) throw Error(`Error while decompressing the data: ${this._inflator.err}`);
    let e4 = this._isAnimated ? ((_a2 = this._frames) == null ? void 0 : _a2.at(0)).data : this._inflator.result;
    if (this._filterMethod !== za.ADAPTIVE) throw Error(`Filter method ${this._filterMethod} not supported`);
    if (this._interlaceMethod === Ba.NO_INTERLACE) this._png.data = Ca({
      data: e4,
      width: this._png.width,
      height: this._png.height,
      channels: this._png.channels,
      depth: this._png.depth
    });
    else if (this._interlaceMethod === Ba.ADAM7) this._png.data = va({
      data: e4,
      width: this._png.width,
      height: this._png.height,
      channels: this._png.channels,
      depth: this._png.depth
    });
    else throw Error(`Interlace method ${this._interlaceMethod} not supported`);
    this._hasPalette && (this._png.palette = this._palette), this._hasTransparency && (this._png.transparency = this._transparency);
  }
  pushDataToFrame() {
    let e4 = this._inflator.result, t = this._frames.at(-1);
    t ? t.data = e4 : this._frames.push({
      sequenceNumber: 0,
      width: this._png.width,
      height: this._png.height,
      xOffset: 0,
      yOffset: 0,
      delayNumber: 0,
      delayDenominator: 0,
      disposeOp: Va.NONE,
      blendOp: Ha.SOURCE,
      data: e4
    }), this._inflator = new na(), this._writingDataChunks = false;
  }
};
function Wa(e4) {
  if (e4 !== 1 && e4 !== 2 && e4 !== 4 && e4 !== 8 && e4 !== 16) throw Error(`invalid bit depth: ${e4}`);
  return e4;
}
var Ga;
(function(e4) {
  e4[e4.UNKNOWN = 0] = "UNKNOWN", e4[e4.METRE = 1] = "METRE";
})(Ga || (Ga = {}));
function Ka(e4, t) {
  return new Ua(e4, t).decode();
}
var X = /* @__PURE__ */ function() {
  return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this;
}();
function qa() {
  X.console && typeof X.console.log == "function" && X.console.log.apply(X.console, arguments);
}
var Ja = {
  log: qa,
  warn: function(e4) {
    X.console && (typeof X.console.warn == "function" ? X.console.warn.apply(X.console, arguments) : qa.call(null, arguments));
  },
  error: function(e4) {
    X.console && (typeof X.console.error == "function" ? X.console.error.apply(X.console, arguments) : qa(e4));
  }
};
function Ya(e4, t, n2) {
  var r2 = new XMLHttpRequest();
  r2.open("GET", e4), r2.responseType = "blob", r2.onload = function() {
    Qa(r2.response, t, n2);
  }, r2.onerror = function() {
    Ja.error("could not download file");
  }, r2.send();
}
function Xa(e4) {
  var t = new XMLHttpRequest();
  t.open("HEAD", e4, false);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Za(e4) {
  try {
    e4.dispatchEvent(new MouseEvent("click"));
  } catch {
    var t = document.createEvent("MouseEvents");
    t.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), e4.dispatchEvent(t);
  }
}
var Qa = X.saveAs || ((typeof window > "u" ? "undefined" : e(window)) !== "object" || window !== X ? function() {
} : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(e4, t, n2) {
  var r2 = X.URL || X.webkitURL, i2 = document.createElement("a");
  t = t || e4.name || "download", i2.download = t, i2.rel = "noopener", typeof e4 == "string" ? (i2.href = e4, i2.origin === location.origin ? Za(i2) : Xa(i2.href) ? Ya(e4, t, n2) : Za(i2, i2.target = "_blank")) : (i2.href = r2.createObjectURL(e4), setTimeout(function() {
    r2.revokeObjectURL(i2.href);
  }, 4e4), setTimeout(function() {
    Za(i2);
  }, 0));
} : "msSaveOrOpenBlob" in navigator ? function(e4, n2, r2) {
  if (n2 = n2 || e4.name || "download", typeof e4 == "string") if (Xa(e4)) Ya(e4, n2, r2);
  else {
    var i2 = document.createElement("a");
    i2.href = e4, i2.target = "_blank", setTimeout(function() {
      Za(i2);
    });
  }
  else navigator.msSaveOrOpenBlob(function(e5, n3) {
    return n3 === void 0 ? n3 = { autoBom: false } : e(n3) !== "object" && (Ja.warn("Deprecated: Expected third argument to be a object"), n3 = { autoBom: !n3 }), n3.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e5.type) ? new Blob(["\uFEFF", e5], { type: e5.type }) : e5;
  }(e4, r2), n2);
} : function(e4, n2, r2, i2) {
  if ((i2 || (i2 = open("", "_blank"))) && (i2.document.title = i2.document.body.innerText = "downloading..."), typeof e4 == "string") return Ya(e4, n2, r2);
  var a2 = e4.type === "application/octet-stream", o2 = /constructor/i.test(X.HTMLElement) || X.safari, s2 = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((s2 || a2 && o2) && (typeof FileReader > "u" ? "undefined" : e(FileReader)) === "object") {
    var c3 = new FileReader();
    c3.onloadend = function() {
      var e5 = c3.result;
      e5 = s2 ? e5 : e5.replace(/^data:[^;]*;/, "data:attachment/file;"), i2 ? i2.location.href = e5 : location = e5, i2 = null;
    }, c3.readAsDataURL(e4);
  } else {
    var l2 = X.URL || X.webkitURL, u2 = l2.createObjectURL(e4);
    i2 ? i2.location = u2 : location.href = u2, i2 = null, setTimeout(function() {
      l2.revokeObjectURL(u2);
    }, 4e4);
  }
});
function $a(e4) {
  var t;
  e4 || (e4 = ""), this.ok = false, e4.charAt(0) == "#" && (e4 = e4.substr(1, 6)), e4 = {
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
  }[e4 = (e4 = e4.replace(/ /g, "")).toLowerCase()] || e4;
  for (var n2 = [
    {
      re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
      example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
      process: function(e5) {
        return [
          parseInt(e5[1]),
          parseInt(e5[2]),
          parseInt(e5[3])
        ];
      }
    },
    {
      re: /^(\w{2})(\w{2})(\w{2})$/,
      example: ["#00ff00", "336699"],
      process: function(e5) {
        return [
          parseInt(e5[1], 16),
          parseInt(e5[2], 16),
          parseInt(e5[3], 16)
        ];
      }
    },
    {
      re: /^(\w{1})(\w{1})(\w{1})$/,
      example: ["#fb0", "f0f"],
      process: function(e5) {
        return [
          parseInt(e5[1] + e5[1], 16),
          parseInt(e5[2] + e5[2], 16),
          parseInt(e5[3] + e5[3], 16)
        ];
      }
    }
  ], r2 = 0; r2 < n2.length; r2++) {
    var i2 = n2[r2].re, a2 = n2[r2].process, o2 = i2.exec(e4);
    o2 && (t = a2(o2), this.r = t[0], this.g = t[1], this.b = t[2], this.ok = true);
  }
  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  }, this.toHex = function() {
    var e5 = this.r.toString(16), t2 = this.g.toString(16), n3 = this.b.toString(16);
    return e5.length == 1 && (e5 = "0" + e5), t2.length == 1 && (t2 = "0" + t2), n3.length == 1 && (n3 = "0" + n3), "#" + e5 + t2 + n3;
  };
}
var eo = X.atob.bind(X);
var to = X.btoa.bind(X);
function no(e4, t) {
  var n2 = e4[0], r2 = e4[1], i2 = e4[2], a2 = e4[3];
  n2 = io(n2, r2, i2, a2, t[0], 7, -680876936), a2 = io(a2, n2, r2, i2, t[1], 12, -389564586), i2 = io(i2, a2, n2, r2, t[2], 17, 606105819), r2 = io(r2, i2, a2, n2, t[3], 22, -1044525330), n2 = io(n2, r2, i2, a2, t[4], 7, -176418897), a2 = io(a2, n2, r2, i2, t[5], 12, 1200080426), i2 = io(i2, a2, n2, r2, t[6], 17, -1473231341), r2 = io(r2, i2, a2, n2, t[7], 22, -45705983), n2 = io(n2, r2, i2, a2, t[8], 7, 1770035416), a2 = io(a2, n2, r2, i2, t[9], 12, -1958414417), i2 = io(i2, a2, n2, r2, t[10], 17, -42063), r2 = io(r2, i2, a2, n2, t[11], 22, -1990404162), n2 = io(n2, r2, i2, a2, t[12], 7, 1804603682), a2 = io(a2, n2, r2, i2, t[13], 12, -40341101), i2 = io(i2, a2, n2, r2, t[14], 17, -1502002290), n2 = ao(n2, r2 = io(r2, i2, a2, n2, t[15], 22, 1236535329), i2, a2, t[1], 5, -165796510), a2 = ao(a2, n2, r2, i2, t[6], 9, -1069501632), i2 = ao(i2, a2, n2, r2, t[11], 14, 643717713), r2 = ao(r2, i2, a2, n2, t[0], 20, -373897302), n2 = ao(n2, r2, i2, a2, t[5], 5, -701558691), a2 = ao(a2, n2, r2, i2, t[10], 9, 38016083), i2 = ao(i2, a2, n2, r2, t[15], 14, -660478335), r2 = ao(r2, i2, a2, n2, t[4], 20, -405537848), n2 = ao(n2, r2, i2, a2, t[9], 5, 568446438), a2 = ao(a2, n2, r2, i2, t[14], 9, -1019803690), i2 = ao(i2, a2, n2, r2, t[3], 14, -187363961), r2 = ao(r2, i2, a2, n2, t[8], 20, 1163531501), n2 = ao(n2, r2, i2, a2, t[13], 5, -1444681467), a2 = ao(a2, n2, r2, i2, t[2], 9, -51403784), i2 = ao(i2, a2, n2, r2, t[7], 14, 1735328473), n2 = oo(n2, r2 = ao(r2, i2, a2, n2, t[12], 20, -1926607734), i2, a2, t[5], 4, -378558), a2 = oo(a2, n2, r2, i2, t[8], 11, -2022574463), i2 = oo(i2, a2, n2, r2, t[11], 16, 1839030562), r2 = oo(r2, i2, a2, n2, t[14], 23, -35309556), n2 = oo(n2, r2, i2, a2, t[1], 4, -1530992060), a2 = oo(a2, n2, r2, i2, t[4], 11, 1272893353), i2 = oo(i2, a2, n2, r2, t[7], 16, -155497632), r2 = oo(r2, i2, a2, n2, t[10], 23, -1094730640), n2 = oo(n2, r2, i2, a2, t[13], 4, 681279174), a2 = oo(a2, n2, r2, i2, t[0], 11, -358537222), i2 = oo(i2, a2, n2, r2, t[3], 16, -722521979), r2 = oo(r2, i2, a2, n2, t[6], 23, 76029189), n2 = oo(n2, r2, i2, a2, t[9], 4, -640364487), a2 = oo(a2, n2, r2, i2, t[12], 11, -421815835), i2 = oo(i2, a2, n2, r2, t[15], 16, 530742520), n2 = so(n2, r2 = oo(r2, i2, a2, n2, t[2], 23, -995338651), i2, a2, t[0], 6, -198630844), a2 = so(a2, n2, r2, i2, t[7], 10, 1126891415), i2 = so(i2, a2, n2, r2, t[14], 15, -1416354905), r2 = so(r2, i2, a2, n2, t[5], 21, -57434055), n2 = so(n2, r2, i2, a2, t[12], 6, 1700485571), a2 = so(a2, n2, r2, i2, t[3], 10, -1894986606), i2 = so(i2, a2, n2, r2, t[10], 15, -1051523), r2 = so(r2, i2, a2, n2, t[1], 21, -2054922799), n2 = so(n2, r2, i2, a2, t[8], 6, 1873313359), a2 = so(a2, n2, r2, i2, t[15], 10, -30611744), i2 = so(i2, a2, n2, r2, t[6], 15, -1560198380), r2 = so(r2, i2, a2, n2, t[13], 21, 1309151649), n2 = so(n2, r2, i2, a2, t[4], 6, -145523070), a2 = so(a2, n2, r2, i2, t[11], 10, -1120210379), i2 = so(i2, a2, n2, r2, t[2], 15, 718787259), r2 = so(r2, i2, a2, n2, t[9], 21, -343485551), e4[0] = go(n2, e4[0]), e4[1] = go(r2, e4[1]), e4[2] = go(i2, e4[2]), e4[3] = go(a2, e4[3]);
}
function ro(e4, t, n2, r2, i2, a2) {
  return t = go(go(t, e4), go(r2, a2)), go(t << i2 | t >>> 32 - i2, n2);
}
function io(e4, t, n2, r2, i2, a2, o2) {
  return ro(t & n2 | ~t & r2, e4, t, i2, a2, o2);
}
function ao(e4, t, n2, r2, i2, a2, o2) {
  return ro(t & r2 | n2 & ~r2, e4, t, i2, a2, o2);
}
function oo(e4, t, n2, r2, i2, a2, o2) {
  return ro(t ^ n2 ^ r2, e4, t, i2, a2, o2);
}
function so(e4, t, n2, r2, i2, a2, o2) {
  return ro(n2 ^ (t | ~r2), e4, t, i2, a2, o2);
}
function co(e4) {
  var t, n2 = e4.length, r2 = [
    1732584193,
    -271733879,
    -1732584194,
    271733878
  ];
  for (t = 64; t <= e4.length; t += 64) no(r2, lo(e4.substring(t - 64, t)));
  e4 = e4.substring(t - 64);
  var i2 = [
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
    0
  ];
  for (t = 0; t < e4.length; t++) i2[t >> 2] |= e4.charCodeAt(t) << (t % 4 << 3);
  if (i2[t >> 2] |= 128 << (t % 4 << 3), t > 55) for (no(r2, i2), t = 0; t < 16; t++) i2[t] = 0;
  return i2[14] = 8 * n2, no(r2, i2), r2;
}
function lo(e4) {
  var t, n2 = [];
  for (t = 0; t < 64; t += 4) n2[t >> 2] = e4.charCodeAt(t) + (e4.charCodeAt(t + 1) << 8) + (e4.charCodeAt(t + 2) << 16) + (e4.charCodeAt(t + 3) << 24);
  return n2;
}
var uo = "0123456789abcdef".split("");
function fo(e4) {
  for (var t = "", n2 = 0; n2 < 4; n2++) t += uo[e4 >> 8 * n2 + 4 & 15] + uo[e4 >> 8 * n2 & 15];
  return t;
}
function po(e4) {
  return String.fromCharCode(255 & e4, (65280 & e4) >> 8, (16711680 & e4) >> 16, (4278190080 & e4) >> 24);
}
function mo(e4) {
  return co(e4).map(po).join("");
}
var ho = function(e4) {
  for (var t = 0; t < e4.length; t++) e4[t] = fo(e4[t]);
  return e4.join("");
}(co("hello")) != "5d41402abc4b2a76b9719d911017c592";
function go(e4, t) {
  if (ho) {
    var n2 = (65535 & e4) + (65535 & t);
    return (e4 >> 16) + (t >> 16) + (n2 >> 16) << 16 | 65535 & n2;
  }
  return e4 + t & 4294967295;
}
function _o(e4, t) {
  var n2, r2, i2, a2;
  if (e4 !== n2) {
    for (var o2 = (i2 = e4, a2 = 1 + (256 / e4.length | 0), Array(a2 + 1).join(i2)), s2 = [], c3 = 0; c3 < 256; c3++) s2[c3] = c3;
    var l2 = 0;
    for (c3 = 0; c3 < 256; c3++) {
      var u2 = s2[c3];
      l2 = (l2 + u2 + o2.charCodeAt(c3)) % 256, s2[c3] = s2[l2], s2[l2] = u2;
    }
    n2 = e4, r2 = s2;
  } else s2 = r2;
  var d2 = t.length, f2 = 0, p = 0, m = "";
  for (c3 = 0; c3 < d2; c3++) p = (p + (u2 = s2[f2 = (f2 + 1) % 256])) % 256, s2[f2] = s2[p], s2[p] = u2, o2 = s2[(s2[f2] + s2[p]) % 256], m += String.fromCharCode(t.charCodeAt(c3) ^ o2);
  return m;
}
var vo = {
  print: 4,
  modify: 8,
  copy: 16,
  "annot-forms": 32
};
function yo(e4, t, n2, r2) {
  this.v = 1, this.r = 2;
  var i2 = 192;
  e4.forEach(function(e5) {
    if (vo.perm !== void 0) throw Error("Invalid permission: " + e5);
    i2 += vo[e5];
  }), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
  var a2 = (t + this.padding).substr(0, 32), o2 = (n2 + this.padding).substr(0, 32);
  this.O = this.processOwnerPassword(a2, o2), this.P = -(1 + (255 ^ i2)), this.encryptionKey = mo(a2 + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(r2)).substr(0, 5), this.U = _o(this.encryptionKey, this.padding);
}
function bo(e4) {
  if (/[^\u0000-\u00ff]/.test(e4)) throw Error("Invalid PDF Name Object: " + e4 + ", Only accept ASCII characters.");
  for (var t = "", n2 = e4.length, r2 = 0; r2 < n2; r2++) {
    var i2 = e4.charCodeAt(r2);
    t += i2 < 33 || i2 === 35 || i2 === 37 || i2 === 40 || i2 === 41 || i2 === 47 || i2 === 60 || i2 === 62 || i2 === 91 || i2 === 93 || i2 === 123 || i2 === 125 || i2 > 126 ? "#" + ("0" + i2.toString(16)).slice(-2) : e4[r2];
  }
  return t;
}
function xo(e4) {
  if (e(e4) !== "object") throw Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
  var n2 = {};
  this.subscribe = function(e5, t, r2) {
    if (r2 || (r2 = false), typeof e5 != "string" || typeof t != "function" || typeof r2 != "boolean") throw Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
    n2.hasOwnProperty(e5) || (n2[e5] = {});
    var i2 = Math.random().toString(35);
    return n2[e5][i2] = [t, !!r2], i2;
  }, this.unsubscribe = function(e5) {
    for (var t in n2) if (n2[t][e5]) return delete n2[t][e5], Object.keys(n2[t]).length === 0 && delete n2[t], true;
    return false;
  }, this.publish = function(t) {
    if (n2.hasOwnProperty(t)) {
      var r2 = Array.prototype.slice.call(arguments, 1), i2 = [];
      for (var a2 in n2[t]) {
        var o2 = n2[t][a2];
        try {
          o2[0].apply(e4, r2);
        } catch (e5) {
          X.console && Ja.error("jsPDF PubSub Error", e5.message, e5);
        }
        o2[1] && i2.push(a2);
      }
      i2.length && i2.forEach(this.unsubscribe);
    }
  }, this.getTopics = function() {
    return n2;
  };
}
function So(e4) {
  if (!(this instanceof So)) return new So(e4);
  var t = "opacity,stroke-opacity".split(",");
  for (var n2 in e4) e4.hasOwnProperty(n2) && t.indexOf(n2) >= 0 && (this[n2] = e4[n2]);
  this.id = "", this.objectNumber = -1;
}
function Co(e4, t) {
  this.gState = e4, this.matrix = t, this.id = "", this.objectNumber = -1;
}
function wo(e4, t, n2, r2, i2) {
  if (!(this instanceof wo)) return new wo(e4, t, n2, r2, i2);
  this.type = e4 === "axial" ? 2 : 3, this.coords = t, this.colors = n2, Co.call(this, r2, i2);
}
function To(e4, t, n2, r2, i2) {
  if (!(this instanceof To)) return new To(e4, t, n2, r2, i2);
  this.boundingBox = e4, this.xStep = t, this.yStep = n2, this.stream = "", this.cloneIndex = 0, Co.call(this, r2, i2);
}
function Z(e4) {
  var n2, r2 = typeof arguments[0] == "string" ? arguments[0] : "p", i2 = arguments[1], a2 = arguments[2], o2 = arguments[3], s2 = [], c3 = 1, l2 = 16, u2 = "S", d2 = null;
  e(e4 || (e4 = {})) === "object" && (r2 = e4.orientation, i2 = e4.unit || i2, a2 = e4.format || a2, o2 = e4.compress || e4.compressPdf || o2, (d2 = e4.encryption || null) !== null && (d2.userPassword = d2.userPassword || "", d2.ownerPassword = d2.ownerPassword || "", d2.userPermissions = d2.userPermissions || []), c3 = typeof e4.userUnit == "number" ? Math.abs(e4.userUnit) : 1, e4.precision !== void 0 && (n2 = e4.precision), e4.floatPrecision !== void 0 && (l2 = e4.floatPrecision), u2 = e4.defaultPathOperation || "S"), s2 = e4.filters || (true === o2 ? ["FlateEncode"] : s2), i2 || (i2 = "mm"), r2 = ("" + (r2 || "P")).toLowerCase();
  var f2 = e4.putOnlyUsedFonts || false, p = {}, m = {
    internal: {},
    __private__: {}
  };
  m.__private__.PubSub = xo;
  var h = "1.3", g = m.__private__.getPdfVersion = function() {
    return h;
  };
  m.__private__.setPdfVersion = function(e5) {
    h = e5;
  };
  var _ = {
    a0: [2383.94, 3370.39],
    a1: [1683.78, 2383.94],
    a2: [1190.55, 1683.78],
    a3: [841.89, 1190.55],
    a4: [595.28, 841.89],
    a5: [419.53, 595.28],
    a6: [297.64, 419.53],
    a7: [209.76, 297.64],
    a8: [147.4, 209.76],
    a9: [104.88, 147.4],
    a10: [73.7, 104.88],
    b0: [2834.65, 4008.19],
    b1: [2004.09, 2834.65],
    b2: [1417.32, 2004.09],
    b3: [1000.63, 1417.32],
    b4: [708.66, 1000.63],
    b5: [498.9, 708.66],
    b6: [354.33, 498.9],
    b7: [249.45, 354.33],
    b8: [175.75, 249.45],
    b9: [124.72, 175.75],
    b10: [87.87, 124.72],
    c0: [2599.37, 3676.54],
    c1: [1836.85, 2599.37],
    c2: [1298.27, 1836.85],
    c3: [918.43, 1298.27],
    c4: [649.13, 918.43],
    c5: [459.21, 649.13],
    c6: [323.15, 459.21],
    c7: [229.61, 323.15],
    c8: [161.57, 229.61],
    c9: [113.39, 161.57],
    c10: [79.37, 113.39],
    dl: [311.81, 623.62],
    letter: [612, 792],
    "government-letter": [576, 756],
    legal: [612, 1008],
    "junior-legal": [576, 360],
    ledger: [1224, 792],
    tabloid: [792, 1224],
    "credit-card": [153, 243]
  };
  m.__private__.getPageFormats = function() {
    return _;
  };
  var v = m.__private__.getPageFormat = function(e5) {
    return _[e5];
  };
  a2 || (a2 = "a4");
  var y = "compat", b2 = "advanced", x2 = y;
  function S2() {
    this.saveGraphicsState(), W2(new K2(Se2, 0, 0, -Se2, 0, Y2() * Se2).toString() + " cm"), this.setFontSize(this.getFontSize() / Se2), u2 = "n", x2 = b2;
  }
  function C2() {
    this.restoreGraphicsState(), u2 = "S", x2 = y;
  }
  var w2 = m.__private__.combineFontStyleAndFontWeight = function(e5, t) {
    if (e5 == "bold" && t == "normal" || e5 == "bold" && t == 400 || e5 == "normal" && t == "italic" || e5 == "bold" && t == "italic") throw Error("Invalid Combination of fontweight and fontstyle");
    return t && (e5 = t == 400 || t === "normal" ? e5 === "italic" ? "italic" : "normal" : t != 700 && t !== "bold" || e5 !== "normal" ? (t == 700 ? "bold" : t) + "" + e5 : "bold"), e5;
  };
  m.advancedAPI = function(e5) {
    var t = x2 === y;
    return t && S2.call(this), typeof e5 != "function" || (e5(this), t && C2.call(this)), this;
  }, m.compatAPI = function(e5) {
    var t = x2 === b2;
    return t && C2.call(this), typeof e5 != "function" || (e5(this), t && S2.call(this)), this;
  }, m.isAdvancedAPI = function() {
    return x2 === b2;
  };
  var T2, E2 = function(e5) {
    if (x2 !== b2) throw Error(e5 + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
  }, D2 = m.roundToPrecision = m.__private__.roundToPrecision = function(e5, t) {
    var r3 = n2 || t;
    if (isNaN(e5) || isNaN(r3)) throw Error("Invalid argument passed to jsPDF.roundToPrecision");
    return e5.toFixed(r3).replace(/0+$/, "");
  };
  T2 = m.hpf = m.__private__.hpf = typeof l2 == "number" ? function(e5) {
    if (isNaN(e5)) throw Error("Invalid argument passed to jsPDF.hpf");
    return D2(e5, l2);
  } : l2 === "smart" ? function(e5) {
    if (isNaN(e5)) throw Error("Invalid argument passed to jsPDF.hpf");
    return D2(e5, e5 > -1 && e5 < 1 ? 16 : 5);
  } : function(e5) {
    if (isNaN(e5)) throw Error("Invalid argument passed to jsPDF.hpf");
    return D2(e5, 16);
  };
  var O2 = m.f2 = m.__private__.f2 = function(e5) {
    if (isNaN(e5)) throw Error("Invalid argument passed to jsPDF.f2");
    return D2(e5, 2);
  }, k2 = m.__private__.f3 = function(e5) {
    if (isNaN(e5)) throw Error("Invalid argument passed to jsPDF.f3");
    return D2(e5, 3);
  }, A2 = m.scale = m.__private__.scale = function(e5) {
    if (isNaN(e5)) throw Error("Invalid argument passed to jsPDF.scale");
    return x2 === y ? e5 * Se2 : x2 === b2 ? e5 : void 0;
  }, j2 = function(e5) {
    return A2(function(e6) {
      return x2 === y ? Y2() - e6 : x2 === b2 ? e6 : void 0;
    }(e5));
  };
  m.__private__.setPrecision = m.setPrecision = function(e5) {
    typeof parseInt(e5, 10) == "number" && (n2 = parseInt(e5, 10));
  };
  var M2, N2 = "00000000000000000000000000000000", P2 = m.__private__.getFileId = function() {
    return N2;
  }, F2 = m.__private__.setFileId = function(e5) {
    return N2 = e5 !== void 0 && /^[a-fA-F0-9]{32}$/.test(e5) ? e5.toUpperCase() : N2.split("").map(function() {
      return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
    }).join(""), d2 !== null && (Dt2 = new yo(d2.userPermissions, d2.userPassword, d2.ownerPassword, N2)), N2;
  };
  m.setFileId = function(e5) {
    return F2(e5), this;
  }, m.getFileId = function() {
    return P2();
  };
  var I2 = m.__private__.convertDateToPDFDate = function(e5) {
    var t = e5.getTimezoneOffset(), n3 = t < 0 ? "+" : "-", r3 = Math.floor(Math.abs(t / 60)), i3 = Math.abs(t % 60), a3 = [
      n3,
      V2(r3),
      "'",
      V2(i3),
      "'"
    ].join("");
    return [
      "D:",
      e5.getFullYear(),
      V2(e5.getMonth() + 1),
      V2(e5.getDate()),
      V2(e5.getHours()),
      V2(e5.getMinutes()),
      V2(e5.getSeconds()),
      a3
    ].join("");
  }, L2 = m.__private__.convertPDFDateToDate = function(e5) {
    var t = parseInt(e5.substr(2, 4), 10), n3 = parseInt(e5.substr(6, 2), 10) - 1, r3 = parseInt(e5.substr(8, 2), 10), i3 = parseInt(e5.substr(10, 2), 10), a3 = parseInt(e5.substr(12, 2), 10), o3 = parseInt(e5.substr(14, 2), 10);
    return new Date(t, n3, r3, i3, a3, o3, 0);
  }, R2 = m.__private__.setCreationDate = function(e5) {
    var t;
    if (e5 === void 0 && (e5 = /* @__PURE__ */ new Date()), e5 instanceof Date) t = I2(e5);
    else {
      if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(e5)) throw Error("Invalid argument passed to jsPDF.setCreationDate");
      t = e5;
    }
    return M2 = t;
  }, z2 = m.__private__.getCreationDate = function(e5) {
    var t = M2;
    return e5 === "jsDate" && (t = L2(M2)), t;
  };
  m.setCreationDate = function(e5) {
    return R2(e5), this;
  }, m.getCreationDate = function(e5) {
    return z2(e5);
  };
  var B2, V2 = m.__private__.padd2 = function(e5) {
    return ("0" + parseInt(e5)).slice(-2);
  }, ee2 = m.__private__.padd2Hex = function(e5) {
    return ("00" + (e5 = e5.toString())).substr(e5.length);
  }, H2 = 0, te2 = [], U2 = [], ne2 = 0, re2 = [], ie2 = [], ae2 = false, oe2 = U2;
  m.__private__.setCustomOutputDestination = function(e5) {
    ae2 = true, oe2 = e5;
  };
  var se2 = function(e5) {
    ae2 || (oe2 = e5);
  };
  m.__private__.resetCustomOutputDestination = function() {
    ae2 = false, oe2 = U2;
  };
  var W2 = m.__private__.out = function(e5) {
    return e5 = e5.toString(), ne2 += e5.length + 1, oe2.push(e5), oe2;
  }, ce2 = m.__private__.write = function(e5) {
    return W2(arguments.length === 1 ? e5.toString() : Array.prototype.join.call(arguments, " "));
  }, le2 = m.__private__.getArrayBuffer = function(e5) {
    for (var t = e5.length, n3 = new ArrayBuffer(t), r3 = new Uint8Array(n3); t--; ) r3[t] = e5.charCodeAt(t);
    return n3;
  }, ue2 = [
    [
      "Helvetica",
      "helvetica",
      "normal",
      "WinAnsiEncoding"
    ],
    [
      "Helvetica-Bold",
      "helvetica",
      "bold",
      "WinAnsiEncoding"
    ],
    [
      "Helvetica-Oblique",
      "helvetica",
      "italic",
      "WinAnsiEncoding"
    ],
    [
      "Helvetica-BoldOblique",
      "helvetica",
      "bolditalic",
      "WinAnsiEncoding"
    ],
    [
      "Courier",
      "courier",
      "normal",
      "WinAnsiEncoding"
    ],
    [
      "Courier-Bold",
      "courier",
      "bold",
      "WinAnsiEncoding"
    ],
    [
      "Courier-Oblique",
      "courier",
      "italic",
      "WinAnsiEncoding"
    ],
    [
      "Courier-BoldOblique",
      "courier",
      "bolditalic",
      "WinAnsiEncoding"
    ],
    [
      "Times-Roman",
      "times",
      "normal",
      "WinAnsiEncoding"
    ],
    [
      "Times-Bold",
      "times",
      "bold",
      "WinAnsiEncoding"
    ],
    [
      "Times-Italic",
      "times",
      "italic",
      "WinAnsiEncoding"
    ],
    [
      "Times-BoldItalic",
      "times",
      "bolditalic",
      "WinAnsiEncoding"
    ],
    [
      "ZapfDingbats",
      "zapfdingbats",
      "normal",
      null
    ],
    [
      "Symbol",
      "symbol",
      "normal",
      null
    ]
  ];
  m.__private__.getStandardFonts = function() {
    return ue2;
  };
  var de2 = e4.fontSize || 16;
  m.__private__.setFontSize = m.setFontSize = function(e5) {
    return de2 = x2 === b2 ? e5 / Se2 : e5, this;
  };
  var fe2, pe2 = m.__private__.getFontSize = m.getFontSize = function() {
    return x2 === y ? de2 : de2 * Se2;
  }, me2 = e4.R2L || false;
  m.__private__.setR2L = m.setR2L = function(e5) {
    return me2 = e5, this;
  }, m.__private__.getR2L = m.getR2L = function() {
    return me2;
  };
  var he2, ge2 = m.__private__.setZoomMode = function(e5) {
    if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(e5)) fe2 = e5;
    else if (isNaN(e5)) {
      if ([
        void 0,
        null,
        "fullwidth",
        "fullheight",
        "fullpage",
        "original"
      ].indexOf(e5) === -1) throw Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + e5 + '" is not recognized.');
      fe2 = e5;
    } else fe2 = parseInt(e5, 10);
  };
  m.__private__.getZoomMode = function() {
    return fe2;
  };
  var _e2, ve2 = m.__private__.setPageMode = function(e5) {
    if ([
      void 0,
      null,
      "UseNone",
      "UseOutlines",
      "UseThumbs",
      "FullScreen"
    ].indexOf(e5) == -1) throw Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + e5 + '" is not recognized.');
    he2 = e5;
  };
  m.__private__.getPageMode = function() {
    return he2;
  };
  var ye2 = m.__private__.setLayoutMode = function(e5) {
    if ([
      void 0,
      null,
      "continuous",
      "single",
      "twoleft",
      "tworight",
      "two"
    ].indexOf(e5) == -1) throw Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + e5 + '" is not recognized.');
    _e2 = e5;
  };
  m.__private__.getLayoutMode = function() {
    return _e2;
  }, m.__private__.setDisplayMode = m.setDisplayMode = function(e5, t, n3) {
    return ge2(e5), ye2(t), ve2(n3), this;
  };
  var be2 = {
    title: "",
    subject: "",
    author: "",
    keywords: "",
    creator: ""
  };
  m.__private__.getDocumentProperty = function(e5) {
    if (Object.keys(be2).indexOf(e5) === -1) throw Error("Invalid argument passed to jsPDF.getDocumentProperty");
    return be2[e5];
  }, m.__private__.getDocumentProperties = function() {
    return be2;
  }, m.__private__.setDocumentProperties = m.setProperties = m.setDocumentProperties = function(e5) {
    for (var t in be2) be2.hasOwnProperty(t) && e5[t] && (be2[t] = e5[t]);
    return this;
  }, m.__private__.setDocumentProperty = function(e5, t) {
    if (Object.keys(be2).indexOf(e5) === -1) throw Error("Invalid arguments passed to jsPDF.setDocumentProperty");
    return be2[e5] = t;
  };
  var xe2, Se2, Ce2, we2, Te2, Ee2 = {}, De2 = {}, Oe2 = [], ke2 = {}, Ae2 = {}, je2 = {}, Me2 = {}, Ne2 = null, Pe2 = 0, G2 = [], Fe2 = new xo(m), Ie2 = e4.hotfixes || [], Le2 = {}, Re2 = {}, ze2 = [], K2 = function e5(t, n3, r3, i3, a3, o3) {
    if (!(this instanceof e5)) return new e5(t, n3, r3, i3, a3, o3);
    isNaN(t) && (t = 1), isNaN(n3) && (n3 = 0), isNaN(r3) && (r3 = 0), isNaN(i3) && (i3 = 1), isNaN(a3) && (a3 = 0), isNaN(o3) && (o3 = 0), this._matrix = [
      t,
      n3,
      r3,
      i3,
      a3,
      o3
    ];
  };
  Object.defineProperty(K2.prototype, "sx", {
    get: function() {
      return this._matrix[0];
    },
    set: function(e5) {
      this._matrix[0] = e5;
    }
  }), Object.defineProperty(K2.prototype, "shy", {
    get: function() {
      return this._matrix[1];
    },
    set: function(e5) {
      this._matrix[1] = e5;
    }
  }), Object.defineProperty(K2.prototype, "shx", {
    get: function() {
      return this._matrix[2];
    },
    set: function(e5) {
      this._matrix[2] = e5;
    }
  }), Object.defineProperty(K2.prototype, "sy", {
    get: function() {
      return this._matrix[3];
    },
    set: function(e5) {
      this._matrix[3] = e5;
    }
  }), Object.defineProperty(K2.prototype, "tx", {
    get: function() {
      return this._matrix[4];
    },
    set: function(e5) {
      this._matrix[4] = e5;
    }
  }), Object.defineProperty(K2.prototype, "ty", {
    get: function() {
      return this._matrix[5];
    },
    set: function(e5) {
      this._matrix[5] = e5;
    }
  }), Object.defineProperty(K2.prototype, "a", {
    get: function() {
      return this._matrix[0];
    },
    set: function(e5) {
      this._matrix[0] = e5;
    }
  }), Object.defineProperty(K2.prototype, "b", {
    get: function() {
      return this._matrix[1];
    },
    set: function(e5) {
      this._matrix[1] = e5;
    }
  }), Object.defineProperty(K2.prototype, "c", {
    get: function() {
      return this._matrix[2];
    },
    set: function(e5) {
      this._matrix[2] = e5;
    }
  }), Object.defineProperty(K2.prototype, "d", {
    get: function() {
      return this._matrix[3];
    },
    set: function(e5) {
      this._matrix[3] = e5;
    }
  }), Object.defineProperty(K2.prototype, "e", {
    get: function() {
      return this._matrix[4];
    },
    set: function(e5) {
      this._matrix[4] = e5;
    }
  }), Object.defineProperty(K2.prototype, "f", {
    get: function() {
      return this._matrix[5];
    },
    set: function(e5) {
      this._matrix[5] = e5;
    }
  }), Object.defineProperty(K2.prototype, "rotation", { get: function() {
    return Math.atan2(this.shx, this.sx);
  } }), Object.defineProperty(K2.prototype, "scaleX", { get: function() {
    return this.decompose().scale.sx;
  } }), Object.defineProperty(K2.prototype, "scaleY", { get: function() {
    return this.decompose().scale.sy;
  } }), Object.defineProperty(K2.prototype, "isIdentity", { get: function() {
    return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0;
  } }), K2.prototype.join = function(e5) {
    return [
      this.sx,
      this.shy,
      this.shx,
      this.sy,
      this.tx,
      this.ty
    ].map(T2).join(e5);
  }, K2.prototype.multiply = function(e5) {
    return new K2(e5.sx * this.sx + e5.shy * this.shx, e5.sx * this.shy + e5.shy * this.sy, e5.shx * this.sx + e5.sy * this.shx, e5.shx * this.shy + e5.sy * this.sy, e5.tx * this.sx + e5.ty * this.shx + this.tx, e5.tx * this.shy + e5.ty * this.sy + this.ty);
  }, K2.prototype.decompose = function() {
    var e5 = this.sx, t = this.shy, n3 = this.shx, r3 = this.sy, i3 = this.tx, a3 = this.ty, o3 = Math.sqrt(e5 * e5 + t * t), s3 = (e5 /= o3) * n3 + (t /= o3) * r3;
    n3 -= e5 * s3, r3 -= t * s3;
    var c4 = Math.sqrt(n3 * n3 + r3 * r3);
    return s3 /= c4, e5 * (r3 /= c4) < t * (n3 /= c4) && (e5 = -e5, t = -t, s3 = -s3, o3 = -o3), {
      scale: new K2(o3, 0, 0, c4, 0, 0),
      translate: new K2(1, 0, 0, 1, i3, a3),
      rotate: new K2(e5, t, -t, e5, 0, 0),
      skew: new K2(1, 0, s3, 1, 0, 0)
    };
  }, K2.prototype.toString = function(e5) {
    return this.join(" ");
  }, K2.prototype.inversed = function() {
    var e5 = this.sx, t = this.shy, n3 = this.shx, r3 = this.sy, i3 = this.tx, a3 = this.ty, o3 = 1 / (e5 * r3 - t * n3), s3 = r3 * o3, c4 = -t * o3, l3 = -n3 * o3, u3 = e5 * o3;
    return new K2(s3, c4, l3, u3, -s3 * i3 - l3 * a3, -c4 * i3 - u3 * a3);
  }, K2.prototype.applyToPoint = function(e5) {
    return new un2(e5.x * this.sx + e5.y * this.shx + this.tx, e5.x * this.shy + e5.y * this.sy + this.ty);
  }, K2.prototype.applyToRectangle = function(e5) {
    var t = this.applyToPoint(e5), n3 = this.applyToPoint(new un2(e5.x + e5.w, e5.y + e5.h));
    return new dn2(t.x, t.y, n3.x - t.x, n3.y - t.y);
  }, K2.prototype.clone = function() {
    var e5 = this.sx, t = this.shy, n3 = this.shx, r3 = this.sy, i3 = this.tx, a3 = this.ty;
    return new K2(e5, t, n3, r3, i3, a3);
  }, m.Matrix = K2;
  var Be2 = m.matrixMult = function(e5, t) {
    return t.multiply(e5);
  }, Ve2 = new K2(1, 0, 0, 1, 0, 0);
  m.unitMatrix = m.identityMatrix = Ve2;
  var He2 = function(e5, t) {
    if (!Ae2[e5]) {
      var n3 = (t instanceof wo ? "Sh" : "P") + (Object.keys(ke2).length + 1).toString(10);
      t.id = n3, Ae2[e5] = n3, ke2[n3] = t, Fe2.publish("addPattern", t);
    }
  };
  m.ShadingPattern = wo, m.TilingPattern = To, m.addShadingPattern = function(e5, t) {
    return E2("addShadingPattern()"), He2(e5, t), this;
  }, m.beginTilingPattern = function(e5) {
    E2("beginTilingPattern()"), pn2(e5.boundingBox[0], e5.boundingBox[1], e5.boundingBox[2] - e5.boundingBox[0], e5.boundingBox[3] - e5.boundingBox[1], e5.matrix);
  }, m.endTilingPattern = function(e5, t) {
    E2("endTilingPattern()"), t.stream = ie2[B2].join("\n"), He2(e5, t), Fe2.publish("endTilingPattern", t), ze2.pop().restore();
  };
  var Ue2, We2 = m.__private__.newObject = function() {
    var e5 = Ge2();
    return Ke2(e5, true), e5;
  }, Ge2 = m.__private__.newObjectDeferred = function() {
    return H2++, te2[H2] = function() {
      return ne2;
    }, H2;
  }, Ke2 = function(e5, t) {
    return t = typeof t == "boolean" && t, te2[e5] = ne2, t && W2(e5 + " 0 obj"), e5;
  }, qe2 = m.__private__.newAdditionalObject = function() {
    var e5 = {
      objId: Ge2(),
      content: ""
    };
    return re2.push(e5), e5;
  }, Je2 = Ge2(), Ye2 = Ge2(), Xe2 = m.__private__.decodeColorString = function(e5) {
    var t = e5.split(" ");
    if (t.length !== 2 || t[1] !== "g" && t[1] !== "G") t.length !== 5 || t[4] !== "k" && t[4] !== "K" || (t = [
      (1 - t[0]) * (1 - t[3]),
      (1 - t[1]) * (1 - t[3]),
      (1 - t[2]) * (1 - t[3]),
      "r"
    ]);
    else {
      var n3 = parseFloat(t[0]);
      t = [
        n3,
        n3,
        n3,
        "r"
      ];
    }
    for (var r3 = "#", i3 = 0; i3 < 3; i3++) r3 += ("0" + Math.floor(255 * parseFloat(t[i3])).toString(16)).slice(-2);
    return r3;
  }, Ze2 = m.__private__.encodeColorString = function(e5) {
    var n3;
    typeof e5 == "string" && (e5 = { ch1: e5 });
    var r3 = e5.ch1, i3 = e5.ch2, a3 = e5.ch3, o3 = e5.ch4, s3 = e5.pdfColorType === "draw" ? [
      "G",
      "RG",
      "K"
    ] : [
      "g",
      "rg",
      "k"
    ];
    if (typeof r3 == "string" && r3.charAt(0) !== "#") {
      var c4 = new $a(r3);
      if (c4.ok) r3 = c4.toHex();
      else if (!/^\d*\.?\d*$/.test(r3)) throw Error('Invalid color "' + r3 + '" passed to jsPDF.encodeColorString.');
    }
    if (typeof r3 == "string" && /^#[0-9A-Fa-f]{3}$/.test(r3) && (r3 = "#" + r3[1] + r3[1] + r3[2] + r3[2] + r3[3] + r3[3]), typeof r3 == "string" && /^#[0-9A-Fa-f]{6}$/.test(r3)) {
      var l3 = parseInt(r3.substr(1), 16);
      r3 = l3 >> 16 & 255, i3 = l3 >> 8 & 255, a3 = 255 & l3;
    }
    if (i3 === void 0 || o3 === void 0 && r3 === i3 && i3 === a3) n3 = typeof r3 == "string" ? r3 + " " + s3[0] : e5.precision === 2 ? O2(r3 / 255) + " " + s3[0] : k2(r3 / 255) + " " + s3[0];
    else if (o3 === void 0 || e(o3) === "object") {
      if (o3 && !isNaN(o3.a) && o3.a === 0) return [
        "1.",
        "1.",
        "1.",
        s3[1]
      ].join(" ");
      n3 = typeof r3 == "string" ? [
        r3,
        i3,
        a3,
        s3[1]
      ].join(" ") : e5.precision === 2 ? [
        O2(r3 / 255),
        O2(i3 / 255),
        O2(a3 / 255),
        s3[1]
      ].join(" ") : [
        k2(r3 / 255),
        k2(i3 / 255),
        k2(a3 / 255),
        s3[1]
      ].join(" ");
    } else n3 = typeof r3 == "string" ? [
      r3,
      i3,
      a3,
      o3,
      s3[2]
    ].join(" ") : e5.precision === 2 ? [
      O2(r3),
      O2(i3),
      O2(a3),
      O2(o3),
      s3[2]
    ].join(" ") : [
      k2(r3),
      k2(i3),
      k2(a3),
      k2(o3),
      s3[2]
    ].join(" ");
    return n3;
  }, Qe2 = m.__private__.getFilters = function() {
    return s2;
  }, $e2 = m.__private__.putStream = function(e5) {
    var t = (e5 || (e5 = {})).data || "", n3 = e5.filters || Qe2(), r3 = e5.alreadyAppliedFilters || [], i3 = e5.addLength1 || false, a3 = t.length, o3 = e5.objectId, s3 = function(e6) {
      return e6;
    };
    if (d2 !== null && o3 === void 0) throw Error("ObjectId must be passed to putStream for file encryption");
    d2 !== null && (s3 = Dt2.encryptor(o3, 0));
    var c4 = {};
    true === n3 && (n3 = ["FlateEncode"]);
    var l3 = e5.additionalKeyValues || [], u3 = (c4 = Z.API.processDataByFilters === void 0 ? {
      data: t,
      reverseChain: []
    } : Z.API.processDataByFilters(t, n3)).reverseChain + (Array.isArray(r3) ? r3.join(" ") : r3.toString());
    if (c4.data.length !== 0 && (l3.push({
      key: "Length",
      value: c4.data.length
    }), true === i3 && l3.push({
      key: "Length1",
      value: a3
    })), u3.length != 0) if (u3.split("/").length - 1 == 1) l3.push({
      key: "Filter",
      value: u3
    });
    else {
      l3.push({
        key: "Filter",
        value: "[" + u3 + "]"
      });
      for (var f3 = 0; f3 < l3.length; f3 += 1) if (l3[f3].key === "DecodeParms") {
        for (var p2 = [], m2 = 0; m2 < c4.reverseChain.split("/").length - 1; m2 += 1) p2.push("null");
        p2.push(l3[f3].value), l3[f3].value = "[" + p2.join(" ") + "]";
      }
    }
    W2("<<");
    for (var h2 = 0; h2 < l3.length; h2++) W2("/" + l3[h2].key + " " + l3[h2].value);
    W2(">>"), c4.data.length !== 0 && (W2("stream"), W2(s3(c4.data)), W2("endstream"));
  }, et2 = m.__private__.putPage = function(e5) {
    var t = e5.number, n3 = e5.data, r3 = e5.objId, i3 = e5.contentsObjId;
    Ke2(r3, true), W2("<</Type /Page"), W2("/Parent " + e5.rootDictionaryObjId + " 0 R"), W2("/Resources " + e5.resourceDictionaryObjId + " 0 R"), W2("/MediaBox [" + parseFloat(T2(e5.mediaBox.bottomLeftX)) + " " + parseFloat(T2(e5.mediaBox.bottomLeftY)) + " " + T2(e5.mediaBox.topRightX) + " " + T2(e5.mediaBox.topRightY) + "]"), e5.cropBox !== null && W2("/CropBox [" + T2(e5.cropBox.bottomLeftX) + " " + T2(e5.cropBox.bottomLeftY) + " " + T2(e5.cropBox.topRightX) + " " + T2(e5.cropBox.topRightY) + "]"), e5.bleedBox !== null && W2("/BleedBox [" + T2(e5.bleedBox.bottomLeftX) + " " + T2(e5.bleedBox.bottomLeftY) + " " + T2(e5.bleedBox.topRightX) + " " + T2(e5.bleedBox.topRightY) + "]"), e5.trimBox !== null && W2("/TrimBox [" + T2(e5.trimBox.bottomLeftX) + " " + T2(e5.trimBox.bottomLeftY) + " " + T2(e5.trimBox.topRightX) + " " + T2(e5.trimBox.topRightY) + "]"), e5.artBox !== null && W2("/ArtBox [" + T2(e5.artBox.bottomLeftX) + " " + T2(e5.artBox.bottomLeftY) + " " + T2(e5.artBox.topRightX) + " " + T2(e5.artBox.topRightY) + "]"), typeof e5.userUnit == "number" && e5.userUnit !== 1 && W2("/UserUnit " + e5.userUnit), Fe2.publish("putPage", {
      objId: r3,
      pageContext: G2[t],
      pageNumber: t,
      page: n3
    }), W2("/Contents " + i3 + " 0 R"), W2(">>"), W2("endobj");
    var a3 = n3.join("\n");
    return x2 === b2 && (a3 += "\nQ"), Ke2(i3, true), $e2({
      data: a3,
      filters: Qe2(),
      objectId: i3
    }), W2("endobj"), r3;
  }, tt2 = m.__private__.putPages = function() {
    var e5, t, n3 = [];
    for (e5 = 1; e5 <= Pe2; e5++) G2[e5].objId = Ge2(), G2[e5].contentsObjId = Ge2();
    for (e5 = 1; e5 <= Pe2; e5++) n3.push(et2({
      number: e5,
      data: ie2[e5],
      objId: G2[e5].objId,
      contentsObjId: G2[e5].contentsObjId,
      mediaBox: G2[e5].mediaBox,
      cropBox: G2[e5].cropBox,
      bleedBox: G2[e5].bleedBox,
      trimBox: G2[e5].trimBox,
      artBox: G2[e5].artBox,
      userUnit: G2[e5].userUnit,
      rootDictionaryObjId: Je2,
      resourceDictionaryObjId: Ye2
    }));
    Ke2(Je2, true), W2("<</Type /Pages");
    var r3 = "/Kids [";
    for (t = 0; t < Pe2; t++) r3 += n3[t] + " 0 R ";
    W2(r3 + "]"), W2("/Count " + Pe2), W2(">>"), W2("endobj"), Fe2.publish("postPutPages");
  }, nt2 = function(e5) {
    Fe2.publish("putFont", {
      font: e5,
      out: W2,
      newObject: We2,
      putStream: $e2
    }), true !== e5.isAlreadyPutted && (e5.objectNumber = We2(), W2("<<"), W2("/Type /Font"), W2("/BaseFont /" + bo(e5.postScriptName)), W2("/Subtype /Type1"), typeof e5.encoding == "string" && W2("/Encoding /" + e5.encoding), W2("/FirstChar 32"), W2("/LastChar 255"), W2(">>"), W2("endobj"));
  }, rt2 = function(e5) {
    e5.objectNumber = We2();
    var t = [];
    t.push({
      key: "Type",
      value: "/XObject"
    }), t.push({
      key: "Subtype",
      value: "/Form"
    }), t.push({
      key: "BBox",
      value: "[" + [
        T2(e5.x),
        T2(e5.y),
        T2(e5.x + e5.width),
        T2(e5.y + e5.height)
      ].join(" ") + "]"
    }), t.push({
      key: "Matrix",
      value: "[" + e5.matrix.toString() + "]"
    }), $e2({
      data: e5.pages[1].join("\n"),
      additionalKeyValues: t,
      objectId: e5.objectNumber
    }), W2("endobj");
  }, it2 = function(e5, t) {
    t || (t = 21);
    var n3 = We2(), r3 = function(e6, t2) {
      var n4, r4 = [], i4 = 1 / (t2 - 1);
      for (n4 = 0; n4 < 1; n4 += i4) r4.push(n4);
      if (r4.push(1), e6[0].offset != 0) {
        var a4 = {
          offset: 0,
          color: e6[0].color
        };
        e6.unshift(a4);
      }
      if (e6[e6.length - 1].offset != 1) {
        var o3 = {
          offset: 1,
          color: e6[e6.length - 1].color
        };
        e6.push(o3);
      }
      for (var s3 = "", c4 = 0, l3 = 0; l3 < r4.length; l3++) {
        for (n4 = r4[l3]; n4 > e6[c4 + 1].offset; ) c4++;
        var u3 = e6[c4].offset, d3 = (n4 - u3) / (e6[c4 + 1].offset - u3), f3 = e6[c4].color, p2 = e6[c4 + 1].color;
        s3 += ee2(Math.round((1 - d3) * f3[0] + d3 * p2[0]).toString(16)) + ee2(Math.round((1 - d3) * f3[1] + d3 * p2[1]).toString(16)) + ee2(Math.round((1 - d3) * f3[2] + d3 * p2[2]).toString(16));
      }
      return s3.trim();
    }(e5.colors, t), i3 = [];
    i3.push({
      key: "FunctionType",
      value: "0"
    }), i3.push({
      key: "Domain",
      value: "[0.0 1.0]"
    }), i3.push({
      key: "Size",
      value: "[" + t + "]"
    }), i3.push({
      key: "BitsPerSample",
      value: "8"
    }), i3.push({
      key: "Range",
      value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
    }), i3.push({
      key: "Decode",
      value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
    }), $e2({
      data: r3,
      additionalKeyValues: i3,
      alreadyAppliedFilters: ["/ASCIIHexDecode"],
      objectId: n3
    }), W2("endobj"), e5.objectNumber = We2(), W2("<< /ShadingType " + e5.type), W2("/ColorSpace /DeviceRGB");
    var a3 = "/Coords [" + T2(parseFloat(e5.coords[0])) + " " + T2(parseFloat(e5.coords[1])) + " ";
    e5.type === 2 ? a3 += T2(parseFloat(e5.coords[2])) + " " + T2(parseFloat(e5.coords[3])) : a3 += T2(parseFloat(e5.coords[2])) + " " + T2(parseFloat(e5.coords[3])) + " " + T2(parseFloat(e5.coords[4])) + " " + T2(parseFloat(e5.coords[5])), W2(a3 += "]"), e5.matrix && W2("/Matrix [" + e5.matrix.toString() + "]"), W2("/Function " + n3 + " 0 R"), W2("/Extend [true true]"), W2(">>"), W2("endobj");
  }, at2 = function(e5, t) {
    var n3 = Ge2(), r3 = We2();
    t.push({
      resourcesOid: n3,
      objectOid: r3
    }), e5.objectNumber = r3;
    var i3 = [];
    i3.push({
      key: "Type",
      value: "/Pattern"
    }), i3.push({
      key: "PatternType",
      value: "1"
    }), i3.push({
      key: "PaintType",
      value: "1"
    }), i3.push({
      key: "TilingType",
      value: "1"
    }), i3.push({
      key: "BBox",
      value: "[" + e5.boundingBox.map(T2).join(" ") + "]"
    }), i3.push({
      key: "XStep",
      value: T2(e5.xStep)
    }), i3.push({
      key: "YStep",
      value: T2(e5.yStep)
    }), i3.push({
      key: "Resources",
      value: n3 + " 0 R"
    }), e5.matrix && i3.push({
      key: "Matrix",
      value: "[" + e5.matrix.toString() + "]"
    }), $e2({
      data: e5.stream,
      additionalKeyValues: i3,
      objectId: e5.objectNumber
    }), W2("endobj");
  }, ot2 = function(e5) {
    for (var t in e5.objectNumber = We2(), W2("<<"), e5) switch (t) {
      case "opacity":
        W2("/ca " + O2(e5[t]));
        break;
      case "stroke-opacity":
        W2("/CA " + O2(e5[t]));
    }
    W2(">>"), W2("endobj");
  }, st2 = function(e5) {
    Ke2(e5.resourcesOid, true), W2("<<"), W2("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), function() {
      for (var e6 in W2("/Font <<"), Ee2) Ee2.hasOwnProperty(e6) && (false === f2 || true === f2 && p.hasOwnProperty(e6)) && W2("/" + e6 + " " + Ee2[e6].objectNumber + " 0 R");
      W2(">>");
    }(), function() {
      if (Object.keys(ke2).length > 0) {
        for (var e6 in W2("/Shading <<"), ke2) ke2.hasOwnProperty(e6) && ke2[e6] instanceof wo && ke2[e6].objectNumber >= 0 && W2("/" + e6 + " " + ke2[e6].objectNumber + " 0 R");
        Fe2.publish("putShadingPatternDict"), W2(">>");
      }
    }(), function(e6) {
      if (Object.keys(ke2).length > 0) {
        for (var t in W2("/Pattern <<"), ke2) ke2.hasOwnProperty(t) && ke2[t] instanceof m.TilingPattern && ke2[t].objectNumber >= 0 && ke2[t].objectNumber < e6 && W2("/" + t + " " + ke2[t].objectNumber + " 0 R");
        Fe2.publish("putTilingPatternDict"), W2(">>");
      }
    }(e5.objectOid), function() {
      if (Object.keys(je2).length > 0) {
        for (var e6 in W2("/ExtGState <<"), je2) je2.hasOwnProperty(e6) && je2[e6].objectNumber >= 0 && W2("/" + e6 + " " + je2[e6].objectNumber + " 0 R");
        Fe2.publish("putGStateDict"), W2(">>");
      }
    }(), function() {
      for (var e6 in W2("/XObject <<"), Le2) Le2.hasOwnProperty(e6) && Le2[e6].objectNumber >= 0 && W2("/" + e6 + " " + Le2[e6].objectNumber + " 0 R");
      Fe2.publish("putXobjectDict"), W2(">>");
    }(), W2(">>"), W2("endobj");
  }, ct2 = function(e5) {
    De2[e5.fontName] = De2[e5.fontName] || {}, De2[e5.fontName][e5.fontStyle] = e5.id;
  }, lt2 = function(e5, t, n3, r3, i3) {
    var a3 = {
      id: "F" + (Object.keys(Ee2).length + 1).toString(10),
      postScriptName: e5,
      fontName: t,
      fontStyle: n3,
      encoding: r3,
      isStandardFont: i3 || false,
      metadata: {}
    };
    return Fe2.publish("addFont", {
      font: a3,
      instance: this
    }), Ee2[a3.id] = a3, ct2(a3), a3.id;
  }, ut2 = m.__private__.pdfEscape = m.pdfEscape = function(e5, t) {
    return function(e6, t2) {
      var n3, r3, i3, a3, o3, s3, c4, l3, u3;
      if (i3 = (t2 || (t2 = {})).sourceEncoding || "Unicode", o3 = t2.outputEncoding, (t2.autoencode || o3) && Ee2[xe2].metadata && Ee2[xe2].metadata[i3] && Ee2[xe2].metadata[i3].encoding && (a3 = Ee2[xe2].metadata[i3].encoding, !o3 && Ee2[xe2].encoding && (o3 = Ee2[xe2].encoding), !o3 && a3.codePages && (o3 = a3.codePages[0]), typeof o3 == "string" && (o3 = a3[o3]), o3)) {
        for (c4 = false, s3 = [], n3 = 0, r3 = e6.length; n3 < r3; n3++) (l3 = o3[e6.charCodeAt(n3)]) ? s3.push(String.fromCharCode(l3)) : s3.push(e6[n3]), s3[n3].charCodeAt(0) >> 8 && (c4 = true);
        e6 = s3.join("");
      }
      for (n3 = e6.length; c4 === void 0 && n3 !== 0; ) e6.charCodeAt(n3 - 1) >> 8 && (c4 = true), n3--;
      if (!c4) return e6;
      for (s3 = t2.noBOM ? [] : [254, 255], n3 = 0, r3 = e6.length; n3 < r3; n3++) {
        if ((u3 = (l3 = e6.charCodeAt(n3)) >> 8) >> 8) throw Error("Character at position " + n3 + " of string '" + e6 + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
        s3.push(u3), s3.push(l3 - (u3 << 8));
      }
      return String.fromCharCode.apply(void 0, s3);
    }(e5, t).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }, dt2 = m.__private__.beginPage = function(e5) {
    ie2[++Pe2] = [], G2[Pe2] = {
      objId: 0,
      contentsObjId: 0,
      userUnit: Number(c3),
      artBox: null,
      bleedBox: null,
      cropBox: null,
      trimBox: null,
      mediaBox: {
        bottomLeftX: 0,
        bottomLeftY: 0,
        topRightX: Number(e5[0]),
        topRightY: Number(e5[1])
      }
    }, mt2(Pe2), se2(ie2[B2]);
  }, ft2 = function(e5, t) {
    var n3, i3, o3;
    switch (r2 = t || r2, typeof e5 == "string" && (n3 = v(e5.toLowerCase()), Array.isArray(n3) && (i3 = n3[0], o3 = n3[1])), Array.isArray(e5) && (i3 = e5[0] * Se2, o3 = e5[1] * Se2), isNaN(i3) && (i3 = a2[0], o3 = a2[1]), (i3 > 14400 || o3 > 14400) && (Ja.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), i3 = Math.min(14400, i3), o3 = Math.min(14400, o3)), a2 = [i3, o3], r2.substr(0, 1)) {
      case "l":
        o3 > i3 && (a2 = [o3, i3]);
        break;
      case "p":
        i3 > o3 && (a2 = [o3, i3]);
    }
    dt2(a2), qt2(Gt2), W2(en2), sn2 !== 0 && W2(sn2 + " J"), cn2 !== 0 && W2(cn2 + " j"), Fe2.publish("addPage", { pageNumber: Pe2 });
  }, pt2 = function(e5) {
    e5 > 0 && e5 <= Pe2 && (ie2.splice(e5, 1), G2.splice(e5, 1), Pe2--, B2 > Pe2 && (B2 = Pe2), this.setPage(B2));
  }, mt2 = function(e5) {
    e5 > 0 && e5 <= Pe2 && (B2 = e5);
  }, ht2 = m.__private__.getNumberOfPages = m.getNumberOfPages = function() {
    return ie2.length - 1;
  }, gt2 = function(e5, t, n3) {
    var r3, i3 = void 0;
    return n3 || (n3 = {}), e5 = e5 === void 0 ? Ee2[xe2].fontName : e5, t = t === void 0 ? Ee2[xe2].fontStyle : t, r3 = e5.toLowerCase(), De2[r3] !== void 0 && De2[r3][t] !== void 0 ? i3 = De2[r3][t] : De2[e5] !== void 0 && De2[e5][t] !== void 0 ? i3 = De2[e5][t] : false === n3.disableWarning && Ja.warn("Unable to look up font label for font '" + e5 + "', '" + t + "'. Refer to getFontList() for available fonts."), i3 || n3.noFallback || ((i3 = De2.times[t]) ?? (i3 = De2.times.normal)), i3;
  }, _t2 = m.__private__.putInfo = function() {
    var e5 = We2(), t = function(e6) {
      return e6;
    };
    for (var n3 in d2 !== null && (t = Dt2.encryptor(e5, 0)), W2("<<"), W2("/Producer (" + ut2(t("jsPDF " + Z.version)) + ")"), be2) be2.hasOwnProperty(n3) && be2[n3] && W2("/" + n3.substr(0, 1).toUpperCase() + n3.substr(1) + " (" + ut2(t(be2[n3])) + ")");
    W2("/CreationDate (" + ut2(t(M2)) + ")"), W2(">>"), W2("endobj");
  }, vt2 = m.__private__.putCatalog = function(e5) {
    var t = (e5 || (e5 = {})).rootDictionaryObjId || Je2;
    switch (We2(), W2("<<"), W2("/Type /Catalog"), W2("/Pages " + t + " 0 R"), fe2 || (fe2 = "fullwidth"), fe2) {
      case "fullwidth":
        W2("/OpenAction [3 0 R /FitH null]");
        break;
      case "fullheight":
        W2("/OpenAction [3 0 R /FitV null]");
        break;
      case "fullpage":
        W2("/OpenAction [3 0 R /Fit]");
        break;
      case "original":
        W2("/OpenAction [3 0 R /XYZ null null 1]");
        break;
      default:
        var n3 = "" + fe2;
        n3.substr(n3.length - 1) === "%" && (fe2 = parseInt(fe2) / 100), typeof fe2 == "number" && W2("/OpenAction [3 0 R /XYZ null null " + O2(fe2) + "]");
    }
    switch (_e2 || (_e2 = "continuous"), _e2) {
      case "continuous":
        W2("/PageLayout /OneColumn");
        break;
      case "single":
        W2("/PageLayout /SinglePage");
        break;
      case "two":
      case "twoleft":
        W2("/PageLayout /TwoColumnLeft");
        break;
      case "tworight":
        W2("/PageLayout /TwoColumnRight");
    }
    he2 && W2("/PageMode /" + he2), Fe2.publish("putCatalog"), W2(">>"), W2("endobj");
  }, yt2 = m.__private__.putTrailer = function() {
    W2("trailer"), W2("<<"), W2("/Size " + (H2 + 1)), W2("/Root " + H2 + " 0 R"), W2("/Info " + (H2 - 1) + " 0 R"), d2 !== null && W2("/Encrypt " + Dt2.oid + " 0 R"), W2("/ID [ <" + N2 + "> <" + N2 + "> ]"), W2(">>");
  }, bt2 = m.__private__.putHeader = function() {
    W2("%PDF-" + h), W2("%ºß¬à");
  }, xt2 = m.__private__.putXRef = function() {
    var e5 = "0000000000";
    W2("xref"), W2("0 " + (H2 + 1)), W2("0000000000 65535 f ");
    for (var t = 1; t <= H2; t++) typeof te2[t] == "function" ? W2((e5 + te2[t]()).slice(-10) + " 00000 n ") : te2[t] === void 0 ? W2("0000000000 00000 n ") : W2((e5 + te2[t]).slice(-10) + " 00000 n ");
  }, St2 = m.__private__.buildDocument = function() {
    var e5;
    H2 = 0, ne2 = 0, U2 = [], te2 = [], re2 = [], Je2 = Ge2(), Ye2 = Ge2(), se2(U2), Fe2.publish("buildDocument"), bt2(), tt2(), function() {
      Fe2.publish("putAdditionalObjects");
      for (var e6 = 0; e6 < re2.length; e6++) {
        var t2 = re2[e6];
        Ke2(t2.objId, true), W2(t2.content), W2("endobj");
      }
      Fe2.publish("postPutAdditionalObjects");
    }(), e5 = [], function() {
      for (var e6 in Ee2) Ee2.hasOwnProperty(e6) && (false === f2 || true === f2 && p.hasOwnProperty(e6)) && nt2(Ee2[e6]);
    }(), function() {
      for (var e6 in je2) je2.hasOwnProperty(e6) && ot2(je2[e6]);
    }(), function() {
      for (var e6 in Le2) Le2.hasOwnProperty(e6) && rt2(Le2[e6]);
    }(), function(e6) {
      for (var t2 in ke2) ke2.hasOwnProperty(t2) && (ke2[t2] instanceof wo ? it2(ke2[t2]) : ke2[t2] instanceof To && at2(ke2[t2], e6));
    }(e5), Fe2.publish("putResources"), e5.forEach(st2), st2({
      resourcesOid: Ye2,
      objectOid: 2 ** 53 - 1
    }), Fe2.publish("postPutResources"), d2 !== null && (Dt2.oid = We2(), W2("<<"), W2("/Filter /Standard"), W2("/V " + Dt2.v), W2("/R " + Dt2.r), W2("/U <" + Dt2.toHexString(Dt2.U) + ">"), W2("/O <" + Dt2.toHexString(Dt2.O) + ">"), W2("/P " + Dt2.P), W2(">>"), W2("endobj")), _t2(), vt2();
    var t = ne2;
    return xt2(), yt2(), W2("startxref"), W2("" + t), W2("%%EOF"), se2(ie2[B2]), U2.join("\n");
  }, Ct2 = m.__private__.getBlob = function(e5) {
    return new Blob([le2(e5)], { type: "application/pdf" });
  }, wt2 = function(e5) {
    for (; e5.firstChild; ) e5.removeChild(e5.firstChild);
  }, Tt2 = function(e5) {
    var t, n3 = e5.document, r3 = n3.documentElement, i3 = n3.head, a3 = n3.body;
    return i3 || (i3 = n3.createElement("head"), r3.appendChild(i3)), a3 || (a3 = n3.createElement("body"), r3.appendChild(a3)), wt2(i3), wt2(a3), (t = n3.createElement("style")).appendChild(n3.createTextNode("html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}")), i3.appendChild(t), {
      document: n3,
      body: a3
    };
  }, Et2 = m.output = m.__private__.output = (Ue2 = function(e5, t) {
    switch (typeof (t || (t = {})) == "string" ? t = { filename: t } : t.filename = t.filename || "generated.pdf", e5) {
      case void 0:
        return St2();
      case "save":
        m.save(t.filename);
        break;
      case "arraybuffer":
        return le2(St2());
      case "blob":
        return Ct2(St2());
      case "bloburi":
      case "bloburl":
        if (X.URL !== void 0 && typeof X.URL.createObjectURL == "function") return X.URL && X.URL.createObjectURL(Ct2(St2())) || void 0;
        Ja.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
        break;
      case "datauristring":
      case "dataurlstring":
        var n3 = "", r3 = St2();
        try {
          n3 = to(r3);
        } catch {
          n3 = to(unescape(encodeURIComponent(r3)));
        }
        return "data:application/pdf;filename=" + encodeURIComponent(t.filename) + ";base64," + n3;
      case "pdfobjectnewwindow":
        if (Object.prototype.toString.call(X) === "[object Window]") {
          var i3 = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", a3 = !t.pdfObjectUrl;
          a3 || (i3 = t.pdfObjectUrl);
          var o3 = X.open();
          if (o3 !== null) {
            var s3 = Tt2(o3), c4 = s3.document.createElement("script"), l3 = this;
            c4.src = i3, a3 && (c4.integrity = "sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==", c4.crossOrigin = "anonymous"), c4.onload = function() {
              o3.PDFObject.embed(l3.output("dataurlstring"), t);
            }, s3.body.appendChild(c4);
          }
          return o3;
        }
        throw Error("The option pdfobjectnewwindow just works in a browser-environment.");
      case "pdfjsnewwindow":
        if (Object.prototype.toString.call(X) === "[object Window]") {
          var u3 = t.pdfJsUrl || "examples/PDF.js/web/viewer.html", d3 = X.open();
          if (d3 !== null) {
            var f3 = Tt2(d3), p2 = f3.document.createElement("iframe"), h2 = u3.indexOf("?") === -1 ? "?" : "&";
            l3 = this, p2.id = "pdfViewer", p2.width = "500px", p2.height = "400px", p2.src = u3 + h2 + "file=&downloadName=" + encodeURIComponent(t.filename), p2.onload = function() {
              d3.document.title = t.filename, p2.contentWindow.PDFViewerApplication.open(l3.output("bloburl"));
            }, f3.body.appendChild(p2);
          }
          return d3;
        }
        throw Error("The option pdfjsnewwindow just works in a browser-environment.");
      case "dataurlnewwindow":
        if (Object.prototype.toString.call(X) !== "[object Window]") throw Error("The option dataurlnewwindow just works in a browser-environment.");
        var g2 = X.open();
        if (g2 !== null) {
          var _2 = Tt2(g2), v2 = _2.document.createElement("iframe");
          v2.src = this.output("datauristring", t), _2.body.appendChild(v2), g2.document.title = t.filename;
        }
        if (g2 || typeof safari > "u") return g2;
        break;
      case "datauri":
      case "dataurl":
        return X.document.location.href = this.output("datauristring", t);
      default:
        return null;
    }
  }, Ue2.foo = function() {
    try {
      return Ue2.apply(this, arguments);
    } catch (n3) {
      var e5 = n3.stack || "";
      ~e5.indexOf(" at ") && (e5 = e5.split(" at ")[1]);
      var t = "Error in function " + e5.split("\n")[0].split("<")[0] + ": " + n3.message;
      if (!X.console) throw Error(t);
      X.console.error(t, n3), X.alert && alert(t);
    }
  }, Ue2.foo.bar = Ue2, Ue2.foo), q2 = function(e5) {
    return true === Array.isArray(Ie2) && Ie2.indexOf(e5) > -1;
  };
  switch (i2) {
    case "pt":
      Se2 = 1;
      break;
    case "mm":
      Se2 = 72 / 25.4;
      break;
    case "cm":
      Se2 = 72 / 2.54;
      break;
    case "in":
      Se2 = 72;
      break;
    case "px":
      Se2 = q2("px_scaling") == 1 ? 0.75 : 96 / 72;
      break;
    case "pc":
    case "em":
      Se2 = 12;
      break;
    case "ex":
      Se2 = 6;
      break;
    default:
      if (typeof i2 != "number") throw Error("Invalid unit: " + i2);
      Se2 = i2;
  }
  var Dt2 = null;
  R2(), F2();
  var Ot2 = m.__private__.getPageInfo = m.getPageInfo = function(e5) {
    if (isNaN(e5) || e5 % 1 != 0) throw Error("Invalid argument passed to jsPDF.getPageInfo");
    return {
      objId: G2[e5].objId,
      pageNumber: e5,
      pageContext: G2[e5]
    };
  }, kt2 = m.__private__.getPageInfoByObjId = function(e5) {
    if (isNaN(e5) || e5 % 1 != 0) throw Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
    for (var t in G2) if (G2[t].objId === e5) break;
    return Ot2(t);
  }, At2 = m.__private__.getCurrentPageInfo = m.getCurrentPageInfo = function() {
    return {
      objId: G2[B2].objId,
      pageNumber: B2,
      pageContext: G2[B2]
    };
  };
  m.addPage = function() {
    return ft2.apply(this, arguments), this;
  }, m.setPage = function() {
    return mt2.apply(this, arguments), se2.call(this, ie2[B2]), this;
  }, m.insertPage = function(e5) {
    return this.addPage(), this.movePage(B2, e5), this;
  }, m.movePage = function(e5, t) {
    var n3, r3;
    if (e5 > t) {
      n3 = ie2[e5], r3 = G2[e5];
      for (var i3 = e5; i3 > t; i3--) ie2[i3] = ie2[i3 - 1], G2[i3] = G2[i3 - 1];
      ie2[t] = n3, G2[t] = r3, this.setPage(t);
    } else if (e5 < t) {
      n3 = ie2[e5], r3 = G2[e5];
      for (var a3 = e5; a3 < t; a3++) ie2[a3] = ie2[a3 + 1], G2[a3] = G2[a3 + 1];
      ie2[t] = n3, G2[t] = r3, this.setPage(t);
    }
    return this;
  }, m.deletePage = function() {
    return pt2.apply(this, arguments), this;
  }, m.__private__.text = m.text = function(e5, n3, r3, i3, a3) {
    var o3, s3, c4, l3, u3, d3, f3, m2, h2, g2 = (i3 || (i3 = {})).scope || this;
    if (typeof e5 == "number" && typeof n3 == "number" && (typeof r3 == "string" || Array.isArray(r3))) {
      var _2 = r3;
      r3 = n3, n3 = e5, e5 = _2;
    }
    if (arguments[3] instanceof K2 == 0 ? (c4 = arguments[4], l3 = arguments[5], e(f3 = arguments[3]) === "object" && f3 !== null || (typeof c4 == "string" && (l3 = c4, c4 = null), typeof f3 == "string" && (l3 = f3, f3 = null), typeof f3 == "number" && (c4 = f3, f3 = null), i3 = {
      flags: f3,
      angle: c4,
      align: l3
    })) : (E2("The transform parameter of text() with a Matrix value"), h2 = a3), isNaN(n3) || isNaN(r3) || e5 == null) throw Error("Invalid arguments passed to jsPDF.text");
    if (e5.length === 0) return g2;
    var v2, y2 = "", S3 = typeof i3.lineHeightFactor == "number" ? i3.lineHeightFactor : Wt2, C3 = g2.internal.scaleFactor;
    function w3(e6) {
      return e6 = e6.split("	").join(Array(i3.TabLen || 9).join(" ")), ut2(e6, f3);
    }
    function D3(e6) {
      for (var t, n4 = e6.concat(), r4 = [], i4 = n4.length; i4--; ) typeof (t = n4.shift()) == "string" ? r4.push(t) : Array.isArray(e6) && (t.length === 1 || t[1] === void 0 && t[2] === void 0) ? r4.push(t[0]) : r4.push([
        t[0],
        t[1],
        t[2]
      ]);
      return r4;
    }
    function O3(e6, t) {
      var n4;
      if (typeof e6 == "string") n4 = t(e6)[0];
      else if (Array.isArray(e6)) {
        for (var r4, i4, a4 = e6.concat(), o4 = [], s4 = a4.length; s4--; ) typeof (r4 = a4.shift()) == "string" ? o4.push(t(r4)[0]) : Array.isArray(r4) && typeof r4[0] == "string" && (i4 = t(r4[0], r4[1], r4[2]), o4.push([
          i4[0],
          i4[1],
          i4[2]
        ]));
        n4 = o4;
      }
      return n4;
    }
    var k3 = false, j3 = true;
    if (typeof e5 == "string") k3 = true;
    else if (Array.isArray(e5)) {
      var M3 = e5.concat();
      s3 = [];
      for (var N3, P3 = M3.length; P3--; ) (typeof (N3 = M3.shift()) != "string" || Array.isArray(N3) && typeof N3[0] != "string") && (j3 = false);
      k3 = j3;
    }
    if (false === k3) throw Error('Type of text must be string or Array. "' + e5 + '" is not recognized.');
    typeof e5 == "string" && (e5 = e5.match(/[\r?\n]/) ? e5.split(/\r\n|\r|\n/g) : [e5]);
    var F3 = de2 / g2.internal.scaleFactor, I3 = F3 * (S3 - 1);
    switch (i3.baseline) {
      case "bottom":
        r3 -= I3;
        break;
      case "top":
        r3 += F3 - I3;
        break;
      case "hanging":
        r3 += F3 - 2 * I3;
        break;
      case "middle":
        r3 += F3 / 2 - I3;
    }
    if ((d3 = i3.maxWidth || 0) > 0 && (typeof e5 == "string" ? e5 = g2.splitTextToSize(e5, d3) : Object.prototype.toString.call(e5) === "[object Array]" && (e5 = e5.reduce(function(e6, t) {
      return e6.concat(g2.splitTextToSize(t, d3));
    }, []))), o3 = {
      text: e5,
      x: n3,
      y: r3,
      options: i3,
      mutex: {
        pdfEscape: ut2,
        activeFontKey: xe2,
        fonts: Ee2,
        activeFontSize: de2
      }
    }, Fe2.publish("preProcessText", o3), e5 = o3.text, c4 = (i3 = o3.options).angle, h2 instanceof K2 == 0 && c4 && typeof c4 == "number") {
      c4 *= Math.PI / 180, i3.rotationDirection === 0 && (c4 = -c4), x2 === b2 && (c4 = -c4);
      var L3 = Math.cos(c4), R3 = Math.sin(c4);
      h2 = new K2(L3, R3, -R3, L3, 0, 0);
    } else c4 && c4 instanceof K2 && (h2 = c4);
    x2 !== b2 || h2 || (h2 = Ve2), (u3 = i3.charSpace || an2) !== void 0 && (y2 += T2(A2(u3)) + " Tc\n", this.setCharSpace(this.getCharSpace() || 0)), (m2 = i3.horizontalScale) !== void 0 && (y2 += T2(100 * m2) + " Tz\n"), i3.lang;
    var z3 = -1, B3 = i3.renderingMode === void 0 ? i3.stroke : i3.renderingMode, V3 = g2.internal.getCurrentPageInfo().pageContext;
    switch (B3) {
      case 0:
      case false:
      case "fill":
        z3 = 0;
        break;
      case 1:
      case true:
      case "stroke":
        z3 = 1;
        break;
      case 2:
      case "fillThenStroke":
        z3 = 2;
        break;
      case 3:
      case "invisible":
        z3 = 3;
        break;
      case 4:
      case "fillAndAddForClipping":
        z3 = 4;
        break;
      case 5:
      case "strokeAndAddPathForClipping":
        z3 = 5;
        break;
      case 6:
      case "fillThenStrokeAndAddToPathForClipping":
        z3 = 6;
        break;
      case 7:
      case "addToPathForClipping":
        z3 = 7;
    }
    var ee3 = V3.usedRenderingMode === void 0 ? -1 : V3.usedRenderingMode;
    z3 === -1 ? ee3 !== -1 && (y2 += "0 Tr\n") : y2 += z3 + " Tr\n", z3 !== -1 && (V3.usedRenderingMode = z3), l3 = i3.align || "left";
    var H3, te3 = de2 * S3, U3 = g2.internal.pageSize.getWidth(), ne3 = Ee2[xe2];
    u3 = i3.charSpace || an2, d3 = i3.maxWidth || 0, f3 = Object.assign({
      autoencode: true,
      noBOM: true
    }, i3.flags);
    var re3 = [], ie3 = function(e6) {
      return g2.getStringUnitWidth(e6, {
        font: ne3,
        charSpace: u3,
        fontSize: de2,
        doKerning: false
      }) * de2 / C3;
    };
    if (Object.prototype.toString.call(e5) === "[object Array]") {
      var ae3;
      s3 = D3(e5), l3 !== "left" && (H3 = s3.map(ie3));
      var oe3, se3 = 0;
      if (l3 === "right") {
        n3 -= H3[0], e5 = [], P3 = s3.length;
        for (var ce3 = 0; ce3 < P3; ce3++) ce3 === 0 ? (oe3 = J2(n3), ae3 = Zt2(r3)) : (oe3 = A2(se3 - H3[ce3]), ae3 = -te3), e5.push([
          s3[ce3],
          oe3,
          ae3
        ]), se3 = H3[ce3];
      } else if (l3 === "center") {
        n3 -= H3[0] / 2, e5 = [], P3 = s3.length;
        for (var le3 = 0; le3 < P3; le3++) le3 === 0 ? (oe3 = J2(n3), ae3 = Zt2(r3)) : (oe3 = A2((se3 - H3[le3]) / 2), ae3 = -te3), e5.push([
          s3[le3],
          oe3,
          ae3
        ]), se3 = H3[le3];
      } else if (l3 === "left") {
        e5 = [], P3 = s3.length;
        for (var ue3 = 0; ue3 < P3; ue3++) e5.push(s3[ue3]);
      } else if (l3 === "justify" && ne3.encoding === "Identity-H") {
        e5 = [], P3 = s3.length, d3 = d3 === 0 ? U3 : d3;
        for (var fe3 = 0, pe3 = 0; pe3 < P3; pe3++) if (ae3 = pe3 === 0 ? Zt2(r3) : -te3, oe3 = pe3 === 0 ? J2(n3) : fe3, pe3 < P3 - 1) {
          var he3 = A2((d3 - H3[pe3]) / (s3[pe3].split(" ").length - 1)), ge3 = s3[pe3].split(" ");
          e5.push([
            ge3[0] + " ",
            oe3,
            ae3
          ]), fe3 = 0;
          for (var _e3 = 1; _e3 < ge3.length; _e3++) {
            var ve3 = (ie3(ge3[_e3 - 1] + " " + ge3[_e3]) - ie3(ge3[_e3])) * C3 + he3;
            _e3 == ge3.length - 1 ? e5.push([
              ge3[_e3],
              ve3,
              0
            ]) : e5.push([
              ge3[_e3] + " ",
              ve3,
              0
            ]), fe3 -= ve3;
          }
        } else e5.push([
          s3[pe3],
          oe3,
          ae3
        ]);
        e5.push([
          "",
          fe3,
          0
        ]);
      } else {
        if (l3 !== "justify") throw Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
        for (e5 = [], P3 = s3.length, d3 = d3 === 0 ? U3 : d3, pe3 = 0; pe3 < P3; pe3++) {
          ae3 = pe3 === 0 ? Zt2(r3) : -te3, oe3 = pe3 === 0 ? J2(n3) : 0;
          var ye3 = s3[pe3].split(" ").length - 1, be3 = ye3 > 0 ? (d3 - H3[pe3]) / ye3 : 0;
          pe3 < P3 - 1 ? re3.push(T2(A2(be3))) : re3.push(0), e5.push([
            s3[pe3],
            oe3,
            ae3
          ]);
        }
      }
    }
    true === (typeof i3.R2L == "boolean" ? i3.R2L : me2) && (e5 = O3(e5, function(e6, t, n4) {
      return [
        e6.split("").reverse().join(""),
        t,
        n4
      ];
    })), o3 = {
      text: e5,
      x: n3,
      y: r3,
      options: i3,
      mutex: {
        pdfEscape: ut2,
        activeFontKey: xe2,
        fonts: Ee2,
        activeFontSize: de2
      }
    }, Fe2.publish("postProcessText", o3), e5 = o3.text, v2 = o3.mutex.isHex || false;
    var Se3 = Ee2[xe2].encoding;
    Se3 !== "WinAnsiEncoding" && Se3 !== "StandardEncoding" || (e5 = O3(e5, function(e6, t, n4) {
      return [
        w3(e6),
        t,
        n4
      ];
    })), s3 = D3(e5), e5 = [];
    for (var Ce3, we3, Te3, De3 = Array.isArray(s3[0]) ? 1 : 0, Oe3 = "", ke3 = function(e6, t, n4) {
      var r4 = "";
      return n4 instanceof K2 ? (n4 = typeof i3.angle == "number" ? Be2(n4, new K2(1, 0, 0, 1, e6, t)) : Be2(new K2(1, 0, 0, 1, e6, t), n4), x2 === b2 && (n4 = Be2(new K2(1, 0, 0, -1, 0, 0), n4)), r4 = n4.join(" ") + " Tm\n") : r4 = T2(e6) + " " + T2(t) + " Td\n", r4;
    }, Ae3 = 0; Ae3 < s3.length; Ae3++) {
      switch (Oe3 = "", De3) {
        case 1:
          Te3 = (v2 ? "<" : "(") + s3[Ae3][0] + (v2 ? ">" : ")"), Ce3 = parseFloat(s3[Ae3][1]), we3 = parseFloat(s3[Ae3][2]);
          break;
        case 0:
          Te3 = (v2 ? "<" : "(") + s3[Ae3] + (v2 ? ">" : ")"), Ce3 = J2(n3), we3 = Zt2(r3);
      }
      re3 !== void 0 && re3[Ae3] !== void 0 && (Oe3 = re3[Ae3] + " Tw\n"), Ae3 === 0 ? e5.push(Oe3 + ke3(Ce3, we3, h2) + Te3) : De3 === 0 ? e5.push(Oe3 + Te3) : De3 === 1 && e5.push(Oe3 + ke3(Ce3, we3, h2) + Te3);
    }
    e5 = De3 === 0 ? e5.join(" Tj\nT* ") : e5.join(" Tj\n"), e5 += " Tj\n";
    var je3 = "BT\n/";
    return je3 += xe2 + " " + de2 + " Tf\n", je3 += T2(de2 * S3) + " TL\n", je3 += nn2 + "\n", je3 += y2, je3 += e5, W2(je3 += "ET"), p[xe2] = true, g2;
  };
  var jt2 = m.__private__.clip = m.clip = function(e5) {
    return W2(e5 === "evenodd" ? "W*" : "W"), this;
  };
  m.clipEvenOdd = function() {
    return jt2("evenodd");
  }, m.__private__.discardPath = m.discardPath = function() {
    return W2("n"), this;
  };
  var Mt2 = m.__private__.isValidStyle = function(e5) {
    var t = false;
    return [
      void 0,
      null,
      "S",
      "D",
      "F",
      "DF",
      "FD",
      "f",
      "f*",
      "B",
      "B*",
      "n"
    ].indexOf(e5) !== -1 && (t = true), t;
  };
  m.__private__.setDefaultPathOperation = m.setDefaultPathOperation = function(e5) {
    return Mt2(e5) && (u2 = e5), this;
  };
  var Nt2 = m.__private__.getStyle = m.getStyle = function(e5) {
    var t = u2;
    switch (e5) {
      case "D":
      case "S":
        t = "S";
        break;
      case "F":
        t = "f";
        break;
      case "FD":
      case "DF":
        t = "B";
        break;
      case "f":
      case "f*":
      case "B":
      case "B*":
        t = e5;
    }
    return t;
  }, Pt2 = m.close = function() {
    return W2("h"), this;
  };
  m.stroke = function() {
    return W2("S"), this;
  }, m.fill = function(e5) {
    return Ft2("f", e5), this;
  }, m.fillEvenOdd = function(e5) {
    return Ft2("f*", e5), this;
  }, m.fillStroke = function(e5) {
    return Ft2("B", e5), this;
  }, m.fillStrokeEvenOdd = function(e5) {
    return Ft2("B*", e5), this;
  };
  var Ft2 = function(e5, n3) {
    e(n3) === "object" ? Rt2(n3, e5) : W2(e5);
  }, It2 = function(e5) {
    e5 === null || x2 === b2 && e5 === void 0 || (e5 = Nt2(e5), W2(e5));
  };
  function Lt2(e5, t, n3, r3, i3) {
    var a3 = new To(t || this.boundingBox, n3 || this.xStep, r3 || this.yStep, this.gState, i3 || this.matrix);
    return a3.stream = this.stream, He2(e5 + "$$" + this.cloneIndex++ + "$$", a3), a3;
  }
  var Rt2 = function(e5, t) {
    var n3 = Ae2[e5.key], r3 = ke2[n3];
    if (r3 instanceof wo) W2("q"), W2(zt2(t)), r3.gState && m.setGState(r3.gState), W2(e5.matrix.toString() + " cm"), W2("/" + n3 + " sh"), W2("Q");
    else if (r3 instanceof To) {
      var i3 = new K2(1, 0, 0, -1, 0, Y2());
      e5.matrix && (i3 = i3.multiply(e5.matrix || Ve2), n3 = Lt2.call(r3, e5.key, e5.boundingBox, e5.xStep, e5.yStep, i3).id), W2("q"), W2("/Pattern cs"), W2("/" + n3 + " scn"), r3.gState && m.setGState(r3.gState), W2(t), W2("Q");
    }
  }, zt2 = function(e5) {
    switch (e5) {
      case "f":
      case "F":
      case "n":
        return "W n";
      case "f*":
        return "W* n";
      case "B":
      case "S":
        return "W S";
      case "B*":
        return "W* S";
    }
  }, Bt2 = m.moveTo = function(e5, t) {
    return W2(T2(A2(e5)) + " " + T2(j2(t)) + " m"), this;
  }, Vt2 = m.lineTo = function(e5, t) {
    return W2(T2(A2(e5)) + " " + T2(j2(t)) + " l"), this;
  }, Ht2 = m.curveTo = function(e5, t, n3, r3, i3, a3) {
    return W2([
      T2(A2(e5)),
      T2(j2(t)),
      T2(A2(n3)),
      T2(j2(r3)),
      T2(A2(i3)),
      T2(j2(a3)),
      "c"
    ].join(" ")), this;
  };
  m.__private__.line = m.line = function(e5, t, n3, r3, i3) {
    if (isNaN(e5) || isNaN(t) || isNaN(n3) || isNaN(r3) || !Mt2(i3)) throw Error("Invalid arguments passed to jsPDF.line");
    return x2 === y ? this.lines([[n3 - e5, r3 - t]], e5, t, [1, 1], i3 || "S") : this.lines([[n3 - e5, r3 - t]], e5, t, [1, 1]).stroke();
  }, m.__private__.lines = m.lines = function(e5, t, n3, r3, i3, a3) {
    var o3, s3, c4, l3, u3, d3, f3, p2, m2, h2, g2, _2;
    if (typeof e5 == "number" && (_2 = n3, n3 = t, t = e5, e5 = _2), r3 || (r3 = [1, 1]), a3 || (a3 = false), isNaN(t) || isNaN(n3) || !Array.isArray(e5) || !Array.isArray(r3) || !Mt2(i3) || typeof a3 != "boolean") throw Error("Invalid arguments passed to jsPDF.lines");
    for (Bt2(t, n3), o3 = r3[0], s3 = r3[1], l3 = e5.length, h2 = t, g2 = n3, c4 = 0; c4 < l3; c4++) (u3 = e5[c4]).length === 2 ? (h2 = u3[0] * o3 + h2, g2 = u3[1] * s3 + g2, Vt2(h2, g2)) : (d3 = u3[0] * o3 + h2, f3 = u3[1] * s3 + g2, p2 = u3[2] * o3 + h2, m2 = u3[3] * s3 + g2, h2 = u3[4] * o3 + h2, g2 = u3[5] * s3 + g2, Ht2(d3, f3, p2, m2, h2, g2));
    return a3 && Pt2(), It2(i3), this;
  }, m.path = function(e5) {
    for (var t = 0; t < e5.length; t++) {
      var n3 = e5[t], r3 = n3.c;
      switch (n3.op) {
        case "m":
          Bt2(r3[0], r3[1]);
          break;
        case "l":
          Vt2(r3[0], r3[1]);
          break;
        case "c":
          Ht2.apply(this, r3);
          break;
        case "h":
          Pt2();
      }
    }
    return this;
  }, m.__private__.rect = m.rect = function(e5, t, n3, r3, i3) {
    if (isNaN(e5) || isNaN(t) || isNaN(n3) || isNaN(r3) || !Mt2(i3)) throw Error("Invalid arguments passed to jsPDF.rect");
    return x2 === y && (r3 = -r3), W2([
      T2(A2(e5)),
      T2(j2(t)),
      T2(A2(n3)),
      T2(A2(r3)),
      "re"
    ].join(" ")), It2(i3), this;
  }, m.__private__.triangle = m.triangle = function(e5, t, n3, r3, i3, a3, o3) {
    if (isNaN(e5) || isNaN(t) || isNaN(n3) || isNaN(r3) || isNaN(i3) || isNaN(a3) || !Mt2(o3)) throw Error("Invalid arguments passed to jsPDF.triangle");
    return this.lines([
      [n3 - e5, r3 - t],
      [i3 - n3, a3 - r3],
      [e5 - i3, t - a3]
    ], e5, t, [1, 1], o3, true), this;
  }, m.__private__.roundedRect = m.roundedRect = function(e5, t, n3, r3, i3, a3, o3) {
    if (isNaN(e5) || isNaN(t) || isNaN(n3) || isNaN(r3) || isNaN(i3) || isNaN(a3) || !Mt2(o3)) throw Error("Invalid arguments passed to jsPDF.roundedRect");
    var s3 = 4 / 3 * (Math.SQRT2 - 1);
    return i3 = Math.min(i3, 0.5 * n3), a3 = Math.min(a3, 0.5 * r3), this.lines([
      [n3 - 2 * i3, 0],
      [
        i3 * s3,
        0,
        i3,
        a3 - a3 * s3,
        i3,
        a3
      ],
      [0, r3 - 2 * a3],
      [
        0,
        a3 * s3,
        -i3 * s3,
        a3,
        -i3,
        a3
      ],
      [2 * i3 - n3, 0],
      [
        -i3 * s3,
        0,
        -i3,
        -a3 * s3,
        -i3,
        -a3
      ],
      [0, 2 * a3 - r3],
      [
        0,
        -a3 * s3,
        i3 * s3,
        -a3,
        i3,
        -a3
      ]
    ], e5 + i3, t, [1, 1], o3, true), this;
  }, m.__private__.ellipse = m.ellipse = function(e5, t, n3, r3, i3) {
    if (isNaN(e5) || isNaN(t) || isNaN(n3) || isNaN(r3) || !Mt2(i3)) throw Error("Invalid arguments passed to jsPDF.ellipse");
    var a3 = 4 / 3 * (Math.SQRT2 - 1) * n3, o3 = 4 / 3 * (Math.SQRT2 - 1) * r3;
    return Bt2(e5 + n3, t), Ht2(e5 + n3, t - o3, e5 + a3, t - r3, e5, t - r3), Ht2(e5 - a3, t - r3, e5 - n3, t - o3, e5 - n3, t), Ht2(e5 - n3, t + o3, e5 - a3, t + r3, e5, t + r3), Ht2(e5 + a3, t + r3, e5 + n3, t + o3, e5 + n3, t), It2(i3), this;
  }, m.__private__.circle = m.circle = function(e5, t, n3, r3) {
    if (isNaN(e5) || isNaN(t) || isNaN(n3) || !Mt2(r3)) throw Error("Invalid arguments passed to jsPDF.circle");
    return this.ellipse(e5, t, n3, n3, r3);
  }, m.setFont = function(e5, t, n3) {
    return n3 && (t = w2(t, n3)), xe2 = gt2(e5, t, { disableWarning: false }), this;
  };
  var Ut2 = m.__private__.getFont = m.getFont = function() {
    return Ee2[gt2.apply(m, arguments)];
  };
  m.__private__.getFontList = m.getFontList = function() {
    var e5, t, n3 = {};
    for (e5 in De2) if (De2.hasOwnProperty(e5)) for (t in n3[e5] = [], De2[e5]) De2[e5].hasOwnProperty(t) && n3[e5].push(t);
    return n3;
  }, m.addFont = function(e5, t, n3, r3, i3) {
    var a3 = [
      "StandardEncoding",
      "MacRomanEncoding",
      "Identity-H",
      "WinAnsiEncoding"
    ];
    return arguments[3] && a3.indexOf(arguments[3]) !== -1 ? i3 = arguments[3] : arguments[3] && a3.indexOf(arguments[3]) == -1 && (n3 = w2(n3, r3)), lt2.call(this, e5, t, n3, i3 || (i3 = "Identity-H"));
  };
  var Wt2, Gt2 = e4.lineWidth || 0.200025, Kt2 = m.__private__.getLineWidth = m.getLineWidth = function() {
    return Gt2;
  }, qt2 = m.__private__.setLineWidth = m.setLineWidth = function(e5) {
    return Gt2 = e5, W2(T2(A2(e5)) + " w"), this;
  };
  m.__private__.setLineDash = Z.API.setLineDash = Z.API.setLineDashPattern = function(e5, t) {
    if (e5 || (e5 = []), t || (t = 0), isNaN(t) || !Array.isArray(e5)) throw Error("Invalid arguments passed to jsPDF.setLineDash");
    return e5 = e5.map(function(e6) {
      return T2(A2(e6));
    }).join(" "), t = T2(A2(t)), W2("[" + e5 + "] " + t + " d"), this;
  };
  var Jt2 = m.__private__.getLineHeight = m.getLineHeight = function() {
    return de2 * Wt2;
  };
  m.__private__.getLineHeight = m.getLineHeight = function() {
    return de2 * Wt2;
  };
  var Yt2 = m.__private__.setLineHeightFactor = m.setLineHeightFactor = function(e5) {
    return typeof (e5 || (e5 = 1.15)) == "number" && (Wt2 = e5), this;
  }, Xt2 = m.__private__.getLineHeightFactor = m.getLineHeightFactor = function() {
    return Wt2;
  };
  Yt2(e4.lineHeight);
  var J2 = m.__private__.getHorizontalCoordinate = function(e5) {
    return A2(e5);
  }, Zt2 = m.__private__.getVerticalCoordinate = function(e5) {
    return x2 === b2 ? e5 : G2[B2].mediaBox.topRightY - G2[B2].mediaBox.bottomLeftY - A2(e5);
  }, Qt2 = m.__private__.getHorizontalCoordinateString = m.getHorizontalCoordinateString = function(e5) {
    return T2(J2(e5));
  }, $t2 = m.__private__.getVerticalCoordinateString = m.getVerticalCoordinateString = function(e5) {
    return T2(Zt2(e5));
  }, en2 = e4.strokeColor || "0 G";
  m.__private__.getStrokeColor = m.getDrawColor = function() {
    return Xe2(en2);
  }, m.__private__.setStrokeColor = m.setDrawColor = function(e5, t, n3, r3) {
    return en2 = Ze2({
      ch1: e5,
      ch2: t,
      ch3: n3,
      ch4: r3,
      pdfColorType: "draw",
      precision: 2
    }), W2(en2), this;
  };
  var tn2 = e4.fillColor || "0 g";
  m.__private__.getFillColor = m.getFillColor = function() {
    return Xe2(tn2);
  }, m.__private__.setFillColor = m.setFillColor = function(e5, t, n3, r3) {
    return tn2 = Ze2({
      ch1: e5,
      ch2: t,
      ch3: n3,
      ch4: r3,
      pdfColorType: "fill",
      precision: 2
    }), W2(tn2), this;
  };
  var nn2 = e4.textColor || "0 g", rn2 = m.__private__.getTextColor = m.getTextColor = function() {
    return Xe2(nn2);
  };
  m.__private__.setTextColor = m.setTextColor = function(e5, t, n3, r3) {
    return nn2 = Ze2({
      ch1: e5,
      ch2: t,
      ch3: n3,
      ch4: r3,
      pdfColorType: "text",
      precision: 3
    }), this;
  };
  var an2 = e4.charSpace, on2 = m.__private__.getCharSpace = m.getCharSpace = function() {
    return parseFloat(an2 || 0);
  };
  m.__private__.setCharSpace = m.setCharSpace = function(e5) {
    if (isNaN(e5)) throw Error("Invalid argument passed to jsPDF.setCharSpace");
    return an2 = e5, this;
  };
  var sn2 = 0;
  m.CapJoinStyles = {
    0: 0,
    butt: 0,
    but: 0,
    miter: 0,
    1: 1,
    round: 1,
    rounded: 1,
    circle: 1,
    2: 2,
    projecting: 2,
    project: 2,
    square: 2,
    bevel: 2
  }, m.__private__.setLineCap = m.setLineCap = function(e5) {
    var t = m.CapJoinStyles[e5];
    if (t === void 0) throw Error("Line cap style of '" + e5 + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return sn2 = t, W2(t + " J"), this;
  };
  var cn2 = 0;
  m.__private__.setLineJoin = m.setLineJoin = function(e5) {
    var t = m.CapJoinStyles[e5];
    if (t === void 0) throw Error("Line join style of '" + e5 + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return cn2 = t, W2(t + " j"), this;
  }, m.__private__.setLineMiterLimit = m.__private__.setMiterLimit = m.setLineMiterLimit = m.setMiterLimit = function(e5) {
    if (e5 || (e5 = 0), isNaN(e5)) throw Error("Invalid argument passed to jsPDF.setLineMiterLimit");
    return W2(T2(A2(e5)) + " M"), this;
  }, m.GState = So, m.setGState = function(e5) {
    (e5 = typeof e5 == "string" ? je2[Me2[e5]] : ln2(null, e5)).equals(Ne2) || (W2("/" + e5.id + " gs"), Ne2 = e5);
  };
  var ln2 = function(e5, t) {
    if (!e5 || !Me2[e5]) {
      var n3 = false;
      for (var r3 in je2) if (je2.hasOwnProperty(r3) && je2[r3].equals(t)) {
        n3 = true;
        break;
      }
      if (n3) t = je2[r3];
      else {
        var i3 = "GS" + (Object.keys(je2).length + 1).toString(10);
        je2[i3] = t, t.id = i3;
      }
      return e5 && (Me2[e5] = t.id), Fe2.publish("addGState", t), t;
    }
  };
  m.addGState = function(e5, t) {
    return ln2(e5, t), this;
  }, m.saveGraphicsState = function() {
    return W2("q"), Oe2.push({
      key: xe2,
      size: de2,
      color: nn2
    }), this;
  }, m.restoreGraphicsState = function() {
    W2("Q");
    var e5 = Oe2.pop();
    return xe2 = e5.key, de2 = e5.size, nn2 = e5.color, Ne2 = null, this;
  }, m.setCurrentTransformationMatrix = function(e5) {
    return W2(e5.toString() + " cm"), this;
  }, m.comment = function(e5) {
    return W2("#" + e5), this;
  };
  var un2 = function(e5, t) {
    var n3 = e5 || 0;
    Object.defineProperty(this, "x", {
      enumerable: true,
      get: function() {
        return n3;
      },
      set: function(e6) {
        isNaN(e6) || (n3 = parseFloat(e6));
      }
    });
    var r3 = t || 0;
    Object.defineProperty(this, "y", {
      enumerable: true,
      get: function() {
        return r3;
      },
      set: function(e6) {
        isNaN(e6) || (r3 = parseFloat(e6));
      }
    });
    var i3 = "pt";
    return Object.defineProperty(this, "type", {
      enumerable: true,
      get: function() {
        return i3;
      },
      set: function(e6) {
        i3 = e6.toString();
      }
    }), this;
  }, dn2 = function(e5, t, n3, r3) {
    un2.call(this, e5, t), this.type = "rect";
    var i3 = n3 || 0;
    Object.defineProperty(this, "w", {
      enumerable: true,
      get: function() {
        return i3;
      },
      set: function(e6) {
        isNaN(e6) || (i3 = parseFloat(e6));
      }
    });
    var a3 = r3 || 0;
    return Object.defineProperty(this, "h", {
      enumerable: true,
      get: function() {
        return a3;
      },
      set: function(e6) {
        isNaN(e6) || (a3 = parseFloat(e6));
      }
    }), this;
  }, fn2 = function() {
    this.page = Pe2, this.currentPage = B2, this.pages = ie2.slice(0), this.pagesContext = G2.slice(0), this.x = Ce2, this.y = we2, this.matrix = Te2, this.width = hn2(B2), this.height = _n2(B2), this.outputDestination = oe2, this.id = "", this.objectNumber = -1;
  };
  fn2.prototype.restore = function() {
    Pe2 = this.page, B2 = this.currentPage, G2 = this.pagesContext, ie2 = this.pages, Ce2 = this.x, we2 = this.y, Te2 = this.matrix, gn2(B2, this.width), vn2(B2, this.height), oe2 = this.outputDestination;
  };
  var pn2 = function(e5, t, n3, r3, i3) {
    ze2.push(new fn2()), Pe2 = B2 = 0, ie2 = [], Ce2 = e5, we2 = t, Te2 = i3, dt2([n3, r3]);
  };
  for (var mn2 in m.beginFormObject = function(e5, t, n3, r3, i3) {
    return pn2(e5, t, n3, r3, i3), this;
  }, m.endFormObject = function(e5) {
    return function(e6) {
      if (Re2[e6]) ze2.pop().restore();
      else {
        var t = new fn2(), n3 = "Xo" + (Object.keys(Le2).length + 1).toString(10);
        t.id = n3, Re2[e6] = n3, Le2[n3] = t, Fe2.publish("addFormObject", t), ze2.pop().restore();
      }
    }(e5), this;
  }, m.doFormObject = function(e5, t) {
    var n3 = Le2[Re2[e5]];
    return W2("q"), W2(t.toString() + " cm"), W2("/" + n3.id + " Do"), W2("Q"), this;
  }, m.getFormObject = function(e5) {
    var t = Le2[Re2[e5]];
    return {
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height,
      matrix: t.matrix
    };
  }, m.save = function(e5, t) {
    return e5 || (e5 = "generated.pdf"), (t || (t = {})).returnPromise = t.returnPromise || false, false === t.returnPromise ? (Qa(Ct2(St2()), e5), typeof Qa.unload == "function" && X.setTimeout && setTimeout(Qa.unload, 911), this) : new Promise(function(t2, n3) {
      try {
        var r3 = Qa(Ct2(St2()), e5);
        typeof Qa.unload == "function" && X.setTimeout && setTimeout(Qa.unload, 911), t2(r3);
      } catch (e6) {
        n3(e6.message);
      }
    });
  }, Z.API) Z.API.hasOwnProperty(mn2) && (mn2 === "events" && Z.API.events.length ? function(e5, t) {
    var n3, r3, i3;
    for (i3 = t.length - 1; i3 !== -1; i3--) n3 = t[i3][0], r3 = t[i3][1], e5.subscribe.apply(e5, [n3].concat(typeof r3 == "function" ? [r3] : r3));
  }(Fe2, Z.API.events) : m[mn2] = Z.API[mn2]);
  function hn2(e5) {
    return G2[e5].mediaBox.topRightX - G2[e5].mediaBox.bottomLeftX;
  }
  function gn2(e5, t) {
    G2[e5].mediaBox.topRightX = t + G2[e5].mediaBox.bottomLeftX;
  }
  function _n2(e5) {
    return G2[e5].mediaBox.topRightY - G2[e5].mediaBox.bottomLeftY;
  }
  function vn2(e5, t) {
    G2[e5].mediaBox.topRightY = t + G2[e5].mediaBox.bottomLeftY;
  }
  var yn2 = m.getPageWidth = function(e5) {
    return hn2(e5 || (e5 = B2)) / Se2;
  }, bn2 = m.setPageWidth = function(e5, t) {
    gn2(e5, t * Se2);
  }, Y2 = m.getPageHeight = function(e5) {
    return _n2(e5 || (e5 = B2)) / Se2;
  }, xn2 = m.setPageHeight = function(e5, t) {
    vn2(e5, t * Se2);
  };
  return m.internal = {
    pdfEscape: ut2,
    getStyle: Nt2,
    getFont: Ut2,
    getFontSize: pe2,
    getCharSpace: on2,
    getTextColor: rn2,
    getLineHeight: Jt2,
    getLineHeightFactor: Xt2,
    getLineWidth: Kt2,
    write: ce2,
    getHorizontalCoordinate: J2,
    getVerticalCoordinate: Zt2,
    getCoordinateString: Qt2,
    getVerticalCoordinateString: $t2,
    collections: {},
    newObject: We2,
    newAdditionalObject: qe2,
    newObjectDeferred: Ge2,
    newObjectDeferredBegin: Ke2,
    getFilters: Qe2,
    putStream: $e2,
    events: Fe2,
    scaleFactor: Se2,
    pageSize: {
      getWidth: function() {
        return yn2(B2);
      },
      setWidth: function(e5) {
        bn2(B2, e5);
      },
      getHeight: function() {
        return Y2(B2);
      },
      setHeight: function(e5) {
        xn2(B2, e5);
      }
    },
    encryptionOptions: d2,
    encryption: Dt2,
    getEncryptor: function(e5) {
      return d2 === null ? function(e6) {
        return e6;
      } : Dt2.encryptor(e5, 0);
    },
    output: Et2,
    getNumberOfPages: ht2,
    get pages() {
      return ie2;
    },
    out: W2,
    f2: O2,
    f3: k2,
    getPageInfo: Ot2,
    getPageInfoByObjId: kt2,
    getCurrentPageInfo: At2,
    getPDFVersion: g,
    Point: un2,
    Rectangle: dn2,
    Matrix: K2,
    hasHotfix: q2
  }, Object.defineProperty(m.internal.pageSize, "width", {
    get: function() {
      return yn2(B2);
    },
    set: function(e5) {
      bn2(B2, e5);
    },
    enumerable: true,
    configurable: true
  }), Object.defineProperty(m.internal.pageSize, "height", {
    get: function() {
      return Y2(B2);
    },
    set: function(e5) {
      xn2(B2, e5);
    },
    enumerable: true,
    configurable: true
  }), (function(e5) {
    for (var t = 0, n3 = ue2.length; t < n3; t++) {
      var r3 = lt2.call(this, e5[t][0], e5[t][1], e5[t][2], ue2[t][3], true);
      false === f2 && (p[r3] = true);
      var i3 = e5[t][0].split("-");
      ct2({
        id: r3,
        fontName: i3[0],
        fontStyle: i3[1] || ""
      });
    }
    Fe2.publish("addFonts", {
      fonts: Ee2,
      dictionary: De2
    });
  }).call(m, ue2), xe2 = "F1", ft2(a2, r2), Fe2.publish("initialized"), m;
}
yo.prototype.lsbFirstWord = function(e4) {
  return String.fromCharCode(255 & e4, e4 >> 8 & 255, e4 >> 16 & 255, e4 >> 24 & 255);
}, yo.prototype.toHexString = function(e4) {
  return e4.split("").map(function(e5) {
    return ("0" + (255 & e5.charCodeAt(0)).toString(16)).slice(-2);
  }).join("");
}, yo.prototype.hexToBytes = function(e4) {
  for (var t = [], n2 = 0; n2 < e4.length; n2 += 2) t.push(String.fromCharCode(parseInt(e4.substr(n2, 2), 16)));
  return t.join("");
}, yo.prototype.processOwnerPassword = function(e4, t) {
  return _o(mo(t).substr(0, 5), e4);
}, yo.prototype.encryptor = function(e4, t) {
  var n2 = mo(this.encryptionKey + String.fromCharCode(255 & e4, e4 >> 8 & 255, e4 >> 16 & 255, 255 & t, t >> 8 & 255)).substr(0, 10);
  return function(e5) {
    return _o(n2, e5);
  };
}, So.prototype.equals = function(e4) {
  var n2, r2 = "id,objectNumber,equals";
  if (!e4 || e(e4) !== e(this)) return false;
  var i2 = 0;
  for (n2 in this) if (!(r2.indexOf(n2) >= 0)) {
    if (this.hasOwnProperty(n2) && !e4.hasOwnProperty(n2) || this[n2] !== e4[n2]) return false;
    i2++;
  }
  for (n2 in e4) e4.hasOwnProperty(n2) && r2.indexOf(n2) < 0 && i2--;
  return i2 === 0;
}, Z.API = { events: [] }, Z.version = "4.2.1";
var Eo = Z.API;
var Do = 1;
var Oo = function(e4) {
  return e4.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
};
var ko = function(e4) {
  return e4.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
};
var Ao = function(e4) {
  return e4.toString().replace(/#/g, "#23").replace(/[\s\n\r()<>[\]{}\/%]/g, function(e5) {
    var t = e5.charCodeAt(0).toString(16).toUpperCase();
    return "#" + (t.length === 1 ? "0" + t : t);
  });
};
var Q = function(e4) {
  return e4.toFixed(2);
};
var jo = function(e4) {
  return e4.toFixed(5);
};
Eo.__acroform__ = {};
var Mo = function(e4, t) {
  e4.prototype = Object.create(t.prototype), e4.prototype.constructor = e4;
};
var No = function(e4) {
  return e4 * Do;
};
var Po = function(e4) {
  var t = new Zo(), n2 = $.internal.getHeight(e4) || 0, r2 = $.internal.getWidth(e4) || 0;
  return t.BBox = [
    0,
    0,
    Number(Q(r2)),
    Number(Q(n2))
  ], t;
};
var Fo = Eo.__acroform__.setBit = function(e4, t) {
  if (e4 || (e4 = 0), t || (t = 0), isNaN(e4) || isNaN(t)) throw Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
  return e4 | 1 << t;
};
var Io = Eo.__acroform__.clearBit = function(e4, t) {
  if (e4 || (e4 = 0), t || (t = 0), isNaN(e4) || isNaN(t)) throw Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
  return e4 & ~(1 << t);
};
var Lo = Eo.__acroform__.getBit = function(e4, t) {
  if (isNaN(e4) || isNaN(t)) throw Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
  return e4 & 1 << t ? 1 : 0;
};
var Ro = Eo.__acroform__.getBitForPdf = function(e4, t) {
  if (isNaN(e4) || isNaN(t)) throw Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
  return Lo(e4, t - 1);
};
var zo = Eo.__acroform__.setBitForPdf = function(e4, t) {
  if (isNaN(e4) || isNaN(t)) throw Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
  return Fo(e4, t - 1);
};
var Bo = Eo.__acroform__.clearBitForPdf = function(e4, t) {
  if (isNaN(e4) || isNaN(t)) throw Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
  return Io(e4, t - 1);
};
var Vo = Eo.__acroform__.calculateCoordinates = function(e4, t) {
  var n2 = t.internal.getHorizontalCoordinate, r2 = t.internal.getVerticalCoordinate, i2 = e4[0], a2 = e4[1], o2 = e4[2], s2 = e4[3], c3 = {};
  return c3.lowerLeft_X = n2(i2) || 0, c3.lowerLeft_Y = r2(a2 + s2) || 0, c3.upperRight_X = n2(i2 + o2) || 0, c3.upperRight_Y = r2(a2) || 0, [
    Number(Q(c3.lowerLeft_X)),
    Number(Q(c3.lowerLeft_Y)),
    Number(Q(c3.upperRight_X)),
    Number(Q(c3.upperRight_Y))
  ];
};
var Ho = function(e4) {
  if (e4.appearanceStreamContent) return e4.appearanceStreamContent;
  if (e4.V || e4.DV) {
    var t = [], n2 = Uo(e4, e4._V || e4.DV), r2 = e4.scope.internal.getFont(e4.fontName, e4.fontStyle).id;
    t.push("/Tx BMC"), t.push("q"), t.push("BT"), t.push(e4.scope.__private__.encodeColorString(e4.color)), t.push("/" + r2 + " " + Q(n2.fontSize) + " Tf"), t.push("1 0 0 1 0 0 Tm"), t.push(n2.text), t.push("ET"), t.push("Q"), t.push("EMC");
    var i2 = Po(e4);
    return i2.scope = e4.scope, i2.stream = t.join("\n"), i2;
  }
};
var Uo = function(e4, t) {
  var n2 = e4.fontSize === 0 ? e4.maxFontSize : e4.fontSize, r2 = {
    text: "",
    fontSize: ""
  }, i2 = (t = (t = t.substr(0, 1) == "(" ? t.substr(1) : t).substr(t.length - 1) == ")" ? t.substr(0, t.length - 1) : t).split(" ");
  i2 = e4.multiline ? i2.map(function(e5) {
    return e5.split("\n");
  }) : i2.map(function(e5) {
    return [e5];
  });
  var a2 = n2, o2 = $.internal.getHeight(e4) || 0;
  o2 = o2 < 0 ? -o2 : o2;
  var s2 = $.internal.getWidth(e4) || 0;
  s2 = s2 < 0 ? -s2 : s2;
  var c3 = function(t2, n3, r3) {
    return t2 + 1 < i2.length ? Wo(n3 + " " + i2[t2 + 1][0], e4, r3).width <= s2 - 4 : false;
  };
  a2++;
  t: for (; a2 > 0; ) {
    t = "", a2--;
    var l2, u2, d2 = Wo("3", e4, a2).height, f2 = e4.multiline ? o2 - a2 : (o2 - d2) / 2, p = f2 += 2, m = 0, h = 0, g = 0;
    if (a2 <= 0) {
      t = "(...) Tj\n", t += "% Width of Text: " + Wo(t, e4, a2 = 12).width + ", FieldWidth:" + s2 + "\n";
      break;
    }
    for (var _ = "", v = 0, y = 0; y < i2.length; y++) if (i2.hasOwnProperty(y)) {
      var b2 = false;
      if (i2[y].length !== 1 && g !== i2[y].length - 1) {
        if ((d2 + 2) * (v + 2) + 2 > o2) continue t;
        _ += i2[y][g], b2 = true, h = y, y--;
      } else {
        _ = (_ += i2[y][g] + " ").substr(_.length - 1) == " " ? _.substr(0, _.length - 1) : _;
        var x2 = parseInt(y), S2 = c3(x2, _, a2), C2 = y >= i2.length - 1;
        if (S2 && !C2) {
          _ += " ", g = 0;
          continue;
        }
        if (S2 || C2) {
          if (C2) h = x2;
          else if (e4.multiline && (d2 + 2) * (v + 2) + 2 > o2) continue t;
        } else {
          if (!e4.multiline || (d2 + 2) * (v + 2) + 2 > o2) continue t;
          h = x2;
        }
      }
      for (var w2 = "", T2 = m; T2 <= h; T2++) {
        var E2 = i2[T2];
        if (e4.multiline) {
          if (T2 === h) {
            w2 += E2[g] + " ", g = (g + 1) % E2.length;
            continue;
          }
          if (T2 === m) {
            w2 += E2[E2.length - 1] + " ";
            continue;
          }
        }
        w2 += E2[0] + " ";
      }
      switch (w2 = w2.substr(w2.length - 1) == " " ? w2.substr(0, w2.length - 1) : w2, u2 = Wo(w2, e4, a2).width, e4.textAlign) {
        case "right":
          l2 = s2 - u2 - 2;
          break;
        case "center":
          l2 = (s2 - u2) / 2;
          break;
        default:
          l2 = 2;
      }
      t += Q(l2) + " " + Q(p) + " Td\n", t += "(" + Oo(w2) + ") Tj\n", t += -Q(l2) + " 0 Td\n", p = -(a2 + 2), u2 = 0, m = b2 ? h : h + 1, v++, _ = "";
    }
    break;
  }
  return r2.text = t, r2.fontSize = a2, r2;
};
var Wo = function(e4, t, n2) {
  var r2 = t.scope.internal.getFont(t.fontName, t.fontStyle), i2 = t.scope.getStringUnitWidth(e4, {
    font: r2,
    fontSize: parseFloat(n2),
    charSpace: 0
  }) * parseFloat(n2);
  return {
    height: t.scope.getStringUnitWidth("3", {
      font: r2,
      fontSize: parseFloat(n2),
      charSpace: 0
    }) * parseFloat(n2) * 1.5,
    width: i2
  };
};
var Go = {
  fields: [],
  xForms: [],
  acroFormDictionaryRoot: null,
  printedOut: false,
  internal: null,
  isInitialized: false
};
var Ko = function(e4, t) {
  var n2 = {
    type: "reference",
    object: e4
  };
  t.internal.getPageInfo(e4.page).pageContext.annotations.find(function(e5) {
    return e5.type === n2.type && e5.object === n2.object;
  }) === void 0 && t.internal.getPageInfo(e4.page).pageContext.annotations.push(n2);
};
var qo = function(e4, n2) {
  if (n2.scope = e4, e4.internal !== void 0 && (e4.internal.acroformPlugin === void 0 || false === e4.internal.acroformPlugin.isInitialized)) {
    if ($o.FieldNum = 0, e4.internal.acroformPlugin = JSON.parse(JSON.stringify(Go)), e4.internal.acroformPlugin.acroFormDictionaryRoot) throw Error("Exception while creating AcroformDictionary");
    Do = e4.internal.scaleFactor, e4.internal.acroformPlugin.acroFormDictionaryRoot = new Qo(), e4.internal.acroformPlugin.acroFormDictionaryRoot.scope = e4, e4.internal.acroformPlugin.acroFormDictionaryRoot._eventID = e4.internal.events.subscribe("postPutResources", function() {
      (function(e5) {
        e5.internal.events.unsubscribe(e5.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete e5.internal.acroformPlugin.acroFormDictionaryRoot._eventID, e5.internal.acroformPlugin.printedOut = true;
      })(e4);
    }), e4.internal.events.subscribe("buildDocument", function() {
      (function(e5) {
        e5.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
        var t = e5.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
        for (var n3 in t) if (t.hasOwnProperty(n3)) {
          var r2 = t[n3];
          r2.objId = void 0, r2.hasAnnotation && Ko(r2, e5);
        }
      })(e4);
    }), e4.internal.events.subscribe("putCatalog", function() {
      (function(e5) {
        if (e5.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw Error("putCatalogCallback: Root missing.");
        e5.internal.write("/AcroForm " + e5.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
      })(e4);
    }), e4.internal.events.subscribe("postPutPages", function(n3) {
      (function(e5, n4) {
        var r2 = !e5;
        for (var i2 in e5 || (n4.internal.newObjectDeferredBegin(n4.internal.acroformPlugin.acroFormDictionaryRoot.objId, true), n4.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), e5 || (e5 = n4.internal.acroformPlugin.acroFormDictionaryRoot.Kids)) if (e5.hasOwnProperty(i2)) {
          var a2 = e5[i2], o2 = [], s2 = a2.Rect;
          if (a2.Rect && (a2.Rect = Vo(a2.Rect, n4)), n4.internal.newObjectDeferredBegin(a2.objId, true), a2.DA = $.createDefaultAppearanceStream(a2), e(a2) === "object" && typeof a2.getKeyValueListForStream == "function" && (o2 = a2.getKeyValueListForStream()), a2.Rect = s2, a2.hasAppearanceStream && !a2.appearanceStreamContent) {
            var c3 = Ho(a2);
            o2.push({
              key: "AP",
              value: "<</N " + c3 + ">>"
            }), n4.internal.acroformPlugin.xForms.push(c3);
          }
          if (a2.appearanceStreamContent) {
            var l2 = "";
            for (var u2 in a2.appearanceStreamContent) if (a2.appearanceStreamContent.hasOwnProperty(u2)) {
              var d2 = a2.appearanceStreamContent[u2];
              if (l2 += "/" + u2 + " ", l2 += "<<", Object.keys(d2).length >= 1 || Array.isArray(d2)) {
                for (var i2 in d2) if (d2.hasOwnProperty(i2)) {
                  var f2 = d2[i2];
                  typeof f2 == "function" && (f2 = f2.call(n4, a2)), l2 += "/" + i2 + " " + f2 + " ", n4.internal.acroformPlugin.xForms.indexOf(f2) >= 0 || n4.internal.acroformPlugin.xForms.push(f2);
                }
              } else typeof (f2 = d2) == "function" && (f2 = f2.call(n4, a2)), l2 += "/" + i2 + " " + f2, n4.internal.acroformPlugin.xForms.indexOf(f2) >= 0 || n4.internal.acroformPlugin.xForms.push(f2);
              l2 += ">>";
            }
            o2.push({
              key: "AP",
              value: "<<\n" + l2 + ">>"
            });
          }
          n4.internal.putStream({
            additionalKeyValues: o2,
            objectId: a2.objId
          }), n4.internal.out("endobj");
        }
        r2 && function(e6, n5) {
          for (var r3 in e6) if (e6.hasOwnProperty(r3)) {
            var i3 = r3, a3 = e6[r3];
            n5.internal.newObjectDeferredBegin(a3.objId, true), e(a3) === "object" && typeof a3.putStream == "function" && a3.putStream(), delete e6[i3];
          }
        }(n4.internal.acroformPlugin.xForms, n4);
      })(n3, e4);
    }), e4.internal.acroformPlugin.isInitialized = true;
  }
};
var Jo = Eo.__acroform__.arrayToPdfArray = function(e4, n2, r2) {
  var i2 = function(e5) {
    return e5;
  };
  if (Array.isArray(e4)) {
    for (var a2 = "[", o2 = 0; o2 < e4.length; o2++) switch (o2 !== 0 && (a2 += " "), e(e4[o2])) {
      case "boolean":
      case "number":
      case "object":
        a2 += e4[o2].toString();
        break;
      case "string":
        e4[o2].substr(0, 1) === "/" ? a2 += "/" + Ao(e4[o2].substr(1)) : (n2 !== void 0 && r2 && (i2 = r2.internal.getEncryptor(n2)), a2 += "(" + Oo(i2(e4[o2].toString())) + ")");
    }
    return a2 + "]";
  }
  throw Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
};
var Yo = function(e4, t, n2) {
  var r2 = function(e5) {
    return e5;
  };
  return t !== void 0 && n2 && (r2 = n2.internal.getEncryptor(t)), (e4 || (e4 = "")).toString(), "(" + Oo(r2(e4)) + ")";
};
var Xo = function() {
  this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", {
    get: function() {
      if (this._objId === void 0) {
        if (this.scope === void 0) return;
        this._objId = this.scope.internal.newObjectDeferred();
      }
      return this._objId;
    },
    set: function(e4) {
      this._objId = e4;
    }
  }), Object.defineProperty(this, "scope", {
    value: this._scope,
    writable: true
  });
};
Xo.prototype.toString = function() {
  return this.objId + " 0 R";
}, Xo.prototype.putStream = function() {
  var e4 = this.getKeyValueListForStream();
  this.scope.internal.putStream({
    data: this.stream,
    additionalKeyValues: e4,
    objectId: this.objId
  }), this.scope.internal.out("endobj");
}, Xo.prototype.getKeyValueListForStream = function() {
  var e4 = [], t = Object.getOwnPropertyNames(this).filter(function(e5) {
    return e5 != "content" && e5 != "appearanceStreamContent" && e5 != "scope" && e5 != "objId" && e5.substring(0, 1) != "_";
  });
  for (var n2 in t) if (false === Object.getOwnPropertyDescriptor(this, t[n2]).configurable) {
    var r2 = t[n2], i2 = this[r2];
    i2 && (Array.isArray(i2) ? e4.push({
      key: r2,
      value: Jo(i2, this.objId, this.scope)
    }) : i2 instanceof Xo ? (i2.scope = this.scope, e4.push({
      key: r2,
      value: i2.objId + " 0 R"
    })) : typeof i2 != "function" && e4.push({
      key: r2,
      value: i2
    }));
  }
  return e4;
};
var Zo = function() {
  Xo.call(this), Object.defineProperty(this, "Type", {
    value: "/XObject",
    configurable: false,
    writable: true
  }), Object.defineProperty(this, "Subtype", {
    value: "/Form",
    configurable: false,
    writable: true
  }), Object.defineProperty(this, "FormType", {
    value: 1,
    configurable: false,
    writable: true
  });
  var e4, t = [];
  Object.defineProperty(this, "BBox", {
    configurable: false,
    get: function() {
      return t;
    },
    set: function(e5) {
      t = e5;
    }
  }), Object.defineProperty(this, "Resources", {
    value: "2 0 R",
    configurable: false,
    writable: true
  }), Object.defineProperty(this, "stream", {
    enumerable: false,
    configurable: true,
    set: function(t2) {
      e4 = t2.trim();
    },
    get: function() {
      return e4 || null;
    }
  });
};
Mo(Zo, Xo);
var Qo = function() {
  Xo.call(this);
  var e4, t = [];
  Object.defineProperty(this, "Kids", {
    enumerable: false,
    configurable: true,
    get: function() {
      return t.length > 0 ? t : void 0;
    }
  }), Object.defineProperty(this, "Fields", {
    enumerable: false,
    configurable: false,
    get: function() {
      return t;
    }
  }), Object.defineProperty(this, "DA", {
    enumerable: false,
    configurable: false,
    get: function() {
      if (e4) {
        var t2 = function(e5) {
          return e5;
        };
        return this.scope && (t2 = this.scope.internal.getEncryptor(this.objId)), "(" + Oo(t2(e4)) + ")";
      }
    },
    set: function(t2) {
      e4 = t2;
    }
  });
};
Mo(Qo, Xo);
var $o = function e3() {
  Xo.call(this);
  var t = 4;
  Object.defineProperty(this, "F", {
    enumerable: false,
    configurable: false,
    get: function() {
      return t;
    },
    set: function(e4) {
      if (isNaN(e4)) throw Error('Invalid value "' + e4 + '" for attribute F supplied.');
      t = e4;
    }
  }), Object.defineProperty(this, "showWhenPrinted", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(t, 3);
    },
    set: function(e4) {
      !!e4 == 1 ? this.F = zo(t, 3) : this.F = Bo(t, 3);
    }
  });
  var n2 = 0;
  Object.defineProperty(this, "Ff", {
    enumerable: false,
    configurable: false,
    get: function() {
      return n2;
    },
    set: function(e4) {
      if (isNaN(e4)) throw Error('Invalid value "' + e4 + '" for attribute Ff supplied.');
      n2 = e4;
    }
  });
  var r2 = [];
  Object.defineProperty(this, "Rect", {
    enumerable: false,
    configurable: false,
    get: function() {
      if (r2.length !== 0) return r2;
    },
    set: function(e4) {
      r2 = e4 === void 0 ? [] : e4;
    }
  }), Object.defineProperty(this, "x", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !r2 || isNaN(r2[0]) ? 0 : r2[0];
    },
    set: function(e4) {
      r2[0] = e4;
    }
  }), Object.defineProperty(this, "y", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !r2 || isNaN(r2[1]) ? 0 : r2[1];
    },
    set: function(e4) {
      r2[1] = e4;
    }
  }), Object.defineProperty(this, "width", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !r2 || isNaN(r2[2]) ? 0 : r2[2];
    },
    set: function(e4) {
      r2[2] = e4;
    }
  }), Object.defineProperty(this, "height", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !r2 || isNaN(r2[3]) ? 0 : r2[3];
    },
    set: function(e4) {
      r2[3] = e4;
    }
  });
  var i2 = "";
  Object.defineProperty(this, "FT", {
    enumerable: true,
    configurable: false,
    get: function() {
      return i2;
    },
    set: function(e4) {
      switch (e4) {
        case "/Btn":
        case "/Tx":
        case "/Ch":
        case "/Sig":
          i2 = e4;
          break;
        default:
          throw Error('Invalid value "' + e4 + '" for attribute FT supplied.');
      }
    }
  });
  var a2 = null;
  Object.defineProperty(this, "T", {
    enumerable: true,
    configurable: false,
    get: function() {
      if (!a2 || a2.length < 1) {
        if (this instanceof ss) return;
        a2 = "FieldObject" + e3.FieldNum++;
      }
      var t2 = function(e4) {
        return e4;
      };
      return this.scope && (t2 = this.scope.internal.getEncryptor(this.objId)), "(" + Oo(t2(a2)) + ")";
    },
    set: function(e4) {
      a2 = e4.toString();
    }
  }), Object.defineProperty(this, "fieldName", {
    configurable: true,
    enumerable: true,
    get: function() {
      return a2;
    },
    set: function(e4) {
      a2 = e4;
    }
  });
  var o2 = "helvetica";
  Object.defineProperty(this, "fontName", {
    enumerable: true,
    configurable: true,
    get: function() {
      return o2;
    },
    set: function(e4) {
      o2 = e4;
    }
  });
  var s2 = "normal";
  Object.defineProperty(this, "fontStyle", {
    enumerable: true,
    configurable: true,
    get: function() {
      return s2;
    },
    set: function(e4) {
      s2 = e4;
    }
  });
  var c3 = 0;
  Object.defineProperty(this, "fontSize", {
    enumerable: true,
    configurable: true,
    get: function() {
      return c3;
    },
    set: function(e4) {
      c3 = e4;
    }
  });
  var l2 = void 0;
  Object.defineProperty(this, "maxFontSize", {
    enumerable: true,
    configurable: true,
    get: function() {
      return l2 === void 0 ? 50 / Do : l2;
    },
    set: function(e4) {
      l2 = e4;
    }
  });
  var u2 = "black";
  Object.defineProperty(this, "color", {
    enumerable: true,
    configurable: true,
    get: function() {
      return u2;
    },
    set: function(e4) {
      u2 = e4;
    }
  });
  var d2 = "/F1 0 Tf 0 g";
  Object.defineProperty(this, "DA", {
    enumerable: true,
    configurable: false,
    get: function() {
      if (!(!d2 || this instanceof ss || this instanceof ls)) return Yo(d2, this.objId, this.scope);
    },
    set: function(e4) {
      e4 = e4.toString(), d2 = e4;
    }
  });
  var f2 = null;
  Object.defineProperty(this, "DV", {
    enumerable: false,
    configurable: false,
    get: function() {
      if (f2) return this instanceof is == 0 ? Yo(f2, this.objId, this.scope) : f2;
    },
    set: function(e4) {
      e4 = e4.toString(), f2 = this instanceof is == 0 ? e4.substr(0, 1) === "(" ? ko(e4.substr(1, e4.length - 2)) : ko(e4) : e4;
    }
  }), Object.defineProperty(this, "defaultValue", {
    enumerable: true,
    configurable: true,
    get: function() {
      return this instanceof is == 1 ? ko(f2.substr(1, f2.length - 1)) : f2;
    },
    set: function(e4) {
      e4 = e4.toString(), f2 = this instanceof is == 1 ? "/" + Ao(e4) : e4;
    }
  });
  var p = null;
  Object.defineProperty(this, "_V", {
    enumerable: false,
    configurable: false,
    get: function() {
      if (p) return p;
    },
    set: function(e4) {
      this.V = e4;
    }
  }), Object.defineProperty(this, "V", {
    enumerable: false,
    configurable: false,
    get: function() {
      if (p) return this instanceof is == 0 ? Yo(p, this.objId, this.scope) : p;
    },
    set: function(e4) {
      e4 = e4.toString(), p = this instanceof is == 0 ? e4.substr(0, 1) === "(" ? ko(e4.substr(1, e4.length - 2)) : ko(e4) : e4;
    }
  }), Object.defineProperty(this, "value", {
    enumerable: true,
    configurable: true,
    get: function() {
      return this instanceof is == 1 ? ko(p.substr(1, p.length - 1)) : p;
    },
    set: function(e4) {
      e4 = e4.toString(), p = this instanceof is == 1 ? "/" + Ao(e4) : e4;
    }
  }), Object.defineProperty(this, "hasAnnotation", {
    enumerable: true,
    configurable: true,
    get: function() {
      return this.Rect;
    }
  }), Object.defineProperty(this, "Type", {
    enumerable: true,
    configurable: false,
    get: function() {
      return this.hasAnnotation ? "/Annot" : null;
    }
  }), Object.defineProperty(this, "Subtype", {
    enumerable: true,
    configurable: false,
    get: function() {
      return this.hasAnnotation ? "/Widget" : null;
    }
  });
  var m, h = false;
  Object.defineProperty(this, "hasAppearanceStream", {
    enumerable: true,
    configurable: true,
    get: function() {
      return h;
    },
    set: function(e4) {
      e4 = !!e4, h = e4;
    }
  }), Object.defineProperty(this, "page", {
    enumerable: true,
    configurable: true,
    get: function() {
      if (m) return m;
    },
    set: function(e4) {
      m = e4;
    }
  }), Object.defineProperty(this, "readOnly", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 1);
    },
    set: function(e4) {
      !!e4 == 1 ? this.Ff = zo(this.Ff, 1) : this.Ff = Bo(this.Ff, 1);
    }
  }), Object.defineProperty(this, "required", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 2);
    },
    set: function(e4) {
      !!e4 == 1 ? this.Ff = zo(this.Ff, 2) : this.Ff = Bo(this.Ff, 2);
    }
  }), Object.defineProperty(this, "noExport", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 3);
    },
    set: function(e4) {
      !!e4 == 1 ? this.Ff = zo(this.Ff, 3) : this.Ff = Bo(this.Ff, 3);
    }
  });
  var g = null;
  Object.defineProperty(this, "Q", {
    enumerable: true,
    configurable: false,
    get: function() {
      if (g !== null) return g;
    },
    set: function(e4) {
      if ([
        0,
        1,
        2
      ].indexOf(e4) === -1) throw Error('Invalid value "' + e4 + '" for attribute Q supplied.');
      g = e4;
    }
  }), Object.defineProperty(this, "textAlign", {
    get: function() {
      var e4;
      switch (g) {
        case 0:
        default:
          e4 = "left";
          break;
        case 1:
          e4 = "center";
          break;
        case 2:
          e4 = "right";
      }
      return e4;
    },
    configurable: true,
    enumerable: true,
    set: function(e4) {
      switch (e4) {
        case "right":
        case 2:
          g = 2;
          break;
        case "center":
        case 1:
          g = 1;
          break;
        default:
          g = 0;
      }
    }
  });
};
Mo($o, Xo);
var es = function() {
  $o.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
  var e4 = 0;
  Object.defineProperty(this, "TI", {
    enumerable: true,
    configurable: false,
    get: function() {
      return e4;
    },
    set: function(t2) {
      e4 = t2;
    }
  }), Object.defineProperty(this, "topIndex", {
    enumerable: true,
    configurable: true,
    get: function() {
      return e4;
    },
    set: function(t2) {
      e4 = t2;
    }
  });
  var t = [];
  Object.defineProperty(this, "Opt", {
    enumerable: true,
    configurable: false,
    get: function() {
      return Jo(t, this.objId, this.scope);
    },
    set: function(e5) {
      var n2, r2 = [];
      typeof (n2 = e5) == "string" && (r2 = function(e6, t2, n3) {
        n3 || (n3 = 1);
        for (var r3, i2 = []; r3 = t2.exec(e6); ) i2.push(r3[n3]);
        return i2;
      }(n2, /\((.*?)\)/g)), t = r2;
    }
  }), this.getOptions = function() {
    return t;
  }, this.setOptions = function(e5) {
    t = e5, this.sort && t.sort();
  }, this.addOption = function(e5) {
    e5 = (e5 || (e5 = "")).toString(), t.push(e5), this.sort && t.sort();
  }, this.removeOption = function(e5, n2) {
    for (n2 || (n2 = false), e5 = (e5 || (e5 = "")).toString(); t.indexOf(e5) !== -1 && (t.splice(t.indexOf(e5), 1), false !== n2); ) ;
  }, Object.defineProperty(this, "combo", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 18);
    },
    set: function(e5) {
      !!e5 == 1 ? this.Ff = zo(this.Ff, 18) : this.Ff = Bo(this.Ff, 18);
    }
  }), Object.defineProperty(this, "edit", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 19);
    },
    set: function(e5) {
      true === this.combo && (!!e5 == 1 ? this.Ff = zo(this.Ff, 19) : this.Ff = Bo(this.Ff, 19));
    }
  }), Object.defineProperty(this, "sort", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 20);
    },
    set: function(e5) {
      !!e5 == 1 ? (this.Ff = zo(this.Ff, 20), t.sort()) : this.Ff = Bo(this.Ff, 20);
    }
  }), Object.defineProperty(this, "multiSelect", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 22);
    },
    set: function(e5) {
      !!e5 == 1 ? this.Ff = zo(this.Ff, 22) : this.Ff = Bo(this.Ff, 22);
    }
  }), Object.defineProperty(this, "doNotSpellCheck", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 23);
    },
    set: function(e5) {
      !!e5 == 1 ? this.Ff = zo(this.Ff, 23) : this.Ff = Bo(this.Ff, 23);
    }
  }), Object.defineProperty(this, "commitOnSelChange", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 27);
    },
    set: function(e5) {
      !!e5 == 1 ? this.Ff = zo(this.Ff, 27) : this.Ff = Bo(this.Ff, 27);
    }
  }), this.hasAppearanceStream = false;
};
Mo(es, $o);
var ts = function() {
  es.call(this), this.fontName = "helvetica", this.combo = false;
};
Mo(ts, es);
var ns = function() {
  ts.call(this), this.combo = true;
};
Mo(ns, ts);
var rs = function() {
  ns.call(this), this.edit = true;
};
Mo(rs, ns);
var is = function() {
  $o.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 15);
    },
    set: function(e5) {
      !!e5 == 1 ? this.Ff = zo(this.Ff, 15) : this.Ff = Bo(this.Ff, 15);
    }
  }), Object.defineProperty(this, "radio", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 16);
    },
    set: function(e5) {
      !!e5 == 1 ? this.Ff = zo(this.Ff, 16) : this.Ff = Bo(this.Ff, 16);
    }
  }), Object.defineProperty(this, "pushButton", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 17);
    },
    set: function(e5) {
      !!e5 == 1 ? this.Ff = zo(this.Ff, 17) : this.Ff = Bo(this.Ff, 17);
    }
  }), Object.defineProperty(this, "radioIsUnison", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 26);
    },
    set: function(e5) {
      !!e5 == 1 ? this.Ff = zo(this.Ff, 26) : this.Ff = Bo(this.Ff, 26);
    }
  });
  var e4, n2 = {};
  Object.defineProperty(this, "MK", {
    enumerable: false,
    configurable: false,
    get: function() {
      var e5 = function(e6) {
        return e6;
      };
      if (this.scope && (e5 = this.scope.internal.getEncryptor(this.objId)), Object.keys(n2).length !== 0) {
        var t, r2 = [];
        for (t in r2.push("<<"), n2) r2.push("/" + t + " (" + Oo(e5(n2[t])) + ")");
        return r2.push(">>"), r2.join("\n");
      }
    },
    set: function(e5) {
      e(e5) === "object" && (n2 = e5);
    }
  }), Object.defineProperty(this, "caption", {
    enumerable: true,
    configurable: true,
    get: function() {
      return n2.CA || "";
    },
    set: function(e5) {
      typeof e5 == "string" && (n2.CA = e5);
    }
  }), Object.defineProperty(this, "AS", {
    enumerable: false,
    configurable: false,
    get: function() {
      return e4;
    },
    set: function(t) {
      var n3 = t == null ? "" : t.toString();
      n3.substr(0, 1) === "/" && (n3 = n3.substr(1)), e4 = "/" + Ao(n3);
    }
  }), Object.defineProperty(this, "appearanceState", {
    enumerable: true,
    configurable: true,
    get: function() {
      return e4.substr(1, e4.length - 1);
    },
    set: function(t) {
      e4 = "/" + Ao(t);
    }
  });
};
Mo(is, $o);
var as = function() {
  is.call(this), this.pushButton = true;
};
Mo(as, is);
var os = function() {
  is.call(this), this.radio = true, this.pushButton = false;
  var e4 = [];
  Object.defineProperty(this, "Kids", {
    enumerable: true,
    configurable: false,
    get: function() {
      return e4;
    },
    set: function(t) {
      e4 = t === void 0 ? [] : t;
    }
  });
};
Mo(os, is);
var ss = function() {
  var e4, n2;
  $o.call(this), Object.defineProperty(this, "Parent", {
    enumerable: false,
    configurable: false,
    get: function() {
      return e4;
    },
    set: function(t) {
      e4 = t;
    }
  }), Object.defineProperty(this, "optionName", {
    enumerable: false,
    configurable: true,
    get: function() {
      return n2;
    },
    set: function(e5) {
      n2 = e5;
    }
  });
  var r2, i2 = {};
  Object.defineProperty(this, "MK", {
    enumerable: false,
    configurable: false,
    get: function() {
      var e5 = function(e6) {
        return e6;
      };
      this.scope && (e5 = this.scope.internal.getEncryptor(this.objId));
      var t, n3 = [];
      for (t in n3.push("<<"), i2) n3.push("/" + t + " (" + Oo(e5(i2[t])) + ")");
      return n3.push(">>"), n3.join("\n");
    },
    set: function(e5) {
      e(e5) === "object" && (i2 = e5);
    }
  }), Object.defineProperty(this, "caption", {
    enumerable: true,
    configurable: true,
    get: function() {
      return i2.CA || "";
    },
    set: function(e5) {
      typeof e5 == "string" && (i2.CA = e5);
    }
  }), Object.defineProperty(this, "AS", {
    enumerable: false,
    configurable: false,
    get: function() {
      return r2;
    },
    set: function(e5) {
      var t = e5 == null ? "" : e5.toString();
      t.substr(0, 1) === "/" && (t = t.substr(1)), r2 = "/" + Ao(t);
    }
  }), Object.defineProperty(this, "appearanceState", {
    enumerable: true,
    configurable: true,
    get: function() {
      return r2.substr(1, r2.length - 1);
    },
    set: function(e5) {
      var t = e5 == null ? "" : e5.toString();
      t.substr(0, 1) === "/" && (t = t.substr(1)), r2 = "/" + Ao(t);
    }
  }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = $.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
};
Mo(ss, $o), os.prototype.setAppearance = function(e4) {
  if (!("createAppearanceStream" in e4) || !("getCA" in e4)) throw Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
  for (var t in this.Kids) if (this.Kids.hasOwnProperty(t)) {
    var n2 = this.Kids[t];
    n2.appearanceStreamContent = e4.createAppearanceStream(n2.optionName), n2.caption = e4.getCA();
  }
}, os.prototype.createOption = function(e4) {
  var t = new ss();
  return t.Parent = this, t.optionName = e4, this.Kids.push(t), ds.call(this.scope, t), t;
};
var cs = function() {
  is.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = $.CheckBox.createAppearanceStream();
};
Mo(cs, is);
var ls = function() {
  $o.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 13);
    },
    set: function(e5) {
      !!e5 == 1 ? this.Ff = zo(this.Ff, 13) : this.Ff = Bo(this.Ff, 13);
    }
  }), Object.defineProperty(this, "fileSelect", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 21);
    },
    set: function(e5) {
      !!e5 == 1 ? this.Ff = zo(this.Ff, 21) : this.Ff = Bo(this.Ff, 21);
    }
  }), Object.defineProperty(this, "doNotSpellCheck", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 23);
    },
    set: function(e5) {
      !!e5 == 1 ? this.Ff = zo(this.Ff, 23) : this.Ff = Bo(this.Ff, 23);
    }
  }), Object.defineProperty(this, "doNotScroll", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 24);
    },
    set: function(e5) {
      !!e5 == 1 ? this.Ff = zo(this.Ff, 24) : this.Ff = Bo(this.Ff, 24);
    }
  }), Object.defineProperty(this, "comb", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 25);
    },
    set: function(e5) {
      !!e5 == 1 ? this.Ff = zo(this.Ff, 25) : this.Ff = Bo(this.Ff, 25);
    }
  }), Object.defineProperty(this, "richText", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 26);
    },
    set: function(e5) {
      !!e5 == 1 ? this.Ff = zo(this.Ff, 26) : this.Ff = Bo(this.Ff, 26);
    }
  });
  var e4 = null;
  Object.defineProperty(this, "MaxLen", {
    enumerable: true,
    configurable: false,
    get: function() {
      return e4;
    },
    set: function(t) {
      e4 = t;
    }
  }), Object.defineProperty(this, "maxLength", {
    enumerable: true,
    configurable: true,
    get: function() {
      return e4;
    },
    set: function(t) {
      Number.isInteger(t) && (e4 = t);
    }
  }), Object.defineProperty(this, "hasAppearanceStream", {
    enumerable: true,
    configurable: true,
    get: function() {
      return this.V || this.DV;
    }
  });
};
Mo(ls, $o);
var us = function() {
  ls.call(this), Object.defineProperty(this, "password", {
    enumerable: true,
    configurable: true,
    get: function() {
      return !!Ro(this.Ff, 14);
    },
    set: function(e4) {
      !!e4 == 1 ? this.Ff = zo(this.Ff, 14) : this.Ff = Bo(this.Ff, 14);
    }
  }), this.password = true;
};
Mo(us, ls);
var $ = {
  CheckBox: {
    createAppearanceStream: function() {
      return {
        N: { On: $.CheckBox.YesNormal },
        D: {
          On: $.CheckBox.YesPushDown,
          Off: $.CheckBox.OffPushDown
        }
      };
    },
    YesPushDown: function(e4) {
      var t = Po(e4);
      t.scope = e4.scope;
      var n2 = [], r2 = e4.scope.internal.getFont(e4.fontName, e4.fontStyle).id, i2 = e4.scope.__private__.encodeColorString(e4.color), a2 = Uo(e4, e4.caption);
      return n2.push("0.749023 g"), n2.push("0 0 " + Q($.internal.getWidth(e4)) + " " + Q($.internal.getHeight(e4)) + " re"), n2.push("f"), n2.push("BMC"), n2.push("q"), n2.push("0 0 1 rg"), n2.push("/" + r2 + " " + Q(a2.fontSize) + " Tf " + i2), n2.push("BT"), n2.push(a2.text), n2.push("ET"), n2.push("Q"), n2.push("EMC"), t.stream = n2.join("\n"), t;
    },
    YesNormal: function(e4) {
      var t = Po(e4);
      t.scope = e4.scope;
      var n2 = e4.scope.internal.getFont(e4.fontName, e4.fontStyle).id, r2 = e4.scope.__private__.encodeColorString(e4.color), i2 = [], a2 = $.internal.getHeight(e4), o2 = $.internal.getWidth(e4), s2 = Uo(e4, e4.caption);
      return i2.push("1 g"), i2.push("0 0 " + Q(o2) + " " + Q(a2) + " re"), i2.push("f"), i2.push("q"), i2.push("0 0 1 rg"), i2.push("0 0 " + Q(o2 - 1) + " " + Q(a2 - 1) + " re"), i2.push("W"), i2.push("n"), i2.push("0 g"), i2.push("BT"), i2.push("/" + n2 + " " + Q(s2.fontSize) + " Tf " + r2), i2.push(s2.text), i2.push("ET"), i2.push("Q"), t.stream = i2.join("\n"), t;
    },
    OffPushDown: function(e4) {
      var t = Po(e4);
      t.scope = e4.scope;
      var n2 = [];
      return n2.push("0.749023 g"), n2.push("0 0 " + Q($.internal.getWidth(e4)) + " " + Q($.internal.getHeight(e4)) + " re"), n2.push("f"), t.stream = n2.join("\n"), t;
    }
  },
  RadioButton: {
    Circle: {
      createAppearanceStream: function(e4) {
        var t = {
          D: { Off: $.RadioButton.Circle.OffPushDown },
          N: {}
        };
        return t.N[e4] = $.RadioButton.Circle.YesNormal, t.D[e4] = $.RadioButton.Circle.YesPushDown, t;
      },
      getCA: function() {
        return "l";
      },
      YesNormal: function(e4) {
        var t = Po(e4);
        t.scope = e4.scope;
        var n2 = [], r2 = $.internal.getWidth(e4) <= $.internal.getHeight(e4) ? $.internal.getWidth(e4) / 4 : $.internal.getHeight(e4) / 4;
        r2 = Number((0.9 * r2).toFixed(5));
        var i2 = $.internal.Bezier_C, a2 = Number((r2 * i2).toFixed(5));
        return n2.push("q"), n2.push("1 0 0 1 " + jo($.internal.getWidth(e4) / 2) + " " + jo($.internal.getHeight(e4) / 2) + " cm"), n2.push(r2 + " 0 m"), n2.push(r2 + " " + a2 + " " + a2 + " " + r2 + " 0 " + r2 + " c"), n2.push("-" + a2 + " " + r2 + " -" + r2 + " " + a2 + " -" + r2 + " 0 c"), n2.push("-" + r2 + " -" + a2 + " -" + a2 + " -" + r2 + " 0 -" + r2 + " c"), n2.push(a2 + " -" + r2 + " " + r2 + " -" + a2 + " " + r2 + " 0 c"), n2.push("f"), n2.push("Q"), t.stream = n2.join("\n"), t;
      },
      YesPushDown: function(e4) {
        var t = Po(e4);
        t.scope = e4.scope;
        var n2 = [], r2 = $.internal.getWidth(e4) <= $.internal.getHeight(e4) ? $.internal.getWidth(e4) / 4 : $.internal.getHeight(e4) / 4;
        r2 = Number((0.9 * r2).toFixed(5));
        var i2 = Number((2 * r2).toFixed(5)), a2 = Number((i2 * $.internal.Bezier_C).toFixed(5)), o2 = Number((r2 * $.internal.Bezier_C).toFixed(5));
        return n2.push("0.749023 g"), n2.push("q"), n2.push("1 0 0 1 " + jo($.internal.getWidth(e4) / 2) + " " + jo($.internal.getHeight(e4) / 2) + " cm"), n2.push(i2 + " 0 m"), n2.push(i2 + " " + a2 + " " + a2 + " " + i2 + " 0 " + i2 + " c"), n2.push("-" + a2 + " " + i2 + " -" + i2 + " " + a2 + " -" + i2 + " 0 c"), n2.push("-" + i2 + " -" + a2 + " -" + a2 + " -" + i2 + " 0 -" + i2 + " c"), n2.push(a2 + " -" + i2 + " " + i2 + " -" + a2 + " " + i2 + " 0 c"), n2.push("f"), n2.push("Q"), n2.push("0 g"), n2.push("q"), n2.push("1 0 0 1 " + jo($.internal.getWidth(e4) / 2) + " " + jo($.internal.getHeight(e4) / 2) + " cm"), n2.push(r2 + " 0 m"), n2.push(r2 + " " + o2 + " " + o2 + " " + r2 + " 0 " + r2 + " c"), n2.push("-" + o2 + " " + r2 + " -" + r2 + " " + o2 + " -" + r2 + " 0 c"), n2.push("-" + r2 + " -" + o2 + " -" + o2 + " -" + r2 + " 0 -" + r2 + " c"), n2.push(o2 + " -" + r2 + " " + r2 + " -" + o2 + " " + r2 + " 0 c"), n2.push("f"), n2.push("Q"), t.stream = n2.join("\n"), t;
      },
      OffPushDown: function(e4) {
        var t = Po(e4);
        t.scope = e4.scope;
        var n2 = [], r2 = $.internal.getWidth(e4) <= $.internal.getHeight(e4) ? $.internal.getWidth(e4) / 4 : $.internal.getHeight(e4) / 4;
        r2 = Number((0.9 * r2).toFixed(5));
        var i2 = Number((2 * r2).toFixed(5)), a2 = Number((i2 * $.internal.Bezier_C).toFixed(5));
        return n2.push("0.749023 g"), n2.push("q"), n2.push("1 0 0 1 " + jo($.internal.getWidth(e4) / 2) + " " + jo($.internal.getHeight(e4) / 2) + " cm"), n2.push(i2 + " 0 m"), n2.push(i2 + " " + a2 + " " + a2 + " " + i2 + " 0 " + i2 + " c"), n2.push("-" + a2 + " " + i2 + " -" + i2 + " " + a2 + " -" + i2 + " 0 c"), n2.push("-" + i2 + " -" + a2 + " -" + a2 + " -" + i2 + " 0 -" + i2 + " c"), n2.push(a2 + " -" + i2 + " " + i2 + " -" + a2 + " " + i2 + " 0 c"), n2.push("f"), n2.push("Q"), t.stream = n2.join("\n"), t;
      }
    },
    Cross: {
      createAppearanceStream: function(e4) {
        var t = {
          D: { Off: $.RadioButton.Cross.OffPushDown },
          N: {}
        };
        return t.N[e4] = $.RadioButton.Cross.YesNormal, t.D[e4] = $.RadioButton.Cross.YesPushDown, t;
      },
      getCA: function() {
        return "8";
      },
      YesNormal: function(e4) {
        var t = Po(e4);
        t.scope = e4.scope;
        var n2 = [], r2 = $.internal.calculateCross(e4);
        return n2.push("q"), n2.push("1 1 " + Q($.internal.getWidth(e4) - 2) + " " + Q($.internal.getHeight(e4) - 2) + " re"), n2.push("W"), n2.push("n"), n2.push(Q(r2.x1.x) + " " + Q(r2.x1.y) + " m"), n2.push(Q(r2.x2.x) + " " + Q(r2.x2.y) + " l"), n2.push(Q(r2.x4.x) + " " + Q(r2.x4.y) + " m"), n2.push(Q(r2.x3.x) + " " + Q(r2.x3.y) + " l"), n2.push("s"), n2.push("Q"), t.stream = n2.join("\n"), t;
      },
      YesPushDown: function(e4) {
        var t = Po(e4);
        t.scope = e4.scope;
        var n2 = $.internal.calculateCross(e4), r2 = [];
        return r2.push("0.749023 g"), r2.push("0 0 " + Q($.internal.getWidth(e4)) + " " + Q($.internal.getHeight(e4)) + " re"), r2.push("f"), r2.push("q"), r2.push("1 1 " + Q($.internal.getWidth(e4) - 2) + " " + Q($.internal.getHeight(e4) - 2) + " re"), r2.push("W"), r2.push("n"), r2.push(Q(n2.x1.x) + " " + Q(n2.x1.y) + " m"), r2.push(Q(n2.x2.x) + " " + Q(n2.x2.y) + " l"), r2.push(Q(n2.x4.x) + " " + Q(n2.x4.y) + " m"), r2.push(Q(n2.x3.x) + " " + Q(n2.x3.y) + " l"), r2.push("s"), r2.push("Q"), t.stream = r2.join("\n"), t;
      },
      OffPushDown: function(e4) {
        var t = Po(e4);
        t.scope = e4.scope;
        var n2 = [];
        return n2.push("0.749023 g"), n2.push("0 0 " + Q($.internal.getWidth(e4)) + " " + Q($.internal.getHeight(e4)) + " re"), n2.push("f"), t.stream = n2.join("\n"), t;
      }
    }
  },
  createDefaultAppearanceStream: function(e4) {
    var t = e4.scope.internal.getFont(e4.fontName, e4.fontStyle).id, n2 = e4.scope.__private__.encodeColorString(e4.color);
    return "/" + t + " " + e4.fontSize + " Tf " + n2;
  }
};
$.internal = {
  Bezier_C: 0.551915024494,
  calculateCross: function(e4) {
    var t = $.internal.getWidth(e4), n2 = $.internal.getHeight(e4), r2 = Math.min(t, n2);
    return {
      x1: {
        x: (t - r2) / 2,
        y: (n2 - r2) / 2 + r2
      },
      x2: {
        x: (t - r2) / 2 + r2,
        y: (n2 - r2) / 2
      },
      x3: {
        x: (t - r2) / 2,
        y: (n2 - r2) / 2
      },
      x4: {
        x: (t - r2) / 2 + r2,
        y: (n2 - r2) / 2 + r2
      }
    };
  }
}, $.internal.getWidth = function(e4) {
  var n2 = 0;
  return e(e4) === "object" && (n2 = No(e4.Rect[2])), n2;
}, $.internal.getHeight = function(e4) {
  var n2 = 0;
  return e(e4) === "object" && (n2 = No(e4.Rect[3])), n2;
};
var ds = Eo.addField = function(e4) {
  if (qo(this, e4), !(e4 instanceof $o)) throw Error("Invalid argument passed to jsPDF.addField.");
  var t;
  return (t = e4).scope.internal.acroformPlugin.printedOut && (t.scope.internal.acroformPlugin.printedOut = false, t.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t), e4.page = e4.scope.internal.getCurrentPageInfo().pageNumber, this;
};
Eo.AcroFormChoiceField = es, Eo.AcroFormListBox = ts, Eo.AcroFormComboBox = ns, Eo.AcroFormEditBox = rs, Eo.AcroFormButton = is, Eo.AcroFormPushButton = as, Eo.AcroFormRadioButton = os, Eo.AcroFormCheckBox = cs, Eo.AcroFormTextField = ls, Eo.AcroFormPasswordField = us, Eo.AcroFormAppearance = $, Eo.AcroForm = {
  ChoiceField: es,
  ListBox: ts,
  ComboBox: ns,
  EditBox: rs,
  Button: is,
  PushButton: as,
  RadioButton: os,
  CheckBox: cs,
  TextField: ls,
  PasswordField: us,
  Appearance: $
}, Z.AcroForm = {
  ChoiceField: es,
  ListBox: ts,
  ComboBox: ns,
  EditBox: rs,
  Button: is,
  PushButton: as,
  RadioButton: os,
  CheckBox: cs,
  TextField: ls,
  PasswordField: us,
  Appearance: $
}, Z.AcroForm;
function fs(e4) {
  return e4.reduce(function(e5, t, n2) {
    return e5[t] = n2, e5;
  }, {});
}
(function(e4) {
  var n2 = "addImage_";
  e4.__addimage__ = {};
  var r2 = "UNKNOWN", i2 = {
    PNG: [[
      137,
      80,
      78,
      71
    ]],
    TIFF: [[
      77,
      77,
      0,
      42
    ], [
      73,
      73,
      42,
      0
    ]],
    JPEG: [
      [
        255,
        216,
        255,
        224,
        void 0,
        void 0,
        74,
        70,
        73,
        70,
        0
      ],
      [
        255,
        216,
        255,
        225,
        void 0,
        void 0,
        69,
        120,
        105,
        102,
        0,
        0
      ],
      [
        255,
        216,
        255,
        219
      ],
      [
        255,
        216,
        255,
        238
      ]
    ],
    JPEG2000: [[
      0,
      0,
      0,
      12,
      106,
      80,
      32,
      32
    ]],
    GIF87a: [[
      71,
      73,
      70,
      56,
      55,
      97
    ]],
    GIF89a: [[
      71,
      73,
      70,
      56,
      57,
      97
    ]],
    WEBP: [[
      82,
      73,
      70,
      70,
      void 0,
      void 0,
      void 0,
      void 0,
      87,
      69,
      66,
      80
    ]],
    BMP: [
      [66, 77],
      [66, 65],
      [67, 73],
      [67, 80],
      [73, 67],
      [80, 84]
    ]
  }, a2 = e4.__addimage__.getImageFileTypeByImageData = function(e5, t) {
    var n3, a3, o3, s3, c4, l3 = r2;
    if ((t || (t = r2)) === "RGBA" || e5.data !== void 0 && e5.data instanceof Uint8ClampedArray && "height" in e5 && "width" in e5) return "RGBA";
    if (C2(e5)) for (c4 in i2) for (o3 = i2[c4], n3 = 0; n3 < o3.length; n3 += 1) {
      for (s3 = true, a3 = 0; a3 < o3[n3].length; a3 += 1) if (o3[n3][a3] !== void 0 && o3[n3][a3] !== e5[a3]) {
        s3 = false;
        break;
      }
      if (true === s3) {
        l3 = c4;
        break;
      }
    }
    else for (c4 in i2) for (o3 = i2[c4], n3 = 0; n3 < o3.length; n3 += 1) {
      for (s3 = true, a3 = 0; a3 < o3[n3].length; a3 += 1) if (o3[n3][a3] !== void 0 && o3[n3][a3] !== e5.charCodeAt(a3)) {
        s3 = false;
        break;
      }
      if (true === s3) {
        l3 = c4;
        break;
      }
    }
    return l3 === r2 && t !== r2 && (l3 = t), l3;
  }, o2 = function e5(t) {
    for (var n3 = this.internal.write, r3 = this.internal.putStream, i3 = (0, this.internal.getFilters)(); i3.indexOf("FlateEncode") !== -1; ) i3.splice(i3.indexOf("FlateEncode"), 1);
    t.objectId = this.internal.newObject();
    var a3 = [];
    if (a3.push({
      key: "Type",
      value: "/XObject"
    }), a3.push({
      key: "Subtype",
      value: "/Image"
    }), a3.push({
      key: "Width",
      value: t.width
    }), a3.push({
      key: "Height",
      value: t.height
    }), t.colorSpace === v.INDEXED ? a3.push({
      key: "ColorSpace",
      value: "[/Indexed /DeviceRGB " + (t.palette.length / 3 - 1) + " " + ("sMask" in t && t.sMask !== void 0 ? t.objectId + 2 : t.objectId + 1) + " 0 R]"
    }) : (a3.push({
      key: "ColorSpace",
      value: "/" + t.colorSpace
    }), t.colorSpace === v.DEVICE_CMYK && a3.push({
      key: "Decode",
      value: "[1 0 1 0 1 0 1 0]"
    })), a3.push({
      key: "BitsPerComponent",
      value: t.bitsPerComponent
    }), "decodeParameters" in t && t.decodeParameters !== void 0 && a3.push({
      key: "DecodeParms",
      value: "<<" + t.decodeParameters + ">>"
    }), "transparency" in t && Array.isArray(t.transparency) && t.transparency.length > 0) {
      for (var o3 = "", s3 = 0, c4 = t.transparency.length; s3 < c4; s3++) o3 += t.transparency[s3] + " " + t.transparency[s3] + " ";
      a3.push({
        key: "Mask",
        value: "[" + o3 + "]"
      });
    }
    t.sMask !== void 0 && a3.push({
      key: "SMask",
      value: t.objectId + 1 + " 0 R"
    });
    var l3 = t.filter === void 0 ? void 0 : ["/" + t.filter];
    if (r3({
      data: t.data,
      additionalKeyValues: a3,
      alreadyAppliedFilters: l3,
      objectId: t.objectId
    }), n3("endobj"), "sMask" in t && t.sMask !== void 0) {
      var u3 = t.sMaskBitsPerComponent ?? t.bitsPerComponent, d3 = {
        width: t.width,
        height: t.height,
        colorSpace: "DeviceGray",
        bitsPerComponent: u3,
        data: t.sMask
      };
      "filter" in t && (d3.decodeParameters = `/Predictor ${t.predictor} /Colors 1 /BitsPerComponent ${u3} /Columns ${t.width}`, d3.filter = t.filter), e5.call(this, d3);
    }
    if (t.colorSpace === v.INDEXED) {
      var f3 = this.internal.newObject();
      r3({
        data: T2(new Uint8Array(t.palette)),
        objectId: f3
      }), n3("endobj");
    }
  }, s2 = function() {
    var e5 = this.internal.collections[n2 + "images"];
    for (var t in e5) o2.call(this, e5[t]);
  }, c3 = function() {
    var e5, t = this.internal.collections[n2 + "images"], r3 = this.internal.write;
    for (var i3 in t) r3("/I" + (e5 = t[i3]).index, e5.objectId, "0", "R");
  }, l2 = function() {
    this.internal.collections[n2 + "images"] || (this.internal.collections[n2 + "images"] = {}, this.internal.events.subscribe("putResources", s2), this.internal.events.subscribe("putXobjectDict", c3));
  }, u2 = function() {
    var e5 = this.internal.collections[n2 + "images"];
    return l2.call(this), e5;
  }, d2 = function() {
    return Object.keys(this.internal.collections[n2 + "images"]).length;
  }, f2 = function(t) {
    return typeof e4["process" + t.toUpperCase()] == "function";
  }, p = function(e5) {
    return e(e5) === "object" && e5.nodeType === 1;
  }, m = function(t, n3) {
    if (t.nodeName === "IMG" && t.hasAttribute("src")) {
      var r3 = "" + t.getAttribute("src");
      if (r3.indexOf("data:image/") === 0) return eo(unescape(r3).split("base64,").pop());
      var i3 = e4.loadFile(r3, true);
      if (i3 !== void 0) return i3;
    }
    if (t.nodeName === "CANVAS") {
      if (t.width === 0 || t.height === 0) throw Error("Given canvas must have data. Canvas width: " + t.width + ", height: " + t.height);
      var a3;
      switch (n3) {
        case "PNG":
          a3 = "image/png";
          break;
        case "WEBP":
          a3 = "image/webp";
          break;
        default:
          a3 = "image/jpeg";
      }
      return eo(t.toDataURL(a3, 1).split("base64,").pop());
    }
  }, h = function(e5) {
    var t = this.internal.collections[n2 + "images"];
    if (t) {
      for (var r3 in t) if (e5 === t[r3].alias) return t[r3];
    }
  }, g = function(e5, t, n3) {
    return e5 || t || (e5 = -96, t = -96), e5 < 0 && (e5 = -1 * n3.width * 72 / e5 / this.internal.scaleFactor), t < 0 && (t = -1 * n3.height * 72 / t / this.internal.scaleFactor), e5 === 0 && (e5 = t * n3.width / n3.height), t === 0 && (t = e5 * n3.height / n3.width), [e5, t];
  }, _ = function(e5, t, n3, r3, i3, a3) {
    var o3 = g.call(this, n3, r3, i3), s3 = this.internal.getCoordinateString, c4 = this.internal.getVerticalCoordinateString, l3 = u2.call(this);
    if (n3 = o3[0], r3 = o3[1], l3[i3.index] = i3, a3) {
      a3 *= Math.PI / 180;
      var d3 = Math.cos(a3), f3 = Math.sin(a3), p2 = function(e6) {
        return e6.toFixed(4);
      }, m2 = [
        p2(d3),
        p2(f3),
        p2(-1 * f3),
        p2(d3),
        0,
        0,
        "cm"
      ];
    }
    this.internal.write("q"), a3 ? (this.internal.write([
      1,
      "0",
      "0",
      1,
      s3(e5),
      c4(t + r3),
      "cm"
    ].join(" ")), this.internal.write(m2.join(" ")), this.internal.write([
      s3(n3),
      "0",
      "0",
      s3(r3),
      "0",
      "0",
      "cm"
    ].join(" "))) : this.internal.write([
      s3(n3),
      "0",
      "0",
      s3(r3),
      s3(e5),
      c4(t + r3),
      "cm"
    ].join(" ")), this.isAdvancedAPI() && this.internal.write([
      1,
      0,
      0,
      -1,
      0,
      0,
      "cm"
    ].join(" ")), this.internal.write("/I" + i3.index + " Do"), this.internal.write("Q");
  }, v = e4.color_spaces = {
    DEVICE_RGB: "DeviceRGB",
    DEVICE_GRAY: "DeviceGray",
    DEVICE_CMYK: "DeviceCMYK",
    CAL_GREY: "CalGray",
    CAL_RGB: "CalRGB",
    LAB: "Lab",
    ICC_BASED: "ICCBased",
    INDEXED: "Indexed",
    PATTERN: "Pattern",
    SEPARATION: "Separation",
    DEVICE_N: "DeviceN"
  };
  e4.decode = {
    DCT_DECODE: "DCTDecode",
    FLATE_DECODE: "FlateDecode",
    LZW_DECODE: "LZWDecode",
    JPX_DECODE: "JPXDecode",
    JBIG2_DECODE: "JBIG2Decode",
    ASCII85_DECODE: "ASCII85Decode",
    ASCII_HEX_DECODE: "ASCIIHexDecode",
    RUN_LENGTH_DECODE: "RunLengthDecode",
    CCITT_FAX_DECODE: "CCITTFaxDecode"
  };
  var y = e4.image_compression = {
    NONE: "NONE",
    FAST: "FAST",
    MEDIUM: "MEDIUM",
    SLOW: "SLOW"
  }, b2 = e4.__addimage__.sHashCode = function(e5) {
    var t, n3, r3 = 0;
    if (typeof e5 == "string") for (n3 = e5.length, t = 0; t < n3; t++) r3 = (r3 << 5) - r3 + e5.charCodeAt(t), r3 |= 0;
    else if (C2(e5)) for (n3 = e5.byteLength / 2, t = 0; t < n3; t++) r3 = (r3 << 5) - r3 + e5[t], r3 |= 0;
    return r3;
  }, x2 = e4.__addimage__.validateStringAsBase64 = function(e5) {
    (e5 || (e5 = "")).toString().trim();
    var t = true;
    return e5.length === 0 && (t = false), e5.length % 4 != 0 && (t = false), false === /^[A-Za-z0-9+/]+$/.test(e5.substr(0, e5.length - 2)) && (t = false), false === /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(e5.substr(-2)) && (t = false), t;
  }, S2 = e4.__addimage__.extractImageFromDataUrl = function(e5) {
    if (e5 == null || !(e5 = e5.trim()).startsWith("data:")) return null;
    var t = e5.indexOf(",");
    return t < 0 ? null : e5.substring(0, t).trim().endsWith("base64") ? e5.substring(t + 1) : null;
  };
  e4.__addimage__.isArrayBuffer = function(e5) {
    return e5 instanceof ArrayBuffer;
  };
  var C2 = e4.__addimage__.isArrayBufferView = function(e5) {
    return e5 instanceof Int8Array || e5 instanceof Uint8Array || e5 instanceof Uint8ClampedArray || e5 instanceof Int16Array || e5 instanceof Uint16Array || e5 instanceof Int32Array || e5 instanceof Uint32Array || e5 instanceof Float32Array || e5 instanceof Float64Array;
  }, w2 = e4.__addimage__.binaryStringToUint8Array = function(e5) {
    for (var t = e5.length, n3 = new Uint8Array(t), r3 = 0; r3 < t; r3++) n3[r3] = e5.charCodeAt(r3);
    return n3;
  }, T2 = e4.__addimage__.arrayBufferToBinaryString = function(e5) {
    for (var t = "", n3 = C2(e5) ? e5 : new Uint8Array(e5), r3 = 0; r3 < n3.length; r3 += 8192) t += String.fromCharCode.apply(null, n3.subarray(r3, r3 + 8192));
    return t;
  };
  e4.addImage = function() {
    var e5, n3, i3, a3, o3, s3, c4, u3, d3;
    if (typeof arguments[1] == "number" ? (n3 = r2, i3 = arguments[1], a3 = arguments[2], o3 = arguments[3], s3 = arguments[4], c4 = arguments[5], u3 = arguments[6], d3 = arguments[7]) : (n3 = arguments[1], i3 = arguments[2], a3 = arguments[3], o3 = arguments[4], s3 = arguments[5], c4 = arguments[6], u3 = arguments[7], d3 = arguments[8]), e(e5 = arguments[0]) === "object" && !p(e5) && "imageData" in e5) {
      var f3 = e5;
      e5 = f3.imageData, n3 = f3.format || n3 || r2, i3 = f3.x || i3 || 0, a3 = f3.y || a3 || 0, o3 = f3.w || f3.width || o3, s3 = f3.h || f3.height || s3, c4 = f3.alias || c4, u3 = f3.compression || u3, d3 = f3.rotation || f3.angle || d3;
    }
    var m2 = this.internal.getFilters();
    if (u3 === void 0 && m2.indexOf("FlateEncode") !== -1 && (u3 = "SLOW"), isNaN(i3) || isNaN(a3)) throw Error("Invalid coordinates passed to jsPDF.addImage");
    l2.call(this);
    var h2 = E2.call(this, e5, n3, c4, u3);
    return _.call(this, i3, a3, o3, s3, h2, d3), this;
  };
  var E2 = function(t, n3, i3, o3) {
    var s3, c4, l3;
    if (typeof t == "string" && a2(t) === r2) {
      t = unescape(t);
      var u3 = D2(t, false);
      (u3 !== "" || (u3 = e4.loadFile(t, true)) !== void 0) && (t = u3);
    }
    if (p(t) && (t = m(t, n3)), n3 = a2(t, n3), !f2(n3)) throw Error("addImage does not support files of type '" + n3 + "', please ensure that a plugin for '" + n3 + "' support is added.");
    if (((l3 = i3) == null || l3.length === 0) && (i3 = function(e5) {
      return typeof e5 == "string" || C2(e5) ? b2(e5) : C2(e5.data) ? b2(e5.data) : null;
    }(t)), (s3 = h.call(this, i3)) || (t instanceof Uint8Array || n3 === "RGBA" || (c4 = t, t = w2(t)), s3 = this["process" + n3.toUpperCase()](t, d2.call(this), i3, function(t2) {
      return t2 && typeof t2 == "string" && (t2 = t2.toUpperCase()), t2 in e4.image_compression ? t2 : y.NONE;
    }(o3), c4)), !s3) throw Error("An unknown error occurred whilst processing the image.");
    return s3;
  }, D2 = e4.__addimage__.convertBase64ToBinaryString = function(e5, t) {
    t = typeof t != "boolean" || t;
    var n3, r3 = "";
    if (typeof e5 == "string") {
      n3 = S2(e5) ?? e5;
      try {
        r3 = eo(n3);
      } catch (e6) {
        if (t) throw x2(n3) ? Error("atob-Error in jsPDF.convertBase64ToBinaryString " + e6.message) : Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
      }
    }
    return r3;
  };
  e4.getImageProperties = function(t) {
    var n3, i3, o3 = "";
    if (p(t) && (t = m(t)), typeof t == "string" && a2(t) === r2 && ((o3 = D2(t, false)) === "" && (o3 = e4.loadFile(t) || ""), t = o3), i3 = a2(t), !f2(i3)) throw Error("addImage does not support files of type '" + i3 + "', please ensure that a plugin for '" + i3 + "' support is added.");
    if (t instanceof Uint8Array || (t = w2(t)), !(n3 = this["process" + i3.toUpperCase()](t))) throw Error("An unknown error occurred whilst processing the image");
    return n3.fileType = i3, n3;
  };
})(Z.API), function(e4) {
  var t = function(e5) {
    if (e5 !== void 0 && e5 != "") return true;
  };
  Z.API.events.push(["addPage", function(e5) {
    this.internal.getPageInfo(e5.pageNumber).pageContext.annotations = [];
  }]), e4.events.push(["putPage", function(e5) {
    for (var n2, r2, i2, a2 = this.internal.getCoordinateString, o2 = this.internal.getVerticalCoordinateString, s2 = this.internal.getPageInfoByObjId(e5.objId), c3 = e5.pageContext.annotations, l2 = false, u2 = 0; u2 < c3.length && !l2; u2++) switch ((n2 = c3[u2]).type) {
      case "link":
        (t(n2.options.url) || t(n2.options.pageNumber)) && (l2 = true);
        break;
      case "reference":
      case "text":
      case "freetext":
        l2 = true;
    }
    if (l2 != 0) {
      this.internal.write("/Annots [");
      for (var d2 = 0; d2 < c3.length; d2++) {
        n2 = c3[d2];
        var f2 = this.internal.pdfEscape, p = this.internal.getEncryptor(e5.objId);
        switch (n2.type) {
          case "reference":
            this.internal.write(" " + n2.object.objId + " 0 R ");
            break;
          case "text":
            var m = this.internal.newAdditionalObject(), h = this.internal.newAdditionalObject(), g = this.internal.getEncryptor(m.objId), _ = n2.title || "Note";
            i2 = "<</Type /Annot /Subtype /Text " + (r2 = "/Rect [" + a2(n2.bounds.x) + " " + o2(n2.bounds.y + n2.bounds.h) + " " + a2(n2.bounds.x + n2.bounds.w) + " " + o2(n2.bounds.y) + "] ") + "/Contents (" + f2(g(n2.contents)) + ")", i2 += " /Popup " + h.objId + " 0 R", i2 += " /P " + s2.objId + " 0 R", i2 += " /T (" + f2(g(_)) + ") >>", m.content = i2;
            var v = m.objId + " 0 R";
            i2 = "<</Type /Annot /Subtype /Popup " + (r2 = "/Rect [" + a2(n2.bounds.x + 30) + " " + o2(n2.bounds.y + n2.bounds.h) + " " + a2(n2.bounds.x + n2.bounds.w + 30) + " " + o2(n2.bounds.y) + "] ") + " /Parent " + v, n2.open && (i2 += " /Open true"), i2 += " >>", h.content = i2, this.internal.write(m.objId, "0 R", h.objId, "0 R");
            break;
          case "freetext":
            r2 = "/Rect [" + a2(n2.bounds.x) + " " + o2(n2.bounds.y) + " " + a2(n2.bounds.x + n2.bounds.w) + " " + o2(n2.bounds.y + n2.bounds.h) + "] ";
            var y = "font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + (n2.color || "#000000");
            i2 = "<</Type /Annot /Subtype /FreeText " + r2 + "/Contents (" + f2(p(n2.contents)) + ")", i2 += " /DS(" + f2(p(y)) + ")", i2 += " /Border [0 0 0]", i2 += " >>", this.internal.write(i2);
            break;
          case "link":
            if (n2.options.name) {
              var b2 = this.annotations._nameMap[n2.options.name];
              n2.options.pageNumber = b2.page, n2.options.top = b2.y;
            } else n2.options.top || (n2.options.top = 0);
            if (r2 = "/Rect [" + n2.finalBounds.x + " " + n2.finalBounds.y + " " + n2.finalBounds.w + " " + n2.finalBounds.h + "] ", i2 = "", n2.options.url) i2 = "<</Type /Annot /Subtype /Link " + r2 + "/Border [0 0 0] /A <</S /URI /URI (" + f2(p(n2.options.url)) + ") >>";
            else if (n2.options.pageNumber) switch (i2 = "<</Type /Annot /Subtype /Link " + r2 + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(n2.options.pageNumber).objId + " 0 R", n2.options.magFactor = n2.options.magFactor || "XYZ", n2.options.magFactor) {
              case "Fit":
                i2 += " /Fit]";
                break;
              case "FitH":
                i2 += " /FitH " + n2.options.top + "]";
                break;
              case "FitV":
                n2.options.left = n2.options.left || 0, i2 += " /FitV " + n2.options.left + "]";
                break;
              default:
                var x2 = o2(n2.options.top);
                n2.options.left = n2.options.left || 0, n2.options.zoom === void 0 && (n2.options.zoom = 0), i2 += " /XYZ " + n2.options.left + " " + x2 + " " + n2.options.zoom + "]";
            }
            i2 != "" && (i2 += " >>", this.internal.write(i2));
        }
      }
      this.internal.write("]");
    }
  }]), e4.createAnnotation = function(e5) {
    var t2 = this.internal.getCurrentPageInfo();
    switch (e5.type) {
      case "link":
        this.link(e5.bounds.x, e5.bounds.y, e5.bounds.w, e5.bounds.h, e5);
        break;
      case "text":
      case "freetext":
        t2.pageContext.annotations.push(e5);
    }
  }, e4.link = function(e5, t2, n2, r2, i2) {
    var a2 = this.internal.getCurrentPageInfo(), o2 = this.internal.getCoordinateString, s2 = this.internal.getVerticalCoordinateString;
    a2.pageContext.annotations.push({
      finalBounds: {
        x: o2(e5),
        y: s2(t2),
        w: o2(e5 + n2),
        h: s2(t2 + r2)
      },
      options: i2,
      type: "link"
    });
  }, e4.textWithLink = function(e5, t2, n2, r2) {
    var i2, a2, o2 = this.getTextWidth(e5), s2 = this.internal.getLineHeight() / this.internal.scaleFactor;
    if (r2.maxWidth !== void 0) {
      a2 = r2.maxWidth;
      var c3 = this.splitTextToSize(e5, a2).length;
      i2 = Math.ceil(s2 * c3);
    } else a2 = o2, i2 = s2;
    return this.text(e5, t2, n2, r2), n2 += 0.2 * s2, r2.align === "center" && (t2 -= o2 / 2), r2.align === "right" && (t2 -= o2), this.link(t2, n2 - s2, a2, i2, r2), o2;
  }, e4.getTextWidth = function(e5) {
    var t2 = this.internal.getFontSize();
    return this.getStringUnitWidth(e5) * t2 / this.internal.scaleFactor;
  };
}(Z.API), function(e4) {
  var t = {
    1569: [65152],
    1570: [65153, 65154],
    1571: [65155, 65156],
    1572: [65157, 65158],
    1573: [65159, 65160],
    1574: [
      65161,
      65162,
      65163,
      65164
    ],
    1575: [65165, 65166],
    1576: [
      65167,
      65168,
      65169,
      65170
    ],
    1577: [65171, 65172],
    1578: [
      65173,
      65174,
      65175,
      65176
    ],
    1579: [
      65177,
      65178,
      65179,
      65180
    ],
    1580: [
      65181,
      65182,
      65183,
      65184
    ],
    1581: [
      65185,
      65186,
      65187,
      65188
    ],
    1582: [
      65189,
      65190,
      65191,
      65192
    ],
    1583: [65193, 65194],
    1584: [65195, 65196],
    1585: [65197, 65198],
    1586: [65199, 65200],
    1587: [
      65201,
      65202,
      65203,
      65204
    ],
    1588: [
      65205,
      65206,
      65207,
      65208
    ],
    1589: [
      65209,
      65210,
      65211,
      65212
    ],
    1590: [
      65213,
      65214,
      65215,
      65216
    ],
    1591: [
      65217,
      65218,
      65219,
      65220
    ],
    1592: [
      65221,
      65222,
      65223,
      65224
    ],
    1593: [
      65225,
      65226,
      65227,
      65228
    ],
    1594: [
      65229,
      65230,
      65231,
      65232
    ],
    1601: [
      65233,
      65234,
      65235,
      65236
    ],
    1602: [
      65237,
      65238,
      65239,
      65240
    ],
    1603: [
      65241,
      65242,
      65243,
      65244
    ],
    1604: [
      65245,
      65246,
      65247,
      65248
    ],
    1605: [
      65249,
      65250,
      65251,
      65252
    ],
    1606: [
      65253,
      65254,
      65255,
      65256
    ],
    1607: [
      65257,
      65258,
      65259,
      65260
    ],
    1608: [65261, 65262],
    1609: [
      65263,
      65264,
      64488,
      64489
    ],
    1610: [
      65265,
      65266,
      65267,
      65268
    ],
    1649: [64336, 64337],
    1655: [64477],
    1657: [
      64358,
      64359,
      64360,
      64361
    ],
    1658: [
      64350,
      64351,
      64352,
      64353
    ],
    1659: [
      64338,
      64339,
      64340,
      64341
    ],
    1662: [
      64342,
      64343,
      64344,
      64345
    ],
    1663: [
      64354,
      64355,
      64356,
      64357
    ],
    1664: [
      64346,
      64347,
      64348,
      64349
    ],
    1667: [
      64374,
      64375,
      64376,
      64377
    ],
    1668: [
      64370,
      64371,
      64372,
      64373
    ],
    1670: [
      64378,
      64379,
      64380,
      64381
    ],
    1671: [
      64382,
      64383,
      64384,
      64385
    ],
    1672: [64392, 64393],
    1676: [64388, 64389],
    1677: [64386, 64387],
    1678: [64390, 64391],
    1681: [64396, 64397],
    1688: [64394, 64395],
    1700: [
      64362,
      64363,
      64364,
      64365
    ],
    1702: [
      64366,
      64367,
      64368,
      64369
    ],
    1705: [
      64398,
      64399,
      64400,
      64401
    ],
    1709: [
      64467,
      64468,
      64469,
      64470
    ],
    1711: [
      64402,
      64403,
      64404,
      64405
    ],
    1713: [
      64410,
      64411,
      64412,
      64413
    ],
    1715: [
      64406,
      64407,
      64408,
      64409
    ],
    1722: [64414, 64415],
    1723: [
      64416,
      64417,
      64418,
      64419
    ],
    1726: [
      64426,
      64427,
      64428,
      64429
    ],
    1728: [64420, 64421],
    1729: [
      64422,
      64423,
      64424,
      64425
    ],
    1733: [64480, 64481],
    1734: [64473, 64474],
    1735: [64471, 64472],
    1736: [64475, 64476],
    1737: [64482, 64483],
    1739: [64478, 64479],
    1740: [
      64508,
      64509,
      64510,
      64511
    ],
    1744: [
      64484,
      64485,
      64486,
      64487
    ],
    1746: [64430, 64431],
    1747: [64432, 64433]
  }, n2 = {
    65247: {
      65154: 65269,
      65156: 65271,
      65160: 65273,
      65166: 65275
    },
    65248: {
      65154: 65270,
      65156: 65272,
      65160: 65274,
      65166: 65276
    },
    65165: { 65247: { 65248: { 65258: 65010 } } },
    1617: {
      1612: 64606,
      1613: 64607,
      1614: 64608,
      1615: 64609,
      1616: 64610
    }
  }, r2 = {
    1612: 64606,
    1613: 64607,
    1614: 64608,
    1615: 64609,
    1616: 64610
  }, i2 = [
    1570,
    1571,
    1573,
    1575
  ];
  e4.__arabicParser__ = {};
  var a2 = e4.__arabicParser__.isInArabicSubstitutionA = function(e5) {
    return t[e5.charCodeAt(0)] !== void 0;
  }, o2 = e4.__arabicParser__.isArabicLetter = function(e5) {
    return typeof e5 == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(e5);
  }, s2 = e4.__arabicParser__.isArabicEndLetter = function(e5) {
    return o2(e5) && a2(e5) && t[e5.charCodeAt(0)].length <= 2;
  }, c3 = e4.__arabicParser__.isArabicAlfLetter = function(e5) {
    return o2(e5) && i2.indexOf(e5.charCodeAt(0)) >= 0;
  };
  e4.__arabicParser__.arabicLetterHasIsolatedForm = function(e5) {
    return o2(e5) && a2(e5) && t[e5.charCodeAt(0)].length >= 1;
  };
  var l2 = e4.__arabicParser__.arabicLetterHasFinalForm = function(e5) {
    return o2(e5) && a2(e5) && t[e5.charCodeAt(0)].length >= 2;
  };
  e4.__arabicParser__.arabicLetterHasInitialForm = function(e5) {
    return o2(e5) && a2(e5) && t[e5.charCodeAt(0)].length >= 3;
  };
  var u2 = e4.__arabicParser__.arabicLetterHasMedialForm = function(e5) {
    return o2(e5) && a2(e5) && t[e5.charCodeAt(0)].length == 4;
  }, d2 = e4.__arabicParser__.resolveLigatures = function(e5) {
    var t2 = 0, r3 = n2, i3 = "", a3 = 0;
    for (t2 = 0; t2 < e5.length; t2 += 1) r3[e5.charCodeAt(t2)] === void 0 ? (r3 = n2, i3 += e5.charAt(t2 - a3), t2 -= a3, a3 = 0) : (a3++, typeof (r3 = r3[e5.charCodeAt(t2)]) == "number" && (i3 += String.fromCharCode(r3), r3 = n2, a3 = 0), t2 === e5.length - 1 && (r3 = n2, i3 += e5.charAt(t2 - (a3 - 1)), t2 -= a3 - 1, a3 = 0));
    return i3;
  };
  e4.__arabicParser__.isArabicDiacritic = function(e5) {
    return e5 !== void 0 && r2[e5.charCodeAt(0)] !== void 0;
  };
  var f2 = e4.__arabicParser__.getCorrectForm = function(e5, t2, n3) {
    return o2(e5) ? false === a2(e5) ? -1 : !l2(e5) || !o2(t2) && !o2(n3) || !o2(n3) && s2(t2) || s2(e5) && !o2(t2) || s2(e5) && c3(t2) || s2(e5) && s2(t2) ? 0 : u2(e5) && o2(t2) && !s2(t2) && o2(n3) && l2(n3) ? 3 : s2(e5) || !o2(n3) ? 1 : 2 : -1;
  }, p = function(e5) {
    var n3 = 0, r3 = 0, i3 = 0, a3 = "", s3 = "", c4 = "", l3 = (e5 || (e5 = "")).split("\\s+"), u3 = [];
    for (n3 = 0; n3 < l3.length; n3 += 1) {
      for (u3.push(""), r3 = 0; r3 < l3[n3].length; r3 += 1) a3 = l3[n3][r3], s3 = l3[n3][r3 - 1], c4 = l3[n3][r3 + 1], o2(a3) ? (i3 = f2(a3, s3, c4), u3[n3] += i3 === -1 ? a3 : String.fromCharCode(t[a3.charCodeAt(0)][i3])) : u3[n3] += a3;
      u3[n3] = d2(u3[n3]);
    }
    return u3.join(" ");
  }, m = e4.__arabicParser__.processArabic = e4.processArabic = function() {
    var e5, t2 = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text, n3 = [];
    if (Array.isArray(t2)) {
      var r3 = 0;
      for (n3 = [], r3 = 0; r3 < t2.length; r3 += 1) Array.isArray(t2[r3]) ? n3.push([
        p(t2[r3][0]),
        t2[r3][1],
        t2[r3][2]
      ]) : n3.push([p(t2[r3])]);
      e5 = n3;
    } else e5 = p(t2);
    return typeof arguments[0] == "string" ? e5 : (arguments[0].text = e5, arguments[0]);
  };
  e4.events.push(["preProcessText", m]);
}(Z.API), Z.API.autoPrint = function(e4) {
  var t;
  return (e4 || (e4 = {})).variant = e4.variant || "non-conform", e4.variant === "javascript" ? this.addJS("print({});") : (this.internal.events.subscribe("postPutResources", function() {
    t = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
  }), this.internal.events.subscribe("putCatalog", function() {
    this.internal.out("/OpenAction " + t + " 0 R");
  })), this;
}, function(e4) {
  var t = function() {
    var e5 = void 0;
    Object.defineProperty(this, "pdf", {
      get: function() {
        return e5;
      },
      set: function(t3) {
        e5 = t3;
      }
    });
    var t2 = 150;
    Object.defineProperty(this, "width", {
      get: function() {
        return t2;
      },
      set: function(e6) {
        t2 = isNaN(e6) || false === Number.isInteger(e6) || e6 < 0 ? 150 : e6, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = t2 + 1);
      }
    });
    var n2 = 300;
    Object.defineProperty(this, "height", {
      get: function() {
        return n2;
      },
      set: function(e6) {
        n2 = isNaN(e6) || false === Number.isInteger(e6) || e6 < 0 ? 300 : e6, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = n2 + 1);
      }
    });
    var r2 = [];
    Object.defineProperty(this, "childNodes", {
      get: function() {
        return r2;
      },
      set: function(e6) {
        r2 = e6;
      }
    });
    var i2 = {};
    Object.defineProperty(this, "style", {
      get: function() {
        return i2;
      },
      set: function(e6) {
        i2 = e6;
      }
    }), Object.defineProperty(this, "parentNode", {});
  };
  t.prototype.getContext = function(e5, t2) {
    var n2;
    if ((e5 || (e5 = "2d")) !== "2d") return null;
    for (n2 in t2) this.pdf.context2d.hasOwnProperty(n2) && (this.pdf.context2d[n2] = t2[n2]);
    return this.pdf.context2d._canvas = this, this.pdf.context2d;
  }, t.prototype.toDataURL = function() {
    throw Error("toDataURL is not implemented.");
  }, e4.events.push(["initialized", function() {
    this.canvas = new t(), this.canvas.pdf = this;
  }]);
}(Z.API), function(e4) {
  var n2 = {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  }, r2 = false, i2 = function() {
    this.internal.__cell__ === void 0 && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, n2), this.internal.__cell__.margins.width = this.getPageWidth(), a2.call(this));
  }, a2 = function() {
    this.internal.__cell__.lastCell = new o2(), this.internal.__cell__.pages = 1;
  }, o2 = function() {
    var e5 = arguments[0];
    Object.defineProperty(this, "x", {
      enumerable: true,
      get: function() {
        return e5;
      },
      set: function(t2) {
        e5 = t2;
      }
    });
    var t = arguments[1];
    Object.defineProperty(this, "y", {
      enumerable: true,
      get: function() {
        return t;
      },
      set: function(e6) {
        t = e6;
      }
    });
    var n3 = arguments[2];
    Object.defineProperty(this, "width", {
      enumerable: true,
      get: function() {
        return n3;
      },
      set: function(e6) {
        n3 = e6;
      }
    });
    var r3 = arguments[3];
    Object.defineProperty(this, "height", {
      enumerable: true,
      get: function() {
        return r3;
      },
      set: function(e6) {
        r3 = e6;
      }
    });
    var i3 = arguments[4];
    Object.defineProperty(this, "text", {
      enumerable: true,
      get: function() {
        return i3;
      },
      set: function(e6) {
        i3 = e6;
      }
    });
    var a3 = arguments[5];
    Object.defineProperty(this, "lineNumber", {
      enumerable: true,
      get: function() {
        return a3;
      },
      set: function(e6) {
        a3 = e6;
      }
    });
    var o3 = arguments[6];
    return Object.defineProperty(this, "align", {
      enumerable: true,
      get: function() {
        return o3;
      },
      set: function(e6) {
        o3 = e6;
      }
    }), this;
  };
  o2.prototype.clone = function() {
    return new o2(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
  }, o2.prototype.toArray = function() {
    return [
      this.x,
      this.y,
      this.width,
      this.height,
      this.text,
      this.lineNumber,
      this.align
    ];
  }, e4.setHeaderFunction = function(e5) {
    return i2.call(this), this.internal.__cell__.headerFunction = typeof e5 == "function" ? e5 : void 0, this;
  }, e4.getTextDimensions = function(e5, t) {
    i2.call(this);
    var n3 = (t || (t = {})).fontSize || this.getFontSize(), r3 = t.font || this.getFont(), a3 = t.scaleFactor || this.internal.scaleFactor, o3 = 0, s3 = 0, c4 = 0, l2 = this;
    if (!Array.isArray(e5) && typeof e5 != "string") {
      if (typeof e5 != "number") throw Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
      e5 = String(e5);
    }
    var u2 = t.maxWidth;
    u2 > 0 ? typeof e5 == "string" ? e5 = this.splitTextToSize(e5, u2) : Object.prototype.toString.call(e5) === "[object Array]" && (e5 = e5.reduce(function(e6, t2) {
      return e6.concat(l2.splitTextToSize(t2, u2));
    }, [])) : e5 = Array.isArray(e5) ? e5 : [e5];
    for (var d2 = 0; d2 < e5.length; d2++) o3 < (c4 = this.getStringUnitWidth(e5[d2], { font: r3 }) * n3) && (o3 = c4);
    return o3 !== 0 && (s3 = e5.length), {
      w: o3 /= a3,
      h: Math.max((s3 * n3 * this.getLineHeightFactor() - n3 * (this.getLineHeightFactor() - 1)) / a3, 0)
    };
  }, e4.cellAddPage = function() {
    i2.call(this), this.addPage();
    var e5 = this.internal.__cell__.margins || n2;
    return this.internal.__cell__.lastCell = new o2(e5.left, e5.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
  };
  var s2 = e4.cell = function() {
    var e5 = arguments[0] instanceof o2 ? arguments[0] : new o2(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    i2.call(this);
    var t = this.internal.__cell__.lastCell, a3 = this.internal.__cell__.padding, s3 = this.internal.__cell__.margins || n2, c4 = this.internal.__cell__.tableHeaderRow, l2 = this.internal.__cell__.printHeaders;
    return t.lineNumber !== void 0 && (t.lineNumber === e5.lineNumber ? (e5.x = (t.x || 0) + (t.width || 0), e5.y = t.y || 0) : t.y + t.height + e5.height + s3.bottom > this.getPageHeight() ? (this.cellAddPage(), e5.y = s3.top, l2 && c4 && (this.printHeaderRow(e5.lineNumber, true), e5.y += c4[0].height)) : e5.y = t.y + t.height || e5.y), e5.text[0] !== void 0 && (this.rect(e5.x, e5.y, e5.width, e5.height, true === r2 ? "FD" : void 0), e5.align === "right" ? this.text(e5.text, e5.x + e5.width - a3, e5.y + a3, {
      align: "right",
      baseline: "top"
    }) : e5.align === "center" ? this.text(e5.text, e5.x + e5.width / 2, e5.y + a3, {
      align: "center",
      baseline: "top",
      maxWidth: e5.width - a3 - a3
    }) : this.text(e5.text, e5.x + a3, e5.y + a3, {
      align: "left",
      baseline: "top",
      maxWidth: e5.width - a3 - a3
    })), this.internal.__cell__.lastCell = e5, this;
  };
  e4.table = function(e5, r3, l2, u2, d2) {
    if (i2.call(this), !l2) throw Error("No data for PDF table.");
    var f2, p, m, h, g = [], _ = [], v = [], y = {}, b2 = {}, x2 = [], S2 = [], C2 = (d2 || (d2 = {})).autoSize || false, w2 = false !== d2.printHeaders, T2 = d2.css && d2.css["font-size"] !== void 0 ? 16 * d2.css["font-size"] : d2.fontSize || 12, E2 = d2.margins || Object.assign({ width: this.getPageWidth() }, n2), D2 = typeof d2.padding == "number" ? d2.padding : 3, O2 = d2.headerBackgroundColor || "#c8c8c8", k2 = d2.headerTextColor || "#000";
    if (a2.call(this), this.internal.__cell__.printHeaders = w2, this.internal.__cell__.margins = E2, this.internal.__cell__.table_font_size = T2, this.internal.__cell__.padding = D2, this.internal.__cell__.headerBackgroundColor = O2, this.internal.__cell__.headerTextColor = k2, this.setFontSize(T2), u2 == null) _ = g = Object.keys(l2[0]), v = g.map(function() {
      return "left";
    });
    else if (Array.isArray(u2) && e(u2[0]) === "object") for (g = u2.map(function(e6) {
      return e6.name;
    }), _ = u2.map(function(e6) {
      return e6.prompt || e6.name || "";
    }), v = u2.map(function(e6) {
      return e6.align || "left";
    }), f2 = 0; f2 < u2.length; f2 += 1) b2[u2[f2].name] = 0.7499990551181103 * u2[f2].width;
    else Array.isArray(u2) && typeof u2[0] == "string" && (_ = g = u2, v = g.map(function() {
      return "left";
    }));
    if (C2 || Array.isArray(u2) && typeof u2[0] == "string") for (f2 = 0; f2 < g.length; f2 += 1) {
      for (y[h = g[f2]] = l2.map(function(e6) {
        return e6[h];
      }), this.setFont(void 0, "bold"), x2.push(this.getTextDimensions(_[f2], {
        fontSize: this.internal.__cell__.table_font_size,
        scaleFactor: this.internal.scaleFactor
      }).w), p = y[h], this.setFont(void 0, "normal"), m = 0; m < p.length; m += 1) x2.push(this.getTextDimensions(p[m], {
        fontSize: this.internal.__cell__.table_font_size,
        scaleFactor: this.internal.scaleFactor
      }).w);
      b2[h] = Math.max.apply(null, x2) + D2 + D2, x2 = [];
    }
    if (w2) {
      var A2 = {};
      for (f2 = 0; f2 < g.length; f2 += 1) A2[g[f2]] = {}, A2[g[f2]].text = _[f2], A2[g[f2]].align = v[f2];
      var j2 = c3.call(this, A2, b2);
      S2 = g.map(function(t) {
        return new o2(e5, r3, b2[t], j2, A2[t].text, void 0, A2[t].align);
      }), this.setTableHeaderRow(S2), this.printHeaderRow(1, false);
    }
    var M2 = u2.reduce(function(e6, t) {
      return e6[t.name] = t.align, e6;
    }, {});
    for (f2 = 0; f2 < l2.length; f2 += 1) {
      "rowStart" in d2 && d2.rowStart instanceof Function && d2.rowStart({
        row: f2,
        data: l2[f2]
      }, this);
      var N2 = c3.call(this, l2[f2], b2);
      for (m = 0; m < g.length; m += 1) {
        var P2 = l2[f2][g[m]];
        "cellStart" in d2 && d2.cellStart instanceof Function && d2.cellStart({
          row: f2,
          col: m,
          data: P2
        }, this), s2.call(this, new o2(e5, r3, b2[g[m]], N2, P2, f2 + 2, M2[g[m]]));
      }
    }
    return this.internal.__cell__.table_x = e5, this.internal.__cell__.table_y = r3, this;
  };
  var c3 = function(e5, t) {
    var n3 = this.internal.__cell__.padding, r3 = this.internal.__cell__.table_font_size, i3 = this.internal.scaleFactor;
    return Object.keys(e5).map(function(r4) {
      var i4 = e5[r4];
      return this.splitTextToSize(i4.hasOwnProperty("text") ? i4.text : i4, t[r4] - n3 - n3);
    }, this).map(function(e6) {
      return this.getLineHeightFactor() * e6.length * r3 / i3 + n3 + n3;
    }, this).reduce(function(e6, t2) {
      return Math.max(e6, t2);
    }, 0);
  };
  e4.setTableHeaderRow = function(e5) {
    i2.call(this), this.internal.__cell__.tableHeaderRow = e5;
  }, e4.printHeaderRow = function(e5, t) {
    if (i2.call(this), !this.internal.__cell__.tableHeaderRow) throw Error("Property tableHeaderRow does not exist.");
    var n3;
    if (r2 = true, typeof this.internal.__cell__.headerFunction == "function") {
      var a3 = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
      this.internal.__cell__.lastCell = new o2(a3[0], a3[1], a3[2], a3[3], void 0, -1);
    }
    this.setFont(void 0, "bold");
    for (var c4 = [], l2 = 0; l2 < this.internal.__cell__.tableHeaderRow.length; l2 += 1) {
      n3 = this.internal.__cell__.tableHeaderRow[l2].clone(), t && (n3.y = this.internal.__cell__.margins.top || 0, c4.push(n3)), n3.lineNumber = e5;
      var u2 = this.getTextColor();
      this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), s2.call(this, n3), this.setTextColor(u2);
    }
    c4.length > 0 && this.setTableHeaderRow(c4), this.setFont(void 0, "normal"), r2 = false;
  };
}(Z.API);
var ps = {
  italic: [
    "italic",
    "oblique",
    "normal"
  ],
  oblique: [
    "oblique",
    "italic",
    "normal"
  ],
  normal: [
    "normal",
    "oblique",
    "italic"
  ]
};
var ms = [
  "ultra-condensed",
  "extra-condensed",
  "condensed",
  "semi-condensed",
  "normal",
  "semi-expanded",
  "expanded",
  "extra-expanded",
  "ultra-expanded"
];
var hs = fs(ms);
var gs = [
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900
];
var _s = fs(gs);
function vs(e4) {
  var t = e4.family.replace(/"|'/g, "").toLowerCase(), n2 = function(e5) {
    return ps[e5 || (e5 = "normal")] ? e5 : "normal";
  }(e4.style), r2 = function(e5) {
    return e5 ? typeof e5 == "number" ? e5 >= 100 && e5 <= 900 && e5 % 100 == 0 ? e5 : 400 : /^\d00$/.test(e5) ? parseInt(e5) : e5 === "bold" ? 700 : 400 : 400;
  }(e4.weight), i2 = function(e5) {
    return typeof hs[e5 || (e5 = "normal")] == "number" ? e5 : "normal";
  }(e4.stretch);
  return {
    family: t,
    style: n2,
    weight: r2,
    stretch: i2,
    src: e4.src || [],
    ref: e4.ref || {
      name: t,
      style: [
        i2,
        n2,
        r2
      ].join(" ")
    }
  };
}
function ys(e4, t, n2, r2) {
  var i2;
  for (i2 = n2; i2 >= 0 && i2 < t.length; i2 += r2) if (e4[t[i2]]) return e4[t[i2]];
  for (i2 = n2; i2 >= 0 && i2 < t.length; i2 -= r2) if (e4[t[i2]]) return e4[t[i2]];
}
var bs = {
  "sans-serif": "helvetica",
  fixed: "courier",
  monospace: "courier",
  terminal: "courier",
  cursive: "times",
  fantasy: "times",
  serif: "times"
};
var xs = {
  caption: "times",
  icon: "times",
  menu: "times",
  "message-box": "times",
  "small-caption": "times",
  "status-bar": "times"
};
function Ss(e4) {
  return [
    e4.stretch,
    e4.style,
    e4.weight,
    e4.family
  ].join(" ");
}
function Cs(e4) {
  return e4.trimLeft();
}
function ws(e4, t) {
  for (var n2 = 0; n2 < e4.length; ) {
    if (e4.charAt(n2) === t) return [e4.substring(0, n2), e4.substring(n2 + 1)];
    n2 += 1;
  }
  return null;
}
function Ts(e4) {
  var t = e4.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
  return t === null ? null : [t[0], e4.substring(t[0].length)];
}
var Es;
var Ds;
var Os;
var ks;
var As;
var js = ["times"];
function Ms(e4, t, n2, r2, i2) {
  var a2 = 4, o2 = Fs;
  switch (i2) {
    case Z.API.image_compression.FAST:
      a2 = 1, o2 = Ps;
      break;
    case Z.API.image_compression.MEDIUM:
      a2 = 6, o2 = Is;
      break;
    case Z.API.image_compression.SLOW:
      a2 = 9, o2 = Ls;
  }
  e4 = function(e5, t2, n3, r3) {
    for (var i3, a3 = e5.length / t2, o3 = new Uint8Array(e5.length + a3), s3 = [
      Ns,
      Ps,
      Fs,
      Is,
      Ls
    ], c3 = 0; c3 < a3; c3 += 1) {
      var l2 = c3 * t2, u2 = e5.subarray(l2, l2 + t2);
      if (r3) o3.set(r3(u2, n3, i3), l2 + c3);
      else {
        for (var d2 = s3.length, f2 = [], p = 0; p < d2; p += 1) f2[p] = s3[p](u2, n3, i3);
        var m = zs(f2.concat());
        o3.set(f2[m], l2 + c3);
      }
      i3 = u2;
    }
    return o3;
  }(e4, t, Math.ceil(n2 * r2 / 8), o2);
  var s2 = z(e4, { level: a2 });
  return Z.API.__addimage__.arrayBufferToBinaryString(s2);
}
function Ns(e4) {
  var t = Array.apply([], e4);
  return t.unshift(0), t;
}
function Ps(e4, t) {
  var n2 = e4.length, r2 = [];
  r2[0] = 1;
  for (var i2 = 0; i2 < n2; i2 += 1) {
    var a2 = e4[i2 - t] || 0;
    r2[i2 + 1] = e4[i2] - a2 + 256 & 255;
  }
  return r2;
}
function Fs(e4, t, n2) {
  var r2 = e4.length, i2 = [];
  i2[0] = 2;
  for (var a2 = 0; a2 < r2; a2 += 1) {
    var o2 = n2 && n2[a2] || 0;
    i2[a2 + 1] = e4[a2] - o2 + 256 & 255;
  }
  return i2;
}
function Is(e4, t, n2) {
  var r2 = e4.length, i2 = [];
  i2[0] = 3;
  for (var a2 = 0; a2 < r2; a2 += 1) {
    var o2 = e4[a2 - t] || 0, s2 = n2 && n2[a2] || 0;
    i2[a2 + 1] = e4[a2] + 256 - (o2 + s2 >>> 1) & 255;
  }
  return i2;
}
function Ls(e4, t, n2) {
  var r2 = e4.length, i2 = [];
  i2[0] = 4;
  for (var a2 = 0; a2 < r2; a2 += 1) {
    var o2 = Rs(e4[a2 - t] || 0, n2 && n2[a2] || 0, n2 && n2[a2 - t] || 0);
    i2[a2 + 1] = e4[a2] - o2 + 256 & 255;
  }
  return i2;
}
function Rs(e4, t, n2) {
  if (e4 === t && t === n2) return e4;
  var r2 = Math.abs(t - n2), i2 = Math.abs(e4 - n2), a2 = Math.abs(e4 + t - n2 - n2);
  return r2 <= i2 && r2 <= a2 ? e4 : i2 <= a2 ? t : n2;
}
function zs(e4) {
  var t = e4.map(function(e5) {
    return e5.reduce(function(e6, t2) {
      return e6 + Math.abs(t2);
    }, 0);
  });
  return t.indexOf(Math.min.apply(null, t));
}
function Bs(e4, t, n2) {
  var r2 = t * n2, i2 = Math.floor(r2 / 8), a2 = 16 - (r2 - 8 * i2 + n2), o2 = (1 << n2) - 1;
  return Hs(e4, i2) >> a2 & o2;
}
function Vs(e4, t, n2, r2) {
  var i2 = n2 * r2, a2 = Math.floor(i2 / 8), o2 = 16 - (i2 - 8 * a2 + r2), s2 = (1 << r2) - 1, c3 = (t & s2) << o2;
  (function(e5, t2, n3) {
    if (t2 + 1 < e5.byteLength) e5.setUint16(t2, n3, false);
    else {
      var r3 = n3 >> 8 & 255;
      e5.setUint8(t2, r3);
    }
  })(e4, a2, Hs(e4, a2) & ~(s2 << o2) & 65535 | c3);
}
function Hs(e4, t) {
  return t + 1 < e4.byteLength ? e4.getUint16(t, false) : e4.getUint8(t) << 8;
}
function Us(e4) {
  var t = 0;
  if (e4[t++] !== 71 || e4[t++] !== 73 || e4[t++] !== 70 || e4[t++] !== 56 || (e4[t++] + 1 & 253) != 56 || e4[t++] !== 97) throw Error("Invalid GIF 87a/89a header.");
  var n2 = e4[t++] | e4[t++] << 8, r2 = e4[t++] | e4[t++] << 8, i2 = e4[t++], a2 = i2 >> 7, o2 = 1 << 1 + (7 & i2);
  e4[t++], e4[t++];
  var s2 = null, c3 = null;
  a2 && (s2 = t, c3 = o2, t += 3 * o2);
  var l2 = true, u2 = [], d2 = 0, f2 = null, p = 0, m = null;
  for (this.width = n2, this.height = r2; l2 && t < e4.length; ) switch (e4[t++]) {
    case 33:
      switch (e4[t++]) {
        case 255:
          if (e4[t] !== 11 || e4[t + 1] == 78 && e4[t + 2] == 69 && e4[t + 3] == 84 && e4[t + 4] == 83 && e4[t + 5] == 67 && e4[t + 6] == 65 && e4[t + 7] == 80 && e4[t + 8] == 69 && e4[t + 9] == 50 && e4[t + 10] == 46 && e4[t + 11] == 48 && e4[t + 12] == 3 && e4[t + 13] == 1 && e4[t + 16] == 0) t += 14, m = e4[t++] | e4[t++] << 8, t++;
          else for (t += 12; ; ) {
            if (!((D2 = e4[t++]) >= 0)) throw Error("Invalid block size");
            if (D2 === 0) break;
            t += D2;
          }
          break;
        case 249:
          if (e4[t++] !== 4 || e4[t + 4] !== 0) throw Error("Invalid graphics extension block.");
          var h = e4[t++];
          d2 = e4[t++] | e4[t++] << 8, f2 = e4[t++], 1 & h || (f2 = null), p = h >> 2 & 7, t++;
          break;
        case 254:
          for (; ; ) {
            if (!((D2 = e4[t++]) >= 0)) throw Error("Invalid block size");
            if (D2 === 0) break;
            t += D2;
          }
          break;
        default:
          throw Error("Unknown graphic control label: 0x" + e4[t - 1].toString(16));
      }
      break;
    case 44:
      var g = e4[t++] | e4[t++] << 8, _ = e4[t++] | e4[t++] << 8, v = e4[t++] | e4[t++] << 8, y = e4[t++] | e4[t++] << 8, b2 = e4[t++], x2 = b2 >> 6 & 1, S2 = 1 << 1 + (7 & b2), C2 = s2, w2 = c3, T2 = false;
      b2 >> 7 && (T2 = true, C2 = t, w2 = S2, t += 3 * S2);
      var E2 = t;
      for (t++; ; ) {
        var D2;
        if (!((D2 = e4[t++]) >= 0)) throw Error("Invalid block size");
        if (D2 === 0) break;
        t += D2;
      }
      u2.push({
        x: g,
        y: _,
        width: v,
        height: y,
        has_local_palette: T2,
        palette_offset: C2,
        palette_size: w2,
        data_offset: E2,
        data_length: t - E2,
        transparent_index: f2,
        interlaced: !!x2,
        delay: d2,
        disposal: p
      });
      break;
    case 59:
      l2 = false;
      break;
    default:
      throw Error("Unknown gif block: 0x" + e4[t - 1].toString(16));
  }
  this.numFrames = function() {
    return u2.length;
  }, this.loopCount = function() {
    return m;
  }, this.frameInfo = function(e5) {
    if (e5 < 0 || e5 >= u2.length) throw Error("Frame index out of range.");
    return u2[e5];
  }, this.decodeAndBlitFrameBGRA = function(t2, r3) {
    var i3 = this.frameInfo(t2), a3 = i3.width * i3.height;
    if (a3 > 536870912) throw Error("Image dimensions exceed 512MB, which is too large.");
    var o3 = new Uint8Array(a3);
    Ws(e4, i3.data_offset, o3, a3);
    var s3 = i3.palette_offset, c4 = i3.transparent_index;
    c4 === null && (c4 = 256);
    var l3 = i3.width, u3 = n2 - l3, d3 = l3, f3 = 4 * (i3.y * n2 + i3.x), p2 = 4 * ((i3.y + i3.height) * n2 + i3.x), m2 = f3, h2 = 4 * u3;
    true === i3.interlaced && (h2 += 4 * n2 * 7);
    for (var g2 = 8, _2 = 0, v2 = o3.length; _2 < v2; ++_2) {
      var y2 = o3[_2];
      if (d3 === 0 && (d3 = l3, (m2 += h2) >= p2 && (h2 = 4 * u3 + 4 * n2 * (g2 - 1), m2 = f3 + (l3 + u3) * (g2 << 1), g2 >>= 1)), y2 === c4) m2 += 4;
      else {
        var b3 = e4[s3 + 3 * y2], x3 = e4[s3 + 3 * y2 + 1], S3 = e4[s3 + 3 * y2 + 2];
        r3[m2++] = S3, r3[m2++] = x3, r3[m2++] = b3, r3[m2++] = 255;
      }
      --d3;
    }
  }, this.decodeAndBlitFrameRGBA = function(t2, r3) {
    var i3 = this.frameInfo(t2), a3 = i3.width * i3.height;
    if (a3 > 536870912) throw Error("Image dimensions exceed 512MB, which is too large.");
    var o3 = new Uint8Array(a3);
    Ws(e4, i3.data_offset, o3, a3);
    var s3 = i3.palette_offset, c4 = i3.transparent_index;
    c4 === null && (c4 = 256);
    var l3 = i3.width, u3 = n2 - l3, d3 = l3, f3 = 4 * (i3.y * n2 + i3.x), p2 = 4 * ((i3.y + i3.height) * n2 + i3.x), m2 = f3, h2 = 4 * u3;
    true === i3.interlaced && (h2 += 4 * n2 * 7);
    for (var g2 = 8, _2 = 0, v2 = o3.length; _2 < v2; ++_2) {
      var y2 = o3[_2];
      if (d3 === 0 && (d3 = l3, (m2 += h2) >= p2 && (h2 = 4 * u3 + 4 * n2 * (g2 - 1), m2 = f3 + (l3 + u3) * (g2 << 1), g2 >>= 1)), y2 === c4) m2 += 4;
      else {
        var b3 = e4[s3 + 3 * y2], x3 = e4[s3 + 3 * y2 + 1], S3 = e4[s3 + 3 * y2 + 2];
        r3[m2++] = b3, r3[m2++] = x3, r3[m2++] = S3, r3[m2++] = 255;
      }
      --d3;
    }
  };
}
function Ws(e4, t, n2, r2) {
  for (var i2 = e4[t++], a2 = 1 << i2, o2 = a2 + 1, s2 = o2 + 1, c3 = i2 + 1, l2 = (1 << c3) - 1, u2 = 0, d2 = 0, f2 = 0, p = e4[t++], m = new Int32Array(4096), h = null; ; ) {
    for (; u2 < 16 && p !== 0; ) d2 |= e4[t++] << u2, u2 += 8, p === 1 ? p = e4[t++] : --p;
    if (u2 < c3) break;
    var g = d2 & l2;
    if (d2 >>= c3, u2 -= c3, g !== a2) {
      if (g === o2) break;
      for (var _ = g < s2 ? g : h, v = 0, y = _; y > a2; ) y = m[y] >> 8, ++v;
      var b2 = y;
      if (f2 + v + (_ === g ? 0 : 1) > r2) return void Ja.log("Warning, gif stream longer than expected.");
      n2[f2++] = b2;
      var x2 = f2 += v;
      for (_ !== g && (n2[f2++] = b2), y = _; v--; ) y = m[y], n2[--x2] = 255 & y, y >>= 8;
      h !== null && s2 < 4096 && (m[s2++] = h << 8 | b2, s2 >= l2 + 1 && c3 < 12 && (++c3, l2 = l2 << 1 | 1)), h = g;
    } else s2 = o2 + 1, l2 = (1 << (c3 = i2 + 1)) - 1, h = null;
  }
  return f2 !== r2 && Ja.log("Warning, gif stream shorter than expected."), n2;
}
function Gs(e4) {
  var t, n2, r2, i2, a2, o2 = Math.floor, s2 = Array(64), c3 = Array(64), l2 = Array(64), u2 = Array(64), d2 = Array(65535), f2 = Array(65535), p = Array(64), m = Array(64), h = [], g = 0, _ = 7, v = Array(64), y = Array(64), b2 = Array(64), x2 = Array(256), S2 = Array(2048), C2 = [
    0,
    1,
    5,
    6,
    14,
    15,
    27,
    28,
    2,
    4,
    7,
    13,
    16,
    26,
    29,
    42,
    3,
    8,
    12,
    17,
    25,
    30,
    41,
    43,
    9,
    11,
    18,
    24,
    31,
    40,
    44,
    53,
    10,
    19,
    23,
    32,
    39,
    45,
    52,
    54,
    20,
    22,
    33,
    38,
    46,
    51,
    55,
    60,
    21,
    34,
    37,
    47,
    50,
    56,
    59,
    61,
    35,
    36,
    48,
    49,
    57,
    58,
    62,
    63
  ], w2 = [
    0,
    0,
    1,
    5,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ], T2 = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ], E2 = [
    0,
    0,
    2,
    1,
    3,
    3,
    2,
    4,
    3,
    5,
    5,
    4,
    4,
    0,
    0,
    1,
    125
  ], D2 = [
    1,
    2,
    3,
    0,
    4,
    17,
    5,
    18,
    33,
    49,
    65,
    6,
    19,
    81,
    97,
    7,
    34,
    113,
    20,
    50,
    129,
    145,
    161,
    8,
    35,
    66,
    177,
    193,
    21,
    82,
    209,
    240,
    36,
    51,
    98,
    114,
    130,
    9,
    10,
    22,
    23,
    24,
    25,
    26,
    37,
    38,
    39,
    40,
    41,
    42,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    115,
    116,
    117,
    118,
    119,
    120,
    121,
    122,
    131,
    132,
    133,
    134,
    135,
    136,
    137,
    138,
    146,
    147,
    148,
    149,
    150,
    151,
    152,
    153,
    154,
    162,
    163,
    164,
    165,
    166,
    167,
    168,
    169,
    170,
    178,
    179,
    180,
    181,
    182,
    183,
    184,
    185,
    186,
    194,
    195,
    196,
    197,
    198,
    199,
    200,
    201,
    202,
    210,
    211,
    212,
    213,
    214,
    215,
    216,
    217,
    218,
    225,
    226,
    227,
    228,
    229,
    230,
    231,
    232,
    233,
    234,
    241,
    242,
    243,
    244,
    245,
    246,
    247,
    248,
    249,
    250
  ], O2 = [
    0,
    0,
    3,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0
  ], k2 = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ], A2 = [
    0,
    0,
    2,
    1,
    2,
    4,
    4,
    3,
    4,
    7,
    5,
    4,
    4,
    0,
    1,
    2,
    119
  ], j2 = [
    0,
    1,
    2,
    3,
    17,
    4,
    5,
    33,
    49,
    6,
    18,
    65,
    81,
    7,
    97,
    113,
    19,
    34,
    50,
    129,
    8,
    20,
    66,
    145,
    161,
    177,
    193,
    9,
    35,
    51,
    82,
    240,
    21,
    98,
    114,
    209,
    10,
    22,
    36,
    52,
    225,
    37,
    241,
    23,
    24,
    25,
    26,
    38,
    39,
    40,
    41,
    42,
    53,
    54,
    55,
    56,
    57,
    58,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    115,
    116,
    117,
    118,
    119,
    120,
    121,
    122,
    130,
    131,
    132,
    133,
    134,
    135,
    136,
    137,
    138,
    146,
    147,
    148,
    149,
    150,
    151,
    152,
    153,
    154,
    162,
    163,
    164,
    165,
    166,
    167,
    168,
    169,
    170,
    178,
    179,
    180,
    181,
    182,
    183,
    184,
    185,
    186,
    194,
    195,
    196,
    197,
    198,
    199,
    200,
    201,
    202,
    210,
    211,
    212,
    213,
    214,
    215,
    216,
    217,
    218,
    226,
    227,
    228,
    229,
    230,
    231,
    232,
    233,
    234,
    242,
    243,
    244,
    245,
    246,
    247,
    248,
    249,
    250
  ];
  function M2(e5, t2) {
    for (var n3 = 0, r3 = 0, i3 = [], a3 = 1; a3 <= 16; a3++) {
      for (var o3 = 1; o3 <= e5[a3]; o3++) i3[t2[r3]] = [], i3[t2[r3]][0] = n3, i3[t2[r3]][1] = a3, r3++, n3++;
      n3 *= 2;
    }
    return i3;
  }
  function N2(e5) {
    for (var t2 = e5[0], n3 = e5[1] - 1; n3 >= 0; ) t2 & 1 << n3 && (g |= 1 << _), n3--, --_ < 0 && (g == 255 ? (P2(255), P2(0)) : P2(g), _ = 7, g = 0);
  }
  function P2(e5) {
    h.push(e5);
  }
  function F2(e5) {
    P2(e5 >> 8 & 255), P2(255 & e5);
  }
  function I2(e5, t2, n3, r3, i3) {
    for (var a3, o3 = i3[0], s3 = i3[240], c4 = function(e6, t3) {
      var n4, r4, i4, a4, o4, s4, c5, l4, u4, d3, f3 = 0;
      for (u4 = 0; u4 < 8; ++u4) {
        n4 = e6[f3], r4 = e6[f3 + 1], i4 = e6[f3 + 2], a4 = e6[f3 + 3], o4 = e6[f3 + 4], s4 = e6[f3 + 5], c5 = e6[f3 + 6];
        var m2 = n4 + (l4 = e6[f3 + 7]), h3 = n4 - l4, g3 = r4 + c5, _3 = r4 - c5, v3 = i4 + s4, y3 = i4 - s4, b4 = a4 + o4, x3 = a4 - o4, S3 = m2 + b4, C3 = m2 - b4, w3 = g3 + v3, T3 = g3 - v3;
        e6[f3] = S3 + w3, e6[f3 + 4] = S3 - w3;
        var E3 = 0.707106781 * (T3 + C3);
        e6[f3 + 2] = C3 + E3, e6[f3 + 6] = C3 - E3;
        var D3 = 0.382683433 * ((S3 = x3 + y3) - (T3 = _3 + h3)), O3 = 0.5411961 * S3 + D3, k3 = 1.306562965 * T3 + D3, A3 = 0.707106781 * (w3 = y3 + _3), j3 = h3 + A3, M3 = h3 - A3;
        e6[f3 + 5] = M3 + O3, e6[f3 + 3] = M3 - O3, e6[f3 + 1] = j3 + k3, e6[f3 + 7] = j3 - k3, f3 += 8;
      }
      for (f3 = 0, u4 = 0; u4 < 8; ++u4) {
        n4 = e6[f3], r4 = e6[f3 + 8], i4 = e6[f3 + 16], a4 = e6[f3 + 24], o4 = e6[f3 + 32], s4 = e6[f3 + 40], c5 = e6[f3 + 48];
        var N3 = n4 + (l4 = e6[f3 + 56]), P3 = n4 - l4, F3 = r4 + c5, I3 = r4 - c5, L3 = i4 + s4, R2 = i4 - s4, z2 = a4 + o4, B2 = a4 - o4, V2 = N3 + z2, ee2 = N3 - z2, H2 = F3 + L3, te2 = F3 - L3;
        e6[f3] = V2 + H2, e6[f3 + 32] = V2 - H2;
        var U2 = 0.707106781 * (te2 + ee2);
        e6[f3 + 16] = ee2 + U2, e6[f3 + 48] = ee2 - U2;
        var ne2 = 0.382683433 * ((V2 = B2 + R2) - (te2 = I3 + P3)), re2 = 0.5411961 * V2 + ne2, ie2 = 1.306562965 * te2 + ne2, ae2 = 0.707106781 * (H2 = R2 + I3), oe2 = P3 + ae2, se2 = P3 - ae2;
        e6[f3 + 40] = se2 + re2, e6[f3 + 24] = se2 - re2, e6[f3 + 8] = oe2 + ie2, e6[f3 + 56] = oe2 - ie2, f3++;
      }
      for (u4 = 0; u4 < 64; ++u4) d3 = e6[u4] * t3[u4], p[u4] = d3 > 0 ? d3 + 0.5 | 0 : d3 - 0.5 | 0;
      return p;
    }(e5, t2), l3 = 0; l3 < 64; ++l3) m[C2[l3]] = c4[l3];
    var u3 = m[0] - n3;
    n3 = m[0], u3 == 0 ? N2(r3[0]) : (N2(r3[f2[a3 = 32767 + u3]]), N2(d2[a3]));
    for (var h2 = 63; h2 > 0 && m[h2] == 0; ) h2--;
    if (h2 == 0) return N2(o3), n3;
    for (var g2, _2 = 1; _2 <= h2; ) {
      for (var v2 = _2; m[_2] == 0 && _2 <= h2; ) ++_2;
      var y2 = _2 - v2;
      if (y2 >= 16) {
        g2 = y2 >> 4;
        for (var b3 = 1; b3 <= g2; ++b3) N2(s3);
        y2 &= 15;
      }
      a3 = 32767 + m[_2], N2(i3[(y2 << 4) + f2[a3]]), N2(d2[a3]), _2++;
    }
    return h2 != 63 && N2(o3), n3;
  }
  function L2(e5) {
    e5 = Math.min(Math.max(e5, 1), 100), a2 != e5 && (function(e6) {
      for (var t2 = [
        16,
        11,
        10,
        16,
        24,
        40,
        51,
        61,
        12,
        12,
        14,
        19,
        26,
        58,
        60,
        55,
        14,
        13,
        16,
        24,
        40,
        57,
        69,
        56,
        14,
        17,
        22,
        29,
        51,
        87,
        80,
        62,
        18,
        22,
        37,
        56,
        68,
        109,
        103,
        77,
        24,
        35,
        55,
        64,
        81,
        104,
        113,
        92,
        49,
        64,
        78,
        87,
        103,
        121,
        120,
        101,
        72,
        92,
        95,
        98,
        112,
        100,
        103,
        99
      ], n3 = 0; n3 < 64; n3++) {
        var r3 = o2((t2[n3] * e6 + 50) / 100);
        r3 = Math.min(Math.max(r3, 1), 255), s2[C2[n3]] = r3;
      }
      for (var i3 = [
        17,
        18,
        24,
        47,
        99,
        99,
        99,
        99,
        18,
        21,
        26,
        66,
        99,
        99,
        99,
        99,
        24,
        26,
        56,
        99,
        99,
        99,
        99,
        99,
        47,
        66,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99,
        99
      ], a3 = 0; a3 < 64; a3++) {
        var d3 = o2((i3[a3] * e6 + 50) / 100);
        d3 = Math.min(Math.max(d3, 1), 255), c3[C2[a3]] = d3;
      }
      for (var f3 = [
        1,
        1.387039845,
        1.306562965,
        1.175875602,
        1,
        0.785694958,
        0.5411961,
        0.275899379
      ], p2 = 0, m2 = 0; m2 < 8; m2++) for (var h2 = 0; h2 < 8; h2++) l2[p2] = 1 / (s2[C2[p2]] * f3[m2] * f3[h2] * 8), u2[p2] = 1 / (c3[C2[p2]] * f3[m2] * f3[h2] * 8), p2++;
    }(Math.floor(e5 < 50 ? 5e3 / e5 : 200 - 2 * e5)), a2 = e5);
  }
  this.encode = function(e5, a3) {
    a3 && L2(a3), h = [], g = 0, _ = 7, F2(65496), F2(65504), F2(16), P2(74), P2(70), P2(73), P2(70), P2(0), P2(1), P2(1), P2(0), F2(1), F2(1), P2(0), P2(0), function() {
      F2(65499), F2(132), P2(0);
      for (var e6 = 0; e6 < 64; e6++) P2(s2[e6]);
      P2(1);
      for (var t2 = 0; t2 < 64; t2++) P2(c3[t2]);
    }(), function(e6, t2) {
      F2(65472), F2(17), P2(8), F2(t2), F2(e6), P2(3), P2(1), P2(17), P2(0), P2(2), P2(17), P2(1), P2(3), P2(17), P2(1);
    }(e5.width, e5.height), function() {
      F2(65476), F2(418), P2(0);
      for (var e6 = 0; e6 < 16; e6++) P2(w2[e6 + 1]);
      for (var t2 = 0; t2 <= 11; t2++) P2(T2[t2]);
      P2(16);
      for (var n3 = 0; n3 < 16; n3++) P2(E2[n3 + 1]);
      for (var r3 = 0; r3 <= 161; r3++) P2(D2[r3]);
      P2(1);
      for (var i3 = 0; i3 < 16; i3++) P2(O2[i3 + 1]);
      for (var a4 = 0; a4 <= 11; a4++) P2(k2[a4]);
      P2(17);
      for (var o4 = 0; o4 < 16; o4++) P2(A2[o4 + 1]);
      for (var s3 = 0; s3 <= 161; s3++) P2(j2[s3]);
    }(), F2(65498), F2(12), P2(3), P2(1), P2(0), P2(2), P2(17), P2(3), P2(17), P2(0), P2(63), P2(0);
    var o3 = 0, d3 = 0, f3 = 0;
    g = 0, _ = 7, this.encode.displayName = "_encode_";
    for (var p2, m2, x3, C3, M3, R2, z2, B2, V2, ee2 = e5.data, H2 = e5.width, te2 = e5.height, U2 = 4 * H2, ne2 = 0; ne2 < te2; ) {
      for (p2 = 0; p2 < U2; ) {
        for (M3 = U2 * ne2 + p2, z2 = -1, B2 = 0, V2 = 0; V2 < 64; V2++) R2 = M3 + (B2 = V2 >> 3) * U2 + (z2 = 4 * (7 & V2)), ne2 + B2 >= te2 && (R2 -= U2 * (ne2 + 1 + B2 - te2)), p2 + z2 >= U2 && (R2 -= p2 + z2 - U2 + 4), m2 = ee2[R2++], x3 = ee2[R2++], C3 = ee2[R2++], v[V2] = (S2[m2] + S2[x3 + 256 | 0] + S2[C3 + 512 | 0] >> 16) - 128, y[V2] = (S2[m2 + 768 | 0] + S2[x3 + 1024 | 0] + S2[C3 + 1280 | 0] >> 16) - 128, b2[V2] = (S2[m2 + 1280 | 0] + S2[x3 + 1536 | 0] + S2[C3 + 1792 | 0] >> 16) - 128;
        o3 = I2(v, l2, o3, t, r2), d3 = I2(y, u2, d3, n2, i2), f3 = I2(b2, u2, f3, n2, i2), p2 += 32;
      }
      ne2 += 8;
    }
    if (_ >= 0) {
      var re2 = [];
      re2[1] = _ + 1, re2[0] = (1 << _ + 1) - 1, N2(re2);
    }
    return F2(65497), new Uint8Array(h);
  }, e4 || (e4 = 50), function() {
    for (var e5 = String.fromCharCode, t2 = 0; t2 < 256; t2++) x2[t2] = e5(t2);
  }(), t = M2(w2, T2), n2 = M2(O2, k2), r2 = M2(E2, D2), i2 = M2(A2, j2), function() {
    for (var e5 = 1, t2 = 2, n3 = 1; n3 <= 15; n3++) {
      for (var r3 = e5; r3 < t2; r3++) f2[32767 + r3] = n3, d2[32767 + r3] = [], d2[32767 + r3][1] = n3, d2[32767 + r3][0] = r3;
      for (var i3 = -(t2 - 1); i3 <= -e5; i3++) f2[32767 + i3] = n3, d2[32767 + i3] = [], d2[32767 + i3][1] = n3, d2[32767 + i3][0] = t2 - 1 + i3;
      e5 <<= 1, t2 <<= 1;
    }
  }(), function() {
    for (var e5 = 0; e5 < 256; e5++) S2[e5] = 19595 * e5, S2[e5 + 256 | 0] = 38470 * e5, S2[e5 + 512 | 0] = 7471 * e5 + 32768, S2[e5 + 768 | 0] = -11059 * e5, S2[e5 + 1024 | 0] = -21709 * e5, S2[e5 + 1280 | 0] = 32768 * e5 + 8421375, S2[e5 + 1536 | 0] = -27439 * e5, S2[e5 + 1792 | 0] = -5329 * e5;
  }(), L2(e4);
}
function Ks(e4, t) {
  if (this.pos = 0, this.buffer = e4, this.datav = new DataView(e4.buffer), this.is_with_alpha = !!t, this.bottom_up = true, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, [
    "BM",
    "BA",
    "CI",
    "CP",
    "IC",
    "PT"
  ].indexOf(this.flag) === -1) throw Error("Invalid BMP File");
  this.parseHeader(), this.parseBGR();
}
function qs(e4) {
  function t(e5) {
    if (!e5) throw Error("assert :P");
  }
  function n2(e5, t2, n3) {
    for (var r3 = 0; 4 > r3; r3++) if (e5[t2 + r3] != n3.charCodeAt(r3)) return true;
    return false;
  }
  function r2(e5, t2, n3, r3, i3) {
    for (var a3 = 0; a3 < i3; a3++) e5[t2 + a3] = n3[r3 + a3];
  }
  function i2(e5, t2, n3, r3) {
    for (var i3 = 0; i3 < r3; i3++) e5[t2 + i3] = n3;
  }
  function a2(e5) {
    return new Int32Array(e5);
  }
  function o2(e5, t2) {
    for (var n3 = [], r3 = 0; r3 < e5; r3++) n3.push(new t2());
    return n3;
  }
  function s2(e5, t2) {
    var n3 = [];
    return function e6(n4, r3, i3) {
      for (var a3 = i3[r3], o3 = 0; o3 < a3 && (n4.push(i3.length > r3 + 1 ? [] : new t2()), !(i3.length < r3 + 1)); o3++) e6(n4[o3], r3 + 1, i3);
    }(n3, 0, e5), n3;
  }
  var c3 = function() {
    var e5 = this;
    function c4(e6, t2) {
      for (var n3 = 1 << t2 - 1 >>> 0; e6 & n3; ) n3 >>>= 1;
      return n3 ? (e6 & n3 - 1) + n3 : e6;
    }
    function l3(e6, n3, r3, i3, a3) {
      t(!(i3 % r3));
      do
        e6[n3 + (i3 -= r3)] = a3;
      while (0 < i3);
    }
    function u3(e6, n3, r3, i3, o3) {
      if (t(2328 >= o3), 512 >= o3) var s3 = a2(512);
      else if ((s3 = a2(o3)) == null) return 0;
      return function(e7, n4, r4, i4, o4, s4) {
        var u4, f4, p3 = n4, m3 = 1 << r4, h3 = a2(16), g3 = a2(16);
        for (t(o4 != 0), t(i4 != null), t(e7 != null), t(0 < r4), f4 = 0; f4 < o4; ++f4) {
          if (15 < i4[f4]) return 0;
          ++h3[i4[f4]];
        }
        if (h3[0] == o4) return 0;
        for (g3[1] = 0, u4 = 1; 15 > u4; ++u4) {
          if (h3[u4] > 1 << u4) return 0;
          g3[u4 + 1] = g3[u4] + h3[u4];
        }
        for (f4 = 0; f4 < o4; ++f4) u4 = i4[f4], 0 < i4[f4] && (s4[g3[u4]++] = f4);
        if (g3[15] == 1) return (i4 = new d3()).g = 0, i4.value = s4[0], l3(e7, p3, 1, m3, i4), m3;
        var _3, v3 = -1, y3 = m3 - 1, b4 = 0, x4 = 1, S4 = 1, C4 = 1 << r4;
        for (f4 = 0, u4 = 1, o4 = 2; u4 <= r4; ++u4, o4 <<= 1) {
          if (x4 += S4 <<= 1, 0 > (S4 -= h3[u4])) return 0;
          for (; 0 < h3[u4]; --h3[u4]) (i4 = new d3()).g = u4, i4.value = s4[f4++], l3(e7, p3 + b4, o4, C4, i4), b4 = c4(b4, u4);
        }
        for (u4 = r4 + 1, o4 = 2; 15 >= u4; ++u4, o4 <<= 1) {
          if (x4 += S4 <<= 1, 0 > (S4 -= h3[u4])) return 0;
          for (; 0 < h3[u4]; --h3[u4]) {
            if (i4 = new d3(), (b4 & y3) != v3) {
              for (p3 += C4, _3 = 1 << (v3 = u4) - r4; 15 > v3 && !(0 >= (_3 -= h3[v3])); ) ++v3, _3 <<= 1;
              m3 += C4 = 1 << (_3 = v3 - r4), e7[n4 + (v3 = b4 & y3)].g = _3 + r4, e7[n4 + v3].value = p3 - n4 - v3;
            }
            i4.g = u4 - r4, i4.value = s4[f4++], l3(e7, p3 + (b4 >> r4), o4, C4, i4), b4 = c4(b4, u4);
          }
        }
        return x4 == 2 * g3[15] - 1 ? m3 : 0;
      }(e6, n3, r3, i3, o3, s3);
    }
    function d3() {
      this.value = this.g = 0;
    }
    function f3() {
      this.value = this.g = 0;
    }
    function p2() {
      this.G = o2(5, d3), this.H = a2(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = o2(Hn2, f3);
    }
    function m2(e6, n3, r3, i3) {
      t(e6 != null), t(n3 != null), t(2147483648 > i3), e6.Ca = 254, e6.I = 0, e6.b = -8, e6.Ka = 0, e6.oa = n3, e6.pa = r3, e6.Jd = n3, e6.Yc = r3 + i3, e6.Zc = 4 <= i3 ? r3 + i3 - 4 + 1 : r3, E2(e6);
    }
    function h2(e6, t2) {
      for (var n3 = 0; 0 < t2--; ) n3 |= O2(e6, 128) << t2;
      return n3;
    }
    function g2(e6, t2) {
      var n3 = h2(e6, t2);
      return D2(e6) ? -n3 : n3;
    }
    function _2(e6, n3, r3, i3) {
      var a3, o3 = 0;
      for (t(e6 != null), t(n3 != null), t(4294967288 > i3), e6.Sb = i3, e6.Ra = 0, e6.u = 0, e6.h = 0, 4 < i3 && (i3 = 4), a3 = 0; a3 < i3; ++a3) o3 += n3[r3 + a3] << 8 * a3;
      e6.Ra = o3, e6.bb = i3, e6.oa = n3, e6.pa = r3;
    }
    function v2(e6) {
      for (; 8 <= e6.u && e6.bb < e6.Sb; ) e6.Ra >>>= 8, e6.Ra += e6.oa[e6.pa + e6.bb] << Gn2 - 8 >>> 0, ++e6.bb, e6.u -= 8;
      C3(e6) && (e6.h = 1, e6.u = 0);
    }
    function y2(e6, n3) {
      if (t(0 <= n3), !e6.h && n3 <= Wn2) {
        var r3 = S3(e6) & Un2[n3];
        return e6.u += n3, v2(e6), r3;
      }
      return e6.h = 1, e6.u = 0;
    }
    function b3() {
      this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
    }
    function x3() {
      this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
    }
    function S3(e6) {
      return e6.Ra >>> (e6.u & Gn2 - 1) >>> 0;
    }
    function C3(e6) {
      return t(e6.bb <= e6.Sb), e6.h || e6.bb == e6.Sb && e6.u > Gn2;
    }
    function w3(e6, t2) {
      e6.u = t2, e6.h = C3(e6);
    }
    function T2(e6) {
      e6.u >= Kn2 && (t(e6.u >= Kn2), v2(e6));
    }
    function E2(e6) {
      t(e6 != null && e6.oa != null), e6.pa < e6.Zc ? (e6.I = (e6.oa[e6.pa++] | e6.I << 8) >>> 0, e6.b += 8) : (t(e6 != null && e6.oa != null), e6.pa < e6.Yc ? (e6.b += 8, e6.I = e6.oa[e6.pa++] | e6.I << 8) : e6.Ka ? e6.b = 0 : (e6.I <<= 8, e6.b += 8, e6.Ka = 1));
    }
    function D2(e6) {
      return h2(e6, 1);
    }
    function O2(e6, t2) {
      var n3 = e6.Ca;
      0 > e6.b && E2(e6);
      var r3 = e6.b, i3 = n3 * t2 >>> 8, a3 = (e6.I >>> r3 > i3) + 0;
      for (a3 ? (n3 -= i3, e6.I -= i3 + 1 << r3 >>> 0) : n3 = i3 + 1, r3 = n3, i3 = 0; 256 <= r3; ) i3 += 8, r3 >>= 8;
      return r3 = 7 ^ i3 + qn2[r3], e6.b -= r3, e6.Ca = (n3 << r3) - 1, a3;
    }
    function k2(e6, t2, n3) {
      e6[t2 + 0] = n3 >> 24 & 255, e6[t2 + 1] = n3 >> 16 & 255, e6[t2 + 2] = n3 >> 8 & 255, e6[t2 + 3] = 255 & n3;
    }
    function A2(e6, t2) {
      return e6[t2 + 0] | e6[t2 + 1] << 8;
    }
    function j2(e6, t2) {
      return A2(e6, t2) | e6[t2 + 2] << 16;
    }
    function M2(e6, t2) {
      return A2(e6, t2) | A2(e6, t2 + 2) << 16;
    }
    function N2(e6, n3) {
      var r3 = 1 << n3;
      return t(e6 != null), t(0 < n3), e6.X = a2(r3), e6.X == null ? 0 : (e6.Mb = 32 - n3, e6.Xa = n3, 1);
    }
    function P2(e6, n3) {
      t(e6 != null), t(n3 != null), t(e6.Xa == n3.Xa), r2(n3.X, 0, e6.X, 0, 1 << n3.Xa);
    }
    function F2() {
      this.X = [], this.Xa = this.Mb = 0;
    }
    function I2(e6, n3, r3, i3) {
      t(r3 != null), t(i3 != null);
      var a3 = r3[0], o3 = i3[0];
      return a3 == 0 && (a3 = (e6 * o3 + n3 / 2) / n3), o3 == 0 && (o3 = (n3 * a3 + e6 / 2) / e6), 0 >= a3 || 0 >= o3 ? 0 : (r3[0] = a3, i3[0] = o3, 1);
    }
    function L2(e6, t2) {
      return e6 + (1 << t2) - 1 >>> t2;
    }
    function R2(e6, t2) {
      return ((4278255360 & e6) + (4278255360 & t2) >>> 0 & 4278255360) + ((16711935 & e6) + (16711935 & t2) >>> 0 & 16711935) >>> 0;
    }
    function z2(t2, n3) {
      e5[n3] = function(n4, r3, i3, a3, o3, s3, c5) {
        var l4;
        for (l4 = 0; l4 < o3; ++l4) {
          var u4 = e5[t2](s3[c5 + l4 - 1], i3, a3 + l4);
          s3[c5 + l4] = R2(n4[r3 + l4], u4);
        }
      };
    }
    function B2() {
      this.ud = this.hd = this.jd = 0;
    }
    function V2(e6, t2) {
      return ((4278124286 & (e6 ^ t2)) >>> 1) + (e6 & t2) >>> 0;
    }
    function ee2(e6) {
      return 0 <= e6 && 256 > e6 ? e6 : 0 > e6 ? 0 : 255 < e6 ? 255 : void 0;
    }
    function H2(e6, t2) {
      return ee2(e6 + (e6 - t2 + 0.5 >> 1));
    }
    function te2(e6, t2, n3) {
      return Math.abs(t2 - n3) - Math.abs(e6 - n3);
    }
    function U2(e6, t2, n3, r3, i3, a3, o3) {
      for (r3 = a3[o3 - 1], n3 = 0; n3 < i3; ++n3) a3[o3 + n3] = r3 = R2(e6[t2 + n3], r3);
    }
    function ne2(e6, t2, n3, r3, i3) {
      var a3;
      for (a3 = 0; a3 < n3; ++a3) {
        var o3 = e6[t2 + a3], s3 = o3 >> 8 & 255, c5 = 16711935 & (c5 = (c5 = 16711935 & o3) + ((s3 << 16) + s3));
        r3[i3 + a3] = (4278255360 & o3) + c5 >>> 0;
      }
    }
    function re2(e6, t2) {
      t2.jd = 255 & e6, t2.hd = e6 >> 8 & 255, t2.ud = e6 >> 16 & 255;
    }
    function ie2(e6, t2, n3, r3, i3, a3) {
      var o3;
      for (o3 = 0; o3 < r3; ++o3) {
        var s3 = t2[n3 + o3], c5 = s3 >>> 8, l4 = s3, u4 = 255 & (u4 = (u4 = s3 >>> 16) + ((e6.jd << 24 >> 24) * (c5 << 24 >> 24) >>> 5));
        l4 = 255 & (l4 = (l4 += (e6.hd << 24 >> 24) * (c5 << 24 >> 24) >>> 5) + ((e6.ud << 24 >> 24) * (u4 << 24 >> 24) >>> 5)), i3[a3 + o3] = (4278255360 & s3) + (u4 << 16) + l4;
      }
    }
    function ae2(t2, n3, r3, i3, a3) {
      e5[n3] = function(e6, t3, n4, r4, o3, s3, c5, l4, u4) {
        for (r4 = c5; r4 < l4; ++r4) for (c5 = 0; c5 < u4; ++c5) o3[s3++] = a3(n4[i3(e6[t3++])]);
      }, e5[t2] = function(t3, n4, o3, s3, c5, l4, u4) {
        var d4 = 8 >> t3.b, f4 = t3.Ea, p3 = t3.K[0], m3 = t3.w;
        if (8 > d4) for (t3 = (1 << t3.b) - 1, m3 = (1 << d4) - 1; n4 < o3; ++n4) {
          var h3, g3 = 0;
          for (h3 = 0; h3 < f4; ++h3) h3 & t3 || (g3 = i3(s3[c5++])), l4[u4++] = a3(p3[g3 & m3]), g3 >>= d4;
        }
        else e5["VP8LMapColor" + r3](s3, c5, p3, m3, l4, u4, n4, o3, f4);
      };
    }
    function oe2(e6, t2, n3, r3, i3) {
      for (n3 = t2 + n3; t2 < n3; ) {
        var a3 = e6[t2++];
        r3[i3++] = a3 >> 16 & 255, r3[i3++] = a3 >> 8 & 255, r3[i3++] = 255 & a3;
      }
    }
    function se2(e6, t2, n3, r3, i3) {
      for (n3 = t2 + n3; t2 < n3; ) {
        var a3 = e6[t2++];
        r3[i3++] = a3 >> 16 & 255, r3[i3++] = a3 >> 8 & 255, r3[i3++] = 255 & a3, r3[i3++] = a3 >> 24 & 255;
      }
    }
    function W2(e6, t2, n3, r3, i3) {
      for (n3 = t2 + n3; t2 < n3; ) {
        var a3 = (o3 = e6[t2++]) >> 16 & 240 | o3 >> 12 & 15, o3 = 240 & o3 | o3 >> 28 & 15;
        r3[i3++] = a3, r3[i3++] = o3;
      }
    }
    function ce2(e6, t2, n3, r3, i3) {
      for (n3 = t2 + n3; t2 < n3; ) {
        var a3 = (o3 = e6[t2++]) >> 16 & 248 | o3 >> 13 & 7, o3 = o3 >> 5 & 224 | o3 >> 3 & 31;
        r3[i3++] = a3, r3[i3++] = o3;
      }
    }
    function le2(e6, t2, n3, r3, i3) {
      for (n3 = t2 + n3; t2 < n3; ) {
        var a3 = e6[t2++];
        r3[i3++] = 255 & a3, r3[i3++] = a3 >> 8 & 255, r3[i3++] = a3 >> 16 & 255;
      }
    }
    function ue2(e6, t2, n3, i3, a3, o3) {
      if (o3 == 0) for (n3 = t2 + n3; t2 < n3; ) k2(i3, ((o3 = e6[t2++])[0] >> 24 | o3[1] >> 8 & 65280 | o3[2] << 8 & 16711680 | o3[3] << 24) >>> 0), a3 += 32;
      else r2(i3, a3, e6, t2, n3);
    }
    function de2(t2, n3) {
      e5[n3][0] = e5[t2 + "0"], e5[n3][1] = e5[t2 + "1"], e5[n3][2] = e5[t2 + "2"], e5[n3][3] = e5[t2 + "3"], e5[n3][4] = e5[t2 + "4"], e5[n3][5] = e5[t2 + "5"], e5[n3][6] = e5[t2 + "6"], e5[n3][7] = e5[t2 + "7"], e5[n3][8] = e5[t2 + "8"], e5[n3][9] = e5[t2 + "9"], e5[n3][10] = e5[t2 + "10"], e5[n3][11] = e5[t2 + "11"], e5[n3][12] = e5[t2 + "12"], e5[n3][13] = e5[t2 + "13"], e5[n3][14] = e5[t2 + "0"], e5[n3][15] = e5[t2 + "0"];
    }
    function fe2(e6) {
      return e6 == Kr2 || e6 == qr2 || e6 == Jr2 || e6 == Yr2;
    }
    function pe2() {
      this.eb = [], this.size = this.A = this.fb = 0;
    }
    function me2() {
      this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
    }
    function he2() {
      this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new pe2(), this.f.kb = new me2(), this.sd = null;
    }
    function ge2() {
      this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0];
    }
    function _e2() {
      this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
    }
    function ve2(e6) {
      return alert("todo:WebPSamplerProcessPlane"), e6.T;
    }
    function ye2(e6, t2) {
      var n3 = e6.T, i3 = t2.ba.f.RGBA, a3 = i3.eb, o3 = i3.fb + e6.ka * i3.A, s3 = bi2[t2.ba.S], c5 = e6.y, l4 = e6.O, u4 = e6.f, d4 = e6.N, f4 = e6.ea, p3 = e6.W, m3 = t2.cc, h3 = t2.dc, g3 = t2.Mc, _3 = t2.Nc, v3 = e6.ka, y3 = e6.ka + e6.T, b4 = e6.U, x4 = b4 + 1 >> 1;
      for (v3 == 0 ? s3(c5, l4, null, null, u4, d4, f4, p3, u4, d4, f4, p3, a3, o3, null, null, b4) : (s3(t2.ec, t2.fc, c5, l4, m3, h3, g3, _3, u4, d4, f4, p3, a3, o3 - i3.A, a3, o3, b4), ++n3); v3 + 2 < y3; v3 += 2) m3 = u4, h3 = d4, g3 = f4, _3 = p3, d4 += e6.Rc, p3 += e6.Rc, o3 += 2 * i3.A, s3(c5, (l4 += 2 * e6.fa) - e6.fa, c5, l4, m3, h3, g3, _3, u4, d4, f4, p3, a3, o3 - i3.A, a3, o3, b4);
      return l4 += e6.fa, e6.j + y3 < e6.o ? (r2(t2.ec, t2.fc, c5, l4, b4), r2(t2.cc, t2.dc, u4, d4, x4), r2(t2.Mc, t2.Nc, f4, p3, x4), n3--) : 1 & y3 || s3(c5, l4, null, null, u4, d4, f4, p3, u4, d4, f4, p3, a3, o3 + i3.A, null, null, b4), n3;
    }
    function be2(e6, n3, r3) {
      var i3 = e6.F, a3 = [e6.J];
      if (i3 != null) {
        var o3 = e6.U, s3 = n3.ba.S, c5 = s3 == Ur2 || s3 == Jr2;
        n3 = n3.ba.f.RGBA;
        var l4 = [0], u4 = e6.ka;
        l4[0] = e6.T, e6.Kb && (u4 == 0 ? --l4[0] : (--u4, a3[0] -= e6.width), e6.j + e6.ka + e6.T == e6.o && (l4[0] = e6.o - e6.j - u4));
        var d4 = n3.eb;
        u4 = n3.fb + u4 * n3.A, e6 = Or2(i3, a3[0], e6.width, o3, l4, d4, u4 + (c5 ? 0 : 3), n3.A), t(r3 == l4), e6 && fe2(s3) && Er2(d4, u4, c5, o3, l4, n3.A);
      }
      return 0;
    }
    function xe2(e6) {
      var t2 = e6.ma, n3 = t2.ba.S, r3 = 11 > n3, i3 = n3 == Br2 || n3 == Hr2 || n3 == Ur2 || n3 == Wr2 || n3 == 12 || fe2(n3);
      if (t2.memory = null, t2.Ib = null, t2.Jb = null, t2.Nd = null, !zn2(t2.Oa, e6, i3 ? 11 : 12)) return 0;
      if (i3 && fe2(n3) && Sn2(), e6.da) alert("todo:use_scaling");
      else {
        if (r3) {
          if (t2.Ib = ve2, e6.Kb) {
            if (n3 = e6.U + 1 >> 1, t2.memory = a2(e6.U + 2 * n3), t2.memory == null) return 0;
            t2.ec = t2.memory, t2.fc = 0, t2.cc = t2.ec, t2.dc = t2.fc + e6.U, t2.Mc = t2.cc, t2.Nc = t2.dc + n3, t2.Ib = ye2, Sn2();
          }
        } else alert("todo:EmitYUV");
        i3 && (t2.Jb = be2, r3 && Y2());
      }
      if (r3 && !Pi2) {
        for (e6 = 0; 256 > e6; ++e6) Fi2[e6] = 89858 * (e6 - 128) + ki2 >> Oi2, Ri2[e6] = -22014 * (e6 - 128) + ki2, Li2[e6] = -45773 * (e6 - 128), Ii2[e6] = 113618 * (e6 - 128) + ki2 >> Oi2;
        for (e6 = Ai2; e6 < ji2; ++e6) t2 = 76283 * (e6 - 16) + ki2 >> Oi2, zi2[e6 - Ai2] = Qe2(t2, 255), Bi2[e6 - Ai2] = Qe2(t2 + 8 >> 4, 15);
        Pi2 = 1;
      }
      return 1;
    }
    function Se2(e6) {
      var n3 = e6.ma, r3 = e6.U, i3 = e6.T;
      return t(!(1 & e6.ka)), 0 >= r3 || 0 >= i3 ? 0 : (r3 = n3.Ib(e6, n3), n3.Jb != null && n3.Jb(e6, n3, r3), n3.Dc += r3, 1);
    }
    function Ce2(e6) {
      e6.ma.memory = null;
    }
    function we2(e6, t2, n3, r3) {
      return y2(e6, 8) == 47 ? (t2[0] = y2(e6, 14) + 1, n3[0] = y2(e6, 14) + 1, r3[0] = y2(e6, 1), y2(e6, 3) == 0 ? !e6.h : 0) : 0;
    }
    function Te2(e6, t2) {
      if (4 > e6) return e6 + 1;
      var n3 = e6 - 2 >> 1;
      return (2 + (1 & e6) << n3) + y2(t2, n3) + 1;
    }
    function Ee2(e6, t2) {
      return 120 < t2 ? t2 - 120 : 1 <= (n3 = ((n3 = ti2[t2 - 1]) >> 4) * e6 + (8 - (15 & n3))) ? n3 : 1;
      var n3;
    }
    function De2(e6, t2, n3) {
      var r3 = S3(n3), i3 = e6[t2 += 255 & r3].g - 8;
      return 0 < i3 && (w3(n3, n3.u + 8), r3 = S3(n3), t2 += e6[t2].value, t2 += r3 & (1 << i3) - 1), w3(n3, n3.u + e6[t2].g), e6[t2].value;
    }
    function Oe2(e6, n3, r3) {
      return r3.g += e6.g, r3.value += e6.value << n3 >>> 0, t(8 >= r3.g), e6.g;
    }
    function ke2(e6, n3, r3) {
      var i3 = e6.xc;
      return t((n3 = i3 == 0 ? 0 : e6.vc[e6.md * (r3 >> i3) + (n3 >> i3)]) < e6.Wb), e6.Ya[n3];
    }
    function Ae2(e6, n3, i3, a3) {
      var o3 = e6.ab, s3 = e6.c * n3, c5 = e6.C;
      n3 = c5 + n3;
      var l4 = i3, u4 = a3;
      for (a3 = e6.Ta, i3 = e6.Ua; 0 < o3--; ) {
        var d4 = e6.gc[o3], f4 = c5, p3 = n3, m3 = l4, h3 = u4, g3 = (u4 = a3, l4 = i3, d4.Ea);
        switch (t(f4 < p3), t(p3 <= d4.nc), d4.hc) {
          case 2:
            Xn2(m3, h3, (p3 - f4) * g3, u4, l4);
            break;
          case 0:
            var _3 = f4, v3 = p3, y3 = u4, b4 = l4, x4 = (E3 = d4).Ea;
            _3 == 0 && (Jn2(m3, h3, null, null, 1, y3, b4), U2(m3, h3 + 1, 0, 0, x4 - 1, y3, b4 + 1), h3 += x4, b4 += x4, ++_3);
            for (var S4 = 1 << E3.b, C4 = S4 - 1, w4 = L2(x4, E3.b), T3 = E3.K, E3 = E3.w + (_3 >> E3.b) * w4; _3 < v3; ) {
              var D3 = T3, O3 = E3, k3 = 1;
              for (Yn2(m3, h3, y3, b4 - x4, 1, y3, b4); k3 < x4; ) {
                var A3 = (k3 & ~C4) + S4;
                A3 > x4 && (A3 = x4), (0, tr2[D3[O3++] >> 8 & 15])(m3, h3 + +k3, y3, b4 + k3 - x4, A3 - k3, y3, b4 + k3), k3 = A3;
              }
              h3 += x4, b4 += x4, ++_3 & C4 || (E3 += w4);
            }
            p3 != d4.nc && r2(u4, l4 - g3, u4, l4 + (p3 - f4 - 1) * g3, g3);
            break;
          case 1:
            for (g3 = m3, v3 = h3, x4 = (m3 = d4.Ea) - (b4 = m3 & ~(y3 = (h3 = 1 << d4.b) - 1)), _3 = L2(m3, d4.b), S4 = d4.K, d4 = d4.w + (f4 >> d4.b) * _3; f4 < p3; ) {
              for (C4 = S4, w4 = d4, T3 = new B2(), E3 = v3 + b4, D3 = v3 + m3; v3 < E3; ) re2(C4[w4++], T3), nr2(T3, g3, v3, h3, u4, l4), v3 += h3, l4 += h3;
              v3 < D3 && (re2(C4[w4++], T3), nr2(T3, g3, v3, x4, u4, l4), v3 += x4, l4 += x4), ++f4 & y3 || (d4 += _3);
            }
            break;
          case 3:
            if (m3 == u4 && h3 == l4 && 0 < d4.b) {
              for (v3 = u4, m3 = g3 = l4 + (p3 - f4) * g3 - (b4 = (p3 - f4) * L2(d4.Ea, d4.b)), h3 = u4, y3 = l4, _3 = [], b4 = (x4 = b4) - 1; 0 <= b4; --b4) _3[b4] = h3[y3 + b4];
              for (b4 = x4 - 1; 0 <= b4; --b4) v3[m3 + b4] = _3[b4];
              Zn2(d4, f4, p3, u4, g3, u4, l4);
            } else Zn2(d4, f4, p3, m3, h3, u4, l4);
        }
        l4 = a3, u4 = i3;
      }
      u4 != i3 && r2(a3, i3, l4, u4, s3);
    }
    function je2(e6, n3) {
      var r3 = e6.V, i3 = e6.Ba + e6.c * e6.C, a3 = n3 - e6.C;
      if (t(n3 <= e6.l.o), t(16 >= a3), 0 < a3) {
        var o3 = e6.l, s3 = e6.Ta, c5 = e6.Ua, l4 = o3.width;
        if (Ae2(e6, a3, r3, i3), a3 = c5 = [c5], t((r3 = e6.C) < (i3 = n3)), t(o3.v < o3.va), i3 > o3.o && (i3 = o3.o), r3 < o3.j) {
          var u4 = o3.j - r3;
          r3 = o3.j, a3[0] += u4 * l4;
        }
        if (r3 >= i3 ? r3 = 0 : (a3[0] += 4 * o3.v, o3.ka = r3 - o3.j, o3.U = o3.va - o3.v, o3.T = i3 - r3, r3 = 1), r3) {
          if (c5 = c5[0], 11 > (r3 = e6.ca).S) {
            var d4 = r3.f.RGBA, f4 = (i3 = r3.S, a3 = o3.U, o3 = o3.T, u4 = d4.eb, d4.A), p3 = o3;
            for (d4 = d4.fb + e6.Ma * d4.A; 0 < p3--; ) {
              var m3 = s3, h3 = c5, g3 = a3, _3 = u4, v3 = d4;
              switch (i3) {
                case zr2:
                  rr2(m3, h3, g3, _3, v3);
                  break;
                case Br2:
                  ir2(m3, h3, g3, _3, v3);
                  break;
                case Kr2:
                  ir2(m3, h3, g3, _3, v3), Er2(_3, v3, 0, g3, 1, 0);
                  break;
                case Vr2:
                  sr2(m3, h3, g3, _3, v3);
                  break;
                case Hr2:
                  ue2(m3, h3, g3, _3, v3, 1);
                  break;
                case qr2:
                  ue2(m3, h3, g3, _3, v3, 1), Er2(_3, v3, 0, g3, 1, 0);
                  break;
                case Ur2:
                  ue2(m3, h3, g3, _3, v3, 0);
                  break;
                case Jr2:
                  ue2(m3, h3, g3, _3, v3, 0), Er2(_3, v3, 1, g3, 1, 0);
                  break;
                case Wr2:
                  ar2(m3, h3, g3, _3, v3);
                  break;
                case Yr2:
                  ar2(m3, h3, g3, _3, v3), Dr2(_3, v3, g3, 1, 0);
                  break;
                case Gr2:
                  or2(m3, h3, g3, _3, v3);
                  break;
                default:
                  t(0);
              }
              c5 += l4, d4 += f4;
            }
            e6.Ma += o3;
          } else alert("todo:EmitRescaledRowsYUVA");
          t(e6.Ma <= r3.height);
        }
      }
      e6.C = n3, t(e6.C <= e6.i);
    }
    function Me2(e6) {
      var t2;
      if (0 < e6.ua) return 0;
      for (t2 = 0; t2 < e6.Wb; ++t2) {
        var n3 = e6.Ya[t2].G, r3 = e6.Ya[t2].H;
        if (0 < n3[1][r3[1] + 0].g || 0 < n3[2][r3[2] + 0].g || 0 < n3[3][r3[3] + 0].g) return 0;
      }
      return 1;
    }
    function Ne2(e6, n3, r3, i3, a3, o3) {
      if (e6.Z != 0) {
        var s3 = e6.qd, c5 = e6.rd;
        for (t(yi2[e6.Z] != null); n3 < r3; ++n3) yi2[e6.Z](s3, c5, i3, a3, i3, a3, o3), s3 = i3, c5 = a3, a3 += o3;
        e6.qd = s3, e6.rd = c5;
      }
    }
    function Pe2(e6, n3) {
      var r3 = e6.l.ma, i3 = r3.Z == 0 || r3.Z == 1 ? e6.l.j : e6.C;
      if (i3 = e6.C < i3 ? i3 : e6.C, t(n3 <= e6.l.o), n3 > i3) {
        var a3 = e6.l.width, o3 = r3.ca, s3 = r3.tb + a3 * i3, c5 = e6.V, l4 = e6.Ba + e6.c * i3, u4 = e6.gc;
        t(e6.ab == 1), t(u4[0].hc == 3), $n2(u4[0], i3, n3, c5, l4, o3, s3), Ne2(r3, i3, n3, o3, s3, a3);
      }
      e6.C = e6.Ma = n3;
    }
    function G2(e6, n3, r3, i3, a3, o3, s3) {
      var c5 = e6.$ / i3, l4 = e6.$ % i3, u4 = e6.m, d4 = e6.s, f4 = r3 + e6.$, p3 = f4;
      a3 = r3 + i3 * a3;
      var m3 = r3 + i3 * o3, h3 = 280 + d4.ua, g3 = e6.Pb ? c5 : 16777216, _3 = 0 < d4.ua ? d4.Wa : null, v3 = d4.wc, y3 = f4 < m3 ? ke2(d4, l4, c5) : null;
      t(e6.C < o3), t(m3 <= a3);
      var b4 = false;
      t: for (; ; ) {
        for (; b4 || f4 < m3; ) {
          var x4 = 0;
          if (c5 >= g3) {
            var E3 = f4 - r3;
            t((g3 = e6).Pb), g3.wd = g3.m, g3.xd = E3, 0 < g3.s.ua && P2(g3.s.Wa, g3.s.vb), g3 = c5 + ri2;
          }
          if (l4 & v3 || (y3 = ke2(d4, l4, c5)), t(y3 != null), y3.Qb && (n3[f4] = y3.qb, b4 = true), !b4) if (T2(u4), y3.jc) {
            x4 = u4, E3 = n3;
            var D3 = f4, O3 = y3.pd[S3(x4) & Hn2 - 1];
            t(y3.jc), 256 > O3.g ? (w3(x4, x4.u + O3.g), E3[D3] = O3.value, x4 = 0) : (w3(x4, x4.u + O3.g - 256), t(256 <= O3.value), x4 = O3.value), x4 == 0 && (b4 = true);
          } else x4 = De2(y3.G[0], y3.H[0], u4);
          if (u4.h) break;
          if (b4 || 256 > x4) {
            if (!b4) if (y3.nd) n3[f4] = (y3.qb | x4 << 8) >>> 0;
            else {
              if (T2(u4), b4 = De2(y3.G[1], y3.H[1], u4), T2(u4), E3 = De2(y3.G[2], y3.H[2], u4), D3 = De2(y3.G[3], y3.H[3], u4), u4.h) break;
              n3[f4] = (D3 << 24 | b4 << 16 | x4 << 8 | E3) >>> 0;
            }
            if (b4 = false, ++f4, ++l4 >= i3 && (l4 = 0, ++c5, s3 != null && c5 <= o3 && !(c5 % 16) && s3(e6, c5), _3 != null)) for (; p3 < f4; ) x4 = n3[p3++], _3.X[(506832829 * x4 & 4294967295) >>> _3.Mb] = x4;
          } else if (280 > x4) {
            if (x4 = Te2(x4 - 256, u4), E3 = De2(y3.G[4], y3.H[4], u4), T2(u4), E3 = Ee2(i3, E3 = Te2(E3, u4)), u4.h) break;
            if (f4 - r3 < E3 || a3 - f4 < x4) break t;
            for (D3 = 0; D3 < x4; ++D3) n3[f4 + D3] = n3[f4 + D3 - E3];
            for (f4 += x4, l4 += x4; l4 >= i3; ) l4 -= i3, ++c5, s3 != null && c5 <= o3 && !(c5 % 16) && s3(e6, c5);
            if (t(f4 <= a3), l4 & v3 && (y3 = ke2(d4, l4, c5)), _3 != null) for (; p3 < f4; ) x4 = n3[p3++], _3.X[(506832829 * x4 & 4294967295) >>> _3.Mb] = x4;
          } else {
            if (!(x4 < h3)) break t;
            for (b4 = x4 - 280, t(_3 != null); p3 < f4; ) x4 = n3[p3++], _3.X[(506832829 * x4 & 4294967295) >>> _3.Mb] = x4;
            x4 = f4, t(!(b4 >>> (E3 = _3).Xa)), n3[x4] = E3.X[b4], b4 = true;
          }
          b4 || t(u4.h == C3(u4));
        }
        if (e6.Pb && u4.h && f4 < a3) t(e6.m.h), e6.a = 5, e6.m = e6.wd, e6.$ = e6.xd, 0 < e6.s.ua && P2(e6.s.vb, e6.s.Wa);
        else {
          if (u4.h) break t;
          s3 == null ? void 0 : s3(e6, c5 > o3 ? o3 : c5), e6.a = 0, e6.$ = f4 - r3;
        }
        return 1;
      }
      return e6.a = 3, 0;
    }
    function Fe2(e6) {
      t(e6 != null), e6.vc = null, e6.yc = null, e6.Ya = null;
      var n3 = e6.Wa;
      n3 != null && (n3.X = null), e6.vb = null, t(e6 != null);
    }
    function Ie2() {
      var t2 = new dn2();
      return t2 == null ? null : (t2.a = 0, t2.xb = vi2, de2("Predictor", "VP8LPredictors"), de2("Predictor", "VP8LPredictors_C"), de2("PredictorAdd", "VP8LPredictorsAdd"), de2("PredictorAdd", "VP8LPredictorsAdd_C"), Xn2 = ne2, nr2 = ie2, rr2 = oe2, ir2 = se2, ar2 = W2, or2 = ce2, sr2 = le2, e5.VP8LMapColor32b = Qn2, e5.VP8LMapColor8b = er2, t2);
    }
    function Le2(e6, n3, r3, s3, c5) {
      var l4 = 1, f4 = [e6], m3 = [n3], h3 = s3.m, g3 = s3.s, _3 = null, v3 = 0;
      t: for (; ; ) {
        if (r3) for (; l4 && y2(h3, 1); ) {
          var b4 = f4, x4 = m3, C4 = s3, E3 = 1, D3 = C4.m, O3 = C4.gc[C4.ab], k3 = y2(D3, 2);
          if (C4.Oc & 1 << k3) l4 = 0;
          else {
            switch (C4.Oc |= 1 << k3, O3.hc = k3, O3.Ea = b4[0], O3.nc = x4[0], O3.K = [null], ++C4.ab, t(4 >= C4.ab), k3) {
              case 0:
              case 1:
                O3.b = y2(D3, 3) + 2, E3 = Le2(L2(O3.Ea, O3.b), L2(O3.nc, O3.b), 0, C4, O3.K), O3.K = O3.K[0];
                break;
              case 3:
                var A3, j3 = y2(D3, 8) + 1, M3 = 16 < j3 ? 0 : 4 < j3 ? 1 : 2 < j3 ? 2 : 3;
                if (b4[0] = L2(O3.Ea, M3), O3.b = M3, A3 = E3 = Le2(j3, 1, 0, C4, O3.K)) {
                  var P3, F3 = j3, I3 = O3, z3 = 1 << (8 >> I3.b), B3 = a2(z3);
                  if (B3 == null) A3 = 0;
                  else {
                    var V3 = I3.K[0], ee3 = I3.w;
                    for (B3[0] = I3.K[0][0], P3 = 1; P3 < 1 * F3; ++P3) B3[P3] = R2(V3[ee3 + P3], B3[P3 - 1]);
                    for (; P3 < 4 * z3; ++P3) B3[P3] = 0;
                    I3.K[0] = null, I3.K[0] = B3, A3 = 1;
                  }
                }
                E3 = A3;
                break;
              case 2:
                break;
              default:
                t(0);
            }
            l4 = E3;
          }
        }
        if (f4 = f4[0], m3 = m3[0], l4 && y2(h3, 1) && !(l4 = 1 <= (v3 = y2(h3, 4)) && 11 >= v3)) {
          s3.a = 3;
          break t;
        }
        var H3;
        if (H3 = l4) e: {
          var te3, U3, ne3, re3 = s3, ie3 = f4, ae3 = m3, oe3 = v3, se3 = r3, W3 = re3.m, ce3 = re3.s, le3 = [null], ue3 = 1, de3 = 0, fe3 = ni2[oe3];
          r: for (; ; ) {
            if (se3 && y2(W3, 1)) {
              var pe3 = y2(W3, 3) + 2, me3 = L2(ie3, pe3), he3 = L2(ae3, pe3), ge3 = me3 * he3;
              if (!Le2(me3, he3, 0, re3, le3)) break r;
              for (le3 = le3[0], ce3.xc = pe3, te3 = 0; te3 < ge3; ++te3) {
                var _e3 = le3[te3] >> 8 & 65535;
                le3[te3] = _e3, _e3 >= ue3 && (ue3 = _e3 + 1);
              }
            }
            if (W3.h) break r;
            for (U3 = 0; 5 > U3; ++U3) {
              var ve3 = Qr2[U3];
              !U3 && 0 < oe3 && (ve3 += 1 << oe3), de3 < ve3 && (de3 = ve3);
            }
            var ye3 = o2(ue3 * fe3, d3), be3 = ue3, xe3 = o2(be3, p2);
            if (xe3 == null) var Se3 = null;
            else t(65536 >= be3), Se3 = xe3;
            var Ce3 = a2(de3);
            if (Se3 == null || Ce3 == null || ye3 == null) {
              re3.a = 1;
              break r;
            }
            var we3 = ye3;
            for (te3 = ne3 = 0; te3 < ue3; ++te3) {
              var Te3 = Se3[te3], Ee3 = Te3.G, De3 = Te3.H, ke3 = 0, Ae3 = 1, je3 = 0;
              for (U3 = 0; 5 > U3; ++U3) {
                ve3 = Qr2[U3], Ee3[U3] = we3, De3[U3] = ne3, !U3 && 0 < oe3 && (ve3 += 1 << oe3);
                n: {
                  var Me3, Ne3 = ve3, Pe3 = re3, Ie3 = Ce3, Re3 = we3, ze3 = ne3, K3 = 0, Be3 = Pe3.m, Ve3 = y2(Be3, 1);
                  if (i2(Ie3, 0, 0, Ne3), Ve3) {
                    var He3 = y2(Be3, 1) + 1, Ue3 = y2(Be3, y2(Be3, 1) == 0 ? 1 : 8);
                    Ie3[Ue3] = 1, He3 == 2 && (Ie3[Ue3 = y2(Be3, 8)] = 1);
                    var We3 = 1;
                  } else {
                    var Ge3 = a2(19), Ke3 = y2(Be3, 4) + 4;
                    if (19 < Ke3) {
                      Pe3.a = 3;
                      var qe3 = 0;
                      break n;
                    }
                    for (Me3 = 0; Me3 < Ke3; ++Me3) Ge3[ei2[Me3]] = y2(Be3, 3);
                    var Je3 = void 0, Ye3 = void 0, Xe3 = Pe3, Ze3 = Ge3, Qe3 = Ne3, $e3 = Ie3, et3 = 0, tt3 = Xe3.m, nt3 = 8, rt3 = o2(128, d3);
                    i: for (; u3(rt3, 0, 7, Ze3, 19); ) {
                      if (y2(tt3, 1)) {
                        if ((Je3 = 2 + y2(tt3, 2 + 2 * y2(tt3, 3))) > Qe3) break i;
                      } else Je3 = Qe3;
                      for (Ye3 = 0; Ye3 < Qe3 && Je3--; ) {
                        T2(tt3);
                        var it3 = rt3[0 + (127 & S3(tt3))];
                        w3(tt3, tt3.u + it3.g);
                        var at3 = it3.value;
                        if (16 > at3) $e3[Ye3++] = at3, at3 != 0 && (nt3 = at3);
                        else {
                          var ot3 = at3 == 16, st3 = at3 - 16, ct3 = Zr2[st3], lt3 = y2(tt3, Xr2[st3]) + ct3;
                          if (Ye3 + lt3 > Qe3) break i;
                          for (var ut3 = ot3 ? nt3 : 0; 0 < lt3--; ) $e3[Ye3++] = ut3;
                        }
                      }
                      et3 = 1;
                      break i;
                    }
                    et3 || (Xe3.a = 3), We3 = et3;
                  }
                  We3 && (We3 = !Be3.h) && (K3 = u3(Re3, ze3, 8, Ie3, Ne3)), We3 && K3 != 0 ? qe3 = K3 : (Pe3.a = 3, qe3 = 0);
                }
                if (qe3 == 0) break r;
                if (Ae3 && $r2[U3] == 1 && (Ae3 = we3[ne3].g == 0), ke3 += we3[ne3].g, ne3 += qe3, 3 >= U3) {
                  var dt3, ft3 = Ce3[0];
                  for (dt3 = 1; dt3 < ve3; ++dt3) Ce3[dt3] > ft3 && (ft3 = Ce3[dt3]);
                  je3 += ft3;
                }
              }
              if (Te3.nd = Ae3, Te3.Qb = 0, Ae3 && (Te3.qb = (Ee3[3][De3[3] + 0].value << 24 | Ee3[1][De3[1] + 0].value << 16 | Ee3[2][De3[2] + 0].value) >>> 0, ke3 == 0 && 256 > Ee3[0][De3[0] + 0].value && (Te3.Qb = 1, Te3.qb += Ee3[0][De3[0] + 0].value << 8)), Te3.jc = !Te3.Qb && 6 > je3, Te3.jc) {
                var pt3, mt3 = Te3;
                for (pt3 = 0; pt3 < Hn2; ++pt3) {
                  var ht3 = pt3, gt3 = mt3.pd[ht3], _t3 = mt3.G[0][mt3.H[0] + ht3];
                  256 <= _t3.value ? (gt3.g = _t3.g + 256, gt3.value = _t3.value) : (gt3.g = 0, gt3.value = 0, ht3 >>= Oe2(_t3, 8, gt3), ht3 >>= Oe2(mt3.G[1][mt3.H[1] + ht3], 16, gt3), ht3 >>= Oe2(mt3.G[2][mt3.H[2] + ht3], 0, gt3), Oe2(mt3.G[3][mt3.H[3] + ht3], 24, gt3));
                }
              }
            }
            ce3.vc = le3, ce3.Wb = ue3, ce3.Ya = Se3, ce3.yc = ye3, H3 = 1;
            break e;
          }
          H3 = 0;
        }
        if (!(l4 = H3)) {
          s3.a = 3;
          break t;
        }
        if (0 < v3) {
          if (g3.ua = 1 << v3, !N2(g3.Wa, v3)) {
            s3.a = 1, l4 = 0;
            break t;
          }
        } else g3.ua = 0;
        var vt3 = s3, yt3 = f4, bt3 = m3, xt3 = vt3.s, St3 = xt3.xc;
        if (vt3.c = yt3, vt3.i = bt3, xt3.md = L2(yt3, St3), xt3.wc = St3 == 0 ? -1 : (1 << St3) - 1, r3) {
          s3.xb = _i2;
          break t;
        }
        if ((_3 = a2(f4 * m3)) == null) {
          s3.a = 1, l4 = 0;
          break t;
        }
        l4 = (l4 = G2(s3, _3, 0, f4, m3, m3, null)) && !h3.h;
        break t;
      }
      return l4 ? (c5 == null ? (t(_3 == null), t(r3)) : c5[0] = _3, s3.$ = 0, r3 || Fe2(g3)) : Fe2(g3), l4;
    }
    function Re2(e6, n3) {
      var r3 = e6.c * e6.i, i3 = r3 + n3 + 16 * n3;
      return t(e6.c <= n3), e6.V = a2(i3), e6.V == null ? (e6.Ta = null, e6.Ua = 0, e6.a = 1, 0) : (e6.Ta = e6.V, e6.Ua = e6.Ba + r3 + n3, 1);
    }
    function ze2(e6, n3) {
      var r3 = e6.C, i3 = n3 - r3, a3 = e6.V, o3 = e6.Ba + e6.c * r3;
      for (t(n3 <= e6.l.o); 0 < i3; ) {
        var s3 = 16 < i3 ? 16 : i3, c5 = e6.l.ma, l4 = e6.l.width, u4 = l4 * s3, d4 = c5.ca, f4 = c5.tb + l4 * r3, p3 = e6.Ta, m3 = e6.Ua;
        Ae2(e6, s3, a3, o3), kr2(p3, m3, d4, f4, u4), Ne2(c5, r3, r3 + s3, d4, f4, l4), i3 -= s3, a3 += s3 * e6.c, r3 += s3;
      }
      t(r3 == n3), e6.C = e6.Ma = n3;
    }
    function K2() {
      this.ub = this.yd = this.td = this.Rb = 0;
    }
    function Be2() {
      this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
    }
    function Ve2() {
      this.Fb = this.Bb = this.Cb = 0, this.Zb = a2(4), this.Lb = a2(4);
    }
    function He2() {
      this.Yb = function() {
        var e6 = [];
        return function e7(t2, n3, r3) {
          for (var i3 = r3[n3], a3 = 0; a3 < i3 && (t2.push(r3.length > n3 + 1 ? [] : 0), !(r3.length < n3 + 1)); a3++) e7(t2[a3], n3 + 1, r3);
        }(e6, 0, [3, 11]), e6;
      }();
    }
    function Ue2() {
      this.jb = a2(3), this.Wc = s2([4, 8], He2), this.Xc = s2([4, 17], He2);
    }
    function We2() {
      this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new a2(4), this.od = new a2(4);
    }
    function Ge2() {
      this.ld = this.La = this.dd = this.tc = 0;
    }
    function Ke2() {
      this.Na = this.la = 0;
    }
    function qe2() {
      this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0;
    }
    function Je2() {
      this.ad = a2(384), this.Za = 0, this.Ob = a2(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
    }
    function Ye2() {
      this.uc = this.M = this.Nb = 0, this.wa = Array(new Ge2()), this.Y = 0, this.ya = Array(new Je2()), this.aa = 0, this.l = new $e2();
    }
    function Xe2() {
      this.y = a2(16), this.f = a2(8), this.ea = a2(8);
    }
    function Ze2() {
      this.cb = this.a = 0, this.sc = "", this.m = new b3(), this.Od = new K2(), this.Kc = new Be2(), this.ed = new We2(), this.Qa = new Ve2(), this.Ic = this.$c = this.Aa = 0, this.D = new Ye2(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = o2(8, b3), this.ia = 0, this.pb = o2(4, qe2), this.Pa = new Ue2(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [
        0,
        0,
        0,
        0
      ], this.Gd = Array(new Xe2()), this.Hd = 0, this.rb = Array(new Ke2()), this.sb = 0, this.wa = Array(new Ge2()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new Je2()), this.L = this.aa = 0, this.gd = s2([4, 2], Ge2), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
    }
    function Qe2(e6, t2) {
      return 0 > e6 ? 0 : e6 > t2 ? t2 : e6;
    }
    function $e2() {
      this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
    }
    function et2() {
      var e6 = new Ze2();
      return e6 != null && (e6.a = 0, e6.sc = "OK", e6.cb = 0, e6.Xb = 0, oi2 || (oi2 = it2)), e6;
    }
    function tt2(e6, t2, n3) {
      return e6.a == 0 && (e6.a = t2, e6.sc = n3, e6.cb = 0), 0;
    }
    function nt2(e6, t2, n3) {
      return 3 <= n3 && e6[t2 + 0] == 157 && e6[t2 + 1] == 1 && e6[t2 + 2] == 42;
    }
    function rt2(e6, n3) {
      if (e6 == null) return 0;
      if (e6.a = 0, e6.sc = "OK", n3 == null) return tt2(e6, 2, "null VP8Io passed to VP8GetHeaders()");
      var r3 = n3.data, a3 = n3.w, o3 = n3.ha;
      if (4 > o3) return tt2(e6, 7, "Truncated header.");
      var s3 = r3[a3 + 0] | r3[a3 + 1] << 8 | r3[a3 + 2] << 16, c5 = e6.Od;
      if (c5.Rb = !(1 & s3), c5.td = s3 >> 1 & 7, c5.yd = s3 >> 4 & 1, c5.ub = s3 >> 5, 3 < c5.td) return tt2(e6, 3, "Incorrect keyframe parameters.");
      if (!c5.yd) return tt2(e6, 4, "Frame not displayable.");
      a3 += 3, o3 -= 3;
      var l4 = e6.Kc;
      if (c5.Rb) {
        if (7 > o3) return tt2(e6, 7, "cannot parse picture header");
        if (!nt2(r3, a3, o3)) return tt2(e6, 3, "Bad code word");
        l4.c = 16383 & (r3[a3 + 4] << 8 | r3[a3 + 3]), l4.Td = r3[a3 + 4] >> 6, l4.i = 16383 & (r3[a3 + 6] << 8 | r3[a3 + 5]), l4.Ud = r3[a3 + 6] >> 6, a3 += 7, o3 -= 7, e6.za = l4.c + 15 >> 4, e6.Ub = l4.i + 15 >> 4, n3.width = l4.c, n3.height = l4.i, n3.Da = 0, n3.j = 0, n3.v = 0, n3.va = n3.width, n3.o = n3.height, n3.da = 0, n3.ib = n3.width, n3.hb = n3.height, n3.U = n3.width, n3.T = n3.height, i2((s3 = e6.Pa).jb, 0, 255, s3.jb.length), t((s3 = e6.Qa) != null), s3.Cb = 0, s3.Bb = 0, s3.Fb = 1, i2(s3.Zb, 0, 0, s3.Zb.length), i2(s3.Lb, 0, 0, s3.Lb);
      }
      if (c5.ub > o3) return tt2(e6, 7, "bad partition length");
      m2(s3 = e6.m, r3, a3, c5.ub), a3 += c5.ub, o3 -= c5.ub, c5.Rb && (l4.Ld = D2(s3), l4.Kd = D2(s3)), l4 = e6.Qa;
      var u4, d4 = e6.Pa;
      if (t(s3 != null), t(l4 != null), l4.Cb = D2(s3), l4.Cb) {
        if (l4.Bb = D2(s3), D2(s3)) {
          for (l4.Fb = D2(s3), u4 = 0; 4 > u4; ++u4) l4.Zb[u4] = D2(s3) ? g2(s3, 7) : 0;
          for (u4 = 0; 4 > u4; ++u4) l4.Lb[u4] = D2(s3) ? g2(s3, 6) : 0;
        }
        if (l4.Bb) for (u4 = 0; 3 > u4; ++u4) d4.jb[u4] = D2(s3) ? h2(s3, 8) : 255;
      } else l4.Bb = 0;
      if (s3.Ka) return tt2(e6, 3, "cannot parse segment header");
      if ((l4 = e6.ed).zd = D2(s3), l4.Tb = h2(s3, 6), l4.wb = h2(s3, 3), l4.Pc = D2(s3), l4.Pc && D2(s3)) {
        for (d4 = 0; 4 > d4; ++d4) D2(s3) && (l4.vd[d4] = g2(s3, 6));
        for (d4 = 0; 4 > d4; ++d4) D2(s3) && (l4.od[d4] = g2(s3, 6));
      }
      if (e6.L = l4.Tb == 0 ? 0 : l4.zd ? 1 : 2, s3.Ka) return tt2(e6, 3, "cannot parse filter header");
      var f4 = o3;
      if (o3 = u4 = a3, a3 = u4 + f4, l4 = f4, e6.Xb = (1 << h2(e6.m, 2)) - 1, f4 < 3 * (d4 = e6.Xb)) r3 = 7;
      else {
        for (u4 += 3 * d4, l4 -= 3 * d4, f4 = 0; f4 < d4; ++f4) {
          var p3 = r3[o3 + 0] | r3[o3 + 1] << 8 | r3[o3 + 2] << 16;
          p3 > l4 && (p3 = l4), m2(e6.Jc[+f4], r3, u4, p3), u4 += p3, l4 -= p3, o3 += 3;
        }
        m2(e6.Jc[+d4], r3, u4, l4), r3 = u4 < a3 ? 0 : 5;
      }
      if (r3 != 0) return tt2(e6, r3, "cannot parse partitions");
      for (r3 = h2(u4 = e6.m, 7), o3 = D2(u4) ? g2(u4, 4) : 0, a3 = D2(u4) ? g2(u4, 4) : 0, l4 = D2(u4) ? g2(u4, 4) : 0, d4 = D2(u4) ? g2(u4, 4) : 0, u4 = D2(u4) ? g2(u4, 4) : 0, f4 = e6.Qa, p3 = 0; 4 > p3; ++p3) {
        if (f4.Cb) {
          var _3 = f4.Zb[p3];
          f4.Fb || (_3 += r3);
        } else {
          if (0 < p3) {
            e6.pb[p3] = e6.pb[0];
            continue;
          }
          _3 = r3;
        }
        var v3 = e6.pb[p3];
        v3.Sc[0] = ii2[Qe2(_3 + o3, 127)], v3.Sc[1] = ai2[Qe2(_3 + 0, 127)], v3.Eb[0] = 2 * ii2[Qe2(_3 + a3, 127)], v3.Eb[1] = 101581 * ai2[Qe2(_3 + l4, 127)] >> 16, 8 > v3.Eb[1] && (v3.Eb[1] = 8), v3.Qc[0] = ii2[Qe2(_3 + d4, 117)], v3.Qc[1] = ai2[Qe2(_3 + u4, 127)], v3.lc = _3 + u4;
      }
      if (!c5.Rb) return tt2(e6, 4, "Not a key frame.");
      for (D2(s3), c5 = e6.Pa, r3 = 0; 4 > r3; ++r3) {
        for (o3 = 0; 8 > o3; ++o3) for (a3 = 0; 3 > a3; ++a3) for (l4 = 0; 11 > l4; ++l4) d4 = O2(s3, fi2[r3][o3][a3][l4]) ? h2(s3, 8) : ui2[r3][o3][a3][l4], c5.Wc[r3][o3].Yb[a3][l4] = d4;
        for (o3 = 0; 17 > o3; ++o3) c5.Xc[r3][o3] = c5.Wc[r3][pi2[o3]];
      }
      return e6.kc = D2(s3), e6.kc && (e6.Bd = h2(s3, 8)), e6.cb = 1;
    }
    function it2(e6, t2, n3, r3, i3, a3, o3) {
      var s3 = t2[i3].Yb[n3];
      for (n3 = 0; 16 > i3; ++i3) {
        if (!O2(e6, s3[n3 + 0])) return i3;
        for (; !O2(e6, s3[n3 + 1]); ) if (s3 = t2[++i3].Yb[0], n3 = 0, i3 == 16) return 16;
        var c5 = t2[i3 + 1].Yb;
        if (O2(e6, s3[n3 + 2])) {
          var l4 = e6, u4 = 0;
          if (O2(l4, (f4 = s3)[(d4 = n3) + 3])) if (O2(l4, f4[d4 + 6])) {
            for (s3 = 0, d4 = 2 * (u4 = O2(l4, f4[d4 + 8])) + (f4 = O2(l4, f4[d4 + 9 + u4])), u4 = 0, f4 = si2[d4]; f4[s3]; ++s3) u4 += u4 + O2(l4, f4[s3]);
            u4 += 3 + (8 << d4);
          } else O2(l4, f4[d4 + 7]) ? (u4 = 7 + 2 * O2(l4, 165), u4 += O2(l4, 145)) : u4 = 5 + O2(l4, 159);
          else u4 = O2(l4, f4[d4 + 4]) ? 3 + O2(l4, f4[d4 + 5]) : 2;
          s3 = c5[2];
        } else u4 = 1, s3 = c5[1];
        c5 = o3 + ci2[i3], 0 > (l4 = e6).b && E2(l4);
        var d4, f4 = l4.b, p3 = (d4 = l4.Ca >> 1) - (l4.I >> f4) >> 31;
        --l4.b, l4.Ca += p3, l4.Ca |= 1, l4.I -= (d4 + 1 & p3) << f4, a3[c5] = ((u4 ^ p3) - p3) * r3[(0 < i3) + 0];
      }
      return 16;
    }
    function at2(e6) {
      var t2 = e6.rb[e6.sb - 1];
      t2.la = 0, t2.Na = 0, i2(e6.zc, 0, 0, e6.zc.length), e6.ja = 0;
    }
    function ot2(e6, t2, n3, r3, i3) {
      i3 = e6[t2 + n3 + 32 * r3] + (i3 >> 3), e6[t2 + n3 + 32 * r3] = -256 & i3 ? 0 > i3 ? 0 : 255 : i3;
    }
    function st2(e6, t2, n3, r3, i3, a3) {
      ot2(e6, t2, 0, n3, r3 + i3), ot2(e6, t2, 1, n3, r3 + a3), ot2(e6, t2, 2, n3, r3 - a3), ot2(e6, t2, 3, n3, r3 - i3);
    }
    function ct2(e6) {
      return (20091 * e6 >> 16) + e6;
    }
    function lt2(e6, t2, n3, r3) {
      var i3, o3 = 0, s3 = a2(16);
      for (i3 = 0; 4 > i3; ++i3) {
        var c5 = e6[t2 + 0] + e6[t2 + 8], l4 = e6[t2 + 0] - e6[t2 + 8], u4 = (35468 * e6[t2 + 4] >> 16) - ct2(e6[t2 + 12]), d4 = ct2(e6[t2 + 4]) + (35468 * e6[t2 + 12] >> 16);
        s3[o3 + 0] = c5 + d4, s3[o3 + 1] = l4 + u4, s3[o3 + 2] = l4 - u4, s3[o3 + 3] = c5 - d4, o3 += 4, t2++;
      }
      for (i3 = o3 = 0; 4 > i3; ++i3) c5 = (e6 = s3[o3 + 0] + 4) + s3[o3 + 8], l4 = e6 - s3[o3 + 8], u4 = (35468 * s3[o3 + 4] >> 16) - ct2(s3[o3 + 12]), ot2(n3, r3, 0, 0, c5 + (d4 = ct2(s3[o3 + 4]) + (35468 * s3[o3 + 12] >> 16))), ot2(n3, r3, 1, 0, l4 + u4), ot2(n3, r3, 2, 0, l4 - u4), ot2(n3, r3, 3, 0, c5 - d4), o3++, r3 += 32;
    }
    function ut2(e6, t2, n3, r3) {
      var i3 = e6[t2 + 0] + 4, a3 = 35468 * e6[t2 + 4] >> 16, o3 = ct2(e6[t2 + 4]), s3 = 35468 * e6[t2 + 1] >> 16;
      st2(n3, r3, 0, i3 + o3, e6 = ct2(e6[t2 + 1]), s3), st2(n3, r3, 1, i3 + a3, e6, s3), st2(n3, r3, 2, i3 - a3, e6, s3), st2(n3, r3, 3, i3 - o3, e6, s3);
    }
    function dt2(e6, t2, n3, r3, i3) {
      lt2(e6, t2, n3, r3), i3 && lt2(e6, t2 + 16, n3, r3 + 4);
    }
    function ft2(e6, t2, n3, r3) {
      lr2(e6, t2 + 0, n3, r3, 1), lr2(e6, t2 + 32, n3, r3 + 128, 1);
    }
    function pt2(e6, t2, n3, r3) {
      var i3;
      for (e6 = e6[t2 + 0] + 4, i3 = 0; 4 > i3; ++i3) for (t2 = 0; 4 > t2; ++t2) ot2(n3, r3, t2, i3, e6);
    }
    function mt2(e6, t2, n3, r3) {
      e6[t2 + 0] && fr2(e6, t2 + 0, n3, r3), e6[t2 + 16] && fr2(e6, t2 + 16, n3, r3 + 4), e6[t2 + 32] && fr2(e6, t2 + 32, n3, r3 + 128), e6[t2 + 48] && fr2(e6, t2 + 48, n3, r3 + 128 + 4);
    }
    function ht2(e6, t2, n3, r3) {
      var i3, o3 = a2(16);
      for (i3 = 0; 4 > i3; ++i3) {
        var s3 = e6[t2 + 0 + i3] + e6[t2 + 12 + i3], c5 = e6[t2 + 4 + i3] + e6[t2 + 8 + i3], l4 = e6[t2 + 4 + i3] - e6[t2 + 8 + i3], u4 = e6[t2 + 0 + i3] - e6[t2 + 12 + i3];
        o3[0 + i3] = s3 + c5, o3[8 + i3] = s3 - c5, o3[4 + i3] = u4 + l4, o3[12 + i3] = u4 - l4;
      }
      for (i3 = 0; 4 > i3; ++i3) s3 = (e6 = o3[0 + 4 * i3] + 3) + o3[3 + 4 * i3], c5 = o3[1 + 4 * i3] + o3[2 + 4 * i3], l4 = o3[1 + 4 * i3] - o3[2 + 4 * i3], u4 = e6 - o3[3 + 4 * i3], n3[r3 + 0] = s3 + c5 >> 3, n3[r3 + 16] = u4 + l4 >> 3, n3[r3 + 32] = s3 - c5 >> 3, n3[r3 + 48] = u4 - l4 >> 3, r3 += 64;
    }
    function gt2(e6, t2, n3) {
      var r3, i3 = t2 - 32, a3 = Lr2, o3 = 255 - e6[i3 - 1];
      for (r3 = 0; r3 < n3; ++r3) {
        var s3, c5 = a3, l4 = o3 + e6[t2 - 1];
        for (s3 = 0; s3 < n3; ++s3) e6[t2 + s3] = c5[l4 + e6[i3 + s3]];
        t2 += 32;
      }
    }
    function _t2(e6, t2) {
      gt2(e6, t2, 4);
    }
    function vt2(e6, t2) {
      gt2(e6, t2, 8);
    }
    function yt2(e6, t2) {
      gt2(e6, t2, 16);
    }
    function bt2(e6, t2) {
      var n3;
      for (n3 = 0; 16 > n3; ++n3) r2(e6, t2 + 32 * n3, e6, t2 - 32, 16);
    }
    function xt2(e6, t2) {
      var n3;
      for (n3 = 16; 0 < n3; --n3) i2(e6, t2, e6[t2 - 1], 16), t2 += 32;
    }
    function St2(e6, t2, n3) {
      var r3;
      for (r3 = 0; 16 > r3; ++r3) i2(t2, n3 + 32 * r3, e6, 16);
    }
    function Ct2(e6, t2) {
      var n3, r3 = 16;
      for (n3 = 0; 16 > n3; ++n3) r3 += e6[t2 - 1 + 32 * n3] + e6[t2 + n3 - 32];
      St2(r3 >> 5, e6, t2);
    }
    function wt2(e6, t2) {
      var n3, r3 = 8;
      for (n3 = 0; 16 > n3; ++n3) r3 += e6[t2 - 1 + 32 * n3];
      St2(r3 >> 4, e6, t2);
    }
    function Tt2(e6, t2) {
      var n3, r3 = 8;
      for (n3 = 0; 16 > n3; ++n3) r3 += e6[t2 + n3 - 32];
      St2(r3 >> 4, e6, t2);
    }
    function Et2(e6, t2) {
      St2(128, e6, t2);
    }
    function q2(e6, t2, n3) {
      return e6 + 2 * t2 + n3 + 2 >> 2;
    }
    function Dt2(e6, t2) {
      var n3, i3 = t2 - 32;
      for (i3 = new Uint8Array([
        q2(e6[i3 - 1], e6[i3 + 0], e6[i3 + 1]),
        q2(e6[i3 + 0], e6[i3 + 1], e6[i3 + 2]),
        q2(e6[i3 + 1], e6[i3 + 2], e6[i3 + 3]),
        q2(e6[i3 + 2], e6[i3 + 3], e6[i3 + 4])
      ]), n3 = 0; 4 > n3; ++n3) r2(e6, t2 + 32 * n3, i3, 0, i3.length);
    }
    function Ot2(e6, t2) {
      var n3 = e6[t2 - 1], r3 = e6[t2 - 1 + 32], i3 = e6[t2 - 1 + 64], a3 = e6[t2 - 1 + 96];
      k2(e6, t2 + 0, 16843009 * q2(e6[t2 - 1 - 32], n3, r3)), k2(e6, t2 + 32, 16843009 * q2(n3, r3, i3)), k2(e6, t2 + 64, 16843009 * q2(r3, i3, a3)), k2(e6, t2 + 96, 16843009 * q2(i3, a3, a3));
    }
    function kt2(e6, t2) {
      var n3, r3 = 4;
      for (n3 = 0; 4 > n3; ++n3) r3 += e6[t2 + n3 - 32] + e6[t2 - 1 + 32 * n3];
      for (r3 >>= 3, n3 = 0; 4 > n3; ++n3) i2(e6, t2 + 32 * n3, r3, 4);
    }
    function At2(e6, t2) {
      var n3 = e6[t2 - 1 + 0], r3 = e6[t2 - 1 + 32], i3 = e6[t2 - 1 + 64], a3 = e6[t2 - 1 - 32], o3 = e6[t2 + 0 - 32], s3 = e6[t2 + 1 - 32], c5 = e6[t2 + 2 - 32], l4 = e6[t2 + 3 - 32];
      e6[t2 + 0 + 96] = q2(r3, i3, e6[t2 - 1 + 96]), e6[t2 + 1 + 96] = e6[t2 + 0 + 64] = q2(n3, r3, i3), e6[t2 + 2 + 96] = e6[t2 + 1 + 64] = e6[t2 + 0 + 32] = q2(a3, n3, r3), e6[t2 + 3 + 96] = e6[t2 + 2 + 64] = e6[t2 + 1 + 32] = e6[t2 + 0 + 0] = q2(o3, a3, n3), e6[t2 + 3 + 64] = e6[t2 + 2 + 32] = e6[t2 + 1 + 0] = q2(s3, o3, a3), e6[t2 + 3 + 32] = e6[t2 + 2 + 0] = q2(c5, s3, o3), e6[t2 + 3 + 0] = q2(l4, c5, s3);
    }
    function jt2(e6, t2) {
      var n3 = e6[t2 + 1 - 32], r3 = e6[t2 + 2 - 32], i3 = e6[t2 + 3 - 32], a3 = e6[t2 + 4 - 32], o3 = e6[t2 + 5 - 32], s3 = e6[t2 + 6 - 32], c5 = e6[t2 + 7 - 32];
      e6[t2 + 0 + 0] = q2(e6[t2 + 0 - 32], n3, r3), e6[t2 + 1 + 0] = e6[t2 + 0 + 32] = q2(n3, r3, i3), e6[t2 + 2 + 0] = e6[t2 + 1 + 32] = e6[t2 + 0 + 64] = q2(r3, i3, a3), e6[t2 + 3 + 0] = e6[t2 + 2 + 32] = e6[t2 + 1 + 64] = e6[t2 + 0 + 96] = q2(i3, a3, o3), e6[t2 + 3 + 32] = e6[t2 + 2 + 64] = e6[t2 + 1 + 96] = q2(a3, o3, s3), e6[t2 + 3 + 64] = e6[t2 + 2 + 96] = q2(o3, s3, c5), e6[t2 + 3 + 96] = q2(s3, c5, c5);
    }
    function Mt2(e6, t2) {
      var n3 = e6[t2 - 1 + 0], r3 = e6[t2 - 1 + 32], i3 = e6[t2 - 1 + 64], a3 = e6[t2 - 1 - 32], o3 = e6[t2 + 0 - 32], s3 = e6[t2 + 1 - 32], c5 = e6[t2 + 2 - 32], l4 = e6[t2 + 3 - 32];
      e6[t2 + 0 + 0] = e6[t2 + 1 + 64] = a3 + o3 + 1 >> 1, e6[t2 + 1 + 0] = e6[t2 + 2 + 64] = o3 + s3 + 1 >> 1, e6[t2 + 2 + 0] = e6[t2 + 3 + 64] = s3 + c5 + 1 >> 1, e6[t2 + 3 + 0] = c5 + l4 + 1 >> 1, e6[t2 + 0 + 96] = q2(i3, r3, n3), e6[t2 + 0 + 64] = q2(r3, n3, a3), e6[t2 + 0 + 32] = e6[t2 + 1 + 96] = q2(n3, a3, o3), e6[t2 + 1 + 32] = e6[t2 + 2 + 96] = q2(a3, o3, s3), e6[t2 + 2 + 32] = e6[t2 + 3 + 96] = q2(o3, s3, c5), e6[t2 + 3 + 32] = q2(s3, c5, l4);
    }
    function Nt2(e6, t2) {
      var n3 = e6[t2 + 0 - 32], r3 = e6[t2 + 1 - 32], i3 = e6[t2 + 2 - 32], a3 = e6[t2 + 3 - 32], o3 = e6[t2 + 4 - 32], s3 = e6[t2 + 5 - 32], c5 = e6[t2 + 6 - 32], l4 = e6[t2 + 7 - 32];
      e6[t2 + 0 + 0] = n3 + r3 + 1 >> 1, e6[t2 + 1 + 0] = e6[t2 + 0 + 64] = r3 + i3 + 1 >> 1, e6[t2 + 2 + 0] = e6[t2 + 1 + 64] = i3 + a3 + 1 >> 1, e6[t2 + 3 + 0] = e6[t2 + 2 + 64] = a3 + o3 + 1 >> 1, e6[t2 + 0 + 32] = q2(n3, r3, i3), e6[t2 + 1 + 32] = e6[t2 + 0 + 96] = q2(r3, i3, a3), e6[t2 + 2 + 32] = e6[t2 + 1 + 96] = q2(i3, a3, o3), e6[t2 + 3 + 32] = e6[t2 + 2 + 96] = q2(a3, o3, s3), e6[t2 + 3 + 64] = q2(o3, s3, c5), e6[t2 + 3 + 96] = q2(s3, c5, l4);
    }
    function Pt2(e6, t2) {
      var n3 = e6[t2 - 1 + 0], r3 = e6[t2 - 1 + 32], i3 = e6[t2 - 1 + 64], a3 = e6[t2 - 1 + 96];
      e6[t2 + 0 + 0] = n3 + r3 + 1 >> 1, e6[t2 + 2 + 0] = e6[t2 + 0 + 32] = r3 + i3 + 1 >> 1, e6[t2 + 2 + 32] = e6[t2 + 0 + 64] = i3 + a3 + 1 >> 1, e6[t2 + 1 + 0] = q2(n3, r3, i3), e6[t2 + 3 + 0] = e6[t2 + 1 + 32] = q2(r3, i3, a3), e6[t2 + 3 + 32] = e6[t2 + 1 + 64] = q2(i3, a3, a3), e6[t2 + 3 + 64] = e6[t2 + 2 + 64] = e6[t2 + 0 + 96] = e6[t2 + 1 + 96] = e6[t2 + 2 + 96] = e6[t2 + 3 + 96] = a3;
    }
    function Ft2(e6, t2) {
      var n3 = e6[t2 - 1 + 0], r3 = e6[t2 - 1 + 32], i3 = e6[t2 - 1 + 64], a3 = e6[t2 - 1 + 96], o3 = e6[t2 - 1 - 32], s3 = e6[t2 + 0 - 32], c5 = e6[t2 + 1 - 32], l4 = e6[t2 + 2 - 32];
      e6[t2 + 0 + 0] = e6[t2 + 2 + 32] = n3 + o3 + 1 >> 1, e6[t2 + 0 + 32] = e6[t2 + 2 + 64] = r3 + n3 + 1 >> 1, e6[t2 + 0 + 64] = e6[t2 + 2 + 96] = i3 + r3 + 1 >> 1, e6[t2 + 0 + 96] = a3 + i3 + 1 >> 1, e6[t2 + 3 + 0] = q2(s3, c5, l4), e6[t2 + 2 + 0] = q2(o3, s3, c5), e6[t2 + 1 + 0] = e6[t2 + 3 + 32] = q2(n3, o3, s3), e6[t2 + 1 + 32] = e6[t2 + 3 + 64] = q2(r3, n3, o3), e6[t2 + 1 + 64] = e6[t2 + 3 + 96] = q2(i3, r3, n3), e6[t2 + 1 + 96] = q2(a3, i3, r3);
    }
    function It2(e6, t2) {
      var n3;
      for (n3 = 0; 8 > n3; ++n3) r2(e6, t2 + 32 * n3, e6, t2 - 32, 8);
    }
    function Lt2(e6, t2) {
      var n3;
      for (n3 = 0; 8 > n3; ++n3) i2(e6, t2, e6[t2 - 1], 8), t2 += 32;
    }
    function Rt2(e6, t2, n3) {
      var r3;
      for (r3 = 0; 8 > r3; ++r3) i2(t2, n3 + 32 * r3, e6, 8);
    }
    function zt2(e6, t2) {
      var n3, r3 = 8;
      for (n3 = 0; 8 > n3; ++n3) r3 += e6[t2 + n3 - 32] + e6[t2 - 1 + 32 * n3];
      Rt2(r3 >> 4, e6, t2);
    }
    function Bt2(e6, t2) {
      var n3, r3 = 4;
      for (n3 = 0; 8 > n3; ++n3) r3 += e6[t2 + n3 - 32];
      Rt2(r3 >> 3, e6, t2);
    }
    function Vt2(e6, t2) {
      var n3, r3 = 4;
      for (n3 = 0; 8 > n3; ++n3) r3 += e6[t2 - 1 + 32 * n3];
      Rt2(r3 >> 3, e6, t2);
    }
    function Ht2(e6, t2) {
      Rt2(128, e6, t2);
    }
    function Ut2(e6, t2, n3) {
      var r3 = e6[t2 - n3], i3 = e6[t2 + 0], a3 = 3 * (i3 - r3) + Fr2[1020 + e6[t2 - 2 * n3] - e6[t2 + n3]], o3 = Ir2[112 + (a3 + 4 >> 3)];
      e6[t2 - n3] = Lr2[255 + r3 + Ir2[112 + (a3 + 3 >> 3)]], e6[t2 + 0] = Lr2[255 + i3 - o3];
    }
    function Wt2(e6, t2, n3, r3) {
      var i3 = e6[t2 + 0], a3 = e6[t2 + n3];
      return Rr2[255 + e6[t2 - 2 * n3] - e6[t2 - n3]] > r3 || Rr2[255 + a3 - i3] > r3;
    }
    function Gt2(e6, t2, n3, r3) {
      return 4 * Rr2[255 + e6[t2 - n3] - e6[t2 + 0]] + Rr2[255 + e6[t2 - 2 * n3] - e6[t2 + n3]] <= r3;
    }
    function Kt2(e6, t2, n3, r3, i3) {
      var a3 = e6[t2 - 3 * n3], o3 = e6[t2 - 2 * n3], s3 = e6[t2 - n3], c5 = e6[t2 + 0], l4 = e6[t2 + n3], u4 = e6[t2 + 2 * n3], d4 = e6[t2 + 3 * n3];
      return 4 * Rr2[255 + s3 - c5] + Rr2[255 + o3 - l4] > r3 ? 0 : Rr2[255 + e6[t2 - 4 * n3] - a3] <= i3 && Rr2[255 + a3 - o3] <= i3 && Rr2[255 + o3 - s3] <= i3 && Rr2[255 + d4 - u4] <= i3 && Rr2[255 + u4 - l4] <= i3 && Rr2[255 + l4 - c5] <= i3;
    }
    function qt2(e6, t2, n3, r3) {
      var i3 = 2 * r3 + 1;
      for (r3 = 0; 16 > r3; ++r3) Gt2(e6, t2 + r3, n3, i3) && Ut2(e6, t2 + r3, n3);
    }
    function Jt2(e6, t2, n3, r3) {
      var i3 = 2 * r3 + 1;
      for (r3 = 0; 16 > r3; ++r3) Gt2(e6, t2 + r3 * n3, 1, i3) && Ut2(e6, t2 + r3 * n3, 1);
    }
    function Yt2(e6, t2, n3, r3) {
      var i3;
      for (i3 = 3; 0 < i3; --i3) qt2(e6, t2 += 4 * n3, n3, r3);
    }
    function Xt2(e6, t2, n3, r3) {
      var i3;
      for (i3 = 3; 0 < i3; --i3) Jt2(e6, t2 += 4, n3, r3);
    }
    function J2(e6, t2, n3, r3, i3, a3, o3, s3) {
      for (a3 = 2 * a3 + 1; 0 < i3--; ) {
        if (Kt2(e6, t2, n3, a3, o3)) if (Wt2(e6, t2, n3, s3)) Ut2(e6, t2, n3);
        else {
          var c5 = e6, l4 = t2, u4 = n3, d4 = c5[l4 - 2 * u4], f4 = c5[l4 - u4], p3 = c5[l4 + 0], m3 = c5[l4 + u4], h3 = c5[l4 + 2 * u4], g3 = 27 * (v3 = Fr2[1020 + 3 * (p3 - f4) + Fr2[1020 + d4 - m3]]) + 63 >> 7, _3 = 18 * v3 + 63 >> 7, v3 = 9 * v3 + 63 >> 7;
          c5[l4 - 3 * u4] = Lr2[255 + c5[l4 - 3 * u4] + v3], c5[l4 - 2 * u4] = Lr2[255 + d4 + _3], c5[l4 - u4] = Lr2[255 + f4 + g3], c5[l4 + 0] = Lr2[255 + p3 - g3], c5[l4 + u4] = Lr2[255 + m3 - _3], c5[l4 + 2 * u4] = Lr2[255 + h3 - v3];
        }
        t2 += r3;
      }
    }
    function Zt2(e6, t2, n3, r3, i3, a3, o3, s3) {
      for (a3 = 2 * a3 + 1; 0 < i3--; ) {
        if (Kt2(e6, t2, n3, a3, o3)) if (Wt2(e6, t2, n3, s3)) Ut2(e6, t2, n3);
        else {
          var c5 = e6, l4 = t2, u4 = n3, d4 = c5[l4 - u4], f4 = c5[l4 + 0], p3 = c5[l4 + u4], m3 = Ir2[112 + (4 + (h3 = 3 * (f4 - d4)) >> 3)], h3 = Ir2[112 + (h3 + 3 >> 3)], g3 = m3 + 1 >> 1;
          c5[l4 - 2 * u4] = Lr2[255 + c5[l4 - 2 * u4] + g3], c5[l4 - u4] = Lr2[255 + d4 + h3], c5[l4 + 0] = Lr2[255 + f4 - m3], c5[l4 + u4] = Lr2[255 + p3 - g3];
        }
        t2 += r3;
      }
    }
    function Qt2(e6, t2, n3, r3, i3, a3) {
      J2(e6, t2, n3, 1, 16, r3, i3, a3);
    }
    function $t2(e6, t2, n3, r3, i3, a3) {
      J2(e6, t2, 1, n3, 16, r3, i3, a3);
    }
    function en2(e6, t2, n3, r3, i3, a3) {
      var o3;
      for (o3 = 3; 0 < o3; --o3) Zt2(e6, t2 += 4 * n3, n3, 1, 16, r3, i3, a3);
    }
    function tn2(e6, t2, n3, r3, i3, a3) {
      var o3;
      for (o3 = 3; 0 < o3; --o3) Zt2(e6, t2 += 4, 1, n3, 16, r3, i3, a3);
    }
    function nn2(e6, t2, n3, r3, i3, a3, o3, s3) {
      J2(e6, t2, i3, 1, 8, a3, o3, s3), J2(n3, r3, i3, 1, 8, a3, o3, s3);
    }
    function rn2(e6, t2, n3, r3, i3, a3, o3, s3) {
      J2(e6, t2, 1, i3, 8, a3, o3, s3), J2(n3, r3, 1, i3, 8, a3, o3, s3);
    }
    function an2(e6, t2, n3, r3, i3, a3, o3, s3) {
      Zt2(e6, t2 + 4 * i3, i3, 1, 8, a3, o3, s3), Zt2(n3, r3 + 4 * i3, i3, 1, 8, a3, o3, s3);
    }
    function on2(e6, t2, n3, r3, i3, a3, o3, s3) {
      Zt2(e6, t2 + 4, 1, i3, 8, a3, o3, s3), Zt2(n3, r3 + 4, 1, i3, 8, a3, o3, s3);
    }
    function sn2() {
      this.ba = new he2(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new _e2(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
    }
    function cn2() {
      this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
    }
    function ln2() {
      this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
    }
    function un2() {
      this.ua = 0, this.Wa = new F2(), this.vb = new F2(), this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new p2(), this.yc = new d3();
    }
    function dn2() {
      this.xb = this.a = 0, this.l = new $e2(), this.ca = new he2(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new x3(), this.Pb = 0, this.wd = new x3(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new un2(), this.ab = 0, this.gc = o2(4, ln2), this.Oc = 0;
    }
    function fn2() {
      this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new $e2(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
    }
    function pn2(e6, t2, n3, r3, i3, a3, o3) {
      for (e6 = e6 == null ? 0 : e6[t2 + 0], t2 = 0; t2 < o3; ++t2) i3[a3 + t2] = e6 + n3[r3 + t2] & 255, e6 = i3[a3 + t2];
    }
    function mn2(e6, t2, n3, r3, i3, a3, o3) {
      var s3;
      if (e6 == null) pn2(null, null, n3, r3, i3, a3, o3);
      else for (s3 = 0; s3 < o3; ++s3) i3[a3 + s3] = e6[t2 + s3] + n3[r3 + s3] & 255;
    }
    function hn2(e6, t2, n3, r3, i3, a3, o3) {
      if (e6 == null) pn2(null, null, n3, r3, i3, a3, o3);
      else {
        var s3, c5 = e6[t2 + 0], l4 = c5, u4 = c5;
        for (s3 = 0; s3 < o3; ++s3) l4 = u4 + (c5 = e6[t2 + s3]) - l4, u4 = n3[r3 + s3] + (-256 & l4 ? 0 > l4 ? 0 : 255 : l4) & 255, l4 = c5, i3[a3 + s3] = u4;
      }
    }
    function gn2(e6, n3, i3, o3) {
      var s3 = n3.width, c5 = n3.o;
      if (t(e6 != null && n3 != null), 0 > i3 || 0 >= o3 || i3 + o3 > c5) return null;
      if (!e6.Cc) {
        if (e6.ga == null) {
          var l4;
          if (e6.ga = new fn2(), (l4 = e6.ga == null) || (l4 = n3.width * n3.o, t(e6.Gb.length == 0), e6.Gb = a2(l4), e6.Uc = 0, e6.Gb == null ? l4 = 0 : (e6.mb = e6.Gb, e6.nb = e6.Uc, e6.rc = null, l4 = 1), l4 = !l4), !l4) {
            l4 = e6.ga;
            var u4 = e6.Fa, d4 = e6.P, f4 = e6.qc, p3 = e6.mb, m3 = e6.nb, h3 = d4 + 1, g3 = f4 - 1, v3 = l4.l;
            if (t(u4 != null && p3 != null && n3 != null), yi2[0] = null, yi2[1] = pn2, yi2[2] = mn2, yi2[3] = hn2, l4.ca = p3, l4.tb = m3, l4.c = n3.width, l4.i = n3.height, t(0 < l4.c && 0 < l4.i), 1 >= f4) n3 = 0;
            else if (l4.$a = 3 & u4[d4 + 0], l4.Z = u4[d4 + 0] >> 2 & 3, l4.Lc = u4[d4 + 0] >> 4 & 3, d4 = u4[d4 + 0] >> 6 & 3, 0 > l4.$a || 1 < l4.$a || 4 <= l4.Z || 1 < l4.Lc || d4) n3 = 0;
            else if (v3.put = Se2, v3.ac = xe2, v3.bc = Ce2, v3.ma = l4, v3.width = n3.width, v3.height = n3.height, v3.Da = n3.Da, v3.v = n3.v, v3.va = n3.va, v3.j = n3.j, v3.o = n3.o, l4.$a) t: {
              t(l4.$a == 1), n3 = Ie2();
              e: for (; ; ) {
                if (n3 == null) {
                  n3 = 0;
                  break t;
                }
                if (t(l4 != null), l4.mc = n3, n3.c = l4.c, n3.i = l4.i, n3.l = l4.l, n3.l.ma = l4, n3.l.width = l4.c, n3.l.height = l4.i, n3.a = 0, _2(n3.m, u4, h3, g3), !Le2(l4.c, l4.i, 1, n3, null) || (n3.ab == 1 && n3.gc[0].hc == 3 && Me2(n3.s) ? (l4.ic = 1, u4 = n3.c * n3.i, n3.Ta = null, n3.Ua = 0, n3.V = a2(u4), n3.Ba = 0, n3.V == null ? (n3.a = 1, n3 = 0) : n3 = 1) : (l4.ic = 0, n3 = Re2(n3, l4.c)), !n3)) break e;
                n3 = 1;
                break t;
              }
              l4.mc = null, n3 = 0;
            }
            else n3 = g3 >= l4.c * l4.i;
            l4 = !n3;
          }
          if (l4) return null;
          e6.ga.Lc == 1 ? o3 = c5 - i3 : e6.Ga = 0;
        }
        t(e6.ga != null), t(i3 + o3 <= c5);
        t: {
          if (n3 = (u4 = e6.ga).c, c5 = u4.l.o, u4.$a == 0) {
            if (h3 = e6.rc, g3 = e6.Vc, v3 = e6.Fa, d4 = e6.P + 1 + i3 * n3, f4 = e6.mb, p3 = e6.nb + i3 * n3, t(d4 <= e6.P + e6.qc), u4.Z != 0) for (t(yi2[u4.Z] != null), l4 = 0; l4 < o3; ++l4) yi2[u4.Z](h3, g3, v3, d4, f4, p3, n3), h3 = f4, g3 = p3, p3 += n3, d4 += n3;
            else for (l4 = 0; l4 < o3; ++l4) r2(f4, p3, v3, d4, n3), h3 = f4, g3 = p3, p3 += n3, d4 += n3;
            e6.rc = h3, e6.Vc = g3;
          } else {
            if (t(u4.mc != null), n3 = i3 + o3, t((l4 = u4.mc) != null), t(n3 <= l4.i), l4.C >= n3) n3 = 1;
            else if (u4.ic || Y2(), u4.ic) {
              u4 = l4.V, h3 = l4.Ba, g3 = l4.c;
              var y3 = l4.i, b4 = (v3 = 1, d4 = l4.$ / g3, f4 = l4.$ % g3, p3 = l4.m, m3 = l4.s, l4.$), x4 = g3 * y3, S4 = g3 * n3, w4 = m3.wc, E3 = b4 < S4 ? ke2(m3, f4, d4) : null;
              t(b4 <= x4), t(n3 <= y3), t(Me2(m3));
              e: for (; ; ) {
                for (; !p3.h && b4 < S4; ) {
                  if (f4 & w4 || (E3 = ke2(m3, f4, d4)), t(E3 != null), T2(p3), 256 > (y3 = De2(E3.G[0], E3.H[0], p3))) u4[h3 + b4] = y3, ++b4, ++f4 >= g3 && (f4 = 0, ++d4 <= n3 && !(d4 % 16) && Pe2(l4, d4));
                  else {
                    if (!(280 > y3)) {
                      v3 = 0;
                      break e;
                    }
                    y3 = Te2(y3 - 256, p3);
                    var D3, O3 = De2(E3.G[4], E3.H[4], p3);
                    if (T2(p3), !(b4 >= (O3 = Ee2(g3, O3 = Te2(O3, p3))) && x4 - b4 >= y3)) {
                      v3 = 0;
                      break e;
                    }
                    for (D3 = 0; D3 < y3; ++D3) u4[h3 + b4 + D3] = u4[h3 + b4 + D3 - O3];
                    for (b4 += y3, f4 += y3; f4 >= g3; ) f4 -= g3, ++d4 <= n3 && !(d4 % 16) && Pe2(l4, d4);
                    b4 < S4 && f4 & w4 && (E3 = ke2(m3, f4, d4));
                  }
                  t(p3.h == C3(p3));
                }
                Pe2(l4, d4 > n3 ? n3 : d4);
                break e;
              }
              !v3 || p3.h && b4 < x4 ? (v3 = 0, l4.a = p3.h ? 5 : 3) : l4.$ = b4, n3 = v3;
            } else n3 = G2(l4, l4.V, l4.Ba, l4.c, l4.i, n3, ze2);
            if (!n3) {
              o3 = 0;
              break t;
            }
          }
          i3 + o3 >= c5 && (e6.Cc = 1), o3 = 1;
        }
        if (!o3) return null;
        if (e6.Cc && ((o3 = e6.ga) != null && (o3.mc = null), e6.ga = null, 0 < e6.Ga)) return alert("todo:WebPDequantizeLevels"), null;
      }
      return e6.nb + i3 * s3;
    }
    function _n2(e6, t2, n3, r3, i3, a3) {
      for (; 0 < i3--; ) {
        var o3, s3 = e6, c5 = t2 + (n3 ? 1 : 0), l4 = e6, u4 = t2 + (n3 ? 0 : 3);
        for (o3 = 0; o3 < r3; ++o3) {
          var d4 = l4[u4 + 4 * o3];
          d4 != 255 && (d4 *= 32897, s3[c5 + 4 * o3 + 0] = s3[c5 + 4 * o3 + 0] * d4 >> 23, s3[c5 + 4 * o3 + 1] = s3[c5 + 4 * o3 + 1] * d4 >> 23, s3[c5 + 4 * o3 + 2] = s3[c5 + 4 * o3 + 2] * d4 >> 23);
        }
        t2 += a3;
      }
    }
    function vn2(e6, t2, n3, r3, i3) {
      for (; 0 < r3--; ) {
        var a3;
        for (a3 = 0; a3 < n3; ++a3) {
          var o3 = e6[t2 + 2 * a3 + 0], s3 = 15 & (l4 = e6[t2 + 2 * a3 + 1]), c5 = 4369 * s3, l4 = (240 & l4 | l4 >> 4) * c5 >> 16;
          e6[t2 + 2 * a3 + 0] = (240 & o3 | o3 >> 4) * c5 >> 16 & 240 | (15 & o3 | o3 << 4) * c5 >> 16 >> 4 & 15, e6[t2 + 2 * a3 + 1] = 240 & l4 | s3;
        }
        t2 += i3;
      }
    }
    function yn2(e6, t2, n3, r3, i3, a3, o3, s3) {
      var c5, l4, u4 = 255;
      for (l4 = 0; l4 < i3; ++l4) {
        for (c5 = 0; c5 < r3; ++c5) {
          var d4 = e6[t2 + c5];
          a3[o3 + 4 * c5] = d4, u4 &= d4;
        }
        t2 += n3, o3 += s3;
      }
      return u4 != 255;
    }
    function bn2(e6, t2, n3, r3, i3) {
      var a3;
      for (a3 = 0; a3 < i3; ++a3) n3[r3 + a3] = e6[t2 + a3] >> 8;
    }
    function Y2() {
      Er2 = _n2, Dr2 = vn2, Or2 = yn2, kr2 = bn2;
    }
    function xn2(n3, r3, i3) {
      e5[n3] = function(e6, n4, a3, o3, s3, c5, l4, u4, d4, f4, p3, m3, h3, g3, _3, v3, y3) {
        var b4, x4 = y3 - 1 >> 1, S4 = s3[c5 + 0] | l4[u4 + 0] << 16, C4 = d4[f4 + 0] | p3[m3 + 0] << 16;
        t(e6 != null);
        var w4 = 3 * S4 + C4 + 131074 >> 2;
        for (r3(e6[n4 + 0], 255 & w4, w4 >> 16, h3, g3), a3 != null && (w4 = 3 * C4 + S4 + 131074 >> 2, r3(a3[o3 + 0], 255 & w4, w4 >> 16, _3, v3)), b4 = 1; b4 <= x4; ++b4) {
          var T3 = s3[c5 + b4] | l4[u4 + b4] << 16, E3 = d4[f4 + b4] | p3[m3 + b4] << 16, D3 = S4 + T3 + C4 + E3 + 524296, O3 = D3 + 2 * (T3 + C4) >> 3;
          w4 = O3 + S4 >> 1, S4 = (D3 = D3 + 2 * (S4 + E3) >> 3) + T3 >> 1, r3(e6[n4 + 2 * b4 - 1], 255 & w4, w4 >> 16, h3, g3 + (2 * b4 - 1) * i3), r3(e6[n4 + 2 * b4 - 0], 255 & S4, S4 >> 16, h3, g3 + (2 * b4 - 0) * i3), a3 != null && (w4 = D3 + C4 >> 1, S4 = O3 + E3 >> 1, r3(a3[o3 + 2 * b4 - 1], 255 & w4, w4 >> 16, _3, v3 + (2 * b4 - 1) * i3), r3(a3[o3 + 2 * b4 + 0], 255 & S4, S4 >> 16, _3, v3 + (2 * b4 + 0) * i3)), S4 = T3, C4 = E3;
        }
        1 & y3 || (w4 = 3 * S4 + C4 + 131074 >> 2, r3(e6[n4 + y3 - 1], 255 & w4, w4 >> 16, h3, g3 + (y3 - 1) * i3), a3 != null && (w4 = 3 * C4 + S4 + 131074 >> 2, r3(a3[o3 + y3 - 1], 255 & w4, w4 >> 16, _3, v3 + (y3 - 1) * i3)));
      };
    }
    function Sn2() {
      bi2[zr2] = xi2, bi2[Br2] = Ci2, bi2[Vr2] = Si2, bi2[Hr2] = wi2, bi2[Ur2] = Ti2, bi2[Wr2] = Ei2, bi2[Gr2] = Di2, bi2[Kr2] = Ci2, bi2[qr2] = wi2, bi2[Jr2] = Ti2, bi2[Yr2] = Ei2;
    }
    function Cn2(e6) {
      return e6 & ~Ni2 ? 0 > e6 ? 0 : 255 : e6 >> Mi2;
    }
    function wn2(e6, t2) {
      return Cn2((19077 * e6 >> 8) + (26149 * t2 >> 8) - 14234);
    }
    function Tn2(e6, t2, n3) {
      return Cn2((19077 * e6 >> 8) - (6419 * t2 >> 8) - (13320 * n3 >> 8) + 8708);
    }
    function En2(e6, t2) {
      return Cn2((19077 * e6 >> 8) + (33050 * t2 >> 8) - 17685);
    }
    function Dn2(e6, t2, n3, r3, i3) {
      r3[i3 + 0] = wn2(e6, n3), r3[i3 + 1] = Tn2(e6, t2, n3), r3[i3 + 2] = En2(e6, t2);
    }
    function On2(e6, t2, n3, r3, i3) {
      r3[i3 + 0] = En2(e6, t2), r3[i3 + 1] = Tn2(e6, t2, n3), r3[i3 + 2] = wn2(e6, n3);
    }
    function kn2(e6, t2, n3, r3, i3) {
      var a3 = Tn2(e6, t2, n3);
      t2 = a3 << 3 & 224 | En2(e6, t2) >> 3, r3[i3 + 0] = 248 & wn2(e6, n3) | a3 >> 5, r3[i3 + 1] = t2;
    }
    function An2(e6, t2, n3, r3, i3) {
      var a3 = 240 & En2(e6, t2) | 15;
      r3[i3 + 0] = 240 & wn2(e6, n3) | Tn2(e6, t2, n3) >> 4, r3[i3 + 1] = a3;
    }
    function jn2(e6, t2, n3, r3, i3) {
      r3[i3 + 0] = 255, Dn2(e6, t2, n3, r3, i3 + 1);
    }
    function Mn2(e6, t2, n3, r3, i3) {
      On2(e6, t2, n3, r3, i3), r3[i3 + 3] = 255;
    }
    function Nn2(e6, t2, n3, r3, i3) {
      Dn2(e6, t2, n3, r3, i3), r3[i3 + 3] = 255;
    }
    function Pn2(t2, n3, r3) {
      e5[t2] = function(e6, t3, i3, a3, o3, s3, c5, l4, u4) {
        for (var d4 = l4 + (-2 & u4) * r3; l4 != d4; ) n3(e6[t3 + 0], i3[a3 + 0], o3[s3 + 0], c5, l4), n3(e6[t3 + 1], i3[a3 + 0], o3[s3 + 0], c5, l4 + r3), t3 += 2, ++a3, ++s3, l4 += 2 * r3;
        1 & u4 && n3(e6[t3 + 0], i3[a3 + 0], o3[s3 + 0], c5, l4);
      };
    }
    function Fn2(e6, t2, n3) {
      return n3 == 0 ? e6 == 0 ? t2 == 0 ? 6 : 5 : t2 == 0 ? 4 : 0 : n3;
    }
    function In2(e6, t2, n3, r3, i3) {
      switch (e6 >>> 30) {
        case 3:
          lr2(t2, n3, r3, i3, 0);
          break;
        case 2:
          ur2(t2, n3, r3, i3);
          break;
        case 1:
          fr2(t2, n3, r3, i3);
      }
    }
    function Ln2(e6, t2) {
      var n3, a3, o3 = t2.M, s3 = t2.Nb, c5 = e6.oc, l4 = e6.pc + 40, u4 = e6.oc, d4 = e6.pc + 584, f4 = e6.oc, p3 = e6.pc + 600;
      for (n3 = 0; 16 > n3; ++n3) c5[l4 + 32 * n3 - 1] = 129;
      for (n3 = 0; 8 > n3; ++n3) u4[d4 + 32 * n3 - 1] = 129, f4[p3 + 32 * n3 - 1] = 129;
      for (0 < o3 ? c5[l4 - 1 - 32] = u4[d4 - 1 - 32] = f4[p3 - 1 - 32] = 129 : (i2(c5, l4 - 32 - 1, 127, 21), i2(u4, d4 - 32 - 1, 127, 9), i2(f4, p3 - 32 - 1, 127, 9)), a3 = 0; a3 < e6.za; ++a3) {
        var m3 = t2.ya[t2.aa + a3];
        if (0 < a3) {
          for (n3 = -1; 16 > n3; ++n3) r2(c5, l4 + 32 * n3 - 4, c5, l4 + 32 * n3 + 12, 4);
          for (n3 = -1; 8 > n3; ++n3) r2(u4, d4 + 32 * n3 - 4, u4, d4 + 32 * n3 + 4, 4), r2(f4, p3 + 32 * n3 - 4, f4, p3 + 32 * n3 + 4, 4);
        }
        var h3 = e6.Gd, g3 = e6.Hd + a3, _3 = m3.ad, v3 = m3.Hc;
        if (0 < o3 && (r2(c5, l4 - 32, h3[g3].y, 0, 16), r2(u4, d4 - 32, h3[g3].f, 0, 8), r2(f4, p3 - 32, h3[g3].ea, 0, 8)), m3.Za) {
          var y3 = c5, b4 = l4 - 32 + 16;
          for (0 < o3 && (a3 >= e6.za - 1 ? i2(y3, b4, h3[g3].y[15], 4) : r2(y3, b4, h3[g3 + 1].y, 0, 4)), n3 = 0; 4 > n3; n3++) y3[b4 + 128 + n3] = y3[b4 + 256 + n3] = y3[b4 + 384 + n3] = y3[b4 + 0 + n3];
          for (n3 = 0; 16 > n3; ++n3, v3 <<= 2) y3 = c5, b4 = l4 + Vi2[n3], hi2[m3.Ob[n3]](y3, b4), In2(v3, _3, 16 * n3, y3, b4);
        } else if (y3 = Fn2(a3, o3, m3.Ob[0]), mi2[y3](c5, l4), v3 != 0) for (n3 = 0; 16 > n3; ++n3, v3 <<= 2) In2(v3, _3, 16 * n3, c5, l4 + Vi2[n3]);
        for (n3 = m3.Gc, y3 = Fn2(a3, o3, m3.Dd), gi2[y3](u4, d4), gi2[y3](f4, p3), v3 = _3, y3 = u4, b4 = d4, 255 & (m3 = 0 | n3) && (170 & m3 ? dr2(v3, 256, y3, b4) : pr2(v3, 256, y3, b4)), m3 = f4, v3 = p3, 255 & (n3 >>= 8) && (170 & n3 ? dr2(_3, 320, m3, v3) : pr2(_3, 320, m3, v3)), o3 < e6.Ub - 1 && (r2(h3[g3].y, 0, c5, l4 + 480, 16), r2(h3[g3].f, 0, u4, d4 + 224, 8), r2(h3[g3].ea, 0, f4, p3 + 224, 8)), n3 = 8 * s3 * e6.B, h3 = e6.sa, g3 = e6.ta + 16 * a3 + 16 * s3 * e6.R, _3 = e6.qa, m3 = e6.ra + 8 * a3 + n3, v3 = e6.Ha, y3 = e6.Ia + 8 * a3 + n3, n3 = 0; 16 > n3; ++n3) r2(h3, g3 + n3 * e6.R, c5, l4 + 32 * n3, 16);
        for (n3 = 0; 8 > n3; ++n3) r2(_3, m3 + n3 * e6.B, u4, d4 + 32 * n3, 8), r2(v3, y3 + n3 * e6.B, f4, p3 + 32 * n3, 8);
      }
    }
    function Rn2(e6, r3, i3, a3, o3, s3, c5, l4, u4) {
      var d4 = [0], f4 = [0], p3 = 0, m3 = u4 == null ? 0 : u4.kd, h3 = u4 ?? new cn2();
      if (e6 == null || 12 > i3) return 7;
      h3.data = e6, h3.w = r3, h3.ha = i3, r3 = [r3], i3 = [i3], h3.gb = [h3.gb];
      t: {
        var g3 = r3, v3 = i3, y3 = h3.gb;
        if (t(e6 != null), t(v3 != null), t(y3 != null), y3[0] = 0, 12 <= v3[0] && !n2(e6, g3[0], "RIFF")) {
          if (n2(e6, g3[0] + 8, "WEBP")) {
            y3 = 3;
            break t;
          }
          var b4 = M2(e6, g3[0] + 4);
          if (12 > b4 || 4294967286 < b4) {
            y3 = 3;
            break t;
          }
          if (m3 && b4 > v3[0] - 8) {
            y3 = 7;
            break t;
          }
          y3[0] = b4, g3[0] += 12, v3[0] -= 12;
        }
        y3 = 0;
      }
      if (y3 != 0) return y3;
      for (b4 = 0 < h3.gb[0], i3 = i3[0]; ; ) {
        t: {
          var S4 = e6;
          v3 = r3, y3 = i3;
          var C4 = d4, w4 = f4, T3 = g3 = [0];
          if ((O3 = p3 = [p3])[0] = 0, 8 > y3[0]) y3 = 7;
          else {
            if (!n2(S4, v3[0], "VP8X")) {
              if (M2(S4, v3[0] + 4) != 10) {
                y3 = 3;
                break t;
              }
              if (18 > y3[0]) {
                y3 = 7;
                break t;
              }
              var E3 = M2(S4, v3[0] + 8), D3 = 1 + j2(S4, v3[0] + 12);
              if (2147483648 <= D3 * (S4 = 1 + j2(S4, v3[0] + 15))) {
                y3 = 3;
                break t;
              }
              T3 != null && (T3[0] = E3), C4 != null && (C4[0] = D3), w4 != null && (w4[0] = S4), v3[0] += 18, y3[0] -= 18, O3[0] = 1;
            }
            y3 = 0;
          }
        }
        if (p3 = p3[0], g3 = g3[0], y3 != 0) return y3;
        if (v3 = !!(2 & g3), !b4 && p3) return 3;
        if (s3 != null && (s3[0] = !!(16 & g3)), c5 != null && (c5[0] = v3), l4 != null && (l4[0] = 0), c5 = d4[0], g3 = f4[0], p3 && v3 && u4 == null) {
          y3 = 0;
          break;
        }
        if (4 > i3) {
          y3 = 7;
          break;
        }
        if (b4 && p3 || !b4 && !p3 && !n2(e6, r3[0], "ALPH")) {
          i3 = [i3], h3.na = [h3.na], h3.P = [h3.P], h3.Sa = [h3.Sa];
          t: {
            E3 = e6, y3 = r3, b4 = i3;
            var O3 = h3.gb;
            C4 = h3.na, w4 = h3.P, T3 = h3.Sa, D3 = 22, t(E3 != null), t(b4 != null), S4 = y3[0];
            var k3 = b4[0];
            for (t(C4 != null), t(T3 != null), C4[0] = null, w4[0] = null, T3[0] = 0; ; ) {
              if (y3[0] = S4, b4[0] = k3, 8 > k3) {
                y3 = 7;
                break t;
              }
              var A3 = M2(E3, S4 + 4);
              if (4294967286 < A3) {
                y3 = 3;
                break t;
              }
              var N3 = 8 + A3 + 1 & -2;
              if (D3 += N3, 0 < O3 && D3 > O3) {
                y3 = 3;
                break t;
              }
              if (!n2(E3, S4, "VP8 ") || !n2(E3, S4, "VP8L")) {
                y3 = 0;
                break t;
              }
              if (k3[0] < N3) {
                y3 = 7;
                break t;
              }
              n2(E3, S4, "ALPH") || (C4[0] = E3, w4[0] = S4 + 8, T3[0] = A3), S4 += N3, k3 -= N3;
            }
          }
          if (i3 = i3[0], h3.na = h3.na[0], h3.P = h3.P[0], h3.Sa = h3.Sa[0], y3 != 0) break;
        }
        i3 = [i3], h3.Ja = [h3.Ja], h3.xa = [h3.xa];
        t: if (O3 = e6, y3 = r3, b4 = i3, C4 = h3.gb[0], w4 = h3.Ja, T3 = h3.xa, E3 = y3[0], S4 = !n2(O3, E3, "VP8 "), D3 = !n2(O3, E3, "VP8L"), t(O3 != null), t(b4 != null), t(w4 != null), t(T3 != null), 8 > b4[0]) y3 = 7;
        else {
          if (S4 || D3) {
            if (O3 = M2(O3, E3 + 4), 12 <= C4 && O3 > C4 - 12) {
              y3 = 3;
              break t;
            }
            if (m3 && O3 > b4[0] - 8) {
              y3 = 7;
              break t;
            }
            w4[0] = O3, y3[0] += 8, b4[0] -= 8, T3[0] = D3;
          } else T3[0] = 5 <= b4[0] && O3[E3 + 0] == 47 && !(O3[E3 + 4] >> 5), w4[0] = b4[0];
          y3 = 0;
        }
        if (i3 = i3[0], h3.Ja = h3.Ja[0], h3.xa = h3.xa[0], r3 = r3[0], y3 != 0) break;
        if (4294967286 < h3.Ja) return 3;
        if (l4 == null || v3 || (l4[0] = h3.xa ? 2 : 1), c5 = [c5], g3 = [g3], h3.xa) {
          if (5 > i3) {
            y3 = 7;
            break;
          }
          l4 = c5, m3 = g3, v3 = s3, e6 == null || 5 > i3 ? e6 = 0 : 5 <= i3 && e6[r3 + 0] == 47 && !(e6[r3 + 4] >> 5) ? (b4 = [0], O3 = [0], C4 = [0], _2(w4 = new x3(), e6, r3, i3), we2(w4, b4, O3, C4) ? (l4 != null && (l4[0] = b4[0]), m3 != null && (m3[0] = O3[0]), v3 != null && (v3[0] = C4[0]), e6 = 1) : e6 = 0) : e6 = 0;
        } else {
          if (10 > i3) {
            y3 = 7;
            break;
          }
          l4 = g3, e6 == null || 10 > i3 || !nt2(e6, r3 + 3, i3 - 3) ? e6 = 0 : (m3 = e6[r3 + 0] | e6[r3 + 1] << 8 | e6[r3 + 2] << 16, v3 = 16383 & (e6[r3 + 7] << 8 | e6[r3 + 6]), e6 = 16383 & (e6[r3 + 9] << 8 | e6[r3 + 8]), 1 & m3 || 3 < (m3 >> 1 & 7) || !(m3 >> 4 & 1) || m3 >> 5 >= h3.Ja || !v3 || !e6 ? e6 = 0 : (c5 && (c5[0] = v3), l4 && (l4[0] = e6), e6 = 1));
        }
        if (!e6 || (c5 = c5[0], g3 = g3[0], p3 && (d4[0] != c5 || f4[0] != g3))) return 3;
        u4 != null && (u4[0] = h3, u4.offset = r3 - u4.w, t(4294967286 > r3 - u4.w), t(u4.offset == u4.ha - i3));
        break;
      }
      return y3 == 0 || y3 == 7 && p3 && u4 == null ? (s3 != null && (s3[0] |= h3.na != null && 0 < h3.na.length), a3 != null && (a3[0] = c5), o3 != null && (o3[0] = g3), 0) : y3;
    }
    function zn2(e6, t2, n3) {
      var r3 = t2.width, i3 = t2.height, a3 = 0, o3 = 0, s3 = r3, c5 = i3;
      if (t2.Da = e6 != null && 0 < e6.Da, t2.Da && (s3 = e6.cd, c5 = e6.bd, a3 = e6.v, o3 = e6.j, 11 > n3 || (a3 &= -2, o3 &= -2), 0 > a3 || 0 > o3 || 0 >= s3 || 0 >= c5 || a3 + s3 > r3 || o3 + c5 > i3)) return 0;
      if (t2.v = a3, t2.j = o3, t2.va = a3 + s3, t2.o = o3 + c5, t2.U = s3, t2.T = c5, t2.da = e6 != null && 0 < e6.da, t2.da) {
        if (!I2(s3, c5, n3 = [e6.ib], a3 = [e6.hb])) return 0;
        t2.ib = n3[0], t2.hb = a3[0];
      }
      return t2.ob = e6 != null && e6.ob, t2.Kb = e6 == null || !e6.Sd, t2.da && (t2.ob = t2.ib < 3 * r3 / 4 && t2.hb < 3 * i3 / 4, t2.Kb = 0), 1;
    }
    function Bn2(e6) {
      if (e6 == null) return 2;
      if (11 > e6.S) {
        var t2 = e6.f.RGBA;
        t2.fb += (e6.height - 1) * t2.A, t2.A = -t2.A;
      } else t2 = e6.f.kb, e6 = e6.height, t2.O += (e6 - 1) * t2.fa, t2.fa = -t2.fa, t2.N += (e6 - 1 >> 1) * t2.Ab, t2.Ab = -t2.Ab, t2.W += (e6 - 1 >> 1) * t2.Db, t2.Db = -t2.Db, t2.F != null && (t2.J += (e6 - 1) * t2.lb, t2.lb = -t2.lb);
      return 0;
    }
    function Vn2(e6, t2, n3, r3) {
      if (r3 == null || 0 >= e6 || 0 >= t2) return 2;
      if (n3 != null) {
        if (n3.Da) {
          var i3 = n3.cd, o3 = n3.bd, s3 = -2 & n3.v, c5 = -2 & n3.j;
          if (0 > s3 || 0 > c5 || 0 >= i3 || 0 >= o3 || s3 + i3 > e6 || c5 + o3 > t2) return 2;
          e6 = i3, t2 = o3;
        }
        if (n3.da) {
          if (!I2(e6, t2, i3 = [n3.ib], o3 = [n3.hb])) return 2;
          e6 = i3[0], t2 = o3[0];
        }
      }
      r3.width = e6, r3.height = t2;
      t: {
        var l4 = r3.width, u4 = r3.height;
        if (e6 = r3.S, 0 >= l4 || 0 >= u4 || !(e6 >= zr2 && 13 > e6)) e6 = 2;
        else {
          if (0 >= r3.Rd && r3.sd == null) {
            s3 = o3 = i3 = t2 = 0;
            var d4 = (c5 = l4 * Gi2[e6]) * u4;
            if (11 > e6 || (o3 = (u4 + 1) / 2 * (t2 = (l4 + 1) / 2), e6 == 12 && (s3 = (i3 = l4) * u4)), (u4 = a2(d4 + 2 * o3 + s3)) == null) {
              e6 = 1;
              break t;
            }
            r3.sd = u4, 11 > e6 ? ((l4 = r3.f.RGBA).eb = u4, l4.fb = 0, l4.A = c5, l4.size = d4) : ((l4 = r3.f.kb).y = u4, l4.O = 0, l4.fa = c5, l4.Fd = d4, l4.f = u4, l4.N = 0 + d4, l4.Ab = t2, l4.Cd = o3, l4.ea = u4, l4.W = 0 + d4 + o3, l4.Db = t2, l4.Ed = o3, e6 == 12 && (l4.F = u4, l4.J = 0 + d4 + 2 * o3), l4.Tc = s3, l4.lb = i3);
          }
          if (t2 = 1, i3 = r3.S, o3 = r3.width, s3 = r3.height, i3 >= zr2 && 13 > i3) if (11 > i3) e6 = r3.f.RGBA, t2 &= (c5 = Math.abs(e6.A)) * (s3 - 1) + o3 <= e6.size, t2 &= c5 >= o3 * Gi2[i3], t2 &= e6.eb != null;
          else {
            e6 = r3.f.kb, c5 = (o3 + 1) / 2, d4 = (s3 + 1) / 2, l4 = Math.abs(e6.fa), u4 = Math.abs(e6.Ab);
            var f4 = Math.abs(e6.Db), p3 = Math.abs(e6.lb), m3 = p3 * (s3 - 1) + o3;
            t2 &= l4 * (s3 - 1) + o3 <= e6.Fd, t2 &= u4 * (d4 - 1) + c5 <= e6.Cd, t2 = (t2 &= f4 * (d4 - 1) + c5 <= e6.Ed) & l4 >= o3 & u4 >= c5 & f4 >= c5, t2 &= e6.y != null, t2 &= e6.f != null, t2 &= e6.ea != null, i3 == 12 && (t2 &= p3 >= o3, t2 &= m3 <= e6.Tc, t2 &= e6.F != null);
          }
          else t2 = 0;
          e6 = t2 ? 0 : 2;
        }
      }
      return e6 != 0 || n3 != null && n3.fd && (e6 = Bn2(r3)), e6;
    }
    var Hn2 = 64, Un2 = [
      0,
      1,
      3,
      7,
      15,
      31,
      63,
      127,
      255,
      511,
      1023,
      2047,
      4095,
      8191,
      16383,
      32767,
      65535,
      131071,
      262143,
      524287,
      1048575,
      2097151,
      4194303,
      8388607,
      16777215
    ], Wn2 = 24, Gn2 = 32, Kn2 = 8, qn2 = [
      0,
      0,
      1,
      1,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7
    ];
    z2("Predictor0", "PredictorAdd0"), e5.Predictor0 = function() {
      return 4278190080;
    }, e5.Predictor1 = function(e6) {
      return e6;
    }, e5.Predictor2 = function(e6, t2, n3) {
      return t2[n3 + 0];
    }, e5.Predictor3 = function(e6, t2, n3) {
      return t2[n3 + 1];
    }, e5.Predictor4 = function(e6, t2, n3) {
      return t2[n3 - 1];
    }, e5.Predictor5 = function(e6, t2, n3) {
      return V2(V2(e6, t2[n3 + 1]), t2[n3 + 0]);
    }, e5.Predictor6 = function(e6, t2, n3) {
      return V2(e6, t2[n3 - 1]);
    }, e5.Predictor7 = function(e6, t2, n3) {
      return V2(e6, t2[n3 + 0]);
    }, e5.Predictor8 = function(e6, t2, n3) {
      return V2(t2[n3 - 1], t2[n3 + 0]);
    }, e5.Predictor9 = function(e6, t2, n3) {
      return V2(t2[n3 + 0], t2[n3 + 1]);
    }, e5.Predictor10 = function(e6, t2, n3) {
      return V2(V2(e6, t2[n3 - 1]), V2(t2[n3 + 0], t2[n3 + 1]));
    }, e5.Predictor11 = function(e6, t2, n3) {
      var r3 = t2[n3 + 0];
      return 0 >= te2(r3 >> 24 & 255, e6 >> 24 & 255, (t2 = t2[n3 - 1]) >> 24 & 255) + te2(r3 >> 16 & 255, e6 >> 16 & 255, t2 >> 16 & 255) + te2(r3 >> 8 & 255, e6 >> 8 & 255, t2 >> 8 & 255) + te2(255 & r3, 255 & e6, 255 & t2) ? r3 : e6;
    }, e5.Predictor12 = function(e6, t2, n3) {
      var r3 = t2[n3 + 0];
      return (ee2((e6 >> 24 & 255) + (r3 >> 24 & 255) - ((t2 = t2[n3 - 1]) >> 24 & 255)) << 24 | ee2((e6 >> 16 & 255) + (r3 >> 16 & 255) - (t2 >> 16 & 255)) << 16 | ee2((e6 >> 8 & 255) + (r3 >> 8 & 255) - (t2 >> 8 & 255)) << 8 | ee2((255 & e6) + (255 & r3) - (255 & t2))) >>> 0;
    }, e5.Predictor13 = function(e6, t2, n3) {
      var r3 = t2[n3 - 1];
      return (H2((e6 = V2(e6, t2[n3 + 0])) >> 24 & 255, r3 >> 24 & 255) << 24 | H2(e6 >> 16 & 255, r3 >> 16 & 255) << 16 | H2(e6 >> 8 & 255, r3 >> 8 & 255) << 8 | H2(255 & e6, 255 & r3)) >>> 0;
    };
    var Jn2 = e5.PredictorAdd0;
    e5.PredictorAdd1 = U2, z2("Predictor2", "PredictorAdd2"), z2("Predictor3", "PredictorAdd3"), z2("Predictor4", "PredictorAdd4"), z2("Predictor5", "PredictorAdd5"), z2("Predictor6", "PredictorAdd6"), z2("Predictor7", "PredictorAdd7"), z2("Predictor8", "PredictorAdd8"), z2("Predictor9", "PredictorAdd9"), z2("Predictor10", "PredictorAdd10"), z2("Predictor11", "PredictorAdd11"), z2("Predictor12", "PredictorAdd12"), z2("Predictor13", "PredictorAdd13");
    var Yn2 = e5.PredictorAdd2;
    ae2("ColorIndexInverseTransform", "MapARGB", "32b", function(e6) {
      return e6 >> 8 & 255;
    }, function(e6) {
      return e6;
    }), ae2("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(e6) {
      return e6;
    }, function(e6) {
      return e6 >> 8 & 255;
    });
    var Xn2, Zn2 = e5.ColorIndexInverseTransform, Qn2 = e5.MapARGB, $n2 = e5.VP8LColorIndexInverseTransformAlpha, er2 = e5.MapAlpha, tr2 = e5.VP8LPredictorsAdd = [];
    tr2.length = 16, (e5.VP8LPredictors = []).length = 16, (e5.VP8LPredictorsAdd_C = []).length = 16, (e5.VP8LPredictors_C = []).length = 16;
    var nr2, rr2, ir2, ar2, or2, sr2, cr2, lr2, ur2, dr2, fr2, pr2, mr2, hr2, gr2, _r2, vr2, yr2, br2, xr2, Sr2, Cr2, wr2, Tr2, Er2, Dr2, Or2, kr2, Ar2 = a2(511), jr2 = a2(2041), Mr2 = a2(225), Nr2 = a2(767), Pr2 = 0, Fr2 = jr2, Ir2 = Mr2, Lr2 = Nr2, Rr2 = Ar2, zr2 = 0, Br2 = 1, Vr2 = 2, Hr2 = 3, Ur2 = 4, Wr2 = 5, Gr2 = 6, Kr2 = 7, qr2 = 8, Jr2 = 9, Yr2 = 10, Xr2 = [
      2,
      3,
      7
    ], Zr2 = [
      3,
      3,
      11
    ], Qr2 = [
      280,
      256,
      256,
      256,
      40
    ], $r2 = [
      0,
      1,
      1,
      1,
      0
    ], ei2 = [
      17,
      18,
      0,
      1,
      2,
      3,
      4,
      5,
      16,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ], ti2 = [
      24,
      7,
      23,
      25,
      40,
      6,
      39,
      41,
      22,
      26,
      38,
      42,
      56,
      5,
      55,
      57,
      21,
      27,
      54,
      58,
      37,
      43,
      72,
      4,
      71,
      73,
      20,
      28,
      53,
      59,
      70,
      74,
      36,
      44,
      88,
      69,
      75,
      52,
      60,
      3,
      87,
      89,
      19,
      29,
      86,
      90,
      35,
      45,
      68,
      76,
      85,
      91,
      51,
      61,
      104,
      2,
      103,
      105,
      18,
      30,
      102,
      106,
      34,
      46,
      84,
      92,
      67,
      77,
      101,
      107,
      50,
      62,
      120,
      1,
      119,
      121,
      83,
      93,
      17,
      31,
      100,
      108,
      66,
      78,
      118,
      122,
      33,
      47,
      117,
      123,
      49,
      63,
      99,
      109,
      82,
      94,
      0,
      116,
      124,
      65,
      79,
      16,
      32,
      98,
      110,
      48,
      115,
      125,
      81,
      95,
      64,
      114,
      126,
      97,
      111,
      80,
      113,
      127,
      96,
      112
    ], ni2 = [
      2954,
      2956,
      2958,
      2962,
      2970,
      2986,
      3018,
      3082,
      3212,
      3468,
      3980,
      5004
    ], ri2 = 8, ii2 = [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      17,
      18,
      19,
      20,
      20,
      21,
      21,
      22,
      22,
      23,
      23,
      24,
      25,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      91,
      93,
      95,
      96,
      98,
      100,
      101,
      102,
      104,
      106,
      108,
      110,
      112,
      114,
      116,
      118,
      122,
      124,
      126,
      128,
      130,
      132,
      134,
      136,
      138,
      140,
      143,
      145,
      148,
      151,
      154,
      157
    ], ai2 = [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      60,
      62,
      64,
      66,
      68,
      70,
      72,
      74,
      76,
      78,
      80,
      82,
      84,
      86,
      88,
      90,
      92,
      94,
      96,
      98,
      100,
      102,
      104,
      106,
      108,
      110,
      112,
      114,
      116,
      119,
      122,
      125,
      128,
      131,
      134,
      137,
      140,
      143,
      146,
      149,
      152,
      155,
      158,
      161,
      164,
      167,
      170,
      173,
      177,
      181,
      185,
      189,
      193,
      197,
      201,
      205,
      209,
      213,
      217,
      221,
      225,
      229,
      234,
      239,
      245,
      249,
      254,
      259,
      264,
      269,
      274,
      279,
      284
    ], oi2 = null, si2 = [
      [
        173,
        148,
        140,
        0
      ],
      [
        176,
        155,
        140,
        135,
        0
      ],
      [
        180,
        157,
        141,
        134,
        130,
        0
      ],
      [
        254,
        254,
        243,
        230,
        196,
        177,
        153,
        140,
        133,
        130,
        129,
        0
      ]
    ], ci2 = [
      0,
      1,
      4,
      8,
      5,
      2,
      3,
      6,
      9,
      12,
      13,
      10,
      7,
      11,
      14,
      15
    ], li2 = [
      -0,
      1,
      -1,
      2,
      -2,
      3,
      4,
      6,
      -3,
      5,
      -4,
      -5,
      -6,
      7,
      -7,
      8,
      -8,
      -9
    ], ui2 = [
      [
        [
          [
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128
          ],
          [
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128
          ],
          [
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128
          ]
        ],
        [
          [
            253,
            136,
            254,
            255,
            228,
            219,
            128,
            128,
            128,
            128,
            128
          ],
          [
            189,
            129,
            242,
            255,
            227,
            213,
            255,
            219,
            128,
            128,
            128
          ],
          [
            106,
            126,
            227,
            252,
            214,
            209,
            255,
            255,
            128,
            128,
            128
          ]
        ],
        [
          [
            1,
            98,
            248,
            255,
            236,
            226,
            255,
            255,
            128,
            128,
            128
          ],
          [
            181,
            133,
            238,
            254,
            221,
            234,
            255,
            154,
            128,
            128,
            128
          ],
          [
            78,
            134,
            202,
            247,
            198,
            180,
            255,
            219,
            128,
            128,
            128
          ]
        ],
        [
          [
            1,
            185,
            249,
            255,
            243,
            255,
            128,
            128,
            128,
            128,
            128
          ],
          [
            184,
            150,
            247,
            255,
            236,
            224,
            128,
            128,
            128,
            128,
            128
          ],
          [
            77,
            110,
            216,
            255,
            236,
            230,
            128,
            128,
            128,
            128,
            128
          ]
        ],
        [
          [
            1,
            101,
            251,
            255,
            241,
            255,
            128,
            128,
            128,
            128,
            128
          ],
          [
            170,
            139,
            241,
            252,
            236,
            209,
            255,
            255,
            128,
            128,
            128
          ],
          [
            37,
            116,
            196,
            243,
            228,
            255,
            255,
            255,
            128,
            128,
            128
          ]
        ],
        [
          [
            1,
            204,
            254,
            255,
            245,
            255,
            128,
            128,
            128,
            128,
            128
          ],
          [
            207,
            160,
            250,
            255,
            238,
            128,
            128,
            128,
            128,
            128,
            128
          ],
          [
            102,
            103,
            231,
            255,
            211,
            171,
            128,
            128,
            128,
            128,
            128
          ]
        ],
        [
          [
            1,
            152,
            252,
            255,
            240,
            255,
            128,
            128,
            128,
            128,
            128
          ],
          [
            177,
            135,
            243,
            255,
            234,
            225,
            128,
            128,
            128,
            128,
            128
          ],
          [
            80,
            129,
            211,
            255,
            194,
            224,
            128,
            128,
            128,
            128,
            128
          ]
        ],
        [
          [
            1,
            1,
            255,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128
          ],
          [
            246,
            1,
            255,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128
          ],
          [
            255,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128
          ]
        ]
      ],
      [
        [
          [
            198,
            35,
            237,
            223,
            193,
            187,
            162,
            160,
            145,
            155,
            62
          ],
          [
            131,
            45,
            198,
            221,
            172,
            176,
            220,
            157,
            252,
            221,
            1
          ],
          [
            68,
            47,
            146,
            208,
            149,
            167,
            221,
            162,
            255,
            223,
            128
          ]
        ],
        [
          [
            1,
            149,
            241,
            255,
            221,
            224,
            255,
            255,
            128,
            128,
            128
          ],
          [
            184,
            141,
            234,
            253,
            222,
            220,
            255,
            199,
            128,
            128,
            128
          ],
          [
            81,
            99,
            181,
            242,
            176,
            190,
            249,
            202,
            255,
            255,
            128
          ]
        ],
        [
          [
            1,
            129,
            232,
            253,
            214,
            197,
            242,
            196,
            255,
            255,
            128
          ],
          [
            99,
            121,
            210,
            250,
            201,
            198,
            255,
            202,
            128,
            128,
            128
          ],
          [
            23,
            91,
            163,
            242,
            170,
            187,
            247,
            210,
            255,
            255,
            128
          ]
        ],
        [
          [
            1,
            200,
            246,
            255,
            234,
            255,
            128,
            128,
            128,
            128,
            128
          ],
          [
            109,
            178,
            241,
            255,
            231,
            245,
            255,
            255,
            128,
            128,
            128
          ],
          [
            44,
            130,
            201,
            253,
            205,
            192,
            255,
            255,
            128,
            128,
            128
          ]
        ],
        [
          [
            1,
            132,
            239,
            251,
            219,
            209,
            255,
            165,
            128,
            128,
            128
          ],
          [
            94,
            136,
            225,
            251,
            218,
            190,
            255,
            255,
            128,
            128,
            128
          ],
          [
            22,
            100,
            174,
            245,
            186,
            161,
            255,
            199,
            128,
            128,
            128
          ]
        ],
        [
          [
            1,
            182,
            249,
            255,
            232,
            235,
            128,
            128,
            128,
            128,
            128
          ],
          [
            124,
            143,
            241,
            255,
            227,
            234,
            128,
            128,
            128,
            128,
            128
          ],
          [
            35,
            77,
            181,
            251,
            193,
            211,
            255,
            205,
            128,
            128,
            128
          ]
        ],
        [
          [
            1,
            157,
            247,
            255,
            236,
            231,
            255,
            255,
            128,
            128,
            128
          ],
          [
            121,
            141,
            235,
            255,
            225,
            227,
            255,
            255,
            128,
            128,
            128
          ],
          [
            45,
            99,
            188,
            251,
            195,
            217,
            255,
            224,
            128,
            128,
            128
          ]
        ],
        [
          [
            1,
            1,
            251,
            255,
            213,
            255,
            128,
            128,
            128,
            128,
            128
          ],
          [
            203,
            1,
            248,
            255,
            255,
            128,
            128,
            128,
            128,
            128,
            128
          ],
          [
            137,
            1,
            177,
            255,
            224,
            255,
            128,
            128,
            128,
            128,
            128
          ]
        ]
      ],
      [
        [
          [
            253,
            9,
            248,
            251,
            207,
            208,
            255,
            192,
            128,
            128,
            128
          ],
          [
            175,
            13,
            224,
            243,
            193,
            185,
            249,
            198,
            255,
            255,
            128
          ],
          [
            73,
            17,
            171,
            221,
            161,
            179,
            236,
            167,
            255,
            234,
            128
          ]
        ],
        [
          [
            1,
            95,
            247,
            253,
            212,
            183,
            255,
            255,
            128,
            128,
            128
          ],
          [
            239,
            90,
            244,
            250,
            211,
            209,
            255,
            255,
            128,
            128,
            128
          ],
          [
            155,
            77,
            195,
            248,
            188,
            195,
            255,
            255,
            128,
            128,
            128
          ]
        ],
        [
          [
            1,
            24,
            239,
            251,
            218,
            219,
            255,
            205,
            128,
            128,
            128
          ],
          [
            201,
            51,
            219,
            255,
            196,
            186,
            128,
            128,
            128,
            128,
            128
          ],
          [
            69,
            46,
            190,
            239,
            201,
            218,
            255,
            228,
            128,
            128,
            128
          ]
        ],
        [
          [
            1,
            191,
            251,
            255,
            255,
            128,
            128,
            128,
            128,
            128,
            128
          ],
          [
            223,
            165,
            249,
            255,
            213,
            255,
            128,
            128,
            128,
            128,
            128
          ],
          [
            141,
            124,
            248,
            255,
            255,
            128,
            128,
            128,
            128,
            128,
            128
          ]
        ],
        [
          [
            1,
            16,
            248,
            255,
            255,
            128,
            128,
            128,
            128,
            128,
            128
          ],
          [
            190,
            36,
            230,
            255,
            236,
            255,
            128,
            128,
            128,
            128,
            128
          ],
          [
            149,
            1,
            255,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128
          ]
        ],
        [
          [
            1,
            226,
            255,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128
          ],
          [
            247,
            192,
            255,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128
          ],
          [
            240,
            128,
            255,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128
          ]
        ],
        [
          [
            1,
            134,
            252,
            255,
            255,
            128,
            128,
            128,
            128,
            128,
            128
          ],
          [
            213,
            62,
            250,
            255,
            255,
            128,
            128,
            128,
            128,
            128,
            128
          ],
          [
            55,
            93,
            255,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128
          ]
        ],
        [
          [
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128
          ],
          [
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128
          ],
          [
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128
          ]
        ]
      ],
      [
        [
          [
            202,
            24,
            213,
            235,
            186,
            191,
            220,
            160,
            240,
            175,
            255
          ],
          [
            126,
            38,
            182,
            232,
            169,
            184,
            228,
            174,
            255,
            187,
            128
          ],
          [
            61,
            46,
            138,
            219,
            151,
            178,
            240,
            170,
            255,
            216,
            128
          ]
        ],
        [
          [
            1,
            112,
            230,
            250,
            199,
            191,
            247,
            159,
            255,
            255,
            128
          ],
          [
            166,
            109,
            228,
            252,
            211,
            215,
            255,
            174,
            128,
            128,
            128
          ],
          [
            39,
            77,
            162,
            232,
            172,
            180,
            245,
            178,
            255,
            255,
            128
          ]
        ],
        [
          [
            1,
            52,
            220,
            246,
            198,
            199,
            249,
            220,
            255,
            255,
            128
          ],
          [
            124,
            74,
            191,
            243,
            183,
            193,
            250,
            221,
            255,
            255,
            128
          ],
          [
            24,
            71,
            130,
            219,
            154,
            170,
            243,
            182,
            255,
            255,
            128
          ]
        ],
        [
          [
            1,
            182,
            225,
            249,
            219,
            240,
            255,
            224,
            128,
            128,
            128
          ],
          [
            149,
            150,
            226,
            252,
            216,
            205,
            255,
            171,
            128,
            128,
            128
          ],
          [
            28,
            108,
            170,
            242,
            183,
            194,
            254,
            223,
            255,
            255,
            128
          ]
        ],
        [
          [
            1,
            81,
            230,
            252,
            204,
            203,
            255,
            192,
            128,
            128,
            128
          ],
          [
            123,
            102,
            209,
            247,
            188,
            196,
            255,
            233,
            128,
            128,
            128
          ],
          [
            20,
            95,
            153,
            243,
            164,
            173,
            255,
            203,
            128,
            128,
            128
          ]
        ],
        [
          [
            1,
            222,
            248,
            255,
            216,
            213,
            128,
            128,
            128,
            128,
            128
          ],
          [
            168,
            175,
            246,
            252,
            235,
            205,
            255,
            255,
            128,
            128,
            128
          ],
          [
            47,
            116,
            215,
            255,
            211,
            212,
            255,
            255,
            128,
            128,
            128
          ]
        ],
        [
          [
            1,
            121,
            236,
            253,
            212,
            214,
            255,
            255,
            128,
            128,
            128
          ],
          [
            141,
            84,
            213,
            252,
            201,
            202,
            255,
            219,
            128,
            128,
            128
          ],
          [
            42,
            80,
            160,
            240,
            162,
            185,
            255,
            205,
            128,
            128,
            128
          ]
        ],
        [
          [
            1,
            1,
            255,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128
          ],
          [
            244,
            1,
            255,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128
          ],
          [
            238,
            1,
            255,
            128,
            128,
            128,
            128,
            128,
            128,
            128,
            128
          ]
        ]
      ]
    ], di2 = [
      [
        [
          231,
          120,
          48,
          89,
          115,
          113,
          120,
          152,
          112
        ],
        [
          152,
          179,
          64,
          126,
          170,
          118,
          46,
          70,
          95
        ],
        [
          175,
          69,
          143,
          80,
          85,
          82,
          72,
          155,
          103
        ],
        [
          56,
          58,
          10,
          171,
          218,
          189,
          17,
          13,
          152
        ],
        [
          114,
          26,
          17,
          163,
          44,
          195,
          21,
          10,
          173
        ],
        [
          121,
          24,
          80,
          195,
          26,
          62,
          44,
          64,
          85
        ],
        [
          144,
          71,
          10,
          38,
          171,
          213,
          144,
          34,
          26
        ],
        [
          170,
          46,
          55,
          19,
          136,
          160,
          33,
          206,
          71
        ],
        [
          63,
          20,
          8,
          114,
          114,
          208,
          12,
          9,
          226
        ],
        [
          81,
          40,
          11,
          96,
          182,
          84,
          29,
          16,
          36
        ]
      ],
      [
        [
          134,
          183,
          89,
          137,
          98,
          101,
          106,
          165,
          148
        ],
        [
          72,
          187,
          100,
          130,
          157,
          111,
          32,
          75,
          80
        ],
        [
          66,
          102,
          167,
          99,
          74,
          62,
          40,
          234,
          128
        ],
        [
          41,
          53,
          9,
          178,
          241,
          141,
          26,
          8,
          107
        ],
        [
          74,
          43,
          26,
          146,
          73,
          166,
          49,
          23,
          157
        ],
        [
          65,
          38,
          105,
          160,
          51,
          52,
          31,
          115,
          128
        ],
        [
          104,
          79,
          12,
          27,
          217,
          255,
          87,
          17,
          7
        ],
        [
          87,
          68,
          71,
          44,
          114,
          51,
          15,
          186,
          23
        ],
        [
          47,
          41,
          14,
          110,
          182,
          183,
          21,
          17,
          194
        ],
        [
          66,
          45,
          25,
          102,
          197,
          189,
          23,
          18,
          22
        ]
      ],
      [
        [
          88,
          88,
          147,
          150,
          42,
          46,
          45,
          196,
          205
        ],
        [
          43,
          97,
          183,
          117,
          85,
          38,
          35,
          179,
          61
        ],
        [
          39,
          53,
          200,
          87,
          26,
          21,
          43,
          232,
          171
        ],
        [
          56,
          34,
          51,
          104,
          114,
          102,
          29,
          93,
          77
        ],
        [
          39,
          28,
          85,
          171,
          58,
          165,
          90,
          98,
          64
        ],
        [
          34,
          22,
          116,
          206,
          23,
          34,
          43,
          166,
          73
        ],
        [
          107,
          54,
          32,
          26,
          51,
          1,
          81,
          43,
          31
        ],
        [
          68,
          25,
          106,
          22,
          64,
          171,
          36,
          225,
          114
        ],
        [
          34,
          19,
          21,
          102,
          132,
          188,
          16,
          76,
          124
        ],
        [
          62,
          18,
          78,
          95,
          85,
          57,
          50,
          48,
          51
        ]
      ],
      [
        [
          193,
          101,
          35,
          159,
          215,
          111,
          89,
          46,
          111
        ],
        [
          60,
          148,
          31,
          172,
          219,
          228,
          21,
          18,
          111
        ],
        [
          112,
          113,
          77,
          85,
          179,
          255,
          38,
          120,
          114
        ],
        [
          40,
          42,
          1,
          196,
          245,
          209,
          10,
          25,
          109
        ],
        [
          88,
          43,
          29,
          140,
          166,
          213,
          37,
          43,
          154
        ],
        [
          61,
          63,
          30,
          155,
          67,
          45,
          68,
          1,
          209
        ],
        [
          100,
          80,
          8,
          43,
          154,
          1,
          51,
          26,
          71
        ],
        [
          142,
          78,
          78,
          16,
          255,
          128,
          34,
          197,
          171
        ],
        [
          41,
          40,
          5,
          102,
          211,
          183,
          4,
          1,
          221
        ],
        [
          51,
          50,
          17,
          168,
          209,
          192,
          23,
          25,
          82
        ]
      ],
      [
        [
          138,
          31,
          36,
          171,
          27,
          166,
          38,
          44,
          229
        ],
        [
          67,
          87,
          58,
          169,
          82,
          115,
          26,
          59,
          179
        ],
        [
          63,
          59,
          90,
          180,
          59,
          166,
          93,
          73,
          154
        ],
        [
          40,
          40,
          21,
          116,
          143,
          209,
          34,
          39,
          175
        ],
        [
          47,
          15,
          16,
          183,
          34,
          223,
          49,
          45,
          183
        ],
        [
          46,
          17,
          33,
          183,
          6,
          98,
          15,
          32,
          183
        ],
        [
          57,
          46,
          22,
          24,
          128,
          1,
          54,
          17,
          37
        ],
        [
          65,
          32,
          73,
          115,
          28,
          128,
          23,
          128,
          205
        ],
        [
          40,
          3,
          9,
          115,
          51,
          192,
          18,
          6,
          223
        ],
        [
          87,
          37,
          9,
          115,
          59,
          77,
          64,
          21,
          47
        ]
      ],
      [
        [
          104,
          55,
          44,
          218,
          9,
          54,
          53,
          130,
          226
        ],
        [
          64,
          90,
          70,
          205,
          40,
          41,
          23,
          26,
          57
        ],
        [
          54,
          57,
          112,
          184,
          5,
          41,
          38,
          166,
          213
        ],
        [
          30,
          34,
          26,
          133,
          152,
          116,
          10,
          32,
          134
        ],
        [
          39,
          19,
          53,
          221,
          26,
          114,
          32,
          73,
          255
        ],
        [
          31,
          9,
          65,
          234,
          2,
          15,
          1,
          118,
          73
        ],
        [
          75,
          32,
          12,
          51,
          192,
          255,
          160,
          43,
          51
        ],
        [
          88,
          31,
          35,
          67,
          102,
          85,
          55,
          186,
          85
        ],
        [
          56,
          21,
          23,
          111,
          59,
          205,
          45,
          37,
          192
        ],
        [
          55,
          38,
          70,
          124,
          73,
          102,
          1,
          34,
          98
        ]
      ],
      [
        [
          125,
          98,
          42,
          88,
          104,
          85,
          117,
          175,
          82
        ],
        [
          95,
          84,
          53,
          89,
          128,
          100,
          113,
          101,
          45
        ],
        [
          75,
          79,
          123,
          47,
          51,
          128,
          81,
          171,
          1
        ],
        [
          57,
          17,
          5,
          71,
          102,
          57,
          53,
          41,
          49
        ],
        [
          38,
          33,
          13,
          121,
          57,
          73,
          26,
          1,
          85
        ],
        [
          41,
          10,
          67,
          138,
          77,
          110,
          90,
          47,
          114
        ],
        [
          115,
          21,
          2,
          10,
          102,
          255,
          166,
          23,
          6
        ],
        [
          101,
          29,
          16,
          10,
          85,
          128,
          101,
          196,
          26
        ],
        [
          57,
          18,
          10,
          102,
          102,
          213,
          34,
          20,
          43
        ],
        [
          117,
          20,
          15,
          36,
          163,
          128,
          68,
          1,
          26
        ]
      ],
      [
        [
          102,
          61,
          71,
          37,
          34,
          53,
          31,
          243,
          192
        ],
        [
          69,
          60,
          71,
          38,
          73,
          119,
          28,
          222,
          37
        ],
        [
          68,
          45,
          128,
          34,
          1,
          47,
          11,
          245,
          171
        ],
        [
          62,
          17,
          19,
          70,
          146,
          85,
          55,
          62,
          70
        ],
        [
          37,
          43,
          37,
          154,
          100,
          163,
          85,
          160,
          1
        ],
        [
          63,
          9,
          92,
          136,
          28,
          64,
          32,
          201,
          85
        ],
        [
          75,
          15,
          9,
          9,
          64,
          255,
          184,
          119,
          16
        ],
        [
          86,
          6,
          28,
          5,
          64,
          255,
          25,
          248,
          1
        ],
        [
          56,
          8,
          17,
          132,
          137,
          255,
          55,
          116,
          128
        ],
        [
          58,
          15,
          20,
          82,
          135,
          57,
          26,
          121,
          40
        ]
      ],
      [
        [
          164,
          50,
          31,
          137,
          154,
          133,
          25,
          35,
          218
        ],
        [
          51,
          103,
          44,
          131,
          131,
          123,
          31,
          6,
          158
        ],
        [
          86,
          40,
          64,
          135,
          148,
          224,
          45,
          183,
          128
        ],
        [
          22,
          26,
          17,
          131,
          240,
          154,
          14,
          1,
          209
        ],
        [
          45,
          16,
          21,
          91,
          64,
          222,
          7,
          1,
          197
        ],
        [
          56,
          21,
          39,
          155,
          60,
          138,
          23,
          102,
          213
        ],
        [
          83,
          12,
          13,
          54,
          192,
          255,
          68,
          47,
          28
        ],
        [
          85,
          26,
          85,
          85,
          128,
          128,
          32,
          146,
          171
        ],
        [
          18,
          11,
          7,
          63,
          144,
          171,
          4,
          4,
          246
        ],
        [
          35,
          27,
          10,
          146,
          174,
          171,
          12,
          26,
          128
        ]
      ],
      [
        [
          190,
          80,
          35,
          99,
          180,
          80,
          126,
          54,
          45
        ],
        [
          85,
          126,
          47,
          87,
          176,
          51,
          41,
          20,
          32
        ],
        [
          101,
          75,
          128,
          139,
          118,
          146,
          116,
          128,
          85
        ],
        [
          56,
          41,
          15,
          176,
          236,
          85,
          37,
          9,
          62
        ],
        [
          71,
          30,
          17,
          119,
          118,
          255,
          17,
          18,
          138
        ],
        [
          101,
          38,
          60,
          138,
          55,
          70,
          43,
          26,
          142
        ],
        [
          146,
          36,
          19,
          30,
          171,
          255,
          97,
          27,
          20
        ],
        [
          138,
          45,
          61,
          62,
          219,
          1,
          81,
          188,
          64
        ],
        [
          32,
          41,
          20,
          117,
          151,
          142,
          20,
          21,
          163
        ],
        [
          112,
          19,
          12,
          61,
          195,
          128,
          48,
          4,
          24
        ]
      ]
    ], fi2 = [
      [
        [
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            176,
            246,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            223,
            241,
            252,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            249,
            253,
            253,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            244,
            252,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            234,
            254,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            253,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            246,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            239,
            253,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            254,
            255,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            248,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            251,
            255,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            253,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            251,
            254,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            254,
            255,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            254,
            253,
            255,
            254,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            250,
            255,
            254,
            255,
            254,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ]
      ],
      [
        [
          [
            217,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            225,
            252,
            241,
            253,
            255,
            255,
            254,
            255,
            255,
            255,
            255
          ],
          [
            234,
            250,
            241,
            250,
            253,
            255,
            253,
            254,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            223,
            254,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            238,
            253,
            254,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            248,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            249,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            253,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            247,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            253,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            252,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            254,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            253,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            254,
            253,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            250,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ]
      ],
      [
        [
          [
            186,
            251,
            250,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            234,
            251,
            244,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            251,
            251,
            243,
            253,
            254,
            255,
            254,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            253,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            236,
            253,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            251,
            253,
            253,
            254,
            254,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            254,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            254,
            254,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            254,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ]
      ],
      [
        [
          [
            248,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            250,
            254,
            252,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            248,
            254,
            249,
            253,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            253,
            253,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            246,
            253,
            253,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            252,
            254,
            251,
            254,
            254,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            254,
            252,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            248,
            254,
            253,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            253,
            255,
            254,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            251,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            245,
            251,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            253,
            253,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            251,
            253,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            252,
            253,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            252,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            249,
            255,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            255,
            253,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            250,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ],
        [
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            254,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ],
          [
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255,
            255
          ]
        ]
      ]
    ], pi2 = [
      0,
      1,
      2,
      3,
      6,
      4,
      5,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      7,
      0
    ], mi2 = [], hi2 = [], gi2 = [], _i2 = 1, vi2 = 2, yi2 = [], bi2 = [];
    xn2("UpsampleRgbLinePair", Dn2, 3), xn2("UpsampleBgrLinePair", On2, 3), xn2("UpsampleRgbaLinePair", Nn2, 4), xn2("UpsampleBgraLinePair", Mn2, 4), xn2("UpsampleArgbLinePair", jn2, 4), xn2("UpsampleRgba4444LinePair", An2, 2), xn2("UpsampleRgb565LinePair", kn2, 2);
    var xi2 = e5.UpsampleRgbLinePair, Si2 = e5.UpsampleBgrLinePair, Ci2 = e5.UpsampleRgbaLinePair, wi2 = e5.UpsampleBgraLinePair, Ti2 = e5.UpsampleArgbLinePair, Ei2 = e5.UpsampleRgba4444LinePair, Di2 = e5.UpsampleRgb565LinePair, Oi2 = 16, ki2 = 1 << Oi2 - 1, Ai2 = -227, ji2 = 482, Mi2 = 6, Ni2 = (256 << Mi2) - 1, Pi2 = 0, Fi2 = a2(256), Ii2 = a2(256), Li2 = a2(256), Ri2 = a2(256), zi2 = a2(ji2 - Ai2), Bi2 = a2(ji2 - Ai2);
    Pn2("YuvToRgbRow", Dn2, 3), Pn2("YuvToBgrRow", On2, 3), Pn2("YuvToRgbaRow", Nn2, 4), Pn2("YuvToBgraRow", Mn2, 4), Pn2("YuvToArgbRow", jn2, 4), Pn2("YuvToRgba4444Row", An2, 2), Pn2("YuvToRgb565Row", kn2, 2);
    var Vi2 = [
      0,
      4,
      8,
      12,
      128,
      132,
      136,
      140,
      256,
      260,
      264,
      268,
      384,
      388,
      392,
      396
    ], Hi2 = [
      0,
      2,
      8
    ], Ui2 = [
      8,
      7,
      6,
      4,
      4,
      2,
      2,
      2,
      1,
      1,
      1,
      1
    ], Wi2 = 1;
    this.WebPDecodeRGBA = function(e6, n3, s3, c5, l4) {
      var u4 = Br2, d4 = new sn2(), f4 = new he2();
      d4.ba = f4, f4.S = u4, f4.width = [f4.width], f4.height = [f4.height];
      var p3 = f4.width, m3 = f4.height, h3 = new ge2();
      if (h3 == null || e6 == null) var g3 = 2;
      else t(h3 != null), g3 = Rn2(e6, n3, s3, h3.width, h3.height, h3.Pd, h3.Qd, h3.format, null);
      if (g3 == 0 ? (p3 != null && (p3[0] = h3.width[0]), m3 != null && (m3[0] = h3.height[0]), p3 = 1) : p3 = 0, p3) {
        f4.width = f4.width[0], f4.height = f4.height[0], c5 != null && (c5[0] = f4.width), l4 != null && (l4[0] = f4.height);
        t: {
          if (c5 = new $e2(), (l4 = new cn2()).data = e6, l4.w = n3, l4.ha = s3, l4.kd = 1, n3 = [0], t(l4 != null), ((e6 = Rn2(l4.data, l4.w, l4.ha, null, null, null, n3, null, l4)) == 0 || e6 == 7) && n3[0] && (e6 = 4), (n3 = e6) == 0) {
            if (t(d4 != null), c5.data = l4.data, c5.w = l4.w + l4.offset, c5.ha = l4.ha - l4.offset, c5.put = Se2, c5.ac = xe2, c5.bc = Ce2, c5.ma = d4, l4.xa) {
              if ((e6 = Ie2()) == null) {
                d4 = 1;
                break t;
              }
              if (function(e7, n4) {
                var r3 = [0], i3 = [0], a3 = [0];
                e: for (; ; ) {
                  if (e7 == null) return 0;
                  if (n4 == null) return e7.a = 2, 0;
                  if (e7.l = n4, e7.a = 0, _2(e7.m, n4.data, n4.w, n4.ha), !we2(e7.m, r3, i3, a3)) {
                    e7.a = 3;
                    break e;
                  }
                  if (e7.xb = vi2, n4.width = r3[0], n4.height = i3[0], !Le2(r3[0], i3[0], 1, e7, null)) break e;
                  return 1;
                }
                return t(e7.a != 0), 0;
              }(e6, c5)) {
                if (c5 = (n3 = Vn2(c5.width, c5.height, d4.Oa, d4.ba)) == 0) {
                  e: {
                    c5 = e6;
                    r: for (; ; ) {
                      if (c5 == null) {
                        c5 = 0;
                        break e;
                      }
                      if (t(c5.s.yc != null), t(c5.s.Ya != null), t(0 < c5.s.Wb), t((s3 = c5.l) != null), t((l4 = s3.ma) != null), c5.xb != 0) {
                        if (c5.ca = l4.ba, c5.tb = l4.tb, t(c5.ca != null), !zn2(l4.Oa, s3, Hr2)) {
                          c5.a = 2;
                          break r;
                        }
                        if (!Re2(c5, s3.width) || s3.da) break r;
                        if ((s3.da || fe2(c5.ca.S)) && Y2(), 11 > c5.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), c5.ca.f.kb.F != null && Y2()), c5.Pb && 0 < c5.s.ua && c5.s.vb.X == null && !N2(c5.s.vb, c5.s.Wa.Xa)) {
                          c5.a = 1;
                          break r;
                        }
                        c5.xb = 0;
                      }
                      if (!G2(c5, c5.V, c5.Ba, c5.c, c5.i, s3.o, je2)) break r;
                      l4.Dc = c5.Ma, c5 = 1;
                      break e;
                    }
                    t(c5.a != 0), c5 = 0;
                  }
                  c5 = !c5;
                }
                c5 && (n3 = e6.a);
              } else n3 = e6.a;
            } else {
              if ((e6 = new et2()) == null) {
                d4 = 1;
                break t;
              }
              if (e6.Fa = l4.na, e6.P = l4.P, e6.qc = l4.Sa, rt2(e6, c5)) {
                if ((n3 = Vn2(c5.width, c5.height, d4.Oa, d4.ba)) == 0) {
                  if (e6.Aa = 0, s3 = d4.Oa, t((l4 = e6) != null), s3 != null) {
                    if (0 < (p3 = 0 > (p3 = s3.Md) ? 0 : 100 < p3 ? 255 : 255 * p3 / 100)) {
                      for (m3 = h3 = 0; 4 > m3; ++m3) 12 > (g3 = l4.pb[m3]).lc && (g3.ia = p3 * Ui2[0 > g3.lc ? 0 : g3.lc] >> 3), h3 |= g3.ia;
                      h3 && (alert("todo:VP8InitRandom"), l4.ia = 1);
                    }
                    l4.Ga = s3.Id, 100 < l4.Ga ? l4.Ga = 100 : 0 > l4.Ga && (l4.Ga = 0);
                  }
                  (function(e7, n4) {
                    if (e7 == null) return 0;
                    if (n4 == null) return tt2(e7, 2, "NULL VP8Io parameter in VP8Decode().");
                    if (!e7.cb && !rt2(e7, n4)) return 0;
                    if (t(e7.cb), n4.ac == null || n4.ac(n4)) {
                      n4.ob && (e7.L = 0);
                      var s4 = Hi2[e7.L];
                      if (e7.L == 2 ? (e7.yb = 0, e7.zb = 0) : (e7.yb = n4.v - s4 >> 4, e7.zb = n4.j - s4 >> 4, 0 > e7.yb && (e7.yb = 0), 0 > e7.zb && (e7.zb = 0)), e7.Va = n4.o + 15 + s4 >> 4, e7.Hb = n4.va + 15 + s4 >> 4, e7.Hb > e7.za && (e7.Hb = e7.za), e7.Va > e7.Ub && (e7.Va = e7.Ub), 0 < e7.L) {
                        var c6 = e7.ed;
                        for (s4 = 0; 4 > s4; ++s4) {
                          var l5;
                          if (e7.Qa.Cb) {
                            var u5 = e7.Qa.Lb[s4];
                            e7.Qa.Fb || (u5 += c6.Tb);
                          } else u5 = c6.Tb;
                          for (l5 = 0; 1 >= l5; ++l5) {
                            var d5 = e7.gd[s4][l5], f5 = u5;
                            if (c6.Pc && (f5 += c6.vd[0], l5 && (f5 += c6.od[0])), 0 < (f5 = 0 > f5 ? 0 : 63 < f5 ? 63 : f5)) {
                              var p4 = f5;
                              0 < c6.wb && (p4 = 4 < c6.wb ? p4 >> 2 : p4 >> 1) > 9 - c6.wb && (p4 = 9 - c6.wb), 1 > p4 && (p4 = 1), d5.dd = p4, d5.tc = 2 * f5 + p4, d5.ld = 40 <= f5 ? 2 : 15 <= f5 ? 1 : 0;
                            } else d5.tc = 0;
                            d5.La = l5;
                          }
                        }
                      }
                      s4 = 0;
                    } else tt2(e7, 6, "Frame setup failed"), s4 = e7.a;
                    if (s4 = s4 == 0) {
                      if (s4) {
                        e7.$c = 0, 0 < e7.Aa || (e7.Ic = Wi2);
                        e: {
                          s4 = e7.Ic, c6 = 4 * (p4 = e7.za);
                          var m4 = 32 * p4, h4 = p4 + 1, g4 = 0 < e7.L ? p4 * (0 < e7.Aa ? 2 : 1) : 0, _3 = (e7.Aa == 2 ? 2 : 1) * p4;
                          if ((d5 = c6 + 832 + (l5 = 3 * (16 * s4 + Hi2[e7.L]) / 2 * m4) + (u5 = e7.Fa != null && 0 < e7.Fa.length ? e7.Kc.c * e7.Kc.i : 0)) != d5) s4 = 0;
                          else {
                            if (d5 > e7.Vb) {
                              if (e7.Vb = 0, e7.Ec = a2(d5), e7.Fc = 0, e7.Ec == null) {
                                s4 = tt2(e7, 1, "no memory during frame initialization.");
                                break e;
                              }
                              e7.Vb = d5;
                            }
                            d5 = e7.Ec, f5 = e7.Fc, e7.Ac = d5, e7.Bc = f5, f5 += c6, e7.Gd = o2(m4, Xe2), e7.Hd = 0, e7.rb = o2(h4 + 1, Ke2), e7.sb = 1, e7.wa = g4 ? o2(g4, Ge2) : null, e7.Y = 0, e7.D.Nb = 0, e7.D.wa = e7.wa, e7.D.Y = e7.Y, 0 < e7.Aa && (e7.D.Y += p4), t(true), e7.oc = d5, e7.pc = f5, f5 += 832, e7.ya = o2(_3, Je2), e7.aa = 0, e7.D.ya = e7.ya, e7.D.aa = e7.aa, e7.Aa == 2 && (e7.D.aa += p4), e7.R = 16 * p4, e7.B = 8 * p4, p4 = (m4 = Hi2[e7.L]) * e7.R, m4 = m4 / 2 * e7.B, e7.sa = d5, e7.ta = f5 + p4, e7.qa = e7.sa, e7.ra = e7.ta + 16 * s4 * e7.R + m4, e7.Ha = e7.qa, e7.Ia = e7.ra + 8 * s4 * e7.B + m4, e7.$c = 0, f5 += l5, e7.mb = u5 ? d5 : null, e7.nb = u5 ? f5 : null, t(f5 + u5 <= e7.Fc + e7.Vb), at2(e7), i2(e7.Ac, e7.Bc, 0, c6), s4 = 1;
                          }
                        }
                        if (s4) {
                          if (n4.ka = 0, n4.y = e7.sa, n4.O = e7.ta, n4.f = e7.qa, n4.N = e7.ra, n4.ea = e7.Ha, n4.Vd = e7.Ia, n4.fa = e7.R, n4.Rc = e7.B, n4.F = null, n4.J = 0, !Pr2) {
                            for (s4 = -255; 255 >= s4; ++s4) Ar2[255 + s4] = 0 > s4 ? -s4 : s4;
                            for (s4 = -1020; 1020 >= s4; ++s4) jr2[1020 + s4] = -128 > s4 ? -128 : 127 < s4 ? 127 : s4;
                            for (s4 = -112; 112 >= s4; ++s4) Mr2[112 + s4] = -16 > s4 ? -16 : 15 < s4 ? 15 : s4;
                            for (s4 = -255; 510 >= s4; ++s4) Nr2[255 + s4] = 0 > s4 ? 0 : 255 < s4 ? 255 : s4;
                            Pr2 = 1;
                          }
                          cr2 = ht2, lr2 = dt2, dr2 = ft2, fr2 = pt2, pr2 = mt2, ur2 = ut2, mr2 = Qt2, hr2 = $t2, gr2 = nn2, _r2 = rn2, vr2 = en2, yr2 = tn2, br2 = an2, xr2 = on2, Sr2 = qt2, Cr2 = Jt2, wr2 = Yt2, Tr2 = Xt2, hi2[0] = kt2, hi2[1] = _t2, hi2[2] = Dt2, hi2[3] = Ot2, hi2[4] = At2, hi2[5] = Mt2, hi2[6] = jt2, hi2[7] = Nt2, hi2[8] = Ft2, hi2[9] = Pt2, mi2[0] = Ct2, mi2[1] = yt2, mi2[2] = bt2, mi2[3] = xt2, mi2[4] = wt2, mi2[5] = Tt2, mi2[6] = Et2, gi2[0] = zt2, gi2[1] = vt2, gi2[2] = It2, gi2[3] = Lt2, gi2[4] = Vt2, gi2[5] = Bt2, gi2[6] = Ht2, s4 = 1;
                        } else s4 = 0;
                      }
                      s4 && (s4 = function(e8, n5) {
                        for (e8.M = 0; e8.M < e8.Va; ++e8.M) {
                          var o3, s5 = e8.Jc[e8.M & e8.Xb], c7 = e8.m, l6 = e8;
                          for (o3 = 0; o3 < l6.za; ++o3) {
                            var u6 = c7, d6 = l6, f6 = d6.Ac, p5 = d6.Bc + 4 * o3, m5 = d6.zc, h5 = d6.ya[d6.aa + o3];
                            if (d6.Qa.Bb ? h5.$b = O2(u6, d6.Pa.jb[0]) ? 2 + O2(u6, d6.Pa.jb[2]) : O2(u6, d6.Pa.jb[1]) : h5.$b = 0, d6.kc && (h5.Ad = O2(u6, d6.Bd)), h5.Za = !O2(u6, 145) + 0, h5.Za) {
                              var g5 = h5.Ob, _4 = 0;
                              for (d6 = 0; 4 > d6; ++d6) {
                                var v3, y3 = m5[0 + d6];
                                for (v3 = 0; 4 > v3; ++v3) {
                                  y3 = di2[f6[p5 + v3]][y3];
                                  for (var b4 = li2[O2(u6, y3[0])]; 0 < b4; ) b4 = li2[2 * b4 + O2(u6, y3[b4])];
                                  y3 = -b4, f6[p5 + v3] = y3;
                                }
                                r2(g5, _4, f6, p5, 4), _4 += 4, m5[0 + d6] = y3;
                              }
                            } else y3 = O2(u6, 156) ? O2(u6, 128) ? 1 : 3 : O2(u6, 163) ? 2 : 0, h5.Ob[0] = y3, i2(f6, p5, y3, 4), i2(m5, 0, y3, 4);
                            h5.Dd = O2(u6, 142) ? O2(u6, 114) ? O2(u6, 183) ? 1 : 3 : 2 : 0;
                          }
                          if (l6.m.Ka) return tt2(e8, 7, "Premature end-of-partition0 encountered.");
                          for (; e8.ja < e8.za; ++e8.ja) {
                            if (l6 = s5, u6 = (c7 = e8).rb[c7.sb - 1], f6 = c7.rb[c7.sb + c7.ja], o3 = c7.ya[c7.aa + c7.ja], p5 = c7.kc ? o3.Ad : 0) u6.la = f6.la = 0, o3.Za || (u6.Na = f6.Na = 0), o3.Hc = 0, o3.Gc = 0, o3.ia = 0;
                            else {
                              var x4, S4;
                              if (u6 = f6, f6 = l6, p5 = c7.Pa.Xc, m5 = c7.ya[c7.aa + c7.ja], h5 = c7.pb[m5.$b], d6 = m5.ad, g5 = 0, _4 = c7.rb[c7.sb - 1], y3 = v3 = 0, i2(d6, g5, 0, 384), m5.Za) var C4 = 0, w4 = p5[3];
                              else {
                                b4 = a2(16);
                                var T3 = u6.Na + _4.Na;
                                if (T3 = oi2(f6, p5[1], T3, h5.Eb, 0, b4, 0), u6.Na = _4.Na = (0 < T3) + 0, 1 < T3) cr2(b4, 0, d6, g5);
                                else {
                                  var E3 = b4[0] + 3 >> 3;
                                  for (b4 = 0; 256 > b4; b4 += 16) d6[g5 + b4] = E3;
                                }
                                C4 = 1, w4 = p5[0];
                              }
                              var D3 = 15 & u6.la, k3 = 15 & _4.la;
                              for (b4 = 0; 4 > b4; ++b4) {
                                var A3 = 1 & k3;
                                for (E3 = S4 = 0; 4 > E3; ++E3) D3 = D3 >> 1 | (A3 = (T3 = oi2(f6, w4, T3 = A3 + (1 & D3), h5.Sc, C4, d6, g5)) > C4) << 7, S4 = S4 << 2 | (3 < T3 ? 3 : 1 < T3 ? 2 : d6[g5 + 0] != 0), g5 += 16;
                                D3 >>= 4, k3 = k3 >> 1 | A3 << 7, v3 = (v3 << 8 | S4) >>> 0;
                              }
                              for (w4 = D3, C4 = k3 >> 4, x4 = 0; 4 > x4; x4 += 2) {
                                for (S4 = 0, D3 = u6.la >> 4 + x4, k3 = _4.la >> 4 + x4, b4 = 0; 2 > b4; ++b4) {
                                  for (A3 = 1 & k3, E3 = 0; 2 > E3; ++E3) T3 = A3 + (1 & D3), D3 = D3 >> 1 | (A3 = 0 < (T3 = oi2(f6, p5[2], T3, h5.Qc, 0, d6, g5))) << 3, S4 = S4 << 2 | (3 < T3 ? 3 : 1 < T3 ? 2 : d6[g5 + 0] != 0), g5 += 16;
                                  D3 >>= 2, k3 = k3 >> 1 | A3 << 5;
                                }
                                y3 |= S4 << 4 * x4, w4 |= D3 << 4 << x4, C4 |= (240 & k3) << x4;
                              }
                              u6.la = w4, _4.la = C4, m5.Hc = v3, m5.Gc = y3, m5.ia = 43690 & y3 ? 0 : h5.ia, p5 = !(v3 | y3);
                            }
                            if (0 < c7.L && (c7.wa[c7.Y + c7.ja] = c7.gd[o3.$b][o3.Za], c7.wa[c7.Y + c7.ja].La |= !p5), l6.Ka) return tt2(e8, 7, "Premature end-of-file encountered.");
                          }
                          if (at2(e8), c7 = n5, l6 = 1, o3 = (s5 = e8).D, u6 = 0 < s5.L && s5.M >= s5.zb && s5.M <= s5.Va, s5.Aa == 0) e: {
                            if (o3.M = s5.M, o3.uc = u6, Ln2(s5, o3), l6 = 1, o3 = (S4 = s5.D).Nb, u6 = (y3 = Hi2[s5.L]) * s5.R, f6 = y3 / 2 * s5.B, b4 = 16 * o3 * s5.R, E3 = 8 * o3 * s5.B, p5 = s5.sa, m5 = s5.ta - u6 + b4, h5 = s5.qa, d6 = s5.ra - f6 + E3, g5 = s5.Ha, _4 = s5.Ia - f6 + E3, k3 = (D3 = S4.M) == 0, v3 = D3 >= s5.Va - 1, s5.Aa == 2 && Ln2(s5, S4), S4.uc) for (A3 = (T3 = s5).D.M, t(T3.D.uc), S4 = T3.yb; S4 < T3.Hb; ++S4) {
                              C4 = S4, w4 = A3;
                              var j3 = (M3 = (V3 = T3).D).Nb;
                              x4 = V3.R;
                              var M3 = M3.wa[M3.Y + C4], N3 = V3.sa, P3 = V3.ta + 16 * j3 * x4 + 16 * C4, F3 = M3.dd, I3 = M3.tc;
                              if (I3 != 0) if (t(3 <= I3), V3.L == 1) 0 < C4 && Cr2(N3, P3, x4, I3 + 4), M3.La && Tr2(N3, P3, x4, I3), 0 < w4 && Sr2(N3, P3, x4, I3 + 4), M3.La && wr2(N3, P3, x4, I3);
                              else {
                                var L3 = V3.B, R3 = V3.qa, z3 = V3.ra + 8 * j3 * L3 + 8 * C4, B3 = V3.Ha, V3 = V3.Ia + 8 * j3 * L3 + 8 * C4;
                                j3 = M3.ld, 0 < C4 && (hr2(N3, P3, x4, I3 + 4, F3, j3), _r2(R3, z3, B3, V3, L3, I3 + 4, F3, j3)), M3.La && (yr2(N3, P3, x4, I3, F3, j3), xr2(R3, z3, B3, V3, L3, I3, F3, j3)), 0 < w4 && (mr2(N3, P3, x4, I3 + 4, F3, j3), gr2(R3, z3, B3, V3, L3, I3 + 4, F3, j3)), M3.La && (vr2(N3, P3, x4, I3, F3, j3), br2(R3, z3, B3, V3, L3, I3, F3, j3));
                              }
                            }
                            if (s5.ia && alert("todo:DitherRow"), c7.put != null) {
                              if (S4 = 16 * D3, D3 = 16 * (D3 + 1), k3 ? (c7.y = s5.sa, c7.O = s5.ta + b4, c7.f = s5.qa, c7.N = s5.ra + E3, c7.ea = s5.Ha, c7.W = s5.Ia + E3) : (S4 -= y3, c7.y = p5, c7.O = m5, c7.f = h5, c7.N = d6, c7.ea = g5, c7.W = _4), v3 || (D3 -= y3), D3 > c7.o && (D3 = c7.o), c7.F = null, c7.J = null, s5.Fa != null && 0 < s5.Fa.length && S4 < D3 && (c7.J = gn2(s5, c7, S4, D3 - S4), c7.F = s5.mb, c7.F == null && c7.F.length == 0)) {
                                l6 = tt2(s5, 3, "Could not decode alpha data.");
                                break e;
                              }
                              S4 < c7.j && (y3 = c7.j - S4, S4 = c7.j, t(!(1 & y3)), c7.O += s5.R * y3, c7.N += s5.B * (y3 >> 1), c7.W += s5.B * (y3 >> 1), c7.F != null && (c7.J += c7.width * y3)), S4 < D3 && (c7.O += c7.v, c7.N += c7.v >> 1, c7.W += c7.v >> 1, c7.F != null && (c7.J += c7.v), c7.ka = S4 - c7.j, c7.U = c7.va - c7.v, c7.T = D3 - S4, l6 = c7.put(c7));
                            }
                            o3 + 1 != s5.Ic || v3 || (r2(s5.sa, s5.ta - u6, p5, m5 + 16 * s5.R, u6), r2(s5.qa, s5.ra - f6, h5, d6 + 8 * s5.B, f6), r2(s5.Ha, s5.Ia - f6, g5, _4 + 8 * s5.B, f6));
                          }
                          if (!l6) return tt2(e8, 6, "Output aborted.");
                        }
                        return 1;
                      }(e7, n4)), n4.bc != null && n4.bc(n4), s4 &= 1;
                    }
                    return s4 ? (e7.cb = 0, s4) : 0;
                  })(e6, c5) || (n3 = e6.a);
                }
              } else n3 = e6.a;
            }
            n3 == 0 && d4.Oa != null && d4.Oa.fd && (n3 = Bn2(d4.ba));
          }
          d4 = n3;
        }
        u4 = d4 == 0 ? 11 > u4 ? f4.f.RGBA.eb : f4.f.kb.y : null;
      } else u4 = null;
      return u4;
    };
    var Gi2 = [
      3,
      4,
      3,
      4,
      4,
      2,
      2,
      4,
      4,
      4,
      2,
      1,
      1
    ];
  };
  function l2(e5, t2) {
    for (var n3 = "", r3 = 0; r3 < 4; r3++) n3 += String.fromCharCode(e5[t2++]);
    return n3;
  }
  function u2(e5, t2) {
    return e5[t2 + 0] | e5[t2 + 1] << 8;
  }
  function d2(e5, t2) {
    return (e5[t2 + 0] | e5[t2 + 1] << 8 | e5[t2 + 2] << 16) >>> 0;
  }
  function f2(e5, t2) {
    return (e5[t2 + 0] | e5[t2 + 1] << 8 | e5[t2 + 2] << 16 | e5[t2 + 3] << 24) >>> 0;
  }
  new c3();
  var p = [0], m = [0], h = [], g = new c3(), _ = e4, v = function(e5, t2) {
    var n3 = {}, r3 = 0, i3 = false, a3 = 0, o3 = 0;
    if (n3.frames = [], !function(e6, t3) {
      for (var n4 = 0; n4 < 4; n4++) if (e6[t3 + n4] != "RIFF".charCodeAt(n4)) return true;
      return false;
    }(e5, t2)) {
      for (f2(e5, t2 += 4), t2 += 8; t2 < e5.length; ) {
        var s3 = l2(e5, t2), c4 = f2(e5, t2 += 4);
        t2 += 4;
        var p2 = c4 + (1 & c4);
        switch (s3) {
          case "VP8 ":
          case "VP8L":
            n3.frames[r3] === void 0 && (n3.frames[r3] = {}), (g2 = n3.frames[r3]).src_off = i3 ? o3 : t2 - 8, g2.src_size = a3 + c4 + 8, r3++, i3 && (i3 = false, a3 = 0, o3 = 0);
            break;
          case "VP8X":
            (g2 = n3.header = {}).feature_flags = e5[t2];
            var m2 = t2 + 4;
            g2.canvas_width = 1 + d2(e5, m2), m2 += 3, g2.canvas_height = 1 + d2(e5, m2), m2 += 3;
            break;
          case "ALPH":
            i3 = true, a3 = p2 + 8, o3 = t2 - 8;
            break;
          case "ANIM":
            (g2 = n3.header).bgcolor = f2(e5, t2), m2 = t2 + 4, g2.loop_count = u2(e5, m2), m2 += 2;
            break;
          case "ANMF":
            var h2, g2;
            (g2 = n3.frames[r3] = {}).offset_x = 2 * d2(e5, t2), t2 += 3, g2.offset_y = 2 * d2(e5, t2), t2 += 3, g2.width = 1 + d2(e5, t2), t2 += 3, g2.height = 1 + d2(e5, t2), t2 += 3, g2.duration = d2(e5, t2), t2 += 3, h2 = e5[t2++], g2.dispose = 1 & h2, g2.blend = h2 >> 1 & 1;
        }
        s3 != "ANMF" && (t2 += p2);
      }
      return n3;
    }
  }(_, 0);
  v.response = _, v.rgbaoutput = true, v.dataurl = false;
  var y = v.header ? v.header : null, b2 = v.frames ? v.frames : null;
  if (y) {
    y.loop_counter = y.loop_count, p = [y.canvas_height], m = [y.canvas_width];
    for (var x2 = 0; x2 < b2.length && b2[x2].blend != 0; x2++) ;
  }
  var S2 = b2[0], C2 = g.WebPDecodeRGBA(_, S2.src_off, S2.src_size, m, p);
  S2.rgba = C2, S2.imgwidth = m[0], S2.imgheight = p[0];
  for (var w2 = 0; w2 < m[0] * p[0] * 4; w2++) h[w2] = C2[w2];
  return this.width = m, this.height = p, this.data = h, this;
}
function Js() {
  var e4, t = this.internal.__metadata__.metadata, n2 = unescape(encodeURIComponent(t));
  e4 = this.internal.__metadata__.rawXml ? n2 : '<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceUri + '"><jspdf:metadata>' + n2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") + "</jspdf:metadata></rdf:Description></rdf:RDF></x:xmpmeta>", this.internal.__metadata__.metadataObjectNumber = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + e4.length + " >>"), this.internal.write("stream"), this.internal.write(e4), this.internal.write("endstream"), this.internal.write("endobj");
}
function Ys() {
  this.internal.__metadata__.metadataObjectNumber && this.internal.write("/Metadata " + this.internal.__metadata__.metadataObjectNumber + " 0 R");
}
(function(e4) {
  var n2, r2, i2, a2, o2, s2, c3, l2, u2, d2 = function(e5) {
    return e5 || (e5 = {}), this.isStrokeTransparent = e5.isStrokeTransparent || false, this.strokeOpacity = e5.strokeOpacity || 1, this.strokeStyle = e5.strokeStyle || "#000000", this.fillStyle = e5.fillStyle || "#000000", this.isFillTransparent = e5.isFillTransparent || false, this.fillOpacity = e5.fillOpacity || 1, this.font = e5.font || "10px sans-serif", this.textBaseline = e5.textBaseline || "alphabetic", this.textAlign = e5.textAlign || "left", this.lineWidth = e5.lineWidth || 1, this.lineJoin = e5.lineJoin || "miter", this.lineCap = e5.lineCap || "butt", this.path = e5.path || [], this.transform = e5.transform === void 0 ? new l2() : e5.transform.clone(), this.globalCompositeOperation = e5.globalCompositeOperation || "normal", this.globalAlpha = e5.globalAlpha || 1, this.clip_path = e5.clip_path || [], this.currentPoint = e5.currentPoint || new s2(), this.miterLimit = e5.miterLimit || 10, this.lastPoint = e5.lastPoint || new s2(), this.lineDashOffset = e5.lineDashOffset || 0, this.lineDash = e5.lineDash || [], this.margin = e5.margin || [
      0,
      0,
      0,
      0
    ], this.prevPageLastElemOffset = e5.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof e5.ignoreClearRect != "boolean" || e5.ignoreClearRect, this;
  };
  e4.events.push(["initialized", function() {
    this.context2d = new f2(this), n2 = this.internal.f2, r2 = this.internal.getCoordinateString, i2 = this.internal.getVerticalCoordinateString, a2 = this.internal.getHorizontalCoordinate, o2 = this.internal.getVerticalCoordinate, s2 = this.internal.Point, c3 = this.internal.Rectangle, l2 = this.internal.Matrix, u2 = new d2();
  }]);
  var f2 = function(e5) {
    Object.defineProperty(this, "canvas", { get: function() {
      return {
        parentNode: false,
        style: false
      };
    } });
    var t = e5;
    Object.defineProperty(this, "pdf", { get: function() {
      return t;
    } });
    var n3 = false;
    Object.defineProperty(this, "pageWrapXEnabled", {
      get: function() {
        return n3;
      },
      set: function(e6) {
        n3 = !!e6;
      }
    });
    var r3 = false;
    Object.defineProperty(this, "pageWrapYEnabled", {
      get: function() {
        return r3;
      },
      set: function(e6) {
        r3 = !!e6;
      }
    });
    var i3 = 0;
    Object.defineProperty(this, "posX", {
      get: function() {
        return i3;
      },
      set: function(e6) {
        isNaN(e6) || (i3 = e6);
      }
    });
    var a3 = 0;
    Object.defineProperty(this, "posY", {
      get: function() {
        return a3;
      },
      set: function(e6) {
        isNaN(e6) || (a3 = e6);
      }
    }), Object.defineProperty(this, "margin", {
      get: function() {
        return u2.margin;
      },
      set: function(e6) {
        var t2;
        typeof e6 == "number" ? t2 = [
          e6,
          e6,
          e6,
          e6
        ] : ((t2 = [
          ,
          ,
          ,
          ,
        ])[0] = e6[0], t2[1] = e6.length >= 2 ? e6[1] : t2[0], t2[2] = e6.length >= 3 ? e6[2] : t2[0], t2[3] = e6.length >= 4 ? e6[3] : t2[1]), u2.margin = t2;
      }
    });
    var o3 = false;
    Object.defineProperty(this, "autoPaging", {
      get: function() {
        return o3;
      },
      set: function(e6) {
        o3 = e6;
      }
    });
    var s3 = 0;
    Object.defineProperty(this, "lastBreak", {
      get: function() {
        return s3;
      },
      set: function(e6) {
        s3 = e6;
      }
    });
    var c4 = [];
    Object.defineProperty(this, "pageBreaks", {
      get: function() {
        return c4;
      },
      set: function(e6) {
        c4 = e6;
      }
    }), Object.defineProperty(this, "ctx", {
      get: function() {
        return u2;
      },
      set: function(e6) {
        e6 instanceof d2 && (u2 = e6);
      }
    }), Object.defineProperty(this, "path", {
      get: function() {
        return u2.path;
      },
      set: function(e6) {
        u2.path = e6;
      }
    });
    var l3 = [];
    Object.defineProperty(this, "ctxStack", {
      get: function() {
        return l3;
      },
      set: function(e6) {
        l3 = e6;
      }
    }), Object.defineProperty(this, "fillStyle", {
      get: function() {
        return this.ctx.fillStyle;
      },
      set: function(e6) {
        var t2 = p(e6);
        this.ctx.fillStyle = t2.style, this.ctx.isFillTransparent = t2.a === 0, this.ctx.fillOpacity = t2.a, this.pdf.setFillColor(t2.r, t2.g, t2.b, { a: t2.a }), this.pdf.setTextColor(t2.r, t2.g, t2.b, { a: t2.a });
      }
    }), Object.defineProperty(this, "strokeStyle", {
      get: function() {
        return this.ctx.strokeStyle;
      },
      set: function(e6) {
        var t2 = p(e6);
        this.ctx.strokeStyle = t2.style, this.ctx.isStrokeTransparent = t2.a === 0, this.ctx.strokeOpacity = t2.a, t2.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (t2.a, this.pdf.setDrawColor(t2.r, t2.g, t2.b));
      }
    }), Object.defineProperty(this, "lineCap", {
      get: function() {
        return this.ctx.lineCap;
      },
      set: function(e6) {
        [
          "butt",
          "round",
          "square"
        ].indexOf(e6) !== -1 && (this.ctx.lineCap = e6, this.pdf.setLineCap(e6));
      }
    }), Object.defineProperty(this, "lineWidth", {
      get: function() {
        return this.ctx.lineWidth;
      },
      set: function(e6) {
        isNaN(e6) || (this.ctx.lineWidth = e6, this.pdf.setLineWidth(e6));
      }
    }), Object.defineProperty(this, "lineJoin", {
      get: function() {
        return this.ctx.lineJoin;
      },
      set: function(e6) {
        [
          "bevel",
          "round",
          "miter"
        ].indexOf(e6) !== -1 && (this.ctx.lineJoin = e6, this.pdf.setLineJoin(e6));
      }
    }), Object.defineProperty(this, "miterLimit", {
      get: function() {
        return this.ctx.miterLimit;
      },
      set: function(e6) {
        isNaN(e6) || (this.ctx.miterLimit = e6, this.pdf.setMiterLimit(e6));
      }
    }), Object.defineProperty(this, "textBaseline", {
      get: function() {
        return this.ctx.textBaseline;
      },
      set: function(e6) {
        this.ctx.textBaseline = e6;
      }
    }), Object.defineProperty(this, "textAlign", {
      get: function() {
        return this.ctx.textAlign;
      },
      set: function(e6) {
        [
          "right",
          "end",
          "center",
          "left",
          "start"
        ].indexOf(e6) !== -1 && (this.ctx.textAlign = e6);
      }
    });
    var f3 = null, m2 = null, h2 = null;
    Object.defineProperty(this, "fontFaces", {
      get: function() {
        return h2;
      },
      set: function(e6) {
        f3 = null, m2 = null, h2 = e6;
      }
    }), Object.defineProperty(this, "font", {
      get: function() {
        return this.ctx.font;
      },
      set: function(e6) {
        var t2;
        if (this.ctx.font = e6, (t2 = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z0-9]+?)\s*$/i.exec(e6)) !== null) {
          var n4 = t2[1];
          t2[2];
          var r4 = t2[3], i4 = t2[4];
          t2[5];
          var a4 = t2[6], o4 = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(i4)[2];
          i4 = Math.floor(o4 === "px" ? parseFloat(i4) * this.pdf.internal.scaleFactor : o4 === "em" ? parseFloat(i4) * this.pdf.getFontSize() : parseFloat(i4) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(i4);
          var s4 = function(e7) {
            var t3, n5, r5 = [], i5 = e7.trim();
            if (i5 === "") return js;
            if (i5 in xs) return [xs[i5]];
            for (; i5 !== ""; ) {
              switch (n5 = null, t3 = (i5 = Cs(i5)).charAt(0)) {
                case '"':
                case "'":
                  n5 = ws(i5.substring(1), t3);
                  break;
                default:
                  n5 = Ts(i5);
              }
              if (n5 === null || (r5.push(n5[0]), (i5 = Cs(n5[1])) !== "" && i5.charAt(0) !== ",")) return js;
              i5 = i5.replace(/^,/, "");
            }
            return r5;
          }(a4);
          if (this.fontFaces) {
            var c5 = function(e7, t3, n5) {
              for (var r5 = (n5 || (n5 = {})).defaultFontFamily || "times", i5 = Object.assign({}, bs, n5.genericFontFamilies || {}), a5 = null, o5 = null, s5 = 0; s5 < t3.length; ++s5) if (i5[(a5 = vs(t3[s5])).family] && (a5.family = i5[a5.family]), e7.hasOwnProperty(a5.family)) {
                o5 = e7[a5.family];
                break;
              }
              if (!(o5 || (o5 = e7[r5]))) throw Error("Could not find a font-family for the rule '" + Ss(a5) + "' and default family '" + r5 + "'.");
              if (o5 = function(e8, t4) {
                if (t4[e8]) return t4[e8];
                var n6 = hs[e8], r6 = ys(t4, ms, n6, n6 <= hs.normal ? -1 : 1);
                if (!r6) throw Error("Could not find a matching font-stretch value for " + e8);
                return r6;
              }(a5.stretch, o5), o5 = function(e8, t4) {
                if (t4[e8]) return t4[e8];
                for (var n6 = ps[e8], r6 = 0; r6 < n6.length; ++r6) if (t4[n6[r6]]) return t4[n6[r6]];
                throw Error("Could not find a matching font-style for " + e8);
              }(a5.style, o5), !(o5 = function(e8, t4) {
                if (t4[e8]) return t4[e8];
                if (e8 === 400 && t4[500]) return t4[500];
                if (e8 === 500 && t4[400]) return t4[400];
                var n6 = _s[e8], r6 = ys(t4, gs, n6, e8 < 400 ? -1 : 1);
                if (!r6) throw Error("Could not find a matching font-weight for value " + e8);
                return r6;
              }(a5.weight, o5))) throw Error("Failed to resolve a font for the rule '" + Ss(a5) + "'.");
              return o5;
            }(function(e7, t3) {
              var n5 = e7.getFontList(), r5 = JSON.stringify(n5);
              return (f3 === null || m2 !== r5) && (f3 = function(e8) {
                for (var t4 = {}, n6 = 0; n6 < e8.length; ++n6) {
                  var r6 = vs(e8[n6]), i5 = r6.family, a5 = r6.stretch, o5 = r6.style, s5 = r6.weight;
                  t4[i5] = t4[i5] || {}, t4[i5][a5] = t4[i5][a5] || {}, t4[i5][a5][o5] = t4[i5][a5][o5] || {}, t4[i5][a5][o5][s5] = r6;
                }
                return t4;
              }(function(e8) {
                var t4 = [];
                return Object.keys(e8).forEach(function(n6) {
                  e8[n6].forEach(function(e9) {
                    var r6 = null;
                    switch (e9) {
                      case "bold":
                        r6 = {
                          family: n6,
                          weight: "bold"
                        };
                        break;
                      case "italic":
                        r6 = {
                          family: n6,
                          style: "italic"
                        };
                        break;
                      case "bolditalic":
                        r6 = {
                          family: n6,
                          weight: "bold",
                          style: "italic"
                        };
                        break;
                      case "":
                      case "normal":
                        r6 = { family: n6 };
                    }
                    r6 !== null && (r6.ref = {
                      name: n6,
                      style: e9
                    }, t4.push(r6));
                  });
                }), t4;
              }(n5).concat(t3)), m2 = r5), f3;
            }(this.pdf, this.fontFaces), s4.map(function(e7) {
              return {
                family: e7,
                stretch: "normal",
                weight: r4,
                style: n4
              };
            }));
            this.pdf.setFont(c5.ref.name, c5.ref.style);
          } else {
            var l4 = "";
            (r4 === "bold" || parseInt(r4, 10) >= 700 || n4 === "bold") && (l4 = "bold"), n4 === "italic" && (l4 += "italic"), l4.length === 0 && (l4 = "normal");
            for (var u3 = "", d3 = {
              arial: "Helvetica",
              Arial: "Helvetica",
              verdana: "Helvetica",
              Verdana: "Helvetica",
              helvetica: "Helvetica",
              Helvetica: "Helvetica",
              "sans-serif": "Helvetica",
              fixed: "Courier",
              monospace: "Courier",
              terminal: "Courier",
              cursive: "Times",
              fantasy: "Times",
              serif: "Times"
            }, p2 = 0; p2 < s4.length; p2++) {
              if (this.pdf.internal.getFont(s4[p2], l4, {
                noFallback: true,
                disableWarning: true
              }) !== void 0) {
                u3 = s4[p2];
                break;
              }
              if (l4 === "bolditalic" && this.pdf.internal.getFont(s4[p2], "bold", {
                noFallback: true,
                disableWarning: true
              }) !== void 0) u3 = s4[p2], l4 = "bold";
              else if (this.pdf.internal.getFont(s4[p2], "normal", {
                noFallback: true,
                disableWarning: true
              }) !== void 0) {
                u3 = s4[p2], l4 = "normal";
                break;
              }
            }
            if (u3 === "") {
              for (var h3 = 0; h3 < s4.length; h3++) if (d3[s4[h3]]) {
                u3 = d3[s4[h3]];
                break;
              }
            }
            u3 = u3 === "" ? "Times" : u3, this.pdf.setFont(u3, l4);
          }
        }
      }
    }), Object.defineProperty(this, "globalCompositeOperation", {
      get: function() {
        return this.ctx.globalCompositeOperation;
      },
      set: function(e6) {
        this.ctx.globalCompositeOperation = e6;
      }
    }), Object.defineProperty(this, "globalAlpha", {
      get: function() {
        return this.ctx.globalAlpha;
      },
      set: function(e6) {
        this.ctx.globalAlpha = e6;
      }
    }), Object.defineProperty(this, "lineDashOffset", {
      get: function() {
        return this.ctx.lineDashOffset;
      },
      set: function(e6) {
        this.ctx.lineDashOffset = e6, R2.call(this);
      }
    }), Object.defineProperty(this, "lineDash", {
      get: function() {
        return this.ctx.lineDash;
      },
      set: function(e6) {
        this.ctx.lineDash = e6, R2.call(this);
      }
    }), Object.defineProperty(this, "ignoreClearRect", {
      get: function() {
        return this.ctx.ignoreClearRect;
      },
      set: function(e6) {
        this.ctx.ignoreClearRect = !!e6;
      }
    });
  };
  f2.prototype.setLineDash = function(e5) {
    this.lineDash = e5;
  }, f2.prototype.getLineDash = function() {
    return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
  }, f2.prototype.fill = function() {
    x2.call(this, "fill", false);
  }, f2.prototype.stroke = function() {
    x2.call(this, "stroke", false);
  }, f2.prototype.beginPath = function() {
    this.path = [{ type: "begin" }];
  }, f2.prototype.moveTo = function(e5, t) {
    if (isNaN(e5) || isNaN(t)) throw Ja.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), Error("Invalid arguments passed to jsPDF.context2d.moveTo");
    var n3 = this.ctx.transform.applyToPoint(new s2(e5, t));
    this.path.push({
      type: "mt",
      x: n3.x,
      y: n3.y
    }), this.ctx.lastPoint = new s2(e5, t);
  }, f2.prototype.closePath = function() {
    var e5 = new s2(0, 0), n3 = 0;
    for (n3 = this.path.length - 1; n3 !== -1; n3--) if (this.path[n3].type === "begin" && e(this.path[n3 + 1]) === "object" && typeof this.path[n3 + 1].x == "number") {
      e5 = new s2(this.path[n3 + 1].x, this.path[n3 + 1].y);
      break;
    }
    this.path.push({ type: "close" }), this.ctx.lastPoint = new s2(e5.x, e5.y);
  }, f2.prototype.lineTo = function(e5, t) {
    if (isNaN(e5) || isNaN(t)) throw Ja.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), Error("Invalid arguments passed to jsPDF.context2d.lineTo");
    var n3 = this.ctx.transform.applyToPoint(new s2(e5, t));
    this.path.push({
      type: "lt",
      x: n3.x,
      y: n3.y
    }), this.ctx.lastPoint = new s2(n3.x, n3.y);
  }, f2.prototype.clip = function() {
    this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), x2.call(this, null, true);
  }, f2.prototype.quadraticCurveTo = function(e5, t, n3, r3) {
    if (isNaN(n3) || isNaN(r3) || isNaN(e5) || isNaN(t)) throw Ja.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
    var i3 = this.ctx.transform.applyToPoint(new s2(n3, r3)), a3 = this.ctx.transform.applyToPoint(new s2(e5, t));
    this.path.push({
      type: "qct",
      x1: a3.x,
      y1: a3.y,
      x: i3.x,
      y: i3.y
    }), this.ctx.lastPoint = new s2(i3.x, i3.y);
  }, f2.prototype.bezierCurveTo = function(e5, t, n3, r3, i3, a3) {
    if (isNaN(i3) || isNaN(a3) || isNaN(e5) || isNaN(t) || isNaN(n3) || isNaN(r3)) throw Ja.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
    var o3 = this.ctx.transform.applyToPoint(new s2(i3, a3)), c4 = this.ctx.transform.applyToPoint(new s2(e5, t)), l3 = this.ctx.transform.applyToPoint(new s2(n3, r3));
    this.path.push({
      type: "bct",
      x1: c4.x,
      y1: c4.y,
      x2: l3.x,
      y2: l3.y,
      x: o3.x,
      y: o3.y
    }), this.ctx.lastPoint = new s2(o3.x, o3.y);
  }, f2.prototype.arc = function(e5, t, n3, r3, i3, a3) {
    if (isNaN(e5) || isNaN(t) || isNaN(n3) || isNaN(r3) || isNaN(i3)) throw Ja.error("jsPDF.context2d.arc: Invalid arguments", arguments), Error("Invalid arguments passed to jsPDF.context2d.arc");
    if (a3 = !!a3, !this.ctx.transform.isIdentity) {
      var o3 = this.ctx.transform.applyToPoint(new s2(e5, t));
      e5 = o3.x, t = o3.y;
      var c4 = this.ctx.transform.applyToPoint(new s2(0, n3)), l3 = this.ctx.transform.applyToPoint(new s2(0, 0));
      n3 = Math.sqrt((c4.x - l3.x) ** 2 + (c4.y - l3.y) ** 2);
    }
    Math.abs(i3 - r3) >= 2 * Math.PI && (r3 = 0, i3 = 2 * Math.PI), this.path.push({
      type: "arc",
      x: e5,
      y: t,
      radius: n3,
      startAngle: r3,
      endAngle: i3,
      counterclockwise: a3
    });
  }, f2.prototype.arcTo = function(e5, t, n3, r3, i3) {
    throw Error("arcTo not implemented.");
  }, f2.prototype.rect = function(e5, t, n3, r3) {
    if (isNaN(e5) || isNaN(t) || isNaN(n3) || isNaN(r3)) throw Ja.error("jsPDF.context2d.rect: Invalid arguments", arguments), Error("Invalid arguments passed to jsPDF.context2d.rect");
    this.moveTo(e5, t), this.lineTo(e5 + n3, t), this.lineTo(e5 + n3, t + r3), this.lineTo(e5, t + r3), this.lineTo(e5, t), this.lineTo(e5 + n3, t), this.lineTo(e5, t);
  }, f2.prototype.fillRect = function(e5, t, n3, r3) {
    if (isNaN(e5) || isNaN(t) || isNaN(n3) || isNaN(r3)) throw Ja.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), Error("Invalid arguments passed to jsPDF.context2d.fillRect");
    if (!m.call(this)) {
      var i3 = {};
      this.lineCap !== "butt" && (i3.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && (i3.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(e5, t, n3, r3), this.fill(), i3.hasOwnProperty("lineCap") && (this.lineCap = i3.lineCap), i3.hasOwnProperty("lineJoin") && (this.lineJoin = i3.lineJoin);
    }
  }, f2.prototype.strokeRect = function(e5, t, n3, r3) {
    if (isNaN(e5) || isNaN(t) || isNaN(n3) || isNaN(r3)) throw Ja.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
    h.call(this) || (this.beginPath(), this.rect(e5, t, n3, r3), this.stroke());
  }, f2.prototype.clearRect = function(e5, t, n3, r3) {
    if (isNaN(e5) || isNaN(t) || isNaN(n3) || isNaN(r3)) throw Ja.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), Error("Invalid arguments passed to jsPDF.context2d.clearRect");
    this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(e5, t, n3, r3));
  }, f2.prototype.save = function(e5) {
    e5 = typeof e5 != "boolean" || e5;
    for (var t = this.pdf.internal.getCurrentPageInfo().pageNumber, n3 = 0; n3 < this.pdf.internal.getNumberOfPages(); n3++) this.pdf.setPage(n3 + 1), this.pdf.internal.out("q");
    if (this.pdf.setPage(t), e5) {
      this.ctx.fontSize = this.pdf.internal.getFontSize();
      var r3 = new d2(this.ctx);
      this.ctxStack.push(this.ctx), this.ctx = r3;
    }
  }, f2.prototype.restore = function(e5) {
    e5 = typeof e5 != "boolean" || e5;
    for (var t = this.pdf.internal.getCurrentPageInfo().pageNumber, n3 = 0; n3 < this.pdf.internal.getNumberOfPages(); n3++) this.pdf.setPage(n3 + 1), this.pdf.internal.out("Q");
    this.pdf.setPage(t), e5 && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
  }, f2.prototype.toDataURL = function() {
    throw Error("toDataUrl not implemented.");
  };
  var p = function(e5) {
    var t, n3, r3, i3;
    if (true === e5.isCanvasGradient && (e5 = e5.getColor()), !e5) return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      style: e5
    };
    if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(e5)) t = 0, n3 = 0, r3 = 0, i3 = 0;
    else {
      var a3 = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(e5);
      if (a3 !== null) t = parseInt(a3[1]), n3 = parseInt(a3[2]), r3 = parseInt(a3[3]), i3 = 1;
      else if ((a3 = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(e5)) !== null) t = parseInt(a3[1]), n3 = parseInt(a3[2]), r3 = parseInt(a3[3]), i3 = parseFloat(a3[4]);
      else {
        if (i3 = 1, typeof e5 == "string" && e5.charAt(0) !== "#") {
          var o3 = new $a(e5);
          e5 = o3.ok ? o3.toHex() : "#000000";
        }
        e5.length === 4 ? (t = e5.substring(1, 2), t += t, n3 = e5.substring(2, 3), n3 += n3, r3 = e5.substring(3, 4), r3 += r3) : (t = e5.substring(1, 3), n3 = e5.substring(3, 5), r3 = e5.substring(5, 7)), t = parseInt(t, 16), n3 = parseInt(n3, 16), r3 = parseInt(r3, 16);
      }
    }
    return {
      r: t,
      g: n3,
      b: r3,
      a: i3,
      style: e5
    };
  }, m = function() {
    return this.ctx.isFillTransparent || this.globalAlpha == 0;
  }, h = function() {
    return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
  };
  f2.prototype.fillText = function(e5, t, n3, r3) {
    if (isNaN(t) || isNaN(n3) || typeof e5 != "string") throw Ja.error("jsPDF.context2d.fillText: Invalid arguments", arguments), Error("Invalid arguments passed to jsPDF.context2d.fillText");
    if (r3 = isNaN(r3) ? void 0 : r3, !m.call(this)) {
      var i3 = F2(this.ctx.transform.rotation), a3 = this.ctx.transform.scaleX;
      k2.call(this, {
        text: e5,
        x: t,
        y: n3,
        scale: a3,
        angle: i3,
        align: this.textAlign,
        maxWidth: r3
      });
    }
  }, f2.prototype.strokeText = function(e5, t, n3, r3) {
    if (isNaN(t) || isNaN(n3) || typeof e5 != "string") throw Ja.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), Error("Invalid arguments passed to jsPDF.context2d.strokeText");
    if (!h.call(this)) {
      r3 = isNaN(r3) ? void 0 : r3;
      var i3 = F2(this.ctx.transform.rotation), a3 = this.ctx.transform.scaleX;
      k2.call(this, {
        text: e5,
        x: t,
        y: n3,
        scale: a3,
        renderingMode: "stroke",
        angle: i3,
        align: this.textAlign,
        maxWidth: r3
      });
    }
  }, f2.prototype.measureText = function(e5) {
    if (typeof e5 != "string") throw Ja.error("jsPDF.context2d.measureText: Invalid arguments", arguments), Error("Invalid arguments passed to jsPDF.context2d.measureText");
    var t = this.pdf, n3 = this.pdf.internal.scaleFactor, r3 = t.internal.getFontSize(), i3 = t.getStringUnitWidth(e5) * r3 / t.internal.scaleFactor;
    return new function(e6) {
      var t2 = (e6 || (e6 = {})).width || 0;
      return Object.defineProperty(this, "width", { get: function() {
        return t2;
      } }), this;
    }({ width: i3 *= Math.round(96 * n3 / 72 * 1e4) / 1e4 });
  }, f2.prototype.scale = function(e5, t) {
    if (isNaN(e5) || isNaN(t)) throw Ja.error("jsPDF.context2d.scale: Invalid arguments", arguments), Error("Invalid arguments passed to jsPDF.context2d.scale");
    var n3 = new l2(e5, 0, 0, t, 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(n3);
  }, f2.prototype.rotate = function(e5) {
    if (isNaN(e5)) throw Ja.error("jsPDF.context2d.rotate: Invalid arguments", arguments), Error("Invalid arguments passed to jsPDF.context2d.rotate");
    var t = new l2(Math.cos(e5), Math.sin(e5), -Math.sin(e5), Math.cos(e5), 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(t);
  }, f2.prototype.translate = function(e5, t) {
    if (isNaN(e5) || isNaN(t)) throw Ja.error("jsPDF.context2d.translate: Invalid arguments", arguments), Error("Invalid arguments passed to jsPDF.context2d.translate");
    var n3 = new l2(1, 0, 0, 1, e5, t);
    this.ctx.transform = this.ctx.transform.multiply(n3);
  }, f2.prototype.transform = function(e5, t, n3, r3, i3, a3) {
    if (isNaN(e5) || isNaN(t) || isNaN(n3) || isNaN(r3) || isNaN(i3) || isNaN(a3)) throw Ja.error("jsPDF.context2d.transform: Invalid arguments", arguments), Error("Invalid arguments passed to jsPDF.context2d.transform");
    var o3 = new l2(e5, t, n3, r3, i3, a3);
    this.ctx.transform = this.ctx.transform.multiply(o3);
  }, f2.prototype.setTransform = function(e5, t, n3, r3, i3, a3) {
    e5 = isNaN(e5) ? 1 : e5, t = isNaN(t) ? 0 : t, n3 = isNaN(n3) ? 0 : n3, r3 = isNaN(r3) ? 1 : r3, i3 = isNaN(i3) ? 0 : i3, a3 = isNaN(a3) ? 0 : a3, this.ctx.transform = new l2(e5, t, n3, r3, i3, a3);
  };
  var g = function() {
    return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
  };
  f2.prototype.drawImage = function(e5, t, n3, r3, i3, a3, o3, s3, u3) {
    var d3 = this.pdf.getImageProperties(e5), f3 = 1, p2 = 1, m2 = 1, h2 = 1;
    r3 !== void 0 && s3 !== void 0 && (m2 = s3 / r3, h2 = u3 / i3, f3 = d3.width / r3 * s3 / r3, p2 = d3.height / i3 * u3 / i3), a3 === void 0 && (a3 = t, o3 = n3, t = 0, n3 = 0), r3 !== void 0 && s3 === void 0 && (s3 = r3, u3 = i3), r3 === void 0 && s3 === void 0 && (s3 = d3.width, u3 = d3.height);
    var v2 = this.ctx.transform.decompose(), x3 = F2(v2.rotate.shx), C3 = new l2(), w3 = (C3 = (C3 = (C3 = C3.multiply(v2.translate)).multiply(v2.skew)).multiply(v2.scale)).applyToRectangle(new c3(a3 - t * m2, o3 - n3 * h2, r3 * f3, i3 * p2));
    if (this.autoPaging) {
      for (var T3, E3 = _.call(this, w3), D3 = [], O3 = 0; O3 < E3.length; O3 += 1) D3.indexOf(E3[O3]) === -1 && D3.push(E3[O3]);
      b2(D3);
      for (var k3 = D3[0], A3 = D3[D3.length - 1], j3 = k3; j3 < A3 + 1; j3++) {
        this.pdf.setPage(j3);
        var M3 = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], N3 = j3 === 1 ? this.posY + this.margin[0] : this.margin[0], P3 = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], I3 = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], L3 = j3 === 1 ? 0 : P3 + (j3 - 2) * I3;
        if (this.ctx.clip_path.length !== 0) {
          var R3 = this.path;
          T3 = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = y(T3, this.posX + this.margin[3], -L3 + N3 + this.ctx.prevPageLastElemOffset), S2.call(this, "fill", true), this.path = R3;
        }
        var z2 = JSON.parse(JSON.stringify(w3));
        z2 = y([z2], this.posX + this.margin[3], -L3 + N3 + this.ctx.prevPageLastElemOffset)[0];
        var B2 = (j3 > k3 || j3 < A3) && g.call(this);
        B2 && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], M3, I3, null).clip().discardPath()), this.pdf.addImage(e5, "JPEG", z2.x, z2.y, z2.w, z2.h, null, null, x3), B2 && this.pdf.restoreGraphicsState();
      }
    } else this.pdf.addImage(e5, "JPEG", w3.x, w3.y, w3.w, w3.h, null, null, x3);
  };
  var _ = function(e5, t, n3) {
    var r3 = [];
    t || (t = this.pdf.internal.pageSize.width), n3 || (n3 = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2]);
    var i3 = this.posY + this.ctx.prevPageLastElemOffset;
    switch (e5.type) {
      default:
      case "mt":
      case "lt":
        r3.push(Math.floor((e5.y + i3) / n3) + 1);
        break;
      case "arc":
        r3.push(Math.floor((e5.y + i3 - e5.radius) / n3) + 1), r3.push(Math.floor((e5.y + i3 + e5.radius) / n3) + 1);
        break;
      case "qct":
        var a3 = I2(this.ctx.lastPoint.x, this.ctx.lastPoint.y, e5.x1, e5.y1, e5.x, e5.y);
        r3.push(Math.floor((a3.y + i3) / n3) + 1), r3.push(Math.floor((a3.y + a3.h + i3) / n3) + 1);
        break;
      case "bct":
        var o3 = L2(this.ctx.lastPoint.x, this.ctx.lastPoint.y, e5.x1, e5.y1, e5.x2, e5.y2, e5.x, e5.y);
        r3.push(Math.floor((o3.y + i3) / n3) + 1), r3.push(Math.floor((o3.y + o3.h + i3) / n3) + 1);
        break;
      case "rect":
        r3.push(Math.floor((e5.y + i3) / n3) + 1), r3.push(Math.floor((e5.y + e5.h + i3) / n3) + 1);
    }
    for (var s3 = 0; s3 < r3.length; s3 += 1) for (; this.pdf.internal.getNumberOfPages() < r3[s3]; ) v.call(this);
    return r3;
  }, v = function() {
    var e5 = this.fillStyle, t = this.strokeStyle, n3 = this.font, r3 = this.lineCap, i3 = this.lineWidth, a3 = this.lineJoin;
    this.pdf.addPage(), this.fillStyle = e5, this.strokeStyle = t, this.font = n3, this.lineCap = r3, this.lineWidth = i3, this.lineJoin = a3;
  }, y = function(e5, t, n3) {
    for (var r3 = 0; r3 < e5.length; r3++) switch (e5[r3].type) {
      case "bct":
        e5[r3].x2 += t, e5[r3].y2 += n3;
      case "qct":
        e5[r3].x1 += t, e5[r3].y1 += n3;
      default:
        e5[r3].x += t, e5[r3].y += n3;
    }
    return e5;
  }, b2 = function(e5) {
    return e5.sort(function(e6, t) {
      return e6 - t;
    });
  }, x2 = function(e5, t) {
    var n3 = this.fillStyle, r3 = this.strokeStyle, i3 = this.lineCap, a3 = this.lineWidth, o3 = Math.abs(a3 * this.ctx.transform.scaleX), s3 = this.lineJoin;
    if (this.autoPaging) {
      for (var c4, l3, u3 = JSON.parse(JSON.stringify(this.path)), d3 = JSON.parse(JSON.stringify(this.path)), f3 = [], p2 = 0; p2 < d3.length; p2++) if (d3[p2].x !== void 0) for (var m2 = _.call(this, d3[p2]), h2 = 0; h2 < m2.length; h2 += 1) f3.indexOf(m2[h2]) === -1 && f3.push(m2[h2]);
      for (var x3 = 0; x3 < f3.length; x3++) for (; this.pdf.internal.getNumberOfPages() < f3[x3]; ) v.call(this);
      b2(f3);
      for (var C3 = f3[0], w3 = f3[f3.length - 1], T3 = C3; T3 < w3 + 1; T3++) {
        this.pdf.setPage(T3), this.fillStyle = n3, this.strokeStyle = r3, this.lineCap = i3, this.lineWidth = o3, this.lineJoin = s3;
        var E3 = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], D3 = T3 === 1 ? this.posY + this.margin[0] : this.margin[0], O3 = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], k3 = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], A3 = T3 === 1 ? 0 : O3 + (T3 - 2) * k3;
        if (this.ctx.clip_path.length !== 0) {
          var j3 = this.path;
          c4 = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = y(c4, this.posX + this.margin[3], -A3 + D3 + this.ctx.prevPageLastElemOffset), S2.call(this, e5, true), this.path = j3;
        }
        if (l3 = JSON.parse(JSON.stringify(u3)), this.path = y(l3, this.posX + this.margin[3], -A3 + D3 + this.ctx.prevPageLastElemOffset), false === t || T3 === 0) {
          var M3 = (T3 > C3 || T3 < w3) && g.call(this);
          M3 && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], E3, k3, null).clip().discardPath()), S2.call(this, e5, t), M3 && this.pdf.restoreGraphicsState();
        }
        this.lineWidth = a3;
      }
      this.path = u3;
    } else this.lineWidth = o3, S2.call(this, e5, t), this.lineWidth = a3;
  }, S2 = function(e5, t) {
    if ((e5 !== "stroke" || t || !h.call(this)) && (e5 === "stroke" || t || !m.call(this))) {
      for (var n3, r3, i3 = [], a3 = this.path, o3 = 0; o3 < a3.length; o3++) {
        var s3 = a3[o3];
        switch (s3.type) {
          case "begin":
            i3.push({ begin: true });
            break;
          case "close":
            i3.push({ close: true });
            break;
          case "mt":
            i3.push({
              start: s3,
              deltas: [],
              abs: []
            });
            break;
          case "lt":
            var c4 = i3.length;
            if (a3[o3 - 1] && !isNaN(a3[o3 - 1].x) && (n3 = [s3.x - a3[o3 - 1].x, s3.y - a3[o3 - 1].y], c4 > 0)) {
              for (; c4 >= 0; c4--) if (true !== i3[c4 - 1].close && true !== i3[c4 - 1].begin) {
                i3[c4 - 1].deltas.push(n3), i3[c4 - 1].abs.push(s3);
                break;
              }
            }
            break;
          case "bct":
            n3 = [
              s3.x1 - a3[o3 - 1].x,
              s3.y1 - a3[o3 - 1].y,
              s3.x2 - a3[o3 - 1].x,
              s3.y2 - a3[o3 - 1].y,
              s3.x - a3[o3 - 1].x,
              s3.y - a3[o3 - 1].y
            ], i3[i3.length - 1].deltas.push(n3);
            break;
          case "qct":
            var l3 = a3[o3 - 1].x + 2 / 3 * (s3.x1 - a3[o3 - 1].x), u3 = a3[o3 - 1].y + 2 / 3 * (s3.y1 - a3[o3 - 1].y), d3 = s3.x + 2 / 3 * (s3.x1 - s3.x), f3 = s3.y + 2 / 3 * (s3.y1 - s3.y), p2 = s3.x, g2 = s3.y;
            n3 = [
              l3 - a3[o3 - 1].x,
              u3 - a3[o3 - 1].y,
              d3 - a3[o3 - 1].x,
              f3 - a3[o3 - 1].y,
              p2 - a3[o3 - 1].x,
              g2 - a3[o3 - 1].y
            ], i3[i3.length - 1].deltas.push(n3);
            break;
          case "arc":
            i3.push({
              deltas: [],
              abs: [],
              arc: true
            }), Array.isArray(i3[i3.length - 1].abs) && i3[i3.length - 1].abs.push(s3);
        }
      }
      r3 = t ? null : e5 === "stroke" ? "stroke" : "fill";
      for (var _2 = false, v2 = 0; v2 < i3.length; v2++) if (i3[v2].arc) for (var y2 = i3[v2].abs, b3 = 0; b3 < y2.length; b3++) {
        var x3 = y2[b3];
        x3.type === "arc" ? T2.call(this, x3.x, x3.y, x3.radius, x3.startAngle, x3.endAngle, x3.counterclockwise, void 0, t, !_2) : A2.call(this, x3.x, x3.y), _2 = true;
      }
      else if (true === i3[v2].close) this.pdf.internal.out("h"), _2 = false;
      else if (true !== i3[v2].begin) {
        var S3 = i3[v2].start.x, C3 = i3[v2].start.y;
        j2.call(this, i3[v2].deltas, S3, C3), _2 = true;
      }
      r3 && E2.call(this, r3), t && D2.call(this);
    }
  }, C2 = function(e5) {
    var t = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, n3 = t * (this.pdf.internal.getLineHeightFactor() - 1);
    switch (this.ctx.textBaseline) {
      case "bottom":
        return e5 - n3;
      case "top":
        return e5 + t - n3;
      case "hanging":
        return e5 + t - 2 * n3;
      case "middle":
        return e5 + t / 2 - n3;
      default:
        return e5;
    }
  }, w2 = function(e5) {
    return e5 + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
  };
  f2.prototype.createLinearGradient = function() {
    var e5 = function() {
    };
    return e5.colorStops = [], e5.addColorStop = function(e6, t) {
      this.colorStops.push([e6, t]);
    }, e5.getColor = function() {
      return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1];
    }, e5.isCanvasGradient = true, e5;
  }, f2.prototype.createPattern = function() {
    return this.createLinearGradient();
  }, f2.prototype.createRadialGradient = function() {
    return this.createLinearGradient();
  };
  var T2 = function(e5, t, n3, r3, i3, a3, o3, s3, c4) {
    for (var l3 = N2.call(this, n3, r3, i3, a3), u3 = 0; u3 < l3.length; u3++) {
      var d3 = l3[u3];
      u3 === 0 && (c4 ? O2.call(this, d3.x1 + e5, d3.y1 + t) : A2.call(this, d3.x1 + e5, d3.y1 + t)), M2.call(this, e5, t, d3.x2, d3.y2, d3.x3, d3.y3, d3.x4, d3.y4);
    }
    s3 ? D2.call(this) : E2.call(this, o3);
  }, E2 = function(e5) {
    switch (e5) {
      case "stroke":
        this.pdf.internal.out("S");
        break;
      case "fill":
        this.pdf.internal.out("f");
    }
  }, D2 = function() {
    this.pdf.clip(), this.pdf.discardPath();
  }, O2 = function(e5, t) {
    this.pdf.internal.out(r2(e5) + " " + i2(t) + " m");
  }, k2 = function(e5) {
    var t;
    switch (e5.align) {
      case "right":
      case "end":
        t = "right";
        break;
      case "center":
        t = "center";
        break;
      default:
        t = "left";
    }
    var n3, r3, i3, a3 = this.pdf.getTextDimensions(e5.text), o3 = C2.call(this, e5.y), u3 = w2.call(this, o3) - a3.h, d3 = this.ctx.transform.applyToPoint(new s2(e5.x, o3));
    if (this.autoPaging) {
      var f3 = this.ctx.transform.decompose(), p2 = new l2();
      p2 = (p2 = (p2 = p2.multiply(f3.translate)).multiply(f3.skew)).multiply(f3.scale);
      for (var m2 = this.ctx.transform.applyToRectangle(new c3(e5.x, o3, a3.w, a3.h)), h2 = p2.applyToRectangle(new c3(e5.x, u3, a3.w, a3.h)), v2 = _.call(this, h2), x3 = [], T3 = 0; T3 < v2.length; T3 += 1) x3.indexOf(v2[T3]) === -1 && x3.push(v2[T3]);
      b2(x3);
      for (var E3 = x3[0], D3 = x3[x3.length - 1], O3 = E3; O3 < D3 + 1; O3++) {
        this.pdf.setPage(O3);
        var k3 = O3 === 1 ? this.posY + this.margin[0] : this.margin[0], A3 = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], j3 = this.pdf.internal.pageSize.height - this.margin[2], M3 = j3 - this.margin[0], N3 = this.pdf.internal.pageSize.width - this.margin[1], P3 = N3 - this.margin[3], F3 = O3 === 1 ? 0 : A3 + (O3 - 2) * M3;
        if (this.ctx.clip_path.length !== 0) {
          var I3 = this.path;
          n3 = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = y(n3, this.posX + this.margin[3], -1 * F3 + k3), S2.call(this, "fill", true), this.path = I3;
        }
        var L3 = y([JSON.parse(JSON.stringify(h2))], this.posX + this.margin[3], -F3 + k3 + this.ctx.prevPageLastElemOffset)[0];
        e5.scale >= 0.01 && (r3 = this.pdf.internal.getFontSize(), this.pdf.setFontSize(r3 * e5.scale), i3 = this.lineWidth, this.lineWidth = i3 * e5.scale);
        var R3 = this.autoPaging !== "text";
        if (R3 || L3.y + L3.h <= j3) {
          if (R3 || L3.y >= k3 && L3.x <= N3) {
            var z2 = R3 ? e5.text : this.pdf.splitTextToSize(e5.text, e5.maxWidth || N3 - L3.x)[0], B2 = y([JSON.parse(JSON.stringify(m2))], this.posX + this.margin[3], -F3 + k3 + this.ctx.prevPageLastElemOffset)[0], V2 = R3 && (O3 > E3 || O3 < D3) && g.call(this);
            V2 && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], P3, M3, null).clip().discardPath()), this.pdf.text(z2, B2.x, B2.y, {
              angle: e5.angle,
              align: t,
              renderingMode: e5.renderingMode
            }), V2 && this.pdf.restoreGraphicsState();
          }
        } else L3.y < j3 && (this.ctx.prevPageLastElemOffset += j3 - L3.y);
        e5.scale >= 0.01 && (this.pdf.setFontSize(r3), this.lineWidth = i3);
      }
    } else e5.scale >= 0.01 && (r3 = this.pdf.internal.getFontSize(), this.pdf.setFontSize(r3 * e5.scale), i3 = this.lineWidth, this.lineWidth = i3 * e5.scale), this.pdf.text(e5.text, d3.x + this.posX, d3.y + this.posY, {
      angle: e5.angle,
      align: t,
      renderingMode: e5.renderingMode,
      maxWidth: e5.maxWidth
    }), e5.scale >= 0.01 && (this.pdf.setFontSize(r3), this.lineWidth = i3);
  }, A2 = function(e5, t, n3, a3) {
    n3 || (n3 = 0), a3 || (a3 = 0), this.pdf.internal.out(r2(e5 + n3) + " " + i2(t + a3) + " l");
  }, j2 = function(e5, t, n3) {
    return this.pdf.lines(e5, t, n3, null, null);
  }, M2 = function(e5, t, r3, i3, s3, c4, l3, u3) {
    this.pdf.internal.out([
      n2(a2(r3 + e5)),
      n2(o2(i3 + t)),
      n2(a2(s3 + e5)),
      n2(o2(c4 + t)),
      n2(a2(l3 + e5)),
      n2(o2(u3 + t)),
      "c"
    ].join(" "));
  }, N2 = function(e5, t, n3, r3) {
    for (var i3 = 2 * Math.PI, a3 = Math.PI / 2; t > n3; ) t -= i3;
    var o3 = Math.abs(n3 - t);
    o3 < i3 && r3 && (o3 = i3 - o3);
    for (var s3 = [], c4 = r3 ? -1 : 1, l3 = t; o3 > 1e-5; ) {
      var u3 = l3 + c4 * Math.min(o3, a3);
      s3.push(P2.call(this, e5, l3, u3)), o3 -= Math.abs(u3 - l3), l3 = u3;
    }
    return s3;
  }, P2 = function(e5, t, n3) {
    var r3 = (n3 - t) / 2, i3 = e5 * Math.cos(r3), a3 = e5 * Math.sin(r3), o3 = i3, s3 = -a3, c4 = o3 * o3 + s3 * s3, l3 = c4 + o3 * i3 + s3 * a3, u3 = 4 / 3 * (Math.sqrt(2 * c4 * l3) - l3) / (o3 * a3 - s3 * i3), d3 = o3 - u3 * s3, f3 = s3 + u3 * o3, p2 = d3, m2 = -f3, h2 = r3 + t, g2 = Math.cos(h2), _2 = Math.sin(h2);
    return {
      x1: e5 * Math.cos(t),
      y1: e5 * Math.sin(t),
      x2: d3 * g2 - f3 * _2,
      y2: d3 * _2 + f3 * g2,
      x3: p2 * g2 - m2 * _2,
      y3: p2 * _2 + m2 * g2,
      x4: e5 * Math.cos(n3),
      y4: e5 * Math.sin(n3)
    };
  }, F2 = function(e5) {
    return 180 * e5 / Math.PI;
  }, I2 = function(e5, t, n3, r3, i3, a3) {
    var o3 = e5 + 0.5 * (n3 - e5), s3 = t + 0.5 * (r3 - t), l3 = i3 + 0.5 * (n3 - i3), u3 = a3 + 0.5 * (r3 - a3), d3 = Math.min(e5, i3, o3, l3), f3 = Math.max(e5, i3, o3, l3), p2 = Math.min(t, a3, s3, u3), m2 = Math.max(t, a3, s3, u3);
    return new c3(d3, p2, f3 - d3, m2 - p2);
  }, L2 = function(e5, t, n3, r3, i3, a3, o3, s3) {
    var l3, u3, d3, f3, p2, m2, h2, g2, _2, v2, y2, b3, x3, S3, C3 = n3 - e5, w3 = r3 - t, T3 = i3 - n3, E3 = a3 - r3, D3 = o3 - i3, O3 = s3 - a3;
    for (u3 = 0; u3 < 41; u3++) _2 = (h2 = (d3 = e5 + (l3 = u3 / 40) * C3) + l3 * ((p2 = n3 + l3 * T3) - d3)) + l3 * (p2 + l3 * (i3 + l3 * D3 - p2) - h2), v2 = (g2 = (f3 = t + l3 * w3) + l3 * ((m2 = r3 + l3 * E3) - f3)) + l3 * (m2 + l3 * (a3 + l3 * O3 - m2) - g2), u3 == 0 ? (y2 = _2, b3 = v2, x3 = _2, S3 = v2) : (y2 = Math.min(y2, _2), b3 = Math.min(b3, v2), x3 = Math.max(x3, _2), S3 = Math.max(S3, v2));
    return new c3(Math.round(y2), Math.round(b3), Math.round(x3 - y2), Math.round(S3 - b3));
  }, R2 = function() {
    if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
      var e5, t, n3 = (e5 = this.ctx.lineDash, t = this.ctx.lineDashOffset, JSON.stringify({
        lineDash: e5,
        lineDashOffset: t
      }));
      this.prevLineDash !== n3 && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = n3);
    }
  };
})(Z.API), function(e4) {
  var t = function(e5) {
    var t2, n3, r3, i3, a3, o2, s2, c3, l2, u2;
    for (/[^\x00-\xFF]/.test(e5), n3 = [], r3 = 0, i3 = (e5 += t2 = "\0\0\0\0".slice(e5.length % 4 || 4)).length; i3 > r3; r3 += 4) (a3 = (e5.charCodeAt(r3) << 24) + (e5.charCodeAt(r3 + 1) << 16) + (e5.charCodeAt(r3 + 2) << 8) + e5.charCodeAt(r3 + 3)) === 0 ? n3.push(122) : (o2 = (a3 = ((a3 = ((a3 = ((a3 = (a3 - (u2 = a3 % 85)) / 85) - (l2 = a3 % 85)) / 85) - (c3 = a3 % 85)) / 85) - (s2 = a3 % 85)) / 85) % 85, n3.push(o2 + 33, s2 + 33, c3 + 33, l2 + 33, u2 + 33));
    return function(e6, t3) {
      for (var n4 = t3; n4 > 0; n4--) e6.pop();
    }(n3, t2.length), String.fromCharCode.apply(String, n3) + "~>";
  }, n2 = function(e5) {
    var t2, n3, r3, i3, a3, o2 = String, s2 = "length", c3 = 255, l2 = "charCodeAt", u2 = "slice", d2 = "replace";
    for (e5[u2](-2), e5 = e5[u2](0, -2)[d2](/\s/g, "")[d2]("z", "!!!!!"), r3 = [], i3 = 0, a3 = (e5 += t2 = "uuuuu"[u2](e5[s2] % 5 || 5))[s2]; a3 > i3; i3 += 5) n3 = 52200625 * (e5[l2](i3) - 33) + 614125 * (e5[l2](i3 + 1) - 33) + 7225 * (e5[l2](i3 + 2) - 33) + 85 * (e5[l2](i3 + 3) - 33) + (e5[l2](i3 + 4) - 33), r3.push(c3 & n3 >> 24, c3 & n3 >> 16, c3 & n3 >> 8, c3 & n3);
    return function(e6, t3) {
      for (var n4 = t3; n4 > 0; n4--) e6.pop();
    }(r3, t2[s2]), o2.fromCharCode.apply(o2, r3);
  }, r2 = function(e5) {
    return e5.split("").map(function(e6) {
      return ("0" + e6.charCodeAt().toString(16)).slice(-2);
    }).join("") + ">";
  }, i2 = function(e5) {
    var t2 = new RegExp(/^([0-9A-Fa-f]{2})+$/);
    if ((e5 = e5.replace(/\s/g, "")).indexOf(">") !== -1 && (e5 = e5.substr(0, e5.indexOf(">"))), e5.length % 2 && (e5 += "0"), false === t2.test(e5)) return "";
    for (var n3 = "", r3 = 0; r3 < e5.length; r3 += 2) n3 += String.fromCharCode("0x" + (e5[r3] + e5[r3 + 1]));
    return n3;
  }, a2 = function(e5) {
    for (var t2 = new Uint8Array(e5.length), n3 = e5.length; n3--; ) t2[n3] = e5.charCodeAt(n3);
    return (t2 = z(t2)).reduce(function(e6, t3) {
      return e6 + String.fromCharCode(t3);
    }, "");
  };
  e4.processDataByFilters = function(e5, o2) {
    var s2 = 0, c3 = e5 || "", l2 = [];
    for (typeof (o2 || (o2 = [])) == "string" && (o2 = [o2]), s2 = 0; s2 < o2.length; s2 += 1) switch (o2[s2]) {
      case "ASCII85Decode":
      case "/ASCII85Decode":
        c3 = n2(c3), l2.push("/ASCII85Encode");
        break;
      case "ASCII85Encode":
      case "/ASCII85Encode":
        c3 = t(c3), l2.push("/ASCII85Decode");
        break;
      case "ASCIIHexDecode":
      case "/ASCIIHexDecode":
        c3 = i2(c3), l2.push("/ASCIIHexEncode");
        break;
      case "ASCIIHexEncode":
      case "/ASCIIHexEncode":
        c3 = r2(c3), l2.push("/ASCIIHexDecode");
        break;
      case "FlateEncode":
      case "/FlateEncode":
        c3 = a2(c3), l2.push("/FlateDecode");
        break;
      default:
        throw Error('The filter: "' + o2[s2] + '" is not implemented');
    }
    return {
      data: c3,
      reverseChain: l2.reverse().join(" ")
    };
  };
}(Z.API), function(e4) {
  e4.loadFile = function(e5, t, n2) {
    return function(e6, t2, n3) {
      t2 = false !== t2, n3 = typeof n3 == "function" ? n3 : function() {
      };
      var r2 = void 0;
      try {
        r2 = function(e7, t3, n4) {
          var r3 = new XMLHttpRequest(), i2 = 0, a2 = function(e8) {
            var t4 = e8.length, n5 = [], r4 = String.fromCharCode;
            for (i2 = 0; i2 < t4; i2 += 1) n5.push(r4(255 & e8.charCodeAt(i2)));
            return n5.join("");
          };
          if (r3.open("GET", e7, !t3), r3.overrideMimeType("text/plain; charset=x-user-defined"), false === t3 && (r3.onload = function() {
            r3.status === 200 ? n4(a2(this.responseText)) : n4(void 0);
          }), r3.send(null), t3 && r3.status === 200) return a2(r3.responseText);
        }(e6, t2, n3);
      } catch {
      }
      return r2;
    }(e5, t, n2);
  }, e4.allowFsRead = void 0, e4.loadImageFile = e4.loadFile;
}(Z.API), function(n2) {
  function r2() {
    return (X.html2canvas ? Promise.resolve(X.html2canvas) : import("./html2canvas-Bwmq6fGh-ADNEBVR7.js").then((t) => c(t.default))).catch(function(e4) {
      return Promise.reject(Error("Could not load html2canvas: " + e4));
    }).then(function(e4) {
      return e4.default ? e4.default : e4;
    });
  }
  function i2() {
    return (X.DOMPurify ? Promise.resolve(X.DOMPurify) : import("./purify.es-B5ixYH9L-7APK5GQN.js")).catch(function(e4) {
      return Promise.reject(Error("Could not load dompurify: " + e4));
    }).then(function(e4) {
      return e4.default ? e4.default : e4;
    });
  }
  var a2 = function(e4) {
    var n3 = e(e4);
    return n3 === "undefined" ? "undefined" : n3 === "string" || e4 instanceof String ? "string" : n3 === "number" || e4 instanceof Number ? "number" : n3 === "function" || e4 instanceof Function ? "function" : e4 && e4.constructor === Array ? "array" : e4 && e4.nodeType === 1 ? "element" : n3 === "object" ? "object" : "unknown";
  }, o2 = function(e4, t) {
    var n3 = document.createElement(e4);
    for (var r3 in t.className && (n3.className = t.className), t.innerHTML && t.dompurify && (n3.innerHTML = t.dompurify.sanitize(t.innerHTML)), t.style) n3.style[r3] = t.style[r3];
    return n3;
  }, s2 = function e4(t, n3) {
    for (var r3 = t.nodeType === 3 ? document.createTextNode(t.nodeValue) : t.cloneNode(false), i3 = t.firstChild; i3; i3 = i3.nextSibling) true !== n3 && i3.nodeType === 1 && i3.nodeName === "SCRIPT" || r3.appendChild(e4(i3, n3));
    return t.nodeType === 1 && (t.nodeName === "CANVAS" ? (r3.width = t.width, r3.height = t.height, r3.getContext("2d").drawImage(t, 0, 0)) : t.nodeName !== "TEXTAREA" && t.nodeName !== "SELECT" || (r3.value = t.value), r3.addEventListener("load", function() {
      r3.scrollTop = t.scrollTop, r3.scrollLeft = t.scrollLeft;
    }, true)), r3;
  }, c3 = function e4(t) {
    var n3 = Object.assign(e4.convert(Promise.resolve()), JSON.parse(JSON.stringify(e4.template))), r3 = e4.convert(Promise.resolve(), n3);
    return (r3 = r3.setProgress(1, e4, 1, [e4])).set(t);
  };
  (c3.prototype = Object.create(Promise.prototype)).constructor = c3, c3.convert = function(e4, t) {
    return e4.__proto__ = t || c3.prototype, e4;
  }, c3.template = {
    prop: {
      src: null,
      container: null,
      overlay: null,
      canvas: null,
      img: null,
      pdf: null,
      pageSize: null,
      callback: function() {
      }
    },
    progress: {
      val: 0,
      state: null,
      n: 0,
      stack: []
    },
    opt: {
      filename: "file.pdf",
      margin: [
        0,
        0,
        0,
        0
      ],
      enableLinks: true,
      x: 0,
      y: 0,
      html2canvas: {},
      jsPDF: {},
      backgroundColor: "transparent"
    }
  }, c3.prototype.from = function(e4, t) {
    return this.then(function() {
      switch (t || (t = function(e5) {
        switch (a2(e5)) {
          case "string":
            return "string";
          case "element":
            return e5.nodeName.toLowerCase() === "canvas" ? "canvas" : "element";
          default:
            return "unknown";
        }
      }(e4)), t) {
        case "string":
          return this.then(i2).then(function(t2) {
            return this.set({ src: o2("div", {
              innerHTML: e4,
              dompurify: t2
            }) });
          });
        case "element":
          return this.set({ src: e4 });
        case "canvas":
          return this.set({ canvas: e4 });
        case "img":
          return this.set({ img: e4 });
        default:
          return this.error("Unknown source type.");
      }
    });
  }, c3.prototype.to = function(e4) {
    switch (e4) {
      case "container":
        return this.toContainer();
      case "canvas":
        return this.toCanvas();
      case "img":
        return this.toImg();
      case "pdf":
        return this.toPdf();
      default:
        return this.error("Invalid target.");
    }
  }, c3.prototype.toContainer = function() {
    return this.thenList([function() {
      return this.prop.src || this.error("Cannot duplicate - no source HTML.");
    }, function() {
      return this.prop.pageSize || this.setPageSize();
    }]).then(function() {
      var e4 = {
        position: "relative",
        display: "inline-block",
        width: (typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px",
        left: 0,
        right: 0,
        top: 0,
        margin: "auto",
        backgroundColor: this.opt.backgroundColor
      }, t = s2(this.prop.src, this.opt.html2canvas.javascriptEnabled);
      t.tagName === "BODY" && (e4.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = o2("div", {
        className: "html2pdf__overlay",
        style: {
          position: "fixed",
          overflow: "hidden",
          zIndex: 1e3,
          left: "-100000px",
          right: 0,
          bottom: 0,
          top: 0
        }
      }), this.prop.container = o2("div", {
        className: "html2pdf__container",
        style: e4
      }), this.prop.container.appendChild(t), this.prop.container.firstChild.appendChild(o2("div", { style: {
        clear: "both",
        border: "0 none transparent",
        margin: 0,
        padding: 0,
        height: 0
      } })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
    });
  }, c3.prototype.toCanvas = function() {
    return this.thenList([function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }]).then(r2).then(function(e4) {
      var t = Object.assign({}, this.opt.html2canvas);
      return delete t.onrendered, e4(this.prop.container, t);
    }).then(function(e4) {
      (this.opt.html2canvas.onrendered || function() {
      })(e4), this.prop.canvas = e4, document.body.removeChild(this.prop.overlay);
    });
  }, c3.prototype.toContext2d = function() {
    return this.thenList([function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }]).then(r2).then(function(e4) {
      var t = this.opt.jsPDF, n3 = this.opt.fontFaces, r3 = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, i3 = Object.assign({
        async: true,
        allowTaint: true,
        scale: r3,
        scrollX: this.opt.scrollX || 0,
        scrollY: this.opt.scrollY || 0,
        backgroundColor: "#ffffff",
        imageTimeout: 15e3,
        logging: true,
        proxy: null,
        removeContainer: true,
        foreignObjectRendering: false,
        useCORS: false
      }, this.opt.html2canvas);
      if (delete i3.onrendered, t.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging, t.context2d.posX = this.opt.x, t.context2d.posY = this.opt.y, t.context2d.margin = this.opt.margin, t.context2d.fontFaces = n3, n3) for (var a3 = 0; a3 < n3.length; ++a3) {
        var o3 = n3[a3], s3 = o3.src.find(function(e5) {
          return e5.format === "truetype";
        });
        s3 && t.addFont(s3.url, o3.ref.name, o3.ref.style);
      }
      return i3.windowHeight = i3.windowHeight || 0, i3.windowHeight = i3.windowHeight == 0 ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : i3.windowHeight, t.context2d.save(true), e4(this.prop.container, i3);
    }).then(function(e4) {
      this.opt.jsPDF.context2d.restore(true), (this.opt.html2canvas.onrendered || function() {
      })(e4), this.prop.canvas = e4, document.body.removeChild(this.prop.overlay);
    });
  }, c3.prototype.toImg = function() {
    return this.thenList([function() {
      return this.prop.canvas || this.toCanvas();
    }]).then(function() {
      var e4 = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
      this.prop.img = document.createElement("img"), this.prop.img.src = e4;
    });
  }, c3.prototype.toPdf = function() {
    return this.thenList([function() {
      return this.toContext2d();
    }]).then(function() {
      this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
    });
  }, c3.prototype.output = function(e4, t, n3) {
    return (n3 || (n3 = "pdf")).toLowerCase() === "img" || n3.toLowerCase() === "image" ? this.outputImg(e4, t) : this.outputPdf(e4, t);
  }, c3.prototype.outputPdf = function(e4, t) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      return this.prop.pdf.output(e4, t);
    });
  }, c3.prototype.outputImg = function(e4) {
    return this.thenList([function() {
      return this.prop.img || this.toImg();
    }]).then(function() {
      switch (e4) {
        case void 0:
        case "img":
          return this.prop.img;
        case "datauristring":
        case "dataurlstring":
          return this.prop.img.src;
        case "datauri":
        case "dataurl":
          return document.location.href = this.prop.img.src;
        default:
          throw 'Image output type "' + e4 + '" is not supported.';
      }
    });
  }, c3.prototype.save = function(e4) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).set(e4 ? { filename: e4 } : null).then(function() {
      this.prop.pdf.save(this.opt.filename);
    });
  }, c3.prototype.doCallback = function() {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      this.prop.callback(this.prop.pdf);
    });
  }, c3.prototype.set = function(e4) {
    if (a2(e4) !== "object") return this;
    var t = Object.keys(e4 || {}).map(function(t2) {
      if (t2 in c3.template.prop) return function() {
        this.prop[t2] = e4[t2];
      };
      switch (t2) {
        case "margin":
          return this.setMargin.bind(this, e4.margin);
        case "jsPDF":
          return function() {
            return this.opt.jsPDF = e4.jsPDF, this.setPageSize();
          };
        case "pageSize":
          return this.setPageSize.bind(this, e4.pageSize);
        default:
          return function() {
            this.opt[t2] = e4[t2];
          };
      }
    }, this);
    return this.then(function() {
      return this.thenList(t);
    });
  }, c3.prototype.get = function(e4, t) {
    return this.then(function() {
      var n3 = e4 in c3.template.prop ? this.prop[e4] : this.opt[e4];
      return t ? t(n3) : n3;
    });
  }, c3.prototype.setMargin = function(e4) {
    return this.then(function() {
      switch (a2(e4)) {
        case "number":
          e4 = [
            e4,
            e4,
            e4,
            e4
          ];
        case "array":
          if (e4.length === 2 && (e4 = [
            e4[0],
            e4[1],
            e4[0],
            e4[1]
          ]), e4.length === 4) break;
        default:
          return this.error("Invalid margin array.");
      }
      this.opt.margin = e4;
    }).then(this.setPageSize);
  }, c3.prototype.setPageSize = function(e4) {
    function t(e5, t2) {
      return Math.floor(e5 * t2 / 72 * 96);
    }
    return this.then(function() {
      (e4 || (e4 = Z.getPageSize(this.opt.jsPDF))).hasOwnProperty("inner") || (e4.inner = {
        width: e4.width - this.opt.margin[1] - this.opt.margin[3],
        height: e4.height - this.opt.margin[0] - this.opt.margin[2]
      }, e4.inner.px = {
        width: t(e4.inner.width, e4.k),
        height: t(e4.inner.height, e4.k)
      }, e4.inner.ratio = e4.inner.height / e4.inner.width), this.prop.pageSize = e4;
    });
  }, c3.prototype.setProgress = function(e4, t, n3, r3) {
    return e4 != null && (this.progress.val = e4), t != null && (this.progress.state = t), n3 != null && (this.progress.n = n3), r3 != null && (this.progress.stack = r3), this.progress.ratio = this.progress.val / this.progress.state, this;
  }, c3.prototype.updateProgress = function(e4, t, n3, r3) {
    return this.setProgress(e4 ? this.progress.val + e4 : null, t || null, n3 ? this.progress.n + n3 : null, r3 ? this.progress.stack.concat(r3) : null);
  }, c3.prototype.then = function(e4, t) {
    var n3 = this;
    return this.thenCore(e4, t, function(e5, t2) {
      return n3.updateProgress(null, null, 1, [e5]), Promise.prototype.then.call(this, function(t3) {
        return n3.updateProgress(null, e5), t3;
      }).then(e5, t2).then(function(e6) {
        return n3.updateProgress(1), e6;
      });
    });
  }, c3.prototype.thenCore = function(e4, t, n3) {
    n3 || (n3 = Promise.prototype.then);
    var r3 = this;
    e4 && (e4 = e4.bind(r3)), t && (t = t.bind(r3));
    var i3 = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? r3 : c3.convert(Object.assign({}, r3), Promise.prototype), a3 = n3.call(i3, e4, t);
    return c3.convert(a3, r3.__proto__);
  }, c3.prototype.thenExternal = function(e4, t) {
    return Promise.prototype.then.call(this, e4, t);
  }, c3.prototype.thenList = function(e4) {
    var t = this;
    return e4.forEach(function(e5) {
      t = t.thenCore(e5);
    }), t;
  }, c3.prototype.catch = function(e4) {
    e4 && (e4 = e4.bind(this));
    var t = Promise.prototype.catch.call(this, e4);
    return c3.convert(t, this);
  }, c3.prototype.catchExternal = function(e4) {
    return Promise.prototype.catch.call(this, e4);
  }, c3.prototype.error = function(e4) {
    return this.then(function() {
      throw Error(e4);
    });
  }, c3.prototype.using = c3.prototype.set, c3.prototype.saveAs = c3.prototype.save, c3.prototype.export = c3.prototype.output, c3.prototype.run = c3.prototype.then, Z.getPageSize = function(e4, n3, r3) {
    if (e(e4) === "object") {
      var i3 = e4;
      e4 = i3.orientation, n3 = i3.unit || n3, r3 = i3.format || r3;
    }
    n3 || (n3 = "mm"), r3 || (r3 = "a4"), e4 = ("" + (e4 || "P")).toLowerCase();
    var a3, o3 = ("" + r3).toLowerCase(), s3 = {
      a0: [2383.94, 3370.39],
      a1: [1683.78, 2383.94],
      a2: [1190.55, 1683.78],
      a3: [841.89, 1190.55],
      a4: [595.28, 841.89],
      a5: [419.53, 595.28],
      a6: [297.64, 419.53],
      a7: [209.76, 297.64],
      a8: [147.4, 209.76],
      a9: [104.88, 147.4],
      a10: [73.7, 104.88],
      b0: [2834.65, 4008.19],
      b1: [2004.09, 2834.65],
      b2: [1417.32, 2004.09],
      b3: [1000.63, 1417.32],
      b4: [708.66, 1000.63],
      b5: [498.9, 708.66],
      b6: [354.33, 498.9],
      b7: [249.45, 354.33],
      b8: [175.75, 249.45],
      b9: [124.72, 175.75],
      b10: [87.87, 124.72],
      c0: [2599.37, 3676.54],
      c1: [1836.85, 2599.37],
      c2: [1298.27, 1836.85],
      c3: [918.43, 1298.27],
      c4: [649.13, 918.43],
      c5: [459.21, 649.13],
      c6: [323.15, 459.21],
      c7: [229.61, 323.15],
      c8: [161.57, 229.61],
      c9: [113.39, 161.57],
      c10: [79.37, 113.39],
      dl: [311.81, 623.62],
      letter: [612, 792],
      "government-letter": [576, 756],
      legal: [612, 1008],
      "junior-legal": [576, 360],
      ledger: [1224, 792],
      tabloid: [792, 1224],
      "credit-card": [153, 243]
    };
    switch (n3) {
      case "pt":
        a3 = 1;
        break;
      case "mm":
        a3 = 72 / 25.4;
        break;
      case "cm":
        a3 = 72 / 2.54;
        break;
      case "in":
        a3 = 72;
        break;
      case "px":
        a3 = 0.75;
        break;
      case "pc":
      case "em":
        a3 = 12;
        break;
      case "ex":
        a3 = 6;
        break;
      default:
        throw "Invalid unit: " + n3;
    }
    var c4, l2 = 0, u2 = 0;
    if (s3.hasOwnProperty(o3)) l2 = s3[o3][1] / a3, u2 = s3[o3][0] / a3;
    else try {
      l2 = r3[1], u2 = r3[0];
    } catch {
      throw Error("Invalid format: " + r3);
    }
    if (e4 === "p" || e4 === "portrait") e4 = "p", u2 > l2 && (c4 = u2, u2 = l2, l2 = c4);
    else {
      if (e4 !== "l" && e4 !== "landscape") throw "Invalid orientation: " + e4;
      e4 = "l", l2 > u2 && (c4 = u2, u2 = l2, l2 = c4);
    }
    return {
      width: u2,
      height: l2,
      unit: n3,
      k: a3,
      orientation: e4
    };
  }, n2.html = function(e4, t) {
    (t || (t = {})).callback = t.callback || function() {
    }, t.html2canvas = t.html2canvas || {}, t.html2canvas.canvas = t.html2canvas.canvas || this.canvas, t.jsPDF = t.jsPDF || this, t.fontFaces = t.fontFaces ? t.fontFaces.map(vs) : null;
    var n3 = new c3(t);
    return t.worker ? n3 : n3.from(e4).doCallback();
  };
}(Z.API), Z.API.addJS = function(e4) {
  var t, n2, r2 = function(e5) {
    for (var t2 = "", n3 = 0; n3 < e5.length; n3++) {
      var r3 = e5[n3];
      if (r3 === "(" || r3 === ")") {
        for (var i2 = 0, a2 = n3 - 1; a2 >= 0 && e5[a2] === "\\"; a2--) i2++;
        t2 += i2 % 2 == 0 ? "\\" + r3 : r3;
      } else t2 += r3;
    }
    return t2;
  }(e4);
  return this.internal.events.subscribe("postPutResources", function() {
    t = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (t + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), n2 = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + r2 + ")"), this.internal.out(">>"), this.internal.out("endobj");
  }), this.internal.events.subscribe("putCatalog", function() {
    t !== void 0 && n2 !== void 0 && this.internal.out("/Names <</JavaScript " + t + " 0 R>>");
  }), this;
}, function(e4) {
  var t;
  e4.events.push(["postPutResources", function() {
    var e5 = this, n2 = /^(\d+) 0 obj$/;
    if (this.outline.root.children.length > 0) for (var r2 = e5.outline.render().split(/\r\n/), i2 = 0; i2 < r2.length; i2++) {
      var a2 = r2[i2], o2 = n2.exec(a2);
      if (o2 != null) {
        var s2 = o2[1];
        e5.internal.newObjectDeferredBegin(s2, false);
      }
      e5.internal.write(a2);
    }
    if (this.outline.createNamedDestinations) {
      var c3 = this.internal.pages.length, l2 = [];
      for (i2 = 0; i2 < c3; i2++) {
        var u2 = e5.internal.newObject();
        l2.push(u2);
        var d2 = e5.internal.getPageInfo(i2 + 1);
        e5.internal.write("<< /D[" + d2.objId + " 0 R /XYZ null null null]>> endobj");
      }
      var f2 = e5.internal.newObject();
      for (e5.internal.write("<< /Names [ "), i2 = 0; i2 < l2.length; i2++) e5.internal.write("(page_" + (i2 + 1) + ")" + l2[i2] + " 0 R");
      e5.internal.write(" ] >>", "endobj"), t = e5.internal.newObject(), e5.internal.write("<< /Dests " + f2 + " 0 R"), e5.internal.write(">>", "endobj");
    }
  }]), e4.events.push(["putCatalog", function() {
    var e5 = this;
    e5.outline.root.children.length > 0 && (e5.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && e5.internal.write("/Names " + t + " 0 R"));
  }]), e4.events.push(["initialized", function() {
    var e5 = this;
    e5.outline = {
      createNamedDestinations: false,
      root: { children: [] }
    }, e5.outline.add = function(e6, t2, n2) {
      var r2 = {
        title: t2,
        options: n2,
        children: []
      };
      return e6 ?? (e6 = this.root), e6.children.push(r2), r2;
    }, e5.outline.render = function() {
      return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = e5, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
    }, e5.outline.genIds_r = function(t2) {
      t2.id = e5.internal.newObjectDeferred();
      for (var n2 = 0; n2 < t2.children.length; n2++) this.genIds_r(t2.children[n2]);
    }, e5.outline.renderRoot = function(e6) {
      this.objStart(e6), this.line("/Type /Outlines"), e6.children.length > 0 && (this.line("/First " + this.makeRef(e6.children[0])), this.line("/Last " + this.makeRef(e6.children[e6.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, e6)), this.objEnd();
    }, e5.outline.renderItems = function(t2) {
      for (var n2 = this.ctx.pdf.internal.getVerticalCoordinateString, r2 = 0; r2 < t2.children.length; r2++) {
        var i2 = t2.children[r2];
        this.objStart(i2), this.line("/Title " + this.makeString(i2.title)), this.line("/Parent " + this.makeRef(t2)), r2 > 0 && this.line("/Prev " + this.makeRef(t2.children[r2 - 1])), r2 < t2.children.length - 1 && this.line("/Next " + this.makeRef(t2.children[r2 + 1])), i2.children.length > 0 && (this.line("/First " + this.makeRef(i2.children[0])), this.line("/Last " + this.makeRef(i2.children[i2.children.length - 1])));
        var a2 = this.count = this.count_r({ count: 0 }, i2);
        if (a2 > 0 && this.line("/Count " + a2), i2.options && i2.options.pageNumber) {
          var o2 = e5.internal.getPageInfo(i2.options.pageNumber);
          this.line("/Dest [" + o2.objId + " 0 R /XYZ 0 " + n2(0) + " 0]");
        }
        this.objEnd();
      }
      for (var s2 = 0; s2 < t2.children.length; s2++) this.renderItems(t2.children[s2]);
    }, e5.outline.line = function(e6) {
      this.ctx.val += e6 + "\r\n";
    }, e5.outline.makeRef = function(e6) {
      return e6.id + " 0 R";
    }, e5.outline.makeString = function(t2) {
      return "(" + e5.internal.pdfEscape(t2) + ")";
    }, e5.outline.objStart = function(e6) {
      this.ctx.val += "\r\n" + e6.id + " 0 obj\r\n<<\r\n";
    }, e5.outline.objEnd = function() {
      this.ctx.val += ">> \r\nendobj\r\n";
    }, e5.outline.count_r = function(e6, t2) {
      for (var n2 = 0; n2 < t2.children.length; n2++) e6.count++, this.count_r(e6, t2.children[n2]);
      return e6.count;
    };
  }]);
}(Z.API), function(e4) {
  var t = [
    192,
    193,
    194,
    195,
    196,
    197,
    198,
    199
  ];
  e4.processJPEG = function(e5, n2, r2, i2, a2, o2) {
    var s2, c3 = this.decode.DCT_DECODE, l2 = null;
    if (typeof e5 == "string" || this.__addimage__.isArrayBuffer(e5) || this.__addimage__.isArrayBufferView(e5)) {
      switch (e5 = a2 || e5, e5 = this.__addimage__.isArrayBuffer(e5) ? new Uint8Array(e5) : e5, s2 = function(e6) {
        for (var n3, r3 = 256 * e6.charCodeAt(4) + e6.charCodeAt(5), i3 = e6.length, a3 = {
          width: 0,
          height: 0,
          numcomponents: 1
        }, o3 = 4; o3 < i3; o3 += 2) {
          if (o3 += r3, t.indexOf(e6.charCodeAt(o3 + 1)) !== -1) {
            n3 = 256 * e6.charCodeAt(o3 + 5) + e6.charCodeAt(o3 + 6), a3 = {
              width: 256 * e6.charCodeAt(o3 + 7) + e6.charCodeAt(o3 + 8),
              height: n3,
              numcomponents: e6.charCodeAt(o3 + 9)
            };
            break;
          }
          r3 = 256 * e6.charCodeAt(o3 + 2) + e6.charCodeAt(o3 + 3);
        }
        return a3;
      }(e5 = this.__addimage__.isArrayBufferView(e5) ? this.__addimage__.arrayBufferToBinaryString(e5) : e5), s2.numcomponents) {
        case 1:
          o2 = this.color_spaces.DEVICE_GRAY;
          break;
        case 4:
          o2 = this.color_spaces.DEVICE_CMYK;
          break;
        case 3:
          o2 = this.color_spaces.DEVICE_RGB;
      }
      l2 = {
        data: e5,
        width: s2.width,
        height: s2.height,
        colorSpace: o2,
        bitsPerComponent: 8,
        filter: c3,
        index: n2,
        alias: r2
      };
    }
    return l2;
  };
}(Z.API), Z.API.processPNG = function(e4, t, n2, r2) {
  if (this.__addimage__.isArrayBuffer(e4) && (e4 = new Uint8Array(e4)), this.__addimage__.isArrayBufferView(e4)) {
    var i2, a2 = Ka(e4, { checkCrc: true }), o2 = a2.width, s2 = a2.height, c3 = a2.channels, l2 = a2.palette, u2 = a2.depth;
    i2 = l2 && c3 === 1 ? function(e5) {
      for (var t2 = e5.width, n3 = e5.height, r3 = e5.data, i3 = e5.palette, a3 = e5.depth, o3 = false, s3 = [], c4 = [], l3 = void 0, u3 = false, d3 = 0, f3 = 0; f3 < i3.length; f3++) {
        var p2 = ne(i3[f3], 4), m2 = p2[0], h2 = p2[1], g2 = p2[2], _2 = p2[3];
        s3.push(m2, h2, g2), _2 != null && (_2 === 0 ? (d3++, c4.length < 1 && c4.push(f3)) : _2 < 255 && (u3 = true));
      }
      if (u3 || d3 > 1) {
        o3 = true, c4 = void 0;
        var v2 = t2 * n3;
        l3 = new Uint8Array(v2);
        for (var y2 = new DataView(r3.buffer), b3 = 0; b3 < v2; b3++) {
          var x3 = ne(i3[Bs(y2, b3, a3)], 4)[3];
          l3[b3] = x3;
        }
      } else d3 === 0 && (c4 = void 0);
      return {
        colorSpace: "Indexed",
        colorsPerPixel: 1,
        sMaskBitsPerComponent: o3 ? 8 : void 0,
        colorBytes: r3,
        alphaBytes: l3,
        needSMask: o3,
        palette: s3,
        mask: c4
      };
    }(a2) : c3 === 2 || c3 === 4 ? function(e5) {
      for (var t2 = e5.data, n3 = e5.width, r3 = e5.height, i3 = e5.channels, a3 = e5.depth, o3 = i3 === 2 ? "DeviceGray" : "DeviceRGB", s3 = i3 - 1, c4 = n3 * r3, l3 = s3, u3 = c4 * l3, d3 = 1 * c4, f3 = Math.ceil(u3 * a3 / 8), p2 = Math.ceil(d3 * a3 / 8), m2 = new Uint8Array(f3), h2 = new Uint8Array(p2), g2 = new DataView(t2.buffer), _2 = new DataView(m2.buffer), v2 = new DataView(h2.buffer), y2 = false, b3 = 0; b3 < c4; b3++) {
        for (var x3 = b3 * i3, S3 = 0; S3 < l3; S3++) Vs(_2, Bs(g2, x3 + S3, a3), b3 * l3 + S3, a3);
        var C3 = Bs(g2, x3 + l3, a3);
        C3 < (1 << a3) - 1 && (y2 = true), Vs(v2, C3, 1 * b3, a3);
      }
      return {
        colorSpace: o3,
        colorsPerPixel: s3,
        sMaskBitsPerComponent: y2 ? a3 : void 0,
        colorBytes: m2,
        alphaBytes: h2,
        needSMask: y2
      };
    }(a2) : function(e5) {
      var t2 = e5.data, n3 = e5.channels === 1 ? "DeviceGray" : "DeviceRGB";
      return {
        colorSpace: n3,
        colorsPerPixel: n3 === "DeviceGray" ? 1 : 3,
        colorBytes: t2 instanceof Uint16Array ? function(e6) {
          for (var t3 = e6.length, n4 = new Uint8Array(2 * t3), r3 = new DataView(n4.buffer, n4.byteOffset, n4.byteLength), i3 = 0; i3 < t3; i3++) r3.setUint16(2 * i3, e6[i3], false);
          return n4;
        }(t2) : t2,
        needSMask: false
      };
    }(a2);
    var d2, f2, p, m = i2, h = m.colorSpace, g = m.colorsPerPixel, _ = m.sMaskBitsPerComponent, v = m.colorBytes, y = m.alphaBytes, b2 = m.needSMask, x2 = m.palette, S2 = m.mask, C2 = null;
    return r2 !== Z.API.image_compression.NONE && typeof z == "function" ? (C2 = function(e5) {
      var t2;
      switch (e5) {
        case Z.API.image_compression.FAST:
          t2 = 11;
          break;
        case Z.API.image_compression.MEDIUM:
          t2 = 13;
          break;
        case Z.API.image_compression.SLOW:
          t2 = 14;
          break;
        default:
          t2 = 12;
      }
      return t2;
    }(r2), d2 = this.decode.FLATE_DECODE, f2 = `/Predictor ${C2} /Colors ${g} /BitsPerComponent ${u2} /Columns ${o2}`, e4 = Ms(v, Math.ceil(o2 * g * u2 / 8), g, u2, r2), b2 && (p = Ms(y, Math.ceil(o2 * _ / 8), 1, _, r2))) : (d2 = void 0, f2 = void 0, e4 = v, b2 && (p = y)), (this.__addimage__.isArrayBuffer(e4) || this.__addimage__.isArrayBufferView(e4)) && (e4 = this.__addimage__.arrayBufferToBinaryString(e4)), (p && this.__addimage__.isArrayBuffer(p) || this.__addimage__.isArrayBufferView(p)) && (p = this.__addimage__.arrayBufferToBinaryString(p)), {
      alias: n2,
      data: e4,
      index: t,
      filter: d2,
      decodeParameters: f2,
      transparency: S2,
      palette: x2,
      sMask: p,
      predictor: C2,
      width: o2,
      height: s2,
      bitsPerComponent: u2,
      sMaskBitsPerComponent: _,
      colorSpace: h
    };
  }
}, function(e4) {
  e4.processGIF89A = function(t, n2, r2, i2) {
    var a2 = new Us(t), o2 = a2.width, s2 = a2.height, c3 = [];
    a2.decodeAndBlitFrameRGBA(0, c3);
    var l2 = {
      data: c3,
      width: o2,
      height: s2
    }, u2 = new Gs(100).encode(l2, 100);
    return e4.processJPEG.call(this, u2, n2, r2, i2);
  }, e4.processGIF87A = e4.processGIF89A;
}(Z.API), Ks.prototype.parseHeader = function() {
  if (this.fileSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, true), this.pos += 4, this.offset = this.datav.getUint32(this.pos, true), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.width = this.datav.getUint32(this.pos, true), this.pos += 4, this.height = this.datav.getInt32(this.pos, true), this.pos += 4, this.planes = this.datav.getUint16(this.pos, true), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, true), this.pos += 2, this.compress = this.datav.getUint32(this.pos, true), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.hr = this.datav.getUint32(this.pos, true), this.pos += 4, this.vr = this.datav.getUint32(this.pos, true), this.pos += 4, this.colors = this.datav.getUint32(this.pos, true), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, true), this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
    var e4 = this.colors === 0 ? 1 << this.bitPP : this.colors;
    this.palette = Array(e4);
    for (var t = 0; t < e4; t++) {
      var n2 = this.datav.getUint8(this.pos++, true), r2 = this.datav.getUint8(this.pos++, true), i2 = this.datav.getUint8(this.pos++, true), a2 = this.datav.getUint8(this.pos++, true);
      this.palette[t] = {
        red: i2,
        green: r2,
        blue: n2,
        quad: a2
      };
    }
  }
  this.height < 0 && (this.height *= -1, this.bottom_up = false);
}, Ks.prototype.parseBGR = function() {
  this.pos = this.offset;
  var e4 = "bit" + this.bitPP, t = this.width * this.height * 4;
  if (t > 536870912) throw Error("Image dimensions exceed 512MB, which is too large.");
  this.data = new Uint8Array(t);
  try {
    this[e4]();
  } catch (e5) {
    Ja.log("bit decode error:" + e5);
  }
}, Ks.prototype.bit1 = function() {
  var e4, t = Math.ceil(this.width / 8), n2 = t % 4;
  for (e4 = this.height - 1; e4 >= 0; e4--) {
    for (var r2 = this.bottom_up ? e4 : this.height - 1 - e4, i2 = 0; i2 < t; i2++) for (var a2 = this.datav.getUint8(this.pos++, true), o2 = r2 * this.width * 4 + 8 * i2 * 4, s2 = 0; s2 < 8 && 8 * i2 + s2 < this.width; s2++) {
      var c3 = this.palette[a2 >> 7 - s2 & 1];
      this.data[o2 + 4 * s2] = c3.blue, this.data[o2 + 4 * s2 + 1] = c3.green, this.data[o2 + 4 * s2 + 2] = c3.red, this.data[o2 + 4 * s2 + 3] = 255;
    }
    n2 !== 0 && (this.pos += 4 - n2);
  }
}, Ks.prototype.bit4 = function() {
  for (var e4 = Math.ceil(this.width / 2), t = e4 % 4, n2 = this.height - 1; n2 >= 0; n2--) {
    for (var r2 = this.bottom_up ? n2 : this.height - 1 - n2, i2 = 0; i2 < e4; i2++) {
      var a2 = this.datav.getUint8(this.pos++, true), o2 = r2 * this.width * 4 + 2 * i2 * 4, s2 = a2 >> 4, c3 = 15 & a2, l2 = this.palette[s2];
      if (this.data[o2] = l2.blue, this.data[o2 + 1] = l2.green, this.data[o2 + 2] = l2.red, this.data[o2 + 3] = 255, 2 * i2 + 1 >= this.width) break;
      l2 = this.palette[c3], this.data[o2 + 4] = l2.blue, this.data[o2 + 4 + 1] = l2.green, this.data[o2 + 4 + 2] = l2.red, this.data[o2 + 4 + 3] = 255;
    }
    t !== 0 && (this.pos += 4 - t);
  }
}, Ks.prototype.bit8 = function() {
  for (var e4 = this.width % 4, t = this.height - 1; t >= 0; t--) {
    for (var n2 = this.bottom_up ? t : this.height - 1 - t, r2 = 0; r2 < this.width; r2++) {
      var i2 = this.datav.getUint8(this.pos++, true), a2 = n2 * this.width * 4 + 4 * r2;
      if (i2 < this.palette.length) {
        var o2 = this.palette[i2];
        this.data[a2] = o2.red, this.data[a2 + 1] = o2.green, this.data[a2 + 2] = o2.blue, this.data[a2 + 3] = 255;
      } else this.data[a2] = 255, this.data[a2 + 1] = 255, this.data[a2 + 2] = 255, this.data[a2 + 3] = 255;
    }
    e4 !== 0 && (this.pos += 4 - e4);
  }
}, Ks.prototype.bit15 = function() {
  for (var e4 = this.width % 3, t = 31, n2 = this.height - 1; n2 >= 0; n2--) {
    for (var r2 = this.bottom_up ? n2 : this.height - 1 - n2, i2 = 0; i2 < this.width; i2++) {
      var a2 = this.datav.getUint16(this.pos, true);
      this.pos += 2;
      var o2 = (a2 & t) / t * 255 | 0, s2 = (a2 >> 5 & t) / t * 255 | 0, c3 = (a2 >> 10 & t) / t * 255 | 0, l2 = a2 >> 15 ? 255 : 0, u2 = r2 * this.width * 4 + 4 * i2;
      this.data[u2] = c3, this.data[u2 + 1] = s2, this.data[u2 + 2] = o2, this.data[u2 + 3] = l2;
    }
    this.pos += e4;
  }
}, Ks.prototype.bit16 = function() {
  for (var e4 = this.width % 3, t = 31, n2 = 63, r2 = this.height - 1; r2 >= 0; r2--) {
    for (var i2 = this.bottom_up ? r2 : this.height - 1 - r2, a2 = 0; a2 < this.width; a2++) {
      var o2 = this.datav.getUint16(this.pos, true);
      this.pos += 2;
      var s2 = (o2 & t) / t * 255 | 0, c3 = (o2 >> 5 & n2) / n2 * 255 | 0, l2 = (o2 >> 11) / t * 255 | 0, u2 = i2 * this.width * 4 + 4 * a2;
      this.data[u2] = l2, this.data[u2 + 1] = c3, this.data[u2 + 2] = s2, this.data[u2 + 3] = 255;
    }
    this.pos += e4;
  }
}, Ks.prototype.bit24 = function() {
  for (var e4 = this.height - 1; e4 >= 0; e4--) {
    for (var t = this.bottom_up ? e4 : this.height - 1 - e4, n2 = 0; n2 < this.width; n2++) {
      var r2 = this.datav.getUint8(this.pos++, true), i2 = this.datav.getUint8(this.pos++, true), a2 = this.datav.getUint8(this.pos++, true), o2 = t * this.width * 4 + 4 * n2;
      this.data[o2] = a2, this.data[o2 + 1] = i2, this.data[o2 + 2] = r2, this.data[o2 + 3] = 255;
    }
    this.pos += this.width % 4;
  }
}, Ks.prototype.bit32 = function() {
  for (var e4 = this.height - 1; e4 >= 0; e4--) for (var t = this.bottom_up ? e4 : this.height - 1 - e4, n2 = 0; n2 < this.width; n2++) {
    var r2 = this.datav.getUint8(this.pos++, true), i2 = this.datav.getUint8(this.pos++, true), a2 = this.datav.getUint8(this.pos++, true), o2 = this.datav.getUint8(this.pos++, true), s2 = t * this.width * 4 + 4 * n2;
    this.data[s2] = a2, this.data[s2 + 1] = i2, this.data[s2 + 2] = r2, this.data[s2 + 3] = o2;
  }
}, Ks.prototype.getData = function() {
  return this.data;
}, function(e4) {
  e4.processBMP = function(t, n2, r2, i2) {
    var a2 = new Ks(t, false), o2 = a2.width, s2 = a2.height, c3 = {
      data: a2.getData(),
      width: o2,
      height: s2
    }, l2 = new Gs(100).encode(c3, 100);
    return e4.processJPEG.call(this, l2, n2, r2, i2);
  };
}(Z.API), qs.prototype.getData = function() {
  return this.data;
}, function(e4) {
  e4.processWEBP = function(t, n2, r2, i2) {
    var a2 = new qs(t), o2 = a2.width, s2 = a2.height, c3 = {
      data: a2.getData(),
      width: o2,
      height: s2
    }, l2 = new Gs(100).encode(c3, 100);
    return e4.processJPEG.call(this, l2, n2, r2, i2);
  };
}(Z.API), Z.API.processRGBA = function(e4, t, n2) {
  for (var r2 = e4.data, i2 = r2.length, a2 = new Uint8Array(i2 / 4 * 3), o2 = new Uint8Array(i2 / 4), s2 = 0, c3 = 0, l2 = 0; l2 < i2; l2 += 4) {
    var u2 = r2[l2], d2 = r2[l2 + 1], f2 = r2[l2 + 2], p = r2[l2 + 3];
    a2[s2++] = u2, a2[s2++] = d2, a2[s2++] = f2, o2[c3++] = p;
  }
  var m = this.__addimage__.arrayBufferToBinaryString(a2);
  return {
    alpha: this.__addimage__.arrayBufferToBinaryString(o2),
    data: m,
    index: t,
    alias: n2,
    colorSpace: "DeviceRGB",
    bitsPerComponent: 8,
    width: e4.width,
    height: e4.height
  };
}, Z.API.setLanguage = function(e4) {
  return this.internal.languageSettings === void 0 && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = false), {
    af: "Afrikaans",
    sq: "Albanian",
    ar: "Arabic (Standard)",
    "ar-DZ": "Arabic (Algeria)",
    "ar-BH": "Arabic (Bahrain)",
    "ar-EG": "Arabic (Egypt)",
    "ar-IQ": "Arabic (Iraq)",
    "ar-JO": "Arabic (Jordan)",
    "ar-KW": "Arabic (Kuwait)",
    "ar-LB": "Arabic (Lebanon)",
    "ar-LY": "Arabic (Libya)",
    "ar-MA": "Arabic (Morocco)",
    "ar-OM": "Arabic (Oman)",
    "ar-QA": "Arabic (Qatar)",
    "ar-SA": "Arabic (Saudi Arabia)",
    "ar-SY": "Arabic (Syria)",
    "ar-TN": "Arabic (Tunisia)",
    "ar-AE": "Arabic (U.A.E.)",
    "ar-YE": "Arabic (Yemen)",
    an: "Aragonese",
    hy: "Armenian",
    as: "Assamese",
    ast: "Asturian",
    az: "Azerbaijani",
    eu: "Basque",
    be: "Belarusian",
    bn: "Bengali",
    bs: "Bosnian",
    br: "Breton",
    bg: "Bulgarian",
    my: "Burmese",
    ca: "Catalan",
    ch: "Chamorro",
    ce: "Chechen",
    zh: "Chinese",
    "zh-HK": "Chinese (Hong Kong)",
    "zh-CN": "Chinese (PRC)",
    "zh-SG": "Chinese (Singapore)",
    "zh-TW": "Chinese (Taiwan)",
    cv: "Chuvash",
    co: "Corsican",
    cr: "Cree",
    hr: "Croatian",
    cs: "Czech",
    da: "Danish",
    nl: "Dutch (Standard)",
    "nl-BE": "Dutch (Belgian)",
    en: "English",
    "en-AU": "English (Australia)",
    "en-BZ": "English (Belize)",
    "en-CA": "English (Canada)",
    "en-IE": "English (Ireland)",
    "en-JM": "English (Jamaica)",
    "en-NZ": "English (New Zealand)",
    "en-PH": "English (Philippines)",
    "en-ZA": "English (South Africa)",
    "en-TT": "English (Trinidad & Tobago)",
    "en-GB": "English (United Kingdom)",
    "en-US": "English (United States)",
    "en-ZW": "English (Zimbabwe)",
    eo: "Esperanto",
    et: "Estonian",
    fo: "Faeroese",
    fj: "Fijian",
    fi: "Finnish",
    fr: "French (Standard)",
    "fr-BE": "French (Belgium)",
    "fr-CA": "French (Canada)",
    "fr-FR": "French (France)",
    "fr-LU": "French (Luxembourg)",
    "fr-MC": "French (Monaco)",
    "fr-CH": "French (Switzerland)",
    fy: "Frisian",
    fur: "Friulian",
    gd: "Gaelic (Scots)",
    "gd-IE": "Gaelic (Irish)",
    gl: "Galacian",
    ka: "Georgian",
    de: "German (Standard)",
    "de-AT": "German (Austria)",
    "de-DE": "German (Germany)",
    "de-LI": "German (Liechtenstein)",
    "de-LU": "German (Luxembourg)",
    "de-CH": "German (Switzerland)",
    el: "Greek",
    gu: "Gujurati",
    ht: "Haitian",
    he: "Hebrew",
    hi: "Hindi",
    hu: "Hungarian",
    is: "Icelandic",
    id: "Indonesian",
    iu: "Inuktitut",
    ga: "Irish",
    it: "Italian (Standard)",
    "it-CH": "Italian (Switzerland)",
    ja: "Japanese",
    kn: "Kannada",
    ks: "Kashmiri",
    kk: "Kazakh",
    km: "Khmer",
    ky: "Kirghiz",
    tlh: "Klingon",
    ko: "Korean",
    "ko-KP": "Korean (North Korea)",
    "ko-KR": "Korean (South Korea)",
    la: "Latin",
    lv: "Latvian",
    lt: "Lithuanian",
    lb: "Luxembourgish",
    mk: "North Macedonia",
    ms: "Malay",
    ml: "Malayalam",
    mt: "Maltese",
    mi: "Maori",
    mr: "Marathi",
    mo: "Moldavian",
    nv: "Navajo",
    ng: "Ndonga",
    ne: "Nepali",
    no: "Norwegian",
    nb: "Norwegian (Bokmal)",
    nn: "Norwegian (Nynorsk)",
    oc: "Occitan",
    or: "Oriya",
    om: "Oromo",
    fa: "Persian",
    "fa-IR": "Persian/Iran",
    pl: "Polish",
    pt: "Portuguese",
    "pt-BR": "Portuguese (Brazil)",
    pa: "Punjabi",
    "pa-IN": "Punjabi (India)",
    "pa-PK": "Punjabi (Pakistan)",
    qu: "Quechua",
    rm: "Rhaeto-Romanic",
    ro: "Romanian",
    "ro-MO": "Romanian (Moldavia)",
    ru: "Russian",
    "ru-MO": "Russian (Moldavia)",
    sz: "Sami (Lappish)",
    sg: "Sango",
    sa: "Sanskrit",
    sc: "Sardinian",
    sd: "Sindhi",
    si: "Singhalese",
    sr: "Serbian",
    sk: "Slovak",
    sl: "Slovenian",
    so: "Somani",
    sb: "Sorbian",
    es: "Spanish",
    "es-AR": "Spanish (Argentina)",
    "es-BO": "Spanish (Bolivia)",
    "es-CL": "Spanish (Chile)",
    "es-CO": "Spanish (Colombia)",
    "es-CR": "Spanish (Costa Rica)",
    "es-DO": "Spanish (Dominican Republic)",
    "es-EC": "Spanish (Ecuador)",
    "es-SV": "Spanish (El Salvador)",
    "es-GT": "Spanish (Guatemala)",
    "es-HN": "Spanish (Honduras)",
    "es-MX": "Spanish (Mexico)",
    "es-NI": "Spanish (Nicaragua)",
    "es-PA": "Spanish (Panama)",
    "es-PY": "Spanish (Paraguay)",
    "es-PE": "Spanish (Peru)",
    "es-PR": "Spanish (Puerto Rico)",
    "es-ES": "Spanish (Spain)",
    "es-UY": "Spanish (Uruguay)",
    "es-VE": "Spanish (Venezuela)",
    sx: "Sutu",
    sw: "Swahili",
    sv: "Swedish",
    "sv-FI": "Swedish (Finland)",
    "sv-SV": "Swedish (Sweden)",
    ta: "Tamil",
    tt: "Tatar",
    te: "Teluga",
    th: "Thai",
    tig: "Tigre",
    ts: "Tsonga",
    tn: "Tswana",
    tr: "Turkish",
    tk: "Turkmen",
    uk: "Ukrainian",
    hsb: "Upper Sorbian",
    ur: "Urdu",
    ve: "Venda",
    vi: "Vietnamese",
    vo: "Volapuk",
    wa: "Walloon",
    cy: "Welsh",
    xh: "Xhosa",
    ji: "Yiddish",
    zu: "Zulu"
  }[e4] !== void 0 && (this.internal.languageSettings.languageCode = e4, false === this.internal.languageSettings.isSubscribed && (this.internal.events.subscribe("putCatalog", function() {
    this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
  }), this.internal.languageSettings.isSubscribed = true)), this;
}, Es = Z.API, Ds = Es.getCharWidthsArray = function(e4, n2) {
  var r2, i2, a2 = (n2 || (n2 = {})).font || this.internal.getFont(), o2 = n2.fontSize || this.internal.getFontSize(), s2 = n2.charSpace || this.internal.getCharSpace(), c3 = n2.widths ? n2.widths : a2.metadata.Unicode.widths, l2 = c3.fof ? c3.fof : 1, u2 = n2.kerning ? n2.kerning : a2.metadata.Unicode.kerning, d2 = u2.fof ? u2.fof : 1, f2 = false !== n2.doKerning, p = 0, m = e4.length, h = 0, g = c3[0] || l2, _ = [];
  for (r2 = 0; r2 < m; r2++) i2 = e4.charCodeAt(r2), typeof a2.metadata.widthOfString == "function" ? _.push((a2.metadata.widthOfGlyph(a2.metadata.characterToGlyph(i2)) + 1e3 / o2 * s2 || 0) / 1e3) : (p = f2 && e(u2[i2]) === "object" && !isNaN(parseInt(u2[i2][h], 10)) ? u2[i2][h] / d2 : 0, _.push((c3[i2] || g) / l2 + p)), h = i2;
  return _;
}, Os = Es.getStringUnitWidth = function(e4, t) {
  var n2 = (t || (t = {})).fontSize || this.internal.getFontSize(), r2 = t.font || this.internal.getFont(), i2 = t.charSpace || this.internal.getCharSpace();
  return Es.processArabic && (e4 = Es.processArabic(e4)), typeof r2.metadata.widthOfString == "function" ? r2.metadata.widthOfString(e4, n2, i2) / n2 : Ds.apply(this, arguments).reduce(function(e5, t2) {
    return e5 + t2;
  }, 0);
}, ks = function(e4, t, n2, r2) {
  for (var i2 = [], a2 = 0, o2 = e4.length, s2 = 0; a2 !== o2 && s2 + t[a2] < n2; ) s2 += t[a2], a2++;
  i2.push(e4.slice(0, a2));
  var c3 = a2;
  for (s2 = 0; a2 !== o2; ) s2 + t[a2] > r2 && (i2.push(e4.slice(c3, a2)), s2 = 0, c3 = a2), s2 += t[a2], a2++;
  return c3 !== a2 && i2.push(e4.slice(c3, a2)), i2;
}, As = function(e4, t, n2) {
  n2 || (n2 = {});
  var r2, i2, a2, o2, s2, c3, l2, u2 = [], d2 = [u2], f2 = n2.textIndent || 0, p = 0, m = 0, h = e4.split(" "), g = Ds.apply(this, [" ", n2])[0];
  if (c3 = n2.lineIndent === -1 ? h[0].length + 2 : n2.lineIndent || 0) {
    var _ = Array(c3).join(" "), v = [];
    h.map(function(e5) {
      (e5 = e5.split(/\s*\n/)).length > 1 ? v = v.concat(e5.map(function(e6, t2) {
        return (t2 && e6.length ? "\n" : "") + e6;
      })) : v.push(e5[0]);
    }), h = v, c3 = Os.apply(this, [_, n2]);
  }
  for (a2 = 0, o2 = h.length; a2 < o2; a2++) {
    var y = 0;
    if (r2 = h[a2], c3 && r2[0] == "\n" && (r2 = r2.substr(1), y = 1), f2 + p + (m = (i2 = Ds.apply(this, [r2, n2])).reduce(function(e5, t2) {
      return e5 + t2;
    }, 0)) > t || y) {
      if (m > t) {
        for (s2 = ks.apply(this, [
          r2,
          i2,
          t - (f2 + p),
          t
        ]), u2.push(s2.shift()), u2 = [s2.pop()]; s2.length; ) d2.push([s2.shift()]);
        m = i2.slice(r2.length - (u2[0] ? u2[0].length : 0)).reduce(function(e5, t2) {
          return e5 + t2;
        }, 0);
      } else u2 = [r2];
      d2.push(u2), f2 = m + c3, p = g;
    } else u2.push(r2), f2 += p + m, p = g;
  }
  return l2 = c3 ? function(e5, t2) {
    return (t2 ? _ : "") + e5.join(" ");
  } : function(e5) {
    return e5.join(" ");
  }, d2.map(l2);
}, Es.splitTextToSize = function(e4, t, n2) {
  var r2, i2 = (n2 || (n2 = {})).fontSize || this.internal.getFontSize(), a2 = (function(e5) {
    if (e5.widths && e5.kerning) return {
      widths: e5.widths,
      kerning: e5.kerning
    };
    var t2 = this.internal.getFont(e5.fontName, e5.fontStyle), n3 = "Unicode";
    return t2.metadata[n3] ? {
      widths: t2.metadata[n3].widths || { 0: 1 },
      kerning: t2.metadata[n3].kerning || {}
    } : {
      font: t2.metadata,
      fontSize: this.internal.getFontSize(),
      charSpace: this.internal.getCharSpace()
    };
  }).call(this, n2);
  r2 = Array.isArray(e4) ? e4 : String(e4).split(/\r?\n/);
  var o2 = 1 * this.internal.scaleFactor * t / i2;
  a2.textIndent = n2.textIndent ? 1 * n2.textIndent * this.internal.scaleFactor / i2 : 0, a2.lineIndent = n2.lineIndent;
  var s2, c3, l2 = [];
  for (s2 = 0, c3 = r2.length; s2 < c3; s2++) l2 = l2.concat(As.apply(this, [
    r2[s2],
    o2,
    a2
  ]));
  return l2;
}, function(e4) {
  e4.__fontmetrics__ = e4.__fontmetrics__ || {};
  for (var n2 = "0123456789abcdef", r2 = "klmnopqrstuvwxyz", i2 = {}, a2 = {}, o2 = 0; o2 < 16; o2++) i2[r2[o2]] = n2[o2], a2[n2[o2]] = r2[o2];
  var s2 = function(e5) {
    return "0x" + parseInt(e5, 10).toString(16);
  }, c3 = e4.__fontmetrics__.compress = function(e5) {
    var n3, r3, i3, o3, l3 = ["{"];
    for (var u3 in e5) {
      if (n3 = e5[u3], isNaN(parseInt(u3, 10)) ? r3 = "'" + u3 + "'" : (u3 = parseInt(u3, 10), r3 = (r3 = s2(u3).slice(2)).slice(0, -1) + a2[r3.slice(-1)]), typeof n3 == "number") n3 < 0 ? (i3 = s2(n3).slice(3), o3 = "-") : (i3 = s2(n3).slice(2), o3 = ""), i3 = o3 + i3.slice(0, -1) + a2[i3.slice(-1)];
      else {
        if (e(n3) !== "object") throw Error("Don't know what to do with value type " + e(n3) + ".");
        i3 = c3(n3);
      }
      l3.push(r3 + i3);
    }
    return l3.push("}"), l3.join("");
  }, l2 = e4.__fontmetrics__.uncompress = function(e5) {
    if (typeof e5 != "string") throw Error("Invalid argument passed to uncompress.");
    for (var t, n3, r3, a3, o3 = {}, s3 = 1, c4 = o3, l3 = [], u3 = "", d3 = "", f3 = e5.length - 1, p = 1; p < f3; p += 1) (a3 = e5[p]) == "'" ? t ? (r3 = t.join(""), t = void 0) : t = [] : t ? t.push(a3) : a3 == "{" ? (l3.push([c4, r3]), c4 = {}, r3 = void 0) : a3 == "}" ? ((n3 = l3.pop())[0][n3[1]] = c4, r3 = void 0, c4 = n3[0]) : a3 == "-" ? s3 = -1 : r3 === void 0 ? i2.hasOwnProperty(a3) ? (u3 += i2[a3], r3 = parseInt(u3, 16) * s3, s3 = 1, u3 = "") : u3 += a3 : i2.hasOwnProperty(a3) ? (d3 += i2[a3], c4[r3] = parseInt(d3, 16) * s3, s3 = 1, r3 = void 0, d3 = "") : d3 += a3;
    return o3;
  }, u2 = {
    codePages: ["WinAnsiEncoding"],
    WinAnsiEncoding: l2("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
  }, d2 = { Unicode: {
    Courier: u2,
    "Courier-Bold": u2,
    "Courier-BoldOblique": u2,
    "Courier-Oblique": u2,
    Helvetica: u2,
    "Helvetica-Bold": u2,
    "Helvetica-BoldOblique": u2,
    "Helvetica-Oblique": u2,
    "Times-Roman": u2,
    "Times-Bold": u2,
    "Times-BoldItalic": u2,
    "Times-Italic": u2
  } }, f2 = { Unicode: {
    "Courier-Oblique": l2("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
    "Times-BoldItalic": l2("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
    "Helvetica-Bold": l2("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
    Courier: l2("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
    "Courier-BoldOblique": l2("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
    "Times-Bold": l2("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
    Symbol: l2("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),
    Helvetica: l2("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
    "Helvetica-BoldOblique": l2("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
    ZapfDingbats: l2("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
    "Courier-Bold": l2("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
    "Times-Italic": l2("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
    "Times-Roman": l2("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
    "Helvetica-Oblique": l2("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
  } };
  e4.events.push(["addFont", function(e5) {
    var t = e5.font, n3 = f2.Unicode[t.postScriptName];
    n3 && (t.metadata.Unicode = {}, t.metadata.Unicode.widths = n3.widths, t.metadata.Unicode.kerning = n3.kerning);
    var r3 = d2.Unicode[t.postScriptName];
    r3 && (t.metadata.Unicode.encoding = r3, t.encoding = r3.codePages[0]);
  }]);
}(Z.API), function(e4) {
  var t = function(e5) {
    for (var t2 = e5.length, n2 = new Uint8Array(t2), r2 = 0; r2 < t2; r2++) n2[r2] = e5.charCodeAt(r2);
    return n2;
  };
  e4.API.events.push(["addFont", function(n2) {
    var r2 = void 0, i2 = n2.font, a2 = n2.instance;
    if (!i2.isStandardFont) {
      if (a2 === void 0) throw Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + i2.postScriptName + "').");
      if (typeof (r2 = false === a2.existsFileInVFS(i2.postScriptName) ? a2.loadFile(i2.postScriptName) : a2.getFileFromVFS(i2.postScriptName)) != "string") throw Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + i2.postScriptName + "').");
      (function(n3, r3) {
        r3 = /^\x00\x01\x00\x00/.test(r3) ? t(r3) : t(eo(r3)), n3.metadata = e4.API.TTFFont.open(r3), n3.metadata.Unicode = n3.metadata.Unicode || {
          encoding: {},
          kerning: {},
          widths: []
        }, n3.metadata.glyIdsUsed = [0];
      })(i2, r2);
    }
  }]);
}(Z), Z.API.addSvgAsImage = function(e4, t, n2, r2, i2, a2, o2, s2) {
  if (isNaN(t) || isNaN(n2)) throw Ja.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
  if (isNaN(r2) || isNaN(i2)) throw Ja.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
  var c3 = document.createElement("canvas");
  c3.width = r2, c3.height = i2;
  var l2 = c3.getContext("2d");
  l2.fillStyle = "#fff", l2.fillRect(0, 0, c3.width, c3.height);
  var u2 = {
    ignoreMouse: true,
    ignoreAnimation: true,
    ignoreDimensions: true
  }, d2 = this;
  return (X.canvg ? Promise.resolve(X.canvg) : import("./index.es-C4X5YiRo-6OLPPAH4.js")).catch(function(e5) {
    return Promise.reject(Error("Could not load canvg: " + e5));
  }).then(function(e5) {
    return e5.default ? e5.default : e5;
  }).then(function(t2) {
    return t2.fromString(l2, e4, u2);
  }, function() {
    return Promise.reject(Error("Could not load canvg."));
  }).then(function(e5) {
    return e5.render(u2);
  }).then(function() {
    d2.addImage(c3.toDataURL("image/jpeg", 1), t, n2, r2, i2, o2, s2);
  });
}, Z.API.putTotalPages = function(e4) {
  var t, n2 = 0;
  parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (t = new RegExp(e4, "g"), n2 = this.internal.getNumberOfPages()) : (t = new RegExp(this.pdfEscape16(e4, this.internal.getFont()), "g"), n2 = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
  for (var r2 = 1; r2 <= this.internal.getNumberOfPages(); r2++) for (var i2 = 0; i2 < this.internal.pages[r2].length; i2++) this.internal.pages[r2][i2] = this.internal.pages[r2][i2].replace(t, n2);
  return this;
}, Z.API.viewerPreferences = function(e4, n2) {
  var r2;
  e4 || (e4 = {}), n2 || (n2 = false);
  var i2, a2, o2, s2 = {
    HideToolbar: {
      defaultValue: false,
      value: false,
      type: "boolean",
      explicitSet: false,
      valueSet: [true, false],
      pdfVersion: 1.3
    },
    HideMenubar: {
      defaultValue: false,
      value: false,
      type: "boolean",
      explicitSet: false,
      valueSet: [true, false],
      pdfVersion: 1.3
    },
    HideWindowUI: {
      defaultValue: false,
      value: false,
      type: "boolean",
      explicitSet: false,
      valueSet: [true, false],
      pdfVersion: 1.3
    },
    FitWindow: {
      defaultValue: false,
      value: false,
      type: "boolean",
      explicitSet: false,
      valueSet: [true, false],
      pdfVersion: 1.3
    },
    CenterWindow: {
      defaultValue: false,
      value: false,
      type: "boolean",
      explicitSet: false,
      valueSet: [true, false],
      pdfVersion: 1.3
    },
    DisplayDocTitle: {
      defaultValue: false,
      value: false,
      type: "boolean",
      explicitSet: false,
      valueSet: [true, false],
      pdfVersion: 1.4
    },
    NonFullScreenPageMode: {
      defaultValue: "UseNone",
      value: "UseNone",
      type: "name",
      explicitSet: false,
      valueSet: [
        "UseNone",
        "UseOutlines",
        "UseThumbs",
        "UseOC"
      ],
      pdfVersion: 1.3
    },
    Direction: {
      defaultValue: "L2R",
      value: "L2R",
      type: "name",
      explicitSet: false,
      valueSet: ["L2R", "R2L"],
      pdfVersion: 1.3
    },
    ViewArea: {
      defaultValue: "CropBox",
      value: "CropBox",
      type: "name",
      explicitSet: false,
      valueSet: [
        "MediaBox",
        "CropBox",
        "TrimBox",
        "BleedBox",
        "ArtBox"
      ],
      pdfVersion: 1.4
    },
    ViewClip: {
      defaultValue: "CropBox",
      value: "CropBox",
      type: "name",
      explicitSet: false,
      valueSet: [
        "MediaBox",
        "CropBox",
        "TrimBox",
        "BleedBox",
        "ArtBox"
      ],
      pdfVersion: 1.4
    },
    PrintArea: {
      defaultValue: "CropBox",
      value: "CropBox",
      type: "name",
      explicitSet: false,
      valueSet: [
        "MediaBox",
        "CropBox",
        "TrimBox",
        "BleedBox",
        "ArtBox"
      ],
      pdfVersion: 1.4
    },
    PrintClip: {
      defaultValue: "CropBox",
      value: "CropBox",
      type: "name",
      explicitSet: false,
      valueSet: [
        "MediaBox",
        "CropBox",
        "TrimBox",
        "BleedBox",
        "ArtBox"
      ],
      pdfVersion: 1.4
    },
    PrintScaling: {
      defaultValue: "AppDefault",
      value: "AppDefault",
      type: "name",
      explicitSet: false,
      valueSet: ["AppDefault", "None"],
      pdfVersion: 1.6
    },
    Duplex: {
      defaultValue: "",
      value: "none",
      type: "name",
      explicitSet: false,
      valueSet: [
        "Simplex",
        "DuplexFlipShortEdge",
        "DuplexFlipLongEdge",
        "none"
      ],
      pdfVersion: 1.7
    },
    PickTrayByPDFSize: {
      defaultValue: false,
      value: false,
      type: "boolean",
      explicitSet: false,
      valueSet: [true, false],
      pdfVersion: 1.7
    },
    PrintPageRange: {
      defaultValue: "",
      value: "",
      type: "array",
      explicitSet: false,
      valueSet: null,
      pdfVersion: 1.7
    },
    NumCopies: {
      defaultValue: 1,
      value: 1,
      type: "integer",
      explicitSet: false,
      valueSet: null,
      pdfVersion: 1.7
    }
  }, c3 = Object.keys(s2), l2 = [], u2 = 0, d2 = 0, f2 = 0;
  function p(e5, t) {
    var n3, r3 = false;
    for (n3 = 0; n3 < e5.length; n3 += 1) e5[n3] === t && (r3 = true);
    return r3;
  }
  if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(s2)), this.internal.viewerpreferences.isSubscribed = false), r2 = this.internal.viewerpreferences.configuration, e4 === "reset" || true === n2) {
    var m = c3.length;
    for (f2 = 0; f2 < m; f2 += 1) r2[c3[f2]].value = r2[c3[f2]].defaultValue, r2[c3[f2]].explicitSet = false;
  }
  if (e(e4) === "object") {
    for (a2 in e4) if (o2 = e4[a2], p(c3, a2) && o2 !== void 0) {
      if (r2[a2].type === "boolean" && typeof o2 == "boolean") r2[a2].value = o2;
      else if (r2[a2].type === "name" && p(r2[a2].valueSet, o2)) r2[a2].value = o2;
      else if (r2[a2].type === "integer" && Number.isInteger(o2)) r2[a2].value = o2;
      else if (r2[a2].type === "array") {
        for (u2 = 0; u2 < o2.length; u2 += 1) if (i2 = true, o2[u2].length === 1 && typeof o2[u2][0] == "number") l2.push(String(o2[u2] - 1));
        else if (o2[u2].length > 1) {
          for (d2 = 0; d2 < o2[u2].length; d2 += 1) typeof o2[u2][d2] != "number" && (i2 = false);
          true === i2 && l2.push([o2[u2][0] - 1, o2[u2][1] - 1].join(" "));
        }
        r2[a2].value = "[" + l2.join(" ") + "]";
      } else r2[a2].value = r2[a2].defaultValue;
      r2[a2].explicitSet = true;
    }
  }
  return false === this.internal.viewerpreferences.isSubscribed && (this.internal.events.subscribe("putCatalog", function() {
    var e5, t = [];
    for (e5 in r2) true === r2[e5].explicitSet && (r2[e5].type === "name" ? t.push("/" + e5 + " /" + r2[e5].value) : t.push("/" + e5 + " " + r2[e5].value));
    t.length !== 0 && this.internal.write("/ViewerPreferences\n<<\n" + t.join("\n") + "\n>>");
  }), this.internal.viewerpreferences.isSubscribed = true), this.internal.viewerpreferences.configuration = r2, this;
}, Z.API.addMetadata = function(e4, t) {
  return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = {
    metadata: e4,
    namespaceUri: t ?? "http://jspdf.default.namespaceuri/",
    rawXml: typeof t == "boolean" && t
  }, this.internal.events.subscribe("putCatalog", Ys), this.internal.events.subscribe("postPutResources", Js)), this;
}, function(e4) {
  var t = e4.API, n2 = t.pdfEscape16 = function(e5, t2) {
    for (var n3, r3 = t2.metadata.Unicode.widths, i3 = [
      "",
      "0",
      "00",
      "000",
      "0000"
    ], a2 = [""], o2 = 0, s2 = e5.length; o2 < s2; ++o2) {
      if (n3 = t2.metadata.characterToGlyph(e5.charCodeAt(o2)), t2.metadata.glyIdsUsed.push(n3), t2.metadata.toUnicode[n3] = e5.charCodeAt(o2), r3.indexOf(n3) == -1 && (r3.push(n3), r3.push([parseInt(t2.metadata.widthOfGlyph(n3), 10)])), n3 == "0") return a2.join("");
      n3 = n3.toString(16), a2.push(i3[4 - n3.length], n3);
    }
    return a2.join("");
  }, r2 = function(e5) {
    var t2, n3, r3, i3, a2, o2, s2;
    for (a2 = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange", r3 = [], o2 = 0, s2 = (n3 = Object.keys(e5).sort(function(e6, t3) {
      return e6 - t3;
    })).length; o2 < s2; o2++) t2 = n3[o2], r3.length >= 100 && (a2 += "\n" + r3.length + " beginbfchar\n" + r3.join("\n") + "\nendbfchar", r3 = []), e5[t2] !== void 0 && e5[t2] !== null && typeof e5[t2].toString == "function" && (i3 = ("0000" + e5[t2].toString(16)).slice(-4), t2 = ("0000" + (+t2).toString(16)).slice(-4), r3.push("<" + t2 + "><" + i3 + ">"));
    return r3.length && (a2 += "\n" + r3.length + " beginbfchar\n" + r3.join("\n") + "\nendbfchar\n"), a2 + "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend";
  };
  t.events.push(["putFont", function(t2) {
    (function(t3) {
      var n3 = t3.font, i3 = t3.out, a2 = t3.newObject, o2 = t3.putStream;
      if (n3.metadata instanceof e4.API.TTFFont && n3.encoding === "Identity-H") {
        for (var s2 = n3.metadata.Unicode.widths, c3 = n3.metadata.subset.encode(n3.metadata.glyIdsUsed, 1), l2 = "", u2 = 0; u2 < c3.length; u2++) l2 += String.fromCharCode(c3[u2]);
        var d2 = a2();
        o2({
          data: l2,
          addLength1: true,
          objectId: d2
        }), i3("endobj");
        var f2 = a2();
        o2({
          data: r2(n3.metadata.toUnicode),
          addLength1: true,
          objectId: f2
        }), i3("endobj");
        var p = a2();
        i3("<<"), i3("/Type /FontDescriptor"), i3("/FontName /" + bo(n3.fontName)), i3("/FontFile2 " + d2 + " 0 R"), i3("/FontBBox " + e4.API.PDFObject.convert(n3.metadata.bbox)), i3("/Flags " + n3.metadata.flags), i3("/StemV " + n3.metadata.stemV), i3("/ItalicAngle " + n3.metadata.italicAngle), i3("/Ascent " + n3.metadata.ascender), i3("/Descent " + n3.metadata.decender), i3("/CapHeight " + n3.metadata.capHeight), i3(">>"), i3("endobj");
        var m = a2();
        i3("<<"), i3("/Type /Font"), i3("/BaseFont /" + bo(n3.fontName)), i3("/FontDescriptor " + p + " 0 R"), i3("/W " + e4.API.PDFObject.convert(s2)), i3("/CIDToGIDMap /Identity"), i3("/DW 1000"), i3("/Subtype /CIDFontType2"), i3("/CIDSystemInfo"), i3("<<"), i3("/Supplement 0"), i3("/Registry (Adobe)"), i3("/Ordering (" + n3.encoding + ")"), i3(">>"), i3(">>"), i3("endobj"), n3.objectNumber = a2(), i3("<<"), i3("/Type /Font"), i3("/Subtype /Type0"), i3("/ToUnicode " + f2 + " 0 R"), i3("/BaseFont /" + bo(n3.fontName)), i3("/Encoding /" + n3.encoding), i3("/DescendantFonts [" + m + " 0 R]"), i3(">>"), i3("endobj"), n3.isAlreadyPutted = true;
      }
    })(t2);
  }]), t.events.push(["putFont", function(t2) {
    (function(t3) {
      var n3 = t3.font, i3 = t3.out, a2 = t3.newObject, o2 = t3.putStream;
      if (n3.metadata instanceof e4.API.TTFFont && n3.encoding === "WinAnsiEncoding") {
        for (var s2 = n3.metadata.rawData, c3 = "", l2 = 0; l2 < s2.length; l2++) c3 += String.fromCharCode(s2[l2]);
        var u2 = a2();
        o2({
          data: c3,
          addLength1: true,
          objectId: u2
        }), i3("endobj");
        var d2 = a2();
        o2({
          data: r2(n3.metadata.toUnicode),
          addLength1: true,
          objectId: d2
        }), i3("endobj");
        var f2 = a2();
        i3("<<"), i3("/Descent " + n3.metadata.decender), i3("/CapHeight " + n3.metadata.capHeight), i3("/StemV " + n3.metadata.stemV), i3("/Type /FontDescriptor"), i3("/FontFile2 " + u2 + " 0 R"), i3("/Flags 96"), i3("/FontBBox " + e4.API.PDFObject.convert(n3.metadata.bbox)), i3("/FontName /" + bo(n3.fontName)), i3("/ItalicAngle " + n3.metadata.italicAngle), i3("/Ascent " + n3.metadata.ascender), i3(">>"), i3("endobj"), n3.objectNumber = a2();
        for (var p = 0; p < n3.metadata.hmtx.widths.length; p++) n3.metadata.hmtx.widths[p] = parseInt(n3.metadata.hmtx.widths[p] * (1e3 / n3.metadata.head.unitsPerEm));
        i3("<</Subtype/TrueType/Type/Font/ToUnicode " + d2 + " 0 R/BaseFont/" + bo(n3.fontName) + "/FontDescriptor " + f2 + " 0 R/Encoding/" + n3.encoding + " /FirstChar 29 /LastChar 255 /Widths " + e4.API.PDFObject.convert(n3.metadata.hmtx.widths) + ">>"), i3("endobj"), n3.isAlreadyPutted = true;
      }
    })(t2);
  }]);
  var i2 = function(e5) {
    var t2, r3 = e5.text || "", i3 = e5.x, a2 = e5.y, o2 = e5.options || {}, s2 = e5.mutex || {}, c3 = s2.pdfEscape, l2 = s2.activeFontKey, u2 = s2.fonts, d2 = l2, f2 = "", p = 0, m = "", h = u2[d2].encoding;
    if (u2[d2].encoding !== "Identity-H") return {
      text: r3,
      x: i3,
      y: a2,
      options: o2,
      mutex: s2
    };
    for (m = r3, d2 = l2, Array.isArray(r3) && (m = r3[0]), p = 0; p < m.length; p += 1) u2[d2].metadata.hasOwnProperty("cmap") && (t2 = u2[d2].metadata.cmap.unicode.codeMap[m[p].charCodeAt(0)]), t2 || m[p].charCodeAt(0) < 256 && u2[d2].metadata.hasOwnProperty("Unicode") ? f2 += m[p] : f2 += "";
    var g = "";
    return parseInt(d2.slice(1)) < 14 || h === "WinAnsiEncoding" ? g = c3(f2, d2).split("").map(function(e6) {
      return e6.charCodeAt(0).toString(16);
    }).join("") : h === "Identity-H" && (g = n2(f2, u2[d2])), s2.isHex = true, {
      text: g,
      x: i3,
      y: a2,
      options: o2,
      mutex: s2
    };
  };
  t.events.push(["postProcessText", function(e5) {
    var t2 = e5.text || "", n3 = [], r3 = {
      text: t2,
      x: e5.x,
      y: e5.y,
      options: e5.options,
      mutex: e5.mutex
    };
    if (Array.isArray(t2)) {
      var a2 = 0;
      for (a2 = 0; a2 < t2.length; a2 += 1) Array.isArray(t2[a2]) && t2[a2].length === 3 ? n3.push([
        i2(Object.assign({}, r3, { text: t2[a2][0] })).text,
        t2[a2][1],
        t2[a2][2]
      ]) : n3.push(i2(Object.assign({}, r3, { text: t2[a2] })).text);
      e5.text = n3;
    } else e5.text = i2(Object.assign({}, r3, { text: t2 })).text;
  }]);
}(Z), function(e4) {
  var t = function() {
    return this.internal.vFS === void 0 && (this.internal.vFS = {}), true;
  };
  e4.existsFileInVFS = function(e5) {
    return t.call(this), this.internal.vFS[e5] !== void 0;
  }, e4.addFileToVFS = function(e5, n2) {
    return t.call(this), this.internal.vFS[e5] = n2, this;
  }, e4.getFileFromVFS = function(e5) {
    return t.call(this), this.internal.vFS[e5] === void 0 ? null : this.internal.vFS[e5];
  };
}(Z.API), function(e4) {
  e4.__bidiEngine__ = e4.prototype.__bidiEngine__ = function(e5) {
    var n3, r2, i2, a2, o2, s2, c3, l2 = t, u2 = [
      [
        0,
        3,
        0,
        1,
        0,
        0,
        0
      ],
      [
        0,
        3,
        0,
        1,
        2,
        2,
        0
      ],
      [
        0,
        3,
        0,
        17,
        2,
        0,
        1
      ],
      [
        0,
        3,
        5,
        5,
        4,
        1,
        0
      ],
      [
        0,
        3,
        21,
        21,
        4,
        0,
        1
      ],
      [
        0,
        3,
        5,
        5,
        4,
        2,
        0
      ]
    ], d2 = [
      [
        2,
        0,
        1,
        1,
        0,
        1,
        0
      ],
      [
        2,
        0,
        1,
        1,
        0,
        2,
        0
      ],
      [
        2,
        0,
        2,
        1,
        3,
        2,
        0
      ],
      [
        2,
        0,
        2,
        33,
        3,
        1,
        1
      ]
    ], f2 = {
      L: 0,
      R: 1,
      EN: 2,
      AN: 3,
      N: 4,
      B: 5,
      S: 6
    }, p = {
      0: 0,
      5: 1,
      6: 2,
      7: 3,
      32: 4,
      251: 5,
      254: 6,
      255: 7
    }, m = "(.).(.<.>.<.[.].[.{.}.{.«.».«.‹.›.‹.⁅.⁆.⁅.⁽.⁾.⁽.₍.₎.₍.≤.≥.≤.〈.〉.〈.﹙.﹚.﹙.﹛.﹜.﹛.﹝.﹞.﹝.﹤.﹥.﹤".split("."), h = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), g = false, _ = 0;
    this.__bidiEngine__ = {};
    var v = function(e6) {
      var t2 = e6.charCodeAt(), n4 = t2 >> 8, r3 = p[n4];
      return r3 === void 0 ? n4 === 252 || n4 === 253 ? "AL" : h.test(n4) ? "L" : n4 === 8 ? "R" : "N" : l2[256 * r3 + (255 & t2)];
    }, y = function(e6) {
      for (var t2, n4 = 0; n4 < e6.length; n4++) {
        if ((t2 = v(e6.charAt(n4))) === "L") return false;
        if (t2 === "R") return true;
      }
      return false;
    }, b2 = function(e6, t2, o3, s3) {
      var c4, l3, u3, d3, f3 = t2[s3];
      switch (f3) {
        case "L":
        case "R":
        case "LRE":
        case "RLE":
        case "LRO":
        case "RLO":
        case "PDF":
          g = false;
          break;
        case "N":
        case "AN":
          break;
        case "EN":
          g && (f3 = "AN");
          break;
        case "AL":
          g = true, f3 = "R";
          break;
        case "WS":
        case "BN":
          f3 = "N";
          break;
        case "CS":
          s3 < 1 || s3 + 1 >= t2.length || (c4 = o3[s3 - 1]) !== "EN" && c4 !== "AN" || (l3 = t2[s3 + 1]) !== "EN" && l3 !== "AN" ? f3 = "N" : g && (l3 = "AN"), f3 = l3 === c4 ? l3 : "N";
          break;
        case "ES":
          f3 = (c4 = s3 > 0 ? o3[s3 - 1] : "B") === "EN" && s3 + 1 < t2.length && t2[s3 + 1] === "EN" ? "EN" : "N";
          break;
        case "ET":
          if (s3 > 0 && o3[s3 - 1] === "EN") {
            f3 = "EN";
            break;
          }
          if (g) {
            f3 = "N";
            break;
          }
          for (u3 = s3 + 1, d3 = t2.length; u3 < d3 && t2[u3] === "ET"; ) u3++;
          f3 = u3 < d3 && t2[u3] === "EN" ? "EN" : "N";
          break;
        case "NSM":
          if (i2 && !a2) {
            for (d3 = t2.length, u3 = s3 + 1; u3 < d3 && t2[u3] === "NSM"; ) u3++;
            if (u3 < d3) {
              var p2 = e6[s3], m2 = p2 >= 1425 && p2 <= 2303 || p2 === 64286;
              if (c4 = t2[u3], m2 && (c4 === "R" || c4 === "AL")) {
                f3 = "R";
                break;
              }
            }
          }
          f3 = s3 < 1 || (c4 = t2[s3 - 1]) === "B" ? "N" : o3[s3 - 1];
          break;
        case "B":
          g = false, n3 = true, f3 = _;
          break;
        case "S":
          r2 = true, f3 = "N";
      }
      return f3;
    }, x2 = function(e6, t2, n4) {
      var r3 = e6.split("");
      return n4 && S2(r3, n4, { hiLevel: _ }), r3.reverse(), t2 && t2.reverse(), r3.join("");
    }, S2 = function(e6, t2, i3) {
      var a3, o3, s3, c4, l3, p2 = -1, m2 = e6.length, h2 = 0, y2 = [], x3 = _ ? d2 : u2, S3 = [];
      for (g = false, n3 = false, r2 = false, o3 = 0; o3 < m2; o3++) S3[o3] = v(e6[o3]);
      for (s3 = 0; s3 < m2; s3++) {
        if (l3 = h2, y2[s3] = b2(e6, S3, y2, s3), a3 = 240 & (h2 = x3[l3][f2[y2[s3]]]), h2 &= 15, t2[s3] = c4 = x3[h2][5], a3 > 0) if (a3 === 16) {
          for (o3 = p2; o3 < s3; o3++) t2[o3] = 1;
          p2 = -1;
        } else p2 = -1;
        if (x3[h2][6]) p2 === -1 && (p2 = s3);
        else if (p2 > -1) {
          for (o3 = p2; o3 < s3; o3++) t2[o3] = c4;
          p2 = -1;
        }
        S3[s3] === "B" && (t2[s3] = 0), i3.hiLevel |= c4;
      }
      r2 && function(e7, t3, n4) {
        for (var r3 = 0; r3 < n4; r3++) if (e7[r3] === "S") {
          t3[r3] = _;
          for (var i4 = r3 - 1; i4 >= 0 && e7[i4] === "WS"; i4--) t3[i4] = _;
        }
      }(S3, t2, m2);
    }, C2 = function(e6, t2, r3, i3, a3) {
      if (!(a3.hiLevel < e6)) {
        if (e6 === 1 && _ === 1 && !n3) return t2.reverse(), void (r3 && r3.reverse());
        for (var o3, s3, c4, l3, u3 = t2.length, d3 = 0; d3 < u3; ) {
          if (i3[d3] >= e6) {
            for (c4 = d3 + 1; c4 < u3 && i3[c4] >= e6; ) c4++;
            for (l3 = d3, s3 = c4 - 1; l3 < s3; l3++, s3--) o3 = t2[l3], t2[l3] = t2[s3], t2[s3] = o3, r3 && (o3 = r3[l3], r3[l3] = r3[s3], r3[s3] = o3);
            d3 = c4;
          }
          d3++;
        }
      }
    }, w2 = function(e6, t2, n4) {
      var r3 = e6.split(""), i3 = { hiLevel: _ };
      return n4 || (n4 = []), S2(r3, n4, i3), function(e7, t3, n5) {
        if (n5.hiLevel !== 0 && c3) for (var r4, i4 = 0; i4 < e7.length; i4++) t3[i4] === 1 && (r4 = m.indexOf(e7[i4])) >= 0 && (e7[i4] = m[r4 + 1]);
      }(r3, n4, i3), C2(2, r3, t2, n4, i3), C2(1, r3, t2, n4, i3), r3.join("");
    };
    return this.__bidiEngine__.doBidiReorder = function(e6, t2, n4) {
      if (function(e7, t3) {
        if (t3) for (var n5 = 0; n5 < e7.length; n5++) t3[n5] = n5;
        a2 === void 0 && (a2 = y(e7)), s2 === void 0 && (s2 = y(e7));
      }(e6, t2), i2 || !o2 || s2) if (i2 && o2 && a2 ^ s2) _ = a2 ? 1 : 0, e6 = x2(e6, t2, n4);
      else if (!i2 && o2 && s2) _ = a2 ? 1 : 0, e6 = w2(e6, t2, n4), e6 = x2(e6, t2);
      else if (!i2 || a2 || o2 || s2) {
        if (i2 && !o2 && a2 ^ s2) e6 = x2(e6, t2), a2 ? (_ = 0, e6 = w2(e6, t2, n4)) : (_ = 1, e6 = w2(e6, t2, n4), e6 = x2(e6, t2));
        else if (i2 && a2 && !o2 && s2) _ = 1, e6 = w2(e6, t2, n4), e6 = x2(e6, t2);
        else if (!i2 && !o2 && a2 ^ s2) {
          var r3 = c3;
          a2 ? (_ = 1, e6 = w2(e6, t2, n4), _ = 0, c3 = false, e6 = w2(e6, t2, n4), c3 = r3) : (_ = 0, e6 = w2(e6, t2, n4), e6 = x2(e6, t2), _ = 1, c3 = false, e6 = w2(e6, t2, n4), c3 = r3, e6 = x2(e6, t2));
        }
      } else _ = 0, e6 = w2(e6, t2, n4);
      else _ = a2 ? 1 : 0, e6 = w2(e6, t2, n4);
      return e6;
    }, this.__bidiEngine__.setOptions = function(e6) {
      e6 && (i2 = e6.isInputVisual, o2 = e6.isOutputVisual, a2 = e6.isInputRtl, s2 = e6.isOutputRtl, c3 = e6.isSymmetricSwapping);
    }, this.__bidiEngine__.setOptions(e5), this.__bidiEngine__;
  };
  var t = "BN.BN.BN.BN.BN.BN.BN.BN.BN.S.B.S.WS.B.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.B.B.B.S.WS.N.N.ET.ET.ET.N.N.N.N.N.ES.CS.ES.CS.CS.EN.EN.EN.EN.EN.EN.EN.EN.EN.EN.CS.N.N.N.N.N.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.N.N.N.N.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.N.N.N.BN.BN.BN.BN.BN.BN.B.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.CS.N.ET.ET.ET.ET.N.N.N.N.L.N.N.BN.N.N.ET.ET.EN.EN.N.L.N.N.N.EN.L.N.N.N.N.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.N.L.L.L.L.L.L.L.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.L.N.N.N.N.N.ET.N.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.R.NSM.R.NSM.NSM.R.NSM.NSM.R.NSM.N.N.N.N.N.N.N.N.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.N.N.N.N.N.R.R.R.R.R.N.N.N.N.N.N.N.N.N.N.N.AN.AN.AN.AN.AN.AN.N.N.AL.ET.ET.AL.CS.AL.N.N.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.AL.AL.N.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.AN.AN.AN.AN.AN.AN.AN.AN.AN.AN.ET.AN.AN.AL.AL.AL.NSM.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.NSM.NSM.NSM.NSM.NSM.NSM.NSM.AN.N.NSM.NSM.NSM.NSM.NSM.NSM.AL.AL.NSM.NSM.N.NSM.NSM.NSM.NSM.AL.AL.EN.EN.EN.EN.EN.EN.EN.EN.EN.EN.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.N.AL.AL.NSM.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.N.N.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.AL.N.N.N.N.N.N.N.N.N.N.N.N.N.N.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.R.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.R.R.N.N.N.N.R.N.N.N.N.N.WS.WS.WS.WS.WS.WS.WS.WS.WS.WS.WS.BN.BN.BN.L.R.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.WS.B.LRE.RLE.PDF.LRO.RLO.CS.ET.ET.ET.ET.ET.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.CS.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.WS.BN.BN.BN.BN.BN.N.LRI.RLI.FSI.PDI.BN.BN.BN.BN.BN.BN.EN.L.N.N.EN.EN.EN.EN.EN.EN.ES.ES.N.N.N.L.EN.EN.EN.EN.EN.EN.EN.EN.EN.EN.ES.ES.N.N.N.N.L.L.L.L.L.L.L.L.L.L.L.L.L.N.N.N.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.ET.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.L.L.L.L.L.L.L.N.N.N.N.N.N.N.N.N.N.N.N.L.L.L.L.L.N.N.N.N.N.R.NSM.R.R.R.R.R.R.R.R.R.R.ES.R.R.R.R.R.R.R.R.R.R.R.R.R.N.R.R.R.R.R.N.R.N.R.R.N.R.R.N.R.R.R.R.R.R.R.R.R.R.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.CS.N.CS.N.N.CS.N.N.N.N.N.N.N.N.N.ET.N.N.ES.ES.N.N.N.N.N.ET.ET.N.N.N.N.N.AL.AL.AL.AL.AL.N.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.N.N.BN.N.N.N.ET.ET.ET.N.N.N.N.N.ES.CS.ES.CS.CS.EN.EN.EN.EN.EN.EN.EN.EN.EN.EN.CS.N.N.N.N.N.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.N.N.N.N.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.N.N.N.N.N.N.N.N.N.N.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.N.N.N.L.L.L.L.L.L.N.N.L.L.L.L.L.L.N.N.L.L.L.L.L.L.N.N.L.L.L.N.N.N.ET.ET.N.N.N.ET.ET.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N.N".split("."), n2 = new e4.__bidiEngine__({ isInputVisual: true });
  e4.API.events.push(["postProcessText", function(e5) {
    var t2 = e5.text;
    e5.x, e5.y;
    var r2 = e5.options || {};
    e5.mutex, r2.lang;
    var i2 = [];
    if (r2.isInputVisual = typeof r2.isInputVisual != "boolean" || r2.isInputVisual, n2.setOptions(r2), Object.prototype.toString.call(t2) === "[object Array]") {
      var a2 = 0;
      for (i2 = [], a2 = 0; a2 < t2.length; a2 += 1) Object.prototype.toString.call(t2[a2]) === "[object Array]" ? i2.push([
        n2.doBidiReorder(t2[a2][0]),
        t2[a2][1],
        t2[a2][2]
      ]) : i2.push([n2.doBidiReorder(t2[a2])]);
      e5.text = i2;
    } else e5.text = n2.doBidiReorder(t2);
    n2.setOptions({ isInputVisual: true });
  }]);
}(Z), Z.API.TTFFont = function() {
  function e4(e5) {
    var t;
    if (this.rawData = e5, t = this.contents = new Zs(e5), this.contents.pos = 4, t.readString(4) === "ttcf") throw Error("TTCF not supported.");
    t.pos = 0, this.parse(), this.subset = new gc(this), this.registerTTF();
  }
  return e4.open = function(t) {
    return new e4(t);
  }, e4.prototype.parse = function() {
    return this.directory = new Qs(this.contents), this.head = new tc(this), this.name = new cc(this), this.cmap = new rc(this), this.toUnicode = {}, this.hhea = new ic(this), this.maxp = new lc(this), this.hmtx = new uc(this), this.post = new oc(this), this.os2 = new ac(this), this.loca = new hc(this), this.glyf = new fc(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [
      this.head.xMin,
      this.head.yMin,
      this.head.xMax,
      this.head.yMax
    ];
  }, e4.prototype.registerTTF = function() {
    var e5, t, n2, r2, i2;
    if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = (function() {
      var t2, n3, r3, i3;
      for (i3 = [], t2 = 0, n3 = (r3 = this.bbox).length; t2 < n3; t2++) e5 = r3[t2], i3.push(Math.round(e5 * this.scaleFactor));
      return i3;
    }).call(this), this.stemV = 0, this.post.exists ? (n2 = 255 & (r2 = this.post.italic_angle), 32768 & (t = r2 >> 16) && (t = -(1 + (65535 ^ t))), this.italicAngle = +(t + "." + n2)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (i2 = this.familyClass) === 1 || i2 === 2 || i2 === 3 || i2 === 4 || i2 === 5 || i2 === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw Error("No unicode cmap for font");
  }, e4.prototype.characterToGlyph = function(e5) {
    var _a2;
    return ((_a2 = this.cmap.unicode) == null ? void 0 : _a2.codeMap[e5]) || 0;
  }, e4.prototype.widthOfGlyph = function(e5) {
    var t;
    return t = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(e5).advance * t;
  }, e4.prototype.widthOfString = function(e5, t, n2) {
    var r2, i2, a2, o2;
    for (a2 = 0, i2 = 0, o2 = (e5 = "" + e5).length; 0 <= o2 ? i2 < o2 : i2 > o2; i2 = 0 <= o2 ? ++i2 : --i2) r2 = e5.charCodeAt(i2), a2 += this.widthOfGlyph(this.characterToGlyph(r2)) + 1e3 / t * n2 || 0;
    return t / 1e3 * a2;
  }, e4.prototype.lineHeight = function(e5, t) {
    var n2;
    return t ?? (t = false), n2 = t ? this.lineGap : 0, (this.ascender + n2 - this.decender) / 1e3 * e5;
  }, e4;
}();
var Xs;
var Zs = function() {
  function e4(e5) {
    this.data = e5 ?? [], this.pos = 0, this.length = this.data.length;
  }
  return e4.prototype.readByte = function() {
    return this.data[this.pos++];
  }, e4.prototype.writeByte = function(e5) {
    return this.data[this.pos++] = e5;
  }, e4.prototype.readUInt32 = function() {
    return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
  }, e4.prototype.writeUInt32 = function(e5) {
    return this.writeByte(e5 >>> 24 & 255), this.writeByte(e5 >> 16 & 255), this.writeByte(e5 >> 8 & 255), this.writeByte(255 & e5);
  }, e4.prototype.readInt32 = function() {
    var e5;
    return (e5 = this.readUInt32()) >= 2147483648 ? e5 - 4294967296 : e5;
  }, e4.prototype.writeInt32 = function(e5) {
    return e5 < 0 && (e5 += 4294967296), this.writeUInt32(e5);
  }, e4.prototype.readUInt16 = function() {
    return this.readByte() << 8 | this.readByte();
  }, e4.prototype.writeUInt16 = function(e5) {
    return this.writeByte(e5 >> 8 & 255), this.writeByte(255 & e5);
  }, e4.prototype.readInt16 = function() {
    var e5;
    return (e5 = this.readUInt16()) >= 32768 ? e5 - 65536 : e5;
  }, e4.prototype.writeInt16 = function(e5) {
    return e5 < 0 && (e5 += 65536), this.writeUInt16(e5);
  }, e4.prototype.readString = function(e5) {
    var t, n2;
    for (n2 = [], t = 0; 0 <= e5 ? t < e5 : t > e5; t = 0 <= e5 ? ++t : --t) n2[t] = String.fromCharCode(this.readByte());
    return n2.join("");
  }, e4.prototype.writeString = function(e5) {
    var t, n2, r2;
    for (r2 = [], t = 0, n2 = e5.length; 0 <= n2 ? t < n2 : t > n2; t = 0 <= n2 ? ++t : --t) r2.push(this.writeByte(e5.charCodeAt(t)));
    return r2;
  }, e4.prototype.readShort = function() {
    return this.readInt16();
  }, e4.prototype.writeShort = function(e5) {
    return this.writeInt16(e5);
  }, e4.prototype.readLongLong = function() {
    var e5, t, n2, r2, i2, a2, o2, s2;
    return e5 = this.readByte(), t = this.readByte(), n2 = this.readByte(), r2 = this.readByte(), i2 = this.readByte(), a2 = this.readByte(), o2 = this.readByte(), s2 = this.readByte(), 128 & e5 ? -1 * (72057594037927940 * (255 ^ e5) + 281474976710656 * (255 ^ t) + 1099511627776 * (255 ^ n2) + 4294967296 * (255 ^ r2) + 16777216 * (255 ^ i2) + 65536 * (255 ^ a2) + 256 * (255 ^ o2) + (255 ^ s2) + 1) : 72057594037927940 * e5 + 281474976710656 * t + 1099511627776 * n2 + 4294967296 * r2 + 16777216 * i2 + 65536 * a2 + 256 * o2 + s2;
  }, e4.prototype.writeLongLong = function(e5) {
    var t, n2;
    return t = Math.floor(e5 / 4294967296), n2 = 4294967295 & e5, this.writeByte(t >> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t), this.writeByte(n2 >> 24 & 255), this.writeByte(n2 >> 16 & 255), this.writeByte(n2 >> 8 & 255), this.writeByte(255 & n2);
  }, e4.prototype.readInt = function() {
    return this.readInt32();
  }, e4.prototype.writeInt = function(e5) {
    return this.writeInt32(e5);
  }, e4.prototype.read = function(e5) {
    var t, n2;
    for (t = [], n2 = 0; 0 <= e5 ? n2 < e5 : n2 > e5; n2 = 0 <= e5 ? ++n2 : --n2) t.push(this.readByte());
    return t;
  }, e4.prototype.write = function(e5) {
    var t, n2, r2, i2;
    for (i2 = [], n2 = 0, r2 = e5.length; n2 < r2; n2++) t = e5[n2], i2.push(this.writeByte(t));
    return i2;
  }, e4;
}();
var Qs = function() {
  var e4;
  function t(e5) {
    var t2, n2, r2;
    for (this.scalarType = e5.readInt(), this.tableCount = e5.readShort(), this.searchRange = e5.readShort(), this.entrySelector = e5.readShort(), this.rangeShift = e5.readShort(), this.tables = {}, n2 = 0, r2 = this.tableCount; 0 <= r2 ? n2 < r2 : n2 > r2; n2 = 0 <= r2 ? ++n2 : --n2) t2 = {
      tag: e5.readString(4),
      checksum: e5.readInt(),
      offset: e5.readInt(),
      length: e5.readInt()
    }, this.tables[t2.tag] = t2;
  }
  return t.prototype.encode = function(t2) {
    var n2, r2, i2, a2, o2, s2, c3, l2, u2, d2, f2, p, m;
    for (m in f2 = Object.keys(t2).length, s2 = Math.log(2), u2 = 16 * Math.floor(Math.log(f2) / s2), a2 = Math.floor(u2 / s2), l2 = 16 * f2 - u2, (r2 = new Zs()).writeInt(this.scalarType), r2.writeShort(f2), r2.writeShort(u2), r2.writeShort(a2), r2.writeShort(l2), i2 = 16 * f2, c3 = r2.pos + i2, o2 = null, p = [], t2) for (d2 = t2[m], r2.writeString(m), r2.writeInt(e4(d2)), r2.writeInt(c3), r2.writeInt(d2.length), p = p.concat(d2), m === "head" && (o2 = c3), c3 += d2.length; c3 % 4; ) p.push(0), c3++;
    return r2.write(p), n2 = 2981146554 - e4(r2.data), r2.pos = o2 + 8, r2.writeUInt32(n2), r2.data;
  }, e4 = function(e5) {
    var t2, n2, r2, i2;
    for (e5 = dc.call(e5); e5.length % 4; ) e5.push(0);
    for (r2 = new Zs(e5), n2 = 0, t2 = 0, i2 = e5.length; t2 < i2; t2 = t2 += 4) n2 += r2.readUInt32();
    return 4294967295 & n2;
  }, t;
}();
var $s = {}.hasOwnProperty;
var ec = function(e4, t) {
  for (var n2 in t) $s.call(t, n2) && (e4[n2] = t[n2]);
  function r2() {
    this.constructor = e4;
  }
  return r2.prototype = t.prototype, e4.prototype = new r2(), e4.__super__ = t.prototype, e4;
};
Xs = function() {
  function e4(e5) {
    var t;
    this.file = e5, t = this.file.directory.tables[this.tag], this.exists = !!t, t && (this.offset = t.offset, this.length = t.length, this.parse(this.file.contents));
  }
  return e4.prototype.parse = function() {
  }, e4.prototype.encode = function() {
  }, e4.prototype.raw = function() {
    return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
  }, e4;
}();
var tc = function() {
  function e4() {
    return e4.__super__.constructor.apply(this, arguments);
  }
  return ec(e4, Xs), e4.prototype.tag = "head", e4.prototype.parse = function(e5) {
    return e5.pos = this.offset, this.version = e5.readInt(), this.revision = e5.readInt(), this.checkSumAdjustment = e5.readInt(), this.magicNumber = e5.readInt(), this.flags = e5.readShort(), this.unitsPerEm = e5.readShort(), this.created = e5.readLongLong(), this.modified = e5.readLongLong(), this.xMin = e5.readShort(), this.yMin = e5.readShort(), this.xMax = e5.readShort(), this.yMax = e5.readShort(), this.macStyle = e5.readShort(), this.lowestRecPPEM = e5.readShort(), this.fontDirectionHint = e5.readShort(), this.indexToLocFormat = e5.readShort(), this.glyphDataFormat = e5.readShort();
  }, e4.prototype.encode = function(e5) {
    var t;
    return (t = new Zs()).writeInt(this.version), t.writeInt(this.revision), t.writeInt(this.checkSumAdjustment), t.writeInt(this.magicNumber), t.writeShort(this.flags), t.writeShort(this.unitsPerEm), t.writeLongLong(this.created), t.writeLongLong(this.modified), t.writeShort(this.xMin), t.writeShort(this.yMin), t.writeShort(this.xMax), t.writeShort(this.yMax), t.writeShort(this.macStyle), t.writeShort(this.lowestRecPPEM), t.writeShort(this.fontDirectionHint), t.writeShort(e5), t.writeShort(this.glyphDataFormat), t.data;
  }, e4;
}();
var nc = function() {
  function e4(e5, t) {
    var n2, r2, i2, a2, o2, s2, c3, l2, u2, d2, f2, p, m, h, g, _, v;
    switch (this.platformID = e5.readUInt16(), this.encodingID = e5.readShort(), this.offset = t + e5.readInt(), u2 = e5.pos, e5.pos = this.offset, this.format = e5.readUInt16(), this.length = e5.readUInt16(), this.language = e5.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
      case 0:
        for (s2 = 0; s2 < 256; ++s2) this.codeMap[s2] = e5.readByte();
        break;
      case 4:
        for (f2 = e5.readUInt16(), d2 = f2 / 2, e5.pos += 6, i2 = function() {
          var t2, n3;
          for (n3 = [], s2 = t2 = 0; 0 <= d2 ? t2 < d2 : t2 > d2; s2 = 0 <= d2 ? ++t2 : --t2) n3.push(e5.readUInt16());
          return n3;
        }(), e5.pos += 2, m = function() {
          var t2, n3;
          for (n3 = [], s2 = t2 = 0; 0 <= d2 ? t2 < d2 : t2 > d2; s2 = 0 <= d2 ? ++t2 : --t2) n3.push(e5.readUInt16());
          return n3;
        }(), c3 = function() {
          var t2, n3;
          for (n3 = [], s2 = t2 = 0; 0 <= d2 ? t2 < d2 : t2 > d2; s2 = 0 <= d2 ? ++t2 : --t2) n3.push(e5.readUInt16());
          return n3;
        }(), l2 = function() {
          var t2, n3;
          for (n3 = [], s2 = t2 = 0; 0 <= d2 ? t2 < d2 : t2 > d2; s2 = 0 <= d2 ? ++t2 : --t2) n3.push(e5.readUInt16());
          return n3;
        }(), r2 = (this.length - e5.pos + this.offset) / 2, o2 = function() {
          var t2, n3;
          for (n3 = [], s2 = t2 = 0; 0 <= r2 ? t2 < r2 : t2 > r2; s2 = 0 <= r2 ? ++t2 : --t2) n3.push(e5.readUInt16());
          return n3;
        }(), s2 = g = 0, v = i2.length; g < v; s2 = ++g) for (h = i2[s2], n2 = _ = p = m[s2]; p <= h ? _ <= h : _ >= h; n2 = p <= h ? ++_ : --_) l2[s2] === 0 ? a2 = n2 + c3[s2] : (a2 = o2[l2[s2] / 2 + (n2 - p) - (d2 - s2)] || 0) !== 0 && (a2 += c3[s2]), this.codeMap[n2] = 65535 & a2;
    }
    e5.pos = u2;
  }
  return e4.encode = function(e5, t) {
    var n2, r2, i2, a2, o2, s2, c3, l2, u2, d2, f2, p, m, h, g, _, v, y, b2, x2, S2, C2, w2, T2, E2, D2, O2, k2, A2, j2, M2, N2, P2, F2, I2, L2, R2, z2, B2, V2, ee2, H2, te2, U2, ne2, re2;
    switch (k2 = new Zs(), a2 = Object.keys(e5).sort(function(e6, t2) {
      return e6 - t2;
    }), t) {
      case "macroman":
        for (m = 0, h = function() {
          var e6 = [];
          for (p = 0; p < 256; ++p) e6.push(0);
          return e6;
        }(), _ = { 0: 0 }, i2 = {}, A2 = 0, P2 = a2.length; A2 < P2; A2++) _[te2 = e5[r2 = a2[A2]]] ?? (_[te2] = ++m), i2[r2] = {
          old: e5[r2],
          new: _[e5[r2]]
        }, h[r2] = _[e5[r2]];
        return k2.writeUInt16(1), k2.writeUInt16(0), k2.writeUInt32(12), k2.writeUInt16(0), k2.writeUInt16(262), k2.writeUInt16(0), k2.write(h), {
          charMap: i2,
          subtable: k2.data,
          maxGlyphID: m + 1
        };
      case "unicode":
        for (D2 = [], u2 = [], v = 0, _ = {}, n2 = {}, g = c3 = null, j2 = 0, F2 = a2.length; j2 < F2; j2++) _[b2 = e5[r2 = a2[j2]]] ?? (_[b2] = ++v), n2[r2] = {
          old: b2,
          new: _[b2]
        }, o2 = _[b2] - r2, g != null && o2 === c3 || (g && u2.push(g), D2.push(r2), c3 = o2), g = r2;
        for (g && u2.push(g), u2.push(65535), D2.push(65535), T2 = 2 * (w2 = D2.length), C2 = 2 * (Math.log(w2) / Math.LN2) ** 2, d2 = Math.log(C2 / 2) / Math.LN2, S2 = 2 * w2 - C2, s2 = [], x2 = [], f2 = [], p = M2 = 0, I2 = D2.length; M2 < I2; p = ++M2) {
          if (E2 = D2[p], l2 = u2[p], E2 === 65535) {
            s2.push(0), x2.push(0);
            break;
          }
          if (E2 - (O2 = n2[E2].new) >= 32768) for (s2.push(0), x2.push(2 * (f2.length + w2 - p)), r2 = N2 = E2; E2 <= l2 ? N2 <= l2 : N2 >= l2; r2 = E2 <= l2 ? ++N2 : --N2) f2.push(n2[r2].new);
          else s2.push(O2 - E2), x2.push(0);
        }
        for (k2.writeUInt16(3), k2.writeUInt16(1), k2.writeUInt32(12), k2.writeUInt16(4), k2.writeUInt16(16 + 8 * w2 + 2 * f2.length), k2.writeUInt16(0), k2.writeUInt16(T2), k2.writeUInt16(C2), k2.writeUInt16(d2), k2.writeUInt16(S2), ee2 = 0, L2 = u2.length; ee2 < L2; ee2++) r2 = u2[ee2], k2.writeUInt16(r2);
        for (k2.writeUInt16(0), H2 = 0, R2 = D2.length; H2 < R2; H2++) r2 = D2[H2], k2.writeUInt16(r2);
        for (U2 = 0, z2 = s2.length; U2 < z2; U2++) o2 = s2[U2], k2.writeUInt16(o2);
        for (ne2 = 0, B2 = x2.length; ne2 < B2; ne2++) y = x2[ne2], k2.writeUInt16(y);
        for (re2 = 0, V2 = f2.length; re2 < V2; re2++) m = f2[re2], k2.writeUInt16(m);
        return {
          charMap: n2,
          subtable: k2.data,
          maxGlyphID: v + 1
        };
    }
  }, e4;
}();
var rc = function() {
  function e4() {
    return e4.__super__.constructor.apply(this, arguments);
  }
  return ec(e4, Xs), e4.prototype.tag = "cmap", e4.prototype.parse = function(e5) {
    var t, n2, r2;
    for (e5.pos = this.offset, this.version = e5.readUInt16(), r2 = e5.readUInt16(), this.tables = [], this.unicode = null, n2 = 0; 0 <= r2 ? n2 < r2 : n2 > r2; n2 = 0 <= r2 ? ++n2 : --n2) t = new nc(e5, this.offset), this.tables.push(t), t.isUnicode && this.unicode == null && (this.unicode = t);
    return true;
  }, e4.encode = function(e5, t) {
    var n2, r2;
    return t ?? (t = "macroman"), n2 = nc.encode(e5, t), (r2 = new Zs()).writeUInt16(0), r2.writeUInt16(1), n2.table = r2.data.concat(n2.subtable), n2;
  }, e4;
}();
var ic = function() {
  function e4() {
    return e4.__super__.constructor.apply(this, arguments);
  }
  return ec(e4, Xs), e4.prototype.tag = "hhea", e4.prototype.parse = function(e5) {
    return e5.pos = this.offset, this.version = e5.readInt(), this.ascender = e5.readShort(), this.decender = e5.readShort(), this.lineGap = e5.readShort(), this.advanceWidthMax = e5.readShort(), this.minLeftSideBearing = e5.readShort(), this.minRightSideBearing = e5.readShort(), this.xMaxExtent = e5.readShort(), this.caretSlopeRise = e5.readShort(), this.caretSlopeRun = e5.readShort(), this.caretOffset = e5.readShort(), e5.pos += 8, this.metricDataFormat = e5.readShort(), this.numberOfMetrics = e5.readUInt16();
  }, e4;
}();
var ac = function() {
  function e4() {
    return e4.__super__.constructor.apply(this, arguments);
  }
  return ec(e4, Xs), e4.prototype.tag = "OS/2", e4.prototype.parse = function(e5) {
    if (e5.pos = this.offset, this.version = e5.readUInt16(), this.averageCharWidth = e5.readShort(), this.weightClass = e5.readUInt16(), this.widthClass = e5.readUInt16(), this.type = e5.readShort(), this.ySubscriptXSize = e5.readShort(), this.ySubscriptYSize = e5.readShort(), this.ySubscriptXOffset = e5.readShort(), this.ySubscriptYOffset = e5.readShort(), this.ySuperscriptXSize = e5.readShort(), this.ySuperscriptYSize = e5.readShort(), this.ySuperscriptXOffset = e5.readShort(), this.ySuperscriptYOffset = e5.readShort(), this.yStrikeoutSize = e5.readShort(), this.yStrikeoutPosition = e5.readShort(), this.familyClass = e5.readShort(), this.panose = function() {
      var t, n2;
      for (n2 = [], t = 0; t < 10; ++t) n2.push(e5.readByte());
      return n2;
    }(), this.charRange = function() {
      var t, n2;
      for (n2 = [], t = 0; t < 4; ++t) n2.push(e5.readInt());
      return n2;
    }(), this.vendorID = e5.readString(4), this.selection = e5.readShort(), this.firstCharIndex = e5.readShort(), this.lastCharIndex = e5.readShort(), this.version > 0 && (this.ascent = e5.readShort(), this.descent = e5.readShort(), this.lineGap = e5.readShort(), this.winAscent = e5.readShort(), this.winDescent = e5.readShort(), this.codePageRange = function() {
      var t, n2;
      for (n2 = [], t = 0; t < 2; t = ++t) n2.push(e5.readInt());
      return n2;
    }(), this.version > 1)) return this.xHeight = e5.readShort(), this.capHeight = e5.readShort(), this.defaultChar = e5.readShort(), this.breakChar = e5.readShort(), this.maxContext = e5.readShort();
  }, e4;
}();
var oc = function() {
  function e4() {
    return e4.__super__.constructor.apply(this, arguments);
  }
  return ec(e4, Xs), e4.prototype.tag = "post", e4.prototype.parse = function(e5) {
    var t, n2, r2;
    switch (e5.pos = this.offset, this.format = e5.readInt(), this.italicAngle = e5.readInt(), this.underlinePosition = e5.readShort(), this.underlineThickness = e5.readShort(), this.isFixedPitch = e5.readInt(), this.minMemType42 = e5.readInt(), this.maxMemType42 = e5.readInt(), this.minMemType1 = e5.readInt(), this.maxMemType1 = e5.readInt(), this.format) {
      case 65536:
      case 196608:
        break;
      case 131072:
        var i2;
        for (n2 = e5.readUInt16(), this.glyphNameIndex = [], i2 = 0; 0 <= n2 ? i2 < n2 : i2 > n2; i2 = 0 <= n2 ? ++i2 : --i2) this.glyphNameIndex.push(e5.readUInt16());
        for (this.names = [], r2 = []; e5.pos < this.offset + this.length; ) t = e5.readByte(), r2.push(this.names.push(e5.readString(t)));
        return r2;
      case 151552:
        return n2 = e5.readUInt16(), this.offsets = e5.read(n2);
      case 262144:
        return this.map = (function() {
          var t2, n3, r3;
          for (r3 = [], i2 = t2 = 0, n3 = this.file.maxp.numGlyphs; 0 <= n3 ? t2 < n3 : t2 > n3; i2 = 0 <= n3 ? ++t2 : --t2) r3.push(e5.readUInt32());
          return r3;
        }).call(this);
    }
  }, e4;
}();
var sc = function(e4, t) {
  this.raw = e4, this.length = e4.length, this.platformID = t.platformID, this.encodingID = t.encodingID, this.languageID = t.languageID;
};
var cc = function() {
  function e4() {
    return e4.__super__.constructor.apply(this, arguments);
  }
  return ec(e4, Xs), e4.prototype.tag = "name", e4.prototype.parse = function(e5) {
    var t, n2, r2, i2, a2, o2, s2, c3, l2, u2, d2;
    for (e5.pos = this.offset, e5.readShort(), t = e5.readShort(), o2 = e5.readShort(), n2 = [], i2 = 0; 0 <= t ? i2 < t : i2 > t; i2 = 0 <= t ? ++i2 : --i2) n2.push({
      platformID: e5.readShort(),
      encodingID: e5.readShort(),
      languageID: e5.readShort(),
      nameID: e5.readShort(),
      length: e5.readShort(),
      offset: this.offset + o2 + e5.readShort()
    });
    for (s2 = {}, i2 = l2 = 0, u2 = n2.length; l2 < u2; i2 = ++l2) r2 = n2[i2], e5.pos = r2.offset, c3 = e5.readString(r2.length), a2 = new sc(c3, r2), s2[d2 = r2.nameID] ?? (s2[d2] = []), s2[r2.nameID].push(a2);
    this.strings = s2, this.copyright = s2[0], this.fontFamily = s2[1], this.fontSubfamily = s2[2], this.uniqueSubfamily = s2[3], this.fontName = s2[4], this.version = s2[5];
    try {
      this.postscriptName = s2[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    } catch {
      this.postscriptName = s2[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    }
    return this.trademark = s2[7], this.manufacturer = s2[8], this.designer = s2[9], this.description = s2[10], this.vendorUrl = s2[11], this.designerUrl = s2[12], this.license = s2[13], this.licenseUrl = s2[14], this.preferredFamily = s2[15], this.preferredSubfamily = s2[17], this.compatibleFull = s2[18], this.sampleText = s2[19];
  }, e4;
}();
var lc = function() {
  function e4() {
    return e4.__super__.constructor.apply(this, arguments);
  }
  return ec(e4, Xs), e4.prototype.tag = "maxp", e4.prototype.parse = function(e5) {
    return e5.pos = this.offset, this.version = e5.readInt(), this.numGlyphs = e5.readUInt16(), this.maxPoints = e5.readUInt16(), this.maxContours = e5.readUInt16(), this.maxCompositePoints = e5.readUInt16(), this.maxComponentContours = e5.readUInt16(), this.maxZones = e5.readUInt16(), this.maxTwilightPoints = e5.readUInt16(), this.maxStorage = e5.readUInt16(), this.maxFunctionDefs = e5.readUInt16(), this.maxInstructionDefs = e5.readUInt16(), this.maxStackElements = e5.readUInt16(), this.maxSizeOfInstructions = e5.readUInt16(), this.maxComponentElements = e5.readUInt16(), this.maxComponentDepth = e5.readUInt16();
  }, e4;
}();
var uc = function() {
  function e4() {
    return e4.__super__.constructor.apply(this, arguments);
  }
  return ec(e4, Xs), e4.prototype.tag = "hmtx", e4.prototype.parse = function(e5) {
    var t, n2, r2, i2, a2, o2, s2;
    for (e5.pos = this.offset, this.metrics = [], t = 0, o2 = this.file.hhea.numberOfMetrics; 0 <= o2 ? t < o2 : t > o2; t = 0 <= o2 ? ++t : --t) this.metrics.push({
      advance: e5.readUInt16(),
      lsb: e5.readInt16()
    });
    for (r2 = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
      var n3, i3;
      for (i3 = [], t = n3 = 0; 0 <= r2 ? n3 < r2 : n3 > r2; t = 0 <= r2 ? ++n3 : --n3) i3.push(e5.readInt16());
      return i3;
    }(), this.widths = (function() {
      var e6, t2, n3, r3;
      for (r3 = [], e6 = 0, t2 = (n3 = this.metrics).length; e6 < t2; e6++) i2 = n3[e6], r3.push(i2.advance);
      return r3;
    }).call(this), n2 = this.widths[this.widths.length - 1], s2 = [], t = a2 = 0; 0 <= r2 ? a2 < r2 : a2 > r2; t = 0 <= r2 ? ++a2 : --a2) s2.push(this.widths.push(n2));
    return s2;
  }, e4.prototype.forGlyph = function(e5) {
    return e5 in this.metrics ? this.metrics[e5] : {
      advance: this.metrics[this.metrics.length - 1].advance,
      lsb: this.leftSideBearings[e5 - this.metrics.length]
    };
  }, e4;
}();
var dc = [].slice;
var fc = function() {
  function e4() {
    return e4.__super__.constructor.apply(this, arguments);
  }
  return ec(e4, Xs), e4.prototype.tag = "glyf", e4.prototype.parse = function() {
    return this.cache = {};
  }, e4.prototype.glyphFor = function(e5) {
    var t, n2, r2, i2, a2, o2, s2, c3, l2, u2;
    return e5 in this.cache ? this.cache[e5] : (i2 = this.file.loca, t = this.file.contents, n2 = i2.indexOf(e5), (r2 = i2.lengthOf(e5)) === 0 ? this.cache[e5] = null : (t.pos = this.offset + n2, a2 = (o2 = new Zs(t.read(r2))).readShort(), c3 = o2.readShort(), u2 = o2.readShort(), s2 = o2.readShort(), l2 = o2.readShort(), this.cache[e5] = a2 === -1 ? new mc(o2, c3, u2, s2, l2) : new pc(o2, a2, c3, u2, s2, l2), this.cache[e5]));
  }, e4.prototype.encode = function(e5, t, n2) {
    var r2, i2, a2, o2, s2;
    for (a2 = [], i2 = [], o2 = 0, s2 = t.length; o2 < s2; o2++) r2 = e5[t[o2]], i2.push(a2.length), r2 && (a2 = a2.concat(r2.encode(n2)));
    return i2.push(a2.length), {
      table: a2,
      offsets: i2
    };
  }, e4;
}();
var pc = function() {
  function e4(e5, t, n2, r2, i2, a2) {
    this.raw = e5, this.numberOfContours = t, this.xMin = n2, this.yMin = r2, this.xMax = i2, this.yMax = a2, this.compound = false;
  }
  return e4.prototype.encode = function() {
    return this.raw.data;
  }, e4;
}();
var mc = function() {
  function e4(e5, t, n2, r2, i2) {
    var a2, o2;
    for (this.raw = e5, this.xMin = t, this.yMin = n2, this.xMax = r2, this.yMax = i2, this.compound = true, this.glyphIDs = [], this.glyphOffsets = [], a2 = this.raw; o2 = a2.readShort(), this.glyphOffsets.push(a2.pos), this.glyphIDs.push(a2.readUInt16()), 32 & o2; ) a2.pos += 1 & o2 ? 4 : 2, 128 & o2 ? a2.pos += 8 : 64 & o2 ? a2.pos += 4 : 8 & o2 && (a2.pos += 2);
  }
  return e4.prototype.encode = function() {
    var e5, t, n2;
    for (t = new Zs(dc.call(this.raw.data)), e5 = 0, n2 = this.glyphIDs.length; e5 < n2; ++e5) t.pos = this.glyphOffsets[e5];
    return t.data;
  }, e4;
}();
var hc = function() {
  function e4() {
    return e4.__super__.constructor.apply(this, arguments);
  }
  return ec(e4, Xs), e4.prototype.tag = "loca", e4.prototype.parse = function(e5) {
    var t, n2;
    return e5.pos = this.offset, t = this.file.head.indexToLocFormat, this.offsets = t === 0 ? (function() {
      var t2, r2;
      for (r2 = [], n2 = 0, t2 = this.length; n2 < t2; n2 += 2) r2.push(2 * e5.readUInt16());
      return r2;
    }).call(this) : (function() {
      var t2, r2;
      for (r2 = [], n2 = 0, t2 = this.length; n2 < t2; n2 += 4) r2.push(e5.readUInt32());
      return r2;
    }).call(this);
  }, e4.prototype.indexOf = function(e5) {
    return this.offsets[e5];
  }, e4.prototype.lengthOf = function(e5) {
    return this.offsets[e5 + 1] - this.offsets[e5];
  }, e4.prototype.encode = function(e5, t) {
    for (var n2 = new Uint32Array(this.offsets.length), r2 = 0, i2 = 0, a2 = 0; a2 < n2.length; ++a2) if (n2[a2] = r2, i2 < t.length && t[i2] == a2) {
      ++i2, n2[a2] = r2;
      var o2 = this.offsets[a2], s2 = this.offsets[a2 + 1] - o2;
      s2 > 0 && (r2 += s2);
    }
    for (var c3 = Array(4 * n2.length), l2 = 0; l2 < n2.length; ++l2) c3[4 * l2 + 3] = 255 & n2[l2], c3[4 * l2 + 2] = (65280 & n2[l2]) >> 8, c3[4 * l2 + 1] = (16711680 & n2[l2]) >> 16, c3[4 * l2] = (4278190080 & n2[l2]) >> 24;
    return c3;
  }, e4;
}();
var gc = function() {
  function e4(e5) {
    this.font = e5, this.subset = {}, this.unicodes = {}, this.next = 33;
  }
  return e4.prototype.generateCmap = function() {
    var e5, t, n2, r2, i2;
    for (t in r2 = this.font.cmap.tables[0].codeMap, e5 = {}, i2 = this.subset) n2 = i2[t], e5[t] = r2[n2];
    return e5;
  }, e4.prototype.glyphsFor = function(e5) {
    var t, n2, r2, i2, a2, o2, s2;
    for (r2 = {}, a2 = 0, o2 = e5.length; a2 < o2; a2++) r2[i2 = e5[a2]] = this.font.glyf.glyphFor(i2);
    for (i2 in t = [], r2) (n2 = r2[i2]) != null && n2.compound && t.push.apply(t, n2.glyphIDs);
    if (t.length > 0) for (i2 in s2 = this.glyphsFor(t)) n2 = s2[i2], r2[i2] = n2;
    return r2;
  }, e4.prototype.encode = function(e5, t) {
    var n2, r2, i2, a2, o2, s2, c3, l2, u2, d2, f2, p, m, h, g;
    for (r2 in n2 = rc.encode(this.generateCmap(), "unicode"), a2 = this.glyphsFor(e5), f2 = { 0: 0 }, g = n2.charMap) f2[(s2 = g[r2]).old] = s2.new;
    for (p in d2 = n2.maxGlyphID, a2) p in f2 || (f2[p] = d2++);
    return l2 = function(e6) {
      var t2, n3;
      for (t2 in n3 = {}, e6) n3[e6[t2]] = t2;
      return n3;
    }(f2), u2 = Object.keys(l2).sort(function(e6, t2) {
      return e6 - t2;
    }), m = function() {
      var e6, t2, n3;
      for (n3 = [], e6 = 0, t2 = u2.length; e6 < t2; e6++) o2 = u2[e6], n3.push(l2[o2]);
      return n3;
    }(), i2 = this.font.glyf.encode(a2, m, f2), c3 = this.font.loca.encode(i2.offsets, m), h = {
      cmap: this.font.cmap.raw(),
      glyf: i2.table,
      loca: c3,
      hmtx: this.font.hmtx.raw(),
      hhea: this.font.hhea.raw(),
      maxp: this.font.maxp.raw(),
      post: this.font.post.raw(),
      name: this.font.name.raw(),
      head: this.font.head.encode(t)
    }, this.font.os2.exists && (h["OS/2"] = this.font.os2.raw()), this.font.directory.encode(h);
  }, e4;
}();
Z.API.PDFObject = function() {
  var e4;
  function t() {
  }
  return e4 = function(e5, t2) {
    return (Array(t2 + 1).join("0") + e5).slice(-t2);
  }, t.convert = function(n2) {
    var r2, i2, a2, o2;
    if (Array.isArray(n2)) return "[" + function() {
      var e5, i3, a3;
      for (a3 = [], e5 = 0, i3 = n2.length; e5 < i3; e5++) r2 = n2[e5], a3.push(t.convert(r2));
      return a3;
    }().join(" ") + "]";
    if (typeof n2 == "string") return "/" + n2;
    if (n2 == null ? void 0 : n2.isString) return "(" + n2 + ")";
    if (n2 instanceof Date) return "(D:" + e4(n2.getUTCFullYear(), 4) + e4(n2.getUTCMonth(), 2) + e4(n2.getUTCDate(), 2) + e4(n2.getUTCHours(), 2) + e4(n2.getUTCMinutes(), 2) + e4(n2.getUTCSeconds(), 2) + "Z)";
    if ({}.toString.call(n2) === "[object Object]") {
      for (i2 in a2 = ["<<"], n2) o2 = n2[i2], a2.push("/" + i2 + " " + t.convert(o2));
      return a2.push(">>"), a2.join("\n");
    }
    return "" + n2;
  }, t;
}();
export {
  Z as default,
  Z as jsPDF
};
//# sourceMappingURL=jspdf.es.min-ByaXFVjc-ZY63TG6S.js.map
