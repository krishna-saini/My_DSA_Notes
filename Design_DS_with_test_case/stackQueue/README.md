# Stacks and Queue
- both are linear DS
- flexible size
- both does not allow random access unlike array 
- the main diff lies in how elements removed from them

## STACK
- LIFO DS
- Last in first out 
- eg - call stack in JS engine. The last Execution context goes in that executes first
- Push, which adds an element to the collection, - O(1)
- Pop, which removes the most recently added element -O(1)
- If the stack is full and does not contain enough space to accept another element, the stack is in a state of stack overflow.
- A stack is needed to implement depth-first search.
- A stack can be implemented using array as well as using linked list.
- use stack in those problems where we have to take decision in future based on past value

### Practical application
- call stack of JS engine
- Undo/Redo Functionality - undo the latest action which is at top of stack. it doesnt go a hundred actions back. you have to step though it constantly.
- Routing(the history object) in React/other framework

### implementation 
- A dynamic array is sufficient to implement a stack structure.(push and pop / unshift and shift)

## QUEUE
- FIFO DS
- First in first out
- eg - micro/macro task queue in JS engine. the first Fn goes in it executes first
- adding element at the end -> enqueue O(1)
- removing elements from front - dequeue O(1)
- peek operation ->  returns the value of the next element to be dequeued without dequeuing it.
- used in the implementation of breadth-first search.

### Practical application
- background tasks
- printing queue

### implementation 
-  can be implemented using Array (push + shift or unshift + pop) but it will rearrange the whole array while doing its operations.
- A doubly linked list has O(1) insertion and deletion at both ends, so it is a natural choice for queues.
- A regular singly linked list only has efficient insertion and deletion at one end. However, a small modification—keeping a pointer to the last node(this.tail) in addition to the first one—will enable it to implement an efficient queue.


## Monotonic stack
-  maintains its elements in a specific order( increasing or decreasing).
- When an element is popped from the monotonic stack, it will never be utilized again.
Problems Involving Element Removal: Monotonic stacks are often used in problems where you need to remove elements from the stack once their purpose is fulfilled. Elements are pushed onto the stack while certain conditions are met, and they are popped when no longer relevant.
- Immediate Neighbours: The problems that require finding immediate neighbours, such as the nearest greater or smaller elements to the left or right, are good candidates for a monotonic stack.
- problems like next/previous greater/smaller element of an array can be solved
- Monotonicity Changes: Some problems involve changing monotonicity requirements during traversal, which can be handled using a combination of increasing and decreasing monotonic stacks
- TC - O(1)

