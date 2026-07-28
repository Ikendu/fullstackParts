// Given a linked list, swap every two adjacent nodes and return its head.
// You must solve the problem without modifying the values in the list's nodes
// (i.e., only nodes themselves may be changed.)

const { createList, printList, ListNode } = require("./listStructure");

function swapNodes(head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  while (prev.next && prev.next.next) {
    let first = prev.next;
    let second = first.next;

    first.next = second.next;
    second.next = first;
    prev.next = second;

    prev = first;
  }
  return dummy.next;
}

// Using Recursion
function nodeSwapper(head) {
  if (!head || !head.next) return head;

  let first = head;
  let second = head.next;

  first.next = nodeSwapper(second.next);
  second.next = first;

  return second;
}

let head1 = createList([1, 2, 3, 4]);
let head2 = createList([1, 2, 3]);
let head3 = createList([10, 20, 30, 40, 50, 70]);

let swaped = nodeSwapper(head3);
console.log(printList(swaped));
