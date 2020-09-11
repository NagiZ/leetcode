/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var l = 1,
            r = n
        while (l < r) {
            var m = l + (r - l >> 1)
            var isM = isBadVersion(m)
            var isNext = isBadVersion(m + 1)
            if (!isM && isNext) {
                return m + 1
            } else {
                if (!isM) {
                    l = m + 1
                } else {
                    r = m
                }
            }
        }
        return l
    };
};