var _angnoise, _radiusnoise;
var _xnoise, _ynoise;
var _angle;
var _radius;
var _strokeCol = 254;
var _strokeColR = 254;
var _strokeColG = 0;
var _strokeColB = 0;
let _strokeChangeR = 1;
let _strokeChangeG = 0;
let _strokeChangeB = 0;

function setup() {
  createCanvas(960, 480);
  smooth();
  frameRate(60);
  background(0);
  noFill();

  _angnoise = random(10);
  _radiusnoise = random(10);
  _xnoise = random(10);
  _ynoise = random(10);
  _angle = -PI / 2;
}

function draw() {
  background(0, 1);
  _radiusnoise += 0.005;
  _radius = noise(_radiusnoise) * 1500 + 1;

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

  var centerx = width / 2 + noise(_xnoise) * 150 - 50;
  var centery = height / 2 + noise(_ynoise) * 150 - 50;

  var rad = radians(_angle);
  var x1 = centerx + _radius * cos(rad);
  var y1 = centery + _radius * sin(rad);

  var opprad = rad + PI;
  var x2 = centerx + _radius * cos(opprad);
  var y2 = centery + _radius * sin(opprad);

  _strokeColR += _strokeChangeR;
  _strokeColG += _strokeChangeG;
  _strokeColB += _strokeChangeB;
  if (_strokeColR > 254) {
    _strokeColR = 255;
    _strokeChangeB = -1;
  }
  if (_strokeColR < 0) {
    _strokeColR = 0;
    _strokeChangeB = 1;
  }
  if (_strokeColG > 254) {
    _strokeColG = 255;
    _strokeChangeR = -1;
  }
  if (_strokeColG < 0) {
    _strokeColG = 0;
    _strokeChangeR = 1;
  }
  if (_strokeColB > 254) {
    _strokeColB = 255;
    _strokeChangeG = -1;
  }
  if (_strokeColB < 0) {
    _strokeColB = 0;
    _strokeChangeG = 1;
  }
  stroke(_strokeColR, _strokeColG, _strokeColB, 60);
  strokeWeight(1);
  line(x1, y1, x2, y2);
  print(_strokeColR, _strokeColG, _strokeColB);
}
