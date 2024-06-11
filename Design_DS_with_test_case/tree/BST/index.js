/**
 * Implement a BST using linked list
 */
class Node {
  constructor(value) {
    // this.key = key;
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
  }
}
export class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  insert(value) {
    const newNode = new Node(value);
    // if there is no root node
    if (!this.rootNode) {
      this.rootNode = newNode;
      return this;
    }

    let currentNode = this.rootNode;

    while (true) {
      if (newNode.value === currentNode.value) {
        // based upon the choice, we can either return Undefined
        // or can add frequency in front of the node like 10(2)
        // or insert it in left/right.
        // ask this question while implementing it
        return undefined;
      }
      if (newNode.value < currentNode.value) {
        // traverse to left side
        if (!currentNode.leftNode) {
          currentNode.leftNode = newNode;
          return this;
        }
        currentNode = currentNode.leftNode;
      } else if (newNode.value > currentNode.value) {
        // traverse to right side
        if (!currentNode.rightNode) {
          currentNode.rightNode = newNode;
          return this;
        }
        currentNode = currentNode.rightNode;
      }
    }
  }

  /**
   * search / find operation
   */
  search(searchValue) {
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;

    while (currentNode) {
      if (currentNode.value === searchValue) {
        return currentNode;
      }

      if (searchValue < currentNode.value) {
        // search in left side
        currentNode = currentNode.leftNode;
      } else if (searchValue > currentNode.value) {
        // seach in right side
        currentNode = currentNode.rightNode;
      }
    }
    return currentNode; // returning null
  }

  bfs() {
    if (!this.rootNode) return [];
    let currentNode = this.rootNode;
    const result = [];
    const queue = [];

    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      result.push(currentNode.value);

      if (currentNode.leftNode) {
        queue.push(currentNode.leftNode);
      }

      if (currentNode.rightNode) {
        queue.push(currentNode.rightNode);
      }
    }
    return result;
  }

  preOrderDFS() {
    const result = [];

    const traverse = (node) => {
      result.push(node.value);
      if (node.leftNode) {
        traverse(node.leftNode);
      }

      if (node.rightNode) {
        traverse(node.rightNode);
      }
    };

    traverse(this.rootNode);
    return result;
  }

  postOrderDFS(node = this.rootNode, result = []) {
    if (node.leftNode) {
      this.postOrderDFS(node.leftNode, result);
    }

    if (node.rightNode) {
      this.postOrderDFS(node.rightNode, result);
    }

    // push at the end of the branch
    result.push(node.value);

    return result;
  }

  inOrderDFS(node = this.rootNode, result = []) {
    if (node.leftNode) {
      this.inOrderDFS(node.leftNode, result);
    }

    result.push(node.value);

    if (node.rightNode) {
      this.inOrderDFS(node.rightNode, result);
    }

    return result;
  }

  get(key) {}

  delete(key) {}

  iterable() {}
}

const tree = new BinarySearchTree();
tree.insert(20);
tree.insert(10);
tree.insert(30);
tree.insert(15);
tree.insert(25);
console.log(tree);
