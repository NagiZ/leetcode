/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    var t = Math.log(n) / Math.log(3)
    return Math.pow(3, Math.floor(t)) === n && !!n
};