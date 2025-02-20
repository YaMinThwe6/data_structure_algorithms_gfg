function isSubString(a,b) {
    let i = 0, j = 0, lenOfa = a.length, lenOfb = b.length;
    if (lenOfa > lenOfb)
        return false;
    while (i < lenOfa && j < lenOfb) {
        if (a[i] === b[j]) {
            i++;
        }
        j++;
    }
    
    return i === lenOfa;
}

console.log(isSubString('AXY', 'DGAGBXGDJY'));