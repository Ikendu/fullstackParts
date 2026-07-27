const { buildTree } = require("../tree/treeMaxDepth");
const { ListNode, createList, printList } = require("./listStructure");

// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// return true if cycle exist or false if not

// Using Floyd's Cycle Detection algorithm
function hasCycle(head) {
  if (!head) return false;

  let fast = head;
  let slow = head;

  while (!fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
}

// Using Map() method
function hasCycle(head) {
  if (!head) return false;

  let map = new Map();

  while (head) {
    if (map.has(head)) return true;
    else map.set(head, 1);
  }
  return false;
}

// If there is Cycle return the node where it start
// Using Floyd Cycle Detection Algorithm
function getCycle(head) {
  if (!head) return null;

  let fast = head;
  let slow = head;

  while (!fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let pointer = head;
      while (pointer !== slow) {
        pointer = pointer.next;
        slow = slow.next;
      }
      return pointer;
    }
  }
  return null;
}

// The map or set method is the same as the first one return true or false

