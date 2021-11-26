/**
 * @param {string} s
 * @return {number}
 */
// 1.会有两位数的情况，需要用n来处理数字，遇到操作符时才push
// 2.先拿出的是运算后面的数字，疏忽了
var lever = function (ops) {
  switch (ops) {
    case '@':
      return -1;
    case '+':
    case '-':
      return 1;
    case '*':
    case '/':
      return 2;
  }
  return 0;
}
var calc = function (a, ops, b) {
  switch (ops) {
    case '+':
      return parseInt(a) + parseInt(b);
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return Math.floor(a / b);
  }
  return 0;
}
var calculate = function (s) {
  let num = [];
  let ops = [];
  s += '@';
  for (let i = 0, n = 0; i < s.length; i++) {
    if (s[i] == ' ') continue;
    if (lever(s[i]) === 0) {
      n = n * 10 + parseInt(s[i]);
      continue;
    }
    num.push(n);
    n = 0;
    while (ops.length > 0 && lever(s[i]) <= lever(ops[ops.length - 1])) {
      let b = num[num.length - 1];
      num.pop();
      let a = num[num.length - 1];
      num.pop();
      num.push(calc(a, ops[ops.length - 1], b));
      ops.pop();
    }
    ops.push(s[i]);
  }
  return num[0];
};