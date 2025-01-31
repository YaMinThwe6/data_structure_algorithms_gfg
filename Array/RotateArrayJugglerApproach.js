// Juggler approach for shifting the elements of the array d times 
// Separate the array into sets of gcd of d and length of array.
// Shuffle the elements of the pieces one by one.

function findGcd(a, b) {
    return b === 0 ? a : findGcd (b, a % b);
}

let shiftArrays = (arr, d) => {
    let n = arr.length;
    d = d % n;
    let cycles = findGcd(d, n);
    for (let i = 0; i < cycles; i++) {
        let firstElement = arr[i], currentElement = i, nextElement;
        while (true) {
            nextElement = (currentElement + d) % n;
            if (nextElement === 0) {
                break;
            }

            arr[currentElement] = arr[nextElement];
            currentElement = nextElement;
        }
        arr[currentElement] = firstElement;
    }
    console.log(arr);
}

shiftArray([1,2,3,5,6,4,6], 2);
