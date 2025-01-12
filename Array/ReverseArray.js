// My way of reversing an array. Recommended for javascript.
function reverseArray (arr) {
    return arr.reverse();
}

// For other languages, we can use the below approach.
function reverseArrayWithoutReverse(arr) {
    let length = arr.length;
    for (let i= 0; i < length / 2; i++) {
        [arr[i], arr[length - i - 1]] = [arr[length - i - 1], arr[i]];
    }
    return arr;
}

let array1 = [1, 2, 3, 4, 5, 6];
console.time("reverseArray");
reverseArray(array1);
console.timeEnd("reverseArray");
console.log(array1); // [6, 5, 4, 3, 2, 1]
console.time("reverseArrayWithoutReverse");
reverseArrayWithoutReverse(array1);
console.timeEnd("reverseArrayWithoutReverse");
console.log(array1); // [1, 2, 3, 4, 5, 6]