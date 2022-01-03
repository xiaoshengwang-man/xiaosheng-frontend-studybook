class QuickUnion {
  constructor(n) {
    this.fa = []
    for (let i = 0; i <= n; i++) {
      this.fa[i] = i      
    }
  }
  get(x) { 
    return this.fa[x] = (this.fa[x] === x ? x : this.get(this.fa[x]))
  }
  merge(a, b) {
    this.fa[this.get(a)] = this.get(b)
  }
}
// 上面代码封装一个并查集，下面是解题
var numIslands = function(grid) {
  // m 列 用于计算编号
  let m = grid[0].length;
  let arr = grid.flat();
  let len = arr.length;
  let u = new QuickUnion(len);
  for (let i = 0; i < len; i++) {
    if(arr[i] === '0') continue;
    // 判断连通上边
    if(i >= m && arr[i - m] === '1') u.merge(i, i - m);
    // 判断连通左边
    if(i % m && arr[i - 1] === '1') u.merge(i , i  - 1);
  }

  let ans = 0;
  for (let i = 0; i < len; i++) {
    if(arr[i] === '1' && u.get(i) === i) ans += 1;      
  }
  return ans;
};