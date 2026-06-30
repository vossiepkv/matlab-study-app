import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m5Meta: ModuleMeta = {
	num: 5,
	title: 'Numerical Integration',
	description:
		'Introduces numerical (approximate) integration for definite integrals that cannot be evaluated using elementary functions. Covers the trapezoidal rule and Simpson’s 1/3 rule: dividing [a, b] into equal strips of width h, building a table of function values and weights, summing, and comparing the estimate with the exact answer, including how accuracy improves with more strips.',
	topics: [
		'Why numerical integration is needed',
		'Strips, step size h and end points',
		'Trapezoidal rule and trapezium areas',
		'Trapezoidal weights (1, 2, 2, …, 2, 1)',
		'Simpson’s 1/3 rule and fitted parabolas',
		'Simpson’s weights (1, 4, 2, 4, …, 4, 1)',
		'The table method (x, f(x), w, w·f(x))',
		'Accuracy, number of strips and comparison with the exact value'
	]
};

export const m5Cards: CardData[] = [
	{
		id: 'w5-c01',
		type: 'concept',
		front: 'Why do we need numerical (approximate) integration?',
		back: 'Some definite integrals, such as ∫₀¹ √(x³ + 1) dx and ∫₀¹ e^(−x²) dx, exist (have a finite value) but cannot be expressed in terms of elementary functions. To evaluate them we must use approximate (numerical) integration.',
		hint: 'No elementary antiderivative exists.'
	},
	{
		id: 'w5-c02',
		type: 'list',
		front: 'What are elementary functions (the kind a numerical integral may NOT reduce to)?',
		back: ['Powers xⁿ', 'Exponentials eˣ', 'Trigonometric functions such as sin x', 'Logarithms such as log x'],
		hint: 'The standard functions you can integrate by hand.'
	},
	{
		id: 'w5-c03',
		type: 'list',
		front: 'Which two numerical methods are studied in this module for evaluating ∫ₐᵇ f(x) dx?',
		back: ['The trapezoidal rule', 'Simpson’s 1/3 rule'],
		hint: 'Trapeziums and parabolas.'
	},
	{
		id: 'w5-c04',
		type: 'concept',
		front: 'What is the basic idea of the trapezoidal rule?',
		back: 'Divide the interval [a, b] into n equal subintervals (strips). On each strip, f(x) is approximated by a straight line that agrees with f(x) at both endpoints, so each strip is shaped like a trapezium. The trapezium areas approximate the area under the curve.',
		hint: 'Join the points with straight lines.'
	},
	{
		id: 'w5-c05',
		type: 'concept',
		front: 'For both rules, how is the strip width (step size) h calculated?',
		back: 'h = (b − a) / n, where n is the number of equal strips and [a, b] is the interval of integration.',
		hint: 'Total width divided by number of strips.'
	},
	{
		id: 'w5-c06',
		type: 'concept',
		front: 'What are the end points x₀, x₁, …, xₙ of the strips?',
		back: 'They are equally spaced points across [a, b]: xᵢ = a + i·h for i = 0, 1, 2, …, n, with x₀ = a and xₙ = b.',
		hint: 'Start at a and step up by h.'
	},
	{
		id: 'w5-c07',
		type: 'concept',
		front: 'How many end points and how many strips are there if n = 4?',
		back: 'There are n = 4 strips but n + 1 = 5 end points: x₀, x₁, x₂, x₃, x₄. Each strip needs a value at both ends, so there is always one more point than strips.',
		hint: 'Points = strips + 1.'
	},
	{
		id: 'w5-c08',
		type: 'concept',
		front: 'What do the symbols yᵢ mean in these rules?',
		back: 'yᵢ is the function value at the i-th end point: yᵢ = f(xᵢ). So y₀ = f(x₀) = f(a) and yₙ = f(xₙ) = f(b).',
		hint: 'The height of the curve at each x.'
	},
	{
		id: 'w5-c09',
		type: 'concept',
		front: 'What is the area of a single trapezium strip in the trapezoidal rule?',
		back: 'Area ≈ base · average height = h · (yᵢ₋₁ + yᵢ)/2 = (h/2)(yᵢ₋₁ + yᵢ), where yᵢ₋₁ and yᵢ are the heights at the two ends of the strip.',
		hint: 'Base h times the mean of the two heights.'
	},
	{
		id: 'w5-c10',
		type: 'concept',
		front: 'State the full trapezoidal rule formula Tₙ.',
		back: 'Tₙ = (h/2)(y₀ + 2y₁ + 2y₂ + … + 2yₙ₋₂ + 2yₙ₋₁ + yₙ) = (h/2)(y₀ + 2(y₁ + y₂ + … + yₙ₋₁) + yₙ).',
		hint: 'First and last counted once, all interior doubled.'
	},
	{
		id: 'w5-c11',
		type: 'list',
		front: 'What are the weights (coefficients) in the trapezoidal rule?',
		back: ['The first value y₀ has weight 1', 'Every interior value has weight 2', 'The last value yₙ has weight 1'],
		hint: '1, 2, 2, …, 2, 1.'
	},
	{
		id: 'w5-c12',
		type: 'concept',
		front: 'What is the clearest way to organise a trapezoidal or Simpson’s calculation?',
		back: 'Use a table with four columns: x, f(x), w (the weight), and w·f(x). The Σ of the w·f(x) column gives the bracketed sum, which is then multiplied by h/2 (trapezoidal) or h/3 (Simpson’s).',
		hint: 'x, f(x), w, w·f(x).'
	},
	{
		id: 'w5-c13',
		type: 'concept',
		front: 'In the table method, what does the Σ at the bottom of the w·f(x) column represent?',
		back: 'It is the sum of all the weight × function-value terms — exactly the quantity in the brackets of Tₙ or Sₙ. You then multiply Σ by h/2 (trapezoidal) or h/3 (Simpson’s).',
		hint: 'It is the whole bracket, ready to scale.'
	},
	{
		id: 'w5-c14',
		type: 'concept',
		front: 'How does the number of strips n affect the trapezoidal approximation?',
		back: 'The greater the value of n, the finer (more accurate) the approximation, because the straight-line strips follow the curve more closely as they get narrower.',
		hint: 'More, thinner strips → better estimate.'
	},
	{
		id: 'w5-c15',
		type: 'concept',
		front: 'Worked example: use the trapezoidal rule with n = 4 to estimate ∫₁² x³ dx. What is h?',
		back: 'h = (2 − 1)/4 = 1/4, so each strip is of width 0.25. The end points are x = 1.00, 1.25, 1.50, 1.75, 2.00.',
		hint: '(b − a)/n.'
	},
	{
		id: 'w5-c16',
		type: 'concept',
		front: 'For ∫₁² x³ dx with n = 4, the table gives Σ(w·f(x)) = 30.375. What is the estimate T₄?',
		back: 'T₄ = (h/2)·Σ = (0.25/2)(30.375) = 30.375/8 = 3.797. The exact value is ∫₁² x³ dx = [x⁴/4]₁² = 4 − 1/4 = 3.75, so the estimate compares reasonably well.',
		hint: 'Multiply the column sum by h/2.'
	},
	{
		id: 'w5-c17',
		type: 'concept',
		front: 'What is the basic idea of Simpson’s 1/3 rule?',
		back: 'Instead of straight lines, Simpson’s rule fits a parabola through the end points of each PAIR of adjacent strips, e.g. (x₀, y₀), (x₁, y₁), (x₂, y₂). The area under each parabola approximates the area under f(x).',
		hint: 'Parabolas over pairs of strips.'
	},
	{
		id: 'w5-c18',
		type: 'concept',
		front: 'Why must n be even for Simpson’s 1/3 rule?',
		back: 'Simpson’s rule fits a parabola over each PAIR of adjacent strips, so the strips must group exactly into pairs. This requires an even number of strips n.',
		hint: 'Strips are taken two at a time.'
	},
	{
		id: 'w5-c19',
		type: 'concept',
		front: 'What is the approximate area under the parabola for one pair of adjacent strips in Simpson’s rule?',
		back: 'Area ≈ (h/3)(yᵢ₋₁ + 4yᵢ + yᵢ₊₁) — the two outer heights weighted 1 and the middle height weighted 4.',
		hint: 'Outer + 4·middle + outer, all times h/3.'
	},
	{
		id: 'w5-c20',
		type: 'concept',
		front: 'State the full Simpson’s 1/3 rule formula Sₙ.',
		back: 'Sₙ = (h/3)(y₀ + 4y₁ + 2y₂ + 4y₃ + 2y₄ + … + 2yₙ₋₂ + 4yₙ₋₁ + yₙ) = (h/3)(y₀ + 4(y₁ + y₃ + … + yₙ₋₁) + 2(y₂ + y₄ + … + yₙ₋₂) + yₙ).',
		hint: 'Ends 1, odd indices 4, even interior 2.'
	},
	{
		id: 'w5-c21',
		type: 'list',
		front: 'What are the weights in Simpson’s 1/3 rule?',
		back: [
			'The first value y₀ has weight 1',
			'The last value yₙ has weight 1',
			'Interior values at ODD indices (y₁, y₃, …) have weight 4',
			'Interior values at EVEN indices (y₂, y₄, …) have weight 2'
		],
		hint: '1, 4, 2, 4, 2, …, 4, 1.'
	},
	{
		id: 'w5-c22',
		type: 'concept',
		front: 'In Simpson’s rule, how do the interior weights pattern across the table?',
		back: 'The interior weights alternate between 4 and 2, starting and finishing with 4. The first and last weights are always 1. So for n = 4 the weights are 1, 4, 2, 4, 1.',
		hint: 'Start and end the interior run with a 4.'
	},
	{
		id: 'w5-c23',
		type: 'concept',
		front: 'How does the scaling factor differ between the two rules?',
		back: 'The trapezoidal rule multiplies the weighted sum by h/2; Simpson’s 1/3 rule multiplies by h/3. (This is the source of the name “1/3 rule”.)',
		hint: 'h/2 versus h/3.'
	},
	{
		id: 'w5-c24',
		type: 'concept',
		front: 'For the same number of strips, which rule is generally more accurate?',
		back: 'Simpson’s rule is expected to outperform the trapezoidal rule for the same number of strips, because parabolas follow a curve better than straight lines.',
		hint: 'Parabolas beat straight lines.'
	},
	{
		id: 'w5-c25',
		type: 'concept',
		front: 'Worked example: use Simpson’s rule with n = 4 to estimate ∫₁² x³ dx. Σ(w·f(x)) = 45. What is S₄?',
		back: 'S₄ = (h/3)·Σ = (0.25/3)(45) = 45/12 = 3.750. This equals the exact answer exactly — Simpson’s rule integrates every cubic exactly, for any value of n.',
		hint: 'Multiply the column sum by h/3.'
	},
	{
		id: 'w5-c26',
		type: 'concept',
		front: 'What is special about Simpson’s rule applied to a cubic?',
		back: 'Even though Simpson’s rule fits parabolas, it integrates every cubic EXACTLY, for any value of n. (That is why the n = 4 estimate of ∫₁² x³ dx gives exactly 3.75.)',
		hint: 'Parabolas, yet cubics come out exact.'
	},
	{
		id: 'w5-c27',
		type: 'concept',
		front: 'After computing an estimate, what comparison is usually made?',
		back: 'Compare the numerical estimate (Tₙ or Sₙ) with the exact value of the integral (when it can be found analytically) to see how close the approximation is and judge the method’s accuracy.',
		hint: 'Estimate versus exact answer.'
	},
	{
		id: 'w5-c28',
		type: 'concept',
		front: 'Worked example: ∫₁² (1/x) dx by the trapezoidal rule with 4 strips. What is h and the result?',
		back: 'h = (2 − 1)/4 = 1/4. With weights 1, 2, 2, 2, 1 on f(x) = 1/x at x = 1, 1.25, 1.5, 1.75, 2, the trapezoidal estimate is T ≈ 0.697024 (the exact value is ln 2 ≈ 0.693147).',
		hint: 'f(x) = 1/x, exact answer ln 2.'
	},
	{
		id: 'w5-c29',
		type: 'concept',
		front: 'Worked example: ∫₀⁴ x·e^(−x²) dx by Simpson’s rule with 4 strips. What is h and the result?',
		back: 'h = (4 − 0)/4 = 1, with weights 1, 4, 2, 4, 1 at x = 0, 1, 2, 3, 4. The estimate is S ≈ 0.515421.',
		hint: 'Integer x values, h = 1.'
	},
	{
		id: 'w5-c30',
		type: 'list',
		front: 'List the general steps to apply either numerical integration rule.',
		back: [
			'Compute the step size h = (b − a)/n',
			'List the end points x₀, x₁, …, xₙ where xᵢ = a + i·h',
			'Evaluate f(x) at every end point',
			'Assign the correct weights (trapezoidal: 1, 2, …, 2, 1; Simpson’s: 1, 4, 2, …, 4, 1)',
			'Sum the w·f(x) column to get Σ',
			'Multiply: Tₙ = (h/2)Σ or Sₙ = (h/3)Σ'
		],
		hint: 'h → points → f(x) → weights → sum → scale.'
	},
	{
		id: 'w5-c31',
		type: 'concept',
		front: 'A real-world use: how can these rules find the distance covered by a rocket?',
		back: 'If a body’s velocity is given as v(t), the distance travelled between t = a and t = b is the definite integral ∫ₐᵇ v(t) dt. When this integral has no simple antiderivative, Simpson’s or the trapezoidal rule estimates it from sampled velocity values.',
		hint: 'Distance is the integral of velocity.'
	}
];

