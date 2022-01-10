# test case
# A,B,10,A,C,3,B,C,1,B,D,2,C,B,4,C,D,8,C,E,2,D,E,7,E,D,9,A,E
# A,B,10,A,C,3,B,C,1,B,D,2,C,B,4,C,D,8,C,E,2,D,E,7,E,D,9,A,C
# output
# The shortest distance from A to E is 5
# The shortest distance from A to C is 3
while True:
    try:
        testCase = input().splitlines()
        case = [int(n) for n in testCase[0].split(",")]

    except EOFError:
        break
