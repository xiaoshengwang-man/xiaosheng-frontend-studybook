var rangeSum = function (nums, n, left, right) {
    let array = [];
    for (var i = 0; i < nums.length; i++) {
        array.push(nums[i]);
        let temp = nums[i];
        for (var j = i + 1; j < nums.length; j++) {
            temp = temp + nums[j];
            array.push(temp);
        }
    }
    array = array.sort((a, b) => a - b);
    let count = 0;
    for (; left <= right; left++) {
        count = (count + array[left - 1]) % 1000000007;
    }
    return count;
};