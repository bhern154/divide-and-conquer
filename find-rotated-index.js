function findRotatedIndex(arr, num) {

    let rotationIdx = rotationIndex(arr);

    let leftArr = [...arr].splice(0, rotationIdx)
    let rightArr = [...arr].splice(rotationIdx, arr.length)

    let leftSearch = binarySearch(leftArr, num)
    let rightSearch = binarySearch(rightArr, num)

    if(leftSearch != -1) return leftSearch
    else if (rightSearch != -1) return rightSearch + rotationIdx
    else return -1
}

function rotationIndex(arr) {

    //use binary search to find the left most index mathing num

    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    // if(arr[leftIdx] == num) return leftIdx;
  
    while (leftIdx <= rightIdx) {
        
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal > arr[middleIdx + 1]) {
            //if middle value is greater than next value
            return middleIdx + 1;
        } else if (middleVal < arr[middleIdx - 1]) {
            //if middle value is greater than next value
            return middleIdx;
        } else if (middleVal > arr[rightIdx]){
            //if middle val is greater than right most val, check right half
            leftIdx = middleIdx + 1
        } else if (middleIdx < arr[rightIdx]){
            //if middle val is less than than right most val, check left half
            rightIdx = middleIdx - 1
        }        
        
    } 

    return -1

}

function binarySearch(arr, val) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
  
    while (leftIdx <= rightIdx) {
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];
  
      if (middleVal < val) {
        // middleVal is too small, look at the right half
        leftIdx = middleIdx + 1;
      } else if (middleVal > val) {
        // middleVal is too large, look at the left half
        rightIdx = middleIdx - 1;
      } else {
        // we found our value!
        return middleIdx;
      }
    }
    
    // left and right pointers crossed, val isn't in arr
    return -1;
  }

console.log(findRotatedIndex([3,4,1,2],4)) // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6
console.log(findRotatedIndex([37,44,66,102,10,22],14)) // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)) // -1

module.exports = findRotatedIndex