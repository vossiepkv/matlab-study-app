export interface BreakdownPart {
	symbol: string;
	matlab: string;
	note?: string;
}

export interface TranslationData {
	id: string;
	math: string;
	spoken: string;
	context?: string;
	matlab: string;
	accept?: string[];
	breakdown: BreakdownPart[];
	hints: string[];
	explanation: string;
	gotchas?: string[];
}

export const week1Translations: TranslationData[] = [
	{
		id: 'w1-t01',
		math: '3² + 5',
		spoken: 'three squared plus five',
		context: 'A simple arithmetic expression (Week 1 Lab Q1a).',
		matlab: '3^2 + 5',
		accept: ['3^2+5'],
		breakdown: [
			{ symbol: '²', matlab: '^2', note: 'Powers use the caret ^ symbol.' },
			{ symbol: '+', matlab: '+', note: 'Plus stays the same.' }
		],
		hints: [
			'Replace the small raised "2" with ^2.',
			'Write the base first, then ^, then the power: 3^2.',
			'Everything else stays the same: 3^2 + 5.'
		],
		explanation: 'In MATLAB, superscripts are written with the caret operator (^). So 3² becomes 3^2.',
		gotchas: [
			'Do NOT use ** for powers — that is Python, not MATLAB.',
			'Spaces around + and ^ are optional: "3^2+5" works too.'
		]
	},
	{
		id: 'w1-t02',
		math: '3^(2+5)',
		spoken: 'three to the power of two plus five',
		context: 'Here the exponent itself is an expression (Week 1 Lab Q1b).',
		matlab: '3^(2+5)',
		accept: ['3^(2+5)'],
		breakdown: [
			{ symbol: '3^', matlab: '3^', note: '3 to the power of something.' },
			{ symbol: '(2+5)', matlab: '(2+5)', note: 'The whole exponent must be grouped.' }
		],
		hints: [
			'If the exponent is more than one number, you must wrap it in parentheses.',
			'Think: "3 raised to (the result of 2+5)".',
			'Write it as 3^(2+5).'
		],
		explanation: 'Without the parentheses, MATLAB would read 3^2+5 as (3^2)+5 = 14, not 3^7 = 2187. Parentheses control what gets raised to the power.',
		gotchas: [
			'3^2+5 is NOT the same as 3^(2+5). Operator precedence matters.',
			'Always wrap a multi-term exponent in parentheses.'
		]
	},
	{
		id: 'w1-t03',
		math: '60 / (2 + 3)',
		spoken: 'sixty divided by two plus three',
		context: 'A fraction where the denominator is an expression (Week 1 Lab Q1c).',
		matlab: '60/(2+3)',
		accept: ['60 / (2+3)', '60/(2+3)'],
		breakdown: [
			{ symbol: '÷ (fraction bar)', matlab: '/', note: 'The horizontal fraction bar becomes a forward slash.' },
			{ symbol: '(2+3)', matlab: '(2+3)', note: 'The bottom of the fraction must be grouped.' }
		],
		hints: [
			'A fraction bar means division: use /.',
			'Everything BELOW the bar goes inside parentheses.',
			'Write: 60/(2+3).'
		],
		explanation: 'Without parentheses, 60/2+3 would be (60/2)+3 = 33. The parentheses tell MATLAB that 2+3 is the whole denominator.',
		gotchas: [
			'Forgetting parentheses around the denominator is the #1 mistake when translating fractions.',
			'If the top of the fraction has multiple terms, put parentheses around that too.'
		]
	},
	{
		id: 'w1-t04',
		math: '5π / 3',
		spoken: 'five pi divided by three',
		context: 'Uses the constant pi (Week 1 Lab Q1d).',
		matlab: '5*pi/3',
		accept: ['5 * pi / 3', '(5*pi)/3'],
		breakdown: [
			{ symbol: '5π', matlab: '5*pi', note: 'Multiplication is never implicit — you must write *.' },
			{ symbol: 'π', matlab: 'pi', note: 'Lowercase "pi" is the built-in constant.' },
			{ symbol: '/3', matlab: '/3', note: 'Division with the forward slash.' }
		],
		hints: [
			'MATLAB needs an explicit * between 5 and pi.',
			'pi is already built in — just write it in lowercase.',
			'Chain it together: 5*pi/3.'
		],
		explanation: 'In math, "5π" implies multiplication, but MATLAB requires you to spell it out: 5*pi. The constant pi is built into MATLAB.',
		gotchas: [
			'Writing "5pi" will give an error — MATLAB will not guess you meant multiply.',
			'Do NOT write "PI" or "Pi" — MATLAB is case-sensitive and the constant is lowercase.'
		]
	},
	{
		id: 'w1-t05',
		math: 'A = π r²',
		spoken: 'area equals pi times radius squared',
		context: 'Area of a circle (Week 1 Example 2).',
		matlab: 'A = pi*r^2',
		accept: ['A = pi * r^2', 'A=pi*r^2'],
		breakdown: [
			{ symbol: 'A =', matlab: 'A =', note: 'Assignment — same as in math.' },
			{ symbol: 'π', matlab: 'pi', note: 'Built-in constant.' },
			{ symbol: 'πr', matlab: 'pi*r', note: 'Explicit * is required.' },
			{ symbol: 'r²', matlab: 'r^2', note: 'Caret for the power.' }
		],
		hints: [
			'Start with the assignment: A = ...',
			'pi times r needs a *: pi*r.',
			'r squared becomes r^2.'
		],
		explanation: 'Two rules combined: implicit multiplication must become *, and superscripts must become ^. Put them together: A = pi*r^2.',
		gotchas: [
			'pi*r^2 works because ^ has higher precedence than *, so r^2 is computed first.',
			'If you wrote pi*(r^2) it would also be correct — just more typing.'
		]
	},
	{
		id: 'w1-t06',
		math: 'depth = (g/k) × (t + (e^(-k·t) − 1) / k)',
		spoken: 'depth equals g over k times t plus e to the minus k t minus one all over k',
		context: 'Depth of a well from drop time (Week 1 Example 3).',
		matlab: 'depth = (g/k) * (t + (exp(-k*t) - 1)/k)',
		accept: ['depth=(g/k)*(t+(exp(-k*t)-1)/k)'],
		breakdown: [
			{ symbol: 'g/k', matlab: '(g/k)', note: 'Group it with parens for clarity.' },
			{ symbol: '×', matlab: '*', note: 'Multiplication.' },
			{ symbol: 'e^(something)', matlab: 'exp(something)', note: 'Use the exp() function, not e^.' },
			{ symbol: '-k·t', matlab: '-k*t', note: 'The dot is multiplication.' }
		],
		hints: [
			'The letter "e" raised to something is NOT just "e^..." — use exp(...).',
			'Anything you would multiply, use *.',
			'Keep the parentheses from the original formula to preserve order of operations.'
		],
		explanation: 'MATLAB has no constant named "e" — use exp(x) for e to the power of x. The rest is just converting × to * and keeping parentheses.',
		gotchas: [
			'Writing "e^(-k*t)" is WRONG — MATLAB will look for a variable called e.',
			'Always use exp() for the natural exponential.'
		]
	},
	{
		id: 'w1-t07',
		math: 'd = √((x₂−x₁)² + (y₂−y₁)²)',
		spoken: 'distance equals the square root of x two minus x one squared plus y two minus y one squared',
		context: 'Distance between two points (Week 1 Exercise 2).',
		matlab: 'd = sqrt((x2-x1)^2 + (y2-y1)^2)',
		accept: ['d=sqrt((x2-x1)^2+(y2-y1)^2)'],
		breakdown: [
			{ symbol: '√', matlab: 'sqrt(...)', note: 'Square root is the sqrt() function.' },
			{ symbol: 'subscripts x₁, x₂', matlab: 'x1, x2', note: 'Use plain numbers after the name — no subscript formatting.' },
			{ symbol: '²', matlab: '^2', note: 'Caret for the power.' }
		],
		hints: [
			'Start with the outer sqrt(...).',
			'Inside, add the two squared differences.',
			'Each squared difference needs parens: (x2-x1)^2.'
		],
		explanation: 'The square root function in MATLAB is sqrt(). Subscripts like x₁ just become x1 — no special notation needed.',
		gotchas: [
			'Do NOT forget the parens around (x2-x1) — without them, -x1^2 would be negated first.',
			'There is no √ key on most keyboards — always use sqrt().'
		]
	}
];

