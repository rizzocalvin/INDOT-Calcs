/*
 * IDM Chapter 55 - Geometric Design of Existing Non-Freeway (3R): Figures 55-3A to 55-3H.
 * Transcribed from the INDOT 2013 Indiana Design Manual PDF (references/idm). See IDM.geom3R.conventions.
 */
window.IDM = window.IDM || {};
IDM.geom3R = {
 "source": {
  "chapter": "55",
  "title": "Geometric Design of Existing Non-Freeway (3R)",
  "edition": "2013 Indiana Design Manual",
  "revision": "Design Memos 13-09 (Apr 2013), 13-11 (May 2013), 14-10 (Jul 2014), 23-06 (Jun 2023)",
  "file": "references/idm/Chapter_55_-_Geometric_Design_of_Existing_Non-Freeway_3R.pdf",
  "note": "Figures 55-3A through 55-3H (Section 55-3.0, Rev. Jul 2014 per Design Memo 14-10). Cell layout and spans were read from the rendered PDF pages; the characters of each cell were checked against the PDF's own text layer re-ordered into display order. Nothing was filled from AASHTO or memory. Chapter 55 has no other figure tabulating lane, shoulder or bridge widths; Section 55-6.02 (text) sets existing-bridge vertical clearance (14.0 ft minimum, 14.5 ft desirable for modifications) and points to the 55-3 figures for width and structural capacity."
 },
 "conventions": [
  "Each figure has two column sets: table 'main' (page 1 and, for urban figures, the Bridges block on page 2; columns are design-year AADT ranges or urban area types) and table 'alignment' (page 2 Alignment Elements; columns are design speeds). Each column and row carries its table name; a row's values use the keys of its table's columns.",
  "conditions.adtMin is inclusive and conditions.adtMax exclusive, as printed (e.g. '400 <= AADT < 1000'). lanes: 2 or 'multi'. designSpeed: [min, max] mph.",
  "element: row label with the printed hierarchy joined by ': ' (labelParts keeps the printed parts). The leading '*' (Level One controlling criterion) and footnote markers are removed from element and carried in controlling / notes. Cell text in values is as printed, including footnote markers.",
  "Cells printed on two lines are joined with '; ' (or a space where a sentence wraps). Spanning cells are repeated in each covered column. Unicode <= / >= are written as '<=' / '>='. Runs of spaces are collapsed.",
  "numeric (width rows only): ft. { des, min }; a single printed value gives des = min = value with single: true; desText holds a non-numeric desirable value; left holds a left-shoulder value printed in the same cell (the main des/min are the right/outside shoulder); curbed / uncurbed hold values printed separately for curbed and uncurbed sections.",
  "Rows sharing a key are distinguished by terrain (maxGrade) or variant (bridgeClearRoadwayWidth, verticalClearance, medianWidth). For urban figures, the side-slope keys (foreslope, ditchWidth, backslope, fillSlope) are on the 'Side Slopes, Uncurbed' rows.",
  "footnotes: numbered notes as printed on pages 3-4 of each figure (sub-items a., b., c. appended in order); '*' is the controlling-criterion note printed under the alignment table. legend: abbreviation lines printed under the tables. transcriptionNotes: apparent typos / inconsistencies in the IDM itself, recorded but not corrected."
 ],
 "figures": [
  {
   "id": "55-3A",
   "title": "Geometric Design Criteria for Rural Arterial, 3R Project",
   "printedTitle": "GEOMETRIC DESIGN CRITERIA FOR RURAL ARTERIAL, 3R PROJECT",
   "revision": "Rev. Jul 2014",
   "pdfPages": [
    52,
    53,
    54,
    55
   ],
   "facility": "Rural Arterial",
   "area": "rural",
   "columns": [
    {
     "key": "c1",
     "label": "2-Lane, Design-Year AADT: < 400",
     "conditions": {
      "lanes": 2,
      "adtMax": 400
     },
     "table": "main"
    },
    {
     "key": "c2",
     "label": "2-Lane, Design-Year AADT: 400 <= AADT < 3000",
     "conditions": {
      "lanes": 2,
      "adtMin": 400,
      "adtMax": 3000
     },
     "table": "main"
    },
    {
     "key": "c3",
     "label": "2-Lane, Design-Year AADT: 3000 <= AADT < 5000",
     "conditions": {
      "lanes": 2,
      "adtMin": 3000,
      "adtMax": 5000
     },
     "table": "main"
    },
    {
     "key": "c4",
     "label": "2-Lane, Design-Year AADT: >= 5000",
     "conditions": {
      "lanes": 2,
      "adtMin": 5000
     },
     "table": "main"
    },
    {
     "key": "c5",
     "label": "Multi-Lane: Undivided",
     "conditions": {
      "lanes": "multi",
      "divided": false
     },
     "table": "main"
    },
    {
     "key": "c6",
     "label": "Multi-Lane: Divided",
     "conditions": {
      "lanes": "multi",
      "divided": true
     },
     "table": "main"
    },
    {
     "key": "s50",
     "label": "Alignment Elements: Design Speed 50 mph",
     "conditions": {
      "designSpeed": [
       50,
       50
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s55",
     "label": "Alignment Elements: Design Speed 55 mph",
     "conditions": {
      "designSpeed": [
       55,
       55
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s60",
     "label": "Alignment Elements: Design Speed 60 mph",
     "conditions": {
      "designSpeed": [
       60,
       60
      ]
     },
     "table": "alignment"
    }
   ],
   "rows": [
    {
     "group": "Design Controls",
     "element": "Design-Year AADT",
     "labelParts": [
      "Design-Year AADT"
     ],
     "section": "40-2.01",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "< 400",
      "c2": "400 <= AADT < 3000",
      "c3": "3000 <= AADT < 5000",
      "c4": ">= 5000",
      "c5": "Undivided",
      "c6": "Divided"
     }
    },
    {
     "group": "Design Controls",
     "element": "Design Forecast Period",
     "labelParts": [
      "Design Forecast Period"
     ],
     "section": "55-4.01",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "20 Years (1)",
      "c2": "20 Years (1)",
      "c3": "20 Years (1)",
      "c4": "20 Years (1)",
      "c5": "20 Years (1)",
      "c6": "20 Years (1)"
     },
     "notes": [
      "1"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Design Speed, mph",
     "labelParts": [
      "*Design Speed, mph (2)"
     ],
     "section": "55-4.01",
     "table": "main",
     "controlling": true,
     "key": "designSpeed",
     "values": {
      "c1": "Posted Speed Limit",
      "c2": "Posted Speed Limit",
      "c3": "Posted Speed Limit",
      "c4": "Posted Speed Limit",
      "c5": "Posted Speed Limit",
      "c6": "Posted Speed Limit"
     },
     "notes": [
      "2"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Access Control",
     "labelParts": [
      "Access Control"
     ],
     "section": "40-5.0",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "Partial Control / None",
      "c2": "Partial Control / None",
      "c3": "Partial Control / None",
      "c4": "Partial Control / None",
      "c5": "Partial Control / None",
      "c6": "Partial Control / None"
     }
    },
    {
     "group": "Design Controls",
     "element": "Level of Service",
     "labelParts": [
      "Level of Service"
     ],
     "section": "40-2.0",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "Desirable: B; Minimum: D",
      "c2": "Desirable: B; Minimum: D",
      "c3": "Desirable: B; Minimum: D",
      "c4": "Desirable: B; Minimum: D",
      "c5": "Desirable: B; Minimum: D",
      "c6": "Desirable: B; Minimum: D"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Width",
     "labelParts": [
      "Travel Lane",
      "*Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "laneWidth",
     "values": {
      "c1": "12 ft",
      "c2": "12 ft",
      "c3": "12 ft",
      "c4": "12 ft",
      "c5": "12 ft.",
      "c6": "12 ft."
     },
     "numeric": {
      "c1": {
       "des": 12,
       "min": 12,
       "single": true
      },
      "c2": {
       "des": 12,
       "min": 12,
       "single": true
      },
      "c3": {
       "des": 12,
       "min": 12,
       "single": true
      },
      "c4": {
       "des": 12,
       "min": 12,
       "single": true
      },
      "c5": {
       "des": 12,
       "min": 12,
       "single": true
      },
      "c6": {
       "des": 12,
       "min": 12,
       "single": true
      }
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Typical Surface Type",
     "labelParts": [
      "Travel Lane",
      "Typical Surface Type (3)"
     ],
     "section": "Ch. 602",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "Asphalt / Concrete",
      "c2": "Asphalt / Concrete",
      "c3": "Asphalt / Concrete",
      "c4": "Asphalt / Concrete",
      "c5": "Asphalt / Concrete",
      "c6": "Asphalt / Concrete"
     },
     "notes": [
      "3"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Width Usable",
     "labelParts": [
      "Shoulder (4)",
      "*Width Usable"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "shoulderRightUsable",
     "values": {
      "c1": "D: 6 ft; M: 2 ft",
      "c2": "D: 8 ft; M: 3 ft",
      "c3": "D: 8 ft; M: 6 ft",
      "c4": "D: 11 ft; M: 8 ft",
      "c5": "Desirable: 11 ft; Minimum: 8 ft",
      "c6": "Rt: D: 11 ft; M: 9 ft; Lt: D: 4 ft; M: 4 ft"
     },
     "numeric": {
      "c1": {
       "des": 6,
       "min": 2
      },
      "c2": {
       "des": 8,
       "min": 3
      },
      "c3": {
       "des": 8,
       "min": 6
      },
      "c4": {
       "des": 11,
       "min": 8
      },
      "c5": {
       "des": 11,
       "min": 8
      },
      "c6": {
       "des": 11,
       "min": 9,
       "left": {
        "des": 4,
        "min": 4
       }
      }
     },
     "notes": [
      "4"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Width Paved",
     "labelParts": [
      "Shoulder (4)",
      "*Width Paved"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "shoulderRightPaved",
     "values": {
      "c1": "D: 4 ft; M: 0 ft",
      "c2": "D: 6 ft; M: 2 ft",
      "c3": "D: 6 ft; M: 2 ft",
      "c4": "D: 10 ft; M: 2 ft",
      "c5": "Desirable: 10 ft; Minimum: 8 ft",
      "c6": "Rt: D: 10 ft; M: 8 ft; Lt: D: 4 ft; M: 3 ft"
     },
     "numeric": {
      "c1": {
       "des": 4,
       "min": 0
      },
      "c2": {
       "des": 6,
       "min": 2
      },
      "c3": {
       "des": 6,
       "min": 2
      },
      "c4": {
       "des": 10,
       "min": 2
      },
      "c5": {
       "des": 10,
       "min": 8
      },
      "c6": {
       "des": 10,
       "min": 8,
       "left": {
        "des": 4,
        "min": 3
       }
      }
     },
     "notes": [
      "4"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Typical Surface Type",
     "labelParts": [
      "Shoulder (4)",
      "Typical Surface Type (3)"
     ],
     "section": "Ch. 602",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "Asphalt / Concrete / Sealed Aggregate",
      "c2": "Asphalt / Concrete / Sealed Aggregate",
      "c3": "Asphalt / Concrete / Sealed Aggregate",
      "c4": "Asphalt / Concrete / Sealed Aggregate",
      "c5": "Asphalt / Concrete / Sealed Aggregate",
      "c6": "Asphalt / Concrete / Sealed Aggregate"
     },
     "notes": [
      "4",
      "3"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slopes: Travel Lane",
     "labelParts": [
      "Cross Slopes",
      "*Travel Lane (5)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "travelLaneCrossSlope",
     "values": {
      "c1": "2%",
      "c2": "2%",
      "c3": "2%",
      "c4": "2%",
      "c5": "2%",
      "c6": "2%"
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slopes: Shoulder",
     "labelParts": [
      "Cross Slopes",
      "Shoulder (6)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "shoulderCrossSlope",
     "values": {
      "c1": "Paved Width <= 4 ft 2%; Paved Width > 4 ft 4% Asphalt / Concrete; 6% Sealed Aggregate",
      "c2": "Paved Width <= 4 ft 2%; Paved Width > 4 ft 4% Asphalt / Concrete; 6% Sealed Aggregate",
      "c3": "Paved Width <= 4 ft 2%; Paved Width > 4 ft 4% Asphalt / Concrete; 6% Sealed Aggregate",
      "c4": "Paved Width <= 4 ft 2%; Paved Width > 4 ft 4% Asphalt / Concrete; 6% Sealed Aggregate",
      "c5": "Paved Width <= 4 ft 2%; Paved Width > 4 ft 4% Asphalt / Concrete; 6% Sealed Aggregate",
      "c6": "Paved Width <= 4 ft 2%; Paved Width > 4 ft 4% Asphalt / Concrete; 6% Sealed Aggregate"
     },
     "notes": [
      "6"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Lane Width",
     "labelParts": [
      "Auxiliary Lane",
      "Lane Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "auxLaneWidth",
     "values": {
      "c1": "Desirable: 12 ft; Minimum: 11 ft",
      "c2": "Desirable: 12 ft; Minimum: 11 ft",
      "c3": "Desirable: 12 ft; Minimum: 11 ft",
      "c4": "Desirable: 12 ft; Minimum: 11 ft",
      "c5": "Desirable: 12 ft; Minimum: 11 ft",
      "c6": "Desirable: 12 ft; Minimum: 11 ft"
     },
     "numeric": {
      "c1": {
       "des": 12,
       "min": 11
      },
      "c2": {
       "des": 12,
       "min": 11
      },
      "c3": {
       "des": 12,
       "min": 11
      },
      "c4": {
       "des": 12,
       "min": 11
      },
      "c5": {
       "des": 12,
       "min": 11
      },
      "c6": {
       "des": 12,
       "min": 11
      }
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Shoulder Width",
     "labelParts": [
      "Auxiliary Lane",
      "Shoulder Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "Des: Same as Next to Travel Lane; Min: 2 ft",
      "c2": "Des: Same as Next to Travel Lane; Min: 2 ft",
      "c3": "Des: Same as Next to Travel Lane; Min: 2 ft",
      "c4": "Des: Same as Next to Travel Lane; Min: 2 ft",
      "c5": "Des: Same as Next to Travel Lane; Min: 2 ft",
      "c6": "Des: Same as Next to Travel Lane; Min: 2 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Median Width",
     "labelParts": [
      "Median Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "medianWidth",
     "values": {
      "c1": "N/A",
      "c2": "N/A",
      "c3": "N/A",
      "c4": "N/A",
      "c5": "0.0 ft.",
      "c6": "Existing"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Obstruction-Free-Zone Width",
     "labelParts": [
      "Obstruction-Free-Zone Width"
     ],
     "section": "55-5.02",
     "table": "main",
     "controlling": false,
     "key": "clearZone",
     "values": {
      "c1": "See Section 55-5.02",
      "c2": "See Section 55-5.02",
      "c3": "See Section 55-5.02",
      "c4": "See Section 55-5.02",
      "c5": "See Section 55-5.02",
      "c6": "See Section 55-5.02"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Foreslope",
     "labelParts": [
      "Side Slopes",
      "Cut",
      "Foreslope"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "foreslope",
     "values": {
      "c1": "2:1 or Flatter (7)",
      "c2": "2:1 or Flatter (7)",
      "c3": "2:1 or Flatter (7)",
      "c4": "2:1 or Flatter (7)",
      "c5": "2:1 or Flatter (7)",
      "c6": "2:1 or Flatter (7)"
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Ditch Width",
     "labelParts": [
      "Side Slopes",
      "Cut",
      "Ditch Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "ditchWidth",
     "values": {
      "c1": "(7)",
      "c2": "(7)",
      "c3": "(7)",
      "c4": "(7)",
      "c5": "(7)",
      "c6": "(7)"
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Backslope",
     "labelParts": [
      "Side Slopes",
      "Cut",
      "Backslope"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "backslope",
     "values": {
      "c1": "2:1 or Flatter (7)",
      "c2": "2:1 or Flatter (7)",
      "c3": "2:1 or Flatter (7)",
      "c4": "2:1 or Flatter (7)",
      "c5": "2:1 or Flatter (7)",
      "c6": "2:1 or Flatter (7)"
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Fill",
     "labelParts": [
      "Side Slopes",
      "Fill"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "fillSlope",
     "values": {
      "c1": "2:1 or Flatter (7)",
      "c2": "2:1 or Flatter (7)",
      "c3": "2:1 or Flatter (7)",
      "c4": "2:1 or Flatter (7)",
      "c5": "2:1 or Flatter (7)",
      "c6": "2:1 or Flatter (7)"
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Median Slopes",
     "labelParts": [
      "Median Slopes"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "N/A",
      "c2": "N/A",
      "c3": "N/A",
      "c4": "N/A",
      "c5": "Desirable: 8:1; Maximum: 4:1",
      "c6": "Desirable: 8:1; Maximum: 4:1"
     }
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Structural Capacity",
     "labelParts": [
      "New or Reconstructed Bridge",
      "*Structural Capacity"
     ],
     "section": "Ch. 403",
     "table": "main",
     "controlling": true,
     "values": {
      "c1": "HL-93 (8)",
      "c2": "HL-93 (8)",
      "c3": "HL-93 (8)",
      "c4": "HL-93 (8)",
      "c5": "HL-93 (8)",
      "c6": "HL-93 (8)"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Clear-Roadway Width",
     "labelParts": [
      "New or Reconstructed Bridge",
      "Clear-Roadway Width (9)"
     ],
     "section": "55-6.03",
     "table": "main",
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "newOrReconstructed",
     "values": {
      "c1": "Full Paved Approach Width",
      "c2": "Full Paved Approach Width",
      "c3": "Full Paved Approach Width",
      "c4": "Full Paved Approach Width",
      "c5": "Full Paved Approach Width",
      "c6": "Full Paved Approach Width"
     },
     "notes": [
      "9"
     ]
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Structural Capacity",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "*Structural Capacity"
     ],
     "section": "Ch. 412",
     "table": "main",
     "controlling": true,
     "values": {
      "c1": "HS-20",
      "c2": "HS-20",
      "c3": "HS-20",
      "c4": "HS-20",
      "c5": "HS-20",
      "c6": "HS-20"
     }
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Clear-Roadway Width",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "Clear-Roadway Width"
     ],
     "section": "55-6.02",
     "table": "main",
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "existingToRemain",
     "values": {
      "c1": "Travelway Plus 2 ft on Each Side",
      "c2": "Travelway Plus 2 ft on Each Side",
      "c3": "Travelway Plus 2 ft on Each Side",
      "c4": "Travelway Plus 2 ft on Each Side",
      "c5": "Travelway Plus 2 ft on Each Side",
      "c6": "Travelway Plus 2 ft on Each Side"
     }
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Under: New or Replaced Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Arterial Under (10)",
      "New or Replaced Overpassing Bridge"
     ],
     "section": "55-6.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "newOrReplacedOverpass",
     "values": {
      "c1": "16.5 ft",
      "c2": "16.5 ft",
      "c3": "16.5 ft",
      "c4": "16.5 ft",
      "c5": "16.5 ft",
      "c6": "16.5 ft"
     },
     "notes": [
      "10"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Under: Existing Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Arterial Under (10)",
      "Existing Overpassing Bridge (11)"
     ],
     "section": "55-6.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "existingOverpass",
     "values": {
      "c1": "14.0 ft",
      "c2": "14.0 ft",
      "c3": "14.0 ft",
      "c4": "14.0 ft",
      "c5": "14.0 ft",
      "c6": "14.0 ft"
     },
     "notes": [
      "10",
      "11"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Under: Sign Truss / Pedestrian Bridges",
     "labelParts": [
      "*Vertical Clearance, Arterial Under (10)",
      "Sign Truss / Pedestrian Bridges"
     ],
     "section": "55-6.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "signTrussPedestrian",
     "values": {
      "c1": "New: 17.5 ft; Existing: 17.0 ft",
      "c2": "New: 17.5 ft; Existing: 17.0 ft",
      "c3": "New: 17.5 ft; Existing: 17.0 ft",
      "c4": "New: 17.5 ft; Existing: 17.0 ft",
      "c5": "New: 17.5 ft; Existing: 17.0 ft",
      "c6": "New: 17.5 ft; Existing: 17.0 ft"
     },
     "notes": [
      "10"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Over Railroad",
     "labelParts": [
      "Vertical Clearance, Arterial Over Railroad (12)"
     ],
     "section": "402-6.01",
     "table": "main",
     "controlling": false,
     "key": "verticalClearance",
     "variant": "overRailroad",
     "values": {
      "c1": "23.0 ft",
      "c2": "23.0 ft",
      "c3": "23.0 ft",
      "c4": "23.0 ft",
      "c5": "23.0 ft",
      "c6": "23.0 ft"
     },
     "notes": [
      "12"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Design Speed",
     "labelParts": [
      "Design Speed"
     ],
     "section": "---",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s50": "50 mph",
      "s55": "55 mph",
      "s60": "60 mph"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Stopping Sight Distance, Desirable",
     "labelParts": [
      "*Stopping Sight Distance, Desirable"
     ],
     "section": "55-4.02",
     "table": "alignment",
     "controlling": true,
     "key": "ssd",
     "values": {
      "s50": "425 ft",
      "s55": "495 ft",
      "s60": "570 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance: Speed / Path / Direction Change",
     "labelParts": [
      "Decision Sight Distance",
      "Speed / Path / Direction Change"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s50": "750 ft",
      "s55": "865 ft",
      "s60": "990 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance: Stop Maneuver",
     "labelParts": [
      "Decision Sight Distance",
      "Stop Maneuver"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s50": "465 ft",
      "s55": "535 ft",
      "s60": "610 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Passing Sight Distance",
     "labelParts": [
      "Passing Sight Distance"
     ],
     "section": "42-3.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s50": "Existing",
      "s55": "Existing",
      "s60": "Existing"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Intersection Sight Distance, -3% to +3%",
     "labelParts": [
      "Intersection Sight Distance, -3% to +3% (14)"
     ],
     "section": "55-4.06",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s50": "P: 630 ft; SUT: 780 ft",
      "s55": "P: 730 ft; SUT: 890 ft",
      "s60": "P: 840 ft; SU: 1020 ft"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Radius",
     "labelParts": [
      "*Minimum Radius"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "key": "minRadius",
     "values": {
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03",
      "s60": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Superelevation Rate",
     "labelParts": [
      "*Superelevation Rate"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "key": "emax",
     "values": {
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03",
      "s60": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Horizontal Sight Distance",
     "labelParts": [
      "*Horizontal Sight Distance"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "values": {
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03",
      "s60": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Crest",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Crest"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "crestK",
     "values": {
      "s50": "See Section 55-4.04",
      "s55": "See Section 55-4.04",
      "s60": "See Section 55-4.04"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Sag",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Sag"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "sagK",
     "values": {
      "s50": "See Section 55-4.04",
      "s55": "See Section 55-4.04",
      "s60": "See Section 55-4.04"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Level",
     "labelParts": [
      "*Maximum Grade (13)",
      "Level"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "maxGrade",
     "terrain": "level",
     "values": {
      "s50": "5%",
      "s55": "4.5%",
      "s60": "4%"
     },
     "notes": [
      "13"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Rolling",
     "labelParts": [
      "*Maximum Grade (13)",
      "Rolling"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "maxGrade",
     "terrain": "rolling",
     "values": {
      "s50": "6%",
      "s55": "5.5%",
      "s60": "5%"
     },
     "notes": [
      "13"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Grade",
     "labelParts": [
      "Minimum Grade"
     ],
     "section": "44-1.03",
     "table": "alignment",
     "controlling": false,
     "key": "minGrade",
     "values": {
      "s50": "Desirable: 0.5%; Minimum 0.0%",
      "s55": "Desirable: 0.5%; Minimum 0.0%",
      "s60": "Desirable: 0.5%; Minimum 0.0%"
     }
    }
   ],
   "legend": [
    "D or Des: Desirable; M or Min: Minimum",
    "* Level One controlling criterion, see page 2 of 4."
   ],
   "footnotes": {
    "1": "Design Forecast Period. For a partial 3R project, the pavement should be designed for at least a 10 year design life.",
    "2": "Design Speed. The minimum design speed should equal the anticipated posted speed limit after construction or the legal speed limit, 60 mph, on a non-posted multilane divided highway, or 55 mph on a non-posted two-lane highway.",
    "3": "Surface Type. The pavement-type selection will be determined by the Pavement Engineering Division or by the local jurisdiction.",
    "4": "Shoulder. The following will apply: a. On an INDOT facility, the shoulder should be paved to the front face of guardrail. The desirable guardrail offset is 2 ft from the usable shoulder width. In a restrictive situation, the guardrail offset may be 0 ft from the usable shoulder width. See Section 49-4.0 for more information. b. If guardrail is present, the minimum offset from E.T.L. to the front face of guardrail should desirably be equal to the shy-line distance, but should not be less than 4 ft. See Section 49-4.0 for shy-line offsets. c. Usable shoulder width is defined as the distance from the edge of the travel lane to the shoulder break point.",
    "5": "Cross Slope, Travel Lane. Cross slopes of 1.5% are acceptable on an existing bridge to remain in place.",
    "6": "Cross Slope, Shoulder. Value is for a tangent section. See Figure 45-1A(1) or Figure 45-1A(2) for more-specific information. See Figure 305-4N for shoulder cross slope on a horizontal curve.",
    "7": "Side Slopes. Section 55-4.05 provides additional information for side-slope criteria.",
    "8": "Structural Capacity, New or Reconstructed Bridge. The following will apply: a. Each State-highway bridge within 15 mi of a Toll-Road gate must be designed for Toll-Road loading. b. Each bridge on an Extra-Heavy-Duty Highway must be designed for the Michigan Train truck loading configuration.",
    "9": "Width, New or Reconstructed Bridge. See Section 402-6.02(01) for more information. On a State highway, the minimum clear-roadway width should be 30 ft. Otherwise, the bridge clear-roadway width is the algebraic sum of the following: a. the approach traveled-way width; b. the approach usable shoulder width without guardrail; and c. a bridge-railing offset (see Figure 402-6H).",
    "10": "Vertical Clearance, Arterial Under. Value includes an additional 6 in. allowance for a future pavement overlay. Vertical clearance applies from usable edge to usable edge of shoulders.",
    "11": "Vertical Clearance, Existing Bridge. See Section 55-6.02 for additional information on minimum allowable vertical clearance.",
    "12": "Vertical Clearance, Arterial Over Railroad. See Section 402-6.01(03) for additional information on railroad clearance under a highway.",
    "13": "Maximum Grade. A downgrade that is 1% steeper may be used for a one-way roadway.",
    "14": "Intersection Sight Distance. For left turn onto a 2-lane road. P = Passenger car; SUT = single unit truck. See Figure 46-10G for value for a combination truck.",
    "*": "Level One controlling criterion. Except as noted in this chapter, the values shown in AASHTO's A Policy on Geometric Design of Highways and Streets (the Green Book) may be used as minimum values if they are lower than similar values shown herein. A controlling criterion that does not meet the minimum value is a design exception and is subject to approval. A streamlined design exception may be used for 3R projects. See Section 40-8.0 for low speed and high speed applications."
   },
   "transcriptionNotes": [
    "Revision label 'Rev. Jul 2014' comes from the List of Figures / revision table; it is not printed on the figure pages.",
    "Intersection sight distance at 60 mph is printed 'SU: 1020 ft' (other cells use 'SUT').",
    "Minimum Grade printed 'Minimum 0.0%' without a colon.",
    "Alignment table has columns only for 50, 55 and 60 mph design speeds."
   ]
  },
  {
   "id": "55-3B",
   "title": "Geometric Design Criteria for Rural Collector, State Route, 3R Project",
   "printedTitle": "GEOMETRIC DESIGN CRITERIA FOR RURAL COLLECTOR, STATE ROUTE, 3R PROJECT",
   "revision": "Rev. Jul 2014",
   "pdfPages": [
    56,
    57,
    58,
    59
   ],
   "facility": "Rural Collector, State Route",
   "area": "rural",
   "columns": [
    {
     "key": "c1",
     "label": "2-Lane, Design-Year AADT: < 400",
     "conditions": {
      "lanes": 2,
      "adtMax": 400
     },
     "table": "main"
    },
    {
     "key": "c2",
     "label": "2-Lane, Design-Year AADT: 400 <= AADT < 1000",
     "conditions": {
      "lanes": 2,
      "adtMin": 400,
      "adtMax": 1000
     },
     "table": "main"
    },
    {
     "key": "c3",
     "label": "2-Lane, Design-Year AADT: 1000 <= AADT < 3000",
     "conditions": {
      "lanes": 2,
      "adtMin": 1000,
      "adtMax": 3000
     },
     "table": "main"
    },
    {
     "key": "c4",
     "label": "2-Lane, Design-Year AADT: 3000 <= AADT < 5000",
     "conditions": {
      "lanes": 2,
      "adtMin": 3000,
      "adtMax": 5000
     },
     "table": "main"
    },
    {
     "key": "c5",
     "label": "2-Lane, Design-Year AADT: >= 5000",
     "conditions": {
      "lanes": 2,
      "adtMin": 5000
     },
     "table": "main"
    },
    {
     "key": "s35",
     "label": "2-Lane: Design Speed 35 mph",
     "conditions": {
      "designSpeed": [
       35,
       35
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s45",
     "label": "2-Lane: Design Speed 45 mph",
     "conditions": {
      "designSpeed": [
       45,
       45
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s50",
     "label": "2-Lane: Design Speed 50 mph",
     "conditions": {
      "designSpeed": [
       50,
       50
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s55",
     "label": "2-Lane: Design Speed 55 mph",
     "conditions": {
      "designSpeed": [
       55,
       55
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s60",
     "label": "2-Lane: Design Speed 60 mph",
     "conditions": {
      "designSpeed": [
       60,
       60
      ]
     },
     "table": "alignment"
    }
   ],
   "rows": [
    {
     "group": "Design Controls",
     "element": "Design-Year AADT",
     "labelParts": [
      "Design-Year AADT"
     ],
     "section": "40-2.01",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "< 400",
      "c2": "400 <= AADT < 1000",
      "c3": "1000 <= AADT < 3000",
      "c4": "3000 <= AADT < 5000",
      "c5": ">= 5000"
     }
    },
    {
     "group": "Design Controls",
     "element": "Design Forecast Period",
     "labelParts": [
      "Design Forecast Period"
     ],
     "section": "55-4.01",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "20 Years (1)",
      "c2": "20 Years (1)",
      "c3": "20 Years (1)",
      "c4": "20 Years (1)",
      "c5": "20 Years (1)"
     },
     "notes": [
      "1"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Design Speed (mph)",
     "labelParts": [
      "*Design Speed (mph) (2)"
     ],
     "section": "55-4.01",
     "table": "main",
     "controlling": true,
     "key": "designSpeed",
     "values": {
      "c1": "Posted Speed Limit",
      "c2": "Posted Speed Limit",
      "c3": "Posted Speed Limit",
      "c4": "Posted Speed Limit",
      "c5": "Posted Speed Limit"
     },
     "notes": [
      "2"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Access Control",
     "labelParts": [
      "Access Control"
     ],
     "section": "40-5.0",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "None",
      "c2": "None",
      "c3": "None",
      "c4": "None",
      "c5": "None"
     }
    },
    {
     "group": "Design Controls",
     "element": "Level of Service",
     "labelParts": [
      "Level of Service"
     ],
     "section": "40-2.0",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "Desirable: B; Minimum: D",
      "c2": "Desirable: B; Minimum: D",
      "c3": "Desirable: B; Minimum: D",
      "c4": "Desirable: B; Minimum: D",
      "c5": "Desirable: B; Minimum: D"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Width",
     "labelParts": [
      "Travel Lane",
      "*Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "laneWidth",
     "values": {
      "c1": "Des: 12 ft; Min: 10 ft",
      "c2": "Des: 12 ft; Min: 11 ft",
      "c3": "Des: 12 ft; Min: 11 ft",
      "c4": "12 ft (3)",
      "c5": "12 ft. (3)"
     },
     "numeric": {
      "c1": {
       "des": 12,
       "min": 10
      },
      "c2": {
       "des": 12,
       "min": 11
      },
      "c3": {
       "des": 12,
       "min": 11
      },
      "c4": {
       "des": 12,
       "min": 12,
       "single": true
      },
      "c5": {
       "des": 12,
       "min": 12,
       "single": true
      }
     },
     "notes": [
      "3"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Typical Surface Type",
     "labelParts": [
      "Travel Lane",
      "Typical Surface Type (4)"
     ],
     "section": "Ch. 602",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "Asphalt / Concrete",
      "c2": "Asphalt / Concrete",
      "c3": "Asphalt / Concrete",
      "c4": "Asphalt / Concrete",
      "c5": "Asphalt / Concrete"
     },
     "notes": [
      "4"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Width Usable",
     "labelParts": [
      "Shoulder (5)",
      "*Width Usable"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "shoulderRightUsable",
     "values": {
      "c1": "Des: 4 ft; Min: 2 ft",
      "c2": "Des: 6 ft; Min: 2 ft",
      "c3": "Des: 8 ft; Min: 3 ft",
      "c4": "Des: 8 ft; Min: 6 ft",
      "c5": "Des: 10 ft; Min: 6 ft"
     },
     "numeric": {
      "c1": {
       "des": 4,
       "min": 2
      },
      "c2": {
       "des": 6,
       "min": 2
      },
      "c3": {
       "des": 8,
       "min": 3
      },
      "c4": {
       "des": 8,
       "min": 6
      },
      "c5": {
       "des": 10,
       "min": 6
      }
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Width Paved",
     "labelParts": [
      "Shoulder (5)",
      "*Width Paved"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "shoulderRightPaved",
     "values": {
      "c1": "Des: 2 ft; Min: 0 ft",
      "c2": "Des: 4 ft; Min: 0 ft",
      "c3": "Des: 4 ft; Min: 2 ft",
      "c4": "Des: 6 ft; Min: 2 ft",
      "c5": "Des: 8 ft; Min: 2 ft"
     },
     "numeric": {
      "c1": {
       "des": 2,
       "min": 0
      },
      "c2": {
       "des": 4,
       "min": 0
      },
      "c3": {
       "des": 4,
       "min": 2
      },
      "c4": {
       "des": 6,
       "min": 2
      },
      "c5": {
       "des": 8,
       "min": 2
      }
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Typical Surface Type",
     "labelParts": [
      "Shoulder (5)",
      "Typical Surface Type (4)"
     ],
     "section": "Ch. 602",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "Asphalt / Concrete / Sealed Aggregate",
      "c2": "Asphalt / Concrete / Sealed Aggregate",
      "c3": "Asphalt / Concrete / Sealed Aggregate",
      "c4": "Asphalt / Concrete / Sealed Aggregate",
      "c5": "Asphalt / Concrete / Sealed Aggregate"
     },
     "notes": [
      "5",
      "4"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Travel Lane",
     "labelParts": [
      "Cross Slope",
      "*Travel Lane (6)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "travelLaneCrossSlope",
     "values": {
      "c1": "2% Typical; 3% Maximum",
      "c2": "2% Typical; 3% Maximum",
      "c3": "2% Typical; 3% Maximum",
      "c4": "2% Typical; 3% Maximum",
      "c5": "2% Typical; 3% Maximum"
     },
     "notes": [
      "6"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Shoulder",
     "labelParts": [
      "Cross Slope",
      "Shoulder (7)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "shoulderCrossSlope",
     "values": {
      "c1": "Paved Width <= 4 ft: 2% - 3%; Paved Width > 4 ft: 4%-6% Asphalt / Concrete; 6% Sealed Aggregate",
      "c2": "Paved Width <= 4 ft: 2% - 3%; Paved Width > 4 ft: 4%-6% Asphalt / Concrete; 6% Sealed Aggregate",
      "c3": "Paved Width <= 4 ft: 2% - 3%; Paved Width > 4 ft: 4%-6% Asphalt / Concrete; 6% Sealed Aggregate",
      "c4": "Paved Width <= 4 ft: 2% - 3%; Paved Width > 4 ft: 4%-6% Asphalt / Concrete; 6% Sealed Aggregate",
      "c5": "Paved Width <= 4 ft: 2% - 3%; Paved Width > 4 ft: 4%-6% Asphalt / Concrete; 6% Sealed Aggregate"
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Lane Width",
     "labelParts": [
      "Auxiliary Lane",
      "Lane Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "auxLaneWidth",
     "values": {
      "c1": "Des: Same as Travel Lane; Min: 10 ft",
      "c2": "Des: Same as Travel Lane; Min: 10 ft",
      "c3": "Des: Same as Travel Lane; Min: 11 ft",
      "c4": "Des: Same as Travel Lane; Min: 11 ft",
      "c5": "Des: Same as Travel Lane; Min: 11 ft"
     },
     "numeric": {
      "c1": {
       "min": 10,
       "desText": "Same as Travel Lane"
      },
      "c2": {
       "min": 10,
       "desText": "Same as Travel Lane"
      },
      "c3": {
       "min": 11,
       "desText": "Same as Travel Lane"
      },
      "c4": {
       "min": 11,
       "desText": "Same as Travel Lane"
      },
      "c5": {
       "min": 11,
       "desText": "Same as Travel Lane"
      }
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Shoulder Width",
     "labelParts": [
      "Auxiliary Lane",
      "Shoulder Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "Des: Same as That Next to Travel Lane; Min: 2 ft",
      "c2": "Des: Same as That Next to Travel Lane; Min: 2 ft",
      "c3": "Des: Same as That Next to Travel Lane; Min: 2 ft",
      "c4": "Des: Same as That Next to Travel Lane; Min: 2 ft",
      "c5": "Des: Same as That Next to Travel Lane; Min: 2 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Obstruction-Free-Zone Width",
     "labelParts": [
      "Obstruction-Free-Zone Width"
     ],
     "section": "55-5.02",
     "table": "main",
     "controlling": false,
     "key": "clearZone",
     "values": {
      "c1": "See Section 55-5.02",
      "c2": "See Section 55-5.02",
      "c3": "See Section 55-5.02",
      "c4": "See Section 55-5.02",
      "c5": "See Section 55-5.02"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Foreslope",
     "labelParts": [
      "Side Slopes",
      "Cut",
      "Foreslope"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "foreslope",
     "values": {
      "c1": "2:1 or Flatter (8)",
      "c2": "2:1 or Flatter (8)",
      "c3": "2:1 or Flatter (8)",
      "c4": "2:1 or Flatter (8)",
      "c5": "2:1 or Flatter (8)"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Ditch Width",
     "labelParts": [
      "Side Slopes",
      "Cut",
      "Ditch Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "ditchWidth",
     "values": {
      "c1": "(8)",
      "c2": "(8)",
      "c3": "(8)",
      "c4": "(8)",
      "c5": "(8)"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Backslope",
     "labelParts": [
      "Side Slopes",
      "Cut",
      "Backslope"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "backslope",
     "values": {
      "c1": "2:1 or Flatter (8)",
      "c2": "2:1 or Flatter (8)",
      "c3": "2:1 or Flatter (8)",
      "c4": "2:1 or Flatter (8)",
      "c5": "2:1 or Flatter (8)"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Fill",
     "labelParts": [
      "Side Slopes",
      "Fill"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "fillSlope",
     "values": {
      "c1": "2:1 or Flatter (8)",
      "c2": "2:1 or Flatter (8)",
      "c3": "2:1 or Flatter (8)",
      "c4": "2:1 or Flatter (8)",
      "c5": "2:1 or Flatter (8)"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Structural Capacity",
     "labelParts": [
      "New or Reconstructed Bridge",
      "*Structural Capacity (9)"
     ],
     "section": "Ch. 403",
     "table": "main",
     "controlling": true,
     "values": {
      "c1": "HL-93",
      "c2": "HL-93",
      "c3": "HL-93",
      "c4": "HL-93",
      "c5": "HL-93"
     },
     "notes": [
      "9"
     ]
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Clear-Roadway Width",
     "labelParts": [
      "New or Reconstructed Bridge",
      "Clear-Roadway Width (10)"
     ],
     "section": "55-6.03",
     "table": "main",
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "newOrReconstructed",
     "values": {
      "c1": "Full Paved Approach Width",
      "c2": "Full Paved Approach Width",
      "c3": "Full Paved Approach Width",
      "c4": "Full Paved Approach Width",
      "c5": "Full Paved Approach Width"
     },
     "notes": [
      "10"
     ]
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Structural Capacity",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "*Structural Capacity"
     ],
     "section": "Ch. 412",
     "table": "main",
     "controlling": true,
     "values": {
      "c1": "HS-15",
      "c2": "HS-15",
      "c3": "HS-15",
      "c4": "HS-15",
      "c5": "HS-15"
     }
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Clear-Roadway Width",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "Clear-Roadway Width (11)"
     ],
     "section": "55-6.02",
     "table": "main",
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "existingToRemain",
     "values": {
      "c1": "22 ft",
      "c2": "22 ft",
      "c3": "24 ft",
      "c4": "28 ft",
      "c5": "28 ft"
     },
     "notes": [
      "11"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector Under: New or Replaced Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Collector Under",
      "New or Replaced Overpassing Bridge (12)"
     ],
     "section": "55-6.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "newOrReplacedOverpass",
     "values": {
      "c1": "14.5 ft",
      "c2": "14.5 ft",
      "c3": "14.5 ft",
      "c4": "14.5 ft",
      "c5": "14.5 ft"
     },
     "notes": [
      "12"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector Under: Existing Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Collector Under",
      "Existing Overpassing Bridge (13)"
     ],
     "section": "55-6.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "existingOverpass",
     "values": {
      "c1": "14.0 ft",
      "c2": "14.0 ft",
      "c3": "14.0 ft",
      "c4": "14.0 ft",
      "c5": "14.0 ft"
     },
     "notes": [
      "13"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector Over Railroad",
     "labelParts": [
      "Vertical Clearance, Collector Over Railroad (14)"
     ],
     "section": "Ch. 402-6.01",
     "table": "main",
     "controlling": false,
     "key": "verticalClearance",
     "variant": "overRailroad",
     "values": {
      "c1": "23.0 ft",
      "c2": "23.0 ft",
      "c3": "23.0 ft",
      "c4": "23.0 ft",
      "c5": "23.0 ft"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Design Speed",
     "labelParts": [
      "Design Speed"
     ],
     "section": "---",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s35": "35 mph",
      "s45": "45 mph",
      "s50": "50 mph",
      "s55": "55 mph",
      "s60": "60 mph"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Stopping Sight Distance, Desirable",
     "labelParts": [
      "*Stopping Sight Distance, Desirable"
     ],
     "section": "55-4.02",
     "table": "alignment",
     "controlling": true,
     "key": "ssd",
     "values": {
      "s35": "250 ft",
      "s45": "360 ft",
      "s50": "425 ft",
      "s55": "495 ft",
      "s60": "570 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance: Speed / Path / Direction Change",
     "labelParts": [
      "Decision Sight Distance",
      "Speed / Path / Direction Change"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s35": "525 ft",
      "s45": "675 ft",
      "s50": "750ft",
      "s55": "865 ft",
      "s60": "990 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance: Stop Maneuver",
     "labelParts": [
      "Decision Sight Distance",
      "Stop Maneuver"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s35": "275 ft",
      "s45": "395 ft",
      "s50": "465 ft",
      "s55": "535 ft",
      "s60": "610 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Passing Sight Distance",
     "labelParts": [
      "Passing Sight Distance"
     ],
     "section": "42-3.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s35": "Existing",
      "s45": "Existing",
      "s50": "Existing",
      "s55": "Existing",
      "s60": "Existing"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Intersection Sight Distance, -3% to +3%",
     "labelParts": [
      "Intersection Sight Distance, -3% to +3% (16)"
     ],
     "section": "55-4.06",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s35": "P: 390 ft; SUT:490 ft",
      "s45": "P: 500 ft; SUT: 630 ft",
      "s50": "P: 630 ft; SUT:780 ft",
      "s55": "P: 730 ft; SUT: 890 ft",
      "s60": "P: 840 ft; SU: 1020 ft"
     },
     "notes": [
      "16"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Radius",
     "labelParts": [
      "*Minimum Radius"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "key": "minRadius",
     "values": {
      "s35": "See Section 55-4.03",
      "s45": "See Section 55-4.03",
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03",
      "s60": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Superelevation Rate",
     "labelParts": [
      "*Superelevation Rate"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "key": "emax",
     "values": {
      "s35": "See Section 55-4.03",
      "s45": "See Section 55-4.03",
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03",
      "s60": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Horizontal Sight Distance",
     "labelParts": [
      "*Horizontal Sight Distance"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "values": {
      "s35": "See Section 55-4.03",
      "s45": "See Section 55-4.03",
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03",
      "s60": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Crest",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Crest"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "crestK",
     "values": {
      "s35": "See Section 55-4.04",
      "s45": "See Section 55-4.04",
      "s50": "See Section 55-4.04",
      "s55": "See Section 55-4.04",
      "s60": "See Section 55-4.04"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Sag",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Sag"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "sagK",
     "values": {
      "s35": "See Section 55-4.04",
      "s45": "See Section 55-4.04",
      "s50": "See Section 55-4.04",
      "s55": "See Section 55-4.04",
      "s60": "See Section 55-4.04"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Level",
     "labelParts": [
      "*Maximum Grade (15)",
      "Level"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "maxGrade",
     "terrain": "level",
     "values": {
      "s35": "9%",
      "s45": "8%",
      "s50": "8%",
      "s55": "7.5%",
      "s60": "7%"
     },
     "notes": [
      "15"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Rolling",
     "labelParts": [
      "*Maximum Grade (15)",
      "Rolling"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "maxGrade",
     "terrain": "rolling",
     "values": {
      "s35": "10%",
      "s45": "9%",
      "s50": "9%",
      "s55": "8.5%",
      "s60": "8%"
     },
     "notes": [
      "15"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Grade",
     "labelParts": [
      "Minimum Grade"
     ],
     "section": "44-1.03",
     "table": "alignment",
     "controlling": false,
     "key": "minGrade",
     "values": {
      "s35": "Desirable: 0.5%; Minimum: 0.0%",
      "s45": "Desirable: 0.5%; Minimum: 0.0%",
      "s50": "Desirable: 0.5%; Minimum: 0.0%",
      "s55": "Desirable: 0.5%; Minimum: 0.0%",
      "s60": "Desirable: 0.5%; Minimum: 0.0%"
     }
    }
   ],
   "legend": [
    "Des: Desirable; Min: Minimum.",
    "* Level One controlling criterion, see page 2 of 4."
   ],
   "footnotes": {
    "1": "Design Forecast Period. For a partial 3R project, the pavement should be designed for at least a 10 year design life.",
    "2": "Design Speed. The minimum design speed should equal the anticipated posted speed limit after construction or the legal speed limit, 55 mph, on a non-posted highway.",
    "3": "Travel Lane, Width. A minimum 11 ft travel lane may be used where truck volume is less than 200 trucks per day.",
    "4": "Surface Type. The pavement type selection will be determined by the Office of Pavement Engineering.",
    "5": "Shoulder. The following will apply: a. The shoulder should be paved to the front face of guardrail. The desirable guardrail offset is 2 ft from the usable shoulder width. In a restrictive situation, the guardrail offset may be 1 ft from the usable shoulder width. See Section 49-4.0 for more information. b. If guardrail is present, the minimum offset from E.T.L. to the front face of guardrail should desirably be equal to the shy-line distance, but not less than 4 ft. See Section 49-4.0 for shy-line offsets. c. Usable shoulder width is defined as the distance from the edge of the travel lane to the shoulder break point.",
    "6": "Cross Slope, Travel Lane. Cross slopes of 1.5% are acceptable on an existing bridge to remain in place.",
    "7": "Cross Slope, Shoulder. Value is for a tangent section. See Figure 45-1A(1) or Figure 45-1A(2) for more-specific information. See Figure 503-4N for shoulder cross slope on a horizontal curve.",
    "8": "Side Slopes. Section 55-4.05 provides additional information for side-slope criteria.",
    "9": "Structural Capacity, New or Reconstructed Bridge. The following will apply: a. Each State-highway bridge within 15 mi of a Toll-Road gate must be designed for Toll-Road Loading. b. Each bridge on an Extra-Heavy-Duty Highway must be designed for the Michigan Train truck loading configuration.",
    "10": "Width, New or Reconstructed Bridge. See Section 402-6.02(01) for more information. On a State highway, the minimum clear-roadway width should be 30 ft. Otherwise, the bridge clear-roadway width is the algebraic sum of the following: a. the approach traveled way width; b. the approach usable shoulder width without guardrail; and c. a bridge-railing offset (see Figure 402-6H).",
    "11": "Width, Existing Bridge to Remain in Place. Clear width will be at least equal to the approach traveled way width or the value, whichever is greater.",
    "12": "Vertical Clearance, Collector Under. Value includes an additional 6 in. allowance for a future pavement overlay. Vertical clearance applies from usable edge to usable edge of shoulders.",
    "13": "Vertical Clearance, Existing Bridge. See Section 55-6.02 for additional information on minimum allowable vertical clearance.",
    "14": "Vertical Clearance, Collector Over Railroad. See Chapter 402-6.01(03) for additional information on railroad clearance under a highway.",
    "15": "Maximum Grade. For a grade less than 500 ft in length (PVT to PVC), the maximum grade may be up to 2% steeper than the value. For a road with AADT < 400, the maximum grade may also be 2% steeper.",
    "16": "Intersection Sight Distance. For left turn onto a 2-lane road, P = Passenger car; SUT = single unit truck. See Figure 46-10G for value for combination truck.",
    "*": "Level One controlling criterion. Except as noted in this chapter, the values shown in AASHTO's A Policy on Geometric Design of Highways and Streets (the Green Book) may be used as minimum values if they are lower than similar values shown herein. A controlling criterion that does not meet the minimum value is a design exception and is subject to approval. A streamlined design exception may be used for 3R projects. See Section 40-8.0 for low speed and high speed applications."
   },
   "figureNotes": [
    "These criteria apply to each project regardless of funding source."
   ],
   "transcriptionNotes": [
    "Alignment table has no 40 mph column (35, 45, 50, 55, 60 mph).",
    "Intersection sight distance at 60 mph printed 'SU: 1020 ft' (other cells 'SUT').",
    "No Median Width row in this figure.",
    "Footnote (7) refers to 'Figure 503-4N' where other figures say 'Figure 305-4N'.",
    "Footnote (14) says 'See Chapter 402-6.01(03)' (a section, not a chapter)."
   ]
  },
  {
   "id": "55-3C",
   "title": "Geometric Design Criteria for Rural Collector, Local-Agency Route, 3R Project",
   "printedTitle": "GEOMETRIC DESIGN CRITERIA FOR RURAL COLLECTOR, LOCAL-AGENCY ROUTE, 3R PROJECT",
   "revision": "Rev. Jul 2014",
   "pdfPages": [
    60,
    61,
    62,
    63
   ],
   "facility": "Rural Collector, Local-Agency Route",
   "area": "rural",
   "columns": [
    {
     "key": "c1",
     "label": "2-Lane, Design-Year AADT: < 400",
     "conditions": {
      "lanes": 2,
      "adtMax": 400
     },
     "table": "main"
    },
    {
     "key": "c2",
     "label": "2-Lane, Design-Year AADT: 400 <= AADT < 1000",
     "conditions": {
      "lanes": 2,
      "adtMin": 400,
      "adtMax": 1000
     },
     "table": "main"
    },
    {
     "key": "c3",
     "label": "2-Lane, Design-Year AADT: 1000 <= AADT < 3000",
     "conditions": {
      "lanes": 2,
      "adtMin": 1000,
      "adtMax": 3000
     },
     "table": "main"
    },
    {
     "key": "c4",
     "label": "2-Lane, Design-Year AADT: 3000 <= AADT < 5000",
     "conditions": {
      "lanes": 2,
      "adtMin": 3000,
      "adtMax": 5000
     },
     "table": "main"
    },
    {
     "key": "c5",
     "label": "2-Lane, Design-Year AADT: >= 5000",
     "conditions": {
      "lanes": 2,
      "adtMin": 5000
     },
     "table": "main"
    },
    {
     "key": "s30",
     "label": "2-Lane: Design Speed 30 mph",
     "conditions": {
      "designSpeed": [
       30,
       30
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s35",
     "label": "2-Lane: Design Speed 35 mph",
     "conditions": {
      "designSpeed": [
       35,
       35
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s45",
     "label": "2-Lane: Design Speed 45 mph",
     "conditions": {
      "designSpeed": [
       45,
       45
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s50",
     "label": "2-Lane: Design Speed 50 mph",
     "conditions": {
      "designSpeed": [
       50,
       50
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s55",
     "label": "2-Lane: Design Speed 55 mph",
     "conditions": {
      "designSpeed": [
       55,
       55
      ]
     },
     "table": "alignment"
    }
   ],
   "rows": [
    {
     "group": "Design Controls",
     "element": "Design Year AADT",
     "labelParts": [
      "Design Year AADT"
     ],
     "section": "40-2.01",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "< 400",
      "c2": "400 <=AADT < 1000",
      "c3": "1000 <=AADT < 3000",
      "c4": "3000 <=AADT < 5000",
      "c5": ">= 5000"
     }
    },
    {
     "group": "Design Controls",
     "element": "Design Forecast Period",
     "labelParts": [
      "Design Forecast Period"
     ],
     "section": "55-4.01",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "20 Years (2)",
      "c2": "20 Years (2)",
      "c3": "20 Years (2)",
      "c4": "20 Years (2)",
      "c5": "20 Years (2)"
     },
     "notes": [
      "2"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Design Speed (mph)",
     "labelParts": [
      "*Design Speed (mph)"
     ],
     "section": "55-4.01",
     "table": "main",
     "controlling": true,
     "key": "designSpeed",
     "values": {
      "c1": "See Section 55-4.01 (3)",
      "c2": "See Section 55-4.01 (3)",
      "c3": "See Section 55-4.01 (3)",
      "c4": "See Section 55-4.01 (3)",
      "c5": "See Section 55-4.01 (3)"
     },
     "notes": [
      "3"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Access Control",
     "labelParts": [
      "Access Control"
     ],
     "section": "40-5.0",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "None",
      "c2": "None",
      "c3": "None",
      "c4": "None",
      "c5": "None"
     }
    },
    {
     "group": "Design Controls",
     "element": "Level of Service",
     "labelParts": [
      "Level of Service"
     ],
     "section": "40-2.0",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "Desirable: B; Minimum: D",
      "c2": "Desirable: B; Minimum: D",
      "c3": "Desirable: B; Minimum: D",
      "c4": "Desirable: B; Minimum: D",
      "c5": "Desirable: B; Minimum: D"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Width",
     "labelParts": [
      "Travel Lane",
      "*Width (4)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "laneWidth",
     "values": {
      "c1": "Des: 10ft; Min: 9 ft (4a)",
      "c2": "Des: 11 ft; Min: 10 ft (4b)",
      "c3": "Des: 11 ft; Min: 10 ft (4b)",
      "c4": "Des: 12 ft; Min: 11 ft",
      "c5": "Des: 12 ft; Min: 11 ft.(4c)"
     },
     "numeric": {
      "c1": {
       "des": 10,
       "min": 9
      },
      "c2": {
       "des": 11,
       "min": 10
      },
      "c3": {
       "des": 11,
       "min": 10
      },
      "c4": {
       "des": 12,
       "min": 11
      },
      "c5": {
       "des": 12,
       "min": 11
      }
     },
     "notes": [
      "4",
      "4a",
      "4b",
      "4c"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Typical Surface Type",
     "labelParts": [
      "Travel Lane",
      "Typical Surface Type"
     ],
     "section": "Ch. 602",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "Asphalt / Concrete",
      "c2": "Asphalt / Concrete",
      "c3": "Asphalt / Concrete",
      "c4": "Asphalt / Concrete",
      "c5": "Asphalt / Concrete"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Width Usable",
     "labelParts": [
      "Shoulder (5)",
      "*Width Usable"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "shoulderRightUsable",
     "values": {
      "c1": "Des: 4 ft; Min: 2 ft",
      "c2": "Des: 6 ft; Min: 2 ft",
      "c3": "Des: 6 ft; Min: 3 ft",
      "c4": "Des: 8 ft; Min: 6 ft",
      "c5": "Des: 10 ft; Min: 8 ft"
     },
     "numeric": {
      "c1": {
       "des": 4,
       "min": 2
      },
      "c2": {
       "des": 6,
       "min": 2
      },
      "c3": {
       "des": 6,
       "min": 3
      },
      "c4": {
       "des": 8,
       "min": 6
      },
      "c5": {
       "des": 10,
       "min": 8
      }
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Width Paved",
     "labelParts": [
      "Shoulder (5)",
      "*Width Paved"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "shoulderRightPaved",
     "values": {
      "c1": "Des: 2 ft; Min: 0 ft",
      "c2": "Des: 2 ft; Min: 0 ft",
      "c3": "Des: 4 ft; Min: 2 ft",
      "c4": "Des: 6 ft; Min: 2 ft",
      "c5": "Des: 8 ft; Min: 2 ft"
     },
     "numeric": {
      "c1": {
       "des": 2,
       "min": 0
      },
      "c2": {
       "des": 2,
       "min": 0
      },
      "c3": {
       "des": 4,
       "min": 2
      },
      "c4": {
       "des": 6,
       "min": 2
      },
      "c5": {
       "des": 8,
       "min": 2
      }
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Typical Surface Type",
     "labelParts": [
      "Shoulder (5)",
      "Typical Surface Type"
     ],
     "section": "Ch. 602",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "Asphalt / Aggregate / Earth",
      "c2": "Asphalt / Aggregate / Earth",
      "c3": "Asphalt / Aggregate / Earth",
      "c4": "Asphalt / Aggregate / Earth",
      "c5": "Asphalt / Aggregate / Earth"
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Travel Lane",
     "labelParts": [
      "Cross Slope",
      "*Travel Lane (6)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "travelLaneCrossSlope",
     "values": {
      "c1": "2%-3%",
      "c2": "2%-3%",
      "c3": "2%-3%",
      "c4": "2%-3%",
      "c5": "2%-3%"
     },
     "notes": [
      "6"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Shoulder",
     "labelParts": [
      "Cross Slope",
      "Shoulder (7)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "shoulderCrossSlope",
     "values": {
      "c1": "Paved Width <= 4 ft 2% - 3%; Paved Width > 4 ft: 4%-6% Asphalt; 6%-8% Aggregate; 8% Earth",
      "c2": "Paved Width <= 4 ft 2% - 3%; Paved Width > 4 ft: 4%-6% Asphalt; 6%-8% Aggregate; 8% Earth",
      "c3": "Paved Width <= 4 ft 2% - 3%; Paved Width > 4 ft: 4%-6% Asphalt; 6%-8% Aggregate; 8% Earth",
      "c4": "Paved Width <= 4 ft 2% - 3%; Paved Width > 4 ft: 4%-6% Asphalt; 6%-8% Aggregate; 8% Earth",
      "c5": "Paved Width <= 4 ft 2% - 3%; Paved Width > 4 ft: 4%-6% Asphalt; 6%-8% Aggregate; 8% Earth"
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Lane Width",
     "labelParts": [
      "Auxiliary Lane",
      "Lane Width"
     ],
     "section": "55-4.06",
     "table": "main",
     "controlling": false,
     "key": "auxLaneWidth",
     "values": {
      "c1": "Des: 10 ft; Min: 9 ft",
      "c2": "Des: 10 ft; Min: 9 ft",
      "c3": "Des: 11 ft; Min: 10 ft",
      "c4": "Des: 11 ft; Min: 10 ft",
      "c5": "Des: 12 ft; Min: 10 ft"
     },
     "numeric": {
      "c1": {
       "des": 10,
       "min": 9
      },
      "c2": {
       "des": 10,
       "min": 9
      },
      "c3": {
       "des": 11,
       "min": 10
      },
      "c4": {
       "des": 11,
       "min": 10
      },
      "c5": {
       "des": 12,
       "min": 10
      }
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Shoulder Width",
     "labelParts": [
      "Auxiliary Lane",
      "Shoulder Width"
     ],
     "section": "55-4.06",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "Des: Same as Next to Travel Lane; Min: 2 ft",
      "c2": "Des: Same as Next to Travel Lane; Min: 2 ft",
      "c3": "Des: Same as Next to Travel Lane; Min: 2 ft",
      "c4": "Des: Same as Next to Travel Lane; Min: 2 ft",
      "c5": "Des: Same as Next to Travel Lane; Min: 2 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Obstruction-Free-Zone Width",
     "labelParts": [
      "Obstruction-Free-Zone Width"
     ],
     "section": "55-5.02",
     "table": "main",
     "controlling": false,
     "key": "clearZone",
     "values": {
      "c1": "See Section 55-5.02",
      "c2": "See Section 55-5.02",
      "c3": "See Section 55-5.02",
      "c4": "See Section 55-5.02",
      "c5": "See Section 55-5.02"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Foreslope",
     "labelParts": [
      "Side Slopes",
      "Cut",
      "Foreslope"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "foreslope",
     "values": {
      "c1": "2:1 or Flatter (8)",
      "c2": "2:1 or Flatter (8)",
      "c3": "2:1 or Flatter (8)",
      "c4": "2:1 or Flatter (8)",
      "c5": "2:1 or Flatter (8)"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Ditch Width",
     "labelParts": [
      "Side Slopes",
      "Cut",
      "Ditch Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "ditchWidth",
     "values": {
      "c1": "(8)",
      "c2": "(8)",
      "c3": "(8)",
      "c4": "(8)",
      "c5": "(8)"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Backslope",
     "labelParts": [
      "Side Slopes",
      "Cut",
      "Backslope"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "backslope",
     "values": {
      "c1": "2:1 or Flatter (8)",
      "c2": "2:1 or Flatter (8)",
      "c3": "2:1 or Flatter (8)",
      "c4": "2:1 or Flatter (8)",
      "c5": "2:1 or Flatter (8)"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Fill",
     "labelParts": [
      "Side Slopes",
      "Fill"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "fillSlope",
     "values": {
      "c1": "2:1 or Flatter (8)",
      "c2": "2:1 or Flatter (8)",
      "c3": "2:1 or Flatter (8)",
      "c4": "2:1 or Flatter (8)",
      "c5": "2:1 or Flatter (8)"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Structural Capacity",
     "labelParts": [
      "New or Reconstructed Bridge",
      "*Structural Capacity"
     ],
     "section": "Ch. 403",
     "table": "main",
     "controlling": true,
     "values": {
      "c1": "HL-93",
      "c2": "HL-93",
      "c3": "HL-93",
      "c4": "HL-93",
      "c5": "HL-93"
     }
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Clear-Roadway Width",
     "labelParts": [
      "New or Reconstructed Bridge",
      "Clear-Roadway Width (9)"
     ],
     "section": "55-6.03",
     "table": "main",
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "newOrReconstructed",
     "values": {
      "c1": "Travelway +4 ft",
      "c2": "Travelway +6 ft",
      "c3": "Travelway +6 ft",
      "c4": "Travelway +8 ft",
      "c5": "Full Paved Appr. Width"
     },
     "notes": [
      "9"
     ]
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Structural Capacity",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "*Structural Capacity (10)"
     ],
     "section": "Ch. 412",
     "table": "main",
     "controlling": true,
     "values": {
      "c1": "HS-15",
      "c2": "HS-15",
      "c3": "HS-15",
      "c4": "HS-15",
      "c5": "HS-15"
     },
     "notes": [
      "10"
     ]
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Clear-Roadway Width",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "Clear-Roadway Width (11)"
     ],
     "section": "55-6.02",
     "table": "main",
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "existingToRemain",
     "values": {
      "c1": "22 ft",
      "c2": "22 ft",
      "c3": "24 ft",
      "c4": "28 ft",
      "c5": "28 ft"
     },
     "notes": [
      "11"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector Under: New or Replaced Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Collector Under",
      "New or Replaced Overpassing Bridge (12)"
     ],
     "section": "55-6.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "newOrReplacedOverpass",
     "values": {
      "c1": "14.5 ft",
      "c2": "14.5 ft",
      "c3": "14.5 ft",
      "c4": "14.5 ft",
      "c5": "14.5 ft"
     },
     "notes": [
      "12"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector Under: Existing Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Collector Under",
      "Existing Overpassing Bridge"
     ],
     "section": "55-6.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "existingOverpass",
     "values": {
      "c1": "14.0 ft",
      "c2": "14.0 ft",
      "c3": "14.0 ft",
      "c4": "14.0 ft",
      "c5": "14.0 ft"
     }
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector Over Railroad",
     "labelParts": [
      "Vertical Clearance, Collector Over Railroad (13)"
     ],
     "section": "Ch. 402-6.01",
     "table": "main",
     "controlling": false,
     "key": "verticalClearance",
     "variant": "overRailroad",
     "values": {
      "c1": "23.0 ft",
      "c2": "23.0 ft",
      "c3": "23.0 ft",
      "c4": "23.0 ft",
      "c5": "23.0 ft"
     },
     "notes": [
      "13"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Design Speed",
     "labelParts": [
      "Design Speed"
     ],
     "section": "---",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s30": "30 mph",
      "s35": "35 mph",
      "s45": "45 mph",
      "s50": "50 mph",
      "s55": "55 mph"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Stopping Sight Distance, Desirable",
     "labelParts": [
      "*Stopping Sight Distance, Desirable"
     ],
     "section": "55-4.02",
     "table": "alignment",
     "controlling": true,
     "key": "ssd",
     "values": {
      "s30": "200 ft",
      "s35": "250 ft",
      "s45": "360 ft",
      "s50": "425 ft",
      "s55": "495 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance: Speed / Path / Direction Change",
     "labelParts": [
      "Decision Sight Distance",
      "Speed / Path / Direction Change"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s30": "450 ft",
      "s35": "525 ft",
      "s45": "675 ft",
      "s50": "750 ft",
      "s55": "865 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance: Stop Maneuver",
     "labelParts": [
      "Decision Sight Distance",
      "Stop Maneuver"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s30": "220 ft",
      "s35": "275 ft",
      "s45": "395ft",
      "s50": "460ft",
      "s55": "535 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Passing Sight Distance",
     "labelParts": [
      "Passing Sight Distance"
     ],
     "section": "42-3.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s30": "Existing",
      "s35": "Existing",
      "s45": "Existing",
      "s50": "Existing",
      "s55": "Existing"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Intersection Sight Distance, -3% to +3%",
     "labelParts": [
      "Intersection Sight Distance, -3% to +3% (15)"
     ],
     "section": "55-4.06",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s30": "P: 330 ft; SUT: 420 ft",
      "s35": "P: 390 ft; SUT: 490 ft",
      "s45": "P: 500 ft; SUT: 630 ft",
      "s50": "P: 630 ft; SUT: 780 ft",
      "s55": "P: 730 ft; SUT:890 ft"
     },
     "notes": [
      "15"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Radius",
     "labelParts": [
      "*Minimum Radius"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "key": "minRadius",
     "values": {
      "s30": "See Section 55-4.03",
      "s35": "See Section 55-4.03",
      "s45": "See Section 55-4.03",
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Superelevation Rate",
     "labelParts": [
      "*Superelevation Rate"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "key": "emax",
     "values": {
      "s30": "See Section 55-4.03",
      "s35": "See Section 55-4.03",
      "s45": "See Section 55-4.03",
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Horizontal Sight Distance",
     "labelParts": [
      "*Horizontal Sight Distance"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "values": {
      "s30": "See Section 55-4.03",
      "s35": "See Section 55-4.03",
      "s45": "See Section 55-4.03",
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Crest",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Crest"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "crestK",
     "values": {
      "s30": "See Section 55-4.04",
      "s35": "See Section 55-4.04",
      "s45": "See Section 55-4.04",
      "s50": "See Section 55-4.04",
      "s55": "See Section 55-4.04"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Sag",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Sag"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "sagK",
     "values": {
      "s30": "See Section 55-4.04",
      "s35": "See Section 55-4.04",
      "s45": "See Section 55-4.04",
      "s50": "See Section 55-4.04",
      "s55": "See Section 55-4.04"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Level",
     "labelParts": [
      "*Maximum Grade (14)",
      "Level"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "maxGrade",
     "terrain": "level",
     "values": {
      "s30": "9%",
      "s35": "9%",
      "s45": "8%",
      "s50": "8%",
      "s55": "7%"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Rolling",
     "labelParts": [
      "*Maximum Grade (14)",
      "Rolling"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "maxGrade",
     "terrain": "rolling",
     "values": {
      "s30": "11%",
      "s35": "10%",
      "s45": "9%",
      "s50": "9%",
      "s55": "8%"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Grade",
     "labelParts": [
      "Minimum Grade"
     ],
     "section": "44-1.03",
     "table": "alignment",
     "controlling": false,
     "key": "minGrade",
     "values": {
      "s30": "Desirable: 0.5%; Minimum: 0.0%",
      "s35": "Desirable: 0.5%; Minimum: 0.0%",
      "s45": "Desirable: 0.5%; Minimum: 0.0%",
      "s50": "Desirable: 0.5%; Minimum: 0.0%",
      "s55": "Desirable: 0.5%; Minimum: 0.0%"
     }
    }
   ],
   "legend": [
    "Des: Desirable; Min: Minimum.",
    "* Level One controlling criterion, see page 2 of 4"
   ],
   "footnotes": {
    "1": "Applicability. This figure is applicable only to a federal-aid funded project.",
    "2": "Design Forecast Period. For a partial 3R project, the pavement should be designed for at least a 10 year design life.",
    "3": "Design Speed. The minimum design speed should equal the anticipated posted speed limit after construction or the legal speed limit, 55 mph, on a non-posted highway.",
    "4": "Travel Lane, Width. An 11 ft travel lane width should be used where truck volume exceeds 200 trucks per day. In addition, the following will apply: a. Where V >= 50 mph, the minimum width is 10 ft. b. Where V >= 50 mph, the minimum width is 11 ft. c. Where V >= 50 mph, the minimum width is 12 ft.",
    "5": "Shoulder Width. The following will apply: a. The desirable guardrail offset is 2 ft from the effective usable-shoulder width. See Section 49-4.0 for more information. b. If guardrail is present, the minimum offset from the E.T.L. to face of guardrail should desirably be equal to the shy-line offset distance, but not less than 4 ft (see Section 49-4.0 for shy-line offsets). c. Usable-shoulder width is defined as the distance from the edge of the travel lane to the shoulder break point.",
    "6": "Cross Slope, Travel Lane. Cross slopes of 1.5% are acceptable on an existing bridge to remain in place.",
    "7": "Cross Slope, Shoulder. Value is for a tangent section. See Figure 45-1A(1) or Figure 45-1A(2) for more-specific information. See Figure 305-4N for shoulder cross slope on a horizontal curve.",
    "8": "Side Slopes. Section 55-4.05 provides additional information for side-slope criteria.",
    "9": "Width, New or Reconstructed Bridge. See Section 402-6.02(01) for more information. The clear-roadway width is the algebraic sum of the following: a. the approach traveled way width; b. the approach usable shoulder width without guardrail; and c. a bridge-railing offset (see Figure 402-6H).",
    "10": "Structural Capacity, Existing Bridge to Remain in Place. If the AADT <= 50, an HS-10 loading is acceptable.",
    "11": "Width, Existing Bridge to Remain in Place. Clear-roadway width should be at least equal to the approach traveled way width or the value, whichever is greater. For a bridge of more than 100 ft in length, the value does not apply. The acceptability of such a bridge will be assessed individually.",
    "12": "Vertical Clearance, Collector Under. Value includes an additional 6 in. allowance for a future pavement overlay. Vertical clearance applies from usable edge to usable edge of shoulders.",
    "13": "Vertical Clearance, Collector Over Railroad. See Chapter 402-6.01(3) for additional information on railroad clearance under a highway.",
    "14": "Maximum Grade. For a grade of less than 500 ft in length (PVT to PVC), the maximum grade may be 2% steeper than the value. For a road with AADT < 400, the maximum grade may also be 2% steeper.",
    "15": "Intersection Sight Distance. For left turn onto a 2-lane road, P = Passenger car; SUT = single unit truck. See Figure 46-10G for value for a combination truck.",
    "*": "Level One controlling criterion. Except as noted in this chapter, the values shown in AASHTO's A Policy on Geometric Design of Highways and Streets (the Green Book) may be used as minimum values if they are lower than similar values shown herein. A controlling criterion that does not meet the minimum value is a design exception and is subject to approval. See Section 40-8.0 for low speed and high speed applications."
   },
   "transcriptionNotes": [
    "Footnote (4) sub-items a, b and c all read 'Where V >= 50 mph' with minimum widths 10, 11 and 12 ft respectively; the speed conditions appear to be a typo in the IDM (they cannot all be '>= 50 mph').",
    "Footnote (1) 'Applicability' is not referenced from any cell or row label.",
    "Auxiliary Lane rows cite Manual Section 55-4.06 (other figures cite 55-4.05 for auxiliary lane width).",
    "Decision Sight Distance, Stop Maneuver at 50 mph is 460ft here but 465 ft in Figures 55-3A, 55-3B and 55-3D.",
    "Alignment table has no 40 mph column (30, 35, 45, 50, 55 mph).",
    "Page-2 '*' note omits the 'streamlined design exception' sentence present in the other figures.",
    "Footnote (13) cites 'Chapter 402-6.01(3)'."
   ]
  },
  {
   "id": "55-3D",
   "title": "Geometric Design Criteria for Rural Local Road, 3R Project",
   "printedTitle": "GEOMETRIC DESIGN CRITERIA FOR RURAL LOCAL ROAD, 3R Project",
   "revision": "Rev. Jul 2014",
   "pdfPages": [
    64,
    65,
    66,
    67
   ],
   "facility": "Rural Local Road",
   "area": "rural",
   "columns": [
    {
     "key": "c1",
     "label": "2-Lane, Design-Year AADT: < 400",
     "conditions": {
      "lanes": 2,
      "adtMax": 400
     },
     "table": "main"
    },
    {
     "key": "c2",
     "label": "2-Lane, Design-Year AADT: 400 <= AADT < 1000",
     "conditions": {
      "lanes": 2,
      "adtMin": 400,
      "adtMax": 1000
     },
     "table": "main"
    },
    {
     "key": "c3",
     "label": "2-Lane, Design-Year AADT: 1000 <= AADT < 3000",
     "conditions": {
      "lanes": 2,
      "adtMin": 1000,
      "adtMax": 3000
     },
     "table": "main"
    },
    {
     "key": "c4",
     "label": "2-Lane, Design-Year AADT: 3000 <= AADT < 5000",
     "conditions": {
      "lanes": 2,
      "adtMin": 3000,
      "adtMax": 5000
     },
     "table": "main"
    },
    {
     "key": "c5",
     "label": "2-Lane, Design-Year AADT: >= 5000",
     "conditions": {
      "lanes": 2,
      "adtMin": 5000
     },
     "table": "main"
    },
    {
     "key": "s30",
     "label": "2-Lane: Design Speed 30 mph",
     "conditions": {
      "designSpeed": [
       30,
       30
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s35",
     "label": "2-Lane: Design Speed 35 mph",
     "conditions": {
      "designSpeed": [
       35,
       35
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s45",
     "label": "2-Lane: Design Speed 45 mph",
     "conditions": {
      "designSpeed": [
       45,
       45
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s50",
     "label": "2-Lane: Design Speed 50 mph",
     "conditions": {
      "designSpeed": [
       50,
       50
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s55",
     "label": "2-Lane: Design Speed 55 mph",
     "conditions": {
      "designSpeed": [
       55,
       55
      ]
     },
     "table": "alignment"
    }
   ],
   "rows": [
    {
     "group": "Design Controls",
     "element": "Design-Year AADT",
     "labelParts": [
      "Design-Year AADT"
     ],
     "section": "40-2.01",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "< 400",
      "c2": "400 <= AADT < 1000",
      "c3": "1000 <= AADT < 3000",
      "c4": "3000 <= AADT < 5000",
      "c5": ">= 5000"
     }
    },
    {
     "group": "Design Controls",
     "element": "Design Forecast Period",
     "labelParts": [
      "Design Forecast Period"
     ],
     "section": "55-4.01",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "20 Years (2)",
      "c2": "20 Years (2)",
      "c3": "20 Years (2)",
      "c4": "20 Years (2)",
      "c5": "20 Years (2)"
     },
     "notes": [
      "2"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Design Speed (mph)",
     "labelParts": [
      "*Design Speed (mph)"
     ],
     "section": "55-4.01",
     "table": "main",
     "controlling": true,
     "key": "designSpeed",
     "values": {
      "c1": "See Section 55-4.01 (3)",
      "c2": "See Section 55-4.01 (3)",
      "c3": "See Section 55-4.01 (3)",
      "c4": "See Section 55-4.01 (3)",
      "c5": "See Section 55-4.01 (3)"
     },
     "notes": [
      "3"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Access Control",
     "labelParts": [
      "Access Control"
     ],
     "section": "40-5.0",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "None",
      "c2": "None",
      "c3": "None",
      "c4": "None",
      "c5": "None"
     }
    },
    {
     "group": "Design Controls",
     "element": "Level of Service",
     "labelParts": [
      "Level of Service"
     ],
     "section": "40-2.0",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "Desirable: B; Minimum: D",
      "c2": "Desirable: B; Minimum: D",
      "c3": "Desirable: B; Minimum: D",
      "c4": "Desirable: B; Minimum: D",
      "c5": "Desirable: B; Minimum: D"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Width",
     "labelParts": [
      "Travel Lane",
      "*Width (4)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "laneWidth",
     "values": {
      "c1": "Des: 10 ft; Min: 9 ft (4a)",
      "c2": "Des: 10 ft; Min: 9 ft (4a)",
      "c3": "Des: 11 ft; Min: 10 ft (4b)",
      "c4": "Des: 12 ft; Min: 11 ft (4c)",
      "c5": "Des: 12 ft; Min: 11 ft (4c)"
     },
     "numeric": {
      "c1": {
       "des": 10,
       "min": 9
      },
      "c2": {
       "des": 10,
       "min": 9
      },
      "c3": {
       "des": 11,
       "min": 10
      },
      "c4": {
       "des": 12,
       "min": 11
      },
      "c5": {
       "des": 12,
       "min": 11
      }
     },
     "notes": [
      "4",
      "4a",
      "4b",
      "4c"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Typical Surface Type",
     "labelParts": [
      "Travel Lane",
      "Typical Surface Type"
     ],
     "section": "Ch. 602",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "Asphalt / Concrete / Aggregate",
      "c2": "Asphalt / Concrete / Aggregate",
      "c3": "Asphalt / Concrete / Aggregate",
      "c4": "Asphalt / Concrete / Aggregate",
      "c5": "Asphalt / Concrete / Aggregate"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Width Usable",
     "labelParts": [
      "Shoulder (5)",
      "*Width Usable"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "shoulderRightUsable",
     "values": {
      "c1": "Min: 2 ft",
      "c2": "Des: 4 ft; Min: 2 ft",
      "c3": "Des: 6 ft; Min: 3 ft",
      "c4": "Des: 6 ft; Min: 4 ft",
      "c5": "Des: 8 ft; Min: 6 ft"
     },
     "numeric": {
      "c1": {
       "min": 2
      },
      "c2": {
       "des": 4,
       "min": 2
      },
      "c3": {
       "des": 6,
       "min": 3
      },
      "c4": {
       "des": 6,
       "min": 4
      },
      "c5": {
       "des": 8,
       "min": 6
      }
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Typical Surface Type",
     "labelParts": [
      "Shoulder (5)",
      "Typical Surface Type"
     ],
     "section": "Ch. 602",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "Asphalt / Aggregate / Earth",
      "c2": "Asphalt / Aggregate / Earth",
      "c3": "Asphalt / Aggregate / Earth",
      "c4": "Asphalt / Aggregate / Earth",
      "c5": "Asphalt / Aggregate / Earth"
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Travel Lane",
     "labelParts": [
      "Cross Slope",
      "*Travel Lane (6)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "travelLaneCrossSlope",
     "values": {
      "c1": "2%-3% Asphalt / Concrete; 6%-8% Aggregate",
      "c2": "2%-3% Asphalt / Concrete; 6%-8% Aggregate",
      "c3": "2%-3% Asphalt / Concrete; 6%-8% Aggregate",
      "c4": "2%-3% Asphalt / Concrete; 6%-8% Aggregate",
      "c5": "2%-3% Asphalt / Concrete; 6%-8% Aggregate"
     },
     "notes": [
      "6"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Shoulder",
     "labelParts": [
      "Cross Slope",
      "Shoulder (7)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "shoulderCrossSlope",
     "values": {
      "c1": "Paved Width <= 4 ft: 2% - 3%; Paved Width > 4 ft: 4%-6% Asphalt; 6%-8% Aggregate; 8% Earth",
      "c2": "Paved Width <= 4 ft: 2% - 3%; Paved Width > 4 ft: 4%-6% Asphalt; 6%-8% Aggregate; 8% Earth",
      "c3": "Paved Width <= 4 ft: 2% - 3%; Paved Width > 4 ft: 4%-6% Asphalt; 6%-8% Aggregate; 8% Earth",
      "c4": "Paved Width <= 4 ft: 2% - 3%; Paved Width > 4 ft: 4%-6% Asphalt; 6%-8% Aggregate; 8% Earth",
      "c5": "Paved Width <= 4 ft: 2% - 3%; Paved Width > 4 ft: 4%-6% Asphalt; 6%-8% Aggregate; 8% Earth"
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Lane Width",
     "labelParts": [
      "Auxiliary Lane",
      "Lane Width"
     ],
     "section": "55-4.06",
     "table": "main",
     "controlling": false,
     "key": "auxLaneWidth",
     "values": {
      "c1": "Des: Same As Travel Lane; Min: 9 ft",
      "c2": "Des: Same As Travel Lane; Min: 9 ft",
      "c3": "Des: Same as Travel Lane; Min: 10 ft",
      "c4": "Des: Same as Travel Lane; Min: 10 ft",
      "c5": "Des: Same as Travel Lane; Min: 10 ft"
     },
     "numeric": {
      "c1": {
       "min": 9,
       "desText": "Same As Travel Lane"
      },
      "c2": {
       "min": 9,
       "desText": "Same As Travel Lane"
      },
      "c3": {
       "min": 10,
       "desText": "Same as Travel Lane"
      },
      "c4": {
       "min": 10,
       "desText": "Same as Travel Lane"
      },
      "c5": {
       "min": 10,
       "desText": "Same as Travel Lane"
      }
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Shoulder Width",
     "labelParts": [
      "Auxiliary Lane",
      "Shoulder Width"
     ],
     "section": "55-4.06",
     "table": "main",
     "controlling": false,
     "values": {
      "c1": "Des: 4 ft; Min: 2 ft",
      "c2": "Des: 4 ft; Min: 2 ft",
      "c3": "Des: 4 ft; Min: 2 ft",
      "c4": "Des: 4 ft; Min: 2 ft",
      "c5": "Des: 4 ft; Min: 2 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Obstruction-Free-Zone Width",
     "labelParts": [
      "Obstruction-Free-Zone Width"
     ],
     "section": "55-5.02",
     "table": "main",
     "controlling": false,
     "key": "clearZone",
     "values": {
      "c1": "See Section 55-5.02",
      "c2": "See Section 55-5.02",
      "c3": "See Section 55-5.02",
      "c4": "See Section 55-5.02",
      "c5": "See Section 55-5.02"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Foreslope",
     "labelParts": [
      "Side Slopes",
      "Cut",
      "Foreslope"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "foreslope",
     "values": {
      "c1": "2:1 or Flatter (8)",
      "c2": "2:1 or Flatter (8)",
      "c3": "2:1 or Flatter (8)",
      "c4": "2:1 or Flatter (8)",
      "c5": "2:1 or Flatter (8)"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Ditch Width",
     "labelParts": [
      "Side Slopes",
      "Cut",
      "Ditch Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "ditchWidth",
     "values": {
      "c1": "(8)",
      "c2": "(8)",
      "c3": "(8)",
      "c4": "(8)",
      "c5": "(8)"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Backslope",
     "labelParts": [
      "Side Slopes",
      "Cut",
      "Backslope"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "backslope",
     "values": {
      "c1": "2:1 or Flatter (8)",
      "c2": "2:1 or Flatter (8)",
      "c3": "2:1 or Flatter (8)",
      "c4": "2:1 or Flatter (8)",
      "c5": "2:1 or Flatter (8)"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Fill",
     "labelParts": [
      "Side Slopes",
      "Fill"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "fillSlope",
     "values": {
      "c1": "2:1 or Flatter (8)",
      "c2": "2:1 or Flatter (8)",
      "c3": "2:1 or Flatter (8)",
      "c4": "2:1 or Flatter (8)",
      "c5": "2:1 or Flatter (8)"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Structural Capacity",
     "labelParts": [
      "New or Reconstructed Bridge",
      "*Structural Capacity"
     ],
     "section": "Ch. 403",
     "table": "main",
     "controlling": true,
     "values": {
      "c1": "HL-93",
      "c2": "HL-93",
      "c3": "HL-93",
      "c4": "HL-93",
      "c5": "HL-93"
     }
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Clear-Roadway Width",
     "labelParts": [
      "New or Reconstructed Bridge",
      "Clear-Roadway Width (9)"
     ],
     "section": "55-6.03",
     "table": "main",
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "newOrReconstructed",
     "values": {
      "c1": "Travelway +4 ft",
      "c2": "Travelway +6 ft",
      "c3": "Travelway +6 ft",
      "c4": "Travelway +6 ft",
      "c5": "Full Paved Appr. Width"
     },
     "notes": [
      "9"
     ]
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Structural Capacity",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "*Structural Capacity (10)"
     ],
     "section": "Ch. 412",
     "table": "main",
     "controlling": true,
     "values": {
      "c1": "HS-15",
      "c2": "HS-15",
      "c3": "HS-15",
      "c4": "HS-15",
      "c5": "HS-15"
     },
     "notes": [
      "10"
     ]
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Clear-Roadway Width",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "Clear-Roadway Width (11)"
     ],
     "section": "55-6.02",
     "table": "main",
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "existingToRemain",
     "values": {
      "c1": "20 ft",
      "c2": "22 ft",
      "c3": "24 ft",
      "c4": "28.ft",
      "c5": "28 ft"
     },
     "notes": [
      "11"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector Under: New or Replaced Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Collector Under",
      "New or Replaced Overpassing Bridge (12)"
     ],
     "section": "55-6.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "newOrReplacedOverpass",
     "values": {
      "c1": "14.5 ft",
      "c2": "14.5 ft",
      "c3": "14.5 ft",
      "c4": "14.5 ft",
      "c5": "14.5 ft"
     },
     "notes": [
      "12"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector Under: Existing Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Collector Under",
      "Existing Overpassing Bridge"
     ],
     "section": "55-6.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "existingOverpass",
     "values": {
      "c1": "14.0 ft",
      "c2": "14.0 ft",
      "c3": "14.0 ft",
      "c4": "14.0 ft",
      "c5": "14.0 ft"
     }
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector Over Railroad",
     "labelParts": [
      "Vertical Clearance, Collector Over Railroad (13)"
     ],
     "section": "Ch. 402-6.01",
     "table": "main",
     "controlling": false,
     "key": "verticalClearance",
     "variant": "overRailroad",
     "values": {
      "c1": "23.0 ft",
      "c2": "23.0 ft",
      "c3": "23.0 ft",
      "c4": "23.0 ft",
      "c5": "23.0 ft"
     },
     "notes": [
      "13"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Design Speed",
     "labelParts": [
      "Design Speed"
     ],
     "section": "---",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s30": "30 mph",
      "s35": "35 mph",
      "s45": "45 mph",
      "s50": "50 mph",
      "s55": "55 mph"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Stopping Sight Distance, Desirable",
     "labelParts": [
      "*Stopping Sight Distance, Desirable"
     ],
     "section": "55-4.02",
     "table": "alignment",
     "controlling": true,
     "key": "ssd",
     "values": {
      "s30": "200 ft",
      "s35": "250 ft",
      "s45": "360 ft",
      "s50": "425 ft",
      "s55": "495 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance: Speed / Path / Direction Change",
     "labelParts": [
      "Decision Sight Distance",
      "Speed / Path / Direction Change"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s30": "450 ft",
      "s35": "525 ft",
      "s45": "675 ft",
      "s50": "750 ft",
      "s55": "865 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance: Stop Maneuver",
     "labelParts": [
      "Decision Sight Distance",
      "Stop Maneuver"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s30": "220 ft",
      "s35": "275 ft",
      "s45": "395 ft",
      "s50": "465 ft",
      "s55": "535 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Passing Sight Distance",
     "labelParts": [
      "Passing Sight Distance"
     ],
     "section": "42-3.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s30": "Existing",
      "s35": "Existing",
      "s45": "Existing",
      "s50": "Existing",
      "s55": "Existing"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Intersection Sight Distance , -3% to +3%",
     "labelParts": [
      "Intersection Sight Distance , -3% to +3% (14)"
     ],
     "section": "55-4.06",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s30": "P: 330 ft; SUT: 420 ft",
      "s35": "P: 390 ft; SUT: 490 ft",
      "s45": "P: 500 ft; SUT: 630 ft",
      "s50": "P: 550 ft; SUT: 780 ft",
      "s55": "P: 610 ft; SUT: 890 ft"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Radius",
     "labelParts": [
      "*Minimum Radius"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "key": "minRadius",
     "values": {
      "s30": "See Section 55-4.03",
      "s35": "See Section 55-4.03",
      "s45": "See Section 55-4.03",
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Superelevation Rate",
     "labelParts": [
      "*Superelevation Rate"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "key": "emax",
     "values": {
      "s30": "See Section 55-4.03",
      "s35": "See Section 55-4.03",
      "s45": "See Section 55-4.03",
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Horizontal Sight Distance",
     "labelParts": [
      "*Horizontal Sight Distance"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "values": {
      "s30": "See Section 55-4.03",
      "s35": "See Section 55-4.03",
      "s45": "See Section 55-4.03",
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Crest",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Crest"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "crestK",
     "values": {
      "s30": "See Section 55-4.04",
      "s35": "See Section 55-4.04",
      "s45": "See Section 55-4.04",
      "s50": "See Section 55-4.04",
      "s55": "See Section 55-4.04"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Sag",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Sag"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "sagK",
     "values": {
      "s30": "See Section 55-4.04",
      "s35": "See Section 55-4.04",
      "s45": "See Section 55-4.04",
      "s50": "See Section 55-4.04",
      "s55": "See Section 55-4.04"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Level",
     "labelParts": [
      "*Maximum Grade",
      "Level"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "maxGrade",
     "terrain": "level",
     "values": {
      "s30": "10%",
      "s35": "9%",
      "s45": "8.5%",
      "s50": "8%",
      "s55": "7%"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Rolling",
     "labelParts": [
      "*Maximum Grade",
      "Rolling"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "maxGrade",
     "terrain": "rolling",
     "values": {
      "s30": "12%",
      "s35": "11%",
      "s45": "10.5%",
      "s50": "10%",
      "s55": "9%"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Grade",
     "labelParts": [
      "Minimum Grade"
     ],
     "section": "44-1.03",
     "table": "alignment",
     "controlling": false,
     "key": "minGrade",
     "values": {
      "s30": "Desirable: 0.5%; Minimum: 0.0%",
      "s35": "Desirable: 0.5%; Minimum: 0.0%",
      "s45": "Desirable: 0.5%; Minimum: 0.0%",
      "s50": "Desirable: 0.5%; Minimum: 0.0%",
      "s55": "Desirable: 0.5%; Minimum: 0.0%"
     }
    }
   ],
   "legend": [
    "Des: Desirable; Min: Minimum.",
    "* Level One controlling criterion, see page 2 of 4"
   ],
   "footnotes": {
    "1": "Applicability. This figure is applicable only to a federal-aid funded project.",
    "2": "Design Forecast Period. For a partial 3R project, the pavement should be designed for at least a 10 year design life.",
    "3": "Design Speed. The minimum design speed should equal the anticipated posted speed limit after construction or the legal speed limit, 55 mph, on a non-posted highway.",
    "4": "Travel Lane, Width. An 11 ft travel lane should be used where truck volume exceeds 200 trucks per day. In addition, the following will apply: a. Where V >= 50 mph, the minimum width is 10 ft. b. Where V >= 50 mph, the minimum width is 11 ft. c. Where V >= 50 mph, the minimum width is 12 ft.",
    "5": "Shoulder Width. The following will apply: a. The desirable guardrail offset is 2 ft from the usable-shoulder width. In a restrictive situation, the guardrail offset may be 1 ft from the usable-shoulder width. See Section 49-5.0 for more information. b. If guardrail is present, the minimum offset from E.T.L. to face of guardrail should desirably be equal to the shy-line offset distance, but not less than 4 ft (see Section 49-5.0 for shy-line offsets). c. Usable shoulder width is defined as the distance from the edge of the travel lane to the shoulder break point.",
    "6": "Cross Slope, Travel Lane. Cross slopes of 1.5% are acceptable on an existing bridge to remain in place.",
    "7": "Cross Slope, Shoulder. Value is for a tangent section. See Figure 45-1A(1) or Figure 45-1A(2) for more-specific information. See Figure 305-4N for shoulder cross slope on a horizontal curve.",
    "8": "Side Slopes. Section 55-4.05 provides additional information for side-slope criteria.",
    "9": "Width, New or Reconstructed Bridge. See Section 402-6.02(01) for more information. Where shoulders are paved, it is desirable to provide the full roadway width across the bridge. Otherwise, the clear-roadway width is the algebraic sum of the following: a. the approach traveled way width; b. the approach usable shoulder width without guardrail; and c. a bridge-railing offset (see Figure 402-6H).",
    "10": "Structural Capacity, Existing Bridge to Remain in Place. If the AADT <= 50, an HS-10 loading is acceptable.",
    "11": "Width, Existing Bridge to Remain in Place. A minimum clear-roadway width that is 2 ft narrower than that shown may be used on a road with few trucks. The clear-roadway width should be at least the same width as the approach travelway. For a one-lane bridge, the width may be 18 ft. For a bridge of more than 100 ft in length, the value does not apply. The acceptability of such a bridge will be assessed individually.",
    "12": "Vertical Clearance, Local Under. Value includes an additional 6 in. allowance for a future pavement overlay. Vertical clearance applies from usable edge to usable edge of shoulders.",
    "13": "Vertical Clearance, Local Over Railroad. See Chapter 402-6.01(03) for additional information on railroad clearance under a highway.",
    "14": "Intersection Sight Distance. For left turn onto a 2 lane road, P = Passenger car; SUT = single unit truck. See Figure 46-10G for value for a combination truck.",
    "*": "Level One controlling criterion. Except as noted in this chapter, the values shown in AASHTO's A Policy on Geometric Design of Highways and Streets (the Green Book) may be used as minimum values if they are lower than similar values shown herein. A controlling criterion that does not meet the minimum value is a design exception and is subject to approval. A streamlined design exception may be used for 3R projects. See Section 40-8.0 for low speed and high speed applications."
   },
   "transcriptionNotes": [
    "Footnote (4) sub-items a, b and c all read 'Where V >= 50 mph' (same apparent typo as Figure 55-3C).",
    "Footnote (1) 'Applicability' is not referenced from any cell or row label.",
    "No 'Width Paved' shoulder row in this figure (only Width Usable).",
    "Vertical clearance rows are labelled 'Collector Under' / 'Collector Over Railroad' although this is the Local Road figure; footnotes (12)/(13) say 'Local Under' / 'Local Over Railroad'.",
    "Existing bridge clear-roadway width at 3000 <= AADT < 5000 printed '28.ft'.",
    "Intersection sight distance P values at 50/55 mph are 550/610 ft, versus 630/730 ft in Figures 55-3B and 55-3C.",
    "Maximum Grade row has no footnote; Figures 55-3B/55-3C have a 2%-steeper allowance footnote.",
    "Auxiliary Lane rows cite Manual Section 55-4.06.",
    "Footnote (5) cites Section 49-5.0 where other figures cite 49-4.0.",
    "Alignment table has no 40 mph column."
   ]
  },
  {
   "id": "55-3E",
   "title": "Geometric Design Criteria for Urban Arterial, Four or More Lanes, 3R Project",
   "printedTitle": "GEOMETRIC DESIGN CRITERIA FOR URBAN ARTERIAL, FOUR OR MORE LANES, 3R PROJECT",
   "revision": "Rev. Jul 2014",
   "pdfPages": [
    68,
    69,
    70,
    71
   ],
   "facility": "Urban Arterial, Four or More Lanes",
   "area": "urban",
   "columns": [
    {
     "key": "sub",
     "label": "Design Values (By Type of Area): Suburban",
     "conditions": {
      "subcategory": "suburban"
     },
     "table": "main"
    },
    {
     "key": "int",
     "label": "Design Values (By Type of Area): Intermediate",
     "conditions": {
      "subcategory": "intermediate"
     },
     "table": "main"
    },
    {
     "key": "bu",
     "label": "Design Values (By Type of Area): Built-Up",
     "conditions": {
      "subcategory": "built-up"
     },
     "table": "main"
    },
    {
     "key": "s30",
     "label": "Alignment Elements: Design Speed 30 mph",
     "conditions": {
      "designSpeed": [
       30,
       30
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s35",
     "label": "Alignment Elements: Design Speed 35 mph",
     "conditions": {
      "designSpeed": [
       35,
       35
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s45",
     "label": "Alignment Elements: Design Speed 45 mph",
     "conditions": {
      "designSpeed": [
       45,
       45
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s50",
     "label": "Alignment Elements: Design Speed 50 mph",
     "conditions": {
      "designSpeed": [
       50,
       50
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s55",
     "label": "Alignment Elements: Design Speed 55 mph",
     "conditions": {
      "designSpeed": [
       55,
       55
      ]
     },
     "table": "alignment"
    }
   ],
   "rows": [
    {
     "group": "Design Controls",
     "element": "Design Forecast Period",
     "labelParts": [
      "Design Forecast Period"
     ],
     "section": "55-4.01",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "20 Years (1)",
      "int": "20 Years (1)",
      "bu": "20 Years (1)"
     },
     "notes": [
      "1"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Design Speed, mph",
     "labelParts": [
      "*Design Speed, mph)(2)"
     ],
     "section": "55-4.01",
     "table": "main",
     "controlling": true,
     "key": "designSpeed",
     "values": {
      "sub": "Posted Speed Limit",
      "int": "Posted Speed Limit",
      "bu": "Posted Speed Limit"
     },
     "notes": [
      "2"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Access Control",
     "labelParts": [
      "Access Control"
     ],
     "section": "40-5.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Partial Control / None",
      "int": "None",
      "bu": "None"
     }
    },
    {
     "group": "Design Controls",
     "element": "Level of Service",
     "labelParts": [
      "Level of Service"
     ],
     "section": "40-2.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Des: B; Min: D",
      "int": "Des: C; Min: D",
      "bu": "Des: C; Min: D"
     }
    },
    {
     "group": "Design Controls",
     "element": "On-Street Parking",
     "labelParts": [
      "On-Street Parking"
     ],
     "section": "45-1.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "None",
      "int": "Optional (3)",
      "bu": "Optional (3)"
     },
     "notes": [
      "3"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Width",
     "labelParts": [
      "Travel Lane",
      "*Width (4)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "laneWidth",
     "values": {
      "sub": "Curbed: Des: 12 ft; Min: 11 ft; Uncurbed: Des: 12 ft; Min: 11 ft",
      "int": "Curbed: Des: 12 ft; Min: 11 ft; Uncurbed: Des: 12 ft; Min: 11 ft",
      "bu": "Curbed: Des: 12 ft; Min: 10 ft"
     },
     "numeric": {
      "sub": {
       "curbed": {
        "des": 12,
        "min": 11
       },
       "uncurbed": {
        "des": 12,
        "min": 11
       }
      },
      "int": {
       "curbed": {
        "des": 12,
        "min": 11
       },
       "uncurbed": {
        "des": 12,
        "min": 11
       }
      },
      "bu": {
       "curbed": {
        "des": 12,
        "min": 10
       }
      }
     },
     "notes": [
      "4"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Typical Surface Type",
     "labelParts": [
      "Travel Lane",
      "Typical Surface Type (5)"
     ],
     "section": "Ch. 52",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete",
      "int": "Asphalt / Concrete",
      "bu": "Asphalt / Concrete"
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Curb Offset",
     "labelParts": [
      "*Curb Offset (6)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "curbOffset",
     "values": {
      "sub": "Des: 2 ft; Min: 1 ft",
      "int": "Des: 2 ft; Min: 1 ft",
      "bu": "Des: 2 ft; Min: 1 ft"
     },
     "numeric": {
      "sub": {
       "des": 2,
       "min": 1
      },
      "int": {
       "des": 2,
       "min": 1
      },
      "bu": {
       "des": 2,
       "min": 1
      }
     },
     "notes": [
      "6"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Paved Width",
     "labelParts": [
      "Shoulder",
      "*Paved Width (7)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "shoulderRightPaved",
     "values": {
      "sub": "Curbed, Rt. Des: 10 ft; Min 1 ft; Curbed, Lt. Des: 4 ft; Min 1 ft; Uncurbed, Rt.: 10 ft; Lt.: 4 ft",
      "int": "Curbed, Rt. Des: 8 ft; Min 1 ft; Curbed, Lt. Des: 3 ft; Min 2 ft; Uncurbed, Rt.: 8 ft; Lt.: 3 ft",
      "bu": "Right: 6 ft; Left: 3 ft"
     },
     "numeric": {
      "sub": {
       "curbed": {
        "des": 10,
        "min": 1,
        "left": {
         "des": 4,
         "min": 1
        }
       },
       "uncurbed": {
        "des": 10,
        "min": 10,
        "single": true,
        "left": {
         "des": 4,
         "min": 4,
         "single": true
        }
       }
      },
      "int": {
       "curbed": {
        "des": 8,
        "min": 1,
        "left": {
         "des": 3,
         "min": 2
        }
       },
       "uncurbed": {
        "des": 8,
        "min": 8,
        "single": true,
        "left": {
         "des": 3,
         "min": 3,
         "single": true
        }
       }
      },
      "bu": {
       "des": 6,
       "min": 6,
       "single": true,
       "left": {
        "des": 3,
        "min": 3,
        "single": true
       }
      }
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Typical Surface Type",
     "labelParts": [
      "Shoulder",
      "Typical Surface Type (5)"
     ],
     "section": "Ch. 304",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete",
      "int": "Asphalt / Concrete",
      "bu": "Asphalt / Concrete"
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Travel Lane",
     "labelParts": [
      "Cross Slope",
      "*Travel Lane (8)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "travelLaneCrossSlope",
     "values": {
      "sub": "2% - 3%",
      "int": "2% - 3%",
      "bu": "2% - 3%"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Shoulder",
     "labelParts": [
      "Cross Slope",
      "Shoulder (9)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "shoulderCrossSlope",
     "values": {
      "sub": "Rt.: 4% - 6%; Lt.: 2% - 3%",
      "int": "Paved Width <= 4 ft: 2%-3%; Paved Width > 4 ft: 4%-6%",
      "bu": "Paved Width <= 4 ft: 2%-3%; Paved Width > 4 ft: 4%-6%"
     },
     "notes": [
      "9"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Lane Width",
     "labelParts": [
      "Auxiliary Lane",
      "Lane Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "auxLaneWidth",
     "values": {
      "sub": "Des: 12 ft; Min: 11 ft",
      "int": "Des: 12 ft; Min: 10 ft",
      "bu": "Des: 12 ft; Min: 10 ft"
     },
     "numeric": {
      "sub": {
       "des": 12,
       "min": 11
      },
      "int": {
       "des": 12,
       "min": 10
      },
      "bu": {
       "des": 12,
       "min": 10
      }
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Curb Offset",
     "labelParts": [
      "Auxiliary Lane",
      "Curb Offset"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Des: 1 ft; Min: 0 ft",
      "int": "Des: 1 ft; Min: 0 ft",
      "bu": "Des: 1 ft; Min: 0 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Shoulder Width",
     "labelParts": [
      "Auxiliary Lane",
      "Shoulder Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Des: 10 ft; Min: 2 ft",
      "int": "Des: 8 ft; Min: 2 ft",
      "bu": "Des: 6 ft; Min: 2 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Typical Surface Type",
     "labelParts": [
      "Auxiliary Lane",
      "Typical Surface Type (5)"
     ],
     "section": "Ch. 304",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete",
      "int": "Asphalt / Concrete",
      "bu": "Asphalt / Concrete"
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "TWLTL Width",
     "labelParts": [
      "TWLTL Width"
     ],
     "section": "46-5.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Des: 16 ft; Min. 14 ft",
      "int": "Des: 16 ft; Min: 12 ft",
      "bu": "Des: 14 ft; Min: 11 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Parking-Lane Width",
     "labelParts": [
      "Parking-Lane Width"
     ],
     "section": "45-1.04",
     "table": "main",
     "controlling": false,
     "key": "parkingLaneWidth",
     "values": {
      "sub": "N/A",
      "int": "Des: 10 ft; Min: 8 ft (10)",
      "bu": "Des: 10 ft; Min: 8 ft (10)"
     },
     "notes": [
      "10"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Median Width: Depressed",
     "labelParts": [
      "Median Width",
      "Depressed"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "medianWidth",
     "variant": "depressed",
     "values": {
      "sub": "Existing",
      "int": "Existing",
      "bu": "N/A"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Median Width: Raised Island",
     "labelParts": [
      "Median Width",
      "Raised Island"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "medianWidth",
     "variant": "raisedIsland",
     "values": {
      "sub": "Des: 16 ft.; Min: 2 ft",
      "int": "Des: 16 ft; Min: 2 ft",
      "bu": "Des: 16 ft; Min: 2 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Median Width: Flush / Corrugated",
     "labelParts": [
      "Median Width",
      "Flush / Corrugated"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "medianWidth",
     "variant": "flushCorrugated",
     "values": {
      "sub": "Des: 16 ft.; Min: 2 ft",
      "int": "Des: 16 ft; Min: 2 ft",
      "bu": "Des: 16 ft; Min: 2 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Sidewalk Width",
     "labelParts": [
      "Sidewalk Width (11)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "4 ft with 5 ft Buffer (Des)",
      "int": "Des: 6 ft. Min: 4 ft",
      "bu": "Des: 6 ft; Min: 4 ft"
     },
     "notes": [
      "11"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Bicycle-Lane Width",
     "labelParts": [
      "Bicycle-Lane Width (12)"
     ],
     "section": "51-7.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Curbed: 5 ft; Uncurbed: Shld. Width +4 ft",
      "int": "Curbed: 5 ft; Uncurbed: Shld. Width +4 ft",
      "bu": "Curbed: 5 ft"
     },
     "notes": [
      "12"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Obstruction-Free-Zone Width",
     "labelParts": [
      "Obstruction-Free-Zone Width"
     ],
     "section": "55-5.02",
     "table": "main",
     "controlling": false,
     "key": "clearZone",
     "values": {
      "sub": "See Section 55-5.02",
      "int": "See Section 55-5.02",
      "bu": "See Section 55-5.02"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Typical Curbing Type, where used",
     "labelParts": [
      "Typical Curbing Type, where used (13)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Vertical / Sloping",
      "int": "Vertical / Sloping",
      "bu": "Vertical / Sloping"
     },
     "notes": [
      "13"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Foreslope",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Cut",
      "Foreslope"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "foreslope",
     "values": {
      "sub": "2:1 or Flatter",
      "int": "2:1 or Flatter (14)",
      "bu": "N/A"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Ditch Width",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Cut",
      "Ditch Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "ditchWidth",
     "values": {
      "sub": "(14)",
      "int": "(14)",
      "bu": "N/A"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Backslope",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Cut",
      "Backslope"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "backslope",
     "values": {
      "sub": "2:1 or Flatter (14)",
      "int": "2:1 or Flatter (14)",
      "bu": "N/A"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Fill",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Fill"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "fillSlope",
     "values": {
      "sub": "2:1 or Flatter (14)",
      "int": "2:1 or Flatter (14)",
      "bu": "N/A"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Curbed: Cut, Backslope",
     "labelParts": [
      "Side Slopes, Curbed",
      "Cut, Backslope"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "(15)",
      "int": "(15)",
      "bu": "(15)"
     },
     "notes": [
      "15"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Curbed: Fill",
     "labelParts": [
      "Side Slopes, Curbed",
      "Fill"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "2:1 or Flatter (14)",
      "int": "2:1 or Flatter (14)",
      "bu": "2:1 or Flatter (14)"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Median Slopes, Depressed",
     "labelParts": [
      "Median Slopes, Depressed"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Desirable: 8:1; Maximum: 4:1",
      "int": "Desirable: 8:1; Maximum: 4:1",
      "bu": "Desirable: 8:1; Maximum: 4:1"
     }
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Structural Capacity",
     "labelParts": [
      "New or Reconstructed Bridge",
      "*Structural Capacity (16)"
     ],
     "section": "Ch. 403",
     "table": "main",
     "controlling": true,
     "values": {
      "sub": "HL-93",
      "int": "HL-93",
      "bu": "HL-93"
     },
     "notes": [
      "16"
     ]
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Clear Roadway Width",
     "labelParts": [
      "New or Reconstructed Bridge",
      "Clear Roadway Width(17)"
     ],
     "section": "55-6.03",
     "table": "main",
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "newOrReconstructed",
     "values": {
      "sub": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: Full Approach Width",
      "int": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: Full Approach Width",
      "bu": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: Full Approach Width"
     },
     "notes": [
      "17"
     ]
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Structural Capacity",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "*Structural Capacity"
     ],
     "section": "Ch. 412",
     "table": "main",
     "controlling": true,
     "values": {
      "sub": "HS-20",
      "int": "HS-20",
      "bu": "HS-20"
     }
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Clear-Roadway Width",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "Clear-Roadway Width"
     ],
     "section": "55-6.02",
     "table": "main",
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "existingToRemain",
     "values": {
      "sub": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: Travelway Plus 2 ft. on Each Side",
      "int": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: Travelway Plus 2 ft. on Each Side",
      "bu": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: Travelway Plus 2 ft. on Each Side"
     }
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Under: New or Replaced Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Arterial Under",
      "New or Replaced Overpassing Bridge (18a & 18c)"
     ],
     "section": "55-6.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "newOrReplacedOverpass",
     "values": {
      "sub": "16.5 ft",
      "int": "16.5 ft (18b)",
      "bu": "16.5 ft (18b)"
     },
     "notes": [
      "18a",
      "18c",
      "18b"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Under: Existing Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Arterial Under",
      "Existing Overpassing Bridge (19)"
     ],
     "section": "55-6.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "existingOverpass",
     "values": {
      "sub": "14.0 ft",
      "int": "14.0 ft",
      "bu": "14.0 ft"
     },
     "notes": [
      "19"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Under: Sign Truss / Pedestrian Bridge",
     "labelParts": [
      "*Vertical Clearance, Arterial Under",
      "Sign Truss / Pedestrian Bridge (18a & 18c)"
     ],
     "section": "55-6.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "signTrussPedestrian",
     "values": {
      "sub": "New: 17.5 ft; Existing: 17.0 ft",
      "int": "New: 17.5 ft; Existing: 17.0 ft",
      "bu": "New: 17.5 ft; Existing: 17.0 ft"
     },
     "notes": [
      "18a",
      "18c"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial over Railroad",
     "labelParts": [
      "Vertical Clearance, Arterial over Railroad (20)"
     ],
     "section": "Ch. 402-6.01",
     "table": "main",
     "controlling": false,
     "key": "verticalClearance",
     "variant": "overRailroad",
     "values": {
      "sub": "23.0 ft.",
      "int": "23.0 ft.",
      "bu": "23.0 ft."
     },
     "notes": [
      "20"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Design Speed",
     "labelParts": [
      "Design Speed"
     ],
     "section": "",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s30": "30 mph",
      "s35": "35 mph",
      "s45": "45 mph",
      "s50": "50 mph",
      "s55": "55 mph"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Stopping Sight Distance, Desirable",
     "labelParts": [
      "*Stopping Sight Distance, Desirable"
     ],
     "section": "55-4.02",
     "table": "alignment",
     "controlling": true,
     "key": "ssd",
     "values": {
      "s30": "200 ft",
      "s35": "250 ft",
      "s45": "360 ft",
      "s50": "425 ft",
      "s55": "495 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance: Speed / Path / Direction Change",
     "labelParts": [
      "Decision Sight Distance",
      "Speed / Path / Direction Change"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s30": "U: 620 ft; SU: 535 ft",
      "s35": "U: 720 ft; SU: 625 ft",
      "s45": "U: 930 ft; SU: 800 ft",
      "s50": "U: 1030 ft; SU: 890 ft",
      "s55": "U: 1135 ft; SU: 980 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance: Stop Maneuver",
     "labelParts": [
      "Decision Sight Distance",
      "Stop Maneuver"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s30": "490 ft",
      "s35": "590 ft",
      "s45": "800 ft",
      "s50": "910 ft",
      "s55": "1030 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Intersection Sight Distance, -3% to +3%",
     "labelParts": [
      "Intersection Sight Distance, -3% to +3% (21)"
     ],
     "section": "55-4.06",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s30": "P: 355 ft; SUT: 450 ft",
      "s35": "P: 415 ft; SUT: 525 ft",
      "s45": "P: 530 ft; SUT: 675 ft",
      "s50": "P: 665 ft; SUT: 825 ft",
      "s55": "P: 770 ft; SUT: 950 ft"
     },
     "notes": [
      "21"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Radius",
     "labelParts": [
      "*Minimum Radius"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "key": "minRadius",
     "values": {
      "s30": "See Section 55-4.03",
      "s35": "See Section 55-4.03",
      "s45": "See Section 55-4.03",
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Superelevation Rate",
     "labelParts": [
      "*Superelevation Rate"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "key": "emax",
     "values": {
      "s30": "See Section 55-4.03",
      "s35": "See Section 55-4.03",
      "s45": "See Section 55-4.03",
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Horizontal Sight Distance",
     "labelParts": [
      "*Horizontal Sight Distance"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "values": {
      "s30": "See Section 55-4.03",
      "s35": "See Section 55-4.03",
      "s45": "See Section 55-4.03",
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Crest",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Crest"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "crestK",
     "values": {
      "s30": "See Section 55-4.04",
      "s35": "See Section 55-4.04",
      "s45": "See Section 55-4.04",
      "s50": "See Section 55-4.04",
      "s55": "See Section 55-4.04"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Sag",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Sag"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "sagK",
     "values": {
      "s30": "See Section 55-4.04",
      "s35": "See Section 55-4.04",
      "s45": "See Section 55-4.04",
      "s50": "See Section 55-4.04",
      "s55": "See Section 55-4.04"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Level",
     "labelParts": [
      "*Maximum Grade",
      "Level"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "maxGrade",
     "terrain": "level",
     "values": {
      "s30": "10%",
      "s35": "9%",
      "s45": "8.5%",
      "s50": "8%",
      "s55": "7%"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Rolling",
     "labelParts": [
      "*Maximum Grade",
      "Rolling"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "maxGrade",
     "terrain": "rolling",
     "values": {
      "s30": "11%",
      "s35": "10%",
      "s45": "9.5%",
      "s50": "9%",
      "s55": "8%"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Grade",
     "labelParts": [
      "Minimum Grade"
     ],
     "section": "44-1.03",
     "table": "alignment",
     "controlling": false,
     "key": "minGrade",
     "values": {
      "s30": "Curbed Des: 0.5%; Curbed Min: 0.3% Uncurbed: 0.0%",
      "s35": "Curbed Des: 0.5%; Curbed Min: 0.3% Uncurbed: 0.0%",
      "s45": "Curbed Des: 0.5%; Curbed Min: 0.3% Uncurbed: 0.0%",
      "s50": "Curbed Des: 0.5%; Curbed Min: 0.3% Uncurbed: 0.0%",
      "s55": "Curbed Des: 0.5%; Curbed Min: 0.3% Uncurbed: 0.0%"
     }
    }
   ],
   "legend": [
    "Des: Desirable; Min: Minimum",
    "SU: Suburban. U: Urban.",
    "* Level One controlling criterion, see page 2 of 4."
   ],
   "footnotes": {
    "1": "Design Forecast Period. For a partial 3R project, the pavement should be designed for at least a 10-year design life.",
    "2": "Design Speed. The minimum design speed should equal the anticipated posted speed limit after construction or the legal speed limit on a non-posted highway. This is 30 mph, but with an engineering study it may be raised to a maximum of 55 mph.",
    "3": "On-Street Parking. In general, on-street parking is discouraged.",
    "4": "Travel Lane, Width. For an arterial on the National Truck Network, the right lane must be 12 ft in width. For a non-National-Truck-Network route, a minimum 11 ft travel lane should be used where truck volume exceeds 200 trucks per day. See Section 55-4.05.",
    "5": "Surface Type. The pavement type selection will be determined by the Office of Pavement Engineering or by the local jurisdiction.",
    "6": "Curb Offset. Vertical curbs which are either continuous or introduced intermittently may be offset 1 ft.",
    "7": "Shoulder Width. The value applies to paved-shoulder width. The following will also apply: a. For an uncurbed section, the shoulder is paved to the face of guardrail. The desirable guardrail offset is 2 ft from the usable-shoulder width. See Section 49-4.0 for more information. b. For an uncurbed section, a desirable additional 1 ft of compacted aggregate will be provided. c. If guardrail is present, the minimum offset from E.T.L. to face of guardrail should desirably be equal to the shy-line offset distance, but not less than 4 ft (see Section 49-4.0 for shy-line offsets). In a restrictive situation, the guardrail offset may be 0 ft from the usable-shoulder width. d. For a curbed section, the curb offset is included in the paved-shoulder width.",
    "8": "Cross Slope, Travel Lane. Cross slopes of 1.5% are acceptable on an existing bridge to remain in place.",
    "9": "Cross Slope, Shoulder. Value is for a tangent section. See Figure 45-1A(1) or Figure 45-1A(2) for more-specific information. See Figure 305-4N for shoulder cross slope on a horizontal curve.",
    "10": "Parking Lane Width. The following will apply: a. Where the parking lane will be used as a travel lane during peak hours or may be converted to a travel lane in the future, the width should be equal to the travel lane width plus the curb offset width (if present). b. A parking lane for residential usage may be 7 ft narrower. c. The cross slope for a parking lane is typically 1% steeper than that of the adjacent travel lane.",
    "11": "Sidewalk Width. Value is for the installation of a new sidewalk. An existing sidewalk width of 3 ft or greater (with or without a buffer) may be retained. A buffer strip of 4 ft or more is desirable.",
    "12": "Bicycle-Lane Width. The value is in addition to the width of a parking lane, if present. See Section 51-7.0 for additional details.",
    "13": "Curbing Type. Vertical curbs may only be used with design speed lower than 50 mph.",
    "14": "Side Slopes. Section 55-4.05 provides additional information for side slope criteria.",
    "15": "Side Slope, Curbed, Cut. A shelf or sidewalk will be present immediately behind the curb before the toe of the backslope. The minimum width of a shelf desirably should be 6 ft. Where a sidewalk is present, the toe of the backslope will be 1 ft beyond the edge of sidewalk. See Section 45-3.0 for more information.",
    "16": "Structural Capacity, New or Reconstructed Bridge. The following will apply: a. Each State-highway bridge within 15 mi of a Toll-Road gate must be designed for Toll-Road loading. b. Each bridge on an Extra-Heavy-Duty Highway must be designed for the Michigan Train truck loading configuration.",
    "17": "Width, New or Reconstructed Bridge. See Section 402-6.02(01) for more information. The clear-roadway width is the algebraic sum of the following: a. the approach traveled way width; b. the approach usable shoulder width without guardrail; and c. a bridge-railing offset (see Figure 402-6H).",
    "18": "Vertical Clearance, Arterial Under Railroad. The following will apply: a. Value includes an additional 6 in. allowance for a future pavement overlay. b. In a highly-urbanized area, a minimum clearance of 14.0 ft may be provided if there is at least one route with a 16.0-ft clearance. c. Vertical clearance applies from usable edge to usable edge of shoulder.",
    "19": "Vertical Clearance, Existing Bridge. See Section 55-6.02 for additional information on minimum allowable vertical clearance.",
    "20": "Vertical Clearance, Arterial Over Railroad. See Section 402-6.01(03) for additional information on railroad clearance under a highway.",
    "21": "Intersection Sight Distance. For left turn onto a two-way, 4-lane undivided roadway. P = Passenger car; SUT = single unit truck. See Figure 46-10G for value for a combination truck.",
    "*": "Level One controlling criterion. Except as noted in this chapter, the values shown in AASHTO's A Policy on Geometric Design of Highways and Streets (the Green Book) may be used as minimum values if they are lower than similar values shown herein. A controlling criterion that does not meet the minimum value is a design exception and is subject to approval. A streamlined design exception may be used for 3R projects. See Section 40-8.0. for low speed and high speed applications."
   },
   "transcriptionNotes": [
    "Design Speed label printed '*Design Speed, mph)(2)' (stray parenthesis).",
    "Travel Lane Typical Surface Type cites 'Ch. 52' (other figures cite Ch. 602); shoulder and auxiliary lane surface types cite 'Ch. 304'.",
    "Suburban Side Slopes, Uncurbed, Foreslope printed '2:1 or Flatter' without the (14) marker used in the other cells.",
    "No Passing Sight Distance row in the alignment table; Design Speed row has no Manual Section entry.",
    "Footnote (10)b reads 'A parking lane for residential usage may be 7 ft narrower.' (as printed; probably intended '7 ft' wide).",
    "Footnote (18) is titled 'Vertical Clearance, Arterial Under Railroad' but is referenced by the arterial-under overpass rows.",
    "Alignment table has no 40 mph column; footnote (21) ISD is for a two-way, 4-lane undivided roadway."
   ]
  },
  {
   "id": "55-3F",
   "title": "Geometric Design Criteria for Urban Arterial, Two Lanes, 3R Project",
   "printedTitle": "GEOMETRIC DESIGN CRITERIA FOR URBAN ARTERIAL, TWO LANES, 3R PROJECT",
   "revision": "Rev. Jul 2014",
   "pdfPages": [
    72,
    73,
    74,
    75
   ],
   "facility": "Urban Arterial, Two Lanes",
   "area": "urban",
   "columns": [
    {
     "key": "sub",
     "label": "Design Values (By Type of Area): Suburban",
     "conditions": {
      "subcategory": "suburban"
     },
     "table": "main"
    },
    {
     "key": "int",
     "label": "Design Values (By Type of Area): Intermediate",
     "conditions": {
      "subcategory": "intermediate"
     },
     "table": "main"
    },
    {
     "key": "bu",
     "label": "Design Values (By Type of Area): Built-up",
     "conditions": {
      "subcategory": "built-up"
     },
     "table": "main"
    },
    {
     "key": "s25",
     "label": "Alignment Elements: Design Speed 25 mph",
     "conditions": {
      "designSpeed": [
       25,
       25
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s30",
     "label": "Alignment Elements: Design Speed 30 mph",
     "conditions": {
      "designSpeed": [
       30,
       30
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s35",
     "label": "Alignment Elements: Design Speed 35 mph",
     "conditions": {
      "designSpeed": [
       35,
       35
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s45",
     "label": "Alignment Elements: Design Speed 45 mph",
     "conditions": {
      "designSpeed": [
       45,
       45
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s50",
     "label": "Alignment Elements: Design Speed 50 mph",
     "conditions": {
      "designSpeed": [
       50,
       50
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s55",
     "label": "Alignment Elements: Design Speed 55 mph",
     "conditions": {
      "designSpeed": [
       55,
       55
      ]
     },
     "table": "alignment"
    }
   ],
   "rows": [
    {
     "group": "Design Controls",
     "element": "Design Forecast Period",
     "labelParts": [
      "Design Forecast Period"
     ],
     "section": "55-4.01",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "20 Years (1)",
      "int": "20 Years (1)",
      "bu": "20 Years (1)"
     },
     "notes": [
      "1"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Design Speed, mph",
     "labelParts": [
      "*Design Speed, mph (2)"
     ],
     "section": "55-4.01",
     "table": "main",
     "controlling": true,
     "key": "designSpeed",
     "values": {
      "sub": "Posted Speed Limit",
      "int": "Posted Speed Limit",
      "bu": "Posted Speed Limit"
     },
     "notes": [
      "2"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Access Control",
     "labelParts": [
      "Access Control"
     ],
     "section": "40-5.01",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Partial Control / None",
      "int": "None",
      "bu": "None"
     }
    },
    {
     "group": "Design Controls",
     "element": "Level of Service",
     "labelParts": [
      "Level of Service"
     ],
     "section": "40-2.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Des: B; Min: D",
      "int": "Des: C; Min: D",
      "bu": "Des: C; Min: D"
     }
    },
    {
     "group": "Design Controls",
     "element": "On-Street Parking",
     "labelParts": [
      "On-Street Parking"
     ],
     "section": "45-1.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "None",
      "int": "Optional (3)",
      "bu": "Optional (3)"
     },
     "notes": [
      "3"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Width",
     "labelParts": [
      "Travel Lane",
      "*Width (4)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "laneWidth",
     "values": {
      "sub": "Curbed: Des: 12 ft; Min: 11 ft; Uncurbed: Des: 12 ft; Min: 11 ft",
      "int": "Curbed: Des: 12 ft; Min: 11 ft; Uncurbed: Des: 12 ft; Min: 11 ft",
      "bu": "Curbed Des: 12 ft; Curbed Min: 10 ft"
     },
     "numeric": {
      "sub": {
       "curbed": {
        "des": 12,
        "min": 11
       },
       "uncurbed": {
        "des": 12,
        "min": 11
       }
      },
      "int": {
       "curbed": {
        "des": 12,
        "min": 11
       },
       "uncurbed": {
        "des": 12,
        "min": 11
       }
      },
      "bu": {
       "curbed": {
        "des": 12,
        "min": 10
       }
      }
     },
     "notes": [
      "4"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Typical Surface Type",
     "labelParts": [
      "Travel Lane",
      "Typical Surface Type (5)"
     ],
     "section": "Ch. 602",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete",
      "int": "Asphalt / Concrete",
      "bu": "Asphalt / Concrete"
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Curb Offset",
     "labelParts": [
      "*Curb Offset (6)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "curbOffset",
     "values": {
      "sub": "Des: 2 ft; Min: 1 ft",
      "int": "Des: 2 ft; Min: 1 ft",
      "bu": "Des: 2 ft. Min: 1 ft"
     },
     "numeric": {
      "sub": {
       "des": 2,
       "min": 1
      },
      "int": {
       "des": 2,
       "min": 1
      },
      "bu": {
       "des": 2,
       "min": 1
      }
     },
     "notes": [
      "6"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Paved Width",
     "labelParts": [
      "Shoulder",
      "*Paved Width (7)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "shoulderRightPaved",
     "values": {
      "sub": "Curbed Des: 10 ft; Min. 1 ft; Uncurbed: Des: 10 ft; Min. 6 ft",
      "int": "Curbed: Des: 8 ft; Min: 1 ft; Uncurbed: Des: 8 ft; Min. 4 ft",
      "bu": "Des: 6 ft; Min: 2 ft"
     },
     "numeric": {
      "sub": {
       "curbed": {
        "des": 10,
        "min": 1
       },
       "uncurbed": {
        "des": 10,
        "min": 6
       }
      },
      "int": {
       "curbed": {
        "des": 8,
        "min": 1
       },
       "uncurbed": {
        "des": 8,
        "min": 4
       }
      },
      "bu": {
       "des": 6,
       "min": 2
      }
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Typical Surface Type",
     "labelParts": [
      "Shoulder",
      "Typical Surface Type (5)"
     ],
     "section": "Ch. 602",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete",
      "int": "Asphalt / Concrete",
      "bu": "Asphalt / Concrete"
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Travel Lane",
     "labelParts": [
      "Cross Slope",
      "*Travel Lane (8)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "travelLaneCrossSlope",
     "values": {
      "sub": "2%-3%",
      "int": "2%-3%",
      "bu": "2%-3%"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Shoulder",
     "labelParts": [
      "Cross Slope",
      "Shoulder (9)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "shoulderCrossSlope",
     "values": {
      "sub": "4%-6%",
      "int": "Paved Width <= 4 ft: 2%-3%; Paved Width > 4 ft: 4%-6%",
      "bu": "Paved Width <= 4 ft: 2%-3%; Paved Width > 4 ft: 4%-6%"
     },
     "notes": [
      "9"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Lane Width",
     "labelParts": [
      "Auxiliary Lane",
      "Lane Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "auxLaneWidth",
     "values": {
      "sub": "Des: 12 ft; Min: 11 ft",
      "int": "Des: 12 ft; Min: 11 ft",
      "bu": "Des: 12 ft; Min: 10 ft"
     },
     "numeric": {
      "sub": {
       "des": 12,
       "min": 11
      },
      "int": {
       "des": 12,
       "min": 11
      },
      "bu": {
       "des": 12,
       "min": 10
      }
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Curb Offset",
     "labelParts": [
      "Auxiliary Lane",
      "Curb Offset"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Des: 1 ft; Min: 0 ft",
      "int": "Des: 1 ft; Min: 0 ft",
      "bu": "Des: 1 ft; Min: 0 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Shoulder Width",
     "labelParts": [
      "Auxiliary Lane",
      "Shoulder Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Des: 10 ft; Min: 2 ft",
      "int": "Des: 8 ft; Min: 2 ft",
      "bu": "Des: 6 ft; Min: 2 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Typical Surface Type",
     "labelParts": [
      "Auxiliary Lane",
      "Typical Surface Type (5)"
     ],
     "section": "Ch. 602",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete",
      "int": "Asphalt / Concrete",
      "bu": "Asphalt / Concrete"
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "TWLTL Width",
     "labelParts": [
      "TWLTL Width"
     ],
     "section": "46-5.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Des: 16 ft; Min. 14 ft",
      "int": "Des: 16 ft; Min: 12 ft",
      "bu": "Des: 16 ft; Min: 11 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Parking-Lane Width",
     "labelParts": [
      "Parking-Lane Width"
     ],
     "section": "45-1.04",
     "table": "main",
     "controlling": false,
     "key": "parkingLaneWidth",
     "values": {
      "sub": "N/A",
      "int": "Des: 10 ft; Min: 8 ft (10)",
      "bu": "Des: 10 ft; Min: 8 ft (10)"
     },
     "notes": [
      "10"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Sidewalk Width",
     "labelParts": [
      "Sidewalk Width (11)"
     ],
     "section": "45-1.06",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "4 ft with 5 ft Buffer (Des)",
      "int": "Des: 6 ft; Min: 4 ft",
      "bu": "Des: 6 ft; Min: 4 ft"
     },
     "notes": [
      "11"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Bicycle-Lane Width",
     "labelParts": [
      "Bicycle-Lane Width (12)"
     ],
     "section": "51-7.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Curbed: 5 ft; Uncurbed: Shld. Width +4 ft",
      "int": "Curbed: 5 ft; Uncurbed: Shld. Width +4 ft",
      "bu": "Curbed: 5 ft"
     },
     "notes": [
      "12"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Obstruction-Free Zone",
     "labelParts": [
      "Obstruction-Free Zone"
     ],
     "section": "55-5.02",
     "table": "main",
     "controlling": false,
     "key": "clearZone",
     "values": {
      "sub": "See Section 55-5.02",
      "int": "See Section 55-5.02",
      "bu": "See Section 55-5.02"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Typical Curbing Type, where used",
     "labelParts": [
      "Typical Curbing Type, where used (13)"
     ],
     "section": "55-5.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Vertical / Sloping",
      "int": "Vertical / Sloping",
      "bu": "Vertical / Sloping"
     },
     "notes": [
      "13"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Foreslope",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Cut",
      "Foreslope"
     ],
     "section": "55-5.0",
     "table": "main",
     "controlling": false,
     "key": "foreslope",
     "values": {
      "sub": "2:1 or Flatter (14)",
      "int": "2:1 or Flatter (14)",
      "bu": "N/A"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Ditch Width",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Cut",
      "Ditch Width"
     ],
     "section": "55-5.0",
     "table": "main",
     "controlling": false,
     "key": "ditchWidth",
     "values": {
      "sub": "(14)",
      "int": "(14)",
      "bu": "N/A"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Backslope",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Cut",
      "Backslope"
     ],
     "section": "55-5.0",
     "table": "main",
     "controlling": false,
     "key": "backslope",
     "values": {
      "sub": "2:1 or Flatter (14)",
      "int": "2:1 or Flatter (14)",
      "bu": "N/A"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Fill",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Fill"
     ],
     "section": "55-5.0",
     "table": "main",
     "controlling": false,
     "key": "fillSlope",
     "values": {
      "sub": "2:1 or Flatter (14)",
      "int": "2:1 or Flatter (14)",
      "bu": "N/A"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Curbed: Cut, Backslope",
     "labelParts": [
      "Side Slopes, Curbed",
      "Cut, Backslope"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "(15)",
      "int": "(15)",
      "bu": "(15)"
     },
     "notes": [
      "15"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Curbed: Fill",
     "labelParts": [
      "Side Slopes, Curbed",
      "Fill"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "2:1 or Flatter (14)",
      "int": "2:1 or Flatter (14)",
      "bu": "2:1 or Flatter (14)"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Structural Capacity",
     "labelParts": [
      "New or Reconstructed Bridge",
      "*Structural Capacity (16)"
     ],
     "section": "Ch. 403",
     "table": "main",
     "controlling": true,
     "values": {
      "sub": "HL-93",
      "int": "HL-93",
      "bu": "HL-93"
     },
     "notes": [
      "16"
     ]
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Clear-Roadway Width",
     "labelParts": [
      "New or Reconstructed Bridge",
      "Clear-Roadway Width(17)"
     ],
     "section": "55-6.03",
     "table": "main",
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "newOrReconstructed",
     "values": {
      "sub": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: Full Approach Width",
      "int": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: Full Approach Width",
      "bu": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: Full Approach Width"
     },
     "notes": [
      "17"
     ]
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Structural Capacity",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "*Structural Capacity"
     ],
     "section": "Ch. 412",
     "table": "main",
     "controlling": true,
     "values": {
      "sub": "HS-20",
      "int": "HS-20",
      "bu": "HS-20"
     }
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Clear-Roadway Width",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "Clear-Roadway Width"
     ],
     "section": "55-6.02",
     "table": "main",
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "existingToRemain",
     "values": {
      "sub": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: Travelway Plus 2 ft. on Each Side",
      "int": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: Travelway Plus 2 ft. on Each Side",
      "bu": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: Travelway Plus 2 ft. on Each Side"
     }
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Under: New or Replaced Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Arterial Under",
      "New or Replaced Overpassing Bridge (18a & 18c)"
     ],
     "section": "44-4.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "newOrReplacedOverpass",
     "values": {
      "sub": "16.5 ft",
      "int": "16.5 ft (18b)",
      "bu": "16.5 ft (18b)"
     },
     "notes": [
      "18a",
      "18c",
      "18b"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Under: Existing Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Arterial Under",
      "Existing Overpassing Bridge (19)"
     ],
     "section": "44-4.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "existingOverpass",
     "values": {
      "sub": "14 ft",
      "int": "14 ft",
      "bu": "14 ft"
     },
     "notes": [
      "19"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Under: Sign Truss / Pedestrian Bridge",
     "labelParts": [
      "*Vertical Clearance, Arterial Under",
      "Sign Truss / Pedestrian Bridge (18a & 18c)"
     ],
     "section": "44-4.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "signTrussPedestrian",
     "values": {
      "sub": "New: 17.5 ft; Existing: 17.0 ft",
      "int": "New: 17.5 ft; Existing: 17.0 ft",
      "bu": "New: 17.5 ft; Existing: 17.0 ft"
     },
     "notes": [
      "18a",
      "18c"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial over Railroad",
     "labelParts": [
      "Vertical Clearance, Arterial over Railroad (20)"
     ],
     "section": "Ch. 402-6.01",
     "table": "main",
     "controlling": false,
     "key": "verticalClearance",
     "variant": "overRailroad",
     "values": {
      "sub": "23.0 ft",
      "int": "23.0 ft",
      "bu": "23.0 ft"
     },
     "notes": [
      "20"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Design Speed",
     "labelParts": [
      "Design Speed"
     ],
     "section": "---",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s25": "25 mph",
      "s30": "30 mph",
      "s35": "35 mph",
      "s45": "45 mph",
      "s50": "50 mph",
      "s55": "55 mph"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Stopping Sight Distance, Desirable",
     "labelParts": [
      "*Stopping Sight Distance, Desirable"
     ],
     "section": "55-4.02",
     "table": "alignment",
     "controlling": true,
     "key": "ssd",
     "values": {
      "s25": "155 ft",
      "s30": "200 ft",
      "s35": "250 ft",
      "s45": "360 ft",
      "s50": "425 ft",
      "s55": "495 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance: Speed / Path / Direction Change",
     "labelParts": [
      "Decision Sight Distance",
      "Speed / Path / Direction Change"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s25": "U: 515 ft; SU: 445 ft",
      "s30": "U: 620 ft; SU: 535 ft",
      "s35": "U: 720 ft; SU: 625 ft",
      "s45": "U: 930 ft; SU: 800 ft",
      "s50": "U: 1030 ft; SU: 890 ft",
      "s55": "U: 1135 ft; SU: 980 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance: Stop Maneuver",
     "labelParts": [
      "Decision Sight Distance",
      "Stop Maneuver"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s25": "425 ft",
      "s30": "500 ft",
      "s35": "650 ft",
      "s45": "825 ft",
      "s50": "875 ft",
      "s55": "1075 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Intersection Sight Distance",
     "labelParts": [
      "Intersection Sight Distance (21)"
     ],
     "section": "55-4.06",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s25": "P: 280 ft; SUT: 350 ft",
      "s30": "P: 330 ft; SUT: 420 ft",
      "s35": "P:390 ft; SUT:490 ft",
      "s45": "P: 500 ft; SUT: 630 ft",
      "s50": "P: 630 ft; SUT: 780 ft",
      "s55": "P: 730 ft; SUT: 890 ft"
     },
     "notes": [
      "21"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Radius",
     "labelParts": [
      "*Minimum Radius"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "key": "minRadius",
     "values": {
      "s25": "See Section 55-4.03",
      "s30": "See Section 55-4.03",
      "s35": "See Section 55-4.03",
      "s45": "See Section 55-4.03",
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Superelevation Rate",
     "labelParts": [
      "*Superelevation Rate"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "key": "emax",
     "values": {
      "s25": "See Section 55-4.03",
      "s30": "See Section 55-4.03",
      "s35": "See Section 55-4.03",
      "s45": "See Section 55-4.03",
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Horizontal Sight Distance",
     "labelParts": [
      "*Horizontal Sight Distance"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "values": {
      "s25": "See Section 55-4.03",
      "s30": "See Section 55-4.03",
      "s35": "See Section 55-4.03",
      "s45": "See Section 55-4.03",
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Crest",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Crest"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "crestK",
     "values": {
      "s25": "See Section 55-4.04",
      "s30": "See Section 55-4.04",
      "s35": "See Section 55-4.04",
      "s45": "See Section 55-4.04",
      "s50": "See Section 55-4.04",
      "s55": "See Section 55-4.04"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Sag",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Sag"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "sagK",
     "values": {
      "s25": "See Section 55-4.04",
      "s30": "See Section 55-4.04",
      "s35": "See Section 55-4.04",
      "s45": "See Section 55-4.04",
      "s50": "See Section 55-4.04",
      "s55": "See Section 55-4.04"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Level",
     "labelParts": [
      "*Maximum Grade",
      "Level"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "maxGrade",
     "terrain": "level",
     "values": {
      "s25": "11%",
      "s30": "10%",
      "s35": "9%",
      "s45": "8.5%",
      "s50": "8%",
      "s55": "7%"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Rolling",
     "labelParts": [
      "*Maximum Grade",
      "Rolling"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "maxGrade",
     "terrain": "rolling",
     "values": {
      "s25": "12%",
      "s30": "11%",
      "s35": "10%",
      "s45": "9.5%",
      "s50": "9%",
      "s55": "8%"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Grade",
     "labelParts": [
      "Minimum Grade"
     ],
     "section": "44-1.03",
     "table": "alignment",
     "controlling": false,
     "key": "minGrade",
     "values": {
      "s25": "Curbed Des: 0.5%; Curbed Min: 0.3% Uncurbed: 0.0%",
      "s30": "Curbed Des: 0.5%; Curbed Min: 0.3% Uncurbed: 0.0%",
      "s35": "Curbed Des: 0.5%; Curbed Min: 0.3% Uncurbed: 0.0%",
      "s45": "Curbed Des: 0.5%; Curbed Min: 0.3% Uncurbed: 0.0%",
      "s50": "Curbed Des: 0.5%; Curbed Min: 0.3% Uncurbed: 0.0%",
      "s55": "Curbed Des: 0.5%; Curbed Min: 0.3% Uncurbed: 0.0%"
     }
    }
   ],
   "legend": [
    "Des: Desirable; Min: Minimum.",
    "U: Urban; SU: Suburban. Des: Desirable; Min: Minimum.",
    "* Level One controlling criterion, see page 2 of 4"
   ],
   "footnotes": {
    "1": "Design Forecast Period. For a partial 3R project, the pavement should be designed for at least a 10 year design life.",
    "2": "Design Speed. The minimum design speed should equal the anticipated posted speed limit after construction or the legal speed limit on a non-posted highway. This is 30 mph, but with an engineering study it may be raised to a maximum of 55 mph.",
    "3": "On-Street Parking. In general, on-street parking is discouraged.",
    "4": "Travel Lane, Width. For an arterial on the National Truck Network, the right lane must be 12 ft in width. For a non-National-Truck-Network route, a minimum 11 ft travel lane should be used where truck volume exceeds 200 trucks per day. See Section 55-4.05.",
    "5": "Surface Type. The pavement-type selection will be determined by the Office of Pavement Engineering or by the local jurisdiction.",
    "6": "Curb Offset. The curb offset should be 2 ft. Vertical curbs which are either continuous or introduced intermittently may be offset 1 ft.",
    "7": "Shoulder Width. The value applies to paved-shoulder width. The following will also apply: a. For an uncurbed section, the shoulder is paved to the face of guardrail. The desirable guardrail offset is 2 ft from the usable shoulder width. See Section 49-4.0 for more information. b. For an uncurbed section, a desirable additional 1 ft of compacted aggregate will be provided. c. If guardrail is present, the minimum offset from E.T.L. to face of guardrail should desirably be equal to the shy-line offset distance, but not less than 4 ft (see Section 49-4.0 for shy-line offsets). In a restrictive situation, the guardrail offset may be 0 ft from the usable shoulder width. d. For a curbed section, the curb offset is included in the paved shoulder width.",
    "8": "Cross Slope, Travel Lane. Cross slopes of 1.5% are acceptable on an existing bridge to remain in place.",
    "9": "Cross Slope, Shoulder. Value is for a tangent section. See Figure 45-1A(1) or Figure 45-1A(2) for more-specific information. See Figure 305-4N for shoulder cross slope on a horizontal curve.",
    "10": "Parking-Lane Width. The following will apply: a. Where the parking lane will be used as a travel lane during peak hours or may be converted to a travel lane in the future, the width should be equal to the travel lane width plus the curb offset width (if present). b. A parking lane for residential usage may be 7 ft narrower. c. The cross slope for a parking lane is typically 1% steeper than that for the adjacent travel lane. A buffer strip of 4 ft or wider is desirable.",
    "11": "Sidewalk Width. Value is for the installation of a new sidewalk. An existing sidewalk width of 3 ft or greater (with or without a buffer) may be retained. A buffer strip of 4 ft or wider is desirable.",
    "12": "Bicycle-Lane Width. The width is in addition to the width of parking lane, if present. See Section 51-7.0 for additional details.",
    "13": "Side Slopes. Section 55-4.05 provides additional information for side-slope criteria.",
    "14": "Side Slopes, Curbed, Cut. A shelf or sidewalk will be present immediately behind the curb before the toe of the backslope. The minimum width of a shelf desirably should be 6 ft. Where a sidewalk is present, the toe of the backslope will be 1 ft beyond the edge of sidewalk. See Section 45-3.0 for more information.",
    "16": "Structural Capacity, New or Reconstructed Bridge. The following will apply: a. Each State-highway bridge within 15 mi of a Toll-Road gate must be designed for Toll-Road loading. b. Each bridge on an Extra-Heavy-Duty Highway must be designed for the Michigan Train truck loading configuration.",
    "17": "Width, New or Reconstructed Bridge. See Section 402-6.02(01) for more information. On a State highway, the minimum clear-roadway width should be 30 ft. Otherwise, the clear-roadway width is the algebraic sum of the following: a. the approach traveled way width; b. the approach usable shoulder width without guardrail; and c. a bridge-railing offset (see Figure 402-6H).",
    "18": "Vertical Clearance, Arterial Under Railroad. The following will apply: a. Value includes an additional 6 in. allowance for a future pavement overlay. b. In a highly-urbanized area, a minimum clearance of 14.0 ft may be provided if there is at least one route with a 16.0 ft clearance. c. Vertical clearance applies from usable edge to usable edge of shoulder.",
    "19": "Vertical Clearance, Existing Bridge. See 55-6.02 for additional information on minimum allowable vertical clearance.",
    "20": "Vertical Clearance, Arterial Over Railroad. See Section 402-6.01(03) for additional information on railroad clearance under a highway.",
    "21": "Intersection Sight Distance. For left turn onto a 2-lane road, P = Passenger car; SUT = single unit truck. See Figure 46-10G for value for a combination truck",
    "*": "Level One controlling criterion. Except as noted in this chapter, the values shown in AASHTO's A Policy on Geometric Design of Highways and Streets (the Green Book) may be used as minimum values if they are lower than similar values shown herein. A controlling criterion that does not meet the minimum value is a design exception and is subject to approval. A streamlined design exception may be used for 3R projects. See Section 40-8.0 for low speed and high speed applications."
   },
   "transcriptionNotes": [
    "Footnote numbering does not match the table: the table cites (13) for curbing type, (14) for side slopes and (15) for curbed cut backslope, but the footnote pages print (13) 'Side Slopes', (14) 'Side Slopes, Curbed, Cut', and have no (15); there is no curbing-type footnote. Footnotes are stored as printed.",
    "Access Control cites Section '40-5.01' (others '40-5.0'); Typical Curbing Type and Side Slopes, Uncurbed cite '55-5.0'; vertical clearance rows cite '44-4.0' (Figures 55-3A to 55-3E/55-3G cite 55-6.0).",
    "Existing overpassing bridge vertical clearance printed '14 ft' (others '14.0 ft').",
    "Decision Sight Distance, Stop Maneuver values (425/500/650/825/875/1075 ft) differ from Figures 55-3E, 55-3G and 55-3H (e.g., 30 mph: 500 vs 490 ft; 50 mph: 875 vs 910 ft).",
    "Footnote (10)b reads '7 ft narrower' (as printed).",
    "No Passing Sight Distance row; no 40 mph column."
   ]
  },
  {
   "id": "55-3G",
   "title": "Geometric Design Criteria for Urban Collector, 3R Project",
   "printedTitle": "GEOMETRIC DESIGN CRITERIA FOR URBAN COLLECTOR, 3R PROJECT",
   "revision": "Rev. Jul 2014",
   "pdfPages": [
    76,
    77,
    78,
    79
   ],
   "facility": "Urban Collector",
   "area": "urban",
   "columns": [
    {
     "key": "sub",
     "label": "Design Values (By Type of Area): Suburban",
     "conditions": {
      "subcategory": "suburban"
     },
     "table": "main"
    },
    {
     "key": "int",
     "label": "Design Values (By Type of Area): Intermediate",
     "conditions": {
      "subcategory": "intermediate"
     },
     "table": "main"
    },
    {
     "key": "bu",
     "label": "Design Values (By Type of Area): Built-Up",
     "conditions": {
      "subcategory": "built-up"
     },
     "table": "main"
    },
    {
     "key": "s25",
     "label": "Alignment Elements: Design Speed 25 mph",
     "conditions": {
      "designSpeed": [
       25,
       25
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s30",
     "label": "Alignment Elements: Design Speed 30 mph",
     "conditions": {
      "designSpeed": [
       30,
       30
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s35",
     "label": "Alignment Elements: Design Speed 35 mph",
     "conditions": {
      "designSpeed": [
       35,
       35
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s45",
     "label": "Alignment Elements: Design Speed 45 mph",
     "conditions": {
      "designSpeed": [
       45,
       45
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s50",
     "label": "Alignment Elements: Design Speed 50 mph",
     "conditions": {
      "designSpeed": [
       50,
       50
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s55",
     "label": "Alignment Elements: Design Speed 55 mph",
     "conditions": {
      "designSpeed": [
       55,
       55
      ]
     },
     "table": "alignment"
    }
   ],
   "rows": [
    {
     "group": "Design Controls",
     "element": "Design Forecast Period",
     "labelParts": [
      "Design Forecast Period"
     ],
     "section": "55-4.01",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "20 Years (1)",
      "int": "20 Years (1)",
      "bu": "20 Years (1)"
     },
     "notes": [
      "1"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Design Speed, mph",
     "labelParts": [
      "*Design Speed, mph (2)"
     ],
     "section": "55-4.01",
     "table": "main",
     "controlling": true,
     "key": "designSpeed",
     "values": {
      "sub": "Posted Speed Limit",
      "int": "Posted Speed Limit",
      "bu": "Posted Speed Limit"
     },
     "notes": [
      "2"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Access Control",
     "labelParts": [
      "Access Control"
     ],
     "section": "40-5.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "None",
      "int": "None",
      "bu": "None"
     }
    },
    {
     "group": "Design Controls",
     "element": "Level of Service",
     "labelParts": [
      "Level of Service"
     ],
     "section": "40-2.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Desirable: C; Minimum: D",
      "int": "Desirable: C; Minimum: D",
      "bu": "Desirable: C; Minimum: D"
     }
    },
    {
     "group": "Design Controls",
     "element": "On-Street Parking",
     "labelParts": [
      "On-Street Parking"
     ],
     "section": "45-1.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Optional (3)",
      "int": "Optional (3)",
      "bu": "Optional (3)"
     },
     "notes": [
      "3"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Width",
     "labelParts": [
      "Travel Lane",
      "*Width (4)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "laneWidth",
     "values": {
      "sub": "Curbed: Des: 12 ft; Min: 10 ft; Uncurbed: Des: 12 ft; Min: 10 ft",
      "int": "Curbed: Des: 12 ft; Min: 10 ft; Uncurbed: Des: 12 ft; Min: 10 ft",
      "bu": "Curbed Des: 12 ft; Curbed Min: 10 ft"
     },
     "numeric": {
      "sub": {
       "curbed": {
        "des": 12,
        "min": 10
       },
       "uncurbed": {
        "des": 12,
        "min": 10
       }
      },
      "int": {
       "curbed": {
        "des": 12,
        "min": 10
       },
       "uncurbed": {
        "des": 12,
        "min": 10
       }
      },
      "bu": {
       "curbed": {
        "des": 12,
        "min": 10
       }
      }
     },
     "notes": [
      "4"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Typical Surface Type",
     "labelParts": [
      "Travel Lane",
      "Typical Surface Type (5)"
     ],
     "section": "Ch. 602",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete",
      "int": "Asphalt / Concrete",
      "bu": "Asphalt / Concrete"
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Curb Offset",
     "labelParts": [
      "*Curb Offset (6)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "curbOffset",
     "values": {
      "sub": "Des: 2 ft; Min: 1 ft",
      "int": "Des: 2 ft; Min: 1 ft",
      "bu": "Des: 2 ft; Min: 1 ft"
     },
     "numeric": {
      "sub": {
       "des": 2,
       "min": 1
      },
      "int": {
       "des": 2,
       "min": 1
      },
      "bu": {
       "des": 2,
       "min": 1
      }
     },
     "notes": [
      "6"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Paved Width",
     "labelParts": [
      "Shoulder",
      "*Paved Width (7)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "shoulderRightPaved",
     "values": {
      "sub": "Curbed Des: 8 ft; Min. 1 ft; Uncurbed: Des: 8 ft; Min. 4 ft",
      "int": "Curbed Des: 6 ft; Min. 1 ft; Uncurbed: Des: 6 ft; Min. 3 ft",
      "bu": "Des: 4 ft. Min: 2 ft"
     },
     "numeric": {
      "sub": {
       "curbed": {
        "des": 8,
        "min": 1
       },
       "uncurbed": {
        "des": 8,
        "min": 4
       }
      },
      "int": {
       "curbed": {
        "des": 6,
        "min": 1
       },
       "uncurbed": {
        "des": 6,
        "min": 3
       }
      },
      "bu": {
       "des": 4,
       "min": 2
      }
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Typical Surface Type",
     "labelParts": [
      "Shoulder",
      "Typical Surface Type (5)"
     ],
     "section": "Ch. 602",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete",
      "int": "Asphalt / Concrete",
      "bu": "Asphalt / Concrete"
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Travel Lane",
     "labelParts": [
      "Cross Slope",
      "*Travel Lane (8)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "travelLaneCrossSlope",
     "values": {
      "sub": "2%-3%",
      "int": "2%-3%",
      "bu": "2%-3%"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Shoulder",
     "labelParts": [
      "Cross Slope",
      "Shoulder (9)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "shoulderCrossSlope",
     "values": {
      "sub": "Paved Width <= 4 ft 2%-3%; Paved Width > 4 ft 4%-6%",
      "int": "Paved Width <= 4 ft: 2%-3%; Paved Width > 4 ft: 4%-6%",
      "bu": "Paved Width <= 4 ft: 2%-3%; Paved Width > 4 ft: 4%-6%"
     },
     "notes": [
      "9"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Lane Width",
     "labelParts": [
      "Auxiliary Lane",
      "Lane Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "auxLaneWidth",
     "values": {
      "sub": "Des: 12 ft; Min: 10 ft",
      "int": "Des: 12 ft; Min: 10 ft",
      "bu": "Des: 12 ft; Min: 9ft"
     },
     "numeric": {
      "sub": {
       "des": 12,
       "min": 10
      },
      "int": {
       "des": 12,
       "min": 10
      },
      "bu": {
       "des": 12,
       "min": 9
      }
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Curb Offset",
     "labelParts": [
      "Auxiliary Lane",
      "Curb Offset"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Des: 1 ft; Min: 0 ft",
      "int": "Des: 1 ft; Min: 0 ft",
      "bu": "Des: 1 ft; Min: 0 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Shoulder Width",
     "labelParts": [
      "Auxiliary Lane",
      "Shoulder Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Des: 8 ft; Min: 2 ft",
      "int": "Des: 6 ft; Min: 2 ft",
      "bu": "Des: 4 ft; Min: 2 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Typical Surface Type",
     "labelParts": [
      "Auxiliary Lane",
      "Typical Surface Type (5)"
     ],
     "section": "Ch. 602",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete",
      "int": "Asphalt / Concrete",
      "bu": "Asphalt / Concrete"
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "TWLTL Width",
     "labelParts": [
      "TWLTL Width"
     ],
     "section": "46-5.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Des: 16 ft; Min: 12 ft",
      "int": "Des: 14 ft; Min: 11 ft",
      "bu": "Des: 14 ft; Min: 10 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Parking-Lane Width",
     "labelParts": [
      "Parking-Lane Width"
     ],
     "section": "45-1.04",
     "table": "main",
     "controlling": false,
     "key": "parkingLaneWidth",
     "values": {
      "sub": "Des: 10 ft; Min: 8 ft",
      "int": "Des: 10 ft; Min: 8 ft (10)",
      "bu": "Des: 10 ft; Min: 8 ft (10)"
     },
     "notes": [
      "10"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Median Width: Raised Island",
     "labelParts": [
      "Median Width",
      "Raised Island"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "medianWidth",
     "variant": "raisedIsland",
     "values": {
      "sub": "Des: 16 ft; Min: 2 ft",
      "int": "Des: 16 ft; Min: 2 ft",
      "bu": "Des: 16 ft; Min: 2 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Median Width: Flush / Corrugated",
     "labelParts": [
      "Median Width",
      "Flush / Corrugated"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "medianWidth",
     "variant": "flushCorrugated",
     "values": {
      "sub": "Des: 16 ft; Min: 2 ft",
      "int": "Des: 16 ft; Min: 2 ft",
      "bu": "Des: 16 ft; Min: 2 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Sidewalk Width",
     "labelParts": [
      "Sidewalk Width (11)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "4 ft with 5 ft Buffer (Des)",
      "int": "Des: 6 ft; Min: 4 ft",
      "bu": "Des: 6 ft; Min: 4 ft"
     },
     "notes": [
      "11"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Bicycle-Lane Width",
     "labelParts": [
      "Bicycle-Lane Width (12)"
     ],
     "section": "51-7.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Curbed: 5 ft; Uncurbed: Shld. Width +4 ft",
      "int": "Curbed: 5 ft; Uncurbed: Shld. Width +4 ft",
      "bu": "Curbed: 5 ft"
     },
     "notes": [
      "12"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Obstruction-Free-Zone Width",
     "labelParts": [
      "Obstruction-Free-Zone Width"
     ],
     "section": "55-5.02",
     "table": "main",
     "controlling": false,
     "key": "clearZone",
     "values": {
      "sub": "See Section 55-5.02",
      "int": "See Section 55-5.02",
      "bu": "See Section 55-5.02"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Typical Curbing Type, where used",
     "labelParts": [
      "Typical Curbing Type, where used (13)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Vertical / Sloping",
      "int": "Vertical / Sloping",
      "bu": "Vertical / Sloping"
     },
     "notes": [
      "13"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Foreslope",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Cut",
      "Foreslope"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "foreslope",
     "values": {
      "sub": "2:1 or Flatter (14)",
      "int": "2:1 or Flatter (14)",
      "bu": "N/A"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Ditch Width",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Cut",
      "Ditch Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "ditchWidth",
     "values": {
      "sub": "(14)",
      "int": "(14)",
      "bu": "N/A"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Backslope",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Cut",
      "Backslope"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "backslope",
     "values": {
      "sub": "2:1 or Flatter (14)",
      "int": "2:1 or Flatter (14)",
      "bu": "N/A"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Fill",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Fill"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "fillSlope",
     "values": {
      "sub": "2:1 or Flatter (14)",
      "int": "2:1 or Flatter (14)",
      "bu": "N/A"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Curbed: Cut, Backslope",
     "labelParts": [
      "Side Slopes, Curbed",
      "Cut, Backslope"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "(15)",
      "int": "(15)",
      "bu": "(15)"
     },
     "notes": [
      "15"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Curbed: Fill",
     "labelParts": [
      "Side Slopes, Curbed",
      "Fill"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "2:1 or Flatter (14)",
      "int": "2:1 or Flatter (14)",
      "bu": "2:1 or Flatter (14)"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Structural Capacity",
     "labelParts": [
      "New or Reconstructed Bridge",
      "*Structural Capacity (16)"
     ],
     "section": "Ch. 403",
     "table": "main",
     "controlling": true,
     "values": {
      "sub": "HL-93",
      "int": "HL-93",
      "bu": "HL-93"
     },
     "notes": [
      "16"
     ]
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Clear-Roadway Width",
     "labelParts": [
      "New or Reconstructed Bridge",
      "Clear-Roadway Width(17)"
     ],
     "section": "55-6.03",
     "table": "main",
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "newOrReconstructed",
     "values": {
      "sub": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: Full Approach Paved Width",
      "int": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: Full Approach Paved Width",
      "bu": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: Full Approach Paved Width"
     },
     "notes": [
      "17"
     ]
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Structural Capacity",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "*Structural Capacity"
     ],
     "section": "Ch. 412",
     "table": "main",
     "controlling": true,
     "values": {
      "sub": "HS-15",
      "int": "HS-15",
      "bu": "HS-15"
     }
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Clear-Roadway Width",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "Clear-Roadway Width"
     ],
     "section": "55-6.02",
     "table": "main",
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "existingToRemain",
     "values": {
      "sub": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: Travelway Plus 2 ft on Each Side",
      "int": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: Travelway Plus 2 ft on Each Side",
      "bu": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: Travelway + 1 ft on Each Side"
     }
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector under: New or Replaced Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Collector under",
      "New or Replaced Overpassing Bridge (18)"
     ],
     "section": "55-6.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "newOrReplacedOverpass",
     "values": {
      "sub": "14.5 ft",
      "int": "14.5 ft",
      "bu": "14.5 ft"
     },
     "notes": [
      "18"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector under: Existing Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Collector under",
      "Existing Overpassing Bridge (19)"
     ],
     "section": "55-6.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "existingOverpass",
     "values": {
      "sub": "14.0 ft",
      "int": "14.0 ft",
      "bu": "14.0 ft"
     },
     "notes": [
      "19"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector over Railroad",
     "labelParts": [
      "Vertical Clearance, Collector over Railroad (20)"
     ],
     "section": "Ch.402-6.01",
     "table": "main",
     "controlling": false,
     "key": "verticalClearance",
     "variant": "overRailroad",
     "values": {
      "sub": "23.0 ft",
      "int": "23.0 ft",
      "bu": "23.0 ft"
     },
     "notes": [
      "20"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Design Speed",
     "labelParts": [
      "Design Speed"
     ],
     "section": "",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s25": "25 mph",
      "s30": "30 mph",
      "s35": "35 mph",
      "s45": "45 mph",
      "s50": "50 mph",
      "s55": "55 mph"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Stopping Sight Distance, Desirable",
     "labelParts": [
      "*Stopping Sight Distance, Desirable"
     ],
     "section": "55-4.02",
     "table": "alignment",
     "controlling": true,
     "key": "ssd",
     "values": {
      "s25": "155 ft",
      "s30": "200 ft",
      "s35": "250 ft",
      "s45": "360 ft",
      "s50": "425 ft",
      "s55": "495 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance: Speed / Path / Direction Change",
     "labelParts": [
      "Decision Sight Distance",
      "Speed / Path / Direction Change"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s25": "U: 515 ft; SU: 445 ft",
      "s30": "U: 620 ft; SU: 535 ft",
      "s35": "U: 720 ft; SU: 625 ft",
      "s45": "U: 930 ft; SU: 800 ft",
      "s50": "U: 1030 ft; SU: 890 ft",
      "s55": "U: 1135 ft; SU: 980 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance: Stop Maneuver",
     "labelParts": [
      "Decision Sight Distance",
      "Stop Maneuver"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s25": "430 ft",
      "s30": "490 ft",
      "s35": "590 ft",
      "s45": "800 ft",
      "s50": "910 ft",
      "s55": "1030 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Intersection Sight Distance, -3% to +3%",
     "labelParts": [
      "Intersection Sight Distance, -3% to +3% (22)"
     ],
     "section": "55-4.06",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s25": "P: 280 ft; SUT: 350 ft",
      "s30": "P: 330 ft; SUT: 420 ft",
      "s35": "P: 390 ft; SUT: 490 ft",
      "s45": "P: 500 ft; SUT: 630 ft",
      "s50": "P: 630 ft; SUT: 780 ft",
      "s55": "P: 730 ft; SUT:890 ft"
     },
     "notes": [
      "22"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Radius",
     "labelParts": [
      "*Minimum Radius"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "key": "minRadius",
     "values": {
      "s25": "See Section 55-4.05",
      "s30": "See Section 55-4.05",
      "s35": "See Section 55-4.05",
      "s45": "See Section 55-4.05",
      "s50": "See Section 55-4.05",
      "s55": "See Section 55-4.05"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Superelevation Rate",
     "labelParts": [
      "*Superelevation Rate"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "key": "emax",
     "values": {
      "s25": "See Section 55-4.05",
      "s30": "See Section 55-4.05",
      "s35": "See Section 55-4.05",
      "s45": "See Section 55-4.05",
      "s50": "See Section 55-4.05",
      "s55": "See Section 55-4.05"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Horizontal Sight Distance",
     "labelParts": [
      "*Horizontal Sight Distance"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "values": {
      "s25": "See Section 55-4.05",
      "s30": "See Section 55-4.05",
      "s35": "See Section 55-4.05",
      "s45": "See Section 55-4.05",
      "s50": "See Section 55-4.05",
      "s55": "See Section 55-4.05"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Crest",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Crest"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "crestK",
     "values": {
      "s25": "See Section 55-4.04",
      "s30": "See Section 55-4.04",
      "s35": "See Section 55-4.04",
      "s45": "See Section 55-4.04",
      "s50": "See Section 55-4.04",
      "s55": "See Section 55-4.04"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Sag",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Sag"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "sagK",
     "values": {
      "s25": "See Section 55-4.04",
      "s30": "See Section 55-4.04",
      "s35": "See Section 55-4.04",
      "s45": "See Section 55-4.04",
      "s50": "See Section 55-4.04",
      "s55": "See Section 55-4.04"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Level",
     "labelParts": [
      "*Maximum Grade (21)",
      "Level"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "maxGrade",
     "terrain": "level",
     "values": {
      "s25": "11%",
      "s30": "11%",
      "s35": "11%",
      "s45": "10%",
      "s50": "9%",
      "s55": "8%"
     },
     "notes": [
      "21"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Rolling",
     "labelParts": [
      "*Maximum Grade (21)",
      "Rolling"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "maxGrade",
     "terrain": "rolling",
     "values": {
      "s25": "14%",
      "s30": "13%",
      "s35": "12%",
      "s45": "11%",
      "s50": "10%",
      "s55": "9%"
     },
     "notes": [
      "21"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Grade",
     "labelParts": [
      "Minimum Grade"
     ],
     "section": "44-1.03",
     "table": "alignment",
     "controlling": false,
     "key": "minGrade",
     "values": {
      "s25": "Curbed Des: 0.5%; Curbed Min: 0.3%; Uncurbed: 0.0%",
      "s30": "Curbed Des: 0.5%; Curbed Min: 0.3%; Uncurbed: 0.0%",
      "s35": "Curbed Des: 0.5%; Curbed Min: 0.3%; Uncurbed: 0.0%",
      "s45": "Curbed Des: 0.5%; Curbed Min: 0.3%; Uncurbed: 0.0%",
      "s50": "Curbed Des: 0.5%; Curbed Min: 0.3%; Uncurbed: 0.0%",
      "s55": "Curbed Des: 0.5%; Curbed Min: 0.3%; Uncurbed: 0.0%"
     }
    }
   ],
   "legend": [
    "Des: Desirable; Min: Minimum.",
    "SU: Suburban; U: Urban. Des: Desirable; Min: Minimum.",
    "* Level One controlling criterion, see page 2 of 4"
   ],
   "footnotes": {
    "1": "Design Forecast Period. For a partial 3R project, the pavement should be designed for at least a 10 year design life.",
    "2": "Design Speed. The minimum design speed should equal the anticipated posted speed limit after construction or the legal speed limit on a non-posted highway. This is 30 mph, but with an engineering study it may be raised to a maximum of 55 mph.",
    "3": "On-Street Parking. In general, on-street parking is discouraged.",
    "4": "Travel Lane, Width. A minimum 11 ft travel lane should be used where truck volume exceeds 200 trucks per day. See Section 55-4.05.",
    "5": "Surface Type. The pavement-type selection will be determined by the Office of Pavement Engineering or by the local jurisdiction.",
    "6": "Curb Offset. The curb offset should be 2 ft. Vertical curbs which are either continuous or introduced intermittently should be offset 1 ft.",
    "7": "Shoulder Width. The value applies to paved-shoulder width. The following will also apply: a. For an uncurbed section, the shoulder is paved to the face of guardrail. The desirable guardrail offset is 2 ft from the usable shoulder width. See Section 49-4.0 for more information. b. For an uncurbed section, a desirable additional 1 ft of compacted aggregate will be provided. c. If guardrail is present, the minimum offset from the E.T.L. to face of guardrail should desirably be equal to the shy-line offset distance, but not less than 4 ft (see Section 49-4.0 for shy-line offsets). In a restrictive situation, the guardrail offset may be 0 ft from the usable shoulder width. d. For a curbed section, the curb offset is included in the paved shoulder width.",
    "8": "Cross Slope, Travel Lane. Cross slopes of 1.5% are acceptable on an existing bridge to remain in place.",
    "9": "Cross Slope, Shoulder. Value is for a tangent section. See Figure 45-1A(1) or Figure 45-1A(2) for more specific information. See Figure 305-4N for shoulder cross slope on a horizontal curve.",
    "10": "Parking-Lane Width. A parking lane for residential usage may be 7 ft or less. The cross slope for a parking lane is typically 1% steeper than that for the adjacent travel lane. In a residential area, a parallel parking lane from 7 to 8 ft in width should be provided on one or both sides of the street. In a commercial or industrial area, the parking-lane width should range from 8 to 11 ft, and should usually be provided on both sides of the street. Where curb-and-gutter sections are used, the gutter-pan width may be considered as part of the parking-lane width. Where practical, the parking-lane width should be in addition to the gutter-pan width.",
    "11": "Sidewalk Width. Value is for the installation of a new sidewalk. An existing sidewalk width of 3 ft or greater (with or without a buffer) may be retained. A buffer strip of 4 ft or wider is more desirable.",
    "12": "Bicycle-Lane Width. The width is in addition to the width of parking lane, if present. See Section 51-7.0 for additional details.",
    "13": "Curbing Type. Vertical curbs may only be used with design speed lower than 50 mph.",
    "14": "Side Slopes. Section 55-4.05 provides additional information for side-slope criteria.",
    "15": "Side Slope, Curbed, Cut. A shelf or sidewalk will be present immediately behind the curb before the toe of the backslope. The minimum width of a shelf desirably should be 6 ft. Where a sidewalk is present, the toe of the backslope will be 1 ft beyond the edge of sidewalk. See Section 45-3.0 for more information.",
    "16": "Structural Capacity, New or Reconstructed Bridge. The following will apply: a. Each State-highway bridge within 15 mi of a Toll-Road gate must be designed for Toll-Road loading. b. Each bridge on an Extra-Heavy-Duty Highway must be designed for the Michigan Train truck loading configuration.",
    "17": "Width, New or Reconstructed Bridge. See Section 402-6.02(01) for more information. On a State highway, the minimum clear-roadway width should be 30 ft. Otherwise, the clear roadway width is the algebraic sum of the following: a. the approach traveled way width; b. the approach usable shoulder width without guardrail; and c. a bridge-railing offset (see Figure 402-6H).",
    "18": "Vertical Clearance, Collector Under Railroad. Value includes an additional 6 in. allowance for a future pavement overlay. Vertical clearance applies from usable edge to usable edge of shoulder.",
    "19": "Vertical Clearance, Existing Bridge. See Section 55-6.02 for additional information on minimum allowable vertical clearance.",
    "20": "Vertical Clearance, Arterial Over Railroad. See Chapter 402-6.01(03) for additional information on railroad clearance under a highway.",
    "21": "Maximum Grades. For a grade of less than 500 ft in length (PVT to PVC), a one-way downgrade, or a street with AADT < 400, the maximum grade may be 2% steeper than the value. Where adjacent sidewalks are present, the maximum desirable grade is 5%.",
    "22": "Intersection Sight Distance. For left turn onto a 2-lane road, P = Passenger car; SUT = single unit truck. See Figure 46-10G for value for a combination truck.",
    "*": "Level One controlling criterion. Except as noted in this chapter, the values shown in AASHTO's A Policy on Geometric Design of Highways and Streets (the Green Book) may be used as minimum values if they are lower than similar values shown herein. A controlling criterion that does not meet the minimum value is a design exception and is subject to approval. A streamlined design exception may be used for 3R projects. See Section 40-8.0 for low speed and high speed applications."
   },
   "transcriptionNotes": [
    "Minimum Radius, Superelevation Rate and Horizontal Sight Distance cells read 'See Section 55-4.05' while the Manual Section column says 55-4.03 (other figures say 'See Section 55-4.03').",
    "Footnote (20) is titled 'Vertical Clearance, Arterial Over Railroad' in this collector figure; footnote (18) is titled 'Collector Under Railroad'.",
    "Suburban Parking-Lane Width has no (10) marker while Intermediate and Built-Up do.",
    "No Depressed median row and no Median Slopes row (unlike Figure 55-3E).",
    "Footnote (10) says a residential parking lane 'may be 7 ft or less'.",
    "No Passing Sight Distance row; no 40 mph column; Design Speed row has no Manual Section entry."
   ]
  },
  {
   "id": "55-3H",
   "title": "Geometric Design Criteria for Urban Local Street, 3R Project",
   "printedTitle": "GEOMETRIC DESIGN CRITERIA FOR URBAN LOCAL STREET, 3R PROJECT",
   "revision": "Rev. Jul 2014",
   "pdfPages": [
    80,
    81,
    82,
    83
   ],
   "facility": "Urban Local Street",
   "area": "urban",
   "columns": [
    {
     "key": "sub",
     "label": "Design Values (By Type of Area): Suburban",
     "conditions": {
      "subcategory": "suburban"
     },
     "table": "main"
    },
    {
     "key": "int",
     "label": "Design Values (By Type of Area): Intermediate",
     "conditions": {
      "subcategory": "intermediate"
     },
     "table": "main"
    },
    {
     "key": "bu",
     "label": "Design Values (By Type of Area): Built-Up",
     "conditions": {
      "subcategory": "built-up"
     },
     "table": "main"
    },
    {
     "key": "s25",
     "label": "Alignment Elements: Design Speed 25 mph",
     "conditions": {
      "designSpeed": [
       25,
       25
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s30",
     "label": "Alignment Elements: Design Speed 30 mph",
     "conditions": {
      "designSpeed": [
       30,
       30
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s35",
     "label": "Alignment Elements: Design Speed 35 mph",
     "conditions": {
      "designSpeed": [
       35,
       35
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s45",
     "label": "Alignment Elements: Design Speed 45 mph",
     "conditions": {
      "designSpeed": [
       45,
       45
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s50",
     "label": "Alignment Elements: Design Speed 50 mph",
     "conditions": {
      "designSpeed": [
       50,
       50
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s55",
     "label": "Alignment Elements: Design Speed 55 mph",
     "conditions": {
      "designSpeed": [
       55,
       55
      ]
     },
     "table": "alignment"
    }
   ],
   "rows": [
    {
     "group": "Design Controls",
     "element": "Design Forecast Period",
     "labelParts": [
      "Design Forecast Period"
     ],
     "section": "55-4.01",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "20 Years (1)",
      "int": "20 Years (1)",
      "bu": "20 Years (1)"
     },
     "notes": [
      "1"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Design Speed, mph",
     "labelParts": [
      "*Design Speed, mph (2)"
     ],
     "section": "55-4.01",
     "table": "main",
     "controlling": true,
     "key": "designSpeed",
     "values": {
      "sub": "See Section 55-4.01",
      "int": "See Section 55-4.01",
      "bu": "See Section 55-4.01"
     },
     "notes": [
      "2"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Access Control",
     "labelParts": [
      "Access Control"
     ],
     "section": "40-5.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "None",
      "int": "None",
      "bu": "None"
     }
    },
    {
     "group": "Design Controls",
     "element": "Level of Service",
     "labelParts": [
      "Level of Service"
     ],
     "section": "40-2.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Desirable: C; Minimum: D",
      "int": "Desirable: C; Minimum: D",
      "bu": "Desirable: C; Minimum: D"
     }
    },
    {
     "group": "Design Controls",
     "element": "On-Street Parking",
     "labelParts": [
      "On-Street Parking"
     ],
     "section": "45-1.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Optional (3)",
      "int": "Optional",
      "bu": "Optional"
     },
     "notes": [
      "3"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Width",
     "labelParts": [
      "Travel Lane",
      "*Width (4)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "laneWidth",
     "values": {
      "sub": "Curbed: Des: 11 ft; Min: 10 ft; Uncurbed: Des: 11 ft; Min: 10 ft",
      "int": "Curbed: Des: 10 ft; Min: 9 ft; Uncurbed: Des: 11 ft; Min: 10 ft",
      "bu": "Curbed Des: 10 ft; Curbed Min: 9 ft"
     },
     "numeric": {
      "sub": {
       "curbed": {
        "des": 11,
        "min": 10
       },
       "uncurbed": {
        "des": 11,
        "min": 10
       }
      },
      "int": {
       "curbed": {
        "des": 10,
        "min": 9
       },
       "uncurbed": {
        "des": 11,
        "min": 10
       }
      },
      "bu": {
       "curbed": {
        "des": 10,
        "min": 9
       }
      }
     },
     "notes": [
      "4"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Typical Surface Type",
     "labelParts": [
      "Travel Lane",
      "Typical Surface Type"
     ],
     "section": "Ch. 602",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete",
      "int": "Asphalt / Concrete",
      "bu": "Asphalt / Concrete"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Curb Offset",
     "labelParts": [
      "*Curb Offset (5)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "curbOffset",
     "values": {
      "sub": "Des: 2 ft; Min: 1 ft",
      "int": "Des: 2 ft; Min: 1 ft",
      "bu": "Des: 2 ft; Min: 1 ft"
     },
     "numeric": {
      "sub": {
       "des": 2,
       "min": 1
      },
      "int": {
       "des": 2,
       "min": 1
      },
      "bu": {
       "des": 2,
       "min": 1
      }
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Usable Width",
     "labelParts": [
      "Shoulder",
      "*Usable Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "shoulderRightUsable",
     "values": {
      "sub": "Curbed Des: 4 ft; Min. 1 ft; Uncurbed: Des: 4 ft; Min. 2 ft",
      "int": "Curbed Des: 4 ft; Min. 1 ft; Uncurbed: Des: 4 ft; Min. 2 ft",
      "bu": "Des: 4 ft; Min: 2 ft"
     },
     "numeric": {
      "sub": {
       "curbed": {
        "des": 4,
        "min": 1
       },
       "uncurbed": {
        "des": 4,
        "min": 2
       }
      },
      "int": {
       "curbed": {
        "des": 4,
        "min": 1
       },
       "uncurbed": {
        "des": 4,
        "min": 2
       }
      },
      "bu": {
       "des": 4,
       "min": 2
      }
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Typical Surface Type",
     "labelParts": [
      "Shoulder",
      "Typical Surface Type"
     ],
     "section": "Ch. 602",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete / Aggregate / Earth",
      "int": "Asphalt / Concrete / Aggregate / Earth",
      "bu": "Asphalt / Concrete / Aggregate / Earth"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Travel Lane",
     "labelParts": [
      "Cross Slope",
      "*Travel Lane (6)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": true,
     "key": "travelLaneCrossSlope",
     "values": {
      "sub": "2%-3%",
      "int": "2%-3%",
      "bu": "2%-3%"
     },
     "notes": [
      "6"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Shoulder",
     "labelParts": [
      "Cross Slope",
      "Shoulder (7)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "shoulderCrossSlope",
     "values": {
      "sub": "2%-3% Asphalt / Concrete; 6%-8% Aggregate; 8% Earth",
      "int": "2%-3% Asphalt / Concrete; 6%-8% Aggregate; 8% Earth",
      "bu": "2%-3% asphalt / Concrete; 6%-8% Aggregate; 8% Earth"
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Lane Width",
     "labelParts": [
      "Auxiliary Lane",
      "Lane Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "auxLaneWidth",
     "values": {
      "sub": "Des: 11 ft; Min: 10 ft",
      "int": "Des: 11 ft; Min: 9 ft",
      "bu": "Des: 10 ft; Min: 9 ft"
     },
     "numeric": {
      "sub": {
       "des": 11,
       "min": 10
      },
      "int": {
       "des": 11,
       "min": 9
      },
      "bu": {
       "des": 10,
       "min": 9
      }
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Curb Offset",
     "labelParts": [
      "Auxiliary Lane",
      "Curb Offset"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Des: 1 ft; Min: 0 ft",
      "int": "Des: 1 ft; Min: 0 ft",
      "bu": "Des: 1 ft; Min: 0 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Shoulder Width",
     "labelParts": [
      "Auxiliary Lane",
      "Shoulder Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Des: 4 ft; Min: 1 ft",
      "int": "Des: 4 ft; Min: 1 ft",
      "bu": "Des: 4 ft; Min: 1 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Typical Surface Type",
     "labelParts": [
      "Auxiliary Lane",
      "Typical Surface Type"
     ],
     "section": "Ch. 602",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete / Aggregate / Earth",
      "int": "Asphalt / Concrete / Aggregate / Earth",
      "bu": "Asphalt / Concrete / Aggregate / Earth"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Parking-Lane Width",
     "labelParts": [
      "Parking-Lane Width (3)"
     ],
     "section": "45-1.04",
     "table": "main",
     "controlling": false,
     "key": "parkingLaneWidth",
     "values": {
      "sub": "Des: 9 ft; Min: 7 ft",
      "int": "Des: 9 ft; Min: 7 ft",
      "bu": "Des: 9 ft; Min: 7ft"
     },
     "notes": [
      "3"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Sidewalk Width",
     "labelParts": [
      "Sidewalk Width (8)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "4 ft with 5 ft Buffer (Des)",
      "int": "Des: 6 ft; Min: 4 ft",
      "bu": "Des: 6 ft; Min: 4 ft"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Bicycle-Lane Width",
     "labelParts": [
      "Bicycle-Lane Width (9)"
     ],
     "section": "51-7.0",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Curbed: 5 ft; Uncurbed: Shld. Width +4 ft",
      "int": "Curbed: 5 ft; Uncurbed: Shld. Width +4 ft",
      "bu": "Curbed: 5 ft"
     },
     "notes": [
      "9"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Obstruction-Free-Zone Width",
     "labelParts": [
      "Obstruction-Free-Zone Width"
     ],
     "section": "55-5.02",
     "table": "main",
     "controlling": false,
     "key": "clearZone",
     "values": {
      "sub": "See Section 55-5.02",
      "int": "See Section 55-5.02",
      "bu": "See Section 55-5.02"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Typical Curbing Type, where used",
     "labelParts": [
      "Typical Curbing Type, where used (5)"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "Vertical / Sloping",
      "int": "Vertical / Sloping",
      "bu": "Vertical / Sloping"
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Foreslope",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Cut",
      "Foreslope"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "foreslope",
     "values": {
      "sub": "2:1 or Flatter (10)",
      "int": "2:1 or Flatter (10)",
      "bu": "N/A"
     },
     "notes": [
      "10"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Ditch Width",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Cut",
      "Ditch Width"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "ditchWidth",
     "values": {
      "sub": "(10)",
      "int": "(10)",
      "bu": "N/A"
     },
     "notes": [
      "10"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Backslope",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Cut",
      "Backslope"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "backslope",
     "values": {
      "sub": "2:1 or Flatter (10)",
      "int": "2:1 or Flatter (10)",
      "bu": "N/A"
     },
     "notes": [
      "10"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Fill",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Fill"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "key": "fillSlope",
     "values": {
      "sub": "2:1 or Flatter (10)",
      "int": "2:1 or Flatter (10)",
      "bu": "N/A"
     },
     "notes": [
      "10"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Curbed: Cut, Backslope",
     "labelParts": [
      "Side Slopes, Curbed",
      "Cut, Backslope"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "(11)",
      "int": "(11)",
      "bu": "(11)"
     },
     "notes": [
      "11"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Curbed: Fill",
     "labelParts": [
      "Side Slopes, Curbed",
      "Fill"
     ],
     "section": "55-4.05",
     "table": "main",
     "controlling": false,
     "values": {
      "sub": "2:1 or Flatter (10)",
      "int": "2:1 of Flatter (10)",
      "bu": "2:1 or Flatter (10)"
     },
     "notes": [
      "10"
     ]
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Structural Capacity",
     "labelParts": [
      "New or Reconstructed Bridge",
      "*Structural Capacity"
     ],
     "section": "Ch. 403",
     "table": "main",
     "controlling": true,
     "values": {
      "sub": "HL-93",
      "int": "HL-93",
      "bu": "HL-93"
     }
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Clear-Roadway Width",
     "labelParts": [
      "New or Reconstructed Bridge",
      "Clear-Roadway Width"
     ],
     "section": "55-6.03",
     "table": "main",
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "newOrReconstructed",
     "values": {
      "sub": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: (12)",
      "int": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: (12)",
      "bu": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: (12)"
     },
     "notes": [
      "12"
     ]
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Structural Capacity",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "*Structural Capacity (13)"
     ],
     "section": "Ch. 412",
     "table": "main",
     "controlling": true,
     "values": {
      "sub": "HS-15",
      "int": "HS-15",
      "bu": "HS-15"
     },
     "notes": [
      "13"
     ]
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Clear-Roadway Width",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "Clear-Roadway Width"
     ],
     "section": "55-6.02",
     "table": "main",
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "existingToRemain",
     "values": {
      "sub": "Existing Width (14)",
      "int": "Existing Width (14)",
      "bu": "Existing Width (14)"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Local Under: New or Replaced Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Local Under",
      "New or Replaced Overpassing Bridge (15)"
     ],
     "section": "44-4.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "newOrReplacedOverpass",
     "values": {
      "sub": "14.5 ft",
      "int": "14.5 ft",
      "bu": "14.5 ft"
     },
     "notes": [
      "15"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Local Under: Existing Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Local Under",
      "Existing Overpassing Bridge (16)"
     ],
     "section": "44-4.0",
     "table": "main",
     "controlling": true,
     "key": "verticalClearance",
     "variant": "existingOverpass",
     "values": {
      "sub": "14.0 ft",
      "int": "14.0 ft",
      "bu": "14.0 ft"
     },
     "notes": [
      "16"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Local over Railroad",
     "labelParts": [
      "Vertical Clearance, Local over Railroad (17)"
     ],
     "section": "Ch. 402-6.01",
     "table": "main",
     "controlling": false,
     "key": "verticalClearance",
     "variant": "overRailroad",
     "values": {
      "sub": "23.0 ft",
      "int": "23.0 ft",
      "bu": "23.0 ft"
     },
     "notes": [
      "17"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Design Speed",
     "labelParts": [
      "Design Speed"
     ],
     "section": "",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s25": "25 mph",
      "s30": "30 mph",
      "s35": "35 mph",
      "s45": "45 mph",
      "s50": "50 mph",
      "s55": "55 mph"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Stopping Sight Distance, Desirable",
     "labelParts": [
      "*Stopping Sight Distance, Desirable"
     ],
     "section": "55-4.02",
     "table": "alignment",
     "controlling": true,
     "key": "ssd",
     "values": {
      "s25": "155 ft",
      "s30": "200 ft",
      "s35": "250 ft",
      "s45": "360 ft",
      "s50": "425 ft",
      "s55": "495 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance: Speed / Path / Direction Change",
     "labelParts": [
      "Decision Sight Distance",
      "Speed / Path / Direction Change"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s25": "U: 515 ft; SU: 445 ft",
      "s30": "U: 620 ft; SU: 535 ft",
      "s35": "U: 720 ft; SU: 625 ft",
      "s45": "U: 930 ft; SU: 800 ft",
      "s50": "U: 1030 ft; SU: 890 ft",
      "s55": "U: 1135 ft; SU: 980 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance: Stop Maneuver",
     "labelParts": [
      "Decision Sight Distance",
      "Stop Maneuver"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s25": "430 ft",
      "s30": "490 ft",
      "s35": "590 ft",
      "s45": "800 ft",
      "s50": "910 ft",
      "s55": "1030 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Intersection Sight Distance, -3% to +3%",
     "labelParts": [
      "Intersection Sight Distance, -3% to +3% (18)"
     ],
     "section": "55-4.06",
     "table": "alignment",
     "controlling": false,
     "values": {
      "s25": "P: 280 ft; SUT: 350 ft",
      "s30": "P: 330 ft; SUT: 420 ft",
      "s35": "P: 390 ft; SUT: 490 ft",
      "s45": "P: 500 ft; SUT: 630 ft",
      "s50": "P: 550 ft; SUT: 780 ft",
      "s55": "P: 610 ft; SUT: 890 ft"
     },
     "notes": [
      "18"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Radius",
     "labelParts": [
      "*Minimum Radius"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "key": "minRadius",
     "values": {
      "s25": "See Section 55-4.03",
      "s30": "See Section 55-4.03",
      "s35": "See Section 55-4.03",
      "s45": "See Section 55-4.03",
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Superelevation Rate",
     "labelParts": [
      "*Superelevation Rate"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "key": "emax",
     "values": {
      "s25": "See Section 55-4.03",
      "s30": "See Section 55-4.03",
      "s35": "See Section 55-4.03",
      "s45": "See Section 55-4.03",
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Horizontal Sight Distance",
     "labelParts": [
      "*Horizontal Sight Distance"
     ],
     "section": "55-4.03",
     "table": "alignment",
     "controlling": true,
     "values": {
      "s25": "See Section 55-4.03",
      "s30": "See Section 55-4.03",
      "s35": "See Section 55-4.03",
      "s45": "See Section 55-4.03",
      "s50": "See Section 55-4.03",
      "s55": "See Section 55-4.03"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Crest",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Crest"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "crestK",
     "values": {
      "s25": "See Section 55-4.04",
      "s30": "See Section 55-4.04",
      "s35": "See Section 55-4.04",
      "s45": "See Section 55-4.04",
      "s50": "See Section 55-4.04",
      "s55": "See Section 55-4.04"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Sag",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Sag"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "sagK",
     "values": {
      "s25": "See Section 55-4.04",
      "s30": "See Section 55-4.04",
      "s35": "See Section 55-4.04",
      "s45": "See Section 55-4.04",
      "s50": "See Section 55-4.04",
      "s55": "See Section 55-4.04"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Level",
     "labelParts": [
      "*Maximum Grade",
      "Level"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "maxGrade",
     "terrain": "level",
     "values": {
      "s25": "In a residential area, the maximum grade should not exceed 15%. In an industrial or a commercial area, the maximum grade should not exceed 8%.",
      "s30": "In a residential area, the maximum grade should not exceed 15%. In an industrial or a commercial area, the maximum grade should not exceed 8%.",
      "s35": "In a residential area, the maximum grade should not exceed 15%. In an industrial or a commercial area, the maximum grade should not exceed 8%.",
      "s45": "In a residential area, the maximum grade should not exceed 15%. In an industrial or a commercial area, the maximum grade should not exceed 8%.",
      "s50": "In a residential area, the maximum grade should not exceed 15%. In an industrial or a commercial area, the maximum grade should not exceed 8%.",
      "s55": "In a residential area, the maximum grade should not exceed 15%. In an industrial or a commercial area, the maximum grade should not exceed 8%."
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Rolling",
     "labelParts": [
      "*Maximum Grade",
      "Rolling"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": true,
     "key": "maxGrade",
     "terrain": "rolling",
     "values": {
      "s25": "In a residential area, the maximum grade should not exceed 15%. In an industrial or a commercial area, the maximum grade should not exceed 8%.",
      "s30": "In a residential area, the maximum grade should not exceed 15%. In an industrial or a commercial area, the maximum grade should not exceed 8%.",
      "s35": "In a residential area, the maximum grade should not exceed 15%. In an industrial or a commercial area, the maximum grade should not exceed 8%.",
      "s45": "In a residential area, the maximum grade should not exceed 15%. In an industrial or a commercial area, the maximum grade should not exceed 8%.",
      "s50": "In a residential area, the maximum grade should not exceed 15%. In an industrial or a commercial area, the maximum grade should not exceed 8%.",
      "s55": "In a residential area, the maximum grade should not exceed 15%. In an industrial or a commercial area, the maximum grade should not exceed 8%."
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Grade",
     "labelParts": [
      "Minimum Grade"
     ],
     "section": "55-4.04",
     "table": "alignment",
     "controlling": false,
     "key": "minGrade",
     "values": {
      "s25": "Curbed Des: 0.5%; Curbed Min: 0.3% Uncurbed: 0.0%",
      "s30": "Curbed Des: 0.5%; Curbed Min: 0.3% Uncurbed: 0.0%",
      "s35": "Curbed Des: 0.5%; Curbed Min: 0.3% Uncurbed: 0.0%",
      "s45": "Curbed Des: 0.5%; Curbed Min: 0.3% Uncurbed: 0.0%",
      "s50": "Curbed Des: 0.5%; Curbed Min: 0.3% Uncurbed: 0.0%",
      "s55": "Curbed Des: 0.5%; Curbed Min: 0.3% Uncurbed: 0.0%"
     }
    }
   ],
   "legend": [
    "Des: Desirable; Min: Minimum.",
    "U: Urban; SU: Suburban. Des: Desirable; Min: Minimum.",
    "* Level One controlling criterion, see page 2 of 4"
   ],
   "footnotes": {
    "1": "Design Forecast Period. For a partial 3R project, the pavement should be designed for at least a 10 year design life.",
    "2": "Design Speed. The minimum design speed should equal the anticipated posted speed limit after construction or the legal speed limit on a non-posted highway. This is 30 mph, but with an engineering study it may be raised to a maximum of 55 mph.",
    "3": "On-Street Parking. In general, on-street parking is discouraged. However, if parking lanes are used, cross slopes are typically 1% steeper than that of the adjacent travel lane. In a residential area, a parallel parking lane from 7 to 8 ft in width should be provided on one or both sides of the street. In a commercial or industrial area, parking-lane width should range from 8 to 11 ft, and should usually be provided on both sides of the street. Where curb-and-gutter sections are used, the gutter-pan width may be considered as part of the parking-lane width. Where practical, the parking-lane width should be in addition to the gutter-pan width.",
    "4": "Travel Lane, Width. A minimum 11 ft travel lane should be used where truck volume exceeds 200 trucks per day. See Section 55-4.05.",
    "5": "Curb Offset. A vertical-curb offset should be 2 ft. Vertical curbs which are either continuous or introduced intermittently may be offset 1 ft. A sloping-curb offset may be zero. For a curbed section, the curb offset is included in the paved shoulder width. Vertical curbs may only be used with design speed lower than 50 mph.",
    "6": "Cross Slope, Travel Lane. Cross slopes of 1.5% are acceptable on an existing bridge to remain in place.",
    "7": "Cross Slope, Shoulder. Value is for a tangent section. See Section 305-4.06 for shoulder cross slopes on a horizontal curve.",
    "8": "Sidewalk Width. Value is for the installation of a new sidewalk. An existing sidewalk width of 3 ft or greater (with or without a buffer) may be retained. A buffer strip of 4 ft or wider is desirable.",
    "9": "Bicycle-Lane Width. The width is in addition to the width of parking lane, if present. See Section 51-7.0 for additional details.",
    "10": "Side Slopes. Section 55-4.05 provides additional information for side-slope criteria.",
    "11": "Side Slope, Curbed, Cut. A shelf or sidewalk will be present immediately behind the curb before the toe of the backslope. The minimum width of a shelf desirably should be 6 ft. Where a sidewalk is present, the toe of the backslope will be 1 ft beyond the edge of sidewalk. See Section 45-3.0 for more information.",
    "12": "Width, New or Reconstructed Bridge. See Section 402-6.2(01) for more information. The clear roadway width is the algebraic sum of the following: a. the approach traveled way width; b. the approach usable shoulder width without guardrail; and c. a bridge-railing offset (see Figure 402-6H).",
    "13": "Structural Capacity, Existing Bridge to Remain in Place. For a street with AADT <= 50, an HS-10 loading is acceptable.",
    "14": "Width, Existing Bridge to Remain in Place. If the width of the existing bridge is less than the approach travelway width, the bridge should be widened to at least the travelway width.",
    "15": "Vertical Clearance, Local Under. Value includes an additional 6 in. allowance for a future pavement overlay. Vertical clearance applies from usable edge to usable edge of shoulder.",
    "16": "Vertical Clearance, Existing Bridge. See Section 55-6.02 for additional information on minimum allowable vertical clearance.",
    "17": "Vertical Clearance, Local Over Railroad. See Chapter 402-6.01(03) for additional information on railroad clearance under a highway.",
    "18": "Intersection Sight Distance. For left turn onto a 2 lane road, P = Passenger car; SUT = single unit truck. See Figure 46-10G for value for a combination truck.",
    "*": "Level One controlling criterion. Except as noted in this chapter, the values shown in AASHTO's A Policy on Geometric Design of Highways and Streets (the Green Book) may be used as minimum values if they are lower than similar values shown herein. A controlling criterion that does not meet the minimum value is a design exception and is subject to approval. A streamlined design exception may be used for 3R projects. See Section 40-8.0 for low speed and high speed applications."
   },
   "figureNotes": [
    "This figure applies only to a federal-aid funded project."
   ],
   "transcriptionNotes": [
    "Footnote (5) is cited both by Curb Offset and Typical Curbing Type; Parking-Lane Width cites (3) (On-Street Parking).",
    "Intermediate Side Slopes, Curbed, Fill printed '2:1 of Flatter (10)'.",
    "Vertical clearance rows cite '44-4.0'; Minimum Grade cites '55-4.04' (other figures cite 44-1.03).",
    "Maximum Grade Level and Rolling share a single merged cell of text (repeated in both rows here).",
    "Intersection sight distance P values at 50/55 mph are 550/610 ft, versus 630/730 ft in Figures 55-3F and 55-3G.",
    "Footnote (12) cites 'Section 402-6.2(01)'.",
    "On-Street Parking: only Suburban carries the (3) marker.",
    "No Passing Sight Distance row; no 40 mph column; Design Speed row has no Manual Section entry."
   ]
  }
 ]
};
