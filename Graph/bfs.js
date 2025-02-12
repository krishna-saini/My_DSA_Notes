// https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1
/**
 * BFS is a level order traversing
 * Here you will be given adjacent matric
 * at level 0, there will be always one node
 * all nodes which are 1 edge away from level 0 are level 1. and so on
 */
class Solution {
    // Function to return Breadth First Traversal of the given graph.
    bfsOfGraph(adj) {
        const numberOfNodes = adj.length;
        const visitedArr = new Array(numberOfNodes).fill(0);
        const queue = [0];  // Start BFS from node 0
        visitedArr[0] = 1; // Mark the starting node as visited
        const result = [];

        while (queue.length) {
            const CN = queue.shift(); // Use shift() for BFS (FIFO queue)
            result.push(CN);

            // Process adjacent nodes
            adj[CN].forEach(adjNode => {
                if (!visitedArr[adjNode]) {
                    queue.push(adjNode);
                    visitedArr[adjNode] = 1; // Mark as visited
                }
            });
        }
        return result;
    }
}
