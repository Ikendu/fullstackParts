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

// let list = createList([1, 7, 3, 3, 4, 4, 5]);
// let result = removeBothDuplicate(list);
// printList(result);

// Remove Duplicates From an Unsorted Linked List
// You are given the head of a linked list that contains integer values.
// Your task is to identify all values that appear more than once in the linked list and completely
// remove all nodes containing those duplicate values.

function removeDupUnsorted(head) {
  let freq = new Map();
  let current = head;

  while (current) {
    freq.set(current.val, (freq.get(current.val) || 0) + 1);
    current = current.next;
  }

  let dummy = new ListNode(0);
  dummy.next = head;
  current = dummy;

  while (current.next) {
    if (freq.get(current.next.val) > 1) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  // console.log(freq);
  return dummy.next;
}

let list = createList([4, 1, 1, 2, 6, 4, 1, 3, 2, 7]);
let result = removeDupUnsorted(list);
// removeDupUnsorted(list);
printList(result);
