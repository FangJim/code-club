class Element {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }
    enqueue(element, priority) {
        let pElement = new Element(element, priority);
        let isInsert = false;

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > pElement.priority) {
                this.items.splice(i, 0, pElement);
                isInsert = true;
                break;
            }
        }

        if (!isInsert) {
            this.items.push(pElement);
        }
    }
    dequeue() {
        return (this.isEmpty()) ? "Empty" : this.items.shift();
    }
    front() {
        return (this.isEmpty()) ? "Empty" : this.items[0];
    }
    rear() {
        return (this.isEmpty()) ? "Empty" : this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    printPQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i].element + " ";
        return str;
    }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('jim', 100)
priorityQueue.enqueue('emma', 10)
priorityQueue.enqueue('lidia', 50)
priorityQueue.enqueue('julia', 60)
priorityQueue.enqueue('tom', 40)
priorityQueue.enqueue('oli', 90)

console.log(priorityQueue.printPQueue());