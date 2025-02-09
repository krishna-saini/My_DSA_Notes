// 

/**
 * can be done via assigning column to each node
 * in any group of nodes has same column, we have to take it which ever is on top i.e which as less value of row
 * for this, we can take help of map which will store column as keys and values as the very first node that has that column value
 * 
 * we have to traverse each node starting from (root, col=0)
 * traversal can be done via BFS or DFS
 * 
 */
/**
 * Definition for a binary tree node
 * class Node {
 *     constructor(data) {
 *         this.data = data;
 *         this.left = null;
 *         this.right = null;
 *     }
 * }
 */
class Solution {
    topView(root) {
        if (!root) return [];

        const topViewMap = new Map();
        const queue = [];

        // Initialize the queue with the root node and its horizontal distance (HD)
        queue.push({ node: root, col: 0 });

        while (queue.length > 0) {
            const { node, col } = queue.shift();

            // Add to topViewMap only if the column isn't already present
            if (!topViewMap.has(col)) {
                topViewMap.set(col, node.data);
            }

            // Enqueue left child with column - 1
            if (node.left) {
                queue.push({ node: node.left, col: col - 1 });
            }

            // Enqueue right child with column + 1
            if (node.right) {
                queue.push({ node: node.right, col: col + 1 });
            }
        }

        // Extract the values from the sorted keys of the map
        const result = [];
        const sortedColumns = [...topViewMap.entries()].sort((a, b) => a[0] - b[0]);

        for (const [_, value] of sortedColumns) {
            result.push(value);
        }

        return result;
    }
}

// Example Usage
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Example Tree:
//          1
//        /   \
//       2     3
//      / \   / \
//     4   5 6   7
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const solution = new Solution();
console.log("Top View:", solution.topView(root));
// Output: [4, 2, 1, 3, 7]

/**
 * Overall time  complexity:  O(N+WlogW)
 * 
 * Space Complexity:  O(H+W)

O(H) for the recursion stack where H is the tree height.

O(W) for the map storage, where W is the tree width
 */