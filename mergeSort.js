// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.

function mergeSort(array) {
  // how do you know how many elements are in the array? check length
  let lengthOfArray = array.length
  
  // base case - when there ia only one number in the divided array return the array.
  if (lengthOfArray <= 1) {
    return array;
  } else {
    // while length of array is > 1, split the array into 2. 
    const middle = Math.floor(lengthOfArray / 2)
    const leftArray = mergeSort(array.slice(0, middle)) //put elements at index 0 to the midpoint in left array
    const rightArray = mergeSort(array.slice(middle)) // put elements from midpoint to end in right array
   return merge(leftArray, rightArray )
  }
}

const merge = (leftArray, rightArray) => {
  const mergedArray = []

  while (leftArray.length > 0 && rightArray.length > 0) {
    const arrayWithLowerNo = leftArray[0] < rightArray[0] ? leftArray : rightArray;
    const mergeElement = arrayWithLowerNo.shift();
    mergedArray.push(mergeElement)
  }
  return mergedArray.concat(leftArray, rightArray) 
}

console.log(mergeSort([6, 7, 3, 1, 19, 66, 45, 76, 55, 30, 14, 17, 22, 0, 24, 32]))

console.log(mergeSort([]))

// Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same function!).