// check if given tree is BST or not

/**
 * Approach 1
 * 
 *  a bst works in the range. 
for ex - root node can take any value from [-Infinity, Infinity]
left subtree of root node can take any value from [-Infinity, rootNode.value]
right subtree of root node can take any value from [rootnode.value, Infinity]
 */

const isBST = (node, min = -Infinity, max = Infinity) => {
  if (!node) return false;

  if (node.value <= min || node.value >= max) {
    return false;
  }

  return (
    isBST(node.leftNode, min, node.value) &&
    isBST(node.rightNode, node.value, max)
  );
};

/**
 * Approach 2
 *
 * In order traversal of a bst tree returns an array of all values of BST in increasing order.
 * so first do in order traversal and then check if the array is strictly increasing or not.
 */

const inOrderDFS = (rootNode) => {
  const stack = [];
  const result = [];

  let currentNode = rootNode;
  while (currentNode || stack.length) {
    // traverse to the left most node
    if (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.leftNode;
    }
    // now current node is null
    currentNode = stack.pop();
    result.push(currentNode.value);

    // traverse right subtree
    currentNode = currentNode.rightNode;
  }
  return result;
};

const isBST2 = (rootNode) => {
  const inOrderDFSResult = inOrderDFS(rootNode);

  for (let i = 1; i < values.length; i++) {
    if (values[i] <= values[i - 1]) {
      return false;
    }
  }
  return true;
};

// Example Usage:
let rootNode = new TreeNode(10);
rootNode.leftNode = new TreeNode(5);
rootNode.rightNode = new TreeNode(15);
rootNode.leftNode.leftNode = new TreeNode(2);
rootNode.leftNode.rightNode = new TreeNode(7);
rootNode.rightNode.leftNode = new TreeNode(12);
rootNode.rightNode.rightNode = new TreeNode(20);

console.log(isBSTFromInOrderTraversal(rootNode)); // Output: true
