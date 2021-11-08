// 自己想的，不完美
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  var swich = function (listA, listB) {
    let a = listA,
      b = listB
    while (a != b) {
      a = a.next;
      b = b.next;
    }
    return a;
  }
  if (headA === null || headB === null) return null;
  let n = 1,
    p = headA;
  while (p.next) {
    p = p.next;
    n += 1;
  }
  let m = 1;
  q = headB;
  while (q.next) {
    q = q.next;
    m += 1;
  }
  if (n > m) {
    let c = n - m;
    p = headA;
    while (c--) p = p.next;
    return swich(p, headB)
  } else if (n < m) {
    let c = m - n;
    q = headB;
    while (c--) q = q.next;
    return swich(headA, q)
  } else {
    return swich(headA, headB)
  }
}