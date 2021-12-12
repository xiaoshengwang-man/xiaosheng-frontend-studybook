var hasPathSum = function (root, targetSum) {
  if (root == null) return false;
  if (root.left == null && root.right == null) return root.val == targetSum;
  if (root.left && hasPathSum(root.left, targetSum - root.val)) return true;
  if (root.right && hasPathSum(root.right, targetSum - root.val)) return true;
  return false;
};
