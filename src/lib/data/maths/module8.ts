import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m8Meta: ModuleMeta = {
	num: 8,
	title: 'Differentiation (Part 3)',
	description:
		'Applies differentiation to real problems: finding the equation of the tangent and normal to a curve, interpreting the derivative as a rate of change, solving related rate problems with the chain rule, and using calculus to find maxima and minima (optimisation) on a closed interval.',
	topics: [
		'Equation of the tangent to a curve',
		'Equation of the normal to a curve',
		'Tangents via implicit differentiation',
		'Derivative as a rate of change',
		'Related rate problems and the chain rule',
		'Maxima and minima (optimisation)',
		'Critical points and end points',
		'Distinguishing maxima from minima'
	]
};

export const m8Cards: CardData[] = [
	{
		id: 'w8-c01',
		type: 'concept',
		front: 'What is the gradient of the tangent to the curve y = f(x) at the point where x = a?',
		back: 'The gradient of the tangent is the value of the derivative at that point: m_T = f′(a).',
		hint: 'Just evaluate the derivative at x = a.'
	},
	{
		id: 'w8-c02',
		type: 'concept',
		front: 'State the equation of the tangent to y = f(x) at the point where x = a.',
		back: 'y − f(a) = f′(a)(x − a). It is a straight line through the point (a, f(a)) with gradient m_T = f′(a).',
		hint: 'Point–gradient form using the point on the curve.'
	},
	{
		id: 'w8-c03',
		type: 'concept',
		front: 'What is the normal to a curve at a point?',
		back: 'The normal is the straight line through the point that is perpendicular to the tangent at that point.'
	},
	{
		id: 'w8-c04',
		type: 'concept',
		front: 'What is the gradient of the normal to y = f(x) at x = a?',
		back: 'It is the negative reciprocal of the tangent gradient: m_N = −1 / f′(a).',
		hint: 'Perpendicular lines: gradients multiply to −1.'
	},
	{
		id: 'w8-c05',
		type: 'concept',
		front: 'State the equation of the normal to y = f(x) at the point where x = a.',
		back: 'y − f(a) = −(1 / f′(a))(x − a). Same point as the tangent, but using the normal gradient m_N.'
	},
	{
		id: 'w8-c06',
		type: 'list',
		front: 'What are the steps to find the equation of the tangent (and normal) to a curve at x = a?',
		back: [
			'Substitute x = a into y = f(x) to find the point (a, f(a))',
			'Differentiate to get f′(x), then evaluate f′(a) — this is m_T',
			'Tangent: y − f(a) = m_T(x − a)',
			'Normal gradient m_N = −1/m_T',
			'Normal: y − f(a) = m_N(x − a)'
		],
		hint: 'Point first, then gradient, then the two line equations.'
	},
	{
		id: 'w8-c07',
		type: 'concept',
		front: 'For y = −x² + 3x + 4, find the gradient of the tangent at x = 3.',
		back: 'dy/dx = −2x + 3, so at x = 3 the gradient is m_T = −2(3) + 3 = −3.',
		hint: 'Differentiate, then substitute x = 3.'
	},
	{
		id: 'w8-c08',
		type: 'concept',
		front: 'For y = −x² + 3x + 4, the point at x = 3 is (3, 4) and m_T = −3. What is the equation of the tangent?',
		back: 'y − 4 = −3(x − 3), which simplifies to y = −3x + 13.'
	},
	{
		id: 'w8-c09',
		type: 'concept',
		front: 'For y = −x² + 3x + 4 at (3, 4), the tangent gradient is −3. What is the equation of the normal?',
		back: 'm_N = −1/(−3) = 1/3, so y − 4 = (1/3)(x − 3), which rearranges to 3y − x − 9 = 0.'
	},
	{
		id: 'w8-c10',
		type: 'concept',
		front: 'How do you find the gradient of a tangent when the curve is given implicitly, e.g. x² − 2xy + 2y² + 5 = 10x?',
		back: 'Differentiate both sides with respect to x (treating y as a function of x, so terms in y produce y′), then substitute the given point and solve the resulting equation for y′.',
		hint: 'Implicit differentiation, then plug in the point.'
	},
	{
		id: 'w8-c11',
		type: 'concept',
		front: 'For x² − 2xy + 2y² + 5 = 10x, differentiating gives 2x − 2y − 2xy′ + 4yy′ = 10. What is y′ at the point (1, 2)?',
		back: 'Substituting x = 1, y = 2: 2 − 4 − 2y′ + 8y′ = 10, so 6y′ = 12 and y′ = 2.'
	},
	{
		id: 'w8-c12',
		type: 'concept',
		front: 'The tangent to a curve at (1, 2) has gradient 2. What is its equation?',
		back: 'Using y = 2x + c and forcing (1, 2) to lie on it: 2 = 2 + c, so c = 0 and the tangent is y = 2x.',
		hint: 'Substitute the point to find the intercept c.'
	},
	{
		id: 'w8-c13',
		type: 'concept',
		front: 'Apart from being the gradient of a curve, what else does dy/dx measure?',
		back: 'It is a measure of the rate of change of y with respect to x.'
	},
	{
		id: 'w8-c14',
		type: 'concept',
		front: 'The area of a circle is A = πr². What is the rate of change of area with respect to radius?',
		back: 'dA/dr = 2πr.',
		hint: 'Differentiate A = πr² with respect to r.'
	},
	{
		id: 'w8-c15',
		type: 'concept',
		front: 'For a cone V = (1/3)πr²h, find the rate of change of volume with respect to the radius (h constant).',
		back: 'Treating h as a constant and differentiating with respect to r: dV/dr = (2/3)πrh.'
	},
	{
		id: 'w8-c16',
		type: 'concept',
		front: 'For a cone V = (1/3)πr²h, find the rate of change of volume with respect to the height (r constant).',
		back: 'Treating r as a constant and differentiating with respect to h: dV/dh = (1/3)πr².'
	},
	{
		id: 'w8-c17',
		type: 'concept',
		front: 'What is a related rate problem?',
		back: 'A problem involving two variables (say x and y) that both depend on time t, linked by an equation that holds at all times. One rate (e.g. dx/dt) is known and the aim is to find the other (dy/dt).',
		hint: 'Two variables, both changing with time.'
	},
	{
		id: 'w8-c18',
		type: 'list',
		front: 'What are the steps for solving a related rate problem?',
		back: [
			'Identify the variables that are changing with time',
			'Obtain a relationship (equation) between the variables',
			'Differentiate this equation with respect to t',
			'Solve for the required rate of change using the given (and any calculated) information'
		],
		hint: 'Relate, differentiate w.r.t. t, then substitute.'
	},
	{
		id: 'w8-c19',
		type: 'concept',
		front: 'In a related rate problem, how is the chain rule used to link dV/dt and dr/dt for a sphere?',
		back: 'dV/dt = (dV/dr)(dr/dt). For V = (4/3)πr³, dV/dr = 4πr², so dV/dt = 4πr²·(dr/dt).',
		hint: 'Chain rule connects the known rate to the required one.'
	},
	{
		id: 'w8-c20',
		type: 'concept',
		front: "A spherical balloon's volume grows at 2 m³/min. Using dr/dt = (1/(4πr²))(dV/dt), what is dr/dt when V = 36π (so r = 3)?",
		back: 'dr/dt = 2 / (4π·3²) = 2 / (36π) = 1/(18π) m/min.',
		hint: 'First find r from V = 36π, then substitute.'
	},
	{
		id: 'w8-c21',
		type: 'concept',
		front: "A disc's radius increases at 0.03 mm/sec. With A = πr², how fast is the area changing when r = 200 mm?",
		back: 'dA/dt = (dA/dr)(dr/dt) = 2πr·0.03 = 0.06πr. At r = 200: dA/dt = 0.06·200·π = 12π mm²/sec.'
	},
	{
		id: 'w8-c22',
		type: 'concept',
		front: 'What is optimisation?',
		back: 'The process of finding maximum or minimum values — for example maximising profit, minimising cost, or finding the least material needed to make an object.',
		hint: 'Finding the largest or smallest value.'
	},
	{
		id: 'w8-c23',
		type: 'list',
		front: 'On a closed interval [a, b], where must the absolute (global) maximum and minimum of a differentiable function f(x) occur?',
		back: [
			'At the end points (x = a or x = b), or',
			'At a critical point inside the interval, where f′(x) = 0'
		],
		hint: 'Either the ends or where the derivative is zero.'
	},
	{
		id: 'w8-c24',
		type: 'concept',
		front: 'What is a critical point of a function?',
		back: 'A point where the derivative is zero, f′(x) = 0. These are candidates for local (and possibly absolute) maxima or minima.'
	},
	{
		id: 'w8-c25',
		type: 'list',
		front: 'What is the general strategy for solving a maximum/minimum (optimisation) problem?',
		back: [
			'Identify the constraint — a condition relating the variables',
			'Write the objective function (the quantity to be maximised or minimised) in terms of the variables',
			'Use the constraint to express the objective function as a function of one variable',
			'Differentiate the objective function and set the derivative equal to zero',
			'Solve, check the value lies in the given domain, and back substitute as needed',
			'Distinguish maximum from minimum (sign test, second derivative, or a graph)'
		],
		hint: 'Constraint, objective, one variable, derivative = 0, classify.'
	},
	{
		id: 'w8-c26',
		type: 'concept',
		front: 'What is the difference between the constraint and the objective function in an optimisation problem?',
		back: 'The constraint is the condition relating the variables (e.g. a fixed perimeter or area). The objective function is the quantity you actually want to maximise or minimise (e.g. volume or cost).'
	},
	{
		id: 'w8-c27',
		type: 'concept',
		front: 'After solving f′(x) = 0, how do you know whether you have a maximum or a minimum?',
		back: 'Use a sign test on f′ either side of the point, OR the second derivative test, OR inspect the graph of the function. The second derivative gives the cleanest test.',
		hint: 'Sign test, second derivative, or graph.'
	},
	{
		id: 'w8-c28',
		type: 'concept',
		front: 'In the second derivative test, what do f″(x) < 0 and f″(x) > 0 indicate at a critical point?',
		back: 'f″(x) < 0 indicates a maximum (curve concave down); f″(x) > 0 indicates a minimum (curve concave up).',
		hint: 'Negative = max, positive = min.'
	},
	{
		id: 'w8-c29',
		type: 'concept',
		front: 'To maximise the product of two positive numbers with sum 18, you set P = x(18 − x). Why differentiate instead of using trial and error?',
		back: 'Trial and error could never guarantee the true maximum. Calculus gives P = 18x − x², dP/dx = 18 − 2x = 0, so x = 9 (and y = 9), and d²P/dx² = −2 < 0 confirms a maximum.'
	},
	{
		id: 'w8-c30',
		type: 'concept',
		front: 'An open-top box is made by cutting squares of side x from each corner of a 15 cm × 7 cm sheet. Why is x = 5 5/6 rejected as a solution?',
		back: 'Because 2x must be less than 7, so the domain is 0 ≤ x ≤ 3.5. The value x = 5 5/6 lies outside this domain (it would give a negative side), so only x = 1.5 is valid.',
		hint: 'A length can never be negative — check the physical domain.'
	},
	{
		id: 'w8-c31',
		type: 'concept',
		front: 'Why must you always check that an optimisation solution lies within the given domain?',
		back: 'Setting the derivative to zero can produce more than one solution; physical constraints (such as a length being positive) often rule one or more out. Only solutions inside the valid domain are acceptable.'
	},
	{
		id: 'w8-c32',
		type: 'concept',
		front: 'For a closed cone funnel with apex angle 90°, why does r = h, and what does this do to V = (1/3)πr²h?',
		back: 'The half-angle is 45°, so tan(45°) = r/h = 1, giving r = h. Substituting into the volume: V = (1/3)πh²·h = (1/3)πh³ — a function of h alone.',
		hint: 'A 90° apex means a 45° half-angle.'
	}
];

