/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    var result = []
    for (var i = 0; i < words.length; i++) {
        var word = words[i]
        for (var j = 0; j < words.length; j++) {
            if (i !== j) {
                var temp = words[j]
                if (temp.indexOf(word) !== -1) {
                    result.push(word)
                    break
                }
            }
        }
    }
    return result
};