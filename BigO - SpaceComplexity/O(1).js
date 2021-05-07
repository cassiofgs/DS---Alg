function booooo(array) {
    for (let i = 0; i < array.length; i++) {
        console.log('booooo!');
    }
}

booooo([1,2,3,4,5,6]); // O(1) --> Constant Space

// We just create a variable, to be the index of the loop, but it doesn't grow with the input.
// It will be always the same size.