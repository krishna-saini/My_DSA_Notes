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


# Hash Tables and Sets

## Hash Table

A hash table is a data structure that allows efficient data retrieval based on key-value pairs. It provides an associative array abstract data type, where keys are mapped to values.

### Bad examples of hashing functions

1. `return 0;` -> always returns 0 irrespective of input
2. `return random(10)` -> not deterministic
3. `return str.length` -> can lead to many collisions

### Basic Hash functions

1. `return char.charCodeAt(0)` , "a" -> 97, "b" -> 98

### Cons of Hash table
- Hash functions can provide the same index for two different inputs, leading to collisions
- Collisions are typically handled using techniques like chaining (linked lists)
- Due to collisions, operations can slow down to O(n/k) where k is the size of the hash table

## Hash Table in JS using Objects

In JavaScript, objects are implemented as hash maps or dictionaries.

- Objects have no guaranteed order
- Lookup time for objects is typically O(1)
- When we access a value using a key, the key is hashed and used as the memory address to retrieve the value
- No need to shift elements when adding/deleting, unlike arrays

### Time complexity of various operations on objects

| Operation | Average | Worst Case |
|-----------|---------|------------|
| Lookup    | O(1)    | O(n)       |
| Search    | O(1)    | O(n)       |
| Insert    | O(1)    | O(n)       |
| Delete    | O(1)    | O(n)       |

The worst-case O(n) can occur in cases of severe hash collisions.

Other object operations:
- `hasOwnProperty()` is O(1)
- `Object.keys(obj)` is O(n)
- `Object.values(obj)` is O(n)
- `Object.entries(obj)` is O(n)

### Shortcomings of objects as hash tables

1. Objects have inherited properties which may conflict with user-defined keys
2. The size of the object is not automatically tracked
3. The `hasOwnProperty()` method can be overwritten, potentially causing errors

## Hash Table in JS using Map

To address the shortcomings of objects, JavaScript introduced the `Map` data structure.

### How Maps are implemented

Maps in JavaScript are typically implemented using a hash table data structure, often with a balanced tree for handling collisions.

### Time complexity of various operations on Map

| Operation | Average | Worst Case |
|-----------|---------|------------|
| get       | O(1)    | O(log n)   |
| set       | O(1)    | O(log n)   |
| has       | O(1)    | O(log n)   |
| delete    | O(1)    | O(log n)   |

- `Map.prototype.keys()`, `values()`, and `entries()` all have O(1) time complexity for creating the iterator
- Iterating through all elements is O(n)

## Sets

### How Sets are implemented in JS

Sets in JavaScript are typically implemented using a hash table structure, similar to Map.

### Time complexity of various operations on Set

| Operation | Average | Worst Case |
|-----------|---------|------------|
| add       | O(1)    | O(log n)   |
| has       | O(1)    | O(log n)   |
| delete    | O(1)    | O(log n)   |

- `Set.prototype.keys()`, `values()`, and `entries()` all have O(1) time complexity for creating the iterator
- Iterating through all elements is O(n)

Note: In Sets, `keys()` and `values()` return the same iterator, as a Set only stores unique values without associated keys.

