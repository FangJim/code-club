class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    //找到我要插入位置的上一個點
    findInsertNext(insert_index) {
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentIndex < insert_index) {
            currentIndex += 1;
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    insert(index, data) {
        const newNode = new Node(data);
        //for first one
        if (index <= 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            const prev_Node = this.findInsertNext(index - 1);
            const next_Node = prev_Node.next;
            prev_Node.next = newNode;
            newNode.next = next_Node;
        }

        this.length++;
    }

    front() {
        //直接return 0會變false
        return 1 - 1;
    }

    tail() {
        return this.length;
    }

    show() {
        let current = this.head;
        let string = "";
        while (current) {
            string += current.item;
            current = current.next;
        }
        return string;
    }
}

function brokenKeyboard(arr) {
    let length = arr.length;
    let link = new LinkedList();
    let insertLocation = 0;
    for (let i = 0; i < length; i++) {
        switch (arr[i]) {
            case '['://goto front
                insertLocation = link.front();
                break;
            case ']'://goto tail
                insertLocation = link.tail();
                break;
            default:
                link.insert(insertLocation, arr[i]);
                insertLocation++;
                break;
        }
    }
    console.log(link.show())
}