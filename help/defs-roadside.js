/* Input help definitions: roadside calculators. See js/help.js. */
(function (H) {
  "use strict";

  // ---------------------------------------------------------------- helpers
  // Cross section looking ahead, roadside to the right of the edge of travel lane (ETL).
  // o: { x0 (ETL x), y0 (ETL elevation), segs: [[w px, drop px (+ down, - up), cls]], h (box height), etlLabel }
  function czSec(S, o) {
    var x0 = o.x0, y0 = o.y0, h = o.h || 150, out = "";
    var pts = [[x0, y0]], x = x0, y = y0;
    o.segs.forEach(function (s) { x += s[0]; y += s[1]; pts.push([x, y]); });
    if (x < 320) pts.push([320, y]);
    out += S.poly([[0, y0 + 7], [x0, y0 + 7]].concat(pts.slice(1)).concat([[320, h], [0, h]]), "earth");
    out += S.rect(6, y0, x0 - 6, 7, "pave");
    out += S.pline([[6, y0]].concat(pts), "edge");
    out += S.ln(x0, y0 - 6, x0, o.etlTop || 22, "ink thin muted") + S.tx(x0, (o.etlTop || 22) - 4, o.etlLabel || "ETL", { anchor: "middle", size: 10, bold: true });
    return { svg: out, pts: pts };
  }

  // Plan view in the layout of IDM Figure 49-4D: traffic right to left, roadside above the ETL.
  // Lateral scale 3.4 px/ft from the ETL at y = 126. LC 30, LH 25, L3 14, L2 8, Ls 5 ft.
  var ETL = 126;
  function yo(ft) { return ETL - ft * 3.4; }
  var LON = { hz1: 70, hz2: 104, b0: 58, f0: 134, xe: 200, xt: 222, lr: 290 };
  function runY(x) { return ETL - (LON.lr - x) / (LON.lr - LON.hz2) * (ETL - yo(25)); }
  function flareY(x) { var ye = runY(LON.xe), s = (yo(8) - ye) / (LON.xe - LON.f0); return yo(8) - (x - LON.f0) * s; }
  function lonBase(S, o) {
    o = o || {};
    var out = S.rect(0, 0, 320, ETL, "grass") + S.rect(0, ETL, 320, 44, "pave") + S.ln(0, ETL, 320, ETL, "edge") + S.ln(0, 150, 320, 150, "lane");
    out += S.car(268, 138, -1) + S.arrow(254, 138, 222, 138, "ink");
    out += S.tx(316, ETL - 4, "ETL", { anchor: "end", size: 10, bold: true });
    var yc = yo(30), czHl = o.hl === "LC";
    out += S.ln(0, yc, 320, yc, czHl ? "hl" : "ink thin muted") + S.tx(316, yc - 4, "clear-zone edge", { anchor: "end", size: 9.5, cls: czHl ? "hl" : "muted" });
    out += S.rect(LON.hz1, yo(25), LON.hz2 - LON.hz1, yo(14) - yo(25), "obj");
    if (!o.noHazLabel) out += S.tx((LON.hz1 + LON.hz2) / 2, yo(25) - 4, "hazard", { anchor: "middle", size: 9.5 });
    out += S.ln(LON.lr, ETL, LON.hz2, yo(25), "ink thin muted");
    if (o.shy) out += S.ln(LON.b0, yo(5), 320, yo(5), "dimc thin") + S.tx(316, yo(5) - 4, "shy line", { anchor: "end", size: 9.5, cls: "dimc" });
    var bcls = o.barrierCls || "barrier";
    out += S.pline([[LON.b0, yo(8)], [LON.f0, yo(8)], [LON.xt, flareY(LON.xt)]], bcls) + S.circle(LON.xt, flareY(LON.xt), 3, "ink-f");
    return out;
  }

  // Plan view of a flared barrier (Flare Rates page): ETL at y = 118, 5 px/ft.
  // Barrier offset 8 ft (start) flaring to 14 ft (end); shy line 5 ft.
  function flareBase(S, o) {
    o = o || {};
    var E = 118, y1 = E - 40, y2 = E - 70, ys = E - 25;
    var out = S.rect(0, 0, 320, E, "grass") + S.rect(0, E, 320, 32, "pave") + S.ln(0, E, 320, E, "edge");
    out += S.car(268, 134, -1) + S.arrow(254, 134, 222, 134, "ink");
    out += S.tx(316, E - 4, "ETL", { anchor: "end", size: 10, bold: true });
    out += S.ln(0, ys, 320, ys, "dimc thin") + S.tx(180, ys + 11, "shy line", { anchor: "middle", size: 9.5, cls: "dimc" });
    out += S.pline([[14, y1], [90, y1], [270, y2]], "barrier") + S.circle(270, y2, 3, "ink-f");
    if (o.dims) {
      out += S.ln(72, y1, 90, y1, "thin muted");
      out += S.dim(72, E, 72, y1, "", { cls: o.hl === "o1" ? "hl" : "dimc" }) + S.tx(66, y1 - 8, "start offset", { anchor: "end", size: 10.5, bold: true, cls: o.hl === "o1" ? "hl" : "dimc" });
      out += S.ln(273, y2, 296, y2, "thin muted");
      out += S.dim(294, E, 294, y2, "end offset", { cls: o.hl === "o2" ? "hl" : "dimc", side: -1, size: 10.5 });
    }
    return out;
  }

  // Plan view for opposing traffic on a two-lane road: CL at y = 134, 2.6 px/ft.
  function yc(ft) { return 134 - ft * 2.6; }
  function oppBase(S, hl) {
    var out = S.rect(0, 0, 320, 175, "grass");
    out += S.rect(28, yc(12), 292, 62.4, "pave") + S.ln(28, yc(12), 320, yc(12), "edge") + S.ln(28, 165.2, 320, 165.2, "edge");
    out += S.ln(28, 132.8, 320, 132.8, "cl") + S.ln(28, 135.2, 320, 135.2, "cl");
    out += S.tx(24, 138, "CL", { anchor: "end", size: 10, bold: true }) + S.tx(24, yc(12) + 4, "ETL", { anchor: "end", size: 9.5, cls: "muted" });
    out += S.car(250, 118, -1) + S.arrow(236, 118, 206, 118, "ink");
    out += S.car(56, 150, 1) + S.arrow(70, 150, 104, 150, "ink");
    var ycz = yc(36);
    out += S.ln(28, ycz, 320, ycz, hl === "LC" ? "hl" : "ink thin muted") + S.tx(32, ycz - 4, "opposing clear-zone edge", { size: 9.5, cls: hl === "LC" ? "hl" : "muted" });
    out += S.rect(200, yc(30), 40, yc(22) - yc(30), "obj") + S.tx(220, yc(30) - 4, "hazard", { anchor: "middle", size: 9.5 });
    out += S.ln(40, 134, 200, yc(30), "ink thin muted");
    out += S.pline([[262, yc(18)], [96, yc(18)]], "barrier") + S.circle(96, yc(18), 3, "ink-f");
    return out;
  }

  // ======================================================= CLEAR-ZONE PAGE

  H.define("rs-czContext", {
    title: "Facility context",
    group: "roadside",
    what: "Choose how the roadside is built. <b>Shoulders or sloping curbs</b> uses Figure 49-2A with the slope, curve and right-of-way adjustments. <b>Urban with vertical curbs</b> uses the fixed minimum of 49-2.03(03) and ignores the slope inputs.",
    where: "Use <b>vertical curbs</b> only for an urban arterial, collector or local street with vertical curbs at the edge of the travel lane or the edge of the shoulder (49-2.03(03)). All other roadways, including those with sloping curbs, use Figure 49-2A (49-2.03(01) for 40 mph or more, 49-2.03(02) for 35 mph or less).",
    sketch: function (S) {
      var out = S.rect(0, 0, 320, 150, "grass");
      // left: shoulder and slope
      out += S.poly([[4, 64], [52, 64], [84, 66], [150, 98], [150, 130], [4, 130]], "earth");
      out += S.rect(4, 57, 30, 7, "pave") + S.rect(34, 57, 18, 7, "pave2");
      out += S.pline([[4, 57], [34, 57], [52, 59], [150, 98]], "hl");
      out += S.ln(34, 52, 34, 26, "ink thin muted") + S.tx(34, 22, "ETL", { anchor: "middle", size: 10, bold: true });
      out += S.dim(34, 36, 140, 36, "Fig. 49-2A", { cls: "dimc", size: 10 });
      out += S.tx(78, 145, "Shoulders or sloping curbs", { anchor: "middle", size: 9.5 });
      // right: vertical curb
      out += S.ln(160, 10, 160, 140, "thin muted");
      out += S.poly([[168, 64], [214, 64], [214, 56], [312, 56], [312, 130], [168, 130]], "earth");
      out += S.rect(168, 57, 46, 7, "pave") + S.rect(216, 52, 70, 4, "pave2");
      out += S.pline([[168, 57], [214, 57], [214, 50], [216, 50], [216, 52], [312, 52]], "edge");
      out += S.rect(212, 48, 5, 10, "hlf2");
      out += S.ln(214, 46, 214, 26, "ink thin muted") + S.tx(214, 22, "ETL", { anchor: "middle", size: 10, bold: true });
      out += S.ln(300, 40, 300, 72, "ink") + S.tx(300, 34, "R/W", { anchor: "middle", size: 9.5 });
      out += S.dim(214, 36, 270, 36, "10 ft min.", { cls: "dimc", size: 10 });
      out += S.leader(226, 92, 216, 54, "vertical curb", { cls: "hl", size: 9.5 });
      out += S.tx(240, 145, "Urban, vertical curbs", { anchor: "middle", size: 9.5 });
      return S.svg(out, 320, 150, "Two cross sections: a shoulder with a side slope, and an urban section with a vertical curb");
    },
    caption: "Both are measured from the edge of travel lane (ETL). With vertical curbs the clear zone is 10 ft, or to the R/W line if less.",
    cite: "49-2.03(01), 49-2.03(02), 49-2.03(03), 49-2.03(04)",
    typical: "Vertical curbs: minimum 10 ft from the edge of the travel lane, or to the right-of-way line if that is less (49-2.03(03)). Keep a 1.5-ft appurtenance-free area from the face of curb, or from the edge of the travel lane where there is no curb; use 2.5 ft for a traffic-signal support (49-2.03(04)). With continuous 24-hour parking no clear zone is required beyond that 1.5 ft (49-2.03(05)).",
    mistakes: [
      "Choosing the vertical-curb option for a sloping curb or a rural road. Sloping curbs use Figure 49-2A.",
      "Treating the 10-ft value as a target on a high-speed urban road. It is a minimum.",
      "Measuring from the face of curb instead of the edge of the travel lane."
    ]
  });

  H.define("rs-czPick", {
    title: "Value from the range",
    group: "roadside",
    what: "Figure 49-2A gives each clear-zone width as a range, such as 26-32 ft. Choose which value in the range to use as the tangent clear zone, CZt.",
    where: "The IDM does not fix a point in the range. It says the values are neither absolute nor precise and call for engineering judgment, using crash data where available (49-1.01, 49-2.01). Pick the upper value where crash history or site conditions suggest more recovery area is needed.",
    sketch: function (S) {
      var out = "", x0 = 40, x1 = 280, y = 58;
      out += S.ln(20, y, 300, y, "ink thin");
      out += S.rect(x0, y - 12, x1 - x0, 24, "hlf");
      [[x0, "lower", "26"], [(x0 + x1) / 2, "midpoint", "29"], [x1, "upper", "32"]].forEach(function (t, i) {
        var hi = i === 2;
        out += S.ln(t[0], y - 18, t[0], y + 18, hi ? "hl" : "ink");
        out += S.tx(t[0], y - 24, t[1], { anchor: "middle", size: 10.5, cls: hi ? "hl" : "", bold: hi });
        out += S.tx(t[0], y + 32, t[2] + " ft", { anchor: "middle", size: 10.5, cls: hi ? "hl" : "" });
      });
      out += S.tx(160, 108, "Figure 49-2A cell: 26-32 ft", { anchor: "middle", size: 10, cls: "muted" });
      return S.svg(out, 320, 118, "A clear-zone range from 26 to 32 ft with the lower, midpoint and upper values marked");
    },
    caption: "Example: 60 mph, 1500-6000 AADT, 6:1 or flatter foreslope. The upper value is the conservative choice.",
    cite: "49-1.01, 49-2.01; Figure 49-2A",
    typical: "The IDM examples use different points: the 49-2.01 text example takes the upper value (40 ft from 32-40); Example 49-4.1 takes 46 ft from 38-46; Example 49-4.3 takes 38 ft from the same range; Example 49-2.3 takes 22 ft from 20-24.",
    mistakes: [
      "Treating the lower value as a safe minimum. The figure says the width may be increased where crash history warrants (asterisked cells).",
      "Changing the pick from one segment to the next. The clear zone should be constant along a fairly consistent roadside (49-2.02)."
    ]
  });

  H.define("rs-slopeMode", {
    title: "Slope input",
    group: "roadside",
    what: "<b>Pick slope category</b> reads Figure 49-2A for one side slope. <b>Average variable fill slopes</b> builds a weighted-average slope from the segments you enter and repeats until the clear zone and the averaged width agree (as in Example 49-2.2).",
    where: "Use averaging for a fill section with two or more slopes, all falling away from the road and all 4:1 or flatter (49-2.02(02)). Use the slope category for a single uniform slope or a cut slope.",
    sketch: function (S) {
      var b = czSec(S, { x0: 46, y0: 50, segs: [[40, 2.5], [60, 6], [100, 25]], h: 130 });
      var p = b.pts, end = p[3];
      return S.svg(b.svg +
        S.ln(p[0][0], p[0][1], end[0], end[1], "hl") +
        S.tx(150, 92, "average slope", { anchor: "middle", size: 10.5, cls: "hl", bold: true }) +
        S.tx(116, 48, "10:1", { anchor: "middle", size: 10 }) + S.tx(204, 64, "4:1", { anchor: "middle", size: 10 }) +
        S.circle(end[0], end[1], 2.5, "hl-f") + S.tx(316, end[1] - 8, "clear-zone edge", { anchor: "end", size: 9.5, cls: "muted" }), 320, 130, "Cross section with two fill slopes and their weighted average shown as one line");
    },
    caption: "Averaging replaces the fill slopes inside the clear zone with one weighted-average slope.",
    cite: "49-2.02(02), 49-2.03(01) item 2; Figures 49-2E, 49-2F; Example 49-2.2",
    mistakes: [
      "Averaging across a ditch. Slopes that change from down to up cannot be averaged; use Equations 49-2.1 to 49-2.4 (Example 49-2.3).",
      "Including a slope steeper than 4:1. It is non-recoverable and needs a clear runout area at its toe instead (49-2.03(01) item 2.c)."
    ]
  });

  H.define("rs-slopeCategory", {
    title: "Slope category (Figure 49-2A)",
    group: "roadside",
    what: "The Figure 49-2A column that matches the side slope beyond the shoulder. A <b>foreslope</b> falls away from the road (fill). A <b>backslope</b> rises away from the road (cut).",
    where: "Read the slope from the typical section or the cross sections. Foreslope columns: 6:1 or flatter, and 5:1 or 4:1. Backslope columns: 3:1, 4:1 or 5:1, and 6:1 or flatter. For a cut section with a traversable ditch, check both the foreslope and the backslope: the foreslope width controls, unless the toe of the backslope is within 10 ft of the shoulder edge, where the backslope width is used (49-2.03(01) item 4.a).",
    sketch: function (S) {
      var out = S.rect(0, 0, 320, 150, "grass");
      // left: fill
      out += S.poly([[4, 58], [46, 58], [150, 110], [150, 140], [4, 140]], "earth");
      out += S.rect(4, 51, 28, 7, "pave") + S.rect(32, 51, 14, 7, "pave2");
      out += S.pline([[4, 51], [46, 51]], "edge") + S.pline([[46, 51], [150, 103]], "hl");
      out += S.ln(32, 46, 32, 30, "ink thin muted") + S.tx(32, 26, "ETL", { anchor: "middle", size: 10, bold: true });
      out += S.tx(106, 70, "4:1", { anchor: "middle", size: 12, cls: "hl", bold: true });
      out += S.tx(78, 14, "Foreslope (fill)", { anchor: "middle", size: 10.5, bold: true });
      out += S.ln(160, 8, 160, 142, "thin muted");
      // right: cut
      out += S.poly([[168, 98], [210, 98], [236, 110], [246, 110], [312, 78], [312, 140], [168, 140]], "earth");
      out += S.rect(168, 91, 28, 7, "pave") + S.rect(196, 91, 14, 7, "pave2");
      out += S.pline([[168, 91], [210, 91], [236, 104], [246, 104]], "edge") + S.pline([[246, 104], [312, 72]], "hl");
      out += S.ln(196, 86, 196, 30, "ink thin muted") + S.tx(196, 26, "ETL", { anchor: "middle", size: 10, bold: true });
      out += S.tx(270, 74, "3:1", { anchor: "middle", size: 12, cls: "hl", bold: true });
      out += S.tx(240, 14, "Backslope (cut)", { anchor: "middle", size: 10.5, bold: true });
      return S.svg(out, 320, 150, "Cross sections of a fill foreslope and a cut backslope with their slope ratios");
    },
    caption: "Slopes are run:rise, horizontal to 1 vertical. Fill slopes fall away from the road; cut slopes rise.",
    cite: "Figure 49-2A; 49-2.01, 49-2.03(01)",
    typical: "New facilities use a 6:1 fill slope next to the roadway (49-2.03(01) item 3, Figure 49-2G). Example from 49-2.01: 60 mph, AADT 5000: 4:1 fill gives 40 ft; 4:1 cut gives 20 ft.",
    mistakes: [
      "Using the 5:1 or 4:1 foreslope column for a 3:1 fill slope. No 3:1 foreslope column exists: it is non-recoverable, fixed objects should not be present, and a recovery area is needed at the toe (Figure 49-2A note 1, 49-2.03(01) item 2.c).",
      "Choosing a backslope column for a fill section, which gives a much narrower clear zone.",
      "Entering the slope as a percentage or as rise:run. 4:1 means 4 ft horizontal per 1 ft vertical (25%)."
    ]
  });

  H.define("rs-slopeSegments", {
    title: "Fill slopes from edge of travel lane",
    group: "roadside",
    what: "List each fill slope from the edge of the travel lane outward as <b>width@run</b>: horizontal width in feet, then the run of the slope (run:1). For example <code>8@25, 10@4, 30@3</code> is an 8-ft shoulder at 4% (25:1), 10 ft of 4:1, then 30 ft of 3:1. Used only when Slope input is set to averaging.",
    where: "Take the widths and slopes from the cross section at the location. Convert percent slopes to run: run = 100 / percent (4% gives 25). Start with the shoulder, because widths are counted from the edge of the travel lane. Note that Figure 49-2E starts the adjacent-traffic average at the edge of the shoulder, and 49-2.02(02) starts it at the edge of the adjacent travel lane for opposing traffic; this page always starts at the edge of the travel lane, so the shoulder is part of the average.",
    sketch: function (S) {
      var b = czSec(S, { x0: 40, y0: 52, segs: [[40, 2.5], [50, 15], [150, 60]], etlTop: 18 });
      var p = b.pts, out = b.svg, yd = 40;
      out += S.rect(40, 52, 40, 6, "pave2");
      [[0, "8@25"], [1, "10@4"], [2, "30@3"]].forEach(function (t) {
        var a = p[t[0]], c = p[t[0] + 1];
        out += S.ln(c[0], c[1] - 4, c[0], yd - 4, "thin muted");
        out += S.dim(a[0], yd, c[0], yd, t[1], { size: 10.5 });
      });
      out += S.pline(p.slice(1, 4), "hl");
      out += S.tx(60, 74, "shoulder", { anchor: "middle", size: 9.5 });
      out += S.tx(112, 84, "4:1", { anchor: "middle", size: 10 }) + S.tx(196, 108, "3:1", { anchor: "middle", size: 10 });
      return S.svg(out, 320, 150, "Cross section from the edge of travel lane with three slope segments labelled width at run");
    },
    caption: "Each segment is horizontal width @ run. The first segment starts at the ETL.",
    cite: "49-2.02(02), 49-2.03(01) item 2; Figures 49-2E, 49-2F; Example 49-2.2",
    typical: "Shoulder at 4%: run 25. Slopes from essentially flat to 4:1 may be averaged. A slope steeper than 4:1 ends the average: if the clear zone reaches it, provide a clear runout area at its toe equal to the part of the clear zone on that slope, or 12 ft, whichever is greater (49-2.03(01) item 2.c, Figure 49-2F).",
    mistakes: [
      "Entering slope lengths instead of horizontal widths.",
      "Entering a percentage (4) where the run (25) is meant, or rise:run instead of run:rise.",
      "Leaving out the shoulder, which shifts every later slope 8 to 12 ft closer to the road."
    ]
  });

  H.define("rs-slopeCap10", {
    title: "Treat slopes flatter than 10:1 as 10:1",
    group: "roadside",
    what: "<b>Yes</b> applies the 49-2.02(02) rule: a slope flatter than or equal to 10:1 is taken as 10:1 in the average. <b>No</b> uses the actual slopes, as Example 49-2.2 does for its 4% shoulder.",
    where: "The rule is in 49-2.02(02). It makes a flat shoulder count as 10:1, so the average is steeper and the clear zone wider.",
    sketch: function (S) {
      var b = czSec(S, { x0: 44, y0: 56, segs: [[120, 5], [140, 46]] });
      var p = b.pts;
      return S.svg(b.svg +
        S.ln(p[0][0], p[0][1], p[1][0], p[0][1] + 12, "hl") +
        S.tx(100, 50, "actual 25:1", { anchor: "middle", size: 10 }) +
        S.tx(110, 84, "counted as 10:1", { anchor: "middle", size: 10.5, cls: "hl", bold: true }) +
        S.tx(236, 76, "4:1", { anchor: "middle", size: 10 }), 320, 140, "Cross section where a flat 25:1 slope is counted as 10:1 in the slope average");
    },
    caption: "A 25:1 (4%) shoulder or flat bench is counted as 10:1 when averaging. Vertical scale exaggerated.",
    cite: "49-2.02(02); Example 49-2.2, Figure 49-2E",
    typical: "Yes, which follows the 49-2.02(02) text. Choose No only to reproduce Example 49-2.2.",
    mistakes: [
      "Choosing No to get a narrower clear zone. The rule in 49-2.02(02) is Yes; Example 49-2.2 and Figure 49-2E use the 4% shoulder slope as-is."
    ]
  });

  H.define("rs-curveSide", {
    title: "Side of curve",
    group: "roadside",
    what: "Whether the roadside you are checking is on the <b>outside</b> or the <b>inside</b> of the horizontal curve. Kcz applies only to the outside (Figure 49-2B note 1).",
    where: "The outside of the curve is the side away from the center of the curve. On the outside, CZc = Kcz × CZt, with a transition L = 3.1V before the PC and beyond the PT (Figure 49-2C). The inside uses the tangent clear zone.",
    sketch: function (S) {
      var cx = 160, cy = 262, out = S.rect(0, 0, 320, 150, "grass");
      function arc(r, a1, a2) { var pts = []; for (var a = a1; a <= a2 + 0.01; a += 3) { var t = a * Math.PI / 180; pts.push([cx + r * Math.cos(t), cy + r * Math.sin(t)]); } return pts; }
      var A1 = -122, A2 = -58;
      var o1 = arc(188, A1, A2), o2 = arc(228, A1, A2), i1 = arc(164, A1, A2), i2 = arc(140, A1, A2);
      out += S.poly(o2.concat(o1.slice().reverse()), "hlf");
      out += S.poly(o1.concat(i1.slice().reverse()), "pave");
      out += S.pline(o1, "edge") + S.pline(i1, "edge") + S.pline(arc(176, A1, A2), "cl");
      out += S.pline(o2, "hl") + S.pline(i2, "dimc");
      out += S.tx(160, 24, "outside: CZc = Kcz × CZt", { anchor: "middle", size: 10.5, cls: "hl", bold: true });
      out += S.tx(160, 136, "inside: CZt", { anchor: "middle", size: 10.5 });
      return S.svg(out, 320, 150, "Plan of a curve with a wider clear zone on the outside and the tangent clear zone on the inside");
    },
    caption: "Plan view: the wider clear zone applies on the outside of the curve.",
    cite: "49-2.02(01); Figures 49-2B, 49-2C",
    typical: "The correction is required for new construction, reconstruction, and 3R or partial 4R freeway projects. Where it cannot be applied, a Level Two design exception is required (49-2.02(01)).",
    mistakes: [
      "Applying Kcz to the inside of the curve.",
      "Forgetting the 3.1V transition: the wider clear zone starts before the PC and extends beyond the PT (Figure 49-2C)."
    ]
  });

  H.define("rs-rowOffset", {
    title: "Edge of travel lane to right-of-way line (ft)",
    group: "roadside",
    what: "Optional. The horizontal distance from the edge of the travel lane to the right-of-way line on this side of the road. If the clear zone extends beyond it, the right-of-way line becomes the clear-zone limit.",
    where: "Scale it from the plans or the right-of-way plat at the location, on the side you are checking.",
    sketch: function (S) {
      var b = czSec(S, { x0: 40, y0: 60, segs: [[36, 2], [244, 60]], etlTop: 18 });
      var xr = 236, yg = 62 + (xr - 76) * 60 / 244;
      return S.svg(b.svg +
        S.ln(xr, 40, xr, yg + 6, "ink") + S.tx(xr, yg + 22, "R/W line", { anchor: "middle", size: 10 }) +
        S.dim(40, 48, xr, 48, "ETL to R/W", {}) +
        S.ln(296, 26, 296, 126, "dimc thin") + S.dim(40, 28, 296, 28, "", { cls: "dimc" }) + S.tx(300, 32, "CZ", { size: 10, cls: "dimc" }), 320, 140, "Cross section with the distance from the edge of travel lane to the right-of-way line dimensioned");
    },
    caption: "When the clear zone (blue) passes the R/W line, the R/W line is used as the clear-zone limit.",
    cite: "49-2.01 item 3; 49-2.03(01) item 2.a; 49-2.03(03)",
    typical: "With vertical curbs the clear zone is 10 ft or the distance to the R/W line, whichever is less (49-2.03(03)).",
    mistakes: [
      "Measuring from the centerline or the edge of shoulder.",
      "Entering the total right-of-way width for both sides of the road."
    ]
  });

  H.define("rs-objectOffset", {
    title: "Offset to a fixed object (ft)",
    group: "roadside",
    what: "Optional. The horizontal distance from the edge of the travel lane to the face of a fixed object (tree, pole, headwall, pier). The page reports whether it is inside the clear zone.",
    where: "Measure square to the road from the edge of the travel lane to the side of the object nearest traffic, as L3 is measured in Figure 49-4D.",
    sketch: function (S) {
      var b = czSec(S, { x0: 40, y0: 60, segs: [[36, 2], [244, 40]], etlTop: 18 });
      var xo = 176, yg = 62 + (xo - 76) * 40 / 244;
      return S.svg(b.svg +
        S.rect(xo, yg - 44, 7, 46, "obj") + S.tx(xo + 12, yg - 30, "pole", { size: 9.5 }) +
        S.ln(xo, yg - 46, xo, 44, "thin muted") +
        S.dim(40, 48, xo, 48, "offset to object", {}) +
        S.ln(260, 26, 260, 118, "dimc thin") + S.dim(40, 28, 260, 28, "", { cls: "dimc" }) + S.tx(264, 32, "CZ", { size: 10, cls: "dimc" }), 320, 140, "Cross section with the offset from the edge of travel lane to a tree dimensioned");
    },
    caption: "Measured from the ETL to the near face of the object, then compared with the clear zone (blue).",
    cite: "49-2.01 items 1 and 5; 49-3.01(01); Example 49-2.3",
    typical: "An object inside the clear zone should be, in order of preference: removed or redesigned, relocated, made breakaway, shielded, or delineated (49-3.01(01)).",
    mistakes: [
      "Measuring to the center of the object instead of its face.",
      "Treating the clear-zone edge as a line just beyond which new hazards may be placed. Place them as far from the road as practical (49-2.01 item 5)."
    ]
  });

  // ======================================================= BARRIER TYPE (both pages)

  H.define("rs-barrierType", {
    title: "Barrier type",
    group: "roadside",
    what: "<b>Guardrail</b> is a semi-rigid W-beam or thrie-beam rail on posts. <b>Concrete barrier</b> is rigid. The type sets the maximum flare rate outside the shy line (Figure 49-4F).",
    where: "Take it from the proposed design. Inside the shy line all barriers use the same rate; outside it concrete barrier may flare more sharply than guardrail. Guardrail deflects on impact (Figure 49-4A); concrete barrier does not (49-4.01(03)).",
    sketch: function (S) {
      var out = S.rect(0, 0, 320, 140, "grass") + S.poly([[0, 104], [320, 104], [320, 140], [0, 140]], "earth") + S.ln(0, 104, 320, 104, "edge");
      // guardrail: post and blockout and rail, side view section
      out += S.rect(60, 54, 8, 60, "obj") + S.rect(68, 60, 8, 14, "obj") + S.rect(76, 54, 5, 26, "hlf2");
      out += S.tx(70, 24, "Guardrail", { anchor: "middle", size: 11, bold: true }) + S.tx(70, 38, "semi-rigid, deflects", { anchor: "middle", size: 9.5, cls: "muted" });
      out += S.rect(84, 104, 70, 6, "pave") + S.tx(118, 124, "road", { anchor: "middle", size: 9.5 });
      out += S.ln(160, 10, 160, 130, "thin muted");
      // concrete barrier safety shape
      out += S.poly([[226, 104], [226, 54], [238, 54], [244, 92], [254, 98], [254, 104]], "hlf2");
      out += S.tx(240, 24, "Concrete barrier", { anchor: "middle", size: 11, bold: true }) + S.tx(240, 38, "rigid, no deflection", { anchor: "middle", size: 9.5, cls: "muted" });
      out += S.rect(256, 104, 60, 6, "pave") + S.tx(286, 124, "road", { anchor: "middle", size: 9.5 });
      return S.svg(out, 320, 140, "Sections of a guardrail on a post and a concrete barrier");
    },
    caption: "Sections with the road to the right. Guardrail deflects on impact; concrete barrier does not.",
    cite: "Figures 49-4A, 49-4F; 49-4.01(03), 49-5.0",
    typical: "Outside the shy line, Figure 49-4F allows 8:1 (30 mph) to 20:1 (65 mph) for concrete barrier and 7:1 to 15:1 for guardrail. Inside the shy line it is 13:1 to 30:1 for all barriers. Guardrail dynamic deflections in Figure 49-4A range from 2.50 ft to 4.30 ft for current post spacings (7.55 ft for the nonstandard type B at 12'-6\" spacing).",
    mistakes: [
      "Using the concrete-barrier rate for guardrail. Guardrail needs a flatter flare outside the shy line.",
      "Placing guardrail closer to a hazard than its dynamic deflection (Figure 49-4A). Reduce the post spacing or move the barrier or hazard (49-4.01(03))."
    ]
  });

  // ======================================================= FLARE RATE PAGE

  H.define("rs-flareStartOffset", {
    title: "Offset at start of flare (ft)",
    group: "roadside",
    what: "The lateral offset from the edge of the travel lane to the face of the barrier where the flare begins: the near (downstream) end, where the barrier stops running parallel to the road.",
    where: "Usually the parallel-run offset L2 of the barrier at the hazard. The page splits the lateral change into the part inside the shy line and the part outside it and applies the Figure 49-4F rate to each.",
    sketch: function (S) {
      return S.svg(flareBase(S, { dims: true, hl: "o1" }), 320, 150, "Plan of a flared barrier with the start offset from the edge of travel lane dimensioned");
    },
    caption: "Plan view, traffic right to left; lateral scale exaggerated. Offsets are measured from the ETL.",
    cite: "Figure 49-4F; 49-4.01(01), 49-4.02(01)",
    typical: "Place the barrier beyond the shy-line offset Ls where practical (49-4.01(01)); Ls is 4.0 ft at 30 mph to 9.0 ft at 70 mph (Figure 49-4E).",
    mistakes: [
      "Measuring from the edge of shoulder or the centerline instead of the edge of the travel lane.",
      "Measuring to the back of the post rather than the face of the rail."
    ]
  });

  H.define("rs-flareEndOffset", {
    title: "Offset at end of flare (ft)",
    group: "roadside",
    what: "The lateral offset from the edge of the travel lane to the face of the barrier at the far (upstream) end of the flare, usually where the end terminal begins.",
    where: "Set it from the site: for example the offset needed to bury the end in the backslope, or the offset where the runout path crosses the barrier.",
    sketch: function (S) {
      return S.svg(flareBase(S, { dims: true, hl: "o2" }), 320, 150, "Plan of a flared barrier with the end offset from the edge of travel lane dimensioned");
    },
    caption: "Plan view, traffic right to left; lateral scale exaggerated. Offsets are measured from the ETL.",
    cite: "Figure 49-4F; 49-4.02(01)",
    typical: "A flared installation is appropriate mainly where the end is buried in the backslope; otherwise the barrier should be parallel to the road (49-4.02(01)).",
    mistakes: [
      "Entering the lateral change (end minus start) instead of the offset from the ETL.",
      "Measuring from the edge of shoulder or the centerline."
    ]
  });

  H.define("rs-flareLength", {
    title: "Proposed flare length (ft)",
    group: "roadside",
    what: "Optional. The length of the flared section measured along the road, between the start and end offsets. The page checks that it is no shorter than the minimum length the Figure 49-4F rates allow.",
    where: "Scale it along the edge of the travel lane on the layout. The average rate of the proposal is this length divided by the lateral change.",
    sketch: function (S) {
      var out = flareBase(S, {});
      out += S.ln(90, 72, 90, 18, "thin muted") + S.ln(270, 42, 270, 18, "thin muted");
      out += S.dim(90, 22, 270, 22, "flare length", {});
      out += S.tx(186, 76, "a:1", { anchor: "middle", size: 10.5 });
      return S.svg(out, 320, 150, "Plan of a flared barrier with the flare length along the road dimensioned");
    },
    caption: "Measured parallel to the road, not along the skewed barrier. Lateral scale exaggerated.",
    cite: "Figure 49-4F",
    mistakes: [
      "Entering the total barrier length, including the parallel run.",
      "Entering the flare rate a instead of a length."
    ]
  });

  // ======================================================= LENGTH-OF-NEED PAGE

  H.define("rs-roadwayType", {
    title: "Roadway",
    group: "roadside",
    what: "<b>Two-way, undivided</b>: the page also computes the length LOPP needed for opposing traffic (49-4.02(02)). <b>Divided / one-way</b>: no opposing traffic passes the barrier; the trailing end is set graphically by Figure 49-4J and is not computed.",
    where: "Use two-way for any road where traffic in the other direction travels next to the barrier side without a median between. On a divided highway, each directional roadway is one-way.",
    sketch: function (S) {
      var out = S.rect(0, 0, 320, 150, "grass");
      // left: two-way
      var a = S.planRoad({ x1: 6, x2: 152, y: 70, lanes: [1, 1], lw: 18, grass: false });
      out += a.svg + S.rect(56, 28, 36, 14, "obj") + S.pline([[20, 56], [140, 56]], "hl") + S.circle(20, 56, 3, "hl-f") + S.circle(140, 56, 3, "hl-f");
      out += S.arrow(120, 79, 90, 79, "ink") + S.arrow(40, 97, 70, 97, "ink");
      out += S.tx(79, 134, "Two-way: LADV + LOPP", { anchor: "middle", size: 9.5 });
      out += S.ln(160, 8, 160, 140, "thin muted");
      // right: divided
      var b = S.planRoad({ x1: 168, x2: 314, y: 62, lanes: 2, lw: 12, grass: false });
      var c = S.planRoad({ x1: 168, x2: 314, y: 94, lanes: 2, lw: 12, grass: false });
      out += b.svg + c.svg + S.rect(218, 28, 36, 14, "obj") + S.pline([[200, 52], [300, 52]], "hl") + S.circle(300, 52, 3, "hl-f");
      out += S.arrow(290, 80, 260, 80, "ink") + S.arrow(200, 112, 230, 112, "ink");
      out += S.tx(241, 134, "Divided: trailing end", { anchor: "middle", size: 9.5 }) + S.tx(241, 146, "per Figure 49-4J", { anchor: "middle", size: 9.5 });
      return S.svg(out, 320, 150, "Plan of a two-way road where the barrier serves both directions, and a divided road where it serves one");
    },
    caption: "On a two-way road the barrier also shields the hazard from opposing traffic.",
    cite: "Eq. 49-4.1; 49-4.02(02), 49-4.02(03); Figures 49-4C, 49-4I, 49-4J",
    typical: "Avoid gaps of less than about 200 ft between barrier runs (49-4.02(03)).",
    mistakes: [
      "Choosing divided for a two-lane, two-way road, which leaves out the opposing-traffic length."
    ]
  });

  H.define("rs-lonLC", {
    title: "Clear-zone width, LC (ft)",
    group: "roadside",
    what: "The clear-zone width for adjacent traffic, measured from the edge of the travel lane. The page uses the lesser of LC and LH as the lateral extent to shield.",
    where: "Get it from the Clear-Zone Width page (Figure 49-2A with the slope, curve and right-of-way adjustments). If the clear zone extends beyond the right of way, the right-of-way line is the limit (49-2.01 item 3, Example 49-4.1).",
    sketch: function (S) {
      var out = lonBase(S, { hl: "LC" });
      out += S.dim(30, ETL, 30, yo(30), "LC", { side: -1 });
      return S.svg(out, 320, 170, "Plan of the length-of-need layout with the clear-zone width LC from the edge of travel lane dimensioned");
    },
    caption: "Plan view in the layout of Figure 49-4D: traffic right to left, offsets measured from the ETL.",
    cite: "49-4.02(01) item 1; Figures 49-2A, 49-4D",
    typical: "Where guardrail is required, the clear-zone width is used to find the length of need (49-2.01 item 4).",
    mistakes: [
      "Using the tangent clear zone on the outside of a curve. The calculation applies to tangent sections only; use the graphical method of Figure 49-4H on the outside of a curve (49-4.02(01) item 2).",
      "Measuring from the edge of shoulder instead of the edge of the travel lane."
    ]
  });

  H.define("rs-lonLH", {
    title: "ETL to back of hazard, LH (ft)",
    group: "roadside",
    what: "The lateral distance from the edge of the travel lane to the far (back) side of the hazard. If LH is more than LC, the page uses LC.",
    where: "Scale it from the plans: for a culvert, to the end of the wing or headwall; for a stream or slope, to the far limit of the area of concern. A wider area may be chosen to be shielded (49-4.02(01) item 1).",
    sketch: function (S) {
      var out = lonBase(S, {});
      out += S.ln(52, yo(25), LON.hz1, yo(25), "thin muted");
      out += S.dim(50, ETL, 50, yo(25), "LH", { side: -1 });
      return S.svg(out, 320, 170, "Plan of the length-of-need layout with LH from the edge of travel lane to the back of the hazard dimensioned");
    },
    caption: "LH runs from the ETL to the back of the hazard. The dashed runout path ends at that point.",
    cite: "49-4.02(01); Eqs. 49-4.2 to 49-4.4; Figure 49-4D",
    mistakes: [
      "Entering the distance to the front of the hazard (that is L3).",
      "Measuring from the centerline. Only the opposing-traffic inputs use the centerline."
    ]
  });

  H.define("rs-lonL3", {
    title: "ETL to front of hazard, L3 (ft)",
    group: "roadside",
    what: "The lateral distance from the edge of the travel lane to the near (traffic) face of the hazard. The page uses L3 − L2 as the clear space for barrier deflection.",
    where: "Scale it from the plans to the face of the hazard nearest traffic, such as the face of a pier or the end of a wingwall.",
    sketch: function (S) {
      var out = lonBase(S, {});
      out += S.ln(52, yo(14), LON.hz1, yo(14), "thin muted");
      out += S.dim(50, ETL, 50, yo(14), "L3", { side: -1 });
      return S.svg(out, 320, 170, "Plan of the length-of-need layout with L3 from the edge of travel lane to the front of the hazard dimensioned");
    },
    caption: "L3 runs from the ETL to the front face of the hazard.",
    cite: "49-4.01(03); Figures 49-4A, 49-4D",
    typical: "The space from the barrier face to the hazard face should exceed the dynamic deflection: 0 ft for concrete barrier, 2.80 to 4.30 ft for W-beam guardrail (Figure 49-4A). At a bridge support, keep at least 4.25 ft from barrier face to support face (49-4.02(04) item 2).",
    mistakes: [
      "Entering the distance to the back of the hazard (that is LH).",
      "Ignoring a footing or foundation that is closer to the road than the visible face."
    ]
  });

  H.define("rs-lonL2", {
    title: "ETL to face of barrier, L2 (ft)",
    group: "roadside",
    what: "The lateral distance from the edge of the travel lane to the face of the barrier along its parallel run at the hazard.",
    where: "Set it from the typical section: the usable shoulder width plus the barrier offset. 49-4.01(01) gives the offset from the effective usable-shoulder width.",
    sketch: function (S) {
      var out = lonBase(S, { shy: true });
      out += S.ln(52, yo(8), LON.b0, yo(8), "thin muted");
      out += S.dim(50, ETL, 50, yo(8), "L2", { side: -1 });
      return S.svg(out, 320, 170, "Plan of the length-of-need layout with L2 from the edge of travel lane to the face of the barrier dimensioned");
    },
    caption: "L2 runs from the ETL to the barrier face. Keep the barrier beyond the shy line (blue) where practical.",
    cite: "49-4.01(01), 49-4.01(02), 49-4.01(04); Figures 49-4D, 49-4E",
    typical: "Offset from the effective usable shoulder: new construction 2 ft desirable, 1 ft minimum; reconstruction 2 ft desirable, 0 ft minimum, but 2 ft where design-year AADT exceeds 100,000 (49-4.01(01)). On an INDOT route, pave the shoulder to the barrier face when the face is 14 ft or less from the ETL (49-4.01(02)). Shy-line offset Ls: 4.0 ft at 30 mph to 9.0 ft at 70 mph (Figure 49-4E).",
    mistakes: [
      "Measuring to the post or the back of the rail instead of the face.",
      "Placing semi-rigid barrier on a 6:1 slope less than 12 ft beyond the shoulder break (49-4.01(04))."
    ]
  });

  H.define("rs-lonLayout", {
    title: "Layout",
    group: "roadside",
    what: "<b>Parallel</b> uses Equation 49-4.4. <b>Flared at the Figure 49-4F maximum rate</b> and <b>Flared at my rate</b> use Equations 49-4.2 and 49-4.3. A flare shortens the length of need.",
    where: "The IDM says a roadside barrier should be installed parallel to the roadway; a flared installation may be appropriate where the barrier end is buried in the backslope (49-4.02(01)). The maximum rate is the inside-shy-line rate when L2 is less than Ls, otherwise the outside rate for the barrier type.",
    sketch: function (S) {
      var out = lonBase(S, { barrierCls: "hl" });
      var xp = LON.lr - (ETL - yo(8)) / (ETL - yo(25)) * (LON.lr - LON.hz2);
      out += S.ln(LON.f0, yo(8), xp, yo(8), "dimc") + S.circle(xp, yo(8), 3, "dimc-f");
      out += S.tx(186, yo(8) + 14, "parallel", { anchor: "middle", size: 10, cls: "dimc" });
      out += S.tx(LON.xt + 6, flareY(LON.xt) - 2, "flared", { size: 10.5, cls: "hl", bold: true });
      return S.svg(out, 320, 170, "Plan comparing a flared barrier with a parallel barrier reaching the same runout path");
    },
    caption: "Both layouts must reach the dashed runout path; the flared one gets there in a shorter length.",
    cite: "49-4.02(01); Eqs. 49-4.2, 49-4.3, 49-4.4; Figures 49-4D, 49-4F",
    mistakes: [
      "Flaring a barrier sharper than Figure 49-4F allows.",
      "Using the equations on the outside of a horizontal curve. Use the graphical solution (Figure 49-4H)."
    ]
  });

  H.define("rs-flareRateA", {
    title: "Flare rate a (a:1)",
    group: "roadside",
    what: "The flare rate as a:1: a feet along the road for each 1 ft of lateral offset (b = 1 in the IDM's a:b). Used only when Layout is \"Flared at my rate\".",
    where: "Choose a rate at least as flat as Figure 49-4F for the design speed, barrier type and position relative to the shy line. A larger a is a flatter flare.",
    sketch: function (S) {
      var E = 128, out = S.rect(0, 0, 320, E, "grass") + S.rect(0, E, 320, 22, "pave") + S.ln(0, E, 320, E, "edge");
      out += S.tx(316, E - 4, "ETL", { anchor: "end", size: 10, bold: true }) + S.car(268, 140, -1) + S.arrow(254, 140, 222, 140, "ink");
      var p0 = [92, 104], p1 = [292, 44], m = (p0[1] - p1[1]) / (p1[0] - p0[0]);
      out += S.pline([[10, 104], p0, p1], "barrier") + S.circle(p1[0], p1[1], 3, "ink-f");
      var ax = 140, bx = 240, ya = p0[1] - (ax - p0[0]) * m, yb = p0[1] - (bx - p0[0]) * m;
      out += S.pline([[ax, ya], [bx, ya], [bx, yb]], "hl");
      out += S.tx((ax + bx) / 2, ya + 15, "a", { anchor: "middle", size: 13, cls: "hl", bold: true });
      out += S.tx(bx + 6, (ya + yb) / 2 + 4, "1", { size: 13, cls: "hl", bold: true });
      out += S.tx(150, 30, "flare a:1", { anchor: "middle", size: 10.5 });
      return S.svg(out, 320, 150, "Plan of a flared barrier with the a to 1 flare rate triangle");
    },
    caption: "a along the road for 1 ft of lateral offset. Lateral scale exaggerated.",
    cite: "Figure 49-4F; Eq. 49-4.2",
    typical: "Figure 49-4F maximum rates: inside the shy line 13:1 (30 mph) to 30:1 (65 mph); outside the shy line 8:1 to 20:1 for concrete barrier and 7:1 to 15:1 for guardrail. Flatter is acceptable.",
    mistakes: [
      "Entering b/a as a decimal (0.067) instead of a (15).",
      "Entering a smaller a than Figure 49-4F allows; a smaller a is a sharper flare."
    ]
  });

  H.define("rs-lonL1", {
    title: "Tangent length upstream of hazard, L1 (ft)",
    group: "roadside",
    what: "For a flared layout, the length of barrier that runs parallel to the road upstream of the hazard before the flare starts, measured from the upstream face of the hazard.",
    where: "Set it from the layout, for example a parallel run needed for a transition. Ignored for a parallel layout.",
    sketch: function (S) {
      var out = lonBase(S, {});
      out += S.ln(LON.hz2, yo(14) + 2, LON.hz2, yo(11), "thin muted") + S.ln(LON.f0, yo(8) - 3, LON.f0, yo(11), "thin muted");
      out += S.dim(LON.hz2, yo(11) + 4, LON.f0, yo(11) + 4, "L1", {});
      return S.svg(out, 320, 170, "Plan of the length-of-need layout with the tangent length L1 dimensioned");
    },
    caption: "L1 is the straight run from the upstream face of the hazard to the start of the flare.",
    cite: "Eq. 49-4.2; Figure 49-4D",
    typical: "A GRET type II needs a straight run of at least 75 ft of W-beam guardrail before the hazard (49-8.01(01)).",
    mistakes: [
      "Measuring from the downstream end of the hazard.",
      "Entering an L1 longer than the length of need. The page then treats the barrier as parallel."
    ]
  });

  H.define("rs-gret", {
    title: "End treatment",
    group: "roadside",
    what: "The guardrail end treatment (GRET) at the upstream end. It sets the minimum guardrail length in advance of the hazard (Figure 49-4E(1)).",
    where: "<b>Type OS</b> (outside shoulder, single-faced), <b>MS</b> (median shoulder, double-faced) and <b>II</b> (buried in a backslope) are TL-3 treatments (49-8.01(01)). <b>Type I</b> is a non-NCHRP 350 treatment allowed only on a local-public-agency route or a local approach to an INDOT route with design-year AADT under 1000; it is not used on the NHS or an INDOT-maintained route (49-8.01(02)).",
    sketch: function (S) {
      var E = 110, out = S.rect(0, 0, 320, E, "grass") + S.rect(0, E, 320, 30, "pave") + S.ln(0, E, 320, E, "edge");
      out += S.car(268, 125, -1) + S.arrow(254, 125, 222, 125, "ink");
      out += S.rect(40, 40, 50, 22, "obj") + S.tx(65, 34, "hazard", { anchor: "middle", size: 9.5 });
      out += S.pline([[24, 80], [236, 80]], "barrier") + S.pline([[236, 80], [290, 80]], "hl") + S.rect(284, 75, 10, 10, "hlf2");
      out += S.tx(263, 70, "GRET", { anchor: "middle", size: 11, cls: "hl", bold: true });
      out += S.ln(90, 64, 90, 98, "thin muted") + S.ln(294, 86, 294, 98, "thin muted");
      out += S.dim(90, 96, 294, 96, "", { cls: "dimc" }) + S.tx(190, 92, "min. length (Fig. 49-4E(1))", { anchor: "middle", size: 10, cls: "dimc" });
      return S.svg(out, 320, 140, "Plan of a guardrail run with the end treatment at the upstream end");
    },
    caption: "Plan view, traffic right to left: the GRET is at the upstream end of the run.",
    cite: "Figure 49-4E(1); 49-8.01(01), 49-8.01(02)",
    typical: "Minimum length in advance of the hazard: 50 ft with type OS, MS or II. With type I, 100 ft at 50 mph or more and 50 ft at 45 mph or less (Figure 49-4E(1)). At bridge and support approaches, the LET portion of a type OS or MS counts toward the length of need (49-4.02(01) item 5, Figures 49-4E(2) to 49-4E(9)). Since 2018 INDOT uses the MGS guardrail system; see Design Memos 17-10 and 17-17 and Standard Drawings 601-MGSA (49-5.0).",
    mistakes: [
      "Selecting type I on an INDOT route or the NHS.",
      "Selecting type II where there is no backslope to bury the end in, or where the approach foreslope is steeper than 4:1 (49-8.01(01))."
    ]
  });

  H.define("rs-pierSupport", {
    title: "Bridge support 16 ft or less from ETL",
    group: "roadside",
    what: "<b>Yes</b> if the hazard is a bridge pier or support whose end is 16 ft or less from the edge of the travel lane. The page then rounds the length up to a multiple of 6.25 ft and applies the pier minimum.",
    where: "Measure from the edge of the travel lane to the end of the support. For a support 16 ft or less away, the barrier is attached to the upstream end of the support (49-4.02(04) item 1). For a support more than 16 ft away, choose No: the barrier is laid out as for any other hazard, between the support and the road (item 2).",
    sketch: function (S) {
      var E = 116, out = S.rect(0, 0, 320, E, "grass") + S.rect(0, E, 320, 30, "pave") + S.ln(0, E, 320, E, "edge");
      out += S.tx(316, E - 4, "ETL", { anchor: "end", size: 10, bold: true }) + S.car(268, 131, -1) + S.arrow(254, 131, 222, 131, "ink");
      out += S.rect(90, 30, 70, 22, "obj") + S.tx(125, 24, "pier", { anchor: "middle", size: 10 });
      out += S.pline([[160, 50], [166, 62], [290, 62]], "barrier") + S.circle(290, 62, 3, "ink-f");
      out += S.ln(70, 52, 90, 52, "thin muted");
      out += S.dim(72, E, 72, 52, "≤ 16 ft", { side: -1 });
      return S.svg(out, 320, 146, "Plan of a bridge pier near the road with the barrier attached to its upstream end");
    },
    caption: "Plan view, traffic right to left: barrier attached to the upstream end of a support 16 ft or less from the ETL.",
    cite: "49-4.02(04); Figures 49-4E(1), 49-4K",
    typical: "Round the calculated length up to the nearer whole multiple of 6.25 ft. Minimum: 100 ft at 50 mph or more, 50 ft at 45 mph or less (Figure 49-4K). Along the face of an outside-shoulder support on a divided roadway, cover the full length of the support plus 25 ft (49-4.02(04)).",
    mistakes: [
      "Measuring from the edge of shoulder rather than the edge of the travel lane.",
      "Choosing Yes for a support more than 16 ft away, which forces the 6.25-ft rounding and pier minimum."
    ]
  });

  H.define("rs-lonLHAZ", {
    title: "Hazard length along roadway, LHAZ (ft)",
    group: "roadside",
    what: "The length of the hazard measured parallel to the road, from its upstream face to its downstream face. It is the middle term of LTOT = LADV + LHAZ + LOPP (Equation 49-4.1).",
    where: "Scale it from the plans along the edge of the travel lane. For a skewed structure, use the length projected onto the road.",
    sketch: function (S) {
      var out = S.rect(0, 0, 320, 124, "grass");
      var r = S.planRoad({ y: 74, lanes: [1, 1], lw: 20, grass: false, x1: 0, x2: 320 });
      out += r.svg + S.arrow(200, 84, 170, 84, "ink") + S.arrow(120, 104, 150, 104, "ink");
      out += S.rect(120, 33, 80, 17, "obj") + S.tx(160, 29, "hazard", { anchor: "middle", size: 9.5 });
      out += S.pline([[30, 62], [290, 62]], "barrier") + S.circle(30, 62, 3, "ink-f") + S.circle(290, 62, 3, "ink-f");
      out += S.ln(50, 58, 50, 14, "thin muted") + S.ln(120, 30, 120, 14, "thin muted") + S.ln(200, 30, 200, 14, "thin muted") + S.ln(280, 58, 280, 14, "thin muted");
      out += S.dim(50, 18, 120, 18, "LOPP", { cls: "dimc", size: 10 }) + S.dim(120, 18, 200, 18, "LHAZ", { size: 11 }) + S.dim(200, 18, 280, 18, "LADV", { cls: "dimc", size: 10 });
      return S.svg(out, 320, 124, "Plan of a barrier run with the lengths in advance of, along, and beyond the hazard");
    },
    caption: "After Figure 49-4C. Adjacent traffic runs right to left; opposing traffic left to right.",
    cite: "Eq. 49-4.1; Figure 49-4C",
    mistakes: [
      "Entering the hazard's width away from the road instead of its length along the road.",
      "For a pier, forgetting the gap between twin in-line supports, which is part of the length to cover (49-4.02(04))."
    ]
  });

  H.define("rs-oppLC", {
    title: "Opposing: clear-zone width (ft)",
    group: "roadside",
    what: "The clear-zone width for opposing traffic, measured from the edge of the opposing travel lane: the centerline on a two-lane road.",
    where: "Find it from Figure 49-2A for the opposing direction, laid off from the centerline (49-4.02(02)). For slope averaging, Figure 49-2E starts the opposing-traffic average at the edge of the travel lane.",
    sketch: function (S) {
      var out = oppBase(S, "LC");
      out += S.dim(292, 134, 292, yc(36), "LC", { side: -1 });
      return S.svg(out, 320, 175, "Plan of a two-lane road with the opposing clear-zone width measured from the centerline");
    },
    caption: "Plan view: opposing traffic runs left to right in the lower lane; offsets are measured from the centerline (CL).",
    cite: "49-4.02(02); Figures 49-2E, 49-4I",
    typical: "If the barrier is beyond the opposing clear zone, no extra barrier is needed, but consider a crashworthy end treatment. If the barrier is inside it but the hazard is beyond it, use a crashworthy end treatment. If the hazard extends well beyond it (a river), LH may be set equal to LC (49-4.02(02)).",
    mistakes: [
      "Adding the lane width to the Figure 49-2A value. The clear-zone width itself is laid off from the centerline.",
      "On a two-way divided roadway, measuring from the centerline. Use the edge of the driving lane on the median side (49-4.02(02))."
    ]
  });

  H.define("rs-oppLH", {
    title: "Opposing: centerline to back of hazard (ft)",
    group: "roadside",
    what: "The lateral distance from the centerline (the edge of the opposing travel lane) to the back of the hazard.",
    where: "On a two-lane road this is LH plus the width of the adjacent travel lane.",
    sketch: function (S) {
      var out = oppBase(S, "");
      out += S.ln(242, yc(30), 294, yc(30), "thin muted");
      out += S.dim(292, 134, 292, yc(30), "LH", { side: -1 });
      return S.svg(out, 320, 175, "Plan of a two-lane road with the distance from the centerline to the back of the hazard dimensioned");
    },
    caption: "Measured from the centerline (CL), not the ETL.",
    cite: "49-4.02(02); Figure 49-4I",
    mistakes: [
      "Entering the ETL-based LH without adding the lane width."
    ]
  });

  H.define("rs-oppL2", {
    title: "Opposing: centerline to face of barrier (ft)",
    group: "roadside",
    what: "The lateral distance from the centerline (the edge of the opposing travel lane) to the face of the barrier.",
    where: "On a two-lane road this is L2 plus the width of the adjacent travel lane.",
    sketch: function (S) {
      var out = oppBase(S, "");
      out += S.ln(264, yc(18), 294, yc(18), "thin muted");
      out += S.dim(292, 134, 292, yc(18), "L2", { side: -1 });
      return S.svg(out, 320, 175, "Plan of a two-lane road with the distance from the centerline to the barrier face dimensioned");
    },
    caption: "Measured from the centerline (CL), not the ETL.",
    cite: "49-4.02(02); Figure 49-4I",
    typical: "If a barrier is needed for opposing traffic, its length in advance of the hazard is at least 100 ft at 50 mph or more, and 50 ft at 45 mph or less (49-4.02(02)).",
    mistakes: [
      "Entering the ETL-based L2 without adding the lane width."
    ]
  });

  // ======================================================= PAGE MAPS

  H.pages("roadside/clear-zone.html", {
    V: ["designSpeed", "Here: Figure 49-2A groups speeds as 40 mph or less, 45 or 50, 55, 60, and 65 or 70. At 35 mph or less the page applies the 10-ft tangent minimum (49-2.03(02)). Figure 49-2B starts at 40 mph."],
    aadt: ["aadt", "Here: the total of both directions on a two-way roadway, but the directional AADT on a one-way roadway such as a ramp or each roadway of a divided highway (49-2.01 item 6)."],
    ctx: "rs-czContext",
    pick: "rs-czPick",
    mode: "rs-slopeMode",
    col: "rs-slopeCategory",
    segs: "rs-slopeSegments",
    cap: "rs-slopeCap10",
    R: ["radius", "Here: the centerline radius, used for Kcz (Figure 49-2B, interpolated between radii). Enter 0 or leave blank for a tangent. Radii over 2860 ft need no adjustment per Figure 49-2B; the 49-2.02(01) text says 3000 ft."],
    side: "rs-curveSide",
    row: "rs-rowOffset",
    obj: "rs-objectOffset"
  });

  H.pages("roadside/flare-rate.html", {
    V: ["designSpeed", "Here: sets the flare rates (Figure 49-4F, 30 to 65 mph; 70 mph uses the 65 mph rates) and the shy-line offset Ls (Figure 49-4E)."],
    bt: ["rs-barrierType", "Here: sets the rate used for the part of the flare outside the shy line."],
    o1: "rs-flareStartOffset",
    o2: "rs-flareEndOffset",
    Lp: "rs-flareLength"
  });

  H.pages("roadside/length-of-need.html", {
    V: ["designSpeed", "Here: sets LR and Ls (Figure 49-4E; 35 and 65 mph are interpolated, as in Example 49-4.1), the flare-rate limit (Figure 49-4F) and the minimum lengths, which change between 45 and 50 mph."],
    aadt: ["aadt", "Here: selects the LR column of Figure 49-4E: 1000 or less, over 1000 to 5000, over 5000 to 10,000, and over 10,000."],
    road: "rs-roadwayType",
    LC: "rs-lonLC",
    LH: "rs-lonLH",
    L3: "rs-lonL3",
    L2: "rs-lonL2",
    btype: ["rs-barrierType", "Here: sets the maximum flare rate when the layout is flared and the barrier is outside the shy line."],
    flare: "rs-lonLayout",
    fa: "rs-flareRateA",
    L1: "rs-lonL1",
    gret: "rs-gret",
    pier: "rs-pierSupport",
    LHAZ: "rs-lonLHAZ",
    LCo: "rs-oppLC",
    LHo: "rs-oppLH",
    L2o: "rs-oppL2"
  });
})(window.IDMHelp);
