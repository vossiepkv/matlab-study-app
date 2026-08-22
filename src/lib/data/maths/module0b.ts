import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m0bMeta: ModuleMeta = {
	num: 0.5,
	title: 'Algebra Foundations 2',
	description:
		'The next step up from Algebra Foundations. Signs and brackets, expanding pairs of brackets, factorising, negative and fractional indices, surds, algebraic fractions, harder equations, quadratics, simultaneous equations, rearranging formulas and inequalities. This is the bridge between the basics and the course modules — do this one after Module 0 and before Vectors.',
	topics: [
		'Sign rules and expanding with negatives',
		'Expanding two brackets (FOIL), perfect squares, difference of two squares',
		'Factorising: common factors, difference of squares, quadratic trinomials',
		'Negative and fractional indices',
		'Surds and rationalising the denominator',
		'Simplifying, multiplying and adding algebraic fractions',
		'Equations with brackets, fractions and the variable on both sides',
		'Solving quadratics by factorising and by the quadratic formula',
		'Simultaneous equations (substitution and elimination)',
		'Rearranging harder formulas',
		'Solving inequalities'
	]
};

export const m0bCards: CardData[] = [
	// --- Signs and brackets ---
	{
		id: 'w0b-c01',
		type: 'list',
		front: 'What are the sign rules for multiplying and dividing?',
		back: [
			'positive × positive = positive  (2 × 3 = 6)',
			'positive × negative = negative  (2 × −3 = −6)',
			'negative × negative = positive  (−2 × −3 = 6)',
			'The same rules apply to division.'
		],
		hint: 'Two signs the same → positive. Two signs different → negative.'
	},
	{
		id: 'w0b-c02',
		type: 'concept',
		front: 'Expand −2(x − 5).',
		back: '−2x + 10. Multiply −2 by each term: −2 × x = −2x, and −2 × (−5) = +10. Two negatives multiply to a positive.',
		hint: 'The minus sign outside multiplies both terms inside.'
	},
	{
		id: 'w0b-c03',
		type: 'concept',
		front: 'Simplify 3(x + 2) − 2(x − 1).',
		back: 'x + 8. Expand both brackets first: 3x + 6 − 2x + 2. Then collect like terms: (3x − 2x) + (6 + 2) = x + 8.',
		hint: 'The −2 changes the sign of both terms in the second bracket.'
	},

	// --- Expanding two brackets ---
	{
		id: 'w0b-c04',
		type: 'concept',
		front: 'How do you expand two brackets, e.g. (a + b)(c + d)?',
		back: 'Every term in the first bracket multiplies every term in the second: (a + b)(c + d) = ac + ad + bc + bd. This is often remembered as FOIL — First, Outer, Inner, Last.',
		hint: 'Four multiplications, not two.'
	},
	{
		id: 'w0b-c05',
		type: 'concept',
		front: 'Expand (x + 3)(x + 4).',
		back: 'x² + 7x + 12. FOIL: x·x = x², x·4 = 4x, 3·x = 3x, 3·4 = 12. Then collect the middle terms: 4x + 3x = 7x.',
		hint: 'The two middle terms are like terms — add them.'
	},
	{
		id: 'w0b-c06',
		type: 'concept',
		front: 'Expand (x − 5)(x + 2).',
		back: 'x² − 3x − 10. FOIL: x² + 2x − 5x − 10. The middle terms give 2x − 5x = −3x.',
		hint: 'Keep the minus attached to the 5.'
	},
	{
		id: 'w0b-c07',
		type: 'concept',
		front: 'What is the perfect square rule, (a + b)²?',
		back: '(a + b)² = a² + 2ab + b². For example (x + 4)² = x² + 8x + 16. Note it is NOT x² + 16 — the middle term 2ab is easy to forget.',
		hint: 'Square the first, twice the product, square the last.'
	},
	{
		id: 'w0b-c08',
		type: 'concept',
		front: 'What is the difference of two squares rule?',
		back: '(a + b)(a − b) = a² − b². The middle terms cancel out. For example (x + 5)(x − 5) = x² − 25.',
		hint: 'Same two terms, one plus and one minus — the middles cancel.'
	},

	// --- Factorising ---
	{
		id: 'w0b-c09',
		type: 'concept',
		front: 'What does it mean to "factorise" an expression?',
		back: 'Factorising is the reverse of expanding — writing an expression as a product (things multiplied together). Expanding removes brackets; factorising puts them back.',
		hint: 'Expanding and factorising are opposites.'
	},
	{
		id: 'w0b-c10',
		type: 'concept',
		front: 'Factorise 6x + 9.',
		back: '3(2x + 3). The highest common factor of 6 and 9 is 3, so take 3 out the front and divide each term by 3.',
		hint: 'What number divides into both 6 and 9?'
	},
	{
		id: 'w0b-c11',
		type: 'concept',
		front: 'Factorise 4x² − 8x.',
		back: '4x(x − 2). The common factor includes the variable: 4 divides both numbers and x divides both terms, so take out 4x.',
		hint: 'The common factor can contain a letter too.'
	},
	{
		id: 'w0b-c12',
		type: 'concept',
		front: 'Factorise x² − 9.',
		back: '(x − 3)(x + 3). This is a difference of two squares: x² − 9 = x² − 3², which factorises to (x − 3)(x + 3).',
		hint: 'Both terms are perfect squares with a minus between them.'
	},
	{
		id: 'w0b-c13',
		type: 'concept',
		front: 'How do you factorise a quadratic like x² + 7x + 12?',
		back: 'Find two numbers that multiply to give the constant (12) and add to give the middle coefficient (7). Those numbers are 3 and 4, so x² + 7x + 12 = (x + 3)(x + 4).',
		hint: 'Multiply to the last number, add to the middle number.'
	},
	{
		id: 'w0b-c14',
		type: 'concept',
		front: 'Factorise x² − x − 6.',
		back: '(x − 3)(x + 2). You need two numbers that multiply to −6 and add to −1: those are −3 and +2.',
		hint: 'Multiply to −6, add to −1.'
	},

	// --- Indices extended ---
	{
		id: 'w0b-c15',
		type: 'concept',
		front: 'What does a negative index mean, e.g. a⁻ⁿ?',
		back: 'a⁻ⁿ = 1/aⁿ. A negative index means "one over" — it flips the term to the bottom of a fraction. For example 3⁻² = 1/3² = 1/9.',
		hint: 'Negative power → reciprocal, not a negative answer.'
	},
	{
		id: 'w0b-c16',
		type: 'concept',
		front: 'Write 1/x⁵ using a negative index.',
		back: 'x⁻⁵. Moving a power from the bottom of a fraction to the top flips the sign of the index.',
		hint: 'Bottom to top flips the sign of the power.'
	},
	{
		id: 'w0b-c17',
		type: 'concept',
		front: 'What does a fractional index mean, e.g. a^(1/2) and a^(m/n)?',
		back: 'The bottom of the fraction is a root and the top is a power: a^(1/2) = √a, a^(1/3) = ∛a, and a^(m/n) = (ⁿ√a)ᵐ.',
		hint: 'Denominator = root, numerator = power.'
	},
	{
		id: 'w0b-c18',
		type: 'concept',
		front: 'Evaluate 16^(1/2) and 8^(2/3).',
		back: '16^(1/2) = √16 = 4. For 8^(2/3), take the cube root first then square: ∛8 = 2, then 2² = 4.',
		hint: 'Do the root first — the numbers stay smaller.'
	},

	// --- Surds ---
	{
		id: 'w0b-c19',
		type: 'concept',
		front: 'What is a surd?',
		back: 'A surd is a root that cannot be simplified to a whole number, like √2 or √5. Leaving an answer as a surd is exact; a decimal like 1.414 is only an approximation.',
		hint: '√9 is not a surd (it is 3); √2 is.'
	},
	{
		id: 'w0b-c20',
		type: 'concept',
		front: 'Simplify √50.',
		back: '5√2. Split off the largest square factor: 50 = 25 × 2, so √50 = √25 × √2 = 5√2.',
		hint: 'Look for a perfect square that divides 50.'
	},
	{
		id: 'w0b-c21',
		type: 'concept',
		front: 'Simplify √3 × √12.',
		back: '6. Multiply under one root: √3 × √12 = √36 = 6. In general √a × √b = √(ab).',
		hint: 'Combine under a single root first.'
	},
	{
		id: 'w0b-c22',
		type: 'concept',
		front: 'What does "rationalising the denominator" mean, and how do you do it for 1/√2?',
		back: 'It means removing the surd from the bottom of a fraction. Multiply top and bottom by that surd: 1/√2 × √2/√2 = √2/2. Multiplying by √2/√2 is multiplying by 1, so the value does not change.',
		hint: 'Multiply top and bottom by the surd on the bottom.'
	},

	// --- Algebraic fractions ---
	{
		id: 'w0b-c23',
		type: 'concept',
		front: 'Simplify 6x² / 3x.',
		back: '2x. Divide the numbers (6 ÷ 3 = 2) and subtract the indices for the variable (x² ÷ x = x).',
		hint: 'Numbers with numbers, letters with letters.'
	},
	{
		id: 'w0b-c24',
		type: 'concept',
		front: 'Simplify (x² − 9) / (x + 3).',
		back: 'x − 3. Factorise the top first: (x − 3)(x + 3) / (x + 3). The (x + 3) factors cancel, leaving x − 3.',
		hint: 'You can only cancel factors, so factorise before cancelling.'
	},
	{
		id: 'w0b-c25',
		type: 'list',
		front: 'How do you multiply and divide algebraic fractions?',
		back: [
			'Multiply: multiply the tops together and the bottoms together — (a/b) × (c/d) = ac/bd',
			'Divide: flip the second fraction and multiply — (a/b) ÷ (c/d) = (a/b) × (d/c) = ad/bc',
			'Cancel any common factors before multiplying to keep numbers small.'
		],
		hint: 'Dividing = multiply by the reciprocal.'
	},
	{
		id: 'w0b-c26',
		type: 'concept',
		front: 'Simplify x/2 + x/3.',
		back: '5x/6. Use a common denominator of 6: x/2 = 3x/6 and x/3 = 2x/6, so the sum is 3x/6 + 2x/6 = 5x/6.',
		hint: 'You can only add fractions with the same denominator.'
	},

	// --- Harder equations ---
	{
		id: 'w0b-c27',
		type: 'concept',
		front: 'Solve 2(x + 3) = 14.',
		back: 'x = 4. Either expand first (2x + 6 = 14 → 2x = 8 → x = 4), or divide both sides by 2 (x + 3 = 7 → x = 4). Both are valid.',
		hint: 'Expand, or divide both sides by the number outside.'
	},
	{
		id: 'w0b-c28',
		type: 'concept',
		front: 'Solve 5x − 4 = 2x + 8 (variable on both sides).',
		back: 'x = 4. Gather the x-terms on one side: subtract 2x from both sides → 3x − 4 = 8. Then add 4 → 3x = 12, so x = 4.',
		hint: 'Move the smaller x-term across first.'
	},
	{
		id: 'w0b-c29',
		type: 'concept',
		front: 'Solve (x + 1)/4 = 3 (an equation with a fraction).',
		back: 'x = 11. Multiply both sides by 4 to clear the fraction: x + 1 = 12. Then subtract 1: x = 11.',
		hint: 'Multiply both sides by the denominator first.'
	},

	// --- Quadratics ---
	{
		id: 'w0b-c30',
		type: 'concept',
		front: 'What is the null factor law?',
		back: 'If two things multiply to give zero, at least one of them must be zero. So if A × B = 0, then A = 0 or B = 0. This is why quadratics are set to = 0 before factorising.',
		hint: 'The only way a product is zero is if a factor is zero.'
	},
	{
		id: 'w0b-c31',
		type: 'concept',
		front: 'Solve (x − 2)(x + 5) = 0.',
		back: 'x = 2 or x = −5. By the null factor law, either x − 2 = 0 (giving x = 2) or x + 5 = 0 (giving x = −5). A quadratic usually has two solutions.',
		hint: 'Set each bracket equal to zero.'
	},
	{
		id: 'w0b-c32',
		type: 'concept',
		front: 'Solve x² + 5x + 6 = 0 by factorising.',
		back: 'x = −2 or x = −3. Two numbers that multiply to 6 and add to 5 are 2 and 3, so (x + 2)(x + 3) = 0, giving x = −2 or x = −3.',
		hint: 'Factorise first, then use the null factor law.'
	},
	{
		id: 'w0b-c33',
		type: 'concept',
		front: 'What is the quadratic formula, and when do you use it?',
		back: 'For ax² + bx + c = 0, x = (−b ± √(b² − 4ac)) / (2a). Use it when the quadratic will not factorise neatly, or when the solutions are not whole numbers. It always works.',
		hint: 'Minus b, plus or minus the root, all over 2a.'
	},
	{
		id: 'w0b-c34',
		type: 'concept',
		front: 'Use the quadratic formula on x² − 3x − 4 = 0.',
		back: 'x = 4 or x = −1. Here a = 1, b = −3, c = −4. b² − 4ac = 9 + 16 = 25, and √25 = 5, so x = (3 ± 5)/2, giving 8/2 = 4 or −2/2 = −1.',
		hint: 'Be careful with the signs: −b = +3.'
	},
	{
		id: 'w0b-c35',
		type: 'concept',
		front: 'What does the discriminant b² − 4ac tell you?',
		back: 'It tells you how many real solutions a quadratic has: positive → two solutions, zero → one repeated solution, negative → no real solutions (they are complex — see the Complex Numbers modules).',
		hint: 'It is the part under the square root.'
	},

	// --- Simultaneous equations ---
	{
		id: 'w0b-c36',
		type: 'concept',
		front: 'What are simultaneous equations, and what does solving them mean?',
		back: 'Two (or more) equations that must both be true at once, with two unknowns. Solving them means finding the pair of values that satisfies both — graphically, the point where the two lines cross.',
		hint: 'One answer for x AND y that fits both equations.'
	},
	{
		id: 'w0b-c37',
		type: 'concept',
		front: 'Solve by substitution: y = 2x + 1 and x + y = 7.',
		back: 'x = 2, y = 5. Substitute the first equation into the second: x + (2x + 1) = 7 → 3x + 1 = 7 → 3x = 6 → x = 2. Then y = 2(2) + 1 = 5.',
		hint: 'Replace y in the second equation with 2x + 1.'
	},
	{
		id: 'w0b-c38',
		type: 'concept',
		front: 'Solve by elimination: 2x + y = 11 and x − y = 1.',
		back: 'x = 4, y = 3. The y-terms are opposites, so add the two equations: 3x = 12 → x = 4. Substitute back into x − y = 1 → 4 − y = 1 → y = 3.',
		hint: 'Add the equations to make y disappear.'
	},

	// --- Rearranging ---
	{
		id: 'w0b-c39',
		type: 'concept',
		front: 'Rearrange v = u + at to make a the subject.',
		back: 'a = (v − u) / t. Subtract u from both sides: v − u = at. Then divide both sides by t.',
		hint: 'Peel off the terms not attached to a first.'
	},
	{
		id: 'w0b-c40',
		type: 'concept',
		front: 'Rearrange A = πr² to make r the subject.',
		back: 'r = √(A/π). Divide both sides by π to get A/π = r², then take the square root of both sides.',
		hint: 'Undo the squaring last, with a square root.'
	},
	{
		id: 'w0b-c41',
		type: 'list',
		front: 'What is the general strategy for rearranging a formula?',
		back: [
			'Decide which letter you want on its own (the new subject).',
			'Clear fractions by multiplying both sides by the denominator.',
			'Undo additions and subtractions first, then multiplications and divisions.',
			'Undo powers and roots last (square root to undo a square, and vice versa).',
			'Do the same thing to both sides at every step.'
		],
		hint: 'Reverse BODMAS: unwrap from the outside in.'
	},

	// --- Inequalities ---
	{
		id: 'w0b-c42',
		type: 'concept',
		front: 'How is solving an inequality like 2x + 1 < 9 different from solving an equation?',
		back: 'You use the same steps: 2x < 8, so x < 4. The one extra rule is that multiplying or dividing both sides by a negative number flips the inequality sign.',
		hint: 'Same method, one special rule.'
	},
	{
		id: 'w0b-c43',
		type: 'concept',
		front: 'Solve −2x > 6.',
		back: 'x < −3. Dividing both sides by −2 flips the > into a <. Check with x = −4: −2 × (−4) = 8, which is indeed greater than 6.',
		hint: 'Dividing by a negative flips the sign.'
	}
];

