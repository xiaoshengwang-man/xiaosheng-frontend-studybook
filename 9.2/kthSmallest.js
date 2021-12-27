var kthSmallest = function (root, k) {
  let arr = [];
  const loop = (node) => {
    if (!node) {
      return;
    }
    loop(node.left);
    arr.push(node.val);
    loop(node.right);
  };
  loop(root);
  return arr[k - 1];
};
