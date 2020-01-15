/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let l = 1,
        r = nums.sort()[nums.length - 1],
        ans = 1
    while(l < r) {
        let mid = Math.floor((l + r) / 2),
            total = 0
        for (let num of nums) {
            total += Math.ceil(num / mid)
        }
        if (total > threshold) {
            l = mid + 1
        } else {
            ans = mid
            r = mid
        }
    }
    return ans
};