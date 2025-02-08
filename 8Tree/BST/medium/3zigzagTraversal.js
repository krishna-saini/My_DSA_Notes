/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Zigzag Level Order Traversal of Binary Tree
 * @param {TreeNode} root
 * @return {number[][]}
 * 
 * Complexity Analysis:
 * - Time Complexity: O(N) 
 *   - Each node is visited exactly once during traversal.
 * - Space Complexity: O(H) 
 *   - H is the height of the tree for recursive stack usage.
 * - Auxiliary Space: O(N) 
 *   - Space required for storing result arrays.
 */
const zigzagLevelOrder = function (root) {
    if (!root) return [];

    // Result array to store nodes at each level
    const result = [];

    /**
     * Recursive helper to traverse the tree and collect node values at each level.
     * @param {TreeNode} node - Current tree node
     * @param {number} level - Current depth level
     */
    const traverse = (node, level) => {
        if (!node) return;

        // Initialize the level in result if not done
        if (!result[level]) {
            result[level] = [];
        }

        // Add node value in zigzag order
        if (level % 2 === 0) {
            result[level].push(node.val); // Append for even levels
        } else {
            result[level].unshift(node.val); // Prepend for odd levels
        }

        // Recurse for left and right children
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    };

    traverse(root, 0);
    return result;
};

/**
 * Example Test Case:
 */
const root = {
    val: 5,
    left: { val: 4, left: { val: 11, left: { val: 7 }, right: { val: 2 } } },
    right: { val: 8, left: { val: 13 }, right: { val: 4, right: { val: 1 } } },
};

/**
 * Definition for a binary tree node.
 */
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


const root2 = new TreeNode(3, 
    new TreeNode(9), 
    new TreeNode(20, 
        new TreeNode(15), 
        new TreeNode(7)
    )
);

console.log(zigzagLevelOrder(root)); 
// Output: [[5], [8, 4], [11, 13, 4], [1, 2, 7]]


// solve above using recursion for deep trees
/**
 * BFS Iterative Zigzag Level Order Traversal
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrderIteration = function (root) {
    if (!root) return [];

    const result = [];
    const queue = [root];  // Queue for BFS traversal
    let level = 0;

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();  // Dequeue the front node
            if (level % 2 === 0) {
                currentLevel.push(node.val); // Append for even levels
            } else {
                currentLevel.unshift(node.val); // Prepend for odd levels
            }

            // Add child nodes to the queue
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(currentLevel);
        level++;
    }

    return result;
};
