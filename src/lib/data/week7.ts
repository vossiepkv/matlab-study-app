import type { CardData, QuizData } from './week1';

export const week7Cards: CardData[] = [
	{
		id: 'w7-c01',
		type: 'concept',
		front: 'What is MATLAB App Designer?',
		back: 'App Designer is a drag-and-drop environment for building interactive GUI apps in MATLAB. You design the layout visually and write callback code that runs when a user interacts with a component.',
		hint: 'Think "visual form builder" — like drawing a window and hooking buttons to code.'
	},
	{
		id: 'w7-c02',
		type: 'code',
		front: 'How do you open App Designer?',
		back: 'Type appdesigner in the Command Window and press Enter. Or: HOME tab → New → App → Blank App.',
		code: '>> appdesigner'
	},
	{
		id: 'w7-c03',
		type: 'concept',
		front: 'What file extension do App Designer apps use?',
		back: 'Apps are saved as .mlapp files. This is a single bundled file containing both the layout and the code.',
		hint: 'Not .m — something longer.'
	},
	{
		id: 'w7-c04',
		type: 'concept',
		front: 'What is the difference between Design View and Code View?',
		back: 'Design View shows the visual canvas where you drag and drop components. Code View shows the auto-generated MATLAB code for the app — including the callbacks you write.',
		hint: 'One is WYSIWYG, the other is raw code. You switch between them with a toggle.'
	},
	{
		id: 'w7-c05',
		type: 'list',
		front: 'Name the common UI components in the Component Library.',
		back: [
			'Button — clickable action',
			'Edit Field (Numeric) — number input',
			'Edit Field (Text) — text input',
			'Label — read-only text display',
			'Axes — for plotting',
			'Slider — drag to choose a value',
			'Knob — rotary value input',
			'Lamp — coloured circle indicator',
			'Drop Down — choose from a list',
			'Check Box / Radio Button Group — on-off or multi-choice'
		]
	},
	{
		id: 'w7-c06',
		type: 'concept',
		front: 'What is a callback in App Designer?',
		back: 'A callback is a function that runs in response to a user action — like clicking a button, moving a slider, or typing a value. App Designer auto-creates a named function (e.g. ButtonPushed) where you write what should happen.',
		hint: 'Think "what happens when the user does X".'
	},
	{
		id: 'w7-c07',
		type: 'concept',
		front: 'How do you create a ButtonPushed callback?',
		back: 'In Design View, right-click the component → Callbacks → "Go to ButtonPushed callback". App Designer jumps to Code View with a new empty function body ready for you to fill in.',
		hint: 'Right-click is the entry point. Look for the Callbacks sub-menu.'
	},
	{
		id: 'w7-c08',
		type: 'code',
		front: 'How do you read the number typed into an Edit Field (Numeric) named MassEditField?',
		back: 'Use app.MassEditField.Value — this returns the number the user typed.',
		code: 'mass = app.MassEditField.Value;'
	},
	{
		id: 'w7-c09',
		type: 'code',
		front: 'How do you write a value back into an Edit Field (Numeric) named ForceEditField?',
		back: 'Assign to its Value property. The field on screen updates immediately.',
		code: 'app.ForceEditField.Value = force;'
	},
	{
		id: 'w7-c10',
		type: 'code',
		front: 'How do you change the text shown on a Label named StatusLabel?',
		back: 'Assign a string to its Text property.',
		code: "app.StatusLabel.Text = 'Active';"
	},
	{
		id: 'w7-c11',
		type: 'code',
		front: 'How do you change a Lamp to red, green, or black?',
		back: "Set the Lamp's Color property to a single-letter colour code: 'r' (red), 'g' (green), 'k' (black), 'b' (blue), 'y' (yellow).",
		code: "app.WarningLamp.Color = 'r';   % red\napp.WarningLamp.Color = 'g';   % green\napp.WarningLamp.Color = 'k';   % black"
	},
	{
		id: 'w7-c12',
		type: 'code',
		front: 'How do you plot onto an Axes component in an app (not a regular figure)?',
		back: "Pass the UIAxes handle as the FIRST argument to plot(). The pattern is plot(app.UIAxes, x, y).",
		code: 't = 0:0.1:10;\ny = sin(2*pi*t);\nplot(app.UIAxes, t, y);'
	},
	{
		id: 'w7-c13',
		type: 'concept',
		front: 'What is the difference between ButtonPushed and ValueChanged callbacks?',
		back: 'ButtonPushed fires when a Button is clicked. ValueChanged fires when the value of an input component (Slider, Knob, Edit Field, Drop Down) changes. Use ValueChanged for "live update" behaviour without needing a button.',
		hint: 'One needs a click, the other reacts to any value change.'
	},
	{
		id: 'w7-c14',
		type: 'concept',
		front: 'How do you make sliders update a plot live, without clicking a button?',
		back: 'Assign the same callback function (e.g. StartButtonPushed) to the ValueChangedFcn of each slider/knob. Now moving any slider re-runs the plotting code automatically.',
		hint: 'Point several components at ONE callback.'
	},
	{
		id: 'w7-c15',
		type: 'code',
		front: 'How do you use a switch-case inside a callback based on a numeric input?',
		back: "switch on the value, list each case with its action, and close with end.",
		code: "value = app.SensorEditField.Value;\nswitch value\n    case 1\n        app.Label.Text = 'Inactive';\n        app.Lamp.Color = 'r';\n    case 2\n        app.Label.Text = 'Active';\n        app.Lamp.Color = 'g';\n    case 3\n        app.Label.Text = 'Error';\n        app.Lamp.Color = 'k';\nend"
	},
	{
		id: 'w7-c16',
		type: 'concept',
		front: 'How do you package an App Designer app for sharing?',
		back: 'In App Designer: Designer tab → Share → MATLAB App. Fill in the name, author, and description, then click Package. This produces a .mlappinstall file that others can install.',
		hint: 'Share → MATLAB App. It creates an installer file.'
	},
	{
		id: 'w7-c17',
		type: 'concept',
		front: 'How does someone install a packaged .mlappinstall app?',
		back: 'In MATLAB: APPS tab → Install App → pick the .mlappinstall file → Install. The app then appears under "My Apps" and can be launched with a click.',
		hint: 'APPS tab has an Install App button.'
	},
	{
		id: 'w7-c18',
		type: 'code',
		front: 'How do you open a website from a button callback?',
		back: "Use the web() function with the URL as a string. It opens the page in the system browser.",
		code: "web('https://www.rmit.edu.au/');"
	},
	{
		id: 'w7-c19',
		type: 'code',
		front: 'How do you download an image from a URL and display it on UIAxes?',
		back: "webread() fetches the image data. imshow() with the 'Parent' name-value pair targets the app's axes.",
		code: "data = webread(app.URLEditField.Value);\nimshow(data, 'Parent', app.UIAxes);\nimwrite(data, 'myimage.png');   % optional: save to disk"
	},
	{
		id: 'w7-c20',
		type: 'concept',
		front: 'What is the Component Browser?',
		back: "The panel on the right side of App Designer that lists every component in your app. Click a component there to select it, see its properties, rename it, or jump to its callbacks.",
		hint: 'A tree of components — top-right of the window.'
	}
];

