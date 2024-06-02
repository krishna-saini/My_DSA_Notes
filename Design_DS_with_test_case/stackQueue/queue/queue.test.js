import LinearQueue from './queue';

describe('test linear queue', () => {
  let queue;

  beforeEach(() => {
    queue = new LinearQueue();
  });

  test('should enqueue nodes correctly', () => {
    /** Act */
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    /** Assert */
    expect(queue.size).toBe(3);
    expect(queue.peek()).toBe(1);
  });

  test('should dequeue elements correctly', () => {
    /** Act */
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    /** Assert */
    expect(queue.dequeue()).toBe(1);
    expect(queue.size()).toBe(2);
    expect(queue.peek()).toBe(2);
  });

  test('should throw error when dequeuing from empty queue', () => {
    expect(()=>queue.dequeue()).toThrow();
    expect(() => queue.dequeue()).toThrow('Queue is empty. Cannot dequeue.');

    /**
     * Note for above -
     * expect(() => queue.dequeue()): This part wraps the queue.dequeue() call in an arrow function. This is necessary because toThrow needs to call the function to check if it throws an error.
     * 
     */
  });
});
