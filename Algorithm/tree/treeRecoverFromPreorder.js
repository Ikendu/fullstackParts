// We run a preorder depth-first search (DFS) on the root of a binary tree.
// At each node in this traversal, we output D dashes (where D is the depth of this node),
// then we output the value of this node.  If the depth of a node is D, the depth of its
// immediate child is D + 1.  The depth of the root node is 0.
// If a node has only one child, that child is guaranteed to be the left child.
// Given the output traversal of this traversal, recover the tree and return its root.
// Example
// Input: traversal = "1-2--3--4-5--6--7";
// Output: [1, 2, 5, 3, 4, 6, 7];

const { TreeNode, eeNode, buildTree, printTree } = require("./treeMaxDepth");

// Using bouble parsing method
function recoverFromPreorder(traversed) {
  let i = 0;
  let n = traversed.length;
  let nodes = [];

  while (i < traversed.length) {
    let depth = 0;
    let num = "";

    while (i < n && traversed[i] === "-") {
      depth++;
      i++;
    }

    while (i < n && traversed[i] !== "-") {
      num += traversed[i];
      i++;
    }
    nodes.push([depth, Number(num)]);
  }

  let stack = [];

  for (let [depth, value] of nodes) {
    let node = new TreeNode(value);

    while (depth < stack.length) {
      stack.pop();
    }
    if (stack.length > 0) {
      let parent = stack[stack.length - 1];

      if (!parent.left) parent.left = node;
      else parent.right = node;
    }
    stack.push(node);
  }
  return stack[0];
}

// Using One Way Parsing and Building
function recoverPreorder(travers) {
  let i = 0;
  let stack = [];

  while (i < travers.length) {
    let depth = 0;
    let num = "";

    while (i < travers.length && travers[i] === "-") {
      depth++;
      i++;
    }
    while (i < travers.length && travers[i] !== "-") {
      num += travers[i];
      i++;
    }
    num = Number(num);

    let node = new TreeNode(num);

    while (depth < stack.length) stack.pop();

    if (stack.length > 0) {
      let parent = stack[stack.length - 1];

      if (!parent.left) parent.left = node;
      else parent.right = node;
    }

    stack.push(node);
  }
  return stack[0];
}

let tree = recoverFromPreorder("1-2--3--4-5--6--7");
let tree1 = recoverPreorder("1-2--3--4-5--6--7");
// console.log(tree);

console.log(printTree(tree1));
