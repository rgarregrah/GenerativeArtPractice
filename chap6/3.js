const _num = 10;
const _circleArr = new Array();
function setup() {
    createCanvas(960, 480);
    background(0);
    smooth();
    drawCircles();
    frameRate(30);
}
function draw() {
    background(0, 10);
    for (let i = 0; i < _circleArr.length; i++) {
        const thisCirc = _circleArr[i];
        thisCirc.updateMe();
    }
}

function mouseReleased() {
    drawCircles();
    print(_circleArr.length);
}

const drawCircles = () => {
    for (let i = 0; i < _num; i++) {
        const thisCirc = new Circle();
        //thisCirc.drawMe();
        _circleArr.unshift(thisCirc);
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
        for (let i = 0; i < _circleArr.length; i++) {
            const otherCirc = _circleArr[i];
            if (otherCirc != this) {
                const dis = dist(this.x, this.y, otherCirc.x, otherCirc.y);
                let overlap = dis - this.radius - otherCirc.radius;
                if (overlap < 0) {
                    let midx, midy;
                    midx = (this.x + otherCirc.x) / 2;
                    midy = (this.y + otherCirc.y) / 2;
                    stroke(this.linecol);
                    strokeWeight(noise(i) * noise(i) * noise(i));
                    fill(0, 0);
                    overlap *= -1;
                    ellipse(midx, midy, overlap, overlap);
                }
            }
        }

        //this.drawMe();
    }
}
