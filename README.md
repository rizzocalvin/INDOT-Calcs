# INDOT IDM Roadway Calculators

A static website of roadway design calculators based on the INDOT **Indiana Design Manual (IDM)**: the 2013 IDM as revised by the Design Memoranda listed on each chapter. It is plain HTML, CSS and JavaScript with no build step and no network dependencies. It runs by opening `index.html` from disk, and can be hosted on GitHub Pages or any internal web server.

> **Verify before use.** These tools are design aids. Every result must be checked against the current IDM and engineering judgment. They do not replace the design-exception process.

## Calculators

| Section | Page | IDM basis |
|---|---|---|
| Alignment | `alignment/sight-distance.html` | Stopping sight distance, Eq. 42-1.1 and Fig. 42-1A; decision sight distance, Fig. 42-2A; passing sight distance, Fig. 42-3B |
| | `alignment/horizontal-curve.html` | Minimum radius, Eq. 305-3.1 and Figs. 305-4B/C/D/E; curve length, 305-3.02; curve elements, Fig. 305-6B |
| | `alignment/superelevation.html` | Design e from Figs. 305-4B to 4E; runoff, Eq. 305-4.1; tangent runout, Eq. 305-4.2; 2/3–1/3 runoff distribution; shoulders, 305-4.06 |
| | `alignment/hso.html` | Horizontal sight-line offset, Eq. 305-5.1 |
| | `alignment/vertical-curve.html` | Crest and sag K, Figs. 44-3A to 3D; Eqs. 44-3.1 to 44-3.5; geometry, Fig. 44-3F; curve through a fixed point, Fig. 44-3 I |
| Cross Section | `cross-section/design-criteria.html` | Lane and shoulder widths: Ch. 53 (4R), Ch. 55 (3R), Ch. 54 (freeway 3R / partial 4R), Ch. 56 (partial 3R) |
| | `cross-section/cross-slope.html` | Lane, auxiliary-lane and shoulder cross slopes: 45-1.01(02), 45-1.02(05), Figs. 45-1A(1) and 45-1A(2) |
| | `cross-section/curve-widening.html` | 305-3.06 (full-depth shoulders instead of widening; ignore widening of 2 ft or less), using the Green Book 3.3.10 equations |
| | `cross-section/side-slope.html` | Figs. 45-3A to 45-3D; 2:1 policy, 45-3.03; Ch. 49 recoverable-slope rules |
| Intersections | `intersections/isd.html` | Section 46-10, Figs. 46-10A to 46-10J (stop: left, right, crossing; yield; left turn from major road; no control; skew) |
| | `intersections/turn-lane.html` | Taper, deceleration and storage: 46-4.02(02); Figs. 46-4H, 46-4J, 46-4K, 46-4L |
| | `intersections/taper.html` | Fig. 502-2J taper rates; Fig. 46-7A added through lanes |
| Roadside Safety | `roadside/clear-zone.html` | Fig. 49-2A; Kcz, Fig. 49-2B; transition 3.1V, Fig. 49-2C; slope averaging, 49-2.02(02) |
| | `roadside/length-of-need.html` | Eqs. 49-4.1 to 49-4.4; LR and Ls, Fig. 49-4E; minimum lengths, Fig. 49-4E(1); deflections, Fig. 49-4A |
| | `roadside/flare-rate.html` | Fig. 49-4F |

Each calculator page has:
- inputs and results, with pass/fail or governing-value messages;
- a context section (purpose, when it applies, assumptions, IDM section, figure and equation numbers);
- an inline SVG diagram that redraws as inputs change;
- a verification note and the revision of each IDM chapter used.

Inputs are saved in the URL hash, so a calculation can be bookmarked or shared. Pages print cleanly, and work on phones and in light or dark themes.

## IDM edition and chapter versions used

The values were transcribed from these IDM chapter PDFs (current INDOT versions). The same list is in `data/sources.js` and on the home page.

| Chapter | Title | Latest revision on chapter cover | PDF date |
|---|---|---|---|
| 40 | Basic Design Controls | Sep. 2023 (DM 23-12) | 2025-04-21 |
| 42 | Sight Distance | No design-memo revisions listed | 2025-03-17 |
| 44 | Vertical Alignment | No design-memo revisions listed | 2025-03-17 |
| 45 | Cross-Section Elements | Feb. 2019 (DM 19-01) | 2025-03-17 |
| 46 | Intersections At-Grade | Aug. 2018 (DM 18-18, 18-19) | not embedded |
| 49 | Roadside Safety | Aug. 2017 (DM 17-17) | 2025-03-14 |
| 53 | Geometric Design Tables (New Construction/Reconstruction) | Jul. 2014 (DM 14-10); being rewritten as Ch. 302 | 2025-04-07 |
| 54 | Geometric Design of Existing Freeway (3R) or (4R) Partial Reconstruction | Jun. 2023 (DM 23-06) | 2025-04-07 |
| 55 | Geometric Design of Existing Non-Freeway (3R) | Jun. 2023 (DM 23-06) | 2025-09-30 |
| 56 | Partial 3R Projects | Jun. 2023 (DM 23-06) | 2025-10-01 |
| 305 | Horizontal Alignment (formerly Ch. 43) | Apr. 2025 (DM 25-09) | 2025-12-15 |
| 502 | Traffic Design (Fig. 502-2J, Rev. Aug. 2018) | Apr. 2026 (DM 26-10/26-11) | not embedded |

