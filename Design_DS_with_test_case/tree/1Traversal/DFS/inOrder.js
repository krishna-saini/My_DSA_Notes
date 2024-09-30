/**
 * In order traversal: Left root right, sorted
 * its implementation is same as pre-order except push only when there is no left
 */
function inOrderDFS(node, result = []) {
  if (node === null) {
    return result;
  }

  if (node.leftNode) {
    inOrderDFS(node.leftNode, result);
  }

  result.push(node.value);

  if (node.rightNode) {
    inOrderDFS(node.rightNode, result);
  }

  return result;
}

/**
 * Solve it using iterations
 * Use a stack to keep track of nodes. This helps us backtrack to the parent node after visiting the left subtree.
 */
const inOrderIterativeDFS = (rootNode) => {
  const stack = [];
  const result = [];
  let currentNode = rootNode;

  // looop while current node is null or stack is not empty
  while (currentNode || stack.length) {
    // Traverse to the leftmost node until current is not null
    if (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.leftNode;
    } else {
      // currentNode will be null after this loop

      // process the Node
      currentNode = stack.pop();
      result.push(currentNode.value);

      // Explore Right Subtree:
      currentNode = currentNode.rightNode;
    }
  }
  return result;
};

class TreeNode {
  constructor(value) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
  }
}

let rootNode = new TreeNode(1);
rootNode.leftNode = new TreeNode(2);
rootNode.rightNode = new TreeNode(3);
rootNode.leftNode.leftNode = new TreeNode(4);
rootNode.leftNode.rightNode = new TreeNode(5);
rootNode.rightNode.leftNode = new TreeNode(6);
rootNode.rightNode.rightNode = new TreeNode(7);

const result = inOrderDFS(rootNode);

console.log(result);
