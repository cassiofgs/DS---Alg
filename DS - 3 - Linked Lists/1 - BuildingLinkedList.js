class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
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

        let leader = this.traverseToIndex(index-1);
        let newNode = new Node(value);

        newNode.next = leader.next;
        leader.next = newNode;
        
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

        let leader = this.traverseToIndex(index-1);
        leader.next = leader.next.next;

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

    append(value) {
        if (!value) {
            return 'Parameter invalid';
        }

        const newNode = new Node(value);

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
                next: currentNode.next !== null ? currentNode.next.value : null
            });
            currentNode = currentNode.next;
        }
        console.log(array);
    }

    reverse() {
        if (this.lenght <= 1) {
            return this;
        }

        let currentNode = this.head;
        let previousNode = null;
        let nextNode = currentNode.next;
        currentNode.next = null;

        this.tail = currentNode;

        while (nextNode !== null) {
            previousNode = currentNode;
            currentNode = nextNode;
            nextNode = currentNode.next;

            currentNode.next = previousNode;
        }

        this.head = currentNode;
    }
}

//module.exports = Node;
module.exports = LinkedList;

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 13);
// myLinkedList.printList();

// console.log(myLinkedList.traverseToIndex(2));