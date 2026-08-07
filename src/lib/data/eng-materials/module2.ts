import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m2Meta: ModuleMeta = {
	num: 2,
	title: 'Atomic Structure & Atomic Bonding',
	description:
		'How materials are built from the atom upwards: atomic number and mass, the mole and Avogadro’s number, electron shells, the levels of structure from nano to macro, crystal structures and unit cells (SC, BCC, FCC), atomic packing factor, the theoretical density formula, and the five types of atomic bond.',
	topics: [
		'Structure of the atom: protons, neutrons, electrons',
		'Atomic number and atomic mass',
		'Avogadro’s number, the mole and the atomic mass unit',
		'Electron shells (K, L, M) and the 2n² rule',
		'Levels of structure: nano, micro, macro',
		'Grains and grain boundaries',
		'Crystalline vs non-crystalline (amorphous) materials',
		'Unit cells and the seven crystal systems',
		'Simple cubic, body-centred cubic and face-centred cubic',
		'Atoms per unit cell and lattice parameter–radius relationships',
		'Atomic packing factor (SC 52%, BCC 68%, FCC 74%)',
		'Theoretical density: ρ = nA / (V_C N_A)',
		'Ionic, covalent, metallic, hydrogen and van der Waals bonds',
		'Binding energy and equilibrium interatomic spacing'
	]
};

