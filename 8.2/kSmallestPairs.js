/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
class MaxHeap {
  constructor(data = []) {
    this.data = data;
  }
  size() {
    return this.data.length;
  }
  compare(a, b) {
    return b[0] + b[1] - (a[0] + a[1]);
  }
  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }
  // 获取最小值
  top() {
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
var compare = function (a, b) {
  return b[0] + b[1] - (a[0] + a[1]);
};
var kSmallestPairs = function (nums1, nums2, k) {
  let h = new MaxHeap();

  for (let x of nums1) {
    for (let y of nums2) {
      let temp = [];
      (temp[0] = x), (temp[1] = y);
      // 长度小于k前直接放入，这是代码优化，不然会超出时间限制
      if (h.size() < k || compare(h.top(), temp) < 0) {
        h.push(temp);
        if (h.size() > k) h.pop();
      }
    }
  }
  return h.data;
};
