// You are given an m x n binary matrix grid. An island is a group of 1's (representing land)
// connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are
// surrounded by water.
// The area of an island is the number of cells with a value 1 in the island.
// Return the maximum area of an island in grid. If there is no island, return 0.

// Using DFS

function maxAreaOfIsLand(grid) {
  let maxArea = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        let count = bfs(row, col);
        maxArea = Math.max(count, maxArea);
      }
    }
  }
  function bfs(row, col) {
    let counter = 0;
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
      return counter;
    if (grid[row][col] === 0) return counter;

    counter = 1;

    grid[row][col] = 0;

    let num1 = bfs(row - 1, col);
    let num2 = bfs(row + 1, col);
    let num3 = bfs(row, col - 1);
    let num4 = bfs(row, col + 1);

    return counter + num1 + num2 + num3 + num4;
  }

  return maxArea;
}

console.log(
  maxAreaOfIsLand([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ]),
);

console.log(maxAreaOfIsLand([[[0, 0, 0, 0, 0, 0, 0, 0]]]));
