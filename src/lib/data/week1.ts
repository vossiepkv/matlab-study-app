export interface CardData {
	id: string;
	type: 'concept' | 'code' | 'list';
	front: string;
	back: string | string[];
	code?: string;
	hint?: string;
}

export interface QuizData {
	id: string;
	type: 'multiple-choice' | 'fill-blank' | 'code-output';
	question: string;
	options?: string[];
	correctIndex?: number;
	answer?: string;
	acceptableAnswers?: string[];
	code?: string;
	explanation: string;
}

export const week1Cards: CardData[] = [
	{
		id: 'w1-c01',
		type: 'concept',
		front: 'What does MATLAB stand for?',
		back: 'MATrix LABoratory',
		hint: 'Think about what data structure MATLAB is built around.'
	},
	{
		id: 'w1-c02',
		type: 'list',
		front: 'What are the major tools in the MATLAB environment?',
		back: [
			'The Command Window',
			'The Command History',
			'The Workspace',
			'The Current Directory',
			'The Help Browser',
			'Script/Editor Window'
		]
	},
	{
		id: 'w1-c03',
		type: 'concept',
		front: 'What is the Command Window used for in MATLAB?',
		back: 'The Command Window is where you type commands directly at the >> prompt and see results immediately. It works like an interactive calculator.',
		hint: 'Look for the >> symbol.'
	},
	{
		id: 'w1-c04',
		type: 'concept',
		front: 'What is the Workspace in MATLAB?',
		back: 'The Workspace shows all variables currently stored in memory, along with their names and values. Variables are created when you assign values.',
	},
	{
		id: 'w1-c05',
		type: 'concept',
		front: 'What does the Editor Window (M file) do?',
		back: 'The Editor lets you write, save, and run scripts (.m files). You can write multiple lines of code and execute them all at once by clicking Run.',
	},
	{
		id: 'w1-c06',
		type: 'code',
		front: 'What happens if you type an expression without assigning it to a variable?',
		back: 'MATLAB stores the result in a default variable called "ans" (short for answer). If "ans" already exists, it gets overwritten.',
		code: '>> 1+2*3\nans =\n     7',
		hint: 'MATLAB always needs somewhere to put the result.'
	},
	{
		id: 'w1-c07',
		type: 'code',
		front: 'How do you assign a value to a variable in MATLAB?',
		back: 'Use the equals sign: variable_name = value (or expression)',
		code: '>> a = 1+2*3\na =\n     7\n>> 4*a\nans =\n    28'
	},
	{
		id: 'w1-c08',
		type: 'concept',
		front: 'What does putting a semicolon (;) at the end of a command do?',
		back: 'The semicolon suppresses the output — MATLAB still executes the command and stores the result, but does not display it in the Command Window.',
		code: '>> t = 5;\n>> t = t+1\nt =\n     6',
		hint: 'The variable still gets created/updated.'
	},
	{
		id: 'w1-c09',
		type: 'list',
		front: 'What are the basic arithmetic operators in MATLAB?',
		back: [
			'+ Addition',
			'- Subtraction',
			'* Multiplication',
			'/ Division',
			'^ Power (exponent)'
		]
	},
	{
		id: 'w1-c10',
		type: 'concept',
		front: 'What is the order of operations (precedence) in MATLAB?',
		back: 'Parentheses first, then exponents (^), then multiplication (*) and division (/), then addition (+) and subtraction (-). For equal precedence, evaluation goes left to right.',
		hint: 'Same as standard math: PEMDAS / BODMAS.'
	},
	{
		id: 'w1-c11',
		type: 'code',
		front: 'Why do these two expressions give different results?\n1/(2+3^2)+4/5*6/7\nvs\n1/2+3^2+4/5*6/7',
		back: 'Parentheses change the order of operations. In the first expression, (2+3^2) = 11 is calculated first as the denominator. Without parentheses, 1/2 and 3^2 are separate terms.',
		code: '>> 1/(2+3^2)+4/5*6/7\nans = 0.7766\n\n>> 1/2+3^2+4/5*6/7\nans = 10.1857'
	},
	{
		id: 'w1-c12',
		type: 'code',
		front: 'Why does typing 5x in MATLAB cause an error?',
		back: 'MATLAB requires an explicit multiplication operator (*). You must write 5*x, not 5x. MATLAB will suggest "Did you mean: 5*x".',
		code: '>> x = 10\n>> 5x\nError: Invalid expression.\nDid you mean:\n>> 5*x'
	},
	{
		id: 'w1-c13',
		type: 'list',
		front: 'Name 6 common elementary math functions in MATLAB.',
		back: [
			'cos(x) — Cosine',
			'sin(x) — Sine',
			'tan(x) — Tangent',
			'sqrt(x) — Square root',
			'abs(x) — Absolute value',
			'log(x) — Natural logarithm'
		],
		hint: 'Think about trigonometry and basic math.'
	},
	{
		id: 'w1-c14',
		type: 'list',
		front: 'Name 4 rounding-related functions in MATLAB.',
		back: [
			'round(x) — Round to nearest integer',
			'ceil(x) — Round towards positive infinity',
			'floor(x) — Round towards negative infinity',
			'rem(x,y) — Remainder after division'
		]
	},
	{
		id: 'w1-c15',
		type: 'concept',
		front: 'What are clc, clear all, and close all used for?',
		back: 'clc clears the Command Window display. clear all removes all variables from the Workspace. close all closes all open figure windows. These are typically placed at the top of scripts.',
		code: 'clc          %Clear the Command Window\nclear all    %Clear the Workspace\nclose all    %Close all figures'
	},
	{
		id: 'w1-c16',
		type: 'concept',
		front: 'What is the difference between log(x) and log10(x) in MATLAB?',
		back: 'log(x) computes the natural logarithm (base e, ln). log10(x) computes the common logarithm (base 10). This is a common source of confusion!',
		hint: 'Most calculators use log for base-10, but MATLAB uses log for base-e.'
	},
	{
		id: 'w1-c17',
		type: 'code',
		front: 'What does the % symbol do in MATLAB code?',
		back: 'The % symbol starts a comment. Everything after % on that line is ignored by MATLAB. Comments are used to explain code.',
		code: 'a = 10;    % This is a comment\n% This entire line is a comment'
	},
	{
		id: 'w1-c18',
		type: 'concept',
		front: 'What is a script file (M file) in MATLAB?',
		back: 'A script file (with .m extension) contains a sequence of MATLAB commands saved as a file. When you run the script, all commands execute in order. Scripts are created in the Editor window.',
		hint: 'Think of it as a saved list of commands.'
	},
	{
		id: 'w1-c19',
		type: 'code',
		front: 'Can you overwrite a variable in MATLAB?',
		back: 'Yes. Variables can be reassigned at any time. The new value replaces the old one.',
		code: '>> t = 5;\n>> t = t + 1\nt =\n     6'
	},
	{
		id: 'w1-c20',
		type: 'concept',
		front: 'What are the %% symbols used for in the Editor?',
		back: '%% creates a section break in a script file. This divides the code into sections that can be run independently using "Run Section". Useful for debugging one part at a time.'
	}
];

