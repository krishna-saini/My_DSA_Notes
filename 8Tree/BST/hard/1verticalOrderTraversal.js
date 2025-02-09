// https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/

// in the question , it is given that how to create row, col for each level
// but you may have to come up with your own solution for this in interview

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * Vertical Order Traversal of a Binary Tree
 * 
 * Approach:
 * - Perform DFS traversal while tracking the row and column of each node.
 * - Store nodes in a map where the key is the column index, and the value is 
 *   an array of objects containing node values and their row positions.
 * - After populating the map, sort the map by keys to get columns in order.
 * - Within each column, sort nodes by row position first, and by value for ties.
 * 
 * Complexity:
 * - Time: O(N log N)
 *   - O(N) for DFS traversal of the tree
 *   - O(C log C) for sorting columns (C is the number of unique columns)
 *   - O(N log N) for sorting nodes within each column
 * - Space: O(N)
 *   - O(H) recursion stack space, where H is the height of the tree
 *   - O(N) space for storing nodes in the map
 * 
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
    if (!root) return [];

    // Perform DFS traversal and collect node positions
    const colMap = inOrderDFS(root, { row: 0, col: 0 });

    // Sort the map by column keys to align vertical order
    const sortedCols = [...colMap.entries()].sort((a, b) => a[0] - b[0]);

    const result = [];
    for (const [col, nodes] of sortedCols) {
        // Sort nodes by row first, and by value for ties
        nodes.sort((a, b) => (a.row === b.row ? a.val - b.val : a.row - b.row));
        result.push(nodes.map(node => node.val)); // Extract sorted values
    }

    return result;
};

/**
 * Perform in-order DFS traversal of the tree while keeping track of
 * each node's row and column position.
 * 
 * Any DFS will work here
 */
function inOrderDFS(node, pos, map = new Map()) {
    if (!node) return map;

    const { row, col } = pos;

    // Initialize the list for this column if not already present
    if (!map.has(col)) {
        map.set(col, []);
    }

    // Store the current node value along with its row
    map.get(col).push({ val: node.val, row });

    // Traverse left subtree with updated row and column
    inOrderDFS(node.left, { row: row + 1, col: col - 1 }, map);

    // Traverse right subtree with updated row and column
    inOrderDFS(node.right, { row: row + 1, col: col + 1 }, map);

    return map;
}



// Learning
/**
 * 1. always use .set, .get, .has with map. dont use object wali properties in map
 * 2. learn how to get keys, values from map. dont just use map.keys(). use Array.from(map.keys())
 * 3. ask clarifying question properly
 * 4. since we are dealing with -ve numbers here which can act as index of arr/key of map, hence choose map over arr
 */