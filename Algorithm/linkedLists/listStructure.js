class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function createList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    let node = new ListNode(arr[i]);
    current.next = node;
    current = current.next;
  }
  return head;
}

function printList(head) {
  while (head) {
    console.log(head.val);
    head = head.next;
  }
}

let list = createList([3, 4, 6, 8, 10, 5]);
printList(list);

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
    current.next = node;
  }
  return head;
}
