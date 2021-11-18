/**
 * @param {number[]} prices
 * @return {number}
 */
// 这种算法时间复杂度太长，不行
var maxProfit = function (prices) {
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        for (let j = 0; j < i; j++) {
            if (prices[i] - prices[j] > max) {
                max = prices[i] - prices[j]
            }
        }
    }
    return max;
};