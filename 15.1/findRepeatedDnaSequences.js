var findRepeatedDnaSequences = function(s) {
  const L = 10;
  const ans = [];
  const cnt = new Map();
  const n = s.length;
  for (let i = 0; i <= n - L; ++i) {
      const sub = s.slice(i, i + L)
      cnt.set(sub, (cnt.get(sub) || 0) + 1);
      if (cnt.get(sub) === 2) {
          ans.push(sub);
      }
  }
  return ans;
};