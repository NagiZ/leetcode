/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    var maps = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0
    },
    i = 0,
    sum = Infinity
    while(i < text.length) {
        var letter = text.charAt(i)
        if (maps[letter] !== undefined) {
            maps[letter]++
        }
        i++
    }
    maps.l = Math.floor(maps.l / 2)
    maps.o = Math.floor(maps.o / 2)
    for (var key in maps) {
        sum = Math.min(sum, maps[key])
    }
    return sum
};