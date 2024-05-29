// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
/**
 * Definition for singly-linked list.
 */

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
  if (!head) return null;

  let prevNode = null;
  let nextNode = null;
  let current = head;

  while (current) {
    if (head.val === val) {
      head = head.next;
      current = head;
      continue;
    }

    nextNode = current.next;

    if (current.val === val) {
      prevNode.next = nextNode;
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
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);

console.log('krishna removing nodes', removeElements(head, 3));