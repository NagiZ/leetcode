/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    var ltr = 0,
        all = 0,
        t = Math.max(start, destination),
        _t = Math.min(start, destination)
    start = _t
    destination = t
    for (var i = 0; i < distance.length; i++) {
        all += distance[i]
    }
    for (var i = start ; i < destination; i++) {
        ltr += distance[i]
    }
    return Math.min(ltr, all - ltr)
};