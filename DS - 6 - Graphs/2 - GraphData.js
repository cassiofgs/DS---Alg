/*
        2   -------  0
      /   \
    1 ---- 3
*/

// Edge List
// Shows the connections on a graph
// If it is a weighted graph, we will be putting a third value in the array, that is the value of the edge
const graph = {
    0: [0, 2],
    1: [2, 3],
    2: [2, 1],
    3: [1, 3]
};

// Adjacent List
// For the node that we are looking, we store the adjacent nodes
// In this example, the node is the array index, so for index 0 we only have the value 2, because it is 
//the only connection that 0 have.
// If it is a weighted graph, then we have to separate each value in the array to have its own array 
//composed by node and value of the edge.
const graph = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2]
};

// Adjacent Matrix
// It has 0 and 1, indicating if a node has a connection with another Node, where 0 is No and 1 is Yes.
// If the graph is weighted, then instead of 1 indicating that is a connection, we use the value of the edge.
const graph = {
    0: [0, 0, 1, 0], //0 don't have a connection with 0, 1 and 3, and have a connection with 2
    1: [0, 0, 1, 1], //1 don't have a connection with 0 and 1, and have a connection with 2 and 3
    2: [1, 1, 0, 1], //2 don't have a connection with 2, and have a connection with 0, 1 and 3
    3: [0, 1, 1, 0]  //3 don't have a connection with 0 and 3, and have a connection with 1 and 2
};