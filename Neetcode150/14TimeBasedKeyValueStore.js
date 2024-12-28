
/**
 * https://leetcode.com/problems/time-based-key-value-store/description/
 * 
 * Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the TimeMap class:

TimeMap() Initializes the object of the data structure.
void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp.
If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".
 */
/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map[key]) {
        // If the key doesn't exist, create a new array for it
        this.map[key] = [{ value, timestamp }];
    } else {
        // If the key exists, append the new value-timestamp pair
        this.map[key].push({ value, timestamp });
    }
    // Note: This maintains the sorted order of timestamps automatically
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    // Check if the key exists
    if (!this.map[key]) return "";

    // Brute force 
    // const filteredArr = this.map[key].filter(obj=> obj.timestamp <= timestamp)

    // const ansObj = filteredArr.reduce((acc,current) => {
    //     if(current.timestamp>acc.timestamp){
    //         acc = current
    //     }
    //     return acc;
    // }, {value: "", timestamp:0})

    // return ansObj.value;


    // optimisation as the array is sorted based on some value of the object
    const arr = this.map[key];
    
    let left = 0;
    let right = arr.length - 1;
    let ans = "";

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        
        if (arr[mid].timestamp > timestamp) {
            // If current timestamp is greater, look in the left half
            right = mid - 1;
        } else {
            // If current timestamp is less than or equal, 
            // update ans and look in the right half for a potentially closer timestamp
            ans = arr[mid].value;
            left = mid + 1;
        }
    }

    return ans;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */


class TimeMap {
    constructor() {
        this.map = {};
    }

    /**
     * @param {string} key 
     * @param {string} value 
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.map[key]) {
            this.map[key] = [];
        }
        this.map[key].push({ value, timestamp });
    }

    /**
     * @param {string} key 
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.map[key]) return "";
        
        const arr = this.map[key];
        if (!arr.length) return "";
        
        let left = 0;
        let right = arr.length - 1;
        let ans = "";

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            
            if (arr[mid].timestamp > timestamp) {
                right = mid - 1;
            } else {
                ans = arr[mid].value;
                left = mid + 1;
            }
        }

        return ans;
    }
}

// Examples
const timeMap = new TimeMap();

// Example 1: Basic set and get
timeMap.set("foo", "bar", 1);
console.log(timeMap.get("foo", 1));  // Output: "bar"
console.log(timeMap.get("foo", 3));  // Output: "bar"

// Example 2: Multiple values for the same key
timeMap.set("foo", "bar2", 4);
console.log(timeMap.get("foo", 4));  // Output: "bar2"
console.log(timeMap.get("foo", 5));  // Output: "bar2"

// Example 3: Get value with earlier timestamp
console.log(timeMap.get("foo", 3));  // Output: "bar"

// Example 4: Non-existent key
console.log(timeMap.get("nonexistent", 1));  // Output: ""

// Example 5: Timestamp before any set operation
console.log(timeMap.get("foo", 0));  // Output: ""

// Example 6: Multiple keys
timeMap.set("key2", "value2", 2);
console.log(timeMap.get("key2", 2));  // Output: "value2"
console.log(timeMap.get("foo", 2));  // Output: "bar"

// Example 7: Overwriting value at the same timestamp
timeMap.set("key3", "value3", 10);
timeMap.set("key3", "new_value3", 10);
console.log(timeMap.get("key3", 10));  // Output: "new_value3"

// Example 8: Large number of entries
for (let i = 0; i < 1000; i++) {
    timeMap.set("largeKey", `value${i}`, i);
}
console.log(timeMap.get("largeKey", 500));  // Output: "value500"
console.log(timeMap.get("largeKey", 999));  // Output: "value999"