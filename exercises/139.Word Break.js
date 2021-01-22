/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var c = [wordDict.includes(s.charAt(0))]
    for (var i = 1, l = s.length; i < l; i++) {
        let t = false, subS = ''
        for (var j = 0; j < i; j++) {
            subS = s.charAt(i - j) + subS
            t = c[i - j - 1] && wordDict.includes(subS)
            if (t) break
        }
        if (!t) {
            subS = s.charAt(0) + subS
            t = wordDict.includes(subS)
        }
        c[i] = t
    }
    return c[s.length - 1]
};