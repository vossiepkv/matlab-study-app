export interface LabStep {
	description: string;
	code?: string;
	note?: string;
}

export interface LabExercise {
	id: string;
	title: string;
	problem: string;
	approach?: string;
	steps: LabStep[];
	fullSolution?: string;
	expectedOutput?: string;
}

export const week1Labs: LabExercise[] = [
	{
		id: 'w1-lab1',
		title: 'Q1 — Arithmetic in the Command Window',
		problem: 'Type each expression in the Command Window and check the result:\n  (a) 3² + 5\n  (b) 3^(2+5)\n  (c) 60 / (2+3)\n  (d) 5π / 3\n  (e) 5 + (9^(3/2) + 1) / (2·(5−3))',
		approach: 'Translate each math symbol to MATLAB one by one: superscript → ^, implicit × → *, π → pi, fraction bars → / with parentheses on multi-term sides.',
		steps: [
			{ description: 'Power + addition — caret for the exponent.', code: '>> 3^2 + 5\nans =\n    14' },
			{ description: 'When the exponent has more than one term, wrap it in parentheses.', code: '>> 3^(2+5)\nans =\n        2187' },
			{ description: 'Fractions: / for the bar, parens around the full denominator.', code: '>> 60/(2+3)\nans =\n    12' },
			{ description: '5π/3 needs an explicit * and the built-in constant pi.', code: '>> 5*pi/3\nans =\n    5.2360' },
			{ description: 'Nested expression — parenthesise both numerator and denominator.', code: '>> 5 + (9^(3/2) + 1)/(2*(5-3))\nans =\n    12'}
		]
	},
	{
		id: 'w1-lab2',
		title: 'Example 2 — Area and circumference of a circle',
		problem: 'A circle has diameter 10 m. Find the area A = πr² and circumference C = 2πr. Do it in the Command Window AND in an Editor script.',
		approach: 'Store the diameter in a variable, derive the radius, then compute A and C. Suppress intermediate output with semicolons in the script version.',
		steps: [
			{ description: 'Assign the diameter.', code: 'd = 10;' },
			{ description: 'Derive the radius.', code: 'r = d/2;' },
			{ description: 'Area of a circle = π r². Use * for multiplication, ^ for the power.', code: 'A = pi*r^2;' },
			{ description: 'Circumference = 2π r.', code: 'C = 2*pi*r;' },
			{ description: 'Display the labelled results.', code: 'disp("The area of the circle is")\ndisp(A)\ndisp("The circumference of the circle is")\ndisp(C)' }
		],
		fullSolution: 'd = 10;        % diameter\nr = d/2;       % radius\nA = pi*r^2;    % area\nC = 2*pi*r;    % circumference\n\ndisp("Area ="), disp(A)\ndisp("Circumference ="), disp(C)',
		expectedOutput: 'Area =\n   78.5398\nCircumference =\n   31.4159'
	},
	{
		id: 'w1-lab3',
		title: 'Exercise 2 — Distance between two points',
		problem: 'Find the distance between (−4, 10) and (4, −10) using d = √((x₂−x₁)² + (y₂−y₁)²).',
		approach: 'Store each coordinate in its own variable, then apply the formula. Every power needs ^ and the square root is sqrt().',
		steps: [
			{ description: 'Store the coordinates.', code: 'x1 = -4; y1 = 10;\nx2 =  4; y2 = -10;' },
			{ description: 'Apply the distance formula.', code: 'd = sqrt((x2-x1)^2 + (y2-y1)^2)' }
		],
		fullSolution: 'x1 = -4; y1 = 10;\nx2 =  4; y2 = -10;\nd = sqrt((x2-x1)^2 + (y2-y1)^2)',
		expectedOutput: 'd =\n   21.5407'
	},
	{
		id: 'w1-lab4',
		title: 'Example 3 — Depth of a well',
		problem: 'A stone is dropped; it hits the bottom after t = 10 s. Given depth = (g/k)·(t + (e^(−k·t) − 1)/k), with g = 9.81, k = 0.05, compute depth.',
		approach: 'Assign the constants, write the formula using exp() for e^, then display the result.',
		steps: [
			{ description: 'Set the physical constants.', code: 'g = 9.81;\nk = 0.05;\nt = 10;' },
			{ description: 'Formula: use exp(-k*t) instead of "e^..." — MATLAB has no e constant.', code: 'depth = (g/k) * (t + (exp(-k*t) - 1)/k);' },
			{ description: 'Display the answer with a label.', code: 'disp("Depth of well is")\ndisp(depth)\ndisp("metres")' }
		],
		fullSolution: 'g = 9.81;\nk = 0.05;\nt = 10;\ndepth = (g/k) * (t + (exp(-k*t) - 1)/k);\ndisp("Depth of well is"), disp(depth), disp("metres")',
		expectedOutput: 'Depth of well is\n  393.6127\nmetres'
	},
	{
		id: 'w1-lab5',
		title: 'Example 4 — Kiwi fruit with floor and rem',
		problem: 'You have 95 cents. Kiwi fruit are 35 cents each. Use floor() and rem() to find how many you can buy and how much change is left.',
		approach: 'floor() divides and rounds DOWN (whole kiwis). rem() gives the remainder (leftover cents).',
		steps: [
			{ description: 'Declare the totals.', code: 'Total_cents    = 95;\nPer_kiwi_price = 35;' },
			{ description: 'Whole kiwis — floor of the division.', code: 'No_of_kiwi = floor(Total_cents / Per_kiwi_price)' },
			{ description: 'Leftover change — remainder of the division. mod() also works.', code: 'Change_left = rem(Total_cents, Per_kiwi_price)' }
		],
		fullSolution: 'clc; clear;\nTotal_cents    = 95;\nPer_kiwi_price = 35;\nNo_of_kiwi  = floor(Total_cents / Per_kiwi_price)\nChange_left = rem(Total_cents, Per_kiwi_price)',
		expectedOutput: 'No_of_kiwi  = 2\nChange_left = 25'
	}
];

