/*
 * IDM geometric design criteria tables for:
 *   Chapter 54 - Geometric Design of Existing Freeway (3R) or (4R) Partial Reconstruction
 *   Chapter 56 - Partial 3R Projects
 * Source: INDOT 2013 Indiana Design Manual chapter PDFs in references/idm.
 * Every value was transcribed visually from the rendered PDF pages (not from text
 * extraction). Nothing was filled from AASHTO or memory.
 *
 * Conventions
 * - pdfPages: 1-based PDF page numbers (these equal the printed page numbers).
 * - title: the title printed under the figure (the List of Figures wording, where it
 *   differs, is kept in listTitle).
 * - element: row label with the printed hierarchy joined by ": " (labelParts keeps
 *   the separate printed parts). The leading "*" (controlling criterion) and footnote
 *   markers such as "(4)" or superscripts are removed from the label and carried in
 *   controlling / notes instead. Cell text in values is kept as printed, including
 *   footnote markers such as "20 Years (1)".
 * - Cells printed on two lines (e.g. "D = 28 ft" over "M = 26 ft") are joined with "; ".
 * - Spanning cells are repeated in each covered column.
 * - numeric: widths in ft. A single printed value is given as des = min = value.
 *   numericByKey holds a second width quantity printed in the same cell
 *   (e.g. usable shoulder width in the right-shoulder row of Figure 54-2A).
 *   byLanes is used where the printed value depends on lanes per direction.
 * - Figures 56-4A to 56-4D are printed with conditions as rows and elements as
 *   columns; they are transposed here (transposed: true) so that columns are the
 *   conditions (AADT range, divided/undivided, urban area type) and rows the elements.
 * - conditions.adtMin is inclusive and conditions.adtMax is exclusive, as printed
 *   ("3,000 <= AADT < 5,000").
 */
