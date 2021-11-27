/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null) return null;
  let ret = new ListNode(0, head),
    p = ret,
    q;
  while (p.next) {
    if (p.next.next && p.next.val === p.next.next.val) {
      q = p.next.next;
      while (q && q.val === q.next.val) {
        q = q.next;
      }
      p.next = q.next;
    } else {
      p = p.next
    }
  }
  return ret.next;
};