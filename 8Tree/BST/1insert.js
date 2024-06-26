/**
 * you are given the root node of a binary search tree (BST) and a value to insert into the tree.
 *  Return the root node of the BST after the insertion.
 *  It is guaranteed that the new value does not exist in the original BST.
 */


// Tip -> insertion always occurs at the leaf node

const insertIntoBSTIteratively = (rootNode, value) => {
  // Guard clause
  if (!rootNode) return new TreeNode(value);

  let currentNode = rootNode;

  while (currentNode) {
    if (value > currentNode.value) {
      if (currentNode.rightNode) {
        currentNode = currentNode.rightNode;
      } else {
        currentNode.rightNode = new TreeNode(value);
        return rootNode;
      }
    } else if (value < currentNode.value) {
      if (currentNode.leftNode) {
        currentNode = currentNode.leftNode;
      } else {
        currentNode.leftNode = new TreeNode(value);
        return rootNode;
      }
    }
  }
};

const insertIntoBSTRecursively = (rootNode, value) => {
  // base condition
  if (!rootNode) {
    return new TreeNode(value);
  }

  if (value > rootNode.value) {
    rootNode.rightNode = insertIntoBSTRecursively(rootNode.rightNode, value);
  }

  if (value > rootNode.value) {
    rootNode.leftNode = insertIntoBSTRecursively(rootNode.leftNode, value);
  }
};

// Example usage:
// Creating a BST
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

// Inserting a value into the BST
const newValue = 5;
const newRoot = insertIntoBST(root, newValue);
