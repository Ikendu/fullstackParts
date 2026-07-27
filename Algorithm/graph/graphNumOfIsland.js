// function numOfIsland(grid) {
//   let visited = new Set();
//   let islandCounter = 0;

//   function dfs(row, col) {
//     if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
//       return;

//     if (grid[row][col] === "0") return;

//     if (visited.has(`${row},${col}`)) return;

//     visited.add(`${row},${col}`);

//     //   Go the four direction of neighbors
//     dfs(row - 1, col);
//     dfs(row + 1, col);
//     dfs(row, col - 1);
//     dfs(row, col + 1);
//   }

//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid[0].length; col++) {
//       if (grid[row][col] === "1" && !visited.has(`${row},${col}`)) {
//         islandCounter++;
//         dfs(row, col);
//       }
//     }
//   }
//   return islandCounter;
// }
// console.log(
//   numOfIsland([
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "0", "1", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"],
//   ]),
// );

// console.log(
//   numOfIsland([
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"],
//   ]),
// );

function numsOfIsland(grid) {
  let island = 0;

  function dfs(row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
      return;
    if (grid[row][col] === "0") return;

    grid[row][col] = "0";

    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        island++;
        dfs(row, col);
      }
    }
  }
  return island;
}

console.log(
  numsOfIsland([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]),
);

console.log(
  numsOfIsland([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]),
);
