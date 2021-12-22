var findKthLargest = function (nums, k) {
  let h = new MinHeap();
  for (let x of nums) {
    h.push(x);
    if (h.size() > k) h.pop();
  }
  return h.peek();
};
