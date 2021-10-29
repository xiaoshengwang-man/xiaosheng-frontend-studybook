function bubble_sort(arr) {
  for(let i =1; i <arr.length; i++){
      for (let j = 0; j < arr.length-i; j++) {
          if(arr[j]>arr[j+1]){
              let temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
          } 
      }
  }
}

let arr = [3, 1, 4, 5, 9, 10];
bubble_sort(arr);
console.log(arr);