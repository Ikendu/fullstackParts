// 138. Copy List with Random Pointer
// https://leetcode.com/problems/copy-list-with-random-pointer/

import { ListNode } from "./listStructure";

function makecopy(head) {
  if (!head) return head;

  let current = head;
  let map = new Map();

  while (current) {
    let copy = new ListNode(current.val);
    map.set(current, copy);
    current = current.next;
  }

  current = head;
  while (current) {
    map.get(current).next = current.next ? map.get(current.next) : null;
    map.get(current).random = current.next ? map.get(current.random) : null;
    current = current.next;
  }

  return map.get(head);
}
