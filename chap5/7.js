let xstart, xnoise, ystart, ynoise, zstart, znoise;

const sideLength = 200;
const spacing = 5;

function setup() {
  createCanvas(500, 300, WEBGL);
  background(0);
  noStroke();

  xstart = random(10);
  ystart = random(10);
  zstart = random(10);
}
function draw() {
  background(0);

  xstart += 0.01;
  ystart += 0.01;
  zstart += 0.01;

  xnoise = xstart;
  ynoise = ystart;
  znoise = zstart;

  translate(150, 20, -150);
  rotateZ(frameCount * 0.1);
  rotateY(frameCount * 0.1);

  for (let z = 0; z <= sideLength; z += spacing) {
    znoise += 0.1;
    ynoise = ystart;
    for (let y = 0; y <= sideLength; y += spacing) {
      ynoise += 0.1;
      xnoise = xstart;
      for (let x = 0; x <= sideLength; x += spacing) {
        xnoise += 0.1;
        drawPoint(x, y, noise(xnoise, ynoise));
      }
    }
  }
}
const drawPoint = (x, y, z, noiseFactor) => {
  push();
  translate(x, y, z);
  const grey = 150 + noiseFactor * 120;
  const alph = 150 + noiseFactor * 120;
  fill(grey, 10);
  box(spacing, spacing, spacing);
  pop();
};
