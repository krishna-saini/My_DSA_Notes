/**
 * https://leetcode.com/problems/merge-sorted-array/submissions/1320559253/
 *
 * can be solved using SC of O(n) just like merge sort
 * but we need to solve in place
 */

/**
 * @param {number[]} nums1 - The first sorted array with a size of m + n.
 * @param {number} m - The number of initialized elements in nums1.
 * @param {number[]} nums2 - The second sorted array with n elements.
 * @param {number} n - The number of initialized elements in nums2.
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // Edge cases
  if (m === 0) {
    // If nums1 is empty, directly copy nums2 into nums1
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i];
    }
    return;
  }
  let p1 = m - 1;
  let p2 = n - 1;
  let p3 = m + n - 1;

  while (p3 >= 0) {
    if (p2 < 0) break;
    // compare last elemnets of 1 &2 and push the largest in the end
    if (nums1[p1] >= nums2[p2]) {
      nums1[p3] = nums1[p1];
      p1--;
    } else {
      nums1[p3] = nums2[p2];
      p2--;
    }
    p3--;
  }
};

// Test case
const nums1 = [0];
merge(nums1, 0, [1], 1);
console.log('nums1:', nums1); // Output should be: [1]
