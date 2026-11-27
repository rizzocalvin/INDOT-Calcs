/*
 * Spot checks of the calculators against IDM worked examples and tabulated
 * values. Run from the repository root:   node tests/spot-checks.js
 * Prints PASS / FAIL / NOTE lines; exits with code 1 if any check fails.
 * NOTE lines record places where the IDM itself is internally inconsistent.
 */
"use strict";
const path = require("path");
global.window = global;
const root = path.join(__dirname, "..");
["sources", "sight-distance", "horizontal", "vertical", "cross-section", "intersections", "roadside",
 "geometric-4r", "geometric-3r", "geometric-3r-freeway-partial"].forEach(f => require(path.join(root, "data", f + ".js")));
const C = require(path.join(root, "js", "calcs.js"));
const IDM = global.IDM;

let pass = 0, fail = 0, notes = 0;
function check(name, got, exp, tol) {
  tol = tol === undefined ? 0.01 : tol;
  const ok = typeof exp === "number" ? Math.abs(got - exp) <= tol : got === exp;
  if (ok) pass++; else fail++;
  console.log((ok ? "PASS " : "FAIL ") + name + ": got " + (typeof got === "number" ? +got.toFixed(4) : got) + ", expected " + exp + (typeof exp === "number" ? " (tol " + tol + ")" : ""));
}
function note(msg) { notes++; console.log("NOTE " + msg); }
const r5 = x => Math.ceil(x / 5 - 1e-9) * 5;

console.log("\n== Chapter 42, sight distance ==");
IDM.sight.ssd.table.forEach(([V, , , calc, design]) => {
  const e = C.ssdEquation(V);
  check(`SSD Eq. 42-1.1 at ${V} mph vs Fig. 42-1A calculated`, e.total, calc, 0.15);
  check(`SSD design at ${V} mph = calculated rounded up to 5 ft`, r5(calc), design, 0);
});
IDM.sight.dsd.table.forEach(r => {
  const V = r[0];
  const A = C.ssdEquation(V, 3.0).total, B = C.ssdEquation(V, 9.1).total;
  check(`DSD maneuver A at ${V} mph (Eq. 42-1.1, t = 3.0 s)`, A, r[1], 10);
  check(`DSD maneuver B at ${V} mph (Eq. 42-1.1, t = 9.1 s)`, B, r[2], 10);
});

console.log("\n== Chapter 305, horizontal alignment ==");
["4", "6", "8"].forEach(k => {
  const t = IDM.horiz.openRoadway[k];
  t.speeds.forEach((V, j) => {
    const tab = C.tableRmin(k, V);
    check(`Rmin Eq. 305-3.1 vs Fig. ${t.figure} at ${V} mph, emax ${k}%`, C.minRadius(V, Number(k), t.fmax[j]), tab.R, Math.max(10, tab.R * 0.01));
  });
});
// Low-speed urban examples 305-4.1 to 305-4.3
let e = C.designE("LS", 35, 600); check("Example 305-4.1 (35 mph, R 600): NC", e.row, "NC");
e = C.designE("LS", 35, 450); check("Example 305-4.2 (35 mph, R 450): approx. 0% (interpolated)", e.eInterp, 0, 0.25);
e = C.designE("LS", 35, 390); check("Example 305-4.3 (35 mph, R 390): approx. +3.0% (interpolated)", e.eInterp, 3.0, 0.1);
// Figure 305-6C simple curve example
const R6c = 5729.58 / 3.5;
check("Fig. 305-6C R from D = 3d30m", R6c, 1637.02, 0.01);
const ce = C.curveElements(R6c, 38.34, 2025.36);
check("Fig. 305-6C T", ce.T, 569.11, 0.05);
check("Fig. 305-6C L", ce.L, 1095.43, 0.05);
check("Fig. 305-6C E", ce.E, 96.11, 0.05);
check("Fig. 305-6C M", ce.M, 90.78, 0.05);
check("Fig. 305-6C PC", ce.PC, 1456.25, 0.05);
check("Fig. 305-6C PT", ce.PT, 2551.68, 0.1);
// HSO, Figure 305-5B
check("Fig. 305-5B HSO (V 60, R 1500, S 570)", C.hso(1500, 570), 27, 0.5);
check("HSO inverse: sight distance for 27.0 ft offset", C.hsoSight(1500, C.hso(1500, 570)), 570, 0.01);
// Superelevation runoff Eq. 305-4.1 vs Figure 305-4G
const rt = IDM.horiz.runoffTable; let mism = [];
rt.rows.forEach(row => rt.speeds.forEach((V, j) => {
  const Lr = C.runoff(12, 1, row[0], 1, C.relGradient(V)).Lr;
  if (Lr !== row[j + 1]) mism.push(`e ${row[0]}% @ ${V} mph: table ${row[j + 1]}, Eq. 305-4.1 ${Lr}`);
  else pass++;
}));
console.log(`INFO Fig. 305-4G cells reproduced by Eq. 305-4.1 (12-ft lane, Fig. 305-4F G, rounded up to 5 ft): ${rt.rows.length * rt.speeds.length - mism.length} of ${rt.rows.length * rt.speeds.length}`);
note(`Fig. 305-4G differs from Eq. 305-4.1 in ${mism.length} cells (neither rounding up nor rounding to the nearest 5 ft reproduces it). Largest differences: ` +
  mism.map(m => { const p = m.match(/table (\d+), Eq\. 305-4\.1 (\d+)/); return [Math.abs(p[1] - p[2]), m]; }).sort((a, b) => b[0] - a[0]).slice(0, 5).map(x => x[1]).join("; "));
