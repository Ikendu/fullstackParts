export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export function createList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    let node = new ListNode(arr[i]);
    current.next = node;
    current = current.next;
  }
  return head;
}

export function printList(head) {
  if (!head) return null;

  while (head) {
    console.log(head.val);
    head = head.next;
  }
}

function insertFirst(head, value) {
  if (!head) head = new ListNode(value);
  else {
    let node = new ListNode(value);
    node.next = head;
    head = node;
  }
  return head;
}

function deleteFirst(head) {
  if (!head) return null;
  return head.next;
}

function insertEnd(head, value) {
  let node = new ListNode(value);
  if (!head) {
    return node;
  }
  let current = head;

  while (current.next) {
    current = current.next;
  }
  current.next = node;
  return head;
}

function searchValue(head, value) {
  if (!head) return false;

  while (head) {
    if (head.val === value) return true;
    head = head.next;
  }
  return false;
}

function deleteLast(head) {
  if (!head || !head.next) return null;

  let current = head.next;
  let temp = head;
  while (current.next) {
    current = current.next;
    temp = temp.next;
  }
  temp.next = null;
  return head;
}
// OR
function deleteLastNode(head) {
  if (!head || !head.next) return null;

  let current = head;

  while (current.next.next) {
    current = current.next;
  }
  current.next = null;

  return head;
}

function reverseList(head) {
  if (!head || !head.next) return head;

  let current = head;
  let prev = null;

  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
}

let list = createList([3, 4, 6, 8, 10, 5]);

list = insertEnd(list, 25);
// console.log(searchValue(list, 25));
deleteLast(list);
deleteLastNode(list);
// printList(list);
