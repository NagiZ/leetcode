//Solution:
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	if (!s) return '';
    if (numRows === 1) return s;
    var len = s.length,
    	result = '';
    s = s.split('');
    var min = numRows > len ? len : numRows;
    for(var i = 0; i < min; i++) {
    	var j = 0;
    	while ((i + 2*(numRows - 1) * j) < len){
    		if (i > 0 && i < numRows - 1 && j > 0) {
    			result += s[i + 2 * (numRows - 1) * j - 2 * i];
    		}
    		result += s[i + 2*(numRows - 1) * j];
    		j++;
    	}
    	if ((i + 2 * (numRows - 1) * j - 2 * i) < len && i > 0 && i < numRows - 1 ) {
    		result += s[i + 2 * (numRows - 1) * j - 2 * i];
    	}
    }
    return result
};