export const m0bQuiz: QuizData[] = [
	{
		id: 'w0b-q01',
		type: 'multiple-choice',
		question: 'Expand: (x + 2)(x + 5)',
		options: ['x² + 10', 'x² + 7x + 10', 'x² + 7x + 7', '2x + 10'],
		correctIndex: 1,
		explanation: 'FOIL: x² + 5x + 2x + 10. The middle terms add: 5x + 2x = 7x, giving x² + 7x + 10.'
	},
	{
		id: 'w0b-q02',
		type: 'multiple-choice',
		question: 'Expand: (x + 3)²',
		options: ['x² + 9', 'x² + 3x + 9', 'x² + 6x + 9', 'x² + 6x + 6'],
		correctIndex: 2,
		explanation: 'Use (a + b)² = a² + 2ab + b²: x² + 2(3)x + 3² = x² + 6x + 9. The 6x middle term is the one people forget.'
	},
	{
		id: 'w0b-q03',
		type: 'multiple-choice',
		question: 'Factorise: x² − 16',
		options: ['(x − 4)(x + 4)', '(x − 4)²', '(x − 8)(x + 2)', 'x(x − 16)'],
		correctIndex: 0,
		explanation: 'This is a difference of two squares: x² − 4² = (x − 4)(x + 4).'
	},
	{
		id: 'w0b-q04',
		type: 'fill-blank',
		question: 'Factorise by taking out the highest common factor: 5x + 20',
		answer: '5(x + 4)',
		acceptableAnswers: ['5(x + 4)', '5(x+4)', '5 (x + 4)', '5*(x+4)'],
		explanation: 'The highest common factor of 5 and 20 is 5. Taking it out gives 5(x + 4). Check by expanding: 5x + 20.'
	},
	{
		id: 'w0b-q05',
		type: 'multiple-choice',
		question: 'Factorise: x² + 8x + 15',
		options: ['(x + 5)(x + 3)', '(x + 15)(x + 1)', '(x − 5)(x − 3)', '(x + 4)²'],
		correctIndex: 0,
		explanation: 'You need two numbers that multiply to 15 and add to 8: 5 and 3. So x² + 8x + 15 = (x + 5)(x + 3).'
	},
	{
		id: 'w0b-q06',
		type: 'fill-blank',
		question: 'Evaluate 2⁻³ (give a fraction or a decimal).',
		answer: '1/8',
		acceptableAnswers: ['1/8', '0.125', '.125'],
		explanation: 'A negative index means the reciprocal: 2⁻³ = 1/2³ = 1/8 = 0.125. The answer is positive, not −8.'
	},
	{
		id: 'w0b-q07',
		type: 'multiple-choice',
		question: 'Evaluate 27^(1/3)',
		options: ['9', '3', '1/27', '81'],
		correctIndex: 1,
		explanation: 'An index of 1/3 means the cube root: ∛27 = 3, because 3 × 3 × 3 = 27.'
	},
	{
		id: 'w0b-q08',
		type: 'multiple-choice',
		question: 'Simplify: √18',
		options: ['9√2', '2√9', '3√2', '6'],
		correctIndex: 2,
		explanation: '18 = 9 × 2, and 9 is a perfect square, so √18 = √9 × √2 = 3√2.'
	},
	{
		id: 'w0b-q09',
		type: 'multiple-choice',
		question: 'Rationalise the denominator: 1/√5',
		options: ['√5/5', '5/√5', '√5', '1/5'],
		correctIndex: 0,
		explanation: 'Multiply top and bottom by √5: (1 × √5) / (√5 × √5) = √5/5. The denominator is now a whole number.'
	},
	{
		id: 'w0b-q10',
		type: 'fill-blank',
		question: 'Simplify: x/4 + x/2',
		answer: '3x/4',
		acceptableAnswers: ['3x/4', '3x / 4', '(3x)/4', '0.75x'],
		explanation: 'Common denominator 4: x/4 + 2x/4 = 3x/4.'
	},
	{
		id: 'w0b-q11',
		type: 'multiple-choice',
		question: 'Simplify: (x² − 4) / (x − 2)',
		options: ['x − 2', 'x + 2', 'x² − 2', 'x − 4'],
		correctIndex: 1,
		explanation: 'Factorise the top as a difference of two squares: (x − 2)(x + 2) / (x − 2). The (x − 2) cancels, leaving x + 2.'
	},
	{
		id: 'w0b-q12',
		type: 'fill-blank',
		question: 'Solve for x: 4(x − 1) = 20',
		answer: '6',
		acceptableAnswers: ['6', 'x=6', 'x = 6'],
		explanation: 'Divide both sides by 4: x − 1 = 5. Then add 1: x = 6. (Expanding first gives 4x − 4 = 20 → 4x = 24 → x = 6.)'
	},
	{
		id: 'w0b-q13',
		type: 'fill-blank',
		question: 'Solve for x: 7x − 3 = 4x + 9',
		answer: '4',
		acceptableAnswers: ['4', 'x=4', 'x = 4'],
		explanation: 'Subtract 4x from both sides: 3x − 3 = 9. Add 3: 3x = 12. Divide by 3: x = 4.'
	},
	{
		id: 'w0b-q14',
		type: 'multiple-choice',
		question: 'Solve: x² − 7x + 12 = 0',
		options: ['x = 3 or x = 4', 'x = −3 or x = −4', 'x = 2 or x = 6', 'x = 12 or x = 1'],
		correctIndex: 0,
		explanation: 'Two numbers multiplying to 12 and adding to −7 are −3 and −4, so (x − 3)(x − 4) = 0, giving x = 3 or x = 4.'
	},
	{
		id: 'w0b-q15',
		type: 'multiple-choice',
		question: 'For 2x² + 5x − 3 = 0, what is the value of the discriminant b² − 4ac?',
		options: ['49', '25', '1', '−23'],
		correctIndex: 0,
		explanation: 'Here a = 2, b = 5, c = −3, so b² − 4ac = 25 − 4(2)(−3) = 25 + 24 = 49. It is positive, so there are two real solutions.'
	},
	{
		id: 'w0b-q16',
		type: 'fill-blank',
		question: 'Solve the simultaneous equations y = x + 2 and 2x + y = 11. What is the value of x?',
		answer: '3',
		acceptableAnswers: ['3', 'x=3', 'x = 3'],
		explanation: 'Substitute y = x + 2 into 2x + y = 11: 2x + x + 2 = 11 → 3x = 9 → x = 3 (and then y = 5).'
	},
	{
		id: 'w0b-q17',
		type: 'multiple-choice',
		question: 'Rearrange C = 2πr to make r the subject.',
		options: ['r = C/(2π)', 'r = 2πC', 'r = C − 2π', 'r = 2π/C'],
		correctIndex: 0,
		explanation: 'r is multiplied by 2π, so divide both sides by 2π: r = C/(2π).'
	},
	{
		id: 'w0b-q18',
		type: 'multiple-choice',
		question: 'Solve the inequality: −3x > 12',
		options: ['x > −4', 'x < −4', 'x > 4', 'x < 4'],
		correctIndex: 1,
		explanation: 'Divide both sides by −3, which flips the inequality sign: x < −4. Check x = −5: −3 × (−5) = 15 > 12. ✓'
	}
];
