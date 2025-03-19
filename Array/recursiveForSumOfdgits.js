function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum+= number % 10;
        number = Math.floor(number / 10);
        console.log(sum, number)
    }

    if (sum <= 9 && sum > 0) {
        console.log(sum)
        return sum;
    }
    console.log(sum);
    sumOfDigits(sum);
}

console.log(sumOfDigits(1234));

function trimLeadingZeros(s) {
    
    // Find the position of the first '1'
    let firstOne = s.indexOf('1');
    return (firstOne === -1) ? "0" : s.substring(firstOne);
}