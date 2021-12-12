var widthOfBinaryTree = function (root) {
  let ans = 0;
  // 用队列处理每一行数据
  let q = [];
  q.push([root, 0]);
  while (q.length != 0) {
    let cnt = q.length;
    // l为当前行最小编号，r为最大编号
    let l = q[0][1],
      r = q[0][1];
    for (let i = 0; i < cnt; i++) {
      let n = q[0][0];
      let ind = q[0][1];
      r = ind;
      // 运用了完美二叉树的编号技巧
      // 节点编号为（父节点-父所在行最小编号）*2，以后看不懂看视频多看
      if (n.left) q.push([n.left, (ind - l) * 2]);
      if (n.right) q.push([n.right, (ind - l) * 2 + 1]);
      q.shift();
    }
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
};
