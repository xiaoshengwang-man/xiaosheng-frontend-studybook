var deleteNode = function (head, val) {
  if (!head) return head;
  let hair = new ListNode(-1, head);
  let cur = hair;
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
      return hair.next;
    }
    cur = cur.next;
  }
  return null;
};
