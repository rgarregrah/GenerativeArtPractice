let xstart, xnoise, ystart, ynoise, xstartNoise, ystartNoise;

function setup() {
  createCanvas(300, 300);
  smooth();
  background(255);
  frameRate(24);

  xstartNoise = random(20);
  ystartNoise = random(20);
  xstart = random(10);
  ystart = random(10);
}

function draw() {
  background(255);
  xstartNoise += 0.01;
  ystartNoise += 0.01;
  xstart += noise(xstartNoise) * 0.5 - 0.25;
  ystart += noise(ystartNoise) * 0.5 - 0.25;
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
  rotate(noiseFactor * radians(360));
  stroke(0, 150);
  line(0, 0, 20, 0);
  pop();
};
