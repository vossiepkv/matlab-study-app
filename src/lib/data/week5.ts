import type { CardData, QuizData } from './week1';

export const week5Cards: CardData[] = [
	{
		id: 'w5-c01',
		type: 'list',
		front: 'What are the relational operators in MATLAB?',
		back: [
			'< — Less than',
			'> — Greater than',
			'<= — Less than or equal to',
			'>= — Greater than or equal to',
			'== — Equal to (two equals signs)',
			'~= — Not equal to'
		],
		hint: 'Note: equality check uses == not ='
	},
	{
		id: 'w5-c02',
		type: 'concept',
		front: 'What do relational operators return in MATLAB?',
		back: 'A relational operator returns 1 (true) or 0 (false). If comparing two arrays of the same size, the comparison is done element-by-element, producing a logical array of 1s and 0s.',
		code: '>> 5 < 8\nans = 1\n\n>> [3 7 2] > [4 5 1]\nans =\n     0  1  1'
	},
	{
		id: 'w5-c03',
		type: 'list',
		front: 'What are the logical operators in MATLAB?',
		back: [
			'& — AND (element-wise)',
			'| — OR (element-wise)',
			'~ — NOT',
			'&& — Short-circuit AND (scalars only)',
			'|| — Short-circuit OR (scalars only)'
		]
	},
	{
		id: 'w5-c04',
		type: 'concept',
		front: 'What is the difference between & and && in MATLAB?',
		back: '& is element-wise AND that works on arrays. && is short-circuit AND that only works on scalars — it stops evaluating as soon as the result is known (if the first operand is false, it skips the second).',
	},
	{
		id: 'w5-c05',
		type: 'code',
		front: 'How does an if/elseif/else statement work?',
		back: 'MATLAB checks conditions in order. The first true condition runs its block. If none are true, the else block runs (if present). Always ends with end.',
		code: 'if grade >= 80\n    disp(\'HD\')\nelseif grade >= 70\n    disp(\'DI\')\nelseif grade >= 60\n    disp(\'CR\')\nelseif grade >= 50\n    disp(\'PA\')\nelse\n    disp(\'NN\')\nend'
	},
	{
		id: 'w5-c06',
		type: 'code',
		front: 'How does a switch/case statement work?',
		back: 'switch evaluates an expression and compares it to each case value. When a match is found, that block executes. otherwise handles unmatched values.',
		code: 'switch day\n    case 1\n        disp(\'Monday\')\n    case 2\n        disp(\'Tuesday\')\n    case {6, 7}\n        disp(\'Weekend!\')\n    otherwise\n        disp(\'Midweek\')\nend'
	},
	{
		id: 'w5-c07',
		type: 'code',
		front: 'How does a for loop work in MATLAB?',
		back: 'A for loop repeats a block of code a set number of times. The loop variable takes each value from the specified vector.',
		code: 'for i = 1:5\n    disp(i)\nend\n% Prints: 1, 2, 3, 4, 5\n\nfor k = [2 4 8 16]\n    disp(k)\nend\n% Prints: 2, 4, 8, 16'
	},
	{
		id: 'w5-c08',
		type: 'code',
		front: 'How does a while loop work in MATLAB?',
		back: 'A while loop repeats as long as the condition is true. The condition is checked BEFORE each iteration. You must update the condition variable inside the loop to avoid infinite loops.',
		code: 'x = 1;\nwhile x <= 10\n    disp(x)\n    x = x + 2;\nend\n% Prints: 1, 3, 5, 7, 9'
	},
	{
		id: 'w5-c09',
		type: 'concept',
		front: 'What is the difference between a for loop and a while loop?',
		back: 'A for loop runs a known number of times (iterates over a vector). A while loop runs as long as a condition is true — use it when you don\'t know in advance how many iterations you need.',
	},
	{
		id: 'w5-c10',
		type: 'concept',
		front: 'What do break and continue do in loops?',
		back: 'break exits the loop entirely (stops all remaining iterations). continue skips the rest of the current iteration and jumps to the next one.',
		code: 'for i = 1:10\n    if i == 5\n        break    % stops at 5\n    end\n    disp(i)\nend\n% Prints: 1, 2, 3, 4'
	},
	{
		id: 'w5-c11',
		type: 'concept',
		front: 'What are nested loops?',
		back: 'A loop inside another loop. The inner loop completes all its iterations for each iteration of the outer loop. Commonly used for processing 2D arrays (matrices).',
		code: 'for i = 1:3\n    for j = 1:2\n        disp([i, j])\n    end\nend\n% Runs 3 x 2 = 6 times'
	},
	{
		id: 'w5-c12',
		type: 'concept',
		front: 'What does ~= mean in MATLAB?',
		back: '~= means "not equal to". The tilde (~) is the NOT operator in MATLAB. This is different from many other languages that use != for not equal.',
		hint: 'MATLAB uses ~ instead of !'
	}
];

