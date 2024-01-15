function sortedFrequency(arr, num) {

    // Given a sorted array and a number, 
    // write a function  that counts the occurrences of the number in the array
    // Constraints:
    // Time Complexity: O(log N)

    let firstIdx = findLeft(arr, num); // O(log N)
    let lastIdx = findRight(arr, num); // O(log N)

    if(firstIdx == -1 || lastIdx == -1) return -1

    return lastIdx - firstIdx + 1;
}

function findLeft(arr, num){

    //use binary search to find the left most index mathing num

    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    if(arr[leftIdx] == num) return leftIdx;
  
    while (leftIdx <= rightIdx) {
        
      let middleIdx = Math.floor((leftIdx + rightIdx + 1) / 2);
      let middleVal = arr[middleIdx];

      if (middleVal >= num) {
        //if middle value is greater than num, look to the left side
        rightIdx = middleIdx - 1;
      } else if (middleVal < num && arr[middleIdx + 1] == num){
        //if middle value is 1 & next value is 0, return the answer
        return middleIdx+1;
      } else if (middleVal <= num) {
        //if middle value is less than num, look at the right half
        leftIdx = middleIdx + 1;
      }
    } 

    return -1
}

function findRight(arr, num){

    //use binary search to find the right most index mathing num

    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    if(arr[rightIdx] == num) return rightIdx;
  
    while (leftIdx <= rightIdx) {
    
      let middleIdx = Math.floor((leftIdx + rightIdx + 1) / 2);
      let middleVal = arr[middleIdx];

      if (middleVal > num) {
        //if middle value is greater than num, look to the left side
        rightIdx = middleIdx - 1;
      } else if (middleVal == num && arr[middleIdx + 1] != num){
        //if middle value is 1 & next value is 0, return the answer
        return middleIdx;
      } else if (middleVal <= num) {
        //if middle value is less than or equal to num, look at the right half
        leftIdx = middleIdx + 1
      }
    } 
    
    return -1
}

console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4
console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1
console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2
console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1

module.exports = sortedFrequency