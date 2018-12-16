const _numChildren = 3;
const _maxLevels = 8;

let _trunk;

function setup() {
  createCanvas(512, 512);
  colorMode(HSB);
  background(255);
  noFill();
  smooth();
  newTree();
}
const newTree = () => {
  _trunk = new Branch(1, 0, width / 2, 50);
  _trunk.drawMe();
};
function draw() {
  background(0);
  _trunk.updateMe(width / 2, height / 2);
  _trunk.drawMe();
}
class Branch {
  constructor(lev, ind, ex, why) {
    this.childern = [];
    this.level = lev;
    this.index = ind;
    this.strokeW = (1 / this.level) * 10;
    this.alph = 1 / this.level;
    this.len = (1 / this.level) * random(100);
    this.rot = random(360);
    this.lenChange = random(10) - 5;
    this.rotChange = random(10) - 5;
    this.count = 0;
    this.updateMe(ex, why);
    if (this.level < _maxLevels) {
      //this.childern = new Branch[_numChildren];
      for (let x = 0; x < _numChildren; x++) {
        this.childern[x] = new Branch(this.level + 1, x, this.endx, this.endy);
      }
    }
  }
  updateMe(ex, why) {
    this.x = ex;
    this.y = why;
    this.rot += this.rotChange;
    if (this.rot > 360) {
      this.rot = 0;
    } else if (this.rot < 0) {
      this.rot = 360;
    }
    this.len -= this.lenChange;
    if (this.len < 0) {
      this.lenChange *= -1;
    } else if (this.len > 200) {
      this.lenChange *= -1;
    }
    let radian = radians(this.rot);
    this.endx = this.x + this.len * cos(radian);
    this.endy = this.y + this.len * sin(radian);
    for (let i = 0; i < this.childern.length; i++) {
      this.childern[i].updateMe(this.endx, this.endy);
    }
  }
  drawMe() {
    this.count++;
    if (this.level > 1) {
      strokeWeight(this.strokeW);
      stroke(int(noise(this.count / 30) * 360), 255, 255, this.alph);
      line(this.x, this.y, this.endx, this.endy);
      fill(0, this.alph);
      ellipse(this.endx, this.endy, this.len / 12, this.len / 12);
    }

    for (let i = 0; i < this.childern.length; i++) {
      this.childern[i].drawMe();
    }
  }
}
