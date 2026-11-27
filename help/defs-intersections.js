/* Input help definitions: intersections calculators. See js/help.js. */
(function (H) {
  "use strict";

  // ------------------------------------------------------------ shared drawing helpers
  function note(S, x, y, s, o) {
    o = o || {};
    return S.tx(x, y, s, { size: o.size || 9.5, cls: o.cls || "muted", anchor: o.anchor, bold: o.bold });
  }
  function stopSign(S, x, y) {
    var r = 6, p = [];
    for (var i = 0; i < 8; i++) { var a = (22.5 + 45 * i) * Math.PI / 180; p.push([x + r * Math.cos(a), y + r * Math.sin(a)]); }
    return S.poly(p, "obj");
  }

  /*
   * One small ISD panel (160 x 110) at (px, py). Major road runs left-right with
   * the far lane (traffic from the right) above the near lane (traffic from the left).
   * kind: left | right | cross | yield | major | none
   */
  function isdPanel(S, px, py, kind, label) {
    function P(x, y) { return [px + x, py + y]; }
    function ln(x1, y1, x2, y2, c) { return S.ln(px + x1, py + y1, px + x2, py + y2, c); }
    var o = "", top = kind === "cross" || kind === "none" || kind === "major", bot = kind !== "major";
    o += S.rect(px + 4, py + 24, 152, 24, "pave");
    if (bot) o += S.rect(px + 70, py + 48, 20, 51, "pave") + ln(70, 48, 70, 99, "edge") + ln(90, 48, 90, 99, "edge");
    if (top) o += S.rect(px + 70, py + 4, 20, 20, "pave") + ln(70, 4, 70, 24, "edge") + ln(90, 4, 90, 24, "edge");
    o += top ? ln(4, 24, 70, 24, "edge") + ln(90, 24, 156, 24, "edge") : ln(4, 24, 156, 24, "edge");
    o += bot ? ln(4, 48, 70, 48, "edge") + ln(90, 48, 156, 48, "edge") : ln(4, 48, 156, 48, "edge");
    o += ln(4, 34.8, 156, 34.8, "cl") + ln(4, 37.2, 156, 37.2, "cl");
    var dp = kind === "yield" ? P(85, 82) : P(85, 62);
    function triL() { return S.poly([dp, P(6, 42), P(85, 42)], "hlf") + S.ln(dp[0], dp[1], px + 6, py + 42, "sight") + S.car(px + 16, py + 42, 1, "veh2"); }
    function triR() { return S.poly([dp, P(154, 30), P(85, 30)], "hlf") + S.ln(dp[0], dp[1], px + 154, py + 30, "sight") + S.car(px + 144, py + 30, -1, "veh2"); }
    function path(d, hx, hy, dx, dy) {
      return S.path(d.replace(/(-?\d+(\.\d+)?) (-?\d+(\.\d+)?)/g, function (m, a, b, c, d2) { return (px + Number(a)) + " " + (py + Number(c)); }), "hl") + S.head(px + hx, py + hy, dx, dy, "hl");
    }
    if (kind === "left" || kind === "yield" || kind === "cross") o += triL() + triR();
    if (kind === "right") o += triL();
    if (kind === "left") o += path("M 85 56 L 85 40 Q 85 30 75 30 L 60 30", 58, 30, -1, 0);
    if (kind === "yield") o += path("M 85 76 L 85 40 Q 85 30 75 30 L 60 30", 58, 30, -1, 0);
    if (kind === "right") o += path("M 85 56 L 85 50 Q 85 42 95 42 L 110 42", 112, 42, 1, 0);
    if (kind === "cross") o += path("M 85 56 L 85 12", 85, 9, 0, -1);
    if (bot && kind !== "none") {
      o += S.car(dp[0], dp[1] + 7, "up", "veh") + S.circle(dp[0], dp[1], 2, "ink-f");
      if (kind === "left" || kind === "yield") o += S.dim(px + 64, py + 48, px + 64, dp[1], kind === "yield" ? "80 ft" : "a", { cls: "dimc", size: 9.5 });
    }
    if (kind === "major") {
      o += S.poly([P(64, 42), P(140, 30), P(64, 30)], "hlf") + S.ln(px + 64, py + 42, px + 140, py + 30, "sight");
      o += S.car(px + 54, py + 42, 1, "veh") + S.car(px + 144, py + 30, -1, "veh2");
      o += path("M 64 42 Q 80 42 80 30 L 80 9", 80, 6, 0, -1);
      o += S.dim(px + 64, py + 58, px + 140, py + 58, "b", { cls: "dimc", side: 1, size: 9.5 });
    }
    if (kind === "none") {
      o += S.poly([P(40, 42), P(85, 42), P(85, 70)], "hlf") + S.ln(px + 40, py + 42, px + 85, py + 70, "sight");
      o += S.car(px + 30, py + 42, 1, "veh") + S.car(px + 85, py + 79, "up", "veh");
    }
    o += S.tx(px + 80, py + 107, label, { anchor: "middle", size: 9.5, bold: true });
    return o;
  }

  /*
   * Plan of a right-turn lane approaching a cross street (traffic left to right).
   * o: xT (taper start), xD (full width / LD start), xS (storage start), hl ("LT"|"LD"|"LS"),
   *    dims (default true), cars (default true)
   */
  function tlPlan(S, o) {
    var xT = o.xT, xD = o.xD, xS = o.xS, xE = 268, out = "";
    out += S.rect(0, 0, 320, 150, "grass");
    out += S.rect(272, 0, 26, 150, "pave");
    out += S.rect(0, 26, 320, 32, "pave") + S.poly([[xT, 58], [xD, 74], [272, 74], [272, 58]], "pave");
    out += S.ln(272, 0, 272, 26, "edge") + S.ln(272, 74, 272, 150, "edge") + S.ln(298, 0, 298, 26, "edge") + S.ln(298, 58, 298, 150, "edge");
    out += S.ln(0, 26, 272, 26, "edge") + S.ln(298, 26, 320, 26, "edge") + S.ln(298, 58, 320, 58, "edge");
    out += S.pline([[0, 58], [xT, 58], [xD, 74], [272, 74]], "edge");
    out += S.ln(0, 40.8, 272, 40.8, "cl") + S.ln(0, 43.2, 272, 43.2, "cl") + S.ln(298, 40.8, 320, 40.8, "cl") + S.ln(298, 43.2, 320, 43.2, "cl");
    out += S.ln(xD, 58, xE, 58, "lane");
    if (o.hl === "LT") out += S.poly([[xT, 58], [xD, 74], [xD, 58]], "hlf");
    if (o.hl === "LD") out += S.rect(xD, 58, xS - xD, 16, "hlf");
    if (o.hl === "LS") out += S.rect(xS, 58, xE - xS, 16, "hlf");
    out += S.ln(xE, 42, xE, 74, "barrier");
    if (o.cars !== false) {
      for (var x = xE - 12; x - 9 > xS; x -= 22) out += S.car(x, 66, 1, "veh2");
    }
    if (o.dims !== false) {
      [["LT", xT, xD], ["LD", xD, xS], ["LS", xS, xE]].forEach(function (d) {
        if (d[2] - d[1] < 2) return;
        out += S.dim(d[1], 90, d[2], 90, d[0], { cls: o.hl === d[0] ? "hl" : "dimc", side: 1, ext: d[0] === "LT" ? 30 : 14, size: 10 });
      });
    }
    return out;
  }

  // Line chart helper: series = [[x,y],...] already in px
  function axes(S, x0, y0, x1, y1) {
    return S.ln(x0, y1, x0, y0, "ink") + S.ln(x0, y0, x1, y0, "ink");
  }

  // ================================================================ ISD
  H.define("in-isdCase", {
    title: "Control and maneuver (ISD case)",
    group: "intersection",
    what: "The traffic control on the minor-road approach and the maneuver to check. Each case has its own time gap and its own leg along the minor road. On a stop-controlled approach, check the left turn and the right turn, and also the crossing where 46-10.03(01) requires it.",
    where: "<b>Stop control, left turn</b> (46-10.03(01), Figure 46-10G): departure sight triangles to the left and to the right from a decision point 18 ft (new or reconstruction) or 14.5 ft (3R) behind the edge of the travel lane. Usually governs.<br>" +
      "<b>Stop control, right turn</b> (Figure 46-10H): one triangle, looking left at traffic in the near lane. Figure 46-10H also applies at a signal where right turn on red, or a left turn from a one-way street onto a one-way street, is allowed (46-10.05).<br>" +
      "<b>Stop control, crossing</b> (Figures 46-10H, 46-10H(1)): must be checked where turns are not permitted and crossing is the only legal maneuver, where the vehicle crosses the equivalent width of more than 6 lanes, or where many heavy vehicles cross and steep grades on the far side could slow them (46-10.03(01)).<br>" +
      "<b>Yield control</b> (46-10.02, Figures 46-10C, 46-10D): the driver enters without stopping. The minor-road leg is 80 ft (turning speed 10 mph) and the time gap is the stop-control value plus 0.5 s. At a free-flowing turning roadway the eye is on the turning roadway (Figure 46-10E).<br>" +
      "<b>Left turn from the major road</b> (46-10.04, Figures 46-10I, 46-10J): a stopped left-turning vehicle looking at opposing traffic. Check it at a three-leg intersection on or near a horizontal curve or crest vertical curve, and on a divided highway (median obstructions).<br>" +
      "<b>No traffic control</b> (46-10.01, Figures 46-10A, 46-10B): low-volume, low-speed local intersections only. Not applicable to State highways.",
    sketch: function (S) {
      var o = "";
      o += isdPanel(S, 0, 0, "left", "Stop: left turn");
      o += isdPanel(S, 160, 0, "right", "Stop: right turn");
      o += isdPanel(S, 0, 110, "cross", "Stop: crossing");
      o += isdPanel(S, 160, 110, "yield", "Yield: turn");
      o += isdPanel(S, 0, 220, "major", "Left turn from major road");
      o += isdPanel(S, 160, 220, "none", "No control (local only)");
      o += S.ln(160, 4, 160, 326, "thin muted") + S.ln(4, 110, 316, 110, "thin muted") + S.ln(4, 220, 316, 220, "thin muted") + S.ln(4, 330, 316, 330, "thin muted");
      o += S.car(14, 342, 1, "veh") + note(S, 27, 346, "vehicle checked", { cls: "" });
      o += S.car(116, 342, 1, "veh2") + note(S, 129, 346, "major-road traffic", { cls: "" });
      o += S.rect(222, 337, 12, 10, "hlf") + note(S, 238, 346, "sight triangle", { cls: "" });
      return S.svg(o, 320, 354, "Six plan views of the ISD cases with their sight triangles: stop-control left turn, right turn and crossing; yield; left turn from the major road; no control");
    },
    caption: "Plan views. Orange arrow: the maneuver checked. Shaded: the sight triangle that must be kept clear.",
    cite: "46-10.01 to 46-10.05; Figures 46-10A to 46-10J",
    typical: "Stop control on the minor road is the usual case. Check at least a passenger car and a single-unit truck (46-10.03(01)).",
    mistakes: [
      "Checking only the left turn where the crossing check is required: turns prohibited, more than 6 equivalent lanes, or heavy trucks with steep grades on the far side (46-10.03(01)).",
      "Using the no-control case on a State highway, or at an oblique-angle intersection. 46-10.06 calls for at least stop-control sight distance there.",
      "Keeping yield control where its sight distance cannot be provided. The IDM says to consider a Stop sign instead (46-10.02(01))."
    ]
  });

  H.define("in-yieldTurn", {
    title: "Yield: turn direction",
    group: "intersection",
    what: "Used only for the yield case: whether the minor-road vehicle turns left or right onto the major road. A left turn adds 0.5 s (car) or 0.7 s (truck) for each additional lane from the left in excess of one. A right turn needs no lane adjustment (Figure 46-10C).",
    where: "Check each turn that is permitted. The base time gaps are the same for both turns: 8 s (passenger car), 10 s (single-unit truck) and 12 s (combination truck). The minor-road leg is 80 ft for either turn (46-10.02(02)). At a four-leg yield-controlled intersection, the crossing maneuver should also be considered (46-10.02(01)); this page does not compute it.",
    sketch: function (S) {
      var o = S.rect(0, 0, 320, 150, "grass");
      var r = S.planRoad({ y: 26, lanes: [1, 1], lw: 16, grass: false });
      o += r.svg + S.rect(140, 58, 26, 92, "pave") + S.ln(140, 58, 140, 150, "edge") + S.ln(166, 58, 166, 150, "edge");
      var dp = [159, 112];
      o += S.poly([dp, [14, 50], [159, 50]], "hlf") + S.poly([dp, [306, 34], [159, 34]], "hlf");
      o += S.ln(dp[0], dp[1], 14, 50, "sight") + S.ln(dp[0], dp[1], 306, 34, "sight");
      o += S.car(24, 50, 1, "veh2") + S.car(296, 34, -1, "veh2");
      o += S.path("M156 104 L156 44 Q156 34 146 34 L112 34", "hl") + S.head(108, 34, -1, 0, "hl");
      o += S.path("M162 104 L162 60 Q162 50 172 50 L204 50", "dimc") + S.head(208, 50, 1, 0, "dimc");
      o += S.car(159, 120, "up", "veh") + S.circle(dp[0], dp[1], 2, "ink-f");
      o += S.poly([[124, 63], [138, 63], [131, 75]], "obj");
      o += S.dim(174, 58, 174, 112, "a = 80 ft", { cls: "dimc", side: 1, size: 10 });
      o += note(S, 8, 128, "Left turn (orange):", { cls: "hl", bold: true }) + note(S, 8, 141, "look both ways; lane adj.", { cls: "" });
      o += note(S, 312, 128, "Right turn (blue):", { cls: "dimc", bold: true, anchor: "end" }) + note(S, 312, 141, "traffic from the left only", { cls: "", anchor: "end" });
      return S.svg(o, 320, 150, "Yield-controlled approach with left-turn and right-turn paths and the 80 ft minor-road leg");
    },
    caption: "Plan view: a left turn needs both triangles; a right turn needs only the one to the left.",
    cite: "46-10.02(01), 46-10.02(02); Figures 46-10C, 46-10D",
    typical: "Figure 46-10D lists the passenger-car leg along the major road from 180 ft at 15 mph to 650 ft at 55 mph.",
    mistakes: [
      "Applying the multilane adjustment to a right turn. Figure 46-10C says no adjustment is needed.",
      "Leaving out the crossing maneuver at a four-leg yield-controlled intersection (46-10.02(01))."
    ]
  });

  H.define("in-isdVehicle", {
    title: "Design vehicle (ISD)",
    group: "intersection",
    what: "The vehicle whose time gap sets the ISD: passenger car, single-unit truck or combination truck. A larger vehicle needs a longer time gap, so a longer leg along the major road.",
    where: "For stop control, check at least the passenger car and the single-unit truck, and consider the combination truck where a substantial volume of heavy vehicles enters the major road (46-10.03(01)). The design vehicle for the intersection is the largest vehicle that uses it with some frequency (46-1.07(02)). At a divided highway, if the design vehicle is larger than a passenger car, also check the smaller vehicles.",
    sketch: function (S) {
      var g = 128, o = S.profile([[0, g], [320, g]], "edge", 150);
      // truck (side view)
      o += S.rect(10, 66, 62, 54, "veh2", 2) + S.rect(72, 70, 22, 50, "veh", 2) + S.circle(22, 124, 4, "ink-f") + S.circle(82, 124, 4, "ink-f");
      // passenger car (side view)
      o += S.rect(140, 110, 52, 13, "veh", 3) + S.rect(152, 99, 26, 12, "veh", 3) + S.circle(150, 124, 4, "ink-f") + S.circle(182, 124, 4, "ink-f");
      // object: approaching car
      o += S.rect(268, 108, 44, 14, "veh2", 3) + S.circle(278, 124, 4, "ink-f") + S.circle(302, 124, 4, "ink-f");
      var eyeP = [170, 103.5], eyeT = [86, 75], obj = [282, 103.5];
      o += S.ln(eyeP[0], eyeP[1], obj[0], obj[1], "sight") + S.ln(eyeT[0], eyeT[1], obj[0], obj[1], "sight");
      o += S.circle(eyeP[0], eyeP[1], 2.5, "hl-f") + S.circle(eyeT[0], eyeT[1], 2.5, "hl-f") + S.circle(obj[0], obj[1], 2.5, "dimc-f");
      o += S.dim(102, g, 102, eyeT[1], "7.6 ft", { side: 1, size: 10 });
      o += S.dim(204, g, 204, eyeP[1], "3.5 ft", { side: 1, size: 10 });
      o += note(S, 52, 144, "Truck", { cls: "", anchor: "middle" }) + note(S, 166, 144, "Passenger car", { cls: "", anchor: "middle" }) + note(S, 314, 144, "object 3.5 ft", { cls: "dimc", anchor: "end" });
      o += note(S, 10, 16, "Larger design vehicle: longer time gap tg", { size: 10 });
      o += note(S, 10, 30, "Eye height: 3.5 ft car, 7.6 ft truck (46-10.0)");
      return S.svg(o, 320, 150, "Side view of a passenger car and a truck with their eye heights and the 3.5 ft object");
    },
    caption: "Each vehicle is checked with its own eye height against a 3.5 ft object.",
    cite: "46-10.0, 46-10.03(01), 46-1.07; Figures 46-10C, 46-10G, 46-10H(1), 46-10I",
    typical: "Stop control, left turn at 55 mph on a collector or arterial: tg = 9.0 s (car), 11.0 s (single-unit), 13.0 s (combination) (Figure 46-10G).",
    mistakes: [
      "Checking only the passenger car. 46-10.03(01) requires the single-unit truck as well.",
      "Using the truck eye height (7.6 ft) for the passenger-car check. Each vehicle uses its own eye height."
    ]
  });

  H.define("in-isdMajorClass", {
    title: "Major-road class (ISD)",
    group: "intersection",
    what: "Local road, or collector or arterial. It changes only the passenger-car time gap in the stop-control left-turn case: 7.5 s at every speed for a local road; on a collector or arterial it rises from 7.5 s at 45 mph to 10.0 s at 65 to 70 mph (Figure 46-10G).",
    where: "Use the functional classification for the design year. The Planning Division's Office of Highway Statistics classifies each public highway and street (40-1.01). Figure 46-10G does not say which road the class refers to; this page applies it to the major road, whose speed sets the ISD.",
    sketch: function (S) {
      function X(v) { return 40 + (v - 15) * 260 / 55; }
      function Y(t) { return 120 - (t - 7) * 90 / 3.5; }
      var vs = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70], ca = [7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 8.5, 9.0, 9.5, 10.0, 10.0];
      var o = axes(S, 40, 120, 306, 26);
      o += S.ln(40, Y(10), 306, Y(10), "thin muted");
      o += S.pline(vs.map(function (v) { return [X(v), Y(7.5)]; }), "dimc");
      o += S.pline(vs.map(function (v, i) { return [X(v), Y(ca[i])]; }), "hl");
      o += S.tx(122, 60, "Collector or arterial", { cls: "hl", bold: true, size: 10 });
      o += S.tx(300, 101, "Local road", { cls: "dimc", bold: true, size: 10, anchor: "end" });
      o += note(S, 36, Y(7.5) + 3, "7.5", { anchor: "end", cls: "" }) + note(S, 36, Y(10) + 3, "10.0", { anchor: "end", cls: "" });
      o += note(S, 40, 133, "15", { anchor: "middle", cls: "" }) + note(S, X(45), 133, "45", { anchor: "middle", cls: "" }) + note(S, 300, 133, "70", { anchor: "middle", cls: "" });
      o += note(S, 306, 146, "Vmajor (mph)", { anchor: "end" }) + note(S, 10, 16, "Passenger-car tg (s), stop control, left turn", { size: 10 });
      return S.svg(o, 320, 150, "Chart of passenger-car time gap against major-road speed for local roads and for collectors or arterials");
    },
    caption: "Figure 46-10G passenger-car time gaps. The two classes differ only at 50 mph and above.",
    cite: "Figure 46-10G; 40-1.01",
    typical: "At 45 mph or less the choice makes no difference (7.5 s either way).",
    mistakes: [
      "Expecting it to change truck values or other cases. It applies only to the passenger car turning left from a stop."
    ]
  });

  H.define("in-isdLanes", {
    title: "Lanes to be crossed",
    group: "intersection",
    what: "The total number of major-road lanes the maneuver crosses, counted for the case you selected. Left turn from the minor road: lanes approaching from the left. Crossing: all lanes. Left turn from the major road: opposing lanes.",
    where: "Count the major-road lanes on the plans at the intersection. The page adds 0.5 s (car) or 0.7 s (truck) for each lane in excess of one for a left turn and a left turn from the major road, and for each lane in excess of two for a crossing (Figures 46-10C, 46-10G, 46-10H(1), 46-10I). A right turn gets no lane adjustment. A median too narrow to store the design vehicle is entered separately as Narrow median (46-10.03(01)).",
    sketch: function (S) {
      var o = S.rect(0, 0, 320, 150, "grass");
      var r = S.planRoad({ y: 30, lanes: [2, 2], lw: 16, grass: false });
      o += r.svg + S.rect(0, 62, 320, 32, "hlf");
      o += S.rect(160, 94, 30, 56, "pave") + S.ln(160, 94, 160, 150, "edge") + S.ln(190, 94, 190, 150, "edge");
      o += S.car(70, 86, 1, "veh2") + S.car(110, 70, 1, "veh2") + S.car(262, 38, -1, "veh2") + S.car(232, 54, -1, "veh2");
      o += S.tx(24, 90, "1", { cls: "hl", bold: true, size: 10, anchor: "middle" }) + S.tx(24, 74, "2", { cls: "hl", bold: true, size: 10, anchor: "middle" });
      o += S.path("M182 116 L182 48 Q182 38 172 38 L134 38", "hl") + S.head(130, 38, -1, 0, "hl");
      o += S.car(182, 126, "up", "veh");
      o += note(S, 8, 112, "Left turn: 2 (from the left)", { cls: "hl", bold: true });
      o += note(S, 8, 126, "Crossing: 4 (all lanes)", { cls: "" }) + note(S, 8, 140, "Major-road left: 2 (opposing)", { cls: "" });
      o += note(S, 198, 112, "Each lane beyond the", { cls: "" }) + note(S, 198, 126, "base: +0.5 s car,", { cls: "" }) + note(S, 198, 140, "+0.7 s truck", { cls: "" });
      return S.svg(o, 320, 150, "Four-lane major road with the two lanes from the left highlighted for a left turn from the minor road");
    },
    caption: "Plan view, four-lane undivided road: a left turn from the minor road crosses 2 lanes from the left.",
    cite: "46-10.03(01); Figures 46-10C, 46-10G, 46-10H(1), 46-10I",
    typical: "Two-lane highway: 1 for a left turn, 2 for a crossing, 1 for a left turn from the major road. None of these adds time.",
    mistakes: [
      "Counting every lane for a left turn from the minor road. Count only the lanes approaching from the left.",
      "Entering only the extra lanes (for example 1 on a four-lane road). Enter the total; the page subtracts the lanes already in the base gap."
    ]
  });

  H.define("in-isdMedian", {
    title: "Narrow median",
    group: "intersection",
    what: "Yes if the major road has a median that cannot store the design vehicle. A narrow median is treated as one more lane to cross: +0.5 s (car) or +0.7 s (truck).",
    where: "Compare the median width with the design-vehicle length. If the median can store the design vehicle with 3 ft clearance to the through lanes at both ends, no separate departure triangle to the left is needed for the near roadway; instead, provide a triangle to the right for the vehicle turning left from the median roadway (46-10.03(01)). If it cannot, check the full maneuver from the minor-road approach, counting the median as a lane.",
    sketch: function (S) {
      var o = S.rect(0, 0, 320, 106, "grass");
      o += S.planRoad({ y: 14, lanes: 2, lw: 12, grass: false }).svg + S.planRoad({ y: 74, lanes: 2, lw: 12, grass: false }).svg;
      o += S.rect(0, 38, 320, 36, "grass") + S.rect(230, 38, 26, 36, "pave") + S.rect(230, 98, 26, 52, "pave") + S.ln(230, 98, 230, 150, "edge") + S.ln(256, 98, 256, 150, "edge");
      o += S.rect(0, 38, 230, 36, "hlf");
      // truck crossing northbound, stopped in the median
      o += S.rect(238, 40, 10, 40, "veh2", 1) + S.rect(238, 28, 10, 11, "veh", 2);
      o += S.dim(222, 38, 222, 74, "median width", { side: -1, size: 10 });
      o += S.dim(266, 28, 266, 80, "L", { cls: "dimc", side: 1, size: 10 });
      o += note(S, 8, 118, "Narrow (Yes): median < L + 3 ft", { cls: "" }) + note(S, 8, 132, "at each end; counts as one more", { cls: "" }) + note(S, 8, 146, "lane to cross. L = vehicle length", { cls: "" });
      return S.svg(o, 320, 150, "Divided highway with a truck that does not fit in the median");
    },
    caption: "Plan view: the truck does not fit in the median with 3 ft clear at both ends, so the median is narrow.",
    cite: "46-10.03(01); Figures 46-10H(1), 46-10I; vehicle lengths in Figure 40-4A",
    typical: "Design-vehicle lengths: P 19 ft, SU 30 ft, WB-50 55 ft, WB-65 73.5 ft (Figure 40-4A).",
    mistakes: [
      "Answering Yes on an undivided road. The option is for a median that exists but is too narrow.",
      "Answering No for a wide median and stopping there. The vehicle turning left from the median roadway needs its own sight triangle to the right (46-10.03(01))."
    ]
  });

  H.define("in-isdGrade", {
    title: "Minor-road approach grade (%)",
    group: "intersection",
    what: "The grade of the minor-road approach where the vehicle waits, in percent. Positive means an upgrade toward the major road (the departing vehicle climbs). Only an upgrade steeper than 3% adds time.",
    where: "Read it from the minor-road profile at the stop location, over the length of the design vehicle. For the left turn, the adjustment applies only if the rear wheels of the design vehicle would be on an upgrade steeper than 3% (Figure 46-10G). For the no-control case, enter the approach grade with its sign: downgrades of 4% to 6% increase the Figure 46-10A distance and upgrades of 4% to 6% can reduce it (Figure 46-10B). No adjustment is needed for the major-road grade (46-10.03(01)).",
    sketch: function (S) {
      function y(x) { return 120 - 50 * x / 220; }
      var o = S.profile([[0, 120], [220, 70], [320, 70]], "edge", 150);
      o += S.ln(0, 120, 220, 70, "hl");
      o += S.ln(60, y(60), 130, y(60), "dimc thin") + S.ln(130, y(60), 130, y(130), "dimc thin");
      o += S.tx(100, 84, "+g % upgrade", { anchor: "middle", cls: "hl", bold: true, size: 10.5 });
      o += '<g transform="rotate(-12.8 195 72)">' + S.rect(175, 58, 40, 13, "veh", 3) + S.rect(183, 49, 20, 10, "veh", 3) + S.circle(184, 72, 4, "ink-f") + S.circle(207, 72, 4, "ink-f") + "</g>";
      o += S.leader(20, 50, 182, 78, "rear wheels on the upgrade", { size: 9.5 });
      o += S.ln(222, 56, 222, 70, "barrier") + note(S, 272, 62, "major road", { anchor: "middle", cls: "" });
      o += note(S, 10, 16, "Profile along the minor road, toward the major road");
      o += note(S, 10, 140, "Upgrade over 3%: +0.2 s/% left, +0.1 s/% right or cross", { cls: "" });
      return S.svg(o, 320, 150, "Profile of a minor-road approach rising toward the major road with a stopped car on the upgrade");
    },
    caption: "Profile: an approach that climbs toward the major road is a positive grade.",
    cite: "46-10.03(01); Figures 46-10B, 46-10G, 46-10H(1), 46-10I",
    typical: "3% or flatter: no adjustment. Left turn: +0.2 s per percent; right turn and crossing: +0.1 s per percent (Figures 46-10G, 46-10H(1)). Yield control: no grade adjustment in the IDM.",
    mistakes: [
      "Entering the major-road grade. The adjustment is for the minor-road approach.",
      "Reversing the sign. An approach that climbs toward the major road is positive.",
      "Entering a decimal (0.05) instead of a percentage (5)."
    ]
  });

  H.define("in-isdSkew", {
    title: "Intersection angle (degrees)",
    group: "intersection",
    what: "The angle between the minor-road and major-road centerlines, in degrees; 90 is a right angle. A skew lengthens the path across the major road, which can add lanes to the time-gap adjustment.",
    where: "Measure the acute angle between the two centerlines on the plans. The actual path = width of the lanes crossed (plus the median, where it applies) ÷ sin(angle). If the path exceeds the lane widths by 12 ft or more, add lanes to the adjustment (46-10.06). Below 60° the sight triangles lie along the skewed approach legs (Figure 46-10K), and a driver in the acute quadrant must turn their head considerably.",
    sketch: function (S) {
      var th = 55 * Math.PI / 180, t = Math.tan(th), cx = 160, cy = 56, hw = 12 / Math.sin(th);
      function xc(y) { return cx + (cy - y) / t; }
      var o = S.rect(0, 0, 320, 150, "grass");
      o += S.poly([[xc(0) - hw, 0], [xc(0) + hw, 0], [xc(150) + hw, 150], [xc(150) - hw, 150]], "pave");
      o += S.ln(xc(0) - hw, 0, xc(40) - hw, 40, "edge") + S.ln(xc(0) + hw, 0, xc(40) + hw, 40, "edge");
      o += S.ln(xc(72) - hw, 72, xc(150) - hw, 150, "edge") + S.ln(xc(72) + hw, 72, xc(150) + hw, 150, "edge");
      o += S.rect(0, 40, 320, 32, "pave") + S.ln(0, 40, xc(40) - hw, 40, "edge") + S.ln(xc(40) + hw, 40, 320, 40, "edge");
      o += S.ln(0, 72, xc(72) - hw, 72, "edge") + S.ln(xc(72) + hw, 72, 320, 72, "edge");
      o += S.ln(0, 54.8, 320, 54.8, "cl") + S.ln(0, 57.2, 320, 57.2, "cl");
      var q = [xc(40), 40], R = 28;
      o += S.ln(q[0], q[1], q[0] + 40, q[1], "thin muted") + S.ln(q[0], q[1], q[0] + 40 * Math.cos(th), q[1] - 40 * Math.sin(th), "thin muted");
      o += S.path("M" + (q[0] + R) + " " + q[1] + " A" + R + " " + R + " 0 0 0 " + (q[0] + R * Math.cos(th)).toFixed(1) + " " + (q[1] - R * Math.sin(th)).toFixed(1), "hl");
      o += S.tx(q[0] + 32, q[1] - 10, "θ", { cls: "hl", bold: true, size: 13 });
      o += S.dim(60, 40, 60, 72, "W1", { cls: "dimc", side: -1, size: 10 });
      o += S.ln(xc(72), 72, xc(40), 40, "dimc") + S.head(xc(72), 72, xc(72) - xc(40), 32, "dimc") + S.head(xc(40), 40, xc(40) - xc(72), -32, "dimc");
      o += S.leader(10, 96, xc(60), 60, "path = W1 / sin θ", { cls: "dimc", size: 10 });
      o += note(S, 10, 16, "θ = angle between the roads");
      o += note(S, 316, 140, "Below 60°: see 46-10.06", { anchor: "end", cls: "" });
      return S.svg(o, 320, 150, "Plan of a skewed intersection with the intersection angle and the longer crossing path");
    },
    caption: "Plan view (after Figure 46-10K): the crossing path grows to W1 / sin θ as the angle drops below 90°.",
    cite: "46-10.06; Figure 46-10K",
    typical: "90° needs no adjustment. At 60°, 24 ft of lanes gives a 27.7-ft path (excess under 12 ft, so no extra lane).",
    mistakes: [
      "Entering the skew (90° minus the intersection angle) instead of the intersection angle.",
      "Entering the obtuse angle (for example 120°). Enter the acute angle (60°); the page treats 90° or more as no skew.",
      "Using the no-control criteria at an oblique-angle intersection. Provide at least stop-control sight distance where practical (46-10.06)."
    ]
  });

  H.define("in-isdAvail", {
    title: "Available sight distance along the major road (ft)",
    group: "intersection",
    what: "Optional. The sight distance you actually have along the major road, from the decision point, measured on the plans or in the field. The page compares it with the design ISD.",
    where: "From the decision point (18 ft or 14.5 ft behind the edge of the travel lane), find the farthest point on the major road where an approaching vehicle is still visible, and measure along the major road to it (leg b in Figure 46-10F). Use an eye height of 3.5 ft (car) or 7.6 ft (truck) and an object height of 3.5 ft. The ground line under the sight line governs, not the centerline profile (46-10.0). For a left turn both directions need the ISD; enter the shorter one.",
    sketch: function (S) {
      var o = S.rect(0, 0, 320, 150, "grass");
      o += S.planRoad({ y: 30, lanes: [1, 1], lw: 16, grass: false }).svg;
      o += S.rect(200, 62, 26, 88, "pave") + S.ln(200, 62, 200, 150, "edge") + S.ln(226, 62, 226, 150, "edge");
      var dp = [219, 94];
      o += S.poly([dp, [70, 54], [219, 54]], "hlf") + S.ln(dp[0], dp[1], 70, 54, "sight");
      o += S.tree(120, 76, 8) + note(S, 120, 98, "obstruction", { anchor: "middle", cls: "" });
      o += S.car(62, 54, 1, "veh2") + S.car(219, 101, "up", "veh") + S.circle(dp[0], dp[1], 2, "ink-f");
      o += S.dim(70, 20, 219, 20, "available sight distance", { ext: 32, size: 10 });
      o += S.leader(232, 114, 221, 96, "decision point", { size: 9.5 });
      o += note(S, 10, 128, "Eye 3.5 ft (truck 7.6), object 3.5 ft;", { cls: "" }) + note(S, 10, 142, "ground under the sight line governs", { cls: "" });
      return S.svg(o, 320, 150, "Plan of a sight line from the decision point grazing an obstruction, with the available distance along the major road");
    },
    caption: "Plan view: measure along the major road to the farthest point visible from the decision point.",
    cite: "46-10.0, 46-10.03(01), 46-10.03(02); Figure 46-10F",
    typical: "If the line of sight passes above bridge railing and guardrail and the Figure 46-10G value is provided, no further investigation is needed (46-10.03(02)).",
    mistakes: [
      "Checking the centerline profile instead of the ground line under the sight line (46-10.0).",
      "Checking only one direction for a left turn.",
      "Overlooking guardrail, bridge railing or vegetation in the sight triangle. 46-10.03(02) lists the measures to improve ISD."
    ]
  });

  // ================================================================ Tapers
  function taperPanels(S, mode) {
    var o = "";
    // merging taper (lane drop)
    o += S.rect(0, 16, 320, 48, "grass");
    o += S.poly([[0, 22], [320, 22], [320, 38], [250, 38], [110, 54], [0, 54]], "pave");
    o += S.ln(0, 22, 320, 22, "edge") + S.pline([[0, 54], [110, 54], [250, 38], [320, 38]], "edge") + S.ln(0, 38, 110, 38, "lane");
    o += S.tx(10, 12, "Merging taper (lane drop)", { size: 10, bold: true });
    // lane shift
    o += S.rect(0, 108, 320, 58, "grass");
    o += S.poly([[0, 114], [110, 114], [250, 130], [320, 130], [320, 162], [250, 162], [110, 146], [0, 146]], "pave");
    o += S.pline([[0, 114], [110, 114], [250, 130], [320, 130]], "edge") + S.pline([[0, 146], [110, 146], [250, 162], [320, 162]], "edge");
    o += S.pline([[0, 130], [110, 130], [250, 146], [320, 146]], "lane");
    o += S.tx(10, 104, "Lane-shift taper", { size: 10, bold: true });
    if (mode === "type") {
      o += S.poly([[110, 38], [110, 54], [250, 38]], "hlf") + S.poly([[110, 114], [250, 130], [250, 162], [110, 146]], "hlf");
      o += S.car(40, 46, 1, "veh2") + S.car(180, 30, 1, "veh2") + S.car(40, 122, 1, "veh2") + S.car(40, 138, 1, "veh2");
      o += S.dim(110, 66, 250, 66, "L", { cls: "dimc", side: 1, ext: 26, size: 10 });
      o += S.dim(110, 172, 250, 172, "L", { cls: "dimc", side: 1, ext: 24, size: 10 });
    } else {
      o += S.poly([[0, 38], [250, 38], [110, 54], [0, 54]], "hlf") + S.tx(14, 50, "lane being dropped", { size: 9.5 });
      o += S.ln(110, 54, 300, 54, "thin muted") + S.dim(290, 38, 290, 54, "offset", { side: -1, size: 10.5 });
      o += S.dim(110, 66, 250, 66, "L = rate × offset", { cls: "dimc", side: 1, ext: 26, size: 10 });
      o += S.ln(110, 114, 300, 114, "thin muted") + S.dim(290, 114, 290, 130, "offset", { side: -1, size: 10.5 });
      o += S.car(40, 122, 1, "veh2") + S.car(40, 138, 1, "veh2");
      o += S.dim(110, 172, 250, 172, "L = rate × offset", { cls: "dimc", side: 1, ext: 24, size: 10 });
    }
    return o;
  }

  H.define("in-taperType", {
    title: "Taper type",
    group: "intersection",
    what: "Merging taper: a lane ends and its traffic merges into the adjacent lane (lane drop). Lane-shift taper: the lanes move sideways without losing a lane. Figure 502-2J uses the same length for both: L = merging taper rate × offset distance.",
    where: "Pick the transition shown on the plans. Figure 502-2J also lists a 100-ft two-way left-turn-lane transition taper and the downstream recovery taper, which the page reports as fixed lengths. For lane-reduction markings, the edge-line taper rate applies across a bridge (502-2.02(10)).",
    sketch: function (S) { return S.svg(taperPanels(S, "type"), 320, 192, "Plan views of a merging taper where a lane ends and of a lane-shift taper"); },
    caption: "Plan views, traffic left to right; the taper is shaded.",
    cite: "Figure 502-2J; 502-2.02(10)",
    typical: "Merging taper rate: 10:1 at 20 to 25 mph, 15:1 at 30, 20:1 at 35, 30:1 at 40, 45:1 at 45, and V:1 from 50 to 70 mph (Figure 502-2J).",
    mistakes: [
      "Using the 100-ft turn-lane entrance taper (46-4.02(02)) for a lane drop. A lane drop uses the merging taper.",
      "Using Figure 502-2J for an added through lane that ends beyond a signal. Figure 46-7A gives its own lane-drop rates; use the second set of inputs."
    ]
  });

  H.define("in-taperOffset", {
    title: "Lateral offset distance (ft)",
    group: "intersection",
    what: "How far the edge of the traveled way moves sideways across the taper. For a lane drop, it is the width of the lane being dropped. For a lane shift, it is the distance the lanes move over.",
    where: "Measure square to the road, between the edge line (or lane line) before the taper and the same line after it, from the plans or typical sections.",
    sketch: function (S) { return S.svg(taperPanels(S, "offset"), 320, 192, "Plan views of a lane drop with the dropped lane width dimensioned as the offset, and of a lane shift with its offset"); },
    caption: "Plan views: the offset is measured across the road; L runs along it.",
    cite: "Figure 502-2J note 1",
    typical: "Lane drop of a 12-ft lane at 45 mph: L = 45 × 12 = 540 ft (Figure 502-2J).",
    mistakes: [
      "Entering the taper length, or any distance measured along the road.",
      "Entering the full pavement width instead of the width of the one lane being dropped."
    ]
  });

  H.define("in-recoveryLanes", {
    title: "Lanes for downstream recovery taper",
    group: "intersection",
    what: "The number of lanes the downstream recovery taper spans. Figure 502-2J sets its minimum length at 50 ft per lane; 100 ft per lane is desirable.",
    where: "Count the lanes the taper transitions across on the plans. Figure 502-2J lists this taper type and its length but gives no further definition.",
    sketch: function (S) {
      var o = S.rect(0, 30, 320, 52, "grass");
      o += S.poly([[0, 40], [320, 40], [320, 72], [200, 72], [120, 56], [0, 56]], "pave");
      o += S.ln(0, 40, 320, 40, "edge") + S.pline([[0, 56], [120, 56], [200, 72], [320, 72]], "edge") + S.ln(200, 56, 320, 56, "lane");
      o += S.poly([[120, 56], [200, 72], [200, 56]], "hlf");
      o += S.car(60, 48, 1, "veh2");
      o += S.dim(240, 56, 240, 72, "n = 1 lane", { side: 1, size: 10 });
      o += S.dim(120, 88, 200, 88, "L = 50 ft × n", { cls: "dimc", side: 1, ext: 30, size: 10 });
      o += note(S, 10, 22, "Direction of travel →");
      o += note(S, 10, 128, "Minimum 50 ft per lane, desirable 100 ft per lane", { cls: "" }) + note(S, 10, 142, "(Figure 502-2J note 2)");
      return S.svg(o, 320, 150, "Plan of a taper across one lane with length 50 ft per lane");
    },
    caption: "Plan view, schematic: the length grows with the number of lanes the taper spans.",
    cite: "Figure 502-2J note 2",
    typical: "1 lane: 50 ft minimum, 100 ft desirable.",
    mistakes: [
      "Entering a length. Enter the number of lanes."
    ]
  });

  H.define("in-urbanTaper", {
    title: "Urban area (added through lane)",
    group: "intersection",
    what: "Yes if the added through lane is in an urban area. Figure 46-7A allows sharper lane-drop taper rates in urban areas, but the taper should still be at least 300 ft long.",
    where: "Use the project's urban or rural designation (40-1.02). Figure 46-7A gives DE, the full-width length past the intersection needed to accelerate from a stop to 6 mph below the average running speed (the text of 46-7.0 says 5 mph), followed by the lane-drop taper. Increase DE where driveways are present. The figure is for preliminary design; final design is case by case.",
    sketch: function (S) {
      var o = S.rect(0, 0, 320, 150, "grass");
      o += S.rect(36, 0, 24, 150, "pave") + S.ln(36, 0, 36, 40, "edge") + S.ln(60, 0, 60, 40, "edge") + S.ln(36, 72, 36, 150, "edge") + S.ln(60, 72, 60, 150, "edge");
      o += S.poly([[0, 40], [320, 40], [320, 56], [290, 56], [220, 72], [0, 72]], "pave");
      o += S.ln(0, 40, 36, 40, "edge") + S.ln(60, 40, 320, 40, "edge") + S.ln(0, 72, 36, 72, "edge") + S.pline([[60, 72], [220, 72], [290, 56], [320, 56]], "edge");
      o += S.ln(0, 56, 36, 56, "lane") + S.ln(60, 56, 220, 56, "lane");
      o += S.ln(32, 40, 32, 72, "barrier");
      o += S.poly([[220, 56], [220, 72], [290, 56]], "hlf");
      o += S.car(20, 48, 1, "veh2") + S.car(20, 64, 1, "veh2");
      o += S.dim(60, 86, 220, 86, "DE (Fig. 46-7A)", { cls: "dimc", side: 1, ext: 14, size: 10 });
      o += S.dim(220, 86, 290, 86, "taper", { side: 1, ext: 30, size: 10 });
      o += note(S, 66, 28, "Direction of travel →");
      o += note(S, 316, 126, "Urban: sharper rate allowed,", { anchor: "end", cls: "" }) + note(S, 316, 140, "taper at least 300 ft", { anchor: "end", cls: "hl", bold: true });
      return S.svg(o, 320, 150, "Plan of an added through lane continuing past a signal for distance DE, then a lane-drop taper");
    },
    caption: "Plan view (after Figure 46-7A): the added lane runs DE past the intersection, then drops.",
    cite: "46-7.0; Figure 46-7A",
    typical: "DE = 200 ft at 30 mph to 1450 ft at 60 mph; lane-drop taper 20:1 at 30 mph to 65:1 at 60 mph (Figure 46-7A).",
    mistakes: [
      "Using an urban taper shorter than 300 ft.",
      "Treating Figure 46-7A as final design. It is for preliminary design, and its taper rates differ from Figure 502-2J."
    ]
  });

  // ================================================================ Turn lanes
  H.define("in-tlClass", {
    title: "Mainline classification (turn lane)",
    group: "intersection",
    what: "The facility the turn lane is on, as listed in Figure 46-4H. A rural arterial needs the full length LT + LD + LS. For an urban arterial, other facility, or stop or T facility, LT + LD + LS is desirable and LT + LS is the minimum.",
    where: "Use the functional class and the urban or rural designation of the road that carries the turn lane (40-1.01, 40-1.02). The IDM does not define \"other facility\" or \"stop or T facility\" further. Figure 46-4I shows how the parts apply on free-flowing and stop-controlled legs.",
    sketch: function (S) {
      var o = tlPlan(S, { xT: 30, xD: 80, xS: 170, hl: "LD" });
      o += note(S, 10, 124, "Rural arterial: LT + LD + LS", { cls: "" });
      o += note(S, 10, 138, "Others: LT + LD + LS desirable, LT + LS minimum", { cls: "" });
      return S.svg(o, 320, 150, "Plan of a turn lane with taper, deceleration and storage lengths; deceleration highlighted");
    },
    caption: "Plan view (after Figure 46-4I): the class decides whether LD (shaded) is required.",
    cite: "46-4.02(02); Figures 46-4H, 46-4I",
    mistakes: [
      "Leaving out LD on a rural facility. Item 2 of 46-4.02(02) says LD should meet Figure 46-4J there; deceleration in the through lane is for restricted urban conditions only."
    ]
  });

  H.define("in-tlGrade", {
    title: "Grade approaching the turn lane (%)",
    group: "intersection",
    what: "The grade of the road where turning vehicles decelerate, in percent, in the direction of travel. Negative is a downgrade, which lengthens LD; positive is an upgrade, which shortens it.",
    where: "Read it from the profile over the deceleration length. The page multiplies the Figure 46-4J LD by the grade-adjustment factor.",
    sketch: function (S) {
      var o = S.profile([[0, 40], [200, 100], [320, 100]], "edge", 150);
      o += S.ln(0, 40, 200, 100, "hl");
      o += S.dim(70, 49, 190, 85, "", { cls: "dimc" }) + S.tx(150, 50, "LD × grade factor", { anchor: "middle", cls: "dimc", bold: true, size: 10 });
      o += '<g transform="rotate(16.7 36 46)">' + S.rect(20, 36, 32, 10, "veh", 3) + S.rect(26, 29, 16, 8, "veh", 2) + S.circle(27, 47, 3.5, "ink-f") + S.circle(46, 47, 3.5, "ink-f") + "</g>";
      o += S.ln(262, 86, 262, 100, "barrier") + note(S, 232, 92, "intersection", { anchor: "middle", cls: "" });
      o += note(S, 10, 16, "Profile in the direction of travel →");
      o += note(S, 112, 126, "Downgrade (−): factor 1.00 to 1.35", { cls: "hl", bold: true }) + note(S, 112, 140, "Upgrade (+): factor 1.00 to 0.80", { cls: "" });
      return S.svg(o, 320, 150, "Profile of a downgrade approaching an intersection with the deceleration length along it");
    },
    caption: "Profile: on a downgrade, LD is multiplied by a factor above 1.",
    cite: "46-4.02(02) item 2; Figure 46-4J",
    typical: "Downgrade factors: 1.00 (under 2%), 1.10, 1.20, 1.28, 1.35 (5% to 6%). Upgrade factors: 1.00, 0.95, 0.90, 0.85, 0.80 (Figure 46-4J).",
    mistakes: [
      "Reversing the sign. A road that falls toward the intersection is a downgrade (negative).",
      "Grades steeper than 6% are outside Figure 46-4J; the page uses the 5% to 6% factor."
    ]
  });

  H.define("in-tlFree", {
    title: "Approach is free-flowing?",
    group: "intersection",
    what: "Yes if through traffic on this approach does not stop: the uncontrolled leg of a stop-controlled intersection, any leg of a signalized intersection, or a free-flowing turning roadway. LD is considered only on these legs; a stop-controlled approach gets LT + LS.",
    where: "Figure 46-4H note 2 limits LD to free-flowing legs. Figure 46-4I notes that the free-flowing layout also applies to all legs of a signalized intersection.",
    sketch: function (S) {
      var o = S.rect(0, 0, 320, 150, "grass");
      o += S.rect(250, 0, 32, 150, "pave") + S.rect(0, 30, 320, 32, "pave") + S.poly([[20, 62], [50, 78], [250, 78], [250, 62]], "pave");
      o += S.rect(282, 62, 16, 16, "pave") + S.poly([[282, 78], [298, 78], [298, 112], [282, 136]], "pave");
      o += S.ln(0, 30, 250, 30, "edge") + S.ln(282, 30, 320, 30, "edge") + S.ln(250, 0, 250, 30, "edge") + S.ln(282, 0, 282, 30, "edge");
      o += S.pline([[0, 62], [20, 62], [50, 78], [250, 78], [250, 150]], "edge") + S.pline([[282, 150], [282, 136], [298, 112], [298, 62], [320, 62]], "edge");
      o += S.ln(0, 44.8, 250, 44.8, "cl") + S.ln(0, 47.2, 250, 47.2, "cl") + S.ln(282, 44.8, 320, 44.8, "cl") + S.ln(282, 47.2, 320, 47.2, "cl");
      o += S.ln(264.8, 82, 264.8, 150, "cl") + S.ln(267.2, 82, 267.2, 150, "cl");
      o += S.ln(50, 62, 246, 62, "lane") + S.ln(282, 82, 282, 112, "lane");
      o += S.rect(50, 62, 120, 16, "hlf");
      o += S.ln(246, 46, 246, 78, "barrier") + S.ln(266, 82, 298, 82, "barrier") + stopSign(S, 308, 92);
      o += S.car(120, 54, 1, "veh2") + S.car(230, 70, 1, "veh2");
      o += S.dim(20, 18, 50, 18, "LT", { cls: "dimc", size: 9.5, ext: 40 }) + S.dim(50, 18, 170, 18, "LD", { size: 10, ext: 42 }) + S.dim(170, 18, 246, 18, "LS", { cls: "dimc", size: 9.5, ext: 42 });
      o += S.dim(242, 82, 242, 112, "LS", { cls: "dimc", size: 9.5 }) + S.dim(242, 112, 242, 136, "LT", { cls: "dimc", size: 9.5 });
      o += note(S, 10, 106, "Free-flowing leg: LT + LD + LS", { cls: "hl", bold: true });
      o += note(S, 10, 120, "Stop-controlled leg: LT + LS", { cls: "" }) + note(S, 10, 134, "Signalized: all legs free-flowing", { cls: "" });
      return S.svg(o, 320, 150, "Intersection plan with a turn lane on the free-flowing major road including deceleration length, and a turn lane on the stop-controlled minor road with taper and storage only");
    },
    caption: "Plan view (after Figure 46-4I): only the free-flowing leg gets LD.",
    cite: "Figures 46-4H (note 2), 46-4I",
    mistakes: [
      "Answering No for a signalized approach. Every leg of a signalized intersection is treated as free-flowing (Figure 46-4I note)."
    ]
  });

  H.define("in-tlRestricted", {
    title: "Restricted urban: decelerate in the through lane",
    group: "intersection",
    what: "Yes where restricted urban conditions force deceleration to happen entirely in the travel lane. Then LD = 0 and the turn lane is sized for storage only.",
    where: "46-4.02(02) item 2: LD from Figure 46-4J should be met on a rural facility and is desirable on an urban facility, but is not always feasible. Under restricted conditions, the full-width turn lane (deceleration plus storage) may be as short as 50 ft with fewer than 10% trucks, or 100 ft with 10% or more, not counting the taper (item 5).",
    sketch: function (S) {
      var o = tlPlan(S, { xT: 150, xD: 190, xS: 190 });
      o += S.rect(0, 43, 190, 15, "hlf") + S.tx(48, 54, "decelerate in the through lane", { size: 9.5, cls: "hl", bold: true });
      o += S.car(26, 50, 1, "veh2");
      o += note(S, 10, 124, "LD = 0: turn lane = LT + LS (storage only)", { cls: "" });
      o += note(S, 10, 138, "Restricted minimum LD + LS: 50 ft or 100 ft", { cls: "" });
      return S.svg(o, 320, 150, "Plan of a short turn lane with deceleration in the through lane highlighted");
    },
    caption: "Plan view: vehicles slow in the through lane, so the turn lane holds storage only.",
    cite: "46-4.02(02) items 2 and 5",
    mistakes: [
      "Using it on a rural facility. The IDM expects the Figure 46-4J deceleration length there, and the page warns."
    ]
  });

  H.define("in-tlDual", {
    title: "Turn lanes (single or dual)",
    group: "intersection",
    what: "Single, or dual (two side-by-side turn lanes). The entrance taper is 100 ft for a single turn lane and 150 ft for dual turn lanes on an urban street.",
    where: "Multiple turn lanes are considered where site conditions prevent a long enough single lane, or where a capacity analysis shows a single lane cannot meet the level-of-service criteria with a protected phase (46-4.04(01)). Two left-turn lanes should be used only with a separate turning phase (46-4.04(02)).",
    sketch: function (S) {
      var o = S.rect(0, 0, 320, 150, "grass");
      o += S.rect(272, 0, 26, 150, "pave") + S.rect(0, 26, 320, 32, "pave") + S.poly([[20, 58], [110, 90], [272, 90], [272, 58]], "pave");
      o += S.ln(272, 0, 272, 26, "edge") + S.ln(272, 90, 272, 150, "edge") + S.ln(298, 0, 298, 26, "edge") + S.ln(298, 58, 298, 150, "edge");
      o += S.ln(0, 26, 272, 26, "edge") + S.ln(298, 26, 320, 26, "edge") + S.ln(298, 58, 320, 58, "edge");
      o += S.pline([[0, 58], [20, 58], [110, 90], [272, 90]], "edge");
      o += S.ln(0, 40.8, 272, 40.8, "cl") + S.ln(0, 43.2, 272, 43.2, "cl") + S.ln(298, 40.8, 320, 40.8, "cl") + S.ln(298, 43.2, 320, 43.2, "cl");
      o += S.ln(70, 58, 268, 58, "lane") + S.ln(110, 74, 268, 74, "lane");
      o += S.poly([[20, 58], [110, 90], [110, 58]], "hlf");
      o += S.ln(268, 42, 268, 90, "barrier");
      o += S.car(256, 66, 1, "veh2") + S.car(234, 66, 1, "veh2") + S.car(256, 82, 1, "veh2") + S.car(234, 82, 1, "veh2");
      o += S.dim(20, 104, 110, 104, "LT = 150 ft", { side: 1, ext: 46, size: 10 });
      o += note(S, 130, 118, "Dual, urban street: 150 ft", { cls: "" }) + note(S, 130, 132, "Single turn lane: 100 ft", { cls: "" });
      return S.svg(o, 320, 150, "Plan of dual turn lanes with a 150 ft entrance taper");
    },
    caption: "Plan view: dual turn lanes use a longer entrance taper.",
    cite: "46-4.02(02) item 1; 46-4.04",
    mistakes: [
      "Using the 150-ft dual taper outside an urban street. The IDM gives that value for dual turn lanes on an urban street."
    ]
  });

  H.define("in-tlCurv", {
    title: "Curvilinear approach",
    group: "intersection",
    what: "Yes if the turn lane begins on a horizontal curve. There the entrance taper is designed with a constant rate of divergence through the curve, and it should be at least 50 ft long.",
    where: "On a tangent approach the IDM uses a straight-line taper: 100 ft for a single turn lane, 150 ft for dual turn lanes on an urban street (46-4.02(02) item 1).",
    sketch: function (S) {
      var cx = 160, cy = 420, a1 = -112, a2 = -100;
      function pt(a, r) { var t = a * Math.PI / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; }
      function rin(a) { return a <= a1 ? 340 : a >= a2 ? 324 : 340 - 16 * (a - a1) / (a2 - a1); }
      var outer = [], cl = [], edge = [], inner = [], taper = [];
      for (var a = -122; a <= -58; a += 1) { outer.push(pt(a, 372)); cl.push(pt(a, 356)); edge.push(pt(a, 340)); inner.push(pt(a, rin(a))); }
      for (var b = a1; b <= a2; b += 0.5) taper.push(pt(b, rin(b)));
      var o = S.rect(0, 0, 320, 150, "grass");
      o += S.poly(outer.concat(inner.slice().reverse()), "pave");
      o += S.pline(outer, "edge") + S.pline(inner, "edge") + S.pline(cl, "cl");
      var laneLine = []; for (var c = a2; c <= -64; c += 1) laneLine.push(pt(c, 340));
      o += S.pline(laneLine, "lane");
      var tb = []; for (var d = a1; d <= a2; d += 0.5) tb.push(pt(d, 340));
      o += S.poly(tb.concat(taper.slice().reverse()), "hlf");
      var s1 = pt(-64, 324), s2 = pt(-64, 356);
      o += S.ln(s1[0], s1[1], s2[0], s2[1], "barrier");
      o += S.car(160, 72, 1, "veh2");
      o += S.leader(14, 128, pt(-106, 334)[0], pt(-106, 334)[1], "entrance taper: constant divergence, ≥ 50 ft", { cls: "hl", size: 10 });
      o += note(S, 10, 16, "Turn lane beginning on a horizontal curve");
      return S.svg(o, 320, 150, "Plan of a curved approach where the turn-lane taper follows the curve");
    },
    caption: "Plan view: on a curve the taper diverges at a constant rate along the curve.",
    cite: "46-4.02(02) item 1",
    typical: "At least 50 ft on a curve.",
    mistakes: [
      "Drawing a straight-line taper on a curve. The IDM calls for a constant rate of divergence throughout the curve."
    ]
  });

  H.define("in-tlControl", {
    title: "Intersection control (storage)",
    group: "intersection",
    what: "Signalized or unsignalized. It sets how storage is found: vehicles arriving per signal cycle at a signal, or vehicles arriving in an average 2-minute period at an unsignalized intersection.",
    where: "Signalized (46-4.02(02) item 3): LS = 2.0 × the average vehicles per cycle in the design hour for cycles under 120 s, or 1.5 × for 120 s or longer, at 20 ft per vehicle, and at least two passenger cars. A permitted turn on red or a separate right-turn phase may allow a shorter right-turn lane. Unsignalized (item 4, Figure 46-4L): room for the turning vehicles arriving in an average 2-minute period in the design hour; at least two cars, or one car and one truck if trucks exceed 10%.",
    sketch: function (S) {
      var o = tlPlan(S, { xT: 30, xD: 80, xS: 170, hl: "LS" });
      o += S.rect(302, 96, 12, 32, "obj", 2) + S.circle(308, 103, 3.2, "glass") + S.circle(308, 112, 3.2, "glass") + S.circle(308, 121, 3.2, "glass");
      o += note(S, 10, 124, "Signalized: 2.0 × arrivals per cycle × 20 ft", { cls: "" });
      o += note(S, 10, 138, "Unsignalized: arrivals in 2 min × 20 ft", { cls: "" });
      return S.svg(o, 320, 150, "Plan of a turn lane with the storage length highlighted and a traffic signal");
    },
    caption: "Plan view: the control type sets how LS (shaded) is computed.",
    cite: "46-4.02(02) items 3 and 4; Figures 46-4K, 46-4L",
    mistakes: [
      "At a signal, making the turn lane shorter than the queue in the adjacent through lane, which blocks entry to the turn lane (46-4.02(02))."
    ]
  });

  H.define("in-tlVolume", {
    title: "Turning volume, design hour (vph)",
    group: "intersection",
    what: "The number of vehicles making this turn in the design hour, in vehicles per hour. Enter the volume of this one movement only.",
    where: "Take it from the design-year turning-movement forecast for the design hour. The design hourly volume is the 30th highest hourly volume of the design year (40-2.01).",
    sketch: function (S) {
      var o = tlPlan(S, { xT: 30, xD: 80, xS: 170, dims: false });
      o += S.path("M10 50 L50 50 Q72 50 92 66 L250 66 Q285 66 285 96 L285 136", "hl") + S.head(285, 142, 0, 1, "hl");
      o += S.tx(10, 118, "Turning vehicles per hour,", { size: 10, cls: "hl", bold: true }) + S.tx(10, 132, "design hour, this movement", { size: 10, cls: "hl", bold: true });
      return S.svg(o, 320, 150, "Plan of a turn lane with the turning movement path highlighted");
    },
    caption: "Plan view: count only the vehicles making this turn.",
    cite: "46-4.02(02) items 3 and 4; Figure 46-4L; 40-2.01",
    typical: "Figure 46-4L (unsignalized): DHV 60 or less: 50 to 75 ft; over 60 to 120: 100 ft; over 120 to 180: 150 ft; over 180: 200 ft or more.",
    mistakes: [
      "Entering the approach volume or a daily volume instead of the turning design-hour volume.",
      "Reading the storage chart (Figure 46-4K(1)) with mixed traffic. Its volume axis is in passenger-car equivalents (PCE vph); the IDM refers to the Highway Capacity Manual for PCE values."
    ]
  });

  H.define("in-tlCycle", {
    title: "Cycle length, C (s)",
    group: "intersection",
    what: "Signalized only. The time for one complete sequence of all signal phases, in seconds. The page divides the hourly volume by the cycles per hour to get the average arrivals per cycle.",
    where: "Take it from the signal timing or the capacity analysis for the design hour.",
    sketch: function (S) {
      var o = "";
      o += S.rect(30, 50, 110, 18, "grass") + S.rect(140, 50, 15, 18, "clf") + S.rect(155, 50, 95, 18, "obj") + S.rect(250, 50, 55, 18, "grass");
      o += S.ln(30, 50, 305, 50, "ink") + S.ln(30, 68, 305, 68, "ink") + S.ln(30, 50, 30, 68, "ink");
      o += S.tx(85, 63, "green", { anchor: "middle", size: 10 }) + S.tx(202, 63, "red", { anchor: "middle", size: 10 }) + S.tx(278, 63, "next…", { anchor: "middle", size: 9.5 });
      o += S.dim(30, 36, 250, 36, "C (s)", { ext: 30, size: 11 });
      o += note(S, 10, 92, "One full sequence of all signal phases", { cls: "" });
      o += note(S, 10, 106, "Storage factor: 2.0 if C < 120 s, 1.5 if C ≥ 120 s", { cls: "" });
      return S.svg(o, 320, 118, "Signal timing bar with one full cycle length dimensioned");
    },
    caption: "C is the whole cycle, not the green time for the turn.",
    cite: "46-4.02(02) item 3; Figure 46-4K",
    typical: "The Figure 46-4K adjustment factors cover C = 60 to 100 s.",
    mistakes: [
      "Entering the turn-phase green time instead of the full cycle.",
      "Entering minutes instead of seconds."
    ]
  });

  H.define("in-tlTrucks", {
    title: "Trucks (%)",
    group: "intersection",
    what: "The percentage of trucks in the traffic using the turn lane. Above 10%, unsignalized storage must fit at least one car and one truck. At 10% or more, the restricted minimum full-width lane is 100 ft instead of 50 ft.",
    where: "Use the design-hour truck percentage. For geometric design a truck is a vehicle with six or more tires (40-2.01).",
    sketch: function (S) {
      var o = tlPlan(S, { xT: 30, xD: 80, xS: 170, hl: "LS", cars: false });
      o += S.truck(244, 66, 1, "veh2") + S.car(210, 66, 1, "veh2");
      o += note(S, 10, 120, "Unsignalized, over 10% trucks: 1 car + 1 truck", { cls: "" });
      o += note(S, 10, 133, "Restricted minimum (no taper):", { cls: "" }) + note(S, 10, 146, "50 ft if under 10%, 100 ft if 10% or more", { cls: "" });
      return S.svg(o, 320, 150, "Plan of a turn lane with a car and a truck stored");
    },
    caption: "Plan view: storage must hold a truck when trucks exceed 10%.",
    cite: "46-4.02(02) items 4 and 5; 40-2.01",
    mistakes: [
      "Entering a decimal (0.12) instead of a percentage (12).",
      "At exactly 10% the two IDM rules differ: item 4 applies above 10%, item 5 at 10% or more."
    ]
  });

  H.define("in-tlTruckLength", {
    title: "Truck length for storage (ft)",
    group: "intersection",
    what: "Used for unsignalized storage when trucks exceed 10%: the length to allow for one truck in the queue. The page adds it to one 20-ft car space to set the minimum storage.",
    where: "Use the truck design vehicle expected in the turn lane (46-1.07(02)). Figure 40-4A gives design-vehicle lengths.",
    notIDM: "The IDM requires room for one car and one truck but gives no truck storage length.",
    sketch: function (S) {
      var o = S.rect(0, 30, 320, 40, "grass") + S.rect(0, 40, 296, 20, "pave") + S.ln(0, 40, 296, 40, "edge") + S.ln(0, 60, 296, 60, "edge");
      o += S.ln(292, 40, 292, 60, "barrier");
      o += S.rect(170, 44, 94, 12, "veh2", 1) + S.rect(266, 44, 20, 12, "veh", 2);
      o += S.car(140, 50, 1, "veh2");
      o += S.dim(170, 76, 286, 76, "truck length", { side: 1, ext: 18, size: 10.5 });
      o += S.dim(128, 76, 168, 76, "20 ft", { cls: "dimc", side: 1, ext: 18, size: 10 });
      o += note(S, 10, 22, "Storage at the stop line (plan)");
      o += note(S, 10, 116, "Unsignalized, trucks over 10%: LS ≥ 20 ft + truck length", { cls: "" });
      return S.svg(o, 320, 126, "Plan of a stored car and truck with the truck length dimensioned");
    },
    caption: "Plan view: the minimum queue is one 20-ft car space plus the truck.",
    cite: "46-4.02(02) item 4; Figure 40-4A (vehicle lengths)",
    typical: "Figure 40-4A lengths: SU 30 ft, WB-40 45.5 ft, WB-50 55 ft, WB-62 68.5 ft, WB-65 (Indiana Design Vehicle) 73.5 ft.",
    mistakes: [
      "Keeping the default without checking which truck uses the turn."
    ]
  });

  H.define("in-tlVc", {
    title: "v/c ratio (optional)",
    group: "intersection",
    what: "The volume-to-capacity ratio from a Highway Capacity Manual analysis. With the cycle length, it gives the Figure 46-4K storage-length adjustment factor for the chart method.",
    where: "From the capacity analysis (46-4.02(02) item 3b). The adjustment table applies to an exclusive left-turn lane, or an exclusive right-turn lane where turn on red is not permitted. In the PDF this table is captioned Figure 46-4K(1) and the chart Figure 46-4K, the reverse of the text.",
    sketch: function (S) {
      function X(v) { return 40 + (v - 0.5) * 511.1; }
      function Y(f) { return 120 - (f - 0.6) * 62.5; }
      var vc = [0.50, 0.55, 0.60, 0.65, 0.70, 0.75, 0.80, 0.85, 0.90, 0.95];
      var c60 = [0.70, 0.71, 0.73, 0.75, 0.77, 0.82, 0.88, 0.99, 1.17, 1.61], c100 = [0.94, 0.95, 0.97, 1.00, 1.03, 1.09, 1.17, 1.31, 1.56, 2.14];
      var o = axes(S, 40, 120, 272, 18);
      o += S.ln(40, Y(1), 272, Y(1), "thin muted");
      o += S.pline(vc.map(function (v, i) { return [X(v), Y(c60[i])]; }), "ink") + S.pline(vc.map(function (v, i) { return [X(v), Y(c100[i])]; }), "dimc");
      o += S.ln(X(0.85), 120, X(0.85), Y(1.31), "hl") + S.circle(X(0.85), Y(0.99), 2.5, "hl-f") + S.circle(X(0.85), Y(1.31), 2.5, "hl-f");
      o += note(S, 276, Y(2.14) + 4, "C=100 s", { cls: "dimc", bold: true }) + note(S, 276, Y(1.61) + 4, "C=60 s", { cls: "", bold: true });
      o += note(S, 36, Y(1) + 3, "1.0", { anchor: "end", cls: "" }) + note(S, 36, Y(2) + 3, "2.0", { anchor: "end", cls: "" });
      o += note(S, 40, 133, "0.50", { anchor: "middle", cls: "" }) + S.tx(X(0.85), 133, "0.85", { anchor: "middle", size: 9.5, cls: "hl", bold: true }) + note(S, 272, 133, "0.95", { anchor: "middle", cls: "" });
      o += S.tx(156, 147, "v/c ratio", { anchor: "middle", size: 10, cls: "hl", bold: true });
      o += note(S, 10, 12, "Storage adjustment factor (Figure 46-4K)", { size: 10 });
      return S.svg(o, 320, 150, "Chart of the storage adjustment factor against v/c ratio for cycle lengths of 60 and 100 seconds");
    },
    caption: "The factor rises steeply above v/c = 0.85.",
    cite: "46-4.02(02) item 3b; Figure 46-4K (table)",
    typical: "Table range: v/c 0.50 to 0.95 and C 60 to 100 s. The factor is near 1.0 around v/c 0.80 and C 70 to 80 s, the chart's reference condition (C = 75 s, v/c = 0.80).",
    mistakes: [
      "Entering a percentage (85) instead of a ratio (0.85).",
      "Applying the factor to the 2.0 × arrivals result. It adjusts only the storage read from the chart."
    ]
  });

  H.define("in-tlChartStorage", {
    title: "Storage from the Figure 46-4K(1) chart (ft)",
    group: "intersection",
    what: "Optional. The storage length read from the IDM chart at your turning volume. The chart is drawn for C = 75 s and v/c = 0.80; the page multiplies your reading by the adjustment factor.",
    where: "Enter the chart with the turning volume in passenger-car equivalents (PCE vph) and read LS from the recommended curve. The method applies to a left-turn lane, or a right-turn lane where turn on red is prohibited (46-4.02(02) item 3b). The page does not digitize the chart. In the PDF the chart is captioned Figure 46-4K; the text calls it Figure 46-4K(1).",
    sketch: function (S) {
      function cy(x) { return 120 - 82 * (1 - Math.exp(-(x - 40) / 110)); }
      var pts = []; for (var x = 40; x <= 290; x += 5) pts.push([x, cy(x)]);
      var o = axes(S, 40, 120, 296, 22);
      o += S.pline(pts, "ink");
      var xr = 170, yr = cy(xr);
      o += S.ln(xr, 120, xr, yr, "dimc") + S.head(xr, yr + 1, 0, -1, "dimc");
      o += S.ln(xr, yr, 41, yr, "hl") + S.head(41, yr, -1, 0, "hl") + S.circle(xr, yr, 2.5, "ink-f");
      o += S.tx(46, yr - 5, "read LS", { cls: "hl", bold: true, size: 10.5 });
      o += note(S, 292, 72, "recommended curve", { anchor: "end", cls: "" });
      o += S.tx(xr, 133, "your volume", { anchor: "middle", size: 9.5, cls: "dimc" });
      o += note(S, 34, 30, "LS", { anchor: "end", cls: "" }) + note(S, 296, 146, "turning volume (PCE vph)", { anchor: "end", cls: "" });
      o += note(S, 10, 12, "Chart drawn for C = 75 s, v/c = 0.80", { size: 10 });
      return S.svg(o, 320, 150, "Schematic of reading the storage length from the recommended curve at a turning volume");
    },
    caption: "Schematic, not to scale: read LS on the recommended curve, then apply the adjustment factor.",
    cite: "46-4.02(02) item 3b; Figures 46-4K and 46-4K(1)",
    mistakes: [
      "Reading the 2 × mean or 1.5 × mean line instead of the recommended curve.",
      "Using the chart for a right-turn lane where turn on red is permitted."
    ]
  });

  // ================================================================ page maps
  H.pages("intersections/isd.html", {
    cs: "in-isdCase",
    ycase: "in-yieldTurn",
    V: ["designSpeed", "Here: V<sub>major</sub>, the design speed of the major road, in ISD = 1.47 V<sub>major</sub> t<sub>g</sub> (Figure 46-10G). For no traffic control, enter the speed of the approach whose leg you are computing."],
    veh: "in-isdVehicle",
    cls: "in-isdMajorClass",
    scope: ["projectScope", "Here: sets leg a, the decision point along the minor road: 18 ft behind the edge of the major-road travel lane for new construction or reconstruction, 14.5 ft for 3R (46-10.03(01), Figure 46-10F)."],
    lanes: "in-isdLanes",
    med: "in-isdMedian",
    g: "in-isdGrade",
    skew: "in-isdSkew",
    lw: ["laneWidth", "Here: used only for the skew check. Width of lanes crossed = lanes × w, and the crossing path is that width ÷ sin(angle) (46-10.06)."],
    avail: "in-isdAvail"
  });

  H.pages("intersections/taper.html", {
    V: ["designSpeed", "Here: sets the Figure 502-2J merging taper rate (20 to 70 mph)."],
    type: "in-taperType",
    off: "in-taperOffset",
    nl: "in-recoveryLanes",
    V2: ["designSpeed", "Here: the design speed of the road with the added through lane. It sets DE and the lane-drop taper rate in Figure 46-7A (30 to 60 mph)."],
    w2: ["laneWidth", "Here: the width of the added through lane that is dropped beyond the intersection. Lane-drop taper = Figure 46-7A rate × this width."],
    urb: "in-urbanTaper"
  });

  H.pages("intersections/turn-lane.html", {
    cls: "in-tlClass",
    V: ["designSpeed", "Here: the design speed of the road with the turn lane. It sets the deceleration length LD in Figure 46-4J (25 to 60 mph)."],
    gr: "in-tlGrade",
    free: "in-tlFree",
    restr: "in-tlRestricted",
    dual: "in-tlDual",
    curv: "in-tlCurv",
    ctrl: "in-tlControl",
    vol: "in-tlVolume",
    cyc: "in-tlCycle",
    tr: "in-tlTrucks",
    tl: "in-tlTruckLength",
    vc: "in-tlVc",
    ls75: "in-tlChartStorage"
  });
})(window.IDMHelp);
