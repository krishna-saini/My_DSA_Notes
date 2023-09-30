class Linkedlist {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
}

// SIngle LL
// Single_LL
{
  class Node {
    constructor(value) {
      (this.value = value), (this.next = null);
    }
  }

  class Linkedlist {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
      };
      //     console.log(this.head)
      this.tail = this.head;
      this.length = 1;
    }

    //print values of LL in form of array
    printList() {
      const arr = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return arr;
    }

    //add at end of LL
    append(value) {
      //     const newNode = {
      //       value:value,
      //       next:null
      //     }
      const newNode = new Node(value);
      //     console.log(newNode)
      this.tail.next = newNode;
      this.tail = newNode;
      ++this.length;
      return this.printList();
    }

    //add at beginning of LL
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      //     console.log(newHead)
      ++this.length;
      return this.printList();
    }

    traverseToIndex(index) {
      //check params
      if (index < 0 || !index || typeof index !== "number") {
        console.log("provide proper index values");
        return;
      }
      let currentNode = this.head;
      let counter = 0;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }

    //insert item in between at given index
    insert(index, value) {
      //check params
      if (index === 0) {
        return this.prepend(value);
      } else if (index >= this.length) return this.append(value);

      let pre = this.traverseToIndex(index - 1);

      let aft = pre.next;
      const newNode = new Node(value);
      newNode.next = aft;
      pre.next = newNode;
      ++this.length;
      return this.printList();
    }

    remove(index) {
      //check params

      //removing header
      if (index === 0) {
        let current = this.head.next;
        this.head = current;
        this.length--;
        return this.printList();
      }
      //handling out of index
      else if (index > this.length) {
        console.log("given index is out of range to remove");
        return;
      }

      let pre = this.traverseToIndex(index - 1);

      let current = pre.next;
      pre.next = current.next;
      this.length--;
      return this.printList();
    }
  }

  const myLinkedlist = new Linkedlist(10);
  console.log(myLinkedlist.printList());
  myLinkedlist.append(5);
  myLinkedlist.append(16);
  // console.log(myLinkedlist.printList());
  myLinkedlist.prepend(1);
  console.log(myLinkedlist.printList());
  myLinkedlist.insert(2, 99);
  console.log(myLinkedlist.printList());
  myLinkedlist.remove(2);
  // console.log(myLinkedlist);
}

//DOubly LL
{
  class Node {
    constructor(value) {
      (this.value = value), (this.next = null), (this.pre = null);
    }
  }

  class Linkedlist {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        pre: null,
      };
      this.tail = this.head;
      this.length = 1;
    }

    //print values of LL in form of array
    printList() {
      const arr = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return arr;
    }

    //add at end of LL
    append(value) {
      const newNode = new Node(value);

      newNode.pre = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      ++this.length;
      return this.printList();
    }

    //add at beginning of LL
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head.pre = newNode;
      this.head = newNode;
      ++this.length;
      return this.printList();
    }

    traverseToIndex(index) {
      //check params
      if (index < 0 || typeof index !== "number") {
        console.log("provide proper index values");
        return;
      }
      let currentNode = this.head;
      let counter = 0;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }

    //insert item in between at given index
    insert(index, value) {
      //check params
      if (index === 0) {
        return this.prepend(value);
      } else if (index >= this.length) return this.append(value);

      let leader = this.traverseToIndex(index - 1);

      let follower = leader.next;
      const newNode = new Node(value);
      newNode.next = follower;
      newNode.pre = leader;
      leader.next = newNode;
      follower.pre = newNode;
      ++this.length;
      return this.printList();
    }

    remove(index) {
      //check params

      //removing header
      if (index === 0) {
        let current = this.head.next;
        current.pre = null;
        this.head = current;
        this.length--;
        return this.printList();
      }
      //handling out of index
      else if (index > this.length) {
        console.log("given index is out of range to remove");
        return;
      }

      let leader = this.traverseToIndex(index - 1);

      let current = leader.next;
      let aft = current.next;
      leader.next = current.next;
      aft.pre = current.pre;
      this.length--;
      return this.printList();
    }
  }

  const myLinkedlist = new Linkedlist(10);
  console.log(myLinkedlist);
  myLinkedlist.append(5);
  myLinkedlist.append(16);
  console.log(myLinkedlist.printList());

  myLinkedlist.prepend(1);
  console.log(myLinkedlist.printList());
  myLinkedlist.insert(0, 99);
  console.log(myLinkedlist.printList());
  myLinkedlist.remove(2);
  console.log(myLinkedlist.printList());
}

// exercise : reverse  a LL

reverse() {
      
    if(!this.head.next) {
      return this.head;
    }
    
  
    
    let first = this.head;
    let second  = first.next;
    
    while(second){
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
      this.tail = this.head;
    
    this.head.next = null;
    this.head = first;
    
    
    return this.printList();
  }

//use LL in inserting item in  hash table as arrays insertion (unshift) are slower
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
  


  // Stacks using Linked lists

  {
    class Node {
      constructor(value){
        this.value = value;
        this.next = null;
      }
    }
    
    class Stack {
      constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
      }
      peek() {
        return this.top;
      }
      push(value){
        const newNode = new Node(value);
        if (this.length === 0) {
          this.top = newNode;
          this.bottom = newNode;
        } else {
          const holdingPointer = this.top;
          this.top = newNode;
          this.top.next = holdingPointer;
        }
        this.length++;
        return this;
      }
      pop(){
        if (!this.top) {
          return null;
        }
        if (this.top === this.bottom) {
          this.bottom = null;
        }
    //     const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
      }
      //isEmpty
    }
    
    const myStack = new Stack();
    myStack.peek();
    myStack.push('google');
    myStack.push('udemy');
    myStack.push('discord');
    myStack.peek();
    myStack.pop();
    myStack.pop();
    // myStack.pop();
    
    
    //Discord
    //Udemy
    //google
  }

  // Stacks using arrays
  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

 //Queue using Linked list

 {class Node{
  constructor(value){
    this.next = null;
    this.value = value;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length =0;
  }
  
  peek(){
    return this.first;
  }
  
  enqueue(value){
    
    const newNode = new Node(value)
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
     this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  
  dequeue(){
    if(!this.first) return null;
    if (this.first === this.last) return null;
//      const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();
myQueue.enqueue('krishna')
myQueue.enqueue('Jonas')
myQueue.enqueue('SUhel')
myQueue.peek()
myQueue.dequeue();}

