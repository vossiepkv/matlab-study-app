import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m1Meta: ModuleMeta = {
	num: 1,
	title: 'Understanding Units and Measurements',
	description:
		'The foundation topic: the three fundamental quantities and their SI units, prefixes and notation, dimensional analysis, significant figures, uncertainty and error propagation, coordinate systems and trigonometry, and the eight-step problem solving strategy used for the rest of the course.',
	topics: [
		'Why engineering science underpins every engineering discipline',
		'Theories and experiments — how physics works',
		'The three fundamental quantities: length, mass, time',
		'SI units and how the metre, kilogram and second are defined',
		'Other systems: CGS and US Customary (FPS)',
		'Prefixes as powers of ten',
		'Writing numbers in groups of three',
		'Structure of matter: molecules, atoms, nucleus, quarks',
		'Dimensional analysis and its limitation',
		'Significant figures for multiplication, division, addition and subtraction',
		'Rounding and unit conversion',
		'Estimates and order of magnitude',
		'Absolute and relative error',
		'Direct and indirect measurements',
		'Error propagation through sums, products, powers and roots',
		'Cartesian and plane polar coordinate systems',
		'Trigonometry review and degrees vs radians',
		'The eight-step problem solving strategy'
	]
};

export const m1Cards: CardData[] = [
	{
		id: 'w1-c01',
		type: 'concept',
		front: 'What is the goal of physics, and what is the status of any physical theory?',
		back: 'The goal is to develop theories based on experiments. A theory, usually expressed mathematically, describes how a system works and makes predictions; experiments check those predictions. Every theory is a work in progress.',
		hint: 'Theory makes a prediction, experiment checks it.'
	},
	{
		id: 'w1-c02',
		type: 'list',
		front: 'What are the three fundamental quantities of mechanics, and their SI units?',
		back: [
			'Length, symbol L, measured in metres (m)',
			'Mass, symbol M, measured in kilograms (kg)',
			'Time, symbol T, measured in seconds (s)'
		],
		hint: 'Every other quantity in mechanics is built from these three.'
	},
	{
		id: 'w1-c03',
		type: 'concept',
		front: 'How is the metre currently defined?',
		back: 'By the distance light travels in a vacuum during a given time. This also fixes the speed of light in a vacuum at 299 792 458 metres per second, which is approximately 3 times 10 to the power 8 metres per second.',
		hint: 'It is defined using the speed of light.'
	},
	{
		id: 'w1-c04',
		type: 'concept',
		front: 'How are the kilogram and the second defined?',
		back: 'The kilogram is defined as the mass of a specific cylinder kept at the International Bureau of Weights and Measures. The second is defined in terms of the oscillation of radiation from a caesium atom.',
		hint: 'One is a physical object, the other is an atomic oscillation.'
	},
	{
		id: 'w1-c05',
		type: 'concept',
		front: 'What does SI stand for, and when was it agreed?',
		back: 'SI stands for Systeme International. It was agreed in 1960 by an international committee, and it is the main system used in this course. Defining units lets everyone relate to the same fundamental amount.',
		hint: 'It is a French name, agreed in the 1960s.'
	},
	{
		id: 'w1-c06',
		type: 'list',
		front: 'Name the three systems of measurement and their length, mass and time units.',
		back: [
			'SI: metre, kilogram, second',
			'CGS (Gaussian): centimetre, gram, second — named for the first letters of its units',
			'US Customary (FPS): foot, slug, second'
		],
		hint: 'One of them is literally named after its own initials.'
	},
	{
		id: 'w1-c07',
		type: 'concept',
		front: 'Why is weight in pounds not the same thing as mass?',
		back: 'Weight and mass are different physical quantities with different units. Weight is a force, measured in newtons in SI. Mass is measured in kilograms. The US Customary system often uses weight in pounds instead of mass as its fundamental quantity.',
		hint: 'One of them is a force.'
	},
	{
		id: 'w1-c08',
		type: 'list',
		front: 'Give the powers of ten for nano, micro, milli, centi, kilo, mega and giga.',
		back: [
			'nano (n) is 10 to the power minus 9',
			'micro (mu) is 10 to the power minus 6',
			'milli (m) is 10 to the power minus 3',
			'centi (c) is 10 to the power minus 2',
			'kilo (k) is 10 to the power 3',
			'mega (M) is 10 to the power 6',
			'giga (G) is 10 to the power 9'
		],
		hint: 'Each prefix has a specific name, abbreviation and power of ten.'
	},
	{
		id: 'w1-c09',
		type: 'concept',
		front: 'How should numbers with more than three digits be written?',
		back: 'In groups of three digits separated by spaces, on both sides of the decimal point. So write 10 000 rather than 10,000, and 3.141 592 65 rather than 3.14159265.',
		hint: 'Spaces, not commas.'
	},
	{
		id: 'w1-c10',
		type: 'concept',
		front: 'What is dimensional analysis, and what is its one limitation?',
		back: 'It is a technique for checking whether an equation is correct. Dimensions can be treated as algebraic quantities — added, subtracted, multiplied and divided — and both sides of the equation must have the same dimensions. Its limitation is that it cannot give you numerical factors.',
		hint: 'It checks the form of an equation, not the numbers in front.'
	},
	{
		id: 'w1-c11',
		type: 'list',
		front: 'Give the dimensions of volume, speed and power.',
		back: [
			'Volume is length times width times height, so L cubed, with unit metres cubed',
			'Speed is distance divided by time, so L over T, with unit metres per second',
			'Power is energy divided by time, so M L squared over T cubed — since a joule is M L squared over T squared'
		],
		hint: 'Build each one from length, mass and time.'
	},
	{
		id: 'w1-c12',
		type: 'concept',
		front: 'Show that the equation v = v0 + at is dimensionally correct.',
		back: 'The dimensions of v and of v0 are both L over T. The dimensions of a times t are (L over T squared) times T, which is also L over T. All three terms have the same dimensions, so the equation is dimensionally correct.',
		hint: 'Work out each term separately, then compare.'
	},
	{
		id: 'w1-c13',
		type: 'concept',
		front: 'Which digits in a number are significant?',
		back: 'All non-zero digits are significant. Zeros are not significant when they only locate the decimal point — so 0.0075 has two significant figures. Writing the number in scientific notation as 7.5 times 10 to the power minus 3 removes any ambiguity.',
		hint: 'Ask whether a zero is carrying information or just holding a place.'
	},
	{
		id: 'w1-c14',
		type: 'concept',
		front: 'What is the significant figures rule for multiplication and division?',
		back: 'The result has the same number of significant figures as the least accurate factor — that is, the factor with the lowest number of significant figures.',
		hint: 'The weakest link sets the answer.'
	},
	{
		id: 'w1-c15',
		type: 'concept',
		front: 'What is the significant figures rule for addition and subtraction?',
		back: 'Round the result to the smallest number of decimal places of any term in the sum or difference.',
		hint: 'This rule counts decimal places, not significant figures.'
	},
	{
		id: 'w1-c16',
		type: 'concept',
		front: 'Why do you need to round calculator results, and do small discrepancies matter?',
		back: 'Calculators report many more digits than are significant, so results must be properly rounded. Slight discrepancies can be introduced both by rounding and by the order in which the algebraic steps are carried out. Minor discrepancies are expected and are not a problem in problem solving, though experimental work needs more rigorous methods.',
		hint: 'Expect small differences; do not chase them.'
	},
	{
		id: 'w1-c17',
		type: 'concept',
		front: 'How do you convert between units, and why does the method work?',
		back: 'Multiply by a conversion factor written as a fraction, arranged so the unwanted units cancel. Units can be treated like algebraic quantities that cancel each other. For example, 15.0 inches times (2.54 cm over 1 inch) equals 38.1 cm.',
		hint: 'Treat the units as algebra and let them cancel.'
	},
	{
		id: 'w1-c18',
		type: 'concept',
		front: 'What is an order of magnitude, and why bother estimating?',
		back: 'The order of magnitude is the power of ten that applies to an approximation based on a set of assumptions, which you may need to modify if you want more precision. Estimates give useful approximate answers when an exact one is difficult or impossible, and they serve as a partial check on exact calculations.',
		hint: 'It is the power of ten, and it is a sanity check.'
	},
	{
		id: 'w1-c19',
		type: 'concept',
		front: 'How is a measured result expressed together with its uncertainty?',
		back: 'As X equals X average, plus or minus delta X, where delta X is the absolute error rounded to one significant figure. This defines the range from X average minus delta X, up to X average plus delta X.',
		hint: 'The plus-or-minus defines a range, not a single value.'
	},
	{
		id: 'w1-c20',
		type: 'concept',
		front: 'What is relative error, and what does it define?',
		back: 'Relative error is delta X divided by X average, times 100 percent. It defines the accuracy of the measurement, and it is calculated after the absolute error.',
		hint: 'It is the error as a percentage of the value.'
	},
	{
		id: 'w1-c21',
		type: 'concept',
		front: 'For a direct measurement, how do you find the absolute error?',
		back: 'The absolute error is the largest of two things: the accuracy of the measuring device, and the statistical uncertainty due to random errors. You take whichever is bigger.',
		hint: 'Take the larger of the two, not the sum.'
	},
	{
		id: 'w1-c22',
		type: 'list',
		front: 'What is an indirect measurement? Give examples.',
		back: [
			'An indirect measurement is one where the results of measurements are used to calculate another value',
			'Speed equals distance divided by time',
			'Density equals mass divided by volume',
			'Volume equals length times width times height',
			'Total force F equals F1 plus F2'
		],
		hint: 'You measure some things, then calculate another.'
	},
	{
		id: 'w1-c23',
		type: 'concept',
		front: 'How does error propagate through X = A + B, or X = A − B?',
		back: 'Delta X equals delta A plus delta B. The absolute error of the result is the sum of the absolute errors of the measurements — and this is true for subtraction as well as addition.',
		hint: 'Absolute errors add, even when the quantities subtract.'
	},
	{
		id: 'w1-c24',
		type: 'concept',
		front: 'How does error propagate through X = A × B, or X = A / B?',
		back: 'Delta X over X equals delta A over A, plus delta B over B. The relative error of the result is the sum of the relative errors. Rearranged, delta X equals X times the quantity (delta A over A plus delta B over B).',
		hint: 'Here it is the relative errors that add.'
	},
	{
		id: 'w1-c25',
		type: 'concept',
		front: 'How does error propagate through X = A to the power n, and through X = the square root of A?',
		back: 'Delta X over X equals n times delta A over A. For the particular case where X is the square root of A, n is one half, so delta X over X equals one half of delta A over A.',
		hint: 'The power comes out as a multiplier on the relative error.'
	},
	{
		id: 'w1-c26',
		type: 'list',
		front: 'A pendulum has l = 85.6 ± 0.1 cm and g = 9.80 ± 0.01 m/s². Find its period and uncertainty using T = 2π√(l/g).',
		back: [
			'Convert to SI first: l is 0.856 plus or minus 0.001 metres',
			'Period: T equals 2 pi times the square root of (0.856 divided by 9.80), which is 1.857 seconds',
			'Relative error: one half of (0.001 over 0.856 plus 0.01 over 9.80), which is 0.0011',
			'Absolute error: delta T equals 1.857 times 0.0011, which is 0.0020 seconds',
			'Final answer: T equals 1.857 plus or minus 0.002 seconds'
		],
		hint: 'Convert units first, and remember the one half from the square root.'
	},
	{
		id: 'w1-c27',
		type: 'list',
		front: 'How are points labelled in the Cartesian and plane polar coordinate systems?',
		back: [
			'Cartesian, also called rectangular: points are labelled (x, y). Positive x is usually to the right of the origin and positive y is usually upward',
			'Plane polar: points are labelled (r, theta), where r is the distance from the origin and theta is the angle',
			'Positive angles are measured counter-clockwise from the reference line, which is usually the positive x axis'
		],
		hint: 'One uses two distances, the other a distance and an angle.'
	},
	{
		id: 'w1-c28',
		type: 'concept',
		front: 'How do you convert between rectangular and polar coordinates?',
		back: 'Polar to rectangular: x equals r cos theta, and y equals r sin theta. Rectangular to polar: use Pythagoras to find r, since r squared equals x squared plus y squared, and use the inverse tangent of y over x to find the angle.',
		hint: 'Cosine goes with x, sine goes with y.'
	},
	{
		id: 'w1-c29',
		type: 'list',
		front: 'Define sine, cosine and tangent in terms of triangle sides and of x, y and r.',
		back: [
			'sin theta equals opposite over hypotenuse, which is y over r',
			'cos theta equals adjacent over hypotenuse, which is x over r',
			'tan theta equals opposite over adjacent, which is y over x',
			'Pythagoras: r squared equals x squared plus y squared',
			'To find an angle you need the inverse function, for example theta equals inverse sine of 0.707, which is 45 degrees'
		],
		hint: 'SOH CAH TOA, then map opposite and adjacent onto y and x.'
	},
	{
		id: 'w1-c30',
		type: 'concept',
		front: 'Why does the inverse tangent of 0.5774 have two different answers?',
		back: 'Because of the calculator angular mode. In degrees the answer is 30.0 degrees; in radians it is 0.5236 radians. Always check your calculator is set to the appropriate angular units for the problem.',
		hint: 'Same number, two different angular units.'
	},
	{
		id: 'w1-c31',
		type: 'list',
		front: 'What are the eight steps of the problem solving strategy?',
		back: [
			'1. Read the problem, at least twice, and identify its nature',
			'2. Draw a diagram',
			'3. Label the physical quantities and choose a coordinate system',
			'4. Identify the principle involved and list the knowns and unknowns',
			'5. Choose the equation or equations',
			'6. Solve the equations for the unknown quantity',
			'7. Substitute the known values, including units',
			'8. Check the answer'
		],
		hint: 'Read, draw, label, identify, choose, solve, substitute, check.'
	},
	{
		id: 'w1-c32',
		type: 'list',
		front: 'What three checks do you run on a final answer?',
		back: [
			'Units: do they match, and are they correct for the quantity being found?',
			'Magnitude: does the answer seem reasonable? Check the order of magnitude',
			'Signs: are they appropriate and meaningful?'
		],
		hint: 'Units, size, sign.'
	},
	{
		id: 'w1-c33',
		type: 'concept',
		front: 'Why should you carry the algebra as far as possible before substituting numbers?',
		back: 'Equations are the tools of physics, and you need to understand what they mean and how to use them. Carrying the algebra through and substituting numbers only at the end keeps the work organised and reduces rounding error.',
		hint: 'Numbers last, algebra first.'
	},
	{
		id: 'w1-c34',
		type: 'list',
		front: 'Trace the structure of matter from a substance down to fundamental particles.',
		back: [
			'Matter is made up of molecules — the smallest division still identifiable as the substance',
			'Molecules are made up of atoms, which correspond to elements',
			'Each atom has a very dense nucleus containing protons (positively charged, heavy) and neutrons (no charge, about the same mass as protons)',
			'Protons and neutrons are made up of quarks — a proton is two up quarks and one down quark',
			'The nucleus is orbited by electrons, which are negatively charged, light, and fundamental with no structure'
		],
		hint: 'Molecules, atoms, nucleus, quarks — and electrons in orbit.'
	},
	{
		id: 'w1-c35',
		type: 'list',
		front: 'Where is engineering science used across the engineering disciplines?',
		back: [
			'Civil: bridge design, building foundations, water flow in pipes — forces, equilibrium, materials, motion',
			'Mechanical: engines, HVAC, rotating machinery — motion, energy, forces, power',
			'Electrical: motors, power transmission, electronic devices — energy, motion of charges, fields',
			'Aerospace: aircraft flight, rocket motion, structural integrity — forces, motion, energy, materials',
			'Manufacturing: machining, material forming, automation and robotics — materials behaviour, forces, energy'
		],
		hint: 'Five disciplines, each leaning on a different mix of the same core concepts.'
	},
	{
		id: 'w1-c36',
		type: 'list',
		front: 'A car travels at 28.0 m/s where the speed limit is 55.0 mi/h. Is the driver speeding?',
		back: [
			'Chain the conversion factors so unwanted units cancel',
			'28.0 metres per second, times (1.00 mile over 1609 metres), times (3600 seconds over 1 hour)',
			'This gives 62.6 miles per hour',
			'62.6 is greater than 55.0, so yes — the driver is exceeding the speed limit'
		],
		hint: 'Convert metres to miles and seconds to hours in one chain.'
	},
	{
		id: 'w1-c37',
		type: 'list',
		front: 'Convert 4.50 × 10³ kg/m³ into g/cm³.',
		back: [
			'Multiply by (1000 grams over 1.00 kilogram) and by (1 cubic metre over 1 000 000 cubic centimetres)',
			'The mass factor multiplies by 10 cubed and the volume factor divides by 10 to the power 6',
			'The net factor is 10 to the power minus 3',
			'The answer is 4.50 grams per cubic centimetre'
		],
		hint: 'One cubic metre is 10 to the power 6 cubic centimetres — cube the linear factor.'
	},
	{
		id: 'w1-c38',
		type: 'list',
		front: 'A plane flies 4.50 × 10² km east, an unknown distance north, then returns straight home over 525 km. How far north did it fly?',
		back: [
			'Sketch it — the three legs form a right-angled triangle with the 525 km return leg as the hypotenuse',
			'Apply Pythagoras: y equals the square root of (525 squared minus 450 squared)',
			'That is the square root of (275 625 minus 202 500), which is the square root of 73 125',
			'The answer is 2.70 times 10 squared kilometres'
		],
		hint: 'The return leg is the hypotenuse.'
	},
	{
		id: 'w1-c39',
		type: 'list',
		front: 'A plane flies 345 km due south, then 615 km north of east until it is due east of its start. How far is it from home?',
		back: [
			'Due east of the starting point means the northward part of the second leg exactly cancels the first leg, so that component is 345 km',
			'The eastward component is the square root of (615 squared minus 345 squared), which is the square root of 259 200',
			'Since the plane is due east of home, that eastward component is the distance home',
			'The answer is 509 kilometres'
		],
		hint: 'The 615 km is the hypotenuse of the second leg, not the eastward distance.'
	},
	{
		id: 'w1-c40',
		type: 'list',
		front: 'A circular pool has circumference 15.0 m. From the edge, the angle of elevation to the top of a central fountain is 55.0°. How high is the fountain?',
		back: [
			'The horizontal distance from the edge to the fountain is the radius, r equals C divided by 2 pi',
			'In the right triangle, tan theta equals h over r, so h equals r tan theta, which is C tan theta over 2 pi',
			'Substituting: h equals (15.0 times tan 55.0 degrees) divided by 2 pi',
			'That is (15.0 times 1.428) divided by 6.283, giving 3.41 metres'
		],
		hint: 'Get the radius from the circumference first, and check the calculator is in degrees.'
	}
];

