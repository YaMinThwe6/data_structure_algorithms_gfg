function minOperation(grid) {
    let n = grid.length;
    let row = new Array(n).fill(0);
    let column = new Array(n).fill(0);
    let row1 = new Array(n).fill(0);
    let column1 = new Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        let rowSum = 0;
        let columnSum = 0;
        let rowSum1 = 0;
        let columnSum1 = 0;
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                rowSum1 += 1;
            }
            if (grid[j][i] === 1) {
                columnSum1 += 1;
            }
            if (j >= i) {
                if (grid[i][j] === 1) {
                rowSum += 1;
                }
                if (grid[j][i] === 1 && i !== j) {
                    columnSum += 1;
                }
            }
        }

        row[i] = rowSum;
        column[i] = columnSum;

        row1[i] = rowSum1;
        column1[i] = columnSum1;
    }

    console.log(row);
    console.log(column);
    console.log(row1);
    console.log(column1);

    
    let rowMax = Math.max(...row);
    let columnMax = Math.max(...column);
    // console.log(rowMax, columnMax, Math.floor(n/2));
    
    
    return 2*n - 1 - rowMax - columnMax;
    
}

console.log(minOperation([
    [0, 0, 1, 0, 1],
    [0, 0, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0]]))

console.log(minOperation([
    [1, 0],
    [0, 1]]))