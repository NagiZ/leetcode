//Solution:
//https://leetcode.com/problemset/all/?search=925
var isLongPressedName = function(name, typed) {
    var len = name.length,
        len1 = typed.length,
        i = 0,
        j = 0;
    while (i <= len && j < len1) {
        if (name.charAt(i) === typed.charAt(j)) {
            i++
            j++
        } else {
            if (typed.charAt(j) === name.charAt(i - 1)) {
                j++
            } else {
                return false
            }
        }
    }

    return (i == len && j == len1)
};