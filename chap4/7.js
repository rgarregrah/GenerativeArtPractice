var _angnoise, _radiusnoise;
var _xnoise, _ynoise;
var _angle;
var _radius;
var _strokeCol = 254;
let _strokeChange = -1;

function setup() {
  createCanvas(500, 300);
  smooth();
  frameRate(30);
  background(255);
  noFill();

  _angnoise = random(10);
  _radiusnoise = random(10);
  _xnoise = random(10);
  _ynoise = random(10);
  _angle = -PI / 2;
}

function draw() {
  _radiusnoise += 0.005;
  _radius = noise(_radiusnoise) * 500 + 1;

  _angnoise += 0.005;
  _angle += noise(_angnoise) * 6 - 3;
  if (_angle > 360) {
    _angle -= 360;
  }
  if (_angle < 0) {
    _angle += 360;
  }

  _xnoise += 0.01;
  _ynoise += 0.01;

  var centerx = width / 2 + noise(_xnoise) * 100 - 50;
  var centery = height / 2 + noise(_ynoise) * 100 - 50;

  var rad = radians(_angle);
  var x1 = centerx + _radius * cos(rad);
  var y1 = centery + _radius * sin(rad);

  var opprad = rad + PI;
  var x2 = centerx + _radius * cos(opprad);
  var y2 = centery + _radius * sin(opprad);

  _strokeCol += _strokeChange;
  if (_strokeCol > 254) {
    _strokeChange = -1;
  }
  if (_strokeCol < 0) {
    _strokeChange = 1;
  }
  stroke(_strokeCol, 60);
  strokeWeight(1);
  line(x1, y1, x2, y2);
}
