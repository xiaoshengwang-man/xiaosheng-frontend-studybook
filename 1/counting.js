/* 
计数排序
  非比较排序
  桶思想的一种
算法思想
  量大但是范围小

v1自行实现版本，不足处：
1.没有new和原数组长度一致的数组
2.数组是一定范围的话，是否会有空间浪费的可能，java肯定是有的
3.这样的算法是不稳定的
实现稳定方法：
1.遍历计数数组变为累加数组
目的：每一位变为排好序后的数组，该值最后一次出现的下标
2.倒序遍历原数组，把值放入累加数组对应的值既最后一次出现的下标
*/

function counting_sort_v1(arr) {
  let res = [];
  let count = [];
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]] === undefined) {
      count[arr[i]] = 1
    } else {
      count[arr[i]]++
    }
  }
  for (let j = 0; j < count.length; j++) {
    while (count[j] && count[j] > 0) {
      res.push(j);
      count[j]--;
    }
  }
  return res;
}
// 教程上不稳定实现法
function counting_sort_v2(arr, maxValue) {
  let count = new Array(maxValue + 1);

  for (let i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) {
      count[arr[i]] = 0;
    }
    count[arr[i]]++;
  }

  for (let j = 0, sortedIndex = 0; j < count.length; j++) {
    while (count[j] > 0) {
      arr[sortedIndex++] = j;
      count[j]--;
    }
  }

  return arr;
}

// 教程上稳定实现法
function counting_sort_v3(arr, maxValue) {
  let res = new Array(arr.length)
  let count = new Array(maxValue + 1);

  for (let i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) {
      count[arr[i]] = 0;
    }
    count[arr[i]]++;
  }

  // for (let j = 0, sortedIndex = 0; j < count.length; j++) {
  //   while (count[j] > 0) {
  //     arr[sortedIndex++] = j;
  //     count[j]--;
  //   }
  // }

  for (let i = 0; i < count.length; i++) {
    count[i] = (count[i] ? count[i] : 0) + (count[i - 1] ? count[i - 1] : 0)
  }

  console.log(count)

  for (let i = arr.length - 1; i >= 0; i--) {
    // 先--因为比如值是8，对应下标应该是7
    res[--count[arr[i]]] = arr[i];
  }

  return res;
}

let arr = [2, 3, 8, 7, 1, 2, 2, 8, 9];
arr = counting_sort_v3(arr, 9);
console.log(arr);