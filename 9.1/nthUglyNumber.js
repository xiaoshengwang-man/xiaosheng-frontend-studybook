var nthUglyNumber = function (n) {
  let i = 0,
    j = 0,
    k = 0,
    min,
    dp = [];
  // dp[i]: 第i个丑数
  dp[0] = 1;
  while (--n) {
    min = Math.min(dp[i] * 2, dp[j] * 3, dp[k] * 5);
    if (min == dp[i] * 2) i++;
    if (min == dp[j] * 3) j++;
    if (min == dp[k] * 5) k++;
    dp.push(min);
  }
  return dp.pop();
};
