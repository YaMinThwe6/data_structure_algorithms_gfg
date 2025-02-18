// JavaScript program to minimize the maximum difference
// between heights using Sorting

function getMinDiff(arr, k) {
    let n = arr.length;
    arr.sort((a, b) => a - b);

    // If we increase all heights by k or decrease all
    // heights by k, the result will be arr[n - 1] - arr[0]
    let res = arr[n - 1] - arr[0];
    console.log(res);

    // For all indices i, increment arr[0...i-1] by k and
    // decrement arr[i...n-1] by k
    for (let i = 1; i < n; i++) {
        // Impossible to decrement height of ith tower by k, 
        // continue to the next tower
        if (arr[i] - k < 0)
            continue;

        // Minimum height after modification
        let minH = Math.min(arr[0] + k, arr[i] - k);

        // Maximum height after modification
        let maxH = Math.max(arr[i - 1] + k, arr[n - 1] - k);

        console.log(minH, maxH)

        // Store the minimum difference as result
        res = Math.min(res, maxH - minH);
    }
    return res;
}

const k = 1;
const arr = [ 2, 4];

const ans = getMinDiff(arr, k);
console.log(ans);