export const week2Translations: TranslationData[] = [
	{
		id: 'w2-t01',
		math: 'v = [1, 2, 3, 4, 5]  (row vector)',
		spoken: 'row vector with elements one two three four five',
		context: 'Basic row vector creation.',
		matlab: 'v = [1 2 3 4 5]',
		accept: ['v = [1, 2, 3, 4, 5]', 'v=[1 2 3 4 5]', 'v=[1,2,3,4,5]'],
		breakdown: [
			{ symbol: '[ ]', matlab: '[ ]', note: 'Square brackets enclose the vector.' },
			{ symbol: ', or space', matlab: ', or space', note: 'Either works to separate row elements.' }
		],
		hints: [
			'Square brackets hold the elements.',
			'Separate with spaces or commas — both work for rows.',
			'Write: v = [1 2 3 4 5].'
		],
		explanation: 'Row vectors use square brackets with elements separated by spaces OR commas. Both give the same result.',
		gotchas: [
			'Curly braces { } make a cell array, not a vector.',
			'Parentheses ( ) do NOT make a vector — they are for indexing.'
		]
	},
	{
		id: 'w2-t02',
		math: 'c = [1; 2; 3]  (column vector)',
		spoken: 'column vector with elements one two three',
		context: 'Column vector uses semicolons.',
		matlab: 'c = [1; 2; 3]',
		accept: ['c=[1;2;3]'],
		breakdown: [
			{ symbol: '[ ]', matlab: '[ ]', note: 'Square brackets still enclose the vector.' },
			{ symbol: ';', matlab: ';', note: 'Semicolon starts a new row.' }
		],
		hints: [
			'Same brackets as a row vector.',
			'Use ; between elements to stack them vertically.',
			'Write: c = [1; 2; 3].'
		],
		explanation: 'The semicolon inside [ ] means "new row". For column vectors each element is its own row.',
		gotchas: [
			'A semicolon at the END of a line suppresses output — that is different from a semicolon INSIDE brackets.',
			'Mixing spaces and semicolons is how you build matrices: [1 2; 3 4] is a 2x2.'
		]
	},
	{
		id: 'w2-t03',
		math: 'x = 0, 2, 4, 6, ..., 20',
		spoken: 'x starts at zero ends at twenty step size two',
		context: 'Colon notation for evenly spaced values.',
		matlab: 'x = 0:2:20',
		accept: ['x=0:2:20'],
		breakdown: [
			{ symbol: 'start', matlab: '0', note: 'First element.' },
			{ symbol: 'step', matlab: '2', note: 'Amount to add each time (middle slot).' },
			{ symbol: 'end', matlab: '20', note: 'Last element (included if the step lands on it).' }
		],
		hints: [
			'Use the colon notation: start:step:end.',
			'Start is 0, end is 20, and you are stepping by 2.',
			'Write: 0:2:20.'
		],
		explanation: 'The pattern start:step:end generates an evenly spaced vector. No brackets needed — the colon IS the constructor.',
		gotchas: [
			'The order is start:step:end, NOT start:end:step.',
			'If you omit the step (e.g. 0:20) MATLAB uses a step of 1.'
		]
	},
	{
		id: 'w2-t04',
		math: 'x = 5 evenly spaced values from 0 to 1',
		spoken: 'linear space of five values between zero and one',
		context: 'Use linspace when you know the count, not the step.',
		matlab: 'x = linspace(0, 1, 5)',
		accept: ['x=linspace(0,1,5)'],
		breakdown: [
			{ symbol: 'start', matlab: '0', note: 'First value.' },
			{ symbol: 'end', matlab: '1', note: 'Last value (always included).' },
			{ symbol: 'count', matlab: '5', note: 'Number of values to produce.' }
		],
		hints: [
			'linspace takes three arguments: start, end, and how many points.',
			'Order is linspace(start, end, n).',
			'Write: linspace(0, 1, 5).'
		],
		explanation: 'Use linspace(a, b, n) when you care about how many points you want. Use a:step:b when you care about the step size.',
		gotchas: [
			'The last argument is the COUNT, not the step. linspace(0,1,5) gives 5 points, not step 5.',
			'linspace always includes both endpoints.'
		]
	},
	{
		id: 'w2-t05',
		math: 'transpose of A',
		spoken: 'A transpose',
		context: 'Turn rows into columns (and vice versa).',
		matlab: "A'",
		accept: ["A'", 'transpose(A)'],
		breakdown: [
			{ symbol: 'Aᵀ or A′', matlab: "A'", note: "An apostrophe after the variable name." }
		],
		hints: [
			'Type the variable name, then a single apostrophe.',
			"Write: A'"
		],
		explanation: "The apostrophe (') is the transpose operator. It is a shortcut for the transpose() function.",
		gotchas: [
			"For vectors with complex numbers, ' does a complex-conjugate transpose. Use .' for a pure transpose in that case.",
			'Do not confuse the transpose apostrophe with a string delimiter.'
		]
	},
	{
		id: 'w2-t06',
		math: 'the element in row 2, column 3 of A',
		spoken: 'A at row two column three',
		context: 'Indexing a single element.',
		matlab: 'A(2,3)',
		accept: ['A(2, 3)'],
		breakdown: [
			{ symbol: '( )', matlab: '( )', note: 'Parentheses index into arrays.' },
			{ symbol: 'row, col', matlab: '2,3', note: 'Row first, then column.' }
		],
		hints: [
			'Use parentheses, not brackets, to index.',
			'Row comes first, column second.',
			'Write: A(2,3).'
		],
		explanation: 'MATLAB indexes with parentheses and is 1-based. The first row is row 1, not row 0.',
		gotchas: [
			'Indexing starts at 1 — A(0,0) is an error.',
			'A[2,3] with square brackets is a syntax error.'
		]
	},
	{
		id: 'w2-t07',
		math: 'the entire 2nd row of A',
		spoken: 'A row two all columns',
		context: 'Use a colon to mean "all of this dimension".',
		matlab: 'A(2,:)',
		accept: ['A(2, :)'],
		breakdown: [
			{ symbol: ':', matlab: ':', note: 'A lone colon means "everything in this dimension".' }
		],
		hints: [
			'Use A(row, col) with row = 2.',
			'For "all columns", put a colon in the column slot.',
			'Write: A(2,:).'
		],
		explanation: 'A single colon as an index means "all of that dimension". So A(2,:) gives every column of row 2.',
		gotchas: [
			'A(:,2) is the second COLUMN, not the second row — order matters.',
			'A(:) by itself reshapes the whole matrix into a column vector.'
		]
	}
];

