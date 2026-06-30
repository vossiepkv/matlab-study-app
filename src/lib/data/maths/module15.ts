import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m15Meta: ModuleMeta = {
	num: 15,
	title: 'Final Exam Revision',
	description:
		'Consolidates the whole semester for the final exam: vectors and the dot/cross products, differentiation techniques (product, quotient, chain, logarithmic, implicit), applications of derivatives (normals, related rates, optimisation, Newton’s method, small approximations), integration (standard forms, by parts, partial fractions, inverse-trig forms), areas and volumes of revolution, and functions of several variables (partial derivatives, gradient, directional derivative).',
	topics: [
		'Vectors: dot and cross products',
		'Logarithmic and implicit differentiation',
		'Normals, related rates and optimisation',
		'Newton’s method and small approximations',
		'Integration by parts and partial fractions',
		'Inverse-trig integral forms',
		'Areas and volumes of revolution',
		'Partial derivatives, gradient and directional derivative'
	]
};

export const m15Cards: CardData[] = [
	{
		id: 'w15-c01',
		type: 'concept',
		front: 'Dot product: definition and the component formula.',
		back: 'a · b = |a| |b| cos(θ) gives a scalar. In components, a · b = x₁x₂ + y₁y₂ + z₁z₂. The angle follows from cos(θ) = (a · b) / (|a| |b|).',
		hint: 'Magnitudes times cosθ, or sum of products of matching components.'
	},
	{
		id: 'w15-c02',
		type: 'concept',
		front: 'Cross product: what it produces and how the magnitude is found.',
		back: 'a × b is a vector perpendicular to both a and b with magnitude |a × b| = |a| |b| sin(θ). It is anti-commutative: a × b = −(b × a). Compute it via the 3×3 determinant with i, j, k in the top row.',
		hint: 'Result is a vector; uses sinθ, not cosθ.'
	},
	{
		id: 'w15-c03',
		type: 'list',
		front: 'Quick vector facts to memorise for the exam.',
		back: [
			'a · b = 0 ⇔ a ⊥ b (perpendicular)',
			'a × b = 0 ⇔ a ∥ b (parallel)',
			'Unit vector: â = a / |a|',
			'Area of parallelogram = |a × b|, triangle = ½|a × b|',
			'Scalar resolute of a onto b = a · b̂'
		]
	},
	{
		id: 'w15-c04',
		type: 'concept',
		front: 'When and how do you use logarithmic differentiation?',
		back: 'Use it when y is a product/quotient of many factors or has a variable in the exponent. Take ln of both sides, use log laws to split it up, differentiate implicitly (left side gives (1/y)y′), then multiply back by y.',
		hint: 'ln both sides, split with log laws, then y′ = y × (…).'
	},
	{
		id: 'w15-c05',
		type: 'concept',
		front: 'For y = a^x (constant base a), what is dy/dx?',
		back: 'd/dx(a^x) = a^x ln(a). It appears via logarithmic differentiation: ln(a^x) = x ln(a), so the derivative picks up a factor of ln(a). For example d/dx(3^x) = 3^x ln(3).',
		hint: 'Bring down ln of the base.'
	},
	{
		id: 'w15-c06',
		type: 'list',
		front: 'The three differentiation product/quotient/chain rules.',
		back: [
			'Product: (uv)′ = u′v + uv′',
			'Quotient: (u/v)′ = (u′v − uv′) / v²',
			'Chain: dy/dx = (dy/du)(du/dx)'
		],
		hint: 'These are on the formula sheet.'
	},
	{
		id: 'w15-c07',
		type: 'list',
		front: 'Standard derivatives you must know (from the formula sheet).',
		back: [
			'd/dx(xⁿ) = n xⁿ⁻¹',
			'd/dx(e^{ax}) = a e^{ax}',
			'd/dx(ln x) = 1/x',
			'd/dx(sin ax) = a cos ax, d/dx(cos ax) = −a sin ax',
			'd/dx(tan ax) = a sec² ax',
			'd/dx(sinh ax) = a cosh ax, d/dx(cosh ax) = a sinh ax',
			'd/dx(tan⁻¹ x) = 1/(1+x²)'
		]
	},
	{
		id: 'w15-c08',
		type: 'concept',
		front: 'Derivative of tanh: d/dx(tanh(ax)) = ?',
		back: 'd/dx(tanh(ax)) = a sech²(ax). Note the basic hyperbolic identity cosh²x − sinh²x = 1 and sinh(x) = ½(e^x − e⁻ˣ), cosh(x) = ½(e^x + e⁻ˣ).',
		hint: 'Like tan, but with sech².'
	},
	{
		id: 'w15-c09',
		type: 'concept',
		front: 'Derivative of an inverse-tangent with an inner linear function, e.g. d/dx(tan⁻¹(kx)).',
		back: 'By the chain rule: d/dx(tan⁻¹(u)) = u′/(1+u²). With u = kx this is k/(1 + k²x²). For example d/dx(tan⁻¹(3x)) = 3/(1 + 9x²).',
		hint: 'Outer 1/(1+u²), times u′.'
	},
	{
		id: 'w15-c10',
		type: 'concept',
		front: 'What is implicit differentiation and when do you use it?',
		back: 'When y is defined implicitly (mixed with x in an equation), differentiate both sides with respect to x, treating y as a function of x so every y term picks up a y′ (chain rule). Then solve algebraically for y′.',
		hint: 'Every d/dx of a y-term produces a y′.'
	},
	{
		id: 'w15-c11',
		type: 'concept',
		front: 'How do you find the equation of the normal to a curve at a point?',
		back: 'Find the tangent slope m_T = dy/dx at the point. The normal slope is m_N = −1/m_T (perpendicular). Then use y − y₁ = m_N(x − x₁) through the point (x₁, y₁).',
		hint: 'Normal slope is the negative reciprocal of the tangent slope.'
	},
	{
		id: 'w15-c12',
		type: 'concept',
		front: 'Outline the related-rates method (e.g. a draining tank).',
		back: 'Write the quantity equation (e.g. V = πr²h). Differentiate with respect to time t, keeping constants fixed, to relate the rates (dV/dt = πr² dh/dt). Substitute known values and solve for the unknown rate. A draining/decreasing quantity makes that rate negative.',
		hint: 'Differentiate the formula w.r.t. t, then plug in.'
	},
	{
		id: 'w15-c13',
		type: 'concept',
		front: 'State Newton’s method and how to set up a problem like x ln(x) = 4.',
		back: 'x_{n+1} = x_n − f(x_n)/f′(x_n). First rearrange to f(x) = 0 (here f(x) = x ln(x) − 4), find f′(x) = ln(x) + 1, then iterate from x₀. Requires f′(x_n) ≠ 0.',
		hint: 'Move everything to one side first to get f(x) = 0.'
	},
	{
		id: 'w15-c14',
		type: 'list',
		front: 'Steps for an optimisation (max/min) problem.',
		back: [
			'Write the quantity to optimise and use a constraint to reduce it to one variable',
			'Differentiate and set the derivative = 0 to find critical points',
			'Use the second derivative test: f″ < 0 → maximum, f″ > 0 → minimum',
			'Reject non-physical solutions, then state the optimal value'
		],
		hint: 'Constraint → one variable → derivative = 0 → second-derivative test.'
	},
	{
		id: 'w15-c15',
		type: 'concept',
		front: 'Small-approximation (differentials) formula and percentage-change use.',
		back: 'Δy ≈ (dy/dx) Δx. For a power relation like ω = √(k/I) = √k · I^(−1/2), differentiating gives δω/ω × 100 = −½ (δI/I × 100). So a percentage change in the base scales by the exponent.',
		hint: 'The exponent multiplies the percentage change.'
	},
	{
		id: 'w15-c16',
		type: 'list',
		front: 'Standard integrals you must know (from the formula sheet).',
		back: [
			'∫xⁿ dx = xⁿ⁺¹/(n+1) + c, n ≠ −1',
			'∫e^{ax} dx = (1/a)e^{ax} + c',
			'∫(1/x) dx = ln|x| + c',
			'∫sin(ax) dx = −(1/a)cos(ax) + c',
			'∫cos(ax) dx = (1/a)sin(ax) + c',
			'∫sec²(ax) dx = (1/a)tan(ax) + c'
		]
	},
	{
		id: 'w15-c17',
		type: 'concept',
		front: 'Integration by parts: formula and choosing u.',
		back: '∫u dv = uv − ∫v du. Choose u to be the part that simplifies when differentiated (e.g. ln x, or a polynomial) and dv to be the part you can integrate (e.g. e^{ax} dx). LIATE is a useful priority order for picking u.',
		hint: 'Pick u so that du is simpler; dv must be integrable.'
	},
	{
		id: 'w15-c18',
		type: 'concept',
		front: 'For ∫(x − 3)e^{5x} dx, what are the by-parts choices and result?',
		back: 'Let u = x − 3 (so du = dx) and dv = e^{5x} dx (so v = e^{5x}/5). Then ∫(x−3)e^{5x} dx = (x−3)e^{5x}/5 − e^{5x}/25 + c.',
		hint: 'Polynomial is u, exponential is dv.'
	},
	{
		id: 'w15-c19',
		type: 'concept',
		front: 'When do you use partial fractions, and how do you set them up?',
		back: 'Use it for a rational function with a factorable denominator. Factor the denominator, write a sum like A/(x−a) + B/(x−b), clear denominators, and solve for A and B by substituting convenient x-values. Each term then integrates to a logarithm.',
		hint: 'Factor the bottom, split into A/(…) + B/(…).'
	},
	{
		id: 'w15-c20',
		type: 'list',
		front: 'The three inverse-trig / inverse-tan integral forms (formula sheet).',
		back: [
			'∫dx/√(a²−x²) = sin⁻¹(x/a) + c, a > 0',
			'∫−dx/√(a²−x²) = cos⁻¹(x/a) + c, a > 0',
			'∫dx/(a²+x²) = (1/a)tan⁻¹(x/a) + c'
		],
		hint: 'Square root → sin⁻¹; sum of squares → (1/a)tan⁻¹.'
	},
	{
		id: 'w15-c21',
		type: 'concept',
		front: 'How do you handle ∫dx/√(c − kx²) to reach the sin⁻¹ form?',
		back: 'Factor the coefficient of x² out of the square root so it becomes √k · √((c/k) − x²). Then it matches √(a² − x²) with a² = c/k, giving (1/√k)sin⁻¹(x/a) + c.',
		hint: 'Pull the x² coefficient out so a² = constant/coefficient.'
	},
	{
		id: 'w15-c22',
		type: 'concept',
		front: 'How do you handle ∫dx/(c + kx²) to reach the tan⁻¹ form?',
		back: 'Factor k out: (1/k)∫dx/((c/k) + x²). This matches 1/(a² + x²) with a² = c/k, giving (1/k)(1/a)tan⁻¹(x/a) + c. Alternatively write kx² as (√k·x)² and treat a as the constant’s root.',
		hint: 'Same idea as the sin⁻¹ case but for a sum of squares.'
	},
	{
		id: 'w15-c23',
		type: 'list',
		front: 'Area and volume-of-revolution formulas (formula sheet).',
		back: [
			'Area under a curve (x-axis): A = ∫ₐᵇ y dx',
			'Area between curves: A = ∫ₐᵇ (y_top − y_bottom) dx',
			'Volume about the x-axis: V = π∫ₐᵇ y² dx',
			'Volume about the y-axis: V = π∫ₐᵇ x² dy'
		]
	},
	{
		id: 'w15-c24',
		type: 'concept',
		front: 'For the area between two curves, how do you set up the integral?',
		back: 'Find the intersection points by setting the curves equal (these are the limits a and b). Integrate (top curve − bottom curve) over [a, b]. Choosing top minus bottom keeps the area positive.',
		hint: 'Equate curves for the limits; integrate upper − lower.'
	},
	{
		id: 'w15-c25',
		type: 'concept',
		front: 'For a volume of revolution about the x-axis, what is the integrand?',
		back: 'V = π∫ₐᵇ y² dx, so you square the function first. If y = 1/√(g(x)) then y² = 1/g(x), which often becomes an inverse-trig or partial-fraction integral.',
		hint: 'Square y before integrating; remember the π.'
	},
	{
		id: 'w15-c26',
		type: 'concept',
		front: 'What is a partial derivative ∂z/∂x?',
		back: 'The derivative of z with respect to x while treating every other variable (e.g. y) as a constant. ∂z/∂y is the mirror image: differentiate w.r.t. y holding x constant.',
		hint: 'Hold the other variables fixed.'
	},
	{
		id: 'w15-c27',
		type: 'concept',
		front: 'How do product and chain rules combine in a partial derivative like z = e^{2xy} ln(x + 2y²)?',
		back: 'Treat it as a product u·v. For ∂z/∂x: differentiate e^{2xy} w.r.t. x → 2y e^{2xy} (chain rule), and ln(x+2y²) w.r.t. x → 1/(x+2y²). Combine with the product rule. For ∂z/∂y the inner derivatives change (e^{2xy} → 2x e^{2xy}, ln → 4y/(x+2y²)).',
		hint: 'Product rule outside, chain rule on each factor.'
	},
	{
		id: 'w15-c28',
		type: 'list',
		front: 'Second-order partial derivatives notation.',
		back: [
			'f_xx = ∂/∂x(∂f/∂x) = ∂²f/∂x²',
			'f_yy = ∂/∂y(∂f/∂y) = ∂²f/∂y²',
			'f_yx = ∂/∂x(∂f/∂y) = ∂²f/∂x∂y',
			'f_xy = ∂/∂y(∂f/∂x) = ∂²f/∂y∂x'
		],
		hint: 'For nice functions the mixed partials are equal.'
	},
	{
		id: 'w15-c29',
		type: 'concept',
		front: 'What is the gradient ∇f, and what does it represent?',
		back: '∇f = (∂f/∂x) i + (∂f/∂y) j + (∂f/∂z) k. It is a vector that points in the direction of greatest increase of f, and its components are the partial derivatives.',
		hint: 'Pack the partials into a vector.'
	},
	{
		id: 'w15-c30',
		type: 'concept',
		front: 'How do you compute a directional derivative df/du?',
		back: 'df/du = ∇f · û, where û = u/|u| is the unit vector in the given direction. Evaluate ∇f at the point first, normalise the direction, then take the dot product.',
		hint: 'Gradient dotted with the UNIT direction vector.'
	},
	{
		id: 'w15-c31',
		type: 'concept',
		front: 'Why must you normalise the direction vector in a directional derivative?',
		back: 'df/du measures the rate of change per unit distance in the chosen direction, so the direction vector must have length 1. If u = i + 2j − 2k then |u| = √(1+4+4) = 3, so û = (1/3)(i + 2j − 2k).',
		hint: '|u| = 3 for i + 2j − 2k.'
	},
	{
		id: 'w15-c32',
		type: 'list',
		front: 'The multivariable chain rule (formula sheet).',
		back: [
			'If w = f(x, y, z) with x, y, z functions of t: dw/dt = (∂w/∂x)(dx/dt) + (∂w/∂y)(dy/dt) + (∂w/∂z)(dz/dt)',
			'If x, y, z depend on u and v: ∂w/∂u and ∂w/∂v are sums of the corresponding products'
		],
		hint: 'Sum over each intermediate variable.'
	},
	{
		id: 'w15-c33',
		type: 'list',
		front: 'High-yield trig/algebra identities from the formula sheet.',
		back: [
			'sin²x + cos²x = 1, 1 + tan²x = sec²x',
			'sin(2x) = 2 sin x cos x, cos(2x) = 2cos²x − 1 = 1 − 2sin²x',
			'Quadratic roots: x = (−b ± √(b² − 4ac)) / (2a)',
			'Log laws: ln(mn) = ln m + ln n, ln(m/n) = ln m − ln n, ln(x^m) = m ln x'
		]
	},
	{
		id: 'w15-c34',
		type: 'concept',
		front: 'How do you find a maximum velocity from v = A sin(ωt)?',
		back: 'Differentiate: dv/dt = Aω cos(ωt). Set it to 0 for the turning point (cos(ωt) = 0 → ωt = π/2). Confirm a maximum with d²v/dt² < 0, then substitute the time back into v. For v = 0.8 sin(2t): max v = 0.8 cm/s at t = π/4.',
		hint: 'Set dv/dt = 0, check the second derivative.'
	}
];

