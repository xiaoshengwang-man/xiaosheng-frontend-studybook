/**
 * @param {number[]} nums
 * @return {number[]}
 */
var merge = function (nums, leftPtr, rightPtr, rightBound) {
  let mid = rightPtr - 1;
  let i = leftPtr,
    j = rightPtr;
  let arr = [];
  // 左右相等情况移动左边，这样保证稳定性
  while (i <= mid && j <= rightBound) {
    arr.push(nums[i] <= nums[j] ? nums[i++] : nums[j++])
  }
  while (i <= mid) {
    arr.push(nums[i++])
  };
  while (j <= rightBound) {
    arr.push(nums[j++])
  };
  // 必须返回nums,因为要在原数组上进行递归操作，所以地址不能改变
  arr.forEach((item, index) => {
    nums[leftPtr + index] = item
  })
  return nums;
}
var sort = function (nums, left, right) {
  if (left === right) return nums;
  // 等价与两数相加除以2，这样可以保证数值不越界
  let mid = Math.floor(left + (right - left) / 2);
  sort(nums, left, mid);
  sort(nums, mid + 1, right);
  return merge(nums, left, mid + 1, right)
}
var sortArray = function (nums) {
  return sort(nums, 0, nums.length - 1);
};