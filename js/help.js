/*
 * Input help: the (i) buttons beside each calculator input, the popup they
 * open, the sketch toolkit used to draw the small "where does this come from"
 * diagrams, and the renderer for the Input Guide page (guide.html).
 *
 * Definitions live in help/defs-*.js. Each file calls
 *   IDMHelp.define(key, { ... })      one entry per input concept
 *   IDMHelp.pages(path, { id: key })  which concept each input id on a page uses
 *
 * Definition fields (all text is HTML):
 *   title     Input name as shown in the popup and guide
 *   group     Guide heading the entry is listed under (see GROUPS)
 *   what      What to enter (1-3 sentences; shown in the popup)
 *   where     Where the value comes from / how to measure it (guide; popup if short)
 *   sketch    function (S) { return S.svg(...) } -- optional; omit for inputs
 *             with nothing physical to draw (e.g. route system)
 *   caption   One line under the sketch
 *   cite      IDM section / figure / equation that defines or uses the input
 *   typical   Typical values or IDM defaults
 *   mistakes  Array of common mistakes
 *   notIDM    true when the input is not defined by the IDM (e.g. Green Book)
 * A page map value can be "key" or ["key", "page-specific note"].
 */
(function () {
  "use strict";

  var H = { defs: {}, map: {}, order: [] };

  H.GROUPS = [
    ["general", "Speed, traffic and project"],
    ["sight", "Sight distance"],
    ["horizontal", "Horizontal alignment and superelevation"],
    ["vertical", "Vertical alignment"],
    ["xsec", "Cross section"],
    ["widening", "Curve widening"],
    ["intersection", "Intersections and turn lanes"],
    ["roadside", "Roadside safety"]
  ];

  H.define = function (key, def) {
    if (!H.defs[key]) H.order.push(key);
    def.key = key;
    H.defs[key] = def;
  };
  H.pages = function (path, m) {
    H.map[path] = H.map[path] || {};
    Object.keys(m).forEach(function (id) { H.map[path][id] = m[id]; });
  };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function f1(n) { return Math.round(n * 10) / 10; }

  // ------------------------------------------------------------ sketch toolkit
  // String-based SVG so the same sketch renders in the popup and the guide.
  // Coordinates are in a 320 x 150 box unless S.svg is given another size.
  // Classes: pave, pave2 (shoulder), grass, earth, edge, lane (dashed),
  // cl (yellow centerline), thin, ink, hl (highlight = what you enter),
  // hlf (highlight fill), dimc (dimension colour), muted, sight, obj.
  var S = {};
  S.svg = function (body, w, h, label) {
    w = w || 320; h = h || 150;
    return '<svg class="sk" viewBox="0 0 ' + w + " " + h + '" role="img"' + (label ? ' aria-label="' + esc(label) + '"' : ' aria-hidden="true"') + ">" + body + "</svg>";
  };
  S.ln = function (x1, y1, x2, y2, cls, extra) {
    return '<line x1="' + f1(x1) + '" y1="' + f1(y1) + '" x2="' + f1(x2) + '" y2="' + f1(y2) + '" class="' + (cls || "ink") + '"' + (extra || "") + "/>";
  };
  S.rect = function (x, y, w, h, cls, rx) {
    return '<rect x="' + f1(x) + '" y="' + f1(y) + '" width="' + f1(w) + '" height="' + f1(h) + '" class="' + (cls || "pave") + '"' + (rx ? ' rx="' + rx + '"' : "") + "/>";
  };
  S.poly = function (pts, cls) {
    return '<polygon points="' + pts.map(function (p) { return f1(p[0]) + "," + f1(p[1]); }).join(" ") + '" class="' + (cls || "pave") + '"/>';
  };
  S.pline = function (pts, cls) {
    return '<polyline points="' + pts.map(function (p) { return f1(p[0]) + "," + f1(p[1]); }).join(" ") + '" class="' + (cls || "ink") + '" fill="none"/>';
  };
  S.path = function (d, cls) { return '<path d="' + d + '" class="' + (cls || "ink") + '" fill="none"/>'; };
  S.circle = function (x, y, r, cls) { return '<circle cx="' + f1(x) + '" cy="' + f1(y) + '" r="' + r + '" class="' + (cls || "ink") + '"/>'; };
  // opts: anchor (start|middle|end), cls, size, rotate, bold
  S.tx = function (x, y, s, opts) {
    opts = opts || {};
    var a = ' x="' + f1(x) + '" y="' + f1(y) + '" font-size="' + (opts.size || 11) + '" text-anchor="' + (opts.anchor || "start") + '"';
    if (opts.rotate) a += ' transform="rotate(' + opts.rotate + " " + f1(x) + " " + f1(y) + ')"';
    var cls = (opts.cls || "") + (opts.bold ? " b" : "");
    return "<text" + a + (cls ? ' class="' + cls.trim() + '"' : "") + ">" + esc(s) + "</text>";
  };
  // arrowhead at (x,y) pointing in direction (dx,dy)
  S.head = function (x, y, dx, dy, cls, size) {
    var L = Math.sqrt(dx * dx + dy * dy) || 1, ux = dx / L, uy = dy / L, s = size || 6;
    var bx = x - ux * s, by = y - uy * s, px = -uy * s * 0.45, py = ux * s * 0.45;
    return S.poly([[x, y], [bx + px, by + py], [bx - px, by - py]], (cls || "dimc") + "-f");
  };
  S.arrow = function (x1, y1, x2, y2, cls) {
    cls = cls || "ink";
    return S.ln(x1, y1, x2, y2, cls) + S.head(x2, y2, x2 - x1, y2 - y1, cls);
  };
  // Dimension line with arrows at both ends and a label.
  // opts: cls ("hl" default, or "dimc"), side (+1/-1 label side), off (label offset px), ext (draw extension lines of this length, perpendicular)
  S.dim = function (x1, y1, x2, y2, label, opts) {
    opts = opts || {};
    var cls = opts.cls || "hl";
    var dx = x2 - x1, dy = y2 - y1, L = Math.sqrt(dx * dx + dy * dy) || 1;
    var nx = -dy / L, ny = dx / L, side = opts.side || -1, off = opts.off === undefined ? 5 : opts.off;
    var out = S.ln(x1, y1, x2, y2, cls + " thin") + S.head(x1, y1, -dx, -dy, cls) + S.head(x2, y2, dx, dy, cls);
    if (opts.ext) {
      out += S.ln(x1 - nx * 2 * side, y1 - ny * 2 * side, x1 - nx * opts.ext * side, y1 - ny * opts.ext * side, "thin muted") +
             S.ln(x2 - nx * 2 * side, y2 - ny * 2 * side, x2 - nx * opts.ext * side, y2 - ny * opts.ext * side, "thin muted");
    }
    if (label) {
      var mx = (x1 + x2) / 2 + nx * off * side * -1, my = (y1 + y2) / 2 + ny * off * side * -1;
      var horiz = Math.abs(dy) < Math.abs(dx);
      if (horiz) my = (y1 + y2) / 2 + (side < 0 ? -off : off + 9);
      else mx = (x1 + x2) / 2 + (side < 0 ? -off : off);
      out += S.tx(mx, horiz ? my : (y1 + y2) / 2 + 4, label, { anchor: horiz ? "middle" : (side < 0 ? "end" : "start"), cls: cls, bold: true, size: opts.size || 11 });
    }
    return out;
  };
  // Leader: small line from label to point
  S.leader = function (tx, ty, x, y, label, opts) {
    opts = opts || {};
    return S.ln(tx, ty, x, y, (opts.cls || "ink") + " thin") + S.circle(x, y, 2, (opts.cls || "ink") + "-f") +
      S.tx(tx + (opts.anchor === "end" ? -3 : 3), ty + (ty < y ? -2 : 10), label, { anchor: opts.anchor || "start", cls: opts.cls || "", size: opts.size || 10.5 });
  };
  // Small vehicle seen from above, centred at (x,y), heading +x (dir 1) or -x (dir -1), or "up"/"down"
  S.car = function (x, y, dir, cls) {
    var w = 18, h = 9;
    if (dir === "up" || dir === "down") {
      var b = S.rect(x - h / 2, y - w / 2, h, w, cls || "veh", 2);
      return b + S.rect(x - h / 2 + 1.5, y + (dir === "up" ? -w / 2 + 3 : w / 2 - 7), h - 3, 4, "glass", 1);
    }
    return S.rect(x - w / 2, y - h / 2, w, h, cls || "veh", 2) + S.rect(x + (dir === -1 ? -w / 2 + 3 : w / 2 - 7), y - h / 2 + 1.5, 4, h - 3, "glass", 1);
  };
  S.truck = function (x, y, dir, cls) {
    var w = 40, h = 10, d = dir === -1 ? -1 : 1;
    return S.rect(x - w / 2, y - h / 2, w - 9, h, cls || "veh2", 1) + S.rect(d > 0 ? x + w / 2 - 8 : x - w / 2 - 1, y - h / 2 + 0.5, 9, h - 1, cls || "veh", 2);
  };

  /*
   * Plan view of a straight road running left to right.
   * o: { x1, x2, y (top edge), lanes: [n above CL, n below CL] or number (one-way),
   *      lw (px per lane), sh (shoulder px, both sides), cl (true = yellow centerline),
   *      hlLane: index from top to fill with highlight }
   * Returns { svg, top, bottom, edges: [y of each lane line from top] }
   */
  S.planRoad = function (o) {
    var x1 = o.x1 === undefined ? 10 : o.x1, x2 = o.x2 === undefined ? 310 : o.x2, y = o.y === undefined ? 40 : o.y;
    var lw = o.lw || 22, sh = o.sh || 0;
    var up = Array.isArray(o.lanes) ? o.lanes[0] : 0, dn = Array.isArray(o.lanes) ? o.lanes[1] : (o.lanes || 2);
    var n = up + dn, out = "";
    if (o.grass !== false) out += S.rect(x1, y - sh - 14, x2 - x1, n * lw + 2 * sh + 28, "grass");
    if (sh) out += S.rect(x1, y - sh, x2 - x1, sh, "pave2") + S.rect(x1, y + n * lw, x2 - x1, sh, "pave2");
    out += S.rect(x1, y, x2 - x1, n * lw, "pave");
    if (o.hlLane !== undefined) out += S.rect(x1, y + o.hlLane * lw, x2 - x1, lw, "hlf");
    var edges = [];
    for (var i = 0; i <= n; i++) {
      var yy = y + i * lw;
      edges.push(yy);
      if (i === 0 || i === n) out += S.ln(x1, yy, x2, yy, "edge");
      else if (o.cl !== false && up > 0 && i === up) out += S.ln(x1, yy - 1.2, x2, yy - 1.2, "cl") + S.ln(x1, yy + 1.2, x2, yy + 1.2, "cl");
      else out += S.ln(x1, yy, x2, yy, "lane");
    }
    return { svg: out, top: y, bottom: y + n * lw, edges: edges, lw: lw, sh: sh };
  };

  /*
   * Cross section (looking ahead), crowned at x = cx.
   * o: { cx, y (crown elevation px), lanes: [left, right], lw (px), sh: [left, right] (px),
   *      slope (px drop per lane width, default 2), shSlope (px per shoulder), fore: [dx, dy] ground run beyond shoulders,
   *      t: pavement thickness px, cl: false for no centerline mark,
   *      hl: "lane" (with hlSide "L"/"R" or hlLane index from the left) | "lanes" | "shL" | "shR" }
   * Returns { svg, pts: { crown, eL, eR, sL, sR } } with eL/eR = edges of traveled way, sL/sR = shoulder outer points.
   */
  S.xsec = function (o) {
    var cx = o.cx || 160, y = o.y || 60, lw = o.lw || 30;
    var nl = o.lanes ? o.lanes[0] : 1, nr = o.lanes ? o.lanes[1] : 1;
    var shL = o.sh ? o.sh[0] : 20, shR = o.sh ? o.sh[1] : 20;
    var sl = o.slope === undefined ? 2 : o.slope, ss = o.shSlope === undefined ? 3 : o.shSlope;
    var eL = [cx - nl * lw, y + sl * nl], eR = [cx + nr * lw, y + sl * nr];
    var sL = [eL[0] - shL, eL[1] + ss], sR = [eR[0] + shR, eR[1] + ss];
    var fore = o.fore || [40, 26];
    var gL = [sL[0] - fore[0], sL[1] + fore[1]], gR = [sR[0] + fore[0], sR[1] + fore[1]];
    var t = o.t || 9, out = "";
    var surf = [];
    for (var i = 0; i <= nl; i++) surf.push([cx - (nl - i) * lw, y + sl * (nl - i)]);
    for (var j = 1; j <= nr; j++) surf.push([cx + j * lw, y + sl * j]);
    function slab(p, q, th, cls) { return S.poly([p, q, [q[0], q[1] + th], [p[0], p[1] + th]], cls); }
    out += S.poly([[gL[0] - 40, gL[1]], gL, sL, eL].concat(surf.slice(1, -1)).concat([eR, sR, gR, [gR[0] + 40, gR[1]], [gR[0] + 40, gR[1] + 40], [gL[0] - 40, gL[1] + 40]]), "earth");
    if (shL) out += slab(sL, eL, t - 2, o.hl === "shL" ? "hlf2" : "pave2");
    if (shR) out += slab(eR, sR, t - 2, o.hl === "shR" ? "hlf2" : "pave2");
    var hlIdx = o.hlLane !== undefined ? o.hlLane : (o.hl === "lane" ? (o.hlSide === "L" ? nl - 1 : nl) : -1);
    for (var k = 0; k < surf.length - 1; k++) out += slab(surf[k], surf[k + 1], t, k === hlIdx || o.hl === "lanes" ? "hlf2" : "pave");
    out += S.pline([gL, sL].concat(surf).concat([sR, gR]), "edge");
    for (var m = 1; m < surf.length - 1; m++) {
      var isCL = nl > 0 && nr > 0 && m === nl && o.cl !== false;
      out += S.rect(surf[m][0] - 1.5, surf[m][1] - 1.6, 3, 2.4, isCL ? "clf" : "lanef");
    }
    return { svg: out, pts: { crown: [cx, y], eL: eL, eR: eR, sL: sL, sR: sR, gL: gL, gR: gR } };
  };

  /* Profile (side view) through points [[x,y],...] with ground fill below. */
  S.profile = function (pts, cls, h) {
    var bottom = h || 150;
    return S.poly(pts.concat([[pts[pts.length - 1][0], bottom], [pts[0][0], bottom]]), "earth") + S.pline(pts, cls || "edge");
  };

  /* Clear-zone style hazard: a tree symbol at (x,y) */
  S.tree = function (x, y, r) {
    r = r || 7;
    return S.circle(x, y, r, "tree") + S.circle(x, y, 1.6, "ink-f");
  };

  H.S = S;

  // ------------------------------------------------------------ rendering
  function root() { return document.body.getAttribute("data-root") || "."; }
  H.pageKey = function () {
    var parts = location.pathname.replace(/\\/g, "/").split("/").filter(Boolean);
    return parts.slice(-2).join("/");
  };

  H.sketch = function (def) {
    if (!def || typeof def.sketch !== "function") return "";
    try { return def.sketch(S); } catch (e) { if (window.console) console.error("sketch " + def.key, e); return ""; }
  };

  function ensurePop() {
    var p = document.getElementById("info-pop");
    if (p) return p;
    p = document.createElement("div");
    p.id = "info-pop";
    p.className = "info-pop";
    p.setAttribute("role", "dialog");
    p.setAttribute("aria-modal", "false");
    p.hidden = true;
    document.body.appendChild(p);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !p.hidden) close(true); });
    document.addEventListener("mousedown", function (e) {
      if (p.hidden) return;
      if (p.contains(e.target) || (e.target.closest && e.target.closest(".info-btn"))) return;
      close(false);
    });
    window.addEventListener("resize", function () { if (!p.hidden && current) position(current); });
    return p;
  }
  var current = null;
  function close(refocus) {
    var p = document.getElementById("info-pop");
    if (!p) return;
    p.hidden = true;
    if (current) {
      current.setAttribute("aria-expanded", "false");
      if (refocus) current.focus();
    }
    current = null;
  }
  function position(btn) {
    var p = document.getElementById("info-pop");
    var r = btn.getBoundingClientRect();
    var vw = document.documentElement.clientWidth;
    if (vw < 600) { p.classList.add("sheet"); p.style.left = ""; p.style.top = ""; return; }
    p.classList.remove("sheet");
    var w = p.offsetWidth, hgt = p.offsetHeight;
    var fr = (btn.closest && btn.closest(".field") || btn).getBoundingClientRect();
    var left = Math.min(Math.max(8, fr.left + window.scrollX), window.scrollX + vw - w - 12);
    var top = r.bottom + window.scrollY + 8;
    var vh = window.innerHeight;
    if (r.bottom + hgt + 16 > vh && r.top - hgt - 8 > 0) top = r.top + window.scrollY - hgt - 8;
    p.style.left = left + "px";
    p.style.top = top + "px";
  }

  H.popupHTML = function (def, note) {
    var r = root();
    var sk = H.sketch(def);
    return '<div class="ip-head"><h3 id="ip-title">' + def.title + '</h3><button type="button" class="ip-x" aria-label="Close">&times;</button></div>' +
      '<div class="ip-body">' +
      (note ? '<div class="ip-note">' + note + "</div>" : "") +
      '<p class="ip-what">' + def.what + "</p>" +
      (sk ? '<figure class="ip-fig">' + sk + (def.caption ? "<figcaption>" + def.caption + "</figcaption>" : "") + "</figure>" : "") +
      (def.notIDM ? '<p class="ip-warn">Not defined by the IDM; see the guide entry.</p>' : "") +
      (def.cite ? '<p class="ip-cite"><b>IDM:</b> ' + def.cite + "</p>" : "") +
      '<a class="ip-more" href="' + r + "/guide.html#" + def.key + '">Typical values, common mistakes and more in the Input Guide &rarr;</a>' +
      "</div>";
  };

  function open(btn, def, note) {
    var p = ensurePop();
    if (current === btn && !p.hidden) { close(true); return; }
    if (current) current.setAttribute("aria-expanded", "false");
    current = btn;
    p.innerHTML = H.popupHTML(def, note);
    p.setAttribute("aria-labelledby", "ip-title");
    p.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    position(btn);
    p.querySelector(".ip-x").addEventListener("click", function () { close(true); });
    p.querySelector(".ip-x").focus({ preventScroll: true });
  }

  /* Add an (i) button to every mapped input on the current page. Safe to call twice. */
  H.attach = function (key) {
    key = key || H.pageKey();
    var m = H.map[key];
    if (!m) return 0;
    var n = 0;
    Array.prototype.forEach.call(document.querySelectorAll(".inputs .field"), function (f) {
      var lab = f.querySelector("label[for]");
      if (!lab || f.querySelector(".info-btn")) return;
      var v = m[lab.getAttribute("for")];
      if (!v) return;
      var dkey = Array.isArray(v) ? v[0] : v, note = Array.isArray(v) ? v[1] : "";
      var def = H.defs[dkey];
      if (!def) { if (window.console) console.warn("help: no definition " + dkey); return; }
      var wrap = document.createElement("div");
      wrap.className = "lab";
      lab.parentNode.insertBefore(wrap, lab);
      wrap.appendChild(lab);
      var b = document.createElement("button");
      b.type = "button";
      b.className = "info-btn no-print";
      b.setAttribute("aria-label", "About this input: " + lab.childNodes[0].textContent.trim());
      b.setAttribute("aria-expanded", "false");
      b.setAttribute("aria-controls", "info-pop");
      b.title = "What is this?";
      b.textContent = "i";
      b.addEventListener("click", function (e) { e.preventDefault(); open(b, def, note); });
      wrap.appendChild(b);
      n++;
    });
    return n;
  };

  // ------------------------------------------------------------ Input Guide page
  H.usedOn = function (key) {
    var secs = (window.IDMUI && IDMUI.SECTIONS) || [];
    var titles = {};
    secs.forEach(function (s) { s.pages.forEach(function (p) { titles[s.id + "/" + p[0]] = p[1]; }); });
    var out = [];
    Object.keys(H.map).forEach(function (path) {
      var ids = Object.keys(H.map[path]).filter(function (id) {
        var v = H.map[path][id]; return (Array.isArray(v) ? v[0] : v) === key;
      });
      if (ids.length) out.push({ path: path, title: titles[path] || path });
    });
    return out;
  };

  H.renderGuide = function (el) {
    var r = root();
    var byGroup = {};
    H.order.forEach(function (k) { var g = H.defs[k].group || "general"; (byGroup[g] = byGroup[g] || []).push(k); });
    var toc = '<nav class="guide-toc card" aria-label="Contents"><h2>Contents</h2>' + H.GROUPS.filter(function (g) { return byGroup[g[0]]; }).map(function (g) {
      return '<div class="toc-g"><a href="#g-' + g[0] + '"><b>' + g[1] + "</b></a><div>" + byGroup[g[0]].map(function (k) {
        return '<a href="#' + k + '">' + H.defs[k].title.replace(/<[^>]+>/g, "") + "</a>";
      }).join("") + "</div></div>";
    }).join("") + "</nav>";
    var body = H.GROUPS.filter(function (g) { return byGroup[g[0]]; }).map(function (g) {
      return '<h2 class="guide-g" id="g-' + g[0] + '">' + g[1] + "</h2>" + byGroup[g[0]].map(function (k) {
        var d = H.defs[k], sk = H.sketch(d), used = H.usedOn(k);
        return '<article class="card guide-item" id="' + k + '">' +
          '<div class="gi-text"><h3><a class="anchor" href="#' + k + '">' + d.title + "</a></h3>" +
          (d.notIDM ? '<div class="msg warn">Not defined by the IDM. ' + (typeof d.notIDM === "string" ? d.notIDM : "") + "</div>" : "") +
          "<h4>What to enter</h4><p>" + d.what + "</p>" +
          (d.where ? "<h4>Where it comes from</h4><p>" + d.where + "</p>" : "") +
          (d.typical ? "<h4>Typical values</h4><p>" + d.typical + "</p>" : "") +
          (d.mistakes && d.mistakes.length ? "<h4>Common mistakes</h4><ul>" + d.mistakes.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>" : "") +
          (d.cite ? '<p class="gi-cite"><b>IDM reference:</b> ' + d.cite + "</p>" : "") +
          (used.length ? '<p class="gi-used"><b>Used on:</b> ' + used.map(function (u) { return '<a href="' + r + "/" + u.path + '">' + esc(u.title) + "</a>"; }).join(" &middot; ") + "</p>" : "") +
          "</div>" +
          (sk ? '<figure class="gi-fig">' + sk + (d.caption ? "<figcaption>" + d.caption + "</figcaption>" : "") + "</figure>" : "") +
          "</article>";
      }).join("");
    }).join("");
    el.innerHTML = toc + body;
    if (location.hash) {
      var t = document.getElementById(location.hash.slice(1));
      if (t) { t.classList.add("target"); setTimeout(function () { t.scrollIntoView(); }, 0); }
    }
  };

  window.IDMHelp = H;
})();
