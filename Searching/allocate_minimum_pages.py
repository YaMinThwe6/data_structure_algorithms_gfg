def findPages(arr, k):
    if len(arr) < k:
        return -1
    lo = max(arr)
    hi = sum(arr)
    res = -1
    while lo <= hi:
        mid = lo + (hi - lo) // 2
        count = 1
        pages = 0
        for i in range(len(arr)):
            pages += arr[i]
            if (pages > mid):
                count += 1
                pages = arr[i]
        if (count <= k):
            res = mid
            hi = mid - 1
        else:
            lo = mid + 1
    return res

print(findPages([10, 20, 30, 40], 3))