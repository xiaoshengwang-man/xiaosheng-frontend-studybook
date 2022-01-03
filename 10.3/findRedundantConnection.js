var findRedundantConnection = function(edges) {
    
  const union = new UnionSet(edges.length)
  for( let [a,b] of edges){
      if(union.find(a) === union.find(b)){ return [a,b]}
      union.merge(a,b)
  }
};

class UnionSet{
  constructor(n){
      /* 这题索引从1开始 */
      this.fa= new Array(n+1).fill().map((v, i) => i)
      this.size = new Array(n+1).fill(1)
      this.dec = 0;
  }
  find(x){
      return this.fa[x] === x?x:this.find(this.fa[x])
  }
  merge(a,b){
      let  [aa, bb] = [this.find(a), this.find(b)]
      if(aa === bb){ return }
      if( this.size[aa] > this.size[bb]){
          [aa, bb] =[ bb, aa]
      }
      this.fa[aa] = bb
      this.dec--;
  }
}