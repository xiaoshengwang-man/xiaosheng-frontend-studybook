/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let r1 = new ListNode(),
    r2 = new ListNode(),
    p1 = r1,
    p2 = r2,
    p = head,
    q;
  while (p) {
    q = p.next;
    if (p.val < x) {
      p.next = p1.next;
      p1.next = p;
      p1 = p1.next;
    } else {
      p.next = p2.next;
      p2.next = p;
      p2 = p2.next;
    }
    p = q;
  }
  p1.next = r2.next;
  return r1.next;
};
