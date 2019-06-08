/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var z = x ^ y,
        result = 0;
    while(z > 0){
        result++
        z = z & (z-1)
    }
    return result
};