/**Solution:
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    var t = 0;
    while(n > 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            if((n >> 1) & 1 && (n >> 2)) {
                n = n + 1;
            } else {
                n = n - 1;
            }
        }
        t++;
    }
    return t;
};