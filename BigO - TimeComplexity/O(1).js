const boxes = ['box1', 'box2'];

function logBox(array) {
    console.log(array[0]);
}

logBox(boxes); // O(1) --> Constant Time

// Don't matter how many times the input grows, we will execute only one operation.