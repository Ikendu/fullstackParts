const { createList, ListNode, printList } = require("./listStructure");
// Remove Linked List Elements
// Given the head of a linked list and an integer val,
// remove all the nodes of the linked list that has Node.val == val,
//  and return the new head.

function removeListElement(head, value) {
  if (!head) return head;

  let dummy = new ListNode(0);
  dummy.next = head;

  let temp = head;
  let current = dummy;

  while (current.next) {
    if (current.next.val === value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
}

let list = createList([6, 6, 6, 1, 6, 2, 6, 3, 4, 5, 6, 6]);
let result = removeListElement(list, 6);
printList(result);
