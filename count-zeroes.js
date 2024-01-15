function countZeroes(arr) {

  // Given an array of 1s and 0s which has all 1s first followed by all 0s, 
  // Write a function called ***countZeroes***, which returns the number of zeroes in the array.
  // Constraints:
  // Time Complexity: O(log N)

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
  
    //end-case: all are 1s
    if(arr[rightIdx] == 1){
      return 0;
    }

    //beginning case: all are 0s
    if(arr[leftIdx] == 0){
      return arr.length;
    }
  
    //use binary search to find the "1, 0" pair location
    while (leftIdx <= rightIdx) {
        
      // find the middle value
      let middleIdx = Math.floor((leftIdx + rightIdx + 1) / 2);
      let middleVal = arr[middleIdx];

      if (middleVal == 0) {
        //if middle value is 0, look to the left side
        rightIdx = middleIdx - 1;
      } else if (middleVal == 1 && arr[middleIdx+1] == 0){
        //if middle value is 1 & next value is 0, return the answer
        return arr.length - middleIdx - 1;
      } else if (middleVal == 1) {
        //if middle value is 1, look at the right half
        leftIdx = middleIdx + 1;
      }
    } 
  }

console.log(countZeroes([1,1,1,1,0,0])) // 2
console.log(countZeroes([1,0,0,0,0])) // 4
console.log(countZeroes([0,0,0])) // 3
console.log(countZeroes([1,1,1,1])) // 0

module.exports = countZeroes
