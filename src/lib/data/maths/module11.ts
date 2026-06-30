import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m11Meta: ModuleMeta = {
	num: 11,
	title: 'Integration (Part 2)',
	description:
		'Covers the main techniques of integration: integration by substitution (the reverse chain rule / u-substitution), integration by parts, the arcsin and arctan standard forms, completing the square in a denominator, and integration of rational functions using partial fractions (distinct, repeated and quadratic factors).',
	topics: [
		'The reverse chain rule and u-substitution',
		'Substitution with definite integrals',
		'Integration by parts (∫u dv = uv − ∫v du)',
		'Choosing u and dv',
		'arcsin and arctan standard forms',
		'Completing the square in a denominator',
		'Partial fractions (distinct, repeated, quadratic factors)',
		'Integrating rational functions'
	]
};

export const m11Cards: CardData[] = [
	{
		id: 'w11-c01',
		type: 'concept',
		front: 'What does the chain rule tell us about d/dx{F(g(x))}?',
		back: 'd/dx{F(g(x))} = F′(g(x)) g′(x) = f(g(x)) g′(x), where F is the antiderivative of f. Reversing this gives the substitution formula for integration.',
		hint: 'Differentiate outer, then multiply by derivative of inner.'
	},
	{
		id: 'w11-c02',
		type: 'concept',
		front: 'State the substitution (reverse chain rule) integral formula.',
		back: '∫ f(g(x)) g′(x) dx = F(g(x)) + C, where F is the antiderivative of f. It is the chain rule run backwards.'
	},
	{
		id: 'w11-c03',
		type: 'list',
		front: 'In ∫ f(g(x)) g′(x) dx, what roles do the inner and outer functions play?',
		back: [
			'The outer function f is the only function integrated explicitly',
			'The inner function g(x) is preserved on both sides — it just sits there',
			"The derivative g′(x) of the inner function must be a factor in the integrand but plays no further role"
		],
		hint: 'Only the outer function gets integrated.'
	},
	{
		id: 'w11-c04',
		type: 'concept',
		front: 'What is substitution as a method meant to do?',
		back: 'It is a method which tidies up an integrand — clearing out the irrelevant functions and allowing you to focus on the outer function which is to be integrated, without getting caught up in the inner function and its derivative.',
		hint: 'It cleans up the integrand.'
	},
	{
		id: 'w11-c05',
		type: 'list',
		front: 'What are the steps of a u-substitution?',
		back: [
			'Determine the inner function g(x)',
			'Let u = g(x)',
			'Then du = g′(x) dx',
			'Substitute to get ∫ f(u) du = F(u) + C = F(g(x)) + C',
			'Replace u with g(x) at the end (for an indefinite integral)'
		],
		hint: 'Pick u, find du, substitute, integrate, back-substitute.'
	},
	{
		id: 'w11-c06',
		type: 'concept',
		front: 'For ∫ (log x / x) dx, why is u = log x a good substitution?',
		back: '1/x is the derivative of log x, so with u = log x ⇒ du = (1/x) dx the integral becomes ∫ u du = ½ u² + C = ½ (log x)² + C.',
		hint: 'The derivative of the inner function appears as a factor.'
	},
	{
		id: 'w11-c07',
		type: 'concept',
		front: 'When evaluating a definite integral by substitution, what happens to the limits?',
		back: 'You change the limits of integration to the new variable. For ∫₁² x e^(4x²) dx with u = 4x², the limits become u = 4 (when x = 1) and u = 16 (when x = 2), so no back-substitution is needed.',
		hint: 'Convert x-limits into u-limits.'
	},
	{
		id: 'w11-c08',
		type: 'concept',
		front: 'Evaluate ∫₁² x e^(4x²) dx using u = 4x².',
		back: 'u = 4x² ⇒ du = 8x dx, so x dx = du/8. The integral becomes (1/8) ∫ e^u du between u = 4 and u = 16 = (1/8)(e¹⁶ − e⁴).',
		hint: 'Pull out 1/8, integrate e^u.'
	},
	{
		id: 'w11-c09',
		type: 'concept',
		front: 'Use substitution to find ∫ cos⁴(3x) sin(3x) dx.',
		back: 'Let u = cos(3x) ⇒ du = −3 sin(3x) dx. The integral becomes −(1/3) ∫ u⁴ du = −(1/15) u⁵ + C = −(1/15) cos⁵(3x) + C.',
		hint: 'u = cos(3x) makes sin(3x)dx the du.'
	},
	{
		id: 'w11-c10',
		type: 'concept',
		front: 'Use substitution to find ∫ 2/(5 − 2x)³ dx.',
		back: 'Let u = 5 − 2x ⇒ du = −2 dx, so dx = du/(−2). The integral becomes −∫ u⁻³ du = u⁻²/2 + C = 1/[2(5 − 2x)²] + C.',
		hint: 'u = 5 − 2x.'
	},
	{
		id: 'w11-c11',
		type: 'concept',
		front: 'How is the integration by parts formula derived?',
		back: 'Start from the product rule d/dx{uv} = u′v + uv′. Take u′v to the other side and integrate both sides with respect to x to get ∫ uv′ dx = uv − ∫ u′v dx.',
		hint: 'Integrate the product rule.'
	},
	{
		id: 'w11-c12',
		type: 'concept',
		front: 'State the integration by parts formula.',
		back: '∫ u dv = uv − ∫ v du (equivalently ∫ uv′ dx = uv − ∫ u′v dx). You choose one factor as u (to differentiate) and the other as dv (to integrate).',
		hint: 'uv minus the integral of v du.'
	},
	{
		id: 'w11-c13',
		type: 'concept',
		front: 'When using integration by parts, how do you choose u and dv?',
		back: 'Choose u as the part that becomes simpler when differentiated (e.g. a power of x, or ln x, or an inverse trig function), and dv as the part you can readily integrate. The goal is for ∫ v du to be easier than the original.',
		hint: 'u should simplify when differentiated.'
	},
	{
		id: 'w11-c14',
		type: 'concept',
		front: 'Evaluate ∫ x e^(5x) dx by parts.',
		back: 'Set u = x, v′ = e^(5x), so u′ = 1 and v = (1/5) e^(5x). Then ∫ x e^(5x) dx = (1/5) x e^(5x) − (1/5) ∫ e^(5x) dx = (1/5) x e^(5x) − (1/25) e^(5x) + C.',
		hint: 'Let u = x so it differentiates to 1.'
	},
	{
		id: 'w11-c15',
		type: 'concept',
		front: 'Evaluate ∫ x sin(2x) dx by parts.',
		back: 'Set u = x, v′ = sin(2x), so u′ = 1 and v = −(1/2) cos(2x). Then ∫ x sin(2x) dx = −(1/2) x cos(2x) + (1/2) ∫ cos(2x) dx = −(1/2) x cos(2x) + (1/4) sin(2x) + C.',
		hint: 'u = x, integrate sin(2x).'
	},
	{
		id: 'w11-c16',
		type: 'concept',
		front: 'How do you integrate ∫ cos⁻¹(x) dx (an inverse function) by parts?',
		back: 'Set u = cos⁻¹(x) and dv = dx, so v = x and du = −1/√(1 − x²) dx. Then ∫ cos⁻¹(x) dx = x cos⁻¹(x) − ∫ x·(−1/√(1 − x²)) dx = x cos⁻¹(x) − √(1 − x²) + C.',
		hint: 'Let dv = dx so v = x; differentiate the inverse function.'
	},
	{
		id: 'w11-c17',
		type: 'concept',
		front: 'Evaluate ∫₁² x² ln(x) dx by parts.',
		back: 'Set u = ln x, dv = x² dx, so du = (1/x) dx and v = x³/3. Then ∫ x² ln x dx = (x³/3) ln x − (1/3) ∫ x² dx = (x³/3) ln x − x³/9. Evaluated from 1 to 2 this gives (8/3) ln 2 − 7/9 ≈ 1.07061.',
		hint: 'Differentiate ln x, integrate x².'
	},
	{
		id: 'w11-c18',
		type: 'concept',
		front: 'State the arcsin standard form for integration.',
		back: '∫ 1/√(a² − x²) dx = arcsin(x/a) + C. For example ∫ 1/√(9 − x²) dx uses a = 3, giving arcsin(x/3) + C.',
		hint: 'Square root of a² minus x² → arcsin.'
	},
	{
		id: 'w11-c19',
		type: 'concept',
		front: 'State the arctan standard form for integration.',
		back: '∫ 1/(x² + a²) dx = (1/a) arctan(x/a) + C. The denominator is a sum of squares (no square root).',
		hint: 'Sum of squares → arctan.'
	},
	{
		id: 'w11-c20',
		type: 'concept',
		front: 'Evaluate ∫ 1/(1 + 4x²) dx.',
		back: 'Use u = 2x, du = 2 dx, so it becomes (1/2) ∫ 1/(1 + u²) du = (1/2) arctan(u) + C = (1/2) arctan(2x) + C. (Equivalently rewrite as the arctan form with a = 1/2.)',
		hint: 'Substitute u = 2x.'
	},
	{
		id: 'w11-c21',
		type: 'concept',
		front: 'Evaluate ∫ 1/(16 + 81x²) dx.',
		back: 'Factor as 16(1 + (9x/4)²) and let u = 9x/4 ⇒ du = (9/4) dx. This gives (1/36) arctan(9x/4) + C.',
		hint: 'Let u = 9x/4.'
	},
	{
		id: 'w11-c22',
		type: 'concept',
		front: 'How do you integrate ∫ 1/(x² + bx + c) dx when the denominator does not factor nicely?',
		back: 'Complete the square in the denominator to write it as (x + p)² + a², then use the substitution u = x + p (du = dx) and the arctan formula ∫ 1/(u² + a²) du = (1/a) arctan(u/a) + C.',
		hint: 'Complete the square, then arctan.'
	},
	{
		id: 'w11-c23',
		type: 'concept',
		front: 'Evaluate ∫ 1/(x² + 6x + 13) dx.',
		back: 'Complete the square: x² + 6x + 13 = (x + 3)² + 4. With u = x + 3 and a = 2 this is (1/2) arctan((x + 3)/2) + C.',
		hint: '(x + 3)² + 4.'
	},
	{
		id: 'w11-c24',
		type: 'concept',
		front: 'When the numerator is linear (e.g. ∫ (2x + 1)/(x² + 4x + 29) dx), what is the strategy?',
		back: 'Complete the square in the denominator: (x + 2)² + 25, substitute u = x + 2 (so x = u − 2). Then split the integral into a 2u/(u² + 25) piece (a log) and a constant/(u² + 25) piece (an arctan).',
		hint: 'Complete square, split into a log part and an arctan part.'
	},
	{
		id: 'w11-c25',
		type: 'concept',
		front: 'When can a rational function be integrated using partial fractions?',
		back: 'When it is a proper rational function (degree of numerator less than degree of denominator) and the denominator can be factored. The fraction is then decomposed into a sum of simpler fractions that are guaranteed to exist.',
		hint: 'Factor the denominator, decompose.'
	},
	{
		id: 'w11-c26',
		type: 'concept',
		front: 'How do you decompose a fraction with distinct linear factors, e.g. (x² + 3x − 14)/[(x − 1)(x − 2)(x + 3)]?',
		back: 'Write it as A/(x − 1) + B/(x − 2) + C/(x + 3). You are guaranteed to be able to find constants A, B and C so the right-hand side equals the left-hand side.',
		hint: 'One constant over each distinct linear factor.'
	},
	{
		id: 'w11-c27',
		type: 'concept',
		front: 'How do you handle a repeated linear factor, e.g. (x² + 5x + 7)/(x − 2)⁴?',
		back: 'Include a term for every power up to the repeat: A/(x − 2) + B/(x − 2)² + C/(x − 2)³ + D/(x − 2)⁴. You need terms of all powers up to the power in the original denominator.',
		hint: 'All powers from 1 up to the repeat.'
	},
	{
		id: 'w11-c28',
		type: 'concept',
		front: 'How do you decompose mixed factors like (x + 5)/[(x − 1)(x + 2)²]?',
		back: 'Treat each distinct factor once and each repeated factor with all its powers: A/(x − 1) + B/(x + 2) + C/(x + 2)². Again you need terms of all powers up to the power in the original denominator.',
		hint: 'Distinct factor once, repeated factor gets every power.'
	},
	{
		id: 'w11-c29',
		type: 'list',
		front: 'What numerators are used over quadratic (irreducible) factors in partial fractions?',
		back: [
			'Over a distinct quadratic factor use a linear numerator: (Cx + D)/(x² + bx + c)',
			'Over a repeated quadratic factor include all powers, each with a linear numerator: (Cx + D)/(x² + …) + (Ex + F)/(x² + …)²',
			'Over a linear factor use a constant numerator'
		],
		hint: 'Quadratic denominators get a linear (Cx + D) numerator.'
	},
	{
		id: 'w11-c30',
		type: 'concept',
		front: 'What is the cover-up rule for finding partial fraction constants?',
		back: 'To find the constant over a factor (x − k), cover up that factor in the original denominator and substitute x = k into what remains. E.g. for (4x + 3)/[(x − 1)(x + 6)], A = (4(1) + 3)/(1 + 6) = 1 and B = (4(−6) + 3)/(−6 − 1) = 3.',
		hint: 'Cover the factor, plug in its root.'
	},
	{
		id: 'w11-c31',
		type: 'concept',
		front: 'Evaluate ∫ (4x + 3)/(x² + 5x − 6) dx using partial fractions.',
		back: 'Factor: x² + 5x − 6 = (x − 1)(x + 6). The cover-up rule gives 1/(x − 1) + 3/(x + 6), so the integral is log|x − 1| + 3 log|x + 6| + C.',
		hint: 'Decompose into 1/(x−1) + 3/(x+6).'
	},
	{
		id: 'w11-c32',
		type: 'concept',
		front: 'In the cover-up rule for a repeated factor, what can it find and what can it not find?',
		back: 'Covering up the whole repeated term (e.g. all of (x − 1)²) and substituting gives the constant over the highest power and the constants over the distinct factors. It cannot directly give the middle constant (e.g. B over (x − 1)) — you find that by equating coefficients or substituting another value.',
		hint: 'It misses the lower-power constant on a repeated factor.'
	},
	{
		id: 'w11-c33',
		type: 'concept',
		front: 'A common mistake: what is ∫ 1/(x − 1)² dx? Why is it not a log?',
		back: 'It is −1/(x − 1) + C, not a logarithm. Remember ∫ x⁻¹ dx = log|x| + C but ∫ x⁻² dx = −x⁻¹ + C. Only the first power gives a log.',
		hint: 'Only x⁻¹ integrates to a log.'
	},
	{
		id: 'w11-c34',
		type: 'concept',
		front: 'Evaluate ∫ (5 − 3x)/[(x + 1)(x − 1)²] dx using partial fractions.',
		back: 'Decompose as 2/(x + 1) − 2/(x − 1) + 1/(x − 1)². Integrating gives 2 log|x + 1| − 2 log|x − 1| − 1/(x − 1) + C = 2 log|(x + 1)/(x − 1)| − 1/(x − 1) + C.',
		hint: 'The (x − 1)² term integrates to −1/(x − 1), not a log.'
	}
];

