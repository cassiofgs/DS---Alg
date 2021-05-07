/*
        DFS
PreOrder, InOrder, PostOrder

        9
    4       20
  1  6    15  170

InOrder = [1, 4, 6, 9, 15, 20, 170]
If you are traversing a BST you can bring the result InOrder

PreOrder = [9, 4, 1, 6, 20, 15, 170]
When reaching the leaf we start to go back and get the right side
Useful when we need to recreate a tree, because it is ordered in the way that tree was before

PostOrder = [1, 6, 4, 15, 170, 20, 9]
Search left first, starting with the childs, and then the parents, then go to right and repeat

space complexity O(h)
the deepest node will determine the amount of memory that we are going to use, because is that
amount of functions we are puting in the stack before we start to returning values.
*/