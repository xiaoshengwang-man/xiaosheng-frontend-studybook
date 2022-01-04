var findCircleNum = function(isConnected) {
  let n = isConnected.length, repeat = 0;
  let log = new Array(n).fill(0)
 let  province = new  Unionset(n)
  for(let i = 0; i < n ; i++){
      for(let j = 0; j< n ;j++){
          if(i !==j&& isConnected[i][j]){
              province.merge(i,j)
          } 
      }
  }
  return province.n ;



};

class Unionset{
  constructor(n){
      this.fa =new Array(n+1).fill(0).map((v,i)=> i)
      this.n = n

  }
  find(x){
      while(x !== this.fa[x]){
          x = this.fa[x]
      }
      return this.fa[x]
  }
  merge(a,b){
      const [fa,fb] = [this.find(a), this.find(b)]
      if( fa === fb)return 
      /* 把a的上级挂在b的上级下面 */
      this.fa[fa]  = fb
      this.n-- ;
  }
}
