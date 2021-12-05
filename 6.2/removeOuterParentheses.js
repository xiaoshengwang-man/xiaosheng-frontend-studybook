/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
  let ret = '', count = 0, pre = -1;
  for(let i = 0; i < s.length; i++){
      if(pre == -1) pre = i;
      if(s[i] == '(') {
          count++
      }else{
          count--
      }
      if(count == 0){
          ret += s.slice(pre + 1, i);
          pre = -1;
      }
  }
  return ret
};