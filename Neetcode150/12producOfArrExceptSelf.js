/**
 * https://leetcode.com/problems/product-of-array-except-self/description/
 * 
 * @param {number[]} nums
 * @return {number[]}
 */

// Approach 1: Brute Force
const productExceptSelf = function (nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                product *= nums[j];
            }
        }
        result.push(product);
    }
    return result;
};
// Time Complexity: O(n^2) - nested loops iterating through the array
// Space Complexity: O(n) for the result array, O(1) additional space

// Approach 2: Using Division Operation
const productExceptSelf1 = function (nums) {
    if (nums.length <= 1) {
        return nums;
    }
    const result = new Array(nums.length).fill(0);
    let zeroCount = 0;
    let product = 1;

    // First pass: count zeros and calculate product of non-zero elements
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroCount++;
        } else {
            product *= nums[i];
        }
    }

    // Second pass: fill the result array based on zero count
    for (let i = 0; i < nums.length; i++) {
        if (zeroCount > 1) {
            // If there's more than one zero, all products will be zero
            return result;
        }
        if (zeroCount === 1) {
            // If there's exactly one zero, only its corresponding product will be non-zero
            result[i] = nums[i] === 0 ? product : 0;
        }
        if (zeroCount === 0) {
            result[i] = product / nums[i];
        }
    }

    return result;
};
// Time Complexity: O(n) - two passes through the array
// Space Complexity: O(1) additional space (not counting the result array)


// Approach 3- > find prefix and suffix arr to  find it
const productExceptSelf3 = function (nums) {
    if (nums.length <= 1) {
      return nums;
    }
    // outer loop(i from 0 to n)
    const result = new Array(nums.length).fill(1); // SC - O(1)
  
    // if we dont have to use division
    // then lets first find prefix product for each index
    // then find suffix product for each index
    // multiple prefix and suffix product for each index to get desired result
  
    // eg [ 2,3,4,2]
    // prefixproduct = [1,2,6,24]
    // suffixproduct = [24,8,2,1]
    // final ans = [24,16,12,24]
  
    let prefixProductArr = [1];
    for (let i = 1; i < nums.length; i++) {
      // update each index with  product of all indices before them
      //   console.log(nums[i-1], prefixProductArr)
  
      prefixProductArr[i] =
        nums[i - 1] * prefixProductArr[prefixProductArr.length - 1];
    }
    //   console.log(prefixProductArr)
  
    let suffixProductArr = [1];
    const reverseNums = nums.reverse();
    for (let i = 1; i < reverseNums.length; i++) {
      suffixProductArr[i] =
        reverseNums[i - 1] * suffixProductArr[suffixProductArr.length - 1];
    }
    // console.log(suffixProductArr)
    const reverse = suffixProductArr.reverse();
    for (let i = 0; i < suffixProductArr.length; i++) {
      result[i] = reverse[i] * prefixProductArr[i];
    }
  
    return result;
  };
  

// Approach 3: Using Prefix and Suffix Products - Optimised 
// we dont need seperate array for each of the prefix and suffix 
const productExceptSelf4 = function (nums) {
    if (nums.length <= 1) {
        return nums;
    }
    const result = new Array(nums.length).fill(1);

    // Calculate prefix products
    let prefixProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] *= prefixProduct;
        prefixProduct *= nums[i];
    }

    // Calculate suffix products and combine with prefix products
    let suffixProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }

    return result;
};
// Time Complexity: O(n) - two passes through the array
// Space Complexity: O(1) additional space (not counting the result array)

// Example usage:
// let nums = [1, 2, 3, 4];
// console.log(productExceptSelf3(nums));