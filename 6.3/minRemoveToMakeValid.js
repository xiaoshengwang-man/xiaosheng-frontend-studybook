/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
  let del = [];
  let ss = [];
  for(let i = 0; i < s.length; i++){
      if(s[i] == '('){
          ss.push(i);
      }else if(s[i] == ')'){
          if(ss.length == 0) {
              del.push(i)
          }else{
              ss.pop();
          }
      }
  }
  let ret = '';
  while(ss.length) del.push(ss.pop());
  for(let i = 0; i < s.length; i++){
      if(del.indexOf(i) == -1){
          ret += s[i]
      }
  }
  return ret;
};