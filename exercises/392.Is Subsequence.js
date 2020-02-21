//solution"
var isSubsequence = function(s, t) {
    var i = 0,
        j = 0
    while(i < s.length && j < t.length) {
        if (s.charAt(i) === t.charAt(j)) {
            i++
        }
        j++
    }
    return i === s.length
};