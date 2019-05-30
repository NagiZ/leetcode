/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
//有点问题，耗时太长了
var numRescueBoats = function(people, limit) { 
	people.sort((a,b)=>{return a-b})
	var start = 0,
		end = people.length - 1,
		boat = 0;
	while(start <= end) {
		if (people[start] + people[end] <= limit) {
            start++
        }
        end--
		boat++
	}
	return boat
};