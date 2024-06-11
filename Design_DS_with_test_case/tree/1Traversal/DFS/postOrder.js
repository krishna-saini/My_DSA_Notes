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

const result = postOrderDFS(rootNode);

console.log(result);
