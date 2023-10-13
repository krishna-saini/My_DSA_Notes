/**
 * Given an sorted array, find two numbers whose sum is equal to the given target.
 * this problem can be solved using hashing too with TC: O(n) and SC: O(n)
 * hence need to use two pointer approach to optimize the space complexity
 * however the two pointer approach will work only if the array is sorted while hashing will work for both sorted and unsorted array
 */
const twoSum = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        const sum = arr[start] + arr[end];
        if (sum === target) {
            return [start, end];
        } else if (sum < target) {
            start++;  // move right as array is sorted and lower values are present on left side
        } else {
            end--; // move left as array is sorted and higher values are present on right side
        }
    }
    return [-1, -1];
}

// TC: O(n)