//Solution: 
var compareVersion = function(version1, version2) {
    var v1 = version1.split('.'),
    	v2 = version2.split('.'),
    	op = 0;
    var len = Math.max(v1.length, v2.length)
    for (var i = 0; i < len; i++) {
    	var _v1 = v1[i] === undefined ? 0 : +v1[i],
    		_v2 = v2[i] === undefined ? 0 : +v2[i];
    	if (_v1 !== _v2) {
    		op = _v1 > _v2 ? 1 : -1
    		break
    	}
    }
    return op
};