export const week5Quiz: QuizData[] = [
	{
		id: 'w5-q01',
		type: 'multiple-choice',
		question: 'Which operator checks if two values are equal in MATLAB?',
		options: ['=', '==', '===', 'eq'],
		correctIndex: 1,
		explanation: '== checks equality. A single = is for assignment. MATLAB does not use === or eq for comparison.'
	},
	{
		id: 'w5-q02',
		type: 'code-output',
		question: 'What is the output?',
		code: '>> 5 > 3 & 2 > 4',
		answer: '0',
		acceptableAnswers: ['0', 'false'],
		explanation: '5 > 3 is true (1), 2 > 4 is false (0). AND requires both to be true: 1 & 0 = 0 (false).'
	},
	{
		id: 'w5-q03',
		type: 'multiple-choice',
		question: 'What does the "otherwise" keyword do in a switch statement?',
		options: [
			'Terminates the switch',
			'Handles cases that do not match any case value',
			'Repeats the switch',
			'Checks multiple conditions at once'
		],
		correctIndex: 1,
		explanation: 'otherwise is the default block that runs when no case matches the switch expression. Like "else" for if statements.'
	},
	{
		id: 'w5-q04',
		type: 'code-output',
		question: 'What is the final value of sum?',
		code: 'sum = 0;\nfor i = 1:4\n    sum = sum + i;\nend',
		answer: '10',
		explanation: 'sum = 0+1+2+3+4 = 10. The loop adds each value of i to sum.'
	},
	{
		id: 'w5-q05',
		type: 'multiple-choice',
		question: 'When does a while loop stop?',
		options: [
			'After a set number of iterations',
			'When break is called',
			'When its condition becomes false',
			'Both B and C'
		],
		correctIndex: 3,
		explanation: 'A while loop stops when its condition becomes false OR when break is called. Both will end the loop.'
	},
	{
		id: 'w5-q06',
		type: 'fill-blank',
		question: 'What MATLAB operator means "not equal to"?',
		answer: '~=',
		explanation: '~= is the not-equal operator in MATLAB. The tilde (~) represents NOT.'
	},
	{
		id: 'w5-q07',
		type: 'code-output',
		question: 'What does this code print?',
		code: 'for i = 1:5\n    if i == 3\n        continue\n    end\n    disp(i)\nend',
		answer: '1 2 4 5',
		acceptableAnswers: ['1 2 4 5', '1, 2, 4, 5', '1\n2\n4\n5'],
		explanation: 'continue skips the rest of iteration 3 (so 3 is not printed), but the loop continues with 4 and 5.'
	},
	{
		id: 'w5-q08',
		type: 'multiple-choice',
		question: 'What does break do inside a loop?',
		options: [
			'Skips the current iteration',
			'Exits the loop completely',
			'Restarts the loop',
			'Pauses the loop'
		],
		correctIndex: 1,
		explanation: 'break immediately exits the loop. No further iterations are executed.'
	},
	{
		id: 'w5-q09',
		type: 'code-output',
		question: 'How many times does the inner loop run in total?',
		code: 'count = 0;\nfor i = 1:3\n    for j = 1:4\n        count = count + 1;\n    end\nend',
		answer: '12',
		explanation: 'The inner loop runs 4 times for each of the 3 outer loop iterations: 3 x 4 = 12.'
	},
	{
		id: 'w5-q10',
		type: 'multiple-choice',
		question: 'What is the difference between & and &&?',
		options: [
			'& is for numbers, && is for strings',
			'& is element-wise for arrays, && is short-circuit for scalars',
			'They are identical',
			'&& is element-wise, & is short-circuit'
		],
		correctIndex: 1,
		explanation: '& works element-wise on arrays. && is short-circuit AND that only works on scalar values and stops early if the first operand is false.'
	}
];
