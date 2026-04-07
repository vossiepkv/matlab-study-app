import type { CardData, QuizData } from './week1';

export const week2Cards: CardData[] = [
	{
		id: 'w2-c01',
		type: 'concept',
		front: 'What is a vector in MATLAB?',
		back: 'A one-dimensional array — a list of numbers arranged in a row or column. Created by assigning elements inside square brackets [ ] to a variable.',
		hint: 'Think of it as a list of numbers.'
	},
	{
		id: 'w2-c02',
		type: 'code',
		front: 'How do you create a row vector in MATLAB?',
		back: 'Use square brackets with elements separated by commas or spaces.',
		code: '>> row_vec1 = [3, 9, -4]\nrow_vec1 =\n     3     9    -4\n\n>> row_vec2 = [7 -2 12]\nrow_vec2 =\n     7    -2    12'
	},
	{
		id: 'w2-c03',
		type: 'code',
		front: 'How do you create a column vector in MATLAB?',
		back: 'Use square brackets with elements separated by semicolons.',
		code: '>> col_vec1 = [3; 9; -4]\ncol_vec1 =\n     3\n     9\n    -4'
	},
	{
		id: 'w2-c04',
		type: 'concept',
		front: 'What is the difference between [ ] and ( ) in MATLAB vectors?',
		back: 'Square brackets [ ] are used to CREATE vectors. Parentheses ( ) are used to ACCESS elements by index. Indexing starts at 1, not 0.',
		code: '>> v = [10, 20, 30]   % create with []\n>> v(2)               % access with ()\nans = 20'
	},
	{
		id: 'w2-c05',
		type: 'code',
		front: 'What is colon notation and how does it work?',
		back: 'Colon notation creates a vector of evenly spaced values. Format: start:step:end. If step is omitted, it defaults to 1.',
		code: '>> row_vec3 = 1:4\nrow_vec3 =\n     1  2  3  4\n\n>> row_vec5 = 1:2:5\nrow_vec5 =\n     1  3  5\n\n>> row_vec6 = [1:-3:-6]\nrow_vec6 =\n     1  -2  -5'
	},
	{
		id: 'w2-c06',
		type: 'code',
		front: 'What does linspace do?',
		back: 'linspace(start, stop, n) creates a row vector with n evenly spaced elements between start and stop (inclusive).',
		code: '>> row_vec7 = linspace(12, 24, 5)\nrow_vec7 =\n    12  15  18  21  24\n\n>> row_vec8 = linspace(12, 0, 5)\nrow_vec8 =\n    12  9  6  3  0',
		hint: 'You specify the number of elements, not the step size.'
	},
	{
		id: 'w2-c07',
		type: 'concept',
		front: 'What is the difference between colon notation and linspace?',
		back: 'Colon notation (start:step:end) specifies the step size between elements. linspace(start, stop, n) specifies the number of elements and calculates the spacing automatically.',
	},
	{
		id: 'w2-c08',
		type: 'code',
		front: 'How do you transpose a vector in MATLAB?',
		back: 'Use the single quote (apostrophe) operator to transpose. A row vector becomes a column vector and vice versa.',
		code: ">> vec1 = [3, 9, -4]\nvec1 =\n     3  9  -4\n\n>> vec1tr = vec1'\nvec1tr =\n     3\n     9\n    -4"
	},
	{
		id: 'w2-c09',
		type: 'code',
		front: 'How do you access a specific element of a vector?',
		back: 'Use parentheses with the index number. MATLAB indexing starts at 1.',
		code: '>> row_vec1 = [3, 9, -4]\n>> row_vec1(1)\nans = 3\n>> row_vec1(3)\nans = -4'
	},
	{
		id: 'w2-c10',
		type: 'code',
		front: 'How do you extract a range of elements from a vector?',
		back: 'Use the colon operator inside parentheses: vector(start:end)',
		code: '>> xvec = 1:6\nxvec =\n     1  2  3  4  5  6\n\n>> xvec_subset = xvec(2:4)\nxvec_subset =\n     2  3  4'
	},
	{
		id: 'w2-c11',
		type: 'code',
		front: 'How do you create a 2D matrix in MATLAB?',
		back: 'Use square brackets with spaces/commas between columns and semicolons between rows.',
		code: '>> A = [5 -3 8; 9 2 10]\nA =\n     5  -3   8\n     9   2  10'
	},
	{
		id: 'w2-c12',
		type: 'concept',
		front: 'Can you use negative step values in colon notation?',
		back: 'Yes! If end_value < start_value, use a negative step. For example, 10:-2:2 gives [10, 8, 6, 4, 2].',
		code: '>> 10:-2:2\nans =\n    10  8  6  4  2'
	},
	{
		id: 'w2-c13',
		type: 'list',
		front: 'Key rules for vectors in MATLAB:',
		back: [
			'Index counting starts at 1 (not 0)',
			'vec_name(1) refers to the first element',
			'Square brackets [ ] to create, parentheses ( ) to access',
			'Row elements separated by commas or spaces',
			'Column elements separated by semicolons',
			'Transpose with single quote (\') operator'
		]
	},
	{
		id: 'w2-c14',
		type: 'concept',
		front: 'What happens if you try to access an index beyond the vector length?',
		back: 'MATLAB gives an "Index exceeds the number of array elements" error. Unlike some languages, MATLAB does not auto-extend vectors when you read out of bounds.',
	}
];

