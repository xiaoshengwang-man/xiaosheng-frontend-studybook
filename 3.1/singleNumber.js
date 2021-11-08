/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var newnums = nums.reduce(function (total, item) {
        if (total[item] === undefined) {
            total[item] = 1;
        } else {
            total[item]++
        }
        return total;
    }, {});
    let num;
    Object.keys(newnums).forEach((item) => {
        if (newnums[item] === 1) {
            num = item
        }
    })
    return num
};