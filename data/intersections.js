/*
 * IDM Chapter 46, Intersections At-Grade (latest revisions Aug. 2018, Design
 * Memos 18-18 and 18-19), and Chapter 502, Traffic Design, Figure 502-2J
 * (Rev. Aug. 2018). Values transcribed from the chapter PDFs.
 */
window.IDM = window.IDM || {};
IDM.int = {
  source: { chapter: "46" },
  eye: { car: 3.5, truck: 7.6, object: 3.5, section: "46-10.0" },

  // Figure 46-10A, no traffic control (not applicable to State highways)
  noControl: {
    figure: "46-10A",
    table: [[10, 65], [20, 75], [25, 110], [30, 145], [40, 180], [45, 215], [50, 250], [55, 300], [60, 350]],
    note: "This figure is not applicable for State highways. Values are for approach grades between -3% and +3%; adjust with Figure 46-10B."
  },
  // Figure 46-10B, adjustment factor by approach grade
  noControlGrade: {
    figure: "46-10B",
    speeds: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
    rows: {
      "-6": [1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.2],
      "-5": [1.0, 1.0, 1.0, 1.0, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.2, 1.2],
      "-4": [1.0, 1.0, 1.0, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1],
      "0": [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
      "4": [1.0, 1.0, 1.0, 1.0, 1.0, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9],
      "5": [1.0, 1.0, 1.0, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9],
      "6": [1.0, 1.0, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9]
    }
  },

  // Figure 46-10C, yield control, left or right turn
  yieldGap: {
    figure: "46-10C",
    gaps: { P: 8, SU: 10, CT: 12 },
    multilane: "Left turn onto a two-way highway with more than two lanes: add 0.5 s (passenger car) or 0.7 s (truck) per additional lane, from the left, in excess of one. Right turn: no adjustment.",
    minorLeg: 80, // ft, 46-10.02(02)
    turningSpeed: 10
  },
  // Figure 46-10D, yield control, passenger car, length of leg along major road
  yieldPC: {
    figure: "46-10D",
    table: [[15, 180], [20, 240], [25, 295], [30, 355], [35, 415], [40, 475], [45, 530], [50, 590], [55, 650]]
  },

  // Figure 46-10G, stop control, left turn from minor road
  // [V, P local tg, P local ISD, P coll/art tg, P coll/art ISD, SU tg, SU ISD, CT tg, CT ISD]
  stopLeft: {
    figure: "46-10G",
    table: [
      [15, 7.5, 170, 7.5, 170, 9.5, 210, 11.5, 260],
      [20, 7.5, 220, 7.5, 220, 9.5, 280, 11.5, 340],
      [25, 7.5, 280, 7.5, 280, 9.5, 350, 11.5, 430],
      [30, 7.5, 330, 7.5, 330, 9.5, 420, 11.5, 510],
      [35, 7.5, 390, 7.5, 390, 9.5, 490, 11.5, 600],
      [40, 7.5, 440, 7.5, 440, 9.5, 560, 11.5, 680],
      [45, 7.5, 500, 7.5, 500, 9.5, 630, 11.5, 760],
      [50, 7.5, 550, 8.5, 630, 10.5, 780, 12.5, 920],
      [55, 7.5, 610, 9.0, 730, 11.0, 890, 13.0, 1060],
      [60, 7.5, 670, 9.5, 840, 11.5, 1020, 13.5, 1190],
      [65, 7.5, 720, 10.0, 960, 12.0, 1150, 14.0, 1340],
      [70, 7.5, 780, 10.0, 1030, 12.0, 1240, 14.0, 1440]
    ],
    formula: "ISD = 1.47 Vmajor tg",
    adjustments: [
      "Left turn onto a two-way highway with more than two lanes: add 0.5 s (passenger car) or 0.7 s (truck) for each additional lane from the left, in excess of one, to be crossed.",
      "Minor-road approach upgrade steeper than 3%: add 0.2 s for each percent grade for a left turn (only if the rear wheels of the design vehicle would be on the upgrade)."
    ],
    perLaneP: 0.5, perLaneTruck: 0.7, gradePerPct: 0.2
  },
  // Figure 46-10H, passenger car right turn from stop or crossing
  stopRightCross: {
    figure: "46-10H",
    table: [[15, 143.3, 145], [20, 191.1, 195], [25, 238.9, 240], [30, 286.7, 290], [35, 334.4, 335], [40, 382.2, 385],
            [45, 430.0, 430], [50, 477.8, 480], [55, 525.5, 530], [60, 573.3, 575], [65, 621.1, 625], [70, 668.9, 670]],
    note: "For a stopped passenger car to turn right onto or cross a two-lane highway with no median and grades of 3% or flatter. For other conditions, the time gap should be adjusted and the required sight distance recalculated."
  },
  // Figure 46-10H(1), crossing maneuver time gaps
  crossGap: {
    figure: "46-10H(1)",
    gaps: { P: 6.5, SU: 8.5, CT: 10.5 },
    perLaneP: 0.5, perLaneTruck: 0.7, gradePerPct: 0.1,
    note: "For crossing a major road with more than two lanes, add 0.5 s (passenger car) or 0.7 s (truck) for each additional lane or narrow median to be crossed (a narrow median cannot store the design vehicle). Minor-road approach upgrade steeper than 3%: add 0.1 s per percent grade."
  },
  // Figure 46-10I, left turn from the major road
  majorLeftGap: {
    figure: "46-10I",
    gaps: { P: 5.5, SU: 6.5, CT: 7.5 },
    perLaneP: 0.5, perLaneTruck: 0.7, gradePerPct: 0.1,
    note: "Divided highway: for a left-turning vehicle crossing more than one opposing lane, add 0.5 s (passenger car) or 0.7 s (truck) for each additional lane to be crossed and for a narrow median that cannot store the design vehicle. Minor-road approach upgrade steeper than 3%: add 0.1 s per percent grade (as printed)."
  },
  // Figure 46-10J
  majorLeft: {
    figure: "46-10J",
    table: [[15, 80, 121.3, 125], [20, 115, 161.7, 165], [25, 155, 202.1, 205], [30, 200, 242.6, 245], [35, 250, 283.0, 285],
            [40, 305, 323.4, 325], [45, 360, 363.8, 365], [50, 425, 404.3, 405], [55, 495, 444.7, 445], [60, 570, 485.1, 490],
            [65, 645, 525.5, 530], [70, 730, 566.0, 570]]
  },
  decisionPoint: { section: "46-10.03(01)", fourR: 18, threeR: 14.5 }, // ft from edge of travel lane
  skew: { section: "46-10.06", angle: 60, extraLaneThreshold: 12 },

  // ---------------- Turn lanes ----------------
  functionalLength: {
    figure: "46-4H",
    rows: [
      { cls: "Rural arterial", length: "LT + LD + LS" },
      { cls: "Urban arterial / other facility / stop or T facility", length: "LT + LD + LS (desirable); LT + LS (minimum)" }
    ],
    note: "LD is a consideration only at a free-flowing leg of a stop-controlled intersection or signalized intersection, or at a free-flowing turning roadway with a turn lane."
  },
  taper: {
    section: "46-4.02(02) item 1",
    single: 100, dualUrban: 150, minCurvilinear: 50
  },
  decel: {
    figure: "46-4J", revision: "Rev. Aug. 2018",
    table: [[60, 530], [55, 480], [50, 435], [45, 385], [40, 320], [35, 280], [30, 235], [25, 200]],
    downgrade: [[0, 2, 1.00], [2, 3, 1.10], [3, 4, 1.20], [4, 5, 1.28], [5, 6, 1.35]],
    upgrade: [[0, 2, 1.00], [2, 3, 0.95], [3, 4, 0.90], [4, 5, 0.85], [5, 6, 0.80]],
    note: "The grade-adjustment factor multiplied by LD provides the deceleration-lane length adjusted for grade."
  },
  storage: {
    section: "46-4.02(02) items 3 and 4",
    vehLength: 20,
    factorUnder120: 2.0, factor120plus: 1.5,
    minCars: 2,
    unsignalizedPeriodMin: 2,
    minRestricted: { underTenPctTrucks: 50, tenPctTrucks: 100 }
  },
  storageUnsignalized: {
    figure: "46-4L",
    rows: [
      { max: 60, text: "50 to 75", ls: 75 },
      { max: 120, text: "100", ls: 100 },
      { max: 180, text: "150", ls: 150 },
      { max: Infinity, text: ">= 200", ls: 200 }
    ]
  },
  // Page labeled Figure 46-4K(1) in the PDF (storage length adjustment factors,
  // reference condition C = 75 s, v/c = 0.80). Columns are cycle length C (s).
  storageAdj: {
    figure: "46-4K(1) (as labeled; adjustment-factor table)",
    cycles: [60, 70, 80, 90, 100],
    rows: [
      [0.50, 0.70, 0.76, 0.84, 0.89, 0.94], [0.55, 0.71, 0.77, 0.85, 0.90, 0.95], [0.60, 0.73, 0.79, 0.87, 0.92, 0.97],
      [0.65, 0.75, 0.81, 0.89, 0.94, 1.00], [0.70, 0.77, 0.84, 0.92, 0.98, 1.03], [0.75, 0.82, 0.88, 0.98, 1.03, 1.09],
      [0.80, 0.88, 0.95, 1.05, 1.11, 1.17], [0.85, 0.99, 1.06, 1.18, 1.24, 1.31], [0.90, 1.17, 1.26, 1.40, 1.48, 1.56],
      [0.95, 1.61, 1.74, 1.92, 2.03, 2.14]
    ]
  },

  // Figure 46-7A, extension of additional through lanes (preliminary design)
  throughLaneExt: {
    figure: "46-7A",
    table: [[30, 200, 20], [40, 330, 25], [45, 480, 45], [50, 710, 50], [55, 970, 60], [60, 1450, 65]],
    notes: [
      "DE is the distance required to accelerate from a stop to 6 mph below the average running speed.",
      "If driveways are present, DE may need to be increased.",
      "Sharper taper rates may be used in urban areas; however, taper lengths should be at least 300 ft.",
      "These criteria are for preliminary design purposes. Final design is determined case by case."
    ]
  },
  turnLaneExtension: { section: "46-4.02(05)", accelTaper: 300, minRestricted: 200 },
  accelLaneEndTaper: { section: "46-6.03", length: 300 }
};

IDM.taper502 = {
  source: { chapter: "502", figure: "502-2J", revision: "Rev. Aug. 2018" },
  rates: [[20, 10], [25, 10], [30, 15], [35, 20], [40, 30], [45, 45], [50, 50], [55, 55], [60, 60], [65, 65], [70, 70]],
  types: [
    { type: "Merging taper (lane drop)", length: "L = merging taper rate x offset distance" },
    { type: "Lane shift taper", length: "L = merging taper rate x offset distance" },
    { type: "Two-way left-turn lane transition taper", length: "100 ft" },
    { type: "Downstream recovery taper", length: "50 ft per lane (desirable 100 ft per lane)" }
  ]
};
