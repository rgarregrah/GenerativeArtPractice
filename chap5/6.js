let xstart, xnoise, ystart, ynoise;

function setup() {
  createCanvas(500, 300, WEBGL);
  background(0);
  noStroke();

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
    xnoise = xstart;
    for (let x = 0; x <= width; x += 5) {
      xnoise += 0.1;
      drawPoint(x, y, noise(xnoise, ynoise));
    }
  }
}
const drawPoint = (x, y, noiseFactor) => {
  push();
  translate(250-x, 100 - y, -y);
  const sphereSize = noiseFactor * 35;
  const grey = 150 + noiseFactor * 120;
  const alph = 150 + noiseFactor * 120;
  fill(grey, alph);
  sphere(sphereSize);
  pop();
};
