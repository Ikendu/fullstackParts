// Tree Class
function TreeNode(val = 0, right = null, left = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Build Tree
function buildTree(arr) {
  if (arr.length < 1) return null;

  let root = new TreeNode(arr[0]);
  const queue = [root];
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
      queue.push(parent.left);
    }
    index++;
  }
  return root;
}

function printTree(root) {
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

// Inverting Tree Function
// PreOrder inverting
function invertTree(root) {
  if (!root) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

// PostOrder inverting
function postInverter(root) {
  if (!root) return null;
  let left = postInverter(root.left);
  let right = postInverter(root.right);

  let temp = left;
  left = right;
  right = temp;

  return root;
}

// Testing
const tree = buildTree([3, 9, 20, null, null, 15, 7]);
const preInvert = invertTree(tree);
const postInvert = postInverter(tree);

console.log("Pre Inverted", preInvert);
console.log("Post Inverted", postInvert);

console.log(printTree(postInvert));
