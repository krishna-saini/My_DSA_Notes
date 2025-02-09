/**
 * 
 * https://leetcode.com/problems/subtree-of-another-tree/
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree1 = function (root, subRoot) {

    if (!root) return false; // Empty tree can't contain a non-null subtree

    if (!subRoot) return true; // Null subRoot is always a subtree
    const dfsTraversal = (node1) => {
        if (!node1) {
            return false;
        }

        if (node1.val === subRoot.val) {
            // check for the whole structure
            // if we get a potential node in first tree
            // check if similar tree structue 
            // else keep on looking for other potential candidate
            if(checkTreeStructure(node1, subRoot)){
                return true;
            }
        }
        return  dfsTraversal(node1.left) || dfsTraversal(node1.right);

    }

    return dfsTraversal(root);
};

const checkTreeStructure = (node1, node2) => {
    // if any one node does not exist, check if another one exist or does not exist
    if(!node1 || !node2){
        return node1 === node2; // (null, 1)(1, null)(null, null)
    }
    // first check values
    if(node1.val !== node2.val){
        return false;
    }

    // check for left sub tree & right sub tre
    return checkTreeStructure(node1.left, node2.left) && checkTreeStructure(node1.right, node2.right);

}

/**
 * If no match is found until the last possible candidate, the complexity becomes O(N×M) as we have to traverse both the array
 * If a match is found near the root, the complexity would be approximately  O(N+M)
 * 
 * Recursion Depth:  O(Height of root)+O(Height of subRoot)
 */

/**
 *  The issue with above approach is that even once we found that the subtree is identical to tree, we are still looking.
 * The recursive calls for dfsTraversal(node1.left) and dfsTraversal(node1.right) 
 * are always made even after identifying a valid subtree.
 * 
 * hence we can optimise there by first checking if the two nodes are identical. 
 *   if they are not, keep looking further left and right side of main tree
 *   if they are equal, check further deep in both tree to match structure
 */
const isSubtree = function (root, subRoot) {
    if (!root) return false; // Main tree is empty, no match possible
    if (areIdentical(root, subRoot)) return true;

    // Check the left and right subtrees
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

/**
 * Check if two trees are identical.
 * @param {TreeNode} node1
 * @param {TreeNode} node2
 * @return {boolean}
 */
const areIdentical = (node1, node2) => {
    if (!node1 && !node2) return true; // Both are null
    if (!node1 || !node2) return false; // One is null, the other isn't
    if (node1.val !== node2.val) return false; // Mismatch in values

    // Recursively compare left and right subtrees
    return areIdentical(node1.left, node2.left) && areIdentical(node1.right, node2.right);
};

/**
 * Complexity Analysis:
 * - **Time Complexity:** 
 *   - Best case: O(N + M) if the match is found near the root.
 *   - Worst case: O(N * M) if no match is found and every node is compared.
 *
 * - **Space Complexity:** O(H) for the recursion stack, where H is the height of the tree.
 *
 * Example:
 * Input:
 *     root:
 *         3
 *        / \
 *       4   5
 *      / \
 *     1   2
 *     subRoot:
 *       4
 *      / \
 *     1   2
 * Output: true
 */
