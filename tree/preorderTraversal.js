function convertBinaryTree(arr) {
  let root;
  let insertNode = function (parentNode, childNode) {
    if (childNode.val < parentNode.val) {
      if (parentNode.left === null) parentNode.left = childNode;
      else insertNode(parentNode.left, childNode);
    } else {
      if (parentNode.right === null) parentNode.right = childNode;
      else insertNode(parentNode.right, childNode);
    }
  }
  arr.forEach(val => {
    let node = {
      val: val,
      left: null,
      right: null
    }
    if (root) insertNode(root, node);
    else root = node;
  })
  return root;
}
let arr = [1, , 2, 3];
arr = convertBinaryTree(arr);
console.log(arr)

function preorderTraversal(tree) {
  if (tree === null) return;
  console.log(tree.val);
  sort(tree.left);
  sort(tree.right);
}
preorderTraversal(arr);