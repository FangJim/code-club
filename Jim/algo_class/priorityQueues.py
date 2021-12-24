def max_heap(arr):
    lastFather = int((len(arr)) / 2 - 1)
    if len(arr) == 1:
        return "The array representation of the heap is [" + str(arr[0]) + "]"
    # check last parent node to root.
    for index in range(lastFather, -1, -1):
        max_heapUpdate(arr, index)

    return "The array representation of the heap is [" + " ".join(map(str, arr)) + "]"


def max_heapUpdate(arr, index):
    if index > int((len(arr)) / 2 - 1):  # index is the leaf end of recursive1
        return
    elif (
        index == int(len(arr) / 2) - 1
        and len(arr) % 2 == 0  # last father only have left child
    ):
        if arr[index * 2 + 1] > arr[index]:  # LChild>father
            swap(arr, index * 2 + 1, index)

    elif (
        arr[index] < arr[index * 2 + 1] or arr[index] < arr[index * 2 + 2]  # check MHP
    ):
        if arr[index * 2 + 1] > arr[index * 2 + 2]:  # LChild>RChild
            swap(arr, index * 2 + 1, index)
            max_heapUpdate(arr, index * 2 + 1)

        elif arr[index * 2 + 2] > arr[index * 2 + 1]:  # RChild>LChild
            swap(arr, index * 2 + 2, index)
            max_heapUpdate(arr, index * 2 + 2)


def swap(arr, a, b):
    temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp


while True:
    try:
        testCase = input().splitlines()
        for i in testCase:
            array = [int(n) for n in i.split(",")]
            print(max_heap(array))

    except EOFError:
        break
