var getHeight = function (root) {
  if (root === null) return 0;
  let l = getHeight(root.left);
  let r = getHeight(root.right);
  if (l < 0 || r < 0) return -1;
  if (Math.abs(l - r) > 1) return -1;
  return Math.max(l, r) + 1;
};
var isBalanced = function (root) {
  return getHeight(root) >= 0;
};
