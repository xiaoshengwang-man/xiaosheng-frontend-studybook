function selection_sort(arr) {
  for(let i =0; i <arr.length-1; i++){
      let minIndex = i;
      for (let j = i+1; j < arr.length; j++) {
          if(arr[j] < arr[minIndex]){
            minIndex = j
          } 
      }
      if(minIndex !== i){
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
  }
}

let arr = [3, 1, 4, 5, 9, 10];
selection_sort(arr);
console.log(arr);