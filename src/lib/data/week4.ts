import type { CardData, QuizData } from './week1';

export const week4Cards: CardData[] = [
	{
		id: 'w4-c01',
		type: 'concept',
		front: 'What does the plot(x, y) command do?',
		back: 'Creates a 2D plot with the values in vector x on the horizontal axis and the values in vector y on the vertical axis. Both vectors must have the same number of elements.',
		hint: 'The most basic plotting command in MATLAB.'
	},
	{
		id: 'w4-c02',
		type: 'code',
		front: 'Show a basic plot example in MATLAB.',
		back: 'Create x and y vectors, then call plot(x, y).',
		code: '>> x = [1.1 1.8 3.2 5.5 7 7.5 8 10];\n>> y = [2 6.5 7 7 5.5 4 6 8];\n>> plot(x,y)'
	},
	{
		id: 'w4-c03',
		type: 'list',
		front: 'What are the line style specifiers in MATLAB?',
		back: [
			'- (solid line, default)',
			'-- (dashed line)',
			': (dotted line)',
			'-. (dash-dot line)'
		]
	},
	{
		id: 'w4-c04',
		type: 'list',
		front: 'What are the color specifiers for plot lines?',
		back: [
			'r — Red',
			'g — Green',
			'b — Blue (default)',
			'c — Cyan',
			'm — Magenta',
			'y — Yellow',
			'k — Black',
			'w — White'
		]
	},
	{
		id: 'w4-c05',
		type: 'list',
		front: 'Name 6 common marker type specifiers.',
		back: [
			'+ — Plus sign',
			'o — Circle',
			'* — Asterisk',
			'. — Point',
			'x — Cross',
			's — Square',
			'd — Diamond',
			'^ — Triangle (up)'
		]
	},
	{
		id: 'w4-c06',
		type: 'code',
		front: 'How do you combine line style, color, and markers in a plot?',
		back: 'Put all specifiers in a single string as the third argument. They can be in any order.',
		code: ">> plot(x, y, '--r*')\n% Dashed red line with asterisk markers\n\n>> plot(x, y, 'g:d')\n% Green dotted line with diamond markers"
	},
	{
		id: 'w4-c07',
		type: 'code',
		front: 'How do you set LineWidth and MarkerSize in a plot?',
		back: 'Use Property Name / Property Value pairs after the line specifiers.',
		code: ">> yr = [1988:1994];\n>> sale = [8 12 20 22 18 24 27];\n>> plot(yr, sale, '--r*', ...\n   'linewidth', 2, 'markersize', 12)"
	},
	{
		id: 'w4-c08',
		type: 'list',
		front: 'What Property Name/Value pairs can you use with plot?',
		back: [
			'LineWidth — Width of the line (default 0.5)',
			'MarkerSize — Size of markers in points',
			'MarkerEdgeColor — Color of marker outline',
			'MarkerFaceColor — Fill color of markers'
		]
	},
	{
		id: 'w4-c09',
		type: 'concept',
		front: 'How do you plot a mathematical function in MATLAB?',
		back: 'First create an x vector for the domain, then calculate y using element-wise operations, then plot.',
		code: "x = [-2:0.01:4];\ny = 3.5.^(-0.5*x).*cos(6*x);\nplot(x, y)"
	},
	{
		id: 'w4-c10',
		type: 'code',
		front: 'What is fplot and how is it different from plot?',
		back: 'fplot plots a function directly from a string expression. You specify the function and the x-axis limits instead of creating vectors first.',
		code: ">> fplot('8*x^2+5*cos(x)', [-3 3])\n% Plots f(x) = 8x^2 + 5cos(x) from -3 to 3"
	},
	{
		id: 'w4-c11',
		type: 'code',
		front: 'How do you add a title, axis labels, and legend to a plot?',
		back: 'Use title(), xlabel(), ylabel(), and legend() commands after the plot command.',
		code: ">> plot(x, y)\n>> title('My Plot Title')\n>> xlabel('X Axis Label')\n>> ylabel('Y Axis Label')\n>> legend('Data Series 1')"
	},
	{
		id: 'w4-c12',
		type: 'concept',
		front: 'What does hold on / hold off do?',
		back: 'hold on keeps the current plot and adds new plots on top of it. Without hold on, each new plot command replaces the previous one. hold off returns to normal behavior.',
	},
	{
		id: 'w4-c13',
		type: 'concept',
		front: 'What does subplot do?',
		back: 'subplot(m, n, p) divides the figure window into an m-by-n grid and makes position p the active plot area. This lets you show multiple plots in one figure.',
		code: '>> subplot(2,1,1)  % 2 rows, 1 col, position 1\n>> plot(x1, y1)\n>> subplot(2,1,2)  % position 2\n>> plot(x2, y2)'
	},
	{
		id: 'w4-c14',
		type: 'concept',
		front: 'What does grid on do?',
		back: 'Adds grid lines to the current plot, making it easier to read values from the graph. grid off removes them.',
	},
	{
		id: 'w4-c15',
		type: 'concept',
		front: 'Why do we use element-wise operations (.* .^ ./) when plotting functions?',
		back: 'When x is a vector, operations like x^2 try matrix power (which fails for non-square). Element-wise .^ raises each element individually, which is what we want for plotting f(x) at many x values.',
		code: "% Wrong:\ny = 3.5^(-0.5*x) * cos(6*x)  % Error!\n\n% Right:\ny = 3.5.^(-0.5*x) .* cos(6*x)  % Works!"
	}
];

