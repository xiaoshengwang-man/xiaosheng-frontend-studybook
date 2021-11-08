// 教程里先把初始值存起来，最后再赋值到合适的位置，没有一直两两交换。循环条件没有想到j>=0
function insertion_sort(arr) {
  for(let i =1; i <arr.length; i++){
    let j = i-1;
    let current = arr[i];
    while (j >= 0 && arr[j] > current) {
      arr[j+1] = arr[j--];
    }
    if(j !== i-1){
      arr[j+1] = current
    }
  }
}

let arr = [3, 1, 4, 5, 9, 10];
insertion_sort(arr);
console.log(arr);