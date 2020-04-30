/**
 * @param {number} N
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
//求得A和B的最小公倍数K，每一个最小公倍数的步进里有 K / A + K / B - 1个A或者B的倍数
var nthMagicalNumber = function(N, A, B) {
    function getGcd(a, b) {
        if (b === 0) return a
        while (a % b) {
            var t = a % b
            a = b
            b = t
        }
        return b
    }
    var gcd = getGcd(Math.max(A, B), Math.min(A, B))
    var lcm = A * B / gcd,
        unit = lcm / A + lcm / B - 1
    var loops = Math.floor(N / unit),
        rests = N % unit
    var ans = loops * lcm
    var i = 1,
        s1 = 1,
        s2 = 1
        _ans = 0
    while(i++ <= rests) {
        if (A * s1 < B * s2) {
            _ans = A * s1
            s1++
        } else if (A * s1 > B * s2){
            _ans = B * s2
            s2++
        }
    }
    ans += _ans
    var mob = Math.pow(10, 9) + 7
    return ans % mob
};