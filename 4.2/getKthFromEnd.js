var getKthFromEnd = function (head, k) {
  let fakerHead = new ListNode(0);
  fakerHead.next = head;
  let p = fakerHead,
    q = fakerHead.next;
  while (k--) {
    q = q.next;
  }
  while (q) {
    p = p.next;
    q = q.next
  }
  return p.next;
};