function getOneBits(n) {
    if (n === 0) {
        return 0;
    }
    
    let count = 0;
    
    while (n > 0) {
        n = n & (n - 1);
        count++;
    }
    
    return count;

}

console.log(getOneBits(0))