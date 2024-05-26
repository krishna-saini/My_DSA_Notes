## What is Linked list ?

A DS that contains a HEAD, a TAIL and a length property
A LL consists of nodes. Each node has a value and a pointer to another node or null.
a node === |val|next|
There is no index. if we want to access something from middle, we start at the beginning.
Arrays are like elevator which can take you to any floor, while LL are like stairs. you have to start from floor 0.

HEAD is the first element of the list. TAIL is the last element of the list.

Try visualGo website for visualization
1. https://visualgo.net/en/list?mode=LL
2. https://visualgo.net/en/list?mode=DLL
3. https://leetcode.com/explore/learn/card/linked-list/ (suggested by google)

### Arrays

can be quickly accessed at a specified index
insertion and deletion is expensive
indexed in order

insertion - O(n)
removal - O(n)
Searching - O(n)
Access - O(1) -> Array wins

### LL

1. have to traverse from start to access any node. Random acces is not allowed.
2. insertion & deletion are not expensive. Power of LL.
3. not indexed in order
4. Storing a value in LL is more expensive as we have to store next/prev too for each node

So LL excel at insertion and deletion compare to array. so if you dont need random access, you just want some data represented in a list with an order, LL is the best choice

Example -> Browser forward backward button
LL are required to build stack and queue

### Doubly LL
it has two pointers on each node - next and prev

insertion - O(1)
removal - O(1)  // it is O(n) for single LL
Searching - O(n)
Access - O(n) as we have to loop


### What is a Cycle in a Linked List?
- A cycle in a linked list occurs when a node's next pointer points back to a previous node in the list, rather than pointing to null. This creates a loop, making it possible to traverse the list indefinitely without ever reaching an end.

#### Why is this Important?
- Detecting cycles in a linked list is important for several reasons:

- Cycles can cause infinite loops in algorithms that traverse the list.
Identifying cycles can help in debugging and ensuring data integrity.
