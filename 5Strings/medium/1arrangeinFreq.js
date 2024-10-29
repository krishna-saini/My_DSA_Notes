/**
 *https://leetcode.com/problems/sort-characters-by-frequency/description/
 * Given a string s, sort it in decreasing order based on the frequency
 * of the characters. The frequency of a character is the number of times
 * it appears in the string.Return the sorted string. If there are multiple answers,
 *  return any of them.
 */

const countFreq = (str) => {
  const map = new Map();
  for (const char of str) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  return map;
};

function frequencySort(s) {
  const charFreq = countFreq(s);

  // Step 2: Create an array of unique characters with their frequencies
  const charArr = Array.from(charFreq.entries());
  // Step 3: Sort the array based on the frequency of characters in decreasing order
  charArr.sort(([key1, value1], [key2, value2]) => value2 - value1);

  // Step 4: Construct the sorted string
  let sortedString = '';
  for (const [char, freq] of charArr) {
    sortedString += char.repeat(freq);
  }

  return sortedString;
}

// Example usage:
console.log(frequencySort('tree')); // Output: "eert" or "eetr" (either is acceptable)
console.log(frequencySort('cccaaa')); // Output: "cccaaa" (or "aaaccc")
console.log(frequencySort('Aabb')); // Output: "bbAa" or "bbaA" (either is acceptable)
