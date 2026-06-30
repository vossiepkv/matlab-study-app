import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m10Meta: ModuleMeta = {
	num: 10,
	title: 'Integration (Part 1)',
	description:
		'Introduces integration as the reverse of differentiation: antiderivatives and the constant of integration, indefinite integral notation, the standard antiderivatives of powers, trigonometric, exponential, hyperbolic and inverse-trigonometric functions, the linearity rules, definite integrals via the Fundamental Theorem of Calculus, properties of definite integrals, even and odd functions, and integrating squared trigonometric functions using double-angle identities.',
	topics: [
		'Antiderivatives and the constant of integration',
		'Indefinite integral notation and terminology',
		'Power rule for integration',
		'Standard integrals (trig, exponential, hyperbolic, inverse trig)',
		'Linearity rules for integration',
		'Definite integrals and the Fundamental Theorem of Calculus',
		'Properties of definite integrals',
		'Even and odd functions',
		'Integrating powers of trigonometric functions'
	]
};

export const m10Cards: CardData[] = [
	{
		id: 'w10-c01',
		type: 'concept',
		front: 'What is an antiderivative of a function f?',
		back: 'For f defined on [a, b], any function F such that F′(x) = f(x) for all x ∈ (a, b) is called an antiderivative of f. Integration is the reverse process of differentiation.',
		hint: 'Differentiating it gives you back f.'
	},
	{
		id: 'w10-c02',
		type: 'concept',
		front: 'How many antiderivatives does a function f(x) have, and why?',
		back: 'There are an infinite number. If F(x) is an antiderivative of f(x), then F(x) + c is also an antiderivative for any value of c, since d/dx{F(x) + c} = F′(x) + 0 = f(x).',
		hint: 'Adding a constant does not change the derivative.'
	},
	{
		id: 'w10-c03',
		type: 'concept',
		front: 'What is the "most general antiderivative" of f(x)?',
		back: 'F(x) + c, where F(x) is any one antiderivative of f(x) and c is an arbitrary constant. This captures every possible antiderivative at once.'
	},
	{
		id: 'w10-c04',
		type: 'concept',
		front: 'What does the indefinite integral notation ∫ f(x) dx mean?',
		back: 'It denotes the most general antiderivative of f(x): ∫ f(x) dx = F(x) + c.',
		hint: 'The integral sign means "find the most general antiderivative".'
	},
	{
		id: 'w10-c05',
		type: 'list',
		front: 'In ∫ f(x) dx = F(x) + c, name the parts of the notation.',
		back: [
			'∫ — the integral sign',
			'f(x) — the integrand',
			'dx — the variable of integration (integrate with respect to x)',
			'c — the arbitrary constant of integration'
		]
	},
	{
		id: 'w10-c06',
		type: 'concept',
		front: 'What is the power rule for integration of xⁿ?',
		back: '∫ xⁿ dx = (1/(n+1)) xⁿ⁺¹ + c, valid for n ≠ −1. Add one to the power, then divide by the new power.',
		hint: 'Add one to the index, divide by the new index.'
	},
	{
		id: 'w10-c07',
		type: 'concept',
		front: 'What is ∫ 1 dx?',
		back: '∫ 1 dx = x + c, since d/dx{x} = 1.'
	},
	{
		id: 'w10-c08',
		type: 'concept',
		front: 'What is ∫ x dx?',
		back: '∫ x dx = ½ x² + c, since d/dx{x²} = 2x.'
	},
	{
		id: 'w10-c09',
		type: 'concept',
		front: 'Why does the power rule fail when n = −1, and what is the integral instead?',
		back: 'The rule (1/(n+1))xⁿ⁺¹ would divide by zero. Instead, ∫ (1/x) dx = log|x| + c.',
		hint: 'Special case: the integral of 1/x.'
	},
	{
		id: 'w10-c10',
		type: 'concept',
		front: 'What is ∫ cos(ax) dx? (a is a constant)',
		back: '∫ cos(ax) dx = (1/a) sin(ax) + c, since d/dx{sin(ax)} = a cos(ax).'
	},
	{
		id: 'w10-c11',
		type: 'concept',
		front: 'What is ∫ sin(ax) dx? (a is a constant)',
		back: '∫ sin(ax) dx = −(1/a) cos(ax) + c, since d/dx{cos(ax)} = −a sin(ax).',
		hint: 'Note the minus sign.'
	},
	{
		id: 'w10-c12',
		type: 'concept',
		front: 'What is ∫ sec²(ax) dx? (a is a constant)',
		back: '∫ sec²(ax) dx = (1/a) tan(ax) + c, since d/dx{tan(ax)} = a sec²(ax).'
	},
	{
		id: 'w10-c13',
		type: 'concept',
		front: 'What is ∫ eᵃˣ dx? (a is a constant)',
		back: '∫ eᵃˣ dx = (1/a) eᵃˣ + c, since d/dx{eᵃˣ} = a eᵃˣ.',
		hint: 'Same exponential, divided by a.'
	},
	{
		id: 'w10-c14',
		type: 'list',
		front: 'Give the integrals of the hyperbolic functions sinh(ax), cosh(ax) and sech²(ax).',
		back: [
			'∫ cosh(ax) dx = (1/a) sinh(ax) + c',
			'∫ sinh(ax) dx = (1/a) cosh(ax) + c',
			'∫ sech²(ax) dx = (1/a) tanh(ax) + c'
		],
		hint: 'No minus sign on sinh/cosh (unlike sin/cos).'
	},
	{
		id: 'w10-c15',
		type: 'concept',
		front: 'What is ∫ 1/√(a² − x²) dx?',
		back: '∫ dx/√(a² − x²) = sin⁻¹(x/a) + c.',
		hint: 'Inverse sine; note a² minus x² under the root.'
	},
	{
		id: 'w10-c16',
		type: 'concept',
		front: 'What is ∫ 1/(a² + x²) dx?',
		back: '∫ dx/(a² + x²) = (1/a) tan⁻¹(x/a) + c.',
		hint: 'Inverse tangent; note a² plus x² (no root).'
	},
	{
		id: 'w10-c17',
		type: 'concept',
		front: 'What is the constant-multiple rule for integration?',
		back: '∫ k f(x) dx = k ∫ f(x) dx — a constant factor k can be pulled outside the integral.'
	},
	{
		id: 'w10-c18',
		type: 'concept',
		front: 'What is the sum/difference rule for integration?',
		back: '∫ (f(x) ± g(x)) dx = ∫ f(x) dx ± ∫ g(x) dx — integrate term by term.',
		hint: 'Integrate each piece separately.'
	},
	{
		id: 'w10-c19',
		type: 'concept',
		front: 'State the combined linearity rule for integration.',
		back: '∫ (a f(x) + b g(x)) dx = a ∫ f(x) dx + b ∫ g(x) dx, where a and b are constants. The integration rules follow from the rules of differentiation.'
	},
	{
		id: 'w10-c20',
		type: 'list',
		front: 'How do you integrate an expression containing roots or fractions like √x or 1/x⁵?',
		back: [
			'Rewrite each term as a power of x first',
			'√x becomes x^(1/2)',
			'1/x⁵ becomes x⁻⁵',
			'Then apply the power rule term by term'
		],
		hint: 'Convert to xⁿ form before integrating.'
	},
	{
		id: 'w10-c21',
		type: 'concept',
		front: 'State the Fundamental Theorem of Calculus.',
		back: 'If f(x) is continuous on [a, b] and F(x) is an antiderivative of f(x), then ∫ₐᵇ f(x) dx = F(b) − F(a) = [F(x)]ₐᵇ.',
		hint: 'Evaluate the antiderivative at the top limit minus the bottom limit.'
	},
	{
		id: 'w10-c22',
		type: 'concept',
		front: 'What is the difference between a definite and an indefinite integral?',
		back: 'An indefinite integral ∫ f(x) dx gives a family of functions F(x) + c. A definite integral ∫ₐᵇ f(x) dx has limits a and b and evaluates to a single number F(b) − F(a) (no constant of integration needed).'
	},
	{
		id: 'w10-c23',
		type: 'concept',
		front: 'Geometrically, what does the definite integral ∫ₐᵇ f(x) dx represent for f(x) ≥ 0?',
		back: 'The area under the curve y = f(x) between x = a and x = b. For example, ∫₁³ x² dx = [⅓x³]₁³ = 9 − ⅓ = 26/3.',
		hint: 'Area under the curve between the two limits.'
	},
	{
		id: 'w10-c24',
		type: 'list',
		front: 'State the key properties of definite integrals.',
		back: [
			'∫ₐᵇ k f(x) dx = k ∫ₐᵇ f(x) dx (k constant)',
			'∫ₐᵇ [f(x) ± g(x)] dx = ∫ₐᵇ f(x) dx ± ∫ₐᵇ g(x) dx',
			'∫ₐᵇ f(x) dx = −∫ᵦᵃ f(x) dx (swapping limits flips the sign)',
			'∫ₐᵃ f(x) dx = 0 (equal limits give zero)',
			'∫ₐᵇ f(x) dx + ∫ᵦᶜ f(x) dx = ∫ₐᶜ f(x) dx (splitting the interval)'
		]
	},
	{
		id: 'w10-c25',
		type: 'concept',
		front: 'What happens to a definite integral when the upper and lower limits are swapped?',
		back: 'The sign of the integral reverses: ∫ₐᵇ f(x) dx = −∫ᵦᵃ f(x) dx.',
		hint: 'Swapping limits introduces a minus sign.'
	},
	{
		id: 'w10-c26',
		type: 'concept',
		front: 'What is the defining property of an odd function, and what is its integral over a symmetric interval?',
		back: 'An odd function satisfies f(−x) = −f(x). For any a, ∫₋ₐᵃ f(x) dx = 0. Examples: xᵏ (k odd), sin x, sinh x, arctan x.',
		hint: 'Odd functions integrate to zero on [−a, a].'
	},
	{
		id: 'w10-c27',
		type: 'concept',
		front: 'What is the defining property of an even function, and what is its integral over a symmetric interval?',
		back: 'An even function satisfies f(−x) = f(x). For any a, ∫₋ₐᵃ f(x) dx = 2 ∫₀ᵃ f(x) dx. Examples: xᵏ (k even), cos x, cosh x.',
		hint: 'Even functions: double the integral from 0 to a.'
	},
	{
		id: 'w10-c28',
		type: 'concept',
		front: 'How do you integrate sin²(x)?',
		back: 'Replace it using the double-angle identity sin²(x) = ½(1 − cos(2x)), then integrate term by term.',
		hint: 'Use a power-reduction identity first.'
	},
	{
		id: 'w10-c29',
		type: 'concept',
		front: 'How do you integrate cos²(x)?',
		back: 'Replace it using the double-angle identity cos²(x) = ½(1 + cos(2x)), then integrate term by term.',
		hint: 'Plus sign in the identity (compare sin²).'
	},
	{
		id: 'w10-c30',
		type: 'concept',
		front: 'How do you integrate expressions involving tan²(x) or sec²(x)?',
		back: 'Simplify the integrand using the identity 1 + tan²(x) = sec²(x). For example, tan²(x) = sec²(x) − 1, which is easy to integrate.',
		hint: 'Pythagorean identity links tan² and sec².'
	},
	{
		id: 'w10-c31',
		type: 'list',
		front: 'Work through ∫ cos²(3x) dx using the double-angle identity.',
		back: [
			'cos²(3x) = ½(1 + cos(6x))',
			'∫ ½(1 + cos(6x)) dx = ½(x + (1/6)sin(6x)) + c',
			'= ½x + (1/12)sin(6x) + c'
		],
		hint: 'a = 3 so the angle doubles to 6x.'
	},
	{
		id: 'w10-c32',
		type: 'concept',
		front: 'Evaluate ∫₀^π sin(x) dx.',
		back: '∫₀^π sin(x) dx = [−cos(x)]₀^π = −cos(π) − (−cos(0)) = −(−1) + 1 = 2.',
		hint: 'Antiderivative of sin is −cos.'
	}
];

