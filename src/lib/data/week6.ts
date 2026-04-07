import type { CardData, QuizData } from './week1';

export const week6Cards: CardData[] = [
	{
		id: 'w6-c01',
		type: 'concept',
		front: 'What is the load command used for?',
		back: 'The load command imports data into MATLAB. It can retrieve variables saved with the save command (.mat files) or import data from text (.txt) files.',
		code: '>> load file_name        % .mat file\n>> load file_name.txt    % text file\n>> VarName = load(\'file_name.txt\')'
	},
	{
		id: 'w6-c02',
		type: 'concept',
		front: 'What is the save command used for?',
		back: 'The save command exports variables from the workspace to a file. By default, it saves as a .mat file (binary). You can also save as text with -ascii flag.',
		code: '>> save mydata           % saves all variables\n>> save mydata x y       % saves only x and y\n>> save mydata.txt x -ascii  % text format'
	},
	{
		id: 'w6-c03',
		type: 'concept',
		front: 'What is the difference between .mat and .txt files in MATLAB?',
		back: '.mat files are binary MATLAB format that preserves variable names, types, and precision. .txt files are plain text that can be read by other programs but lose variable name information.',
	},
	{
		id: 'w6-c04',
		type: 'code',
		front: 'How do you read data from an Excel file?',
		back: 'Use xlsread to import data from Excel spreadsheets (.xls or .xlsx).',
		code: ">> data = xlsread('myfile.xlsx')\n>> [num, txt, raw] = xlsread('myfile.xlsx')\n% num = numeric data\n% txt = text data\n% raw = all data"
	},
	{
		id: 'w6-c05',
		type: 'code',
		front: 'How do you read and write CSV files?',
		back: 'Use csvread to import and csvwrite to export comma-separated value files.',
		code: ">> M = csvread('data.csv')\n>> csvwrite('output.csv', M)"
	},
	{
		id: 'w6-c06',
		type: 'concept',
		front: 'What is a user-defined function in MATLAB?',
		back: 'A function you create yourself (as opposed to built-in functions like sin or plot). Defined in its own .m file with the function keyword. The filename must match the function name.',
		hint: 'The file name and function name must be the same!'
	},
	{
		id: 'w6-c07',
		type: 'code',
		front: 'What is the syntax for defining a function in MATLAB?',
		back: 'Use the function keyword with output arguments, function name, and input arguments.',
		code: 'function [out1, out2] = myFunction(in1, in2)\n    % Function body\n    out1 = in1 + in2;\n    out2 = in1 * in2;\nend'
	},
	{
		id: 'w6-c08',
		type: 'code',
		front: 'Show an example of a simple function with one input and one output.',
		back: 'A function that converts Celsius to Fahrenheit.',
		code: '% File: c2f.m\nfunction F = c2f(C)\n    F = (9/5)*C + 32;\nend\n\n% Usage:\n>> c2f(100)\nans = 212'
	},
	{
		id: 'w6-c09',
		type: 'concept',
		front: 'What is the difference between a script and a function?',
		back: 'A script has no input/output arguments and shares the workspace with the command window. A function has its own workspace — variables inside the function are local and do not affect the main workspace.',
	},
	{
		id: 'w6-c10',
		type: 'concept',
		front: 'What are local variables in a function?',
		back: 'Variables created inside a function only exist within that function. They cannot be accessed from the command window or other functions. They are created when the function runs and disappear when it finishes.',
	},
	{
		id: 'w6-c11',
		type: 'concept',
		front: 'What is a subfunction?',
		back: 'A function defined within the same .m file as another function (below the main function). Subfunctions can only be called by functions in the same file, not from the command window.',
		code: 'function result = mainFunc(x)\n    result = helperFunc(x) + 1;\nend\n\nfunction y = helperFunc(x)\n    y = x^2;\nend'
	},
	{
		id: 'w6-c12',
		type: 'code',
		front: 'How do you create a function with multiple outputs?',
		back: 'List multiple output variables in square brackets.',
		code: 'function [area, circumference] = circle(r)\n    area = pi * r^2;\n    circumference = 2 * pi * r;\nend\n\n% Usage:\n>> [a, c] = circle(5)\na = 78.5398\nc = 31.4159'
	},
	{
		id: 'w6-c13',
		type: 'concept',
		front: 'What is the Import Wizard?',
		back: 'A graphical tool in MATLAB that helps import data when you do not know the format. It automatically detects the data format and imports it. Access it by double-clicking a file in the Current Directory.',
	},
	{
		id: 'w6-c14',
		type: 'concept',
		front: 'Why must the function file name match the function name?',
		back: 'MATLAB finds functions by their file name. When you call myFunc(), MATLAB looks for myFunc.m. If the file name does not match the function name inside, MATLAB will not find it correctly.',
	}
];

