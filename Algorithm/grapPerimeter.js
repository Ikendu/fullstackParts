// You are given row x col grid representing a map where grid[i][j] = 1 represents land
// and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally).
// The grid is completely surrounded by water, and there is exactly one island
// (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island.
// One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100.
// Determine the perimeter of the island.

// Using simple algorithm
function islandPerimeter(grid) {
  let perimeter = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid.length; col++) {
      if (grid[row][col] === 1) {
        perimeter += 4;

        if (row > 0 && grid[row - 1][col] === 1) perimeter -= 2;
        if (col > 0 && grid[row][col - 1] === 1) perimeter -= 2;
      }
    }
  }
  return perimeter;
}
console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ]),
);
console.log(islandPerimeter([[1]]));
console.log(islandPerimeter([[1, 0]]));

// Using DFS method
function islandPerimeters(grid) {
  let perimeter = 0;

  function dfs(row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
      return;
    if (grid[row][col] === -1) return;
    if (grid[row][col] === 0) return;

    grid[row][col] = -1;

    // Top
    if (row - 1 < 0 || grid[row - 1][col] === 0) perimeter++;
    // Left
    if (col - 1 < 0 || grid[row][col - 1] === 0) perimeter++;
    // Right
    if (col + 1 >= grid[0].length || grid[row][col + 1] === 0) perimeter++;
    // Bottom
    if (row + 1 >= grid.length || grid[row + 1][col] === 0) perimeter++;

    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  }
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        dfs(row, col);
        return perimeter;
      }
    }
  }
  //   return perimeter;
}

console.log(
  islandPerimeters([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ]),
);
console.log(islandPerimeters([[1]]));
console.log(islandPerimeters([[1, 0]]));
