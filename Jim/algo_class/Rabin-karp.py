def search(txt, pat, prime, random):
    M = len(pat)
    N = len(txt)
    p = 0
    t = 0
    h = 1
    prime = int(prime)
    random = int(random)

    # The value of h would be "pow(random, M-1)% prime"
    for i in range(M - 1):
        h = (h * random) % prime

    # Calculate the hash value of pattern and first window
    # of text
    for i in range(M):
        p = (random * p + ord(pat[i])) % prime
        t = (random * t + ord(txt[i])) % prime

    # Slide the pattern over text one by one
    for i in range(N - M + 1):
        # Check the hash values of current window of text and
        # pattern if the hash values match then only check
        # for characters on by one
        if p == t:
            # Check for characters one by one
            for j in range(M):
                if txt[i + j] != pat[j]:
                    break

            j += 1
            # if p == t and pat[0...M-1] = txt[i, i + 1, ...i + M-1]
            if j == M:
                print("Pattern found at index " + str(i))

        # Calculate hash value for next window of text: Remove
        # leading digit, add trailing digit
        if i < N - M:
            t = (random * (t - ord(txt[i]) * h) + ord(txt[i + M])) % prime

            # We might get negative values of t, converting it to
            # positive
            if t < 0:
                t = t + prime


while True:
    try:
        testCase = input().splitlines()
        case = [str(n) for n in testCase[0].split(",")]
        txt = case[0]
        pattern = case[1]
        prime = case[2]
        random = case[3]
        search(txt, pattern, prime, random)
        print("Done")
    except EOFError:
        break
