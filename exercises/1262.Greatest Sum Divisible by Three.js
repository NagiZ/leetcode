/**
 * @param {number[]} nums
 * @return {number}
 */
//这个方法并不好
var maxSumDivThree = function(nums) {
    let map = new Map(),
        total = 0
    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i]
        total += temp
        let k = temp % 3,
            arr = map.get(k) || []
        arr.push(temp)
        map.set(k, arr)
    }
    let mod = total % 3
    if (mod !== 0) {
        if (map.get(mod)) {
            let _temp = map.get(mod)
            _temp.sort((a, b) => {return a - b})
            console.log(_temp)
            let min = _temp[0],
            temp = map.get(mod === 2 ? 1 : 2) || []
            temp.sort((a, b) => {return a - b})
            if (temp.length >= 2) {
                min = Math.min(temp[0] + temp[1], min)
            }
            console.log(min)
            total -= min
        } else {
            let arr = map.get(mod)
            if (arr.length < 2) {
                total = 0
            } else {
                arr.sort()
                total -= (arr[0] + arr[1])
            }
        }
    }
    return total
};