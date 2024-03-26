/*
1021. Remove Outermost Parentheses
*/
/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */

var removeOuterParentheses = function (s) {
  let ans = '';
  let count1 = 0;
  let count2 = 0;
  let A = '';
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count1++;
    } else {
      count2++;
    }
    if (count1 === count2) {
      A = s.slice(start + 1, i);
      ans += A;
      count1 = 0;
      count2 = 0;
      start = i + 1;
    }
  }
  return ans;
};

/**
 * solution with less variables
 */
var removeOuterParentheses2 = function (s) {
  let openCount = 0;
  let output = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      if (openCount) output += s[i];
      openCount++;
    } else if (s[i] === ')') {
      openCount--;
      if (openCount) output += s[i];
    }
  }
  return output;
};
