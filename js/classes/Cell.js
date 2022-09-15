class Cell {
  constructor(row, column) {
    this.x = column;
    this.y = row;
    this.north = undefined;
    this.south = undefined;
    this.east = undefined;
    this.west = undefined;
    this.links = [];
  }

  link(cell, bidi) {
    this.links.push(cell);
    if (bidi) { // record link in given cell as well
      cell.link(this, false);
    }
  }

  unlink(cell, bidi) {
    const indexToRemove = this.links.findIndex((c) => c.x === cell.x && c.y === cell.y);
    this.links.splice(indexToRemove, 1);
    if (bidi) { // remove link in given cell as well
      cell.unlink(this, false);
    }
  }

  links() {
    return this.links;
  }

  linked(cell) {
    return this.links(cell.id);
  }

  defineNeighbors(n, s, e, w) {
    this.north = n;
    this.south = s;
    this.east = e;
    this.west = w;
  }

  neighbors() {
    const list = [];
    if (this.north) { list.push(this.north); }
    if (this.south) { list.push(this.south); }
    if (this.east) { list.push(this.east); }
    if (this.west) { list.push(this.west); }
  }
}

export default Cell;
