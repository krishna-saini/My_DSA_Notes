/**
 * https://leetcode.com/problems/defanging-an-ip-address/description/
 */

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    // observation - ouput is max 15 char long
    // . -> [.]
    // return address.split('.').join('[.]');
    let result=[];
    
    for(let i=0;i<address.length;i++) {
        if(address[i] === ".")
            result.push("[.]");
        else
            result.push(address[i]);
    }
    
    return result.join('');
};

// TC O(n), SC O(n)

// Tip - 2. use array.push instead of string concatenation . it is faster.