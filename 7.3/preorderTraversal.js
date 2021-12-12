var preorder = function (root, arr) {
  if (!root) return;
  arr.push(root.val);
  preorder(root.left, arr);
  preorder(root.right, arr);
  return arr;
};

var preorderTraversal = function (root) {
  let ret = [];
  preorder(root, ret);
  return ret;
};