export const m5Quiz: QuizData[] = [
	{
		id: 'w5-q01',
		type: 'multiple-choice',
		question: 'Why might we need numerical integration for an integral such as ∫₀¹ e^(−x²) dx?',
		options: [
			'The integral does not exist',
			'It exists but cannot be expressed using elementary functions',
			'The interval is infinite',
			'The function is negative'
		],
		correctIndex: 1,
		explanation:
			'Integrals like ∫₀¹ e^(−x²) dx have a finite value but cannot be written in terms of elementary functions (xⁿ, eˣ, sin x, log x), so they must be evaluated numerically.'
	},
	{
		id: 'w5-q02',
		type: 'multiple-choice',
		question: 'For the integral ∫₁³ f(x) dx using 4 strips, what is the step size h?',
		options: ['0.25', '0.5', '1', '2'],
		correctIndex: 1,
		explanation: 'h = (b − a)/n = (3 − 1)/4 = 2/4 = 0.5.'
	},
	{
		id: 'w5-q03',
		type: 'multiple-choice',
		question: 'If an interval is divided into n = 4 strips, how many end points (and therefore function values) are needed?',
		options: ['4', '5', '8', '3'],
		correctIndex: 1,
		explanation:
			'There is always one more end point than strips: n + 1 = 5 points (x₀, x₁, x₂, x₃, x₄), since each strip needs a value at both ends.'
	},
	{
		id: 'w5-q04',
		type: 'multiple-choice',
		question: 'In the trapezoidal rule Tₙ, what weight is given to the interior values y₁, y₂, …, yₙ₋₁?',
		options: ['1', '2', '3', '4'],
		correctIndex: 1,
		explanation:
			'Tₙ = (h/2)(y₀ + 2y₁ + 2y₂ + … + 2yₙ₋₁ + yₙ): the first and last values have weight 1 and every interior value has weight 2.'
	},
	{
		id: 'w5-q05',
		type: 'fill-blank',
		question: 'The trapezoidal rule multiplies the weighted sum by h divided by what number?',
		answer: '2',
		acceptableAnswers: ['2', 'two'],
		explanation: 'The trapezoidal rule is Tₙ = (h/2)·Σ, so the weighted sum is multiplied by h/2.'
	},
	{
		id: 'w5-q06',
		type: 'multiple-choice',
		question: 'Why must the number of strips n be EVEN when using Simpson’s 1/3 rule?',
		options: [
			'To make h a whole number',
			'Because a parabola is fitted over each pair of adjacent strips',
			'So the first and last weights are 1',
			'To make the integral exact'
		],
		correctIndex: 1,
		explanation:
			'Simpson’s rule fits a parabola through the end points of each PAIR of adjacent strips, so the strips must group into pairs, which requires an even n.'
	},
	{
		id: 'w5-q07',
		type: 'multiple-choice',
		question: 'What is the correct sequence of weights for Simpson’s 1/3 rule with n = 4 strips?',
		options: ['1, 2, 2, 2, 1', '1, 4, 4, 4, 1', '1, 4, 2, 4, 1', '2, 4, 2, 4, 2'],
		correctIndex: 2,
		explanation:
			'Ends have weight 1; interior weights alternate 4 and 2 starting and finishing with 4. For n = 4: 1, 4, 2, 4, 1.'
	},
	{
		id: 'w5-q08',
		type: 'fill-blank',
		question: 'Simpson’s 1/3 rule multiplies the weighted sum by h divided by what number?',
		answer: '3',
		acceptableAnswers: ['3', 'three'],
		explanation: 'Simpson’s 1/3 rule is Sₙ = (h/3)·Σ — hence the name “1/3 rule”. The trapezoidal rule uses h/2 instead.'
	},
	{
		id: 'w5-q09',
		type: 'multiple-choice',
		question: 'For ∫₁² x³ dx with n = 4, the trapezoidal table gives Σ(w·f(x)) = 30.375 and h = 0.25. What is T₄?',
		options: ['3.750', '3.797', '7.594', '30.375'],
		correctIndex: 1,
		explanation:
			'T₄ = (h/2)·Σ = (0.25/2)(30.375) = 30.375/8 = 3.797, which compares reasonably with the exact value 3.75.'
	},
	{
		id: 'w5-q10',
		type: 'multiple-choice',
		question: 'For ∫₁² x³ dx with n = 4, the Simpson’s table gives Σ(w·f(x)) = 45 and h = 0.25. What is S₄?',
		options: ['3.750', '3.797', '15', '45'],
		correctIndex: 0,
		explanation:
			'S₄ = (h/3)·Σ = (0.25/3)(45) = 45/12 = 3.750 — exactly the true value, because Simpson’s rule integrates every cubic exactly.'
	},
	{
		id: 'w5-q11',
		type: 'multiple-choice',
		question: 'For the same number of strips, how does Simpson’s rule generally compare with the trapezoidal rule?',
		options: [
			'It is less accurate',
			'It is equally accurate',
			'It is more accurate',
			'It only works for straight lines'
		],
		correctIndex: 2,
		explanation:
			'Simpson’s rule fits parabolas rather than straight lines, so it is expected to outperform (be more accurate than) the trapezoidal rule for the same number of strips.'
	},
	{
		id: 'w5-q12',
		type: 'fill-blank',
		question: 'In the table method, multiplying h/2 (or h/3) by the Σ of which column gives the final estimate?',
		answer: 'w·f(x)',
		acceptableAnswers: ['w·f(x)', 'wf(x)', 'w f(x)', 'w*f(x)', 'weight times f(x)', 'wf'],
		explanation:
			'The Σ of the w·f(x) column equals the bracketed weighted sum; multiplying it by h/2 (trapezoidal) or h/3 (Simpson’s) gives the estimate.'
	},
	{
		id: 'w5-q13',
		type: 'multiple-choice',
		question: 'Using the trapezoidal rule with 4 strips, ∫₁² (1/x) dx ≈ 0.697024. What is the exact value it approximates?',
		options: ['ln 2 ≈ 0.6931', '0.5', '1', 'e ≈ 2.7183'],
		correctIndex: 0,
		explanation:
			'∫₁² (1/x) dx = [ln x]₁² = ln 2 − ln 1 = ln 2 ≈ 0.6931, close to the trapezoidal estimate 0.697024.'
	},
	{
		id: 'w5-q14',
		type: 'multiple-choice',
		question: 'How does increasing the number of strips n affect a numerical estimate?',
		options: [
			'It makes the approximation finer (more accurate)',
			'It makes the approximation worse',
			'It has no effect',
			'It changes the exact value of the integral'
		],
		correctIndex: 0,
		explanation:
			'The greater the value of n, the finer (more accurate) the approximation, because narrower strips follow the curve more closely.'
	}
];
