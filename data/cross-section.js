/*
 * IDM Chapter 45, Cross-Section Elements (latest revision Feb. 2019, Design
 * Memo 19-01), plus shoulder superelevation rules from Chapter 305 (Apr. 2025).
 * Values transcribed from the chapter PDFs.
 */
window.IDM = window.IDM || {};
IDM.xs = {
  source: { chapter: "45" },

  // 45-1.01(02) travel-lane cross slope, tangent section, State highway
  laneCrossSlope: {
    section: "45-1.01(02)",
    normal: 2.0,
    thirdAndFourthLaneSameDirection: 3.0,
    bridgeNew: 2.0,
    bridgeExistingMayRetain: 1.5,
    nonStatePaved: 2.0,
    nonStateAggregate: 6.0,
    rules: [
      "2-lane highway: crowned at centerline, 2% sloping away from the center.",
      "Divided, two lanes each direction: each roadway crowned at its centerline, 2% away from the center.",
      "Three-lane section (new construction or reconstruction): crowned along the lane edge between the center lane and the lane adjacent to the median, with the right two lanes sloping to the outside; travel-lane cross slopes 2%.",
      "Three-lane section (adding lanes to existing facility): existing crown maintained; added lane slopes in the same direction and rate as the adjacent lane. Where three lanes slope in the same direction, the third lane should be sloped at 3%.",
      "Four-lane section: crowned at the one-way-roadway centerline (two lanes on each side), 2% away from the center. Where three or more lanes slope in the same direction, the third and fourth lanes should be sloped at 3%.",
      "Existing roadway with 2 lanes sloped one direction: increase overlay depth 3 in. at the inside edge to get a uniform 2%. Three lanes sloped one direction: 3% on the outside lane. A lane added in the median should slope 2% toward the median.",
      "Bridge (new or reconstructed): 2% from the crown to the face of railing or curb; crown in the same location as the approach roadway. An existing bridge to remain may retain 1.5%."
    ]
  },

  // 45-1.02(05), Figures 45-1A(1) and 45-1A(2) shoulder cross slope, tangent section
  shoulderCrossSlope: {
    section: "45-1.02(05)",
    paved: 4.0,
    curbOffset: "Same as adjacent travel lane (typically 2%)",
    aggregate: "4% to 6%",
    earth: "6% to 8%",
    withUnderdrains: {
      figure: "45-1A(1)",
      narrow: "<= 4 ft: 2% (match travel lane)",
      wide: "> 4 ft: 2% for the 2 ft closest to the travel lane, then 4%"
    },
    withoutUnderdrains: {
      figure: "45-1A(2)",
      narrow: "<= 4 ft: 2% (match travel lane)",
      wide: "> 4 ft: 4%"
    },
    note: "Where the travel lane tangent cross slope differs from 2%, the shoulder cross slope (<= 4 ft shoulder) should match the travel lane cross slope."
  },

  // 45-1.03 auxiliary lane
  auxLane: { section: "45-1.03", crossSlopeAdd: 1.0, widthNote: "Same width as the adjacent travel lane, but not less than 1 ft narrower." },

  // Figures 45-3A to 45-3D side slopes (new construction)
  fillNonCurbed: {
    figure: "45-3A",
    title: "Typical Fill Slopes (Non-Curbed Facilities)",
    rows: [
      { facility: "Freeways; urban/rural arterials; urban/rural collectors", height: "All", slope: "6:1 to clear zone edge; 3:1 maximum to toe (see Section 49-2.03)", clearZoneRun: 6, toeMax: 3 },
      { facility: "Rural local roads", height: "0-30 ft", slope: "Desirable 4:1, maximum 3:1", desirable: 4, max: 3, hMax: 30 },
      { facility: "Rural local roads", height: "> 30 ft", slope: "3:1 maximum", max: 3, hMin: 30 },
      { facility: "Urban local streets", height: "All", slope: "3:1 maximum", max: 3 }
    ],
    note: "Slopes shown are for new construction only. See Chapter 49 for reconstruction."
  },
  fillCurbed: {
    figure: "45-3B",
    title: "Typical Fill Slope (Curbed Facilities)",
    rows: [
      { facility: "Freeways", x: "N/A", height: "N/A", slope: "N/A" },
      { facility: "Rural arterials, rural collectors", x: "5 ft (1)", height: "All", slope: "6:1 to clear zone edge; 3:1 or flatter to toe" },
      { facility: "Rural local roads", x: "5 ft (1)", height: "0-30 ft", slope: "Desirable 4:1, maximum 3:1" },
      { facility: "Rural local roads", x: "5 ft (1)", height: "> 30 ft", slope: "3:1 maximum" },
      { facility: "Urban arterials, urban collectors, urban local streets", x: "11 ft (2)", height: "All", slope: "3:1 maximum" }
    ],
    xNote: "X = distance behind the curb at 12:1 before the fill slope begins.",
    notes: ["(1) If sidewalks are present or anticipated, this dimension should be 11 ft.", "(2) If sidewalks are not present or anticipated, this dimension may be reduced to 5 ft."]
  },
  cutNonCurbed: {
    figure: "45-3C",
    title: "Typical Cut Slope (Non-Curbed Facility)",
    // ditchWidth reproduced as printed in the figure
    rows: [
      { facility: "Freeway", foreslope: "6:1", ditch: "1.2 (as printed)", backA: "4:1 for 20 ft", backB: "H <= 10 ft: 4:1; H > 10 ft: 3:1", foreMax: 6, backMax: 3 },
      { facility: "Arterial or rural collector", foreslope: "6:1", ditch: "1.2 (as printed)", backA: "4:1 for 20 ft", backB: "3:1 max to top", foreMax: 6, backMax: 3 },
      { facility: "Urban collector", foreslope: "Des. 6:1, Max. 4:1", ditch: "1.2 (as printed)", backA: "4:1 for 4 ft", backB: "3:1 max to top", foreDes: 6, foreMax: 4, backMax: 3 },
      { facility: "Rural local road, V >= 50 mph", foreslope: "4:1 (max)", ditch: "Des. 4 ft, Min. \"V\"", backA: "4:1 (max)", backB: "", foreMax: 4, backMax: 4 },
      { facility: "Rural local road, V <= 45 mph", foreslope: "3:1 (max)", ditch: "Des. 4 ft, Min. \"V\"", backA: "3:1 (max)", backB: "", foreMax: 3, backMax: 3 },
      { facility: "Urban local street", foreslope: "3:1 (max)", ditch: "Des. 4 ft, Min. \"V\"", backA: "3:1 (max)", backB: "", foreMax: 3, backMax: 3 }
    ],
    notes: [
      "(1) See Sections 49-2.0 and 49-3.0 to determine lateral extent of the foreslope in a ditch section.",
      "(2) For a rock cut, see Section 45-8.0. Figure value may be exceeded where drainage capacity or other considerations warrant.",
      "(3) Value is for earth cut and represents maximum slope. See Section 45-8.0 for typical rock-cut sections."
    ]
  },
  cutCurbed: {
    figure: "45-3D",
    title: "Typical Cut Slopes (Curbed Facility)",
    rows: [
      { facility: "Freeways", shelf: "N/A", backslope: "N/A" },
      { facility: "Rural facilities", shelf: "11 ft (1)", backslope: "4:1 maximum", backMax: 4 },
      { facility: "Urban arterials, urban collectors", shelf: "11 ft (1)", backslope: "4:1", backMax: 4 },
      { facility: "Urban local streets", shelf: "11 ft (1)", backslope: "3:1", backMax: 3 }
    ],
    notes: [
      "(1) Includes a 1-ft appurtenance strip behind the sidewalk. If no sidewalk is present or anticipated, this dimension may be reduced to 5 ft.",
      "(2) Drainage facilities may be required between shelf and backslope.",
      "Shelf slope 12:1; 50:1 where sidewalk exists, is to be constructed, or is anticipated (may be sloped away from curb)."
    ]
  },
  twoToOne: {
    section: "45-3.03",
    text: [
      "A slope of 2:1 or steeper should be avoided on an INDOT project unless absolutely necessary.",
      "4R project: Design Exception Level Two documentation is required where a 2:1 sideslope is proposed (prepare at grade-review stage).",
      "3R project: consider 3:1 (Section 55-4.05); if steeper is required, consider 2.5:1 before 2:1.",
      "Rock cut: use 3:1 instead of 2:1 unless good slope stability or sound rock has been verified.",
      "Rock cut backslope should not exceed 1:6 (Section 45-3.02(02), as printed)."
    ]
  },
  ditchGrade: { section: "45-3.02(03), 45-3.02(05)", sod: 1.0, paved: 3.0, minUnpaved: 0.5, minRestricted: 0.3 },

  // Chapter 49 slope classification used in clear-zone work
  recoverable: {
    section: "49-2.03(01), 49-2.02(02)",
    text: "Fill slopes 4:1 or flatter may be slope-averaged within the clear zone. A fill slope steeper than 4:1 is non-recoverable and is not included in slope averaging; if the clear zone extends onto it, provide a clear runout area at the toe equal to the portion of the clear zone on the slope or 12 ft, whichever is greater (Figure 49-2F)."
  },

  // Chapter 305 traveled-way widening statement
  widening: {
    section: "305-3.06",
    text: "The Green Book has established calculated and design values for traveled-way widening on open-highway curves for a two-lane highway. For these conditions INDOT uses full-depth shoulders on both sides of the curve in lieu of widening the traveled way. Full-depth shoulders of the calculated width should be available from the beginning of the superelevation transition before the curve to the end of the transition beyond the curve. Calculated widening of two feet or less can be disregarded. See Green Book Section 3.3.10.",
    disregardFt: 2
  }
};
