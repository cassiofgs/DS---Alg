// Arrays are consisted of sequencial addresses in the memory.
const strings = ['a', 'b', 'c', 'd'];

// Access --> O(1) --> Constant time, because we have the index of the item we want to access
console.log(strings[2]);

// Push - Insert an item in the end of array --> O(1) --> Constat time, because it will just have to add an 
// item in the end of the array
strings.push('e');
console.log(strings);

// Dynamic Array - Push operations in dynamic arrays
// In languages like C++, we have to specify the length of the array, and if we want to add one more item
// than what we have specified, then we will have to copy that array, to another one that we created with 
// more space alocated in memory.
// In other languages, such as JavaScript, we don't need to worry about this, as soon as we need to add 
// one more item in the array, if there will be no space adjacent in the memory, the language will create
// another array (usually double the size of the previous one) and alocated the old one, plus the new item
// BUT then the push operation, will be O(n) instead of O(1), because it will have to copy all the array

// Pop - Delete an item of the end of array --> O(1) --> Constant time, because it will always delete the 
// item in the end
strings.pop();
strings.pop();
console.log(strings);

// Unshift - Add an item in the begining of the array --> O(n) --> Linear time, because it will have to 
// shift the indexes of all the itens in the array to be able to add something in the beginning
strings.unshift('x');
console.log(strings);

// Shift - Delete an item in the begining of the array --> O(n) --> Linear time, because it will have to
// shift the indexes of all the itens in the array, to be able to delete something in the beginning
strings.shift();
console.log(strings);

// Splice - Insert an item in the array, after the index we pass as parameter --> O(n) --> in the worst 
// case we will have to shift all the itens in the array, if the user decides to put the item in the
// begining of the array
strings.splice(2, 0, 'alien');
console.log(strings);