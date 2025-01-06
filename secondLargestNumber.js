
// MA - my approach
function MA(arr) {
    try {
        let maximumValue = Math.max(...arr);
        let secondLargestNumber = -1;
        for (let element of arr) {
            if (element > secondLargestNumber && element < maximumValue) {
                secondLargestNumber = element;
            }
        }
        return secondLargestNumber;
    } catch (error) {
        console.log|(error);
        throw error;
    }
}

// GA - GFG approach
function GA(arr) {
    try {
        let maximumValue = -1, secondLargestNumber = -1;
        for (let element of arr) {
            if (element > maximumValue) {
                secondLargestNumber = maximumValue;
                maximumValue = element;
            }
            if(element < maximumValue && element > secondLargestNumber) {
                secondLargestNumber = element;
            }
        }
        return secondLargestNumber;
    } catch (error) {
        console.log|(error);
        throw error;
    }
}