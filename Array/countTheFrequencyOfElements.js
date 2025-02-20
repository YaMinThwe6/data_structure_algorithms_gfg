function findTheCountOfFrequency(arr) {
    let n  = arr.length;
    let i = 0;

    while (i < n) {
        if (arr[i] <= 0) {
            i++;
            continue;
        }
        let elementIndex = arr[i] - 1;

        if (arr[elementIndex] > 0) {
            arr[i] = arr[elementIndex];
            arr[elementIndex] = -1;
        } else {
            arr[elementIndex]--;

            arr[i] = 0;
            i++;
        }
    }

    for (let j = 0; j < n; j++) {
        arr[j] = Math.abs(arr[j])
    }

    console.log(arr)
}

findTheCountOfFrequency([2, 3, 2, 3, 5])