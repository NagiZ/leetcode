// Solution:
var findPoisonedDuration = function(timeSeries, duration) {
    var len = timeSeries.length,
        time = duration;
    for(var i = 0; i < len - 1; i++){
        var s_time = timeSeries[i + 1] - timeSeries[i] - duration;
        time = time + (s_time >= 0 ? duration : duration + s_time);
    }
    return len == 0 ? 0 : time;
};