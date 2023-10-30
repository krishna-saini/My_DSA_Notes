// functions
const upperCase = (str) => {
  return str.toUpperCase();
};

const reverse = (str) => {
  return str.split("").reverse().join("");
};

const append = (str) => {
  return "Hello " + str;
};
/**
 *  we have an array of functions and a value
 * the value has to be passed through these functions in a pipe. Like the initial value has to be passed to the
 * first function and then the returned value from the first function has to be passed to the next function
 * and so on.
 */

function pipe(input, fnsArray) {
  let output = input;
  fnsArray.forEach((fn) => {
    output = fn(output);
  });
  return output;
}

const fnsArray = [upperCase, reverse, append];
console.log(pipe("learnersbucket", fnsArray));

/**
 * use reduce to achieve the same result
 * why - because reduce is a higher order function which takes a function as an argument
 * and initialize the accumulator with the input value
 * and we can use that function to mutate the accumulator
 */
 
function pipeReduce(input, fnsArray){
    return fnsArray.reduce((acc, currentFn)=>{
        return currentFn(acc);
    }, input)
}
console.log(pipe("learnersbucket", fnsArray));