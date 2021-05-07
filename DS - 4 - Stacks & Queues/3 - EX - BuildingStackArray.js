class Stack {
    constructor() {
        this.data = [];
    }

    peek() {
        let value = this.data[this.data.length-1]
        return value !== undefined ? value : null;
    }

    push(value) {
        this.data.push(value);
    }

    pop() {
        if (this.data.length === 0) {
            return null;
        }

        return this.data.pop();
    }

    isEmpty() {
        return this.data.length === 0 ? true : false;
    }
}

module.exports = Stack;
// const myStack = new Stack();
// myStack.push('Item 1');
// myStack.push('Item 2');
// myStack.push('Item 3');
// myStack.pop();
// myStack.pop();
// myStack.pop();

// console.log(myStack)