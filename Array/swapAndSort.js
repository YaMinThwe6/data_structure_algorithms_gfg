
// swapAndSort was more time efficient than insertion sort
function mergeArrays(a, b) {
    let i = a.length - 1;
    let j = 0;
    
    while (j < b.length && i >= 0) {
        if (b[j] > a[i]) {
            i--;
        } else {
            [a[i],b[j]] = [b[j], a[i]];
            i--;
            j++;
        }
    }
    
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);

    return `${a} ${b}`
}

console.log(mergeArrays([1,3,5,15,20], [2,4,18]))