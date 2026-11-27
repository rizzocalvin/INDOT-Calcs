/* Input help definitions: alignment calculators. See js/help.js. */
(function (H) {
  "use strict";

  // ---------------------------------------------------------------- helpers
  // Points on a circular arc; angles in degrees in SVG coordinates (0 = +x, 90 = down).
  function arc(cx, cy, r, a1, a2, n) {
    var p = [];
    n = n || 40;
    for (var i = 0; i <= n; i++) {
      var a = (a1 + (a2 - a1) * i / n) * Math.PI / 180;
      p.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
    }
    return p;
  }

  // Plan view of a simple curve: back tangent, curve deflecting 40 degrees to the left, forward tangent.
  // PC (70,110), PI (170,110), PT (246.6,45.7), R = 274.7 px, center off the top of the box.
  var HC = { pc: [70, 110], pi: [170, 110], pt: [246.6, 45.7], c: [70, -164.7], r: 274.7 };
  function hcBase(S, hlArc) {
    var a = arc(HC.c[0], HC.c[1], HC.r, 90, 50, 40);
    return S.ln(HC.pc[0], HC.pc[1], HC.pi[0], HC.pi[1], "thin muted") + S.ln(HC.pi[0], HC.pi[1], HC.pt[0], HC.pt[1], "thin muted") +
      S.ln(10, 110, HC.pc[0], HC.pc[1], "edge") + S.ln(HC.pt[0], HC.pt[1], 285, 13.5, "edge") +
      S.pline(a, hlArc ? "hl" : "edge") +
      S.circle(HC.pc[0], HC.pc[1], 3, "ink-f") + S.circle(HC.pt[0], HC.pt[1], 3, "ink-f");
  }

  // Plan view for the HSO sketches: curve bulging up, inside of the curve below.
  // Center (160,260); CL r = 210; edges r = 225 / 195; inside lane center r = 202.5.
  var HS = { cx: 160, cy: 260, rCL: 210, rO: 225, rI: 195, rL: 202.5, a: 37.8 };
  function hsPt(r, deg) { var t = deg * Math.PI / 180; return [HS.cx + r * Math.sin(t), HS.cy - r * Math.cos(t)]; }
  function hsArc(r, d1, d2) { var p = []; for (var i = 0; i <= 40; i++) p.push(hsPt(r, d1 + (d2 - d1) * i / 40)); return p; }
  function hsBase(S) {
    var o = hsArc(HS.rO, -52, 52), i = hsArc(HS.rI, -52, 52);
    return S.rect(0, 0, 320, 150, "grass") + S.poly(o.concat(i.slice().reverse()), "pave") + S.pline(o, "edge") + S.pline(i, "edge") +
      S.pline(hsArc(HS.rCL - 0.8, -52, 52), "cl") + S.pline(hsArc(HS.rCL + 0.8, -52, 52), "cl") +
      S.pline(hsArc(HS.rL, -52, 52), "thin muted");
  }

  // Profile of a symmetrical sag vertical curve. PVC (80,71.4), PVI (160,100), PVT (240,65.7).
  var VC = { pvc: [80, 71.4], pvi: [160, 100], pvt: [240, 65.7], a: [20, 50], b: [300, 40] };
  function vcAt(t) {
    var u = 1 - t;
    return [u * u * VC.pvc[0] + 2 * u * t * VC.pvi[0] + t * t * VC.pvt[0], u * u * VC.pvc[1] + 2 * u * t * VC.pvi[1] + t * t * VC.pvt[1]];
  }
  function vcY(x) { // curve elevation (px) at x between PVC and PVT
    var t = (x - VC.pvc[0]) / (VC.pvt[0] - VC.pvc[0]);
    return vcAt(t)[1];
  }
  function vcBase(S, o) {
    o = o || {};
    var pts = [VC.a];
    for (var i = 0; i <= 30; i++) pts.push(vcAt(i / 30));
    pts.push(VC.b);
    var out = S.profile(pts, "edge", 132);
    out += S.ln(VC.pvc[0], VC.pvc[1], VC.pvi[0], VC.pvi[1], o.g1 ? "hl" : "thin muted") + S.ln(VC.pvi[0], VC.pvi[1], VC.pvt[0], VC.pvt[1], o.g2 ? "hl" : "thin muted");
    if (o.g1) out += S.ln(VC.a[0], VC.a[1], VC.pvc[0], VC.pvc[1], "hl");
    if (o.g2) out += S.ln(VC.pvt[0], VC.pvt[1], VC.b[0], VC.b[1], "hl");
    if (o.ticks !== false) {
      [["PVC", VC.pvc], ["PVI", VC.pvi], ["PVT", VC.pvt]].forEach(function (p) {
        out += S.ln(p[1][0], p[1][1] + 3, p[1][0], 134, "thin muted");
        if (!(o.hlTick && o.hlTick === p[0])) out += S.tx(p[1][0], 145, p[0], { anchor: "middle", size: 9.5, cls: "muted" });
      });
    }
    out += S.circle(VC.pvc[0], VC.pvc[1], 2.5, "ink-f") + S.circle(VC.pvt[0], VC.pvt[1], 2.5, "ink-f") + S.circle(VC.pvi[0], VC.pvi[1], 2.5, "ink-f");
    return out;
  }

  // Superelevated cross section, inside of the curve on the left.
  function superSection(S, e) {
    var out = S.poly([[0, 150], [0, 108], [50, 100], [70, 92], [250, 92 - e], [270, 92 - e + 2], [320, 112], [320, 150]], "earth");
    out += S.poly([[70, 92], [250, 92 - e], [250, 92 - e + 9], [70, 101]], "pave");
    out += S.poly([[50, 100], [70, 92], [70, 99], [50, 106]], "pave2") + S.poly([[250, 92 - e], [270, 92 - e + 2], [270, 92 - e + 8], [250, 92 - e + 7]], "pave2");
    out += S.pline([[0, 108], [50, 100], [70, 92], [250, 92 - e], [270, 92 - e + 2], [320, 112]], "edge");
    out += S.rect(158.5, 92 - e * 88 / 180 - 1.6, 3, 2.4, "clf");
    return out;
  }

  // SSD components strip: reaction distance then braking distance (which = "t" or "a" highlighted).
  function ssdStrip(S, which) {
    var r = S.planRoad({ y: 96, lanes: 1, lw: 22, x1: 10, x2: 310 });
    var x0 = 40, xr = 130, xb = 270, out = r.svg;
    out += S.car(28, 107, 1) + S.rect(xb + 2, 101, 8, 10, "obj");
    out += S.rect(x0, 58, xr - x0, 16, which === "t" ? "hlf" : "pave") + S.rect(x0, 58, xr - x0, 16, which === "t" ? "hl" : "dimc");
    out += S.rect(xr, 58, xb - xr, 16, which === "a" ? "hlf" : "pave") + S.rect(xr, 58, xb - xr, 16, which === "a" ? "hl" : "dimc");
    out += S.tx((x0 + xr) / 2, 52, "reaction: 1.47 V t", { anchor: "middle", size: 10, cls: which === "t" ? "hl" : "dimc", bold: which === "t" });
    out += S.tx((xr + xb) / 2, 52, "braking: 1.075 V² / a", { anchor: "middle", size: 10, cls: which === "a" ? "hl" : "dimc", bold: which === "a" });
    out += S.dim(x0, 24, xb, 24, "SSD (Eq. 42-1.1)", { cls: "dimc", size: 10 });
    out += S.ln(x0, 28, x0, 56, "thin muted") + S.ln(xb, 28, xb, 56, "thin muted");
    out += S.tx(x0 - 2, 136, which === "t" ? "brakes not yet applied" : "", { size: 9.5, cls: "muted" });
    out += S.tx(xb + 6, 136, "object", { anchor: "end", size: 9.5, cls: "muted" });
    return out;
  }

  // Crest profile with eye and object (sight line just grazing the crest).
  function crest(S, x1, x2, apexY, k, eyeX, objX) {
    var pts = [];
    var mid = (x1 + x2) / 2;
    for (var x = x1; x <= x2 + 0.01; x += (x2 - x1) / 30) pts.push([x, apexY + k * (x - mid) * (x - mid)]);
    function y(x) { return apexY + k * (x - mid) * (x - mid); }
    return { svg: S.profile(pts, "edge", 150), y: y };
  }

  // ---------------------------------------------------------------- horizontal curve
  H.define("al-superTable", {
    title: "Superelevation table (e<sub>max</sub>)",
    group: "horizontal",
    what: "The superelevation table for the facility, which fixes e<sub>max</sub>. The open-roadway tables (Figures 305-4B, 4C and 4D for e<sub>max</sub> = 4, 6 and 8%) apply to rural and high-speed facilities. The low-speed urban table (Figure 305-4E, AASHTO Method 2) applies to urban streets with V ≤ 45 mph.",
    where: "Choose from Figure 305-4A, Selection of e<sub>max</sub>: rural, all speeds: 6%; rural frontage roads: 8%; high-speed urban (V ≥ 50 mph): 6%; low-speed urban (V ≤ 45 mph, except ramps) and turning roadways: Method 2; system ramps: 6% (loop ramps may use 8%); service ramps: 6% or 8%; last curve of an exit ramp to a stop- or signal-controlled crossroad terminal (V = 30 mph): 4% or 6%; approach roadway to a roundabout or diverging diamond interchange (V ≤ 30 mph): Method 2.",
    sketch: function (S) {
      return S.svg(superSection(S, 26) +
        S.ln(70, 92, 250, 92, "thin muted") + S.ln(250, 92, 250, 66, "hl") +
        S.tx(244, 88, "e ≤ emax", { anchor: "end", cls: "hl", bold: true, size: 11 }) +
        S.tx(10, 18, "← inside of curve", { size: 9.5, cls: "muted" }) +
        S.tx(10, 38, "Figure 305-4A: 6% rural and high-speed urban,", { size: 9.5 }) +
        S.tx(10, 51, "8% rural frontage roads, Method 2 low-speed urban", { size: 9.5 }), 320, 140, "Superelevated cross section; the rate e is capped by emax");
    },
    caption: "The table caps the design superelevation rate e at e<sub>max</sub>.",
    cite: "Figure 305-4A; Figures 305-4B to 305-4E; 305-4.01, 305-4.02",
    typical: "6% for most rural and high-speed work. On reconstruction, e<sub>max</sub> = 8% may be kept unless the curve has an unacceptable history of superelevation-related crashes (Figure 305-4A, note 1). Use of e<sub>max</sub> = 4% should be limited to urban conditions (Figure 305-4B). On low-speed urban streets e<sub>max</sub> should be 4%; 6% is justified where terrain dictates sharp curvature and the curve is long enough for the transition (305-4.02(02)). Chapter 53 (introduction, item 4): the rate should not exceed 8% because of snow and ice.",
    mistakes: [
      "Using the low-speed urban (Method 2) table for an interchange ramp. Ramps are excluded from the low-speed urban condition (305-4.02(01)).",
      "Using 8% on a new rural curve. Rural facilities use 6%; 8% is for rural frontage roads, loop ramps, service ramps, or may be retained on reconstruction.",
      "Using the 4% table on a rural road. It is limited to urban conditions."
    ]
  });

  H.define("al-curveLengthFacility", {
    title: "Facility type for curve length",
    group: "horizontal",
    what: "The facility class used for the length-of-curve check in 305-3.02. It sets the minimum (and desirable) length of the curve as a multiple of the design speed V.",
    where: "High speed means V ≥ 50 mph and low speed means V ≤ 45 mph (305-1.0). Pick <b>high-speed limited access</b> for freeways and other high-speed facilities with limited access, <b>other high-speed facility</b> for remaining roads with V ≥ 50 mph, and <b>low-speed facility</b> for V ≤ 45 mph.",
    sketch: function (S) {
      return S.svg(hcBase(S, true) +
        S.tx(HC.pc[0] - 4, HC.pc[1] - 8, "PC", { anchor: "end", size: 10, bold: true }) +
        S.tx(HC.pt[0] + 8, HC.pt[1] + 6, "PT", { size: 10, bold: true }) +
        S.tx(196, 96, "L", { cls: "hl", bold: true, size: 14 }) +
        S.tx(10, 132, "High-speed limited access: L ≥ 15V (30V desirable)", { size: 9.5 }) +
        S.tx(10, 145, "Other high speed: 15V min.  Low speed: 15V where practical", { size: 9.5 }), 320, 150, "Plan view of a curve with the length L from PC to PT highlighted");
    },
    caption: "Plan view: L is measured along the curve from PC to PT, in feet; V in mph.",
    cite: "305-3.02; 305-1.0 (high and low speed)",
    typical: "High-speed limited-access facilities: 30V desirable, 15V minimum. Other high-speed facilities: 15V minimum. Low-speed facilities: 15V where practical; shorter curves are expected at roundabouts and on urban facilities that use Method 2 superelevation (305-3.02). Provide the desirable length where possible; otherwise the greatest practical length, not less than the minimum.",
    mistakes: [
      "Treating 15V as the target on a freeway. 15V is the minimum; 30V is desirable.",
      "Choosing the low-speed class for a 50 mph road. Low speed is V ≤ 45 mph."
    ]
  });

  H.define("al-deflection", {
    title: "Deflection angle, Δ (degrees)",
    group: "horizontal",
    what: "The deflection angle between the back tangent and the forward tangent at the PI, in decimal degrees. It equals the central angle of the curve.",
    where: "Read Δ from the curve data on the plans or the alignment report, and convert degrees-minutes-seconds to decimal degrees: Δ = deg + min/60 + sec/3600.",
    sketch: function (S) {
      var a = arc(HC.pi[0], HC.pi[1], 44, 0, -40, 16);
      return S.svg(hcBase(S) +
        S.ln(HC.pi[0], HC.pi[1], 300, HC.pi[1], "thin muted") +
        S.pline(a, "hl") + S.head(a[a.length - 1][0], a[a.length - 1][1], -0.64, -0.77, "hl") +
        S.tx(222, 98, "Δ", { cls: "hl", bold: true, size: 15 }) +
        S.circle(HC.pi[0], HC.pi[1], 3, "ink-f") +
        S.tx(HC.pi[0], 126, "PI", { anchor: "middle", size: 10, bold: true }) +
        S.tx(HC.pc[0], 126, "PC", { anchor: "middle", size: 10, bold: true }) +
        S.tx(HC.pt[0] + 8, HC.pt[1] + 6, "PT", { size: 10, bold: true }) +
        S.tx(304, 124, "back tangent extended", { anchor: "end", size: 9.5, cls: "muted" }) +
        S.tx(10, 144, "Δ = deflection angle = central angle of the curve", { size: 9.5, cls: "muted" }), 320, 150, "Plan view of two tangents meeting at the PI with the deflection angle marked");
    },
    caption: "Δ is the angle from the back tangent extended to the forward tangent, not the angle between the two tangents.",
    cite: "Figure 305-6B; Figure 305-6C (example, Δ = 38.34°)",
    typical: "Any value from 0 to 180°. A deflection without a curve may be retained on a mainline only if it is ≤ 1° (urban) or ≤ 0.5° (rural), with documentation (305-3.05). The central angle should be as small as site conditions allow (305-2.0 item 4).",
    mistakes: [
      "Typing degrees-minutes-seconds as a decimal, e.g. 38°20'24\" as 38.2024. Enter 38.34.",
      "Entering the interior angle between the tangents (180° − Δ) instead of the deflection."
    ]
  });

  H.define("al-piStation", {
    title: "PI station",
    group: "horizontal",
    what: "The station of the point of intersection (PI) of the two tangents. Enter it as 20+25.36 or as 2025.36 (feet).",
    where: "From the alignment data. The page computes PC = PI − T and PT = PC + L (Figure 305-6B).",
    sketch: function (S) {
      return S.svg(hcBase(S) +
        S.circle(HC.pi[0], HC.pi[1], 4.5, "hl-f") +
        S.tx(HC.pi[0] + 6, HC.pi[1] - 8, "PI Sta.", { cls: "hl", bold: true, size: 11 }) +
        S.dim(HC.pc[0], 122, HC.pi[0], 122, "T", { cls: "dimc", side: 1, off: 2 }) +
        S.tx(HC.pc[0] - 4, HC.pc[1] - 8, "PC", { anchor: "end", size: 10, bold: true }) +
        S.tx(HC.pt[0] + 8, HC.pt[1] + 6, "PT", { size: 10, bold: true }) +
        S.tx(10, 22, "PC = PI − T", { size: 10, cls: "dimc" }) +
        S.tx(10, 36, "PT = PC + L (along the curve)", { size: 10, cls: "dimc" }), 320, 145, "Plan view of a curve with the PI marked and the tangent length T dimensioned");
    },
    caption: "The PI lies off the stationed line; the PT is stationed from the PC along the curve.",
    cite: "Figures 305-6B, 305-6C and 305-6D",
    typical: "Figure 305-6C: PI = 20+25.36 with Δ = 38.34° and D = 3°30' (R = 1637.02 ft) gives PC = 14+56.25 and PT = 25+51.68.",
    mistakes: [
      "Computing the PT as PI + T. Stationing follows the curve, so PT = PC + L.",
      "On a series of curves, adding PI-to-PI distances to get the next PI station. The next PC is stationed from the previous PT (Figure 305-6D)."
    ]
  });

  // ---------------------------------------------------------------- HSO
  H.define("al-sightCriterion", {
    title: "Sight distance criterion, S",
    group: "sight",
    what: "The sight distance S that must be available around the curve. Stopping sight distance (Figure 42-1A) is the minimum. Decision sight distance (Figure 42-2A, maneuvers A to E) or your own value can be checked where warranted.",
    where: "SSD should be available throughout the curve at a minimum (305-5.02). Truck SSD, decision sight distance or passing sight distance may be warranted; Chapter 42 lists candidate sites, and the value is used as S in Equation 305-5.1 (305-5.02 item 2). See the avoidance maneuver entry for choosing A to E. Use <b>Enter my own S</b> for any other value.",
    sketch: function (S) {
      var e = hsPt(HS.rL, -HS.a), o = hsPt(HS.rL, HS.a);
      return S.svg(hsBase(S) +
        S.pline(hsArc(HS.rL, -HS.a, HS.a), "hl") +
        S.ln(e[0], e[1], o[0], o[1], "dimc") +
        S.circle(e[0], e[1], 3.5, "ink-f") + S.rect(o[0] - 3.5, o[1] - 3.5, 7, 7, "obj") +
        S.tx(e[0] + 8, e[1] + 20, "eye 3.5 ft", { size: 9.5 }) +
        S.tx(o[0] - 8, o[1] + 20, "object 2 ft", { anchor: "end", size: 9.5 }) +
        S.tx(160, 88, "S along the inside lane", { anchor: "middle", cls: "hl", bold: true, size: 11 }) +
        S.tx(160, 116, "sight line", { anchor: "middle", size: 9.5, cls: "dimc" }) +
        S.tx(160, 142, "inside of curve", { anchor: "middle", size: 9.5, cls: "muted" }), 320, 150, "Plan view of a curve with the sight distance S measured along the inside lane");
    },
    caption: "Plan view: S is measured along the center of the inside lane, eye to object.",
    cite: "305-5.02; Figure 42-1A (SSD); Figure 42-2A (DSD)",
    typical: "SSD from Figure 42-1A, e.g. 570 ft at 60 mph (used in the Figure 305-5B example). DSD is not tabulated below 30 mph.",
    mistakes: [
      "Thinking of S along the centerline or the outer lane. The eye and object are at the center of the inside lane (305-5.02).",
      "Picking a DSD stop maneuver (A or B) where the driver must change speed, path or direction rather than stop. Those maneuvers are C, D and E (42-2.01)."
    ]
  });

  H.define("al-customS", {
    title: "Custom sight distance, S (ft)",
    group: "sight",
    what: "Your own design sight distance in feet. Used only when the criterion is set to <b>Enter my own S</b>.",
    where: "Use it for a longer stopping sight distance than Figure 42-1A (for example for trucks on a downgrade, 42-1.03) or for passing sight distance from Figure 42-3B.",
    sketch: function (S) { return H.defs["al-sightCriterion"].sketch(S); },
    caption: "Plan view: S is measured along the center of the inside lane.",
    cite: "305-5.02 item 2; 42-1.03; Figure 42-3B",
    typical: "Passing sight distance (Figure 42-3B) ranges from 710 ft at 20 mph to 2480 ft at 70 mph and uses a 3.5-ft object (42-3.02).",
    mistakes: [
      "Entering a value here and leaving the criterion on SSD or DSD. The custom value is ignored unless <b>Enter my own S</b> is selected."
    ]
  });

  H.define("al-hsoRadius", {
    title: "Radius of roadway centerline (ft)",
    group: "horizontal",
    what: "The radius of the curve at the roadway centerline, from the curve data. The page subtracts the centerline-to-inside-lane offset to get R at the center of the inside travel lane, which Equation 305-5.1 uses.",
    where: "Read the centerline radius from the plans or alignment report. If you already have the radius to the center of the inside lane, enter it here and set the offset to 0.",
    sketch: function (S) {
      var cx = 40, cy = 138, out = "";
      var outer = arc(cx, cy, 170, -88, -8), inner = arc(cx, cy, 130, -88, -8);
      out += S.poly(outer.concat(inner.slice().reverse()), "pave") + S.pline(outer, "edge") + S.pline(inner, "edge");
      out += S.pline(arc(cx, cy, 150, -88, -8), "cl") + S.pline(arc(cx, cy, 140, -88, -8), "thin muted");
      var m = arc(cx, cy, 150, -32, -32, 1)[0], n = arc(cx, cy, 140, -62, -62, 1)[0];
      out += S.ln(cx, cy, m[0], m[1], "hl") + S.head(m[0], m[1], m[0] - cx, m[1] - cy, "hl");
      out += S.ln(cx, cy, n[0], n[1], "dimc") + S.head(n[0], n[1], n[0] - cx, n[1] - cy, "dimc");
      out += S.tx(118, 112, "Rcl", { cls: "hl", bold: true, size: 13 });
      out += S.tx(84, 66, "R", { cls: "dimc", bold: true, size: 12 });
      out += S.circle(cx, cy, 3, "ink-f") + S.tx(cx + 8, cy + 4, "center of curve", { size: 9.5, cls: "muted" });
      out += S.leader(222, 70, 177, 77, "centerline", { size: 9.5 });
      out += S.tx(214, 128, "R = Rcl − offset", { size: 10, cls: "dimc" });
      out += S.tx(214, 141, "(center of inside lane)", { size: 9.5, cls: "dimc" });
      return S.svg(out, 320, 150, "Plan view of a curve with the centerline radius and the inside-lane radius");
    },
    caption: "Plan view: enter the centerline radius (orange); the page computes R to the center of the inside lane (blue).",
    cite: "Eq. 305-5.1; 305-5.02; 305-5.03",
    typical: "Figure 305-5B example: R = 1500 ft (used directly as the inside-lane radius, offset 0).",
    mistakes: [
      "Entering the inside-lane radius here and also entering an offset, which subtracts the offset twice.",
      "Entering the radius of an edge line."
    ]
  });

  H.define("al-insideLaneOffset", {
    title: "Centerline to center of inside lane (ft)",
    group: "sight",
    what: "The distance from the roadway centerline to the center of the travel lane nearest the inside of the curve. The driver's eye and the object are assumed at the center of the inside lane (305-5.02), so R = R<sub>CL</sub> − offset.",
    where: "From the typical section: half a lane width on a two-lane road, plus the width of any other lanes between the centerline and the inside lane on a multilane road. For a ramp with a lane wider than 12 ft, place the eye and object 6 ft from the inside edge of the lane (305-5.02).",
    sketch: function (S) {
      var x = S.xsec({ cx: 160, y: 72, lanes: [1, 1], lw: 70, sh: [28, 28], hl: "lane", hlSide: "L", fore: [36, 26] });
      return S.svg(x.svg +
        S.ln(160, 44, 160, 68, "thin muted") + S.ln(125, 44, 125, 70, "thin muted") +
        S.dim(125, 40, 160, 40, "offset", { side: -1, off: 4 }) +
        S.tx(160, 20, "CL", { anchor: "middle", size: 9.5, cls: "muted" }) +
        S.leader(150, 120, 125, 78, "center of inside lane", { size: 9.5 }) +
        S.tx(10, 16, "← inside of curve", { size: 9.5, cls: "muted" }) +
        S.tx(310, 16, "outside →", { anchor: "end", size: 9.5, cls: "muted" }), 320, 140, "Cross section from the centerline to the center of the inside lane");
    },
    caption: "Cross section: 6 ft for a two-lane road with 12-ft lanes.",
    cite: "305-5.02 item 1; Eq. 305-5.1",
    typical: "6 ft for 12-ft lanes on a two-lane road; 18 ft for the inner lane of a four-lane undivided road with 12-ft lanes. 0 when the radius entered is already at the center of the inside lane (as in Figure 305-5B).",
    mistakes: [
      "Measuring to the outside lane. Use the lane nearest the center of the curve.",
      "Using the lane width instead of the distance to the lane center."
    ]
  });

  H.define("al-hsoCurveLength", {
    title: "Length of curve, L (ft)",
    group: "horizontal",
    what: "The length of the horizontal curve from PC to PT, measured along the curve. Comparing L with S decides how the clear area is checked.",
    where: "From the curve data (L = π R Δ / 180, Figure 305-6B). Where L &gt; S, Equation 305-5.1 applies from PC to PT, with straight-line clearance to the outside edge of shoulder S/2 before the PC and beyond the PT. Where L ≤ S, check sight distance graphically, including S/2 before the PC and beyond the PT (305-5.03, 305-5.03(01)).",
    sketch: function (S) {
      return S.svg(hcBase(S, true) +
        S.ln(HC.pc[0], HC.pc[1], HC.pt[0], HC.pt[1], "thin muted") +
        S.tx(HC.pc[0] - 4, HC.pc[1] - 8, "PC", { anchor: "end", size: 10, bold: true }) +
        S.tx(HC.pt[0] + 8, HC.pt[1] + 6, "PT", { size: 10, bold: true }) +
        S.tx(196, 98, "L", { cls: "hl", bold: true, size: 14 }) +
        S.tx(128, 70, "long chord (not L)", { anchor: "end", size: 9.5, cls: "muted" }) +
        S.tx(10, 140, "L > S: Eq. 305-5.1.  L ≤ S: check graphically.", { size: 9.5 }), 320, 150, "Plan view of a curve with its length L along the arc");
    },
    caption: "Plan view: L runs along the curve from PC to PT.",
    cite: "305-5.03; 305-5.03(01); Figure 305-6B",
    typical: "Figure 305-5B example: L = 900 ft with S = 570 ft (L &gt; S).",
    mistakes: [
      "Entering the long chord or the tangent length instead of the arc length.",
      "Relying on the equation where L ≤ S. The equation overstates the clearance; check graphically."
    ]
  });

  H.define("al-obstructionOffset", {
    title: "Offset to obstruction (ft)",
    group: "sight",
    what: "Optional. The distance from the center of the inside travel lane to the nearest sight obstruction on the inside of the curve. The page compares it with the required HSO and estimates the sight distance it allows.",
    where: "Measure radially in plan from the center of the inside lane to the obstruction. Obstructions include guardrail, bridge railing, median barrier, walls, cut slopes, wooded areas, buildings, tall farm crops and the right-of-way line. A point obstacle such as a sign or utility pole is not a sight obstruction (305-5.01).",
    sketch: function (S) {
      var e = hsPt(HS.rL, -HS.a), o = hsPt(HS.rL, HS.a), out = hsBase(S);
      [-34, -17, 0, 17, 34].forEach(function (d) { var p = hsPt(150, d); out += S.tree(p[0], p[1], 7); });
      out += S.ln(e[0], e[1], o[0], o[1], "dimc");
      out += S.dim(160, 59, 160, 101, "", {});
      out += S.tx(166, 86, "offset", { cls: "hl", bold: true, size: 11 });
      out += S.tx(e[0] + 2, e[1] + 16, "sight line", { size: 9.5, cls: "dimc" });
      var lc = hsPt(HS.rL, -42); out += S.leader(8, 18, lc[0], lc[1], "center of inside lane", { size: 9.5 });
      out += S.tx(160, 145, "obstruction (tree line)", { anchor: "middle", size: 9.5 });
      return S.svg(out, 320, 150, "Plan view of a curve with the offset from the inside lane center to a tree line");
    },
    caption: "Plan view: from the center of the inside lane to the obstruction, at right angles to the curve.",
    cite: "305-5.01; 305-5.03; Eq. 305-5.1",
    typical: "Figure 305-5B: 60 mph, R = 1500 ft, S = 570 ft needs HSO = 27 ft. The shoulder should not be widened beyond 12 ft solely to meet HSO (305-5.01).",
    mistakes: [
      "Measuring from the edge of pavement or the centerline instead of the center of the inside lane.",
      "Counting a sign or utility pole as an obstruction.",
      "Accepting the plan-view check where a barrier sits within the HSO or the curve overlaps a vertical curve. A three-dimensional evaluation is recommended (305-5.03(02))."
    ]
  });

  // ---------------------------------------------------------------- sight distance
  H.define("al-brakeReaction", {
    title: "Brake reaction time, t (s)",
    group: "sight",
    what: "The time from when an obstacle can first be seen to when the driver first applies the brakes. The IDM uses 2.5 s.",
    where: "IDM default (42-1.01 item 1). The design SSD on the page always comes from Figure 42-1A; a different t only changes the comparison value computed from Equation 42-1.1.",
    sketch: function (S) { return S.svg(ssdStrip(S, "t"), 320, 145, "Stopping sight distance as reaction distance plus braking distance, reaction part highlighted"); },
    caption: "The car travels 1.47 V t at full speed before braking starts.",
    cite: "42-1.01; Eq. 42-1.1; Figure 42-1A",
    typical: "2.5 s, adequate for 90% of drivers in simple to moderately complex highway environments (42-1.01). Decision sight distance covers longer times: 3 to 14.5 s depending on location and maneuver (42-2.01).",
    mistakes: [
      "Entering a longer time here to model a complex location. Use decision sight distance (Figure 42-2A) instead.",
      "Expecting the design SSD to change with t. The governing value is the tabulated Figure 42-1A SSD."
    ]
  });

  H.define("al-decel", {
    title: "Deceleration rate, a (ft/s²)",
    group: "sight",
    what: "The braking deceleration rate used in the braking-distance term of Equation 42-1.1. The IDM uses 11.2 ft/s².",
    where: "IDM default (42-1.01). As with t, changing a only changes the comparison value; the design SSD comes from Figure 42-1A.",
    sketch: function (S) { return S.svg(ssdStrip(S, "a"), 320, 145, "Stopping sight distance as reaction distance plus braking distance, braking part highlighted"); },
    caption: "Braking distance is 1.075 V² / a.",
    cite: "42-1.01; Eq. 42-1.1",
    typical: "11.2 ft/s². INDOT does not require a grade adjustment to SSD (42-1.01 item 3).",
    mistakes: [
      "Entering the rate in g or in mph/s. The equation needs ft/s².",
      "Adjusting SSD for grade. INDOT does not require it."
    ]
  });

  H.define("al-dsdManeuver", {
    title: "Avoidance maneuver (decision sight distance)",
    group: "sight",
    what: "The maneuver the driver must make at the location, from Figure 42-2A. A and B are stops; C, D and E are changes in speed, path or direction. The setting (rural, suburban, urban) sets the time allowed.",
    where: "<b>A</b>: stop on a rural road (t = 3.0 s). <b>B</b>: stop on an urban road (t = 9.1 s). <b>C</b>: speed, path or direction change on a rural road (t = 10.2 to 11.2 s). <b>D</b>: same on a suburban road (t = 12.1 to 12.9 s). <b>E</b>: same on an urban road (t = 14.0 to 14.5 s). A and B use Equation 42-1.1; C, D and E use DSD = 1.47 V t (Eq. 42-2.1).",
    sketch: function (S) {
      var a = S.planRoad({ x1: 10, x2: 150, y: 46, lanes: 2, lw: 20, grass: false });
      var b = S.planRoad({ x1: 170, x2: 310, y: 46, lanes: 2, lw: 20, grass: false });
      return S.svg(S.rect(0, 0, 320, 150, "grass") + a.svg + b.svg +
        S.car(28, 76, 1) + S.arrow(42, 76, 118, 76, "hl") + S.ln(128, 67, 128, 85, "barrier") +
        S.car(188, 76, 1) + S.path("M202,76 C240,76 246,56 290,56", "hl") + S.head(290, 56, 1, 0, "hl") +
        S.tx(80, 112, "A, B: stop", { anchor: "middle", size: 11, cls: "hl", bold: true }) +
        S.tx(80, 126, "A rural, B urban", { anchor: "middle", size: 9.5, cls: "muted" }) +
        S.tx(240, 112, "C, D, E: change", { anchor: "middle", size: 11, cls: "hl", bold: true }) +
        S.tx(240, 126, "speed, path or direction", { anchor: "middle", size: 9.5, cls: "muted" }) +
        S.tx(240, 139, "C rural, D suburban, E urban", { anchor: "middle", size: 9.5, cls: "muted" }) +
        S.tx(80, 34, "stop", { anchor: "middle", size: 9.5, cls: "muted" }) +
        S.tx(240, 34, "lane change", { anchor: "middle", size: 9.5, cls: "muted" }), 320, 150, "Plan views comparing a stop maneuver with a lane change maneuver");
    },
    caption: "Stop maneuvers (A, B) need less distance than path or speed changes (C to E) at the same speed.",
    cite: "42-2.01; 42-2.02; Figure 42-2A; Eq. 42-1.1, Eq. 42-2.1",
    typical: "Consider DSD where reaction time may exceed 2.5 s: exit or entrance gores, lane drops, left-side freeway entrances or exits, railroad grade crossings, approaches to detours or lane closures, toll plazas, and intersections that need unusual maneuvers (42-2.02). At 60 mph Figure 42-2A gives A 610, B 1150, C 990, D 1125, E 1280 ft. The table starts at 30 mph.",
    mistakes: [
      "Choosing a stop maneuver (A or B) where the driver must change speed, path or direction rather than stop.",
      "Treating DSD as a minimum everywhere. It is considered at complex locations; SSD is the minimum."
    ]
  });

  H.define("al-availSight", {
    title: "Available sight distance (ft)",
    group: "sight",
    what: "Optional. The sight distance actually provided at the location, measured on the plans. The page compares it with the design SSD and the selected DSD.",
    where: "Measure from a 3.5-ft eye to a 2-ft object (42-1.02) along the travel path: on a crest, graphically on the profile; on a horizontal curve, from the HSO calculation or graphically in plan. On a two-lane highway check both directions (44-3.01(01)).",
    sketch: function (S) {
      var c = crest(S, 10, 310, 84, 0.000556), ex = 40, ox = 280;
      var ey = c.y(ex) - 12, oy = c.y(ox);
      return S.svg(c.svg +
        S.ln(ex, c.y(ex), ex, ey, "ink") + S.circle(ex, ey, 3, "ink-f") +
        S.rect(ox - 3, oy - 7, 6, 7, "obj") +
        S.ln(ex, ey, ox, oy - 7, "dimc") +
        S.ln(ex, ey - 4, ex, 34, "thin muted") + S.ln(ox, oy - 11, ox, 34, "thin muted") +
        S.dim(ex, 30, ox, 30, "available sight distance", { size: 11 }) +
        S.tx(ex + 4, ey - 6, "eye 3.5 ft", { size: 9.5 }) +
        S.tx(ox - 6, oy - 12, "object 2 ft", { anchor: "end", size: 9.5 }) +
        S.tx(160, 118, "crest vertical curve", { anchor: "middle", size: 9.5, cls: "muted" }), 320, 140, "Profile over a crest with the sight line from eye to object");
    },
    caption: "Profile: the distance at which a 2-ft object is just visible from a 3.5-ft eye.",
    cite: "42-1.02; 44-3.01(01) item 1d; 305-5.03",
    typical: "Compare with Figure 42-1A, e.g. 495 ft at 55 mph. SSD longer than the minimum should be used where practical (42-1.02).",
    mistakes: [
      "Using a 3.5-ft object. That is the passing sight distance object height (42-3.02); SSD and DSD use 2 ft.",
      "Checking only one direction of travel on a two-lane road."
    ]
  });

  // ---------------------------------------------------------------- superelevation
  H.define("al-rateChoice", {
    title: "Rate to use",
    group: "horizontal",
    what: "How the page turns the table into a design rate e for your radius. <b>Next tabulated rate</b> uses the row whose minimum radius your R meets (conservative). <b>Interpolated</b> interpolates between rows and rounds up to 0.1%. <b>Enter my own rate</b> uses the value in the next box.",
    where: "Figures 305-4B to 305-4E list the minimum radius for each rate e at each design speed. The IDM examples read Figure 305-4E approximately (Examples 305-4.1 to 305-4.3). Rates between NC and RC follow Figure 305-4E notes 3 and 4: RC (+2.0) is preferred for e = 0% or +1.5%, and NC (−2.0) for e = −1.5%.",
    cite: "305-4.01(03); 305-4.02(03); Figures 305-4B to 305-4E",
    typical: "Next tabulated rate for most work.",
    mistakes: [
      "Choosing a rate below the table value for the radius. The page flags a user rate that falls below the table."
    ]
  });

  H.define("al-userRate", {
    title: "Your superelevation rate, e (%)",
    group: "horizontal",
    what: "The full design superelevation rate, in percent, sloping down toward the inside of the curve. Used only when <b>Rate to use</b> is set to <b>Enter my own rate</b>.",
    where: "Use it to check an existing or proposed rate. It should be at least the rate the table gives for the radius and design speed, and not more than e<sub>max</sub>.",
    sketch: function (S) {
      return S.svg(superSection(S, 26) +
        S.ln(70, 92, 250, 92, "thin muted") + S.ln(250, 92, 250, 66, "hl") +
        S.tx(244, 88, "e (%)", { anchor: "end", cls: "hl", bold: true, size: 12 }) +
        S.tx(160, 120, "full superelevation", { anchor: "middle", size: 9.5, cls: "muted" }) +
        S.tx(10, 18, "← inside of curve", { size: 9.5, cls: "muted" }), 320, 140, "Superelevated cross section with the rate e marked");
    },
    caption: "Cross section at full superelevation, falling toward the inside of the curve.",
    cite: "305-4.01(03); 305-4.02(03); Eq. 305-4.1",
    typical: "Up to e<sub>max</sub> from Figure 305-4A.",
    mistakes: [
      "Entering a decimal (0.05) instead of a percent (5.0).",
      "Entering a value here without selecting <b>Enter my own rate</b>."
    ]
  });

  H.define("al-axis", {
    title: "Axis of rotation",
    group: "horizontal",
    what: "The line the pavement rotates about to reach full superelevation. The axis keeps the normal profile through the curve (305-1.0). Rotating about an edge makes the whole traveled way rotate as one plane, so the runoff and tangent runout get longer.",
    where: "<b>Centerline / crown</b>: typical for undivided highways; gives the least elevation difference between the pavement edges and their normal profiles. <b>Inside edge</b> or <b>outside edge</b> of traveled way: acceptable to meet field conditions such as drainage on a curbed facility or roadside development (305-4.03(01)). On a two-lane road with an auxiliary lane, rotate about the centerline of the two through lanes.",
    sketch: function (S) {
      var rows = [["Centerline", "c"], ["Inside edge", "i"], ["Outside edge", "o"]], out = "";
      out += S.tx(100, 14, "← inside of curve", { size: 9.5, cls: "muted" }) + S.tx(300, 14, "outside of curve →", { anchor: "end", size: 9.5, cls: "muted" });
      rows.forEach(function (r, i) {
        var y = 44 + i * 48, s = 12, p, L, R;
        if (r[1] === "c") { p = [200, y]; L = [100, y + s]; R = [300, y - s]; }
        else if (r[1] === "i") { p = [100, y + 6]; L = p; R = [300, y + 6 - 2 * s]; }
        else { p = [300, y + 6]; L = [100, y + 6 + 2 * s]; R = p; }
        out += S.pline([[100, y + 6], [200, y], [300, y + 6]], "thin muted");
        out += S.poly([L, R, [R[0], R[1] + 6], [L[0], L[1] + 6]], "pave") + S.ln(L[0], L[1], R[0], R[1], "edge");
        out += S.ln(p[0], p[1] - 9, p[0], p[1] + 9, "hl") + S.circle(p[0], p[1], 4.5, "hl-f");
        out += S.tx(8, y + 4, r[0], { size: 10.5, bold: true });
      });
      out += S.tx(312, 196, "dashed = normal crown; dot = axis (holds its profile)", { anchor: "end", size: 9.5, cls: "muted" });
      return S.svg(out, 320, 202, "Three cross sections rotated about the centerline, the inside edge and the outside edge");
    },
    caption: "Cross sections at full superelevation; the orange dot is the pivot, which stays at its normal elevation.",
    cite: "305-1.0 item 1; 305-4.03(01), 305-4.03(02); Eq. 305-4.1",
    typical: "Centerline for two-lane and undivided roads. Divided highways (305-4.03(02)): median under 15 ft, rotate about the centerline of the whole section; 15 to 60 ft, rotate each roadway about its median edge (typical for multilane divided highways); 60 ft or more, the centerline or crown of each roadway or the median edge; with concrete median barrier, rotate about the barrier edges. For a roadway rotated about its median edge, use inside edge for the roadway on the inside of the curve and outside edge for the roadway on the outside.",
    mistakes: [
      "Choosing an edge axis without allowing for the longer transition. The rotated width doubles, so Lr and TR double too.",
      "On a divided highway, choosing centerline when each roadway rotates about its median edge."
    ]
  });

  H.define("al-lanesEachSide", {
    title: "Lanes each side of the crown",
    group: "horizontal",
    what: "The number of travel lanes between the crown and one edge of the traveled way. It sets n<sub>1</sub>, the number of lanes rotated in Equation 305-4.1: n<sub>1</sub> equals this number for centerline rotation and twice this number for rotation about an edge.",
    where: "Count lanes from the typical section. A two-lane, two-way road has 1. A four-lane undivided road crowned at the centerline has 2. A four-lane divided highway has each roadway crowned at its own centerline (45-1.01(02)), so enter 1 for each roadway and pick the median-edge axis.",
    sketch: function (S) {
      var x = S.xsec({ cx: 160, y: 66, lanes: [2, 2], lw: 38, sh: [18, 18], slope: 3, fore: [24, 24] });
      var p = x.pts;
      return S.svg(x.svg + S.poly([[160, 66], [p.eR[0], p.eR[1]], [p.eR[0], p.eR[1] + 9], [160, 75]], "hlf") +
        S.ln(160, 36, 160, 62, "thin muted") + S.ln(p.eR[0], 36, p.eR[0], p.eR[1] - 4, "thin muted") + S.ln(p.eL[0], 36, p.eL[0], p.eL[1] - 4, "thin muted") +
        S.dim(160, 32, p.eR[0], 32, "2 lanes", {}) +
        S.dim(p.eL[0], 32, 160, 32, "2 lanes", { cls: "dimc" }) +
        S.tx(160, 14, "crown", { anchor: "middle", size: 9.5, cls: "muted" }) +
        S.tx(10, 124, "Centerline axis: n1 = 2.  Edge axis: n1 = 4.", { size: 9.5 }), 320, 132, "Cross section with two lanes on each side of the crown");
    },
    caption: "Count from the crown to one edge; this example is 2.",
    cite: "Eq. 305-4.1 (n<sub>1</sub>); 305-4.04(01); Figure 305-4F (b<sub>w</sub>)",
    typical: "1 for a two-lane road or for each roadway of a four-lane divided highway; 2 for a four-lane undivided road.",
    mistakes: [
      "Entering the total lanes for both directions with centerline rotation. That doubles n<sub>1</sub> and the runoff.",
      "Using Equation 305-4.1 where the cross slope is not the same across all rotated lanes (e.g. a three-lane roadway crowned between lanes). The IDM calls for incremental calculations there (305-4.04(01) item 2)."
    ]
  });

  H.define("al-normalCrossSlope", {
    title: "Normal cross slope, S<sub>normal</sub> (%)",
    group: "horizontal",
    what: "The travel-lane cross slope on the tangent (normal crown), in percent. It sets the tangent runout: TR = Lr × S<sub>normal</sub> / e (Eq. 305-4.2).",
    where: "From the typical section. On State highways, two-lane roads are crowned at the centerline with 2% each way (45-1.01(02)).",
    sketch: function (S) {
      var x = S.xsec({ cx: 160, y: 60, lanes: [1, 1], lw: 90, sh: [24, 24], slope: 14, shSlope: 4, hl: "lane", hlSide: "R", fore: [20, 22] });
      var p = x.pts;
      return S.svg(x.svg +
        S.ln(160, 60, 256, 60, "thin muted") + S.ln(p.eR[0], 60, p.eR[0], p.eR[1], "hl") +
        S.tx(p.eR[0] + 6, 66, "Snormal", { cls: "hl", bold: true, size: 11 }) +
        S.tx(160, 46, "crown", { anchor: "middle", size: 9.5, cls: "muted" }) +
        S.tx(10, 124, "normal crown on the tangent (slope exaggerated)", { size: 9.5, cls: "muted" }), 320, 132, "Crowned cross section with the lane cross slope marked");
    },
    caption: "Cross section on the tangent: the travel-lane slope away from the crown.",
    cite: "Eq. 305-4.2; 45-1.01(02)",
    typical: "2% (typical per Eq. 305-4.2 and 45-1.01(02)). An existing bridge to remain may keep 1.5%; a non-State aggregate surface uses 6% (45-1.01(02)).",
    mistakes: [
      "Entering the shoulder slope (4%) instead of the travel-lane slope.",
      "Entering a decimal (0.02) instead of a percent (2)."
    ]
  });

  H.define("al-routeSystem", {
    title: "Route system (adjustment factor b<sub>w</sub>)",
    group: "horizontal",
    what: "Sets the adjustment factor b<sub>w</sub> in Equation 305-4.1. All routes on the State highway system use b<sub>w</sub> = 1.0. Reduced factors from Figure 305-4F apply off the State system, or at restricted locations where physical constraints prevent the full transition length.",
    where: "Figure 305-4F, off-system or restricted locations: 1 lane rotated 1.0; 1.5 lanes 0.83; 2 lanes 0.75; 2.5 lanes 0.70; 3 lanes 0.67; 3.5 lanes 0.64. Examples of restrictions are bridges and ramp terminals (Figure 305-4F note 1).",
    cite: "Eq. 305-4.1 note 3; Figure 305-4F; 305-4.04(03) item 1",
    typical: "State highway system (b<sub>w</sub> = 1.0). The factors only affect multilane rotation; with one lane rotated, b<sub>w</sub> = 1.0 either way.",
    mistakes: [
      "Shortening the runoff on a multilane road by changing the tangent/curve split. Use b<sub>w</sub> instead (305-4.04(03) item 1, Figure 305-4F note 1)."
    ]
  });

  H.define("al-runoffOnTangent", {
    title: "Runoff on tangent",
    group: "horizontal",
    what: "The share of the superelevation runoff Lr placed on the tangent before the PC; the rest is on the curve. The standard split is 2/3 on the tangent and 1/3 on the curve.",
    where: "305-4.04(03) item 1: on two-lane, two-way roads, the split may be adjusted in steps down to 50% on the tangent and 50% on the curve to meet field conditions. On multilane roads, apply b<sub>w</sub> instead of changing the split. Compound curves also use 2/3 and 1/3; adjustments should be coordinated with the Highway Engineering Division Highway Design Office (item 2). Each curve of a reverse curve uses the simple-curve split (item 3).",
    sketch: function (S) {
      var r = S.planRoad({ y: 92, lanes: [1, 1], lw: 14, x1: 10, x2: 310 });
      var x0 = 30, xr = 80, xpc = 200, xf = 260;
      return S.svg(r.svg +
        S.ln(xpc, 40, xpc, 128, "ink") + S.tx(xpc, 142, "PC", { anchor: "middle", size: 10, bold: true }) +
        S.rect(x0, 52, xr - x0, 14, "pave") + S.rect(x0, 52, xr - x0, 14, "dimc") + S.tx((x0 + xr) / 2, 46, "TR", { anchor: "middle", size: 10, cls: "dimc", bold: true }) +
        S.rect(xr, 52, xpc - xr, 14, "hlf") + S.rect(xr, 52, xpc - xr, 14, "hl") + S.tx((xr + xpc) / 2, 46, "2/3 Lr", { anchor: "middle", size: 11, cls: "hl", bold: true }) +
        S.rect(xpc, 52, xf - xpc, 14, "pave") + S.rect(xpc, 52, xf - xpc, 14, "dimc") + S.tx((xpc + xf) / 2, 46, "1/3 Lr", { anchor: "middle", size: 10, cls: "dimc", bold: true }) +
        S.dim(xr, 26, xf, 26, "Lr", { cls: "dimc", size: 10 }) +
        S.tx(110, 142, "tangent", { anchor: "middle", size: 9.5, cls: "muted" }) + S.tx(256, 142, "curve", { anchor: "middle", size: 9.5, cls: "muted" }), 320, 150, "Runoff length split about the PC with two thirds on the tangent");
    },
    caption: "The orange part of the runoff lies on the tangent ahead of the PC.",
    cite: "305-4.04(03)",
    typical: "2/3 on the tangent. Two-lane, two-way roads may go down to 50%.",
    mistakes: [
      "Reducing the tangent share on a multilane road. Use b<sub>w</sub> there instead.",
      "Placing all of the runoff on the tangent or all on the curve. The first forces drivers to steer against the curve on the tangent; the second gives too much lateral acceleration entering the curve (305-4.04(03))."
    ]
  });

  H.define("al-pcStation", {
    title: "PC station",
    group: "horizontal",
    what: "Optional. The station of the point of curvature. The page uses it to station the transition points on the approach end: begin tangent runout, begin runoff, remove crown, PC and full superelevation.",
    where: "From the horizontal curve data (PC = PI − T, Figure 305-6B). Enter 45+00.00 or 4500. The departure end mirrors the approach about the PT.",
    sketch: function (S) {
      var a = arc(160, -170, 270, 90, 62, 20), out = "";
      out += S.ln(10, 100, 160, 100, "edge") + S.pline(a, "edge");
      [[40, "NC"], [80, "0%"], [120, "RC"]].forEach(function (k) {
        out += S.ln(k[0], 94, k[0], 106, "ink") + S.tx(k[0], 88, k[1], { anchor: "middle", size: 9.5, cls: "muted" });
      });
      out += S.ln(160, 84, 160, 116, "hl") + S.circle(160, 100, 4, "hl-f");
      out += S.tx(160, 132, "PC Sta. 45+00.00", { anchor: "middle", cls: "hl", bold: true, size: 11 });
      out += S.tx(40, 122, "transition points", { size: 9.5, cls: "muted" });
      out += S.tx(250, 112, "curve", { size: 9.5, cls: "muted" });
      out += S.tx(10, 20, "Stations before the PC follow from TR, Lr and the split.", { size: 9.5, cls: "muted" });
      return S.svg(out, 320, 145, "Plan view of a tangent with transition points leading to the PC");
    },
    caption: "Plan view: the transition points are stationed back from the PC.",
    cite: "Figure 305-6B; 305-4.04(03)",
    mistakes: [
      "Entering the PI station. The PC is T before the PI.",
      "Entering the PT and reading the results as the departure end. The page stations the approach end from the PC."
    ]
  });

  // ---------------------------------------------------------------- vertical curve
  H.define("al-gradeIn", {
    title: "Grade in, G<sub>1</sub> (%)",
    group: "vertical",
    what: "The tangent grade approaching the PVI, in percent with sign. An upgrade in the direction of stationing is plus (+); a downgrade is minus (−).",
    where: "From the profile: rise or fall in feet per 100 ft of horizontal distance (Figure 44-3E). The page uses A = G<sub>2</sub> − G<sub>1</sub>: a negative A is a crest curve and a positive A is a sag curve.",
    sketch: function (S) {
      return S.svg(vcBase(S, { g1: true }) +
        S.tx(40, 44, "G1 = −1.75%", { cls: "hl", bold: true, size: 11 }) +
        S.tx(260, 34, "G2 = +2.25%", { anchor: "middle", cls: "dimc", size: 10.5 }) +
        S.arrow(200, 14, 300, 14, "ink") + S.tx(196, 18, "stationing", { anchor: "end", size: 9.5, cls: "muted" }), 320, 150, "Profile of a sag vertical curve with the incoming grade highlighted");
    },
    caption: "Profile: G<sub>1</sub> is the grade before the PVI, signed in the direction of stationing.",
    cite: "Figure 44-3E; Figure 44-3F; 44-1.02, 44-1.03",
    typical: "Maximum grade comes from Chapters 53 to 56 (44-1.02). A minimum of about 0.5% is desirable on uncurbed roads and on curbed streets (44-1.03). Example 44-3.1 uses G<sub>1</sub> = −1.75%.",
    mistakes: [
      "Dropping the minus sign on a downgrade, which turns a sag into a crest.",
      "Entering a decimal (−0.0175) instead of a percent (−1.75).",
      "Signing the grade for the opposite direction of travel. Use the direction of stationing."
    ]
  });

  H.define("al-gradeOut", {
    title: "Grade out, G<sub>2</sub> (%)",
    group: "vertical",
    what: "The tangent grade leaving the PVI, in percent with sign. An upgrade in the direction of stationing is plus (+); a downgrade is minus (−).",
    where: "From the profile, as for G<sub>1</sub> (Figure 44-3E). A = G<sub>2</sub> − G<sub>1</sub>; for example G<sub>1</sub> = −1.75% and G<sub>2</sub> = +2.25% give A = +4.0%, a sag curve.",
    sketch: function (S) {
      return S.svg(vcBase(S, { g2: true }) +
        S.tx(40, 44, "G1 = −1.75%", { cls: "dimc", size: 10.5 }) +
        S.tx(250, 30, "G2 = +2.25%", { anchor: "middle", cls: "hl", bold: true, size: 11 }) +
        S.arrow(40, 14, 140, 14, "ink") + S.tx(144, 18, "stationing", { size: 9.5, cls: "muted" }), 320, 150, "Profile of a sag vertical curve with the outgoing grade highlighted");
    },
    caption: "Profile: G<sub>2</sub> is the grade after the PVI, signed in the direction of stationing.",
    cite: "Figure 44-3E; Figure 44-3F",
    typical: "Example 44-3.1 uses G<sub>2</sub> = +2.25%.",
    mistakes: [
      "Entering the grade as seen by a driver coming the other way, which flips its sign.",
      "Entering A instead of G<sub>2</sub>."
    ]
  });

  H.define("al-pviStation", {
    title: "PVI station",
    group: "vertical",
    what: "The station of the point of vertical intersection, where the two tangent grades meet. Enter 13+80 or 1380.",
    where: "From the profile. For a symmetrical curve, PVC = PVI − L/2 and PVT = PVI + L/2 (Example 44-3.1).",
    sketch: function (S) {
      return S.svg(vcBase(S, { hlTick: "PVI" }) +
        S.circle(VC.pvi[0], VC.pvi[1], 4.5, "hl-f") + S.ln(VC.pvi[0], VC.pvi[1], VC.pvi[0], 134, "hl") +
        S.tx(VC.pvi[0], 145, "PVI Sta.", { anchor: "middle", cls: "hl", bold: true, size: 11 }) +
        S.dim(VC.pvc[0], 22, VC.pvi[0], 22, "L/2", { cls: "dimc", size: 10 }) + S.dim(VC.pvi[0], 22, VC.pvt[0], 22, "L/2", { cls: "dimc", size: 10 }), 320, 150, "Profile with the PVI station marked and half curve lengths each side");
    },
    caption: "Profile: the PVI is where the tangents intersect; the curve is centered on it.",
    cite: "Figure 44-3E; Figure 44-3G (Example 44-3.1)",
    typical: "Example 44-3.1: PVI 13+80 with L = 500 ft gives PVC 11+30 and PVT 16+30.",
    mistakes: [
      "Entering the station of the low or high point. The PVI is the intersection of the tangents."
    ]
  });

  H.define("al-pviElev", {
    title: "PVI elevation (ft)",
    group: "vertical",
    what: "The elevation of the PVI on the tangent grades, in feet. The curve passes M = (G<sub>2</sub> − G<sub>1</sub>) L / 800 above or below this point.",
    where: "From the profile grade line, at the intersection of the tangents.",
    sketch: function (S) {
      var cy = vcY(VC.pvi[0]);
      return S.svg(vcBase(S) +
        S.circle(VC.pvi[0], VC.pvi[1], 4.5, "hl-f") +
        S.leader(40, 118, VC.pvi[0] - 3, VC.pvi[1], "PVI elevation", { cls: "hl", size: 11 }) +
        S.dim(VC.pvi[0] + 14, cy, VC.pvi[0] + 14, VC.pvi[1], "M", { cls: "dimc", side: 1, size: 10 }) +
        S.ln(VC.pvi[0] + 3, cy, VC.pvi[0] + 18, cy, "thin muted") + S.ln(VC.pvi[0] + 3, VC.pvi[1], VC.pvi[0] + 18, VC.pvi[1], "thin muted") +
        S.tx(10, 20, "PVI elev. is on the tangents, not on the curve", { size: 9.5, cls: "muted" }), 320, 150, "Profile with the PVI elevation marked below the curve");
    },
    caption: "Profile: the PVI sits on the tangent grades; the finished curve is offset M from it.",
    cite: "Figure 44-3E (M); Figure 44-3F",
    typical: "Example 44-3.1: 577.50 ft at PVI 13+80.",
    mistakes: [
      "Entering the finished-grade (curve) elevation at the PVI station. That is off by M."
    ]
  });

  H.define("al-vcLength", {
    title: "Proposed curve length, L (ft)",
    group: "vertical",
    what: "The horizontal length of the vertical curve from PVC to PVT, in feet. Leave it blank to use the governing minimum.",
    where: "All measurements on a vertical curve are horizontal, not along the grade (44-3.03 item 2). The minimum is the larger of L = K × A (Eq. 44-3.2) and 3V for crests or 3.2V for sags (44-3.01(01) item 3, 44-3.02(01) item 3).",
    sketch: function (S) {
      return S.svg(vcBase(S) +
        S.ln(VC.pvc[0], VC.pvc[1] - 4, VC.pvc[0], 24, "thin muted") + S.ln(VC.pvt[0], VC.pvt[1] - 4, VC.pvt[0], 24, "thin muted") +
        S.dim(VC.pvc[0], 22, VC.pvt[0], 22, "L (horizontal)", {}), 320, 150, "Profile with the curve length from PVC to PVT dimensioned");
    },
    caption: "Profile: L is the horizontal distance from PVC to PVT.",
    cite: "Figure 44-3E; 44-3.01(01), 44-3.02(01); Eq. 44-3.2; 44-3.03",
    typical: "Every reasonable effort should be made to provide a K above the table value (44-3.01(01), 44-3.02(01)). On curbed sections, K ≤ 167 keeps at least 0.3% grade about 50 ft from the high or low point; uncurbed, K ≤ 300 gives 0.15% (44-3.01(03), 44-3.02(03)).",
    mistakes: [
      "Entering half the curve length (PVC to PVI).",
      "Entering the K value instead of L."
    ]
  });

  H.define("al-vcCriterion", {
    title: "Sight distance criterion (vertical curve)",
    group: "vertical",
    what: "The sight distance the curve must provide, which selects the K value. <b>SSD, minimum K</b> is the lowest acceptable value (Figure 44-3A for crests, 44-3C for sags). <b>SSD, desirable K</b> (crest only) uses a longer SSD. <b>DSD maneuver A to E</b> uses decision sight distance (Figures 44-3B and 44-3D).",
    where: "Crest K uses a 3.5-ft eye and a 2-ft object (44-3.01(01)). Sag K uses a 2-ft headlight with a 1° upward beam (44-3.02). Use DSD only at locations listed in 42-2.02; see the avoidance maneuver entry for A to E.",
    sketch: function (S) {
      var c = crest(S, 6, 154, 70, 0.0028), out = "";
      out += c.svg;
      var ey = c.y(26) - 12, oy = c.y(134) - 6;
      out += S.circle(26, ey, 2.5, "ink-f") + S.rect(131, oy, 6, 6, "obj") + S.ln(26, ey, 134, oy, "dimc");
      out += S.tx(80, 14, "crest: eye 3.5 ft, object 2 ft", { anchor: "middle", size: 9.5 });
      out += S.dim(26, 40, 134, 40, "S", { size: 12 });
      // sag panel: road low in the middle, headlight beam meets the rising road ahead
      var pts = [], sag = function (x) { return 100 - 0.006 * (x - 240) * (x - 240); };
      for (var x = 166; x <= 314.01; x += 148 / 30) pts.push([x, sag(x)]);
      out += S.profile(pts, "edge", 150);
      out += S.car(186, sag(186) - 5, 1) + S.ln(195, 79, 306, 73.5, "dimc");
      out += S.tx(240, 14, "sag: headlight 2 ft, 1° beam", { anchor: "middle", size: 9.5 });
      out += S.dim(186, 40, 306, 40, "S", { size: 12 });
      out += S.tx(160, 136, "K = L / A for the chosen S (SSD or DSD)", { anchor: "middle", size: 9.5, cls: "muted" });
      return S.svg(out, 320, 145, "Crest and sag profiles with the sight distance S that sets K");
    },
    caption: "The criterion picks S; the K tables convert S into the required curve length per percent of A.",
    cite: "44-3.01(01), 44-3.01(02), 44-3.02(01), 44-3.02(02); Figures 44-3A to 44-3D",
    typical: "SSD, minimum K for most curves (e.g. crest K = 114, sag K = 115 at 55 mph). Figure 44-3C has no 15 mph row, and the DSD figures cover 20 to 65 mph.",
    mistakes: [
      "Expecting a desirable K for a sag curve. Figure 44-3C gives a single K.",
      "Checking truck K. The higher truck eye and headlight heights offset the longer stopping distance, so it need not be checked (44-3.01(01) item 2, 44-3.02(01) item 2)."
    ]
  });

  H.define("al-curbed", {
    title: "Curbed section or concrete barrier?",
    group: "vertical",
    what: "Answer Yes if the roadway has curbs or concrete barrier along the curve. It selects the drainage limit on K: 167 for curbed or barrier sections, 300 for uncurbed sections.",
    where: "From the typical section. With curbs or barrier, water runs along the gutter or barrier, so a flat spot near the high or low point can pond.",
    sketch: function (S) {
      var x = S.xsec({ cx: 160, y: 62, lanes: [1, 1], lw: 70, sh: [16, 16], fore: [30, 30] });
      var p = x.pts;
      var curb = function (q, d) { return S.poly([[q[0], q[1]], [q[0], q[1] - 9], [q[0] + 5 * d, q[1] - 9], [q[0] + 5 * d, q[1] + 6]], "hlf2"); };
      return S.svg(x.svg + curb(p.sL, -1) + curb(p.sR, 1) +
        S.leader(312, 30, p.sR[0] + 3, p.sR[1] - 8, "curb or concrete barrier", { cls: "hl", anchor: "end", size: 10.5 }) +
        S.tx(10, 120, "Yes: K ≤ 167 for drainage.  No: K ≤ 300.", { size: 9.5 }), 320, 130, "Cross section with curbs at both edges");
    },
    caption: "Cross section: curbs (or concrete barrier) trap water on the pavement edge.",
    cite: "44-3.01(03); 44-3.02(03)",
    typical: "Curbed or barrier: K ≤ 167 gives at least 0.3% grade about 50 ft either side of the apex or low point; a sag should also have at least 0.25 ft of elevation difference between the low point and the points 50 ft either side (44-3.02(03)). Above 167, evaluate drainage near the apex; in a sag, flanking inlets may be needed. Uncurbed: K ≤ 300 gives 0.15% at 50 ft (desirable).",
    mistakes: [
      "Answering No for a section with concrete median barrier. Barrier counts like a curb for drainage."
    ]
  });

  H.define("al-stationInterval", {
    title: "Station table interval (ft)",
    group: "vertical",
    what: "The spacing of rows in the elevation table. The table always adds the PVC, PVI, PVT and the high or low point.",
    where: "Rows fall on even multiples of the interval (e.g. 11+50, 12+00 for 50 ft). Example 44-3.1 instead steps 50 ft from the PVC (11+30, 11+80, ...).",
    sketch: function (S) {
      var out = vcBase(S);
      for (var x = 100; x <= 220; x += 30) { var y = vcY(x); out += S.ln(x, y - 8, x, y + 8, "hl"); }
      out += S.dim(100, 24, 130, 24, "interval", { size: 10.5 });
      out += S.ln(100, 28, 100, vcY(100) - 10, "thin muted") + S.ln(130, 28, 130, vcY(130) - 10, "thin muted");
      return S.svg(out, 320, 150, "Profile with elevation rows at equal station intervals");
    },
    caption: "Profile: one elevation row at every interval along the curve.",
    cite: "Figure 44-3G (Example 44-3.1, 50-ft increments)",
    typical: "50 ft, as in Example 44-3.1.",
    mistakes: [
      "Entering a station (e.g. 0+50) instead of a distance in feet."
    ]
  });

  // Point P sketch, shared by the station and elevation entries.
  function fixedPoint(S, which) {
    var px = 118, py = vcY(px);
    var out = vcBase(S);
    out += S.rect(px - 12, 18, 24, 8, "obj");
    out += S.tx(px + 16, 25, "structure", { size: 9.5, cls: "muted" });
    out += S.dim(px, 27, px, py - 3, "", { cls: "dimc" }) + S.tx(px - 5, (27 + py) / 2 + 4, "clearance", { anchor: "end", size: 9.5, cls: "dimc" });
    out += S.circle(px, py, 4.5, which ? "hl-f" : "ink-f");
    if (which === "sta") {
      out += S.ln(px, py + 4, px, 134, "hl") + S.tx(px, 145, "Sta. P", { anchor: "middle", cls: "hl", bold: true, size: 11 });
    } else {
      out += S.ln(px - 5, py, 26, py, "hl") + S.tx(28, py - 4, "Elev. P", { cls: "hl", bold: true, size: 11 });
    }
    out += S.dim(px, 120, VC.pvi[0], 120, "D", { cls: "dimc", side: -1, off: 3, size: 10 });
    return out;
  }

  H.define("al-fixedPointSta", {
    title: "Point P station",
    group: "vertical",
    what: "Optional. The station of a point the curve must pass through, for example to tie into an existing crossroad or to clear a structure (44-3.03 item 4). Enter it with the elevation at P; the page solves for L.",
    where: "Take the station of the controlling point. For clearance under a bridge, use the edge of the structure where clearance is critical: in Example 44-3.2, P = bridge centerline station − half the bridge width = 47+46 − 10 = 47+36.",
    sketch: function (S) { return S.svg(fixedPoint(S, "sta"), 320, 150, "Profile with the curve passing through point P under a structure"); },
    caption: "Profile: the curve must pass through P; D is the distance from P to the PVI.",
    cite: "44-3.03 item 4; Figure 44-3 I; Figure 44-3J (Example 44-3.2)",
    typical: "Example 44-3.2: G<sub>1</sub> = −1.5%, G<sub>2</sub> = +2.0%, PVI 49+10 at 642.10, P = 47+36 at 648.50 gives L = 1480.48 ft.",
    mistakes: [
      "Using the bridge centerline station when the critical clearance is at the bridge edge.",
      "Accepting the shorter of two solutions. Desirably use the longer L, provided it meets the stopping sight distance K (Figure 44-3 I note)."
    ]
  });

  H.define("al-fixedPointElev", {
    title: "Required elevation at P (ft)",
    group: "vertical",
    what: "Optional. The profile-grade elevation the curve must have at point P, in feet.",
    where: "Work it out from the control. For clearance under a structure, Example 44-3.2 uses Elev. P = top of bridge − bridge depth − clearance = 669.00 − 4.00 − 16.5 = 648.50.",
    sketch: function (S) { return S.svg(fixedPoint(S, "elev"), 320, 150, "Profile with the required elevation at point P below a structure"); },
    caption: "Profile: the required road elevation at P, below the structure by the clearance.",
    cite: "44-3.03 item 4; Figure 44-3 I; Figure 44-3J (Example 44-3.2)",
    typical: "Example 44-3.2: 648.50 ft.",
    mistakes: [
      "Entering the structure elevation or the clearance instead of the road elevation at P.",
      "Choosing an elevation on the wrong side of the tangent. The offset Z (curve minus tangent) must have the same sign as G<sub>2</sub> − G<sub>1</sub>, or no curve passes through P."
    ]
  });

  // ---------------------------------------------------------------- page maps
  H.pages("alignment/horizontal-curve.html", {
    V: ["designSpeed", "Here: the page checks the minimum radius from the selected table. Figure 305-4B stops at 60 mph and Figure 305-4E at 45 mph."],
    kind: "al-superTable",
    fac: "al-curveLengthFacility",
    R: ["radius", "Here: checked against the tabulated minimum radius for V and e<sub>max</sub>."],
    delta: "al-deflection",
    pi: "al-piStation"
  });

  H.pages("alignment/hso.html", {
    V: ["designSpeed", "Here: sets S from Figure 42-1A (SSD) or Figure 42-2A (DSD, 30 mph and up)."],
    stype: "al-sightCriterion",
    scust: "al-customS",
    Rcl: "al-hsoRadius",
    off: "al-insideLaneOffset",
    L: "al-hsoCurveLength",
    obs: "al-obstructionOffset"
  });

  H.pages("alignment/sight-distance.html", {
    V: ["designSpeed", "Here: Figure 42-1A covers 15 to 70 mph; Figure 42-2A (DSD) starts at 30 mph and Figure 42-3B (PSD) at 20 mph."],
    t: "al-brakeReaction",
    a: "al-decel",
    m: "al-dsdManeuver",
    avail: "al-availSight"
  });

  H.pages("alignment/superelevation.html", {
    V: ["designSpeed", "Here: for the superelevation rate, consider a higher speed where operating speeds may exceed the design speed: 5 mph higher (grade 3 to 5%) or 10 mph higher (grade over 5%) where the minimum radius is used at the bottom of a downgrade, and up to 10 mph higher at the end of a long tangent (305-4.01(03))."],
    kind: "al-superTable",
    R: ["radius", "Here: used to look up the design superelevation rate in the selected table."],
    echoice: "al-rateChoice",
    euser: "al-userRate",
    axis: "al-axis",
    nl: "al-lanesEachSide",
    w: ["laneWidth", "Here: w in Equation 305-4.1. 12 ft is used when lanes are narrower (305-4.04(01) note 2); wider lanes lengthen the runoff in proportion."],
    sn: "al-normalCrossSlope",
    sys: "al-routeSystem",
    dist: "al-runoffOnTangent",
    pc: "al-pcStation",
    shw: ["pavedShoulder", "Here: the paved shoulder on the high (outside) side of the curve. At 4 ft or less it stays in plane with the lane; wider shoulders are sloped per 305-4.06(01), and the rollover with the lane must not exceed 8%."]
  });

  H.pages("alignment/vertical-curve.html", {
    g1: "al-gradeIn",
    g2: "al-gradeOut",
    pvi: "al-pviStation",
    pvie: "al-pviElev",
    L: "al-vcLength",
    V: ["designSpeed", "Here: selects K from Figures 44-3A to 44-3D and the 3V (crest) or 3.2V (sag) minimum length."],
    crit: "al-vcCriterion",
    curb: "al-curbed",
    inc: "al-stationInterval",
    psta: "al-fixedPointSta",
    pel: "al-fixedPointElev"
  });
})(window.IDMHelp);
