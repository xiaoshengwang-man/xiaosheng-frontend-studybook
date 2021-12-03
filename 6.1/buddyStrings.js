/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var buddyStrings = function(s, goal) {
  if(s.length != goal.length) return false;
  if(s == goal){
      let map = [];
      for(let i of s){
          if(map[i] == undefined){
              map[i] = 1;
          }else{
              return true;
          }
      }
      return false
  }
  let i = 0, j;
  while(s[i] == goal[i]) i++;
  j = i + 1;
  while(j < s.length && s[j] == goal[j]) j++;
  if(j == s.length) return false;
  if(s[i] != goal[j] || s[j] != goal[i]) return false;
  j += 1;
  while(j < s.length) {
      if(s[j] != goal[j]) return false;
      j++;
  }
  return true;
};