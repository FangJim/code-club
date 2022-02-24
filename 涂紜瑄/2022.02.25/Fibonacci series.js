/**
 * 費氏數列：1、1、2、3、5、8、13、21、34、55、89、144、233、377、610、987...
 *         [1、2、3、4、5、6、 7、 8、 9、10、11、 12、 13、 14、 15、 16]
 * F{0}=0
 * F{1}=1
 * F{n}=F{n-1}+F{n-2}（n≧2）前兩數和
 * @param {*} n 
 */
var Fibonacci = function(n){
    let arr=[0,1];
    for(let i=2; i<=n; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
}

console.log(Fibonacci(2));
console.log(Fibonacci(10));
console.log(Fibonacci(13));