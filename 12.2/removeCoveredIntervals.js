var removeCoveredIntervals = function(intervals) {
  intervals.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
  const len = intervals.length
  let n = 1
  for(let i = 1; i < len; i++) {
    if(intervals[i][1] > intervals[i - 1][1])  {
      n++
    } else {
      intervals[i] = intervals[i - 1]
    }
  }
  return n
};