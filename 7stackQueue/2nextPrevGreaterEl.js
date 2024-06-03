/**
 * Given an array, find the next greater/smaller element for each element.
 * The next greater element of an element is the first greater element to its right.
 */

var nextSmaller = function (numbers) {
  const stack = [];
  const result = new Array(numbers.length).fill(0);

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[i] < numbers[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = numbers[i];
    }

    stack.push(i);
  }
  return result;
};

/**
 * Given an array, find the previous greater/smaller element for each element.
 * The next greater element of an element is the first greater element to its right.
 */

/**
 * Intuition -
 * We maintain a stack that keeps track of the indices of elements
 * whose previous greater element is yet to be found.
 */
const previousGreater = (numbers) => {
  const stack = [];
  const result = new Array(numbers).fill(-1);

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[i] >= numbers[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length > 0) {
      result[i] = numbers[stack[stack.length - 1]];
    }

    stack.push(i);
  }

  return result;
};

// overall, the operations inside the inner while loop are constant time operations (O(1)).
// The loop may execute multiple times, but the number of iterations is bounded by 
// the number of elements already in the stack. Since each element is pushed onto
// the stack at most once and popped at most once, the total time complexity remains O(n),
// where n is the number of temperatures in the input array.
