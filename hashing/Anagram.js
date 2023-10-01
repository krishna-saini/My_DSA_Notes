// check if two given strings are anagram or not

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // check their length
    if(s.length !== t.length || !s || !t){
        return false
    }
    str1 = str1.replace(/[^a-z0-9]/g, '').toLowerCase();
  str2 = str2.replace(/[^a-z0-9]/g, '').toLowerCase();

    const sMap = {};
    const tMap = {};
   
   // create hash map of s
   for(let i=0; i<s.length; i++){
       sMap[s[i]] ? sMap[s[i]]++ : sMap[s[i]] = 1;
       tMap[t[i]] ? tMap[t[i]]++ : tMap[t[i]] = 1;
   }

    for(let i=0; i<s.length; i++){
        if(sMap[s[i]] !== tMap[s[i]]){
            return false
        }
    }

    return true
    
};

// TC = O(n)