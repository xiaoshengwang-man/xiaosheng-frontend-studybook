/**
 * @param {number} k
 * @return {number}
 */
 var getKthMagicNumber = function(k) {
  let arr = [];
  arr[0] = 1;
  let k3 = 0, k5 = 0, k7 = 0;
  while(arr.length < k){
      let temp = 3 * arr[k3];
      temp = Math.min(temp, 5 * arr[k5]);
      temp = Math.min(temp, 7 * arr[k7]);
      if(temp == 3 * arr[k3]) k3++;
      if(temp == 5 * arr[k5]) k5++;
      if(temp == 7 * arr[k7]) k7++;
      arr.push(temp);
  }
  return arr[k - 1];
};