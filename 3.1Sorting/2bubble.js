/**
 * Start from the beginning of the list of numbers.
Compare the first two numbers.
 If the first one is greater than the second one, swap them.
Move to the next pair of numbers and repeat the process until you reach the end of the list.
Now, you've ensured that the largest number has bubbled up to the end of the list.
Repeat the process for the remaining unsorted numbers, but this time, ignore the last number since it's already in the correct position.
Keep repeating these steps until the whole list is sorted.

It's called "bubble" sort because with each pass through the list, the largest unsorted number bubbles up to its correct position, like bubbles rising in a fizzy drink.
 */

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    console.log(i, arr);
  }
  return arr;
};
console.log('krishna', bubbleSort([2, 5, 1, 0, 8, 4]));
// We will check in the first iteration if any swap is taking place. If the array is already sorted no swap will occur and we will break out from the loops
