var longestConsecutive = function(nums) {
  // 排序 + 去重
  nums.sort((a,b) => a-b);
  nums = Array.from(new Set([...nums]));
  let maxWindow = 0;
  
  // 滑窗 时间复杂度: O(n)
  for(let i=0; i<nums.length; i++){
      for(let j=i+1; j<nums.length+1; j++){
          if(nums[j] - nums[j-1] === 1){
              continue;
          } else {
              const subArr = nums.slice(i, j);
              maxWindow = Math.max(maxWindow, subArr.length);
              i = j;
          }
      }
  }
  return maxWindow;
};