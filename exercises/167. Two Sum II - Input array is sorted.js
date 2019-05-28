/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var c = {}
    for (var i = 0; i < numbers.length; i++) {
        var t = numbers[i]
        if (c[target - t]) {
            return [c[target - t], i + 1]
        }
        if (!c[t]) {
            c[t] = i + 1
        }
    }  
};