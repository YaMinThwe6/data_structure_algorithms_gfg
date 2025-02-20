function findMaxOnesSubArray (arr, k) {
    let res = 0, start = 0, end = 0, count = 0;

    while (end < arr.length) {
        if(arr[end] === 0) {
            count++;
        }

        if (count > k) {
            if (arr[start] === 0) {
                count--;
            }
            start++;
        }


        res = Math.max(res, (end - start + 1))

        end++;
    }

    return res;
}

console.log(findMaxOnesSubArray([1,0,0,1,0,1,0,1], 2));