export const m8Quiz: QuizData[] = [
	{
		id: 'w8-q01',
		type: 'multiple-choice',
		question: 'What is the gradient of the tangent to y = f(x) at the point where x = a?',
		options: ['f(a)', "f′(a)", '−1/f′(a)', "f″(a)"],
		correctIndex: 1,
		explanation:
			'The tangent gradient is the value of the derivative at the point: m_T = f′(a). The normal gradient is −1/f′(a).'
	},
	{
		id: 'w8-q02',
		type: 'multiple-choice',
		question: 'If the gradient of the tangent at a point is m_T = 3, what is the gradient of the normal there?',
		options: ['3', '−3', '1/3', '−1/3'],
		correctIndex: 3,
		explanation:
			'The normal is perpendicular to the tangent, so m_N = −1/m_T = −1/3.'
	},
	{
		id: 'w8-q03',
		type: 'multiple-choice',
		question: 'For y = 2x² − x + 1, what is the equation of the tangent at x = 1?',
		options: ['y = 3x − 1', 'y = 4x − 2', 'y = 3x + 2', 'y = −x/3 + 7/3'],
		correctIndex: 0,
		explanation:
			'At x = 1, y = 2 so the point is (1, 2). y′ = 4x − 1 gives m_T = 4(1) − 1 = 3. Tangent: y − 2 = 3(x − 1), i.e. y = 3x − 1 (tutorial Q1 i).'
	},
	{
		id: 'w8-q04',
		type: 'fill-blank',
		question: 'For y = 2x² − x + 1, the tangent at x = 1 has gradient 3 and the point is (1, 2). Write the equation of the normal in the form y = -x/3 + 7/3.',
		answer: 'y = -x/3 + 7/3',
		acceptableAnswers: [
			'y = -x/3 + 7/3',
			'y=-x/3+7/3',
			'y = -1/3 x + 7/3',
			'y = (-1/3)x + 7/3',
			'y = -x/3 +7/3'
		],
		explanation:
			'm_N = −1/m_T = −1/3. Normal: y − 2 = (−1/3)(x − 1), so y = −x/3 + 1/3 + 2 = −x/3 + 7/3 (tutorial Q1 i).'
	},
	{
		id: 'w8-q05',
		type: 'multiple-choice',
		question: 'For the implicit curve 2x³ − xy² + 3y³ − 1 = 3, differentiating and substituting the point (1, 1) gives 7y′ = −5. What is the tangent gradient there?',
		options: ['−5/7', '7/5', '5/7', '−7/5'],
		correctIndex: 0,
		explanation:
			'Solving 7y′ = −5 gives y′ = −5/7, so m_T = −5/7 (tutorial Q1 ii). The normal gradient would be m_N = 7/5.'
	},
	{
		id: 'w8-q06',
		type: 'multiple-choice',
		question: 'For the area of a circle A = πr², what is the rate of change of area with respect to the radius?',
		options: ['πr', '2πr', 'πr²', '2πr²'],
		correctIndex: 1,
		explanation:
			'Differentiating A = πr² with respect to r gives dA/dr = 2πr.'
	},
	{
		id: 'w8-q07',
		type: 'fill-blank',
		question: 'For a cone V = (1/3)πr²h, find the rate of change of volume with respect to the radius (treating h as constant). Write it in the form (2/3)πrh.',
		answer: '(2/3)πrh',
		acceptableAnswers: [
			'(2/3)πrh',
			'2/3 πrh',
			'(2/3)*pi*r*h',
			'2πrh/3',
			'(2πrh)/3',
			'2/3πrh'
		],
		explanation:
			'Differentiating V = (1/3)πr²h with respect to r (h constant): dV/dr = (2/3)πrh.'
	},
	{
		id: 'w8-q08',
		type: 'multiple-choice',
		question: "A spherical balloon's volume increases at 2 m³/min. Using dr/dt = (1/(4πr²))(dV/dt), what is dr/dt when V = 36π (so r = 3)?",
		options: ['1/(18π) m/min', '1/(9π) m/min', '2/(9π) m/min', '1/(36π) m/min'],
		correctIndex: 0,
		explanation:
			'From V = 36π = (4/3)πr³ we get r = 3. Then dr/dt = 2/(4π·3²) = 2/(36π) = 1/(18π) m/min.'
	},
	{
		id: 'w8-q09',
		type: 'multiple-choice',
		question: "A disc's radius increases at 0.03 mm/sec. With A = πr², how fast is the area changing when r = 200 mm?",
		options: ['6π mm²/sec', '12π mm²/sec', '0.06π mm²/sec', '400π mm²/sec'],
		correctIndex: 1,
		explanation:
			'dA/dt = (dA/dr)(dr/dt) = 2πr·0.03 = 0.06πr. At r = 200: dA/dt = 0.06·200·π = 12π mm²/sec.'
	},
	{
		id: 'w8-q10',
		type: 'multiple-choice',
		question: 'On a closed interval [a, b], where must the absolute maximum or minimum of a differentiable function occur?',
		options: [
			'Only at the midpoint of the interval',
			'Only where f″(x) = 0',
			'At an end point or at a critical point where f′(x) = 0',
			'Only at the end points x = a and x = b'
		],
		correctIndex: 2,
		explanation:
			'The absolute max/min on [a, b] occurs either at an end point (x = a or x = b) or at a critical point inside the interval where f′(x) = 0.'
	},
	{
		id: 'w8-q11',
		type: 'multiple-choice',
		question: 'At a critical point, the second derivative is f″(x) = −2. Is this a maximum or a minimum?',
		options: ['Maximum', 'Minimum', 'Neither (a point of inflection)', 'Cannot be determined'],
		correctIndex: 0,
		explanation:
			'f″(x) < 0 means the curve is concave down, so the critical point is a maximum.'
	},
	{
		id: 'w8-q12',
		type: 'fill-blank',
		question: 'Two positive numbers have a sum of 18. With P = x(18 − x), solving dP/dx = 18 − 2x = 0 gives what value of x for the maximum product?',
		answer: '9',
		acceptableAnswers: ['9', 'x = 9', 'x=9'],
		explanation:
			'dP/dx = 18 − 2x = 0 gives x = 9 (and y = 9). Since d²P/dx² = −2 < 0, the product is a maximum, equal to 81.'
	},
	{
		id: 'w8-q13',
		type: 'multiple-choice',
		question: 'An open box is made from a 15 cm × 7 cm sheet by cutting squares of side x from each corner. Solving dV/dx = 0 gives x = 3/2 or x = 5 5/6. Why is x = 5 5/6 rejected?',
		options: [
			'It gives a minimum, not a maximum',
			'It lies outside the domain 0 ≤ x ≤ 3.5',
			'It is not a critical point',
			'It makes the volume zero'
		],
		correctIndex: 1,
		explanation:
			'Since 2x must be less than 7, the domain is 0 ≤ x ≤ 3.5. The value 5 5/6 lies outside this range (a length cannot be negative), so only x = 1.5 is valid.'
	},
	{
		id: 'w8-q14',
		type: 'fill-blank',
		question: 'Oil flows from an inverted cone funnel (apex angle 90°, so r = h) at 3 cm³/sec. With V = (1/3)πh³ and dh/dt = −3/(h²π), find dh/dt when h = 5 (give the form -3/(25π)).',
		answer: '-3/(25π)',
		acceptableAnswers: [
			'-3/(25π)',
			'-3/25π',
			'-3/(25*pi)',
			'-0.0382',
			'-0.0382 cm/sec',
			'-3/(25 π)'
		],
		explanation:
			'Apex 90° gives r = h, so V = (1/3)πh³ and dV/dt = πh²(dh/dt). With dV/dt = −3: dh/dt = −3/(h²π). At h = 5: dh/dt = −3/(25π) ≈ −0.0382 cm/sec (tutorial Q3).'
	}
];
