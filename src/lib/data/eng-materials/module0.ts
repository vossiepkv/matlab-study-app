import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m0Meta: ModuleMeta = {
	num: 0,
	title: 'Lab 1 — Tensile & Hardness Testing of Black Mild Steel',
	description:
		'Prep for the PROC2097 practical, which is demonstrated by the tutor while you observe and record. Covers what the tensile test and the Rockwell hardness test actually measure, the procedure you will watch on the Instron and the Wilson Rockwell machine, every number and observation you must write down on the day, all the formulas for Tables 1–5, and the discussion questions the report asks you to answer.',
	topics: [
		'Format: the tutor demonstrates — your job is to observe and record',
		'Aim: mechanical properties of hot-worked low plain carbon (mild) steel',
		'Why we tensile test — acceptance, design data, fabrication behaviour',
		'Load–extension curve vs stress–strain curve',
		'Tensile specimen geometry: plain ends, shoulders, reduced section, gauge length',
		'ASTM E8 and why specimen size is standardised',
		'Procedure Part 1: stamping, measuring d₀, punching the gauge length, testing',
		'After fracture: final gauge length in a Vee block, neck diameter',
		'Reading the load–extension graph: upper/lower yield point, F_max, fracture',
		'Elastic vs plastic deformation; elastic limit and yield strength',
		'Necking and why load falls after the maximum',
		'0.2% proof stress and when it is used instead of yield strength',
		'Ultimate tensile strength, percentage elongation, percentage reduction in area',
		'Young’s modulus as the slope of the elastic region',
		'Procedure Part 2: Rockwell hardness — calibration block, HRC and HRB scales',
		'Estimating tensile strength from Brinell hardness (UTS ≈ 3.45 × HB)',
		'Annealing and work hardening',
		'Black (hot-rolled) vs bright (cold-finished) mild steel',
		'Report structure, tables 1–5, and the assessment checklist'
	]
};

