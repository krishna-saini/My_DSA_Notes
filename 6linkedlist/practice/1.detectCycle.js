// the idea is to check if the same node has been revisited while traversing through the LL
// so set is the suitable DS for this.
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function hasCycle(head) {
  if (!head || !head.next) return null; // If there's no head or only one node, there can't be a cycle

  let visitedNodes = new Set();
  let currentNode = head;

  while (currentNode !== null) {
    // If the current node is already in the set, we have a cycle
    if (visitedNodes.has(currentNode)) {
      return true;
    }
    // Add the current node to the set
    visitedNodes.add(currentNode);
    // Move to the next node
    currentNode = currentNode.next;
  }

  // If we reach here, there is no cycle
  return false;
}

// Example usage:
// Creating a linked list with a cycle
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = head.next; // Creating a cycle

console.log(hasCycle(head)); // Output: true

// Creating a linked list without a cycle
let head2 = new Node(1);
head2.next = new Node(2);
head2.next.next = new Node(3);
head2.next.next.next = new Node(4);

console.log(hasCycle(head2)); // Output: false

// TC - O(n), SC O(n)

// another solution is to track using two pointers
// If there is no cycle, the fast pointer will stop at the end of the linked list.
// If there is a cycle, the fast pointer will eventually meet with the slow pointer.
//  Floyd's Tortoise and Hare algorithm
// It is a safe choice to move the slow pointer one step at a time while moving the fast pointer two steps at a time.
var hasCycle2 = function (head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next; // Tortoise and Hare algorithm

    if (slow === fast) {
      return true;
    }
  }

  return false;
};
