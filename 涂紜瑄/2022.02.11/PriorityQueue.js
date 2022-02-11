// 優先佇列 https://www.geeksforgeeks.org/implementation-priority-queue-javascript/

// User defined class
// to store element and its priority
class QElement {
	constructor(element, priority)
	{
		this.element = element;
		this.priority = priority;
	}
}

// PriorityQueue class
class PriorityQueue {

	// An array is used to implement priority
	constructor()
	{
		this.items = [];
	}

	// functions to be implemented
	enqueue(item, priority) //根據優先級將元素添加到Queue中
    {

    }
	dequeue() //從Priority Queue中移除一個元素
    {

    }
	front() //返回Priority Queue的最前面的元素
    {

    }
    rear() //返回Priority Queue的最後一個元素
    {

    }
	isEmpty() //如果Priority Queue為空，則返回 true
    {

    }
	printPQueue() //按照從最高到最低的優先級打印Queue的元素
    {
        
    }
}