export const week3Translations: TranslationData[] = [
	{
		id: 'w3-t01',
		math: 'every element of x squared  (x².^ element by element)',
		spoken: 'element wise square of x',
		context: 'Apply the same operation to each element of a vector.',
		matlab: 'x.^2',
		accept: ['x .^ 2'],
		breakdown: [
			{ symbol: '(each element)²', matlab: '.^', note: 'The dot before ^ means element-by-element.' }
		],
		hints: [
			'Matrix power (x^2) means matrix-multiply x by itself — which fails unless x is square.',
			'You want to square EACH ELEMENT, so you need the dot.',
			'Write: x.^2.'
		],
		explanation: 'The dot before any operator (.*, ./, .^) means "element-wise". Without the dot, MATLAB uses linear-algebra rules.',
		gotchas: [
			'x^2 on a non-square matrix is an error. x.^2 always works.',
			'When applying a formula to a vector of inputs, almost every *, /, ^ needs a dot.'
		]
	},
	{
		id: 'w3-t02',
		math: 'element-wise product of vectors a and b',
		spoken: 'a dot times b',
		context: 'Multiply each pair of matching elements.',
		matlab: 'a.*b',
		accept: ['a .* b'],
		breakdown: [
			{ symbol: '.', matlab: '.', note: 'Dot means element-wise.' },
			{ symbol: '*', matlab: '*', note: 'Multiply.' }
		],
		hints: [
			'Without a dot, a*b is matrix multiplication.',
			'For pair-by-pair multiplication, add the dot.',
			'Write: a.*b.'
		],
		explanation: 'a*b follows linear-algebra rules (inner dimensions must match). a.*b multiplies matching elements — the two vectors must be the same size.',
		gotchas: [
			'a*b requires inner dimensions to match. a.*b requires the shapes to be equal.',
			'If you get a "dimension" error, check whether you forgot the dot.'
		]
	},
	{
		id: 'w3-t03',
		math: 'solve the system A·X = B  for X',
		spoken: 'X equals A inverse times B',
		context: 'Solving a linear system (Week 3 Exercise 2).',
		matlab: 'X = A\\B',
		accept: ['X=A\\B', 'X = inv(A)*B', 'X=inv(A)*B'],
		breakdown: [
			{ symbol: '\\', matlab: '\\', note: 'Backslash is left-division: A\\B is "A inverse times B".' }
		],
		hints: [
			'The math operation is X = A⁻¹·B.',
			'The shortcut is the backslash: X = A\\B.',
			'It is faster and more accurate than inv(A)*B.'
		],
		explanation: 'A\\B means "multiply B on the left by the inverse of A". This is the standard MATLAB way to solve A*X = B.',
		gotchas: [
			'A/B (forward slash) is different — that is right-division for X*A = B.',
			'Using inv(A)*B works but is slower and less numerically stable.'
		]
	},
	{
		id: 'w3-t04',
		math: 'μ = F / (m · g)',
		spoken: 'mu equals F divided by m times g',
		context: 'Coefficient of friction, one value per test (Week 3 Exercise 3).',
		matlab: 'mu = F./(m*g)',
		accept: ['mu=F./(m*g)', 'mu = F ./ (m*g)'],
		breakdown: [
			{ symbol: 'μ', matlab: 'mu', note: 'Greek letters just get spelled out.' },
			{ symbol: 'F / ...', matlab: 'F./...', note: 'F is a VECTOR of forces, so use element-wise division.' },
			{ symbol: 'm·g', matlab: 'm*g', note: 'If m is a vector and g is a scalar, * is fine — MATLAB broadcasts the scalar.' }
		],
		hints: [
			'F and m are vectors (one per test), g is a scalar.',
			'You want one μ per test, so use ./ for element-by-element.',
			'Write: mu = F./(m*g).'
		],
		explanation: 'Because F and m are vectors, you need element-wise division to get one μ per test. Multiplying a vector by a scalar (m*g) does not need a dot.',
		gotchas: [
			'F/(m*g) without the dot would try matrix right-division and probably give a confusing result.',
			'When unsure, use the dot version. It always does what you expect.'
		]
	},
	{
		id: 'w3-t05',
		math: 's = v₀² / g · sin(2θ)',
		spoken: 'distance equals v zero squared over g times sine of two theta',
		context: 'Projectile range (Week 3 Exercise 1). theta is a vector of angles in degrees.',
		matlab: 's = v0^2/g * sind(2*theta)',
		accept: ['s = (v0^2/g)*sind(2*theta)', 's=v0^2/g*sind(2*theta)'],
		breakdown: [
			{ symbol: 'v₀²', matlab: 'v0^2', note: 'Subscript becomes a number in the name, squared with ^.' },
			{ symbol: 'sin(2θ)', matlab: 'sind(2*theta)', note: 'Use sind() when the angle is in degrees; sin() expects radians.' },
			{ symbol: '2θ', matlab: '2*theta', note: 'Explicit *.' }
		],
		hints: [
			'v₀ is a scalar, so v0^2 (no dot) is fine.',
			'The problem states degrees, so use sind() not sin().',
			'Multiply v0^2/g by sind(2*theta) element-wise — here theta is a vector.'
		],
		explanation: 'MATLAB has sin() for radians and sind() for degrees. Since theta is given in degrees, sind() is correct. The rest is standard translation.',
		gotchas: [
			'sin() expects RADIANS. If you pass degrees to sin() the answer will be wrong.',
			'For mixed-size operations (scalar * vector), * is fine. For vector .* vector, use .*.'
		]
	},
	{
		id: 'w3-t06',
		math: 'distance between two points: d = √(x² + y²)',
		spoken: 'd equals square root of x squared plus y squared',
		context: 'Magnitude of a 2D vector — used in the train/car problem (Week 3 Exercise 4).',
		matlab: 'd = sqrt(x.^2 + y.^2)',
		accept: ['d=sqrt(x.^2+y.^2)'],
		breakdown: [
			{ symbol: '√', matlab: 'sqrt(...)', note: 'Square root function.' },
			{ symbol: 'x²', matlab: 'x.^2', note: 'Element-wise because x and y are vectors over time.' }
		],
		hints: [
			'x and y are vectors of positions at each time step, so use .^.',
			'Square each element of x, square each element of y, add them, take the sqrt.',
			'Write: d = sqrt(x.^2 + y.^2).'
		],
		explanation: 'When x and y are vectors of the same length, sqrt(x.^2 + y.^2) gives a vector of distances — one per time step.',
		gotchas: [
			'x^2 would try MATRIX power and fail on a row vector.',
			'Always use .^ for element-wise powers on vectors.'
		]
	}
];

