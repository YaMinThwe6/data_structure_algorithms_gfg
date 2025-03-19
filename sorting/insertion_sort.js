function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // Element to be placed at the right position
        let j = i - 1;

        // Move elements that are greater than key one step ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key; // Insert key at the right position
    }
    return arr;
}

// Example usage:
let arr = [5, 2, 9, 1, 5, 6];
console.log(insertionSort(arr)); // Output: [1, 2, 5, 5, 6, 9]
