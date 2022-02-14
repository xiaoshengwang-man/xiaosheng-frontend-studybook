var minDeletions = function (s) {
  let hash = new Map()
  let res = 0
  for (let i of s) {
      hash.get(i) ? hash.set(i, hash.get(i) + 1) : hash.set(i, 1)
  }
  hash = [...hash].sort((a, b) => a[1] - b[1])
  for (let i = 1; i < hash.length; i++) {
      if (hash[i][1] <= hash[i - 1][1] && hash[i - 1][1] != 0) {
          hash[i - 1][1] = hash[i - 1][1] - 1
          res++
          i = 0
      }
  }
  return res
};