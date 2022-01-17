var deepestLeavesSum = function(root) {
  if(!root) return 0;
  let arr=[];//用来保存层序遍历的结果 最后形式：[[第一层的],[第二层的],[第三层的]]
  let temp=[root];//临时数组，保存每层节点
  let node;//后面从temp弹出节点的时候用来接收的变量
  while(temp.length!=0){
      let templen=temp.length;//提前保存这时的temp长度，因为下面的循环里面，temp会被塞进新元素，长度会变
      arr.push([]);
      for(let i=0;i<templen;i++){
          node=temp.shift();
          arr[arr.length-1].push(node);
          node.left&&temp.push(node.left);
          node.right&&temp.push(node.right);
      }
  }
  let lastlayer=arr[arr.length-1];
  let sum=0;
  for(let i=0;i<lastlayer.length;i++){
      sum+=lastlayer[i].val;
  }
  return sum;

};