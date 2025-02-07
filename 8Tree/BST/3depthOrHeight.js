/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

var maxDepth = function (root) {
    // Base case: empty tree has a depth of 0
    if (!root) {
        return 0;
    }

    // Find max depth in left subtree
    const left = maxDepth(root.left);

    // Find max depth in right subtree
    const right = maxDepth(root.right);

    // Return the larger depth plus 1 (to account for the root node)
    return 1 + Math.max(left, right);
};

/**
 * Time Complexity: O(n)
 * - Each node is visited exactly once, hence linear time complexity.
 * 
 * Space Complexity:
 * - O(h) for recursion call stack, where h is the height of the tree.
 * - O(log n) for balanced trees, O(n) for completely skewed trees.
 */

// Iterative DFS approach to avoid recursion stack overhead
var maxDepth = function (root) {
    if (!root) return 0;

    let maxDepth = 0;
    const stack = [{ node: root, depth: 1 }];

    // Traverse using a stack to simulate recursion
    while (stack.length) {
        const { node, depth } = stack.pop();

        if (node) {
            // Update maximum depth encountered
            maxDepth = Math.max(maxDepth, depth);

            // Push child nodes to the stack with incremented depth
            stack.push({ node: node.left, depth: depth + 1 });
            stack.push({ node: node.right, depth: depth + 1 });
        }
    }

    return maxDepth;
};

/**
 * Time Complexity: O(n)
 * - Each node is visited exactly once.
 * 
 * Space Complexity:
 * - O(h) for the stack in the worst case, where h is the height of the tree.
 * - O(log n) for balanced trees, O(n) for completely skewed trees.
 */
