const binaryTree = (grid) => {
  grid.eachCell((cell) => {
    const neighbors = [];
    if (cell.north) { neighbors.push(cell.north); }
    if (cell.east) { neighbors.push(cell.east); }

    if (neighbors.length > 0) {
      const index = Math.floor(Math.random() * neighbors.length);
      cell.link(neighbors[index]);
    }
  });
};

export default binaryTree;
