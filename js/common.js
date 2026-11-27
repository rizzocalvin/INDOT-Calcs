/*
 * Shared page chrome and UI helpers. Every page sets <body data-root="..">
 * (or "." on the home page) so links work from file:// and from a web server.
 */
(function () {
  "use strict";

  var SECTIONS = [
    {
      id: "alignment", name: "Alignment", blurb: "Sight distance, horizontal curves, superelevation, horizontal sight-line offset, and vertical curves.",
      chapters: "IDM Ch. 42, 44, 305",
      pages: [
        ["sight-distance.html", "Stopping, Decision & Passing Sight Distance", "SSD by Eq. 42-1.1 and Fig. 42-1A; DSD (Fig. 42-2A); PSD (Fig. 42-3B)."],
        ["horizontal-curve.html", "Horizontal Curve: Minimum Radius & Elements", "R = V²/15(e+f), Rmin from Figs. 305-4B/C/D/E, curve length, PC/PT stations."],
        ["superelevation.html", "Superelevation Rate, Runoff & Tangent Runout", "Design e from Figs. 305-4B to 4E; Lr by Eq. 305-4.1; TR by Eq. 305-4.2."],
        ["hso.html", "Horizontal Sight-Line Offset (HSO)", "Middle ordinate by Eq. 305-5.1 for SSD/DSD around a curve."],
        ["vertical-curve.html", "Vertical Curves", "Crest and sag K (Figs. 44-3A to 3D), minimum length, PVC/PVI/PVT, high/low point."]
      ]
    },
    {
      id: "cross-section", name: "Cross Section", blurb: "Lane and shoulder widths from the 4R and 3R geometric design tables, cross slopes, curve widening, and side slopes.",
      chapters: "IDM Ch. 45, 53, 54, 55, 56, 305",
      pages: [
        ["design-criteria.html", "Lane & Shoulder Widths (4R / 3R Design Criteria)", "Figures 53-1 to 53-9 (4R), 55-3A to 55-3H (3R), 54-2A and Ch. 56 (freeway 3R, partial 3R)."],
        ["cross-slope.html", "Cross Slopes", "Travel lane, auxiliary lane, and shoulder cross slopes (45-1.01, 45-1.02, 305-4.06)."],
        ["curve-widening.html", "Curve Widening", "IDM 305-3.06 shoulder-in-lieu-of-widening rule with the Green Book 3.3.10 equations."],
        ["side-slope.html", "Side-Slope Check", "Fill, foreslope and backslope checks against Figures 45-3A to 45-3D and Section 45-3.03."]
      ]
    },
    {
      id: "intersections", name: "Intersections", blurb: "Intersection sight distance, turn-lane deceleration and storage, and taper lengths.",
      chapters: "IDM Ch. 46, 502",
      pages: [
        ["isd.html", "Intersection Sight Distance", "Stop control (left, right, crossing), yield control, left turn from the major road, no control (Section 46-10)."],
        ["turn-lane.html", "Turn-Lane Length", "Taper, deceleration (Fig. 46-4J) and storage (46-4.02(02), Figs. 46-4K, 46-4L)."],
        ["taper.html", "Taper Lengths", "Merging and lane-shift tapers (Fig. 502-2J) and added-through-lane drop tapers (Fig. 46-7A)."]
      ]
    },
    {
      id: "roadside", name: "Roadside Safety", blurb: "Clear-zone width with the horizontal-curve adjustment, guardrail length of need, and barrier flare rates.",
      chapters: "IDM Ch. 49",
      pages: [
        ["clear-zone.html", "Clear-Zone Width", "Fig. 49-2A with the Kcz curve adjustment (Fig. 49-2B), transition length, and slope averaging."],
        ["length-of-need.html", "Guardrail Length of Need", "Eqs. 49-4.1 to 49-4.4 with Fig. 49-4E runout lengths and shy-line offsets."],
        ["flare-rate.html", "Barrier Flare Rates", "Fig. 49-4F flare rates inside and outside the shy line, with flare length."]
      ]
    }
  ];

  var UI = {};
  UI.SECTIONS = SECTIONS;

  function root() { return document.body.getAttribute("data-root") || "."; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  UI.esc = esc;

  // ------------------------------------------------------------ theme
  function applyTheme(t) {
    if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
  }
  try { applyTheme(localStorage.getItem("idm-theme")); } catch (e) { /* storage unavailable */ }

  // ------------------------------------------------------------ chrome
  UI.header = function (activeSection) {
    var r = root();
    var nav = SECTIONS.map(function (s) {
      return '<a href="' + r + "/" + s.id + '/index.html"' + (s.id === activeSection ? ' class="active"' : "") + ">" + s.name + "</a>";
    }).join("");
    var h = document.createElement("header");
    h.className = "site-header";
    h.innerHTML = '<div class="wrap"><a class="brand" href="' + r + '/index.html"><span class="logo">IDM</span>' +
      '<span>INDOT IDM Roadway Calculators<small>Based on the Indiana Design Manual</small></span></a>' +
      '<nav class="nav" aria-label="Sections">' + nav + "</nav>" +
      '<button class="theme-btn" type="button" title="Toggle light/dark theme">Theme</button></div>';
    document.body.insertBefore(h, document.body.firstChild);
    h.querySelector(".theme-btn").addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      var dark = cur ? cur === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
      var next = dark ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem("idm-theme", next); } catch (e) { /* ignore */ }
    });
  };

  UI.chapterRows = function (chapters) {
    var src = (window.IDM && IDM.sources) ? IDM.sources.chapters : {};
    return chapters.map(function (c) {
      var m = src[c] || {};
      return "<tr><td><b>Ch. " + esc(c) + "</b></td><td>" + esc(m.title || "") + "</td><td>" + esc(m.latest || "") + "</td></tr>";
    }).join("");
  };

  UI.footer = function (chapters) {
    var f = document.createElement("footer");
    f.className = "site-footer";
    var rows = chapters && chapters.length ? '<table>' + UI.chapterRows(chapters) + "</table>" : "";
    f.innerHTML = '<div class="wrap"><p><b>Verify before use.</b> Results are aids to design and must be verified against the current INDOT Indiana Design Manual and engineering judgment. Values are transcribed from the IDM chapter versions listed; check for newer Design Memoranda before relying on them.</p>' +
      (rows ? "<div>IDM chapters used on this page (2013 IDM, latest revision on chapter cover):</div>" + rows : "") +
      '<p style="margin-top:10px">Not an official INDOT product.</p></div>';
    document.body.appendChild(f);
  };

  /*
   * cfg: { section, title, chapters: ["42", ...] }
   * Adds header, breadcrumb, source chips, verification banner, footer.
   */
  UI.page = function (cfg) {
    UI.header(cfg.section);
    var main = document.querySelector("main");
    var sec = SECTIONS.filter(function (s) { return s.id === cfg.section; })[0];
    if (main && sec) {
      var r = root();
      var crumbs = document.createElement("div");
      crumbs.className = "crumbs";
      crumbs.innerHTML = '<a href="' + r + '/index.html">Home</a> / <a href="' + r + "/" + sec.id + '/index.html">' + sec.name + "</a> / " + esc(cfg.title);
      main.insertBefore(crumbs, main.firstChild);
      var lede = main.querySelector(".lede");
      var chips = document.createElement("div");
      chips.className = "refs";
      var src = (window.IDM && IDM.sources) ? IDM.sources.chapters : {};
      chips.innerHTML = (cfg.chapters || []).map(function (c) {
        var m = src[c] || {};
        return '<span class="chip"><b>IDM Ch. ' + esc(c) + "</b> " + esc(m.title || "") + " &middot; " + esc(m.latest || "") + "</span>";
      }).join("") + '<span class="chip">' + esc(IDM.sources ? "Edition: 2013 IDM with revisions" : "") + "</span>";
      var after = lede || main.querySelector("h1");
      after.parentNode.insertBefore(chips, after.nextSibling);
      var v = document.createElement("div");
      v.className = "verify";
      v.innerHTML = "<b>Check results.</b> This calculator applies values transcribed from the IDM chapters cited above. Verify results against the current IDM and apply engineering judgment; it does not replace the design-exception process.";
      chips.parentNode.insertBefore(v, chips.nextSibling);
      var tb = document.createElement("div");
      tb.className = "toolbar no-print";
      tb.innerHTML = '<button class="btn" type="button" onclick="window.print()">Print / save PDF</button>' +
        '<button class="btn" type="button" id="resetBtn">Reset inputs</button>';
      v.parentNode.insertBefore(tb, v.nextSibling);
      tb.querySelector("#resetBtn").addEventListener("click", function () { location.hash = ""; location.reload(); });
      var p = document.createElement("div");
      p.className = "print-only";
      p.innerHTML = "<p>Printed " + new Date().toLocaleString() + " from " + esc(location.href.split("#")[0]) + "</p>";
      main.insertBefore(p, main.firstChild);
    }
    UI.footer(cfg.chapters);
    document.title = cfg.title + " | INDOT IDM Calculators";
  };

  UI.sectionIndex = function (id) {
    var sec = SECTIONS.filter(function (s) { return s.id === id; })[0];
    UI.header(id);
    var main = document.querySelector("main");
    var r = root();
    main.innerHTML = '<div class="crumbs"><a href="' + r + '/index.html">Home</a> / ' + sec.name + "</div>" +
      "<h1>" + sec.name + "</h1><p class=\"lede\">" + esc(sec.blurb) + "</p>" +
      '<div class="tiles">' + sec.pages.map(function (p) {
        return '<a class="tile" href="' + p[0] + '"><h2>' + esc(p[1]) + "</h2><p>" + esc(p[2]) + "</p></a>";
      }).join("") + "</div>";
    var chs = { alignment: ["42", "44", "305"], "cross-section": ["45", "53", "54", "55", "56", "305"], intersections: ["46", "502"], roadside: ["49"] }[id];
    UI.footer(chs);
    document.title = sec.name + " | INDOT IDM Calculators";
  };

  // ------------------------------------------------------------ inputs
  UI.$ = function (id) { return document.getElementById(id); };
  UI.num = function (id) {
    var el = UI.$(id);
    if (!el) return NaN;
    var v = el.value;
    if (el.tagName === "SELECT") { var n = Number(v); return isFinite(n) && v !== "" ? n : v; }
    if (String(v).trim() === "") return NaN;
    return Number(v);
  };
  UI.str = function (id) { var el = UI.$(id); return el ? el.value : ""; };
  UI.checked = function (id) { var el = UI.$(id); return !!(el && el.checked); };

  // Save inputs in the URL hash so a calculation can be bookmarked or shared
  UI.bind = function (fn) {
    var inputs = document.querySelectorAll(".inputs input, .inputs select");
    var restore = {};
    try {
      location.hash.replace(/^#/, "").split("&").forEach(function (kv) {
        if (!kv) return; var p = kv.split("="); restore[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || "");
      });
    } catch (e) { /* ignore */ }
    Array.prototype.forEach.call(inputs, function (el) {
      if (el.id && restore.hasOwnProperty(el.id)) {
        if (el.type === "checkbox") el.checked = restore[el.id] === "1"; else el.value = restore[el.id];
      }
    });
    var run = function () {
      try { fn(); } catch (err) {
        var r = UI.$("results");
        if (r) r.innerHTML = '<div class="msg fail">Calculation error: ' + esc(err.message) + "</div>";
        if (window.console) console.error(err);
      }
      var parts = [];
      Array.prototype.forEach.call(inputs, function (el) {
        if (!el.id) return;
        var v = el.type === "checkbox" ? (el.checked ? "1" : "0") : el.value;
        parts.push(encodeURIComponent(el.id) + "=" + encodeURIComponent(v));
      });
      try { history.replaceState(null, "", "#" + parts.join("&")); } catch (e) { /* file:// in some browsers */ }
    };
    Array.prototype.forEach.call(inputs, function (el) {
      el.addEventListener("input", run);
      el.addEventListener("change", run);
    });
    run();
    return run;
  };

  UI.speedOptions = function (id, speeds, def) {
    var el = UI.$(id);
    el.innerHTML = speeds.map(function (s) { return '<option value="' + s + '"' + (s === def ? " selected" : "") + ">" + s + " mph</option>"; }).join("");
  };

  // ------------------------------------------------------------ output
  UI.fmt = function (x, d) {
    if (x === null || x === undefined || (typeof x === "number" && !isFinite(x))) return "--";
    if (typeof x !== "number") return esc(x);
    d = d === undefined ? 1 : d;
    return x.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  };
  UI.msg = function (kind, html) { return '<div class="msg ' + kind + '">' + html + "</div>"; };
  UI.badge = function (ok, yes, no) { return ok ? '<span class="badge pass">' + (yes || "OK") + "</span>" : '<span class="badge fail">' + (no || "Not met") + "</span>"; };
  UI.stats = function (items) {
    return '<div class="big">' + items.map(function (it) {
      return '<div class="stat"><div class="lbl">' + it[0] + '</div><div class="val">' + it[1] + (it[2] ? " <small>" + it[2] + "</small>" : "") + "</div></div>";
    }).join("") + "</div>";
  };
  // rows: [label, value, source, cls]
  UI.kv = function (rows, head) {
    var h = head ? "<tr>" + head.map(function (c, i) { return "<th" + (i > 0 ? ' class="n"' : "") + ">" + c + "</th>"; }).join("") + "</tr>" : "";
    return '<div class="table-scroll"><table class="kv">' + h + rows.map(function (r) {
      return "<tr" + (r[3] ? ' class="' + r[3] + '"' : "") + "><td>" + r[0] + (r[2] ? '<div class="src">' + r[2] + "</div>" : "") + '</td><td class="n">' + r[1] + "</td></tr>";
    }).join("") + "</table></div>";
  };
  UI.table = function (head, rows, numericFrom) {
    numericFrom = numericFrom === undefined ? 1 : numericFrom;
    return '<div class="table-scroll"><table class="kv"><tr>' + head.map(function (c, i) { return "<th" + (i >= numericFrom ? ' class="n"' : "") + ">" + c + "</th>"; }).join("") + "</tr>" +
      rows.map(function (r) {
        var cls = r.cls ? ' class="' + r.cls + '"' : "";
        var cells = r.cells || r;
        return "<tr" + cls + ">" + cells.map(function (c, i) { return "<td" + (i >= numericFrom ? ' class="n"' : "") + ">" + c + "</td>"; }).join("") + "</tr>";
      }).join("") + "</table></div>";
  };

  // ------------------------------------------------------------ SVG helpers
  var NS = "http://www.w3.org/2000/svg";
  UI.svg = function (id, w, h) {
    var s = UI.$(id);
    while (s.firstChild) s.removeChild(s.firstChild);
    s.setAttribute("viewBox", "0 0 " + w + " " + h);
    s.setAttribute("role", "img");
    return s;
  };
  UI.el = function (parent, tag, attrs, text) {
    var e = document.createElementNS(NS, tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (text !== undefined) e.textContent = text;
    if (parent) parent.appendChild(e);
    return e;
  };
  UI.line = function (p, x1, y1, x2, y2, stroke, w, dash) {
    return UI.el(p, "line", { x1: x1, y1: y1, x2: x2, y2: y2, stroke: stroke || "var(--ink-2)", "stroke-width": w || 1.5, "stroke-dasharray": dash || "none" });
  };
  UI.text = function (p, x, y, s, opts) {
    opts = opts || {};
    var a = { x: x, y: y, "font-size": (opts.size || 12) + 1, "text-anchor": opts.anchor || "start" };
    if (opts.cls) a["class"] = opts.cls;
    if (opts.fill) a.style = "fill:" + opts.fill;
    if (opts.rotate) a.transform = "rotate(" + opts.rotate + " " + x + " " + y + ")";
    return UI.el(p, "text", a, s);
  };
  UI.path = function (p, d, stroke, w, fill, dash) {
    return UI.el(p, "path", { d: d, stroke: stroke || "var(--ink-2)", "stroke-width": w || 1.5, fill: fill || "none", "stroke-dasharray": dash || "none" });
  };
  UI.defs = function (svg) {
    var d = UI.el(svg, "defs");
    ["dim", "sight", "ink"].forEach(function (k) {
      var col = k === "dim" ? "var(--dim)" : (k === "sight" ? "var(--sight)" : "var(--ink-2)");
      var m = UI.el(d, "marker", { id: "arr-" + k, viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" });
      UI.el(m, "path", { d: "M0,0 L10,5 L0,10 z", fill: col });
    });
    return d;
  };
  // dimension line with arrows both ends and label
  UI.dim = function (p, x1, y1, x2, y2, label, opts) {
    opts = opts || {};
    var l = UI.line(p, x1, y1, x2, y2, opts.color || "var(--dim)", 1.2);
    l.setAttribute("marker-start", "url(#arr-dim)");
    l.setAttribute("marker-end", "url(#arr-dim)");
    if (label) {
      var mx = (x1 + x2) / 2 + (opts.dx || 0), my = (y1 + y2) / 2 + (opts.dy === undefined ? -5 : opts.dy);
      UI.text(p, mx, my, label, { anchor: "middle", size: opts.size || 12, fill: opts.color || "var(--dim)", rotate: opts.rotate });
    }
    return l;
  };

  window.IDMUI = UI;
})();
