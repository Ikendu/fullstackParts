// Create a LinkedList
// function ListNode(val, next) {
//   this.val = val || 0;
//   this.next = next || null;
// }
// OR
class ListNode {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }
}

// Create Linked List from Array
function createList(arr) {
  let head = new ListNode(arr[0]);
  let created = head;

  for (let i = 0; i < arr.length; i++) {
    head.next = new ListNode(arr[i]);
    head = head.next;
  }

  return created;
}

// Print the list
function printList(list) {
  let myarr = [];

  while (list) {
    myarr.push(list.val);
    list = list.next;
  }
  return myarr;
}

// Remove nth Node of a list from the back
function removeNthNode(head, n) {
  //   if (!head || !head.next) return null;
  let newList = new ListNode(0);
  let temp = head;
  let count = 0;

  while (temp) {
    count++;
    temp = temp.next;
  }
  let before = count - n;

  temp = newList;

  temp.next = head;
  while (before > 0) {
    temp = temp.next;
    head = head.next;
    before--;
  }
  temp.next = head.next;

  return newList.next;
}

let created = createList([1, 2, 3, 4, 5, 6]);

console.log(printList(created));

let removed = removeNthNode(created, 1);
console.log(printList(removed));
