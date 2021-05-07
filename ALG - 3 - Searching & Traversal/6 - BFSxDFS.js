/*
BFS vs DFS

Both of them are O(n) to traversal.

                BFS
Good:                       Bad:
- Shortest Path             - More Memory
- Closer Nodes

BFS it's good to find the shortest path to an item, because the way it traversal trhough the graph,
the nodes that are closer are the ones we are looking for first.

If you have some additional information about the target item that you are searching for, and know 
that this item is in the upper part of the tree, then BFS probably will be better


                DFS
Good:                       Bad:
- Less Memory               - Can Get Slow
- Does Path Exist?

If you have additional information and knows that the node you are looking for is in the bottom of a 
tree or graph, then probably DFS will be better

DFS is good when we need to know that if a path exist between a source node and a target node.
*/