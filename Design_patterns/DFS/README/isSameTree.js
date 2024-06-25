const isSameTree = function (node1, node2) {
  // If both nodes are null, they are the same
  if (!node1 && !node2) return true;
  // If one of the nodes is null and the other is not, they are not the same
  if (!node1 || !node2) return false;
  // If the values of the nodes are not the same, the trees are not the same
  if (node1.value !== node2.value) return false;

  // Recursively compare the left and right children
  return (
    isSameTree(node1.leftNode, node2.leftNode) &&
    isSameTree(node1.rightNode, node2.rightNode)
  );
};

// Example usage
class TreeNode {
  constructor(value, leftNode = null, rightNode = null) {
    this.value = value;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
}

let rootNode1 = new TreeNode(1);
rootNode1.leftNode = new TreeNode(2);
rootNode1.rightNode = new TreeNode(3);

let rootNode2 = new TreeNode(1);
rootNode2.leftNode = new TreeNode(2);
rootNode2.rightNode = new TreeNode(3);

console.log(isSameTree(rootNode1, rootNode2)); // Output: true
