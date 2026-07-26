// Given the root of a binary tree, return the maximum width of the given tree.

// The maximum width of a tree is the maximum width among all levels.

// The width of one level is defined as the length between the end-nodes
// (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be
// present in a complete binary tree extending down to that level are also counted into the length calculation.
// Input: root = [1,3,2,5,3,null,9]
// Output: 4
// Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).

const { buildTree, printTree, TreeNode } = require("./treeMaxDepth");

function maxTreeWidth(root) {
  if (!root) return null;

  let queue = [[root, 0]];
  let maxlength = 0;

  while (queue.length) {
    let curSize = queue.length;

    let leftMost = queue[0][1];
    let rightMost = queue[curSize - 1][1];

    maxlength = Math.max(maxlength, rightMost - leftMost + 1);

    for (let i = 0; i < curSize; i++) {
      let [node, index] = queue.shift();

      index -= leftMost;

      if (node.left) queue.push([node.left, 2 * index + 1]);
      if (node.right) queue.push([node.right, 2 * index + 2]);
    }
  }
  return maxlength;
}

let tree = buildTree([1, 3, 2, 5, 3, null, 9]);

console.log(maxTreeWidth(tree));
