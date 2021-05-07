// In JS we can use objects {} or Map() as Hash Tables, the language provide an hash function that 
// transforms the key we gave in a memory addres at runtime and really fast.

let user = {
    age: 32,
    name: 'Cassinho do Magi'
}
// With Map(), we can use other objects as keys, like integers, arrays, functions etc...
// With the object {}, anything that is used as key, will be stringfied
// Map also maintain the order of insertion in memory address, with object the order is not mantained 
const myMap = new Map();
myMap.set(1, 32);
// Set is like a Map, but only accept values, with no keys, probably used when you only need to 
// keep or return the key or value, you can store then in a set and return
const mySet = new Set();
mySet.add(32);

// Access --> O(1) --> Constant time, because with the hash function, our key will have always the same 
// address in memory.
console.log(user.age);

// Insert --> O(1) --> Constant time, because with the hash function, the key will be generated fast, and
// will be stored at runtime in the memory
user.city = 'Magi bitch';
console.log(user);

// Delete --> O(1) --> Constant time, because with the hash function we will know where in the memory to
// look up for that content and delete it.
delete user.city;
console.log(user);

// Search --> O(1)


//----------------------------
// Cons:
// Hash Collisions --> Access will be O(n) in this cases.
// Give enough data, or limited memory, the hash function will create the same hash for diferent keys, and 
// they will collide in memory, and for not lose the data you insert, a linked list will be created, 
// pointing from one data to the next one, and this could occur n times, and for this cases, looking
// up for data will become O(n) instead of constant time.

// If we want all the keys for the hash table, we will have to run over all the size of the memory 
// allocated for that object, in the array, we just have to loop for the size of it, but in hash tables
// the size allocated can be more than we are using, and will have to loop trough empty items and discard
// then

// The object in JS dont guarantee that the order of insert will be the order of retrieval if we loop trough
// all the items in the object, because it could be assigned a address in the end.