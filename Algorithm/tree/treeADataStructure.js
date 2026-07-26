class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// let root = new TreeNode(8);

// root.left = new TreeNode(3);
// root.right = new TreeNode(10);

// root.left.left = new TreeNode(1);
// root.left.right = new TreeNode(6);

// root.left.right.left = new TreeNode(4);
// root.left.right.right = new TreeNode(7);

// root.right.right = new TreeNode(14);
// root.right.right.left = new TreeNode(13);

// iteratively
function search(root, target) {
  let current = root;

  while (current) {
    if (current.val === target)
      return current; //Returns the node with the value once found
    else if (target < current.val) current = current.left;
    else current = current.right;
  }
  return current; // Returns null when the target is missing
}

// Using recursion
function searchR(root, target) {
  if (!root) return null;
  if (root.val === target) return root;
  if (target < root.val) return searchR(root.left, target);
  return searchR(root.right, target);
}

let root = new TreeNode(12);

function insert(root, value) {
  if (!root) {
    return new TreeNode(value);
  }
  let parent = null;
  let current = root;

  while (current) {
    parent = current;
    if (value < current.val) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  if (value < parent.val) {
    parent.left = new TreeNode(value);
  } else {
    parent.right = new TreeNode(value);
  }
  return root;
}

console.log(insert(root, 10));
console.log(insert(root, 13));
console.log(insert(root, 9));
console.log(insert(root, 15));
// console.log(root);
