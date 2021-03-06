var lowestCommonAncestor = function (root, p, q) {
  if (!root) {
    return null;
  }
  if (p === root || q === root) {
    return root;
  }
  //εεΊιε
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left && right) {
    return root;
  }
  return left ? left : right;
};
