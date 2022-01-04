var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while(left < right){
      let Area = Math.min(height[left],height[right]) * (right - left);
     
      if(height[left] < height[right]){
          left++;
      }else{
          right--;
      }
      maxArea = Math.max(Area,maxArea);
  }
  return maxArea;
};
