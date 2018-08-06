// Solution:一开始的想法，全部元素取出来成一个新数组，快排
// 耗时长 待优化 

var mergeKLists = function(lists) {
    if (!(lists instanceof Array) || lists.length < 1) return lists;
    lists = lists.map(v => {
        if(v && v!= {}) {
            return getValueArr(v)
        }
    })
    console.log(lists)
    lists = lists.reduce((pre, cur) => {
        if ((cur instanceof Array && cur.length > 0) && (pre instanceof Array && pre.length > 0)) {
            return pre.concat(cur)
        } else {
            return pre || cur || []
        }
    })
    if (!lists) {
        return [];
    }
    return quickSort(lists);
};

function getValueArr (obj) {
    let value_arr = []
    if (typeof obj == 'object') {
        value_arr.push(obj.val);
        if (obj.next != null) {
            return value_arr.concat(getValueArr(obj.next))
        }
    } else if (obj instanceof Array && obj.length > 0) {
        return getValueArr(obj[0])
    }
    return value_arr;
}

function quickSort(a1){
    if (!a1) {
        return;
    }
    if(a1.length<=1){return a1;}
    var arr = a1.slice(0);
    var pivotIndex=Math.floor(arr.length/2);
    var pivot=arr.splice(pivotIndex,1)[0];
    var left=[];
    var right=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i] <= pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
}