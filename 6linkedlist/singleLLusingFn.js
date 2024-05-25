function Node(val) {
    this.val = val;
    this.next = null;
}

function MyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length) return -1;
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
    }
    return currentNode.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
};

MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.length) return;

    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    if (index === this.length) {
        this.addAtTail(val);
        return;
    }

    const newNode = new Node(val);
    let preNode = this.head;
    for (let i = 0; i < index - 1; i++) {
        preNode = preNode.next;
    }
    newNode.next = preNode.next;
    preNode.next = newNode;
    this.length++;
};

MyLinkedList.prototype.shift = function() {
    if (!this.head) return undefined;
    const newHead = this.head.next;
    this.head.next = null;
    this.head = newHead;
    this.length--;
};

MyLinkedList.prototype.pop = function() {
    if (!this.head) return undefined;
    if (this.length === 1) {
        const current = this.head;
        this.head = null;
        this.tail = null;
        this.length--;
        return current;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
        newTail = current;
        current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    return current;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.length) return;

    if (index === 0) {
        this.shift();
        return;
    }

    if (index === this.length - 1) {
        this.pop();
        return;
    }

    let preNode = this.head;
    for (let i = 0; i < index - 1; i++) {
        preNode = preNode.next;
    }
    const removedNode = preNode.next;
    preNode.next = removedNode.next;
    this.length--;
};

