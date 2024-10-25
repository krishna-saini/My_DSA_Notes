/**
 * https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/description/
 * 
 * Given an array of integers nums and an integer threshold, 
 * we will choose a positive integer divisor, 
 * divide all the array by it, and sum the division's result. 
 * Find the smallest divisor such that the result mentioned above is less 
 * than or equal to threshold.

Each result of the division is rounded to the nearest integer 
greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).
 */

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {

    // ans will be in between 1 to Math.max(nums)

    // step 1 -> find max el

    // step 2 -> binary search from 1 to max el

    let left = 1;
    let right = Math.max(...nums);  // O(n)
    let ans = Infinity;

    while(left <= right){
        const mid = left + Math.floor((right-left)/2);
        let sum = 0;

        // loop through arr to divide each el by divisor(mid)
        for(let i=0; i<nums.length; i++){
            sum += Math.ceil(nums[i]/mid);

            // if sum > threshold, break the loop
            if(sum > threshold){
                break;
            }
        }

        // if summ <= threshold, then mid is possible ans
        // but we have to keep looking for other too as we 
        // need min value of mid
        if(sum <= threshold){
            ans = Math.min(ans, mid);
            right = mid - 1; 
        } else {
            left = mid+ 1
        }



    }
    return ans;
    
};