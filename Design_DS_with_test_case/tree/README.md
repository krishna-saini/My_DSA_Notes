# Tree

- non linear DS
- A tree is a collection of entities called nodes. Nodes are connected by edges.
- Each node has three attributes: value, left_child, and right_child.
- Every tree has a special node called the root node. The root node can be used to traverse every node of the tree
- If a tree has N vertices(nodes) than the number of edges is always one less than the number of nodes(vertices) i.e N-1. If it has more than N-1 edges it is called a graph not a tree.
- a leaf/leaves is a node that has no children
- The height of a node is the length of the longest downward path to a leaf from that node.
- The depth of a node is the length of the path to its root (i.e., its root path).
- Degree of a node is the number of childer of the node
- Degree of tree - maximum degree of a node in the tree.
- Width - number of nodes at a level
- Size of a tree - Number of nodes in the tree.

## Binary Tree

- each parent can have at most two children(left & right)
- eg - BST (Binary Search Tree), AVL tree, RBT tree

### BST / ordered or sorted binary tree,

- it is a type of binary tree and it is symmetric
- the value of the left child of a node must be smaller than or equal to the value of its parent
- the value of the right child is always larger than or equal to the value of its parent.
- This property makes it suitable for searching operations as at each node we can decide accurately whether the value will be in left subtree or right subtree. Therefore, it is called a Search Tree.
- Binary search trees can be used to implement abstract data types such as dynamic sets, lookup tables and priority queues, and used in sorting algorithms such as tree sort.
- TC: avg case O(logn) for searching and insertion
- TC: worst case O(n) - This occurs when the tree becomes a linked list (degenerate tree) with nodes only on one side.

### AVL tree

- a self-balancing binary search tre
-

## Traversal and search methods
- tree
  . . 1 . .
  . 2 . 3 .
  4 5 6 7

### in order traversal

- (4 2 5 1 6 3 7 ) -> Left , root , Right
- in-order traversal visits nodes in sorted order for BST.
- It can be used for expression tree evaluation, especially in arithmetic expressions where operands are stored in leaves and operators in internal nodes
### post order traversal
- (4 5 2 6 7 3 1): left Right ROOT
- a walk in which the children are traversed before their respective parents are traversed
- Post-order DFS is useful for deleting a tree or freeing the memory allocated to a tree.
- It's commonly used in evaluating arithmetic expressions in postfix notation.

### pre order traversal

- (1 2 4 5 3 6 7) : Root, Left,Right ->A walk in which each parent node is traversed before its children.
  -In a binary search tree (BST), Pre-order DFS is useful for creating a copy of a tree or serializing a tree structure.
- It's used in applications like parsing arithmetic expressions into expression trees.



### DFS

- One starts at the root and explores as far as possible along each branch(till leaf) before backtracking and expanding other nodes
- can be implemented using stack or recursion

- may get lost in an infinite branch and never make it to the solution node
- DFS is generally more memory-efficient compared to BFS as it explores deeply before backtracking
- TC - The algorithm visits each node exactly once, performing a constant amount of work for each node (pushing to and popping from the stack, and adding the node's value to the result array).- O(n)
- SC - The space complexity is determined by the maximum size of the stack, which depends on the height of the tree.
in worst case (fully unbalanced tree )- O(n)
in avg case - O(logn)

### BFS
- output - 1 2 3 4 5 6 7
- It starts at the tree root and explores the neighbor nodes first at the current level, before moving to the next level neighbors
- Extra memory, usually a queue, is needed to keep track of the child nodes that were encountered but not yet explored.BFS is typically implemented iteratively.
- eg:- in a chess endgame, a chess engine may build the game tree from the current position by applying all possible moves and use breadth-first search to find a win position for White
- Implicit trees (such as game trees or other problem-solving trees) may be of infinite size; breadth-first search is guaranteed to find a solution node if one exists.
- BFS is guaranteed to find the shortest path between the starting node and any other reachable node in an unweighted graph.
- It is optimal for finding the shortest path.
- It requires more memory to keep track of all the nodes at the current level.
- space complexity of the algorithm will be O(W) for the queue, where W is the maximum number of nodes on any level. The space complexity of the above algorithm will be O(N) as we need to return a list containing the level order traversal. 
- The time complexity of the above algorithm is O(N), where N is the total number of nodes in the tree. This is due to the fact that we traverse each node once


### Traversal Methods: DFS vs BFS

| **Feature**             | **DFS**                                                                                      | **BFS**                                                                          |
|-------------------------|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| **Description**         | Starts at root, explores as far as possible along each branch before backtracking.           | Starts at root, explores neighbor nodes at current level before moving to next level. |
| **Implementation**      | Stack or recursion                                                                          | Queue                                                                           |
| **Pros**                | Memory-efficient, deep exploration                                                          | Finds shortest path, optimal for shortest paths                                   |
| **Cons**                | May get lost in infinite branches                                                           | Requires more memory                                                             |
| **Use Case Example**    | Pathfinding in deep mazes or puzzles                                                        | Chess engines finding win positions                                              |
| **Guarantee**           | Not guaranteed to find shortest path or a solution if branches are infinite                 | Guaranteed to find a solution if one exists, and finds shortest path in unweighted graphs |
| **Memory Usage**        | Generally less memory usage as it explores deeply                                           | More memory needed to track all nodes at current level                           |