export const week2Labs: LabExercise[] = [
	{
		id: 'w2-lab1',
		title: 'Exercise 1 — Build three vectors',
		problem: '(a) Row vector with elements √15×10³, 25/(14−6²), ln(35/0.4³), sin(65°)/cos(80°), 129, cos²(π/20).\n(b) With c=4.5, d=2.8, build a column vector f = [d²; c; c+d; c^d; d]. Then make a row vector from it.\n(c) Row vector h with 8 equally spaced elements from 68 down to 12.',
		approach: '(a) Translate each expression carefully — sind/cosd for degrees, log for natural log, (...) for grouping. (b) Use semicolons for the column, transpose (\') to flip. (c) linspace with count = 8.',
		steps: [
			{ description: '(a) Each element is its own expression inside [ ]. Use log (natural) and sind/cosd for degrees.', code: 'a = [sqrt(15)*10^3, 25/(14-6^2), log(35/0.4^3), sind(65)/cosd(80), 129, cosd(pi/20)^2]' },
			{ description: '(b) Define c and d, then build f with SEMICOLONS to stack vertically.', code: 'c = 4.5;\nd = 2.8;\nf = [d^2; c; c+d; c^d; d]' },
			{ description: 'Transpose f (apostrophe) to turn the column into a row.', code: "f_row = f'" },
			{ description: '(c) 8 equally spaced values from 68 to 12 — linspace handles it.', code: 'h = linspace(68, 12, 8)' }
		]
	},
	{
		id: 'w2-lab2',
		title: 'Exercise 2 — Combine row and column vectors',
		problem: 'A = [4:3:13] (row), B = [14:-2:6]\' (column). Using only A and B, build: (a) row C = [B A], (b) column D = [A; B].',
		approach: "Concatenation rules: spaces/commas inside [ ] concatenate horizontally; semicolons stack vertically. You may need to transpose A or B to match shapes.",
		steps: [
			{ description: 'Build the vectors.', code: 'A = [4:3:13];\nB = [14:-2:6]\';' },
			{ description: "(a) C is a row — need B as a row. Transpose B, then concatenate with A.", code: "C = [B' A]" },
			{ description: "(b) D is a column — need A as a column. Transpose A, then stack with B.", code: "D = [A'; B]" }
		]
	},
	{
		id: 'w2-lab4',
		title: 'Exercise 4 — Reshape a vector into a matrix',
		problem: 'Given C = [1.5 2 2.5 3 3.5 4 4.5 5 9.6 9.1 8.6 8.1 7.6 7.1 6.6 6.1], use reshape and transpose to get a 4×4 matrix D (values fill by rows). Then extract: (a) Da = elements of rows 1 & 3 (column vector), (b) Db = elements of cols 2 & 4 (row vector), (c) Dc as described.',
		approach: "reshape() fills COLUMN-by-column, so to fill by rows you reshape to 4×4 with flipped dims, then transpose.",
		steps: [
			{ description: 'Create the original vector.', code: 'C = [1.5 2 2.5 3 3.5 4 4.5 5 9.6 9.1 8.6 8.1 7.6 7.1 6.6 6.1];' },
			{ description: "reshape into 4x4 filling column-wise, then transpose to get row-wise fill.", code: "D = reshape(C, 4, 4)'" },
			{ description: '(a) Rows 1 and 3 as a column vector. Use the colon and a transpose.', code: "Da = [D(1,:) D(3,:)]'" },
			{ description: '(b) Columns 2 and 4 as a row vector.', code: "Db = [D(:,2)' D(:,4)']" },
			{ description: '(c) Combine row-1 first 2 elts, column-2 last 3 elts, row-4 first 3 elts.', code: "Dc = [D(1,1:2) D(2:4,2)' D(4,1:3)]" }
		]
	},
	{
		id: 'w2-lab5',
		title: 'Exercise 5 — Build matrices with zeros, ones, eye',
		problem: 'In ONE command each:\nA = 3×6 where cols 1-3 = identity and cols 4-6 repeat it.\nB = 2×5 of mostly zeros with the last two columns all 1s.\nC = 3×4 of zeros with the first column all 1s.',
		approach: 'Concatenate block matrices side-by-side. eye(n) = n×n identity. zeros(r,c) = zero matrix. ones(r,c) = matrix of 1s.',
		steps: [
			{ description: 'A = [identity, identity] side by side.', code: 'A = [eye(3) eye(3)]' },
			{ description: 'B = zeros block + ones block.', code: 'B = [zeros(2,3) ones(2,2)]' },
			{ description: 'C = column of 1s next to a block of zeros.', code: 'C = [ones(3,1) zeros(3,3)]' }
		]
	},
	{
		id: 'w2-lab6',
		title: 'Exercise 6 — Extract rows and columns',
		problem: 'Matrix M = [1 7 13 19 25; 3 9 15 21 27; 5 11 17 23 29]. Create: (a) Va = row 3 (5 elements). (b) Vb = column 4 (3 elements). (c) Vc = row 2 followed by column 3 (8 elements).',
		approach: "Indexing A(row, col). Use : to say 'all of that dimension'. A transpose may be needed to match row/column orientation.",
		steps: [
			{ description: 'Create M.', code: 'M = [1 7 13 19 25; 3 9 15 21 27; 5 11 17 23 29];' },
			{ description: '(a) Entire row 3.', code: 'Va = M(3,:)' },
			{ description: '(b) Entire column 4.', code: 'Vb = M(:,4)' },
			{ description: "(c) Row 2 concatenated with column 3 (transposed to be a row).", code: "Vc = [M(2,:) M(:,3)']" }
		]
	}
];

