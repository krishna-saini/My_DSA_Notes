// https://www.youtube.com/watch?v=seOKHXB_w74&list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj&index=12
// https://leetcode.com/problems/fruit-into-baskets/

/**
 * Brute force intuition 
Iterate over all possible subarrays starting from each tree.
Use a Map to track the number of fruit types in the current subarray.
If the subarray contains more than 2 types of fruit, stop and calculate the length of the valid subarray.
Track the maximum length of valid subarrays encountered.
 */
/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruitBruteForce = function (fruits) {
    let maxFruits = 0; // Tracks the maximum number of fruits collected
  
    // Start iterating from each tree
    for (let i = 0; i < fruits.length; i++) {
      const fruitCount = new Map(); // Tracks the count of each fruit type in the current subarray
      let currentLength = 0; // Length of the current valid subarray
  
      // Explore all subarrays starting from the current tree
      for (let j = i; j < fruits.length; j++) {
        const fruit = fruits[j];
  
        // Add the current fruit to the map
        fruitCount.set(fruit, (fruitCount.get(fruit) || 0) + 1);
  
        // If there are more than 2 types of fruits, stop exploring further
        if (fruitCount.size > 2) break;
  
        // Otherwise, update the length of the current valid subarray
        currentLength++;
  
        // Update the maximum fruits collected so far
        maxFruits = Math.max(maxFruits, currentLength);
      }
    }
  
    return maxFruits;
  };
  
  /**
   * @param {number[]} fruits
   * @return {number}
   */
  const totalFruit = function (fruits) {
    let numberOfCollectedFruit = 0;
    let start = 0;
    let localLength = 0;
    const myMap = new Map();
    /// optimised
    for (let end = 0; end < fruits.length; end++) {
      // calculations
      // add the element in the map
      myMap.set(fruits[end], (myMap.get(fruits[end]) || 0) + 1);
  
      // update the length
      localLength++;
  
      // update ans from calculation once a condition satisfy
      if (myMap.size === 2) {
        numberOfCollectedFruit = Math.max(numberOfCollectedFruit, localLength);
      }
  
      // maintain the window
      while (myMap.size > 2) {
        // remove start from the map
        myMap.set(fruits[start], myMap.get(fruits[start]) - 1);
        // check if their value === 0, delete it
        if (myMap.get(fruits[start]) === 0) {
          myMap.delete(fruits[start]);
        }
        start++;
        localLength--; // reduce local length too
      }
    }
  
    return Math.max(numberOfCollectedFruit, localLength);
  };
  
  // simplify above
  // we dont need local length as end-start+1 will give us the number of required elements
  /**
   * @param {number[]} fruits
   * @return {number}
   */
  const totalFruit_better_Write = function (fruits) {
    let maxFruits = 0; // Tracks the maximum fruits collected
    let start = 0; // Start of the sliding window
    const fruitCount = new Map(); // Tracks the count of each fruit type in the window
  
    for (let end = 0; end < fruits.length; end++) {
      const fruitAtEnd = fruits[end];
  
      // Add the current fruit to the map
      fruitCount.set(fruitAtEnd, (fruitCount.get(fruitAtEnd) || 0) + 1);
  
      // Shrink the window if there are more than 2 types of fruits
      while (fruitCount.size > 2) {
        const fruitAtStart = fruits[start];
  
        // Decrease the count of the fruit at the start of the window
        fruitCount.set(fruitAtStart, fruitCount.get(fruitAtStart) - 1);
  
        // Remove the fruit from the map if its count becomes 0
        if (fruitCount.get(fruitAtStart) === 0) {
          fruitCount.delete(fruitAtStart);
        }
  
        // Move the start pointer to shrink the window
        start++;
      }
  
      // Update the maximum fruits collected
      maxFruits = Math.max(maxFruits, end - start + 1);
    }
  
    return maxFruits;
};
  