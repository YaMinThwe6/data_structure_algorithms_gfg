function mergeAndSortTheTwoSortedArrays(a, b) {
    let n = b.length;
    let m = a.length;
    for (let i = n-1; i >= 0; i--) {

        if (b[i] < a[m-1]) {
            let j = m - 2;
            let last = a[m - 1]
            while (j >=0 && a[j] > b[i]) {
                a[j+1] = a[j];
                j--;
            }
            a[j+1] = b[i];
            b[i] = last;
            
        }
    }

    return `${a} ${b}`
}

console.log(mergeAndSortTheTwoSortedArrays([1, 3, 5, 7], [0, 2, 6, 8, 9]))