/**
 * @param {string} s
 * @return {number} 
 */
var lengthOfLongestSubstring = function(s) {
    var map = new Map(),
        arr = [],
        left = 0,
        i = 0,
        l = s.length,
        ans = s.length ? 1 : 0
    while (i < l) {
        let letter = s.charAt(i),
            ob = map.get(letter)
        if (ob && ob.index >= left) {
            ans = Math.max(ans, i - left)
            left = ob.index + 1
        }
        map.set(letter, {index: i})
        i++
    }
    ans = Math.max(ans, i - left)
    return ans
};