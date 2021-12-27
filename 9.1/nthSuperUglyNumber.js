var nthSuperUglyNumber = function (n, primes) {
  let len = primes.length;
  let logs = new Array(len).fill(0),
    fn = [1];
  if (n < 2) {
    return fn[n - 1];
  }
  for (let i = 1; i < n; i++) {
    let next = fn[logs[0]] * primes[0];
    for (let j = 1; j < len; j++) {
      next = Math.min(fn[logs[j]] * primes[j], next);
    }
    for (let k = 0; k < len; k++) {
      if (next === fn[logs[k]] * primes[k]) {
        logs[k]++;
      }
    }

    fn.push(next);
  }

  return fn[n - 1];
};
