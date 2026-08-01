const { createList, printList, ListNode } = require("./listStructure");

// Given the head of a sorted linked list, delete all duplicates such that each
// element appears only once. Return the linked list sorted as well.
// Input: head = [1, 1, 2, 3, 3];
// Output: [1, 2, 3];
function removeDuplicated(head) {
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else current = current.next;
  }
  return head;
}

// let list = createList([1, 1, 2, 3, 3]);
// let result = removeDuplicated(list);
// // console.log(result);
// printList(result);

// Given the head of a sorted linked list, delete all nodes that have duplicate numbers,
// leaving only distinct numbers from the original list. Return the linked list sorted as well.
// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

function removeBothDuplicate(head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;

  while (current.next && current.next.next)
    if (current.next.val === current.next.next.val) {
      let dup = current.next.val;
      while (current.next && dup === current.next.val) {
        current.next = current.next.next;
      }
    } else {
      current = current.next;
    }
  return dummy.next;
}

let list = createList([1, 7, 3, 3, 4, 4, 5]);
let result = removeBothDuplicate(list);
printList(result);
