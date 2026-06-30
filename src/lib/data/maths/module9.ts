import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m9Meta: ModuleMeta = {
	num: 9,
	title: 'Differentiation (Part 4)',
	description:
		'Applications of differentiation: linear approximation, errors and small changes, and using the derivative to estimate percentage changes in physical quantities. Then Newton’s method — an iterative numerical scheme for finding approximate solutions of equations f(x) = 0, including how to set it up, when it converges, and when a poor initial guess can fail.',
	topics: [
		'Exact change Δy = f(x + Δx) − f(x)',
		'Linear approximation formula Δy ≈ f′(x) Δx',
		'Errors and small changes',
		'Approximate percentage change',
		'Newton’s method as a numerical root finder',
		'The iteration formula xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)',
		'Choosing a good initial guess x₀',
		'Convergence and failure of Newton’s method'
	]
};

export const m9Cards: CardData[] = [
	{
		id: 'w9-c01',
		type: 'concept',
		front: 'If y = f(x) and x changes by an amount Δx, what is the EXACT change in y?',
		back: 'Δy = f(x + Δx) − f(x). This is the exact change — the difference between the new value and the old value of y.',
		hint: 'New value minus old value.'
	},
	{
		id: 'w9-c02',
		type: 'concept',
		front: 'Why do we often want an approximation to Δy instead of the exact expression?',
		back: 'The exact expression f(x + Δx) − f(x) can be awkward to evaluate. For small Δx it is more convenient and useful to have a quick approximation using the derivative.'
	},
	{
		id: 'w9-c03',
		type: 'concept',
		front: 'How does the first principles definition of the derivative lead to the linear approximation?',
		back: 'First principles: f′(x) = lim(Δx→0) [f(x + Δx) − f(x)] / Δx. For small Δx the limit can be dropped, so f′(x) ≈ [f(x + Δx) − f(x)] / Δx, i.e. f′(x) ≈ Δy / Δx.',
		hint: 'Drop the limit for small Δx.'
	},
	{
		id: 'w9-c04',
		type: 'concept',
		front: 'State the linear approximation formula.',
		back: 'For small values of Δx,  Δy ≈ f′(x) Δx. The change in y is approximately the derivative times the change in x.',
		hint: 'Δy ≈ f′(x) Δx'
	},
	{
		id: 'w9-c05',
		type: 'concept',
		front: 'In the linear approximation, what role does the derivative f′(x) play geometrically?',
		back: 'f′(x) is the slope of the tangent at the point. The approximation replaces the actual change in the curve with the change along the tangent line over the small interval Δx.'
	},
	{
		id: 'w9-c06',
		type: 'list',
		front: 'List the steps to use calculus to find an approximate change in a quantity y = f(x).',
		back: [
			'Identify the function relating the two variables, y = f(x)',
			'Differentiate to find f′(x)',
			'Express the given change Δx (often a percentage of x)',
			'Apply Δy ≈ f′(x) Δx',
			'If a percentage change is wanted, write Δy as a fraction of the original y'
		]
	},
	{
		id: 'w9-c07',
		type: 'concept',
		front: 'A change is given as a percentage, e.g. “x increases by 10%”. How do you write Δx?',
		back: 'A p% change means Δx = (p/100) x. For example a 10% increase gives Δx = 0.1x, a 3% decrease gives Δx = −0.03x.',
		hint: 'Percentage of the original value, with a sign for the direction.'
	},
	{
		id: 'w9-c08',
		type: 'concept',
		front: 'Stopping distance is s = v² / (2gμ) with g, μ constant. If v increases by 10%, by roughly what percentage does s change?',
		back: 's increases by approximately 20%. s′(v) = v/(gμ), Δv = 0.1v, so Δs ≈ (v/gμ)(0.1v) = 0.2(v²/2gμ) = 0.2s.',
		hint: 'Δs ≈ s′(v) Δv.'
	},
	{
		id: 'w9-c09',
		type: 'concept',
		front: 'For N = 1000 / √p (book sales vs cover price), if p increases by 5%, by roughly what percentage does N change?',
		back: 'N decreases by approximately 2.5%. N′(p) = −500p^(−3/2), Δp = 0.05p, so ΔN ≈ (−500p^(−3/2))(0.05p) = −0.025(1000p^(−1/2)) = −0.025N.',
		hint: 'Rewrite the answer as a multiple of N.'
	},
	{
		id: 'w9-c10',
		type: 'concept',
		front: 'Why does a square-root relationship like d = 8√(h/5) HALVE the percentage change?',
		back: 'For y = k√x = kx^(1/2), y′ = (k/2)x^(−1/2), so Δy ≈ (k/2)x^(−1/2)Δx. Writing Δx as a fraction of x gives Δy ≈ (1/2)(Δx/x)y — the percentage change in y is half that of x. So a 6% change in h gives about a 3% change in d.'
	},
	{
		id: 'w9-c11',
		type: 'concept',
		front: 'Cylinder volume V = πr²h with h fixed. How do you approximate the increase in V when r increases slightly?',
		back: 'Treat V as a function of r: dV/dr = 2πrh. Then ΔV ≈ (2πrh) Δr. For r = 4, h = 10, Δr = 0.02: ΔV ≈ 2π(4)(10)(0.02) = 1.6π cm³.',
		hint: 'Differentiate with respect to the changing variable only.'
	},
	{
		id: 'w9-c12',
		type: 'concept',
		front: 'When estimating a small change with calculus, what does the sign of Δx (and hence Δy) tell you?',
		back: 'A positive Δx means the quantity increases; negative means it decreases. The sign carries through f′(x) Δx, so a negative result means y decreases by that approximate amount.'
	},
	{
		id: 'w9-c13',
		type: 'concept',
		front: 'What kind of equations CANNOT generally be solved by elementary algebraic methods?',
		back: 'Most equations. There is no formula for general polynomials of degree greater than 4 (e.g. x⁵ + 3x² + 1 = 0), and transcendental equations like x − cos x = 0 have no elementary exact solution.',
		hint: 'Degree > 4, and transcendental equations.'
	},
	{
		id: 'w9-c14',
		type: 'concept',
		front: 'What is Newton’s method used for?',
		back: 'It is a numerical method for finding an approximation to x*, the exact solution of an equation of the form f(x) = 0. It can reach whatever level of accuracy is required, usually quickly.',
		hint: 'Approximate root of f(x) = 0.'
	},
	{
		id: 'w9-c15',
		type: 'concept',
		front: 'What does the exact solution x* represent graphically?',
		back: 'x* is the point at which the curve y = f(x) cuts the x-axis, i.e. where y = 0.'
	},
	{
		id: 'w9-c16',
		type: 'concept',
		front: 'What kind of scheme is Newton’s method?',
		back: 'An iterative scheme: an initial guess x₀ is made for x* and improved step-by-step (x₁, x₂, x₃, …) until it is arbitrarily close to x*.',
		hint: 'Start with a guess, refine repeatedly.'
	},
	{
		id: 'w9-c17',
		type: 'concept',
		front: 'What is the geometric idea behind generating each new Newton iterate?',
		back: 'Take the tangent to the curve at the current point (xₙ, f(xₙ)) and extend it down to the x-axis. The x-intercept of that tangent is the next iterate xₙ₊₁, which should be closer to x* than xₙ.',
		hint: 'Follow the tangent line to the x-axis.'
	},
	{
		id: 'w9-c18',
		type: 'concept',
		front: 'State the computational (iteration) formula for Newton’s method.',
		back: 'xₙ₊₁ = xₙ − f(xₙ) / f′(xₙ),  for n = 0, 1, 2, …, given an initial guess x₀.',
		hint: 'Subtract f over f-prime from the current iterate.'
	},
	{
		id: 'w9-c19',
		type: 'concept',
		front: 'How is the Newton formula derived from the slope at (x₀, f(x₀))?',
		back: 'The slope is f′(x₀) = rise/run = f(x₀) / (x₀ − x₁). Rearranging gives x₀ − x₁ = f(x₀)/f′(x₀), so x₁ = x₀ − f(x₀)/f′(x₀). Every later iterate follows the same pattern.'
	},
	{
		id: 'w9-c20',
		type: 'list',
		front: 'List the steps to apply Newton’s method to solve an equation.',
		back: [
			'Rewrite the equation in the form f(x) = 0',
			'Differentiate to find f′(x)',
			'Choose an initial guess x₀ (often from a sketch)',
			'Apply xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ) repeatedly',
			'Stop when successive iterates agree to the required accuracy'
		]
	},
	{
		id: 'w9-c21',
		type: 'concept',
		front: 'Before applying Newton’s method, why do we sketch the curve or the two curves?',
		back: 'A sketch shows roughly where the solution (or the intersection of two curves) lies, which gives a sensible initial guess x₀ near the root.',
		hint: 'It tells you where to start.'
	},
	{
		id: 'w9-c22',
		type: 'concept',
		front: 'To solve x = cos x with Newton’s method, what are f(x) and f′(x)?',
		back: 'Rewrite as f(x) = x − cos x = 0. Then f′(x) = 1 + sin x.',
		hint: 'Move everything to one side, then differentiate.'
	},
	{
		id: 'w9-c23',
		type: 'concept',
		front: 'For x = cos x with x₀ = 0.8, what does the first iterate x₁ work out to be?',
		back: 'x₁ = 0.8 − (0.8 − cos 0.8) / (1 + sin 0.8) ≈ 0.7398533.',
		hint: 'Plug x₀ = 0.8 into the formula.'
	},
	{
		id: 'w9-c24',
		type: 'concept',
		front: 'After two iterations of x = cos x (x₀ = 0.8), what is observed about the accuracy?',
		back: 'x₂ ≈ 0.739085. There is very little change between x₁ and x₂ — the answer is already correct to 6 decimal places after only two steps.'
	},
	{
		id: 'w9-c25',
		type: 'concept',
		front: 'How fast does Newton’s method typically converge when it is working well?',
		back: 'Very fast — the number of correct digits roughly doubles from step to step (quadratic convergence). Just a few iterations usually give high accuracy.',
		hint: 'The accurate digits roughly double each step.'
	},
	{
		id: 'w9-c26',
		type: 'concept',
		front: 'Solving x⁵ + 3x² + 1 = 0 with x₀ = −1 produced x₁ = 2 (a “disaster”). What went wrong?',
		back: 'The next iterate landed completely outside the interval [−2, 0] known to contain the solution. A poor initial guess can make Newton’s method jump away from the root, so a better guess (e.g. x₀ = −2) is needed.',
		hint: 'A bad x₀ can throw the iterate far from the root.'
	},
	{
		id: 'w9-c27',
		type: 'concept',
		front: 'How was the interval containing the root of f(x) = x⁵ + 3x² + 1 found?',
		back: 'By evaluating the function at the ends: f(0) = 1 and f(−2) = −19. Since f is continuous and changes sign between −2 and 0, it must have a zero in [−2, 0].',
		hint: 'Sign change of a continuous function.'
	},
	{
		id: 'w9-c28',
		type: 'concept',
		front: 'With the better guess x₀ = −2 for x⁵ + 3x² + 1 = 0, what is x₁? (f′(x) = 5x⁴ + 6x.)',
		back: 'x₁ = −2 − (−19)/68 ≈ −1.720588, which now lies inside the interval [−2, 0] containing the solution.',
		hint: 'f(−2) = −19, f′(−2) = 68.'
	},
	{
		id: 'w9-c29',
		type: 'concept',
		front: 'To solve 1 + 2cos x = eˣ with Newton’s method, what are f(x) and f′(x)?',
		back: 'Rewrite as f(x) = 1 + 2cos x − eˣ = 0. Then f′(x) = −2 sin x − eˣ.',
		hint: 'Bring eˣ across, then differentiate.'
	},
	{
		id: 'w9-c30',
		type: 'concept',
		front: 'To solve ln(x) = sin(x) with Newton’s method, what are f(x) and f′(x)?',
		back: 'Rewrite as f(x) = ln(x) − sin(x) = 0. Then f′(x) = 1/x − cos(x).',
		hint: 'Difference of the two sides, then differentiate.'
	},
	{
		id: 'w9-c31',
		type: 'concept',
		front: 'Why must an equation be written as f(x) = 0 before Newton’s method is applied?',
		back: 'The method finds where f(x) crosses the x-axis. The iteration formula uses f(xₙ) and f′(xₙ), so all terms must be collected on one side so that the root corresponds to f(x) = 0.'
	}
];