export const week2Quiz: QuizData[] = [
	{
		id: 'w2-q01',
		type: 'multiple-choice',
		question: 'Which of these creates a column vector?',
		options: [
			'v = [1, 2, 3]',
			'v = [1 2 3]',
			'v = [1; 2; 3]',
			'v = 1:3'
		],
		correctIndex: 2,
		explanation: 'Semicolons between elements create a column vector. Commas, spaces, and colon notation all create row vectors.'
	},
	{
		id: 'w2-q02',
		type: 'code-output',
		question: 'What is the output of row_vec(2)?',
		code: '>> row_vec = [3, 9, -4]\n>> row_vec(2)',
		answer: '9',
		explanation: 'MATLAB uses 1-based indexing. row_vec(2) returns the second element, which is 9.'
	},
	{
		id: 'w2-q03',
		type: 'code-output',
		question: 'How many elements does this vector have?',
		code: '>> v = 1:2:9',
		answer: '5',
		acceptableAnswers: ['5', 'five'],
		explanation: 'Starting at 1, stepping by 2: 1, 3, 5, 7, 9. That is 5 elements.'
	},
	{
		id: 'w2-q04',
		type: 'fill-blank',
		question: 'What function creates a vector with a specific number of evenly spaced elements?',
		answer: 'linspace',
		explanation: 'linspace(start, stop, n) creates n evenly spaced points between start and stop.'
	},
	{
		id: 'w2-q05',
		type: 'multiple-choice',
		question: 'What does the transpose operator (\') do to a row vector?',
		options: [
			'Reverses the elements',
			'Sorts the elements',
			'Converts it to a column vector',
			'Deletes the vector'
		],
		correctIndex: 2,
		explanation: 'The transpose operator converts a row vector to a column vector and vice versa.'
	},
	{
		id: 'w2-q06',
		type: 'code-output',
		question: 'What does this expression produce?',
		code: '>> linspace(0, 10, 3)',
		answer: '0 5 10',
		acceptableAnswers: ['0  5  10', '0 5 10', '[0, 5, 10]', '0, 5, 10'],
		explanation: 'linspace(0, 10, 3) creates 3 evenly spaced values from 0 to 10: [0, 5, 10].'
	},
	{
		id: 'w2-q07',
		type: 'multiple-choice',
		question: 'What symbol separates rows when creating a matrix?',
		options: ['Comma (,)', 'Period (.)', 'Semicolon (;)', 'Colon (:)'],
		correctIndex: 2,
		explanation: 'Semicolons separate rows in a matrix. For example, [1 2; 3 4] creates a 2x2 matrix.'
	},
	{
		id: 'w2-q08',
		type: 'code-output',
		question: 'What is the value of v(3)?',
		code: '>> v = [10:-3:1]',
		answer: '4',
		explanation: 'v = [10, 7, 4, 1]. The third element v(3) is 4. Starting at 10 and stepping by -3.'
	},
	{
		id: 'w2-q09',
		type: 'multiple-choice',
		question: 'At what number does MATLAB indexing start?',
		options: ['0', '1', '-1', 'It depends on the vector'],
		correctIndex: 1,
		explanation: 'MATLAB uses 1-based indexing. The first element is always at index 1.'
	},
	{
		id: 'w2-q10',
		type: 'code-output',
		question: 'What is the result?',
		code: '>> x = [2 4 6 8 10]\n>> x(2:4)',
		answer: '4 6 8',
		acceptableAnswers: ['4  6  8', '4 6 8', '[4, 6, 8]', '4, 6, 8'],
		explanation: 'x(2:4) extracts elements at indices 2, 3, and 4, which are 4, 6, and 8.'
	}
];
