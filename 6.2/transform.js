/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var transform = function(arr, S){
  for(let s of S){
      if(s == '#' && arr.length){
          arr.pop();
      }else{
          arr.push(s);
      }
  }
  return arr.join('');
}
var backspaceCompare = function(s, t) {
  let sarr = [];
  let tarr = [];
  return transform(sarr,s) == transform(tarr,t);
};
