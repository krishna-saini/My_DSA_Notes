// stack.test.js

import Stack from "./stack";



describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('should initialize with size 0', () => {
    expect(stack.size).toBe(0);
  });

  test('should push elements correctly', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.size).toBe(2);
    expect(stack.peek()).toBe(2);
  });

  test('should pop elements correctly', () => {
    stack.push(1);
    stack.push(2);
    const popped = stack.pop();
    expect(popped).toBe(2);
    expect(stack.size).toBe(1);
  });

  test('should peek at the top element without popping it', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.size).toBe(2);
  });

  test('should throw error when popping from empty stack', () => {
    expect(() => stack.pop()).toThrow('Stack is empty. Cannot pop.');
  });
});
