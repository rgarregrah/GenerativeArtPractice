function setup() {
  //背景と設定
  createCanvas(500, 300);
  smooth();
  background(230, 230, 230);

  //変数定義
  var centX = width / 2;
  var centY = height / 2;

  //2本の交差した線
  stroke(130, 0, 0);
  strokeWeight(4);
  line(centX - 70, centY - 70, centX + 70, centY + 70);
  line(centX + 70, centY - 70, centX - 70, centY + 70);
  //円を描く
  fill(255, 150);
  ellipse(centX, centY, 50, 50);
}

function draw() {}
