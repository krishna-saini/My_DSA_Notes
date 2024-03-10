// 121. Best Time to Buy and Sell Stock

// brute force
// O(n2) O(n)

// for such problems, keep track of minPrice and
// then keep on updating maxProfite in each iteration
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (arr) {
  let maxP = 0;
  let minPrice = Infinity;
  for (let i = 0; i < arr.length; i++) {
    minPrice = Math.min(arr[i], minPrice);
    maxP = Math.max(maxP, arr[i] - minPrice);
  }
  return maxP;
};
console.log(maxProfit([7,1,5,3,6,4]));
