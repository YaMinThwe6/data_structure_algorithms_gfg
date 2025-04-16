// Reverse and transpose approach
let rotateMatrix = (matrix) => {
    let n = matrix.length;

    // reverse the rows
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    // transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    return matrix;
}

// let rotatedMatrix = rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]);

// console.log(rotatedMatrix);

let rotateMatrixByFormingCycles = (matrix) => { 
    let n = matrix.length;
    
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = i; j < n - i - 1; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][n-i-1]
            matrix[j][n-i-1]=matrix[n-i-1][n-j-1]
            matrix[n-i-1][n-j-1]=matrix[n-j-1][i]
            matrix[n-j-1][i] = temp
        }
    }

    return matrix;
}

let rotatedMatrix = rotateMatrixByFormingCycles([[1,2,3, 4],[5,6, 7, 8],[9, 10, 11, 12],[13,14,15,16]]);

console.log(rotatedMatrix);

