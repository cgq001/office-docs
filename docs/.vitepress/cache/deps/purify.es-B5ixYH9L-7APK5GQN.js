import "./chunk-EQCVQC35.js";

// node_modules/@ap666/office-word/dist/purify.es-B5ixYH9L.js
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
var u = v(Array.prototype.forEach);
var d = v(Array.prototype.lastIndexOf);
var ee = v(Array.prototype.pop);
var f = v(Array.prototype.push);
var te = v(Array.prototype.splice);
var p = v(String.prototype.toLowerCase);
var ne = v(String.prototype.toString);
var re = v(String.prototype.match);
var m = v(String.prototype.replace);
var ie = v(String.prototype.indexOf);
var ae = v(String.prototype.trim);
var h = v(Object.prototype.hasOwnProperty);
var g = v(RegExp.prototype.test);
var _ = oe(TypeError);
function v(e2) {
  return function(t2) {
    t2 instanceof RegExp && (t2.lastIndex = 0);
    var n2 = [...arguments].slice(1);
    return c(e2, t2, n2);
  };
}
function oe(e2) {
  return function() {
    return l(e2, [...arguments]);
  };
}
function y(e2, r2) {
  let i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : p;
  t && t(e2, null);
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
function b(e2) {
  for (let t2 = 0; t2 < e2.length; t2++) h(e2, t2) || (e2[t2] = null);
  return e2;
}
function x(t2) {
  let n2 = s(null);
  for (let [r2, i2] of e(t2)) h(t2, r2) && (Array.isArray(i2) ? n2[r2] = b(i2) : i2 && typeof i2 == "object" && i2.constructor === Object ? n2[r2] = x(i2) : n2[r2] = i2);
  return n2;
}
function S(e2, t2) {
  for (; e2 !== null; ) {
    let n3 = i(e2, t2);
    if (n3) {
      if (n3.get) return v(n3.get);
      if (typeof n3.value == "function") return v(n3.value);
    }
    e2 = r(e2);
  }
  function n2() {
    return null;
  }
  return n2;
}
var se = a("a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split("."));
var ce = a("svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split("."));
var le = a([
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
var ue = a([
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
var de = a("math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split("."));
var fe = a([
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
var pe = a(["#text"]);
var me = a("accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns.slot".split("."));
var he = a("accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split("."));
var ge = a("accent.accentunder.align.bevelled.close.columnsalign.columnlines.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lspace.lquote.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split("."));
var _e = a([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]);
var ve = o(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
var ye = o(/<%[\w\W]*|[\w\W]*%>/gm);
var be = o(/\$\{[\w\W]*/gm);
var C = o(/^data-[\-\w.\u00B7-\uFFFF]+$/);
var w = o(/^aria-[\-\w]+$/);
var xe = o(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
var Se = o(/^(?:\w+script|data):/i);
var Ce = o(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
var we = o(/^html$/i);
var Te = o(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Ee = Object.freeze({
  __proto__: null,
  ARIA_ATTR: w,
  ATTR_WHITESPACE: Ce,
  CUSTOM_ELEMENT: Te,
  DATA_ATTR: C,
  DOCTYPE_NAME: we,
  ERB_EXPR: ye,
  IS_ALLOWED_URI: xe,
  IS_SCRIPT_OR_DATA: Se,
  MUSTACHE_EXPR: ve,
  TMPLIT_EXPR: be
});
var T = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
};
var De = function() {
  return typeof window > "u" ? null : window;
};
var Oe = function(e2, t2) {
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
var ke = function() {
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
function Ae() {
  let t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : De(), n2 = (e2) => Ae(e2);
  if (n2.version = "3.3.3", n2.removed = [], !t2 || !t2.document || t2.document.nodeType !== T.document || !t2.Element) return n2.isSupported = false, n2;
  let { document: r2 } = t2, i2 = r2, o2 = i2.currentScript, { DocumentFragment: c2, HTMLTemplateElement: l2, Node: v2, Element: oe2, NodeFilter: b2, NamedNodeMap: ve2 = t2.NamedNodeMap || t2.MozNamedAttrMap, HTMLFormElement: ye2, DOMParser: be2, trustedTypes: C2 } = t2, w2 = oe2.prototype, Se2 = S(w2, "cloneNode"), Ce2 = S(w2, "remove"), Te2 = S(w2, "nextSibling"), je2 = S(w2, "childNodes"), E = S(w2, "parentNode");
  if (typeof l2 == "function") {
    let e2 = r2.createElement("template");
    e2.content && e2.content.ownerDocument && (r2 = e2.content.ownerDocument);
  }
  let D, O = "", { implementation: Me, createNodeIterator: Ne, createDocumentFragment: Pe, getElementsByTagName: Fe } = r2, { importNode: Ie } = i2, k = ke();
  n2.isSupported = typeof e == "function" && typeof E == "function" && Me && Me.createHTMLDocument !== void 0;
  let { MUSTACHE_EXPR: Le, ERB_EXPR: Re, TMPLIT_EXPR: ze, DATA_ATTR: Be, ARIA_ATTR: Ve, IS_SCRIPT_OR_DATA: He, ATTR_WHITESPACE: Ue, CUSTOM_ELEMENT: We } = Ee, { IS_ALLOWED_URI: Ge } = Ee, A = null, Ke = y({}, [
    ...se,
    ...ce,
    ...le,
    ...de,
    ...pe
  ]), j = null, qe = y({}, [
    ...me,
    ...he,
    ...ge,
    ..._e
  ]), M = Object.seal(s(null, {
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
  })), N = null, Je = null, P = Object.seal(s(null, {
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
  })), Ye = true, Xe = true, Ze = false, Qe = true, F = false, I = true, L = false, $e = false, et = false, R = false, z = false, B = false, tt = true, nt = false, rt = true, V = false, H = {}, U = null, it = y({}, [
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
  ]), at = null, ot = y({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]), st = null, ct = y({}, [
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
  ]), W = "http://www.w3.org/1998/Math/MathML", G = "http://www.w3.org/2000/svg", K = "http://www.w3.org/1999/xhtml", q = K, lt = false, ut = null, dt = y({}, [
    W,
    G,
    K
  ], ne), ft = y({}, [
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]), pt = y({}, ["annotation-xml"]), mt = y({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]), J = null, ht = ["application/xhtml+xml", "text/html"], Y = null, X = null, gt = r2.createElement("form"), _t = function(e2) {
    return e2 instanceof RegExp || e2 instanceof Function;
  }, vt = function() {
    let e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(X && X === e2)) {
      if ((!e2 || typeof e2 != "object") && (e2 = {}), e2 = x(e2), J = ht.indexOf(e2.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e2.PARSER_MEDIA_TYPE, Y = J === "application/xhtml+xml" ? ne : p, A = h(e2, "ALLOWED_TAGS") ? y({}, e2.ALLOWED_TAGS, Y) : Ke, j = h(e2, "ALLOWED_ATTR") ? y({}, e2.ALLOWED_ATTR, Y) : qe, ut = h(e2, "ALLOWED_NAMESPACES") ? y({}, e2.ALLOWED_NAMESPACES, ne) : dt, st = h(e2, "ADD_URI_SAFE_ATTR") ? y(x(ct), e2.ADD_URI_SAFE_ATTR, Y) : ct, at = h(e2, "ADD_DATA_URI_TAGS") ? y(x(ot), e2.ADD_DATA_URI_TAGS, Y) : ot, U = h(e2, "FORBID_CONTENTS") ? y({}, e2.FORBID_CONTENTS, Y) : it, N = h(e2, "FORBID_TAGS") ? y({}, e2.FORBID_TAGS, Y) : x({}), Je = h(e2, "FORBID_ATTR") ? y({}, e2.FORBID_ATTR, Y) : x({}), H = h(e2, "USE_PROFILES") ? e2.USE_PROFILES : false, Ye = e2.ALLOW_ARIA_ATTR !== false, Xe = e2.ALLOW_DATA_ATTR !== false, Ze = e2.ALLOW_UNKNOWN_PROTOCOLS || false, Qe = e2.ALLOW_SELF_CLOSE_IN_ATTR !== false, F = e2.SAFE_FOR_TEMPLATES || false, I = e2.SAFE_FOR_XML !== false, L = e2.WHOLE_DOCUMENT || false, R = e2.RETURN_DOM || false, z = e2.RETURN_DOM_FRAGMENT || false, B = e2.RETURN_TRUSTED_TYPE || false, et = e2.FORCE_BODY || false, tt = e2.SANITIZE_DOM !== false, nt = e2.SANITIZE_NAMED_PROPS || false, rt = e2.KEEP_CONTENT !== false, V = e2.IN_PLACE || false, Ge = e2.ALLOWED_URI_REGEXP || xe, q = e2.NAMESPACE || K, ft = e2.MATHML_TEXT_INTEGRATION_POINTS || ft, pt = e2.HTML_INTEGRATION_POINTS || pt, M = e2.CUSTOM_ELEMENT_HANDLING || {}, e2.CUSTOM_ELEMENT_HANDLING && _t(e2.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (M.tagNameCheck = e2.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e2.CUSTOM_ELEMENT_HANDLING && _t(e2.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (M.attributeNameCheck = e2.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e2.CUSTOM_ELEMENT_HANDLING && typeof e2.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = e2.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), F && (Xe = false), z && (R = true), H && (A = y({}, pe), j = s(null), H.html === true && (y(A, se), y(j, me)), H.svg === true && (y(A, ce), y(j, he), y(j, _e)), H.svgFilters === true && (y(A, le), y(j, he), y(j, _e)), H.mathMl === true && (y(A, de), y(j, ge), y(j, _e))), h(e2, "ADD_TAGS") || (P.tagCheck = null), h(e2, "ADD_ATTR") || (P.attributeCheck = null), e2.ADD_TAGS && (typeof e2.ADD_TAGS == "function" ? P.tagCheck = e2.ADD_TAGS : (A === Ke && (A = x(A)), y(A, e2.ADD_TAGS, Y))), e2.ADD_ATTR && (typeof e2.ADD_ATTR == "function" ? P.attributeCheck = e2.ADD_ATTR : (j === qe && (j = x(j)), y(j, e2.ADD_ATTR, Y))), e2.ADD_URI_SAFE_ATTR && y(st, e2.ADD_URI_SAFE_ATTR, Y), e2.FORBID_CONTENTS && (U === it && (U = x(U)), y(U, e2.FORBID_CONTENTS, Y)), e2.ADD_FORBID_CONTENTS && (U === it && (U = x(U)), y(U, e2.ADD_FORBID_CONTENTS, Y)), rt && (A["#text"] = true), L && y(A, [
        "html",
        "head",
        "body"
      ]), A.table && (y(A, ["tbody"]), delete N.tbody), e2.TRUSTED_TYPES_POLICY) {
        if (typeof e2.TRUSTED_TYPES_POLICY.createHTML != "function") throw _('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof e2.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw _('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        D = e2.TRUSTED_TYPES_POLICY, O = D.createHTML("");
      } else D === void 0 && (D = Oe(C2, o2)), D !== null && typeof O == "string" && (O = D.createHTML(""));
      a && a(e2), X = e2;
    }
  }, yt = y({}, [
    ...ce,
    ...le,
    ...ue
  ]), bt = y({}, [...de, ...fe]), xt = function(e2) {
    let t3 = E(e2);
    (!t3 || !t3.tagName) && (t3 = {
      namespaceURI: q,
      tagName: "template"
    });
    let n3 = p(e2.tagName), r3 = p(t3.tagName);
    return ut[e2.namespaceURI] ? e2.namespaceURI === G ? t3.namespaceURI === K ? n3 === "svg" : t3.namespaceURI === W ? n3 === "svg" && (r3 === "annotation-xml" || ft[r3]) : !!yt[n3] : e2.namespaceURI === W ? t3.namespaceURI === K ? n3 === "math" : t3.namespaceURI === G ? n3 === "math" && pt[r3] : !!bt[n3] : e2.namespaceURI === K ? t3.namespaceURI === G && !pt[r3] || t3.namespaceURI === W && !ft[r3] ? false : !bt[n3] && (mt[n3] || !yt[n3]) : !!(J === "application/xhtml+xml" && ut[e2.namespaceURI]) : false;
  }, Z = function(e2) {
    f(n2.removed, { element: e2 });
    try {
      E(e2).removeChild(e2);
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
    if (t3.removeAttribute(e2), e2 === "is") if (R || z) try {
      Z(t3);
    } catch {
    }
    else try {
      t3.setAttribute(e2, "");
    } catch {
    }
  }, St = function(e2) {
    let t3 = null, n3 = null;
    if (et) e2 = "<remove></remove>" + e2;
    else {
      let t4 = re(e2, /^[\r\n\t ]+/);
      n3 = t4 && t4[0];
    }
    J === "application/xhtml+xml" && q === K && (e2 = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e2 + "</body></html>");
    let i3 = D ? D.createHTML(e2) : e2;
    if (q === K) try {
      t3 = new be2().parseFromString(i3, J);
    } catch {
    }
    if (!t3 || !t3.documentElement) {
      t3 = Me.createDocument(q, "template", null);
      try {
        t3.documentElement.innerHTML = lt ? O : i3;
      } catch {
      }
    }
    let a2 = t3.body || t3.documentElement;
    return e2 && n3 && a2.insertBefore(r2.createTextNode(n3), a2.childNodes[0] || null), q === K ? Fe.call(t3, L ? "html" : "body")[0] : L ? t3.documentElement : a2;
  }, Ct = function(e2) {
    return Ne.call(e2.ownerDocument || e2, e2, b2.SHOW_ELEMENT | b2.SHOW_COMMENT | b2.SHOW_TEXT | b2.SHOW_PROCESSING_INSTRUCTION | b2.SHOW_CDATA_SECTION, null);
  }, wt = function(e2) {
    return e2 instanceof ye2 && (typeof e2.nodeName != "string" || typeof e2.textContent != "string" || typeof e2.removeChild != "function" || !(e2.attributes instanceof ve2) || typeof e2.removeAttribute != "function" || typeof e2.setAttribute != "function" || typeof e2.namespaceURI != "string" || typeof e2.insertBefore != "function" || typeof e2.hasChildNodes != "function");
  }, Tt = function(e2) {
    return typeof v2 == "function" && e2 instanceof v2;
  };
  function $(e2, t3, r3) {
    u(e2, (e3) => {
      e3.call(n2, t3, r3, X);
    });
  }
  let Et = function(e2) {
    let t3 = null;
    if ($(k.beforeSanitizeElements, e2, null), wt(e2)) return Z(e2), true;
    let r3 = Y(e2.nodeName);
    if ($(k.uponSanitizeElement, e2, {
      tagName: r3,
      allowedTags: A
    }), I && e2.hasChildNodes() && !Tt(e2.firstElementChild) && g(/<[/\w!]/g, e2.innerHTML) && g(/<[/\w!]/g, e2.textContent) || e2.nodeType === T.progressingInstruction || I && e2.nodeType === T.comment && g(/<[/\w]/g, e2.data)) return Z(e2), true;
    if (!(P.tagCheck instanceof Function && P.tagCheck(r3)) && (!A[r3] || N[r3])) {
      if (!N[r3] && Ot(r3) && (M.tagNameCheck instanceof RegExp && g(M.tagNameCheck, r3) || M.tagNameCheck instanceof Function && M.tagNameCheck(r3))) return false;
      if (rt && !U[r3]) {
        let t4 = E(e2) || e2.parentNode, n3 = je2(e2) || e2.childNodes;
        if (n3 && t4) {
          let r4 = n3.length;
          for (let i3 = r4 - 1; i3 >= 0; --i3) {
            let r5 = Se2(n3[i3], true);
            r5.__removalCount = (e2.__removalCount || 0) + 1, t4.insertBefore(r5, Te2(e2));
          }
        }
      }
      return Z(e2), true;
    }
    return e2 instanceof oe2 && !xt(e2) || (r3 === "noscript" || r3 === "noembed" || r3 === "noframes") && g(/<\/no(script|embed|frames)/i, e2.innerHTML) ? (Z(e2), true) : (F && e2.nodeType === T.text && (t3 = e2.textContent, u([
      Le,
      Re,
      ze
    ], (e3) => {
      t3 = m(t3, e3, " ");
    }), e2.textContent !== t3 && (f(n2.removed, { element: e2.cloneNode() }), e2.textContent = t3)), $(k.afterSanitizeElements, e2, null), false);
  }, Dt = function(e2, t3, n3) {
    if (Je[t3] || tt && (t3 === "id" || t3 === "name") && (n3 in r2 || n3 in gt)) return false;
    if (!(Xe && !Je[t3] && g(Be, t3)) && !(Ye && g(Ve, t3)) && !(P.attributeCheck instanceof Function && P.attributeCheck(t3, e2))) {
      if (!j[t3] || Je[t3]) {
        if (!(Ot(e2) && (M.tagNameCheck instanceof RegExp && g(M.tagNameCheck, e2) || M.tagNameCheck instanceof Function && M.tagNameCheck(e2)) && (M.attributeNameCheck instanceof RegExp && g(M.attributeNameCheck, t3) || M.attributeNameCheck instanceof Function && M.attributeNameCheck(t3, e2)) || t3 === "is" && M.allowCustomizedBuiltInElements && (M.tagNameCheck instanceof RegExp && g(M.tagNameCheck, n3) || M.tagNameCheck instanceof Function && M.tagNameCheck(n3)))) return false;
      } else if (!st[t3] && !g(Ge, m(n3, Ue, "")) && !((t3 === "src" || t3 === "xlink:href" || t3 === "href") && e2 !== "script" && ie(n3, "data:") === 0 && at[e2]) && !(Ze && !g(He, m(n3, Ue, ""))) && n3) return false;
    }
    return true;
  }, Ot = function(e2) {
    return e2 !== "annotation-xml" && re(e2, We);
  }, kt = function(e2) {
    $(k.beforeSanitizeAttributes, e2, null);
    let { attributes: t3 } = e2;
    if (!t3 || wt(e2)) return;
    let r3 = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: j,
      forceKeepAttr: void 0
    }, i3 = t3.length;
    for (; i3--; ) {
      let { name: a2, namespaceURI: o3, value: s2 } = t3[i3], c3 = Y(a2), l3 = s2, d2 = a2 === "value" ? l3 : ae(l3);
      if (r3.attrName = c3, r3.attrValue = d2, r3.keepAttr = true, r3.forceKeepAttr = void 0, $(k.uponSanitizeAttribute, e2, r3), d2 = r3.attrValue, nt && (c3 === "id" || c3 === "name") && (Q(a2, e2), d2 = "user-content-" + d2), I && g(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, d2)) {
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
      if (!Qe && g(/\/>/i, d2)) {
        Q(a2, e2);
        continue;
      }
      F && u([
        Le,
        Re,
        ze
      ], (e3) => {
        d2 = m(d2, e3, " ");
      });
      let f2 = Y(e2.nodeName);
      if (!Dt(f2, c3, d2)) {
        Q(a2, e2);
        continue;
      }
      if (D && typeof C2 == "object" && typeof C2.getAttributeType == "function" && !o3) switch (C2.getAttributeType(f2, c3)) {
        case "TrustedHTML":
          d2 = D.createHTML(d2);
          break;
        case "TrustedScriptURL":
          d2 = D.createScriptURL(d2);
          break;
      }
      if (d2 !== l3) try {
        o3 ? e2.setAttributeNS(o3, a2, d2) : e2.setAttribute(a2, d2), wt(e2) ? Z(e2) : ee(n2.removed);
      } catch {
        Q(a2, e2);
      }
    }
    $(k.afterSanitizeAttributes, e2, null);
  }, At = function e2(t3) {
    let n3 = null, r3 = Ct(t3);
    for ($(k.beforeSanitizeShadowDOM, t3, null); n3 = r3.nextNode(); ) $(k.uponSanitizeShadowNode, n3, null), Et(n3), kt(n3), n3.content instanceof c2 && e2(n3.content);
    $(k.afterSanitizeShadowDOM, t3, null);
  };
  return n2.sanitize = function(e2) {
    let t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r3 = null, a2 = null, o3 = null, s2 = null;
    if (lt = !e2, lt && (e2 = "<!-->"), typeof e2 != "string" && !Tt(e2)) if (typeof e2.toString == "function") {
      if (e2 = e2.toString(), typeof e2 != "string") throw _("dirty is not a string, aborting");
    } else throw _("toString is not a function");
    if (!n2.isSupported) return e2;
    if ($e || vt(t3), n2.removed = [], typeof e2 == "string" && (V = false), V) {
      if (e2.nodeName) {
        let t4 = Y(e2.nodeName);
        if (!A[t4] || N[t4]) throw _("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (e2 instanceof v2) r3 = St("<!---->"), a2 = r3.ownerDocument.importNode(e2, true), a2.nodeType === T.element && a2.nodeName === "BODY" || a2.nodeName === "HTML" ? r3 = a2 : r3.appendChild(a2);
    else {
      if (!R && !F && !L && e2.indexOf("<") === -1) return D && B ? D.createHTML(e2) : e2;
      if (r3 = St(e2), !r3) return R ? null : B ? O : "";
    }
    r3 && et && Z(r3.firstChild);
    let l3 = Ct(V ? e2 : r3);
    for (; o3 = l3.nextNode(); ) Et(o3), kt(o3), o3.content instanceof c2 && At(o3.content);
    if (V) return e2;
    if (R) {
      if (z) for (s2 = Pe.call(r3.ownerDocument); r3.firstChild; ) s2.appendChild(r3.firstChild);
      else s2 = r3;
      return (j.shadowroot || j.shadowrootmode) && (s2 = Ie.call(i2, s2, true)), s2;
    }
    let d2 = L ? r3.outerHTML : r3.innerHTML;
    return L && A["!doctype"] && r3.ownerDocument && r3.ownerDocument.doctype && r3.ownerDocument.doctype.name && g(we, r3.ownerDocument.doctype.name) && (d2 = "<!DOCTYPE " + r3.ownerDocument.doctype.name + ">\n" + d2), F && u([
      Le,
      Re,
      ze
    ], (e3) => {
      d2 = m(d2, e3, " ");
    }), D && B ? D.createHTML(d2) : d2;
  }, n2.setConfig = function() {
    vt(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}), $e = true;
  }, n2.clearConfig = function() {
    X = null, $e = false;
  }, n2.isValidAttribute = function(e2, t3, n3) {
    return X || vt({}), Dt(Y(e2), Y(t3), n3);
  }, n2.addHook = function(e2, t3) {
    typeof t3 == "function" && f(k[e2], t3);
  }, n2.removeHook = function(e2, t3) {
    if (t3 !== void 0) {
      let n3 = d(k[e2], t3);
      return n3 === -1 ? void 0 : te(k[e2], n3, 1)[0];
    }
    return ee(k[e2]);
  }, n2.removeHooks = function(e2) {
    k[e2] = [];
  }, n2.removeAllHooks = function() {
    k = ke();
  }, n2;
}
var je = Ae();
export {
  je as default
};
//# sourceMappingURL=purify.es-B5ixYH9L-7APK5GQN.js.map
