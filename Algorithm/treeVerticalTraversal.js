// 987. Vertical Order Traversal of a Binary Tree
// Given the root of a binary tree, calculate the vertical order traversal of the binary tree.

// For each node at position (row, col), its left and right children will be at positions (row + 1, col - 1) and
// (row + 1, col + 1) respectively. The root of the tree is at (0, 0).

// The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each column index
// starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in
// the same row and same column. In such a case, sort these nodes by their values.

// Return the vertical order traversal of the binary tree.

const { TreeNode, buildTree, printTree } = require("./treeMaxDepth");

function verticalTraversal(root) {
  let nodes = [];

  function dfs(col, row, node) {
    if (!node) return;

    dfs(col - 1, row + 1, node.left);
    nodes.push([col, row, node.val]);
    dfs(col + 1, row + 1, node.right);
  }

  dfs(0, 0, root);

  nodes.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[2] - b[2];
  });

  let result = [];

  for (let i = 0; i < nodes.length; i++) {
    let [col, row, value] = nodes[i];
    let temp = [];

    temp.push(value);
    while (i < nodes.length - 1 && col === nodes[i + 1][0]) {
      temp.push(nodes[i + 1][2]);
      i++;
    }
    result.push(temp);
  }
  return result;
}

let tree = buildTree([3, 9, 20, null, null, 15, 7]);

console.log(verticalTraversal(tree));
