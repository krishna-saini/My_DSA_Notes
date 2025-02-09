// https://leetcode.com/problems/path-sum-iii/
/**
 * Clarifying question
 * 1. what if there are 0 in the path, shall we include them too as part of path?
 */
/**
 * 
Brute Force Approach
Consider each node as a starting point.
For each starting node, traverse all possible downward paths.
Maintain a running sum and check whether it matches the targetSum.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    if (!root) return 0;

    let count = 0;

    // Helper to find paths starting at a specific node
    const getpathSum = (node, currentSum) => {
        if (!node) return;

        // Add current node value to path sum
        currentSum += node.val;

        // Check if path sum matches target
        if (currentSum === targetSum) count++;

        // Recurse for left and right subtrees
        getpathSum(node.left, currentSum);
        getpathSum(node.right, currentSum);
    };

    // Traverse all nodes as possible starting points
    const startRecursion = (node) => {
        if (!node) return;

        getpathSum(node, 0); // Check paths starting from current node

        startRecursion(node.left);  // Move to left child
        startRecursion(node.right); // Move to right child
    };

    startRecursion(root);
    return count;
};
// TC - quardratic

// optimise it using prefix sum 

/**
  * Intuition:
  * 
Prefix sum - sum(i to j) = prefixSum[j] - prefixSum[i - 1]
prefixSum[j] - prefixSum[i - 1] === targetSum
prefixSum[j] - targetSum === prefixSum[i - 1]((node at ancestor))
Thus, if we store cumulative sums at every node(j) in a map (map.set(currentSum)),
we can quickly check if a prefix sum already exists to form a valid target path.


 * 1. Use a map to store prefix sums and their frequencies while traversing the tree.
 * 2. For each node, check if there exists a prefix sum such that:
 *    currentSum - targetSum = prefixSum
 * 3. If such a prefix exists, it implies a valid path ending at the current node.
 * 
 * Why a Map:
 * - Efficient lookups (O(1)) for prefix sums.
 * - Avoids rechecking paths like brute force methods.
 * 
BackTracking 
When DFS explores a left child and then backtracks to the parent to explore the right child, 
we need to "undo" the effects of sums computed during the left subtree traversal. 
Otherwise, these sums would incorrectly be reused during right subtree traversal

When the sliding window shifts, you "remove" the leftmost element of the current window to move forward. 
Similarly, in trees, you "remove" the current node's contribution to the path sum when you backtrack to explore other branches.
 * 
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    if (!root) return 0;

    // Map to store prefix sums and their counts
    const map = new Map();
    map.set(0, 1); // Base case: prefix sum of 0 appears once
    let count = 0;

    /**
     * DFS helper function to explore each path
     * @param {TreeNode} node - Current tree node
     * @param {number} currentSum - Cumulative sum from the root to this node
     */
    const dfs = (node, currentSum) => {
        if (!node) return;

        // Update current path sum by adding node's value
        currentSum += node.val;

        /**
         * Check if there's a prefix sum such that:
         * currentSum - targetSum = prefixSum
         * If yes, it means there's a valid path contributing to targetSum
         */
        count += map.get(currentSum - targetSum) || 0;

        /**
         * Store the current prefix sum or increment its count
         * This tracks how often we've encountered this sum
         */
        map.set(currentSum, (map.get(currentSum) || 0) + 1);

        // Recurse for left and right children
        dfs(node.left, currentSum);
        dfs(node.right, currentSum);

        /**
         * Backtrack: Remove current sum from map to avoid affecting parallel paths
         * Ensures that other branches don't incorrectly count this prefix
         */
        map.set(currentSum, map.get(currentSum) - 1);
    };

    // Start DFS from the root node
    dfs(root, 0);
    return count;
};

/**

 * Critical Line Explanation:
 * count += map.get(currentSum - targetSum) || 0;
 * - Checks if a valid prefix sum exists such that the path sum equals targetSum.
 * - Handles cases where no such prefix exists using "|| 0" to prevent errors.
 * 
 * Complexity Analysis:
 * - Time Complexity: O(n) — Each node is visited once.
 * - Space Complexity: O(h) for recursion stack and O(n) for the map (in the worst case).
 */
