//solution:
var minCostClimbingStairs = function(cost) {
    cost.push(0)
    let _cost = [cost[0], cost[1]]
    for (let i = 2; i < cost.length; i++) {
        _cost[i] = cost[i] + Math.min(_cost[i-1], _cost[i-2])
    }
    return _cost[_cost.length - 1]
};