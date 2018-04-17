// Solution: 
var searchMatrix = function(matrix, target) {
    if (!(matrix[0] instanceof Array)) {
        return false;
    }
    var leny = matrix.length,
        lenx = matrix[0].length,
        row = -1;
    if (target > matrix[leny-1][lenx-1] || target < matrix[0][0]) return false;
    for(var i = 0; i < leny; i++){
        if (target < matrix[i][0]) {
            row = i;
            i = leny;
        }
    }
    row = row == -1 ? leny -1 : row - 1;
    return matrix[row].indexOf(target) > -1;
};