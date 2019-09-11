/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function(calories, k, lower, upper) {
    var score = 0,
        left = 0,
        temp = 0
        tl = Math.min(calories.length, k)
    for (var i = 0; i < tl; i++) {
        temp += calories[i]
    }
    if (temp > upper) {
        score++
    } else if (temp < lower) {
        score--
    }
    for (var i = k; i < calories.length; i++) {
        temp = temp - calories[left] + calories[i]
        left++
        if (temp > upper) {
            score++
        } else if (temp < lower) {
            score--
        }
    }
    return score
};