/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return head;
    let p = head;
    while (p) {
        let q = new Node(p.val);
        q.random = p.random;
        q.next = p.next;
        p.next = q;
        p = p.next.next;
    }
    p = head.next;
    while (p) {
        if (p.random) p.random = p.random.next;
        (p = p.next) && (p = p.next);
    }
    let ret = head.next;
    p = head;
    while (p) {
        let q = p.next;
        p.next = q.next;
        if (p.next) q.next = p.next.next;
        p = p.next
    }
    return ret;

};