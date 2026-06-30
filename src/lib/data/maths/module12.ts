import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m12Meta: ModuleMeta = {
	num: 12,
	title: 'Integration (Part 3)',
	description:
		'Applications of integration: using the definite integral to find the area under a curve (with the x-axis and the y-axis), the area of a region between two curves, and the volumes of solids of revolution about the x-axis and y-axis. Finishes with numerical integration — the trapezoidal rule and Simpson’s rule for approximating definite integrals.',
	topics: [
		'Area under a curve with the x-axis',
		'Area enclosed with the y-axis',
		'Area between two curves',
		'Sketching and shading the required region',
		'Volumes of revolution about the x-axis',
		'Volumes of revolution about the y-axis',
		'Numerical integration: trapezoidal rule',
		'Numerical integration: Simpson’s rule'
	]
};

export const m12Cards: CardData[] = [
	{
		id: 'w12-c01',
		type: 'concept',
		front: 'What does the definite integral measure geometrically?',
		back: 'The definite integral gives a measure of the area bounded by the curve y = f(x), the x-axis and the lines x = a and x = b. A = ∫ₐᵇ f(x) dx.',
		hint: 'Area under the curve between two ordinates.'
	},
	{
		id: 'w12-c02',
		type: 'concept',
		front: 'What should you always do first when finding an area by integration?',
		back: 'Sketch a graph and shade the required area. This lets you read off the correct limits and see whether the region is above or below the axis (or between curves).',
		hint: 'Sketch before you integrate.'
	},
	{
		id: 'w12-c03',
		type: 'concept',
		front: 'Write the formula for the area bounded by y = f(x), the x-axis and the ordinates x = a and x = b.',
		back: 'Aₓ = ∫ₐᵇ y dx = ∫ₐᵇ f(x) dx, where a is the lower ordinate and b is the upper ordinate.'
	},
	{
		id: 'w12-c04',
		type: 'concept',
		front: 'Find the area bounded by the line y = 3x + 5, the x-axis and the ordinates x = 2 and x = 6.',
		back: 'A = ∫₂⁶ (3x + 5) dx = [(3/2)x² + 5x]₂⁶ = (54 + 30) − (6 + 10) = 68. (Check: it is a trapezium of area ½(11 + 23)×4 = 68.)',
		hint: 'Integrate term by term, then substitute the limits.'
	},
	{
		id: 'w12-c05',
		type: 'concept',
		front: 'Find the area bounded by the curve y = 16 − x², the coordinate axes and the line x = 4.',
		back: 'A = ∫₀⁴ (16 − x²) dx = [16x − x³/3]₀⁴ = (64 − 64/3) − 0 = 42⅔.',
		hint: 'Coordinate axes means the lower limit is x = 0.'
	},
	{
		id: 'w12-c06',
		type: 'concept',
		front: 'Why does symmetry help when finding the area under y = 3x² between x = −4 and x = 4?',
		back: 'The curve is symmetric about the y-axis, so A = ∫₋₄⁴ 3x² dx = 2∫₀⁴ 3x² dx = 2[x³]₀⁴ = 2(64) = 128. Using symmetry halves the work.',
		hint: 'Even function — double the half from 0 to 4.'
	},
	{
		id: 'w12-c07',
		type: 'concept',
		front: 'How do you find the area enclosed between a curve and the y-axis?',
		back: 'Rearrange y = f(x) into x = f⁻¹(y), then integrate with respect to y between the y-limits: A_y = ∫꜀ᵈ x dy, where c and d are the lower and upper y-values.',
		hint: 'Integrate x with respect to y.'
	},
	{
		id: 'w12-c08',
		type: 'list',
		front: 'Compare the area with the x-axis and the area with the y-axis.',
		back: [
			'Area with the x-axis: Aₓ = ∫ₐᵇ y dx (integrate y in terms of x)',
			'Area with the y-axis: A_y = ∫꜀ᵈ x dy (integrate x in terms of y)',
			'For the y-axis area you must first make x the subject of the equation',
			'The limits change from x-values (a, b) to y-values (c, d)'
		],
		hint: 'Swap which variable you integrate, and swap the limits.'
	},
	{
		id: 'w12-c09',
		type: 'concept',
		front: 'For y = x², find the area bounded by the curve, the y-axis and y = 16.',
		back: 'Make x the subject: x = √y. A_y = ∫₀¹⁶ √y dy = ∫₀¹⁶ y^(1/2) dy = [(2/3) y^(3/2)]₀¹⁶ = (2/3)(16^(3/2)) = (2/3)(64) = 42⅔.',
		hint: 'x = √y, then integrate from y = 0 to 16.'
	},
	{
		id: 'w12-c10',
		type: 'concept',
		front: 'For y = x² the x-axis area to x = 4 is 21⅓ and the y-axis area to y = 16 is 42⅔. How can you check these?',
		back: 'The two areas should fill the enclosing rectangle: Aₓ + A_y = 21⅓ + 42⅔ = 64 = 16 × 4, which is exactly the rectangle’s area.',
		hint: 'The two complementary areas add to the bounding rectangle.'
	},
	{
		id: 'w12-c11',
		type: 'concept',
		front: 'State the formula for the area between two curves y₁ = f(x) and y₂ = g(x).',
		back: 'If the two continuous curves do not intersect between x = a and x = b, the area between them is A = ∫ₐᵇ (g(x) − f(x)) dx = ∫ₐᵇ (y₂ − y₁) dx, where y₂ is the upper curve.',
		hint: 'Upper curve minus lower curve.'
	},
	{
		id: 'w12-c12',
		type: 'concept',
		front: 'Which curve goes first in the integrand for the area between two curves, and why?',
		back: 'The upper (top) curve minus the lower (bottom) curve: ∫ₐᵇ (y₂ − y₁) dx with y₂ > y₁. Taking top minus bottom guarantees a positive area (A > 0).',
		hint: 'Top minus bottom keeps it positive.'
	},
	{
		id: 'w12-c13',
		type: 'concept',
		front: 'Does it matter whether the region between two curves lies above or below the x-axis?',
		back: 'No. Using the difference (y₂ − y₁) means it does not matter if some or all of the required area is above or below the x-axis — the formula still gives the correct enclosed area.',
		hint: 'The difference cancels the position relative to the x-axis.'
	},
	{
		id: 'w12-c14',
		type: 'concept',
		front: 'How do you find the limits of integration for the area between two curves?',
		back: 'Find the points of intersection by setting the curves equal (y₁ = y₂) and solving for x. The x-coordinates of the intersection points become the lower and upper limits a and b.',
		hint: 'Set the two equations equal and solve.'
	},
	{
		id: 'w12-c15',
		type: 'concept',
		front: 'Find the points of intersection of y = x² + x − 6 and y = 2x.',
		back: 'Set equal: x² + x − 6 = 2x ⟹ x² − x − 6 = 0 ⟹ (x − 3)(x + 2) = 0, so x = 3 and x = −2. These are the limits of integration.',
		hint: 'Equate, move everything to one side, factorise.'
	},
	{
		id: 'w12-c16',
		type: 'concept',
		front: 'Find the area between y = x² + x − 6 and y = 2x.',
		back: 'A = ∫₋₂³ [(2x) − (x² + x − 6)] dx = ∫₋₂³ (−x² + x + 6) dx = [−x³/3 + x²/2 + 6x]₋₂³ = (−9 + 9/2 + 18) − (8/3 + 2 − 12) = 20⅚.',
		hint: 'Line minus parabola, limits −2 to 3.'
	},
	{
		id: 'w12-c17',
		type: 'concept',
		front: 'When a region crosses the x-axis or the curves cross each other, how do you set up the area?',
		back: 'Split the region at the crossing points into separate pieces, integrate each piece using (top − bottom) over its own interval, and add the (positive) results. Any piece computed as negative is added as its absolute value.',
		hint: 'Break into pieces and add positive areas.'
	},
	{
		id: 'w12-c18',
		type: 'concept',
		front: 'How is a solid (volume) of revolution formed?',
		back: 'Take the area bounded by the curve y = f(x) and the ordinates x = a and x = b, and rotate it 360° about the x-axis. It sweeps out a solid of revolution that encloses a volume.',
		hint: 'Spin the area a full turn about an axis.'
	},
	{
		id: 'w12-c19',
		type: 'concept',
		front: 'Explain the disc element used to derive the volume of revolution formula.',
		back: 'At a point P(x, y) the rotation forms a thin circular disc of cross-sectional area A(x) = πy² and width δx, so its volume is πy² δx. Summing all discs from x = a to x = b and letting δx → 0 gives the integral.',
		hint: 'Each slice is a disc: area πy² times thickness δx.'
	},
	{
		id: 'w12-c20',
		type: 'concept',
		front: 'State the formula for the volume of revolution about the x-axis.',
		back: 'V = π ∫ₐᵇ y² dx, where y = f(x) is the curve being rotated and a, b are the x-limits. You square the y expression before integrating.',
		hint: 'V = π ∫ y² dx.'
	},
	{
		id: 'w12-c21',
		type: 'concept',
		front: 'State the formula for the volume of revolution about the y-axis.',
		back: 'V = π ∫꜀ᵈ x² dy, where x is expressed in terms of y, and c, d are the y-limits. You square the x expression and integrate with respect to y.',
		hint: 'V = π ∫ x² dy.'
	},
	{
		id: 'w12-c22',
		type: 'concept',
		front: 'Use integration to prove the volume of a cylinder of radius r and height h is πr²h.',
		back: 'Rotate the line y = r about the x-axis from x = 0 to x = h: V = π ∫₀ʰ y² dx = π ∫₀ʰ r² dx = π[r²x]₀ʰ = πr²(h − 0) = πr²h.',
		hint: 'Rotate the horizontal line y = r.'
	},
	{
		id: 'w12-c23',
		type: 'concept',
		front: 'Use integration to prove the volume of a cone of radius r and height h is ⅓πr²h.',
		back: 'Rotate the line y = (r/h)x about the x-axis from x = 0 to x = h: V = π ∫₀ʰ (r²x²/h²) dx = π[r²x³/(3h²)]₀ʰ = (πr²/h²)(h³/3) = ⅓πr²h.',
		hint: 'Rotate y = mx with gradient m = r/h.'
	},
	{
		id: 'w12-c24',
		type: 'concept',
		front: 'Why might you need numerical (approximate) integration?',
		back: 'Some definite integrals exist (have a finite value) but cannot be expressed in terms of elementary functions — e.g. ∫₀¹ √(x³ + 1) dx and ∫₀¹ e^(−x²) dx. These must be evaluated by approximate methods such as the trapezoidal rule or Simpson’s rule.',
		hint: 'No elementary antiderivative exists.'
	},
	{
		id: 'w12-c25',
		type: 'concept',
		front: 'In numerical integration, how is the strip width h defined?',
		back: 'Divide the interval [a, b] into n equal subintervals (strips), each of width h = (b − a)/n. The end points are x₀ = a, x₁, x₂, …, xₙ = b, where xᵢ = a + ih.',
		hint: 'h = (b − a)/n.'
	},
	{
		id: 'w12-c26',
		type: 'concept',
		front: 'What is the idea behind the trapezoidal rule?',
		back: 'Divide [a, b] into n equal strips. On each strip f(x) is approximated by a straight line through the endpoints, so each strip is a trapezium. The area of each trapezium ≈ base × average height = (h/2)(yᵢ₋₁ + yᵢ), and summing these approximates the integral.',
		hint: 'Each strip is a trapezium.'
	},
	{
		id: 'w12-c27',
		type: 'concept',
		front: 'State the trapezoidal rule formula Tₙ.',
		back: 'Tₙ = (h/2)(y₀ + 2y₁ + 2y₂ + ⋯ + 2yₙ₋₂ + 2yₙ₋₁ + yₙ), where h = (b − a)/n. The first and last weights are 1; every interior weight is 2.',
		hint: 'Ends weight 1, interiors weight 2.'
	},
	{
		id: 'w12-c28',
		type: 'concept',
		front: 'What are the weights in the trapezoidal rule, and how does accuracy depend on n?',
		back: 'Each coefficient (weight) is 2, except the first and last which are 1. The greater the value of n (more strips), the finer the approximation.',
		hint: '1, 2, 2, …, 2, 1.'
	},
	{
		id: 'w12-c29',
		type: 'concept',
		front: 'What is the idea behind Simpson’s rule, and what restriction does it place on n?',
		back: 'Simpson’s rule fits a parabola through each pair of adjacent strips and uses the area under the parabola to approximate the area under f(x). Because strips are taken in pairs, n must be an even number of strips.',
		hint: 'Parabolas over pairs of strips ⟹ n even.'
	},
	{
		id: 'w12-c30',
		type: 'concept',
		front: 'State Simpson’s rule formula Sₙ.',
		back: 'Sₙ = (h/3)(y₀ + 4y₁ + 2y₂ + 4y₃ + 2y₄ + ⋯ + 2yₙ₋₂ + 4yₙ₋₁ + yₙ), where h = (b − a)/n and n is even.',
		hint: 'Factor is h/3, interior weights alternate 4 and 2.'
	},
	{
		id: 'w12-c31',
		type: 'list',
		front: 'What are the weights in Simpson’s rule?',
		back: [
			'First and last weights are 1',
			'Interior weights alternate between 4 and 2',
			'They start and finish with 4 (the odd-indexed points get 4)',
			'The even-indexed interior points get 2'
		],
		hint: '1, 4, 2, 4, 2, …, 4, 1.'
	},
	{
		id: 'w12-c32',
		type: 'concept',
		front: 'Why is Simpson’s rule generally preferred over the trapezoidal rule?',
		back: 'For the same number of strips, Simpson’s rule (based on parabolas) outperforms the trapezoidal rule (based on straight lines). In fact Simpson’s rule integrates every cubic exactly, for any value of n.',
		hint: 'Parabolas beat straight lines — exact for cubics.'
	},
	{
		id: 'w12-c33',
		type: 'concept',
		front: 'In a numerical integration table with columns x, f(x), w and wf(x), what does each part give?',
		back: 'f(x) is the y values; w is the weights; wf(x) is each weight times its y value; the Σ at the bottom is the sum of the wf(x) column. The estimate is then (h/2)Σ for the trapezoidal rule or (h/3)Σ for Simpson’s rule.',
		hint: 'Sum the wf(x) column, then multiply by h/2 or h/3.'
	}
];

