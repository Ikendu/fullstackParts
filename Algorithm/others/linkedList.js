// Create a Node of a LinkedList
class Node {
  constructor(value, next = null) {
    this.value = value || 0;
    this.next = next || null;
  }
}
// Transform array to a LinkedList
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

// print array of linked list
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

function reorderList(arr) {
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

  return head;
}

// let head = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// console.log(head);
// reorderList(head);

// Just pass the head after re-ordering, The list is internally reordered and saved
// let list = printList(head);

// console.log(list);

// Merge k number of sorted list
function mergeKSortedList(lists) {
  if (!lists || lists.length < 1) return null;

  while (lists.length > 1) {
    let temp = [];

    for (let i = 0; i < lists.length; i += 2) {
      let s1 = lists[i];
      let s2 = i + 1 < lists.length ? lists[i + 1] : null;

      let mergedList = merge(s1, s2);
      temp.push(mergedList);
    }
    lists = temp;
  }

  return lists[0];

  // Function for merging Lists
  function merge(s1, s2) {
    let node = new Node();
    let newList = node;

    while (s1 && s2) {
      if (s1.value < s2.value) {
        node.next = s1;
        s1 = s1.next;
      } else {
        node.next = s2;
        s2 = s2.next;
      }
      // console.log(node);
      node = node.next;
    }
    node.next = s1 ? s1 : s2;

    return newList.next;
  }
}

let list1 = createLinkedList([1, 2, 3, 4, 5]);
let list2 = createLinkedList([3, 5, 7, 8, 9]);
let list3 = createLinkedList([5, 10, 15, 20]);
let list4 = createLinkedList([2, 4, 6, 8, 12]);
let lists = [list1, list2, list3, list4];

// console.log(lists);

let mergedList = mergeKSortedList(lists);
console.log(mergedList);
console.log(printList(mergedList));