export const m2Cards: CardData[] = [
	{
		id: 'w2-c01',
		type: 'list',
		front: 'What are the three sub-atomic particles in an atom, and where are they found?',
		back: [
			'Protons — positive charge, in the nucleus',
			'Neutrons — no charge, in the nucleus',
			'Electrons — negative charge, orbiting the nucleus in shells'
		],
		hint: 'Two live in the middle, one orbits around it.'
	},
	{
		id: 'w2-c02',
		type: 'concept',
		front: 'What is the atomic number of an element?',
		back: 'The atomic number is the number of protons in each atom — which, in a neutral atom, is also the number of electrons.',
		hint: 'Count the protons.'
	},
	{
		id: 'w2-c03',
		type: 'concept',
		front: 'What is the atomic mass of an element?',
		back: 'The atomic mass is the average number of protons and neutrons in the atom. Electrons are so light that they barely contribute.',
		hint: 'Add up the particles in the nucleus.'
	},
	{
		id: 'w2-c04',
		type: 'concept',
		front: 'What is Avogadro’s number?',
		back: 'Avogadro’s number is the number of atoms or molecules in one mole of a substance: N_A = 6.023 × 10²³ per mole.',
		code: 'N_A = 6.023 × 10²³ /mol',
		hint: 'It is the number of things in a mole.'
	},
	{
		id: 'w2-c05',
		type: 'concept',
		front: 'What is the atomic mass unit (amu)?',
		back: 'The atomic mass unit is the mass of an atom expressed as 1/12 of the mass of a carbon atom.',
		hint: 'Carbon is the reference, and the fraction is one twelfth.'
	},
	{
		id: 'w2-c06',
		type: 'code',
		front: 'How do you calculate the number of atoms in a given mass of an element?',
		back: 'Divide the mass by the atomic mass to get the number of moles, then multiply by Avogadro’s number. Number of atoms = (mass × N_A) / atomic mass.',
		code: 'Atoms = (mass in g × 6.023 × 10²³) / atomic mass in g/mol',
		hint: 'Grams → moles → atoms.'
	},
	{
		id: 'w2-c07',
		type: 'code',
		front: 'Calculate the number of atoms in 100 g of silver (atomic mass 107.88 g/mol).',
		back: '5.58 × 10²³ atoms. Divide 100 g by 107.88 g/mol to get 0.927 mol, then multiply by 6.023 × 10²³.',
		code: 'Atoms = (100 g × 6.023 × 10²³) / 107.88 g/mol\nAtoms = 5.58 × 10²³',
		hint: 'Less than one mole, so expect less than 6.023 × 10²³.'
	},
	{
		id: 'w2-c08',
		type: 'code',
		front: 'Calculate the number of atoms in 250 g of gold (atomic mass 196.97 g/mol).',
		back: '7.64 × 10²³ atoms. 250 / 196.97 = 1.269 mol, and 1.269 × 6.023 × 10²³ = 7.64 × 10²³.',
		code: 'Atoms = (250 g × 6.023 × 10²³) / 196.97 g/mol\nAtoms = 7.64 × 10²³',
		hint: 'More than one mole this time.'
	},
	{
		id: 'w2-c09',
		type: 'concept',
		front: 'How many electrons can each shell hold?',
		back: 'Shell n holds a maximum of 2n² electrons. So the K shell (n = 1) holds 2, the L shell (n = 2) holds 8, and the M shell (n = 3) holds 18.',
		code: 'Maximum electrons in shell n = 2n²\nK (n=1): 2×1² = 2\nL (n=2): 2×2² = 8\nM (n=3): 2×3² = 18',
		hint: 'The rule is two n squared.'
	},
	{
		id: 'w2-c10',
		type: 'concept',
		front: 'Describe the atomic structure of sodium (atomic number 11).',
		back: 'Sodium has 11 protons, 12 neutrons and 11 electrons. The electrons fill the K shell with 2 and the L shell with 8, leaving 1 electron in the M shell — so its configuration is 2, 8, 1.',
		hint: 'Fill each shell using 2n² and see what is left over.'
	},
	{
		id: 'w2-c11',
		type: 'concept',
		front: 'What is a valence electron and why does it matter?',
		back: 'A valence electron is an electron in the outermost shell. Valence electrons decide how an atom bonds to others, so they control most of a material’s chemical and electrical behaviour.',
		hint: 'It is the outer-shell electron — the one that does the bonding.'
	},
	{
		id: 'w2-c12',
		type: 'list',
		front: 'What are the three levels of structure in a material, with an example of each?',
		back: [
			'Nanostructure — nano-sized particles of iron oxide in ferrofluids',
			'Microstructure — the grain structure that sets the mechanical strength of metals and alloys',
			'Macrostructure — paints on automobiles for corrosion resistance'
		],
		hint: 'Smallest to largest: nano, micro, macro.'
	},
	{
		id: 'w2-c13',
		type: 'concept',
		front: 'What are grains and grain boundaries?',
		back: 'A grain is a region of a metal where the atoms all line up in the same crystal orientation. A grain boundary is the surface where two grains with different orientations meet. Under a microscope a polished metal looks like a patchwork of grains separated by these boundaries.',
		hint: 'Think of a patchwork or a crazy-paving pattern.'
	},
	{
		id: 'w2-c14',
		type: 'concept',
		front: 'What is the difference between a crystalline and a non-crystalline material?',
		back: 'In a crystalline material the atoms are arranged in an ordered, repeating pattern (for example quartz, crystalline SiO₂). In a non-crystalline or amorphous material the atoms are jumbled with no long-range order (for example glass, amorphous SiO₂).',
		hint: 'Quartz vs glass — same chemistry, different arrangement.'
	},
	{
		id: 'w2-c15',
		type: 'concept',
		front: 'What is a crystal structure?',
		back: 'A crystal structure is the ordered arrangement of atoms, ions or molecules in a crystalline material. It is built from a unit cell — a set of atoms arranged in a particular way, repeated periodically in three dimensions on a lattice.',
		hint: 'One repeating block, tiled in 3D.'
	},
	{
		id: 'w2-c16',
		type: 'concept',
		front: 'What is a unit cell?',
		back: 'The unit cell is the smallest repeating unit that has the full symmetry of the crystal structure. Stack unit cells in all three directions and you build the whole crystal.',
		hint: 'Smallest repeating block with the full symmetry.'
	},
	{
		id: 'w2-c17',
		type: 'list',
		front: 'Name the seven crystal systems.',
		back: [
			'Cubic',
			'Tetragonal',
			'Orthorhombic',
			'Monoclinic',
			'Triclinic',
			'Rhombohedral',
			'Hexagonal'
		],
		hint: 'Cubic is the one this course focuses on.'
	},
	{
		id: 'w2-c18',
		type: 'list',
		front: 'What are the three cubic crystal structures covered in this module?',
		back: [
			'Simple cubic (SC) — atoms only at the 8 corners',
			'Body-centred cubic (BCC) — 8 corners plus 1 atom in the centre of the cube',
			'Face-centred cubic (FCC) — 8 corners plus 1 atom in the centre of each of the 6 faces'
		],
		hint: 'Corners only, corners + middle, corners + faces.'
	},
	{
		id: 'w2-c19',
		type: 'concept',
		front: 'What is the atomic packing factor (APF)?',
		back: 'The APF is the fraction of the volume of a crystal structure that is actually occupied by atoms. APF = (number of atoms in the cell × volume of one atom) / volume of the unit cell. The rest is empty space.',
		code: 'APF = (N_particle × V_particle) / V_unit cell',
		hint: 'How much of the box is filled by spheres.'
	},
	{
		id: 'w2-c20',
		type: 'concept',
		front: 'Why does a corner atom only count as 1/8 of an atom in a cubic unit cell?',
		back: 'A corner atom is shared between the 8 unit cells that meet at that corner, so only 1/8 of its volume sits inside any one cell. Similarly, a face atom is shared between 2 cells, so it counts as 1/2.',
		hint: 'Count how many cubes meet at a corner.'
	},
	{
		id: 'w2-c21',
		type: 'code',
		front: 'How many atoms are there per unit cell in SC, BCC and FCC?',
		back: 'SC has 1 atom (8 corners × 1/8). BCC has 2 atoms (8 × 1/8 = 1 corner atom, plus 1 whole atom in the centre). FCC has 4 atoms (8 × 1/8 = 1 from the corners, plus 6 × 1/2 = 3 from the faces).',
		code: 'SC  = 8 × 1/8              = 1 atom\nBCC = 8 × 1/8 + 1          = 2 atoms\nFCC = 8 × 1/8 + 6 × 1/2    = 4 atoms',
		hint: '1, 2, 4.'
	},
	{
		id: 'w2-c22',
		type: 'code',
		front: 'How is the lattice parameter a related to the atomic radius r in SC, BCC and FCC?',
		back: 'In SC the atoms touch along the cube edge, so a = 2r. In BCC they touch along the body diagonal, so a = 4r/√3. In FCC they touch along the face diagonal, so a = 2√2 r.',
		code: 'SC:  a = 2r\nBCC: a = 4r / √3\nFCC: a = 2√2 r',
		hint: 'Ask which line through the cube the atoms touch along: edge, body diagonal or face diagonal.'
	},
	{
		id: 'w2-c23',
		type: 'code',
		front: 'What is the APF of a simple cubic structure, and how is it derived?',
		back: 'APF = π/6 = 0.52, or 52%. There is 1 atom of volume (4/3)πr³ in a cube of side a = 2r, so the cube volume is 8r³ and the ratio is π/6.',
		code: 'APF = (4/3)πr³ / (2r)³\n    = (4/3)πr³ / 8r³\n    = π/6 = 0.52 = 52%',
		hint: 'One atom in a cube of side 2r.'
	},
	{
		id: 'w2-c24',
		type: 'code',
		front: 'What is the APF of a BCC structure, and how is it derived?',
		back: 'APF = √3π/8 = 0.68, or 68%. There are 2 atoms per cell, and a = 4r/√3, so the cube volume is (4r/√3)³.',
		code: 'APF = 2 × (4/3)πr³ / (4r/√3)³\n    = √3π / 8\n    = 0.68 = 68%',
		hint: '2 atoms, and the atoms touch along the body diagonal.'
	},
	{
		id: 'w2-c25',
		type: 'code',
		front: 'What is the APF of an FCC structure, and how is it derived?',
		back: 'APF = π/(3√2) = 0.74, or 74%. There are 4 atoms per cell, and a = 2√2 r, so the cube volume is (2√2 r)³ = 16√2 r³.',
		code: 'APF = 4 × (4/3)πr³ / (2√2 r)³\n    = π / (3√2)\n    = 0.74 = 74%',
		hint: '4 atoms, and the atoms touch along the face diagonal.'
	},
	{
		id: 'w2-c26',
		type: 'list',
		front: 'What are the atomic packing factors of SC, BCC and FCC?',
		back: ['Simple cubic — 0.52 (52%)', 'Body-centred cubic — 0.68 (68%)', 'Face-centred cubic — 0.74 (74%)'],
		hint: 'FCC is the most efficient packing of the three.'
	},
	{
		id: 'w2-c27',
		type: 'concept',
		front: 'Which of SC, BCC and FCC packs atoms most efficiently, and why does that matter?',
		back: 'FCC, at 74%. A higher packing factor means more atoms in the same volume, so for the same element an FCC structure gives a higher density and generally more slip planes, which affects how easily the metal deforms.',
		hint: 'Compare 52%, 68% and 74%.'
	},
	{
		id: 'w2-c28',
		type: 'code',
		front: 'What is the formula for the theoretical density of a crystal?',
		back: 'ρ = nA / (V_C × N_A), where n is the number of atoms per unit cell, A is the atomic mass, V_C is the volume of the unit cell, and N_A is Avogadro’s number.',
		code: 'ρ = nA / (V_C N_A)\nn   = atoms per unit cell\nA   = atomic mass (g/mol)\nV_C = unit cell volume (cm³)\nN_A = 6.023 × 10²³ /mol',
		hint: 'Mass of the atoms in one cell, divided by the volume of that cell.'
	},
	{
		id: 'w2-c29',
		type: 'code',
		front: 'Calculate the density of aluminium: FCC, atomic radius 0.143 nm, atomic mass 26.98 g/mol.',
		back: '2.708 g/cm³ (2708 kg/m³). For FCC, n = 4 and a = 2√2 r = 0.4045 nm = 4.045 × 10⁻⁸ cm, so V_C = a³ = 6.62 × 10⁻²³ cm³. Then ρ = (4 × 26.98) / (6.62 × 10⁻²³ × 6.023 × 10²³).',
		code: 'a   = 2√2 × 0.143 nm = 0.4045 nm = 4.045 × 10⁻⁸ cm\nV_C = a³ = 6.62 × 10⁻²³ cm³\nρ   = (4 × 26.98) / (6.62 × 10⁻²³ × 6.023 × 10²³)\nρ   = 2.708 g/cm³',
		hint: 'Get a from r first, then cube it to get the cell volume.'
	},
	{
		id: 'w2-c30',
		type: 'code',
		front: 'Calculate the atomic radius of aluminium given: FCC, density 2.7 Mg/m³, atomic mass 26.98 g/mol.',
		back: '0.143 nm. Rearrange the density formula to get V_C = nA / (ρ N_A) = 6.64 × 10⁻²³ cm³, take the cube root for a = 0.4049 nm, then use the FCC relation r = a / (2√2).',
		code: 'V_C = nA / (ρ N_A)\nV_C = (4 × 26.98) / (2.7 × 6.023 × 10²³) = 6.64 × 10⁻²³ cm³\na   = ∛V_C = 4.049 × 10⁻⁸ cm = 0.4049 nm\nr   = a / (2√2) = 0.143 nm',
		hint: 'This is the density calculation run backwards.'
	},
	{
		id: 'w2-c31',
		type: 'code',
		front: 'A BCC metal has atomic mass 95.94 g/mol and density 10.22 g/cm³. Find its atomic radius.',
		back: '136.3 pm (0.1363 nm). For BCC n = 2, so V_C = (2 × 95.94) / (10.22 × 6.023 × 10²³) = 3.12 × 10⁻²³ cm³. The cube root gives a = 0.3147 nm, and for BCC r = a√3 / 4.',
		code: 'V_C = nA / (ρ N_A) = 3.12 × 10⁻²³ cm³\na   = ∛V_C = 0.3147 nm\nr   = a√3 / 4 = 0.1363 nm = 136.3 pm',
		hint: 'Same method as aluminium, but n = 2 and the BCC radius relation.'
	},
	{
		id: 'w2-c32',
		type: 'list',
		front: 'What are the main types of atomic bond?',
		back: [
			'Ionic bond — electrons are transferred',
			'Covalent bond — electrons are shared (polar or non-polar)',
			'Metallic bond — valence electrons form a shared "electron sea"',
			'Hydrogen bond — attraction between polar molecules',
			'Van der Waals bond — weak attraction between molecules'
		],
		hint: 'Transfer, share, sea, plus two weak secondary bonds.'
	},
	{
		id: 'w2-c33',
		type: 'concept',
		front: 'What is an ionic bond? Give the classic example.',
		back: 'An ionic bond forms between two unlike atoms with different electronegativities, when one atom donates a valence electron to the other. In NaCl, sodium donates its single valence electron to chlorine; sodium becomes Na⁺ and chlorine becomes Cl⁻, and the opposite charges attract.',
		hint: 'The electron is given away, not shared.'
	},
	{
		id: 'w2-c34',
		type: 'concept',
		front: 'What is a covalent bond? Give the classic example.',
		back: 'A covalent bond forms when atoms share electrons so that each atom’s outer orbital is filled. Silicon has a valence of four, so each silicon atom forms four covalent bonds with its neighbours.',
		hint: 'Sharing, not transferring.'
	},
	{
		id: 'w2-c35',
		type: 'concept',
		front: 'What is the difference between a polar and a non-polar covalent bond?',
		back: 'In a non-polar covalent bond the electrons are shared equally, because the two atoms pull on them equally. In a polar covalent bond one atom is more electronegative and pulls the shared electrons closer, so one end becomes slightly negative (δ−) and the other slightly positive (δ+).',
		hint: 'It depends on whether the two atoms pull equally.'
	},
	{
		id: 'w2-c36',
		type: 'concept',
		front: 'What is a metallic bond?',
		back: 'In a metallic bond the atoms give up their valence electrons, which form a shared "electron sea". The positively charged atom cores are held together by their mutual attraction to this negatively charged sea of electrons.',
		hint: 'The key phrase is "electron sea".'
	},
	{
		id: 'w2-c37',
		type: 'concept',
		front: 'Why do metals conduct electricity well while ionic materials conduct poorly?',
		back: 'In a metal the electrons in the electron sea are free to move as soon as a voltage is applied, so current flows easily. In an ionic material there are no free electrons — whole ions have to move to carry the current, which is slow, so the conductivity is poor.',
		hint: 'Compare what has to physically move in each case: an electron or a whole ion.'
	},
	{
		id: 'w2-c38',
		type: 'concept',
		front: 'What is a hydrogen bond?',
		back: 'A hydrogen bond is the attraction between polar molecules where a hydrogen atom carries a slight positive charge and is attracted to a slightly negative atom (such as oxygen) on a neighbouring molecule. It is what holds water molecules to one another.',
		hint: 'Think about why water molecules stick together.'
	},
	{
		id: 'w2-c39',
		type: 'concept',
		front: 'What is a van der Waals bond, and what does it do in PVC?',
		back: 'Van der Waals bonds are weak attractions between molecules caused by uneven charge distribution. In PVC the chlorine atoms on the polymer chain are slightly negative and the hydrogen atoms slightly positive, so neighbouring chains are weakly bonded together. This extra bonding makes PVC stiffer; when enough force is applied the van der Waals bonds break and the chains slide past one another.',
		hint: 'They are the weakest bonds, and they are what break when a polymer deforms.'
	},
	{
		id: 'w2-c40',
		type: 'list',
		front: 'Rank the four bonding mechanisms by binding energy (kcal/mol).',
		back: [
			'Ionic — 150 to 370 (strongest)',
			'Covalent — 125 to 300',
			'Metallic — 25 to 200',
			'Van der Waals — less than 10 (weakest)'
		],
		hint: 'Ionic is strongest, van der Waals is by far the weakest.'
	},
	{
		id: 'w2-c41',
		type: 'concept',
		front: 'What is the equilibrium interatomic spacing, and what is binding energy?',
		back: 'Atoms sit at the separation where the inter-atomic energy is at its minimum — that spacing is the equilibrium interatomic spacing, equal to 2r, and at that point the net force is zero. The binding energy is the depth of that energy well: the energy you would have to supply to pull the two atoms apart.',
		hint: 'Look for the bottom of the energy curve, where the force crosses zero.'
	},
	{
		id: 'w2-c42',
		type: 'concept',
		front: 'What happens to the force between two atoms if you push them closer than the equilibrium spacing?',
		back: 'They repel. Closer than the equilibrium spacing the force is repulsive; further apart it is attractive. Only at the equilibrium spacing is the net force zero, which is why atoms settle there.',
		hint: 'Look at which side of the zero crossing you are on.'
	},
	{
		id: 'w2-c43',
		type: 'list',
		front: 'Give an example of a functional material for each application area.',
		back: [
			'Aerospace — carbon fibre composites, titanium alloys',
			'Biomedical — titanium and cobalt-chrome implants, biocompatible polymers',
			'Electronic — silicon, copper, gallium arsenide',
			'Energy and environmental — silicon photovoltaics, lithium-ion battery materials',
			'Magnetic — iron, ferrites, neodymium magnets',
			'Optical — glass, optical fibre, quartz',
			'Smart materials — piezoelectric ceramics, shape-memory alloys',
			'Structural — steel, concrete, aluminium alloys'
		],
		hint: 'One material per application, chosen for the property that application needs.'
	}
];