export const week3Labs: LabExercise[] = [
	{
		id: 'w3-lab1',
		title: 'Exercise 1 — Projectile range and height',
		problem: 'For v₀ = 10 m/s and g = 9.81, compute s(θ) = v₀²/g · sin(2θ) and h(θ) = v₀² sin²(θ)/(2g) for θ = 15°, 25°, 35°, 45°, 55°, 65°, 75°. Also find max s and max h.',
		approach: "Put the angles in a vector, convert to radians, then evaluate both formulas element-wise. Use max() for the maxima.",
		steps: [
			{ description: 'Constants.', code: 'v0 = 10;\ng  = 9.8;' },
			{ description: 'Angle vector in degrees, then convert to radians.', code: 'theta_deg = [15 25 35 45 55 65 75];\ntheta_rad = deg2rad(theta_deg);' },
			{ description: 's(θ) = v₀²/g · sin(2θ). sin() vectorises, so no dot needed.', code: 's_theta = (v0^2/g) * sin(2*theta_rad)' },
			{ description: 'h(θ) = v₀² sin²(θ)/(2g). Use .^2 because theta_rad is a vector.', code: 'h_theta = (v0^2/(2*g)) * sin(theta_rad).^2' },
			{ description: 'Maxima.', code: 'max_s = max(s_theta)\nmax_h = max(h_theta)' }
		]
	},
	{
		id: 'w3-lab2',
		title: 'Exercise 2 — Trail mix linear system',
		problem: 'Five mixes use peanuts/almonds/walnuts/raisins/M&Ms. Totals available: 105, 74, 102, 118, 121 oz. How many packages of each mix?\nWrite the 5 equations as A·X = B and solve.',
		approach: 'Let X = [a; b; c; d; e] be the package counts. Each row of A is the amount of ONE ingredient used across the five mixes (read DOWN the column of the original table). B is the available totals. Solve with inv(A)*B or A\\B.',
		steps: [
			{ description: 'Coefficient matrix A — each row is an ingredient equation (peanuts, almonds, walnuts, raisins, M&Ms).', code: 'A = [3 1 1 2 1;\n     1 2 1 0 2;\n     1 1 0 3 3;\n     2 3 3 1 0;\n     1 1 3 2 2];' },
			{ description: 'Right-hand side = the totals.', code: 'B = [105; 74; 102; 118; 121];' },
			{ description: 'Solve. X(1) is Mix 1 count, X(2) is Mix 2, etc.', code: 'X = inv(A)*B' }
		],
		fullSolution: 'clc; clear;\nA = [3 1 1 2 1;\n     1 2 1 0 2;\n     1 1 0 3 3;\n     2 3 3 1 0;\n     1 1 3 2 2];\nB = [105; 74; 102; 118; 121];\nX = inv(A)*B',
		expectedOutput: 'X =\n   13\n   11\n   15\n   14\n   12'
	},
	{
		id: 'w3-lab3',
		title: 'Exercise 3 — Coefficient of friction (6 tests)',
		problem: 'μ = F/(m·g). Given m = [2 4 5 10 20 50] kg and F = [12.5 23.5 30 61 117 294] N, compute μ for each test and the average.',
		approach: "F and m are vectors. To get one μ per test, divide element-wise (./). Average with mean().",
		steps: [
			{ description: 'Enter the data.', code: 'm = [2 4 5 10 20 50];\nF = [12.5 23.5 30 61 117 294];' },
			{ description: 'Element-wise division gives one μ per test.', code: 'mu = F ./ (m*9.81)' },
			{ description: 'Average across all tests.', code: 'mu_ave = mean(mu)' }
		],
		expectedOutput: 'mu     = 0.6371  0.5989  0.6116  0.6218  0.5963  0.5994\nmu_ave = 0.6109'
	},
	{
		id: 'w3-lab4',
		title: 'Exercise 4 — Motion of train and car (11×6 table)',
		problem: 'Train: 400 ft south of crossing, heading north at 54 mi/h (constant). Car: 200 ft west of crossing, heading east at 28 mi/h with 4 ft/s² acceleration. For t = 0..10 s, build a table: [t, train y, car x, distance, car speed, train-relative speed].',
		approach: 'Convert speeds to ft/s (×5280/3600). Use kinematics. sqrt(x²+y²) for the distance. Vectorise over t.',
		steps: [
			{ description: 'Initial speeds (in ft/s) and acceleration.', code: 'v0train = 54*5280/3600;\nv0car   = 28*5280/3600;\nacar    = 4;' },
			{ description: 'Time vector — 11 seconds (0 through 10).', code: 't = 0:10;' },
			{ description: 'Positions: y (train), x (car). Note .^2 on the vector t.', code: 'y = -400 + v0train*t;\nx = -200 + v0car*t + 0.5*acar*t.^2;' },
			{ description: 'Distance between them (element-wise on the vectors).', code: 'd = sqrt(x.^2 + y.^2);' },
			{ description: 'Car speed (accelerating) and train-relative speed.', code: 'vcar = v0car + acar*t;\nspeed_trainRcar = sqrt(vcar.^2 + v0train^2);' },
			{ description: 'Stack columns with transposes to form the 11×6 table.', code: "table = [t' y' x' d' vcar' speed_trainRcar']" }
		]
	}
];

