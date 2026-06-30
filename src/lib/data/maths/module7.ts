import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m7Meta: ModuleMeta = {
	num: 7,
	title: 'Differentiation (Part 2)',
	description:
		'Extends differentiation to hyperbolic functions (sinh, cosh, tanh) and their derivatives, the derivatives of the inverse trigonometric functions (arcsin, arccos, arctan), implicit differentiation for relations f(x, y) = 0, and logarithmic differentiation for products, quotients and variable powers.',
	topics: [
		'Hyperbolic functions and their definitions',
		'Properties and identities of hyperbolic functions',
		'Derivatives of sinh, cosh and tanh',
		'Inverse trigonometric functions',
		'Derivatives of arcsin, arccos and arctan',
		'Combining rules: chain, product and quotient',
		'Implicit differentiation',
		'Logarithmic differentiation'
	]
};

export const m7Cards: CardData[] = [
	{
		id: 'w7-c01',
		type: 'concept',
		front: 'Define the hyperbolic cosine, cosh x, in terms of exponentials.',
		back: 'cosh x = (eˣ + e⁻ˣ) / 2.',
		hint: 'Sum of the two exponentials over 2.'
	},
	{
		id: 'w7-c02',
		type: 'concept',
		front: 'Define the hyperbolic sine, sinh x, in terms of exponentials.',
		back: 'sinh x = (eˣ − e⁻ˣ) / 2.',
		hint: 'Difference of the two exponentials over 2.'
	},
	{
		id: 'w7-c03',
		type: 'concept',
		front: 'Define the hyperbolic tangent, tanh x.',
		back: 'tanh x = sinh x / cosh x = (eˣ − e⁻ˣ) / (eˣ + e⁻ˣ).'
	},
	{
		id: 'w7-c04',
		type: 'list',
		front: 'Give the three reciprocal hyperbolic functions (sech, cosech, coth).',
		back: [
			'sech x = 1 / cosh x',
			'cosech x = 1 / sinh x',
			'coth x = 1 / tanh x'
		],
		hint: 'Reciprocals of cosh, sinh and tanh respectively.'
	},
	{
		id: 'w7-c05',
		type: 'concept',
		front: 'How are sinh and tanh pronounced?',
		back: 'sinh is pronounced "shine" and tanh is pronounced "than" (with a soft "th"). The others are pronounced as written.'
	},
	{
		id: 'w7-c06',
		type: 'concept',
		front: 'What shape is the graph of y = cosh x, and what is its range?',
		back: 'It is a catenary — the shape of a hanging rope or chain — like a parabola with very steep sides. Note that y ≥ 1 for all x.',
		hint: 'A hanging chain.'
	},
	{
		id: 'w7-c07',
		type: 'concept',
		front: 'Describe the graph and range of y = tanh x.',
		back: 'It resembles an S-shaped curve with horizontal asymptotes; the range is (−1, 1). Its slope y′ = 1 at the origin.'
	},
	{
		id: 'w7-c08',
		type: 'list',
		front: 'Which hyperbolic functions are odd and which are even?',
		back: [
			'sinh x is odd: sinh(−x) = −sinh x',
			'tanh x is odd: tanh(−x) = −tanh x',
			'cosh x is even: cosh(−x) = cosh x'
		],
		hint: 'Like sin and tan vs cos.'
	},
	{
		id: 'w7-c09',
		type: 'concept',
		front: 'State the fundamental hyperbolic identity.',
		back: 'cosh²x − sinh²x = 1. (Compare with the trig identity cos²x + sin²x = 1 — note the minus sign.)',
		hint: 'Like cos²+sin²=1, but with a minus.'
	},
	{
		id: 'w7-c10',
		type: 'list',
		front: 'Give the double-angle hyperbolic identities for sinh 2x and cosh 2x.',
		back: [
			'sinh 2x = 2 sinh x cosh x',
			'cosh 2x = cosh²x + sinh²x'
		],
		hint: 'Compare with sin 2x and cos 2x.'
	},
	{
		id: 'w7-c11',
		type: 'concept',
		front: 'What is the derivative of cosh x?',
		back: 'd/dx {cosh x} = sinh x. (Unlike trig, there is no minus sign here.)',
		hint: 'Derivative of cosh is sinh.'
	},
	{
		id: 'w7-c12',
		type: 'concept',
		front: 'What is the derivative of sinh x?',
		back: 'd/dx {sinh x} = cosh x.',
		hint: 'Derivative of sinh is cosh.'
	},
	{
		id: 'w7-c13',
		type: 'concept',
		front: 'What is the derivative of tanh x?',
		back: 'd/dx {tanh x} = sech²x. This follows from the quotient rule and the identity cosh²x − sinh²x = 1.',
		hint: 'Analogue of sec²x for ordinary tan.'
	},
	{
		id: 'w7-c14',
		type: 'list',
		front: 'Give the derivatives of sinh(kx), cosh(kx) and tanh(kx) (with the chain rule on kx).',
		back: [
			'd/dx {sinh(kx)} = k cosh(kx)',
			'd/dx {cosh(kx)} = k sinh(kx)',
			'd/dx {tanh(kx)} = k sech²(kx)'
		],
		hint: 'The chain rule brings down the factor k.'
	},
	{
		id: 'w7-c15',
		type: 'concept',
		front: 'Differentiate y = sinh x³ using the chain rule.',
		back: 'This is a sinh u problem with u = x³, so y′ = (cosh u) u′ = (cosh x³)(3x²) = 3x² cosh x³.',
		hint: 'Outer derivative cosh u, times u′.'
	},
	{
		id: 'w7-c16',
		type: 'concept',
		front: 'Differentiate y = cosh³(10x) using the chain (power) rule.',
		back: 'Write y = (cosh 10x)³, a u³ problem with u = cosh 10x. y′ = 3u² u′ = 3(cosh 10x)²(10 sinh 10x) = 30 cosh²(10x) sinh 10x.',
		hint: 'Power rule outside, then differentiate cosh 10x.'
	},
	{
		id: 'w7-c17',
		type: 'concept',
		front: 'Differentiate y = x³ cosh 4x using the product rule.',
		back: 'With u = x³ and v = cosh 4x: y′ = (3x²)(cosh 4x) + (x³)(4 sinh 4x) = 3x² cosh 4x + 4x³ sinh 4x.',
		hint: 'u′v + uv′; remember the factor 4 from cosh 4x.'
	},
	{
		id: 'w7-c18',
		type: 'concept',
		front: 'How is the derivative of an inverse function such as y = arcsin x found?',
		back: 'By implicit differentiation: write x = sin y, differentiate both sides with respect to x, then solve for y′ and use a right triangle to express the result in terms of x.',
		hint: 'Rewrite as x = sin y, then differentiate implicitly.'
	},
	{
		id: 'w7-c19',
		type: 'concept',
		front: 'What is d/dx {arcsin x}?',
		back: 'd/dx {arcsin x} = 1 / √(1 − x²). The derivative is undefined at x = ±1, where the slope becomes infinite.',
		hint: '1 over root (1 − x²).'
	},
	{
		id: 'w7-c20',
		type: 'concept',
		front: 'What is d/dx {arccos x}?',
		back: 'd/dx {arccos x} = −1 / √(1 − x²). It is the negative of the arcsin derivative; undefined at x = ±1.',
		hint: 'Same as arcsin but with a minus sign.'
	},
	{
		id: 'w7-c21',
		type: 'concept',
		front: 'What is d/dx {arctan x}?',
		back: 'd/dx {arctan x} = 1 / (1 + x²).',
		hint: '1 over (1 + x²).'
	},
	{
		id: 'w7-c22',
		type: 'concept',
		front: 'Why is the notation cos⁻¹x for arccos x considered ambiguous?',
		back: 'Because cos⁻¹x means the inverse cosine (arccos x), NOT the reciprocal: cos⁻¹x = (cos x)⁻¹ ≠ 1 / cos x. The arc... notation avoids this confusion.',
		hint: 'It looks like a reciprocal but is not.'
	},
	{
		id: 'w7-c23',
		type: 'concept',
		front: 'Differentiate y = arcsin(5x + 1) using the chain rule.',
		back: 'arcsin u problem with u = 5x + 1: y′ = (1 / √(1 − u²)) u′ = 5 / √(1 − (5x + 1)²).',
		hint: 'Inner derivative of 5x + 1 is 5.'
	},
	{
		id: 'w7-c24',
		type: 'concept',
		front: 'Differentiate y = arctan(2/x) using the chain rule.',
		back: 'arctan u problem with u = 2/x, so u′ = −2/x². y′ = (1 / (1 + u²))(−2/x²) = (1 / (1 + 4/x²))(−2/x²) = −2 / (x² + 4).',
		hint: 'Simplify by multiplying numerator and denominator by x².'
	},
	{
		id: 'w7-c25',
		type: 'concept',
		front: 'What is implicit differentiation, and when is it used?',
		back: 'It is used when y and x are related implicitly by an equation f(x, y) = 0 and it is inconvenient (or impossible) to solve for y in terms of x. You differentiate both sides with respect to x, treating y as an unspecified function of x.',
		hint: 'For relations you cannot easily solve for y.'
	},
	{
		id: 'w7-c26',
		type: 'concept',
		front: 'When differentiating implicitly, what is d/dx {y²}, and why?',
		back: 'd/dx {y²} = 2y · y′ = 2y(dy/dx). The chain rule applies because y is an unspecified function of x, so differentiating y² brings out a factor of y′.',
		hint: 'Chain rule: 2y times dy/dx.'
	},
	{
		id: 'w7-c27',
		type: 'concept',
		front: 'Using the circle x² + y² = 4, find the slope y′ at any point by implicit differentiation.',
		back: 'Differentiating both sides: 2x + 2y·y′ = 0, so y′ = −x/y. (For example, at P(√3, 1) the slope is −√3.)',
		hint: 'Differentiate term by term, then solve for y′.'
	},
	{
		id: 'w7-c28',
		type: 'concept',
		front: 'What is logarithmic differentiation and when is it useful?',
		back: 'A technique using log properties and implicit differentiation. It is useful when it is easier to differentiate the logarithm of a function than the function itself — typically for products/quotients of several parts, or a function raised to a variable power.',
		hint: 'Take ln first to turn products into sums.'
	},
	{
		id: 'w7-c29',
		type: 'list',
		front: 'List the steps for logarithmic differentiation.',
		back: [
			'1. Take the natural logarithm of both sides of y = f(x)',
			'2. Use the laws of logs to simplify (products → sums, powers → multipliers)',
			'3. Differentiate implicitly with respect to x',
			"4. Solve the resulting equation for y′ (dy/dx)",
			'5. Substitute back the expression for y'
		]
	},
	{
		id: 'w7-c30',
		type: 'concept',
		front: 'Use logarithmic differentiation to find the derivative of y = xˣ.',
		back: 'ln y = x ln x. Differentiate: (1/y) y′ = ln x + 1, so y′ = y(ln x + 1) = xˣ(ln x + 1).',
		hint: 'A variable raised to a variable power — take ln first.'
	},
	{
		id: 'w7-c31',
		type: 'concept',
		front: 'Use logarithmic differentiation to find the derivative of y = 3ˣ sin x.',
		back: 'ln y = x ln 3 + ln(sin x). Differentiate: (1/y) y′ = ln 3 + cos x / sin x = ln 3 + cot x. So y′ = 3ˣ sin x (ln 3 + cot x).',
		hint: 'Split the product with logs, then differentiate each piece.'
	},
	{
		id: 'w7-c32',
		type: 'concept',
		front: 'When taking ln of a product like eˣ²·6ˣ·sin(5x), how do the logs split it up?',
		back: 'ln y = ln(eˣ²) + ln(6ˣ) + ln(sin 5x) = x² + x ln 6 + ln(sin 5x). Each factor becomes a separate, easy-to-differentiate term.',
		hint: 'ln of a product = sum of the logs.'
	}
];

