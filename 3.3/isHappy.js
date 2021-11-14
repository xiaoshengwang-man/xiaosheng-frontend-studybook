/**
 * @param {number} n
 * @return {boolean}
 */
var getNext = function (x) {
  let z = 0;
  while (x) {
    z += (x % 10) * (x % 10)
    x = Math.floor(x / 10);
  }
  return z;
}

var isHappy = function (n) {
  let p = n,
    q = n;
  do {
    p = getNext(p);
    q = getNext(getNext(q));
  } while (p != q && q != 1);
  return q == 1;
};