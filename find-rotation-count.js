function findRotationCount(arr) {

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

    return 0
}

console.log(findRotationCount([15, 18, 2, 3, 6, 12])) // 2
console.log(findRotationCount([7, 9, 11, 12, 5])) // 4
console.log(findRotationCount([7, 9, 11, 12, 15])) // 0

module.exports = findRotationCount