// You are given the head of a linked list.
// Remove every node which has a node with a greater value anywhere to the right side of it.
// Return the head of the modified linked list.
// Input: head = [5,2,13,3,8]
// Output: [13,8]
// Explanation: The nodes that should be removed are 5, 2 and 3.
// - Node 13 is to the right of node 5.
// - Node 13 is to the right of node 2.
// - Node 8 is to the right of node 3.

const { createList, printList } = require("./listStructure");

function removeLessNode(head) {
  function reverseList(head) {
    let curr = head;
    let prev = null;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }

  let final = reverseList(head);

  let current = final;

  while (current) {
    while (current.next && current.val > current.next.val) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  final = reverseList(final);

  return final;
}

list = createList([5, 2, 13, 3, 8]);
printList(removeLessNode(list));
