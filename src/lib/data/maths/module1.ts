import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m1Meta: ModuleMeta = {
	num: 1,
	title: 'Vectors (Part 1)',
	description:
		'Introduces vectors and scalars, vector notation and operations, position vectors in 2D and 3D, magnitude, unit vectors, direction cosines, the dot and cross products, and their applications to angles, projections and areas.',
	topics: [
		'Vectors vs scalars',
		'Vector notation and magnitude',
		'Addition, subtraction and scalar multiplication',
		'Position vectors in 2D and 3D',
		'Unit vectors and direction cosines',
		'Scalar (dot) product and angle between vectors',
		'Projections and vector resolutes',
		'Vector (cross) product and determinants',
		'Areas of parallelograms and triangles'
	]
};

export const m1Cards: CardData[] = [
	{
		id: 'w1-c01',
		type: 'concept',
		front: 'What is a scalar quantity?',
		back: 'A quantity that can be completely described by its magnitude (size) expressed in some particular unit.',
		hint: 'Magnitude only — no direction.'
	},
	{
		id: 'w1-c02',
		type: 'concept',
		front: 'What is a vector quantity?',
		back: 'A quantity that can be completely described by stating both its magnitude (size) in some unit AND its direction.',
		hint: 'Size and direction.'
	},
	{
		id: 'w1-c03',
		type: 'concept',
		front: 'Why is speed a scalar but velocity a vector?',
		back: 'Speed gives only magnitude (e.g. a car travels at 60 km/hr). Velocity also states direction (e.g. a car travels north at 60 km/hr).'
	},
	{
		id: 'w1-c04',
		type: 'list',
		front: 'Give examples of vector quantities from the lecture.',
		back: [
			'Displacement',
			'Velocity',
			'Acceleration',
			'Weight',
			'Momentum',
			'Torque',
			'Current'
		],
		hint: 'These each need a direction.'
	},
	{
		id: 'w1-c05',
		type: 'list',
		front: 'Give examples of scalar quantities from the lecture.',
		back: [
			'Distance',
			'Speed',
			'Time',
			'Mass',
			'Charge',
			'Work',
			'Voltage',
			'Density',
			'Volume'
		]
	},
	{
		id: 'w1-c06',
		type: 'list',
		front: 'What are the three ways the lecture writes vector notation?',
		back: [
			'AB with an arrow over it — the vector from A to B (arrow shows direction)',
			'a with a tilde underneath it (lower case)',
			'a in bold type'
		],
		hint: 'Arrow, tilde, or bold.'
	},
	{
		id: 'w1-c07',
		type: 'concept',
		front: 'What is the magnitude of a vector AB⃗?',
		back: 'It is the length of the line segment — the distance from point A to point B. Written |a| = d(AB) = |AB⃗|.'
	},
	{
		id: 'w1-c08',
		type: 'concept',
		front: 'State the triangle rule for the addition of vectors.',
		back: 'If two vectors are placed head to tail, then their resultant (sum) is the vector joining the tail of the first to the head of the second. So AB⃗ + BC⃗ = AC⃗.',
		hint: 'Head to tail.'
	},
	{
		id: 'w1-c09',
		type: 'concept',
		front: 'What does scalar multiplication of a vector λa mean?',
		back: 'If a is a vector and λ is a scalar (λ ∈ ℝ), then λa is a vector parallel to a but λ times its length.',
		hint: '2a is twice as long, same direction.'
	},
	{
		id: 'w1-c10',
		type: 'concept',
		front: 'What is the negative of a vector, and how does it relate to scalar multiplication?',
		back: 'Reversing the head and tail gives a vector of the same length but pointing in the opposite direction, so AB⃗ = −BA⃗. It is the special case of scalar multiplication with λ = −1.'
	},
	{
		id: 'w1-c11',
		type: 'concept',
		front: 'What is the zero vector?',
		back: 'A vector with magnitude zero and no direction — it is just a single point. For example AB⃗ + BA⃗ = AA⃗ = 0.'
	},
	{
		id: 'w1-c12',
		type: 'concept',
		front: 'How is subtraction of vectors defined?',
		back: 'As addition with the negation of the second vector: a − b = a + (−b). Geometrically, reverse the direction of b and complete the triangle.'
	},
	{
		id: 'w1-c13',
		type: 'concept',
		front: 'What is a unit vector, and what notation is used for it?',
		back: 'A vector that has a magnitude of unity (1). It is written with a hat (circumflex) above the vector, e.g. â.'
	},
	{
		id: 'w1-c14',
		type: 'concept',
		front: 'How do you turn any non-zero vector a into a unit vector?',
		back: 'Divide the vector by its length (magnitude): â = a / |a|.',
		hint: 'Vector over its own magnitude.'
	},
	{
		id: 'w1-c15',
		type: 'list',
		front: 'What do the unit vectors i, j and k represent?',
		back: [
			'i — unit vector parallel to the x-axis',
			'j — unit vector parallel to the y-axis',
			'k — unit vector parallel to the z-axis'
		]
	},
	{
		id: 'w1-c16',
		type: 'concept',
		front: 'For a point A(x, y), how is the position vector a = OA⃗ written in component form, and what is its magnitude?',
		back: 'a = OA⃗ = x i + y j. By Pythagoras, |a| = d(OA) = √(x² + y²).',
		hint: 'Coefficients of i and j are the components.'
	},
	{
		id: 'w1-c17',
		type: 'concept',
		front: 'In 3D, how is the position vector r = OP⃗ of a point P(x, y, z) written, and what is its magnitude?',
		back: 'r = OP⃗ = x i + y j + z k. Its magnitude is |r| = d(OP) = √(x² + y² + z²). The 2D case is just a special case of the 3D case.'
	},
	{
		id: 'w1-c18',
		type: 'concept',
		front: 'What are the direction cosines of a vector, and what identity do they satisfy in 2D?',
		back: 'They are cos(α) and cos(β), where α and β are the angles the vector makes with the positive x-axis and y-axis. cos(α) = x/|a|, cos(β) = y/|a|. They satisfy cos²(α) + cos²(β) = 1, with α + β = π/2.',
		hint: 'Components divided by the magnitude.'
	},
	{
		id: 'w1-c19',
		type: 'concept',
		front: 'What identity do the three direction cosines satisfy in 3D, and how do they give the unit vector?',
		back: 'cos²(α) + cos²(β) + cos²(χ) = 1, where α, β, χ are the angles with the positive x, y and z axes. The unit vector is r̂ = cos(α) i + cos(β) j + cos(χ) k.'
	},
	{
		id: 'w1-c20',
		type: 'concept',
		front: 'For A(x₁, y₁) and B(x₂, y₂), what is the vector AB⃗ and the distance d(AB)?',
		back: 'AB⃗ = OB⃗ − OA⃗ = (x₂ − x₁) i + (y₂ − y₁) j. The distance is d(AB) = |AB⃗| = √((x₂ − x₁)² + (y₂ − y₁)²).',
		hint: 'Subtract the position vectors: end minus start.'
	},
	{
		id: 'w1-c21',
		type: 'concept',
		front: 'When are two vectors equal (equality of vectors)?',
		back: 'Two vectors are equal when their corresponding components are equal: if a = b then x₁ = x₂ and y₁ = y₂ (and z₁ = z₂ in 3D).'
	},
	{
		id: 'w1-c22',
		type: 'concept',
		front: 'Define the scalar (dot) product of two vectors a and b.',
		back: 'a · b = |a| |b| cos(θ), where θ is the angle between the vectors a and b. The result is a scalar (a number).',
		hint: 'Magnitudes times the cosine of the angle.'
	},
	{
		id: 'w1-c23',
		type: 'list',
		front: 'List the key properties of the scalar (dot) product.',
		back: [
			'The result is a number, which can be positive, negative or 0',
			'If a is perpendicular to b then a · b = 0 (unless a or b is the zero vector)',
			'It is commutative: a · b = b · a',
			'a · a = |a|²',
			'a · (λb) = (λa) · b = λ(a · b)'
		]
	},
	{
		id: 'w1-c24',
		type: 'concept',
		front: 'How is the dot product computed in component form?',
		back: 'For a = x₁ i + y₁ j + z₁ k and b = x₂ i + y₂ j + z₂ k: a · b = x₁x₂ + y₁y₂ + z₁z₂.',
		hint: 'Multiply matching components and add.'
	},
	{
		id: 'w1-c25',
		type: 'concept',
		front: 'How do you find the angle θ between two vectors a and b?',
		back: 'Rearrange the dot product: cos(θ) = (a · b) / (|a| |b|), so θ = cos⁻¹((a · b) / (|a| |b|)).'
	},
	{
		id: 'w1-c26',
		type: 'concept',
		front: 'What is the scalar resolute (projection) of a in the direction of b?',
		back: 'The scalar resolute is the distance along b in the direction of b: |a| cos(θ) = (a · b) / |b| = a · b̂.',
		hint: 'Dot a with the unit vector of b.'
	},
	{
		id: 'w1-c27',
		type: 'list',
		front: 'Give the formulas for the vector resolute of a parallel to b and perpendicular to b.',
		back: [
			'Component of a onto b (parallel): (a · b̂) b̂',
			'Component of a perpendicular to b: a − (a · b̂) b̂'
		]
	},
	{
		id: 'w1-c28',
		type: 'concept',
		front: 'Define the vector (cross) product a × b.',
		back: 'For two non-zero vectors with angle θ between them (0 ≤ θ ≤ π) and n̂ a unit vector perpendicular to both a and b: a × b = n̂ |a| |b| sin(θ). The result is a vector, and it follows the right hand screw rule.',
		hint: 'Result is a vector perpendicular to both.'
	},
	{
		id: 'w1-c29',
		type: 'list',
		front: 'State the key properties of the vector (cross) product.',
		back: [
			'The result is a vector',
			'It follows the right hand screw rule',
			'It is NOT commutative: a × b = −(b × a)',
			'If a = 0 or b = 0, or if a is parallel to b (θ = 0 or π), then a × b = 0'
		]
	},
	{
		id: 'w1-c30',
		type: 'concept',
		front: 'How is a × b computed using a determinant?',
		back: 'Set up the 3×3 determinant with i, j, k in the top row, a₁ a₂ a₃ in the second, and b₁ b₂ b₃ in the third, then expand: a × b = i(a₂b₃ − a₃b₂) − j(a₁b₃ − a₃b₁) + k(a₁b₂ − a₂b₁).'
	},
	{
		id: 'w1-c31',
		type: 'concept',
		front: 'How do you evaluate a 2×2 determinant?',
		back: 'The determinant |x₁ y₁; x₂ y₂| = x₁y₂ − x₂y₁ (product of the main diagonal minus the product of the other diagonal). Example: |−1 2; 5 −4| = (−1)(−4) − (5)(2) = 4 − 10 = −6.'
	},
	{
		id: 'w1-c32',
		type: 'concept',
		front: 'How do you find a unit vector perpendicular to both a and b?',
		back: 'Take the cross product and divide by its magnitude: n̂ = ±(a × b) / |a × b|. The ± reflects that either of the two opposite directions is valid.'
	},
	{
		id: 'w1-c33',
		type: 'list',
		front: 'Give the cross-product formulas for the area of a parallelogram and a triangle built on vectors a and b.',
		back: [
			'Area of parallelogram = |a × b|',
			'Area of triangle = (1/2) |a × b|'
		],
		hint: 'The triangle is half the parallelogram.'
	}
];

