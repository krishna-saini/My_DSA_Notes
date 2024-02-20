/**
 * A sub array is contiguous subsection of an array
 * THere are various type of problems related to subArray
 * so the very first task of all these problems is to generateall sub array of given array
 */

// Brute force

function generateSubArray(arr){
    let result = [];
    let n = arr.length
    for(start=0; start<n; start++){ // O(n)
        for(let end=start+1; end<=n; end++){    // O(n)
            const subArray = arr.slice(start, end);  // O(n)
            result.push(subArray)
        }
    }
    return result;
}
// Example usage:
const inputArray = [1, 2, 3];
const subarrays = generateSubArray(inputArray);    // O(n^3)
console.log(subarrays);