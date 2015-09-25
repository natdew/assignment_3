
function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(0);
	fill(255, 255, 255);
	ellipse(mouseX + random(0, 10), mouseY + random(0, 10), 50, 50);
}
