class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function createLinkedList(arr) {
  if (arr.length == 0) return;

  let head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}

function printList(head) {
  if (!head) return [];

  let arryalist = [];

  let current = head;

  while (current) {
    arryalist.push(current.value);
    current = current.next;
  }
  return arryalist;
}

console.log(createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(reorderList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function reorderList(arr) {
  let head = createLinkedList(arr);
  if (!head.next || !head.next.next) return;

  let fast = head;
  let slow = head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let second = slow.next;
  slow.next = null;

  let prev = null;

  while (second.next) {
    let next = second.next;
    second.next = prev;

    prev = second;
    second = next;
  }
  second = prev;

  let first = head;

  while (second) {
    let temp1 = first.next;
    let temp2 = second.next;

    first.next = second;
    second.next = temp1;

    first = temp1;
    second = temp2;
  }

  return printList(head);
  //   return head;
}
