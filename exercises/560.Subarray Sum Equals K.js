/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 关键: 哈希表记录 sum - k 
 */
var subarraySum = function(nums, k) {
    var map = new Map([[0, 1]]),
        sum = 0
    var ans = 0
    for (var num of nums) {
        sum += num
        if (map.has(sum - k)) {
            ans += map.get(sum - k)
        }
        var count = map.get(sum) || 0
        map.set(sum, ++count)
    }
    return ans
};