export const m0Cards: CardData[] = [
	// ---------------------------------------------------------------- aim & purpose
	{
		id: 'w0-c00',
		type: 'concept',
		front: 'How does this practical actually run, and what is YOUR job in it?',
		back: 'The tutor performs the tensile test and the hardness test — you observe. So your entire contribution to the report is made in the room: recording d₀, l₀, d_f, l_f, all six hardness readings, the equipment models and serial numbers, and written observations of how the specimen behaved and what the fracture looked like. Then get the load–extension graph onto your USB. None of it can be reconstructed afterwards.',
		hint: 'You are not operating anything — so note-taking IS the practical.'
	},
	{
		id: 'w0-c01',
		type: 'concept',
		front: 'What is the aim (objective) of this practical?',
		back: 'To determine the mechanical properties of hot-worked low plain carbon steel (black mild steel) specimens through tensile testing, and to measure the hardness of the same material with a Rockwell hardness tester.',
		hint: 'Two tests, one material: tensile properties + hardness.'
	},
	{
		id: 'w0-c02',
		type: 'list',
		front: 'Why is the tensile test done? (three purposes from the handout)',
		back: [
			'To provide data for acceptance or rejection of a sample of material against a specification',
			'To provide essential data for engineering design',
			'To provide data on the likely behaviour of a material during fabrication processes, e.g. pressing sheet metal into shape (a car door)'
		],
		hint: 'Accept/reject · design · fabrication.'
	},
	{
		id: 'w0-c03',
		type: 'concept',
		front: 'Why does the handout say purposes (b) and (c) are only PARTIALLY met by a tensile test?',
		back: 'Because in a real component the shape and the stress distribution can be quite different from the simple uniaxial stress in a tensile specimen. The tensile test tells you about the material, not about how stress is spread through your actual part.',
		hint: 'A test bar is not a car door.'
	},
	{
		id: 'w0-c04',
		type: 'concept',
		front: 'What is the difference between a load–extension curve and a stress–strain curve?',
		back: 'A load–extension curve is the raw machine output (force vs displacement) and depends on the size of the specimen. Dividing load by original area and extension by original length removes the size effect, giving a stress–strain curve that describes the material itself — so tensile data are better presented that way.',
		hint: 'One depends on specimen size, one does not.'
	},
	{
		id: 'w0-c05',
		type: 'concept',
		front: 'What is mild steel (low plain carbon steel)?',
		back: 'A ferrous alloy of iron and roughly 0.05–0.25% carbon with no significant alloying additions. It is cheap, ductile, easily formed and welded, has a clear yield point, and moderate strength — which is why it is the default structural steel.',
		hint: 'Plain = no alloying additions. Low carbon ≈ a quarter of one percent.'
	},
	{
		id: 'w0-c06',
		type: 'concept',
		front: 'What does "hot worked" (hot rolled) mean?',
		back: 'The steel was deformed to shape above its recrystallisation temperature. The grains recrystallise as it is worked, so it does not build up work hardening — it stays relatively soft and ductile, but the surface picks up a dark blue-black oxide mill scale and the dimensions are less precise.',
		hint: 'Worked hot → recrystallises as it deforms → no work hardening.'
	},

	// ---------------------------------------------------------------- specimen
	{
		id: 'w0-c07',
		type: 'list',
		front: 'Name the parts of a typical tensile test specimen.',
		back: [
			'Plain ends — the larger diameter that is gripped in the jaws',
			'Shoulders — the tapered transition into the thin section',
			'"Reduced" (parallel) section — the thin uniform middle where it is meant to break',
			'Gauge length — the marked length over which extension is measured',
			'Overall length and distance between shoulders'
		],
		hint: 'The diagram in the handout labels five features.'
	},
	{
		id: 'w0-c08',
		type: 'concept',
		front: 'Why does a tensile specimen have a thinner "reduced" parallel section in the middle?',
		back: 'Because stress = force ÷ area, the smallest area carries the highest stress, so yielding, necking and fracture are forced to happen in the middle. That keeps the failure away from the grip jaws and the shoulders, where clamping forces and stress concentrations would give a false result.',
		hint: 'Smallest area = highest stress = break where you want it to break.'
	},
	{
		id: 'w0-c09',
		type: 'concept',
		front: 'What is the gauge length, and how is it marked in this lab?',
		back: 'The gauge length is the reference length over which extension (and so strain) is measured — here it is the extremes of the parallel reduced section. You mark it with a centre punch, two marks, VERY lightly, and measure between them with a vernier caliper before testing.',
		hint: 'Two very light punch marks at the ends of the thin section.'
	},
	{
		id: 'w0-c10',
		type: 'concept',
		front: 'Why must the gauge-length punch marks be made only VERY lightly?',
		back: 'A deep punch mark is a notch. A notch is a stress concentration and a crack starter, so the specimen would fail early at the mark instead of in the middle of the gauge length, giving a falsely low strength.',
		hint: 'A deep mark is a stress raiser.'
	},
	{
		id: 'w0-c11',
		type: 'list',
		front: 'What are the three end types shown for tensile specimens?',
		back: ['Shouldered end', 'Threaded end', 'Pin end'],
		hint: 'How the specimen is held in the machine.'
	},
	{
		id: 'w0-c12',
		type: 'concept',
		front: 'What is ASTM E8 and why does the specimen size matter?',
		back: 'ASTM E8 is the standard test method for tension testing of metallic materials. It fixes the specimen geometry — in particular the gauge length as a set ratio of the diameter — so that percentage elongation measured in one lab can be compared with a result from another lab. Elongation is not a fixed material constant: quote it on a short gauge length and it looks bigger, on a long gauge length it looks smaller.',
		hint: 'Standardised geometry = comparable numbers. The checklist asks you to read E8.'
	},

	// ---------------------------------------------------------------- procedure part 1
	{
		id: 'w0-c13',
		type: 'concept',
		front: 'Step 1 of the procedure: what do you stamp on the specimen, where, and why?',
		back: 'Punch a letter or number identification mark on BOTH sections of the sample, on the larger diameter (the part gripped in the jaws), using the letter/number stamps provided. That way, after the specimen has been pulled apart, the two broken pieces can still be identified as one sample.',
		hint: 'Both halves, on the thick part, so you can pair the pieces after fracture.'
	},
	{
		id: 'w0-c14',
		type: 'concept',
		front: 'Why is the ID mark stamped on the plain end and not on the reduced section?',
		back: 'The reduced section is where the specimen has to yield and break. A stamped mark there would be a notch and a stress concentration, changing the result. The thick gripped end is not carrying the critical stress, so a mark there is harmless.',
		hint: 'Same reason the gauge marks must be light.'
	},
	{
		id: 'w0-c15',
		type: 'list',
		front: 'What FOUR dimensions go into Table 1 for the steel specimen?',
		back: [
			'd₀ — original diameter of the reduced section (mm)',
			'd_f — final diameter at the neck of the break (mm)',
			'l₀ — original gauge length (mm)',
			'l_f — final gauge length after fracture (mm)'
		],
		hint: 'Two diameters and two lengths — before and after.'
	},
	{
		id: 'w0-c16',
		type: 'concept',
		front: 'Which diameter do you measure before the test, and with what?',
		back: 'The diameter of the parallel reduced section, measured and recorded with digital vernier calipers. Take it in a few places / orientations and use the smallest or the average, because the bar is not perfectly round.',
		hint: 'The thin middle bit, with digital verniers.'
	},
	{
		id: 'w0-c17',
		type: 'concept',
		front: 'After fracture, how do you measure the final gauge length?',
		back: 'Support both broken pieces end to end in a "Vee" block so they are held straight and in line, then measure between the two original punch marks with the caliper. That gives l_f, and l_f − l₀ is the permanent elongation.',
		hint: 'Two halves, lined up in a Vee block.'
	},
	{
		id: 'w0-c18',
		type: 'concept',
		front: 'After fracture, where do you measure the diameter, and what does it give you?',
		back: 'At the neck — the narrowest point of the break. That gives d_f, and from it the final cross-sectional area A_f, which you need for the percentage reduction in area.',
		hint: 'The thinnest point, where it necked down.'
	},
	{
		id: 'w0-c19',
		type: 'concept',
		front: 'What must you take away from the Instron machine at the end of the test?',
		back: 'The load–extension (force–displacement) graph — copy it to your USB, or have the teacher email it to you. All the load values in Table 2 are read off that graph, and a numbered, identified copy of it must be included in your report.',
		hint: 'No graph, no Table 2, and marks deducted.'
	},
	{
		id: 'w0-c20',
		type: 'concept',
		front: 'What OH&S requirement does the handout state for the laboratory?',
		back: 'All students must observe appropriate OH&S requirements in the laboratory, and all shoes must be fully enclosed. (Tensile specimens release stored energy when they snap, so eye protection and standing clear of the machine apply too.)',
		hint: 'It is specific about footwear.'
	},
	{
		id: 'w0-c21',
		type: 'concept',
		front: 'What do you need to record about the EQUIPMENT for the report?',
		back: 'The name, model and serial numbers of the Instron tensile tester and the Wilson Rockwell hardness tester, the resolution of the digital vernier calipers, the indenters used, and the hardness calibration test-block details. Photos or diagrams as required. The checklist asks for this explicitly.',
		hint: 'Serial numbers and calibration details — write them down on the day.'
	},
	{
		id: 'w0-c22',
		type: 'concept',
		front: 'What does the checklist mean by "describe the method of work holding/clamping in the Instron"?',
		back: 'Explain how the specimen was held: the plain (larger diameter) ends were clamped in the machine’s wedge-action jaws, gripping only the thick ends so the grips do not damage or load the reduced section, and the specimen was aligned along the loading axis so it is pulled in pure tension without bending.',
		hint: 'Grip the thick ends, keep it axial.'
	},

	// ---------------------------------------------------------------- the curve
	{
		id: 'w0-c23',
		type: 'concept',
		front: 'What is the elastic region (OA) on the curve?',
		back: 'The region in which deformation is reversible with respect to loading — remove the load and the specimen springs back to its original length. On a stress–strain curve it is the initial straight line, and its slope is Young’s modulus.',
		hint: 'Reversible. Straight line. Springs back.'
	},
	{
		id: 'w0-c24',
		type: 'concept',
		front: 'State the difference between elastic and plastic deformation in one line each.',
		back: 'Elastic deformation disappears when the load is removed. Plastic deformation is permanent.',
		hint: 'The handout puts this in italics — it is a likely exam line.'
	},
	{
		id: 'w0-c25',
		type: 'concept',
		front: 'What is the elastic limit / yield strength (point A)?',
		back: 'The point at which permanent (plastic) deformation first occurs on loading. Below it the specimen springs back; above it, it stays stretched.',
		hint: 'The first permanent change of shape.'
	},
	{
		id: 'w0-c26',
		type: 'concept',
		front: 'Why does the handout say the measurement of point A depends on the sensitivity of the equipment used?',
		back: 'Because many materials do not show a sharp break away from the straight line — the deviation from linearity is gradual. A more sensitive machine detects the first departure earlier, so it reports a lower elastic limit. That ambiguity is exactly why proof stress was invented.',
		hint: 'No sharp corner → where you say it starts depends on how well you can see.'
	},
	{
		id: 'w0-c27',
		type: 'concept',
		front: 'Why does mild steel show an UPPER and a LOWER yield point?',
		back: 'Interstitial carbon and nitrogen atoms cluster around dislocations and pin them in place ("Cottrell atmospheres"). Extra stress is needed to tear the dislocations free — that peak is the upper yield point. Once free, they glide at a lower stress, so the load drops to the lower yield point, and yielding then spreads along the specimen as Lüders bands at roughly constant load.',
		hint: 'Solute atoms pin dislocations; breaking them loose needs a stress spike.'
	},
	{
		id: 'w0-c28',
		type: 'concept',
		front: 'Which yield point do you use for the yield load, and why?',
		back: 'The LOWER value. The upper yield point is very sensitive to strain rate, specimen alignment and machine stiffness, so it is not reproducible; the lower yield point is stable and is what design codes quote.',
		hint: 'The handout underlines "lower".'
	},
	{
		id: 'w0-c29',
		type: 'concept',
		front: 'What is necking, where does it begin, and why does the load fall afterwards?',
		back: 'Necking is a localised decrease in cross-sectional area. It begins at point C — the maximum load. After that, deformation concentrates in the neck; the area there shrinks faster than the material work hardens, so the force needed to keep stretching it falls, and extension continues at lower loads until fracture at point D.',
		hint: 'Load falls after the max not because the material got weaker, but because the area got smaller.'
	},
	{
		id: 'w0-c30',
		type: 'concept',
		front: 'What is the ultimate tensile strength (UTS / σ_TS)?',
		back: 'The maximum load reached during the test (point C) divided by the ORIGINAL cross-sectional area A₀. It is the highest engineering stress the material carries — and it is where necking starts.',
		hint: 'Max load ÷ original area — always original, never the necked area.'
	},
	{
		id: 'w0-c31',
		type: 'concept',
		front: 'What is 0.2% proof stress, and when do you use it?',
		back: 'The stress at which a permanent extension of 0.2% of the gauge length has occurred. You find it by drawing a line from 0.002 strain, parallel to the elastic part of the curve, and reading where it cuts the curve. You use it only when the material has NO definite yield point — for example stainless steels, aluminium and most non-ferrous alloys.',
		hint: 'Offset method. Only needed when there is no obvious yield point.'
	},
	{
		id: 'w0-c32',
		type: 'concept',
		front: 'For the black mild steel in Table 2, do you need to fill in the 0.2% proof load?',
		back: 'No — if a definite yield point IS visible on the graph you write "not required due to evident yield point" in the proof load cell. You only derive a proof load if no yield point is observed. A yield load cannot be determined if a yield point is not evident, and you never need both.',
		hint: 'The notes under Table 2 spell out all three cases.'
	},
	{
		id: 'w0-c33',
		type: 'concept',
		front: 'What is Young’s modulus, and where do you get it from the curve?',
		back: 'Young’s modulus E is stiffness — stress in the elastic region divided by strain in the elastic region, i.e. the slope of the straight-line part of the stress–strain curve. For steels it is about 200–210 GPa and it is barely changed by heat treatment or carbon content.',
		hint: 'The slope of the elastic line. Same for mild and hardened steel.'
	},
	{
		id: 'w0-c34',
		type: 'list',
		front: 'What evidence from this practical shows mild steel is DUCTILE?',
		back: [
			'A long plastic region on the curve after yielding, not an immediate break',
			'Obvious necking — the diameter fell from 5.7 mm to 3.67 mm',
			'A large percentage reduction in area (about 59%)',
			'Measurable permanent elongation of the gauge length',
			'A rough, fibrous cup-and-cone fracture surface rather than a flat shiny one'
		],
		hint: 'A brittle material would break near the elastic limit with no neck.'
	},
	{
		id: 'w0-c35',
		type: 'concept',
		front: 'How would a BRITTLE material’s curve differ from the mild steel curve?',
		back: 'It would be almost entirely the straight elastic line, fracturing at or just after the elastic limit with little or no plastic region, no yield point, no necking, near-zero elongation and near-zero reduction in area, and a flat granular fracture face. Cast iron and ceramics behave this way.',
		hint: 'Straight line, then bang.'
	},

	// ---------------------------------------------------------------- formulas
	{
		id: 'w0-c36',
		type: 'code',
		front: 'Formula: original cross-sectional area of a round specimen.',
		back: 'Square the diameter, multiply by π, divide by 4. Work in mm so the area comes out in mm² — then stress in N/mm² is already MPa.',
		code: 'A₀ = π d₀² / 4\nA₀ = π × (5.7)² / 4\nA₀ = 25.52 mm²',
		hint: 'π d² / 4, not π r² — unless you halve d first.'
	},
	{
		id: 'w0-c37',
		type: 'code',
		front: 'Formula: engineering stress. What are the units?',
		back: 'Force divided by the ORIGINAL cross-sectional area. 1 N/mm² = 1 MPa, so if you keep force in newtons and area in mm² the answer is in MPa with no conversion.',
		code: 'σ = F / A₀\nUnits: N/m² = pascals (Pa)\n1 N/mm² = 1 MPa',
		hint: 'N/mm² and MPa are the same number.'
	},
	{
		id: 'w0-c38',
		type: 'code',
		front: 'Formula: engineering strain. What are the units?',
		back: 'Change in length divided by the original length. Strain is dimensionless — mm ÷ mm — so it has no units. Multiply by 100 for a percentage.',
		code: 'ε = ΔL / L₀ = (l − l₀) / l₀\nUnits: none (dimensionless)',
		hint: 'A ratio of two lengths.'
	},
	{
		id: 'w0-c39',
		type: 'code',
		front: 'Formula: yield strength from the yield load.',
		back: 'Take the LOWER yield load in newtons from the graph and divide by the original cross-sectional area. Answer in MPa.',
		code: 'σ_y = F_y / A₀\nσ_y = 9600 N / 25.52 mm²\nσ_y = 376 MPa',
		hint: 'Lower yield load ÷ A₀.'
	},
	{
		id: 'w0-c40',
		type: 'code',
		front: 'Formula: ultimate tensile strength from the graph.',
		back: 'Maximum load reached during the test divided by the original cross-sectional area.',
		code: 'UTS = F_max / A₀\nUTS = 13 800 N / 25.52 mm²\nUTS = 541 MPa',
		hint: 'Peak of the curve ÷ original area.'
	},
	{
		id: 'w0-c41',
		type: 'code',
		front: 'Formula: percentage elongation.',
		back: 'The percentage increase in gauge length at fracture: final gauge length minus original, divided by original, times 100. It is a measure of ductility.',
		code: 'EL = 100 (l_f − l₀) / l₀\nEL = 100 (141.7 − 130.3) / 130.3\nEL = 8.75  (percent)',
		hint: 'Change in length over ORIGINAL length, ×100.'
	},
	{
		id: 'w0-c42',
		type: 'code',
		front: 'Formula: percentage reduction in area.',
		back: 'Original area minus final area at fracture, divided by the original area, times 100. Also a ductility measure, and usually a much bigger number than elongation because it is measured right at the neck.',
		code: 'RA = 100 (A₀ − A_f) / A₀\nRA = 100 (25.52 − 10.58) / 25.52\nRA = 58.5  (percent)',
		hint: 'A₀ − A_f over A₀. A₀ is the original area.'
	},
	{
		id: 'w0-c43',
		type: 'code',
		front: 'Formula: estimating tensile strength from Brinell hardness.',
		back: 'For steels there is an empirical correlation: UTS in MPa is roughly 3.45 times the Brinell hardness number. It is an estimate only (±10% or so), because hardness is a local surface measurement, but it is very useful for checking a material without destroying a part.',
		code: 'UTS (MPa) ≈ 3.45 × HB\nUTS ≈ 3.45 × 132\nUTS ≈ 455 MPa',
		hint: '3.45 × HB, in MPa. (In psi it is 500 × HB.)'
	},
	{
		id: 'w0-c44',
		type: 'code',
		front: 'Formula: Young’s modulus from the elastic region.',
		back: 'Pick two points on the straight part of the stress–strain curve and divide the change in stress by the change in strain. Answer usually quoted in GPa (1 GPa = 1000 MPa).',
		code: 'E = stress in elastic region / strain in elastic region\nE = (σ₂ − σ₁) / (ε₂ − ε₁)\nSteel: E ≈ 200–210 GPa',
		hint: 'Rise over run on the straight bit.'
	},

	// ---------------------------------------------------------------- hardness
	{
		id: 'w0-c45',
		type: 'concept',
		front: 'What is hardness, and what does a hardness test actually measure?',
		back: 'Hardness is a material’s resistance to localised plastic deformation — to being permanently dented or scratched. An indentation test presses a defined indenter with a defined load into the surface and measures how big or how deep the permanent dent is: a smaller/shallower dent means a harder material.',
		hint: 'Resistance to being permanently dented.'
	},
	{
		id: 'w0-c46',
		type: 'concept',
		front: 'How does a Rockwell hardness test work?',
		back: 'A minor (preload) force seats the indenter on the surface and sets the zero datum. The major load is then applied and removed, and the machine measures the PERMANENT increase in indentation DEPTH left behind. That depth is converted into a Rockwell number directly on the dial or display — no optical measurement of the dent is needed, which is why it is fast.',
		hint: 'Depth-based, two loads, reads out directly.'
	},
	{
		id: 'w0-c47',
		type: 'concept',
		front: 'What indenter and load does the HRB scale use, and what is it for?',
		back: 'Rockwell B uses a 1.6 mm (1/16 inch) diameter hardened steel ball with a 100 kgf major load. It is the scale for softer materials — mild and low carbon steels, annealed steels, brass, aluminium alloys. In this lab the black mild steel is tested on HRB (Table 5).',
		hint: 'B = Ball, 100 kg, 1.6 mm.'
	},
	{
		id: 'w0-c48',
		type: 'concept',
		front: 'What indenter and load does the HRC scale use, and what is it for?',
		back: 'Rockwell C uses a 120° diamond cone ("brale") indenter with a 150 kgf major load. It is for hard materials — hardened and tempered tool steels, case-hardened surfaces. In this lab the 150 kg diamond indenter is used on the certified test block for the calibration check (Table 4).',
		hint: 'C = Cone (diamond), 150 kg.'
	},
	{
		id: 'w0-c49',
		type: 'concept',
		front: 'Why would you use HRB and not HRC on mild steel?',
		back: 'Mild steel is too soft for the C scale. A diamond cone under 150 kg would sink in too deeply, pushing the reading below the useful part of the C scale (roughly HRC 20 and up), where it is inaccurate. The ball indenter with 100 kg keeps the reading in the reliable middle of the B scale.',
		hint: 'Each scale has a valid range — too soft for C.'
	},
	{
		id: 'w0-c50',
		type: 'concept',
		front: 'Why do you run a calibration check on a certified test block first (Table 4)?',
		back: 'To prove the machine is reading correctly before you trust any result. You indent a block of known certified hardness three times; if the average matches the block’s stated value within tolerance the machine is sound. Without this your specimen readings are unverifiable, and the checklist requires the block results and its serial number in the report.',
		hint: 'Check the instrument against a known answer before measuring an unknown.'
	},
	{
		id: 'w0-c51',
		type: 'concept',
		front: 'Why take THREE hardness readings and average them — and how do you write the average?',
		back: 'Because hardness is a very local measurement: surface scale, decarburisation, roughness and grain-to-grain variation all scatter individual readings, so three tests and an average are more representative. The handout requires the average as an INTEGER — e.g. readings of 47, 47 and 48 average to 47, not 47.33333.',
		hint: 'Three tests, integer average. 47 — not 47.33333.'
	},
	{
		id: 'w0-c52',
		type: 'list',
		front: 'What surface and spacing rules must you follow for a valid Rockwell indentation?',
		back: [
			'The surface must be clean, flat and free of mill scale, rust, oil and grease',
			'The specimen must sit firmly on the anvil with no rocking or springing',
			'Indent at least 3 indent diameters away from any other indent',
			'Indent at least 2.5 diameters from the edge of the specimen',
			'The material must be thick enough that no mark shows on the underside (at least 10× the indent depth)'
		],
		hint: 'Clean, flat, firmly supported, well spaced, thick enough.'
	},
	{
		id: 'w0-c53',
		type: 'concept',
		front: 'Why does black mild steel need surface preparation before a hardness test?',
		back: 'Hot-rolled black steel carries a hard, brittle iron-oxide mill scale, and the surface layer under it may be decarburised (lower carbon, so softer). Either one gives a false reading, so the scale is ground or filed off and the surface cleaned before indenting.',
		hint: 'Mill scale and a decarburised skin both lie to you.'
	},
	{
		id: 'w0-c54',
		type: 'list',
		front: 'Typical hardness of hot-rolled mild steel across the different scales.',
		back: [
			'Brinell: roughly 110–150 HB',
			'Rockwell B: roughly 60–80 HRB',
			'Vickers: roughly 115–160 HV (close to HB for soft steels)',
			'Rockwell C: not appropriate — the material is below the useful HRC range (~HRC 20)'
		],
		hint: 'Tutorial question 5. Note HRC does not apply.'
	},
	{
		id: 'w0-c55',
		type: 'concept',
		front: 'Can you estimate the tensile strength of mild steel from its Brinell hardness?',
		back: 'Yes, approximately. Both hardness and tensile strength depend on resistance to plastic deformation, so for steels UTS (MPa) ≈ 3.45 × HB. It is an empirical correlation, typically within about ±10%, and it does NOT hold across different material families — but it is very handy because a hardness test is quick and essentially non-destructive.',
		hint: 'Yes — same underlying property, empirical constant 3.45.'
	},

	// ---------------------------------------------------------------- discussion questions
	{
		id: 'w0-c56',
		type: 'concept',
		front: 'Q2: What does "annealing" mean in regard to work-hardened metals?',
		back: 'Annealing is heating the metal above its recrystallisation temperature, holding it there, then cooling it slowly. New strain-free equiaxed grains grow and replace the distorted, dislocation-packed grains produced by cold working. The result reverses work hardening: strength and hardness drop, ductility and toughness recover, and internal residual stresses are relieved so it can be formed further.',
		hint: 'Heat, hold, slow cool → recrystallise → soft and ductile again.'
	},
	{
		id: 'w0-c57',
		type: 'concept',
		front: 'What is work hardening (strain hardening)?',
		back: 'When a metal is plastically deformed cold, dislocations multiply and tangle, and it becomes progressively harder to move them. So the metal gets stronger and harder as you deform it — but less ductile, until it eventually cracks. It is the rising part of the curve between yielding and the maximum load.',
		hint: 'Dislocations pile up and get in each other’s way.'
	},
	{
		id: 'w0-c58',
		type: 'list',
		front: 'Q3: How is BLACK mild steel made and what is it used for?',
		back: [
			'Hot rolled above the recrystallisation temperature, then air cooled',
			'Dark blue-black iron-oxide mill scale surface, slightly rounded edges',
			'Looser dimensional tolerance and a rougher surface finish',
			'Softer, more ductile, lower yield strength; cheapest form',
			'Used for structural sections, plate, RHS/angle, brackets, welded frames and general fabrication where finish and precise size do not matter'
		],
		hint: 'Hot rolled → scale → cheap → structural.'
	},
	{
		id: 'w0-c59',
		type: 'list',
		front: 'Q3: How is BRIGHT mild steel made and what is it used for?',
		back: [
			'Cold finished — cold drawn, cold rolled or turned and polished after hot rolling',
			'Clean bright silver surface with no mill scale',
			'Cold working work hardens it: higher yield strength and hardness, lower ductility',
			'Much tighter dimensional tolerance and a good surface finish, but more expensive and carries residual stresses',
			'Used for shafts, pins, bolts, studs, machine parts and anything needing accurate size or a good finish straight from the bar'
		],
		hint: 'Cold finished → bright, accurate, stronger, dearer → machine parts.'
	},
	{
		id: 'w0-c60',
		type: 'concept',
		front: 'Q2 (tutorial): How does the mild steel curve differ from a stainless steel curve?',
		back: 'Mild steel shows a sharp yield point with a distinct upper and lower yield, then work hardens to a moderate UTS. Austenitic stainless steel has NO defined yield point — the curve rolls over smoothly, so a 0.2% proof stress must be used — and it work hardens much more strongly, reaching a higher UTS with far greater elongation (often 40–60%).',
		hint: 'Sharp yield point vs smooth curve needing proof stress.'
	},
	{
		id: 'w0-c61',
		type: 'concept',
		front: 'Q3 (tutorial): How do you find the yield stress of the three stainless steels by the offset method?',
		back: 'For each curve, measure the slope of its initial straight (elastic) portion. Mark 0.002 (0.2%) on the strain axis, draw a line from there parallel to that elastic slope, and read the stress where it intersects the curve. Typical published values: austenitic ≈ 215–300 MPa, ferritic ≈ 310–380 MPa, duplex ≈ 450–600 MPa — duplex highest, austenitic lowest.',
		hint: 'Offset 0.002, draw parallel to the elastic line, read the crossing point.'
	},
	{
		id: 'w0-c62',
		type: 'list',
		front: 'Published properties of hot-rolled low carbon (1020 / A36-type) steel to compare your results against.',
		back: [
			'Yield strength: roughly 205–250 MPa (grade dependent)',
			'Tensile strength: roughly 380–450 MPa',
			'Elongation at break: roughly 20–30%',
			'Young’s modulus: about 200 GPa',
			'Brinell hardness: roughly 110–140 HB',
			'Always check the actual manufacturer data sheet for YOUR bar — page 4 of the handout lists the specification you must compare against'
		],
		hint: 'The report asks you to compare measured vs manufacturer specification.'
	},

	// ---------------------------------------------------------------- report
	{
		id: 'w0-c63',
		type: 'list',
		front: 'What is the required structure of the lab report?',
		back: [
			'1. Title page with all required details',
			'2. Contents page',
			'3. Introduction',
			'4. Aim of the experiment',
			'5. Procedure',
			'6. Results, including calculations and all tables/graphs/diagrams',
			'7. Discussion',
			'8. Questions',
			'9. Conclusion',
			'10. Appendices',
			'11. References'
		],
		hint: 'Marks are DEDUCTED if any item is missing.'
	},
	{
		id: 'w0-c64',
		type: 'list',
		front: 'What must appear on the cover sheet of the report?',
		back: [
			'Title of the report',
			'Your name and student number',
			'Group',
			'Date due AND actual date of submission if different',
			'RMIT University',
			'Program name and code',
			'Course name and code (PROC2097 Engineering Materials)',
			'The teacher of your class'
		],
		hint: 'Page 1 of the handout lists every item.'
	},
	{
		id: 'w0-c65',
		type: 'list',
		front: 'What are the writing rules for this report?',
		back: [
			'Word processed and printed — NOT hand written, and that includes all equations',
			'Use an equation editor; photos of hand-written equations are not accepted',
			'Written in third person and past tense',
			'Concise, simple and to the point, in your own words',
			'Written for a reader other than yourself',
			'Harvard style referencing with real references',
			'Turnitin similarity index under 15%',
			'Do not copy any part of the handout except tables 1–5'
		],
		hint: 'Third person, past tense, equation editor, under 15%.'
	},
	{
		id: 'w0-c66',
		type: 'list',
		front: 'What goes in each of the five tables?',
		back: [
			'Table 1 — measured d₀, d_f, l₀, l_f for the specimen',
			'Table 2 — loads read from the graph: yield load F_y, 0.2% proof load, maximum load F_max (in newtons)',
			'Table 3 — calculated A₀, A_f, σ_y, σ_TS, % elongation, % reduction in area',
			'Table 4 — hardness machine calibration on the test block (150 kg diamond, HRC): 3 tests + integer average',
			'Table 5 — hardness of the black mild steel (100 kg, 1.6 mm ball, HRB): 3 tests + integer average'
		],
		hint: 'Measured → loads → calculated → calibration → specimen hardness.'
	},
	{
		id: 'w0-c67',
		type: 'list',
		front: 'What five questions must the CONCLUSION answer?',
		back: [
			'What have you learned from this experiment?',
			'How well was the goal met?',
			'How reliable is your result?',
			'What further predictions can you make from your findings?',
			'How do you account for any inaccuracies, and how would you remedy them?'
		],
		hint: 'Learned · goal met · reliability · predictions · inaccuracies.'
	},
	{
		id: 'w0-c68',
		type: 'list',
		front: 'What are the main sources of inaccuracy in this experiment?',
		back: [
			'The machine records crosshead displacement, not true specimen extension — grip slip and machine compliance inflate it, so Young’s modulus from this graph is far too low unless an extensometer is used',
			'Reading loads by eye off a printed graph, and the resolution of the vernier calipers',
			'The bar is not perfectly round and the gauge length punch marks are not perfectly placed',
			'Only ONE tensile specimen was tested, so there is no repeat to average',
			'Elongation is diluted if measured over a long gauge length instead of the ASTM E8 proportional length',
			'Mill scale, surface roughness and local grain variation scatter the hardness readings'
		],
		hint: 'This answers the "how do you account for inaccuracies" conclusion question.'
	},
	{
		id: 'w0-c69',
		type: 'concept',
		front: 'Why is the machine displacement at fracture (about 13.7 mm) bigger than the permanent elongation (11.4 mm)?',
		back: 'Two reasons. First, the crosshead travel includes elastic stretch of the specimen, the grips and the machine frame, which all spring back the instant the specimen snaps. Second, part of the travel is grip take-up and machine compliance, which was never specimen extension at all. Only the permanent plastic stretch is left to measure between the punch marks afterwards.',
		hint: 'Elastic recovery plus machine compliance.'
	},
	{
		id: 'w0-c70',
		type: 'concept',
		front: 'The tutor is running the test, so what is the most important thing for you to do during the lab?',
		back: 'Write everything down as it happens, because that is your only job and nothing here can be recovered later. Numbers: d₀, l₀, d_f, l_f, and all three hardness readings for both Table 4 and Table 5. Details: machine and caliper models and serial numbers, indenters, test-block serial number and stated hardness. Observations in prose: how the specimen behaved at each stage, whether a yield point showed on the live graph, and what the fracture surface looked like. Then get the load–extension graph onto your USB before you leave.',
		hint: 'Numbers, equipment details, written observations, and the graph file.'
	}
];

