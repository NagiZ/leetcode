/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var map = {}
    for (var i = 0; i < s.length; i++) {
        var letter = s.charAt(i)
        map[letter] = map[letter] ? map[letter] + letter : letter
    }
    return Object.keys(map).sort((a, b) => {
        return map[b].length - map[a].length
    }).map(v => {
        return map[v]
    }).join('')
};