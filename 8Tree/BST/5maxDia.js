
// https://leetcode.com/problems/diameter-of-binary-tree/
const diameterOfBinaryTree = function(root) {
    let maxDia = 0; // Use a shared variable

    const getHeight = (node) => {
        if (!node) return 0;

        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);

        // Update the diameter at each node
        maxDia = Math.max(maxDia, leftHeight + rightHeight);

        // Return height of subtree
        return 1 + Math.max(leftHeight, rightHeight);
    };

    getHeight(root); // Kick off traversal
    return maxDia;
};
