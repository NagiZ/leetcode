/**
 * @param {number} N
 * @return {number}
 */
//等差数列
var consecutiveNumbersSum = function(N) {
    var _N = -0.5 + Math.sqrt(2 * N + 0.25 ),
        result = 1;
    for(var i = 2; i <= _N; i++){
        var temp = (2 * N - i * (i - 1)) % (2 * i);
        if(!temp){
            result++
        }
    }
    return result
};