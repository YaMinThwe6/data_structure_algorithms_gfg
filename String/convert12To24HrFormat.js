function timeConversion(s) {
    let res = s.split(':');
    if (s.startsWith("12:")) {
        if (s.endsWith("AM")) {
            res[0] = "00";
        }
    } else if (s.endsWith("PM")) {
        res[0] = parseInt(res[0]) + 12;
    }
    res[2] = res[2][0] + res[2][1];
    return res.join(":")
}

console.log(timeConversion("11:12:12PM"))