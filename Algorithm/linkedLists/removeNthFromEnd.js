const { ListNode, printList, createList } = require("./listStructure");

function removeNthNode(head, n) {
  if (!head) return null;

  let fast = head;
  let newList = new ListNode(0);
  newList.next = head;
  let slow = newList;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;

  return newList.next;
}

let list = createList([1, 2, 3, 4, 5]);
let remains = removeNthNode(list, 3);
console.log(printList(remains));
