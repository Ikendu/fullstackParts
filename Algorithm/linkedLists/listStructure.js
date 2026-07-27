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


