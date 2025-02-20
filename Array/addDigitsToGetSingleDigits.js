// Brute-force
const addDigitsToGetSingleDigit = (num) => {
    let res = 0;
    let resultInSingleDigit = false;

    while(!resultInSingleDigit) {
        if (res !== 0) {
            num = res;
            res = 0;
        }
        while(num > 0) {
            res += num % 10;
            num = (Math.floor(num/10))
        }
        if (res > 0 && res < 10) 
            resultInSingleDigit = true;
    }

    return res;
}

console.log(addDigitsToGetSingleDigit(9))

// Using Mathematical formula
// abcd = a*10^3 + b*10^2 + c*10^1 + d*10^0
// abcd = a + b + c + d + (a*999 + b*99 + c*9)
// abcd = a + b + c + d + 9*(a*111 + b*11 + c)
// abcd % 9 = (a + b + c + d) % 9 + 0

// Therefore the sum of the digits of any number, will equal its modulo 9. If the result of the modulo operation is zero, it indicates that the single-digit result is 9.

const findSignDigitNumberUsingMathematicalFormula = (num) => {
    if (num === 0) {
        return 0;
    }

    if (num % 9 === 0) {
        return 9;
    }

    return num % 9; 
}

console.log(findSignDigitNumberUsingMathematicalFormula(123456))

