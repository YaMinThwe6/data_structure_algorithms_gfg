// MY WAY - Better Approach
let countElements = (arr) => {
    let n = arr.length;
    let count = Math.floor(n/3);
    let object = {};
    let res = [];
    console.log(arr)
    for (let i = 0; i < n; i++) {
        object[arr[i]] = (object[arr[i]] || 0) + 1;
    }
    console.log(object);
    for (const element in object) {
        if (object[element] > count) {
            res.push(parseInt(element));
        }
    }
    res.sort((a,b)=> a - b);
    return res;
}

let result = countElements(array);

console.log(result);