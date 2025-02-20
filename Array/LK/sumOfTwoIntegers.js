function twoSum (arr, target) {
    let seen = new Set();
    for (let ele of arr) {
        if (ele <= target) {
            if (seen.has(target - ele)) {
                return true;
            }
            seen.add(ele);
        }
    }
    console.log(seen)
    
    return false;
}

console.log(twoSum([1, 2, 3, 12, 10], 22))