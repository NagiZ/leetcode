/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var num = num1.length < num2.length ? num2 : num1
        num_sub = num1.length < num2.length ? num1 : num2
        ads = 0,
        ans = '',
        l_sub = num_sub.length,
        l = num.length
    for (var i = 1; i <= l_sub; i++) {
        var s1 = +num.charAt(l - i),
            s2 = +num_sub.charAt(l_sub - i),
            temp = s1 + s2 + ads
        ads = Math.floor(temp / 10)
        ans = temp % 10 + ans
    }
    for (var i = l_sub + 1; i <= num.length; i++) {
        var s = +num.charAt(l - i),
            temp = s + ads
        ads = Math.floor(temp / 10)
        ans = temp % 10 + ans
    }
    if (ads) {
        ans = ads + ans
    }
    return ans
};