var distributeCoins = function (root) {
    let res = 0;
    /** 定义：输入一棵二叉树，返回这棵二叉树中多出的硬币个数，返回负数代表缺少硬币 */
    const getRest = (root) => {
      if (root == null) return 0;
      let left = getRest(root.left);
      let right = getRest(root.right);
      // 让当前这棵树平衡所需的移动次数
      res += Math.abs(left) + Math.abs(right) + (root.val - 1);
      // 实现函数的定义
      return left + right + (root.val - 1);
    };
    getRest(root);
    return res;
  };