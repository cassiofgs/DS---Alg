/*
With DFS and BFS we kinda don't care about the weight each node has.

In Google Maps, we will have some routes that have better trafic / speed limit / shortest 
so they are better than the other routes.

Dijkstra and Bellman-Ford algorithms allow us to find a shortest path for a weighted graph

Bellman-Ford Algorithm can acomodate negative weights, so if we have a graph that have negative 
weights on its edges/value
Worst case for Bellman-Ford is O(n^2)

Dijkstra so if we don't have negative values, we should opt for Dijkstra that has a better performance

*/