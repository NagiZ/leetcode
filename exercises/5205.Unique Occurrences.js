/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    var map = {},
        len = 0
    for (var i = 0; i < arr.length; i++) {
        map[arr[i]] = map[arr[i]] ? ++map[arr[i]] : 1
    }
    console.log(map)
    return [...new Set(Object.keys(map).map(v => {len++; return map[v]}))].length === len
};