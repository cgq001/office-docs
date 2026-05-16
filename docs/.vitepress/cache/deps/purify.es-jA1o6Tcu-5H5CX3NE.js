import "./chunk-KEXKKQVW.js";

// node_modules/@norio-office/rich-text/dist/purify.es-jA1o6Tcu.js
var { entries: e, setPrototypeOf: t, isFrozen: n, getPrototypeOf: r, getOwnPropertyDescriptor: i } = Object;
var { freeze: a, seal: o, create: s } = Object;
var { apply: c, construct: l } = typeof Reflect < "u" && Reflect;
a || (a = function(e2) {
  return e2;
}), o || (o = function(e2) {
  return e2;
}), c || (c = function(e2, t2) {
  var n2 = [...arguments].slice(2);
  return e2.apply(t2, n2);
}), l || (l = function(e2) {
  return new e2(...[...arguments].slice(1));
});
var u = x(Array.prototype.forEach);
var d = x(Array.prototype.lastIndexOf);
var ee = x(Array.prototype.pop);
var f = x(Array.prototype.push);
var te = x(Array.prototype.splice);
var p = Array.isArray;
var m = x(String.prototype.toLowerCase);
var ne = x(String.prototype.toString);
var re = x(String.prototype.match);
var h = x(String.prototype.replace);
var ie = x(String.prototype.indexOf);
var ae = x(String.prototype.trim);
var oe = x(Number.prototype.toString);
var se = x(Boolean.prototype.toString);
var g = typeof BigInt > "u" ? null : x(BigInt.prototype.toString);
var ce = typeof Symbol > "u" ? null : x(Symbol.prototype.toString);
var _ = x(Object.prototype.hasOwnProperty);
var v = x(Object.prototype.toString);
var y = x(RegExp.prototype.test);
var b = S(TypeError);
function x(e2) {
  return function(t2) {
    t2 instanceof RegExp && (t2.lastIndex = 0);
    var n2 = [...arguments].slice(1);
    return c(e2, t2, n2);
  };
}
function S(e2) {
  return function() {
    return l(e2, [...arguments]);
  };
}
function C(e2, r2) {
  let i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : m;
  if (t && t(e2, null), !p(r2)) return e2;
  let a2 = r2.length;
  for (; a2--; ) {
    let t2 = r2[a2];
    if (typeof t2 == "string") {
      let e3 = i2(t2);
      e3 !== t2 && (n(r2) || (r2[a2] = e3), t2 = e3);
    }
    e2[t2] = true;
  }
  return e2;
}
function w(e2) {
  for (let t2 = 0; t2 < e2.length; t2++) _(e2, t2) || (e2[t2] = null);
  return e2;
}
function T(t2) {
  let n2 = s(null);
  for (let [r2, i2] of e(t2)) _(t2, r2) && (p(i2) ? n2[r2] = w(i2) : i2 && typeof i2 == "object" && i2.constructor === Object ? n2[r2] = T(i2) : n2[r2] = i2);
  return n2;
}
function le(e2) {
  switch (typeof e2) {
    case "string":
      return e2;
    case "number":
      return oe(e2);
    case "boolean":
      return se(e2);
    case "bigint":
      return g ? g(e2) : "0";
    case "symbol":
      return ce ? ce(e2) : "Symbol()";
    case "undefined":
      return v(e2);
    case "function":
    case "object": {
      if (e2 === null) return v(e2);
      let t2 = e2, n2 = E(t2, "toString");
      if (typeof n2 == "function") {
        let e3 = n2(t2);
        return typeof e3 == "string" ? e3 : v(e3);
      }
      return v(e2);
    }
    default:
      return v(e2);
  }
}
function E(e2, t2) {
  for (; e2 !== null; ) {
    let n3 = i(e2, t2);
    if (n3) {
      if (n3.get) return x(n3.get);
      if (typeof n3.value == "function") return x(n3.value);
    }
    e2 = r(e2);
  }
  function n2() {
    return null;
  }
  return n2;
}
function ue(e2) {
  try {
    return y(e2, ""), true;
  } catch {
    return false;
  }
}
var de = a("a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split("."));
var fe = a("svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split("."));
var pe = a([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
]);
var me = a([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
]);
var he = a("math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split("."));
var ge = a([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
]);
var _e = a(["#text"]);
var ve = a("accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns".split("."));
var ye = a("accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split("."));
var be = a("accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split("."));
var xe = a([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]);
var Se = o(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
var Ce = o(/<%[\w\W]*|[\w\W]*%>/gm);
var we = o(/\$\{[\w\W]*/gm);
var Te = o(/^data-[\-\w.\u00B7-\uFFFF]+$/);
var D = o(/^aria-[\-\w]+$/);
var Ee = o(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
var O = o(/^(?:\w+script|data):/i);
var k = o(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
var De = o(/^html$/i);
var A = o(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Oe = Object.freeze({
  __proto__: null,
  ARIA_ATTR: D,
  ATTR_WHITESPACE: k,
  CUSTOM_ELEMENT: A,
  DATA_ATTR: Te,
  DOCTYPE_NAME: De,
  ERB_EXPR: Ce,
  IS_ALLOWED_URI: Ee,
  IS_SCRIPT_OR_DATA: O,
  MUSTACHE_EXPR: Se,
  TMPLIT_EXPR: we
});
var j = {
  element: 1,
  text: 3,
  progressingInstruction: 7,
  comment: 8,
  document: 9
};
var ke = function() {
  return typeof window > "u" ? null : window;
};
var Ae = function(e2, t2) {
  if (typeof e2 != "object" || typeof e2.createPolicy != "function") return null;
  let n2 = null, r2 = "data-tt-policy-suffix";
  t2 && t2.hasAttribute(r2) && (n2 = t2.getAttribute(r2));
  let i2 = "dompurify" + (n2 ? "#" + n2 : "");
  try {
    return e2.createPolicy(i2, {
      createHTML(e3) {
        return e3;
      },
      createScriptURL(e3) {
        return e3;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i2 + " could not be created."), null;
  }
};
var je = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function Me() {
  let t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ke(), n2 = (e2) => Me(e2);
  if (n2.version = "3.4.2", n2.removed = [], !t2 || !t2.document || t2.document.nodeType !== j.document || !t2.Element) return n2.isSupported = false, n2;
  let { document: r2 } = t2, i2 = r2, o2 = i2.currentScript, { DocumentFragment: c2, HTMLTemplateElement: l2, Node: oe2, Element: se2, NodeFilter: g2, NamedNodeMap: ce2 = t2.NamedNodeMap || t2.MozNamedAttrMap, HTMLFormElement: v2, DOMParser: x2, trustedTypes: S2 } = t2, w2 = se2.prototype, Se2 = E(w2, "cloneNode"), Ce2 = E(w2, "remove"), we2 = E(w2, "nextSibling"), Te2 = E(w2, "childNodes"), D2 = E(w2, "parentNode");
  if (typeof l2 == "function") {
    let e2 = r2.createElement("template");
    e2.content && e2.content.ownerDocument && (r2 = e2.content.ownerDocument);
  }
  let O2, k2 = "", { implementation: A2, createNodeIterator: Ne2, createDocumentFragment: Pe, getElementsByTagName: Fe } = r2, { importNode: Ie } = i2, M = je();
  n2.isSupported = typeof e == "function" && typeof D2 == "function" && A2 && A2.createHTMLDocument !== void 0;
  let { MUSTACHE_EXPR: Le, ERB_EXPR: Re, TMPLIT_EXPR: N, DATA_ATTR: ze, ARIA_ATTR: Be, IS_SCRIPT_OR_DATA: Ve, ATTR_WHITESPACE: He, CUSTOM_ELEMENT: Ue } = Oe, { IS_ALLOWED_URI: We } = Oe, P = null, Ge = C({}, [
    ...de,
    ...fe,
    ...pe,
    ...he,
    ..._e
  ]), F = null, Ke = C({}, [
    ...ve,
    ...ye,
    ...be,
    ...xe
  ]), I = Object.seal(s(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  })), L = null, qe = null, R = Object.seal(s(null, {
    tagCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    }
  })), Je = true, Ye = true, Xe = false, Ze = true, z = false, B = true, V = false, Qe = false, $e = false, H = false, et = false, tt = false, nt = true, rt = false, it = "user-content-", at = true, U = false, W = {}, G = null, ot = C({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]), st = null, ct = C({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]), lt = null, ut = C({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns"
  ]), dt = "http://www.w3.org/1998/Math/MathML", ft = "http://www.w3.org/2000/svg", K = "http://www.w3.org/1999/xhtml", q = K, pt = false, mt = null, ht = C({}, [
    dt,
    ft,
    K
  ], ne), gt = C({}, [
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]), _t = C({}, ["annotation-xml"]), vt = C({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]), J = null, yt = ["application/xhtml+xml", "text/html"], Y = null, X = null, bt = r2.createElement("form"), xt = function(e2) {
    return e2 instanceof RegExp || e2 instanceof Function;
  }, St = function() {
    let e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (X && X === e2) return;
    (!e2 || typeof e2 != "object") && (e2 = {}), e2 = T(e2), J = yt.indexOf(e2.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e2.PARSER_MEDIA_TYPE, Y = J === "application/xhtml+xml" ? ne : m, P = _(e2, "ALLOWED_TAGS") && p(e2.ALLOWED_TAGS) ? C({}, e2.ALLOWED_TAGS, Y) : Ge, F = _(e2, "ALLOWED_ATTR") && p(e2.ALLOWED_ATTR) ? C({}, e2.ALLOWED_ATTR, Y) : Ke, mt = _(e2, "ALLOWED_NAMESPACES") && p(e2.ALLOWED_NAMESPACES) ? C({}, e2.ALLOWED_NAMESPACES, ne) : ht, lt = _(e2, "ADD_URI_SAFE_ATTR") && p(e2.ADD_URI_SAFE_ATTR) ? C(T(ut), e2.ADD_URI_SAFE_ATTR, Y) : ut, st = _(e2, "ADD_DATA_URI_TAGS") && p(e2.ADD_DATA_URI_TAGS) ? C(T(ct), e2.ADD_DATA_URI_TAGS, Y) : ct, G = _(e2, "FORBID_CONTENTS") && p(e2.FORBID_CONTENTS) ? C({}, e2.FORBID_CONTENTS, Y) : ot, L = _(e2, "FORBID_TAGS") && p(e2.FORBID_TAGS) ? C({}, e2.FORBID_TAGS, Y) : T({}), qe = _(e2, "FORBID_ATTR") && p(e2.FORBID_ATTR) ? C({}, e2.FORBID_ATTR, Y) : T({}), W = _(e2, "USE_PROFILES") ? e2.USE_PROFILES && typeof e2.USE_PROFILES == "object" ? T(e2.USE_PROFILES) : e2.USE_PROFILES : false, Je = e2.ALLOW_ARIA_ATTR !== false, Ye = e2.ALLOW_DATA_ATTR !== false, Xe = e2.ALLOW_UNKNOWN_PROTOCOLS || false, Ze = e2.ALLOW_SELF_CLOSE_IN_ATTR !== false, z = e2.SAFE_FOR_TEMPLATES || false, B = e2.SAFE_FOR_XML !== false, V = e2.WHOLE_DOCUMENT || false, H = e2.RETURN_DOM || false, et = e2.RETURN_DOM_FRAGMENT || false, tt = e2.RETURN_TRUSTED_TYPE || false, $e = e2.FORCE_BODY || false, nt = e2.SANITIZE_DOM !== false, rt = e2.SANITIZE_NAMED_PROPS || false, at = e2.KEEP_CONTENT !== false, U = e2.IN_PLACE || false, We = ue(e2.ALLOWED_URI_REGEXP) ? e2.ALLOWED_URI_REGEXP : Ee, q = typeof e2.NAMESPACE == "string" ? e2.NAMESPACE : K, gt = _(e2, "MATHML_TEXT_INTEGRATION_POINTS") && e2.MATHML_TEXT_INTEGRATION_POINTS && typeof e2.MATHML_TEXT_INTEGRATION_POINTS == "object" ? T(e2.MATHML_TEXT_INTEGRATION_POINTS) : C({}, [
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext"
    ]), _t = _(e2, "HTML_INTEGRATION_POINTS") && e2.HTML_INTEGRATION_POINTS && typeof e2.HTML_INTEGRATION_POINTS == "object" ? T(e2.HTML_INTEGRATION_POINTS) : C({}, ["annotation-xml"]);
    let t3 = _(e2, "CUSTOM_ELEMENT_HANDLING") && e2.CUSTOM_ELEMENT_HANDLING && typeof e2.CUSTOM_ELEMENT_HANDLING == "object" ? T(e2.CUSTOM_ELEMENT_HANDLING) : s(null);
    if (I = s(null), _(t3, "tagNameCheck") && xt(t3.tagNameCheck) && (I.tagNameCheck = t3.tagNameCheck), _(t3, "attributeNameCheck") && xt(t3.attributeNameCheck) && (I.attributeNameCheck = t3.attributeNameCheck), _(t3, "allowCustomizedBuiltInElements") && typeof t3.allowCustomizedBuiltInElements == "boolean" && (I.allowCustomizedBuiltInElements = t3.allowCustomizedBuiltInElements), z && (Ye = false), et && (H = true), W && (P = C({}, _e), F = s(null), W.html === true && (C(P, de), C(F, ve)), W.svg === true && (C(P, fe), C(F, ye), C(F, xe)), W.svgFilters === true && (C(P, pe), C(F, ye), C(F, xe)), W.mathMl === true && (C(P, he), C(F, be), C(F, xe))), R.tagCheck = null, R.attributeCheck = null, _(e2, "ADD_TAGS") && (typeof e2.ADD_TAGS == "function" ? R.tagCheck = e2.ADD_TAGS : p(e2.ADD_TAGS) && (P === Ge && (P = T(P)), C(P, e2.ADD_TAGS, Y))), _(e2, "ADD_ATTR") && (typeof e2.ADD_ATTR == "function" ? R.attributeCheck = e2.ADD_ATTR : p(e2.ADD_ATTR) && (F === Ke && (F = T(F)), C(F, e2.ADD_ATTR, Y))), _(e2, "ADD_URI_SAFE_ATTR") && p(e2.ADD_URI_SAFE_ATTR) && C(lt, e2.ADD_URI_SAFE_ATTR, Y), _(e2, "FORBID_CONTENTS") && p(e2.FORBID_CONTENTS) && (G === ot && (G = T(G)), C(G, e2.FORBID_CONTENTS, Y)), _(e2, "ADD_FORBID_CONTENTS") && p(e2.ADD_FORBID_CONTENTS) && (G === ot && (G = T(G)), C(G, e2.ADD_FORBID_CONTENTS, Y)), at && (P["#text"] = true), V && C(P, [
      "html",
      "head",
      "body"
    ]), P.table && (C(P, ["tbody"]), delete L.tbody), e2.TRUSTED_TYPES_POLICY) {
      if (typeof e2.TRUSTED_TYPES_POLICY.createHTML != "function") throw b('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof e2.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw b('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      O2 = e2.TRUSTED_TYPES_POLICY, k2 = O2.createHTML("");
    } else O2 === void 0 && (O2 = Ae(S2, o2)), O2 !== null && typeof k2 == "string" && (k2 = O2.createHTML(""));
    a && a(e2), X = e2;
  }, Ct = C({}, [
    ...fe,
    ...pe,
    ...me
  ]), wt = C({}, [...he, ...ge]), Tt = function(e2) {
    let t3 = D2(e2);
    (!t3 || !t3.tagName) && (t3 = {
      namespaceURI: q,
      tagName: "template"
    });
    let n3 = m(e2.tagName), r3 = m(t3.tagName);
    return mt[e2.namespaceURI] ? e2.namespaceURI === ft ? t3.namespaceURI === K ? n3 === "svg" : t3.namespaceURI === dt ? n3 === "svg" && (r3 === "annotation-xml" || gt[r3]) : !!Ct[n3] : e2.namespaceURI === dt ? t3.namespaceURI === K ? n3 === "math" : t3.namespaceURI === ft ? n3 === "math" && _t[r3] : !!wt[n3] : e2.namespaceURI === K ? t3.namespaceURI === ft && !_t[r3] || t3.namespaceURI === dt && !gt[r3] ? false : !wt[n3] && (vt[n3] || !Ct[n3]) : !!(J === "application/xhtml+xml" && mt[e2.namespaceURI]) : false;
  }, Z = function(e2) {
    f(n2.removed, { element: e2 });
    try {
      D2(e2).removeChild(e2);
    } catch {
      Ce2(e2);
    }
  }, Q = function(e2, t3) {
    try {
      f(n2.removed, {
        attribute: t3.getAttributeNode(e2),
        from: t3
      });
    } catch {
      f(n2.removed, {
        attribute: null,
        from: t3
      });
    }
    if (t3.removeAttribute(e2), e2 === "is") if (H || et) try {
      Z(t3);
    } catch {
    }
    else try {
      t3.setAttribute(e2, "");
    } catch {
    }
  }, Et = function(e2) {
    let t3 = null, n3 = null;
    if ($e) e2 = "<remove></remove>" + e2;
    else {
      let t4 = re(e2, /^[\r\n\t ]+/);
      n3 = t4 && t4[0];
    }
    J === "application/xhtml+xml" && q === K && (e2 = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e2 + "</body></html>");
    let i3 = O2 ? O2.createHTML(e2) : e2;
    if (q === K) try {
      t3 = new x2().parseFromString(i3, J);
    } catch {
    }
    if (!t3 || !t3.documentElement) {
      t3 = A2.createDocument(q, "template", null);
      try {
        t3.documentElement.innerHTML = pt ? k2 : i3;
      } catch {
      }
    }
    let a2 = t3.body || t3.documentElement;
    return e2 && n3 && a2.insertBefore(r2.createTextNode(n3), a2.childNodes[0] || null), q === K ? Fe.call(t3, V ? "html" : "body")[0] : V ? t3.documentElement : a2;
  }, Dt = function(e2) {
    return Ne2.call(e2.ownerDocument || e2, e2, g2.SHOW_ELEMENT | g2.SHOW_COMMENT | g2.SHOW_TEXT | g2.SHOW_PROCESSING_INSTRUCTION | g2.SHOW_CDATA_SECTION, null);
  }, Ot = function(e2) {
    return e2 instanceof v2 && (typeof e2.nodeName != "string" || typeof e2.textContent != "string" || typeof e2.removeChild != "function" || !(e2.attributes instanceof ce2) || typeof e2.removeAttribute != "function" || typeof e2.setAttribute != "function" || typeof e2.namespaceURI != "string" || typeof e2.insertBefore != "function" || typeof e2.hasChildNodes != "function");
  }, kt = function(e2) {
    return typeof oe2 == "function" && e2 instanceof oe2;
  };
  function $(e2, t3, r3) {
    u(e2, (e3) => {
      e3.call(n2, t3, r3, X);
    });
  }
  let At = function(e2) {
    let t3 = null;
    if ($(M.beforeSanitizeElements, e2, null), Ot(e2)) return Z(e2), true;
    let r3 = Y(e2.nodeName);
    if ($(M.uponSanitizeElement, e2, {
      tagName: r3,
      allowedTags: P
    }), B && e2.hasChildNodes() && !kt(e2.firstElementChild) && y(/<[/\w!]/g, e2.innerHTML) && y(/<[/\w!]/g, e2.textContent) || B && e2.namespaceURI === K && r3 === "style" && kt(e2.firstElementChild) || e2.nodeType === j.progressingInstruction || B && e2.nodeType === j.comment && y(/<[/\w]/g, e2.data)) return Z(e2), true;
    if (L[r3] || !(R.tagCheck instanceof Function && R.tagCheck(r3)) && !P[r3]) {
      if (!L[r3] && Nt(r3) && (I.tagNameCheck instanceof RegExp && y(I.tagNameCheck, r3) || I.tagNameCheck instanceof Function && I.tagNameCheck(r3))) return false;
      if (at && !G[r3]) {
        let t4 = D2(e2) || e2.parentNode, n3 = Te2(e2) || e2.childNodes;
        if (n3 && t4) {
          let r4 = n3.length;
          for (let i3 = r4 - 1; i3 >= 0; --i3) {
            let r5 = Se2(n3[i3], true);
            t4.insertBefore(r5, we2(e2));
          }
        }
      }
      return Z(e2), true;
    }
    return e2 instanceof se2 && !Tt(e2) || (r3 === "noscript" || r3 === "noembed" || r3 === "noframes") && y(/<\/no(script|embed|frames)/i, e2.innerHTML) ? (Z(e2), true) : (z && e2.nodeType === j.text && (t3 = e2.textContent, u([
      Le,
      Re,
      N
    ], (e3) => {
      t3 = h(t3, e3, " ");
    }), e2.textContent !== t3 && (f(n2.removed, { element: e2.cloneNode() }), e2.textContent = t3)), $(M.afterSanitizeElements, e2, null), false);
  }, jt = function(e2, t3, n3) {
    if (qe[t3] || nt && (t3 === "id" || t3 === "name") && (n3 in r2 || n3 in bt)) return false;
    let i3 = F[t3] || R.attributeCheck instanceof Function && R.attributeCheck(t3, e2);
    if (!(Ye && !qe[t3] && y(ze, t3)) && !(Je && y(Be, t3))) {
      if (!i3 || qe[t3]) {
        if (!(Nt(e2) && (I.tagNameCheck instanceof RegExp && y(I.tagNameCheck, e2) || I.tagNameCheck instanceof Function && I.tagNameCheck(e2)) && (I.attributeNameCheck instanceof RegExp && y(I.attributeNameCheck, t3) || I.attributeNameCheck instanceof Function && I.attributeNameCheck(t3, e2)) || t3 === "is" && I.allowCustomizedBuiltInElements && (I.tagNameCheck instanceof RegExp && y(I.tagNameCheck, n3) || I.tagNameCheck instanceof Function && I.tagNameCheck(n3)))) return false;
      } else if (!lt[t3] && !y(We, h(n3, He, "")) && !((t3 === "src" || t3 === "xlink:href" || t3 === "href") && e2 !== "script" && ie(n3, "data:") === 0 && st[e2]) && !(Xe && !y(Ve, h(n3, He, ""))) && n3) return false;
    }
    return true;
  }, Mt = C({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Nt = function(e2) {
    return !Mt[m(e2)] && y(Ue, e2);
  }, Pt = function(e2) {
    $(M.beforeSanitizeAttributes, e2, null);
    let { attributes: t3 } = e2;
    if (!t3 || Ot(e2)) return;
    let r3 = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: F,
      forceKeepAttr: void 0
    }, i3 = t3.length;
    for (; i3--; ) {
      let { name: a2, namespaceURI: o3, value: s2 } = t3[i3], c3 = Y(a2), l3 = s2, d2 = a2 === "value" ? l3 : ae(l3);
      if (r3.attrName = c3, r3.attrValue = d2, r3.keepAttr = true, r3.forceKeepAttr = void 0, $(M.uponSanitizeAttribute, e2, r3), d2 = r3.attrValue, rt && (c3 === "id" || c3 === "name") && ie(d2, it) !== 0 && (Q(a2, e2), d2 = it + d2), B && y(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, d2)) {
        Q(a2, e2);
        continue;
      }
      if (c3 === "attributename" && re(d2, "href")) {
        Q(a2, e2);
        continue;
      }
      if (r3.forceKeepAttr) continue;
      if (!r3.keepAttr) {
        Q(a2, e2);
        continue;
      }
      if (!Ze && y(/\/>/i, d2)) {
        Q(a2, e2);
        continue;
      }
      z && u([
        Le,
        Re,
        N
      ], (e3) => {
        d2 = h(d2, e3, " ");
      });
      let f2 = Y(e2.nodeName);
      if (!jt(f2, c3, d2)) {
        Q(a2, e2);
        continue;
      }
      if (O2 && typeof S2 == "object" && typeof S2.getAttributeType == "function" && !o3) switch (S2.getAttributeType(f2, c3)) {
        case "TrustedHTML":
          d2 = O2.createHTML(d2);
          break;
        case "TrustedScriptURL":
          d2 = O2.createScriptURL(d2);
          break;
      }
      if (d2 !== l3) try {
        o3 ? e2.setAttributeNS(o3, a2, d2) : e2.setAttribute(a2, d2), Ot(e2) ? Z(e2) : ee(n2.removed);
      } catch {
        Q(a2, e2);
      }
    }
    $(M.afterSanitizeAttributes, e2, null);
  }, Ft = function(e2) {
    let t3 = null, n3 = Dt(e2);
    for ($(M.beforeSanitizeShadowDOM, e2, null); t3 = n3.nextNode(); ) $(M.uponSanitizeShadowNode, t3, null), At(t3), Pt(t3), t3.content instanceof c2 && Ft(t3.content);
    $(M.afterSanitizeShadowDOM, e2, null);
  };
  return n2.sanitize = function(e2) {
    let t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r3 = null, a2 = null, o3 = null, s2 = null;
    if (pt = !e2, pt && (e2 = "<!-->"), typeof e2 != "string" && !kt(e2) && (e2 = le(e2), typeof e2 != "string")) throw b("dirty is not a string, aborting");
    if (!n2.isSupported) return e2;
    if (Qe || St(t3), n2.removed = [], typeof e2 == "string" && (U = false), U) {
      let t4 = e2.nodeName;
      if (typeof t4 == "string") {
        let e3 = Y(t4);
        if (!P[e3] || L[e3]) throw b("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (e2 instanceof oe2) r3 = Et("<!---->"), a2 = r3.ownerDocument.importNode(e2, true), a2.nodeType === j.element && a2.nodeName === "BODY" || a2.nodeName === "HTML" ? r3 = a2 : r3.appendChild(a2);
    else {
      if (!H && !z && !V && e2.indexOf("<") === -1) return O2 && tt ? O2.createHTML(e2) : e2;
      if (r3 = Et(e2), !r3) return H ? null : tt ? k2 : "";
    }
    r3 && $e && Z(r3.firstChild);
    let l3 = Dt(U ? e2 : r3);
    for (; o3 = l3.nextNode(); ) At(o3), Pt(o3), o3.content instanceof c2 && Ft(o3.content);
    if (U) return e2;
    if (H) {
      if (z) {
        r3.normalize();
        let e3 = r3.innerHTML;
        u([
          Le,
          Re,
          N
        ], (t4) => {
          e3 = h(e3, t4, " ");
        }), r3.innerHTML = e3;
      }
      if (et) for (s2 = Pe.call(r3.ownerDocument); r3.firstChild; ) s2.appendChild(r3.firstChild);
      else s2 = r3;
      return (F.shadowroot || F.shadowrootmode) && (s2 = Ie.call(i2, s2, true)), s2;
    }
    let d2 = V ? r3.outerHTML : r3.innerHTML;
    return V && P["!doctype"] && r3.ownerDocument && r3.ownerDocument.doctype && r3.ownerDocument.doctype.name && y(De, r3.ownerDocument.doctype.name) && (d2 = "<!DOCTYPE " + r3.ownerDocument.doctype.name + ">\n" + d2), z && u([
      Le,
      Re,
      N
    ], (e3) => {
      d2 = h(d2, e3, " ");
    }), O2 && tt ? O2.createHTML(d2) : d2;
  }, n2.setConfig = function() {
    St(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}), Qe = true;
  }, n2.clearConfig = function() {
    X = null, Qe = false;
  }, n2.isValidAttribute = function(e2, t3, n3) {
    return X || St({}), jt(Y(e2), Y(t3), n3);
  }, n2.addHook = function(e2, t3) {
    typeof t3 == "function" && f(M[e2], t3);
  }, n2.removeHook = function(e2, t3) {
    if (t3 !== void 0) {
      let n3 = d(M[e2], t3);
      return n3 === -1 ? void 0 : te(M[e2], n3, 1)[0];
    }
    return ee(M[e2]);
  }, n2.removeHooks = function(e2) {
    M[e2] = [];
  }, n2.removeAllHooks = function() {
    M = je();
  }, n2;
}
var Ne = Me();
export {
  Ne as default
};
//# sourceMappingURL=purify.es-jA1o6Tcu-5H5CX3NE.js.map
