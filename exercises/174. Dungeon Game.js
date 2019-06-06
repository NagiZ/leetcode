/**
 * @param {number[][]} dungeon
 * @return {number}
 */
//从终点开始，计算进入每个房间后，要进入下个房间且不死去，需要补充的hp最小值(最小为0)
var calculateMinimumHP = function(dungeon) {
    var hp = [],
        row = dungeon.length,
        col = dungeon[0].length;
    for (var i = 0; i < row; i++) {
        hp.push([])
    }
    hp[row-1][col-1] = Math.max(-dungeon[row-1][col-1], 0)
    for (var i = col - 2; i >= 0; i--) {
        var temp = hp[row-1][i+1] - dungeon[row-1][i]
        hp[row-1][i] = Math.max(temp, 0)
    }
    for (var i = row - 2; i >= 0; i--) {
        var temp = hp[i+1][col-1] - dungeon[i][col-1]
        hp[i][col-1] = Math.max(temp, 0)
    }
    for (var i = row - 2; i >= 0; i--) {
        for (var j = col - 2; j >= 0; j--) {
            var temp = Math.min(hp[i+1][j], hp[i][j+1]) - dungeon[i][j]
            hp[i][j] = Math.max(temp, 0)
        }
    }
    return hp[0][0] + 1
};