export const m1Quiz: QuizData[] = [
	{
		id: 'w1-q01',
		type: 'multiple-choice',
		question: 'Which set lists the three fundamental quantities used in mechanics?',
		options: [
			'Length, force, time',
			'Length, mass, time',
			'Mass, force, energy',
			'Distance, speed, time'
		],
		correctIndex: 1,
		explanation:
			'Mechanics uses length (L), mass (M) and time (T). Every other physical quantity in mechanics is constructed from these three.'
	},
	{
		id: 'w1-q02',
		type: 'multiple-choice',
		question: 'How many significant figures does 0.0075 have?',
		options: ['2', '3', '4', '5'],
		correctIndex: 0,
		explanation:
			'Only the non-zero digits count here — the leading zeros just locate the decimal point. Writing it as 7.5 × 10⁻³ makes the two significant figures unambiguous.'
	},
	{
		id: 'w1-q03',
		type: 'multiple-choice',
		question: 'Evaluate 4.56 × 1.4 to the correct number of significant figures.',
		options: ['6.384', '6.38', '6.4', '6'],
		correctIndex: 2,
		explanation:
			'The raw product is 6.384. For multiplication the result takes the significant figures of the least accurate factor, and 1.4 has only two — so the answer is 6.4.'
	},
	{
		id: 'w1-q04',
		type: 'multiple-choice',
		question: 'Evaluate 12.11 + 0.3 to the correct precision.',
		options: ['12.41', '12.4', '12', '12.410'],
		correctIndex: 1,
		explanation:
			'For addition you round to the smallest number of decimal places of any term. 0.3 has one decimal place, so 12.41 becomes 12.4. Note this rule counts decimal places, not significant figures.'
	},
	{
		id: 'w1-q05',
		type: 'multiple-choice',
		question: 'What are the dimensions of power?',
		options: ['M L² / T²', 'M L / T²', 'M L² / T³', 'L² / T³'],
		correctIndex: 2,
		explanation:
			'Power is energy per unit time. A joule has dimensions M L² / T², so dividing by another T gives M L² / T³.'
	},
	{
		id: 'w1-q06',
		type: 'multiple-choice',
		question: 'What can dimensional analysis NOT do?',
		options: [
			'Check whether an equation is dimensionally correct',
			'Supply the numerical factors in an equation',
			'Treat dimensions as algebraic quantities',
			'Help you derive a relationship between quantities'
		],
		correctIndex: 1,
		explanation:
			'This is its stated limitation. Dimensional analysis can confirm the form of an equation and even help you guess one, but it cannot give you the numerical coefficients.'
	},
	{
		id: 'w1-q07',
		type: 'multiple-choice',
		question:
			'Using dimensional analysis on a constant acceleration a, a speed v and a distance r, which relationship emerges?',
		options: ['a = v / r', 'a = v r', 'a = v² r', 'a = v² / r'],
		correctIndex: 3,
		explanation:
			'[a] = L/T². Solving [v] = L/T for T gives T = L/[v], so [a] = L / (L/[v])² = [v]²/L. Substituting L = [r] gives a = v²/r.'
	},
	{
		id: 'w1-q08',
		type: 'multiple-choice',
		question:
			'A pendulum has l = 0.856 ± 0.001 m and g = 9.80 ± 0.01 m/s², with T = 2π√(l/g). What is the relative uncertainty ΔT/T?',
		options: ['0.0022', '0.0011', '0.0012', '0.011'],
		correctIndex: 1,
		explanation:
			'The square root halves the summed relative errors: ½ × (0.001/0.856 + 0.01/9.80) = ½ × (0.001168 + 0.001020) = 0.0011. Forgetting the ½ doubles your uncertainty.'
	},
	{
		id: 'w1-q09',
		type: 'multiple-choice',
		question: 'For X = A / B with ΔA/A = 2% and ΔB/B = 3%, what is the relative error in X?',
		options: ['1%', '2.5%', '5%', '6%'],
		correctIndex: 2,
		explanation:
			'For multiplication AND division the relative errors add: 2% + 3% = 5%. They do not subtract, even though B is in the denominator.'
	},
	{
		id: 'w1-q10',
		type: 'multiple-choice',
		question: 'For X = A + B with ΔA = 0.2 and ΔB = 0.3, what is ΔX?',
		options: ['0.1', '0.25', '0.36', '0.5'],
		correctIndex: 3,
		explanation:
			'For addition and subtraction the absolute errors add: ΔX = ΔA + ΔB = 0.5. Relative errors are the ones that add for products and quotients.'
	},
	{
		id: 'w1-q11',
		type: 'multiple-choice',
		question:
			'A car travels at 28.0 m/s where the limit is 55.0 mi/h (1 mi = 1609 m). Is the driver speeding?',
		options: [
			'No — 46.5 mi/h',
			'No — exactly 55.0 mi/h',
			'Yes — 62.6 mi/h',
			'Yes — 100.8 mi/h'
		],
		correctIndex: 2,
		explanation:
			'28.0 m/s × (1.00 mi / 1609 m) × (3600 s / 1 hr) = 62.6 mi/h, which exceeds the 55.0 mi/h limit.'
	},
	{
		id: 'w1-q12',
		type: 'multiple-choice',
		question: 'Convert 4.50 × 10³ kg/m³ to g/cm³.',
		options: ['4.50 × 10³', '4.50', '0.450', '4.50 × 10⁻³'],
		correctIndex: 1,
		explanation:
			'Multiplying by (1000 g / 1.00 kg) and (1 m³ / 1 000 000 cm³) gives a net factor of 10⁻³, so 4.50 × 10³ becomes 4.50 g/cm³. Remember 1 m³ = 10⁶ cm³, not 10².'
	},
	{
		id: 'w1-q13',
		type: 'multiple-choice',
		question: 'Which pair converts polar coordinates to rectangular?',
		options: [
			'x = r sin θ, y = r cos θ',
			'x = r tan θ, y = r cot θ',
			'x = r / cos θ, y = r / sin θ',
			'x = r cos θ, y = r sin θ'
		],
		correctIndex: 3,
		explanation:
			'Since cos θ = x/r and sin θ = y/r, rearranging gives x = r cos θ and y = r sin θ. Cosine goes with x, sine goes with y.'
	},
	{
		id: 'w1-q14',
		type: 'multiple-choice',
		question:
			'A circular pool has circumference C = 15.0 m. From the edge, the angle of elevation to the top of a central fountain is 55.0°. How high is the fountain?',
		options: ['1.71 m', '3.41 m', '6.83 m', '21.4 m'],
		correctIndex: 1,
		explanation:
			'The radius is r = C/2π, and h = r tan θ. So h = C tan θ / 2π = (15.0 × 1.428) / 6.283 = 3.41 m.'
	},
	{
		id: 'w1-q15',
		type: 'multiple-choice',
		question:
			'A plane flies 4.50 × 10² km due east, then an unknown distance due north, then returns straight home over 525 km. How far north did it fly?',
		options: ['0.75 × 10² km', '2.70 × 10² km', '3.75 × 10² km', '7.50 × 10² km'],
		correctIndex: 1,
		explanation:
			'The legs form a right triangle with the 525 km return as the hypotenuse: y = √(525² − 450²) = √73 125 = 2.70 × 10² km.'
	},
	{
		id: 'w1-q16',
		type: 'multiple-choice',
		question: 'In SI convention, how should the number ten thousand be written?',
		options: ['10,000', '10.000', '10 000', '10000'],
		correctIndex: 2,
		explanation:
			'Numbers with more than three digits are written in groups of three separated by spaces — not commas — on both sides of the decimal point.'
	},
	{
		id: 'w1-q17',
		type: 'multiple-choice',
		question: 'In a direct measurement, the absolute error is taken as…',
		options: [
			'The sum of the device accuracy and the random uncertainty',
			'Always the accuracy of the measuring device',
			'The average of the two contributions',
			'The larger of the device accuracy and the random statistical uncertainty'
		],
		correctIndex: 3,
		explanation:
			'You take whichever is largest — the instrument accuracy or the statistical uncertainty from random errors. The relative error is then calculated from it.'
	},
	{
		id: 'w1-q18',
		type: 'fill-blank',
		question: 'What is the unit of mass in the US Customary (FPS) system?',
		answer: 'slug',
		acceptableAnswers: ['the slug', 'slugs'],
		explanation:
			'FPS uses foot, slug, second. The pound is a unit of weight — a force — which is a different physical quantity from mass.'
	},
	{
		id: 'w1-q19',
		type: 'fill-blank',
		question:
			'In the CGS system, what is the unit of length? (Give the full word, not the abbreviation.)',
		answer: 'centimetre',
		acceptableAnswers: ['centimeter', 'centimetres', 'centimeters', 'cm'],
		explanation:
			'CGS is named for the first letters of its units: centimetre, gram, second.'
	},
	{
		id: 'w1-q20',
		type: 'fill-blank',
		question:
			'A quantity is measured as X = 4.62 ± 0.05. What is its relative error, as a percentage to one decimal place? (Give the number only.)',
		answer: '1.1',
		acceptableAnswers: ['1.1%', '1.08', '1.08%'],
		explanation:
			'Relative error = (ΔX / X average) × 100% = (0.05 / 4.62) × 100% = 1.08%, or 1.1% to one decimal place.'
	}
];
