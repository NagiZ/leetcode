/**
 * Solution: 判断是否共线
 * 1.斜率
 */
var isBoomerang = function(points) {
    var x1 = points[0][0],
        y1 = points[0][1],
        x2 = points[1][0],
        y2 = points[1][1],
        x3 = points[2][0],
        y3 = points[2][1]
    return (x2 - x1) * (y3 - y2) - (x3 - x2) * (y2 - y1)
};