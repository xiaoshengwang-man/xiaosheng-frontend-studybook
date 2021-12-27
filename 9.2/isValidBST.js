var isValidBST = function (root) {
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
  let flag = true;
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      if (arr[i] <= arr[i - 1]) {
        flag = false;
      }
    }
  }
  return flag;
};
