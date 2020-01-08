/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let add_op = 0,
        times_op = 1
    while(n >= 10) {
        let temp = n % 10
        add_op += temp
        times_op *= temp
        n = Math.floor(n / 10)
    }
    add_op += n
    times_op *= n
    return times_op - add_op
};