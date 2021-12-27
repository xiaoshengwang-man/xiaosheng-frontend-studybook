var isSameTree = function (p, q) {
  if (!p && q) return false;
  else if (p && !q) return false;
  else if (!p && !q) return true;
  else if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
