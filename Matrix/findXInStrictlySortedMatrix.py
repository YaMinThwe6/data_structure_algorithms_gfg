# TC O(n log m)
def findXInStrictlySortedMatrix(mat, x):
    m = len(mat[0])
    for i in range(len(mat)):
        if mat[i][m-1] >= x:
            lo = 0
            hi = m - 1
            while(lo <= hi):
                mid = lo + (hi - lo) // 2
                if (mat[i][mid] == x):
                    return True
                if (mat[i][mid] > x):
                    hi = mid - 1
                else:
                    lo = mid + 1
            return False

# We can implement binary search on the row to make it O(log n log m)
# But we can implement single binary search O(log(n*m))

def findBySingleBinarySearch(mat, x):
    n = len(mat)
    m = len(mat[0])
    lo = 0
    hi = (n*m) - 1
    while lo <= hi:
        mid = lo + (hi - lo) // 2
        c = mid % m
        r = mid // n
        if (mat[r][c] == x):
            return True
        if (mat[r][c] > x):
            hi = mid - 1
        else:
            lo = mid + 1
    return False
        