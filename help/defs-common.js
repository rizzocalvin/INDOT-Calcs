/*
 * Input help definitions shared by several calculators.
 * See js/help.js for the field list and the sketch toolkit (S).
 */
(function (H) {
  "use strict";

  H.define("designSpeed", {
    title: "Design speed, V (mph)",
    group: "general",
    what: "The design speed selected for the project. Enter the value from the project's design criteria, not the operating speed measured in the field.",
    where: "Select it from the geometric design tables for the facility type, area, traffic volume and project scope: Chapter 53 for new construction and reconstruction, and Chapters 54 to 56 for projects on existing highways (40-3.01). Section 40-3.02 lists the factors that guide the choice: functional class, urban or rural area, terrain, traffic volume and project scope.",
    sketch: function (S) {
      var r = S.planRoad({ y: 52, lanes: [1, 1], lw: 24 });
      return S.svg(r.svg +
        S.car(70, 88, 1) + S.arrow(84, 88, 150, 88, "hl") + S.tx(118, 113, "V (mph)", { anchor: "middle", cls: "hl", bold: true }) +
        // speed limit sign
        S.rect(238, 6, 40, 44, "glass", 3) + '<rect x="238" y="6" width="40" height="44" rx="3" class="ink"/>' +
        S.tx(258, 18, "SPEED", { anchor: "middle", size: 7.5 }) + S.tx(258, 26, "LIMIT", { anchor: "middle", size: 7.5 }) + S.tx(258, 44, "55", { anchor: "middle", size: 15, bold: true }) +
        S.ln(258, 50, 258, 52, "ink") +
        S.tx(10, 140, "Design speed ≥ anticipated posted speed limit (40-3.02(02))", { size: 10, cls: "muted" }), 320, 150, "Vehicle on a two-lane road with design speed V and a speed limit sign");
    },
    caption: "The design speed should equal or exceed the speed limit expected after construction.",
    cite: "40-3.01, 40-3.02; design-speed criteria in Chapters 53 to 56",
    typical: "Low speed means 45 mph or less and high speed means 50 mph or more (40-3.01). For a non-posted rural facility, design for 55 mph unless a traffic engineering study supports a lower speed (40-3.02(02)). The dropdowns on each page list only the speeds the governing IDM figure tabulates.",
    mistakes: [
      "Entering today's posted speed when the project will be posted higher after construction. The design speed should equal or exceed the anticipated posted speed limit (40-3.02(02)).",
      "Using a lower design speed for a single curve. Design speed is selected for the project, and an element that falls short needs a design exception (40-3.02(02))."
    ]
  });

  H.define("laneWidth", {
    title: "Lane width, w (ft)",
    group: "xsec",
    what: "The width of one through travel lane, measured from the edge of the traveled way to the lane line, or between lane lines.",
    where: "Take it from the typical section or the design criteria for the project. Chapters 53 to 56 give the required width for each facility type and scope.",
    sketch: function (S) {
      var x = S.xsec({ cx: 160, y: 62, lanes: [1, 1], lw: 70, sh: [34, 34], hl: "lane", hlSide: "R", fore: [36, 30] });
      var p = x.pts;
      return S.svg(x.svg +
        S.ln(160, 40, 160, 58, "thin muted") + S.ln(230, 44, 230, p.eR[1] - 4, "thin muted") +
        S.dim(160, 36, 230, 36, "w", {}) +
        S.tx(160, 30, "CL", { anchor: "middle", size: 9.5, cls: "muted" }) +
        S.tx(p.eR[0] + 17, p.eR[1] + 24, "shoulder", { anchor: "middle", size: 9.5, cls: "muted" }) +
        S.tx(195, 84, "travel lane", { anchor: "middle", size: 9.5 }), 320, 140, "Cross section with one travel lane width dimensioned");
    },
    caption: "Cross section: w is one travel lane, not including the shoulder or gutter.",
    cite: "45-1.01(01); Figures 53-1 to 53-9 and 55-3A to 55-3H",
    typical: "Travel-lane width varies from 9 ft to 12 ft depending on functional class, traffic volume, design speed, area and project scope (45-1.01(01)). 12 ft is the common value on state routes.",
    mistakes: [
      "Including the shoulder, gutter pan or curb offset in the lane width.",
      "Entering the full pavement width (both lanes) instead of the width of one lane."
    ]
  });

  H.define("radius", {
    title: "Curve radius, R (ft)",
    group: "horizontal",
    what: "The radius of the horizontal curve, in feet, measured to the roadway centerline (the alignment the curve data is computed on).",
    where: "Read it from the horizontal curve data on the plans or the alignment report. If you only have the degree of curve D (arc definition), R = 5729.58 / D.",
    sketch: function (S) {
      var cx = 40, cy = 138, R = 150, out = "";
      var a1 = -88, a2 = -8;
      function pt(a, r) { var t = a * Math.PI / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; }
      var outer = [], inner = [], c = [];
      for (var a = a1; a <= a2 + 0.01; a += 2) { outer.push(pt(a, R + 16)); inner.push(pt(a, R - 16)); c.push(pt(a, R)); }
      out += S.poly(outer.concat(inner.slice().reverse()), "pave");
      out += S.pline(outer, "edge") + S.pline(inner, "edge");
      out += S.pline(c.map(function (q) { return q; }), "cl");
      var m = pt(-40, R);
      out += S.ln(cx, cy, m[0], m[1], "hl") + S.head(m[0], m[1], m[0] - cx, m[1] - cy, "hl");
      out += S.tx((cx + m[0]) / 2 + 4, (cy + m[1]) / 2 + 16, "R", { cls: "hl", bold: true, size: 14 });
      out += S.circle(cx, cy, 3, "ink-f") + S.tx(cx + 8, cy + 4, "center of curve", { size: 9.5, cls: "muted" });
      var lab = pt(-70, R + 16);
      out += S.tx(lab[0] + 6, lab[1] - 6, "centerline", { size: 9.5, cls: "muted" });
      return S.svg(out, 320, 150, "Plan view of a curve with the radius to the centerline");
    },
    caption: "Plan view: R runs from the center of the curve to the roadway centerline.",
    cite: "305-3.03 (minimum radius); Figures 305-4B to 305-4E list superelevation by R",
    typical: "Use the radius shown in the curve data. The Horizontal Curve page gives the minimum radius for the design speed and superelevation table.",
    mistakes: [
      "Entering the degree of curve instead of the radius.",
      "Using the radius of an edge line or the inside lane where the input asks for the centerline radius. The HSO page asks for both separately."
    ]
  });

  H.define("aadt", {
    title: "Design-year AADT",
    group: "general",
    what: "Average annual daily traffic for the design year: the total yearly volume in both directions divided by the number of days in the year (40-2.01).",
    where: "Use the design-year traffic forecast for the project (see 40-2.02 for design-year selection), not the current count.",
    sketch: function (S) {
      var r = S.planRoad({ y: 46, lanes: [1, 1], lw: 24 });
      return S.svg(r.svg +
        S.car(220, 58, -1) + S.arrow(196, 58, 150, 58, "hl") +
        S.car(90, 82, 1) + S.arrow(114, 82, 160, 82, "hl") +
        S.rect(110, 116, 100, 24, "glass", 4) + '<rect x="110" y="116" width="100" height="24" rx="4" class="hl"/>' +
        S.tx(160, 132, "both directions / day", { anchor: "middle", size: 10, cls: "hl", bold: true }) +
        S.tx(10, 30, "Forecast for the design year", { size: 9.5, cls: "muted" }), 320, 150, "Two-way road with traffic in both directions counted together");
    },
    caption: "AADT counts both directions together, for the design year.",
    cite: "40-2.01 (definition), 40-2.02 (design year)",
    typical: "Varies by project. The clear-zone and length-of-need figures (49-2A, 49-4E) group AADT into bands, so small changes rarely matter except near a band limit.",
    mistakes: [
      "Using the current-year count instead of the design-year forecast.",
      "Entering one direction on a two-way road. On a one-way roadway, Figure 49-2A uses the directional volume (see the clear-zone page note)."
    ]
  });

  H.define("projectScope", {
    title: "Project scope of work",
    group: "general",
    what: "The scope of work for the project: new construction or reconstruction (4R), 3R or partial 3R. The scope selects which set of geometric design criteria applies.",
    where: "The scope is set during project development; see the definitions in 40-6.01. For example, a 4R project includes conditions such as replacing more than 30% of the traveled-way pavement, or adding lanes for 10-year traffic demand (40-6.01(04)).",
    cite: "40-6.01, 40-6.02; criteria in Chapters 53 (4R), 54, 55 (3R) and 56 (partial 3R)",
    typical: "4R for new construction and reconstruction; 3R for resurfacing, restoration and rehabilitation of an existing highway.",
    mistakes: [
      "Applying 3R criteria to a project whose scope meets a 4R condition in 40-6.01."
    ]
  });

  H.define("pavedShoulder", {
    title: "Paved shoulder width (ft)",
    group: "xsec",
    what: "The width of the paved shoulder, measured from the edge of the travel lane to the outside edge of the paved shoulder.",
    where: "Take it from the typical section. Chapters 53 to 56 give the required paved and usable shoulder widths for each facility.",
    sketch: function (S) {
      var x = S.xsec({ cx: 120, y: 60, lanes: [1, 1], lw: 60, sh: [30, 70], fore: [30, 32] });
      var p = x.pts;
      return S.svg(x.svg +
        S.poly([p.eR, p.sR, [p.sR[0] - 4, p.sR[1] + 4], [p.eR[0], p.eR[1] + 6]], "hlf") +
        S.ln(p.eR[0], p.eR[1] - 4, p.eR[0], 32, "thin muted") + S.ln(p.sR[0], p.sR[1] - 4, p.sR[0], 32, "thin muted") +
        S.dim(p.eR[0], 30, p.sR[0], 30, "paved shoulder", {}) +
        S.tx(150, 50, "travel lane", { anchor: "middle", size: 9.5 }) +
        S.tx(p.eR[0] - 4, p.eR[1] + 24, "edge of travel lane", { anchor: "end", size: 9, cls: "muted" }), 320, 140, "Cross section with the paved shoulder dimensioned");
    },
    caption: "Measured from the edge of the travel lane to the edge of the paved shoulder.",
    cite: "45-1.02(01), 45-1.02(03); Figures 53-1 to 53-9 and 55-3A to 55-3H",
    typical: "Depends on facility and traffic; see the Lane & Shoulder Widths page for the required value.",
    mistakes: [
      "Entering the usable shoulder width where the paved width is asked for. Usable width is the width a driver can use for emergency parking or stopping, which can include an unpaved part (45-1.02(01)).",
      "Including the travel lane or the curb offset."
    ]
  });

  H.define("lanesPerDir", {
    title: "Through lanes per direction",
    group: "xsec",
    what: "The number of through travel lanes in one direction of travel. Do not count turn lanes, auxiliary lanes or parking lanes.",
    sketch: function (S) {
      var r = S.planRoad({ y: 30, lanes: [2, 2], lw: 20 });
      return S.svg(r.svg +
        S.rect(10, 70, 300, 40, "hlf") +
        S.car(250, 40, -1) + S.car(150, 60, -1) + S.car(80, 80, 1) + S.car(200, 100, 1) +
        S.dim(300, 72, 300, 108, "2 lanes", { cls: "dimc", side: -1, off: 6 }) +
        S.tx(10, 138, "Count one direction: this road has 2 lanes per direction.", { size: 10, cls: "muted" }), 320, 150, "Four-lane road with the two lanes in one direction highlighted");
    },
    caption: "Count the through lanes in one direction only.",
    cite: "Chapters 45 and 53 (criteria that vary with the number of lanes)",
    mistakes: [
      "Entering the total for both directions.",
      "Counting auxiliary, turn or parking lanes as through lanes."
    ]
  });

})(window.IDMHelp);
