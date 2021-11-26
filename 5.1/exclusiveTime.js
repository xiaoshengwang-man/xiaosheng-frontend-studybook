/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
// pre记录上一个位置，vID是记录当前程序
var exclusiveTime = function (n, logs) {
    let ret = [];
    let vID = [];
    for (let i = 0, pre = 0; i < logs.length; i++) {
        let arr = logs[i].split(':');
        let id_str = parseInt(arr[0]);
        let status = arr[1];
        let time_str = parseInt(arr[2]);
        if (status === 'start') {
            if (ret[id_str] === undefined) {
                ret[id_str] = 0;
            }
            if (vID.length !== 0) {
                ret[vID[vID.length - 1]] += time_str - pre;
            }
            pre = time_str;
            vID.push(id_str);
        }
        if (status === 'end') {
            ret[vID[vID.length - 1]] += time_str - pre + 1;
            pre = time_str + 1;
            vID.pop();
        }
    }
    return ret;
};