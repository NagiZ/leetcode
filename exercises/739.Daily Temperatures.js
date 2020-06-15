/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    var stack = T && T.length ? [0] : [],
        t_list = []
    for (var i = 1, len = T.length; i < len; i++) {
        var ti = T[i]
        while(stack.length && ti > T[stack[stack.length - 1]]) {
            var head = stack.pop()
            t_list[head] = i - head
        }
        stack.push(i)
    }
    for (var index of stack) {
        t_list[index] = 0
    }
    return t_list
};