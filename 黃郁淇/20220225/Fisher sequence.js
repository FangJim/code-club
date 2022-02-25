function fib(n){
    let ans=0
    if(n<2)
        return n
    else{
        return fib(n-1)+fib(n-2)
    }
}
console.log(fib(10))