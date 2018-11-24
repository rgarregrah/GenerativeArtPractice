function setup() {
  var c = createCanvas(500, 100);
  background(255);
  strokeWeight(5);
  smooth();

  stroke(0, 30);
  line(20, 50, 480, 50);

  stroke(20, 50, 70);
  var step = 1;
  var lastx = -999.0;
  var lasty = -999.0;
  var ynoise = random(10);
  var y;
  for (var x = 20; x <= 480; x += step) {
    y = 10 + noise(ynoise) * 80;
    if (lastx > -999) {
      line(x, y, lastx, lasty);
    }
    lastx = x;
    lasty = y;
    ynoise += 0.03;
  }
  saveCanvas(c, "2", "png");
}

function draw() {}
