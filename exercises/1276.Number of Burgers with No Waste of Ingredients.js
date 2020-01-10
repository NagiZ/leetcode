/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
    let jumbo = Math.floor((tomatoSlices - 2 * cheeseSlices) / 2),
        small = Math.floor(2 * cheeseSlices - tomatoSlices / 2)
    if (jumbo >=0 && small >= 0 && ((4 * jumbo + 2 * small) === tomatoSlices) && ((jumbo + small) === cheeseSlices)) {
        return [jumbo, small]
    }
    return []
};