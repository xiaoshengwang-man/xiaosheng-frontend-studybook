// 自行实现版本
function insertion_sort(arr) {
  for(let i =1; i <arr.length; i++){
    let j = i;
    while (arr[j] < arr[j-1]) {
      let temp = arr[j];
      arr[j] = arr[j-1];
      arr[j-1] = temp;
      j--
    }
  }
}

let arr = [3, 1, 4, 5, 9, 10];
insertion_sort(arr);
console.log(arr);