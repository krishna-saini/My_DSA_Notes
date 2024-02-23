/**
 * Move all Zeros to the end of the array
 */

const bruteForce = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i]);
    }
  }

  for (let i = newArr.length; i < arr.length; i++) {
    newArr.push(0);
  }
  return newArr;
};
console.log(bruteForce[(1, 0, 2, 3, 0, 4, 0, 1)]);

// TC: O(n)
// SC: O(n)

/**
 * optimal solution -> use two pointers method
 * 1. find the index of first zero element & point j to it
 * if j is not found, return same arr
 * 2. loop(i) through array from j+1 to n
 * if arr[i] is non zero, swap the elements
 */

const optimalSolution = (arr) => {
  let j = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }

  if (j === -1) return arr;

  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  return arr;
};
console.log(optimalSolution[(1, 0, 2, 3, 0, 4, 0, 1)]);

// TC: O(n)
// SC: )(1)
