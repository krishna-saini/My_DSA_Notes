// https://leetcode.com/problems/water-bottles-ii/
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const maxBottlesDrunk = function (numBottles, numExchange) {

    // if numBottles < numExchange -> bottle drunk = numBottles
    if (numExchange > numBottles) {
        return numBottles;
    }

    // full bottles.  eempty bottles drunk 
    // 10.         10.          10 
    // 1   

    // 10 - 3 -> 7 -4 -> 3   
    // once we have emptybottles < numExchange -> update ans 
    // numBottles = 10, numexhachne = 3
    let emptyBottles = numBottles;  // 10
    let fullBottles = 0; // 0
    let ans = numBottles; // 10
    while (fullBottles > 0 || emptyBottles >= numExchange) {
        if (emptyBottles - numExchange >= 0) {
            emptyBottles = emptyBottles - numExchange;// 10->7 ->3 -> 0

            // exchange is possibel
            // update our full bottles
            fullBottles++; // 0->1 ->2 -> 1
            numExchange++; // 3->4  -> 5 -> 6
        } else {
            // exchange not possibel
            // drink the full bottles
            emptyBottles += fullBottles;// 3-> 5 -> 1
            // update the ans 
            ans += fullBottles; // 10->12 ->13
            fullBottles = 0;


        }
    }
    return ans;
};

// more cleaner solution
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const maxBottlesDrunk2 = function(numBottles, numExchange) {
    let emptyBottles = numBottles;
    while(emptyBottles >= numExchange) {
        emptyBottles -= numExchange;
        numExchange++;
        numBottles++;
        emptyBottles++;
    }
    
    return numBottles;
};