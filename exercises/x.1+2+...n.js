var sumNums = function(n) {
    function add(t, b, max) {
        return b < max && add(t + b, b + 1, max) || t + b
    }
    return add(0, 1, n)
};