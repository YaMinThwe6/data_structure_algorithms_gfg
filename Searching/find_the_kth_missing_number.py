# Using Index Comparison TC O(n)
def findTheKthMissingNumber(arr, k):
    for i in range(len(arr)):
        if (arr[i] > (k + i)):
            return k + i
        
    return k + len(arr)

print(findTheKthMissingNumber([1,3,4,7], 2))

# Using Binary Search TC O(log n)
def findTheKthMissingNumberBinarySearch(arr, k):
    lo = 0
    hi = len(arr) - 1
    result = k + len(arr)
    while lo <= hi:
        mid = lo + (hi - lo) // 2
        if (arr[mid] <= k + mid):
            lo = mid + 1
        else:
            result = mid + k
            hi = mid - 1
    return result

print(findTheKthMissingNumberBinarySearch([1,3,4,7], 2))