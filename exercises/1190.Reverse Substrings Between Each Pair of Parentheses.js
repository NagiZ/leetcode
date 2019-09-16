/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    var id_stack = [],
        arr = s.split('')
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) === '(') {
            id_stack.push(i)
        } else if (s.charAt(i) === ')') {
            var l = id_stack.pop(),
                temp = arr.splice(l + 1, i - l - 1).reverse()
            arr.splice(l, 2, ...temp)
            s = arr.join('')
            i = i - 2
        }
    }
    return s
};