// Single is a little bit faster, because we don't have operations on insert and delete to update the 
// previous attribute of the node, but the biggest difference is the memory usage, as we dont need to hold
// pointers for the previous attribute, the space used is lesse than the double.

// Single is best if you really care about memory
// If the focus is fast insertion / deletion and not searching


// Double is best for searching, you can always start backwards if you somehow know that the node you are
// looking for is in the last half of the list
// This also is valid to delete

// Require more memory and storage


