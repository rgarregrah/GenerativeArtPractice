function setup() {
  createCanvas(500, 300);
  background(180);
  strokeWeight(4);
  strokeCap(SQUARE);
  for (var h = 10; h <= height - 15; h += 10) {
    stroke(0, 255 - h);
    line(10, h, width - 20, h);
    stroke(255, h);
    line(10, h + 4, width - 20, h + 4);
    if (h > 255) {
      break;
    }
  }
}

function draw() {}