export const week4Labs: LabExercise[] = [
	{
		id: 'w4-lab1',
		title: 'Exercise 1 — Piston-crank mechanism',
		problem: 'Crank spins at 500 rpm. For one revolution, plot position x, velocity ẋ, and acceleration ẍ of the piston (three subplots). Use r = 0.12, c = 0.25.',
		approach: 'Convert rpm to rad/s. Make a time vector for one full revolution. Compute θ, then x, ẋ, ẍ from the given formulas. Use subplot(3,1,k) for three stacked plots.',
		steps: [
			{ description: 'Constants + convert angular speed from rpm to rad/s.', code: 'THDrpm = 500;\nr = 0.12;  c = 0.25;\nTHD = THDrpm*2*pi/60;       % rad/s' },
			{ description: 'Time vector covering exactly one revolution.', code: 'tf = 2*pi/THD;              % seconds per rev\nt  = linspace(0, tf, 200);\nTH = THD*t;                 % theta(t)' },
			{ description: 'Position (eqs 1–3 combined). Use .^2, ./, .* everywhere — TH is a vector.', code: 'x = r*cos(TH) + sqrt(c^2 - r^2*sin(TH).^2);' },
			{ description: 'Velocity ẋ.', code: 'xd = -r*THD*sin(TH) - (r^2*THD*sin(2*TH)) ./ (2*sqrt(c^2 - r^2*sin(TH).^2));' },
			{ description: 'Acceleration ẍ.', code: 'xdd = -r*THD^2*cos(TH) - ...\n   (4*r^2*THD^2*cos(2*TH).*(c^2 - r^2*sin(TH).^2) + (r^2*THD*sin(2*TH)).^2) ...\n   ./ (4*(c^2 - r^2*sin(TH).^2).^(3/2));' },
			{ description: 'Three plots in the same figure.', code: "subplot(3,1,1), plot(t,x),   ylabel('x (m)')\nsubplot(3,1,2), plot(t,xd),  ylabel('dx/dt (m/s)')\nsubplot(3,1,3), plot(t,xdd), ylabel('d^2x/dt^2 (m/s^2)'), xlabel('t (s)')" }
		]
	},
	{
		id: 'w4-lab2',
		title: 'Exercise 2 — Sunflower height (logistic model)',
		problem: 'Data: days = [10 20 30 40 50 60 70], height = [9 22 44 63 80 94 97]. Model: H = 100.8 / (1 + 23·e^(−0.093t)). Plot data as points and the model as a solid line, with legend and axis labels.',
		approach: 'Two data vectors for the points. A fine t vector for the smooth curve. plot(...,"o") for markers, plot(...,"-") for the line. hold on to overlay.',
		steps: [
			{ description: 'Measured data.', code: 'days   = [10 20 30 40 50 60 70];\nheight = [9 22 44 63 80 94 97];' },
			{ description: 'Fine time vector for the model curve.', code: 't = linspace(0, 80, 200);' },
			{ description: 'Evaluate the logistic — use ./ because t is a vector.', code: 'H = 100.8 ./ (1 + 23*exp(-0.093*t));' },
			{ description: 'Plot points + curve. Labels and legend.', code: "plot(days, height, 'ro', 'MarkerFaceColor','r')\nhold on\nplot(t, H, 'b-')\nxlabel('Time (days)')\nylabel('Height (in)')\ntitle('Sunflower Growth')\nlegend('Measured','Model')\nhold off" }
		]
	},
	{
		id: 'w4-lab3',
		title: 'Exercise 3 — Curvilinear motion',
		problem: 'x(t) = 52t − 9t², y(t) = 125 − 5t². Velocity v = √(vx² + vy²) where vx = dx/dt, vy = dy/dt. For 0 ≤ t ≤ 5 (step 0.1), subplot position and velocity. Use min() to find the time of minimum velocity.',
		approach: 'Differentiate by hand: vx = 52 − 18t, vy = −10t. Vectorise over t. subplot(2,1,k) for two stacked plots. [vmin, idx] = min(v) gives both value and index.',
		steps: [
			{ description: 'Time vector (step 0.1 s).', code: 't = 0:0.1:5;' },
			{ description: 'Position components — use .^ for element-wise squaring.', code: 'x = 52*t - 9*t.^2;\ny = 125 - 5*t.^2;' },
			{ description: 'Velocity components (derivatives done by hand).', code: 'vx = 52 - 18*t;\nvy = -10*t;\nv  = sqrt(vx.^2 + vy.^2);' },
			{ description: 'Two stacked plots: position (as x vs y) and speed vs time.', code: "subplot(2,1,1), plot(x, y, '-*'), xlabel('x (m)'), ylabel('y (m)'), title('Position')\nsubplot(2,1,2), plot(t, v),       xlabel('t (s)'), ylabel('v (m/s)'), title('Speed')" },
			{ description: 'Minimum velocity and its time.', code: '[vmin, idx] = min(v);\nt_min = t(idx);\nfprintf("Min speed = %.3f at t = %.2f s\\n", vmin, t_min);' }
		]
	}
];

