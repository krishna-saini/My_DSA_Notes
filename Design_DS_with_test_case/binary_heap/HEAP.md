# Heap Data Structure

## Definition
A heap is a specialized tree-based data structure that satisfies the heap property. It's a complete binary tree with additional constraints.

## Types of Heaps
1. **Max Heap**: Each parent node is greater than or equal to its children.
2. **Min Heap**: Each parent node is less than or equal to its children.

## Properties
- Complete Binary Tree: All levels are fully filled except possibly the last level, which is filled from left to right.
- Heap Property: Satisfies either max-heap or min-heap property.

## Common Operations
- **Insert**: Add an element to the heap (O(log n))
- **Extract-Max/Min**: Remove and return the root element (O(log n))
- **Peek**: View the root element without removing it (O(1))
- **Heapify**: Convert an array into a heap (O(n))

## Implementation
- Usually implemented as arrays
- For a node at index i:
  - Left child: 2i + 1
  - Right child: 2i + 2
  - Parent: (i - 1) / 2 (integer division)

## Applications
- Priority Queues
- Heap Sort algorithm
- Selection algorithms (e.g., finding kth smallest/largest element)
- Graph algorithms (e.g., Dijkstra's shortest path, Prim's minimum spanning tree)
- Memory management in operating systems

## Variants
- Binary Heap (most common)
- Fibonacci Heap
- Binomial Heap
- Leftist Heap
- Skew Heap

## Advantages
- Efficient for maintaining sorted data
- Quick access to the maximum/minimum element
- Efficient insertion and deletion operations

## Time Complexities
- Insert: O(log n)
- Extract-Max/Min: O(log n)
- Peek: O(1)
- Build Heap: O(n)

## Space Complexity
O(n) where n is the number of elements in the heap