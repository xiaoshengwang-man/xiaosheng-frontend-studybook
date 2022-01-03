var maxSlidingWindow = function(nums, k) {
      var n = nums.length;
      var queue = [];
      var maxn = [];
      for (var i = 0; i < n; i++){
          while (nums[queue[queue.length - 1]] <= nums[i]) {
              queue.pop();
          }
          queue.push(i);
          if(queue[0] <= i-k){
              queue.shift();
          }
          if(i >= k-1){
              maxn.push(nums[queue[0]]);
          }
      }
      return maxn;
  };