export const week5Labs: LabExercise[] = [
	{
		id: 'w5-lab1',
		title: 'Exercise 1 — Modify vector elements with for + if',
		problem: 'V = [5, 17, -3, 8, 0, -7, 12, 15, 20, -6, 6, 4, -7, 16]. Double elements that are POSITIVE and divisible by 3 or 5. Cube elements that are NEGATIVE but > −5. Leave others alone.',
		approach: "Loop through each index. Inside the loop, use if/elseif with the right conditions. mod(x,3)==0 tests 'divisible by 3'. Combine conditions with & or &&.",
		steps: [
			{ description: 'Starting vector.', code: 'V = [5, 17, -3, 8, 0, -7, 12, 15, 20, -6, 6, 4, -7, 16];' },
			{ description: 'Loop over every index of V.', code: 'for k = 1:length(V)\n    % body here\nend' },
			{ description: 'Inside the loop: two mutually-exclusive rules.', code: 'for k = 1:length(V)\n    if V(k) > 0 && (mod(V(k),3) == 0 || mod(V(k),5) == 0)\n        V(k) = V(k) * 2;\n    elseif V(k) < 0 && V(k) > -5\n        V(k) = V(k)^3;\n    end\nend' },
			{ description: 'Display the result.', code: 'disp(V)' }
		],
		expectedOutput: 'V = [5  17  -27  8  0  -7  24  30  40  -6  12  4  -7  16]'
	},
	{
		id: 'w5-lab2',
		title: 'Exercise 2 — Retirement account withdrawals',
		problem: 'Deposit $300,000 at 5% yearly interest. First withdrawal $25,000 after year 1, rising 2% per year for inflation. How many years until the account cannot cover the next withdrawal? Plot balance and withdrawals.',
		approach: "Use a while loop — number of years is unknown. Each iteration: add interest, withdraw, grow the next withdrawal by 2%. Keep vectors year, W, AB for plotting.",
		steps: [
			{ description: 'Initial conditions.', code: 'balance   = 300000;\nrate      = 0.05;\nwithdraw  = 25000;\ninflation = 0.02;' },
			{ description: 'Output vectors, year counter starts at 0.', code: 'year = 0;\nW    = [];\nAB   = balance;' },
			{ description: 'Loop until we cannot cover the next withdrawal.', code: 'while balance*(1+rate) >= withdraw\n    year    = year + 1;\n    balance = balance*(1+rate) - withdraw;\n    W(end+1)  = withdraw;\n    AB(end+1) = balance;\n    withdraw  = withdraw*(1+inflation);\nend\nfprintf("Money lasts %d years.\\n", year);' },
			{ description: 'Plot balance over time and the yearly withdrawals.', code: "figure\nsubplot(2,1,1), plot(0:year, AB, '-o'), ylabel('Balance ($)'), title('Account balance')\nsubplot(2,1,2), plot(1:year, W,  '-o'), xlabel('Year'), ylabel('Withdrawal ($)')" }
		]
	},
	{
		id: 'w5-lab3',
		title: 'Exercise 3 — Model rocket flight',
		problem: 'Rocket flight in three segments:\n  1. Engine on for 0.15 s, thrust 16 N (rising, constant a).\n  2. Engine off, gravity slows it, rises and falls until v = −20 m/s.\n  3. Parachute opens, constant −20 m/s until it hits the ground.\nPlot speed and altitude vs time. Assume mass m and g = 9.81.',
		approach: 'Three while loops, one per segment. Carry t, v, h values at the end of each segment into the next. Append to arrays with (end+1) for plotting at the end.',
		steps: [
			{ description: 'Constants. Guess a mass (the tutorial uses 0.05 kg).', code: 'm  = 0.05;\ng  = 9.81;\nFE = 16;\ndt = 0.01;     % time step\na1 = (FE - m*g)/m;  % acceleration while engine on' },
			{ description: 'Segment 1: engine on, 0 ≤ t < 0.15. Constant acceleration a1.', code: 't  = 0;  v = 0;  h = 0;\nT = t;   V = v;  H = h;\nwhile t < 0.15\n    t = t + dt;\n    v = a1*t;\n    h = 0.5*a1*t.^2;\n    T(end+1) = t; V(end+1) = v; H(end+1) = h;\nend\nt1 = t; v1 = v; h1 = h;' },
			{ description: 'Segment 2: free flight (gravity only) until v reaches −20 m/s.', code: 'while v > -20\n    t = t + dt;\n    v = v1 - g*(t - t1);\n    h = h1 + v1*(t - t1) - 0.5*g*(t - t1)^2;\n    T(end+1) = t; V(end+1) = v; H(end+1) = h;\nend\nt2 = t; h2 = h;' },
			{ description: 'Segment 3: parachute — constant −20 m/s until h ≤ 0.', code: 'while h > 0\n    t = t + dt;\n    v = -20;\n    h = h2 - 20*(t - t2);\n    T(end+1) = t; V(end+1) = v; H(end+1) = h;\nend' },
			{ description: 'Plot both curves.', code: "figure\nsubplot(2,1,1), plot(T, H), xlabel('t (s)'), ylabel('Altitude (m)')\nsubplot(2,1,2), plot(T, V), xlabel('t (s)'), ylabel('Speed (m/s)')" }
		]
	}
];

