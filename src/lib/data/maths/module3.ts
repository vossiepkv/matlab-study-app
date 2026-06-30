import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m3Meta: ModuleMeta = {
	num: 3,
	title: 'Complex Numbers (Part 1)',
	description:
		'Introduces the imaginary unit i and the complex number system, the rectangular (Cartesian) form z = x + iy and the algebra of complex numbers (addition, subtraction, multiplication, conjugates and division), powers of i, equality of complex numbers, the Argand diagram, and the polar form z = r cis θ with modulus, argument, conversions, De Moivre’s theorem and operations in polar form.',
	topics: [
		'The imaginary unit i and solving x² + 1 = 0',
		'Rectangular form z = x + iy, Re(z) and Im(z)',
		'Addition, subtraction and scalar multiplication',
		'Multiplication and powers of i',
		'Complex conjugate and division',
		'Equality of complex numbers',
		'Argand diagrams',
		'Polar form: modulus, argument and conversions',
		'Operations and De Moivre’s theorem in polar form'
	]
};

export const m3Cards: CardData[] = [
	{
		id: 'w3-c01',
		type: 'concept',
		front: 'What is the imaginary number i, and what is i²?',
		back: 'i is defined as i = √(−1), so that i² = −1. It was invented to give solutions to equations that have no real solution.',
		hint: 'The square root of negative one.'
	},
	{
		id: 'w3-c02',
		type: 'concept',
		front: 'Why does the equation x² + 1 = 0 have no real solution, and what are its solutions?',
		back: 'Rearranging gives x² = −1, so x = ±√(−1). No real number squares to a negative, so there is no real solution. The complex solutions are x = ±i.'
	},
	{
		id: 'w3-c03',
		type: 'concept',
		front: 'How do you simplify the square root of a negative number, e.g. √(−9)?',
		back: 'Factor out √(−1) = i: √(−9) = √(−1 · 9) = √(−1) · √9 = 3i.',
		hint: 'Pull out √(−1) = i.'
	},
	{
		id: 'w3-c04',
		type: 'concept',
		front: 'Solve x² + 9 = 0.',
		back: 'x² = −9, so x = ±√(−9) = ±3i.'
	},
	{
		id: 'w3-c05',
		type: 'concept',
		front: 'Use the quadratic formula to solve x² + 6x + 25 = 0.',
		back: 'x = (−6 ± √(36 − 100)) / 2 = (−6 ± √(−64)) / 2 = (−6 ± 8i) / 2 = −3 ± 4i.',
		hint: 'The discriminant is negative, so expect complex roots.'
	},
	{
		id: 'w3-c06',
		type: 'concept',
		front: 'What is the rectangular (Cartesian) form of a complex number?',
		back: 'z = x + iy, where x, y ∈ ℝ. Re(z) = x is the real part and Im(z) = y is the imaginary part.',
		hint: 'A real part plus an imaginary part.'
	},
	{
		id: 'w3-c07',
		type: 'concept',
		front: 'For z = 3 − 2i, state Re(z) and Im(z).',
		back: 'Re(z) = 3 and Im(z) = −2. Note the imaginary part is the coefficient of i, not −2i.'
	},
	{
		id: 'w3-c08',
		type: 'list',
		front: 'State Re(z) and Im(z) for z = 4 and for z = 5i.',
		back: [
			'z = 4: Re(z) = 4, Im(z) = 0 (a real number)',
			'z = 5i: Re(z) = 0, Im(z) = 5 (a purely imaginary number)'
		]
	},
	{
		id: 'w3-c09',
		type: 'concept',
		front: 'How do you add two complex numbers u = a + bi and v = c + di?',
		back: 'Add the real parts and the imaginary parts separately: u + v = (a + c) + (b + d)i.',
		hint: 'Combine like terms.'
	},
	{
		id: 'w3-c10',
		type: 'concept',
		front: 'How do you subtract complex numbers u = a + bi and v = c + di?',
		back: 'Subtract corresponding parts: u − v = (a − c) + (b − d)i.'
	},
	{
		id: 'w3-c11',
		type: 'concept',
		front: 'How do you carry out scalar multiplication ku of a complex number u = a + bi?',
		back: 'Multiply both parts by the scalar k: ku = k(a + bi) = ka + kbi.'
	},
	{
		id: 'w3-c12',
		type: 'concept',
		front: 'For u = 3 + 6i and v = 2 − 3i, find 3u − 2v.',
		back: '3u − 2v = 3(3 + 6i) − 2(2 − 3i) = (9 + 18i) + (−4 + 6i) = (9 − 4) + (18 + 6)i = 5 + 24i.'
	},
	{
		id: 'w3-c13',
		type: 'concept',
		front: 'How do you multiply two complex numbers?',
		back: 'Proceed as in normal algebra (expand the brackets), then replace i² by −1 whenever it appears. In general (a + bi)(c + di) = (ac − bd) + (ad + bc)i.',
		hint: 'Expand, then use i² = −1.'
	},
	{
		id: 'w3-c14',
		type: 'concept',
		front: 'For u = 3 + 6i and v = 2 − 3i, find the product uv.',
		back: 'uv = (3 + 6i)(2 − 3i) = 6 − 9i + 12i − 18i² = 6 − 9i + 12i + 18 = (6 + 18) + (12 − 9)i = 24 + 3i.'
	},
	{
		id: 'w3-c15',
		type: 'concept',
		front: 'For v = 2 − 3i, find v².',
		back: 'v² = (2 − 3i)² = 4 − 12i + 9i² = 4 − 12i − 9 = −5 − 12i (using (a − b)² = a² − 2ab + b² and i² = −1).'
	},
	{
		id: 'w3-c16',
		type: 'concept',
		front: 'What is the complex conjugate of z = x + iy?',
		back: 'The conjugate is z̄ = x − iy: keep the real part and change the sign of the imaginary part. For example, if z = 3 + 6i then z̄ = 3 − 6i.',
		hint: 'Flip the sign of the imaginary part.'
	},
	{
		id: 'w3-c17',
		type: 'list',
		front: 'Give the conjugate of z = 2 − 4i, z = 5i and z = −3i.',
		back: [
			'z = 2 − 4i ⟹ z̄ = 2 + 4i',
			'z = 5i ⟹ z̄ = −5i',
			'z = −3i ⟹ z̄ = 3i'
		]
	},
	{
		id: 'w3-c18',
		type: 'list',
		front: 'State the key properties of the complex conjugate.',
		back: [
			'z + w = z̄ + w̄ (conjugate of a sum)',
			'zw = z̄ · w̄ (conjugate of a product)',
			'(z / w) = z̄ / w̄ (conjugate of a quotient)',
			'z · z̄ = x² + y² (a real number)'
		],
		hint: 'The conjugate distributes over +, ×, ÷.'
	},
	{
		id: 'w3-c19',
		type: 'concept',
		front: 'Why is z · z̄ always a real number?',
		back: 'z · z̄ = (x + iy)(x − iy) = x² − (iy)² = x² + y², which has no imaginary part. This is why the conjugate is the key tool for division.',
		hint: 'It is a difference of squares with i² = −1.'
	},
	{
		id: 'w3-c20',
		type: 'concept',
		front: 'How do you divide one complex number by another?',
		back: 'Multiply both the numerator and the denominator by the conjugate of the denominator. This makes the denominator real (c² + d²), then split into real and imaginary parts.',
		hint: 'Multiply top and bottom by the conjugate of the bottom.'
	},
	{
		id: 'w3-c21',
		type: 'concept',
		front: 'For u = 3 + 6i and v = 2 − 3i, find u / v in rectangular form.',
		back: 'u/v = (3 + 6i)/(2 − 3i) · (2 + 3i)/(2 + 3i) = (6 + 9i + 12i + 18i²)/(2² − (3i)²) = (6 − 18 + 21i)/(4 + 9) = (−12 + 21i)/13 = −12/13 + (21/13)i.'
	},
	{
		id: 'w3-c22',
		type: 'list',
		front: 'State the cyclic pattern for powers of i (for n ∈ ℤ).',
		back: [
			'i⁴ⁿ = 1',
			'i⁴ⁿ⁺¹ = i',
			'i⁴ⁿ⁺² = −1',
			'i⁴ⁿ⁺³ = −i'
		],
		hint: 'Powers of i repeat every 4.'
	},
	{
		id: 'w3-c23',
		type: 'concept',
		front: 'How do you simplify a high power of i, e.g. i³⁹?',
		back: 'Break off the largest multiple of 4: i³⁹ = i³⁶⁺³ = (i⁴)⁹ · i³ = 1 · (−i) = −i. In general, divide the exponent by 4 and use the remainder.',
		hint: 'Take the exponent mod 4.'
	},
	{
		id: 'w3-c24',
		type: 'concept',
		front: 'When are two complex numbers u = a + ib and v = c + id equal?',
		back: 'They are equal if and only if (iff) their real parts are equal AND their imaginary parts are equal: a = c and b = d.',
		hint: 'Match real with real, imaginary with imaginary.'
	},
	{
		id: 'w3-c25',
		type: 'concept',
		front: 'Find x and y if x + iy = −2 + 5i.',
		back: 'By equality of complex numbers, match the parts: x = −2 and y = 5.'
	},
	{
		id: 'w3-c26',
		type: 'concept',
		front: 'What is an Argand diagram?',
		back: 'A diagram used to represent complex numbers graphically. It has a real axis (horizontal) and an imaginary axis (vertical); the number z = x + yi is plotted as the point (x, y).',
		hint: 'The complex plane: real on x, imaginary on y.'
	},
	{
		id: 'w3-c27',
		type: 'concept',
		front: 'On an Argand diagram, how does the conjugate z̄ relate to z geometrically?',
		back: 'z̄ is the mirror image (reflection) of z in the real axis. For example, z = 3 + 2i and z̄ = 3 − 2i sit symmetrically above and below the real axis.'
	},
	{
		id: 'w3-c28',
		type: 'concept',
		front: 'What is the modulus of a complex number z = x + iy?',
		back: 'The modulus r = |z| is the distance from the origin to the point z on the Argand diagram: r = |z| = √(x² + y²).',
		hint: 'Pythagoras from the origin.'
	},
	{
		id: 'w3-c29',
		type: 'concept',
		front: 'What is the argument of a complex number, and what is the principal argument?',
		back: 'The argument θ is the angle the position vector of z makes with the positive real axis (anticlockwise positive, clockwise negative). Since the angle is not unique, we use the principal argument Arg(z) = tan⁻¹(y/x) with −π < θ ≤ π.',
		hint: 'The angle to the positive real axis.'
	},
	{
		id: 'w3-c30',
		type: 'list',
		front: 'How do you find the argument θ depending on the quadrant of z = x + iy?',
		back: [
			'1st quadrant: θ = tan⁻¹|y/x|',
			'2nd quadrant: θ = π − tan⁻¹|y/x|',
			'3rd quadrant: θ = −π + tan⁻¹|y/x|',
			'4th quadrant: θ = −tan⁻¹|y/x|'
		],
		hint: 'tan⁻¹(y/x) alone does NOT always give the correct angle — check the quadrant.'
	},
	{
		id: 'w3-c31',
		type: 'concept',
		front: 'What is the polar form of a complex number?',
		back: 'Using x = r cos θ and y = r sin θ: z = x + iy = r(cos θ + i sin θ) = r cis θ, where r is the modulus and θ is the argument.',
		hint: 'r cis θ is shorthand for r(cos θ + i sin θ).'
	},
	{
		id: 'w3-c32',
		type: 'concept',
		front: 'Express z = √3 + i in polar form (without a calculator).',
		back: 'z is in the first quadrant. θ = tan⁻¹(1/√3) = π/6, and r = √(3 + 1) = √4 = 2. So z = √3 + i = 2 cis(π/6).'
	},
	{
		id: 'w3-c33',
		type: 'concept',
		front: 'Express z = −1 + i in polar form (without a calculator).',
		back: 'z is in the second quadrant. θ = π + tan⁻¹(−1) = π − π/4 = 3π/4, and r = √(1 + 1) = √2. So z = −1 + i = √2 cis(3π/4).',
		hint: 'Second quadrant — adjust the basic tan⁻¹ angle.'
	},
	{
		id: 'w3-c34',
		type: 'concept',
		front: 'Convert 6 cis(−2π/3) to rectangular form.',
		back: '6 cis(−2π/3) = 6(cos(−2π/3) + i sin(−2π/3)) = 6(−1/2 − (√3/2)i) = −3 − 3√3 i.',
		hint: 'Expand cis and evaluate cos and sin.'
	},
	{
		id: 'w3-c35',
		type: 'list',
		front: 'In polar form z = r cis θ, what are the conjugate and the reciprocal of z?',
		back: [
			'Conjugate: z̄ = r cis(−θ)',
			'Reciprocal: 1/z = (1/r) cis(−θ)'
		],
		hint: 'Both negate the angle; the reciprocal also inverts r.'
	},
	{
		id: 'w3-c36',
		type: 'concept',
		front: 'Can you add or subtract complex numbers in polar form?',
		back: 'No. Addition and subtraction must be done in rectangular form. Polar form is convenient for multiplication, division and powers, but not for adding.',
		hint: 'Add in rectangular, multiply in polar.'
	},
	{
		id: 'w3-c37',
		type: 'list',
		front: 'How do you multiply and divide complex numbers in polar form?',
		back: [
			'Multiply: z₁ · z₂ = r₁r₂ cis(θ₁ + θ₂) — multiply the moduli, add the arguments',
			'Divide: z₁ / z₂ = (r₁/r₂) cis(θ₁ − θ₂) — divide the moduli, subtract the arguments'
		]
	},
	{
		id: 'w3-c38',
		type: 'concept',
		front: 'State De Moivre’s theorem for powers in polar form.',
		back: 'If z = r cis θ then zⁿ = rⁿ cis(nθ) for n ∈ ℤ. Raise the modulus to the power n and multiply the argument by n.',
		hint: 'Power the modulus, multiply the angle.'
	},
	{
		id: 'w3-c39',
		type: 'concept',
		front: 'Use De Moivre’s theorem to simplify (cis(π/3))⁹.',
		back: '(cis(π/3))⁹ = cis(9 · π/3) = cis(3π) = cis(π) = cos π + i sin π = −1.'
	},
	{
		id: 'w3-c40',
		type: 'concept',
		front: 'Use polar form to find z⁸ when z = 1 − i.',
		back: '1 − i = √2 cis(−π/4). So z⁸ = (√2)⁸ cis(−8 · π/4) = 16 cis(−2π) = 16(cos 0 + i sin 0) = 16.',
		hint: 'Convert to polar first, then apply De Moivre.'
	}
];

