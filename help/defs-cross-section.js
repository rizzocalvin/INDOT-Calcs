/* Input help definitions: cross-section calculators. See js/help.js. */
(function (H) {
  "use strict";

  // ------------------------------------------------------------ local sketch helpers

  // Slab (pavement layer) between two surface points, th px thick.
  function slab(S, p, q, th, cls) {
    return S.poly([p, q, [q[0], q[1] + th], [p[0], p[1] + th]], cls);
  }

  // Fill (embankment) half section. P: { y0 (lane surface at x=lx), lx, etl, hinge:[x,y], cz:[x,y], toe:[x,y], gx (ground end x), bottom }
  // hl: "s1" | "s2" | "body" | ""
  function fillSec(S, P, hl) {
    var a = [P.lx, P.y0], e = [P.etl, P.y0 + 2], h = P.hinge, c = P.cz, t = P.toe, g = [P.gx, t[1]];
    var out = "";
    out += S.poly([a, e, h, c, t, g, [g[0], P.bottom], [a[0], P.bottom]], "earth");
    if (hl === "body") out += S.poly([[a[0], a[1] + 6], e, h, c, t, [a[0], t[1]]], "hlf");
    out += slab(S, a, e, 6, "pave") + slab(S, e, h, 4, "pave2");
    out += S.pline([a, e, h, c, t, g], "edge");
    if (hl === "body") out += S.ln(a[0], t[1], t[0], t[1], "muted thin");
    if (hl === "s1") out += S.ln(h[0], h[1], c[0], c[1], "hl");
    if (hl === "s2") out += S.ln(c[0], c[1], t[0], t[1], "hl");
    return out;
  }

  // Cut (ditch) half section. P: { y0, lx, etl, hinge, d1 (foreslope bottom), d2 (ditch bottom end), top, gx, bottom }
  function cutSec(S, P, hl) {
    var a = [P.lx, P.y0], e = [P.etl, P.y0 + 2], h = P.hinge, d1 = P.d1, d2 = P.d2, tp = P.top, g = [P.gx, tp[1]];
    var out = "";
    if (hl === "body") out += S.poly([[a[0], tp[1]], g, tp, d2, d1, h, e, a], "hlf");
    out += S.poly([a, e, h, d1, d2, tp, g, [g[0], P.bottom], [a[0], P.bottom]], "earth");
    out += slab(S, a, e, 6, "pave") + slab(S, e, h, 4, "pave2");
    out += S.pline([a, e, h, d1, d2, tp, g], "edge");
    if (hl === "body") out += S.ln(a[0], tp[1], tp[0], tp[1], "muted thin");
    if (hl === "s1") out += S.ln(h[0], h[1], d1[0], d1[1], "hl");
    if (hl === "s2") out += S.ln(d2[0], d2[1], tp[0], tp[1], "hl");
    return out;
  }

  // Stacked fill (top) and cut (bottom) panels, 320 x 190.
  var FILL_SM = { y0: 32, lx: 10, etl: 50, hinge: [82, 35], cz: [170, 48], toe: [228, 70], gx: 312, bottom: 86 };
  var CUT_SM = { y0: 128, lx: 10, etl: 50, hinge: [82, 131], d1: [128, 156], d2: [146, 156], top: [226, 112], gx: 312, bottom: 186 };
  // Single large panels, 320 x 150.
  var FILL_LG = { y0: 50, lx: 10, etl: 70, hinge: [115, 53], cz: [215, 72], toe: [268, 104], gx: 312, bottom: 150 };
  var CUT_LG = { y0: 62, lx: 10, etl: 60, hinge: [100, 65], d1: [150, 100], d2: [172, 100], top: [262, 40], gx: 312, bottom: 150 };

  function etlMark(S, x, y1, y2) {
    return S.ln(x, y1, x, y2, "thin muted") + S.tx(x, y1 - 3, "ETL", { anchor: "middle", size: 9.5, cls: "muted" });
  }

  // Plan view of a tractor-semitrailer for the curve-widening vehicle inputs. hl: "u" | "wb" | "A" | "L"
  function truckSketch(S, hl) {
    function c(k) { return hl === k || (hl === "wb" && (k === "L1" || k === "L2")) || (hl === "L" && k === "L1") ? "hl" : "dimc"; }
    var out = "";
    var yT = 52, yB = 92, xr = 30, xf = 290, xAxF = 270, xAxD = 214, xAxT = 60;
    // tractor frame, trailer, cab
    out += S.rect(198, 62, 40, 20, "veh2", 2);
    out += S.rect(xr, yT, 192, yB - yT, "veh2", 2);
    out += S.rect(236, yT + 2, xf - 236, yB - yT - 4, "veh", 3);
    out += S.rect(276, yT + 6, 6, yB - yT - 12, "glass", 1);
    // tires (drawn on top): trailer tandem, drive tandem, steer axle
    [xAxT - 6, xAxT + 6, xAxD - 6, xAxD + 6].forEach(function (x) {
      out += S.rect(x - 4.5, 54, 9, 6, "ink-f", 1) + S.rect(x - 4.5, 84, 9, 6, "ink-f", 1);
    });
    out += S.rect(xAxF - 4.5, 54, 9, 6, "ink-f", 1) + S.rect(xAxF - 4.5, 84, 9, 6, "ink-f", 1);
    out += S.circle(xAxD, 72, 2.5, "glass") + S.circle(xAxD, 72, 2.5, "ink");
    // extension lines and longitudinal dimensions
    [xAxT, xAxD, xAxF].forEach(function (x) { out += S.ln(x, 52, x, 30, "thin muted"); });
    out += S.ln(xf, yT + 2, xf, 30, "thin muted");
    out += S.dim(xAxT, 34, xAxD, 34, "L2", { cls: c("L2") });
    out += S.dim(xAxD, 34, xAxF, 34, hl === "L" ? "L1 = L" : "L1", { cls: c("L1") });
    out += S.dim(xAxF, 34, xf, 34, "A", { cls: c("A") });
    // track width
    out += S.ln(xAxT - 12, 54, 16, 54, "thin muted") + S.ln(xAxT - 12, 90, 16, 90, "thin muted");
    out += S.dim(20, 54, 20, 90, "u", { cls: c("u"), side: -1, off: 5 });
    out += S.tx(xAxD, 106, "kingpin", { anchor: "middle", size: 9.5, cls: "muted" }) + S.ln(xAxD, 97, xAxD, 75, "thin muted");
    out += S.tx(10, 126, "Plan view, tractor-semitrailer, heading right.", { size: 9.5, cls: "muted" });
    return out;
  }

  // Schematic of an IDM geometric design figure. hl: "fig" | "col"
  function tableSketch(S, hl) {
    var out = "", x0 = 10, xe = 92, xa = 227, x1 = 310, top = 8;
    var cw = (xa - xe) / 3, aw = (x1 - xa) / 2;
    out += S.rect(x0, top, x1 - x0, 20, hl === "fig" ? "hlf" : "glass");
    out += S.tx(160, top + 14, "Figure 53-2, Rural Arterial (4R)", { anchor: "middle", size: 10.5, bold: true, cls: hl === "fig" ? "hl" : "" });
    if (hl === "col") out += S.rect(xe + cw, 30, cw, 110, "hlf");
    // header
    out += S.tx((xe + xa) / 2, 42, "Design columns", { anchor: "middle", size: 9.5, cls: "muted" });
    out += S.tx((xa + x1) / 2, 42, "Alignment", { anchor: "middle", size: 9.5, cls: "muted" });
    var heads = ["< 400", "400-2000", "≥ 2000"];
    heads.forEach(function (t, i) { out += S.tx(xe + cw * (i + 0.5), 58, t, { anchor: "middle", size: 9.5, cls: hl === "col" && i === 1 ? "hl" : "", bold: hl === "col" && i === 1 }); });
    out += S.tx(xa + aw * 0.5, 58, "50 mph", { anchor: "middle", size: 9.5 }) + S.tx(xa + aw * 1.5, 58, "55 mph", { anchor: "middle", size: 9.5 });
    out += S.tx(x0 + 4, 58, "Element", { size: 9.5, bold: true });
    // rows
    var rows = [["Lane width", "m"], ["Shoulder", "m"], ["Cross slope", "m"], ["Min. radius", "a"]];
    rows.forEach(function (r, i) {
      var y = 64 + i * 19;
      out += S.ln(x0, y, x1, y, "ink thin");
      out += S.tx(x0 + 4, y + 13, r[0], { size: 9.5 });
      var cols = r[1] === "m" ? [0, 1, 2].map(function (k) { return xe + cw * k; }) : [0, 1].map(function (k) { return xa + aw * k; });
      var w = r[1] === "m" ? cw : aw;
      cols.forEach(function (cx) { out += S.rect(cx + 10, y + 7, w - 20, 5, "pave2", 2); });
    });
    out += S.ln(x0, 140, x1, 140, "ink thin");
    [x0, xe, xa, x1].forEach(function (x) { out += S.ln(x, 30, x, 140, "ink thin"); });
    out += S.ln(xe + cw, 46, xe + cw, 140, "thin muted") + S.ln(xe + 2 * cw, 46, xe + 2 * cw, 140, "thin muted") + S.ln(xa + aw, 46, xa + aw, 140, "thin muted");
    out += S.ln(x0, 30, x1, 30, "ink thin") + S.ln(xe, 46, x1, 46, "thin muted");
    return out;
  }

  // ------------------------------------------------------------ cross slopes

  H.define("xs-sectionType", {
    title: "Section type (crown location)",
    group: "xsec",
    what: "How the tangent roadway is crowned. Pick the case that matches the work: a 2-lane highway, a new or reconstructed divided roadway, lanes added to an existing divided roadway, or an existing roadway with all lanes sloped one way that is being overlaid.",
    where: "Choose from the typical section and the project scope. <b>2-lane highway:</b> crowned at the centerline, 2% each way. <b>Divided, new or reconstruction:</b> two lanes per direction are crowned at the roadway centerline; with three lanes the crown is on the lane line between the center lane and the median-side lane, and the right two lanes slope outward; with four lanes the crown is at the one-way roadway centerline. <b>Lanes added to existing:</b> keep the existing crown; added lanes take the slope direction and rate of the adjacent lane, and a third lane sloped the same way is 3%. <b>Existing, one direction (overlay):</b> with two lanes, thicken the overlay 3 in. at the inside edge to get a uniform 2%; with three lanes, use 3% on the outside lane; a lane added in the median slopes 2% toward the median.",
    sketch: function (S) {
      var out = "";
      // 2-lane highway
      out += S.tx(10, 16, "2-lane highway", { size: 10, bold: true });
      var a = [60, 42], c = [160, 34], b = [260, 42];
      out += slab(S, a, c, 7, "pave") + slab(S, c, b, 7, "pave") + S.pline([a, c, b], "edge");
      out += S.circle(c[0], c[1], 3.5, "hl-f") + S.tx(c[0], c[1] - 8, "crown at CL", { anchor: "middle", size: 10, cls: "hl", bold: true });
      out += S.arrow(130, 56, 100, 59, "dimc") + S.arrow(190, 56, 220, 59, "dimc");
      out += S.tx(115, 71, "2%", { anchor: "middle", size: 9.5, cls: "dimc" }) + S.tx(205, 71, "2%", { anchor: "middle", size: 9.5, cls: "dimc" });
      // divided 3-lane
      out += S.tx(10, 88, "Divided, 3 lanes, new construction", { size: 10, bold: true });
      var m = [60, 110], k = [120, 104], p = [180, 110], q = [240, 116];
      out += S.ln(60, 96, 60, 134, "thin muted") + S.tx(56, 130, "median", { anchor: "end", size: 9.5, cls: "muted" });
      out += slab(S, m, k, 7, "pave") + slab(S, k, p, 7, "pave") + slab(S, p, q, 7, "pave") + S.pline([m, k, p, q], "edge");
      out += S.rect(p[0] - 1.5, p[1] - 1.6, 3, 2.4, "lanef");
      out += S.circle(k[0], k[1], 3.5, "hl-f") + S.tx(k[0] + 8, k[1] - 6, "crown", { size: 10, cls: "hl", bold: true });
      out += S.arrow(100, 127, 80, 129, "dimc") + S.arrow(140, 127, 160, 129, "dimc") + S.arrow(200, 133, 220, 135, "dimc");
      out += S.tx(90, 144, "2%", { anchor: "middle", size: 9.5, cls: "dimc" }) + S.tx(150, 144, "2%", { anchor: "middle", size: 9.5, cls: "dimc" }) + S.tx(250, 138, "2%", { size: 9.5, cls: "dimc" });
      return S.svg(out, 320, 150, "Crown locations for a 2-lane highway and a divided three-lane roadway");
    },
    caption: "Cross sections looking ahead; arrows point downslope. Slopes exaggerated.",
    cite: "45-1.01(02)",
    typical: "2% on all travel lanes of a State highway tangent. 3% applies only to the third and fourth lanes when three or more lanes slope the same direction, and to the outside lane when three existing lanes slope one way (45-1.01(02)).",
    mistakes: [
      "Choosing new construction when the project adds lanes to an existing divided roadway. The existing crown is kept in that case.",
      "Using this page for a bridge deck. A new or reconstructed bridge is 2% from the crown to the face of the railing or curb; an existing bridge to remain may keep 1.5% (45-1.01(02) item 3).",
      "Using tangent cross slopes inside a superelevated curve. See the Superelevation page and Chapter 305."
    ]
  });

  H.define("xs-routeSurface", {
    title: "Route system and surface",
    group: "xsec",
    what: "Whether the road is a State highway or a non-State road, and for a non-State road whether the travel lanes are paved or aggregate. This sets the base travel-lane cross slope.",
    where: "From the project jurisdiction and the existing or proposed surface type. State highway rules are in 45-1.01(02) items 1 to 3. A non-State paved road uses the State value (2%); a non-State road with an aggregate surface uses 6%.",
    sketch: function (S) {
      var out = "";
      var c = [160, 54], l = [30, 60], r = [290, 78];
      out += S.poly([[10, 62], l, c, r, [310, 80], [310, 150], [10, 150]], "earth");
      out += slab(S, l, c, 8, "pave") + slab(S, c, r, 8, "hlf2");
      out += S.pline([[10, 62], l, c, r, [310, 80]], "edge");
      out += S.ln(160, 30, 160, 52, "thin muted") + S.tx(160, 26, "CL", { anchor: "middle", size: 9.5, cls: "muted" });
      out += S.tx(90, 40, "State or non-State paved", { anchor: "middle", size: 10 }) + S.tx(90, 86, "2%", { anchor: "middle", size: 12, bold: true, cls: "dimc" });
      out += S.arrow(110, 96, 70, 99, "dimc");
      out += S.tx(228, 52, "Non-State aggregate", { anchor: "middle", size: 10, cls: "hl", bold: true }) + S.tx(222, 104, "6%", { anchor: "middle", size: 12, bold: true, cls: "hl" });
      out += S.arrow(202, 114, 244, 120, "hl");
      return S.svg(out, 320, 150, "Crowned section: paved half at 2 percent, aggregate half at 6 percent");
    },
    caption: "Paved travel lanes: 2%. Non-State aggregate surface: 6%. Slopes exaggerated.",
    cite: "45-1.01(02)",
    typical: "2% for State highways and non-State paved roads; 6% for a non-State aggregate surface (45-1.01(02)). The IDM notes that non-State cross slopes vary with surface type and local practice.",
    mistakes: [
      "Choosing aggregate because the shoulders are aggregate. This input is the travel-lane surface; the shoulder type is the Edge treatment input."
    ]
  });

  H.define("xs-edgeTreatment", {
    title: "Outside edge treatment",
    group: "xsec",
    what: "What lies beyond the outside travel lane: a paved shoulder, a curb with a curb offset, an aggregate shoulder or an earth shoulder. Each has its own cross slope.",
    where: "From the typical section. Surface type follows 45-1.02(04): on a new or reconstruction State highway the shoulder is paved (asphalt or concrete); on a 3R or partial 3R State project it should be paved, though sealed aggregate may be appropriate; a non-State shoulder should be paved, but sealed aggregate or earth is acceptable.",
    sketch: function (S) {
      var out = "";
      var names = [["Paved", "4% *"], ["Curb", "= lane"], ["Aggregate", "4 to 6%"], ["Earth", "6 to 8%"]];
      var drops = [5, 1, 6, 9];
      for (var i = 0; i < 4; i++) {
        var x0 = 6 + i * 78, y = 52;
        var a = [x0, y], e = [x0 + 36, y + 1.5], s = [x0 + 68, y + 1.5 + drops[i]];
        out += slab(S, a, e, 8, "pave");
        if (i === 1) {
          var f = [x0 + 56, y + 2.3];
          out += slab(S, e, f, 8, "hlf2") + S.pline([a, e, f], "edge");
          out += S.poly([[f[0], f[1]], [f[0], y - 8], [f[0] + 3, y - 10], [f[0] + 8, y - 10], [f[0] + 8, y + 12], [f[0], y + 12]], "obj");
        } else {
          out += slab(S, e, s, 6, "hlf2") + S.pline([a, e, s], "edge");
          out += S.ln(s[0], s[1], s[0] + 8, s[1] + 10, "edge");
        }
        out += S.tx(x0 + 34, 92, names[i][0], { anchor: "middle", size: 10, bold: true });
        out += S.tx(x0 + 34, 107, names[i][1], { anchor: "middle", size: 10, cls: "hl", bold: true });
      }
      out += S.tx(10, 26, "Lane (grey) and the outside edge (orange)", { size: 9.5, cls: "muted" });
      out += S.tx(10, 136, "* Paved ≤ 4 ft matches the lane; > 4 ft see Fig. 45-1A", { size: 9.5, cls: "muted" });
      return S.svg(out, 320, 150, "Four outside-edge treatments with their cross slopes");
    },
    caption: "Shoulder cross slope by edge type (45-1.02(05)). Slopes exaggerated.",
    cite: "45-1.02(04), 45-1.02(05); Figures 45-1A(1) and 45-1A(2)",
    typical: "Paved: 4%, except that a paved shoulder 4 ft or narrower takes the travel-lane slope. Curb offset: paved, same slope as the adjacent lane (typically 2%). Aggregate: 4 to 6%. Earth: 6 to 8% (45-1.02(05)). The shoulder slope should be the same across the full usable width.",
    mistakes: [
      "Choosing an aggregate or earth shoulder on a new or reconstruction State highway. Those shoulders are paved (45-1.02(04)).",
      "Treating the curb offset as a 4% shoulder. A curb offset has the same slope as the adjacent travel lane."
    ]
  });

  H.define("xs-underdrains", {
    title: "Underdrains at edge of travel lane",
    group: "xsec",
    what: "Whether underdrains run along the edge of the travel lane. This selects Figure 45-1A(1) (with underdrains) or 45-1A(2) (without), which differ only for paved shoulders wider than 4 ft.",
    where: "From the typical section and the drainage design. With underdrains, a paved shoulder over 4 ft is 2% for the 2 ft next to the travel lane, then 4%. Without underdrains it is 4% across. A paved shoulder of 4 ft or less matches the travel lane either way.",
    sketch: function (S) {
      var out = "";
      var a = [10, 52], e = [130, 56], m = [162, 57], s = [292, 68];
      out += S.poly([[10, 58], a, e, m, s, [312, 82], [312, 150], [10, 150]], "earth");
      out += slab(S, a, e, 10, "pave") + slab(S, e, m, 8, "pave2") + slab(S, m, s, 8, "pave2");
      out += S.pline([a, e, m, s, [312, 82]], "edge");
      out += S.ln(130, 30, 130, 54, "thin muted") + S.ln(162, 30, 162, 55, "thin muted");
      out += S.dim(130, 34, 162, 34, "2 ft", { cls: "dimc" });
      out += S.tx(70, 44, "lane 2%", { anchor: "middle", size: 10 });
      out += S.tx(146, 50, "2%", { anchor: "middle", size: 9.5, cls: "dimc" });
      out += S.tx(228, 54, "then 4%", { anchor: "middle", size: 10, cls: "dimc" });
      out += S.circle(130, 84, 6, "hlf2") + S.circle(130, 84, 6, "hl");
      out += S.leader(170, 104, 136, 86, "underdrain at edge of lane", { cls: "hl" });
      out += S.tx(10, 140, "Without underdrains: 4% across a shoulder wider than 4 ft", { size: 9.5, cls: "muted" });
      return S.svg(out, 320, 150, "Paved shoulder with underdrain: 2 percent for 2 feet then 4 percent");
    },
    caption: "Figure 45-1A(1): with underdrains, the first 2 ft of a wide paved shoulder matches the lane.",
    cite: "45-1.02(05); Figures 45-1A(1) and 45-1A(2)",
    typical: "Shoulder ≤ 4 ft: 2% (match the lane) with or without underdrains. Shoulder > 4 ft: 2% for 2 ft then 4% with underdrains; 4% without. Where the lane slope is not 2%, the 2% parts match the lane slope instead (note 1 to both figures).",
    mistakes: [
      "Applying these tangent figures on a superelevated curve. There the high-side shoulder follows 305-4.06(01), where the first 2 ft matches the lane on interstates, high-volume roads or where underdrains are present."
    ]
  });

  H.define("xs-auxLane", {
    title: "Auxiliary lane on the outside",
    group: "xsec",
    what: "Whether an auxiliary lane (turn, acceleration, deceleration or climbing lane) runs outside the through lanes. Its cross slope is 1% greater than the adjacent through lane.",
    where: "From the plans at the station being checked. 45-1.03 defines an auxiliary lane as a left- or right-turn lane, acceleration or deceleration lane, or climbing lane. For superelevated sections see 305-4.07.",
    sketch: function (S) {
      var out = "";
      var p0 = [20, 50], p1 = [110, 56], p2 = [200, 62], p3 = [280, 71], p4 = [310, 74];
      out += S.poly([[10, 50], p0, p1, p2, p3, p4, [312, 76], [312, 150], [10, 150]], "earth");
      out += slab(S, p0, p1, 9, "pave") + slab(S, p1, p2, 9, "pave") + slab(S, p2, p3, 9, "hlf2") + slab(S, p3, p4, 7, "pave2");
      out += S.pline([[10, 50], p0, p1, p2, p3, p4], "edge");
      out += S.rect(p1[0] - 1.5, p1[1] - 1.6, 3, 2.4, "lanef") + S.rect(p2[0] - 1.5, p2[1] - 1.6, 3, 2.4, "lanef");
      out += S.tx(65, 40, "through 2%", { anchor: "middle", size: 10 }) + S.tx(155, 46, "through 2%", { anchor: "middle", size: 10 });
      out += S.tx(240, 52, "auxiliary 3%", { anchor: "middle", size: 10.5, cls: "hl", bold: true });
      out += S.tx(10, 120, "Auxiliary lane = adjacent through lane + 1%", { size: 10, cls: "muted" });
      return S.svg(out, 320, 150, "Two through lanes at 2 percent and an auxiliary lane at 3 percent");
    },
    caption: "The auxiliary lane slopes 1% more than the through lane next to it (45-1.03).",
    cite: "45-1.03; 305-4.07 (superelevated sections)",
    typical: "3% next to a 2% through lane. A paved shoulder of 4 ft or less next to the auxiliary lane matches the auxiliary-lane slope.",
    mistakes: [
      "Giving the auxiliary lane the through-lane slope.",
      "Adding 1% to the wrong lane. The increase is over the adjacent through lane, which may itself be 3%."
    ]
  });

  // ------------------------------------------------------------ lane and shoulder widths (design criteria)

  H.define("xs-facilityFigure", {
    title: "Facility / IDM figure",
    group: "xsec",
    what: "The IDM geometric design figure for the facility: functional class, rural or urban, and in some cases the number of lanes or who owns the route. The list depends on the project scope chosen above.",
    where: "Chapter 53 (4R): 53-1 freeway; 53-2 rural arterial; 53-3 and 53-4 rural collector (State route, local-agency route); 53-5 rural local road; 53-6 and 53-7 urban arterial (4+ lanes, 2 lanes); 53-8 urban collector; 53-9 urban local street. Chapter 55 (non-freeway 3R) has the same set as Figures 55-3A to 55-3H. Chapter 54 (Figure 54-2A) covers freeway 3R and partial 4R, and Chapter 56 (Figures 56-4A to 56-4D) covers partial 3R. Functional class maps for all public roads come from the Planning Division (53-1.0 item 3).",
    sketch: function (S) { return S.svg(tableSketch(S, "fig"), 320, 150, "Schematic of an IDM design figure with the figure title highlighted"); },
    caption: "One figure per facility type. The columns are picked with the next two inputs.",
    cite: "53-1.0; 40-1.01; Figures 53-1 to 53-9, 54-2A, 55-3A to 55-3H, 56-4A to 56-4D",
    typical: "Use the functional class predicted for the design year (40-1.01). A curbed rural arterial uses the criteria in Figure 53-6 or 53-7 (note to Figure 53-2).",
    mistakes: [
      "Using today's functional class instead of the class predicted for the design year.",
      "Picking Figure 54-3A, 54-3B, 56-4E or 56-4F. Those are deceleration-length and work-type tables, so there are no lane or shoulder widths to check.",
      "Using an urban figure for a road through a sparsely built area without documenting it. 53-1.0 items 4 and 5 allow the switch either way, documented in the Engineer's Report."
    ]
  });

  H.define("xs-designColumn", {
    title: "Design column (AADT, area type or condition)",
    group: "xsec",
    what: "The column of the figure that applies: a design-year AADT range on rural figures, the urban area type (suburban, intermediate or built-up) on urban figures, or a condition such as divided or undivided.",
    where: "Use the design-year AADT (40-2.0). Urban area types are defined in 40-1.02 and 53-1.0 item 4: <b>suburban</b> is the fringe of an urban area with low to moderate roadside density and right of way often available; <b>intermediate</b> lies between, with pedestrians a significant design factor and right of way limited; <b>built-up</b> is the central business district, with high density and right of way usually not available.",
    sketch: function (S) { return S.svg(tableSketch(S, "col"), 320, 150, "Schematic of an IDM design figure with one design column highlighted"); },
    caption: "The design column sets the lane, shoulder and cross-slope rows.",
    cite: "40-1.02, 40-2.0; 53-1.0 items 4 and 5; Chapters 53 to 56 figures",
    typical: "Posted speed ranges in 53-1.0 item 4 help place an urban arterial: suburban 35 to 55 mph, intermediate 35 to 50 mph, built-up 25 to 35 mph.",
    mistakes: [
      "Using the current-year count instead of the design-year AADT.",
      "Picking the AADT band for one direction on a two-way road. AADT counts both directions."
    ]
  });

  H.define("xs-usableShoulder", {
    title: "Usable shoulder width (ft)",
    group: "xsec",
    what: "The width of shoulder a driver can use for emergency parking or stopping, from the edge of the travel lane to the point where the side slope steeper than the shoulder begins. It includes any unpaved part, so it is usually wider than the paved shoulder.",
    where: "Measure on the typical section from the edge of the travel lane to the shoulder break (Figure 45-1A). The effective usable width is the usable width minus 1 ft, but not less than the required paved width (45-1.02(01)). Next to barrier, Figure 45-1A part B applies; see 49-5.0.",
    sketch: function (S) {
      var out = "";
      var a = [10, 62], e = [120, 65], p = [188, 68], u = [236, 70], g = [312, 96];
      out += S.poly([[10, 62], e, p, u, g, [312, 150], [10, 150]], "earth");
      out += slab(S, a, e, 9, "pave") + slab(S, e, p, 7, "pave2") + slab(S, p, u, 5, "hlf");
      out += S.pline([a, e, p, u, g], "edge");
      out += S.ln(120, 26, 120, 62, "thin muted") + S.ln(188, 46, 188, 66, "thin muted") + S.ln(236, 26, 236, 68, "thin muted");
      out += S.dim(120, 30, 236, 30, "usable", {});
      out += S.dim(120, 50, 188, 50, "paved", { cls: "dimc" });
      out += S.tx(65, 88, "travel lane", { anchor: "middle", size: 9.5 });
      out += S.tx(212, 90, "unpaved", { anchor: "middle", size: 9.5, cls: "muted" });
      out += S.tx(306, 114, "4:1 or flatter", { anchor: "end", size: 9.5, cls: "muted" });
      out += S.tx(10, 140, "Effective usable = usable − 1 ft (not less than paved)", { size: 9.5, cls: "muted" });
      return S.svg(out, 320, 150, "Cross section with paved and usable shoulder widths dimensioned from the edge of travel lane");
    },
    caption: "Both widths start at the edge of the travel lane. Usable runs to the shoulder break.",
    cite: "45-1.02(01), Figure 45-1A; Figures 53-1 to 53-9 and 55-3A to 55-3H",
    typical: "Example: a 4R freeway right shoulder is 11 ft usable and 10 ft paved (Figure 53-1).",
    mistakes: [
      "Entering the paved width here. The usable width is measured to the shoulder break and is normally the larger of the two.",
      "Measuring from the centerline or the lane line instead of the edge of the travel lane."
    ]
  });

  H.define("xs-leftShoulderPaved", {
    title: "Left (median) shoulder, paved (ft)",
    group: "xsec",
    what: "On a divided facility, the paved width of the shoulder on the median side of a roadway, from the edge of the left travel lane. Leave it blank for an undivided road.",
    where: "Take it from the typical section. Some figures print the left shoulder by the number of lanes per direction; the page uses the Through lanes per direction input to pick the value. Footnote 5 to Figure 53-1 says the usable width equals the paved width (5a) but also that a left shoulder 4 ft or wider has a usable width 1 ft more than the paved width (5c); the page checks the paved width only.",
    sketch: function (S) {
      var out = "";
      var md = [16, 104], f = [70, 70], s = [114, 66], c = [174, 62], e = [234, 66], r = [278, 69], g = [312, 90];
      out += S.poly([[10, 104], md, f, s, c, e, r, g, [312, 150], [10, 150]], "earth");
      out += slab(S, f, s, 6, "hlf2") + slab(S, s, c, 8, "pave") + slab(S, c, e, 8, "pave") + slab(S, e, r, 6, "pave2");
      out += S.pline([[10, 104], md, f, s, c, e, r, g], "edge");
      out += S.rect(c[0] - 1.5, c[1] - 1.6, 3, 2.4, "lanef");
      out += S.ln(70, 40, 70, 66, "thin muted") + S.ln(114, 40, 114, 62, "thin muted");
      out += S.dim(70, 44, 114, 44, "left shoulder", {});
      out += S.tx(40, 124, "median", { anchor: "middle", size: 9.5, cls: "muted" });
      out += S.tx(174, 92, "through lanes", { anchor: "middle", size: 9.5 });
      out += S.tx(258, 92, "right shoulder", { anchor: "middle", size: 9.5, cls: "muted" });
      return S.svg(out, 320, 150, "One roadway of a divided highway with the median-side shoulder highlighted");
    },
    caption: "Divided roadway: the left shoulder is on the median side.",
    cite: "45-1.02(01), 45-1.02(03); Figure 53-1 footnote 5; Figures 54-2A and 56-4B",
    typical: "Figure 53-1 (4R freeway): with 2 lanes per direction, rural desirable 8 ft and minimum 4 ft paved, urban 4 ft paved; with 3 lanes, 10 ft paved. Where there are 3 or more lanes in one direction and trucks exceed 250 DDHV, use 12 ft (footnote 5b).",
    mistakes: [
      "Entering the right (outside) shoulder width here.",
      "Forgetting to set Through lanes per direction, which picks between the 2-lane and 3-lane values."
    ]
  });

  H.define("xs-auxLaneWidth", {
    title: "Auxiliary lane width (ft)",
    group: "xsec",
    what: "The proposed width of an auxiliary lane (turn, acceleration, deceleration or climbing lane), measured from the lane line to the edge of the lane. It is checked against the figure's auxiliary-lane row.",
    where: "From the typical section or the intersection plan. 45-1.03: an auxiliary lane should be the same width as the adjacent travel lane, but not less than 1 ft narrower. The Chapter 53 to 55 figures give the specific values and the shoulder width next to the auxiliary lane.",
    sketch: function (S) {
      var out = S.rect(10, 98, 300, 30, "grass");
      var r = S.planRoad({ y: 40, lanes: 2, lw: 24 });
      out += r.svg;
      out += S.poly([[90, 88], [150, 112], [310, 112], [310, 88]], "pave");
      out += S.poly([[90, 88], [150, 112], [310, 112], [310, 88]], "hlf");
      out += S.pline([[90, 88], [150, 112], [310, 112]], "edge");
      out += S.ln(10, 64, 310, 64, "lane");
      out += S.car(60, 52, 1) + S.car(140, 76, 1) + S.car(200, 100, 1);
      out += S.dim(266, 88, 266, 112, "aux", { side: -1, off: 6 });
      out += S.dim(30, 64, 30, 88, "through", { cls: "dimc", side: 1, off: 6 });
      out += S.tx(10, 142, "Same as the through lane, not more than 1 ft narrower", { size: 9.5, cls: "muted" });
      return S.svg(out, 320, 150, "Plan view of two through lanes with an added auxiliary lane, its width dimensioned");
    },
    caption: "Plan view: auxiliary-lane width compared with the adjacent through lane.",
    cite: "45-1.03; Figures 53-1 to 53-9 and 55-3A to 55-3H",
    typical: "Example: 4R rural arterial, desirable 12 ft and minimum 11 ft (Figure 53-2); a truck climbing lane is 12 ft (Figure 53-2 footnote 5).",
    mistakes: [
      "Including the gutter or curb offset in the lane width.",
      "Making the auxiliary lane more than 1 ft narrower than the adjacent through lane."
    ]
  });

  H.define("xs-curbOffset", {
    title: "Curb offset (ft)",
    group: "xsec",
    what: "The distance from the edge of the travel lane to the face of the curb (45-1.02(01)). Enter it only for a curbed section.",
    where: "Measure on the typical section from the edge of the travel lane to the face of curb. The curb offset is paved and has the same cross slope as the adjacent lane (45-1.02(05)). On curbed urban sections, the Chapter 53 footnotes say the curb offset is included in the paved shoulder width.",
    sketch: function (S) {
      var out = "";
      var a = [10, 60], e = [150, 63], f = [200, 64.2];
      out += S.poly([[10, 60], e, f, [200, 50], [212, 50], [212, 54], [312, 53], [312, 150], [10, 150]], "earth");
      out += slab(S, a, e, 9, "pave") + slab(S, e, f, 9, "hlf2");
      out += S.pline([a, e, f], "edge");
      out += S.poly([[200, 73], [200, 52], [203, 49], [212, 49], [212, 73]], "obj");
      out += S.ln(212, 54, 312, 53, "edge");
      out += S.ln(150, 32, 150, 61, "thin muted") + S.ln(200, 32, 200, 47, "thin muted");
      out += S.dim(150, 36, 200, 36, "curb offset", {});
      out += S.tx(146, 92, "edge of travel lane", { anchor: "end", size: 9.5, cls: "muted" });
      out += S.tx(204, 92, "face of curb", { size: 9.5, cls: "muted" });
      out += S.tx(70, 50, "travel lane", { anchor: "middle", size: 9.5 });
      return S.svg(out, 320, 150, "Cross section with the curb offset dimensioned from the edge of travel lane to the face of curb");
    },
    caption: "Measured to the face of curb, not the back of curb.",
    cite: "45-1.02(01) item 4, 45-1.02(05); Figure 45-2A; footnotes to Figures 53-6 to 53-9",
    typical: "4R urban (Figures 53-6 to 53-9): 2 ft. A continuous curb along a median or channelizing island may be offset 1 ft, and next to an auxiliary lane the offset may be zero (footnotes). 3R urban (Figures 55-3E to 55-3H): desirable 2 ft, minimum 1 ft.",
    mistakes: [
      "Measuring to the back of curb.",
      "Adding the curb offset on top of the paved shoulder width on a curbed section. The curb offset is included in the paved shoulder width (Chapter 53 footnotes)."
    ]
  });

  // ------------------------------------------------------------ side slopes

  H.define("xs-areaType", {
    title: "Area (rural or urban)",
    group: "xsec",
    what: "Whether the facility is rural or urban. Figures 45-3A to 45-3D give different side-slope criteria for rural and urban local roads, collectors and curbed sections.",
    where: "Use the area used for the project design criteria. 53-1.0 items 4 and 5: an urban facility in an area that is rural in character may use rural criteria, and a rural facility in a relatively built-up area may use urban (suburban) criteria; document the choice in the Engineer's Report.",
    cite: "53-1.0 items 4 and 5; Figures 45-3A to 45-3D",
    mistakes: [
      "Choosing a different area here than the one used for the lane and shoulder criteria."
    ]
  });

  H.define("xs-functionalClass", {
    title: "Functional class",
    group: "xsec",
    what: "The functional class of the road: freeway, arterial, collector, or local road or street. It sets which row of Figures 45-3A to 45-3D applies.",
    where: "Use the functional class predicted for the design year (40-1.01). The Planning Division's functional class maps cover all public roads (53-1.0 item 3).",
    cite: "40-1.01; Figures 45-3A to 45-3D",
    typical: "Freeways have no curbed fill or cut criteria: Figures 45-3B and 45-3D show N/A for freeways.",
    mistakes: [
      "Choosing freeway for an expressway. A divided principal arterial with partial access control is an expressway, not a freeway (40-1.01(01))."
    ]
  });

  H.define("xs-curbed", {
    title: "Curbed section",
    group: "xsec",
    what: "Whether the roadway has a curb at the outside edge. Curbed sections use Figure 45-3B (fill) and 45-3D (cut), where the slope starts behind a shelf instead of at the shoulder edge.",
    where: "From the typical section. In fill, the fill slope begins a distance X behind the curb on a 12:1 slope (Figure 45-3B). In cut, a shelf is provided behind the curb with a backslope beyond it (45-3.02(01), Figure 45-3D).",
    sketch: function (S) {
      var out = "";
      var a = [10, 50], e = [80, 52], k = [92, 46], x = [166, 52], t = [262, 106], g = [312, 106];
      out += S.poly([a, e, [80, 44], [83, 41], k, x, t, g, [312, 150], [10, 150]], "earth");
      out += slab(S, a, e, 8, "pave");
      out += S.poly([[80, 60], [80, 44], [83, 41], [92, 41], [92, 60]], "hlf2") + S.pline([[80, 60], [80, 44], [83, 41], [92, 41], [92, 46]], "hl");
      out += S.pline([a, e], "edge") + S.pline([k, x, t, g], "edge");
      out += S.ln(92, 22, 92, 38, "thin muted") + S.ln(166, 22, 166, 49, "thin muted");
      out += S.dim(92, 26, 166, 26, "X", { cls: "dimc" });
      out += S.tx(129, 44, "12:1", { anchor: "middle", size: 9.5, cls: "muted" });
      out += S.leader(30, 84, 86, 52, "curb", { cls: "hl" });
      out += S.tx(232, 72, "fill slope", { size: 9.5, cls: "muted" });
      return S.svg(out, 320, 150, "Curbed fill section: curb, 12 to 1 shelf of width X, then the fill slope");
    },
    caption: "Figure 45-3B: the fill slope starts X behind the curb.",
    cite: "45-3.01, 45-3.02(01); Figures 45-3B and 45-3D",
    mistakes: [
      "Choosing curbed for a freeway. Figures 45-3B and 45-3D are N/A for freeways."
    ]
  });

  H.define("xs-sidewalk", {
    title: "Sidewalk present or anticipated",
    group: "xsec",
    what: "Whether a sidewalk exists or is anticipated behind the curb. On curbed sections it sets the width X behind the curb before the fill slope starts (Figure 45-3B) and the shelf width in cut (Figure 45-3D).",
    where: "From the project scope and local plans; see 45-1.06 for when sidewalk is included. Figure 45-3B: X is 5 ft rural (11 ft if sidewalks are present or anticipated) and 11 ft urban (may be reduced to 5 ft without sidewalk). Figure 45-3D: the shelf is 11 ft, including a 1-ft appurtenance strip behind the sidewalk, or 5 ft with no sidewalk.",
    sketch: function (S) {
      var out = "";
      var a = [10, 50], e = [70, 52], k = [82, 46], x = [176, 50], t = [270, 106], g = [312, 106];
      out += S.poly([a, e, [70, 44], [73, 41], k, x, t, g, [312, 150], [10, 150]], "earth");
      out += slab(S, a, e, 8, "pave");
      out += S.poly([[70, 60], [70, 44], [73, 41], [82, 41], [82, 60]], "obj");
      out += S.pline([a, e], "edge") + S.pline([k, x, t, g], "edge");
      out += S.poly([[100, 46.8], [160, 49.3], [160, 53.3], [100, 50.8]], "hlf2");
      out += S.ln(82, 18, 82, 38, "thin muted") + S.ln(176, 18, 176, 47, "thin muted");
      out += S.dim(82, 22, 176, 22, "X or shelf", { cls: "dimc" });
      out += S.leader(150, 82, 130, 51, "sidewalk", { cls: "hl" });
      out += S.tx(10, 130, "11 ft with sidewalk (incl. 1 ft behind it); 5 ft without", { size: 9.5, cls: "muted" });
      return S.svg(out, 320, 150, "Curbed section with a sidewalk on the shelf behind the curb");
    },
    caption: "The sidewalk sits on the shelf behind the curb and sets its width.",
    cite: "45-3.02(01); Figures 45-3B and 45-3D; 45-1.06",
    typical: "11 ft with sidewalk; 5 ft without. The shelf slope is 12:1, or 50:1 where a sidewalk exists, is to be built or is anticipated (Figure 45-3D).",
    mistakes: [
      "Answering only for an existing sidewalk. An anticipated future sidewalk also needs the 11-ft dimension."
    ]
  });

  H.define("xs-fillOrCut", {
    title: "Fill or cut section",
    group: "xsec",
    what: "Whether the roadway is on fill (embankment above natural ground) or in cut (below natural ground, with a roadside ditch). Fill uses Figures 45-3A and 45-3B; cut uses Figures 45-3C and 45-3D.",
    where: "From the cross sections at the station being checked. A fill slope runs outward and downward from the edge of the shoulder to natural ground (45-3.01). A cut section on an uncurbed facility has a foreslope, ditch and backslope (45-3.02(01)).",
    sketch: function (S) {
      var out = "";
      out += S.tx(312, 16, "FILL", { anchor: "end", size: 10, bold: true, cls: "hl" });
      out += fillSec(S, FILL_SM, "body");
      out += S.tx(312, 104, "CUT", { anchor: "end", size: 10, bold: true, cls: "hl" });
      out += cutSec(S, CUT_SM, "body");
      out += S.tx(14, 82, "natural ground", { size: 9.5, cls: "muted" });
      out += S.tx(14, 108, "natural ground", { size: 9.5, cls: "muted" });
      return S.svg(out, 320, 190, "Fill section with the embankment highlighted and cut section with the excavation highlighted");
    },
    caption: "Fill: embankment above natural ground. Cut: excavated below it, with a ditch.",
    cite: "45-3.01, 45-3.02; Figures 45-3A to 45-3D",
    mistakes: [
      "Checking a cut section as fill where the shoulder is only slightly above the ditch. If there is a ditch with a backslope, it is a cut section."
    ]
  });

  H.define("xs-slopeHeight", {
    title: "Fill height or cut depth, H (ft)",
    group: "xsec",
    what: "For fill, the vertical height from the shoulder edge down to natural ground at the toe. For cut, the depth of cut, which the page draws as the height of the backslope from the ditch bottom to the top of cut.",
    where: "Read it from the cross sections. Figure 45-3A shows fill height from the shoulder break to the toe. Figure 45-3C uses H for the freeway backslope but does not show where it is measured; check the cut depth with the reviewer when it is close to 10 ft.",
    sketch: function (S) {
      var out = "";
      out += fillSec(S, FILL_SM, "");
      out += S.ln(84, 35, 262, 35, "thin muted") + S.ln(230, 70, 262, 70, "thin muted");
      out += S.dim(256, 35, 256, 70, "H", { side: 1, off: 6 });
      out += S.tx(14, 16, "Fill height", { size: 10, bold: true });
      out += cutSec(S, CUT_SM, "");
      out += S.ln(148, 156, 262, 156, "thin muted") + S.ln(228, 112, 262, 112, "thin muted");
      out += S.dim(256, 112, 256, 156, "H", { side: 1, off: 6 });
      out += S.tx(14, 104, "Cut depth", { size: 10, bold: true });
      return S.svg(out, 320, 190, "Fill height and cut depth dimensioned on fill and cut sections");
    },
    caption: "Vertical dimensions; vertical scale exaggerated.",
    cite: "Figures 45-3A, 45-3B and 45-3C",
    typical: "Breakpoints in the figures: 30 ft for rural local road fills (Figures 45-3A and 45-3B); 10 ft for freeway cut backslopes (Figure 45-3C).",
    mistakes: [
      "Measuring fill height from the pavement crown instead of the shoulder edge.",
      "Entering the slope length instead of the vertical height."
    ]
  });

  H.define("xs-sideShoulder", {
    title: "Shoulder width (ft)",
    group: "xsec",
    what: "The full shoulder width from the edge of the travel lane to the shoulder break, where the fill slope or foreslope begins. Include any unpaved part of the shoulder.",
    where: "From the typical section; the Chapter 53 to 56 figures give shoulder widths. Figure 45-3A dimensions the shoulder from the E.T.L. to the top of the fill slope.",
    sketch: function (S) {
      var P = FILL_LG, out = fillSec(S, P, "");
      out += S.poly([[P.etl, P.y0 + 2], P.hinge, [P.hinge[0], P.hinge[1] + 4], [P.etl, P.y0 + 6]], "hlf2");
      out += etlMark(S, P.etl, 18, 50);
      out += S.ln(P.hinge[0], 34, P.hinge[0], 50, "thin muted");
      out += S.dim(P.etl, 38, P.hinge[0], 38, "shoulder", {});
      out += S.tx(40, 74, "travel lane", { anchor: "middle", size: 9.5 });
      out += S.tx(178, 56, "fill slope", { anchor: "middle", size: 9.5, cls: "muted" });
      return S.svg(out, 320, 150, "Fill section with the shoulder width dimensioned from the edge of travel lane to the shoulder break");
    },
    caption: "From the edge of the travel lane (ETL) to the top of the slope.",
    cite: "45-1.02(01), 45-1.02(03); Figure 45-3A",
    mistakes: [
      "Entering only the paved width when part of the shoulder is aggregate or earth. The slope starts at the outer edge of the whole shoulder.",
      "Including the travel lane."
    ]
  });

  H.define("xs-clearZone", {
    title: "Clear-zone width (ft)",
    group: "xsec",
    what: "The clear-zone width measured from the edge of the travel lane, as found on the Clear-Zone page. The page uses it to find where the 6:1 slope should end and whether the clear zone runs onto a non-recoverable slope.",
    where: "From Figure 49-2A with the adjustments in 49-2.02 (curve correction and slope averaging); use the Clear-Zone page. If the clear zone extends beyond the right of way, use the distance from the edge of the travel lane to the right-of-way line (49-2.01).",
    sketch: function (S) {
      var P = FILL_LG, out = fillSec(S, P, "");
      out += etlMark(S, P.etl, 16, 50);
      out += S.ln(P.cz[0], 20, P.cz[0], 70, "thin muted");
      out += S.dim(P.etl, 24, P.cz[0], 24, "clear zone", {});
      out += S.tx(165, 54, "6:1", { anchor: "middle", size: 9.5, cls: "muted" });
      out += S.tx(256, 82, "3:1", { size: 9.5, cls: "muted" });
      out += S.tx(40, 74, "travel lane", { anchor: "middle", size: 9.5 });
      return S.svg(out, 320, 150, "Fill section with the clear zone dimensioned from the edge of travel lane");
    },
    caption: "Measured from the edge of the travel lane, not the edge of the shoulder.",
    cite: "49-2.01, 49-2.02, 49-2.03(01); Figure 49-2A; 45-3.01",
    typical: "IDM example: 60 mph, AADT 5000 and a 4:1 fill slope gives 40 ft; a 4:1 cut slope gives 20 ft (49-2.01).",
    mistakes: [
      "Measuring from the edge of the shoulder or the shoulder break.",
      "Using a clear zone that was found for a different slope than the one being proposed."
    ]
  });

  H.define("xs-slope1", {
    title: "Fill slope in clear zone / cut foreslope (H:1)",
    group: "xsec",
    what: "Enter the horizontal run per 1 ft of fall, e.g. 6 for 6:1. For <b>fill</b>, it is the slope from the shoulder break to the edge of the clear zone. For <b>cut</b>, it is the foreslope from the shoulder break down to the ditch.",
    where: "From the proposed cross section. New construction fill: 6:1 to the edge of the clear zone (45-3.01, Figure 45-3A). Cut foreslope (Figure 45-3C): 6:1 for freeways, arterials and rural collectors; urban collector desirable 6:1, maximum 4:1; rural local road 4:1 maximum at 50 mph or more and 3:1 maximum at 45 mph or less; urban local street 3:1 maximum.",
    sketch: function (S) {
      var out = "";
      out += fillSec(S, FILL_SM, "s1");
      out += S.tx(128, 36, "s1", { anchor: "middle", size: 11, bold: true, cls: "hl" });
      out += S.tx(14, 16, "Fill: slope within clear zone", { size: 10, bold: true });
      out += S.ln(FILL_SM.cz[0], 20, FILL_SM.cz[0], 46, "thin muted") + S.tx(FILL_SM.cz[0] + 4, 28, "edge of clear zone", { size: 9.5, cls: "muted" });
      out += cutSec(S, CUT_SM, "s1");
      out += S.tx(96, 152, "s1", { anchor: "end", size: 11, bold: true, cls: "hl" });
      out += S.tx(14, 104, "Cut: foreslope", { size: 10, bold: true });
      return S.svg(out, 320, 190, "Fill slope within the clear zone and cut foreslope highlighted");
    },
    caption: "Enter H:1 (run per 1 ft of fall). Vertical scale exaggerated.",
    cite: "45-3.01, 45-3.02(04); Figures 45-3A to 45-3C; 49-2.03(01)",
    typical: "6:1 on new construction for freeways, arterials and collectors. A fill slope 4:1 or flatter is recoverable; a steeper one is non-recoverable and needs a clear runout area at its toe if the clear zone reaches onto it (49-2.03(01) item 2.c).",
    mistakes: [
      "Entering the slope as V:H (0.17) or as a percent. Enter 6 for 6:1.",
      "Reading a bigger number as steeper. 6:1 is flatter than 4:1.",
      "For cut, entering the backslope here."
    ]
  });

  H.define("xs-slope2", {
    title: "Fill slope beyond clear zone / cut backslope (H:1)",
    group: "xsec",
    what: "Enter the horizontal run per 1 ft of rise or fall, e.g. 3 for 3:1. For <b>fill</b>, it is the slope from the edge of the clear zone to the toe. For <b>cut</b>, it is the backslope from the ditch up to natural ground.",
    where: "Fill (Figure 45-3A): 3:1 maximum to the toe for freeways, arterials and collectors; rural local roads desirable 4:1, maximum 3:1. Cut backslope (Figure 45-3C, earth cut, maximum values): freeway 4:1 for 20 ft, then 4:1 if H ≤ 10 ft or 3:1 if H > 10 ft; arterial or rural collector 4:1 for 20 ft, then 3:1 to the top; urban collector 4:1 for 4 ft, then 3:1. Curbed cut (Figure 45-3D): 4:1 maximum rural, 4:1 urban arterial or collector, 3:1 urban local street.",
    sketch: function (S) {
      var out = "";
      out += fillSec(S, FILL_SM, "s2");
      out += S.tx(206, 54, "s2", { size: 11, bold: true, cls: "hl" });
      out += S.tx(14, 16, "Fill: beyond clear zone to toe", { size: 10, bold: true });
      out += S.ln(FILL_SM.cz[0], 20, FILL_SM.cz[0], 46, "thin muted") + S.tx(FILL_SM.cz[0] + 4, 28, "edge of clear zone", { size: 9.5, cls: "muted" });
      out += cutSec(S, CUT_SM, "s2");
      out += S.tx(192, 128, "s2", { anchor: "end", size: 11, bold: true, cls: "hl" });
      out += S.tx(14, 104, "Cut: backslope", { size: 10, bold: true });
      return S.svg(out, 320, 190, "Fill slope beyond the clear zone and cut backslope highlighted");
    },
    caption: "Enter H:1. For a cut with a 4:1 first segment, enter the slope beyond it.",
    cite: "45-3.01, 45-3.02, 45-3.03; Figures 45-3A to 45-3D",
    typical: "3:1 is the usual maximum. Avoid 2:1 or steeper unless absolutely necessary; on a 4R project a 2:1 sideslope needs Level Two design exception documentation at the grade-review stage (45-3.03(01)). On a 3R project consider 3:1, then 2.5:1, before 2:1 (45-3.03(02)).",
    mistakes: [
      "Entering the first 4:1 segment of a cut backslope. The page checks the slope beyond it.",
      "Entering V:H or a percent instead of H:1."
    ]
  });

  H.define("xs-rockCut", {
    title: "Rock cut",
    group: "xsec",
    what: "Whether the cut is in rock. In a rock-cut area the IDM calls for 3:1 rather than 2:1, unless good slope stability or sound rock has been verified.",
    where: "From the geotechnical report. 45-3.03(01): most rock is sandstone or shale and will not stand vertically, so use 3:1 instead of 2:1 in a rock-cut area. A large rock cut may need benching (45-3.02(02), which points to Section 107-6.02). 45-3.02(02) also says the rock-cut backslope should not exceed 1:6, as printed.",
    sketch: function (S) {
      var P = CUT_LG, out = cutSec(S, P, "s2");
      var d2 = P.d2, tp = P.top;
      for (var i = 1; i < 6; i++) {
        var f = i / 6, x = d2[0] + (tp[0] - d2[0]) * f, y = d2[1] + (tp[1] - d2[1]) * f;
        out += S.rect(x + 3, y + 3, 10, 6, "obj", 1) + S.rect(x + 8, y + 12, 8, 5, "obj", 1);
      }
      out += S.tx(198, 56, "rock backslope", { anchor: "end", size: 10, cls: "hl", bold: true });
      out += S.tx(40, 92, "travel lane", { anchor: "middle", size: 9.5 });
      out += S.tx(10, 140, "Use 3:1, not 2:1, unless stability is verified", { size: 9.5, cls: "muted" });
      return S.svg(out, 320, 150, "Cut section with a rock backslope");
    },
    caption: "Rock backslope in a cut section.",
    cite: "45-3.02(02), 45-3.03(01)",
    mistakes: [
      "Assuming rock will stand on a 2:1 slope without a geotechnical check."
    ]
  });

  // ------------------------------------------------------------ curve widening

  H.define("xs-tangentWidth", {
    title: "Traveled-way width on tangent, Wn (ft)",
    group: "widening",
    what: "The width of the traveled way (both lanes, edge line to edge line) on the tangent approaching the curve. Shoulders are not included.",
    where: "From the typical section: twice the lane width on a two-lane highway. The widening is computed only for two-lane highways (305-3.06). The 20, 22 and 24 ft choices also set the Green Book lateral clearance C (2.0, 2.5 and 3.0 ft); C is a Green Book value, not an IDM value.",
    sketch: function (S) {
      var r = S.planRoad({ y: 44, lanes: [1, 1], lw: 26, sh: 10 });
      var out = r.svg;
      out += S.car(240, 57, -1) + S.car(150, 83, 1);
      out += S.dim(60, 44, 60, 96, "Wn", { side: 1, off: 6 });
      out += S.leader(200, 20, 200, 39, "shoulder (not included)", { cls: "" });
      out += S.tx(10, 140, "Both lanes, edge to edge, on the tangent", { size: 9.5, cls: "muted" });
      return S.svg(out, 320, 150, "Plan view of a two-lane road with the traveled-way width dimensioned");
    },
    caption: "Plan view: Wn spans both lanes and excludes the shoulders.",
    cite: "305-3.06; 45-1.01(01)",
    typical: "24 ft for two 12-ft lanes. Lane width ranges from 9 to 12 ft by facility (45-1.01(01)).",
    mistakes: [
      "Entering one lane width.",
      "Including the shoulders."
    ]
  });

  H.define("xs-wideningLanes", {
    title: "Number of lanes, N",
    group: "widening",
    what: "The total number of lanes on the curve, counting both directions. For the two-lane highways covered by 305-3.06, N = 2.",
    where: "From the typical section. 305-3.06 addresses traveled-way widening on open-highway curves for a two-lane highway.",
    sketch: function (S) {
      var r = S.planRoad({ y: 46, lanes: [1, 1], lw: 26 });
      var out = r.svg + S.rect(10, 46, 300, 52, "hlf");
      out += S.car(220, 59, -1) + S.car(110, 85, 1);
      out += S.arrow(196, 59, 160, 59, "ink") + S.arrow(134, 85, 170, 85, "ink");
      out += S.tx(300, 30, "N = 2", { anchor: "end", size: 13, bold: true, cls: "hl" });
      out += S.tx(10, 138, "Count every lane on the curve, both directions", { size: 9.5, cls: "muted" });
      return S.svg(out, 320, 150, "Two-lane road with both lanes highlighted, N equals 2");
    },
    caption: "Both directions count: a two-lane highway has N = 2.",
    cite: "305-3.06",
    mistakes: [
      "Entering lanes per direction (1) for a two-lane highway."
    ]
  });

  H.define("xs-trackWidth", {
    title: "Track width on tangent, u (ft)",
    group: "widening",
    what: "The design vehicle's track width on a tangent: the out-to-out width of its tires. It is the starting width in the Green Book term U = u + R − √(R² − ΣLi²).",
    where: "From the Green Book design-vehicle data for widening (Section 3.3.10). IDM Figure 40-4A lists the overall <i>body</i> width of each design vehicle, which is not the same as track width. Choose the design vehicle per 40-4.0: the largest vehicle likely to use the facility with considerable frequency.",
    sketch: function (S) { return S.svg(truckSketch(S, "u"), 320, 140, "Plan view of a tractor-semitrailer with the track width dimensioned"); },
    caption: "Out-to-out of the tires, measured across the vehicle.",
    cite: "40-4.0 (design-vehicle selection); 305-3.06 refers to Green Book Section 3.3.10",
    notIDM: "The widening equations and the track width come from Green Book Section 3.3.10. The IDM (305-3.06) only refers to them.",
    mistakes: [
      "Using the 8.5-ft default without checking it. The page uses the WB-65 overall width from Figure 40-4A because the IDM gives no track width; check the Green Book track width.",
      "Using the lane width."
    ]
  });

  H.define("xs-wheelbases", {
    title: "Wheelbases, Li (ft)",
    group: "widening",
    what: "The design vehicle's wheelbases between consecutive axles (or tandem-axle centers) and articulation points, separated by commas, e.g. tractor, then trailer. The page sums their squares (ΣLi²) in the off-tracking term U.",
    where: "From the Green Book design-vehicle data for widening (Section 3.3.10). IDM Figure 40-4A lists effective wheelbases (WB1, WB2, and so on) for the standard design vehicles. The page default is the WB-65 (21.6, 43.4 ft), which the IDM says is equivalent to the Indiana Design Vehicle.",
    sketch: function (S) { return S.svg(truckSketch(S, "wb"), 320, 140, "Plan view of a tractor-semitrailer with wheelbases L1 and L2 dimensioned"); },
    caption: "Tractor L1 (front axle to kingpin) and trailer L2 (kingpin to rear tandem).",
    cite: "Figure 40-4A (design-vehicle dimensions); 305-3.06 refers to Green Book Section 3.3.10",
    notIDM: "Off-tracking is computed with the Green Book Section 3.3.10 method; the IDM does not define Li for widening.",
    mistakes: [
      "Entering the overall vehicle length.",
      "Entering one combined wheelbase for a tractor-semitrailer. Enter each unit separately so each is squared.",
      "Keeping the WB-65 default (21.6, 43.4 ft, Figure 40-4A) when a different design vehicle governs (40-4.0)."
    ]
  });

  H.define("xs-frontOverhang", {
    title: "Front overhang, A (ft)",
    group: "widening",
    what: "The distance from the front axle to the front of the vehicle. It is used in the Green Book front-overhang term FA = √(R² + A(2L + A)) − R.",
    where: "From the Green Book design-vehicle data for widening (Section 3.3.10). IDM Figure 40-4A also lists front overhang for the standard design vehicles.",
    sketch: function (S) { return S.svg(truckSketch(S, "A"), 320, 140, "Plan view of a tractor-semitrailer with the front overhang dimensioned"); },
    caption: "From the steering axle to the front bumper.",
    cite: "Figure 40-4A (design-vehicle dimensions); 305-3.06 refers to Green Book Section 3.3.10",
    notIDM: "The front-overhang term is part of the Green Book Section 3.3.10 method.",
    mistakes: [
      "Entering the rear overhang.",
      "Keeping the WB-65 default (4.0 ft, Figure 40-4A) when a different design vehicle governs."
    ]
  });

  H.define("xs-frontWheelbase", {
    title: "Wheelbase for front overhang term, L (ft)",
    group: "widening",
    what: "The wheelbase of the single-unit truck or of the tractor, used with A in the front-overhang term FA. For a tractor-semitrailer it is the tractor wheelbase (L1 in the sketch), not the trailer.",
    where: "From the Green Book design-vehicle data for widening (Section 3.3.10). For the standard design vehicles, IDM Figure 40-4A lists WB1, the first effective wheelbase.",
    sketch: function (S) { return S.svg(truckSketch(S, "L"), 320, 140, "Plan view of a tractor-semitrailer with the tractor wheelbase dimensioned"); },
    caption: "Single unit or tractor only.",
    cite: "Figure 40-4A (design-vehicle dimensions); 305-3.06 refers to Green Book Section 3.3.10",
    notIDM: "The front-overhang term is part of the Green Book Section 3.3.10 method.",
    mistakes: [
      "Entering the trailer wheelbase or the sum of all wheelbases.",
      "Keeping the WB-65 default (WB1 = 21.6 ft, Figure 40-4A) when a different design vehicle governs."
    ]
  });

  H.define("xs-fullDepthShoulder", {
    title: "Full-depth shoulder width provided, each side (ft)",
    group: "widening",
    what: "Optional. The width of full-depth shoulder you plan to carry on each side of the curve. The page checks that the two sides together cover the calculated widening.",
    where: "From the typical section. INDOT provides full-depth shoulders on both sides of the curve instead of widening the traveled way. They should run from the beginning of the superelevation transition before the curve to the end of the transition beyond it. Calculated widening of 2 ft or less can be disregarded (305-3.06).",
    sketch: function (S) {
      var out = S.rect(10, 22, 300, 108, "grass");
      var r = S.planRoad({ y: 54, lanes: [1, 1], lw: 20, grass: false });
      out += r.svg;
      out += S.rect(70, 38, 220, 16, "hlf") + S.rect(70, 94, 220, 16, "hlf");
      out += S.pline([[70, 54], [70, 38], [290, 38], [290, 54]], "hl") + S.pline([[70, 94], [70, 110], [290, 110], [290, 94]], "hl");
      out += S.ln(130, 26, 130, 122, "thin muted") + S.ln(230, 26, 230, 122, "thin muted");
      out += S.tx(130, 18, "PC", { anchor: "middle", size: 10, bold: true }) + S.tx(230, 18, "PT", { anchor: "middle", size: 10, bold: true });
      out += S.ln(68, 38, 50, 38, "thin muted");
      out += S.dim(54, 38, 54, 54, "fds", { side: -1, off: 5 });
      out += S.tx(70, 142, "begin super. transition", { size: 9.5, cls: "muted" });
      out += S.tx(290, 142, "end", { anchor: "end", size: 9.5, cls: "muted" });
      return S.svg(out, 320, 150, "Schematic plan of full-depth shoulders on both sides from the start to the end of the superelevation transition");
    },
    caption: "Schematic plan: full-depth shoulders on both sides through the curve and its transitions.",
    cite: "305-3.06",
    typical: "Leave blank if no shoulder width is set yet. The page splits the calculated widening equally between the two sides; confirm the split with the reviewer.",
    mistakes: [
      "Entering the total for both sides. Enter one side.",
      "Counting a shoulder that is not full depth."
    ]
  });

  // ------------------------------------------------------------ page maps

  H.pages("cross-section/cross-slope.html", {
    type: "xs-sectionType",
    n: ["lanesPerDir", "For a 2-lane highway enter 1. On a divided road, count the lanes on one side of the median; the count sets where the crown goes."],
    w: ["laneWidth", "Here it only scales the diagram. The IDM cross slopes do not depend on lane width."],
    surf: "xs-routeSurface",
    edge: "xs-edgeTreatment",
    sw: ["pavedShoulder", "Here: the paved shoulder width, or the curb offset when Edge treatment is Curb. A paved shoulder over 4 ft gets the Figure 45-1A treatment; 4 ft or less matches the lane. For aggregate or earth it only scales the diagram."],
    ud: "xs-underdrains",
    aux: "xs-auxLane"
  });

  H.pages("cross-section/curve-widening.html", {
    R: ["radius", "Here: the centerline radius of the two-lane curve. It enters every widening term (U, FA and Z)."],
    V: ["designSpeed", "Here it is used only in the Green Book extra-width allowance Z = 0.1V / √R."],
    Wn: "xs-tangentWidth",
    N: "xs-wideningLanes",
    u: "xs-trackWidth",
    wb: "xs-wheelbases",
    A: "xs-frontOverhang",
    Lf: "xs-frontWheelbase",
    fds: "xs-fullDepthShoulder"
  });

  H.pages("cross-section/design-criteria.html", {
    ds: ["projectScope", "Here it picks the chapter: 4R uses Chapter 53; existing non-freeway 3R uses Chapter 55; the third option covers freeway 3R and partial 4R (Chapter 54) and partial 3R (Chapter 56)."],
    fig: "xs-facilityFigure",
    col: "xs-designColumn",
    spd: ["designSpeed", "Here it picks the figure's alignment column. It only sets the alignment rows (sight distance, radius, grades) in the criteria table; the width check uses the design column."],
    pl: ["laneWidth", "Here: your proposed travel-lane width, checked against the figure's travel-lane row."],
    prp: ["pavedShoulder", "Here: your proposed right (outside) paved shoulder."],
    pru: "xs-usableShoulder",
    plp: "xs-leftShoulderPaved",
    nl: ["lanesPerDir", "Used only where the figure prints a value by lanes per direction, such as the Figure 53-1 left shoulder (2 lanes or 3 lanes)."],
    pa: "xs-auxLaneWidth",
    pco: "xs-curbOffset"
  });

  H.pages("cross-section/side-slope.html", {
    scope: ["projectScope", "Here: 4R checks against Figures 45-3A to 45-3D (new construction). For 3R the page shows those values for reference; the Chapter 55 figures and 45-3.03(02) govern."],
    area: "xs-areaType",
    cls: "xs-functionalClass",
    V: ["designSpeed", "Here it is used only for a rural local road in cut: Figure 45-3C allows a 4:1 maximum at 50 mph or more and 3:1 at 45 mph or less."],
    curb: "xs-curbed",
    sidewalk: "xs-sidewalk",
    sec: "xs-fillOrCut",
    H: "xs-slopeHeight",
    sh: "xs-sideShoulder",
    cz: "xs-clearZone",
    s1: "xs-slope1",
    s2: "xs-slope2",
    rock: "xs-rockCut"
  });

})(window.IDMHelp);
