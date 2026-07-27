// You are given an m x n grid where each cell can have one of three values:
// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange.
// If this is impossible, return -1.

function orangesRotting(grid) {
  let queue = [];
  let flesh = 0;
  let minutes = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 2) queue.push([row, col]);
      if (grid[row][col] === 1) flesh++;
    }
  }

  if (flesh === 0) return 0;

  let directives = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length && flesh > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [r, c] = queue.shift();

      for (let [dr, dc] of directives) {
        let nr = r + dr;
        let nc = c + dc;

        if (
          nr >= 0 &&
          nr < grid.length &&
          nc >= 0 &&
          nc < grid[0].length &&
          grid[nr][nc] === 1
        ) {
          minutes++;
          flesh--;
          queue.push([nr, nc]);
          grid[nr][nc] = 0;
        }
      }
    }
    flesh--;
  }
  return flesh == 0 ? minutes : -1;
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
);
console.log(orangesRotting([[0, 2]]));
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]),
);
