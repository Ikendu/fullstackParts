// 105. Construct Binary Tree from Preorder and Inorder Traversal
// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary
// tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
// Input: ((preorder = [3, 9, 20, 15, 7]), (inorder = [9, 3, 15, 20, 7]));
// Output: [3, 9, 20, null, null, 15, 7];

const { buildTree, printTree, TreeNode } = require("./treeMaxDepth");

function treeconstruct(preorder, inorder) {
  if (!preorder.length) return null;

  let first = preorder[0];
  let root = new TreeNode(first);
  let mid = inorder.indexOf(first);

  root.left = treeconstruct(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = treeconstruct(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
}

// let tree = treeconstruct([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
// console.log(tree);

function optimisedConstruct(preorder, inorder) {
  let map = new Map();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  function builder(prestart, preend, instart, inend) {
    if (prestart > preend) return null;

    let rootValue = preorder[prestart];
    let root = new TreeNode(rootValue);
    let mid = map.get(rootValue);
    let leftSize = mid - instart;

    root.left = builder(prestart + 1, prestart + leftSize, instart, mid - 1);
    root.righ = builder(prestart + leftSize + 1, preend, mid + 1, inend);

    return root;
  }
  return builder(0, preorder.length - 1, 0, inorder.length - 1);
}

let tree = optimisedConstruct([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
console.log(tree);
