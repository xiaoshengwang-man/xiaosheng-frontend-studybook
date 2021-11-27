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
  if (head === null) return null;
  let pre = null,
    cur = head,
    p = head.next;
  while (cur) {
    cur.next = pre;
    pre = cur;
    (cur = p) && (p = p.next);
  }
  return pre;
};

var reverseList = function (head) {
  if (head === null || head.next === null) return head;
  let p = reverseList(head.next);
  let tail = head.next;
  head.next = tail.next;
  tail.next = head;
  return p;
};