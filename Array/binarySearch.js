// find lower bound

function findLowerBound(arr, target) {
    let n = arr.length;
    let res = arr.length;
    let lo = 0, hi = n;

    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (arr[mid] >= target) {
            res = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    return res;
}

function findUpperBound(arr, target) {
    let res = arr.length;
    let n = arr.length;
    let lo = 0, hi = n;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi -lo) / 2);
        if (arr[mid] > target) {
            res = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
     
    return res
}

const findCountOfTarget = (arr, target) => {
    return findUpperBound(arr, target) - findLowerBound(arr, target)
}

console.log(findCountOfTarget([1,2,2,2,2,3], 3));