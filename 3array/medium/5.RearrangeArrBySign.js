// TYpe 1 - arr has equal positive and negetive values

// Brute force
// TC(O(n+n/2))
// SC O(n/2+n/2) = O(n)
var rearrangeArray = function (nums) {
  const posArr = []; // O(n)
  const negArr = [];

  // O(n)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      posArr.push(nums[i]);
    } else {
      negArr.push(nums[i]);
    }
  }

  // O(n/2)
  for (let i = 0; i < nums.length / 2; i++) {
    nums[2 * i] = posArr[i];
    nums[2 * i + 1] = negArr[i];
  }

  return nums;
};

// optimised apporach
/*
We know that the resultant array must start from a positive element so we
 initialize the positive index as 0 and negative index as 1 and start traversing 
 the array such that whenever we see the first positive element, it occupies the
  space at 0 and then posIndex increases by 2 (alternate places).
  */

const optimisedSol = (nums) => {
  let posIndex = 0; // positive should be first
  let negIndex = 1;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result[posIndex] = nums[i];
      posIndex += 2;
    } else {
      result[negIndex] = nums[i];
      negIndex += 2;
    }
  }

  return result;
};

// TYPE 2 -> the array has different number of pos and neg numbers

// use brute force only
// find pos and neg array
// loop for 0 to lesser size array
//  A[2*i] = pos[i];
// A[2*i+1] = neg[i];
// add remainint at the end
// let index = lesserSizeArr.length*2;
// loop throug lesser size array to larger size arr
// and insert 
