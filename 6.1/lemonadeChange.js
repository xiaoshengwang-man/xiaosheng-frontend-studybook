/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
  let cnt5 = 0, cnt10 = 0;
  for(let i = 0; i < bills.length; i++){
      switch(bills[i]){
          case 5:
              cnt5 += 1;
              break;
          case 10:
              if(cnt5 == 0) return false;
              cnt10 += 1;
              cnt5 -= 1;
              break;
          case 20:
              if(cnt10 > 0 && cnt5 > 0){
                  cnt10 -= 1;
                  cnt5 -= 1;
              }else if(cnt5 >= 3){
                  cnt5 -= 3;
              }else{
                  return false
              }
              break;
      }
  }
  return true;
};