/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function(tasks, n) {
  let cnt = [];
  for(let i = 0; i < tasks.length; i++){
      if(cnt[tasks[i].charCodeAt() - 65] == undefined){
          cnt[tasks[i].charCodeAt() - 65] = 1;
      }else{
          cnt[tasks[i].charCodeAt() - 65] += 1;
      }  
  }
  let max = 0;
  for(let i of cnt){
      if(i > max) max = i;
  }
  let m = 0;
  for(let i of cnt){
      if(i == max) m++;
  }
  return Math.max((max - 1) * (n + 1) + m, tasks.length);
};