// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

function reorderList(head) {
  if (!head.next || !head.next.next) return;

  let fast = head;
  let slow = head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let second = slow.next;
  slow.next = null;

  let prev = null

  while(second.next){
    let next = second.next
    second.next = prev
    
    prev = second
    second = next
  }
  second = prev

  let first = head

  while(second){
    let temp1 = first.next
    let temp2 = second.next

    first.next = second
    second.next = temp1

    first = temp1
    second = temp2
  }

}
