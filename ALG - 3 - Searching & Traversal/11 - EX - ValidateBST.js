class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = new TreeNode(32);
        this.root.left = new TreeNode(26);
        this.root.right = new TreeNode(47);

        this.root.right.right = new TreeNode(56);

        this.root.left.left = new TreeNode(19);
        this.root.left.left.right = new TreeNode(27);
    }
}

function isValidBST (root) {
    return isBSTHelper(root, -Infinity, Infinity);
};

function isBSTHelper(node, min, max) {
    if (node === null) {
        return true;
    }

    if (node.val < min || node.val > max) {
        return false;
    }

    return isBSTHelper(node.left, min, node.val - 1) && isBSTHelper(node.right, node.val + 1, max);
}

const myBST = new BinarySearchTree();
console.log(isValidBST(myBST.root));
// console.log(minValue(myBST.root.left));
/*
              9
        4             20
     2    6       15      170
   1  3  5  7   13  16  150 180
                       145 175
*/