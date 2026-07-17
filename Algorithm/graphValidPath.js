// Given edges and the integers n, source, and destination, return true if there is a valid path
// from source to destination, or false otherwise.
// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2

function validPath(n, edges, source, destination) {
  const graph = {};

  for (let [from, to] of edges) {
    if (!graph[from]) graph[from] = [];
    if (!graph[to]) graph[to] = [];

    graph[from].push(to);
    graph[to].push(from);
  }

  let visited = new Set();

  function dfs(node) {
    if (node === destination) return true;
    visited.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        const answer = dfs(neighbor);
        if (answer) return true;
      }
    }
    return false;
  }

  return dfs(source);
}

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2,
  ),
);
console.log(
  validPath(
    3,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5,
  ),
);
