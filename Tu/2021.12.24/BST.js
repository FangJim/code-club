// Node class
class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;	//左節點 數據初始化數據設定為null
        this.right = null;	//右節點
    }
}
// Binary Search tree class
class BinarySearchTree
{
    constructor()
    {
        // 根節點root
        this.root = null;
    }

	insert(data){
		let newNode = new Node(data);//創建節點
		if(root==null){
			this.root = newNode;//如果是空值就插入這個位置
		}else{
			this.insertNode(this.root, newNode);
		}
	}
	insertNode(currentNode, newNode){
		//插入左子樹
		if(newNode.data<currentNode.data){
			if(currentNode.left == null){
				currentNode.left = newNode;
			}else{
				this.insertNode(node.left, newNode);
			}
		}
		//插入右子樹
		else{
			if(currentNode.right == null){
				currentNode.right = newNode;
			}else{
				this.insertNode(node.right, newNode);
			}
		}
	}
	getRoot(){	//return root (for some method below)
		return this.root;
	} 
	findMin(node){	// return minimum
		if(node.left==null){
			return node;
		}else{
			return this.findMin(node.left);
		}
	} 
	findMax(node){	// return Maximum
		if(node.right==null){
			return node;
		}else{
			return this.findMax(node.right);
		}
	} 
	inOrder(root){	// return inOrder result中序

	} 
	search(node, data){	//return 'Found it' or 'Not found'
		if(node==null){return 'Not found';}
		else if(data<node.data){return this.search(node.left, data);}
		else if(data>node.data){return this.search(node.right, data);}
		else{return 'Found it';}
	} 
}



/*(question)
Implement a BST(using linked list), 
input an unsorted array using BST to output the sorted array the BST object needs these methods:
	[1] insert(data)
	[2] getRoot() //return root (for some method below)
	[3] findMin() // return minimum
	[4] findMax() // return Maximum
	[5] inOrder(root) // return inOrder result
	[6] search(root,data) //return 'Found it' or 'Not found'

Input:
	[3, 78, 23, 5, 768, 234, 122, 456, 33, 234, 6745, 7, 15, 9, 0]

Output:
	Before sorting : 3,78,23,5,768,234,122,456,33,234,6745,7,15,9,0
	After sorting : 0,3,5,7,9,15,23,33,78,122,234,234,456,768,6745
	MAX is : 6745
	min is : 0
	Search for 122 : Found it
	Search for 3343 : Not found
*/