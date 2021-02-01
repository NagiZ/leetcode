function countingSort(nums, k) {
    var arr = new Array(k + 1),
        output = []
    arr = arr.fill(0)
    for (var num of nums) {
        arr[num]++
    }
    for (var i = 1; i <= k; i++) {
        arr[i] = arr[i] + arr[i - 1]
    }
    for (var j = nums.length - 1; j >= 0; j--) {
        output[arr[nums[j]] - 1] = nums[j]
        arr[nums[j]]--
    }
    return output
}

countingSort([6,0,2,0,1,3,4,6,1,3,2], 6)