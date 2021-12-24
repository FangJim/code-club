import collections


def minKnightMoves(beginX, beginY, endX, endY):
    directions = {
        (2, 1),
        (2, -1),
        (-2, 1),
        (-2, -1),
        (1, 2),
        (1, -2),
        (-1, 2),
        (-1, -2),
    }
    queue = collections.deque([(beginX, beginY)])
    seen = set()
    seen.add((beginX, beginY))

    steps = 0

    while queue:
        for _ in range(len(queue)):
            currentX, currentY = queue.popleft()

            if currentX == endX and currentY == endY:
                print(
                    "To get from Point( "
                    + str(beginX)
                    + " , "
                    + str(beginY)
                    + " ) to Point( "
                    + str(endX)
                    + " , "
                    + str(endY)
                    + " ) takes "
                    + str(steps)
                    + " knight moves."
                )
                return

            for d in directions:
                newX = currentX + d[0]
                newY = currentY + d[1]
                if (
                    (newX, newY) not in seen
                    and -2 <= newX <= endX + 2
                    and -2 <= newY <= endY + 2
                ):
                    queue.append((newX, newY))
                    seen.add((newX, newY))
        steps += 1


while True:
    try:
        testCase = input().splitlines()
        case = [n for n in testCase[0].split(",")]
        beginX = int(case[0])
        beginY = int(case[1])
        endX = int(case[2])
        endY = int(case[3])
        minKnightMoves(beginX, beginY, endX, endY)
    except EOFError:
        break