window.IDM = window.IDM || {};
(function () {
  // 54-2A has columns c1 = Rural, c2..c4 = Urban at 55/60/70 mph.
  function ru(rural, urban) { return { c1: rural, c2: urban, c3: urban, c4: urban }; }
  function all4(v) { return ru(v, v); }
  function n(des, min) { return { des: des, min: min }; }
  function nAll4(des, min) { return { c1: n(des, min), c2: n(des, min), c3: n(des, min), c4: n(des, min) }; }

  IDM.geom3RFwyPartial = {
    sources: [
      {
        chapter: "54",
        title: "Geometric Design of Existing Freeway (3R) or (4R) Partial Reconstruction",
        edition: "2013 Indiana Design Manual",
        revision: "Design Memo 13-01, Jan. 2013 (Figure 54-6B(70)); Design Memo 23-06, Jun. 2023 (54-3.03(01))",
        file: "Chapter_54_-_Geometric_Design_of_Existing_Freeway_3R_or_4R_Partial_Reconstruction.pdf"
      },
      {
        chapter: "56",
        title: "Partial 3R Projects",
        edition: "2013 Indiana Design Manual",
        revision: "Design Memo 14-03, Feb. 2014 (56-2.0, 56-4.06(06), 56-4.09(01), 56-4.09(02), Figure 56-4F); Design Memo 23-06, Jun. 2023 (56-4.04(03))",
        file: "Chapter_56_-_Partial_3R_Projects.pdf"
      }
    ],

    figures: [
      /* ------------------------------------------------------------------ */
      {
        id: "54-2A",
        chapter: "54",
        title: "GEOMETRIC DESIGN CRITERIA FOR FREEWAY (3R or Partial 4R Project)",
        listTitle: "Geometric Design Criteria for Freeways (3R / Partial 4R Projects)",
        revision: "",
        pdfPages: [20, 21, 22, 23],
        facility: "Freeway 3R / Partial 4R (Rural, Urban)",
        scope: "3R freeway",
        scopes: ["3R freeway", "partial 4R freeway"],
        columnNote: "The printed column headings are Design Element | Manual Section | Rural | Urban. " +
          "On the second page (Alignment Elements) the Urban column is split by the Design Speed row into 55 mph, 60 mph and 70 mph; " +
          "the Rural column is 70 mph. All other Urban cells span the three urban sub-columns and are repeated in c2, c3 and c4.",
        columns: [
          { key: "c1", label: "Rural", subLabel: "70 mph", conditions: { area: "rural", designSpeed: [70, 70] } },
          { key: "c2", label: "Urban", subLabel: "55 mph", conditions: { area: "urban", designSpeed: [55, 55] } },
          { key: "c3", label: "Urban", subLabel: "60 mph", conditions: { area: "urban", designSpeed: [60, 60] } },
          { key: "c4", label: "Urban", subLabel: "70 mph", conditions: { area: "urban", designSpeed: [70, 70] } }
        ],
        rows: [
          // ---- Design Controls (page 20)
          { group: "Design Controls", element: "Design Forecast Year", labelParts: ["Design Forecast Year"], section: "54-3.01", controlling: false,
            values: all4("20 Years (1)"), notes: ["1"] },
          { group: "Design Controls", element: "Design Speed (mph)", labelParts: ["Design Speed (mph)"], section: "54-3.01", controlling: true,
            values: ru("Min: Original Design Speed", "Min: Original Design Speed (2)"), notes: ["2"] },
          { group: "Design Controls", element: "Access Control", labelParts: ["Access Control"], section: "40-5.0", controlling: false,
            values: all4("Full Control") },
          { group: "Design Controls", element: "Level of Service", labelParts: ["Level of Service"], section: "40-2.04", controlling: false,
            values: ru("Desirable: B; Minimum: C", "Desirable: B; Minimum: D") },

          // ---- Cross Section Elements (page 20)
          { group: "Cross Section Elements", element: "Travel Lane: Width", labelParts: ["Travel Lane", "Width"], section: "54-3.03", controlling: true,
            key: "laneWidth", values: all4("12 ft"), numeric: nAll4(12, 12) },
          { group: "Cross Section Elements", element: "Travel Lane: Surface Type", labelParts: ["Travel Lane", "Surface Type"], section: "Chp. 602", controlling: false,
            values: all4("Asphalt / Concrete"), notes: ["3"] },
          { group: "Cross Section Elements", element: "Shoulder: Right Width", labelParts: ["Shoulder", "Right Width"], section: "54-3.03", controlling: true,
            key: "shoulderRightPaved", values: all4("Usable: 11 ft; Paved: 10 ft"), numeric: nAll4(10, 10),
            numericByKey: { shoulderRightUsable: nAll4(11, 11) }, notes: ["4"] },
          { group: "Cross Section Elements", element: "Shoulder: Left Width", labelParts: ["Shoulder", "Left Width"], section: "54-3.03", controlling: true,
            key: "shoulderLeftPaved", values: all4("2 Lanes: 4 ft Paved. 3 Lanes: 10 ft Paved"),
            numeric: {
              c1: { byLanes: { "2": n(4, 4), "3": n(10, 10) } },
              c2: { byLanes: { "2": n(4, 4), "3": n(10, 10) } },
              c3: { byLanes: { "2": n(4, 4), "3": n(10, 10) } },
              c4: { byLanes: { "2": n(4, 4), "3": n(10, 10) } }
            },
            numericNote: "byLanes keys are lanes per direction as printed (\"2 Lanes\", \"3 Lanes\"); footnote 5b refers to 3 or more lanes in one direction.",
            notes: ["5"] },
          { group: "Cross Section Elements", element: "Shoulder: Surface Type", labelParts: ["Shoulder", "Surface Type"], section: "Chp. 602", controlling: false,
            values: all4("Asphalt / Concrete"), notes: ["3"] },
          { group: "Cross Section Elements", element: "Cross Slope: Travel Lane", labelParts: ["Cross Slope", "Travel Lane"], section: "45-1.01", controlling: true,
            key: "travelLaneCrossSlope", values: all4("2%"), notes: ["6"] },
          { group: "Cross Section Elements", element: "Cross Slope: Shoulder", labelParts: ["Cross Slope", "Shoulder"], section: "45-1.02", controlling: false,
            key: "shoulderCrossSlope", values: all4("Paved Width ≤ 4 ft: 2%; Paved Width > 4 ft: 4%"), notes: ["6A"] },
          { group: "Cross Section Elements", element: "Auxiliary Lane: Lane Width", labelParts: ["Auxiliary Lane", "Lane Width"], section: "45-1.03", controlling: true,
            key: "auxLaneWidth", values: all4("12 ft"), numeric: nAll4(12, 12) },
          { group: "Cross Section Elements", element: "Auxiliary Lane: Shoulder Width", labelParts: ["Auxiliary Lane", "Shoulder Width"], section: "45-1.03", controlling: true,
            values: all4("Left or Right: Des: 12 ft; Min: 6 ft") },
          { group: "Cross Section Elements", element: "Median Width: Depressed", labelParts: ["Median Width", "Depressed"], section: "54-3.03", controlling: false,
            values: all4("Existing") },
          { group: "Cross Section Elements", element: "Median Width: Flush (CMB)", labelParts: ["Median Width", "Flush (CMB)"], section: "54-3.03", controlling: false,
            values: all4("Existing") },
          { group: "Cross Section Elements", element: "Clear Zone", labelParts: ["Clear Zone"], section: "49-2.0", controlling: false,
            key: "clearZone", values: all4("(8)"), notes: ["8"] },
          { group: "Cross Section Elements", element: "Side Slopes: Cut: Foreslope", labelParts: ["Side Slopes", "Cut", "Foreslope"], section: "54-3.03", controlling: false,
            key: "foreslope", values: all4("2:1 or Flatter"), notes: ["9"] },
          { group: "Cross Section Elements", element: "Side Slopes: Cut: Ditch Width", labelParts: ["Side Slopes", "Cut", "Ditch Width"], section: "54-3.03", controlling: false,
            values: all4("Existing"), notes: ["9"] },
          { group: "Cross Section Elements", element: "Side Slopes: Cut: Backslope", labelParts: ["Side Slopes", "Cut", "Backslope"], section: "54-3.03", controlling: false,
            key: "backslope", values: all4("2:1 or Flatter"), notes: ["9"] },
          { group: "Cross Section Elements", element: "Side Slopes: Fill", labelParts: ["Side Slopes", "Fill"], section: "45-3.0", controlling: false,
            key: "fillSlope", values: all4("2:1 or Flatter"), notes: ["9"] },
          { group: "Cross Section Elements", element: "Median Slopes", labelParts: ["Median Slopes"], section: "45-3.03", controlling: false,
            values: all4("Desirable: 8:1; Maximum: 4:1") },

          // ---- Bridges (page 20)
          { group: "Bridges", element: "New or Reconstructed Bridge: Structural Capacity", labelParts: ["New or Reconstructed Bridge", "Structural Capacity"], section: "Chp. 403", controlling: true,
            values: all4("HL-93 (10)"), notes: ["10"] },
          { group: "Bridges", element: "New or Reconstructed Bridge: Clear-Roadway Width", labelParts: ["New or Reconstructed Bridge", "Clear-Roadway Width"], section: "54-5.0", controlling: false,
            values: all4("Full Paved Approach Width"), notes: ["11"] },
          { group: "Bridges", element: "Existing Bridge to Remain in Place: Structural Capacity", labelParts: ["Existing Bridge to Remain in Place", "Structural Capacity"], section: "Chp. 412", controlling: true,
            values: all4("HS-20") },
          { group: "Bridges", element: "Existing Bridge to Remain in Place: Clear-Roadway Width", labelParts: ["Existing Bridge to Remain in Place", "Clear-Roadway Width"], section: "54-5.0", controlling: false,
            key: "bridgeClearRoadwayWidth", values: all4("Travelway Plus 10 ft Rt. & 4 ft Lt. Shoulders (7)"), notes: ["7"] },
          { group: "Bridges", element: "Vertical Clearance (Freeway Under): New or Replaced Overpassing Bridge", labelParts: ["Vertical Clearance (Freeway Under)", "New or Replaced Overpassing Bridge"], section: "54-5.0", controlling: true,
            values: ru("16.5 ft", "16.5 ft (12c)"), notes: ["12a", "12b", "12c"] },
          { group: "Bridges", element: "Vertical Clearance (Freeway Under): Existing Overpassing Bridge", labelParts: ["Vertical Clearance (Freeway Under)", "Existing Overpassing Bridge"], section: "54-5.0", controlling: true,
            key: "verticalClearance", values: ru("16 ft", "16 ft (12c)"), notes: ["12a", "12c"] },
          { group: "Bridges", element: "Vertical Clearance (Freeway Under): Sign Truss / Pedestrian Bridge", labelParts: ["Vertical Clearance (Freeway Under)", "Sign Truss / Pedestrian Bridge"], section: "54-5.0", controlling: true,
            values: all4("New: 17.5 ft; Existing: 17 ft"), notes: ["12a"] },
          { group: "Bridges", element: "Vertical Clearance (Freeway over Railroad)", labelParts: ["Vertical Clearance (Freeway over Railroad)"], section: "Chp. 402", controlling: false,
            values: all4("23 ft"), notes: ["13"] },

          // ---- Alignment Elements (page 21)
          { group: "Alignment Elements", element: "Design Speed", labelParts: ["Design Speed"], section: "", controlling: false,
            key: "designSpeed", values: { c1: "70 mph", c2: "55 mph", c3: "60 mph", c4: "70 mph" } },
          { group: "Alignment Elements", element: "Stopping Sight Distance", labelParts: ["Stopping Sight Distance"], section: "42-1.0", controlling: true,
            key: "ssd", values: { c1: "730 ft", c2: "530 ft", c3: "610 ft", c4: "730 ft" } },
          { group: "Alignment Elements", element: "Minimum Radius", labelParts: ["Minimum Radius"], section: "Ch 305", controlling: true,
            key: "minRadius", values: all4("Existing (14)"), notes: ["14"] },
          { group: "Alignment Elements", element: "Superelevation Rate", labelParts: ["Superelevation Rate"], section: "Ch 305", controlling: true,
            key: "emax", values: all4("emax = 6% or 8%"), notes: ["15"] },
          { group: "Alignment Elements", element: "Horizontal Sight Distance", labelParts: ["Horizontal Sight Distance"], section: "Ch 305", controlling: true,
            values: all4("See Section 305-5.0") },
          { group: "Alignment Elements", element: "Vertical Curvature (K-value): Crest", labelParts: ["Vertical Curvature (K-value)", "Crest"], section: "44-3.0", controlling: true,
            key: "crestK", values: all4("Existing (14)"), notes: ["14"] },
          { group: "Alignment Elements", element: "Vertical Curvature (K-value): Sag", labelParts: ["Vertical Curvature (K-value)", "Sag"], section: "44-3.0", controlling: true,
            key: "sagK", values: all4("Existing (14)"), notes: ["14"] },
          { group: "Alignment Elements", element: "Maximum Grade: Level", labelParts: ["Maximum Grade", "Level"], section: "54-3.02", controlling: true,
            values: all4("Existing (14)"), notes: ["14"] },
          { group: "Alignment Elements", element: "Maximum Grade: Rolling", labelParts: ["Maximum Grade", "Rolling"], section: "54-3.02", controlling: true,
            values: all4("Existing (14)"), notes: ["14"] },
          { group: "Alignment Elements", element: "Minimum Grade", labelParts: ["Minimum Grade"], section: "44-1.03", controlling: false,
            values: ru("Desirable: 0.5%; Minimum: 0.0%", "Desirable: 0.5%   Minimum: 0.0%") },

          // ---- Interchange Elements (page 21)
          { group: "Interchange Elements", element: "Traveled Way: Width", labelParts: ["Traveled Way", "Width"], section: "48-5.02", controlling: false,
            values: all4("16 ft") },
          { group: "Interchange Elements", element: "Traveled Way: Surface Type", labelParts: ["Traveled Way", "Surface Type"], section: "Chp. 52", controlling: false,
            values: all4("Asphalt / Concrete"), notes: ["3"] },
          { group: "Interchange Elements", element: "Shoulder: Right Width", labelParts: ["Shoulder", "Right Width"], section: "48-5.02", controlling: false,
            values: all4("Usable: 11 ft. Paved: Des: 8 ft; Min: 7.5 ft") },
          { group: "Interchange Elements", element: "Shoulder: Left Width", labelParts: ["Shoulder", "Left Width"], section: "48-5.02", controlling: false,
            values: all4("Usable: 7 ft. Paved: Des: 4 ft; Min: 2.5 ft") },
          { group: "Interchange Elements", element: "Shoulder: Surface Type", labelParts: ["Shoulder", "Surface Type"], section: "Chp. 52", controlling: false,
            values: all4("Asphalt / Concrete"), notes: ["16"] },
          { group: "Interchange Elements", element: "Cross Slope: Traveled Way", labelParts: ["Cross Slope", "Traveled Way"], section: "48-5.02", controlling: false,
            values: all4("2%") },
          { group: "Interchange Elements", element: "Cross Slope: Shoulder", labelParts: ["Cross Slope", "Shoulder"], section: "48-5.02", controlling: false,
            values: all4("Right: 4%; Left: 2%"), notes: ["17"] },
          { group: "Interchange Elements", element: "Superelevation", labelParts: ["Superelevation"], section: "48-5.03", controlling: false,
            values: ru("emax = 8%", "emax = 4%, 6%, or 8% (18)"), notes: ["18"] },
          { group: "Interchange Elements", element: "Maximum Grade: Upgrade", labelParts: ["Maximum Grade", "Upgrade"], section: "48-5.04", controlling: false,
            values: all4("3% - 5%") },
          { group: "Interchange Elements", element: "Maximum Grade: Downgrade", labelParts: ["Maximum Grade", "Downgrade"], section: "48-5.04", controlling: false,
            values: all4("4% - 6%") }
        ],
        footnotes: {
          "*": "Controlling design criterion. See Section 40-8.0 for low speed and high speed applications).",
          "* (Continued page)": "Controlling design criterion (see Section 40-8.0).",
          "1": "Design Forecast Year. A resurfaced pavement has a 10-year design life.",
          "2": "Design Speed. The existing posted speed limit may be used in restricted urban conditions. The design speed should be 50 mph or higher on an Interstate highway.",
          "3": "Surface Type. The pavement type selection will be determined by the Office of Pavement Engineering.",
          "4": "Shoulder Width, Right. The following will apply. a. The shoulder is paved to the face of guardrail. The desirable guardrail offset is 2 ft from the effective usable-shoulder width. See Section 49-5.0 for more information. b. If the number of trucks exceeds 250 DDHV, a 12-ft right shoulder should be considered. If the 12-ft shoulder is used, the usable-shoulder width will be 13 ft. c. Usable-shoulder width is defined as the distance from the edge of the travel lane to the shoulder break point.",
          "5": "Shoulder Width, Left. The following will apply. a. The effective usable-shoulder width is equal to the paved-shoulder width. The desirable guardrail offset is 2 ft from the effective usable-shoulder width. See Section 49-5.0 for more information. b. Where there are 3 or more lanes in one direction, a 12-ft left shoulder should be provided if practical. c. Usable-shoulder width is defined as the distance from the edge of the travel lane to the shoulder break point. Usable width is 1 ft wider than the paved-shoulder width.",
          "6": "Cross Slope, Travel Lane. Cross slopes of 1.5% are acceptable on an existing bridge to remain in place.",
          "6A": "Cross Slope, Shoulder. See Figure 45-1A(1) or Figure 45-1A(2) for more-specific information.",
          "7": "Shoulders for Bridge to Remain in Place. For such a bridge of length > 200 ft, the minimum shoulder width on the right and the left may be 3.5 ft. This requirement does not apply to a bridge deck replacement.",
          "8": "Clear Zone. The clear zone will vary according to design speed, traffic volume, side slopes and horizontal curvature. See Section 49-2.0.",
          "9": "Side Slopes. Retention of an existing side slope of 2:1 or flatter most often will be acceptable. However, an existing fill slope of steeper than 4:1 should be evaluated for flattening. Section 54-3.03 provides additional information for side-slope criteria for a project with freeway widening (i.e., lane or shoulder widening).",
          "10": "Structural Capacity (New or Reconstructed Bridge). HS-25 loading with Alternate Military Loading should be applied for each project with notice to proceed with design beginning September 1, 2004, through December 31, 2005. Other loadings will apply to the Toll Road or an Extra Heavy Duty Highway. See Chapter 403 for more information.",
          "11": "Width (New or Reconstructed Bridge). See Sections 45-4.01 and 402-6.02 for more information on bridge width.",
          "12": "Vertical Clearance (Freeway Under). The following will apply.",
          "12a": "Vertical clearance applies from usable edge to usable edge of shoulders.",
          "12b": "Table value includes an additional 0.5 ft allowance for future overlays.",
          "12c": "A 14-ft clearance may be used in an urban area where an alternative freeway facility with a 16-ft clearance is available; see Section 54-3.02.",
          "13": "Vertical Clearance (Freeway Over Railroad). See Section 402-6.02 for additional information on railroad clearance under a highway.",
          "14": "Existing Conditions. For these design elements, the existing conditions are satisfactory unless accident history dictates that a modification is necessary.",
          "15": "Superelevation Rate. The designer should review Sections 305-3.0 and 305-4.0 to determine if improvements are necessary.",
          "16": "Shoulders (Surface Type). The pavement-type selection will be determined by the Office of Pavement Engineering. For a ramp with curve radii less than or equal to 350 ft, the shoulders will have the same pavement design as the travelway.",
          "17": "Cross Slope (Shoulders). For a ramp with curve radii less than or equal to 350 ft, the shoulder cross slope will be the same as the travelway.",
          "18": "Superelevation. The maximum superelevation rate will depend on site conditions."
        },
        keyNotes: "Keys assigned where a row is ambiguous: bridgeClearRoadwayWidth = Existing Bridge to Remain in Place row; verticalClearance = Existing Overpassing Bridge row; " +
          "designSpeed = numeric Design Speed row on the Alignment Elements page (the Design Controls row 'Design Speed (mph)' is unkeyed). " +
          "Maximum Grade (Level / Rolling), Median Width (Depressed / Flush) and all Interchange Elements rows are left unkeyed."
      },

      /* ------------------------------------------------------------------ */
      {
        id: "54-3A",
        chapter: "54",
        title: "LENGTH FOR DECELERATION",
        listTitle: "Lengths for Deceleration",
        revision: "",
        pdfPages: [24],
        facility: "Freeway 3R / Partial 4R, Exit Deceleration Length",
        scope: "3R freeway",
        scopes: ["3R freeway", "partial 4R freeway"],
        tableNote: "Row = Highway Design Speed (mph). Column 'va' = Average Running Speed, Va (mph). Columns c1-c8 = L = Deceleration Length (ft) For Design Speed of First Governing Geometric Control (mph), with the corresponding Average Running Speed, V'a (mph) as a second header row. Usage per Section 54-3.03(06): may be used to determine deceleration distance for a freeway exit instead of INDOT's standard 1000-ft length.",
        columns: [
          { key: "va", label: "Average Running Speed, Va (mph)" },
          { key: "c1", label: "L = Deceleration Length (ft): For Design Speed of First Governing Geometric Control (mph) Stop / For Average Running Speed, V'a (mph) 0", conditions: { controlDesignSpeed: "Stop", controlRunningSpeed: 0 } },
          { key: "c2", label: "L = Deceleration Length (ft): For Design Speed of First Governing Geometric Control (mph) 15 / For Average Running Speed, V'a (mph) 10", conditions: { controlDesignSpeed: 15, controlRunningSpeed: 10 } },
          { key: "c3", label: "L = Deceleration Length (ft): For Design Speed of First Governing Geometric Control (mph) 20 / For Average Running Speed, V'a (mph) 17", conditions: { controlDesignSpeed: 20, controlRunningSpeed: 17 } },
          { key: "c4", label: "L = Deceleration Length (ft): For Design Speed of First Governing Geometric Control (mph) 25 / For Average Running Speed, V'a (mph) 22", conditions: { controlDesignSpeed: 25, controlRunningSpeed: 22 } },
          { key: "c5", label: "L = Deceleration Length (ft): For Design Speed of First Governing Geometric Control (mph) 30 / For Average Running Speed, V'a (mph) 26", conditions: { controlDesignSpeed: 30, controlRunningSpeed: 26 } },
          { key: "c6", label: "L = Deceleration Length (ft): For Design Speed of First Governing Geometric Control (mph) 40 / For Average Running Speed, V'a (mph) 32", conditions: { controlDesignSpeed: 40, controlRunningSpeed: 32 } },
          { key: "c7", label: "L = Deceleration Length (ft): For Design Speed of First Governing Geometric Control (mph) 45 / For Average Running Speed, V'a (mph) 39", conditions: { controlDesignSpeed: 45, controlRunningSpeed: 39 } },
          { key: "c8", label: "L = Deceleration Length (ft): For Design Speed of First Governing Geometric Control (mph) 50 / For Average Running Speed, V'a (mph) 43", conditions: { controlDesignSpeed: 50, controlRunningSpeed: 43 } }
        ],
        rowLabel: "Highway Design Speed (mph)",
        rows: [
          { group: "Highway Design Speed (mph)", element: "30", highwayDesignSpeed: 30, values: { va: "29", c1: "250", c2: "230", c3: "200", c4: "150", c5: "--", c6: "--", c7: "--", c8: "--" }, notes: ["1"] },
          { group: "Highway Design Speed (mph)", element: "40", highwayDesignSpeed: 40, values: { va: "34", c1: "320", c2: "300", c3: "270", c4: "220", c5: "180", c6: "--", c7: "--", c8: "--" }, notes: ["1"] },
          { group: "Highway Design Speed (mph)", element: "45", highwayDesignSpeed: 45, values: { va: "39", c1: "360", c2: "350", c3: "310", c4: "280", c5: "230", c6: "180", c7: "--", c8: "--" }, notes: ["1"] },
          { group: "Highway Design Speed (mph)", element: "50", highwayDesignSpeed: 50, values: { va: "43", c1: "430", c2: "410", c3: "380", c4: "360", c5: "300", c6: "270", c7: "180", c8: "--" }, notes: ["1"] },
          { group: "Highway Design Speed (mph)", element: "55", highwayDesignSpeed: 55, values: { va: "48", c1: "480", c2: "460", c3: "450", c4: "400", c5: "360", c6: "330", c7: "250", c8: "200" }, notes: ["1"] },
          { group: "Highway Design Speed (mph)", element: "60", highwayDesignSpeed: 60, values: { va: "53", c1: "560", c2: "550", c3: "510", c4: "480", c5: "450", c6: "400", c7: "330", c8: "280" }, notes: ["1"] },
          { group: "Highway Design Speed (mph)", element: "70", highwayDesignSpeed: 70, values: { va: "57", c1: "590", c2: "590", c3: "560", c4: "530", c5: "500", c6: "460", c7: "400", c8: "350" }, notes: ["1"] }
        ],
        footnotes: {
          "1": "Value is for a grade of 3% or less. See Figure 54-3B for steeper upgrades or downgrades.",
          "2": "The deceleration lengths are calculated from the distance needed for a passenger car to decelerate from the highway mainline speed to the speed of the first governing geometric control on the exit ramp. The basic assumptions within the AASHTO deceleration model are as follows. a. The vehicle is initially traveling at the average running speed of the highway mainline. b. The vehicle decelerates in gear for 3s of travel time. c. The motorist brakes the vehicle at a comfortable rate until it reaches the average running speed of the first governing geometric control. The AASHTO deceleration model is discussed in detail in A Policy on Geometric Design of Rural Highways, 1965, pp. 348-351."
        }
      },

      /* ------------------------------------------------------------------ */
      {
        id: "54-3B",
        chapter: "54",
        title: "GRADE ADJUSTMENT FOR DECELERATION",
        listTitle: "Grade Adjustments for Deceleration",
        revision: "",
        pdfPages: [25],
        facility: "Freeway 3R / Partial 4R, Deceleration Grade Adjustment",
        scope: "3R freeway",
        scopes: ["3R freeway", "partial 4R freeway"],
        tableNote: "Values are the Ratio of Deceleration Length on Grade to Length on Level. The column headings are printed as shown (they describe the grade, although they read 'Ratio'). Example printed on the figure: 70 mph highway, 45 mph first exit curve, 5% downgrade: L = (400 ft)(1.35) = 540 ft.",
        columns: [
          { key: "c1", label: "Ratio of Deceleration Length on Grade to Length on Level: < 3%", conditions: { gradeMin: null, gradeMax: 3 } },
          { key: "c2", label: "Ratio of Deceleration Length on Grade to Length on Level: 3% ≤ Ratio < 4%", conditions: { gradeMin: 3, gradeMax: 4 } },
          { key: "c3", label: "Ratio of Deceleration Length on Grade to Length on Level: 4% ≤ Ratio < 6%", conditions: { gradeMin: 4, gradeMax: 6 } },
          { key: "c4", label: "Ratio of Deceleration Length on Grade to Length on Level: ≥ 6%", conditions: { gradeMin: 6, gradeMax: null } }
        ],
        conditionsNote: "gradeMin inclusive, gradeMax exclusive (percent), as printed.",
        rows: [
          { group: "Direction of Grade", element: "Upgrade", values: { c1: "1.00", c2: "0.90", c3: "0.80", c4: "0.70" }, notes: ["*"] },
          { group: "Direction of Grade", element: "Downgrade", values: { c1: "1.00", c2: "1.20", c3: "1.35", c4: "1.50" } }
        ],
        footnotes: {
          "*": "Upgrade adjustment is only used in a restricted location.",
          "1": "Table applies to each highway design speed.",
          "2": "The grade in the table is the average grade over the distance used for measuring the length of deceleration."
        }
      },

      /* ------------------------------------------------------------------ */
      {
        id: "56-4A",
        chapter: "56",
        title: "PAVEMENT WIDTH FOR RURAL 2-LANE ROAD WITH SHOULDERS",
        listTitle: "Pavement Widths for Rural Two-Lane Roads with Shoulders",
        revision: "",
        pdfPages: [25],
        facility: "Partial 3R, Rural 2-Lane with Shoulders",
        scope: "partial 3R",
        transposed: true,
        legend: { D: "Desirable", M: "Minimum" },
        columns: [
          { key: "c1", label: "AADT ≥ 5,000", conditions: { area: "rural", lanes: 2, adtMin: 5000, adtMax: null } },
          { key: "c2", label: "3,000 ≤ AADT < 5,000", conditions: { area: "rural", lanes: 2, adtMin: 3000, adtMax: 5000 } },
          { key: "c3", label: "400 ≤ AADT < 3,000", conditions: { area: "rural", lanes: 2, adtMin: 400, adtMax: 3000 } },
          { key: "c4", label: "AADT < 400", conditions: { area: "rural", lanes: 2, adtMin: 0, adtMax: 400 } }
        ],
        rows: [
          { group: "", element: "Total Paved Width", labelParts: ["Total Paved Width"], section: "56-4.03",
            values: { c1: "D = 28 ft; M = 26 ft", c2: "D = 28 ft; M = 26 ft", c3: "D = 28 ft; M = 24 ft", c4: "D = 26 ft; M = 22 ft" },
            notes: ["1", "2", "3"] },
          { group: "", element: "Travel-Lane Width", labelParts: ["Travel-Lane Width"], section: "56-4.03",
            key: "laneWidth",
            values: { c1: "D = 12 ft; M = 12 ft", c2: "D= 12 ft; M = 12 ft", c3: "D = 12 ft; M = 11 ft", c4: "D = 11 ft; M = 10 ft" },
            numeric: { c1: n(12, 12), c2: n(12, 12), c3: n(12, 11), c4: n(11, 10) },
            notes: ["2"] },
          { group: "", element: "Paved-Shoulder Width", labelParts: ["Paved-Shoulder Width"], section: "56-4.03",
            key: "shoulderRightPaved",
            keyNote: "Two-lane road: the printed paved-shoulder width applies to each (outside) shoulder.",
            values: { c1: "D= 6 ft; M = 1 ft", c2: "D = 4 ft; M = 1 ft", c3: "D= 2 ft; M = 1 ft", c4: "D= 2 ft; M = 1 ft" },
            numeric: { c1: n(6, 1), c2: n(4, 1), c3: n(2, 1), c4: n(2, 1) } },
          { group: "", element: "Sealed-Agg. Shld. Width", labelParts: ["Sealed-Agg. Shld. Width"], section: "56-4.03",
            values: { c1: "N / A", c2: "D = 3 ft; M = 2 ft", c3: "D = 3 ft; M = 2 ft", c4: "D = 2 ft; M = 1 ft" } }
        ],
        footnotes: {
          "D/M": "D =Desirable, M = Minimum.",
          "1": "Includes widths of travel lanes and paved shoulders only.",
          "2": "Should be widened on a curve where practical as described in Section 305-3.06",
          "3": "For a road with a TWLTL, the total width will be increased by the applicable width of a TWLTL."
        }
      },

      /* ------------------------------------------------------------------ */
      {
        id: "56-4B",
        chapter: "56",
        title: "PAVEMENT WIDTH FOR RURAL ROAD OF 4 OR MORE LANES WITH SHOULDERS",
        listTitle: "Pavement Widths for Rural Multi-Lane Roads with Shoulders",
        revision: "",
        pdfPages: [26],
        facility: "Partial 3R, Rural 4+ Lanes with Shoulders",
        scope: "partial 3R",
        transposed: true,
        legend: { D: "Desirable", M: "Minimum" },
        columns: [
          { key: "c1", label: "Divided", conditions: { area: "rural", lanesMin: 4, median: "divided" } },
          { key: "c2", label: "Undivided", conditions: { area: "rural", lanesMin: 4, median: "undivided" } }
        ],
        rows: [
          { group: "", element: "4 Lanes, Total Paved Width", labelParts: ["4 Lanes, Total Paved Width"], section: "56-4.03",
            values: { c1: "D = 36 ft; M = 29 ft", c2: "D = 32 ft; M = 26 ft" }, notes: ["1", "2"] },
          { group: "", element: "6 Lanes, Total Paved Width", labelParts: ["6 Lanes, Total Paved Width"], section: "56-4.03",
            values: { c1: "D = 48 ft; M = 40 ft", c2: "D = 44 ft; M = 37 ft" }, notes: ["1"] },
          { group: "", element: "Travel-Lane Width", labelParts: ["Travel-Lane Width"], section: "56-4.03",
            key: "laneWidth",
            values: { c1: "D = 12 ft; M = 11 ft", c2: "D = 12 ft; M = 11 ft" },
            numeric: { c1: n(12, 11), c2: n(12, 11) } },
          { group: "", element: "Outside Paved-Shoulder Width", labelParts: ["Outside Paved-Shoulder Width"], section: "56-4.03",
            key: "shoulderRightPaved",
            values: { c1: "D = 8 ft; M = 4 ft", c2: "D = 8 ft; M = 4 ft" },
            numeric: { c1: n(8, 4), c2: n(8, 4) } },
          { group: "", element: "Median Paved-Shoulder Width", labelParts: ["Median Paved-Shoulder Width"], section: "56-4.03",
            key: "shoulderLeftPaved",
            values: { c1: "D = 4 ft; M = 3 ft", c2: "N / A" },
            numeric: { c1: n(4, 3) } }
        ],
        footnotes: {
          "D/M": "D =Desirable, M = Minimum.",
          "1": "Includes widths of travel lanes and paved shoulders for one direction of travel on a divided road.",
          "2": "For a road with a TWLTL, the total width will be increased by the applicable width of a TWLTL."
        }
      },

      /* ------------------------------------------------------------------ */
      {
        id: "56-4C",
        chapter: "56",
        title: "PAVEMENT WIDTH FOR URBAN 2-LANE ROAD WITH CURBS",
        listTitle: "Pavement Widths for Urban Two-Lane Roads with Curbs",
        revision: "",
        pdfPages: [27],
        facility: "Partial 3R, Urban 2-Lane with Curbs",
        scope: "partial 3R",
        transposed: true,
        legend: { D: "Desirable", M: "Minimum", TWLTL: "two way left turn lane" },
        columns: [
          { key: "c1", label: "Suburban", notes: ["3"], conditions: { area: "urban", urbanType: "suburban", lanes: 2, curbed: true } },
          { key: "c2", label: "Intermediate", notes: ["3"], conditions: { area: "urban", urbanType: "intermediate", lanes: 2, curbed: true } },
          { key: "c3", label: "Built-Up", notes: ["3"], conditions: { area: "urban", urbanType: "built-up", lanes: 2, curbed: true } }
        ],
        rows: [
          { group: "", element: "Total Width", labelParts: ["Total Width"], section: "56-4.03",
            values: { c1: "D = 26 ft; M = 20 ft", c2: "D = 26 ft; M = 22 ft", c3: "D = 26 ft; M = 20 ft" }, notes: ["1", "2"] },
          { group: "", element: "Travel-Lane Width", labelParts: ["Travel-Lane Width"], section: "56-4.03",
            key: "laneWidth",
            values: { c1: "D = 12 ft; M = 10 ft", c2: "D = 12 ft; M = 10 ft", c3: "D = 12 ft; M = 10 ft" },
            numeric: { c1: n(12, 10), c2: n(12, 10), c3: n(12, 10) } },
          { group: "", element: "TWLTL", labelParts: ["TWLTL"], section: "56-4.03",
            values: { c1: "D = 12 ft; M = 12 ft", c2: "D = 12 ft; M = 11 ft", c3: "D = 12 ft; M = 10 ft" } },
          { group: "", element: "Curb-Offset Distance", labelParts: ["Curb-Offset Distance"], section: "56-4.03",
            key: "curbOffset",
            values: { c1: "D = 1 ft; M = 0 ft", c2: "D = 1 ft; M = 0 ft", c3: "D = 1 ft; M = 0 ft" },
            numeric: { c1: n(1, 0), c2: n(1, 0), c3: n(1, 0) } }
        ],
        footnotes: {
          "D/M": "D =Desirable, M = Minimum.  TWLTL = two way left turn lane.",
          "1": "Total width face to face of curb.",
          "2": "For a road with a TWLTL, the total width will be increased by the applicable width of a TWLTL.",
          "3": "See Section 40-1.02 for definitions."
        }
      },

      /* ------------------------------------------------------------------ */
      {
        id: "56-4D",
        chapter: "56",
        title: "PAVEMENT WIDTH FOR URBAN ROAD OF 4 OR MORE LANES WITH CURBS",
        listTitle: "Pavement Widths for Urban Multi-Lane Roads with Curbs",
        revision: "",
        pdfPages: [28],
        facility: "Partial 3R, Urban 4+ Lanes with Curbs",
        scope: "partial 3R",
        transposed: true,
        legend: { D: "Desirable", M: "Minimum", TWLTL: "two way left turn lane" },
        columns: [
          { key: "c1", label: "Suburban", notes: ["3"], conditions: { area: "urban", urbanType: "suburban", lanesMin: 4, curbed: true } },
          { key: "c2", label: "Intermediate", notes: ["3"], conditions: { area: "urban", urbanType: "intermediate", lanesMin: 4, curbed: true } },
          { key: "c3", label: "Built-Up", notes: ["3"], conditions: { area: "urban", urbanType: "built-up", lanesMin: 4, curbed: true } }
        ],
        rows: [
          { group: "", element: "4 Lanes, Total Width", labelParts: ["4 Lanes, Total Width"], section: "56-4.03",
            values: { c1: "D = 28 ft; M = 24 ft", c2: "D = 28 ft; M = 24 ft", c3: "D = 28 ft; M = 22 ft" }, notes: ["1", "2"] },
          { group: "", element: "6 Lanes, Total Width", labelParts: ["6 Lanes, Total Width"], section: "56-4.03",
            values: { c1: "D = 40 ft; M = 35 ft", c2: "D = 40 ft; M = 35 ft", c3: "D = 40 ft; M = 32 ft" }, notes: ["1"] },
          { group: "", element: "Travel-Lane Width", labelParts: ["Travel-Lane Width"], section: "56-4.03",
            key: "laneWidth",
            values: { c1: "D = 12 ft; M = 11 ft", c2: "D = 12 ft; M = 11 ft", c3: "D = 12 ft; M = 10 ft" },
            numeric: { c1: n(12, 11), c2: n(12, 11), c3: n(12, 10) } },
          { group: "", element: "TWLTL", labelParts: ["TWLTL"], section: "56-4.03",
            values: { c1: "D = 12 ft; M = 11 ft", c2: "D = 12 ft; M = 11 ft", c3: "D = 12 ft; M = 11 ft" } },
          { group: "", element: "Curb-Offset Distance", labelParts: ["Curb-Offset Distance"], section: "56-4.03",
            key: "curbOffset",
            values: { c1: "D = 2 ft; M = 1 ft", c2: "D = 2 ft; M = 1 ft", c3: "D = 2 ft; M = 1 ft" },
            numeric: { c1: n(2, 1), c2: n(2, 1), c3: n(2, 1) } }
        ],
        footnotes: {
          "D/M": "D =Desirable, M = Minimum.  TWLTL = two way left turn lane.",
          "1": "Total width face to face of curb for one direction of a divided road.",
          "2": "For a road with a TWLTL, the total width will be increased by the applicable desirable or minimum width of a travel lane.",
          "3": "See Section 40-1.02 for definitions."
        }
      },

      /* ------------------------------------------------------------------ */
      {
        id: "56-4E",
        chapter: "56",
        title: "PARTIAL 3R WORK Mainline Pavement and Approach Considerations",
        listTitle: "Partial 3R Work – Mainline Pavement and Approaches Considerations",
        revision: "",
        pdfPages: [29, 30],
        facility: "Partial 3R Work, Mainline Pavement and Approaches",
        scope: "partial 3R",
        tableNote: "Work-item matrix by type of partial 3R pavement treatment (heading 'Pavement Treatment →'). Cell letters are defined in legend. group = italic category line as printed (trailing comma removed); where the category has a single item printed on the next line, that item is the element.",
        legend: {
          A: "Item should be included as part of the project.",
          B: "Item may be included.",
          C: "Item should not be included.  If it is considered, it should be programmed separately as a spot improvement."
        },
        columns: [
          { key: "c1", label: "Prvnt. Maint.", conditions: { treatment: "preventative maintenance" } },
          { key: "c2", label: "Func-tional", conditions: { treatment: "functional" } },
          { key: "c3", label: "Structural", conditions: { treatment: "structural" } }
        ],
        rows: [
          { group: "Approach", element: "Drive, Relocate or Redesign", values: { c1: "C", c2: "C", c3: "B" } },
          { group: "Approach", element: "Drive, wedge 3 ft adjacent to mainl. pvmt.", values: { c1: "A", c2: "A", c3: "A" } },
          { group: "Approach", element: "Mailbox, Improve to Standard or Incorporate", values: { c1: "C", c2: "C", c3: "B" } },
          { group: "Approach", element: "Mailbox, Overlay Existing", values: { c1: "A", c2: "A", c3: "A" } },
          { group: "Approach", element: "Public Road, Treat to Mainline R/W Line", values: { c1: "A", c2: "A", c3: "A" } },
          { group: "Auxiliary Lane, Improve to Current Standards or Incorporate", element: "Channelization Lane", values: { c1: "C", c2: "C", c3: "B" } },
          { group: "Auxiliary Lane, Improve to Current Standards or Incorporate", element: "Climbing Lane", values: { c1: "C", c2: "C", c3: "C" } },
          { group: "Auxiliary Lane, Improve to Current Standards or Incorporate", element: "Parking Lane", values: { c1: "C", c2: "C", c3: "B" } },
          { group: "Auxiliary Lane, Improve to Current Standards or Incorporate", element: "Passing Blister", values: { c1: "C", c2: "C", c3: "B" } },
          { group: "Auxiliary Lane, Improve to Current Standards or Incorporate", element: "Turn Lane", values: { c1: "C", c2: "C", c3: "B" } },
          { group: "Casting", element: "Adjust to Grade", values: { c1: "C", c2: "B", c3: "A" } },
          { group: "Cross-Slope Correction", element: "Convert Tilt Section to Crown Section", values: { c1: "C", c2: "B", c3: "A" } },
          { group: "Cross-Slope Correction", element: "Correct to 2%", values: { c1: "B", c2: "A", c3: "A" } },
          { group: "Curbs", element: "Repair", values: { c1: "B", c2: "B", c3: "B" } },
          { group: "Curbs", element: "Replace", values: { c1: "C", c2: "B", c3: "B" } },
          { group: "Drainage Structure", element: "Repair, Clean, or Adjust", values: { c1: "B", c2: "B", c3: "B" } },
          { group: "Intersection", element: "Improve Sight Distance and Radii", values: { c1: "C", c2: "C", c3: "B" } },
          { group: "Lanes", element: "Widen to Minimum or Desirable Standards", values: { c1: "C", c2: "C", c3: "B" }, notes: ["1"] },
          { group: "Median", element: "Convert to Two-Way Left-Turn Lane", values: { c1: "C", c2: "C", c3: "B" } },
          { group: "Monument", element: "Perpetuate", values: { c1: "A", c2: "A", c3: "A" } },
          // page 2 of 2
          { group: "Patching", element: "Patching", values: { c1: "B", c2: "A", c3: "A" } },
          { group: "Shoulders", element: "Widen to Minimum or Desirable Standards", values: { c1: "C", c2: "B", c3: "B" }, notes: ["2"] },
          { group: "Sight-Distance Improvement", element: "Horizontal", values: { c1: "C", c2: "B", c3: "B" } },
          { group: "Sight-Distance Improvement", element: "Vertical", values: { c1: "C", c2: "B", c3: "B" } },
          { group: "Subsurface Drainage", element: "Underdrain, Clean or Repair", values: { c1: "B", c2: "B", c3: "B" } },
          { group: "Subsurface Drainage", element: "Underdrain, Place or Replace", values: { c1: "C", c2: "C", c3: "B" } },
          { group: "Superelevation Rate", element: "Improve to Current Standards", values: { c1: "C", c2: "B", c3: "A" }, notes: ["3"] },
          { group: "Underpass Vertical Clearance", element: "Maintain Current Distance", values: { c1: "A", c2: "A", c3: "A" } },
          { group: "Urban Surface Drainage", element: "Mill as Required to Maintain or Correct", values: { c1: "B", c2: "A", c3: "A" } }
        ],
        footnotes: {
          "1": "Minimum and desirable standards are shown in Figures 56-4A, 56-4B, 56-4C, and 56-4D.",
          "2": "Minimum and desirable standards are shown in Figures 56-4A, 56-4B, 56-4C, and 56-4D. Paved shoulders are desirable if they can be placed without affecting drainage orside ditches.",
          "3": "Current standards are shown in Section 305-4.0"
        }
      },

      /* ------------------------------------------------------------------ */
      {
        id: "56-4F",
        chapter: "56",
        title: "PARTIAL 3R WORK Roadside, Culvert, and Traffic Considerations",
        listTitle: "Partial 3R Work – Roadside, Culverts, and Traffic Considerations [Rev. Feb. 2014]",
        revision: "Rev. Feb. 2014 (per List of Figures; no revision tag is printed on the figure pages. The Sidewalk row is highlighted on page 32.)",
        pdfPages: [31, 32],
        facility: "Partial 3R Work, Roadside, Culverts, and Traffic",
        scope: "partial 3R",
        tableNote: "Work-item matrix by type of partial 3R pavement treatment (heading 'Pavement Treatment →'). Cell letters are defined in legend (printed as 'Key to work incidental to paving').",
        legend: {
          A: "Item should be included as part of the project.",
          B: "Item may be included.",
          C: "Item should not be included.  If it is considered, it should be programmed separately as a spot improvement."
        },
        columns: [
          { key: "c1", label: "Prvnt. Maint.", conditions: { treatment: "preventative maintenance" } },
          { key: "c2", label: "Func-tional", conditions: { treatment: "functional" } },
          { key: "c3", label: "Structural", conditions: { treatment: "structural" } }
        ],
        rows: [
          { group: "Culvert", element: "Extend", values: { c1: "B", c2: "B", c3: "A" } },
          { group: "Culvert", element: "Modify", values: { c1: "B", c2: "B", c3: "A" } },
          { group: "Culvert", element: "Place New", values: { c1: "C", c2: "C", c3: "C" } },
          { group: "Culvert", element: "Repair and Clean", values: { c1: "B", c2: "B", c3: "A" } },
          { group: "Culvert", element: "Replace", values: { c1: "B", c2: "B", c3: "A" } },
          { group: "Culvert", element: "Headwalls, Remove", values: { c1: "C", c2: "B", c3: "A" } },
          { group: "Eroded Area", element: "Grade and Seed or Sod", values: { c1: "B", c2: "B", c3: "A" } },
          { group: "Guardrail End Treatment", element: "Repair Damaged", values: { c1: "A", c2: "A", c3: "A" } },
          { group: "Guardrail End Treatment", element: "Replace product not on appvd. list with appvd. prod.", values: { c1: "B", c2: "B", c3: "B" } },
          { group: "Guardrail End Treatment", element: "Replace type I with type MS or OS as required.", values: { c1: "B", c2: "A", c3: "A" } },
          { group: "Highway Sign", element: "Replace", values: { c1: "C", c2: "C", c3: "B" } },
          { group: "Impact Attenuator", element: "Repair Damaged", values: { c1: "A", c2: "A", c3: "A" } },
          { group: "Impact Attenuator", element: "Replace product not on appvd. list with appvd. prod.", values: { c1: "B", c2: "B", c3: "B" } },
          { group: "Linear Grading", element: "Linear Grading", values: { c1: "C", c2: "C", c3: "B" } },
          { group: "Mailbox", element: "Adjust Mounting Height Where Required", values: { c1: "A", c2: "A", c3: "A" } },
          { group: "Mailbox", element: "Replace Where Required", values: { c1: "B", c2: "B", c3: "A" } },
          { group: "Obstruction-Free-Zone Clearance", element: "Remove Fixed Object > 4 in. Above Ground", values: { c1: "C", c2: "B", c3: "B" }, notes: ["3"] },
          { group: "Pavement Markings and Delineation", element: "Pavement Markings, Place", values: { c1: "A", c2: "A", c3: "A" } },
          { group: "Pavement Markings and Delineation", element: "Roadside Delineators, Place or Replace", values: { c1: "B", c2: "B", c3: "B" } },
          { group: "Pavement Markings and Delineation", element: "Raised Pavement Markers, Place", values: { c1: "C", c2: "B", c3: "B" } },
          { group: "Pavement Markings and Delineation", element: "Raised Pavement Markers, Replace", values: { c1: "B", c2: "B", c3: "B" } },
          { group: "Side Ditch", element: "Reshape or Riprap", values: { c1: "B", c2: "B", c3: "B" } },
          // page 2 of 2
          { group: "Side Slope", element: "Flatten to Traversable Level", values: { c1: "C", c2: "C", c3: "B" } },
          { group: "Sidewalk", element: "Repair or Replace per ADA requirements", values: { c1: "B", c2: "B", c3: "B" },
            revisionNote: "Highlighted in the PDF (Feb. 2014 revision): 'per ADA requirements' and the three B cells." },
          { group: "Sidewalk Curb Ramp at Intersection", element: "Upgrade existing to ADA requirements", values: { c1: "A", c2: "A", c3: "A" } },
          { group: "Sidewalk Curb Ramp at Intersection", element: "Place in exist. sdwk. per ADA requirements", values: { c1: "A", c2: "A", c3: "A" } },
          { group: "Traffic Barrier", element: "Bridge Railing, Upgrade to Current Standards", values: { c1: "C", c2: "C", c3: "C" } },
          { group: "Traffic Barrier", element: "Guardrail, Repair or Replace Damaged", values: { c1: "A", c2: "A", c3: "A" } },
          { group: "Traffic Barrier", element: "Guardrail, Replace Obsolete or Weathered", values: { c1: "C", c2: "B", c3: "B" }, notes: ["1"],
            labelPrinted: "Guardrail, Replace Obsolete ¹ or Weathered" },
          { group: "Traffic Barrier", element: "Guardrail, Place or Lengthen to Current Standards", values: { c1: "C", c2: "B", c3: "B" }, notes: ["2"] },
          { group: "Traffic Barrier", element: "Guardrail to Bridge Railing, Connect", values: { c1: "C", c2: "A", c3: "A" } },
          { group: "Traffic Barrier", element: "Guardrail Transition, Upgrade to Current Standards", values: { c1: "C", c2: "C", c3: "C" } },
          { group: "Traffic Signal", element: "Add or Upgrade", values: { c1: "C", c2: "C", c3: "B" } },
          { group: "Traffic Signal", element: "Detector Loop or Handhole, Perpetuate", values: { c1: "A", c2: "A", c3: "A" } }
        ],
        footnotes: {
          "1": "Obsolete guardrail should be treated as shown in Section 49-4.02.",
          "2": "Treat as described in Section 55-5.04.",
          "3": "For example, tree, bush, post, rock, private sign, etc.  See Section 55-5.02 for obstruction-free-zone information."
        }
      }
    ],

    notCaptured: [
      { id: "54-6A", title: "Barrier Treatment at a Median Crossover", pdfPages: [26], reason: "Drawing, not a criteria table." },
      { id: "54-6B(64) to 54-6B(100)", title: "Interstate-Route Crossovers (I-64, I-65, I-69, I-70 [Rev. Jan. 2013], I-74, I-94, Three-Digit-Numbered Routes)", pdfPages: [27, 42], reason: "Lists of FHWA-approved crossover locations, not geometric criteria." },
      { id: "56-3A", title: "Stationing Conventions", pdfPages: [23], reason: "Drawing, not a criteria table." },
      { id: "56-3B", title: "Collection of Field Data", pdfPages: [24], reason: "Blank field-notes form." }
    ]
  };
})();
