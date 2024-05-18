## What is Linked list ?

A DS that contains a HEAD, a TAIL and a length property
A LL consists of nodes. Each node has a value and a pointer to another node or null.
a node === |val|next|
There is no index. if we want to access something from middle, we start at the beginning.
Arrays are like elevator which can take you to any floor, while LL are like stairs. you have to start from floor 0.

HEAD is the first element of the list. TAIL is the last element of the list.

Try visualGo website for visualization

### Arrays

can be quickly accessed at a specified index
insertion and deletion is expensive
indexed in order

insertion - O(n)
removal - O(n)
Searching - O(n)
Access - O(1) -> Array wins

### LL

have to traverse from start to access any node. Random acces is not allowed.
insertion & deletion are not expensive. Power of LL.
not indexed in order

insertion - O(1)
removal - O(n) / O(1)
Searching - O(n)
Access - O(n) as we have to loop

So LL excel at insertion and deletion compare to array. so if you dont need random 
access, you just want some data represented in a list with an order, LL is the best choice

Example -> Browser forward backward button
LL are required to build stack and queue

### Doubly LL
it has two pointers on each node - next and prev
