// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

// The pattern of the sequence is that each value is the sum of the 2 previous values
// That means if we passe N = 5 -> 2+3

function findFibonacciIcterative(index) {
    let previousPreviousValue = 0
    let previousValue = 1;
    let result = 0;

    for (let i = 2; i < index; i++) {
        result = previousPreviousValue + previousValue;
        previousPreviousValue = previousValue;
        previousValue = result;
    }

    return previousPreviousValue + previousValue;
}

function findFibonacciRecursive(index) {
    if (index < 2) {
        return index;
    }
    
    return findFibonacciRecursive(index - 1) + findFibonacciRecursive(index - 2);
}

console.log(findFibonacciIcterative(8));
console.log(findFibonacciRecursive(8));