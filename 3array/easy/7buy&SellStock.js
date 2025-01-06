// 121. Best Time to Buy and Sell Stock

/**
 * You are given an array prices where prices[i] is the price of 
 * a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and 
choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction.
 If you cannot achieve any profit, return 0.

 Input: prices = [7,1,5,3,6,4]
Output: 5

Input: prices = [7,6,4,3,1]
Output: 0
 */

// brute force
// O(n2) O(1)

// for such problems, keep track of minPrice and
// then keep on updating maxProfite in each iteration
/**
 * maxProfit = max(sellPrice - buyPrice)
 *           = max SellPrice - min buyPrice
 * Keep track of min Value while looping (greddy )
 * along with that keep track of maxProfit
 */
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
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// solve above  using sliding window
const maxProfit2 = function (prices) {
  if (prices.length < 2) {
    return 0;
  }
  let buyP = 0;
  let sellP = 1;
  let maxProfit = 0;
  while (sellP < prices.length) {
    // check if we are profitable with given pointer
    if (prices[sellP] > prices[buyP]) {
      const profit = prices[sellP] - prices[buyP];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      // it means we have found a lower or equal value on right side
      // so update our buying pointer
      buyP = sellP;
    }

    // update sellP always
    sellP++;
  }

  return maxProfit;
};
// 121. Best Time to Buy and Sell Stock

/**
 * You are given an array prices where prices[i] is the price of 
 * a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and 
choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction.
 If you cannot achieve any profit, return 0.

 Input: prices = [7,1,5,3,6,4]
Output: 5

Input: prices = [7,6,4,3,1]
Output: 0
 */

// brute force
// O(n2) O(1)

// for such problems, keep track of minPrice and
// then keep on updating maxProfite in each iteration
/**
 * maxProfit = max(sellPrice - buyPrice)
 *           = max SellPrice - min buyPrice
 * Keep track of min Value while looping (greddy )
 * along with that keep track of maxProfit
 */
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
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// solve above  using sliding window
const maxProfit2 = function (prices) {
  if (prices.length < 2) {
    return 0;
  }
  let buyP = 0;
  let sellP = 1;
  let maxProfit = 0;
  while (sellP < prices.length) {
    // check if we are profitable with given pointer
    if (prices[sellP] > prices[buyP]) {
      const profit = prices[sellP] - prices[buyP];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      // it means we have found a lower or equal value on right side
      // so update our buying pointer
      buyP = sellP;
    }

    // update sellP always
    sellP++;
  }

  return maxProfit;
};
