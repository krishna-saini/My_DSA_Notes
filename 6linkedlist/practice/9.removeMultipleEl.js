// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
/**
 * Definition for singly-linked list.
 */
const printList = (head) => {
  const values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  return values.join(' -> ');
};

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  console.log('start: ', printList(head));
  if (!head) return null;

  let prevNode = null;
  let nextNode = null;
  let current = head;

  while (current) {
    if (head.val === val) {
      head = head.next;
      current = head;
      console.log('after head is matching: ', printList(head));

      continue;
    }

    nextNode = current.next;

    if (current.val === val) {
      prevNode.next = nextNode;
      console.log('after any node is matching: ', printList(head));
    } else {
      prevNode = current;
    }

    current = nextNode;
  }

  return head;
};

// SC - O(1), TC - O(n)

let head = new ListNode(3);
head.next = new ListNode(3);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);
head.next.next.next.next.next = new ListNode(4);
head.next.next.next.next.next.next = new ListNode(5);

console.log('krishna removing nodes', removeElements(head, 3));