export const week6Labs: LabExercise[] = [
	{
		id: 'w6-lab1',
		title: 'Exercise 2 — User function for f(x) = x⁴·√(3x+5) / (x²+1)²',
		problem: 'Write a function file that accepts x (scalar OR vector) and returns f(x). Then evaluate at x = 6, and at x = [1 3 5 7 9 11].',
		approach: 'One function file saved as myFunc.m. Inside, use .^ , .*  and ./ so vectors work.',
		steps: [
			{ description: 'Create myFunc.m with the function header.', code: 'function y = myFunc(x)\n    y = (x.^4 .* sqrt(3*x + 5)) ./ (x.^2 + 1).^2;\nend' },
			{ description: 'Call it with a scalar.', code: '>> myFunc(6)' },
			{ description: 'Call it with a vector — returns one output per input.', code: '>> myFunc([1 3 5 7 9 11])' }
		]
	},
	{
		id: 'w6-lab2',
		title: 'Exercise 3 — FtoC function + thermal expansion',
		problem: 'Write FtoC(F) that converts Fahrenheit to Celsius. Use it to find ΔL for a 4.5 m × 2.25 m aluminium plate (α = 23×10⁻⁶) when T goes 40°F → 92°F. ΔL = α·L·ΔT (in Celsius).',
		approach: 'Convert both edge lengths separately (same ΔT). The formula wants ΔT in Celsius, so convert the temperatures first.',
		steps: [
			{ description: 'Create FtoC.m.', code: 'function C = FtoC(F)\n    C = (F - 32) * 5/9;\nend' },
			{ description: 'Compute ΔT in Celsius.', code: 'dT = FtoC(92) - FtoC(40);' },
			{ description: 'Apply ΔL = α·L·ΔT to both edges.', code: 'alpha = 23e-6;\ndL1 = alpha * 4.5  * dT;\ndL2 = alpha * 2.25 * dT;\nfprintf("Length changes: %.5f m, %.5f m\\n", dL1, dL2);' }
		]
	},
	{
		id: 'w6-lab3',
		title: 'Exercise 4 — Distance between polar points (anonymous function)',
		problem: 'Use d = √(r_A² + r_B² − 2·r_A·r_B·cos(θ_A − θ_B)) as an anonymous function. Find the distance between A(2, π/6) and B(5, 3π/4).',
		approach: 'Anonymous functions: name = @(args) expression. Four inputs here.',
		steps: [
			{ description: 'Define the anonymous function.', code: 'd = @(rA, thA, rB, thB) sqrt(rA^2 + rB^2 - 2*rA*rB*cos(thA - thB));' },
			{ description: 'Call it with the given points.', code: 'ans = d(2, pi/6, 5, 3*pi/4)' }
		],
		expectedOutput: 'ans ≈ 6.1394'
	},
	{
		id: 'w6-lab4',
		title: 'Exercise 5 — Nested function for mean + std deviation',
		problem: 'Write statNest(v) with TWO nested sub-functions: AVG(x) computes the mean, StandDiv(x) computes the standard deviation. Use it on grades = [80 75 91 60 79 89 65 80 95 50 81].',
		approach: 'Primary function defines length n and the mean me. Nested functions share those via scope. Return both outputs: [me SD].',
		steps: [
			{ description: 'Create statNest.m.', code: 'function [me, SD] = statNest(v)\n    n  = length(v);\n    me = AVG(v);\n    SD = StandDiv(v);\n\n    function av = AVG(x)\n        av = sum(x)/n;\n    end\n\n    function s = StandDiv(x)\n        s = sqrt(sum((x - me).^2) / (n - 1));\n    end\nend' },
			{ description: 'Call it on the grade data.', code: 'grades = [80 75 91 60 79 89 65 80 95 50 81];\n[m, s] = statNest(grades)' }
		],
		expectedOutput: 'm ≈ 76.8182\ns ≈ 13.5422'
	},
	{
		id: 'w6-lab5',
		title: 'Exercise 6 — User function y(x) = (−0.2x³ + 7x²)·e^(−0.3x)',
		problem: 'Write a function, calculate y(−1.5) and y(5), and plot y for −2 ≤ x ≤ 6.',
		approach: 'Element-wise ops in the function body. linspace for a smooth curve.',
		steps: [
			{ description: 'Create myY.m.', code: 'function y = myY(x)\n    y = (-0.2*x.^3 + 7*x.^2) .* exp(-0.3*x);\nend' },
			{ description: 'Single evaluations.', code: '>> myY(-1.5)\n>> myY(5)' },
			{ description: 'Plot over the range.', code: "x = linspace(-2, 6, 200);\nplot(x, myY(x))\nxlabel('x'), ylabel('y(x)'), grid on" }
		]
	}
];

