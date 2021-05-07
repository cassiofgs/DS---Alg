class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    // Add an node to Adjacent List
    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    // Add the connection on the vertices for the nodes passed as parameters
    addEdge(node1, node2) {
        // Undirected Graph, so both nodes will have to add the connection between them
        if (node1 === node2) {
            console.log('Nodos são iguais');
            return false;
        }

        if (!this.adjacentList[node1] || !this.adjacentList[node2]) {
            console.log('Nodo não existe');
            return false;
        }

        if (!this.adjacentList[node1].includes(node2)) {
            this.adjacentList[node1].push(node2);
        }

        if (!this.adjacentList[node2].includes(node1)) {
            this.adjacentList[node2].push(node1);
        }
    }

    // Show all the connections between the nodes
    showConnections() {

    }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');

myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

// myGraph.showConnections();
console.log(myGraph);

/*
Answer:
0 --> 1 2
1 --> 3 2 0
2 --> 4 1 0
3 --> 1 4
4 --> 3 2 5
5 --> 4 6 
6 --> 5
*/