class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Given the head of a singly linked list, reorder the list such that all nodes with odd values come before nodes with even values.
 * The relative order of odd and even nodes should remain as it was in the input.
 * Time complexity: O(n), Space complexity: O(1)
 *
 * @param {ListNode} head - The head of the input linked list.
 * @returns {ListNode} - The head of the reordered list.
 */
const oddEvenList = function (head) {
  // Edge case: if the list is empty or has only one element, return the list as-is.
  if (!head || !head.next) return head;

  // Initialize pointers for building the odd and even lists
  let oddPointer = null,
    evenPointer = null;
  let oddListHead = null,
    evenListHead = null;
  let currentNode = head;

  // Traverse the list and split nodes into odd and even lists
  while (currentNode) {
    if (currentNode.val % 2 !== 0) {
      // If node value is odd
      if (!oddListHead) {
        // First odd node becomes the head of the odd list
        oddListHead = currentNode;
        oddPointer = currentNode;
      } else {
        // Append to the end of the current odd list
        oddPointer.next = currentNode;
        oddPointer = currentNode;
      }
    } else {
      // If node value is even
      if (!evenListHead) {
        // First even node becomes the head of the even list
        evenListHead = currentNode;
        evenPointer = currentNode;
      } else {
        // Append to the end of the current even list
        evenPointer.next = currentNode;
        evenPointer = currentNode;
      }
    }
    currentNode = currentNode.next; // Move to the next node in the original list
  }

  // Ensure the even list ends properly by terminating the last node's next pointer
  if (evenPointer) evenPointer.next = null;

  // Link the end of the odd list to the head of the even list to form the final reordered list
  if (oddPointer) oddPointer.next = evenListHead;

  // Return the head of the reordered list (start of odd list), or even list if no odd nodes
  return oddListHead || evenListHead;
};

// Helper function to print the linked list
const printList = (head) => {
  const values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  console.log(values.join(' -> '));
};

// Example Usage
let head = new ListNode(2);
head.next = new ListNode(1);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(5);
head.next.next.next.next = new ListNode(6);
head.next.next.next.next.next = new ListNode(4);
head.next.next.next.next.next.next = new ListNode(7);

console.log('Reordered list with odd values followed by even values:');
printList(oddEvenList(head)); // Expected output: 1 -> 3 -> 5 -> 7 -> 2 -> 6 -> 4