export const week7Labs: LabExercise[] = [
	{
		id: 'w7-lab1',
		title: 'Exercise 1 — Circle calculator app',
		problem: 'Build an App Designer app with a diameter input field that computes and displays area (πr²) and circumference (2πr) on button press.',
		approach: 'Drag 3 Edit Field (Numeric) + 1 Button. Name them DiameterEditField, AreaEditField, CircumferenceEditField, CalculateButton. In the Calculate button callback, read the diameter and write the two results.',
		steps: [
			{ description: 'Open App Designer and pick Blank App.', code: '>> appdesigner' },
			{ description: 'Drag components from Component Library: 3 Edit Field (Numeric) + 1 Button. Rename via the Component Browser.', note: 'Good names: DiameterEditField, AreaEditField, CircumferenceEditField, CalculateButton.' },
			{ description: 'Right-click the Calculate button → Callbacks → Go to ButtonPushed callback.' },
			{ description: 'Fill in the callback body.', code: 'function CalculateButtonPushed(app, event)\n    d = app.DiameterEditField.Value;\n    r = d/2;\n    app.AreaEditField.Value          = pi*r^2;\n    app.CircumferenceEditField.Value = 2*pi*r;\nend' },
			{ description: 'Click Run, enter 10 in the diameter field, press Calculate.', note: 'Expected: Area ≈ 78.5398, Circumference ≈ 31.4159.' }
		]
	},
	{
		id: 'w7-lab2',
		title: 'Exercise 2 — Package and install the app',
		problem: 'Package the circle calculator as a sharable .mlappinstall file and install it through the APPS tab.',
		approach: 'Designer tab → Share → MATLAB App opens the packaging wizard. After you get the installer file, APPS tab → Install App loads it into MATLAB.',
		steps: [
			{ description: 'In App Designer: Designer tab → Share → MATLAB App.' },
			{ description: 'Fill in name, author, summary. Optionally add a description and icon.' },
			{ description: 'Click Package. An .mlappinstall file appears in the output folder.' },
			{ description: 'Switch to MATLAB main window. APPS tab → Install App → pick your .mlappinstall → Install.' },
			{ description: 'Find your app under My Apps. Click it to launch.' }
		]
	},
	{
		id: 'w7-lab3',
		title: 'Exercise 3 — Website launcher app',
		problem: 'Build an app with five buttons (Siemens, Omron, Facebook, LinkedIn + one more) that open each site in the browser when clicked.',
		approach: 'Drag 5 buttons. Rename each (SiemensButton, OmronButton, …). Each button gets its own ButtonPushed callback that calls web(url).',
		steps: [
			{ description: 'New Blank App → drag 5 Button components onto the canvas, rename them per site.' },
			{ description: 'For each button, right-click → Callbacks → Go to ButtonPushed callback.' },
			{ description: 'Body for each callback — just one line.', code: "function SiemensButtonPushed(app, event)\n    web('https://www.siemens.com/en-us/');\nend\n\nfunction OmronButtonPushed(app, event)\n    web('https://www.omron.com.au/');\nend\n\nfunction FacebookButtonPushed(app, event)\n    web('https://www.facebook.com/');\nend\n\nfunction LinkedInButtonPushed(app, event)\n    web('https://au.linkedin.com/');\nend" },
			{ description: 'Run the app and test each button.' }
		]
	},
	{
		id: 'w7-lab4',
		title: 'Exercises 4 & 5 — Add/Subtract/Multiply/Divide/Square calculator',
		problem: 'Build a calculator with number pads 0–9, a display, Clear, and operation buttons (+, −, ×, ÷, x²).',
		approach: 'Use one Edit Field (Text) as the display. Number buttons APPEND their digit. Operator buttons remember the current number and the pending operation. Equals button performs the calculation.',
		steps: [
			{ description: "Drag: 1 Edit Field (Text) for the display, buttons 0–9, operator buttons (+ − × ÷ =), Clear, and a Square (x²) button." },
			{ description: "Add two PROPERTIES on the app for state. In Code View click 'Property' on the ribbon to insert this block.", code: "properties (Access = private)\n    storedValue = 0\n    pendingOp   = ''\nend" },
			{ description: "Number button callback (shown for the '1' button — others are identical with their own digit).", code: "function OneButtonPushed(app, event)\n    app.DisplayEditField.Value = [app.DisplayEditField.Value '1'];\nend" },
			{ description: "Operator callback (shown for +; − × ÷ are identical with their own symbol).", code: "function PlusButtonPushed(app, event)\n    app.storedValue = str2double(app.DisplayEditField.Value);\n    app.pendingOp   = '+';\n    app.DisplayEditField.Value = '';\nend" },
			{ description: "Equals button — apply the pending operation.", code: "function EqualsButtonPushed(app, event)\n    current = str2double(app.DisplayEditField.Value);\n    switch app.pendingOp\n        case '+', result = app.storedValue + current;\n        case '-', result = app.storedValue - current;\n        case '*', result = app.storedValue * current;\n        case '/', result = app.storedValue / current;\n    end\n    app.DisplayEditField.Value = num2str(result);\nend" },
			{ description: "Square button — operates on whatever is showing.", code: "function SquareButtonPushed(app, event)\n    v = str2double(app.DisplayEditField.Value);\n    app.DisplayEditField.Value = num2str(v^2);\nend" },
			{ description: "Clear button — reset the display and state.", code: "function ClearButtonPushed(app, event)\n    app.DisplayEditField.Value = '';\n    app.storedValue = 0;\n    app.pendingOp   = '';\nend" }
		]
	},
	{
		id: 'w7-lab5',
		title: 'Exercise 6 — Dynamic sinusoid plot with sliders + knob',
		problem: 'Plot y(t) = A·sin(2πft + α) for 0 ≤ t ≤ 2 s. Control A and α with sliders, f with a knob. Wire ValueChanged on each control to re-plot.',
		approach: 'Drag Axes + Amplitude Slider + Theta Slider + Frequency Knob + Start Button. The Start button callback does the plot. Point the ValueChangedFcn of each slider/knob at the SAME callback so changes update live.',
		steps: [
			{ description: 'Layout the components and name them: UIAxes, AmplitudeSlider, ThetaSlider, FrequencyKnob, StartButton.' },
			{ description: "Add the Start button's callback with the plotting code.", code: "function StartButtonPushed(app, event)\n    Theta     = app.ThetaSlider.Value;\n    Freq      = app.FrequencyKnob.Value;\n    Amplitude = app.AmplitudeSlider.Value;\n    t = 0:0.01:2;\n    y = Amplitude*sin(2*pi*Freq*t + Theta);\n    plot(app.UIAxes, t, y);\nend" },
			{ description: "For LIVE updates: select each slider/knob, in the Callbacks panel set ValueChangedFcn = StartButtonPushed.", note: 'Now moving a slider re-runs the plot automatically — no need to click Start every time.' },
			{ description: 'Run the app and drag the sliders — the waveform updates as you move them.' }
		]
	}
];

const allLabs: Record<number, LabExercise[]> = {
	1: week1Labs,
	2: week2Labs,
	3: week3Labs,
	4: week4Labs,
	5: week5Labs,
	6: week6Labs,
	7: week7Labs
};

export function getWeekLabs(weekNum: number): LabExercise[] {
	return allLabs[weekNum] ?? [];
}
