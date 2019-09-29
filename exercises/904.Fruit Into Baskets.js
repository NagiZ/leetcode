/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
    var l = 0,
        r = 0,
        basket = {
            fruits: []
        },
        ans = 0
    for (var i = 0; i < tree.length; i++) {
        r = i
        if (basket[tree[i]] == undefined) {
            basket[tree[i]] = i
            if (basket.fruits.length < 2) {
                basket.fruits.push(tree[i])
            } else {
                ans = Math.max(ans, r - l)
                var dtag = basket[basket.fruits[0]] > basket[basket.fruits[1]] ? 1 : 0,
                    fd = basket.fruits[dtag]
                    fr = basket.fruits[1 - dtag]
                l = basket[fd] + 1
                delete basket[fd]
                basket.fruits = [fr, tree[i]]
            }
        } else {
            basket[tree[i]] = i
        }
    }
    ans = Math.max(ans, r - l + 1)
    return ans
};