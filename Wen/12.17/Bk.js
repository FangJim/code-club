/**
 *
 *
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // methods
  print() {
    let tmp = [];
    let Ans;
    let thenode = this.head;
    while (thenode) {
      tmp.push(thenode.data);
      thenode = thenode.next;
    }
    Ans = tmp[0];
    for (let i = 1; i < tmp.length; i++) {
      Ans += tmp[i];
    }
    return Ans;
  }
  getNode(index) {
    let thenode = this.head;
    let count = 0;
    while (count < index) {
      count++;
      thenode = thenode.next;
    }
    return thenode;
  }
  append(data) {
    let newnode = new Node(data);
    if (this.length === 0) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
    ++this.length;
  }
  insert(index, data) {
    if (index >= this.length) {
      this.append(data);
      return;
    }
    let newnode = new Node(data);
    if (index === 0) {
      newnode.next = this.head;
      this.head = newnode;
    } else {
      let pre = this.getNode(index - 1);
      let post = pre.next;
      pre.next = newnode;
      newnode.next = post;
    }

    ++this.length;
  }
}

var BK = (s) => {
  let sl = s.length;
  let num = 0;
  let Ans = new LinkedList();
  for (let i = 0; i < sl; i++) {
    if (s[i] === "[") {
      num = 0;
    } else if (s[i] === "]") {
      num = Ans.length;
    } else {
      Ans.insert(num, s[i]);
      num++;
    }
  }
  console.log(Ans.print());
};
let s = "[[[[[[777]]8]]";
BK(s);
