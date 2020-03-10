function LinkedNode(value) {
    this.value = value;
    this.next = null;
};

function LinkedList() {
    this.root = null;
    this.size = 0;
};

LinkedList.prototype.init = function (array) {
    if (!Array.isArray(array)) return 'Please check your input!';
        for (let i = array.length - 1; i >= 0; i--) {
            this.addElmAtStart(array[i]);
        }
};

LinkedList.prototype.addElmAtStart = function (value) {
    let tempNode = new LinkedNode(value);

    tempNode.next = this.root;
    this.root = tempNode;
    this.size += 1;

    return this.size;
};

LinkedList.prototype.deleteFirst = function () {
    let tempNode = this.root.next;
    const firstElm = this.root.value;

    this.root = tempNode;
    this.size -= 1;

    return firstElm;
};

LinkedList.prototype.addToEnd = function (value) {
    let newNode = new LinkedNode(value);
    let tempNode = this.root;

    while (tempNode) {
        tempNode = tempNode.next;
        
        if (!tempNode.next) {
            tempNode.next = newNode;
            
            this.size += 1;
            return this.size;
        }
    }
};

LinkedList.prototype.deleteLast = function () {
    let tempNode = this.root;
    let previous = null;
    let result = null;

    while (tempNode) {
        previous = tempNode;
        tempNode = tempNode.next;
        
        if (!tempNode.next) {
            result = tempNode.value;
            previous.next = null;
            
            this.size -= 1;
            return result;
        }
    }
};

LinkedList.prototype.clearList = function () {
    this.root = null;
    this.size = 0;
};

LinkedList.prototype.toArray = function () {
    let array = [];
    let tempNode = this.root;

    while (tempNode) {
        array.push(tempNode.value);
        tempNode = tempNode.next;
    }
    
    return array;
};

LinkedList.prototype.toString = function () {
    let myString = '\' ';
    let tempNode = this.root;

    while (tempNode) {
        myString += tempNode.value + ', ';
        tempNode = tempNode.next;
    }
    myString += '\''

    return myString;
};

LinkedList.prototype.getSizeOfList = function () {
    return this.size;
};