function build(lo, hi) {
  let res = [];
  // base case，显然当lo > hi闭区间[lo, hi]肯定是个空区间，也就对应着空节点 null，
  if (lo > hi) {
    res.push(null);
    return res;
  }
  // 1、穷举 root 节点的所有可能。
  for (let i = lo; i <= hi; i++) {
    // 2、递归构造出左右子树的所有合法 BST。
    let leftTree = build(lo, i - 1);
    let rightTree = build(i + 1, hi);
    // 3、给 root 节点穷举所有左右子树的组合。
    for (let left of leftTree) {
      for (let right of rightTree) {
        let root = new TreeNode(i);
        root.left = left;
        root.right = right;
        res.push(root);
      }
    }
  }
  return res;
}
var generateTrees = function (n) {
  if (n == 0) return [];
  // 构造闭区间 [1, n] 组成的 BST
  return build(1, n);
};
