/*
 * IDM Chapter 53 - Geometric Design Tables (New Construction/Reconstruction, 4R): Figures 53-1 to 53-9.
 * Transcribed from the INDOT 2013 Indiana Design Manual PDF (references/idm). See IDM.geom4R.conventions.
 */
window.IDM = window.IDM || {};
IDM.geom4R = {
 "source": {
  "chapter": "53",
  "title": "Geometric Design Tables (New Construction/Reconstruction)",
  "edition": "2013 Indiana Design Manual",
  "revision": "Design Memo 14-10, Jul. 2014",
  "file": "references/idm/Chapter_53_-_Geometric_Design_Tables_New_Construction_and_Reconstruction.pdf",
  "note": "Figures 53-1 through 53-9 (Section 53-1.0, Rev. Jul. 2014 per Design Memo 14-10), new construction / reconstruction (4R). The rotated landscape figure pages were read from the PDF text layer re-ordered into display order and cross-checked cell by cell against the rendered page images (spans and column placement from the images). Nothing was filled from AASHTO or memory. No cell was unreadable. Apparent IDM typos are kept as printed and listed in each figure's transcriptionNotes."
 },
 "conventions": [
  "Each figure has two column sets: table 'main' (page 1 and, for urban figures, the Bridges block on page 2; columns are rural/urban (53-1), design-year AADT ranges / lanes (53-2 to 53-5) or urban area types (53-6 to 53-9)) and table 'alignment' (page 2 Alignment Elements; columns are design speeds). Each column and row carries its table name; a row's values use the keys of its table's columns.",
  "conditions.adtMin is inclusive and conditions.adtMax exclusive, as printed (e.g. '400 <= AADT < 1500'); adtMinExclusive: true marks a printed '> 2000'. lanes: 2, lanesMin: 4, divided: true/false. designSpeed: [min, max] mph. area: 'rural'/'urban' (53-1 columns). subcategory: 'suburban' / 'intermediate' / 'built-up'. Figure 53-1 has area 'both' (rural and urban columns in one figure).",
  "element: row label with the printed hierarchy joined by ': ' (labelParts keeps the printed parts). The leading '*' (Level One controlling criterion) and footnote markers are removed from element and carried in controlling / notes. Cell text in values is as printed, including footnote markers.",
  "Cells printed on two lines are joined with '; ' (or a space where a line wraps after ';'). Spanning cells are repeated in each covered column. Unicode <= / >= are written '<=' / '>='; en dashes '-'; curly quotes straight; the subscripted e-max is written 'emax'. Line-wrap hyphenation inside row labels ('Reconstructe d', 'Re- Main') is rejoined.",
  "numeric (width rows only: laneWidth, shoulder*, auxLaneWidth, curbOffset): ft. { des, min }; a single printed value gives des = min = value with single: true; desText holds a non-numeric desirable value ('Same as ...'); left holds a left-shoulder value printed in the same cell (the main des/min are the right shoulder); curbed / uncurbed hold values printed separately for curbed and uncurbed sections. numericByKey holds a second keyed width printed in the same cell (53-1 right shoulder: usable 11 ft under the row key shoulderRightUsable, paved 10 ft under numericByKey.shoulderRightPaved). byLanes (53-1 left shoulder) holds values printed per number of lanes ('2 Lanes' / '3 Lanes'). Cells that are not widths ('Same as Travel Lane', 'Same as Next to Travel Lane') have no numeric entry.",
  "notes: footnote references found in the row labels and cells, in order. A lower-case letter suffix (e.g. '15c', '3b', '24a') points to that lettered item of the numbered footnote; '6A'-style keys (upper-case A) are separate footnotes; '**' is the double-asterisk note.",
  "Rows sharing a key are distinguished by terrain (designSpeed and maxGrade level/rolling) or variant (bridgeClearRoadwayWidth new/existing; verticalClearance new/existing/signTruss; medianWidth by median type; backslope and fillSlope uncurbed/curbed in urban figures; fillSlope by fill height in 53-5). The page-2 'Design Speed' row (column header of the alignment table) has no key.",
  "group is normalized to Design Controls / Cross-Section Elements / Bridges / Alignment Elements; printedGroup records a block label printed differently on the figure. pdfPage is the 1-based PDF page of the row.",
  "footnotes: numbered notes as printed on pages 3-4 of each figure (sub-items a., b., c. appended in order); '*' is the controlling-criterion note printed under the alignment table; '**' (53-2 only) is the divided-arterial note. legend: abbreviation / marker lines printed under the tables. applicability: the funding/route sentence printed on page 2. transcriptionNotes: apparent typos / inconsistencies in the IDM itself, recorded but not corrected."
 ],
 "figures": [
  {
   "id": "53-1",
   "title": "Geometric Design Criteria for Freeway",
   "revision": "Rev. Jul. 2014",
   "printedTitle": "GEOMETRIC DESIGN CRITERIA FOR FREEWAY, 4R PROJECT",
   "pdfPages": [
    7,
    8,
    9,
    10
   ],
   "facility": "Freeway",
   "area": "both",
   "isFreeway": true,
   "applicability": null,
   "columns": [
    {
     "key": "c1",
     "label": "Rural",
     "conditions": {
      "area": "rural"
     },
     "table": "main"
    },
    {
     "key": "c2",
     "label": "Urban",
     "conditions": {
      "area": "urban"
     },
     "table": "main"
    },
    {
     "key": "r70",
     "label": "Rural / 70 mph",
     "conditions": {
      "area": "rural",
      "designSpeed": [
       70,
       70
      ]
     },
     "table": "alignment"
    },
    {
     "key": "u50",
     "label": "Urban / 50 mph",
     "conditions": {
      "area": "urban",
      "designSpeed": [
       50,
       50
      ]
     },
     "table": "alignment"
    },
    {
     "key": "u55",
     "label": "Urban / 55 mph",
     "conditions": {
      "area": "urban",
      "designSpeed": [
       55,
       55
      ]
     },
     "table": "alignment"
    },
    {
     "key": "u60",
     "label": "Urban / 60 mph",
     "conditions": {
      "area": "urban",
      "designSpeed": [
       60,
       60
      ]
     },
     "table": "alignment"
    },
    {
     "key": "u70",
     "label": "Urban / 70 mph",
     "conditions": {
      "area": "urban",
      "designSpeed": [
       70,
       70
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
     "section": "40-2.02",
     "table": "main",
     "pdfPage": 7,
     "controlling": false,
     "values": {
      "c1": "20 Years",
      "c2": "20 Years"
     }
    },
    {
     "group": "Design Controls",
     "element": "Design Speed, mph",
     "labelParts": [
      "*Design Speed, mph"
     ],
     "section": "40-3.0",
     "table": "main",
     "pdfPage": 7,
     "controlling": true,
     "key": "designSpeed",
     "values": {
      "c1": "70",
      "c2": "50-70 (1)"
     },
     "notes": [
      "1"
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
     "pdfPage": 7,
     "controlling": false,
     "values": {
      "c1": "Full Control",
      "c2": "Full Control"
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
     "pdfPage": 7,
     "controlling": false,
     "values": {
      "c1": "Desirable: B Minimum: C",
      "c2": "Desirable: B Minimum: C (2)"
     },
     "notes": [
      "2"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Width",
     "labelParts": [
      "Travel Lane",
      "*Width"
     ],
     "section": "45-1.01",
     "table": "main",
     "pdfPage": 7,
     "controlling": true,
     "key": "laneWidth",
     "values": {
      "c1": "12 ft",
      "c2": "12 ft"
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
      }
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Surface Type",
     "labelParts": [
      "Travel Lane",
      "Surface Type(3)"
     ],
     "section": "Ch. 602",
     "table": "main",
     "pdfPage": 7,
     "controlling": false,
     "values": {
      "c1": "Asphalt / Concrete",
      "c2": "Asphalt / Concrete"
     },
     "notes": [
      "3"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Right Width",
     "labelParts": [
      "Shoulder",
      "*Right Width(4)"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 7,
     "controlling": true,
     "key": "shoulderRightUsable",
     "values": {
      "c1": "Usable: 11 ft Paved: 10 ft",
      "c2": "Usable: 11 ft Paved: 10 ft"
     },
     "numeric": {
      "c1": {
       "des": 11,
       "min": 11,
       "single": true
      },
      "c2": {
       "des": 11,
       "min": 11,
       "single": true
      }
     },
     "numericByKey": {
      "shoulderRightPaved": {
       "c1": {
        "des": 10,
        "min": 10,
        "single": true
       },
       "c2": {
        "des": 10,
        "min": 10,
        "single": true
       }
      }
     },
     "notes": [
      "4"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Left Width",
     "labelParts": [
      "Shoulder",
      "*Left Width(5)"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 7,
     "controlling": true,
     "key": "shoulderLeftPaved",
     "values": {
      "c1": "2 Lanes: D 8 ft, M 4 ft Paved; 3 Lanes: 10 ft Paved",
      "c2": "2 Lanes: 4 ft Paved; 3 Lanes: 10 ft Paved"
     },
     "numeric": {
      "c1": {
       "byLanes": {
        "2": {
         "des": 8,
         "min": 4
        },
        "3": {
         "des": 10,
         "min": 10,
         "single": true
        }
       }
      },
      "c2": {
       "byLanes": {
        "2": {
         "des": 4,
         "min": 4,
         "single": true
        },
        "3": {
         "des": 10,
         "min": 10,
         "single": true
        }
       }
      }
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Surface Type",
     "labelParts": [
      "Shoulder",
      "Surface Type(3)"
     ],
     "section": "Ch. 602",
     "table": "main",
     "pdfPage": 7,
     "controlling": false,
     "values": {
      "c1": "Asphalt / Concrete",
      "c2": "Asphalt / Concrete"
     },
     "notes": [
      "3"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Travel Lane",
     "labelParts": [
      "Cross Slope",
      "*Travel Lane (6)"
     ],
     "section": "45-1.01",
     "table": "main",
     "pdfPage": 7,
     "controlling": true,
     "key": "travelLaneCrossSlope",
     "values": {
      "c1": "2%",
      "c2": "2%"
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
      "Shoulder (6A)"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 7,
     "controlling": false,
     "key": "shoulderCrossSlope",
     "values": {
      "c1": "Paved Width <= 4 ft: 2%; Paved Width > 4 ft: 4%",
      "c2": "Paved Width <= 4 ft: 2%; Paved Width > 4 ft: 4%"
     },
     "notes": [
      "6A"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Lane Width",
     "labelParts": [
      "Auxiliary Lane",
      "*Lane Width"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 7,
     "controlling": true,
     "key": "auxLaneWidth",
     "values": {
      "c1": "12 ft",
      "c2": "12 ft"
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
      }
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Shoulder Width",
     "labelParts": [
      "Auxiliary Lane",
      "*Shoulder Width"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 7,
     "controlling": true,
     "values": {
      "c1": "Right: 10 ft (7) Left: 4 ft",
      "c2": "Right: 10 ft (7) Left: 4 ft"
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Median Width: Depressed",
     "labelParts": [
      "Median Width",
      "Depressed"
     ],
     "section": "45-2.0",
     "table": "main",
     "pdfPage": 7,
     "controlling": false,
     "key": "medianWidth",
     "variant": "depressed",
     "values": {
      "c1": "Desirable: 100 ft Minimum: 54.5 ft",
      "c2": "Desirable: 60 ft; Minimum: 10 ft for 4 lanes, 54.5 ft for 6 lanes"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Median Width: Flush, with CMB",
     "labelParts": [
      "Median Width",
      "Flush, with CMB"
     ],
     "section": "45-2.0",
     "table": "main",
     "pdfPage": 7,
     "controlling": false,
     "key": "medianWidth",
     "variant": "flush with CMB",
     "values": {
      "c1": "Desirable: 30.5 ft Minimum: 26.5 ft",
      "c2": "Minimum: 26.5 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Clear-Zone Width",
     "labelParts": [
      "Clear-Zone Width"
     ],
     "section": "49-2.0",
     "table": "main",
     "pdfPage": 7,
     "controlling": false,
     "key": "clearZone",
     "values": {
      "c1": "(8)",
      "c2": "(8)"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Foreslope",
     "labelParts": [
      "Side Slopes (9)",
      "Cut",
      "Foreslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 7,
     "controlling": false,
     "key": "foreslope",
     "values": {
      "c1": "6:1 (10)",
      "c2": "6:1 (10)"
     },
     "notes": [
      "9",
      "10"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Ditch Width",
     "labelParts": [
      "Side Slopes (9)",
      "Cut",
      "Ditch Width"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 7,
     "controlling": false,
     "key": "ditchWidth",
     "values": {
      "c1": "4 ft (11)",
      "c2": "4 ft (11)"
     },
     "notes": [
      "9",
      "11"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Backslope",
     "labelParts": [
      "Side Slopes (9)",
      "Cut",
      "Backslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 7,
     "controlling": false,
     "key": "backslope",
     "values": {
      "c1": "4:1 (12)",
      "c2": "4:1 (12)"
     },
     "notes": [
      "9",
      "12"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Fill",
     "labelParts": [
      "Side Slopes (9)",
      "Fill"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 7,
     "controlling": false,
     "key": "fillSlope",
     "values": {
      "c1": "6:1 to Clear Zone; 3:1 max. to Toe",
      "c2": "6:1 to Clear Zone; 3:1 max. to Toe"
     },
     "notes": [
      "9"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Median Slopes",
     "labelParts": [
      "Median Slopes"
     ],
     "section": "45-2.02",
     "table": "main",
     "pdfPage": 7,
     "controlling": false,
     "values": {
      "c1": "Desirable: 8:1 Maximum: 5:1",
      "c2": "Desirable: 8:1 Maximum: 5:1"
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
     "pdfPage": 7,
     "controlling": true,
     "values": {
      "c1": "HL-93 (13)",
      "c2": "HL-93 (13)"
     },
     "notes": [
      "13"
     ]
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Clear-Roadway Width",
     "labelParts": [
      "New or Reconstructed Bridge",
      "Clear-Roadway Width (14)"
     ],
     "section": "45-4.01",
     "table": "main",
     "pdfPage": 7,
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "new",
     "values": {
      "c1": "Full Paved Approach Width",
      "c2": "Full Paved Approach Width"
     },
     "notes": [
      "14"
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
     "pdfPage": 7,
     "controlling": true,
     "values": {
      "c1": "HS-20",
      "c2": "HS-20"
     }
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Clear-Roadway Width",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "Clear-Roadway Width"
     ],
     "section": "45-4.01",
     "table": "main",
     "pdfPage": 7,
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "existing",
     "values": {
      "c1": "Travelway Plus 10 ft Rt. & 4 ft Lt. Shoulders",
      "c2": "Travelway Plus 10 ft Rt. & 4 ft Lt. Shoulders"
     }
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Freeway Under: New or Replaced Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Freeway Under (15c)",
      "New or Replaced Overpassing Bridge (15a)"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 7,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "new",
     "values": {
      "c1": "16.5 ft",
      "c2": "16.5 ft (15b)"
     },
     "notes": [
      "15c",
      "15a",
      "15b"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Freeway Under: Existing Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Freeway Under (15c)",
      "Existing Overpassing Bridge"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 7,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "existing",
     "values": {
      "c1": "16 ft",
      "c2": "16 ft (15b)"
     },
     "notes": [
      "15c",
      "15b"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Freeway Under: Sign Truss / Pedestrian Bridge",
     "labelParts": [
      "*Vertical Clearance, Freeway Under (15c)",
      "Sign Truss / Pedestrian Bridge (15a)"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 7,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "signTruss",
     "values": {
      "c1": "New: 17.5 ft Existing: 17 ft",
      "c2": "New: 17.5 ft Existing: 17 ft"
     },
     "notes": [
      "15c",
      "15a"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Freeway over Railroad",
     "labelParts": [
      "Vertical Clearance, Freeway over Railroad (16)"
     ],
     "section": "402-6.01",
     "table": "main",
     "pdfPage": 7,
     "controlling": false,
     "values": {
      "c1": "23 ft",
      "c2": "23 ft"
     },
     "notes": [
      "16"
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
     "pdfPage": 8,
     "controlling": false,
     "values": {
      "r70": "70 mph",
      "u50": "50 mph",
      "u55": "55 mph",
      "u60": "60 mph",
      "u70": "70 mph"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Stopping Sight Distance",
     "labelParts": [
      "*Stopping Sight Distance"
     ],
     "section": "42-1.0",
     "table": "alignment",
     "pdfPage": 8,
     "controlling": true,
     "key": "ssd",
     "values": {
      "r70": "730 ft",
      "u50": "425",
      "u55": "495 ft",
      "u60": "570 ft",
      "u70": "730 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance",
     "labelParts": [
      "Decision Sight Distance (17)"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "pdfPage": 8,
     "controlling": false,
     "values": {
      "r70": "780 ft",
      "u50": "910",
      "u55": "1030 ft",
      "u60": "1150 ft",
      "u70": "1410 ft"
     },
     "notes": [
      "17"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Radius",
     "labelParts": [
      "*Minimum Radius"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 8,
     "controlling": true,
     "key": "minRadius",
     "values": {
      "r70": "(18)",
      "u50": "(18)",
      "u55": "(18)",
      "u60": "(18)",
      "u70": "(18)"
     },
     "notes": [
      "18"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Superelevation Rate",
     "labelParts": [
      "*Superelevation Rate"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 8,
     "controlling": true,
     "key": "emax",
     "values": {
      "r70": "emax=6% or 8% (18)",
      "u50": "emax= 6% or 8% (18)",
      "u55": "emax= 6% or 8% (18)",
      "u60": "emax= 6% or 8% (18)",
      "u70": "emax= 6% or 8% (18)"
     },
     "notes": [
      "18"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Horizontal Sight Distance",
     "labelParts": [
      "*Horizontal Sight Distance"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 8,
     "controlling": true,
     "values": {
      "r70": "(19)",
      "u50": "(19)",
      "u55": "(19)",
      "u60": "(19)",
      "u70": "(19)"
     },
     "notes": [
      "19"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Crest",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Crest"
     ],
     "section": "44-3.0",
     "table": "alignment",
     "pdfPage": 8,
     "controlling": true,
     "key": "crestK",
     "values": {
      "r70": "247",
      "u50": "84",
      "u55": "114",
      "u60": "151",
      "u70": "247"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Sag",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Sag"
     ],
     "section": "44-3.0",
     "table": "alignment",
     "pdfPage": 8,
     "controlling": true,
     "key": "sagK",
     "values": {
      "r70": "181",
      "u50": "96",
      "u55": "115",
      "u60": "136",
      "u70": "181"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Level",
     "labelParts": [
      "*Maximum Grade (20)",
      "Level"
     ],
     "section": "44-1.02",
     "table": "alignment",
     "pdfPage": 8,
     "controlling": true,
     "key": "maxGrade",
     "terrain": "level",
     "values": {
      "r70": "3%",
      "u50": "4%",
      "u55": "3.5%",
      "u60": "3%",
      "u70": "3%"
     },
     "notes": [
      "20"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Rolling",
     "labelParts": [
      "*Maximum Grade (20)",
      "Rolling"
     ],
     "section": "44-1.02",
     "table": "alignment",
     "pdfPage": 8,
     "controlling": true,
     "key": "maxGrade",
     "terrain": "rolling",
     "values": {
      "r70": "4%",
      "u50": "5%",
      "u55": "4.5%",
      "u60": "4%",
      "u70": "4%"
     },
     "notes": [
      "20"
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
     "pdfPage": 8,
     "controlling": false,
     "key": "minGrade",
     "values": {
      "r70": "Desirable: 0.5% Minimum: 0.0%",
      "u50": "Desirable: 0.5% Minimum: 0.0%",
      "u55": "Desirable: 0.5% Minimum: 0.0%",
      "u60": "Desirable: 0.5% Minimum: 0.0%",
      "u70": "Desirable: 0.5% Minimum: 0.0%"
     }
    }
   ],
   "legend": [
    "D: Desirable  M: Minimum.",
    "* Level One controlling criterion, see page 2 of 4"
   ],
   "footnotes": {
    "1": "Design Speed. A 50 mph design speed may be considered in a restricted urban area.",
    "2": "Level of Service. A minimum Level of Service of D may be used on an urban reconstruction project.",
    "3": "Surface Type. The pavement-type selection will be determined by the Pavement Engineering Division.",
    "4": "Shoulder Width, Right. The following will apply. a. The shoulder is paved to the front face of guardrail. The desirable guardrail offset is 2 ft from the usable shoulder width. See Section 49-4.0 for more information. b. Where the number of trucks exceeds 250 DDHV, a 12-ft paved width should be used. c. Usable shoulder width is defined as the distance from the edge of the travel lane to the shoulder break point.",
    "5": "Shoulder Width, Left. The following will apply. a. The usable shoulder width is equal to the paved shoulder width. The desirable guardrail offset is 2 ft from the usable-shoulder width. See Section 49-4.0 for more information. b. Where there are 3 or more lanes in one direction and the volume of trucks exceed 250 DDHV, a 12 ft width should be used. c. For a left shoulder of 4 ft or wider, the usable shoulder width will be 1 ft more than the paved-shoulder width.",
    "6": "Cross Slope, Travel Lane. Cross slopes of 1.5% are acceptable on an existing bridge to remain in place.",
    "6A": "Cross Slope, Shoulder. See Figure 45-1A(1) or Figure 45-1A(2) for more-specific information.",
    "7": "Auxiliary-Lane Shoulder Width, Right. On a reconstruction project, a 6-ft width may be used.",
    "8": "Clear-Zone Width. This will vary according to design speed, traffic volume, side slopes, and horizontal curvature. See Section 49-2.0.",
    "9": "Side Slopes. Value is for new construction. See Sections 45-3.0 for more information. For a reconstruction project, see Section 49-3.0.",
    "10": "Foreslope. See Sections 49-2.0 and 49-3.0 for the lateral extent of the foreslope in a ditch section.",
    "11": "Ditch Width. A V-ditch should be used in a rock cut.",
    "12": "Backslope. For an earth cut of 10 ft or deeper, the first horizontal 20 ft of the backslope will be sloped at a rate of 4:1. Then, a slope rate of 3:1 is normally used to the natural ground line. The backslope for a rock cut will vary according to the height of cut and the geotechnical requirements. See Sections 45-3.0 and 107-6.01.",
    "13": "Structural Capacity, New or Reconstructed Bridge. a. A State-highway bridge within 15 mi of a Toll-Road gate must be designed for Toll-Road loading. b. A bridge on an Extra-Heavy-Duty Highway must be designed for the Michigan Train truck-loading configuration.",
    "14": "Width, New or Reconstructed Bridge. See Section 402-6.02(01) for more information. The bridge clear-roadway width is the algebraic sum of the following: a. the approach traveled way width; b. the approach usable shoulder width without guardrail; and c. a bridge railing offset (see Figure 402-6H).",
    "15": "Vertical Clearance, Freeway Under. The following will apply. a. Table value includes an additional 6 in. allowance for future overlays. b. A 14-ft clearance may be used in an urban area where an alternate freeway facility with a 16-ft clearance is available. c. Vertical clearance applies from usable edge to usable edge of shoulders.",
    "16": "Vertical Clearance, Freeway Over Railroad. See Section 402-6.01(03) for additional information on railroad clearance under a highway.",
    "17": "Decision Sight Distance. Value is for the avoidance maneuver (speed/path/direction change). See Section 42-2.0.",
    "18": "Superelevation Rate. See Section 305-4.0 for value of superelevation rate based on design speed and radius.",
    "19": "Horizontal Sight Distance. For a given design speed, the necessary middle ordinate will be determined by the radius and the sight distance. Sometimes, the stopping-sight-distance value for a truck should be considered. See the discussion in Section 305-5.0",
    "20": "Maximum Grade. A grade of 1% steeper may be used in a restricted urban area where development precludes the use of a flatter grade. A downgrade of 1% steeper may also be used for a one-way roadway.",
    "21": "For a bridge of 200 ft or longer that is to remain in place, the minimum width of each shoulder is 4 ft. This requirement does not apply to a bridge-deck replacement.",
    "*": "Level One controlling criterion. Except as noted in this chapter, the values shown in AASHTO's A Policy on Geometric Design of Highways and Streets (the Green Book) may be used as minimum values if they are lower than similar values shown herein. A controlling criterion that does not. meet the minimum value is a design exception and is subject to approval. See Section 40-8.0 for low speed and high speed applications."
   },
   "transcriptionNotes": [
    "Revision label 'Rev. Jul. 2014' comes from the List of Figures / chapter revision table (Design Memo 14-10); it is not printed on the figure pages.",
    "Urban 50 mph Stopping Sight Distance is printed '425' and urban 50 mph Decision Sight Distance '910', both without 'ft'.",
    "Rural superelevation cell reads 'emax=6% or 8% (18)'; urban reads 'emax= 6% or 8% (18)'.",
    "The '*' note on page 2 reads 'A controlling criterion that does not. meet the minimum value' (stray period).",
    "Footnote (21) (4 ft minimum shoulders on a 200 ft or longer bridge to remain in place) is not referenced anywhere in the table.",
    "Left shoulder width is printed by number of lanes ('2 Lanes: ...; 3 Lanes: ...'); numeric gives it as byLanes {'2', '3'} (footnote 5b speaks of '3 or more lanes in one direction'). Footnote 5c: for a left shoulder of 4 ft or wider, usable width = paved width + 1 ft.",
    "Right shoulder cell states both usable (11 ft, row key shoulderRightUsable) and paved (10 ft, numericByKey.shoulderRightPaved) widths.",
    "Decision Sight Distance at 70 mph is printed 780 ft for rural and 1410 ft for urban.",
    "The Manual Section '45-3.0' is printed once beside the three Cut rows (Foreslope / Ditch Width / Backslope); it is repeated on each row here."
   ]
  },
  {
   "id": "53-2",
   "title": "Geometric Design Criteria for Rural Arterial",
   "revision": "Rev. Jul. 2014",
   "printedTitle": "GEOMETRIC DESIGN CRITERIA FOR RURAL ARTERIAL (New Construction or Reconstruction)",
   "pdfPages": [
    11,
    12,
    13,
    14
   ],
   "facility": "Rural Arterial",
   "area": "rural",
   "isFreeway": false,
   "applicability": "These criteria apply to a route either on or off the National Highway System, regardless of funding source.",
   "columns": [
    {
     "key": "c1",
     "label": "2 Lanes / < 400",
     "conditions": {
      "lanes": 2,
      "adtMax": 400
     },
     "table": "main"
    },
    {
     "key": "c2",
     "label": "2 Lanes / 400 <= AADT < 2000",
     "conditions": {
      "lanes": 2,
      "adtMin": 400,
      "adtMax": 2000
     },
     "table": "main"
    },
    {
     "key": "c3",
     "label": "2 Lanes / >= 2000",
     "conditions": {
      "lanes": 2,
      "adtMin": 2000
     },
     "table": "main"
    },
    {
     "key": "c4",
     "label": "4 or More Lanes / **Undivided",
     "conditions": {
      "lanesMin": 4,
      "divided": false
     },
     "table": "main"
    },
    {
     "key": "c5",
     "label": "4 or More Lanes / Divided",
     "conditions": {
      "lanesMin": 4,
      "divided": true
     },
     "table": "main"
    },
    {
     "key": "s50",
     "label": "Rural Arterial / 50 mph",
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
     "label": "Rural Arterial / 55 mph",
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
     "label": "Rural Arterial / 60 mph",
     "conditions": {
      "designSpeed": [
       60,
       60
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s70",
     "label": "Rural Arterial / 70 mph",
     "conditions": {
      "designSpeed": [
       70,
       70
      ]
     },
     "table": "alignment"
    }
   ],
   "rows": [
    {
     "group": "Design Controls",
     "element": "Design-Year Traffic, AADT",
     "labelParts": [
      "Design-Year Traffic, AADT"
     ],
     "section": "40-2.01",
     "table": "main",
     "pdfPage": 11,
     "controlling": false,
     "values": {
      "c1": "< 400",
      "c2": "400 <= AADT < 2000",
      "c3": ">= 2000",
      "c4": "**Undivided",
      "c5": "Divided"
     },
     "notes": [
      "**"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Design Forecast Period",
     "labelParts": [
      "Design Forecast Period"
     ],
     "section": "40-2.02",
     "table": "main",
     "pdfPage": 11,
     "controlling": false,
     "values": {
      "c1": "20 Years",
      "c2": "20 Years",
      "c3": "20 Years",
      "c4": "20 Years",
      "c5": "20 Years"
     }
    },
    {
     "group": "Design Controls",
     "element": "Design Speed, mph",
     "labelParts": [
      "*Design Speed, mph (1)"
     ],
     "section": "40-3.0",
     "table": "main",
     "pdfPage": 11,
     "controlling": true,
     "key": "designSpeed",
     "values": {
      "c1": "Level: 60 - 70; Rolling: 50 - 60",
      "c2": "Level: 60 - 70; Rolling: 50 - 60",
      "c3": "Level: 60 - 70; Rolling: 50 - 60",
      "c4": "60",
      "c5": "60-70"
     },
     "notes": [
      "1"
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
     "pdfPage": 11,
     "controlling": false,
     "values": {
      "c1": "Partial Control / None",
      "c2": "Partial Control / None",
      "c3": "Partial Control / None",
      "c4": "Partial Control / None",
      "c5": "Partial Control / None"
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
     "pdfPage": 11,
     "controlling": false,
     "values": {
      "c1": "Desirable: B; Minimum: C",
      "c2": "Desirable: B; Minimum: C",
      "c3": "Desirable: B; Minimum: C",
      "c4": "Desirable: B; Minimum: C",
      "c5": "Desirable: B; Minimum: C"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Width",
     "labelParts": [
      "Travel Lane",
      "*Width"
     ],
     "section": "45-1.01",
     "table": "main",
     "pdfPage": 11,
     "controlling": true,
     "key": "laneWidth",
     "values": {
      "c1": "12 ft",
      "c2": "12 ft",
      "c3": "12 ft",
      "c4": "12 ft",
      "c5": "12 ft"
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
      }
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Typical Surface Type",
     "labelParts": [
      "Travel Lane",
      "Typical Surface Type (2)"
     ],
     "section": "Chp. 602",
     "table": "main",
     "pdfPage": 11,
     "controlling": false,
     "values": {
      "c1": "Asphalt / Concrete",
      "c2": "Asphalt / Concrete",
      "c3": "Asphalt / Concrete",
      "c4": "Asphalt / Concrete",
      "c5": "Asphalt / Concrete"
     },
     "notes": [
      "2"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Width Usable",
     "labelParts": [
      "Shoulder (3)",
      "*Width Usable"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 11,
     "controlling": true,
     "key": "shoulderRightUsable",
     "values": {
      "c1": "6 ft",
      "c2": "8 ft",
      "c3": "11 ft (3b)",
      "c4": "11 ft (3b)",
      "c5": "Right: 11 ft (3b); Left: 4 ft (3e)"
     },
     "numeric": {
      "c1": {
       "des": 6,
       "min": 6,
       "single": true
      },
      "c2": {
       "des": 8,
       "min": 8,
       "single": true
      },
      "c3": {
       "des": 11,
       "min": 11,
       "single": true
      },
      "c4": {
       "des": 11,
       "min": 11,
       "single": true
      },
      "c5": {
       "des": 11,
       "min": 11,
       "single": true,
       "left": {
        "des": 4,
        "min": 4,
        "single": true
       }
      }
     },
     "notes": [
      "3",
      "3b",
      "3e"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Width Paved",
     "labelParts": [
      "Shoulder (3)",
      "*Width Paved"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 11,
     "controlling": true,
     "key": "shoulderRightPaved",
     "values": {
      "c1": "4 ft",
      "c2": "6 ft",
      "c3": "10 ft (3b)",
      "c4": "10 ft (3b)",
      "c5": "Right: 10 ft (3b); Left: 4 ft (3e)"
     },
     "numeric": {
      "c1": {
       "des": 4,
       "min": 4,
       "single": true
      },
      "c2": {
       "des": 6,
       "min": 6,
       "single": true
      },
      "c3": {
       "des": 10,
       "min": 10,
       "single": true
      },
      "c4": {
       "des": 10,
       "min": 10,
       "single": true
      },
      "c5": {
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
     "notes": [
      "3",
      "3b",
      "3e"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Typical Surface Type",
     "labelParts": [
      "Shoulder (3)",
      "Typical Surface Type (2)"
     ],
     "section": "Chp. 602",
     "table": "main",
     "pdfPage": 11,
     "controlling": false,
     "values": {
      "c1": "Asphalt / Concrete",
      "c2": "Asphalt / Concrete",
      "c3": "Asphalt / Concrete",
      "c4": "Asphalt / Concrete",
      "c5": "Asphalt / Concrete"
     },
     "notes": [
      "3",
      "2"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Travel Lane",
     "labelParts": [
      "Cross Slope",
      "*Travel Lane (4)"
     ],
     "section": "45-1.01",
     "table": "main",
     "pdfPage": 11,
     "controlling": true,
     "key": "travelLaneCrossSlope",
     "values": {
      "c1": "2%",
      "c2": "2%",
      "c3": "2%",
      "c4": "2%",
      "c5": "2%"
     },
     "notes": [
      "4"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Shoulder",
     "labelParts": [
      "Cross Slope",
      "Shoulder (4A)"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 11,
     "controlling": false,
     "key": "shoulderCrossSlope",
     "values": {
      "c1": "Paved Width <= 4 ft: 2%; Paved Width > 4 ft: 4%",
      "c2": "Paved Width <= 4 ft: 2%; Paved Width > 4 ft: 4%",
      "c3": "Paved Width <= 4 ft: 2%; Paved Width > 4 ft: 4%",
      "c4": "Paved Width <= 4 ft: 2%; Paved Width > 4 ft: 4%",
      "c5": "Paved Width <= 4 ft: 2%; Paved Width > 4 ft: 4%"
     },
     "notes": [
      "4A"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Lane Width",
     "labelParts": [
      "Auxiliary Lane",
      "Lane Width (5)"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 11,
     "controlling": false,
     "key": "auxLaneWidth",
     "values": {
      "c1": "Desirable: 12 ft; Minimum: 11 ft",
      "c2": "Desirable: 12 ft; Minimum: 11 ft",
      "c3": "Desirable: 12 ft; Minimum: 11 ft",
      "c4": "Desirable: 12 ft; Minimum: 11 ft",
      "c5": "Desirable: 12 ft; Minimum: 11 ft"
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
      }
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Shoulder Width",
     "labelParts": [
      "Auxiliary Lane",
      "Shoulder Width (6)"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 11,
     "controlling": false,
     "values": {
      "c1": "Same as Next to Travel Lane",
      "c2": "Same as Next to Travel Lane",
      "c3": "Same as Next to Travel Lane",
      "c4": "Same as Next to Travel Lane",
      "c5": "Same as Next to Travel Lane"
     },
     "notes": [
      "6"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Median Width",
     "labelParts": [
      "Median Width"
     ],
     "section": "45-2.0",
     "table": "main",
     "pdfPage": 11,
     "controlling": false,
     "key": "medianWidth",
     "values": {
      "c1": "N/A",
      "c2": "N/A",
      "c3": "N/A",
      "c4": "0.0 ft",
      "c5": "Desirable: 80 ft; Minimum: 16 ft (7)"
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Clear-Zone Width",
     "labelParts": [
      "Clear-Zone Width"
     ],
     "section": "49-2.0",
     "table": "main",
     "pdfPage": 11,
     "controlling": false,
     "key": "clearZone",
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
     "element": "Side Slopes: Cut: Foreslope",
     "labelParts": [
      "Side Slopes (9)",
      "Cut",
      "Foreslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 11,
     "controlling": false,
     "key": "foreslope",
     "values": {
      "c1": "6:1 (10)",
      "c2": "6:1 (10)",
      "c3": "6:1 (10)",
      "c4": "6:1 (10)",
      "c5": "6:1 (10)"
     },
     "notes": [
      "9",
      "10"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Ditch Width",
     "labelParts": [
      "Side Slopes (9)",
      "Cut",
      "Ditch Width"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 11,
     "controlling": false,
     "key": "ditchWidth",
     "values": {
      "c1": "4 ft (11)",
      "c2": "4 ft (11)",
      "c3": "4 ft (11)",
      "c4": "4 ft (11)",
      "c5": "4 ft (11)"
     },
     "notes": [
      "9",
      "11"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Backslope",
     "labelParts": [
      "Side Slopes (9)",
      "Cut",
      "Backslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 11,
     "controlling": false,
     "key": "backslope",
     "values": {
      "c1": "4:1 for 20 ft; 3:1 Max. to Top (12)",
      "c2": "4:1 for 20 ft; 3:1 Max. to Top (12)",
      "c3": "4:1 for 20 ft; 3:1 Max. to Top (12)",
      "c4": "4:1 for 20 ft; 3:1 Max. to Top (12)",
      "c5": "4:1 for 20 ft; 3:1 Max. to Top (12)"
     },
     "notes": [
      "9",
      "12"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Fill",
     "labelParts": [
      "Side Slopes (9)",
      "Fill"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 11,
     "controlling": false,
     "key": "fillSlope",
     "values": {
      "c1": "6:1 to Clear Zone; 3:1 Max. to Toe",
      "c2": "6:1 to Clear Zone; 3:1 Max. to Toe",
      "c3": "6:1 to Clear Zone; 3:1 Max. to Toe",
      "c4": "6:1 to Clear Zone; 3:1 Max. to Toe",
      "c5": "6:1 to Clear Zone; 3:1 Max. to Toe"
     },
     "notes": [
      "9"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Median Slopes",
     "labelParts": [
      "Median Slopes"
     ],
     "section": "45-2.02",
     "table": "main",
     "pdfPage": 11,
     "controlling": false,
     "values": {
      "c1": "N/A",
      "c2": "N/A",
      "c3": "N/A",
      "c4": "Desirable: 8:1; Maximum: 5:1",
      "c5": "Desirable: 8:1; Maximum: 5:1"
     }
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Structural Capacity",
     "labelParts": [
      "New or Reconstructed Bridge",
      "*Structural Capacity"
     ],
     "section": "Chp. 403",
     "table": "main",
     "pdfPage": 11,
     "controlling": true,
     "values": {
      "c1": "HL-93 (13)",
      "c2": "HL-93 (13)",
      "c3": "HL-93 (13)",
      "c4": "HL-93 (13)",
      "c5": "HL-93 (13)"
     },
     "notes": [
      "13"
     ]
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Clear-Roadway Width",
     "labelParts": [
      "New or Reconstructed Bridge",
      "Clear-Roadway Width(14)"
     ],
     "section": "45-4.01",
     "table": "main",
     "pdfPage": 11,
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "new",
     "values": {
      "c1": "Full Paved Approach Width",
      "c2": "Full Paved Approach Width",
      "c3": "Full Paved Approach Width",
      "c4": "Full Paved Approach Width",
      "c5": "Full Paved Approach Width"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Structural Capacity",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "*Structural Capacity"
     ],
     "section": "Chp. 412",
     "table": "main",
     "pdfPage": 11,
     "controlling": true,
     "values": {
      "c1": "HS-20",
      "c2": "HS-20",
      "c3": "HS-20",
      "c4": "HS-20",
      "c5": "HS-20"
     }
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Clear-Roadway Width",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "Clear-Roadway Width"
     ],
     "section": "45-4.01",
     "table": "main",
     "pdfPage": 11,
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "existing",
     "values": {
      "c1": "Travelway Plus 2 ft on Each Side",
      "c2": "Travelway Plus 2 ft on Each Side",
      "c3": "Travelway Plus 2 ft on Each Side",
      "c4": "Travelway Plus 2 ft on Each Side",
      "c5": "Travelway Plus 2 ft on Each Side"
     }
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Under: New or Replaced Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Arterial Under",
      "New or Replaced Overpassing Bridge (15)"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 11,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "new",
     "values": {
      "c1": "16.5 ft",
      "c2": "16.5 ft",
      "c3": "16.5 ft",
      "c4": "16.5 ft",
      "c5": "16.5 ft"
     },
     "notes": [
      "15"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Under: Existing Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Arterial Under",
      "Existing Overpassing Bridge"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 11,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "existing",
     "values": {
      "c1": "14 ft",
      "c2": "14 ft",
      "c3": "14 ft",
      "c4": "14 ft",
      "c5": "14 ft"
     }
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Under: Sign Truss / Pedestrian Bridge",
     "labelParts": [
      "*Vertical Clearance, Arterial Under",
      "Sign Truss / Pedestrian Bridge (15)"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 11,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "signTruss",
     "values": {
      "c1": "New: 17.5 ft; Existing: 17 ft",
      "c2": "New: 17.5 ft; Existing: 17 ft",
      "c3": "New: 17.5 ft; Existing: 17 ft",
      "c4": "New: 17.5 ft; Existing: 17 ft",
      "c5": "New: 17.5 ft; Existing: 17 ft"
     },
     "notes": [
      "15"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Over Railroad",
     "labelParts": [
      "Vertical Clearance, Arterial Over Railroad (16)"
     ],
     "section": "402-6.01",
     "table": "main",
     "pdfPage": 11,
     "controlling": false,
     "values": {
      "c1": "23 ft",
      "c2": "23 ft",
      "c3": "23 ft",
      "c4": "23 ft",
      "c5": "23 ft"
     },
     "notes": [
      "16"
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
     "pdfPage": 12,
     "controlling": false,
     "values": {
      "s50": "50 mph",
      "s55": "55 mph",
      "s60": "60 mph",
      "s70": "70 mph"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Stopping Sight Distance",
     "labelParts": [
      "*Stopping Sight Distance"
     ],
     "section": "42-1.0",
     "table": "alignment",
     "pdfPage": 12,
     "controlling": true,
     "key": "ssd",
     "values": {
      "s50": "425 ft",
      "s55": "495 ft",
      "s60": "570 ft",
      "s70": "730 ft"
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
     "pdfPage": 12,
     "controlling": false,
     "values": {
      "s50": "750 ft",
      "s55": "865 ft",
      "s60": "990 ft",
      "s70": "1105 ft"
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
     "pdfPage": 12,
     "controlling": false,
     "values": {
      "s50": "465 ft",
      "s55": "535 ft",
      "s60": "610 ft",
      "s70": "780 ft"
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
     "pdfPage": 12,
     "controlling": false,
     "values": {
      "s50": "1835 ft",
      "s55": "1985 ft",
      "s60": "2135 ft",
      "s70": "2480 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Intersection Sight Distance, -3% to +3%",
     "labelParts": [
      "Intersection Sight Distance, -3% to +3% (20)"
     ],
     "section": "46-10.0",
     "table": "alignment",
     "pdfPage": 12,
     "controlling": false,
     "values": {
      "s50": "P: 630 ft; SUT: 780 ft",
      "s55": "P: 730 ft; SUT: 890 ft",
      "s60": "P: 840 ft; SUT: 1020 ft",
      "s70": "P: 1030 ft; SUT: 1240 ft"
     },
     "notes": [
      "20"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Radius",
     "labelParts": [
      "*Minimum Radius"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 12,
     "controlling": true,
     "key": "minRadius",
     "values": {
      "s50": "(17)",
      "s55": "(17)",
      "s60": "(17)",
      "s70": "(17)"
     },
     "notes": [
      "17"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Superelevation Rate",
     "labelParts": [
      "*Superelevation Rate"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 12,
     "controlling": true,
     "key": "emax",
     "values": {
      "s50": "emax = 6% or 8% (17)",
      "s55": "emax = 6% or 8% (17)",
      "s60": "emax = 6% or 8% (17)",
      "s70": "emax = 6% or 8% (17)"
     },
     "notes": [
      "17"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Horizontal Sight Distance",
     "labelParts": [
      "*Horizontal Sight Distance"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 12,
     "controlling": true,
     "values": {
      "s50": "(18)",
      "s55": "(18)",
      "s60": "(18)",
      "s70": "(18)"
     },
     "notes": [
      "18"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Crest",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Crest"
     ],
     "section": "44-3.0",
     "table": "alignment",
     "pdfPage": 12,
     "controlling": true,
     "key": "crestK",
     "values": {
      "s50": "84",
      "s55": "114",
      "s60": "151",
      "s70": "247"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Sag",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Sag"
     ],
     "section": "44-3.0",
     "table": "alignment",
     "pdfPage": 12,
     "controlling": true,
     "key": "sagK",
     "values": {
      "s50": "96",
      "s55": "115",
      "s60": "136",
      "s70": "181"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Level",
     "labelParts": [
      "*Maximum Grade (19)",
      "Level"
     ],
     "section": "44-1.02",
     "table": "alignment",
     "pdfPage": 12,
     "controlling": true,
     "key": "maxGrade",
     "terrain": "level",
     "values": {
      "s50": "4%",
      "s55": "4%",
      "s60": "3%",
      "s70": "3%"
     },
     "notes": [
      "19"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Rolling",
     "labelParts": [
      "*Maximum Grade (19)",
      "Rolling"
     ],
     "section": "44-1.02",
     "table": "alignment",
     "pdfPage": 12,
     "controlling": true,
     "key": "maxGrade",
     "terrain": "rolling",
     "values": {
      "s50": "5%",
      "s55": "5%",
      "s60": "4%",
      "s70": "4%"
     },
     "notes": [
      "19"
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
     "pdfPage": 12,
     "controlling": false,
     "key": "minGrade",
     "values": {
      "s50": "Desirable: 0.5%; Minimum: 0.0%",
      "s55": "Desirable: 0.5%; Minimum: 0.0%",
      "s60": "Desirable: 0.5%; Minimum: 0.0%",
      "s70": "Desirable: 0.5%; Minimum: 0.0%"
     }
    }
   ],
   "legend": [
    "* Level One controlling criterion, see page 2 of 4",
    "** An arterial of 4 or more lanes on a new location should be designed as Divided."
   ],
   "footnotes": {
    "1": "Design Speed. The minimum design speed should equal the minimum value from the table or the anticipated posted speed limit after construction, whichever is greater. The legal speed limit is 60 mph on a non-posted divided highway.",
    "2": "Surface Type. The pavement-type selection will be determined by the INDOT Office of Pavement Engineering.",
    "3": "Shoulder. The following will apply. a. If there are 3 or more lanes in each direction and there is a median barrier, a 10 ft paved shoulder and a 2 ft offset is required. b. For new construction with 2000 <= AADT < 5000, this may be 8 ft. On a reconstruction project, the usable shoulder width may be 10 ft, and the paved shoulder width may be 8 ft. c. The shoulder is paved to the front face of guardrail. The desirable guardrail offset is 2 ft from the usable shoulder width. See Section 49-4.0 for more information. d. Usable shoulder width is defined as the distance from the edge of the travel lane to the shoulder break point. e. If there are 3 or more lanes in each direction, a full-width shoulder, 11 ft usable and 10 ft paved, is desirable. f. If curbs are to be used, the criteria described in Figure 53-6 or 53-7 should be applied.",
    "4": "Cross Slope, Travel Lanes. Cross slopes of 1.5% are acceptable on an existing bridge to remain in place. Where three or more lanes are sloped in the same direction, each successive pair of lanes may have an increased sideslope.",
    "4A": "Cross Slope, Shoulder. See Figure 45-1A(1) or Figure 45-1A(2) for more specific information.",
    "5": "Auxiliary Lane, Lane Width. Truck climbing-lane width is 12 ft.",
    "6": "Auxiliary Lane, Shoulder Width. At a minimum, a 2 ft shoulder may be used adjacent to an auxiliary lane. At a minimum, the shoulder adjacent to a truck climbing lane is 4 ft.",
    "7": "Median Width, Flush. Value is for new construction. A median of 25 ft or narrower should be avoided at an intersection. A median wider than 60 ft is undesirable at a signalized intersection or at an intersection that may become signalized in the foreseeable future. On a reconstruction project, the minimum flush-median width is 14 ft for a roadway with left-turn lanes, or 22 ft for a roadway with concrete median barrier.",
    "8": "Clear-Zone Width. This will vary according to design speed, traffic volume, side slopes, and horizontal curvature. See Section 49-2.0.",
    "9": "Side Slope. Value is for new construction. See Sections 45-3.0 for more information. For a reconstruction project, see Section 49-3.0.",
    "10": "Foreslope. See Sections 49-2.0 and 49-3.0 for the lateral extent of the foreslope in a ditch section.",
    "11": "Ditch Width. A V-ditch should be used in a rock cut.",
    "12": "Backslope. The backslope for a rock cut will vary according to the height of the cut and the geotechnical requirements. See Sections 45-3.0 and 107-6.01.",
    "13": "Structural Capacity, New or Reconstructed Bridge. The following will apply. a. A State-highway bridge within 15 mi of a Toll-Road gate must be designed for Toll-Road loading. b. A bridge on an Extra-Heavy-Duty Highway must be designed for the Michigan Train truck-loading configuration.",
    "14": "Width, New or Reconstructed Bridge. See Section 402-6.02(01) for more information. The bridge clear-roadway width is the algebraic sum of the following: a. the approach traveled-way width; b. the approach usable shoulder width without guardrail; and c. a bridge-railing offset (see Figure 402-6H).",
    "15": "Vertical Clearance, Arterial Under. Value includes an additional 6 in. allowance for future pavement overlays. Vertical clearance applies from usable edge to usable edge of shoulders.",
    "16": "Vertical Clearance, Arterial Over Railroad. See Chapter 402-6.01(03) for additional information on railroad clearance under a highway.",
    "17": "Superelevation Rate. See Section 305-4.0 for value of superelevation rate based on design speed and radius.",
    "18": "Horizontal Sight Distance. For a given design speed, the necessary middle ordinate will be determined by the radius and the sight distance which applies at the site. Sometimes, the stopping-sight-distance value for a truck will apply. See the discussion in Section 305-5.0.",
    "19": "Maximum Grade. A grade of 1% steeper may be used for a downgrade on a one-way roadway.",
    "20": "Intersection Sight Distance. For a left turn onto a 2-lane road: P = Passenger car; SUT = single unit truck. See Figure 46-10G for value for a combination truck.",
    "*": "Level One controlling criterion. Except as noted in this chapter, the values shown in AASHTO's A Policy on Geometric Design of Highways and Streets (the Green Book) may be used as minimum values if they are lower than similar values shown herein. A controlling criterion that does not meet the minimum value is a design exception and is subject to approval. See Section 40-8.0 for low speed and high speed applications.",
    "**": "An arterial of 4 or more lanes on a new location should be designed as Divided."
   },
   "transcriptionNotes": [
    "Revision label 'Rev. Jul. 2014' comes from the List of Figures / chapter revision table (Design Memo 14-10); it is not printed on the figure pages.",
    "The 2-lane design speed is a single cell 'Level: 60 - 70; Rolling: 50 - 60' spanning all three 2-lane AADT columns.",
    "Auxiliary Lane 'Lane Width (5)' and 'Shoulder Width (6)' are not marked '*' in this figure (Figure 53-1 marks auxiliary-lane width and shoulder width as controlling).",
    "Median Width for 4 or more lanes, Undivided, is printed '0.0 ft'.",
    "Footnote (9) reads 'See Sections 45-3.0'; footnote (16) reads 'See Chapter 402-6.01(03)'."
   ]
  },
  {
   "id": "53-3",
   "title": "Geometric Design Criteria for Rural Collector, State Route",
   "revision": "Rev. Jul. 2014",
   "printedTitle": "GEOMETRIC DESIGN CRITERIA FOR RURAL COLLECTOR, STATE ROUTE (New Construction or Reconstruction)",
   "pdfPages": [
    15,
    16,
    17,
    18
   ],
   "facility": "Rural Collector, State Route",
   "area": "rural",
   "isFreeway": false,
   "applicability": "These criteria apply to each project regardless of funding source.",
   "columns": [
    {
     "key": "c1",
     "label": "2 Lanes / < 400",
     "conditions": {
      "lanes": 2,
      "adtMax": 400
     },
     "table": "main"
    },
    {
     "key": "c2",
     "label": "2 Lanes / 400 <= AADT < 1500",
     "conditions": {
      "lanes": 2,
      "adtMin": 400,
      "adtMax": 1500
     },
     "table": "main"
    },
    {
     "key": "c3",
     "label": "2 Lanes / 1500 <= AADT < 2000",
     "conditions": {
      "lanes": 2,
      "adtMin": 1500,
      "adtMax": 2000
     },
     "table": "main"
    },
    {
     "key": "c4",
     "label": "2 Lanes / > 2000",
     "conditions": {
      "lanes": 2,
      "adtMin": 2000,
      "adtMinExclusive": true
     },
     "table": "main"
    },
    {
     "key": "s40",
     "label": "2 Lanes / 40 mph",
     "conditions": {
      "designSpeed": [
       40,
       40
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s45",
     "label": "2 Lanes / 45 mph",
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
     "label": "2 Lanes / 50 mph",
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
     "label": "2 Lanes / 55 mph",
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
     "label": "2 Lanes / 60 mph",
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
     "element": "Design-Year Traffic, AADT",
     "labelParts": [
      "Design-Year Traffic, AADT"
     ],
     "section": "40-2.01",
     "table": "main",
     "pdfPage": 15,
     "controlling": false,
     "values": {
      "c1": "< 400",
      "c2": "400 <= AADT < 1500",
      "c3": "1500 <= AADT < 2000",
      "c4": "> 2000"
     }
    },
    {
     "group": "Design Controls",
     "element": "Design Forecast Period",
     "labelParts": [
      "Design Forecast Period"
     ],
     "section": "40-2.02",
     "table": "main",
     "pdfPage": 15,
     "controlling": false,
     "values": {
      "c1": "20 Years (1)",
      "c2": "20 Years (1)",
      "c3": "20 Years (1)",
      "c4": "20 Years (1)"
     },
     "notes": [
      "1"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Design Speed, mph: Level",
     "labelParts": [
      "*Design Speed, mph (2)",
      "Level"
     ],
     "section": "40-3.0",
     "table": "main",
     "pdfPage": 15,
     "controlling": true,
     "key": "designSpeed",
     "terrain": "level",
     "values": {
      "c1": "35 - 55",
      "c2": "50 - 55",
      "c3": "50 - 55",
      "c4": "60"
     },
     "notes": [
      "2"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Design Speed, mph: Rolling",
     "labelParts": [
      "*Design Speed, mph (2)",
      "Rolling"
     ],
     "section": "40-3.0",
     "table": "main",
     "pdfPage": 15,
     "controlling": true,
     "key": "designSpeed",
     "terrain": "rolling",
     "values": {
      "c1": "30 - 55",
      "c2": "35 - 55",
      "c3": "35 - 55",
      "c4": "50 - 55"
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
     "pdfPage": 15,
     "controlling": false,
     "values": {
      "c1": "None",
      "c2": "None",
      "c3": "None",
      "c4": "None"
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
     "pdfPage": 15,
     "controlling": false,
     "values": {
      "c1": "Desirable.: B; Minimum: C",
      "c2": "Desirable.: B; Minimum: C",
      "c3": "Desirable.: B; Minimum: C",
      "c4": "Desirable.: B; Minimum: C"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Width",
     "labelParts": [
      "Travel Lane",
      "*Width"
     ],
     "section": "45-1.01",
     "table": "main",
     "pdfPage": 15,
     "controlling": true,
     "key": "laneWidth",
     "values": {
      "c1": "D: 12 ft; M: 10 ft",
      "c2": "D: 12 ft; M: 11 ft",
      "c3": "D: 12 ft; M: 11 ft (20)",
      "c4": "12 ft"
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
      }
     },
     "notes": [
      "20"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Typical Surface Type",
     "labelParts": [
      "Travel Lane",
      "Typical Surface Type (3)"
     ],
     "section": "Chp. 602",
     "table": "main",
     "pdfPage": 15,
     "controlling": false,
     "values": {
      "c1": "Asphalt / Concrete",
      "c2": "Asphalt / Concrete",
      "c3": "Asphalt / Concrete",
      "c4": "Asphalt / Concrete"
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
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 15,
     "controlling": true,
     "key": "shoulderRightUsable",
     "values": {
      "c1": "4 ft",
      "c2": "6 ft",
      "c3": "8 ft",
      "c4": "10 ft"
     },
     "numeric": {
      "c1": {
       "des": 4,
       "min": 4,
       "single": true
      },
      "c2": {
       "des": 6,
       "min": 6,
       "single": true
      },
      "c3": {
       "des": 8,
       "min": 8,
       "single": true
      },
      "c4": {
       "des": 10,
       "min": 10,
       "single": true
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
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 15,
     "controlling": true,
     "key": "shoulderRightPaved",
     "values": {
      "c1": "2 ft",
      "c2": "4 ft",
      "c3": "6 ft",
      "c4": "8 ft"
     },
     "numeric": {
      "c1": {
       "des": 2,
       "min": 2,
       "single": true
      },
      "c2": {
       "des": 4,
       "min": 4,
       "single": true
      },
      "c3": {
       "des": 6,
       "min": 6,
       "single": true
      },
      "c4": {
       "des": 8,
       "min": 8,
       "single": true
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
     "section": "Chp. 602",
     "table": "main",
     "pdfPage": 15,
     "controlling": false,
     "values": {
      "c1": "Asphalt / Concrete",
      "c2": "Asphalt / Concrete",
      "c3": "Asphalt / Concrete",
      "c4": "Asphalt / Concrete"
     },
     "notes": [
      "4",
      "3"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Travel Lane",
     "labelParts": [
      "Cross Slope",
      "*Travel Lane (5)"
     ],
     "section": "45-1.01",
     "table": "main",
     "pdfPage": 15,
     "controlling": true,
     "key": "travelLaneCrossSlope",
     "values": {
      "c1": "2%",
      "c2": "2%",
      "c3": "2%",
      "c4": "2%"
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Shoulder",
     "labelParts": [
      "Cross Slope",
      "Shoulder (5A)"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 15,
     "controlling": false,
     "key": "shoulderCrossSlope",
     "values": {
      "c1": "Paved Width <= 4 ft: 2%; Paved Width > 4 ft: 4%",
      "c2": "Paved Width <= 4 ft: 2%; Paved Width > 4 ft: 4%",
      "c3": "Paved Width <= 4 ft: 2%; Paved Width > 4 ft: 4%",
      "c4": "Paved Width <= 4 ft: 2%; Paved Width > 4 ft: 4%"
     },
     "notes": [
      "5A"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Lane Width",
     "labelParts": [
      "Auxiliary Lane",
      "Lane Width"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 15,
     "controlling": false,
     "key": "auxLaneWidth",
     "values": {
      "c1": "Des: Same as Through Lanes; Min: 11 ft",
      "c2": "Des: Same as Through Lanes; Min: 11 ft",
      "c3": "Des: Same as Through Lanes; Min: 11 ft",
      "c4": "Desirable: 12 ft; Minimum: 11 ft"
     },
     "numeric": {
      "c1": {
       "min": 11,
       "desText": "Same as Through Lanes"
      },
      "c2": {
       "min": 11,
       "desText": "Same as Through Lanes"
      },
      "c3": {
       "min": 11,
       "desText": "Same as Through Lanes"
      },
      "c4": {
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
      "Shoulder Width (6)"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 15,
     "controlling": false,
     "values": {
      "c1": "Same as Next to Travel Lane",
      "c2": "Same as Next to Travel Lane",
      "c3": "Same as Next to Travel Lane",
      "c4": "Same as Next to Travel Lane"
     },
     "notes": [
      "6"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Clear-Zone Width",
     "labelParts": [
      "Clear-Zone Width"
     ],
     "section": "49-2.0",
     "table": "main",
     "pdfPage": 15,
     "controlling": false,
     "key": "clearZone",
     "values": {
      "c1": "(7)",
      "c2": "(7)",
      "c3": "(7)",
      "c4": "(7)"
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Foreslope",
     "labelParts": [
      "Side Slopes (8)",
      "Cut",
      "Foreslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 15,
     "controlling": false,
     "key": "foreslope",
     "values": {
      "c1": "Des: 6:1; Max: 4:1 (9)",
      "c2": "Des: 6:1; Max: 4:1 (9)",
      "c3": "Des: 6:1; Max: 4:1 (9)",
      "c4": "Des: 6:1; Max: 4:1 (9)"
     },
     "notes": [
      "8",
      "9"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Ditch Width",
     "labelParts": [
      "Side Slopes (8)",
      "Cut",
      "Ditch Width"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 15,
     "controlling": false,
     "key": "ditchWidth",
     "values": {
      "c1": "4 ft (10)",
      "c2": "4 ft (10)",
      "c3": "4 ft (10)",
      "c4": "4 ft (10)"
     },
     "notes": [
      "8",
      "10"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Backslope",
     "labelParts": [
      "Side Slopes (8)",
      "Cut",
      "Backslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 15,
     "controlling": false,
     "key": "backslope",
     "values": {
      "c1": "4:1 for 20 ft; 3:1 Max. to Top (11)",
      "c2": "4:1 for 20 ft; 3:1 Max. to Top (11)",
      "c3": "4:1 for 20 ft; 3:1 Max. to Top (11)",
      "c4": "4:1 for 20 ft; 3:1 Max. to Top (11)"
     },
     "notes": [
      "8",
      "11"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Fill",
     "labelParts": [
      "Side Slopes (8)",
      "Fill"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 15,
     "controlling": false,
     "key": "fillSlope",
     "values": {
      "c1": "Des: 6:1 to Clear Zone; Max: 3:1 to Toe",
      "c2": "Des: 6:1 to Clear Zone; Max: 3:1 to Toe",
      "c3": "Des: 6:1 to Clear Zone; Max: 3:1 to Toe",
      "c4": "Des: 6:1 to Clear Zone; Max: 3:1 to Toe"
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
     "section": "Chp. 403",
     "table": "main",
     "pdfPage": 15,
     "controlling": true,
     "values": {
      "c1": "HL-93 (12)",
      "c2": "HL-93 (12)",
      "c3": "HL-93 (12)",
      "c4": "HL-93 (12)"
     },
     "notes": [
      "12"
     ]
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Clear-Roadway Width",
     "labelParts": [
      "New or Reconstructed Bridge",
      "Clear-Roadway Width (13)"
     ],
     "section": "45-4.01",
     "table": "main",
     "pdfPage": 15,
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "new",
     "values": {
      "c1": "Full Paved Approach Width",
      "c2": "Full Paved Approach Width",
      "c3": "Full Paved Approach Width",
      "c4": "Full Paved Approach Width"
     },
     "notes": [
      "13"
     ]
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Structural Capacity",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "*Structural Capacity"
     ],
     "section": "Chp. 412",
     "table": "main",
     "pdfPage": 15,
     "controlling": true,
     "values": {
      "c1": "HS-15",
      "c2": "HS-15",
      "c3": "HS-15",
      "c4": "HS-15"
     }
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Clear-Roadway Width",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "Clear-Roadway Width (14)"
     ],
     "section": "45-4.01",
     "table": "main",
     "pdfPage": 15,
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "existing",
     "values": {
      "c1": "22 ft",
      "c2": "22 ft",
      "c3": "24 ft",
      "c4": "28 ft"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector Under: New or Replaced Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Collector Under",
      "New or Replaced Overpassing Bridge (15)"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 15,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "new",
     "values": {
      "c1": "14.5 ft",
      "c2": "14.5 ft",
      "c3": "14.5 ft",
      "c4": "14.5 ft"
     },
     "notes": [
      "15"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector Under: Existing Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Collector Under",
      "Existing Overpassing Bridge"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 15,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "existing",
     "values": {
      "c1": "14 ft",
      "c2": "14 ft",
      "c3": "14 ft",
      "c4": "14 ft"
     }
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector Over Railroad",
     "labelParts": [
      "Vertical Clearance, Collector Over Railroad (16)"
     ],
     "section": "402-6.01",
     "table": "main",
     "pdfPage": 15,
     "controlling": false,
     "values": {
      "c1": "23 ft",
      "c2": "23 ft",
      "c3": "23 ft",
      "c4": "23 ft"
     },
     "notes": [
      "16"
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
     "pdfPage": 16,
     "controlling": false,
     "values": {
      "s40": "40 mph",
      "s45": "45 mph",
      "s50": "50 mph",
      "s55": "55 mph",
      "s60": "60 mph"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Stopping Sight Distance",
     "labelParts": [
      "*Stopping Sight Distance"
     ],
     "section": "42-1.0",
     "table": "alignment",
     "pdfPage": 16,
     "controlling": true,
     "key": "ssd",
     "values": {
      "s40": "305 ft",
      "s45": "360 ft",
      "s50": "425 ft",
      "s55": "495 ft",
      "s60": "570 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance: Speed / path / direction change",
     "labelParts": [
      "Decision Sight Distance",
      "Speed / path / direction change"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "pdfPage": 16,
     "controlling": false,
     "values": {
      "s40": "600 ft",
      "s45": "675 ft",
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
     "pdfPage": 16,
     "controlling": false,
     "values": {
      "s40": "330 ft",
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
     "pdfPage": 16,
     "controlling": false,
     "values": {
      "s40": "1470 ft",
      "s45": "1625 ft",
      "s50": "1835 ft",
      "s55": "1985 ft",
      "s60": "2135 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Intersection Sight Distance, -3% to +3%",
     "labelParts": [
      "Intersection Sight Distance, -3% to +3% (21)"
     ],
     "section": "46-10.0",
     "table": "alignment",
     "pdfPage": 16,
     "controlling": false,
     "values": {
      "s40": "P: 440 ft; SUT: 560 ft",
      "s45": "P: 500 ft; SUT: 630 ft",
      "s50": "P: 630 ft; SUT: 780 ft",
      "s55": "P: 730 ft; SUT: 890 ft",
      "s60": "P: 840 ft; SUT: 1020 ft"
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
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 16,
     "controlling": true,
     "key": "minRadius",
     "values": {
      "s40": "(17)",
      "s45": "(17)",
      "s50": "(17)",
      "s55": "(17)",
      "s60": "(17)"
     },
     "notes": [
      "17"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Superelevation Rate",
     "labelParts": [
      "*Superelevation Rate"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 16,
     "controlling": true,
     "key": "emax",
     "values": {
      "s40": "emax = 6% or 8% (17)",
      "s45": "emax = 6% or 8% (17)",
      "s50": "emax = 6% or 8% (17)",
      "s55": "emax = 6% or 8% (17)",
      "s60": "emax = 6% or 8% (17)"
     },
     "notes": [
      "17"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Horizontal Sight Distance",
     "labelParts": [
      "*Horizontal Sight Distance"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 16,
     "controlling": true,
     "values": {
      "s40": "(18)",
      "s45": "(18)",
      "s50": "(18)",
      "s55": "(18)",
      "s60": "(18)"
     },
     "notes": [
      "18"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Crest",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Crest"
     ],
     "section": "44-3.0",
     "table": "alignment",
     "pdfPage": 16,
     "controlling": true,
     "key": "crestK",
     "values": {
      "s40": "44",
      "s45": "61",
      "s50": "84",
      "s55": "114",
      "s60": "151"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Sag",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Sag"
     ],
     "section": "44-3.0",
     "table": "alignment",
     "pdfPage": 16,
     "controlling": true,
     "key": "sagK",
     "values": {
      "s40": "64",
      "s45": "79",
      "s50": "96",
      "s55": "115",
      "s60": "136"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Level",
     "labelParts": [
      "*Maximum Grade (19)",
      "Level"
     ],
     "section": "44-1.02",
     "table": "alignment",
     "pdfPage": 16,
     "controlling": true,
     "key": "maxGrade",
     "terrain": "level",
     "values": {
      "s40": "7%",
      "s45": "7%",
      "s50": "6%",
      "s55": "6%",
      "s60": "5%"
     },
     "notes": [
      "19"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Rolling",
     "labelParts": [
      "*Maximum Grade (19)",
      "Rolling"
     ],
     "section": "44-1.02",
     "table": "alignment",
     "pdfPage": 16,
     "controlling": true,
     "key": "maxGrade",
     "terrain": "rolling",
     "values": {
      "s40": "8%",
      "s45": "8%",
      "s50": "7%",
      "s55": "7%",
      "s60": "6%"
     },
     "notes": [
      "19"
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
     "pdfPage": 16,
     "controlling": false,
     "key": "minGrade",
     "values": {
      "s40": "Desirable: 0.5% Minimum: 0.0%",
      "s45": "Desirable: 0.5% Minimum: 0.0%",
      "s50": "Desirable: 0.5% Minimum: 0.0%",
      "s55": "Desirable: 0.5% Minimum: 0.0%",
      "s60": "Desirable: 0.5% Minimum: 0.0%"
     }
    }
   ],
   "legend": [
    "D or Des: Desirable; M or Min: Minimum",
    "* Level One controlling criterion, see page 2 of 4"
   ],
   "footnotes": {
    "1": "Design Forecast Year. If the DHV is less than 100 (based on a 20-year projection) the current AADT may be used for design.",
    "2": "Design Speed. The minimum design speed should equal the minimum value from the table or the anticipated posted speed limit after construction, whichever is higher. The legal speed limit is 55 mph on a non-posted highway.",
    "3": "Surface Type. The pavement-type selection will be determined by the INDOT Office of Pavement Engineering.",
    "4": "Shoulder Width. The following will apply. a. The shoulder is paved to the front face of guardrail. The desirable guardrail offset is 2 ft from the usable shoulder width. See Section 49-4.0 for more information. b. Usable shoulder width is defined as the distance from the edge of the travel lane to the shoulder break point. c. If curbs are to be used, the criteria described in Figure 53-8 should be applied.",
    "5": "Cross Slope, Travel Lanes. Cross slopes of 1.5% are acceptable on an existing bridge to remain in place.",
    "5A": "Cross Slope, Shoulder. See Figure 45-1A(1) or Figure 45-1A(2) for more-specific information.",
    "6": "Auxiliary Lane, Shoulder Width. At a minimum, a 2 ft width may be used adjacent to an auxiliary lane.",
    "7": "Clear-Zone Width. This will vary according to design speed, traffic volume, side slopes, and horizontal curvature. See Section 49-2.0.",
    "8": "Side Slope. Value is for new construction. See Sections 45-3.0 for more information. For a reconstruction project, see Section 49-3.0",
    "9": "Foreslope. See Sections 49-2.0 and 49-3.0 for the lateral extent of the foreslope in a ditch section.",
    "10": "Ditch Width. A V-ditch should be used in a rock cut. See Sections 45-3.0 and 107-6.01.",
    "11": "Backslope. The backslope for a rock cut will vary according to the height of the cut and the geotechnical requirements. See Section 107-6.01for typical rock-cut sections.",
    "12": "Structural Capacity, New or Reconstructed Bridge. The following will apply. a. A State-highway bridge within 15 mi of a Toll-Road gate must be designed for Toll-Road loading. b. A bridge on an Extra-Heavy-Duty Highway must be designed for the Michigan Train truck-loading configuration.",
    "13": "Width, New or Reconstructed Bridge. See Section 402-6.02(01) for more information. The bridge clear-roadway width is the algebraic sum of the following: a. the approach traveled-way width; b. the approach usable-shoulder width without guardrail; and c. a bridge-railing offset (see Figure 402-6H).",
    "14": "Width, Existing Bridge to Remain in Place. Clear-roadway width will be at least equal to the approach traveled-way width or the table value, whichever is greater.",
    "15": "Vertical Clearance, Collector Under. Value includes an additional 6-in. allowance for future pavement overlays. Vertical clearance applies from usable edge to usable edge of shoulders.",
    "16": "Vertical Clearance, Collector Over Railroad. See Chapter 402-6.01(03) for additional information on railroad clearance under a highway.",
    "17": "Superelevation Rate. See Section 305-4.0 for value of superelevation rate based on design speed and radius.",
    "18": "Horizontal Sight Distance. For a given design speed, the necessary middle ordinate will be determined by the radius and the sight distance which applies at the site. See Section 305-5.0",
    "19": "Maximum Grade. For a grade along a longitudinal distance of less than 480 ft (PVT to PVC), a one-way downgrade, or a road with AADT < 400, the maximum grade may be up to 2% steeper than the table value.",
    "20": "Use 12 ft if V = 55 mph.",
    "21": "Intersection Sight Distance. For a left turn onto a 2-lane roadway. P = Passenger car; SUT = single unit truck. See Figure 46-10G for values for a combination truck..",
    "*": "Level One controlling criterion. Except as noted in this chapter, the values shown in AASHTO's A Policy on Geometric Design of Highways and Streets (the Green Book) may be used as minimum values if they are lower than similar values shown herein. A controlling criterion that does not meet the minimum value is a design exception and is subject to approval. See Section 40-8.0 for low speed and high speed applications."
   },
   "transcriptionNotes": [
    "Revision label 'Rev. Jul. 2014' comes from the List of Figures / chapter revision table (Design Memo 14-10); it is not printed on the figure pages.",
    "Level of Service printed 'Desirable.: B; Minimum: C' (stray period).",
    "The highest AADT column is printed '> 2000' while the preceding column is '1500 <= AADT < 2000', so AADT exactly 2000 is not covered; conditions.adtMinExclusive = true records the printed '>'.",
    "The Design Speed row of the alignment table (page 2) has a blank Manual Section cell.",
    "Footnote (20) reads 'Use 12 ft if V = 55 mph.' as printed.",
    "Footnote (11) prints '107-6.01for' (missing space); footnote (21) ends 'truck..'.",
    "Auxiliary-lane width: 'Des: Same as Through Lanes; Min: 11 ft' spans the three lower AADT columns; '> 2000' column is 'Desirable: 12 ft; Minimum: 11 ft'."
   ]
  },
  {
   "id": "53-4",
   "title": "Geometric Design Criteria for Rural Collector, Local-Agency Route",
   "revision": "Rev. Jul. 2014",
   "printedTitle": "GEOMETRIC DESIGN CRITERIA FOR RURAL COLLECTOR, LOCAL-AGENCY ROUTE (New Construction or Reconstruction)",
   "pdfPages": [
    19,
    20,
    21,
    22
   ],
   "facility": "Rural Collector, Local-Agency Route",
   "area": "rural",
   "isFreeway": false,
   "applicability": "These criteria apply only to a federal-aid project.",
   "columns": [
    {
     "key": "c1",
     "label": "2 Lanes / < 400",
     "conditions": {
      "lanes": 2,
      "adtMax": 400
     },
     "table": "main"
    },
    {
     "key": "c2",
     "label": "2 Lanes / 400 <= AADT < 1500",
     "conditions": {
      "lanes": 2,
      "adtMin": 400,
      "adtMax": 1500
     },
     "table": "main"
    },
    {
     "key": "c3",
     "label": "2 Lanes / 1500 <= AADT < 2000",
     "conditions": {
      "lanes": 2,
      "adtMin": 1500,
      "adtMax": 2000
     },
     "table": "main"
    },
    {
     "key": "c4",
     "label": "2 Lanes / >= 2000",
     "conditions": {
      "lanes": 2,
      "adtMin": 2000
     },
     "table": "main"
    },
    {
     "key": "s30",
     "label": "2 Lanes / 30 mph",
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
     "label": "2 Lanes / 35 mph",
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
     "label": "2 Lanes / 45 mph",
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
     "label": "2 Lanes / 50 mph",
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
     "label": "2 Lanes / 55 mph",
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
     "label": "2 Lanes / 60 mph",
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
     "element": "Design-Year Traffic, AADT",
     "labelParts": [
      "Design-Year Traffic, AADT"
     ],
     "section": "40-2.01",
     "table": "main",
     "pdfPage": 19,
     "controlling": false,
     "values": {
      "c1": "< 400",
      "c2": "400 <= AADT < 1500",
      "c3": "1500 <= AADT < 2000",
      "c4": ">= 2000"
     }
    },
    {
     "group": "Design Controls",
     "element": "Design Forecast Period",
     "labelParts": [
      "Design Forecast Period"
     ],
     "section": "40-2.02",
     "table": "main",
     "pdfPage": 19,
     "controlling": false,
     "values": {
      "c1": "20 Years",
      "c2": "20 Years",
      "c3": "20 Years",
      "c4": "20 Years"
     }
    },
    {
     "group": "Design Controls",
     "element": "Design Speed, mph: Level",
     "labelParts": [
      "*Design Speed, mph (3)",
      "Level"
     ],
     "section": "40-3.0",
     "table": "main",
     "pdfPage": 19,
     "controlling": true,
     "key": "designSpeed",
     "terrain": "level",
     "values": {
      "c1": "35 - 55",
      "c2": "50 - 55",
      "c3": "50 - 55",
      "c4": "60"
     },
     "notes": [
      "3"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Design Speed, mph: Rolling",
     "labelParts": [
      "*Design Speed, mph (3)",
      "Rolling"
     ],
     "section": "40-3.0",
     "table": "main",
     "pdfPage": 19,
     "controlling": true,
     "key": "designSpeed",
     "terrain": "rolling",
     "values": {
      "c1": "30 - 55",
      "c2": "35 - 55",
      "c3": "35 - 55",
      "c4": "50 - 55"
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
     "pdfPage": 19,
     "controlling": false,
     "values": {
      "c1": "None",
      "c2": "None",
      "c3": "None",
      "c4": "None"
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
     "pdfPage": 19,
     "controlling": false,
     "values": {
      "c1": "Desirable: B; Minimum: C",
      "c2": "Desirable: B; Minimum: C",
      "c3": "Desirable: B; Minimum: C",
      "c4": "Desirable: B; Minimum: C"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Width",
     "labelParts": [
      "Travel Lane",
      "*Width (4)"
     ],
     "section": "45-1.01",
     "table": "main",
     "pdfPage": 19,
     "controlling": true,
     "key": "laneWidth",
     "values": {
      "c1": "10 ft (4a)",
      "c2": "11 ft",
      "c3": "11 ft (4b)",
      "c4": "12 ft"
     },
     "numeric": {
      "c1": {
       "des": 10,
       "min": 10,
       "single": true
      },
      "c2": {
       "des": 11,
       "min": 11,
       "single": true
      },
      "c3": {
       "des": 11,
       "min": 11,
       "single": true
      },
      "c4": {
       "des": 12,
       "min": 12,
       "single": true
      }
     },
     "notes": [
      "4",
      "4a",
      "4b"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Typical Surface Type",
     "labelParts": [
      "Travel Lane",
      "Typical Surface Type"
     ],
     "section": "Chp. 602",
     "table": "main",
     "pdfPage": 19,
     "controlling": false,
     "values": {
      "c1": "Asphalt / Concrete",
      "c2": "Asphalt / Concrete",
      "c3": "Asphalt / Concrete",
      "c4": "Asphalt / Concrete"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Width Usable",
     "labelParts": [
      "Shoulder",
      "*Width Usable"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 19,
     "controlling": true,
     "key": "shoulderRightUsable",
     "values": {
      "c1": "Des: 4 ft; Min: 2 ft (5)",
      "c2": "Des: 6 ft; Min: 4 ft",
      "c3": "Des: 8 ft; Min: 6 ft",
      "c4": "Des: 10 ft; Min: 8 ft"
     },
     "numeric": {
      "c1": {
       "des": 4,
       "min": 2
      },
      "c2": {
       "des": 6,
       "min": 4
      },
      "c3": {
       "des": 8,
       "min": 6
      },
      "c4": {
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
     "element": "Shoulder: Width Paved, optional",
     "labelParts": [
      "Shoulder",
      "*Width Paved, optional"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 19,
     "controlling": true,
     "key": "shoulderRightPaved",
     "values": {
      "c1": "2 ft",
      "c2": "4 ft",
      "c3": "6 ft",
      "c4": "8 ft"
     },
     "numeric": {
      "c1": {
       "des": 2,
       "min": 2,
       "single": true
      },
      "c2": {
       "des": 4,
       "min": 4,
       "single": true
      },
      "c3": {
       "des": 6,
       "min": 6,
       "single": true
      },
      "c4": {
       "des": 8,
       "min": 8,
       "single": true
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
     "section": "Chp. 602",
     "table": "main",
     "pdfPage": 19,
     "controlling": false,
     "values": {
      "c1": "Asphalt / Aggregate / Earth",
      "c2": "Asphalt / Aggregate / Earth",
      "c3": "Asphalt / Aggregate / Earth",
      "c4": "Asphalt / Aggregate / Earth"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Travel Lane",
     "labelParts": [
      "Cross Slope",
      "*Travel Lane (6)"
     ],
     "section": "45-1.01",
     "table": "main",
     "pdfPage": 19,
     "controlling": true,
     "key": "travelLaneCrossSlope",
     "values": {
      "c1": "2%",
      "c2": "2%",
      "c3": "2%",
      "c4": "2%"
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
      "Shoulder (6A)"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 19,
     "controlling": false,
     "key": "shoulderCrossSlope",
     "values": {
      "c1": "Paved Width <= 4 ft: 2%; Paved Width > 4 ft: 4% - 6% Asphalt; 6%-8% Aggregate; 8% Earth",
      "c2": "Paved Width <= 4 ft: 2%; Paved Width > 4 ft: 4% - 6% Asphalt; 6%-8% Aggregate; 8% Earth",
      "c3": "Paved Width <= 4 ft: 2%; Paved Width > 4 ft: 4% - 6% Asphalt; 6%-8% Aggregate; 8% Earth",
      "c4": "Paved Width <= 4 ft: 2%; Paved Width > 4 ft: 4% - 6% Asphalt; 6%-8% Aggregate; 8% Earth"
     },
     "notes": [
      "6A"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Lane Width",
     "labelParts": [
      "Auxiliary Lane",
      "Lane Width"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 19,
     "controlling": false,
     "key": "auxLaneWidth",
     "values": {
      "c1": "10 ft",
      "c2": "10 ft",
      "c3": "Desirable: 11 ft; Minimum: 10 ft",
      "c4": "Desirable: 12 ft; Minimum: 10 ft"
     },
     "numeric": {
      "c1": {
       "des": 10,
       "min": 10,
       "single": true
      },
      "c2": {
       "des": 10,
       "min": 10,
       "single": true
      },
      "c3": {
       "des": 11,
       "min": 10
      },
      "c4": {
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
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 19,
     "controlling": false,
     "values": {
      "c1": "Desirable: Same as Next to Travel Lane; Minimum: 2 ft",
      "c2": "Desirable: Same as Next to Travel Lane; Minimum: 2 ft",
      "c3": "Desirable: Same as Next to Travel Lane; Minimum: 2 ft",
      "c4": "Desirable: Same as Next to Travel Lane; Minimum: 2 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Clear-Zone Width",
     "labelParts": [
      "Clear-Zone Width"
     ],
     "section": "49-2.0",
     "table": "main",
     "pdfPage": 19,
     "controlling": false,
     "key": "clearZone",
     "values": {
      "c1": "(7)",
      "c2": "(7)",
      "c3": "(7)",
      "c4": "(7)"
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Foreslope",
     "labelParts": [
      "Side Slopes (8)",
      "Cut",
      "Foreslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 19,
     "controlling": false,
     "key": "foreslope",
     "values": {
      "c1": "Des: 6:1; Max: 4:1 (9)",
      "c2": "Des: 6:1; Max: 4:1 (9)",
      "c3": "Des: 6:1; Max: 4:1 (9)",
      "c4": "Des: 6:1; Max: 4:1 (9)"
     },
     "notes": [
      "8",
      "9"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Ditch Width",
     "labelParts": [
      "Side Slopes (8)",
      "Cut",
      "Ditch Width"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 19,
     "controlling": false,
     "key": "ditchWidth",
     "values": {
      "c1": "4 ft (10)",
      "c2": "4 ft (10)",
      "c3": "4 ft (10)",
      "c4": "4 ft (10)"
     },
     "notes": [
      "8",
      "10"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Backslope",
     "labelParts": [
      "Side Slopes (8)",
      "Cut",
      "Backslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 19,
     "controlling": false,
     "key": "backslope",
     "values": {
      "c1": "4:1 for 20 ft; 3:1 Max. to Top (11)",
      "c2": "4:1 for 20 ft; 3:1 Max. to Top (11)",
      "c3": "4:1 for 20 ft; 3:1 Max. to Top (11)",
      "c4": "4:1 for 20 ft; 3:1 Max. to Top (11)"
     },
     "notes": [
      "8",
      "11"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Fill",
     "labelParts": [
      "Side Slopes (8)",
      "Fill"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 19,
     "controlling": false,
     "key": "fillSlope",
     "values": {
      "c1": "Des: 6:1 to Clear Zone; Max: 3:1 to Toe",
      "c2": "Des: 6:1 to Clear Zone; Max: 3:1 to Toe",
      "c3": "Des: 6:1 to Clear Zone; Max: 3:1 to Toe",
      "c4": "Des: 6:1 to Clear Zone; Max: 3:1 to Toe"
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
     "section": "Chp. 403",
     "table": "main",
     "pdfPage": 19,
     "controlling": true,
     "values": {
      "c1": "HL-93",
      "c2": "HL-93",
      "c3": "HL-93",
      "c4": "HL-93"
     }
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Clear-Roadway Width",
     "labelParts": [
      "New or Reconstructed Bridge",
      "Clear-Roadway Width (12)"
     ],
     "section": "45-4.01",
     "table": "main",
     "pdfPage": 19,
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "new",
     "values": {
      "c1": "Travelway + 4 ft",
      "c2": "Travelway + 6 ft",
      "c3": "Travelway + 8 ft",
      "c4": "Full Paved Approach Width"
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
      "*Structural Capacity"
     ],
     "section": "Chp. 412",
     "table": "main",
     "pdfPage": 19,
     "controlling": true,
     "values": {
      "c1": "HS-15",
      "c2": "HS-15",
      "c3": "HS-15",
      "c4": "HS-15"
     }
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Clear-Roadway Width",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "Clear-Roadway Width (13)"
     ],
     "section": "45-4.01",
     "table": "main",
     "pdfPage": 19,
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "existing",
     "values": {
      "c1": "22 ft",
      "c2": "22 ft",
      "c3": "24 ft",
      "c4": "28 ft"
     },
     "notes": [
      "13"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector Under: New or Replaced Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Collector Under",
      "New or Replaced Overpassing Bridge (14)"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 19,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "new",
     "values": {
      "c1": "14.5 ft",
      "c2": "14.5 ft",
      "c3": "14.5 ft",
      "c4": "14.5 ft"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector Under: Existing Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Collector Under",
      "Existing Overpassing Bridge"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 19,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "existing",
     "values": {
      "c1": "14 ft",
      "c2": "14 ft",
      "c3": "14 ft",
      "c4": "14 ft"
     }
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector Over Railroad",
     "labelParts": [
      "Vertical Clearance, Collector Over Railroad (15)"
     ],
     "section": "402-6.01",
     "table": "main",
     "pdfPage": 19,
     "controlling": false,
     "values": {
      "c1": "23 ft",
      "c2": "23 ft",
      "c3": "23 ft",
      "c4": "23 ft"
     },
     "notes": [
      "15"
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
     "pdfPage": 20,
     "controlling": false,
     "values": {
      "s30": "30 mph",
      "s35": "35 mph",
      "s45": "45 mph",
      "s50": "50 mph",
      "s55": "55 mph",
      "s60": "60 mph"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Stopping Sight Distance",
     "labelParts": [
      "*Stopping Sight Distance"
     ],
     "section": "42-1.0",
     "table": "alignment",
     "pdfPage": 20,
     "controlling": true,
     "key": "ssd",
     "values": {
      "s30": "200 ft",
      "s35": "250 ft",
      "s45": "360 ft",
      "s50": "425 ft",
      "s55": "495 ft",
      "s60": "570 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Decision Sight Distance: Speed / path / direction change",
     "labelParts": [
      "Decision Sight Distance",
      "Speed / path / direction change"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "pdfPage": 20,
     "controlling": false,
     "values": {
      "s30": "450 ft",
      "s35": "525 ft",
      "s45": "675 ft",
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
     "pdfPage": 20,
     "controlling": false,
     "values": {
      "s30": "220 ft",
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
     "pdfPage": 20,
     "controlling": false,
     "values": {
      "s30": "1090 ft",
      "s35": "1280 ft",
      "s45": "1625 ft",
      "s50": "1835 ft",
      "s55": "1985 ft",
      "s60": "2135 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Intersection Sight Distance, -3% to +3%",
     "labelParts": [
      "Intersection Sight Distance, -3% to +3% (19)"
     ],
     "section": "46-10.0",
     "table": "alignment",
     "pdfPage": 20,
     "controlling": false,
     "values": {
      "s30": "P: 330 ft; SUT: 420 ft",
      "s35": "P: 390 ft; SUT: 490 ft",
      "s45": "P: 500 ft; SUT: 630 ft",
      "s50": "P: 630 ft; SUT: 780 ft",
      "s55": "P: 730 ft; SUT: 890 ft",
      "s60": "P: 840 ft; SUT: 1020 ft"
     },
     "notes": [
      "19"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Radius",
     "labelParts": [
      "*Minimum Radius"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 20,
     "controlling": true,
     "key": "minRadius",
     "values": {
      "s30": "(16)",
      "s35": "(16)",
      "s45": "(16)",
      "s50": "(16)",
      "s55": "(16)",
      "s60": "(16)"
     },
     "notes": [
      "16"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Superelevation Rate",
     "labelParts": [
      "*Superelevation Rate"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 20,
     "controlling": true,
     "key": "emax",
     "values": {
      "s30": "emax = 6% or 8% (16)",
      "s35": "emax = 6% or 8% (16)",
      "s45": "emax = 6% or 8% (16)",
      "s50": "emax = 6% or 8% (16)",
      "s55": "emax = 6% or 8% (16)",
      "s60": "emax = 6% or 8% (16)"
     },
     "notes": [
      "16"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Horizontal Sight Distance",
     "labelParts": [
      "*Horizontal Sight Distance"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 20,
     "controlling": true,
     "values": {
      "s30": "(17)",
      "s35": "(17)",
      "s45": "(17)",
      "s50": "(17)",
      "s55": "(17)",
      "s60": "(17)"
     },
     "notes": [
      "17"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Crest",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Crest"
     ],
     "section": "44-3.0",
     "table": "alignment",
     "pdfPage": 20,
     "controlling": true,
     "key": "crestK",
     "values": {
      "s30": "19",
      "s35": "29",
      "s45": "61",
      "s50": "84",
      "s55": "114",
      "s60": "151"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Sag",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Sag"
     ],
     "section": "44-3.0",
     "table": "alignment",
     "pdfPage": 20,
     "controlling": true,
     "key": "sagK",
     "values": {
      "s30": "37",
      "s35": "49",
      "s45": "79",
      "s50": "96",
      "s55": "115",
      "s60": "136"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Level",
     "labelParts": [
      "*Maximum Grade (18)",
      "Level"
     ],
     "section": "44-1.02",
     "table": "alignment",
     "pdfPage": 20,
     "controlling": true,
     "key": "maxGrade",
     "terrain": "level",
     "values": {
      "s30": "7%",
      "s35": "7%",
      "s45": "6%",
      "s50": "6%",
      "s55": "5.5%",
      "s60": "5%"
     },
     "notes": [
      "18"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Rolling",
     "labelParts": [
      "*Maximum Grade (18)",
      "Rolling"
     ],
     "section": "44-1.02",
     "table": "alignment",
     "pdfPage": 20,
     "controlling": true,
     "key": "maxGrade",
     "terrain": "rolling",
     "values": {
      "s30": "9%",
      "s35": "8%",
      "s45": "7%",
      "s50": "7%",
      "s55": "6.5%",
      "s60": "6%"
     },
     "notes": [
      "18"
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
     "pdfPage": 20,
     "controlling": false,
     "key": "minGrade",
     "values": {
      "s30": "Desirable: 0.5%; Minimum: 0.0%",
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
    "* Level One controlling criterion, see page 2 of 4"
   ],
   "footnotes": {
    "1": "(Blank.)",
    "2": "(Blank.)",
    "3": "Design Speed. The minimum design speed should equal the minimum value or the anticipated posted speed limit after construction, whichever is greater. The legal speed limit is 55 mph on a non-posted highway.",
    "4": "Travel-Lane Width. The following will apply. a. Use an 11-ft width if the design speed is 55 mph. b. Use a 12-ft width if the design speed is 55 mph.",
    "5": "Shoulder Width. The following will apply. a. If guardrail is required, the minimum width is 4 ft. b. Usable-shoulder width is defined as the distance from the edge of the travel lane to the shoulder break point. c. If curbs are to be used, the criteria described in Figure 53-8 should be applied.",
    "6": "Cross Slope, Travel Lanes. Cross slopes of 1.5% are acceptable on an existing bridge to remain in place.",
    "6A": "Cross Slope, Shoulder. See Figure 45-1A(1) or Figure 45-1A(2) for more-specific information.",
    "7": "Clear-Zone Width. This will vary according to design speed, traffic volume, side slopes, and horizontal curvature. See Section 49-2.0.",
    "8": "Side Slope. Value is for new construction. See Section 45-3.0 for more information. For a reconstruction project, see Section 49-3.0.",
    "9": "Foreslope. See Sections 49-2.0 and 49-3.0 for the lateral extent of the foreslope in a ditch section.",
    "10": "Ditch Width. A V-ditch should be used in a rock cut.",
    "11": "Backslope. The backslope for a rock cut will vary according to the height of the cut and the geotechnical requirements. See Sections 45-3.02 and 107-6.02 for typical rock-cut sections.",
    "12": "Width, New or Reconstructed Bridge. See Section 402-6.02(01) for more information. The bridge clear-roadway width is the algebraic sum of the following: a. the approach traveled-way width; b. the approach usable shoulder width without guardrail; and c. a bridge-railing offset (see Figure 402-6H).",
    "13": "Width, Existing Bridge to Remain in Place. Clear-roadway width will be at least equal to the approach traveled-way width or the table value, whichever is greater. For a bridge longer than 100 ft, the value does not apply. The acceptability of such a bridge will be assessed individually.",
    "14": "Vertical Clearance, Collector Under. Value includes an additional 6 in. allowance for future pavement overlays. Vertical clearance applies from usable edge to usable edge of shoulders.",
    "15": "Vertical Clearance, Collector Over Railroad. See Chapter 402-6.01(03) for additional information on railroad clearance under a highway.",
    "16": "Superelevation Rate. See Section 305-4.0 for value of superelevation rate based on design speed and radius.",
    "17": "Horizontal Sight Distance. For a given design speed, the necessary middle ordinate will be determined by the radius and the sight distance which applies at the site. See Section 305-5.0.",
    "18": "Maximum Grade. For a grade along a longitudinal distance of less than 480 ft (PVT to PVC), a one-way downgrade, or a road with AADT < 400, the maximum grade may be up to 2% steeper than the table value.",
    "19": "Intersection Sight Distance. For a left turn onto a 2-lane roadway: P = Passenger car; SUT = single unit truck. See Figure 46-10G for value for a combination truck.",
    "*": "Level One controlling criterion. Except as noted in this chapter, the values shown in AASHTO's A Policy on Geometric Design of Highways and Streets (the Green Book) may be used as minimum values if they are lower than similar values shown herein. A controlling criterion that does not meet the minimum value is a design exception and is subject to approval. See Section 40-8.0 for low speed and high speed applications."
   },
   "transcriptionNotes": [
    "Revision label 'Rev. Jul. 2014' comes from the List of Figures / chapter revision table (Design Memo 14-10); it is not printed on the figure pages.",
    "Footnotes (1) and (2) are printed '(Blank.)'.",
    "Footnote (4) items a and b both read 'if the design speed is 55 mph' (a: 11-ft width; b: 12-ft width) - the comparison symbols appear to be missing in the IDM; the lane-width cells reference (4a) in the < 400 column and (4b) in the 1500 <= AADT < 2000 column.",
    "The alignment table has no 40 mph column (30, 35, 45, 50, 55, 60 mph).",
    "The Design Speed row of the alignment table (page 2) has a blank Manual Section cell.",
    "New/reconstructed bridge Structural Capacity 'HL-93' carries no footnote here (footnote numbering skips from (11) Backslope to (12) Width, New or Reconstructed Bridge).",
    "Footnote (11) cites Sections 45-3.02 and 107-6.02 (Figure 53-2 cites 45-3.0 and 107-6.01)."
   ]
  },
  {
   "id": "53-5",
   "title": "Geometric Design Criteria for Rural Local Road",
   "revision": "Rev. Jul. 2014",
   "printedTitle": "GEOMETRIC DESIGN CRITERIA FOR RURAL LOCAL ROAD (New Construction or Reconstruction)",
   "pdfPages": [
    23,
    24,
    25,
    26
   ],
   "facility": "Rural Local Road",
   "area": "rural",
   "isFreeway": false,
   "applicability": "These criteria apply only to a federal-aid project.",
   "columns": [
    {
     "key": "c1",
     "label": "2 Lanes / < 50",
     "conditions": {
      "lanes": 2,
      "adtMax": 50
     },
     "table": "main"
    },
    {
     "key": "c2",
     "label": "2 Lanes / 50 <= AADT < 250",
     "conditions": {
      "lanes": 2,
      "adtMin": 50,
      "adtMax": 250
     },
     "table": "main"
    },
    {
     "key": "c3",
     "label": "2 Lanes / 250 <= AADT < 400",
     "conditions": {
      "lanes": 2,
      "adtMin": 250,
      "adtMax": 400
     },
     "table": "main"
    },
    {
     "key": "c4",
     "label": "2 Lanes / 400 <= AADT < 1500",
     "conditions": {
      "lanes": 2,
      "adtMin": 400,
      "adtMax": 1500
     },
     "table": "main"
    },
    {
     "key": "c5",
     "label": "2 Lanes / 1500 <= AADT < 2000",
     "conditions": {
      "lanes": 2,
      "adtMin": 1500,
      "adtMax": 2000
     },
     "table": "main"
    },
    {
     "key": "c6",
     "label": "2 Lanes / >= 2000",
     "conditions": {
      "lanes": 2,
      "adtMin": 2000
     },
     "table": "main"
    },
    {
     "key": "s20",
     "label": "2 Lanes / 20 mph",
     "conditions": {
      "designSpeed": [
       20,
       20
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s25",
     "label": "2 Lanes / 25 mph",
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
     "label": "2 Lanes / 30 mph",
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
     "label": "2 Lanes / 35 mph",
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
     "label": "2 Lanes / 45 mph",
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
     "label": "2 Lanes / 50 mph",
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
     "label": "2 Lanes / 55 mph",
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
     "element": "Design-Year Traffic, AADT",
     "labelParts": [
      "Design-Year Traffic, AADT"
     ],
     "section": "40-2.01",
     "table": "main",
     "pdfPage": 23,
     "controlling": false,
     "values": {
      "c1": "< 50",
      "c2": "50 <= AADT < 250",
      "c3": "250 <= AADT < 400",
      "c4": "400 <= AADT < 1500",
      "c5": "1500 <= AADT < 2000",
      "c6": ">= 2000"
     }
    },
    {
     "group": "Design Controls",
     "element": "Design Forecast Period",
     "labelParts": [
      "Design Forecast Period"
     ],
     "section": "40-2.02",
     "table": "main",
     "pdfPage": 23,
     "controlling": false,
     "values": {
      "c1": "20 years",
      "c2": "20 years",
      "c3": "20 years",
      "c4": "20 years",
      "c5": "20 years",
      "c6": "20 years"
     }
    },
    {
     "group": "Design Controls",
     "element": "Design Speed, mph: Level",
     "labelParts": [
      "*Design Speed, mph (3)",
      "Level"
     ],
     "section": "40-3.0",
     "table": "main",
     "pdfPage": 23,
     "controlling": true,
     "key": "designSpeed",
     "terrain": "level",
     "values": {
      "c1": "30 - 55",
      "c2": "30 - 55",
      "c3": "35 - 55",
      "c4": "50 - 55",
      "c5": "50 - 55",
      "c6": "50 - 55"
     },
     "notes": [
      "3"
     ]
    },
    {
     "group": "Design Controls",
     "element": "Design Speed, mph: Rolling",
     "labelParts": [
      "*Design Speed, mph (3)",
      "Rolling"
     ],
     "section": "40-3.0",
     "table": "main",
     "pdfPage": 23,
     "controlling": true,
     "key": "designSpeed",
     "terrain": "rolling",
     "values": {
      "c1": "30 - 55",
      "c2": "30 - 55",
      "c3": "30 - 55",
      "c4": "35 - 55",
      "c5": "35 - 55",
      "c6": "35 - 55"
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
     "pdfPage": 23,
     "controlling": false,
     "values": {
      "c1": "None",
      "c2": "None",
      "c3": "None",
      "c4": "None",
      "c5": "None",
      "c6": "None"
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
     "pdfPage": 23,
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
     "section": "45-1.01",
     "table": "main",
     "pdfPage": 23,
     "controlling": true,
     "key": "laneWidth",
     "values": {
      "c1": "10 ft",
      "c2": "10 ft",
      "c3": "10 ft (4a)",
      "c4": "11 ft",
      "c5": "11 ft (4b)",
      "c6": "12 ft"
     },
     "numeric": {
      "c1": {
       "des": 10,
       "min": 10,
       "single": true
      },
      "c2": {
       "des": 10,
       "min": 10,
       "single": true
      },
      "c3": {
       "des": 10,
       "min": 10,
       "single": true
      },
      "c4": {
       "des": 11,
       "min": 11,
       "single": true
      },
      "c5": {
       "des": 11,
       "min": 11,
       "single": true
      },
      "c6": {
       "des": 12,
       "min": 12,
       "single": true
      }
     },
     "notes": [
      "4a",
      "4b"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Typical Surface Type",
     "labelParts": [
      "Travel Lane",
      "Typical Surface Type"
     ],
     "section": "Chp. 602",
     "table": "main",
     "pdfPage": 23,
     "controlling": false,
     "values": {
      "c1": "Asphalt / Concrete / Aggregate",
      "c2": "Asphalt / Concrete / Aggregate",
      "c3": "Asphalt / Concrete / Aggregate",
      "c4": "Asphalt / Concrete / Aggregate",
      "c5": "Asphalt / Concrete / Aggregate",
      "c6": "Asphalt / Concrete / Aggregate"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Width Usable",
     "labelParts": [
      "Shoulder",
      "*Width Usable"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 23,
     "controlling": true,
     "key": "shoulderRightUsable",
     "values": {
      "c1": "2 ft",
      "c2": "2 ft",
      "c3": "2 ft",
      "c4": "6 ft (5)",
      "c5": "6 ft",
      "c6": "8 ft"
     },
     "numeric": {
      "c1": {
       "des": 2,
       "min": 2,
       "single": true
      },
      "c2": {
       "des": 2,
       "min": 2,
       "single": true
      },
      "c3": {
       "des": 2,
       "min": 2,
       "single": true
      },
      "c4": {
       "des": 6,
       "min": 6,
       "single": true
      },
      "c5": {
       "des": 6,
       "min": 6,
       "single": true
      },
      "c6": {
       "des": 8,
       "min": 8,
       "single": true
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
      "Shoulder",
      "Typical Surface Type"
     ],
     "section": "Chp. 602",
     "table": "main",
     "pdfPage": 23,
     "controlling": false,
     "values": {
      "c1": "Asphalt / Aggregate / Earth",
      "c2": "Asphalt / Aggregate / Earth",
      "c3": "Asphalt / Aggregate / Earth",
      "c4": "Asphalt / Aggregate / Earth",
      "c5": "Asphalt / Aggregate / Earth",
      "c6": "Asphalt / Aggregate / Earth"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Travel Lane",
     "labelParts": [
      "Cross Slope",
      "*Travel Lane (6)"
     ],
     "section": "45-1.01",
     "table": "main",
     "pdfPage": 23,
     "controlling": true,
     "key": "travelLaneCrossSlope",
     "values": {
      "c1": "2%-3% Asphalt / Concrete; 6% Aggregate",
      "c2": "2%-3% Asphalt / Concrete; 6% Aggregate",
      "c3": "2%-3% Asphalt / Concrete; 6% Aggregate",
      "c4": "2%-3% Asphalt / Concrete; 6% Aggregate",
      "c5": "2%-3% Asphalt / Concrete; 6% Aggregate",
      "c6": "2%-3% Asphalt / Concrete; 6% Aggregate"
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
      "Shoulder (6A)"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 23,
     "controlling": false,
     "key": "shoulderCrossSlope",
     "values": {
      "c1": "Paved Width <= 4 ft: 2% - 3%; Paved Width > 4 ft: 4% - 6% Asphalt/Concrete; 6%-8% Aggregate; 8% Earth",
      "c2": "Paved Width <= 4 ft: 2% - 3%; Paved Width > 4 ft: 4% - 6% Asphalt/Concrete; 6%-8% Aggregate; 8% Earth",
      "c3": "Paved Width <= 4 ft: 2% - 3%; Paved Width > 4 ft: 4% - 6% Asphalt/Concrete; 6%-8% Aggregate; 8% Earth",
      "c4": "Paved Width <= 4 ft: 2% - 3%; Paved Width > 4 ft: 4% - 6% Asphalt/Concrete; 6%-8% Aggregate; 8% Earth",
      "c5": "Paved Width <= 4 ft: 2% - 3%; Paved Width > 4 ft: 4% - 6% Asphalt/Concrete; 6%-8% Aggregate; 8% Earth",
      "c6": "Paved Width <= 4 ft: 2% - 3%; Paved Width > 4 ft: 4% - 6% Asphalt/Concrete; 6%-8% Aggregate; 8% Earth"
     },
     "notes": [
      "6A"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Lane Width",
     "labelParts": [
      "Auxiliary Lane",
      "Lane Width"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 23,
     "controlling": false,
     "key": "auxLaneWidth",
     "values": {
      "c1": "Same as Travel Lane",
      "c2": "Same as Travel Lane",
      "c3": "Same as Travel Lane",
      "c4": "Des: Same as Travel Lane; Min: 10 ft",
      "c5": "Des: Same as Travel Lane; Min: 10 ft",
      "c6": "Des: Same as Travel Lane; Min: 10 ft"
     },
     "numeric": {
      "c4": {
       "min": 10,
       "desText": "Same as Travel Lane"
      },
      "c5": {
       "min": 10,
       "desText": "Same as Travel Lane"
      },
      "c6": {
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
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 23,
     "controlling": false,
     "values": {
      "c1": "Desirable: 4 ft; Minimum: 2 ft",
      "c2": "Desirable: 4 ft; Minimum: 2 ft",
      "c3": "Desirable: 4 ft; Minimum: 2 ft",
      "c4": "Desirable: 4 ft; Minimum: 2 ft",
      "c5": "Desirable: 4 ft; Minimum: 2 ft",
      "c6": "Desirable: 4 ft; Minimum: 2 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Clear-Zone Width",
     "labelParts": [
      "Clear-Zone Width"
     ],
     "section": "49-2.0",
     "table": "main",
     "pdfPage": 23,
     "controlling": false,
     "key": "clearZone",
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
     "element": "Side Slopes: Cut: Foreslope",
     "labelParts": [
      "Side Slopes",
      "Cut",
      "Foreslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 23,
     "controlling": false,
     "key": "foreslope",
     "values": {
      "c1": "4:1 (V >= 60) (8); 3:1 (V <= 50) (8)",
      "c2": "4:1 (V >= 60) (8); 3:1 (V <= 50) (8)",
      "c3": "4:1 (V >= 60) (8); 3:1 (V <= 50) (8)",
      "c4": "4:1 (V >= 60) (8); 3:1 (V <= 50) (8)",
      "c5": "4:1 (V >= 60) (8); 3:1 (V <= 50) (8)",
      "c6": "4:1 (V >= 60) (8); 3:1 (V <= 50) (8)"
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
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 23,
     "controlling": false,
     "key": "ditchWidth",
     "values": {
      "c1": "Des: 4 ft; Min: 0.0 ft",
      "c2": "Des: 4 ft; Min: 0.0 ft",
      "c3": "Des: 4 ft; Min: 0.0 ft",
      "c4": "Des: 4 ft; Min: 0.0 ft",
      "c5": "Des: 4 ft; Min: 0.0 ft",
      "c6": "Des: 4 ft; Min: 0.0 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Cut: Backslope",
     "labelParts": [
      "Side Slopes",
      "Cut",
      "Backslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 23,
     "controlling": false,
     "key": "backslope",
     "values": {
      "c1": "4:1 (V >= 60); 3:1 (V <= 50) (9)",
      "c2": "4:1 (V >= 60); 3:1 (V <= 50) (9)",
      "c3": "4:1 (V >= 60); 3:1 (V <= 50) (9)",
      "c4": "4:1 (V >= 60); 3:1 (V <= 50) (9)",
      "c5": "4:1 (V >= 60); 3:1 (V <= 50) (9)",
      "c6": "4:1 (V >= 60); 3:1 (V <= 50) (9)"
     },
     "notes": [
      "9"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Fill: 0-30 ft Height",
     "labelParts": [
      "Side Slopes",
      "Fill",
      "0-30 ft Height"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 23,
     "controlling": false,
     "key": "fillSlope",
     "variant": "0-30 ft height",
     "values": {
      "c1": "Desirable: 4:1; Maximum: 3:1",
      "c2": "Desirable: 4:1; Maximum: 3:1",
      "c3": "Desirable: 4:1; Maximum: 3:1",
      "c4": "Desirable: 4:1; Maximum: 3:1",
      "c5": "Desirable: 4:1; Maximum: 3:1",
      "c6": "Desirable: 4:1; Maximum: 3:1"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes: Fill: >30 ft Height",
     "labelParts": [
      "Side Slopes",
      "Fill",
      ">30 ft Height"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 23,
     "controlling": false,
     "key": "fillSlope",
     "variant": ">30 ft height",
     "values": {
      "c1": "3:1",
      "c2": "3:1",
      "c3": "3:1",
      "c4": "3:1",
      "c5": "3:1",
      "c6": "3:1"
     }
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Structural Capacity",
     "labelParts": [
      "New or Reconstructed Bridge",
      "*Structural Capacity"
     ],
     "section": "Chp. 403",
     "table": "main",
     "pdfPage": 23,
     "controlling": true,
     "values": {
      "c1": "HL-93",
      "c2": "HL-93",
      "c3": "HL-93",
      "c4": "HL-93",
      "c5": "HL-93",
      "c6": "HL-93"
     }
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Clear-Roadway Width",
     "labelParts": [
      "New or Reconstructed Bridge",
      "Clear-Roadway Width (10)"
     ],
     "section": "45-4.01",
     "table": "main",
     "pdfPage": 23,
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "new",
     "values": {
      "c1": "Travelway + 4 ft",
      "c2": "Travelway + 4 ft",
      "c3": "Travelway + 4 ft",
      "c4": "Travelway + 6 ft",
      "c5": "Travelway + 6 ft",
      "c6": "Full Paved Approach Width"
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
     "section": "Chp. 412",
     "table": "main",
     "pdfPage": 23,
     "controlling": true,
     "values": {
      "c1": "HS-10",
      "c2": "HS-15",
      "c3": "HS-15",
      "c4": "HS-15",
      "c5": "HS-15",
      "c6": "HS-15"
     }
    },
    {
     "group": "Bridges",
     "element": "Existing Bridge to Remain in Place: Clear-Roadway Width",
     "labelParts": [
      "Existing Bridge to Remain in Place",
      "Clear-Roadway Width (11)"
     ],
     "section": "45-4.01",
     "table": "main",
     "pdfPage": 23,
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "existing",
     "values": {
      "c1": "20 ft",
      "c2": "20 ft",
      "c3": "22 ft",
      "c4": "22 ft",
      "c5": "24 ft",
      "c6": "28 ft"
     },
     "notes": [
      "11"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Local Road Under: New or Replaced Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Local Road Under",
      "New or Replaced Overpassing Bridge (12)"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 23,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "new",
     "values": {
      "c1": "14.5 ft",
      "c2": "14.5 ft",
      "c3": "14.5 ft",
      "c4": "14.5 ft",
      "c5": "14.5 ft",
      "c6": "14.5 ft"
     },
     "notes": [
      "12"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Local Road Under: Existing Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Local Road Under",
      "Existing Overpassing Bridge"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 23,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "existing",
     "values": {
      "c1": "14 ft",
      "c2": "14 ft",
      "c3": "14 ft",
      "c4": "14 ft",
      "c5": "14 ft",
      "c6": "14 ft"
     }
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Local Road Over Railroad)",
     "labelParts": [
      "Vertical Clearance, Local Road Over Railroad) (13)"
     ],
     "section": "402-6.01",
     "table": "main",
     "pdfPage": 23,
     "controlling": false,
     "values": {
      "c1": "23 ft",
      "c2": "23 ft",
      "c3": "23 ft",
      "c4": "23 ft",
      "c5": "23 ft",
      "c6": "23 ft"
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
     "section": "----",
     "table": "alignment",
     "pdfPage": 24,
     "controlling": false,
     "values": {
      "s20": "20 mph",
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
     "element": "Stopping Sight Distance",
     "labelParts": [
      "*Stopping Sight Distance"
     ],
     "section": "42-1.0",
     "table": "alignment",
     "pdfPage": 24,
     "controlling": true,
     "key": "ssd",
     "values": {
      "s20": "115 ft",
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
     "element": "Decision Sight Distance: Speed / Path / Direction Chg.",
     "labelParts": [
      "Decision Sight Distance",
      "Speed / Path / Direction Chg."
     ],
     "section": "42-2.0",
     "table": "alignment",
     "pdfPage": 24,
     "controlling": false,
     "values": {
      "s20": "300 ft",
      "s25": "375 ft",
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
     "pdfPage": 24,
     "controlling": false,
     "values": {
      "s20": "130 ft",
      "s25": "170 ft",
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
     "pdfPage": 24,
     "controlling": false,
     "values": {
      "s20": "710 ft",
      "s25": "900 ft",
      "s30": "1090 ft",
      "s35": "1280 ft",
      "s45": "1625 ft",
      "s50": "1835 ft",
      "s55": "1985 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Intersection Sight Distance",
     "labelParts": [
      "Intersection Sight Distance"
     ],
     "section": "46-10.0",
     "table": "alignment",
     "pdfPage": 24,
     "controlling": false,
     "values": {
      "s20": "220 ft",
      "s25": "280 ft",
      "s30": "330 ft",
      "s35": "390 ft",
      "s45": "500 ft",
      "s50": "550 ft",
      "s55": "610 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Radius, e=8%",
     "labelParts": [
      "*Minimum Radius, e=8%"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 24,
     "controlling": true,
     "key": "minRadius",
     "values": {
      "s20": "(14)",
      "s25": "(14)",
      "s30": "(14)",
      "s35": "(14)",
      "s45": "(14)",
      "s50": "(14)",
      "s55": "(14)"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Superelevation Rate",
     "labelParts": [
      "*Superelevation Rate"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 24,
     "controlling": true,
     "key": "emax",
     "values": {
      "s20": "emax=6% or 8% (14)",
      "s25": "emax=6% or 8% (14)",
      "s30": "emax=6% or 8% (14)",
      "s35": "emax=6% or 8% (14)",
      "s45": "emax=6% or 8% (14)",
      "s50": "emax=6% or 8% (14)",
      "s55": "emax=6% or 8% (14)"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Horizontal Sight Distance",
     "labelParts": [
      "*Horizontal Sight Distance"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 24,
     "controlling": true,
     "values": {
      "s20": "(15)",
      "s25": "(15)",
      "s30": "(15)",
      "s35": "(15)",
      "s45": "(15)",
      "s50": "(15)",
      "s55": "(15)"
     },
     "notes": [
      "15"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Crest",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Crest"
     ],
     "section": "44-3.0",
     "table": "alignment",
     "pdfPage": 24,
     "controlling": true,
     "key": "crestK",
     "values": {
      "s20": "7",
      "s25": "12",
      "s30": "19",
      "s35": "29",
      "s45": "61",
      "s50": "84",
      "s55": "114"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Sag",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Sag"
     ],
     "section": "44-3.0",
     "table": "alignment",
     "pdfPage": 24,
     "controlling": true,
     "key": "sagK",
     "values": {
      "s20": "17",
      "s25": "26",
      "s30": "37",
      "s35": "49",
      "s45": "79",
      "s50": "96",
      "s55": "115"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Level",
     "labelParts": [
      "*Maximum Grade",
      "Level"
     ],
     "section": "44-1.02",
     "table": "alignment",
     "pdfPage": 24,
     "controlling": true,
     "key": "maxGrade",
     "terrain": "level",
     "values": {
      "s20": "8%",
      "s25": "7%",
      "s30": "7%",
      "s35": "7%",
      "s45": "7%",
      "s50": "6%",
      "s55": "5.5%"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Rolling",
     "labelParts": [
      "*Maximum Grade",
      "Rolling"
     ],
     "section": "44-1.02",
     "table": "alignment",
     "pdfPage": 24,
     "controlling": true,
     "key": "maxGrade",
     "terrain": "rolling",
     "values": {
      "s20": "11%",
      "s25": "11%",
      "s30": "10%",
      "s35": "9%",
      "s45": "9%",
      "s50": "8%",
      "s55": "7%"
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
     "pdfPage": 24,
     "controlling": false,
     "key": "minGrade",
     "values": {
      "s20": "Desirable: 0.5%; Minimum: 0.0%",
      "s25": "Desirable: 0.5%; Minimum: 0.0%",
      "s30": "Desirable: 0.5%; Minimum: 0.0%",
      "s35": "Desirable: 0.5%; Minimum: 0.0%",
      "s45": "Desirable: 0.5%; Minimum: 0.0%",
      "s50": "Desirable: 0.5%; Minimum: 0.0%",
      "s55": "Desirable: 0.5%; Minimum: 0.0%"
     }
    }
   ],
   "legend": [
    "Des: Desirable. Min: Minimum.",
    "* Level One controlling criterion, see page 2 of 4."
   ],
   "footnotes": {
    "1": "(Blank).",
    "2": "(Blank).",
    "3": "Design Speed. The minimum design speed should equal the minimum value or the anticipated posted speed limit after construction, whichever is greater. The legal speed limit is 55 mph on a non-posted highway.",
    "4": "Travel Lane Width. The following will apply. a. Use 11-ft lanes where V >= 50 mph. b. Use 12-ft lanes where V >= 55 mph.",
    "5": "Shoulder Width. The following will apply. a. For 400 <= AADT < 1500, the shoulder width may be 4 ft. b. Usable shoulder width is defined as the distance from the edge of the travel lane to the shoulder break point. c. If curbs are to be used, the criteria described in Figure 53-8 should be applied.",
    "6": "Cross Slope, Travel Lanes. Cross slopes of 1.5% are acceptable on an existing bridge to remain in place.",
    "6A": "Cross Slope, Shoulder. See Figure 45-1A(1) or Figure 45-1A(2) for more-specific information.",
    "7": "Clear-Zone Width. This will vary according to design speed, traffic volume, side slopes, and horizontal curvature. See Section 49-2.0. For a design speed of lower than 50 mph, a 10 ft clear-zone width may be used.",
    "8": "Foreslope. See Sections 49-2.0 and 49-3.0 for the lateral extent of the foreslope in a ditch section.",
    "9": "Backslope. The backslopes for a rock cut will vary according to the height of the cut and the geotechnical requirements.",
    "10": "Width, New or Reconstructed Bridge. See Section 402-6.02(01) for more information. The bridge clear-roadway width is the algebraic sum of the following: a. the approach traveled-way width; b. the approach usable shoulder width without guardrail; and c. a bridge-railing offset (see Figure 402-6H).",
    "11": "Width, Existing Bridge to Remain in Place. Minimum clear-roadway width of 2 ft narrower than the value may be used on a road with few trucks. The clear-roadway width should be at least the same width as the approach travelway. For a one-lane bridge, the width may be 18 ft. For a bridge longer than 100 ft, the value does not apply. The acceptability of each such bridge will be assessed individually.",
    "12": "Vertical Clearance, Local Road Under. Value includes an additional 6 in. allowance for future pavement overlays. Vertical clearance applies from usable edge to usable edge of shoulders.",
    "13": "Vertical Clearance, Local Road Over Railroad. See Chapter 402-6.01(03) for additional information on railroad clearance under highway.",
    "14": "Superelevation Rate. See Section 305-4.0 for value of superelevation rate based on design speed and radius.",
    "15": "Horizontal Sight Distance. For a given design speed, the necessary middle ordinate will be determined by the radius and the sight distance which applies at the site. See Section 305-5.0.",
    "*": "Level One controlling criterion. Except as noted in this chapter, the values shown in AASHTO's A Policy on Geometric Design of Highways and Streets (the Green Book) may be used as minimum values if they are lower than similar values shown herein. A controlling criterion that does not meet the minimum value is a design exception and is subject to approval. See Section 40-8.0 for low speed and high speed applications."
   },
   "transcriptionNotes": [
    "Revision label 'Rev. Jul. 2014' comes from the List of Figures / chapter revision table (Design Memo 14-10); it is not printed on the figure pages.",
    "Footnotes (1) and (2) are printed '(Blank).'",
    "Railroad row label printed 'Vertical Clearance, Local Road Over Railroad) (13)' (stray parenthesis).",
    "Foreslope and backslope are given for 'V >= 60' and 'V <= 50' only, while this figure's design speeds range up to 55 mph.",
    "Intersection Sight Distance row has no P/SUT split, no grade qualifier and no footnote; its 45/50/55 mph values (500/550/610 ft) differ from the passenger-car values in Figures 53-3 and 53-4 at 50/55 mph (630/730 ft).",
    "Minimum radius row is labeled '*Minimum Radius, e=8%' while the superelevation row reads 'emax=6% or 8% (14)'.",
    "'*Maximum Grade' carries no footnote in this figure.",
    "Bridge rows have uneven spans (read from the page image): new-bridge clear-roadway 'Travelway + 4 ft' spans AADT < 50 through 250-400, 'Travelway + 6 ft' spans 400-1500 and 1500-2000; existing-bridge 'HS-10' is < 50 only; existing clear-roadway '20 ft' spans < 50 and 50-250, '22 ft' spans 250-400 and 400-1500.",
    "Footnote (13) reads 'railroad clearance under highway' (missing 'a')."
   ]
  },
  {
   "id": "53-6",
   "title": "Geometric Design Criteria for Urban Arterial, Four or More Lanes",
   "revision": "Rev. Jul. 2014",
   "printedTitle": "GEOMETRIC DESIGN CRITERIA FOR URBAN ARTERIAL, 4 OR MORE LANES (New Construction or Reconstruction)",
   "pdfPages": [
    27,
    28,
    29,
    30
   ],
   "facility": "Urban Arterial, 4+ Lanes",
   "area": "urban",
   "isFreeway": false,
   "applicability": "These criteria apply to a route either on or off the National Highway System, regardless of funding source.",
   "columns": [
    {
     "key": "sub",
     "label": "Design Value (By Type of Area) / Suburban",
     "conditions": {
      "subcategory": "suburban"
     },
     "table": "main"
    },
    {
     "key": "int",
     "label": "Design Value (By Type of Area) / Intermediate",
     "conditions": {
      "subcategory": "intermediate"
     },
     "table": "main"
    },
    {
     "key": "bu",
     "label": "Design Value (By Type of Area) / Built-Up",
     "conditions": {
      "subcategory": "built-up"
     },
     "table": "main"
    },
    {
     "key": "s30",
     "label": "30 mph",
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
     "label": "35 mph",
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
     "label": "45 mph",
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
     "label": "50 mph",
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
     "label": "55 mph",
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
     "section": "40-2.02",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "values": {
      "sub": "20 Years",
      "int": "20 Years",
      "bu": "20 Years"
     }
    },
    {
     "group": "Design Controls",
     "element": "Design Speed, mph",
     "labelParts": [
      "Design Speed, mph (1)"
     ],
     "section": "40-3.0",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "key": "designSpeed",
     "values": {
      "sub": "Curbed: 45-55; Uncurbed: 50-60",
      "int": "Curbed: 40-50; Uncurbed: 50-60",
      "bu": "Curbed: 30-35"
     },
     "notes": [
      "1"
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
     "pdfPage": 27,
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
     "pdfPage": 27,
     "controlling": false,
     "values": {
      "sub": "Des: B; Min: C",
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
     "section": "45-1.04",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "values": {
      "sub": "None",
      "int": "Optional (2)",
      "bu": "Optional (2)"
     },
     "notes": [
      "2"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Width",
     "labelParts": [
      "Travel Lane",
      "*Width (3)"
     ],
     "section": "45-1.01",
     "table": "main",
     "pdfPage": 27,
     "controlling": true,
     "key": "laneWidth",
     "values": {
      "sub": "Curbed: 12 ft; Uncurbed: 12 ft",
      "int": "Curbed: Des.: 12 ft; Min.: 11 ft; Uncurbed: Des.: 12 ft; Min.: 11 ft",
      "bu": "Curbed: Des.: 12 ft; Min.: 10 ft"
     },
     "numeric": {
      "sub": {
       "curbed": {
        "des": 12,
        "min": 12,
        "single": true
       },
       "uncurbed": {
        "des": 12,
        "min": 12,
        "single": true
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
     "pdfPage": 27,
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete",
      "int": "Asphalt / Concrete",
      "bu": "Asphalt / Concrete"
     },
     "notes": [
      "4"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Curb Offset",
     "labelParts": [
      "*Curb Offset (5)"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 27,
     "controlling": true,
     "key": "curbOffset",
     "values": {
      "sub": "2 ft",
      "int": "2 ft",
      "bu": "2 ft"
     },
     "numeric": {
      "sub": {
       "des": 2,
       "min": 2,
       "single": true
      },
      "int": {
       "des": 2,
       "min": 2,
       "single": true
      },
      "bu": {
       "des": 2,
       "min": 2,
       "single": true
      }
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Paved Width",
     "labelParts": [
      "Shoulder",
      "*Paved Width (6)"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 27,
     "controlling": true,
     "key": "shoulderRightPaved",
     "values": {
      "sub": "Curbed, Rt. Des: 10 ft; Min 2 ft; Curbed, Lt. Des: 4 ft; Min 2 ft; Uncurbed, Rt.: 10 ft; Lt.: 4 ft",
      "int": "Curbed, Rt. Des: 8 ft; Min 2 ft; Curbed, Lt. Des: 4 ft; Min 2 ft; Uncurbed, Rt.: 8 ft; Lt.: 4 ft",
      "bu": "Right: 6 ft; Left: 4 ft"
     },
     "numeric": {
      "sub": {
       "curbed": {
        "des": 10,
        "min": 2,
        "left": {
         "des": 4,
         "min": 2
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
        "min": 2,
        "left": {
         "des": 4,
         "min": 2
        }
       },
       "uncurbed": {
        "des": 8,
        "min": 8,
        "single": true,
        "left": {
         "des": 4,
         "min": 4,
         "single": true
        }
       }
      },
      "bu": {
       "des": 6,
       "min": 6,
       "single": true,
       "left": {
        "des": 4,
        "min": 4,
        "single": true
       }
      }
     },
     "notes": [
      "6"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Typical Surface Type",
     "labelParts": [
      "Shoulder",
      "Typical Surface Type (4)"
     ],
     "section": "Ch. 602",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete",
      "int": "Asphalt / Concrete",
      "bu": "Asphalt / Concrete"
     },
     "notes": [
      "4"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Travel Lane",
     "labelParts": [
      "Cross Slope",
      "*Travel Lane (7)"
     ],
     "section": "45-1.01",
     "table": "main",
     "pdfPage": 27,
     "controlling": true,
     "key": "travelLaneCrossSlope",
     "values": {
      "sub": "2%",
      "int": "2%",
      "bu": "2%"
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Shoulder",
     "labelParts": [
      "Cross Slope",
      "Shoulder (7A)"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "key": "shoulderCrossSlope",
     "values": {
      "sub": "Paved Width <= 4 ft: 2%; Paved Width > 4 ft: 4%",
      "int": "Paved Width <= 4 ft: 2%; Paved Width > 4 ft: 4%",
      "bu": "Paved Width <= 4 ft: 2%; Paved Width > 4 ft: 4%"
     },
     "notes": [
      "7A"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Lane Width",
     "labelParts": [
      "Auxiliary Lane",
      "Lane Width"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 27,
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
      "Curb Offset (8)"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "values": {
      "sub": "1 ft",
      "int": "1 ft",
      "bu": "1 ft"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Shoulder Width",
     "labelParts": [
      "Auxiliary Lane",
      "Shoulder Width"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 27,
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
      "Typical Surface Type (4)"
     ],
     "section": "Ch. 602",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete",
      "int": "Asphalt / Concrete",
      "bu": "Asphalt / Concrete"
     },
     "notes": [
      "4"
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
     "pdfPage": 27,
     "controlling": false,
     "values": {
      "sub": "Des: 16 ft; Min. 14 ft",
      "int": "Des: 16 ft; Min: 14 ft",
      "bu": "Des: 14 ft; Min: 12 ft"
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
     "pdfPage": 27,
     "controlling": false,
     "key": "parkingLaneWidth",
     "values": {
      "sub": "N/A",
      "int": "Des: 12 ft; Min: 10 ft (9)",
      "bu": "Des: 12 ft; Min: 10 ft (9)"
     },
     "notes": [
      "9"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Median Width: Depressed",
     "labelParts": [
      "Median Width",
      "Depressed"
     ],
     "section": "45-2.0",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "key": "medianWidth",
     "variant": "depressed",
     "values": {
      "sub": "26.5 ft - 50 ft",
      "int": "N/A",
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
     "section": "45-2.0",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "key": "medianWidth",
     "variant": "raised island",
     "values": {
      "sub": "Des: 18 ft; Min: 13 ft (10)",
      "int": "Des: 18 ft; Min: 4 ft (10)",
      "bu": "Des: 18 ft; Min: 4 ft (10)"
     },
     "notes": [
      "10"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Median Width: Flush / Corrugated",
     "labelParts": [
      "Median Width",
      "Flush / Corrugated"
     ],
     "section": "45-2.0",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "key": "medianWidth",
     "variant": "flush / corrugated",
     "values": {
      "sub": "Des: 16 ft; Min: 13 ft (10)",
      "int": "Des: 16 ft; Min: 4 ft (10)",
      "bu": "Des: 16 ft; Min: 4 ft (10)"
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
     "pdfPage": 27,
     "controlling": false,
     "values": {
      "sub": "5 ft with 5-ft Buffer (Des)",
      "int": "5 ft with 5-ft Buffer (Des)",
      "bu": "Varies; 6 ft Min"
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
     "pdfPage": 27,
     "controlling": false,
     "values": {
      "sub": "Curbed: 5 ft; Uncurbed: Shld Width +4 ft",
      "int": "Curbed: 5 ft; Uncurbed: Shoulder Width +4 ft",
      "bu": "Curbed: 5 ft"
     },
     "notes": [
      "12"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Clear-Zone Width",
     "labelParts": [
      "Clear-Zone Width"
     ],
     "section": "49-2.0",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "key": "clearZone",
     "values": {
      "sub": "(13)",
      "int": "(13)",
      "bu": "(13)"
     },
     "notes": [
      "13"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Typical Curbing Type, where used",
     "labelParts": [
      "Typical Curbing Type, where used (14)"
     ],
     "section": "45-1.05",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "values": {
      "sub": "Sloping / Vertical",
      "int": "Sloping / Vertical",
      "bu": "Sloping / Vertical"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Foreslope",
     "labelParts": [
      "Side Slopes, Uncurbed (15)",
      "Cut",
      "Foreslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "key": "foreslope",
     "values": {
      "sub": "6:1 (16)",
      "int": "6:1 (16)",
      "bu": "N/A"
     },
     "notes": [
      "15",
      "16"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Ditch Width",
     "labelParts": [
      "Side Slopes, Uncurbed (15)",
      "Cut",
      "Ditch Width"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "key": "ditchWidth",
     "values": {
      "sub": "4 ft (17)",
      "int": "4 ft (17)",
      "bu": "N/A"
     },
     "notes": [
      "15",
      "17"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Backslope",
     "labelParts": [
      "Side Slopes, Uncurbed (15)",
      "Cut",
      "Backslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "key": "backslope",
     "variant": "uncurbed",
     "values": {
      "sub": "4:1 for 20 ft; 3:1 Max. to Top (18)",
      "int": "4:1 for 20 ft; 3:1 Max. to Top (18)",
      "bu": "N/A"
     },
     "notes": [
      "15",
      "18"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Fill",
     "labelParts": [
      "Side Slopes, Uncurbed (15)",
      "Fill"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "key": "fillSlope",
     "variant": "uncurbed",
     "values": {
      "sub": "6:1 to Clear Zone; 3:1 Max. to Toe",
      "int": "6:1 to Clear Zone; 3:1 Max. to Toe",
      "bu": "N/A"
     },
     "notes": [
      "15"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Curbed: Cut, Backslope",
     "labelParts": [
      "Side Slopes, Curbed",
      "Cut, Backslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "key": "backslope",
     "variant": "curbed",
     "values": {
      "sub": "(19)",
      "int": "(19)",
      "bu": "(19)"
     },
     "notes": [
      "19"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Curbed: Fill",
     "labelParts": [
      "Side Slopes, Curbed",
      "Fill"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "key": "fillSlope",
     "variant": "curbed",
     "values": {
      "sub": "12:1 for 12 ft; 3:1 Max. to Toe",
      "int": "12:1 for 12 ft; 3:1 Max. to Toe",
      "bu": "12:1 for 12 ft; 3:1 Max. to Toe"
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Median Slopes, Depressed",
     "labelParts": [
      "Median Slopes, Depressed"
     ],
     "section": "45-2.0",
     "table": "main",
     "pdfPage": 27,
     "controlling": false,
     "values": {
      "sub": "Des: 8:1; Max: 5:1",
      "int": "N/A",
      "bu": "N/A"
     }
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Structural Capacity",
     "labelParts": [
      "New or Reconstructed Bridge",
      "*Structural Capacity (20)"
     ],
     "section": "Ch. 403",
     "table": "main",
     "pdfPage": 28,
     "controlling": true,
     "values": {
      "sub": "HL-93",
      "int": "HL-93",
      "bu": "HL-93"
     },
     "notes": [
      "20"
     ]
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Clear-Roadway Width",
     "labelParts": [
      "New or Reconstructed Bridge",
      "Clear-Roadway Width (21)"
     ],
     "section": "45-4.01",
     "table": "main",
     "pdfPage": 28,
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "new",
     "values": {
      "sub": "Uncurbed: Full Paved Approach Width; Curbed: Full Approach Curb-to-Curb Width",
      "int": "Uncurbed: Full Paved Approach Width; Curbed: Full Approach Curb-to-Curb Width",
      "bu": "Uncurbed: Full Paved Approach Width; Curbed: Full Approach Curb-to-Curb Width"
     },
     "notes": [
      "21"
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
     "pdfPage": 28,
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
     "section": "45-4.01",
     "table": "main",
     "pdfPage": 28,
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "existing",
     "values": {
      "sub": "Uncurbed: Travelway Plus 2 ft on Each Side; Curbed: Full Approach Curb-to-Curb Width",
      "int": "Uncurbed: Travelway Plus 2 ft on Each Side; Curbed: Full Approach Curb-to-Curb Width",
      "bu": "Uncurbed: Travelway Plus 2 ft on Each Side; Curbed: Full Approach Curb-to-Curb Width"
     }
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Under: New or Replaced Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Arterial Under (22)",
      "New or Replaced Overpassing Bridge (22a)"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 28,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "new",
     "values": {
      "sub": "16.5 ft",
      "int": "16.5 ft (22b)",
      "bu": "16.5 ft (22b)"
     },
     "notes": [
      "22",
      "22a",
      "22b"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Under: Existing Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Arterial Under (22)",
      "Existing Overpassing Bridge"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 28,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "existing",
     "values": {
      "sub": "14 ft",
      "int": "14 ft",
      "bu": "14 ft"
     },
     "notes": [
      "22"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Under: Sign Truss / Pedestrian Bridge",
     "labelParts": [
      "*Vertical Clearance, Arterial Under (22)",
      "Sign Truss / Pedestrian Bridge (22a)"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 28,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "signTruss",
     "values": {
      "sub": "New: 17.5 ft; Existing: 17 ft",
      "int": "New: 17.5ft; Existing: 17 ft",
      "bu": "New: 17.5 ft; Existing: 17 ft"
     },
     "notes": [
      "22",
      "22a"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial over Railroad",
     "labelParts": [
      "Vertical Clearance, Arterial over Railroad (23)"
     ],
     "section": "Ch. 402-6.01",
     "table": "main",
     "pdfPage": 28,
     "controlling": false,
     "values": {
      "sub": "23 ft",
      "int": "23 ft",
      "bu": "23 ft"
     },
     "notes": [
      "23"
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
     "pdfPage": 28,
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
     "element": "Stopping Sight Distance",
     "labelParts": [
      "*Stopping Sight Distance"
     ],
     "section": "42-1.0",
     "table": "alignment",
     "pdfPage": 28,
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
     "pdfPage": 28,
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
     "pdfPage": 28,
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
      "Intersection Sight Distance, -3% to +3% (28)"
     ],
     "section": "46-10.0",
     "table": "alignment",
     "pdfPage": 28,
     "controlling": false,
     "values": {
      "s30": "P: 355 ft; SUT: 450 ft",
      "s35": "P: 415 ft; SUT: 525 ft",
      "s45": "P: 530 ft; SUT: 675 ft",
      "s50": "P: 665 ft; SUT: 825 ft",
      "s55": "P: 770 ft; SUT: 950 ft"
     },
     "notes": [
      "28"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Radius for emax =4% / 6%",
     "labelParts": [
      "*Minimum Radius for emax =4% / 6%"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 28,
     "controlling": true,
     "key": "minRadius",
     "values": {
      "s30": "260 ft/ 240 ft (24a)",
      "s35": "420 ft / 390 ft (24a)",
      "s45": "600 ft / 550 ft (24a)",
      "s50": "750 ft (24b)",
      "s55": "1000 ft (24b)"
     },
     "notes": [
      "24a",
      "24b"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Superelevation Rate",
     "labelParts": [
      "*Superelevation Rate (25)"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 28,
     "controlling": true,
     "key": "emax",
     "values": {
      "s30": "Up to emax = 6%",
      "s35": "Up to emax = 6%",
      "s45": "Up to emax = 6%",
      "s50": "emax=6% or 8%",
      "s55": "emax=6% or 8%"
     },
     "notes": [
      "25"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Horizontal Sight Distance",
     "labelParts": [
      "*Horizontal Sight Distance"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 28,
     "controlling": true,
     "values": {
      "s30": "(26)",
      "s35": "(26)",
      "s45": "(26)",
      "s50": "(26)",
      "s55": "(26)"
     },
     "notes": [
      "26"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Crest",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Crest"
     ],
     "section": "44-3.0",
     "table": "alignment",
     "pdfPage": 28,
     "controlling": true,
     "key": "crestK",
     "values": {
      "s30": "19",
      "s35": "29",
      "s45": "61",
      "s50": "84",
      "s55": "114"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Sag",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Sag"
     ],
     "section": "44-3.0",
     "table": "alignment",
     "pdfPage": 28,
     "controlling": true,
     "key": "sagK",
     "values": {
      "s30": "37",
      "s35": "49",
      "s45": "79",
      "s50": "96",
      "s55": "115"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Level",
     "labelParts": [
      "*Maximum Grade (27)",
      "Level"
     ],
     "section": "44-1.02",
     "table": "alignment",
     "pdfPage": 28,
     "controlling": true,
     "key": "maxGrade",
     "terrain": "level",
     "values": {
      "s30": "8%",
      "s35": "7%",
      "s45": "6.5%",
      "s50": "6%",
      "s55": "5.5%"
     },
     "notes": [
      "27"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Rolling",
     "labelParts": [
      "*Maximum Grade (27)",
      "Rolling"
     ],
     "section": "44-1.02",
     "table": "alignment",
     "pdfPage": 28,
     "controlling": true,
     "key": "maxGrade",
     "terrain": "rolling",
     "values": {
      "s30": "9%",
      "s35": "8%",
      "s45": "7.5%",
      "s50": "7%",
      "s55": "6.5%"
     },
     "notes": [
      "27"
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
     "pdfPage": 28,
     "controlling": false,
     "key": "minGrade",
     "values": {
      "s30": "Desirable: 0.5% Minimum: 0.3% (Curbed) 0.0% (Uncurbed)",
      "s35": "Desirable: 0.5% Minimum: 0.3% (Curbed) 0.0% (Uncurbed)",
      "s45": "Desirable: 0.5% Minimum: 0.3% (Curbed) 0.0% (Uncurbed)",
      "s50": "Desirable: 0.5% Minimum: 0.3% (Curbed) 0.0% (Uncurbed)",
      "s55": "Desirable: 0.5% Minimum: 0.3% (Curbed) 0.0% (Uncurbed)"
     }
    }
   ],
   "legend": [
    "Des: Desirable. Min: Minimum.",
    "* Level One controlling criterion, see page 2 of 4",
    "U: Urban SU: Suburban."
   ],
   "footnotes": {
    "1": "Design Speed. The minimum design speed should equal the minimum value, the anticipated posted speed limit after construction, or the legal speed limit on a non-posted highway. The legal speed limit in an urban district is 30 mph. Based on an engineering study, the design speed may be raised to an absolute maximum of 55 mph.",
    "2": "On-Street Parking. In general, on-street parking is discouraged.",
    "3": "Travel-Lane Width. For an arterial on the National Truck Network, the right lane must be 12 ft in width.",
    "4": "Surface Type. The pavement-type selection will be determined by the INDOT Office of Pavement Engineering.",
    "5": "Curb Offset. The curb offset (for both left and right sides) should be 2 ft. Vertical curbs introduced intermittently should be offset 2 ft. A continuous curb used along a median or channelizing island may be offset 1 ft.",
    "6": "Shoulder Width. The value applies to the paved shoulder width. The following will also apply. a. For an uncurbed section, the shoulder is paved to the front face of guardrail. The desirable guardrail offset is 2 ft from the usable shoulder width. See Section 49-4.0 for more information. b. For an uncurbed section, a desirable additional 1 ft of compacted aggregate will be provided. c. For a curbed section, the curb offset is included in the paved shoulder width.",
    "7": "Cross Slope, Travel Lane. Cross slopes of 1.5% are acceptable for an existing bridge to remain in place.",
    "7A": "Cross Slope, Shoulder. See Figure 45-1A(1) or Figure 45-1A(2) for more-specific information.",
    "8": "Curb Offset for Auxiliary Lane. In a curbed section, the offset may be zero.",
    "9": "Parking Lane. Where a parking lane will be used as a travel lane during peak hours or may be converted to a travel lane in the future, the width should be equal to the travel lane width plus a 1 ft offset to the curb (if present). The cross slope for a parking lane is typically 1% steeper than that of the adjacent travel lane.",
    "10": "Minimum Median Width. The criteria assume the presence of a mountable curb with a 0 ft curb offset.",
    "11": "Sidewalk Width. A buffer of less than 2 ft wide is not permitted. If no buffer is provided, the sidewalk width should be 6 ft.",
    "12": "Bicycle-Lane Width. The value is in addition to the width of a parking lane, if present. See Section 51-7.0 for additional details.",
    "13": "Clear-Zone Width. The following will apply. a. Facility with Vertical Curbs. The clear-zone width will be measured from the edge of travel lane or will be to the right-of-way line, whichever is less. No clear zone is required where there is 24-h parking. b. Facility with Sloping Curbs or without Curbs. The clear-zone width will vary according to design speed, traffic volume, side slopes, and horizontal curvature. c. Curbed Facility. There should be an appurtenance-free area as measured from the gutter line of a curb. d. Value. See Section 49-2.0 for specific clear-zone-width value.",
    "14": "Curbing Type. Vertical curbs may only be used with design speed 45 mph or lower.",
    "15": "Side Slope, Uncurbed. Value is for new construction. See Sections 45-3.0 and 45-8.0 for more information. For a reconstruction project, see Section 49-3.0.",
    "16": "Foreslope. See Sections 49-2.0 and 49-3.0 for the lateral extent of the foreslope in a ditch section.",
    "17": "Ditch Width. A V-ditch should be used in a rock cut. See Section 45-8.0.",
    "18": "Backslope. The backslope for a rock cut will vary according to the height of the cut and the geotechnical requirements. See Sections 45-3.02 and 107-6.02 for typical rock-cut sections.",
    "19": "Side Slope, Curbed, Cut. A shelf or sidewalk will be present immediately behind the curb before the toe of the backslope. The minimum width of a shelf will be 6 ft. Where a sidewalk is present, the toe of the backslope will be 1 ft beyond the edge of sidewalk. See Section 45-3.0 for more information.",
    "20": "Structural Capacity, New or Reconstructed Bridge. The following will apply. a A State-highway bridge within 15 mi of a Toll-Road gate must be designed for Toll-Road loading. b. A bridge on an Extra-Heavy-Duty Highway must be designed for the Michigan Train truck loading configuration.",
    "21": "Width, New or Reconstructed Bridge. See Section 402-6.02(01) for more information. The bridge clear-roadway width is the algebraic sum of the following: a. the approach traveled way width; b. the approach usable shoulder width without guardrail; and c. a bridge-railing offset (see Figure 402-6H).",
    "22": "Vertical Clearance, Arterial Under Railroad. The following will apply. a. Value includes an additional 6 in. allowance for future pavement overlays. b. In a highly urbanized area, a minimum clearance of 14 ft may be provided if there is at least one route with a 16 ft clearance. c. Vertical clearance applies from usable edge to usable edge of shoulders.",
    "23": "Vertical Clearance, Arterial Over Railroad. See Chapter 402-6.01(03) for additional information on railroad clearance under a highway.",
    "24": "Minimum Radius. The following will apply: a. Based on emax = 4% or 6% and low-speed urban street conditions. b. Based on emax = 8% and open-road conditions.",
    "25": "Superelevation Rate. See Section 305-4.0 for values of superelevation rate based on design speed and radius and additional information on superelevation requirements.",
    "26": "Horizontal Sight Distance. For a given design speed, the necessary middle ordinate will be determined by the radius and the sight distance which applies at the site. Sometimes the stopping-sight-distance value for a truck will apply. See the discussion in Section 305-5.0.",
    "27": "Where adjacent sidewalks are present, the maximum desirable grade is 5%.",
    "28": "Intersection Sight Distance. For a left turn onto a two-way, 4-lane undivided roadway: P = Passenger car; SUT = single unit truck. See Figure 46-10G for value for a combination truck.",
    "*": "Level One controlling criterion. Except as noted in this chapter, the values shown in AASHTO's A Policy on Geometric Design of Highways and Streets (the Green Book) may be used as minimum values if they are lower than similar values shown herein. A controlling criterion that does not meet the minimum value is a design exception and is subject to approval. See Section 40-8.0 for low speed and high speed applications."
   },
   "transcriptionNotes": [
    "Revision label 'Rev. Jul. 2014' comes from the List of Figures / chapter revision table (Design Memo 14-10); it is not printed on the figure pages.",
    "Design Speed row is printed 'Design Speed, mph (1)' without the '*' controlling mark in this figure (Figures 53-7 to 53-9 mark it '*').",
    "Intermediate sign-truss clearance printed 'New: 17.5ft; Existing: 17 ft' (no space).",
    "Footnote (22) is titled 'Vertical Clearance, Arterial Under Railroad' although it is referenced from the '*Vertical Clearance, Arterial Under' rows.",
    "Suburban TWLTL printed 'Des: 16 ft; Min. 14 ft' (period for colon). Suburban bicycle lane 'Shld Width +4 ft', intermediate 'Shoulder Width +4 ft'.",
    "Minimum radius 30 mph printed '260 ft/ 240 ft (24a)'.",
    "Superelevation: 'Up to emax = 6%' spans 30-45 mph; 'emax=6% or 8%' spans 50-55 mph.",
    "Footnote (20) item a is printed 'a' without a period.",
    "The Bridges block is printed on page 2 above the alignment table but uses the area-type columns, so it is in table 'main'."
   ]
  },
  {
   "id": "53-7",
   "title": "Geometric Design Criteria for Urban Arterial, Two Lanes",
   "revision": "Rev. Jul. 2014",
   "printedTitle": "GEOMETRIC DESIGN CRITERIA FOR URBAN ARTERIAL, 2 LANES (New Construction or Reconstruction)",
   "pdfPages": [
    31,
    32,
    33,
    34
   ],
   "facility": "Urban Arterial, 2 Lanes",
   "area": "urban",
   "isFreeway": false,
   "applicability": "These criteria apply to a route on or off the National Highway System, regardless of funding source.",
   "columns": [
    {
     "key": "sub",
     "label": "Design Value (By Type of Area) / Suburban",
     "conditions": {
      "subcategory": "suburban"
     },
     "table": "main"
    },
    {
     "key": "int",
     "label": "Design Value (By Type of Area) / Intermediate",
     "conditions": {
      "subcategory": "intermediate"
     },
     "table": "main"
    },
    {
     "key": "bu",
     "label": "Design Value (By Type of Area) / Built-up",
     "conditions": {
      "subcategory": "built-up"
     },
     "table": "main"
    },
    {
     "key": "s30",
     "label": "30 mph",
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
     "label": "35 mph",
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
     "label": "45 mph",
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
     "label": "50 mph",
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
     "label": "55 mph",
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
     "section": "40-2.02",
     "table": "main",
     "pdfPage": 31,
     "controlling": false,
     "values": {
      "sub": "20 Years",
      "int": "20 Years",
      "bu": "20 Years"
     }
    },
    {
     "group": "Design Controls",
     "element": "Design Speed, mph",
     "labelParts": [
      "*Design Speed, mph (1)"
     ],
     "section": "40-3.0",
     "table": "main",
     "pdfPage": 31,
     "controlling": true,
     "key": "designSpeed",
     "values": {
      "sub": "Curbed: 35-55; Uncurbed: 40-55",
      "int": "Curbed: 35-55; Uncurbed: 40-50",
      "bu": "Curbed: 30 - 35"
     },
     "notes": [
      "1"
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
     "pdfPage": 31,
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
     "pdfPage": 31,
     "controlling": false,
     "values": {
      "sub": "Des: B; Min: C",
      "int": "Des: C; Min: D",
      "bu": "Des: C; Min: C"
     }
    },
    {
     "group": "Design Controls",
     "element": "On-Street Parking",
     "labelParts": [
      "On-Street Parking"
     ],
     "section": "45-1.04",
     "table": "main",
     "pdfPage": 31,
     "controlling": false,
     "values": {
      "sub": "None",
      "int": "Optional (2)",
      "bu": "Optional (2)"
     },
     "notes": [
      "2"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Travel Lane: Width",
     "labelParts": [
      "Travel Lane",
      "*Width (3)"
     ],
     "section": "45-1.01",
     "table": "main",
     "pdfPage": 31,
     "controlling": true,
     "key": "laneWidth",
     "values": {
      "sub": "Curbed: 12 ft; Uncurbed: 12 ft",
      "int": "Curbed: Des.: 12 ft; Min.: 11 ft; Uncurbed: 12 ft",
      "bu": "Curbed: Des.: 12 ft; Min.: 11 ft"
     },
     "numeric": {
      "sub": {
       "curbed": {
        "des": 12,
        "min": 12,
        "single": true
       },
       "uncurbed": {
        "des": 12,
        "min": 12,
        "single": true
       }
      },
      "int": {
       "curbed": {
        "des": 12,
        "min": 11
       },
       "uncurbed": {
        "des": 12,
        "min": 12,
        "single": true
       }
      },
      "bu": {
       "curbed": {
        "des": 12,
        "min": 11
       }
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
     "pdfPage": 31,
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete",
      "int": "Asphalt / Concrete",
      "bu": "Asphalt / Concrete"
     },
     "notes": [
      "4"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Curb Offset",
     "labelParts": [
      "*Curb Offset (5)"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 31,
     "controlling": true,
     "key": "curbOffset",
     "values": {
      "sub": "2 ft",
      "int": "2 ft",
      "bu": "2 ft"
     },
     "numeric": {
      "sub": {
       "des": 2,
       "min": 2,
       "single": true
      },
      "int": {
       "des": 2,
       "min": 2,
       "single": true
      },
      "bu": {
       "des": 2,
       "min": 2,
       "single": true
      }
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Paved Width",
     "labelParts": [
      "Shoulder",
      "*Paved Width (6)"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 31,
     "controlling": true,
     "key": "shoulderRightPaved",
     "values": {
      "sub": "Curbed Des: 10 ft; Min. 2 ft; Uncurbed: 10 ft",
      "int": "Curbed: Des: 8 ft; Min: 2 ft; Uncurbed: 8 ft;",
      "bu": "6 ft"
     },
     "numeric": {
      "sub": {
       "curbed": {
        "des": 10,
        "min": 2
       },
       "uncurbed": {
        "des": 10,
        "min": 10,
        "single": true
       }
      },
      "int": {
       "curbed": {
        "des": 8,
        "min": 2
       },
       "uncurbed": {
        "des": 8,
        "min": 8,
        "single": true
       }
      },
      "bu": {
       "des": 6,
       "min": 6,
       "single": true
      }
     },
     "notes": [
      "6"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Shoulder: Typical Surface Type",
     "labelParts": [
      "Shoulder",
      "Typical Surface Type (4)"
     ],
     "section": "Ch. 602",
     "table": "main",
     "pdfPage": 31,
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete",
      "int": "Asphalt / Concrete",
      "bu": "Asphalt / Concrete"
     },
     "notes": [
      "4"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Travel Lane",
     "labelParts": [
      "Cross Slope",
      "*Travel Lane (7)"
     ],
     "section": "45-1.01",
     "table": "main",
     "pdfPage": 31,
     "controlling": true,
     "key": "travelLaneCrossSlope",
     "values": {
      "sub": "2%",
      "int": "2%",
      "bu": "2%"
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Cross Slope: Shoulder",
     "labelParts": [
      "Cross Slope",
      "Shoulder (7A)"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 31,
     "controlling": false,
     "key": "shoulderCrossSlope",
     "values": {
      "sub": "4%",
      "int": "4%",
      "bu": "4%"
     },
     "notes": [
      "7A"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Lane Width",
     "labelParts": [
      "Auxiliary Lane",
      "Lane Width"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 31,
     "controlling": false,
     "key": "auxLaneWidth",
     "values": {
      "sub": "Des: 12 ft; Min: 11 ft",
      "int": "Des: 12 ft; Min: 11 ft",
      "bu": "Des: 11 ft; Min: 10 ft"
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
       "des": 11,
       "min": 10
      }
     }
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Curb Offset",
     "labelParts": [
      "Auxiliary Lane",
      "Curb Offset (8)"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 31,
     "controlling": false,
     "values": {
      "sub": "1 ft",
      "int": "1 ft",
      "bu": "1 ft"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Auxiliary Lane: Shoulder Width",
     "labelParts": [
      "Auxiliary Lane",
      "Shoulder Width"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 31,
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
      "Typical Surface Type (4)"
     ],
     "section": "Chp. 402",
     "table": "main",
     "pdfPage": 31,
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete",
      "int": "Asphalt / Concrete",
      "bu": "Asphalt / Concrete"
     },
     "notes": [
      "4"
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
     "pdfPage": 31,
     "controlling": false,
     "values": {
      "sub": "Des: 16 ft; Min. 14 ft",
      "int": "Des: 16 ft; Min: 14 ft",
      "bu": "Des: 14 ft; Min: 12 ft"
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
     "pdfPage": 31,
     "controlling": false,
     "key": "parkingLaneWidth",
     "values": {
      "sub": "N/A",
      "int": "Des: 12 ft; Min: 10 ft (9)",
      "bu": "Des: 12 ft; Min: 10 ft (9)"
     },
     "notes": [
      "9"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Sidewalk Width",
     "labelParts": [
      "Sidewalk Width (10)"
     ],
     "section": "45-1.06",
     "table": "main",
     "pdfPage": 31,
     "controlling": false,
     "values": {
      "sub": "5 ft with 5-ft Buffer (Des)",
      "int": "5 ft with 5-ft Buffer (Des)",
      "bu": "Varies; 6 ft Min"
     },
     "notes": [
      "10"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Bicycle-Lane Width",
     "labelParts": [
      "Bicycle-Lane Width (11)"
     ],
     "section": "51.7.0",
     "table": "main",
     "pdfPage": 31,
     "controlling": false,
     "values": {
      "sub": "Curbed: 5 ft; Uncurbed: Shld. Width +4 ft",
      "int": "Curbed: 5 ft; Uncurbed: Shoulder Width +4 ft",
      "bu": "Curbed: 5 ft"
     },
     "notes": [
      "11"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Clear-Zone Width",
     "labelParts": [
      "Clear-Zone Width"
     ],
     "section": "49-2.0",
     "table": "main",
     "pdfPage": 31,
     "controlling": false,
     "key": "clearZone",
     "values": {
      "sub": "(12)",
      "int": "(12)",
      "bu": "(12)"
     },
     "notes": [
      "12"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Typical Curbing Type, where used",
     "labelParts": [
      "Typical Curbing Type, where used (13)"
     ],
     "section": "45-1.05",
     "table": "main",
     "pdfPage": 31,
     "controlling": false,
     "values": {
      "sub": "Sloping / Vertical",
      "int": "Sloping / Vertical",
      "bu": "Sloping / Vertical"
     },
     "notes": [
      "13"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Foreslope",
     "labelParts": [
      "Side Slopes, Uncurbed (14)",
      "Cut",
      "Foreslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 31,
     "controlling": false,
     "key": "foreslope",
     "values": {
      "sub": "6:1 (15)",
      "int": "6:1 (15)",
      "bu": "N/A"
     },
     "notes": [
      "14",
      "15"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Ditch Width",
     "labelParts": [
      "Side Slopes, Uncurbed (14)",
      "Cut",
      "Ditch Width"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 31,
     "controlling": false,
     "key": "ditchWidth",
     "values": {
      "sub": "4 ft (16)",
      "int": "4 ft (16)",
      "bu": "N/A"
     },
     "notes": [
      "14",
      "16"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Backslope",
     "labelParts": [
      "Side Slopes, Uncurbed (14)",
      "Cut",
      "Backslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 31,
     "controlling": false,
     "key": "backslope",
     "variant": "uncurbed",
     "values": {
      "sub": "4:1 for 20 ft; 3:1 Max. to Top (17)",
      "int": "4:1 for 20 ft; 3:1 Max. to Top (17)",
      "bu": "N/A"
     },
     "notes": [
      "14",
      "17"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Uncurbed: Fill",
     "labelParts": [
      "Side Slopes, Uncurbed (14)",
      "Fill"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 31,
     "controlling": false,
     "key": "fillSlope",
     "variant": "uncurbed",
     "values": {
      "sub": "6:1 to Clear Zone; 3:1 Max. to Toe",
      "int": "6:1 to Clear Zone; 3:1 Max. to Toe",
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
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 31,
     "controlling": false,
     "key": "backslope",
     "variant": "curbed",
     "values": {
      "sub": "(18)",
      "int": "(18)",
      "bu": "(18)"
     },
     "notes": [
      "18"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "element": "Side Slopes, Curbed: Fill",
     "labelParts": [
      "Side Slopes, Curbed",
      "Fill"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 31,
     "controlling": false,
     "key": "fillSlope",
     "variant": "curbed",
     "values": {
      "sub": "12:1 for 12 ft; 3:1 Max. to Toe",
      "int": "12:1 for 12 ft; 3:1 Max. to Toe",
      "bu": "12:1 for 12 ft; 3:1 Max. to Toe"
     }
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Structural Capacity",
     "labelParts": [
      "New or Reconstructed Bridge",
      "*Structural Capacity (19)"
     ],
     "section": "Ch. 403",
     "table": "main",
     "pdfPage": 32,
     "controlling": true,
     "values": {
      "sub": "HL-93",
      "int": "HL-93",
      "bu": "HL-93"
     },
     "notes": [
      "19"
     ]
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Clear-Roadway Width",
     "labelParts": [
      "New or Reconstructed Bridge",
      "Clear-Roadway Width(20)"
     ],
     "section": "45-4.01",
     "table": "main",
     "pdfPage": 32,
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "new",
     "values": {
      "sub": "Uncurbed: Full Paved Approach Width; Curbed: Full Approach Curb-to-Curb Width",
      "int": "Uncurbed: Full Paved Approach Width; Curbed: Full Approach Curb-to-Curb Width",
      "bu": "Uncurbed: Full Paved Approach Width; Curbed: Full Approach Curb-to-Curb Width"
     },
     "notes": [
      "20"
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
     "pdfPage": 32,
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
     "section": "45-4.0",
     "table": "main",
     "pdfPage": 32,
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "existing",
     "values": {
      "sub": "Uncurbed: Travelway Plus 2 ft on Each Side; Curbed: Full Approach Curb-to-Curb Width",
      "int": "Uncurbed: Travelway Plus 2 ft on Each Side; Curbed: Full Approach Curb-to-Curb Width",
      "bu": "Uncurbed: Travelway Plus 2 ft on Each Side; Curbed: Full Approach Curb-to-Curb Width"
     }
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Under: New or Replaced Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Arterial Under (21)",
      "New or Replaced Overpassing Bridge (21a)"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 32,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "new",
     "values": {
      "sub": "16.5 ft",
      "int": "16.5 ft (21b)",
      "bu": "16.5 ft (21b)"
     },
     "notes": [
      "21",
      "21a",
      "21b"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Under: Existing Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Arterial Under (21)",
      "Existing Overpassing Bridge"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 32,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "existing",
     "values": {
      "sub": "14 ft",
      "int": "14 ft",
      "bu": "14 ft"
     },
     "notes": [
      "21"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial Under: Sign Truss / Pedestrian Bridge",
     "labelParts": [
      "*Vertical Clearance, Arterial Under (21)",
      "Sign Truss / Pedestrian Bridge (21a)"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 32,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "signTruss",
     "values": {
      "sub": "New: 17.5 ft; Existing: 17 ft",
      "int": "New: 17.5 ft; Existing: 17 ft",
      "bu": "New: 17.5 ft; Existing: 17 ft"
     },
     "notes": [
      "21",
      "21a"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Arterial over Railroad",
     "labelParts": [
      "Vertical Clearance, Arterial over Railroad (22)"
     ],
     "section": "Ch. 402-6.01",
     "table": "main",
     "pdfPage": 32,
     "controlling": false,
     "values": {
      "sub": "23 ft",
      "int": "23 ft",
      "bu": "23 ft"
     },
     "notes": [
      "22"
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
     "pdfPage": 32,
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
     "element": "Stopping Sight Distance",
     "labelParts": [
      "*Stopping Sight Distance"
     ],
     "section": "42-1.0",
     "table": "alignment",
     "pdfPage": 32,
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
     "pdfPage": 32,
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
     "pdfPage": 32,
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
      "Intersection Sight Distance, -3% to +3% (27)"
     ],
     "section": "46-10.0",
     "table": "alignment",
     "pdfPage": 32,
     "controlling": false,
     "values": {
      "s30": "P: 330 ft; SUT: 420 ft",
      "s35": "P: 390 ft; SUT: 490 ft",
      "s45": "P: 500 ft; SUT: 630 ft",
      "s50": "P: 630 ft; SUT: 780 ft",
      "s55": "P: 730 ft; SUT: 890 ft"
     },
     "notes": [
      "27"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Minimum Radius for emax = 4% / 6%",
     "labelParts": [
      "*Minimum Radius for emax = 4% / 6%"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 32,
     "controlling": true,
     "key": "minRadius",
     "values": {
      "s30": "260 ft/ 240 ft (23 a)",
      "s35": "420 ft / 390 ft (23a)",
      "s45": "600 ft / 550 ft (23a)",
      "s50": "750 ft (23b)",
      "s55": "1000 ft (23b)"
     },
     "notes": [
      "23a",
      "23b"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Superelevation Rate",
     "labelParts": [
      "*Superelevation Rate (24)"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 32,
     "controlling": true,
     "key": "emax",
     "values": {
      "s30": "Up to emax=6%",
      "s35": "Up to emax=6%",
      "s45": "Up to emax=6%",
      "s50": "emax= 6% or 8%",
      "s55": "emax= 6% or 8%"
     },
     "notes": [
      "24"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Horizontal Sight Distance",
     "labelParts": [
      "*Horizontal Sight Distance"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 32,
     "controlling": true,
     "values": {
      "s30": "(25)",
      "s35": "(25)",
      "s45": "(25)",
      "s50": "(25)",
      "s55": "(25)"
     },
     "notes": [
      "25"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Crest",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Crest"
     ],
     "section": "44-3.0",
     "table": "alignment",
     "pdfPage": 32,
     "controlling": true,
     "key": "crestK",
     "values": {
      "s30": "19",
      "s35": "29",
      "s45": "61",
      "s50": "84",
      "s55": "114"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Sag",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Sag"
     ],
     "section": "44-3.0",
     "table": "alignment",
     "pdfPage": 32,
     "controlling": true,
     "key": "sagK",
     "values": {
      "s30": "37",
      "s35": "49",
      "s45": "79",
      "s50": "96",
      "s55": "115"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Level",
     "labelParts": [
      "*Maximum Grade (26)",
      "Level"
     ],
     "section": "44-1.02",
     "table": "alignment",
     "pdfPage": 32,
     "controlling": true,
     "key": "maxGrade",
     "terrain": "level",
     "values": {
      "s30": "8%",
      "s35": "7%",
      "s45": "6.5%",
      "s50": "6%",
      "s55": "5.5%"
     },
     "notes": [
      "26"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Rolling",
     "labelParts": [
      "*Maximum Grade (26)",
      "Rolling"
     ],
     "section": "44-1.02",
     "table": "alignment",
     "pdfPage": 32,
     "controlling": true,
     "key": "maxGrade",
     "terrain": "rolling",
     "values": {
      "s30": "9%",
      "s35": "8%",
      "s45": "7.5%",
      "s50": "7%",
      "s55": "6.5%"
     },
     "notes": [
      "26"
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
     "pdfPage": 32,
     "controlling": false,
     "key": "minGrade",
     "values": {
      "s30": "Desirable: 0.5% Minimum: 0.3% (Curbed) 0.0% (Uncurbed)",
      "s35": "Desirable: 0.5% Minimum: 0.3% (Curbed) 0.0% (Uncurbed)",
      "s45": "Desirable: 0.5% Minimum: 0.3% (Curbed) 0.0% (Uncurbed)",
      "s50": "Desirable: 0.5% Minimum: 0.3% (Curbed) 0.0% (Uncurbed)",
      "s55": "Desirable: 0.5% Minimum: 0.3% (Curbed) 0.0% (Uncurbed)"
     }
    }
   ],
   "legend": [
    "Des: Desirable; Min. Minimum.",
    "* Level One controlling criterion, see page 2 of 4",
    "U: Urban; SU: Suburban."
   ],
   "footnotes": {
    "1": "Design Speed. The minimum design speed should equal the minimum value, the anticipated posted speed limit after construction or the legal speed limit on a non-posted highway. The legal speed limit in an urban district is 30 mph. Based upon an engineering study, the design speed may be raised to an absolute maximum of 55 mph.",
    "2": "On-Street Parking. In general, on-street parking is discouraged.",
    "3": "Travel-Lane Width. For an arterial on the National Truck Network, lane widths must be 12 ft.",
    "4": "Surface Type. The pavement-type selection will be determined by the INDOT Office of Pavement Engineering.",
    "5": "Curb Offset. The curb offset should be 2 ft. Vertical curbs introduced intermittently should be offset 2 ft. A continuous curb used along a median or channelizing island may be offset 1 ft.",
    "6": "Shoulder Width. The value applies to the paved-shoulder width. The following will also apply. a. For an uncurbed section, the shoulder is paved to the front face of guardrail. The desirable guardrail offset is 2 ft from the usable shoulder width. See Section 49-4.0 for more information. b. For an uncurbed section, a desirable additional 1 ft of compacted aggregate will be provided. c. For a curbed section, the curb offset is included in the paved shoulder width.",
    "7": "Cross Slope, Travel Lane. Cross slopes of 1.5% are acceptable on an existing bridge to remain in place.",
    "7A": "Cross Slope, Shoulder. See Figure 45-1A(1) or Figure 45-1A(2) for more-specific information.",
    "8": "Curb Offset for Auxiliary Lane. In a curbed section, the offset may be zero.",
    "9": "Parking Lane. Where the parking lane will be used as a travel lane during peak hours or may be converted to a travel lane in the future, the width should be equal to the travel lane width plus a 1 ft offset to the curb (if present). The cross slope for a parking lane is typically 1% steeper than that of the adjacent travel lane.",
    "10": "Sidewalk Width. A buffer of less than 2 ft wide is not permitted. If no buffer is provided, the sidewalk width should be 6 ft.",
    "11": "Bicycle-Lane Width. The value is in addition to the width of a parking lane, if present. See Section 51-7.0 for additional details.",
    "12": "Clear-Zone Width. The following will apply. a. Facility with Vertical Curbs. The clear-zone width will be measured from the edge of travel lane or will be to the right-of-way line, whichever is less. No clear zone is required where there is 24-h parking. b. Facility with Sloping Curbs or without Curbs. The clear-zone width will vary according to design speed, traffic volume, side slopes, and horizontal curvature. c. Curbed Facility. There should be an appurtenance-free area as measured from the gutter line of a curb. d. Value. See Section 49-2.0 for specific clear-zone-width value.",
    "13": "Curbing Type. Vertical curbs may only be used with design speed 45 mph or lower.",
    "14": "Side Slope, Uncurbed. Value is for new construction. See Section 45-3.0 for more information. For a reconstruction project, see Section 49-3.0.",
    "15": "Foreslope. See Sections 49-2.0 and 49-3.0 for the lateral extent of the foreslope in a ditch section.",
    "16": "Ditch Width. A V-ditch should be used in a rock cut.",
    "17": "Backslope. The backslope for a rock cut will vary according to the height of the cut and the geotechnical requirements. See Sections 45-3.02 and 107-6.02 for typical rock-cut sections.",
    "18": "Side Slope, Curbed, Cut. A shelf or sidewalk will be present immediately behind the curb before the toe of the backslope. The minimum width of a shelf will be 6 ft. Where a sidewalk is present, the toe of the backslope will be 2 ft beyond the edge of sidewalk. See Section 45-3.0 for more information.",
    "19": "Structural Capacity, New or Reconstructed Bridge. The following will apply. a. A State-highway bridge within 15 mi of a Toll-Road gate must be designed for Toll-Road loading. b. A bridge on an Extra-Heavy-Duty Highway must be designed for the Michigan Train truck loading configuration.",
    "20": "Width, New or Reconstructed Bridge. See Section 402-6.02(01) for more information. The bridge clear-roadway width is the algebraic sum of the following: a. the approach traveled-way width; b. the approach usable shoulder width without guardrail; and",
    "21": "Vertical Clearance, Arterial Under Railroad. The following will apply. a. Value includes an additional 6 in. allowance for future pavement overlays. b. In a highly urbanized area, a minimum clearance of 14 ft may be provided if there is at least one route with a 16-ft clearance. c. Vertical clearance applies from usable edge to usable edge of shoulder.",
    "22": "Vertical Clearance, Arterial Over Railroad. See Chapter 402-6.01(03) for additional information on railroad clearance under a highway.",
    "23": "Minimum Radius. The following will apply: a. Based on emax = 4% or 6% and low-speed urban street conditions. b. Based on emax = 8% and open-road conditions.",
    "24": "Superelevation Rate. See Section 305-4.0 for value of superelevation rate based on design speed and radius and additional information on superelevation requirements.",
    "25": "Horizontal Sight Distance. For a given design speed, the necessary middle ordinate will be determined by the radius and the sight distance which applies at the site. Sometimes the stopping-sight-distance value for a truck will apply. See the discussion in Section 305-5.0.",
    "26": "Where adjacent sidewalks are present, the maximum desirable grade is 5%.",
    "27": "Intersection Sight Distance. For a left turn onto a 2-lane roadway: P = Passenger car; SUT = single unit truck. See Figure 46-10G for value for a combination truck.",
    "*": "Level One controlling criterion. Except as noted in this chapter, the values shown in AASHTO's A Policy on Geometric Design of Highways and Streets (the Green Book) may be used as minimum values if they are lower than similar values shown herein. A controlling criterion that does not meet the minimum value is a design exception and is subject to approval. See Section 40-8.0 for low speed and high speed applications."
   },
   "transcriptionNotes": [
    "Revision label 'Rev. Jul. 2014' comes from the List of Figures / chapter revision table (Design Memo 14-10); it is not printed on the figure pages.",
    "Auxiliary-lane Typical Surface Type Manual Section printed 'Chp. 402' (other rows/figures: Ch. 602).",
    "Bicycle-Lane Width Manual Section printed '51.7.0' (other figures: 51-7.0).",
    "Existing-bridge Clear-Roadway Width Manual Section printed '45-4.0' (other figures: 45-4.01). Row label printed 'Existing Bridge to Re-Main in Place' (line-wrap hyphenation).",
    "Built-up Level of Service printed 'Des: C; Min: C' (53-6 built-up: Des: C; Min: D).",
    "Intermediate paved shoulder printed 'Uncurbed: 8 ft;' with a trailing semicolon.",
    "Minimum radius 30 mph printed '260 ft/ 240 ft (23 a)' (space inside the footnote marker).",
    "Footnote (20) lists only items a and b; the 'bridge-railing offset' item c printed in the other figures is missing.",
    "Footnote (21) is titled 'Vertical Clearance, Arterial Under Railroad' although referenced from the 'Arterial Under' rows.",
    "Footnote (18) puts the toe of backslope 2 ft beyond the edge of sidewalk; Figures 53-6, 53-8 and 53-9 say 1 ft.",
    "Shoulder cross slope is printed as a flat '4%' (Figure 53-6 uses 2% / 4% by paved width).",
    "Legend printed 'Des: Desirable; Min. Minimum.'",
    "The Bridges block is printed on page 2 above the alignment table but uses the area-type columns, so it is in table 'main'."
   ]
  },
  {
   "id": "53-8",
   "title": "Geometric Design Criteria for Urban Collector",
   "revision": "Rev. Jul. 2014",
   "printedTitle": "GEOMETRIC DESIGN CRITERIA FOR URBAN COLLECTOR (New Construction or Reconstruction)",
   "pdfPages": [
    35,
    36,
    37,
    38
   ],
   "facility": "Urban Collector",
   "area": "urban",
   "isFreeway": false,
   "applicability": ". These criteria apply regardless of funding source.",
   "columns": [
    {
     "key": "sub",
     "label": "Design Value (By Type of Area) / Suburban",
     "conditions": {
      "subcategory": "suburban"
     },
     "table": "main"
    },
    {
     "key": "int",
     "label": "Design Value (By Type of Area) / Intermediate",
     "conditions": {
      "subcategory": "intermediate"
     },
     "table": "main"
    },
    {
     "key": "bu",
     "label": "Design Value (By Type of Area) / Built-Up",
     "conditions": {
      "subcategory": "built-up"
     },
     "table": "main"
    },
    {
     "key": "s30",
     "label": "30 mph",
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
     "label": "35 mph",
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
     "label": "45 mph",
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
     "label": "50 mph",
     "conditions": {
      "designSpeed": [
       50,
       50
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
     "section": "40-2.02",
     "table": "main",
     "pdfPage": 35,
     "controlling": false,
     "values": {
      "sub": "20 Years",
      "int": "20 Years",
      "bu": "20 Years"
     }
    },
    {
     "group": "Design Controls",
     "element": "Design Speed, mph",
     "labelParts": [
      "*Design Speed, mph (2)"
     ],
     "section": "40-3.0",
     "table": "main",
     "pdfPage": 35,
     "controlling": true,
     "key": "designSpeed",
     "values": {
      "sub": "Curbed: 30 - 50; Uncurbed: 30 - 50",
      "int": "Curbed: 30 - 45; Uncurbed: 30 - 45",
      "bu": "Curbed: 30 - 35"
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
     "pdfPage": 35,
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
     "pdfPage": 35,
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
     "section": "45-1.04",
     "table": "main",
     "pdfPage": 35,
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
     "printedGroup": "Alignment Elements",
     "element": "Travel Lane: Width",
     "labelParts": [
      "Travel Lane",
      "*Width (4)"
     ],
     "section": "45-1.01",
     "table": "main",
     "pdfPage": 35,
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
     "printedGroup": "Alignment Elements",
     "element": "Travel Lane: Typical Surface Type",
     "labelParts": [
      "Travel Lane",
      "Typical Surface Type (5)"
     ],
     "section": "Ch. 602",
     "table": "main",
     "pdfPage": 35,
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
     "printedGroup": "Alignment Elements",
     "element": "Curb Offset",
     "labelParts": [
      "*Curb Offset (6)"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 35,
     "controlling": true,
     "key": "curbOffset",
     "values": {
      "sub": "2 ft",
      "int": "2 ft",
      "bu": "2 ft"
     },
     "numeric": {
      "sub": {
       "des": 2,
       "min": 2,
       "single": true
      },
      "int": {
       "des": 2,
       "min": 2,
       "single": true
      },
      "bu": {
       "des": 2,
       "min": 2,
       "single": true
      }
     },
     "notes": [
      "6"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Shoulder: Paved Width",
     "labelParts": [
      "Shoulder",
      "*Paved Width (7)"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 35,
     "controlling": true,
     "key": "shoulderRightPaved",
     "values": {
      "sub": "Curbed Des: 8 ft; Min. 2 ft; Uncurbed: 8 ft",
      "int": "Curbed: Des: 6 ft; Min: 2 ft; Uncurbed: 6 ft",
      "bu": "8 ft"
     },
     "numeric": {
      "sub": {
       "curbed": {
        "des": 8,
        "min": 2
       },
       "uncurbed": {
        "des": 8,
        "min": 8,
        "single": true
       }
      },
      "int": {
       "curbed": {
        "des": 6,
        "min": 2
       },
       "uncurbed": {
        "des": 6,
        "min": 6,
        "single": true
       }
      },
      "bu": {
       "des": 8,
       "min": 8,
       "single": true
      }
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Shoulder: Typical Surface Type",
     "labelParts": [
      "Shoulder",
      "Typical Surface Type (5)"
     ],
     "section": "Ch. 602",
     "table": "main",
     "pdfPage": 35,
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
     "printedGroup": "Alignment Elements",
     "element": "Cross Slope: Travel Lane",
     "labelParts": [
      "Cross Slope",
      "*Travel Lane (8)"
     ],
     "section": "45-1.01",
     "table": "main",
     "pdfPage": 35,
     "controlling": true,
     "key": "travelLaneCrossSlope",
     "values": {
      "sub": "2%",
      "int": "2%",
      "bu": "2%"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Cross Slope: Shoulder",
     "labelParts": [
      "Cross Slope",
      "Shoulder (8A)"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 35,
     "controlling": false,
     "key": "shoulderCrossSlope",
     "values": {
      "sub": "4%",
      "int": "4%",
      "bu": "2%"
     },
     "notes": [
      "8A"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Auxiliary Lane: Lane Width",
     "labelParts": [
      "Auxiliary Lane",
      "Lane Width"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 35,
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
     "printedGroup": "Alignment Elements",
     "element": "Auxiliary Lane: Curb Offset",
     "labelParts": [
      "Auxiliary Lane",
      "Curb Offset"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 35,
     "controlling": false,
     "values": {
      "sub": "Des: 1 ft; Min: 0.0 ft",
      "int": "Des: 1 ft; Min: 0.0 ft",
      "bu": "Des: 1 ft; Min: 0.0 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Auxiliary Lane: Shoulder Width",
     "labelParts": [
      "Auxiliary Lane",
      "Shoulder Width"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 35,
     "controlling": false,
     "values": {
      "sub": "Des: 8 ft; Min: 2 ft",
      "int": "Des: 6 ft; Min: 2 ft",
      "bu": "Des: 4 ft; Min: 2 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Auxiliary Lane: Typical Surface Type",
     "labelParts": [
      "Auxiliary Lane",
      "Typical Surface Type (5)"
     ],
     "section": "Ch. 602",
     "table": "main",
     "pdfPage": 35,
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
     "printedGroup": "Alignment Elements",
     "element": "TWLTL Width",
     "labelParts": [
      "TWLTL Width"
     ],
     "section": "46-5.0",
     "table": "main",
     "pdfPage": 35,
     "controlling": false,
     "values": {
      "sub": "Des: 16 ft; Min: 12 ft",
      "int": "Des: 14 ft; Min: 12 ft",
      "bu": "Des: 14 ft; Min: 12 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Parking-Lane Width",
     "labelParts": [
      "Parking-Lane Width (1)"
     ],
     "section": "45-1.04",
     "table": "main",
     "pdfPage": 35,
     "controlling": false,
     "key": "parkingLaneWidth",
     "values": {
      "sub": "Des: 11 ft; Min: 8 ft",
      "int": "Des: 11 ft; Min: 8 ft",
      "bu": "Des: 11 ft; Min: 8 ft"
     },
     "notes": [
      "1"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Median Width: Raised Island",
     "labelParts": [
      "Median Width",
      "Raised Island"
     ],
     "section": "45-2.0",
     "table": "main",
     "pdfPage": 35,
     "controlling": false,
     "key": "medianWidth",
     "variant": "raised island",
     "values": {
      "sub": "Des: 18 ft; Min: 4 ft (9)",
      "int": "Des: 18 ft; Min: 4 ft (9)",
      "bu": "Des: 18 ft; Min: 4 ft (9)"
     },
     "notes": [
      "9"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Median Width: Flush / Corrugated",
     "labelParts": [
      "Median Width",
      "Flush / Corrugated"
     ],
     "section": "45-2.0",
     "table": "main",
     "pdfPage": 35,
     "controlling": false,
     "key": "medianWidth",
     "variant": "flush / corrugated",
     "values": {
      "sub": "Des: 16 ft; Min: 4 ft (9)",
      "int": "Des: 16 ft; Min: 4 ft (9)",
      "bu": "Des: 16 ft; Min: 4 ft (9)"
     },
     "notes": [
      "9"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Sidewalk Width",
     "labelParts": [
      "Sidewalk Width (10)"
     ],
     "section": "45-1.06",
     "table": "main",
     "pdfPage": 35,
     "controlling": false,
     "values": {
      "sub": "5 ft with 5 ft Buffer (Des)",
      "int": "5 ft with 5 ft Buffer (Des)",
      "bu": "Varies, 6 ft Min"
     },
     "notes": [
      "10"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Bicycle-Lane Width",
     "labelParts": [
      "Bicycle-Lane Width (11)"
     ],
     "section": "51-7.0",
     "table": "main",
     "pdfPage": 35,
     "controlling": false,
     "values": {
      "sub": "Curbed: 5 ft; Uncurbed: Shld. Width +4 ft",
      "int": "Curbed: 5 ft; Uncurbed: Shld. Width +4 ft",
      "bu": "Curbed: 5 ft"
     },
     "notes": [
      "11"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Clear-Zone Width",
     "labelParts": [
      "Clear-Zone Width"
     ],
     "section": "49-2.0",
     "table": "main",
     "pdfPage": 35,
     "controlling": false,
     "key": "clearZone",
     "values": {
      "sub": "(12)",
      "int": "(12)",
      "bu": "(12)"
     },
     "notes": [
      "12"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Typical Curbing Type, where used",
     "labelParts": [
      "Typical Curbing Type, where used (13)"
     ],
     "section": "45-1.05",
     "table": "main",
     "pdfPage": 35,
     "controlling": false,
     "values": {
      "sub": "Sloping / Vertical",
      "int": "Sloping / Vertical",
      "bu": "Sloping / Vertical"
     },
     "notes": [
      "13"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Side Slopes, Uncurbed: Cut: Foreslope",
     "labelParts": [
      "Side Slopes, Uncurbed (14)",
      "Cut",
      "Foreslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 35,
     "controlling": false,
     "key": "foreslope",
     "values": {
      "sub": "Des: 6:1; Max: 4:1 (15)",
      "int": "Des: 6:1; Max: 4:1 (15)",
      "bu": "N/A"
     },
     "notes": [
      "14",
      "15"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Side Slopes, Uncurbed: Cut: Ditch Width",
     "labelParts": [
      "Side Slopes, Uncurbed (14)",
      "Cut",
      "Ditch Width"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 35,
     "controlling": false,
     "key": "ditchWidth",
     "values": {
      "sub": "4 ft (16)",
      "int": "4 ft (16)",
      "bu": "N/A"
     },
     "notes": [
      "14",
      "16"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Side Slopes, Uncurbed: Cut: Backslope",
     "labelParts": [
      "Side Slopes, Uncurbed (14)",
      "Cut",
      "Backslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 35,
     "controlling": false,
     "key": "backslope",
     "variant": "uncurbed",
     "values": {
      "sub": "4:1 for 4 ft; 3:1 Max. to Top (17)",
      "int": "4:1 for 4 ft; 3:1 Max. to Top (17)",
      "bu": "N/A"
     },
     "notes": [
      "14",
      "17"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Side Slopes, Uncurbed: Fill",
     "labelParts": [
      "Side Slopes, Uncurbed (14)",
      "Fill"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 35,
     "controlling": false,
     "key": "fillSlope",
     "variant": "uncurbed",
     "values": {
      "sub": "Des: 6:1 to Clr Zone; 3:1 Max to Toe; Max: 4:1 to Clr Zone; 3:1 Max to Toe",
      "int": "Des: 6:1 to Clr Zone; 3:1 Max to Toe; Max: 4:1 to Clr Zone; 3:1 Max to Toe",
      "bu": "N/A"
     },
     "notes": [
      "14"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Side Slopes, Curbed: Cut(Backslope)",
     "labelParts": [
      "Side Slopes, Curbed",
      "Cut(Backslope)"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 35,
     "controlling": false,
     "key": "backslope",
     "variant": "curbed",
     "values": {
      "sub": "(18)",
      "int": "(18)",
      "bu": "(18)"
     },
     "notes": [
      "18"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Alignment Elements",
     "element": "Side Slopes, Curbed: Fill",
     "labelParts": [
      "Side Slopes, Curbed",
      "Fill (19)"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 35,
     "controlling": false,
     "key": "fillSlope",
     "variant": "curbed",
     "values": {
      "sub": "12:1 for 12 ft; 3:1 Max to Toe",
      "int": "12:1 for 12 ft; 3:1 Max to Toe",
      "bu": "12:1 for 12 ft; 3:1 Max to Toe"
     },
     "notes": [
      "19"
     ]
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Structural Capacity",
     "labelParts": [
      "New or Reconstructed Bridge",
      "*Structural Capacity (20)"
     ],
     "section": "Ch. 403",
     "table": "main",
     "pdfPage": 36,
     "controlling": true,
     "values": {
      "sub": "HL-93",
      "int": "HL-93",
      "bu": "HL-93"
     },
     "notes": [
      "20"
     ]
    },
    {
     "group": "Bridges",
     "element": "New or Reconstructed Bridge: Clear-Roadway Width",
     "labelParts": [
      "New or Reconstructed Bridge",
      "Clear-Roadway Width (21)"
     ],
     "section": "45-4.01",
     "table": "main",
     "pdfPage": 36,
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "new",
     "values": {
      "sub": "Uncurbed: Full Paved Approach Width; Curbed: Full Approach Curb-to-Curb Width",
      "int": "Uncurbed: Full Paved Approach Width; Curbed: Full Approach Curb-to-Curb Width",
      "bu": "Uncurbed: Full Paved Approach Width; Curbed: Full Approach Curb-to-Curb Width"
     },
     "notes": [
      "21"
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
     "pdfPage": 36,
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
     "section": "45-4.01",
     "table": "main",
     "pdfPage": 36,
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "existing",
     "values": {
      "sub": "Uncurbed: Travelway Plus 2 ft on Each Side; Curbed: Full Approach Curb-to-Curb Width",
      "int": "Uncurbed: Travelway Plus 2 ft on Each Side; Curbed: Full Approach Curb-to-Curb Width",
      "bu": "Uncurbed: Travelway Plus 2 ft on Each Side; Curbed: Full Approach Curb-to-Curb Width"
     }
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector under: New or Replaced Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Collector under (22)",
      "New or Replaced Overpassing Bridge (22)"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 36,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "new",
     "values": {
      "sub": "14.5 ft",
      "int": "14.5 ft",
      "bu": "14.5 ft"
     },
     "notes": [
      "22"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector under: Existing Overpassing Bridge",
     "labelParts": [
      "*Vertical Clearance, Collector under (22)",
      "Existing Overpassing Bridge"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 36,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "existing",
     "values": {
      "sub": "14 ft",
      "int": "14 ft",
      "bu": "14 ft"
     },
     "notes": [
      "22"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Collector over Railroad",
     "labelParts": [
      "Vertical Clearance, Collector over Railroad (23)"
     ],
     "section": "Ch. 402-6.01",
     "table": "main",
     "pdfPage": 36,
     "controlling": false,
     "values": {
      "sub": "23 ft",
      "int": "23 ft",
      "bu": "23 ft"
     },
     "notes": [
      "23"
     ]
    },
    {
     "group": "Alignment Elements",
     "printedGroup": "Alignment Element",
     "element": "Design Speed",
     "labelParts": [
      "Design Speed"
     ],
     "section": "",
     "table": "alignment",
     "pdfPage": 36,
     "controlling": false,
     "values": {
      "s30": "30 mph",
      "s35": "35 mph",
      "s45": "45 mph",
      "s50": "50 mph"
     }
    },
    {
     "group": "Alignment Elements",
     "printedGroup": "Alignment Element",
     "element": "Stopping Sight Distance",
     "labelParts": [
      "*Stopping Sight Distance"
     ],
     "section": "42-1.0",
     "table": "alignment",
     "pdfPage": 36,
     "controlling": true,
     "key": "ssd",
     "values": {
      "s30": "200 ft",
      "s35": "250 ft",
      "s45": "360 ft",
      "s50": "425 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "printedGroup": "Alignment Element",
     "element": "Decision Sight Distance: Speed / Path / Direction Change",
     "labelParts": [
      "Decision Sight Distance",
      "Speed / Path / Direction Change"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "pdfPage": 36,
     "controlling": false,
     "values": {
      "s30": "U: 620 ft; SU: 535 ft",
      "s35": "U: 720 ft; SU: 625 ft",
      "s45": "U: 930 ft; SU: 800 ft",
      "s50": "U: 1030 ft; SU: 890 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "printedGroup": "Alignment Element",
     "element": "Decision Sight Distance: Stop Maneuver",
     "labelParts": [
      "Decision Sight Distance",
      "Stop Maneuver"
     ],
     "section": "42-2.0",
     "table": "alignment",
     "pdfPage": 36,
     "controlling": false,
     "values": {
      "s30": "490 ft",
      "s35": "590 ft",
      "s45": "800 ft",
      "s50": "910 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "printedGroup": "Alignment Element",
     "element": "Intersection Sight Distance, -3% to +3%",
     "labelParts": [
      "Intersection Sight Distance, -3% to +3% (28)"
     ],
     "section": "46-10.0",
     "table": "alignment",
     "pdfPage": 36,
     "controlling": false,
     "values": {
      "s30": "P: 330 ft; SUT: 420 ft",
      "s35": "P: 390 ft; SUT: 490 ft",
      "s45": "P: 500 ft; SUT: 630 ft",
      "s50": "P: 630 ft; SUT: 780 ft"
     },
     "notes": [
      "28"
     ]
    },
    {
     "group": "Alignment Elements",
     "printedGroup": "Alignment Element",
     "element": "Minimum Radius for emax = 4% / 6%",
     "labelParts": [
      "*Minimum Radius for emax = 4% / 6%"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 36,
     "controlling": true,
     "key": "minRadius",
     "values": {
      "s30": "270 ft / 250 ft (24a)",
      "s35": "430 ft / 400 ft (24a)",
      "s45": "610 ft / 560 ft (24a)",
      "s50": "760 ft (24b)"
     },
     "notes": [
      "24a",
      "24b"
     ]
    },
    {
     "group": "Alignment Elements",
     "printedGroup": "Alignment Element",
     "element": "Superelevation Rate",
     "labelParts": [
      "*Superelevation Rate (25)"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 36,
     "controlling": true,
     "key": "emax",
     "values": {
      "s30": "Up to emax = 6%",
      "s35": "Up to emax = 6%",
      "s45": "Up to emax = 6%",
      "s50": "emax = 6% or 8%"
     },
     "notes": [
      "25"
     ]
    },
    {
     "group": "Alignment Elements",
     "printedGroup": "Alignment Element",
     "element": "Horizontal Sight Distance",
     "labelParts": [
      "*Horizontal Sight Distance"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 36,
     "controlling": true,
     "values": {
      "s30": "(26)",
      "s35": "(26)",
      "s45": "(26)",
      "s50": "(26)"
     },
     "notes": [
      "26"
     ]
    },
    {
     "group": "Alignment Elements",
     "printedGroup": "Alignment Element",
     "element": "Vertical Curvature, K-value: Crest",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Crest"
     ],
     "section": "44-3.0",
     "table": "alignment",
     "pdfPage": 36,
     "controlling": true,
     "key": "crestK",
     "values": {
      "s30": "19",
      "s35": "29",
      "s45": "61",
      "s50": "84"
     }
    },
    {
     "group": "Alignment Elements",
     "printedGroup": "Alignment Element",
     "element": "Vertical Curvature, K-value: Sag",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Sag"
     ],
     "section": "44-3.0",
     "table": "alignment",
     "pdfPage": 36,
     "controlling": true,
     "key": "sagK",
     "values": {
      "s30": "37",
      "s35": "49",
      "s45": "79",
      "s50": "96"
     }
    },
    {
     "group": "Alignment Elements",
     "printedGroup": "Alignment Element",
     "element": "Maximum Grade: Level",
     "labelParts": [
      "*Maximum Grade (27)",
      "Level"
     ],
     "section": "44-1.02",
     "table": "alignment",
     "pdfPage": 36,
     "controlling": true,
     "key": "maxGrade",
     "terrain": "level",
     "values": {
      "s30": "9%",
      "s35": "9%",
      "s45": "8%",
      "s50": "7%"
     },
     "notes": [
      "27"
     ]
    },
    {
     "group": "Alignment Elements",
     "printedGroup": "Alignment Element",
     "element": "Maximum Grade: Rolling",
     "labelParts": [
      "*Maximum Grade (27)",
      "Rolling"
     ],
     "section": "44-1.02",
     "table": "alignment",
     "pdfPage": 36,
     "controlling": true,
     "key": "maxGrade",
     "terrain": "rolling",
     "values": {
      "s30": "11%",
      "s35": "10%",
      "s45": "9%",
      "s50": "8%"
     },
     "notes": [
      "27"
     ]
    },
    {
     "group": "Alignment Elements",
     "printedGroup": "Alignment Element",
     "element": "Minimum Grade",
     "labelParts": [
      "Minimum Grade"
     ],
     "section": "44-1.03",
     "table": "alignment",
     "pdfPage": 36,
     "controlling": false,
     "key": "minGrade",
     "values": {
      "s30": "Desirable: 0.5% Minimum: 0.3% (Curbed); 0.0% (Uncurbed)",
      "s35": "Desirable: 0.5% Minimum: 0.3% (Curbed); 0.0% (Uncurbed)",
      "s45": "Desirable: 0.5% Minimum: 0.3% (Curbed); 0.0% (Uncurbed)",
      "s50": "Desirable: 0.5% Minimum: 0.3% (Curbed); 0.0% (Uncurbed)"
     }
    }
   ],
   "legend": [
    "Des: Desirable Min: Minimum",
    "U: Urban SU: Suburban",
    "* Level One controlling criterion, see page 2 of 4"
   ],
   "footnotes": {
    "1": "Parking Lane. In a residential area, a parallel parking lane of 7 to 8 ft width should be provided on one or both sides of the street. In a commercial or industrial area, parking-lane width should range from 8 to 11 ft, and lanes should usually be provided on both sides of the street. The minimum value may only be used if the lane is not intended for use as a travel lane in a restricted condition. Where a curb-and-gutter section is used, the gutter-pan width may be considered as part of the parking-lane width. Where practical, the parking-lane width should be in addition to the gutter-pan width.",
    "2": "Design Speed. The minimum design speed should equal the minimum value, the anticipated posted speed limit after construction, or the legal speed limit on a non-posted highway. The legal speed limit in an urban district is 30 mph. Based upon an engineering study, the design speed may be raised to an absolute maximum of 55 mph.",
    "3": "On-Street Parking. In general, on-street parking is discouraged.",
    "4": "Travel-Lane Width. In an industrial area, a 12 ft width should be used. Where right-of-way is restricted, an 11 ft width may be used in an industrial area, or a 10 ft width may be used in a residential area. On a multi-lane facility in a built-up area, the minimum width is 10 ft.",
    "5": "Surface Type. The pavement-type selection will be determined by the INDOT Office of Pavement Engineering.",
    "6": "Curb Offset. The curb offset should be 2 ft. Vertical curbs introduced intermittently should be offset 2 ft. A continuous curb used along a median or channelizing island may be offset 1 ft.",
    "7": "Shoulder Width. The value applies to paved-shoulder width. The following will also apply. a. For an uncurbed section, the shoulder is paved to the front face of guardrail. The desirable guardrail offset is 2 ft from the usable shoulder width. See Section 49-4.0 for more information. b. For an uncurbed section, a desirable additional 1 ft of compacted aggregate will be provided. c. For a curbed section, the curb offset is included in the paved shoulder width.",
    "8": "Cross Slope, Travel Lane. Cross slopes of 1.5% are acceptable on an existing bridge to remain in place.",
    "8A": "Cross Slope, Shoulder. See Figure 45-1A(1) or Figure 45-1A(2) for more-specific information.",
    "9": "Minimum Median Width. The criteria assume the presence of mountable curbs with a 0 ft curb offset.",
    "10": "Sidewalk Width. A buffer of less than 2 ft wide is not permitted. If no buffer is provided, the sidewalk width should be 6 ft.",
    "11": "Bicycle-Lane Width. The width is in addition to the width of a parking lane, if present. See Section 51-7.0 for additional details.",
    "12": "Clear-Zone Width. The following will apply. a. Facility with Vertical Curbs. The clear-zone width will be measured from the edge of travel lane or will be to the right-of-way line, whichever is less. No clear zone is required where there is 24-h parking. b. Facility with Sloping Curbs or without Curbs. The clear-zone width will vary according to design speed, traffic volume, side slopes, and horizontal curvature. c. Curbed Facility. There should be an appurtenance-free area as measured from the gutter line of a curb. d. Value. See Section 49-2.0 for specific clear-zone-width value",
    "13": "Curbing Type. Vertical curbs may only be used with a design speed 45 mph or lower.",
    "14": "Side Slopes, Uncurbed. Value is for new construction. See Sections 45-3.0 and 45-8.0 for more information. For a reconstruction project, see Section 49-3.0",
    "15": "Foreslope. See Sections 49-2.0 and 49-3.0 for the lateral extent of the foreslope in a ditch section.",
    "16": "Ditch Width. A V-ditch should be used in a rock cut.",
    "17": "Backslope. The backslope for a rock cut will vary according to the height of the cut and the geotechnical requirements. See Section 45-3.02 and 107-6.02 for typical rock-cut sections.",
    "18": "Side Slope, Curbed, Cut. A shelf or sidewalk will be present immediately behind the curb before the toe of the backslope. The minimum width of a shelf will be 6 ft. Where a sidewalk is present, the toe of the backslope will be 1 ft beyond the edge of sidewalk. See Section 45-3.0 for more information.",
    "19": "Side Slope, Curbed, Fill. If no sidewalks are present or planned, the lateral extent of the 12:1 slope may be reduced to 4 ft.",
    "20": "Structural Capacity, New or Reconstructed Bridge. The following will apply. a. A State-highway bridge within 15 mi of a Toll-Road gate must be designed for Toll-Road loading. b. A bridge on an Extra-Heavy-Duty Highway must be designed for the Michigan Train truck loading configuration. c. See Chapter 403 for additional information on the loading configurations.",
    "21": "Width, New or Reconstructed Bridge. See Section 402-6.02(01) for more information. The bridge clear-roadway width is the algebraic sum of the following: a. the approach traveled-way width; b. the approach usable shoulder width without guardrail; and c. a bridge-railing offset (see Figure 402-6H).",
    "22": "Vertical Clearance, Collector Under. Value includes an additional 6 in. allowance for future pavement overlays. Vertical clearance applies from usable edge to usable edge of shoulder.",
    "23": "Vertical Clearance, Collector Over Railroad. See Chapter 402-6.01(03) for additional information on railroad clearance under a highway.",
    "24": "Minimum Radius. The following will apply. a. Based on emax = 4% or 6% and low-speed urban street conditions. b. Based on emax = 8% and open-road conditions.",
    "25": "Superelevation Rate. See Section 305-4.0 for value of superelevation rate based on design speed and radius and additional information on superelevation requirements.",
    "26": "Horizontal Sight Distance. For a given design speed, the necessary middle ordinate will be determined by the radius and the sight distance which applies at the site. See the discussion in Section 305-5.0.",
    "27": "Maximum Grade. For a grade along a longitudinal distance of less than 500 ft (PVT to PVC), a one-way downgrade, or a road with AADT < 400, the maximum grade may be up to 2% steeper than the table value. Where adjacent sidewalks are present, the maximum desirable grade is 5%.",
    "28": "Intersection Sight Distance. For a left turn onto a 2-lane roadway: P = Passenger car; SUT = single unit truck. See Figure 46-10G for value for a combination truck.",
    "*": "Level One controlling criterion. Except as noted in this chapter, the values shown in AASHTO's A Policy on Geometric Design of Highways and Streets (the Green Book) may be used as minimum values if they are lower than similar values shown herein. A controlling criterion that does not meet the minimum value is a design exception and is subject to approval. See Section 40-8.0 low speed and high speed applications."
   },
   "transcriptionNotes": [
    "Revision label 'Rev. Jul. 2014' comes from the List of Figures / chapter revision table (Design Memo 14-10); it is not printed on the figure pages.",
    "The cross-section block on page 1 is labeled 'Alignment Elements' on the figure (kept in printedGroup; normalized to Cross-Section Elements). The alignment block on page 2 is labeled 'Alignment Element'.",
    "Built-up paved shoulder printed '8 ft' (suburban uncurbed 8 ft, intermediate uncurbed 6 ft), and built-up shoulder cross slope '2%' (suburban/intermediate 4%).",
    "Uncurbed cut backslope printed '4:1 for 4 ft; 3:1 Max. to Top (17)' (Figures 53-2 to 53-7 print '4:1 for 20 ft').",
    "Minimum radii (270/250, 430/400, 610/560, 760 ft at 30/35/45/50 mph) differ from Figures 53-6 and 53-7 (260/240, 420/390, 600/550, 750 ft) for the same speeds and emax basis.",
    "Footnote (27) uses a 500 ft grade length; Figures 53-3 and 53-4 use 480 ft.",
    "The '*' note reads 'See Section 40-8.0 low speed and high speed applications' (missing 'for'); the applicability sentence is printed with a leading '. '.",
    "Bridge row label printed 'Reconstructe d Bridge' (line-wrap) - normalized to 'Reconstructed'.",
    "Footnote (1) (Parking Lane) is referenced from 'Parking-Lane Width (1)'; footnote numbers are not in row order.",
    "The Bridges block is printed on page 2 above the alignment table but uses the area-type columns, so it is in table 'main'."
   ]
  },
  {
   "id": "53-9",
   "title": "Geometric Design Criteria for Urban Local Street",
   "revision": "Rev. Jul. 2014",
   "printedTitle": "GEOMETRIC DESIGN CRITERIA FOR URBAN LOCAL STREET (New Construction or Reconstruction)",
   "pdfPages": [
    39,
    40,
    41,
    42
   ],
   "facility": "Urban Local Street",
   "area": "urban",
   "isFreeway": false,
   "applicability": "These criteria apply only to a federal-aid project.",
   "columns": [
    {
     "key": "sub",
     "label": "Design Value (By Type of Area) / Suburban",
     "conditions": {
      "subcategory": "suburban"
     },
     "table": "main"
    },
    {
     "key": "int",
     "label": "Design Value (By Type of Area) / Intermediate",
     "conditions": {
      "subcategory": "intermediate"
     },
     "table": "main"
    },
    {
     "key": "bu",
     "label": "Design Value (By Type of Area) / Built-Up",
     "conditions": {
      "subcategory": "built-up"
     },
     "table": "main"
    },
    {
     "key": "s20",
     "label": "20 mph",
     "conditions": {
      "designSpeed": [
       20,
       20
      ]
     },
     "table": "alignment"
    },
    {
     "key": "s25",
     "label": "25 mph",
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
     "label": "30 mph",
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
     "label": "35 mph",
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
     "label": "45 mph",
     "conditions": {
      "designSpeed": [
       45,
       45
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
     "section": "40-2.02",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "values": {
      "sub": "20 Years",
      "int": "20 Years",
      "bu": "20 Years"
     }
    },
    {
     "group": "Design Controls",
     "element": "Design Speed, mph",
     "labelParts": [
      "*Design Speed, mph (2)"
     ],
     "section": "40-3.0",
     "table": "main",
     "pdfPage": 39,
     "controlling": true,
     "key": "designSpeed",
     "values": {
      "sub": "Curbed: 30 - 40; Uncurbed: 30 - 45",
      "int": "Curbed: 30 - 40; Uncurbed: 30 - 40",
      "bu": "Curbed: 25 - 40"
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
     "pdfPage": 39,
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
     "pdfPage": 39,
     "controlling": false,
     "values": {
      "sub": "Desirable: C; Minimum: D",
      "int": "Desirable: C; Minimum: D",
      "bu": "D"
     }
    },
    {
     "group": "Design Controls",
     "element": "On-Street Parking",
     "labelParts": [
      "On-Street Parking"
     ],
     "section": "45-1.04",
     "table": "main",
     "pdfPage": 39,
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
     "printedGroup": "Cross Section Elements",
     "element": "Travel Lane: Width",
     "labelParts": [
      "Travel Lane",
      "*Width (4)"
     ],
     "section": "45-1.01",
     "table": "main",
     "pdfPage": 39,
     "controlling": true,
     "key": "laneWidth",
     "values": {
      "sub": "Curbed: 11 ft; Uncurbed: 11 ft",
      "int": "Curbed: 10 ft; Uncurbed: 11 ft",
      "bu": "Curbed: 10 ft"
     },
     "numeric": {
      "sub": {
       "curbed": {
        "des": 11,
        "min": 11,
        "single": true
       },
       "uncurbed": {
        "des": 11,
        "min": 11,
        "single": true
       }
      },
      "int": {
       "curbed": {
        "des": 10,
        "min": 10,
        "single": true
       },
       "uncurbed": {
        "des": 11,
        "min": 11,
        "single": true
       }
      },
      "bu": {
       "curbed": {
        "des": 10,
        "min": 10,
        "single": true
       }
      }
     },
     "notes": [
      "4"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Travel Lane: Typical Surface Type",
     "labelParts": [
      "Travel Lane",
      "Typical Surface Type"
     ],
     "section": "Ch. 602",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete",
      "int": "Asphalt / Concrete",
      "bu": "Asphalt / Concrete"
     }
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Curb Offset",
     "labelParts": [
      "*Curb Offset (5)"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 39,
     "controlling": true,
     "key": "curbOffset",
     "values": {
      "sub": "2 ft",
      "int": "2 ft",
      "bu": "2 ft"
     },
     "numeric": {
      "sub": {
       "des": 2,
       "min": 2,
       "single": true
      },
      "int": {
       "des": 2,
       "min": 2,
       "single": true
      },
      "bu": {
       "des": 2,
       "min": 2,
       "single": true
      }
     },
     "notes": [
      "5"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Shoulder: Usable Width",
     "labelParts": [
      "Shoulder",
      "*Usable Width"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 39,
     "controlling": true,
     "key": "shoulderRightUsable",
     "values": {
      "sub": "Curbed Des: 4 ft; Min. 2 ft; Uncurbed: Des: 4 ft; Min. 2 ft",
      "int": "Curbed Des: 4 ft; Min. 2 ft; Uncurbed: Des: 4 ft; Min. 2 ft",
      "bu": "Des: 4 ft; Min: 2 ft"
     },
     "numeric": {
      "sub": {
       "curbed": {
        "des": 4,
        "min": 2
       },
       "uncurbed": {
        "des": 4,
        "min": 2
       }
      },
      "int": {
       "curbed": {
        "des": 4,
        "min": 2
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
     "printedGroup": "Cross Section Elements",
     "element": "Shoulder: Typical Surface Type",
     "labelParts": [
      "Shoulder",
      "Typical Surface Type"
     ],
     "section": "Ch. 602",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete / Aggregate / Earth",
      "int": "Asphalt / Concrete / Aggregate / Earth",
      "bu": "Asphalt / Concrete / Aggregate / Earth"
     }
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Cross Slope: Travel Lane",
     "labelParts": [
      "Cross Slope",
      "*Travel Lane (6)"
     ],
     "section": "45-1.01",
     "table": "main",
     "pdfPage": 39,
     "controlling": true,
     "key": "travelLaneCrossSlope",
     "values": {
      "sub": "2%",
      "int": "2%",
      "bu": "2%"
     },
     "notes": [
      "6"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Cross Slope: Shoulder",
     "labelParts": [
      "Cross Slope",
      "Shoulder"
     ],
     "section": "45-1.02",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "key": "shoulderCrossSlope",
     "values": {
      "sub": "2%-6% Asph. / Conc.; 6%-8% Aggr.; 8% Earth",
      "int": "2%-6% Asph. / Conc.; 6%-8% Aggr.; 8% Earth",
      "bu": "2%-6% Asph. / Conc.; 6%-8% Aggr.; 8% Earth"
     }
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Auxiliary Lane: Lane Width",
     "labelParts": [
      "Auxiliary Lane",
      "Lane Width"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "key": "auxLaneWidth",
     "values": {
      "sub": "Des: 11 ft; Min: 10 ft",
      "int": "Des: 11 ft; Min: 10 ft",
      "bu": "Des: 10 ft; Min: 9 ft"
     },
     "numeric": {
      "sub": {
       "des": 11,
       "min": 10
      },
      "int": {
       "des": 11,
       "min": 10
      },
      "bu": {
       "des": 10,
       "min": 9
      }
     }
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Auxiliary Lane: Curb Offset",
     "labelParts": [
      "Auxiliary Lane",
      "Curb Offset"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "values": {
      "sub": "Des: 1 ft; Min: 0.0 ft",
      "int": "Des: 1 ft; Min: 0.0 ft",
      "bu": "Des: 1 ft; Min: 0.0 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Auxiliary Lane: Shoulder Width",
     "labelParts": [
      "Auxiliary Lane",
      "Shoulder Width"
     ],
     "section": "45-1.03",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "values": {
      "sub": "Des: 4 ft; Min: 2 ft",
      "int": "Des: 4 ft; Min: 2 ft",
      "bu": "Des: 4 ft; Min: 2 ft"
     }
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Auxiliary Lane: Typical Surface Type",
     "labelParts": [
      "Auxiliary Lane",
      "Typical Surface Type"
     ],
     "section": "Ch. 602",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "values": {
      "sub": "Asphalt / Concrete / Aggregate / Earth",
      "int": "Asphalt / Concrete / Aggregate / Earth",
      "bu": "Asphalt / Concrete / Aggregate / Earth"
     }
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Parking-Lane Width",
     "labelParts": [
      "Parking-Lane Width (1)"
     ],
     "section": "45-1.04",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "key": "parkingLaneWidth",
     "values": {
      "sub": "Des: 9 ft; Min: 8 ft",
      "int": "Des: 9 ft; Min: 8 ft",
      "bu": "Des: 9 ft; Min: 8 ft"
     },
     "notes": [
      "1"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Sidewalk Width",
     "labelParts": [
      "Sidewalk Width (7)"
     ],
     "section": "45-1.06",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "values": {
      "sub": "5 ft with 5-ft Buffer (Des)",
      "int": "5 ft with 5-ft Buffer (Des)",
      "bu": "Varies, 6 ft Min"
     },
     "notes": [
      "7"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Bicycle-Lane Width",
     "labelParts": [
      "Bicycle-Lane Width (8)"
     ],
     "section": "51-7.0",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "values": {
      "sub": "Curbed: 5 ft; Uncurbed: Shld. Width +4 ft",
      "int": "Curbed: 5 ft; Uncurbed: Shld. Width +4 ft",
      "bu": "Curbed: 5 ft"
     },
     "notes": [
      "8"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Clear-Zone Width",
     "labelParts": [
      "Clear-Zone Width"
     ],
     "section": "49-2.0",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "key": "clearZone",
     "values": {
      "sub": "(9)",
      "int": "(9)",
      "bu": "(9)"
     },
     "notes": [
      "9"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Typical Curbing Type, where used",
     "labelParts": [
      "Typical Curbing Type, where used (9c)"
     ],
     "section": "45-1.05",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "values": {
      "sub": "Vertical / Sloping",
      "int": "Vertical / Sloping",
      "bu": "Vertical / Sloping"
     },
     "notes": [
      "9c"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Foreslope",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Cut",
      "Foreslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "key": "foreslope",
     "values": {
      "sub": "3:1 Max",
      "int": "3:1 Max",
      "bu": "N/A"
     }
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Ditch Width",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Cut",
      "Ditch Width"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "key": "ditchWidth",
     "values": {
      "sub": "Des: 4 ft; Min: 0.0 ft",
      "int": "Des: 4 ft; Min: 0.0 ft",
      "bu": "N/A"
     }
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Side Slopes, Uncurbed: Cut: Backslope",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Cut",
      "Backslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "key": "backslope",
     "variant": "uncurbed",
     "values": {
      "sub": "3:1 Max (10)",
      "int": "3:1 Max. (10)",
      "bu": "N/A"
     },
     "notes": [
      "10"
     ]
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Side Slopes, Uncurbed: Fill",
     "labelParts": [
      "Side Slopes, Uncurbed",
      "Fill"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "key": "fillSlope",
     "variant": "uncurbed",
     "values": {
      "sub": "3:1 Max",
      "int": "3:1 Max.",
      "bu": "N/A"
     }
    },
    {
     "group": "Cross-Section Elements",
     "printedGroup": "Cross Section Elements",
     "element": "Side Slopes, Curbed: Cut, Backslope",
     "labelParts": [
      "Side Slopes, Curbed",
      "Cut, Backslope"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "key": "backslope",
     "variant": "curbed",
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
     "printedGroup": "Cross Section Elements",
     "element": "Side Slopes, Curbed: Fill",
     "labelParts": [
      "Side Slopes, Curbed",
      "Fill (12)"
     ],
     "section": "45-3.0",
     "table": "main",
     "pdfPage": 39,
     "controlling": false,
     "key": "fillSlope",
     "variant": "curbed",
     "values": {
      "sub": "12:1 for 12 ft; 3:1 Max to Toe",
      "int": "12:1 for 12 ft; 3:1 Max to Toe",
      "bu": "12:1 for 12 ft; 3:1 Max to Toe"
     },
     "notes": [
      "12"
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
     "pdfPage": 40,
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
     "section": "45-4.01",
     "table": "main",
     "pdfPage": 40,
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "new",
     "values": {
      "sub": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: (13)",
      "int": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: (13)",
      "bu": "Curbed: Full Approach Curb-to-Curb Width; Uncurbed: (13)"
     },
     "notes": [
      "13"
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
     "pdfPage": 40,
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
     "section": "45-4.01",
     "table": "main",
     "pdfPage": 40,
     "controlling": false,
     "key": "bridgeClearRoadwayWidth",
     "variant": "existing",
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
      "*Vertical Clearance, Local Under (15)",
      "New or Replaced Overpassing Bridge (15)"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 40,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "new",
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
      "*Vertical Clearance, Local Under (15)",
      "Existing Overpassing Bridge"
     ],
     "section": "44-4.0",
     "table": "main",
     "pdfPage": 40,
     "controlling": true,
     "key": "verticalClearance",
     "variant": "existing",
     "values": {
      "sub": "14 ft",
      "int": "14 ft",
      "bu": "14 ft"
     },
     "notes": [
      "15"
     ]
    },
    {
     "group": "Bridges",
     "element": "Vertical Clearance, Local over Railroad",
     "labelParts": [
      "Vertical Clearance, Local over Railroad (16)"
     ],
     "section": "Ch. 402-6.01",
     "table": "main",
     "pdfPage": 40,
     "controlling": false,
     "values": {
      "sub": "23 ft",
      "int": "23 ft",
      "bu": "23 ft"
     },
     "notes": [
      "16"
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
     "pdfPage": 40,
     "controlling": false,
     "values": {
      "s20": "20 mph",
      "s25": "25 mph",
      "s30": "30 mph",
      "s35": "35 mph",
      "s45": "45 mph"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Stopping Sight Distance: Desirable",
     "labelParts": [
      "*Stopping Sight Distance",
      "Desirable"
     ],
     "section": "42-1.0",
     "table": "alignment",
     "pdfPage": 40,
     "controlling": true,
     "key": "ssd",
     "values": {
      "s20": "115 ft",
      "s25": "155 ft",
      "s30": "200 ft",
      "s35": "250 ft",
      "s45": "360 ft"
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
     "pdfPage": 40,
     "controlling": false,
     "values": {
      "s20": "U: 415 ft; SU: 360 ft",
      "s25": "U: 515 ft; SU: 445 ft",
      "s30": "U: 620 ft; SU: 535 ft",
      "s35": "U: 720 ft; SU: 625 ft",
      "s45": "U: 930 ft; SU: 800 ft"
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
     "pdfPage": 40,
     "controlling": false,
     "values": {
      "s20": "300 ft",
      "s25": "430 ft",
      "s30": "490 ft",
      "s35": "590 ft",
      "s45": "800 ft"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Intersection Sight Distance, -3% to +3%",
     "labelParts": [
      "Intersection Sight Distance, -3% to +3% (22)"
     ],
     "section": "46-10.0",
     "table": "alignment",
     "pdfPage": 40,
     "controlling": false,
     "values": {
      "s20": "P: 220 ft; SUT: 280 ft",
      "s25": "P: 280 ft; SUT: 350 ft",
      "s30": "P: 330 ft; SUT: 420 ft",
      "s35": "P: 390 ft; SUT:490 ft",
      "s45": "P: 500 ft; SUT: 630 ft"
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
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 40,
     "controlling": true,
     "key": "minRadius",
     "values": {
      "s20": "70 ft (17)",
      "s25": "140 ft (17)",
      "s30": "260 ft (17)",
      "s35": "420 ft (17)",
      "s45": "600 ft (17)"
     },
     "notes": [
      "17"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Superelevation Rate",
     "labelParts": [
      "*Superelevation Rate (18)"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 40,
     "controlling": true,
     "key": "emax",
     "values": {
      "s20": "emax = 4%",
      "s25": "emax = 4%",
      "s30": "emax = 4%",
      "s35": "emax = 4%",
      "s45": "emax = 4%"
     },
     "notes": [
      "18"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Horizontal Sight Distance",
     "labelParts": [
      "*Horizontal Sight Distance"
     ],
     "section": "Chp. 305",
     "table": "alignment",
     "pdfPage": 40,
     "controlling": true,
     "values": {
      "s20": "(19)",
      "s25": "(19)",
      "s30": "(19)",
      "s35": "(19)",
      "s45": "(19)"
     },
     "notes": [
      "19"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Crest",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Crest"
     ],
     "section": "44-3.0",
     "table": "alignment",
     "pdfPage": 40,
     "controlling": true,
     "key": "crestK",
     "values": {
      "s20": "7",
      "s25": "12",
      "s30": "19",
      "s35": "29",
      "s45": "61"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Vertical Curvature, K-value: Sag",
     "labelParts": [
      "*Vertical Curvature, K-value",
      "Sag"
     ],
     "section": "44-3.0",
     "table": "alignment",
     "pdfPage": 40,
     "controlling": true,
     "key": "sagK",
     "values": {
      "s20": "17",
      "s25": "26",
      "s30": "37",
      "s35": "49",
      "s45": "79"
     }
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Level",
     "labelParts": [
      "*Maximum Grade (20)",
      "Level"
     ],
     "section": "44-1.02",
     "table": "alignment",
     "pdfPage": 40,
     "controlling": true,
     "key": "maxGrade",
     "terrain": "level",
     "values": {
      "s20": "10%",
      "s25": "10%",
      "s30": "10%",
      "s35": "9%",
      "s45": "8%"
     },
     "notes": [
      "20"
     ]
    },
    {
     "group": "Alignment Elements",
     "element": "Maximum Grade: Rolling",
     "labelParts": [
      "*Maximum Grade (20)",
      "Rolling"
     ],
     "section": "44-1.02",
     "table": "alignment",
     "pdfPage": 40,
     "controlling": true,
     "key": "maxGrade",
     "terrain": "rolling",
     "values": {
      "s20": "15%",
      "s25": "11%",
      "s30": "11%",
      "s35": "10.5%",
      "s45": "10%"
     },
     "notes": [
      "20"
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
     "pdfPage": 40,
     "controlling": false,
     "key": "minGrade",
     "values": {
      "s20": "Desirable: 0.5%; Minimum: 0.3% (Curbed) 0.0% (Uncurbed) (21)",
      "s25": "Desirable: 0.5%; Minimum: 0.3% (Curbed) 0.0% (Uncurbed) (21)",
      "s30": "Desirable: 0.5%; Minimum: 0.3% (Curbed) 0.0% (Uncurbed) (21)",
      "s35": "Desirable: 0.5%; Minimum: 0.3% (Curbed) 0.0% (Uncurbed) (21)",
      "s45": "Desirable: 0.5%; Minimum: 0.3% (Curbed) 0.0% (Uncurbed) (21)"
     },
     "notes": [
      "21"
     ]
    }
   ],
   "legend": [
    "Des: Desirable Min: Minimum",
    "U: Urban SU: Suburban",
    "* Level One controlling criterion, see page 2 of 4"
   ],
   "footnotes": {
    "1": "Parking Lane. In a residential area, the minimum width is 7 ft. In a commercial or industrial area the minimum width is 8 ft. Where curb-and-gutter sections are used, the gutter width should be considered part of the parking lane width.",
    "2": "Design Speed. The minimum design speed should equal the minimum value, the anticipated posted speed limit after construction, or the legal speed limit on a non-posted highway. The legal speed limit in an urban district is 30 mph. Based upon an engineering study, the design speed may be raised to an absolute maximum of 55 mph.",
    "3": "On-Street Parking. In general, on-street parking is discouraged.",
    "4": "Travel-Lane Width. In a restricted area and where there are few trucks, a width of 1 ft narrower than the value may be used, but the total width may not be less than 10 ft. In an industrial area, a 12 ft width should be used. In a residential area, a 26 ft roadway (curb face to curb face) consisting of one 12 ft travel lane and two 7 ft parking lanes is used. In an industrial area, a 12 ft width is desirable and an 11 ft width is minimum.",
    "5": "Curb Offset. The curb offset should be 2 ft. For a curbed section, the curb offset is included in the paved-shoulder width.",
    "6": "Cross Slope, Travel Lane. Cross slopes of 1.5% are acceptable on an existing bridge to remain in place.",
    "7": "Sidewalk Width. A buffer of less than 2 ft wide is not permitted. If no buffer is provided, the sidewalk width should be 6 ft.",
    "8": "Bicycle-Lane Width. The value is in addition to the width of a parking lane, if present. See Section 51-7.0 for additional details.",
    "9": "Clear-Zone Width. The following will apply. a. Facility with Vertical Curbs. The clear-zone width will be measured from the edge of travel lane or will be to the right-of-way line, whichever is less. No clear zone is required where there is 24-h parking. b. Facility with Sloping Curbs or without Curbs. The clear-zone width will vary according to design speed, traffic volume, side slopes, and horizontal curvature. c. Curbed Facility. There should be an appurtenance-free area as measured from the gutter line of a curb. Vertical curbs may only be used with design speed 45 mph or lower. d. Value. See Section 49-2.0 for specific clear-zone-width values.",
    "10": "Backslope. The backslope for a rock cut will vary according to the height of the cut and the geotechnical requirements. See the INDOT Standard Drawings for typical rock-cut sections.",
    "11": "Side Slope, Curbed, Cut. A shelf or sidewalk will be present immediately behind the curb before the toe of the backslope. The minimum width of a shelf is 6 ft. Where a sidewalk is present, the toe of the backslope will be 1 ft beyond the edge of sidewalk. See Section 45-3.0 for more information.",
    "12": "Side Slope, Curbed, Fill. If no sidewalks are present or planned, the lateral extent of the 12:1 slope may be reduced to 4 ft.",
    "13": "Width, New or Reconstructed Bridge. See Section 402-6.02(01) for more information. The bridge clear-roadway width is the algebraic sum of the following: a. the approach traveled-way width; b. the approach usable shoulder width without guardrail; and c. a bridge-railing offset (see Figure 402-6H).",
    "14": "Width, Existing Bridge to Remain in Place. If the width of an existing bridge is less than the approach travelway width, consideration should be given to widening the bridge. For such a bridge of length greater than 200 ft, the minimum shoulder width on the right and the left sides is 3.5 ft.",
    "15": "Vertical Clearance, Local Street Under. Value includes an additional 6-in. allowance for future pavement overlays. Vertical clearance applies from usable edge to usable edge of shoulder.",
    "16": "Vertical Clearance, Local Street Over Railroad. See Chapter 402-6.01(03) for additional information on railroad clearance under a highway.",
    "17": "Minimum Radius. This is based on emax=4% and low-speed urban street conditions.",
    "18": "Superelevation Rate. See Section 305-4.0 for value of superelevation rate based on design speed and radius and additional information on superelevation requirements.",
    "19": "Horizontal Sight Distance. For a given design speed, the necessary middle ordinate will be determined by the radius and the sight distance which applies at the site. See the discussion in Section 305-5.0.",
    "20": "Maximum Grade. In a residential area, the maximum grade should not exceed 15%. In an industrial or commercial area, the maximum grade should not exceed 8%.",
    "21": "Flat Terrain. In very flat terrain and where no drainage outlet is available, a gutter grade as low as 0.2% may be used.",
    "22": "Intersection Sight Distance. For a left turn onto a 2-lane roadway: P = Passenger car; SUT = single unit truck. See Figure 46-10G for value for a combination truck.",
    "*": "Level One controlling criterion. Except as noted in this chapter, the values shown in AASHTO's A Policy on Geometric Design of Highways and Streets (the Green Book) may be used as minimum values if they are lower than similar values shown herein. A controlling criterion that does not meet the minimum value is a design exception and is subject to approval. See Section 40-8.0 forlow speed and high speed applications."
   },
   "transcriptionNotes": [
    "Revision label 'Rev. Jul. 2014' comes from the List of Figures / chapter revision table (Design Memo 14-10); it is not printed on the figure pages.",
    "The cross-section block is labeled 'Cross Section Elements' (no hyphen) on the figure.",
    "Built-up Level of Service printed 'D' only.",
    "Curbing type row references '(9c)' and lists 'Vertical / Sloping' (other figures: 'Sloping / Vertical').",
    "Uncurbed backslope/fill: suburban '3:1 Max', intermediate '3:1 Max.' (trailing period).",
    "Intersection sight distance 35 mph printed 'SUT:490 ft' (no space).",
    "Rolling maximum grade at 20 mph printed '15%' (25 mph: 11%); footnote (20) limits residential grades to 15%.",
    "Stop-maneuver decision sight distance printed 300 ft at 20 mph and 430 ft at 25 mph.",
    "The '*' note reads 'See Section 40-8.0 forlow speed' (missing space).",
    "Shoulder width row is '*Usable Width' (Figures 53-6 to 53-8 give paved width).",
    "The Bridges block is printed on page 2 above the alignment table but uses the area-type columns, so it is in table 'main'."
   ]
  }
 ]
};
