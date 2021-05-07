/*
Traversal

Can be think of as visiting every node.

Sometimes we have graphs, that aren't ordered like BST or even trees that are unordered, and to do
some task we will have to go trough each node to check something or perform some action, like if it is
a grap of People and you need to update their ages, so you will have to traversal all the graph.

The cost to traversal will be O(n), the same as with arrays, so why don't we use arrays here?

1 - Arrays could not be the best DS to represent our case
2 - Arrays depending of its usage, can be slow to insert/delete itens
    - Trees and graphs can insert and delete with more performance
3 - Search is always O(n) in arrays, and can be amenized in traversals (we will see)
*/