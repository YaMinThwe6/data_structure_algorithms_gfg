// Pattern Found for n x m matrix
// ii -> i(m-1-i)
// (i+1)(m-1-i) -> (n-1-i)(m-1-i)
// (n-1-i)(m-2-i) -> (n-1-i)i
// (n-2-i)i -> (i+1)i
// 1  2  3  4  5  6
// 7  8  9  10 11 12
// 13 14 15 16 17 18
// 19 20 21 22 23 24
// 25 26 27 28 29 30
// Here for this array if we implement the above for i from 0 to 2, we get
// for i = 0, m = 6, n = 5
// 1, 2, 3, 4, 5, 6, 12, 18,24, 30, 29, 28, 27, 26, 25, 19, 13, 7
// for i = 1
// 8, 9, 10, 11, 17, 23, 22, 21, 20, 14,
// for i = 2
// 15, 16, 15, 9, 15, 21