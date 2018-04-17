// Solution: 
// 每个位置 (x, y), 到达这个位置的所有不用路径数为到达(x - 1, y), (x, y - 1)路径数的和
var uniquePaths = function(m, n) {
    var am = [];
    for(var i = 0; i < m; i++){
        am[i] = [];
    }
    for(var i = 0; i < m; i++){
        am[i][0] = 1;
    }
    for(var i = 0; i < n; i++){
        am[0][i] = 1;
    }
    for(var i = 1; i < m; i++){
        am[i][0] = 1;
        for(var j = 1; j < n; j++){
            am[0][j] = 1;
            am[i][j] = am[i-1][j] + am[i][j-1];
        }
    }
    return am[m-1][n-1];
};