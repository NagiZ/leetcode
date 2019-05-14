//Solution: 
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