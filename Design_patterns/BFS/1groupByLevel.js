/**
 * a level order traversal where values need to be grouped by their level in the tree.
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 */

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

const groupByLevelBFS = (rootNode) => {
  if (!rootNode) return [];

  const queue = [rootNode];
  const result = [];

  while (queue.length) {
    const currentLevelSize = queue.length; // Number of nodes at the current level
    const currentLevelNodes = [];

    for (let i = 0; i < currentLevelSize; i++) {
      const currentNode = queue.shift();
      currentLevelNodes.push(currentNode.value);

      // Enqueue all children of the current node
      for (const child of currentNode.children) {
        queue.push(child);
      }
    }
    // Add the current level to the result
    result.push(currentLevelNodes);
  }
  return result;
};
