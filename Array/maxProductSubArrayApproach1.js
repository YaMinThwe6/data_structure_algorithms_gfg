const findMaxProduct = (arr) => {
    let res = arr[0];
    let currentMax = arr[0];
    let currentMin = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let temp = Math.max(arr[i], currentMax*arr[i], currentMin*arr[i]);

        currentMin = Math.min(arr[i], currentMax*arr[i], currentMin*arr[i]);

        currentMax = temp;

        res = Math.max(res, currentMax);
    }

    return res;
}

let array = [0, 0, 0];

console.log(findMaxProduct(array));