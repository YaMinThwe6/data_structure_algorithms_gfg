const findMaxSubArray = (arr) => {
    let n = arr.length;
    let res = arr[0];
    let maximumEnding = arr[0];

    for (let i = 1; i < n; i++) {
        maximumEnding = Math.max(maximumEnding + arr[i], arr[i]);
        res = Math.max(res, maximumEnding);
    }

    return res;
}

let array = [5, 4, 1, 7, 8];

let result = findMaxSubArray(array);

console.log(result);