/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    var stack = []
    for (let s of S) {
        if (s === ')' && stack[stack.length - 1] === '(') {
            stack.pop()
        } else {
            stack.push(s)
        } 
    }
    return stack.length
};