class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Instead of returning as soon as we find a leaf node, we will keep traversing
// for all the levels,
// incrementing maximumDepth each time we complete a level.
function findMaximumDepth(root) {
  if (!root) return 0;

  //initialize the queue with root
  const queue = [root];

  let maximumTreeDepth = 0;

  while (queue.length > 0) {
    maximumTreeDepth++;
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      //get next node
      const currNode = queue.shift();

      //insert the children of current node in the queue
      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
    }
  }
  return maximumTreeDepth;
}

// TC  - In the worst case (a completely unbalanced tree),
// the recursion depth could go as deep as the height of the tree,
// leading to O(h) space complexity, where h is the height of the tree. 

// via recursion (DFS)
var maxDepth = function (root) {
  if (!root) return 0;
  let leftSubHeight = maxDepth(root.left);
  let rightSubHeight = maxDepth(root.right);
  return Math.max(leftSubHeight, rightSubHeight) + 1;
};
// TC O(n)

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Maximum Depth: ${findMaximumDepth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Maximum Depth: ${findMaximumDepth(root)}`);
