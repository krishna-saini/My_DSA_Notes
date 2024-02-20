### hash/hash tables

## Hash Table

A hash table is a data structure that allows efficient data retrieval based on key-value pairs. It provides an associative array abstract data type, where keys are mapped to values.

Bad example of hashing mapping

1.  return 0; -> always return 0 irrespective of input
2.  return random(10) --> not deterministic
3.  return str.length

Basic Hash functions

1.  return char.charCodeAt(0) , "a" -> 96, "b" -> 98

#Cons of Hash table
Hash functions can provide same indexing for two different input and it leads to collision
However this is handled by using linked list
Due to collision, the operations are slow down by O(nk) where k is size of hash table

## Hash Table in JS using objects

In JavaScript, objects are implemented as hash maps or dictionaries.

Object have no order.

lookup time for objects is O(1), How? . So, when we try to access the value using the key, the key is hashed and the hash is used as the memory
address to retrieve the value. Hence, the lookup time is O(1).

Since hash tables are not indexed, we dont need to shift elements on addingdeleting.

However in some cases, when a rehashing or resizing of the underlying hash table is needed (due to changes in the number of elements), the time complexity may become O(n). This is a less frequent operation.

Algo Average Worst case
lookup O(1) O(1)
Search O(1) O(n)
Insert O(1) O(n)
Delete O(1) O(n)

Hence objects are preferred for these operations

hasownproperty() is O(1)

Object.keys() is O(n)
Object.values() is O(n)
Object.entries() is O(n)

## Hash Table in JS using Map

# shortcomings of object

1. It has properties added by the Object class. Keys you input may conflict and overwrite default properties inherited from the class.
2. The size of the Hash Table is not tracked. You need to manually count how many properties are defined by the programmer instead of inherited from the prototype.
3. JavaScript doesn't block an attempt to overwrite the hasOwnProperty() method, which may cause an error like this:

To handle these shortcomings, JavaScript created another implementation of the Hash Table data structure which is called Map
