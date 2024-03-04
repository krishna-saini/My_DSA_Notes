/**
 * @description - Given a binary array nums, return the maximum number of consecutive 1's in the array.
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currentCount = 0
    let lastCount = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 1){
            currentCount++;
        } else {
            if(lastCount < currentCount){
                lastCount = currentCount
            }
            currentCount = 0;
        }
    }
    return lastCount > currentCount ? lastCount : currentCount;
};