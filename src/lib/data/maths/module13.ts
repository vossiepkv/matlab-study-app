import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m13Meta: ModuleMeta = {
	num: 13,
	title: 'Functions of Several Variables (Part 1)',
	description:
		'Introduces functions of two or three variables and their domains, partial derivatives and how to compute them by treating other variables as constants, higher-order partial derivatives and Clairaut’s equality of mixed partials, the chain rule, the gradient vector, directional derivatives, and the direction of most rapid increase. Includes applications to Laplace’s equation and the wave equation.',
	topics: [
		'Functions of several variables and domain',
		'Partial derivatives (definition)',
		'Computing partial derivatives',
		'Higher-order partial derivatives',
		'Equality of mixed partials',
		'The chain rule',
		'Gradient vector',
		'Directional derivatives and most rapid increase'
	]
};

export const m13Cards: CardData[] = [
	{
		id: 'w13-c01',
		type: 'concept',
		front: 'What is a function of several variables?',
		back: 'A rule that assigns a single value to each combination of two or more independent variables. Many physical quantities (temperature, pressure, density, electric and magnetic fields) vary throughout space and time, so they are functions of position (and often time).',
		hint: 'The output depends on more than one input.'
	},
	{
		id: 'w13-c02',
		type: 'concept',
		front: 'How is a function f of two variables x and y denoted, and what does it produce?',
		back: 'A function f of two variables x, y is a rule that assigns to each point (x, y) a unique value z. We write z = f(x, y).',
		hint: 'z = f(x, y).'
	},
	{
		id: 'w13-c03',
		type: 'concept',
		front: 'What is the domain D of a function f(x, y)?',
		back: 'The domain is the largest possible set D in the xy-plane on which f is defined. The function value f(x, y) is defined for every point (x, y) as it varies over the domain D.',
		hint: 'The set of allowed input points (x, y).'
	},
	{
		id: 'w13-c04',
		type: 'concept',
		front: 'Give an example of a quantity that is a function of three variables.',
		back: 'The distance of a point P(x, y, z) from the origin: d = √(x² + y² + z²). Here d is a function of the three independent variables x, y and z, written d = d(x, y, z).'
	},
	{
		id: 'w13-c05',
		type: 'concept',
		front: 'What is the partial derivative ∂f/∂x?',
		back: 'It is the rate of change of f(x, y) in the (positive) x direction. By definition, ∂f/∂x (a, b) = lim(h→0) [f(a + h, b) − f(a, b)] / h.',
		hint: 'How fast f changes as x changes, y fixed.'
	},
	{
		id: 'w13-c06',
		type: 'concept',
		front: 'What is the partial derivative ∂f/∂y?',
		back: 'It is the rate of change of f(x, y) in the (positive) y direction. By definition, ∂f/∂y (a, b) = lim(h→0) [f(a, b + h) − f(a, b)] / h.',
		hint: 'How fast f changes as y changes, x fixed.'
	},
	{
		id: 'w13-c07',
		type: 'concept',
		front: 'How is the symbol ∂ pronounced?',
		back: 'The symbol ∂ (used for partial derivatives) is pronounced “del”.'
	},
	{
		id: 'w13-c08',
		type: 'concept',
		front: 'How do you compute ∂f/∂x in practice?',
		back: 'Treat the y variable as a constant, then differentiate f(x, y) as if it were a function of x alone, using the usual rules of single-variable calculus.',
		hint: 'Hold y constant, differentiate in x.'
	},
	{
		id: 'w13-c09',
		type: 'concept',
		front: 'How do you compute ∂f/∂y in practice?',
		back: 'Treat the x variable as a constant, then differentiate f(x, y) as if it were a function of y alone, using the usual rules of single-variable calculus.',
		hint: 'Hold x constant, differentiate in y.'
	},
	{
		id: 'w13-c10',
		type: 'concept',
		front: 'For f(x, y) = 4x³y − 2y⁵, find ∂f/∂x and ∂f/∂y.',
		back: 'Treating y as constant: ∂f/∂x = 12x²y. Treating x as constant: ∂f/∂y = 4x³ − 10y⁴.',
		hint: 'Differentiate in one variable, hold the other fixed.'
	},
	{
		id: 'w13-c11',
		type: 'concept',
		front: 'Why must the chain/product rules still be applied when taking partial derivatives?',
		back: 'Even with one variable held constant, the remaining expression in the other variable can be composite or a product, so single-variable rules (product, quotient, chain) apply as normal. For example, ∂/∂x of cos(x²y) gives −sin(x²y)·2xy by the chain rule.',
		hint: 'Holding a variable constant does not remove the chain rule.'
	},
	{
		id: 'w13-c12',
		type: 'concept',
		front: 'Why are there higher-order partial derivatives?',
		back: 'Because both ∂f/∂x and ∂f/∂y are themselves functions of x and y, we can take their partial derivatives again with respect to x and y, producing second-order (and higher) partial derivatives.',
		hint: 'Differentiate the first partials again.'
	},
	{
		id: 'w13-c13',
		type: 'list',
		front: 'What are the four second-order partial derivatives of f(x, y), and their subscript notation?',
		back: [
			'∂²f/∂x² = ∂/∂x (∂f/∂x) = f_xx',
			'∂²f/∂y² = ∂/∂y (∂f/∂y) = f_yy',
			'∂²f/∂x∂y = ∂/∂x (∂f/∂y) = f_yx',
			'∂²f/∂y∂x = ∂/∂y (∂f/∂x) = f_xy'
		],
		hint: 'Two pure (xx, yy) and two mixed (xy, yx).'
	},
	{
		id: 'w13-c14',
		type: 'concept',
		front: 'What is special about the mixed second-order partial derivatives?',
		back: 'For the functions in this course the mixed partials are equal: ∂²f/∂y∂x = ∂²f/∂x∂y. The order of differentiation does not matter (Clairaut’s theorem).',
		hint: 'Order of mixing usually does not matter.'
	},
	{
		id: 'w13-c15',
		type: 'concept',
		front: 'What is Laplace’s equation?',
		back: 'A partial differential equation: ∂²z/∂x² + ∂²z/∂y² = 0. To show a function z satisfies it, compute both second-order pure partials and confirm they sum to zero.',
		hint: 'The two pure second partials add to zero.'
	},
	{
		id: 'w13-c16',
		type: 'concept',
		front: 'Show how z = arctan(y/x) gives ∂z/∂x.',
		back: '∂z/∂x = 1/(1 + (y/x)²) · (−y/x²) = −y/(x² + y²). (Likewise ∂z/∂y = x/(x² + y²).) This function satisfies Laplace’s equation.',
		hint: 'Use d/du(arctan u) = 1/(1+u²) with u = y/x.'
	},
	{
		id: 'w13-c17',
		type: 'concept',
		front: 'What is the wave equation, and how do you find allowable speeds c?',
		back: 'The wave equation is ∂²u/∂t² = ∂²u/∂x². For a candidate solution, compute both second partials; matching them forces a condition on c. For example a sin/cos travelling-wave solution gives c² = 1, so c = ±1.',
		hint: 'Equate the t and x second partials and solve for c.'
	},
	{
		id: 'w13-c18',
		type: 'concept',
		front: 'State the chain rule (Case 1) for w = w(x, y) where x = x(t) and y = y(t).',
		back: 'dw/dt = (∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt). Here w depends on a single variable t through x and y, so the result is an ordinary derivative dw/dt.',
		hint: 'One independent variable t → ordinary derivative.'
	},
	{
		id: 'w13-c19',
		type: 'concept',
		front: 'State the chain rule (Case 2) for w = w(x, y) where x = x(u, v) and y = y(u, v).',
		back: '∂w/∂u = (∂w/∂x)(∂x/∂u) + (∂w/∂y)(∂y/∂u) and ∂w/∂v = (∂w/∂x)(∂x/∂v) + (∂w/∂y)(∂y/∂v).',
		hint: 'Two independent variables u, v → partial derivatives.'
	},
	{
		id: 'w13-c20',
		type: 'concept',
		front: 'How does the Case 1 chain rule extend to a function of three variables w = w(x, y, z)?',
		back: 'dw/dt = (∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt) + (∂w/∂z)(dz/dt) — one term for each intermediate variable that depends on t.',
		hint: 'Add a third term for z.'
	},
	{
		id: 'w13-c21',
		type: 'list',
		front: 'What are the steps to apply the chain rule (Case 1)?',
		back: [
			'Find the partial derivatives ∂w/∂x, ∂w/∂y (and ∂w/∂z if present)',
			'Find the ordinary derivatives dx/dt, dy/dt (and dz/dt)',
			'Combine them as dw/dt = Σ (∂w/∂variable)(d variable/dt)',
			'Substitute x = x(t), y = y(t), … to express the answer as a function of t'
		]
	},
	{
		id: 'w13-c22',
		type: 'concept',
		front: 'Define the gradient vector ∇f of a function f(x, y) at a point (a, b).',
		back: '∇f(a, b) = ∂f/∂x (a, b) i + ∂f/∂y (a, b) j. It collects the partial derivatives as the components of a vector.',
		hint: 'Partials become the i and j components.'
	},
	{
		id: 'w13-c23',
		type: 'concept',
		front: 'How is the gradient ∇f extended to a function f(x, y, z) of three variables?',
		back: '∇f = ∂f/∂x i + ∂f/∂y j + ∂f/∂z k. The three first-order partial derivatives are the components of the gradient vector.'
	},
	{
		id: 'w13-c24',
		type: 'concept',
		front: 'How do you evaluate a gradient at a specific point?',
		back: 'Compute the symbolic gradient ∇f (components are the partial derivatives), then substitute the coordinates of the point into each component. For example, for f = x² + 3xyz − y², ∇f = (2x + 3yz)i + (3xz − 2y)j + 3xy k, and ∇f(1, −2, 5) = −28i + 19j − 6k.',
		hint: 'Differentiate first, then plug in the point.'
	},
	{
		id: 'w13-c25',
		type: 'concept',
		front: 'Define the directional derivative of f in the direction of a vector u.',
		back: 'df/du = ∇f · û, the dot product of the gradient with the unit vector û in the direction of u. You must use the unit vector (normalise u first).',
		hint: 'Gradient dotted with the unit direction.'
	},
	{
		id: 'w13-c26',
		type: 'concept',
		front: 'Why must the direction vector be made a unit vector before computing a directional derivative?',
		back: 'The directional derivative is ∇f · û, defined for a unit vector û. Using a non-unit vector would scale the result by its length, giving a value that depends on the chosen magnitude rather than purely on the direction.',
		hint: 'Divide u by |u| first.'
	},
	{
		id: 'w13-c27',
		type: 'list',
		front: 'List the steps to find a directional derivative at a point in a given direction.',
		back: [
			'Compute the gradient ∇f symbolically',
			'Evaluate ∇f at the given point',
			'Find the unit vector û = u/|u| in the given direction',
			'Take the dot product df/du = ∇f · û'
		]
	},
	{
		id: 'w13-c28',
		type: 'concept',
		front: 'Using df/du = |∇f| cosθ, why does the gradient point in the direction of most rapid increase?',
		back: 'With θ the angle between ∇f and u, df/du = ∇f · û = |∇f| cosθ. cosθ is largest (= 1) when θ = 0, i.e. when u points along ∇f. So f increases most rapidly in the direction of ∇f.',
		hint: 'cosθ is maximised at θ = 0.'
	},
	{
		id: 'w13-c29',
		type: 'list',
		front: 'What do the gradient and its magnitude tell you about directional derivatives at a point?',
		back: [
			'|∇f| is the maximum directional derivative',
			'The directional derivative is greatest in the direction of ∇f (most rapid increase)',
			'−|∇f| is the minimum directional derivative',
			'The directional derivative is smallest in the direction of −∇f (most rapid decrease)'
		],
		hint: '+∇f increases fastest, −∇f decreases fastest.'
	},
	{
		id: 'w13-c30',
		type: 'concept',
		front: 'For a temperature field T(x, y, z), in which direction does the temperature increase most rapidly?',
		back: 'In the direction of the gradient ∇T evaluated at that point. For example, if ∇T(1, 2, 1) = 4i + 3j + 6k, the temperature increases most rapidly in the direction 4i + 3j + 6k.',
		hint: 'Follow the gradient vector.'
	},
	{
		id: 'w13-c31',
		type: 'concept',
		front: 'What is the directional derivative when u is perpendicular to ∇f?',
		back: 'Zero. Since df/du = |∇f| cosθ and θ = 90° gives cosθ = 0, there is no change in f in a direction perpendicular to the gradient.',
		hint: 'cos 90° = 0.'
	}
];

