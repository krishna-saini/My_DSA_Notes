function binarySearchRecursive(arr, start, end, x){
    if(start > end){
        return -1;
    }
    let mid = start + Math.floor((end-start)/2);
    if(arr[mid] === x){
        return mid;
    }
    if(x < arr[mid]){
        return binarySearchRecursive(arr, start, mid-1, x);
    }else{
        return binarySearchRecursive(arr, mid+1, end, x);
    }
}