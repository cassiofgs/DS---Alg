function arrayOfNTime(iTimes) {
    let arrayOfHi = [];

    for (let i = 0; i < iTimes; i++) {
        arrayOfHi[i] = 'hi';
    }

    return arrayOfHi;
}

console.log(arrayOfNTime(6)); // O(n) --> Linear Space

// We have a variable to be the index of the loop, but it doesn't grow with the input.
// The array that was created inside the loop, it will grow up as the input passed to the function grows
// Because eacht iteration, one more space will be alocated in memory for that array