export const week4Translations: TranslationData[] = [
	{
		id: 'w4-t01',
		math: 'plot y vs x',
		spoken: 'plot x versus y',
		context: 'Make a basic 2D line plot.',
		matlab: 'plot(x, y)',
		accept: ['plot(x,y)'],
		breakdown: [
			{ symbol: 'plot', matlab: 'plot', note: 'The main plotting function.' },
			{ symbol: '(x, y)', matlab: '(x, y)', note: 'X values FIRST, then Y values.' }
		],
		hints: [
			'The function is just called plot.',
			'First argument is the X vector, second is Y.',
			'Write: plot(x, y).'
		],
		explanation: 'plot(x, y) draws y as a function of x using a solid blue line by default.',
		gotchas: [
			'Order matters. plot(y, x) flips the axes.',
			'x and y must be the same length.'
		]
	},
	{
		id: 'w4-t02',
		math: 'plot y vs x as a red dashed line',
		spoken: 'plot x y in red dashed style',
		context: 'Line specifiers use a short string.',
		matlab: "plot(x, y, 'r--')",
		accept: ["plot(x,y,'r--')", "plot(x, y, '--r')"],
		breakdown: [
			{ symbol: 'red', matlab: "'r'", note: 'Single letter for color.' },
			{ symbol: 'dashed', matlab: "'--'", note: 'Two dashes for dashed style.' }
		],
		hints: [
			"The third argument is a string like 'r--'.",
			'Color letter + line style, in either order.',
			"Write: plot(x, y, 'r--')."
		],
		explanation: "The third argument combines color + line style + marker in a single string. 'r--' is red and dashed.",
		gotchas: [
			'Must use single quotes (MATLAB strings).',
			"Common colors: r g b c m y k w. Common styles: - solid, -- dashed, : dotted, -. dash-dot."
		]
	},
	{
		id: 'w4-t03',
		math: 'label the x-axis "time (s)"',
		spoken: 'x label time in seconds',
		context: 'Add axis labels.',
		matlab: "xlabel('time (s)')",
		accept: ['xlabel("time (s)")'],
		breakdown: [
			{ symbol: 'xlabel', matlab: 'xlabel', note: 'Function name.' },
			{ symbol: "'...'", matlab: "'...'", note: 'The label text in single quotes.' }
		],
		hints: [
			'The function is xlabel.',
			'Put the label text in single quotes.',
			"Write: xlabel('time (s)')."
		],
		explanation: 'xlabel, ylabel, and title all take a string argument. Use single quotes in older MATLAB, or double quotes in newer versions.',
		gotchas: [
			'xlabel with no quotes will fail — the argument must be a string.',
			"Sister functions: ylabel(), title(), legend()."
		]
	},
	{
		id: 'w4-t04',
		math: 'keep the next plot on the same figure',
		spoken: 'hold on',
		context: 'Overlay multiple curves on one figure (Week 4 Exercise 2).',
		matlab: 'hold on',
		accept: ['hold("on")'],
		breakdown: [
			{ symbol: 'hold on', matlab: 'hold on', note: 'Command syntax — no parentheses needed.' }
		],
		hints: [
			'This is a command, not a function.',
			'Two words with a space.',
			'Write: hold on.'
		],
		explanation: 'hold on locks the current figure so the next plot() adds to it instead of replacing it. Use hold off to release.',
		gotchas: [
			'Without hold on, each plot() call wipes the previous one.',
			'Remember to call hold off when you are done, or later plots will pile up.'
		]
	},
	{
		id: 'w4-t05',
		math: 'H = 100.8 / (1 + 23·e^(−0.093·t))',
		spoken: 'H equals one hundred point eight divided by one plus twenty three times e to the minus zero point zero nine three t',
		context: 'Logistic growth curve for sunflower height (Week 4 Exercise 2). t is a vector of days.',
		matlab: 'H = 100.8 ./ (1 + 23*exp(-0.093*t))',
		accept: ['H=100.8./(1+23*exp(-0.093*t))'],
		breakdown: [
			{ symbol: '/  (fraction)', matlab: './', note: 'Element-wise division since t is a vector.' },
			{ symbol: 'e^(...)', matlab: 'exp(...)', note: 'Natural exponential is exp(), never e^.' },
			{ symbol: '23·e^...', matlab: '23*exp(...)', note: 'Scalar * vector works without the dot.' }
		],
		hints: [
			'The top of the fraction is the scalar 100.8.',
			'The bottom (1 + 23*exp(...)) is a VECTOR, so the division needs a dot.',
			'Inside the exp, -0.093 times t is scalar*vector — no dot needed there.'
		],
		explanation: 'When you divide a scalar by a vector, use ./ to get a vector of results (one per element). exp() is the natural exponential function.',
		gotchas: [
			'100.8/(1+23*exp(-0.093*t)) WITHOUT the dot is matrix right-division — it will error or give surprising results.',
			'Writing e^(-0.093*t) is not MATLAB — use exp().'
		]
	},
	{
		id: 'w4-t06',
		math: 'x(t) = 52t − 9t²',
		spoken: 'x of t equals fifty two t minus nine t squared',
		context: 'Parametric position (Week 4 Exercise 3). t is a vector.',
		matlab: 'x = 52*t - 9*t.^2',
		accept: ['x=52*t-9*t.^2'],
		breakdown: [
			{ symbol: '52t', matlab: '52*t', note: 'Explicit *.' },
			{ symbol: '9t²', matlab: '9*t.^2', note: 'Need .^ because t is a vector.' }
		],
		hints: [
			'Two products: 52*t and 9*t.^2.',
			'Because t is a vector of times, the power must be element-wise: .^2.',
			'Write: x = 52*t - 9*t.^2.'
		],
		explanation: 'Any time you are evaluating a polynomial at a vector of inputs, every power (^) needs to become element-wise (.^).',
		gotchas: [
			't^2 on a row vector is an error (inner dimensions do not match).',
			'Multiplication by a scalar (52*t) does not need a dot, but the power does.'
		]
	}
];