The chapter numbers in the original scope were approximate; the actual ones are listed above. Horizontal alignment is now **Chapter 305** (the old Chapter 43 was rewritten and renumbered in April 2025).

## Folder layout

```
index.html                 home page
css/style.css              shared styles (light/dark, mobile, print)
js/common.js               page chrome, navigation, input binding, SVG helpers
js/calcs.js                pure calculation functions (browser and Node)
data/*.js                  IDM design tables, one file per topic, tagged by chapter/section/figure
alignment/ cross-section/ intersections/ roadside/   section index pages and calculators
tests/spot-checks.js       checks against IDM worked examples and tables
```

## Data files and how to update them

All design values live in `data/`. Each file is a plain script that adds to a global `IDM` object; ES modules and `fetch` are not used, so the site works from `file://`. Each table carries its IDM chapter, section, figure and revision.

| File | Contents |
|---|---|
| `data/sources.js` | Chapter titles, revision memos and dates (shown on every page) |
| `data/sight-distance.js` | Figs. 42-1A, 42-2A, 42-3B, 42-3C |
| `data/horizontal.js` | Figs. 305-4A to 305-4G, curve-length and shoulder rules |
| `data/vertical.js` | Figs. 44-3A to 44-3D, minimum lengths, drainage K limits |
| `data/cross-section.js` | Ch. 45 cross slopes, Figs. 45-1A(1)/(2), 45-3A to 45-3D, 305-3.06 widening text |
| `data/intersections.js` | Figs. 46-10A to 46-10J, 46-4H to 46-4L, 46-7A, and Fig. 502-2J (`IDM.taper502`) |
| `data/roadside.js` | Figs. 49-2A, 49-2B, 49-2C, 49-4A, 49-4E, 49-4E(1), 49-4F |
| `data/geometric-4r.js` | All rows and footnotes of Figs. 53-1 to 53-9 |
| `data/geometric-3r.js` | All rows and footnotes of Figs. 55-3A to 55-3H |
| `data/geometric-3r-freeway-partial.js` | Figs. 54-2A, 54-3A, 54-3B and 56-4A to 56-4F |

To update after an IDM revision:

1. Get the revised chapter PDF and note the Design Memorandum number and date from its cover page.
2. Edit the affected table in `data/`. Keep values exactly as printed, and update the `figure`, `revision` or `source` fields on the table.
3. Update the chapter entry in `data/sources.js` (`revisions`, `latest`, `pdfDate`). Every page that uses the chapter then shows the new revision.
4. In the geometric-design files, each figure has `columns` (with `table: "main"` or `"alignment"`) and `rows` (with `element`, `section`, `controlling`, `values` keyed by column, optional `key` and parsed `numeric` widths, `notes`), plus `footnotes` and `transcriptionNotes`. The `conventions` object at the top of `geometric-4r.js` and `geometric-3r.js` documents the format; `geometric-3r-freeway-partial.js` follows the same format and lists figures it did not capture in `notCaptured`.
5. Run `node tests/spot-checks.js` (Node 18+). It recomputes IDM tables from their equations, reproduces the IDM worked examples, and checks that every geometric-table row has a value for every column. It exits non-zero on a failure. Add a check for any new example.

If a chapter is renumbered (for example, Ch. 53 moving to Ch. 302), update the chapter keys in `sources.js` and the `chapters` list passed to `IDMUI.page()` in the affected HTML pages.

## Running locally

Open `index.html` in a browser. Or serve the folder:

```
python -m http.server 8765
```

then browse to `http://localhost:8765/`. For GitHub Pages, publish the repository root.

## Spot-check results

`node tests/spot-checks.js` currently reports **517 checks passed, 0 failed**. They include:

