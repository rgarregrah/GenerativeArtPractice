let _cellSize = 10;
let _cellArray;
let _numX, _numY;

function setup() {
  createCanvas(960, 480);
  frameRate(15);
  _numX = Math.trunc(width / _cellSize);
  _numY = Math.trunc(height / _cellSize);
  _cellArray = [_numY];
  for (let i = 0; i < _numX; i++) {
    _cellArray[i] = new Array(_numX);
  }
  restart();
}

const restart = () => {
  for (let x = 0; x < _numX; x++) {
    for (let y = 0; y < _numY; y++) {
      newCell = new Cell(x, y);
      _cellArray[x][y] = newCell;
    }
  }
  for (let x = 0; x < _numX; x++) {
    for (let y = 0; y < _numY; y++) {
      let above = y - 1;
      let below = y + 1;
      let left = x - 1;
      let right = x + 1;
      if (above < 0) {
        above = _numY - 1;
      }
      if (below == _numY) {
        below = 0;
      }
      if (left < 0) {
        left = _numX - 1;
      }
      if (right == _numX) {
        right = 0;
      }
      _cellArray[x][y].addNeighbour(_cellArray[left][above]);
      _cellArray[x][y].addNeighbour(_cellArray[left][y]);
      _cellArray[x][y].addNeighbour(_cellArray[left][below]);
      _cellArray[x][y].addNeighbour(_cellArray[x][below]);
      _cellArray[x][y].addNeighbour(_cellArray[right][below]);
      _cellArray[x][y].addNeighbour(_cellArray[right][y]);
      _cellArray[x][y].addNeighbour(_cellArray[right][above]);
      _cellArray[x][y].addNeighbour(_cellArray[x][above]);
    }
  }
};

function draw() {
  background(200);
  for (let x = 0; x < _numX; x++) {
    for (let y = 0; y < _numY; y++) {
      _cellArray[x][y].calcNextState();
    }
  }
  translate(_cellSize / 2, _cellSize / 2);
  for (let x = 0; x < _numX; x++) {
    for (let y = 0; y < _numY; y++) {
      _cellArray[x][y].drawMe();
    }
  }
}
function mousePressed() {
  restart();
}
class Cell {
  constructor(ex, why) {
    this.x = ex * _cellSize;
    this.y = why * _cellSize;
    if (random(2) > 1) {
      this.nextState = true;
    } else {
      this.nextState = false;
    }
    this.state = this.nextState;
    this.neighbours = new Array();
  }
  addNeighbour(cell) {
    this.neighbours.push(cell);
  }
  calcNextState() {
    let liveCount = 0;
    if (this.state) {
      liveCount++;
    }
    for (let i = 0; i < this.neighbours.length; i++) {
      if (this.neighbours[i].state == true) {
        liveCount++;
      }
    }
    if (liveCount <= 4) {
      this.nextState = false;
    } else if (liveCount > 4) {
      this.nextState = true;
    }
    if (liveCount == 4 || liveCount == 5) {
      this.nextState = !this.nextState;
    }
  }
  drawMe() {
    this.state = this.nextState;
    stroke(0);
    if (this.state == true) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(this.x, this.y, _cellSize, _cellSize);
  }
}
