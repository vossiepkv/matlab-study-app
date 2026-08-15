import type { CardData, QuizData } from '../week1';
import type { ModuleMeta } from '../subjects';

export const m2Meta: ModuleMeta = {
	num: 2,
	title: 'Motion in One Dimension',
	description:
		'Kinematics along a straight line: displacement, velocity and acceleration, how to read each of them off a graph, the four constant-acceleration equations and when to use each one, and free fall under gravity.',
	topics: [
		'Dynamics and kinematics',
		'Position and frames of reference',
		'Displacement and why it is not distance',
		'Vector and scalar quantities',
		'Average speed and path length',
		'Average velocity',
		'Instantaneous velocity as a limit',
		'Reading velocity off a position–time graph',
		'Slopes and their units',
		'Average and instantaneous acceleration',
		'Reading acceleration off a velocity–time graph',
		'The relationship between the directions of velocity and acceleration',
		'Motion diagrams',
		'The four equations for constant acceleration',
		'Choosing the right kinematic equation',
		'Area under a velocity–time graph',
		'Free fall and the acceleration due to gravity',
		'Objects dropped, thrown downward and thrown upward',
		'Symmetrical and non-symmetrical free fall',
		'Combination motions'
	]
};

export const m2Cards: CardData[] = [
	{
		id: 'w2-c01',
		type: 'concept',
		front: 'What is the difference between dynamics and kinematics?',
		back: 'Dynamics is the branch of physics involving the motion of an object and the relationship between that motion and other physics concepts. Kinematics is a part of dynamics: it describes motion, but it is not concerned with the cause of the motion.',
		hint: 'One of them deliberately ignores the cause.'
	},
	{
		id: 'w2-c02',
		type: 'list',
		front: 'What three concepts does any motion involve?',
		back: ['Displacement', 'Velocity', 'Acceleration'],
		hint: 'Where it went, how fast, and how that speed changed.'
	},
	{
		id: 'w2-c03',
		type: 'concept',
		front: 'What does position require, and what makes motion one-dimensional?',
		back: 'Position is defined in terms of a frame of reference — a choice of coordinate axes that defines a starting point for measuring the motion. One-dimensional motion is motion along a straight line, generally the x axis for horizontal motion or the y axis for vertical motion. Position can be positive or negative with respect to the origin.',
		hint: 'You cannot state a position without first choosing where to measure from.'
	},
	{
		id: 'w2-c04',
		type: 'concept',
		front: 'Define displacement, with its units and sign convention.',
		back: 'Displacement is the change in position: delta x equals x final minus x initial. An alternative notation is delta x equals x minus x nought, where x nought is the initial position. The units are metres. It is a vector, so it can be positive or negative, and the sign tells you the direction along the axis.',
		hint: 'Final minus initial — and the sign carries information.'
	},
	{
		id: 'w2-c05',
		type: 'list',
		front: 'A car goes from x = 30 m to x = 52 m, and later from x = 38 m to x = −53 m. Find both displacements.',
		back: [
			'First: delta x equals 52 minus 30, which is plus 22 metres. Positive, so the motion was in the positive x direction',
			'Second: delta x equals minus 53 minus 38, which is minus 91 metres. Negative, so the motion was in the negative x direction'
		],
		hint: 'Always final minus initial, and watch the signs.'
	},
	{
		id: 'w2-c06',
		type: 'concept',
		front: 'Why is displacement not the same as distance?',
		back: 'Throw a ball straight up and catch it at the same point you released it. The distance travelled is twice the height, but the displacement is zero. Displacement depends only on the endpoints; path length depends on the route actually taken.',
		hint: 'Think of a journey that returns to where it started.'
	},
	{
		id: 'w2-c07',
		type: 'concept',
		front: 'What distinguishes a vector quantity from a scalar quantity?',
		back: 'A vector needs both magnitude, meaning size, and direction to describe it completely. Vectors are generally shown in boldface with an arrow over the letter, though for one-dimensional motion a plus or minus sign is sufficient. A scalar is completely described by magnitude alone.',
		hint: 'One of them needs a direction, the other does not.'
	},
	{
		id: 'w2-c08',
		type: 'concept',
		front: 'Define average speed. Is it a vector or a scalar?',
		back: 'Average speed is the total distance travelled divided by the total time elapsed, that is path length over elapsed time, or v equals d over t. It is a scalar. Both path length and total time are positive, so speed is always positive. Its dimension is L over T and its SI unit is metres per second. It totally ignores any variation in the actual motion during the trip.',
		hint: 'It uses path length, so it can never be negative.'
	},
	{
		id: 'w2-c09',
		type: 'concept',
		front: 'Define average velocity.',
		back: 'Average velocity is the rate at which displacement occurs: v average equals delta x over delta t, which is (x final minus x initial) over (t final minus t initial). It can be positive or negative. Delta t is always positive, so the sign comes from the displacement, and its direction is the direction of the displacement.',
		hint: 'It uses displacement, not path length.'
	},
	{
		id: 'w2-c10',
		type: 'concept',
		front: 'How do you find the magnitude of a displacement between two points in a plane?',
		back: 'Delta s equals the square root of ((x final minus x initial) squared plus (y final minus y initial) squared). The displacement depends only on the endpoints and not on what happens between them. Path length, by contrast, depends on the actual route taken.',
		hint: 'It is Pythagoras applied to the change in each coordinate.'
	},
	{
		id: 'w2-c11',
		type: 'concept',
		front: 'Two cars leave P and arrive at Q in the same time, one going straight and one on a winding path. Compare their average velocities and average speeds.',
		back: 'They have the same average velocity, because they had the same displacement in the same time interval. The car on the winding path has the greater average speed, because the path length it travelled is larger.',
		hint: 'Velocity uses displacement; speed uses path length.'
	},
	{
		id: 'w2-c12',
		type: 'concept',
		front: 'Define instantaneous velocity and give its graphical meaning.',
		back: 'Instantaneous velocity is the limit of the average velocity as the time interval becomes infinitesimally short, that is as delta t approaches zero. Graphically it is the slope of the line tangent to the position versus time graph at that instant. Its magnitude is what you read on a car speedometer, and that magnitude is called the instantaneous speed.',
		hint: 'Shrink the interval until the chord becomes a tangent.'
	},
	{
		id: 'w2-c13',
		type: 'concept',
		front: 'What does the slope of a position–time graph tell you?',
		back: 'The average velocity equals the slope of the line joining the initial and final points on the graph. An object moving with constant velocity gives a graph that is a straight line, and in that case the average and instantaneous velocities are the same, and the velocity versus time graph is a straight line parallel to the time axis.',
		hint: 'Chord for average, tangent for instantaneous.'
	},
	{
		id: 'w2-c14',
		type: 'concept',
		front: 'What is the general equation for the slope of any line, and does slope carry units?',
		back: 'Slope equals the change in the vertical axis divided by the change in the horizontal axis. Yes, slope carries units, and the meaning of a specific slope depends on the physical data being graphed.',
		hint: 'Rise over run — but here the rise and run both have units.'
	},
	{
		id: 'w2-c15',
		type: 'concept',
		front: 'Define average acceleration, with its units.',
		back: 'Acceleration is the rate of change of velocity: a equals delta v over delta t, which is (v final minus v initial) over (t final minus t initial). Changing velocity means an acceleration is present. The units are metres per second squared in SI, centimetres per second squared in CGS, and feet per second squared in US Customary.',
		hint: 'It is to velocity what velocity is to position.'
	},
	{
		id: 'w2-c16',
		type: 'concept',
		front: 'What makes an acceleration uniform?',
		back: 'The acceleration is uniform when the instantaneous accelerations are always the same. In that case all the instantaneous accelerations are equal to the average acceleration. Instantaneous acceleration is the limit of delta v over delta t as delta t approaches zero.',
		hint: 'Uniform means it never changes, so average and instantaneous agree.'
	},
	{
		id: 'w2-c17',
		type: 'concept',
		front: 'How do you read acceleration off a velocity–time graph?',
		back: 'Average acceleration is the slope of the line connecting the initial and final velocities on a velocity versus time graph. Instantaneous acceleration is the slope of the tangent to the curve of the velocity–time graph.',
		hint: 'Same chord-versus-tangent idea as for velocity, one graph up.'
	},
	{
		id: 'w2-c18',
		type: 'list',
		front: 'Describe the three cases relating the directions of velocity and acceleration.',
		back: [
			'Acceleration equals zero: uniform velocity, shown by arrows that all stay the same length',
			'Acceleration in the same direction as velocity: velocity is increasing — positive velocity with positive acceleration, and the velocity arrows get longer',
			'Acceleration opposite to velocity: velocity is decreasing — positive velocity with negative acceleration, and the velocity arrows get shorter'
		],
		hint: 'Same direction speeds up, opposite direction slows down.'
	},
	{
		id: 'w2-c19',
		type: 'list',
		front: 'Write the four equations for constant acceleration.',
		back: [
			'v equals v nought plus a t',
			'delta x equals one half of (v nought plus v) times t',
			'delta x equals v nought t plus one half a t squared',
			'v squared equals v nought squared plus 2 a delta x'
		],
		hint: 'They only apply when the acceleration is constant.'
	},
	{
		id: 'w2-c20',
		type: 'concept',
		front: 'When do you reach for Δx = ½(v₀ + v)t?',
		back: 'When you do not know and are not asked for the acceleration. It gives displacement as a function of velocity and time — it is really just displacement equals average velocity times time.',
		hint: 'Look at which of the five quantities is missing.'
	},
	{
		id: 'w2-c21',
		type: 'concept',
		front: 'When do you reach for v = v₀ + at?',
		back: 'When you do not know and are not asked to find the displacement. It shows velocity as a function of acceleration and time. On a velocity–time graph it is the straight line with intercept v nought and slope a.',
		hint: 'This is the only one of the four with no displacement in it.'
	},
	{
		id: 'w2-c22',
		type: 'concept',
		front: 'When do you reach for Δx = v₀t + ½at²?',
		back: 'When you do not know and are not asked to find the final velocity. It gives displacement as a function of time, initial velocity and acceleration.',
		hint: 'No v final appears anywhere in it.'
	},
	{
		id: 'w2-c23',
		type: 'concept',
		front: 'When do you reach for v² = v₀² + 2aΔx?',
		back: 'When you do not know and are not asked to find the time. It gives the final velocity as a function of initial velocity, displacement and acceleration.',
		hint: 'This is the only one of the four with no t in it.'
	},
	{
		id: 'w2-c24',
		type: 'concept',
		front: 'What does the area under a velocity–time graph represent?',
		back: 'The area under the graph of velocity versus time is equal to the displacement of the object. This is true for any object, not just uniformly accelerating ones. Do not confuse it with the slope of that same graph, which gives the acceleration.',
		hint: 'Area gives one quantity, slope gives a different one.'
	},
	{
		id: 'w2-c25',
		type: 'concept',
		front: 'What counts as a freely falling object?',
		back: 'A freely falling object is any object moving freely under the influence of gravity alone. Free fall does not depend on the object original motion — dropped, thrown down or thrown up, it is all free fall once released. All objects falling near the earth surface fall with a constant acceleration.',
		hint: 'The test is whether gravity is the only influence.'
	},
	{
		id: 'w2-c26',
		type: 'concept',
		front: 'Give the value and direction of g, and the sign of the acceleration under the usual convention.',
		back: 'The acceleration due to gravity is symbolised by g and equals 9.80 metres per second squared. When estimating, use g approximately equal to 10 metres per second squared. It is always directed downward, toward the centre of the earth. Taking up as positive, a equals g equals minus 9.80 metres per second squared. Ignoring air resistance and assuming g does not vary with altitude over short vertical distances, free fall is motion with constant acceleration.',
		hint: 'The value is always positive; the sign comes from your axis choice.'
	},
	{
		id: 'w2-c27',
		type: 'list',
		front: 'Set up the initial conditions for an object dropped, and for one thrown downward.',
		back: [
			'Dropped: initial velocity is zero, and a equals minus 9.80 metres per second squared',
			'Thrown downward: initial velocity is not zero, and with upward positive the initial velocity is negative. a equals minus 9.80 metres per second squared',
			'In both cases use y rather than x, since the motion is vertical'
		],
		hint: 'The only difference between them is the initial velocity.'
	},
	{
		id: 'w2-c28',
		type: 'concept',
		front: 'For an object thrown upward, what are the velocity and acceleration at maximum height?',
		back: 'The instantaneous velocity at the maximum height is zero. The acceleration is still minus 9.80 metres per second squared — it is that value everywhere in the motion, including at the very top. The initial velocity is upward and therefore positive.',
		hint: 'One of the two is zero at the top; the other never changes.'
	},
	{
		id: 'w2-c29',
		type: 'list',
		front: 'What two relations hold when free-fall motion is symmetrical, and what if it is not?',
		back: [
			'Symmetrical: the time up equals the time down',
			'Symmetrical: v equals minus v nought, so the final velocity back at ground level is negative',
			'If the motion is not symmetrical, all the equations are still valid — you just have to define the initial and final conditions carefully'
		],
		hint: 'Symmetry is a shortcut, not a requirement.'
	},
	{
		id: 'w2-c30',
		type: 'list',
		front: 'What should the diagram for a kinematics problem show?',
		back: [
			'A chosen coordinate system',
			'Labelled initial and final points',
			'An indicated positive direction for velocities and accelerations',
			'Then label all quantities and make sure the units are consistent, converting if necessary',
			'Then choose the appropriate kinematic equation'
		],
		hint: 'The sign convention has to be on the diagram, not just in your head.'
	},
	{
		id: 'w2-c31',
		type: 'list',
		front:
			'A motorist drives north 35.0 min at 85.0 km/h, stops 15.0 min, then drives 130 km in 2.00 h. Find the total displacement and average speed.',
		back: [
			'Convert the times to hours: 35 minutes is 0.583 hours, 15 minutes is 0.250 hours, and the last leg is 2.00 hours',
			'First leg: 85.0 times 0.583, which is 49.6 kilometres. Stopped leg contributes zero. Third leg is 130 kilometres',
			'All legs are in the same positive direction, so total displacement is 49.6 plus 0 plus 130, which is 179.5, or about 180 kilometres',
			'Total time is 0.583 plus 0.250 plus 2.00, which is 2.83 hours',
			'The motion never reverses, so path length equals displacement, and average speed is 179.5 divided by 2.83, which is 63.4 kilometres per hour'
		],
		hint: 'The 15 minute stop adds nothing to the displacement but still counts in the time.'
	},
	{
		id: 'w2-c32',
		type: 'list',
		front:
			'A particle moves as x = (15 + 40t − 3.0t²) m. Find its velocity at t = 4.0 s and its average velocity from 0 to 4.0 s.',
		back: [
			'Match it term by term against x equals x nought plus v nought t plus one half a t squared',
			'Reading off: x nought is 15 metres, v nought is 40 metres per second, and one half a equals minus 3.0, so a equals minus 6.0 metres per second squared',
			'Velocity at 4 seconds: v equals 40 minus 6.0 times 4.0, which is 16 metres per second',
			'Average velocity: one half of (40 plus 16), which is 28 metres per second'
		],
		hint: 'The coefficient of t squared is one half a, not a.'
	},
	{
		id: 'w2-c33',
		type: 'list',
		front:
			'A car at 24.0 m/s passes a hidden policeman. One second later the policeman chases at 3.00 m/s². When does he catch up, and how fast is he going?',
		back: [
			'Start the clock when the policeman starts, with the origin at the corner. In that one second head start the car has already gained 24.0 metres',
			'Car position: 24.0 plus 24.0 t. Policeman position: one half times 3.00 times t squared, which is 1.5 t squared',
			'He overtakes when the positions are equal: 1.5 t squared equals 24.0 plus 24.0 t, which rearranges to t squared minus 16 t minus 16 equals zero',
			'Solving the quadratic and taking the positive root gives t equals 16.9 seconds',
			'His speed then: v equals 0 plus 3.00 times 16.9, which is 50.7 metres per second'
		],
		hint: 'The one second head start is the whole problem — handle it as a 24 metre offset.'
	},
	{
		id: 'w2-c34',
		type: 'list',
		front:
			'An object is thrown down at 10 m/s from 60 m up. At the same instant a second is fired up from the ground at 40 m/s. When and where do they pass?',
		back: [
			'Take up as positive and the ground as y equals zero, with one clock for both objects',
			'Object one, thrown down from 60 metres: y equals 60 minus 10 t minus 4.9 t squared',
			'Object two, fired up from the ground: y equals 40 t minus 4.9 t squared',
			'Set them equal. Both carry the same minus 4.9 t squared, so gravity cancels and 60 minus 10 t equals 40 t',
			'Solving: 60 equals 50 t, so t equals 1.2 seconds. The height is 40 times 1.2 minus 4.9 times 1.44, which is about 41 metres'
		],
		hint: 'Because both are in free fall, the t squared terms cancel and it becomes linear.'
	},
	{
		id: 'w2-c35',
		type: 'concept',
		front: 'What is a combination motion, and how do you handle it?',
		back: 'A combination motion has more than one phase with a different constant acceleration in each — for example a rocket that accelerates upward at 29.4 metres per second squared while its fuel burns, then continues as free fall at minus 9.80 metres per second squared until it reaches maximum height and falls back. Solve each phase separately, using the end conditions of one phase as the start conditions of the next.',
		hint: 'One phase at a time, handing the velocity across the boundary.'
	}
];

