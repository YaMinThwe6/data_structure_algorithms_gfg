function stocksOneTransactionMajorityProfits(arr) {
    let min = arr[0];
    let n = arr.length;
    let res = 0, diff = 0;
    for (let i = 1; i < n; i++) {
        if (arr[i] > min) {
            diff = arr[i] - min;
            if (diff > res) {
                res = diff;
            }
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return res;
}

let array = [13, 7,10,1,1,3,4,11,12, 1];

// let array = [5,4,3,2,1];

let result = stocksOneTransactionMajorityProfits(array);

console.log(result);