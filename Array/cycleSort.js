const findMinPositiveInteger = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        while (arr[i] > 0 && arr[i] <= n && arr[i] !== arr[arr[i] - 1] ) {
           let temp = arr[i];
           arr[i] = arr[temp - 1];
           arr[temp - 1] = temp;
        }
    }
   
    for (let i = 1; i <= n; i++) {
        if (arr[i-1] !== i) {
            return i
        }
    }

    return n + 1;
}

console.log(findMinPositiveInteger([1, 2, 3, 4, 5]))