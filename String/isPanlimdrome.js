function isPalindrome(s) {
    let i = 0, j = s.length - 1;
    
    while (i !== j || i > j) {
        console.log(s[i], s[j])
        if (s[i] !== s[j])
            return false;
        i++;
        j--;
    }
    
    return true;
}

console.log(isPalindrome('wbklpwm'));