function setup() {
  createCanvas(500, 300);
  background(255);
  strokeWeight(5);
  smooth();

  var radius = 100.0;
  var centx = 250;
  var centy = 150;

  stroke(0, 30);
  noFill();
  ellipse(centx, centy, radius * 2, radius * 2);

  stroke(20, 50, 70);
  strokeWeight(1);

  var x, y;
  var noiseval = random(10);
  var radVariance, thisRadius, rad;
  beginShape();
  fill(20, 50, 70, 50);
  for (var ang = 0; ang <= 360; ang += 1) {
    noiseval += 0.1;
    radVariance = 30 * customNoise(noiseval);

    thisRadius = radius + radVariance;
    rad = radians(ang);
    x = centx + thisRadius * cos(rad);
    y = centy + thisRadius * sin(rad);
    curveVertex(x, y);
  }
  endShape();
}

function customNoise(value) {
  var retValue = pow(sin(value), 3);
  return retValue;
}

function draw() {}
