import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m6Meta: ModuleMeta = {
	num: 6,
	title: 'Mid-Semester Review: Vectors & Complex Numbers',
	description:
		'A consolidation module for the mid-semester test. It revises the key vector formulae (magnitude, unit vectors, dot and cross products, projections, lines and planes) and the complex number toolkit (rectangular and polar forms, conjugates, modulus and argument, polar multiplication/division, powers and roots, and solving complex equations) using the exam formulae sheet and worked practice-test problems.',
	topics: [
		'Vector magnitude and unit vectors',
		'Dot product, angle and projections',
		'Cross product and the determinant rule',
		'Equations of lines and planes',
		'Complex numbers in rectangular form',
		'Modulus, argument and polar (cis) form',
		'Multiplication, division, powers and roots in polar form',
		'Solving complex equations and quadratics'
	]
};

export const m6Cards: CardData[] = [
	// ---- Vectors ----
	{
		id: 'w6-c01',
		type: 'concept',
		front: 'For r = x i + y j + z k, what is the magnitude |r|?',
		back: '|r| = √(x² + y² + z²) — the square root of the sum of the squares of the components.',
		hint: 'Pythagoras in 3D.'
	},
	{
		id: 'w6-c02',
		type: 'concept',
		front: 'How do you find the unit vector r̂ in the direction of r = x i + y j + z k?',
		back: 'Divide the vector by its magnitude: r̂ = (1/|r|)(x i + y j + z k) = r / |r|.',
		hint: 'Vector over its own length.'
	},
	{
		id: 'w6-c03',
		type: 'concept',
		front: 'State the geometric definition of the dot (scalar) product.',
		back: 'r₁ · r₂ = |r₁| |r₂| cos(θ), where θ is the angle between the two vectors. The result is a scalar.',
		hint: 'Magnitudes times cos of the angle.'
	},
	{
		id: 'w6-c04',
		type: 'concept',
		front: 'How is the dot product computed from components?',
		back: 'For r₁ = x₁ i + y₁ j + z₁ k and r₂ = x₂ i + y₂ j + z₂ k: r₁ · r₂ = x₁x₂ + y₁y₂ + z₁z₂.',
		hint: 'Multiply matching components and add.'
	},
	{
		id: 'w6-c05',
		type: 'concept',
		front: 'What does a dot product of two non-zero lengths and angle 180° give? (e.g. |a| = 5, |b| = 4)',
		back: 'a · b = |a| |b| cos(180°) = 5 × 4 × (−1) = −20. An angle of 180° (anti-parallel) gives the most negative dot product.',
		hint: 'cos(180°) = −1.'
	},
	{
		id: 'w6-c06',
		type: 'concept',
		front: 'What is the formula for the angle between two vectors a and b?',
		back: 'θ = cos⁻¹( (a · b) / (|a| |b|) ). Rearranged from a · b = |a| |b| cos(θ).'
	},
	{
		id: 'w6-c07',
		type: 'concept',
		front: 'What is the scalar projection of a onto b?',
		back: 'a · b̂ — the dot product of a with the unit vector of b. It is a number giving the signed length of a along the direction of b.',
		hint: 'Dot a with the unit vector of b.'
	},
	{
		id: 'w6-c08',
		type: 'concept',
		front: 'What is the vector projection (vector resolute) of a onto b?',
		back: '(a · b̂) b̂ — the scalar projection multiplied by the unit vector of b. The result is a vector parallel to b.'
	},
	{
		id: 'w6-c09',
		type: 'concept',
		front: 'What is the vector projection of a perpendicular to b?',
		back: 'a − (a · b̂) b̂ — the original vector minus its component along b. The result is a vector perpendicular to b.',
		hint: 'Subtract the parallel part from a.'
	},
	{
		id: 'w6-c10',
		type: 'concept',
		front: 'Worked example: find the vector resolute of u = 2i + 2j − k in the direction of v = −i + j − k.',
		back: '|v| = √3, so û = (1/√3)(−i + j − k). u · v = (−2 + 2 + 1) = 1, so u · v̂ = 1/√3. The vector resolute is (1/√3)(1/√3)(−i + j − k) = (1/3)(−i + j − k) = −⅓i + ⅓j − ⅓k.',
		hint: 'Scalar resolute = u · v̂, then multiply by v̂.'
	},
	{
		id: 'w6-c11',
		type: 'concept',
		front: 'State the geometric definition of the cross (vector) product.',
		back: 'A × B = n̂ |A| |B| sin(θ), where n̂ is the unit vector perpendicular to both A and B (right-hand rule) and θ is the angle between them. The result is a vector.',
		hint: 'Result is a vector; uses sin(θ).'
	},
	{
		id: 'w6-c12',
		type: 'concept',
		front: 'How is a × b computed using a 3×3 determinant?',
		back: 'Put i, j, k in the top row, a₁ a₂ a₃ in the second, b₁ b₂ b₃ in the third, and expand: a × b = i(a₂b₃ − a₃b₂) − j(a₁b₃ − a₃b₁) + k(a₁b₂ − a₂b₁).'
	},
	{
		id: 'w6-c13',
		type: 'concept',
		front: 'How do you evaluate a 2×2 determinant |a b; c d|?',
		back: '|a b; c d| = ad − bc (main diagonal product minus the other diagonal product).',
		hint: 'ad − bc.'
	},
	{
		id: 'w6-c14',
		type: 'concept',
		front: 'How do you find a unit vector perpendicular to both a and b?',
		back: 'Take the cross product and normalise it: n̂ = (a × b) / |a × b|.',
		hint: 'Cross product, then divide by its magnitude.'
	},
	{
		id: 'w6-c15',
		type: 'concept',
		front: 'Worked example: find a unit vector perpendicular to both u = 4i + 4j + 4k and v = 2i − j + k.',
		back: 'u × v = i(4+4) − j(4−8) + k(−4−8) = 8i + 4j − 12k. |u × v| = √(64+16+144) = √224. So n̂ = (1/√224)(8i + 4j − 12k).',
		hint: 'Determinant first, then normalise.'
	},
	{
		id: 'w6-c16',
		type: 'list',
		front: 'Give the three equation forms of a line through P₀(x₀, y₀, z₀) parallel to v = ai + bj + ck.',
		back: [
			'Vector form: r = r₀ + t v (where r₀ = OP₀⃗)',
			'Parametric form: x = x₀ + ta, y = y₀ + tb, z = z₀ + tc',
			'Cartesian form: (x − x₀)/a = (y − y₀)/b = (z − z₀)/c = t'
		],
		hint: 'Vector, parametric, Cartesian.'
	},
	{
		id: 'w6-c17',
		type: 'concept',
		front: 'What is the equation of a plane through P₀(x₀, y₀, z₀) with normal n = ai + bj + ck?',
		back: 'a(x − x₀) + b(y − y₀) + c(z − z₀) = 0, or ax + by + cz = d where d = ax₀ + by₀ + cz₀.',
		hint: 'Normal components become the coefficients.'
	},
	{
		id: 'w6-c18',
		type: 'concept',
		front: 'How do you read off the normal vector from the plane 2x − y − z = 0?',
		back: 'The coefficients of x, y, z are the components of the normal: n = 2i − j − k.',
		hint: 'Coefficients = normal components.'
	},
	{
		id: 'w6-c19',
		type: 'concept',
		front: 'Worked example: find the equation of the plane through (0, 2, 2) with normal i + j + k.',
		back: '1(x − 0) + 1(y − 2) + 1(z − 2) = 0 → x + y + z − 4 = 0.',
		hint: 'Substitute the point and normal into the plane formula.'
	},
	{
		id: 'w6-c20',
		type: 'concept',
		front: 'How do you check whether a point lies on a plane such as 2x + y − z − 5 = 0?',
		back: 'Substitute the point\'s coordinates and confirm the equation holds. For (1, 2, −1): 2(1) + 2 − (−1) − 5 = 2 + 2 + 1 − 5 = 0 ✓, so the point lies on the plane.',
		hint: 'Substitute and check it equals zero.'
	},
	// ---- Complex numbers ----
	{
		id: 'w6-c21',
		type: 'concept',
		front: 'What is the imaginary unit i, and what is i²?',
		back: 'i is defined by i² = −1, so i = √(−1). It lets us write square roots of negative numbers.',
		hint: 'i² = −1.'
	},
	{
		id: 'w6-c22',
		type: 'concept',
		front: 'For z = x + yi, what are Re(z) and Im(z), and what is the conjugate z̄?',
		back: 'Re(z) = x (real part), Im(z) = y (imaginary part). The conjugate is z̄ = x − yi (flip the sign of the imaginary part).'
	},
	{
		id: 'w6-c23',
		type: 'concept',
		front: 'How do you find the modulus |z| of z = x + yi?',
		back: '|z| = √(x² + y²) — the distance from the origin in the Argand plane.',
		hint: 'Pythagoras on the real and imaginary parts.'
	},
	{
		id: 'w6-c24',
		type: 'concept',
		front: 'Worked example: find |z| for z = √7 + √5 i.',
		back: '|z| = √((√7)² + (√5)²) = √(7 + 5) = √12 = √(4·3) = 2√3.',
		hint: 'Square the parts: 7 + 5 = 12.'
	},
	{
		id: 'w6-c25',
		type: 'concept',
		front: 'What is the polar (cis) form of a complex number, and how do x and y relate to r and θ?',
		back: 'z = r(cos θ + i sin θ) = r cis θ, where r = |z| and θ = Arg z. The conversions are x = r cos θ and y = r sin θ.',
		hint: 'cis θ = cos θ + i sin θ.'
	},
	{
		id: 'w6-c26',
		type: 'concept',
		front: 'How is the argument Arg z found, and what is its principal range?',
		back: 'Arg z = θ = tan⁻¹(y/x), chosen so that −π < Arg z ≤ π. Always check the quadrant of (x, y) to pick the correct angle.',
		hint: 'tan⁻¹(y/x), but mind the quadrant.'
	},
	{
		id: 'w6-c27',
		type: 'concept',
		front: 'What is the conjugate of z = r cis θ in polar form?',
		back: 'z̄ = r cis(−θ) — same modulus, negated argument (reflection across the real axis).',
		hint: 'Negate the angle.'
	},
	{
		id: 'w6-c28',
		type: 'concept',
		front: 'How do you multiply two complex numbers in polar form?',
		back: 'z₁ z₂ = r₁ r₂ cis(θ₁ + θ₂) — multiply the moduli and add the arguments.',
		hint: 'Multiply moduli, add angles.'
	},
	{
		id: 'w6-c29',
		type: 'concept',
		front: 'Worked example: with u = 10 cis 55° and v = 2 cis 10°, find uv.',
		back: 'uv = (10 × 2) cis(55° + 10°) = 20 cis 65°.',
		hint: 'Multiply moduli (20), add angles (65°).'
	},
	{
		id: 'w6-c30',
		type: 'concept',
		front: 'How do you divide two complex numbers in polar form?',
		back: 'z₁/z₂ = (r₁/r₂) cis(θ₁ − θ₂) — divide the moduli and subtract the arguments.',
		hint: 'Divide moduli, subtract angles.'
	},
	{
		id: 'w6-c31',
		type: 'concept',
		front: 'Worked example: with u = 8 cis 50° and v = 2 cis 5°, find u/v.',
		back: 'u/v = (8/2) cis(50° − 5°) = 4 cis 45°.',
		hint: 'Divide moduli (4), subtract angles (45°).'
	},
	{
		id: 'w6-c32',
		type: 'concept',
		front: "State De Moivre's theorem for powers in polar form.",
		back: 'zⁿ = rⁿ cis(nθ) — raise the modulus to the power and multiply the argument by n.',
		hint: 'Power the modulus, multiply the angle.'
	},
	{
		id: 'w6-c33',
		type: 'concept',
		front: 'What is the formula for the nth roots of a complex number z = r cis θ?',
		back: 'z^(1/n) = r^(1/n) cis( (θ + 2πk)/n ) for k = 0, 1, …, n−1. This gives n distinct roots equally spaced around a circle of radius r^(1/n).',
		hint: 'Add 2πk before dividing the angle by n.'
	},
	{
		id: 'w6-c34',
		type: 'concept',
		front: 'How do you solve a quartic like z⁴ − z² − 12 = 0?',
		back: 'Substitute u = z². Then u² − u − 12 = 0 → (u − 4)(u + 3) = 0, so u = 4 or u = −3. Back-substitute: z² = 4 gives z = ±2; z² = −3 gives z = ±√3 i.',
		hint: 'Let u = z² to reduce it to a quadratic.'
	},
	{
		id: 'w6-c35',
		type: 'concept',
		front: 'How do you solve a complex quadratic such as 2z² + z + 1 = 0?',
		back: 'Use the quadratic formula z = (−b ± √(b² − 4ac)) / 2a. Here z = (−1 ± √(1 − 8)) / 4 = (−1 ± √(−7)) / 4 = −¼ ± (√7/4) i. A negative discriminant gives a complex conjugate pair.',
		hint: 'Negative discriminant → imaginary part √(−7) = √7 i.'
	}
];

