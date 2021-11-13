// 自行
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let i = Math.floor((right + left) / 2);
    if (nums[i] === target) {
      return i;
    }
    if (nums[i] > target) {
      right = i - 1;
    }
    if (nums[i] < target) {
      left = i + 1;
    }
  }
  return -1;
};