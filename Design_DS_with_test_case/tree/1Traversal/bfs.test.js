import { Node, bfsTree } from "./bfs";

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