export const m6Quiz: QuizData[] = [
	{
		id: 'w6-q01',
		type: 'multiple-choice',
		question: 'Two vectors have lengths 5 and 4 and are inclined at an angle of 180°. What is their dot product?',
		options: ['13', '−11.472', '−20', '−16'],
		correctIndex: 2,
		explanation:
			'a · b = |a| |b| cos(θ) = 5 × 4 × cos(180°) = 20 × (−1) = −20.'
	},
	{
		id: 'w6-q02',
		type: 'multiple-choice',
		question: 'What is the normal vector to the plane 2x − y − z = 0?',
		options: ['2i − j − k', '2i − j + k', '2i − j − 5k', '2i − 4j − k'],
		correctIndex: 0,
		explanation:
			'The coefficients of x, y and z give the normal directly: n = 2i − j − k.'
	},
	{
		id: 'w6-q03',
		type: 'multiple-choice',
		question: 'The vector resolute of u = 2i + 2j − k in the direction of v = −i + j − k is:',
		options: ['−0.4538i + 0.2308j − 2k', '−0.2538i + 0.2308j − 2k', '−0.3333i + 0.3333j − 0.3333k', '−0.1538i + 0.2308j − 2k'],
		correctIndex: 2,
		explanation:
			'û = (1/√3)(−i + j − k), u · v = −2 + 2 + 1 = 1, so u · v̂ = 1/√3. Resolute = (1/√3)û = (1/3)(−i + j − k) = −0.3333i + 0.3333j − 0.3333k.'
	},
	{
		id: 'w6-q04',
		type: 'multiple-choice',
		question: 'If a = 4i + 4j and b = 2i + 5j + 3k, what is a · b?',
		options: ['7', '10', '9', '28'],
		correctIndex: 3,
		explanation:
			'a · b = (4)(2) + (4)(5) + (0)(3) = 8 + 20 + 0 = 28.'
	},
	{
		id: 'w6-q05',
		type: 'multiple-choice',
		question: 'A unit vector perpendicular to both u = 4i + 4j + 4k and v = 2i − j + k is:',
		options: ['0.5345i + 0.4673j − 0.8018k', '0.6345i + 0.2673j − 0.8018k', 'i − j', '0.5345i + 0.2673j − 0.8018k'],
		correctIndex: 3,
		explanation:
			'u × v = 8i + 4j − 12k, |u × v| = √224. Dividing: 8/√224 ≈ 0.5345, 4/√224 ≈ 0.2673, −12/√224 ≈ −0.8018.'
	},
	{
		id: 'w6-q06',
		type: 'multiple-choice',
		question: 'The equation of a plane passing through (0, 2, 2) and normal to i + j + k is:',
		options: ['x + y + z − 6 = 0', 'x + y + z − 16 = 0', 'x + y + z − 4 = 0', 'x + y + z + 4 = 0'],
		correctIndex: 2,
		explanation:
			'1(x − 0) + 1(y − 2) + 1(z − 2) = 0 → x + y + z − 4 = 0.'
	},
	{
		id: 'w6-q07',
		type: 'fill-blank',
		question: 'If u = 3i + 2j − 5k and v = 2i + j − 2k, find u + v in the form ai + bj + ck.',
		answer: '5i + 3j - 7k',
		acceptableAnswers: ['5i + 3j - 7k', '5i+3j-7k', '5i +3j -7k', '5 i + 3 j - 7 k'],
		explanation:
			'Add components: (3+2)i + (2+1)j + (−5−2)k = 5i + 3j − 7k.'
	},
	{
		id: 'w6-q08',
		type: 'multiple-choice',
		question: 'If z = √7 + √5 i, then |z| equals:',
		options: ['√35', '√2', '2√3', '12'],
		correctIndex: 2,
		explanation:
			'|z| = √((√7)² + (√5)²) = √(7 + 5) = √12 = 2√3.'
	},
	{
		id: 'w6-q09',
		type: 'multiple-choice',
		question: 'If u = 10 cis 55° and v = 2 cis 10°, then uv equals:',
		options: ['20 cis 190°', '20 cis 65°', '12 cis 190°', '12 cis 65°'],
		correctIndex: 1,
		explanation:
			'Multiply moduli and add angles: uv = (10×2) cis(55°+10°) = 20 cis 65°.'
	},
	{
		id: 'w6-q10',
		type: 'multiple-choice',
		question: 'If u = 8 cis 50° and v = 2 cis 5°, then u/v equals:',
		options: ['6 cis 45°', '4 cis 45°', '6 cis 10°', '4 cis 10°'],
		correctIndex: 1,
		explanation:
			'Divide moduli and subtract angles: u/v = (8/2) cis(50°−5°) = 4 cis 45°.'
	},
	{
		id: 'w6-q11',
		type: 'multiple-choice',
		question: 'If z⁴ − z² − 12 = 0 where z ∈ ℂ, then z is equal to:',
		options: ['±√3 i or ±2', '±√3 i only', '±2 only', '±2i or ±√3'],
		correctIndex: 0,
		explanation:
			'Let u = z²: u² − u − 12 = (u − 4)(u + 3) = 0, so u = 4 or −3. Then z² = 4 → z = ±2, and z² = −3 → z = ±√3 i.'
	},
	{
		id: 'w6-q12',
		type: 'multiple-choice',
		question: 'If z⁴ + 2z² − 8 = 0 where z ∈ ℂ, then z is equal to:',
		options: ['±2i or ±2', '±√2 i or ±√2', '±√2 i or ±2', '±√2 or ±2i'],
		correctIndex: 3,
		explanation:
			'Let u = z²: u² + 2u − 8 = (u + 4)(u − 2) = 0, so u = −4 or 2. Then z² = 2 → z = ±√2, and z² = −4 → z = ±2i.'
	},
	{
		id: 'w6-q13',
		type: 'multiple-choice',
		question: 'If Re((2 − pi)/(2 + pi)) = 0, then p is equal to:',
		options: ['−2 only', '2 only', '0', '±2'],
		correctIndex: 3,
		explanation:
			'Multiply by the conjugate (2 − pi)/(2 + pi): the real part is (4 − p²)/(4 + p²). Setting it to 0 gives 4 − p² = 0, so p = ±2.'
	},
	{
		id: 'w6-q14',
		type: 'multiple-choice',
		question: 'The complex roots of 2z² + z + 1 = 0 are:',
		options: ['−¼ ± (√8/4)i', '−¼ ± (√7/4)i', '−¼ ± (√17/4)i', '¼ ± (√7/4)i'],
		correctIndex: 1,
		explanation:
			'z = (−1 ± √(1 − 8)) / 4 = (−1 ± √(−7)) / 4 = −¼ ± (√7/4)i.'
	}
];
