const selectionSort = (arr) => {
  // iterate throught the arr starting i-th index
  // find min el from next index to nth index
  // swap both of them.

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};
console.log('krishna', selectionSort([2, 3, 4, 1, 0]));

// TC O(n^2)
// SC O(1)
