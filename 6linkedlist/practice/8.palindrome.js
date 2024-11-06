class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Reverse a linked list starting from the given head node.
 * @param {ListNode} head
 * @return {ListNode} New head of the reversed list
 */
const reverseList = function (head) {
  let previous = null;
  let nextNode = null;
  let currentNode = head;

  // Traverse and reverse the linked list
  while (currentNode) {
    nextNode = currentNode.next;      // Store the next node
    currentNode.next = previous;      // Reverse the current node's pointer
    previous = currentNode;           // Move previous pointer forward
    currentNode = nextNode;           // Move to the next node in the original list
  }
  return previous; // Return new head of the reversed list
};

/**
 * Helper to print linked list
 */
const printList = (head) => {
  const values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  console.log(values.join(" -> "));
};

/**
 * Check if a linked list is a palindrome.
 * @param {ListNode} head
 * @return {boolean} Whether the list is a palindrome
 */
const isPalindrome = (head) => {
  console.log("Original list:");
  printList(head);

  // Step 1: Find the middle of the linked list using Tortoise and Hare approach
  let slowPointer = head;
  let fastPointer = head;

  /**
   *  Condition to find the middle:
  // - fastPointer moves twice as fast as slowPointer.
  // - fastPointer should move forward while fastPointer.next and fastPointer.next.next are not null.
  //   This ensures fastPointer does not go out of bounds in an odd-length list.
   */
  while (fastPointer && fastPointer.next && fastPointer.next.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  const middleNode = slowPointer;

  console.log("Middle of the list found at:", middleNode.val);

  // Step 2: Reverse the second half of the list starting from middleNode.next
  const reversedSecondHalfHead = reverseList(middleNode.next);
  middleNode.next = null; // Disconnect first half from the reversed second half

  console.log("First half after separation:");
  printList(head);

  console.log("Reversed second half:");
  printList(reversedSecondHalfHead);

  // Step 3: Initialize two pointers to compare both halves of the list
  let firstHalfPointer = head;
  let secondHalfPointer = reversedSecondHalfHead;

   // Condition for comparing both halves:
  // - Continue while secondHalfPointer is not null, as it will be shorter than the first half.
  // - Each pointer checks corresponding nodes in the two halves for equality.
  while (secondHalfPointer) {
    if (firstHalfPointer.val !== secondHalfPointer.val) {
      // Restore the second half before returning false
      middleNode.next = reverseList(reversedSecondHalfHead); // Reattach after restoring
      console.log("Restored list after failure:");
      printList(head);
      return false;
    }
    firstHalfPointer = firstHalfPointer.next;
    secondHalfPointer = secondHalfPointer.next;
  }

  // Step 4: Restore the second half to its original order and reconnect
  middleNode.next = reverseList(reversedSecondHalfHead); // Reattach restored list

  console.log("Restored list after palindrome check:");
  printList(head);

  return true; // All nodes matched, indicating a palindrome
};

// Example Usage
// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(1);

// console.log("Is palindrome?", isPalindrome(head)); // Output: true

// Example Usage
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

console.log("Is palindrome?", isPalindrome(head)); // Output: true
