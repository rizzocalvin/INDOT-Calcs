/*
 * IDM Chapter 42, Sight Distance (2013 IDM; no design-memo revisions listed).
 * Values transcribed from the chapter PDF.
 */
window.IDM = window.IDM || {};
IDM.sight = {
  ssd: {
    source: { chapter: "42", section: "42-1.0", figure: "42-1A", equation: "42-1.1" },
    title: "Stopping Sight Distance for Passenger Car",
    reactionTime: 2.5,          // s, 42-1.01
    decel: 11.2,                // ft/s^2, 42-1.01
    eyeHeight: 3.5, objectHeight: 2.0, // ft, 42-1.02
    // [V mph, brake reaction dist ft, braking dist ft, calculated SSD ft, design SSD ft]
    table: [
      [15, 55.1, 21.6, 76.7, 80],
      [20, 73.5, 38.4, 111.9, 115],
      [25, 91.9, 60.0, 151.9, 155],
      [30, 110.3, 86.4, 196.7, 200],
      [35, 128.6, 117.6, 246.2, 250],
      [40, 147.0, 153.6, 300.6, 305],
      [45, 165.4, 194.4, 359.8, 360],
      [50, 183.8, 240.0, 423.8, 425],
      [55, 202.1, 290.3, 492.4, 495],
      [60, 220.5, 345.5, 566.0, 570],
      [65, 238.9, 405.5, 644.4, 645],
      [70, 257.3, 470.3, 727.6, 730]
    ]
  },
  dsd: {
    source: { chapter: "42", section: "42-2.0", figure: "42-2A", equation: "42-2.1" },
    title: "Decision Sight Distance",
    maneuvers: {
      A: "Stop on rural road (t = 3.0 s)",
      B: "Stop on urban road (t = 9.1 s)",
      C: "Speed/path/direction change on rural road (t = 10.2 to 11.2 s)",
      D: "Speed/path/direction change on suburban road (t = 12.1 to 12.9 s)",
      E: "Speed/path/direction change on urban road (t = 14.0 to 14.5 s)"
    },
    // [V mph, A, B, C, D, E] ft
    table: [
      [30, 220, 490, 450, 535, 620],
      [35, 275, 590, 525, 625, 720],
      [40, 330, 690, 600, 715, 825],
      [45, 395, 800, 675, 800, 930],
      [50, 465, 910, 750, 890, 1030],
      [55, 535, 1030, 865, 980, 1135],
      [60, 610, 1150, 990, 1125, 1280],
      [65, 695, 1275, 1050, 1220, 1365],
      [70, 780, 1410, 1105, 1275, 1445]
    ],
    applications: [
      "exit or entrance gore", "lane drop", "freeway left-side entrance or exit",
      "railroad/highway grade crossing", "approach to detour or lane closure", "toll plaza",
      "intersection location where unusual or unexpected maneuvers are required"
    ]
  },
  psd: {
    source: { chapter: "42", section: "42-3.0", figure: "42-3B" },
    title: "Passing Sight Distance on Two-Lane Highway",
    eyeHeight: 3.5, objectHeight: 3.5,
    // [V, passed vehicle mph, passing vehicle mph, calculated ft, design ft]
    table: [
      [20, 18, 28, 706, 710], [25, 22, 32, 897, 900], [30, 26, 36, 1088, 1090],
      [35, 30, 40, 1279, 1280], [40, 34, 44, 1470, 1470], [45, 37, 47, 1625, 1625],
      [50, 41, 51, 1832, 1835], [55, 44, 54, 1984, 1985], [60, 47, 57, 2133, 2135],
      [65, 50, 60, 2281, 2285], [70, 54, 64, 2479, 2480]
    ],
    percentPassing: {
      figure: "42-3C",
      // rural, terrain -> [arterial, collector, local]
      level: [60, 50, 40], rolling: [40, 30, 20]
    }
  }
};
