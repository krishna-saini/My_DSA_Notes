// Given the head of a singly linked list, reverse the list, and return the reversed list.

const reverseList = function(head) {
    let previous = null;
    let nextNode = null;
    let currentNode = head;
    
    while (currentNode) {
        nextNode = currentNode.next; // Store the next node
        currentNode.next = previous; // Reverse the current node's pointer
        previous = currentNode;      // Move the previous pointer to the current node
        currentNode = nextNode;      // Move to the next node in the original list
    }
    head = previous; // Update head to the new first node
    return head;     // Return the new head of the reversed list
};

// TC - O(n) SC - O(1)