export const week4Quiz: QuizData[] = [
	{
		id: 'w4-q01',
		type: 'multiple-choice',
		question: 'What do x and y need to have in common for plot(x, y) to work?',
		options: [
			'Same data type',
			'Same number of elements',
			'Both must be positive',
			'Both must be row vectors'
		],
		correctIndex: 1,
		explanation: 'The x and y vectors must have the same number of elements. Each (x(i), y(i)) pair defines a point on the plot.'
	},
	{
		id: 'w4-q02',
		type: 'fill-blank',
		question: 'What specifier creates a dashed line in a plot?',
		answer: '--',
		explanation: 'The -- specifier creates a dashed line. Other options: - (solid), : (dotted), -. (dash-dot).'
	},
	{
		id: 'w4-q03',
		type: 'multiple-choice',
		question: "What does plot(x, y, 'ro') display?",
		options: [
			'Red solid line',
			'Red circles with no connecting line',
			'Orange line',
			'Red dashed line with circles'
		],
		correctIndex: 1,
		explanation: "'r' means red, 'o' means circle markers. With no line specifier, only markers are shown (no line connecting them)."
	},
	{
		id: 'w4-q04',
		type: 'fill-blank',
		question: 'What MATLAB command adds a title to a plot?',
		answer: 'title',
		acceptableAnswers: ['title', "title('text')"],
		explanation: "title('text') adds a title above the current plot."
	},
	{
		id: 'w4-q05',
		type: 'multiple-choice',
		question: 'What does hold on do?',
		options: [
			'Pauses the program',
			'Keeps the current plot so new plots are added on top',
			'Locks the axis limits',
			'Saves the figure to a file'
		],
		correctIndex: 1,
		explanation: 'hold on retains the current plot. Without it, each new plot() call replaces the previous one.'
	},
	{
		id: 'w4-q06',
		type: 'multiple-choice',
		question: 'What does subplot(2, 3, 4) do?',
		options: [
			'Creates a 2x3 grid and selects position 4',
			'Creates 4 plots in a 2x3 layout',
			'Creates a 2x3 matrix plot',
			'Plots 4 lines on a 2x3 grid'
		],
		correctIndex: 0,
		explanation: 'subplot(m, n, p) creates an m-by-n grid of plot areas and makes position p active. Here: 2 rows, 3 columns, position 4 (first plot in second row).'
	},
	{
		id: 'w4-q07',
		type: 'fill-blank',
		question: 'What color specifier letter represents black?',
		answer: 'k',
		explanation: "'k' is black. 'b' is blue. The 'k' comes from the printing industry (Key color = black)."
	},
	{
		id: 'w4-q08',
		type: 'multiple-choice',
		question: 'What is the difference between plot and fplot?',
		options: [
			'fplot is faster',
			'plot uses vectors, fplot uses a function string and limits',
			'fplot can only plot linear functions',
			'There is no difference'
		],
		correctIndex: 1,
		explanation: "plot(x,y) requires you to create x and y vectors first. fplot('function', limits) takes a function expression and domain limits directly."
	},
	{
		id: 'w4-q09',
		type: 'multiple-choice',
		question: 'Why should you use .^ instead of ^ when plotting a function?',
		options: [
			'.^ is faster',
			'^ only works on scalars, .^ works on vectors element-wise',
			'There is no difference',
			'.^ is for complex numbers'
		],
		correctIndex: 1,
		explanation: 'When x is a vector, x^2 tries matrix exponentiation (fails for non-square). x.^2 raises each element to the power of 2, which is what you want for plotting.'
	},
	{
		id: 'w4-q10',
		type: 'fill-blank',
		question: 'What command adds grid lines to a plot?',
		answer: 'grid on',
		acceptableAnswers: ['grid on', 'grid'],
		explanation: 'grid on displays grid lines on the current plot. grid off removes them.'
	}
];
