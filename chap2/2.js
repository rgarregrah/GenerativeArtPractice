var diam = 10;
var centX, centY;

function setup() {
  createCanvas(500, 300);
  frameRate(24);
  smooth();
  background(180);
  centX = width / 2;
  centY = height / 2;
  stroke(0);
  strokeWeight(1);
  fill(255, 25);
}

function draw() {
  if (diam <= 400) {
    //background(180);
    ellipse(centX, centY, diam, diam);
    diam += 10;
  }
}
