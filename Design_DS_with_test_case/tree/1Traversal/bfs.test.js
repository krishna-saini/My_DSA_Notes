import { Node, TreeNode, bfsTree, genericBFS } from "./bfs";

describe('test BFS tree operation', ()=>{
    let rootNode;

  beforeEach(() => {
    rootNode = new Node(1);
    rootNode.leftNode = new Node(2);
    rootNode.rightNode = new Node(3);
    rootNode.leftNode.leftNode = new Node(4);
    rootNode.leftNode.rightNode = new Node(5);
    rootNode.rightNode.leftNode = new Node(6);
    rootNode.rightNode.rightNode = new Node(7);
  });


  test('returns correct BFS order for a complete binary tree', () => {
    const result = bfsTree(rootNode);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('returns empty array for an empty tree', () => {
    const result = bfsTree(null);
    expect(result).toEqual([]);
  });
})


describe('BFS General Tree Operation', () => {
  let rootNode;

  beforeEach(() => {
    rootNode = new TreeNode(1);
    const child1 = new TreeNode(2);
    const child2 = new TreeNode(3);
    const child3 = new TreeNode(4);
    rootNode.addChild(child1);
    rootNode.addChild(child2);
    rootNode.addChild(child3);
    child1.addChild(new TreeNode(5));
    child1.addChild(new TreeNode(6));
    child2.addChild(new TreeNode(7));
    child3.addChild(new TreeNode(8));
  });

  test('returns correct BFS order for a general tree', () => {
    const result = genericBFS(rootNode);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test('returns empty array for an empty tree', () => {
    const result = genericBFS(null);
    expect(result).toEqual([]);
  });
});
