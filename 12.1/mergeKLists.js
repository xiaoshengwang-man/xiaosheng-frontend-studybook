var mergeKLists = function(lists) {
  //先把所有链表的值放到数组
  const arr = [];
  let node
  for(let list of lists) {
      node = list;
      while(node) {
          arr.push(node.val);
          node = node.next;
      }
  }
  //再排序
  arr.sort((a,b)=>a-b);

  //再变成链表；
  let newList = new ListNode(-1);
  node = newList;
  for(let num of arr) {
      node.next = new ListNode(num);
      node = node.next;
  }
  return newList.next;
};