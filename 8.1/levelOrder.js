/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var getResult = function (root, k, ret) {
  if (root === null) return;
  if (k == ret.length) ret.push([]);
  ret[k].push(root.val);
  getResult(root.left, k + 1, ret);
  getResult(root.right, k + 1, ret);
  return;
};
var levelOrder = function (root) {
  let ret = [];
  getResult(root, 0, ret);
  return ret;
};
