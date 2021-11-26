/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 var _postorderTraversal = function(root, arr) {
  if(root === null) return;
  _postorderTraversal(root.left, arr);
  _postorderTraversal(root.right, arr);
  arr.push(root.val);
  return;
};
var postorderTraversal = function(root) {
  let arr = [];
  _postorderTraversal(root, arr);
  return arr;
};