export const m0Quiz: QuizData[] = [
	{
		id: 'w0-q01',
		type: 'multiple-choice',
		question: 'What material is being tested in this practical?',
		options: [
			'Hot-worked low plain carbon steel (black mild steel)',
			'Cold-drawn bright stainless steel',
			'Grey cast iron',
			'Annealed aluminium alloy'
		],
		correctIndex: 0,
		explanation:
			'The experiment title is "Tensile and Hardness Testing of Black Mild Steel" and the aim is the mechanical properties of hot-worked low plain carbon steel.'
	},
	{
		id: 'w0-q02',
		type: 'multiple-choice',
		question: 'Why are tensile results better presented as a stress–strain curve than a load–extension curve?',
		options: [
			'Because load and extension depend on the specimen size, while stress and strain describe the material',
			'Because stress–strain curves are always straight lines',
			'Because the machine cannot measure load accurately',
			'Because strain is easier to measure than extension'
		],
		correctIndex: 0,
		explanation:
			'Dividing load by original area and extension by original length removes the size effect, so the curve describes the material rather than that particular bar.'
	},
	{
		id: 'w0-q03',
		type: 'multiple-choice',
		question: 'Why is the ID letter stamped on the LARGER diameter of both halves of the specimen?',
		options: [
			'So the two broken pieces can still be identified as one sample, without notching the section that must break',
			'So the machine can read the sample number automatically',
			'Because the reduced section is too small to stamp',
			'So the specimen grips more tightly in the jaws'
		],
		correctIndex: 0,
		explanation:
			'Both halves are marked so the pieces can be paired after fracture. The mark goes on the gripped end because a stamp on the reduced section would be a stress concentration and would change the result.'
	},
	{
		id: 'w0-q04',
		type: 'multiple-choice',
		question: 'The gauge-length marks must be punched "very lightly". Why?',
		options: [
			'A deep punch mark is a notch and stress concentration that would start a crack early',
			'Deep marks are harder to see with a caliper',
			'The punch would blunt on the hard steel',
			'Deep marks would change the specimen’s density'
		],
		correctIndex: 0,
		explanation:
			'A deep mark acts as a stress raiser, so the specimen would fail at the mark instead of in the gauge length, giving a falsely low strength.'
	},
	{
		id: 'w0-q05',
		type: 'multiple-choice',
		question: 'How is the final gauge length measured after the specimen has fractured?',
		options: [
			'Support both broken pieces end to end in a Vee block and measure between the original punch marks',
			'Measure one half and double it',
			'Read it off the machine’s displacement axis',
			'Weld the two halves together and measure'
		],
		correctIndex: 0,
		explanation:
			'The Vee block holds the two pieces straight and in line so the caliper measurement between the original punch marks gives the true final gauge length.'
	},
	{
		id: 'w0-q06',
		type: 'multiple-choice',
		question: 'Where do you measure the final diameter, d_f?',
		options: [
			'At the neck — the narrowest point of the break',
			'At the plain gripped end',
			'Halfway along the reduced section',
			'At the shoulder'
		],
		correctIndex: 0,
		explanation:
			'd_f is measured at the neck, because A_f from that diameter is what the percentage reduction in area is based on.'
	},
	{
		id: 'w0-q07',
		type: 'multiple-choice',
		question: 'Elastic deformation is best described as:',
		options: [
			'Deformation that disappears when the load is removed',
			'Deformation that is permanent',
			'Deformation that only happens after necking',
			'Deformation caused by heating'
		],
		correctIndex: 0,
		explanation:
			'Elastic deformation disappears when load is removed; plastic deformation is permanent. The handout italicises both statements.'
	},
	{
		id: 'w0-q08',
		type: 'multiple-choice',
		question: 'Why does mild steel show both an upper and a lower yield point?',
		options: [
			'Interstitial carbon and nitrogen atoms pin dislocations, so extra stress is needed to tear them free',
			'The machine loses grip and re-grips the specimen',
			'The specimen changes crystal structure at yield',
			'The cross-sectional area suddenly increases'
		],
		correctIndex: 0,
		explanation:
			'Solute atoms form Cottrell atmospheres that pin dislocations. Breaking them loose needs the upper yield stress; once moving they glide at the lower yield stress, and yielding spreads as Lüders bands.'
	},
	{
		id: 'w0-q09',
		type: 'multiple-choice',
		question: 'Which yield value do you use as the yield load, and why?',
		options: [
			'The lower yield point, because it is reproducible and not sensitive to strain rate or alignment',
			'The upper yield point, because it is the higher and therefore safer number',
			'The average of the two',
			'Whichever is easier to read off the graph'
		],
		correctIndex: 0,
		explanation:
			'The handout underlines that the lower value is used. The upper yield point varies with strain rate, alignment and machine stiffness, so it is not reliable.'
	},
	{
		id: 'w0-q10',
		type: 'multiple-choice',
		question: 'Necking begins at which point on the curve?',
		options: [
			'The maximum load (point C)',
			'The elastic limit (point A)',
			'The lower yield point',
			'The moment of fracture (point D)'
		],
		correctIndex: 0,
		explanation:
			'Necking is a localised decrease in cross-section that begins at the maximum load. After that the area shrinks faster than the material work hardens, so extension continues at falling load until fracture at D.'
	},
	{
		id: 'w0-q11',
		type: 'multiple-choice',
		question: 'When do you need to calculate a 0.2% proof stress?',
		options: [
			'Only when the material has NO definite yield point',
			'Always, for every tensile test',
			'Only for materials that show a sharp yield point',
			'Only when the specimen breaks outside the gauge length'
		],
		correctIndex: 0,
		explanation:
			'Proof stress replaces yield strength when there is no clear yield point. If the mild steel graph shows an evident yield point you write "not required due to evident yield point" in that cell of Table 2.'
	},
	{
		id: 'w0-q12',
		type: 'fill-blank',
		question: 'Calculate the original cross-sectional area A₀ for the specimen, in mm² to 2 decimal places.',
		code: 'd₀ = 5.7 mm\nA₀ = π d₀² / 4',
		answer: '25.52',
		acceptableAnswers: ['25.52', '25.52 mm2', '25.52 mm²', '25.5', '25.518', '25.52mm2'],
		explanation: 'A₀ = π × 5.7² / 4 = π × 32.49 / 4 = π × 8.1225 = 25.52 mm².'
	},
	{
		id: 'w0-q13',
		type: 'fill-blank',
		question: 'Calculate the final cross-sectional area A_f at the neck, in mm² to 2 decimal places.',
		code: 'd_f = 3.67 mm\nA_f = π d_f² / 4',
		answer: '10.58',
		acceptableAnswers: ['10.58', '10.58 mm2', '10.58 mm²', '10.6', '10.579', '10.58mm2'],
		explanation: 'A_f = π × 3.67² / 4 = π × 13.4689 / 4 = π × 3.3672 = 10.58 mm².'
	},
	{
		id: 'w0-q14',
		type: 'fill-blank',
		question: 'Calculate the percentage elongation. Give the number only, to 2 decimal places.',
		code: 'l₀ = 130.3 mm\nl_f = 141.7 mm\nEL = 100 (l_f − l₀) / l₀',
		answer: '8.75',
		acceptableAnswers: ['8.75', '8.75%', '8.7', '8.749', '8.8'],
		explanation: 'EL = 100 × (141.7 − 130.3) / 130.3 = 100 × 11.4 / 130.3 = 8.75%.'
	},
	{
		id: 'w0-q15',
		type: 'fill-blank',
		question: 'Calculate the percentage reduction in area. Give the number only, to 1 decimal place.',
		code: 'A₀ = 25.52 mm²\nA_f = 10.58 mm²\nRA = 100 (A₀ − A_f) / A₀',
		answer: '58.5',
		acceptableAnswers: ['58.5', '58.5%', '58.54', '58.6', '59'],
		explanation:
			'RA = 100 × (25.52 − 10.58) / 25.52 = 100 × 14.94 / 25.52 = 58.5%. Note it is much larger than the 8.75% elongation because it is measured right at the neck.'
	},
	{
		id: 'w0-q16',
		type: 'fill-blank',
		question: 'The maximum load read from the graph is 13.8 kN. Calculate the ultimate tensile strength in MPa, to the nearest whole number.',
		code: 'F_max = 13.8 kN = 13 800 N\nA₀ = 25.52 mm²\nUTS = F_max / A₀',
		answer: '541',
		acceptableAnswers: ['541', '541 MPa', '540', '540.8', '541MPa'],
		explanation:
			'UTS = 13 800 / 25.52 = 540.8 ≈ 541 MPa. Keeping force in newtons and area in mm² gives the answer directly in MPa, because 1 N/mm² = 1 MPa.'
	},
	{
		id: 'w0-q17',
		type: 'fill-blank',
		question: 'The lower yield load read from the graph is 9.6 kN. Calculate the yield strength in MPa, to the nearest whole number.',
		code: 'F_y = 9.6 kN = 9600 N\nA₀ = 25.52 mm²\nσ_y = F_y / A₀',
		answer: '376',
		acceptableAnswers: ['376', '376 MPa', '376MPa', '375', '376.2'],
		explanation: 'σ_y = 9600 / 25.52 = 376 MPa, using the LOWER yield load because it is the reproducible one.'
	},
	{
		id: 'w0-q18',
		type: 'fill-blank',
		question: 'A Brinell test on hot-rolled A36 mild steel gives 132 HBW. Estimate the UTS in MPa to the nearest whole number.',
		code: 'UTS (MPa) ≈ 3.45 × HB\nHB = 132',
		answer: '455',
		acceptableAnswers: ['455', '455 MPa', '455MPa', '455.4', '456'],
		explanation:
			'UTS ≈ 3.45 × 132 = 455 MPa. This is an empirical correlation for steels, good to roughly ±10%.'
	},
	{
		id: 'w0-q19',
		type: 'multiple-choice',
		question: 'Which indenter and load are used for the black mild steel hardness test in Table 5?',
		options: [
			'1.6 mm ball indenter with a 100 kg load (HRB)',
			'Diamond cone indenter with a 150 kg load (HRC)',
			'10 mm ball indenter with a 3000 kg load (HBW)',
			'Diamond pyramid with a 30 kg load (HV)'
		],
		correctIndex: 0,
		explanation:
			'Table 5 specifies a 100 kg load with a 1.6 mm diameter ball indenter, reading on the HRB scale. Table 4 uses the 150 kg diamond indenter on the certified test block for the calibration check.'
	},
	{
		id: 'w0-q20',
		type: 'multiple-choice',
		question: 'Why is HRC not appropriate for mild steel?',
		options: [
			'Mild steel is too soft, so the diamond sinks in too far and the reading falls below the reliable HRC range',
			'The diamond indenter would be damaged by mild steel',
			'HRC only works on non-ferrous metals',
			'HRC requires a polished mirror finish that mild steel cannot take'
		],
		correctIndex: 0,
		explanation:
			'Each Rockwell scale has a valid range. Mild steel sits below about HRC 20 where the C scale is inaccurate, so the softer-material B scale with a ball indenter is used instead.'
	},
	{
		id: 'w0-q21',
		type: 'multiple-choice',
		question: 'Your three hardness readings are 71, 72 and 72 HRB. What do you write as the average?',
		options: ['72', '71.666667', '71.67', '71.7'],
		correctIndex: 0,
		explanation:
			'The handout requires the average as an integer value — its own example is that 47, 47 and 48 average to 47, NOT 47.33333. (71+72+72)/3 = 71.67, which rounds to 72.'
	},
	{
		id: 'w0-q22',
		type: 'multiple-choice',
		question: 'Why is a calibration check on a certified test block done before testing the specimen?',
		options: [
			'To prove the machine reads correctly against a known hardness before any unknown is measured',
			'To warm the machine up',
			'To blunt the indenter so it does not scratch the specimen',
			'Because the standard requires the test block to be harder than the specimen'
		],
		correctIndex: 0,
		explanation:
			'A certified block has a stated hardness. If the machine reproduces it within tolerance the readings that follow can be trusted, and the checklist requires the block results and serial number in Table 4.'
	},
	{
		id: 'w0-q23',
		type: 'multiple-choice',
		question: 'Is the mild steel in this test ductile or brittle, and what is the strongest single piece of evidence?',
		options: [
			'Ductile — the diameter necked from 5.7 mm to 3.67 mm, a reduction in area of about 59%',
			'Brittle — it fractured at 13.7 mm displacement',
			'Brittle — the load fell after the maximum',
			'Ductile — Young’s modulus is about 200 GPa'
		],
		correctIndex: 0,
		explanation:
			'Massive necking and about 59% reduction in area, plus a long plastic region and permanent elongation, are direct evidence of ductility. A falling load after the maximum is a consequence of necking, not brittleness, and E is the same for brittle and ductile steels.'
	},
	{
		id: 'w0-q24',
		type: 'multiple-choice',
		question: 'What does annealing do to a work-hardened metal?',
		options: [
			'Recrystallises it into new strain-free grains — softer, more ductile, residual stresses relieved',
			'Hardens and strengthens it further',
			'Increases its carbon content',
			'Raises its Young’s modulus'
		],
		correctIndex: 0,
		explanation:
			'Heating above the recrystallisation temperature, holding, then slow cooling grows new equiaxed grains that replace the distorted work-hardened ones — reversing work hardening and restoring formability.'
	},
	{
		id: 'w0-q25',
		type: 'multiple-choice',
		question: 'Which statement correctly contrasts black and bright mild steel?',
		options: [
			'Black is hot rolled with mill scale and looser tolerances; bright is cold finished, so it is work hardened, more accurate and dearer',
			'Black is cold drawn and stronger; bright is hot rolled and softer',
			'Black contains more carbon than bright steel',
			'Black is painted black; bright is polished, but they are otherwise identical'
		],
		correctIndex: 0,
		explanation:
			'Black = hot rolled above recrystallisation temperature: blue-black oxide scale, cheap, softer, structural use. Bright = cold finished: clean surface, tight tolerance, work hardened so higher yield and hardness with less ductility, used for shafts, pins and machined parts.'
	},
	{
		id: 'w0-q26',
		type: 'multiple-choice',
		question: 'Why would Young’s modulus calculated from this machine’s force–displacement graph be far too low?',
		options: [
			'The displacement axis is crosshead travel, which includes grip take-up and machine compliance, not just specimen extension',
			'The load cell under-reads at low force',
			'Young’s modulus cannot be obtained from a tensile test',
			'The specimen was too short'
		],
		correctIndex: 0,
		explanation:
			'Crosshead displacement over-states specimen extension, so the apparent strain is too big and E comes out much lower than the true ~200 GPa. An extensometer or strain gauge on the gauge length is needed for a valid E — a good point for the inaccuracies section of your conclusion.'
	},
	{
		id: 'w0-q27',
		type: 'multiple-choice',
		question: 'What must you make sure you leave the lab with?',
		options: [
			'The load–extension graph file, all raw measurements, and the machine/indenter/test-block serial numbers',
			'Just the broken specimen',
			'A photograph of the handout',
			'The average hardness only'
		],
		correctIndex: 0,
		explanation:
			'Table 2 comes entirely off the graph, and the checklist requires equipment details, serial numbers and calibration data. None of it can be reconstructed afterwards.'
	},
	{
		id: 'w0-q28',
		type: 'multiple-choice',
		question: 'Which of these breaks the report rules?',
		options: [
			'Including a photograph of neatly hand-written calculations',
			'Writing the procedure in third person and past tense',
			'Reproducing tables 1–5 from the handout in your results section',
			'Referencing the manufacturer’s data sheet in Harvard style'
		],
		correctIndex: 0,
		explanation:
			'Calculations must be word processed with an equation editor — a photo or image of hand-written equations is explicitly not acceptable. Tables 1–5 are the only part of the handout you may reproduce.'
	}
];
