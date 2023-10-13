/**
 * find index of first infinite element in an array where infinite numbers appear at the end only
 * 
 */

function findFirstInfiniteNumber(arr) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while (start <= end) {
        mid = start + Math.floor((end - start) / 2);
        if (arr[mid] === Infinity) {
            // if(arr[mid - 1] !== Infinity){ /// this is extra check, even if you dont get it, dont sweat
            //     return mid;
            // }else{
            end = mid - 1;
            // }
        } else {
            start = mid + 1;
        }

    }
    return mid;
}

console.log(findFirstInfiniteNumber([1, 2, 3, 4, 5, 6, 7, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity])); // 7


/**
 * repeat the above question if array length is not known
 */

function findIndexOfFirstInfinityFromUnsortedArrOfUndefinedLength(arr) {
    let start = 0;
    let end = 1;
    while (arr[end] !== Infinity) { // TC: O(logn)
        start = end;
        end = end * 2;
    }
    return findFirstInfiniteNumber(arr.slice(start, end + 1)); // O(logn)
}

//TC: O(logn) + O(logn) = O(logn)
// SC: O(1)