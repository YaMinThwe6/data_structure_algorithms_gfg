function findAlternateSorting(arr) {
    let n = arr.length;
    let array = [];
    arr = arr.sort((a,b) => a-b);
    let limit = Math.floor(n/2);

    for (let i = 0; i < limit; i ++) {
        array.push(arr[n-i-1]);
        array.push(arr[i]);
    }

    if (n%2 !== 0) {
        array.push(arr[limit])
    }

    return array;
}

console.log(findAlternateSorting([1, 6, 9, 4, 3, 7, 8, 2]))