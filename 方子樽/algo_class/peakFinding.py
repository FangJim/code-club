def peakFinding(arr):
    begin = 0
    last = len(arr) - 1
    if last < 0:  # empty
        return -1
    while (begin + 1) < last:
        mid = int((begin + last) / 2)
        if arr[mid] < arr[mid - 1]:  # left
            last = mid
        elif arr[mid] < arr[mid + 1]:  # right
            begin = mid
        else:
            return "Find it! The peak element is " + str(arr[mid])

    # next door
    if arr[begin] > arr[last]:
        return "Find it! The peak element is " + str(arr[begin])
    else:
        return "Find it! The peak element is " + str(arr[last])


while True:
    try:
        testCase = input().splitlines()
        for i in testCase:
            array = [int(n) for n in i.split(",")]
            print(peakFinding(array))
    except EOFError:
        break
