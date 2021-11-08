/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head === null) return null;
  let n = 1,
    p = head
  while (p.next) p = p.next, n += 1;
  p.next = head;
  k %= n;
  k = n - k;
  while (k--) p = p.next;
  head = p.next;
  p.next = null;
  return head;
};