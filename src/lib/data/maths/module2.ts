import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m2Meta: ModuleMeta = {
	num: 2,
	title: 'Vectors (Part 2) — Lines and Planes',
	description:
		'Extends vectors to the geometry of lines and planes in three dimensions: the vector, parametric and Cartesian equations of a line, finding a line through two points, the angle between lines and their point of intersection (including skew lines), the equation of a plane from a normal vector or three points, and the intersection and angle between two planes.',
	topics: [
		'Vector equation of a line r = r₀ + tv',
		'Parametric and Cartesian forms of a line',
		'Line through two given points',
		'Angle between two lines',
		'Intersection of two lines and skew lines',
		'Equation of a plane from a point and normal',
		'Equation of a plane through three points',
		'Intersection and angle between two planes'
	]
};

export const m2Cards: CardData[] = [
	{
		id: 'w2-c01',
		type: 'list',
		front: 'What two pieces of information uniquely define a line in three dimensions?',
		back: [
			'A point on the line',
			'A direction along the line (a direction vector v)'
		],
		hint: 'One point plus one direction.'
	},
	{
		id: 'w2-c02',
		type: 'concept',
		front: 'What is the vector equation of a line?',
		back: 'r = r₀ + tv, where r₀ = OP₀⃗ is the position vector of a known point on the line, v is the direction vector, and t ∈ ℝ is a parameter. As t varies, r traces out every point on the line.',
		hint: 'Start point plus a multiple of the direction.'
	},
	{
		id: 'w2-c03',
		type: 'concept',
		front: 'Why can the segment P₀P⃗ be written as tv in the vector equation of a line?',
		back: 'Because P₀P⃗ lies along the line, it is parallel to the direction vector v. Any vector parallel to v is a scalar multiple of it, so P₀P⃗ = tv for some t ∈ ℝ.'
	},
	{
		id: 'w2-c04',
		type: 'concept',
		front: 'For a line through P₀(x₀, y₀, z₀) with direction v = ai + bj + ck, what are the parametric equations?',
		back: 'x = x₀ + ta,  y = y₀ + tb,  z = z₀ + tc, where t is the parameter. They come from equating components in r = r₀ + tv.',
		hint: 'One equation per coordinate.'
	},
	{
		id: 'w2-c05',
		type: 'concept',
		front: 'What is the Cartesian form of the equation of a line?',
		back: 't = (x − x₀)/a = (y − y₀)/b = (z − z₀)/c, obtained by solving each parametric equation for t and setting them equal. The denominators are the components of the direction vector.',
		hint: 'Eliminate the parameter t.'
	},
	{
		id: 'w2-c06',
		type: 'concept',
		front: 'Write the vector equation of the line through (3, −2, 4) in the direction 2i + j − 5k.',
		back: 'r₀ = 3i − 2j + 4k and v = 2i + j − 5k, so r = (3 + 2t)i + (−2 + t)j + (4 − 5t)k.',
		hint: 'r = r₀ + tv, then collect components.'
	},
	{
		id: 'w2-c07',
		type: 'list',
		front: 'For the line through (3, −2, 4) with direction 2i + j − 5k, give the parametric equations.',
		back: [
			'x = 3 + 2t',
			'y = −2 + t',
			'z = 4 − 5t'
		]
	},
	{
		id: 'w2-c08',
		type: 'concept',
		front: 'How do you find the direction of the line passing through two points P₀(x₀, y₀, z₀) and P₁(x₁, y₁, z₁)?',
		back: 'v = P₀P₁⃗ = OP₁⃗ − OP₀⃗ = (x₁ − x₀)i + (y₁ − y₀)j + (z₁ − z₀)k. Subtract the position vectors (end minus start).',
		hint: 'Difference of the two position vectors.'
	},
	{
		id: 'w2-c09',
		type: 'concept',
		front: 'Find the direction vector of the line through A(1, 3, −2) and B(4, −1, 5).',
		back: 'v = AB⃗ = OB⃗ − OA⃗ = (4 − 1)i + (−1 − 3)j + (5 − (−2))k = 3i − 4j + 7k.',
		hint: 'B minus A, component by component.'
	},
	{
		id: 'w2-c10',
		type: 'concept',
		front: 'Give the Cartesian form of the line through A(1, 3, −2) and B(4, −1, 5).',
		back: 'With point A(1, 3, −2) and direction 3i − 4j + 7k: t = (x − 1)/3 = (y − 3)/(−4) = (z + 2)/7.',
		hint: 'Use A as the point and AB⃗ as the direction.'
	},
	{
		id: 'w2-c11',
		type: 'concept',
		front: 'Given a Cartesian line such as (x − 3)/2 = (y + 2)/(−5); z = 4, how do you read off a point and a direction?',
		back: 'The numerators give a point: set each numerator to zero, so the point is (3, −2, 4). The denominators give the direction: v = 2i − 5j (and the component is 0 in z since z is fixed at 4).',
		hint: 'Numerators → point, denominators → direction.'
	},
	{
		id: 'w2-c12',
		type: 'concept',
		front: 'How is the angle between two lines defined and calculated?',
		back: 'It is the acute angle θ between their direction vectors v₁ and v₂: cos(θ) = (v₁ · v₂)/(|v₁||v₂|) = v̂₁ · v̂₂.',
		hint: 'It only depends on the direction vectors.'
	},
	{
		id: 'w2-c13',
		type: 'concept',
		front: 'Two lines have directions v₁ = 2i − 3j + 4k and v₂ = 3i − 5j + 2k. Find the angle between them.',
		back: 'v₁ · v₂ = 6 + 15 + 8 = 17, |v₁| = √29, |v₂| = √38. cos(θ) = 17/(√29·√38) ≈ 0.5121, so θ = cos⁻¹(0.5121) ≈ 59°12′.',
		hint: 'Dot product over the product of magnitudes.'
	},
	{
		id: 'w2-c14',
		type: 'list',
		front: 'What steps find the point of intersection of two lines?',
		back: [
			'Write both lines in parametric form (using parameters t and s)',
			'Set the x equations equal, and the y equations equal',
			'Solve those two simultaneous equations for t and s',
			'Check the values satisfy the third (z) equation — if they do, substitute back to get the point; if not, the lines do not intersect'
		],
		hint: 'Solve simultaneously, then verify in the third equation.'
	},
	{
		id: 'w2-c15',
		type: 'concept',
		front: 'What are skew lines?',
		back: 'Two lines that are not parallel and do not intersect. When you solve two of the parametric equations for t and s, the values do not satisfy the third equation, so there is no common point.',
		hint: 'Not parallel, yet never meet.'
	},
	{
		id: 'w2-c16',
		type: 'concept',
		front: 'Two non-parallel lines give t = 2 and s = 3 from their x and y equations, but these fail the z equation. What can you conclude?',
		back: 'The lines do not intersect. Since they are also not parallel, they are skew lines — there is no point of intersection.',
		hint: 'No solution across all three equations.'
	},
	{
		id: 'w2-c17',
		type: 'list',
		front: 'What two pieces of information define a plane in three dimensions?',
		back: [
			'A point on the plane, P₀(x₀, y₀, z₀)',
			'A normal vector n = ai + bj + ck perpendicular to the plane'
		],
		hint: 'A point and a normal.'
	},
	{
		id: 'w2-c18',
		type: 'concept',
		front: 'Why does n · P₀P⃗ = 0 hold for any point P on a plane?',
		back: 'For any general point P on the plane, the vector P₀P⃗ lies in the plane and is therefore perpendicular to the normal n. Perpendicular vectors have a zero dot product, so n · P₀P⃗ = 0.',
		hint: 'The normal is perpendicular to every vector in the plane.'
	},
	{
		id: 'w2-c19',
		type: 'concept',
		front: 'Starting from n · P₀P⃗ = 0, what is the scalar (point-normal) equation of a plane?',
		back: 'a(x − x₀) + b(y − y₀) + c(z − z₀) = 0, which rearranges to ax + by + cz = d where d = ax₀ + by₀ + cz₀. The coefficients a, b, c are the components of the normal vector.',
		hint: 'Coefficients of x, y, z are the normal components.'
	},
	{
		id: 'w2-c20',
		type: 'concept',
		front: 'How do you read the normal vector straight off the equation ax + by + cz = d?',
		back: 'The normal is n = ai + bj + ck — the coefficients of x, y and z. For example, 2x + y − z = 3 has normal 2i + j − k.',
		hint: 'Coefficients of x, y, z.'
	},
	{
		id: 'w2-c21',
		type: 'concept',
		front: 'Find the equation of the plane perpendicular to −5i + 13j + 14k passing through (2, −3, 4).',
		back: 'Using a(x − x₀) + b(y − y₀) + c(z − z₀) = 0: −5(x − 2) + 13(y + 3) + 14(z − 4) = 0, which simplifies to −5x + 13y + 14z = 7.',
		hint: 'Plug the normal and point into the point-normal form.'
	},
	{
		id: 'w2-c22',
		type: 'list',
		front: 'How do you find the equation of a plane through three non-collinear points P, Q and R?',
		back: [
			'Form two vectors in the plane, e.g. PQ⃗ and PR⃗',
			'Compute the normal n = PQ⃗ × PR⃗ (their cross product)',
			'Use n with any one of the three points in a(x − x₀) + b(y − y₀) + c(z − z₀) = 0'
		],
		hint: 'Cross product gives the normal; then point-normal form.'
	},
	{
		id: 'w2-c23',
		type: 'concept',
		front: 'Why must the three points used to define a plane be non-collinear?',
		back: 'If the points were collinear, the two vectors PQ⃗ and PR⃗ would be parallel, their cross product would be the zero vector, and no unique normal (hence no unique plane) could be determined.',
		hint: 'Collinear points give a zero cross product.'
	},
	{
		id: 'w2-c24',
		type: 'concept',
		front: 'For P(1, 3, 2), Q(2, −1, 1), R(−1, 2, 3), find PQ⃗ and PR⃗.',
		back: 'PQ⃗ = OQ⃗ − OP⃗ = i − 4j − k. PR⃗ = OR⃗ − OP⃗ = −2i − j + k.',
		hint: 'Q − P and R − P, component by component.'
	},
	{
		id: 'w2-c25',
		type: 'concept',
		front: 'For PQ⃗ = i − 4j − k and PR⃗ = −2i − j + k, find the normal n = PQ⃗ × PR⃗ and the plane through P(1, 3, 2).',
		back: 'n = PQ⃗ × PR⃗ = −5i + j − 9k. The plane is −5(x − 1) + 1(y − 3) − 9(z − 2) = 0, i.e. −5x + y − 9z + 20 = 0, or 5x − y + 9z = 20.',
		hint: 'Cross product, then point-normal form using P.'
	},
	{
		id: 'w2-c26',
		type: 'list',
		front: 'What are the two possible outcomes when two planes are intersected?',
		back: [
			'A line of intersection (when the planes are not parallel)',
			'The empty set — no intersection (when the planes are parallel)'
		],
		hint: 'Either a line, or nothing.'
	},
	{
		id: 'w2-c27',
		type: 'concept',
		front: 'How do you tell whether two planes are parallel?',
		back: 'Compare their normal vectors. If one normal is a scalar multiple of the other (n₂ = λn₁), the planes are parallel and do not intersect (unless they are the same plane).',
		hint: 'Normals are scalar multiples of each other.'
	},
	{
		id: 'w2-c28',
		type: 'concept',
		front: 'How is the angle between two planes calculated?',
		back: 'It is the angle between their normal vectors n₁ and n₂: cos(θ) = (n₁ · n₂)/(|n₁||n₂|).',
		hint: 'Same dot-product formula, using the normals.'
	},
	{
		id: 'w2-c29',
		type: 'concept',
		front: 'How do you find the line of intersection of two planes in parametric form?',
		back: 'Set one coordinate equal to a parameter (e.g. let z = t), substitute into both plane equations to get two equations in the remaining variables, solve for them in terms of t, and write all three coordinates parametrically.',
		hint: 'Let one variable be the parameter and solve the rest.'
	},
	{
		id: 'w2-c30',
		type: 'concept',
		front: 'Two planes have normals n₁ = 2i + j − k and n₂ = i − j + 3k. Find the angle between them.',
		back: 'n₁ · n₂ = 2 − 1 − 3 = −2, |n₁| = √6, |n₂| = √11. cos(θ) = −2/(√11·√6), giving θ ≈ 104°15′ (an obtuse angle, since the dot product is negative).',
		hint: 'Dot the normals, divide by the magnitudes.'
	},
	{
		id: 'w2-c31',
		type: 'concept',
		front: 'Why does a negative dot product of two normals give an obtuse angle between planes?',
		back: 'cos(θ) = (n₁ · n₂)/(|n₁||n₂|). The magnitudes are always positive, so the sign of cos(θ) matches the sign of the dot product. A negative dot product means cos(θ) < 0, so θ is between 90° and 180°.',
		hint: 'Sign of cos(θ) follows the sign of the dot product.'
	}
];

