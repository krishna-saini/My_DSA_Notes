// What is the Big O of the below function? (Hint, you may want to go line by line)

const fish = ["a", "b", "c", "d", "e", "f", "g"];
fish.forEach((val) =>
  val === "c" ? console.log("found") : console.log("not found")
);

function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}

// ans - O(n)

function func(a, b) {
  a.forEach(function (val) {
    console.log(val); //O(n1)
  });

  b.forEach(function (val) {
    console.log(val); //O(n2)
  });
}

func([], []); //O(n1+n2)

// interview Q- log all pairs of array

const boxes = [1, 2, 3, 4, 5];

function logPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    //O(n)
    for (j = 0; j < arr.length; j++) {
      //O(n)
      console.log(arr[i], arr[j]);
    }
  }
}
logPairs(boxes); //O(n^2)

// interview Q- find big O notation of finding length of string
"kajdsfkjsdklfj".length; //O(1) in JS\
//in other languages, it may be different

/*
 --what can cause time in a function?
 operations (+,-,*,/)
 comparisons(< > ==)
 looping(for,while)
 outside fucntion call

 --Rule Book

 1. Always worst cse
  2. remove constant
  3. different input should have different variable.
  --   + for steps in order
  --    * for nested looops

  4. drop non dominant terms

  WHat casuse space complexities
  ddding variables, DS, Function, objects, array, hash tables , allocations
*/

// Exercise for space allocations
function booo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("boooooooooo");
  }
}
booo([1, 2, 3, 4, 5]);

//time complexity O(n)
//space complexity O(1) as we are not adding additional space irrespective of input size

function array2(n) {
  let hiArr = [];
  for (let i = 0; i < n; i++) {
    hiArr[i] = "hi";
    console.log("boooooooooo");
  }
}
//time complexity O(n)
//space complexity O(n) as n new space is created with this function

//exercise 3
//add a feature to twitter person profile page. add a button in front
// of person name and on clicking, it should show 1st and last tweet

//find 1st, find Nth
const arr = ["oldest", "tweet", "recent"];
console.log(arr[0]); //O(1)
console.log(arr[arr.length - 1]); //O(1)

//improvise--compare dates of tweets too
const arrTweet = [
  { tweet: "oldest", date: 2018 },
  { tweet: "tweet", date: 2019 },
  { tweet: "recent", date: 2020 },
];
arrTweet.forEach(function (val) {
  arrTweet.forEach(function (val2) {
    console.log("afa");
  });
});
//nested loops-- time complexity O(n^2)
//this is very expensive as there caN be many many tweets of a person and comparing each one of them is very expensive
//so write efficient one, think long term

// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

//my approach
result = [];
array1.forEach(function (val1) {
  array2.forEach(function (val2) {
    val1 === val2 ? result.push(1) : result.push(0);
  });
});
console.log(result.reduce((sum, curr) => sum + temp));

// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

//Brute force approach -nested loops - comparing each element of array1 with each element of array2

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }
  return false;
}

// but nested loop - very time consuming O(n1*n2)
//space complexity  - O(1)

//alternate solution  - convert one of the array into hash tables
//hash tables in DS are objects in JS

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

// array1 => obj{
//     'a':true,
//    ' b':true,
//     'c':true,
//     'x':true
// };

function containsCommonItem1(arr1, arr2) {
  //loop through first array and create object where properties ==== items in the array

  //task--1 by this functioon
  let map = {}; //creating new object
  for (let i = 0; i < arr1.length; i++) {
    //O(n1)
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  console.log(map);

  //task--2 by this functioon

  //loop through second array and compare is item in second array exists in created object
  for (j = 0; j < arr2.length; j++) {
    //O(n2)
    if (map[arr2[j]]) return true;
  }
  return false;
  //O(a+b)
}

console.log(containsCommonItem1(array1, array2));
//O(n1+n2)-time complexity
//O(n1)-- space complexity(space required for creation of object)

//improve your code using JS-make it more readable
function containsCommonItem3(arr1, arr2) {
  // arr1.some(item => arr2.includes(item))
  arr1.some(function (item) {
    arr2.includes(item);
  });
}
console.log(containsCommonItem3(array1, array2));

//cross-question--> what if input is too large

//google question- you have collection of numbers. find if there is any pair exists whose sum = given sum = 8; if yes return true else false
//questions- whether input is floating point or int? whether input has negetive numbers? whether the order is sorted?

//Naive solution - nested loops

function hasPairsWithSum(arr, sum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }
  return false;
}
console.log(hasPairsWithSum([6, 4, 3, 2, 1, 7], 9));
// time consuming--O(n^2) time complexity

