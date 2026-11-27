/*
 * IDM Chapter 49, Roadside Safety (latest revision Aug. 2017, Design Memo
 * 17-17). Values transcribed from the chapter PDF.
 */
window.IDM = window.IDM || {};
IDM.road = {
  source: { chapter: "49" },

  // Figure 49-2A, clear-zone width (ft) for new construction or reconstruction.
  // Ranges [low, high]; star = footnote * applies.
  clearZone: {
    figure: "49-2A",
    speedBands: [
      { label: "<= 40", min: 0, max: 40 },
      { label: "45 or 50", min: 45, max: 50 },
      { label: "55", min: 55, max: 55 },
      { label: "60", min: 60, max: 60 },
      { label: "65 or 70", min: 65, max: 70 }
    ],
    aadtBands: [
      { label: "< 750", min: 0, max: 749.999 },
      { label: "750 <= T < 1500", min: 750, max: 1499.999 },
      { label: "1500 <= T <= 6000", min: 1500, max: 6000 },
      { label: "> 6000", min: 6000.001, max: Infinity }
    ],
    columns: [
      { key: "f6", label: "Foreslope 6:1 or flatter" },
      { key: "f4", label: "Foreslope 5:1 or 4:1" },
      { key: "b3", label: "Backslope 3:1" },
      { key: "b4", label: "Backslope 4:1 or 5:1" },
      { key: "b6", label: "Backslope 6:1 or flatter" }
    ],
    // values[speedBand][aadtBand] = [f6, f4, b3, b4, b6], each "lo-hi" with optional "*"
    values: [
      [["7-10", "7-10", "7-10", "7-10", "7-10"], ["10-12", "12-14", "10-12", "10-12", "10-12"], ["12-14", "14-16", "12-14", "12-14", "12-14"], ["14-16", "16-18", "14-16", "14-16", "14-16"]],
      [["10-12", "12-14", "8-10", "8-10", "10-12"], ["12-14", "16-20", "10-12", "10-14", "14-16"], ["16-18", "20-26", "12-14", "14-16", "16-18"], ["18-20", "24-28", "14-16", "18-20", "20-22"]],
      [["12-14", "14-18", "8-10", "10-12", "10-12"], ["16-18", "20-24", "10-12", "14-16", "16-18"], ["20-22", "24-30", "14-18", "16-18", "20-22"], ["22-24", "26-32*", "16-18", "20-22", "22-24"]],
      [["16-18", "20-24", "10-12", "12-14", "14-16"], ["20-24", "26-32*", "12-14", "16-18", "20-22"], ["26-30", "32-40*", "14-18", "18-22", "24-26"], ["30-32*", "36-44*", "20-22", "24-26", "26-28"]],
      [["18-20", "20-26", "10-12", "14-16", "14-16"], ["24-26", "28-36*", "12-16", "18-20", "20-22"], ["28-32*", "34-42*", "16-20", "22-24", "26-28"], ["30-34*", "38-46*", "22-24", "26-30", "28-30"]]
    ],
    notes: {
      star: "Where a site-specific investigation indicates a high probability of continuing crashes, or such occurrences are indicated by crash history, a clear-zone distance greater than that shown may be provided. The clear-zone width may be limited to 30 ft for practicality and to provide a consistent roadway template if previous experience with similar projects or designs has indicated satisfactory performance.",
      threeToOne: "For a foreslope of 3:1, recovery is less likely if it is unshielded. Fixed objects should not be present. Recovery of a high-speed vehicle that encroaches beyond the edge of the shoulder may be expected to occur beyond the toe of slope. (Figure 49-2A note 1; no 3:1 foreslope column is tabulated.)"
    },
    minLowSpeed: { section: "49-2.03(02)", value: 10 },
    minVerticalCurb: { section: "49-2.03(03)", value: 10 },
    appurtenanceFree: { section: "49-2.03(04)", general: 1.5, signal: 2.5 },
    designYearAadtNote: "Design-year AADT is the total AADT on a two-way roadway or the directional AADT on a one-way roadway (ramp, or each roadway of a divided highway). (49-2.01 item 6)"
  },

  // Figure 49-2B, Kcz. radii (ft) x speeds 40..70; null = not tabulated ("--")
  kcz: {
    figure: "49-2B",
    speeds: [40, 45, 50, 55, 60, 65, 70],
    rows: [
      [2860, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.3],
      [2290, 1.1, 1.1, 1.2, 1.2, 1.2, 1.3, 1.3],
      [1910, 1.1, 1.2, 1.2, 1.2, 1.3, 1.3, 1.4],
      [1640, 1.1, 1.2, 1.3, 1.3, 1.3, 1.4, 1.5],
      [1430, 1.2, 1.2, 1.3, 1.3, 1.4, 1.4, null],
      [1270, 1.2, 1.2, 1.3, 1.3, 1.4, 1.5, null],
      [1150, 1.2, 1.2, 1.3, 1.4, 1.5, null, null],
      [950, 1.2, 1.3, 1.4, 1.5, 1.5, null, null],
      [820, 1.3, 1.3, 1.4, 1.5, null, null, null],
      [720, 1.3, 1.4, 1.5, null, null, null, null],
      [640, 1.3, 1.4, 1.5, null, null, null, null],
      [570, 1.4, 1.5, null, null, null, null, null],
      [380, 1.5, null, null, null, null, null, null]
    ],
    notes: [
      "Adjustments apply to the outside of a horizontal curve.",
      "A curve with radius greater than 2860 ft does not require adjustments.",
      "CZc = (Kcz)(CZt).",
      "For a curve radius not shown in the table, use a straight-line interpolation.",
      "See Figure 49-2C for the application of CZc to the roadside around a curve."
    ],
    textNote: "Section 49-2.02(01) text says a curve with radius greater than 3000 ft (measured along the roadway centerline) does not require a curvature adjustment; Figure 49-2B note 2 uses 2860 ft.",
    transition: { figure: "49-2C", factor: 3.1 } // L = 3.1 V (ft)
  },

  // 49-2.03(01) non-recoverable slope runout
  runout: { section: "49-2.03(01) item 2.c", minimum: 12 },

  // Figure 49-4A barrier deflections
  deflection: {
    figure: "49-4A",
    rows: [
      ["TL-3", "Guardrail, 6'-3\" post spacing", "2", 4.30],
      ["TL-3", "Guardrail, 3'-1 1/2\" post spacing", "2", 3.30],
      ["TL-3", "Guardrail, 1'-6 3/4\" post spacing", "2", 2.80],
      ["TL-4", "Guardrail, thrie-beam, 6'-3\" post spacing", "2", 3.75],
      ["TL-3", "Guardrail, thrie-beam, 3'-1 1/2\" post spacing", "1", 3.00],
      ["TL-3", "Guardrail, thrie-beam, 1'-6 3/4\" post spacing", "1", 2.50],
      ["TL-3", "Guardrail, Type B, 12'-6\" post spacing", "1", 7.55],
      ["TL-3", "Guardrail, Type B, 6'-3\" post spacing", "1", 4.30],
      ["TL-3", "Guardrail, Type B, 3'-1 1/2\" post spacing", "1", 3.30],
      ["TL-3", "Guardrail, Type B, 1'-6 3/4\" post spacing", "1", 2.80],
      ["3", "Concrete barrier", "1", 0.00]
    ],
    notes: [
      "Crash test 1: 4470-lb sedan, 60 mph, 25-deg impact angle. Crash test 2: 4400-lb pickup, 62 mph, 25-deg impact angle.",
      "Maximum dynamic deflection width is measured from the front face of the barrier in its correct location to the front face of the barrier once it is deflected.",
      "Concrete barrier of 2'-9\" height is TL-4. Concrete barrier of 3'-9\" height is TL-5."
    ]
  },

  // Figure 49-4E (Rev. April 2013): runout length LR and shy-line offset Ls
  lon: {
    figure: "49-4E", revision: "Rev. April 2013",
    aadtBands: [
      { label: "T <= 1000", max: 1000 },
      { label: "1000 < T <= 5000", max: 5000 },
      { label: "5000 < T <= 10000", max: 10000 },
      { label: "T > 10000", max: Infinity }
    ],
    // [V, LR by AADT band..., Ls]
    table: [
      [30, 70, 80, 90, 110, 4.0],
      [40, 100, 110, 130, 160, 5.0],
      [45, 125, 135, 160, 195, 6.0],
      [50, 150, 160, 190, 230, 6.5],
      [55, 175, 185, 220, 265, 7.0],
      [60, 200, 210, 250, 300, 8.0],
      [70, 250, 290, 330, 360, 9.0]
    ],
    note: "This figure is in accordance with the suggested values from the AASHTO Roadside Design Guide 4th Edition 2011.",
    interpolationNote: "Example 49-4.1 (65 mph) uses LR interpolated between the 60 and 70 mph rows."
  },
  minLength: {
    figure: "49-4E(1)",
    // [speed condition, with GRET OS/MS/II, with GRET Type I]
    rows: [[">= 50", 50, 100], ["<= 45", 50, 50]]
  },
  opposingMin: { section: "49-4.02(02)", highSpeed: 100, lowSpeed: 50 },
  pierRounding: { section: "49-4.02(04)", increment: 6.25, threshold: 16 },
  gapAvoid: { section: "49-4.02(03)", ft: 200 },

  // Figure 49-4F barrier flare rates (a:b, b:1 stored as number)
  flare: {
    figure: "49-4F",
    // [V, inside shy line all barriers, outside concrete, outside guardrail]
    table: [[30, 13, 8, 7], [35, 16, 10, 8], [40, 17, 11, 9], [45, 18, 12, 10], [50, 21, 14, 11], [55, 24, 16, 12], [60, 26, 18, 14], [65, 30, 20, 15]]
  },
  offset: {
    section: "49-4.01(01)",
    text: "Offset from the effective usable-shoulder width: new construction desirable 2 ft, minimum 1 ft; reconstruction desirable 2 ft, minimum 0 ft (2 ft if design-year AADT > 100,000).",
    slopeInFront: "49-4.01(04): slope in front of semi-rigid barrier desirably 10:1 or flatter; where a 6:1 slope is provided, place barrier at least 12 ft beyond the shoulder break point."
  },
  // Worked examples (49-4.03) used in spot checks
  examples: [
    { id: "49-4.1", V: 65, aadt: 7000, slope: "4:1", cz: 46, lr: 290 },
    { id: "49-4.2", V: 60, aadt: 7000, slope: "flat at toe", cz: 30, lr: 250 },
    { id: "49-4.3", V: 65, aadt: 7000, slope: "5:1", cz: 38, lr: 290 },
    { id: "49-2.1", V: 55, aadt: 2000, slope: "3:1 cut", czt: 15, R: 2000, kcz: 1.2, czc: 18, L: 171 }
  ]
};
