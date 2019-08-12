/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    date = date.split('-')
   	let y = +date[0],
   		m = +date[1] - 1,
   		d = +date[2],
   		leap = false,
   		ans = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
   	if (!(y % 4)) {
   		if (!(y % 100)) {
   			if (!(y % 400)) {
   				leap = true
   			}
   		} else {
   			leap = true
   		}
   	}
   	return (leap && m >= 2) ? ans[m] + d + 1 : ans[m] + d
};