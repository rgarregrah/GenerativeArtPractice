var xstart, xnoise, ynoise;

function setup() {
  createCanvas(300, 300);
  smooth();
  background(0);
  xstart = random(10);
  xnoise = xstart;
  ynoise = random(10);

  for (var y = 0; y <= height; y += 5) {
    ynoise += 0.1;
    xnoise = xstart;
    for (var x = 0; x <= width; x += 5) {
      xnoise += 0.1;
      drawPoint(x, y, noise(xnoise, ynoise));
    }
  }
}
function drawPoint(x, y, noiseFactor) {
  push();
  translate(x, y);
  rotate(noiseFactor * radians(540));
  var edgeSize = noiseFactor * 35;
  var grey = 150 + noiseFactor * 120;
  var alph = 150 + noiseFactor * 120;
  noStroke();
  fill(grey, alph);
  ellipse(0, 0, edgeSize, edgeSize / 2);
  pop();
}
