// Solution:
var rangeBitwiseAnd = function(m, n) {
    var count = 0;
    while(n != m){
        m >>= 1;
        n >>= 1;
        count++;
    }
    return (m <<= count);
};