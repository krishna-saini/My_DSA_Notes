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
const output = groupByLevelBFS(generalRoot);
console.log("group by level:", output[0], output[1], output[2]);