/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var count = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
            sum -= 1
            continue;
        }
        if (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) {
            sum -= 10
            continue;
        }
        if (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
            sum -= 100
            continue;
        }
        sum += count[s[i]];
    }
    return sum;
};