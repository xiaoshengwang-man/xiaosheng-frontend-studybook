var rightSideView = function (root) {
  const res = [];
  if (!root) return res;
  const queue = [root];
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let pop = queue.pop();
      if (pop.left !== null) queue.unshift(pop.left);
      if (pop.right !== null) queue.unshift(pop.right);
      if (i === len - 1) res.push(pop.val);
    }
  }
  return res;
};
