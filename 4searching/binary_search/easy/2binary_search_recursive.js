function binarySearchRecursive(arr, start, end, x){
    if(start > end){
        return -1;
    }
    let mid = start + Math.floor((end-start)/2);
    if(arr[mid] === x){
        return mid;  // O(1)
    }
    if(x < arr[mid]){
        return binarySearchRecursive(arr, start, mid-1, x); // O(n/2)
    }else{
        return binarySearchRecursive(arr, mid+1, end, x); // O(n/2)
    }
}

/**
 * Recurrence relation for binary search is T(n) = T(n/2) + C
 * which can be solved using master theorem or substitution method
 * 
 * solving it using substitution method
 */
// T(1) = C (base case)
//
// T(n) = T(n/2) + C
//      = T(n/4) + C + C
//      = T(n/8) + C + C + C
//      = T(n/16) + C + C + C + C
//      = T(n/32) + C + C + C + C + C
//      = T(n/64) + C + C + C + C + C + C
//      = T(n/2^k) + kC    // after k steps
// compare n/2^k = 1 => k = log2(n)
//      = T(1) + log2(n)C
//      = C + log2(n)C
//      = log2(n)C + C
//      = log2(n)C
//      = O(log2(n))
//
