//Solution:
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let output = n % 2 ? [0] : [],
        start = n % 2 ? 1 : 0,
        num = 1
    while(start < n) {
        output.push(num, -num)
        start += 2
        num++
    }
    return output
};