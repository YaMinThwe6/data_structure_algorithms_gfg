const findTheIndicesOfThreeEqualSum = (arr) => {
    let result = [];
    let n = arr.length;
    let totalSum = 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        totalSum += arr[i];
    }

    if (totalSum % 3 !== 0) {
        return [-1, -1];
    }

    for (let i = 0; i < n; i++) {
        if (result.length === 2) {
            break;
        }
        sum += arr[i];
        if (sum === totalSum/3) {
            result.push(i);
            sum = 0;
        } else if (sum > totalSum/3) {
            return [-1, -1]
        }
    }

    return result;
}

console.log(findTheIndicesOfThreeEqualSum([1, 3, 3, 0, 5]));