export const m2Quiz: QuizData[] = [
	{
		id: 'w2-q01',
		type: 'multiple-choice',
		question: 'What is the vector equation of a line?',
		options: ['r = r₀ + tv', 'r = r₀ · tv', 'n · P₀P⃗ = 0', 'r = |a||b|cos(θ)'],
		correctIndex: 0,
		explanation:
			'A line is defined by a point r₀ and a direction v; the vector equation is r = r₀ + tv, where t is a real parameter.'
	},
	{
		id: 'w2-q02',
		type: 'multiple-choice',
		question:
			'A line passes through (3, −2, 4) in the direction 2i + j − 5k. Which is a correct parametric equation for y?',
		options: ['y = −2 + t', 'y = 4 − 5t', 'y = 3 + 2t', 'y = −2 − 5t'],
		correctIndex: 0,
		explanation:
			'Parametric form: x = x₀ + ta, etc. For y the point component is −2 and the direction component is 1, so y = −2 + t.'
	},
	{
		id: 'w2-q03',
		type: 'fill-blank',
		question:
			'Find the direction vector v = AB⃗ of the line through A(1, 3, −2) and B(4, −1, 5). Write in the form ai + bj + ck.',
		answer: '3i - 4j + 7k',
		acceptableAnswers: [
			'3i - 4j + 7k',
			'3i-4j+7k',
			'3i -4j +7k',
			'(3, -4, 7)',
			'3i − 4j + 7k'
		],
		explanation:
			'v = AB⃗ = OB⃗ − OA⃗ = (4 − 1)i + (−1 − 3)j + (5 − (−2))k = 3i − 4j + 7k.'
	},
	{
		id: 'w2-q04',
		type: 'multiple-choice',
		question:
			'For the Cartesian line (x − 3)/2 = (y + 2)/(−5); z = 4, what is a point on the line?',
		options: ['(3, −2, 4)', '(2, −5, 4)', '(−3, 2, 4)', '(2, −5, 0)'],
		correctIndex: 0,
		explanation:
			'Setting each numerator to zero gives x = 3, y = −2, and z is fixed at 4, so the point is (3, −2, 4). The denominators 2 and −5 give the direction 2i − 5j.'
	},
	{
		id: 'w2-q05',
		type: 'multiple-choice',
		question:
			'The angle between two lines is found using their direction vectors. Which formula is correct?',
		options: [
			'cos(θ) = (v₁ · v₂)/(|v₁||v₂|)',
			'cos(θ) = (v₁ × v₂)/(|v₁||v₂|)',
			'cos(θ) = |v₁||v₂|sin(θ)',
			'cos(θ) = v₁ · v₂'
		],
		correctIndex: 0,
		explanation:
			'The angle between two lines is the acute angle between their direction vectors: cos(θ) = (v₁ · v₂)/(|v₁||v₂|) = v̂₁ · v̂₂.'
	},
	{
		id: 'w2-q06',
		type: 'fill-blank',
		question:
			'Lines have directions v₁ = −3i + 2j + k and v₂ = i − 3j + 2k. Compute v₁ · v₂.',
		answer: '-7',
		acceptableAnswers: ['-7', '−7'],
		explanation:
			'v₁ · v₂ = (−3)(1) + (2)(−3) + (1)(2) = −3 − 6 + 2 = −7 (tutorial Q1 iii).'
	},
	{
		id: 'w2-q07',
		type: 'multiple-choice',
		question:
			'With v₁ · v₂ = −7 and |v₁| = |v₂| = √14, what is the angle between the lines? (cos(θ) = −7/14 = −0.5.)',
		options: ['120°', '60°', '90°', '104°15′'],
		correctIndex: 0,
		explanation:
			'cos(θ) = −7/(√14·√14) = −7/14 = −0.5, so θ = cos⁻¹(−0.5) = 120° (tutorial Q1 iii).'
	},
	{
		id: 'w2-q08',
		type: 'multiple-choice',
		question:
			'When solving for the intersection of two lines, the values of t and s satisfy the x and y equations but NOT the z equation, and the lines are not parallel. What are such lines called?',
		options: ['Skew lines', 'Parallel lines', 'Perpendicular lines', 'Coincident lines'],
		correctIndex: 0,
		explanation:
			'Non-parallel lines that do not intersect are skew lines — no values of t and s satisfy all three equations simultaneously.'
	},
	{
		id: 'w2-q09',
		type: 'multiple-choice',
		question: 'Which equation correctly represents a plane?',
		options: ['ax + by + cz = d', 'r = r₀ + tv', 'a × b = |a||b|sin(θ)', 'cos(θ) = v̂₁ · v̂₂'],
		correctIndex: 0,
		explanation:
			'A plane has the scalar equation ax + by + cz = d, where (a, b, c) are the components of its normal vector. r = r₀ + tv is a line.'
	},
	{
		id: 'w2-q10',
		type: 'fill-blank',
		question:
			'Find the equation of the plane perpendicular to −5i + 13j + 14k passing through (2, −3, 4). Write in the form ax + by + cz = d.',
		answer: '-5x + 13y + 14z = 7',
		acceptableAnswers: [
			'-5x + 13y + 14z = 7',
			'-5x+13y+14z=7',
			'−5x + 13y + 14z = 7',
			'-5x + 13y + 14z - 7 = 0'
		],
		explanation:
			'−5(x − 2) + 13(y + 3) + 14(z − 4) = 0 → −5x + 13y + 14z − 7 = 0 → −5x + 13y + 14z = 7.'
	},
	{
		id: 'w2-q11',
		type: 'multiple-choice',
		question:
			'To find the equation of a plane through three non-collinear points, what gives the normal vector?',
		options: [
			'The cross product of two vectors in the plane',
			'The dot product of two vectors in the plane',
			'The sum of the three position vectors',
			'The average of the three points'
		],
		correctIndex: 0,
		explanation:
			'Form two in-plane vectors (e.g. PQ⃗ and PR⃗) and take their cross product n = PQ⃗ × PR⃗; the cross product is perpendicular to both, hence normal to the plane.'
	},
	{
		id: 'w2-q12',
		type: 'multiple-choice',
		question:
			'The normal of a plane is found to be PQ⃗ × PR⃗ = −5i + j − 9k, with P(1, 3, 2) on the plane. What is the plane equation?',
		options: ['5x − y + 9z = 20', '−5x + y − 9z = 20', '5x + y + 9z = 20', '−5x − y − 9z = 0'],
		correctIndex: 0,
		explanation:
			'−5(x − 1) + 1(y − 3) − 9(z − 2) = 0 → −5x + y − 9z + 20 = 0 → 5x − y + 9z = 20.'
	},
	{
		id: 'w2-q13',
		type: 'multiple-choice',
		question:
			'Two planes have normals n₁ = i + j + k and n₂ = i + 2j + 2k. Using cos(θ) = (n₁ · n₂)/(|n₁||n₂|) = 5/(√3·3), what is the angle between the planes?',
		options: ['15.79°', '104°15′', '90°', '59°12′'],
		correctIndex: 0,
		explanation:
			'n₁ · n₂ = 1 + 2 + 2 = 5, |n₁| = √3, |n₂| = 3, so cos(θ) = 5/(3√3) and θ ≈ 15.79° (tutorial Q2 ii).'
	},
	{
		id: 'w2-q14',
		type: 'multiple-choice',
		question:
			'Two planes have normals n₁ = 2i + j − k and n₂ = −4i − 2j + 2k. Since n₂ = −2n₁, what is true of the planes?',
		options: [
			'They are parallel, so there is no line of intersection',
			'They are perpendicular',
			'They intersect at a single point',
			'They are the same plane'
		],
		correctIndex: 0,
		explanation:
			'Because one normal is a scalar multiple of the other (n₂ = −2n₁), the planes are parallel and have no intersection.'
	}
];
