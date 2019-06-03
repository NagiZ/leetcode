/**
 * @param {number[]} nums
 * @return {number}
 */
/*  数组有环，假设环的entry离数组头部有x的距离，环的长度y，第一次相遇时距离环的入口距离z
    分别走了a和b次环;前者一次走 2 steps，后者一次 1 step
    则： x + ay + z = 2(x + by + z) ====> x + z = (a - 2b)y ====> x = (a - 2b)y - z
    所以在第一次相遇之后，将2steps放回数组头部，以1step的步进走；则相遇时刚好会在环的entry处 
*/
var findDuplicate = function(nums) {
	var vec1 = nums[0],
		vec2 = nums[nums[0]];
	//有重复，说明数组有环
	while(vec1 !== vec2){
		vec1 = nums[vec1]
		vec2 = nums[nums[vec2]]
	}
	vec2 = 0
	while(vec1 !== vec2){
		vec1 = nums[vec1]
		vec2 = nums[vec2]
	}
	return vec1
};