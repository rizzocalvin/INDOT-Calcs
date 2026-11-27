/*
 * IDM Chapter 305, Horizontal Alignment (Rev. Apr. 2025, Design Memo 25-09;
 * former Chapter 43 rewritten and renumbered). Values transcribed from the
 * chapter PDF (figures read from rendered page images).
 */
window.IDM = window.IDM || {};
IDM.horiz = {
  source: { chapter: "305" },

  // Equation 305-3.1: R = V^2 / (15 (e + f)), e and f as decimals
  curveEquation: "305-3.1",

  // Figure 305-4A, Selection of emax
  emaxSelection: {
    figure: "305-4A",
    rows: [
      { facility: "Rural", speed: "All speeds", emax: "6% (1)", value: 6 },
      { facility: "Rural frontage roads", speed: "All speeds", emax: "8%", value: 8 },
      { facility: "High-speed urban", speed: "V >= 50 mph", emax: "6% (1)", value: 6 },
      { facility: "Low-speed urban, except ramps", speed: "V <= 45 mph", emax: "Varies, Method 2 (2)", value: "M2" },
      { facility: "Turning roadway", speed: "V <= 45 mph", emax: "Varies, Method 2 (2)", value: "M2" },
      { facility: "System ramps", speed: "All speeds", emax: "6% (3)", value: 6 },
      { facility: "Service ramps", speed: "All speeds", emax: "6% or 8%", value: 6 },
      { facility: "Last curve of exit ramp to stop- or signal-controlled terminal at crossroad", speed: "V = 30 mph", emax: "4% or 6%", value: 4 },
      { facility: "Approach roadway to roundabout or diverging diamond interchange", speed: "V <= 30 mph", emax: "Varies, Method 2 (2)", value: "M2" }
    ],
    notes: {
      "1": "For reconstruction projects, emax = 8% may be retained unless the curve has an unacceptable history of superelevation-related crashes.",
      "2": "Superelevation rates as shown on Figure 305-4E.",
      "3": "Loop ramps may utilize emax = 8%."
    },
    chapter53Note: "Chapter 53 general note 4: the superelevation rate should not exceed emax = 8% due to the prevalence of snow and ice."
  },

  // Open-roadway (AASHTO Method 5) tables. R = minimum radius (ft) for each
  // design superelevation rate e (%). "NC" = normal crown, "RC" = remove adverse crown.
  // shaded: cells in the dark-shaded area ("for rural and high-speed facilities,
  // radii shown in the dark shaded area should be used only where unusual design
  // circumstances dictate").
  openRoadway: {
    "4": {
      figure: "305-4B",
      note: "Use of emax = 4% should be limited to urban conditions.",
      speeds: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
      fmax: [0.32, 0.27, 0.23, 0.20, 0.18, 0.16, 0.15, 0.14, 0.13, 0.12],
      rows: [
        ["NC", 796, 1410, 2050, 2830, 3730, 4770, 5930, 7220, 8650, 10300],
        ["RC", 506, 902, 1340, 1880, 2490, 3220, 4040, 4940, 5950, 7080],
        [2.2, 399, 723, 1110, 1580, 2120, 2760, 3480, 4280, 5180, 6190],
        [2.4, 271, 513, 838, 1270, 1760, 2340, 2980, 3690, 4500, 5410],
        [2.6, 201, 388, 650, 1000, 1420, 1930, 2490, 3130, 3870, 4700],
        [2.8, 157, 308, 524, 817, 1170, 1620, 2100, 2660, 3310, 4060],
        [3.0, 127, 251, 433, 681, 982, 1370, 1800, 2290, 2860, 3530],
        [3.2, 105, 209, 363, 576, 835, 1180, 1550, 1980, 2490, 3090],
        [3.4, 88, 175, 307, 490, 714, 1010, 1340, 1720, 2170, 2700],
        [3.6, 73, 147, 259, 416, 610, 865, 1150, 1480, 1880, 2350],
        [3.8, 61, 122, 215, 348, 512, 730, 970, 1260, 1600, 2010],
        [4.0, 42, 86, 154, 250, 371, 533, 711, 926, 1190, 1500]
      ],
      shaded: {}
    },
    "6": {
      figure: "305-4C",
      note: "For rural and high-speed facilities, radii shown in the dark shaded area should be used only where unusual design circumstances dictate.",
      speeds: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
      fmax: [0.32, 0.27, 0.23, 0.20, 0.18, 0.16, 0.15, 0.14, 0.13, 0.12, 0.11, 0.10],
      rows: [
        ["NC", 868, 1580, 2290, 3130, 4100, 5230, 6480, 7870, 9410, 11100, 12600, 14100],
        ["RC", 614, 1120, 1630, 2240, 2950, 3770, 4680, 5700, 6820, 8060, 9130, 10300],
        [2.2, 543, 991, 1450, 2000, 2630, 3370, 4190, 5100, 6110, 7230, 8200, 9240],
        [2.4, 482, 884, 1300, 1790, 2360, 3030, 3770, 4600, 5520, 6540, 7430, 8380],
        [2.6, 430, 791, 1170, 1610, 2130, 2740, 3420, 4170, 5020, 5950, 6770, 7660],
        [2.8, 384, 709, 1050, 1460, 1930, 2490, 3110, 3800, 4580, 5440, 6200, 7030],
        [3.0, 341, 635, 944, 1320, 1760, 2270, 2840, 3480, 4200, 4990, 5710, 6490],
        [3.2, 300, 566, 850, 1200, 1600, 2080, 2600, 3200, 3860, 4600, 5280, 6010],
        [3.4, 256, 498, 761, 1080, 1460, 1900, 2390, 2940, 3560, 4250, 4890, 5580],
        [3.6, 209, 422, 673, 972, 1320, 1740, 2190, 2710, 3290, 3940, 4540, 5210],
        [3.8, 176, 358, 583, 864, 1190, 1590, 2010, 2490, 3040, 3650, 4230, 4860],
        [4.0, 151, 309, 511, 766, 1070, 1440, 1840, 2300, 2810, 3390, 3950, 4550],
        [4.2, 131, 270, 452, 684, 960, 1310, 1680, 2110, 2590, 3140, 3680, 4270],
        [4.4, 116, 238, 402, 615, 868, 1190, 1540, 1940, 2400, 2920, 3440, 4010],
        [4.6, 102, 212, 360, 555, 788, 1090, 1410, 1780, 2210, 2710, 3220, 3770],
        [4.8, 91, 189, 324, 502, 718, 995, 1300, 1640, 2050, 2510, 3000, 3550],
        [5.0, 82, 169, 292, 456, 654, 911, 1190, 1510, 1890, 2330, 2800, 3330],
        [5.2, 73, 152, 264, 413, 595, 833, 1090, 1390, 1750, 2160, 2610, 3120],
        [5.4, 65, 136, 237, 373, 540, 759, 995, 1280, 1610, 1990, 2420, 2910],
        [5.6, 58, 121, 212, 335, 487, 687, 903, 1160, 1470, 1830, 2230, 2700],
        [5.8, 51, 106, 186, 296, 431, 611, 806, 1040, 1320, 1650, 2020, 2460],
        [6.0, 39, 81, 144, 231, 340, 485, 643, 833, 1060, 1330, 1660, 2040]
      ],
      // shaded[speed] = lowest e (%) of the shaded range for that speed
      shaded: { 50: 6.0, 55: 6.0, 60: 6.0, 65: 6.0, 70: 5.8 }
    },
    "8": {
      figure: "305-4D",
      note: "For rural and high-speed facilities, radii shown in the dark shaded area should be used only where unusual design circumstances dictate.",
      speeds: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
      fmax: [0.32, 0.27, 0.23, 0.20, 0.18, 0.16, 0.15, 0.14, 0.13, 0.12, 0.11, 0.10],
      rows: [
        ["NC", 932, 1640, 2370, 3240, 4260, 5410, 6710, 8150, 9720, 11500, 12900, 14500],
        ["RC", 676, 1190, 1720, 2370, 3120, 3970, 4930, 5990, 7150, 8440, 9510, 10700],
        [2.2, 605, 1070, 1550, 2130, 2800, 3570, 4440, 5400, 6450, 7620, 8600, 9660],
        [2.4, 546, 959, 1400, 1930, 2540, 3240, 4030, 4910, 5870, 6930, 7830, 8810],
        [2.6, 496, 872, 1280, 1760, 2320, 2960, 3690, 4490, 5370, 6350, 7180, 8090],
        [2.8, 453, 796, 1170, 1610, 2130, 2720, 3390, 4130, 4950, 5850, 6630, 7470],
        [3.0, 415, 730, 1070, 1480, 1960, 2510, 3130, 3820, 4580, 5420, 6140, 6930],
        [3.2, 382, 672, 985, 1370, 1820, 2330, 2900, 3550, 4250, 5040, 5720, 6460],
        [3.4, 352, 620, 911, 1270, 1690, 2170, 2700, 3300, 3970, 4700, 5350, 6050],
        [3.6, 324, 572, 845, 1180, 1570, 2020, 2520, 3090, 3710, 4400, 5010, 5680],
        [3.8, 300, 530, 784, 1100, 1470, 1890, 2360, 2890, 3480, 4140, 4710, 5350],
        [4.0, 277, 490, 729, 1030, 1370, 1770, 2220, 2720, 3270, 3890, 4450, 5050],
        [4.2, 255, 453, 678, 955, 1280, 1660, 2080, 2560, 3080, 3670, 4200, 4780],
        [4.4, 235, 418, 630, 893, 1200, 1560, 1960, 2410, 2910, 3470, 3980, 4540],
        [4.6, 215, 384, 585, 834, 1130, 1470, 1850, 2280, 2750, 3290, 3770, 4310],
        [4.8, 193, 349, 542, 779, 1060, 1390, 1750, 2160, 2610, 3120, 3590, 4100],
        [5.0, 172, 314, 499, 727, 991, 1310, 1650, 2040, 2470, 2960, 3410, 3910],
        [5.2, 154, 284, 457, 676, 929, 1230, 1560, 1930, 2350, 2820, 3250, 3740],
        [5.4, 139, 258, 420, 627, 870, 1160, 1480, 1830, 2230, 2680, 3110, 3570],
        [5.6, 126, 236, 387, 582, 813, 1090, 1390, 1740, 2120, 2550, 2970, 3420],
        [5.8, 115, 216, 358, 542, 761, 1030, 1320, 1650, 2010, 2430, 2840, 3280],
        [6.0, 105, 199, 332, 506, 713, 965, 1250, 1560, 1920, 2320, 2710, 3150],
        [6.2, 97, 184, 308, 472, 669, 909, 1180, 1480, 1820, 2210, 2600, 3020],
        [6.4, 89, 170, 287, 442, 628, 857, 1110, 1400, 1730, 2110, 2490, 2910],
        [6.6, 82, 157, 267, 413, 590, 808, 1050, 1330, 1650, 2010, 2380, 2790],
        [6.8, 76, 146, 248, 386, 553, 761, 990, 1260, 1560, 1910, 2280, 2690],
        [7.0, 70, 135, 231, 360, 518, 716, 933, 1190, 1480, 1820, 2180, 2580],
        [7.2, 64, 125, 214, 336, 485, 672, 878, 1120, 1400, 1720, 2070, 2470],
        [7.4, 59, 115, 198, 312, 451, 628, 822, 1060, 1320, 1630, 1970, 2350],
        [7.6, 54, 105, 182, 287, 417, 583, 765, 980, 1230, 1530, 1850, 2230],
        [7.8, 48, 94, 164, 261, 380, 533, 701, 901, 1140, 1410, 1720, 2090],
        [8.0, 38, 76, 134, 214, 314, 444, 587, 758, 960, 1200, 1480, 1810]
      ],
      shaded: { 50: 8.0, 55: 7.8, 60: 7.8, 65: 7.4, 70: 7.0 }
    }
  },

  // Figure 305-4E, low-speed urban conditions (AASHTO Method 2)
  lowSpeedUrban: {
    figure: "305-4E",
    speeds: [15, 20, 25, 30, 35, 40, 45],
    fmax: [0.32, 0.27, 0.23, 0.20, 0.18, 0.16, 0.15],
    rows: [
      ["NC", 50, 107, 198, 333, 510, 762, 1039],
      [-1.5, 49, 105, 194, 324, 495, 736, 1000],
      [0, 47, 99, 181, 300, 454, 667, 900],
      [1.5, 45, 94, 170, 279, 419, 610, 818],
      ["RC", 44, 92, 167, 273, 408, 593, 794],
      [2.2, 44, 91, 165, 270, 404, 586, 785],
      [2.4, 44, 91, 164, 268, 400, 580, 776],
      [2.6, 43, 90, 163, 265, 396, 573, 767],
      [2.8, 43, 89, 161, 263, 393, 567, 758],
      [3.0, 43, 89, 160, 261, 389, 561, 750],
      [3.2, 43, 88, 159, 259, 385, 556, 742],
      [3.4, 42, 88, 158, 256, 382, 550, 734],
      [3.6, 42, 87, 157, 254, 378, 544, 726],
      [3.8, 42, 87, 155, 252, 375, 539, 718],
      [4.0, 42, 86, 154, 250, 371, 533, 711],
      [4.2, 41, 85, 153, 248, 368, 528, 703],
      [4.4, 41, 85, 152, 246, 365, 523, 696],
      [4.6, 41, 84, 151, 244, 361, 518, 689],
      [4.8, 41, 84, 150, 242, 358, 513, 682],
      [5.0, 41, 83, 149, 240, 355, 508, 675],
      [5.2, 40, 83, 148, 238, 352, 503, 668],
      [5.4, 40, 82, 147, 236, 349, 498, 662],
      [5.6, 40, 82, 146, 234, 346, 494, 655],
      [5.8, 40, 81, 145, 233, 343, 489, 649],
      [6.0, 39, 81, 144, 231, 340, 485, 643]
    ],
    notes: [
      "Computed using Superelevation Distribution Method 2.",
      "Typical applications should limit superelevation to 4%.",
      "RC (+2.0) is preferred when e = +1.5% or 0%.",
      "NC (-2.0) is preferred when e = -1.5%."
    ],
    emaxNote: "305-4.02(02): emax should be 4%. If terrain dictates sharp curvature, 6% is justified if the curve is long enough to provide an adequate superelevation transition."
  },

  // Figure 305-4F
  relativeGradient: {
    figure: "305-4F",
    // design speed -> maximum relative gradient G (%), outside edge of traveled way
    G: { 15: 0.78, 20: 0.74, 25: 0.70, 30: 0.66, 35: 0.62, 40: 0.58, 45: 0.54, 50: 0.50 },
    gNote: "G = 0.50% for V >= 50 mph",
    bw: {
      lanes: [1, 1.5, 2, 2.5, 3, 3.5],
      stateSystem: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
      offSystemOrRestricted: [1.0, 0.83, 0.75, 0.70, 0.67, 0.64]
    },
    bwNote: "Where physical constraints (e.g., bridge, ramp terminals) do not allow the full transition length, adjustment factors should be used instead of modifying runoff distribution percentages."
  },

  // Figure 305-4G, Superelevation Runoff Length for One 12-ft Lane Rotated (ft),
  // transcribed exactly as printed (including apparent typographical errors,
  // which the calculators flag by comparing against Equation 305-4.1).
  runoffTable: {
    figure: "305-4G",
    speeds: [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
    rows: [
      [1.5, 25, 25, 25, 30, 30, 35, 35, 40, 40, 40, 40, 40],
      [2.0, 30, 30, 35, 40, 40, 45, 45, 50, 50, 50, 50, 50],
      [2.2, 35, 35, 40, 40, 45, 50, 50, 55, 55, 55, 55, 55],
      [2.4, 40, 40, 40, 45, 50, 50, 55, 60, 60, 60, 60, 60],
      [2.6, 40, 40, 45, 50, 55, 55, 60, 65, 65, 65, 65, 65],
      [2.8, 45, 45, 50, 50, 55, 60, 65, 70, 70, 70, 70, 70],
      [3.0, 45, 45, 50, 55, 60, 65, 70, 75, 75, 75, 75, 75],
      [3.2, 50, 50, 45, 60, 65, 70, 75, 80, 80, 80, 80, 80],
      [3.4, 55, 55, 60, 65, 70, 75, 80, 85, 85, 85, 85, 85],
      [3.6, 55, 55, 60, 65, 70, 80, 85, 90, 90, 90, 90, 90],
      [3.8, 60, 60, 65, 70, 75, 80, 90, 95, 95, 95, 95, 95],
      [4.0, 60, 60, 70, 75, 80, 85, 90, 100, 100, 100, 100, 100],
      [4.2, 65, 65, 70, 80, 85, 90, 95, 105, 105, 105, 105, 105],
      [4.4, 70, 70, 75, 80, 90, 95, 100, 110, 110, 110, 110, 110],
      [4.6, 70, 70, 80, 85, 90, 100, 105, 110, 110, 110, 110, 110],
      [4.8, 75, 75, 80, 90, 95, 105, 110, 115, 115, 115, 115, 115],
      [5.0, 75, 75, 85, 90, 100, 105, 115, 120, 120, 120, 120, 120],
      [5.2, 80, 80, 90, 95, 105, 110, 120, 125, 125, 125, 125, 125],
      [5.4, 85, 85, 90, 100, 105, 115, 125, 130, 130, 130, 130, 130],
      [5.6, 85, 85, 95, 105, 110, 120, 130, 135, 135, 135, 135, 135],
      [5.8, 90, 90, 100, 105, 115, 125, 135, 140, 140, 140, 140, 140],
      [6.0, 90, 90, 100, 110, 120, 160, 135, 145, 145, 145, 145, 145],
      [6.2, 95, 95, 105, 115, 125, 130, 140, 150, 150, 150, 150, 150],
      [6.4, 100, 100, 110, 115, 125, 135, 145, 155, 155, 155, 155, 155],
      [6.6, 100, 100, 110, 120, 130, 140, 150, 160, 160, 160, 160, 160],
      [6.8, 105, 105, 115, 125, 135, 145, 155, 165, 165, 165, 165, 165],
      [7.0, 105, 105, 120, 130, 140, 150, 160, 170, 170, 170, 170, 170],
      [7.2, 110, 110, 120, 130, 140, 155, 165, 175, 175, 175, 175, 175],
      [7.4, 115, 115, 125, 135, 145, 160, 170, 180, 180, 180, 180, 180],
      [7.6, 115, 115, 125, 170, 150, 160, 175, 185, 185, 185, 185, 185],
      [7.8, 120, 120, 130, 140, 155, 165, 180, 190, 190, 190, 190, 190],
      [8.0, 120, 120, 135, 145, 160, 170, 180, 195, 195, 195, 195, 195]
    ],
    notes: [
      "Calculated values rounded up to the nearest 5 ft for design.",
      "Values are for one 12-ft lane rotated. For consistency and practicality, 12 ft should be used when the lane width is less than 12 ft. For wider lanes, the runoff length should be adjusted by the ratio of the actual lane width to 12 ft. For divided highways, the use of longer values should be considered."
    ]
  },

  // 305-3.02 Length of Curve (ft) as a multiple of V (mph)
  curveLength: {
    section: "305-3.02",
    highSpeedLimitedAccess: { desirable: 30, minimum: 15 },
    otherHighSpeed: { minimum: 15 },
    lowSpeed: { practical: 15, note: "At roundabouts and urban facilities where Method 2 superelevation distribution is applied, a length of curve less than 15V is expected." }
  },
  compound: {
    section: "305-3.04(02)",
    ratio: { highSpeed: "1.25:1, not to exceed 1.5:1", lowSpeed: "1.75:1, not to exceed 2:1", turning: "Not to exceed 2:1 (intersections and turning roadways, V <= 40 mph)" },
    arcLength: { highSpeedMainline: "15V", other: "500 ft" }
  },
  reverse: { section: "305-3.04(04)", minTangentRotatingPlane: 300, normalCrownTravelTime: 2 },
  brokenBack: { section: "305-3.04(03)", freeway: 1500, other: "15V" },
  speedHigh: 50, // high speed V >= 50 mph; low speed V <= 45 mph (305-1.0)

  // 305-4.04(03) runoff distribution
  runoffDistribution: { tangent: 2 / 3, curve: 1 / 3, minTangent: 0.5, profileVC: 60 },

  // 305-4.06 shoulder superelevation
  shoulder: {
    section: "305-4.06",
    maxRollover: 8,
    highSide: [
      { maxE: 4, slope: "4% (normal shoulder cross slope)" },
      { maxE: 6, slope: "2% down, away from the traveled way" },
      { maxE: 99, slope: "1% toward the traveled way" }
    ]
  },

  // 305-5.0 horizontal sight distance (HSO)
  hso: {
    section: "305-5.03", equation: "305-5.1", figure: "305-5A",
    example: { V: 60, R: 1500, L: 900, S: 570, HSO: 27, figure: "305-5B" }
  }
};
