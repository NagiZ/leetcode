/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 其实可以把 用start和end来简化头与尾的计算
 */
var rotate = function(matrix) {
    let start = 0;
    const len = matrix.length - 1
    while (start < len - start) {
        var i = start
        while (i < len - start) {
            var temp = matrix[i][len - start]
            matrix[i][len - start] = matrix[start][i]
            var temp_2 = matrix[len - start][len - i]
            matrix[len - start][len - i] = temp
            var temp_3 = matrix[len - i][start]
            matrix[len - i][start] = temp_2
            matrix[start][i] = temp_3
            i++
        }
        start ++
    }
};