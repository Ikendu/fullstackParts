// Into to BFS
// Repeat Graph building and Perform valid path

// Unsing ValidPath Leetcood Question, build the graph use BFS to solve the question
// Given edges and the integers n, source, and destination,
// return true if there is a valid path from source to destination, or false otherwise.
function validPath(n, edges, source, destination) {
  // Building graph
  let graph = {};
  for ([from, to] of edges) {
    if (!graph[from]) graph[from] = [];
    if (!graph[to]) graph[to] = [];

    graph[from].push(to);
    graph[to].push(from);
  }
  //   console.log(graph);

  //   finding if destination exist
  function bfs() {
    let queue = [];
    let visited = new Set();

    queue.push(source);
    visited.add(source);

    while (queue.length > 0) {
      let node = queue.shift();
      if (node === destination) return true;

      for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    return false;
  }
  return bfs();
}

// Testing the Function
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
    6,
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
