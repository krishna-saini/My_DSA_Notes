// count number of ways the given sum n can be formed
// from an arra of numbers
function countWays(n, arr) {
  var DP = new Array(n + 1).fill(0);

  // Base case
  DP[0] = 1;

  // Iterate for all values from 1 to n
  for (var i = 1; i <= n; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i >= arr[j]) {
        DP[i] += DP[i - arr[j]];
      }
    }
  }

  return DP[n];
}

console.log(countWays(10, [1, 3, 4])); // Should output 4
