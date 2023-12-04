function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base, exponent-1);
}
console.log(power(-2, 3)); 

// TC: O(1)*O(n) = O(n)     // O(1) for each recursive call and there are n recursive calls
// SC: O(n)   // n is the depth of the recursion tree