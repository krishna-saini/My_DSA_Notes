/**
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
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
 * @return {number}
 */
var goodNodes = function(root) {
    if(!root) return 0;
    // intutiion
    // idea is to traverse DFS on the tree & keep track of max on the way
    // max is root in starting
    // if any node value >= max value, increase count
    const InOrderDFS = (node, max)=>{
        if(!node) return;
        if(node.val >= max){
            max= node.val;
            count++;
        }

        InOrderDFS(node.left, max);
        InOrderDFS(node.right, max)
    }


    let count = 0;
    InOrderDFS(root, root.val);
    return count;
};