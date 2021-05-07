class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first !== null ? this.first.value : null;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        
        this.length++;
    }

    dequeue() {
        if (this.length === 0) {
            return null;
        }

        if (this.first === this.last) {
            this.last = null;
        }

        const nodeToReturn = this.first;
        this.first = nodeToReturn.next;     

        this.length--;
        return nodeToReturn.value;
    }

    isEmpty() {
        return this.length === 0 ? true : false;
    }

    printList() {
        const array = []
        let currentNode = this.first;
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

const myQueue = new Queue();
myQueue.enqueue('Cássio');
myQueue.enqueue('Samuel');
myQueue.enqueue('Cristiane');
myQueue.dequeue();

console.log(myQueue);