export const week1Quiz: QuizData[] = [
	{
		id: 'w1-q01',
		type: 'multiple-choice',
		question: 'What does MATLAB stand for?',
		options: ['Math Tool Lab', 'Matrix Laboratory', 'Mathematical Analysis Tool', 'Math Tablet'],
		correctIndex: 1,
		explanation: 'MATLAB stands for MATrix LABoratory because it was originally designed for matrix computations.'
	},
	{
		id: 'w1-q02',
		type: 'code-output',
		question: 'What is the output of this expression?',
		code: '>> 1+2*3',
		answer: '7',
		explanation: 'Multiplication has higher precedence than addition. So 2*3 = 6 is evaluated first, then 1+6 = 7.'
	},
	{
		id: 'w1-q03',
		type: 'multiple-choice',
		question: 'What does the semicolon (;) at the end of a command do?',
		options: [
			'Ends the program',
			'Deletes the variable',
			'Suppresses the output display',
			'Creates a comment'
		],
		correctIndex: 2,
		explanation: 'The semicolon suppresses output display. The command still executes and the variable is still created/updated, but nothing is shown in the Command Window.'
	},
	{
		id: 'w1-q04',
		type: 'code-output',
		question: 'What value does x have after this code runs?',
		code: '>> x = 5 + 3',
		answer: '8',
		explanation: 'The expression 5 + 3 evaluates to 8, which is assigned to the variable x.'
	},
	{
		id: 'w1-q05',
		type: 'multiple-choice',
		question: 'Which function calculates the natural logarithm in MATLAB?',
		options: ['log10(x)', 'ln(x)', 'log(x)', 'natlog(x)'],
		correctIndex: 2,
		explanation: 'In MATLAB, log(x) computes the natural logarithm (base e). For base-10 logarithm, use log10(x). Note: MATLAB does not have a ln() function.'
	},
	{
		id: 'w1-q06',
		type: 'code-output',
		question: 'What is the result of this MATLAB expression?',
		code: '>> x = 5 + 3\n>> y = 10 - 2\n>> z = x*y',
		answer: '64',
		explanation: 'x = 8, y = 8, so z = 8 * 8 = 64.'
	},
	{
		id: 'w1-q07',
		type: 'fill-blank',
		question: 'What command clears all variables from the Workspace?',
		answer: 'clear all',
		acceptableAnswers: ['clear', 'clear all'],
		explanation: 'The command "clear all" removes all variables from the Workspace. You can also use just "clear" for the same effect.'
	},
	{
		id: 'w1-q08',
		type: 'multiple-choice',
		question: 'What happens when you type 5x in the Command Window (where x = 10)?',
		options: [
			'It returns 50',
			'It creates a variable named 5x',
			'It gives an error — you need 5*x',
			'It returns 5'
		],
		correctIndex: 2,
		explanation: 'MATLAB requires explicit multiplication operators. 5x is invalid syntax — you must write 5*x.'
	},
	{
		id: 'w1-q09',
		type: 'code-output',
		question: 'What does this expression evaluate to?',
		code: '>> m = 8^2',
		answer: '64',
		explanation: 'The ^ operator is the power/exponent operator. 8^2 = 8 squared = 64.'
	},
	{
		id: 'w1-q10',
		type: 'multiple-choice',
		question: 'What does clc do?',
		options: [
			'Clears all variables from memory',
			'Closes all figure windows',
			'Clears the Command Window display',
			'Closes the current script file'
		],
		correctIndex: 2,
		explanation: 'clc clears the Command Window display. It does not affect variables (use "clear" for that) or figures (use "close all" for that).'
	}
];
