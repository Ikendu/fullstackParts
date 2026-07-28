// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.

const { createList, printList, ListNode } = require("./listStructure");

// Add the two numbers and return the sum as a linked list.

// Best solution, short, acceptable, straight to the point handling
function addNumbers(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    let sum = val1 + val2 + carry;

    current.next = new ListNode(sum % 10);
    current = current.next;

    carry = Math.floor(sum / 10);

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummy.next;
}

// Better acceptable solution but very long and hard to maintain
var addTwoNumbers = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let dummy = new ListNode(0);
  let current = dummy;
  let holder = 0;

  while (l1 && l2) {
    let sum = l1.val + l2.val;
    if (holder > 0) {
      sum += holder;
      holder = 0;
    }
    if (sum === 10) {
      holder = 1;
      current.next = new ListNode(0);
    } else if (sum > 10) {
      holder = 1;
      current.next = new ListNode(sum - 10);
    } else if (sum < 10) current.next = new ListNode(sum);

    l1 = l1.next;
    l2 = l2.next;
    current = current.next;
  }
  while (l1) {
    if (holder) {
      sum = l1.val + holder;
      if (sum === 10) {
        current.next = new ListNode(0);
        holder = 1;
      } else {
        current.next = new ListNode(sum);
        holder = 0;
      }
    } else {
      current.next = new ListNode(l1.val);
    }
    l1 = l1.next;
    current = current.next;
  }
  while (l2) {
    if (holder) {
      sum = l2.val + holder;
      if (sum === 10) {
        current.next = new ListNode(0);
        holder = 1;
      } else {
        current.next = new ListNode(sum);
        holder = 0;
      }
    } else {
      current.next = new ListNode(l2.val);
    }
    l2 = l2.next;
    current = current.next;
  }
  if (holder) {
    current.next = new ListNode(1);
    current = current.next;
    holder = 0;
  }
  return dummy.next;
};

// Passas basic and few test with low numbers
var add2Number = function (l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let str1 = "";
  let str2 = "";

  while (l1) {
    str1 += l1.val;
    l1 = l1.next;
  }
  while (l2) {
    str2 += l2.val;
    l2 = l2.next;
  }
  let result = Number(str1) + Number(str2);
  console.log(result);
  result = String(result);

  for (let i = result.length - 1; i >= 0; i--) {
    dummy.next = new ListNode(Number(result[i]));
    dummy = dummy.next;
  }
  return current.next;
};

let list1 = createList([2, 4, 9]);
let list2 = createList([5, 6, 4, 9]);

let result = addNumbers(list1, list2);
printList(result);
// console.log(result);
