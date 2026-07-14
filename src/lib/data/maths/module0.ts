import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m0Meta: ModuleMeta = {
	num: 0,
	title: 'Algebra Foundations',
	description:
		'A gentle revision of the basics of algebra: what variables and terms are, collecting like terms, the order of operations (BODMAS), substituting numbers into expressions, expanding single brackets with the distributive law, the basic index (power) laws, and solving and rearranging simple equations. These are the building blocks the rest of the maths modules rely on.',
	topics: [
		'Variables, terms, coefficients and constants',
		'Collecting like terms',
		'Order of operations (BODMAS)',
		'Substituting values into expressions',
		'Expanding single brackets (distributive law)',
		'Basic index (power) laws',
		'Solving simple linear equations',
		'Rearranging simple formulas'
	]
};

export const m0Cards: CardData[] = [
	{
		id: 'w0-c01',
		type: 'concept',
		front: 'What is a variable (pronumeral) in algebra?',
		back: 'A variable is a letter that stands in for a number we do not know yet, or a number that can change. For example, in 3x + 2 the letter x is a variable.',
		hint: 'It holds the place of a number.'
	},
	{
		id: 'w0-c02',
		type: 'concept',
		front: 'In the term 5x, what is the coefficient and what is the variable?',
		back: 'The coefficient is 5 (the number multiplying the variable) and the variable is x. 5x means "5 times x".',
		hint: 'The number in front is the coefficient.'
	},
	{
		id: 'w0-c03',
		type: 'concept',
		front: 'What is a "constant" term?',
		back: 'A constant is a term that is just a number, with no variable attached. In 3x + 7, the 7 is a constant — its value never changes.'
	},
	{
		id: 'w0-c04',
		type: 'concept',
		front: 'What are "like terms"?',
		back: 'Like terms have exactly the same variable part. 3x and 5x are like terms; 3x and 3y are not; 2x and 2x² are not (the powers differ).',
		hint: 'Same letter(s), same power.'
	},
	{
		id: 'w0-c05',
		type: 'concept',
		front: 'Simplify 4x + 3x − x.',
		back: '6x. All three are like terms (all in x), so add and subtract the coefficients: 4 + 3 − 1 = 6.',
		hint: 'Only combine the numbers in front.'
	},
	{
		id: 'w0-c06',
		type: 'concept',
		front: 'Simplify 5a + 2b + 3a − b.',
		back: '8a + b. Collect the a-terms (5a + 3a = 8a) and the b-terms (2b − b = b) separately. Unlike terms cannot be combined.',
		hint: 'Group the a’s together and the b’s together.'
	},
	{
		id: 'w0-c07',
		type: 'concept',
		front: 'What does BODMAS stand for (the order of operations)?',
		back: 'Brackets, Orders (powers/roots), Division and Multiplication, Addition and Subtraction. You work through operations in this order. (Also called BIDMAS or PEMDAS.)',
		hint: 'Brackets come first, add/subtract last.'
	},
	{
		id: 'w0-c08',
		type: 'concept',
		front: 'Evaluate 2 + 3 × 4.',
		back: '14. Multiplication happens before addition: 3 × 4 = 12 first, then 2 + 12 = 14. (It is not 5 × 4 = 20.)',
		hint: 'Multiply before you add.'
	},
	{
		id: 'w0-c09',
		type: 'concept',
		front: 'Evaluate (2 + 3) × 4.',
		back: '20. The brackets come first: 2 + 3 = 5, then 5 × 4 = 20. Brackets let you change the normal order.',
		hint: 'Do what is inside the brackets first.'
	},
	{
		id: 'w0-c10',
		type: 'concept',
		front: 'What does it mean to "substitute" into an expression?',
		back: 'Substituting means replacing each variable with a given number, then working out the answer. It lets you find the value of an expression for particular values.',
		hint: 'Swap the letter for the number.'
	},
	{
		id: 'w0-c11',
		type: 'concept',
		front: 'Find the value of 3x + 2 when x = 4.',
		back: '14. Substitute x = 4: 3 × 4 + 2 = 12 + 2 = 14.',
		hint: 'Replace x with 4, then use BODMAS.'
	},
	{
		id: 'w0-c12',
		type: 'concept',
		front: 'What is the distributive law (expanding a single bracket)?',
		back: 'a(b + c) = ab + ac. You multiply the term outside the bracket by each term inside. For example, 2(x + 5) = 2x + 10.',
		hint: 'Multiply the outside term by everything inside.'
	},
	{
		id: 'w0-c13',
		type: 'concept',
		front: 'Expand 3(2x − 4).',
		back: '6x − 12. Multiply 3 by each term: 3 × 2x = 6x and 3 × (−4) = −12.',
		hint: 'Watch the minus sign on the second term.'
	},
	{
		id: 'w0-c14',
		type: 'list',
		front: 'What are the three basic index (power) laws?',
		back: [
			'Multiplying: aᵐ × aⁿ = aᵐ⁺ⁿ  (add the powers)',
			'Dividing: aᵐ ÷ aⁿ = aᵐ⁻ⁿ  (subtract the powers)',
			'Power of a power: (aᵐ)ⁿ = aᵐⁿ  (multiply the powers)'
		],
		hint: 'Add, subtract, multiply the powers.'
	},
	{
		id: 'w0-c15',
		type: 'concept',
		front: 'Simplify x³ × x⁴.',
		back: 'x⁷. When multiplying powers of the same base, add the indices: 3 + 4 = 7.',
		hint: 'Add the powers.'
	},
	{
		id: 'w0-c16',
		type: 'concept',
		front: 'What does anything to the power of 0 equal? e.g. 5⁰',
		back: '1. Any non-zero number (or variable) raised to the power 0 equals 1. So 5⁰ = 1 and x⁰ = 1.'
	},
	{
		id: 'w0-c17',
		type: 'concept',
		front: 'What is the golden rule for solving an equation?',
		back: 'Whatever you do to one side of the equation, you must do to the other side. This keeps the equation balanced. Use inverse (opposite) operations to get the variable on its own.',
		hint: 'Keep both sides balanced.'
	},
	{
		id: 'w0-c18',
		type: 'concept',
		front: 'Solve x + 7 = 12.',
		back: 'x = 5. Subtract 7 from both sides (the inverse of +7): x = 12 − 7 = 5.',
		hint: 'Do the opposite of +7.'
	},
	{
		id: 'w0-c19',
		type: 'concept',
		front: 'Solve 3x = 15.',
		back: 'x = 5. Divide both sides by 3 (the inverse of ×3): x = 15 ÷ 3 = 5.',
		hint: 'The opposite of multiplying by 3 is dividing by 3.'
	},
	{
		id: 'w0-c20',
		type: 'concept',
		front: 'Solve 2x + 1 = 9 (a two-step equation).',
		back: 'x = 4. First undo the +1: subtract 1 from both sides → 2x = 8. Then undo the ×2: divide both sides by 2 → x = 4.',
		hint: 'Undo the +1 first, then the ×2.'
	},
	{
		id: 'w0-c21',
		type: 'concept',
		front: 'Rearrange y = x + 3 to make x the subject.',
		back: 'x = y − 3. Subtract 3 from both sides so x is on its own. "Making x the subject" means getting x by itself on one side.',
		hint: 'Get x alone using the inverse operation.'
	}
];

