class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
    this.Ans = [];
  }
  search(data, node = this.root) {
    let nowNode = node;
    while (nowNode) {
      if (nowNode.data > data) {
        nowNode = nowNode.left;
      } else if (nowNode.data < data) {
        nowNode = nowNode.right;
      } else if (nowNode.data === data) {
        return "Found!!";
      }
    }
    return "Not found!!";
  }
  insert(data) {
    if (!this.root) {
      this.root = new Node(data);
      return;
    }
    let nowNode = this.root;
    while (nowNode) {
      if (data < nowNode.data) {
        if (nowNode.left) {
          nowNode = nowNode.left;
        } else {
          nowNode.left = new Node(data);
          break;
        }
      } else if (data > nowNode.data) {
        if (nowNode.right) {
          nowNode = nowNode.right;
        } else {
          nowNode.right = new Node(data);
          break;
        }
      } else {
        break;
      }
    }
    return;
  }
  inOrder(node = this.root) {
    let nowNode = node;
    if (nowNode != undefined) {
      this.inOrder(nowNode.left);
      console.log(nowNode.data);
      this.inOrder(nowNode.right);
    }
  }
  findMin(node = this.root) {
    let nowNode = node;
    if (nowNode.left) {
      this.findMin(nowNode.left);
    } else {
      console.log(nowNode.data);
    }
  }
  findMax(node = this.root) {
    let nowNode = node;
    if (nowNode.right) {
      this.findMax(nowNode.right);
    } else {
      console.log(nowNode.data);
    }
  }
  getRoot(node = this.root) {
    let nowNode = node;
    return nowNode.data;
  }
}

const makeBST = () => {
  let a = new BST();
  a.insert(3);
  a.insert(1);
  a.insert(2);
  a.insert(4);
  a.insert(5);
  console.log("inOrder " + a.inOrder());
  //console.log("search " + a.search(3));
  //console.log("findMin " + a.findMin());
  //console.log("finfMax " + a.findMax());
  //console.log("getRoot " + a.getRoot());
};
makeBST();
