//Solution: 
var findTheDifference = function(s, t) {
    var map = {}
    for (var i = 0; i < s.length; i++) {
    	var _s = s.charAt(i)
    	map[_s] = map[_s] ? map[_s] + 1 : 1
    }
    for (var i = 0; i < t.length; i++) {
    	var _t = t.charAt(i)
    	if (!map[_t]) {
            console.log(_t)
            return _t
        }
        map[_t]--
    }
};