export const week5Translations: TranslationData[] = [
	{
		id: 'w5-t01',
		math: 'if x is greater than zero, do something',
		spoken: 'if x greater than zero',
		context: 'Basic if statement.',
		matlab: 'if x > 0\n    % do something\nend',
		accept: ['if x>0\n    % do something\nend'],
		breakdown: [
			{ symbol: 'if', matlab: 'if', note: 'The keyword.' },
			{ symbol: '>', matlab: '>', note: 'Standard comparison.' },
			{ symbol: 'end', matlab: 'end', note: 'Every if in MATLAB ends with "end".' }
		],
		hints: [
			'No parentheses needed around the condition.',
			'Body goes on the next line (indented by convention).',
			'Close the block with "end".'
		],
		explanation: 'MATLAB\'s if blocks always close with the keyword "end". Parentheses around the condition are optional.',
		gotchas: [
			'Forgetting "end" is the most common error — every if/for/while needs one.',
			'Indentation is for humans — MATLAB ignores it, only "end" matters.'
		]
	},
	{
		id: 'w5-t02',
		math: 'check if x equals 5',
		spoken: 'x equals five',
		context: 'Equality test, NOT assignment.',
		matlab: 'x == 5',
		accept: ['x==5'],
		breakdown: [
			{ symbol: '==', matlab: '==', note: 'Double equals for comparison.' },
			{ symbol: '=', matlab: '=', note: 'SINGLE equals is assignment — completely different.' }
		],
		hints: [
			'Comparison uses TWO equals signs.',
			'A single = would set x to 5, not test it.',
			'Write: x == 5.'
		],
		explanation: 'A single = assigns; a double == tests for equality. This is the same convention as C, Java, and Python.',
		gotchas: [
			'if x = 5 is a syntax error in MATLAB — you must use ==.',
			'For "not equal" use ~= (tilde + equals), not != like other languages.'
		]
	},
	{
		id: 'w5-t03',
		math: 'for i from 1 to 10, repeat',
		spoken: 'for i equals one to ten',
		context: 'Counting for loop.',
		matlab: 'for i = 1:10\n    % body\nend',
		accept: ['for i=1:10\n    % body\nend'],
		breakdown: [
			{ symbol: 'for', matlab: 'for', note: 'The keyword.' },
			{ symbol: '1 to 10', matlab: '1:10', note: 'Colon notation — inclusive at both ends.' },
			{ symbol: 'end', matlab: 'end', note: 'Every for loop needs end.' }
		],
		hints: [
			'Use colon notation for the range: 1:10.',
			'Body goes on the next line.',
			'Close with "end".'
		],
		explanation: 'MATLAB for loops iterate over any vector. 1:10 makes the vector [1 2 3 4 5 6 7 8 9 10], inclusive of both endpoints.',
		gotchas: [
			'for i = 1:10 includes BOTH 1 and 10 (ten iterations). Not like Python range(10) which stops at 9.',
			'You can loop with any step: for i = 10:-1:1 counts down.'
		]
	},
	{
		id: 'w5-t04',
		math: 'while balance is positive, keep going',
		spoken: 'while balance greater than zero',
		context: 'Use a while loop when you do not know the count ahead of time (Week 5 Exercise 2).',
		matlab: 'while balance > 0\n    % body\nend',
		accept: ['while balance>0\n    % body\nend'],
		breakdown: [
			{ symbol: 'while', matlab: 'while', note: 'The keyword.' },
			{ symbol: '>', matlab: '>', note: 'Standard comparison.' },
			{ symbol: 'end', matlab: 'end', note: 'Closes the loop.' }
		],
		hints: [
			'No parentheses needed.',
			'The loop keeps going while the condition is true.',
			'Close with "end".'
		],
		explanation: 'Use while when the number of iterations depends on a condition, not a fixed count. Make sure SOMETHING inside the loop changes the condition — otherwise it runs forever.',
		gotchas: [
			'If the condition is never updated inside the loop, you get an infinite loop.',
			'The condition is checked at the TOP, before each iteration.'
		]
	},
	{
		id: 'w5-t05',
		math: 'x is positive AND even',
		spoken: 'x greater than zero and x is even',
		context: 'Combining conditions with AND.',
		matlab: 'x > 0 && mod(x, 2) == 0',
		accept: ['x>0 && mod(x,2)==0'],
		breakdown: [
			{ symbol: 'AND', matlab: '&&', note: 'Double ampersand is "short-circuit AND" — use this in if/while.' },
			{ symbol: 'is even', matlab: 'mod(x,2) == 0', note: 'Remainder when divided by 2 is zero.' }
		],
		hints: [
			'Combine the two tests with &&.',
			'"Even" means mod(x, 2) is zero.',
			'Write: x > 0 && mod(x, 2) == 0.'
		],
		explanation: 'Use && for AND and || for OR in if/while conditions. Single & and | also work but operate element-wise on arrays.',
		gotchas: [
			'Use && in if/while, & on arrays.',
			'mod() returns the remainder; testing == 0 tells you it divides evenly.'
		]
	},
	{
		id: 'w5-t06',
		math: 'grade ≥ 90 → "A"; grade ≥ 80 → "B"; else "C"',
		spoken: 'if grade is at least ninety A else at least eighty B else C',
		context: 'Chained conditions with else-if.',
		matlab: "if grade >= 90\n    letter = 'A';\nelseif grade >= 80\n    letter = 'B';\nelse\n    letter = 'C';\nend",
		accept: ["if grade>=90\n    letter='A';\nelseif grade>=80\n    letter='B';\nelse\n    letter='C';\nend"],
		breakdown: [
			{ symbol: 'else if', matlab: 'elseif', note: 'ONE word in MATLAB.' },
			{ symbol: '≥', matlab: '>=', note: 'Greater than or equal.' },
			{ symbol: 'end', matlab: 'end', note: 'One end closes the whole chain.' }
		],
		hints: [
			'elseif is ONE word (unlike Python\'s "elif" or C\'s "else if").',
			'Only ONE "end" at the very bottom, even with multiple branches.',
			'Test the strictest condition first (>= 90), then the looser one.'
		],
		explanation: 'if/elseif/else/end reads top-to-bottom and stops at the first true branch. Ordering matters — put the most restrictive conditions first.',
		gotchas: [
			'"else if" (two words) does something different — it starts a nested if and needs its own end.',
			'Forgetting the semicolon after each assignment just echoes the value — not wrong, just noisy.'
		]
	}
];

