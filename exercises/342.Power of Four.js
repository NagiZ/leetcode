//Solution:
var isPowerOfFour = function(num) {
    if (num === 1) return true
    if (num < 4) return false
    while (num > 1) {
        var temp = num >> 2
        if (temp << 2 === num) {
            num = num >> 2
        } else {
            return false
        }
    }
    return true
}