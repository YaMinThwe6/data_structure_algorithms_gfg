
// MA - my approach
// This is bad because we can achieve in one transverse. while we have two.
function MA(arr) {
    try {
        let count = arr.length;
        arr.map((element, i) => {
            if (element === 0) {
                arr.splice(i, 1);
            }
        })
        if (count !== count - arr.length) {
            count = count - arr.length;
            while (count > 0) {
                arr.push(0);
                count --;
            }
        }
        
        console.log(arr, count);
        return false;
    } catch (error) {
        console.log|(error);
        throw error;
    }
}



// GA - GFG approach
function GA(arr) {
    try {
        let swapValue = 0;
        arr.map((element, i) => {
            if (arr[i] !== 0) {
                let temp = arr[i];
                arr[i] = arr[swapValue];
                arr[swapValue] = temp;
                swapValue ++;
            }
        })
        console.log(arr)
        return arr;
    } catch (error) {
        console.log|(error);
        throw error;
    }
}

GA([1, 0, 4, 5, 6, 0, 2, 4]);