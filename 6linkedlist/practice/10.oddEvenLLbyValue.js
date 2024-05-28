/**
 * Given the head of a singly linked list, group all the nodes with odd node value together followed by the nodes with even node value, and return the reordered list
 * Note that the relative order inside both the even and odd groups should remain as it was in the input.
 * You must solve the problem in O(1) extra space complexity and O(n) time complexity
 */

var oddEvenList = function(head) {
    if (!head || !head.next) return head;

    let odd = null, even = null;
    let oddHead = null, evenHead = null;
    let current = head;

    while (current) {
        if (current.val % 2 !== 0) { // Odd
            if (!oddHead) {
                oddHead = current;
                odd = current;
            } else {
                odd.next = current;
                odd = current;
            }
        } else { // Even
            if (!evenHead) {
                evenHead = current;
                even = current;
            } else {
                even.next = current;
                even = current;
            }
        }
        current = current.next;
    }

    if (even) even.next = null; // Ensure the even list ends properly
    if (odd) odd.next = evenHead; // Link the end of odd list to the head of even list

    return oddHead || evenHead; // Return the head of the odd list, or the even list if there are no odd nodes
};

let head = new ListNode(2);
head.next = new ListNode(1);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(5);
head.next.next.next = new ListNode(6);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(7);

console.log('krishng nodes 2', oddEvenList(head));
