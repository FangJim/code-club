class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
};
class BinarySearchTree {
    constructor() {
        this.root = null;
        this.arr = [];
    }
    insertNode(data) {
        let newNode = new Node(data);
        if (this.root === null) this.root = newNode;
        else this.insert(this.root, newNode);
    }
    insert(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else//still have l child
                this.insert(node.left, newNode);
        }
        else {
            if (node.right === null)
                node.right = newNode;
            else//still have r child
                this.insert(node.right, newNode);
        }
    }
    findMin(node) {
        if (node.left === null)
            return node.data;
        else
            return this.findMin(node.left);
    }
    findMax(node) {
        if (node.right === null)
            return node.data;
        else
            return this.findMax(node.right);
    }
    search(node, data) {
        if (node === null)
            return 'Not found';
        else if (data < node.data)
            return this.search(node.left, data);
        else if (data > node.data)
            return this.search(node.right, data);
        else if (data === node.data) {
            return 'Found it'
        }
    }
    getRoot() {
        return this.root;
    }
    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            this.arr.push(node.data);
            this.inOrder(node.right);
        }
    }
}



let BST = new BinarySearchTree();
let arr = [3, 78, 23, 5, 768, 234, 122, 456, 33, 234, 6745, 7, 15, 9, 0];
console.log('Before sorting : ' + arr)
for (let i = 0; i < arr.length; i++) {
    BST.insertNode(arr[i]);
}
let root = BST.getRoot();
BST.inOrder(root)
console.log('After sorting : ' + BST.arr)
console.log('MAX is : ' + BST.findMax(root))
console.log('min is : ' + BST.findMin(root))
console.log('Search for 122 : ' + BST.search(root, 122))
console.log('Search for 3343 : ' + BST.search(root, 3343))