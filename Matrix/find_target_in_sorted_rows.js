function findXInSortedRowsMatrix(mat, k) {
    for (let i = 0; i < mat.length; i++) {
        console.log({i})
        j = mat[0].length - 1
        while (j >= 0) {
            console.log({j})
            if (mat[i][j] === k) {
                return true
            } else if (mat[i][j] < k) {
                break;
            } else {
                j--;
            }
        }
    }

    return false;
}

console.log(findXInSortedRowsMatrix([[35,60,69],[2,3,38],[20,52,54]], 5))