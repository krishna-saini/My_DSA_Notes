export class Node {
  constructor(value) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
  }
}

/**
 * Performs BFS on a binary tree and returns an array of values in BFS order.
 * BFS visits all nodes at the present depth level before moving on to nodes at the next depth level.
 * i/p
 *      10
 *    6     15
 * 3    8       20
 * o/p - [10, 6, 15, 3, 8, 20]
 * @param {TreeNode} root - The root node of the binary tree.
 * @returns {number[]} - Array of node values in BFS order.
 */
export function bfsTree(rootNode) {
  if (!rootNode) return [];

  const queue = [rootNode];
  const result = [];

  // While there are nodes to process in the queue
  while (queue.length) {
    // Dequeue the front node from the queue & add it in result
    const currentNode = queue.shift();
    result.push(currentNode.value);

    // If the current node has a left child, enqueue it
    if (currentNode.leftNode) {
      queue.push(currentNode.leftNode);
    }
    // If the current node has a right child, enqueue it
    if (currentNode.rightNode) {
      queue.push(currentNode.rightNode);
    }
  }
  return result;
}

// TC - O(n)
// Each node is enqueued and dequeued exactly once. While shift() is O(n), it doesn't dominate the overall complexity

// Space Complexity - O(n)
// The maximum number of nodes in the queue is proportional to the max width of the tree, which in the worst case could be O(n)
// Result Array: This will store  n node values. O(n)

// above BFS is valid for binary tree
// make it extensible to any tree

export class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = []; // Array to hold child nodes
  }

  /**
   * Adds a child node to this node.
   */
  addChild(child) {
    this.children.push(child);
  }
}

export const genericBFS = (rootNode) => {
  if (!rootNode) return [];

  const queue = [rootNode];
  const result = [];

  while (queue.length) {
    let currentNode = queue.shift();
    result.push(currentNode.value);

    // Enqueue all children of the current node
    for (const child of currentNode.children) {
      queue.push(child);
    }
  }
  return result;
};


// Create a general tree
let generalRoot = new TreeNode(1);
let child2 = new TreeNode(2);
let child3 = new TreeNode(3);
let child4 = new TreeNode(4);

generalRoot.addChild(child2);
generalRoot.addChild(child3);
generalRoot.addChild(child4);

let child5 = new TreeNode(5);
let child6 = new TreeNode(6);
child2.addChild(child5);
child2.addChild(child6);

let child7 = new TreeNode(7);
child3.addChild(child7);

let child8 = new TreeNode(8);
child4.addChild(child8);

console.log("BFS for General Tree:", genericBFS(generalRoot)); // Expected output: [1, 2, 3, 4, 5, 6, 7, 8]