export const m10Quiz: QuizData[] = [
	{
		id: 'w10-q01',
		type: 'multiple-choice',
		question: 'If F(x) is an antiderivative of f(x), which statement is true?',
		options: [
			'F(x) + c is also an antiderivative for any constant c',
			'F(x) is the only antiderivative of f(x)',
			'F(x) − f(x) = 0',
			'f(x) is an antiderivative of F(x)'
		],
		correctIndex: 0,
		explanation:
			'Adding a constant does not change the derivative: d/dx{F(x) + c} = F′(x) + 0 = f(x). So there are infinitely many antiderivatives, all of the form F(x) + c.'
	},
	{
		id: 'w10-q02',
		type: 'multiple-choice',
		question: 'In the notation ∫ f(x) dx = F(x) + c, what is f(x) called?',
		options: ['The integrand', 'The constant of integration', 'The antiderivative', 'The limit'],
		correctIndex: 0,
		explanation:
			'f(x) is the integrand (the function being integrated). c is the constant of integration and F(x) + c is the most general antiderivative.'
	},
	{
		id: 'w10-q03',
		type: 'multiple-choice',
		question: 'What is ∫ x² dx?',
		options: ['⅓x³ + c', '2x + c', '3x³ + c', 'x³ + c'],
		correctIndex: 0,
		explanation:
			'By the power rule, ∫ xⁿ dx = (1/(n+1))xⁿ⁺¹ + c. With n = 2: ∫ x² dx = ⅓x³ + c.'
	},
	{
		id: 'w10-q04',
		type: 'multiple-choice',
		question: 'What is ∫ (1/x) dx?',
		options: ['log|x| + c', '−1/x² + c', '⅓x³ + c', 'x⁰ + c'],
		correctIndex: 0,
		explanation:
			'The power rule fails for n = −1 (it would divide by zero). The special case is ∫ (1/x) dx = log|x| + c.'
	},
	{
		id: 'w10-q05',
		type: 'fill-blank',
		question: 'Find ∫ (3x² − √x)² dx. Give the answer (Tutorial Q1 i). Use the form (9/5)x^5 - (12/7)x^(7/2) + x^2/2 + C.',
		answer: '(9/5)x^5 - (12/7)x^(7/2) + x^2/2 + C',
		acceptableAnswers: [
			'(9/5)x^5 - (12/7)x^(7/2) + x^2/2 + C',
			'(9/5)x^5 - (12/7)x^(7/2) + (1/2)x^2 + C',
			'9/5 x^5 - 12/7 x^(7/2) + x^2/2 + C'
		],
		explanation:
			'Expand: (3x² − √x)² = 9x⁴ − 6x^(5/2) + x. Integrating term by term gives (9/5)x⁵ − 6·(2/7)x^(7/2) + ½x² + c = (9/5)x⁵ − (12/7)x^(7/2) + ½x² + c (Tutorial Q1 i).'
	},
	{
		id: 'w10-q06',
		type: 'multiple-choice',
		question: 'What is ∫ sin(ax) dx, assuming a is a constant?',
		options: [
			'−(1/a) cos(ax) + c',
			'(1/a) cos(ax) + c',
			'(1/a) sin(ax) + c',
			'−a cos(ax) + c'
		],
		correctIndex: 0,
		explanation:
			'Since d/dx{cos(ax)} = −a sin(ax), reversing gives ∫ sin(ax) dx = −(1/a) cos(ax) + c. Watch the minus sign.'
	},
	{
		id: 'w10-q07',
		type: 'multiple-choice',
		question: 'What is ∫ e^(ax) dx, assuming a is a constant?',
		options: ['(1/a) e^(ax) + c', 'a e^(ax) + c', 'e^(ax) + c', '(1/a) e^(x) + c'],
		correctIndex: 0,
		explanation:
			'Since d/dx{e^(ax)} = a e^(ax), reversing gives ∫ e^(ax) dx = (1/a) e^(ax) + c.'
	},
	{
		id: 'w10-q08',
		type: 'multiple-choice',
		question: 'Which identity is used to integrate sin²(x)?',
		options: [
			'sin²(x) = ½(1 − cos(2x))',
			'sin²(x) = ½(1 + cos(2x))',
			'sin²(x) = 1 − sec²(x)',
			'sin²(x) = 2 sin(x) cos(x)'
		],
		correctIndex: 0,
		explanation:
			'Use the power-reduction identity sin²(x) = ½(1 − cos(2x)). For cos²(x) the identity is ½(1 + cos(2x)) (note the plus sign).'
	},
	{
		id: 'w10-q09',
		type: 'fill-blank',
		question: 'Integrate ∫ (tan²(2x) − 2sec²(2x)) dx (Tutorial Q2 iii). Use the form -x - (1/2)tan(2x) + C.',
		answer: '-x - (1/2)tan(2x) + C',
		acceptableAnswers: [
			'-x - (1/2)tan(2x) + C',
			'-x - 1/2 tan(2x) + C',
			'-x - tan(2x)/2 + C'
		],
		explanation:
			'Using tan²(2x) = sec²(2x) − 1: the integrand becomes (sec²(2x) − 1 − 2sec²(2x)) = −1 − sec²(2x). Integrating gives −x − ½tan(2x) + c (Tutorial Q2 iii).'
	},
	{
		id: 'w10-q10',
		type: 'multiple-choice',
		question: 'State the Fundamental Theorem of Calculus for a continuous f with antiderivative F.',
		options: [
			'∫ₐᵇ f(x) dx = F(b) − F(a)',
			'∫ₐᵇ f(x) dx = F(a) − F(b)',
			'∫ₐᵇ f(x) dx = F(b) + F(a) + c',
			'∫ₐᵇ f(x) dx = f(b) − f(a)'
		],
		correctIndex: 0,
		explanation:
			'The Fundamental Theorem of Calculus states ∫ₐᵇ f(x) dx = F(b) − F(a) = [F(x)]ₐᵇ — evaluate the antiderivative at the upper limit minus the lower limit.'
	},
	{
		id: 'w10-q11',
		type: 'multiple-choice',
		question: 'What is the value of ∫₁³ x² dx?',
		options: ['26/3', '9', '8', '28/3'],
		correctIndex: 0,
		explanation:
			'∫₁³ x² dx = [⅓x³]₁³ = ⅓(27) − ⅓(1) = 9 − ⅓ = 26/3.'
	},
	{
		id: 'w10-q12',
		type: 'multiple-choice',
		question: 'For an odd function f (where f(−x) = −f(x)), what is ∫₋ₐᵃ f(x) dx?',
		options: ['0', '2∫₀ᵃ f(x) dx', 'F(a) − F(−a)', 'undefined'],
		correctIndex: 0,
		explanation:
			'Odd functions integrate to zero over a symmetric interval: ∫₋ₐᵃ f(x) dx = 0. (For even functions it equals 2∫₀ᵃ f(x) dx.)'
	},
	{
		id: 'w10-q13',
		type: 'fill-blank',
		question: 'Evaluate the definite integral ∫₀^π sin(x) dx.',
		answer: '2',
		acceptableAnswers: ['2', '2.0'],
		explanation:
			'∫₀^π sin(x) dx = [−cos(x)]₀^π = −cos(π) − (−cos(0)) = −(−1) + 1 = 2.'
	},
	{
		id: 'w10-q14',
		type: 'fill-blank',
		question: 'Integrate ∫ (8cosh(x/2) − 4sinh(3x)) dx (Tutorial Q3 ii). Use the form 16sinh(x/2) - (4/3)cosh(3x) + C.',
		answer: '16sinh(x/2) - (4/3)cosh(3x) + C',
		acceptableAnswers: [
			'16sinh(x/2) - (4/3)cosh(3x) + C',
			'16 sinh(x/2) - 4/3 cosh(3x) + C',
			'16sinh(x/2) - (4/3)cosh(3x) + c'
		],
		explanation:
			'∫ 8cosh(x/2) dx = 8·(1/(1/2))sinh(x/2) = 16sinh(x/2); ∫ −4sinh(3x) dx = −4·(1/3)cosh(3x) = −(4/3)cosh(3x). Sum: 16sinh(x/2) − (4/3)cosh(3x) + c (Tutorial Q3 ii).'
	}
];
