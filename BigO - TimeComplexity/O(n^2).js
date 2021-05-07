const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairOfBoxes(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }        
    }
}

logAllPairOfBoxes(boxes); //O(n^2) --> Quadrantic Time

// Whenever the size of the input increase, the time / number of operations increase exponentially
// If the input is 2, the time of operations will be 4, if the input is 3, operations will be 9