export const week6Quiz: QuizData[] = [
	{
		id: 'w6-q01',
		type: 'multiple-choice',
		question: 'What command imports data from a .mat file?',
		options: ['import', 'load', 'read', 'open'],
		correctIndex: 1,
		explanation: 'The load command retrieves variables from .mat files and also imports data from text files.'
	},
	{
		id: 'w6-q02',
		type: 'fill-blank',
		question: 'What keyword starts a function definition in MATLAB?',
		answer: 'function',
		explanation: 'The function keyword defines a user-defined function. Syntax: function [outputs] = name(inputs)'
	},
	{
		id: 'w6-q03',
		type: 'multiple-choice',
		question: 'What must match the function name defined inside a .m file?',
		options: [
			'The variable names',
			'The file name',
			'The folder name',
			'The input argument names'
		],
		correctIndex: 1,
		explanation: 'The .m file name must match the function name. A function called "myFunc" must be saved as "myFunc.m".'
	},
	{
		id: 'w6-q04',
		type: 'code-output',
		question: 'What does this function return when called as myFunc(3, 4)?',
		code: 'function result = myFunc(a, b)\n    result = a^2 + b^2;\nend',
		answer: '25',
		explanation: '3^2 + 4^2 = 9 + 16 = 25.'
	},
	{
		id: 'w6-q05',
		type: 'multiple-choice',
		question: 'What are variables inside a function called?',
		options: ['Global variables', 'Local variables', 'Static variables', 'Public variables'],
		correctIndex: 1,
		explanation: 'Variables inside a function are local — they only exist within that function and do not affect the main workspace.'
	},
	{
		id: 'w6-q06',
		type: 'multiple-choice',
		question: 'What is the difference between a script and a function?',
		options: [
			'Scripts are faster',
			'Functions have their own workspace; scripts share the main workspace',
			'Scripts can have inputs; functions cannot',
			'There is no difference'
		],
		correctIndex: 1,
		explanation: 'Functions have their own local workspace. Scripts share the base workspace with the command window.'
	},
	{
		id: 'w6-q07',
		type: 'fill-blank',
		question: 'What function reads data from a CSV file?',
		answer: 'csvread',
		explanation: "csvread('filename.csv') imports numeric data from a comma-separated values file."
	},
	{
		id: 'w6-q08',
		type: 'multiple-choice',
		question: 'What is a subfunction?',
		options: [
			'A function in a separate file',
			'A built-in MATLAB function',
			'A function defined below the main function in the same file',
			'A function that calls itself'
		],
		correctIndex: 2,
		explanation: 'Subfunctions are defined in the same .m file below the main function. They can only be called from within that file.'
	},
	{
		id: 'w6-q09',
		type: 'code-output',
		question: 'What are the two outputs when calling circle(5)?',
		code: 'function [area, circ] = circle(r)\n    area = pi * r^2;\n    circ = 2 * pi * r;\nend',
		answer: '78.5398 and 31.4159',
		acceptableAnswers: ['78.5398 and 31.4159', '78.54 and 31.42', '78.5398, 31.4159'],
		explanation: 'area = pi * 25 = 78.5398, circ = 2 * pi * 5 = 31.4159.'
	},
	{
		id: 'w6-q10',
		type: 'multiple-choice',
		question: 'Which command saves variables to a file?',
		options: ['export', 'save', 'write', 'store'],
		correctIndex: 1,
		explanation: 'The save command exports workspace variables to a .mat file (binary) or text file with -ascii flag.'
	}
];
