// create a function fibs
// function takes in a number
function fibs(num) {
  let array = []
// array length is the number of the function parameter

for (let i = 0; i < num; i++ ) {
  if (i === 0 || i === 1){
    array.push(i);
    // each number in the array is a sum of the previous 2 numbers.
  } else {

    // i here represents the index of current number i - 1 gives the index of the value before and i - 2 gives the index of 2 values before i.
  let addNo = array[i - 1] + array[i - 2];
  array.push(addNo)
  
  }
}

// when function is run, it returns an array
return array
}

// console.log(fibs(8))

function fibsRec(num) {
  if (num < 2) {
    return num
  } else {
    return (fibsRec(num - 1) + fibsRec(num - 2))
  }
}

console.log(fibsRec(11))

function fibsRec2(num) {
  if (num === 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else {
    let prevFibs = fibs(num - 1);
    let newFib = prevFibs[num - 2] + prevFibs[num - 3];
    return [...prevFibs, newFib];
  }
}

console.log(fibsRec2(11))