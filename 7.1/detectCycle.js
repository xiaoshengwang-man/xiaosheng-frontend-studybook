/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function (head) {
  if (head === null || head.next === null) return null;
  let p = head,
      q = head;
  do {
      p = p.next;
      q = q.next.next;
  } while (p !== q && q && q.next);
  if (p !== q) return null;
  p = head;
  while (p !== q) {
      p = p.next;
      q = q.next;
  }
  return p
};