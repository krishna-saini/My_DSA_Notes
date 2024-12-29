/**
 * 
 */


/**
 * Brute force
 */

/**
 * 
 * Hint 1 - For two sorted arrays, we need to find a partition that divides the combined arrays into two equal halves.
 * If we can find the correct partition in one array, we can deduce the partition in the other array.
 * By partition we mean how many elements from each array are required to be in first half.
 * 
 * Task 1 -> how will you find how many elements from first array are required to be in first half.
 * ans -> try with taking 0 element, then 1 , then 2 , then 3 -> linear way
 * optimise it using binary search for arr [ 0, 1, 2, ... numberOfElementsInArr1]
 * 
 * Binary search 
 * Intutition
 * Median is the middle point which divides the arr in two halves
 * 1. draw a imaginary line, left of which some elements will be there
 * 
 * Task 2- > How many elements should be in left side -> 
 * it should be equal to half of total length or 1 more than  half of total length  Math.floor((n1+n2+1)/2)
 * it can be equal to half of total length or 1 less than half of total length.
 *  
 * 2. take n(0) elements from arr1 and remaining elements from arr2 for left side
 * 3. put remaining elements from arr1 and arr2 in RHS
 * 3. not check if they can be sorted (How -> all elements of arr1 on LHS < all elements of arr on RHS , same for arr2)
 * For the partition to be correct:
 * 
 * 
 * Tas 3 -> once we take elements of each array in first half, how will we know it is a valid partition. 
nums1[i-1] <= nums2[j] (last element on left of nums1 <= first element on right of nums2)
nums2[j-1] <= nums1[i] (last element on left of nums2 <= first element on right of nums1)
 * 4. if this is not the case, take n+1 element from arr1 and repeat step 2-3
 * 
 * there will be only one scenario in which they will fit in
 * 
 * https://drive.google.com/file/d/1hSZmZ5CJ2eIT80D8GWtTwAZTNSIdlJOR/view?usp=drive_link
 * 
 * https://drive.google.com/file/d/1hSZmZ5CJ2eIT80D8GWtTwAZTNSIdlJOR/view?usp=sharing
 * 
 * 
 *  .... l1 | r2(mid1) ....
 * ..... l2 | r2(mid2) .....
 * 
 * Task 4-> how will you identify median for both odd n and even n
 */
const findMedianSortedArrays = function (nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    if (n1 > n2) {
        return findMedianSortedArrays(nums2, nums1)
    }

    let n = n1 + n2;
    let halfLength = Math.floor((n1 + n2 + 1) / 2);
    // BS on smaller one
    let left = 0;
    let right = nums1.length;

    while (left <= right) {
        const mid1 = left + Math.floor((right - left) / 2);
        const mid2 = halfLength - mid1;

        // check if index even exits before assing proper value to l1, l2, r1, r2
        // keep default value of l1,l2 as -Infinity as anyway we will take max out of it
        // similary for r1, r2, keep default value as Infinity as we will take min out of them
        const l1 = mid1 -1  >= 0 ? nums1[mid1 - 1] : -Infinity;
        const l2 = mid2 - 1 >= 0 ? nums2[mid2 - 1] : -Infinity;
        const r1 = mid1 < n1 ? nums1[mid1] : Infinity;
        const r2 = mid2 < n2 ? nums2[mid2] : Infinity;
      
        // check if it valid one
        if (l1 <= r2 && l2 <= r1) {
            // If total length is even, return average of max of left and min of right
            // If total length is odd, return max of left
            return n % 2 === 0 ? (Math.max(l1, l2) + Math.min(r1, r2)) / 2 : Math.max(l1, l2);
        }

        if (l1 > r2) {
            // it means slect less element from 1
            right = mid1 - 1;
        } else {
            left = mid1 + 1;
        }
    }
};


// TC - O(n+m)
// SC  O(1)