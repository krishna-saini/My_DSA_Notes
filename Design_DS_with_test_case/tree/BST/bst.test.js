import { BinarySearchTree } from '.';

describe('test bst insert operation implementation', () => {
  let bst;

  beforeEach(() => {
    /** Arrange for all */
    bst = new BinarySearchTree();
  });
  test('insert the root node correctly if there is no root node', () => {
    /** Act */
    bst.insert(10);
    /** Assert */
    expect(bst.rootNode.value).toBe(10);
  });

  test('inserts multiple nodes correctly', () => {
    /** Act */
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    /** Assert */
    expect(bst.rootNode.value).toBe(10);
    expect(bst.rootNode.leftNode.value).toBe(5);
    expect(bst.rootNode.rightNode.value).toBe(15);
  });
});

describe('test bst search operation implementation', () => {
  let bst;

  beforeEach(() => {
    /** Arrange for all */
    bst = new BinarySearchTree();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);
  });

  test('finds an existing node', () => {
    const node = bst.search(7);
    expect(node).not.toBeNull();
    expect(node.value).toBe(7);
  });

  test('returns null for a non-existent node', () => {
    const node = bst.search(20);
    expect(node).toBeNull();
  });
});
