// Juggler approach for shifting the elements of the array d times 
// Separate the array into sets of gcd of d and length of array.
// Shuffle the elements of the pieces one by one.

let shiftTheValue = (arr, d) => {
    let n = arr.length;

    d = d % n;
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    let gcdValue = gcd(n, d);

    let i = 0;
    
    while (i < gcdValue) {
        let firstElement = arr[i];

        let currentElement = i, nextElement; 

        while (true) {
            nextElement = (currentElement + d) % n;
            
            if (nextElement === i) {
                break;
            }

            arr[currentElement] = arr[nextElement];
            currentElement = nextElement;
        }

        arr[currentElement] = firstElement;

        i++;
    }

    return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7], d = 3;

let shiftedArray = shiftTheValue(arr, d);

console.log(shiftedArray);
