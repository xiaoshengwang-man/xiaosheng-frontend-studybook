// 实现一个最小堆
class MinHeap {
  constructor(data = []) {
    this.data = data;
  }
  size() {
    return this.data.length;
  }
  compare(a, b) {
    return a - b;
  }
  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }
  // 获取最小值
  peek() {
    return this.size() === 0 ? null : this.data[0];
  }
  push(node) {
    this.data.push(node);
    this.shiftUp(node, this.size() - 1);
  }
  shiftUp(node, i) {
    let index = i;
    while (index > 0) {
      const parentIndex = (index - 1) >>> 1;
      const parent = this.data[parentIndex];
      if (this.compare(node, parent) < 0) {
        // node < parent
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  pop() {
    if (this.size() === 0) {
      return null;
    }
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.shiftDown(last, 0);
    }
  }
  shiftDown(node, i) {
    let index = i;
    const length = this.size();
    const halfLength = length >>> 1;
    while (index < halfLength) {
      const leftIndex = (index + 1) * 2 - 1;
      const rightIndex = leftIndex + 1;
      const left = this.data[leftIndex];
      const right = this.data[rightIndex];
      if (this.compare(left, node) < 0) {
        // left < parent
        if (rightIndex < length && this.compare(right, left) < 0) {
          // right 最小
          this.swap(rightIndex, index);
          index = rightIndex;
        } else {
          // left 最小
          this.swap(leftIndex, index);
          index = leftIndex;
        }
      } else if (rightIndex < length && this.compare(right, node) < 0) {
        // left > parent, right < parent
        this.swap(rightIndex, index);
        index = rightIndex;
      } else {
        // 根节点最小，已满足最小堆，停止
        break;
      }
    }
  }
}
function KthLargest(k, nums) {
  this.k = k;
  this.heap = new MinHeap();
  for (const node of nums) {
    this.add(node);
  }
}
KthLargest.prototype.add = function (node) {
  this.heap.push(node);
  if (this.heap.size() > this.k) {
    this.heap.pop();
  }
  return this.heap.peek();
};
