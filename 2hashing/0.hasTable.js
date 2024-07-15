/**
 * How to Implement a Hash Table Data Structure in JavaScript
 */
/**
 * You can implement a Hash Table in JavaScript in three steps:

Create a HashTable class with table and size initial properties
Add a hash() function to transform keys into indices
Add the set() and get() methods for adding and retrieving key/value pairs from the table.
 */

// step 1
class HashTable {
  constructor(size = 10) {
    //  It is automatically called when an object is created from the class.
    this.table = new Array(size);
    this.size = 0;
  }

  // step 2
  // A simple way to create the hash would be to sum the ASCII code of the characters
  // in the key using the charCodeAt() method as follows
  _hash(key) {
    // the method is named using _ to indicate that it's a private method:
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length; // To ensure that the hash value doesn't exceed the bucket size,
  }

  set(key, value) {
    const indices = this._hash(key);
    this.table[indices] = [key, value]; // The [key, value] pair will be assigned to the table at the specified index
    this.size++;
  }

  get(key) {
    const indices = this._hash(key);
    return this.table[indices]; // return key value pair
  }
  // To delete a key/value pair from the Hash Table
  remove(key) {
    const indices = this._hash(key);
    if (this.table[indices] && this.table.length > 0) {
      this.table[indices] = undefined;
      this.size--;
      return true;
    }
    return false;
  }
}

const ht = new HashTable();
ht.set("Canada", 300);
ht.set("France", 100);
ht.set("Spain", 110);
console.log(ht);
console.log(ht.get("Canada")); // [ 'Canada', 300 ]
console.log(ht.get("France")); // [ 'France', 100 ]
console.log(ht.get("Spain"));
console.log(ht.remove("name"));


// collision 
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
      hash += str.charCodeAt(i);
  }
  return hash % 10;
}

console.log(simpleHash("abc")); // Outputs: 4
console.log(simpleHash("cba")); // Outputs: 4