export const m3Quiz: QuizData[] = [
	{
		id: 'w3-q01',
		type: 'multiple-choice',
		question: 'What is the value of i²?',
		options: ['1', '−1', 'i', '−i'],
		correctIndex: 1,
		explanation: 'By definition i = √(−1), so i² = −1.'
	},
	{
		id: 'w3-q02',
		type: 'multiple-choice',
		question: 'Simplify √(−9).',
		options: ['3i', '−3', '9i', '−9i'],
		correctIndex: 0,
		explanation: '√(−9) = √(−1 · 9) = √(−1) · √9 = i · 3 = 3i.'
	},
	{
		id: 'w3-q03',
		type: 'multiple-choice',
		question: 'What are the solutions of x² + 6x + 25 = 0?',
		options: ['−3 ± 4i', '3 ± 4i', '−6 ± 8i', '−3 ± 8i'],
		correctIndex: 0,
		explanation:
			'x = (−6 ± √(36 − 100))/2 = (−6 ± √(−64))/2 = (−6 ± 8i)/2 = −3 ± 4i.'
	},
	{
		id: 'w3-q04',
		type: 'multiple-choice',
		question: 'For z = 3 − 2i, what is Im(z)?',
		options: ['3', '−2', '−2i', '2'],
		correctIndex: 1,
		explanation:
			'The imaginary part is the coefficient of i (without the i itself), so Im(z) = −2. Re(z) = 3.'
	},
	{
		id: 'w3-q05',
		type: 'multiple-choice',
		question: 'If u = 3 + 6i and v = 2 − 3i, what is the product uv?',
		options: ['24 + 3i', '6 − 18i', '5 + 3i', '24 − 3i'],
		correctIndex: 0,
		explanation:
			'uv = (3 + 6i)(2 − 3i) = 6 − 9i + 12i − 18i² = 6 + 3i + 18 = 24 + 3i (using i² = −1).'
	},
	{
		id: 'w3-q06',
		type: 'fill-blank',
		question: 'For u = 3 + 6i and v = 2 − 3i, compute u − v in the form a + bi.',
		answer: '1 + 9i',
		acceptableAnswers: ['1 + 9i', '1+9i', '1 +9i'],
		explanation: 'u − v = (3 − 2) + (6 − (−3))i = 1 + 9i.'
	},
	{
		id: 'w3-q07',
		type: 'multiple-choice',
		question: 'What is the conjugate of z = 2 − 4i?',
		options: ['2 + 4i', '−2 + 4i', '−2 − 4i', '4 − 2i'],
		correctIndex: 0,
		explanation: 'The conjugate keeps the real part and flips the sign of the imaginary part: z̄ = 2 + 4i.'
	},
	{
		id: 'w3-q08',
		type: 'fill-blank',
		question: 'Simplify i³⁹.',
		answer: '-i',
		acceptableAnswers: ['-i', '−i'],
		explanation: 'i³⁹ = i³⁶⁺³ = (i⁴)⁹ · i³ = 1 · (−i) = −i (39 mod 4 = 3, and i³ = −i).'
	},
	{
		id: 'w3-q09',
		type: 'multiple-choice',
		question: 'For u = 3 + 6i and v = 2 − 3i, what is u / v in rectangular form?',
		options: ['−12/13 + (21/13)i', '12/13 + (21/13)i', '−12/13 − (21/13)i', '6/13 + (21/13)i'],
		correctIndex: 0,
		explanation:
			'Multiply by the conjugate (2 + 3i): numerator = 6 + 9i + 12i + 18i² = −12 + 21i; denominator = 4 + 9 = 13. So u/v = −12/13 + (21/13)i.'
	},
	{
		id: 'w3-q10',
		type: 'fill-blank',
		question: 'Find x and y if x + iy = −2 + 5i. Give your answer as "x = ?, y = ?".',
		answer: 'x = -2, y = 5',
		acceptableAnswers: [
			'x = -2, y = 5',
			'x = −2, y = 5',
			'x=-2, y=5',
			'x = -2 y = 5',
			'-2, 5'
		],
		explanation:
			'By equality of complex numbers, match real and imaginary parts: x = −2 and y = 5.'
	},
	{
		id: 'w3-q11',
		type: 'multiple-choice',
		question: 'What is the modulus of z = √3 + i?',
		options: ['2', '4', '√3', '√2'],
		correctIndex: 0,
		explanation: 'r = √(x² + y²) = √((√3)² + 1²) = √(3 + 1) = √4 = 2.'
	},
	{
		id: 'w3-q12',
		type: 'multiple-choice',
		question: 'Express z = √3 + i in polar form.',
		options: ['2 cis(π/6)', '2 cis(π/3)', '4 cis(π/6)', '2 cis(π/4)'],
		correctIndex: 0,
		explanation:
			'z is in the first quadrant: θ = tan⁻¹(1/√3) = π/6 and r = 2. So z = 2 cis(π/6).'
	},
	{
		id: 'w3-q13',
		type: 'fill-blank',
		question: 'Using De Moivre’s theorem, simplify (cis(π/3))⁹.',
		answer: '-1',
		acceptableAnswers: ['-1', '−1'],
		explanation: '(cis(π/3))⁹ = cis(9 · π/3) = cis(3π) = cis(π) = cos π + i sin π = −1.'
	},
	{
		id: 'w3-q14',
		type: 'multiple-choice',
		question: 'Which operation can NOT be done directly in polar form?',
		options: ['Addition', 'Multiplication', 'Division', 'Raising to a power'],
		correctIndex: 0,
		explanation:
			'Addition (and subtraction) must be done in rectangular form. Polar form is suited to multiplication, division and powers (De Moivre).'
	}
];
