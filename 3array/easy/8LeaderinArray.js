/*
Problem Statement: Given an array, print all the elements which are leaders. 
A Leader is an element that is greater than all of the elements on its right side 
in the array.
*/

// https://takeuforward.org/data-structure/leaders-in-an-array/

// Brute force
// in such problems, keep a flag which is true in starting
// make it false if not following condition
// check if it is still true at the end

// O(n^2) O(n)

// optimal solution
// keep track of max element from the right as that is what matter
const findLeader = (arr) => {
  let ans = [];
  const n = arr.length;
  // Last element of an array is always a leader,
  // push into ans array.
  let max = arr[n - 1];
  ans.push(arr[n - 1]);

  // Start checking from the end whether a number is greater
  // than max no. from right, hence leader.
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > max) {
      ans.push(arr[i]);
      max = arr[i];
    }
  }

  return ans;
};

let arr = [10, 22, 12, 3, 0, 6];

let ans = findLeader(arr);

for (let i = 0; i < ans.length; i++) {
  console.log(ans[i]);
}
