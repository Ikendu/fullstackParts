// Given the root of a binary tree,
// return the level order traversal of its nodes' values.
// (i.e., from left to right, level by level).
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:
// Input: root = [1]
// Output: [[1]]

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Building a Tree from Array elements
function buildTree(arr) {
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

function levelOrder(root) {
  if (!root) return [];

  let queue = [root];
  let result = [];

  while (queue.length) {
    let level = [];
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      level.push(node.val);
    }
    result.push(level);
  }
  return result;
}

let tree = buildTree([3, 9, 20, null, null, 15, 7]);
console.log(levelOrder(tree));
