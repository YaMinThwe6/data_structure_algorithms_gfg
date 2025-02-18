const findMaxProduct = (arr) => {
    let leftToRightProduct = 1, rightToLeftProduct = 1, res = arr[0];
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (rightToLeftProduct === 0) {
            rightToLeftProduct = 1;
        }

        if (leftToRightProduct === 0) {
            leftToRightProduct = 1;
        }
        leftToRightProduct = arr[i] * leftToRightProduct;
        rightToLeftProduct = arr[n-i-1] * rightToLeftProduct;
        res = Math.max(res, leftToRightProduct, rightToLeftProduct);
    }

    return res;
}

const array = [0, 0];

console.log({
    result: findMaxProduct(array)
})