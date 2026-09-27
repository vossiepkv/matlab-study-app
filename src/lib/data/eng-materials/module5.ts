import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m5Meta: ModuleMeta = {
	num: 5,
	title: 'Portland Cement',
	description:
		'What Portland cement is and how it is made: raw materials, the kiln and clinker, the four main compounds (C₃S, C₂S, C₃A, C₄AF), fineness and how it is measured, specific gravity, hydration and setting, soundness, the water–cement ratio, water impurities, and the five standard cement types.',
	topics: [
		'History: Joseph Aspdin, 1824, Isle of Portland',
		'What Portland cement concrete is made of',
		'Raw materials: calcareous and argillaceous',
		'Manufacture: crushing, grinding (wet or dry), kiln, clinker, gypsum',
		'The four main compounds: C₃S, C₂S, C₃A, C₄AF',
		'Minor compounds and alkalis (Na₂O, K₂O)',
		'Fineness and surface area',
		'Measuring fineness: Blaine, Wagner turbidimeter, 0.045 mm sieve',
		'Specific gravity (≈ 3.15) and bulk density',
		'Hydration: reactions, mechanisms and steps',
		'Setting: C-S-H gel, initial set, final set',
		'Evaluating hydration in hardened concrete',
		'Soundness and the autoclave expansion test',
		'Water–cement ratio and compressive strength',
		'Effect of water impurities',
		'Types I–V of Portland cement and their uses'
	]
};

