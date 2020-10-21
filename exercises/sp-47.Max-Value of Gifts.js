/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    if (!grid || !grid[0]) return 0
    const ROWS = grid.length,
          COLUMNS = grid[0] ? grid[0].length : 0
    var mv = [[grid[0][0]]]
    for (var i = 1; i < COLUMNS; i++) {
        mv[0][i] = mv[0][i - 1] + grid[0][i]
    }
    for (var i = 1; i < ROWS; i++) {
        mv[i] = []
        mv[i][0] = mv[i - 1][0] + grid[i][0]
    }
    for (var x = 1; x < COLUMNS; x++) {
        for (var y = 1; y < ROWS; y++) {
            mv[y][x] = Math.max(mv[y][x - 1], mv[y - 1][x]) + grid[y][x]
        }
    }
    return mv[ROWS - 1][COLUMNS - 1]
};