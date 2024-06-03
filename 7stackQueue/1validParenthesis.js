/**
 * https://leetcode.com/explore/learn/card/queue-stack/230/usage-stack/1361/
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 */

/**
 * Intution -
 * we need to ensure that every opening bracket has a corresponding closing bracket of the same type and in the correct order.
 * This problem can be efficiently solved using a stack data structure.
 */

const isValid = (str) => {
  const stack = []; // Initialize an empty stack.
  const matchingBrackets = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let char of str) {
    // For each opening bracket (, {, [, push it onto the stack.
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0) {
        return false;
      }
      if (stack.pop() !== matchingBrackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// Example usage:
console.log(isValid('{[()]}')); // true
console.log(isValid('{[(])}')); // false
console.log(isValid('{[}')); // false
