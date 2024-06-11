/**
 * return list of nodes in pre-order traversal
 * A walk in which each parent node is traversed before its children
 */
function preOrderDFS(node, result = []) {
  if (node === null) {
    return result;
  }
  result.push(node.value);

  if (node.leftNode) {
    preOrderDFS(node.leftNode, result);
  }

  if (node.rightNode) {
    preOrderDFS(node.rightNode, result);
  }

  // for generic tree
  //   for (let child of node.children) {
  //     preOrderTraversal(child);
  //   }

  return result;
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.leftNode = null;
    this.right = null;
  }
}

let rootNode = new TreeNode(1);
rootNode.leftNode = new TreeNode(2);
rootNode.rightNode = new TreeNode(3);
rootNode.leftNode.leftNode = new TreeNode(4);
rootNode.leftNode.rightNode = new TreeNode(5);
rootNode.rightNode.leftNode = new TreeNode(6);
rootNode.rightNode.rightNode = new TreeNode(7);

const result = preOrderDFS(rootNode);

console.log(result);