export const m12Quiz: QuizData[] = [
	{
		id: 'w12-q01',
		type: 'multiple-choice',
		question: 'The definite integral ∫ₐᵇ f(x) dx gives the area bounded by the curve, the x-axis and which lines?',
		options: ['x = a and x = b', 'y = a and y = b', 'the y-axis only', 'x = 0 and y = 0'],
		correctIndex: 0,
		explanation:
			'The definite integral measures the area bounded by y = f(x), the x-axis and the ordinates x = a and x = b.'
	},
	{
		id: 'w12-q02',
		type: 'multiple-choice',
		question: 'Find the area bounded by the curve y = 16 − x², the coordinate axes and the line x = 4.',
		options: ['42⅔', '64', '21⅓', '48'],
		correctIndex: 0,
		explanation:
			'A = ∫₀⁴ (16 − x²) dx = [16x − x³/3]₀⁴ = (64 − 64/3) − 0 = 42⅔.'
	},
	{
		id: 'w12-q03',
		type: 'fill-blank',
		question: 'To find an area enclosed with the y-axis you integrate ___ with respect to y. (Give the formula in the form A = ∫ x dy.)',
		answer: 'A = ∫ x dy',
		acceptableAnswers: [
			'A = ∫ x dy',
			'∫ x dy',
			'x dy',
			'integral of x dy',
			'∫x dy',
			'A_y = ∫ x dy'
		],
		explanation:
			'For an area with the y-axis, make x the subject and integrate with respect to y: A_y = ∫꜀ᵈ x dy.'
	},
	{
		id: 'w12-q04',
		type: 'multiple-choice',
		question: 'Which expression correctly gives the area between two curves where y₂ is the upper curve?',
		options: [
			'∫ₐᵇ (y₂ − y₁) dx',
			'∫ₐᵇ (y₁ − y₂) dx',
			'∫ₐᵇ (y₁ + y₂) dx',
			'∫ₐᵇ y₁ y₂ dx'
		],
		correctIndex: 0,
		explanation:
			'The area between two curves is ∫ₐᵇ (y₂ − y₁) dx — the upper curve minus the lower curve, which keeps the result positive.'
	},
	{
		id: 'w12-q05',
		type: 'multiple-choice',
		question: 'The curve y = x² + x − 6 and the line y = 2x intersect at which x-values?',
		options: ['x = −2 and x = 3', 'x = −3 and x = 2', 'x = 0 and x = 6', 'x = −2 and x = −3'],
		correctIndex: 0,
		explanation:
			'Set x² + x − 6 = 2x ⟹ x² − x − 6 = 0 ⟹ (x − 3)(x + 2) = 0, giving x = −2 and x = 3.'
	},
	{
		id: 'w12-q06',
		type: 'fill-blank',
		question: 'Find the area bounded between y = x² + x − 6 and y = 2x. (Give as a mixed number, e.g. 20 5/6.)',
		answer: '20 5/6',
		acceptableAnswers: ['20 5/6', '20⅚', '20.833', '20.8333', '125/6', '20 5/6 units^2'],
		explanation:
			'A = ∫₋₂³ (−x² + x + 6) dx = [−x³/3 + x²/2 + 6x]₋₂³ = (−9 + 9/2 + 18) − (8/3 + 2 − 12) = 20⅚.'
	},
	{
		id: 'w12-q07',
		type: 'multiple-choice',
		question: 'What is the formula for the volume of revolution when the area under y = f(x) is rotated about the x-axis?',
		options: ['V = π ∫ₐᵇ y² dx', 'V = π ∫ₐᵇ y dx', 'V = 2π ∫ₐᵇ y dx', 'V = π ∫ₐᵇ x² dx'],
		correctIndex: 0,
		explanation:
			'Each slice is a disc of area πy² and thickness δx, so summing gives V = π ∫ₐᵇ y² dx.'
	},
	{
		id: 'w12-q08',
		type: 'fill-blank',
		question: 'A volume of revolution about the y-axis is found by squaring x and integrating with respect to y. Write the formula in the form V = π ∫ x² dy.',
		answer: 'V = π ∫ x² dy',
		acceptableAnswers: [
			'V = π ∫ x² dy',
			'π ∫ x² dy',
			'V = pi ∫ x^2 dy',
			'pi integral x^2 dy',
			'V = π ∫ x^2 dy'
		],
		explanation:
			'Rotating about the y-axis: each disc has area πx², so V = π ∫꜀ᵈ x² dy (with x written in terms of y).'
	},
	{
		id: 'w12-q09',
		type: 'multiple-choice',
		question: 'Find the volume when the area bounded by y = 4cos(2x), the coordinate axes and x = π/8 is rotated about the x-axis.',
		options: ['(π² + 2π) units³', '8π units³', '(π + 2) units³', '4π² units³'],
		correctIndex: 0,
		explanation:
			'V = π ∫₀^(π/8) 16cos²(2x) dx = 8π ∫₀^(π/8) (1 + cos4x) dx = 8π[x + sin4x/4]₀^(π/8) = 8π(π/8 + 1/4) = (π² + 2π) units³ (tutorial Q2b).'
	},
	{
		id: 'w12-q10',
		type: 'multiple-choice',
		question: 'For numerical integration with n equal strips on [a, b], the strip width h is:',
		options: ['(b − a)/n', '(a − b)/n', 'n/(b − a)', '(b − a)·n'],
		correctIndex: 0,
		explanation:
			'The interval [a, b] is divided into n equal strips each of width h = (b − a)/n.'
	},
	{
		id: 'w12-q11',
		type: 'multiple-choice',
		question: 'In the trapezoidal rule Tₙ = (h/2)(y₀ + 2y₁ + ⋯ + 2yₙ₋₁ + yₙ), what are the weights?',
		options: [
			'1 for the first and last, 2 for every interior point',
			'2 for the first and last, 1 for every interior point',
			'all weights are 1',
			'alternating 4 and 2'
		],
		correctIndex: 0,
		explanation:
			'In the trapezoidal rule each interior weight is 2, while the first and last weights are 1.'
	},
	{
		id: 'w12-q12',
		type: 'multiple-choice',
		question: 'Which statement about Simpson’s rule is correct?',
		options: [
			'n must be even, and it integrates every cubic exactly',
			'n must be odd, and it only works for parabolas',
			'it uses straight lines on each strip',
			'the factor in front is h/2'
		],
		correctIndex: 0,
		explanation:
			'Simpson’s rule fits parabolas over pairs of strips, so n must be even. Remarkably it integrates every cubic exactly for any n, and its factor is h/3.'
	},
	{
		id: 'w12-q13',
		type: 'fill-blank',
		question: 'Using the trapezoidal rule with n = 4 strips and the weighted sum Σ = 30.375 for ∫₁² x³ dx (h = 1/4), compute T₄ = (h/2)Σ to 3 decimal places.',
		answer: '3.797',
		acceptableAnswers: ['3.797', '3.80', '3.8', '3.797 units', '30.375/8'],
		explanation:
			'T₄ = (h/2)Σ = (0.25/2)(30.375) = 30.375/8 = 3.797, which compares well with the exact value 3.75.'
	},
	{
		id: 'w12-q14',
		type: 'multiple-choice',
		question: 'What is the volume of a cone of radius r and height h, derived by rotating y = (r/h)x about the x-axis?',
		options: ['⅓πr²h', 'πr²h', '2πr²h', '⅓πrh²'],
		correctIndex: 0,
		explanation:
			'V = π ∫₀ʰ (r²x²/h²) dx = π[r²x³/(3h²)]₀ʰ = (πr²/h²)(h³/3) = ⅓πr²h.'
	}
];
