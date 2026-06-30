import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m4Meta: ModuleMeta = {
	num: 4,
	title: 'Complex Numbers (Part 2)',
	description:
		'Solving polynomial equations over the complex numbers: the discriminant and quadratics with real and complex coefficients, the relationship between roots and coefficients, the conjugate root theorem, the remainder and factor theorems for cubics, the fundamental theorem of algebra, quartics, and finding the nth roots of a complex number using cis form and an Argand diagram.',
	topics: [
		'Discriminant and solving quadratics over ℂ',
		'Complete the square and the quadratic formula',
		'Relationship between roots and coefficients',
		'Conjugate root theorem',
		'Quadratics with complex coefficients',
		'Remainder and factor theorems for cubics',
		'Fundamental theorem of algebra and quartics',
		'nth roots of a complex number (cis form)'
	]
};

export const m4Cards: CardData[] = [
	{
		id: 'w4-c01',
		type: 'concept',
		front: 'For a quadratic az² + bz + c = 0 (a, b, c ∈ ℝ), what is the discriminant Δ?',
		back: 'Δ = b² − 4ac. The nature of the roots depends entirely on the sign of the discriminant.',
		hint: 'b squared minus 4ac.'
	},
	{
		id: 'w4-c02',
		type: 'list',
		front: 'How does the discriminant Δ determine the nature of the roots of a real quadratic?',
		back: [
			'If Δ > 0: roots are real and distinct',
			'If Δ = 0: roots are real and equal',
			'If Δ < 0: roots are a complex conjugate pair'
		],
		hint: 'Positive, zero, negative.'
	},
	{
		id: 'w4-c03',
		type: 'concept',
		front: 'State the quadratic formula used to solve az² + bz + c = 0.',
		back: 'z = (−b ± √(b² − 4ac)) / (2a) = (−b ± √Δ) / (2a). When Δ < 0, √Δ is imaginary and the roots are complex.'
	},
	{
		id: 'w4-c04',
		type: 'list',
		front: 'What are the two methods shown for solving a quadratic over ℂ?',
		back: [
			'Method 1: complete the square',
			'Method 2: use the quadratic formula'
		]
	},
	{
		id: 'w4-c05',
		type: 'concept',
		front: 'Solve z² + 8z + 25 = 0 by completing the square.',
		back: '(z + 4)² − 16 + 25 = 0 ⟹ (z + 4)² = −9 ⟹ z + 4 = ±√(−9) = ±3i, so z = −4 ± 3i.',
		hint: 'Half of 8 is 4, so use (z + 4)².'
	},
	{
		id: 'w4-c06',
		type: 'concept',
		front: 'Solve z² + 8z + 25 = 0 using the quadratic formula.',
		back: 'a = 1, b = 8, c = 25, so Δ = 64 − 100 = −36 < 0. z = (−8 ± √(−36)) / 2 = (−8 ± 6i) / 2 = −4 ± 3i.'
	},
	{
		id: 'w4-c07',
		type: 'concept',
		front: 'When a real quadratic has Δ < 0, how are the two complex roots related?',
		back: 'They are a complex conjugate pair: if one root is p + qi, the other is p − qi. Both share the same real part −b/(2a).',
		hint: 'Same real part, opposite imaginary part.'
	},
	{
		id: 'w4-c08',
		type: 'concept',
		front: 'For az² + bz + c = 0 (a ≠ 0) with roots α and β, what is the sum of the roots?',
		back: 'α + β = −b/a. This comes from comparing z² + (b/a)z + (c/a) with (z − α)(z − β).',
		hint: 'Minus b over a.'
	},
	{
		id: 'w4-c09',
		type: 'concept',
		front: 'For az² + bz + c = 0 (a ≠ 0) with roots α and β, what is the product of the roots?',
		back: 'α · β = c/a.',
		hint: 'c over a.'
	},
	{
		id: 'w4-c10',
		type: 'concept',
		front: 'Why does comparing (z − α)(z − β) with z² + (b/a)z + (c/a) give the root–coefficient relationships?',
		back: '(z − α)(z − β) = z² − (α + β)z + αβ. Matching coefficients gives α + β = −b/a and αβ = c/a.'
	},
	{
		id: 'w4-c11',
		type: 'concept',
		front: 'State the conjugate root theorem.',
		back: 'For an nth degree polynomial whose coefficients are ALL real, any complex roots occur in conjugate pairs (if p + qi is a root, so is p − qi).',
		hint: 'Real coefficients ⟹ complex roots come in pairs.'
	},
	{
		id: 'w4-c12',
		type: 'concept',
		front: 'Does the conjugate root theorem still apply if one coefficient is not real?',
		back: 'No. If even one of the coefficients is not real, the roots need not occur in conjugate pairs.'
	},
	{
		id: 'w4-c13',
		type: 'concept',
		front: 'How do you build a real quadratic when you are given one complex root, e.g. −3 + 4i?',
		back: 'By the conjugate root theorem the other root is −3 − 4i. Then sum α + β = −6 and product αβ = (−3)² − (4i)² = 9 + 16 = 25, giving z² − (α + β)z + αβ = z² + 6z + 25 = 0.',
		hint: 'Take the conjugate, then use sum and product of roots.'
	},
	{
		id: 'w4-c14',
		type: 'concept',
		front: 'Why is the product (−3 + 4i)(−3 − 4i) equal to 25?',
		back: 'It is a difference of squares: (−3)² − (4i)² = 9 − 16i² = 9 − 16(−1) = 9 + 16 = 25. Multiplying conjugates always gives a real number.'
	},
	{
		id: 'w4-c15',
		type: 'concept',
		front: 'Can a quadratic with complex coefficients still be solved with the quadratic formula?',
		back: 'Yes. For z² + 2iz − 3 = 0: a = 1, b = 2i, c = −3, Δ = b² − 4ac = 4i² + 12 = 8, so z = (−2i ± 2√2)/2 = ±√2 − i.',
		hint: 'b can be imaginary; the formula still works.'
	},
	{
		id: 'w4-c16',
		type: 'concept',
		front: 'For z² + 2iz − 3 = 0, why do the roots NOT form a conjugate pair?',
		back: 'Because a coefficient (b = 2i) is not real. The roots are z₁ = √2 − i and z₂ = −√2 − i, which are not conjugates of each other.'
	},
	{
		id: 'w4-c17',
		type: 'concept',
		front: 'State the Remainder Theorem.',
		back: 'The remainder of the division of a polynomial P(x) by the linear polynomial (x − a) is equal to P(a).',
		hint: 'Substitute x = a into P.'
	},
	{
		id: 'w4-c18',
		type: 'concept',
		front: 'State the Factor Theorem.',
		back: 'For a polynomial P(x), if P(a) = 0 then (x − a) is a factor. Conversely, if (x − a) is a factor of P(x) then P(a) = 0.',
		hint: 'A zero of P gives a linear factor.'
	},
	{
		id: 'w4-c19',
		type: 'list',
		front: 'What is the general method to solve a cubic over ℂ?',
		back: [
			'Use the remainder and factor theorems to find one real linear factor (a root)',
			'Divide (e.g. long division) to get the quadratic factor',
			'Solve the resulting quadratic'
		],
		hint: 'Find a factor, divide, then solve the quadratic.'
	},
	{
		id: 'w4-c20',
		type: 'list',
		front: 'A cubic P(z) = az³ + bz² + cz + d with all real coefficients has three linear factors. What can the factors be?',
		back: [
			'At least one factor is real (one real root is guaranteed)',
			'The other two roots are either real (possibly repeated)',
			'or they occur as a complex conjugate pair'
		],
		hint: 'A real cubic always has at least one real root.'
	},
	{
		id: 'w4-c21',
		type: 'concept',
		front: 'For f(z) = z³ + 6z² + 9z − 50, how do you find the first factor?',
		back: 'Test small values: f(1) = 1 + 6 + 9 − 50 ≠ 0, but f(2) = 8 + 24 + 18 − 50 = 0. So (z − 2) is a factor.',
		hint: 'Trial values until P(a) = 0.'
	},
	{
		id: 'w4-c22',
		type: 'concept',
		front: 'Having found (z − 2) is a factor of z³ + 6z² + 9z − 50, how do you finish solving?',
		back: 'Long division gives z³ + 6z² + 9z − 50 = (z − 2)(z² + 8z + 25). Solving z² + 8z + 25 = 0 gives z = −4 ± 3i. So the roots are z = 2, −4 + 3i, −4 − 3i.'
	},
	{
		id: 'w4-c23',
		type: 'concept',
		front: 'State the Fundamental Theorem of Algebra.',
		back: 'An nth degree polynomial always has exactly n roots, provided multiple (repeated) roots are counted accordingly. So P(z) = aₙ(z − z₁)(z − z₂)···(z − zₙ), where the zᵢ are not necessarily unique.',
		hint: 'Degree n ⟹ exactly n roots (with multiplicity).'
	},
	{
		id: 'w4-c24',
		type: 'list',
		front: 'A quartic P(z) = az⁴ + bz³ + cz² + dz + e with all real coefficients has four linear factors. What are the possible root patterns?',
		back: [
			'All four roots real',
			'Two real roots and one complex conjugate pair',
			'Two complex conjugate pairs'
		],
		hint: 'Complex roots always pair up.'
	},
	{
		id: 'w4-c25',
		type: 'concept',
		front: 'How do you solve a quartic like z⁴ − 14z² − 32 = 0 that has no z³ or z term?',
		back: 'Use the substitution u = z². Then u² − 14u − 32 = 0 ⟹ (u − 16)(u + 2) = 0. From u = z² = 16, z = ±4; from u = z² = −2, z = ±√2 i.',
		hint: 'Let u = z² to reduce it to a quadratic.'
	},
	{
		id: 'w4-c26',
		type: 'concept',
		front: 'What is the cis form of a complex number, and how does adding 2kπ help?',
		back: 'cis θ = cos θ + i sin θ, so z = r cis θ. Because the angle is periodic, z = r cis(θ + 2kπ) for any integer k — this lets you generate all the distinct roots.',
		hint: 'cis θ means cos θ + i sin θ.'
	},
	{
		id: 'w4-c27',
		type: 'concept',
		front: 'State the formula for the nth roots of a complex number z = r cis θ.',
		back: 'z^(1/n) = r^(1/n) cis((θ + 2kπ) / n), for k = 0, ±1, ±2, … . There are exactly n distinct roots, obtained from any n consecutive values of k (e.g. k = 0, 1, …, n − 1).',
		hint: 'Take the nth root of r and divide the angle (plus 2kπ) by n.'
	},
	{
		id: 'w4-c28',
		type: 'concept',
		front: 'How many distinct nth roots does a non-zero complex number have, and how are they arranged?',
		back: 'Exactly n distinct roots. They all have the same modulus r^(1/n), so they lie on a circle of radius r^(1/n) and are evenly distributed (separated by 2π/n) around it.',
		hint: 'n roots, equally spaced on a circle.'
	},
	{
		id: 'w4-c29',
		type: 'concept',
		front: 'Solve z³ − 8i = 0 (find the cube roots of 8i).',
		back: 'z³ = 8i = 8 cis(π/2 + 2kπ), so z = 8^(1/3) cis((π/2 + 2kπ)/3) = 2 cis(π/6 + 2kπ/3), k = 0, 1, 2. This gives z = 2 cis(π/6), 2 cis(5π/6), 2 cis(3π/2).',
		hint: '8i has modulus 8 and argument π/2; cube root of 8 is 2.'
	},
	{
		id: 'w4-c30',
		type: 'concept',
		front: 'Solve z² + 9 = 0 using cis form.',
		back: 'z² = −9 = 9 cis(π + 2kπ), so z = 9^(1/2) cis((π + 2kπ)/2) = 3 cis((π + 2kπ)/2), k = 0, 1. This gives z₁ = 3 cis(π/2) = 3i and z₂ = 3 cis(3π/2) = −3i.',
		hint: '−9 has modulus 9 and argument π.'
	},
	{
		id: 'w4-c31',
		type: 'concept',
		front: 'When finding the nth roots of z, why is the radius of the circle r^(1/n) rather than r?',
		back: 'Each root w satisfies wⁿ = z, so |w|ⁿ = |z| = r, giving |w| = r^(1/n). Every root therefore has modulus r^(1/n) and lies on a circle of that radius.'
	},
	{
		id: 'w4-c32',
		type: 'concept',
		front: 'To find the cube roots of z = −1 + i, what modulus and argument do you start with?',
		back: 'r = |−1 + i| = √2 and θ = π + tan⁻¹(−1) = π − π/4 = 3π/4 (second quadrant). So z = √2 cis(3π/4) and z^(1/3) = (√2)^(1/3) cis((3π/4 + 2kπ)/3) = 2^(1/6) cis(π/4 + 2kπ/3).',
		hint: 'Modulus √2, argument 3π/4 (point is in the second quadrant).'
	}
];

