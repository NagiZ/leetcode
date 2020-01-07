/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let output = [-1],
        end = arr.length - 1,
        min = arr[end]
    while(end >= 1) {
        min = Math.max(min, arr[end])
        output.unshift(min)
        end--
    }
    return output
};