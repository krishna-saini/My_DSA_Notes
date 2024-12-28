// see actual problem in binary search folder for more context
// this is just revision
const findMedianSortedArrays = function (nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    // as want to do binary search on smaller array to have some optimisation
    // hence swapping them if required
    if (n1 > n2) {
      return findMedianSortedArrays(nums2, nums1);
    }
  
    let n = n1 + n2;
    let halfLength = Math.floor((n1 + n2 + 1) / 2);
    // BS on smaller one
    let left = 0;
    let right = nums1.length;
  
    while (left <= right) {
      const mid1 = left + Math.floor((right - left) / 2);
      const mid2 = halfLength - mid1;

      const l1 = mid1 > 0 ? nums1[mid1 - 1] : -Infinity;
      const l2 = mid2 > 0 ? nums2[mid2 - 1] : -Infinity;
      const r1 = mid1 < n1 ? nums1[mid1] : Infinity;
      const r2 = mid2 < n2 ? nums2[mid2] : Infinity;
  
      console.log(l1, l2, r1, r2);
  
      // check if it valid one
      if (l1 <= r2 && l2 <= r1) {
        // valid one
        return n % 2 === 0
          ? (Math.max(l1, l2) + Math.min(r1, r2)) / 2
          : Math.max(l1, l2);
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