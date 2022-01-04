var removeStones = function(stones) {
  const n=stones.length
 const set = new unionSet(n)
 for( let i = 0; i< n;i++){
     const [x1,y1] = stones[i]
     for(let j = 0; j< n;j++){
     const [x2,y2] = stones[j]
     if( i!==j && x1===x2 || y2===y1){
         set.merge(i,j)
     }
 }   
 }
 return set.n
};
class unionSet{
  constructor(n){
      this.boss = new Array(n).fill(0).map((v,i)=> i)
      this.size =  new Array(n).fill(1)
      this.n = 0// 合并集合的次数
  }
  merge(a,b){
      let ba = this.find(a),bb = this.find(b)
      if(ba === bb ) return 
      this.size[a] <this.size[b]? this.boss[ba] = bb: this.boss[bb] = ba ;
      this.n ++
  }
  find(x){
      return this.boss[x] = (this.boss[x] === x? x: this.find(this.boss[x]) )
  }
}