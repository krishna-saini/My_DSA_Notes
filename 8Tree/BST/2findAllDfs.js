/**
 * Find in order, pre order and post order traversal of an BST using single stack
 */
/**
 * Intuition
 1. push root node in stack with (root, 1)
 2. not while loop till stack is empty
 3. check top most node
 4. if tag === 1
    push it in pre order arr
    update tag++
    process left node(CN) of it with (CN, 1)
5. if tag === 2
    push it in inOrder arr
    update tag++
    process right node of it with (CN, 1)
6. if tag === 3
    push it in post order arr
    pop the top most el of stack
 */