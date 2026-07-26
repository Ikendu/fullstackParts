const { buildTree, printTree } = require("./treeMaxDepth");

function balanced(root) {
  function height(node) {
    if (!node) return 0;

    let left = height(node.left);
    if (left === -1) return -1;

    let right = height(node.right);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) return -1;

    return Math.max(left, right) + 1;
  }
  if (height(root) === -1) return false;
  return true;
}

let tree = buildTree([3, 9, 20, null, null, 15, 7]);
let tree1 = buildTree([1, 2, 2, 3, 3, null, null, 4, 4]);
console.log(printTree(tree));
console.log(balanced(tree));
console.log(balanced(tree1));
