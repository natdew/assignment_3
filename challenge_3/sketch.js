function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	noLoop();
}

function draw() {
	background(129, 0, 0);

}

noFill();
stroke(1)
ellipse(mouseX, mouseY, 55, 55);


	if (mouseIsPressed) {
	background(53, 52, 100);

} else {
	background(129, 0, 0);
