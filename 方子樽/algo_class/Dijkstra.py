class Graph:
    def __init__(self, vertex):
        self.V = vertex
        self.graph = []

    def minDistance(self, dist, spanningTreeSet):
        inf = float("Inf")
        min = inf

        # to other node's min distance
        for v in range(self.V):
            if dist[v] < min and spanningTreeSet[v] == False:
                min = dist[v]
                min_index = v

        return min_index

    def dijkstra(self, begin, end):
        inf = float("Inf")
        dist = [inf] * self.V
        dist[begin] = 0
        # Haven't gone through this path
        spanningTreeSet = [False] * self.V

        for i in range(self.V):

            u = self.minDistance(dist, spanningTreeSet)

            # already passed this path
            spanningTreeSet[u] = True

            # relax
            for v in range(self.V):
                if (
                    self.graph[u][v] > 0
                    and spanningTreeSet[v] == False
                    and dist[v] > dist[u] + self.graph[u][v]
                ):
                    dist[v] = dist[u] + self.graph[u][v]

        self.printSol(dist, begin, end)

    def printSol(self, dist, begin, end):
        for node in range(self.V):
            if node == end:
                ans = (
                    "The shortest distance from "
                    + turnBack(begin)
                    + " to "
                    + turnBack(end)
                    + " is "
                    + str(dist[node])
                )

        print(ans)


def createMatrix(weightArr, vertexNum):
    matrix = []
    # init matrix
    for i in range(0, vertexNum):
        row = []
        for j in range(0, vertexNum):
            if i == j:
                row.append(0)  # 0 = myself
            else:
                row.append(-1)  # -1 = no path
        matrix.append(row)

    # insert data in matrix
    for i in range(0, len(weightArr), 3):
        begin = turn(weightArr[i])
        end = turn(weightArr[i + 1])
        path_weight = weightArr[i + 2]
        matrix[begin][end] = int(path_weight)

    return matrix


def buildDic(s):
    i = 0
    for item in s:
        vertexDic[item] = i
        i += 1


# turn english to value
def turn(var):
    return vertexDic.get(var)


# turn value back to english
def turnBack(var):
    return list(vertexDic.keys())[list(vertexDic.values()).index(var)]


while True:
    try:
        s = set()
        vertexDic = {}

        case = input().split(",")
        caseLen = len(case)
        weightArr = []

        # how many vertex in case
        for i in range(0, caseLen - 2, 3):
            s.add(case[i])
            s.add(case[i + 1])

        buildDic(s)
        vertexNum = len(s)

        # handle data
        for i in range(0, caseLen - 2):
            weightArr.append(case[i])
        begin = case[caseLen - 2]
        end = case[caseLen - 1]

        # create matrix
        matrix = createMatrix(weightArr, vertexNum)

        # build graph
        g = Graph(vertexNum)
        g.graph = matrix

        # dijkstra
        g.dijkstra(turn(begin), turn(end))

    except EOFError:
        break
