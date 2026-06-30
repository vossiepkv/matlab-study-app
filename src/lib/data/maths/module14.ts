import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m14Meta: ModuleMeta = {
	num: 14,
	title: 'Functions of Several Variables (Part 2)',
	description:
		'Develops the calculus of functions of two or three variables: partial derivatives (first and higher order), the chain rule, the gradient vector and directional derivatives (including the direction of most rapid increase), and double integration over rectangular and general (Type I / Type II) regions for areas and volumes.',
	topics: [
		'Functions of two and three variables',
		'First-order partial derivatives',
		'Higher-order (second-order) partial derivatives',
		'The chain rule (Case 1 and Case 2)',
		'The gradient vector ∇f',
		'Directional derivatives',
		'Direction of most rapid increase',
		'Double integrals over regions',
		'Type I and Type II regions',
		'Areas, volumes and reversing the order'
	]
};

export const m14Cards: CardData[] = [
	{
		id: 'w14-c01',
		type: 'concept',
		front: 'What is a function of two variables z = f(x, y)?',
		back: 'A rule that assigns to each point (x, y) a unique value z. A similar definition holds for functions of three variables f(x, y, z) defined on points in 3-dimensional space.',
		hint: 'Each input point gives one output value.'
	},
	{
		id: 'w14-c02',
		type: 'concept',
		front: 'What is the domain of a function f(x, y)?',
		back: 'The largest possible set D in the xy-plane on which f is defined. The range is the set of all real values f(x, y) as (x, y) varies over the domain D.'
	},
	{
		id: 'w14-c03',
		type: 'list',
		front: 'Give examples of physical quantities that are functions of several variables.',
		back: [
			'Temperature',
			'Pressure',
			'Density',
			'Electric field',
			'Magnetic field'
		],
		hint: 'They vary throughout space (and often time).'
	},
	{
		id: 'w14-c04',
		type: 'concept',
		front: 'How is the partial derivative ∂f/∂x of f(x, y) computed?',
		back: 'Treat y as a constant and differentiate f(x, y) with respect to x using the usual single-variable rules. Likewise ∂f/∂y is found by treating x as a constant and differentiating with respect to y.',
		hint: 'Freeze the other variable, then differentiate as normal.'
	},
	{
		id: 'w14-c05',
		type: 'concept',
		front: 'How is the symbol ∂ pronounced, and what does ∂f/∂x represent?',
		back: 'The symbol ∂ is pronounced "del". ∂f/∂x is the rate of change of f(x, y) in the (positive) x direction.'
	},
	{
		id: 'w14-c06',
		type: 'concept',
		front: 'Write the limit definition of the partial derivative ∂f/∂x at the point (a, b).',
		back: '∂f/∂x (a, b) = lim(h→0) [ f(a + h, b) − f(a, b) ] / h. Only x is changed by h; b is held fixed.',
		hint: 'It is the single-variable derivative limit with y held at b.'
	},
	{
		id: 'w14-c07',
		type: 'concept',
		front: 'For f(x, y) = 4x³y − 2y⁵, find ∂f/∂x and ∂f/∂y.',
		back: '∂f/∂x = 12x²y (treating y constant). ∂f/∂y = 4x³ − 10y⁴ (treating x constant).'
	},
	{
		id: 'w14-c08',
		type: 'list',
		front: 'What are the four second-order partial derivatives of f(x, y), and how are they written in subscript notation?',
		back: [
			'∂²f/∂x² = f_xx (differentiate twice with respect to x)',
			'∂²f/∂y² = f_yy (differentiate twice with respect to y)',
			'∂²f/∂x∂y = f_yx (first ∂/∂y, then ∂/∂x)',
			'∂²f/∂y∂x = f_xy (first ∂/∂x, then ∂/∂y)'
		],
		hint: 'Each first-order partial is itself a function of x and y.'
	},
	{
		id: 'w14-c09',
		type: 'concept',
		front: 'What useful equality holds for the mixed second-order partial derivatives?',
		back: 'For the functions met in this course the mixed partials are equal: ∂²f/∂y∂x = ∂²f/∂x∂y. The order of differentiation does not matter.',
		hint: 'Differentiating x-then-y gives the same result as y-then-x.'
	},
	{
		id: 'w14-c10',
		type: 'concept',
		front: 'What is Laplace’s equation for a function z(x, y)?',
		back: '∂²z/∂x² + ∂²z/∂y² = 0. A function satisfying it (for example z = arctan(y/x)) is called harmonic.'
	},
	{
		id: 'w14-c11',
		type: 'concept',
		front: 'State the chain rule (Case 1) for w = w(x, y) where x = x(t) and y = y(t).',
		back: 'w depends on the single variable t through x and y, so dw/dt = (∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt).',
		hint: 'One independent variable t → use total derivative dw/dt.'
	},
	{
		id: 'w14-c12',
		type: 'concept',
		front: 'State the chain rule (Case 2) for w = w(x, y) where x = x(u, v) and y = y(u, v).',
		back: '∂w/∂u = (∂w/∂x)(∂x/∂u) + (∂w/∂y)(∂y/∂u) and ∂w/∂v = (∂w/∂x)(∂x/∂v) + (∂w/∂y)(∂y/∂v).',
		hint: 'Two independent variables u, v → use partial derivatives.'
	},
	{
		id: 'w14-c13',
		type: 'concept',
		front: 'How does the chain rule extend when w = w(x, y, z) with x, y, z each functions of t?',
		back: 'Add one term per variable: dw/dt = (∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt) + (∂w/∂z)(dz/dt).'
	},
	{
		id: 'w14-c14',
		type: 'concept',
		front: 'After applying the chain rule, what final step is usually required?',
		back: 'Substitute the parametrisation back in (e.g. x = t cos t, y = t sin t, z = 4t) so the answer is expressed in terms of the independent variable(s) only.',
		hint: 'Re-express x, y, z in terms of t (or u, v).'
	},
	{
		id: 'w14-c15',
		type: 'concept',
		front: 'Define the gradient vector ∇f of a differentiable function f(x, y).',
		back: '∇f(a, b) = ∂f/∂x (a, b) i + ∂f/∂y (a, b) j. It is a vector built from the partial derivatives evaluated at the point.',
		hint: 'Partials become the i and j components.'
	},
	{
		id: 'w14-c16',
		type: 'concept',
		front: 'Write the gradient ∇f for a function of three variables f(x, y, z).',
		back: '∇f = ∂f/∂x i + ∂f/∂y j + ∂f/∂z k.'
	},
	{
		id: 'w14-c17',
		type: 'concept',
		front: 'Define the directional derivative of f in the direction of a vector u.',
		back: 'df/du = ∇f · û, the dot product of the gradient with the UNIT vector û in the direction of u.',
		hint: 'Gradient dotted with the unit direction vector.'
	},
	{
		id: 'w14-c18',
		type: 'concept',
		front: 'Why must you use the unit vector û (not u) when computing a directional derivative?',
		back: 'The directional derivative measures the rate of change per unit distance in the chosen direction. Dividing u by its magnitude (û = u/|u|) removes the influence of the length of u so only its direction matters.'
	},
	{
		id: 'w14-c19',
		type: 'concept',
		front: 'Using df/du = |∇f| cos θ, where θ is the angle between ∇f and u, what is the maximum directional derivative?',
		back: 'cos θ is largest (= 1) when θ = 0, so the maximum directional derivative at a point equals |∇f| and occurs in the direction of ∇f itself.',
		hint: 'Steepest ascent is along the gradient.'
	},
	{
		id: 'w14-c20',
		type: 'concept',
		front: 'In which direction does a function increase most rapidly, and most rapidly decrease?',
		back: 'It increases most rapidly in the direction of the gradient ∇f (max rate |∇f|), and decreases most rapidly in the direction of −∇f (min rate −|∇f|).'
	},
	{
		id: 'w14-c21',
		type: 'concept',
		front: 'For a temperature field T(x, y, z), how do you find the direction of most rapid temperature increase at a point?',
		back: 'Compute the gradient ∇T = ∂T/∂x i + ∂T/∂y j + ∂T/∂z k and evaluate it at the point. The temperature increases most rapidly in the direction of that ∇T vector.'
	},
	{
		id: 'w14-c22',
		type: 'list',
		front: 'List the steps to compute a directional derivative of f at a point P in the direction of a vector u.',
		back: [
			'Find the gradient ∇f (the partial derivatives)',
			'Evaluate ∇f at the point P',
			'Find the unit vector û = u / |u|',
			'Take the dot product: df/du = ∇f(P) · û'
		]
	},
	{
		id: 'w14-c23',
		type: 'concept',
		front: 'What does a double integral ∬_R f(x, y) dA represent geometrically when f(x, y) ≥ 0?',
		back: 'The volume under the surface S (the graph of z = f(x, y)) and above the region R in the xy-plane. It generalises the area-under-a-curve idea of a single integral.',
		hint: 'Single integral → area; double integral → volume.'
	},
	{
		id: 'w14-c24',
		type: 'concept',
		front: 'How is the area element dA written, and what is the idea behind it?',
		back: 'dA = dx dy. The volume is sliced into elements of base area ΔA ≈ Δx Δy and height f(x, y), so ΔV ≈ f(x, y) Δx Δy; summing and taking the limit gives V = ∬_R f(x, y) dA.'
	},
	{
		id: 'w14-c25',
		type: 'list',
		front: 'Give two physical applications of a double integral besides volume.',
		back: [
			'Total force on a plane wall retaining a fluid: F = ∬_R p(x, y) dA (p is pressure)',
			'Mass of a plane region: M = ∬_R σ(x, y) dA (σ is the density / mass per unit area)'
		]
	},
	{
		id: 'w14-c26',
		type: 'concept',
		front: 'What is a Type I region, and how is the double integral set up over it?',
		back: 'A region where vertical lines cross the boundary at most twice, bounded below by y = b(x) and above by y = u(x) for a ≤ x ≤ b. Integrate first in y (from b(x) to u(x)), then in x: ∬_R f dA = ∫(x=a..b) ( ∫(y=b(x)..u(x)) f(x, y) dy ) dx.',
		hint: 'Inner limits depend on x; outer limits are constants.'
	},
	{
		id: 'w14-c27',
		type: 'concept',
		front: 'What is a Type II region, and how is the double integral set up over it?',
		back: 'A region where horizontal lines cross the boundary at most twice, bounded on the left by x = l(y) and on the right by x = r(y) for a ≤ y ≤ b. Integrate first in x (from l(y) to r(y)), then in y: ∬_R f dA = ∫(y=a..b) ( ∫(x=l(y)..r(y)) f(x, y) dx ) dy.',
		hint: 'Inner limits depend on y; outer limits are constants.'
	},
	{
		id: 'w14-c28',
		type: 'concept',
		front: 'How do you evaluate an inner integral of a double integral?',
		back: 'Integrate with respect to the inner variable while treating the other variable as a constant, then substitute the (possibly variable) limits — exactly the reverse of partial differentiation.'
	},
	{
		id: 'w14-c29',
		type: 'concept',
		front: 'How can a double integral be used to find the area of a region R?',
		back: 'Integrate the constant function 1 over the region: A = ∬_R 1 dA. For example, the area between y = 4 and y = x² is ∫(x=−2..2) ( ∫(y=x²..4) 1 dy ) dx = 32/3.',
		hint: 'Set the integrand to 1.'
	},
	{
		id: 'w14-c30',
		type: 'concept',
		front: 'When and why would you reverse the order of integration in a double integral?',
		back: 'When the inner integral is impossible or awkward in the given order (e.g. ∫ cos(x⁵) dx has no elementary antiderivative). Re-describe the SAME region R with the variables swapped (Type I ↔ Type II) so the inner integral becomes solvable.',
		hint: 'Swap dx dy ↔ dy dx by re-reading the region’s limits.'
	},
	{
		id: 'w14-c31',
		type: 'concept',
		front: 'For the curves y = 4x and y = x² meeting y = 4, how is the bounding Type II region described?',
		back: 'On the left by x = y/4 and on the right by x = √y, as y varies between 0 and 4. (Solving y = 4x gives x = y/4; solving y = x² gives x = √y.)'
	}
];

