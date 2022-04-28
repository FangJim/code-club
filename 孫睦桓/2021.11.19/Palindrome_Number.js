var isPalindrome = function(x) {
    if (x > 0) {
        const y = x.toString();
        var splitString = y.split('');
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join('');
        if (x == joinArray) {
            return true;
        }

    } else {
        return false;
    }


};
console.log(isPalindrome(121));