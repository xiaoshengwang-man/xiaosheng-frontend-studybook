const isSymmetric = (root) => {
  const check = (left, right) => {
    // 两个子树都为null，是对称的
    if (!left && !right) return true;

    // 两个子树都存在，则需要：root值相同，且他们的子树也满足镜像
    if (left && right)
      return (
        left.val == right.val &&
        check(left.left, right.right) &&
        check(left.right, right.left)
      );
    // 一个子树存在一个不存在，肯定不对称
    else return false;
  };
  // 如果传入的root就是null，对称
  if (!root) return true;

  return check(root.left, root.right); // 否则，判断它的左右子树是否满足对称
};