//better solution
//hint --use sets to store the complement(sum - arr[i])
function hasPairsWithSum1(arr, sum) {
  mySet = new Set();
  for (let i = 0; i < arr.length - 1; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}
console.log(hasPairsWithSum1([6, 4, 3, 2, 1, 7], 9)); //O(n)

//array & string Q---- reverse all elements of a string

function reverse(str) {
  //check inputs
  if (str.length < 2 || !str || typeof str !== "string") {
    return "give proper inputs";
  }
  const backwards = [];
  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}
reverse("krishna saini");
//time complextity O(n)

//better solution
function reverse1(str) {
  return str.split("").reverse().join("");
}
reverse1("krishna saini");

function reverse2(str) {
  return [...str].reverse.join("");
}

//interview Q- take 2 sorted arrays as input and merge them that still a sorted array
function mergeSortedArray(arr1, arr2) {
  //check inputs
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1,
    j = 1;

  while (arr1Item || arr2Item) {
    console.log(arr1Item, arr2Item);
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push[arr2Item];
      arr2Item = arr2[j];
      j++;
    }
  }
  return mergedArray;
}
mergeSortedArray([0, 3, 4, 31], [3, 4, 6, 30]);

//in interview. if you have to write things like this and need to explain,this is not readable perhaps there is a better solution.
//use IDEA of single responsibility function
// there should be another function shouldPushArray1() shouldPushArray2()  to do if and else task
//this will make it readable
//let interviewer know, dont write, it will make code readable

//Hash Tables or objects + maps + sets in JS
//object revision
let user = {
  age: 54,
  1: "kyle",
  magic: true,
  scream: function () {
    console.log("ahhhhhhhhhh");
  },
};
user.age; //O(1)
user.spell = "abra ka dabra"; //O(1)
user.scream; //O(1)

//maps revision
//sets revision

//exercise
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  i = 0;
  //hash generator -- private property starts with _
  _hash(key) {
    //O(1)--> as it is really fast operation
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 1) % this.data.length;
      console.log(hash);
    }

    return hash;
  }
  //task1- implement set funtion
  set(key, value) {
    //O(1) --> push operation
    let address = this._hash(key);
    if (!this.data[address]) {
      //to avoid collisions
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  // task2 - implement get fucntion
  get(key) {
    //O(1) if there is no collision which is the case most of the time else O(n)
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  //task 3---> implement keys to iterate all keys of hash
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            ///collision case
            keysArray.push(this.data[i][j][0][0]);
          }
        } else keysArray.push(this.data[i][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50); //50 shelf only to store data, play with 2 shelfs
myHashTable._hash("grapes"); //this property should not be accessible
myHashTable.set("grapes", 10000);
myHashTable.set("appless", 500);

myHashTable.get("grapes");

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

//naive
function firstRecurringCharacter(input) {
  //check input
  if (!input || input.length < 2 || typeof input !== "object") {
    return "enter proper input";
  }
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter([2, 3, 4, 5]);
firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]); //gives wrong ans in this part
//rewrite it and correct it
function firstRecurringCharacter0(input) {
  recurringIndex = input.length;
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < recurringIndex; j++) {
      if (input[i] === input[j]) {
        recurringIndex = j;
      }
    }
  }
  if (recurringIndex < input.length) return input[recurringIndex];
  else return undefined;
}

firstRecurringCharacter0([2, 5, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter0([2, 3, 4, 5]);
firstRecurringCharacter0([2, 5, 5, 2, 3, 5, 1, 2, 4]);
//O(n^2) -- too much time consuming
//O(1) -- space complexity

//use has tables --> set
function firstRecurringCharacter1(input) {
  //check input
  if (!input || input.length < 2 || typeof input !== "object") {
    return "enter proper input";
  }
  mySet1 = new Set();
  for (let i = 0; i < input.length; i++) {
    if (mySet1.has(input[i])) return input[i];
    mySet1.add(input[i]);
  }
  return undefined;
}

firstRecurringCharacter1([2, 5, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter1([2, 3, 4, 5]);
firstRecurringCharacter1([2, 5, 5, 2, 3, 5, 1, 2, 4]);
//O(n)-- time complexity significantly reduces
//O(n)--space complexity

//use map--> store array element as key and map will not allow duplicate keys
function firstRecurringCharacter2(input) {
  let myMap = new Map();

  for (let i = 0; i < input.length; i++) {
    if (myMap.has(input[i])) {
      return input[i];
    } else {
      // myMap.set(input[i], true);
      myMap[input[i]] = i;
    }
  }
  return undefined;
}

firstRecurringCharacter2([2, 2]);
firstRecurringCharacter2([2, 3, 4, 5]);
firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]);
// time co-O(n)
//O(n)--space complexity

/// linked list

// 10->5->16
let myLL = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};
console.log(myLL);
