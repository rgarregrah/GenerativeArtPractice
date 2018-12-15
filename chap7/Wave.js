let _cellSize = 10;
let _cellArray;
let _numX,
  _numY = 0;

function setup() {
  createCanvas(500, 300);
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
    this.nextState = (this.x / width + this.y / height) * 14;
    this.state = this.nextState;
    this.lastState = 0;
    this.neighbours = [];
  }
  addNeighbour(cell) {
    this.neighbours.push(cell);
  }
  calcNextState() {
    let total = 0;
    for (let i = 0; i < this.neighbours.length; i++) {
      total += this.neighbours[i].state;
    }
    let average = int(total / 8);
    if (average == 255) {
      this.nextState = 0;
    } else if (average == 0) {
      this.nextState = 255;
    } else {
      this.nextState = this.state + average;
      if (this.lastState > 0) {
        this.nextState -= this.lastState;
      }
      if (this.nextState > 255) {
        this.nextState = 255;
      } else if (this.nextState < 0) {
        this.nextState = 0;
      }
    }
    this.lastState = this.state;
  }

  drawMe() {
    this.state = this.nextState;
    stroke(0);
    fill(this.state);
    ellipse(this.x, this.y, _cellSize, _cellSize);
  }
}
