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
// k个节点走k步，倒数k个节点从k步开始走
var swapNodes = function (head, k) {
    //遍历链表
    let h = head;
    //定位第k个节点
    let first = head;
    //定位倒数第k个节点
    let last = head;
    //计数
    let count = 1;
    while (h !== null) {
        if (count < k) {
            first = first.next;
        }
        if (count > k) {
            last = last.next;
        }
        count++;
        h = h.next;
    }
    count = first.val;
    first.val = last.val;
    last.val = count;
    return head;
};