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
  var x, y;
  var lastx = -999.0;
  var lasty = -999.0;
  for (var ang = 0; ang <= 360; ang += 5) {
    var rad = radians(ang);
    x = centx + radius * cos(rad);
    y = centy + radius * sin(rad);
    point(x, y);
  }
}

function draw() {}
