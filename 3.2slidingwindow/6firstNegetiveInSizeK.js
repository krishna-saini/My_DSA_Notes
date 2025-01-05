/**
 * https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1
 * 
Input: arr[] = [12, -1, -7, 8, -15, 30, 16, 28] , k = 3
Output: [-1, -1, -7, -15, -15, 0] 
Explanation:
Window {12, -1, -7}: First negative integer is -1.
Window {-1, -7, 8}: First negative integer is -1.
Window {-7, 8, -15}: First negative integer is -7.
Window {8, -15, 30}: First negative integer is -15.
Window {-15, 30, 16}: First negative integer is -15.
Window {30, 16, 28}: No negative integers, output is 0.


 * @param {*} arr 
 * @param {*} k 
 * @returns 
 */
function FirstNegativeInteger(arr, k) {

    // write code here
    
    // sliding window
    let start = 0;
    let negetiveArrPointer =0;
    const negetiveArr = [];
    const result = [];
    
    for(let i=0; i<arr.length; i++){
        // calculations
        // store all negetive number in a array
        if(arr[i]<0){
            negetiveArr.push(arr[i])
        }
        
        // see if window size acheinved
        if(i - start +1 === k){
            // edge case  = if all are positive in given widnow size
            // [-8], pointer = 1
            if(negetiveArrPointer > negetiveArr.length - 1){
                result.push(0)
            } else {
                // find ans from calculations
            // the first element in the arr will be the first 
            //negetive for the given window siz
            result.push(negetiveArr[negetiveArrPointer]);
            }
            
            // we also have to remove the negetive number
            // form the arr if that is not part of window
            // so check if the first element of window
            // is equals to the element at negetiveArrPointer index
            // it means now we should remove it 
            if(arr[start] === negetiveArr[negetiveArrPointer]){
                negetiveArrPointer++; // avoiding .pop due to its O(n) TC
            }
            
            // slide the window
            start++;
        }
    }
    return result;
}

// TC - O(n)