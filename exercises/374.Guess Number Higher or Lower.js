/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    var l = 1,
        r = n
    while( l <= r ) {
        var pivot = Math.floor((l + r) / 2)
        var res = guess(pivot)
        if (res == 0) {
            return pivot
        } else if (res === 1) {
            l = pivot + 1
        } else {
            r = pivot - 1
        }
    }
    return n
};