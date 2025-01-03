// find-the-majority-element-that-occurs-more-than-n-2-times/

// https://leetcode.com/problems/majority-element/

// Brute Force
// O(n^2), O(1)

// using mapping
// O(n), O(n)

// Moore voting algo
/*
Approach: 
Initialize 2 variables:
Count –  for tracking the count of element
Element – for which element we are counting
Traverse through the given array.
If Count is 0 then store the current element of the array as Element.
If the current element and Element are the same increase the Count by 1.
If they are different decrease the Count by 1.
The integer present in Element should be the result we are expecting 
*/

function majorityElement(arr) {
  // Size of the given array
  let n = arr.length;
  let cnt = 0; // Count
  let el; // Element

  // Applying the algorithm
  // Candidate Selection: Identify a potential candidate for the majority element
  for (let i = 0; i < n; i++) {
    if (cnt === 0) {
      cnt = 1;
      el = arr[i];
    } else if (el === arr[i]) {
      cnt++;
    } else {
      cnt--;
    }
  }
  /**
   * Why this works: The counter tracks a "vote balance." 
   * If an element is the majority, it will have more votes than the others combined, 
   * so it will remain the candidate at the end.
   */

  // Candidate Validation: Verify if the candidate is indeed the majority element.

  // Checking if the stored element is the majority element
  // we dont need this loop if questions says that there will be a majority element
  let cnt1 = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === el) {
      cnt1++;
    }
  }

  if (cnt1 > Math.floor(n / 2)) {
    return el;
  }
  return -1;
}

let arr = [2, 2, 1, 1, 1, 2, 2];
let ans = majorityElement(arr);
console.log("The majority element is:", ans);
