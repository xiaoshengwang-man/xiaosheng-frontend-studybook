/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var __preorder = function (root, ret) {
  if (root == null) return;
  ret.push(root.val);
  for (let i of root.children) {
    __preorder(i, ret);
  }
};
var preorder = function (root) {
  let ret = [];
  __preorder(root, ret);
  return ret;
};
