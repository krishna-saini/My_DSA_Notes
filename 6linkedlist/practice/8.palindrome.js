/**
 * https://takeuforward.org/data-structure/check-if-given-linked-list-is-plaindrome/
 *
 * Brute force
 * take each value of the LL in another DS say array
 * check if it is palindromic array
 * SC - O(n), TC - O(1)
 */

import { reverseList } from './0.reverseLL';

/**
 * Optimised approach intuition
 * Reverse the 2nd half of LL and compare each node of bothe first half and second half
 */

/**
 * Pseduo code
 * 1. The first step is dividing the first and second half of the linked list by recognizing the middle node
 * 2. find the middle of the LL
 * can be easily found by using tortoise and Hare algo where one pointer moves by 1 step
 * while 2nd pointer moves by two steps in a single loop
 * Continue this until the ‘fast’ pointer reaches the end of the list or is the second last on the list.
 * The ‘slow’ pointer will now be in the middle of the linked list.
 *
 * 3. now reverse the 2nd half of LL
 * const newHead = reverseLL(slow.next)
 *
 * this will return reversed 2nd half, though still the last element of reversed LL is connected with first half
 *
 * 4. pt1 points to head of LL and pt2 points to newHead of reversed LL
 *
 * 5. loop while(pt1 !== slow || pt2 !== null) & compare each node value of both LL with each other
 *
 * 6. after comparison, reverse the 2nd half of LL to original state
 * reverseLL(newHead)
 *
 */

const isPalindrome = (head) => {
  // Find the middle of the linked list
  let current = head;
  let slowPointer = head;
  let fastPointer = head;
  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next; // Tortoise and Hare algorithm
  }
  const middleNode = slowPointer;

  // Reverse the second half of the linked list after the middle
  const reversedSecondHalfHead = reverseList(middleNode.next);

  // Two pointers to check
  let firstHalfPointer = head;
  let secondHalfPointer = reversedSecondHalfHead;

  while (firstHalfPointer !== middleNode || secondHalfPointer !== null) {
    if (firstHalfPointer !== secondHalfPointer) {
      reverseList(reversedSecondHalfHead);
      return false;
    }
    firstHalfPointer = firstHalfPointer.next;
    secondHalfPointer = secondHalfPointer.next;
  }

  // Restore the reversed second half (optional)
  reverseList(reversedSecondHalfHead);
  return true;
};
