var ballX = 100;
var ballY = 100;

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(0);
	fill(255, 255, 255);

if (mouseX > ballX) {
	ballX = ballX + 10;
} else {
	ballX = ballX - 10;

	if (mouseY > ballY) {
		ballY = ballY + 10;
	} else {
		ballY = ballY - 10;
	}

	ellipse(ballX, ballY, 50, 50);
}