export const m9Quiz: QuizData[] = [
	{
		id: 'w9-q01',
		type: 'multiple-choice',
		question: 'What is the linear approximation formula for a small change Δx?',
		options: ['Δy ≈ f′(x) Δx', 'Δy ≈ f(x) Δx', 'Δy = f(x + Δx) + f(x)', 'Δy ≈ Δx / f′(x)'],
		correctIndex: 0,
		explanation:
			'For small Δx, the first principles definition gives f′(x) ≈ Δy/Δx, so Δy ≈ f′(x) Δx.'
	},
	{
		id: 'w9-q02',
		type: 'multiple-choice',
		question: 'For y = f(x), what is the EXACT change in y when x changes by Δx?',
		options: ['f(x + Δx) − f(x)', 'f′(x) Δx', 'f(x) − f(x − Δx) only', 'f(x) Δx'],
		correctIndex: 0,
		explanation:
			'The exact change is Δy = f(x + Δx) − f(x). The linear approximation f′(x) Δx is only an estimate of this for small Δx.'
	},
	{
		id: 'w9-q03',
		type: 'multiple-choice',
		question: 'Stopping distance is s = v²/(2gμ). If v is DECREASED by 3%, the approximate percentage change in s is:',
		options: ['−6%', '−3%', '−1.5%', '−9%'],
		correctIndex: 0,
		explanation:
			'Δs ≈ s′(v)Δv = (v/gμ)(−0.03v) = −(v²/2gμ)(0.06) = −0.06s. So s decreases by about 6% (Tutorial Q1).'
	},
	{
		id: 'w9-q04',
		type: 'multiple-choice',
		question: 'For d = 8√(h/5), if the height h DECREASES by 6%, the approximate percentage change in d is:',
		options: ['−3%', '−6%', '−12%', '−1.5%'],
		correctIndex: 0,
		explanation:
			'A square-root relationship halves the percentage change: Δd ≈ (1/2)(Δh/h)d = (1/2)(−6%)d = −3% (Tutorial Q2).'
	},
	{
		id: 'w9-q05',
		type: 'fill-blank',
		question:
			'A cylinder has h = 10 cm and r = 4 cm (V = πr²h, h fixed). Using ΔV ≈ (2πrh)Δr with Δr = 0.02, find the approximate increase in volume (in cm³, as a multiple of π).',
		answer: '1.6π',
		acceptableAnswers: ['1.6π', '1.6 π', '1.6pi', '1.6 pi', '1.6π cm³', '1.6π cm^3'],
		explanation:
			'dV/dr = 2πrh, so ΔV ≈ 2π(4)(10)(0.02) = 1.6π cm³ (Tutorial Q3).'
	},
	{
		id: 'w9-q06',
		type: 'multiple-choice',
		question: 'Newton’s method is a numerical method for finding an approximation to the solution of:',
		options: ['f(x) = 0', 'f′(x) = 0', 'f(x) = x', '∫f(x) dx = 0'],
		correctIndex: 0,
		explanation:
			'Newton’s method approximates x*, where the curve y = f(x) cuts the x-axis, i.e. the solution of f(x) = 0.'
	},
	{
		id: 'w9-q07',
		type: 'fill-blank',
		question: 'Write Newton’s iteration formula for xₙ₊₁ in terms of xₙ, f and f′.',
		answer: 'xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)',
		acceptableAnswers: [
			'xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)',
			'x_{n+1} = x_n - f(x_n)/f\'(x_n)',
			'x(n+1) = xn - f(xn)/f\'(xn)',
			'xn+1 = xn - f(xn)/f\'(xn)',
			'x_n+1 = x_n - f(x_n)/f\'(x_n)'
		],
		explanation:
			'The computational formula is xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ) for n = 0, 1, 2, …, given an initial guess x₀.'
	},
	{
		id: 'w9-q08',
		type: 'multiple-choice',
		question: 'To solve x = cos x by Newton’s method, what is the correct f(x) and f′(x)?',
		options: [
			'f(x) = x − cos x, f′(x) = 1 + sin x',
			'f(x) = x − cos x, f′(x) = 1 − sin x',
			'f(x) = x + cos x, f′(x) = 1 − sin x',
			'f(x) = cos x − x, f′(x) = sin x − 1'
		],
		correctIndex: 0,
		explanation:
			'Rewrite as f(x) = x − cos x = 0. Differentiating, f′(x) = 1 + sin x (the derivative of −cos x is +sin x).'
	},
	{
		id: 'w9-q09',
		type: 'multiple-choice',
		question:
			'Solving x⁵ + 3x² + 1 = 0 with the initial guess x₀ = −1 gave x₁ = 2, which is "a disaster". Why?',
		options: [
			'x₁ jumped outside the interval [−2, 0] known to contain the root',
			'The derivative was zero at x₀',
			'The function is not continuous',
			'Newton’s method never works on polynomials'
		],
		correctIndex: 0,
		explanation:
			'A poor initial guess sent the iterate far from the root, outside [−2, 0]. A better guess such as x₀ = −2 is needed.'
	},
	{
		id: 'w9-q10',
		type: 'multiple-choice',
		question:
			'For f(x) = x⁵ + 3x² + 1, f(0) = 1 and f(−2) = −19. What does the sign change tell us?',
		options: [
			'There is a root in the interval [−2, 0]',
			'There is no root in [−2, 0]',
			'The function has a maximum at x = −1',
			'Newton’s method will always converge'
		],
		correctIndex: 0,
		explanation:
			'A continuous function that changes sign over an interval must have a zero in it, so f has a root in [−2, 0].'
	},
	{
		id: 'w9-q11',
		type: 'fill-blank',
		question:
			'Solve 1 + 2cos x = eˣ near x₀ = 0.8 using Newton’s method (Tutorial Q4). Give the root correct to 4 significant figures.',
		answer: '0.8448',
		acceptableAnswers: ['0.8448', 'x = 0.8448', '0.844'],
		explanation:
			'With f(x) = 1 + 2cos x − eˣ, the iterates converge: 0.845864 → 0.844866 → 0.844865, giving x ≈ 0.8448 (Tutorial Q4).'
	},
	{
		id: 'w9-q12',
		type: 'multiple-choice',
		question:
			'Applying Newton’s method to ln(x) = sin(x) with x₀ = 2.1, the first iterate x₁ is approximately:',
		options: ['2.22362', '2.21911', '1.95004', '2.10000'],
		correctIndex: 0,
		explanation:
			'With f(x) = ln(x) − sin(x) and f′(x) = 1/x − cos(x): x₁ = 2.1 − f(2.1)/f′(2.1) ≈ 2.22362 (Tutorial Q5). The next iterate is x₂ ≈ 2.21911.'
	},
	{
		id: 'w9-q13',
		type: 'multiple-choice',
		question: 'When Newton’s method is working well, the accuracy from one step to the next typically:',
		options: [
			'Doubles the number of correct digits',
			'Adds one correct digit',
			'Stays the same',
			'Halves the number of correct digits'
		],
		correctIndex: 0,
		explanation:
			'Newton’s method has quadratic convergence: the number of correct digits roughly doubles each step, so a few iterations give high accuracy.'
	},
	{
		id: 'w9-q14',
		type: 'fill-blank',
		question:
			'If a quantity y = kx^(1/2) and x increases by 8%, by approximately what percentage does y increase?',
		answer: '4%',
		acceptableAnswers: ['4%', '4', '+4%', '4 percent'],
		explanation:
			'A square-root relationship halves the percentage change: Δy ≈ (1/2)(Δx/x)y = (1/2)(8%)y = 4%.'
	}
];
