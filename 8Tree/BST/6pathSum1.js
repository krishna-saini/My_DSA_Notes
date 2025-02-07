/**
 * https://leetcode.com/problems/path-sum/
 * Given the root of a binary tree and an integer targetSum, 
 * return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.



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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // keep on calling the function recursively and decrease the target sum
    if(!root) return false;
    targetSum = targetSum - root.val;
     // check if the node is a leaf,
     if(!root.left && !root.right){
         // if yes, it means we have traversed root to leaf path
         // check our target sum has become zero or not
         return targetSum === 0;
     }

     // keep exploring left side and right side of node
     // if any one side satisy the condition or 
     return hasPathSum(root.left, targetSum ) || hasPathSum(root.right, targetSum);
};