export const m15Quiz: QuizData[] = [
	{
		id: 'w15-q01',
		type: 'multiple-choice',
		question: 'Using logarithmic differentiation on y = (e^{x²+1} · 3^x)/cos x, which bracket multiplies y to give y′?',
		options: [
			'2x + ln 3 + tan x',
			'2x + 3 + tan x',
			'2x + ln 3 − tan x',
			'x² + ln 3 + sec x'
		],
		correctIndex: 0,
		explanation:
			'ln y = (x²+1) + x ln 3 − ln(cos x). Differentiating: (1/y)y′ = 2x + ln 3 + tan x, so y′ = y(2x + ln 3 + tan x). (Sem 1, Q1a.)'
	},
	{
		id: 'w15-q02',
		type: 'multiple-choice',
		question: 'What is d/dx(tan⁻¹((3/2)x))?',
		options: ['6/(4 + 9x²)', '3/(1 + 9x²)', '1/(1 + (9/4)x²)', '(3/2)/(1 + x²)'],
		correctIndex: 0,
		explanation:
			'With u = (3/2)x: d/dx = (1/(1+u²))·(3/2) = (3/2)/(1 + (9/4)x²) = 6/(4 + 9x²). (Sem 1, Q1b.)'
	},
	{
		id: 'w15-q03',
		type: 'fill-blank',
		question:
			'For the curve x² + 2x − 2x³y² + 2y² − y = 1, the tangent slope at (1, 2) is found by implicit differentiation to be y′ = −20. What is the slope of the NORMAL at that point?',
		answer: '1/20',
		acceptableAnswers: ['1/20', '0.05', '1 / 20'],
		explanation:
			'The normal slope is the negative reciprocal: m_N = −1/m_T = −1/(−20) = 1/20. (Sem 1, Q2a; the normal is y = x/20 + 39/20.)'
	},
	{
		id: 'w15-q04',
		type: 'multiple-choice',
		question:
			'A cylindrical tank (radius 20 cm, V = πr²h) is drained at 25 cm³/sec. How fast is the water level dropping (dh/dt)?',
		options: [
			'−1/(16π) cm/s',
			'−25π cm/s',
			'−1/(25π) cm/s',
			'−20π cm/s'
		],
		correctIndex: 0,
		explanation:
			'dV/dt = πr² dh/dt ⇒ −25 = (20²)π dh/dt ⇒ dh/dt = −25/(400π) = −1/(16π) ≈ −0.0199 cm/s. (Sem 1, Q2b.)'
	},
	{
		id: 'w15-q05',
		type: 'fill-blank',
		question:
			'Newton’s method on x ln(x) = 4 with x₀ = 3.3 uses f(x) = x ln(x) − 4. What is f′(x)?',
		answer: 'ln(x) + 1',
		acceptableAnswers: ['ln(x) + 1', 'ln x + 1', 'lnx+1', '1 + ln(x)', '1 + ln x'],
		explanation:
			'By the product rule, f′(x) = ln(x) + x·(1/x) = ln(x) + 1. (Sem 1, Q3a; iterating gives x₁ ≈ 3.32737, x₂ ≈ 3.32732.)'
	},
	{
		id: 'w15-q06',
		type: 'multiple-choice',
		question:
			'Two nonnegative numbers sum to 9. The product of one and the square of the other (P = xy² with x = 9 − y) is maximised at which values?',
		options: ['x = 3, y = 6 (P = 108)', 'x = 6, y = 3 (P = 54)', 'x = 4.5, y = 4.5', 'x = 0, y = 9'],
		correctIndex: 0,
		explanation:
			'P = 9y² − y³, dP/dy = 18y − 3y² = 0 → y = 6 (y = 0 rejected), so x = 3. P″ = 18 − 6y = −18 < 0 confirms a max. P = 3·6² = 108. (Sem 1, Q3b.)'
	},
	{
		id: 'w15-q07',
		type: 'fill-blank',
		question:
			'Find the area bounded by y = −x² + 2x + 8 and the line y = 3x − 4. (They meet at x = −4 and x = 3; give the area to 3 decimal places.)',
		answer: '57.167',
		acceptableAnswers: ['57.167', '343/6', '57.1667', '57.17'],
		explanation:
			'A = ∫_{−4}^{3} ((−x²+2x+8) − (3x−4)) dx = ∫_{−4}^{3}(−x² − x + 12) dx = 343/6 ≈ 57.167 units². (Sem 1, Q4a.)'
	},
	{
		id: 'w15-q08',
		type: 'multiple-choice',
		question:
			'Evaluate ∫ 18/√(49 − 81x²) dx.',
		options: [
			'2 sin⁻¹((9/7)x) + c',
			'18 sin⁻¹((9/7)x) + c',
			'2 tan⁻¹((9/7)x) + c',
			'(1/9) sin⁻¹(7x) + c'
		],
		correctIndex: 0,
		explanation:
			'Factor 81 from the root: 18/9 ∫ dx/√((7/9)² − x²) = 2 sin⁻¹(x/(7/9)) + c = 2 sin⁻¹((9/7)x) + c. (Sem 1, Q5a.)'
	},
	{
		id: 'w15-q09',
		type: 'multiple-choice',
		question:
			'Using integration by parts, ∫₁² ln(x)/x² dx equals which exact value?',
		options: ['(1 − ln 2)/2', '(1 + ln 2)/2', 'ln 2 − 1', '(ln 2)/2'],
		correctIndex: 0,
		explanation:
			'With u = ln x, dv = x⁻² dx (v = −1/x): [−ln(x)/x]₁² + ∫₁² (1/x²) dx = −(ln 2)/2 + (−1/2 + 1) = (1 − ln 2)/2 ≈ 0.1534. (Sem 1, Q5b.)'
	},
	{
		id: 'w15-q10',
		type: 'multiple-choice',
		question:
			'Partial fractions split (3x + 5)/(x² + 5x − 36) over (x − 4)(x + 9). What are A and B in A/(x−4) + B/(x+9)?',
		options: [
			'A = 17/13, B = 22/13',
			'A = 22/13, B = 17/13',
			'A = 3, B = 5',
			'A = −3, B = 2'
		],
		correctIndex: 0,
		explanation:
			'3x + 5 = A(x+9) + B(x−4). At x = 4: 17 = 13A → A = 17/13. At x = −9: −22 = −13B → B = 22/13. (Sem 1, Q5c.)'
	},
	{
		id: 'w15-q11',
		type: 'fill-blank',
		question:
			'For f(x, y, z) = z cos y + xy e^z + x², the gradient at P(1, 0, 0) is ∇f = 2i + j + k. Find the directional derivative in the direction u = i + 2j − 2k.',
		answer: '2/3',
		acceptableAnswers: ['2/3', '0.667', '0.6667', '2 / 3'],
		explanation:
			'û = (1/3)(i + 2j − 2k), so df/du = ∇f · û = (1/3)(2·1 + 1·2 + 1·(−2)) = (1/3)(2) = 2/3. (Sem 1, Q6b.)'
	},
	{
		id: 'w15-q12',
		type: 'fill-blank',
		question:
			'Find the equation of the normal to x² − xy + y² − 7 = 0 at (−1, 2). The tangent slope there is m = 4/5 — give the normal’s equation in the form y = mx + c.',
		answer: 'y = -5/4 x + 3/4',
		acceptableAnswers: [
			'y = -5/4 x + 3/4',
			'y = -(5/4)x + 3/4',
			'y=-5/4x+3/4',
			'-5/4 x + 3/4',
			'y = -1.25x + 0.75'
		],
		explanation:
			'Implicit diff gives y′ = (y − 2x)/(2y − x); at (−1,2) that is 4/5. Normal slope = −5/4, so y − 2 = −5/4(x + 1) → y = −5/4 x + 3/4. (Sem 2, Q2a.)'
	},
	{
		id: 'w15-q13',
		type: 'multiple-choice',
		question:
			'A piston’s velocity is v = 0.8 sin(2t) cm/s. What is the maximum velocity and when does it first occur?',
		options: [
			'0.8 cm/s at t = π/4',
			'1.6 cm/s at t = π/2',
			'0.8 cm/s at t = π/2',
			'0.4 cm/s at t = π/4'
		],
		correctIndex: 0,
		explanation:
			'dv/dt = 1.6 cos(2t) = 0 → 2t = π/2 → t = π/4. d²v/dt² = −3.2 sin(2t) < 0 confirms a max. v = 0.8 sin(π/2) = 0.8 cm/s. (Sem 2, Q2b.)'
	},
	{
		id: 'w15-q14',
		type: 'multiple-choice',
		question:
			'ω = √(k/I) and the moment of inertia I increases by 8%. What is the approximate percentage change in ω?',
		options: ['−4%', '−8%', '+4%', '+8%'],
		correctIndex: 0,
		explanation:
			'ω = √k · I^(−1/2), so δω/ω × 100 = −½(δI/I × 100) = −½ × 8 = −4%. The negative exponent halves and flips the sign. (Sem 2, Q3b.)'
	},
	{
		id: 'w15-q15',
		type: 'fill-blank',
		question:
			'Evaluate ∫(x − 3)e^{5x} dx by parts (omit + c). Use the form (1/5)(x-3)e^(5x) - e^(5x)/25.',
		answer: '(1/5)(x-3)e^(5x) - e^(5x)/25',
		acceptableAnswers: [
			'(1/5)(x-3)e^(5x) - e^(5x)/25',
			'(x-3)e^(5x)/5 - e^(5x)/25',
			'(1/5)(x - 3)e^(5x) - e^(5x)/25',
			'(x-3)e^5x/5 - e^5x/25'
		],
		explanation:
			'u = x−3, dv = e^{5x} dx (v = e^{5x}/5): ∫ = (x−3)e^{5x}/5 − ∫ e^{5x}/5 dx = (x−3)e^{5x}/5 − e^{5x}/25 + c. (Sem 2, Q5a.)'
	},
	{
		id: 'w15-q16',
		type: 'multiple-choice',
		question: 'Evaluate ∫ 3/(9x² + 16) dx.',
		options: [
			'(1/4) tan⁻¹(3x/4) + c',
			'(3/4) tan⁻¹(3x/4) + c',
			'(1/4) sin⁻¹(3x/4) + c',
			'(3/16) tan⁻¹(x) + c'
		],
		correctIndex: 0,
		explanation:
			'3∫dx/((3x)² + 4²) matches 1/(a²+x²). With the inner 3x: = (3/4)(1/3)tan⁻¹(3x/4) + c = (1/4)tan⁻¹(3x/4) + c. (Sem 2, Q5c.)'
	}
];
