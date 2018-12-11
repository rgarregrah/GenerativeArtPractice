const _num = 10;
const _circleArr = new Array();
function setup() {
  createCanvas(500, 300);
  background(255);
  smooth();
  strokeWeight(1);
  fill(150, 50);
  drawCircles();
}
function draw() {
  background(255);
  for (let i = 0; i < _circleArr.length; i++) {
    const thisCirc = _circleArr[i];
    thisCirc.updateMe();
  }
}

function mouseReleased() {
  drawCircles();
}

const drawCircles = () => {
  for (let i = 0; i < _num; i++) {
    const thisCirc = new Circle();
    thisCirc.drawMe();
    _circleArr.push(thisCirc);
  }
};

class Circle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.radius = random(100) + 10;
    this.linecol = new Array(random(255), random(255), random(255));
    this.fillcol = new Array(random(255), random(255), random(255));
    this.alph = random(255);
    this.xmove = random(10) - 5;
    this.ymove = random(10) - 5;
  }
  drawMe() {
    noStroke();
    fill(this.fillcol[0], this.fillcol[1], this.fillcol[2], this.alph);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    stroke(this.linecol[0], this.linecol[1], this.linecol[2], 150);
    noFill();
    ellipse(this.x, this.y, 10, 10);
  }
  updateMe() {
    this.x += this.xmove;
    this.y += this.ymove;
    if (this.x > width + this.radius) {
      this.x = 0 - this.radius;
    }
    if (this.x < 0 + this.radius) {
      this.x = width + this.radius;
    }
    if (this.y > height + this.radius) {
      this.y = 0 - this.radius;
    }
    if (this.y < 0 + this.radius) {
      this.y = height + this.radius;
    }
    let touching = false;
    for (let i = 0; i < _circleArr.length; i++) {
      const otherCirc = _circleArr[i];
      if (otherCirc != this) {
        const dis = dist(this.x, this.y, otherCirc.x, otherCirc.y);
        if (dis - this.radius - otherCirc.radius < 0) {
          touching = true;
          break;
        }
      }
    }
    if (touching) {
      if (this.alph > 0) {
        this.alph--;
      }
    } else {
      if (this.alph < 255) {
        this.alph += 2;
      }
    }

    this.drawMe();
  }
}
