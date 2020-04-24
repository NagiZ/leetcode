/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * 遍历s1，取得各字符的个数；遍历s2的前l（l为s1长度）位，统计各字符个数，与s1得到的值作差值 dif += Math.min(c2-c1, 0)
 * 从s2的l位开始移动窗口，重复求差，若dif = 0说明该s1是该窗口所含字符的一种排列
 */
var checkInclusion = function(s1, s2) {
    if (!s1 || !s1.length) return !!s2.length
    var l = s1.length,
        map1 = new Map(),
        map2 = new Map(),
        dif = 0
    for (var i = 0; i < l; i++) {
        var lt = s1.charAt(i),
            lt2 = s2.charAt(i),
            temp = map1.get(lt) || 0,
            temp2 = map2.get(lt2) || 0
        map1.set(lt, ++temp)
        map2.set(lt2, ++temp2)
    }
    for (var key of map2.keys()) {
        if (!map1.get(key)) {
            map2.delete(key)
        } else {}
    }
    for (var key of map1.keys()) {
        var v = (map2.get(key) || 0) - map1.get(key)
        map2.set(key, v)
        dif += Math.min(v, 0)
    }
    if (!dif) return true
    for (var i = l, len = s2.length; i < len; i++) {
        var s = s2.charAt(i),
            ls = s2.charAt(i - l)
        if (map1.get(s)) {
            var t = map2.get(s)
            t = t ? t : 0
            if (t < 0) {
                dif ++
            }
            map2.set(s, ++t)
        }
        if (map1.get(ls)) {
            var lt = map2.get(ls)
            lt = lt || 0
            if (lt <= 0) {
                dif --
            }
            map2.set(ls, --lt)
        }
        if (!dif) {
            return true
        }
    }
    return false
};

/** leetcode-cn 38
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    if (s.length < 2) return [s]
    var ans = []
    doSwap(s, 0, ans)
    return ans
};
function doSwap(s, i, ans) {
    if (i >= s.length - 1) {
        ans.push(s)
    } else {
        for (var j = i, l = s.length; j < l; j++) {
            var _s = swap(s, i ,j)
            doSwap(_s, i + 1, ans)
        }
    }
}
function swap(str, i, j) {
    if (j - i < 1) {
        return str
    }
    return `${str.slice(0, i)}${str.charAt(j)}${str.slice(i + 1, j)}${str.charAt(i)}${str.slice(j + 1)}`
}