/**
 * Given the head of a linked list,
 * remove the nth node from the end of the list and return its head.
 * https://stackblitz.com/edit/javascript-6flvqa?file=index.js
 */

/**
 * WHat we know ?
 * we know how to remove nth node from the beginning.
 * we just need to tweak it to work to remove nth node from the end
 *
 * nth from beginning = length - n th from the end
 * nth from end = length - n th from beginning
 * 
 * 
 * Assumption - no cycle present
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getLengthofLL = (head) => {
  // O(L)
  let counter = 0;
  let current = head;
  while (current) {
    counter++;
    current = current.next;
  }
  return counter;
};
const removeNodeFromEnd = (head, n) => {
  if (n <= 0) return head; // Handle invalid n by returning the list unchanged

  const length = getLengthofLL(head);

  const indexToRemove = length - n;

  // Step 3: Handle edge case where the node to remove is the head of the list
  if (indexToRemove === 0) {
    return head.next;
  }

  let preNode = head;
  let counter = 0;
  while (counter !== indexToRemove - 1) {
    // O(L)
    counter++;
    preNode = preNode.next;
  }
  preNode.next = preNode.next.next;
  return head;
};

// Create linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log('krishna 1', removeNodeFromEnd(head, 2)); // O(L)+O(L)

/**
 * can reduce one looping of LL
 * Intuition - use two pointer both pointing to head
 * move fast pointer `n` steps ahead of slow
 * 
 * then move both together unless fast.next exists(means it reaches to length of LL)
 * in this way, slow pointer will be once place behind the node to be removed
 *
 */

/**
 * if n = 2 , remove 2nd node from end i.e. 4,  length of LL = 5(1->2->3->4->5->null)
 * | slow ->1 , fast -> 3 (2 step ahead of slow)
 * now remaining lenght of LL after fast = 5-3 = 2
 * hence move slow also by 2, slow will reach 3, one step behind the node to be removed
 */

const removeNodeFromEnd2 = (head, n) => {
  if (n <= 0) return head; // Handle invalid n by returning the list unchanged

  let slow = head;
  let fast = head;

  // move fast n steps ahead of slow
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // Skip the nth node
  slow.next = slow.next.next;

  return head;
};

console.log('krishna 2', removeNodeFromEnd2(head, 2)); // O(L)+O(L)
