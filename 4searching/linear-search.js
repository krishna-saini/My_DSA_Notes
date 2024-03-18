// loop through the array and check for the value

function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

// TC: O(n)
// SC: O(1)