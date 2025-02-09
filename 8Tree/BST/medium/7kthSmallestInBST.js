//
/**
 * Intuition
 * In order traversal gives sorted list of node values in increasing order
 * 
 * find that inORderTraversal Arr and return k-1th element from it
 * TC - O(n),
 * SC - O(n) due to array use
 * 
 * optimise SC - 
 * SInce we are only interested in kth smallest element, keep a track of it using a variable
 * once it become equal to k, return that node values
 * THis will prevent traversing complete tree if we find the return value much earlier
 * 
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    // keep an array and starting filling it inorder dfs
    // once array has k-1th el, reutrn
    const stack = [];
    let count = 0;
    let currentNode = root;

    while (stack.length || currentNode) {
   
        // first traveers e to the left most node and keep pushing all nodes in stack 
        if (currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        } else {
            // reached at end of left side
            // time to pop the left most nod
            // push it in result
            currentNode = stack.pop();
            count++;
            if (count === k ) {
                return currentNode.val;
            }
            // explore right subtree
            currentNode = currentNode.right;
        }
    }

    return result[k - 1];
};



const inOrderDFS = (node, result = []) => {
    if (!node) return result;
    // inorder - left root right
    inOrderDFS(node.left, result);
    result.push(node.val);
    inOrderDFS(node.right, result);
    return result;
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0; // Track the number of nodes visited
    let result = null; // Store the Kth smallest value

    const inOrderDFS = (node) => {
        // Base case: exit if node is null or result is found
        if (!node || result !== null) return;

        // In-order: left -> root -> right
        inOrderDFS(node.left);

        // Process current node
        count++;
        if (count === k) {
            result = node.val;
            return;
        }

        inOrderDFS(node.right);
    };

    inOrderDFS(root);
    return result;
};

/**
 * Complexity Analysis:
 * - Time Complexity: 
 *   - Worst Case: O(N) for Unbalanced BST
 *     - In the worst case, the BST is highly unbalanced (e.g., it degenerates into a linked list).
 *     - We may need to visit all N nodes to find the kth smallest element, resulting in O(N) complexity.
 *   - Balanced BST Case: O(H + k)
 *     - H is the height of the tree.
 *     - Initially, we traverse down to the leftmost node, taking O(H) time.
 *     - Afterward, we may process up to k nodes to find the kth smallest element.
 *     - Edge Case: If k = N (rightmost element), the traversal might cover nearly the entire tree.
 *       - In such cases, O(H + k) simplifies to O(N) since H can be approximately log N for balanced trees.
 * 
 * - Space Complexity: O(H)
 *   - The recursive or iterative stack stores nodes along the path of the traversal.
 *   - In a balanced BST, the height H is O(log N).
 *   - In an unbalanced BST, H can be N, leading to O(N) space complexity.
 */
