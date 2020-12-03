var strStr = function(haystack, needle) {
    if (!needle || !needle.length) return 0
    var next = getNext(needle)
    var hi = 0,
        ni = 0
    while (ni < needle.length && hi < haystack.length) {
        console.log(ni, hi)
        if (0 > ni || needle.charAt(ni) === haystack.charAt(hi)) {
            ni++
            hi++
        } else {
            ni = next[ni]
        }
    }
    next = null
    if (ni === needle.length) {
        return hi - ni
    }
    return -1
};
function getNext(str) {
    const l = str.length
    var j = 0,
        t = -1,
        N = [t]
    while (j < l - 1) {
        if ( 0 > t || str.charAt(j) === str.charAt(t) ) {
            j++
            t++
            N[j] = t
        } else {
            t = N[t] // 当不匹配时，实际上需要找的上界就是index = 0 到 index = t 之间子串的最长公共前缀后缀
                     // 并且当找到子串的最长公共前后缀时，若index = t位置的字符不等于 index = j的字符（会进入if判断得出）; 会再次进入else重新查找
        }
    }
    return N
}