export const m1Quiz: QuizData[] = [
	{
		id: 'w1-q01',
		type: 'multiple-choice',
		question: 'Which of the following is a vector quantity?',
		options: ['Mass', 'Speed', 'Velocity', 'Time'],
		correctIndex: 2,
		explanation:
			'A vector needs both magnitude and direction. Velocity is a vector; mass, speed and time are scalars (magnitude only).'
	},
	{
		id: 'w1-q02',
		type: 'multiple-choice',
		question: 'According to the triangle rule, what does AB⃗ + BC⃗ equal?',
		options: ['AC⃗', 'BA⃗', 'CA⃗', 'CB⃗'],
		correctIndex: 0,
		explanation:
			'Placing the vectors head to tail, the resultant joins the tail of the first (A) to the head of the second (C): AB⃗ + BC⃗ = AC⃗.'
	},
	{
		id: 'w1-q03',
		type: 'multiple-choice',
		question: 'A point P has coordinates (3, −4). What is the magnitude of the position vector OP⃗?',
		options: ['5', '7', '√7', '1'],
		correctIndex: 0,
		explanation:
			'|OP⃗| = √(3² + (−4)²) = √(9 + 16) = √25 = 5.'
	},
	{
		id: 'w1-q04',
		type: 'fill-blank',
		question: 'For the point P(3, −4), write a unit vector parallel to OP⃗. (Use the form (1/5)(3i − 4j).)',
		answer: '(1/5)(3i - 4j)',
		acceptableAnswers: [
			'(1/5)(3i - 4j)',
			'(1/5)(3i-4j)',
			'1/5(3i - 4j)',
			'1/5(3i-4j)',
			'(3i - 4j)/5',
			'(3/5)i - (4/5)j',
			'0.6i - 0.8j'
		],
		explanation:
			'OP⃗ = 3i − 4j with magnitude 5, so the unit vector is OP⃗/|OP⃗| = (1/5)(3i − 4j).'
	},
	{
		id: 'w1-q05',
		type: 'multiple-choice',
		question: 'Given a = i + 2k and b = 7i + 6j + 6k, what is the dot product a · b?',
		options: ['19', '13', '7', '12'],
		correctIndex: 0,
		explanation:
			'a · b = (1)(7) + (0)(6) + (2)(6) = 7 + 0 + 12 = 19 (tutorial Q1 ii).'
	},
	{
		id: 'w1-q06',
		type: 'fill-blank',
		question: 'For a = i + 2k and b = 7i + 6j + 6k, compute 2a − 5b in the form ai + bj + ck.',
		answer: '-33i - 30j - 26k',
		acceptableAnswers: [
			'-33i - 30j - 26k',
			'-33i-30j-26k',
			'-33i -30j -26k',
			'-33 i - 30 j - 26 k'
		],
		explanation:
			'2a − 5b = 2(i + 2k) − 5(7i + 6j + 6k) = (2−35)i − 30j + (4−30)k = −33i − 30j − 26k (tutorial Q1 i).'
	},
	{
		id: 'w1-q07',
		type: 'multiple-choice',
		question: 'If a is perpendicular to b (and neither is the zero vector), what is a · b?',
		options: ['0', '1', '|a||b|', '−1'],
		correctIndex: 0,
		explanation:
			'When θ = 90°, cos(θ) = 0, so a · b = |a||b|cos(90°) = 0. A zero dot product signals perpendicular vectors.'
	},
	{
		id: 'w1-q08',
		type: 'multiple-choice',
		question: 'Two vectors have magnitudes |a| = 3 and |b| = 4 with an angle of 120° between them. What is a · b?',
		options: ['−6', '12', '6', '−12'],
		correctIndex: 0,
		explanation:
			'a · b = |a||b|cos(θ) = 3 × 4 × cos(120°) = 12 × (−0.5) = −6.'
	},
	{
		id: 'w1-q09',
		type: 'multiple-choice',
		question: 'For a = 2i − 3j + 5k and b = 4i − j − 2k, what is a · b?',
		options: ['1', '8', '−10', '3'],
		correctIndex: 0,
		explanation:
			'a · b = (2)(4) + (−3)(−1) + (5)(−2) = 8 + 3 − 10 = 1.'
	},
	{
		id: 'w1-q10',
		type: 'multiple-choice',
		question: 'Which property correctly describes the vector cross product?',
		options: [
			'It is not commutative: a × b = −(b × a)',
			'It is commutative: a × b = b × a',
			'Its result is always a scalar',
			'It equals |a||b|cos(θ)'
		],
		correctIndex: 0,
		explanation:
			'The cross product is anti-commutative: a × b = −(b × a). Its result is a vector with magnitude |a||b|sin(θ) (cos(θ) describes the dot product).'
	},
	{
		id: 'w1-q11',
		type: 'fill-blank',
		question: 'Evaluate the 2×2 determinant of the first row (−1, 2) and second row (5, −4).',
		answer: '-6',
		acceptableAnswers: ['-6', '−6'],
		explanation:
			'|−1 2; 5 −4| = (−1)(−4) − (5)(2) = 4 − 10 = −6.'
	},
	{
		id: 'w1-q12',
		type: 'multiple-choice',
		question: 'Which formula gives the area of a triangle built on vectors a and b?',
		options: ['(1/2)|a × b|', '|a × b|', '(1/2)(a · b)', '|a||b|'],
		correctIndex: 0,
		explanation:
			'The area of a parallelogram on a and b is |a × b|; a triangle is half of that, so its area is (1/2)|a × b|.'
	}
];
