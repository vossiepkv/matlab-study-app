import type { CardData, QuizData } from './week1';

export const week3Cards: CardData[] = [
	{
		id: 'w3-c01',
		type: 'concept',
		front: 'What is the rule for adding or subtracting two arrays in MATLAB?',
		back: 'Both arrays must have identical size (same number of rows and columns). The operation is done element by element — each element in A is added to the corresponding element in B.',
		hint: 'Think: matching positions.'
	},
	{
		id: 'w3-c02',
		type: 'code',
		front: 'Show an example of array addition in MATLAB.',
		back: 'Element-by-element addition of two vectors of the same size.',
		code: '>> VectA = [8 5 4];\n>> VectB = [10 2 7];\n>> VectC = VectA + VectB\nVectC =\n    18     7    11'
	},
	{
		id: 'w3-c03',
		type: 'concept',
		front: 'What error do you get when adding arrays of different sizes?',
		back: 'MATLAB gives "Matrix dimensions must agree" error. You can only add or subtract arrays that have exactly the same dimensions.',
		code: '>> VectA + A\n?? Error using ==> plus\nMatrix dimensions must agree.'
	},
	{
		id: 'w3-c04',
		type: 'concept',
		front: 'How does matrix multiplication (*) work in MATLAB?',
		back: 'Matrix multiplication follows linear algebra rules. The number of columns in the first matrix must equal the number of rows in the second matrix. A*B is NOT the same as B*A (not commutative).',
		hint: 'Inner dimensions must match.'
	},
	{
		id: 'w3-c05',
		type: 'code',
		front: 'What are the dimensions of the result of A*B if A is 4x3 and B is 3x2?',
		back: 'The result is 4x2. The result has the same number of rows as A and the same number of columns as B.',
		code: '>> A = [1 4 2; 5 7 3; 9 1 6; 4 2 8];\n>> B = [6 1; 2 5; 7 3];\n>> C = A*B    % 4x3 * 3x2 = 4x2'
	},
	{
		id: 'w3-c06',
		type: 'concept',
		front: 'Is matrix multiplication commutative? (Is A*B the same as B*A?)',
		back: 'No! Matrix multiplication is NOT commutative. A*B does not equal B*A in general. Even if both operations are valid, the results are usually different.',
		code: '>> A = [1 3; 5 7]; B = [4 2; 1 6];\n>> C = A*B    % gives [7, 20; 27, 52]\n>> D = B*A    % gives [14, 26; 31, 45]'
	},
	{
		id: 'w3-c07',
		type: 'concept',
		front: 'What is the identity matrix?',
		back: 'A square matrix where the diagonal elements are all 1 and all other elements are 0. Created with eye(n). When you multiply any matrix by the identity matrix, you get the original matrix back: A*I = I*A = A.',
		code: '>> eye(3)\nans =\n     1  0  0\n     0  1  0\n     0  0  1'
	},
	{
		id: 'w3-c08',
		type: 'code',
		front: 'How do you find the inverse of a matrix in MATLAB?',
		back: 'Use the inv() function or raise the matrix to the power of -1.',
		code: '>> A = [2 1 4; 4 1 8; 2 -1 3];\n>> B = inv(A)\n>> A*B    % gives identity matrix\n\n% Alternatively:\n>> A^-1'
	},
	{
		id: 'w3-c09',
		type: 'concept',
		front: 'What is the determinant and how do you calculate it in MATLAB?',
		back: 'The determinant is a number associated with a square matrix. For a 2x2 matrix [a b; c d], det = ad - bc. In MATLAB, use the det() command.',
		code: '>> A = [6 5; 3 9];\n>> det(A)\nans = 39    % 6*9 - 5*3 = 39'
	},
	{
		id: 'w3-c10',
		type: 'concept',
		front: 'What is left division (\\) used for in MATLAB?',
		back: 'Left division solves the equation AX = B. The solution is X = A\\B, which is equivalent to X = inv(A)*B but more efficient and numerically stable.',
		code: '% Solving AX = B:\n>> X = A\\B\n% Same as:\n>> X = inv(A)*B'
	},
	{
		id: 'w3-c11',
		type: 'concept',
		front: 'What is right division (/) used for in MATLAB?',
		back: 'Right division solves the equation XC = D. The solution is X = D/C, which is equivalent to X = D*inv(C).',
	},
	{
		id: 'w3-c12',
		type: 'list',
		front: 'What are element-wise operations and their symbols?',
		back: [
			'.* — Element-wise multiplication',
			'./ — Element-wise division',
			'.^ — Element-wise power',
			'These operate on each element individually, not by matrix rules'
		],
		hint: 'The dot (.) before the operator makes it element-wise.'
	},
	{
		id: 'w3-c13',
		type: 'code',
		front: 'What is the difference between * and .* in MATLAB?',
		back: '* performs matrix multiplication (linear algebra rules). .* performs element-by-element multiplication (each element multiplied by the corresponding element).',
		code: '>> A = [1 2; 3 4]; B = [5 6; 7 8];\n>> A*B     % matrix multiply\nans =\n    19  22\n    43  50\n\n>> A.*B    % element-wise\nans =\n     5  12\n    21  32'
	},
	{
		id: 'w3-c14',
		type: 'concept',
		front: 'How do you solve a system of linear equations using MATLAB?',
		back: 'Write the system as AX = B where A is the coefficient matrix and B is the constants vector. Then solve with X = A\\B (left division).',
		code: '% 2x + y = 5\n% 3x - 2y = 4\n>> A = [2 1; 3 -2];\n>> B = [5; 4];\n>> X = A\\B'
	}
];

