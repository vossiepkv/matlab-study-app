import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m1Meta: ModuleMeta = {
	num: 1,
	title: 'Concepts of Engineering Materials',
	description:
		'What engineering materials are, the four major classes (metals, polymers, ceramics, composites), and the basic properties used to describe and compare them: density, load, stress, strain, the stress–strain curve, Young’s modulus and factor of safety.',
	topics: [
		'What engineering materials are and what they must do',
		'The four major classes: metals, polymers, ceramics, composites',
		'Ferrous vs non-ferrous metals',
		'Thermoplastic, thermosetting polymers and elastomers',
		'Density (ρ = m / V)',
		'Load: static vs dynamic',
		'Stress (σ = F / A₀) and strain (ε = ΔL / L₀)',
		'Types of loading: tension, compression, shear, torsion, bending',
		'The stress–strain curve: elastic and plastic regimes',
		'Yield strength, ultimate tensile strength, necking and fracture',
		'Young’s modulus (stiffness)',
		'Ductile vs brittle behaviour',
		'Factor of safety',
		'Selecting materials for a job (properties → application)'
	]
};

export const m1Cards: CardData[] = [
	{
		id: 'w1-c01',
		type: 'concept',
		front: 'What are "engineering materials"?',
		back: 'Engineering materials are materials that have been modified for a specific use in man-made structures and components — things we deliberately choose and process so they will do a job.',
		hint: 'The key word is "modified for a specific use".'
	},
	{
		id: 'w1-c02',
		type: 'concept',
		front: 'What is the primary function of an engineering material?',
		back: 'To withstand the applied loading without breaking, and without bending or stretching too much (excessive deflection).',
		hint: 'Two things: don’t break, and don’t deflect too much.'
	},
	{
		id: 'w1-c03',
		type: 'list',
		front: 'What are the four major classifications of engineering materials?',
		back: ['Metals', 'Polymers', 'Ceramics', 'Composites'],
		hint: 'Think of the Venn diagram — three circles with one overlap in the middle.'
	},
	{
		id: 'w1-c04',
		type: 'concept',
		front: 'What is a composite material?',
		back: 'A composite is made by combining two or more different materials (for example a metal, ceramic or polymer) so the result has better properties than any of them alone. On the Venn diagram it sits in the overlap in the middle.',
		hint: 'It sits in the middle of the metal / ceramic / polymer circles.'
	},
	{
		id: 'w1-c05',
		type: 'concept',
		front: 'What is the difference between a ferrous and a non-ferrous metal?',
		back: 'Ferrous metals contain iron (wrought iron, carbon steels, alloy steels, cast irons). Non-ferrous metals contain no iron (aluminium, copper, lead, silver, tin, zinc).',
		hint: '"Ferrous" comes from ferrum, the Latin word for iron.'
	},
	{
		id: 'w1-c06',
		type: 'list',
		front: 'Give five examples of ferrous metals.',
		back: ['Wrought iron', 'Carbon steel', 'Low-alloy steel', 'Tool steel', 'Stainless steel', 'Cast iron']
	},
	{
		id: 'w1-c07',
		type: 'list',
		front: 'Name four common engineering alloy families (non-ferrous).',
		back: ['Aluminium alloys', 'Nickel alloys', 'Copper alloys', 'Titanium alloys']
	},
	{
		id: 'w1-c08',
		type: 'list',
		front: 'What are the three types of polymer?',
		back: [
			'Thermoplastic polymers — soften when heated, can be re-melted and re-shaped (PVC, polythene, acrylic)',
			'Thermosetting polymers — set permanently when cured, cannot be re-melted (Bakelite, polyesters, epoxy resins)',
			'Elastomers — rubbery, stretch a lot and spring back'
		],
		hint: 'One can be re-melted, one cannot, one is stretchy.'
	},
	{
		id: 'w1-c09',
		type: 'list',
		front: 'Give five examples of ceramics.',
		back: ['Glass', 'Cements and concrete', 'Clay products', 'Refractories', 'Abrasives'],
		hint: 'Hard, stiff, usually brittle materials.'
	},
	{
		id: 'w1-c10',
		type: 'list',
		front: 'What are the three types of composite?',
		back: [
			'Particulate composites — reinforced with particles',
			'Fibrous composites — reinforced with fibres (e.g. carbon fibre)',
			'Laminated composites — built up from bonded layers'
		]
	},
	{
		id: 'w1-c11',
		type: 'list',
		front: 'What order did the "material ages" of human history come in?',
		back: [
			'Stone age',
			'Bronze age',
			'Iron age',
			'Age of steel',
			'Age of polymers',
			'Age of silicon',
			'Age of molecular engineering'
		],
		hint: 'Stone → bronze → iron → steel → plastics → silicon → molecular.'
	},
	{
		id: 'w1-c12',
		type: 'concept',
		front: 'What is density, and what is the formula?',
		back: 'Density is how much matter is packed into a given volume — the mass per unit volume. ρ = m / V, where m is mass (kg) and V is volume (m³). The units are kg/m³.',
		code: 'ρ = m / V',
		hint: 'The Greek letter is rho (ρ), not p.'
	},
	{
		id: 'w1-c13',
		type: 'code',
		front: 'A component has a mass of 2.7 kg and a volume of 0.001 m³. What is its density, and what material is it likely to be?',
		back: 'ρ = 2.7 / 0.001 = 2700 kg/m³. That is the density of aluminium.',
		code: 'ρ = m / V\nρ = 2.7 kg / 0.001 m³\nρ = 2700 kg/m³',
		hint: 'Just divide mass by volume.'
	},
	{
		id: 'w1-c14',
		type: 'list',
		front: 'What are typical densities of structural steel, aluminium alloy and CFRP?',
		back: [
			'Structural steel ≈ 7850 kg/m³',
			'Aluminium alloy (6061-T6) ≈ 2700 kg/m³',
			'Carbon fibre reinforced polymer (CFRP) ≈ 1550 kg/m³'
		],
		hint: 'Steel is roughly 3× heavier than aluminium; CFRP is the lightest.'
	},
	{
		id: 'w1-c15',
		type: 'concept',
		front: 'What is a mechanical load?',
		back: 'A mechanical load is the physical force or stress applied to a mechanical system or component — whatever is pushing, pulling or twisting the part.'
	},
	{
		id: 'w1-c16',
		type: 'concept',
		front: 'What is the difference between static loading and dynamic loading?',
		back: 'Static loading is a sustained load applied slowly over a period of time, so no shock or vibration is created in the structure. Dynamic loading generates shock or vibration — it can be periodic, random or transient.',
		hint: 'Static = slow and steady. Dynamic = shock or vibration.'
	},
	{
		id: 'w1-c17',
		type: 'list',
		front: 'What are the three categories of dynamic load?',
		back: ['Periodic — repeats in a regular cycle', 'Random — irregular and unpredictable', 'Transient — a one-off short event, like an impact']
	},
	{
		id: 'w1-c18',
		type: 'concept',
		front: 'What is stress, and what is the formula?',
		back: 'Stress is the internal resistive force that neighbouring particles of a material exert on each other. It is measured as the external force divided by the original cross-sectional area: σ = F / A₀. Units are Pa (N/m²), usually written as MPa.',
		code: 'Stress, σ = F / A₀\n(Force ÷ Cross-Sectional Area)',
		hint: 'Same idea as pressure, but inside the material.'
	},
	{
		id: 'w1-c19',
		type: 'concept',
		front: 'What is strain, and what is the formula?',
		back: 'Strain is the deformation of a material caused by stress. It is the change in length divided by the original length: ε = ΔL / L₀. Because it is a length divided by a length, strain has no units — it is often given as a decimal or a percentage.',
		code: 'Strain, ε = ΔL / L₀\n(Elongation ÷ Original Length)',
		hint: 'How much it stretched, compared with how long it started.'
	},
	{
		id: 'w1-c20',
		type: 'concept',
		front: 'What is pressure?',
		back: 'Pressure is the physical force exerted on an object, where the applied force acts perpendicular to the surface, per unit area.',
		hint: 'The force is at right angles to the surface.'
	},
	{
		id: 'w1-c21',
		type: 'code',
		front: 'A bar with a cross-sectional area of 200 mm² carries a tensile force of 10 kN. What is the stress?',
		back: '50 MPa. Convert the area to m² first: 200 mm² = 200 × 10⁻⁶ m². Then σ = 10 000 N ÷ 0.0002 m² = 50 000 000 Pa = 50 MPa.',
		code: 'σ = F / A₀\nσ = 10 000 N / 0.0002 m²\nσ = 50 × 10⁶ Pa = 50 MPa',
		hint: '1 mm² = 10⁻⁶ m², and 1 MPa = 1 000 000 Pa.'
	},
	{
		id: 'w1-c22',
		type: 'code',
		front: 'A 200 mm long rod stretches by 0.4 mm under load. What is the strain?',
		back: '0.002, or 0.2%. ε = ΔL / L₀ = 0.4 / 200 = 0.002. The units cancel, so it does not matter whether you work in mm or m as long as both are the same.',
		code: 'ε = ΔL / L₀\nε = 0.4 mm / 200 mm\nε = 0.002 = 0.2%',
		hint: 'Keep both lengths in the same unit and they cancel.'
	},
	{
		id: 'w1-c23',
		type: 'list',
		front: 'What are the five types of loading that produce stress in a component?',
		back: [
			'Compression — squashing',
			'Tension — pulling apart',
			'Shear — sliding one part past another',
			'Torsion — twisting',
			'Bending — curving the part'
		],
		hint: 'Squash, pull, slide, twist, bend.'
	},
	{
		id: 'w1-c24',
		type: 'concept',
		front: 'What are the two regimes on a stress–strain curve?',
		back: 'The elastic regime comes first — the line is straight and the material springs back to its original shape when the load is removed. After the yield point comes the plastic regime, where the deformation is permanent.',
		hint: 'One is reversible, one is not.'
	},
	{
		id: 'w1-c25',
		type: 'concept',
		front: 'What is the yield strength?',
		back: 'The yield strength is the stress at the yield point — the end of the straight elastic line. Below it the material springs back; above it the material deforms permanently.',
		hint: 'It is where the curve stops being a straight line.'
	},
	{
		id: 'w1-c26',
		type: 'concept',
		front: 'What is the ultimate tensile strength (UTS)?',
		back: 'The UTS is the maximum engineering stress the material can carry — the highest point on the stress–strain curve. Up to that point the strength rises because of strain hardening; after it the strength falls because of necking, until fracture.',
		hint: 'It is the peak of the curve, not the end of it.'
	},
	{
		id: 'w1-c27',
		type: 'concept',
		front: 'Why does the stress–strain curve go up after yielding and then come down before fracture?',
		back: 'It rises because of strain hardening — the material gets stronger as it is deformed. It then falls because of necking — the cross-section thins down in one spot, so the true area shrinks and the engineering stress drops until the part fractures.',
		hint: 'Two named effects: one strengthens, one thins the bar.'
	},
	{
		id: 'w1-c28',
		type: 'concept',
		front: 'What is Young’s modulus and how do you calculate it from a graph?',
		back: 'Young’s modulus is the stiffness of a material — the slope of the straight (elastic) part of the stress–strain curve. Pick two points on the straight line and calculate E = (σ₂ − σ₁) / (ε₂ − ε₁), which is just rise over run.',
		code: 'E = (y₂ − y₁) / (x₂ − x₁)\nE = (601 − 265) MPa / (0.11 − 0.05)\nE = 5600 MPa',
		hint: 'It is just the gradient of the straight line.'
	},
	{
		id: 'w1-c29',
		type: 'concept',
		front: 'Two materials are tested. A has a steeper elastic line than B. What does that tell you?',
		back: 'A has a higher Young’s modulus, so A is stiffer — it takes more stress to stretch it by the same amount. Steeper line = stiffer material.',
		hint: 'Steeper slope means a bigger E.'
	},
	{
		id: 'w1-c30',
		type: 'concept',
		front: 'What is the difference between a ductile and a brittle material on a stress–strain curve?',
		back: 'A ductile material stretches a long way before it breaks — it has a long plastic region, so the curve extends far to the right. A brittle material has almost no plastic region: the curve is steep and stops suddenly, with very little strain before fracture.',
		hint: 'Look at how far along the strain axis the curve goes.'
	},
	{
		id: 'w1-c31',
		type: 'concept',
		front: 'Can a material be strong but not ductile?',
		back: 'Yes. Strength is how much stress it can take; ductility is how much it can deform before breaking. A strong, non-ductile material reaches a high stress but snaps with very little strain — it gives no warning before failure.',
		hint: 'Strength is the height of the curve, ductility is its width.'
	},
	{
		id: 'w1-c32',
		type: 'concept',
		front: 'What is the factor of safety (FoS)?',
		back: 'The factor of safety expresses how much stronger a system is than it needs to be for its intended load. FoS = Maximum Stress / Working (Design) Stress. It is used because comprehensive testing of things like bridges and buildings is impractical.',
		code: 'FoS = Maximum Stress / Working (Design) Stress',
		hint: 'A number bigger than 1 means there is margin in hand.'
	},
	{
		id: 'w1-c33',
		type: 'list',
		front: 'Which stress do you use in the factor of safety for a brittle material versus a ductile material?',
		back: [
			'Brittle material: FoS = Ultimate Stress / Working Stress',
			'Ductile material: FoS = Yield Stress / Working Stress'
		],
		hint: 'A ductile part is already ruined once it yields, so yield is its limit.'
	},
	{
		id: 'w1-c34',
		type: 'code',
		front: 'A ductile steel part has a yield stress of 250 MPa and is designed to work at 100 MPa. What is the factor of safety?',
		back: 'FoS = 2.5. For a ductile material use the yield stress: 250 / 100 = 2.5. The part is 2.5 times stronger than it needs to be for its intended load.',
		code: 'FoS = Yield Stress / Working Stress\nFoS = 250 MPa / 100 MPa\nFoS = 2.5',
		hint: 'Ductile → use yield, not ultimate.'
	},
	{
		id: 'w1-c35',
		type: 'list',
		front: 'What property makes each of these materials right for its job? (silica tiles, steel I-beam, CoCrMo hip implant, polycarbonate lens, bronze sculpture)',
		back: [
			'Silica tiles on the space shuttle — very low thermal conductivity, so they insulate against re-entry heat',
			'Steel for I-beams in skyscrapers — high stiffness and strength, so it carries load without deflecting',
			'Cobalt chrome molybdenum for hip implants — biocompatible, corrosion resistant and wear resistant inside the body',
			'Polycarbonate for eyeglass lenses — transparent, light and impact resistant, so it will not shatter',
			'Bronze for sculptures — castable into fine detail and corrosion resistant outdoors'
		],
		hint: 'Ask each time: what one property does the application demand?'
	},
	{
		id: 'w1-c36',
		type: 'concept',
		front: 'What properties would you want in a human-powered aircraft that must fly 30 km non-stop?',
		back: 'Above all a very high strength-to-weight ratio and high stiffness-to-weight ratio, plus good fatigue resistance. Suitable materials are carbon fibre reinforced polymer, aluminium alloys and lightweight polymer films for the skin.',
		hint: 'The engine is a person, so every gram counts.'
	},
	{
		id: 'w1-c37',
		type: 'concept',
		front: 'Why is the space shuttle hull made of ceramic tiles bonded to an aluminium skin, and what makes it hard to build?',
		back: 'The ceramic tiles resist the very high re-entry temperatures, while the aluminium skin gives a light, strong, formable structure. The difficulty is joining them: the two materials expand by different amounts when heated, the tiles are brittle, and every tile is a slightly different shape and must be bonded individually.',
		hint: 'Think about what happens when two bonded materials expand at different rates.'
	},
	{
		id: 'w1-c38',
		type: 'list',
		front: 'How could you physically separate polymers, aluminium alloys and steels in a scrap recycling plant?',
		back: [
			'Magnetic separation — pulls out the ferrous steels, since only they are magnetic',
			'Eddy current separation — repels non-ferrous metals such as aluminium',
			'Density (sink–float) separation — polymers float where metals sink',
			'Melting point differences — polymers and aluminium melt at far lower temperatures than steel'
		],
		hint: 'Use a property where the three differ the most: magnetism, density, melting point.'
	},
	{
		id: 'w1-c39',
		type: 'concept',
		front: 'What properties matter most when choosing a material for a bicycle frame or front fork?',
		back: 'A high strength-to-weight ratio, high stiffness so the frame does not flex when pedalling, and fatigue resistance because the load cycles thousands of times per ride. Titanium alloy, aluminium alloy and carbon fibre all fit; cast iron and mild steel are too heavy or too flexible.',
		hint: 'The frame is loaded over and over — that word is fatigue.'
	},
	{
		id: 'w1-c40',
		type: 'concept',
		front: 'What type of force do bicycle spokes carry, and why?',
		back: 'Tension. Spokes are thin wires, so they can only pull, not push — the wheel works by keeping every spoke tensioned between the hub and the rim. A thin wire would simply buckle in compression.',
		hint: 'A thin wire cannot push.'
	}
];

