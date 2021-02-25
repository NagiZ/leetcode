/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    const vs = [1,0]
    for (let i = 0, rows = A.length; i < rows; i++) {
        const row = A[i]
        let l = 0, r = row.length - 1
        while(l <= r) {
            let temp = row[l]
            row[l] = vs[row[r]]
            row[r] = vs[temp]
            l++
            r--
        }
    }
    return A
};