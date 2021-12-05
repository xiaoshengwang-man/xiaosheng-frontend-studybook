/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
  let s = [];
  for(let i = 0, j = 0; i < popped.length; i++){
      while(j < pushed.length && (s.length == 0 || s[s.length - 1] != popped[i])){
          s.push(pushed[j]);
          j++;
      }
      if(s[s.length - 1] != popped[i]){
          return false
      }else{
          s.pop()
      }
  }
  return true;
};