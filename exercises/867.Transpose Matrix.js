/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const rows = matrix.length,
          cols = matrix[0].length
    let output = []
    for (let i = 0; i < cols; i++) {
        let temp = []
        for (let j = 0; j < rows; j++) {
            temp.push(matrix[j][i])
        }
        output.push(temp)
    }
    return output
};