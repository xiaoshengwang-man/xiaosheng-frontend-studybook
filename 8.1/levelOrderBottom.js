var getResult = function (root, k, ret) {
  if (root === null) return;
  if (k == ret.length) ret.push([]);
  ret[k].push(root.val);
  getResult(root.left, k + 1, ret);
  getResult(root.right, k + 1, ret);
  return;
};
var levelOrderBottom = function (root) {
  let ret = [];
  getResult(root, 0, ret);
  for (let i = 0, j = ret.length - 1; i < j; i++, j--) {
    [ret[i], ret[j]] = [ret[j], ret[i]];
  }
  return ret;
};
