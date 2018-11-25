function setup() {
  createCanvas(500, 300);
  background(255);
  strokeWeight(0.5);
  smooth();

  var centx = 250;
  var centy = 150;

  var x, y;
  for (var i = 0; i < 100; i++) {
    var lastx = -999.0;
    var lasty = -999.0;
    var radiusNoise = random(10);
    var radius = 10.0;

    stroke(random(20), random(50), random(70), 80);

    var startangle = int(random(360));
    var endangle = int(random(1440));
    var anglestep = 5 + int(random(3));

    for (var ang = startangle; ang <= endangle; ang += anglestep) {
      var radiusNoise = random(10);
      radiusNoise += 0.05;
      radius += 0.5;
      var thisRadius = radius + noise(radiusNoise) * 200 - 100;
      var rad = radians(ang);
      x = centx + thisRadius * cos(rad);
      y = centy + thisRadius * sin(rad);
      if (lastx > -999) {
        line(x, y, lastx, lasty);
      }
      lastx = x;
      lasty = y;
    }
  }
}
