def aggressiveCows(stalls, k):
    lo = 1
    hi = stalls[-1] - stalls[0]
    res = 0
    while lo <= hi:
        mid = (hi + lo) // 2
        prev = stalls[0]
        count = 1
        for i in range(1, len(stalls), 1):
            if stalls[i] - prev >= mid:
                count += 1
                prev = stalls[i]
        if count >= k:
            lo = mid + 1
            res = mid
        else:
            hi = mid - 1
    
    return res

aggressiveCows([1, 2, 4, 8, 9], 3)