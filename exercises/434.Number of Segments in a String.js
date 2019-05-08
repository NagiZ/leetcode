//Solution:
var countSegments = function(s) {
	var reg = /[^\s]+/g;
	return s.split(reg).length - 1
};