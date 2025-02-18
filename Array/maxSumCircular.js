const maxSumSubArrayCircular = (arr) => {
    let normalMaxSum = arr[0], maxSum = arr[0], normalMinSum = arr[0], minSum = arr[0], totalSum = arr[0];
    
    for (let i = 1; i < arr.length; i++) {

        //To find normal Max Sum
        maxSum = Math.max(maxSum + arr[i] , arr[i]);
        normalMaxSum = Math.max(maxSum, normalMaxSum);

        //To find normal min sum
        minSum = Math.min(minSum + arr[i], arr[i]);
        normalMinSum = Math.min(normalMinSum, minSum);

        //To find the total sum
        totalSum = totalSum + arr[i];
    }

    if (totalSum === normalMinSum) 
        return normalMaxSum;

    return Math.max(normalMaxSum, totalSum - normalMinSum)
}

const array = [8, -8, 9, -9, 10, 12, -11];

console.log(maxSumSubArrayCircular(array));