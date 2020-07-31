/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = {},
        cols = {},
        hydris = {}
    for (var x = 0; x < 9; x++) {
        cols[x] = {}
        hydris[x] = {}
    }
    for (var i = 0; i < 9; i++) {
        rows = {}
        for (var j = 0; j < 9; j++) {
            var temp = board[i][j],
                isNum = !isNaN(temp)
            if (!isNum) continue
            if (rows[temp]) return false
            rows[temp] = true
            if (cols[j][temp]) return false
            cols[j][temp] = true
            var box = Math.floor(i / 3) * 3 + Math.floor(j / 3)
            if (hydris[box][temp]) return false
            hydris[box][temp] = true
        }
    }
    return true
};