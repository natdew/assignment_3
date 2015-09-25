function setup() {
	createCanvas(640, 360);
	noStroke();
}

	function draw() {
if (mouseIsPressed) {
		background(53, 52, 100);
		fill(255, 255, 255);
} else {
	background (129, 0, 0);
	fill(0, 20, 0)
}
	stroke(255);
	line(mouseX, 0, mouseX, 500);
	line(0, mouseY, 640, mouseY)
	noFill();
	ellipse(mouseX, mouseY, 40, 40);



}
