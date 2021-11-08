// 门徒
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
var reverseList = function (head) {
  if (head === null) return head;
  let pre = null;
  let cur = head;
  let p = head.next;
  while (cur) {
    cur.next = pre;
    pre = cur;
    (cur = p) && (p = p.next)
  }
  return pre;
};