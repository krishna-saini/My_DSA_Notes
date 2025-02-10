/**
 * https://leetcode.com/problems/binary-tree-right-side-view/
 * 
 * 
 *  * Intuition:
 * - We need the rightmost node visible at each level of the binary tree.
 * - A BFS (level-order traversal) is used to traverse the tree level by level.
 * - By keeping track of the last node in each level (`rightmostNode`),
 *   we guarantee that only the rightmost visible nodes are included.
 * 
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];

    // Result to store rightmost nodes at each level
    const result = [];
    
    // Queue to perform level-order traversal (BFS)
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let rightmostNode = null;

        // Traverse nodes in the current level
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            
            // Always store the last node seen in the current level
            rightmostNode = node.val;

            // Add left child to the queue
            if (node.left) queue.push(node.left);
            // Add right child to the queue
            if (node.right) queue.push(node.right);
        }

        // After finishing this level, store the last (rightmost) node
        result.push(rightmostNode);
    }

    return result;
};

/**

 * 
 * Complexity Analysis:
 * - Time Complexity: O(N)
 *   - Every node in the binary tree is visited exactly once.
 * 
 * - Space Complexity: O(N)
 *   - In the worst case, the queue may hold all leaf nodes, requiring O(N) space.
 */
