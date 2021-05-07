/*
NOTE: Heap DS is diferente from memory Heap, memory Heap is a location in memory used by some languages.

In BH every node has a lower/higher priority related for their parent

Max Heap: Starts with the highest number
Min Heap: Starts from the lowest number

They are used when you need to implement priority or comparativa operations.

        101
    77      33
  1   45  15  10

  elements are inserted in order, left to right, and if a value is greater than the parent, the nodes
  will swap the order, recursively, until it is not greater than the parent.

Lookups are slow then with binary trees, because heaps are less ordered, trees have a meaning for 
left and right, right is always greater, left is always lower, with heap that doesn't matter, the numbers
on left and right could be anything if they are less/high than the parent node.

    Binary Heap
Lookup: O(n)
Insert: O(log n)
Delete: O(log n)
*/