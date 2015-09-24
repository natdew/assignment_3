// a simple p5 sketch demonstrating animation


var ballX = 200;
var ballY = 100;
var ballSpeedX = 3;
var ballSpeedY = 3;
var ballA = 200;
var ballB = 100;
var ballSpeedA = 2;
var ballSpeedB = 2;

function setup() {
	createCanvas(640, 360);
}

function draw() {

	//////////////////////////////
	// update

	// change position
	ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;


	// don't let the ball go to far

	// right
	if (ballX > width) {
		ballSpeedX = -ballSpeedX;
	}

	// bottom
	if (ballY > height) {
		ballSpeedY = -ballSpeedY;
	}

	// left
	if (ballX < 0) {
		ballSpeedX = -ballSpeedX;
	}

	// top
	if (ballY < 0) {
		ballSpeedY = -ballSpeedY;
	}


	//////////////////////////////
	// draw

	background(0);
	ellipse(ballX, ballY, 50, 50);

//////////////////////////////////////////
ballA = ballB + ballSpeedA;
ballB = ballB + ballSpeedB;


// right
if (ballA > width) {
	ballSpeedA = -ballSpeedA;
}

// bottom
if (ballB > height) {
	ballSpeedB = -ballSpeedB;
}

// left
if (ballA < 0) {
	ballSpeedA = -ballSpeedA;
}

// top
if (ballB < 0) {
	ballSpeedB = -ballSpeedB;
}


//////////////////////////////
// draw

ellipse(ballA, ballB, 50, 50);


}
