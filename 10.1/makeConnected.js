var makeConnected = function(n, connections) {
  // if(connections.length < n-1){ return -1}
  let  extra= 0, unionset = new UnionSet(n)
  for( const [a,b] of connections){
      if(unionset.linked(a,b)){
          extra++
      }else {
          unionset.merge(a,b)
      }
  }
  console.log(unionset.dec, extra)

  /* 最少连接次数就等于 集合数减一 */
  n= n - unionset.dec -1
  return n<= extra?n: -1
};
class UnionSet{
  constructor(n){
      /* 这题索引从0开始 */
      this.fa= new Array(n+1).fill().map((v, i) => i)
      this.size = new Array(n+1).fill(1)
      this.dec = 0;
  }
  find(x){
      // return this.fa[x] === x?x:this.find(this.fa[x])
      /* 加上路径压缩 就是把查找的元素直接挂到根节点下面 赋值运算的返回值是 被赋值的元素的值*/
      return   this.fa[x]=(this.fa[x] === x?x:this.find(this.fa[x]))
      
  }
  linked(a,b){ return this.find(a) === this.find(b)}
  merge(a,b){
    /* 有了路径压缩还需要优化这个吗 */
      let  [aa, bb] = [this.find(a), this.find(b)]
      if(aa === bb){ return }
      /* if( this.size[aa] > this.size[bb]){
          [aa, bb] =[ bb, aa]
      } */
      this.fa[aa] = bb
      this.dec++;
  }
}