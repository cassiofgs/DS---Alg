/*
Dynamic Programming can also be viewed as 
Divide & Conquer + Memoization
Divide & Conquer = Recursive Tree that we used to get the previous finbonnaci numbers
Memoization = Caching this results so we don't need to calculate then again

Should I use Dynamic Programming?
The problem
1 - Can be divided into subproblems?
2 - Has a Recursive Solution
3 - Are there repetitive subproblems
4 - Can I memoize the subproblems
Use dynamic programming to make it more efficient
*/

// O(2^n) Horrible Time complexity
// O(1) Excellent Space complexity
function findFibonacciRecursive(index) {
    if (index < 2) {
        return index;
    }
    
    return findFibonacciRecursive(index - 1) + findFibonacciRecursive(index - 2);
}

// O(2n) fair time complexity
// O(n) fair space complexity
let calculations = 0;
function findFibonacciMemoized() {
    let cache = {};

    return function(n) {
        calculations++;
        if (cache[n] !== undefined) {
            return cache[n];
        }

        if (n < 2) {
            cache[n] = n;
            return n;
        }

        cache[n] = arguments.callee(n-1) + arguments.callee(n-2);
        return cache[n];
    }
}

const fibMem = findFibonacciMemoized();
console.log(fibMem(40));
console.log(calculations);