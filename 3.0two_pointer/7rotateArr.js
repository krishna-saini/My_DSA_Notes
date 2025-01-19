// https://leetcode.com/problems/rotate-array/
const rotate = function (nums, k) {
    const n = nums.length;

    // Handle edge cases
    k = k % n; // Normalize k to prevent unnecessary full rotations
    if (k === 0 || n === 1) return nums;

    // Reverse a subsection of the array
    const reverse = (start, end) => {
        while (start < end) {
            let temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            start++;
            end--;
        }
    };

    // Reverse the array in three steps:
    reverse(0, n - 1);     // Reverse the entire array
    reverse(0, k - 1);     // Reverse the first k elements
    reverse(k, n - 1);     // Reverse the remaining n-k elements

    // return nums;
};