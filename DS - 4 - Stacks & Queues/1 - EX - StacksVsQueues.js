// Stacks
// Arrays or Linked Lists?
// Both works and depends of preference or use case

// Arrays are faster, they have cache locallity because all the items are next to each other in memory
// But arrays will have a limit in size, when that limit reachs, push an item will become O(n).

// Linked Lists, doesn't have this problem with the size, so push items will be always O(1)
// But they consume more memory space, because we have to store the pointers for the next item, and
// They are slower because items are scatered all over the memory.



// Queues
// Arrays or Linked Lists?

// Only Linked Lists

// Because add or remove from the beginning of the array, will cause all index to shift, making 
// insertion or deletion always O(n).