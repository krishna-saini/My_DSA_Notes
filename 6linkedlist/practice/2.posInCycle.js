/**
 * Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return null;
  const visitedNodes = new Set();

  let current = head;
  let currentIndex = 0;
  while (current) {
    if (visitedNodes.has(current)) {
      return current;
    }
    visitedNodes.add(current);
    current = current.next;
    currentIndex++;
  }

  return null;
};

// SC - O(n)

const findPos = (head) => {
  if (!head || !head.next) return null;
  // slow and fast are pointers to nodes in the list
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    // O(n)
    slow = slow.next;
    fast = fast.next.next;  // Tortoise and Hare algorithm

    // checking if these pointers point to the same node object in memory, not whether the contents of the nodes are the same.
    if (slow === fast) {
      // CYCLE DETECTED
      break;
    }
  }

  if (slow !== fast) {
    return null;
  }

  // resetting the slow to head and move both will same pace
  slow = head;
  while (slow !== fast) {
    // O(k) -> k is the length of the ll
    slow = slow.next;
    fast = fast.next;
  }
  return slow; // Return the node where the cycle begins
};


// SC- O(1), TC - O(n) + O(k) = O(n)
