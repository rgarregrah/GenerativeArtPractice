function setup() {
  createCanvas(500, 300);
  background(255);
  strokeWeight(5);
  smooth();

  var radius = 10.0;
  var centx = 250;
  var centy = 150;

  stroke(0, 30);
  noFill();
  ellipse(centx, centy, radius * 2, radius * 2);

  stroke(20, 50, 70);
  var x, y;
  var lastx = -999.0;
  var lasty = -999.0;
  var radiusNoise = random(10);
  for (var ang = 0; ang <= 1440; ang += 5) {
    radiusNoise += 0.05;
    radius += 0.5;
    var thisRadius = radius + noise(radiusNoise) * 200 - 100;
    var rad = radians(ang);
    x = centx + thisRadius * cos(rad);
    y = centy + thisRadius * sin(rad);
    if (lastx > -999.0) {
      line(x, y, lastx, lasty);
    }
    lastx = x;
    lasty = y;
  }
}

function draw() {}
