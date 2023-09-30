//two pointer pattern

function sumtozero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [left, right];
    else if (sum > 0) {
      right--;
    } else left++;
  }
  return [-1, -1];
}

// console.log(sumtozero([-9, -3, -2, -1, 0, 1, 2, 3, 4]));

//sliding window

function maxSubArraySum(arr, n) {
  if (arr.length < n) return null;
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  let temp = maxSum;
  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];
    maxSum = Math.max(temp, maxSum);
  }
  return maxSum;
}
// console.log( maxSubArraySum([2,6,9,2,1,8,5,6,3], 3));   O(n)

// You do not need to read input or print anything. Your task is to complete the function minTime() which takes S1, S2 and N as input parameters and returns the minimum tme required to scan the documents.
function func(S1, S2, N) {
  let n1 = (N * S2) / (S1 + S2);

  let n2 = (N * S1) / (S1 + S2);
  console.log(
    S1 * Math.floor(n1),
    S2 * Math.ceil(n2),
    S1 * Math.ceil(n1),
    S2 * Math.floor(n2)
  );
  let t1 = Math.max(S1 * Math.floor(n1), S2 * Math.ceil(n2));

  let t2 = Math.max(S2 * Math.floor(n2), S1 * Math.ceil(n1));
  console.log(n1, n2, t1, t2);
  return Math.min(t1, t2);
}

// func(9173, 5737, 5212)

function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
// isSubsequence('abcd', 'cavb')
Even Distribution
Question Name: Even Distribution



Problem Statement



Antonio wants to gift N pairs of integers to his girlfriend Teena.

For this he went to a nearby arrays shop to buy an array consisting of 2*N integers.

Teena likes a pair of integers (a,b) if and only the sum of two integers is even, i.e. a+b when divided by 2, leaves remainder 0.

Antonio does not like wasting things. So before buying the array he wants to make sure that he can form N pairs using the elements of the given array such that Teena likes all the N pairs.

For this he asked his coder friend for help. Help him.



Input Format



First line of input contains T denoting the number of test cases.
First line of every test case contains a single integer denoting N.
Next line of input contains 2*N space separated integers denoting the elements of the array Antonio is buying.


Output Format



For every test case print “YES”, if Antonio can form N pairs using the elements of the given array such that Teena likes all the N pairs, else print “NO”.


Constraints



1<=T<=5
1<=N<=105
1<=Ai<=109


Sample Input 1



2

2

2 4 1 3

2

10 12 2 3



Sample Output 1



YES

NO



Explanation of Sample 1



In test case 1 :

Antonio can form the pairs as : (1st element, 2nd element), (3rd element, 4th element)

In test case 2:

It's not possible for Antonio to form 2 pairs such that Teena likes both the pairs.



//////////////////
Minimum Pairwise Product
Question Name: Minimum Pairwise Product

Problem Statement

Antonio and his girlfriend Teena decided to move their relationship to the next level and decided to buy arrays from a nearby arrays shop.

Each of them bought one array. Antonio bought array A consisting of N integers and Teena bought array B consisting of M integers.

Now Antonio and Teena are compatible with each other(that’s why they are in a relationship) and want their arrays to have maximum compatibility too.

Compatibility of two arrays A and B is measured as :

Two arrays are compatible if and only if they have an equal number of elements.
Compatibility value of arrays A and B each having length L = A1*B1 + A2*B2 + … + AL*BL.
To achieve this Antonio and Teena decided to remove some elements from each of their arrays such that arrays A and B have an equal number of elements and their compatibility value is as large as possible.

Given arrays A and B, print the maximum compatibility value it's possible to achieve by removing some elements from both the arrays(and making them of the same length).

Input Format

First line contains two space separated integers denoting N and M.
Next line contains N space separated integers denoting the elements of array A.
Next line contains M space separated integers denoting the elements of array B.
Output Format

Print the maximum compatibility value it's possible to achieve by removing some elements from both the arrays
Constraints

1<=N,M<=1000
-105<=Ai, Bi<=105
Sample Input 1

3 4

-1 2 1

-100 3 10 -9

Sample Output 1

120

Explanation of Sample 1

Erase the 3rd element of array A. Array A becomes = [-1, 2]

Erase the 2nd and 4th element of array A. Array A becomes = [-100, 10]

Compatibility values of these arrays = [(-1)*(-100) + 2*10] = 120.