if (process.argv.includes("--verbose")) mism.forEach(m => console.log("     " + m));
check("Runoff e 4.0% @ 50 mph (12 ft, 1 lane)", C.runoff(12, 1, 4, 1, 0.5).Lr, 100, 0);
check("Tangent runout Lr 100, Sn 2, e 4", C.tangentRunout(100, 2, 4), 50, 0);

console.log("\n== Chapter 44, vertical alignment ==");
IDM.vert.crestSSD.table.forEach(r => {
  check(`Crest K min at ${r[0]} mph = SSD^2/2158`, r[2] * r[2] / 2158, r[4], 0.06);
  check(`Crest K des at ${r[0]} mph = SSD^2/2158`, r[1] * r[1] / 2158, r[3], 1.05);
});
IDM.vert.sagSSD.table.forEach(r => check(`Sag K at ${r[0]} mph = S^2/(400+3.5S)`, r[1] * r[1] / (400 + 3.5 * r[1]), r[2], 0.06));
note("IDM Eq. 44-3.4/44-3.5 text prints 400 + 5.3S; Figure 44-3C values match 400 + 3.5S (used by the calculator).");
IDM.vert.crestDSD.table.forEach(r => { for (let i = 0; i < 5; i++) { const S = r[1 + 2 * i], K = r[2 + 2 * i]; if (Math.abs(S * S / 2158 - K) > 1) note(`Fig. 44-3B ${r[0]} mph maneuver ${"ABCDE"[i]}: K ${K} vs DSD^2/2158 = ${(S * S / 2158).toFixed(1)}`); } });
IDM.vert.sagDSD.table.forEach(r => { for (let i = 0; i < 5; i++) { const S = r[1 + 2 * i], K = r[2 + 2 * i]; const k1 = S * S / (120 + 3.5 * S); if (Math.abs(k1 - K) > 1.5) note(`Fig. 44-3D ${r[0]} mph maneuver ${"ABCDE"[i]}: K ${K} vs DSD^2/(120+3.5S) = ${k1.toFixed(1)}`); } });
note("Fig. 44-3D values follow K = DSD^2/(120 + 3.5 DSD) as printed; the US-customary sag equation (Eq. 44-3.4) would give DSD^2/(400 + 3.5 DSD), i.e. smaller K. The calculator reports the IDM values as printed.");
// Example 44-3.1 (Figure 44-3G)
const vc = C.verticalCurve(-1.75, 2.25, 500, 1380, 577.50);
check("Ex. 44-3.1 PVC station", vc.pvcSta, 1130, 0.001);
check("Ex. 44-3.1 PVT station", vc.pvtSta, 1630, 0.001);
check("Ex. 44-3.1 PVC elevation", vc.pvcElev, 581.875, 0.001);
check("Ex. 44-3.1 PVT elevation (tangent)", vc.pvtElev, 583.125, 0.001);
check("Ex. 44-3.1 low point station", vc.turnSta, 1348.75, 0.01);
check("Ex. 44-3.1 M = (G2-G1)L/800", vc.M, 2.5, 0.001);
note(`Ex. 44-3.1 low-point elevation: Figure 44-3F equations give ${vc.turnElev.toFixed(2)}; the IDM example prints 580.33 (its offset table uses X^2/20000 instead of X^2/25000 and its denominator uses decimal grades). Calculator follows the equations.`);
// Example 44-3.2 (Figure 44-3J)
const tp = C.curveThroughPoint(-1.5, 2.0, 174, 648.50 - (642.10 + 1.5 * 1.74));
check("Ex. 44-3.2 X", tp[0].X, 566.24, 0.05);
check("Ex. 44-3.2 L", tp[0].L, 1480.48, 0.1);
check("Ex. 44-3.2 L = KA with K 115, A 3.5", C.sagK(55).k * 3.5, 402.5, 0.001);

