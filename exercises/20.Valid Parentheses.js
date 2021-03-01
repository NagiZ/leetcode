/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = []
    var collection = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for (var i = 0, len = s.length; i < len; i++) {
        var letter = s.charAt(i)
        var heapTop = stack[stack.length - 1]
        console.log(heapTop, collection[letter])
        if (heapTop && collection[letter] && heapTop === collection[letter]) {
            stack.pop()
        } else {
            stack.push(letter)
        }
    }
    return stack.length === 0
};