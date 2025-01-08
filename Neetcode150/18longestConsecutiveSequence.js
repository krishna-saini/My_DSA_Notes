/*
https://leetcode.com/problems/longest-consecutive-sequence/submissions/1201080889/

Given an unsorted array of integers nums, 
return the length of the longest consecutive elements sequence.

Input: [100, 200, 1, 3, 2, 4]

Output: 4
*/

// brute force
// for each element, check for rest of the element in array
function linearSearch(arr, num) {
    let n = arr.length; // size of array
    for (let i = 0; i < n; i++) {
      if (arr[i] === num) return true;
    }
    return false;
  }
  
  const bruteForce = (arr) => {
    let longest = 1;
  
    for (let i = 0; i < arr.length; i++) {
      // O(n)
      let start = arr[i];
      let count = 1;
      // check if start+1 exist in arr or not
      while (linearSearch(arr, start + 1)) {
        // O(n)
        count++;
        start++;
      }
      longest = Math.max(longest, count);
    }
    return longest;
  };
  
  //TC - O(n^2)
  
  // using sorting
  const optimal1 = (arr) => {
    let n = arr.length;
    if (n === 0) return 0;
  
    // sort the array:
    arr.sort((a, b) => a - b);
    let longest = 1;
    let lastSmallest = -Infinity;
    let count;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] - 1 === lastSmallest) {
        count++;
        lastSmallest = arr[i];
      } else if (arr[i] !== lastSmallest) {
        lastSmallest = arr[i];
        count = 1;
      }
      longest = Math.max(longest, count);
    }
    return longest;
  };
  // TC - O(nlogn) + O(n)
  
  const optimal2 = (arr) => {
    // use sets
    const set = new Set(arr); // O(n)
    let longest = 1;
    for (let el of set) {
      // check if the element can be the startign point of the sequence
      // how - check if el-1 exists in set
      // if it does, it is not starting element
      // if it doesnt, it may be the starting el of ans
      if (!set.has(el - 1)) {
        let start = el;
        let count = 1;
        // now traverse the set to find the whole sequence
        while (set.has(start + 1)) {
          start++;
          count++;
        }
        longest = Math.max(longest, count);
      }
    }
    return longest;
  };
  
  // TC O(n) + O(N+N)
  // as for worst case the inner while loop will run N times but that will be
  // adding to the outer loop
  // eg for below arr, the outer loop will run 7 times
  // inner loop will run for  5 times starting from 1 + 2 times starting from 100
  // so total iteration = 7+5+2 = 14 (O(2*N))
  let arr = [100, 5, 101, 1, 2, 3, 4];
  let ans = bruteForce(arr);
  console.log("The longest consecutive sequence via brute force is ", ans);
  console.log(
    "The longest consecutive sequence via optimal1 e is ",
    optimal1(arr)
  );
  console.log(
    "The longest consecutive sequence via optimal2 e is ",
    optimal2(arr)
  );
  