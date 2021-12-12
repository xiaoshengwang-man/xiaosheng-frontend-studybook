var getCount = function (root) {
  if (root == null) return 0;
  return getCount(root.left) + getCount(root.right) + 1;
};
var kthLargest = function (root, k) {
  let cnt_r = getCount(root.right);
  if (k <= cnt_r) return kthLargest(root.right, k);
  if (k == cnt_r + 1) return root.val;
  return kthLargest(root.left, k - cnt_r - 1);
};
