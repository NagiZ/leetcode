//Solution:
var canConstruct = function(ransomNote, magazine) {
    var rc = {},
		mc = {},
		can = true
    for (var i = 0; i < ransomNote.length; i++) {
    	var s = ransomNote.charAt(i)
    	rc[s] = rc[s] ? rc[s] + 1 : 1
    }
    for (var i = 0; i < magazine.length; i++) {
    	var s = magazine.charAt(i)
    	mc[s] = mc[s] ? mc[s] + 1 : 1
    }
    for (var key in rc) {
    	if (rc[key] > mc[key] || !mc[key]) {
    		can = false
    		break
    	}
    }
    return can
};