console.log("\n== Chapter 46, intersections ==");
IDM.int.stopLeft.table.forEach(r => {
  const V = r[0];
  [[r[1], r[2], "P local"], [r[3], r[4], "P coll/art"], [r[5], r[6], "SU"], [r[7], r[8], "CT"]].forEach(([tg, isd, lbl]) => {
    const calc = 1.47 * V * tg;
    if (Math.abs(calc - isd) <= 5.01) pass++; else note(`Fig. 46-10G ${V} mph ${lbl}: printed ${isd} ft vs 1.47 V tg = ${calc.toFixed(1)} ft`);
  });
});
console.log("PASS Fig. 46-10G entries within 5 ft of 1.47 V tg (exceptions listed as NOTE)");
IDM.int.stopRightCross.table.forEach(r => check(`Fig. 46-10H calc at ${r[0]} mph = 1.47 V 6.5`, 1.47 * r[0] * 6.5, r[1], 0.06));
IDM.int.majorLeft.table.forEach(r => check(`Fig. 46-10J calc at ${r[0]} mph = 1.47 V 5.5`, 1.47 * r[0] * 5.5, r[2], 0.06));
IDM.int.yieldPC.table.forEach(r => check(`Fig. 46-10D at ${r[0]} mph ~ 1.47 V 8.0`, 1.47 * r[0] * 8, r[1], 5.01));
let isd = C.isdStopLeft(55, { vehicle: "P", cls: "collart", extraLanes: 0, gradeUp: 0 });
check("ISD stop left, P, coll/art, 55 mph, no adjustments (table)", isd.design, 730, 0);
isd = C.isdStopLeft(55, { vehicle: "P", cls: "collart", extraLanes: 1, gradeUp: 4 });
check("ISD stop left, P, 55 mph, +1 lane, 4% upgrade: tg = 9.0 + 0.5 + 0.8", isd.tg, 10.3, 1e-9);
check("Decel. length 50 mph on 4.5% downgrade = 435 x 1.28", C.decelLength(50, -4.5).length, 556.8, 0.01);
check("Decel. length 50 mph on 2% upgrade = 435 x 0.95", C.decelLength(50, 2).length, 413.25, 0.01);
check("Signalized storage, 150 vph, C 90 s: 2 x 3.75 veh x 20 ft", C.storageSignal(150, 90).length, 150, 1e-9);
check("Signalized storage, 150 vph, C 120 s: 1.5 x 5 veh x 20 ft", C.storageSignal(150, 120).length, 150, 1e-9);
check("Storage adjustment factor v/c 0.80, C 75 s (reference)", C.storageAdjFactor(0.80, 75), 1.0, 0.001);
note("Storage adjustment factor at the stated reference (v/c 0.80, C 75 s) interpolates to " + C.storageAdjFactor(0.80, 75).toFixed(3) + " from the IDM table, not exactly 1.00.");
check("Merging taper 50 mph, 12 ft offset (Fig. 502-2J)", C.taperRate(50) * 12, 600, 0);
check("Merging taper 40 mph, 12 ft offset (Fig. 502-2J)", C.taperRate(40) * 12, 360, 0);

