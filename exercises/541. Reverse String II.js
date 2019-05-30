/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var start = 0;
    while(start + 2 * k <= s.length) {
    	var _s = s.slice(start, start + k)
    	s = s.slice(0, start) + _s.split('').reverse().join('') + s.slice(start + k)
    	start += 2*k
    }
    var _s = s.slice(start, start + k).split('').reverse().join('')
    s = s.slice(0, start) + _s + s.slice(start + k)
    return s
};