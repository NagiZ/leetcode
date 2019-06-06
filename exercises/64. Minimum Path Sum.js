/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var mp = [],
        row = grid.length,
        col = grid[0].length;
    for (var i = 0; i < row; i++) {
        mp.push([])
    }
    mp[0][0] = grid[0][0]
    for (var i = 1; i < col; i++) {
        mp[0][i] = mp[0][i-1] + grid[0][i]
    }
    for (var i = 1; i < row; i++) {
        mp[i][0] = mp[i-1][0] + grid[i][0]
    }
    for (var i = 1; i < row; i++) {
        for (var j = 1; j < col; j++) {
            mp[i][j] = Math.min(mp[i-1][j], mp[i][j-1]) + grid[i][j]
        }
    }
    return mp[row-1][col-1]
};