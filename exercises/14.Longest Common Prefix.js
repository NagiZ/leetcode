/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var ref = strs[0]
    for (var str of strs) {
        if (str.length < ref.length) {
            ref = str
        }
    }
    if (!ref || !ref.length) {
        return ''
    }
    var len = ref.length,
        ans = ref
    for (var str of strs) {
        var _ans = '',
            i = 0
        while(i < len) {
            var _l = ref.charAt(i)
            if (ref.charAt(i) === str.charAt(i)) {
                _ans += _l
                i++
            } else {
                i = Infinity
            }
        }
        if (_ans.length < ans.length) {
            ans = _ans
        }
    }
    return ans
};