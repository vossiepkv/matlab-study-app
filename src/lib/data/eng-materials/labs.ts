import type { LabExercise } from '../labs';

/**
 * Walkthrough for PROC2097 Lab 1 — Tensile and Hardness Testing of Black Mild Steel.
 *
 * The practical is DEMONSTRATED by the tutor — students observe and record. So
 * exercises 1–4 are framed as "what to watch for and what to write down", not
 * "what to do". Exercises 5–10 are the analysis and write-up, which IS the
 * student's own work, worked with the data set from the tutorial sheet:
 * d₀ = 5.7 mm, d_f = 3.67 mm, l₀ = 130.3 mm, l_f = 141.7 mm.
 */
export const engMaterialsLab1: LabExercise[] = [
	{
		id: 'w0-lab1',
		title: 'Your job today — the data capture sheet',
		problem:
			'The tutor runs the machines and performs the test. You watch and write things down. So what EXACTLY do you need to leave the lab with, given that none of it can be reconstructed afterwards?',
		approach:
			'Because you are not operating anything, your entire contribution to the report is captured in one session of note-taking. Rule the tables up before it starts, so every number the tutor calls out has somewhere to go immediately. If you miss a number you cannot go back for it.',
		steps: [
			{
				description:
					'Rule up blank copies of Tables 1–5 before anything starts. Tables 1–5 are the only part of the handout you are allowed to reproduce in your report, so use their exact format.'
			},
			{
				description: 'The numbers. Every one of these must come home with you.',
				code: 'Table 1  d₀   original diameter of reduced section   mm\n         d_f  final diameter at the neck             mm\n         l₀   original gauge length                  mm\n         l_f  final gauge length after fracture      mm\n\nTable 4  calibration block: 3 readings + integer average (HRC)\nTable 5  black mild steel: 3 readings + integer average (HRB)\n\nPlus: the load-extension graph file (Table 2 comes entirely off it)'
			},
			{
				description:
					'The equipment details. The checklist asks for these by name, model and serial number — ask the tutor if they are not called out.',
				code: 'Instron universal tensile tester  - model + serial no.\nWilson Rockwell hardness tester   - model + serial no.\nDigital vernier calipers          - resolution (e.g. 0.01 mm)\nCertified hardness test block     - serial no. + stated hardness\nIndenters used                    - 150 kg diamond cone, 1.6 mm ball\nSpecimen material + grade if stated',
				note: 'The checklist asks specifically for equipment details including serial numbers, model numbers and calibration details, with photos or diagrams as required. Take photos of the machine data plates — quickest way to get this right.'
			},
			{
				description:
					'The observations. These are prose, not numbers, and they are the part everyone forgets — you cannot recall them a week later. Write down what the specimen did and what it looked like at each stage, and how the tutor set it up.',
				code: 'How the specimen was clamped in the Instron\nWhat happened as load increased (stiff stretch, yield, neck, snap)\nWhat the fracture surface looked like\nWhether a yield point was visible on the live graph\nAnything unusual (slip in the grips, off-centre break, etc.)'
			},
			{
				description:
					'Get the load–extension graph onto your USB before you leave, or ask the tutor to email it. Every load value in Table 2 is read off that graph, and a numbered, identified copy of it must appear in the report.',
				note: 'This is the single most common way to lose marks on this practical — no graph means no Table 2 and no Table 3.'
			},
			{
				description:
					'OH&S while you watch: fully enclosed shoes are mandatory, wear safety glasses, and stand clear of the Instron while it is loading. A tensile specimen stores a lot of elastic energy and releases it the instant it snaps.',
				note: 'The handout states all shoes must be fully enclosed and that appropriate OH&S requirements must be observed.'
			},
			{
				description:
					'One more reason to take good notes: the report procedure must be written in THIRD PERSON, PAST TENSE and in your own words — "the diameter of the reduced section was measured using digital vernier calipers". A demonstration suits that voice perfectly, but only if you recorded what was actually done.'
			}
		]
	},
	{
		id: 'w0-lab2',
		title: 'Watch for: specimen preparation and the "before" measurements',
		problem:
			'The tutor prepares one hot-worked black mild steel sample. What are they doing, why does each step matter, and which two numbers must you have written down before any load is applied?',
		approach:
			'Everything in this stage exists so that (a) the two halves can still be identified after the specimen is destroyed, and (b) there are "before" numbers to compare with the "after" numbers. Watch where the marks go — the placement is the point, and it is a likely discussion question.',
		steps: [
			{
				description:
					'An identification letter or number is punched on BOTH sections of the sample, on the LARGER diameter — the part gripped in the jaws — using the letter/number stamps provided. Note the ID used.',
				note: 'Both halves are marked so that after the sample has been elongated to destruction the two pieces can still be identified as one sample. It goes on the thick end because a stamp on the reduced section would be a notch and a stress concentration.'
			},
			{
				description:
					'The diameter of the parallel reduced section is measured with digital vernier calipers. WRITE THIS DOWN — it is d₀, and every stress you calculate depends on it.',
				code: 'd₀ = 5.7 mm      (worked example value)',
				note: 'Note whether several orientations were measured and averaged — the bar is not perfectly round, and this belongs in your accuracy discussion.'
			},
			{
				description:
					'Two marks are punched VERY LIGHTLY with a centre punch, at the extremes of the parallel reduced section. The distance between them is the gauge length.',
				note: 'Very lightly is not a suggestion — a deep punch mark is a notch that would start a crack and fracture the specimen early, giving a falsely low strength. If you are asked why the marks are light, this is the answer.'
			},
			{
				description:
					'The distance between the two punch marks is measured with the caliper and recorded against the sample I.D. WRITE THIS DOWN — it is l₀.',
				code: 'l₀ = 130.3 mm    (worked example value)'
			},
			{
				description: 'Table 1 now has its two "before" entries. The other two columns get filled in after fracture.',
				code: 'Table 1                d₀      d_f     l₀       l_f\nBlack Mild Steel      5.7      ?     130.3      ?'
			},
			{
				description:
					'Watch how the specimen is loaded into the machine: the plain (larger diameter) ends go into the wedge-action jaws so the grips never touch the reduced section, and the specimen is aligned on the loading axis so it is pulled in pure tension without bending. Write down what you see.',
				note: 'The checklist asks you to describe the method of work holding/clamping in the Instron — this is your only chance to observe it.'
			}
		]
	},
	{
		id: 'w0-lab3',
		title: 'Watch for: the tensile test and the "after" measurements',
		problem:
			'The tutor runs the test to destruction. Observation is your whole job here — what should you be looking for while it loads, and which two numbers are taken once it has broken?',
		approach:
			'The checklist explicitly asks you to discuss how the samples behaved during the test and what happened to them. That discussion can only come from what you watch now. Keep one eye on the specimen and one on the live graph.',
		steps: [
			{
				description:
					'As load is applied, watch the stages in order: an initially stiff elastic stretch, the moment yielding starts (the specimen suddenly gives), steady stretching as it work hardens, then a visible neck forming in the middle of the reduced section, and finally the snap.'
			},
			{
				description:
					'Watch the live graph on the machine as it happens. Note whether a distinct yield point appears as a small peak-then-dip early on — you need this observation for Table 2, because it decides whether a 0.2% proof load is required at all.'
			},
			{
				description:
					'Look at the fracture surface once it is handed around. Mild steel gives a rough, fibrous, cup-and-cone break with a slanted shear lip. That appearance is itself evidence of ductile failure and belongs in your discussion — describe it in your notes rather than trusting memory.'
			},
			{
				description:
					'The elongation in gauge length is measured by supporting BOTH pieces in a Vee block, lined up end to end, and measuring between the original punch marks. WRITE THIS DOWN — it is l_f.',
				code: 'l_f = 141.7 mm\nPermanent elongation = 141.7 - 130.3 = 11.4 mm'
			},
			{
				description: 'The diameter is measured at the NECK of the break. WRITE THIS DOWN — it is d_f.',
				code: 'd_f = 3.67 mm\nDiameter reduction = 5.7 - 3.67 = 2.03 mm'
			},
			{
				description:
					'Get the graph copied from the Instron to your USB, or ask the tutor to email it. Do not leave without it.'
			},
			{
				description: 'Table 1 is now complete and you can do the rest of the work at home.',
				code: 'Table 1                d₀      d_f      l₀       l_f\nBlack Mild Steel      5.7     3.67    130.3    141.7\nAll dimensions in mm'
			}
		]
	},
	{
		id: 'w0-lab4',
		title: 'Watch for: Rockwell hardness — calibration, then the specimen',
		problem:
			'The tutor now measures the hardness of the black mild steel on the Wilson Rockwell machine. What is the sequence, why is it in that order, and what are the six numbers you must record?',
		approach:
			'Never measure an unknown before proving the instrument on a known — so the certified test block comes first (Table 4), then the specimen (Table 5). Three readings each. Both averages must be written as INTEGERS.',
		steps: [
			{
				description:
					'Understand what the machine is doing as you watch: a minor preload seats the indenter and sets the zero datum, the major load is applied then removed, and the machine measures the PERMANENT increase in indentation depth. That depth converts straight into a Rockwell number on the display — no measuring of the dent needed, which is why it is quick.'
			},
			{
				description:
					'Calibration check first (Table 4): the 150 kg diamond cone indenter on the certified block, three times. Record the block serial number, its stated hardness, all three HRC readings and the integer average.',
				code: 'Table 4 - Calibration, 150 kg diamond indenter (HRC)\nSerial number: ......   Stated block hardness: ......\nTest 1: ....\nTest 2: ....\nTest 3: ....\nAverage (integer): ....',
				note: 'If the average does not match the block within tolerance, the machine is out and nothing measured after it can be trusted. Note it if that happens — it is a genuine reliability point for your conclusion.'
			},
			{
				description:
					'Note any surface preparation done to the steel before indenting. Black hot-rolled steel carries hard, brittle mill scale and may have a softer decarburised skin, so the surface is normally ground or filed clean first — otherwise readings are wrong in both directions.'
			},
			{
				description:
					'Specimen test (Table 5): the 1.6 mm ball indenter with the 100 kg load, read on the HRB scale, three indents. Record all three plus the integer average.',
				code: 'Table 5 - Black Mild Steel, 100 kg, 1.6 mm ball (HRB)\nTest 1: ....\nTest 2: ....\nTest 3: ....\nAverage (integer): ....\nExpect roughly 60-80 HRB for hot-rolled mild steel'
			},
			{
				description:
					'Watch the indent spacing: at least 3 indent diameters from any other indent, at least 2.5 diameters from an edge, on a flat surface sitting firmly on the anvil with no rocking. If a reading looks like an outlier, note where that indent was.'
			},
			{
				description:
					'Average as an INTEGER. The handout gives its own example: readings of 47, 47 and 48 average to 47, NOT 47.33333.'
			},
			{
				description:
					'Note why HRB and not HRC on the steel: mild steel is too soft for the diamond cone under 150 kg, which sinks in too far and pushes the reading below the reliable part of the C scale (about HRC 20 and up). The ball indenter with 100 kg keeps it mid-scale on B.'
			}
		]
	},
	{
		id: 'w0-lab5',
		title: 'Reading the load–extension graph — filling in Table 2',
		problem:
			'The Instron gives you a Force (kN) vs Displacement (mm) curve. Read the yield load, the proof load and the maximum load off it for Table 2. The tutorial-sheet curve for this specimen peaks at about 13.8 kN with a small yield spike at about 2 mm displacement.',
		approach:
			'Three loads, three rules. Yield: find the yield spike and take the LOWER value. Proof: only needed if there is no yield spike. Maximum: the highest point of the whole curve. Convert kN to N before you calculate anything.',
		steps: [
			{
				description:
					'Find the yield region — the small peak-then-dip early in the curve, at roughly 2 mm displacement here. The peak is the upper yield point, the bottom of the dip is the lower yield point.',
				code: 'Upper yield point  ~ 10.2 kN   at ~2.05 mm\nLower yield point  ~  9.6 kN   at ~2.4 mm'
			},
			{
				description:
					'Record the LOWER yield point as F_y. The upper value is not reproducible — it changes with strain rate, alignment and machine stiffness — so design codes and this handout use the lower one.',
				code: 'F_y = 9.6 kN = 9600 N'
			},
			{
				description:
					'The proof load cell: a definite yield point IS evident on this curve, so you do not calculate a 0.2% proof load. Write "not required due to evident yield point" in that cell.',
				note: 'The notes under Table 2 cover all three cases: derive a yield load if a yield point is observed; derive a proof load only if NO yield point is observed; a yield load cannot be determined if a yield point is not evident.'
			},
			{
				description:
					'Find the highest point on the whole curve — the top of the plateau, at about 9–10 mm displacement here. That is F_max, and it is also where necking begins.',
				code: 'F_max = 13.8 kN = 13 800 N'
			},
			{
				description:
					'Note where fracture happened, for your discussion: the load drops vertically at about 13.7 mm displacement. Compare that with the 11.4 mm of PERMANENT elongation you measured — the difference is elastic recovery plus machine and grip compliance springing back.'
			},
			{
				description: 'Table 2 complete.',
				code: 'Table 2                 F_y      F_proof                          F_max\nBlack Mild Steel      9600 N   not required (evident yield)   13 800 N'
			}
		],
		expectedOutput:
			'F_y   = 9600 N   (lower yield point)\nF_proof = not required due to evident yield point\nF_max = 13 800 N'
	},
	{
		id: 'w0-lab6',
		title: 'Table 3 worked end to end — areas, strengths, elongation, reduction in area',
		problem:
			'Using d₀ = 5.7 mm, d_f = 3.67 mm, l₀ = 130.3 mm, l_f = 141.7 mm, F_y = 9600 N and F_max = 13 800 N, calculate every column of Table 3: A₀, A_f, σ_y, σ_TS, percentage elongation and percentage reduction in area.',
		approach:
			'Work in newtons and mm² throughout. Then 1 N/mm² = 1 MPa and no unit conversion is needed anywhere. Do the two areas first — every strength depends on A₀.',
		steps: [
			{
				description: 'Original cross-sectional area. Use π d² / 4, not π r², unless you halve the diameter first.',
				code: 'A₀ = π d₀² / 4\n   = π × (5.7)² / 4\n   = π × 32.49 / 4\n   = π × 8.1225\n   = 25.52 mm²'
			},
			{
				description: 'Final cross-sectional area, from the diameter measured at the neck.',
				code: 'A_f = π d_f² / 4\n    = π × (3.67)² / 4\n    = π × 13.4689 / 4\n    = π × 3.3672\n    = 10.58 mm²'
			},
			{
				description: 'Yield strength — lower yield load divided by the ORIGINAL area.',
				code: 'σ_y = F_y / A₀\n    = 9600 / 25.52\n    = 376 MPa'
			},
			{
				description:
					'Ultimate tensile strength — maximum load divided by the ORIGINAL area. Always the original, never the necked area.',
				code: 'σ_TS = F_max / A₀\n     = 13 800 / 25.52\n     = 541 MPa'
			},
			{
				description: 'Percentage elongation — change in gauge length over the ORIGINAL gauge length.',
				code: 'EL = 100 (l_f - l₀) / l₀\n   = 100 (141.7 - 130.3) / 130.3\n   = 100 × 11.4 / 130.3\n   = 8.75   (percent)'
			},
			{
				description:
					'Percentage reduction in area — original area minus final area, over the original area. Much bigger than the elongation, because it is measured right at the neck rather than averaged over the whole gauge length.',
				code: 'RA = 100 (A₀ - A_f) / A₀\n   = 100 (25.52 - 10.58) / 25.52\n   = 100 × 14.94 / 25.52\n   = 58.5   (percent)'
			},
			{
				description:
					'Sanity check the pattern before you write it up: σ_TS must be greater than σ_y (the material work hardens after yielding), and both ductility numbers must be well above zero for a ductile metal.'
			}
		],
		fullSolution:
			'A₀   = π (5.7)² / 4      = 25.52 mm²\nA_f  = π (3.67)² / 4     = 10.58 mm²\nσ_y  = 9600 / 25.52      = 376 MPa\nσ_TS = 13 800 / 25.52    = 541 MPa\nEL   = 100 (141.7 - 130.3) / 130.3   = 8.75  percent\nRA   = 100 (25.52 - 10.58) / 25.52   = 58.5  percent',
		expectedOutput:
			'Table 3 — Black Mild Steel\n  A₀  = 25.52 mm²\n  A_f = 10.58 mm²\n  σ_y  = 376 MPa\n  σ_TS = 541 MPa\n  Elongation      = 8.75 %\n  Reduction in area = 58.5 %'
	},
	{
		id: 'w0-lab7',
		title: 'Question 1 — is the mild steel ductile? Prove it two ways',
		problem:
			'Would you consider the mild steel ductile or not? Based on the results from this practical AND from the manufacturer’s specifications, give your observational evidence and your mathematical proof.',
		approach:
			'The question asks for two separate kinds of evidence. Observational = what you saw and what the curve looks like. Mathematical = the ductility numbers you calculated, compared against published values for the same grade.',
		steps: [
			{
				description:
					'State the verdict: the black mild steel is ductile. It deformed permanently by a large amount before failing, rather than fracturing near its elastic limit.'
			},
			{
				description:
					'Observational evidence — what you saw: an obvious neck formed in the middle of the reduced section; the specimen visibly lengthened; the fracture surface was rough and fibrous (cup-and-cone with a shear lip) rather than flat and glassy; and the curve has a long plastic region with a clear yield point rather than a straight line to fracture.'
			},
			{
				description: 'Mathematical evidence — your own calculated numbers.',
				code: 'Reduction in area = 58.5 percent   (over half the cross-section)\nElongation        = 8.75 percent   (permanent, over a 130.3 mm gauge length)\nσ_TS / σ_y = 541 / 376 = 1.44   (44 percent work hardening after yield)'
			},
			{
				description:
					'Compare with published data for hot-rolled low carbon steel: yield roughly 205–250 MPa, UTS roughly 380–450 MPa, elongation roughly 20–30%, Brinell roughly 110–140 HB. Check the actual specification on page 4 of the handout for your bar and compare properly.',
				note: 'A brittle material would show near-zero reduction in area and near-zero elongation. 58.5% is unambiguous.'
			},
			{
				description:
					'Be honest about where your numbers do not match, and explain why — that is what earns discussion marks. Two worth raising: your measured strengths came out above the published range, and your 8.75% elongation came out below it because the gauge length used here is long compared with the ASTM E8 proportional gauge length, which dilutes the localised stretch at the neck over a longer base.'
			}
		]
	},
	{
		id: 'w0-lab8',
		title: 'Questions 2 and 3 — annealing, and black vs bright steel',
		problem:
			'(2) What does the term "annealing" mean in regard to work-hardened metals? (3) Why is mild steel sold commercially in both "black" and "bright" forms? State the differences and give examples of where each would be used.',
		approach:
			'Both answers must be at least half a page each and in your own words — the checklist says so explicitly, and this section is a plagiarism trap. Use the mechanism (what happens to the grains) rather than just the outcome, and cite the references given on the handout.',
		steps: [
			{
				description:
					'Q2, start with the problem annealing solves: cold working multiplies and tangles dislocations, so the metal work hardens — stronger and harder, but progressively less ductile until it cracks if you keep forming it.'
			},
			{
				description:
					'Q2, the process: heat above the recrystallisation temperature, hold at temperature, then cool slowly. New strain-free equiaxed grains nucleate and grow, replacing the distorted work-hardened grains.'
			},
			{
				description:
					'Q2, the outcome: strength and hardness fall, ductility and toughness recover, residual internal stresses are relieved, and the metal can be formed again. Annealing therefore reverses work hardening.'
			},
			{
				description:
					'Q3, black mild steel: hot rolled above the recrystallisation temperature then air cooled, so it does not work harden. It carries a dark blue-black iron-oxide mill scale, has slightly rounded edges, looser dimensional tolerance and a rougher finish, is softer and more ductile with a lower yield strength, and is the cheapest form.',
				code: 'Black - typical uses:\n  structural sections, beams, plate\n  RHS, angle, flat bar\n  brackets, welded frames, general fabrication'
			},
			{
				description:
					'Q3, bright mild steel: cold finished after hot rolling — cold drawn, cold rolled, or turned and polished. The cold work hardens it, so the yield strength and hardness are higher and the ductility lower. The surface is clean and bright with no scale, the tolerance is tight and the finish good, but it costs more and carries residual stresses from the cold work.',
				code: 'Bright - typical uses:\n  shafts, spindles, pins, dowels\n  bolts, studs, threaded rod\n  machined and turned components needing accurate size or good finish'
			},
			{
				description:
					'Q3, the commercial answer: they exist because the two markets want different things. Structural work wants cheap material at approximate size that will be welded and painted anyway; machine work wants accurate size, a good surface and higher strength straight from the bar, and will pay for the extra processing.'
			},
			{
				description:
					'Reference the sources the handout gives — the Interlloy page for bright 1020 and the MakeItFrom page for hot-rolled 1020 — in Harvard style, and paraphrase properly. Turnitin must come back under 15%.'
			}
		]
	},
	{
		id: 'w0-lab9',
		title: 'Tutorial questions 4–7 — yield points and hardness-to-strength',
		problem:
			'(4) Why is there an upper and lower yield point in the mild steel diagram? (5) What are typical hardness values for hot-rolled mild steel across different scales? (6) Can you estimate tensile strength from Brinell hardness? (7) A Brinell test on hot-rolled ASTM A36 plate with a 10 mm ball gives 132 HBW — estimate the UTS in MPa.',
		approach:
			'Question 4 is a mechanism question — answer it with dislocations, not with a description of the shape. Questions 6 and 7 are the same idea: hardness and tensile strength both measure resistance to plastic deformation, so they correlate.',
		steps: [
			{
				description:
					'Q4, the mechanism: interstitial carbon and nitrogen atoms diffuse to dislocations and pin them in place (Cottrell atmospheres). A raised stress is needed to tear the dislocations away from those solute clouds — that is the upper yield point.'
			},
			{
				description:
					'Q4, what happens next: once free of their atmospheres the dislocations glide at a lower stress, so the load immediately drops to the lower yield point. Yielding then spreads along the specimen as Lüders bands at roughly constant load, which is the flat bit after the dip.'
			},
			{
				description:
					'Q4, the practical consequence: the upper yield point depends on strain rate, specimen alignment and machine stiffness, so it is not reproducible. The lower yield point is stable, so it is the one that is quoted and used in design.'
			},
			{
				description: 'Q5, typical hardness of hot-rolled mild steel across scales.',
				code: 'Brinell     ~ 110-150 HB\nRockwell B  ~  60-80 HRB\nVickers     ~ 115-160 HV   (close to HB for soft steels)\nRockwell C  - not applicable, below the useful HRC range (~20 HRC)'
			},
			{
				description:
					'Q6, yes — approximately. Hardness is resistance to localised plastic deformation and tensile strength is resistance to general plastic deformation and fracture, so for steels they track each other. The standard empirical relation is UTS in MPa is about 3.45 times the Brinell number (about 500 × HB in psi). It holds to roughly ±10%, only within a material family, and hardness is a local surface measurement — so it is an estimate, not a substitute for a tensile test.'
			},
			{
				description: 'Q7, apply the correlation.',
				code: 'UTS ≈ 3.45 × HB\n    = 3.45 × 132\n    = 455.4\n    ≈ 455 MPa'
			},
			{
				description:
					'Sanity check Q7: 455 MPa sits at the top of the published 380–450 MPa range for hot-rolled A36/1020, which is exactly what you would expect from an approximate correlation — close enough to be useful, not close enough to design on.'
			}
		],
		fullSolution:
			'Q4  Upper yield point = stress to tear dislocations free of their carbon/nitrogen\n    Cottrell atmospheres. Lower yield point = stress at which the freed\n    dislocations glide. Lüders bands then propagate at constant load.\n    The lower value is used because it is reproducible.\n\nQ5  ~110-150 HB, ~60-80 HRB, ~115-160 HV. HRC not applicable (too soft).\n\nQ6  Yes, approximately: UTS (MPa) ≈ 3.45 × HB, for steels, to about ±10 percent.\n\nQ7  UTS ≈ 3.45 × 132 = 455 MPa',
		expectedOutput: 'Q7:  UTS ≈ 3.45 × 132 HBW = 455 MPa'
	},
	{
		id: 'w0-lab10',
		title: 'Writing it up — structure, tables and the traps',
		problem:
			'You have all your data. Assemble the report so it does not lose marks on presentation, and clear the assessment checklist.',
		approach:
			'Marks are DEDUCTED for missing structural items, and there are three hard rules that fail sections outright: no hand-written equations, third person past tense, and Turnitin under 15%. Work through the checklist literally.',
		steps: [
			{
				description: 'Build the skeleton in this order — every item is required, and missing ones cost marks.',
				code: '1. Title page (all details as required)\n2. Contents page\n3. Introduction\n4. Aim of the experiment\n5. Procedure\n6. Results, including calculations and all tables\n7. Discussion\n8. Questions\n9. Conclusion\n10. Appendices\n11. References'
			},
			{
				description:
					'Cover sheet must carry: report title, your name, student number, group, date due, actual submission date if different, RMIT University, program name and code, course name and code (PROC2097 Engineering Materials), and your teacher.'
			},
			{
				description:
					'Number every chapter heading (1.0, 1.1, 2.0 …), number and identify and reference every figure, table, diagram and image — including the load–extension graph — and add page numbers.'
			},
			{
				description:
					'Reproduce Tables 1–5 unaltered in format, then put ALL calculations in an appendix as evidence. Calculations must be typed with an equation editor. A photograph or image of hand-written equations is explicitly not acceptable and will cost you.'
			},
			{
				description:
					'Write the procedure and discussion in third person, past tense, in your own words — for a reader other than yourself. Do not copy any part of the handout except tables 1–5.',
				note: 'Any unreferenced text from a source scores NO MARKS for that section.'
			},
			{
				description:
					'Discussion must cover: how the samples behaved during testing and what happened to them, how the graph links to the mechanical behaviour, why the specimens are the size they are (read ASTM E8), the clamping method used, and how your calculated properties compare with the manufacturer specifications.'
			},
			{
				description: 'Conclusion must answer all five questions.',
				code: 'What have you learned from this experiment?\nHow well was the goal met?\nHow reliable is your result?\nWhat further predictions can you make from your findings?\nHow do you account for any inaccuracies, and how would you remedy them?'
			},
			{
				description:
					'For the inaccuracies answer, the strongest points are: crosshead displacement is not true specimen extension (so E from this graph is far too low — use an extensometer), loads were read by eye off a printed graph, only one specimen was tested so there is nothing to average, and mill scale and local variation scatter the hardness readings.'
			},
			{
				description:
					'Final pass: real references in Harvard style, everything word processed and printed, and Turnitin similarity index under 15%.'
			}
		]
	}
];

/** Lab walkthroughs keyed by module number. */
export const engMaterialsLabs: Record<number, LabExercise[]> = {
	0: engMaterialsLab1
};
