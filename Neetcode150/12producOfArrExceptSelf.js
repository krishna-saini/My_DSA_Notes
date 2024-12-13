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

// Approach 3: Using Prefix and Suffix Products
const productExceptSelf3 = function (nums) {
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