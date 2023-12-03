function checkPalindrome(str){
    // check if string length is 0 or 1 then it is palindrome
    if(str.length === 0 || str.length === 1){
        return true;
    }
    // check if first and last character are same
    if(str[0] === str[str.length - 1]){
        // call the function recursively to check the middle string
        return checkPalindrome(str.slice(1, str.length - 1));
    }   
}

// TC: O(n) - n is the length of the string
// SC: O(n) - recursive stack space

// solve it using two pointer method
