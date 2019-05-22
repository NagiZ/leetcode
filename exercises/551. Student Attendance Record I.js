//Solution:
var checkRecord = function(s) {
    var reg = /L{3,}/g
    return !(reg.test(s) || s.split('A').join('').length < s.length - 1)
};