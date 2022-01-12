# 5,20,30,50,55,70,3,33,23,59,25,65,15
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


class AirportRunway:
    def __init__(self):
        self.root = None

    def insert(self, data):
        newNode = Node(data)
        if self.root == None:
            self.root = newNode
        else:
            self.insertNode(self.root, newNode)

    def insertNode(self, node, newNode):
        if newNode.data < node.data:
            if node.left == None:
                node.left = newNode
            else:
                self.insertNode(node.left, newNode)

        else:
            if node.right == None:
                node.right = newNode
            else:
                self.insertNode(node.right, newNode)

    def insert_k(self, data, k, min):
        current = self.root
        top = data + k
        while True:
            if data > current.data:
                if current.data > min:
                    min = current.data
                if current.right == None:
                    if data - min >= k and top - data >= k:
                        print("Request at time " + str(data) + " is allowed")
                    else:
                        print("Request at time " + str(data) + " is not allowed")
                    break
                else:
                    current = current.right
            else:
                if current.data < top:
                    top = current.data
                if current.left == None:
                    if data - min >= k and top - data >= k:
                        print("Request at time " + str(data) + " is allowed")
                    else:
                        print("Request at time " + str(data) + " is not allowed")
                    break
                else:
                    current = current.left

def main(data):
    num = data[0] + 1
    k = data[num]
    min = data[1]
    airportRunway = AirportRunway()
    for i in range(1, num):
        airportRunway.insert(data[i])
    for j in range(num + 1, len(data)):
        airportRunway.insert_k(data[j], k, min)


while True:
    try:
        testCase = input().splitlines()
        case = [int(n) for n in testCase[0].split(",")]
        main(case)
    except EOFError:
        break
