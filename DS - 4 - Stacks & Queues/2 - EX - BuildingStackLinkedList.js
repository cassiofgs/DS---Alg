class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top !== null ? this.top.value : null;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        
        if (this.bottom === null) {
            this.bottom = newNode;
        }

        this.top = newNode;
        this.length++;
    }

    pop() {
        if (this.top === null) {
            return null;
        }
        
        const nodeToReturn = this.top;
        this.top = this.top.next;

        this.length--;

        if (this.length === 0) {
            this.bottom = null;
        }

        return nodeToReturn.value;
    }

    isEmpty() {
        return this.length === 0 ? true : false;
    }

    printList() {
        const array = []
        let currentNode = this.top;
        while (currentNode !== null) {
            array.push({
                value: currentNode.value,
                next: currentNode.next !== null ? currentNode.next.value : null
            });
            currentNode = currentNode.next;
        }
        array.push({lenght: this.length});
        console.log(array);
    }
}

const myStack = new Stack();
myStack.push('item 1');
myStack.push('item 2');
myStack.push('item 3');
myStack.pop();

console.log(myStack.printList());