/**
 * 
 * https://leetcode.com/problems/invert-binary-tree/
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Invert a binary tree by recursively swapping left and right child nodes.
 * 
 * Example:
 * Input:
 *       4
 *      / \
 *     2   7
 *    / \  / \
 *   1  3 6  9
 *
 * Output (after inversion):
 *       4
 *      / \
 *     7   2
 *    / \  / \
 *   9  6 3  1
 * 
 * Approach:
 * - Recursively traverse the binary tree.
 * - For each node, swap its left and right child nodes.
 *
 * Time Complexity: O(N)  
 * - We visit every node exactly once.
 *
 * Space Complexity: O(H)  
 * - Due to the recursion stack, where H is the height of the tree.
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
    const reverseChildNodes = (node) => {
        // Base condition: If node is null, simply return
        if (!node) return;

        // Swap the left and right child nodes
        [node.left, node.right] = [node.right, node.left];

        // Recur for the left and right subtrees
        reverseChildNodes(node.left);
        reverseChildNodes(node.right);
    }

    reverseChildNodes(root);
    return root;
};


// invert values of odd levels of tree
// https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/submissions/1536023828/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * Reverse the node values at all odd levels in a perfect binary tree.
 * 
 * Example:
 * Input:
 *        1
 *      /   \
 *     2     3
 *    / \   / \
 *   4   5 6   7
 * Output (after reversing odd levels):
 *        1
 *      /   \
 *     3     2
 *    / \   / \
 *   4   5 6   7
 *
 * Approach:
 * - Use two pointers `node1` and `node2` to traverse opposite sides of the current level.
 * - Swap node values when at an odd level.
 * - Recur for the children of `node1` and `node2` in opposite directions.
 *
 * Time Complexity: O(N) — Each node is visited once.
 * Space Complexity: O(H) — Due to recursion stack, where H is the height of the tree.
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const reverseOddLevels = function (root) {
    if (!root) return null; // Handle edge case for empty tree

    const reverseChildNodes = (node1, node2, level) => {
        if (!node1 || !node2) return; // Base condition to stop recursion

        // Swap values at odd levels
        if (level % 2 !== 0) {
            [node1.val, node2.val] = [node2.val, node1.val];
        }

        // Recur for opposite child pairs at the next level
        reverseChildNodes(node1.left, node2.right, level + 1);
        reverseChildNodes(node1.right, node2.left, level + 1);
    };

    // Start recursion from the first level
    reverseChildNodes(root.left, root.right, 1);
    return root;
};
