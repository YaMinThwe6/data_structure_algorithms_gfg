function nextPermutation(arr) {
    let n = arr.length;

    let pivot = -1;
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] < arr[i+1]) {
            pivot = i;
            break;
        }
    }

    if (pivot === -1) {
        return arr.reverse();
    }

    function reverseArray(array, from, to) {
        while (from <= to) {
            let temp = array[from];
            array[from] = array[to];
            array[to] = temp;
            from ++;
            to --;
        }
    }

    for (let i = n - 1; i >= pivot ; i--) {
        if (arr[pivot] < arr[i]) {
            let temp = arr[pivot];
            arr[pivot] = arr[i];
            arr[i] = temp;
            reverseArray(arr, pivot+1, n-1);
            break;
        }
    }





    return arr;
}

let array = [5,4,3,2,1];
console.log(array);

let next = nextPermutation(array);

console.log(next);