/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var stack = []
    const reg = /\d+/
    var sum = ''
    for (let _s of s) {
        if (reg.test(_s)) {
            sum += String(_s)
        } else if (_s === '[') {
            stack.push(+sum)
            stack.push(_s)
            sum = ''
        } else if (_s === ']') {
            var temp = ''
            while(stack[stack.length - 1] !== '[') {
                temp = `${stack.pop()}${temp}`
            }
            stack.pop()
            var n = stack.pop()
            temp = temp.repeat(+n)
            stack.push(temp)
        } else {
            stack.push(_s)
        }
    }
    return stack.join('')
};