var getAllElements = function (root1, root2) {
  function BSTIterator(root) {
    let stack = [];
    // 左侧树枝一撸到底
    const pushLeftBrach = (p) => {
      while (p) {
        stack.push(p);
        p = p.left;
      }
    };
    pushLeftBrach(root);
    this.peek = () => {
      return stack[stack.length - 1].val;
    };
    this.next = () => {
      let p = stack.pop();
      pushLeftBrach(p.right);
      return p.val;
    };
    this.hasNext = () => {
      return stack.length;
    };
  }
  let t1 = new BSTIterator(root1);
  let t2 = new BSTIterator(root2);
  let res = [];
  while (t1.hasNext() && t2.hasNext()) {
    if (t1.peek() > t2.peek()) {
      res.push(t2.next());
    } else {
      res.push(t1.next());
    }
  }
  // 如果有一棵 BST 还剩元素，添加到最后
  while (t1.hasNext()) {
    res.push(t1.next());
  }
  while (t2.hasNext()) {
    res.push(t2.next());
  }
  return res;
};