export const m14Quiz: QuizData[] = [
	{
		id: 'w14-q01',
		type: 'multiple-choice',
		question: 'To find the partial derivative ∂f/∂x of f(x, y), what do you do with the variable y?',
		options: [
			'Treat y as a constant',
			'Set y equal to zero',
			'Differentiate y as well',
			'Replace y with x'
		],
		correctIndex: 0,
		explanation:
			'∂f/∂x is found by treating y as a constant and differentiating f as if it were a function of x alone, using the usual single-variable rules.'
	},
	{
		id: 'w14-q02',
		type: 'multiple-choice',
		question: 'For f(x, y) = 4x³y − 2y⁵, what is ∂f/∂y?',
		options: ['4x³ − 10y⁴', '12x²y', '4x³ − 2y⁵', '12x²y − 10y⁴'],
		correctIndex: 0,
		explanation:
			'Treating x as a constant: ∂/∂y(4x³y) = 4x³ and ∂/∂y(−2y⁵) = −10y⁴, so ∂f/∂y = 4x³ − 10y⁴.'
	},
	{
		id: 'w14-q03',
		type: 'fill-blank',
		question: 'For f(x, y) = 4x³y − 2y⁵, write ∂f/∂x.',
		answer: '12x^2y',
		acceptableAnswers: ['12x^2y', '12x^2 y', '12(x^2)y', '12x²y', '12x²y', '12 x^2 y'],
		explanation:
			'Treating y as a constant: ∂/∂x(4x³y) = 12x²y and ∂/∂x(−2y⁵) = 0, so ∂f/∂x = 12x²y.'
	},
	{
		id: 'w14-q04',
		type: 'multiple-choice',
		question: 'Which statement about the mixed second-order partial derivatives is true for the functions in this course?',
		options: [
			'∂²f/∂x∂y = ∂²f/∂y∂x',
			'∂²f/∂x∂y = −∂²f/∂y∂x',
			'∂²f/∂x∂y is always zero',
			'They can never be equal'
		],
		correctIndex: 0,
		explanation:
			'The mixed partials are equal: differentiating x-then-y gives the same result as y-then-x, so ∂²f/∂x∂y = ∂²f/∂y∂x.'
	},
	{
		id: 'w14-q05',
		type: 'multiple-choice',
		question: 'If w = w(x, y) where x = x(t) and y = y(t), the chain rule gives dw/dt =',
		options: [
			'(∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt)',
			'(∂w/∂x)(∂w/∂y)',
			'(∂w/∂x) + (∂w/∂y)',
			'(dw/dx)(dw/dy)(dt)'
		],
		correctIndex: 0,
		explanation:
			'This is Case 1 of the chain rule: one independent variable t, so dw/dt = (∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt).'
	},
	{
		id: 'w14-q06',
		type: 'multiple-choice',
		question: 'The gradient vector of f(x, y, z) is given by:',
		options: [
			'∇f = ∂f/∂x i + ∂f/∂y j + ∂f/∂z k',
			'∇f = ∂f/∂x + ∂f/∂y + ∂f/∂z',
			'∇f = f(x) i + f(y) j + f(z) k',
			'∇f = ∂²f/∂x² i + ∂²f/∂y² j + ∂²f/∂z² k'
		],
		correctIndex: 0,
		explanation:
			'The gradient collects the first-order partial derivatives as vector components: ∇f = ∂f/∂x i + ∂f/∂y j + ∂f/∂z k.'
	},
	{
		id: 'w14-q07',
		type: 'multiple-choice',
		question: 'The directional derivative of f in the direction of a vector u is computed as:',
		options: ['∇f · û', '∇f × û', '∇f · u', '|∇f| · |u|'],
		correctIndex: 0,
		explanation:
			'df/du = ∇f · û, the dot product of the gradient with the UNIT vector û = u/|u|.'
	},
	{
		id: 'w14-q08',
		type: 'multiple-choice',
		question: 'At a given point, in which direction does a function increase most rapidly?',
		options: [
			'In the direction of ∇f',
			'In the direction of −∇f',
			'Perpendicular to ∇f',
			'In any direction equally'
		],
		correctIndex: 0,
		explanation:
			'Since df/du = |∇f| cos θ is largest when θ = 0, the maximum rate of increase, equal to |∇f|, occurs in the direction of the gradient ∇f.'
	},
	{
		id: 'w14-q09',
		type: 'multiple-choice',
		question: 'For F(x, y, z) = x² + 3xyz − y², the gradient ∇F evaluated at P(1, −2, 5) is −28i + 19j − 6k. What is the directional derivative of F at P in the direction of 2i + 2j + k? (|2i + 2j + k| = 3)',
		options: ['−8', '−28', '19', '−6'],
		correctIndex: 0,
		explanation:
			'df/du = ∇F · û = (−28i + 19j − 6k) · (1/3)(2i + 2j + k) = (1/3)(−56 + 38 − 6) = (1/3)(−24) = −8 (lecture Example 2).'
	},
	{
		id: 'w14-q10',
		type: 'multiple-choice',
		question: 'For f(x, y, z) = 1 + sin(x + 2y − z), the directional derivative at P(π/6, π/6, −π/6) in the direction of i + 2j + 2k is (tutorial Q1):',
		options: ['−1/2', '1/2', '−2', '0'],
		correctIndex: 0,
		explanation:
			'∇f = cos(x+2y−z)(i + 2j − k); at P, cos(2π/3) = −1/2 gives ∇f = −½i − j + ½k. With û = (1/3)(i + 2j + 2k): df/du = (−½ − 2 + 1)/3 = −½ (verified in the solution).'
	},
	{
		id: 'w14-q11',
		type: 'multiple-choice',
		question: 'Geometrically, when f(x, y) ≥ 0 the double integral ∬_R f(x, y) dA represents:',
		options: [
			'The volume under the surface z = f(x, y) above R',
			'The slope of the surface at R',
			'The arc length of the boundary of R',
			'The perimeter of the region R'
		],
		correctIndex: 0,
		explanation:
			'Just as ∫ f(x) dx is the area under a curve, ∬_R f(x, y) dA is the volume under the surface z = f(x, y) and above the region R.'
	},
	{
		id: 'w14-q12',
		type: 'multiple-choice',
		question: 'For a Type I region (bounded below by y = b(x), above by y = u(x), with a ≤ x ≤ b), the correct order of integration is:',
		options: [
			'Inner integral in y (limits depend on x), outer integral in x (constant limits)',
			'Inner integral in x (limits depend on y), outer integral in y',
			'Both integrals in x',
			'The order does not matter and both limits are constants'
		],
		correctIndex: 0,
		explanation:
			'A Type I region is integrated first in y from b(x) to u(x) (holding x constant), then in x from a to b: ∫(a..b) ( ∫(b(x)..u(x)) f dy ) dx.'
	},
	{
		id: 'w14-q13',
		type: 'fill-blank',
		question: 'Evaluate the double integral ∫(y=0..√π) ( ∫(x=y..√π) sin(x²) dx ) dy by reversing the order of integration (tutorial Q2). Region: 0 ≤ y ≤ x, 0 ≤ x ≤ √π.',
		answer: '1',
		acceptableAnswers: ['1', '1.0'],
		explanation:
			'Reversing: ∫(x=0..√π) ( ∫(y=0..x) sin(x²) dy ) dx = ∫(0..√π) x sin(x²) dx. With u = x², du = 2x dx, this is ½∫(0..π) sin u du = −½[cos u]₀^π = −½(−1 − 1) = 1.'
	},
	{
		id: 'w14-q14',
		type: 'multiple-choice',
		question: 'Why might you reverse the order of integration of a double integral such as ∫∫ cos(x⁵) dx dy?',
		options: [
			'The inner integral has no elementary antiderivative in the given order',
			'It always makes the region larger',
			'Reversing changes the value of the integral',
			'Double integrals can only be done in one fixed order'
		],
		correctIndex: 0,
		explanation:
			'∫ cos(x⁵) dx cannot be done directly. Re-describing the same region R with the variables swapped lets the inner integral be evaluated (e.g. integrating in y first leaves a solvable ½cos(x⁵)x⁴ in x). The value of the integral is unchanged.'
	}
];