export const week6Translations: TranslationData[] = [
	{
		id: 'w6-t01',
		math: 'f(x) = x²  (as an anonymous function)',
		spoken: 'f of x equals x squared',
		context: 'Anonymous function — a one-line function you assign to a variable.',
		matlab: 'f = @(x) x.^2',
		accept: ['f=@(x) x.^2', 'f = @(x) x^2'],
		breakdown: [
			{ symbol: '@', matlab: '@', note: 'The "at" symbol introduces an anonymous function.' },
			{ symbol: '(x)', matlab: '(x)', note: 'The input arguments.' },
			{ symbol: 'body', matlab: 'x.^2', note: 'The expression to compute and return.' }
		],
		hints: [
			'Assign the anonymous function to a name: f = ...',
			'The @ comes right after the =.',
			'After @(x), write the expression that produces the result.'
		],
		explanation: 'Anonymous functions are one-line lambdas. The pattern is: name = @(args) expression. Use .^ so the function works on vectors too.',
		gotchas: [
			'No "function" or "end" keyword — that is a different construct.',
			'Use .^ (element-wise) so you can call f on a vector: f([1 2 3]).'
		]
	},
	{
		id: 'w6-t02',
		math: 'a function called myArea that takes r and returns the area',
		spoken: 'function area equals my area of r',
		context: 'User-defined function header (Week 6 Exercise 2/3).',
		matlab: 'function area = myArea(r)\n    area = pi*r^2;\nend',
		accept: ['function area=myArea(r)\n    area = pi*r^2;\nend'],
		breakdown: [
			{ symbol: 'function', matlab: 'function', note: 'Keyword that starts a named function.' },
			{ symbol: 'output = name(input)', matlab: 'area = myArea(r)', note: 'OUTPUT goes on the left of =, inputs in parens on the right.' },
			{ symbol: 'end', matlab: 'end', note: 'Closes the function.' }
		],
		hints: [
			'Header shape: function OUTPUT = NAME(INPUT).',
			'The output variable is what gets returned — set it inside the body.',
			'End with "end".'
		],
		explanation: 'MATLAB functions declare their output variable in the header. Whatever value that variable holds when the function ends is what gets returned.',
		gotchas: [
			'The file name should match the function name: save this as myArea.m.',
			'Multiple outputs use brackets: function [a, b] = myFn(x).'
		]
	},
	{
		id: 'w6-t03',
		math: 'C = (F − 32) × 5/9',
		spoken: 'C equals F minus thirty two times five over nine',
		context: 'Fahrenheit to Celsius conversion (Week 6 Exercise 3).',
		matlab: 'C = (F - 32) * 5/9',
		accept: ['C=(F-32)*5/9', 'C = (F-32)*5/9'],
		breakdown: [
			{ symbol: '(F − 32)', matlab: '(F - 32)', note: 'Keep the parentheses — do the subtraction first.' },
			{ symbol: '×', matlab: '*', note: 'Multiplication.' },
			{ symbol: '5/9', matlab: '5/9', note: 'Fine as-is because 5 and 9 are scalars.' }
		],
		hints: [
			'The parens around F − 32 are essential — without them MATLAB would subtract 32 only from the last term.',
			'Explicit * after the parens.',
			'Write: C = (F - 32) * 5/9.'
		],
		explanation: 'The parentheses force the subtraction to happen before the multiplication. Order of operations bites hard here.',
		gotchas: [
			'F - 32 * 5/9 would compute 32*5/9 FIRST (~17.78), then subtract — wrong answer.',
			'If F is a vector, every op is still scalar-or-elementwise safe as written.'
		]
	},
	{
		id: 'w6-t04',
		math: 'd = √(r_A² + r_B² − 2·r_A·r_B·cos(θ_A − θ_B))',
		spoken: 'd equals square root of rA squared plus rB squared minus two rA rB cosine of theta A minus theta B',
		context: 'Distance between two points in polar coordinates — Law of Cosines (Week 6 Exercise 4).',
		matlab: 'd = @(rA, thA, rB, thB) sqrt(rA^2 + rB^2 - 2*rA*rB*cos(thA - thB))',
		accept: ['d = @(rA,thA,rB,thB) sqrt(rA^2+rB^2-2*rA*rB*cos(thA-thB))'],
		breakdown: [
			{ symbol: '@(rA, θA, rB, θB)', matlab: '@(rA, thA, rB, thB)', note: 'Four inputs, Greek letters spelled out.' },
			{ symbol: '√', matlab: 'sqrt(...)', note: 'Square root function.' },
			{ symbol: 'cos', matlab: 'cos(...)', note: 'cos() takes radians.' }
		],
		hints: [
			'Build it as an anonymous function with four inputs.',
			'Start with the sqrt(...).',
			'Inside: rA^2 + rB^2 - 2*rA*rB*cos(thA - thB).'
		],
		explanation: 'An anonymous function with multiple inputs. Since inputs are scalars, plain ^, * work without dots.',
		gotchas: [
			'If the angles were in degrees, use cosd() instead of cos().',
			'Keep the 2* explicit — MATLAB will not assume multiplication.'
		]
	},
	{
		id: 'w6-t05',
		math: 'mean of a vector x',
		spoken: 'mean of x',
		context: 'The average is built in, but you can also compute it manually (Week 6 Exercise 5).',
		matlab: 'mean(x)',
		accept: ['sum(x)/length(x)', 'sum(x)/numel(x)'],
		breakdown: [
			{ symbol: 'mean', matlab: 'mean', note: 'Built-in function.' },
			{ symbol: 'manual form', matlab: 'sum(x)/length(x)', note: 'Add everything, divide by how many.' }
		],
		hints: [
			'Either the one-liner mean(x) or sum(x)/length(x) works.',
			'For clarity, prefer mean(x) in real code.',
			'The exercise asks you to build it from scratch — sum(x)/length(x).'
		],
		explanation: 'The built-in mean() exists, but the course exercise asks you to implement it as sum(x)/length(x) to practice combining functions.',
		gotchas: [
			'length(x) gives the LONGEST dimension — for a matrix you probably want numel(x) instead.',
			'Be careful with NaN values — mean([1 NaN 2]) gives NaN unless you use mean(..., "omitnan").'
		]
	},
	{
		id: 'w6-t06',
		math: 'load data from the file results.mat',
		spoken: 'load results dot mat',
		context: 'Import data from a MATLAB data file.',
		matlab: "load('results.mat')",
		accept: ["load 'results.mat'", 'load results.mat', 'load("results.mat")'],
		breakdown: [
			{ symbol: 'load', matlab: 'load', note: 'The built-in command.' },
			{ symbol: "'file'", matlab: "'results.mat'", note: 'File name as a string.' }
		],
		hints: [
			'The function is just called load.',
			'Pass the file name as a string in single quotes.',
			"Write: load('results.mat')."
		],
		explanation: 'load() reads a .mat file and drops each saved variable straight into your workspace, under its original name.',
		gotchas: [
			'After load, the variables appear by their ORIGINAL names — not assigned to whatever you put on the left.',
			'For CSV/text data use readmatrix or csvread instead.'
		]
	}
];

const allTranslations: Record<number, TranslationData[]> = {
	1: week1Translations,
	2: week2Translations,
	3: week3Translations,
	4: week4Translations,
	5: week5Translations,
	6: week6Translations
};

export function getWeekTranslations(weekNum: number): TranslationData[] {
	return allTranslations[weekNum] ?? [];
}

export function getAllTranslations(): TranslationData[] {
	return Object.values(allTranslations).flat();
}
