/**
 * post order traversal: a walk in which the children are traversed before their respective parents are traversed
 * its implementation is same as pre-order except push only when you have already traverse to the end
 */
function postOrderDFS(node, result = []) {
  if (node === null) {
    return result;
  }

  if (node.leftNode) {
    postOrderDFS(node.leftNode, result);
  }

  if (node.rightNode) {
    preOrderDFS(node.rightNode, result);
  }

  result.push(node.value);

  return result;
}

/**
 * Function to perform post-order traversal on a binary tree iteratively using two stacks.
 * @param {TreeNode} root - The root node of the binary tree.
 * @returns {number[]} - Array of node values in post-order sequence.
 */
const postOrderTraversalIterative = function (root) {
  if (!root) {
    return [];
  }

  // Stack to assist in traversal
  const traversalStack = [root];
  // Stack to store nodes in reverse post-order sequence
  const postOrderStack = [];
  // Array to store the final result
  const result = [];

  // Traverse the tree
  while (traversalStack.length) {
    let currentNode = traversalStack.pop();
    postOrderStack.push(currentNode);

    // Push left and right children to the traversal stack
    if (currentNode.leftNode) {
      traversalStack.push(currentNode.leftNode);
    }
    if (currentNode.rightNode) {
      traversalStack.push(currentNode.rightNode);
    }
  }

  // Construct the result from the post-order stack
  while (postOrderStack.length) {
    const node = postOrderStack.pop();
    result.push(node.value);
  }

  return result;
};

/**
 * Function to perform post-order traversal on a binary tree iteratively using single stacks.
 * @param {TreeNode} root - The root node of the binary tree.
 * @returns {number[]} - Array of node values in post-order sequence.
 */
const postOrderTraversalBySingleStack = (root) => {
  const stack = [];
  const result = [];
  let currentNode = root;
  let lastVisitedNode = null; //  This helps determine whether to move to the right child or process the current node.

  // Loop until there are nodes to be processed.
  while (currentNode || stack.length) {
    // Traverse to the leftmost node, pushing all nodes onto the stack.
    if (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.leftNode;
    } else {
      let peekNode = stack[stack.length - 1];
      // If the right child exists and hasn't been processed yet, move to the right child.
      if (peekNode.rightNode && peekNode.rightNode !== lastVisitedNode) {
        currentNode = peekNode.rightNode;
      } else {
        // if no right node, Process the node
        result.push(stack.pop().value);
        lastVisitedNode = peekNode;
      }
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

const result = postOrderDFS(rootNode);

console.log(result);
