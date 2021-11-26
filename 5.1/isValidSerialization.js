/**
 * @param {string} preorder
 * @return {boolean}
 */
 var isValidSerialization = function(preorder) {
  let s = [];
  for(let i = 0, j = 0; i < preorder.length; i = j + 1){
      j = i;
      while(j < preorder.length && preorder[j] != ',') ++j;
      console.log(preorder.slice(i, j))
      s.push(preorder.slice(i, j));
      let last = s.length - 1;
      while(s.length >= 3 && s[last] === '#' && s[last - 1] === '#' && s[last - 2] !== '#'){
          s[last - 2] = '#'
          s.pop();
          s.pop();
          last = s.length - 1
      }  
  }
  return s.length === 1 && s[0] === '#'
};