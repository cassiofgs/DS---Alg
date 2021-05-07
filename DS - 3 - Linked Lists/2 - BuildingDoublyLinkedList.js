class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.lenght = 1;
    }

    insert(index, value) {
        if (index > this.lenght) {
            console.log('Index should be at max ' + (this.lenght));
            return 'Index should be at max ' + this.lenght;
        }

        if (index === 0) {
            this.prepend(value);
            return this;
        }

        if (index === this.lenght) {
            this.append(value);
            return this;
        }

        let previousNode = this.traverseToIndex(index-1);
        let newNode = new Node(value);
        let nextNode = previousNode.next;

        newNode.next = nextNode;
        newNode.prev = previousNode;

        previousNode.next = newNode;
        nextNode.prev = newNode;
        
        this.lenght++;

        return this;
    }

    remove(index) {
        if (index >= this.lenght) {
            console.log('Index should be at max ' + (this.lenght - 1));
            return 'Index should be at max ' + (this.lenght - 1);
        }

        if (index === 0) {
            this.head = this.head.next;
            return this;
        }

        let previousNode = this.traverseToIndex(index-1);
        let unwantedNode = previousNode.next;
        let nextNode = unwantedNode.next;

        previousNode.next = nextNode;
        nextNode.prev = previousNode;

        this.lenght--;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    traverseBackwardsToIndex(index) {
        let counter = this.lenght - index;
        let currentNode = this.tail;
        while (counter !== index) {
            currentNode = currentNode.prev;
            counter--;
        }

        return currentNode;
    }

    append(value) {
        if (!value) {
            return 'Parameter invalid';
        }

        const newNode = new Node(value);
        newNode.prev = this.tail;

        this.tail.next = newNode;
        this.tail = newNode;
        this.lenght++;

        return this;
    }

    prepend(value) {
        if (!value) {
            return 'Parameter invalid';
        }
        
        const newNode = new Node(value);
        newNode.next = this.head;

        this.head.prev = newNode;
        this.head = newNode;
        this.lenght++;

        return this;
    }

    printList() {
        const array = []
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push({
                value: currentNode.value,
                next: currentNode.next !== null ? currentNode.next.value : null,
                prev: currentNode.prev !== null ? currentNode.prev.value : null
            });
            currentNode = currentNode.next;
        }
        console.log(array);
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 13);
//myLinkedList.remove(2);
myLinkedList.printList();

//console.log(myLinkedList.traverseToIndex(2)); //13
//console.log(myLinkedList.traverseBackwardsToIndex(1)); //10
// 1 --> 10 --> 13 --> 5 --> 16