/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var path = [],
    	row = obstacleGrid.length,
    	col = obstacleGrid[0].length;
    for (var i = 0; i < row; i++) {
    	path.push([])
    }
    path[0][0] = 1 - obstacleGrid[0][0]
    for (var i = 1; i < col; i++) {
    	path[0][i] = (path[0][i-1] === 0 || obstacleGrid[0][i] === 1) ? 0 : 1
    }
    for (var i = 1; i < row; i++) {
    	path[i][0] = (path[i-1][0] === 0 || obstacleGrid[i][0] === 1) ? 0 : 1
    }
    for (var i = 1; i < row; i++) {
    	for (var j = 1; j < col; j++) {
    		if (obstacleGrid[i][j] === 1) {
    			path[i][j] = 0
    		} else {
    			path[i][j] = path[i-1][j] + path[i][j-1]
    		}
    	}
    }
    return path[row-1][col-1]
};