export interface WeekMeta {
	num: number;
	title: string;
	description: string;
	topics: string[];
}

export const weeks: WeekMeta[] = [
	{
		num: 1,
		title: 'MATLAB Basics',
		description: 'Get started with MATLAB: the environment, variables, arithmetic operators, and built-in functions.',
		topics: [
			'MATLAB environment (Command Window, Workspace, Editor)',
			'Creating and overwriting variables',
			'Arithmetic operators (+, -, *, /, ^)',
			'Operator precedence and parentheses',
			'Semicolon to suppress output',
			'Elementary math functions (sin, cos, sqrt, log, abs, etc.)'
		]
	},
	{
		num: 2,
		title: 'Vectors & Matrices',
		description: 'Create and manipulate vectors and matrices using square brackets, colon notation, and linspace.',
		topics: [
			'Row vectors (commas or spaces)',
			'Column vectors (semicolons)',
			'Colon notation (start:step:end)',
			'linspace(start, stop, n)',
			'Transpose operator (single quote)',
			'Indexing elements with parentheses',
			'Extracting subsets of vectors',
			'Creating 2D matrices'
		]
	},
	{
		num: 3,
		title: 'Array Operations',
		description: 'Perform mathematical operations on arrays including multiplication, inverse, and solving linear equations.',
		topics: [
			'Array addition and subtraction',
			'Matrix multiplication (* with linear algebra rules)',
			'Element-wise operations (.* ./ .^)',
			'Identity matrix (eye)',
			'Matrix inverse (inv or ^-1)',
			'Determinants (det)',
			'Left division (\\) for solving AX = B',
			'Right division (/) for solving XC = D'
		]
	},
	{
		num: 4,
		title: '2D Plotting',
		description: 'Create and format two-dimensional plots with line styles, colors, markers, and labels.',
		topics: [
			'plot(x, y) command',
			'Line style specifiers (solid, dashed, dotted, dash-dot)',
			'Color specifiers (r, g, b, c, m, y, k, w)',
			'Marker types (+, o, *, x, ^, v, s, d)',
			'Property Name/Value pairs (LineWidth, MarkerSize)',
			'fplot for plotting functions',
			'Labels, titles, legends, and grid',
			'hold on/off and subplot'
		]
	},
	{
		num: 5,
		title: 'Programming',
		description: 'Control program flow with conditionals, loops, and logical operators in MATLAB.',
		topics: [
			'Relational operators (<, >, <=, >=, ==, ~=)',
			'Logical operators (&, |, ~, &&, ||)',
			'if / elseif / else / end',
			'switch / case / otherwise / end',
			'for loops',
			'while loops',
			'break and continue',
			'Nested loops'
		]
	},
	{
		num: 6,
		title: 'Data I/O & Functions',
		description: 'Import and export data, and create your own reusable functions in MATLAB.',
		topics: [
			'load command (.mat and .txt files)',
			'save command',
			'xlsread / xlswrite',
			'csvread / csvwrite',
			'User-defined functions (function keyword)',
			'Input and output arguments',
			'Local vs global variables',
			'Subfunctions'
		]
	}
];

export function getWeek(num: number): WeekMeta | undefined {
	return weeks.find(w => w.num === num);
}
