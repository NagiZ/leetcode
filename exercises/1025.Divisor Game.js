var divisorGame = function(N) {
    let solu = [true, false]
    if (N <= 1) {
        return false
    } else {
        solu[2] = true
        for (let i = 3; i <= N; i++) {
            for (let j = 1; j <= Math.floor(i / 2); j++) {
                if (i % j === 0 && solu[i - j] === false) {
                    solu[i] = true
                    break
                }
            }
            solu[i] = !!solu[i]
        }
    }
    return solu[N]
};