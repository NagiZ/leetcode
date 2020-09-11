/**
 * 
 * @param {*} arr 
 * @param {*} k 
 * @param {*} x 
 * solution: 先找到如果将 x 插入到arr中的的索引，以此为原点向左右两端拓展
 */

var findClosestElements = function(arr, k, x) {
    var l = 0,
        r = len = arr.length - 1,
        idx = 0
    while(l < r) {
        var mid = l + (r - l >>> 1)
        var mid_v = arr[mid]
        if (mid_v <= x) {
            idx = mid
            var mid_next = arr[mid + 1]
            if (mid_next > x) {
                if (Math.abs(mid_next - x) < Math.abs(mid_v - x)) {
                    idx = l = r = mid + 1
                } else {
                    l = r = mid
                }
            } else {
                l = mid + 1
            }
        } else {
            r = mid
        }
    }
    l = idx
    r = idx
    if (k > 1) {
        if (idx === 0 || idx < len && Math.abs(arr[idx - 1] - x) > Math.abs(arr[idx + 1] - x)) {
            r = idx + 1
        } else {
            l = idx - 1
        }
    }
    while(r - l <= k - 1) {
        if (l === 0) {
            r++
        } else if (r === len) {
            l--
        } else {
            var dif_l = Math.abs(arr[l] - x),
                dif_r = Math.abs(arr[r] - x)
            if (dif_l <= dif_r) {
                l--
            } else if (dif_l > dif_r) {
                r++
            }
        }
    }
    if (Math.abs(arr[l] - x) > Math.abs(arr[r] - x)) {
        r++
        l++
    }
    return arr.slice(l, r)
};