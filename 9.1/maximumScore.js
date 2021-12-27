var maximumScore = function (a, b, c) {
  /* 得先找最大值 */
  let max = Math.max(a, b, c);
  const sum = a + b + c;
  let maxScore = sum >> 1;
  /* diff= max - (sum -max) */
  let diff = 2 * max - sum;
  /*  */
  if (diff > 0) {
    return max - diff;
    // return b+c
  }
  return maxScore;
};
