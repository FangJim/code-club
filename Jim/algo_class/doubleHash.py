def h1(k):
    return k % 13


def h2(k, m):
    return 1 + (k // m) % (m - 1)


def doubleHash(data):
    hashTable = [None] * 13
    for position in range(len(data)):
        num = int(data[position])
        key = h1(num)
        i = 0
        if hashTable[key] == None:
            hashTable[key] = data[position]
        else:
            wrongPosition = key
            while hashTable[key] != None:
                i += 1
                new_key = (h1(num) + i * h2(num, 13)) % 13
                key = new_key
                if hashTable[key] == None:
                    hashTable[key] = data[position]
                    print(
                        "Collision has occurred for element "
                        + str(num)
                        + " at position "
                        + str(wrongPosition)
                        + " finding new Position at position "
                        + str(new_key)
                    )
                    break


while True:
    try:
        testCase = input().splitlines()
        case = [n for n in testCase[0].split(",")]
        doubleHash(case)
        print("Done")
    except EOFError:
        break