export const m2Quiz: QuizData[] = [
	{
		id: 'w2-q01',
		type: 'multiple-choice',
		question: 'A car moves from xᵢ = 38 m to x_f = −53 m. What is its displacement?',
		options: ['+91 m', '−91 m', '−15 m', '+15 m'],
		correctIndex: 1,
		explanation:
			'Δx = x_f − xᵢ = −53 − 38 = −91 m. The negative sign says the motion was in the −x direction.'
	},
	{
		id: 'w2-q02',
		type: 'multiple-choice',
		question:
			'You throw a ball 5 m straight up and catch it at the release point. What are the distance travelled and the displacement?',
		options: ['5 m and 5 m', '10 m and 10 m', '10 m and 0', '0 and 10 m'],
		correctIndex: 2,
		explanation:
			'The path length is up and back down, so 10 m. The displacement depends only on the endpoints, which coincide — so it is zero.'
	},
	{
		id: 'w2-q03',
		type: 'multiple-choice',
		question: 'Which of these is a scalar quantity?',
		options: ['Displacement', 'Average velocity', 'Acceleration', 'Average speed'],
		correctIndex: 3,
		explanation:
			'Average speed is path length over elapsed time — magnitude only, and always positive. The other three all need a direction to be fully described.'
	},
	{
		id: 'w2-q04',
		type: 'multiple-choice',
		question: 'On a position–time graph, the instantaneous velocity at a point is…',
		options: [
			'The slope of the chord between the endpoints',
			'The slope of the tangent at that point',
			'The area under the curve',
			'The height of the curve at that point'
		],
		correctIndex: 1,
		explanation:
			'The slope of the chord gives the average velocity. Taking the limit as Δt → 0 turns the chord into the tangent, whose slope is the instantaneous velocity.'
	},
	{
		id: 'w2-q05',
		type: 'multiple-choice',
		question:
			'A motorist drives north 35.0 min at 85.0 km/h, stops 15.0 min, then covers 130 km in 2.00 h. What is the total displacement?',
		options: ['≈ 130 km', '≈ 180 km', '≈ 215 km', '≈ 50 km'],
		correctIndex: 1,
		explanation:
			'First leg: 85.0 × 0.583 h = 49.6 km. The stopped leg contributes 0. Third leg: 130 km. Total = 179.5 ≈ 180 km, all in the same direction.'
	},
	{
		id: 'w2-q06',
		type: 'multiple-choice',
		question: 'For that same trip, what is the average speed?',
		options: ['85.0 km/h', '71.8 km/h', '60.0 km/h', '63.4 km/h'],
		correctIndex: 3,
		explanation:
			'Total time = 0.583 + 0.250 + 2.00 = 2.83 h. Here the path length equals the displacement, so v average = 179.5 / 2.83 = 63.4 km/h. The 15-minute stop still counts as elapsed time.'
	},
	{
		id: 'w2-q07',
		type: 'multiple-choice',
		question:
			'You know v₀, a and Δx, and you need the final velocity. Time is neither given nor asked for. Which equation?',
		options: [
			'v = v₀ + at',
			'Δx = v₀t + ½at²',
			'v² = v₀² + 2aΔx',
			'Δx = ½(v₀ + v)t'
		],
		correctIndex: 2,
		explanation:
			'It is the only one of the four that contains no t. Choose the kinematic equation by working out which quantity is missing from the problem.'
	},
	{
		id: 'w2-q08',
		type: 'multiple-choice',
		question: 'The area under a velocity–time graph gives…',
		options: ['The acceleration', 'The displacement', 'The average speed', 'The path length'],
		correctIndex: 1,
		explanation:
			'Area under v–t is displacement, for any object. The slope of that same graph gives the acceleration — do not swap the two.'
	},
	{
		id: 'w2-q09',
		type: 'multiple-choice',
		question: 'A particle moves as x = (15 + 40t − 3.0t²) m. What is its acceleration?',
		options: ['−3.0 m/s²', '+40 m/s²', '−6.0 m/s²', '−12 m/s²'],
		correctIndex: 2,
		explanation:
			'Compare with x = x₀ + v₀t + ½at². The coefficient of t² is ½a = −3.0, so a = −6.0 m/s². Reading −3.0 straight off is the classic slip.'
	},
	{
		id: 'w2-q10',
		type: 'multiple-choice',
		question: 'For that same particle, what is the velocity at t = 4.0 s?',
		options: ['40 m/s', '28 m/s', '−8 m/s', '16 m/s'],
		correctIndex: 3,
		explanation: 'v₀ = 40 m/s and a = −6.0 m/s², so v = 40 − 6.0 × 4.0 = 16 m/s.'
	},
	{
		id: 'w2-q11',
		type: 'multiple-choice',
		question: 'And its average velocity over t = 0 to t = 4.0 s?',
		options: ['28 m/s', '16 m/s', '40 m/s', '24 m/s'],
		correctIndex: 0,
		explanation:
			'With constant acceleration, v average = ½(v₀ + v) = ½(40 + 16) = 28 m/s.'
	},
	{
		id: 'w2-q12',
		type: 'multiple-choice',
		question:
			'At the very top of the flight of a ball thrown straight upward, what are its velocity and acceleration?',
		options: [
			'v = 0, a = 0',
			'v = 0, a = −9.80 m/s²',
			'v = −9.80 m/s, a = 0',
			'v = 0, a = +9.80 m/s²'
		],
		correctIndex: 1,
		explanation:
			'The instantaneous velocity is zero for that instant, but gravity never switches off — a = −9.80 m/s² everywhere in the motion, including at the very top.'
	},
	{
		id: 'w2-q13',
		type: 'multiple-choice',
		question: 'An object is dropped from rest, with up taken as positive. What are v₀ and a?',
		options: [
			'v₀ = 0, a = +9.80 m/s²',
			'v₀ = −9.80 m/s, a = −9.80 m/s²',
			'v₀ = 0, a = 0',
			'v₀ = 0, a = −9.80 m/s²'
		],
		correctIndex: 3,
		explanation:
			'Dropped means the initial velocity is zero. g always points down, so under the up-positive convention a = −9.80 m/s². Use y rather than x for vertical motion.'
	},
	{
		id: 'w2-q14',
		type: 'multiple-choice',
		question:
			'A car at a constant 24.0 m/s passes a hidden policeman. One second later the policeman gives chase at 3.00 m/s². How long after starting does he catch the car?',
		options: ['8.00 s', '12.5 s', '16.9 s', '24.0 s'],
		correctIndex: 2,
		explanation:
			'Measuring t from when the policeman starts, the car is at 24.0 + 24.0t and the policeman at ½(3.00)t². Setting them equal gives t² − 16t − 16 = 0, so t = 16.9 s.'
	},
	{
		id: 'w2-q15',
		type: 'multiple-choice',
		question: 'How fast is that policeman travelling when he draws level?',
		options: ['24.0 m/s', '33.8 m/s', '48.0 m/s', '50.7 m/s'],
		correctIndex: 3,
		explanation:
			'v = v₀ + at = 0 + 3.00 × 16.9 = 50.7 m/s — more than twice the speeding car velocity, since he started from rest.'
	},
	{
		id: 'w2-q16',
		type: 'multiple-choice',
		question:
			'One object is thrown down at 10 m/s from 60 m up; at the same instant another is fired up from the ground at 40 m/s. When do they pass?',
		options: ['0.8 s', '1.2 s', '1.5 s', '2.0 s'],
		correctIndex: 1,
		explanation:
			'y₁ = 60 − 10t − 4.9t² and y₂ = 40t − 4.9t². The ½gt² terms cancel, leaving 60 = 50t, so t = 1.2 s — at a height of about 41 m.'
	},
	{
		id: 'w2-q17',
		type: 'multiple-choice',
		question: 'A car has positive velocity and negative acceleration. What is happening?',
		options: ['It is speeding up', 'It is slowing down', 'It is moving backwards', 'It is stationary'],
		correctIndex: 1,
		explanation:
			'Acceleration opposite in direction to the velocity means the velocity is decreasing — the velocity arrows get shorter in the motion diagram.'
	},
	{
		id: 'w2-q18',
		type: 'multiple-choice',
		question: 'An object has a = 0 but v ≠ 0. What can you say about its motion?',
		options: [
			'It is speeding up',
			'It is at rest',
			'It moves at constant velocity',
			'It is slowing down'
		],
		correctIndex: 2,
		explanation:
			'Zero acceleration means the velocity is not changing — uniform velocity, shown by motion-diagram arrows that all stay the same length.'
	},
	{
		id: 'w2-q19',
		type: 'multiple-choice',
		question:
			'Two cars cover the same displacement in the same time, but one takes a longer winding route. Which statement is true?',
		options: [
			'Same average speed; the winding route has greater average velocity',
			'Both average speed and average velocity are the same',
			'The winding route has a smaller average speed',
			'Same average velocity; the winding route has greater average speed'
		],
		correctIndex: 3,
		explanation:
			'Average velocity uses displacement, which is identical for both. Average speed uses path length, which is larger for the winding route.'
	},
	{
		id: 'w2-q20',
		type: 'fill-blank',
		question:
			'What is the magnitude of the acceleration due to gravity, in m/s², as used in this course? (Give the number only.)',
		answer: '9.80',
		acceptableAnswers: ['9.8', '9.80 m/s^2', '9.8 m/s^2'],
		explanation:
			'g = 9.80 m/s², always directed downward toward the centre of the earth. Use g ≈ 10 m/s² only when estimating.'
	},
	{
		id: 'w2-q21',
		type: 'fill-blank',
		question:
			'Which branch of physics describes motion without being concerned with its cause?',
		answer: 'kinematics',
		acceptableAnswers: ['kinematic'],
		explanation:
			'Kinematics is the part of dynamics that describes motion. What causes the motion is a separate question.'
	},
	{
		id: 'w2-q22',
		type: 'fill-blank',
		question:
			'A car accelerates uniformly from rest to 20 m/s in 8.0 s. What is its acceleration in m/s²? (Give the number only.)',
		answer: '2.5',
		acceptableAnswers: ['2.50', '2.5 m/s^2'],
		explanation:
			'a = Δv/Δt = (20 − 0) / 8.0 = 2.5 m/s². Here you know the two velocities and the time, so the definition of acceleration is enough.'
	}
];
