// Graph Data Structure
// Building graph from Array Data
// Intro to DFS

let graph = {
  A: ["B", "C", "E"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "E"],
  E: ["A", "D"],
};

let visited = new Set();

function dfs(node, graph, visited) {
  console.log(node);

  visited.add(node);

  for (let n of graph[node]) {
    if (!visited.has(n)) dfs(n, graph, visited);
  }
}

// console.log(graph);

// console.log(dfs("A", graph, visited));

// Building the graph from Array Data points
function buildGraph(edge) {
  const graph = {};

  for (let [from, to] of edge) {
    if (!graph[from]) graph[from] = [];
    if (!graph[to]) graph[to] = [];

    graph[from].push(to);
    graph[to].push(from);
  }
  return graph;
}

// console.log(
//   buildGraph([
//     [0, 1],
//     [1, 2],
//     [2, 0],
//   ]),
// );

// Queue Lesson

let queue = [];

queue.push("A");
queue.push("B");
queue.push("C");
queue.push("D");

console.log(queue);
queue.shift();
console.log(queue);
queue.shift();
console.log(queue);
queue.shift();
console.log(queue);
