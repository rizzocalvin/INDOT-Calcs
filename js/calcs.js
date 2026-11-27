/*
 * Pure calculation functions for the INDOT IDM calculators.
 * No DOM access here, so the same file runs in the browser and in Node
 * (see tests/spot-checks.js). All design values come from the data files in
 * ../data, which must be loaded first (they define the global IDM object).
 */
(function (root) {
  "use strict";
  var IDM = root.IDM;
  var C = {};

  // ---------------------------------------------------------------- helpers
  C.ceilTo = function (x, inc) { return Math.ceil(x / inc - 1e-9) * inc; };
  C.roundTo = function (x, inc) { return Math.round(x / inc) * inc; };
  C.deg = function (rad) { return rad * 180 / Math.PI; };
  C.rad = function (deg) { return deg * Math.PI / 180; };

  // linear interpolation on sorted xs (ascending or descending)
  C.interp = function (x, xs, ys) {
    var n = xs.length;
    if (n === 0) return NaN;
    var asc = xs[n - 1] >= xs[0];
    for (var i = 0; i < n - 1; i++) {
      var a = xs[i], b = xs[i + 1];
      var inside = asc ? (x >= a && x <= b) : (x <= a && x >= b);
      if (inside) {
        if (b === a) return ys[i];
        return ys[i] + (ys[i + 1] - ys[i]) * (x - a) / (b - a);
      }
    }
    return NaN;
  };

  C.rowBySpeed = function (table, V) {
    for (var i = 0; i < table.length; i++) if (table[i][0] === V) return table[i];
    return null;
  };

  // "12+34.56" or "1234.56" -> 1234.56 ; returns NaN if invalid
  C.parseStation = function (s) {
    if (typeof s === "number") return s;
    s = String(s).trim();
    if (s === "") return NaN;
    var m = s.match(/^(-?\d+)\+(\d+(?:\.\d*)?)$/);
    if (m) {
      var hundreds = parseFloat(m[1]), rest = parseFloat(m[2]);
      return hundreds < 0 || /^-/.test(m[1]) ? hundreds * 100 - rest : hundreds * 100 + rest;
    }
    var v = Number(s);
    return isFinite(v) ? v : NaN;
  };
  C.formatStation = function (x, d) {
    if (!isFinite(x)) return "--";
    d = d === undefined ? 2 : d;
    var neg = x < 0; x = Math.abs(x);
    var r = Number(x.toFixed(d));
    var h = Math.floor(r / 100 + 1e-9);
    var rest = r - h * 100;
    var restStr = rest.toFixed(d);
    if (rest < 10) restStr = "0" + restStr;
    return (neg ? "-" : "") + h + "+" + restStr;
  };

  // =========================================================== SIGHT DISTANCE
  // Equation 42-1.1 (IDM prints ".147Vt"; the tabulated values use 1.47Vt)
  C.ssdEquation = function (V, t, a) {
    t = t === undefined ? IDM.sight.ssd.reactionTime : t;
    a = a === undefined ? IDM.sight.ssd.decel : a;
    var reaction = 1.47 * V * t;
    var braking = 1.075 * V * V / a;
    return { reaction: reaction, braking: braking, total: reaction + braking };
  };
  C.ssd = function (V) {
    var r = C.rowBySpeed(IDM.sight.ssd.table, V);
    if (!r) return null;
    return { V: V, reaction: r[1], braking: r[2], calc: r[3], design: r[4] };
  };
  C.dsd = function (V, m) {
    var r = C.rowBySpeed(IDM.sight.dsd.table, V);
    if (!r) return null;
    var idx = "ABCDE".indexOf(m);
    return r[1 + idx];
  };
  // Equation 42-2.1
  C.dsdEquation = function (V, t) { return 1.47 * V * t; };
  C.psd = function (V) {
    var r = C.rowBySpeed(IDM.sight.psd.table, V);
    return r ? { passed: r[1], passing: r[2], calc: r[3], design: r[4] } : null;
  };

  // ======================================================= HORIZONTAL CURVES
  // Equation 305-3.1, e in percent, f decimal
  C.minRadius = function (V, ePct, f) { return V * V / (15 * (ePct / 100 + f)); };

  C.superTable = function (kind) {
    // kind: "4", "6", "8" (open roadway) or "LS" (low-speed urban, Figure 305-4E)
    return kind === "LS" ? IDM.horiz.lowSpeedUrban : IDM.horiz.openRoadway[kind];
  };
  C.eNumeric = function (label) {
    if (label === "NC") return -2.0;
    if (label === "RC") return 2.0;
    return label;
  };
  // Minimum radius for emax from the IDM table (last row) and fmax
  C.tableRmin = function (kind, V) {
    var t = C.superTable(kind), j = t.speeds.indexOf(V);
    if (j < 0) return null;
    var last = t.rows[t.rows.length - 1];
    return { R: last[j + 1], e: last[0], f: t.fmax[j], figure: t.figure };
  };
  /*
   * Design superelevation for radius R at speed V.
   * Returns the tabulated row that satisfies R (conservative, i.e. the next
   * higher e when R falls between rows) and a straight-line interpolated e.
   */
  C.designE = function (kind, V, R) {
    var t = C.superTable(kind), j = t.speeds.indexOf(V);
    if (j < 0) return { error: "Design speed " + V + " mph is not tabulated in Figure " + t.figure + "." };
    var rows = t.rows, out = { figure: t.figure, fmax: t.fmax[j] };
    if (R >= rows[0][j + 1]) {
      out.row = "NC"; out.eDesign = -2.0; out.eInterp = -2.0; out.label = "NC (normal crown)";
      return finish(out);
    }
    for (var i = 1; i < rows.length; i++) {
      var Ri = rows[i][j + 1];
      if (R >= Ri) {
        var ePrev = C.eNumeric(rows[i - 1][0]), eRow = C.eNumeric(rows[i][0]);
        var RPrev = rows[i - 1][j + 1];
        out.row = rows[i][0];
        out.eDesign = eRow;
        out.eInterp = ePrev + (eRow - ePrev) * (RPrev - R) / (RPrev - Ri);
        out.label = rows[i][0] === "RC" ? "RC (remove adverse crown, +2.0%)" : (rows[i][0] === "NC" ? "NC" : eRow.toFixed(1) + "%");
        return finish(out);
      }
    }
    var last = rows[rows.length - 1];
    out.belowMin = true;
    out.Rmin = last[j + 1];
    out.error = "R = " + R + " ft is less than the minimum radius " + last[j + 1] + " ft for V = " + V + " mph (e = " + last[0] + "%, Figure " + t.figure + ").";
    return out;

    function finish(o) {
      var sh = t.shaded && t.shaded[V];
      o.shaded = sh !== undefined && typeof o.eDesign === "number" && o.eDesign >= sh - 1e-9;
      o.Rmin = last2(t, j);
      return o;
    }
    function last2(tt, jj) { return tt.rows[tt.rows.length - 1][jj + 1]; }
  };

  // Figure 305-6B curve elements; delta in degrees
  C.curveElements = function (R, deltaDeg, piSta) {
    var d = C.rad(deltaDeg);
    var T = R * Math.tan(d / 2);
    var L = deltaDeg * R * Math.PI / 180;
    var E = R / Math.cos(d / 2) - R;
    var LC = 2 * R * Math.sin(d / 2);
    var M = R * (1 - Math.cos(d / 2));
    var D = 5729.58 / R;
    var out = { R: R, delta: deltaDeg, T: T, L: L, E: E, LC: LC, M: M, D: D };
    if (isFinite(piSta)) { out.PC = piSta - T; out.PT = out.PC + L; out.PI = piSta; }
    return out;
  };

  C.relGradient = function (V) {
    if (V >= 50) return 0.50;
    var g = IDM.horiz.relativeGradient.G[V];
    return g === undefined ? NaN : g;
  };
  C.bw = function (n1, stateSystem) {
    var t = IDM.horiz.relativeGradient.bw;
    var arr = stateSystem ? t.stateSystem : t.offSystemOrRestricted;
    var i = t.lanes.indexOf(n1);
    if (i >= 0) return arr[i];
    return C.interp(n1, t.lanes, arr);
  };
  // Equation 305-4.1. w in ft (min 12), e in %, G in %
  C.runoff = function (w, n1, ePct, bw, G) {
    var wUse = Math.max(12, w);
    var raw = wUse * n1 * Math.abs(ePct) * bw / G;
    return { w: wUse, raw: raw, Lr: C.ceilTo(raw, 5) };
  };
  // Equation 305-4.2
  C.tangentRunout = function (Lr, sNormal, ePct) { return Lr * sNormal / Math.abs(ePct); };
  // Equation 305-4.3
  C.tangentRunoutML = function (sNormal, nRC, w, G) { return sNormal * nRC * w / G; };
  C.runoffTableValue = function (ePct, V) {
    var t = IDM.horiz.runoffTable, j = t.speeds.indexOf(V);
    if (j < 0) return null;
    for (var i = 0; i < t.rows.length; i++) if (Math.abs(t.rows[i][0] - ePct) < 1e-9) return t.rows[i][j + 1];
    return null;
  };

  // Equation 305-5.1, angle in degrees: HSO = R[1 - cos(28.65 S / R)]
  C.hso = function (R, S) { return R * (1 - Math.cos(C.rad(28.65 * S / R))); };
  // inverse: sight distance available for a given clear offset
  C.hsoSight = function (R, offset) {
    if (offset >= R) return NaN;
    return (R / 28.65) * C.deg(Math.acos(1 - offset / R));
  };

  // ========================================================= VERTICAL CURVES
  C.crestK = function (V) {
    var r = C.rowBySpeed(IDM.vert.crestSSD.table, V);
    return r ? { ssdDes: r[1], ssdMin: r[2], kDes: r[5], kMin: r[6], kCalcDes: r[3], kCalcMin: r[4] } : null;
  };
  C.sagK = function (V) {
    var r = C.rowBySpeed(IDM.vert.sagSSD.table, V);
    return r ? { ssd: r[1], kCalc: r[2], k: r[3] } : null;
  };
  C.dsdK = function (type, V, m) {
    var t = type === "crest" ? IDM.vert.crestDSD.table : IDM.vert.sagDSD.table;
    var r = C.rowBySpeed(t, V);
    if (!r) return null;
    var i = "ABCDE".indexOf(m);
    return { dsd: r[1 + 2 * i], k: r[2 + 2 * i] };
  };
  // Minimum length for sight distance S (Equations 44-3.1, 44-3.3, 44-3.4, 44-3.5)
  C.crestLength = function (A, S) {
    A = Math.abs(A);
    var L1 = A * S * S / 2158;
    if (L1 > S) return { L: L1, caseSL: true, eq: "44-3.1 (S < L)" };
    var L2 = 2 * S - 2158 / A;
    return { L: Math.max(L2, 0), caseSL: false, eq: "44-3.3 (S >= L)" };
  };
  C.sagLength = function (A, S) {
    A = Math.abs(A);
    var L1 = A * S * S / (400 + 3.5 * S);
    if (L1 > S) return { L: L1, caseSL: true, eq: "44-3.4 (S < L)" };
    var L2 = 2 * S - (400 + 3.5 * S) / A;
    return { L: Math.max(L2, 0), caseSL: false, eq: "44-3.5 (S >= L)" };
  };
  // Sight distance provided by a curve of length L
  C.crestSight = function (A, L) {
    A = Math.abs(A);
    if (A === 0) return Infinity;
    var S1 = Math.sqrt(2158 * L / A);
    if (S1 < L) return S1;
    return (L + 2158 / A) / 2;
  };
  C.sagSight = function (A, L) {
    A = Math.abs(A);
    if (A === 0) return Infinity;
    var S1 = (3.5 * L + Math.sqrt(12.25 * L * L + 1600 * A * L)) / (2 * A);
    if (S1 < L) return S1;
    if (2 * A - 3.5 <= 0) return Infinity;
    return (A * L + 400) / (2 * A - 3.5);
  };
  // Figure 44-3F symmetrical curve geometry. Grades in %, stations/lengths in ft
  C.verticalCurve = function (g1, g2, L, pviSta, pviElev) {
    var pvcSta = pviSta - L / 2, pvtSta = pviSta + L / 2;
    var pvcElev = pviElev - g1 * (L / 2) / 100;
    var pvtElev = pviElev + g2 * (L / 2) / 100;
    var A = g2 - g1;
    var elevAt = function (x) { return pvcElev + g1 * x / 100 + A * x * x / (200 * L); };
    var out = {
      g1: g1, g2: g2, A: A, L: L, K: L / Math.abs(A || 1e-12), type: A < 0 ? "crest" : "sag",
      pvcSta: pvcSta, pvcElev: pvcElev, pviSta: pviSta, pviElev: pviElev, pvtSta: pvtSta, pvtElev: pvtElev,
      M: A * L / 800, elevAt: elevAt
    };
    var xT = A !== 0 ? -g1 * L / A : NaN;
    if (xT > 0 && xT < L) {
      out.turnX = xT; out.turnSta = pvcSta + xT; out.turnElev = elevAt(xT);
    } else {
      out.turnX = null;
    }
    return out;
  };
  // Figure 44-3 I: curve through a fixed point at distance D before the PVI
  // Z = curve elevation - tangent elevation at point P (ft); returns positive roots
  C.curveThroughPoint = function (g1, g2, D, Z) {
    var A = g2 - g1;
    var disc = 160000 * Z * Z + 1600 * A * D * Z;
    if (disc < 0 || A === 0) return [];
    var r = Math.sqrt(disc);
    var xs = [(400 * Z + r) / (2 * A), (400 * Z - r) / (2 * A)];
    return xs.filter(function (x) { return x > 0; }).map(function (x) { return { X: x, L: 2 * (x + D) }; });
  };

  // ============================================================ INTERSECTIONS
  var vehKey = { P: 0, SU: 1, CT: 2 };
  C.isdStopLeft = function (V, opts) {
    // opts: vehicle P|SU|CT, cls local|collart, extraLanes, gradeUp (%)
    var t = IDM.int.stopLeft, r = C.rowBySpeed(t.table, V);
    if (!r) return null;
    var base, tableIsd;
    if (opts.vehicle === "P") {
      if (opts.cls === "local") { base = r[1]; tableIsd = r[2]; } else { base = r[3]; tableIsd = r[4]; }
    } else if (opts.vehicle === "SU") { base = r[5]; tableIsd = r[6]; } else { base = r[7]; tableIsd = r[8]; }
    var per = opts.vehicle === "P" ? t.perLaneP : t.perLaneTruck;
    var addLanes = per * Math.max(0, opts.extraLanes || 0);
    var g = opts.gradeUp || 0;
    var addGrade = g > 3 ? t.gradePerPct * g : 0;
    var tg = base + addLanes + addGrade;
    var calc = 1.47 * V * tg;
    var adjusted = addLanes + addGrade > 0;
    return { base: base, addLanes: addLanes, addGrade: addGrade, tg: tg, calc: calc, table: tableIsd, design: adjusted ? calc : tableIsd, adjusted: adjusted, figure: t.figure };
  };
  C.isdStopRightCross = function (V, opts) {
    // opts: maneuver right|cross, vehicle, extraLanes (crossing only), gradeUp
    var g = IDM.int.crossGap;
    var base = g.gaps[opts.vehicle];
    var per = opts.vehicle === "P" ? g.perLaneP : g.perLaneTruck;
    var addLanes = opts.maneuver === "cross" ? per * Math.max(0, opts.extraLanes || 0) : 0;
    var gr = opts.gradeUp || 0;
    var addGrade = gr > 3 ? g.gradePerPct * gr : 0;
    var tg = base + addLanes + addGrade;
    var calc = 1.47 * V * tg;
    var row = C.rowBySpeed(IDM.int.stopRightCross.table, V);
    var tableIsd = opts.vehicle === "P" && row ? row[2] : null;
    var adjusted = addLanes + addGrade > 0 || tableIsd === null;
    return { base: base, addLanes: addLanes, addGrade: addGrade, tg: tg, calc: calc, table: tableIsd, design: adjusted ? calc : tableIsd, adjusted: adjusted };
  };
  C.isdYield = function (V, opts) {
    var g = IDM.int.yieldGap;
    var base = g.gaps[opts.vehicle];
    var per = opts.vehicle === "P" ? 0.5 : 0.7;
    var addLanes = opts.turn === "left" ? per * Math.max(0, opts.extraLanes || 0) : 0;
    var tg = base + addLanes;
    var calc = 1.47 * V * tg;
    var row = C.rowBySpeed(IDM.int.yieldPC.table, V);
    var tableIsd = opts.vehicle === "P" && row ? row[1] : null;
    var adjusted = addLanes > 0 || tableIsd === null;
    return { base: base, addLanes: addLanes, tg: tg, calc: calc, table: tableIsd, design: adjusted ? calc : tableIsd, adjusted: adjusted, minorLeg: g.minorLeg };
  };
  C.isdMajorLeft = function (V, opts) {
    var g = IDM.int.majorLeftGap;
    var base = g.gaps[opts.vehicle];
    var per = opts.vehicle === "P" ? g.perLaneP : g.perLaneTruck;
    var addLanes = per * Math.max(0, opts.extraLanes || 0);
    var tg = base + addLanes;
    var calc = 1.47 * V * tg;
    var row = C.rowBySpeed(IDM.int.majorLeft.table, V);
    var tableIsd = opts.vehicle === "P" && row ? row[3] : null;
    var adjusted = addLanes > 0 || tableIsd === null;
    return { base: base, addLanes: addLanes, tg: tg, calc: calc, table: tableIsd, design: adjusted ? calc : tableIsd, adjusted: adjusted };
  };
  C.isdNoControl = function (V, grade) {
    var r = C.rowBySpeed(IDM.int.noControl.table, V);
    if (!r) return null;
    var key = "0";
    if (grade <= -6) key = "-6"; else if (grade <= -5) key = "-5"; else if (grade <= -4) key = "-4";
    else if (grade >= 6) key = "6"; else if (grade >= 5) key = "5"; else if (grade >= 4) key = "4";
    var gt = IDM.int.noControlGrade, j = gt.speeds.indexOf(V);
    var f = j >= 0 ? gt.rows[key][j] : 1.0;
    return { base: r[1], factor: f, isd: r[1] * f, gradeRow: key };
  };
  // 46-10.06 skew: extra lanes from path length
  C.skewExtraLanes = function (widthCrossed, angleDeg) {
    if (!(angleDeg > 0) || angleDeg >= 90) return { path: widthCrossed, extra: 0 };
    var path = widthCrossed / Math.sin(C.rad(angleDeg));
    var excess = path - widthCrossed;
    return { path: path, excess: excess, extra: excess >= 12 ? Math.floor(excess / 12) : 0 };
  };

  // Turn lanes
  C.decelLength = function (V, gradePct) {
    var d = IDM.int.decel, r = C.rowBySpeed(d.table, V);
    if (!r) return null;
    var g = Math.abs(gradePct || 0), tbl = gradePct < 0 ? d.downgrade : d.upgrade, f = 1;
    for (var i = 0; i < tbl.length; i++) {
      var last = i === tbl.length - 1;
      if (g >= tbl[i][0] && (g < tbl[i][1] || (last && g <= tbl[i][1]))) { f = tbl[i][2]; break; }
    }
    var outOfRange = g > 6;
    return { base: r[1], factor: f, length: r[1] * f, outOfRange: outOfRange };
  };
  C.storageSignal = function (volPerHr, cycleSec) {
    var s = IDM.int.storage;
    var perCycle = volPerHr * cycleSec / 3600;
    var factor = cycleSec < 120 ? s.factorUnder120 : s.factor120plus;
    var raw = factor * perCycle * s.vehLength;
    var min = s.minCars * s.vehLength;
    return { perCycle: perCycle, factor: factor, raw: raw, length: Math.max(raw, min), min: min };
  };
  C.storageUnsignal = function (volPerHr, pctTrucks, truckLen) {
    var s = IDM.int.storage;
    var arrivals = volPerHr * s.unsignalizedPeriodMin / 60;
    var raw = arrivals * s.vehLength;
    var min = pctTrucks > 10 ? s.vehLength + (truckLen || 0) : s.minCars * s.vehLength;
    var fig = null, rows = IDM.int.storageUnsignalized.rows;
    for (var i = 0; i < rows.length; i++) if (volPerHr <= rows[i].max) { fig = rows[i]; break; }
    return { arrivals: arrivals, raw: raw, min: min, length: Math.max(raw, min), figure: fig };
  };
  C.storageAdjFactor = function (vc, cycle) {
    var t = IDM.int.storageAdj;
    var vcs = t.rows.map(function (r) { return r[0]; });
    var cols = t.cycles.map(function (c, j) { return t.rows.map(function (r) { return r[j + 1]; }); });
    var atCycle = cols.map(function (col) { return C.interp(vc, vcs, col); });
    return C.interp(cycle, t.cycles, atCycle);
  };

  // Tapers
  C.taperRate = function (V) { var r = C.rowBySpeed(IDM.taper502.rates, V); return r ? r[1] : null; };

  // ============================================================== ROADSIDE
  C.czBands = function (V, aadt) {
    var cz = IDM.road.clearZone, si = -1, ai = -1;
    for (var i = 0; i < cz.speedBands.length; i++) if (V >= cz.speedBands[i].min && V <= cz.speedBands[i].max) si = i;
    if (V < 40) si = 0;
    for (var k = 0; k < cz.aadtBands.length; k++) if (aadt >= cz.aadtBands[k].min && aadt <= cz.aadtBands[k].max) ai = k;
    return { si: si, ai: ai };
  };
  C.clearZone = function (V, aadt, colKey) {
    var cz = IDM.road.clearZone, b = C.czBands(V, aadt);
    if (b.si < 0 || b.ai < 0) return null;
    var ci = cz.columns.map(function (c) { return c.key; }).indexOf(colKey);
    var cell = cz.values[b.si][b.ai][ci];
    var star = /\*/.test(cell);
    var parts = cell.replace("*", "").split("-").map(Number);
    return { lo: parts[0], hi: parts[1], mid: (parts[0] + parts[1]) / 2, star: star, cell: cell,
             speedBand: cz.speedBands[b.si].label, aadtBand: cz.aadtBands[b.ai].label, column: cz.columns[ci].label };
  };
  C.kcz = function (R, V) {
    var k = IDM.road.kcz;
    if (R > k.rows[0][0]) return { k: 1.0, note: "R > 2860 ft: no adjustment (Figure 49-2B note 2)." };
    var Vuse = V < 40 ? 40 : V;
    var j = k.speeds.indexOf(Vuse);
    if (j < 0) return { k: null, note: "Design speed not tabulated in Figure 49-2B." };
    var radii = [], vals = [];
    for (var i = 0; i < k.rows.length; i++) {
      if (k.rows[i][j + 1] !== null) { radii.push(k.rows[i][0]); vals.push(k.rows[i][j + 1]); }
    }
    var minR = radii[radii.length - 1];
    if (R < minR) return { k: null, note: "R is sharper than the smallest radius tabulated for " + Vuse + " mph in Figure 49-2B (" + minR + " ft)." };
    var kv = C.interp(R, radii, vals);
    return { k: kv, note: V < 40 ? "Figure 49-2B starts at 40 mph; the 40 mph column was used." : "Straight-line interpolation on radius (Figure 49-2B note 4)." };
  };
  // Equation 49-2.1 weighted foreslope run; runs as H in H:1, ditch flat -> 10
  C.weightedForeslope = function (wf, fRun, wd, dRun) {
    var dr = (!isFinite(dRun) || dRun > 10) ? 10 : dRun;
    var fr = fRun > 10 ? 10 : fRun;
    return (wf + wd) / (wf / fr + wd / dr);
  };
  // general slope averaging across segments [{w, run}], flatter than 10:1 taken as 10:1
  C.averageSlope = function (segs) {
    var W = 0, rise = 0;
    segs.forEach(function (s) { var run = Math.min(s.run, 10); W += s.w; rise += s.w / run; });
    return W > 0 ? W / rise : NaN;
  };

  C.lonDesign = function (V, aadt) {
    var t = IDM.road.lon, bi = 0;
    for (var i = 0; i < t.aadtBands.length; i++) if (aadt <= t.aadtBands[i].max) { bi = i; break; }
    var speeds = t.table.map(function (r) { return r[0]; });
    var lrs = t.table.map(function (r) { return r[1 + bi]; });
    var lss = t.table.map(function (r) { return r[5]; });
    var exact = speeds.indexOf(V) >= 0;
    var LR = C.interp(V, speeds, lrs), Ls = C.interp(V, speeds, lss);
    return { LR: LR, Ls: Ls, band: t.aadtBands[bi].label, interpolated: !exact, outOfRange: !isFinite(LR) };
  };
  C.flareRate = function (V) {
    var r = C.rowBySpeed(IDM.road.flare.table, V);
    return r ? { inside: r[1], concrete: r[2], guardrail: r[3] } : null;
  };
  // Equations 49-4.2 to 49-4.4. flare b:a given as "a" (e.g. 15 for 15:1); a=null => parallel
  C.lengthOfNeed = function (p) {
    // p: LR, LH (or LC if smaller), L1, L2, flareA (a in a:1) or 0 for parallel
    var LH = p.LH, LR = p.LR, L2 = p.L2;
    if (!p.flareA) {
      var Xp = LR * (LH - L2) / LH;
      return { X: Xp, Y: L2, parallel: true };
    }
    var ba = 1 / p.flareA;
    var X = (LH + ba * p.L1 - L2) / (ba + LH / LR);
    var Y = LH - (LH / LR) * X;
    return { X: X, Y: Y, parallel: false };
  };

  // ================================================== CURVE WIDENING (GB)
  // Green Book Section 3.3.10 equations (referenced by IDM 305-3.06).
  C.gbWidening = function (p) {
    // p: N, Wn, R, V, u, wheelbases[], A (front overhang), Lfront (wheelbase used for FA)
    var sumL2 = p.wheelbases.reduce(function (s, l) { return s + l * l; }, 0);
    var U = p.u + p.R - Math.sqrt(p.R * p.R - sumL2);
    var FA = Math.sqrt(p.R * p.R + p.A * (2 * p.Lfront + p.A)) - p.R;
    var Z = 0.1 * p.V / Math.sqrt(p.R);
    var Cc = p.Wn <= 20 ? 2.0 : (p.Wn <= 22 ? 2.0 + (p.Wn - 20) * 0.25 : (p.Wn <= 24 ? 2.5 + (p.Wn - 22) * 0.25 : 3.0));
    var Wc = p.N * (U + Cc) + (p.N - 1) * FA + Z;
    return { U: U, FA: FA, Z: Z, C: Cc, Wc: Wc, w: Wc - p.Wn };
  };

  root.IDMCalc = C;
  if (typeof module !== "undefined" && module.exports) module.exports = C;
})(typeof window !== "undefined" ? window : globalThis);
