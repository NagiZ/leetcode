//Solution: 
var removeDuplicates = function(S) {
    var i = 0,
        sa = S.split('');
    while (i < sa.length - 1) {
        if (sa[i] != sa[i + 1]) {
            i++
        } else {
            sa.splice(i, 2)
            i = i > 0 ? i - 1 : 0
        }
    }
    return sa.join('')
};