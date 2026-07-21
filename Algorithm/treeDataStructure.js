class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(8);

root.left = new TreeNode(3);
root.right = new TreeNode(10);

root.left.left = new TreeNode(1);
root.left.right = new TreeNode(6);

root.left.right.left = new TreeNode(4);
root.left.right.right = new TreeNode(7);

root.right.right = new TreeNode(14);
root.right.right.left = new TreeNode(13);

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
  let current = root;
  while (current) {
    if (current.val === target) return current;
    else if (target < current.val) return searchR(current.left, target);
    else return searchR(current.right, target);
  }
}
