/**
 * https://leetcode.com/problems/balanced-binary-tree/
 * 
 * A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node 
 * never differs by more than one.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    let isTreeBalanced = true;

    const getHeight = (node) => {
        if (!node) return 0;

        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);

        // If this node is unbalanced, set the flag and exit early
        if (Math.abs(leftHeight - rightHeight) > 1) {
            isTreeBalanced = false;
        }

        // Return height only if tree is still balanced
        return 1 + Math.max(leftHeight, rightHeight);
    };

    getHeight(root);
    return isTreeBalanced;
};

/**
 * 

Time Complexity: O(n)
Every node is visited at most once.
// Space Complexity: O(h)// 

 */