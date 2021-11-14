/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
  let sarr = new Array(26);
  let tarr = new Array(26);
  for(let i = 0; i < s.length; i++){
      sarr[s[i].charCodeAt() - 97] ? sarr[s[i].charCodeAt() - 97]++ : sarr[s[i].charCodeAt() - 97] = 1;
      tarr[t[i].charCodeAt() - 97] ? tarr[t[i].charCodeAt() - 97]++ : tarr[t[i].charCodeAt() - 97] = 1;
  }
  for(let i = 0; i < sarr.length; i++){
      if(sarr[i] != tarr[i]) return false;
  }
  return true;
};