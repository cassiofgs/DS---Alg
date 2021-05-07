/*
Memoization ====== Caching

It is a specific form of caching.

Memoization is a form of caching that cache the return value of a function, based on the parameters
that was passed in the call.

So if you call one function with the same parameters more than one time, the expected result is the 
same, if you have this result in cache, you can just return it.
*/

function addTo80(n) {
    console.log('Long time process');
    return n + 80;
}

// console.log(addTo80(6));
// console.log(addTo80(6));
// console.log(addTo80(6));

function memoizedAddTo80() {
    let cache = {};
    //Bellow we are using closure in JS, it is a form to bring the cache to function scope
    //Dont polluting the global scope
    //We have another scope in this anonymous function, so the variable cache can live and not be
    //reset in the original function scope;
    return function(n) {
        if (cache[n] === undefined) {
            console.log('Long time process');
            cache[n] = n + 80;
        }
    
        return cache[n];
    }
}

//Here we save the anonymous function to a constant, this is possible because we are returning a 
//function in our original function
const memoized = memoizedAddTo80();

//Now we are calling the anonymous function direct, and the cache is not being reset
console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(6));
console.log(memoized(5));