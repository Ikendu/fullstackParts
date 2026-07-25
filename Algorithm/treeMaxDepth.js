// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest
// path from the root node down to the farthest leaf node.

export function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Building a Tree from Array elements
export function buildTree(arr) {
  if (arr.length < 1) return null;

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let index = 1;

  while (queue.length && index < arr.length) {
    let parent = queue.shift();

    if (arr[index] != null) {
      parent.left = new TreeNode(arr[index]);
      queue.push(parent.left);
    }
    index++;
    if (index < arr.length && arr[index] != null) {
      parent.right = new TreeNode(arr[index]);
      queue.push(parent.right);
    }
    index++;
  }
  return root;
}

export function printTree(root) {
  if (!root) return [];

  let queue = [root];
  let printed = [];

  while (queue.length) {
    let node = queue.shift();

    printed.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return printed;
}

// MaxDept Tree

function maxDepth(root) {
  if (!root) return 0;

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  return Math.max(left, right) + 1;
}

const tree = buildTree([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(tree));
