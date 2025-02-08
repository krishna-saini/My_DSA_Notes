// https://leetcode.com/problems/path-sum-ii/description/

/**
 * Intution 
 * 1. DFS vs BFS
 * 2. Backtracking to track all possible path
 * 
 * Since we are dealing with array to track path, handle it properly while storing it in result;
 */

// Clarifying Questions for Root-to-Leaf Path Sum Problem in Binary Tree

// 1. Input Structure
// Is the input guaranteed to be a binary tree, or could it be empty?
// Can node values be negative, zero, or only positive?

// 2. Output Format
// Should I return the exact paths as arrays of values or just the count of valid paths?
// If there are no paths matching the target, should I return an empty list or a specific value?

// 3. Edge Cases and Constraints
// Can the tree be skewed or balanced?   --> DFS vs BFS
// Is the tree height limited, or could it potentially be very deep?  ---> recurstion vs iteration
 
// 4. Target Sum
// Can the target sum be negative or zero?

// 7. Special Cases
// How should I handle an empty tree (`null root`)?
// Should paths always start at the root, or can they begin at any node?


const getAllPathSum = function (root, targetSum) {
    if (!root) return []; // Edge case: empty tree, no paths

    const resultPaths = []; // Store valid paths that sum to target

    // Helper function for recursion and backtracking
    const pathSum = (node, currentSum, path) => {
        if (!node) return;

        // Update the current sum and add the node to the path
        // Do this for all nodes, dont add checks like currentSUm + node.val <= currentSUm as such check fails for negetive number
        currentSum += node.val;
        path.push(node.val);

        // Check if the current node is a leaf and the path sum equals the target
        if (!node.left && !node.right && currentSum === targetSum) {
            resultPaths.push([...path]); // Store a copy of the valid path as path is an rray
        }

        // Recursively check left and right subtrees
        pathSum(node.left, currentSum, path);
        pathSum(node.right, currentSum, path);

        // Backtrack by removing the current node from the path and explore others
        path.pop();
    };

    pathSum(root, 0, []); // Start recursion with an initial sum of 0

    return resultPaths;
};

/**
 * Intuition:
 * - Traverse all paths from the root to leaf using recursion.
 * - Maintain the current path and sum during traversal.
 * - Use backtracking to explore all possible paths while ensuring
 *   efficient path management by removing nodes when backtracking.
 * 
 * Complexity:
 * - Time Complexity: O(n) where n is the number of nodes in the tree.
 *   Each node is visited once.
 * - Space Complexity: O(h) where h is the height of the tree, plus 
 *   space for storing paths.
 * - Worst Case (skewed tree): Space complexity becomes O(n) if the 
 *   tree is a single straight line.
 */

// Example Usage
const root = {
    val: 5,
    left: { val: 4, left: { val: 11, left: { val: 7 }, right: { val: 2 } } },
    right: { val: 8, left: { val: 9 }, right: { val: 4, right: { val: 5 } } },
};

console.log(getAllPathSum(root, 22)); // [[5, 4, 11, 2]]


// if the tree is very deep, stack overflow can happen with recursion, solution is to use stack
var pathSum = function (root, targetSum) {
    if (!root) return [];

    const result = [];
    const stack = [{ node: root, currentSum: root.val, nodeArr: [root.val] }];

    while (stack.length) {
        const { node, currentSum, nodeArr } = stack.pop();

        // Check if it's a leaf node
        if (!node.left && !node.right && currentSum === targetSum) {
            result.push([...nodeArr]); // take special care here as nodeArr is an array
        }

        // Traverse right subtree first to maintain path integrity
        if (node.right) {
            stack.push({
                node: node.right,
                currentSum: currentSum + node.right.val,
                nodeArr: [...nodeArr, node.right.val],
            });
        }

        if (node.left) {
            stack.push({
                node: node.left,
                currentSum: currentSum + node.left.val,
                nodeArr: [...nodeArr, node.left.val],
            });
        }
    }

    return result;
};
