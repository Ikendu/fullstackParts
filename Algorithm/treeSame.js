// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes
// have the same value.

// Tree Class constructor
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function buildTree(arr) {
  if (arr.length < 1) return null;
  let root = new TreeNode(arr[0]);
  let queue = [root];
  let index = 1;

  while (queue.length && index < arr.length) {
    let node = queue.shift();

    if (arr[index]) {
      node.left = new TreeNode(arr[index]);
      queue.push(node.left);
    }
    index++;
    if (index < arr.length && arr[index]) {
      node.right = new TreeNode(arr[index]);
      queue.push(node.right);
    }
    index++;
  }
  return root;
}

// Print Tree in an Array of elements
function printTree(root) {
  if (!root) return [];

  let printout = [];
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    printout.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return printout;
}

// Same Tree Checking Function using Iteractive approach
function sameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  let queue = [[p, q]];

  while (queue.length) {
    let [pnode, qnode] = queue.shift();

    if (pnode.val !== qnode.val) return false;

    if (pnode.left && qnode.left) {
      queue.push([pnode.left, qnode.left]);
    } else if (pnode.left != qnode.left) return false;

    if (pnode.right && qnode.right) {
      queue.push([pnode.right, qnode.right]);
    } else if (pnode.right != qnode.right) return false;
  }
  return true;
}

let p = buildTree([1, 2, 3]);
let q = buildTree([1, 2, 3]);

// let tree = buildTree([3, 9, 20, null, null, 15, 7]);
// console.log(printTree(tree));
console.log(sameTree(p, q));
