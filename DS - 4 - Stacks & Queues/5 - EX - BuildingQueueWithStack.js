class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.data = [];
    }

    peek() {
        return this.data[0] !== undefined ? this.data[0] : null;
    }

    enqueue(value) {
        if (this.data.length === 0) {
            this.first = value;
        }

        this.last = value;
        this.data.push(value);
        return true;
    }

    dequeue() {
        if (this.data.length === 0) {
            return null;
        }

        if (this.first === this.last) {
            this.last = null;
            this.first = null;
        }

        const itemToReturn = this.data.shift();
        this.first = this.data[0] !== undefined ? this.data[0] : null;
        return itemToReturn;
    }

    isEmpty() {
        return this.data.length === 0 ? true : false;
    }
}

const myQueue = new Queue();
myQueue.enqueue('1')
myQueue.enqueue('2')
myQueue.enqueue('3')
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue);