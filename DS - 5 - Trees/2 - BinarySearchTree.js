/*
Binary Search tree is really eficient to search things.
But hashtables also are, so why not using hashtables?
Because with trees we can maintain a relationship whit another items, like the folders on our computer,
you can navigate between them and they are related to each other, like in a tree.

Rules of BST
1 - All the nodes on the right of the current node should be greather than the current node.
    All the nodes on the left of tue current node should be less than the current node.
2 - Every node can have at max two children nodes.

    BST - Binary Search Tree
    Lookup  O(log N)
    Insert  O(log N)
    Delete  O(log N)

PROBLEM:
Unbalanced search tress
Where all or most part of the nodes go always right or left, leaving us with pratically a linked list.
In this case the Time complexity for an unbalaced BST will be:

    Unbalanced BST
    Lookup  O(N)
    Insert  O(N)
    Delete  O(N)
*/