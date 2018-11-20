function setup() {
  createCanvas(500, 100);
  background(255);
  strokeWeight(5);
  smooth();

  stroke(0, 30);
  line(20, 50, 480, 50);

  stroke(20, 50, 70);
  var xstep = 1;
  var lastx = -999.0;
  var lasty = -999.0;
  var angle = 0;
  var y = 50;
  for (var x = 20; x <= 480; x += xstep) {
    var rad = radians(angle);
    y = 20 + customRandom() * 60;
    if (lastx > -999) {
      line(x, y, lastx, lasty);
    }
    lastx = x;
    lasty = y;
    angle++;
  }
}

function draw() {}

function customRandom() {
  var retValue = 1 - pow(random(1), 5);
  return retValue;
}
