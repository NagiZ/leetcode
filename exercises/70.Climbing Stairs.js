/**
 * @param {number} n
 * @return {number}
 */
//dp
var climbStairs = function(n) {
    let r = [0, 1, 2]
    for (let i = 3; i <= n; i++) {
        r[i] = r[i-1] + r[i-2]
    }
    return r[n]
};

//