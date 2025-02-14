let mooreVoting = (arr) => {
    let ele1 = -1, ele2 = -1, count1 = 0, count2 = 0;
    let n = arr.length;
    let majorityCount = Math.floor(n/3);
    console.log(n, majorityCount);

    for (let ele of arr) {
        if (ele1 === ele) {
            count1++;
        } else if (ele2 === ele) {
            count2++;
        } else if (count1 === 0) {
            ele1 = ele;
            count1++;
        } else if (count2 === 0) {
            ele2 = ele;
            count2++;
        } else {
            count1--;
            count2--;
        }
    }
    console.log({ele1, ele2, count1, count2});

    count1 = 0, count2 = 0;
    for (let ele of arr) {
        if (ele1 === ele) {
            count1++;
        }
        if (ele2 === ele) {
            count2++;
        }
    }

    let result = [];

    if (count1 > majorityCount) {
        result.push(ele1);
    }

    if (count2 > majorityCount && ele1 !== ele2) {
        result.push(ele2);
    }

    if (result.length === 2 && result[0] > result[1]) {
        let temp = result[0];
        result[0] = result[1];
        result[1] = temp;
    }

    return result;
}

let arr = [1, 2, 3, 4, 5];

let result = mooreVoting(arr);

console.log(result);