export const m5Cards: CardData[] = [
	{
		id: 'w5-c01',
		type: 'concept',
		front: 'Who patented Portland cement, when, and where does the name come from?',
		back: 'Joseph Aspdin patented Portland cement in 1824. It is named after the limestone cliffs on the Isle of Portland in England.',
		hint: 'An island in England, early 1800s.'
	},
	{
		id: 'w5-c02',
		type: 'concept',
		front: 'If someone just says "concrete", what type of concrete do they mean?',
		back: 'Portland cement concrete. It is so common that, unless another type is named, "concrete" is always taken to mean Portland cement concrete.',
		hint: 'It is the default.'
	},
	{
		id: 'w5-c03',
		type: 'list',
		front: 'What are the ingredients of Portland cement concrete?',
		back: ['Portland cement', 'Aggregates', 'Water', 'Air voids', 'Admixtures (in many cases)'],
		hint: 'Five things. One of them is empty space.'
	},
	{
		id: 'w5-c04',
		type: 'concept',
		front: 'What job does Portland cement do in concrete?',
		back: 'It is an "instant glue — just add water". It binds the aggregates together to make concrete. It can also be used to stabilise soils and aggregate bases for roads.',
		hint: 'Think of it as glue.'
	},
	{
		id: 'w5-c05',
		type: 'list',
		front: 'What are the two basic raw ingredients for making Portland cement?',
		back: [
			'Calcareous material — calcium oxide, e.g. limestone, chalk or oyster shells',
			'Argillaceous material — silica and alumina, e.g. clay, shale or blast furnace slag'
		],
		hint: 'One is "calcium-y", one is "clay-ey".'
	},
	{
		id: 'w5-c06',
		type: 'list',
		front: 'What are the main steps in making Portland cement?',
		back: [
			'Quarry limestone and clay, then crush them (primary and secondary crushers)',
			'Store the raw materials in silos and proportion them',
			'Grind them in a grinding mill — wet process (slurry) or dry process',
			'Heat in the kiln (dry process may use a preheater and flash furnace first)',
			'Cool the clinker in the clinker cooler',
			'Add gypsum and grind the clinker + gypsum in a grinding mill',
			'Store the finished cement in bulk storage, then ship or pack it'
		],
		hint: 'Crush → grind → burn → cool → add gypsum → grind again.'
	},
	{
		id: 'w5-c07',
		type: 'list',
		front: 'What four raw materials react in the kiln to make Portland cement?',
		back: ['Lime', 'Silica', 'Alumina', 'Iron oxide'],
		hint: 'These give the letters C, S, A and F.'
	},
	{
		id: 'w5-c08',
		type: 'code',
		front: 'What does the cement shorthand C, S, A and F stand for?',
		back: 'C = calcium oxide (CaO), S = silicon dioxide (SiO₂), A = aluminium oxide (Al₂O₃), F = iron oxide (Fe₂O₃).',
		code: 'C = CaO\nS = SiO₂\nA = Al₂O₃\nF = Fe₂O₃',
		hint: 'F is for ferric (iron).'
	},
	{
		id: 'w5-c09',
		type: 'code',
		front: 'What are the four main compounds of Portland cement, and how much of each is there?',
		back: 'Tricalcium silicate (C₃S) 45–60%, dicalcium silicate (C₂S) 15–30%, tricalcium aluminate (C₃A) 6–12%, tetracalcium aluminoferrite (C₄AF) 6–8% by weight.',
		code: 'Compound                      Formula               Short   % by weight\nTricalcium silicate           3CaO·SiO₂             C₃S     45–60\nDicalcium silicate            2CaO·SiO₂             C₂S     15–30\nTricalcium aluminate          3CaO·Al₂O₃            C₃A     6–12\nTetracalcium aluminoferrite   4CaO·Al₂O₃·Fe₂O₃      C₄AF    6–8',
		hint: 'The two silicates make up most of it.'
	},
	{
		id: 'w5-c10',
		type: 'concept',
		front: 'What process in the kiln forms the four main compounds?',
		back: 'Calcination. Heating in the kiln restructures the molecules of the raw materials into the four main compounds.',
		hint: 'Starts with "calc".'
	},
	{
		id: 'w5-c11',
		type: 'concept',
		front: 'Which compounds give concrete its desired properties when hydrated?',
		back: 'C₃S and C₂S — the two calcium silicates.',
		hint: 'The two with S in them.'
	},
	{
		id: 'w5-c12',
		type: 'concept',
		front: 'Why are alumina and iron (which make C₃A and C₄AF) added to the raw materials?',
		back: 'They lower the temperature needed to make C₃S from about 2000 °C to about 1350 °C. This saves energy and reduces the cost of making the cement.',
		hint: 'It is about the kiln temperature.'
	},
	{
		id: 'w5-c13',
		type: 'concept',
		front: 'Which two minor compounds are called alkalis, and why do they matter?',
		back: 'Sodium oxide (Na₂O) and potassium oxide (K₂O). They react with silica in some aggregates, which can break the concrete down and affect how fast it gains strength. "Minor" means small in amount, not small in importance.',
		hint: 'Sodium and potassium.'
	},
	{
		id: 'w5-c14',
		type: 'concept',
		front: 'Why does finer cement gain strength faster?',
		back: 'Hydration starts at the surface of the cement particles. Finer particles have more surface area, so hydration is faster. This gives faster strength gain and more heat early on.',
		hint: 'More surface = more places for water to react.'
	},
	{
		id: 'w5-c15',
		type: 'concept',
		front: 'Why not just make cement as fine as possible?',
		back: 'Grinding finer than the cement type needs costs more to produce and can actually harm the quality of the concrete.',
		hint: 'Cost and quality.'
	},
	{
		id: 'w5-c16',
		type: 'code',
		front: 'What are the typical particle sizes and surface area of Portland cement?',
		back: 'Maximum particle size 0.09 mm; 85–95% of particles are smaller than 0.045 mm; average diameter 0.01 mm. One kilogram has about 7 trillion particles with 300–400 m² of surface area.',
		code: 'Max size        0.09 mm\n85–95% below    0.045 mm\nAverage         0.01 mm\n1 kg ≈ 7 trillion particles ≈ 300–400 m²',
		hint: 'Tiny particles, huge surface area.'
	},
	{
		id: 'w5-c17',
		type: 'concept',
		front: 'Why is fineness specified as surface area per unit weight instead of particle size?',
		back: 'Surface area per unit weight depends on particle size, but it is easier to measure directly.',
		hint: 'It is about what is easy to measure.'
	},
	{
		id: 'w5-c18',
		type: 'list',
		front: 'What are three ways to measure the fineness of cement?',
		back: [
			'Blaine air permeability test (ASTM C204): how easily air passes through the sample, compared with a standard material. Gives cm²/g',
			'Wagner turbidimeter (ASTM C115): how fast cement settles when suspended in kerosene',
			'Sieve test (ASTM C430): percent passing the 0.045 mm (No. 325) sieve'
		],
		hint: 'Air, kerosene, sieve.'
	},
	{
		id: 'w5-c19',
		type: 'concept',
		front: 'Why do the Blaine and Wagner tests give different results on the same cement?',
		back: 'Both are indirect measures of surface area, and they use different measuring principles (air permeability vs sedimentation).',
		hint: 'Neither measures surface area directly.'
	},
	{
		id: 'w5-c20',
		type: 'concept',
		front: 'What is the specific gravity of Portland cement, and why is cement measured by weight, not volume?',
		back: 'Specific gravity is about 3.15 (ASTM C188), not counting voids. Bulk density (with voids) changes a lot — for example, vibration during transport packs it down. So cement is measured by weight, which does not change.',
		hint: 'Just over 3.'
	},
	{
		id: 'w5-c21',
		type: 'concept',
		front: 'What is hydration?',
		back: 'Hydration is the chemical reaction between cement particles and water. It involves a change in matter, a change in energy level, and a rate of reaction. Many reactions happen at the same time because cement has several compounds.',
		hint: 'Hydro = water.'
	},
	{
		id: 'w5-c22',
		type: 'list',
		front: 'What are the two mechanisms and three steps of hydration?',
		back: [
			'Mechanisms: through solution, and topochemical',
			'Step 1: Dissolution of anhydrous compounds into their constituents',
			'Step 2: Formation of hydrates in solution',
			'Step 3: Precipitation of hydrates from the supersaturated solution'
		],
		hint: 'Dissolve → form → precipitate.'
	},
	{
		id: 'w5-c23',
		type: 'code',
		front: 'What do C₃S and C₂S produce when they react with water?',
		back: 'Both produce calcium silicate hydrate (C-S-H) and calcium hydroxide, Ca(OH)₂. C₃S produces more calcium hydroxide.',
		code: '2(3CaO·SiO₂) + 6H₂O = 3CaO·2SiO₂·3H₂O + 3Ca(OH)₂\n2(2CaO·SiO₂) + 4H₂O = 3CaO·2SiO₂·3H₂O + Ca(OH)₂',
		hint: 'Silicates → silicate hydrates + calcium hydroxide.'
	},
	{
		id: 'w5-c24',
		type: 'code',
		front: 'What do C₃A and C₄AF produce when they hydrate?',
		back: 'C₃A + water + Ca(OH)₂ → calcium aluminate hydrate. C₄AF + water + Ca(OH)₂ → calcium aluminoferrite hydrate. C₃A + water + gypsum → calcium monosulfoaluminate hydrate.',
		code: '3CaO·Al₂O₃ + 12H₂O + Ca(OH)₂ = calcium aluminate hydrate\n4CaO·Al₂O₃·Fe₂O₃ + 10H₂O + 2Ca(OH)₂ = calcium aluminoferrite hydrate\n3CaO·Al₂O₃ + 10H₂O + CaSO₄·2H₂O = calcium monosulfoaluminate hydrate',
		hint: 'Gypsum (CaSO₄·2H₂O) reacts with C₃A.'
	},
	{
		id: 'w5-c25',
		type: 'list',
		front: 'What are the stages of setting of Portland cement?',
		back: [
			'(a) C-S-H gel starts to form on the grains. C₃A forms a gel fastest',
			'(b) Grains shrink as gel forms. Weak interlocking begins; paste is thixotropic — vibration can break the weak bonds',
			'(c) Initial set: a weak skeleton holds the grains in place',
			'(d) Final set: the skeleton becomes rigid and grains are locked in place',
			'(e) Spaces fill with hydration products as the paste gains strength and durability'
		],
		hint: 'Gel → weak links → initial set → final set → filling in.'
	},
	{
		id: 'w5-c26',
		type: 'concept',
		front: 'What does thixotropic mean in cement setting?',
		back: 'In the early stage, the weak bonds between grains can be broken by vibration, so the paste flows again. It behaves like a solid at rest but flows when shaken.',
		hint: 'Shake it and it flows.'
	},
	{
		id: 'w5-c27',
		type: 'list',
		front: 'How can you check how far hydration has gone in hardened concrete?',
		back: [
			'Heat of hydration',
			'Amount of calcium hydroxide in the paste',
			'Specific gravity of the paste',
			'Amount of chemically combined water',
			'Amount of unhydrated cement (X-ray quantitative analysis)',
			'Strength of the hydrated paste (an indirect measure)'
		],
		hint: 'Six methods (Neville, 1996).'
	},
	{
		id: 'w5-c28',
		type: 'concept',
		front: 'What is soundness of cement and how is it tested?',
		back: 'Soundness is the ability of cement paste to keep its volume after setting. Unsound cement expands after setting because of slow hydration or other reactions. It is tested with the autoclave expansion test (ASTM C151): paste bars are heated under high pressure and the expansion is measured.',
		hint: 'Does it stay the same size?'
	},
	{
		id: 'w5-c29',
		type: 'concept',
		front: 'Why does extra water weaken concrete?',
		back: 'Water added for workability is more than hydration needs. The extra water leaves capillary voids, which increase porosity and permeability and reduce strength.',
		hint: 'Extra water leaves holes behind.'
	},
	{
		id: 'w5-c30',
		type: 'concept',
		front: 'What is the relationship between the water–cement ratio and compressive strength?',
		back: 'Increasing the water–cement ratio decreases compressive strength, at every curing time (1, 3, 7 and 28 days). Abrams’s discovery of this is perhaps the most important advance in concrete technology.',
		hint: 'More water, less strength.'
	},
	{
		id: 'w5-c31',
		type: 'list',
		front: 'What are the benefits of a low water–cement ratio?',
		back: [
			'Higher compressive strength',
			'Better resistance to weathering',
			'Good bond between successive concrete layers',
			'Good bond between concrete and steel reinforcement',
			'Limits volume change from wetting and drying'
		],
		hint: 'Strength, weather, two kinds of bond, and volume.'
	},
	{
		id: 'w5-c32',
		type: 'list',
		front: 'What are the key effects of water impurities on concrete?',
		back: [
			'Alkali carbonates/bicarbonates: change setting and 28-day strength above 1000 ppm total dissolved salts; can aggravate alkali–aggregate reaction',
			'Chloride: corrodes reinforcing steel (limit for prestressed concrete is 0.06%)',
			'Sulfate: expansive reaction and deterioration',
			'Sea water: do NOT use for reinforced concrete; faster early strength but lower ultimate strength',
			'Acid water: keep inorganic acids below 10,000 ppm',
			'Sugar: over 500 ppm can retard setting; over 0.25% by weight of cement greatly lowers 28-day strength',
			'Oils: mineral oil over 2.5% by weight of mix can reduce strength by 20%',
			'Algae: reduces hydration and entrains air — do not use'
		],
		hint: 'Chloride hurts the steel; sulfate makes it expand.'
	},
	{
		id: 'w5-c33',
		type: 'code',
		front: 'What are the five standard types of Portland cement?',
		back: 'Type I Normal, Type II Moderate sulfate resistance, Type III High early strength, Type IV Low heat of hydration, Type V High sulfate resistance.',
		code: 'Type I    Normal                      general work: floors, pavements\nType II   Moderate sulfate resistance piers, abutments, retaining walls\nType III  High early strength         fast-track, cold weather\nType IV   Low heat of hydration       large dams (mass concrete)\nType V    High sulfate resistance     severe sulfate soils/water',
		hint: 'II and V are both about sulfate — V is the stronger one.'
	}
];

