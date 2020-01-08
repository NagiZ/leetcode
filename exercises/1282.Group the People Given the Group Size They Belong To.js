/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    var output = [],
        groups = {}
    for (let i = 0; i < groupSizes.length; i++) {
        let cls = groupSizes[i]
        groups[cls] = groups[cls] ? groups[cls] : [] 
        groups[cls].push(i)
    }
    Object.keys(groups).map(size => {
        let arr = groups[size],
            temp = []
        while(arr.length > size) {
            output.push(arr.splice(0, size))
        }
        output.push(arr.splice(0))
    })
    return output
};