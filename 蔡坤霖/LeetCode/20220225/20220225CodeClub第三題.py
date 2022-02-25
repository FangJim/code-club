def fibbonacci(number):
    pre=0
    now=1
    if number == 0 or number == 1:
        return number
    for i in range(2,number+1):
        now+=pre
        pre=now-pre
    return now
def main():
    while True:
        ans=input('please enter a number: ')
        if ans =='q':
            break
        print('turning to fibbonacci number:', fibbonacci(int(ans)))
main()