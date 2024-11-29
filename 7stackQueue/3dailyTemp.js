/**
 * https://leetcode.com/problems/daily-temperatures/description/
 * 
 * Given a list of daily temperatures, find out the next warmer temperature for each day.
 * If there is no future day with a warmer temperature, set that entry to 0.
 * 
 * return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. 
 * If there is no future day for which this is possible, keep answer[i] == 0 instead.
 * 
 * Input: temperatures = [73,74,75,71,69,72,76,73]
   Output: [1,1,4,2,1,1,0,0]. 
 */

/**
 * Brute Force -
 * run two inner loops and keep on storing in a arr
 * SC - O(n) , TC - O(n^2)
 * 
 * SC can be reduced to O(1) as 30 <= temperatures[i] <= 100
 * hence we can create output array of fixed length of 70
 */

/**
 * TC optimisation using stack 
 */

const dailyTemperatures = function (temperatures) {
  const stack = []; // Stack to store indices of temperatures
  const daysUntilNextHigherTemp = new Array(temperatures.length).fill(0); // Array to store days until next higher temperature 
  // dont just keep [] for storing result, it will be O(n), if your know the output length, keep that 

  for (let currentDay = 0; currentDay < temperatures.length; currentDay++) {
    // While stack is not empty and current temperature is higher than temperature at top of stack
    while (
      stack.length &&
      temperatures[currentDay] > temperatures[stack[stack.length - 1]]
    ) {
      // Get the index of the temperature at the top of stack
      const index = stack.pop();
      // Calculate days until next higher temperature for temperature at index
      daysUntilNextHigherTemp[index] = currentDay - index;
    }

    // Push current day index onto stack
    stack.push(currentDay);
  }

  return daysUntilNextHigherTemp; // Return array containing days until next higher temperature
};