export const week7Quiz: QuizData[] = [
	{
		id: 'w7-q01',
		type: 'fill-blank',
		question: 'What command do you type in the Command Window to open MATLAB App Designer?',
		answer: 'appdesigner',
		acceptableAnswers: ['appdesigner;', 'appDesigner'],
		explanation: 'Typing appdesigner at the >> prompt launches the App Designer home screen where you can open an existing app or start from a blank one.'
	},
	{
		id: 'w7-q02',
		type: 'multiple-choice',
		question: 'What file extension is used for MATLAB App Designer apps?',
		options: ['.m', '.mat', '.mlapp', '.mlx'],
		correctIndex: 2,
		explanation: '.mlapp bundles both the layout and the callback code into a single file. (.m = script, .mat = saved data, .mlx = Live Script.)'
	},
	{
		id: 'w7-q03',
		type: 'multiple-choice',
		question: 'Which of these is NOT a standard component in App Designer?',
		options: ['Button', 'Slider', 'Knob', 'Joystick'],
		correctIndex: 3,
		explanation: 'Button, Slider, and Knob are all in the Component Library. There is no built-in Joystick component.'
	},
	{
		id: 'w7-q04',
		type: 'code-output',
		question: 'To read the number typed into an Edit Field (Numeric) called MassEditField, you write:',
		code: 'mass = app.MassEditField.______;',
		answer: 'Value',
		acceptableAnswers: ['value'],
		explanation: 'Every input component stores its current value in the .Value property. Use app.ComponentName.Value to read it.'
	},
	{
		id: 'w7-q05',
		type: 'multiple-choice',
		question: 'Inside a callback, how do you plot vector y against vector t on an Axes component named UIAxes?',
		options: [
			'plot(t, y)',
			'plot(app.UIAxes, t, y)',
			'app.UIAxes.plot(t, y)',
			'plot(UIAxes, t, y)'
		],
		correctIndex: 1,
		explanation: 'In App Designer, the axes handle is the FIRST argument to plot(). This tells MATLAB which axes to draw on instead of creating a new figure window.'
	},
	{
		id: 'w7-q06',
		type: 'multiple-choice',
		question: 'Which callback fires automatically when the user drags a Slider without clicking any button?',
		options: ['ButtonPushed', 'ValueChanged', 'Startup', 'MouseMoved'],
		correctIndex: 1,
		explanation: 'ValueChanged fires whenever the component\'s value changes. Assign the same ValueChanged callback to multiple sliders for live-updating plots.'
	},
	{
		id: 'w7-q07',
		type: 'fill-blank',
		question: "To turn a Lamp named WarningLamp red inside a callback, you write: app.WarningLamp.Color = ____;",
		answer: "'r'",
		acceptableAnswers: ["'red'", '"r"', '"red"', 'r'],
		explanation: "Lamp.Color accepts a colour letter in quotes: 'r' (red), 'g' (green), 'b' (blue), 'k' (black), etc. You can also pass a full name like 'red' or an RGB triplet."
	},
	{
		id: 'w7-q08',
		type: 'multiple-choice',
		question: 'Where in App Designer do you go to create an installation file for sharing your app?',
		options: [
			'Canvas tab → Export',
			'Designer tab → Share → MATLAB App',
			'View tab → Package',
			'File → Save As → .exe'
		],
		correctIndex: 1,
		explanation: 'Designer → Share → MATLAB App opens the packaging wizard that produces a .mlappinstall file. Recipients install it from the APPS tab → Install App.'
	},
	{
		id: 'w7-q09',
		type: 'code-output',
		question: 'Fill in the blank so clicking the button opens the RMIT website in the browser:',
		code: "function RMITButtonPushed(app, event)\n    ____('https://www.rmit.edu.au/');\nend",
		answer: 'web',
		acceptableAnswers: ['web()'],
		explanation: "web('url') opens the given URL in the system's default browser. Use webread() instead if you want to DOWNLOAD data rather than just display a page."
	},
	{
		id: 'w7-q10',
		type: 'multiple-choice',
		question: "Inside a callback, which line correctly changes the text on a Label named StatusLabel?",
		options: [
			"app.StatusLabel.Value = 'Active';",
			"app.StatusLabel.Text = 'Active';",
			"StatusLabel.Text = 'Active';",
			"set(app.StatusLabel, 'Active');"
		],
		correctIndex: 1,
		explanation: "Labels use the .Text property (input components like Edit Field use .Value). The app. prefix is required to reach the component."
	}
];
