/**
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
    // edge cases
    if (nums.length <= 1) {
        return nums.length;
    }

    //Brute force
    // sort the array
    // loop the array and check
    // if(arr[i] !=== arr[i-1]+1) start new counter
    // in this way, find max counter
    // O(nlogn), O(1)

    // optimised it

    // store each unique value of nums in set
    const mySet = new Set();
    let maxSequenceLength = 0;
    for (const num of nums) {
        mySet.add(num);
    }

    // loop through the set (Dont loop through the array now)
    for (const num of mySet) {
        // check if it is starting point of a sequnce
        // if(!Set.has(arr[i] - 1)) -> means arr[i] is starting point
        if (!mySet.has(num - 1)) {  // o(1) lookup
            // start a counter and loop to increase this counter to find all consecutive sequence number above arr[i]
            let currentNum = num;
            let currentSequenceLength = 0;
            while (mySet.has(currentNum)) { // o(1) lookup
                currentSequenceLength++;
                currentNum++;
            }
            // update maxCount also here as u update local count
            // Tip2-> update maxlength here outside while loop once localLength get its final value, dont update it inside while loop
            maxSequenceLength = Math.max(maxSequenceLength, currentSequenceLength);

        }
    }
    return maxSequenceLength;
};

/**
 * Time complexity
 * if n is unique elements in the array of length k
 * thought there is a nested loop but the inner loop wil not run n times for every element of outer loop
 * Hence TC O(k) + O(n)
 * 
 * SC O(n)
 */