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

function pipeReduce(input, fnsArray) {
  return fnsArray.reduce((acc, currentFn) => {
    return currentFn(acc);
  }, input);
}
console.log(pipe("learnersbucket", fnsArray));

// TC - O(n) SC - O(1)
// why - because we are iterating over the input array only once and we are not using any extra space

/**
 * Similarly, if we want to run a promise in a sequence we can do the same with this.
 */

// sequential execution
// setting up the promise

const asyncTask = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`completing ${time} ms`), 1000 * time); // resolve after 1 second
  });
};

const sequentialTasks = [asyncTask(1), asyncTask(2), asyncTask(3)];

// function to run promise in series
function promiseInSequence(tasks) {
  tasks.reduce((acc, currentTask) => {
    // acc is the Promise that represents the completion of the previous asynchronous task
    return acc.then(() => {
      // The .then() method is used to specify a callback function that should be executed when this Promise is resolved.
      // The curr variable represents the current Promise being processed in the reduce iteration. This line of code is creating a new Promise chain
      return currentTask.then((currentResult) => console.log(currentResult));
    });
  }, Promise.resolve()); // to ensure the first Promise in the array starts immediately.
}

promiseInSequence(sequentialTasks);

/**
 * If you do not provide Promise.resolve() as the initial value for the accumulator in the reduce method,
 *  you would need to handle the first Promise differently. The purpose of providing Promise.resolve() as the 
 * initial value is to kick-start the Promise chain immediately with the first task. If you don't provide it,
 *  the first task will not start executing right away, and the Promise chain will start with the second task.
 */
