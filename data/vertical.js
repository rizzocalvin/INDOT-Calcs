/*
 * IDM Chapter 44, Vertical Alignment (2013 IDM; no design-memo revisions
 * listed on chapter cover). Values transcribed from the chapter PDF.
 */
window.IDM = window.IDM || {};
IDM.vert = {
  source: { chapter: "44" },

  // Figure 44-3A: K for crest vertical curve, SSD, passenger car (h1 = 3.5 ft, h2 = 2 ft)
  // [V, SSD des ft, SSD min ft, K calc des, K calc min, K des (rounded), K min (rounded)]
  crestSSD: {
    figure: "44-3A",
    table: [
      [15, 115, 80, 6.1, 3.0, 7, 3],
      [20, 155, 115, 11.1, 6.1, 12, 7],
      [25, 200, 155, 18.5, 11.1, 19, 12],
      [30, 250, 200, 29.0, 18.5, 29, 19],
      [35, 305, 250, 43.1, 29.0, 44, 29],
      [40, 360, 305, 60.1, 43.1, 61, 44],
      [45, 425, 360, 83.7, 60.1, 84, 61],
      [50, 495, 425, 113.5, 83.7, 114, 84],
      [55, 570, 495, 150.6, 113.5, 151, 114],
      [60, 645, 570, 192.8, 150.6, 193, 151],
      [65, 730, 645, 246.9, 192.8, 247, 193],
      [70, 820, 730, 312.6, 246.9, 312, 247]
    ],
    notes: [
      "Stopping sight distance (SSD) is from Figure 42-1A.",
      "The K value is calculated using the rounded value for design stopping sight distance, eye height of 3.5 ft, and object height of 2 ft.",
      "If curbs are present, and K > 167, proper pavement drainage should be ensured near the high point of the curve."
    ]
  },

  // Figure 44-3C: K for sag vertical curve, SSD, headlight height 2 ft, 1 deg divergence
  // [V, SSD ft, K calculated, K design]
  sagSSD: {
    figure: "44-3C",
    table: [
      [20, 115, 16.5, 17], [25, 155, 25.5, 26], [30, 200, 36.4, 37], [35, 250, 49.0, 49],
      [40, 305, 63.4, 64], [45, 360, 78.1, 79], [50, 425, 95.7, 96], [55, 495, 114.9, 115],
      [60, 570, 135.7, 136], [65, 645, 156.5, 157], [70, 730, 180.3, 181]
    ],
    notes: [
      "Stopping sight distance (SSD) is from Figure 42-1A.",
      "The K value is calculated using the rounded value for design stopping sight distance S and a headlight height of 2 ft.",
      "If curbs are present and K > 167, proper drainage should be ensured near the low point of the curve."
    ]
  },

  // Figures 44-3B (crest) and 44-3D (sag): K using decision sight distance.
  // [V, DSD_A, K_A, DSD_B, K_B, DSD_C, K_C, DSD_D, K_D, DSD_E, K_E]
  crestDSD: {
    figure: "44-3B",
    table: [
      [20, 90, 11, 270, 54, 300, 62, 360, 77, 415, 92],
      [25, 110, 15, 335, 72, 375, 82, 450, 101, 515, 121],
      [30, 220, 23, 490, 112, 450, 94, 535, 133, 620, 178],
      [35, 275, 35, 590, 162, 525, 128, 625, 181, 720, 241],
      [40, 330, 51, 690, 221, 600, 167, 715, 237, 825, 315],
      [45, 395, 73, 800, 297, 675, 211, 800, 297, 930, 401],
      [50, 465, 100, 910, 384, 750, 261, 890, 367, 1030, 492],
      [55, 535, 133, 1030, 492, 865, 347, 980, 445, 1135, 597],
      [60, 610, 173, 1150, 613, 990, 454, 1125, 587, 1280, 759],
      [65, 695, 224, 1275, 754, 1050, 511, 1220, 690, 1365, 864]
    ],
    formula: "K = DSD^2 / 2158"
  },
  sagDSD: {
    figure: "44-3D",
    table: [
      [20, 90, 25, 270, 68, 300, 83, 360, 73, 415, 111],
      [25, 110, 39, 335, 100, 375, 101, 450, 101, 515, 139],
      [30, 220, 55, 490, 131, 450, 120, 535, 144, 620, 168],
      [35, 275, 70, 590, 160, 525, 141, 625, 170, 720, 197],
      [40, 330, 86, 690, 188, 600, 163, 715, 195, 825, 227],
      [45, 395, 104, 800, 220, 675, 184, 800, 220, 930, 257],
      [50, 465, 124, 910, 251, 750, 205, 890, 245, 1030, 285],
      [55, 535, 144, 1030, 285, 865, 238, 980, 271, 1135, 315],
      [60, 610, 166, 1150, 320, 990, 274, 1125, 312, 1280, 357],
      [65, 695, 190, 1275, 355, 1050, 291, 1220, 340, 1365, 381]
    ],
    formula: "As printed on Figure 44-3D: K = DSD^2 / (120 + 3.5 S)"
  },

  minLength: { section: ["44-3.01(01)", "44-3.02(01)"], crest: 3.0, sag: 3.2 }, // x V (mph), ft
  drainage: { section: ["44-3.01(03)", "44-3.02(03)"], curbedMaxK: 167, uncurbedMaxK: 300 },
  equations: {
    crestSL: "44-3.1 / 44-3.2", crestSG: "44-3.3", sagSL: "44-3.4", sagSG: "44-3.5"
  },
  // 44-3.03, Figure 44-3G worked example (symmetrical sag curve)
  example: { G1: -1.75, G2: 2.25, pviSta: 1380, pviElev: 577.50, L: 500, lowSta: 1348.75, lowElev: 580.33, figure: "44-3G" },
  pviSpacing: { section: "44-5.03(07)", desirableRural: 1500 }
};
