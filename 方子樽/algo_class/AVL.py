    class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


class AVL:
    def __init__(self):
        self.root = None

    def getHeight(self, node):
        if node == None:
            return -1
        lh = self.getHeight(node.left)
        rh = self.getHeight(node.right)
        return max(lh, rh) + 1

    def getBF(self, node):
        return self.getHeight(node.left) - self.getHeight(node.right)

    def insert(self, data):
        self.root = self.insertHelper(self.root, data)

    def insertHelper(self, node, data):
        curNode = node
        if curNode == None:
            return Node(data)

        if data < curNode.data:
            curNode.left = self.insertHelper(curNode.left, data)
        elif data > curNode.data:
            curNode.right = self.insertHelper(curNode.right, data)

        curNode = self.balance(curNode)
        return curNode

    def balance(self, node):
        if node == None:
            return node

        nodeBF = self.getBF(node)
        if nodeBF > 1:
            if self.getBF(node.left) < 0:
                node.left = self.rotateL(node.left)

            node = self.rotateR(node)
        elif nodeBF < -1:
            if self.getBF(node.right) > 0:
                node.right = self.rotateR(node.right)

            node = self.rotateL(node)

        return node

    def rotateR(self, node):
        temp = node.left
        node.left = temp.right
        temp.right = node
        return temp

    def rotateL(self, node):
        temp = node.right
        node.right = temp.left
        temp.left = node
        return temp



def main(data):
    ans = []
    avl = AVL()
    for i in range(0, len(data)):
        avl.insert(data[i])
    root = avl.getRootNode()
    print("Inorder traversal: " + str(avl.inOrder(root, ans)))


while True:
    try:
        testCase = input().splitlines()
        case = [int(n) for n in testCase[0].split(",")]
        main(case)
    except EOFError:
        break
