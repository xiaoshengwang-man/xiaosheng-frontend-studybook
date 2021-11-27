/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverse = function (head, n) {
  if (n == 1) return head;
  let p = reverse(head.next, n - 1);
  let tail = head.next;
  head.next = tail.next;
  tail.next = head;
  return p;
}
var reverseBetween = function (head, left, right) {
  let ret = new ListNode(0, head),
    p = ret;
  let cnt = right - left + 1;
  while (--left) {
    p = p.next;
  }
  p.next = reverse(p.next, cnt);
  return ret.next;
};