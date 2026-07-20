// Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.
// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

function cloneGraph(node) {
  let nodeMap = new Map();

  function dfs(node) {
    if (!node) return null;
    if (nodeMap.has(node)) return nodeMap.get(node);

    let clone = new Node(node.val);
    nodeMap.set(node, clone);

    for (let neighbor of node.neighbors) {
      let cloneNeighbors = dfs(neighbor);
      clone.neighbors.push(cloneNeighbors);
    }
    return clone;
  }
  return dfs(node);
}

// Testing
const node = new Node(1);

console.log(
  cloneGraph(node, [
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3],
  ]),
);
