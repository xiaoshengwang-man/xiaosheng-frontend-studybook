var maxDepth = function (root) {
  if (root == null) return 0;
  let res = 1;
  function dfs(node, level) {
    if (node == null) return;
    if (res < level) res = level;
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }
  dfs(root, res);
  return res;
};
