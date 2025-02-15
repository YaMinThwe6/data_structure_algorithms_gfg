function maximumProfit(arr) {
    let n = arr.length;
        let result = 0, min = 0, max = 0, isMinSet = false, isResultAdded;
        for (let i = 1; i < n; i++) {
            console.log(max, min, result)
            if (arr[i-1] < arr[i]) {
                if (!isMinSet) {
                    min = arr[i-1];
                    isMinSet = true;
                    isResultAdded = false;
                }
                max = arr[i];
            }
            if (arr[i-1] > arr[i] && isMinSet) {
                isMinSet = false;
                result += max - min;
                isResultAdded = true;
            }
        }
        if (!isResultAdded)
        result += max - min;
        return result;
}

let array = [57, 94, 87, 60, 89, 82, 35, 90, 86, 24, 77, 38, 24, 23, 72, 59];

const result = maximumProfit(array);

console.log(result);