export const m4Quiz: QuizData[] = [
	{
		id: 'w4-q01',
		type: 'multiple-choice',
		question: 'For a real quadratic az² + bz + c = 0, what does Δ < 0 tell you about the roots?',
		options: [
			'They are a complex conjugate pair',
			'They are real and distinct',
			'They are real and equal',
			'There are no roots'
		],
		correctIndex: 0,
		explanation:
			'When Δ = b² − 4ac < 0, the square root is imaginary, so the two roots form a complex conjugate pair.'
	},
	{
		id: 'w4-q02',
		type: 'multiple-choice',
		question: 'What is the discriminant Δ of z² + 8z + 25 = 0?',
		options: ['−36', '36', '−9', '164'],
		correctIndex: 0,
		explanation:
			'Δ = b² − 4ac = 8² − 4(1)(25) = 64 − 100 = −36. Since Δ < 0 the roots are complex (z = −4 ± 3i).'
	},
	{
		id: 'w4-q03',
		type: 'fill-blank',
		question: 'Solve z² − 4z + 13 = 0. Give the two roots (use the form 2 + 3i, 2 − 3i).',
		answer: '2 + 3i, 2 - 3i',
		acceptableAnswers: [
			'2 + 3i, 2 - 3i',
			'2 - 3i, 2 + 3i',
			'2+3i, 2-3i',
			'2-3i, 2+3i',
			'2 ± 3i',
			'2+-3i',
			'z = 2 ± 3i'
		],
		explanation:
			'Δ = (−4)² − 4(1)(13) = 16 − 52 = −36 < 0. z = (4 ± √(−36))/2 = (4 ± 6i)/2 = 2 ± 3i (tutorial Q1 i).'
	},
	{
		id: 'w4-q04',
		type: 'multiple-choice',
		question: 'For az² + bz + c = 0 with roots α and β, which pair of relationships is correct?',
		options: [
			'α + β = −b/a and αβ = c/a',
			'α + β = b/a and αβ = −c/a',
			'α + β = c/a and αβ = −b/a',
			'α + β = −c/a and αβ = b/a'
		],
		correctIndex: 0,
		explanation:
			'Comparing (z − α)(z − β) = z² − (α + β)z + αβ with z² + (b/a)z + (c/a) gives α + β = −b/a and αβ = c/a.'
	},
	{
		id: 'w4-q05',
		type: 'multiple-choice',
		question: 'A polynomial has all real coefficients. If 2 − 5i is a root, which must also be a root?',
		options: ['2 + 5i', '−2 + 5i', '−2 − 5i', '5 + 2i'],
		correctIndex: 0,
		explanation:
			'By the conjugate root theorem, for real coefficients complex roots occur in conjugate pairs, so 2 + 5i is also a root.'
	},
	{
		id: 'w4-q06',
		type: 'fill-blank',
		question: 'Find the quadratic with real coefficients having −3 + 4i as a root. Give it in the form z² + bz + c = 0.',
		answer: 'z^2 + 6z + 25 = 0',
		acceptableAnswers: [
			'z^2 + 6z + 25 = 0',
			'z^2+6z+25=0',
			'z² + 6z + 25 = 0',
			'z²+6z+25=0',
			'z^2 + 6z + 25',
			'z² + 6z + 25'
		],
		explanation:
			'The conjugate −3 − 4i is the other root. α + β = −6 and αβ = (−3)² − (4i)² = 9 + 16 = 25, so z² + 6z + 25 = 0.'
	},
	{
		id: 'w4-q07',
		type: 'fill-blank',
		question: 'Form a quadratic with real coefficients having −6 + i amongst its roots. Give it as z² + bz + c = 0.',
		answer: 'z^2 + 12z + 37 = 0',
		acceptableAnswers: [
			'z^2 + 12z + 37 = 0',
			'z^2+12z+37=0',
			'z² + 12z + 37 = 0',
			'z²+12z+37=0',
			'z^2 + 12z + 37',
			'z² + 12z + 37'
		],
		explanation:
			'The conjugate root is −6 − i. α + β = −12 and αβ = (−6)² − i² = 36 + 1 = 37, so z² + 12z + 37 = 0 (tutorial Q2 i).'
	},
	{
		id: 'w4-q08',
		type: 'multiple-choice',
		question: 'According to the Factor Theorem, if P(2) = 0 for a polynomial P(z), then which is a factor?',
		options: ['(z − 2)', '(z + 2)', '(2z − 1)', '(z² − 2)'],
		correctIndex: 0,
		explanation:
			'The Factor Theorem states that if P(a) = 0 then (z − a) is a factor. With a = 2, (z − 2) is a factor.'
	},
	{
		id: 'w4-q09',
		type: 'fill-blank',
		question: 'Solve z³ − 4z² + z + 26 = 0, given that z = −2 is a root. Give all three roots.',
		answer: '-2, 3 + 2i, 3 - 2i',
		acceptableAnswers: [
			'-2, 3 + 2i, 3 - 2i',
			'-2, 3 - 2i, 3 + 2i',
			'-2, 3+2i, 3-2i',
			'-2, 3 ± 2i',
			'z = -2, 3 ± 2i',
			'−2, 3 + 2i, 3 − 2i'
		],
		explanation:
			'P(−2) = 0, so (z + 2) is a factor. Dividing gives z² − 6z + 13, whose roots are (6 ± √(36 − 52))/2 = (6 ± 4i)/2 = 3 ± 2i. Roots: −2, 3 + 2i, 3 − 2i (tutorial Q1 ii).'
	},
	{
		id: 'w4-q10',
		type: 'multiple-choice',
		question: 'According to the Fundamental Theorem of Algebra, how many roots does a degree-4 polynomial have (counting multiplicity)?',
		options: ['Exactly 4', 'At most 2', 'Exactly 2', 'It depends on the discriminant'],
		correctIndex: 0,
		explanation:
			'An nth degree polynomial always has exactly n roots, provided repeated roots are counted accordingly. A quartic has exactly 4.'
	},
	{
		id: 'w4-q11',
		type: 'fill-blank',
		question: 'Solve z⁴ + 9z² + 14 = 0 using the substitution u = z². Give all four roots.',
		answer: '±√2 i, ±√7 i',
		acceptableAnswers: [
			'±√2 i, ±√7 i',
			'±√2i, ±√7i',
			'+-√2 i, +-√7 i',
			'±sqrt(2)i, ±sqrt(7)i',
			'z = ±√2 i, ±√7 i',
			'±√2 i and ±√7 i'
		],
		explanation:
			'Let u = z²: u² + 9u + 14 = 0 ⟹ (u + 2)(u + 7) = 0. u = −2 ⟹ z² = −2 ⟹ z = ±√2 i; u = −7 ⟹ z² = −7 ⟹ z = ±√7 i (tutorial Q1 iii).'
	},
	{
		id: 'w4-q12',
		type: 'multiple-choice',
		question: 'How many distinct values does z^(1/n) have for a non-zero complex number z, and how are they arranged?',
		options: [
			'n values, evenly spaced on a circle of radius r^(1/n)',
			'n values, all on the real axis',
			'2n values on a circle of radius r',
			'Infinitely many values'
		],
		correctIndex: 0,
		explanation:
			'There are exactly n distinct nth roots. They share modulus r^(1/n), so they lie evenly distributed (every 2π/n) on a circle of radius r^(1/n).'
	},
	{
		id: 'w4-q13',
		type: 'multiple-choice',
		question: 'Solving z³ − 8i = 0, you write 8i = 8 cis(π/2 + 2kπ). What is the modulus of each cube root?',
		options: ['2', '8', '6', '√8'],
		correctIndex: 0,
		explanation:
			'Each root has modulus 8^(1/3) = 2, so z = 2 cis(π/6 + 2kπ/3) for k = 0, 1, 2 — three roots on a circle of radius 2.'
	},
	{
		id: 'w4-q14',
		type: 'fill-blank',
		question: 'For the cube roots of z = −1 + i, what are the modulus r and argument θ of z used in the formula? (Give as r = …, θ = …)',
		answer: 'r = √2, θ = 3π/4',
		acceptableAnswers: [
			'r = √2, θ = 3π/4',
			'r=√2, θ=3π/4',
			'√2, 3π/4',
			'r = sqrt(2), θ = 3π/4',
			'r = √2 and θ = 3π/4',
			'r = √2, theta = 3pi/4'
		],
		explanation:
			'r = |−1 + i| = √(1 + 1) = √2. The point is in the second quadrant, so θ = π + tan⁻¹(−1) = π − π/4 = 3π/4. Then z^(1/3) = 2^(1/6) cis(π/4 + 2kπ/3) (tutorial Q3).'
	}
];
