/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
  let ans = [];
  for(let s of ops){
      if(s == 'D'){
          let score = ans[ans.length - 1];
          ans.push(score * 2);
      }else if(s == 'C'){
          ans.pop();
      }else if(s == '+'){
          let a = ans[ans.length - 1];
          let b = ans[ans.length - 2];
          ans.push(Number(a) + Number(b));
      }else{
         ans.push(Number(s));
      }
  }
  return ans.reduce((sum,i)=>sum+ i);
};