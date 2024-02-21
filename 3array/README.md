## Theory
- arrays are implemented as contiguous blocks of memory, and accessing any element involves a direct calculation of the memory address based on the index.
1. Array is ordered DS
2. TC to access an element is O(1)
3. TC to add/remove an el at the end is O(1)
4. TC to add/remove an el at any other index is O(n)
5. push and pop are always faster than shift/unshift unless its an empty array
6. iterating using any method - O(n)
7. slice/splice - O(n)
8. sorting - O(n*logn)(best case)
9. reverse - O(n)