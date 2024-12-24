/*
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

[3 4 5 1 2]
[4 5 1 2 3]
[5 1 2 3 4]
[1 2 3 4 5]
Though the array is rotated, we can clearly notice that for every index,
one of the 2 halves will always be sorted. In the above example,
the right half of the index mid is sorted.

If arr[low] <= arr[mid]: In this case, we identified that the left half is sorted.
If arr[mid] <= arr[high]: In this case, we identified that the right half is sorted.

now the min element in any sorted half will be the leftmost element
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low =0;
      let ans = Infinity;
    let high = nums.length-1;
    while(low<=high){
        const mid = low + Math.floor((high-low)/2);
      
// see if left half is sorted
        if(nums[low]<=nums[mid]){
            // leftmost will be min value
            ans = Math.min(ans, nums[low]); 
            // discard left half
            low = mid+1;
        }else{
            //right half is sorted
              ans = Math.min(ans, nums[mid]);
              //discardright half
              high = mid-1;
        }
    }

    return ans
    
};

console.log(findMin[4,5,6,0,1,2,3])