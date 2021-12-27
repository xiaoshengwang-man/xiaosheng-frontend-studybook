class MinHeap {
  constructor() {
    this.heap = [];
  }
  getLiftIndex(i) {
    return i * 2 + 1;
  }
  getRightIndex(i) {
    return i * 2 + 2;
  }
  getParentIndex(i) {
    return (i - 1) >> 1;
  }
  shifDown(index) {
    const leftIndex = this.getLiftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (
      this.heap[leftIndex] &&
      this.heap[leftIndex].value < this.heap[index].value
    ) {
      this.swap(leftIndex, index);
      this.shifDown(leftIndex);
    }
    if (
      this.heap[rightIndex] &&
      this.heap[rightIndex].value < this.heap[index].value
    ) {
      this.swap(rightIndex, index);
      this.shifDown(rightIndex);
    }
  }
  shifUp(index) {
    if (!index) return;
    const parentIndex = this.getParentIndex(index);
    if (
      this.heap[parentIndex] &&
      this.heap[parentIndex].value > this.heap[index].value
    ) {
      this.swap(parentIndex, index);
      this.shifUp(parentIndex);
    }
    const temp = this.heap[index];
  }
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  insert(val) {
    this.heap.push(val);
    this.shifUp(this.heap.length - 1);
  }
  pop() {
    this.heap[0] = this.heap.pop();
    this.shifDown(0);
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const heap = new MinHeap();
  const map = new Map();
  nums.forEach((n) => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  });
  map.forEach((value, key) => {
    heap.insert({ value, key });
    if (heap.size() > k) {
      heap.pop();
    }
  });
  return heap.heap.map((a) => a.key);
};
