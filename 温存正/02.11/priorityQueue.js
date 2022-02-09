class creatElement {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(data, priority) {
    let newElement = new creatElement(data, priority);
    let isInsert = false;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > newElement.priority) {
        this.items.splice(i, 0, newElement);
        isInsert = true;
        break;
      }
    }
    if (!isInsert) {
      this.items.push(newElement);
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return false;
    }
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) {
      return false;
    }
    return this.items[0];
  }
  rear() {
    if (this.isEmpty()) {
      return false;
    }
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    if (this.items.length === 0) {
      return true;
    }
    return false;
  }
  printPQueue() {
    let ans = [];
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i].data);
      ans.push(this.items[i].data);
    }
    return ans;
  }
}
let obj = new PriorityQueue();
console.log(obj.isEmpty());
obj.enqueue(2, 2);
obj.enqueue(1, 5);
obj.enqueue(10, 1);
obj.enqueue(7, 6);
console.log(obj.printPQueue());
console.log(obj.isEmpty());
console.log(obj.front().data);
