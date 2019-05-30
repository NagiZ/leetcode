/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
//有点问题，耗时太长了
var numRescueBoats = function(people, limit) {
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
  people = quickSort(people)
  var start = 0,
      end = people.length - 1,
      boat = 0;
  while(start <= end) {
      if (people[start] + people[end] <= limit) {
          start++
      }
      end--
      boat++
  }
  return boat
};