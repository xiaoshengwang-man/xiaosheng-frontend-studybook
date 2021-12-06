/*自己想的4层循环
1.控制gap的递减
2.循环gap,因为gap是几就分为了几组数
3.每组数用普通插入排序，控制插入排序需要执行几次
4.每个数和它前面的数字进行比较
但不需要4次排序，3次就可以了，不需要进行分组，因为从gap开始的每个数都要和前面每个gap间隔的数进行比较
注意，条件gap要>=1,不能是>0
教程中之所以是>0，是因为java本身，整数型相除还是整数型，0.X会自动转0
*/
//自己想的4层循环
// function shell_sort(arr) {
//   for(let gap = Math.ceil(arr.length/2);gap >=1;gap /= 2){
//     for(let time = 0 ;time < gap;time++){   
//       for(let i = time; i <arr.length; i+=gap){
//         for (let j = i; j > gap-1 && arr[j] < arr[j-gap]; j-=gap) {
//           let temp = arr[j];
//           arr[j] = arr[j-gap];
//           arr[j-gap] = temp; 
//         }
//       }
//     }
//   }
// }
//希尔排序第一个版本，gap取长度一半依次递减
function shell_sort_v1(arr) {
  for(let gap = Math.floor(arr.length/2);gap >=1;gap = Math.floor(gap / 2)){
    for(let i = gap; i <arr.length; i++){
      for (let j = i; j > gap-1 && arr[j] < arr[j-gap]; j-=gap) {
        let temp = arr[j];
        arr[j] = arr[j-gap];
        arr[j-gap] = temp; 
      }
    }
  }
}
//Knuth序列
//h=1
//h=3*h+1
function shell_sort_v2(arr) {
  let h = 1;
  while(h<=arr.length/3){
    h = h*3+1;
  }
  for(let gap = h;gap >=1;gap = (gap-1)/3){
    for(let i = gap; i <arr.length; i++){
      for (let j = i; j > gap-1 && arr[j] < arr[j-gap]; j-=gap) {
        let temp = arr[j];
        arr[j] = arr[j-gap];
        arr[j-gap] = temp; 
      }
    }
  }
}


let arr = [9,6,11,3,5,12,8,7,10,15,14,4,1,13,2];
shell_sort_v2(arr);
console.log(arr);