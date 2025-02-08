/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} tree1
 * @param {TreeNode} tree2
 * @return {boolean}
 */
const isSameTree = function (tree1, tree2) {
    // Case 1: Both trees are empty (null), so they are trivially the same.
    if (!tree1 && !tree2) return true;

    // Case 2: One of the trees is null, and the other isn't. They are not identical.
    if (!tree1 || !tree2) return false;

    /**
     * Helper function to recursively compare two subtrees.
     * @param {TreeNode} node1
     * @param {TreeNode} node2
     * @return {boolean}
     */
    const areNodesEqual = (node1, node2) => {
        // Case 1: Both nodes are null — this subtree is identical
        if (!node1 && !node2) return true;

        // Case 2: One node is null, and the other isn't — they are different
        if (!node1 || !node2) return false;

        // Base condition: Check if current node values are different
        if (node1.val !== node2.val) return false;

        // Recursively check the left and right subtrees
        return (
            areNodesEqual(node1.left, node2.left) &&
            areNodesEqual(node1.right, node2.right)
        );
    };

    return areNodesEqual(tree1, tree2);
};

/**
 * Complexity Analysis:
 * Time Complexity: O(min(N, M)) — We traverse both trees up to the point where they are different, 
 * where N and M are the number of nodes in tree1 and tree2 respectively.
 * 
 * Space Complexity: O(H) — Where H is the height of the smaller tree, accounting for recursive stack usage.
 * In the worst case (completely unbalanced trees), this can be O(N).
 */