- **Figure 42-1A:** every row reproduced from Eq. 42-1.1. Decision sight distance (DSD) maneuvers A and B are reproduced within rounding.
- **Figures 305-4B/C/D:** minimum radii reproduced by Eq. 305-3.1 within 1%. Low-speed Examples 305-4.1 to 305-4.3, the Figure 305-6C curve (T, L, E, M, PC, PT) and Figure 305-5B (HSO = 27 ft) are reproduced.
- **Figures 44-3A and 44-3C:** K values reproduced. Example 44-3.1 is reproduced for stations and low-point station, and Example 44-3.2 for X = 566.24 ft and L = 1480.5 ft.
- **Figures 46-10G, 46-10H, 46-10J and 46-10D:** reproduced from ISD = 1.47 V tg. Deceleration grade factors and storage rules are checked.
- **Figure 49-2A:** the Section 49-2.01 text example (40 ft and 20 ft) is reproduced. So are Examples 49-2.1 (Kcz 1.2, CZc 18 ft, L = 171 ft), 49-2.3 (weighted foreslope 6.8:1, CZADJ 21.5 ft), and 49-4.1 to 49-4.3 (CZ 46/30/38 ft, LR 290/250/290 ft).
- **Geometric design tables:** every row has a value in every column. Figure 53-2 page 1 was also compared cell-by-cell against the PDF image.

## Inconsistencies found in the IDM itself

These are kept as printed in the data, and the affected pages flag them:

- **Equation 42-1.1** is printed as `.147Vt`; the Figure 42-1A values use 1.47Vt.
- **Equations 44-3.4/44-3.5** print `400 + 5.3S`; the Figure 44-3C K values use 400 + 3.5S, which the calculator uses.
- **Figure 44-3D (sag K for DSD)** is computed with DSD²/(120 + 3.5S), as printed on the figure. The US-customary sag equation gives smaller K values. The DSD values for 20 and 25 mph in Figures 44-3B and 44-3D are not in Figure 42-2A, and several of those K values do not follow the stated formula.
- **Example 44-3.1:** the low-point elevation (580.33) and offset table contain arithmetic errors. The Figure 44-3F equations give 579.96, and the calculator follows the equations.
- **Figure 305-4G:** it disagrees with Eq. 305-4.1 in 102 of 384 cells, mostly by 5 ft. Clear misprints: e 6.0% at 40 mph (160 vs 125 ft), e 7.6% at 30 mph (170 vs 140 ft), and e 3.2% at 25 mph (45 vs 55 ft). The calculator uses the equation and shows the table value beside it.
- **Figure 49-2B / Section 49-2.02(01):** the curve-adjustment threshold is 2860 ft in the figure note and 3000 ft in the text.
- **Example 49-2.3:** 100(20)/22 = 90.9%, but it is printed as 92%. The final 21.5 ft is unaffected at the precision shown.
- **Figure 46-10G:** several ISD entries do not follow consistent rounding. For example, 1.47 × 50 × 8.5 = 624.8 ft is printed as 630 ft.
- **Figure 46-7A vs Figure 502-2J:** lane-drop taper rates differ at some speeds (e.g., 55 mph: 60:1 vs 55:1).
- **Storage figures:** the page captioned "Figure 46-4K(1)" in the PDF contains the adjustment-factor table, and the storage chart is on the preceding page.
- **Chapters 53 to 56:** transcription notes cover typos and inconsistencies. Examples: overlapping speed conditions in 53-4 and 55-3C/D footnote 4, the AADT gap at exactly 2000 in 53-3, decision sight distance and ISD values that differ between figures, and mislabeled footnotes. They are stored in each figure's `transcriptionNotes` and shown on the Lane & Shoulder Widths page.

## Not sourced from the current IDM

- **Curve widening:** the IDM refers to the Green Book (Section 3.3.10) for calculated traveled-way widening and does not reproduce the equations or design-vehicle dimensions. The page implements the Green Book equations, with lateral clearance C = 2.0/2.5/3.0 ft for 20/22/24-ft roadways. Its vehicle inputs are illustrative placeholders that the user must replace. Verify against the Green Book.
- **Storage chart:** the signalized storage-length chart (the graph labeled Figure 46-4K in the PDF) is a graph and was not digitized. The page accepts a value read from it and applies the tabulated adjustment factor.
- **Not tabulated by the IDM:**
  - Kcz for design speeds below 40 mph: the 40 mph column is used and flagged.
  - Flare rates above 65 mph: the 65 mph rates are used and flagged.
  - Figure 46-4J deceleration lengths outside 25 to 60 mph.
  - Figure 49-4E runout lengths at 35 and 65 mph: interpolated, as the IDM does in Example 49-4.1.
- **Truck right turns from a stop:** the IDM tabulates passenger cars only. The page uses the Figure 46-10H(1) crossing gaps for trucks turning right.
- **Not covered:** unsymmetrical vertical curves (Figure 44-3H), the outside-of-curve graphical length-of-need method (Figure 49-4H), the barrier-warrant embankment charts (Figures 49-3B/3C), and the divided-highway trailing-end layout (Figure 49-4J). The pages point to the figures.