export const m1Quiz: QuizData[] = [
	{
		id: 'w1-q01',
		type: 'multiple-choice',
		question: 'What are the four major classifications of engineering materials?',
		options: [
			'Metals, polymers, ceramics, composites',
			'Solids, liquids, gases, plasmas',
			'Steel, aluminium, plastic, wood',
			'Ferrous, non-ferrous, natural, synthetic'
		],
		correctIndex: 0,
		explanation:
			'The four major classes are metals, polymers, ceramics and composites. Composites sit in the overlap because they are made by combining the others.'
	},
	{
		id: 'w1-q02',
		type: 'multiple-choice',
		question: 'What is the primary function of an engineering material?',
		options: [
			'To look attractive in the finished product',
			'To be as cheap as possible',
			'To withstand applied loading without breaking or deflecting excessively',
			'To conduct electricity'
		],
		correctIndex: 2,
		explanation:
			'The primary function is to withstand the applied loading without breaking and without excessive deflection. Cost and appearance matter, but they are not the primary function.'
	},
	{
		id: 'w1-q03',
		type: 'multiple-choice',
		question: 'Which of these is a ferrous metal?',
		options: ['Copper', 'Cast iron', 'Aluminium', 'Zinc'],
		correctIndex: 1,
		explanation:
			'Ferrous metals contain iron. Cast iron, wrought iron, carbon steels and alloy steels are ferrous; copper, aluminium, lead, tin and zinc are non-ferrous.'
	},
	{
		id: 'w1-q04',
		type: 'fill-blank',
		question: 'What is the formula for density, in terms of mass (m) and volume (V)?',
		answer: 'm/V',
		acceptableAnswers: ['m/V', 'm / V', 'mass/volume', 'mass / volume', 'p = m/V', 'rho = m/V'],
		explanation: 'Density ρ = m / V — mass divided by volume. The SI units are kg/m³.'
	},
	{
		id: 'w1-q05',
		type: 'code-output',
		question: 'A block has a mass of 7.85 kg and a volume of 0.001 m³. What is its density in kg/m³?',
		answer: '7850',
		acceptableAnswers: ['7850', '7850 kg/m3', '7850 kg/m³'],
		explanation:
			'ρ = m / V = 7.85 / 0.001 = 7850 kg/m³. That is the density of structural steel.'
	},
	{
		id: 'w1-q06',
		type: 'multiple-choice',
		question: 'Which statement correctly describes static loading?',
		options: [
			'A load that generates shock or vibration in the structure',
			'A sustained load applied slowly, with no shock or vibration',
			'A load that is applied and removed thousands of times',
			'A load that acts only at right angles to the surface'
		],
		correctIndex: 1,
		explanation:
			'Static loading is a sustained load applied slowly over time, so no shock or vibration is generated. Loads that create shock or vibration are dynamic loads.'
	},
	{
		id: 'w1-q07',
		type: 'multiple-choice',
		question: 'Dynamic loads can be classified as:',
		options: [
			'Tensile, compressive or shear',
			'Elastic, plastic or fractured',
			'Periodic, random or transient',
			'Static, semi-static or non-static'
		],
		correctIndex: 2,
		explanation: 'Dynamic loads are classified as periodic, random or transient.'
	},
	{
		id: 'w1-q08',
		type: 'fill-blank',
		question:
			'Complete the formula for stress: σ = Force divided by ______ (two words).',
		answer: 'cross-sectional area',
		acceptableAnswers: [
			'cross-sectional area',
			'cross sectional area',
			'area',
			'original area',
			'A0',
			'A₀'
		],
		explanation:
			'Stress σ = F / A₀ — force divided by the original cross-sectional area. The units are Pa (N/m²), usually quoted in MPa.'
	},
	{
		id: 'w1-q09',
		type: 'code-output',
		question:
			'A bar with a cross-sectional area of 200 mm² carries a tensile force of 10 kN. What is the stress in MPa?',
		code: 'σ = F / A₀\nF = 10 kN = 10 000 N\nA₀ = 200 mm² = 0.0002 m²',
		answer: '50',
		acceptableAnswers: ['50', '50 MPa', '50MPa'],
		explanation:
			'σ = 10 000 N ÷ 0.0002 m² = 50 000 000 Pa = 50 MPa. Watch the unit conversions: 1 mm² = 10⁻⁶ m² and 1 MPa = 10⁶ Pa.'
	},
	{
		id: 'w1-q10',
		type: 'code-output',
		question: 'A 200 mm long rod stretches by 0.4 mm under load. What is the strain?',
		code: 'ε = ΔL / L₀\nΔL = 0.4 mm\nL₀ = 200 mm',
		answer: '0.002',
		acceptableAnswers: ['0.002', '.002', '0.2%', '0.2 %'],
		explanation:
			'ε = 0.4 / 200 = 0.002, which is 0.2%. Strain has no units because it is a length divided by a length.'
	},
	{
		id: 'w1-q11',
		type: 'multiple-choice',
		question: 'Which of these is NOT one of the loading orientations covered in this module?',
		options: ['Torsion', 'Shear', 'Bending', 'Diffusion'],
		correctIndex: 3,
		explanation:
			'The five loading orientations are compression, tension, shear, torsion and bending. Diffusion is the movement of atoms, not a way of loading a part.'
	},
	{
		id: 'w1-q12',
		type: 'multiple-choice',
		question: 'On a stress–strain curve, what happens in the elastic regime?',
		options: [
			'The material deforms permanently',
			'The material returns to its original shape when the load is removed',
			'The cross-section starts to neck down',
			'The material fractures'
		],
		correctIndex: 1,
		explanation:
			'In the elastic regime the line is straight and the deformation is reversible — remove the load and the material springs back. Permanent deformation only starts past the yield point, in the plastic regime.'
	},
	{
		id: 'w1-q13',
		type: 'multiple-choice',
		question: 'What does the ultimate tensile strength correspond to on the stress–strain curve?',
		options: [
			'The end of the straight elastic line',
			'The point where the material fractures',
			'The highest stress reached, at the peak of the curve',
			'The slope of the straight section'
		],
		correctIndex: 2,
		explanation:
			'The UTS is the maximum engineering stress — the peak of the curve. The end of the straight line is the yield point, and fracture happens later, at a lower stress, after necking.'
	},
	{
		id: 'w1-q14',
		type: 'multiple-choice',
		question: 'Why does the stress fall between the UTS and the fracture point?',
		options: [
			'Because of strain hardening',
			'Because of necking — the cross-section thins in one spot',
			'Because the material becomes elastic again',
			'Because the applied force is removed'
		],
		correctIndex: 1,
		explanation:
			'After the UTS the bar necks: the cross-section thins locally, so the engineering stress (calculated on the original area) falls until fracture. Strain hardening is what raises the curve before the UTS.'
	},
	{
		id: 'w1-q15',
		type: 'fill-blank',
		question:
			'What material property is given by the slope of the straight-line section of a stress–strain curve?',
		answer: "Young's modulus",
		acceptableAnswers: [
			"young's modulus",
			'youngs modulus',
			'young modulus',
			'elastic modulus',
			'modulus of elasticity',
			'E',
			'stiffness'
		],
		explanation:
			'The gradient of the elastic (straight) portion is Young’s modulus, E — a measure of stiffness. A steeper line means a stiffer material.'
	},
	{
		id: 'w1-q16',
		type: 'code-output',
		question:
			'On a stress–strain graph, one point is at (0.05, 265 MPa) and another at (0.11, 601 MPa) on the straight elastic line. What is Young’s modulus in MPa?',
		code: 'E = (y₂ − y₁) / (x₂ − x₁)\nE = (601 − 265) / (0.11 − 0.05)',
		answer: '5600',
		acceptableAnswers: ['5600', '5600 MPa', '5,600'],
		explanation:
			'E = 336 MPa ÷ 0.06 = 5600 MPa. Young’s modulus is just the gradient — rise over run — of the straight elastic section.'
	},
	{
		id: 'w1-q17',
		type: 'multiple-choice',
		question:
			'Two materials are tested. Material A fractures after only a tiny amount of strain; material B stretches a long way first. What can you say?',
		options: [
			'A is ductile and B is brittle',
			'A is brittle and B is ductile',
			'Both are brittle',
			'A is stronger than B'
		],
		correctIndex: 1,
		explanation:
			'A brittle material fractures with very little strain; a ductile material has a long plastic region and stretches a long way first. Note this says nothing about which is stronger — strength is the height of the curve, ductility is its width.'
	},
	{
		id: 'w1-q18',
		type: 'fill-blank',
		question:
			'Complete the formula: Factor of Safety = Maximum Stress ÷ ______ Stress.',
		answer: 'working',
		acceptableAnswers: ['working', 'design', 'working or design', 'working/design'],
		explanation:
			'FoS = Maximum Stress / Working (Design) Stress. It expresses how much stronger a system is than it needs to be for its intended load.'
	},
	{
		id: 'w1-q19',
		type: 'multiple-choice',
		question: 'For a ductile material, which stress is used in the numerator of the factor of safety?',
		options: ['Ultimate stress', 'Yield stress', 'Working stress', 'Fracture stress'],
		correctIndex: 1,
		explanation:
			'For ductile materials FoS = Yield Stress / Working Stress, because a ductile part is already unusable once it yields. For brittle materials the ultimate stress is used instead.'
	},
	{
		id: 'w1-q20',
		type: 'code-output',
		question:
			'A ductile steel component has a yield stress of 250 MPa and a working stress of 100 MPa. What is the factor of safety?',
		code: 'FoS = Yield Stress / Working Stress\nFoS = 250 MPa / 100 MPa',
		answer: '2.5',
		acceptableAnswers: ['2.5', '2.50'],
		explanation:
			'250 ÷ 100 = 2.5. Because the material is ductile you use the yield stress, not the ultimate stress.'
	},
	{
		id: 'w1-q21',
		type: 'code-output',
		question:
			'A solid cylindrical link is 0.5 m long with a diameter of 0.04 m. What is its volume in m³? Give your answer to 4 decimal places in scientific form as a decimal (hint: it is about 6 × 10⁻⁴).',
		code: 'V = π r² L\nr = d / 2 = 0.02 m\nL = 0.5 m',
		answer: '0.0006283',
		acceptableAnswers: [
			'0.0006283',
			'0.000628',
			'6.283e-4',
			'6.28e-4',
			'6.283 x 10^-4',
			'0.00062832'
		],
		explanation:
			'V = π × (0.02)² × 0.5 = π × 0.0004 × 0.5 = 6.283 × 10⁻⁴ m³. Remember to halve the diameter to get the radius.'
	},
	{
		id: 'w1-q22',
		type: 'multiple-choice',
		question:
			'That same 6.283 × 10⁻⁴ m³ link must weigh no more than 1.2 kg. Which candidate material meets the target: structural steel (7850 kg/m³), aluminium 6061-T6 (2700 kg/m³) or CFRP (1550 kg/m³)?',
		options: [
			'Structural steel only',
			'Aluminium alloy only',
			'CFRP only',
			'Both aluminium alloy and CFRP'
		],
		correctIndex: 2,
		explanation:
			'Using m = ρV: steel = 4.93 kg, aluminium = 1.70 kg, CFRP = 0.97 kg. Only CFRP comes in under the 1.2 kg limit, so it is the optimal choice for this lightweight design.'
	},
	{
		id: 'w1-q23',
		type: 'multiple-choice',
		question:
			'For a bicycle frame and front fork, which combination of properties and material is most appropriate?',
		options: [
			'High strength-to-weight ratio, stiff, fatigue resistant (e.g. titanium alloy)',
			'Maximum hardness, dense, heavy (e.g. cast iron)',
			'Low stiffness, high ductility, low cost (e.g. mild steel)',
			'Transparent, brittle, UV sensitive (e.g. PMMA)'
		],
		correctIndex: 0,
		explanation:
			'A frame must carry load without flexing, stay light, and survive thousands of load cycles — so strength-to-weight, stiffness and fatigue resistance are what matter. A heavy or flexible frame would be unrideable, and a brittle one would be dangerous.'
	},
	{
		id: 'w1-q24',
		type: 'multiple-choice',
		question:
			'Handlebars must be lightweight yet durable. Which material is LEAST likely to be selected?',
		options: [
			'Carbon fibre reinforced polymer',
			'Aluminium alloy',
			'Polypropylene plastic',
			'7000-series aluminium alloy'
		],
		correctIndex: 2,
		explanation:
			'Polypropylene is a soft, low-stiffness thermoplastic — it would flex and creep under steering loads. The other three all combine low weight with adequate strength and stiffness.'
	},
	{
		id: 'w1-q25',
		type: 'multiple-choice',
		question: 'Bicycle spokes are primarily designed to handle what type of force?',
		options: ['Compression', 'Tension', 'Shear', 'Torsion'],
		correctIndex: 1,
		explanation:
			'Spokes work in tension. They are thin wires, so they can only pull — in compression they would simply buckle. The wheel holds its shape because every spoke is tensioned between hub and rim.'
	},
	{
		id: 'w1-q26',
		type: 'multiple-choice',
		question:
			'For pedal cranks, which property is critical to prevent failure under hard acceleration?',
		options: [
			'Low thermal conductivity',
			'High yield strength and fatigue resistance',
			'Low electrical resistance',
			'High density'
		],
		correctIndex: 1,
		explanation:
			'Cranks take a large repeated bending load every pedal stroke, so they need a high yield strength (not to deform) and good fatigue resistance (not to crack over many cycles). Thermal and electrical properties are irrelevant here, and high density would only add weight.'
	}
];
