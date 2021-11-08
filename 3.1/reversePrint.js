/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

var reversePrint = function (head) {
  var arr = [],
    p = head;
  while (p) {
    arr.push(p.val)
    p = p.next
  }
  return arr.reverse()
};