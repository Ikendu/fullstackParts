// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the
// nodes of the first two lists.

const { createList, ListNode, printList } = require("./listStructure");

function mergeList(list1, list2) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      current = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      current = list2;
      list2 = list2.next;
    }
  }
  current.next = list1 ? list1 : list2;

  return dummy.next;
}

let list1 = createList([1, 2, 4]);
let list2 = createList([1, 3, 4]);

printList(mergeList(list1, list2));
