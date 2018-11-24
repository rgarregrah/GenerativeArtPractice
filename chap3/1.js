function setup() {
  var c = createCanvas(500, 100);
  background(255);
  strokeWeight(5);
  smooth();
  stroke(20, 50, 70);
  var xstep = 10.0;
  var ystep = 10.0;
  var lastx = 20.0;
  var lasty = 50.0;
  var y = 50.0;

  for (var x = 20; x <= 480; x += xstep) {
    ystep = random(20) - 10;
    y += ystep;
    line(x, y, lastx, lasty);
    lastx = x;
    lasty = y;
  }
  saveCanvas(c, "1", "png");
}

function draw() {}
