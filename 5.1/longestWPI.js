/**
 * @param {number[]} hours
 * @return {number}
 */
// 1.Object.keys(ind)返回的key是字符串，需要把数字转字符串再比较，查这个bug好费劲
// 2.超出时间限制了，以后看能不能优化
var longestWPI = function (hours) {
    let ind = {};
    let f = {};
    ind[0] = -1;
    f[0] = 0;
    let cnt = 0,
        ans = 0;
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] > 8) {
            cnt += 1;
        } else {
            cnt -= 1;
        }
        if (Object.keys(ind).indexOf(cnt + '') === -1) {
            ind[cnt] = i;
            if (Object.keys(ind).indexOf(cnt - 1 + '') === -1) {
                f[cnt] = 0;
            } else {
                f[cnt] = f[cnt - 1] + (i - ind[cnt - 1]);
            }
        }
        if (Object.keys(ind).indexOf(cnt - 1 + '') === -1) continue;
        ans = Math.max(ans, f[cnt - 1] + (i - ind[cnt - 1]));
    }
    return ans;
};