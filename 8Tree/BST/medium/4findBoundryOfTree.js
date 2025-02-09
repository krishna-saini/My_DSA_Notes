// https://leetcode.com/problems/boundary-of-binary-tree/


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
 * @return {number[]}
 * 
 * Approach:
 * - Traverse the binary tree to collect the boundary nodes.
 * - The boundary consists of:
 *   1. Root node (if it exists)
 *   2. Left boundary (excluding leaf nodes)
 *   3. Leaf nodes from the entire tree
 *   4. Right boundary (excluding leaf nodes, added in reverse order)
 * 
 * Complexity:
 * - Time Complexity: O(N), where N is the total number of nodes in the tree.
 * - Space Complexity: O(H) for recursion depth, where H is the height of the tree.
 */
var boundaryOfBinaryTree = function (root) {
    if (!root) return [];

    const result = [root.val]; // Start with the root node

    // Collect the left boundary (excluding leaf nodes)
    if (root.left) {
        result.push(...getLeftBoundary(root.left));
    }

    // Collect leaf nodes (from the entire tree)
    if (root.left || root.right) {
        result.push(...getAllLeafNodes(root));
    }

    // Collect the right boundary (excluding leaf nodes, in reverse order)
    if (root.right) {
        result.push(...getRightBoundary(root.right).reverse());
    }

    return result;
};

/**
 * Helper to collect the left boundary excluding leaf nodes.
 * We return an empty array for leaf nodes to avoid including them as part of the boundary.
 * @param {TreeNode} node
 * @param {number[]} boundary
 */
const getLeftBoundary = (node, localResult = []) => {
    if (!node.left && !node.right) return []; // Skip leaf nodes

    localResult.push(node.val);

    if (node.left) {
        getLeftBoundary(node.left, localResult);
    } else if (node.right) {
        getLeftBoundary(node.right, localResult);
    }

    return localResult;
};

/**
 * Helper to collect all leaf nodes from the entire tree.
 * DFS is used here to ensure we visit all subtrees thoroughly.
 * @param {TreeNode} node
 * @param {number[]} leaves
 */
const getAllLeafNodes = (node, localResult = []) => {
    if (!node) return [];

    // Check if it's a leaf node
    if (!node.left && !node.right) {
        localResult.push(node.val);
    }

    // DFS traversal (in-order traversal)
    if (node.left) {
        getAllLeafNodes(node.left, localResult);
    }
    if (node.right) {
        getAllLeafNodes(node.right, localResult);
    }

    return localResult;
};

/**
 * Helper to collect the right boundary excluding leaf nodes.
 * We return an empty array for leaf nodes to avoid including them in the right boundary.
 * @param {TreeNode} node
 * @param {number[]} boundary
 */
const getRightBoundary = (node, localResult = []) => {
    if (!node.left && !node.right) return []; // Skip leaf nodes

    localResult.push(node.val);

    if (node.right) {
        getRightBoundary(node.right, localResult);
    } else if (node.left) {
        getRightBoundary(node.left, localResult);
    }

    return localResult;
};


// good approach but we dont need to create empty [] in each functions 
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Optimized solution for finding the boundary of a binary tree.
 * 
 * @param {TreeNode} root
 * @return {number[]}
 * 
 * Approach:
 * - Collect root, left boundary, leaf nodes, and right boundary efficiently.
 * - Minimize unnecessary recursive calls by combining functions when possible.
 * 
 * Complexity:
 * - Time: O(N), where N is the number of nodes.
 * - Space: O(H) for recursion stack, where H is the tree height.
 */
const boundaryOfBinaryTree = function (root) {
    if (!root) return [];

    const result = [];

    // Add root node if it's not a leaf
    if (!isLeaf(root)) result.push(root.val);

    // Collect left boundary excluding leaf nodes
    addLeftBoundary(root.left, result);

    // Collect all leaf nodes
    addLeaves(root, result);

    // Collect right boundary excluding leaf nodes (in reverse)
    addRightBoundary(root.right, result);

    return result;
};

/**
 * Check if a node is a leaf node.
 * @param {TreeNode} node
 */
const isLeaf = (node) => !node.left && !node.right;

/**
 * Add left boundary nodes excluding leaf nodes.
 * @param {TreeNode} node
 * @param {number[]} result
 */
const addLeftBoundary = (node, result) => {
    while (node) {
        if (!isLeaf(node)) result.push(node.val);
        node = node.left || node.right;
    }
};

/**
 * Add leaf nodes using DFS (pre-order traversal).
 * @param {TreeNode} node
 * @param {number[]} result
 */
const addLeaves = (node, result) => {
    if (!node) return;
    if (isLeaf(node)) {
        result.push(node.val);
        return;
    }
    addLeaves(node.left, result);
    addLeaves(node.right, result);
};

/**
 * Add right boundary nodes excluding leaf nodes (in reverse order).
 * @param {TreeNode} node
 * @param {number[]} result
 */
const addRightBoundary = (node, result) => {
    const stack = [];
    while (node) {
        if (!isLeaf(node)) stack.push(node.val);
        node = node.right || node.left;
    }
    while (stack.length) {
        result.push(stack.pop());
    }
};
