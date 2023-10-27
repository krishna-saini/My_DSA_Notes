/** 
 * find the max profit that can be made by buying and selling a stock at most once
 * 
 * favourite question of FAANG
 * 
 * An array of prices will be given for n days
*/

// Brute force approach
function maxProfitBruteForce(prices){
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++){
        for(let j = i + 1; j < prices.length; j++){
            const profit = prices[j] - prices[i];
            if(profit > maxProfit){
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}
// TC: O(n^2)

// another approach is take the first element and then find the max element on right side of it and then find the difference
// and then repeat the same for the next element and so on
// TC: O(n^2)  


// optimal approach
/**
 * keep track of min element and max profit while traversing the array
 */
function maxProfit(prices){
    let min = Infinity;
    let maxProfit = 0;
    for(let i =0; i< prices.length; i++){
        if(prices[i] < min){
            min = prices[i];
        }else if(maxProfit <  prices[i] - min){
            maxProfit = prices[i] - min;
        }
    }
    return maxProfit
}

console.log(maxProfit([7,1,5,3,6,4])); // 5

// TC: O(n) SC: O(1)

// above approach is also called Kadane's algorithm