export const m0Quiz: QuizData[] = [
	{
		id: 'w0-q01',
		type: 'multiple-choice',
		question: 'Which of the following are like terms?',
		options: ['3x and 3y', '3x and 5x', '2x and 2x²', '4a and 4b'],
		correctIndex: 1,
		explanation: 'Like terms have the same variable raised to the same power. 3x and 5x are both in x to the power 1, so they are like terms and can be combined to 8x.'
	},
	{
		id: 'w0-q02',
		type: 'fill-blank',
		question: 'Simplify: 7x + 2x − 4x',
		answer: '5x',
		acceptableAnswers: ['5x', '5*x'],
		explanation: 'All terms are in x, so combine the coefficients: 7 + 2 − 4 = 5, giving 5x.'
	},
	{
		id: 'w0-q03',
		type: 'multiple-choice',
		question: 'Using BODMAS, evaluate: 6 + 2 × 5',
		options: ['40', '16', '13', '20'],
		correctIndex: 1,
		explanation: 'Multiplication comes before addition: 2 × 5 = 10 first, then 6 + 10 = 16.'
	},
	{
		id: 'w0-q04',
		type: 'multiple-choice',
		question: 'Evaluate: (4 + 1) × 3',
		options: ['7', '13', '15', '12'],
		correctIndex: 2,
		explanation: 'Brackets first: 4 + 1 = 5, then 5 × 3 = 15.'
	},
	{
		id: 'w0-q05',
		type: 'fill-blank',
		question: 'Find the value of 2x + 5 when x = 3.',
		answer: '11',
		acceptableAnswers: ['11'],
		explanation: 'Substitute x = 3: 2 × 3 + 5 = 6 + 5 = 11.'
	},
	{
		id: 'w0-q06',
		type: 'multiple-choice',
		question: 'Expand: 4(x + 2)',
		options: ['4x + 2', '4x + 8', 'x + 8', '4x + 6'],
		correctIndex: 1,
		explanation: 'Multiply 4 by each term inside: 4 × x = 4x and 4 × 2 = 8, giving 4x + 8.'
	},
	{
		id: 'w0-q07',
		type: 'multiple-choice',
		question: 'Simplify: a⁵ × a²',
		options: ['a⁷', 'a¹⁰', 'a³', '2a⁷'],
		correctIndex: 0,
		explanation: 'When multiplying powers of the same base, add the indices: 5 + 2 = 7, giving a⁷.'
	},
	{
		id: 'w0-q08',
		type: 'fill-blank',
		question: 'Solve for x: x − 6 = 10',
		answer: '16',
		acceptableAnswers: ['16', 'x=16', 'x = 16'],
		explanation: 'Add 6 to both sides (the inverse of −6): x = 10 + 6 = 16.'
	},
	{
		id: 'w0-q09',
		type: 'fill-blank',
		question: 'Solve for x: 4x = 20',
		answer: '5',
		acceptableAnswers: ['5', 'x=5', 'x = 5'],
		explanation: 'Divide both sides by 4 (the inverse of ×4): x = 20 ÷ 4 = 5.'
	},
	{
		id: 'w0-q10',
		type: 'multiple-choice',
		question: 'Solve the two-step equation: 3x + 2 = 14',
		options: ['x = 6', 'x = 4', 'x = 5', 'x = 12'],
		correctIndex: 1,
		explanation: 'First subtract 2 from both sides: 3x = 12. Then divide both sides by 3: x = 4.'
	}
];
