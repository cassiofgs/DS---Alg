// Linear Data Structures, only one element at time can be reached
// It is a benefit to have less operations in some cases, it guarantes that who will use, will use only
// this methods

// Stacks:
// LIFO - Last In First Out
// Used when you need to keep adding items and use then for the last one to the first one
// Like Undo operations, your browser history, functions in a language engine, you call a function that 
// call another function, it starts to resolve for the end (Magic Stacks) ROFL.


// Queues:
// FIFO - First In First Out
// Wait list, Restaurant, Uber, Printer
// First item puts on a queue will be the first to be used
// 

/*
    Stacks          Queues
Lookup O(n)*        Lookup  O(n)*
Pop    O(1)         enqueue O(1)
Push   O(1)         Dequeue O(1)
Peek   O(1)         Peek    O(1)

* -> Stacks and Queues don't have lookup methods, but if we implement these, they will be O(n).
*/