export const week3Quiz: QuizData[] = [
	{
		id: 'w3-q01',
		type: 'multiple-choice',
		question: 'What must be true to add two arrays in MATLAB?',
		options: [
			'They must both be square matrices',
			'They must have the same dimensions',
			'They must be row vectors',
			'One must be larger than the other'
		],
		correctIndex: 1,
		explanation: 'Arrays must have identical dimensions (same number of rows and columns) to be added or subtracted.'
	},
	{
		id: 'w3-q02',
		type: 'multiple-choice',
		question: 'If A is 3x4 and B is 4x2, what size is A*B?',
		options: ['3x2', '4x4', '3x4', 'Error — cannot multiply'],
		correctIndex: 0,
		explanation: 'For A*B, the inner dimensions must match (4=4, OK). The result size is outer dimensions: 3 rows x 2 columns = 3x2.'
	},
	{
		id: 'w3-q03',
		type: 'fill-blank',
		question: 'What function creates an identity matrix of size n?',
		answer: 'eye',
		acceptableAnswers: ['eye', 'eye(n)'],
		explanation: 'eye(n) creates an n x n identity matrix with 1s on the diagonal and 0s elsewhere.'
	},
	{
		id: 'w3-q04',
		type: 'multiple-choice',
		question: 'Is matrix multiplication commutative (A*B = B*A)?',
		options: ['Yes, always', 'No, never', 'Only for square matrices', 'No, in general A*B ≠ B*A'],
		correctIndex: 3,
		explanation: 'Matrix multiplication is generally not commutative. A*B usually does not equal B*A, even for square matrices.'
	},
	{
		id: 'w3-q05',
		type: 'fill-blank',
		question: 'What function finds the inverse of matrix A?',
		answer: 'inv(A)',
		acceptableAnswers: ['inv(A)', 'inv', 'A^-1'],
		explanation: 'inv(A) computes the inverse of A. You can also use A^-1.'
	},
	{
		id: 'w3-q06',
		type: 'code-output',
		question: 'What is det([6 5; 3 9])?',
		code: '>> det([6 5; 3 9])',
		answer: '39',
		explanation: 'For a 2x2 matrix [a b; c d], det = a*d - b*c = 6*9 - 5*3 = 54 - 15 = 39.'
	},
	{
		id: 'w3-q07',
		type: 'multiple-choice',
		question: 'What does the .* operator do?',
		options: [
			'Matrix multiplication',
			'Element-wise multiplication',
			'Dot product',
			'Cross product'
		],
		correctIndex: 1,
		explanation: '.* multiplies corresponding elements. [1 2] .* [3 4] = [3 8], not matrix multiplication.'
	},
	{
		id: 'w3-q08',
		type: 'multiple-choice',
		question: 'To solve AX = B, which MATLAB operation do you use?',
		options: ['X = A*B', 'X = B/A', 'X = A\\B', 'X = B\\A'],
		correctIndex: 2,
		explanation: 'Left division (\\) solves AX = B. X = A\\B is equivalent to X = inv(A)*B.'
	},
	{
		id: 'w3-q09',
		type: 'code-output',
		question: 'What is the result?',
		code: '>> [2 4] .* [3 5]',
		answer: '6 20',
		acceptableAnswers: ['6  20', '6 20', '[6, 20]', '6, 20'],
		explanation: 'Element-wise multiplication: 2*3 = 6, 4*5 = 20.'
	},
	{
		id: 'w3-q10',
		type: 'multiple-choice',
		question: 'What does A*I equal (where I is the identity matrix)?',
		options: ['I', 'A', '0', 'A^2'],
		correctIndex: 1,
		explanation: 'Multiplying any matrix by the identity matrix gives back the original matrix. A*I = I*A = A.'
	}
];
