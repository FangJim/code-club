class BTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    };
    //插入data，只要比root小的插入左子樹，不然就是插入到右子樹
    insert(data) {
        let newNode = new BTNode(data);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (current) {
            if (data < current.data) {
                if (current.left === null) {
                    current.left = newNode;
                    return this
                }
                current = current.left;
            } else if (data > current.data) {
                if (current.right === null) {
                    current.right = newNode;
                    return this
                }
                current = current.right;
            } else {
                return false;
            }
        }
    };
    getRoot() {
        return this.root
    };
    //訪問左子樹
    findMin() {
        let node = this.root;
        let current = node;
        while (current && current.left) {
            current = current.left
        }
        return current
    };
    //訪問右子樹
    findMax() {
        let node = this.root;
        let current = node;
        while (current && current.right) {
            current = current.right;
        }
        return current;
    };
    // 中序走訪
    // 先訪問左子樹使用推疊，因為是後進先出，因此出來時會是由小到大，再訪問右子樹
    inorder() {
        const temp = [];
        const stack = [];
        let node = this.root;
        while (node || stack.length) {
            while (node) {
                stack.push(node);
                node = node.left;
            }
            node = stack.pop();
            temp.push(node.data);
            node = node.right;
        }
        return temp;
    };
    // 尋找data
    // 先看data有沒有比根結點大，有的話就訪問右子樹，不然就訪問左子樹，以此類推找尋我要的data
    search(data) {
        let node = this.root;
        while (node) {
            if (data > node.data) {
                node = node.right;
            } else if (data < node.data) {
                node = node.left;
            } else {
                return 'Found it';
            }
        }
        return 'Not found';
    };
}
const tree = new BinarySearchTree();
const data = [3, 78, 23, 5, 768, 234, 122, 456, 33, 234, 6745, 7, 15, 9, 0];
for (let num of data) {
    tree.insert(num)
};
console.log(data);
console.log(tree.inorder());
console.log(tree.findMax());
console.log(tree.findMin());
console.log(tree.search(122));
console.log(tree.search(3343));