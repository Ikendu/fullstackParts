function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Building a Tree from Array

function buildTree(arr) {
  if (arr.length === 0) return null;

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let index = 1;

  while (queue.length && index < arr.length) {
    let parent = queue.shift();
    if (arr[index] !== null && arr[index] !== undefined) {
      let left = new TreeNode(arr[index]);
      parent.left = left;
      queue.push(left);
    }
    index++;
    if (index < arr.length) {
      if (arr[index] !== null && arr[index] !== undefined) {
        let right = new TreeNode(arr[index]);
        parent.right = right;
        queue.push(right);
      }
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