export const m7Quiz: QuizData[] = [
	{
		id: 'w7-q01',
		type: 'multiple-choice',
		question: 'Which expression correctly defines cosh x?',
		options: [
			'(eˣ + e⁻ˣ) / 2',
			'(eˣ − e⁻ˣ) / 2',
			'(eˣ − e⁻ˣ) / (eˣ + e⁻ˣ)',
			'2 / (eˣ + e⁻ˣ)'
		],
		correctIndex: 0,
		explanation:
			'cosh x = (eˣ + e⁻ˣ)/2 (sum). sinh x uses the difference, and tanh x is their ratio.'
	},
	{
		id: 'w7-q02',
		type: 'multiple-choice',
		question: 'What is the derivative of cosh x?',
		options: ['sinh x', '−sinh x', 'cosh x', 'sech²x'],
		correctIndex: 0,
		explanation:
			'd/dx {cosh x} = sinh x. Unlike d/dx {cos x} = −sin x, there is no minus sign for the hyperbolic version.'
	},
	{
		id: 'w7-q03',
		type: 'multiple-choice',
		question: 'Which is the fundamental hyperbolic identity?',
		options: [
			'cosh²x − sinh²x = 1',
			'cosh²x + sinh²x = 1',
			'sinh²x − cosh²x = 1',
			'tanh²x + sech²x = 0'
		],
		correctIndex: 0,
		explanation:
			'cosh²x − sinh²x = 1. It mirrors cos²x + sin²x = 1 but with a minus sign between the squared terms.'
	},
	{
		id: 'w7-q04',
		type: 'multiple-choice',
		question: 'What is the derivative of tanh x?',
		options: ['sech²x', 'sec²x', 'cosh²x', '−cosech²x'],
		correctIndex: 0,
		explanation:
			'Using the quotient rule on sinh x / cosh x and the identity cosh²x − sinh²x = 1 gives d/dx {tanh x} = 1/cosh²x = sech²x.'
	},
	{
		id: 'w7-q05',
		type: 'fill-blank',
		question:
			'Find dy/dx for y = 2x² tanh(1 − 3x). (Tutorial Q2a.) Write your answer factored.',
		answer: '4x tanh(1 - 3x) - 6x^2 sech^2(1 - 3x)',
		acceptableAnswers: [
			'4x tanh(1 - 3x) - 6x^2 sech^2(1 - 3x)',
			'4x tanh(1-3x) - 6x^2 sech^2(1-3x)',
			'4x tanh(1 - 3x) - 6x² sech²(1 - 3x)',
			'2x(2 tanh(1 - 3x) - 3x sech^2(1 - 3x))',
			'2x(2tanh(1-3x) - 3x sech^2(1-3x))'
		],
		explanation:
			'Product rule with u = 2x², v = tanh(1 − 3x): y′ = 4x tanh(1 − 3x) + 2x²·sech²(1 − 3x)·(−3) = 4x tanh(1 − 3x) − 6x² sech²(1 − 3x).'
	},
	{
		id: 'w7-q06',
		type: 'multiple-choice',
		question: 'Which of these is the derivative of arcsin x?',
		options: [
			'1 / √(1 − x²)',
			'−1 / √(1 − x²)',
			'1 / (1 + x²)',
			'1 / √(1 + x²)'
		],
		correctIndex: 0,
		explanation:
			'd/dx {arcsin x} = 1/√(1 − x²). arccos x is the negative of this, and arctan x gives 1/(1 + x²).'
	},
	{
		id: 'w7-q07',
		type: 'multiple-choice',
		question: 'What is d/dx {arctan x}?',
		options: ['1 / (1 + x²)', '1 / √(1 − x²)', '−1 / (1 + x²)', 'sec²x'],
		correctIndex: 0,
		explanation:
			'Writing x = tan y, implicit differentiation gives 1 = sec²y · y′, so y′ = cos²y = 1/(1 + x²) using the triangle with hypotenuse √(1 + x²).'
	},
	{
		id: 'w7-q08',
		type: 'multiple-choice',
		question: 'For y = arcsin(5x + 1), what is y′?',
		options: [
			'5 / √(1 − (5x + 1)²)',
			'1 / √(1 − (5x + 1)²)',
			'5 / (1 + (5x + 1)²)',
			'−5 / √(1 − (5x + 1)²)'
		],
		correctIndex: 0,
		explanation:
			'arcsin u with u = 5x + 1: y′ = (1/√(1 − u²))·u′ = 5/√(1 − (5x + 1)²).'
	},
	{
		id: 'w7-q09',
		type: 'multiple-choice',
		question: 'For y = arctan(2/x), what does y′ simplify to?',
		options: ['−2 / (x² + 4)', '2 / (x² + 4)', '−2 / x²', '1 / (1 + x²)'],
		correctIndex: 0,
		explanation:
			'arctan u with u = 2/x, u′ = −2/x². y′ = (1/(1 + 4/x²))(−2/x²) = −2/(x² + 4) after multiplying through by x².'
	},
	{
		id: 'w7-q10',
		type: 'fill-blank',
		question:
			'Find dy/dx for the implicit relation 3x² + 3xy − 3y² + 3 = 0. (Tutorial Q3a.) Write the simplified fraction.',
		answer: '-(2x + y)/(x - 2y)',
		acceptableAnswers: [
			'-(2x + y)/(x - 2y)',
			'-(2x+y)/(x-2y)',
			'(-2x - y)/(x - 2y)',
			'(2x + y)/(2y - x)',
			'-(6x + 3y)/(3x - 6y)'
		],
		explanation:
			'Differentiate: 6x + 3y + 3x·y′ − 6y·y′ = 0, so y′(3x − 6y) = −6x − 3y, giving y′ = −(6x + 3y)/(3x − 6y) = −(2x + y)/(x − 2y).'
	},
	{
		id: 'w7-q11',
		type: 'multiple-choice',
		question: 'When differentiating implicitly, what is d/dx {y²}?',
		options: ['2y · y′', '2y', '2x', 'y′'],
		correctIndex: 0,
		explanation:
			'Because y is treated as an unspecified function of x, the chain rule gives d/dx {y²} = 2y·(dy/dx) = 2y·y′.'
	},
	{
		id: 'w7-q12',
		type: 'multiple-choice',
		question: 'Using logarithmic differentiation, what is the derivative of y = xˣ?',
		options: [
			'xˣ(ln x + 1)',
			'x·xˣ⁻¹',
			'xˣ ln x',
			'xˣ / x'
		],
		correctIndex: 0,
		explanation:
			'ln y = x ln x, so (1/y)y′ = ln x + 1, giving y′ = y(ln x + 1) = xˣ(ln x + 1).'
	},
	{
		id: 'w7-q13',
		type: 'fill-blank',
		question:
			'Using logarithmic differentiation, find dy/dx for y = eˣ²·6ˣ·sin(5x). (Tutorial Q3b.) Express in terms of y or the original product.',
		answer: 'e^(x^2) 6^x sin(5x) (2x + ln 6 + 5 cot(5x))',
		acceptableAnswers: [
			'e^(x^2) 6^x sin(5x) (2x + ln 6 + 5 cot(5x))',
			'e^(x^2) 6^x sin(5x)(2x + ln6 + 5cot(5x))',
			'y(2x + ln 6 + 5 cot(5x))',
			'y(2x + ln6 + 5cot(5x))',
			'(2x + ln 6 + 5 cot(5x))'
		],
		explanation:
			'ln y = x² + x ln 6 + ln(sin 5x). Differentiating: (1/y)y′ = 2x + ln 6 + (5 cos 5x)/sin 5x = 2x + ln 6 + 5 cot 5x. So y′ = eˣ²·6ˣ·sin(5x)·(2x + ln 6 + 5 cot 5x).'
	},
	{
		id: 'w7-q14',
		type: 'multiple-choice',
		question: 'Which functions are odd (f(−x) = −f(x))?',
		options: [
			'sinh x and tanh x',
			'cosh x only',
			'cosh x and sinh x',
			'tanh x and cosh x'
		],
		correctIndex: 0,
		explanation:
			'sinh and tanh are odd: sinh(−x) = −sinh x and tanh(−x) = −tanh x. cosh is even: cosh(−x) = cosh x.'
	}
];
