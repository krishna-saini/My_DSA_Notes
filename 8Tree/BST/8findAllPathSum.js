const getAllPathSum = function (root, targetSum) {
    if (!root) return [];

    // Helper function to find all path sums recursively
    const pathSum = (node, currentSum) => {
        if (!node) return;

        // Update the current path sum
        currentSum += node.val;

        // Check if it's a leaf node
        if (!node.left && !node.right) {
            pathSumArr.push(currentSum); // Add the sum of the path to the array
        }

        // Recurse for left and right subtrees
        pathSum(node.left, currentSum);
        pathSum(node.right, currentSum);
    };

    const pathSumArr = [];
    pathSum(root, 0);

    // Check if the target sum exists in any path
    return pathSumArr.includes(targetSum);
};

// Example Usage
const root = {
    val: 5,
    left: { val: 4, left: { val: 11, left: { val: 7 }, right: { val: 2 } } },
    right: { val: 8, left: { val: 13 }, right: { val: 4, right: { val: 1 } } },
};

console.log(getAllPathSum(root, 22)); // true for path [5, 4, 11, 2]
