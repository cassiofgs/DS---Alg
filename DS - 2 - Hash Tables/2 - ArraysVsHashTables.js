/*
    Arrays          Hash Tables
Search O(n)         Search O(1)
Lookup O(1)         Lookup O(1)
Insert O(n)         Insert O(1)
Delete O(n)         Delete O(1)
Push   O(1)         -
*/

// Hash Tables are better for searching items, because with the hash function on the key, we will know where
// that will be stored, and with the array we will have to loop through all the items to find it.

// Insert items will be O(1) for hash tables, because we only need to hash the key and store the value,
// with arrays we will have to shift all the other items, so the array still be a sequencial order
// Arrays have O(1) for push() because it wont shift the other items, beside that, hash tables are better

// Arrays are better if you need the items to be ordered in the memory for some reason