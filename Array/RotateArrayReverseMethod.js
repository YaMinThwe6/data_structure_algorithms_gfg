// First separate into two pieces - by d;
// reverse each piece
// then reverse the whole array

let shiftArray = (arr, d) => {
    arr = arr.reverse();
    let n = arr.length;
    d = d%n;

    reverseArray(arr, 0, n-d-1);
    reverseArray(arr, n-d, n-1);
    
        
    function reverseArray(array, from, to) {
        while(from <= to) {
            let temp = array[from];
            array[from] = array[to];
            array[to] = temp;
            from++;
            to--;
        }
    }  
    return arr;  
    // let n = arr.length;
    // d = d % n;
    // reverseArray(arr, 0, d-1);
    // reverseArray(arr, d, n-1);
    // reverseArray(arr,0, n-1);
    // return arr;
    
}

function reverseArray(arr, start, end){
    while (start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

let arr = [1,2,3,4,5,6,7], d = 2;
let shiftedArray = shiftArray(arr, d);
console.log(shiftedArray)
