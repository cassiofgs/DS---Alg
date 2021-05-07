/* 
Binary Search Trees

Good:
- Better than O(n)
- Ordered
- Flexible Size

Bad:
- No O(1) operations. No constant time operations.

PROBLEM:
Unbalanced search tress
Where all or most part of the nodes go always right or left, leaving us with pratically a linked list.
In this case the Time complexity for an unbalaced BST will be:

    Unbalanced BST
    Lookup  O(N)
    Insert  O(N)
    Delete  O(N)
*/ 

/*
    BST - IF BALANCED
Lookup O(log n)
Insert O(log n)
Delete O(log n)
*/