var equationsPossible = function(equations) {
  const  noequal=[]
  const equals = new Quickfind()
  for( const ra of equations){
      /* 这里写成ra[1]==='!'是不是更好 但是下面更通用*/
      if(ra.includes('!')){
          noequal.push(ra)
      }else {
          const [a,b] = [ra.charCodeAt(0)-97, ra.charCodeAt(3)- 97]
          equals.merge(a,b)
      }
  }
  // console.log(equals, noequal)

  for( const [a,c,d,b] of noequal){
      if(equals.find(a.charCodeAt(0) -97) === equals.find(b.charCodeAt(0)-97)){

          return false
      }
  }
  return true 

};
class Quickfind{
  constructor(){
      this.fa = new Array(26).fill(97).map((v,i)=> v + i)
      
  }

  find(x){
      return this.fa[x]
  }
  merge(a, b){
      /* 这里也可以记录各集合元素数 优化合并， 不过这题最多也就26个 */
      const [ca,cb] = [this.fa[a], this.fa[b]]
      if(ca ===cb){ return}
      for(let i =0 ; i< 26;i++){
          this.fa[i] === cb &&(this.fa[i] = ca)
      }

  }
}