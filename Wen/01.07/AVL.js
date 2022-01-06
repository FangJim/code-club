class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class AVL {
  constructor() {
    this.root = null;
  }
  getNodeHeight(node) {
    if (node == null) {
      console.log(0);
      return 0;
    }
    let leftLength = this.getNodeHeight(node.left);
    let rightLength = this.getNodeHeight(node.right);
    console.log(Math.max(leftLength, rightLength) + 1);
    return Math.max(leftLength, rightLength) + 1;
  }
  getBF(node) {
    console.log(this.getNodeHeight(node.left) - this.getNodeHeight(node.right));
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }
  rightRotation(node) {
    //LL
    let tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }
  leftRotation(node) {
    //RR
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }
  isBalance(node) {
    if (!node) {
      return node;
    } else {
      let valueBF = this.getBF(node);
      if (valueBF > 1) {
        if (this.getBF(node.left) < 0) {
          node.left = this.leftRotation(node.left);
        }
        node = this.rightRotation(node);
      } else if (valueBF < -1) {
        if (this.getBF(node.right) < 0) {
          node.right = this.leftRotation(node.right);
        }
        node = this.rightRotation(node);
      }
    }
    return node;
  }
  insert(data) {
    const insertCkeck = (node) => {
      let newNode = node;
      if (!newNode) {
        return new AVL(data);
      }
      if (data > newNode.data) {
        return insertCkeck(newNode.right);
      } else if (data < newNode.data) {
        return insertCkeck(newNode.left);
      }
      newNode = this.isBalance(newNode);
      return newNode;
    };
    this.root = insertCkeck(this.root);
  }
  remove(data) {
    const removeCheck = (data, node) => {
      let newNode = node;
      if (!newNode) {
        return false;
      }
      if (data > newNode.data) {
        return removeCheck(newNode.right);
      } else if (data < newNode.data) {
        return removeCheck(newNode.left);
      } else {
        if (!newNode.left && !newNode.right) {
          return null;
        } else if (!newNode.left) {
          return newNode.right;
        } else if (!newNode.right) {
          return newNode.left;
        }
        //delete root
        let rightMin = this.findMin(newNode.right);
        newNode.data = rightMin.data;
        newNode.right = removeCheck(rightMin.data, newNode);
      }
      newNode = this.isBalance(newNode);
      return newNode;
    };
    this.root = removeCheck(data, this.root);
  }
  findMin(node = this.root) {
    let nowNode = node;
    if (nowNode.left) {
      this.findMin(nowNode.left);
    } else {
      return nowNode;
    }
  }
  findMax(node = this.root) {
    let nowNode = node;
    if (nowNode.right) {
      this.findMax(nowNode.right);
    } else {
      return nowNode;
    }
  }
}
