def Fib(num):
    fib = [None] * 2
    ans = 1
    for i in range(1, num + 1):
        if i <= 2:
            fib[i - 1] = 1
        else:
            if i % 2 == 1:
                fib[1] = fib[0] + fib[1]
                ans = fib[1]
            else:
                fib[0] = fib[0] + fib[1]
                ans = fib[0]
    print(ans)


while True:
    try:
        case = input()
        Fib(int(case))
    except EOFError:
        break
