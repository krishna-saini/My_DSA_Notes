/**
 * https://leetcode.com/problems/next-greater-element-ii/
 * for circular array
 */

// Brute force
const nextGreaterElementsBrute = function (arr) {
    // idea is to loop through the array from right side
    // for each elemement, loop twice
    // first loop towards right of it (from that el to last index)
    // if next greater is not found
    // then another loop from 0th index to that element
    // if no next greater is found, inset -1 to the result array
  
    const result = [];
    let found = false; // Flag to check if a greater element is found
    // always use flag like instead of checking !arr[i] as arr[i] can be 0 too
  
    // 1.
    for (let i = arr.length - 1; i >= 0; i--) {
      // 3.
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
          found = true;
          result[i] = arr[j];
          break;
        }
      }
  
      // 5.
      if (!found) {
        for (let j = 0; j < i; j++) {
          if (arr[j] > arr[i]) {
            found = true;
  
            result[i] = arr[j];
            break;
          }
        }
      }
  
      // 6.
      // result[i] can take 0 too
      if (!found) {
        result[i] = -1;
        found = true;
      }
      found = false;
    }
    return result;
};
  
// TC - O(n^2) due to inner loops, SC -O(n)

/**
 * It can be optimised by using stack which keep track of the element for which
 * we havent found the NGE
 *
 * loop through the array
 * Keep a stack to store indices of the elements for which NGL is yet to be found
 * keep checking if the current element of arr is > top most element in stack
 *    if yes, pop that index out and push that current element value to the respective index in result array
 */

/**
 *  SInce it is a case of circular arr -
 *  1. increase size of arr by twice by putting the elements of starting in the last
 * 2. traverse the arr twice to accomodate left side elements too
 */

function nextGreaterElements1(arr) {
    let stack = [];
    let result = new Array(arr.length).fill(-1);
  
    for (let i = 0; i < arr.length; i++) { // O(n)
      while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
        let index = stack.pop();
        result[index] = arr[i];
      }
      stack.push(i);
    }
  
    // now we have to traverse again on left side of each el for which NGL is yet to found
    for (let i = 0; i < stack.at(-1); i++) { // O(n)
      while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
        let index = stack.pop();
        result[index] = arr[i];
      }
    }
  
    return result;
}
  
/**
 * Another way of doing above is via single loop 
 */
function nextGreaterElements2(arr) {
    const n = arr.length;
    const stack = []; // Stack to store indices of unresolved elements.
    const result = new Array(n).fill(-1); // Initialize result array with -1.
  
    // Traverse the array twice to handle the circular nature.
    for (let i = 0; i < 2 * n; i++) {
      // Use modulo operator to wrap around the indices in the second traversal.
      const circularIndex = i % n;
  
      // While the stack is not empty and the current element is greater than
      // the element at the index stored on top of the stack.
      while (
        stack.length > 0 &&
        arr[circularIndex] > arr[stack[stack.length - 1]]
      ) {
        const topIndex = stack.pop(); // Get the index from the stack.
        result[topIndex] = arr[circularIndex]; // Update the result for that index.
      }
  
      // Push the index onto the stack during the first traversal only.
      // as in 2nd traversal, we only want to find NGL of remaining el
      if (i < n) {
        stack.push(circularIndex);
      }
    }
    return result;
}

// Example usage:
const arr = [1, 2, 1];
console.log(nextGreaterElements1(arr)); // Output: [2, -1, 2]

/**
 * Time Complexity - O(n)
 * 
Each element is pushed onto the stack exactly once when it's encountered in the loop.
Each element is popped from the stack exactly once when its "next greater element" is found.
Therefore, the total number of stack operations (push + pop) across the entire algorithm is at most 2n (one push and one pop for each element).

Each iteration of the for loop performs a fixed amount of work:
    Either push an index onto the stack (one operation), or
    Pop indices from the stack until the current element is smaller or the stack is empty (one operation per element popped).
    Since the number of push and pop operations combined is linear, the total work done by the while loop over all iterations of i is proportional to O(n).
*/