function setup() {
  //背景と設定
  createCanvas(500, 300);
  smooth();
  background(230, 230, 230);
  //2本の交差した線
  stroke(130, 0, 0);
  strokeWeight(4);
  line(width / 2 - 70, height / 2 - 70, width / 2 + 70, height / 2 + 70);
  line(width / 2 + 70, height / 2 - 70, width / 2 - 70, height / 2 + 70);
  //円を描く
  fill(255, 150);
  ellipse(width / 2, height / 2, 50, 50);
}

function draw() {}