console.log("\n== Chapter 49, roadside safety ==");
let cz = C.clearZone(60, 5000, "f4");
check("49-2.01 text example: 60 mph, 5000 AADT, 4:1 fill = 40 ft (upper)", cz.hi, 40, 0);
cz = C.clearZone(60, 5000, "b4");
check("49-2.01 text example: 4:1 cut = 20 ft (midpoint of 18-22)", cz.mid, 20, 0);
cz = C.clearZone(55, 2000, "b3");
note(`Example 49-2.1 (55 mph, 2000 AADT, 3:1 cut) uses CZt = 15 ft; Fig. 49-2A range is ${cz.cell} ft.`);
check("Example 49-2.1 Kcz at R 2000, 55 mph", C.kcz(2000, 55).k, 1.2, 1e-9);
check("Example 49-2.1 CZc = 15 x 1.2", 15 * C.kcz(2000, 55).k, 18, 1e-9);
check("Example 49-2.1 transition L = 3.1 x 55", 3.1 * 55, 171, 0.6);
check("Example 49-4.1 CZ (65 mph, 7000, 4:1) upper", C.clearZone(65, 7000, "f4").hi, 46, 0);
check("Example 49-4.1 LR (65 mph, 7000) interpolated", C.lonDesign(65, 7000).LR, 290, 1e-9);
check("Example 49-4.2 CZ (60 mph, 7000, flat) lower", C.clearZone(60, 7000, "f6").lo, 30, 0);
check("Example 49-4.2 LR (60 mph, 7000)", C.lonDesign(60, 7000).LR, 250, 0);
check("Example 49-4.3 CZ (65 mph, 7000, 5:1) lower", C.clearZone(65, 7000, "f4").lo, 38, 0);
check("Example 49-2.3 weighted foreslope run (Eq. 49-2.1)", C.weightedForeslope(10, 6, 4, Infinity), 6.8, 0.05);
check("Example 49-2.3 CZ for flatter than 6:1 (60 mph, 1490 AADT) mid", C.clearZone(60, 1490, "f6").mid, 22, 0);
const czfd = 100 * (6 + 10 + 4) / 22;
note(`Example 49-2.3 Eq. 49-2.2: 100(6 + 10 + 4)/22 = ${czfd.toFixed(1)}%, but the IDM prints 92%. With 92% as printed:`);
const czbr = 16 * (100 - 92) / 100;
check("Example 49-2.3 CZBR (Eq. 49-2.3) using the printed 92%", czbr, 1.28, 0.001);
check("Example 49-2.3 CZADJ (Eq. 49-2.4) using the printed 92%", 0.92 * 22 + czbr, 21.5, 0.05);
check("Example 49-2.3 CZADJ with the correct 90.9%", (czfd / 100) * 22 + 16 * (100 - czfd) / 100, 21.5, 0.6);
const lonP = C.lengthOfNeed({ LR: 250, LH: 30, L2: 12 });
check("Parallel LON X = LR(LH - L2)/LH (250, 30, 12)", lonP.X, 150, 1e-9);
const lonF = C.lengthOfNeed({ LR: 250, LH: 30, L1: 0, L2: 12, flareA: 15 });
check("Flared LON consistency: Y on runout line equals barrier offset at X", lonF.Y, 12 + lonF.X / 15, 1e-6);
check("Flare rate guardrail outside shy line 60 mph (Fig. 49-4F)", C.flareRate(60).guardrail, 14, 0);

console.log("\n== Geometric design tables (Ch. 53, 54, 55, 56): data integrity ==");
[["geom4R", IDM.geom4R], ["geom3R", IDM.geom3R], ["geom3RFwyPartial", IDM.geom3RFwyPartial]].forEach(([nm, d]) => {
  let rows = 0, missing = 0;
  d.figures.forEach(f => {
    f.rows.forEach(r => {
      rows++;
      const cols = f.columns.filter(c => (c.table || "main") === (r.table || "main"));
      cols.forEach(c => { if (!r.values || r.values[c.key] === undefined) missing++; });
    });
  });
  check(`${nm}: ${d.figures.length} figures, ${rows} rows, cells missing`, missing, 0, 0);
});
const f532 = IDM.geom4R.figures.find(f => f.id === "53-2");
const lane532 = f532 && f532.rows.find(r => r.key === "laneWidth");
console.log("INFO 53-2 rural arterial lane widths: " + (lane532 ? JSON.stringify(lane532.values) : "n/a"));

console.log(`\n${pass} passed, ${fail} failed, ${notes} notes`);
process.exit(fail ? 1 : 0);