export const m2Quiz: QuizData[] = [
	{
		id: 'w2-q01',
		type: 'multiple-choice',
		question: 'The atomic number of an element is equal to the number of:',
		options: [
			'Neutrons in the nucleus',
			'Protons (or electrons) in each atom',
			'Protons plus neutrons',
			'Electron shells'
		],
		correctIndex: 1,
		explanation:
			'The atomic number is the number of protons, which in a neutral atom equals the number of electrons. Protons plus neutrons gives the atomic mass instead.'
	},
	{
		id: 'w2-q02',
		type: 'fill-blank',
		question: 'What is the value of Avogadro’s number? (Give it in the form 6.023 × 10^x)',
		answer: '6.023 x 10^23',
		acceptableAnswers: [
			'6.023 x 10^23',
			'6.023e23',
			'6.023 × 10²³',
			'6.02 x 10^23',
			'6.022 x 10^23',
			'6.023x10^23'
		],
		explanation:
			'Avogadro’s number is 6.023 × 10²³ per mole — the number of atoms or molecules in one mole of a substance.'
	},
	{
		id: 'w2-q03',
		type: 'multiple-choice',
		question: 'The atomic mass unit of an element is defined as:',
		options: [
			'The mass of a single proton',
			'1/12 the mass of a carbon atom',
			'The mass of one mole of the element',
			'The mass of an atom divided by Avogadro’s number'
		],
		correctIndex: 1,
		explanation: 'The atomic mass unit is the mass of an atom expressed as 1/12 the mass of a carbon atom.'
	},
	{
		id: 'w2-q04',
		type: 'code-output',
		question:
			'How many atoms are there in 100 g of silver? The atomic mass of silver is 107.88 g/mol. Give your answer as a multiple of 10²³ (e.g. "5.58").',
		code: 'Atoms = (mass × N_A) / atomic mass\nAtoms = (100 × 6.023 × 10²³) / 107.88',
		answer: '5.58',
		acceptableAnswers: ['5.58', '5.58 x 10^23', '5.583', '5.6'],
		explanation:
			'100 / 107.88 = 0.927 mol, and 0.927 × 6.023 × 10²³ = 5.58 × 10²³ atoms. Less than a mole of silver, so fewer than 6.023 × 10²³ atoms.'
	},
	{
		id: 'w2-q05',
		type: 'code-output',
		question:
			'How many atoms are there in 250 g of gold? The atomic mass of gold is 196.97 g/mol. Give your answer as a multiple of 10²³.',
		code: 'Atoms = (250 × 6.023 × 10²³) / 196.97',
		answer: '7.64',
		acceptableAnswers: ['7.64', '7.64 x 10^23', '7.6'],
		explanation: '250 / 196.97 = 1.269 mol, and 1.269 × 6.023 × 10²³ = 7.64 × 10²³ atoms.'
	},
	{
		id: 'w2-q06',
		type: 'fill-blank',
		question:
			'What is the rule for the maximum number of electrons a shell can hold? (Write it in terms of n.)',
		answer: '2n^2',
		acceptableAnswers: ['2n^2', '2n²', '2n2', '2 n^2', '2*n^2'],
		explanation:
			'Shell n holds at most 2n² electrons: K (n=1) holds 2, L (n=2) holds 8, M (n=3) holds 18.'
	},
	{
		id: 'w2-q07',
		type: 'multiple-choice',
		question: 'Sodium has atomic number 11. What is its electron configuration by shell?',
		options: ['2, 9', '2, 8, 1', '8, 2, 1', '2, 8, 8'],
		correctIndex: 1,
		explanation:
			'Fill K with 2 (2×1²), then L with 8 (2×2²), leaving 1 electron in the M shell — so 2, 8, 1. That single outer electron is what sodium donates in an ionic bond.'
	},
	{
		id: 'w2-q08',
		type: 'multiple-choice',
		question:
			'The mechanical strength of metals and alloys is determined at which level of structure?',
		options: ['Nanostructure', 'Microstructure', 'Macrostructure', 'Atomic structure only'],
		correctIndex: 1,
		explanation:
			'Mechanical strength of metals and alloys is a microstructure property — it depends on the grains and grain boundaries. Ferrofluids are a nanostructure example, and automotive paint is a macrostructure example.'
	},
	{
		id: 'w2-q09',
		type: 'multiple-choice',
		question: 'What is a grain boundary?',
		options: [
			'The outer edge of a metal component',
			'The surface where two grains of different crystal orientation meet',
			'A crack that has formed in the metal',
			'The boundary of a single unit cell'
		],
		correctIndex: 1,
		explanation:
			'A grain boundary is the interface between two grains whose crystal orientations differ. It is a normal feature of the microstructure, not a defect like a crack.'
	},
	{
		id: 'w2-q10',
		type: 'multiple-choice',
		question:
			'Quartz and glass are both SiO₂. What is the structural difference between them?',
		options: [
			'Quartz is crystalline (ordered); glass is non-crystalline (amorphous)',
			'Glass is crystalline; quartz is amorphous',
			'They have different atoms',
			'Quartz has grain boundaries and glass does not'
		],
		correctIndex: 0,
		explanation:
			'Crystalline SiO₂ (quartz) has an ordered, repeating atomic arrangement. Amorphous SiO₂ (glass) has the same chemistry but no long-range order.'
	},
	{
		id: 'w2-q11',
		type: 'fill-blank',
		question:
			'What is the name for the smallest repeating unit that has the full symmetry of a crystal structure?',
		answer: 'unit cell',
		acceptableAnswers: ['unit cell', 'the unit cell', 'unitcell'],
		explanation:
			'The unit cell is the smallest repeating unit with the full symmetry of the crystal structure. Repeat it in three dimensions on a lattice and you get the whole crystal.'
	},
	{
		id: 'w2-q12',
		type: 'multiple-choice',
		question: 'How many atoms are there per unit cell in a face-centred cubic (FCC) structure?',
		options: ['1', '2', '4', '8'],
		correctIndex: 2,
		explanation:
			'FCC has 8 corners × 1/8 = 1 atom, plus 6 faces × 1/2 = 3 atoms, giving 4 atoms per unit cell. SC has 1 and BCC has 2.'
	},
	{
		id: 'w2-q13',
		type: 'multiple-choice',
		question: 'How many atoms are there per unit cell in a body-centred cubic (BCC) structure?',
		options: ['1', '2', '4', '6'],
		correctIndex: 1,
		explanation:
			'BCC has 8 corners × 1/8 = 1 atom, plus 1 whole atom at the centre of the cube = 2 atoms per unit cell.'
	},
	{
		id: 'w2-q14',
		type: 'multiple-choice',
		question: 'Why does a corner atom count as only 1/8 of an atom in a cubic unit cell?',
		options: [
			'Because corner atoms are smaller than the others',
			'Because eight unit cells meet at that corner, so it is shared between them',
			'Because only 1/8 of the atom is a real atom',
			'Because corner atoms are only counted in FCC'
		],
		correctIndex: 1,
		explanation:
			'Eight cubes meet at each corner, so only 1/8 of that atom’s volume lies inside any one unit cell. By the same logic a face atom is shared between 2 cells and counts as 1/2.'
	},
	{
		id: 'w2-q15',
		type: 'fill-blank',
		question:
			'For an FCC structure, what is the lattice parameter a in terms of the atomic radius r?',
		answer: '2√2 r',
		acceptableAnswers: [
			'2√2 r',
			'2√2r',
			'2 root 2 r',
			'2sqrt(2)r',
			'2*sqrt(2)*r',
			'2 sqrt 2 r',
			'a = 2√2r'
		],
		explanation:
			'In FCC the atoms touch along the face diagonal, giving a = 2√2 r. For comparison, SC gives a = 2r and BCC gives a = 4r/√3.'
	},
	{
		id: 'w2-q16',
		type: 'multiple-choice',
		question: 'What is the atomic packing factor of a simple cubic structure?',
		options: ['0.52 (52%)', '0.68 (68%)', '0.74 (74%)', '1.00 (100%)'],
		correctIndex: 0,
		explanation:
			'Simple cubic packs at π/6 = 0.52, or 52%. BCC is 68% and FCC is 74%.'
	},
	{
		id: 'w2-q17',
		type: 'code-output',
		question:
			'What is the atomic packing factor of a BCC structure? Give your answer as a decimal to 2 places.',
		code: 'APF = 2 × (4/3)πr³ / (4r/√3)³',
		answer: '0.68',
		acceptableAnswers: ['0.68', '.68', '68%', '0.680'],
		explanation:
			'With 2 atoms per cell and a = 4r/√3, the APF works out to √3π/8 = 0.68, or 68%.'
	},
	{
		id: 'w2-q18',
		type: 'code-output',
		question:
			'What is the atomic packing factor of an FCC structure? Give your answer as a decimal to 2 places.',
		code: 'APF = 4 × (4/3)πr³ / (2√2 r)³',
		answer: '0.74',
		acceptableAnswers: ['0.74', '.74', '74%', '0.740'],
		explanation:
			'With 4 atoms per cell and a = 2√2 r, the APF is π/(3√2) = 0.74, or 74% — the most efficient of the three cubic structures.'
	},
	{
		id: 'w2-q19',
		type: 'multiple-choice',
		question: 'Which cubic structure packs its atoms most efficiently?',
		options: ['Simple cubic', 'Body-centred cubic', 'Face-centred cubic', 'They are all the same'],
		correctIndex: 2,
		explanation: 'FCC at 74% beats BCC at 68% and SC at 52%.'
	},
	{
		id: 'w2-q20',
		type: 'fill-blank',
		question:
			'In the theoretical density formula ρ = nA / (V_C N_A), what does n represent?',
		answer: 'number of atoms per unit cell',
		acceptableAnswers: [
			'number of atoms per unit cell',
			'atoms per unit cell',
			'number of atoms',
			'no of atoms per unit cell',
			'number of atoms in the unit cell'
		],
		explanation:
			'n is the number of atoms per unit cell — 1 for SC, 2 for BCC, 4 for FCC. A is the atomic mass, V_C the unit cell volume and N_A Avogadro’s number.'
	},
	{
		id: 'w2-q21',
		type: 'code-output',
		question:
			'Calculate the density of aluminium in g/cm³. It is FCC with an atomic radius of 0.143 nm and an atomic mass of 26.98 g/mol. Give your answer to 3 decimal places.',
		code: 'a   = 2√2 r = 4.045 × 10⁻⁸ cm\nV_C = a³ = 6.62 × 10⁻²³ cm³\nρ   = nA / (V_C N_A), n = 4',
		answer: '2.708',
		acceptableAnswers: ['2.708', '2.71', '2.7', '2.708 g/cm3'],
		explanation:
			'ρ = (4 × 26.98) / (6.62 × 10⁻²³ × 6.023 × 10²³) = 2.708 g/cm³, which is 2708 kg/m³ — the familiar density of aluminium.'
	},
	{
		id: 'w2-q22',
		type: 'code-output',
		question:
			'Aluminium is FCC with a density of 2.7 Mg/m³ and an atomic mass of 26.98 g/mol. Calculate its atomic radius in nanometres, to 3 decimal places.',
		code: 'V_C = nA / (ρ N_A), n = 4\na   = ∛V_C\nr   = a / (2√2)',
		answer: '0.143',
		acceptableAnswers: ['0.143', '.143', '0.143 nm', '0.143nm'],
		explanation:
			'V_C = (4 × 26.98)/(2.7 × 6.023 × 10²³) = 6.64 × 10⁻²³ cm³. The cube root gives a = 0.4049 nm, and r = a/(2√2) = 0.143 nm. This is the density calculation run in reverse.'
	},
	{
		id: 'w2-q23',
		type: 'code-output',
		question:
			'A metal with an atomic mass of 95.94 g/mol crystallises as BCC with a density of 10.22 g/cm³. Calculate its atomic radius in picometres, to 1 decimal place.',
		code: 'V_C = nA / (ρ N_A), n = 2\na   = ∛V_C\nr   = a√3 / 4',
		answer: '136.3',
		acceptableAnswers: ['136.3', '136', '136.3 pm', '0.1363 nm'],
		explanation:
			'V_C = (2 × 95.94)/(10.22 × 6.023 × 10²³) = 3.12 × 10⁻²³ cm³, so a = 0.3147 nm. For BCC, r = a√3/4 = 0.1363 nm = 136.3 pm. Watch that n = 2 for BCC, not 4.'
	},
	{
		id: 'w2-q24',
		type: 'multiple-choice',
		question:
			'Sodium donates its valence electron to chlorine, forming Na⁺ and Cl⁻ which then attract each other. What type of bond is this?',
		options: ['Covalent bond', 'Ionic bond', 'Metallic bond', 'Van der Waals bond'],
		correctIndex: 1,
		explanation:
			'This is an ionic bond — it forms between two unlike atoms with different electronegativities when one transfers a valence electron to the other.'
	},
	{
		id: 'w2-q25',
		type: 'multiple-choice',
		question: 'Silicon has a valence of four and forms four bonds by sharing electrons with its neighbours. What type of bond is this?',
		options: ['Ionic bond', 'Metallic bond', 'Covalent bond', 'Hydrogen bond'],
		correctIndex: 2,
		explanation:
			'Sharing electrons so that each atom’s outer orbital is filled is covalent bonding. Silicon, with a valence of four, must form four covalent bonds.'
	},
	{
		id: 'w2-q26',
		type: 'fill-blank',
		question:
			'In a metallic bond, atoms give up their valence electrons, which form a shared ______ ______ (two words).',
		answer: 'electron sea',
		acceptableAnswers: ['electron sea', 'sea of electrons', 'electron cloud'],
		explanation:
			'The valence electrons form an electron sea. The positively charged atom cores are held together by their mutual attraction to this negatively charged sea.'
	},
	{
		id: 'w2-q27',
		type: 'multiple-choice',
		question: 'Why do ionic materials conduct electricity poorly compared with metals?',
		options: [
			'Their electrons are too heavy to move',
			'Whole ions must move to carry current, which is slow — there are no free electrons',
			'They have no charged particles at all',
			'Their bonds are too weak to carry current'
		],
		correctIndex: 1,
		explanation:
			'In a metal, free electrons in the electron sea move as soon as a voltage is applied. In an ionic material there are no free electrons, so entire ions must migrate — a slow process, giving poor conductivity.'
	},
	{
		id: 'w2-q28',
		type: 'multiple-choice',
		question: 'Which bonding mechanism has the LOWEST binding energy?',
		options: ['Ionic', 'Covalent', 'Metallic', 'Van der Waals'],
		correctIndex: 3,
		explanation:
			'Van der Waals bonds are under 10 kcal/mol. Ionic is highest at 150–370, then covalent at 125–300, then metallic at 25–200.'
	},
	{
		id: 'w2-q29',
		type: 'multiple-choice',
		question:
			'In PVC, what happens to the van der Waals bonds between the polymer chains when a force is applied?',
		options: [
			'They get stronger, stiffening the polymer further',
			'They break, allowing the chains to slide past one another',
			'They turn into covalent bonds',
			'Nothing — only the covalent bonds along the chain are affected'
		],
		correctIndex: 1,
		explanation:
			'The van der Waals bonds between chains break and the chains slide past one another. It is that extra inter-chain bonding that makes PVC stiffer in the first place.'
	},
	{
		id: 'w2-q30',
		type: 'multiple-choice',
		question:
			'On the inter-atomic energy curve, what is true at the equilibrium interatomic spacing?',
		options: [
			'The energy is at a maximum and the force is repulsive',
			'The energy is at a minimum and the net force is zero',
			'The energy is zero and the force is attractive',
			'Both the energy and the force are at a maximum'
		],
		correctIndex: 1,
		explanation:
			'Atoms settle at the spacing (equal to 2r) where the inter-atomic energy is a minimum and the net force is zero. The depth of that energy well is the binding energy.'
	}
];
