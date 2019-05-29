/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    var s_rev = s.split('').reverse().join(''),
    	poi = 1,
    	len = s.length,
		_len = 1;
	//求得字符串s从位置0开始的最长回文子串
    while(poi <= s.length) {
    	var _temps = s.slice(0, poi),
    		_temps_rev = s_rev.slice(len - poi)
    	if (_temps === _temps_rev) {
    		_len = poi
    	}
    	poi++
    }
    return s_rev.slice(0, len - _len) + s
};