/**
 * We can group a certain set of values depending on our requirements.
 * input - [1.1, 1.2, 1.3, 2.2, 2.3, 2.4];
 * output - {
  1: [1.1, 1.2, 1.3],
  2: [2.2, 2.3, 2.4]
}
 */

const input = [3.3, 1.1, 1.2, 1.3, 2.2, 2.3, 2.4];

function groupBy(input){
    const output = {};
    input.forEach((item)=>{
        const floor = Math.floor(item);
        if(!output.hasOwnProperty(floor)){
            output[floor] = [];
        }
        output[floor].push(item);
    })
    return output;
}

console.log(groupBy(input));

/**
 * we can use reduce to achieve the same result
 * why - because reduce is a higher order function which takes a function as an argument
 * and initialize the accumulator with an empty object
 * and we can use that function to mutate the accumulator
 */

function groupByReduce(input){
    return input.reduce((acc, item)=>{
        const floor = Math.floor(item);
        if(!acc.hasOwnProperty(floor)){
            acc[floor] = [];
        }
        acc[floor].push(item);
        return acc;
    }, {}) // initial value of accumulator
}

console.log(groupByReduce(input));

// TC - O(n) SC - O(n)
// why - because we are iterating over the input array only once and we are using an object to store the values