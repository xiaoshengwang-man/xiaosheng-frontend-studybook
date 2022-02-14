var makesquare = function (nums) {
	function backtrack(i, nums, edge, bucket) {
			if (i >= nums.length) {//递归结束条件
					return true;
			}
			for (let j = 0; j < 4; j++) {//循环4个桶
					if (bucket[j] + nums[i] > edge) {//这个桶装不下 继续找下一个桶
							continue;
					}
					bucket[j] += nums[i];//将当前元素加入桶中
					if (backtrack(i + 1, nums, edge, bucket)) {//索引i加1 继续递归下一个nums中的元素
							return true;//下一个元素能放进桶中
					}
					bucket[j] -= nums[i];//回溯状态
			}
			return false;//循环结束都没放进合适的桶 那不能构成正方形
	}

	if (nums.length < 4) {//nums长度小于4 直接不能构成正方形
			return false;
	}
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
			sum += nums[i];
	}
	if (sum % 4) {//nums的和不能整除4 不能构成正方行
			return false;
	}
	nums.sort((a, b) => b - a);//排序nums
	let bucket = Array(4).fill(0);//准备4个桶
	return backtrack(0, nums, sum / 4, bucket);//传入nums元素的索引i，nums，一个边长，和桶bucket
};