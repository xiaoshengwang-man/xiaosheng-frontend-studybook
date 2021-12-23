var lastStoneWeight = function (stones) {
  let h = new MaxHeap();
  for (let x of stones) {
    h.push(x);
  }
  while (h.size() > 1) {
    let y = h.top();
    h.pop();
    let x = h.top();
    h.pop();
    if (x == y) continue;
    h.push(y - x);
  }
  if (h.size() == 0) return 0;
  return h.top();
};
