var merge = function(A, m, B, n) {
  A.splice(m, A.length - m, ...B);
  A.sort((a, b) => a - b);
};