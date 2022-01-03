class QuickUnion {
  constructor(n) {
    this.fa = []
    this.family = []
    for (let i = 0; i <= n; i++) {
      this.fa[i] = i
      this.family[i] = [i]      
    }
  }
  get(x) { 
    return this.fa[x] = (this.fa[x] === x ? x : this.get(this.fa[x]))
  }
  merge(a, b) {
    if(this.get(a) === this.get(b)) return ;
    this.family[this.get(b)] = this.family[this.get(b)].concat(this.family[this.get(a)])
    this.family[this.get(a)] = []
    this.fa[this.get(a)] = this.get(b)
  }
}
var smallestStringWithSwaps = function(s, pairs) {
  let u = new QuickUnion(s.length)
  for (const p of pairs) {
    let x = p[0]
    let y = p[1]
    u.merge(x, y)
  }
  let ret = []
  for (const i in s) {
    if(u.get(i) == i) {
      if (u.family[i].length == 1) ret[i] = s[i];
      let sort_ind = u.family[i].sort((a, b) => a - b)
      let strArr = []
      sort_ind.forEach(ind => strArr.push(s[ind]))
      strArr.sort()
      for (const i in strArr) {
        ret[sort_ind[i]] = strArr[i]
      }
    }
  }
  return ret.join('')
};