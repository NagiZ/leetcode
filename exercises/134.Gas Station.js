//Solution: 如果一个数组的总和非负，那么一定可以找到一个起始位置，从他开始绕数组一圈，累加和一直都是非负的
var canCompleteCircuit = function(gas, cost) {
	var temp = 0,
		index = 0,
		totalgas = 0,
		totalcost = 0
    for (var i = 0; i < gas.length; i++) {
    	var t = temp + gas[i] - cost[i]
    	if (t < 0) {
    		temp = 0
    		index = i + 1
    	} else {
    		temp = t
    	}
    	totalgas += gas[i]
    	totalcost += cost[i]
    }
    return totalgas >= totalcost ? index : -1
};