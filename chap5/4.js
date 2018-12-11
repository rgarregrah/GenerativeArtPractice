let xstart, xnoise, ystart, ynoise;

function setup() {
  createCanvas(300, 300);
  smooth();
  background(0);
  frameRate(24);

  xstart = random(10);
  ystart = random(10);
}

function draw() {
  background(0);
  xstart += 0.01;
  ystart += 0.01;
  xnoise = xstart;
  ynoise = ystart;

  for (let y = 0; y <= height; y += 5) {
    ynoise += 0.1;
    xnoise += xstart;
    for (let x = 0; x <= width; x += 5) {
      xnoise += 0.1;
      drawPoint(x, y, noise(xnoise, ynoise));
    }
  }
}

const drawPoint = (x, y, noiseFactor) => {
  push();
  translate(x, y);
  rotate(noiseFactor * radians(540));
  noStroke();
  let edgeSize = noiseFactor * 35;
  let grey = 150 + noiseFactor * 120;
  let alph = 150 + noiseFactor * 120;
  fill(grey, alph);
  ellipse(0, 0, edgeSize, edgeSize / 2);
  pop();
};
