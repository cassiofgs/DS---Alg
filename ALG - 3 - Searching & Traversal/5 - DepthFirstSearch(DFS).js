/*
Depth First Search

Goes from top to bottom, then when are no more child to visit, goes back to the ancestor and try
the other side.

        9
    6       12
  1  4    34  54

Here we go 9, 6, 1, 4, 12, 34, 54

First all the nodes from top to bottom in the left, when we reach the leaf 1, we go back to the 
ancestor 6 and go right, when we reach the leaf node for the right, we go back to the predecessor
ancestor 9, and go to the right
*/