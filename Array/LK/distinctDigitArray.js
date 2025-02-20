function findDistinctDigits(arr) {
    let seen = new Set();
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        while(arr[i] > 0) {
            seen.add(arr[i] % 10);
            arr[i] = Math.floor(arr[i] / 10);
        }
    }

    return [...seen]
}

console.log(findDistinctDigits([131, 11, 48]))