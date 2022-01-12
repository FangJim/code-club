test = [
    ["%", "%", "%", "%", "%", "%", "%", "%", "%", "%"],
    ["%", "S", "%", "T", " ", " ", " ", " ", " ", "%"],
    ["%", " ", "%", "%", "%", "%", "%", " ", "%", "%"],
    ["%", " ", " ", " ", " ", " ", " ", " ", " ", "%"],
    ["%", "%", "%", "%", "%", "%", "%", "%", "%", "%"],
]


def DFS_visit(location):
    x = location % width
    y = location // width
    # find it
    if Maze[y][x] == "T":
        return True
    for i in direction:
        nextX = x + i[0]
        nextY = y + i[1]
        # 邊界
        if nextX >= 0 and nextX < width and nextY >= 0 and nextY < height:
            # has path(Cannot be repeated)
            if Maze[nextY][nextX] != "%" and nextY * width + nextX not in set:
                set.append(nextY * width + nextX)
                # keep going
                if DFS_visit(nextY * width + nextX):
                    return True


def ans():
    for i in range(0, len(set) - 1):
        print(set[i], end=" ")
    print(set[len(set) - 1], end="")


Maze = test
set = []
direction = [[-1, 0], [0, -1], [0, 1], [1, 0]]
height = len(Maze)
width = len(Maze[0])
# find S then DFS
for i in range(0, height):
    for j in range(0, width):
        if Maze[i][j] == "S":
            set.append(i * width + j)
            DFS_visit(i * width + j)
            ans()  # print
