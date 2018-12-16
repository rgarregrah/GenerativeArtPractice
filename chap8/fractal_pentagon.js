let pentagon;
const _maxlevels = 4;
let _strutFactor = 0.2;
let _strutNoise;
let _numSides = 6;

function setup() {
  createCanvas(800, 800);
  smooth();
  frameRate(24);
  _strutNoise = random(10);
}
function draw() {
  background(0, 180);
  _strutNoise += 10;
  _strutFactor = noise(_strutNoise);
  pentagon = new FractalRoot(frameCount * 2);
  pentagon.drawShape();
}

class PointObj {
  constructor(ex, why) {
    this.x = ex;
    this.y = why;
  }
}

class FractalRoot {
  constructor(startAngle) {
    this.pointArr = [];
    this.centX = width / 2;
    this.centY = height / 2;
    this.angleStep = 360.0 / _numSides;
    this.count = 0;
    for (let i = 0; i < 360; i += this.angleStep) {
      let x = this.centX + 400 * cos(radians(startAngle + i));
      let y = this.centY + 400 * sin(radians(startAngle + i));
      this.pointArr[this.count] = new PointObj(x, y);
      this.count++;
    }
    this.rootBranch = new Branch(0, 0, this.pointArr);
  }
  drawShape() {
    this.rootBranch.drawMe();
  }
}
class Branch {
  constructor(lev, n, points) {
    this.myBranchs = [];
    this.level = lev;
    this.num = n;
    this.outerPoints = points;
    this.midPoints = this.calcMidPoints();
    this.projPoints = this.calcStrutPoints();
    if (this.level + 1 < _maxlevels) {
      this.childBranch = new Branch(this.level + 1, 0, this.projPoints);
      this.myBranchs = append(this.myBranchs, this.childBranch);
      for (let k = 0; k < this.outerPoints.length; k++) {
        let nextk = k - 1;
        if (nextk < 0) {
          nextk += this.outerPoints.length;
        }
        this.newPoints = [
          this.projPoints[k],
          this.midPoints[k],
          this.outerPoints[k],
          this.midPoints[nextk],
          this.projPoints[nextk]
        ];
        this.childBranch = new Branch(this.level + 1, k + 1, this.newPoints);
        this.myBranchs = append(this.myBranchs, this.childBranch);
      }
    }
  }
  calcMidPoints() {
    let mpArray = [];
    for (let i = 0; i < this.outerPoints.length; i++) {
      let nexti = i + 1;
      if (nexti == this.outerPoints.length) {
        nexti = 0;
      }
      let thisMP = this.calcMidPoint(
        this.outerPoints[i],
        this.outerPoints[nexti]
      );
      mpArray[i] = thisMP;
    }
    return mpArray;
  }
  calcMidPoint(end1, end2) {
    let mx, my;
    if (end1.x > end2.x) {
      mx = end2.x + (end1.x - end2.x) / 2;
    } else {
      mx = end1.x + (end2.x - end1.x) / 2;
    }
    if (end1.y > end2.y) {
      my = end2.y + (end1.y - end2.y) / 2;
    } else {
      my = end1.y + (end2.y - end1.y) / 2;
    }
    return new PointObj(mx, my);
  }
  calcStrutPoints() {
    let strutArray = [];
    for (let i = 0; i < this.midPoints.length; i++) {
      let nexti = i + 3;
      if (nexti >= this.midPoints.length) {
        nexti -= this.midPoints.length;
      }
      let thisSP = this.calcProjPoint(
        this.midPoints[i],
        this.outerPoints[nexti]
      );
      strutArray[i] = thisSP;
    }
    return strutArray;
  }
  calcProjPoint(mp, op) {
    let px, py;
    let adj, opp;
    if (op.x > mp.x) {
      opp = op.x - mp.x;
    } else {
      opp = mp.x - op.x;
    }
    if (op.y > mp.y) {
      adj = op.y - mp.y;
    } else {
      adj = mp.y - op.y;
    }
    if (op.x > mp.x) {
      px = mp.x + opp * _strutFactor;
    } else {
      px = mp.x - opp * _strutFactor;
    }
    if (op.y > mp.y) {
      py = mp.y + adj * _strutFactor;
    } else {
      py = mp.y - adj * _strutFactor;
    }
    return new PointObj(px, py);
  }
  drawMe() {
    strokeWeight(5 - this.level);
    stroke(255, 100);
    for (let i = 0; i < this.outerPoints.length; i++) {
      let nexti = i + 1;
      if (nexti == this.outerPoints.length) {
        nexti = 0;
      }
      line(
        this.outerPoints[i].x,
        this.outerPoints[i].y,
        this.outerPoints[nexti].x,
        this.outerPoints[nexti].y
      );
    }
    strokeWeight(0.5);
    fill(255, 150);
    for (let j = 0; j < this.midPoints.length; j++) {
      line(
        this.midPoints[j].x,
        this.midPoints[j].y,
        this.projPoints[j].x,
        this.projPoints[j].y
      );
    }
    for (let k = 0; k < this.myBranchs.length; k++) {
      this.myBranchs[k].drawMe();
    }
  }
}