export const m13Quiz: QuizData[] = [
	{
		id: 'w13-q01',
		type: 'multiple-choice',
		question: 'How is the function f of two variables x and y written, and what does it return?',
		options: [
			'z = f(x, y), assigning a unique value z to each point (x, y)',
			'z = f(x), depending only on x',
			'(x, y) = f(z), assigning a point to each z',
			'z = x + y always'
		],
		correctIndex: 0,
		explanation:
			'A function of two variables assigns to each point (x, y) a unique value z, written z = f(x, y).'
	},
	{
		id: 'w13-q02',
		type: 'multiple-choice',
		question: 'To compute ∂f/∂x, what do you do with the variable y?',
		options: [
			'Treat y as a constant and differentiate with respect to x',
			'Differentiate with respect to y as well',
			'Set y equal to zero',
			'Replace y with x'
		],
		correctIndex: 0,
		explanation:
			'∂f/∂x is found by treating y as a constant and differentiating f(x, y) as if it were a function of x alone.'
	},
	{
		id: 'w13-q03',
		type: 'multiple-choice',
		question: 'For f(x, y) = 4x³y − 2y⁵, what is ∂f/∂x?',
		options: ['12x²y', '4x³ − 10y⁴', '12x²y − 10y⁴', '4x³y'],
		correctIndex: 0,
		explanation:
			'Treating y as a constant, ∂/∂x (4x³y) = 12x²y and the −2y⁵ term has no x, so its derivative is 0. Thus ∂f/∂x = 12x²y.'
	},
	{
		id: 'w13-q04',
		type: 'multiple-choice',
		question: 'For f(x, y) = 4x³y − 2y⁵, what is ∂f/∂y?',
		options: ['4x³ − 10y⁴', '12x²y', '4x³y', '−10y⁴'],
		correctIndex: 0,
		explanation:
			'Treating x as a constant, ∂/∂y (4x³y) = 4x³ and ∂/∂y (−2y⁵) = −10y⁴. Thus ∂f/∂y = 4x³ − 10y⁴.'
	},
	{
		id: 'w13-q05',
		type: 'fill-blank',
		question: 'The symbol ∂ used in partial derivatives is pronounced ______.',
		answer: 'del',
		acceptableAnswers: ['del', 'Del', 'DEL', '"del"'],
		explanation: 'The lecture notes that the symbol ∂ is pronounced “del”.'
	},
	{
		id: 'w13-q06',
		type: 'multiple-choice',
		question: 'Which statement about mixed second-order partial derivatives is true for the functions in this course?',
		options: [
			'∂²f/∂y∂x = ∂²f/∂x∂y',
			'They are always negatives of each other',
			'They are never equal',
			'They are equal only when f is linear'
		],
		correctIndex: 0,
		explanation:
			'The mixed partials are equal: ∂²f/∂y∂x = ∂²f/∂x∂y. The order of differentiation does not matter.'
	},
	{
		id: 'w13-q07',
		type: 'multiple-choice',
		question:
			'For z = e^(xy) tan(x²) + y ln(x), which is the correct ∂z/∂y?',
		options: [
			'x e^(xy) tan(x²) + ln(x)',
			'y e^(xy) tan(x²) + e^(xy) sec²(x²) · 2x + y/x',
			'e^(xy) tan(x²) + ln(x)',
			'x e^(xy) sec²(x²) + 1/x'
		],
		correctIndex: 0,
		explanation:
			'Holding x constant, ∂/∂y of e^(xy) tan(x²) = x e^(xy) tan(x²), and ∂/∂y of y ln(x) = ln(x). So ∂z/∂y = x e^(xy) tan(x²) + ln(x) (tutorial Q1a).'
	},
	{
		id: 'w13-q08',
		type: 'multiple-choice',
		question:
			'For z = e^(xy) tan(x²) + y ln(x), what is the last term of ∂z/∂x?',
		options: ['y/x', 'ln(x)', 'x/y', 'y ln(x)'],
		correctIndex: 0,
		explanation:
			'Holding y constant, ∂/∂x of y ln(x) = y · (1/x) = y/x. (The full ∂z/∂x = y e^(xy) tan(x²) + e^(xy) sec²(x²)·2x + y/x — tutorial Q1a.)'
	},
	{
		id: 'w13-q09',
		type: 'multiple-choice',
		question:
			'For w = w(x, y) with x = x(t) and y = y(t), which is the correct chain rule?',
		options: [
			'dw/dt = (∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt)',
			'dw/dt = (∂w/∂x)(∂x/∂t)(∂w/∂y)(∂y/∂t)',
			'dw/dt = ∂w/∂x + ∂w/∂y',
			'dw/dt = (dx/dt)(dy/dt)'
		],
		correctIndex: 0,
		explanation:
			'Case 1 of the chain rule: dw/dt = (∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt). One term per intermediate variable, summed.'
	},
	{
		id: 'w13-q10',
		type: 'multiple-choice',
		question:
			'For w = w(x, y) with x = x(u, v) and y = y(u, v), what is ∂w/∂u?',
		options: [
			'(∂w/∂x)(∂x/∂u) + (∂w/∂y)(∂y/∂u)',
			'(∂w/∂x)(∂x/∂v) + (∂w/∂y)(∂y/∂v)',
			'(∂w/∂u)(∂u/∂x)',
			'∂w/∂x + ∂w/∂y'
		],
		correctIndex: 0,
		explanation:
			'Case 2 of the chain rule: ∂w/∂u = (∂w/∂x)(∂x/∂u) + (∂w/∂y)(∂y/∂u).'
	},
	{
		id: 'w13-q11',
		type: 'multiple-choice',
		question:
			'For f(x, y) = x² + 3xyz − y² (treating it as f(x, y, z)), what is ∇f?',
		options: [
			'(2x + 3yz)i + (3xz − 2y)j + 3xy k',
			'(2x)i + (−2y)j + 0k',
			'(3yz)i + (3xz)j + (3xy)k',
			'(2x − 2y)i + 3xyz j'
		],
		correctIndex: 0,
		explanation:
			'∇f = ∂f/∂x i + ∂f/∂y j + ∂f/∂z k = (2x + 3yz)i + (3xz − 2y)j + 3xy k (lecture directional-derivative Example 2).'
	},
	{
		id: 'w13-q12',
		type: 'fill-blank',
		question:
			'For the directional derivative, the direction vector u must first be converted into a ______ vector.',
		answer: 'unit',
		acceptableAnswers: ['unit', 'Unit', 'unit vector', 'a unit'],
		explanation:
			'The directional derivative df/du = ∇f · û uses the unit vector û = u/|u|, so u must be normalised first.'
	},
	{
		id: 'w13-q13',
		type: 'multiple-choice',
		question: 'In which direction does a function f increase most rapidly at a point?',
		options: [
			'The direction of the gradient ∇f',
			'The direction of −∇f',
			'Any direction perpendicular to ∇f',
			'The direction of the x-axis'
		],
		correctIndex: 0,
		explanation:
			'Since df/du = |∇f| cosθ is maximised (cosθ = 1) when θ = 0, f increases most rapidly in the direction of ∇f, with maximum rate |∇f|.'
	},
	{
		id: 'w13-q14',
		type: 'fill-blank',
		question:
			'The function u(x, t) = 3sin(x − ct) + 5cos2(x + ct) satisfies the wave equation ∂²u/∂t² = ∂²u/∂x² only when c equals ______ (give both values).',
		answer: '±1',
		acceptableAnswers: ['±1', '+/-1', '+-1', '1 and -1', '1 or -1', '± 1', '-1 and 1', 'c = ±1'],
		explanation:
			'Computing ∂²u/∂t² and ∂²u/∂x² and equating them forces c² = 1, so c = ±1 (tutorial Q2b).'
	}
];
