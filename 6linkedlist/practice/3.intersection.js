// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode1 = function (headA, headB) {
  if (!headA || !headB) return null;
  if (headA === headB) return headA;

  const visitedNodes = new Set();
  let current = headA;

  while (current) {
    if (visitedNodes.has(current)) {
        break;
      }
    visitedNodes.add(current);
    current = current.next;
  }

  current = headB;

  while (current) {
    if (visitedNodes.has(current)) {
      return current;
    }
    visitedNodes.add(current);
    current = current.next;
  }
  return null;
};

// SC - O(1), TC - O(n)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * do it in SC O(1) using two pointer
 * Intuition -
 * let both pointer traverse both the LL so that ultimately they will collide at the interstion point
 * so once one pointer traverse one LL, 
 * Resetting the pointer to the head of the other list allows both pointers to traverse through both lists, increasing the chances of finding the intersection.
 */
var getIntersectionNode2 = function (headA, headB) {
  if (!headA || !headB) return null;
  if (headA === headB) return headA;

  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    p1 = p1 ? p1.next : headB;

    p2 = p2 ? p2.next : headA;

    // If both pointers are pointing to the same null node, there is no intersection
    if (p1 === null && p2 === null) {
      return null;
    }

    


  }
  // Once the loop exits (i.e., pA is equal to pB), return the intersection node
  return p1; // or pB, they're both at the intersection point
};

// SC - O(1)
