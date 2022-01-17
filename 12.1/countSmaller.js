const countSmaller = (nums) => {
  const counts = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    counts[i] = count;
  }
  return counts;
};