export const m5Quiz: QuizData[] = [
	{
		id: 'w5-q01',
		type: 'fill-blank',
		question: 'Portland cement was patented by Joseph Aspdin in the year ______.',
		answer: '1824',
		acceptableAnswers: ['1824'],
		explanation: 'Aspdin patented it in 1824 and named it after the limestone cliffs on the Isle of Portland, England.'
	},
	{
		id: 'w5-q02',
		type: 'multiple-choice',
		question: 'Which of these is a calcareous raw material for Portland cement?',
		options: ['Clay', 'Shale', 'Limestone', 'Blast furnace slag'],
		correctIndex: 2,
		explanation:
			'Calcareous materials supply calcium oxide — limestone, chalk or oyster shells. Clay, shale and slag are argillaceous (silica and alumina).'
	},
	{
		id: 'w5-q03',
		type: 'multiple-choice',
		question: 'What is added to the clinker before the final grinding?',
		options: ['Sand', 'Gypsum', 'Water', 'Iron oxide'],
		correctIndex: 1,
		explanation:
			'After the kiln, clinker is cooled, proportioned with gypsum and ground together in a grinding mill to make finished Portland cement.'
	},
	{
		id: 'w5-q04',
		type: 'multiple-choice',
		question: 'In cement shorthand, what does "S" stand for?',
		options: ['Sulfur', 'Sodium oxide', 'Silicon dioxide (silica)', 'Calcium sulfate'],
		correctIndex: 2,
		explanation: 'C = CaO, S = SiO₂, A = Al₂O₃, F = Fe₂O₃.'
	},
	{
		id: 'w5-q05',
		type: 'multiple-choice',
		question: 'Which compound makes up the largest share of Portland cement by weight?',
		options: ['C₂S', 'C₃S', 'C₃A', 'C₄AF'],
		correctIndex: 1,
		explanation: 'Tricalcium silicate (C₃S) is 45–60% by weight. C₂S is 15–30%, C₃A 6–12% and C₄AF 6–8%.'
	},
	{
		id: 'w5-q06',
		type: 'fill-blank',
		question: 'The chemical formula of tetracalcium aluminoferrite is 4CaO·Al₂O₃·Fe₂O₃. Its short form is ______.',
		answer: 'C4AF',
		acceptableAnswers: ['C4AF', 'C₄AF', 'c4af'],
		explanation: '4 CaO = C₄, Al₂O₃ = A, Fe₂O₃ = F, giving C₄AF.'
	},
	{
		id: 'w5-q07',
		type: 'multiple-choice',
		question: 'Why are alumina and iron included in the raw materials?',
		options: [
			'To make the cement grey',
			'To lower the temperature needed to form C₃S from about 2000 °C to 1350 °C',
			'To increase the 28-day strength',
			'To stop the alkali–aggregate reaction'
		],
		correctIndex: 1,
		explanation: 'They act to reduce the kiln temperature needed, saving energy and lowering production cost.'
	},
	{
		id: 'w5-q08',
		type: 'multiple-choice',
		question: 'Which two minor compounds are called alkalis?',
		options: [
			'Magnesium oxide and titanium oxide',
			'Sodium oxide and potassium oxide',
			'Manganese oxide and iron oxide',
			'Calcium oxide and silicon dioxide'
		],
		correctIndex: 1,
		explanation:
			'Na₂O and K₂O are the alkalis. They react with silica in some aggregates, which can cause concrete to disintegrate.'
	},
	{
		id: 'w5-q09',
		type: 'multiple-choice',
		question: 'What happens if cement is ground finer?',
		options: [
			'Slower hydration and less early heat',
			'Faster hydration, faster strength gain and more early heat',
			'No change — fineness only affects colour',
			'Lower production cost'
		],
		correctIndex: 1,
		explanation:
			'Hydration starts at the particle surface. Finer particles = more surface area = faster hydration, faster strength gain and a greater initial heat of hydration.'
	},
	{
		id: 'w5-q10',
		type: 'fill-blank',
		question: 'The maximum size of Portland cement particles is ______ mm.',
		answer: '0.09',
		acceptableAnswers: ['0.09', '.09', '0.09 mm'],
		explanation: 'Max 0.09 mm; 85–95% are under 0.045 mm; average diameter 0.01 mm.'
	},
	{
		id: 'w5-q11',
		type: 'multiple-choice',
		question: 'Roughly what surface area does 1 kg of Portland cement have?',
		options: ['3–4 m²', '30–40 m²', '300–400 m²', '3000–4000 m²'],
		correctIndex: 2,
		explanation: 'About 7 trillion particles with a total surface area of about 300–400 m² per kilogram.'
	},
	{
		id: 'w5-q12',
		type: 'multiple-choice',
		question: 'The Blaine test measures fineness by:',
		options: [
			'Measuring how fast cement settles in kerosene',
			'Measuring air permeability of a cement sample compared with a standard',
			'Weighing what passes a 0.045 mm sieve',
			'Heating paste bars under pressure'
		],
		correctIndex: 1,
		explanation:
			'Blaine (ASTM C204) uses air permeability and gives surface area in cm²/g. Settling in kerosene is the Wagner turbidimeter. Heating under pressure is the soundness test.'
	},
	{
		id: 'w5-q13',
		type: 'multiple-choice',
		question: 'In the Wagner turbidimeter test, finer cement particles:',
		options: ['Settle faster', 'Settle slower', 'Dissolve in the kerosene', 'Float on top'],
		correctIndex: 1,
		explanation: 'The finer the particles, the slower the sedimentation.'
	},
	{
		id: 'w5-q14',
		type: 'fill-blank',
		question: 'The specific gravity of Portland cement (without voids) is about ______.',
		answer: '3.15',
		acceptableAnswers: ['3.15', '3.2'],
		explanation: 'About 3.15, determined by ASTM C188. It is needed for mix proportioning calculations.'
	},
	{
		id: 'w5-q15',
		type: 'multiple-choice',
		question: 'Why is cement quantity specified by weight rather than volume?',
		options: [
			'Weight is cheaper to measure',
			'Bulk density changes with handling — e.g. vibration during transport packs it down',
			'Cement has no volume until water is added',
			'It is required by the patent'
		],
		correctIndex: 1,
		explanation:
			'Bulk density includes voids between particles and varies with handling and storage, so volume is unreliable. Weight stays the same.'
	},
	{
		id: 'w5-q16',
		type: 'multiple-choice',
		question: 'What is the correct order of the three hydration steps?',
		options: [
			'Precipitation → dissolution → formation',
			'Formation → precipitation → dissolution',
			'Dissolution → formation of hydrates → precipitation',
			'Dissolution → precipitation → formation of hydrates'
		],
		correctIndex: 2,
		explanation:
			'1. Anhydrous compounds dissolve. 2. Hydrates form in solution. 3. Hydrates precipitate out of the supersaturated solution.'
	},
	{
		id: 'w5-q17',
		type: 'multiple-choice',
		question: 'Hydration of C₃S and C₂S produces calcium silicate hydrate and:',
		options: ['Gypsum', 'Calcium hydroxide, Ca(OH)₂', 'Calcium carbonate', 'Iron oxide'],
		correctIndex: 1,
		explanation: 'Both silicates give calcium silicate hydrate (C-S-H) plus calcium hydroxide. C₃S gives three times as much Ca(OH)₂ as C₂S.'
	},
	{
		id: 'w5-q18',
		type: 'multiple-choice',
		question: 'Tricalcium aluminate reacts with water and gypsum to form:',
		options: [
			'Calcium silicate hydrate',
			'Calcium aluminoferrite hydrate',
			'Calcium monosulfoaluminate hydrate',
			'Calcium hydroxide'
		],
		correctIndex: 2,
		explanation: '3CaO·Al₂O₃ + 10H₂O + CaSO₄·2H₂O = 3CaO·Al₂O₃·CaSO₄·12H₂O (calcium monosulfoaluminate hydrate).'
	},
	{
		id: 'w5-q19',
		type: 'multiple-choice',
		question: 'Which compound forms a gel fastest when cement meets water?',
		options: ['C₃S', 'C₂S', 'C₃A', 'C₄AF'],
		correctIndex: 2,
		explanation: 'The C-S-H phase forms first, and C₃A forms a gel fastest.'
	},
	{
		id: 'w5-q20',
		type: 'multiple-choice',
		question: 'At which stage of setting does a weak skeleton first hold the cement grains in place?',
		options: ['Gel formation', 'Thixotropic stage', 'Initial set', 'Final set'],
		correctIndex: 2,
		explanation:
			'Initial set = weak skeleton holds grains in place. Final set = skeleton becomes rigid and grains are locked in place.'
	},
	{
		id: 'w5-q21',
		type: 'multiple-choice',
		question: 'Soundness of cement paste refers to its ability to:',
		options: [
			'Make no noise when tapped',
			'Keep its volume after setting',
			'Resist sulfate attack',
			'Set quickly in cold weather'
		],
		correctIndex: 1,
		explanation:
			'Unsound cement expands after setting. It is checked with the autoclave expansion test (ASTM C151) — paste bars under heat and high pressure.'
	},
	{
		id: 'w5-q22',
		type: 'multiple-choice',
		question: 'Increasing the water–cement ratio will:',
		options: [
			'Increase compressive strength',
			'Decrease compressive strength',
			'Have no effect on strength',
			'Only affect 1-day strength'
		],
		correctIndex: 1,
		explanation:
			'Extra water leaves capillary voids, increasing porosity and permeability. Strength drops at every curing age (1, 3, 7, 28 days).'
	},
	{
		id: 'w5-q23',
		type: 'multiple-choice',
		question: 'Who discovered the importance of the water–cement ratio?',
		options: ['Joseph Aspdin', 'Abrams', 'Blaine', 'Neville'],
		correctIndex: 1,
		explanation: 'Abrams’s discovery is called perhaps the single most important advance in concrete technology.'
	},
	{
		id: 'w5-q24',
		type: 'multiple-choice',
		question: 'Why should sea water NOT be used for reinforced concrete?',
		options: [
			'It makes concrete set too slowly',
			'Its chlorides corrode the reinforcing steel, and it reduces ultimate strength',
			'It is too expensive to pump',
			'It stops hydration completely'
		],
		correctIndex: 1,
		explanation:
			'Sea water contains chloride, which corrodes steel. It can speed up early strength gain but lowers ultimate strength and can aggravate alkali reactions.'
	},
	{
		id: 'w5-q25',
		type: 'fill-blank',
		question: 'The ACI chloride limit for prestressed concrete is ______ %.',
		answer: '0.06',
		acceptableAnswers: ['0.06', '.06', '0.06%'],
		explanation:
			'Prestressed 0.06%, reinforced exposed to chloride 0.15%, other reinforced 0.30%, reinforced protected from moisture 1.00%.'
	},
	{
		id: 'w5-q26',
		type: 'multiple-choice',
		question: 'What effect does mineral oil above 2.5% by weight of mix have?',
		options: [
			'Speeds up setting',
			'May reduce strength by about 20%',
			'Improves workability with no downside',
			'Causes sulfate attack'
		],
		correctIndex: 1,
		explanation: 'Mineral oil (petroleum) over 2.5% by weight of mix may reduce strength by 20%.'
	},
	{
		id: 'w5-q27',
		type: 'multiple-choice',
		question: 'Which cement type would you choose for a large dam?',
		options: ['Type I', 'Type III', 'Type IV', 'Type V'],
		correctIndex: 2,
		explanation:
			'Type IV (low heat of hydration) is used where a large mass of concrete needs careful control of the heat of hydration.'
	},
	{
		id: 'w5-q28',
		type: 'multiple-choice',
		question: 'A job needs formwork removed as soon as possible in cold weather. Which cement type?',
		options: ['Type I — Normal', 'Type II — Moderate sulfate resistance', 'Type III — High early strength', 'Type IV — Low heat'],
		correctIndex: 2,
		explanation: 'Type III gains strength quickly, which suits fast-track construction and reduces curing time in cold weather.'
	},
	{
		id: 'w5-q29',
		type: 'multiple-choice',
		question: 'Soil contains 0.2–2.0% water-soluble sulfate. Which cement type?',
		options: ['Type I', 'Type II', 'Type III', 'Type V'],
		correctIndex: 3,
		explanation:
			'Type V gives high sulfate resistance for severe exposure (0.2–2.0% in soil). Type II is for moderate exposure (0.1–0.2%).'
	},
	{
		id: 'w5-q30',
		type: 'multiple-choice',
		question: 'What two things mainly govern the properties of Portland cement?',
		options: [
			'Colour and weight',
			'Chemical composition and particle fineness',
			'Kiln size and transport method',
			'Water temperature and humidity'
		],
		correctIndex: 1,
		explanation:
			'Chemical composition and fineness control the rate of hydration and the ultimate strength of the concrete.'
	}
];
