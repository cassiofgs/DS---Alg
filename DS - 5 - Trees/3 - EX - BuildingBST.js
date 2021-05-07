class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!value) {
            return null;
        }

        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
            return this.root;
        }

        let currentNode = this.root;
        while (currentNode) {
            if (newNode.value > currentNode.value) {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return newNode;
                }

                currentNode = currentNode.right;
            } else if (newNode.value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return newNode;
                }

                currentNode = currentNode.left;
            } else {
                return currentNode;
            }
        }
    }

    search(value) {
        if (!value) {
            return false;
        }

        let currentNode = this.root;
        while (currentNode) {
            if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                return currentNode.value;
            }
        }

        return false;
    }

    remove(value) {
        if (!value || !this.root) {
            return false;
        }

        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                        return true;
                    }
                    
                    currentNode.value > parentNode.value ? 
                        parentNode.right = currentNode.left : parentNode.left = currentNode.left;
                    return true;
                }

                if (currentNode.right) {
                    let nodeToBeRelocated = currentNode.right;
                    if (!nodeToBeRelocated.left) {
                        if (parentNode === null) {
                            if (currentNode.left) {
                                this.root = currentNode.left;
                                this.root.right = currentNode.right;
                            } else {
                                this.root = currentNode.right;
                            }
                            return true;
                        }
                        
                        nodeToBeRelocated.left = currentNode.left;
                        nodeToBeRelocated.value > parentNode.value ? 
                            parentNode.right = nodeToBeRelocated : parentNode.left = nodeToBeRelocated;
                        return true;
                    }

                    let previousHolder = null;
                    while (nodeToBeRelocated.left) {
                        previousHolder = nodeToBeRelocated;
                        nodeToBeRelocated = nodeToBeRelocated.left;
                    }

                    previousHolder.left = null;

                    let holdPointer = nodeToBeRelocated.right;
                    nodeToBeRelocated.left = currentNode.left;
                    nodeToBeRelocated.right = currentNode.right;

                    if (holdPointer) {
                        let lastLeftNode = nodeToBeRelocated.right.left;
                        while (lastLeftNode.left) {
                            lastLeftNode = lastLeftNode.left
                        }
                        lastLeftNode.left = holdPointer;
                    }

                    if (parentNode === null) {
                        this.root = nodeToBeRelocated;
                        return true;
                    }

                    nodeToBeRelocated.value > parentNode.value ? 
                        parentNode.right = nodeToBeRelocated : parentNode.left = nodeToBeRelocated;

                    return true;
                }
            }
        }

        return false;
    }
}
const myBST = new BinarySearchTree();
myBST.insert(9);
myBST.insert(4);
myBST.insert(6);
myBST.insert(20);
myBST.insert(170);
myBST.insert(15);
myBST.insert(2);
myBST.insert(1);
myBST.insert(3);
myBST.insert(5);
myBST.insert(7);
myBST.insert(13);
myBST.insert(16);
myBST.insert(150);
myBST.insert(180);
// myBST.insert(175);
// myBST.insert(145);
// myBST.insert(14);
// console.log(myBST);
// myBST.remove(9);
console.log(JSON.stringify(traverse(myBST.root)));
// console.log(myBST.search(9));

/*
              9
        4             20
     2    6       15      170
   1  3  5  7   13  16  150 180
                       145 175
*/

function traverse(node) {
    if (!node) {
        console.log('No node informed');
        return null;
    }

    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}