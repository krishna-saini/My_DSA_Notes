/**
 * Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list
 * Note that the relative order inside both the even and odd groups should remain as it was in the input.
 * You must solve the problem in O(1) extra space complexity and O(n) time complexity
 *
 * Input: head = [2,1,3,5,6,4,7]
 * Output: [2,3,6,7,1,5,4]
 *
 * The first node is considered odd, and the second node is even, and so on
 *
 * In the context of the problem, "odd" and "even" refer to the node's position in the sequence starting from 1, not the 0-based index
 */

/**
 * intuition-
 * traverse and keep on changing the next pointer of even and odd indices node
 */
var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next; // Link the current odd node to the next odd node
    odd = odd.next; // Move the odd pointer to the next odd node
    even.next = odd.next; // Link the current even node to the next even node
    even = even.next; // Move the even pointer to the next even node
  }

  odd.next = evenHead; // Attach the even list to the end of the odd list
  return head;
};