export const m11Quiz: QuizData[] = [
	{
		id: 'w11-q01',
		type: 'multiple-choice',
		question: 'Integration by substitution is the reverse of which differentiation rule?',
		options: ['The chain rule', 'The product rule', 'The quotient rule', 'The power rule'],
		correctIndex: 0,
		explanation:
			'∫ f(g(x)) g′(x) dx = F(g(x)) + C is obtained by inverting the chain rule d/dx{F(g(x))} = f(g(x)) g′(x).'
	},
	{
		id: 'w11-q02',
		type: 'multiple-choice',
		question: 'For ∫ cos⁴(3x) sin(3x) dx, which substitution clears the integrand?',
		options: ['u = cos(3x)', 'u = sin(3x)', 'u = 3x', 'u = cos⁴(3x)'],
		correctIndex: 0,
		explanation:
			'With u = cos(3x), du = −3 sin(3x) dx, so sin(3x) dx becomes the du factor. The integral reduces to −(1/3)∫u⁴ du = −(1/15) cos⁵(3x) + C (tutorial Q1 i).'
	},
	{
		id: 'w11-q03',
		type: 'fill-blank',
		question: 'Find ∫ 2/(5 − 2x)³ dx. (Use the form 1/(2(5 - 2x)^2) + C.)',
		answer: '1/(2(5 - 2x)^2) + C',
		acceptableAnswers: [
			'1/(2(5 - 2x)^2) + C',
			'1/(2(5-2x)^2)+C',
			'1/(2(5-2x)^2) + C',
			'1/(2(5 - 2x)²) + C',
			'1/(2(5-2x)²)+C'
		],
		explanation:
			'With u = 5 − 2x, dx = du/(−2): −∫ u⁻³ du = u⁻²/2 + C = 1/[2(5 − 2x)²] + C (tutorial Q1 ii).'
	},
	{
		id: 'w11-q04',
		type: 'multiple-choice',
		question: 'When evaluating a definite integral by substitution, the cleanest approach is to:',
		options: [
			'Convert the x-limits into the new u-limits and evaluate in u',
			'Always back-substitute to x before applying the limits',
			'Ignore the limits until the very end',
			'Differentiate the limits as well'
		],
		correctIndex: 0,
		explanation:
			'Changing the limits to the new variable avoids back-substitution. For ∫₁² x e^(4x²) dx with u = 4x², the limits become u = 4 and u = 16.'
	},
	{
		id: 'w11-q05',
		type: 'multiple-choice',
		question: 'Using u = 4x², what is ∫₁² x e^(4x²) dx?',
		options: ['(1/8)(e¹⁶ − e⁴)', '(1/4)(e¹⁶ − e⁴)', 'e¹⁶ − e⁴', '(1/8)(e⁴ − e¹⁶)'],
		correctIndex: 0,
		explanation:
			'du = 8x dx, so x dx = du/8. The integral is (1/8)∫ e^u du from u = 4 to u = 16 = (1/8)(e¹⁶ − e⁴).'
	},
	{
		id: 'w11-q06',
		type: 'multiple-choice',
		question: 'Which is the integration by parts formula?',
		options: [
			'∫ u dv = uv − ∫ v du',
			'∫ u dv = uv + ∫ v du',
			'∫ u dv = u′v − ∫ v′ du',
			'∫ u dv = (uv)′'
		],
		correctIndex: 0,
		explanation:
			'Integrating the product rule gives ∫ uv′ dx = uv − ∫ u′v dx, i.e. ∫ u dv = uv − ∫ v du.'
	},
	{
		id: 'w11-q07',
		type: 'multiple-choice',
		question: 'For ∫ x e^(5x) dx by parts, the best choice is:',
		options: [
			'u = x, dv = e^(5x) dx',
			'u = e^(5x), dv = x dx',
			'u = x e^(5x), dv = dx',
			'u = 5x, dv = e^x dx'
		],
		correctIndex: 0,
		explanation:
			'Choosing u = x makes u′ = 1 (it simplifies). Then v = (1/5)e^(5x), giving (1/5)x e^(5x) − (1/25)e^(5x) + C.'
	},
	{
		id: 'w11-q08',
		type: 'fill-blank',
		question: 'Find ∫ x sin(2x) dx. (Use the form -1/2 x cos(2x) + 1/4 sin(2x) + C.)',
		answer: '-1/2 x cos(2x) + 1/4 sin(2x) + C',
		acceptableAnswers: [
			'-1/2 x cos(2x) + 1/4 sin(2x) + C',
			'-(1/2)x cos(2x) + (1/4)sin(2x) + C',
			'-1/2xcos(2x)+1/4sin(2x)+C',
			'-1/2 x cos2x + 1/4 sin2x + C'
		],
		explanation:
			'u = x, v′ = sin(2x) ⇒ v = −(1/2)cos(2x). Then −(1/2)x cos(2x) + (1/2)∫cos(2x) dx = −(1/2)x cos(2x) + (1/4)sin(2x) + C.'
	},
	{
		id: 'w11-q09',
		type: 'fill-blank',
		question: 'Evaluate ∫₁² x² ln(x) dx to 5 decimal places. (Exact value is (8/3)ln2 − 7/9.)',
		answer: '1.07061',
		acceptableAnswers: ['1.07061', '1.0706', '(8/3)ln2 - 7/9', '8/3 ln2 - 7/9'],
		explanation:
			'By parts with u = ln x, v = x³/3: (x³/3)ln x − x³/9 from 1 to 2 = (8/3)ln 2 − 7/9 ≈ 1.07061 (tutorial Q3 ii).'
	},
	{
		id: 'w11-q10',
		type: 'multiple-choice',
		question: 'Which standard form does ∫ 1/√(9 − x²) dx use?',
		options: [
			'arcsin(x/3) + C',
			'(1/3)arctan(x/3) + C',
			'arctan(x/3) + C',
			'log|9 − x²| + C'
		],
		correctIndex: 0,
		explanation:
			'∫ 1/√(a² − x²) dx = arcsin(x/a) + C. With a = 3 this is arcsin(x/3) + C.'
	},
	{
		id: 'w11-q11',
		type: 'fill-blank',
		question: 'Find ∫ 1/(1 + 4x²) dx. (Use the form 1/2 arctan(2x) + C.)',
		answer: '1/2 arctan(2x) + C',
		acceptableAnswers: [
			'1/2 arctan(2x) + C',
			'(1/2)arctan(2x) + C',
			'1/2arctan(2x)+C',
			'1/2 tan^-1(2x) + C',
			'(1/2)tan⁻¹(2x) + C'
		],
		explanation:
			'With u = 2x, du = 2 dx: (1/2)∫ 1/(1 + u²) du = (1/2)arctan(u) + C = (1/2)arctan(2x) + C.'
	},
	{
		id: 'w11-q12',
		type: 'multiple-choice',
		question: 'To integrate ∫ 1/(x² + 6x + 13) dx, the first step is to rewrite the denominator as:',
		options: ['(x + 3)² + 4', '(x + 3)² − 4', '(x + 6)² + 13', '(x − 3)² + 4'],
		correctIndex: 0,
		explanation:
			'Complete the square: x² + 6x + 13 = (x² + 6x + 9) + 4 = (x + 3)² + 4. Then with a = 2 the answer is (1/2)arctan((x + 3)/2) + C.'
	},
	{
		id: 'w11-q13',
		type: 'multiple-choice',
		question: 'In the partial fraction decomposition of (x + 5)/[(x − 1)(x + 2)²], which terms are needed?',
		options: [
			'A/(x − 1) + B/(x + 2) + C/(x + 2)²',
			'A/(x − 1) + B/(x + 2)²',
			'A/(x − 1) + (Bx + C)/(x + 2)²',
			'A/(x − 1) + B/(x + 2)'
		],
		correctIndex: 0,
		explanation:
			'A repeated linear factor needs terms of all powers up to the repeat, so (x + 2)² contributes both B/(x + 2) and C/(x + 2)².'
	},
	{
		id: 'w11-q14',
		type: 'fill-blank',
		question: 'Using the cover-up rule on (4x + 3)/[(x − 1)(x + 6)], find the constant A over (x − 1).',
		answer: '1',
		acceptableAnswers: ['1', 'A = 1'],
		explanation:
			'Cover up (x − 1) and set x = 1: A = (4(1) + 3)/(1 + 6) = 7/7 = 1. (Similarly B = 3, giving log|x − 1| + 3 log|x + 6| + C.)'
	}
];
