/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) return false;
  var p = q = head;
  do {
    p = p.next
    q = q.next.next
  } while (q && q.next && p !== q);
  return p === q
};